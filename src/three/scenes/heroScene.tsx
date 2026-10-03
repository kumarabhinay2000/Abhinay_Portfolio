import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const [positions] = useMemo(() => {
    const count = 2500;
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 6 + 1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3]     = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
      sz[i] = Math.random() * 0.8 + 0.2;
    }
    return [pos, sz];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.05 + mouse.x * 0.3;
    ref.current.rotation.x = mouse.y * 0.15;
  });

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial
        transparent
        color="#5b6cff"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!meshRef.current || !wireRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.y = t * 0.08 + mouse.x * 0.2;
    meshRef.current.rotation.x = mouse.y * 0.1;
    wireRef.current.rotation.y = meshRef.current.rotation.y;
    wireRef.current.rotation.x = meshRef.current.rotation.x;
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.8, 48, 48]} />
        <meshStandardMaterial
          color="#090d14"
          metalness={0.4}
          roughness={0.6}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh ref={wireRef}>
        <sphereGeometry args={[1.82, 24, 24]} />
        <meshBasicMaterial
          color="#5b6cff"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
    </group>
  );
}

function OrbitalRings() {
  const group = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.z = t * 0.04;
    group.current.rotation.x = 0.4 + mouse.y * 0.1;
    group.current.rotation.y = mouse.x * 0.15;
  });

  return (
    <group ref={group}>
      {[2.6, 3.2, 3.9].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.4, 0, i * 0.6]}>
          <torusGeometry args={[r, 0.004, 8, 120]} />
          <meshBasicMaterial color="#5b6cff" transparent opacity={0.18 - i * 0.04} />
        </mesh>
      ))}
    </group>
  );
}

function AtmosphericGlow() {
  return (
    <mesh>
      <sphereGeometry args={[2.05, 32, 32]} />
      <meshBasicMaterial
        color="#3a4fff"
        transparent
        opacity={0.06}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

interface HeroSceneProps {
  reduced?: boolean;
}

export default function HeroScene({ reduced = false }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, reduced ? 1 : 1.5]}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#5b6cff" />
      <pointLight position={[-5, -3, -2]} intensity={0.6} color="#6d8cff" />

      <group position={[3.8, 0, 0]}>
        <Globe />
        <AtmosphericGlow />
        <OrbitalRings />
      </group>
      {!reduced && <ParticleField />}
    </Canvas>
  );
}
