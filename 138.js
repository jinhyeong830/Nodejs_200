/** @format */

const fs = require('fs');
const http = require('http');
const url = require('url');
const port = 4000;

const server = http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;

  if (pathname === '/') {
    fs.readFile('./example138.html', 'utf-8', (error, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);

      console.log(pathname);
    });
  } else if (pathname === '/example') {
    fs.readFile('./example138.html', 'utf-8', (error, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);

      console.log(pathname);
    });
  }
});

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
