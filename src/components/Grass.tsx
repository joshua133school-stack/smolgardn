"use client";

import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

/* ─────────────────────────────────────────────────────────────────
 *  JS-side noise — must match the terrain heightmap exactly so
 *  grass blades sit on the surface.
 * ───────────────────────────────────────────────────────────────── */
function hash2(x: number, y: number): number {
  return ((Math.sin(x * 127.1 + y * 311.7) * 43758.5453123) % 1 + 1) % 1;
}

function valueNoise(px: number, py: number): number {
  const ix = Math.floor(px);
  const iy = Math.floor(py);
  const fx = px - ix;
  const fy = py - iy;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const a = hash2(ix, iy);
  const b = hash2(ix + 1, iy);
  const c = hash2(ix, iy + 1);
  const d = hash2(ix + 1, iy + 1);
  return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
}

/** Terrain height at world (x, z). Gentle rolling hills + micro detail. */
export function terrainHeight(x: number, z: number): number {
  // Large gentle hills
  let h = valueNoise(x * 0.8, z * 0.8) * 0.18;
  // Medium bumps
  h += valueNoise(x * 2.0 + 5.3, z * 2.0 + 3.7) * 0.06;
  // Micro detail
  h += valueNoise(x * 5.0 + 1.1, z * 5.0 + 2.9) * 0.02;
  return h;
}

/* ─────────────────────────────────────────────────────────────────
 *  GLSL — Vertex shader (grass blades)
 * ───────────────────────────────────────────────────────────────── */
const vertexShader = /* glsl */ `
  precision highp float;

  attribute vec3  instanceOffset;
  attribute float instanceRotation;
  attribute float instanceHeight;
  attribute float instanceWidth;
  attribute float instanceLean;
  attribute float instancePhase;
  attribute float instanceColorVar;

  uniform float uTime;
  uniform float uWindStrength;
  uniform float uTurbulence;
  uniform float uBladeWidth;
  uniform float uGrowth;        // 0 = hidden in ground, 1 = fully grown

  varying float vHeight;
  varying float vColorVar;
  varying vec3  vWorldNormal;
  varying vec3  vWorldPos;
  varying float vAO;

  mat2 rot2(float a) {
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c);
  }

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  void main() {
    float t = position.y;
    vHeight = t;
    vColorVar = instanceColorVar;

    // Scale height by growth factor
    float growHeight = instanceHeight * uGrowth;

    // ─── Wind ───────────────────────────────────────
    vec2 worldXZ = instanceOffset.xz;
    float windNoise  = noise(worldXZ * 0.4 + uTime * 0.3);
    float windNoise2 = noise(worldXZ * 1.2 - uTime * 0.5);
    float turbNoise  = noise(worldXZ * 2.5 + uTime * 0.8) * uTurbulence;
    float windAngle  = windNoise * 6.2831;
    float windPower  = (0.5 + 0.5 * windNoise2 + turbNoise) * uWindStrength;

    float bend = t * t * windPower;
    vec3 windDisp = vec3(cos(windAngle), 0.0, sin(windAngle)) * bend;

    float flutter = sin(uTime * 3.5 + instancePhase * 6.2831)
                  * (0.04 + uTurbulence * 0.06) * t * t;

    // ─── Build blade in local space ────────────────
    float w = uBladeWidth * instanceWidth * (1.0 - t * 0.85);
    vec3 localPos = vec3(position.x * w, position.y * growHeight, 0.0);

    float leanBend = instanceLean * t * t;
    localPos.z += leanBend * growHeight;

    localPos.xz = rot2(instanceRotation) * localPos.xz;

    // ─── Normal ────────────────────────────────────
    vec3 localNormal = normal;
    localNormal.xz = rot2(instanceRotation) * localNormal.xz;
    vWorldNormal = normalize(normalMatrix * localNormal);

    // instanceOffset.y already contains the terrain height (set in JS)
    vec3 worldPos = localPos + instanceOffset + windDisp;
    worldPos.x += flutter;
    vWorldPos = worldPos;

    vAO = smoothstep(0.0, 0.35, t);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(worldPos, 1.0);
  }
`;

/* ─────────────────────────────────────────────────────────────────
 *  GLSL — Fragment shader (grass blades)
 * ───────────────────────────────────────────────────────────────── */
