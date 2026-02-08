import { motion } from 'framer-motion';
import Section from '../common/Section';
import { skills, SkillCategory } from '../../data/skills';
import { FaCheckCircle } from 'react-icons/fa';

const Skills = () => {
  const categories = Object.values(SkillCategory);

  const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Programming': 'from-blue-500 to-cyan-500',
      'Web Technologies': 'from-green-500 to-emerald-500',
      'AI & Data': 'from-purple-500 to-pink-500',
      'Tools': 'from-orange-500 to-red-500',
      'Languages': 'from-indigo-500 to-blue-500',
      'Soft Skills': 'from-yellow-500 to-orange-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const getCategoryBgColor = (category) => {
    const colors = {
      'Programming': 'bg-blue-50 dark:bg-blue-900/10',
      'Web Technologies': 'bg-green-50 dark:bg-green-900/10',
      'AI & Data': 'bg-purple-50 dark:bg-purple-900/10',
      'Tools': 'bg-orange-50 dark:bg-orange-900/10',
      'Languages': 'bg-indigo-50 dark:bg-indigo-900/10',
      'Soft Skills': 'bg-yellow-50 dark:bg-yellow-900/10'
    };
    return colors[category] || 'bg-gray-50 dark:bg-gray-900/10';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Programming': '💻',
      'Web Technologies': '🌐',
      'AI & Data': '🤖',
      'Tools': '🛠️',
      'Languages': '🗣️',
      'Soft Skills': '🎯'
    };
    return icons[category] || '📌';
  };

  const getCategoryDescription = (category) => {
    const descriptions = {
      'Programming': 'Core programming languages and markup',
      'Web Technologies': 'Full-stack web development frameworks',
      'AI & Data': 'Machine learning and data science tools',
      'Tools': 'Design and development utilities',
      'Languages': 'Communication languages',
      'Soft Skills': 'Professional and interpersonal abilities'
    };
    return descriptions[category] || '';
  };

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="A comprehensive overview of my technical skills and professional competencies"
      background="default"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {categories.map((category, catIndex) => {
          const categorySkills = getSkillsByCategory(category);
          if (categorySkills.length === 0) return null;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
            >
              {/* Category Header with Icon and Gradient */}
              <div className="mb-5">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getCategoryColor(category)} flex items-center justify-center text-3xl shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {getCategoryIcon(category)}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {category}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {categorySkills.length} {categorySkills.length === 1 ? 'skill' : 'skills'}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {getCategoryDescription(category)}
                </p>
              </div>

              {/* Skills List with Enhanced Design */}
              <div className="space-y-2.5">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className={`flex items-center gap-3 p-3 rounded-lg ${getCategoryBgColor(category)} hover:shadow-md transition-all duration-200 group/item cursor-default`}
                  >
                    <FaCheckCircle className={`text-sm bg-gradient-to-r ${getCategoryColor(category)} bg-clip-text text-transparent flex-shrink-0`} />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Skills Summary Section */}
      <motion.div
        className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Skills Overview
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div 
            className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              {skills.filter(s => s.category === SkillCategory.Programming).length}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Programming Languages</div>
          </motion.div>
          <motion.div 
            className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
              {skills.filter(s => s.category === SkillCategory.AIData).length}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">AI/ML Tools</div>
          </motion.div>
          <motion.div 
            className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
              {skills.filter(s => s.category === SkillCategory.WebTech).length}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Web Technologies</div>
          </motion.div>
          <motion.div 
            className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
              {skills.filter(s => s.category === SkillCategory.Tools).length}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Design Tools</div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Skills;
