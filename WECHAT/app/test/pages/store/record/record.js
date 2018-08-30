const API = require('../../../utils/fetch'); 
const Config = require('../config');
const Util = require('../../../utils/util');

var param = {
  data: {
    recordList: [],
    page: 1,
		hasMore: true,
		loading: false,
		init: false
  },
  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '订单记录'
    })
    this.render('init');    
  },
  loadmore: function () {		
		this.render('more');	
  },
  render: function (type) {
		if (!this.data.hasMore || this.data.loading) {
			return false
		};
		this.setData({
			loading: true
		});
		if (type === 'init') {
			this.setData({
				init: true
			})
    }
    API.getRecordList(Object.assign({
      cur_page: this.data.page,
      _token: wx.getStorageSync('SDKUserInfo').token
    }, Config)).then(res => {
      this.setData({
				loading: false
			})
      if(res.code === 1) {
        this.setData({
          recordList: this.data.recordList.concat(res.data.list)
        });
        if (res.data.list.length != res.data.page_num*1) {
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
          title: res.msg,
          icon: 'none'
        })
      }      
    })
  }
}

Page(Util.loginCheck(param))
