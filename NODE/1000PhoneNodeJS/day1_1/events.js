const EventEmitter = require('events')

class Player extends EventEmitter {}	//类继承

var player = new Player()				//实例化对象

player.on('play', track => {			//player.once()绑定之后只会触发一次
	console.log(`正在播放:《${track}》`)
})



player.emit('play', '精绝古城')
player.emit('play', '哈哈哈哈')