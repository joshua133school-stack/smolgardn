"use client";

import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

/* ─────────────────────────────────────────────────────────────────
 *  GLSL — Vertex shader
 *  Each grass blade is a tapered quad (6 segments = 12 tris).
 *  Per-instance attributes drive position, rotation, height,
 *  lean, width, and color variation. Wind is computed from
 *  world-space position + time.
 * ───────────────────────────────────────────────────────────────── */
const vertexShader = /* glsl */ `
  precision highp float;

  // Per-instance attributes
  attribute vec3  instanceOffset;   // XZ position on the ground plane
  attribute float instanceRotation; // Y-axis rotation
  attribute float instanceHeight;   // blade height
  attribute float instanceWidth;    // blade width
  attribute float instanceLean;     // how much the blade leans
  attribute float instancePhase;    // random phase for wind
  attribute float instanceColorVar; // subtle hue shift per blade

  uniform float uTime;
  uniform float uWindStrength;
  uniform float uTurbulence;
  uniform float uBladeWidth;

  varying float vHeight;       // 0 at base, 1 at tip
  varying float vColorVar;
  varying vec3  vWorldNormal;
  varying vec3  vWorldPos;
  varying float vAO;

  // Simple 2D rotation
  mat2 rot2(float a) {
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c);
  }

  // Value noise for spatially-varying wind
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
    // Normalised height along the blade (position.y goes 0→1 in our geometry)
    float t = position.y;
    vHeight = t;
    vColorVar = instanceColorVar;

    // ─── Wind ───────────────────────────────────────
    vec2 worldXZ = instanceOffset.xz;
    float windNoise  = noise(worldXZ * 0.4 + uTime * 0.3);
    float windNoise2 = noise(worldXZ * 1.2 - uTime * 0.5);
    float turbNoise  = noise(worldXZ * 2.5 + uTime * 0.8) * uTurbulence;
    float windAngle  = windNoise * 6.2831;
    float windPower  = (0.5 + 0.5 * windNoise2 + turbNoise) * uWindStrength;

    // Bend increases with height² (base stays rooted)
    float bend = t * t * windPower;
    vec3 windDisp = vec3(cos(windAngle), 0.0, sin(windAngle)) * bend;

    // Additional per-blade gust flutter (scaled by turbulence)
    float flutter = sin(uTime * 3.5 + instancePhase * 6.2831) * (0.04 + uTurbulence * 0.06) * t * t;

    // ─── Build blade in local space ────────────────
    // X is width, Y is height — blade width driven by uniform
    float w = uBladeWidth * instanceWidth * (1.0 - t * 0.85); // taper toward tip
    vec3 localPos = vec3(position.x * w, position.y * instanceHeight, 0.0);

    // Apply lean (a static forward-tilt curve)
    float leanBend = instanceLean * t * t;
    localPos.z += leanBend * instanceHeight;

    // Rotate blade around Y axis
    localPos.xz = rot2(instanceRotation) * localPos.xz;

    // ─── Normal (approximate) ──────────────────────
    vec3 localNormal = normal;
    localNormal.xz = rot2(instanceRotation) * localNormal.xz;
    vWorldNormal = normalize(normalMatrix * localNormal);

    // Final world position
    vec3 worldPos = localPos + instanceOffset + windDisp;
    worldPos.x += flutter;
    vWorldPos = worldPos;

    // AO — darker at the base
    vAO = smoothstep(0.0, 0.35, t);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(worldPos, 1.0);
  }
`;

/* ─────────────────────────────────────────────────────────────────
 *  GLSL — Fragment shader
 *  Realistic grass shading with:
 *  - Base-to-tip color gradient
 *  - Subsurface scattering approximation
 *  - Specular highlight (anisotropic-ish)
 *  - Ambient occlusion at base
 *  - Per-blade color variation
 * ───────────────────────────────────────────────────────────────── */
