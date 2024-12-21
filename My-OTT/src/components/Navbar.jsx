import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>VORTAX</h1>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/tvshows">TV Shows</Link></li>
        <li><Link to="/watchlist">Watch List</Link></li>
        <li><Link to="/more">More</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
