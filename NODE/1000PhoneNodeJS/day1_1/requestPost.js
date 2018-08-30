const https = require('https')
const qs = require('qs')

var postData = qs.stringify({
	'question[title]': '测试标题',
	'question[content]': 'adsasdas',
	'question[courseId]': '227',
	'question[lessonId]': '1753'
})

var options = {
	hostname: ''
}

var responseData = ''
var request = https.request()