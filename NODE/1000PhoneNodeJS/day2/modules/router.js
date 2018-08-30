var file = require('./file')
var url = require('url')
// var qs = require('querystring')


module.exports = {
	home: function(req, res) {
		file.readFile('./views/home.html', res, req)
	},
	login: function(req, res) {
		//get方法
		// var urlObj = url.parse(req.url, true).query
		// console.log(urlObj.email)
		// console.log(urlObj.password)
		// file.readFile('./views/login.html', res, req)

		//post方法
		// var post = ''
		// req.on('data', chunk => {
		// 	post += chunk
		// })

		// req.on('end', () => {
		// 	var urlObj = qs.parse(post)
		// 	console.log(urlObj.email)
		// })
		// file.readFile('./views/login.html', res, req)

		//重写方法
		var post = ''
		req.on('data', chunk => {
			post += chunk
		})
		req.on('end', () => {
			file.postReadFile('./views/login.html', res, req, post)
		})
	},
	registor: function(req, res) {
		res.write('注册页面')
	},
	img: function(req, res) {
		file.readImg('./images/pet.jpg', res)
	}
}