/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nasalization': ['Nasalization', 'sans-serif'],
      },
      colors: {
        'neumorphism': {
          'light': '#f0f0f3',
          'dark': '#d1d9e6',
          'shadow-light': '#ffffff',
          'shadow-dark': '#babecc',
        },
        'gradient': {
          'purple': '#667eea',
          'blue': '#764ba2',
        }
      },
      boxShadow: {
        'neumorphism': '20px 20px 60px #babecc, -20px -20px 60px #ffffff',
        'neumorphism-inset': 'inset 20px 20px 60px #babecc, inset -20px -20px 60px #ffffff',
        'neumorphism-sm': '5px 5px 10px #babecc, -5px -5px 10px #ffffff',
        'neumorphism-lg': '25px 25px 75px #babecc, -25px -25px 75px #ffffff',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}