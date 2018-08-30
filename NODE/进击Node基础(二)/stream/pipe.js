/**
 * stream pipe方法
 */
/**
 * Stram 种类
 *
 * Readable  可读流	//读取数据
 * Writable  可写流 //消费数据
 * Duplex 	 双工流	//可读可写 
 * Transform 转化流 //(双工) 不保存数据  只处理流经的数据
 * 
 */

var http = require('http')
var fs = require('fs')
var request = require('request')

http.createServer(function(req, res) {
	//常规非pipe写法
	// fs.readFile('./stream_copy_wall.jpg', function(err, data) {
	// 	if(err) {
	// 		res.end('file not exist!')
	// 	}
	// 	else {
	// 		res.writeHeader(200, {'Context-type': 'text/html'})
	// 		res.end(data)
	// 	}
	// })
	// 
	// 本地资源
	// fs.createReadStream('./stream_copy_wall.jpg').pipe(res)
	
	request('http://mmbiz.qpic.cn/mmbiz_png/uMh5nccSicmKFHvoe3ibbmniaCscQAibIbHUOptWD8ZDcKB5VHJxUebFpTwFPmWaU3XvDia6LhAXtklChYRjkQB9F6w/640').pipe(res)
}).listen(8090)
