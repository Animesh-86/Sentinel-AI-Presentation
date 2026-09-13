import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './components/GlassCard';
import Preloader from './components/Preloader';
import './App.css';

// Importing Slides Components
import HeroSlide from './slides/HeroSlide';
import TeamSlide from './slides/TeamSlide';
import ProblemSlide from './slides/ProblemSlide';
import SolutionSlide from './slides/SolutionSlide';
import StatsSlide from './slides/StatsSlide';
import JourneySlide from './slides/JourneySlide';
import DemoSlide from './slides/DemoSlide';
import RoadmapSlide from './slides/RoadmapSlide';
import IntegrationsSlide from './slides/IntegrationsSlide';
import ImpactSlide from './slides/ImpactSlide';
import ScalabilitySlide from './slides/ScalabilitySlide';
import ClosingSlide from './slides/ClosingSlide';

const slides = [
  HeroSlide, TeamSlide, ProblemSlide, SolutionSlide, StatsSlide,
  JourneySlide, DemoSlide, RoadmapSlide, IntegrationsSlide, ImpactSlide, ScalabilitySlide, ClosingSlide
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState(1);

  // Aspect Ratio Scaling logic
  useEffect(() => {
    const handleResize = () => {
      const scaleX = window.innerWidth / 1920;
      const scaleY = window.innerHeight / 1080;
      setScale(Math.min(scaleX, scaleY));
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Only listen for keys/scroll if loading is complete
    if (loading) return;

    const handleKeyDown = (e) => {
      if (['ArrowRight', 'PageDown', ' '].includes(e.key)) {
        setCurrentSlide(s => Math.min(s + 1, slides.length - 1));
      } else if (['ArrowLeft', 'PageUp'].includes(e.key)) {
        setCurrentSlide(s => Math.max(s - 1, 0));
      } else if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
      }
    };

    let wheelTimeout;
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) < 30 && Math.abs(e.deltaX) < 30) return;
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0 || e.deltaX > 0) setCurrentSlide(s => Math.min(s + 1, slides.length - 1));
        else setCurrentSlide(s => Math.max(s - 1, 0));
      }, 100);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
    };
  }, [loading]);

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#000810', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      
      {/* Cinematic Background Orbs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <motion.div animate={{ x: [0, 50, 0], y: [0, -30, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '10%', left: '20%', width: '600px', height: '600px', background: 'rgba(0, 229, 194, 0.03)', filter: 'blur(100px)', borderRadius: '50%' }} />
        <motion.div animate={{ x: [0, -40, 0], y: [0, 50, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', bottom: '10%', right: '15%', width: '700px', height: '700px', background: 'rgba(56, 189, 248, 0.03)', filter: 'blur(120px)', borderRadius: '50%' }} />
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '40%', left: '40%', width: '400px', height: '400px', background: 'rgba(15, 30, 50, 0.5)', filter: 'blur(150px)', borderRadius: '50%' }} />
      </div>

      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* The 1920x1080 Scaled Stage */}
      <div style={{ width: '1920px', height: '1080px', transform: `scale(${scale})`, transformOrigin: 'center', position: 'relative' }}>
        {!loading && (
          <motion.div 
            className="app-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          >
            <div className="progress-bar-global" style={{ width: `${(currentSlide / (slides.length - 1)) * 100}%` }} />
          
          <nav className="nav-dots">
            {slides.map((_, i) => (
              <button 
                key={i} 
                className={`nav-dot ${i === currentSlide ? 'active' : ''}`} 
                onClick={() => setCurrentSlide(i)}
              />
            ))}
          </nav>

          <motion.main 
            className="slider-container"
            animate={{ x: `-${currentSlide * 100}vw` }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          >
            {slides.map((SlideComponent, index) => (
              <section key={index} className="slide" style={{ width: '1920px', height: '1080px', flexShrink: 0 }}>
                <div className="slide-bg" />
                <div className="slide-border" />
                
                {/* The active prop lets the slide know to trigger enter animations */}
                <SlideComponent isActive={index === currentSlide} />
              </section>
            ))}
          </motion.main>
        </motion.div>
        )}
      </div>
    </div>
  );
}
