# News Website API

A modern Node.js backend API for a news website built with Express.js.

## Features

- 📰 RESTful API for news articles
- 📁 Category-based news filtering
- 🔍 Search and pagination support
- 📊 Health check endpoint
- 🛠️ Request logging middleware
- 📖 Static file serving
- 🚀 Easy deployment

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tamiz-uddin/news-website.git
cd news-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## API Endpoints

### Health Check
- **GET** `/health` - Check server status and uptime

### News Articles
- **GET** `/api/news` - Get all news articles (with optional query parameters)
  - Query parameters:
    - `category`: Filter by category (e.g., `?category=technology`)
    - `limit`: Limit results (default: 10)
    - `offset`: Pagination offset (default: 0)
- **GET** `/api/news/:id` - Get specific news article by ID
- **POST** `/api/news` - Create a new news article
  - Body: `{ "title": "string", "content": "string", "category": "string", "author": "string", "imageUrl": "string" }`

### Categories
- **GET** `/api/categories` - Get available news categories

## Project Structure

```
news-website/
├── src/
│   ├── index.js          # Main application file
│   ├── routes/
│   │   └── news.js       # News API routes
│   └── middleware/
│       └── logger.js     # Request logging middleware
├── public/
│   └── index.html        # Static HTML documentation
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon
- `npm test` - Run tests (to be implemented)
- `npm run lint` - Lint the code
- `npm run lint:fix` - Fix linting issues

## Development

### Adding New Routes

1. Create a new route file in `src/routes/`
2. Import and use it in `src/index.js`

### Adding Middleware

1. Create middleware in `src/middleware/`
2. Import and use it in `src/index.js`

## Deployment

This project includes configurations for various deployment platforms:

- **Vercel**: `vercel.json`
- **Railway**: `Dockerfile`
- **Render**: `render.yaml`
- **Netlify**: `netlify.toml`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

ISC License - see package.json for details