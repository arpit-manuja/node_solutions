const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  const filePath = './q9.html';

  fs.readFile(filePath, 'utf8', (error, html) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.end('Internal Server Error');
      return;
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(html);
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
