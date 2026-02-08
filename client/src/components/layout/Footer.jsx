import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaArrowUp, FaCode, FaRocket } from 'react-icons/fa';
import { personalInfo } from '../../data/personal.js';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FaGithub, href: personalInfo.github, label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:text-red-400' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white py-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4 flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              <FaCode className="text-primary-400" />
              MAH Rahat
            </motion.h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Full-Stack AI Engineer specializing in <span className="text-primary-400 font-semibold">Computer Vision</span> and <span className="text-secondary-400 font-semibold">Machine Learning</span>.
              Building intelligent solutions that make a difference.
            </p>
            <motion.div 
              className="flex items-center gap-2 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <FaRocket className="text-accent-400" />
              <span>Available for freelance opportunities</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <motion.span
                      className="text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -5 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? "_blank" : undefined}
                  rel={social.label !== 'Email' ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-3 text-gray-400 ${social.color} transition-colors group`}
                  aria-label={social.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <social.icon size={20} />
                  </motion.div>
                  <span className="font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              className="mt-6 flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowUp className="group-hover:animate-bounce" />
              <span>Back to Top</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-800 pt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <motion.p 
              className="flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              © {currentYear} MAH Rahat. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
              >
                <FaHeart className="text-red-500" />
              </motion.span>
              {' '}and React
            </motion.p>
            
            <motion.div 
              className="flex items-center gap-4 text-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="px-3 py-1 bg-gray-800 rounded-full">
                Built with Vite + React
              </span>
              <span className="px-3 py-1 bg-gray-800 rounded-full">
                Styled with Tailwind CSS
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
