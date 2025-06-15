import React from 'react';
import './WelcomeScreen.css';

/**
 * Welcome Screen Component
 * JavaScript implementation of the TypeScript component from the original project
 * @param {Object} props - Component props
 * @param {Function} props.onStart - Function to call when the start button is clicked
 */
const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <div className="welcome-header">
          <div className="icon-container">
            <i className="music-icon">♫</i>
          </div>
          <h1 className="app-title">Emotify</h1>
          <p className="app-subtitle">
            Discover music that understands your emotions
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3 className="feature-title">Express Yourself</h3>
            <p className="feature-description">
              Share how you're feeling through natural conversation
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3 className="feature-title">AI Understanding</h3>
            <p className="feature-description">
              Advanced emotion analysis to understand your mood
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3 className="feature-title">Perfect Match</h3>
            <p className="feature-description">
              Personalized music recommendations just for you
            </p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="start-button"
        >
          Start Your Journey
        </button>

        <p className="welcome-footer">
          Let's find the perfect soundtrack for your emotions
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
