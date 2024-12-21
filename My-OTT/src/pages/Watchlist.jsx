// src/pages/Watchlist.jsx
import React from 'react';
import WatchlistItem from '../components/WatchlistItem';
import styles from './Watchlist.module.css';

const Watchlist = ({ watchlist, onRemoveFromWatchlist }) => {
  return (
    <div className={styles.watchlistPage}>
      <h1>Your Watchlist</h1>
      {watchlist.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        <div className={styles.watchlistContainer}>
          {watchlist.map(item => (
            <WatchlistItem 
              key={item._id} 
              item={item} 
              onRemoveFromWatchlist={onRemoveFromWatchlist} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
