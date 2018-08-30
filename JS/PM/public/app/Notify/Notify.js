(
    function () {

        function Notify(){
            this.appName = 'Notify';
            this.init();
        }


        PM.extend(Notify,{
            init : function() {
                var self=this;
                this.listen('Notify', function(json){
                    self.notify(json);
                });
            },
            main : function(){

            },
            notify:function (json) {
                var json=toJson(json);
                var type='',delay=1,msg='';
                if (typeof(json)=='object')
                {
                    delay=typeof(json.delay)!='undefined'?parseInt(json.delay):delay;
                    type=json.type||'';
                    msg=json.msg||toString(json);
                }else{
                    msg=toString(json);
                }
                if(msg && msg!=='{}')
                {
                    return alertify.notify(msg,type,delay);
                }
            }
        });


        PM.addApp(Notify);
    }
)();




