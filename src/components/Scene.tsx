"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Farm from "./Farm";

function SlowOrbit() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      <Farm />
    </group>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [6, 7, 10], fov: 45, near: 0.1, far: 100 }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.3,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0, 0);
        }}
      >
        {/* Sky-like ambient */}
        <ambientLight color="#f0f4ff" intensity={0.7} />

        {/* Sun */}
        <directionalLight
          color="#fff8e8"
          intensity={2.0}
          position={[8, 12, 4]}
        />

        {/* Fill from opposite side */}
        <directionalLight
          color="#c8d8ff"
          intensity={0.4}
          position={[-5, 6, -3]}
        />

        {/* Warm bounce from ground */}
        <hemisphereLight
          color="#87ceeb"
          groundColor="#4a8c3f"
          intensity={0.5}
        />

        <SlowOrbit />
      </Canvas>
    </div>
  );
}
