import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const FloatingScrollButtons = () => {
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowUp(window.scrollY > 300); // show scroll-up button after scrolling down 300px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });

  return (
    <>
      {showUp && (
        <button className="floating-button floating-up" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
      <button className="floating-button floating-down" onClick={scrollToBottom} aria-label="Scroll to bottom">
        ↓
      </button>
    </>
  );
};

export default FloatingScrollButtons;
