/**
 * API Service for handling chat requests
 * This service mocks the behavior of the previous backend server
 */

// Mock API endpoint that would be used in a real scenario
const MOCK_API_ENDPOINT = 'https://test.com/api/chat';

/**
 * Chat service that mocks sending requests to an external API
 * @param {string} message - The chat message
 * @returns {Promise} - Promise that resolves with chat responses
 */
export const chatService = {
  chat: async (message) => {
    try {
      console.log(`Mocking API call to ${MOCK_API_ENDPOINT} with message: ${message}`);
      
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
      console.error('Search error:', error);
      return Promise.reject(error);
    }
  }
};

export default chatService;
