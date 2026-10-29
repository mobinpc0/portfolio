import React, { Suspense } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-dark-950 flex flex-col items-center justify-center z-50">
    <div className="relative flex items-center justify-center mb-4">
      <div className="w-16 h-16 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
      <div className="absolute w-8 h-8 rounded-full border-2 border-blue-500/30 border-b-blue-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
    </div>
    <div className="text-cyan-500 font-mono text-sm tracking-widest uppercase animate-pulse">
      Loading...
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative selection:bg-cyan-500 selection:text-black font-sans bg-dark-950 text-slate-100">
        <CustomCursor />
        <Navbar />

        <Suspense fallback={<LoadingScreen />}>
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Research />
            <Achievements />
            <Contact />
          </main>
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default App;
