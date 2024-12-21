// server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');            // Import CORS after installing
require('dotenv').config();

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());                         // Enable CORS
app.use(express.json());                 // Parse JSON payloads

// Define Routes
app.use('/api/movies', require('./routes/movies'));
app.use('/api/tvshows', require('./routes/tvshows'));

// Test Route
app.get('/', (req, res) => res.send('API is running...'));

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
