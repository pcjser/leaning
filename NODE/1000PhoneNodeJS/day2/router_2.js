var http = require('http')
var url = require('url')

var router = require('./modules/router')

http.createServer(function(req, res){
	if(req.url !== '/favicon.ico') {
		var pathName = url.parse(req.url).pathname.replace(/\//, '')
		try {
			router[pathName](req, res)
		} catch(err) {
			router['home'](req, res)
		}
	}
}).listen(8000)