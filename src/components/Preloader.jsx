import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Slower simulated loading process
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setIsLoaded(true);
          // Trigger the onComplete callback after a slightly longer delay
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        // Smaller increments so it takes longer
        return p + Math.floor(Math.random() * 4) + 1;
      });
    }, 150); // Increased interval delay

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } }}
      exit={{ 
        y: '-100vh', 
        opacity: 0,
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
      }}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000810',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      }}
    >
      <div style={{ overflow: 'hidden' }}>
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          style={{ fontSize: '64px', fontWeight: 900, marginBottom: '40px', letterSpacing: '2px' }}
        >
          Sentinel <span style={{ color: '#00E5C2' }}>AI</span>
        </motion.h1>
      </div>

      <div style={{ width: '300px', height: '4px', background: 'rgba(255,255,255,0.1)', overflow: 'hidden', borderRadius: '4px' }}>
        <motion.div 
          style={{ height: '100%', background: '#00E5C2', boxShadow: '0 0 10px #00E5C2' }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      
      <motion.div 
        animate={{ opacity: isLoaded ? 0 : 1 }}
        style={{ marginTop: '20px', fontSize: '16px', letterSpacing: '6px', color: '#00E5C2', fontWeight: 600 }}
      >
        {progress}%
      </motion.div>
    </motion.div>
  );
}
