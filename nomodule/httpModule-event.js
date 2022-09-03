/** @format */

const http = require('http');
const server = http.createServer();

server.on('request', () => {
  console.log('request');
});

server.on('connection', () => {
  console.log('connection');
});

server.on('close', () => {
  console.log('close');
});
server.listen(50000, () => {
  console.log('http://localhost:50000');
});

const testClose = function () {
  server.close();
  console.log('서버가 종료됨');
};

setTimeout(testClose, 15000);
