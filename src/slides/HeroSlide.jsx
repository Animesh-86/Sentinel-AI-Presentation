import React from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { y: 0, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function HeroSlide({ isActive }) {
  return (
    <motion.div 
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      transition={{ staggerChildren: 0 }}
    >
      <motion.img 
        variants={itemVariants}
        src="/logo.png" 
        alt="Sentinel AI Logo" 
        style={{ width: '280px', marginBottom: '20px', filter: 'drop-shadow(0 0 50px rgba(0, 229, 194, 0.3))' }} 
      />
      
      <motion.h1 variants={itemVariants}>
        Sentinel <span className="accent">AI</span>
      </motion.h1>
      
      <motion.div variants={itemVariants} style={{ fontSize: '20px', letterSpacing: '8px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '80px' }}>
        Immigration Compliance. Automated. Protected.
      </motion.div>
      
      <motion.div variants={itemVariants} style={{ fontSize: '18px', letterSpacing: '5px', textTransform: 'uppercase', color: '#00E5C2', marginBottom: '12px' }}>
        Problem Statement
      </motion.div>
      
      <motion.div variants={itemVariants} style={{ fontSize: '40px', fontWeight: 600, marginBottom: '60px' }}>
        "International Student Services & <span className="accent">Visa Compliance Management</span>"
      </motion.div>
      
      <motion.div variants={itemVariants} style={{ fontSize: '40px', fontWeight: 500, textAlign: 'center', marginBottom: '50px' }}>
        Team: <span className="accent" style={{ fontWeight: 700 }}>NowInnovators</span><br/>
        <span style={{ fontSize: '36px', color: 'rgba(255,255,255,0.8)' }}>Parul University</span>
      </motion.div>

      <motion.div variants={itemVariants} style={{ fontSize: '36px', fontWeight: 700, color: '#00E5C2', textAlign: 'center' }}>
        HackNow 2026<br/>
        <span style={{ fontSize: '32px', fontWeight: 500, color: '#fff' }}>ServiceNow x Deloitte</span>
      </motion.div>
    </motion.div>
  );
}
