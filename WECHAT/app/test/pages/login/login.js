const API = require('../../utils/fetch')

var appInstance = getApp()

const param = {
	onLoad: function (options) {
		wx.setNavigationBarTitle({
			title: '用户登录'
		})
		this.setData({
			target: options.target
		})
	},
	formSubmit: function (e) {
		let data = e.detail.value;
		if(!data.username || !data.password) {
			wx.showToast({
				title: '请完善账号密码信息后登录',
				icon: 'none'
			})
			return false;
		}
		API.login(data).then(res => {
			if (res.status === 1) {
				try {
					wx.setStorageSync('SDKUserInfo', res.data)
				} catch (e) { 

				}
				wx.navigateBack()
				// wx.redirectTo({
				// 	url: "/" + this.data.target
				// });
			} else {
				wx.showToast({
					title: res.info,
					icon: 'none'
				})
			}
		})
	}
}

Page(param)