import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Music = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const audioRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const tracks = [
    {
      id: 1,
      title: 'Alan Walker Ai',
      artist: 'Vinod Kumar',
      album: 'Electronic Collection',
      duration: '3:45',
      genre: 'Electronic',
      year: '2023',
      cover: '🎧',
      fileName: 'Alan Walker Ai 2.mp3',
      waveform: [0.2, 0.8, 0.6, 0.9, 0.4, 0.7, 0.3, 0.8, 0.5, 0.9, 0.2, 0.6, 0.8, 0.4, 0.7],
      description: 'An AI-inspired electronic track with pulsating beats and futuristic soundscapes.',
      bpm: 128,
      key: 'Am'
    },
    {
      id: 2,
      title: 'Avengers',
      artist: 'Vinod Kumar',
      album: 'Cinematic Scores',
      duration: '4:20',
      genre: 'Cinematic',
      year: '2023',
      cover: '🦸',
      fileName: 'Avengers 2.mp3',
      waveform: [0.7, 0.3, 0.9, 0.2, 0.6, 0.8, 0.4, 0.7, 0.3, 0.9, 0.5, 0.8, 0.2, 0.6, 0.7],
      description: 'Epic orchestral composition inspired by superhero themes.',
      bpm: 140,
      key: 'C'
    },
    {
      id: 3,
      title: 'Bam Bhole Har Har Shambhu',
      artist: 'Vinod Kumar',
      album: 'Spiritual Vibes',
      duration: '3:30',
      genre: 'Devotional',
      year: '2023',
      cover: '🕉️',
      fileName: 'Bam Bhole Har Har Shambhu 2.mp3',
      waveform: [0.4, 0.6, 0.3, 0.8, 0.5, 0.7, 0.2, 0.9, 0.4, 0.6, 0.8, 0.3, 0.7, 0.5, 0.6],
      description: 'A spiritual devotional track with traditional Indian elements.',
      bpm: 110,
      key: 'D'
    },
    {
      id: 4,
      title: 'Chuha Oi Oi',
      artist: 'Vinod Kumar',
      album: 'Fun Collection',
      duration: '2:45',
      genre: 'Comedy',
      year: '2023',
      cover: '🐭',
      fileName: 'Chuha Oi Oi 2.mp3',
      waveform: [0.6, 0.4, 0.8, 0.3, 0.7, 0.5, 0.9, 0.2, 0.6, 0.8, 0.4, 0.7, 0.3, 0.9, 0.5],
      description: 'A playful and humorous track with quirky sound effects.',
      bpm: 120,
      key: 'G'
    },
    {
      id: 5,
      title: 'Dreaming in Stillness',
      artist: 'Vinod Kumar',
      album: 'Ambient Dreams',
      duration: '5:15',
      genre: 'Ambient',
      year: '2023',
      cover: '🌙',
      fileName: 'Dreaming in Stillness 2.mp3',
      waveform: [0.1, 0.3, 0.5, 0.2, 0.7, 0.4, 0.6, 0.3, 0.8, 0.2, 0.5, 0.7, 0.3, 0.6, 0.4],
      description: 'Peaceful ambient soundscapes for meditation and relaxation.',
      bpm: 75,
      key: 'Em'
    },
    {
      id: 6,
      title: 'Moongfali Wala Pyaar',
      artist: 'Vinod Kumar',
      album: 'Romantic Melodies',
      duration: '4:10',
      genre: 'Romance',
      year: '2023',
      cover: '💕',
      fileName: 'Moongfali Wala Pyaar 2.mp3',
      waveform: [0.5, 0.8, 0.3, 0.6, 0.9, 0.2, 0.7, 0.4, 0.8, 0.5, 0.6, 0.3, 0.9, 0.7, 0.4],
      description: 'A sweet romantic melody with playful lyrics and warm tones.',
      bpm: 95,
      key: 'F'
    },
    {
      id: 7,
      title: 'Paisa 2.0 (Remix)',
      artist: 'Vinod Kumar',
      album: 'Remix Collection',
      duration: '3:55',
      genre: 'Hip-Hop',
      year: '2023',
      cover: '💰',
      fileName: 'Paisa 2.0 (Remix) 2.mp3',
      waveform: [0.8, 0.6, 0.9, 0.4, 0.7, 0.8, 0.3, 0.9, 0.5, 0.8, 0.6, 0.7, 0.4, 0.9, 0.6],
      description: 'High-energy remix with heavy beats and urban vibes.',
      bpm: 150,
      key: 'Bb'
    },
    {
      id: 8,
      title: 'Seven Sky',
      artist: 'Vinod Kumar',
      album: 'Celestial Sounds',
      duration: '4:30',
      genre: 'Trance',
      year: '2023',
      cover: '☁️',
      fileName: 'SEVEN SKY.mp3',
      waveform: [0.3, 0.7, 0.5, 0.8, 0.2, 0.6, 0.9, 0.4, 0.7, 0.3, 0.8, 0.5, 0.6, 0.4, 0.7],
      description: 'Uplifting trance music that takes you through the seven skies.',
      bpm: 132,
      key: 'A'
    },
    {
      id: 9,
      title: 'Tere Bina Main',
      artist: 'Vinod Kumar',
      album: 'Bollywood Covers',
      duration: '4:45',
      genre: 'Bollywood',
      year: '2023',
      cover: '💔',
      fileName: 'Tere Bina Main 2.mp3',
      waveform: [0.4, 0.7, 0.6, 0.3, 0.8, 0.5, 0.7, 0.9, 0.2, 0.6, 0.4, 0.8, 0.5, 0.7, 0.3],
      description: 'Emotional Bollywood ballad expressing love and longing.',
      bpm: 85,
      key: 'Dm'
    },
    {
      id: 10,
      title: 'Upar Pankha Chalta Hai',
      artist: 'Vinod Kumar',
      album: 'Comedy Collection',
      duration: '3:20',
      genre: 'Comedy',
      year: '2023',
      cover: '🌀',
      fileName: 'Upar pankha chalta hai 2.mp3',
      waveform: [0.6, 0.2, 0.8, 0.4, 0.6, 0.7, 0.3, 0.9, 0.5, 0.8, 0.2, 0.6, 0.7, 0.4, 0.8],
      description: 'A humorous track about everyday life with catchy rhythms.',
      bpm: 115,
      key: 'C'
    }
  ];

  const currentTrackData = tracks[currentTrack];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', nextTrack);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', nextTrack);
    };
  }, [currentTrack]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const selectTrack = (index) => {
    setCurrentTrack(index);
    setShowPlaylist(false);
    // Auto-play the selected track
    setTimeout(() => {
      const audio = audioRef.current;
      if (audio) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.log('Auto-play prevented by browser:', error);
        });
      }
    }, 100); // Small delay to ensure audio element is ready
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
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
    <section id="music" className="py-20 relative overflow-hidden neumorphism-container">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Music Notes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          >
            {['🎵', '🎶', '🎼', '🎤'][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}

        {/* Waveform Visualization */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="flex items-end space-x-1">
            {currentTrackData.waveform.map((height, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-t from-gradient-purple to-gradient-blue rounded-full"
                style={{ width: '8px' }}
                animate={{
                  height: isPlaying ? `${height * 200}px` : '20px',
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  repeat: isPlaying ? Infinity : 0,
                  repeatType: 'reverse',
                }}
              />
            ))}
          </div>
        </div>
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
              Music Creations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A collection of original compositions spanning electronic, ambient, and experimental genres. 
              Each track tells a story through sound, blending technology with emotion.
            </p>
          </motion.div>

          {/* Main Music Player */}
          <motion.div
            variants={itemVariants}
            className="neumorphism p-6 md:p-8 rounded-3xl mb-12 max-w-2xl mx-auto"
            style={{ height: 'auto', maxHeight: '480px' }}
          >
            {/* Track Info */}
            <div className="text-center mb-6">
              <motion.div
                className="text-6xl mb-4"
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 8, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
              >
                {currentTrackData.cover}
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                {currentTrackData.title}
              </h3>
              <p className="text-md text-gradient-purple font-semibold mb-2">
                {currentTrackData.artist}
              </p>
              <div className="flex justify-center items-center space-x-2 text-xs text-gray-600">
                <span className="neumorphism-inset px-2 py-1 rounded-full">
                  {currentTrackData.genre}
                </span>
                <span className="neumorphism-inset px-2 py-1 rounded-full">
                  {currentTrackData.bpm} BPM
                </span>
                <span className="neumorphism-inset px-2 py-1 rounded-full">
                  Key: {currentTrackData.key}
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>{formatTime(currentTime)}</span>
                <span>{currentTrackData.duration}</span>
              </div>
              <motion.div
                className="neumorphism-inset h-2 rounded-full cursor-pointer overflow-hidden"
                onClick={handleSeek}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-gradient-purple to-gradient-blue rounded-full"
                  style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                />
              </motion.div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <motion.button
                className="neumorphism-button w-10 h-10 rounded-full flex items-center justify-center text-lg"
                onClick={prevTrack}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ⏮️
              </motion.button>
              
              <motion.button
                className="neumorphism-button w-14 h-14 rounded-full flex items-center justify-center text-xl bg-gradient-to-r from-gradient-purple to-gradient-blue text-white"
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isPlaying ? '⏸️' : '▶️'}
              </motion.button>
              
              <motion.button
                className="neumorphism-button w-10 h-10 rounded-full flex items-center justify-center text-lg"
                onClick={nextTrack}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ⏭️
              </motion.button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center justify-center space-x-3">
              <span className="text-lg">🔊</span>
              <div className="neumorphism-inset w-24 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-gradient-purple to-gradient-blue rounded-full"
                  style={{ width: `${volume * 100}%` }}
                />
              </div>
            </div>

            {/* Track Description */}
            <motion.div
              className="mt-6 p-4 neumorphism-inset rounded-2xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-gray-600 text-center leading-relaxed text-sm">
                {currentTrackData.description}
              </p>
            </motion.div>
          </motion.div>

          {/* Music Files List */}
          <motion.div variants={itemVariants} className="mb-12 mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center gradient-text mb-8">
              Explore My Creations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  className={`neumorphism p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    index === currentTrack ? 'ring-2 ring-gradient-purple shadow-lg' : ''
                  }`}
                  onClick={() => selectTrack(index)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{track.cover}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-800 text-sm truncate">{track.title}</h4>
                      <p className="text-xs text-gray-600 truncate">{track.artist}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="neumorphism-inset px-2 py-0.5 rounded-full text-xs text-gray-600">
                          {track.genre}
                        </span>
                        <span className="text-xs text-gray-500">{track.duration}</span>
                      </div>
                    </div>
                    {index === currentTrack && (
                      <div className="text-gradient-purple">
                        {isPlaying ? '🎵' : '⏸️'}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Playlist Toggle */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <motion.button
              className="neumorphism-button px-8 py-4 rounded-full font-semibold text-gray-700 hover:text-gradient-purple transition-colors duration-300"
              onClick={() => setShowPlaylist(!showPlaylist)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">🎵</span>
              {showPlaylist ? 'Hide Detailed Playlist' : 'Show Detailed Playlist'}
            </motion.button>
          </motion.div>

          {/* Playlist */}
          <AnimatePresence>
            {showPlaylist && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                {tracks.map((track, index) => (
                  <motion.div
                    key={track.id}
                    className={`neumorphism p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      index === currentTrack ? 'ring-2 ring-gradient-purple' : ''
                    }`}
                    onClick={() => selectTrack(index)}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="text-4xl text-center mb-4">{track.cover}</div>
                    <h4 className="font-bold text-gray-800 mb-2 text-center">{track.title}</h4>
                    <p className="text-sm text-gray-600 text-center mb-3">{track.genre}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{track.duration}</span>
                      <span>{track.year}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Music Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: '50+', label: 'Tracks Produced', icon: '🎵' },
              { number: '10+', label: 'Albums Released', icon: '💿' },
              { number: '100K+', label: 'Streams', icon: '📊' },
              { number: '5+', label: 'Genres Explored', icon: '🎨' },
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

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={`/Assets/music/${currentTrackData.fileName}`}
        volume={volume}
      />
    </section>
  );
};

export default Music;