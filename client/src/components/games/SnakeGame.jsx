import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaRedo, FaTrophy } from 'react-icons/fa';

const SnakeGame = ({ onClose }) => {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('ready'); // ready, playing, paused, gameOver
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem('snakeHighScore') || '0')
  );
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [speed, setSpeed] = useState(150);

  const gridSize = 20;
  const tileSize = 20;

  // Generate random food position
  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize)
    };
    setFood(newFood);
  }, []);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameState !== 'playing') return;

      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        case ' ':
          setGameState('paused');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameState]);

  // Game loop
  useEffect(() => {
    if (gameState !== 'playing') return;

    const gameLoop = setInterval(() => {
      setSnake(prevSnake => {
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y
        };

        // Check wall collision
        if (
          newHead.x < 0 ||
          newHead.x >= gridSize ||
          newHead.y < 0 ||
          newHead.y >= gridSize
        ) {
          setGameState('gameOver');
          return prevSnake;
        }

        // Check self collision
        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameState('gameOver');
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(prev => {
            const newScore = prev + 10;
            if (newScore > highScore) {
              setHighScore(newScore);
              localStorage.setItem('snakeHighScore', newScore.toString());
            }
            return newScore;
          });
          generateFood();
          setSpeed(prev => Math.max(50, prev - 2)); // Increase speed
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, speed);

    return () => clearInterval(gameLoop);
  }, [gameState, direction, food, speed, generateFood, highScore]);

  // Draw game
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
    for (let i = 0; i <= gridSize; i++) {
      ctx.beginPath();
      ctx.moveTo(i * tileSize, 0);
      ctx.lineTo(i * tileSize, gridSize * tileSize);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * tileSize);
      ctx.lineTo(gridSize * tileSize, i * tileSize);
      ctx.stroke();
    }

    // Draw snake
    snake.forEach((segment, index) => {
      const gradient = ctx.createLinearGradient(
        segment.x * tileSize,
        segment.y * tileSize,
        (segment.x + 1) * tileSize,
        (segment.y + 1) * tileSize
      );
      gradient.addColorStop(0, index === 0 ? '#3B82F6' : '#60A5FA');
      gradient.addColorStop(1, index === 0 ? '#1D4ED8' : '#3B82F6');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(
        segment.x * tileSize + 1,
        segment.y * tileSize + 1,
        tileSize - 2,
        tileSize - 2
      );
      
      // Add glow effect to head
      if (index === 0) {
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#3B82F6';
      } else {
        ctx.shadowBlur = 0;
      }
    });

    // Draw food
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#10B981';
    ctx.fillStyle = '#10B981';
    ctx.beginPath();
    ctx.arc(
      food.x * tileSize + tileSize / 2,
      food.y * tileSize + tileSize / 2,
      tileSize / 2 - 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.shadowBlur = 0;
  }, [snake, food]);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setSpeed(150);
    setSnake([{ x: 10, y: 10 }]);
    setDirection({ x: 1, y: 0 });
    generateFood();
  };

  const resumeGame = () => {
    setGameState('playing');
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-900 rounded-2xl p-6 max-w-lg w-full mx-4 border-2 border-blue-500/30 shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              🐍 Neural Snake
            </h2>
            <p className="text-sm text-gray-400">AI-Themed Snake Game</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <FaTimes className="text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Score */}
        <div className="flex justify-between mb-4">
          <div className="bg-blue-500/20 px-4 py-2 rounded-lg">
            <p className="text-xs text-blue-300">Score</p>
            <p className="text-2xl font-bold text-blue-400">{score}</p>
          </div>
          <div className="bg-yellow-500/20 px-4 py-2 rounded-lg flex items-center gap-2">
            <FaTrophy className="text-yellow-400" />
            <div>
              <p className="text-xs text-yellow-300">High Score</p>
              <p className="text-2xl font-bold text-yellow-400">{highScore}</p>
            </div>
          </div>
        </div>

        {/* Game Canvas */}
        <div className="relative bg-black rounded-lg overflow-hidden border-2 border-blue-500/30 mb-4">
          <canvas
            ref={canvasRef}
            width={gridSize * tileSize}
            height={gridSize * tileSize}
            className="w-full"
          />

          {/* Game States Overlay */}
          <AnimatePresence>
            {gameState !== 'playing' && (
              <motion.div
                className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {gameState === 'ready' && (
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">Ready to Play?</h3>
                    <p className="text-gray-300 mb-6">Use arrow keys to control the snake</p>
                    <button
                      onClick={startGame}
                      className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
                    >
                      Start Game
                    </button>
                  </div>
                )}

                {gameState === 'paused' && (
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">Paused</h3>
                    <button
                      onClick={resumeGame}
                      className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
                    >
                      Resume
                    </button>
                  </div>
                )}

                {gameState === 'gameOver' && (
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-red-400 mb-2">Game Over!</h3>
                    <p className="text-xl text-white mb-2">Score: {score}</p>
                    {score === highScore && score > 0 && (
                      <p className="text-yellow-400 mb-4">🎉 New High Score!</p>
                    )}
                    <button
                      onClick={startGame}
                      className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto"
                    >
                      <FaRedo />
                      Play Again
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Controls Info */}
        <div className="text-center text-sm text-gray-400">
          <p>🎮 Arrow Keys: Move | Space: Pause</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SnakeGame;
