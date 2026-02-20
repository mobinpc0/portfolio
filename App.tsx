import React, { Suspense } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-white dark:bg-black flex items-center justify-center z-50">
    <div className="text-gold-500 text-2xl font-serif animate-pulse">Loading Experience...</div>
  </div>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative selection:bg-gold-500 selection:text-white">
        <CustomCursor />
        <Navbar />
        
        <Suspense fallback={<LoadingScreen />}>
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Research />
            <Gallery />
            <Contact />
          </main>
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default App;
