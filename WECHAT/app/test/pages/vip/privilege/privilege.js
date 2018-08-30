const data = require('./data');

let param = {
  data: {
    pageData: null
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '特权详情'
    })
    this.setData({
      pageData: data['type' + options.type]
    })
  }
}

Page(param)