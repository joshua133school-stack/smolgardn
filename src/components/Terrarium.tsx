"use client";

import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

/* ─── Glass dome ─────────────────────────────────────────────── */
export function GlassDome({
  radius = 1.6,
  height = 2.2,
}: {
  radius?: number;
  height?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Bell-jar / cloche shape: hemisphere on top, cylinder walls
  const domeGeo = useMemo(() => {
    const shape = new THREE.Shape();
    const wallH = height * 0.45;
    const r = radius;

    // right wall bottom-up
    shape.moveTo(r, 0);
    shape.lineTo(r, wallH);
    // dome arc
    shape.absarc(0, wallH, r, 0, Math.PI, false);
    // left wall top-down
    shape.lineTo(-r, 0);

    const geo = new THREE.LatheGeometry(
      shape.getPoints(48),
      64,
      0,
      Math.PI * 2
    );
    return geo;
  }, [radius, height]);

  return (
    <mesh ref={meshRef} geometry={domeGeo} position={[0, 0, 0]}>
      <meshPhysicalMaterial
        transparent
        transmission={0.95}
        roughness={0.05}
        metalness={0}
        ior={1.5}
        thickness={0.4}
        envMapIntensity={1.5}
        clearcoat={1}
        clearcoatRoughness={0.02}
        side={THREE.DoubleSide}
        color="#f8fdf8"
        depthWrite={false}
      />
    </mesh>
  );
}

/* ─── Soil / ground disc ─────────────────────────────────────── */
export function SoilGround({ radius = 1.55 }: { radius?: number }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
      <circleGeometry args={[radius, 64]} />
      <meshStandardMaterial
        color="#3d2b1f"
        roughness={0.95}
        metalness={0}
      />
    </mesh>
  );
}

/* ─── Base plate (wood/stone slab) ───────────────────────────── */
export function BasePlate() {
  return (
    <mesh position={[0, -0.08, 0]} receiveShadow>
      <cylinderGeometry args={[1.8, 1.9, 0.16, 64]} />
      <meshStandardMaterial color="#8b7355" roughness={0.8} metalness={0.05} />
    </mesh>
  );
}

/* ─── Floating dust motes ────────────────────────────────────── */
export function DustMotes({ count = 60 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * 1.2;
      arr[i * 3] = Math.cos(angle) * r;
      arr[i * 3 + 1] = 0.3 + Math.random() * 1.8;
      arr[i * 3 + 2] = Math.sin(angle) * r;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const y = pos.getY(i) + delta * 0.03;
      pos.setY(i, y > 2.2 ? 0.3 : y);
      pos.setX(i, pos.getX(i) + Math.sin(y * 2 + i) * delta * 0.005);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#fffde0"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
