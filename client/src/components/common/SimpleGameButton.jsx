import { useState } from 'react';
import SnakeGame from '../games/SnakeGame';

const SimpleGameButton = () => {
  const [showGame, setShowGame] = useState(false);

  return (
    <>
      {/* Simple Button - No animations, highest z-index */}
      <button
        onClick={() => {
          console.log('Button clicked!');
          setShowGame(true);
        }}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          zIndex: 99999,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
        }}
      >
        🎮
      </button>

      {/* Game Modal */}
      {showGame && <SnakeGame onClose={() => setShowGame(false)} />}
    </>
  );
};

export default SimpleGameButton;
