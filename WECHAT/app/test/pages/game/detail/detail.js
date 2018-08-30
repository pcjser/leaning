const API = require('../../../utils/fetch')

let param = {
    data: {
        gameInfo: null,
        hasMore: false,
        showDesc: null,
        allDesc: null,
        topicList: null,
        giftList: null
    },
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '游戏详情'
        })
        API.getGameInfo({
            game_id: options.gameId
        }).then(res => {
            if (res.status === 1) {
                let desc = res.data.description
                if (desc.length <= 60) {
                    this.setData({
                        showDesc: desc,
                        allDesc: desc
                    })
                } else {
                    this.setData({
                        showDesc: desc.substring(0, 60) + '...',
                        allDesc: desc,
                        hasMore: true
                    })
                }
                this.setData({
                    gameInfo: res.data
                })
            } else {
                wx.showToast({
                    title: res.info,
                    icon: 'none'
                })
            }
        });
        API.getHotTopic({
            game_id: options.gameId
        }).then(res => {
            if (res.status === 1) {
                this.setData({
                    topicList: res.data
                })
            } else {
                wx.showToast({
                    title: res.info,
                    icon: 'none'
                })
            }
        });
        API.getGiftList({
            game_id: options.gameId
        }).then(res => {
            if (res.status === 1) {
                this.setData({
                    giftList: res.data
                })
            } else {
                wx.showToast({
                    title: res.info,
                    icon: 'none'
                })
            }
        })
    },
    showMoreTap: function () {
        this.setData({
            showDesc: this.data.allDesc,
            hasMore: false
        })
    },
    downloadTap: function () {
        wx.downloadFile({
            url: 'https://apk.dian5.com/100_1789.apk', //仅为示例，并非真实的资源
            success: function (res) {
                // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
                if (res.statusCode === 200) {
                    console.log(res)
                }
            },
            fail: function (err) {
                console.log(err)
            }
        })
    },
    getGiftTap: function () {
        console.log(111)
    }
}

Page(param)