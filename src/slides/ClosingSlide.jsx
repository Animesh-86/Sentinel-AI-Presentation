import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, FileCheck, Landmark, Users, Scale, GraduationCap, FileText, Fingerprint } from 'lucide-react';
import TypeWriter from '../components/TypeWriter';

export default function ClosingSlide({ isActive }) {
  return (
    <>
      {/* Background Video */}
      {isActive && (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
          <video 
            src="/Sentinel_AI_promo_video_final.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.08 }}
          />
        </div>
      )}

      <motion.div 
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', zIndex: 1, gap: '60px', marginTop: '-50px', position: 'relative' }}
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Side: Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.img 
            src="/logo.png" 
            alt="Sentinel AI Logo" 
            style={{ width: '280px', marginBottom: '20px', filter: 'drop-shadow(0 0 50px rgba(0, 229, 194, 0.3))' }} 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <h1 style={{ fontSize: '70px', marginBottom: '10px', letterSpacing: '1px' }}>Sentinel <span className="accent">AI</span></h1>
          <div style={{ width: '100%', height: '1px', background: 'rgba(0, 229, 194, 0.5)', marginBottom: '15px' }} />
          <div style={{ fontSize: '15px', letterSpacing: '4px', color: '#aaa', textTransform: 'uppercase' }}>
            Immigration Compliance. Automated. Protected.
          </div>
        </div>

        {/* Vertical Divider */}
        <div style={{ width: '2px', height: '320px', background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)' }} />

        {/* Right Side: Text */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
          <h2 style={{ fontSize: '50px', fontWeight: 600, marginBottom: '10px', lineHeight: 1.2, textAlign: 'left' }}>
            Because compliance <br />
            <span className="accent">
              <TypeWriter text="isn't a feature — it's a promise." speed={45} delay={600} isActive={isActive} />
            </span>
          </h2>
          <div style={{ width: '50px', height: '4px', background: '#00E5C2', marginTop: '25px', marginBottom: '35px' }} />
          
          <h3 style={{ fontSize: '50px', fontWeight: 400, color: '#fff', marginBottom: '10px', textAlign: 'left' }}>Thank You</h3>
          <p style={{ fontSize: '28px', color: '#ccc', textAlign: 'left', margin: 0 }}>We'd love to take your questions.</p>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div 
        style={{ position: 'absolute', bottom: '120px', left: 0, right: 0, textAlign: 'center', zIndex: 1, fontSize: '24px', color: '#aaa' }}
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <span style={{ opacity: 0.3 }}>───── &nbsp;&nbsp;&nbsp;</span>
        Team <span style={{ color: '#fff', fontWeight: 600 }}>NowInnovators</span> &nbsp;|&nbsp; Parul University, Vadodara, Gujarat
        <span style={{ opacity: 0.3 }}>&nbsp;&nbsp;&nbsp; ─────</span>
      </motion.div>
    </>
  );
}
