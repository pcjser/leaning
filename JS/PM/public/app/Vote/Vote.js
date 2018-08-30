(
    function() {
        function Vote() {
            this.appName = 'Vote';
            this.path='/app/Vote/';
            this.initialized=false;

            this.stage=null;

            this.tpl='';
            //计时器
            this.timer=null;
            //倒计时
            this.timeCnt=0;
            //计时类型1倒计时
            this.timerCountDown=1;
            //投票中
            this.running=false;
            //投票配置
            this.appConfiguare=null;
            //投票数据
            this.voteData=[];
            //投票数据dom
            this.voteDataDomList=[];
            //显示弹幕列表
            this.barrages=[];
            //已投票弹幕列表
            this.votedBarrages={};

            //初始化插件

            this.manifest=[];

            this.init();
        }

        PM.extend(Vote, {
            //插件的初始化，完成事件监听的设置等等
            init: function(args){
                logTime(this.appName+' 初始化',true);
                var self=this;
                this.listen('CreateVote', function(args){
                    self.createVote(args);
                });
                this.listen('StartVote', function(){
                    self.startVote();
                });
                this.listen('StopVote', function(){
                    self.stopVote();
                });
                this.listen('HideVote', function(){
                    self.hide();
                });
                this.listen('ShowVote', function(){
                    self.show();
                });
                this.listen('Barrage', function(barrage){
                    self.receiveBarrage(barrage);
                });
                this.manifest.push(
                    {
                        src:"/app/Vote/images/style/default/title-panel.png",
                        type:"image"
                    }
                );
                this.manifest.push(
                    {
                        src:"/app/Vote/images/style/default/btn-vote.png",
                        type:"image"
                    }
                );
                this.manifest.push(
                    {
                        src:"/app/Vote/images/style/yellow/title-panel.png",
                        type:"image"
                    }
                );
                this.manifest.push(
                    {
                        src:"/app/Vote/images/style/yellow/btn-vote.png",
                        type:"image"
                    }
                );
                this.preload(this,this.manifest,this.prepare.bind(this));
            },
            prepare:function()
            {
                var self=this;
                network.ajax({type:'get',url:disableCache(this.path+'tpl.html'),success:function(data){
                    self.tpl=data;
                    self.initialized=true;
                    logTime(self.appName+' 初始化',false);
                }});
            },
            receiveBarrage:function (barrage) {
                if(!this.running)return;
                var barrage=toJson(barrage);
                var uid=barrage.id||0;
                if(!uid || typeof(this.votedBarrages[uid])!='undefined')
                {
                    return;
                }

                var voted=false;
                for (var i in this.voteData)
                {
                    if (this.voteData[i].barrage==barrage.message)
                    {
                        this.voteData[i].count++;
                        this.votedBarrages[uid]=uid;
                        voted=true;
                        break;
                    }
                }
                if(voted)
                {
                    if(this.barrages.length>=5)
                    {
                        this.barrages.shift();
                    }
                    if(this.barrages.length<=5)
                    {
                        // this.fitContent();
                    }
                    this.barrages.push(barrage);
                    this.showBarrages(this.barrages);
                    this.showVoteData();
                }
            },
            showVoteData:function () {
                var count=0;
                for (var i in this.voteData)
                {
                    count+=this.voteData[i].count;
                }
                for (var i in this.voteData)
                {
                    if(count>0)this.voteData[i].per=Math.floor(this.voteData[i].count*100/count);
                    this.voteDataDomList.counts[i].html(this.voteData[i].count+'票');
                    this.voteDataDomList.bars[i].css('width',Math.max(1,this.voteData[i].per)+'%');
                }

            },
            showBarrages:function (barrages) {
                var html=[];
                for (var i=barrages.length-1;i>=0;i--)
                {
                    html.push("<p><span class='barrageName'>"+barrages[i].name+' : </span><span class="barrageCnt">'+barrages[i].message+"</span></p>");
                }
                html.reverse();
                this.getChild('#barrageList').html(html.join(''));
            },
            startVote:function () {
                if(this.running)return;
                clearInterval(this.timer);
                this.timer=null;
                this.votedBarrages={};
                for(var i in this.appConfiguare.bar)
                {
                    if(typeof(this.appConfiguare.opt[i])!=='undefined')
                    {
                        this.voteData.push({"barrage":this.appConfiguare.bar[i],"name":this.appConfiguare.opt[i],'count':0,'per':0});
                    }
                }

                this.createVoteDataDom(this.voteData);
                if (!this.timerCountDown)
                {
                    this.getChild('#timerType').html('已计时');
                }else{
                    this.getChild('#timerType').html('倒计时');
                }
                this.timer=setInterval(this.countTime.bind(this),1000);

                this.running=true;
                // this.fitContent();

            },
            stopVote:function () {
                clearInterval(this.timer);
                this.timer=null;
                this.running=false;
                this.barrages=[];
                this.voteData=[];
                this.votedBarrages={};
                this.getChild('#timerType').html('已结束');
            },
            countTime:function () {
                var timeLeft=parseInt(this.timeCnt);
                this.getChild('#timer').text(sec2time(timeLeft));
                if(this.timerCountDown)
                {
                    if(timeLeft>0)
                    {
                        this.timeCnt=this.timeCnt-1000;
                    }else{
                        this.stopVote();
                    }
                }else{
                    this.timeCnt=this.timeCnt+1000;
                }
            },
            getMoveAble:function()
            {
                return this.getStage();
            },
            createVote: function(args)
            {
                this.stopVote();
                // this.getStage().css({width:'auto',height:'auto'});

                var obj=typeof(args)=='string'?JSON.parse(args):args;
                var bar=[];
                var opt=[];
                var _bar=[];
                var _opt=[];
                if(obj.type=='easy')
                {
                    obj.kw=obj.kw.replace('，',',');
                    var kw=obj.kw.split(',');
                    for(var i in kw)
                    {
                        if(kw[i])
                        {
                            bar.push(kw[i]);
                            opt.push(kw[i]);
                        }
                    }
                }else{
                    if (typeof(obj.opt)!='undefined')
                    {
                        if(typeof (obj.opt)=='object')
                        {
                            for(var i in obj.opt)
                            {
                                _opt.push(obj.opt[i]);
                            }
                        }else{
                            _opt=[obj.opt];
                        }
                    }
                    if (typeof(obj.bar)!='undefined')
                    {
                        if(typeof (obj.bar)=='object')
                        {
                            for(var i in obj.bar)
                            {
                                _bar.push(obj.bar[i]);
                            }
                        }else{
                            _bar=[obj.bar];
                        }
                    }

                    for (var i in _opt)
                    {
                        if (_opt[i])
                        {
                            opt.push(_opt[i]);
                            bar.push(_bar[i]||_opt[i]);
                        }
                    }
                }
                obj.bar=bar;
                obj.opt=opt;
                if(obj.bar.length<=0)
                {
                    // notify('投票选项错误','error',2);
                    // return;
                }
                obj.cnt=nl2br(obj.cnt||'');
                obj.time=typeof(obj.time)=='undefined'?0:parseInt(obj.time);

                if(typeof(obj.time)=='undefined' || !obj.time)
                {
                    this.timerCountDown=0;
                    this.timeCnt=0;
                }else{
                    this.timeCnt=obj.time*60*1000;
                    this.timerCountDown=1;
                }

                obj.style=obj.style||'default';
                var render = template.compile(this.tpl);
                var html = render(obj);
                this.getStage().html(html);

                var pos=obj.pos||0;
                pos=parseInt(pos)?'right':'left';
                if(pos=='right')
                {
                    this.getStage().css({'right':0,'left':'inherit'});
                }else{
                    this.getStage().css({'left':0,'right':'inherit'});
                }
                // this.getChild('.content').css('float',pos);


                var _class='wobble';
                this.getChild('.content').addClass('animation').removeClass(_class).addClass(_class);

                this.appConfiguare=obj;

                this.getChild('#voteData').html('');
                this.getChild('#barrageList').html('');


                this.fitContent();
                this.disableMove();
                this.enableMove();
                this.saveAppSettingsInScene(this.appConfiguare);
            },
            createVoteDataDom:function (data) {
                this.voteDataDomList={};
                var html=[];
                for(var i in data)
                {
                    html.push("<div><div><span class='voteName' id='name"+i+"'>"+data[i].name+"</span><span class='voteCount' id='count"+i+"'>"+data[i].count+"票</span></div><div><span id='bar"+i+"' class='voteBar'></span></div></div>");
                }
                this.getChild('#voteData').html(html.join(''));

                var names=[],bars=[],counts=[];
                for(var i in data)
                {
                    names.push(this.getChild('#name'+i));
                    bars.push(this.getChild('#bar'+i));
                    counts.push(this.getChild('#count'+i));
                }
                this.voteDataDomList={
                    names:names,
                    bars:bars,
                    counts:counts,
                }
            },
            getAppStatus:function(){
                var json=JSON.parse(JSON.stringify(this.appConfiguare))||{};
                json.running=this.running;
                json.voteData=JSON.parse(JSON.stringify(this.voteData));
                json.timeCnt=this.timeCnt;
                json.timerCountDown=this.timerCountDown;
                json.appId=this.appId;
                this.exportToQt(json);
            },
            unload:function () {
                this.stopVote();
            },
            main:function (args) {
                var initTimeout=null;
                var self=this;
                if(!this.initialized)
                {
                    initTimeout=setTimeout(function () {
                        self.main();
                    },100);
                }else{
                    clearTimeout(initTimeout);
                    if(typeof(args)!='undefined' && args!==null)
                    {
                        this.createVote(args);
                    }

                }
            }
        });
        PM.addApp(Vote);
    }
)();

