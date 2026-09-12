import React from 'react';
import { motion } from 'framer-motion';
import BrandHeader from '../components/BrandHeader';
import GlassCard from '../components/GlassCard';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 100, rotateX: -20, scale: 0.9, opacity: 0 },
  visible: { 
    y: 0, rotateX: 0, scale: 1, opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 15 }
  }
};

const team = [
  { name: 'Animesh Sharma', role: 'Solution Architect &\nService Portal', img: 'Animesh (Me).png' },
  { name: 'Anuj Verma', role: 'Integration &\nBackend', img: 'Anuj.jpeg' },
  { name: 'Nancy Bhatt', role: 'UI Builder &\nAnalytics', img: 'Nancy.jpeg' },
  { name: 'Krishna Chaurasiya', role: 'Mobile App &\nNotifications', img: 'Krishna.jpeg' },
  { name: 'Gopal', role: 'Flow Designer &\nService Catalog', img: 'Gopal.jpeg' },
];

export default function TeamSlide({ isActive }) {
  return (
    <>
      <BrandHeader slideNum="02" label="Meet the Team" />
      
      <motion.div 
        initial={{ y: 30, opacity: 0 }} 
        animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{ zIndex: 1 }}
      >
        <h2>Meet <span className="accent">NowInnovators</span></h2>
        <p className="subtitle" style={{ marginBottom: '60px' }}>
          A team of learners, builders, and problem-solvers.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', zIndex: 1, width: '100%', maxWidth: '1600px' }}
      >
        {team.map((member, i) => (
          <motion.div key={i} variants={itemVariants} style={{ transformOrigin: 'center bottom' }}>
            <GlassCard className="team-card" style={{ width: '260px', padding: '30px 20px', textAlign: 'center' }}>
              <div style={{ width: '160px', height: '160px', borderRadius: '24px', margin: '0 auto 24px', overflow: 'hidden', border: '4px solid rgba(0, 229, 194, 0.2)' }}>
                <img src={`/team/${member.img}`} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>{member.name}</div>
              <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', whiteSpace: 'pre-line', lineHeight: 1.5 }}>{member.role}</div>
              <div style={{ width: '40px', height: '4px', background: '#00E5C2', margin: '20px auto 0', borderRadius: '2px' }} />
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
