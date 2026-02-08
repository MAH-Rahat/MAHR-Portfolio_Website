import { motion } from 'framer-motion';
import { useState } from 'react';

const HolographicCard = ({ children, className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        transform: isHovering
          ? `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 10}deg) rotateY(${(mousePosition.x - 0.5) * -10}deg)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Holographic gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        animate={{
          opacity: isHovering ? 0.3 : 0,
          background: isHovering
            ? `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.4), transparent 50%)`
            : 'transparent',
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Scan lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.3) 2px, rgba(59, 130, 246, 0.3) 4px)',
          }}
        />
      </div>

      {/* Glitch effect */}
      {isHovering && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: [0, 0.1, 0],
            x: [0, -2, 2, 0],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent)',
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/50" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/50" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/50" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/50" />
    </motion.div>
  );
};

export default HolographicCard;
