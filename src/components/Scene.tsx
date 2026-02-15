"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import Plant from "./Plant";

function AutoRotate() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Plant />
      </Float>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 40, near: 0.1, far: 100 }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <Environment preset="city" background={false} />

        {/* Soft, natural lighting */}
        <ambientLight color="#ffffff" intensity={0.6} />
        <directionalLight
          color="#fffaf0"
          intensity={1.8}
          position={[5, 8, 3]}
          castShadow={false}
        />
        <directionalLight
          color="#e8f0ff"
          intensity={0.5}
          position={[-3, 4, -2]}
        />
        <pointLight
          color="#d4ffda"
          intensity={0.8}
          position={[0, 3, 2]}
          distance={10}
        />

        <AutoRotate />
      </Canvas>
    </div>
  );
}
