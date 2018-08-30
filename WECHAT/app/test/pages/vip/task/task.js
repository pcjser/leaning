const API = require('../../../utils/fetch');
const List = require('./data');
const Util = require('../../../utils/util');

let param = {
    data: {
        taskList: [],
        currentType: 'active',
    },
    onLoad: function() {
        wx.setNavigationBarTitle({
            title: '任务中心'
          })
        API.getTaskList({
            token: wx.getStorageSync('SDKUserInfo').token
        }).then(res => {
            if(res.status ===1) {
                let finishedList = res.data;
                List.active.map(data => {
                    if(finishedList.indexOf(data.task_id) > -1) {
                        data.status = 1
                    }
                });
                List.grow.map(data => {
                    if(finishedList.indexOf(data.task_id) > -1) {
                        data.status = 1
                    }
                })
                this.setData({
                    taskList: List[this.data.currentType]
                })
            } else {
                wx.showToast({
                    title: res.info,
                    icon: 'none'
                })
            }
        })
        this.setData({
            taskList: List[this.data.currentType]
        })
    },
    changeType: function(e) {
        let type = e.currentTarget.dataset.type;
        this.setData({
            currentType: type,
            taskList: List[type]
        })
    }
}

Page(Util.loginCheck(param))