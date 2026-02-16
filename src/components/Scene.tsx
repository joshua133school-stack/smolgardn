"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Vignette,
  SSAO,
  ToneMapping,
  DepthOfField,
} from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import Grass, { GrassGround } from "./Grass";

/* ─── Post-processing stack ──────────────────────────────────── */
function Effects() {
  return (
    <EffectComposer multisampling={4}>
      <DepthOfField
        focusDistance={0.02}
        focalLength={0.06}
        bokehScale={4}
      />
      <SSAO
        radius={0.08}
        intensity={2}
        luminanceInfluence={0.4}
      />
      <Bloom
        intensity={0.25}
        luminanceThreshold={0.85}
        luminanceSmoothing={0.4}
        mipmapBlur
      />
      <Vignette offset={0.3} darkness={0.55} />
      <ToneMapping mode={ToneMappingMode.AGX} />
    </EffectComposer>
  );
}

/* ─── Main scene ─────────────────────────────────────────────── */
export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0.5, 0.15, 0.7], fov: 50, near: 0.005, far: 50 }}
        shadows
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        style={{ background: "#87CEEB" }}
        dpr={[1, 2]}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0.1, 0);
        }}
      >
        {/* Sky / environment */}
        <Environment preset="forest" environmentIntensity={0.5} background />
        <fog attach="fog" args={["#b0d4a8", 3, 12]} />

        {/* Key light — warm sun */}
        <directionalLight
          color="#fff5e0"
          intensity={3}
          position={[4, 8, 3]}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0004}
        />

        {/* Fill light — cool sky */}
        <directionalLight color="#b0c4de" intensity={0.5} position={[-3, 5, -2]} />

        {/* Ambient */}
        <ambientLight color="#c8dcc0" intensity={0.4} />

        {/* Grass + ground */}
        <Suspense fallback={null}>
          <Grass count={120000} radius={3} windStrength={0.2} />
          <GrassGround radius={3.5} />
        </Suspense>

        {/* Post-processing */}
        <Effects />

        {/* Camera controls — low to the ground */}
        <OrbitControls
          enablePan
          enableZoom
          minDistance={0.3}
          maxDistance={5}
          minPolarAngle={0.2}
          maxPolarAngle={Math.PI / 2.05}
          target={[0, 0.1, 0]}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
