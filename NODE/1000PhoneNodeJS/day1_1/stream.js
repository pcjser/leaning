const fs = require('fs')
const zlib = require('zlib')	//压缩组件

var fileReadStream = fs.createReadStream('data.json')	//文件读取流
// var fileWriteStream = fs.createWriteStream('data-1.json')	//文件写入流
var fileWriteStream = fs.createWriteStream('data.json.gz')

// var count = 0

// fileReadStream.on('data', chunk => {	//文件读取进行时回调
// 	console.log(`${ ++count } 接收到的：${chunk.length}`)
// 	fileWriteStream.write(chunk)		//文件写入
// })

// fileReadStream.on('end', () => {		//文件读取结束时回调
// 	console.log('----结束----')
// })

// fileReadStream.on('error', error => {	//文件读取错误时的回调
// 	console.log(error)	
// })

// fileReadStream.on('data', chunk => {
// 	console.log(chunk.toString())
// })


//一次性到位  文件读取写入
// fileReadStream.pipe(fileWriteStream)

fileReadStream.on('data', source => {
	console.log(source)
})

fileReadStream
	.pipe(zlib.createGzip())
	.pipe(fileWriteStream)