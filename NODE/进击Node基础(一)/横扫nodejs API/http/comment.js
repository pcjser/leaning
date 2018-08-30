var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
	'content': '不错！不错！不错！',
	'mid': 15316
})

var options = {
	hostname: 'www.imooc.com',
	port: 80,
	path: '/course/docomment',
	method: 'POST',
	headers: {
		'Accept': 'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding': 'gzip, deflate, br',
		'Accept-Language': 'zh-CN,zh;q=0.9',
		'Connection': 'keep-alive',
		'Content-Length': postData.length,
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie': 'imooc_uuid=4972d0d2-0aa0-44cd-8c13-01d4691dd8e3; imooc_isnew_ct=1512010945; UM_distinctid=1607c13a5634a8-03c5657f7b533-7b1f3c-1fa400-1607c13a564408; mc_channel=bdqdkj; mc_marking=c9ab8a698fc5f3bc0a604188a40f35dc; CNZZDATA1261110065=776199607-1513909155-https%253A%252F%252Fwww.baidu.com%252F%7C1514941909; loginstate=1; apsid=Y5OTI2NDU2NDIyYjFmMjk5ZTNjODNkYWYyODgzNTEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDUxODU3MQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyMDE2ODgwODBAcXEuY29tAAAAAAAAAAAAAAAAAAAAAGFkZTE0N2I5NWY3NzA1YmY4OTMwMDI5Mjc2YWRjMmM1E4RNWhOETVo%3DOD; last_login_username=201688080%40qq.com; PHPSESSID=ceaakoe23n1oiu915c7gn8dpg2; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1515038041,1515048641,1515053144,1515056089; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1515057387; imooc_isnew=2; cvde=5a4debd90cfcc-39',
		'Host': 'www.imooc.com',
		'Origin': 'https://www.imooc.com',
		'Referer': 'https://www.imooc.com/video/15316',
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36',
		'X-Requested-With': 'XMLHttpRequest'
	}
}

var req = http.request(options, function(res) {
	console.log('Status: '+ res.statusCode)
	console.log('headers: '+ JSON.stringify(res.headers))
	
	res.on('data', function(chunk) {
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})

	res.on('end', function() {
		console.log('评论完毕')
	})

})

req.on('error', function(e) {
	console.log('Error: '+e.message)
})

req.write(postData)

req.end()
