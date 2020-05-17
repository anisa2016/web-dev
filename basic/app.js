
var http=require('http');
http.createServer(function(req,res){
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.end('Hello World\n');
}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.01:8080');
console.log("Hello World")
