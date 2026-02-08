import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Section = ({ 
  id, 
  children, 
  className = '', 
  title = null,
  subtitle = null,
  background = 'default',
  ...props 
}) => {
  const { targetRef, hasIntersected } = useIntersectionObserver();

  const backgrounds = {
    default: 'bg-white dark:bg-gray-900',
    alt: 'bg-gray-50 dark:bg-gray-800',
    gradient: 'bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800'
  };

  return (
    <section
      id={id}
      ref={targetRef}
      className={`py-12 sm:py-16 md:py-20 ${backgrounds[background]} ${className}`}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  background: PropTypes.oneOf(['default', 'alt', 'gradient'])
};

export default Section;
