var http = require("http");
var a=10;
var b=90;
var c=a+b;
http.createServer(function(req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("Hello, world!");
    res.write(`Value of A is ${a} and B is ${b} and sum is ${c}`);
    res.end("Bye");
}).listen(3000);
console.log("Server listening on");