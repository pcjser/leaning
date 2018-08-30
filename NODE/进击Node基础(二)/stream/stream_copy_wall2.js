var fs = require('fs')

var readStream = fs.createReadStream('1.mp4')	//创建可读流
var writeStream = fs.createWriteStream('1-stream.mp4')	//创建可写流

/*
	标准复制流程   
	问题： i/o 不一致  容易爆仓
 */

// readStream.on('data', function(chunk) {
// 	writeStream.write(chunk)
// })

// readStream.on('end', function() {
// 	writeStream.end()
// })

//问题解决  判断内容是否被全部写入  进行后续操作
readStream.on('data', function(chunk) {
	if(writeStream.write(chunk) === false) {
		console.log('still cached')
		readStream.pause()
	} else {
		writeStream.write(chunk)
	}	
})

readStream.on('end', function() {
	writeStream.end()
})

writeStream.on('drain', function() {	//数据消费完   写入完成
	console.log('data drains')
	readStream.resume()
})