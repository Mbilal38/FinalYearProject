const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Get all movies
router.get('/', movieController.getAllMovies);

// Get a single movie by ID
router.get('/:id', movieController.getMovieById);

// Add a new movie
router.post('/', movieController.addMovie);

// Update a movie by ID
router.put('/:id', movieController.updateMovie);

// Delete a movie by ID
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
