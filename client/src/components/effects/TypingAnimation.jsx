import { useState, useEffect } from 'react';

const TypingAnimation = ({ texts, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timeout;

    if (!isDeleting && displayText === currentText) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === '') {
      // Move to next text
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    } else {
      // Type or delete character
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        setDisplayText(prev => {
          if (isDeleting) {
            return currentText.substring(0, prev.length - 1);
          } else {
            return currentText.substring(0, prev.length + 1);
          }
        });
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-block">
      {displayText}
      <span className={`inline-block w-0.5 h-8 md:h-12 bg-current ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
    </span>
  );
};

export default TypingAnimation;
