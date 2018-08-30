const API = require('../../utils/fetch');
const Config = require('../store/config');
let appInstance = getApp();

let param = {
	data: {
		personalInfo: null,
		userType: null
	},
	onLoad: function() {
		wx.setNavigationBarTitle({
			title: '个人中心'
		})
		API.getUserInfo(Object.assign({
			_token: wx.getStorageSync('SDKUserInfo').token || ''
		}, Config)).then(res => {
			if (res.code === 1) {
									let info = res.data;
					this.setData({
						personalInfo: {
							avatar: info.avatar,
							username: info.username,
							userType: 'sdk',
							exp: info.exp,
							score: info.score
						}
					})
			} else {
							let WXUserInfo = appInstance.globalData.WXUserInfo;
			this.setData({
				personalInfo: {
					avatar: WXUserInfo.avatarUrl,
					username: WXUserInfo.nickName,
					userType: 'weixin'
				}
			})
			}
		})
		// let SDKUserInfo = wx.getStorageSync('SDKUserInfo');
		// if (SDKUserInfo) {
		// 	API.getUserInfo(Object.assign({
		// 		_token: wx.getStorageSync('SDKUserInfo').token
		// 	}, Config)).then(res => {
		// 		if (res.code === 1) {
		// 			let info = res.data;
		// 			this.setData({
		// 				personalInfo: {
		// 					avatar: info.avatar,
		// 					username: info.username,
		// 					userType: 'sdk',
		// 					exp: info.exp,
		// 					score: info.score
		// 				}
		// 			})
		// 		} else {
		// 			wx.showToast({
		// 				title: res.msg,
		// 				icon: 'none'
		// 			})
		// 		}
		// 	})
		// } else {
		// 	let WXUserInfo = appInstance.globalData.WXUserInfo;
		// 	this.setData({
		// 		personalInfo: {
		// 			avatar: WXUserInfo.avatarUrl,
		// 			username: WXUserInfo.nickName,
		// 			userType: 'weixin'
		// 		}
		// 	})
		// }
	}
}

Page(param)