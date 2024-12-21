// src/components/MovieCard.jsx
import React from 'react';
import styles from './MovieCard.module.css';
import WatchlistButton from './WatchlistButton';

const MovieCard = ({ movie, onAddToWatchlist, watchlist = [] }) => {
  // Ensure `watchlist` is always an array by setting a default empty array
  const isInWatchlist = watchlist.some(item => item._id === movie._id);

  return (
    <div className={styles.movieCard}>
      <img src={movie.thumbnail} alt={movie.title} className={styles.thumbnail} />
      <h3 className={styles.title}>{movie.title}</h3>
      {!isInWatchlist && (
        <WatchlistButton item={movie} onAddToWatchlist={onAddToWatchlist} />
      )}
    </div>
  );
};

export default MovieCard;
