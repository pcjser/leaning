const API = require('./fetch');
const Config = require('../pages/store/config');

const formatStamp = (stamp, symbol, type) => {
	const date = new Date(stamp * 1000);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();
	if (type === 'date') {
		return [year, month, day].map(formatNumber).join(symbol)
	} else if (type === 'time') {
		return [hour, minute, second].map(formatNumber).join(':')
	} else {
		return [year, month, day].map(formatNumber).join(symbol) + ' ' + [hour, minute, second].map(formatNumber).join(':')
	}
}

const formatNumber = n => {
	n = n.toString()
	return n[1] ? n : '0' + n
}

const loginCheck = page => {
	if (page.onLoad) {
		let _onLoad = page.onLoad;
		page.onLoad = function (options) {
			let pages = getCurrentPages();
			let currentInstance = pages[pages.length - 1];
			let target = pages[pages.length - 1].route;
			API.getUserInfo(Object.assign({
				_token: wx.getStorageSync('SDKUserInfo').token || ''
			}, Config)).then(res => {
				if (res.code === 1) {
					_onLoad.call(currentInstance, options);
				} else {
					wx.redirectTo({
						url: "/pages/login/login?target=" + target
					});
				}
			})
		};
	}
	return page;
}

module.exports = {
	formatStamp: formatStamp,
	loginCheck: loginCheck
}