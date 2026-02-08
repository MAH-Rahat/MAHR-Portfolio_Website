import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const AITerminal = () => {
  const [lines, setLines] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const commands = [
    { text: '$ initializing AI systems...', delay: 500, status: 'loading' },
    { text: '✓ Neural networks loaded', delay: 1500, status: 'success' },
    { text: '✓ Computer vision modules active', delay: 2000, status: 'success' },
    { text: '✓ Deep learning frameworks ready', delay: 2500, status: 'success' },
    { text: '$ analyzing portfolio data...', delay: 3000, status: 'loading' },
    { text: '✓ 50+ projects processed', delay: 4000, status: 'success' },
    { text: '✓ Skills matrix optimized', delay: 4500, status: 'success' },
    { text: '$ system status: OPERATIONAL', delay: 5500, status: 'success' },
  ];

  useEffect(() => {
    commands.forEach((cmd, index) => {
      setTimeout(() => {
        setLines(prev => [...prev, cmd]);
      }, cmd.delay);
    });

    // Hide terminal after all commands
    setTimeout(() => {
      setIsVisible(false);
    }, 7000);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50 w-80 sm:w-96"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gray-900 dark:bg-black border border-green-500/30 rounded-lg shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gray-800 dark:bg-gray-950 px-4 py-2 flex items-center justify-between border-b border-green-500/30">
          <div className="flex items-center gap-2">
            <FaTerminal className="text-green-400 text-sm" />
            <span className="text-green-400 text-xs font-mono">AI_SYSTEM.exe</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white text-xs"
          >
            ✕
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-4 font-mono text-xs space-y-2 max-h-64 overflow-y-auto">
          <AnimatePresence>
            {lines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2"
              >
                {line.status === 'loading' && (
                  <FaSpinner className="text-yellow-400 animate-spin" />
                )}
                {line.status === 'success' && (
                  <FaCheckCircle className="text-green-400" />
                )}
                <span className={`${
                  line.status === 'loading' ? 'text-yellow-400' : 'text-green-400'
                }`}>
                  {line.text}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {/* Blinking cursor */}
          {lines.length > 0 && (
            <motion.span
              className="inline-block w-2 h-4 bg-green-400 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AITerminal;
