(function($){
    var PrivateFun = function (){

    }
    var PageSwitch = (function(){
        function PageSwith(element,options){
            this.settings = $.extend(true, $.fn.PageSwitch.default, options||{});
            this.element = element;
            this.init();
        }
        PageSwitch.prototype = {
            /*说明：初始化插件*/
            /*实现：初始化DOM结构，布局，分页及绑定事件*/
            init : function(){
                var me = this;
                me.selectors = me.settings.selectors;
                me.sections = me.selectors.sections;
                me.section = me.selectors.section;
                me.direction = me.settings.direction == "vertical" ? true:false;
                me.pagesCount = me.pagesCount();
                me.index = (me.settings.index>=0 && me.settings.index < pagesCount)? me.settings.index : 0;
                if(!me.direction){
                    me._initLayout();
                }
            }
            /*说明：获取滑动页面数量*/
            pagesCount : function(){
                return me.section.length;
            }
            /*说明：获取滑动的宽度（横屏滑动）或高度（竖屏高度）*/
            swichLength : function(){

            }
            /*说明：主要针对横屏情况进行页面布局*/
            _initLayout : function(){
                var me = this;
                var width = (me.pagesCount * 100) + "%",
                    cellWidth = (100/me.pagesCount).toFixed(2) + "%";
                me.sections.width(width);
                me.section.width(cellWidth).css("float":"left");
            }
            /*说明：实现分页的DOM结构及CSS样式*/
            _initPaging : function(){

            }
            /*说明：初始化插件事件*/
            _initEvent : function(){

            }


            //带_的是私有方法，不带的是共有方法
        }
        return PageSwitch;
    })();
    $.fn.PageSwitch = function(options){
        return this.each(function() {
            var me = $(this),
                instance = me.data('PageSwitch');
            if(!instance){
                instance = new PageSwitch(me, options);
                me.data('PageSwitch', instance);
            }
            if($.type(options) === "string") return instance[options]();
        });
    }
    $.fn.PageSwitch.default = {
        selectors : {
            sections : ".sections",
            section : ".section",
            page : ".pages",
            active : ".active"
        },
        index : 0,
        easing : "ease",
        duration : 500,
        loop : false,
        pagination : true,
        keyboard : true,
        direction : "vertical",
        callback : ""
    }
    $(function(){
        $("[data-PageSwitch]").PageSwitch();     //实例化对象方法（无法定制）
    })
})(jQuery)