// models/TVShow.js

const mongoose = require('mongoose');

const EpisodeSchema = new mongoose.Schema({
  episodeNumber: Number,
  title: String,
});

const SeasonSchema = new mongoose.Schema({
  seasonNumber: Number,
  episodes: [EpisodeSchema],
});

const TVShowSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  isTrending: {
    type: Boolean,
    default: false,
  },
  isLatest: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  seasons: [SeasonSchema],
});

module.exports = mongoose.model('TVShow', TVShowSchema);
