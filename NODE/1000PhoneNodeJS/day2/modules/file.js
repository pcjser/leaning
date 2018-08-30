var fs = require('fs')
var qs = require('querystring')

module.exports = {
	readFile: function(file, res, req) {
		fs.readFile(file, 'utf-8', function(err, data) {
			if (err) throw err
			res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
			res.write(data)
			res.end()
		})
	},
	postReadFile(file, res, req, post) {
		var urlObj = qs.parse(post)
		var arr = ['email', 'password']
		var reg;
		fs.readFile(file, 'utf-8', function(err, data){
			if (err) throw err
			res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
			for (var i = 0; i < arr.length; i++) {
				reg = new RegExp('{' + arr[i] + '}', 'gi')
				data = data.replace(reg, urlObj[arr[i]])
				// console.log(urlObj[arr[i]])
			}
			res.write(data)
			res.end()
		})
	},
	readImg: function(file, res) {
		fs.readFile(file, 'binary', function(err, data) {	//binary 二进制流
			if(err) throw err
			res.writeHead(200, {'Content-Type': 'image/jpeg'})
			/*输出图片前面不能输出任何其它内容**/
			// res.write('testtest')  无法输出  错误示例
			res.write(data, 'binary')
			res.end()
		})
	}
}