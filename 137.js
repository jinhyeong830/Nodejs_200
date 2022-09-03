/** @format */

const fs = require('fs');
const http = require('http');
const PORT1 = 50001;
const PORT2 = 8000;
const server1 = http.createServer((req, res) => {
  fs.readFile('./newyork.jpg', (error, data) => {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' }); //statusCode와 파일이 읽어들일 형식
    res.end(data);
  });
});

server1.listen(PORT1, () => {
  console.log(`NUMBER ${PORT1} SERVER : 'http://localhost:${PORT1}'`);
});

const server2 = http.createServer((req, res) => {
  res.readFile('./newyork.mp4', (error, data) => {
    res.writeHead(200, { 'Content-Type': 'video/mp3' });
    // content type mp4는 뭐적용?
    res.end(data);
  });
});

server2.listen(PORT2, () => {
  console.log(`NUMBER ${PORT2} SERVER : 'http://localhost:${PORT2}'`);
});
