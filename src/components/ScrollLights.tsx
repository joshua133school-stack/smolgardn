"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ScrollLightsProps {
  scrollProgress: number;
}

export default function ScrollLights({ scrollProgress }: ScrollLightsProps) {
  const keyLightRef = useRef<THREE.PointLight>(null);
  const rimLightRef = useRef<THREE.PointLight>(null);
  const spotRef = useRef<THREE.SpotLight>(null);

  useFrame(() => {
    const t = scrollProgress;
    const angle = t * Math.PI * 4;
    const radius = 4;

    // Key light orbits
    if (keyLightRef.current) {
      keyLightRef.current.position.set(
        Math.cos(angle) * radius,
        2 + Math.sin(t * Math.PI * 2) * 1.5,
        Math.sin(angle) * radius
      );
      keyLightRef.current.intensity = 12 + Math.sin(t * Math.PI * 6) * 5;

      // Color temperature shift
      const warmth = (Math.sin(t * Math.PI * 2) + 1) / 2;
      keyLightRef.current.color.setHSL(
        0.08 * warmth,
        0.1 * warmth,
        0.95 + 0.05 * warmth
      );
    }

    // Spot light follows loosely
    if (spotRef.current) {
      spotRef.current.position.set(
        Math.cos(angle + 0.5) * 3,
        4 + Math.sin(t * Math.PI) * 1,
        Math.sin(angle + 0.5) * 3
      );
    }

    // Rim light counter-rotates
    if (rimLightRef.current) {
      rimLightRef.current.position.set(
        Math.cos(angle + Math.PI) * 3,
        3 + Math.cos(t * Math.PI * 2) * 1,
        Math.sin(angle + Math.PI) * 3
      );
    }
  });

  return (
    <>
      <ambientLight color="#222233" intensity={0.3} />
      <pointLight
        ref={keyLightRef}
        color="#ffffff"
        intensity={15}
        distance={20}
        decay={2}
        position={[3, 3, 3]}
      />
      <pointLight
        color="#8899bb"
        intensity={3}
        distance={15}
        decay={2}
        position={[-2, 1, -2]}
      />
      <pointLight
        ref={rimLightRef}
        color="#aabbff"
        intensity={5}
        distance={15}
        decay={2}
        position={[0, 3, -4]}
      />
      <spotLight
        ref={spotRef}
        color="#ffffff"
        intensity={8}
        distance={12}
        angle={Math.PI / 8}
        penumbra={0.6}
        decay={2}
        position={[2, 4, 2]}
      />
    </>
  );
}
