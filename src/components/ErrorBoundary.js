import React from 'react';
import { motion } from 'framer-motion';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      isRetrying: false
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // You can also log the error to an error reporting service here
    // logErrorToService(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ isRetrying: true });
    
    // Simulate retry delay
    setTimeout(() => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        isRetrying: false
      });
    }, 1000);
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
          <motion.div
            className="max-w-2xl w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Error Icon */}
            <motion.div
              className="neumorphism w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: 'spring', 
                stiffness: 200, 
                damping: 15,
                delay: 0.2 
              }}
            >
              <motion.div
                className="text-6xl"
                animate={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
              >
                🚨
              </motion.div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              className="neumorphism p-8 rounded-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="text-4xl font-bold gradient-text mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Don't worry, even the best portfolios have their off days. 
                Let's get you back on track!
              </p>
              
              {/* Error Details (Development Mode) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <motion.details
                  className="text-left mt-6 p-4 bg-red-50 rounded-xl border border-red-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <summary className="cursor-pointer font-semibold text-red-800 mb-2">
                    🔍 Error Details (Development Mode)
                  </summary>
                  <div className="text-sm text-red-700 space-y-2">
                    <div>
                      <strong>Error:</strong>
                      <pre className="mt-1 p-2 bg-red-100 rounded text-xs overflow-auto">
                        {this.state.error.toString()}
                      </pre>
                    </div>
                    {this.state.errorInfo && (
                      <div>
                        <strong>Component Stack:</strong>
                        <pre className="mt-1 p-2 bg-red-100 rounded text-xs overflow-auto">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </motion.details>
              )}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                onClick={this.handleRetry}
                disabled={this.state.isRetrying}
                className="neumorphism-button px-8 py-4 rounded-xl font-semibold text-gray-700 hover:text-gradient-purple transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
                whileHover={{ scale: this.state.isRetrying ? 1 : 1.05 }}
                whileTap={{ scale: this.state.isRetrying ? 1 : 0.95 }}
              >
                {this.state.isRetrying ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-gradient-purple border-t-transparent rounded-full mr-3"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Retrying...
                  </>
                ) : (
                  <>
                    <span className="mr-2">🔄</span>
                    Try Again
                  </>
                )}
              </motion.button>

              <motion.button
                onClick={this.handleReload}
                className="neumorphism-button px-8 py-4 rounded-xl font-semibold text-gray-700 hover:text-gradient-purple transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">🔃</span>
                Reload Page
              </motion.button>

              <motion.button
                onClick={() => window.history.back()}
                className="neumorphism-button px-8 py-4 rounded-xl font-semibold text-gray-700 hover:text-gradient-purple transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">⬅️</span>
                Go Back
              </motion.button>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="mt-12 p-6 neumorphism-inset rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Still having issues? 🤔
              </h3>
              <p className="text-gray-600 mb-4">
                If this error persists, please don't hesitate to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:vinod@example.com?subject=Portfolio Error Report"
                  className="neumorphism-button px-6 py-3 rounded-xl font-medium text-gray-700 hover:text-gradient-purple transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">📧</span>
                  Report Issue
                </motion.a>
                <motion.a
                  href="https://github.com/vinodkumar/portfolio/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neumorphism-button px-6 py-3 rounded-xl font-medium text-gray-700 hover:text-gradient-purple transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">🐙</span>
                  GitHub Issues
                </motion.a>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-4xl opacity-10"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {['⚠️', '🔧', '🛠️', '💻', '🔍'][i]}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;