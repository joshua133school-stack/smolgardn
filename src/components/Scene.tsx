"use client";

import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

function CornerCubes() {
  const s = 1; // cube size
  const half = s / 2;

  return (
    <group>
      {/* Red — along X axis */}
      <mesh position={[half, 0, 0]}>
        <boxGeometry args={[s, s, s]} />
        <meshStandardMaterial color="#e63946" roughness={0.35} metalness={0.05} />
      </mesh>

      {/* Green — along Y axis */}
      <mesh position={[0, half, 0]}>
        <boxGeometry args={[s, s, s]} />
        <meshStandardMaterial color="#2a9d4e" roughness={0.35} metalness={0.05} />
      </mesh>

      {/* Blue — along Z axis */}
      <mesh position={[0, 0, half]}>
        <boxGeometry args={[s, s, s]} />
        <meshStandardMaterial color="#457bbd" roughness={0.35} metalness={0.05} />
      </mesh>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [3, 3, 3], fov: 40, near: 0.1, far: 100 }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0, 0);
        }}
      >
        <ambientLight color="#ffffff" intensity={0.6} />
        <directionalLight color="#ffffff" intensity={1.8} position={[5, 8, 4]} />
        <directionalLight color="#c8d8ff" intensity={0.4} position={[-3, 4, -2]} />

        <CornerCubes />
      </Canvas>
    </div>
  );
}
