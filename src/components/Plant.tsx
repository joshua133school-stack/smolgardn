"use client";

import { useMemo } from "react";
import * as THREE from "three";

function Leaf({
  position,
  rotation,
  scale = 1,
  color = "#2d8a4e",
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
  color?: string;
}) {
  const leafShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.15, 0.3, 0.3, 0.7, 0.05, 1.2);
    shape.bezierCurveTo(0, 1.3, 0, 1.3, -0.05, 1.2);
    shape.bezierCurveTo(-0.3, 0.7, -0.15, 0.3, 0, 0);
    return shape;
  }, []);

  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <extrudeGeometry
        args={[
          leafShape,
          { depth: 0.02, bevelEnabled: true, bevelSize: 0.01, bevelThickness: 0.005, bevelSegments: 3 },
        ]}
      />
      <meshStandardMaterial
        color={color}
        roughness={0.4}
        metalness={0.05}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Stem({
  start,
  height,
  curve = 0,
  curveDir = 0,
}: {
  start: [number, number, number];
  height: number;
  curve?: number;
  curveDir?: number;
}) {
  const tubeGeo = useMemo(() => {
    const points = [];
    const segments = 12;
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = start[0] + Math.sin(curveDir) * curve * Math.sin(t * Math.PI * 0.7);
      const y = start[1] + t * height;
      const z = start[2] + Math.cos(curveDir) * curve * Math.sin(t * Math.PI * 0.7);
      points.push(new THREE.Vector3(x, y, z));
    }
    const path = new THREE.CatmullRomCurve3(points);
    return new THREE.TubeGeometry(path, 16, 0.025, 8, false);
  }, [start, height, curve, curveDir]);

  return (
    <mesh geometry={tubeGeo}>
      <meshStandardMaterial color="#3a7a3a" roughness={0.6} metalness={0.0} />
    </mesh>
  );
}

function Pot() {
  const potProfile = useMemo(() => {
    const points: THREE.Vector2[] = [];
    // Bottom
    points.push(new THREE.Vector2(0.0, 0.0));
    points.push(new THREE.Vector2(0.3, 0.0));
    // Lower body
    points.push(new THREE.Vector2(0.32, 0.02));
    points.push(new THREE.Vector2(0.34, 0.05));
    // Taper outward
    points.push(new THREE.Vector2(0.38, 0.2));
    points.push(new THREE.Vector2(0.44, 0.5));
    points.push(new THREE.Vector2(0.48, 0.7));
    // Rim
    points.push(new THREE.Vector2(0.50, 0.73));
    points.push(new THREE.Vector2(0.52, 0.76));
    points.push(new THREE.Vector2(0.52, 0.80));
    points.push(new THREE.Vector2(0.50, 0.82));
    points.push(new THREE.Vector2(0.47, 0.80));
    // Inner wall
    points.push(new THREE.Vector2(0.45, 0.76));
    points.push(new THREE.Vector2(0.43, 0.7));
    points.push(new THREE.Vector2(0.40, 0.5));

    const geo = new THREE.LatheGeometry(points, 64);
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <mesh geometry={potProfile} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#c4956a"
        roughness={0.85}
        metalness={0.0}
      />
    </mesh>
  );
}

function Soil() {
  return (
    <mesh position={[0, 0.72, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[0.42, 32]} />
      <meshStandardMaterial color="#3d2b1f" roughness={1.0} metalness={0.0} />
    </mesh>
  );
}

export default function Plant() {
  const leaves = useMemo(() => {
    const configs: {
      pos: [number, number, number];
      rot: [number, number, number];
      scale: number;
      color: string;
      stemHeight: number;
      stemCurve: number;
      stemDir: number;
    }[] = [
      // Central tall leaf
      { pos: [0.02, 2.0, 0], rot: [0.1, 0, 0.05], scale: 0.7, color: "#2d8a4e", stemHeight: 1.3, stemCurve: 0.1, stemDir: 0 },
      // Right-leaning
      { pos: [0.25, 1.7, 0.1], rot: [0.2, -0.3, -0.4], scale: 0.6, color: "#34975a", stemHeight: 1.1, stemCurve: 0.3, stemDir: -0.5 },
      // Left-leaning
      { pos: [-0.2, 1.8, -0.05], rot: [0.15, 0.4, 0.35], scale: 0.65, color: "#268c45", stemHeight: 1.2, stemCurve: 0.25, stemDir: 2.6 },
      // Front
      { pos: [0.1, 1.5, 0.3], rot: [-0.3, 0.1, -0.1], scale: 0.5, color: "#3aad5c", stemHeight: 0.9, stemCurve: 0.35, stemDir: -1.5 },
      // Back
      { pos: [-0.1, 1.9, -0.2], rot: [0.3, 0.2, 0.2], scale: 0.55, color: "#2a8040", stemHeight: 1.25, stemCurve: 0.2, stemDir: 1.8 },
      // Small side sprout
      { pos: [0.3, 1.3, -0.15], rot: [0.1, -0.5, -0.5], scale: 0.4, color: "#4abf6a", stemHeight: 0.7, stemCurve: 0.4, stemDir: -0.8 },
      // Another small one
      { pos: [-0.25, 1.4, 0.2], rot: [-0.2, 0.6, 0.4], scale: 0.4, color: "#4abf6a", stemHeight: 0.75, stemCurve: 0.35, stemDir: 2.0 },
    ];
    return configs;
  }, []);

  return (
    <group position={[0, -0.8, 0]}>
      <Pot />
      <Soil />

      {/* Stems and leaves */}
      {leaves.map((leaf, i) => (
        <group key={i}>
          <Stem
            start={[0, 0.72, 0]}
            height={leaf.stemHeight}
            curve={leaf.stemCurve}
            curveDir={leaf.stemDir}
          />
          <Leaf
            position={leaf.pos}
            rotation={leaf.rot}
            scale={leaf.scale}
            color={leaf.color}
          />
        </group>
      ))}
    </group>
  );
}
