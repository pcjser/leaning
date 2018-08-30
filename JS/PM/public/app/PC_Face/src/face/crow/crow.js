(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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



(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AgECUIghgRQghgWgKghIgCgcQAOhXA3g2QAngnA5gTQgqAggYAWQggAegcAkQghA4AUAwQANAeAwAxg");
	this.shape.setTransform(34.2,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E18100").s().p("AgUCUQAOghgRgXQgQgTgkgHQAagOATgXIAOgTIgZAWQghAYgjAJIgSACQBagiARg1QAGgWgYgSIg2giQhLgtAchDQAHgUAQgVIAqgHQgzBCAlAlQAaAZA+AJQAkAFAGAnQADAUgEATQBNgGAZBEQANAigDAjQh0B4iXAgIgmAGQBzglARhGg");
	this.shape_1.setTransform(55.7,26.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC33").s().p("AhaCMQgrhtAsg/QANgUAWgNIASgJQALA5AsAiQAXASAUAGQg7gngNg2QgEgRABgRIACgNQAKhYA3gUQAcgLAaAHIgBAOQAAAQAFAPQgtgEgWBAQgMAnAMAuQANAuAmAmQghgRgRgFQgcgHgXALQhFA5AiBxQghghgRgqg");
	this.shape_2.setTransform(13.4,45.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E18100").s().p("AhLAmQAHgmgdgWQgZgUgwgFQBRgZBIg4QAjgcAUgYQBIADAlAzQATAZAEAZQAIB3hiBBQhQA1iYASIgKACQBQg3AHhYg");
	this.shape_3.setTransform(68,56.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F59900").s().p("Ai+FnQibgfgvh0QgrhtAshAQAOgUAVgNIASgIQALA4AtAjQAXASAUAGQg7gngOg3QgEgRABgQIACgNQAKhYA4gUQAcgLAaAHIgBAPQAAASAHAQQAWAyBTANQBSANA8gsQAegWANgZQgTAWghARQhCAjhDgUQhDgVgUguQgHgOgBgPIAAgMQAVh/Bog2QAzgcAvgCQgzBCAlAlQAZAZA/AIQAkAGAGAnQAEAUgFASQBOgFAZBFQAMAigDAjQhyB2iXAhQhKAQg1gHQCVAfCNhTQBGgpAogwQBIADAmAyQASAaAEAYQAJB5hjBBQhPA1iZASQhUAKhDAAQhKAAg4gMg");
	this.shape_4.setTransform(43.6,37.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB4700").s().p("AgYGCQiJgBhngoQhwgrgghMQg5iEA+hNQATgYAdgQIAZgLQALhSA7gjQAegSAcgBQAVh8B8g6QA9gdA6gEQgaAXANAtQAOAvAtAKQAmAHAUApQAKAUACASQBlAQATBEQAKAigKAfIAiAMQAnARAZAYQBSBQhVB/QgxBJh5ApQhvAliFAAIgDAAg");
	this.shape_5.setTransform(43.6,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.3,77.2);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("EhkVA4bMAAAhw1MDIrAAAMAAABw1g");
	this.shape.setTransform(642.2,361.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1284.4,722.2);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9961C").s().p("AgPgCIhVgiIBXgaIBygCIgCBEIgIA8g");
	this.shape.setTransform(10.1,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.3,12.9);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B88918").s().p("AgLAwIhPgUIBNgZIBfg0IAHAvIABAzg");
	this.shape.setTransform(9.1,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.1,9.9);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231815").ss(3,0,0,4).p("ABtAAQABAOgSAOQgGAEAFAPQAEAOgDACQgTARhcgTQgugJgqgMIACgmQAVgRAfgSQA7glAuAAQAOAAAEAXQAFAYAKADQAWAHACANg");
	this.shape.setTransform(12.4,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#545555").s().p("AgTA9QgugJgrgMIADgmQAVgRAegSQA8glAtAAQAOAAAFAXQAFAYAJADQAXAHABANQABAOgSAOQgFAEAEAPQAEAOgDACQgIAIgaAAQgcAAgwgKg");
	this.shape_1.setTransform(12.4,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.8,17.4);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231815").ss(2,0,0,4).p("Ah4hLQAPAsAbApQA1BUA7gKQAegFAAgVIgGgVIAMAFQAQADAOgNQAPgNgOgPIgRgLQAOAAASgTQAMgLgTgaIgVgY");
	this.shape.setTransform(13,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,26.2,19.3);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231815").s().p("AgxAiQAVgnAbgTQAQgMAQgCIAMABQANAEgKAEIgfAQQgYANgFAFIgeAig");
	this.shape.setTransform(7.6,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231815").s().p("AhCBWIALgvQAQgzAWgfQAVgeAagMQANgGAJAAIAKACQAJADgJAIQgPANgeAgQgiAkgGAMQgJAUgWA5g");
	this.shape_1.setTransform(6.7,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.3,18.4);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#201917").s().p("AhHB/QhtgZhCh5QgVglgNgsIgLgjIBJBOQBVBPA/AGIFpAhQgvAbhFAVQhXAbhMAAQgrAAgogJg");
	this.shape.setTransform(31.8,62.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231815").s().p("AhZAMIAAgXIC0AAIAAAXg");
	this.shape_1.setTransform(18.8,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231815").s().p("AgJAPQgEgGAAgJQAAgHAEgHQAEgGAFAAQAGAAAEAGQAEAHAAAHQAAAJgEAGQgEAGgGABQgFgBgEgGg");
	this.shape_2.setTransform(13.2,26.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIAkQgigBgYgiIgRggICngFQgJATgRASQggAkgfAAIgDgBg");
	this.shape_3.setTransform(18.4,28.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#231815").ss(3,0,0,4).p("Ag3lsQAUgQBCAPQBNARBDAvQDBCHgdEJQgWDOikAyQg0APhLACQhHgBgUADQisgFhFitQgjhWgBhWQAIhcAqhfQBQi3CdgSIAMgC");
	this.shape_4.setTransform(35.8,38.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#545555").s().p("AkyDEQgjhWgBhWQAIhcAqhfQBTi+CmgNIgMAAQAUgOBCAPQBNARBDAvQDBCHgdEJQgWDOikAyQg0APhLACQhHgBgUADQisgFhFitg");
	this.shape_5.setTransform(35.8,38.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.6,77.8);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231815").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape.setTransform(1.9,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231815").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_1.setTransform(11.3,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231815").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_2.setTransform(20.7,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231815").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_3.setTransform(30.1,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231815").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_4.setTransform(39.4,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231815").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_5.setTransform(48.8,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231815").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_6.setTransform(58.2,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231815").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_7.setTransform(67.6,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231815").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_8.setTransform(77,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231815").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_9.setTransform(86.4,1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231815").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_10.setTransform(95.8,1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231815").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_11.setTransform(105.2,1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231815").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_12.setTransform(114.5,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231815").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_13.setTransform(123.9,1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231815").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_14.setTransform(133.3,1.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231815").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_15.setTransform(142.7,1.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231815").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_16.setTransform(152.1,1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231815").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_17.setTransform(161.5,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163.4,3.8);


// stage content:
(lib.无标题1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Sound1atframe0wav");
	}
	this.frame_37 = function() {
		playSound("Sound2atframe38wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(37).call(this.frame_37).wait(68));

	// 图层 1
	this.instance = new lib.元件8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-7.1,-7,0.547,0.712);
	this.instance.alpha = 0;

	this.instance_1 = new lib.元件7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(698.2,110.4,1.937,1.937);

	this.instance_2 = new lib.元件6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(703.4,123.5,1.937,1.937);

	this.instance_3 = new lib.元件5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(864.2,135.6,1.937,1.937);

	this.instance_4 = new lib.元件4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(793.1,124,1.937,1.937);

	this.instance_5 = new lib.元件3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(778.7,17.9,1.937,1.937);

	this.instance_6 = new lib.元件2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(734.7,45,1.937,1.937);

	this.instance_7 = new lib.元件1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(926.2,149.4,1.57,1.57);

	this.instance_8 = new lib.元件9("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(343.4,193.7,0.381,0.381);

	this.instance_9 = new lib.元件9("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(399.4,273.8,0.897,0.897);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{x:926.2,y:149.4}},{t:this.instance_6,p:{scaleX:1.937,scaleY:1.937,x:734.7,y:45}},{t:this.instance_5,p:{scaleX:1.937,scaleY:1.937,x:778.7,y:17.9}},{t:this.instance_4,p:{scaleX:1.937,scaleY:1.937,x:793.1,y:124}},{t:this.instance_3,p:{scaleX:1.937,scaleY:1.937,x:864.2,y:135.6}},{t:this.instance_2,p:{scaleX:1.937,scaleY:1.937,x:703.4,y:123.5}},{t:this.instance_1,p:{scaleX:1.937,scaleY:1.937,x:698.2,y:110.4}},{t:this.instance}]}).to({state:[{t:this.instance_7,p:{x:913.2,y:149.8}},{t:this.instance_6,p:{scaleX:1.941,scaleY:1.941,x:721.3,y:45.2}},{t:this.instance_5,p:{scaleX:1.941,scaleY:1.941,x:765.4,y:18}},{t:this.instance_4,p:{scaleX:1.941,scaleY:1.941,x:779.8,y:124.3}},{t:this.instance_3,p:{scaleX:1.941,scaleY:1.941,x:851,y:135.9}},{t:this.instance_2,p:{scaleX:1.941,scaleY:1.941,x:689.9,y:123.8}},{t:this.instance_1,p:{scaleX:1.941,scaleY:1.941,x:684.7,y:110.7}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:900.3,y:150.2}},{t:this.instance_6,p:{scaleX:1.945,scaleY:1.945,x:707.8,y:45.3}},{t:this.instance_5,p:{scaleX:1.945,scaleY:1.945,x:752.1,y:18.1}},{t:this.instance_4,p:{scaleX:1.945,scaleY:1.945,x:766.5,y:124.6}},{t:this.instance_3,p:{scaleX:1.945,scaleY:1.945,x:837.9,y:136.3}},{t:this.instance_2,p:{scaleX:1.945,scaleY:1.945,x:676.4,y:124.1}},{t:this.instance_1,p:{scaleX:1.945,scaleY:1.945,x:671.2,y:111}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:887.5,y:150.6}},{t:this.instance_6,p:{scaleX:1.95,scaleY:1.95,x:694.5,y:45.5}},{t:this.instance_5,p:{scaleX:1.95,scaleY:1.95,x:738.9,y:18.2}},{t:this.instance_4,p:{scaleX:1.95,scaleY:1.95,x:753.3,y:124.9}},{t:this.instance_3,p:{scaleX:1.95,scaleY:1.95,x:824.9,y:136.6}},{t:this.instance_2,p:{scaleX:1.95,scaleY:1.95,x:663,y:124.4}},{t:this.instance_1,p:{scaleX:1.95,scaleY:1.95,x:657.8,y:111.3}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:874.6,y:151}},{t:this.instance_6,p:{scaleX:1.954,scaleY:1.954,x:681.1,y:45.5}},{t:this.instance_5,p:{scaleX:1.954,scaleY:1.954,x:725.6,y:18.2}},{t:this.instance_4,p:{scaleX:1.954,scaleY:1.954,x:740,y:125.2}},{t:this.instance_3,p:{scaleX:1.954,scaleY:1.954,x:811.7,y:136.9}},{t:this.instance_2,p:{scaleX:1.954,scaleY:1.954,x:649.6,y:124.7}},{t:this.instance_1,p:{scaleX:1.954,scaleY:1.954,x:644.3,y:111.5}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:861.8,y:151.3}},{t:this.instance_6,p:{scaleX:1.958,scaleY:1.958,x:667.9,y:45.6}},{t:this.instance_5,p:{scaleX:1.958,scaleY:1.958,x:712.4,y:18.2}},{t:this.instance_4,p:{scaleX:1.958,scaleY:1.958,x:726.9,y:125.4}},{t:this.instance_3,p:{scaleX:1.958,scaleY:1.958,x:798.8,y:137.2}},{t:this.instance_2,p:{scaleX:1.958,scaleY:1.958,x:636.2,y:124.9}},{t:this.instance_1,p:{scaleX:1.958,scaleY:1.958,x:630.9,y:111.7}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:849,y:151.7}},{t:this.instance_6,p:{scaleX:1.962,scaleY:1.962,x:654.6,y:45.7}},{t:this.instance_5,p:{scaleX:1.962,scaleY:1.962,x:699.2,y:18.2}},{t:this.instance_4,p:{scaleX:1.962,scaleY:1.962,x:713.8,y:125.7}},{t:this.instance_3,p:{scaleX:1.962,scaleY:1.962,x:785.8,y:137.5}},{t:this.instance_2,p:{scaleX:1.962,scaleY:1.962,x:622.9,y:125.2}},{t:this.instance_1,p:{scaleX:1.962,scaleY:1.962,x:617.6,y:112}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:836.3,y:152.1}},{t:this.instance_6,p:{scaleX:1.967,scaleY:1.967,x:641.3,y:45.9}},{t:this.instance_5,p:{scaleX:1.967,scaleY:1.967,x:686.1,y:18.4}},{t:this.instance_4,p:{scaleX:1.967,scaleY:1.967,x:700.6,y:126.1}},{t:this.instance_3,p:{scaleX:1.967,scaleY:1.967,x:772.8,y:137.9}},{t:this.instance_2,p:{scaleX:1.967,scaleY:1.967,x:609.6,y:125.6}},{t:this.instance_1,p:{scaleX:1.967,scaleY:1.967,x:604.3,y:112.3}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:823.6,y:152.5}},{t:this.instance_6,p:{scaleX:1.971,scaleY:1.971,x:628.1,y:46}},{t:this.instance_5,p:{scaleX:1.971,scaleY:1.971,x:673,y:18.4}},{t:this.instance_4,p:{scaleX:1.971,scaleY:1.971,x:687.5,y:126.3}},{t:this.instance_3,p:{scaleX:1.971,scaleY:1.971,x:759.9,y:138.1}},{t:this.instance_2,p:{scaleX:1.971,scaleY:1.971,x:596.3,y:125.8}},{t:this.instance_1,p:{scaleX:1.971,scaleY:1.971,x:591,y:112.5}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:810.9,y:152.8}},{t:this.instance_6,p:{scaleX:1.975,scaleY:1.975,x:615,y:46.1}},{t:this.instance_5,p:{scaleX:1.975,scaleY:1.975,x:659.9,y:18.4}},{t:this.instance_4,p:{scaleX:1.975,scaleY:1.975,x:674.6,y:126.6}},{t:this.instance_3,p:{scaleX:1.975,scaleY:1.975,x:747,y:138.4}},{t:this.instance_2,p:{scaleX:1.975,scaleY:1.975,x:583.1,y:126.1}},{t:this.instance_1,p:{scaleX:1.975,scaleY:1.975,x:577.8,y:112.8}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:798.2,y:153.2}},{t:this.instance_6,p:{scaleX:1.979,scaleY:1.979,x:601.8,y:46.2}},{t:this.instance_5,p:{scaleX:1.979,scaleY:1.979,x:646.9,y:18.5}},{t:this.instance_4,p:{scaleX:1.979,scaleY:1.979,x:661.5,y:126.9}},{t:this.instance_3,p:{scaleX:1.979,scaleY:1.979,x:734.2,y:138.8}},{t:this.instance_2,p:{scaleX:1.979,scaleY:1.979,x:569.9,y:126.4}},{t:this.instance_1,p:{scaleX:1.979,scaleY:1.979,x:564.5,y:113}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:785.6,y:153.6}},{t:this.instance_6,p:{scaleX:1.984,scaleY:1.984,x:588.7,y:46.3}},{t:this.instance_5,p:{scaleX:1.984,scaleY:1.984,x:633.9,y:18.6}},{t:this.instance_4,p:{scaleX:1.984,scaleY:1.984,x:648.5,y:127.2}},{t:this.instance_3,p:{scaleX:1.984,scaleY:1.984,x:721.3,y:139.1}},{t:this.instance_2,p:{scaleX:1.984,scaleY:1.984,x:556.7,y:126.7}},{t:this.instance_1,p:{scaleX:1.984,scaleY:1.984,x:551.3,y:113.3}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:773,y:154}},{t:this.instance_6,p:{scaleX:1.988,scaleY:1.988,x:575.7,y:46.4}},{t:this.instance_5,p:{scaleX:1.988,scaleY:1.988,x:620.9,y:18.6}},{t:this.instance_4,p:{scaleX:1.988,scaleY:1.988,x:635.6,y:127.4}},{t:this.instance_3,p:{scaleX:1.988,scaleY:1.988,x:708.6,y:139.3}},{t:this.instance_2,p:{scaleX:1.988,scaleY:1.988,x:543.6,y:126.9}},{t:this.instance_1,p:{scaleX:1.988,scaleY:1.988,x:538.2,y:113.5}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:760.4,y:154.3}},{t:this.instance_6,p:{scaleX:1.992,scaleY:1.992,x:562.6,y:46.6}},{t:this.instance_5,p:{scaleX:1.992,scaleY:1.992,x:607.9,y:18.7}},{t:this.instance_4,p:{scaleX:1.992,scaleY:1.992,x:622.7,y:127.7}},{t:this.instance_3,p:{scaleX:1.992,scaleY:1.992,x:695.8,y:139.7}},{t:this.instance_2,p:{scaleX:1.992,scaleY:1.992,x:530.4,y:127.2}},{t:this.instance_1,p:{scaleX:1.992,scaleY:1.992,x:525.1,y:113.8}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:747.8,y:154.7}},{t:this.instance_6,p:{scaleX:1.996,scaleY:1.996,x:549.6,y:46.6}},{t:this.instance_5,p:{scaleX:1.996,scaleY:1.996,x:595,y:18.7}},{t:this.instance_4,p:{scaleX:1.996,scaleY:1.996,x:609.8,y:128}},{t:this.instance_3,p:{scaleX:1.996,scaleY:1.996,x:683,y:140}},{t:this.instance_2,p:{scaleX:1.996,scaleY:1.996,x:517.4,y:127.5}},{t:this.instance_1,p:{scaleX:1.996,scaleY:1.996,x:512,y:114}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:735.3,y:155.1}},{t:this.instance_6,p:{scaleX:2,scaleY:2,x:536.6,y:46.8}},{t:this.instance_5,p:{scaleX:2,scaleY:2,x:582.1,y:18.8}},{t:this.instance_4,p:{scaleX:2,scaleY:2,x:596.9,y:128.3}},{t:this.instance_3,p:{scaleX:2,scaleY:2,x:670.3,y:140.3}},{t:this.instance_2,p:{scaleX:2,scaleY:2,x:504.3,y:127.8}},{t:this.instance_1,p:{scaleX:2,scaleY:2,x:498.9,y:114.3}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:722.8,y:155.4}},{t:this.instance_6,p:{scaleX:2.004,scaleY:2.004,x:523.7,y:46.9}},{t:this.instance_5,p:{scaleX:2.004,scaleY:2.004,x:569.3,y:18.8}},{t:this.instance_4,p:{scaleX:2.004,scaleY:2.004,x:584.2,y:128.6}},{t:this.instance_3,p:{scaleX:2.004,scaleY:2.004,x:657.7,y:140.6}},{t:this.instance_2,p:{scaleX:2.004,scaleY:2.004,x:491.4,y:128.1}},{t:this.instance_1,p:{scaleX:2.004,scaleY:2.004,x:485.9,y:114.5}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:710.4,y:155.8}},{t:this.instance_6,p:{scaleX:2.009,scaleY:2.009,x:510.7,y:47}},{t:this.instance_5,p:{scaleX:2.009,scaleY:2.009,x:556.4,y:18.9}},{t:this.instance_4,p:{scaleX:2.009,scaleY:2.009,x:571.3,y:128.9}},{t:this.instance_3,p:{scaleX:2.009,scaleY:2.009,x:645,y:140.9}},{t:this.instance_2,p:{scaleX:2.009,scaleY:2.009,x:478.3,y:128.4}},{t:this.instance_1,p:{scaleX:2.009,scaleY:2.009,x:472.9,y:114.8}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:697.9,y:156.2}},{t:this.instance_6,p:{scaleX:2.013,scaleY:2.013,x:497.9,y:47.1}},{t:this.instance_5,p:{scaleX:2.013,scaleY:2.013,x:543.7,y:18.9}},{t:this.instance_4,p:{scaleX:2.013,scaleY:2.013,x:558.5,y:129.1}},{t:this.instance_3,p:{scaleX:2.013,scaleY:2.013,x:632.4,y:141.2}},{t:this.instance_2,p:{scaleX:2.013,scaleY:2.013,x:465.4,y:128.6}},{t:this.instance_1,p:{scaleX:2.013,scaleY:2.013,x:459.9,y:115}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:685.5,y:156.5}},{t:this.instance_6,p:{scaleX:2.017,scaleY:2.017,x:485,y:47.2}},{t:this.instance_5,p:{scaleX:2.017,scaleY:2.017,x:530.9,y:19}},{t:this.instance_4,p:{scaleX:2.017,scaleY:2.017,x:545.8,y:129.4}},{t:this.instance_3,p:{scaleX:2.017,scaleY:2.017,x:619.8,y:141.5}},{t:this.instance_2,p:{scaleX:2.017,scaleY:2.017,x:452.4,y:128.9}},{t:this.instance_1,p:{scaleX:2.017,scaleY:2.017,x:447,y:115.3}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:673.2,y:156.9}},{t:this.instance_6,p:{scaleX:2.021,scaleY:2.021,x:472.2,y:47.3}},{t:this.instance_5,p:{scaleX:2.021,scaleY:2.021,x:518.2,y:19}},{t:this.instance_4,p:{scaleX:2.021,scaleY:2.021,x:533.2,y:129.7}},{t:this.instance_3,p:{scaleX:2.021,scaleY:2.021,x:607.3,y:141.8}},{t:this.instance_2,p:{scaleX:2.021,scaleY:2.021,x:439.6,y:129.2}},{t:this.instance_1,p:{scaleX:2.021,scaleY:2.021,x:434.1,y:115.5}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:660.8,y:157.3}},{t:this.instance_6,p:{scaleX:2.025,scaleY:2.025,x:459.4,y:47.4}},{t:this.instance_5,p:{scaleX:2.025,scaleY:2.025,x:505.5,y:19.1}},{t:this.instance_4,p:{scaleX:2.025,scaleY:2.025,x:520.4,y:129.9}},{t:this.instance_3,p:{scaleX:2.025,scaleY:2.025,x:594.8,y:142.1}},{t:this.instance_2,p:{scaleX:2.025,scaleY:2.025,x:426.7,y:129.4}},{t:this.instance_1,p:{scaleX:2.025,scaleY:2.025,x:421.2,y:115.7}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:648.5,y:157.6}},{t:this.instance_6,p:{scaleX:2.029,scaleY:2.029,x:446.6,y:47.5}},{t:this.instance_5,p:{scaleX:2.029,scaleY:2.029,x:492.7,y:19.1}},{t:this.instance_4,p:{scaleX:2.029,scaleY:2.029,x:507.8,y:130.2}},{t:this.instance_3,p:{scaleX:2.029,scaleY:2.029,x:582.2,y:142.4}},{t:this.instance_2,p:{scaleX:2.029,scaleY:2.029,x:413.8,y:129.7}},{t:this.instance_1,p:{scaleX:2.029,scaleY:2.029,x:408.3,y:116}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:636.2,y:158}},{t:this.instance_6,p:{scaleX:2.033,scaleY:2.033,x:433.9,y:47.6}},{t:this.instance_5,p:{scaleX:2.033,scaleY:2.033,x:480.1,y:19.2}},{t:this.instance_4,p:{scaleX:2.033,scaleY:2.033,x:495.2,y:130.5}},{t:this.instance_3,p:{scaleX:2.033,scaleY:2.033,x:569.8,y:142.7}},{t:this.instance_2,p:{scaleX:2.033,scaleY:2.033,x:401,y:130}},{t:this.instance_1,p:{scaleX:2.033,scaleY:2.033,x:395.5,y:116.3}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:623.9,y:158.4}},{t:this.instance_6,p:{scaleX:2.037,scaleY:2.037,x:421.2,y:47.8}},{t:this.instance_5,p:{scaleX:2.037,scaleY:2.037,x:467.6,y:19.3}},{t:this.instance_4,p:{scaleX:2.037,scaleY:2.037,x:482.6,y:130.8}},{t:this.instance_3,p:{scaleX:2.037,scaleY:2.037,x:557.4,y:143}},{t:this.instance_2,p:{scaleX:2.037,scaleY:2.037,x:388.3,y:130.3}},{t:this.instance_1,p:{scaleX:2.037,scaleY:2.037,x:382.8,y:116.5}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:611.7,y:158.7}},{t:this.instance_6,p:{scaleX:2.041,scaleY:2.041,x:408.5,y:47.8}},{t:this.instance_5,p:{scaleX:2.041,scaleY:2.041,x:455,y:19.3}},{t:this.instance_4,p:{scaleX:2.041,scaleY:2.041,x:470.1,y:131}},{t:this.instance_3,p:{scaleX:2.041,scaleY:2.041,x:545,y:143.3}},{t:this.instance_2,p:{scaleX:2.041,scaleY:2.041,x:375.5,y:130.5}},{t:this.instance_1,p:{scaleX:2.041,scaleY:2.041,x:370,y:116.7}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:599.5,y:159.1}},{t:this.instance_6,p:{scaleX:2.045,scaleY:2.045,x:395.9,y:48}},{t:this.instance_5,p:{scaleX:2.045,scaleY:2.045,x:442.4,y:19.3}},{t:this.instance_4,p:{scaleX:2.045,scaleY:2.045,x:457.6,y:131.3}},{t:this.instance_3,p:{scaleX:2.045,scaleY:2.045,x:532.6,y:143.6}},{t:this.instance_2,p:{scaleX:2.045,scaleY:2.045,x:362.9,y:130.8}},{t:this.instance_1,p:{scaleX:2.045,scaleY:2.045,x:357.3,y:117}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:587.3,y:159.5}},{t:this.instance_6,p:{scaleX:2.049,scaleY:2.049,x:383.3,y:48.1}},{t:this.instance_5,p:{scaleX:2.049,scaleY:2.049,x:429.9,y:19.4}},{t:this.instance_4,p:{scaleX:2.049,scaleY:2.049,x:445.1,y:131.6}},{t:this.instance_3,p:{scaleX:2.049,scaleY:2.049,x:520.3,y:143.9}},{t:this.instance_2,p:{scaleX:2.049,scaleY:2.049,x:350.2,y:131.1}},{t:this.instance_1,p:{scaleX:2.049,scaleY:2.049,x:344.7,y:117.2}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:575.2,y:159.8}},{t:this.instance_6,p:{scaleX:2.054,scaleY:2.054,x:370.8,y:48.2}},{t:this.instance_5,p:{scaleX:2.054,scaleY:2.054,x:417.5,y:19.5}},{t:this.instance_4,p:{scaleX:2.054,scaleY:2.054,x:432.7,y:131.9}},{t:this.instance_3,p:{scaleX:2.054,scaleY:2.054,x:508.1,y:144.2}},{t:this.instance_2,p:{scaleX:2.054,scaleY:2.054,x:337.6,y:131.4}},{t:this.instance_1,p:{scaleX:2.054,scaleY:2.054,x:332.1,y:117.5}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:563.1,y:160.2}},{t:this.instance_6,p:{scaleX:2.058,scaleY:2.058,x:358.2,y:48.3}},{t:this.instance_5,p:{scaleX:2.058,scaleY:2.058,x:405,y:19.5}},{t:this.instance_4,p:{scaleX:2.058,scaleY:2.058,x:420.2,y:132.2}},{t:this.instance_3,p:{scaleX:2.058,scaleY:2.058,x:495.7,y:144.5}},{t:this.instance_2,p:{scaleX:2.058,scaleY:2.058,x:325,y:131.7}},{t:this.instance_1,p:{scaleX:2.058,scaleY:2.058,x:319.4,y:117.8}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:551,y:160.5}},{t:this.instance_6,p:{scaleX:2.062,scaleY:2.062,x:345.7,y:48.4}},{t:this.instance_5,p:{scaleX:2.062,scaleY:2.062,x:392.6,y:19.6}},{t:this.instance_4,p:{scaleX:2.062,scaleY:2.062,x:407.8,y:132.4}},{t:this.instance_3,p:{scaleX:2.062,scaleY:2.062,x:483.5,y:144.8}},{t:this.instance_2,p:{scaleX:2.062,scaleY:2.062,x:312.4,y:131.9}},{t:this.instance_1,p:{scaleX:2.062,scaleY:2.062,x:306.8,y:118}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:538.9,y:160.9}},{t:this.instance_6,p:{scaleX:2.066,scaleY:2.066,x:333.2,y:48.5}},{t:this.instance_5,p:{scaleX:2.066,scaleY:2.066,x:380.2,y:19.6}},{t:this.instance_4,p:{scaleX:2.066,scaleY:2.066,x:395.5,y:132.7}},{t:this.instance_3,p:{scaleX:2.066,scaleY:2.066,x:471.3,y:145.1}},{t:this.instance_2,p:{scaleX:2.066,scaleY:2.066,x:299.9,y:132.2}},{t:this.instance_1,p:{scaleX:2.066,scaleY:2.066,x:294.3,y:118.2}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:526.9,y:161.2}},{t:this.instance_6,p:{scaleX:2.07,scaleY:2.07,x:320.8,y:48.6}},{t:this.instance_5,p:{scaleX:2.07,scaleY:2.07,x:367.9,y:19.6}},{t:this.instance_4,p:{scaleX:2.07,scaleY:2.07,x:383.2,y:132.9}},{t:this.instance_3,p:{scaleX:2.07,scaleY:2.07,x:459.2,y:145.3}},{t:this.instance_2,p:{scaleX:2.07,scaleY:2.07,x:287.4,y:132.4}},{t:this.instance_1,p:{scaleX:2.07,scaleY:2.07,x:281.8,y:118.4}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:514.9,y:161.6}},{t:this.instance_6,p:{scaleX:2.074,scaleY:2.074,x:308.4,y:48.7}},{t:this.instance_5,p:{scaleX:2.074,scaleY:2.074,x:355.5,y:19.7}},{t:this.instance_4,p:{scaleX:2.074,scaleY:2.074,x:370.9,y:133.2}},{t:this.instance_3,p:{scaleX:2.074,scaleY:2.074,x:447,y:145.7}},{t:this.instance_2,p:{scaleX:2.074,scaleY:2.074,x:274.9,y:132.7}},{t:this.instance_1,p:{scaleX:2.074,scaleY:2.074,x:269.3,y:118.7}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:502.9,y:162}},{t:this.instance_6,p:{scaleX:2.077,scaleY:2.077,x:296,y:48.9}},{t:this.instance_5,p:{scaleX:2.077,scaleY:2.077,x:343.2,y:19.8}},{t:this.instance_4,p:{scaleX:2.077,scaleY:2.077,x:358.6,y:133.5}},{t:this.instance_3,p:{scaleX:2.077,scaleY:2.077,x:434.9,y:146}},{t:this.instance_2,p:{scaleX:2.077,scaleY:2.077,x:262.4,y:133}},{t:this.instance_1,p:{scaleX:2.077,scaleY:2.077,x:256.8,y:119}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:490.9,y:162.3}},{t:this.instance_6,p:{scaleX:2.081,scaleY:2.081,x:283.6,y:48.9}},{t:this.instance_5,p:{scaleX:2.081,scaleY:2.081,x:331,y:19.8}},{t:this.instance_4,p:{scaleX:2.081,scaleY:2.081,x:346.4,y:133.7}},{t:this.instance_3,p:{scaleX:2.081,scaleY:2.081,x:422.8,y:146.2}},{t:this.instance_2,p:{scaleX:2.081,scaleY:2.081,x:250,y:133.2}},{t:this.instance_1,p:{scaleX:2.081,scaleY:2.081,x:244.4,y:119.2}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:479,y:162.7}},{t:this.instance_6,p:{scaleX:2.085,scaleY:2.085,x:271.3,y:49.1}},{t:this.instance_5,p:{scaleX:2.085,scaleY:2.085,x:318.8,y:19.9}},{t:this.instance_4,p:{scaleX:2.085,scaleY:2.085,x:334.2,y:134}},{t:this.instance_3,p:{scaleX:2.085,scaleY:2.085,x:410.7,y:146.6}},{t:this.instance_2,p:{scaleX:2.085,scaleY:2.085,x:237.6,y:133.5}},{t:this.instance_1,p:{scaleX:2.085,scaleY:2.085,x:232,y:119.4}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:467.1,y:163}},{t:this.instance_6,p:{scaleX:2.089,scaleY:2.089,x:259.1,y:49.1}},{t:this.instance_5,p:{scaleX:2.089,scaleY:2.089,x:306.6,y:19.9}},{t:this.instance_4,p:{scaleX:2.089,scaleY:2.089,x:322.1,y:134.3}},{t:this.instance_3,p:{scaleX:2.089,scaleY:2.089,x:398.7,y:146.8}},{t:this.instance_2,p:{scaleX:2.089,scaleY:2.089,x:225.3,y:133.7}},{t:this.instance_1,p:{scaleX:2.089,scaleY:2.089,x:219.7,y:119.6}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:455.3,y:163.4}},{t:this.instance_8,p:{scaleX:0.381,scaleY:0.381,x:343.4,y:193.7}},{t:this.instance_6,p:{scaleX:2.093,scaleY:2.093,x:246.8,y:49.2}},{t:this.instance_5,p:{scaleX:2.093,scaleY:2.093,x:294.4,y:19.9}},{t:this.instance_4,p:{scaleX:2.093,scaleY:2.093,x:309.9,y:134.5}},{t:this.instance_3,p:{scaleX:2.093,scaleY:2.093,x:386.8,y:147.1}},{t:this.instance_2,p:{scaleX:2.093,scaleY:2.093,x:213,y:134}},{t:this.instance_1,p:{scaleX:2.093,scaleY:2.093,x:207.4,y:119.9}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:443.4,y:163.7}},{t:this.instance_8,p:{scaleX:0.435,scaleY:0.435,x:349.3,y:202.2}},{t:this.instance_6,p:{scaleX:2.097,scaleY:2.097,x:234.6,y:49.4}},{t:this.instance_5,p:{scaleX:2.097,scaleY:2.097,x:282.3,y:20}},{t:this.instance_4,p:{scaleX:2.097,scaleY:2.097,x:297.8,y:134.8}},{t:this.instance_3,p:{scaleX:2.097,scaleY:2.097,x:374.8,y:147.4}},{t:this.instance_2,p:{scaleX:2.097,scaleY:2.097,x:200.7,y:134.3}},{t:this.instance_1,p:{scaleX:2.097,scaleY:2.097,x:195.1,y:120.2}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:431.6,y:164.1}},{t:this.instance_8,p:{scaleX:0.489,scaleY:0.489,x:355.2,y:210.5}},{t:this.instance_6,p:{scaleX:2.101,scaleY:2.101,x:222.4,y:49.5}},{t:this.instance_5,p:{scaleX:2.101,scaleY:2.101,x:270.2,y:20.1}},{t:this.instance_4,p:{scaleX:2.101,scaleY:2.101,x:285.8,y:135.1}},{t:this.instance_3,p:{scaleX:2.101,scaleY:2.101,x:362.9,y:147.7}},{t:this.instance_2,p:{scaleX:2.101,scaleY:2.101,x:188.5,y:134.6}},{t:this.instance_1,p:{scaleX:2.101,scaleY:2.101,x:182.8,y:120.4}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:419.9,y:164.4}},{t:this.instance_8,p:{scaleX:0.542,scaleY:0.542,x:360.9,y:218.8}},{t:this.instance_6,p:{scaleX:2.105,scaleY:2.105,x:210.3,y:49.6}},{t:this.instance_5,p:{scaleX:2.105,scaleY:2.105,x:258.2,y:20.1}},{t:this.instance_4,p:{scaleX:2.105,scaleY:2.105,x:273.7,y:135.4}},{t:this.instance_3,p:{scaleX:2.105,scaleY:2.105,x:351,y:148}},{t:this.instance_2,p:{scaleX:2.105,scaleY:2.105,x:176.3,y:134.8}},{t:this.instance_1,p:{scaleX:2.105,scaleY:2.105,x:170.6,y:120.6}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:408.1,y:164.8}},{t:this.instance_8,p:{scaleX:0.595,scaleY:0.595,x:366.6,y:226.9}},{t:this.instance_6,p:{scaleX:2.109,scaleY:2.109,x:198.1,y:49.6}},{t:this.instance_5,p:{scaleX:2.109,scaleY:2.109,x:246.1,y:20.1}},{t:this.instance_4,p:{scaleX:2.109,scaleY:2.109,x:261.7,y:135.6}},{t:this.instance_3,p:{scaleX:2.109,scaleY:2.109,x:339.1,y:148.2}},{t:this.instance_2,p:{scaleX:2.109,scaleY:2.109,x:164.1,y:135}},{t:this.instance_1,p:{scaleX:2.109,scaleY:2.109,x:158.4,y:120.8}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:396.4,y:165.1}},{t:this.instance_8,p:{scaleX:0.647,scaleY:0.647,x:372.2,y:235}},{t:this.instance_6,p:{scaleX:2.113,scaleY:2.113,x:186,y:49.8}},{t:this.instance_5,p:{scaleX:2.113,scaleY:2.113,x:234.1,y:20.2}},{t:this.instance_4,p:{scaleX:2.113,scaleY:2.113,x:249.7,y:135.9}},{t:this.instance_3,p:{scaleX:2.113,scaleY:2.113,x:327.3,y:148.6}},{t:this.instance_2,p:{scaleX:2.113,scaleY:2.113,x:151.9,y:135.3}},{t:this.instance_1,p:{scaleX:2.113,scaleY:2.113,x:146.2,y:121.1}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:384.7,y:165.5}},{t:this.instance_8,p:{scaleX:0.698,scaleY:0.698,x:377.7,y:243}},{t:this.instance_6,p:{scaleX:2.117,scaleY:2.117,x:173.9,y:49.8}},{t:this.instance_5,p:{scaleX:2.117,scaleY:2.117,x:222.1,y:20.2}},{t:this.instance_4,p:{scaleX:2.117,scaleY:2.117,x:237.7,y:136.1}},{t:this.instance_3,p:{scaleX:2.117,scaleY:2.117,x:315.4,y:148.8}},{t:this.instance_2,p:{scaleX:2.117,scaleY:2.117,x:139.7,y:135.6}},{t:this.instance_1,p:{scaleX:2.117,scaleY:2.117,x:134,y:121.3}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:373,y:165.8}},{t:this.instance_8,p:{scaleX:0.749,scaleY:0.749,x:383.3,y:250.8}},{t:this.instance_6,p:{scaleX:2.121,scaleY:2.121,x:161.9,y:50}},{t:this.instance_5,p:{scaleX:2.121,scaleY:2.121,x:210.2,y:20.3}},{t:this.instance_4,p:{scaleX:2.121,scaleY:2.121,x:225.9,y:136.4}},{t:this.instance_3,p:{scaleX:2.121,scaleY:2.121,x:303.7,y:149.1}},{t:this.instance_2,p:{scaleX:2.121,scaleY:2.121,x:127.7,y:135.9}},{t:this.instance_1,p:{scaleX:2.121,scaleY:2.121,x:121.9,y:121.6}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:361.4,y:166.1}},{t:this.instance_8,p:{scaleX:0.799,scaleY:0.799,x:388.7,y:258.6}},{t:this.instance_6,p:{scaleX:2.124,scaleY:2.124,x:150,y:50}},{t:this.instance_5,p:{scaleX:2.124,scaleY:2.124,x:198.3,y:20.3}},{t:this.instance_4,p:{scaleX:2.124,scaleY:2.124,x:214,y:136.6}},{t:this.instance_3,p:{scaleX:2.124,scaleY:2.124,x:292,y:149.4}},{t:this.instance_2,p:{scaleX:2.124,scaleY:2.124,x:115.7,y:136.1}},{t:this.instance_1,p:{scaleX:2.124,scaleY:2.124,x:109.9,y:121.7}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:349.8,y:166.5}},{t:this.instance_8,p:{scaleX:0.848,scaleY:0.848,x:394.1,y:266.2}},{t:this.instance_6,p:{scaleX:2.128,scaleY:2.128,x:138,y:50.2}},{t:this.instance_5,p:{scaleX:2.128,scaleY:2.128,x:186.4,y:20.4}},{t:this.instance_4,p:{scaleX:2.128,scaleY:2.128,x:202.2,y:136.9}},{t:this.instance_3,p:{scaleX:2.128,scaleY:2.128,x:280.3,y:149.7}},{t:this.instance_2,p:{scaleX:2.128,scaleY:2.128,x:103.7,y:136.4}},{t:this.instance_1,p:{scaleX:2.128,scaleY:2.128,x:97.9,y:122}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:338.2,y:166.8}},{t:this.instance_9,p:{scaleX:0.897,scaleY:0.897,x:399.4,y:273.8}},{t:this.instance_8,p:{scaleX:0.52,scaleY:0.52,x:224.5,y:197.4}},{t:this.instance_6,p:{scaleX:2.132,scaleY:2.132,x:126,y:50.3}},{t:this.instance_5,p:{scaleX:2.132,scaleY:2.132,x:174.5,y:20.4}},{t:this.instance_4,p:{scaleX:2.132,scaleY:2.132,x:190.3,y:137.1}},{t:this.instance_3,p:{scaleX:2.132,scaleY:2.132,x:268.6,y:149.9}},{t:this.instance_2,p:{scaleX:2.132,scaleY:2.132,x:91.6,y:136.6}},{t:this.instance_1,p:{scaleX:2.132,scaleY:2.132,x:85.8,y:122.2}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:326.7,y:167.2}},{t:this.instance_9,p:{scaleX:0.945,scaleY:0.945,x:404.5,y:281.3}},{t:this.instance_8,p:{scaleX:0.576,scaleY:0.576,x:226.4,y:206.3}},{t:this.instance_6,p:{scaleX:2.136,scaleY:2.136,x:114.1,y:50.4}},{t:this.instance_5,p:{scaleX:2.136,scaleY:2.136,x:162.7,y:20.5}},{t:this.instance_4,p:{scaleX:2.136,scaleY:2.136,x:178.5,y:137.4}},{t:this.instance_3,p:{scaleX:2.136,scaleY:2.136,x:256.9,y:150.2}},{t:this.instance_2,p:{scaleX:2.136,scaleY:2.136,x:79.6,y:136.9}},{t:this.instance_1,p:{scaleX:2.136,scaleY:2.136,x:73.9,y:122.4}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:315.2,y:167.5}},{t:this.instance_9,p:{scaleX:0.992,scaleY:0.992,x:409.7,y:288.7}},{t:this.instance_8,p:{scaleX:0.631,scaleY:0.631,x:228.3,y:215.1}},{t:this.instance_6,p:{scaleX:2.14,scaleY:2.14,x:102.2,y:50.5}},{t:this.instance_5,p:{scaleX:2.14,scaleY:2.14,x:150.9,y:20.5}},{t:this.instance_4,p:{scaleX:2.14,scaleY:2.14,x:166.7,y:137.7}},{t:this.instance_3,p:{scaleX:2.14,scaleY:2.14,x:245.3,y:150.5}},{t:this.instance_2,p:{scaleX:2.14,scaleY:2.14,x:67.7,y:137.1}},{t:this.instance_1,p:{scaleX:2.14,scaleY:2.14,x:61.9,y:122.7}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:303.7,y:167.9}},{t:this.instance_9,p:{scaleX:1.039,scaleY:1.039,x:414.8,y:296}},{t:this.instance_8,p:{scaleX:0.686,scaleY:0.686,x:230.2,y:223.7}},{t:this.instance_6,p:{scaleX:2.144,scaleY:2.144,x:90.4,y:50.6}},{t:this.instance_5,p:{scaleX:2.144,scaleY:2.144,x:139.2,y:20.6}},{t:this.instance_4,p:{scaleX:2.144,scaleY:2.144,x:155.1,y:138}},{t:this.instance_3,p:{scaleX:2.144,scaleY:2.144,x:233.7,y:150.8}},{t:this.instance_2,p:{scaleX:2.144,scaleY:2.144,x:55.8,y:137.4}},{t:this.instance_1,p:{scaleX:2.144,scaleY:2.144,x:50,y:123}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:292.2,y:168.2}},{t:this.instance_9,p:{scaleX:1.086,scaleY:1.086,x:419.8,y:303.2}},{t:this.instance_8,p:{scaleX:0.74,scaleY:0.74,x:232,y:232.3}},{t:this.instance_6,p:{scaleX:2.147,scaleY:2.147,x:78.6,y:50.7}},{t:this.instance_5,p:{scaleX:2.147,scaleY:2.147,x:127.4,y:20.6}},{t:this.instance_4,p:{scaleX:2.147,scaleY:2.147,x:143.3,y:138.2}},{t:this.instance_3,p:{scaleX:2.147,scaleY:2.147,x:222.1,y:151.1}},{t:this.instance_2,p:{scaleX:2.147,scaleY:2.147,x:43.9,y:137.6}},{t:this.instance_1,p:{scaleX:2.147,scaleY:2.147,x:38.1,y:123.1}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:280.8,y:168.5}},{t:this.instance_9,p:{scaleX:1.131,scaleY:1.131,x:424.8,y:310.3}},{t:this.instance_8,p:{scaleX:0.794,scaleY:0.794,x:233.9,y:240.8}},{t:this.instance_6,p:{scaleX:2.151,scaleY:2.151,x:66.8,y:50.8}},{t:this.instance_5,p:{scaleX:2.151,scaleY:2.151,x:115.8,y:20.7}},{t:this.instance_4,p:{scaleX:2.151,scaleY:2.151,x:131.7,y:138.5}},{t:this.instance_3,p:{scaleX:2.151,scaleY:2.151,x:210.6,y:151.4}},{t:this.instance_2,p:{scaleX:2.151,scaleY:2.151,x:32.1,y:138}},{t:this.instance_1,p:{scaleX:2.151,scaleY:2.151,x:26.3,y:123.4}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:269.4,y:168.9}},{t:this.instance_9,p:{scaleX:1.176,scaleY:1.176,x:429.7,y:317.3}},{t:this.instance_8,p:{scaleX:0.846,scaleY:0.846,x:235.7,y:249.1}},{t:this.instance_6,p:{scaleX:2.155,scaleY:2.155,x:55.2,y:50.9}},{t:this.instance_5,p:{scaleX:2.155,scaleY:2.155,x:104.2,y:20.7}},{t:this.instance_4,p:{scaleX:2.155,scaleY:2.155,x:120.1,y:138.7}},{t:this.instance_3,p:{scaleX:2.155,scaleY:2.155,x:199.2,y:151.6}},{t:this.instance_2,p:{scaleX:2.155,scaleY:2.155,x:20.4,y:138.2}},{t:this.instance_1,p:{scaleX:2.155,scaleY:2.155,x:14.5,y:123.6}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:258,y:169.2}},{t:this.instance_9,p:{scaleX:1.221,scaleY:1.221,x:434.5,y:324.2}},{t:this.instance_8,p:{scaleX:0.898,scaleY:0.898,x:237.4,y:257.4}},{t:this.instance_6,p:{scaleX:2.159,scaleY:2.159,x:43.4,y:50.9}},{t:this.instance_5,p:{scaleX:2.159,scaleY:2.159,x:92.5,y:20.7}},{t:this.instance_4,p:{scaleX:2.159,scaleY:2.159,x:108.4,y:138.9}},{t:this.instance_3,p:{scaleX:2.159,scaleY:2.159,x:187.7,y:151.9}},{t:this.instance_2,p:{scaleX:2.159,scaleY:2.159,x:8.5,y:138.4}},{t:this.instance_1,p:{scaleX:2.159,scaleY:2.159,x:2.7,y:123.8}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:246.6,y:169.5}},{t:this.instance_9,p:{scaleX:1.265,scaleY:1.265,x:439.2,y:330.9}},{t:this.instance_8,p:{scaleX:0.949,scaleY:0.949,x:239.2,y:265.5}},{t:this.instance_6,p:{scaleX:2.162,scaleY:2.162,x:31.7,y:51.1}},{t:this.instance_5,p:{scaleX:2.162,scaleY:2.162,x:80.9,y:20.8}},{t:this.instance_4,p:{scaleX:2.162,scaleY:2.162,x:96.9,y:139.2}},{t:this.instance_3,p:{scaleX:2.162,scaleY:2.162,x:176.3,y:152.2}},{t:this.instance_2,p:{scaleX:2.162,scaleY:2.162,x:-3.2,y:138.7}},{t:this.instance_1,p:{scaleX:2.162,scaleY:2.162,x:-9,y:124.1}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:235.3,y:169.9}},{t:this.instance_9,p:{scaleX:1.308,scaleY:1.308,x:444,y:337.7}},{t:this.instance_8,p:{scaleX:1,scaleY:1,x:240.9,y:273.5}},{t:this.instance_6,p:{scaleX:2.166,scaleY:2.166,x:20,y:51.2}},{t:this.instance_5,p:{scaleX:2.166,scaleY:2.166,x:69.3,y:20.8}},{t:this.instance_4,p:{scaleX:2.166,scaleY:2.166,x:85.3,y:139.4}},{t:this.instance_3,p:{scaleX:2.166,scaleY:2.166,x:164.8,y:152.4}},{t:this.instance_2,p:{scaleX:2.166,scaleY:2.166,x:-14.9,y:138.9}},{t:this.instance_1,p:{scaleX:2.166,scaleY:2.166,x:-20.8,y:124.3}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:224,y:170.2}},{t:this.instance_9,p:{scaleX:1.351,scaleY:1.351,x:448.5,y:344.3}},{t:this.instance_8,p:{scaleX:1.05,scaleY:1.05,x:242.6,y:281.4}},{t:this.instance_6,p:{scaleX:2.17,scaleY:2.17,x:8.4,y:51.3}},{t:this.instance_5,p:{scaleX:2.17,scaleY:2.17,x:57.8,y:20.9}},{t:this.instance_4,p:{scaleX:2.17,scaleY:2.17,x:73.8,y:139.7}},{t:this.instance_3,p:{scaleX:2.17,scaleY:2.17,x:153.5,y:152.7}},{t:this.instance_2,p:{scaleX:2.17,scaleY:2.17,x:-26.6,y:139.2}},{t:this.instance_1,p:{scaleX:2.17,scaleY:2.17,x:-32.4,y:124.5}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:212.8,y:170.5}},{t:this.instance_9,p:{scaleX:1.392,scaleY:1.392,x:453.1,y:350.8}},{t:this.instance_8,p:{scaleX:1.099,scaleY:1.099,x:244.3,y:289.2}},{t:this.instance_6,p:{scaleX:2.174,scaleY:2.174,x:-3.1,y:51.4}},{t:this.instance_5,p:{scaleX:2.174,scaleY:2.174,x:46.3,y:21}},{t:this.instance_4,p:{scaleX:2.174,scaleY:2.174,x:62.4,y:140}},{t:this.instance_3,p:{scaleX:2.174,scaleY:2.174,x:142.1,y:153}},{t:this.instance_2,p:{scaleX:2.174,scaleY:2.174,x:-38.2,y:139.4}},{t:this.instance_1,p:{scaleX:2.174,scaleY:2.174,x:-44.1,y:124.7}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:201.6,y:170.9}},{t:this.instance_9,p:{scaleX:1.434,scaleY:1.434,x:457.5,y:357.2}},{t:this.instance_8,p:{scaleX:1.147,scaleY:1.147,x:245.9,y:296.9}},{t:this.instance_6,p:{scaleX:2.177,scaleY:2.177,x:-14.7,y:51.5}},{t:this.instance_5,p:{scaleX:2.177,scaleY:2.177,x:34.8,y:21}},{t:this.instance_4,p:{scaleX:2.177,scaleY:2.177,x:50.9,y:140.2}},{t:this.instance_3,p:{scaleX:2.177,scaleY:2.177,x:130.8,y:153.3}},{t:this.instance_2,p:{scaleX:2.177,scaleY:2.177,x:-49.8,y:139.7}},{t:this.instance_1,p:{scaleX:2.177,scaleY:2.177,x:-55.7,y:125}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:190.4,y:171.2}},{t:this.instance_9,p:{scaleX:1.475,scaleY:1.475,x:461.9,y:363.5}},{t:this.instance_8,p:{scaleX:1.195,scaleY:1.195,x:247.6,y:304.4}},{t:this.instance_6,p:{scaleX:2.181,scaleY:2.181,x:-26.1,y:51.6}},{t:this.instance_5,p:{scaleX:2.181,scaleY:2.181,x:23.4,y:21}},{t:this.instance_4,p:{scaleX:2.181,scaleY:2.181,x:39.6,y:140.4}},{t:this.instance_3,p:{scaleX:2.181,scaleY:2.181,x:119.6,y:153.5}},{t:this.instance_2,p:{scaleX:2.181,scaleY:2.181,x:-61.4,y:139.9}},{t:this.instance_1,p:{scaleX:2.181,scaleY:2.181,x:-67.3,y:125.2}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:179.2,y:171.5}},{t:this.instance_9,p:{scaleX:1.475,scaleY:1.475,x:461.9,y:363.5}},{t:this.instance_8,p:{scaleX:1.242,scaleY:1.242,x:249.1,y:311.9}},{t:this.instance_6,p:{scaleX:2.185,scaleY:2.185,x:-37.6,y:51.7}},{t:this.instance_5,p:{scaleX:2.185,scaleY:2.185,x:12,y:21.1}},{t:this.instance_4,p:{scaleX:2.185,scaleY:2.185,x:28.2,y:140.7}},{t:this.instance_3,p:{scaleX:2.185,scaleY:2.185,x:108.4,y:153.8}},{t:this.instance_2,p:{scaleX:2.185,scaleY:2.185,x:-72.9,y:140.2}},{t:this.instance_1,p:{scaleX:2.185,scaleY:2.185,x:-78.8,y:125.4}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:168,y:171.9}},{t:this.instance_9,p:{scaleX:1.475,scaleY:1.475,x:461.9,y:363.5}},{t:this.instance_8,p:{scaleX:1.288,scaleY:1.288,x:250.7,y:319.2}},{t:this.instance_6,p:{scaleX:2.188,scaleY:2.188,x:-49.1,y:51.7}},{t:this.instance_5,p:{scaleX:2.188,scaleY:2.188,x:0.6,y:21.1}},{t:this.instance_4,p:{scaleX:2.188,scaleY:2.188,x:16.8,y:140.9}},{t:this.instance_3,p:{scaleX:2.188,scaleY:2.188,x:97.1,y:154}},{t:this.instance_2,p:{scaleX:2.188,scaleY:2.188,x:-84.5,y:140.3}},{t:this.instance_1,p:{scaleX:2.188,scaleY:2.188,x:-90.4,y:125.6}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:156.9,y:172.2}},{t:this.instance_9,p:{scaleX:1.475,scaleY:1.475,x:461.9,y:363.5}},{t:this.instance_8,p:{scaleX:1.334,scaleY:1.334,x:252.3,y:326.5}},{t:this.instance_6,p:{scaleX:2.192,scaleY:2.192,x:-60.5,y:51.8}},{t:this.instance_5,p:{scaleX:2.192,scaleY:2.192,x:-10.7,y:21.1}},{t:this.instance_4,p:{scaleX:2.192,scaleY:2.192,x:5.5,y:141.2}},{t:this.instance_3,p:{scaleX:2.192,scaleY:2.192,x:86,y:154.3}},{t:this.instance_2,p:{scaleX:2.192,scaleY:2.192,x:-95.9,y:140.6}},{t:this.instance_1,p:{scaleX:2.192,scaleY:2.192,x:-101.8,y:125.8}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:145.8,y:172.5}},{t:this.instance_9,p:{scaleX:1.475,scaleY:1.475,x:461.9,y:363.5}},{t:this.instance_8,p:{scaleX:1.379,scaleY:1.379,x:253.9,y:333.6}},{t:this.instance_6,p:{scaleX:2.196,scaleY:2.196,x:-71.9,y:51.9}},{t:this.instance_5,p:{scaleX:2.196,scaleY:2.196,x:-22,y:21.2}},{t:this.instance_4,p:{scaleX:2.196,scaleY:2.196,x:-5.7,y:141.4}},{t:this.instance_3,p:{scaleX:2.196,scaleY:2.196,x:74.8,y:154.6}},{t:this.instance_2,p:{scaleX:2.196,scaleY:2.196,x:-107.4,y:140.9}},{t:this.instance_1,p:{scaleX:2.196,scaleY:2.196,x:-113.3,y:126}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:134.8,y:172.9}},{t:this.instance_9,p:{scaleX:1.475,scaleY:1.475,x:461.9,y:363.5}},{t:this.instance_8,p:{scaleX:1.423,scaleY:1.423,x:255.4,y:340.6}},{t:this.instance_6,p:{scaleX:2.199,scaleY:2.199,x:-83.3,y:52.1}},{t:this.instance_5,p:{scaleX:2.199,scaleY:2.199,x:-33.3,y:21.3}},{t:this.instance_4,p:{scaleX:2.199,scaleY:2.199,x:-17,y:141.7}},{t:this.instance_3,p:{scaleX:2.199,scaleY:2.199,x:63.7,y:154.9}},{t:this.instance_2,p:{scaleX:2.199,scaleY:2.199,x:-118.8,y:141.1}},{t:this.instance_1,p:{scaleX:2.199,scaleY:2.199,x:-124.8,y:126.3}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:123.7,y:173.2}},{t:this.instance_9,p:{scaleX:1.475,scaleY:1.475,x:461.9,y:363.5}},{t:this.instance_8,p:{scaleX:1.467,scaleY:1.467,x:256.9,y:347.5}},{t:this.instance_6,p:{scaleX:2.203,scaleY:2.203,x:-94.6,y:52.1}},{t:this.instance_5,p:{scaleX:2.203,scaleY:2.203,x:-44.5,y:21.3}},{t:this.instance_4,p:{scaleX:2.203,scaleY:2.203,x:-28.2,y:141.9}},{t:this.instance_3,p:{scaleX:2.203,scaleY:2.203,x:52.6,y:155.1}},{t:this.instance_2,p:{scaleX:2.203,scaleY:2.203,x:-130.2,y:141.3}},{t:this.instance_1,p:{scaleX:2.203,scaleY:2.203,x:-136.1,y:126.5}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:112.7,y:173.5}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.51,scaleY:1.51,x:258.3,y:354.3}},{t:this.instance_6,p:{scaleX:2.207,scaleY:2.207,x:-105.9,y:52.2}},{t:this.instance_5,p:{scaleX:2.207,scaleY:2.207,x:-55.7,y:21.3}},{t:this.instance_4,p:{scaleX:2.207,scaleY:2.207,x:-39.4,y:142.1}},{t:this.instance_3,p:{scaleX:2.207,scaleY:2.207,x:41.5,y:155.4}},{t:this.instance_2,p:{scaleX:2.207,scaleY:2.207,x:-141.6,y:141.6}},{t:this.instance_1,p:{scaleX:2.207,scaleY:2.207,x:-147.5,y:126.7}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:101.7,y:173.8}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.552,scaleY:1.552,x:259.6,y:360.9}},{t:this.instance_6,p:{scaleX:2.21,scaleY:2.21,x:-117.2,y:52.3}},{t:this.instance_5,p:{scaleX:2.21,scaleY:2.21,x:-66.9,y:21.4}},{t:this.instance_4,p:{scaleX:2.21,scaleY:2.21,x:-50.5,y:142.4}},{t:this.instance_3,p:{scaleX:2.21,scaleY:2.21,x:30.5,y:155.7}},{t:this.instance_2,p:{scaleX:2.21,scaleY:2.21,x:-152.9,y:141.9}},{t:this.instance_1,p:{scaleX:2.21,scaleY:2.21,x:-158.8,y:126.9}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:90.8,y:174.2}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.552,scaleY:1.552,x:259.6,y:360.9}},{t:this.instance_6,p:{scaleX:2.214,scaleY:2.214,x:-128.5,y:52.5}},{t:this.instance_5,p:{scaleX:2.214,scaleY:2.214,x:-78.1,y:21.5}},{t:this.instance_4,p:{scaleX:2.214,scaleY:2.214,x:-61.7,y:142.7}},{t:this.instance_3,p:{scaleX:2.214,scaleY:2.214,x:19.5,y:156}},{t:this.instance_2,p:{scaleX:2.214,scaleY:2.214,x:-164.2,y:142.1}},{t:this.instance_1,p:{scaleX:2.214,scaleY:2.214,x:-170.2,y:127.2}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:79.9,y:174.5}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.552,scaleY:1.552,x:259.6,y:360.9}},{t:this.instance_6,p:{scaleX:2.217,scaleY:2.217,x:-139.6,y:52.5}},{t:this.instance_5,p:{scaleX:2.217,scaleY:2.217,x:-89.2,y:21.5}},{t:this.instance_4,p:{scaleX:2.217,scaleY:2.217,x:-72.7,y:142.9}},{t:this.instance_3,p:{scaleX:2.217,scaleY:2.217,x:8.6,y:156.2}},{t:this.instance_2,p:{scaleX:2.217,scaleY:2.217,x:-175.4,y:142.3}},{t:this.instance_1,p:{scaleX:2.217,scaleY:2.217,x:-181.4,y:127.4}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:69,y:174.8}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.552,scaleY:1.552,x:259.6,y:360.9}},{t:this.instance_6,p:{scaleX:2.221,scaleY:2.221,x:-150.8,y:52.6}},{t:this.instance_5,p:{scaleX:2.221,scaleY:2.221,x:-100.3,y:21.5}},{t:this.instance_4,p:{scaleX:2.221,scaleY:2.221,x:-83.9,y:143.1}},{t:this.instance_3,p:{scaleX:2.221,scaleY:2.221,x:-2.4,y:156.5}},{t:this.instance_2,p:{scaleX:2.221,scaleY:2.221,x:-186.7,y:142.6}},{t:this.instance_1,p:{scaleX:2.221,scaleY:2.221,x:-192.7,y:127.6}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:58.2,y:175.1}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.552,scaleY:1.552,x:259.6,y:360.9}},{t:this.instance_6,p:{scaleX:2.225,scaleY:2.225,x:-162,y:52.8}},{t:this.instance_5,p:{scaleX:2.225,scaleY:2.225,x:-111.4,y:21.6}},{t:this.instance_4,p:{scaleX:2.225,scaleY:2.225,x:-94.9,y:143.4}},{t:this.instance_3,p:{scaleX:2.225,scaleY:2.225,x:-13.3,y:156.7}},{t:this.instance_2,p:{scaleX:2.225,scaleY:2.225,x:-197.9,y:142.8}},{t:this.instance_1,p:{scaleX:2.225,scaleY:2.225,x:-203.9,y:127.8}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:47.3,y:175.4}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.552,scaleY:1.552,x:259.6,y:360.9}},{t:this.instance_6,p:{scaleX:2.228,scaleY:2.228,x:-173,y:52.9}},{t:this.instance_5,p:{scaleX:2.228,scaleY:2.228,x:-122.3,y:21.7}},{t:this.instance_4,p:{scaleX:2.228,scaleY:2.228,x:-105.8,y:143.7}},{t:this.instance_3,p:{scaleX:2.228,scaleY:2.228,x:-24.1,y:157}},{t:this.instance_2,p:{scaleX:2.228,scaleY:2.228,x:-209,y:143.1}},{t:this.instance_1,p:{scaleX:2.228,scaleY:2.228,x:-215,y:128.1}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:36.5,y:175.8}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.232,scaleY:2.232,x:-184.1,y:52.9}},{t:this.instance_5,p:{scaleX:2.232,scaleY:2.232,x:-133.4,y:21.7}},{t:this.instance_4,p:{scaleX:2.232,scaleY:2.232,x:-116.9,y:143.9}},{t:this.instance_3,p:{scaleX:2.232,scaleY:2.232,x:-35,y:157.3}},{t:this.instance_2,p:{scaleX:2.232,scaleY:2.232,x:-220.2,y:143.3}},{t:this.instance_1,p:{scaleX:2.232,scaleY:2.232,x:-226.2,y:128.3}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:25.7,y:176.1}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.235,scaleY:2.235,x:-195.2,y:53}},{t:this.instance_5,p:{scaleX:2.235,scaleY:2.235,x:-144.3,y:21.8}},{t:this.instance_4,p:{scaleX:2.235,scaleY:2.235,x:-127.8,y:144.1}},{t:this.instance_3,p:{scaleX:2.235,scaleY:2.235,x:-45.8,y:157.5}},{t:this.instance_2,p:{scaleX:2.235,scaleY:2.235,x:-231.3,y:143.6}},{t:this.instance_1,p:{scaleX:2.235,scaleY:2.235,x:-237.3,y:128.5}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:15,y:176.4}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.239,scaleY:2.239,x:-206.2,y:53.1}},{t:this.instance_5,p:{scaleX:2.239,scaleY:2.239,x:-155.3,y:21.8}},{t:this.instance_4,p:{scaleX:2.239,scaleY:2.239,x:-138.7,y:144.3}},{t:this.instance_3,p:{scaleX:2.239,scaleY:2.239,x:-56.6,y:157.8}},{t:this.instance_2,p:{scaleX:2.239,scaleY:2.239,x:-242.4,y:143.8}},{t:this.instance_1,p:{scaleX:2.239,scaleY:2.239,x:-248.4,y:128.7}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:4.3,y:176.7}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.242,scaleY:2.242,x:-217.2,y:53.2}},{t:this.instance_5,p:{scaleX:2.242,scaleY:2.242,x:-166.1,y:21.8}},{t:this.instance_4,p:{scaleX:2.242,scaleY:2.242,x:-149.5,y:144.6}},{t:this.instance_3,p:{scaleX:2.242,scaleY:2.242,x:-67.3,y:158}},{t:this.instance_2,p:{scaleX:2.242,scaleY:2.242,x:-253.4,y:144}},{t:this.instance_1,p:{scaleX:2.242,scaleY:2.242,x:-259.4,y:128.9}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-6.4,y:177}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.246,scaleY:2.246,x:-228.1,y:53.3}},{t:this.instance_5,p:{scaleX:2.246,scaleY:2.246,x:-177,y:21.9}},{t:this.instance_4,p:{scaleX:2.246,scaleY:2.246,x:-160.4,y:144.8}},{t:this.instance_3,p:{scaleX:2.246,scaleY:2.246,x:-78,y:158.3}},{t:this.instance_2,p:{scaleX:2.246,scaleY:2.246,x:-264.4,y:144.3}},{t:this.instance_1,p:{scaleX:2.246,scaleY:2.246,x:-270.4,y:129.1}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-17.1,y:177.4}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.249,scaleY:2.249,x:-239.1,y:53.4}},{t:this.instance_5,p:{scaleX:2.249,scaleY:2.249,x:-187.9,y:21.9}},{t:this.instance_4,p:{scaleX:2.249,scaleY:2.249,x:-171.3,y:145}},{t:this.instance_3,p:{scaleX:2.249,scaleY:2.249,x:-88.7,y:158.5}},{t:this.instance_2,p:{scaleX:2.249,scaleY:2.249,x:-275.4,y:144.5}},{t:this.instance_1,p:{scaleX:2.249,scaleY:2.249,x:-281.5,y:129.3}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-27.7,y:177.7}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.253,scaleY:2.253,x:-249.9,y:53.4}},{t:this.instance_5,p:{scaleX:2.253,scaleY:2.253,x:-198.7,y:21.9}},{t:this.instance_4,p:{scaleX:2.253,scaleY:2.253,x:-182,y:145.2}},{t:this.instance_3,p:{scaleX:2.253,scaleY:2.253,x:-99.3,y:158.7}},{t:this.instance_2,p:{scaleX:2.253,scaleY:2.253,x:-286.3,y:144.7}},{t:this.instance_1,p:{scaleX:2.253,scaleY:2.253,x:-292.4,y:129.5}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-38.3,y:178}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.256,scaleY:2.256,x:-260.8,y:53.6}},{t:this.instance_5,p:{scaleX:2.256,scaleY:2.256,x:-209.5,y:22}},{t:this.instance_4,p:{scaleX:2.256,scaleY:2.256,x:-192.8,y:145.5}},{t:this.instance_3,p:{scaleX:2.256,scaleY:2.256,x:-110,y:159}},{t:this.instance_2,p:{scaleX:2.256,scaleY:2.256,x:-297.3,y:144.9}},{t:this.instance_1,p:{scaleX:2.256,scaleY:2.256,x:-303.4,y:129.7}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-48.9,y:178.3}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.26,scaleY:2.26,x:-271.6,y:53.7}},{t:this.instance_5,p:{scaleX:2.26,scaleY:2.26,x:-220.2,y:22}},{t:this.instance_4,p:{scaleX:2.26,scaleY:2.26,x:-203.4,y:145.8}},{t:this.instance_3,p:{scaleX:2.26,scaleY:2.26,x:-120.5,y:159.3}},{t:this.instance_2,p:{scaleX:2.26,scaleY:2.26,x:-308.1,y:145.2}},{t:this.instance_1,p:{scaleX:2.26,scaleY:2.26,x:-314.2,y:129.9}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-59.4,y:178.6}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.263,scaleY:2.263,x:-282.4,y:53.8}},{t:this.instance_5,p:{scaleX:2.263,scaleY:2.263,x:-230.9,y:22.1}},{t:this.instance_4,p:{scaleX:2.263,scaleY:2.263,x:-214.2,y:146}},{t:this.instance_3,p:{scaleX:2.263,scaleY:2.263,x:-131.1,y:159.6}},{t:this.instance_2,p:{scaleX:2.263,scaleY:2.263,x:-319,y:145.4}},{t:this.instance_1,p:{scaleX:2.263,scaleY:2.263,x:-325.1,y:130.2}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-69.9,y:178.9}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.267,scaleY:2.267,x:-293.1,y:53.9}},{t:this.instance_5,p:{scaleX:2.267,scaleY:2.267,x:-241.6,y:22.1}},{t:this.instance_4,p:{scaleX:2.267,scaleY:2.267,x:-224.8,y:146.2}},{t:this.instance_3,p:{scaleX:2.267,scaleY:2.267,x:-141.6,y:159.8}},{t:this.instance_2,p:{scaleX:2.267,scaleY:2.267,x:-329.7,y:145.7}},{t:this.instance_1,p:{scaleX:2.267,scaleY:2.267,x:-335.9,y:130.4}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-80.4,y:179.2}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.27,scaleY:2.27,x:-303.8,y:53.9}},{t:this.instance_5,p:{scaleX:2.27,scaleY:2.27,x:-252.2,y:22.1}},{t:this.instance_4,p:{scaleX:2.27,scaleY:2.27,x:-235.4,y:146.4}},{t:this.instance_3,p:{scaleX:2.27,scaleY:2.27,x:-152.1,y:160.1}},{t:this.instance_2,p:{scaleX:2.27,scaleY:2.27,x:-340.5,y:145.9}},{t:this.instance_1,p:{scaleX:2.27,scaleY:2.27,x:-346.6,y:130.5}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-90.9,y:179.5}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.273,scaleY:2.273,x:-314.6,y:54.1}},{t:this.instance_5,p:{scaleX:2.273,scaleY:2.273,x:-262.8,y:22.3}},{t:this.instance_4,p:{scaleX:2.273,scaleY:2.273,x:-246,y:146.7}},{t:this.instance_3,p:{scaleX:2.273,scaleY:2.273,x:-162.6,y:160.4}},{t:this.instance_2,p:{scaleX:2.273,scaleY:2.273,x:-351.3,y:146.2}},{t:this.instance_1,p:{scaleX:2.273,scaleY:2.273,x:-357.4,y:130.8}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-101.3,y:179.8}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.277,scaleY:2.277,x:-325.3,y:54.2}},{t:this.instance_5,p:{scaleX:2.277,scaleY:2.277,x:-273.5,y:22.3}},{t:this.instance_4,p:{scaleX:2.277,scaleY:2.277,x:-256.6,y:147}},{t:this.instance_3,p:{scaleX:2.277,scaleY:2.277,x:-173.1,y:160.6}},{t:this.instance_2,p:{scaleX:2.277,scaleY:2.277,x:-362.1,y:146.4}},{t:this.instance_1,p:{scaleX:2.277,scaleY:2.277,x:-368.2,y:131}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-111.7,y:180.2}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.28,scaleY:2.28,x:-335.9,y:54.2}},{t:this.instance_5,p:{scaleX:2.28,scaleY:2.28,x:-284,y:22.3}},{t:this.instance_4,p:{scaleX:2.28,scaleY:2.28,x:-267.1,y:147.2}},{t:this.instance_3,p:{scaleX:2.28,scaleY:2.28,x:-183.4,y:160.8}},{t:this.instance_2,p:{scaleX:2.28,scaleY:2.28,x:-372.7,y:146.6}},{t:this.instance_1,p:{scaleX:2.28,scaleY:2.28,x:-378.8,y:131.2}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-122.1,y:180.5}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.284,scaleY:2.284,x:-346.4,y:54.3}},{t:this.instance_5,p:{scaleX:2.284,scaleY:2.284,x:-294.5,y:22.3}},{t:this.instance_4,p:{scaleX:2.284,scaleY:2.284,x:-277.6,y:147.4}},{t:this.instance_3,p:{scaleX:2.284,scaleY:2.284,x:-193.8,y:161.1}},{t:this.instance_2,p:{scaleX:2.284,scaleY:2.284,x:-383.3,y:146.8}},{t:this.instance_1,p:{scaleX:2.284,scaleY:2.284,x:-389.5,y:131.4}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-132.4,y:180.8}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.287,scaleY:2.287,x:-357,y:54.4}},{t:this.instance_5,p:{scaleX:2.287,scaleY:2.287,x:-304.9,y:22.4}},{t:this.instance_4,p:{scaleX:2.287,scaleY:2.287,x:-288,y:147.6}},{t:this.instance_3,p:{scaleX:2.287,scaleY:2.287,x:-204.1,y:161.4}},{t:this.instance_2,p:{scaleX:2.287,scaleY:2.287,x:-393.9,y:147.1}},{t:this.instance_1,p:{scaleX:2.287,scaleY:2.287,x:-400.1,y:131.6}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-142.8,y:181.1}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.291,scaleY:2.291,x:-367.5,y:54.5}},{t:this.instance_5,p:{scaleX:2.291,scaleY:2.291,x:-315.4,y:22.4}},{t:this.instance_4,p:{scaleX:2.291,scaleY:2.291,x:-298.4,y:147.8}},{t:this.instance_3,p:{scaleX:2.291,scaleY:2.291,x:-214.4,y:161.6}},{t:this.instance_2,p:{scaleX:2.291,scaleY:2.291,x:-404.5,y:147.3}},{t:this.instance_1,p:{scaleX:2.291,scaleY:2.291,x:-410.7,y:131.8}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-153,y:181.4}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.294,scaleY:2.294,x:-378,y:54.5}},{t:this.instance_5,p:{scaleX:2.294,scaleY:2.294,x:-325.8,y:22.4}},{t:this.instance_4,p:{scaleX:2.294,scaleY:2.294,x:-308.9,y:148}},{t:this.instance_3,p:{scaleX:2.294,scaleY:2.294,x:-224.7,y:161.8}},{t:this.instance_2,p:{scaleX:2.294,scaleY:2.294,x:-415.1,y:147.4}},{t:this.instance_1,p:{scaleX:2.294,scaleY:2.294,x:-421.3,y:131.9}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-163.3,y:181.7}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.297,scaleY:2.297,x:-388.6,y:54.6}},{t:this.instance_5,p:{scaleX:2.297,scaleY:2.297,x:-336.3,y:22.5}},{t:this.instance_4,p:{scaleX:2.297,scaleY:2.297,x:-319.3,y:148.3}},{t:this.instance_3,p:{scaleX:2.297,scaleY:2.297,x:-235,y:162}},{t:this.instance_2,p:{scaleX:2.297,scaleY:2.297,x:-425.7,y:147.7}},{t:this.instance_1,p:{scaleX:2.297,scaleY:2.297,x:-431.9,y:132.2}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-173.6,y:182}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.301,scaleY:2.301,x:-399,y:54.8}},{t:this.instance_5,p:{scaleX:2.301,scaleY:2.301,x:-346.7,y:22.6}},{t:this.instance_4,p:{scaleX:2.301,scaleY:2.301,x:-329.6,y:148.5}},{t:this.instance_3,p:{scaleX:2.301,scaleY:2.301,x:-245.2,y:162.3}},{t:this.instance_2,p:{scaleX:2.301,scaleY:2.301,x:-436.1,y:147.9}},{t:this.instance_1,p:{scaleX:2.301,scaleY:2.301,x:-442.4,y:132.4}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-183.7,y:182.3}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.304,scaleY:2.304,x:-409.4,y:54.8}},{t:this.instance_5,p:{scaleX:2.304,scaleY:2.304,x:-357,y:22.6}},{t:this.instance_4,p:{scaleX:2.304,scaleY:2.304,x:-339.9,y:148.7}},{t:this.instance_3,p:{scaleX:2.304,scaleY:2.304,x:-255.4,y:162.6}},{t:this.instance_2,p:{scaleX:2.304,scaleY:2.304,x:-446.6,y:148.2}},{t:this.instance_1,p:{scaleX:2.304,scaleY:2.304,x:-452.8,y:132.6}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-193.9,y:182.6}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.307,scaleY:2.307,x:-419.7,y:54.9}},{t:this.instance_5,p:{scaleX:2.307,scaleY:2.307,x:-367.3,y:22.6}},{t:this.instance_4,p:{scaleX:2.307,scaleY:2.307,x:-350.2,y:148.9}},{t:this.instance_3,p:{scaleX:2.307,scaleY:2.307,x:-265.5,y:162.8}},{t:this.instance_2,p:{scaleX:2.307,scaleY:2.307,x:-457,y:148.4}},{t:this.instance_1,p:{scaleX:2.307,scaleY:2.307,x:-463.2,y:132.8}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-204.1,y:182.9}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.311,scaleY:2.311,x:-430.1,y:55}},{t:this.instance_5,p:{scaleX:2.311,scaleY:2.311,x:-377.6,y:22.7}},{t:this.instance_4,p:{scaleX:2.311,scaleY:2.311,x:-360.5,y:149.2}},{t:this.instance_3,p:{scaleX:2.311,scaleY:2.311,x:-275.7,y:163.1}},{t:this.instance_2,p:{scaleX:2.311,scaleY:2.311,x:-467.4,y:148.6}},{t:this.instance_1,p:{scaleX:2.311,scaleY:2.311,x:-473.7,y:133}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-214.2,y:183.2}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.314,scaleY:2.314,x:-440.5,y:55.1}},{t:this.instance_5,p:{scaleX:2.314,scaleY:2.314,x:-387.8,y:22.7}},{t:this.instance_4,p:{scaleX:2.314,scaleY:2.314,x:-370.7,y:149.4}},{t:this.instance_3,p:{scaleX:2.314,scaleY:2.314,x:-285.8,y:163.3}},{t:this.instance_2,p:{scaleX:2.314,scaleY:2.314,x:-477.8,y:148.8}},{t:this.instance_1,p:{scaleX:2.314,scaleY:2.314,x:-484.1,y:133.2}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-224.3,y:183.5}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.317,scaleY:2.317,x:-450.7,y:55.2}},{t:this.instance_5,p:{scaleX:2.317,scaleY:2.317,x:-398,y:22.8}},{t:this.instance_4,p:{scaleX:2.317,scaleY:2.317,x:-380.8,y:149.6}},{t:this.instance_3,p:{scaleX:2.317,scaleY:2.317,x:-295.8,y:163.5}},{t:this.instance_2,p:{scaleX:2.317,scaleY:2.317,x:-488.1,y:149}},{t:this.instance_1,p:{scaleX:2.317,scaleY:2.317,x:-494.4,y:133.4}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-234.3,y:183.8}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.32,scaleY:2.32,x:-461,y:55.3}},{t:this.instance_5,p:{scaleX:2.32,scaleY:2.32,x:-408.2,y:22.8}},{t:this.instance_4,p:{scaleX:2.32,scaleY:2.32,x:-391,y:149.9}},{t:this.instance_3,p:{scaleX:2.32,scaleY:2.32,x:-305.9,y:163.8}},{t:this.instance_2,p:{scaleX:2.32,scaleY:2.32,x:-498.5,y:149.3}},{t:this.instance_1,p:{scaleX:2.32,scaleY:2.32,x:-504.7,y:133.6}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-244.3,y:184.1}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.324,scaleY:2.324,x:-471.2,y:55.3}},{t:this.instance_5,p:{scaleX:2.324,scaleY:2.324,x:-418.4,y:22.8}},{t:this.instance_4,p:{scaleX:2.324,scaleY:2.324,x:-401.2,y:150}},{t:this.instance_3,p:{scaleX:2.324,scaleY:2.324,x:-315.9,y:164}},{t:this.instance_2,p:{scaleX:2.324,scaleY:2.324,x:-508.8,y:149.5}},{t:this.instance_1,p:{scaleX:2.324,scaleY:2.324,x:-515,y:133.8}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-254.4,y:184.4}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.327,scaleY:2.327,x:-481.4,y:55.5}},{t:this.instance_5,p:{scaleX:2.327,scaleY:2.327,x:-428.5,y:22.9}},{t:this.instance_4,p:{scaleX:2.327,scaleY:2.327,x:-411.2,y:150.3}},{t:this.instance_3,p:{scaleX:2.327,scaleY:2.327,x:-325.8,y:164.3}},{t:this.instance_2,p:{scaleX:2.327,scaleY:2.327,x:-519,y:149.7}},{t:this.instance_1,p:{scaleX:2.327,scaleY:2.327,x:-525.3,y:134}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{x:-264.3,y:184.7}},{t:this.instance_9,p:{scaleX:1.55,scaleY:0.027,x:462.2,y:480.6}},{t:this.instance_8,p:{scaleX:1.825,scaleY:0.027,x:239.1,y:480.6}},{t:this.instance_6,p:{scaleX:2.33,scaleY:2.33,x:-491.5,y:55.5}},{t:this.instance_5,p:{scaleX:2.33,scaleY:2.33,x:-438.5,y:22.9}},{t:this.instance_4,p:{scaleX:2.33,scaleY:2.33,x:-421.2,y:150.5}},{t:this.instance_3,p:{scaleX:2.33,scaleY:2.33,x:-335.7,y:164.5}},{t:this.instance_2,p:{scaleX:2.33,scaleY:2.33,x:-529.1,y:149.9}},{t:this.instance_1,p:{scaleX:2.33,scaleY:2.33,x:-535.4,y:134.2}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(532.9,386,1189.7,514.2);
// library properties:
lib.properties = {
	width: 1080,
	height: 786,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/Sound1atframe0wav.ogg", id:"Sound1atframe0wav"},
		{src:"sounds/Sound2atframe38wav.ogg", id:"Sound2atframe38wav"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;