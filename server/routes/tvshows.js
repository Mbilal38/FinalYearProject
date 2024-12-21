const express = require('express');
const router = express.Router();
const tvShowController = require('../controllers/tvShowController');

// Get all TV shows
router.get('/', tvShowController.getAllTVShows);

// Get a single TV show by ID
router.get('/:id', tvShowController.getTVShowById);

// Add a new TV show
router.post('/', tvShowController.addTVShow);

// Update a TV show by ID
router.put('/:id', tvShowController.updateTVShow);

// Delete a TV show by ID
router.delete('/:id', tvShowController.deleteTVShow);

module.exports = router;
