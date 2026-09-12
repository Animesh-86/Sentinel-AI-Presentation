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
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          className="app-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
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
              <section key={index} className="slide">
                <div className="slide-bg" />
                <div className="slide-border" />
                
                {/* The active prop lets the slide know to trigger enter animations */}
                <SlideComponent isActive={index === currentSlide} />
              </section>
            ))}
          </motion.main>
        </motion.div>
      )}
    </>
  );
}
