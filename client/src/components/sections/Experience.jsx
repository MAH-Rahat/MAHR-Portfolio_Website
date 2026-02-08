import { motion } from 'framer-motion';
import { FaBuilding, FaCalendar, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa';
import Section from '../common/Section';
import { experiences } from '../../data/experience';

const Experience = () => {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="My professional journey"
      background="alt"
    >
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 dark:from-primary-900 dark:via-primary-700 dark:to-primary-900 hidden lg:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Content */}
              <div className="flex-1">
                <motion.div 
                  className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Animated gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                      <div className="flex-1">
                        <motion.h3 
                          className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                          whileHover={{ x: 5 }}
                        >
                          {exp.title}
                        </motion.h3>
                        
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold">
                            <FaBuilding className="text-sm" />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <FaMapMarkerAlt className="text-xs" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full text-sm text-primary-700 dark:text-primary-300 whitespace-nowrap">
                        <FaCalendar className="text-xs" />
                        {exp.startDate} - {exp.endDate}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, i) => (
                        <motion.li 
                          key={i} 
                          className="text-gray-600 dark:text-gray-300 text-sm flex items-start group/item"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1 group-hover/item:scale-125 transition-transform">
                            ▹
                          </span>
                          <span className="flex-1">{desc}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/50 dark:to-secondary-900/50 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium hover:shadow-md transition-shadow cursor-default"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 * techIndex }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    )}

                    {/* Achievement badge for first experience */}
                    {index === 0 && (
                      <motion.div
                        className="absolute -top-3 -left-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"
                        initial={{ rotate: -12, scale: 0 }}
                        whileInView={{ rotate: -12, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, type: "spring" }}
                      >
                        <FaTrophy />
                        Latest
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden lg:block relative z-10">
                <motion.div 
                  className="w-6 h-6 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                  whileHover={{ scale: 1.3 }}
                >
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary-600"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Spacer */}
              <div className="flex-1 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
