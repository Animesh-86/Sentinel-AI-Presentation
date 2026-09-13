import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TypeWriter({ text, speed = 50, delay = 0, isActive, style = {}, className = '' }) {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setDisplayedText('');
      setStarted(false);
      setDone(false);
      return;
    }

    const delayTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(delayTimer);
  }, [isActive, delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    setDisplayedText('');
    const interval = setInterval(() => {
      i++;
      setDisplayedText(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span className={className} style={style}>
      {displayedText}
      {started && !done && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          style={{ display: 'inline-block', width: '3px', height: '1em', background: '#00E5C2', marginLeft: '4px', verticalAlign: 'text-bottom' }}
        />
      )}
    </span>
  );
}
