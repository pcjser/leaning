const API = require('../../utils/fetch');
let param = {
	data: {
		indexList: null
	},
	onLoad: function () {
		wx.setNavigationBarTitle({
			title: '积分商城'
		})
		API.getStoreIndex().then(res => {
			if (res.code === 1) {
				this.setData({
					indexList: res.data
				})
			} else {
				wx.showToast({
					title: res.msg,
					icon: 'none'
				})
			}
		})
	}
}

Page(param)