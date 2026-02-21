"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Grass, { TerrainGround } from "./Grass";
import Cow from "./Cow";
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
  // Sun intensity driven by elevation — passed into custom shaders
  const sunIntensity = 1.5 + (params.sunElevation / 90) * 1.0;

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
        <color attach="background" args={["#ffffff"]} />

        {/* Lights for solid-material objects (cow) — custom-shader
            grass/terrain ignore these and compute lighting internally */}
        <ambientLight intensity={0.5} color="#fff5e0" />
        <directionalLight position={sunDir} intensity={1.2} color="#fff5e0" />

        {/* Grass disc — custom shaders handle all lighting internally */}
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
            sunIntensity={sunIntensity}
          />
          <TerrainGround radius={1.25} sunDir={sunDir} sunIntensity={sunIntensity} />
          <Cow />
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
