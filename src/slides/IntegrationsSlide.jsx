import React from 'react';
import { motion } from 'framer-motion';
import BrandHeader from '../components/BrandHeader';
import GlassCard from '../components/GlassCard';
import { Code, Settings, GitBranch, Users, Building, UserCheck, ShieldCheck } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 15 } }
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 2, ease: "easeInOut", delay: 0.8 } }
};

const generatePath = (x1, y1, x2, y2) => {
  const cx = x1 + (x2 - x1) / 2;
  return `M ${x1} ${y1} C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2}`;
};

export default function IntegrationsSlide({ isActive }) {
  
  const leftYs = [95, 205, 315, 425];
  const centerYs = [225, 335, 445];
  const rightYs = [85, 170, 255, 340, 425];

  const leftToCenterConnections = [
    { from: 0, to: 0 },
    { from: 1, to: 0 },
    { from: 2, to: 1 },
    { from: 3, to: 2 },
  ];

  const centerToRightConnections = [
    { from: 0, to: 0 },
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 2, to: 4 },
  ];

  return (
    <>
      <BrandHeader slideNum="09" label="Live Demo" />
      
      <motion.div initial={{ y: 30, opacity: 0 }} animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }} transition={{ delay: 0.2, duration: 0.8 }} style={{ zIndex: 1, textAlign: 'center' }}>
        <h2>A Connected <span className="accent">Compliance Solution</span></h2>
        <div style={{ fontSize: '22px', color: 'rgba(255,255,255,0.7)', marginTop: '10px' }}>Built on ServiceNow. Powered by trusted integrations.</div>
      </motion.div>

      <div style={{ marginTop: '50px', width: '100%', maxWidth: '1400px', height: '550px', position: 'relative', zIndex: 1 }}>
        
        {/* Animated Connecting SVG Lines */}
        {isActive && (
          <svg viewBox="0 0 1400 550" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
            {leftToCenterConnections.map((conn, i) => (
              <g key={`l2c-${i}`}>
                <path d={generatePath(350, leftYs[conn.from], 475, centerYs[conn.to])} stroke="rgba(0, 229, 194, 0.15)" strokeWidth="3" fill="none" strokeDasharray="6 6" />
                <motion.path d={generatePath(350, leftYs[conn.from], 475, centerYs[conn.to])} stroke="#00E5C2" strokeWidth="3" fill="none" variants={lineVariants} initial="hidden" animate="visible" style={{ filter: 'drop-shadow(0 0 8px #00E5C2)' }} />
              </g>
            ))}
            {centerToRightConnections.map((conn, i) => (
              <g key={`c2r-${i}`}>
                <path d={generatePath(925, centerYs[conn.from], 1050, rightYs[conn.to])} stroke="rgba(0, 229, 194, 0.15)" strokeWidth="3" fill="none" strokeDasharray="6 6" />
                <motion.path d={generatePath(925, centerYs[conn.from], 1050, rightYs[conn.to])} stroke="#00E5C2" strokeWidth="3" fill="none" variants={lineVariants} initial="hidden" animate="visible" style={{ filter: 'drop-shadow(0 0 8px #00E5C2)' }} />
              </g>
            ))}
          </svg>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '100%', position: 'relative', zIndex: 1 }}>
          
          {/* Left Column: External Integrations */}
          <motion.div variants={containerVariants} initial="hidden" animate={isActive ? "visible" : "hidden"} style={{ width: '350px', position: 'relative', padding: '40px 20px', borderRadius: '24px', border: '2px solid rgba(0, 229, 194, 0.3)', background: 'rgba(0, 20, 30, 0.6)', backdropFilter: 'blur(10px)' }}>
            <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#03141f', padding: '0 20px', fontSize: '20px', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>
              External Integrations
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { logo: "A", name: "Azure Document", sub: "Passport OCR", color: "#4FC3F7" },
                { logo: "G", name: "Google Translate", sub: "Native language support", color: "#4285F4" },
                { logo: "T", name: "Twilio API", sub: "SMS & WhatsApp", color: "#F44336" },
                { logo: "🏛️", name: "SEVIS (Mock)", sub: "Federal compliance", color: "#90CAF9" },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <GlassCard style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', height: '90px', position: 'relative' }}>
                    <div style={{ position: 'absolute', right: '-8px', top: '50%', transform: 'translateY(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: '#00E5C2', boxShadow: '0 0 10px #00E5C2' }} />
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 800, color: item.color }}>{item.logo}</div>
                    <div>
                      <div style={{ fontSize: '18px', fontWeight: 800, lineHeight: 1.2 }}>{item.name}</div>
                      <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{item.sub}</div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center Column: ServiceNow */}
          <motion.div variants={containerVariants} initial="hidden" animate={isActive ? "visible" : "hidden"} style={{ width: '450px', position: 'relative', padding: '40px 30px', borderRadius: '24px', border: '2px solid #00E5C2', background: 'rgba(0, 229, 194, 0.05)', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div variants={itemVariants} style={{ fontSize: '36px', fontWeight: 900, color: '#fff', letterSpacing: '1px', marginBottom: '30px' }}>
              servicenow<span style={{ color: '#00E5C2' }}>.</span>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
              {[
                { icon: <Code size={28} />, name: "Script Includes", sub: "Core logic & integrations" },
                { icon: <Settings size={28} />, name: "Business Rules", sub: "Automated decisioning" },
                { icon: <GitBranch size={28} />, name: "Flow Designer", sub: "End-to-end workflow automation" },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <GlassCard style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px', height: '90px', position: 'relative', border: '1px solid rgba(0,229,194,0.3)' }}>
                    <div style={{ position: 'absolute', left: '-8px', top: '50%', transform: 'translateY(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: '#00E5C2', boxShadow: '0 0 10px #00E5C2' }} />
                    <div style={{ position: 'absolute', right: '-8px', top: '50%', transform: 'translateY(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: '#00E5C2', boxShadow: '0 0 10px #00E5C2' }} />
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 229, 194, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00E5C2' }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: 800 }}>{item.name}</div>
                      <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>{item.sub}</div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Outcomes */}
          <motion.div variants={containerVariants} initial="hidden" animate={isActive ? "visible" : "hidden"} style={{ width: '350px', position: 'relative', padding: '40px 20px', borderRadius: '24px', border: '2px solid rgba(0, 229, 194, 0.3)', background: 'rgba(0, 20, 30, 0.6)', backdropFilter: 'blur(10px)' }}>
            <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#03141f', padding: '0 20px', fontSize: '20px', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>
              Student Outcomes
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                { icon: <Users size={24} />, name: "Students", sub: "Faster, simpler experience" },
                { icon: <Building size={24} />, name: "Institution", sub: "Greater efficiency & compliance" },
                { icon: <UserCheck size={24} />, name: "Advisors", sub: "Real-time insights" },
                { icon: <ShieldCheck size={24} />, name: "Leadership", sub: "Confidence in reporting" },
                { icon: <Users size={24} />, name: "Families", sub: "Clear communication & support" },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <GlassCard style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 20px', height: '70px', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-8px', top: '50%', transform: 'translateY(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: '#00E5C2', boxShadow: '0 0 10px #00E5C2' }} />
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 800 }}>{item.name}</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{item.sub}</div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}
