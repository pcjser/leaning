describe('Demo', function() {
	describe('方法1', function() {
		// before(function() {
		// 	console.log('--------测试之前')
		// })
		context('情景1', function() {
			it('测试1', function() {

			})
			it('测试2', function() {
				
			})
		})
		beforeEach(function() {
			console.log('每条测试之前')
		})
		afterEach(function() {
			console.log('每条测试之后')
		})
		// after(function() {
		// 	console.log('-------测试之后')
		// })
	})
})