const fragmentShader = /* glsl */ `
  precision highp float;

  uniform vec3  uBaseColor;      // dark green at root
  uniform vec3  uTipColor;       // bright green/yellow at tip
  uniform vec3  uSSSColor;       // subsurface / translucency tint
  uniform vec3  uSunDir;         // main light direction (normalised)
  uniform vec3  uSunColor;
  uniform float uTime;

  varying float vHeight;
  varying float vColorVar;
  varying vec3  vWorldNormal;
  varying vec3  vWorldPos;
  varying float vAO;

  void main() {
    vec3 N = normalize(vWorldNormal);
    vec3 L = normalize(uSunDir);
    vec3 V = normalize(cameraPosition - vWorldPos);
    vec3 H = normalize(L + V);

    // ─── Base → tip gradient ───────────────────────
    float t = vHeight;
    vec3 grassColor = mix(uBaseColor, uTipColor, smoothstep(0.0, 1.0, t));

    // Per-blade hue variation (shift toward yellow or blue-green)
    grassColor += (vColorVar - 0.5) * vec3(0.04, 0.06, -0.02);

    // ─── Lambertian diffuse ────────────────────────
    float NdotL = max(dot(N, L), 0.0);
    float diffuse = NdotL * 0.7 + 0.3; // wrapped diffuse for softness

    // ─── Subsurface scattering (light through blade) ─
    float sss = pow(max(dot(-V, L), 0.0), 3.0) * 0.6;
    sss *= smoothstep(0.0, 0.6, t); // stronger toward tip (thinner)

    // ─── Specular (anisotropic approximation) ──────
    float spec = pow(max(dot(N, H), 0.0), 40.0) * 0.35;
    spec *= smoothstep(0.2, 0.8, t); // no spec at occluded base

    // ─── Compose ───────────────────────────────────
    vec3 color = grassColor * diffuse * uSunColor;
    color += uSSSColor * sss;
    color += uSunColor * spec;

    // AO at the base
    color *= mix(0.25, 1.0, vAO);

    // Slight warm tint in lower region (soil reflection)
    color += vec3(0.02, 0.01, 0.0) * (1.0 - t) * (1.0 - t);

    gl_FragColor = vec4(color, 1.0);
  }
`;

/* ─────────────────────────────────────────────────────────────────
 *  React component
 * ───────────────────────────────────────────────────────────────── */
const BLADE_SEGMENTS = 6; // vertical segments per blade
const BLADE_VERTICES = (BLADE_SEGMENTS + 1) * 2; // 2 verts per row

function makeBladeGeometry(): THREE.BufferGeometry {
  const geo = new THREE.BufferGeometry();

  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];

  for (let i = 0; i <= BLADE_SEGMENTS; i++) {
    const t = i / BLADE_SEGMENTS; // 0 at base, 1 at tip
    // Two vertices per row: left (-0.5) and right (+0.5)
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
      // Distribute in a circle with density falloff at edges
      const angle = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * radius;
      offsets[i * 3] = Math.cos(angle) * r;
      offsets[i * 3 + 1] = 0;
      offsets[i * 3 + 2] = Math.sin(angle) * r;

      rotations[i] = Math.random() * Math.PI * 2;
      heights[i] = 0.15 + Math.random() * 0.3; // 0.15 – 0.45 units
      widths[i] = 0.6 + Math.random() * 0.8; // relative multiplier
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

    return { geometry: geo };
  }, [count, radius]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uWindStrength: { value: windStrength },
      uTurbulence: { value: turbulence },
      uBladeWidth: { value: bladeWidth },
      uBaseColor: { value: new THREE.Color(rootColor) },
      uTipColor: { value: new THREE.Color(tipColor) },
      uSSSColor: { value: new THREE.Color("#8ec44c") },
      uSunDir: { value: new THREE.Vector3(...sunDir).normalize() },
      uSunColor: { value: new THREE.Color("#fff5e0") },
    }),
    // Only create once — we update in useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // Update uniforms reactively when props change
  useEffect(() => {
    uniforms.uWindStrength.value = windStrength;
    uniforms.uTurbulence.value = turbulence;
    uniforms.uBladeWidth.value = bladeWidth;
    uniforms.uBaseColor.value.set(rootColor);
    uniforms.uTipColor.value.set(tipColor);
    uniforms.uSunDir.value.set(...sunDir).normalize();
  }, [uniforms, windStrength, turbulence, bladeWidth, rootColor, tipColor, sunDir]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material as THREE.ShaderMaterial;
    mat.uniforms.uTime.value += delta;
  });

  return (
    <mesh ref={meshRef} frustumCulled={false}>
      <primitive object={geometry} attach="geometry" />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
        depthWrite
        depthTest
      />
    </mesh>
  );
}

/* ─── Ground plane beneath the grass ─────────────────────────── */
export function GrassGround({ radius = 1.25 }: { radius?: number }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.005, 0]} receiveShadow>
      <circleGeometry args={[radius, 64]} />
      <meshStandardMaterial color="#1a2e10" roughness={1} metalness={0} />
    </mesh>
  );
}
