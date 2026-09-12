import React from 'react';
import { motion } from 'framer-motion';
import BrandHeader from '../components/BrandHeader';
import GlassCard from '../components/GlassCard';

export default function RoadmapSlide({ isActive }) {
  return (
    <>
      <BrandHeader slideNum="08" label="Live Demo" />
      
      <div style={{ display: 'flex', gap: '80px', alignItems: 'center', marginTop: '60px', maxWidth: '1500px', width: '100%', zIndex: 1 }}>
        
        <motion.div 
          style={{ flex: 1 }}
          initial={{ x: -100, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ textAlign: 'left' }}>Compliance in your <span className="accent">pocket.</span></h2>
          <br/>
          <GlassCard style={{ padding: '30px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '24px', color: '#4FC3F7' }}>Now Mobile Integration</h3>
            <p style={{ fontSize: '18px', color: '#ccc', marginTop: '10px', lineHeight: 1.5 }}>Students don't need a laptop. Submit requests, upload documents, and check status directly from the app.</p>
          </GlassCard>
          <GlassCard style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '24px', color: '#81C784' }}>Always Accessible</h3>
            <p style={{ fontSize: '18px', color: '#ccc', marginTop: '10px', lineHeight: 1.5 }}>Instead of making students come to the system, we bring the system to them, wherever they are.</p>
          </GlassCard>
        </motion.div>
        
        {/* Mobile Device Mockup */}
        <motion.div 
          style={{ flex: '0 0 450px', display: 'flex', justifyContent: 'center' }}
          initial={{ y: 100, rotateX: -20, opacity: 0 }}
          animate={isActive ? { y: 0, rotateX: 0, opacity: 1 } : { y: 100, rotateX: -20, opacity: 0 }}
          transition={{ delay: 0.4, duration: 1, type: "spring" }}
        >
          <div style={{ 
            width: '380px', height: '770px', 
            border: '14px solid #111', borderRadius: '50px', 
            position: 'relative', background: '#020B11', 
            boxShadow: '0 0 0 2px #333, 0 30px 80px rgba(0,0,0,0.6), inset 0 0 20px rgba(255,255,255,0.1)', 
            overflow: 'hidden' 
          }}>
            {/* Notch */}
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '140px', height: '30px', background: '#111', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', zIndex: 10 }} />
            
            {/* Screen Content */}
            <div style={{ width: '100%', height: '100%', background: '#000', display: 'flex', flexDirection: 'column' }}>
              <video 
                src="/mobile app.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </div>
        </motion.div>

      </div>
    </>
  );
}
