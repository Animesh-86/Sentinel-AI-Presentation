import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useSpring } from 'framer-motion';

export default function GlassCard({ children, className = '', style = {} }) {
  const cardRef = useRef(null);

  // Mouse position for spotlight
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });
  
  // 3D Tilt rotations
  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });
  
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Spotlight position
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    
    // Tilt calculations
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateX.set(((y - centerY) / centerY) * -10); // Max 10 deg tilt
    rotateY.set(((x - centerX) / centerX) * 10);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`glass-card ${className}`}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        ...style
      }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Spotlight Background Layer */}
      <motion.div
        className="spotlight-overlay"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0, 229, 194, 0.15), transparent 40%)`
        }}
      />
      {children}
    </motion.div>
  );
}
