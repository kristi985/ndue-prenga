'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consented = localStorage.getItem('cookie-consent');
    if (!consented) {
      const t = setTimeout(() => setShow(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="cookie-banner"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        >
          <p>
            🍪 Kjo faqe përdor cookies për të përmirësuar eksperiencën tuaj.
            Duke vazhduar, ju pranoni{' '}
            <a href="#" className="underline">politikën tonë të privatësisë</a>.
          </p>
          <div className="cookie-actions">
            <button onClick={decline} className="btn btn-ghost" style={{fontSize:'0.85rem', padding:'10px 20px'}}>
              Refuzo
            </button>
            <button onClick={accept} className="btn btn-primary" style={{fontSize:'0.85rem', padding:'10px 22px'}}>
              Pranoj
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
