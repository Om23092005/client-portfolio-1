import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const AICreations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'masonry'
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const categories = [
    { id: 'all', label: 'All Creations', icon: '🎨' },
    { id: 'abstract', label: 'Abstract', icon: '🌀' },
    { id: 'portraits', label: 'Portraits', icon: '👤' },
    { id: 'landscapes', label: 'Landscapes', icon: '🏔️' },
    { id: 'futuristic', label: 'Futuristic', icon: '🚀' },
    { id: 'experimental', label: 'Experimental', icon: '🧪' },
  ];

  const artworks = [
    {
      id: 1,
      title: 'Digital Consciousness',
      category: 'abstract',
      description: 'An exploration of artificial consciousness through swirling digital patterns and neural network visualizations.',
      prompt: 'Digital consciousness emerging from neural networks, abstract art, vibrant colors, flowing data streams',
      model: 'DALL-E 3',
      dimensions: '1024x1024',
      created: '2023-11-15',
      style: 'Abstract Digital',
      colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'],
      tags: ['consciousness', 'neural', 'digital', 'abstract'],
      image: '🧠',
      likes: 234,
      downloads: 89
    },
    {
      id: 2,
      title: 'Neon Samurai',
      category: 'portraits',
      description: 'A cyberpunk warrior blending traditional Japanese aesthetics with futuristic neon elements.',
      prompt: 'Cyberpunk samurai warrior, neon lights, traditional armor, futuristic city background, dramatic lighting',
      model: 'Midjourney v6',
      dimensions: '1024x1536',
      created: '2023-11-10',
      style: 'Cyberpunk Portrait',
      colors: ['#FF0080', '#00FFFF', '#FFD700', '#8A2BE2'],
      tags: ['samurai', 'cyberpunk', 'neon', 'warrior'],
      image: '⚔️',
      likes: 456,
      downloads: 178
    },
    {
      id: 3,
      title: 'Quantum Landscape',
      category: 'landscapes',
      description: 'A surreal landscape where quantum physics meets natural beauty, featuring impossible geometries.',
      prompt: 'Quantum physics landscape, impossible geometries, floating islands, aurora borealis, surreal nature',
      model: 'Stable Diffusion XL',
      dimensions: '1536x1024',
      created: '2023-11-08',
      style: 'Surreal Landscape',
      colors: ['#00FF7F', '#FF69B4', '#1E90FF', '#FFD700'],
      tags: ['quantum', 'surreal', 'landscape', 'physics'],
      image: '🌌',
      likes: 312,
      downloads: 145
    },
    {
      id: 4,
      title: 'Holographic Dreams',
      category: 'futuristic',
      description: 'A vision of future technology where holographic interfaces blend seamlessly with reality.',
      prompt: 'Holographic user interface, futuristic technology, transparent displays, neon accents, sci-fi aesthetic',
      model: 'DALL-E 3',
      dimensions: '1024x1024',
      created: '2023-11-05',
      style: 'Sci-Fi Interface',
      colors: ['#00BFFF', '#FF1493', '#00FF00', '#FFD700'],
      tags: ['holographic', 'interface', 'future', 'technology'],
      image: '📱',
      likes: 189,
      downloads: 67
    },
    {
      id: 5,
      title: 'Data Metamorphosis',
      category: 'experimental',
      description: 'An experimental piece showing the transformation of raw data into beautiful visual patterns.',
      prompt: 'Data visualization metamorphosis, binary code transforming into butterflies, digital art, colorful',
      model: 'Midjourney v6',
      dimensions: '1024x1024',
      created: '2023-11-03',
      style: 'Data Visualization',
      colors: ['#FF4500', '#32CD32', '#FF69B4', '#1E90FF'],
      tags: ['data', 'metamorphosis', 'visualization', 'experimental'],
      image: '🦋',
      likes: 278,
      downloads: 123
    },
    {
      id: 6,
      title: 'Cosmic Engineer',
      category: 'portraits',
      description: 'A portrait of a cosmic engineer designing galaxies with advanced technological tools.',
      prompt: 'Cosmic engineer portrait, designing galaxies, advanced technology, space background, ethereal lighting',
      model: 'Stable Diffusion XL',
      dimensions: '1024x1536',
      created: '2023-11-01',
      style: 'Cosmic Portrait',
      colors: ['#4B0082', '#FF6347', '#00CED1', '#FFD700'],
      tags: ['cosmic', 'engineer', 'galaxy', 'space'],
      image: '👨‍🚀',
      likes: 345,
      downloads: 156
    },
    {
      id: 7,
      title: 'Fractal Symphony',
      category: 'abstract',
      description: 'A musical composition visualized through fractal patterns and geometric harmonies.',
      prompt: 'Fractal patterns representing music, geometric harmonies, colorful mathematical art, symphony visualization',
      model: 'DALL-E 3',
      dimensions: '1024x1024',
      created: '2023-10-28',
      style: 'Mathematical Art',
      colors: ['#FF1493', '#00FF7F', '#1E90FF', '#FFD700'],
      tags: ['fractal', 'music', 'mathematics', 'symphony'],
      image: '🎼',
      likes: 423,
      downloads: 201
    },
    {
      id: 8,
      title: 'Bioluminescent City',
      category: 'futuristic',
      description: 'A futuristic city powered by bioluminescent organisms, blending nature with technology.',
      prompt: 'Bioluminescent futuristic city, glowing organisms, bio-architecture, sustainable technology, night scene',
      model: 'Midjourney v6',
      dimensions: '1536x1024',
      created: '2023-10-25',
      style: 'Bio-Futurism',
      colors: ['#00FF7F', '#FF69B4', '#00BFFF', '#FFD700'],
      tags: ['bioluminescent', 'city', 'sustainable', 'bio-tech'],
      image: '🌃',
      likes: 567,
      downloads: 234
    },
    {
      id: 9,
      title: 'Neural Garden',
      category: 'experimental',
      description: 'An experimental garden where plants grow in neural network patterns, merging biology with AI.',
      prompt: 'Neural network garden, plants growing in AI patterns, bio-digital fusion, glowing connections',
      model: 'Stable Diffusion XL',
      dimensions: '1024x1024',
      created: '2023-10-22',
      style: 'Bio-Digital Art',
      colors: ['#32CD32', '#FF1493', '#00CED1', '#FFD700'],
      tags: ['neural', 'garden', 'biology', 'AI'],
      image: '🌱',
      likes: 298,
      downloads: 134
    },
    {
      id: 10,
      title: 'Temporal Rift',
      category: 'landscapes',
      description: 'A landscape showing a rift in time, with different eras visible through the dimensional tear.',
      prompt: 'Temporal rift landscape, time portal, different eras visible, dimensional tear, surreal environment',
      model: 'DALL-E 3',
      dimensions: '1536x1024',
      created: '2023-10-20',
      style: 'Temporal Art',
      colors: ['#8A2BE2', '#FF6347', '#00FF7F', '#FFD700'],
      tags: ['temporal', 'rift', 'time', 'dimensional'],
      image: '⏰',
      likes: 389,
      downloads: 167
    },
    {
      id: 11,
      title: 'Digital Shaman',
      category: 'portraits',
      description: 'A mystical figure bridging the digital and spiritual realms through technological shamanism.',
      prompt: 'Digital shaman portrait, mystical technology, spiritual cyberpunk, glowing runes, ethereal atmosphere',
      model: 'Midjourney v6',
      dimensions: '1024x1536',
      created: '2023-10-18',
      style: 'Mystical Cyberpunk',
      colors: ['#9370DB', '#FF69B4', '#00CED1', '#FFD700'],
      tags: ['shaman', 'digital', 'mystical', 'spiritual'],
      image: '🧙‍♂️',
      likes: 445,
      downloads: 189
    },
    {
      id: 12,
      title: 'Algorithmic Emotions',
      category: 'abstract',
      description: 'An abstract representation of how AI might experience and process human emotions.',
      prompt: 'AI emotions visualization, algorithmic feelings, colorful data streams, emotional processing, abstract art',
      model: 'Stable Diffusion XL',
      dimensions: '1024x1024',
      created: '2023-10-15',
      style: 'Emotional AI Art',
      colors: ['#FF1493', '#00FF7F', '#1E90FF', '#FFD700'],
      tags: ['emotions', 'algorithm', 'AI', 'feelings'],
      image: '💭',
      likes: 356,
      downloads: 145
    }
  ];

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

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

  const ArtworkCard = ({ artwork, index }) => (
    <motion.div
      className="neumorphism p-6 rounded-2xl cursor-pointer group overflow-hidden"
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -10 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setSelectedArtwork(artwork)}
      layout
    >
      {/* Artwork Preview */}
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <div className="aspect-square neumorphism-inset flex items-center justify-center text-6xl bg-gradient-to-br from-gray-100 to-gray-200">
          {artwork.image}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 flex space-x-2">
          <span className="neumorphism-inset px-2 py-1 rounded-lg text-xs font-medium text-gray-600 bg-white/80">
            {artwork.model}
          </span>
        </div>
      </div>

      {/* Artwork Info */}
      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-gradient-purple transition-colors duration-300">
        {artwork.title}
      </h3>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
        {artwork.description}
      </p>

      {/* Color Palette */}
      <div className="flex space-x-1 mb-4">
        {artwork.colors.map((color, colorIndex) => (
          <div
            key={colorIndex}
            className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {artwork.tags.slice(0, 3).map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="neumorphism-inset px-2 py-1 rounded-lg text-xs font-medium text-gray-600"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center space-x-3">
          <span className="flex items-center">
            ❤️ {artwork.likes}
          </span>
          <span className="flex items-center">
            📥 {artwork.downloads}
          </span>
        </div>
        <span>{new Date(artwork.created).toLocaleDateString()}</span>
      </div>
    </motion.div>
  );

  return (
    <section id="ai-creations" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating AI Icons */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          >
            {['🤖', '🎨', '🧠', '✨', '🌟'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              AI Art Creations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Exploring the intersection of artificial intelligence and creativity. Each piece represents 
              a collaboration between human imagination and machine learning algorithms.
            </p>
          </motion.div>

          {/* Controls */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0">
            {/* Category Filter */}
            <div className="neumorphism p-2 rounded-2xl inline-flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-gradient-purple to-gradient-blue text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="neumorphism p-2 rounded-xl inline-flex">
              <motion.button
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-gradient-purple to-gradient-blue text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setViewMode('grid')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🔲 Grid
              </motion.button>
              <motion.button
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  viewMode === 'masonry'
                    ? 'bg-gradient-to-r from-gradient-purple to-gradient-blue text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setViewMode('masonry')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🧱 Masonry
              </motion.button>
            </div>
          </motion.div>

          {/* Artworks Grid */}
          <motion.div 
            className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
            layout
          >
            <AnimatePresence mode="wait">
              {filteredArtworks.map((artwork, index) => (
                <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* AI Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: '500+', label: 'AI Artworks Created', icon: '🎨' },
              { number: '12+', label: 'AI Models Used', icon: '🤖' },
              { number: '50K+', label: 'Total Views', icon: '👁️' },
              { number: '15+', label: 'Art Styles Explored', icon: '🌈' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="neumorphism p-6 rounded-2xl text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 + (index * 0.1) }}
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

      {/* Artwork Detail Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArtwork(null)}
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
                onClick={() => setSelectedArtwork(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Artwork Display */}
                <div>
                  <div className="aspect-square neumorphism-inset rounded-2xl flex items-center justify-center text-8xl bg-gradient-to-br from-gray-100 to-gray-200 mb-6">
                    {selectedArtwork.image}
                  </div>
                  
                  {/* Color Palette */}
                  <div className="flex justify-center space-x-2 mb-4">
                    {selectedArtwork.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-white shadow-lg"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Artwork Details */}
                <div>
                  <h3 className="text-3xl font-bold gradient-text mb-4">
                    {selectedArtwork.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedArtwork.description}
                  </p>

                  {/* Technical Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">AI Model:</span>
                      <span className="neumorphism-inset px-3 py-1 rounded-lg text-sm font-medium">
                        {selectedArtwork.model}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Dimensions:</span>
                      <span className="text-gray-600">{selectedArtwork.dimensions}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Style:</span>
                      <span className="text-gray-600">{selectedArtwork.style}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Created:</span>
                      <span className="text-gray-600">
                        {new Date(selectedArtwork.created).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  {/* Prompt */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-2">AI Prompt:</h4>
                    <div className="neumorphism-inset p-4 rounded-xl">
                      <p className="text-gray-600 text-sm italic">
                        "{selectedArtwork.prompt}"
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-2">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedArtwork.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="neumorphism-inset px-3 py-1 rounded-lg text-sm font-medium text-gray-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-4">
                      <span className="flex items-center text-gray-600">
                        ❤️ {selectedArtwork.likes} likes
                      </span>
                      <span className="flex items-center text-gray-600">
                        📥 {selectedArtwork.downloads} downloads
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <motion.button
                      className="neumorphism-button flex-1 py-3 rounded-xl font-semibold text-gray-700 hover:text-gradient-purple transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      ❤️ Like
                    </motion.button>
                    <motion.button
                      className="neumorphism-button flex-1 py-3 rounded-xl font-semibold bg-gradient-to-r from-gradient-purple to-gradient-blue text-white"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      📥 Download
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AICreations;