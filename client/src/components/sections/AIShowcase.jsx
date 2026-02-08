import { motion } from 'framer-motion';
import Section from '../common/Section';
import AIStatsWidget from '../effects/AIStatsWidget';
import CodeShowcase from '../effects/CodeShowcase';
import HolographicCard from '../effects/HolographicCard';
import { FaBrain, FaRobot, FaChartLine, FaMicrochip, FaNetworkWired, FaEye } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiOpencv, SiKeras } from 'react-icons/si';

const AIShowcase = () => {
  const aiCapabilities = [
    {
      icon: FaBrain,
      title: 'Deep Learning',
      description: 'Neural networks and advanced ML algorithms',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['CNN', 'RNN', 'Transformers']
    },
    {
      icon: FaEye,
      title: 'Computer Vision',
      description: 'Image processing and object detection',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Object Detection', 'Segmentation', 'OCR']
    },
    {
      icon: FaChartLine,
      title: 'Data Science',
      description: 'Statistical analysis and predictive modeling',
      gradient: 'from-green-500 to-teal-500',
      features: ['Analytics', 'Visualization', 'Forecasting']
    },
    {
      icon: FaMicrochip,
      title: 'Model Optimization',
      description: 'Performance tuning and deployment',
      gradient: 'from-orange-500 to-red-500',
      features: ['Quantization', 'Pruning', 'Edge AI']
    },
    {
      icon: FaNetworkWired,
      title: 'MLOps',
      description: 'ML pipeline automation and monitoring',
      gradient: 'from-indigo-500 to-purple-500',
      features: ['CI/CD', 'Monitoring', 'Versioning']
    },
    {
      icon: FaRobot,
      title: 'AI Integration',
      description: 'Seamless AI/ML API development',
      gradient: 'from-pink-500 to-rose-500',
      features: ['REST APIs', 'Real-time', 'Scalable']
    },
  ];

  const frameworks = [
    { icon: SiTensorflow, name: 'TensorFlow', color: 'text-orange-500' },
    { icon: SiPytorch, name: 'PyTorch', color: 'text-red-500' },
    { icon: SiOpencv, name: 'OpenCV', color: 'text-green-500' },
    { icon: SiKeras, name: 'Keras', color: 'text-red-600' },
  ];

  return (
    <Section
      id="ai-showcase"
      title="AI & Machine Learning"
      subtitle="Cutting-edge AI solutions and deep learning expertise"
      background="alt"
    >
      {/* AI Stats Dashboard */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Real-Time AI Metrics
          </span>
        </h3>
        <AIStatsWidget />
      </motion.div>

      {/* AI Capabilities Grid */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          AI Capabilities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCapabilities.map((capability, index) => (
            <HolographicCard key={capability.title}>
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${capability.gradient} mb-4`}>
                  <capability.icon className="text-2xl text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {capability.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {capability.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {capability.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Animated border */}
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${capability.gradient} opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none`}
                />
              </motion.div>
            </HolographicCard>
          ))}
        </div>
      </motion.div>

      {/* Code Showcase */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Code Examples
        </h3>
        <CodeShowcase />
      </motion.div>

      {/* AI Frameworks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          AI Frameworks & Tools
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {frameworks.map((framework, index) => (
            <motion.div
              key={framework.name}
              className="flex flex-col items-center gap-2 group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow">
                <framework.icon className={`text-5xl ${framework.color}`} />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {framework.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative AI Elements */}
      <div className="absolute top-20 left-10 opacity-10 pointer-events-none hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <FaBrain className="text-8xl text-blue-500" />
        </motion.div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 pointer-events-none hidden lg:block">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <FaRobot className="text-8xl text-purple-500" />
        </motion.div>
      </div>
    </Section>
  );
};

export default AIShowcase;
