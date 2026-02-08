import { useEffect, useState } from 'react';

const EasterEggs = () => {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [keySequence, setKeySequence] = useState('');

  const easterEggs = {
    'konami': '↑↑↓↓←→←→ba',
    'hello': 'hello',
    'ai': 'ai',
    'matrix': 'matrix',
    'hack': 'hack',
    'code': 'code',
    'dev': 'dev',
    'neural': 'neural'
  };

  const messages = {
    'konami': '🎮 Classic! You found the Konami Code! +30 Lives!',
    'hello': '👋 Hello there! Thanks for exploring!',
    'ai': '🤖 AI is the future! Welcome to the machine learning revolution!',
    'matrix': '💊 Take the red pill... Follow the white rabbit...',
    'hack': '💻 Hack the planet! But ethically, of course 😉',
    'code': '⌨️ Code is poetry. Keep creating!',
    'dev': '🚀 Developers, developers, developers!',
    'neural': '🧠 Neural networks are just fancy math. Change my mind!'
  };

  useEffect(() => {
    let sequence = '';
    const keyMap = {
      'ArrowUp': '↑',
      'ArrowDown': '↓',
      'ArrowLeft': '←',
      'ArrowRight': '→'
    };

    const handleKeyPress = (e) => {
      const key = keyMap[e.key] || e.key.toLowerCase();
      sequence += key;
      setKeySequence(sequence);

      // Keep only last 20 characters
      if (sequence.length > 20) {
        sequence = sequence.slice(-20);
      }

      // Check for easter eggs
      Object.entries(easterEggs).forEach(([name, code]) => {
        if (sequence.includes(code)) {
          setMessage(messages[name]);
          setShowMessage(true);
          sequence = '';
          setKeySequence('');
          
          setTimeout(() => {
            setShowMessage(false);
          }, 4000);
        }
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Random floating messages
  useEffect(() => {
    const randomMessages = [
      '// TODO: Take over the world',
      '/* Debugging: 90% staring, 10% typing */',
      '// Works on my machine ¯\\_(ツ)_/¯',
      '/* Coffee.exe has stopped working */',
      '// No bugs here, only features',
      '/* Powered by caffeine and determination */'
    ];

    const showRandomMessage = () => {
      if (Math.random() > 0.95 && !showMessage) {
        const randomMsg = randomMessages[Math.floor(Math.random() * randomMessages.length)];
        setMessage(randomMsg);
        setShowMessage(true);
        
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      }
    };

    const interval = setInterval(showRandomMessage, 10000);
    return () => clearInterval(interval);
  }, [showMessage]);

  return (
    <>
      {showMessage && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-down">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg shadow-2xl border border-cyan-300">
            <p className="text-sm md:text-base font-mono font-semibold">
              {message}
            </p>
          </div>
        </div>
      )}
      
      {/* Debug mode - show key sequence (hidden by default) */}
      {process.env.NODE_ENV === 'development' && keySequence && (
        <div className="fixed bottom-4 left-4 bg-black/80 text-green-400 px-3 py-2 rounded font-mono text-xs">
          Keys: {keySequence}
        </div>
      )}
    </>
  );
};

export default EasterEggs;
