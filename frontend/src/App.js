import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen';
import ChatScreen from './components/ChatScreen';
import { chatService } from './services/api.service';
import { useMusicPlayer } from './hooks/useMusicPlayer';

function App() {
  // Screen management
  const [currentScreen, setCurrentScreen] = useState('welcome');
  
  // Data states
  const [detectedEmotion, setDetectedEmotion] = useState(null);
  const [recommendedSong, setRecommendedSong] = useState(null);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMusicNotification, setShowMusicNotification] = useState(false);
  
  // Music player reference
  const audioRef = useRef(null);
  const { togglePlayPause } = useMusicPlayer();

  // Handle emotion detection from chat
  const handleEmotionDetected = async (emotionData) => {
    try {
      setDetectedEmotion(emotionData);
      
      // Get music recommendation based on emotion
      const song = await chatService.getMusicRecommendations(emotionData.emotion);
      setRecommendedSong(song);
      
      // Show notification and start playing music
      setShowMusicNotification(true);
      setIsPlaying(true);
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowMusicNotification(false);
      }, 5000);
    } catch (err) {
      setError('Failed to get music recommendations. Please try again.');
      console.error('Music recommendation error:', err);
    }
  };

  // Toggle music playback
  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };
  
  // Effect for music playback
  useEffect(() => {
    if (isPlaying && recommendedSong) {
      // In a real app, we would set the audio source and play
      console.log(`Playing music: ${recommendedSong.title} by ${recommendedSong.artist}`);
      // If we had actual audio files:
      // audioRef.current.src = recommendedSong.audioUrl;
      // audioRef.current.play();
    } else if (audioRef.current) {
      // In a real app, we would pause the audio
      console.log('Pausing music');
      // audioRef.current.pause();
    }
  }, [isPlaying, recommendedSong]);

  // Handle navigation
  const navigateToChat = () => setCurrentScreen('chat');
  const navigateToWelcome = () => setCurrentScreen('welcome');

  // Render the appropriate screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onStart={navigateToChat} />;
      
      case 'chat':
        return (
          <ChatScreen 
            onEmotionDetected={handleEmotionDetected}
            onBack={navigateToWelcome}
            currentSong={recommendedSong}
            isPlaying={isPlaying}
            onToggleMusic={toggleMusic}
          />
        );
      
      default:
        return navigateToWelcome();
    }
  };

  return (
    <div className="app">
      {/* Hidden audio element for music playback */}
      <audio ref={audioRef} loop />
      
      {/* Music notification */}
      {showMusicNotification && recommendedSong && (
        <div className="music-notification">
          <div className="notification-content">
            <div className="song-thumbnail">
              <img src={recommendedSong.coverUrl} alt="Album cover" />
            </div>
            <div className="song-info">
              <p className="now-playing">Now playing based on your mood:</p>
              <p className="song-title">{recommendedSong.title}</p>
              <p className="song-artist">{recommendedSong.artist}</p>
            </div>
            <button 
              className="notification-close" 
              onClick={() => setShowMusicNotification(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
      
      {/* Error message */}
      {error && (
        <div className="error-overlay">
          <div className="error-message">
            <p>{error}</p>
            <button onClick={() => setError(null)}>Dismiss</button>
          </div>
        </div>
      )}
      
      {renderScreen()}
    </div>
  );
}

export default App;
