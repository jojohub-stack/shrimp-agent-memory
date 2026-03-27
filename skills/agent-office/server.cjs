const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8788;
const BASE_DIR = __dirname;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.json': 'application/json'
};

const server = http.createServer((req, res) => {
  let filePath = req.url.split('?')[0]; // 移除查詢參數
  if (filePath === '/') filePath = '/index.html';
  
  const fullPath = path.join(BASE_DIR, filePath);
  const ext = path.extname(fullPath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(fullPath, (err, content) => {
    if (err) {
      console.log(`❌ 404: ${fullPath}`);
      res.writeHead(404);
      res.end('File not found: ' + filePath);
    } else {
      console.log(`✅ 200: ${filePath}`);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Agent Office running at http://localhost:${PORT}`);
  console.log(`📁 Serving from: ${BASE_DIR}`);
});
