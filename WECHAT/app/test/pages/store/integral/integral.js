const API = require('../../../utils/fetch');
const Config = require('../config');
const Util = require('../../../utils/util');

let param = {
	data: {
		integralList: [],
		page: 1,
		hasMore: true,
		loading: false,
		init: false
	},
	onLoad: function () {
		wx.setNavigationBarTitle({
			title: '积分明细'
		})
		this.render('init');
	},
	loadmore: function () {		
		this.render('more');	
	},
	render: function (type) {
		if (!this.data.hasMore || this.data.loading) {
			return false
		};
		this.setData({
			loading: true
		});
		if (type === 'init') {
			this.setData({
				init: true
			})
		}
		API.getIntegralList(Object.assign({
			cur_page: this.data.page,
			_token: wx.getStorageSync('SDKUserInfo').token
		}, Config)).then(res => {
			this.setData({
				loading: false
			})
			if (res.code === 1) {
				let list = res.data.list;
				list.map(data => {
					data.time = Util.formatStamp(data.time, '-', 'date');
				});
				this.setData({
					integralList: this.data.integralList.concat(list)
				});
				if (list.length != res.data.page_num) {
					this.setData({
						hasMore: false
					})
				} else {
					this.setData({
						page: ++this.data.page
					})
				}
			} else {
				wx.showToast({
					title: res.msg,
					icon: 'none'
				})
			}
		})
	}
}

Page(Util.loginCheck(param))