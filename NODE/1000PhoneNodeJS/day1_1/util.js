//模块定义
var util = {
	sayHello: function() {
		return 'hello NodeJS';
	},
	add: function(x, y) {
		return x + y;
	}
}

//模块接口的暴露
// module.exports = util;	//module对象的exports实例
exports.sayHello = util.sayHello;
exports.add = util.add;