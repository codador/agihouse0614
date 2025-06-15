/**
 * API Service for handling chat requests, emotion analysis, and music recommendations
 * This service mocks the behavior of a backend server
 */

// Mock API endpoints that would be used in a real scenario
const MOCK_CHAT_ENDPOINT = 'https://test.com/api/chat';
const MOCK_EMOTION_ENDPOINT = 'https://test.com/api/emotion';
const MOCK_MUSIC_ENDPOINT = 'https://test.com/api/music';

/**
 * Chat service that mocks sending requests to external APIs
 */
export const chatService = {
  /**
   * Process a chat message
   * @param {string} message - The chat message
   * @returns {Promise} - Promise that resolves with chat responses
   */
  chat: async (message) => {
    try {
      console.log(`Mocking API call to ${MOCK_CHAT_ENDPOINT} with message: ${message}`);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock API response
      if (!message) {
        return Promise.reject({ message: 'No chat message provided' });
      }
      
      // Return mock chat responses
      return {
        results: [
          { id: 1, title: `Response to "${message}"`, description: 'This is a sample chat response' },
          { id: 2, title: `Alternative response`, description: 'Another potential response to your message' },
          { id: 3, title: `Follow-up suggestion`, description: 'You might want to ask about this next' }
        ],
        total: 3,
        message: message
      };
    } catch (error) {
      console.error('Chat error:', error);
      return Promise.reject(error);
    }
  },

  /**
   * Analyze the emotion in a message
   * @param {string} message - The message to analyze
   * @returns {Promise} - Promise that resolves with emotion analysis
   */
  analyzeEmotion: async (message) => {
    try {
      console.log(`Mocking API call to ${MOCK_EMOTION_ENDPOINT} with message: ${message}`);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (!message) {
        return Promise.reject({ message: 'No message provided for emotion analysis' });
      }
      
      // Simple emotion detection based on keywords
      const emotions = {
        sad: ['sad', 'down', 'depressed', 'lonely', 'blue', 'melancholy', 'heartbroken'],
        happy: ['happy', 'joyful', 'excited', 'great', 'amazing', 'wonderful', 'fantastic'],
        angry: ['angry', 'mad', 'furious', 'annoyed', 'frustrated', 'irritated'],
        anxious: ['anxious', 'worried', 'nervous', 'stressed', 'overwhelmed', 'panic'],
        lonely: ['lonely', 'alone', 'isolated', 'abandoned', 'empty'],
        tired: ['tired', 'exhausted', 'sleepy', 'fatigued', 'drained'],
        calm: ['calm', 'peaceful', 'relaxed', 'serene', 'tranquil']
      };
      
      const emotionColors = {
        sad: 'from-blue-400 to-indigo-600',
        happy: 'from-yellow-400 to-orange-500',
        angry: 'from-red-400 to-pink-500',
        anxious: 'from-purple-400 to-indigo-500',
        lonely: 'from-blue-300 to-blue-500',
        tired: 'from-gray-400 to-gray-600',
        calm: 'from-green-300 to-teal-500',
        neutral: 'from-gray-400 to-blue-500'
      };
      
      const emotionDescriptions = {
        sad: "I sense you're feeling down. Let me find something uplifting for you.",
        happy: "Your positive energy is contagious! Here's something to keep you going.",
        angry: "I can feel your frustration. Let's find something to help you unwind.",
        anxious: "I understand you're feeling anxious. This might help calm your mind.",
        lonely: "It's okay to feel lonely sometimes. Let me keep you company with this.",
        tired: "You sound tired. Here's something soothing to help you relax.",
        calm: "I love your peaceful energy. This should complement your mood nicely.",
        neutral: "I've selected something that might resonate with you right now."
      };
      
      // Default emotion
      let detectedEmotion = 'neutral';
      let highestMatchCount = 0;
      
      // Check text against emotion keywords
      const lowercaseMessage = message.toLowerCase();
      
      Object.entries(emotions).forEach(([emotion, keywords]) => {
        const matchCount = keywords.filter(keyword => lowercaseMessage.includes(keyword)).length;
        if (matchCount > highestMatchCount) {
          highestMatchCount = matchCount;
          detectedEmotion = emotion;
        }
      });
      
      return {
        emotion: detectedEmotion,
        confidence: Math.min(0.5 + (highestMatchCount * 0.1), 0.95),
        color: emotionColors[detectedEmotion],
        description: emotionDescriptions[detectedEmotion]
      };
    } catch (error) {
      console.error('Emotion analysis error:', error);
      return Promise.reject(error);
    }
  },

  /**
   * Get music recommendations based on emotion
   * @param {string} emotion - The detected emotion
   * @returns {Promise} - Promise that resolves with music recommendations
   */
  getMusicRecommendations: async (emotion) => {
    try {
      console.log(`Mocking API call to ${MOCK_MUSIC_ENDPOINT} for emotion: ${emotion}`);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 600));
      
      // Mock music database
      const musicDatabase = {
        sad: [
          {
            id: '1',
            title: 'Weightless',
            artist: 'Marconi Union',
            duration: '8:10',
            coverUrl: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            id: '2',
            title: 'River',
            artist: 'Eminem ft. Ed Sheeran',
            duration: '3:40',
            coverUrl: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400'
          }
        ],
        happy: [
          {
            id: '3',
            title: 'Good as Hell',
            artist: 'Lizzo',
            duration: '2:39',
            coverUrl: 'https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            id: '4',
            title: 'Uptown Funk',
            artist: 'Mark Ronson ft. Bruno Mars',
            duration: '4:30',
            coverUrl: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400'
          }
        ],
        angry: [
          {
            id: '5',
            title: 'Breathe Me',
            artist: 'Sia',
            duration: '4:31',
            coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400'
          }
        ],
        anxious: [
          {
            id: '6',
            title: 'Aqueous Transmission',
            artist: 'Incubus',
            duration: '7:49',
            coverUrl: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=400'
          }
        ],
        lonely: [
          {
            id: '7',
            title: 'Someone Like You',
            artist: 'Adele',
            duration: '4:45',
            coverUrl: 'https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&w=400'
          }
        ],
        tired: [
          {
            id: '8',
            title: 'Sunset Lover',
            artist: 'Petit Biscuit',
            duration: '3:56',
            coverUrl: 'https://images.pexels.com/photos/1834407/pexels-photo-1834407.jpeg?auto=compress&cs=tinysrgb&w=400'
          }
        ],
        calm: [
          {
            id: '9',
            title: 'Gymnopédie No.1',
            artist: 'Erik Satie',
            duration: '3:05',
            coverUrl: 'https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=400'
          }
        ],
        neutral: [
          {
            id: '10',
            title: 'Intro',
            artist: 'The xx',
            duration: '2:07',
            coverUrl: 'https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&w=400'
          }
        ]
      };
      
      // Get songs for the emotion or default to neutral
      const songs = musicDatabase[emotion] || musicDatabase.neutral;
      
      // Return a random song from the list
      const randomIndex = Math.floor(Math.random() * songs.length);
      return songs[randomIndex];
    } catch (error) {
      console.error('Music recommendation error:', error);
      return Promise.reject(error);
    }
  }
};

export default chatService;
