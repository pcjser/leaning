'use strict'

/**
 * 应用管理类
 * @constructor
 */
function PM() {
    this.myAppList = [];
    this.appList = {};
    this.initFinish = false;
    this.initTimer = null;
    this.maxOrder = 0;
    this.listenMap = {};
    this.myAppListLoaded = false;
    this.heyBoConfiguareLoaded = false;
    this.initTime = 0;
    this.user = null;
}

/**
 * PM初始化方法，实现PM初始化
 *
 */
PM.prototype.init = function() {
    logProfile('PM初始化',true);
    var count = 0;
    var self = this;
    //请求服务器获取我的APP列表

    this.initBaseApps();

    var loginInt=setInterval(function () {
        // debugger;
        if(!inHeyBo())
        {
            self.user={};
            self.heyBoConfiguareLoaded=true;
        }else{
            self.getUserInfo();
        }
        if(self.user)
        {
            clearInterval(loginInt);

            logTime('获取用户的应用',true);
            self.getMyAppList();

            logTime('获取场景应用信息',true);
            self.getSettingFromHeyBo();

            var time = 100;
            var maxTime = 5;
            var loadInt = setInterval(function() {
                if (self.initTime > maxTime * 1000) {
                    self.initTime = 0;
                    clearInterval(loadInt);
                    if (!self.myAppListLoaded) self.myAppListLoaded = true;
                    if (!self.heyBoConfiguareLoaded) self.heyBoConfiguareLoaded = true;
                }
                if (!self.myAppListLoaded || !self.heyBoConfiguareLoaded) {
                    self.initTime += time;
                    return;
                }
                self.initTime = 0;
                clearInterval(loadInt);
                logTime('获取场景应用信息',false);
                logTime('获取用户的应用',false);
                var apps=[];
                self.myAppList.forEach(function(item, key) {
                    var settings = item.settings||{};
                    var insertHead=false;
                    for (var i in self.heyBoConfiguare) {
                        if (self.heyBoConfiguare[i]['appName'] == item.appName) {
                            try {
                                settings = self.heyBoConfiguare[i]['settings']['data'];
                            }catch (e){ }
                            insertHead=true;
                        }
                    }
                    item.settings=settings;
                    if(insertHead)
                    {
                        apps.unshift(item);
                    }else{
                        apps.push(item);
                    }

                    // self.initApp(item, settings);
                });
                self.initFinish = true;
                console.warn('开始切换场景');
                self.changeScene(apps);
            }, time);
        }
    },500);

    logProfile('PM初始化',false);
};


PM.prototype.getUser=function () {
    return this.user;
}

/**
 * 从播助手获取用户信息
 */
PM.prototype.getUserInfo = function() {
    _runAppMethodFromHeyBo('PM', 'setUserInfo');
};

PM.prototype.setUserInfo = function(json) {
    var user=toJson(json);
    this.user=(typeof(user)=='string' || typeof(user.token)=='undefined')?null:user;
};

PM.prototype.getBaseApps=function () {
    return [
        {
            'appId': '0',
            'appName': 'Notify',
        },
        {
            'appId': '0',
            'appName': 'BadApple',
        },
        {
            'appId': '0',
            'appName': 'Fireworks',
        }
    ];
}
PM.prototype.getDefaultApps=function () {
    return [
        {
            'appId': '0',
            'appName': 'PC_Curtain'
        }
    ];
}

PM.prototype.insertDefaultApps=function () {
    var defaultApps=this.getDefaultApps();
    for(var j in defaultApps.reverse())
    {
        this.addToMyAppList(defaultApps[j],true);
    }
    this.myAppListLoaded=true;
};

PM.prototype.getMyAppList = function() {
    var self = this;

    var token=(this.user && this.user.token)||'';
    if(!token)
    {
        this.insertDefaultApps();
        return;
    }
    network.ajax({
        type:"GET",
        url:CONFIG.MY_APP_LIST_URL,
        data:{token:token},
        success:function(data){
            logGroup('用户的应用',true);
            log(data);
            logGroup('用户的应用',false);
            if(!self.myAppListLoaded)
            {
                try
                {
                    data=toJson(data);
                    var list=data.data.data||[];
                    list.forEach(function (item,key) {
                        var name=item.options.tag;
                        name=name.substring(0,1).toUpperCase()+name.substring(1);
                        self.addToMyAppList({"appId":item["id"],"appName":name});
                    });

                }catch (e){}

                self.insertDefaultApps();


            }

        }
    });
};