const fragmentShader = /* glsl */ `
  precision highp float;

  uniform vec3  uBaseColor;
  uniform vec3  uTipColor;
  uniform vec3  uSSSColor;
  uniform vec3  uSunDir;
  uniform vec3  uSunColor;
  uniform float uSunIntensity;
  uniform float uTime;
  uniform float uGrowth;

  varying float vHeight;
  varying float vColorVar;
  varying vec3  vWorldNormal;
  varying vec3  vWorldPos;
  varying float vAO;

  void main() {
    if (uGrowth < 0.01) discard;

    vec3 N = normalize(vWorldNormal);
    vec3 L = normalize(uSunDir);
    vec3 V = normalize(cameraPosition - vWorldPos);
    vec3 H = normalize(L + V);

    float t = vHeight;
    vec3 grassColor = mix(uBaseColor, uTipColor, smoothstep(0.0, 1.0, t));
    grassColor += (vColorVar - 0.5) * vec3(0.04, 0.06, -0.02);

    float NdotL = max(dot(N, L), 0.0);
    float diffuse = NdotL * 0.7 + 0.3;

    float sss = pow(max(dot(-V, L), 0.0), 3.0) * 0.6;
    sss *= smoothstep(0.0, 0.6, t);

    float spec = pow(max(dot(N, H), 0.0), 40.0) * 0.35;
    spec *= smoothstep(0.2, 0.8, t);

    // Apply sun intensity to all lighting terms
    vec3 color = grassColor * diffuse * uSunColor * uSunIntensity;
    color += uSSSColor * sss * uSunIntensity;
    color += uSunColor * spec * uSunIntensity;

    // Very gentle AO — just a hint of darkening at the root
    color *= mix(0.75, 1.0, vAO);

    // Strong ambient fill so light reaches the base
    color += grassColor * 0.3;

    float alpha = smoothstep(0.0, 0.15, uGrowth);
    gl_FragColor = vec4(color, alpha);
  }
`;

/* ─────────────────────────────────────────────────────────────────
 *  GLSL — Terrain dirt shader
 * ───────────────────────────────────────────────────────────────── */
const terrainVertexShader = /* glsl */ `
  varying vec3 vWorldPos;
  varying vec3 vNormal;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const terrainFragmentShader = /* glsl */ `
  precision highp float;

  uniform vec3  uSunDir;
  uniform vec3  uSunColor;
  uniform float uSunIntensity;

  varying vec3 vWorldPos;
  varying vec3 vNormal;

  // Noise for dirt variation
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  void main() {
    vec3 N = normalize(vNormal);
    vec3 L = normalize(uSunDir);

    vec2 xz = vWorldPos.xz;

    // ─── Dirt base color with variation ────────────
    vec3 dirtDark  = vec3(0.22, 0.14, 0.08);  // rich dark soil
    vec3 dirtMid   = vec3(0.35, 0.22, 0.12);  // medium brown
    vec3 dirtLight = vec3(0.45, 0.32, 0.18);  // sandy highlights

    float n1 = noise(xz * 3.0);
    float n2 = noise(xz * 8.0 + 5.0);
    float n3 = noise(xz * 20.0 + 10.0);        // fine grain

    // Blend between soil tones
    vec3 dirt = mix(dirtDark, dirtMid, smoothstep(0.3, 0.7, n1));
    dirt = mix(dirt, dirtLight, smoothstep(0.5, 0.9, n2) * 0.4);

    // Fine speckle (pebbles / gravel)
    float speckle = smoothstep(0.65, 0.72, n3);
    dirt = mix(dirt, dirtLight * 1.2, speckle * 0.3);

    // Darker in low areas (moisture)
    float heightFactor = smoothstep(-0.02, 0.15, vWorldPos.y);
    dirt = mix(dirt * 0.7, dirt, heightFactor);

    // ─── Lighting ──────────────────────────────────
    float NdotL = max(dot(N, L), 0.0);
    float diffuse = NdotL * 0.6 + 0.4;  // wrapped

    vec3 color = dirt * diffuse * uSunColor * uSunIntensity;

    // Ambient fill
    color += dirt * vec3(0.12, 0.10, 0.07);

    gl_FragColor = vec4(color, 1.0);
  }
