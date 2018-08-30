(
    function() {
        function PC_Curtain() {
            this.appName = 'PC_Curtain';
            this.zIndex = 99999;
        }
        PM.extend(PC_Curtain, {
            init: function() {
                
            },
            change: function (args) {
                this.getStage().css({
                    'width':'100%',
                    'height':'100%',
                    'background': args.color
                });
                this.saveAppSettingsInScene(args);
            },
            main: function(args) {
                if(typeof(args)!='undefined' && args!==null)
                {
                    this.change(args);
                }
            }
        });
        PM.addApp(PC_Curtain);
    }
)();
