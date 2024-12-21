// src/pages/Movies.jsx
import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { fetchMovies } from '../api/api';
import styles from './Movies.module.css';

const Movies = ({ watchlist = [], onAddToWatchlist }) => {  // Accept watchlist and add function as props
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const moviesData = await fetchMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error("Error loading movies:", error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.moviesPage}>
      <h1>Movies</h1>
      <div className={styles.cardsContainer}>
        {movies.map(movie => (
          <MovieCard 
            key={movie._id} 
            movie={movie} 
            watchlist={watchlist}  // Pass watchlist
            onAddToWatchlist={onAddToWatchlist}  // Pass add function
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
