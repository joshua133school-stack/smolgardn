"use client";

import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { terrainHeight } from "./Grass";

/* ─────────────────────────────────────────────────────────────────
 *  GLSL — Vertex shader (wheat stalks)
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

    // ─── Wind (slower, heavier sway for wheat) ──────
    vec2 worldXZ = instanceOffset.xz;
    float windNoise  = noise(worldXZ * 0.3 + uTime * 0.2);
    float windNoise2 = noise(worldXZ * 0.8 - uTime * 0.35);
    float turbNoise  = noise(worldXZ * 2.0 + uTime * 0.6) * uTurbulence;
    float windAngle  = windNoise * 6.2831;
    float windPower  = (0.5 + 0.5 * windNoise2 + turbNoise) * uWindStrength;

    // Wheat bends more heavily at the top
    float bend = t * t * t * windPower * 1.3;
    vec3 windDisp = vec3(cos(windAngle), 0.0, sin(windAngle)) * bend;

    float flutter = sin(uTime * 2.0 + instancePhase * 6.2831)
                  * (0.02 + uTurbulence * 0.04) * t * t;

    // ─── Build stalk in local space ─────────────────
    // Wheat stalks are thinner at base, widen slightly at seed head (t > 0.8)
    float headBulge = smoothstep(0.75, 0.9, t) * (1.0 - smoothstep(0.9, 1.0, t));
    float w = uBladeWidth * instanceWidth * (0.4 + 0.6 * (1.0 - t * 0.5) + headBulge * 1.8);
    vec3 localPos = vec3(position.x * w, position.y * growHeight, 0.0);

    // Natural lean
    float leanBend = instanceLean * t * t;
    localPos.z += leanBend * growHeight;

    localPos.xz = rot2(instanceRotation) * localPos.xz;

    // ─── Normal ──────────────────────────────────────
    vec3 localNormal = normal;
    localNormal.xz = rot2(instanceRotation) * localNormal.xz;
    vWorldNormal = normalize(normalMatrix * localNormal);

    vec3 worldPos = localPos + instanceOffset + windDisp;
    worldPos.x += flutter;
    vWorldPos = worldPos;

    vAO = smoothstep(0.0, 0.35, t);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(worldPos, 1.0);
  }
`;

/* ─────────────────────────────────────────────────────────────────
 *  GLSL — Fragment shader (wheat stalks — golden tones)
 * ───────────────────────────────────────────────────────────────── */
const fragmentShader = /* glsl */ `
  precision highp float;

  uniform vec3  uBaseColor;
  uniform vec3  uTipColor;
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
    // Fade out when not grown
    if (uGrowth < 0.01) discard;

    vec3 N = normalize(vWorldNormal);
    vec3 L = normalize(uSunDir);
    vec3 V = normalize(cameraPosition - vWorldPos);
    vec3 H = normalize(L + V);

    float t = vHeight;

    // Golden wheat gradient — darker stalk, golden-white seed head
    vec3 stalkColor = mix(uBaseColor, uTipColor, smoothstep(0.0, 0.75, t));
    // Seed head gets brighter / whiter
    vec3 headColor = mix(uTipColor, vec3(0.95, 0.88, 0.65), smoothstep(0.75, 1.0, t));
    vec3 wheatColor = mix(stalkColor, headColor, smoothstep(0.7, 0.85, t));
    wheatColor += (vColorVar - 0.5) * vec3(0.05, 0.03, -0.02);

    float NdotL = max(dot(N, L), 0.0);
    float diffuse = NdotL * 0.7 + 0.3;

    // Subtle SSS for wheat
    float sss = pow(max(dot(-V, L), 0.0), 4.0) * 0.3;
    sss *= smoothstep(0.0, 0.6, t);

    // Sharper spec for glossy seed heads
    float spec = pow(max(dot(N, H), 0.0), 60.0) * 0.4;
    spec *= smoothstep(0.5, 0.9, t);

    vec3 color = wheatColor * diffuse * uSunColor * uSunIntensity;
    color += vec3(0.85, 0.7, 0.3) * sss * uSunIntensity;
    color += uSunColor * spec * uSunIntensity;

    color *= mix(0.75, 1.0, vAO);
    color += wheatColor * 0.25;

    // Fade alpha during grow-in
    float alpha = smoothstep(0.0, 0.15, uGrowth);

    gl_FragColor = vec4(color, alpha);
  }
`;

/* ─────────────────────────────────────────────────────────────────
 *  React — Wheat component
 * ───────────────────────────────────────────────────────────────── */
const BLADE_SEGMENTS = 8; // more segments for the curved wheat stalk

function makeWheatGeometry(): THREE.InstancedBufferGeometry {
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

interface WheatProps {
  count?: number;
  radius?: number;
  windStrength?: number;
  turbulence?: number;
  sunDir?: [number, number, number];
  sunIntensity?: number;
  growth: number; // 0..1 — animated externally
}

export default function Wheat({
  count = 35000,
  radius = 1.2,
  windStrength = 0.15,
  turbulence = 0.3,
  sunDir = [4, 8, 3],
  sunIntensity = 2.0,
  growth,
}: WheatProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const { geometry } = useMemo(() => {
    const geo = makeWheatGeometry();

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
      offsets[i * 3 + 1] = terrainHeight(x, z);
      offsets[i * 3 + 2] = z;

      rotations[i] = Math.random() * Math.PI * 2;
      // Wheat is taller than grass
      heights[i] = 0.12 + Math.random() * 0.18;
      widths[i] = 0.5 + Math.random() * 0.6;
      leans[i] = (Math.random() - 0.3) * 0.4;
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
      uBladeWidth: { value: 0.018 },
      uGrowth: { value: growth },
      uBaseColor: { value: new THREE.Color("#8B7335") },  // dry golden stalk
      uTipColor: { value: new THREE.Color("#D4A843") },   // warm golden
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
    uniforms.uSunDir.value.set(...sunDir).normalize();
    uniforms.uSunIntensity.value = sunIntensity;
  }, [uniforms, windStrength, turbulence, sunDir, sunIntensity]);

  useEffect(() => {
    uniforms.uGrowth.value = growth;
  }, [uniforms, growth]);

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
