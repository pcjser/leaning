;(function(){
	function baseApp(){
		/** 应用配置，接收从控制页面传来的json，restart时直接使用此json */
		this.appConfiguare={};
        this.selected=false;
        this.initialized = false;
        this.appConfiguare=null;
	}
	baseApp.prototype = {
	    preload : function(obj,manifest,callback,config)
        {
            if(manifest.length<=0)
            {
                callback && callback();
                return;
            }
            var self=this;
            var notify=PM.run('Notify','notify',{msg:'Loading...',type:'success',delay:0});
            function handleProgress(event) {
                notify.setContent(obj.getAppName() +' 已加载 ' + parseInt(event.loaded*100).toString()+'%');
            }
            function loadingCom(args) {
                callback && callback();
                setTimeout(function(){
                    notify.dismiss();
                },1500);
            }

            var loader = new createjs.LoadQueue(false);
            loader.setMaxConnections(5);
            loader.maintainScriptOrder=true;
            loader.addEventListener('progress', handleProgress);
            loader.addEventListener('complete', loadingCom);
            loader.loadManifest(manifest);
        },
        getAppName:function () {
            return this.appName;
        },
        init : function(){
            //初始化
		},
        main : function (json) {
            //主函数
        },
        unload:function () {

        },
        export : function () {
            //导出配置
			return this.appConfiguare;
        },
        getAppStatus:function () {
            return {};
        },
        exportToQt:function (json) {
            _runFunctionInQt('appData',json);
        },
        restart : function () {
            //重新开始
            this.main(this.appConfiguare!==null?this.appConfiguare:{});
        },
        create : function () {

        },
		show : function () {
            //显示
            this.getStage().show();
        },
		hide : function () {
            //隐藏
            this.getStage().hide();
        },
		saveAppSettingsInScene:function (json) {
            _runFunctionInObs('saveAppSettings',json,this.appName);
        },
		setStage:function(stage)
        {
            this.$stage=$(stage);
        },
		getStage : function () {
            //获取舞台
            return this.$stage;
            // if(this.$stage && this.$stage.length>0)
            // {
            //     if(!this.$stage.selector)
            //     {
            //         this.$stage=$('#'+PM.getStageId(this.appName));
            //     }
            //     return this.$stage;
            // }
            // this.$stage=$(this.stage);
            // return this.$stage;
        },
		getChild : function (selector){
            //获得子元素
            return this.getStage().find(selector);
        },
        getMoveAble : function (selector) {
            return this.getStage();
        },
        getFilePath: function (file,dc) {
		    if(!!dc)
            {
                return disableCache(this.path+file);
            }else{
                return this.path+file;
            }
        },
        enableMove: function()
        {
            this.getMoveAble().on('mousedown',this.onMouseDown.bind(this));
            this.getMoveAble().on('mouseup',this.onMouseUp.bind(this));
            this.getMoveAble().on('mousemove',this.onMouseMove.bind(this));

        },
        disableMove:function () {
            this.getMoveAble().off('mousedown',this.onMouseDown);
            this.getMoveAble().off('mouseup',this.onMouseUp);
            this.getMoveAble().off('mousemove',this.onMouseMove);
        },
        onMouseDown:function (evt) {
		    this.selected=true;
		    this.startDragPoint={x:evt.screenX,y:evt.screenY};
            this.getMoveAble().css('border','2px solid #f00');
        },
        onMouseUp:function (evt) {
            this.selected=false;
            this.startDragPoint={};
            this.getMoveAble().css('border','none');
        },
        onMouseMove:function (evt) {
		    if(!this.selected)return;
            var left=parseInt(this.getMoveAble().css('left'));
            var top=parseInt(this.getMoveAble().css('top'));
            var leftOffset=evt.screenX-this.startDragPoint.x;
            var topOffset=evt.screenY-this.startDragPoint.y;
            var newLeft=left+leftOffset+'px';
            var newTop=top+topOffset+'px';
            // log('left: '+left+' top: '+top+' lo: '+leftOffset+' to: '+topOffset+' nl: '+newLeft+' nt: '+newTop);
		    this.getMoveAble().css({
                left:newLeft,
                top:newTop
            });
            this.startDragPoint={x:evt.screenX,y:evt.screenY};
        },
        resetStagePosition:function()
        {
            this.getStage().css({left:0,right:0});
        },
        fitContent:function (selector) {
		    var selector=selector||'.content';
            var w=this.getChild(selector).width();
            var h=this.getChild(selector).height();
            this.getStage().css({width:w+'px',height:h+'px'});
        },
        destroy : function() {
        	//撤销监听
        	delete this.handles;
        },
		listen : function(eventName, callback){
			if(!this.handles) {
				this.handles = {};
			}
			if(!this.handles[eventName]) {
				this.handles[eventName] = [];
			}
			this.handles[eventName].push(callback);
		},
		emit : function(eventName, json){
			if(this.handles[eventName]){
	           	for(var i = 0; i < this.handles[eventName].length; i++){
	               	this.handles[eventName][i](arguments[1]);	
	           	}
	       	}
		},
		unlisten : function(eventName){
			if(this.handles[eventName]){
				delete this.handles[eventName];
			}
		}
	}

	window['baseApp'] = baseApp;
})();