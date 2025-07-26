import React, { useEffect, useState } from 'react';
import './AutoComplete.css'

const AutoComplete = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const timer = setTimeout(() => {
      getData(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getData = async (query) => {
    console.log("Fetching for ===>", query);
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await res.json();
    setSearchResults(data.products);
  };

  const handleResultClick = (item) => {
    setSearchQuery(item.title);
    setShowSearchResults(false);
  };

  return (
    <div className="auto-complete-container">
      <div className="auto-complete-header">
        <h1>Auto Complete</h1>
      </div>

      <div className="auto-input-container">
        <input
          type="text"
          className="auto-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSearchResults(true)}
          onBlur={() => setTimeout(() => setShowSearchResults(false), 150)} // delay to allow click
          placeholder="Search products..."
        />
      </div>

      {showSearchResults && (
        <div className="auto-search-results-container">
          {searchResults.length === 0 && searchQuery ? (
            <p className="auto-no-results">NO RESULTS FOUND !!</p>
          ) : (
            searchResults.map((item) => (
              <div
                key={item.id}
                className="auto-result-item"
                onMouseDown={() => handleResultClick(item)} // allow click before blur
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="auto-img"
                />
                <p className="auto-item-title">{item.title}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default AutoComplete;