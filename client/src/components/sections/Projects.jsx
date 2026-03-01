import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from 'react-icons/fa';
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
      {/* Filter Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeFilter === category
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-md'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects List */}
      <AnimatePresence mode="wait">
        <motion.div 
          className="space-y-4 max-w-5xl mx-auto"
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              layout
            >
              <div className="flex flex-col md:flex-row gap-4 p-4">
                {/* Project Icon/Initial */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-md bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-sm relative">
                    <span className="text-white text-xl md:text-2xl font-bold">
                      {project.name.charAt(0)}
                    </span>
                    {project.featured && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center shadow-sm">
                        <FaStar className="text-white" size={10} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 min-w-0">
                  {/* Title and Category */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                        {project.name}
                      </h3>
                      <span className="inline-block mt-1 px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2 flex-shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          title="View Code"
                        >
                          <FaGithub className="text-gray-700 dark:text-gray-300" size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-md hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt className="text-primary-700 dark:text-primary-300" size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 6).map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded font-medium"
                      >
                        <FaCode size={9} className="text-primary-600 dark:text-primary-400" />
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="inline-flex items-center px-2 py-1 text-gray-500 dark:text-gray-400 text-xs font-medium">
                        +{project.technologies.length - 6}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-gray-500 dark:text-gray-400">
            No projects found in this category.
          </p>
        </motion.div>
      )}
    </Section>
  );
};

export default Projects;
