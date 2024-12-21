// src/components/WatchlistButton.jsx
import React from 'react';
import styles from './WatchlistButton.module.css';

const WatchlistButton = ({ item, onAddToWatchlist }) => {
  return (
    <button 
      className={styles.addButton} 
      onClick={(e) => {
        e.stopPropagation();  // Prevents triggering other events (e.g., opening video)
        onAddToWatchlist(item);
      }}
    >
      Add to Watchlist
    </button>
  );
};

export default WatchlistButton;
