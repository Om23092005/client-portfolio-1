import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeField, setActiveField] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const projectTypes = [
    { id: 'web', label: 'Web Development', icon: '💻' },
    { id: 'mobile', label: 'Mobile App', icon: '📱' },
    { id: 'ai', label: 'AI/ML Project', icon: '🤖' },
    { id: 'music', label: 'Music Production', icon: '🎵' },
    { id: 'design', label: 'UI/UX Design', icon: '🎨' },
    { id: 'consulting', label: 'Consulting', icon: '💡' },
  ];

  const budgetRanges = [
    { id: 'small', label: '$1K - $5K', icon: '💰' },
    { id: 'medium', label: '$5K - $15K', icon: '💎' },
    { id: 'large', label: '$15K - $50K', icon: '🏆' },
    { id: 'enterprise', label: '$50K+', icon: '🚀' },
  ];

  const timelines = [
    { id: 'urgent', label: '1-2 weeks', icon: '⚡' },
    { id: 'normal', label: '1-2 months', icon: '📅' },
    { id: 'flexible', label: '3-6 months', icon: '🗓️' },
    { id: 'ongoing', label: 'Ongoing', icon: '🔄' },
  ];

  const contactMethods = [
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/answervinod',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: 'from-blue-600 to-blue-800',
      action: () => window.open('https://linkedin.com/in/answervinod', '_blank')
    },
    {
      type: 'GitHub',
      value: 'github.com/answervinod',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: 'from-gray-700 to-gray-900',
      action: () => window.open('https://github.com/answervinod', '_blank')
    },
    {
      type: 'Twitter',
      value: 'x.com/answervinod',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: 'from-gray-800 to-black',
      action: () => window.open('https://x.com/answervinod', '_blank')
    },
    {
      type: 'Email',
      value: 'vinod@dedas.org',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      ),
      color: 'from-blue-500 to-purple-600',
      action: () => window.open('mailto:vinod@dedas.org')
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get readable labels for the selected options
      const selectedProjectType = projectTypes.find(type => type.id === formData.projectType)?.label || formData.projectType;
      const selectedBudget = budgetRanges.find(budget => budget.id === formData.budget)?.label || formData.budget;
      const selectedTimeline = timelines.find(timeline => timeline.id === formData.timeline)?.label || formData.timeline;

      // Prepare template parameters using EmailJS standard variables
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'vinod@dedas.org', // Your receiving email
        subject: formData.subject,
        message: `Project Type: ${selectedProjectType || 'Not specified'}
Budget: ${selectedBudget || 'Not specified'}
Timeline: ${selectedTimeline || 'Not specified'}

Message:
${formData.message}`
      };

      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: '',
        budget: '',
        timeline: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

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

  return (
    <section id="contact" className="py-12 sm:py-20 relative overflow-hidden neumorphism-container">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Contact Icons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          >
            {['📧', '📞', '💬', '🤝', '✨', '🚀'][Math.floor(Math.random() * 6)]}
          </motion.div>
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
              Let's Create Something Amazing
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Ready to bring your ideas to life? Whether it's a web application, AI project,
              or music production, I'm here to help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="neumorphism p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
                  📝 Project Inquiry
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField(null)}
                        className="w-full neumorphism-input text-sm sm:text-base"
                        placeholder="Your name"
                        required
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                        className="w-full neumorphism-input"
                        placeholder="your@email.com"
                        required
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <motion.input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('subject')}
                      onBlur={() => setActiveField(null)}
                      className="w-full neumorphism-input"
                      placeholder="Project subject"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {projectTypes.map((type) => (
                        <motion.button
                          key={type.id}
                          type="button"
                          className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 ${formData.projectType === type.id
                            ? 'bg-gradient-to-r from-gradient-purple to-gradient-blue text-white'
                            : 'neumorphism text-gray-700 hover:text-gradient-purple'
                            }`}
                          onClick={() => setFormData(prev => ({ ...prev, projectType: type.id }))}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="block text-lg mb-1">{type.icon}</span>
                          {type.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Budget Range
                      </label>
                      <div className="space-y-2">
                        {budgetRanges.map((budget) => (
                          <motion.button
                            key={budget.id}
                            type="button"
                            className={`w-full p-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${formData.budget === budget.id
                              ? 'bg-gradient-to-r from-gradient-purple to-gradient-blue text-white'
                              : 'neumorphism text-gray-700 hover:text-gradient-purple'
                              }`}
                            onClick={() => setFormData(prev => ({ ...prev, budget: budget.id }))}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="mr-3">{budget.icon}</span>
                            {budget.label}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Timeline
                      </label>
                      <div className="space-y-2">
                        {timelines.map((timeline) => (
                          <motion.button
                            key={timeline.id}
                            type="button"
                            className={`w-full p-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center ${formData.timeline === timeline.id
                              ? 'bg-gradient-to-r from-gradient-purple to-gradient-blue text-white'
                              : 'neumorphism text-gray-700 hover:text-gradient-purple'
                              }`}
                            onClick={() => setFormData(prev => ({ ...prev, timeline: timeline.id }))}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="mr-3">{timeline.icon}</span>
                            {timeline.label}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField(null)}
                      rows={6}
                      className="w-full neumorphism-input resize-none"
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                      required
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-gradient-purple to-gradient-blue shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        Sending...
                      </span>
                    ) : (
                      <span>🚀 Send Message</span>
                    )}
                  </motion.button>

                  {/* Submit Status */}
                  {submitStatus && (
                    <motion.div
                      className={`p-4 rounded-xl text-center font-medium ${submitStatus === 'success'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                        }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      {submitStatus === 'success'
                        ? '✅ Message sent successfully! I\'ll get back to you soon.'
                        : '❌ Failed to send message. Please try again or contact me directly.'}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
              {/* Contact Methods */}
              <div className="neumorphism p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
                  🤝 Get In Touch
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.type}
                      className="neumorphism-button p-3 sm:p-4 rounded-lg sm:rounded-xl cursor-pointer group"
                      onClick={method.action}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center text-white`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 group-hover:text-gradient-purple transition-colors duration-300 text-sm sm:text-base">
                            {method.type}
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm break-all">{method.value}</p>
                        </div>
                        <div className="text-gray-400 group-hover:text-gradient-purple transition-colors duration-300">
                          →
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="neumorphism p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
                  ⏰ Availability
                </h3>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-medium text-gray-700 text-sm sm:text-base">Response Time:</span>
                    <span className="neumorphism-inset px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium text-green-600">
                      Within 24 hours
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-medium text-gray-700 text-sm sm:text-base">Time Zone:</span>
                    <span className="text-gray-600 text-sm sm:text-base">IST (UTC+5:30)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-medium text-gray-700 text-sm sm:text-base">Preferred Contact:</span>
                    <span className="text-gray-600 text-sm sm:text-base">Email / LinkedIn</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-medium text-gray-700 text-sm sm:text-base">Current Status:</span>
                    <span className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse" />
                      <span className="text-green-600 font-medium text-sm sm:text-base">Available for new projects</span>
                    </span>
                  </div>
                </div>
              </div>


            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;