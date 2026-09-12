import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandHeader from '../components/BrandHeader';
import GlassCard from '../components/GlassCard';
import { Mail, Table, Users, FileCheck, Folder, HelpCircle, AlertTriangle, Building2, MoveRight } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariantsLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

const itemVariantsRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export default function ProblemSlide({ isActive }) {
  const [view, setView] = React.useState('student');

  React.useEffect(() => {
    if (!isActive) return;
    
    // Automatically switch perspectives every 8 seconds
    const interval = setInterval(() => {
      setView(prev => prev === 'student' ? 'advisor' : 'student');
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <>
      <BrandHeader slideNum="03" label="Problem Statement" />

      <motion.div 
        initial={{ y: 20, opacity: 0 }} 
        animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{ zIndex: 3, position: 'absolute', top: '100px', width: '100%', textAlign: 'center' }}
      >
        <h2 style={{ fontSize: '50px' }}>The problem isn't paperwork.<br/>It's <span className="accent">fragmented compliance.</span></h2>
      </motion.div>

      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isActive ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5 }}
          style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
        >
          <AnimatePresence mode="wait">
            <motion.img 
              key={view}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.8 }}
              src={view === 'student' ? "/stressed_student_1789235527971.jpg" : "/stressed_advisor.jpg"} 
              alt="Stressed" 
              style={{ width: '80%', height: '80%', objectFit: 'cover', maskImage: 'radial-gradient(ellipse, black 30%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse, black 30%, transparent 70%)', position: 'absolute' }} 
            />
          </AnimatePresence>
        </motion.div>
        
        {/* Floating elements */}
        {isActive && (
          <AnimatePresence mode="wait">
            {view === 'student' ? (
              <motion.div key="student" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: -20, opacity: 1 }} transition={{ delay: 0.5, duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} style={{ position: 'absolute', top: '25%', left: '42%', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '10px 20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)', zIndex: 2 }}>What do I submit?</motion.div>
                <motion.div initial={{ y: -15, opacity: 0 }} animate={{ y: 15, opacity: 1 }} transition={{ delay: 1.0, duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} style={{ position: 'absolute', top: '60%', left: '40%', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '10px 20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)', zIndex: 2 }}>Am I still compliant?</motion.div>
                <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: -15, opacity: 1 }} transition={{ delay: 0.7, duration: 4.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} style={{ position: 'absolute', top: '75%', left: '48%', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '10px 20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)', zIndex: 2 }}>What's the deadline?</motion.div>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotate: [-2, 2] }} transition={{ delay: 0.3, duration: 4, repeat: Infinity, repeatType: 'reverse' }} style={{ position: 'absolute', top: '30%', right: '40%', background: '#E53935', color: '#fff', fontWeight: 'bold', padding: '10px 20px', borderRadius: '10px', fontSize: '24px', zIndex: 2 }}>PDF</motion.div>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotate: [2, -2] }} transition={{ delay: 0.6, duration: 5, repeat: Infinity, repeatType: 'reverse' }} style={{ position: 'absolute', top: '45%', left: '45%', background: '#4CAF50', color: '#fff', fontWeight: 'bold', padding: '10px 20px', borderRadius: '10px', fontSize: '24px', zIndex: 2 }}>XLSX</motion.div>
              </motion.div>
            ) : (
              <motion.div key="advisor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: -20, opacity: 1 }} transition={{ delay: 0.5, duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} style={{ position: 'absolute', top: '25%', left: '38%', background: 'rgba(255,82,82,0.1)', color: '#FF5252', backdropFilter: 'blur(10px)', padding: '10px 20px', borderRadius: '20px', border: '1px solid rgba(255,82,82,0.2)', zIndex: 2 }}>Where is that I-20?</motion.div>
                <motion.div initial={{ y: -15, opacity: 0 }} animate={{ y: 15, opacity: 1 }} transition={{ delay: 1.0, duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} style={{ position: 'absolute', top: '65%', left: '42%', background: 'rgba(255,82,82,0.1)', color: '#FF5252', backdropFilter: 'blur(10px)', padding: '10px 20px', borderRadius: '20px', border: '1px solid rgba(255,82,82,0.2)', zIndex: 2 }}>Who missed the deadline?</motion.div>
                <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: -15, opacity: 1 }} transition={{ delay: 0.7, duration: 4.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} style={{ position: 'absolute', top: '45%', right: '40%', background: 'rgba(255,82,82,0.1)', color: '#FF5252', backdropFilter: 'blur(10px)', padding: '10px 20px', borderRadius: '20px', border: '1px solid rgba(255,82,82,0.2)', zIndex: 2 }}>Are my students compliant?</motion.div>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotate: [-2, 2] }} transition={{ delay: 0.3, duration: 4, repeat: Infinity, repeatType: 'reverse' }} style={{ position: 'absolute', top: '35%', left: '50%', background: '#FBC02D', color: '#000', fontWeight: 'bold', padding: '10px 20px', borderRadius: '10px', fontSize: '24px', zIndex: 2 }}>EMAIL THREADS</motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '120px', width: '100%', maxWidth: '1400px', zIndex: 2, position: 'relative', pointerEvents: 'none' }}>
        
        {/* Left Column (TODAY) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          style={{ width: '400px', background: 'rgba(0, 20, 30, 0.6)', backdropFilter: 'blur(20px)', borderRadius: '24px', border: '2px solid rgba(0, 229, 194, 0.4)', padding: '30px' }}
        >
          <div style={{ fontSize: '18px', fontWeight: 800, color: '#fff', marginBottom: '24px', letterSpacing: '2px', textTransform: 'uppercase' }}>Today</div>
          
          <motion.div variants={itemVariantsLeft}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px', marginBottom: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #1976D2, #64B5F6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail color="#fff" size={24} />
              </div>
              <div style={{ fontSize: '18px', fontWeight: 600 }}>Emails & PDFs</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariantsLeft}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px', marginBottom: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #388E3C, #81C784)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Table color="#fff" size={24} />
              </div>
              <div style={{ fontSize: '18px', fontWeight: 600 }}>Spreadsheets</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariantsLeft}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px', marginBottom: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #7B1FA2, #BA68C8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users color="#fff" size={24} />
              </div>
              <div style={{ fontSize: '18px', fontWeight: 600 }}>Multiple service requests</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariantsLeft}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #FBC02D, #FFF176)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FileCheck color="#333" size={24} />
              </div>
              <div style={{ fontSize: '18px', fontWeight: 600 }}>Manual compliance checks</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column (THE CONSEQUENCE) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          style={{ width: '400px', background: 'rgba(30, 0, 0, 0.6)', backdropFilter: 'blur(20px)', borderRadius: '24px', border: '2px solid rgba(255, 82, 82, 0.4)', padding: '30px' }}
        >
          <div style={{ fontSize: '18px', fontWeight: 800, color: '#fff', marginBottom: '24px', letterSpacing: '2px', textTransform: 'uppercase' }}>The Consequence</div>
          
          <motion.div variants={itemVariantsRight}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px', marginBottom: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 82, 82, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Folder color="#FF5252" size={24} />
              </div>
              <div style={{ fontSize: '18px', fontWeight: 600 }}>Information gets buried</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariantsRight}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px', marginBottom: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 82, 82, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HelpCircle color="#FF5252" size={24} />
              </div>
              <div style={{ fontSize: '18px', fontWeight: 600 }}>Status becomes difficult to maintain</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariantsRight}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px', marginBottom: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 82, 82, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users color="#FF5252" size={24} />
              </div>
              <div style={{ fontSize: '18px', fontWeight: 600 }}>Students don't know what's next</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariantsRight}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 82, 82, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AlertTriangle color="#FF5252" size={24} />
              </div>
              <div style={{ fontSize: '18px', fontWeight: 600 }}>Risks can surface late</div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Bottom Footer Stat */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{ position: 'absolute', bottom: '90px', width: '100%', maxWidth: '1400px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', padding: '20px 40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', zIndex: 2 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Building2 color="#fff" size={32} />
          <div style={{ fontSize: '20px' }}>
            <span style={{ fontWeight: 800, color: '#00E5C2', fontSize: '28px' }}>6,152</span> active SEVP-certified institutions in the U.S.
          </div>
        </div>
        <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
          Source ICE, 2024 SEVIS by the Numbers
        </div>
      </motion.div>
    </>
  );
}
