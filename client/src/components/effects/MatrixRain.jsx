import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const MatrixRain = ({ density = 0.5, speed = 1, opacity = 0.15 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters - mix of binary, hex, and symbols
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns * density)).fill(1);

    // Animation with requestAnimationFrame for better performance
    let lastTime = 0;
    const fps = 30; // Limit to 30 FPS for better performance
    const interval = 1000 / fps;

    const draw = (currentTime) => {
      if (currentTime - lastTime < interval) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      lastTime = currentTime;

      // Fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text style
      ctx.fillStyle = `rgba(0, 255, 150, ${opacity})`;
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        // Reset drop randomly
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += speed * 0.5;
      });

      animationId = requestAnimationFrame(draw);
    };

    let animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [density, speed, opacity]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{ mixBlendMode: 'screen', willChange: 'transform' }}
    />
  );
};

export default MatrixRain;
