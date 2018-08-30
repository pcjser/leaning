var https = require('https')

class Demo {
	fetchData (api, callback) {
		var requestUrl = `https://api.douban.com/v2/movie/${api}`

		https.get(requestUrl, function(res) {
			var responseData = ''
			res.setEncoding('utf8')

			res.on('data', function(chunk) {
				responseData += chunk
			})

			res.on('end', function() {
				callback(JSON.parse(responseData))
			})
		})
	}
	// waitTwoSecond (data, callback) {
	// 	setTimeout(function() {
	// 		callback(data)
	// 	}, 2000)
	// }
	// subtotal (unitPrice, quantity) {
	// 	return unitPrice * quantity
	// }
}

module.exports = Demo