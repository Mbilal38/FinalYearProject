// src/components/WatchlistItem.jsx
import React from 'react';
import styles from './WatchlistItem.module.css';

const WatchlistItem = ({ item, onRemoveFromWatchlist }) => {
  return (
    <div className={styles.watchlistItem}>
      <img src={item.thumbnail} alt={item.title} className={styles.thumbnail} />
      <div className={styles.info}>
        <h3>{item.title}</h3>
        <button 
          className={styles.removeButton} 
          onClick={() => onRemoveFromWatchlist(item)}
        >
          Remove from Watchlist
        </button>
      </div>
    </div>
  );
};

export default WatchlistItem;
