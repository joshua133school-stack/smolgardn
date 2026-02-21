"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Grass, { TerrainGround } from "./Grass";
import Wheat from "./Wheat";
import Cow from "./Cow";
import type { GrassParams } from "./GrassControls";
import type { VegetationMode } from "./SceneLoader";

/* ─── Convert azimuth/elevation to a direction vector ──────── */
function sunDirection(azimuthDeg: number, elevationDeg: number): [number, number, number] {
  const az = (azimuthDeg * Math.PI) / 180;
  const el = (elevationDeg * Math.PI) / 180;
  return [Math.cos(el) * Math.sin(az), Math.sin(el), Math.cos(el) * Math.cos(az)];
}

/* ─── Animated vegetation transition ────────────────────────── */
function VegetationLayer({
  params,
  sunDir,
  sunIntensity,
  vegetation,
}: {
  params: GrassParams;
  sunDir: [number, number, number];
  sunIntensity: number;
  vegetation: VegetationMode;
}) {
  const grassGrowth = useRef(1);
  const wheatGrowth = useRef(0);

  useFrame((_, delta) => {
    const speed = 1.2; // transition speed
    if (vegetation === "wheat") {
      // Grass retreats first, then wheat grows
      grassGrowth.current = Math.max(0, grassGrowth.current - delta * speed);
      // Wheat starts growing once grass is mostly gone
      if (grassGrowth.current < 0.3) {
        wheatGrowth.current = Math.min(1, wheatGrowth.current + delta * speed);
      }
    } else {
      // Reverse: wheat retreats, grass grows back
      wheatGrowth.current = Math.max(0, wheatGrowth.current - delta * speed);
      if (wheatGrowth.current < 0.3) {
        grassGrowth.current = Math.min(1, grassGrowth.current + delta * speed);
      }
    }
  });

  return (
    <>
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
        growth={grassGrowth.current}
      />
      <Wheat
        count={35000}
        radius={1.2}
        windStrength={params.windSpeed}
        turbulence={params.turbulence}
        sunDir={sunDir}
        sunIntensity={sunIntensity}
        growth={wheatGrowth.current}
      />
    </>
  );
}

/* ─── Main scene ─────────────────────────────────────────────── */
export default function Scene({
  params,
  vegetation = "grass",
}: {
  params: GrassParams;
  vegetation?: VegetationMode;
}) {
  const sunDir = sunDirection(params.sunAzimuth, params.sunElevation);
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
        dpr={[1, 1.5]}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0.1, 0);
        }}
      >
        <color attach="background" args={["#ffffff"]} />

        <ambientLight intensity={0.5} color="#fff5e0" />
        <directionalLight position={sunDir} intensity={1.2} color="#fff5e0" />

        <Suspense fallback={null}>
          <VegetationLayer
            params={params}
            sunDir={sunDir}
            sunIntensity={sunIntensity}
            vegetation={vegetation}
          />
          <TerrainGround radius={1.25} sunDir={sunDir} sunIntensity={sunIntensity} />
          <Cow />
        </Suspense>

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
