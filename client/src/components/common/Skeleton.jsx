import { motion } from 'framer-motion';

export const SkeletonCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      <motion.div
        className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.div
        className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-3"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
      />
      <motion.div
        className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-3/4"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
      />
    </div>
  );
};

export const SkeletonText = ({ lines = 3 }) => {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          className="h-4 bg-gray-200 dark:bg-gray-700 rounded"
          style={{ width: index === lines - 1 ? '60%' : '100%' }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
        />
      ))}
    </div>
  );
};

export const SkeletonImage = ({ className = '' }) => {
  return (
    <motion.div
      className={`bg-gray-200 dark:bg-gray-700 rounded ${className}`}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  );
};

export const SkeletonGitHubStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <motion.div
            className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: item * 0.1 }}
          />
          <motion.div
            className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: item * 0.1 + 0.2 }}
          />
        </div>
      ))}
    </div>
  );
};

export default { SkeletonCard, SkeletonText, SkeletonImage, SkeletonGitHubStats };
