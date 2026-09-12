import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, LineChart, GraduationCap } from 'lucide-react';
import BrandHeader from '../components/BrandHeader';
import GlassCard from '../components/GlassCard';

function AnimatedDonut({ percentage, text, color, isActive }) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  return (
    <div style={{ position: 'relative', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="150" height="150" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="75" cy="75" r={radius} fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
        <motion.circle 
          cx="75" cy="75" r={radius} fill="transparent" stroke={color} strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isActive ? { strokeDashoffset: circumference - (percentage / 100) * circumference } : { strokeDashoffset: circumference }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
      <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#fff', lineHeight: 1 }}>{text}</div>
        <div style={{ fontSize: '14px', color: color, fontWeight: 'bold', letterSpacing: '1px' }}>ROI</div>
      </div>
    </div>
  );
}

export default function ImpactSlide({ isActive }) {
  return (
    <>
      <BrandHeader slideNum="09" label="Impact & Outcomes" />
      
      <motion.div initial={{ y: 30, opacity: 0 }} animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }} transition={{ delay: 0.2, duration: 0.8 }} style={{ zIndex: 1, textAlign: 'center' }}>
        <h2 style={{ fontSize: '50px' }}>Impact that reaches <span className="accent">every layer.</span></h2>
        <p style={{ fontSize: '22px', color: '#ccc', marginTop: '10px' }}>One platform. Four stakeholder outcomes.</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr', gap: '30px', marginTop: '50px', maxWidth: '1400px', width: '100%', zIndex: 1, height: '450px' }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <motion.div style={{ flex: 1 }} initial={{ x: -50, opacity: 0 }} animate={isActive ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }} transition={{ delay: 0.3 }}>
            <GlassCard style={{ padding: '30px', height: '100%', borderTop: '4px solid #00E5C2', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <Users color="#00E5C2" size={32} />
                <h3 style={{ fontSize: '22px', color: '#00E5C2' }}>ADVISORS</h3>
              </div>
              <p style={{ fontSize: '18px', color: '#fff', lineHeight: 1.5 }}>Days of manual review reduced to one-click AI decisions.</p>
            </GlassCard>
          </motion.div>
          <motion.div style={{ flex: 1 }} initial={{ x: -50, opacity: 0 }} animate={isActive ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }} transition={{ delay: 0.4 }}>
            <GlassCard style={{ padding: '30px', height: '100%', borderTop: '4px solid #81C784', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <LineChart color="#81C784" size={32} />
                <h3 style={{ fontSize: '22px', color: '#81C784' }}>LEADERSHIP</h3>
              </div>
              <p style={{ fontSize: '18px', color: '#fff', lineHeight: 1.5 }}>Population-level risk visibility instead of disconnected files.</p>
            </GlassCard>
          </motion.div>
        </div>

        {/* Center Column (Featured ROI) */}
        <motion.div initial={{ y: 50, scale: 0.9, opacity: 0 }} animate={isActive ? { y: 0, scale: 1, opacity: 1 } : { y: 50, scale: 0.9, opacity: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
          <GlassCard style={{ padding: '40px', height: '100%', borderTop: '4px solid #CE93D8', background: 'linear-gradient(180deg, rgba(206, 147, 216, 0.1) 0%, rgba(255,255,255,0.02) 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Soft Glow */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(206,147,216,0.2) 0%, rgba(0,0,0,0) 70%)', zIndex: 0 }} />
            
            <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Building2 color="#CE93D8" size={48} style={{ marginBottom: '15px' }} />
              <h3 style={{ fontSize: '28px', color: '#CE93D8', marginBottom: '5px', letterSpacing: '2px' }}>INSTITUTION</h3>
              <span style={{ fontSize: '12px', background: 'rgba(206,147,216,0.2)', color: '#fff', padding: '4px 12px', borderRadius: '20px', letterSpacing: '1px', marginBottom: '20px' }}>SIMULATED MODEL</span>
              
              <AnimatedDonut percentage={100} text="187%" color="#CE93D8" isActive={isActive} />
              <p style={{ fontSize: '20px', color: '#ccc', marginTop: '20px' }}>4.2 month payback period <br/>(5,000-student campus)</p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Right Column */}
        <motion.div initial={{ x: 50, opacity: 0 }} animate={isActive ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }} transition={{ delay: 0.6 }} style={{ display: 'flex' }}>
          <GlassCard style={{ padding: '40px', height: '100%', width: '100%', borderTop: '4px solid #FFCA28', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <GraduationCap color="#FFCA28" size={40} />
              <h3 style={{ fontSize: '24px', color: '#FFCA28' }}>STUDENTS & FAMILIES</h3>
            </div>
            <p style={{ fontSize: '22px', color: '#fff', lineHeight: 1.6 }}>24/7 access to status, deadlines, and services in their native language.</p>
            <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(255, 202, 40, 0.1)', borderRadius: '8px', borderLeft: '3px solid #FFCA28' }}>
              <div style={{ fontSize: '16px', color: '#FFCA28', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '1px' }}>Impact</div>
              <div style={{ fontSize: '20px', color: '#fff' }}>Zero panic emails. Instant clarity.</div>
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </>
  );
}