PM.prototype.appExists=function (app) {
    for(var i in this.myAppList)
    {
        if(this.myAppList[i].appName==app.appName)
        {
            return true;
        }
    }
    return false;
}

PM.prototype.addToMyAppList=function (app,top) {
    if(!this.appExists(app))
    {
        if(top)
        {
            this.myAppList.unshift(app);
        }else{
            this.myAppList.push(app);
        }
    }
}


PM.prototype.getSettingFromHeyBo = function() {
    _runAppMethodFromHeyBo('PM', 'setSettingFromHeyBo');
};

PM.prototype.setSettingFromHeyBo = function(json) {

    logTime('Waiting heybo',false);
    logGroup('场景应用设置',true);
    log(toString(json));
    logGroup('场景应用设置',false);
    if (!this.heyBoConfiguareLoaded) {
        this.heyBoConfiguare = toJson(json);
        this.heyBoConfiguareLoaded = true;
    }
};


PM.prototype.getJsFile = function(app) {
    return disableCache('/app/' + app.appName + '/' + app.appName + '.js');
};

PM.prototype.changeScene=function (apps) {
    logGroup('场景加载应用',true);
    log(apps);
    logGroup('场景加载应用',false);
    var self=this;
    this.unloadAll();
    this.initBaseApps();
    for(var i in apps)
    {
        var item=apps[i];
        this.initApp(item);
    }

    // apps.forEach(function (item,key) {
    //     log('加载------------------------------ '+item.appName);
    //     self.initApp(item);
    // });
}


PM.prototype.initBaseApps=function () {
    logTime('初始化基本应用',true);
    var self=this;
    var baseApps=this.getBaseApps();
    baseApps.forEach(function (item,key) {
        item.forceLoad=true;
        self.initApp(item);
    });
    logTime('初始化基本应用',false);
};


/**
 * PM继承方法，实现为app提供继承方法
 * @param appName 需要继承的app名称
 * @param object app私有的方法
 */
PM.prototype.extend = function(appName, object) {
        appName.prototype = Object.create(baseApp.prototype);
        for (var key in object) {
            appName.prototype[key] = object[key];
        }
};



PM.prototype.initApp = function(app, settings) {
    var JsFile = this.getJsFile(app);
    var self = this;
    logGroup(app.appName+'初始化信息',true);
    log(app);
    log(settings);
    var settings=toJson(settings||app.settings||null);
    log(settings);
    logGroup(app.appName+'初始化信息',false);
    app.settings=settings;
    this.play(app);
};

    /**
     * 单个app播出方法，实现app的播出
     * @param app 应用对象
     */
    //并发 50ms delay
PM.prototype.play = function(app) {
    var self = this;
    var playInt = null;
    var forceLoad=typeof(app.forceLoad)=='boolean' && app.forceLoad;
    function loadApp(app) {
        //是否已加载
        var instance=self.getApp(app.appName);
        if(typeof(instance)==='boolean')
        {
            var JSsrc = self.getJsFile(app);
            self.JSloader(JSsrc, function() {
                self.load(app, app.setting);
            });

        }else{
            self.load(app, app.settings);
        }
    }
    function timedCount() {
        if(forceLoad)
        {
            return loadApp(app);
        }
        if (self.initFinish ) {
            clearTimeout(playInt);
            loadApp(app);
        } else {
            log(app.appName+' 等待PM初始化完成...' );
            playInt = setTimeout(timedCount, 100);
        }

    }
    timedCount();
}

/**
 * 应用加载方法，加载应用JS文件，并在加载后创建应用实例
 * 未加载js文件的应用不能使用此方法，应用play
 * @param app 需加载应用的对象
 */
