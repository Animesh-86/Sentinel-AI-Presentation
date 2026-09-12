import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Very fast simulated loading process
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setIsLoaded(true);
          // Trigger the onComplete callback very quickly
          setTimeout(() => onComplete(), 300);
          return 100;
        }
        // Large increments for a very short loading time
        return p + Math.floor(Math.random() * 20) + 15;
      });
    }, 50); // Very fast interval

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }}
      exit={{ 
        y: '-100vh', 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
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
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px', letterSpacing: '1px' }}
        >
          Sentinel <span style={{ color: '#00E5C2' }}>AI</span>
        </motion.h1>
      </div>

      <div style={{ width: '150px', height: '2px', background: 'rgba(255,255,255,0.1)', overflow: 'hidden', borderRadius: '2px' }}>
        <motion.div 
          style={{ height: '100%', background: '#00E5C2', boxShadow: '0 0 8px #00E5C2' }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      
      <motion.div 
        animate={{ opacity: isLoaded ? 0 : 1 }}
        style={{ marginTop: '12px', fontSize: '11px', letterSpacing: '4px', color: '#00E5C2', fontWeight: 600 }}
      >
        {progress}%
      </motion.div>
    </motion.div>
  );
}
