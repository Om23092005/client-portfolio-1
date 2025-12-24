import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const tabs = [
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'interests', label: 'Interests', icon: '🎯' },
  ];

  const skills = {
    'Web': {
      items: [
        { name: 'Frontend Development', level: 95 },
        { name: 'React & Next.js', level: 90 },
        { name: 'Backend Development', level: 85 }
      ],
      color: 'from-blue-500 to-purple-600'
    },
    'Design': {
      items: [
        { name: 'UI/UX Design', level: 80 }
      ],
      color: 'from-green-500 to-teal-600'
    },
    'AI': {
      items: [
        { name: 'AI Art Generation', level: 88 }
      ],
      color: 'from-purple-500 to-pink-600'
    },
    'Creative': {
      items: [
        { name: 'Music Composition', level: 75 },
        { name: 'Animation & Motion', level: 85 }
      ],
      color: 'from-orange-500 to-red-600'
    },
    'Product': {
      items: [
        { name: 'SaaS Development', level: 92 }
      ],
      color: 'from-indigo-500 to-blue-600'
    }
  };

  const experiences = [
    {
      title: 'Senior Data Analyst',
      company: 'IBM, AT&T, Microsoft, Amazon, Accenture',
      period: '2010 - 2017',
      description: 'Worked with world\'s leading organizations solving large-scale problems through data-driven insights.',
      achievements: ['Solved complex data challenges', 'Worked across multiple Fortune 500 companies', 'Specialized in large-scale analytics']
    },
    {
      title: 'Blockchain Developer',
      company: 'Decentralized Ecosystems',
      period: '2017 - Present',
      description: 'Full-time transition into blockchain space, contributing to decentralized ecosystems, protocol design, and smart contract development.',
      achievements: ['Architected CypherChain platform', 'Developed DeDaS system', 'Created Cynorg governance tools']
    },
    {
      title: 'AI & Creative Technologist',
      company: 'Independent',
      period: '2020 - Present',
      description: 'Focus on intersection of Artificial Intelligence and Creative Technology — AI-generated music, immersive websites, and emotion-driven tools.',
      achievements: ['AI-generated music composition', 'SaaS platform development', 'Visual experience creation']
    }
  ];

  const achievements = [
    { number: '50+', label: 'Projects Completed', icon: '🚀' },
    { number: '14+', label: 'Years Experience', icon: '💼' },
    { number: '∞', label: 'Ideas', icon: '💡' }
  ];

  const education = [
    {
      degree: 'Data Analytics & Computer Science',
      institution: 'Professional Certification',
      period: '2008 - 2010',
      specialization: 'Large-scale Data Analysis & Systems'
    },
    {
      degree: 'Blockchain Development',
      institution: 'Self-taught & Industry Experience',
      period: '2016 - 2017',
      specialization: 'Smart Contracts & Protocol Design'
    },
    {
      degree: 'AI & Creative Technology',
      institution: 'Continuous Learning',
      period: '2019 - Present',
      specialization: 'AI Music Generation & Creative Tools'
    }
  ];

  const interests = [
    { name: 'AI Art Generation', icon: '🎨', description: 'Creating stunning visuals using machine learning' },
    { name: 'Music Composition', icon: '🎵', description: 'Producing electronic and ambient music' },
    { name: 'Photography', icon: '📸', description: 'Capturing moments and landscapes' },
    { name: 'Gaming', icon: '🎮', description: 'Exploring virtual worlds and game development' },
    { name: 'Traveling', icon: '✈️', description: 'Discovering new cultures and inspirations' },
    { name: 'Cooking', icon: '👨‍🍳', description: 'Experimenting with fusion cuisines' }
  ];

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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            {Object.entries(skills).map(([category, { items, color }], index) => (
              <motion.div
                key={category}
                className="neumorphism p-4 sm:p-6 rounded-xl sm:rounded-2xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h4 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                  {category}
                </h4>
                <div className="space-y-3">
                  {items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    >
                      <span className="text-sm sm:text-base text-gray-700 font-medium">{skill.name}</span>
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <span className="text-xs sm:text-sm text-gray-500">{skill.level}%</span>
                        <motion.div
                          className="neumorphism-inset w-16 sm:w-24 h-2 rounded-full overflow-hidden"
                          initial={{ width: 0 }}
                          animate={{ width: '4rem' }}
                          transition={{ duration: 0.8, delay: (index * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        >
                          <motion.div
                            className={`h-full bg-gradient-to-r ${color} rounded-full`}
                            initial={{ width: '0%' }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.05) + 0.5 }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="neumorphism p-8 rounded-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h4>
                    <p className="text-lg text-gradient-purple font-semibold">{exp.company}</p>
                  </div>
                  <span className="neumorphism-inset px-4 py-2 rounded-full text-sm font-medium text-gray-600 mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      className="flex items-center text-sm text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (achIndex * 0.1) + 0.3 }}
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-gradient-purple to-gradient-blue rounded-full mr-3" />
                      {achievement}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'education':
        return (
          <div className="space-y-8">
            {/* Achievement Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="neumorphism p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{achievement.icon}</div>
                  <div className="text-xl sm:text-3xl font-bold gradient-text mb-1">{achievement.number}</div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Education & Learning */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Learning Journey</h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="neumorphism p-6 rounded-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-800">{edu.degree}</h4>
                    <span className="neumorphism-inset px-3 py-1 rounded-full text-sm font-medium text-gray-600 mt-1 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gradient-purple font-semibold mb-2">{edu.institution}</p>
                  <p className="text-gray-600 text-sm">{edu.specialization}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'interests':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="neumorphism p-6 rounded-2xl text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="text-4xl mb-4">{interest.icon}</div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{interest.name}</h4>
                <p className="text-gray-600 text-sm">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-12 sm:py-20 relative overflow-hidden neumorphism-container">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute neumorphism rounded-full opacity-20"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
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
              About Me
            </h2>
            
            {/* Profile Image */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="neumorphism w-48 h-48 mx-auto rounded-3xl p-4">
                <img 
                  src="/Assets/profile-image.jpg" 
                  alt="Vinod Kumar" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>
            
            {/* Subtitle */}
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-gray-700 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Jack Of all Trades
            </motion.h3>
            
            {/* Professional Tagline */}
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Bridging Data, Blockchain & AI to build things that move — both digitally and emotionally.
            </motion.p>
          </motion.div>

          {/* Enhanced My Journey Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gradient-purple via-gradient-blue to-gradient-purple bg-clip-text text-transparent mb-4">
                  My Journey
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-gradient-purple to-gradient-blue mx-auto rounded-full"></div>
              </motion.div>

              {/* Timeline Container */}
              <div className="relative">
                {/* Central Timeline Line - Hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-gradient-purple via-gradient-blue to-gradient-purple h-full rounded-full opacity-30"></div>
                {/* Mobile Timeline Line */}
                <div className="md:hidden absolute left-6 w-1 bg-gradient-to-b from-gradient-purple via-gradient-blue to-gradient-purple h-full rounded-full opacity-30"></div>
                
                {/* Timeline Items */}
                <div className="space-y-8 md:space-y-16">
                  {/* Introduction */}
                  <motion.div 
                    className="relative flex items-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-8 md:text-right">
                      <div className="neumorphism p-4 md:p-6 rounded-2xl">
                        <div className="flex items-center md:justify-end mb-4">
                          <span className="text-2xl md:text-3xl mr-3">🚀</span>
                          <h4 className="text-lg md:text-xl font-bold text-gray-800">The Beginning</h4>
                        </div>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                          I'm <strong className="text-gray-800">Vinod Kumar</strong> — a multidisciplinary technologist with a deep-rooted passion for building digital futures.
                        </p>
                      </div>
                    </div>
                    {/* Timeline dot */}
                    <div className="absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-gradient-purple to-gradient-blue rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="hidden md:block w-1/2 pl-8"></div>
                  </motion.div>

                  {/* Corporate Journey */}
                  <motion.div 
                    className="relative flex items-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <div className="hidden md:block w-1/2 pr-8"></div>
                    <div className="absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-gradient-blue to-gradient-purple rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="w-full md:w-1/2 pl-16 md:pl-8">
                      <div className="neumorphism p-4 md:p-6 rounded-2xl">
                        <div className="flex items-center mb-4">
                          <span className="text-2xl md:text-3xl mr-3">💼</span>
                          <h4 className="text-lg md:text-xl font-bold text-gray-800">Corporate Excellence</h4>
                          <span className="ml-auto text-xs md:text-sm bg-gradient-to-r from-gradient-purple to-gradient-blue text-white px-2 md:px-3 py-1 rounded-full">2010</span>
                        </div>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                          I began my journey in 2010, working with some of the world's leading organizations including <strong className="text-gradient-purple">IBM, AT&T, Microsoft, Amazon, and Accenture</strong>, where I served as a Senior Data Analyst solving large-scale problems through data-driven insights.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Blockchain Transition */}
                  <motion.div 
                    className="relative flex items-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-8 md:text-right">
                      <div className="neumorphism p-4 md:p-6 rounded-2xl">
                        <div className="flex items-center md:justify-end mb-4">
                          <span className="text-2xl md:text-3xl mr-3">⛓️</span>
                          <h4 className="text-lg md:text-xl font-bold text-gray-800">Blockchain Pioneer</h4>
                          <span className="ml-auto md:ml-3 text-xs md:text-sm bg-gradient-to-r from-gradient-blue to-gradient-purple text-white px-2 md:px-3 py-1 rounded-full">2017</span>
                        </div>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                          In 2017, I transitioned full-time into the blockchain space, contributing to decentralized ecosystems, protocol design, and smart contract development. I've since architected platforms like <strong className="text-gradient-purple">CypherChain, DeDaS, and Cynorg</strong>, pushing the boundaries of on-chain utility, governance, and scalability.
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-gradient-purple to-gradient-blue rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="hidden md:block w-1/2 pl-8"></div>
                  </motion.div>

                  {/* AI & Creative Tech */}
                  <motion.div 
                    className="relative flex items-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  >
                    <div className="hidden md:block w-1/2 pr-8"></div>
                    <div className="absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-gradient-blue to-gradient-purple rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="w-full md:w-1/2 pl-16 md:pl-8">
                      <div className="neumorphism p-4 md:p-6 rounded-2xl">
                        <div className="flex items-center mb-4">
                          <span className="text-2xl md:text-3xl mr-3">🤖</span>
                          <h4 className="text-lg md:text-xl font-bold text-gray-800">AI & Creative Tech</h4>
                          <span className="ml-auto text-xs md:text-sm bg-gradient-to-r from-gradient-purple to-gradient-blue text-white px-2 md:px-3 py-1 rounded-full">Today</span>
                        </div>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                          Today, my focus lies at the intersection of <strong className="text-gradient-purple">Artificial Intelligence and Creative Technology</strong> — composing AI-generated music, crafting immersive websites, and building tools that blend logic with emotion. My work spans across SaaS platforms, visual experiences, and AI-enhanced digital content.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Philosophy Quote */}
              <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="neumorphism p-8 rounded-3xl max-w-4xl mx-auto relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gradient-purple via-gradient-blue to-gradient-purple"></div>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl mr-4">💭</span>
                    <h4 className="text-2xl font-bold text-gray-800">My Philosophy</h4>
                  </div>
                  <p className="text-xl font-medium text-gray-700 italic leading-relaxed">
                    Whether it's code, sound, or structure — I believe in creating systems that not only work but <em className="text-gradient-purple font-bold text-2xl">feel</em>.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
            <div className="neumorphism p-1 sm:p-2 rounded-xl sm:rounded-2xl inline-flex mx-auto overflow-x-auto">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-gradient-purple to-gradient-blue text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-1 sm:mr-2">{tab.icon}</span>
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderTabContent()}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;