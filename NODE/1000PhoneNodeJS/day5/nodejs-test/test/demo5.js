const chai = require('chai')
const expect = chai.expect

var Demo = require('../lib/demo.js')
var demo = new Demo()

// describe('Demo', () => {
// 	it('单价 10 块钱的 3 件商品小计金额应该是 30 块钱', function() {
// 		var subtotal = demo.subtotal(10, 3)
// 		expect(subtotal).to.equal(30)	//强类型   equal 相当于 ===
// 	})
// })

describe('异步Demo', () => {

	// this.timeout(5000)  本条代码不可用 命令行执行 mocha -t 5000(延时时间)

	// it('一段时间以后返回数据', function(done) {
	// 	demo.waitTwoSecond(123, function(data) {
	// 		expect(data).to.equal(123)
	// 		done()
	// 	})
	// })

	it('加载豆瓣 API 返回的数据应该包含 subjects 属性', function(done) {
		demo.fetchData('top250', function(data) {
			expect(data).to.have.property('subjec')
		})
		done()
	})
})