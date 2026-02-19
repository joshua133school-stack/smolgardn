"use client";

import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { terrainHeight } from "./Grass";

/* ─── Palette ────────────────────────────────────────────────── */
const WHITE = "#f5f0e8";
const BLACK = "#1a1a1a";
const PINK = "#e8a0a0";
const DARK_PINK = "#c47878";
const HOOF = "#2a1a0a";
const HORN = "#f0e8d0";
const EYE_WHITE = "#f0f0f0";
const PUPIL = "#1a0a00";

/* ─── Shared materials (created once) ────────────────────────── */
function useSharedMaterials() {
  return useMemo(() => ({
    white: new THREE.MeshStandardMaterial({ color: WHITE, roughness: 0.8 }),
    black: new THREE.MeshStandardMaterial({ color: BLACK, roughness: 0.8 }),
    pink: new THREE.MeshStandardMaterial({ color: PINK, roughness: 0.6 }),
    darkPink: new THREE.MeshStandardMaterial({ color: DARK_PINK, roughness: 0.5 }),
    hoof: new THREE.MeshStandardMaterial({ color: HOOF, roughness: 0.9 }),
    horn: new THREE.MeshStandardMaterial({ color: HORN, roughness: 0.5 }),
    eyeWhite: new THREE.MeshStandardMaterial({ color: EYE_WHITE, roughness: 0.3 }),
    pupil: new THREE.MeshStandardMaterial({ color: PUPIL, roughness: 0.2 }),
  }), []);
}

/* ─── Leg sub-component ──────────────────────────────────────── */
function Leg({
  position,
  upperRadius = [0.04, 0.05] as [number, number],
  lowerRadius = [0.035, 0.04] as [number, number],
  mat,
}: {
  position: [number, number, number];
  upperRadius?: [number, number];
  lowerRadius?: [number, number];
  mat: ReturnType<typeof useSharedMaterials>;
}) {
  return (
    <group position={position}>
      {/* Upper leg */}
      <mesh position={[0, 0.35, 0]} material={mat.white}>
        <cylinderGeometry args={[upperRadius[0], upperRadius[1], 0.25, 10]} />
      </mesh>
      {/* Lower leg */}
      <mesh position={[0, 0.14, 0]} material={mat.white}>
        <cylinderGeometry args={[lowerRadius[0], lowerRadius[1], 0.22, 10]} />
      </mesh>
      {/* Knee joint */}
      <mesh position={[0, 0.23, 0]} material={mat.white}>
        <sphereGeometry args={[upperRadius[1], 8, 6]} />
      </mesh>
      {/* Hoof */}
      <mesh position={[0, 0.02, 0]} material={mat.hoof}>
        <boxGeometry args={[0.055, 0.045, 0.06]} />
      </mesh>
    </group>
  );
}

