import { useEffect, useRef } from 'react';

const CircuitBoard = ({ opacity = 0.15, lineColor = '#22d3ee' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawCircuit();
    };

    const drawCircuit = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      ctx.globalAlpha = opacity;

      const gridSize = 50;
      const nodes = [];

      // Create grid of nodes
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          if (Math.random() > 0.7) {
            nodes.push({ x, y });
          }
        }
      }

      // Draw connections
      nodes.forEach((node, i) => {
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = lineColor;
        ctx.fill();

        // Connect to nearby nodes
        nodes.slice(i + 1).forEach(otherNode => {
          const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
          if (distance < gridSize * 2 && Math.random() > 0.5) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            
            // Create right-angle connections (circuit board style)
            if (Math.random() > 0.5) {
              ctx.lineTo(otherNode.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
            } else {
              ctx.lineTo(node.x, otherNode.y);
              ctx.lineTo(otherNode.x, otherNode.y);
            }
            
            ctx.stroke();
          }
        });
      });

      // Draw some random circuit elements
      nodes.forEach(node => {
        if (Math.random() > 0.8) {
          // Draw small rectangles (resistors/capacitors)
          ctx.fillStyle = lineColor;
          ctx.fillRect(node.x - 3, node.y - 1, 6, 2);
        }
      });
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [opacity, lineColor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default CircuitBoard;
