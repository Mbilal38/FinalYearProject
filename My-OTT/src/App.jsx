// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import Watchlist from './pages/Watchlist';
import More from './pages/More';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (item) => {
    setWatchlist(prevWatchlist => [...prevWatchlist, item]);
  };

  const removeFromWatchlist = (item) => {
    setWatchlist(prevWatchlist => prevWatchlist.filter(i => i._id !== item._id));
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Routes>
          <Route 
            path="/" 
            element={<Home 
              onAddToWatchlist={addToWatchlist} 
              watchlist={watchlist} 
            />} 
          />
          <Route 
            path="/movies" 
            element={<Movies 
              onAddToWatchlist={addToWatchlist} 
              watchlist={watchlist} 
            />} 
          />
          <Route 
            path="/tvshows" 
            element={<TVShows 
              onAddToWatchlist={addToWatchlist} 
              watchlist={watchlist} 
            />} 
          />
          <Route 
            path="/watchlist" 
            element={<Watchlist 
              watchlist={watchlist} 
              onRemoveFromWatchlist={removeFromWatchlist} 
            />} 
          />
          <Route path="/more" element={<More />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
