import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaChartLine, FaCode } from 'react-icons/fa';

const AIStatsWidget = () => {
  const [stats, setStats] = useState({
    neuralActivity: 0,
    modelAccuracy: 0,
    dataProcessed: 0,
    algorithmsActive: 0
  });

  useEffect(() => {
    // Animate stats on mount
    const intervals = [
      setInterval(() => {
        setStats(prev => ({
          ...prev,
          neuralActivity: Math.min(prev.neuralActivity + Math.random() * 5, 98)
        }));
      }, 100),
      
      setInterval(() => {
        setStats(prev => ({
          ...prev,
          modelAccuracy: Math.min(prev.modelAccuracy + Math.random() * 3, 95)
        }));
      }, 150),
      
      setInterval(() => {
        setStats(prev => ({
          ...prev,
          dataProcessed: Math.min(prev.dataProcessed + Math.random() * 4, 100)
        }));
      }, 120),
      
      setInterval(() => {
        setStats(prev => ({
          ...prev,
          algorithmsActive: Math.min(prev.algorithmsActive + Math.random() * 2, 42)
        }));
      }, 200)
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  const statItems = [
    {
      icon: FaBrain,
      label: 'Neural Activity',
      value: stats.neuralActivity.toFixed(1),
      unit: '%',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaRobot,
      label: 'Model Accuracy',
      value: stats.modelAccuracy.toFixed(1),
      unit: '%',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaChartLine,
      label: 'Data Processed',
      value: stats.dataProcessed.toFixed(1),
      unit: '%',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: FaCode,
      label: 'Algorithms Active',
      value: Math.floor(stats.algorithmsActive),
      unit: '',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {statItems.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="relative bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-gray-900 p-4 rounded-xl border border-gray-700 dark:border-gray-800 overflow-hidden group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          {/* Animated background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
          
          {/* Scan line effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className={`text-2xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
              <motion.div
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            
            <div className="text-2xl font-bold text-white mb-1">
              {stat.value}{stat.unit}
            </div>
            
            <div className="text-xs text-gray-400 font-mono">
              {stat.label}
            </div>

            {/* Progress bar */}
            {stat.unit === '%' && (
              <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${stat.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${stat.value}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AIStatsWidget;
