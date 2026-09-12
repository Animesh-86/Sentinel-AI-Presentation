import React from 'react';

export default function BrandHeader({ slideNum, label }) {
  return (
    <>
      <div className="slide-number">{slideNum}</div>
      <div className="slide-label">{label}</div>
      <div className="brand-mark" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <img src="/logo.png" alt="Logo" style={{ transform: 'scale(1.4)', marginRight: '15px', zIndex: 2, position: 'relative' }} />
        <div className="brand-text" style={{ textAlign: 'left', zIndex: 1, position: 'relative' }}>
          <div className="brand-name">Sentinel <span style={{ color: '#00E5C2' }}>AI</span></div>
          <div className="brand-tagline" style={{ fontSize: '11px', letterSpacing: '4px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Immigration Compliance. Automated. Protected.</div>
        </div>
      </div>
    </>
  );
}
