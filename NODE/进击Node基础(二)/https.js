/*
* @Author: SWAIN
* @Date:   2018-01-04 22:31:19
* @Last Modified by:   SWAIN
* @Last Modified time: 2018-01-04 22:35:26
*/
var https = require('https')
var fs = require('fs')

var options = {
	key: fs.reasFileSync('ssh_key.pem'),
	cert: fs.readFileSync('ssh_cert.pem')
}

https.createServer(options, function(req, res) {
	res.writeHead(200)
	res.end('Hello Imooc')
}).listen(8090)