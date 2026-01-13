const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('./middleware/logger');
const newsRoutes = require('./routes/news');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to News Website API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      news: '/api/news',
      categories: '/api/categories'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API Routes
app.use('/api/news', newsRoutes);

app.get('/api/categories', (req, res) => {
  // TODO: Implement categories logic
  res.json({
    success: true,
    data: ['politics', 'technology', 'sports', 'entertainment'],
    message: 'Categories endpoint'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 News Website server running on port ${PORT}`);
  console.log(`📱 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;