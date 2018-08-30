(function(){
	function PC_Face(){
		this.appName = 'PC_Face';
	}


	PM.extend(PC_Face, {
        init: function() {
            
        },
        main: function(args) {
        	if(this.getStage().find('#faceIframe').length > 0){
        		this.getStage().find('#faceIframe').attr('src', args.iframeUrl);
        	}else {
        		this.getStage().css({
	                'width':'100%',
	                'height':'100%'
	            });
	        	this.getStage().append('<iframe id="faceIframe" style="border: none;" src="' + args.iframeUrl + '"></iframe>')
        	}
        }
    });

	PM.addApp(PC_Face);
})();

// PM.extend(PC_Assistant, {
// 	/**
// 	 * 应用初始化
// 	 */
// 	init : function() {
// 		this.listen('hide', function(json){
// 			console.log(3131);
// 		});
// 		this.listen('show', function(json){
// 			console.log('show');
// 		});
// 	},
// 	/**
// 	 * 应用主方法默认为main,不可更改
// 	 * @param  agrs 参数
// 	 */
// 	main : function(args) {
// 		this.stage.style.background = 'url(' + args.bgSrc + ') no-repeat';
// 		this.stage.style.width='100%';
// 		this.stage.style.height='100%';
// 	},
// 	/**
// 	 * 导出应用当前状态
// 	 * @param setting
// 	 */
// 	export : function() {
		
// 	},	
// 	/**
// 	 * 以当前配置重新开始
// 	 */
// 	restart : function() {

// 	},
// 	/**
// 	 * 根据保存的配置创建应用
// 	 */
// 	create : function() {
		
// 	}
// });




