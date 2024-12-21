// src/components/TVShowCard.jsx
import React from 'react';
import styles from './TVShowCard.module.css';
import WatchlistButton from './WatchlistButton';

const TVShowCard = ({ show, onAddToWatchlist, watchlist = [] }) => {
  // Ensure `watchlist` is always an array by setting a default empty array
  const isInWatchlist = watchlist.some(item => item._id === show._id);

  return (
    <div className={styles.tvShowCard}>
      <img src={show.thumbnail} alt={show.title} className={styles.thumbnail} />
      <h3 className={styles.title}>{show.title}</h3>
      {!isInWatchlist && (
        <WatchlistButton item={show} onAddToWatchlist={onAddToWatchlist} />
      )}
    </div>
  );
};

export default TVShowCard;
