import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaStar, FaBook, FaTrophy } from 'react-icons/fa';
import Section from '../common/Section';
import { education, achievements } from '../../data/education';

const Education = () => {
  return (
    <Section
      id="education"
      title="Education & Achievements"
      subtitle="My academic journey and accomplishments"
      background="alt"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <motion.h3 
            className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <FaGraduationCap className="text-primary-600 dark:text-primary-400" />
            Education
          </motion.h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full" />
                <motion.div
                  className="absolute -bottom-4 -right-4 text-6xl text-primary-500/5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <FaGraduationCap />
                </motion.div>

                <div className="relative z-10">
                  <motion.h4 
                    className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-start gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <FaBook className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                    <span>{edu.degree}</span>
                  </motion.h4>
                  
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  
                  {edu.status && (
                    <motion.div 
                      className="mt-3 flex items-center gap-2 text-sm font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 rounded-full">
                        <FaStar className="text-xs" />
                        {edu.status}
                      </div>
                    </motion.div>
                  )}

                  {/* Current student badge */}
                  {index === 0 && (
                    <motion.div
                      className="absolute -top-2 -right-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                      initial={{ rotate: 12, scale: 0 }}
                      whileInView={{ rotate: 12, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: "spring" }}
                      animate={{ y: [0, -3, 0] }}
                    >
                      Current
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <motion.h3 
            className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <FaAward className="text-accent-600 dark:text-accent-400" />
            Achievements & Certifications
          </motion.h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: -5 }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Decorative trophy icon */}
                <motion.div
                  className="absolute -bottom-4 -left-4 text-6xl text-accent-500/5"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <FaTrophy />
                </motion.div>

                <div className="relative z-10">
                  <motion.h4 
                    className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-start gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <FaTrophy className="text-accent-600 dark:text-accent-400 mt-1 flex-shrink-0" />
                    <span>{achievement.title}</span>
                  </motion.h4>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm rounded-full font-medium">
                      {achievement.date}
                    </span>
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
