import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Fetch all movies
export const fetchMovies = async () => {
  const response = await axios.get(`${API_BASE_URL}/movies`);
  return response.data;
};

// Fetch all TV shows
export const fetchTVShows = async () => {
  const response = await axios.get(`${API_BASE_URL}/tvshows`);
  return response.data;
};
