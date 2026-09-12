import React from 'react';
import { motion } from 'framer-motion';
import BrandHeader from '../components/BrandHeader';
import GlassCard from '../components/GlassCard';
import { UserCircle, Settings, BrainCircuit, CheckCircle2 } from 'lucide-react';

const steps = [
  { icon: <UserCircle size={48} />, title: "Student Update", desc: "A change is made to a student record", color: "#00E5C2" },
  { icon: <Settings size={48} />, title: "Rules Fire", desc: "Business Rules and Flows trigger instantly", color: "#CE93D8" },
  { icon: <BrainCircuit size={48} />, title: "AI Recalculates", desc: "AI analyzes data & recalculates status", color: "#FFCA28" },
  { icon: <CheckCircle2 size={48} />, title: "Action Executed", desc: "Dashboards update in real time", color: "#81C784" }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
};

const cardVariants = {
  hidden: { x: 0, y: 50, scale: 0.8, opacity: 0, rotateY: 45 },
  visible: (i) => ({
    x: 0, y: 0, scale: 1, opacity: 1, rotateY: 0,
    transition: { type: "spring", stiffness: 50, damping: 15, delay: i * 0.2 }
  })
};

export default function SolutionSlide({ isActive }) {
  return (
    <>
      <BrandHeader slideNum="04" label="Solution Overview" />
      
      <motion.div initial={{ y: 30, opacity: 0 }} animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }} transition={{ delay: 0.2, duration: 0.8 }} style={{ zIndex: 1, textAlign: 'center' }}>
        <h2>One change. An entire <span className="accent">compliance response.</span></h2>
        <p style={{ fontSize: '22px', color: '#ccc', marginTop: '10px' }}>Real-time event-driven architecture powered by ServiceNow.</p>
      </motion.div>

      <div style={{ position: 'relative', width: '100%', maxWidth: '1600px', marginTop: '80px', zIndex: 1, height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        {/* Animated Connecting Path */}
        {isActive && (
          <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '0', zIndex: 0, transform: 'translateY(-50%)' }}>
            <svg width="100%" height="200" style={{ position: 'absolute', top: '-100px', left: 0, overflow: 'visible' }}>
              <motion.path 
                d="M 100,100 C 400,100 400,100 750,100 C 1100,100 1100,100 1400,100" 
                fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="4" strokeDasharray="10 10" 
              />
              <motion.path 
                d="M 100,100 C 400,100 400,100 750,100 C 1100,100 1100,100 1400,100" 
                fill="transparent" stroke="url(#gradient)" strokeWidth="6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                style={{ filter: 'drop-shadow(0 0 10px rgba(0, 229, 194, 0.5))' }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00E5C2" />
                  <stop offset="33%" stopColor="#CE93D8" />
                  <stop offset="66%" stopColor="#FFCA28" />
                  <stop offset="100%" stopColor="#81C784" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          style={{ display: 'flex', gap: '40px', alignItems: 'center', position: 'relative', zIndex: 1, width: '100%', padding: '0 20px' }}
        >
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              custom={i}
              variants={cardVariants}
              style={{ flex: 1, perspective: '1000px' }}
            >
              <GlassCard style={{ height: '320px', padding: '40px 30px', textAlign: 'center', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderTop: `4px solid ${step.color}`, background: `linear-gradient(180deg, ${step.color}15 0%, rgba(255,255,255,0.02) 100%)` }}>
                
                {/* Number Badge */}
                <div style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '48px', fontWeight: 900, color: `${step.color}20`, lineHeight: 1 }}>
                  0{i + 1}
                </div>

                <motion.div 
                  animate={isActive ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
                  transition={{ delay: 1 + (i * 0.2), duration: 0.5 }}
                  style={{ width: '90px', height: '90px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${step.color}20`, color: step.color, marginBottom: '30px', boxShadow: `0 0 30px ${step.color}40` }}
                >
                  {step.icon}
                </motion.div>

                <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#fff', marginBottom: '15px' }}>{step.title}</h3>
                <p style={{ fontSize: '18px', color: '#ccc', lineHeight: 1.5 }}>{step.desc}</p>

              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </>
  );
}
