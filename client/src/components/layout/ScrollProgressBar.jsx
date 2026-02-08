import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const ScrollProgressBar = () => {
  const scrollProgress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary-600 dark:bg-primary-400 z-50 origin-left"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
};

export default ScrollProgressBar;
