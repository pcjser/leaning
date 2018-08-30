/**
 * Created by Lyndon@1201.us on 4/17 0017.
 *
 * WebSocket客户端
 *
 * @example
 * 连接服务器
 * network.webSocket.connect(url)
 *
 * 事件监听
 * network.webSocket.on(event,callBack,once)
 * 或
 * network.webSocket.addListener(event,callBack,once)
 * event 事件名称
 * callBack 事件回调函数
 * once true只回调一次
 *
 * 发送消息
 * network.webSocket.emit(event,data,returnEvent,callback,once)
 * event 服务器事件名称
 * data 数据
 * returnEvent 返回时触发事件名称，当与event一样时可省略为emit(event,data,callback,once)
 * callback 事件回调
 * once true只回调一次
 *
 *
 * 可先on监听，然后emit发送消息，
 * network.webSocket.on('hello.world',function(msg){
 *      console.log(msg);
 * });
 * network.webSocket.emit('hello.world',"wyp");
 *
 * 也可以直接使用emit加回调函数监听
 * network.webSocket.emit('hello.world',"wyp",function(msg){
 *      console.log(msg);
 * });
 */
(function () {

        function ws(url)
        {
            this.websocket=null;
            this.url=url||'';
            this.listeners = {};
            if(this.url)
            {
                this.connect();
            }

        };

        ws.prototype.listeners = null;

        ws.prototype.log=function (msg) {
            log(msg);
        };

        ws.prototype.connect=function (url) {

            this.url=url;
            if(!this.url)
            {
                this.log('url is null');
                return;
            }

            var self=this;

            this.websocket=new WebSocket(this.url);

            this.websocket.onopen = function (evt) {
                self.log('ws open');
            };

            this.websocket.onclose = function (evt) {
                self.log('ws close');
            };

            this.websocket.onerror = function (evt, e) {
                self.log('ws error');
            };

            this.websocket.onmessage = function (msg) {
                self.log('ws message');
                self.log(msg);
                var data=JSON.parse(msg.data);
                if(typeof(data.event)!='undefined')
                {
                    var event = new CustomEvent(data.event, {
                        detail: {
                            msg: data.msg||{}
                        }
                    });
                    self.dispatchEvent(event);
                }

            };
        };

        ws.prototype.on=ws.prototype.addListener=function (event,callback,once) {
            if(!(event in this.listeners)) {
                this.listeners[event] = [];
            }

            var exists=false;
            for(var i in this.listeners[event])
            {
                if(this.listeners[event][i].toString()==callback.toString())
                {
                    if(!exists)exists=true;
                }
            }
            var once=once||once?true:false;
            if(!exists) this.listeners[event].push({func:callback,once:once});
        };

        ws.prototype.removeEventListener = function(event, callback) {
            if(!(event in this.listeners)) {
                return;
            }
            var stack = this.listeners[event];
            for(var i = 0, l = stack.length; i < l; i++) {
                if(stack[i].func === callback || stack[i].func.toString() === callback.toString()){
                    stack.splice(i, 1);
                    return this.removeEventListener(event, callback);
                }
            }
        };

        ws.prototype.dispatchEvent = function(event) {
            if(!(event.type in this.listeners)) {
                return;
            }
            var stack = this.listeners[event.type];
            event.target = this;
            for(var i = 0, l = stack.length; i < l; i++) {
                stack[i].func.call(this, event.detail);
                if(stack[i].once)
                {
                    this.removeEventListener(event.type,stack[i].func);
                }
            }
        };

        ws.prototype.emit=function (event,data,returnEvent,callback,once) {
            var json={"event":event,"msg":data};
            var on=event;
            json.returnEvent=event;
            if(typeof(returnEvent)==='string')
            {
                json.returnEvent=returnEvent;
                on=returnEvent;
            }
            var once=once||false;
            if(typeof(callback)==='boolean')
            {
                once=callback;
            }
            if(typeof(returnEvent)==='function')
            {
                callback=returnEvent;
            }

            if(typeof(callback)==='function')
            {
                this.on(on,callback,once);
            }

            this.websocket.send(JSON.stringify(json));
        }

        window['network']=window['network']||{};
        window['network']['webSocket']=new ws();
    }

)();
