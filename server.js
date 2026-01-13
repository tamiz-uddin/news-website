import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      // Custom routes can be added here
      // For example:
      // if (pathname === '/api/custom') {
      //   // Handle custom API route
      //   res.writeHead(200, { 'Content-Type': 'application/json' });
      //   res.end(JSON.stringify({ message: 'Custom API response' }));
      // } else {
        await handle(req, res, parsedUrl);
      // }
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});