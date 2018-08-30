/*
	得到文件与目录的信息：stat
	创建一个目录：mkdir
	创建文件并写入内容：writeFile,appendFile
	读取文件内容：readFile
	列出目录的东西：readdir
	重命名目录或文件：rename
	删除目录与文件：rmdir,unlink
*/

const fs = require('fs')

// fs.stat('hello.js', (err, stats) => {
// 	if(err) {
// 		console.log(err)
// 	} else {
// 		console.log(stats)		//查看文件（夹）详情
// 		console.log(`文件: ${stats.isFile()}`)
// 		console.log(`目录: ${stats.isDirectory()}`)
// 	}
// })

//创建目录
// fs.mkdir('logs', error => {
// 	if(error) {
// 		console.log(error)
// 	} else {
// 		console.log('成功创建目录：logs')
// 	}
// })

// //写入文件
// fs.writeFile('logs/hello.log', 'hello ~ \n', error => {
// 	if(error) {
// 		console.log(error)
// 	} else {
// 		console.log('文件写入成功')
// 	}
// })

// //追加内容
// fs.appendFile('logs/hello.log', '我是追加的内容', error => {
// 	if(error) {
// 		console.log(error)
// 	} else {
// 		console.log('文件追加成功')
// 	}
// })

//文件读取
// fs.readFile('logs/hello.log', 'utf8', (error, data) => {
// 	if (error) {
// 		console.log(error)
// 	} else {
// 		// console.log(data)	//显示为buffer
// 		// console.log(data.toString())	//显示正确内容 可在方法调用加第二个参数utf8可解决这个问题
// 		console.log(data)
// 	}
// })

//文件夹读取
// fs.readdir('logs', (error, files) => {
// 	if (error) {
// 		console.log(error)
// 	} else {
// 		console.log(files)	//返回数组
// 	}
// })

//文件重命名（或者文件夹）
// fs.rename('logs/hello.log', 'logs/greeting.log', error => {
// 	if (error) {
// 		console.log(error)
// 	} else {
// 		console.log('重命名成功')
// 	}
// })

//文件删除

// fs.readdirSync('logs').map(file => {
// 	//文件删除
// 	fs.unlink(`logs/${file}`, error => {
// 		if (error) {
// 			console.log(error)
// 		} else {
// 			console.log(`成功删除文件：${file}`)
// 		}
// 	})
// })
//文件夹删除
// fs.rmdir('logs', error => {
// 	if (error) {
// 		console.log(error)
// 	} else {
// 		console.log('文件夹删除成功')
// 	}
// })
