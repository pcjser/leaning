/**
 * TODO
 * 	1.游戏详情页话题跳转
 * 	2.游戏详情页礼包领取(礼包领取状态判断有问题)
 * 	3.游戏详情页下载
 */

//9. 	登录状态验证token是否失效  userinfo接口   code=102	//待验证
//10. 	登录优化  info接口多次调取 (确保登录状态)

App({
	onLaunch: function () {		
		wx.getSetting({
			success: res => {
				if (res.authSetting['scope.userInfo']) {
					wx.getUserInfo({
						success: res => {
							this.globalData.WXUserInfo = res.userInfo
							if (this.userInfoReadyCallback) {
								this.userInfoReadyCallback(res)
							}
						}
					})
				} else {
					wx.authorize({
						scope: 'scope.userInfo',
						success: res => {
							wx.getUserInfo({
								success: res => {
									console.log(res)
									this.globalData.WXUserInfo = res.userInfo
									if (this.userInfoReadyCallback) {
										this.userInfoReadyCallback(res)
									}
								}
							})
						},
						fail(err) {
							console.log(err)
						}
					})
				}
			}
		})
	},
	globalData: {
		WXUserInfo: {},
		SDKUserInfo: {}
	}
})