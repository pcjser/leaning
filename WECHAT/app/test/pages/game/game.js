const API = require('../../utils/fetch');

let param = {
  data: {
    gameList: [],
    init: false,
    page: 1,
    hasMore: true,
    loading: false
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '游戏中心'
    })
    this.render('init');
  },
  loadmore: function (e) {
    this.render('more');
  },
  render: function (type) {
    if (!this.data.hasMore || this.data.loading) {
      return false;
    };
    this.setData({
      loading: true
    })
    API.getGameList({
      limit: 20,
      page: this.data.page
    }).then(res => {
      this.setData({
        loading: false
      })
      if (type === 'init') {
        this.setData({
          init: true
        })
      }
      if (res.status === 1) {
        this.setData({
          gameList: this.data.gameList.concat(res.data.rows)
        })
        if (res.data.rows.length != 20) {
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
          title: res.info,
          icon: 'none'
        })
      }
    })
  }
}

Page(param)