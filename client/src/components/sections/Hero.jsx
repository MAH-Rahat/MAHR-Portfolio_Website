import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../../data/personal.js';
import Button from '../common/Button';
import TypingAnimation from '../effects/TypingAnimation';
import profileImage from '../../assets/images/profile.png';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Profile Picture */}
          <motion.div
            className="flex justify-center lg:justify-end order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
                <img
                  src={profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Status Badge */}
              <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Available for Work
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left order-2">
            <motion.p
              className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div
              className="text-lg sm:text-xl md:text-2xl font-medium mb-4 flex flex-wrap items-baseline justify-center lg:justify-start gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-gray-700 dark:text-gray-300">I'm a</span>
              <span className="text-primary-600 dark:text-primary-400">
                <TypingAnimation texts={personalInfo.roles} typingSpeed={100} deletingSpeed={50} pauseDuration={2000} />
              </span>
            </motion.div>

            <motion.p
              className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Specializing in Computer Vision, Deep Learning, and Full-Stack Development. 
              Building intelligent solutions with modern technologies.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {['Python', 'TensorFlow', 'PyTorch', 'React', 'Node.js'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto"
              >
                Contact Me
              </Button>
              <Button
                variant="ghost"
                size="md"
                icon={<FaDownload />}
                onClick={() => window.open('https://drive.google.com/file/d/1lREdDZvqfXJrzQfXIKr_3Hz8lHWIWiZA/view?usp=drive_open', '_blank')}
                className="w-full sm:w-auto"
              >
                Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
