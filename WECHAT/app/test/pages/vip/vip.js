const VipData = require('./data');
const Util = require('../../utils/util');

const expList = [500, 4000, 10000, 30000, 100000, 300000, 800000, 2000000, 5000000];
const colorList = ['#9ea2ae', '#3a424f', '#c09f69', '#2e2e2e'];

let param = {
	data: {
		swiperData: [],
		userExp: null,
		vipLevel: null,
		percent: null,
		buttonBg: null
	},
	onLoad: function () {
		wx.setNavigationBarTitle({
			title: 'VIP特权中心'
		})
		let userInfo = wx.getStorageSync('SDKUserInfo');
		let exp = userInfo.exp;
		let vipLevel = userInfo.vip;
		this.setData({
			swiperData: VipData,
			vipLevel: vipLevel,
			userExp: exp,
			percent: this.expPercent(exp, vipLevel).toFixed(2),
			buttonBg: colorList[Math.ceil(vipLevel / 3)]
		});
	},
	expPercent: function (exp, level) {
		let percent = null;
		if (level === 0) {
			percent = exp / 500 * 100;
		} else if (level === 9) {
			percent = 100;
		} else {
			percent = (exp - expList[level - 1]) / (expList[level] - expList[level - 1]) * 100;
		}
		return percent;
	},
	handleChange: function (e) {
		let cIndex = e.detail.current;
		this.changeButtonBg(cIndex);
	},
	changeButtonBg: function (index) {
		this.setData({
			buttonBg: colorList[Math.ceil(index / 3)]
		});
	}
}

Page(Util.loginCheck(param))