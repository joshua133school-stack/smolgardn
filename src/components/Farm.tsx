"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

// ─── Stream (winding water) ───
function Stream() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    // Winding stream path as a filled shape
    shape.moveTo(-0.4, -8);
    shape.bezierCurveTo(-0.3, -4, 0.5, -2, 0.2, 0);
    shape.bezierCurveTo(-0.1, 2, 0.4, 4, 0.1, 8);
    shape.lineTo(0.6, 8);
    shape.bezierCurveTo(0.9, 4, 0.4, 2, 0.7, 0);
    shape.bezierCurveTo(1.0, -2, 0.2, -4, 0.1, -8);
    shape.lineTo(-0.4, -8);

    const geo = new THREE.ShapeGeometry(shape, 32);
    geo.rotateX(-Math.PI / 2);
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.MeshStandardMaterial;
      // Subtle shimmer
      mat.emissiveIntensity = 0.08 + Math.sin(clock.elapsedTime * 1.5) * 0.03;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, 0.02, 0]}>
      <meshStandardMaterial
        color="#4a90c4"
        roughness={0.1}
        metalness={0.3}
        emissive="#4a90c4"
        emissiveIntensity={0.08}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

// ─── Bridge ───
function Bridge() {
  const woodColor = "#8B6914";
  const plankColor = "#a07830";

  return (
    <group position={[0.15, 0.12, 0]} rotation={[0, Math.PI / 2, 0]}>
      {/* Planks (deck) */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={`plank-${i}`} position={[0, 0, -0.5 + i * 0.14]}>
          <boxGeometry args={[1.0, 0.04, 0.12]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? plankColor : woodColor}
            roughness={0.9}
          />
        </mesh>
      ))}

      {/* Rails */}
      {[-0.48, 0.48].map((x) => (
        <group key={`rail-${x}`}>
          {/* Posts */}
          {[-0.4, 0, 0.4].map((z) => (
            <mesh key={`post-${x}-${z}`} position={[x, 0.2, z]}>
              <boxGeometry args={[0.05, 0.4, 0.05]} />
              <meshStandardMaterial color={woodColor} roughness={0.85} />
            </mesh>
          ))}
          {/* Rail beam */}
          <mesh position={[x, 0.38, 0]}>
            <boxGeometry args={[0.04, 0.04, 1.0]} />
            <meshStandardMaterial color={woodColor} roughness={0.85} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// ─── Ground planes ───
function Terrain() {
  return (
    <group>
      {/* Pasture side (left / negative X) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-3.5, 0, 0]}>
        <planeGeometry args={[6, 16]} />
        <meshStandardMaterial color="#4a8c3f" roughness={0.9} />
      </mesh>

      {/* Farm side (right / positive X) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[3.8, 0, 0]}>
        <planeGeometry args={[6, 16]} />
        <meshStandardMaterial color="#6b8e4e" roughness={0.95} />
      </mesh>
    </group>
  );
}

// ─── Cow (low-poly) ───
function Cow({ position, rotation = 0 }: { position: [number, number, number]; rotation?: number }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {/* Body */}
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[0.7, 0.4, 0.35]} />
        <meshStandardMaterial color="#f5f5f0" roughness={0.8} />
      </mesh>
      {/* Head */}
      <mesh position={[0.4, 0.45, 0]}>
        <boxGeometry args={[0.22, 0.22, 0.24]} />
        <meshStandardMaterial color="#f5f5f0" roughness={0.8} />
      </mesh>
      {/* Snout */}
      <mesh position={[0.52, 0.42, 0]}>
        <boxGeometry args={[0.08, 0.1, 0.14]} />
        <meshStandardMaterial color="#e8b4b4" roughness={0.7} />
      </mesh>
      {/* Spots */}
      <mesh position={[-0.1, 0.46, 0.17]}>
        <boxGeometry args={[0.2, 0.15, 0.02]} />
        <meshStandardMaterial color="#333333" roughness={0.8} />
      </mesh>
      <mesh position={[0.15, 0.46, -0.17]}>
        <boxGeometry args={[0.15, 0.12, 0.02]} />
        <meshStandardMaterial color="#333333" roughness={0.8} />
      </mesh>
      {/* Legs */}
      {[
        [0.22, 0, 0.12],
        [0.22, 0, -0.12],
        [-0.22, 0, 0.12],
        [-0.22, 0, -0.12],
      ].map((p, i) => (
        <mesh key={i} position={p as [number, number, number]}>
          <boxGeometry args={[0.08, 0.3, 0.08]} />
          <meshStandardMaterial color="#f5f5f0" roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

// ─── Pig (low-poly) ───
function Pig({ position, rotation = 0 }: { position: [number, number, number]; rotation?: number }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {/* Body */}
      <mesh position={[0, 0.22, 0]}>
        <boxGeometry args={[0.45, 0.28, 0.28]} />
        <meshStandardMaterial color="#f0b0a0" roughness={0.7} />
      </mesh>
      {/* Head */}
      <mesh position={[0.28, 0.26, 0]}>
        <boxGeometry args={[0.18, 0.18, 0.2]} />
        <meshStandardMaterial color="#f0b0a0" roughness={0.7} />
      </mesh>
      {/* Snout */}
      <mesh position={[0.38, 0.24, 0]}>
        <boxGeometry args={[0.06, 0.08, 0.1]} />
        <meshStandardMaterial color="#e89090" roughness={0.6} />
      </mesh>
      {/* Ears */}
      {[0.08, -0.08].map((z, i) => (
        <mesh key={i} position={[0.3, 0.37, z]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[0.08, 0.06, 0.04]} />
          <meshStandardMaterial color="#e89898" roughness={0.7} />
        </mesh>
      ))}
      {/* Legs */}
      {[
        [0.14, 0, 0.09],
        [0.14, 0, -0.09],
        [-0.14, 0, 0.09],
        [-0.14, 0, -0.09],
      ].map((p, i) => (
        <mesh key={i} position={p as [number, number, number]}>
          <boxGeometry args={[0.06, 0.16, 0.06]} />
          <meshStandardMaterial color="#f0b0a0" roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

// ─── Tree ───
function Tree({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      {/* Trunk */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.06, 0.1, 1.0, 8]} />
        <meshStandardMaterial color="#7a5230" roughness={0.9} />
      </mesh>
      {/* Foliage layers */}
      <mesh position={[0, 1.3, 0]}>
        <coneGeometry args={[0.55, 0.8, 8]} />
        <meshStandardMaterial color="#2d7a2d" roughness={0.8} />
      </mesh>
      <mesh position={[0, 1.7, 0]}>
        <coneGeometry args={[0.42, 0.7, 8]} />
        <meshStandardMaterial color="#35903a" roughness={0.8} />
      </mesh>
      <mesh position={[0, 2.05, 0]}>
        <coneGeometry args={[0.28, 0.55, 8]} />
        <meshStandardMaterial color="#3da844" roughness={0.8} />
      </mesh>
    </group>
  );
}

// ─── Grass clumps (instanced for performance) ───
function GrassField() {
  const count = 300;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  useMemo(() => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    for (let i = 0; i < count; i++) {
      // Scatter across pasture side
      const x = -1 - Math.random() * 5;
      const z = -6 + Math.random() * 12;
      const scale = 0.3 + Math.random() * 0.5;
      dummy.position.set(x, scale * 0.15, z);
      dummy.scale.set(0.6, scale, 0.6);
      dummy.rotation.set(0, Math.random() * Math.PI * 2, 0);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, []);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <coneGeometry args={[0.04, 0.3, 4]} />
      <meshStandardMaterial color="#5aaa3a" roughness={0.8} />
    </instancedMesh>
  );
}

// ─── Corn stalks ───
function CornField() {
  const stalks = useMemo(() => {
    const items: { x: number; z: number; h: number }[] = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 10; col++) {
        items.push({
          x: 2.0 + row * 0.4 + (Math.random() - 0.5) * 0.1,
          z: -3 + col * 0.5 + (Math.random() - 0.5) * 0.1,
          h: 0.8 + Math.random() * 0.4,
        });
      }
    }
    return items;
  }, []);

  return (
    <group>
      {stalks.map((s, i) => (
        <group key={i} position={[s.x, 0, s.z]}>
          {/* Stalk */}
          <mesh position={[0, s.h / 2, 0]}>
            <cylinderGeometry args={[0.015, 0.02, s.h, 4]} />
            <meshStandardMaterial color="#5a8a30" roughness={0.8} />
          </mesh>
          {/* Leaves */}
          <mesh position={[0.06, s.h * 0.6, 0]} rotation={[0, 0, -0.5]}>
            <boxGeometry args={[0.18, 0.02, 0.04]} />
            <meshStandardMaterial color="#4a8828" roughness={0.7} />
          </mesh>
          <mesh position={[-0.05, s.h * 0.45, 0.02]} rotation={[0, 0.8, 0.4]}>
            <boxGeometry args={[0.15, 0.02, 0.035]} />
            <meshStandardMaterial color="#4a8828" roughness={0.7} />
          </mesh>
          {/* Corn cob */}
          <mesh position={[0.04, s.h * 0.7, 0]}>
            <cylinderGeometry args={[0.025, 0.02, 0.1, 6]} />
            <meshStandardMaterial color="#e8c840" roughness={0.6} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// ─── Wheat field ───
function WheatField() {
  const count = 200;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const topRef = useRef<THREE.InstancedMesh>(null);

  useMemo(() => {
    if (!meshRef.current || !topRef.current) return;
    const dummy = new THREE.Object3D();
    for (let i = 0; i < count; i++) {
      const x = 2.5 + Math.random() * 3.5;
      const z = 2 + Math.random() * 4;
      const h = 0.4 + Math.random() * 0.25;
      // Stalk
      dummy.position.set(x, h / 2, z);
      dummy.scale.set(1, h / 0.4, 1);
      dummy.rotation.set(0, Math.random() * Math.PI, 0);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      // Wheat top
      dummy.position.set(x, h + 0.04, z);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      topRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    topRef.current.instanceMatrix.needsUpdate = true;
  }, []);

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <cylinderGeometry args={[0.008, 0.012, 0.4, 3]} />
        <meshStandardMaterial color="#9aaa40" roughness={0.85} />
      </instancedMesh>
      <instancedMesh ref={topRef} args={[undefined, undefined, count]}>
        <cylinderGeometry args={[0.02, 0.01, 0.08, 4]} />
        <meshStandardMaterial color="#d4b840" roughness={0.7} />
      </instancedMesh>
    </>
  );
}

// ─── Crop rows (generic low rows) ───
function CropRows() {
  const rows = useMemo(() => {
    const items: { x: number; z: number }[] = [];
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 14; col++) {
        items.push({
          x: 4.5 + row * 0.35,
          z: -6 + col * 0.45,
        });
      }
    }
    return items;
  }, []);

  return (
    <group>
      {/* Tilled soil rows */}
      {[0, 1, 2, 3, 4].map((row) => (
        <mesh
          key={row}
          position={[4.5 + row * 0.35, 0.01, -3]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[0.2, 6.5]} />
          <meshStandardMaterial color="#5a4030" roughness={1.0} />
        </mesh>
      ))}
      {/* Small crop plants */}
      {rows.map((r, i) => (
        <group key={i} position={[r.x, 0, r.z]}>
          <mesh position={[0, 0.08, 0]}>
            <sphereGeometry args={[0.06, 6, 6]} />
            <meshStandardMaterial color="#3d8830" roughness={0.8} />
          </mesh>
          <mesh position={[0, 0.02, 0]}>
            <cylinderGeometry args={[0.008, 0.01, 0.04, 4]} />
            <meshStandardMaterial color="#4a7a2a" roughness={0.9} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// ─── Main Farm export ───
export default function Farm() {
  return (
    <group>
      <Terrain />
      <Stream />
      <Bridge />

      {/* === PASTURE SIDE (left) === */}
      <GrassField />

      {/* Cows */}
      <Cow position={[-2.5, 0, -1.5]} rotation={0.3} />
      <Cow position={[-4, 0, 0.5]} rotation={-0.5} />
      <Cow position={[-3, 0, 2.5]} rotation={1.8} />

      {/* Pigs */}
      <Pig position={[-1.8, 0, 1]} rotation={0.8} />
      <Pig position={[-2.2, 0, -3]} rotation={-1.2} />
      <Pig position={[-3.5, 0, -2]} rotation={2.5} />

      {/* Trees */}
      <Tree position={[-5, 0, -4]} scale={0.9} />
      <Tree position={[-5.5, 0, -1]} scale={1.1} />
      <Tree position={[-4.8, 0, 2.5]} scale={0.8} />
      <Tree position={[-5.2, 0, 5]} scale={1.0} />
      <Tree position={[-1.5, 0, -5.5]} scale={0.7} />
      <Tree position={[-3.2, 0, 5.5]} scale={0.95} />

      {/* === FARM SIDE (right) === */}
      <CornField />
      <WheatField />
      <CropRows />
    </group>
  );
}
