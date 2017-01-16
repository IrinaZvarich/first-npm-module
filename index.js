
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200);
    var a=2;
    var b=3;
    var c = a+b;
    res.end('Sum = ' + c);
}).listen(3000);

console.log('Node started on http://localhost:3000');