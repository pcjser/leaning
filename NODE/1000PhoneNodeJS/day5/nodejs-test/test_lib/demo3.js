const chai = require('chai')
const should = chai.should()

describe('Demo3', () => {
	it('使用 should 风格的断言测试', function() {
		var value = 'hello'
		// value.should.exist
		// value.should.be.a('string')
		// value.should.equal('hello')
		// value.should.not.equal('abc')
		// value.should.have.length(5)

		//连写
		value.should.exist.and.equal('hello').and.have.length(5).and.be.a('string')
	})
})