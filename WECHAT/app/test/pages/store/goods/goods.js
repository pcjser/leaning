const API = require('../../../utils/fetch');

let param = {
	data: {
		goodsList: [],
		page: 1,
		hasMore: true,
		loading: false,
		init: false
	},
	onLoad: function () {
		wx.setNavigationBarTitle({
			title: '商品列表'
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
		API.getGoodsList({
			cur_page: this.data.page
		}).then(res => {
			this.setData({
				loading: false
			});
			if (type === 'init') {
				this.setData({
					init: true
				})
			}
			if (res.code === 1) {
				let list = res.data.list;
				this.setData({
					goodsList: this.data.goodsList.concat(list)
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

Page(param)