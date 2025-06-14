import React from 'react';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return (
      <div className="no-results">
        <p>No search results to display. Try searching for something!</p>
      </div>
    );
  }

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <ul className="results-list">
        {results.map((result) => (
          <li key={result.id} className="result-item">
            <h3>{result.title}</h3>
            <p>{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
