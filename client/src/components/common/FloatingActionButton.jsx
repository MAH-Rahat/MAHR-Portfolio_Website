import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGamepad, FaTrophy, FaRocket, FaTimes, FaLightbulb } from 'react-icons/fa';
import SnakeGame from '../games/SnakeGame';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);

  const actions = [
    {
      icon: FaGamepad,
      label: 'Play Snake',
      color: 'from-blue-500 to-cyan-500',
      onClick: () => {
        setShowGame(true);
        setIsOpen(false);
      }
    },
    {
      icon: FaTrophy,
      label: 'Achievements',
      color: 'from-yellow-500 to-orange-500',
      onClick: () => {
        setShowAchievements(true);
        setIsOpen(false);
      }
    },
    {
      icon: FaLightbulb,
      label: 'Easter Egg',
      color: 'from-purple-500 to-pink-500',
      onClick: () => {
        alert('🎉 You found the easter egg! Keep exploring for more surprises!');
        setIsOpen(false);
      }
    }
  ];

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-20 sm:bottom-24 left-4 sm:left-8 z-[9999]">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-16 left-0 space-y-3 z-[9999]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {actions.map((action, index) => (
                <motion.button
                  key={action.label}
                  onClick={action.onClick}
                  className={`flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${action.color} text-white rounded-full shadow-lg hover:shadow-xl transition-all group cursor-pointer`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <action.icon className="text-xl" />
                  <span className="font-medium whitespace-nowrap">{action.label}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center cursor-pointer relative z-[9999] ${
            isOpen ? 'rotate-45' : ''
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
        >
          {isOpen ? <FaTimes className="text-2xl" /> : <FaRocket className="text-2xl" />}
        </motion.button>

        {/* Pulse ring */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-500 pointer-events-none"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>

      {/* Snake Game Modal */}
      <AnimatePresence>
        {showGame && <SnakeGame onClose={() => setShowGame(false)} />}
      </AnimatePresence>

      {/* Achievements Modal */}
      <AnimatePresence>
        {showAchievements && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAchievements(false)}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl p-6 max-w-md w-full mx-4 border-2 border-yellow-500/30"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <FaTrophy className="text-yellow-400" />
                  Achievements
                </h2>
                <button
                  onClick={() => setShowAchievements(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <FaTimes className="text-gray-400 hover:text-white" />
                </button>
              </div>

              <div className="space-y-3">
                {[
                  { title: 'Explorer', desc: 'Visited all sections', unlocked: true },
                  { title: 'Gamer', desc: 'Played the Snake game', unlocked: localStorage.getItem('snakeHighScore') > 0 },
                  { title: 'High Scorer', desc: 'Score 100+ in Snake', unlocked: parseInt(localStorage.getItem('snakeHighScore') || '0') >= 100 },
                  { title: 'Easter Egg Hunter', desc: 'Found the hidden easter egg', unlocked: false },
                  { title: 'Night Owl', desc: 'Used dark mode', unlocked: true }
                ].map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    className={`p-4 rounded-lg ${
                      achievement.unlocked
                        ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30'
                        : 'bg-gray-800 border border-gray-700'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`text-2xl ${achievement.unlocked ? 'grayscale-0' : 'grayscale opacity-50'}`}>
                        🏆
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold ${achievement.unlocked ? 'text-yellow-400' : 'text-gray-500'}`}>
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-gray-400">{achievement.desc}</p>
                      </div>
                      {achievement.unlocked && (
                        <div className="text-green-400">✓</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingActionButton;
