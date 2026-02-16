"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import Grass, { TerrainGround } from "./Grass";
import type { GrassParams } from "./GrassControls";

/* ─── Convert azimuth/elevation to a direction vector ──────── */
function sunDirection(azimuthDeg: number, elevationDeg: number): [number, number, number] {
  const az = (azimuthDeg * Math.PI) / 180;
  const el = (elevationDeg * Math.PI) / 180;
  return [Math.cos(el) * Math.sin(az), Math.sin(el), Math.cos(el) * Math.cos(az)];
}

/* ─── Main scene ─────────────────────────────────────────────── */
export default function Scene({ params }: { params: GrassParams }) {
  const sunDir = sunDirection(params.sunAzimuth, params.sunElevation);
  const sunIntensity = 1.5 + (params.sunElevation / 90) * 1.5;

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [2, 1.8, 2], fov: 40, near: 0.01, far: 50 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0.1, 0);
        }}
      >
        {/* Dark background */}
        <color attach="background" args={["#ffffff"]} />

        {/* Sun — direction driven by controls */}
        <directionalLight
          color="#fffbe8"
          intensity={sunIntensity}
          position={sunDir}
        />

        {/* Fill */}
        <directionalLight color="#1a2a40" intensity={0.4} position={[-3, 5, -2]} />

        {/* Ambient — low for dark scene */}
        <ambientLight color="#1a2030" intensity={0.5} />

        {/* Soft shadow beneath the grass disc */}
        <ContactShadows
          position={[0, -0.01, 0]}
          opacity={0.6}
          scale={6}
          blur={2.5}
          far={4}
          color="#000000"
        />

        {/* Grass disc */}
        <Suspense fallback={null}>
          <Grass
            count={params.density}
            radius={1.2}
            windStrength={params.windSpeed}
            turbulence={params.turbulence}
            bladeWidth={params.bladeWidth}
            rootColor={params.rootColor}
            tipColor={params.tipColor}
            sunDir={sunDir}
          />
          <TerrainGround radius={1.25} sunDir={sunDir} />
        </Suspense>

        {/* Camera controls */}
        <OrbitControls
          enablePan={false}
          enableZoom
          minDistance={1.5}
          maxDistance={8}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.2}
          target={[0, 0.1, 0]}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
