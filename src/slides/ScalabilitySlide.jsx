import React from 'react';
import { motion } from 'framer-motion';
import { CloudCog, FileSignature, Laptop, CalendarDays, MessageCircleQuestion, AudioWaveform, GraduationCap } from 'lucide-react';
import BrandHeader from '../components/BrandHeader';
import GlassCard from '../components/GlassCard';

export default function ScalabilitySlide({ isActive }) {
  return (
    <>
      <BrandHeader slideNum="10" label="Scalability & Roadmap" />

      <motion.div initial={{ y: 30, opacity: 0 }} animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }} transition={{ delay: 0.2, duration: 0.8 }} style={{ zIndex: 1, textAlign: 'center' }}>
        <h2>Building a more <span className="accent">resilient tomorrow.</span></h2>
        <p style={{ fontSize: '22px', color: '#ccc', marginTop: '10px' }}>A scalable, multi-tenant platform with a clear roadmap.</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginTop: '60px', maxWidth: '1600px', width: '100%', zIndex: 1 }}>

        {/* Phase 2 */}
        <motion.div initial={{ y: 50, opacity: 0 }} animate={isActive ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }} transition={{ delay: 0.4 }}>
          <GlassCard style={{ padding: '40px', height: '100%', borderTop: '4px solid #00E5C2', background: 'linear-gradient(180deg, rgba(0, 229, 194, 0.05) 0%, rgba(255,255,255,0.02) 100%)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '26px', color: '#fff', marginBottom: '20px' }}>SEVIS API Integration</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#ccc', fontSize: '18px', display: 'flex', flexDirection: 'column', gap: '15px', flex: 1 }}>
              <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: '#00E5C2' }}>•</span> Real SEVIS API integration (when available)</li>
              <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: '#00E5C2' }}>•</span> Digital signatures for I-20 endorsements</li>
              <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: '#00E5C2' }}>•</span> Multi-institution deployment</li>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '30px', color: '#00E5C2', opacity: 0.8 }}>
              <CloudCog size={64} />
              <FileSignature size={64} />
            </div>
          </GlassCard>
        </motion.div>

        {/* Phase 3 */}
        <motion.div initial={{ y: 50, opacity: 0 }} animate={isActive ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }} transition={{ delay: 0.6 }}>
          <GlassCard style={{ padding: '40px', height: '100%', borderTop: '4px solid #CE93D8', background: 'linear-gradient(180deg, rgba(206, 147, 216, 0.05) 0%, rgba(255,255,255,0.02) 100%)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '26px', color: '#fff', marginBottom: '20px' }}>What-If Simulator</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#ccc', fontSize: '18px', display: 'flex', flexDirection: 'column', gap: '15px', flex: 1 }}>
              <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: '#CE93D8' }}>•</span> Immigration Knowledge Graph for semantic AI queries</li>
              <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: '#CE93D8' }}>•</span> What-If Simulator ("What if I drop one course?")</li>
              <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: '#CE93D8' }}>•</span> Calendar intelligence for travel detection</li>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '30px', color: '#CE93D8', opacity: 0.8 }}>
              <Laptop size={64} />
              <CalendarDays size={64} />
              <MessageCircleQuestion size={64} />
            </div>
          </GlassCard>
        </motion.div>

        {/* Phase 4 */}
        <motion.div initial={{ y: 50, opacity: 0 }} animate={isActive ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }} transition={{ delay: 0.8 }}>
          <GlassCard style={{ padding: '40px', height: '100%', borderTop: '4px solid #81C784', background: 'linear-gradient(180deg, rgba(129, 199, 132, 0.05) 0%, rgba(255,255,255,0.02) 100%)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '26px', color: '#fff', marginBottom: '20px' }}>Voice Advisor & Scale</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#ccc', fontSize: '18px', display: 'flex', flexDirection: 'column', gap: '15px', flex: 1 }}>
              <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: '#81C784' }}>•</span> Voice advisor interface</li>
              <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: '#81C784' }}>•</span> University system-wide multi-tenant deployment</li>
              <li style={{ position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, color: '#81C784' }}>•</span> Advanced ML risk models trained on institutional data</li>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '30px', color: '#81C784', opacity: 0.8 }}>
              <AudioWaveform size={64} />
              <GraduationCap size={64} />
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </>
  );
}
