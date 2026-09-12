import React from 'react';
import { motion } from 'framer-motion';
import BrandHeader from '../components/BrandHeader';
import GlassCard from '../components/GlassCard';
import { ClipboardList, FileUp, FileSearch, ShieldCheck, LayoutGrid, FileCheck, Globe, ArrowRight } from 'lucide-react';

const steps = [
  { num: "01", icon: <ClipboardList size={36} />, title: "Onboarding Form", desc: "Create your profile in minutes", delay: 0.3 },
  { num: "02", icon: <FileUp size={36} />, title: "Document Upload", desc: "Upload required documents securely", delay: 0.5 },
  { num: "03", icon: <FileSearch size={36} />, title: "AI Validation", desc: "Get instant feedback and prevent errors", delay: 0.7 },
  { num: "04", icon: <ShieldCheck size={36} />, title: "Health Score", desc: "Know your compliance status in real time", delay: 0.9 },
  { num: "05", icon: <LayoutGrid size={36} />, title: "Service Catalog", desc: "Find and submit the right request", delay: 1.1 },
  { num: "06", icon: <FileCheck size={36} />, title: "Request Fulfilled", desc: "Track progress until its complete", delay: 1.3 }
];

export default function JourneySlide({ isActive }) {
  return (
    <>
      <BrandHeader slideNum="06" label="Solution Overview" />
      
      <motion.div initial={{ y: 30, opacity: 0 }} animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }} transition={{ delay: 0.2, duration: 0.8 }} style={{ zIndex: 1, textAlign: 'center' }}>
        <h2>A simpler journey. <span className="accent">A more secure future.</span></h2>
        <p style={{ fontSize: '22px', color: '#ccc', marginTop: '10px' }}>Guiding students through compliance with zero friction.</p>
      </motion.div>

      <div style={{ position: 'relative', width: '100%', maxWidth: '1700px', marginTop: '70px', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* 6-Step Horizontal Flow */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ delay: step.delay, type: 'spring', stiffness: 50 }}
                style={{ flex: 1, maxWidth: '240px', position: 'relative' }}
              >
                {/* Top Badge */}
                <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', background: '#1e293b', border: '2px solid rgba(255,255,255,0.1)', color: '#fff', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px', boxShadow: '0 4px 10px rgba(0,0,0,0.5)', zIndex: 10 }}>
                  {step.num}
                </div>

                <div style={{ background: 'linear-gradient(180deg, rgba(15, 30, 50, 0.95) 0%, rgba(5, 15, 25, 0.95) 100%)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)', borderTop: '2px solid rgba(255, 255, 255, 0.15)', padding: '40px 20px 30px', textAlign: 'center', height: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 15px 35px rgba(0,0,0,0.4)' }}>
                  
                  <div style={{ color: '#38bdf8', marginBottom: '20px', marginTop: '10px' }}>
                    {step.icon}
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginBottom: '10px', lineHeight: 1.2 }}>
                    {step.title}
                  </h3>
                  
                  <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.5 }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>

              {/* Arrow separator */}
              {i < steps.length - 1 && (
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: step.delay + 0.1, duration: 0.3 }}
                  style={{ margin: '0 10px', color: 'rgba(255,255,255,0.2)' }}
                >
                  <ArrowRight size={24} />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Multi-language Banner */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{ marginTop: '60px', width: '100%', maxWidth: '1200px' }}
        >
          <div style={{ padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', background: 'rgba(15, 30, 50, 0.95)', boxShadow: '0 15px 35px rgba(0,0,0,0.4)' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Globe size={40} color="#38bdf8" />
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', margin: 0 }}>Multi-language notifications</h4>
                <p style={{ fontSize: '15px', color: '#94a3b8', margin: 0 }}>Updates in your preferred language</p>
              </div>
            </div>

            <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '40px', fontSize: '18px', color: '#e2e8f0', fontWeight: '600' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img src="https://flagcdn.com/w40/us.png" alt="US" style={{ width: '30px', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0,0,0,0.3)' }} /> EN</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img src="https://flagcdn.com/w40/de.png" alt="DE" style={{ width: '30px', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0,0,0,0.3)' }} /> DE</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img src="https://flagcdn.com/w40/es.png" alt="ES" style={{ width: '30px', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0,0,0,0.3)' }} /> ES</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img src="https://flagcdn.com/w40/cn.png" alt="CN" style={{ width: '30px', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0,0,0,0.3)' }} /> 中文</div>
            </div>

          </div>
        </motion.div>

      </div>
    </>
  );
}
