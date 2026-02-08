import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaRobot, FaBrain } from 'react-icons/fa';
import { personalInfo } from '../../data/personal.js';
import Button from '../common/Button';
import TypingAnimation from '../effects/TypingAnimation';
import profileImage from '../../assets/images/profile.png';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 pt-20 sm:pt-16 pb-20">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center max-w-6xl mx-auto">
          {/* Profile Picture - Left Side on Desktop, Top on Mobile */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Animated rings around profile */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl"
                animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-primary-500/30"
                animate={{ scale: [1, 1.05, 1], rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              {/* Profile Image Container */}
              <motion.div
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
                  style={{
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />
                {/* Gradient overlay for better blending */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/10 dark:to-purple-500/10" />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-3 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold shadow-lg whitespace-nowrap"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀 Available
              </motion.div>
              <motion.div
                className="absolute -bottom-3 -left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                💼 Open to Work
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content - Right Side on Desktop, Bottom on Mobile */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            {/* Floating Tech Icons - Hidden on mobile for cleaner look */}
            <motion.div
              className="hidden lg:block absolute top-10 -left-10 text-blue-500 opacity-20"
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <FaRobot size={50} />
            </motion.div>
            <motion.div
              className="hidden lg:block absolute bottom-10 -right-10 text-purple-500 opacity-20"
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <FaBrain size={45} />
            </motion.div>

            {/* Greeting */}
            <motion.p
              className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 mb-1 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary-600 dark:text-primary-400">const</span> greeting = <span className="text-green-600 dark:text-green-400">"👋 Hello, I'm"</span>;
            </motion.p>

            {/* Name with Gradient */}
            <motion.h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold -mt-1 mb-0 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Typing Animation for Roles */}
            <motion.div
              className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 flex flex-wrap items-baseline justify-center lg:justify-start gap-x-1.5 -mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-gray-700 dark:text-gray-300 whitespace-nowrap">I'm a</span>
              <span className="text-primary-600 dark:text-primary-400 inline-block">
                <TypingAnimation texts={personalInfo.roles} typingSpeed={100} deletingSpeed={50} pauseDuration={2000} />
              </span>
            </motion.div>

            {/* Enhanced Bio with Tech Keywords */}
            <motion.div
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4 md:mb-6 space-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="leading-relaxed">
                Specializing in <span className="text-blue-600 dark:text-blue-400 font-semibold">Computer Vision</span>, 
                <span className="text-purple-600 dark:text-purple-400 font-semibold"> Deep Learning</span>, and 
                <span className="text-pink-600 dark:text-pink-400 font-semibold"> Full-Stack Development</span>.
              </p>
              <p className="text-xs">
                Building intelligent solutions with <span className="font-mono text-primary-600 dark:text-primary-400">Python</span>, 
                <span className="font-mono text-primary-600 dark:text-primary-400"> TensorFlow</span>, 
                <span className="font-mono text-primary-600 dark:text-primary-400"> PyTorch</span>, 
                <span className="font-mono text-primary-600 dark:text-primary-400"> React</span>, and 
                <span className="font-mono text-primary-600 dark:text-primary-400"> Node.js</span>
              </p>
            </motion.div>

            {/* Tech Stack Badges */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-1.5 mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {['AI/ML', 'Computer Vision', 'Deep Learning', 'MERN Stack', 'Cloud Computing'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons - Responsive */}
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-2 mb-5 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => scrollToSection('projects')}
                  className="shadow-lg shadow-primary-500/50 w-full sm:w-auto text-sm"
                >
                  🚀 View Projects
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => scrollToSection('contact')}
                  className="w-full sm:w-auto text-sm"
                >
                  💬 Contact Me
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button
                  variant="ghost"
                  size="md"
                  icon={<FaDownload />}
                  onClick={() => window.open('https://drive.google.com/file/d/1lREdDZvqfXJrzQfXIKr_3Hz8lHWIWiZA/view?usp=drive_open', '_blank')}
                  className="w-full sm:w-auto text-sm"
                >
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links with Hover Effects */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {[
                { icon: FaGithub, url: personalInfo.github, label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
                { icon: FaLinkedin, url: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
                { icon: FaEnvelope, url: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:text-red-600' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator - Hidden on small screens to avoid overlap */}
      <motion.div
        className="hidden sm:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">scroll down</span>
          <div className="w-5 h-8 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-1.5">
            <motion.div
              className="w-1 h-1 bg-primary-600 dark:bg-primary-400 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
