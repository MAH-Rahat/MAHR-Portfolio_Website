import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          className="text-6xl font-bold mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary-600 dark:text-primary-400">MAH</span>
          <span className="text-gray-900 dark:text-white"> Rahat</span>
        </motion.div>

        {/* Loading Spinner */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.p
          className="mt-8 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
