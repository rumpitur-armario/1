const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
dotenv.config();

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // To serve static files like HTML, CSS

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
