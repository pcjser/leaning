(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"jiong_atlas_", frames: [[140,0,138,180],[0,182,138,180],[280,0,136,178],[140,182,138,180],[0,0,138,180]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.位图37 = function() {
	this.spriteSheet = ss["jiong_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.位图38 = function() {
	this.spriteSheet = ss["jiong_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.位图39 = function() {
	this.spriteSheet = ss["jiong_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.位图40 = function() {
	this.spriteSheet = ss["jiong_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.位图41 = function() {
	this.spriteSheet = ss["jiong_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.元件207 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["jiong_atlas_"],4), null, new cjs.Matrix2D(1,0,0,1,-69,-90)).s().p("AqxOEIAA8HIVjAAIAAcHg");
	this.shape.setTransform(102.5,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.5,30,138,180);


(lib.元件191 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["jiong_atlas_"],3), null, new cjs.Matrix2D(1,0,0,1,-69,-90)).s().p("AqxOEIAA8HIVjAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-90,138,180);


(lib.元件177 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["jiong_atlas_"],2), null, new cjs.Matrix2D(1,0,0,1,-68,-89)).s().p("AqnN6IAA7zIVPAAIAAbzg");
	this.shape.setTransform(102.5,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件174 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["jiong_atlas_"],1), null, new cjs.Matrix2D(1,0,0,1,-69,-90)).s().p("AqxOEIAA8HIVjAAIAAcHg");
	this.shape.setTransform(102.5,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.5,30,138,180);


(lib.元件164 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AwKTCMAAAgmDMAgVAAAMAAAAmDg");
	this.shape.setTransform(103.5,121.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207,243.5);


(lib.元件163 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["jiong_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-69,-90)).s().p("AqxOEIAA8HIVjAAIAAcHg");
	this.shape.setTransform(102.5,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.5,30,138,180);


(lib.元件252 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件191("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.5,120);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件251 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件174("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件174("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件249 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件248 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件247 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件246 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件245 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件244 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件243 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件242 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件241 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件240 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件239 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件238 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件174("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件237 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件174("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件236 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件235 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件234 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件233 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件232 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件231 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件230 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件229 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件228 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件227 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件226 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件225 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件224 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件223 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件174("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件221 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件207("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件220 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件207("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件219 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件207("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件218 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件207("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件217 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件207("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件216 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件207("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件215 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件207("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件214 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件207("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件213 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件207("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件212 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件207("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件211 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件207("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件210 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件207("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件209 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件207("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件208 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件207("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件206 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件207("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件205 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件174("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件204 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件174("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件203 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件191("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.5,120);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件191("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.5,120);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件191("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.5,120);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件200 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件191("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.5,120);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件199 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件191("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.5,120);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件198 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件191("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.5,120);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件197 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件191("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.5,120);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件196 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件191("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.5,120);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件195 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件191("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.5,120);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件194 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件191("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.5,120);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件193 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件191("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.5,120);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件192 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件191("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.5,120);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件190 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件191("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.5,120);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件189 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件174("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件188 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件174("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件187 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件186 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件185 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件184 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件183 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件182 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件181 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件180 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件179 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件178 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件176 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,31,136,178);


(lib.元件175 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件174("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件173 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件174("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件171 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件170 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件169 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件168 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件167 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件166 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件165 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


(lib.元件161 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsQaQg+AAgsgsQgsgsAAg+IAA3bQAAg+AsgsQAsgsA+AAIQtAAQA+AAAsAsQAsAsAAA+IAAXbQAAA+gsAsQgsAsg+AAg");
	mask.setTransform(85.5,105);

	// 图层 2
	this.instance = new lib.元件163("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,30,137,180);


// stage content:
(lib.无标题1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		playSound("Sound1atframe9wav");
	}
	this.frame_21 = function() {
		playSound("Sound1atframe9wav");
	}
	this.frame_36 = function() {
		playSound("Sound1atframe9wav");
	}
	this.frame_53 = function() {
		playSound("Sound1atframe9wav");
	}
	this.frame_68 = function() {
		playSound("Sound1atframe9wav");
	}
	this.frame_81 = function() {
		playSound("Sound1atframe9wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(13).call(this.frame_21).wait(15).call(this.frame_36).wait(17).call(this.frame_53).wait(15).call(this.frame_68).wait(13).call(this.frame_81).wait(18));

	// 图层 1
	this.instance = new lib.元件164("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1,-2);
	this.instance.alpha = 0;

	this.instance_1 = new lib.元件161("synched",0);
	this.instance_1.parent = this;

	this.instance_2 = new lib.元件165("synched",0);
	this.instance_2.parent = this;

	this.instance_3 = new lib.元件166("synched",0);
	this.instance_3.parent = this;

	this.instance_4 = new lib.元件167("synched",0);
	this.instance_4.parent = this;

	this.instance_5 = new lib.元件168("synched",0);
	this.instance_5.parent = this;

	this.instance_6 = new lib.元件169("synched",0);
	this.instance_6.parent = this;

	this.instance_7 = new lib.元件170("synched",0);
	this.instance_7.parent = this;

	this.instance_8 = new lib.元件171("synched",0);
	this.instance_8.parent = this;

	this.instance_9 = new lib.元件172("synched",0);
	this.instance_9.parent = this;

	this.instance_10 = new lib.元件173("synched",0);
	this.instance_10.parent = this;

	this.instance_11 = new lib.元件175("synched",0);
	this.instance_11.parent = this;

	this.instance_12 = new lib.元件176("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.元件178("synched",0);
	this.instance_13.parent = this;

	this.instance_14 = new lib.元件179("synched",0);
	this.instance_14.parent = this;

	this.instance_15 = new lib.元件180("synched",0);
	this.instance_15.parent = this;

	this.instance_16 = new lib.元件181("synched",0);
	this.instance_16.parent = this;

	this.instance_17 = new lib.元件182("synched",0);
	this.instance_17.parent = this;

	this.instance_18 = new lib.元件183("synched",0);
	this.instance_18.parent = this;

	this.instance_19 = new lib.元件184("synched",0);
	this.instance_19.parent = this;

	this.instance_20 = new lib.元件185("synched",0);
	this.instance_20.parent = this;

	this.instance_21 = new lib.元件186("synched",0);
	this.instance_21.parent = this;

	this.instance_22 = new lib.元件187("synched",0);
	this.instance_22.parent = this;

	this.instance_23 = new lib.元件188("synched",0);
	this.instance_23.parent = this;

	this.instance_24 = new lib.元件189("synched",0);
	this.instance_24.parent = this;

	this.instance_25 = new lib.元件190("synched",0);
	this.instance_25.parent = this;

	this.instance_26 = new lib.元件192("synched",0);
	this.instance_26.parent = this;

	this.instance_27 = new lib.元件193("synched",0);
	this.instance_27.parent = this;

	this.instance_28 = new lib.元件194("synched",0);
	this.instance_28.parent = this;

	this.instance_29 = new lib.元件195("synched",0);
	this.instance_29.parent = this;

	this.instance_30 = new lib.元件196("synched",0);
	this.instance_30.parent = this;

	this.instance_31 = new lib.元件197("synched",0);
	this.instance_31.parent = this;

	this.instance_32 = new lib.元件198("synched",0);
	this.instance_32.parent = this;

	this.instance_33 = new lib.元件199("synched",0);
	this.instance_33.parent = this;

	this.instance_34 = new lib.元件200("synched",0);
	this.instance_34.parent = this;

	this.instance_35 = new lib.元件201("synched",0);
	this.instance_35.parent = this;

	this.instance_36 = new lib.元件202("synched",0);
	this.instance_36.parent = this;

	this.instance_37 = new lib.元件203("synched",0);
	this.instance_37.parent = this;

	this.instance_38 = new lib.元件204("synched",0);
	this.instance_38.parent = this;

	this.instance_39 = new lib.元件205("synched",0);
	this.instance_39.parent = this;

	this.instance_40 = new lib.元件206("synched",0);
	this.instance_40.parent = this;

	this.instance_41 = new lib.元件208("synched",0);
	this.instance_41.parent = this;

	this.instance_42 = new lib.元件209("synched",0);
	this.instance_42.parent = this;

	this.instance_43 = new lib.元件210("synched",0);
	this.instance_43.parent = this;

	this.instance_44 = new lib.元件211("synched",0);
	this.instance_44.parent = this;

	this.instance_45 = new lib.元件212("synched",0);
	this.instance_45.parent = this;

	this.instance_46 = new lib.元件213("synched",0);
	this.instance_46.parent = this;

	this.instance_47 = new lib.元件214("synched",0);
	this.instance_47.parent = this;

	this.instance_48 = new lib.元件215("synched",0);
	this.instance_48.parent = this;

	this.instance_49 = new lib.元件216("synched",0);
	this.instance_49.parent = this;

	this.instance_50 = new lib.元件217("synched",0);
	this.instance_50.parent = this;

	this.instance_51 = new lib.元件218("synched",0);
	this.instance_51.parent = this;

	this.instance_52 = new lib.元件219("synched",0);
	this.instance_52.parent = this;

	this.instance_53 = new lib.元件220("synched",0);
	this.instance_53.parent = this;

	this.instance_54 = new lib.元件221("synched",0);
	this.instance_54.parent = this;

	this.instance_55 = new lib.元件222("synched",0);
	this.instance_55.parent = this;

	this.instance_56 = new lib.元件223("synched",0);
	this.instance_56.parent = this;

	this.instance_57 = new lib.元件224("synched",0);
	this.instance_57.parent = this;

	this.instance_58 = new lib.元件225("synched",0);
	this.instance_58.parent = this;

	this.instance_59 = new lib.元件226("synched",0);
	this.instance_59.parent = this;

	this.instance_60 = new lib.元件227("synched",0);
	this.instance_60.parent = this;

	this.instance_61 = new lib.元件228("synched",0);
	this.instance_61.parent = this;

	this.instance_62 = new lib.元件229("synched",0);
	this.instance_62.parent = this;

	this.instance_63 = new lib.元件230("synched",0);
	this.instance_63.parent = this;

	this.instance_64 = new lib.元件231("synched",0);
	this.instance_64.parent = this;

	this.instance_65 = new lib.元件232("synched",0);
	this.instance_65.parent = this;

	this.instance_66 = new lib.元件233("synched",0);
	this.instance_66.parent = this;

	this.instance_67 = new lib.元件234("synched",0);
	this.instance_67.parent = this;

	this.instance_68 = new lib.元件235("synched",0);
	this.instance_68.parent = this;

	this.instance_69 = new lib.元件236("synched",0);
	this.instance_69.parent = this;

	this.instance_70 = new lib.元件237("synched",0);
	this.instance_70.parent = this;

	this.instance_71 = new lib.元件238("synched",0);
	this.instance_71.parent = this;

	this.instance_72 = new lib.元件239("synched",0);
	this.instance_72.parent = this;

	this.instance_73 = new lib.元件240("synched",0);
	this.instance_73.parent = this;

	this.instance_74 = new lib.元件241("synched",0);
	this.instance_74.parent = this;

	this.instance_75 = new lib.元件242("synched",0);
	this.instance_75.parent = this;

	this.instance_76 = new lib.元件243("synched",0);
	this.instance_76.parent = this;

	this.instance_77 = new lib.元件244("synched",0);
	this.instance_77.parent = this;

	this.instance_78 = new lib.元件245("synched",0);
	this.instance_78.parent = this;

	this.instance_79 = new lib.元件246("synched",0);
	this.instance_79.parent = this;

	this.instance_80 = new lib.元件247("synched",0);
	this.instance_80.parent = this;

	this.instance_81 = new lib.元件248("synched",0);
	this.instance_81.parent = this;

	this.instance_82 = new lib.元件249("synched",0);
	this.instance_82.parent = this;

	this.instance_83 = new lib.元件250("synched",0);
	this.instance_83.parent = this;

	this.instance_84 = new lib.元件251("synched",0);
	this.instance_84.parent = this;

	this.instance_85 = new lib.元件191("synched",0);
	this.instance_85.parent = this;
	this.instance_85.setTransform(102.5,120);

	this.instance_86 = new lib.元件252("synched",0);
	this.instance_86.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance}]},1).to({state:[{t:this.instance_4},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance}]},1).to({state:[{t:this.instance_6},{t:this.instance}]},1).to({state:[{t:this.instance_7},{t:this.instance}]},1).to({state:[{t:this.instance_8},{t:this.instance}]},1).to({state:[{t:this.instance_9},{t:this.instance}]},1).to({state:[{t:this.instance_10},{t:this.instance}]},1).to({state:[{t:this.instance_11},{t:this.instance}]},1).to({state:[{t:this.instance_12},{t:this.instance}]},1).to({state:[{t:this.instance_13},{t:this.instance}]},1).to({state:[{t:this.instance_14},{t:this.instance}]},1).to({state:[{t:this.instance_15},{t:this.instance}]},1).to({state:[{t:this.instance_16},{t:this.instance}]},1).to({state:[{t:this.instance_17},{t:this.instance}]},1).to({state:[{t:this.instance_18},{t:this.instance}]},1).to({state:[{t:this.instance_19},{t:this.instance}]},1).to({state:[{t:this.instance_20},{t:this.instance}]},1).to({state:[{t:this.instance_21},{t:this.instance}]},1).to({state:[{t:this.instance_22},{t:this.instance}]},1).to({state:[{t:this.instance_23},{t:this.instance}]},1).to({state:[{t:this.instance_24},{t:this.instance}]},1).to({state:[{t:this.instance_25},{t:this.instance}]},1).to({state:[{t:this.instance_26},{t:this.instance}]},1).to({state:[{t:this.instance_27},{t:this.instance}]},1).to({state:[{t:this.instance_28},{t:this.instance}]},1).to({state:[{t:this.instance_29},{t:this.instance}]},1).to({state:[{t:this.instance_30},{t:this.instance}]},1).to({state:[{t:this.instance_31},{t:this.instance}]},1).to({state:[{t:this.instance_32},{t:this.instance}]},1).to({state:[{t:this.instance_33},{t:this.instance}]},1).to({state:[{t:this.instance_34},{t:this.instance}]},1).to({state:[{t:this.instance_35},{t:this.instance}]},1).to({state:[{t:this.instance_36},{t:this.instance}]},1).to({state:[{t:this.instance_37},{t:this.instance}]},1).to({state:[{t:this.instance_38},{t:this.instance}]},1).to({state:[{t:this.instance_39},{t:this.instance}]},1).to({state:[{t:this.instance_40},{t:this.instance}]},1).to({state:[{t:this.instance_41},{t:this.instance}]},1).to({state:[{t:this.instance_42},{t:this.instance}]},1).to({state:[{t:this.instance_43},{t:this.instance}]},1).to({state:[{t:this.instance_44},{t:this.instance}]},1).to({state:[{t:this.instance_45},{t:this.instance}]},1).to({state:[{t:this.instance_46},{t:this.instance}]},1).to({state:[{t:this.instance_47},{t:this.instance}]},1).to({state:[{t:this.instance_48},{t:this.instance}]},1).to({state:[{t:this.instance_49},{t:this.instance}]},1).to({state:[{t:this.instance_50},{t:this.instance}]},1).to({state:[{t:this.instance_51},{t:this.instance}]},1).to({state:[{t:this.instance_52},{t:this.instance}]},1).to({state:[{t:this.instance_53},{t:this.instance}]},1).to({state:[{t:this.instance_54},{t:this.instance}]},1).to({state:[{t:this.instance_55},{t:this.instance}]},1).to({state:[{t:this.instance_56},{t:this.instance}]},1).to({state:[{t:this.instance_57},{t:this.instance}]},1).to({state:[{t:this.instance_58},{t:this.instance}]},1).to({state:[{t:this.instance_59},{t:this.instance}]},1).to({state:[{t:this.instance_60},{t:this.instance}]},1).to({state:[{t:this.instance_61},{t:this.instance}]},1).to({state:[{t:this.instance_62},{t:this.instance}]},1).to({state:[{t:this.instance_63},{t:this.instance}]},1).to({state:[{t:this.instance_64},{t:this.instance}]},1).to({state:[{t:this.instance_65},{t:this.instance}]},1).to({state:[{t:this.instance_66},{t:this.instance}]},1).to({state:[{t:this.instance_67},{t:this.instance}]},1).to({state:[{t:this.instance_68},{t:this.instance}]},1).to({state:[{t:this.instance_69},{t:this.instance}]},1).to({state:[{t:this.instance_70},{t:this.instance}]},1).to({state:[{t:this.instance_71},{t:this.instance}]},1).to({state:[{t:this.instance_72},{t:this.instance}]},1).to({state:[{t:this.instance_73},{t:this.instance}]},1).to({state:[{t:this.instance_74},{t:this.instance}]},1).to({state:[{t:this.instance_75},{t:this.instance}]},1).to({state:[{t:this.instance_76},{t:this.instance}]},1).to({state:[{t:this.instance_77},{t:this.instance}]},1).to({state:[{t:this.instance_78},{t:this.instance}]},1).to({state:[{t:this.instance_79},{t:this.instance}]},1).to({state:[{t:this.instance_80},{t:this.instance}]},1).to({state:[{t:this.instance_81},{t:this.instance}]},1).to({state:[{t:this.instance_82},{t:this.instance}]},1).to({state:[{t:this.instance_83},{t:this.instance}]},1).to({state:[{t:this.instance_84},{t:this.instance}]},1).to({state:[{t:this.instance_86},{t:this.instance_85,p:{scaleX:1,scaleY:1,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_85,p:{scaleX:1.07,scaleY:1.07,alpha:0.93}},{t:this.instance}]},1).to({state:[{t:this.instance_85,p:{scaleX:1.14,scaleY:1.14,alpha:0.859}},{t:this.instance}]},1).to({state:[{t:this.instance_85,p:{scaleX:1.21,scaleY:1.21,alpha:0.789}},{t:this.instance}]},1).to({state:[{t:this.instance_85,p:{scaleX:1.28,scaleY:1.28,alpha:0.711}},{t:this.instance}]},1).to({state:[{t:this.instance_85,p:{scaleX:1.349,scaleY:1.349,alpha:0.641}},{t:this.instance}]},1).to({state:[{t:this.instance_85,p:{scaleX:1.419,scaleY:1.419,alpha:0.57}},{t:this.instance}]},1).to({state:[{t:this.instance_85,p:{scaleX:1.489,scaleY:1.489,alpha:0.5}},{t:this.instance}]},1).to({state:[{t:this.instance_85,p:{scaleX:1.559,scaleY:1.559,alpha:0.43}},{t:this.instance}]},1).to({state:[{t:this.instance_85,p:{scaleX:1.629,scaleY:1.629,alpha:0.359}},{t:this.instance}]},1).to({state:[{t:this.instance_85,p:{scaleX:1.699,scaleY:1.699,alpha:0.289}},{t:this.instance}]},1).to({state:[{t:this.instance_85,p:{scaleX:1.769,scaleY:1.769,alpha:0.211}},{t:this.instance}]},1).to({state:[{t:this.instance_85,p:{scaleX:1.839,scaleY:1.839,alpha:0.141}},{t:this.instance}]},1).to({state:[{t:this.instance_85,p:{scaleX:1.908,scaleY:1.908,alpha:0.07}},{t:this.instance}]},1).to({state:[{t:this.instance_85,p:{scaleX:1.978,scaleY:1.978,alpha:0}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(308.5,223,207,243.5);
// library properties:
lib.properties = {
	width: 619,
	height: 450,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/jiong_atlas_.png", id:"jiong_atlas_"},
		{src:"sounds/Sound1atframe9wav.ogg", id:"Sound1atframe9wav"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;