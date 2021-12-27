const http = require('http');
// http 서버를 구축하는 패키지
http // 서버를 생성하고 req,res를 요청과 응답을 진행 할 수 있도록 도와주는 함수
  .createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200);
      res.end('main url');
    } else if (req.url === '/upload') {
      res.writeHead(200);
      res.end('upload url');
    } else if (req.url === '/delete') {
      res.writeHead(200);
      res.end('delete url');
    } else {
      res.writeHead(200);
      res.end('Not Found');
    }
  })
  .listen(3000, () => {
    console.log('3000번 포트 접속 완료 !!');
  });
