const API = require('../../../utils/fetch');
const WxParse = require('../../wxParse/wxParse.js');
const Util = require('../../../utils/util');
const Config = require('../config');

let param = {
	data: {
		goodsInfo: null
	},
	onLoad: function (options) {
		wx.setNavigationBarTitle({
			title: '商品详情'
		})
		API.getGoodsInfo(Object.assign({
			goods_id: options.goodsId,
			_token: wx.getStorageSync('SDKUserInfo').token
		}, Config)).then(res => {
			if (res.code === 1) {
				let that = this;
				this.setData({
					goodsInfo: res.data
				});
				WxParse.wxParse('content', 'html', res.data.description, that, 0)
			} else {
				wx.showToast({
					title: res.msg,
					icon: 'none'
				})
			}
		})
	},
	exchangeTap: function (e) {
		if (this.data.goodsInfo.score > this.data.goodsInfo.user_score) {
			wx.showToast({
				title: '积分不足，快去赚取积分吧！',
				icon: 'none'
			});
			return false;
		}
		if (this.data.goodsInfo.goods_type === 2) {
			API.getUserAddress(Object.assign({
				_token: wx.getStorageSync('SDKUserInfo').token
			}, Config)).then(res => {
				if(res.code === 1) {
					let address = res.data;
					if(!address.city || !address.area || !address.contacts || !address.mobile) {
						wx.navigateTo({
								url: '/pages/personal/address/address'
						})
					} else {
						wx.showModal({
							title: '收货地址确认',
							cancelText: '地址修改',
							confirmText: '地址确认',
							confirmColor: '#ec3833',
							content: address.province + address.city + address.area + '，收货人：' + address.contacts + '，' + '电话：' + address.mobile,
							success: res => {
								if(res.confirm) {
									API.createOrder(Object.assign({
										goods_id: this.data.goodsInfo.goods_id,
										num: 1,
										_token: wx.getStorageSync('SDKUserInfo').token
									}, Config)).then(res => {
										if(res.code === 1) {
											wx.showToast({
												title: '兑换成功'
											});
											this.onLoad({
												goodsId: this.data.goodsInfo.goods_id
											})
										} else {
											wx.showToast({
												title: res.msg,
												icon: 'none'
											})
										}
									})
								} else {
									wx.navigateTo({
											url: '/pages/personal/address/address'
									})
								}
							}
						})
					}
				} else {
					wx.showToast({
						title: res.msg,
						icon: 'none'
					})
				}
			})
		} else {
			wx.showModal({
				title: '交易确认',
				content: wx.getStorageSync('SDKUserInfo').username + '消费：' + this.data.goodsInfo.score + '积分',
				success: res => {
					if (res.confirm) {						
						API.createOrder(Object.assign({
							goods_id: this.data.goodsInfo.goods_id,
							num: 1,
							_token: wx.getStorageSync('SDKUserInfo').token
						}, Config)).then(res => {
							if(res.code === 1) {
								wx.showToast({
									title: '兑换成功'
								});
								this.onLoad({
									goodsId: this.data.goodsInfo.goods_id
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
			})
		}
	}
}

Page(Util.loginCheck(param))