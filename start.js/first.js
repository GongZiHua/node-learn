
var http = require('http');
http.createServer(function(req, res){
	console.log(req.method);
	console.log(req.url);
	console.log(req.headers);
	res.statusCode = 404;
	res.setHeader('Content-Type','text/html;charset=utf-8');
	res.setHeader('name','dsada');
	res.write(new Date().toString());
	res.end();
}).listen(8080,'localhost');
console.log('Server is runnig at 127.0.0.1')
