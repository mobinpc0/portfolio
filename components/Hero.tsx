import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Ring, Torus, Octahedron, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Cpu, Zap, ArrowRight, FileText, ChevronDown } from 'lucide-react';

// Error boundary to catch WebGL crashes gracefully
class CanvasErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn('3D Canvas error:', error.message);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

// 3D Quantum Silicon Core with Electronic Orbitals
const TechCore = () => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      const { mouse } = state;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.35, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.35, 0.05);
    }
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.4;
      coreRef.current.rotation.y = t * 0.6;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.5;
      ring1Ref.current.rotation.y = t * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.4;
      ring2Ref.current.rotation.z = t * 0.2;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = t * 0.6;
      ring3Ref.current.rotation.x = -t * 0.3;
    }
  });

  const primaryColor = '#00F0FF';
  const wireColor = '#38BDF8';

  return (
    <group ref={groupRef}>
      {/* Central Silicon/Quantum Die */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <Icosahedron args={[1.3, 0]} ref={coreRef}>
          <meshStandardMaterial
            color="#0A192F"
            emissive="#003B46"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.9}
            wireframe={false}
          />
        </Icosahedron>

        {/* Wireframe outer shell */}
        <Icosahedron args={[1.4, 1]}>
          <meshBasicMaterial
            color={primaryColor}
            wireframe={true}
            transparent
            opacity={0.4}
          />
        </Icosahedron>

        {/* Inner energy node */}
        <Octahedron args={[0.7, 0]}>
          <meshStandardMaterial
            color={primaryColor}
            emissive={primaryColor}
            emissiveIntensity={2.5}
            roughness={0.1}
            metalness={1}
          />
        </Octahedron>

        {/* Orbital Ring 1 */}
        <Torus ref={ring1Ref} args={[2.2, 0.02, 16, 100]}>
          <meshStandardMaterial
            color={primaryColor}
            emissive={primaryColor}
            emissiveIntensity={1.5}
            metalness={0.9}
            roughness={0.1}
          />
        </Torus>

        {/* Orbital Ring 2 */}
        <Torus ref={ring2Ref} args={[2.7, 0.015, 16, 100]}>
          <meshStandardMaterial
            color={wireColor}
            emissive={wireColor}
            emissiveIntensity={1.2}
            metalness={0.9}
            roughness={0.1}
          />
        </Torus>

        {/* Orbital Ring 3 */}
        <Torus ref={ring3Ref} args={[3.1, 0.012, 16, 100]}>
          <meshStandardMaterial
            color="#818CF8"
            emissive="#6366F1"
            emissiveIntensity={0.9}
            metalness={0.8}
            roughness={0.2}
          />
        </Torus>
      </Float>
    </group>
  );
};

// Fallback high-tech graphic when WebGL is unavailable
const FallbackTechGraphic = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="relative w-80 h-80 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute w-64 h-64 rounded-full border border-cyan-400/30 animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute w-48 h-48 rounded-full border border-dashed border-blue-400/40 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />
      <div className="w-28 h-28 rounded-2xl bg-cyan-950/60 border border-cyan-400/60 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.3)]">
        <Cpu size={44} className="text-cyan-400 animate-pulse" />
      </div>
    </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-dark-950 text-slate-100 circuit-grid pt-24 pb-16">
      {/* Dynamic Circuit & Grid Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Radial ambient lighting */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[110px]" />
        <div className="absolute top-20 right-1/4 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[100px]" />

        {/* 3D Canvas */}
        <CanvasErrorBoundary fallback={<FallbackTechGraphic />}>
          <Canvas
            camera={{ position: [0, 0, 7] }}
            gl={{ antialias: true, alpha: true, powerPreference: 'default' }}
            dpr={[1, 1.5]}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 10]} intensity={2} color="#00F0FF" />
              <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#3B82F6" />
              <pointLight position={[0, 0, 4]} color="#00F0FF" intensity={3} distance={8} />
              <TechCore />
            </Suspense>
          </Canvas>
        </CanvasErrorBoundary>
      </div>

      {/* Tech Overlay for high contrast readability */}
      <div className="absolute inset-0 z-[5] pointer-events-none bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/90 dark:from-dark-950/70 dark:via-dark-950/40 dark:to-dark-950" />

      {/* Hero Content */}
      <div className="z-10 container mx-auto px-4 sm:px-6 text-center max-w-4xl relative">
        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white mb-6 tracking-tight leading-tight"
        >
          MD. SAMIUL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-glow-cyan">
            ISLAM MOBIN
          </span>
        </motion.h1>

        {/* Subtitle / Engineering Discipline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-sans leading-relaxed mb-8 px-2 font-light"
        >
          Electrical & Electronic Engineer: <span className="text-cyan-300 font-medium">VLSI & Semiconductor Enthusiast</span> and{' '}
          <span className="text-sky-300 font-medium">Researcher</span>. Hands-on training in IC design and power plant engineering, with IoT, power electronics and robotics projects.
        </motion.p>

        {/* Key Engineering Specs Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 font-mono text-xs text-slate-400"
        >
          <span className="px-3 py-1 rounded bg-slate-900/80 border border-slate-700/60 text-slate-300">
            [Cadence EDA]
          </span>
          <span className="px-3 py-1 rounded bg-slate-900/80 border border-cyan-500/30 text-cyan-300">
            [CGPA 3.96/4.00]
          </span>
          <span className="px-3 py-1 rounded bg-slate-900/80 border border-slate-700/60 text-slate-300">
            [1st in Dept. of 283]
          </span>
          <span className="px-3 py-1 rounded bg-slate-900/80 border border-blue-500/30 text-blue-300">
            [4 Conference Papers]
          </span>
          <span className="px-3 py-1 rounded bg-slate-900/80 border border-slate-700/60 text-slate-300">
            [LoRa / ESP32 IoT]
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold tracking-wide flex items-center justify-center gap-2 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] group"
          >
            <span>VIEW ENGINEERING PROJECTS</span>
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-900/80 border border-slate-700 hover:border-cyan-400/50 text-slate-200 hover:text-white font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-300"
          >
            <span>GET IN TOUCH</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 z-10"
      >
        <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">SCROLL</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
