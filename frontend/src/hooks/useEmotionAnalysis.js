import { useState } from 'react';

/**
 * Hook for analyzing emotions from text
 * JavaScript implementation of the TypeScript hook from the original project
 */
export const useEmotionAnalysis = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeEmotion = async (text) => {
    setIsAnalyzing(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simple emotion detection based on keywords
    const emotions = {
      sad: { 
        keywords: ['sad', 'down', 'depressed', 'lonely', 'blue', 'melancholy', 'heartbroken'],
        color: 'from-blue-400 to-indigo-600',
        description: 'I sense you\'re feeling down. Let me find something uplifting for you.'
      },
      happy: {
        keywords: ['happy', 'joyful', 'excited', 'great', 'amazing', 'wonderful', 'fantastic'],
        color: 'from-yellow-400 to-orange-500',
        description: 'Your positive energy is contagious! Here\'s something to keep you going.'
      },
      angry: {
        keywords: ['angry', 'mad', 'furious', 'annoyed', 'frustrated', 'irritated'],
        color: 'from-red-400 to-pink-500',
        description: 'I can feel your frustration. Let\'s find something to help you unwind.'
      },
      anxious: {
        keywords: ['anxious', 'worried', 'nervous', 'stressed', 'overwhelmed', 'panic'],
        color: 'from-purple-400 to-indigo-500',
        description: 'I understand you\'re feeling anxious. This might help calm your mind.'
      },
      lonely: {
        keywords: ['lonely', 'alone', 'isolated', 'abandoned', 'empty'],
        color: 'from-blue-300 to-blue-500',
        description: 'It\'s okay to feel lonely sometimes. Let me keep you company with this.'
      },
      tired: {
        keywords: ['tired', 'exhausted', 'sleepy', 'fatigued', 'drained'],
        color: 'from-gray-400 to-gray-600',
        description: 'You sound tired. Here\'s something soothing to help you relax.'
      },
      calm: {
        keywords: ['calm', 'peaceful', 'relaxed', 'serene', 'tranquil'],
        color: 'from-green-300 to-teal-500',
        description: 'I love your peaceful energy. This should complement your mood nicely.'
      }
    };
    
    // Default emotion if no match is found
    let detectedEmotion = {
      emotion: 'neutral',
      confidence: 0.5,
      color: 'from-gray-400 to-blue-500',
      description: 'I\'ve selected something that might resonate with you right now.'
    };
    
    // Check text against emotion keywords
    const lowercaseText = text.toLowerCase();
    let highestMatchCount = 0;
    
    Object.entries(emotions).forEach(([emotion, data]) => {
      const matchCount = data.keywords.filter(keyword => lowercaseText.includes(keyword)).length;
      if (matchCount > highestMatchCount) {
        highestMatchCount = matchCount;
        detectedEmotion = {
          emotion,
          confidence: Math.min(0.5 + (matchCount * 0.1), 0.95),
          color: data.color,
          description: data.description
        };
      }
    });
    
    setIsAnalyzing(false);
    return detectedEmotion;
  };

  return { analyzeEmotion, isAnalyzing };
};
