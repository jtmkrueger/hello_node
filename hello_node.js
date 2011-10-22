var PORT = process.env.PORT;
var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end("hello Node.js");
});

server.listen(PORT);