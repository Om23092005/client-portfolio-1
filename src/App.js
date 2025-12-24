import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Music from './components/Music';
import AICreations from './components/AICreations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Intersection Observer for section tracking
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [loading]);

  if (loading) {
    return (
      <AnimatePresence>
        <LoadingScreen />
      </AnimatePresence>
    );
  }

  return (
    <ErrorBoundary>
      <div className="App relative min-h-screen bg-neumorphism-light overflow-x-hidden">
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* Particle Background */}
        <div className="particles">
          <div className="absolute inset-0 opacity-10">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-gradient-purple to-gradient-blue rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <Navigation currentSection={currentSection} />

        {/* Main Content */}
        <main className="relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Hero Section */}
            <section id="hero" className="min-h-screen">
              <Hero />
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen py-20">
              <About />
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen py-20">
              <Projects />
            </section>

            {/* Music Section */}
            <section id="music" className="min-h-screen py-20">
              <Music />
            </section>

            {/* AI Creations Section */}
            <section id="ai-creations" className="min-h-screen py-20">
              <AICreations />
            </section>

            {/* Contact Section */}
            <section id="contact" className="min-h-screen py-20">
              <Contact />
            </section>
          </motion.div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <motion.button
          className="fixed bottom-8 right-8 neumorphism-button p-4 z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <svg
            className="w-6 h-6 text-gradient-purple"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </ErrorBoundary>
  );
}

export default App;
