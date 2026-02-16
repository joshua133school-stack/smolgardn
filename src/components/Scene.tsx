"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  AccumulativeShadows,
  RandomizedLight,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Vignette,
  SSAO,
  ToneMapping,
} from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import { GlassDome, SoilGround, BasePlate, DustMotes } from "./Terrarium";
import Grass, { GrassGround } from "./Grass";

/* ─── Post-processing stack ──────────────────────────────────── */
function Effects() {
  return (
    <EffectComposer multisampling={4}>
      <SSAO
        radius={0.12}
        intensity={2.5}
        luminanceInfluence={0.4}
        worldDistanceThreshold={8}
        worldDistanceFalloff={2}
        worldProximityThreshold={0.4}
        worldProximityFalloff={0.2}
      />
      <Bloom
        intensity={0.3}
        luminanceThreshold={0.8}
        luminanceSmoothing={0.4}
        mipmapBlur
      />
      <Vignette offset={0.3} darkness={0.6} />
      <ToneMapping mode={ToneMappingMode.AGX} />
    </EffectComposer>
  );
}

/* ─── Main scene ─────────────────────────────────────────────── */
export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [2.2, 1.6, 2.2], fov: 38, near: 0.01, far: 100 }}
        shadows
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        style={{ background: "#f5f0eb" }}
        dpr={[1, 2]}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0.5, 0);
        }}
      >
        {/* HDR environment for realistic reflections & ambient light */}
        <Environment preset="forest" environmentIntensity={0.4} />

        {/* Key light — warm sun */}
        <directionalLight
          color="#fff5e0"
          intensity={2.5}
          position={[4, 8, 3]}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-left={-4}
          shadow-camera-right={4}
          shadow-camera-top={4}
          shadow-camera-bottom={-4}
          shadow-bias={-0.0004}
        />

        {/* Fill light — cool blue */}
        <directionalLight
          color="#b0c4de"
          intensity={0.6}
          position={[-3, 5, -2]}
        />

        {/* Rim light */}
        <directionalLight
          color="#ffeedd"
          intensity={0.8}
          position={[-2, 3, 5]}
        />

        {/* Ambient fill */}
        <ambientLight color="#e8e0d8" intensity={0.3} />

        {/* Contact shadows on the ground plane */}
        <ContactShadows
          position={[0, -0.07, 0]}
          opacity={0.5}
          scale={6}
          blur={2.5}
          far={4}
          color="#2a1f14"
        />

        {/* Soft accumulated shadows under the terrarium */}
        <AccumulativeShadows
          temporal
          frames={60}
          alphaTest={0.65}
          opacity={0.8}
          scale={6}
          position={[0, -0.07, 0]}
          color="#2a1f14"
        >
          <RandomizedLight
            amount={8}
            radius={4}
            ambient={0.5}
            intensity={1}
            position={[4, 8, 3]}
            bias={0.001}
          />
        </AccumulativeShadows>

        {/* Terrarium composition */}
        <Suspense fallback={null}>
          <group>
            {/* 80k procedural grass blades with custom shaders */}
            <Grass count={80000} radius={1.4} windStrength={0.15} />

            {/* Dark earth ground beneath the grass */}
            <GrassGround />

            {/* Soil ground (visible at edges) */}
            <SoilGround />

            {/* Wooden base plate */}
            <BasePlate />

            {/* Glass dome */}
            <GlassDome />

            {/* Floating dust / pollen particles */}
            <DustMotes />
          </group>
        </Suspense>

        {/* Post-processing */}
        <Effects />

        {/* Camera controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={2}
          maxDistance={10}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.2}
          target={[0, 0.5, 0]}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
