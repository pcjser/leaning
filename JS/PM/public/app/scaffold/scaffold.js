(
    function () {
        function {{AppName}}(){
            this.appName = '{{AppName}}';
            this.path='/app/{{AppName}}/';
            this.initialized = false;


            this.init();
        }

        PM.extend({{AppName}},{
            /**
             * 应用初始化
             * @param
             */
            init : function() {
                this.initialized = true;
            },
            /**
             * 应用主方法默认为main,不可更改
             * @param  json 参数
             */
            main : function(args) {
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
                        //other code
                    }
                }
            }
        });

        PM.addApp({{AppName}});
    }
)();



