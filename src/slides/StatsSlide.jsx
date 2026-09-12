import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BrandHeader from '../components/BrandHeader';
import GlassCard from '../components/GlassCard';
import { Database, Settings, GitMerge, FileCode, ShoppingCart, Monitor, Smartphone, Cloud } from 'lucide-react';

// Animated Counter component
function Counter({ from, to, duration, isActive }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isActive) {
      setCount(from);
      return;
    }
    const startTime = performance.now();
    let rAF;
    const updateCount = (now) => {
      const p = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 4); // ease out quart
      setCount(Math.round(eased * to));
      if (p < 1) rAF = requestAnimationFrame(updateCount);
    };
    rAF = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(rAF);
  }, [isActive, from, to, duration]);

  // Handle case where to is not a number (e.g., the last card has no number in the screenshot, just text)
  if (isNaN(to)) {
    return <>{to}</>;
  }

  return <>{count.toLocaleString()}</>;
}

export default function StatsSlide({ isActive }) {
  const stats = [
    { count: 13, label: 'Custom Tables', icon: <Database size={32} /> },
    { count: 12, label: 'Business Rules', icon: <Settings size={32} /> },
    { count: 7, label: 'Automated Flows', icon: <GitMerge size={32} /> },
    { count: 6, label: 'Script Includes', icon: <FileCode size={32} /> },
    { count: 7, label: 'Catalog Items', icon: <ShoppingCart size={32} /> },
    { count: 2, label: 'Portal Experiences', icon: <Monitor size={32} /> },
    { count: 1, label: 'Mobile App', icon: <Smartphone size={32} /> },
    { count: null, label: 'Native ServiceNow Core', icon: <Cloud size={32} />, highlight: true }
  ];

  return (
    <>
      <BrandHeader slideNum="05" label="Solution Overview" />
      
      {/* Background Images Blended In */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <motion.img 
          src="/flow.png" 
          alt="Flow Designer Background" 
          initial={{ opacity: 0, x: -50, y: -50 }}
          animate={isActive ? { opacity: 0.15, x: 0, y: 0 } : { opacity: 0, x: -50, y: -50 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          style={{ position: 'absolute', left: '-5%', top: '-5%', width: '700px', objectFit: 'contain', mixBlendMode: 'luminosity', filter: 'contrast(120%)' }} 
        />
        <motion.img 
          src="/table.png" 
          alt="ServiceNow Table Background" 
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={isActive ? { opacity: 0.15, x: 0, y: 0 } : { opacity: 0, x: 50, y: 50 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          style={{ position: 'absolute', right: '-5%', bottom: '-10%', width: '800px', objectFit: 'contain', mixBlendMode: 'luminosity', filter: 'contrast(120%)' }} 
        />
      </div>

      <motion.div initial={{ y: 30, opacity: 0 }} animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }} transition={{ delay: 0.2, duration: 0.8 }} style={{ zIndex: 1, textAlign: 'center', position: 'relative' }}>
        <h2 style={{ fontSize: '48px', marginBottom: '16px' }}>Built for proactive compliance. <span className="accent">Ready to scale.</span></h2>
        <p style={{ fontSize: '24px', color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
          A native ServiceNow foundation connecting data, automation, AI, and student services.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginTop: '60px', maxWidth: '1500px', width: '100%', alignItems: 'center', zIndex: 1, position: 'relative' }}>
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }} 
            transition={{ delay: 0.2 + (i * 0.1), type: 'spring' }}
          >
            <GlassCard 
              style={{ 
                padding: '30px 24px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '24px',
                border: stat.highlight ? '2px solid #00E5C2' : '1px solid rgba(255,255,255,0.1)',
                background: stat.highlight ? 'rgba(0, 229, 194, 0.05)' : 'rgba(255,255,255,0.02)',
              }}
            >
              <div style={{ 
                width: '64px', height: '64px', 
                borderRadius: '16px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: stat.highlight ? '2px solid #00E5C2' : '2px solid #1E88E5',
                color: stat.highlight ? '#00E5C2' : '#fff',
                background: stat.highlight ? 'transparent' : 'transparent',
                flexShrink: 0
              }}>
                {stat.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {stat.count !== null ? (
                  <div style={{ fontSize: '48px', fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: '4px' }}>
                    <Counter from={0} to={stat.count} duration={2} isActive={isActive} />
                  </div>
                ) : (
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginTop: '8px' }}>
                    {stat.label}
                  </div>
                )}
                {stat.count !== null && (
                  <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                    {stat.label}
                  </div>
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={isActive ? { opacity: 1 } : { opacity: 0 }} 
        transition={{ delay: 1.2, duration: 1 }}
        style={{ marginTop: '60px', color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', zIndex: 1, display: 'flex', alignItems: 'center', gap: '20px' }}
      >
        <div style={{ width: '60px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
        One platform. One operational foundation.
        <div style={{ width: '60px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
      </motion.div>
    </>
  );
}
