// models/Movie.js

const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
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
  }
});

module.exports = mongoose.model('Movie', MovieSchema);
