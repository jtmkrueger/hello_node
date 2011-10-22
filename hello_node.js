var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Cloud9 IDE! This server is running live');
}).listen(process.env.PORT, "0.0.0.0");
console.log('Server running at http://127.0.0.1:1337/');