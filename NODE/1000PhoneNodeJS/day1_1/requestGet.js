const https = require('https')
//获取异步请求数据
var options = {
	hostname: 'api.douban.com',
	port: 443,
	method: 'GET',
	path: '/v2/movie/top250'
}

var responseData = ''
var request = https.request(options, response => {
	// console.log(response)	//
	// console.log(response.statusCode)	//请求返回的状态
	// console.log(response.headers)	//请求返回的头部

	response.setEncoding('utf8')	//设置编码格式
	response.on('data', chunk => {	//获取返回数据
		// console.log(chunk)
		responseData += chunk
	})
	response.on('end', () => {
		JSON.parse(responseData).subjects.map(item => {	//数据处理遍历title
			console.log(item.title)
		})
	})
})

request.on('error', error => {
	console.log(error)
})

request.end()