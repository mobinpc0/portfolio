import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

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

const AnimatedSphere = ({ theme }: { theme: 'light' | 'dark' }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const { mouse } = state;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouse.y * 0.2, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.x * 0.2, 0.05);
    }
  });

  return (
    <Sphere args={[1, 64, 64]} scale={2.5} ref={meshRef} frustumCulled={false}>
      <MeshDistortMaterial
        color={theme === 'dark' ? '#b8860b' : '#e8dcc8'}
        attach="material"
        distort={0.4}
        speed={1.8}
        roughness={theme === 'dark' ? 0.15 : 0.1}
        metalness={theme === 'dark' ? 0.95 : 0.8}
      />
    </Sphere>
  );
};

// Fallback sphere rendered with CSS when WebGL fails
const FallbackSphere = ({ theme }: { theme: string }) => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div
      className="rounded-full animate-pulse"
      style={{
        width: '280px',
        height: '280px',
        background: theme === 'dark'
          ? 'radial-gradient(circle at 35% 35%, #6b6b6b, #2a2a2a, #111)'
          : 'radial-gradient(circle at 35% 35%, #fff, #e0e0e0, #bbb)',
        boxShadow: theme === 'dark'
          ? '0 0 80px rgba(202,138,4,0.15), inset 0 -20px 40px rgba(0,0,0,0.5)'
          : '0 0 80px rgba(0,0,0,0.1), inset 0 -20px 40px rgba(0,0,0,0.1)',
      }}
    />
  </div>
);

const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-100 via-amber-50/30 to-gray-50 dark:from-black dark:via-black dark:to-black">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CanvasErrorBoundary fallback={<FallbackSphere theme={theme} />}>
          <Canvas
            camera={{ position: [0, 0, 6] }}
            gl={{ antialias: true, alpha: true, powerPreference: 'default' }}
            dpr={[1, 1.5]}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={theme === 'dark' ? 0.5 : 1.5} />
              <directionalLight position={[10, 10, 5]} intensity={theme === 'dark' ? 2.0 : 2.5} color="#ffffff" />
              <directionalLight position={[-5, -5, -5]} intensity={theme === 'dark' ? 0.5 : 1.0} color={theme === 'dark' ? '#CA8A04' : '#FDE68A'} />
              <pointLight position={[-10, -10, -5]} color="#CA8A04" intensity={theme === 'dark' ? 3.0 : 1.5} />
              <pointLight position={[5, 5, 5]} color="#ffffff" intensity={theme === 'dark' ? 1.5 : 2.0} />
              <pointLight position={[0, -5, 3]} color={theme === 'dark' ? '#EAB308' : '#FCD34D'} intensity={theme === 'dark' ? 0.8 : 1.2} />
              <AnimatedSphere theme={theme} />
              {theme === 'dark' && <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />}
            </Suspense>
          </Canvas>
        </CanvasErrorBoundary>
      </div>

      {/* Text backdrop for readability */}
      <div className="absolute inset-0 z-[5] pointer-events-none bg-black/20 dark:bg-black/30" />

      <div className="z-10 text-center pointer-events-none px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl font-medium tracking-[0.2em] text-gold-500 mb-4 uppercase"
          style={{ textShadow: theme === 'dark' ? 'none' : '0 1px 8px rgba(0,0,0,0.1)' }}
        >
          Electrical & Electronic Engineer
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          style={{ textShadow: theme === 'dark' ? '0 2px 20px rgba(0,0,0,0.5)' : '0 2px 15px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.3)' }}
        >
          MD. SAMIUL <br /> ISLAM MOBIN
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 dark:text-gray-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed px-2"
          style={{ textShadow: theme === 'dark' ? 'none' : '0 1px 8px rgba(0,0,0,0.2)' }}
        >
          VLSI & Semiconductor Enthusiast | Power System Analyzer.
          Specializing in Analog & Digital Circuit Design, Embedded Systems, and Automation.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gray-400 to-transparent dark:via-white/50" />
      </motion.div>
    </section>
  );
};

export default Hero;