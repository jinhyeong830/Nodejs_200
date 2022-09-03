/** @format */
/* 쿠키 추출 */
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.headers.cookie) {
    // 쿠키가 있을 때
    const cookie = req.headers.cookie.split(';').map((element) => {
      element = element.split('=');
      return {
        name: element[0],
        value: element[1],
      };
    });
    res.end(`<h1>${JSON.stringify(cookie)}</h1>`);
  } else {
    // 쿠키 없을 때
    res.writeHead(200, ['title=dd', 'content=df']);
    res.end(`<h1>쿠키 생성함</h1>`);
  }
});
server.listen(4000);
