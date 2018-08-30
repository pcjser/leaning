(
    function() {
        function PC_Background() {
            this.appName = 'PC_Background';
            this.manifest=[];
            for(var i=1;i<10;i++)
            {
                this.manifest.push(
                    {
                        src:"app/PC_Background/src/images/bg_0"+i+".png",
                        id:"img"+i,
                        type:"image"
                    }
                );
            }
            this.preload(this,this.manifest);

            this.init();
        }
        PM.extend(PC_Background, {
            init: function() {
                
            },
            main: function(args) {
                if(typeof(args)=='undefined' || args===null || typeof(args.bgSrc)=='undefined') return;
                this.getStage().css({
                    'width':'100%',
                    'height':'100%',
                    'background': 'url(' + args.bgSrc + ') no-repeat'
                });
                this.appConfiguare=args;
                this.saveAppSettingsInScene(this.appConfiguare);
            }
        });
        PM.addApp(PC_Background);
    }
)();
