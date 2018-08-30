const request = (url = '', params = {}, type = 'POST') => {
  return new Promise((resolve, reject) => {
    if (type === 'GET') {
      wx.request({
        url: url,
        header: {
          'content-type': 'application/json' // 默认值
        },
        data: params,
        success: res => {
          if (res.statusCode === 200) {
            resolve(res.data)
          }
        }
      })
    }
    if (type === 'POST') {
      wx.request({
        url: url,
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        data: params,
        success: res => {
          if (res.statusCode === 200) {
            resolve(res.data)
          } 
        }
      })
    }
  })
}
const API = {
  login: param => request('https://passtest.qcwanwan.com/api/wechat/login', param),    //SDK系统登录
  getUserInfo: param => request('https://giftmall.qcwanwan.com/api/user/info', param),      //获取用户信息
  /*VIP*/
  getTaskList: param => request('https://passtest.qcwanwan.com/api/wechat/task_list', param),  //获取已完成任务id列表

  /*积分商城*/
  getStoreIndex: param => request('https://giftmall.qcwanwan.com/api/home/index', param),    //获取商城首页商品列表
  getGoodsList: param => request('https://giftmall.qcwanwan.com/api/home/goods_list', param),      //获取列表商品列表
  getGoodsInfo: param => request('https://giftmall.qcwanwan.com/api/home/goods_detail', param),       //获取积分商城商品详情
  getRecordList: param => request('https://giftmall.qcwanwan.com/api/order/order_list', param),    //获取用户兑换记录
  getRecordDetail: param => request('https://giftmall.qcwanwan.com/api/order/order_detail', param),   //获取兑换记录详情
  getIntegralList: param => request('https://giftmall.qcwanwan.com/api/user/score', param),   //获取积分明细
  createOrder: param => request('https://giftmall.qcwanwan.com/api/order/order_create', param),       //创建订单
  getUserAddress: param => request('https://giftmall.qcwanwan.com/api/user/address', param),    //获取用户收货地址信息
  postUserAddress: param => request('https://giftmall.qcwanwan.com/api/user/address_update', param),    //修改上传用户收货地址信息
  /*微官网*/
  getGameList: param => request('https://wxbbs.qcwanwan.com/game/getGameList', param),    //获取微官网游戏列表
  getGameInfo: param => request('https://wxbbs.qcwanwan.com/game/getGameInfo', param),    //获取微官网单个游戏详情
  getHotTopic: param => request('https://wxbbs.qcwanwan.com/game/getHotTopic', param),    //获取游戏详情-热门话题列表
  getGiftList: param => request('https://wechat.anfeng.cn/game/getGiftList', param),     //获取游戏详情-游戏礼包列表
  // getGift: param => request('https://wechat.anfeng.cn/bbs/userGetGift', param)           //领取游戏礼包
}

module.exports = API