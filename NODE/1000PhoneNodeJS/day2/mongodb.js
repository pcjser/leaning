var mongodb = require('mongodb')

//创建数据库服务的链接
var server = new mongodb.Server('localhost', 27017, {auto_reconnect: true})

//创建数据库链接
var db = new mongodb.Db('movies', server, {safe: true})

//测试数据库链接
db.open((err, db) => {
	if(err) {
		console.log('log-' + err)
	} else {
		console.log('log-connect mongodb success!')
		db.collection('movie', {safe: true}, function(err, conn){
			if(err) {
				console.log(err)
			} else {
				console.log('查询成功')
				// conn.find({}, {title:1, year:1, _id:0}).limit(3).skip(3).toArray((err, res) => {
				// 	if(!err) {
				// 		res.forEach(value => {
				// 			console.log(value)
				// 		})
				// 	}
				// })
			}
		})
	}
})