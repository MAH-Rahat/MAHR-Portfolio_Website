import { motion } from 'framer-motion';
import Section from '../common/Section';
import { skills, SkillCategory } from '../../data/skills';
import { FaStar, FaFire, FaTrophy } from 'react-icons/fa';

const Skills = () => {
  const categories = Object.values(SkillCategory);

  const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
  };

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 90) return 'from-green-500 to-emerald-600';
    if (proficiency >= 75) return 'from-blue-500 to-cyan-600';
    return 'from-yellow-500 to-orange-600';
  };

  const getProficiencyIcon = (proficiency) => {
    if (proficiency >= 90) return <FaTrophy className="text-yellow-500" />;
    if (proficiency >= 75) return <FaFire className="text-orange-500" />;
    return <FaStar className="text-blue-500" />;
  };

  const getProficiencyLabel = (proficiency) => {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 75) return 'Advanced';
    return 'Intermediate';
  };

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="Technologies and tools I master"
      background="default"
    >
      <div className="space-y-12">
        {categories.map((category, catIndex) => {
          const categorySkills = getSkillsByCategory(category);
          if (categorySkills.length === 0) return null;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
                whileHover={{ x: 10 }}
              >
                <span className="w-2 h-8 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></span>
                {category}
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {skill.name}
                          </h4>
                          <div className="flex items-center gap-2">
                            {getProficiencyIcon(skill.proficiency)}
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              {getProficiencyLabel(skill.proficiency)}
                            </span>
                          </div>
                        </div>
                        <motion.span 
                          className="text-2xl font-bold text-primary-600 dark:text-primary-400"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.05, type: "spring" }}
                        >
                          {skill.proficiency}%
                        </motion.span>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-3 rounded-full bg-gradient-to-r ${getProficiencyColor(skill.proficiency)} relative`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                        </motion.div>
                      </div>
                      
                      {skill.yearsOfExperience && (
                        <motion.p 
                          className="text-sm text-gray-600 dark:text-gray-400 mt-3 flex items-center gap-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                          {skill.yearsOfExperience}+ years of hands-on experience
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
