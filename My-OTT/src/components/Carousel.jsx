// src/components/Carousel.jsx
import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import { fetchMovies, fetchTVShows } from '../api/api';

const Carousel = () => {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch movies and TV shows for the carousel
  useEffect(() => {
    const loadData = async () => {
      try {
        const movies = await fetchMovies();
        const tvShows = await fetchTVShows();
        const popularItems = [...movies.slice(0, 5), ...tvShows.slice(0, 5)]; // Take top 5 from each
        setItems(popularItems);
      } catch (error) {
        console.error("Error loading carousel data:", error);
      }
    };
    loadData();
  }, []);

  // Automatic slide transition every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [items]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner}>
        {items.map((item, index) => {
          const position =
            index === currentIndex
              ? 'center'
              : index === (currentIndex - 1 + items.length) % items.length
              ? 'left'
              : index === (currentIndex + 1) % items.length
              ? 'right'
              : 'hidden';

          return (
            <div
              key={index}
              className={`${styles.carouselItem} ${styles[position]}`}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className={styles.carouselImage}
              />
              <div className={styles.carouselContent}>
                <h2>{item.title}</h2>
                <button
                  className={styles.watchNowButton}
                  onClick={() => window.open(item.videoUrl, '_blank')}
                >
                  Watch Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
