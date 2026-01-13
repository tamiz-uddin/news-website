const express = require('express');
const router = express.Router();

// Sample news data (in a real app, this would come from a database)
const sampleNews = [
  {
    id: 1,
    title: 'Breaking: Major Tech Announcement',
    content: 'A major technology company has announced...',
    category: 'technology',
    author: 'John Doe',
    publishedAt: new Date().toISOString(),
    imageUrl: 'https://via.placeholder.com/400x200'
  },
  {
    id: 2,
    title: 'Sports Championship Results',
    content: 'The championship finals have concluded with...',
    category: 'sports',
    author: 'Jane Smith',
    publishedAt: new Date().toISOString(),
    imageUrl: 'https://via.placeholder.com/400x200'
  }
];

// GET /api/news - Get all news
router.get('/', (req, res) => {
  try {
    const { category, limit = 10, offset = 0 } = req.query;

    let filteredNews = sampleNews;

    if (category) {
      filteredNews = sampleNews.filter(news =>
        news.category.toLowerCase() === category.toLowerCase()
      );
    }

    const paginatedNews = filteredNews.slice(
      parseInt(offset),
      parseInt(offset) + parseInt(limit)
    );

    res.json({
      success: true,
      data: paginatedNews,
      total: filteredNews.length,
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching news'
    });
  }
});

// GET /api/news/:id - Get news by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const news = sampleNews.find(n => n.id === parseInt(id));

    if (!news) {
      return res.status(404).json({
        success: false,
        message: 'News article not found'
      });
    }

    res.json({
      success: true,
      data: news
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching news article'
    });
  }
});

// POST /api/news - Create new news article (admin only)
router.post('/', (req, res) => {
  try {
    const { title, content, category, author, imageUrl } = req.body;

    if (!title || !content || !category) {
      return res.status(400).json({
        success: false,
        message: 'Title, content, and category are required'
      });
    }

    const newNews = {
      id: sampleNews.length + 1,
      title,
      content,
      category,
      author: author || 'Anonymous',
      publishedAt: new Date().toISOString(),
      imageUrl: imageUrl || 'https://via.placeholder.com/400x200'
    };

    sampleNews.push(newNews);

    res.status(201).json({
      success: true,
      data: newNews,
      message: 'News article created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating news article'
    });
  }
});

module.exports = router;