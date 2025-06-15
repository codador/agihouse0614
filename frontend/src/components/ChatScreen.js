import React, { useState, useRef, useEffect } from 'react';
import './ChatScreen.css';
import { useEmotionAnalysis } from '../hooks/useEmotionAnalysis';

/**
 * Chat Screen Component
 * JavaScript implementation of the TypeScript component from the original project
 * @param {Object} props - Component props
 * @param {Function} props.onEmotionDetected - Function to call when emotion is detected
 * @param {Function} props.onBack - Function to call when back button is clicked
 * @param {Object} props.currentSong - Current song object
 * @param {Boolean} props.isPlaying - Whether the song is playing
 * @param {Function} props.onToggleMusic - Function to call when music is toggled
 */
const ChatScreen = ({ onEmotionDetected, onBack, currentSong, isPlaying, onToggleMusic }) => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Hi there! I'm here to help you find music that matches your mood. How are you feeling today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const { analyzeEmotion, isAnalyzing } = useEmotionAnalysis();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isAnalyzing) return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Analyze emotion
    const emotionData = await analyzeEmotion(inputText);
    
    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: emotionData.description,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      
      // Delay before showing music recommendation
      setTimeout(() => {
        onEmotionDetected(emotionData);
      }, 1500);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-screen">
      <div className="chat-container">
        {/* Header */}
        <div className="chat-header">
          <div className="header-content">
            <button
              onClick={onBack}
              className="back-button"
            >
              ← Back
            </button>
            <div className="header-title">
              <span className="music-icon">♫</span>
              <span className="title-text">Emotify Chat</span>
            </div>
            <div className="mini-player">
              {currentSong && (
                <button 
                  className={`play-pause-button ${isPlaying ? 'playing' : ''}`} 
                  onClick={onToggleMusic}
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? '❚❚' : '▶'}
                </button>
              )}
              {currentSong && (
                <div className="mini-player-info">
                  <span className="song-title">{currentSong.title}</span>
                  <span className="song-artist">{currentSong.artist}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="messages-container">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
            >
              <div className="message-bubble">
                <p className="message-text">{message.text}</p>
                <p className="message-time">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot-message">
              <div className="message-bubble typing-indicator">
                <div className="typing-dots">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
                <span className="typing-text">AI is thinking...</span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chat-input-container">
          <div className="input-wrapper">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tell me how you're feeling..."
              className="chat-input"
              disabled={isAnalyzing}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isAnalyzing}
              className="send-button"
            >
              {isAnalyzing ? (
                <span className="loading-icon">⟳</span>
              ) : (
                <span className="send-icon">➤</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