`;

/* ─────────────────────────────────────────────────────────────────
 *  React — Grass component
 * ───────────────────────────────────────────────────────────────── */
const BLADE_SEGMENTS = 6;

function makeBladeGeometry(): THREE.InstancedBufferGeometry {
  const geo = new THREE.InstancedBufferGeometry();
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];

  for (let i = 0; i <= BLADE_SEGMENTS; i++) {
    const t = i / BLADE_SEGMENTS;
    positions.push(-0.5, t, 0);
    positions.push(0.5, t, 0);
    normals.push(0, 0, 1);
    normals.push(0, 0, 1);
  }

  for (let i = 0; i < BLADE_SEGMENTS; i++) {
    const a = i * 2;
    const b = a + 1;
    const c = a + 2;
    const d = a + 3;
    indices.push(a, c, b);
    indices.push(b, c, d);
  }

  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  geo.setIndex(indices);
  return geo;
}

interface GrassProps {
  count?: number;
  radius?: number;
  windStrength?: number;
  turbulence?: number;
  bladeWidth?: number;
  rootColor?: string;
  tipColor?: string;
  sunDir?: [number, number, number];
  sunIntensity?: number;
  growth?: number;
}

export default function Grass({
  count = 50000,
  radius = 1.2,
  windStrength = 0.15,
  turbulence = 0.3,
  bladeWidth = 0.012,
  rootColor = "#1a3a0a",
  tipColor = "#6db33f",
  sunDir = [4, 8, 3],
  sunIntensity = 2.0,
  growth = 1.0,
}: GrassProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const { geometry } = useMemo(() => {
    const geo = makeBladeGeometry();

    const offsets = new Float32Array(count * 3);
    const rotations = new Float32Array(count);
    const heights = new Float32Array(count);
    const widths = new Float32Array(count);
    const leans = new Float32Array(count);
    const phases = new Float32Array(count);
    const colorVars = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * radius;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;

      offsets[i * 3] = x;
      offsets[i * 3 + 1] = terrainHeight(x, z); // Y follows terrain
      offsets[i * 3 + 2] = z;

      rotations[i] = Math.random() * Math.PI * 2;
      heights[i] = 0.05 + Math.random() * 0.12;
      widths[i] = 0.6 + Math.random() * 0.8;
      leans[i] = (Math.random() - 0.3) * 0.6;
      phases[i] = Math.random();
      colorVars[i] = Math.random();
    }

    geo.setAttribute("instanceOffset", new THREE.InstancedBufferAttribute(offsets, 3));
    geo.setAttribute("instanceRotation", new THREE.InstancedBufferAttribute(rotations, 1));
    geo.setAttribute("instanceHeight", new THREE.InstancedBufferAttribute(heights, 1));
    geo.setAttribute("instanceWidth", new THREE.InstancedBufferAttribute(widths, 1));
    geo.setAttribute("instanceLean", new THREE.InstancedBufferAttribute(leans, 1));
    geo.setAttribute("instancePhase", new THREE.InstancedBufferAttribute(phases, 1));
    geo.setAttribute("instanceColorVar", new THREE.InstancedBufferAttribute(colorVars, 1));

    geo.instanceCount = count;

    return { geometry: geo };
  }, [count, radius]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uWindStrength: { value: windStrength },
      uTurbulence: { value: turbulence },
      uBladeWidth: { value: bladeWidth },
      uGrowth: { value: growth },
      uBaseColor: { value: new THREE.Color(rootColor) },
      uTipColor: { value: new THREE.Color(tipColor) },
      uSSSColor: { value: new THREE.Color("#8ec44c") },
      uSunDir: { value: new THREE.Vector3(...sunDir).normalize() },
      uSunColor: { value: new THREE.Color("#fff5e0") },
      uSunIntensity: { value: sunIntensity },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    uniforms.uWindStrength.value = windStrength;
    uniforms.uTurbulence.value = turbulence;
    uniforms.uBladeWidth.value = bladeWidth;
    uniforms.uGrowth.value = growth;
    uniforms.uBaseColor.value.set(rootColor);
    uniforms.uTipColor.value.set(tipColor);
    uniforms.uSunDir.value.set(...sunDir).normalize();
    uniforms.uSunIntensity.value = sunIntensity;
  }, [uniforms, windStrength, turbulence, bladeWidth, growth, rootColor, tipColor, sunDir, sunIntensity]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material as THREE.ShaderMaterial;
    mat.uniforms.uTime.value += delta;
  });

  if (growth < 0.001) return null;

  return (
    <mesh ref={meshRef} frustumCulled={false}>
      <primitive object={geometry} attach="geometry" />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
        transparent
        depthWrite
        depthTest
      />
    </mesh>
  );
}

/* ─────────────────────────────────────────────────────────────────
 *  React — Terrain disc (dirt ground with hills)
 * ───────────────────────────────────────────────────────────────── */
const TERRAIN_SEGMENTS = 64;

export function TerrainGround({
  radius = 1.25,
  sunDir = [4, 8, 3] as [number, number, number],
  sunIntensity = 2.0,
}: {
  radius?: number;
  sunDir?: [number, number, number];
  sunIntensity?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.CircleGeometry(radius, TERRAIN_SEGMENTS, 0, Math.PI * 2);

    // Rotate to XZ plane (CircleGeometry lies in XY by default)
    geo.rotateX(-Math.PI / 2);

    // Displace Y with terrain noise
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      pos.setY(i, terrainHeight(x, z));
    }

    geo.computeVertexNormals();
    return geo;
  }, [radius]);

  const uniforms = useMemo(
    () => ({
      uSunDir: { value: new THREE.Vector3(...sunDir).normalize() },
      uSunColor: { value: new THREE.Color("#fff5e0") },
      uSunIntensity: { value: sunIntensity },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    uniforms.uSunDir.value.set(...sunDir).normalize();
    uniforms.uSunIntensity.value = sunIntensity;
  }, [uniforms, sunDir, sunIntensity]);

  return (
    <mesh ref={meshRef} geometry={geometry} receiveShadow>
      <shaderMaterial
        vertexShader={terrainVertexShader}
        fragmentShader={terrainFragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
