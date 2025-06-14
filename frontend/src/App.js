import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { chatService } from './services/api.service';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (message) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Use the chatService instead of searchService
      const data = await chatService.chat(message);
      setSearchResults(data.results);
    } catch (err) {
      setError('Failed to fetch chat responses. Please try again.');
      console.error('Chat error:', err);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Chat Application</h1>
      </header>
      <main className="app-main">
        <SearchBar onSearch={handleSearch} />
        
        {isLoading && (
          <div className="loading-indicator">
            <p>Searching...</p>
          </div>
        )}
        
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
        
        <SearchResults results={searchResults} />
      </main>
    </div>
  );
}

export default App;
