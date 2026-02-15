"use client";

import { useMemo } from "react";
import * as THREE from "three";

export default function Beaker() {
  const geometry = useMemo(() => {
    const points: THREE.Vector2[] = [];

    // Bottom center to bottom edge (flat bottom)
    points.push(new THREE.Vector2(0.0, 0.0));
    points.push(new THREE.Vector2(0.55, 0.0));

    // Bottom corner with slight radius
    points.push(new THREE.Vector2(0.58, 0.02));
    points.push(new THREE.Vector2(0.60, 0.05));

    // Main body — slight taper outward
    points.push(new THREE.Vector2(0.61, 0.2));
    points.push(new THREE.Vector2(0.63, 0.6));
    points.push(new THREE.Vector2(0.66, 1.0));
    points.push(new THREE.Vector2(0.70, 1.4));
    points.push(new THREE.Vector2(0.73, 1.7));
    points.push(new THREE.Vector2(0.75, 1.9));

    // Lip / rim flare
    points.push(new THREE.Vector2(0.76, 1.95));
    points.push(new THREE.Vector2(0.78, 1.98));
    points.push(new THREE.Vector2(0.80, 2.0));

    // Rolled rim
    points.push(new THREE.Vector2(0.82, 2.02));
    points.push(new THREE.Vector2(0.82, 2.04));
    points.push(new THREE.Vector2(0.80, 2.05));
    points.push(new THREE.Vector2(0.77, 2.04));

    // Inner wall going back down
    points.push(new THREE.Vector2(0.75, 2.02));
    points.push(new THREE.Vector2(0.73, 1.98));
    points.push(new THREE.Vector2(0.71, 1.9));
    points.push(new THREE.Vector2(0.69, 1.7));
    points.push(new THREE.Vector2(0.66, 1.4));
    points.push(new THREE.Vector2(0.63, 1.0));
    points.push(new THREE.Vector2(0.60, 0.6));
    points.push(new THREE.Vector2(0.58, 0.2));

    // Inner bottom
    points.push(new THREE.Vector2(0.56, 0.06));
    points.push(new THREE.Vector2(0.53, 0.04));
    points.push(new THREE.Vector2(0.0, 0.04));

    const geo = new THREE.LatheGeometry(points, 128);
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <group position={[0, -0.3, 0]}>
      {/* Glass body */}
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0}
          roughness={0.03}
          transmission={0.95}
          thickness={0.4}
          ior={1.52}
          envMapIntensity={1.5}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          transparent
          side={THREE.DoubleSide}
          attenuationColor={new THREE.Color(0xeef4ee)}
          attenuationDistance={3.0}
          specularIntensity={1.0}
          specularColor={new THREE.Color(0xffffff)}
        />
      </mesh>

      {/* Graduation marks */}
      {[0.4, 0.8, 1.2, 1.6].map((y) => {
        const t = y / 2.0;
        const radius = 0.6 + t * 0.2;
        return (
          <mesh key={y} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[radius + 0.001, radius + 0.008, 64, 1]} />
            <meshBasicMaterial
              color="#ffffff"
              transparent
              opacity={0.12}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}

      {/* Pour spout */}
      <mesh position={[0, 2.04, 0.8]} rotation={[Math.PI / 2, 0, Math.PI]}>
        <torusGeometry args={[0.08, 0.025, 12, 24, Math.PI]} />
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0}
          roughness={0.05}
          transmission={0.9}
          thickness={0.15}
          ior={1.52}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