/* ─── Main Cow component ─────────────────────────────────────── */
export default function Cow({
  position = [0.3, 0, 0.15] as [number, number, number],
  scale = 0.28,
  rotation = -Math.PI * 0.25,
}: {
  position?: [number, number, number];
  scale?: number;
  rotation?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const tailRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const mat = useSharedMaterials();

  // Place hooves on terrain surface
  const terrainY = useMemo(
    () => terrainHeight(position[0], position[2]),
    [position]
  );

  // Idle animation — tail swish + gentle head bob
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (tailRef.current) {
      tailRef.current.rotation.x = -0.3 + Math.sin(t * 2.0) * 0.15;
      tailRef.current.rotation.z = Math.sin(t * 1.5) * 0.2;
    }
    if (headRef.current) {
      headRef.current.rotation.x = Math.sin(t * 0.5) * 0.03;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[position[0], terrainY, position[2]]}
      scale={scale}
      rotation={[0, rotation, 0]}
    >
      {/* ═══════════════════════ BODY ═══════════════════════ */}

      {/* Main torso */}
      <mesh position={[0, 0.55, 0]} scale={[1.0, 0.6, 0.55]} material={mat.white}>
        <sphereGeometry args={[0.5, 24, 16]} />
      </mesh>
      {/* Chest */}
      <mesh position={[0.35, 0.58, 0]} scale={[0.5, 0.55, 0.5]} material={mat.white}>
        <sphereGeometry args={[0.5, 16, 12]} />
      </mesh>
      {/* Rump */}
      <mesh position={[-0.35, 0.56, 0]} scale={[0.55, 0.58, 0.52]} material={mat.white}>
        <sphereGeometry args={[0.5, 16, 12]} />
      </mesh>
      {/* Belly */}
      <mesh position={[0, 0.4, 0]} scale={[0.8, 0.35, 0.45]} material={mat.white}>
        <sphereGeometry args={[0.5, 16, 12]} />
      </mesh>
      {/* Spine ridge — subtle bump along back */}
      <mesh position={[0, 0.78, 0]} scale={[0.85, 0.12, 0.18]} material={mat.white}>
        <sphereGeometry args={[0.5, 12, 8]} />
      </mesh>
      {/* Shoulder hump */}
      <mesh position={[0.25, 0.76, 0]} scale={[0.3, 0.16, 0.28]} material={mat.white}>
        <sphereGeometry args={[0.5, 12, 8]} />
      </mesh>

      {/* ════════════════ HOLSTEIN SPOTS ════════════════ */}

      {/* Large spot — back-left */}
      <mesh position={[-0.1, 0.72, 0.22]} scale={[0.35, 0.22, 0.12]} rotation={[0.2, 0, 0.1]} material={mat.black}>
        <sphereGeometry args={[0.5, 12, 8]} />
      </mesh>
      {/* Large spot — back-right */}
      <mesh position={[-0.15, 0.68, -0.17]} scale={[0.3, 0.2, 0.14]} rotation={[-0.3, 0, -0.1]} material={mat.black}>
        <sphereGeometry args={[0.5, 12, 8]} />
      </mesh>
      {/* Medium spot — front-right */}
      <mesh position={[0.2, 0.65, -0.22]} scale={[0.2, 0.18, 0.1]} rotation={[-0.2, 0.3, 0]} material={mat.black}>
        <sphereGeometry args={[0.5, 12, 8]} />
      </mesh>
      {/* Small spot — top of back */}
      <mesh position={[0.05, 0.8, 0.05]} scale={[0.15, 0.08, 0.2]} material={mat.black}>
        <sphereGeometry args={[0.5, 12, 8]} />
      </mesh>
      {/* Spot — rump */}
      <mesh position={[-0.4, 0.6, 0.12]} scale={[0.18, 0.2, 0.12]} rotation={[0.1, 0, 0.2]} material={mat.black}>
        <sphereGeometry args={[0.5, 12, 8]} />
      </mesh>
      {/* Small spot — belly left */}
      <mesh position={[0.1, 0.45, 0.24]} scale={[0.12, 0.1, 0.05]} material={mat.black}>
        <sphereGeometry args={[0.5, 12, 8]} />
      </mesh>
      {/* Spot — front shoulder */}
      <mesh position={[0.3, 0.6, 0.18]} scale={[0.14, 0.12, 0.06]} rotation={[0.4, 0, 0]} material={mat.black}>
        <sphereGeometry args={[0.5, 12, 8]} />
      </mesh>

      {/* ═══════════════════ NECK ═══════════════════ */}

      <mesh position={[0.42, 0.72, 0]} rotation={[0, 0, 0.35]} scale={[1, 1.2, 0.9]} material={mat.white}>
        <cylinderGeometry args={[0.1, 0.14, 0.3, 12]} />
      </mesh>
      {/* Dewlap (loose skin fold under neck) */}
      <mesh position={[0.45, 0.6, 0]} scale={[0.18, 0.12, 0.06]} material={mat.white}>
        <sphereGeometry args={[0.5, 10, 8]} />
      </mesh>

      {/* ═══════════════════ HEAD ═══════════════════ */}

      <group ref={headRef} position={[0.55, 0.9, 0]}>
        {/* Cranium */}
        <mesh scale={[1.1, 0.85, 0.8]} material={mat.white}>
          <sphereGeometry args={[0.14, 16, 12]} />
        </mesh>
        {/* Brow ridge */}
        <mesh position={[0.04, 0.06, 0]} scale={[0.7, 0.3, 0.75]} material={mat.white}>
          <sphereGeometry args={[0.1, 12, 8]} />
        </mesh>

        {/* Face spot — classic Holstein patch around left eye */}
        <mesh position={[-0.02, 0.04, 0.09]} scale={[0.12, 0.1, 0.06]} rotation={[0.3, 0, 0]} material={mat.black}>
          <sphereGeometry args={[0.5, 12, 8]} />
        </mesh>
        {/* Face spot — forehead */}
        <mesh position={[-0.04, 0.08, 0.02]} scale={[0.08, 0.06, 0.1]} material={mat.black}>
          <sphereGeometry args={[0.5, 10, 8]} />
        </mesh>

        {/* Muzzle */}
        <mesh position={[0.14, -0.04, 0]} scale={[0.7, 0.6, 0.75]} material={mat.pink}>
          <sphereGeometry args={[0.1, 14, 10]} />
        </mesh>
        {/* Nose pad */}
        <mesh position={[0.19, -0.02, 0]} scale={[0.45, 0.35, 0.65]} material={mat.darkPink}>
          <sphereGeometry args={[0.08, 12, 8]} />
        </mesh>
        {/* Chin */}
        <mesh position={[0.1, -0.09, 0]} scale={[0.5, 0.3, 0.4]} material={mat.white}>
          <sphereGeometry args={[0.08, 10, 8]} />
        </mesh>

        {/* Left nostril */}
        <mesh position={[0.22, -0.03, 0.025]} material={mat.pupil}>
          <sphereGeometry args={[0.012, 8, 6]} />
        </mesh>
        {/* Right nostril */}
        <mesh position={[0.22, -0.03, -0.025]} material={mat.pupil}>
          <sphereGeometry args={[0.012, 8, 6]} />
        </mesh>

        {/* Left eye — sclera */}
        <mesh position={[0.08, 0.04, 0.1]} material={mat.eyeWhite}>
          <sphereGeometry args={[0.03, 10, 8]} />
        </mesh>
        {/* Left eye — iris/pupil */}
        <mesh position={[0.1, 0.04, 0.115]} material={mat.pupil}>
          <sphereGeometry args={[0.018, 8, 6]} />
        </mesh>
        {/* Right eye — sclera */}
        <mesh position={[0.08, 0.04, -0.1]} material={mat.eyeWhite}>
          <sphereGeometry args={[0.03, 10, 8]} />
        </mesh>
        {/* Right eye — iris/pupil */}
        <mesh position={[0.1, 0.04, -0.115]} material={mat.pupil}>
          <sphereGeometry args={[0.018, 8, 6]} />
        </mesh>

        {/* Left ear — outer */}
        <mesh position={[-0.06, 0.08, 0.13]} rotation={[0.6, 0.3, -0.3]} scale={[0.5, 0.3, 1]} material={mat.white}>
          <sphereGeometry args={[0.06, 8, 6]} />
        </mesh>
        {/* Left ear — inner pink */}
        <mesh position={[-0.055, 0.075, 0.14]} rotation={[0.6, 0.3, -0.3]} scale={[0.35, 0.2, 0.8]} material={mat.pink}>
          <sphereGeometry args={[0.05, 8, 6]} />
        </mesh>
        {/* Right ear — outer */}
        <mesh position={[-0.06, 0.08, -0.13]} rotation={[-0.6, -0.3, -0.3]} scale={[0.5, 0.3, 1]} material={mat.white}>
          <sphereGeometry args={[0.06, 8, 6]} />
        </mesh>
        {/* Right ear — inner pink */}
        <mesh position={[-0.055, 0.075, -0.14]} rotation={[-0.6, -0.3, -0.3]} scale={[0.35, 0.2, 0.8]} material={mat.pink}>
          <sphereGeometry args={[0.05, 8, 6]} />
        </mesh>

        {/* Left horn */}
        <mesh position={[-0.03, 0.13, 0.06]} rotation={[0.3, 0, -0.2]} material={mat.horn}>
          <cylinderGeometry args={[0.006, 0.018, 0.09, 8]} />
        </mesh>
        {/* Right horn */}
        <mesh position={[-0.03, 0.13, -0.06]} rotation={[-0.3, 0, -0.2]} material={mat.horn}>
          <cylinderGeometry args={[0.006, 0.018, 0.09, 8]} />
        </mesh>
      </group>

      {/* ═══════════════════ LEGS ═══════════════════ */}

      {/* Front-left */}
      <Leg position={[0.25, 0, 0.14]} mat={mat} />
      {/* Front-right */}
      <Leg position={[0.25, 0, -0.14]} mat={mat} />
      {/* Back-left (slightly thicker) */}
      <Leg position={[-0.28, 0, 0.14]} upperRadius={[0.045, 0.055]} lowerRadius={[0.035, 0.045]} mat={mat} />
      {/* Back-right */}
      <Leg position={[-0.28, 0, -0.14]} upperRadius={[0.045, 0.055]} lowerRadius={[0.035, 0.045]} mat={mat} />

      {/* ═══════════════════ UDDER ═══════════════════ */}

      <mesh position={[-0.12, 0.25, 0]} scale={[0.8, 0.6, 0.7]} material={mat.pink}>
        <sphereGeometry args={[0.1, 12, 8]} />
      </mesh>
      {/* Teats */}
      {[
        [-0.09, 0.19, 0.03],
        [-0.09, 0.19, -0.03],
        [-0.15, 0.19, 0.03],
        [-0.15, 0.19, -0.03],
      ].map((pos, i) => (
        <mesh key={`teat-${i}`} position={pos as [number, number, number]} material={mat.pink}>
          <cylinderGeometry args={[0.008, 0.012, 0.04, 6]} />
        </mesh>
      ))}

      {/* ═══════════════════ TAIL ═══════════════════ */}

      <group ref={tailRef} position={[-0.52, 0.65, 0]}>
        {/* Upper tail */}
        <mesh position={[-0.03, -0.08, 0]} rotation={[0, 0, 0.2]} material={mat.white}>
          <cylinderGeometry args={[0.015, 0.025, 0.2, 6]} />
        </mesh>
        {/* Lower tail */}
        <mesh position={[-0.07, -0.2, 0]} rotation={[0, 0, 0.15]} material={mat.white}>
          <cylinderGeometry args={[0.01, 0.015, 0.15, 6]} />
        </mesh>
        {/* Tail tuft */}
        <mesh position={[-0.09, -0.28, 0]} scale={[0.8, 1.5, 0.8]} material={mat.black}>
          <sphereGeometry args={[0.025, 8, 6]} />
        </mesh>
      </group>
    </group>
  );
}
