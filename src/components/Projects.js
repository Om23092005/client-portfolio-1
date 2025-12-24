import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🌟' },
    { id: 'web3', label: 'Web3', icon: '⛓️' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'saas', label: 'SaaS', icon: '💼' },
    { id: 'devops', label: 'DevOps', icon: '🚀' },
    { id: 'tools', label: 'Tools', icon: '🛠️' },
  ];

  const projects = [
    {
      id: 1,
      title: 'CypherChain',
      category: 'web3',
      description: 'Layer 1 blockchain for AAA Level gaming with advanced consensus mechanisms and gaming-optimized infrastructure.',
      longDescription: 'CypherChain is a revolutionary Layer 1 blockchain specifically designed for AAA gaming applications. It features ultra-low latency, high throughput, and gaming-specific smart contracts. The platform provides developers with tools to create immersive gaming experiences with true asset ownership and cross-game interoperability.',
      image: '⛓️',
      technologies: ['React', 'Node.js', 'Web3', 'Analytics'],
      features: ['Gaming-optimized consensus', 'Cross-game assets', 'Low latency', 'Developer tools'],
      github: 'https://github.com/answervinod/cypherweb',
      live: 'https://cypherchain.org',
      status: 'Completed',
      year: '2024'
    },
    {
      id: 2,
      title: 'Dedas',
      category: 'analytics',
      description: 'Peer To Peer Data Centre and Decentralised Data Storage solution with advanced analytics and monitoring.',
      longDescription: 'Dedas revolutionizes data storage through a decentralized peer-to-peer network. It provides secure, redundant, and cost-effective data storage while offering comprehensive analytics on storage patterns, network health, and performance metrics. Built with cutting-edge distributed systems technology.',
      image: '📊',
      technologies: ['Vue.js', 'D3.js', 'Python', 'API'],
      features: ['P2P storage', 'Data analytics', 'Network monitoring', 'Cost optimization'],
      github: 'https://github.com/answervinod/dedas-website',
      live: 'https://dedas.org',
      status: 'Completed',
      year: '2024'
    },
    {
      id: 3,
      title: 'Cynorg',
      category: 'saas',
      description: 'Alien Theory Blogs platform with real-time collaboration and community features for extraterrestrial enthusiasts.',
      longDescription: 'Cynorg is a specialized blogging platform dedicated to alien theories and extraterrestrial research. It features real-time collaboration tools, community discussions, evidence sharing, and advanced search capabilities. The platform connects researchers, enthusiasts, and theorists worldwide.',
      image: '👽',
      technologies: ['React', 'Express', 'MongoDB', 'Socket.io'],
      features: ['Real-time collaboration', 'Community discussions', 'Evidence sharing', 'Advanced search'],
      github: 'https://github.com/cynorg',
      live: 'https://cynorg.com',
      status: 'Completed',
      year: '2024'
    },
    {
      id: 4,
      title: 'Speedock',
      category: 'devops',
      description: 'High-performance MVP deployment platform with automated CI/CD pipelines and container orchestration.',
      longDescription: 'Speedock is a cutting-edge deployment platform designed for rapid MVP development and deployment. It features automated CI/CD pipelines, container orchestration with Kubernetes, and intelligent scaling. Perfect for startups and developers who need to deploy applications quickly and efficiently.',
      image: '🚀',
      technologies: ['Next.js', 'Docker', 'Kubernetes', 'DevOps'],
      features: ['Automated CI/CD', 'Container orchestration', 'Auto-scaling', 'Performance monitoring'],
      github: 'https://github.com/speedock',
      live: 'https://speedock.vercel.app',
      status: 'Completed',
      year: '2024'
    },
    {
      id: 5,
      title: 'Devistro',
      category: 'tools',
      description: 'Developer Focussed Social Media platform with code sharing, collaboration tools, and professional networking.',
      longDescription: 'Devistro is a social media platform built specifically for developers. It combines code sharing, project collaboration, professional networking, and knowledge exchange in one unified platform. Features include code snippets sharing, project showcases, developer job board, and technical discussions.',
      image: '👨‍💻',
      technologies: ['React', 'TypeScript', 'Electron', 'Tools'],
      features: ['Code sharing', 'Project collaboration', 'Developer networking', 'Job board'],
      github: 'https://github.com/devistro',
      live: 'https://devistro.vercel.app',
      status: 'Completed',
      year: '2024'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const ProjectCard = ({ project, index }) => (
    <motion.div
      className="neumorphism p-4 sm:p-6 rounded-xl sm:rounded-2xl cursor-pointer group"
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -10 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setSelectedProject(project)}
      layout
    >
      {/* Project Icon */}
      <div className="text-4xl sm:text-6xl mb-3 sm:mb-4 text-center">{project.image}</div>
      
      {/* Status Badge */}
      <div className="flex justify-between items-start mb-3 sm:mb-4">
        <span className={`neumorphism-inset px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
          project.status === 'Completed' ? 'text-green-600' :
          project.status === 'In Development' ? 'text-blue-600' :
          'text-orange-600'
        }`}>
          {project.status}
        </span>
        <span className="text-xs sm:text-sm text-gray-500 font-medium">{project.year}</span>
      </div>

      {/* Project Title */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-gradient-purple transition-colors duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
        {project.technologies.slice(0, 3).map((tech, techIndex) => (
          <span
            key={techIndex}
            className="neumorphism-inset px-2 py-1 rounded-lg text-xs font-medium text-gray-600"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="neumorphism-inset px-2 py-1 rounded-lg text-xs font-medium text-gray-500">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 sm:space-x-3">
        <motion.button
          className="neumorphism-button flex-1 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:text-gradient-purple transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            window.open(project.github, '_blank');
          }}
        >
          🔗 Code
        </motion.button>
        <motion.button
          className="neumorphism-button flex-1 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:text-gradient-blue transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            window.open(project.live, '_blank');
          }}
        >
          🚀 Live
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-12 sm:py-20 relative overflow-hidden neumorphism-container">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute neumorphism rounded-full opacity-10"
            style={{
              width: `${Math.random() * 150 + 75}px`,
              height: `${Math.random() * 150 + 75}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 25 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6">
              Featured Projects
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              A showcase of innovative solutions spanning web development, AI/ML, mobile applications, 
              and music technology. Each project represents a unique challenge and creative solution.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
            <div className="neumorphism p-2 rounded-2xl inline-flex mx-auto flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`px-3 sm:px-4 py-2 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-gradient-purple to-gradient-blue text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-1 sm:mr-2">{category.icon}</span>
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: '50+', label: 'Projects Completed', icon: '🎯' },
              { number: '15+', label: 'Technologies Mastered', icon: '🛠️' },
              { number: '100K+', label: 'Lines of Code', icon: '💻' },
              { number: '99%', label: 'Client Satisfaction', icon: '⭐' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="neumorphism p-6 rounded-2xl text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative neumorphism p-8 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 neumorphism-button w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800"
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>

              {/* Project Header */}
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">{selectedProject.image}</div>
                <h3 className="text-3xl font-bold gradient-text mb-4">
                  {selectedProject.title}
                </h3>
                <div className="flex justify-center items-center space-x-4 mb-4">
                  <span className={`neumorphism-inset px-4 py-2 rounded-full text-sm font-medium ${
                    selectedProject.status === 'Completed' ? 'text-green-600' :
                    selectedProject.status === 'In Development' ? 'text-blue-600' :
                    'text-orange-600'
                  }`}>
                    {selectedProject.status}
                  </span>
                  <span className="text-gray-500 font-medium">{selectedProject.year}</span>
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">About This Project</h4>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="neumorphism-inset px-4 py-2 rounded-lg font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-gradient-to-r from-gradient-purple to-gradient-blue rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="neumorphism-button flex-1 py-3 rounded-xl font-semibold text-gray-700 hover:text-gradient-purple transition-colors duration-300"
                  onClick={() => window.open(selectedProject.github, '_blank')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  🔗 View Source Code
                </motion.button>
                <motion.button
                  className="neumorphism-button flex-1 py-3 rounded-xl font-semibold bg-gradient-to-r from-gradient-purple to-gradient-blue text-white"
                  onClick={() => window.open(selectedProject.live, '_blank')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  🚀 View Live Demo
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;