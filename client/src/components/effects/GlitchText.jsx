import { useState, useEffect } from 'react';

const GlitchText = ({ children, className = '', glitchIntensity = 'medium' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const intensityMap = {
      low: { interval: 8000, duration: 200 },
      medium: { interval: 5000, duration: 300 },
      high: { interval: 3000, duration: 400 }
    };

    const { interval, duration } = intensityMap[glitchIntensity] || intensityMap.medium;

    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), duration);
    }, interval);

    return () => clearInterval(glitchInterval);
  }, [glitchIntensity]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={`relative z-10 ${isGlitching ? 'animate-glitch' : ''}`}>
        {children}
      </span>
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 text-cyan-500 opacity-70"
            style={{
              transform: 'translate(-2px, -2px)',
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)'
            }}
          >
            {children}
          </span>
          <span
            className="absolute top-0 left-0 text-red-500 opacity-70"
            style={{
              transform: 'translate(2px, 2px)',
              clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)'
            }}
          >
            {children}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;
