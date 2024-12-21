// src/pages/TVShows.jsx
import React, { useState, useEffect } from 'react';
import TVShowCard from '../components/TVShowCard';
import { fetchTVShows } from '../api/api';
import styles from './TVShows.module.css';

const TVShows = ({ watchlist = [], onAddToWatchlist }) => {  // Accept watchlist and add function as props
  const [tvShows, setTVShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTVShows = async () => {
      try {
        setLoading(true);
        const tvShowsData = await fetchTVShows();
        setTVShows(tvShowsData);
      } catch (error) {
        console.error("Error loading TV shows:", error);
      } finally {
        setLoading(false);
      }
    };
    loadTVShows();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.tvShowsPage}>
      <h1>TV Shows</h1>
      <div className={styles.cardsContainer}>
        {tvShows.map(show => (
          <TVShowCard 
            key={show._id} 
            show={show} 
            watchlist={watchlist}  // Pass watchlist
            onAddToWatchlist={onAddToWatchlist}  // Pass add function
          />
        ))}
      </div>
    </div>
  );
};

export default TVShows;
