"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import Beaker from "./Beaker";
import ScrollLights from "./ScrollLights";

function CameraRig({ scrollProgress }: { scrollProgress: number }) {
  useFrame(({ camera }) => {
    camera.position.y = 1.5 + Math.sin(scrollProgress * Math.PI) * 0.3;
    camera.lookAt(0, 0.8, 0);
  });
  return null;
}

function BeakerGroup({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollProgress * Math.PI * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <Beaker />
    </group>
  );
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#0a0a0a" roughness={0.8} metalness={0.2} />
    </mesh>
  );
}

export default function Scene() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable > 0) {
      setScrollProgress(window.scrollY / scrollable);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 1.5, 6], fov: 35, near: 0.1, far: 100 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#0a0a0a"]} />
        <Environment preset="night" background={false} />
        <CameraRig scrollProgress={scrollProgress} />
        <ScrollLights scrollProgress={scrollProgress} />
        <BeakerGroup scrollProgress={scrollProgress} />
        <Floor />
      </Canvas>
    </div>
  );
}
