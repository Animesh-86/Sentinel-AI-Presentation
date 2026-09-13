import React from 'react';
import { motion } from 'framer-motion';
import BrandHeader from '../components/BrandHeader';
import TypeWriter from '../components/TypeWriter';

export default function DemoSlide({ isActive }) {
  return (
    <>
      <BrandHeader slideNum="07" label="Live Demo" />
      <motion.div 
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', zIndex: 1 }}
        initial={{ opacity: 0, scale: 2.5, filter: 'blur(20px)' }}
        animate={isActive ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
        transition={{ duration: 1.2, type: 'spring', bounce: 0.5, damping: 12 }}
      >
        <div style={{ fontSize: '32px', letterSpacing: '10px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '30px', fontWeight: 500 }}>
          <TypeWriter text="Seeing is Believing." speed={60} delay={800} isActive={isActive} />
        </div>
        <h1 style={{ fontSize: '110px', marginBottom: '0', fontWeight: 800 }}>
          Live <span className="accent" style={{ color: '#00E5C2' }}>Demonstration</span>
        </h1>
      </motion.div>
    </>
  );
}
