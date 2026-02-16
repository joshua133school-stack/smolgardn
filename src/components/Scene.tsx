"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Center } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/Untitled.glb");
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

// Preload so drei can start fetching as early as possible
useGLTF.preload("/Untitled.glb");

export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [4, 3, 4], fov: 40, near: 0.1, far: 200 }}
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
        <directionalLight color="#ffffff" intensity={1.8} position={[5, 8, 4]} castShadow />
        <directionalLight color="#c8d8ff" intensity={0.4} position={[-3, 4, -2]} />

        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <OrbitControls enablePan={false} enableZoom={true} minDistance={2} maxDistance={20} />
      </Canvas>
    </div>
  );
}