PM.prototype.load = function(app, settings) {
    var settings = settings || null;
    var stage = document.getElementById(this.getStageId(app));
    if (stage) {
        log(app.appName + '已存在');
        return;
    }
    var appInstance = this.getApp(app.appName);

    if(typeof(appInstance) === 'boolean'){
        log(app.appName+'卸载重装');
    }else {
        if (typeof(appInstance) === 'function') appInstance = new appInstance();
        var order=app.appOrder||appInstance.zIndex||0;
        app.appOrder=order;
        stage = this.createStage(app);
        // this.initFinish = true;

        appInstance.appId = app.appId;
        appInstance.appOrder = order;
        appInstance.stage = stage;
        appInstance.setStage(stage);
        this.createListenMap(appInstance);
        
        this.addApp(appInstance);
        this.run(app, 'main', settings);
    }
}
PM.prototype.getStageId = function(app) {
    return 'stage_' + (app.appName || app);
}
PM.prototype.getApp = function(name) {
    return this.appList[name] || false;
}
PM.prototype.addApp = function(app) {
    var name = app.appName || /function\s+([\S]+)\s*\(/.exec(app)[1];
    this.appList[name] = app;
}
/**
 * 创建舞台（舞台id为stage_appId）;
 * @param app 需创建舞台的对象
 */
PM.prototype.createStage = function(app) {
    var stage = document.createElement('div');
    stage.setAttribute("id", this.getStageId(app));
    var order;
    if(typeof(app.appOrder)!='undefined' && app.appOrder)
    {
        order=app.appOrder;
    }else{
        order=$('[id^=stage]').length++;
    }
    stage.style.zIndex = order;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(stage);
    console.log(app.appName + '舞台创建成功');
    return stage;
}

/**
 * JS加载方法，完成后进行回调
 * @param appId 需加载应用的ID
 * @callback 回调函数
 */
PM.prototype.JSloader = function(src, callback) {
    try
    {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.setAttribute('src', src);
        head.appendChild(script);
        script.onload = script.onreadystatechange = function() {
            if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                if (typeof(callback) == 'function') callback();
            } else {
                console.log('JS加载失败')
            }
            script.onload = script.onreadystatechange = null;
        }
    }catch (e)
    {
        log(e);
    }
}

PM.prototype.unloadAll=function () {
    for(var i in this.appList)
    {
        this.unload(this.appList[i].appName);
    }
}


/**
 * 应用卸载方法，停止应用并删除应用stage
 * @param appName 需要卸载应用
 */
PM.prototype.unload = function(app) {
    if(!app)return;
    var self = this;
    var appName=typeof(app.appName)=='string'?app.appName:app;
    var appInstance=this.getApp(appName);
    if (appInstance && typeof(appInstance.unload)=='function')
    {
        appInstance.unload();
    }
    //页面移除DOM
    var stageName = this.getStageId(appName);
    var stage = document.querySelector('#' + stageName);
    removeElement(stage);

    function removeElement(_element) {
        if(!_element)return;
        var _parentElement = _element.parentNode;
        if (_parentElement) {
            _parentElement.removeChild(_element);
        }
    }
    //将该应用从列表中移除
    for (var key in this.listenMap) {
        var arr = self.listenMap[key];
        $.each(arr, function(i, e) {
            if (e.appName === appName);
            self.listenMap[key].splice(i, 1);
            if (arr.length == 0) {
                delete self.listenMap[key];
            };
        });
    }

    //调用app的卸载方法
    // this.run(appName, 'destroy');
}

/**
 * 创建应用实例，。。。。。。。。
 * @param
 */
PM.prototype.create = function() {
    console.log('重建完成')
        //通知播助手重建完成
}

/**
 * 手动更改应用显示顺序
 * @param appOrderList 应用显示层级列表
 */
PM.prototype.setDisplayOrder = function(appOrderList) {
    var self = this;
    var max=$('[id^=stage]').length;
    appOrderList.forEach(function(e, i) {
        var stageName = self.getStageId(e);
        var stage = document.querySelector('#' + stageName);
        var appInstance=self.getApp(e.appName);
        if(!appInstance)return;
        stage.style.zIndex = appInstance.appOrder?appInstance.appOrder:(--max);
    });
}

/**
 * 事件触发方法
 * @param eventName 事件名称
 * @param json 事件附带参数
 */

