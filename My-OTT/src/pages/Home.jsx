// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { fetchMovies, fetchTVShows } from '../api/api';
import MovieCard from '../components/MovieCard';
import TVShowCard from '../components/TVShowCard';
import Carousel from '../components/Carousel';

const Home = ({ watchlist = [], onAddToWatchlist }) => { 
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const moviesData = await fetchMovies();
        const tvShowsData = await fetchTVShows();
        setMovies(moviesData);
        setTVShows(tvShowsData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.homeContainer}>
      <Carousel />
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Trending Movies</h2>
        <div className={styles.cardsContainer}>
          {movies.filter(movie => movie.isTrending).map(movie => (
            <MovieCard 
              key={movie._id} 
              movie={movie} 
              watchlist={watchlist}  // Pass watchlist
              onAddToWatchlist={onAddToWatchlist}  // Pass add function
            />
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Latest Movies</h2>
        <div className={styles.cardsContainer}>
          {movies.filter(movie => movie.isLatest).map(movie => (
            <MovieCard 
              key={movie._id} 
              movie={movie} 
              watchlist={watchlist}  // Pass watchlist
              onAddToWatchlist={onAddToWatchlist}  // Pass add function
            />
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Trending TV Shows</h2>
        <div className={styles.cardsContainer}>
          {tvShows.filter(show => show.isTrending).map(show => (
            <TVShowCard 
              key={show._id} 
              show={show} 
              watchlist={watchlist}  // Pass watchlist
              onAddToWatchlist={onAddToWatchlist}  // Pass add function
            />
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Latest TV Shows</h2>
        <div className={styles.cardsContainer}>
          {tvShows.filter(show => show.isLatest).map(show => (
            <TVShowCard 
              key={show._id} 
              show={show} 
              watchlist={watchlist}  // Pass watchlist
              onAddToWatchlist={onAddToWatchlist}  // Pass add function
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
