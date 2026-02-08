import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'md',
  ...props 
}) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300';
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';

  return (
    <motion.div
      className={`${baseStyles} ${paddings[padding]} ${hoverStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg'])
};

export default Card;
