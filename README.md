# Vinod Kumar - Portfolio Website

A modern, interactive portfolio website showcasing my work as a Full Stack Developer, Music Producer, and AI Artist. Built with React and featuring stunning neumorphic design, smooth animations, and an immersive user experience.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices
- **Neumorphic UI**: Modern neumorphic design with smooth shadows and depth
- **Smooth Animations**: Powered by Framer Motion for fluid interactions
- **Interactive Sections**:
  - Hero section with animated name and rotating roles
  - About section with tabbed content (Skills, Experience, Education, Interests)
  - Projects showcase with filtering and detailed modals
  - Music player with playlist and track controls
  - AI Art gallery with category filtering
  - Contact form with EmailJS integration
- **Dark Mode Ready**: Clean, professional color scheme
- **Performance Optimized**: Fast loading and smooth scrolling

## 🚀 Tech Stack

- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 12.18.1
- **Icons**: React Icons 5.5.0
- **Email**: EmailJS Browser 4.4.1
- **Routing**: React Router DOM 7.6.2

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Om23092005/client-portfolio-1.git
cd Portfolio01
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
Portfolio01/
├── public/
│   ├── Assets/
│   │   └── music/          # Music files
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── AICreations.js
│   │   ├── Contact.js
│   │   ├── CustomCursor.js
│   │   ├── ErrorBoundary.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── LoadingScreen.js
│   │   ├── Music.js
│   │   ├── Navigation.js
│   │   └── Projects.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Colors
Edit the gradient colors in `tailwind.config.js`:
```javascript
colors: {
  'gradient-purple': '#8b5cf6',
  'gradient-blue': '#3b82f6',
  // Add your custom colors
}
```

### Content
- Update personal information in each component
- Replace project data in `Projects.js`
- Update music tracks in `Music.js`
- Modify AI artworks in `AICreations.js`

## 📧 Contact Form Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Add your credentials to `.env`

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the build folder to Netlify
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Vinod Kumar**
- LinkedIn: [answervinod](https://linkedin.com/in/answervinod)
- GitHub: [answervinod](https://github.com/answervinod)
- Twitter: [@answervinod](https://x.com/answervinod)
- Email: vinod@dedas.org

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from React Icons
- Animations powered by Framer Motion
- UI framework by Tailwind CSS

---

Made with ❤️ and lots of ☕ by Vinod Kumar
