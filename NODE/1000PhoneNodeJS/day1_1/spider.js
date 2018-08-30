var http = require('http')	//发起http请求
var https = require('https')	//发起https请求
var cheerio = require('cheerio')	//第三方工具 类似于JQ
var url = 'https://www.lagou.com'

function filterMenu(html) {
	var $ = cheerio.load(html)
	var menu = $('.menu_main')
	var menuData = []
	menu.each(function(index, value){
		var menuTitle = $(value).find('h2').text()	//用法类似
		var menuLists = $(value).find('a')
		var menuList = []
		menuLists.each(function(index, value){
			menuList.push($(value).text())
		})
		menuData.push({
			menuTitle: menuTitle,
			menuList: menuList
		})
	})
	return menuData
}

function printMenu(menu) {
	menu.forEach(function(value){
		console.log(value.menuTitle + '\n')
		value.menuList.forEach(function(value){
			console.log(value)
		})
	})
}

https.get(url, function(res) {	//https协议网站需要用https请求 静态资源
	var html = ''
	res.on('data', function(data){
		html += data
	})

	res.on('end', function(){
		// console.log(html)
		var result = filterMenu(html)
		printMenu(result)
	})

	res.on('error', function(err){
		console.log(err)
	})
})