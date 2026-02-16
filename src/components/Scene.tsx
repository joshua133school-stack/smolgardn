"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Grass, { GrassGround } from "./Grass";

/* ─── Main scene ─────────────────────────────────────────────── */
export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0.3, 0.18, 0.6], fov: 55, near: 0.005, far: 50 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        style={{ background: "#5dadec" }}
        dpr={[1, 2]}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0.15, 0);
        }}
      >
        {/* Simple blue sky color via clear color */}
        <color attach="background" args={["#5dadec"]} />

        {/* Sun */}
        <directionalLight
          color="#fffbe8"
          intensity={2.5}
          position={[4, 8, 3]}
        />

        {/* Sky fill */}
        <directionalLight color="#87ceeb" intensity={0.4} position={[-3, 5, -2]} />

        {/* Ambient */}
        <ambientLight color="#ffffff" intensity={0.5} />

        {/* Grass + ground */}
        <Suspense fallback={null}>
          <Grass count={150000} radius={4} windStrength={0.18} />
          <GrassGround radius={5} />
        </Suspense>

        {/* Camera controls */}
        <OrbitControls
          enablePan
          enableZoom
          minDistance={0.2}
          maxDistance={6}
          minPolarAngle={0.3}
          maxPolarAngle={Math.PI / 2.05}
          target={[0, 0.12, 0]}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
