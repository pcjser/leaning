;(function($){

	var LightBox = function(){
		var self = this;
		//创建遮罩和弹出框
		this.popupMask = $('<div id=G-lightbox-mask>');
		this.popupWin = $('<div id=G-lightbox-popup>');

		//保存BODY
		this.bodyNode = $(document.body);

		//渲染剩余的DOM,并插入到BODY
		this.renderDOM();

		//获取图片预览区域关键DOM
		this.picViewArea = this.popupWin.find("div.lightbox-pic-view");	//图片预览
		this.popupPic = this.popupWin.find("img.lightbox-image");	//图片
		this.picCaptionArea = this.popupWin.find("div.lightbox-pic-caption");	//图片描述区域
		this.nextBtn = this.popupWin.find("span.lightbox-next-btn");
		this.prevBtn = this.popupWin.find("span.lightbox-prev-btn");


		this.captionText = this.popupWin.find("p.lightbox-pic-desc");	//图片描述
		this.currentIndex = this.popupWin.find("span.lightbox-of-index");	//图片当前索引
		this.closeBtn = this.popupWin.find("span.lightbox-close-btn");	//关闭按钮

		//准备开发事件委托，获取组数据
		//
		this.groupName = null;
		this.groupData = [];	//放置同一组数据
		this.bodyNode.delegate(".js-lightbox,*[data-role=lightbox]","click",function(e){
			//阻止事件冒泡
			e.stopPropagation();

			var currentGroupName = $(this).attr("data-group");

			if(currentGroupName != self.groupName){
				self.groupName = currentGroupName;
				//根据当前组名获取同一组数据
				self.getGroup();
			}
			// else {
			// 	alert("未换组别")
			// }
			//初始化弹出
			self.initPopup($(this));

		});
		//关闭弹出
		this.popupMask.click(function(){
			$(this).fadeOut();
			self.popupWin.fadeOut();
			self.clear = false;
		});

		this.closeBtn.click(function(){
			self.popupMask.fadeOut();
			self.popupWin.fadeOut();
			self.clear = false;
		});
		//绑定上下切换事件
		this.flag = true;	//控制多次点击
		this.nextBtn.hover(function(){
			if(!$(this).hasClass('disabled') && self.groupData.length > 1) {
				$(this).addClass('lightbox-next-btn-show');
			}
		},function(){
			if(!$(this).hasClass('disabled') && self.groupData.length > 1) {
				$(this).removeClass('lightbox-next-btn-show');
			}
		}).click(function(e){
			e.stopPropagation();
			if(!$(this).hasClass('disabled') && self.flag){
				self.flag = false;
				self.goto("next");
			}
		});

		this.prevBtn.hover(function(){
			if(!$(this).hasClass('disabled') && self.groupData.length > 1) {
				$(this).addClass('lightbox-prev-btn-show');
			}
		},function(){
			if(!$(this).hasClass('disabled') && self.groupData.length > 1) {
				$(this).removeClass('lightbox-prev-btn-show');
			}
		}).click(function(e){
			e.stopPropagation();
			if(!$(this).hasClass('disabled') && self.flag){
				self.flag = false;
				self.goto("prev");
			}
		});
		//绑定窗口调整事件
		var timer = null;
		this.clear = false;		
		
		$(window).resize(function(){
			if(self.clear){
				clearTimeout(timer);
				timer = setTimeout(function() {
					self.loadPicSize(self.groupData[self.index].src);
				}, 200);
			};			
		}).keyup(function(e){
			if(self.clear){
				var keyValue = e.which;
				if(keyValue == 38 || keyValue == 37){
					self.prevBtn.click();
				}else if(keyValue == 40 || keyValue == 39){
					self.nextBtn.click();
				}
			}
		});		
	};

	LightBox.prototype = {
		goto:function(dir){
			// alert(direc);
			if(dir === "next") {
				//this.groupData
				//this.index
				this.index++;
				if(this.index >= this.groupData.length - 1) {
					this.nextBtn.addClass('disabled').removeClass('lightbox-next-btn-show');
				}
				if(this.index != 0){
					this.prevBtn.removeClass('disabled');
				}

				// var src = this.groupData[this.index].src;
				// this.loadPicSize(src);
			}else if(dir === "prev"){
				this.index--;
				if(this.index <= 0) {
					this.prevBtn.addClass('disabled').removeClass('lightbox-prev-btn-show');
				}
				if(this.index != this.groupData.length - 1){
					this.nextBtn.removeClass('disabled');
				}				
			}
			var src = this.groupData[this.index].src;
				this.loadPicSize(src);				
		},
		loadPicSize:function(sourceSrc){
			var self = this;
			// console.log(sourceSrc);
			// 重置图片宽高
			self.popupPic.css({
				width: "auto",
				height: "auto"
			});

			//隐藏图片区域
			this.popupPic.hide();
			this.picCaptionArea.hide();
			//图片预加载方法
			this.preLoadImg(sourceSrc,function(){
				self.popupPic.attr("src",sourceSrc);
				var picWidth = self.popupPic.width(),
					picHeight = self.popupPic.height();
				// console.log(picWidth+":"+picHeight);
				//改变图片
				self.changePic(picWidth,picHeight);
			})
		},
		changePic:function(width,height) {
			var self = this;
			var winWidth = $(window).width() - 10,
				winHeight = $(window).height() - 10;

			//如果图片的宽高大于浏览器视口的宽高比例，看是否溢出
			
			var scale = Math.min(winWidth/width,winHeight/height,1);

			width *= scale;
			height *= scale;

			this.picViewArea.animate({
				width:width + 10,
				height:height + 10
			});
			this.popupWin.animate({
				width:width + 10,
				height:height + 10
			},function(){
				self.popupPic.css({
					width:width,
					height:height
				}).fadeIn();
				self.picCaptionArea.fadeIn();
				self.flag = true;	
				self.clear = true;			
			});
			//设置描述文字和当前索引
			console.log(this.index);
			//groupData
			this.captionText.text(this.groupData[this.index].caption);
			this.currentIndex.text("当前索引：" + (this.index + 1) + " of " + this.groupData.length);			
		},
		preLoadImg:function(src,callback){
			var img = new Image();
			if(!!window.ActiveXObject){	//IE浏览器兼容
				img.onreadystatechange = function(){
					if(this.readyState == "complete") {
						callback();
					}
				}
			}else {
				img.onload = function(){
					callback();
				}
			}
			img.src = src;
		},
		showMaskAndPopup:function(sourceSrc, currentId){
			var self = this;
			// console.log(sourceSrc+currentId);
			this.popupPic.hide();
			this.picCaptionArea.hide();
			this.popupMask.fadeIn();
			var winWidth = $(window).width(),
				winHeight = $(window).height(),
				viewWidth = winWidth/2,	//预览加载loading的可视区域宽高
				viewHeight = winHeight/2;


			this.picViewArea.css({
				width:viewWidth + 10,
				height:viewWidth + 10
			});
			this.popupWin.fadeIn();
			this.popupWin.css({
				width : viewWidth,
				height : viewWidth,
				top : -viewHeight*4
			}).animate({
				top : 0
			},function(){
				//加载图片
				self.loadPicSize(sourceSrc);
			});

			//根据当前点击的元素ID获取在当前组别里的索引
			//不能使用$(this).index()
			this.index = this.getIndexOf(currentId);

			// console.log(this.index);
			var groupDataLength = this.groupData.length;
			if(groupDataLength > 1) {
				if(this.index === 0){
					this.prevBtn.addClass("disabled");
					this.nextBtn.removeClass("disabled");
				}else if (this.index === groupDataLength - 1) {
					this.prevBtn.removeClass("disabled");
					this.nextBtn.addClass("disabled");
				}else {
					this.prevBtn.removeClass("disabled");
					this.nextBtn.removeClass("disabled");
				}
			}else {
				this.prevBtn.addClass("disabled");
				this.nextBtn.addClass("disabled");
			}

		},
		getIndexOf:function(currentId) {
			var index = 0;
			$(this.groupData).each(function(i){
				index = i;
				if(this.id === currentId){
					return false;
				}
			})
			return index;
		},
		initPopup:function(curObj) {
			var self = this,
				sourceSrc = curObj.attr("data-source"),
				currentId = curObj.attr("data-id");
			this.showMaskAndPopup(sourceSrc, currentId);
		},
		getGroup:function() {
			var self = this;
			//根据当前组别的名称获取页面中所有相同组别的对象
			
			var groupList = this.bodyNode.find("*[data-group=" + this.groupName + "]");

			//组数据清0
			self.groupData.length = 0;

			groupList.each(function(){
				self.groupData.push({
					src:$(this).attr("data-source"),
					id:$(this).attr("data-id"),
					caption:$(this).attr("data-caption")
				})
			});

			console.log(self.groupData);
			
		},
		renderDOM:function() {
			var strDOM = '<div class="lightbox-pic-view">'+
							'<span class="lightbox-btn lightbox-prev-btn"></span>'+
							'<img class="lightbox-image">'+
							'<span class="lightbox-btn lightbox-next-btn"></span>'+
						 '</div>'+
						 '<div class="lightbox-pic-caption">'+
							'<div class="lightbox-caption-area">'+
								'<p class="lightbox-pic-desc">图片标题</p>'+
								'<span class="lightbox-of-index">当前索引：0 of 0</span>'+
							'</div>'+
							'<span class="lightbox-close-btn"></span>'+
						 '</div>'
			//插入到this.popupWin
			this.popupWin.html(strDOM);

			//把遮罩和弹出层插入到body 
			this.bodyNode.append(this.popupMask,this.popupWin);
		}
	};

	window["LightBox"] = LightBox;
})(jQuery);