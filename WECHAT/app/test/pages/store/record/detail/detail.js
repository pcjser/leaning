const API = require('../../../../utils/fetch');
const Util = require('../../../../utils/util');
const Config = require('../../config');

let param = {
  data: {
    orderInfo: null
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单详情'
    })
    API.getRecordDetail(Object.assign({
      order_id: options.orderId,
      _token: wx.getStorageSync('SDKUserInfo').token
    }, Config)).then(res => {
      if (res.code === 1) {
        let data = res.data;
        data.create_ts = Util.formatStamp(data.create_ts, '-', 'date');
        this.setData({
          orderInfo: data
        })
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none'
        })
      }
    })
  },
  copyTap: function (e) {
    let text = e.currentTarget.dataset.text;
    wx.setClipboardData({
      data: text,
      success: function () {
        wx.getClipboardData({
          success: function () {
            wx.showToast({
              title: '复制完成'
            })
          }
        })
      }
    })
  }
}

Page(Util.loginCheck(param))