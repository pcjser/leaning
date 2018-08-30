const chai = require('chai')
const expect = chai.expect

describe('Demo4', () => {
	it('使用 expect 风格的断言测试', function() {
		//字符串相关
		// var value = 'hello'

		// expect(value).to.exist
		// expect(value).to.be.a('string')
		// expect(value).to.equal('hello')
		// expect(value).to.not.equal('abc')
		// expect(value).to.have.length(5)

		//数字
		var number = 3
		expect(number).to.be.at.most(5)	//<=5
		expect(number).to.be.at.least(3)	//>=3
		expect(number).to.be.within(1, 3)	//介于1-3之间
	})
})