/** @format */

const http = require('http');
const fs = require('fs');
const { name } = require('ejs');
const port = 4000;

const server = http.createServer((req, res) => {
  //get일 때는 페이지를 보여주고
  if (req.method === 'GET') {
    fs.readFile('./example140.html', 'utf-8', (error, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
      console.log(`${req.method}요청을 했습니다.`);
    });
    //post일 때는 data를 받아서 end메소드로 쏴준다.
  } else if (req.method === 'POST') {
    req.on('data', (data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
      console.log(`${req.method}요청을 했습니다.`);
    });
  }
});

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
