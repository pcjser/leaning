const Util = require('../../../utils/util');
const API = require('../../../utils/fetch');
const Config = require('../../store/config');

let param = {
	data: {
		region: ['请选择', '请选择', '请选择'],
		customItem: '请选择',
		address: null,
		contacts: null,
		mobile: null
	},
	onLoad: function () {
		wx.setNavigationBarTitle({
			title: '收货地址'
		})
		API.getUserAddress(Object.assign({
			_token: wx.getStorageSync('SDKUserInfo').token
		}, Config)).then(res => {
			if (res.code === 1) {
				let userInfo = res.data;
				let arr = [];
				arr[0] = userInfo.province || '请选择'
				arr[1] = userInfo.city || '请选择'
				arr[2] = userInfo.area || '请选择'
				this.setData({
					region: arr,
					address: userInfo.address || null,
					contacts: userInfo.contacts || null,
					mobile: userInfo.mobile || null
				})
			} else {
				wx.showToast({
					title: res.msg,
					icon: 'none'
				})
			}
		})
	},
	bindRegionChange: function (e) {
		this.setData({
			region: e.detail.value
		})
	},
	bindAddressInput: function (e) {
		this.setData({
			address: e.detail.value
		})
	},
	bindContactsInput: function (e) {
		this.setData({
			contacts: e.detail.value
		})
	},
	bindMobileInput: function (e) {
		this.setData({
			mobile: e.detail.value
		})
	},
	goBackTap: function () {
		wx.navigateBack()
	},
	confirmTap: function () {
		if (this.data.region[2] === '请选择' || !this.data.address || !this.data.contacts || !this.data.mobile) {
			wx.showToast({
				title: '请完善资料后确定',
				icon: 'none'
			});
			return false
		}
		API.postUserAddress(Object.assign({
			_token: wx.getStorageSync('SDKUserInfo').token,
			province: this.data.region[0],
			city: this.data.region[1],
			area: this.data.region[2],
			address: this.data.address,
			contacts: this.data.contacts,
			mobile: this.data.mobile
		}, Config)).then(res => {
			if (res.code === 1) {
				wx.navigateBack()
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