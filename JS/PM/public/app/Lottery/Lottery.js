(
    function () {
        function Lottery(){
            this.appName = 'Lottery';
            this.path='/app/Lottery/';
            this.initialized = false;

            this.stage=null;

            this.tpl='';
            //计时器
            this.timer=null;
            //倒计时
            this.timeCnt=0;
            //计时类型1倒计时
            this.timerCountDown=1;
            //运行中
            this.running=false;
            //配置
            this.appConfiguare=null;
            //数据
            this.appData=[];
            //数据dom
            this.appDataDomList=[];
            //显示弹幕列表
            this.barrages=[];
            //最大显示弹幕数
            this.maxBarrages=5;
            //已处理弹幕列表
            this.processedBarrages={};
            //上次中奖计时
            this.lastHited=0;
            //已抽中弹幕
            this.hited={};



            this.manifest=[];

            this.init();
        }

        PM.extend(Lottery,{
            init: function(args){
                var self=this;
                this.listen('CreateLottery', function(args){
                    self.create(args);
                });
                this.listen('StartLottery', function(){
                    self.start();
                });
                this.listen('StopLottery', function(){
                    self.stop();
                });
                this.listen('HideLottery', function(){
                    self.hide();
                });
                this.listen('ShowLottery', function(){
                    self.show();
                });
                this.listen('HitByHand', function(){
                    self.hitByHand();
                });
                this.listen('Barrage', function(barrage){
                    self.receiveBarrage(barrage);
                });
                this.listen('GiftBarrage', function(barrage){
                    self.receiveGiftBarrage(barrage);
                });

                this.manifest.push(
                    {
                        src:"/app/Lottery/images/style/default/title-panel.png",
                        type:"image"
                    }
                );
                this.manifest.push(
                    {
                        src:"/app/Lottery/images/style/default/btn-vote.png",
                        type:"image"
                    }
                );
                this.manifest.push(
                    {
                        src:"/app/Lottery/images/style/yellow/title-panel.png",
                        type:"image"
                    }
                );
                this.manifest.push(
                    {
                        src:"/app/Lottery/images/style/yellow/btn-vote.png",
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
                    self.initialized = true;
                }});
            },
            //自动抽奖
            hitAuto:function () {
                this.hitSomeBody();
            },
            //手动抽奖
            hitByHand:function () {
                this.hitSomeBody();
            },
            hitSomeBody:function () {
                // log('hit-------');
                //所有弹幕uid
                var keys=getObjPropKeys(this.processedBarrages);
                //已中奖弹幕uid
                var hitedKeys=getObjPropKeys(this.hited);
                //未中奖弹幕uid
                var notHit=_.difference(keys, hitedKeys);

                // log('已中奖');
                // log(hitedKeys);
                // log('未中奖');
                // log(notHit);

                if(notHit.length<=0) return;


                var rand;
                var hitedBar=null;
                rand=random(0,notHit.length-1);
                hitedBar=this.processedBarrages[notHit[rand]];
                if (typeof(this.hited[hitedBar.id])==='undefined')
                {
                    this.hited[hitedBar.id]=hitedBar;
                    this.showFireworks(hitedBar);
                    this.showHitedBarrages(this.hited);
                    if(this.appConfiguare.peoples && (hitedKeys.length+1)>=this.appConfiguare.peoples)
                    {
                        this.stop();
                    }
                }

            },
            showFireworks:function(barrage)
            {
                PM.run('Fireworks','fire',{dur:3});
                var text=document.createElement('div');
                text.id='tmpDiv'+random(10000,99999);
                text.className='animation';
                text.innerHTML="中奖观众："+barrage.name;
                text.style.width='100%';
                text.style.textAlign='center';
                text.style.fontSize='100px';
                text.style.color='deeppink';
                document.body.appendChild(text);

                $(text).addClass('animation').addClass('bounceIn').on('animationend',function(){
                    var self=$(this);
                    setTimeout(function(){
                        self.removeClass('bounceIn').addClass('bounceOut').on('animationend',function(){
                            self.remove();
                        });
                    },3000);
                });
            },
            showHitedBarrages:function (barrages) {

                var html=[];
                var keys=getObjPropKeys(barrages);
                var barrage;
                for (var i=keys.length-1;i>=0;i--)
                {
                    barrage=barrages[keys[i]];
                    html.push("<p><span class='barrageName'>"+(barrage.name||'unknown')+' : </span><span class="barrageCnt">'+barrage.message+"</span></p>");
                }
                html.reverse();
                this.getChild('#voteData').html(html.join(''));
            },
            receiveGiftBarrage:function (barrage) {
                if(!this.running) return;
                var barrage=toJson(barrage);
                barrage.message='送了'+barrage.giftCount+barrage.giftName;
                this.receiveBarrage(barrage);
            },
            receiveBarrage:function (barrage) {
                if(!this.running) return;
                var barrage=toJson(barrage);

                var uid=barrage.id||0;
                if(!uid) return;

                if(this.appConfiguare.kw && barrage.message!=this.appConfiguare.kw)
                {
                    return;
                }


                barrage.type=parseInt(barrage.type);

                switch (barrage.type)
                {
                    case 1:
                        if(!this.appConfiguare.barrageLottery)return;
                        break;
                    case 2:
                        if(!this.appConfiguare.giftLottery)return;
                        break;
                    default:
                        return;
                }

                this.processedBarrages[uid]=barrage;

                if(this.barrages.length>=this.maxBarrages)
                {
                    this.barrages.shift();
                }
                this.barrages.push(barrage);
                this.showBarrages(this.barrages);

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
            start:function () {
                if(this.running)return;
                this.stop();
                this.getChild('#voteData').html('');
                this.getChild('#barrageList').html('');

                this.timeCnt=this.appConfiguare.time*60*1000;


                if (!this.timerCountDown)
                {
                    this.getChild('#timerType').html('已计时');
                }else{
                    this.getChild('#timerType').html('倒计时');
                }
                this.timer=setInterval(this.countTime.bind(this),1000);
                this.running=true;

            },
            stop:function () {
                clearInterval(this.timer);
                this.timer=null;
                this.running=false;
                this.barrages=[];
                this.appData=[];
                this.processedBarrages={};
                this.lastHited=0;
                this.hited={};
                this.getChild('#timerType').html('已结束');
            },
            countTime:function () {
                var timeLeft=parseInt(this.timeCnt);
                this.getChild('#timer').text(sec2time(timeLeft));
                if(this.appConfiguare.intervals>0 && this.lastHited>=this.appConfiguare.intervals)
                {
                    this.lastHited=0;
                    this.hitAuto();
                }
                if(this.timerCountDown)
                {
                    if(timeLeft>0)
                    {
                        this.timeCnt=this.timeCnt-1000;
                    }else{
                        this.stop();
                    }
                }else{
                    this.timeCnt=this.timeCnt+1000;
                }
                this.lastHited+=1000;
            },
            create: function(args)
            {
                this.stop();

                var obj=typeof(args)=='string'?JSON.parse(args):args;

                obj.cnt=nl2br(obj.cnt||'');

                obj.time=obj.time && parseInt(obj.time) || 0;

                if(!obj.time)
                {
                    this.timerCountDown=0;
                }else{
                    this.timerCountDown=1;
                }
                this.timeCnt=obj.time*60*1000;

                obj.style=obj.style||'default';
                obj.peoples=parseInt(obj.peoples||0);
                obj.level=parseInt(obj.level||0);
                obj.kw=obj.kw && trim(obj.kw) || '';

                obj.barrageLottery=obj.barrageLottery && parseInt(obj.barrageLottery) || 1;
                obj.giftLottery=obj.giftLottery && parseInt(obj.giftLottery) || 1;


                //抽奖间隔时间
                obj.intervals=0;
                if(this.timeCnt>0 && obj.peoples>0)
                {
                    obj.intervals=Math.max(1000,Math.floor(this.timeCnt/obj.peoples));
                }

                var render = template.compile(this.tpl);
                var html = render(obj);
                this.getStage().html(html);

                var pos=obj.pos||0;
                pos=parseInt(pos)?'right':'left';
                if(pos=='right')
                {
                    this.getStage().css({'right':0,'left':'inherit'});
                }
                // this.getChild('.content').css(pos,0);


                this.appConfiguare=obj;
                this.getChild('#appData').html('');
                this.getChild('#barrageList').html('');
                var _class='wobble';
                this.getChild('.content').addClass('animation').removeClass(_class).addClass(_class);

                // this.fitContent();
                this.disableMove();
                this.enableMove();
                this.saveAppSettingsInScene(this.appConfiguare);

                return obj;
            },
            getAppStatus:function(){
                var json=JSON.parse(JSON.stringify(this.appConfiguare))||{};
                json.running=this.running;
                json.lastHited=this.lastHited;
                json.timeCnt=this.timeCnt;
                json.timerCountDown=this.timerCountDown;
                json.appId=this.appId;
                this.exportToQt(json);
            },
            getMoveAble:function()
            {
                return this.getStage();
            },
            unload:function () {
                this.stop();
            },
            main:function (args) {
                var initTimeout=null;
                var self=this;
                if(!this.initialized)
                {
                    log('init...');
                    initTimeout=setTimeout(function () {
                        self.main();
                    },100);
                }else{
                    clearTimeout(initTimeout);
                    if(typeof(args)!='undefined' && args!==null)
                    {
                        this.create(args);
                    }
                }
            }
        });

        PM.addApp(Lottery);
    }
)();




