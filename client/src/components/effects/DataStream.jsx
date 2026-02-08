import { useEffect, useRef } from 'react';

const DataStream = ({ position = 'left', speed = 1 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const dataTypes = [
      '0x', '1x', 'FF', 'A3', 'B7', 'C9', 'D2', 'E5',
      '>>>', '<<<', '===', '!==', '&&', '||', '=>',
      'fn()', 'var', 'let', 'const', 'async', 'await',
      '{...}', '[...]', 'null', 'true', 'false',
      'AI', 'ML', 'DL', 'NN', 'GPU', 'CPU', 'RAM'
    ];

    const createDataLine = () => {
      const line = document.createElement('div');
      line.className = 'data-line absolute text-xs font-mono whitespace-nowrap';
      line.style.cssText = `
        color: rgba(34, 211, 238, ${Math.random() * 0.5 + 0.3});
        top: ${Math.random() * 100}%;
        animation: streamData ${20 / speed}s linear infinite;
        animation-delay: ${Math.random() * -20}s;
      `;
      
      // Create random data string
      const dataLength = Math.floor(Math.random() * 5) + 3;
      const dataString = Array.from({ length: dataLength }, () => 
        dataTypes[Math.floor(Math.random() * dataTypes.length)]
      ).join(' ');
      
      line.textContent = dataString;
      container.appendChild(line);
    };

    // Create multiple data lines
    for (let i = 0; i < 8; i++) {
      createDataLine();
    }

    return () => {
      container.innerHTML = '';
    };
  }, [speed]);

  const positionClass = position === 'left' ? 'left-0' : 'right-0';

  return (
    <>
      <style>
        {`
          @keyframes streamData {
            0% {
              transform: translateX(${position === 'left' ? '-100%' : '100%'});
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateX(${position === 'left' ? '100vw' : '-100vw'});
              opacity: 0;
            }
          }
        `}
      </style>
      <div
        ref={containerRef}
        className={`fixed ${positionClass} top-0 h-full w-full pointer-events-none z-5 overflow-hidden`}
      />
    </>
  );
};

export default DataStream;
