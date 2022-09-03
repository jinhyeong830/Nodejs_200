/** @format */

const fs = require('fs');
const http = require('http');

http
  .createServer((req, res) => {
    fs.readFile('./example136.html', 'utf-8', (error, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  })
  .listen(50000, () => {
    console.log('http://localhost:50000');
  });
