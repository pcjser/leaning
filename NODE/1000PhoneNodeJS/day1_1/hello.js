// console.log('Hello World');
var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	console.log(request.url);
	if(request.url !== '/favicon.ico'){	//默认访问该文件
		console.log('hello world');
		response.write('hello world');	//浏览器端
		response.end();   				//输出结束
	}	
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');