PM.prototype.event = function(eventName, json) {
    // debugger
    var self = this;
    if (this.listenMap[eventName]) {
        self.listenMap[eventName].forEach(function(e, i) {
            self.listenMap[eventName][i].emit(eventName, json);
        })
    }
}

/**
 * 创建事件监听列表
 */
PM.prototype.createListenMap = function(app) {
    // debugger
    var listenArry = app.handles;
    for (var j in listenArry) {
        this.listenMap[j] ? true : this.listenMap[j] = new Array();
        this.listenMap[j].push(app);
    }
}


/**
 * 应用实例方法的调用
 * @param appId 应用Id
 * @param method 方法名称
 * @param args 执行方法带的参数
 */
PM.prototype.run = function(app, method, settings) {
    var name = typeof(app) == 'string' ? app : app.appName;
    var runSettings=settings || app.settings || {};
    logGroup(name+' 运行时信息',true);
    log(app);
    log(settings);
    log(runSettings);
    logGroup(name+' 运行时信息',false);
    var appInstance = this.getApp(name);
    if (appInstance) {
        try {
            return appInstance[method](settings || app.settings || {});
        }catch(e){
            log(nl2br(e.stack));
        }

    }else{
        if(method=='exportToQt')
        {
            _runFunctionInQt('appData',{});
        }
    }
}

/**
 * 应用实例移动的方法
 * @param appId 应用Id
 * @param position 运动到的位置坐标
 */
PM.prototype.moveTo = function(pos) {
    var x = pos[0],
        y = pos[1];
    htmlEvent({
        type: "MouseEvent",
        name: "mousemove",
        mouseX: x,
        mouseY: y
    });
}

/**
 * 选中单个应用实例
 * @param
 */
PM.prototype.downAt = function(pos) {
    var x = pos[0],
        y = pos[1];
    htmlEvent({
        type: "MouseEvent",
        name: "mousedown",
        mouseX: x,
        mouseY: y
    });
    var div=document.createElement('div');
    var w=10;
    div.id='mousePos'+random(10000,99999);
    div.className='animation';
    div.style.width=w+'px';
    div.style.height=w+'px';
    div.style.left=(x-parseInt(w/2))+'px';
    div.style.top=(y-parseInt(w/2))+'px';
    div.style.position='absolute';
    div.style.borderRadius=w+'px';
    div.style.border='1px solid #ccc';
    document.body.appendChild(div);
    $(div).animate({transform: 'scaleX(3) scaleY(3)',opacity:0}, 500, 'ease-out',function(){$(this).remove()})
}

PM.prototype.upAt = function(pos) {
    var x = pos && pos[0] || 0,
        y = pos && pos[1] || 0;
    htmlEvent({
        type: "MouseEvent",
        name: "mouseup",
        mouseX: x,
        mouseY: y
    });
    for (var i in this.appList) {
        this.appList[i].onMouseUp();
    }
}

/**
 * 导出所有已加载应用状态，便于下次导入
 */
PM.prototype.exportAll = function() {

}

/**
 * 导入上次导出的信息，用于重建上次的应用状态
 * @param appList 加载的应用列表
 */
PM.prototype.import = function(appList) {
    // debugger
    var self = this;
    // this.createListenMap();
    appList.forEach(function(e, i) {
        console.log(e.appName + '安装开始');
        self.load(e);
    });
}


PM.prototype.config=function (env) {
    var env=(env && ('.'+env))||'';
    var url='config'+env+'.js';

    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.setAttribute('src', url);
    head.appendChild(script);
    script.onload=script.onreadystatechange = function(){
        if(!this.readyState||this.readyState=='loaded'||this.readyState=='complete'){
            console.log(env+' config load completed');
        }else {
            console.log('config load error '+url);
        }
        script.onload=script.onreadystatechange=null;
    }
}

PM.prototype.hide=function (appName) {
    var app=this.getApp(appName);
    if(app)
    {
        app.hide();
    }
}
PM.prototype.show=function (appName) {
    var app=this.getApp(appName);
    if(app)
    {
        app.show();
    }
}



window['PM'] = new PM();	
