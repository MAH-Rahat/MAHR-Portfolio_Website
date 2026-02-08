import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaRocket } from 'react-icons/fa';
import Section from '../common/Section';
import { projects, ProjectCategory } from '../../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState(ProjectCategory.All);

  const filteredProjects = activeFilter === ProjectCategory.All
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const categories = Object.values(ProjectCategory);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Some of my recent work"
      background="default"
    >
      {/* Filter Buttons with Enhanced Animation */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeFilter === category
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg shadow-primary-500/50 scale-105'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:scale-105'
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid with Enhanced Visual Cards */}
      <AnimatePresence mode="wait">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
              layout
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))',
                    'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))',
                    'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))',
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Project Image/Visual with Enhanced Design */}
              <div className="relative h-56 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center overflow-hidden">
                {/* Animated Particles Background */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Project Initial with Animation */}
                <motion.div
                  className="relative z-10 w-32 h-32 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/30 flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <span className="text-white text-5xl font-bold drop-shadow-lg">
                    {project.name.charAt(0)}
                  </span>
                </motion.div>

                {/* Corner Decorations */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-tr-full" />

                {/* Hover Overlay with Enhanced Links */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col items-center justify-end gap-3 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors border border-white/30"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="text-white" size={18} />
                        <span className="text-white text-sm font-medium">Code</span>
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 transition-colors shadow-lg"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaRocket className="text-white" size={18} />
                        <span className="text-white text-sm font-medium">Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </motion.div>

                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg flex items-center gap-1.5"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <FaStar className="text-white" size={12} />
                    <span className="text-white text-xs font-bold">Featured</span>
                  </motion.div>
                )}
              </div>

              {/* Project Content with Enhanced Typography */}
              <div className="relative p-6 space-y-4">
                {/* Project Title */}
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.name}
                </motion.h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies with Enhanced Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="relative px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-lg font-semibold border border-blue-200 dark:border-gray-600 overflow-hidden"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8, x: -10 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ delay: 0.4 + techIndex * 0.05 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10 flex items-center gap-1">
                        <FaCode size={10} />
                        {tech}
                      </span>
                    </motion.span>
                  ))}
                  {project.technologies.length > 4 && (
                    <motion.span 
                      className="px-3 py-1.5 text-gray-500 dark:text-gray-400 text-xs font-semibold bg-gray-100 dark:bg-gray-700 rounded-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      +{project.technologies.length - 4} more
                    </motion.span>
                  )}
                </div>

                {/* Bottom Links with Icons */}
                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold text-sm"
                      whileHover={{ x: 5, scale: 1.05 }}
                    >
                      <FaGithub size={16} /> View Code
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-semibold text-sm"
                      whileHover={{ x: 5, scale: 1.05 }}
                    >
                      <FaExternalLinkAlt size={14} /> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
