import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Section from '../common/Section';
import { personalInfo, statistics } from '../../data/personal.js';
import { FaBriefcase, FaCode, FaTools, FaGithub, FaRocket, FaLightbulb, FaHeart } from 'react-icons/fa';

const iconMap = {
  FaBriefcase: FaBriefcase,
  FaCode: FaCode,
  FaTools: FaTools,
  FaGithub: FaGithub
};

const AnimatedCounter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    const startTime = Date.now();
    const endValue = parseInt(end);
    
    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const currentCount = Math.floor(progress * endValue);
      
      setCount(currentCount);
      
      if (progress === 1) {
        clearInterval(timer);
        setHasAnimated(true);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end, duration, hasAnimated]);

  return <span>{count}{suffix}</span>;
};

const About = () => {
  const highlights = [
    { icon: FaRocket, text: 'Fast Learner & Problem Solver', color: 'text-blue-500' },
    { icon: FaLightbulb, text: 'Creative & Innovative Thinker', color: 'text-yellow-500' },
    { icon: FaHeart, text: 'Passionate About AI & Tech', color: 'text-red-500' }
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know me better"
      background="alt"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Full-Stack AI Engineer from{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-secondary-600">
              {personalInfo.location}
            </span>
          </motion.h3>
          
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {personalInfo.bio}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              My journey started in <span className="font-semibold text-primary-600 dark:text-primary-400">graphic design</span> and evolved through <span className="font-semibold text-primary-600 dark:text-primary-400">business strategy</span> into <span className="font-semibold text-primary-600 dark:text-primary-400">full-stack development</span> and <span className="font-semibold text-primary-600 dark:text-primary-400">AI engineering</span>. This unique path gives me a holistic perspective on building products that are not only technically sound but also user-centric and business-aligned.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Currently in my 3rd year at <span className="font-semibold text-primary-600 dark:text-primary-400">BRAC University</span>, I'm constantly learning and applying cutting-edge technologies to solve real-world problems.
            </motion.p>
          </div>

          {/* Highlights */}
          <motion.div 
            className="mt-8 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <highlight.icon className={`text-2xl ${highlight.color}`} />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="mt-8 space-y-2 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">📧 Email:</span>{' '}
              <a href={`mailto:${personalInfo.email}`} className="text-primary-600 dark:text-primary-400 hover:underline">
                {personalInfo.email}
              </a>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">📱 Phone:</span>{' '}
              <a href={`tel:${personalInfo.phone}`} className="text-primary-600 dark:text-primary-400 hover:underline">
                {personalInfo.phone}
              </a>
            </p>
          </motion.div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {statistics.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg text-center overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon with pulse effect */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  <Icon className="text-4xl text-primary-600 dark:text-primary-400 mx-auto mb-4 relative z-10" />
                </motion.div>
                
                {/* Animated counter */}
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 relative z-10">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium relative z-10">
                  {stat.label}
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
