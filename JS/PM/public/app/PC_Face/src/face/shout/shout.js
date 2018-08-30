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



(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(86.7,105.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A9838").s().p("AgmAWIAmgeQAZgWAOgKQgEASgYAXQgfAggFAIQgKgGgDgNg");
	this.shape_1.setTransform(73.3,137.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4AF95").s().p("AAGDOQgMgOgyhQQgkg6glgYQAQgsgbgtQgmhCgDgMIBfgmQA4gWAmgOIChFPQAMAdABAXQgUAKgLgTQgMgXgLAAQgDAGAHALQAHAMgDALQgRAFgHgOQgJgSgFgCQgJAEAHASQAIASgRADIgJgYQgIgMgNAGIALAUQAGALgLAHIgLgUQgKgPgMAFQgEAHALAIQALAIgEANg");
	this.shape_2.setTransform(120.1,187.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#502785").s().p("Ah/AwIAEgeIAdgLQAAAPACAGQACAJAHADQAIgEgDgNQgDgSABgDIAagKQAPgGANgCQABALACAEQADAGAIAAQAFgFgDgJQgFgMAAgDIAYgIQAPgHAJgBQAAATAFACQAJABAAgNQAAgPACgDIANgEQAIgDAEgDQAGADAFALQAGAMAEADQAMgDgGgMQgJgQABgEQARgOAKAQQAIALADAZQg0AShPAfIiBAzQgCgIAEgRg");
	this.shape_3.setTransform(108.1,167.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4AF95").s().p("Ag2ByIgnhRQgCgHADgGIAEgJQgWg5gIgfQgPg5ASgkIB1gRIB8gFIhLC8QgrBugUBXQgTgbgXg0g");
	this.shape_4.setTransform(131.7,163.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A9838").s().p("AgLASIgEgMIAPgNIAOgQQAJAJgYAmQgHAAgDgGg");
	this.shape_5.setTransform(72.9,141.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#502785").s().p("AiQAQIAJgSIAYACIARAIQADAAAAgGIgBgJIAugDQgBAOAKAEQAJABgBgKQgCgNACgBIAagBIAWgFIADAQQADAIAEADQAJgBgBgKIgCgSIAzgDIAAAXQACAKAMgBQAFgGgDgKQgDgPABgEIArgFIAHAcQAEAQgDAJIiZgEIiVAUQAAgJAHgKg");
	this.shape_6.setTransform(134,141.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A9838").s().p("AgIAAIAKgbQAJAEADAPIAFAXIgSAIIgTAGQABgOAJgPg");
	this.shape_7.setTransform(76.7,140.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3A9838").s().p("AgVgBQgFgcANgRIAIAAQADARAKAZIAQApIgiAKg");
	this.shape_8.setTransform(80.8,137.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3A9838").s().p("AgEAAIA4g9QADANgEAeIgHAwQgVAFgdALIgvARQAQgbAhgkg");
	this.shape_9.setTransform(98.1,131.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3A9838").s().p("AgEAAIAfgoQABAagQAXQgOAWgYAJQACgRAUgXg");
	this.shape_10.setTransform(112,126.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A9838").s().p("AiNAwQgNgtAagZQALANAKAoQAKAnANANQABgTgWg7QgRgxANggQgIgBgDAIIgFAOIg+A6QgnAjgVAaQAMgCAOgMIAugsQANgNAKgHQgFAjgoAgIhFA0QgagSAYgfIAtg0QAQgUAMgYIATgqQDygvDXAMQgKAQgZAWQgbAYgJALQgDgDABgQQAAgOgGgCQgZAPgYAhIgoA5QgCAGAKACQAIABgDACQgEAIgOAEIgZAHIAHg7QAGglgCgUQgjAfgrAwIhGBWQgJABgSAHIgcAIg");
	this.shape_11.setTransform(95.5,128.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDgFIAKAAIgFAHIgIADg");
	this.shape_12.setTransform(127.6,112.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#502785").s().p("AkcCqIhDiDQAigRAvgOICfgxQAvgSAcgXQAWgUAjgrQAjgsAVgSQAxgqBAgXQBXgeAxArQAhAdgJBMIgSB+IkbAiQAFgWAWg0QAUguACgcQgNAJgKAWIgtB1QADAigTAKIgMgxQgHgbgMgNQgEAXALAhIATA5IAgB1IjzBfQgpgogphMg");
	this.shape_13.setTransform(115.4,139.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiIAYQAwgKAcgLQAmgOAYgUQAhAaBmgNQgLAVgzAAQgeAAgmgSQgKADgbAQQgaAPgOAFQgYAIgRAAQgQAAgJgIg");
	this.shape_14.setTransform(110.5,102.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHAJIgCgHQgCgDABgFQAFgEAGABQAHACADAEQgBANgLAAIgGgBg");
	this.shape_15.setTransform(97,94.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEAKIgEgGQgCgEAAgCQADgHAHgBQAIAAADAIQABANgNAAIgDgBg");
	this.shape_16.setTransform(122.5,92.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#502785").s().p("AhSB5QgRgfgOgSQANgDAaAIQAcAIARgCIALgJQgDhBgThDQgJglgdhPQAIALApAZQAjAWACAVQABAKgJAYQgJAXAEAWQAFAWAfAMQAjANAHAOQAGAKABATIABAhQAIALAZgCIAAAiIiqAZg");
	this.shape_17.setTransform(83.2,101);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F4AF95").s().p("AjNipQAkAQArAKQAvALArABIAQgBQAKgBADAFQgEAKgJgFIgQABQACAYAYgJQAYgIgDgSQASgHALAMQAOAOAMAAQAJgBgCgNIgCgNIA1gOQAdgJAQgNQAiA9ADBsQADBmgbBMQiCgIiZAQQgPjahZiBgAgUAtQgdALgvAKQASAQAvgQQAPgFAZgPQAbgRALgDQAmATAeAAQAyAAAMgWQhmANgigaQgYAUglAPgAhogpQgBAFACAEIACAHQARAEABgRQgDgEgHgCIgEAAQgEAAgDADgACWg5QgBADADAEIADAGQASACgCgPQgCgIgIAAQgIABgDAHg");
	this.shape_18.setTransform(106.5,98);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAOQgHhUgZg8QADgIANgOQALgLADgLQAaAUACA6QACAygPArIALAUQAHALABAIQADASgMAbQgOAjgBAKQgCAKACAUQgBAQgPADQAPhKgHhXg");
	this.shape_19.setTransform(128.3,92.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E6211D").s().p("AgTgLIAngHQgCAcgGAIQgZgBgGgcg");
	this.shape_20.setTransform(109,77.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgegEIgRAAQgJAAgFgEIgCgDIABgFIA/gFQApgHAVgIQACAJgIAFIgQAGQAHAughAGIgGABQgbAAgMgpgAgNgEQAGAcAZABQAGgIACgcg");
	this.shape_21.setTransform(108.4,76.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABjClQgCgcgGgIQgIgOgigOQgegMgEgUQgCgRAJgVQALgYgBgKQgBgRgcgVQgggXgOgMQhCg6gFg7IADACQBIAWAwA5QArAyAdBPQATA3AHAfQALAzgFAoQgMgHgCgWg");
	this.shape_22.setTransform(82.5,91.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#502785").s().p("AABAAIgWgQQAHgEAMAEIASAGQAHAPgBAOg");
	this.shape_23.setTransform(67.5,73);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4AF95").s().p("AACCmQgBghgPgFQgKAAgHAPQgHAPgIACQgIgKACgQQACgUgCgFQgDgNgVgOIhBguQgRgMgOgFQAHg9gDg9QgDhBgOgwQBCAJBBA9QAkAkA+BMIAjAmQATAXAMAJQAPAKAiALQAaANABAhIgggKQgTgIgOgBQgEAGAAAkQAAAegMAHQgFgEACgVQACgTgIgCQgIAFgBAgQgBAdgMAEQgPgBADgWQACgbgFgEQgLAFgBARIgDAbQgKAhgbACQgEgIgBgrg");
	this.shape_24.setTransform(153.6,89.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F4AF95").s().p("AEtC9QgmguhUgtQhfgvgrgbQgwAXiFBIQgCAHATAUQAQARgJASQgWAGgTgTQgYgXgLgCQgXgEggAVQgiAWgZgBQABgPANgZQAMgWgBgOQgLgCggANQgcAMgQgJQgGgQAagNQAagOgDgOQgCgNgeAAQgfgBgCgNQgDgVAkgCQAngDAEgLQAHgWgdgLQgggLAAgIQAZgDAjAJIA5AQQBVhDAwgiQBUg8BCgKQAggFAqATIBEAgIA1ARQAhAKARALQAnAaAnB1QAhBiADBUg");
	this.shape_25.setTransform(40.6,87.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#502785").s().p("AABCEQAPgzgYgcQANgzgEgzQgEg8gdgWQANgpgDgiIANgCIAJgHQAnBQgGCLQgHCGgoBNQgDgUASg/g");
	this.shape_26.setTransform(132.1,86.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#040000").ss(0.5,1,1).p("AgLgVQAHACAFALIALATIgSALIACgVQAAgLgHgLg");
	this.shape_27.setTransform(105.5,60.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],-0.7,-0.1,0,-0.7,-0.1,1.6).s().p("AgEABQAAgLgHgLQAGACAGALIALATIgSALg");
	this.shape_28.setTransform(105.5,60.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#040000").ss(0.5,1,1).p("AAPACQgHAPgRgFQgLgOAPgIQAPgIAFAUg");
	this.shape_29.setTransform(98.6,60.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,1.3).s().p("AgJAMQgLgOAPgIQAPgIAFAUQgGALgLAAIgHgBg");
	this.shape_30.setTransform(98.6,60.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#040000").ss(0.5,1,1).p("AgxgRIBDgWQgKAQALAXQALAZAUAEQgcATgbgOQgcgNgQgmg");
	this.shape_31.setTransform(94.2,62.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0.2,0.5,0,0.2,0.5,4).s().p("AgFAiQgcgNgQgmIBEgWQgLAQAMAXQALAZATAEQgQALgQAAQgMAAgLgGg");
	this.shape_32.setTransform(94.2,62.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhQgBQgCgEgJACIgLgBQgEgHADgBIAKgDIgSgMQgLgJgBgKQAJgCANAMQANAMAHgBIgKgLQgIgIACgGQAHgEAIAJIANANQAEgCgFgGQgFgHADgCQAIgDAIAKIANAMQASgBAhgQQAhgOAQAAQATABASAWIAeAqQgyA1hAAFIgIAAQg+AAgUg/gAhDgIQAQAmAbAOQAcAOAcgTQgUgFgLgYQgKgYAJgPgABZgCIgBAUIATgLIgLgTQgHgLgHgCQAHALAAAMgAAUgSQgPAIALAOQARAFAIgOQgEgPgJAAQgEAAgEACg");
	this.shape_33.setTransform(96,61.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#502785").s().p("AgbAaIgHgmQgEgYADgQQAVArAzA+g");
	this.shape_34.setTransform(60.5,67.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgKAhQAPgGADgEIgHgnQgEgeAWAAQgHAQADAWIAJAkQgZASgWABQABgJAMgFg");
	this.shape_35.setTransform(109.5,67);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKAAQADgIAHAAQAGAAAFAGIgEALQgOAAgDgJg");
	this.shape_36.setTransform(119.5,58.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#040000").ss(0.5,1,1).p("AAZgcQgPAIgEAUQgFAUAHANIgggOQANghANgSg");
	this.shape_37.setTransform(116,59.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0.3,-0.3,0,0.3,-0.3,2.5).s().p("AgYATQANggANgTIAXAFQgPAHgEAUQgFAUAHANg");
	this.shape_38.setTransform(116,59.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#040000").ss(0.5,1,1).p("AAOgSQAAATgWAXIAEgZQAAgOgJgHQAEgCAJACg");
	this.shape_39.setTransform(124.4,59.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],-0.6,-0.1,0,-0.6,-0.1,2).s().p("AgEgBQAAgOgJgGQAEgCAJACIAOADQAAATgWAWg");
	this.shape_40.setTransform(124.4,59.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhbAeQAEgTAKgUQAKgVAMgMQAUAAAtALQAnAFAOgbQAGABgBAGQgCAHgEACQADADAJgHQAKgIAIAFQgCAHgGAEIgKAGIAEAKQgDAEgGABIgKABQgKA3gsAJQgHABgIAAQgjAAgugYgAhMAWIAgANQgGgMAEgUQAFgUAOgIIgXgEQgOASgMAhgAARgPQAJAHAAANIgDAZQAWgWABgTIgPgEIgIgBIgGABgAgcgDQAEAJAOAAIAFgLQgGgHgGAAQgHAAgEAJg");
	this.shape_41.setTransform(121.3,59.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F4AF95").s().p("AgEAdIgPgbQAMgCgCgQQgDgZABgGQARALAJAdQAHAagEAdQgOgCgIgRg");
	this.shape_42.setTransform(71.6,59.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F4AF95").s().p("AgHgTIAPAAIAAAnQgNgSgCgVg");
	this.shape_43.setTransform(68.3,55.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAJAaQgqgVgIgjIAlAXQAWAJAWgGQAIAjgUAAQgHAAgMgFg");
	this.shape_44.setTransform(116.7,50.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F4AF95").s().p("AAGAQIgZgDIgFgNQgCgJABgJIAPgFIARAAQAHAHAFAOIAHAag");
	this.shape_45.setTransform(69,51);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgjAHQAAgOgFgFIBQgNQgcAZgrAaQgFgFABgOg");
	this.shape_46.setTransform(103.3,51.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F4AF95").s().p("AgggPIgRgCQgJgCgEgEIgCgEIACgFIA/AFIA/gFQABAKgIAEIgRADQgBAvghAAIgBAAQggAAgFgvg");
	this.shape_47.setTransform(108,75.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F4AF95").s().p("AgKAhIASgKIgHgnQgEgeAWAAQgHAQADAWIAJAkQgZASgWABQABgJAMgFg");
	this.shape_48.setTransform(111.7,65.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F4AF95").s().p("AhKBKQgEgTACgaQACgZAGgQQAUgIAxgIQApgLADggQAHgCABAHQABAHgEAEQAFACAGgLQAHgMAJACQABAIgEAGIgIAKIAJAIQgCAGgFADIgKAFQAMA8goAaQgbASguAAQgPAAgQgCg");
	this.shape_49.setTransform(122.7,59.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F4AF95").s().p("AgcBJQhAgeAOhFQgBgEgIgDQgJgCgBgFQABgHADABIAKABIgKgTQgGgNAFgJQAJACAFARQAFARAIACIgFgPQgDgJAFgFQAIAAADAMIAGARQADABgBgJQgBgIAEAAQAIABACAMQADAOADADQAQAHAlAEQAkADANAIQARAKAFAZIAGA1QggALgeAAQgiAAgegOg");
	this.shape_50.setTransform(97.3,59.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F4AF95").s().p("AhJDfQgugJgjgPQgrgTgRgZQgSgbgNg3IgShiQgZiQgHg2QgBgIADAAIEgAdQCtALBvgeQAaBLgNBNQgDAXgQAlQgQAmgDAPQgCAMABAVIgBAeQgSBNhnAgQg2AQg8AAQgrAAgvgJg");
	this.shape_51.setTransform(103.1,60.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#248D3A").s().p("AgKAGQgOgGgGgGIA9gLIgTAig");
	this.shape_52.setTransform(58.7,31.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#248D3A").s().p("AgiAlQgKgIgJgCQABgKAKgPQAJgOABgLIAegJIgYA4IADAEIACAFQAOgJAIgXIAPgmIAmgLQgcAbgNAQQgUAZgIAdg");
	this.shape_53.setTransform(66.7,32);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#248D3A").s().p("AgSABQAKgRABgJIATARQALAJAEALIg1AOQgBgJAJgQg");
	this.shape_54.setTransform(59.6,27);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#248D3A").s().p("AgQABIgUgRQAhgCAKACQAcAEACAQIgQAIIgRAGQgJgEgLgNg");
	this.shape_55.setTransform(69.2,24.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#248D3A").s().p("AgRAEQgSgOgFgSQAagGAWATIAgAjQgDAFgJACIgRAEg");
	this.shape_56.setTransform(63.4,24.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#248D3A").s().p("AgMABIAVgFIAHACIAGADIgiADIgDABQgOAAARgEg");
	this.shape_57.setTransform(97,19.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#248D3A").s().p("AgDAIQgQgDgDgJQANgLAOAGQAPAGADAPg");
	this.shape_58.setTransform(102.6,19.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#248D3A").s().p("AgVAAIArgPQgJAUgLAIQgDADgEAAQgJAAgHgQg");
	this.shape_59.setTransform(107.1,17.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#502785").s().p("AhTgOQATgdAtgMIBMACQAlARAAAsQguABgwAQIhPAfQgaglAWghg");
	this.shape_60.setTransform(82.8,19.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#248D3A").s().p("AgKgUQAIADAJAKIARANQgIAFgOAFIgZAFg");
	this.shape_61.setTransform(105.7,14.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#248D3A").s().p("AgDAAIAPgkIAEABIAEACIgLAsQgJAXgTADQAEgMAMgZg");
	this.shape_62.setTransform(101.5,13.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#248D3A").s().p("AAAADQAYgcALgbIAGAFQgDASgOAdIgYAwIgoAFg");
	this.shape_63.setTransform(97.6,12.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#502785").s().p("Ag0AeQAUgWAEgOQAEgLgEgRQgEgSAEgOQAJAFAEAPIAGAYQAoAPAFACQAWAMAAAbQgyAHg0AZQgVgRANgTg");
	this.shape_64.setTransform(79.3,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173.3,210.4);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6211A").s().p("AgbgXQAWgiApAKQANAQgPAbQgRAdAHAUQgNgEgVAEIgdAFQgHgsATgdg");
	this.shape.setTransform(117.2,50.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0gKQATgzAigGQAWgEARAIQASAIACATQACARgPAZQgPAZAGAYIgoAFQgcABgMAIQgdgdATgygAgbgYQgUAeAHAsIAegGQAUgEAOAEQgHgUAQgdQAPgagNgRQgJgCgJAAQgbAAgRAag");
	this.shape_1.setTransform(117.4,51.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4AF95").s().p("AhWCqQgTgEAAgSQABgUAggHIAOgCQAGgCAAgFQABgMgXAEQgTAEgIAGQgUAMAAAaIgTACQgMgBgCgGQgEgIAEgKQAEgJAGgFIANgGQAIgEAAgFQABgKgNADQgJACgKAGQgPAKgFAbQgWAEgFgIQgBgKAEgHIAOgKIARgFQALgDAAgHQAAgJgNACIgTAGQgdAMgEAbIgMACQgHgBgBgEQgCgDAGgJIAKgMIAMgKQAIgGgCgHIgQgBQgJAGgHAJQgHAHgNAUIgJgCIgGgEQgEgJAMgNIATgSQAhgkAlgdIAqgZIAigiIBWh1IEngEIiJDeIgKANIgPAEIgQABQg+AQg2AsIgUARIgRASQgKAGgMAAIgLgBg");
	this.shape_2.setTransform(68.8,194.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1596B9").s().p("Ai0gEQAHgNADgBIAqABQAAAFgIAKQgIAIABAHQABAHAHABQAGAAAEgGIAMgXQAFgIADgBQAGgCATACIgGAQQgFAKACAHQAKAKAJgSIANgbIAzAAIgBAgQAEAGAEgBQAIAAABgPQABgUABgDIA0gCIABAUQABALAIAAQAIABABgMIAAgWIAZgBIACAQQACAJAHAAQAHAAACgIIgBgTIBQgKIgwBEQi8AGixABQAGgNAUgdg");
	this.shape_3.setTransform(84.4,172.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4AF95").s().p("AByC7Ig4gGIhnAPIgkACQgYgDgIgOIgIgVQgMgigVghQgPgXgcgjQgxg7gfgfIgOgPIgHgHQgEgEgBgEIALgKQBNgtATgJQAWgMBggoIADgBQAFABAOAVQA3BIA1BAIAKALQAIAIgBADIgRgCQgKAAAAAHQAAAHALADIAQADQARAEAmARQAdANBIApIAZAOIApAHQARAJgFARIgFAHIgGACQgCAAgCgHIgDgHQgFgJgHgDIgVgBIgGADQgCADABAFQABAGAGAAIAJgBQAEABAEAGIAFAKIAAALQgCAHgEAAQgCgBgCgFIgDgGQgMgSgPgIIgUgGQgOgBgBAJQAAAGALADIASAFQAPAJAGARQAFAUgWADQgJgmgggCIgkAGQgIADgGAEQgJAFAAAFIADAFIAEADIAJgCIAKgFQAKgFAMgBQAQgCAIAGQAFADAEAKQADAMgEAIQgFAJgVABg");
	this.shape_4.setTransform(188.7,180.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1596B9").s().p("AiMBbIgLgkQAYgSAJgEIAIAOQAFAKAHABQAPAAgLgXIgFgGIgCgHIAFgFIAOgIQAEgEADABIAKALQAGALAFABQAIABACgIIgCgJIgEgFIgIgMIAJgHIAKgFIAIgHQAHgFADAAQAEAAAHAHQAGAHAEABQAKABAAgKIgFgJIgHgIIASgNQAFgEADABIALAJQAGAJAFAAQAIAAABgGQACgHgHgGIgJgKIA1ghQAEgCAFAFIAxAvQi4BHhmBPg");
	this.shape_5.setTransform(167.5,162.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3A9838").s().p("AgIgNIAYAYIgfACQABgGAGgUg");
	this.shape_6.setTransform(109.5,145);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1596B9").s().p("AkMCeQACgFAKgRQA7hgAhgtIAYABQAQACAIgCIAJgHIBziRIACgCIABABIgYBqQgDAKACAFQACAGAKgBIARgDQCHgTB3gCIgEAHIgGAEIggAiQgsAxg1BJIgSAZIhMAKIihAKQg4ACgoAAIgvgBg");
	this.shape_7.setTransform(95.3,153.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3A9838").s().p("Ag8AvIBKhsIACAAQAgBIANAzg");
	this.shape_8.setTransform(139.3,141.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1596B9").s().p("AhmB6IhwhyIgFgHQAugBA+AMIASAEQAMACAFgCQAEgCAKgRQAMgWAbgjIAqg1IAIgJIAFgJQABgGgDgJIgIgOIgLggQANALAKAQIALAQQAGAJAGABIAUAAIALAIIALAKQAdAeAjAuIA4BPIgPALIgPAJQiSBYhIAyQgdgZgsgtg");
	this.shape_9.setTransform(154,147.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3A9838").s().p("AgnAaIAMhEIADAAIAxA+QANARACAGQgfgLgwgGg");
	this.shape_10.setTransform(167.9,129.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A9838").s().p("AgcAVIAUgiQAIgVABgYIADAAIABALIgCAKIgKAmQgLAbAPAAQAGAAAEgLIAQg1QAGABAAAIIAAAOQgBAZgNAtIgPACg");
	this.shape_11.setTransform(160.4,126.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A9838").s().p("Am8C1IA4hMQAEgHAFgCQADAlALAVQANAYAQgEQAHgCAAgIQAAgFgEgCIgJgEQgOgLgEg0IgCgSIAFgJIAIgIQAGAyAVAkIAFAIQADADAEAAQAQAAgOgZQgOgYgIg0QgEgcAPgHIAZBNQAHATAIAAQALABgDgPIgIgVQgNgigNgvQAEgHAKgFICBgxICdgwQC0gyDEgUIAPgBIAIAEIArAjIAFAGQAGAWgHAYQgGAUgOASIgUgVIgJgMQgHgIgGAAQgLAAADAPIAlBXIAEANIgEAHIgHAHIg/BRIgEAIIgHAGIgphuIBVANQALgBgBgKQgCgKgugGIgrgEIgMgDQgFgCgEgOIAoACQAXACANAGIAHAEIAIABQAGgBABgHQABgNgggHIhNgHIgIgNIgHgPQAsACAiAMIARAHQAMADABgJQABgKgVgIQgdgLhGgGIgbgsQgHgKgFAAQgIAAgCAHQgBAFAGAKIARAXQAFAIAAAFQAAAGgTASIh9CaQgHAIAAAFQABAJAIAAQAFABAHgIICNitIAGAHIAEAJIgFAKIhgCCQgFAHABADQAAAEADADIAGACQAGAAAKgPIBah6IAJAOQAGAJgBAHIgHASIhSBxQhGgFhhAHIgVABQAAAAgBAAQAAgBAAAAQAAgBABAAQAAgBAAgBIADgHIgFgKIgQgSQgFgGgBgEQgBgFAFgJIAFgOIAjArQAJAMAFAAQAIgBABgHQABgEgFgHIgug8IAMgiIAVAaIAKAOQAIALAGAAQADAAADgDIAEgGQAAgEgEgFIglgvQgEgFgBgDQAAgDADgHIAIgcQACgMgJABQgGAAgDAGIgNAkIhdA0IgRAIQgKAGAAAGIABAGIAFAEIAIgBIAGgEIBMgrQAHgFAGgBIgKAbIhaA2QgJAGAAAFQgBAMAMgDIARgJQArgbASgIIgIAXIhBAhQgFAEAAAEQAAAMAPgEIAvgWIgJAiIhjAMIAfiEIACgPQAAgHgHgBQgGgBgHAIIiPCxg");
	this.shape_12.setTransform(114,132.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4AF95").s().p("AhdCWQgLgDgagTQgWgRgUABIgcAEQgSACgEgJQgDgHAKgNQANgPAWgBIAdADIAWgEQALgFABgJQAAgKgQgIIgxgVQgTgIgDgEQgFgKAHgMQAFgKAJgCQAJgCAbAIIBPAXQALABABgGQABgGgLgJIgOgMQgWgSgagLQgagNAJgUQADgHAKgEIAWgBIAXAIQANAGAaATIASANIAYAEQAOgBADgHQAFgJgHgMIgdgpQgJgOABgPQAZgCAgAbQAlAfAVAvIATAzQAFAJAKAGQALAHALACIAjABQAVAAAJAFQALAGAEALQAFAMAAALQAAANgIADIgPgCIgPgGIgXgBQgMACgIAFIgOAKIgdATQgeATglgDIgagFQgFABgGAGIgKAKIgPAIIggAFg");
	this.shape_13.setTransform(24,122.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1596B9").s().p("AgIBEIAIgOQAJgQABgaIgGgiQgGgXABgNIAHgcQAMBFgLBnIgRABQgDgLAFgIg");
	this.shape_14.setTransform(151.3,103.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLgBQABgHAIgCQAJgDAEAKQAFAIgIAGIgNABQgIgDACgKg");
	this.shape_15.setTransform(110.6,92.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFAtIAEgiQABgcgJgWIgHgNQgDgJAJgCQAKgDAIAVQAIATABAUQABAQgEAgIgDAPQgCAHgFABIgBAAQgJAAABgUg");
	this.shape_16.setTransform(128.8,91);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBAMQgKgBAAgLQAAgJAKgCQANgDAAAOQAAAMgLAAIgCAAg");
	this.shape_17.setTransform(138.3,84.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F4AF95").s().p("ADKDkIgGgLIhViCIBjgxQAKgFgCgHIgaABIhIAkQglASg6AfQgwAagrAZIhZA3IgKgQIgNgMQgMgGgYgBIglgCQgRgCgJgSIgNgiQgFgPgMgWIgHgJQgEgGAAgDQAAgEATgUQAqgtAWgTIB0hjQApggAigWIBrhCIABABQBbBABGBzQBCBsAcCKIhhAoIgOAFg");
	this.shape_18.setTransform(63.1,105.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1596B9").s().p("AAHAhIgGgIIgHgHQgFgEgBgFQgBgDACgLIABgTIgBgNQAEAEAFANIAQA7g");
	this.shape_19.setTransform(149.2,83.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4AF95").s().p("AgLAEIACgMIgEgHIARABQAIAEACAIQACAKgIAHIgSABQgDgEACgIg");
	this.shape_20.setTransform(120.9,78.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ABgCdQgHgRgKgHIgVgLIgigIQgUgFgGgLQgOgUAPg5IAFgRQADgJgCgJQgDgIgHgFIgigQIgggJQgfgLgUgYQgWgagFgjQgDgVAGgwIA5gJQAFgBAIAIIAMAMQA+BAA9BxQAOAYAPAiIAXA9QAcBJAMA8IgNAEIgOACg");
	this.shape_21.setTransform(96.4,97.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1596B9").s().p("AhDhKIABABQAYAdAbATIAqAYQAcANANALIgKAIIgLAFIg+AnQgvhFgFhQg");
	this.shape_22.setTransform(60.9,78.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1596B9").s().p("ACMDSQgKgmgKgZQgbhFgbgsQhDhuhWhFQgggagigTIhFgpIgQgRQgOgOgGgLIAAgCQA4AiA1ASQAzAQBXADQgJA0APArQANAqAgAYQALAHATAIIAiALIAeANIAHAEQABAEgCAGIgEAKQgRBAANAcQAMAYAoAHQAfAFALANQAFAFAFAOIAXBAIhlAgg");
	this.shape_23.setTransform(81,96.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAhglQgmh+hXg1QAEgFAOgGQAHgDATANQAQALAgAeIAUAXQAQATACAHIAMBSIgBAQQgBAJACAFQACAHALAJIAQARQAIAQABAeIgBATIgDAKIgDALQgBAPAFAWIAIAiQgBAfgVAXQgCiXgkhzg");
	this.shape_24.setTransform(141.3,86.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F4AF95").s().p("AAeA9QgMgCgOgIQgSgJgQgUQgMgNgQgaQgQgVAAgHQAAgFAPgHQALgFAKgDIARAAQAJACAEAEIAQAdIgegDQgYAAgBAIQgCAKAOAAIAVAAIAPAcQALASAMADIAKAAQAFgCAAgFQABgFgHgEIgKgDIgJgMQgFgHgBgGQAPADAMAMIAfApQAHAJACAHIgGAEg");
	this.shape_25.setTransform(70.3,59.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1596B9").s().p("AApBZQgphFhHgsIAUgPIAzgzIAZgnIABAAIARAhIAGATQASA2ADAjQAGBEgMAyg");
	this.shape_26.setTransform(143.2,65.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#248D3A").s().p("AgegdIA9gJIgGAKIgzBDQAAgvgEgVg");
	this.shape_27.setTransform(38.8,54.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#248D3A").s().p("AgtA7IA2hJIADAeQABAXAHACQAMACABgQIgEgsQgCgOAAgFQABgEAIgKIAKgNIACAAIAAB6IgygBIgtAGg");
	this.shape_28.setTransform(42.4,53.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#248D3A").s().p("AgzAPIAIgEQATgKATgOIA7gHIgXAeIhUALQgCgEAEgCg");
	this.shape_29.setTransform(40.6,47.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#248D3A").s().p("AgLBLIAAiHQAAgQAGgDIABAAQAEAdAHAbIAFAQIgOA/IAAAMIgDAMIgBAAQgEAAgBgFg");
	this.shape_30.setTransform(50.3,52.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#248D3A").s().p("AAHgTIAYAXIgEAGIgGAEIgzAGg");
	this.shape_31.setTransform(45.9,41.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#040000").ss(0.5,1,1).p("AAAgMQAKABACAEIABAJQgBAIgEABQgMAFgGgPQgGgOAQABg");
	this.shape_32.setTransform(101.5,34.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,1.2).s().p("AgKABQgGgOAQABQAKABACAEIABAJQgBAIgEABIgGACQgIAAgEgMg");
	this.shape_33.setTransform(101.5,34.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#040000").ss(0.5,1,1).p("AAegkQADADgCAJQABAPAIANIASAWIgPAIIgpADQgPgEgSgOQgQgMgKgKQAmgSAxgPg");
	this.shape_34.setTransform(93.9,36.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0.3,-0.2,0,0.3,-0.2,5).s().p("AgfATQgQgMgKgLQAmgRAxgPQADADgCAJQABAPAIANIASAVIgPAIIgpAEQgPgEgSgOg");
	this.shape_35.setTransform(93.9,36.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#040000").ss(0.5,1,1).p("AAAgLQAJAIgBALIgPAEIAEgLg");
	this.shape_36.setTransform(108.7,35.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0.2,0.1,0,0.2,0.1,1).s().p("AgDABIADgMQAJAIgBALIgPAEg");
	this.shape_37.setTransform(108.7,35.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgaBEQghgKgbgbIgRgTIgdgJQgTgFAAgJQAAgLAMAEIASAIIgEgFIgDgHQACgIAJACIARAGIgBgMQABgFAHAAIAPAKQAMALALAAIANgDIAQgHQAwgSAogHIAegGIAcgJQADgBADADIADAGQAAAGgIAEIgLAFQABADAFACIAIAEQAJAHAJATIAIAPQAEAMgGAIQgCAEgPADIgUAEQghAHgnAQIgeAKgAhRALQAKALAQAMQASAOAQAEIAogDIAPgIIgSgWQgIgOgBgOQACgJgDgDQgxAPgmARgAB5AGIgFALIARgEQABgMgKgHgAApACQAGAPANgFQAEgBABgIIgBgJQgCgEgKgBIgDAAQgOAAAGANg");
	this.shape_38.setTransform(96.3,34.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#040000").ss(0.5,1,1).p("AgFgTQAHAYAKAIQgFAGgNADIgFgWQgBgNAFgHg");
	this.shape_39.setTransform(121,27.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,1.8).s().p("AgLAAQgBgNAFgIIACABQAHAYAKAJQgFAFgNAEg");
	this.shape_40.setTransform(121,27.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#040000").ss(0.5,1,1).p("AAIgKQAIALgMAHQgMAHgCgNQgBgHAGgEg");
	this.shape_41.setTransform(124.1,25.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,-0.1,0,0,-0.1,1.1).s().p("AgKACQgBgHAGgEIANgBQAIALgMAHQgEADgDAAQgGAAgBgJg");
	this.shape_42.setTransform(124.1,25.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AggAjQgHgGAEgHIAMgMQASgNAMgTIANgPIAQABQADAFgDALIgJASQgFAIgMAKIgVATQgGADgFAAQgGAAgEgDg");
	this.shape_43.setTransform(103.2,22.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1596B9").s().p("AAXA+QgPgGgJgPQgFgIgGgWQgHgSgGgIIg8gwIABgCIABAAQAQABARAKIANAJIAPAFIAlgRQAOgHAMAAQAVAAAYARQgNAegGATQgIAeABAeQgJAEgKAAQgJAAgJgEg");
	this.shape_44.setTransform(37.6,25.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1596B9").s().p("AgnBzIgGgIQgXgegEgcQgGgvAUgtQAUguAjgTQARgKAVgCQAZgBAPALIgQAUQgKALgNATIgWAgQgqBAgCBVg");
	this.shape_45.setTransform(52.8,27.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgKALIgkgRQgFgDgBgFQAIgGANADIAVAFIAegDIAQgDQALAAAEAHQAGALgPAKQgNAIgMABIgBAAQgKAAgQgIg");
	this.shape_46.setTransform(115.9,19.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F4AF95").s().p("AjtFxIgCgJQgHgOAAgHIAHgiQAJg+gEgzQgGg+gVg0IgFgOQAAgFALgKIBehVIBWhGQAcgRgCgIQgBgFgFAAIgKABQgMhCgcg7QgKgUABgJQAKgFAKAIIAhArQAEAFAFgBQAJAAABgSIAEhFQABgHAEgCQAJAAAIANIAMASIAIAWQAHAMAMAAQAGAAAGgHIAGgQIAAgkQgDgaABgKQABgJAFgDIANABQAIADAEAHIALAuIAEAbQACARAHADIARgBIALgKIAOglQANgdAJAAQAFAAAEALIAFARQABAMgEASIgIAfQgLAvAAAUQgBAoAYANQAJAGAYABIAhAFIARAOQAJALACAIIg5AKQgRAHgRAQIiGCWIkEEWIgPANg");
	this.shape_47.setTransform(175.5,47.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F4AF95").s().p("AgLgBQABgHAIgCQAJgDAEAKQAFAIgIAGIgNABQgIgDACgKg");
	this.shape_48.setTransform(110.6,92.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F4AF95").s().p("AgFAtIAEgiQABgcgJgWIgHgNQgDgJAJgCQAKgDAIAVQAIATABAUQABAQgEAgIgDAPQgCAHgFABIgBAAQgJAAABgUg");
	this.shape_49.setTransform(128.8,91);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F4AF95").s().p("AgBAMQgKgBAAgLQAAgJAKgCQANgDAAAOQAAAMgLAAIgCAAg");
	this.shape_50.setTransform(138.3,84.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F4AF95").s().p("AgLA3QgQgFgMgHQgMgIgNgZIgNgCQgHgCABgGQABgEAFgCIAwgCIAggHIAUgJQAVgHAPgOIAHgIQAGgHAEAAQAIABAAAHQABAHgKAJIgNAMQgEAHAAAUQABAWgDAHQgKAcgYABg");
	this.shape_51.setTransform(114.5,44.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F4AF95").s().p("AgNBRQghgEgggVIgLgJIgKgHIgegDQgUgDgBgIQgCgMAMACIATAFIgEgEQgEgDgBgDQAAgJAKABIASACIgDgKQAAgGAHgBQADAAANAIQAOAHAKgCIAbgOQAngZArgRIAdgLIAZgOIAHABIAEAFQABAGgIAFIgJAHIAGAFIAJACQAKAFANARIAKAOQAGALgEAIIgPAKIgTAIQghAOghAWIgcAQQgNAFgNAAIgJAAg");
	this.shape_52.setTransform(96.4,33.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F4AF95").s().p("AATAOQgVgDgXADIgQAAQgIgCAAgJQABgKAOgEIAdgDIAXABIAUAGQALAGAAAFQACALgQAAIgQgBg");
	this.shape_53.setTransform(103.1,21.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F4AF95").s().p("AgmAeIARgkQAIgSAIgGQAJgHAPgBQASgCADAMQABAJgIAGIgPAIIgYARIgNARQgIAKgKABQgDgEACgGg");
	this.shape_54.setTransform(118,18.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F4AF95").s().p("AA4ITQgQg7gJgaIgqhoQgWgwgegvIgshBQgMgQgDgGIA/AGIBCAAQAqgCASgIIAZgLQAPgHALgBIgFAMQgCAHABAIQAAAGAEAGIAHAIQATAIAQgLQARgMgDgVQgCgJgGgIQgHgIgIgDIgdgCIgcAIQgfAQgSADIhJAGIhvgLIgJgIIgIgKQgQgPgQgYIjJk2QgLgUAFgRQACgJARgVQAlgwAgggQBwhqCCgwQAegLAwgJQA3gKAlAAQAmAAAbAZQAQAPAWAnIAKAUQACAKgGAIIgQALIgkAQQgfAOgLAXQgGAMACASIAHAhQgLgHgJgRIgEgLQgCgGgGABQgNAAALAaIAQAWIALAIQAGAFABAEQAAAIgPASIgLAJQgIAHABAFQABAHAKgEIANgGIATgUQAKgPgCgMIgJgQIBDgcQAfgRgDgxIgBgLQgBgGAEgDQADAEADAPIAKBAQACAIANAOIAOAXQAOAZAIAaQAKAegBAjQAAAlgQAiIgIANQgcA2gnAcQgpAcg6AUIhNASQgOAEAAAGQgBAJALgBIBLgRQAdgIAWgLQA0gZARgMIAGAQQADAKAEAGIAHAGIATAMIAGAHQAAAFgGAKIgLAMIghARQgWAKgEANQgFAQANANQANANASgCQALgDAFgGQAEgGACgKQACgNgLAAQgFABgCAHIgGAKQgHAEgIgEQgIgEAAgHQgBgJASgIIAYgKQARgKAQgaIARARIAOAUQBSB9AAEHIj/AuIhPATg");
	this.shape_55.setTransform(106.8,63);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("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");
	this.shape_56.setTransform(110.4,106.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,220.8,213.8);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6211A").s().p("AALAsQgVgEgNADQAIgTgRgcQgOgaAMgQQAogKAVAhQATAdgHArg");
	this.shape.setTransform(58.8,60.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADA7IgngFQAGgXgOgZQgQgZACgQQACgSASgJQARgHAVAEQAiAGASAxQATAxgdAdQgMgIgbgBgAALArIAdAGQAGgsgSgcQgVghgoAKQgNAPAPAbQAQAcgHATQAGgCAJAAQAHAAALACg");
	this.shape_1.setTransform(58.6,61.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4AF95").s().p("AAAAVQgRgBgCgKQgBgFAEgHIAGgLQAFgGAIgCIARADIAAAFIgBAGIABAUQgDAJgQAAIgBgBg");
	this.shape_2.setTransform(27.9,208);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAkQgBgFAHgEIAJgGQAGgIAEgQIADgWQABgNAFgCQAKgEgBARIgEAYIgIAWIgKAPIgLAGIgEABQgFAAgBgFg");
	this.shape_3.setTransform(43.5,193.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4AF95").s().p("AgEC8QAEgVAVABIANADQAHADABgHQACgIgNgDIgXAAIgJAFIgIAEIgGgCIgHgDQgWgFgOAPQgNAOgBAYQgEAGgOACQgOACgFgHQgFgIAFgTQAEgLAGgEIAPgDQAJgCAAgFQABgJgNABQgLACgFADQgOAIgFAPIgCAPIgEALQgEAEgLABIgRgEQgIgHAFgQQAEgOAHgHIAFgEIARgFQAKgDABgEQAAgKgOADQgKACgKAFQgJAEgGAJQgEAHgDALIgHARQgEAGgPACQgPACgEgJQgEgGAGgOQADgHATgWIA7hGIAKgPIAHgiQAYh/AQhGIAEgPQAEgNACgCQADgCANgCIAPgFIBjgIIAmABQA5AEAoAMQAWAFAGAEIgQAhQgFALgHAaQgWA5gSBjQgNBBgBAUIgBASQgBAHgGAEIgPADQgMAEgOALIgxAoQgPALgTAAQgRgKAEgUgACBALQgEACgCANIgDAWQgDAQgIAIIgJAGQgGAFAAAEQABAIAKgDIALgGIALgPIAIgXIADgYQABgOgGAAIgEABg");
	this.shape_4.setTransform(31.8,188.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4AF95").s().p("ACADSIgGgFQgCgVgJgLIgIgGQgGgDgDAFQgCAGAKAKQAKATgHAHIgZgBQhDgdgsgRIgugRIgQAAIgNgCIgIgIQgEgGAAgFQAAgFACgKIACgQIgFgRIgKgRQgvhag+hXQgQgWgDgHQBNgfAggKQBBgVA7gEIA4AEQAqBLAzB5IAJATIAyBDQAJAKABAHIgCALQgCAHACADQACAEATAHIAbAMQAOAGACANIACASQgCALgKABQgFgXgFgHQgOgTgGABIgEACIgCADQgBAFAGAFIAIAIQAKAPgCASQgDAGgKgCQgIgBgEgEQgDgXgJgMIgLgJQgHgEgCAJQgBAEAGAGIAGAHQAGAJgBAMQgBAMgGADIgLAAQgHgCgEgEIgEgVIgHgOQgHgJgFAAQgJAAADAKIAIAPQAGAKgBAKQgBALgKAAg");
	this.shape_5.setTransform(122.2,185.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C318B").s().p("Ag0AYIgpACIg+AKQAFgdARgqIAPgBIgGAYQgFATAJABIAHgCIADgEQAHgfAJgLIAYgCIgEAYQgBAQAJgBQAJAAABgSQACgVAFgDIAhgBIgCAYQAAAPAKgCQAHgBAAgPQABgSADgEIAkADIAEAjQAFAUANgLIgDgUQgBgNABgHIASADIgDARQgCALACAGQAMAFADgLIAFgWQAaAGASAOQASANABAHIgLAnQhrgghaAIg");
	this.shape_6.setTransform(40.5,162.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C318B").s().p("Ah7A4IghgqIgIgIIgGgIIAPgHQAJgDAIgBQALAhAIAMQAGAKAFAAQAIAAAAgIIgFgNQgMgSgFgYIAEgCIAEgBQAHAbAKAGQAGAFAFAAQAIABAAgIQABgHgLgEIgGgMQgDgIABgGIAdgJIAUAeQAEAGAEABIAHgBIADgHIgDgJIgHgJIgJgRQAagHASgCIAIAVQAHAMAJAAQAIgBAAgIIgEgHIgHgIIgEgNIAlgDQAKAVAXAPQAFAEAGgBQAGgBAAgGQAAgFgLgJIgOgLIgFgIIBGAHIAJAMIAQAZIAGAPQhKgHhuAjIhlAlg");
	this.shape_7.setTransform(107.1,163.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3A9838").s().p("AghAHIBChBIABAAIgCA7QgBAjADAXg");
	this.shape_8.setTransform(60.3,141.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3A9838").s().p("AgeABIADhFIACAAIA5BpIg7AgQgFgaACgqg");
	this.shape_9.setTransform(68.3,141);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C318B").s().p("AjugJIAMgJIBSgtQANgHADgHIAKhEIACAAIAWA4IAIAEIBJgEQA/gBAeADQAiACAGAEIBrCSIANAWQhTgLhYAUQg7AOhSAkQhQhXhWhEg");
	this.shape_10.setTransform(96.1,147.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A9838").s().p("AgBghIABAAIAeA+Ig7AFg");
	this.shape_11.setTransform(32.9,135.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C318B").s().p("ABsCOQgRgOgmgPQgcgLgqgEQgpgEgrAEIhKAJQAHgmARgyIAdhTIBigKIAJgCQAGgDAHgMIAcg8QACAFgFASQgFATACAHQABAEASANICGBnIADAEIgCAIIg3B6QgHgBgEgJg");
	this.shape_12.setTransform(45.3,146.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3A9838").s().p("AguAqQAghEAngSIAVgFQADANgIAKIhOBLQgFAAgEgHg");
	this.shape_13.setTransform(59.3,136);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3A9838").s().p("Agxg1QgDgKAFgLIBiCEIgOAJIgPAIg");
	this.shape_14.setTransform(70.8,136.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3A9838").s().p("AAGAqIgugHIAchRIACABIAvBFQAEAHAAAEIgFAIIgJAEg");
	this.shape_15.setTransform(107.3,133.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A9838").s().p("Ag7A2QAXgqAZgaQAeggAngNIACAAIgCAVQgnAGgbAfQgRARgYAsQgEAAgGgGg");
	this.shape_16.setTransform(58.3,133.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3A9838").s().p("AgRAEIAThTQAIAFAAAKIgCAWQgIA5gKAbIgHAOQgDALAKAAQAFABAFgJIAFgNQAMghAIg9IARAVIAEAHIgCANIgEAOQgPAygNAXIg5AAQAPgfANgtg");
	this.shape_17.setTransform(100.1,128.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3A9838").s().p("AAAgNQgDgJADgLIB4CNQAGAGAEAAIAFgDIADgEQAAgEgHgIIh7iPIgGgLIADgpQAAgIgGAAQgHAAgCAPIgIBEQgtANgjAiQgaAagcAvIgLgGIgJgJQgBgEACgKIARhYQAAgJgHAAQgHgBgGAMIgHASIgzBiIg1AGIgeg9IgIgNQgEgIADgHIAEgGQACgBAEAJIAkBGIANABIgCgNIgnhKIgEgNQAAgKALgMIArBVQAFAJAEAAQAPAAgQgcIgrhVQAZg2AUgYIDxAGQCaADBXAEIBFACIARATIAEAHQABAHgEAPIgYBgQgNAmgRAZIg1ACIgbhEQgGgRgIAAQgHAAgDAVIgMBRIgJAIIgiASg");
	this.shape_18.setTransform(66.3,127.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAAKQgHAAgCgJQgBgIAJgCQALgCAAALQAAAKgJAAIgBAAg");
	this.shape_19.setTransform(66.2,94.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFAJQgEgCgBgFQgCgPAPAFQAPAFgNAMIgFABIgFgBg");
	this.shape_20.setTransform(46.7,92.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgOA7QgUguAihDIAGgNQAFgIAEgBQAKgCgDAKIgHAPQgbAzAEAjQACAKAGAOQALASgKACIgBAAQgHAAgHgSg");
	this.shape_21.setTransform(55.9,92.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhADAIgCgLQgHglAAglQAAheAqhhQAehGAkgsIAegEQASAhgTA1QgLAfgTASQgJAJgZAOQgUAOAAAVQABAJAGANIAIAWQAEAXgPAVIgNANQgJAIgEAGQgLAQgEAbIgEA2QgCgEgBgHg");
	this.shape_22.setTransform(77,93.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0C318B").s().p("AiZDPQgDg+ATgdIAagZQAQgcgFgbIgLgfQgGgSARgOIAegTQAXgTAMgdIAMglIAFgZIgHgsQANgCAfgLQADAAgCAFIgDAGQgKAagMAtQgJAfgJAsIgMA0IgFA3QAAALAHABIALgBICxgaIhCCyg");
	this.shape_23.setTransform(88,93);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4AF95").s().p("AiODaQgSg2gHhAQgIhCAFhAIAAgOQACgjARgzQATg4AcgkIACgBIAIAGQgHAXAFASQAFAUAPAIQAJAFAWAIQAQAHgCAQQgLAGgGgMQgGgOgFAAQgGACABAIIADAMQAHAMAQABQARACAFgOQAEgNgJgLQgGgJgLgGIgTgHQgNgEgFgFQgIgHgBgNQgCgMAFgOQAwAXBDAKQBCAKBJgGQgIARgZAMQgYALgbABIgpgCQgZgDgMAGIgLAJQgEAHAAAGQAAAMALAEQANAEAKgJIAEgIQABgGgFgCQgFgBgFAGQgEAFgFgDQgDgIAJgDIAUgCIA8ADQAUgCAcgMIgMAZQgUAkgNApQgWBEgEAzQgCAlADAwIAHAxgAgig+QgFABgEAIIgHAOQgjBDAUAtQAJAVAHgCQAKgCgLgSQgHgOgBgLQgFgjAdgyIAHgPQACgJgGAAIgDAAgAAzAUQgKADACAIQABAKAIAAQAKABAAgMQAAgKgIAAIgDAAgAiYAMQABAEAEADQAEABAHgBQANgNgQgFIgGgBQgJAAACAMg");
	this.shape_24.setTransform(61,91.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AACDZIgEgFQgNgDgFgEQgJgHAAgWIAAgnIgHgZIgLgaQgKgZgCgYQgDgeALgSIAMgPQAJgIACgFIgCgkQAAgtAQgnQAOgjAXgZIAmAkQgcApgPApQgUA1gEAwQgJBrAWBxQgCAAgDgDg");
	this.shape_25.setTransform(43.2,86.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0C318B").s().p("AAbERQgFgBgMgQQgSgZgHgQIgLgXIgIgZQgJgZgGgxQgEggADg2QAEhdAlh6IASg5QACgGADgBIAKAJQALAcAMANQgWAWgRAnQgLAdgFAcQgDAWAAASIADAcIgHAKIgKAJIgCAFQgMARgBARQgDAmARAqIALAaQAFANABALIgBAaQgBAQADAJQAFAUARAJIALAEIAWAWQAFAHAAAIg");
	this.shape_26.setTransform(39.7,85.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F4AF95").s().p("AgnA3QgCgGACgGIAHgUIAEgKQAEgFAUgMIARgKQALgHgIgIQgIAAgIAGQgJAHgFAAQARgxAbAKQALAGAAAIIgJAZIgzBCQgHAHgLABg");
	this.shape_27.setTransform(100.2,56.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#040000").ss(0.5,1,1).p("AAAgHQAHgBABAIQAAAJgIgBQgGAAAAgIQgBgGAHgBg");
	this.shape_28.setTransform(68.5,46.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,0.8).s().p("AAAAIQgGAAAAgIQgBgGAHgBQAHgBABAIQAAAIgHAAIgBAAg");
	this.shape_29.setTransform(68.5,46.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#040000").ss(0.5,1,1).p("AAVgpIgDAIIgFAGQgLAVgBAWQAAAKAEAQIgYgCQgDgGAHgTIAPgjQAIgSAMgDg");
	this.shape_30.setTransform(64.9,47.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,-0.1,0,0,-0.1,3.3).s().p("AgTAoQgDgGAHgTIAPgjQAIgSAMgDIABAAIgDAHIgFAHQgLAVgBAWQAAAKAEAQg");
	this.shape_31.setTransform(64.9,47.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#040000").ss(0.5,1,1).p("AAqgyIAIACIgXBFQgGAMgNAJQgMAIgPAAIgegDQAAgCAHgJQAIgQACgTQACgTgHgMIgLgQg");
	this.shape_32.setTransform(76.1,47.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],-0.7,-0.3,0,-0.7,-0.3,5.3).s().p("AgxAvQAAgCAHgJQAIgQACgTQACgTgHgMIgLgQIBagDIAIABIgXBFQgGANgNAIQgMAIgPABg");
	this.shape_33.setTransform(76.1,47.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ah/BIQgNgIAEgRIAMgiQAKgZAJgKQAMgPATgDIBogDIATgIIARgNIAHgNQAFgHAIADQADAGgFAIIgIANQAJAAAIgHIAKgLQAFgHAEAAQAHABAAAFQABAGgGAFQgIAGAAAFQAFABAJgHQAIgHAFABIAFAGQAAAKgYAJIglAGQgIATgMAnQgMAhgRAMQgPALgYABgAgmgaIALAQQAGALgCAUQgBATgJAQQgHAJAAACIAfADQANAAANgIQANgJAHgMIAXhFIgIgCgAhngBIgPAjQgHASADAHIAaACQgFgRABgKQAAgWALgUIAGgHIACgHIgBAAQgLACgKATgAhDAFQgGABAAAHQABAHAGABQAJABgBgKQAAgIgGAAIgDABg");
	this.shape_34.setTransform(75.2,45.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#040000").ss(0.5,1,1).p("AgDgGQAJgFADAKQADANgNgFQgPgGANgHg");
	this.shape_35.setTransform(52.9,44);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0.1,0,0,0.1,0,0.8).s().p("AgBAHQgPgGANgHQAJgFADAKQACAJgHAAIgFgBg");
	this.shape_36.setTransform(52.9,44);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#040000").ss(0.5,1,1).p("AAAgoIABAAQAOAHAAAeQAAAagIALIgJAHIgMgCIAMgIQAIgKABgTQABgRgHgXg");
	this.shape_37.setTransform(55,44.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],-0.3,0.1,0,-0.3,0.1,3.2).s().p("AgOAnIAMgIQAIgJABgUQABgRgHgXIgBgBIABgBQAOAIAAAdQAAAZgIAMIgJAHg");
	this.shape_38.setTransform(55,44.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#040000").ss(0.5,1,1).p("AgKAlQgRgaAMg6QAIABAKAGIASAIIgDAEIgFADQgMAKgCAVQgDAVAFAVQgDAAgDgEg");
	this.shape_39.setTransform(49.6,41.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0.3,-0.2,0,0.3,-0.2,3.9).s().p("AgFAsIgFgHQgRgaAMg6QAIABAKAGIASAIIgDAEIgFADQgMAKgCAVQgDAVAFAVIgBAAQgDAAgCgEg");
	this.shape_40.setTransform(49.6,41.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAABXQgSgGgKgIQgOgLgFgSQgJgcAHgiQAGgPgCgGIgNgNQgIgIANgFIgHgRQgEgJAGgDQAFgCAGAJIAHAOIACgLQAAgGAEgCQAIgCACAOIACAXQACALAEAEQACACALAFIAtAXQAOAKADANQAGAcgFAWQgHAigXAAQgIAAgWgIgAAlACIABACQAHAWgBATQgBATgJAKIgMAIIAMACIAKgHQAIgMAAgaQAAgegOgHgAgbA1IAFAIQADAEAEgBQgGgVADgVQADgWAMgJIAEgCIADgFIgRgIQgLgGgIgBQgMA6ARAagAAMAhQgMAHAOAGQAOAGgDgOQgCgHgFAAQgCAAgEACg");
	this.shape_41.setTransform(51.3,40.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgJA5QgSgIgBgGQAAgDAKgRIAVgiIAKgTIABgPQABgKADgDQAAgBAAAAQABAAAAAAQAAAAABgBQABAAAAAAIAFABQAHAXgMAXIgYAmQgGAJABAFQABADAIAEQAIADgBAFQAAAHgGAAQgEAAgHgEg");
	this.shape_42.setTransform(58.3,47.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAFATIgTgGQgJgFgIgIQgJgMAGgFQAEgEAIAGIAMAIIAKACIAJAAIAMgGQAGgDAFAFQAMAKgOAKQgMAIgMAAIgBAAg");
	this.shape_43.setTransform(67.5,37.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#248D3A").s().p("AgJAUIAAgGIgGgSQgDgLAAgIIAlADIgFAMIgUAgg");
	this.shape_44.setTransform(115.3,34.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgiAQQgFgJAMgCIAUgDIAOgKIAGgHIAHgFQAKgDAFAKQAEAKgEAHQgDAIgTAGIgdAEQgPAAgDgGg");
	this.shape_45.setTransform(57.6,33.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#248D3A").s().p("AgNgQIAAgDIAbADQgBAWgNANg");
	this.shape_46.setTransform(118.6,27.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#248D3A").s().p("AAAAYIgNgtQAAgEALACIAQAwg");
	this.shape_47.setTransform(115.6,28.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#248D3A").s().p("AACASIgNgnIAAgBIALgBIAMAvIgCAAQgFAAgDgGg");
	this.shape_48.setTransform(112.5,28);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F4AF95").s().p("AgEAzIgWgHQgKgGAEgPIAIgaQACgQgEgQQgKADgHgHQgGgHAMgDQALgDAQADIAWAGQAFADAIAFQAUARABAgQABAjgcADg");
	this.shape_49.setTransform(61.3,60.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F4AF95").s().p("AgJA5QgSgIgBgGQgBgFALgPIAVgiIAKgTIABgPQABgKADgDQAAgBAAAAQABAAAAAAQAAAAABgBQABAAAAAAIAFABQAHAWgMAYIgYAmQgGAJABAFQABADAHAEQAJADgBAFQAAAHgGAAQgEAAgHgEg");
	this.shape_50.setTransform(57.7,46);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F4AF95").s().p("Ah8BLIAFgkQAFgcAHgLQAJgQASgGQAQgGAkgGIAygMIARgLQAKgJAEgHIAFgPQADgIAIACQAFAGgEAJIgFAOQAJgCAHgIIAHgNQAEgIAEAAQAHgBABAFQACAFgGAHQgGAHAAAFQAGAAAHgJQAIgIAFAAQAFABAAAEQACAGgJAIIgNAJIgRAHIgSAGQgEAUgEAoQgGAkgOAPQgNANgYAGIhzAMQgOgGAAgRg");
	this.shape_51.setTransform(73.9,43.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F4AF95").s().p("AgfAUQAAgGAJgDIAOgEIAIgHIAFgGIADgNQACgHAHgBQAPgCgBARQAAAOgJAKIgRAMQgJAEgMAAQgPAAAAgIg");
	this.shape_52.setTransform(65,35.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F4AF95").s().p("AAGBnQgFgBgIgGIgNgJQgQgLgIgKQgKgOgBgSQgBgdAPggQAKgNAAgHIgJgPQgGgKAOgCIgDgRQgCgLAHgBQAFAAADAJIAEAQIAFgKQABgGAFAAQAHgBgBAOIgDAXQgBALACAFIAxAsQALANgBAOQgCAdgJAUQgPAagRAAIgHgBg");
	this.shape_53.setTransform(51,39.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F4AF95").s().p("AgLD3QhjgChDgdQgggOgcgXQghgegNgWQgOgaAAgtQAAgkAJgoIAFgTIgEgXQgHgvAFgqQAGgxAUgXQAOgRAfgFIBkgBQCFAACKApIAxATQAhAMAQAJIAXAMQAOAJAEAHQAGAKAAAMIgGAXIhwEUQgKAXgLAPQhFAZhbAAIgKAAg");
	this.shape_54.setTransform(72.8,48);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#248D3A").s().p("AgLAHIAFgIIAGgHIALAEQADAKgEADg");
	this.shape_55.setTransform(119,23.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#248D3A").s().p("AgOANQgGgIgEgIIAxgJQgBAGgGAGIgLAOg");
	this.shape_56.setTransform(111.9,22.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#248D3A").s().p("AgPATQAIgPARgVIAGgBQACAJgJAKIgMASg");
	this.shape_57.setTransform(116.2,22.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F4AF95").s().p("AjxENQAPg8AUgrQAHgQAGgHQAIgJAOgGIASgIIAIgNIANgeQAEgKADgEQAEgIAKgLIAQgRIANgVIAKgVIALgPQA0hJBJh+IATgeQAFgLACgUIACghQABgCAHgDQAEgDgBgFQgBgHgMAEIgRAAQgGgEAEgQQAEgMAGgIQANgSASAJIAPAQQAEAEADgBQAIAAgCgHIgGgKQgOgKAAgEQgBgFAIgHQAHgGAFgBIAOACQADABAGAEIAHAIIAFAMQACAGAFgBQAMAAgMgZQALgOAOAGQAGACAGAOIAFAKQACAGADABIAYgCQAPAEAEAjQABAPgDAXIgEAeIAAAYQgEAQgRARIgdAaQgKALgPAnIg3CGQgfBFghA6IhUCFQghAygiBlIi+AbQAHhIAWhSg");
	this.shape_58.setTransform(112.5,55.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0C318B").s().p("AAqAdQg5ghg+gUIAWgOQAVgKALgBIAhADQAZAGAWASQAJAIAHAOQAGALgBAOQgBAOgHALg");
	this.shape_59.setTransform(100.2,14.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F4AF95").s().p("AgBAQQgCgPgLgKIgWgRQACgLAKgFIAVgBIAMAKIAJAMIADAbIAQASQgJABgMAJQgMAJgHABg");
	this.shape_60.setTransform(10.5,9.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F4AF95").s().p("ABZGoIgcgaQgbgdgVgiQgRgdgUgsQgbg8gbhtQgPg9gSh+IgHhMQgBgUgDgEIgGgGIgHgFQglgZgNgvQgFgSAAgPQgBgUAJgKIAXABQAQgDgBgJQgBgIgNAEQgOAGgEgGQADgmAYADQAOABAKAKQAUAUgUAwIgQABIAAgMQABgHgGgBQgHgBgCAKQgDAJADAHQAEAKANABQAMAAALgFIAMAhQADAGAEABQAKABgDgMIgHgSIgHgbIANgGIANgJQAHgGAGAAQgEAVAGAPQAIASASgIQAIgDAIgGQAIgHgBgFQgBgFgDAAQgGgCgIAIQgJAJgFgBQgIgCACgXQACgLAFgOQAGgOAGgIIAIgHQAEgFAAgEQgCgKgKAHIgMAMIgKAPQgQgDADggIAZgXQARgPAMgFIAXAAQAKAIACATIACAqQADBGgQATIgMANIgIAFQgFADAAADQAAAIAJgCIAJgEIAHALIAgBWQA0B3AoA8IAqA9IAIAKIAGAJQABAIgOAeQgjBogOBjIgGBsQgNgDgVgSg");
	this.shape_61.setTransform(20.6,47.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F4AF95").s().p("AgOALIgHgJQgBgEAJgIQAEgEAHgCIAOABQAKADABAFQAAAEgOAIIgGAGIgHAGg");
	this.shape_62.setTransform(13.6,3.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0C318B").s().p("AAWAzQgdgqg5gJQACgIAGgIIAOgKIBDgGQAKgCAJgLIAQgSQAJADgIALIgMAPQgEAJABAPIAEAZQAEAegYATQgEgCgEgLg");
	this.shape_63.setTransform(106.6,8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("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");
	this.shape_64.setTransform(74.7,105.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149.5,211.7);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6211A").s().p("AgagXQAVggAoAJQAMAQgOAaQgQAcAHATQgNgEgUAEIgdAGQgGgrASgdg");
	this.shape.setTransform(128.3,65.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgygKQASgwAigHQAUgEARAIQASAIACASQACAQgPAZQgPAYAGAYIgnAEQgbACgMAHQgcgcATgxgAgagXQgTAcAHArIAcgFQAUgEANAEQgHgTARgcQAOgagNgQQgJgCgJAAQgaAAgQAZg");
	this.shape_1.setTransform(128.5,66.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#040000").ss(0.5,1,1).p("Ag1gSIBIgTQgGATAMAVQALATARAKQglAOgagPQgYgNgTgkg");
	this.shape_2.setTransform(114.6,52.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#040000").ss(0.5,1,1).p("AAHAcQgCgfgWgYQAPAFANAUQAQAVgUAJg");
	this.shape_3.setTransform(125.2,50.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#040000").ss(0.5,1,1).p("AgUAAQgBgUAJgIIALAfQAHASAPADQgEAEgKABIgTAAQgHgMgBgRg");
	this.shape_4.setTransform(137.9,50.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#248D3A").s().p("AgWAAIAHgVIASADIAXgBIgxApQgDgHAEgPg");
	this.shape_5.setTransform(61.3,37.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#040000").s().p("AgIACQAIgRAAgJQAJgBAFAEIgHAeQgGAPgOABQgDgJAIgOg");
	this.shape_6.setTransform(62.7,195.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#248D3A").s().p("AgUAOIAoggQADAFgGANIgKATg");
	this.shape_7.setTransform(61.8,40.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#248D3A").s().p("AgFgFQAIgcASgJIgXBGQgHAPgLAAg");
	this.shape_8.setTransform(66.5,38.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#248D3A").s().p("AgnAKQgCgVAdgBIAyAAQAGADgKAJIgQANg");
	this.shape_9.setTransform(64,33);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#248D3A").s().p("AA8gRQgEAXgmAJIhNADQAZgKBegZg");
	this.shape_10.setTransform(67.7,28.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#248D3A").s().p("Agdg/QARAQAWAfIAmAvQgtATgxAOQgDhPAUgwg");
	this.shape_11.setTransform(68.6,62.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F4AF95").s().p("AhJC0QgQgGACgPQABgMASgDQAUgEAFgJQgPgOgXAOQgYANgCAVQgYgFANgRIAWgaQgNgJgPAOQgPANgBASQgUACgFgHQgBgNAOgKQAPgKgBgMQgWgFgWAnQgPACgHgIQgDgQAOgJQARgNACgEIgbABQgPAMgFAPQgUgPAVgPIAjgUIATgYQAMgUAFgGIA1gxQAQgXATgxQAWg5AKgTQA2AUBDAIQBGAIBGgGQgLAagXAeIgnAzQguA+AFBMIgwAVQggAOgUAMIggAYQgRAOgJABgABaAiQAAAJgJARQgIAPADAJQAPgBAGgQIAHgfQgEgDgGAAIgEABg");
	this.shape_12.setTransform(53.7,189.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#248D3A").s().p("AgFgDQANgtATgVQAHABgEAMIgIAYQgBAHAAATIgCAXQgFAOgSAQIgaAXg");
	this.shape_13.setTransform(70.3,36.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#248D3A").s().p("AgfAhQADgjgFgSQgCgIgQgNQgMgJAFgMQAKACAKALQALANAIACQBKgVAGAuIgkAgQgTAUgIAUQgcgCgBgcg");
	this.shape_14.setTransform(70.3,7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F4AF95").s().p("AgSAPQgJgVAFgKQAEgIALADQAdAJADAjg");
	this.shape_15.setTransform(82.8,48.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#248D3A").s().p("AgNAoQhhgKg1ghQAOgYAFgFQAOgQAOAJIgLAYQgIANALAGQAJgBAJgRQAIgRAIADQAHABgFAPQgGANAJADQAKABACgIQACgMADgFIAZADIACAQQABAJAFACQAIAAADgHIABgOIAxAIIgFARQgBALAJACQAJgBACgKIACgTIAiADIgCALQgBAFADAFQAMAEADgKIAEgPIBDAEQADAEgCAIQgCAKABAGQg1ALg6AAQggAAgggDg");
	this.shape_16.setTransform(65.5,168.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F4AF95").s().p("AgrExQgQgDgVgOIgdgXIgbgQQgagFgrAcQgtAcgcgDQgHgMAXgRQAZgSgCgPQgDgXg+AMQg9ANgCgVQgBgMAggJQAggIgCgQQgCgRgtgDQgvgDgDgKQAHgNAmgDQAmgDAGgPQgCgRgXgLQgagLgFgLQATgIApAOQArAQAUgFQAGgCASgWIAggmQC2jHFEhwIAOgDQAyA6ARByQAOBhgLB8QgjgDgjgMIg6gYIgGgfIAdgDQATgBACgKQhSgEhSAiQg8AZhKA2QgyAlgJALQgdAiAQAuQADAGASASQAQAPgBAIQgBASgPAAIgIgBg");
	this.shape_17.setTransform(41.8,97.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#248D3A").s().p("AhbARQAEgmAmgiQAlggAngBQAtAAAUAvQhUAvg5BSQgugbAEgsg");
	this.shape_18.setTransform(80,16.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F4AF95").s().p("AAAABQgFgIgBgJIAKAAQADAEAAALIAAASg");
	this.shape_19.setTransform(82.4,53.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4AF95").s().p("AgFAgQgHgGgLgSQAIgagCgaIAIAAQAKAPAJAbIANAvQgRgBgLgMg");
	this.shape_20.setTransform(86.6,56.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#248D3A").s().p("AhhCpQhagMgxgdQASg0AihKIA4h5QAsAGAagWIAogtQABAKgGAWQgHAZAAAMQAxASBSAVICIAiQgcAog3BFQg8BLgZAjg");
	this.shape_21.setTransform(76.7,149.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#248D3A").s().p("AhAELQgugVgHgLQgKgPgEgkQgFgqgHgSIA9AYQAmALAhgEQAHgRACggIACg0QAHhwghhlQghheg9g8QAcAKBIAmQgGAjAIAoQAGAiAOAeQAKAVAdAqQAXAqgHAtIgKAmQgGAXAFAUQAEAOAOAPQAQASAFALIAMApQAGAcAHAMIAaAfQANAQgIAXQh/gPhOggg");
	this.shape_22.setTransform(84.1,92.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AA4D2IgbhQQgEgKgUgbQgQgWgBgQQgBgOAGgSIAIgeQAIg3guhQQgwhRAGg+IABgEIACgEQA+AMAkBMQAaA1ARBgQAZCNgQCJIgCAAQgKAAgGgMg");
	this.shape_23.setTransform(91.4,92.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#040000").s().p("AgMAHQgEgOALgDQALgFAGAJQAFANgMAEIgFACQgHAAgFgGg");
	this.shape_24.setTransform(103.4,91.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,4.7).s().p("AgKAfQgYgNgTgkIBIgTQgGATAMAVQALATARAKQgRAGgPAAQgRAAgOgHg");
	this.shape_25.setTransform(114.6,52.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#040000").s().p("Ag3AWQgGgNAGgJQAGgGAwgEQArgDAEgbQAfAbgsAUIgmAQQgXAKgIAIQgOgGgFgNg");
	this.shape_26.setTransform(121.9,39.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3A9838").s().p("AgiAVQAFgPATgPIAagcQAHAMAEAYIAIAng");
	this.shape_27.setTransform(115.6,144.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#040000").s().p("AhAA2QAEgJAOgEIAVgDQAxgOAOgXQAFgGADgVQADgTAJgLQAMAWgLAcQgKAagWAPQgTANgYAGQgNADgMAAQgMAAgLgDg");
	this.shape_28.setTransform(115.5,98.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3A9838").s().p("AgVgcQAJADAMALIAWAOQgCAHgMAIQgMAJgDAFQgIgUgGglg");
	this.shape_29.setTransform(121.9,145.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#040000").s().p("AgkA4QgJgGgXghQgTgagUgCQADgKgLgFQgNgGgDgIQAIgDAJAFIAPAJQADgCgFgFQgGgGAEgDQAHgBAIAIQAKAKAEACQACgEgHgGQgHgGADgFQAHAAAJAIIAPAKIA+gQQAlgJAYgDQApAUAUA5IheAmgAhEgIQATAjAYANQAaAPAlgNQgRgKgLgUQgLgVAFgTgABiASQAVgJgRgVQgOgTgPgGQAXAYACAfg");
	this.shape_30.setTransform(116.1,51.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,2.4).s().p("AgRgbQAPAGANATQAQAVgUAJQgCgggWgXg");
	this.shape_31.setTransform(125.2,50.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#040000").s().p("AACAMQgmgBgOgOIAAgIIAwAGIA2AAQgJARgnAAIgCAAg");
	this.shape_32.setTransform(127.6,100.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#040000").s().p("AgGAEQADgWgEgOIANAAQAHAUgDATQgDAZgRABg");
	this.shape_33.setTransform(130,42.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#040000").s().p("AgOAYQAJgFARgJQgQgZAAghIAHAAQAFAkASAZQgZAcgZAIQgEgOAOgLg");
	this.shape_34.setTransform(131.9,53.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3A9838").s().p("AhxBJQACgJAHgIIAKgOIAHAPQADALAKgBQAGgHgHgYQgGgWAMgJQAHAHAGAYQAGAWAJAGQANgLgNgcQgOgeAGgNQAKAGALAhQAJAeARAEQACgTgNgbIgTgsIAIgQQAFgJgIgGQgJgBgFAIIgLANIg0AGQgeAFgNALQAKALAbgGIAsgIQgKALgqAEQgnAFgJAMIAlADIApgIQgGANgfAFQghAFgIAHQADAOASgEIAdgGQAGADgKAMIgQASIhCgRQABgRALgnQAJgigCgVQgXAMgYAfIgnAwIiEAGQAYgiAggUIAJAlQARgBgEgUIgLgfQAFgOAPgFIAHAaQADAQAHAFQAPgGgKgbQgMgeAJgJQALAGAEAdQAFAdALAGQAJgQgIgcIgPgoQAGgKANgNIAUgVQBkA1CaAQQCYAQCagZIAygEQASADANAYQgDAQgLAZQgLAZgDAOQgJgFgQgVQgNgRgPgDQgJATALAhIARA0QgEAKgOAKQgQAKgFAGIgqgaQgagQgHgWQAMgBARAPQAUARAKADQAHgVghgSQglgVgEgPQAPgCAcAWQAbAUAQgCQgJgXgfgQQgkgQgQgKIgDgbQgCgOgJgEQgLADAEAQIAEAaIh/BZQgMAIAAALQAOADAWgOIBqhMQAKARgQAPIg+ApQgTAMgFANQAVAEAhgaQAnggAKgCQgHAXgYAXIgmAmg");
	this.shape_35.setTransform(95.9,132.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#040000").s().p("AgBAMQgJgBgDgEQgDgSAQAAQAPgBgBAQIgCACIgBADQgDADgGAAIgDAAg");
	this.shape_36.setTransform(133.6,92.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F4AF95").s().p("AiVEMQAQiLgKh6QgLiLgrhUQA4AYAeAKQA5ATAyAGIAkABQAXADgCAVIgQgBQgKgJgHABQABAYAPADQANACANgMQAMgNgDgNQgEgQgcgFIhDgKQgtgGgdgKQg0gSgVgKQgjgSgPgaQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIByArQBKAZA5AFIBdgEIBVgNQgEAWg7APQg6APgCASQgBAVATAFQAUAEAHgWQgDgLgKAFQgLAHgEgEQAAgNANgBIAVAAQAQgEAZgOQAdgRALgEQAeBtgaCGQgVBmgyBqQhwAQhaAAQgwAAgqgFgAA1gKQgEAUgEAHQgOAXgxAOIgWADQgNAEgEAJQAVAGAbgGQAYgGATgNQAVgPAKgbQAMgbgMgWQgJALgDATgABMAcQAOAPAnABQApAAAJgSIg2AAIgxgGgAC6g7QgQAAADATQADAEAJABQAJACAEgFIABgDIACgCQABgQgPAAIgBAAgAh4hAQgLAEAEAOQAHAJALgEQALgFgEgOQgFgFgGAAIgHABg");
	this.shape_37.setTransform(114.9,97.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,2.6).s().p("AgMAdQgHgMgBgRQgBgUAJgIIALAfQAHASAPADQgEAEgKABg");
	this.shape_38.setTransform(137.9,50.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#248D3A").s().p("AAIAIQAcg1AMg0QgPBWgLAeQgXBAguAPg");
	this.shape_39.setTransform(136.1,112.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#040000").s().p("AgYAFQgWgWAJgVQAPAJAXAKIAoAQQgFAggYAKg");
	this.shape_40.setTransform(137.1,39.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F4AF95").s().p("AAqEAQiHgDh1g4QgriKgdhrIgPguQgIgbADgNQAGgZAwgYQAZgMA3gUQBfghB7gGQCHgGBaAiQAuBqgeAnQgEAAACgIQABgJgEAAQgHABgBALIgDAQQg9ATgXAVQgnAiAkAzQAxgBAXgNQAbgPAEglIgBgcQAAgSAKgHQAJAXgMAkIgRA2IgBBGQAAAjgQAVQg8BRiWAAIgLAAgACgAuQgSAJgIAGQgPAKAFAOQAZgHAZgdQgRgZgFgjIgJAAQAAAgARAZgAiNgWQADAIAOAGQAKAFgDAJQAVACASAbQAXAhAJAGIBKACIBegmQgUg5gpgUQgYADglAJIg+AQIgPgKQgJgIgHAAQgDAFAHAGQAHAGgCAEQgEgCgKgKQgHgIgIABQgEADAGAGQAFAFgDACIgPgJQgFgDgGAAIgGABgAB7hIIgFAeQASgCAEgZQACgUgHgUIgOAAQAFAPgDAWgACwhgIAlAiQAXgKAFghIgogQQgXgKgPgJQgKAVAXAXgAAvh1QgvAEgGAIQgGAIAGANQAFAOANAGQAIgJAXgJIAngRQAsgUgfgcQgEAbgsADg");
	this.shape_41.setTransform(117,50);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAFAEQAJh7gghGIAIgEQAFgDABAEQAVATAIAgQAIAegEAlIgGAYQgFAPgBAIQgBALADATIABAeQgCAqgSAwIgdBIQAchbAGhkg");
	this.shape_42.setTransform(138.3,93.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3A9838").s().p("AgkAwIgXgWIARgiQARgjAAgGIAFAFQADAEACAAIgNAgQgKASAEANQAPgBAGgSQAFgTAFgIIANANQgBAHgJAOQgGAMADAIQADAAACADQAIgBAFgMQAFgMAHgDQARAbAQANIgxADg");
	this.shape_43.setTransform(140.2,133.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#248D3A").s().p("AgJBfIAFhJQAEhWgigjQATgHASgXQAYgdAIgGQAEBEgSBiIgeCjQgDgbADgrg");
	this.shape_44.setTransform(143,82.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#248D3A").s().p("AiYABQALgSASgDQAAAJgLAOQgIANAFALQAPgCAIgRIANgcIAOAAIALgDIgEAUQgEALAIAEQAKgBAEgMIAGgWIAqgDIACATQABAKAIABQAHABABgLIgBgUIAZgCIAEAPQACAKALgDQAEgBgBgJIAAgMIB7gGQgHAWgfAHIkxAog");
	this.shape_45.setTransform(134,164.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#248D3A").s().p("AibBFIg1hEIBqAcIBxhVQgHglgOgnQALAGAQAWQAPAXAPAFIA7ADQANAFAWAiIA7BdQAPAdgJAZIkvAUg");
	this.shape_46.setTransform(130.8,147.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F4AF95").s().p("AgSgQQAWgPALAbQAMAagcAAQACgdgTgJg");
	this.shape_47.setTransform(152.2,199.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F4AF95").s().p("AA9C4IgxgEIgmgcQgjgYg5gPIgvgLQgVgIgKgUQADgiAShLQAQhDgBgxIDvgkQAFgBABAEQgQBdgUA8QgEAEgEgHQgEgIgIADQAGAoAmAmQAWAWAxAmQAYACALAFQAQAHACARIgYgTQgRgJgPAGIAeAYQATAOgVAPQgCgpg2gBQgEAJgYAFQgXAEgCAMIAYABQATgGAKAIQAEAJgCAMQgCALgGAFQgQgGgeABg");
	this.shape_48.setTransform(138.8,184.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F4AF95").s().p("AgUAgQgHgdAMgWQAOgaAZAOQgUAaAIAoIgRACQgKAAgFgFg");
	this.shape_49.setTransform(175.3,41.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F4AF95").s().p("AgIAIQgGgRAFgUQAXgFgDAXQgEAiAFAIQgOgGgGgRg");
	this.shape_50.setTransform(175.9,50.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#040000").s().p("AgHAJQgVgMAOgLIAjAVQgEAIgIAAQgHAAgJgGg");
	this.shape_51.setTransform(186.2,58.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F4AF95").s().p("AjOAYQC3gfBOiHQASADAOAdQANAcAQgCQANgBAIgSQAJgUAJgFQgGgIgQAFIgZAIQgEAJAKACQAJACgEAEQgFAKgHgIQgHgGgBgHQgFgaAjgRIA2gYQgQgNggARIgsAVQgDgjAkgOQAvgUAHgJQgVgEgaALIgoAVQgHgdAhgOQAsgSAFgJQgSgGgaAMQgZAPgJABQAMghAdgXQAjgcAhAMQAUAHATAcQATAdADAcQAIBEgbBEQgSAtgrA/Ig0BNQgdAqgcAbQhAA8hcAwQhJAnhjAiQAiiRATilgACjhXQAWAOAGgQIgkgWQgOALAWANg");
	this.shape_52.setTransform(169.1,68.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("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");
	this.shape_53.setTransform(98.3,104.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196.6,209.4);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6211A").s().p("AgcgMQALghAkgDQAPAJgGAaQgHAbALAOQgMAAgSAJIgWAMQgRghAJgcg");
	this.shape.setTransform(101.2,70.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AguACQAEgrAdgPQAQgJAQACQASACAGAOQAGANgHAaQgGAWALASQgHAFgbAJQgXAJgIAJQgggQAEgugAgcgOQgJAcAQAiIAXgMQASgJAMAAQgLgOAHgbQAGgZgPgKQgkADgLAgg");
	this.shape_1.setTransform(101.6,71.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("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");
	this.shape_2.setTransform(97.7,106.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A9838").s().p("ABfBrQAMACANAMQANAOAKACQAAgLgdgVQgagTAHgeQASAHAUAYQAXAaALAHQgCgTgigdQghgcAAgfQASALAaAgQAbAgARALQgCgNgOgPIhGhLQgBgGACgRQACgMgFgDQgIAAAAAOIgDASIhtCCQgOgCgTgJIgfgPQAAgLAEhDQAEgugKgWQgMARgVAsQgTAqgPATIiGAAIAKgZQAHgMAKgGQALAlAPgCQAEgLgQgWQgOgUAKgNQAJAEAHAZQAHAYAMAFQADgMgSgmQgOgeAQgQQAKAHAJAaQAKAYALAGQAAgPgNgYIgTgoQACgIAJgPQAJgOABgLQgJAAgIAQIgMAbIg9ASQgkALgSAOQAUACAdgLIAvgSQgEAWgtAMQg0ANgLALQASAHAegLIAwgRQgFARgbAKQgjANgFAFQgKgEgJgLIgQgRQAFgSAQgWIAYglQgGgEgGAHQgIAIgGAAQgFgcANgTQAFgIAbgXIAUgUQALgLAGgBQAJgBAcAMIBjAlQAeAJAbACQA9AEBsAAQB1gCA1ADQACARAUAbQAUAaAAAQQABAOgPAYQgPAaAAASQANgGAJgVIANgiQAMAMgKAgIgNApQAPgBAGgSIAJggQALAHgHAXQgHAZADAHQAKABADgLIAFgRQAYAiAIAbQg0gFgpgnIhBhJQgCATAKAhQALAmAAARQgLAEg3AaQgoASgeAIQgFgqACgZg");
	this.shape_3.setTransform(75.2,134.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBADQAKgcADgQQAPAigpAwQABgLAMgbg");
	this.shape_4.setTransform(110.3,104.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3C51C").s().p("AgGAAQAUgmABgKQADgDgCAIIgQA1QgKAbgDANQgIgYAPgag");
	this.shape_5.setTransform(115,97.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#248D3A").s().p("AgVAaQgGgIgIgCQAFgMANgNIAVgWQABAKgNAPQgPAQgCALQAQgFAPgYQAQgZAOgGQAAAFgKARQgIANAIAEIgPAZQgIAOgOABg");
	this.shape_6.setTransform(59.5,22.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAMQgPgMADgPIAFAAIAOANQAJAIAIACQgFAIgIAAQgFAAgGgEg");
	this.shape_7.setTransform(110.1,207.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4AF95").s().p("AAfCuIi4i7QgBgdALgtQALgtAAgcQAtgKBHgIIB0gLIgoCoQAEAFAFgDIAKgEIApA8QAWAlALAhQADAFgHAAQgHAAABADQgBAFAEANQAEAJgFAHQgDgCgEgMQgCgLgHgBQgIADAHAUQAFATgMADQABghgLgHQgJACAEAUQAFATgLAFQgFgFgCgVQgCgUgKgDQgEAHACAeQABAYgSAEIgCAAQgMAAgRgQgAAuChQAPAMAJgQQgIgCgIgJIgQgNIgFAAQgCAQAPAMg");
	this.shape_8.setTransform(105,193);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4AF95").s().p("AhACHIAWAJIAagBQAAgEADgBQACgagagEQgFAIAGAFQAJAGAAAFQgJACgIgFIgPgHQAAgHAFgIQAEgHgBgIQgRAAgFAWIgKAiQgUgCAFgaQAHgigCgEQgSgCgBA3QgaABADgaQAHgggDgKQgMABgDATQgEAWgFAEQgJgKAFgSIAHgfQgMgDgDANQgEAPgFACQgKgLAEgUQACgKAJgVQAQgnArgrIANAAIASg1QAKgfAKgUQBpAgCMADIgoBKQgHAMgOArQgMAjgNAQIhABBQghAkgRALQgMAGgIAAQgUAAgIggg");
	this.shape_9.setTransform(20.1,186.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3C51C").s().p("AiFANQAIgVABgOIAjAAIgFAOQgEAIABAJQAMABAEgMQAEgOAEgGIAjgDIgFAQQgFAIAFAFQALAAAEgJIAGgUIAngFIgDAQQgCAHAFAEQAJgBADgJIACgTIASgCIAQgEQAEAAgBAJQgBAKAEAAQAGAFAEgKIADgQIA7gIIgGAgQgEATgBAOIkSAhQABgOAIgXg");
	this.shape_10.setTransform(103.9,170.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3C51C").s().p("AgTAsQhJgJg+gWQASgiALgPQAVgZAZAVIgSARQgMAKgFAIQANAIARgSQATgVAPAHQABAHgKALQgJAIAFAIQAKgBAHgJQAJgOADgCIAYAGIgGAPQgGAKAEAGQALAAAEgJQADgMADgFIAtAIIgEATQgCAMAJADQAGgDACgLIADgSIAdACIgBAVQgBAJAFAFQAJAAABgMIAAgXIAaADIAZgDQACAJgJAPIgOAYg");
	this.shape_11.setTransform(28.3,167);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A9838").s().p("AgPAPQADgLAKgLIANgUIAFA3g");
	this.shape_12.setTransform(82.1,149.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3A9838").s().p("AggAjQAKgQAWgYIAggnQAGAagTAYIgdAng");
	this.shape_13.setTransform(80,145.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3C51C").s().p("AiDA2QgxgygZgcIBIAiQBqgsAwgZQABgKgGgYQgIgaAAgNQAKAKANATQAMAUALAIQAMAKAbAHQAfAKAKAFQAfARATApQATAoADAzIh/AVIiGAFg");
	this.shape_14.setTransform(97.9,153.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3A9838").s().p("AgJAKIgLgJQAMgJAegIIgTAhQgGgBgGgGg");
	this.shape_15.setTransform(44.4,139.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A9838").s().p("AguA3QALgVAfgiIAwg4IADAFQgIAVgWAaIgkApIgLAPQgFAFgFAAQgDAAgDgCg");
	this.shape_16.setTransform(79,142.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F3C51C").s().p("Aj9BwQB3i4BKhgQADAEgGAJQgIALAAADQAOAYAYAXIAuAmQAZgGA3AFIBGgEQAUgJANgiQAQgsAHgJQAHAPgHAoQgHApAFANQADAKAMAFQASAGAEADQg4AlhCA3Ih0BkIgjABQiAAAhqg5g");
	this.shape_17.setTransform(43.5,149.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3A9838").s().p("AgBAAIANgMQADAAAAAHIgBAKIgcAIQADgGAKgHg");
	this.shape_18.setTransform(31.1,132.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3A9838").s().p("AgKAUQACgcANgLQAEAFgCAMQgBAJAFAFIgKAFQgEADgFAAIgCAAg");
	this.shape_19.setTransform(35,130.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3A9838").s().p("AgFAAQACgRAGgGQAGACgDANQgDASACAGQgFgBgEAJQgEgKADgOg");
	this.shape_20.setTransform(37.9,128.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F4AF95").s().p("AAGgiQAIANgHAXQgGAWgKALQACgrANgag");
	this.shape_21.setTransform(18.3,125.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F4AF95").s().p("AgGAMQgOgGgBgNQANgKARAJQARAIgFAOg");
	this.shape_22.setTransform(172.8,120.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F4AF95").s().p("AgPAHQAOgCABgQIAJABIAHACQACANgMAFQgFACgDAAQgHAAgGgFg");
	this.shape_23.setTransform(19.7,119.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4AF95").s().p("AgBAKQgWgHgCgNIAagBIAZALQgFAMgNAAIgJgCg");
	this.shape_24.setTransform(177.7,119.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F4AF95").s().p("AgJADQABgGAJgBQAJgBgBAIIgKABIgDABQgCAAgDgCg");
	this.shape_25.setTransform(14.5,115.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F4AF95").s().p("AgbAIQAEgOAagFQAagGgBAPQgBANgTACIgIABQgOAAgNgGg");
	this.shape_26.setTransform(181.7,116.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F4AF95").s().p("AgnBrQgzgRgHgoIACgfQABgRgLgKQAJgLgCgSIgEgjQArgoB3AAQAGAMARAWQARAWAGANQgFADgBAIIgVgCQgMgCgEAHQgFgCACgFIADgJQgQgPgUgDQgYgEgOATIgQgJQgJgGgHAEQANAkBKgJIAAAYQgQAUgjgIIgygOQAIAaArADQAmADAUgPQAAAkgsgCIhBgEQALANAgAFQAdAEAVgJQAIAZglABIg1AEQAHAMAdgBIArgDQgOAZgcAAQgOAAgQgGg");
	this.shape_27.setTransform(12.4,120.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F3C51C").s().p("AgmAwQAJgLAOgCQAPgOARgnQATgnAPgOQgUAzgTAdQgbAtgjASg");
	this.shape_28.setTransform(105.9,115.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("ABCAQQgkgFgOgNQgfAJgmgBQgogBgagNIAAgIIBjAIIAigIQAGABALAHIARAIIBIAFQgMAMgaAAIgQgBg");
	this.shape_29.setTransform(94.1,102.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#221714").s().p("AgKgEQACgFAIAAQAJAAACAFQACAFgNAJQgMgJACgFg");
	this.shape_30.setTransform(106.7,95.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgBAMQgGgBgCgKQgDgIAFgDQAGgDAMAMQgGANgFAAIgBAAg");
	this.shape_31.setTransform(79.6,92);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F4AF95").s().p("AByCvQgTgPgJgFQgUgKglgJIj0g6Ii3gpIAohyQAYhHAZgkQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQDGBOCKBAIA1AcQAhARATAHIBJAYQAvAPAYAKIBDAbQAlASARAbIhpgQQgFgQgQgMIgegUQgEANANALIAYAQQgKAXgkATQgJgLABgJQABgIAKgMQgFgEgIABIgOABQgDAAAAAHIgCAJQgSAJgWgHQgYgKgLgDQgCAUAhAHQAgAHAUgNQAAALAIAIQgHALgaADQgbADgHANIgEAAQgQAAgQgKg");
	this.shape_32.setTransform(154,101.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgLAHQAChAgNgkIAPgFQAHgFAHAAQAYAsgNBCQgKA2gbArg");
	this.shape_33.setTransform(114.3,88.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F3C51C").s().p("AgVADQgBgogMgSQAPACATgCQASgDAMgIQAEgBABAGQgIAcgUAlQgXAugHARg");
	this.shape_34.setTransform(120.1,83.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F4AF95").s().p("AjPESQAdiaAJhUQAOiQgRhtQAKAFANANIAWAWQAvAmBEAYIAgAIQAUAGAJAMQgIAJgHgGQgLgJgGABQgFAYAbAAQAbAAgBgYQgBgOgbgJIgrgMQg+gVgvglQgxgmgWguIgCgDIAAgFQAEAAABADQBSBIBEAeQBhArBxgRQgJANgwAIQgnAHADAaQABAPANAEIAXgDQALgGgBgIQgBgIgUgFQgGAEAGAGIADAGQgWgJALgGQADgDAVgGIArgMQAVgHALgNQAWB9grB2QgfBVhHBhgABjBfQAmAFAQgQIhIgFIgRgJQgLgHgHAAIgjAIIhigIIAAAIQAbANAoABQAlACAggLQAOAPAkAEgACUAFQgCAGAMAJQANgJgCgGQgCgFgJAAQgIAAgCAFgAh3glQgFADACAKQACAJAGACQAHABAHgPQgLgKgGAAIgCAAg");
	this.shape_35.setTransform(90.8,94.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AATDAQAEgegGgWQgFgOgYgWQgWgTABgRQAAgOAVgUQAVgWACgLQAEgVgdgsQgigygEgfQgDgdAGgaQAEgPAOgfIA6ANQAyCHgsEUIgGAlQgFAVgIALQgBgQAGgng");
	this.shape_36.setTransform(67.8,90.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F4AF95").s().p("AieDIQgXAAhCARQAWisB4h0QBihgCuhDQBSB5gCECIh+gpIgKgyQANgHAdgJQAagJAJgNQgUgBgeAMIgzAYQhJAggoAlQgzAvgRBEQgKgmg2ADg");
	this.shape_37.setTransform(31.1,88.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,0.9).s().p("AgIgEQAIgIAGAHQAHAGgJAIIgBAAQgMAAABgNg");
	this.shape_38.setTransform(117.2,59.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,2.6).s().p("AgPAbQgBguAWgMIgCAdQgCAZAOAEQgGAFgKAAQgJAAgGgFg");
	this.shape_39.setTransform(114.9,60.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,1.2).s().p("AgHgLIAPgDQgBAOgHAOg");
	this.shape_40.setTransform(121.9,57.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgTApQAAgJAKgDIAPgHIgDgmQABgXAQgFIgCAiQgBAXADAPIgUANQgGAEgFAAQgFAAgDgEg");
	this.shape_41.setTransform(108.8,61.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F3C51C").s().p("AAIE3IhdglIgqibQAXABAoAOQAvARARADQASiHgmiHQgchkhCh0QBOBJBnAdQgiBFAPA4QAFAWAfArQAbAmgCARQgBAMgUAVQgWAVgCANQgCAQAGAMIAPAUIARAPQAMAKADAHQAIASgGAkQgHAnACALQACAHAFAGQAHAHACAHQgDAFgDAQIgHATQg1gDg2gTg");
	this.shape_42.setTransform(56.7,88.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,2.5).s().p("AgKAhQAUgXgFgrQAHALgBAVIgEAig");
	this.shape_43.setTransform(102.7,58.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,1).s().p("AgKAEQAAgKAJgCQAIgBAEAIQAAAIgJACIgCAAQgGAAgEgFg");
	this.shape_44.setTransform(98.1,55.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,4.2).s().p("AgVAUQgUgbAKgnIAhALQAVAJAMACIgNAfQgIAaANAOIgCAAQgcAAgSgbg");
	this.shape_45.setTransform(93.8,55.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhRgOIgCgXIgQgRQAGgGAAgEIgEgOQAJgGAHAZQAEgDgEgKQgEgLAEgDQAHACADAMQADAPADADQAEgBgDgHQgDgHAFgBQARAfA1ARIBcAaQACAHgJABIgMACQAEAQgCAWQgBATgGAQIgRAAQiMAAAAhlgAAvBMIASAAIAEgjQABgVgHgLQAFAsgVAXgAg1AhQATAcAfgBQgNgOAHgaIANgfQgLgCgVgJIgigLQgKAmATAcgAAKAKQgJACAAALQAEAGAJgBQAJgCAAgJQgEgHgHAAIgCAAg");
	this.shape_46.setTransform(96.9,54);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F3C51C").s().p("AgcABIAGg+QAOATANAcIAZAzQgLAEgSAJIgdAMQgDgYADglg");
	this.shape_47.setTransform(44.3,59.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgEASQgYgBgFgOQgIgZAkAGQAkAGAEARQgRALgUAAIgCAAg");
	this.shape_48.setTransform(116.3,49.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgSAVQgQgGgDgOQAHgDALAAIATgCIAOgKQAJgHAIABQAMAPgIALQgGALgRAEg");
	this.shape_49.setTransform(104.7,47.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F4AF95").s().p("AgHAHIgMg6IAJAAIAHACQgDASABAPQACASAHAHQAEgGgEgRQgEgSAEgJQAPAIABAhIgCA0QgSgLgHgig");
	this.shape_50.setTransform(68,51);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F4AF95").s().p("AgQAIQgFghAWAJQAXAKgJAZg");
	this.shape_51.setTransform(67.7,43.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#248D3A").s().p("AgXgBIAvgLIgYAXQgCACgEAAQgJAAgIgOg");
	this.shape_52.setTransform(55.3,21.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#248D3A").s().p("AgFgFQAGgLAPACQgFAEgLAKIgPAPg");
	this.shape_53.setTransform(64.7,19.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#248D3A").s().p("AgNAAQAGgHABgHQAIABAIAGIANAIQgRAIgcAGQACgGAHgJg");
	this.shape_54.setTransform(55.4,18.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#248D3A").s().p("AgegIQAKgCAVABIAeADIAAAPIgjABQgKgEgQgOg");
	this.shape_55.setTransform(64.5,15.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#248D3A").s().p("AgLATQgRgNgHgBIANgdQAlAIAVAiQgNgBgOgOQgNgNgKgDQgEALAPAIQAQALACAGQgFACgFAAQgHAAgJgGg");
	this.shape_56.setTransform(59.2,15.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F3C51C").s().p("AhDgNQAUgWAhgIIA8ACQAeAKAIAcQgtABgsAOIhMAgQgHghAVgYg");
	this.shape_57.setTransform(77.2,11.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F3C51C").s().p("AgqAAQAPgVAAgLQAHAHAkAHQAfAGAFAQIg1AMQgfAHgRAKQgGgRANgQg");
	this.shape_58.setTransform(75.5,4.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F4AF95").s().p("AkCCBQgOhcgFheQgFhqAIhaIB8AqQBNAbA3AOQCeAnCIgUQAHAogEArQgFAwgRAXQgGgBAEgFIAFgMQgIgBgEAGIgHAKIgBgBIABgDQgHgFgFAJQgFAMgEABIgrAIIgoAJQgQAPgEAfQgFAhAWAGQAKACAWgCQAVgDALgFQAVgJALgnQALgmATgIQgDAQgNAUQgOAWgCAJQgDAJABAQIgBAYQgOA+g4AhQg0AehPAAIgBAAQiWAAiDh9g");
	this.shape_59.setTransform(100.2,53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195.5,213.3);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231815").s().p("AgzgiICSARIi9A0g");
	this.shape.setTransform(129.7,34.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB7427").s().p("AioAjQAOgSAXgEQAEACAEALQAEAMAGACIAFgCIAGgDQACgGgEgIQgFgLAAgFIAOgEIANgEIADAWQABAPAHADQAFABAEgDQAFgFgBgQIgEgYQAWgCAOgJIAGAUQADAMANgDQAGgGgCgKIgEgUIArgLQAGAcAJAIQATABgGgRQgKgTAAgIQAQgBAYgKQAEAHAEAVQAHARAOgLIgEgTQgDgMABgKQAUgCAUgJQAJAFAHAPIANAXQhFAYh2AfIi+A1QAJgbALgOg");
	this.shape_1.setTransform(147.6,159.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB7427").s().p("Ai6BVIgvghQAQgFAZgUQAagWAOgGIAmgKQAYgGAMgLQAEgQgDgXIgHgnQAMAEASAXQAQAWAOACQARAEAogKQAdgIAYgKQALgEASgMIA/AoQAoAYAQAYIkYBSIguATQgcANgOAAQgXAAgdgWg");
	this.shape_2.setTransform(141.1,150.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A9838").s().p("AA1C0IglgUIhFgdQAAgJAFgtQAFghgKgPQgWARgfAkQgjApgQAOIgoAFIgYgkQgPgTgSgIQgJAOASARQAYAXABAJIheAUQAphOAqg3QAeATALARIAFARQAEAKAJAAQARgMgdglIgkgdQALgXAQgRQAVACARAQIAeAYQAMgQgXgTQgTgRgYgGQABgHAPgOQAMgMgIgMQgPAEgLAOIgTAZIhoAYQg5AOgqAPQAfgmA5gwIBjhSQAKAIAPACIAiACQB5AFB8gMQB9gLBmgZIAIASQAFAMAFAGIgeAcQgSASgBAVQAPABAPgVQARgZALgEIAdAkQgbAigEAJIgNAYQgFAQAIAJQANgIANgdQANgdAOgIIAdAdQgJAPgBAfIAAA2IglAJIgqglQgZgXgTgLQgJAPAIAiQAKAogDASQgoAGgqAaIhHAtQABgKAGgbIAHgqIAeAPIAhgBQgEgOgYgFQgbgHgGgIIAHgrIBNAgQARAEAJgJQgDgLgOgDIgagEIg6gdIAHg3QAHABAcAPQAWALANgFQgFgRgXgJIgogOIACgYQACgNgLgCQgLAHgBAZIgEArQgWAMhxBEIgVAMQgNAIgBALIAXAAICNhXQAEAIgDAPQgEATAAAHIgUAHIgdASIg2AqQgPAOgFANQAMAIARgPIAbgaQALgKAygfQACAFgCANQgDAPAAAFQg4AagWAoIAFAGQAPgFATgSQAVgUAMgGQgEBBgaACIgCAAQgLAAgTgLg");
	this.shape_3.setTransform(103.3,137.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EB7427").s().p("AhPELIgRhBQgKgjgNgWIA5gHQAmgCAPgJQgmj8iXiUIBIATQAuALAlACIAnBhQAWA0AcAaQAMALAXAMQAcAOAMAIQgSAcgEAPQgHAXAIAXQAGAQAZAYQAZAWADANIAAAWQgBAOADAGQAFAJALAEIAWABQACAZgGArQhTAHhFAAQhDAAg3gHg");
	this.shape_4.setTransform(91,93.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EB7427").s().p("AhXEBIAOgaQAdgJAJgJQAJgLADgVQADgdADgJQADgKAOgKQARgNADgFQAIgMAEgSQACgQAAgPIgJgbQgHgSACgPIAMg2QAAgngRgmQgKgSgfgxQApADAigZIAygrQAAFYiGDKIg/ANQABgGAKgRg");
	this.shape_5.setTransform(135.7,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("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");
	this.shape_6.setTransform(100.8,106.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#248D3A").s().p("AgMADIADgPIAYgDIgcAfQgCgDADgKg");
	this.shape_7.setTransform(57.4,35.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EB7427").s().p("AgrAIIgBgvQAGAFArgEQAlgEADAdIhBA1QgXgFAAgbg");
	this.shape_8.setTransform(74.5,7.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4AF95").s().p("AgFgJQARgEAJALQgEAEgPADQgQACgEAEQgHgPAUgFg");
	this.shape_9.setTransform(49.8,204.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EB7427").s().p("AgNAhQAIgJABgWQABgTgGgPQAaAAgDAhQgCAggXAAIgCAAg");
	this.shape_10.setTransform(177.4,185.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F4AF95").s().p("AjFB4IAbglIAphRQAphRAthOIACgGID7A4Ig6BdQgjA3gLAxQgIAGgSAEIgeAGQgNgagkADQgkAEADAlIgZAHIAOgQQAJgKgDgIQgNgGgNAQQgGAIgKAWIglAHQAAgLALgLQALgLABgKQgEgDAAgEQghAMgEArIgfAGQAAgMAKgNQALgNABgJQgNgLgPAWQgNAVADASIgOAFIgNABQgDgVAOgXg");
	this.shape_11.setTransform(49.2,193.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EB7427").s().p("AiKgMQALgtArASIgFAKQgGAGAAAGQABAFAGAEQAJgBAIgJQAHgMAFgCIAtAGQgDAIABAIQAAAKAHAAQAIABACgHIAEgPIAXAEIgEARQgBALAHADQALABADgKIAEgRIANAAIAKACQgCAMAAAGQACAKAJAAQAIAAACgJIABgRIAvAHQgDAHgEAPIgEAYg");
	this.shape_12.setTransform(64.7,177.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EB7427").s().p("AgkAOIAkgmIAlAOIgJAQQgGAKgBAJg");
	this.shape_13.setTransform(46.9,173.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F4AF95").s().p("AjpCaQgDgWAJgjIAMg8IAHg8QAGghAMgUIEhhRQABAngQA4QgUBIgDASQAOANBDAFQBDAGAOAMQAOAMgDAdQgCAegYABIADgWQAEgXgFgNQgKgcgmADQgnACgDAeQAGADAbgMQAXgLAOAQQAIAPgGARQgFAQgLAHIkJAOIhKAIg");
	this.shape_14.setTransform(151.6,175.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EB7427").s().p("AkOBcQAIgdAWggIByidQAMAHANAMIAtAvQAQAPAIACIAogFIArgLIBYgLQARgGAagjQAcgmAKgHQACALgFAXQgEAWACAKQAEANAUAHQAbAHAFAEQg0Aog+A/IhoBwQjFgTh+gtg");
	this.shape_15.setTransform(74.3,160);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A9838").s().p("AgyAiQgjgggYgPQARgOAegMICqguQAFAEgHAKIgMAPQgnAEgsAcQgrAcgRAXQAMAJAUgNIAcgXQAmgZAbgKQgHAUgaAmQgbAogJAWQgQgMgpgng");
	this.shape_16.setTransform(69.7,143.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3A9838").s().p("AgdAAQAAgWAEgQIAbAcQAQARANAIQgJAJgRAGIggAJQgDgQABgXg");
	this.shape_17.setTransform(147.9,137.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F4AF95").s().p("AgWAZQACgHAJgRQAIgNABgMQASgDAFAKQAFAJgHANQgGAOgMAHg");
	this.shape_18.setTransform(24.8,120.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F4AF95").s().p("AgcAPIAbgQQAMgMADgRQAPAIAAAQQgBAMgMAMQgLAMgMAAIgBABQgNAAgHgQg");
	this.shape_19.setTransform(19.7,118.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4AF95").s().p("AARAbQAPgHAGgFQAMgIgEgLQgGABg8AcQgsAWgagXQAMgcApgTQAvgUAVgNIAVAkQAPASAWACQAJAmgmAOQgKAFgIAAQgVAAgEgeg");
	this.shape_20.setTransform(10.8,112.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhMAWQACgOANAAIAYAAQAMgCAQgJIAbgRQAigTAZAaQgGALgPgDIgZgEIgsAbQgUALgRAAQgOAAgMgHg");
	this.shape_21.setTransform(119.9,98.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgHALIgGgMQAKgVAMAQQANAPgSAFIgEAAQgEAAgDgDg");
	this.shape_22.setTransform(110.3,89.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgLAGQgBgGAGgHQAGgIAFACQAHADAAARIgGAFIgFACIgBAAQgKAAgBgIg");
	this.shape_23.setTransform(128.8,87.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4AF95").s().p("AjzDPQgPgKgUAGQgBgHgMgJQgKgIAAgGQAAgCACgDIABgGQAaADASgRQAUgRgTgTQgIAAgBAKIgDAPIgNAEIgOgCIgJgUQgGgNgMAAQgJAGAJAOQAKAQgFALQgpgEgEgvQgEgwAsgCIAWACQAMADAHAGIAJANQAFAIAIgBQAKgGgHgKQgKgMgCgGIDviRQCPhYBlgzQBoB1AmDSIhjAJQgRgTgFgPIAkgIQAWgFAJgJQgFgNgVAFIgjAKQhhAch5AyQgwATieBGQgCg1gbAFQgCAJAIAPQAIAQgDAPQgJAKgXAFQAAgTgOgKg");
	this.shape_24.setTransform(51.9,95.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgkDQQAmhWABiAQAAiKgwg9QAqgKAhBNQAQAmgFArIgGAYQgFAPAAAGQAAAPAHARQAJASAAAMQABAdgWAUQgaAYgEALQgFAPgCAiQgEAZgTAAIgBAAg");
	this.shape_25.setTransform(132.7,90);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ABdDWQgEgJABgPIgBgVQgEgQgOgOIgZgWQgcgaAPgpIALgQQAJgMAAgIQAAgRgigRIgwgaQgagYgWg0IghhbIAiABIAdAYIAQAIQAJAEAEAEQALAKAOAZIAXAuQAjBDAWBNQAaBagCBHg");
	this.shape_26.setTransform(99.8,90.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgygEQAGABAvgCQAmgCAKALQgYACgTAAQgmAAgUgKg");
	this.shape_27.setTransform(84.9,66.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F4AF95").s().p("AgPARQgchdg9hnIBLAQQAzAJAfgKQAEAKgPAFIgXAIQAGAPANgCQAMgBAMgMQALgNAAgMQAAgNgQgFIgNACIgOAFQg8AJhHghQg6gaglgmQA6gKBdAUQBpAWAxgBQAIASgKAPQgOARgEAJQgBAQAWAAQAWABAEgMQAAgJgJAAIgQACQAMgKAFgNQAGgRgHgOQAeACAUA2QAjBigZCIQgXB9g1BIIhnAOQAMiCgjh7gAAFBKQAbAQAkgUIAtgcIAZAEQAPADAGgLQgZgagiATIgcARQgQAKgMACIgYAAQgNAAgCAOgAgbghIAGANQAEAFAIgCQARgFgMgQQgGgHgFAAQgHAAgFAMgACkhAQgGAHABAHQABAJAMgBIAFgCIAGgFQAAgSgHgDIgCAAQgFAAgFAGg");
	this.shape_28.setTransform(111.7,93);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EB7427").s().p("Ag2hAQAfAPAaAYQAYAVAcAhQgQAFgWAMIgjATQgLhLgZg2g");
	this.shape_29.setTransform(67.1,68);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4AF95").s().p("AhuDeIioguQAeiEAGhhQAWAGAaALIAuATIAyAVQAgANARgDQALgCAKgKIASgRIAXgQQAMgKACgMQADgagTglQgLgXgBgFQgEgSAXABQAWAAAFAaQAHAfAJAGQAGAEAVADQATACAGAJQADAFgBASQAAAOAJABQASgMgLgaQgKgZgUgCIArhEQAbgqAZgMQAagLgcA/IgVAVQgLAMAFAOQAaAPAXgfQAagkATADQAGAUgcAVQgdAVACAOQACAVAagHQAOgEAZgMQAEAMggAPQghAQAAAOQABAYAxAAIgpAWQgeAMgMAKQgKAIgPATIgZAgQgjAmhJBEIgjAfQgVAPgYABIgDAAQgWAAgggKg");
	this.shape_30.setTransform(171.5,78.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,0.8).s().p("AgGgGIAHgDQAEADACAGQABAGgDACIgFACQgGAAAAgQg");
	this.shape_31.setTransform(133.6,45.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0.1,0,0,0.1,0.8).s().p("AgHAHQgEgHAIgFQAHgEAEAHQACACgCACQgBABAAAAQAAABAAABQgBAAAAABQAAAAAAABIgGABg");
	this.shape_32.setTransform(127.9,43.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0.5,0,0,0.5,4.7).s().p("AgKAbIgxgxIBRgRQACAVANAWQALASAMALQgRAHgQAAQgUAAgRgNg");
	this.shape_33.setTransform(121.9,44.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag1AzIgkgmIgUgPQgKgJgFgJQASgIAngIIBCgPQA/gZAdAVIATAqQAMAZADASQhMAbgYAFQgRAEgNAAQgeAAgSgPg");
	this.shape_34.setTransform(124.8,43.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F4AF95").s().p("AgLAPQgQghAAgXQgBgeAiAUQABAJgFAGIgHAMQAFANASAXQAOAXgGAZQgTgBgSgsg");
	this.shape_35.setTransform(92.6,49.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#248D3A").s().p("AgZAQIApguQASAJgNA1g");
	this.shape_36.setTransform(60.9,35.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgCAGIgGgDQgBgIAIgBQAIgCACAIQABACgDACIgDAEg");
	this.shape_37.setTransform(128.3,44.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#248D3A").s().p("AgMAyQAFgXAAgWQAAgbgHgPQAAgGAGgDIAIgHQAOASABAlQABApgTALQgCgDgHgBg");
	this.shape_38.setTransform(66,34.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#248D3A").s().p("AglAYIAAgwIBLAQIgdAZQgOAIgUAAIgMgBg");
	this.shape_39.setTransform(60.5,29.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#248D3A").s().p("AgXgWQAGgHAPgGIAXgKQAGABgGASQgIAagBAIIgEAZQgFAKgKADQAAgjgQghg");
	this.shape_40.setTransform(70.1,30.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F4AF95").s().p("AAQDnQg3gEh8giQAGhUgfh0QgniSgFgvQEVgiCcACQATAgAHAYQAJAegDAiQgCAQgJAWIgPAkQgQAqAaAdQgUAMgDAjQgpgDgUApQgUAqArAOQgRA7hcAAIgfgCg");
	this.shape_41.setTransform(121,45.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#248D3A").s().p("AhFAPQAPgIArgKQAlgLARgMIALANIAQAKIgoAMQgZAJgLAJg");
	this.shape_42.setTransform(67,24.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EB7427").s().p("AgzgSQARgYAagRQAZgQAUAAQAUAAAJAMQAHALAAAXQhGAjgwBHQgzgjAtg8g");
	this.shape_43.setTransform(79.5,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.7,212.1);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("EgrSAfRMAAAg+hMBWlAAAMAAAA+hg");
	this.shape.setTransform(277.1,200.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,554.1,400.1);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231815").s().p("AhFggIByAGIAZA7g");
	this.shape.setTransform(104.9,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231815").s().p("AglgYIBrAMIiLAlg");
	this.shape_1.setTransform(79,28.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4AF95").s().p("AiqCXQgIgPAIgSIARgbQgMgLgJAQIgRAWQgCgNAHgLIALgRIgTABQgIAIgDANQgHgLAKgLQAMgNgBgJQgGgHgLALIgHAHIAQgVQABgGgFgCQgGgCACgEQA1gtBVgkQAAANAGABQAOgQAMgrQANguAKgPIDnArQg3BlgTBfIjOA6QgpAMgbADIgKABQgQAAgNgGg");
	this.shape_2.setTransform(43.6,181.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4AF95").s().p("AgmCaIg8hZQgTgcgEgZQgQhagfhTID6gWQAUA+AHBmQAGACAGgFIAHAAQAZArAJAaQAPAwgTAgIgDgSQgDgIgKABQgDAFADAZQACAUgNACIgCgdQgDgQgJgEQgEADAAAlQAAAegcgEQAGgUgCgSQgCgXgQADIABAoQgDAZgUABIgCgrQgEgVgQgFQgFAHAEAJIAEARIgPAFQgKAEgFgEQAAgGAHgFQAHgEAAgGQgQgGgIAJQgHAHADALQAEANAKAEQAOAFATgKQADAOgOAIIgdACQgOgFgRgZg");
	this.shape_3.setTransform(120.8,191.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6211A").s().p("AgggQIAeAAIAAARQAAALAFABQAKAAABgUQACgTAUAHIgBASQAAALADADIhLAIg");
	this.shape_4.setTransform(104.5,171.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6211A").s().p("AhqAJIgBgSIAegDIAEATQABAMAMgCQAEgDgBgLIAAgPIArgDQAAANABADQACAIAIAAQAGgCgCgLQgBgNABgBQAYgGAPAJIAYASQAIgDgEgHIgHgNQAEgEALABIASAAIAQAdIjbATQADgEAAgMg");
	this.shape_5.setTransform(120.4,170.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6211A").s().p("AiWgJIARgZQALgMASgBIgGAUQgFALAIAFQAKAAAEgMQAFgQADgCQAEgBAEACIAIABIgFARQgDAKADAGQALACAFgKIADgTIANAAIAMACIgDATQgCALAKAAQAHAAABgJIADgPIAlAFIgBASQgDAJABAIQAFgBABAEQAJgBACgMIACgTIAcAFIAAAUQAAAMAFADQALACAAgNIAAgVIAjAHIABAYQACAMALAAQAGgEgCgKQgCgOABgFQANAAADAOIAAAeg");
	this.shape_6.setTransform(55.3,164.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A9838").s().p("AgSgaIAXAWQAPANAEANIgvAFg");
	this.shape_7.setTransform(81.4,137.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3A9838").s().p("AgDALIgagSQAcgUAfgCIgGA7QgMgHgPgMg");
	this.shape_8.setTransform(74.8,136.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E6211A").s().p("AiFB3IhNjUQA7gGAYgPQAhgUAEgxQAKAGAIASQAIASAJAHQAUAPA2ADQBCADAUAHQAPArAnBbQAkBXAQAyIk4ATQgRgZgPgog");
	this.shape_9.setTransform(109.5,149.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E6211A").s().p("Ai/B7QAXg6AihJIA8iCQAmAFAagOQAQgJAXgaQgLA2A0AmIAtAdQAbAQAMANIAmgFQg8CXghBFg");
	this.shape_10.setTransform(62.1,145.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A9838").s().p("Ag+AJIA6geQAhgRAigDIgLA4QgsAGgfAVQgbgJgMgYg");
	this.shape_11.setTransform(72.9,130.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A9838").s().p("AgSAAIALgSQAJADAJAOQAKAOAJADIg7ADQACgIAJgLg");
	this.shape_12.setTransform(52.2,128.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3A9838").s().p("AjlA+QADgHACgTQADgSADgIQAeATAbAcIAWAdQAOAQAQAEQABgSgQgRIg5g4QgRgPgPgIQACgTAGgUIALgkQAiAMAjAlIA7A7QAFgRgSgVIghgjQglgkgngQQAFgXAGgKICYAKQBYAEBFgGQACALAGAGQgjAXgsAqIglAiQgVAUgCAWQALgCALgLIBBhCQAegcAegNQAEAOAKAZIAOAmQgeAKgeAZIgaAVQgOAPgEAPQAVgDAhgfQAhggAZgEIAQAmIgjAZQgVAPACAUQAOgCAPgRQAPgSANgCQAJAJAHASIALAhIiZgSIgugJQgPgHgMgbQgMgcgOgGQgNAJgIAeQgKAhgHAKIhoAWg");
	this.shape_13.setTransform(102.7,125.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3A9838").s().p("Ah7BtQAKgPgPgQQgVgWgBgFIAhgxQALAGAJAUQAKAXAIAGQAVgXgwgvIAgg0QAPAIAOAeQAPAdANAJQAHgLgGgOIgOgaIgagjQgIgPASgSQBEATCBATIgKAeQhLAKglAgIADAGQASAAAfgNQAigQARgDQADAMgIAXQgJAaABAOQgkAEghAPIg4AeQgDgEADgTQADgTgFgHQgPAEgjAhQgXAVgfAAIgLAAg");
	this.shape_14.setTransform(67.8,119.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABiAlQgbgCgbgTQgYgQgPgTQgaARgxACQg2ABgLgXQAGgHAMAFIAXAIIA3gDQAbgHARgMQAdAfAXANQAhATAuABQgBALgPACg");
	this.shape_15.setTransform(83.5,91.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgIANQgJgMALgJQALgJAIAMIAAAMQgGAGgJAAIgGAAg");
	this.shape_16.setTransform(100.7,88.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLAIQgEgNAKgGQAJgEAIAIQAEAOgKAFQgDABgDAAQgGAAgFgFg");
	this.shape_17.setTransform(67.8,82.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F4AF95").s().p("AlaCbIgggJQAhhTA1hPQAshCBAhKICTANQBmAHAvAKIA3AUQAjAOANgBQATgBATgbQAVgcAMgEQAGAIgGAUQgFATAKAIQAOABAPgQQANgPAKACQAKARgMASQgRATgFAJQAEARAWgFIAigEQAAAagVAOQgbANgMAGQADAHAYAGQAUAFgEASIgzALQgcAIgLAQQAFAbgJASQgKAVgYACQAMg7hCgJQhaACgsgCQhogFhqAQQhqARg+AdQAEAKANgEIAWgGIgOAZg");
	this.shape_18.setTransform(158.7,81.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhBAsQAdhMAphIQAcguAKgLQAdggAgANQgGBUgoA7QgkAyhAAjQACAUAGAcQACAVgKAPQgEAFgkAXQgQAKgEAPQAIhBAdhMg");
	this.shape_19.setTransform(113.8,83.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E6211A").s().p("AjGD5QgCgVAKgSIAUgeIAFgTQADgLADgFQAHgIAXgNQAVgLAGgMQAHgOgCgXQgBgPgHgaQBEgeAmhAQAphFgGhVIBUgJIBPgPQhVBjgqA8QhABdgfBgQAJALAUAFIApAGIhIBiQgQAWgMAFIhDAEQg1gFgZAEg");
	this.shape_20.setTransform(121.6,86.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F4AF95").s().p("Aj2DeQgfiCASiJQATiOA/hOQAHACAOAJQAMAHAKABIgDARQgBALAEAFQACALATAKIAfARQARALAFALQAHAOgYACQgIgDAHgFQAJgHgCgGQgLgGgIAGQgHAFgBAIQgEAaAfgBQAegBgDggQgCgXgmgRQglgQABgcQB8AsDlgGIgoAcQgZATgeAHQgRAEhKgMQg1gIgFAbQgEARALAKQAJAIAOgBQAOgBAFgIQAHgKgLgPQgKgCABAKQABALgIAAIgKgBIgHgEQAHgZAeAGIAwANQAyAGAzgeIBPg0QACAFgFAHIgIAKQiPDJgXD1QjMgLiDghgAghBOQAcATAZACIAWACQAPgCACgLQgugBgggTQgYgOgcgfQgTAMgaAHIg4ADIgWgIQgNgFgGAHQALAYA2gCQAygCAbgRQAOAUAYAQgABYAXQgLAKAJAMQAPACAHgIIAAgNQgFgHgGAAQgEAAgFAEgAjvgiQgLAFAEAPQAJAIAKgFQAKgEgEgPQgFgFgGAAQgEAAgDABg");
	this.shape_21.setTransform(91.3,85.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E6211A").s().p("AgjAiQAJgSAYgTIAlghQADAPgJAVIgNAlg");
	this.shape_22.setTransform(145.4,61.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbCwIgBgaQgCgHgLgLIgOgRQgGgOABgKQAAgGAFgOIALgQQAJgMACgKQABgMgIgZQgKgbAAgLQAAgcALgkQAMgiAPgTQAog0AhAQQgGASgTAjQgUAlgHATQgTA4gIBKQgIBNAGBOQgHgGAAgRg");
	this.shape_23.setTransform(65.4,77.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4AF95").s().p("AgCgBIAGgGQAGAEgGAFQgEAGgGAAQAAgFAEgEg");
	this.shape_24.setTransform(131.3,49.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F4AF95").s().p("ADbCZIgqgVQg7gZhzgjIgxgQQgdgIgRADQgPADgLAUQgLAXgLAFQgRgHABgVQAEgdgCgFQgGgRgsgKQgrgKgIgWQAHgIASAEIAYABQgBgLgWgXQgRgSAHgVQANgBAOAIQAOAJALAAQADgJgOgdQgLgXAQgNQAMADAOAQQANAPAOACQAGgEABgUQAAgVAGgEQAOgCAPAVQAQAYANADICmAIQBXAIA+ATQgJCQATBtQgOgEgXgLg");
	this.shape_25.setTransform(27.1,65.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F4AF95").s().p("AgUAOIAEgNQALAKAJgMQAHgKAEgQIAIAAIgQAiQgKASgTAEQgBgIADgHg");
	this.shape_26.setTransform(132.1,51.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E6211A").s().p("AALAsQgVgEgNAEQAHgTgQgdQgOgaAMgPQAogKAVAhQATAcgHArg");
	this.shape_27.setTransform(89.4,51.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AADA6IgngEQAGgYgOgYQgQgZACgQQACgSASgJQARgHAVAEQAhAGASAxQATAxgcAcQgMgHgbgCgAALArIAdAFQAGgrgTgcQgVghgnAKQgNAPAPAbQAQAcgHATQAGgCAIAAQAIAAALACg");
	this.shape_28.setTransform(89.2,52.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E6211A").s().p("AAEEfQgGgKgNgdQgvhrgOiXQgPifAeiHIAeAtQATAaAVAKQAMAGAXADIAmAFQg8AZgcBIQgeBLAdBLQgZAWACAsQACAsAbASQgBAgATAnQAUApACAbIgEAAQgRAAgOgSg");
	this.shape_29.setTransform(61.1,76.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4AF95").s().p("AgFgEQAFgIAMABQAEADgBAHIgDAKIgNABIgNACg");
	this.shape_30.setTransform(133.5,46.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,1.1).s().p("AgKAGQgCgMAKgDQAKgCADAJQgBAIgHADIgEABQgFAAgEgEg");
	this.shape_31.setTransform(102.3,40.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,2.5).s().p("AACAiIgJAAQgCgNAGgVIAJghQAEAEgHAaQgFAZALAJQgBADgEAAIgCAAg");
	this.shape_32.setTransform(96.3,41.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,4.1).s().p("AggAUQALgUgFgQQgDgLgFgFQAzgLAYAFQgGBLhLADQgBgCAJgSg");
	this.shape_33.setTransform(107.2,41.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhqA6QgFgRAFgWQACgJAJgZQAAgFgJgDQgHgDACgIQAcgCBLABQA/gDASgaQAEAFgDAFIgGAJQAHgBAGgOQAGgMALAAQAAAGgDAGIgFAKIAIgIQAEgHAHABIgGARQgCAGAIAHQgTAJgLACQADBBhCAWQgaAJgbAAQgjAAgkgPgAgLgRQAGAFACALQAEAQgJAUQgKASACACQBLgDAFhLQgIgBgLAAQgWAAgiAHgAhZAQQgGAVACANIAKAAQAGABABgEQgMgJAGgaQAHgZgEgEgAgcgDQgKADACAMQAGAGAIgDQAHgDABgJQgDgGgHAAIgEAAg");
	this.shape_34.setTransform(104.9,40.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgBAgIgVgMQACgKAMgPQALgPABgNIAFABIAGABQABAPgFALIgLARQAAAFANAEQAMADgCAKg");
	this.shape_35.setTransform(87.7,40.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,2.3).s().p("AgJAeQgBgCAKgVQALgVgCgPQADARgEAUQgEAWgKAAIgDAAg");
	this.shape_36.setTransform(82.5,39.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,1).s().p("AgCAIIgHgEIAAgKIAQgCQgBADADADIABAGQgFACgBADg");
	this.shape_37.setTransform(79.1,36.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FFFFFF","#E3F3F7","#C8E7EF","#B4DFE9","#A8DAE5","#A4D8E4"],[0,0.165,0.373,0.58,0.788,1],0,0,0,0,0,3.9).s().p("AgYANQgLgcAMgeQAMABAOAJQAQAKALABQgOAXgDAHQgIAUAGAUQgZgEgKgdg");
	this.shape_38.setTransform(75.7,36.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgvA2QglgjAWg1IgHgMIgJgKQgBgGADgBQADgCADADIgCgMQgCgGAEgDQAJADgBAQQAEgBgBgKQgBgLADAAQAHAAgBANQAAAOADADQACgBgBgHQgBgHAIABIAFAWQAOALAfAOQAjAPAMAIIAPAAQAIABgBAHQABAGgIAAIgKACIgEApQgFAUgKAKQg6gBgggggAAnAwQgKAVABACQANAEAFgaQAEgVgDgRQACAPgMAWgAg0AYQAKAdAaAEQgGgUAIgUQADgIANgWQgKgBgQgKQgPgJgMgBQgMAeALAcgAgCALIAAALIAFADIAIACQAAgDAFgCIgBgHQgCgEAAgDg");
	this.shape_39.setTransform(78.5,35.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#248D3A").s().p("AgJAAQgDgDAAgEIAaADQgJAJgMADg");
	this.shape_40.setTransform(151.4,26.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#248D3A").s().p("AgJADQACgIAIABQAJABgBAIg");
	this.shape_41.setTransform(152.3,23.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#248D3A").s().p("AgKAdQgJgIgKAAQADgNgEgRIgHgeIATAGIAPAeQAIARALAHIALgGQAAgJgLgKQgKgLgBgKIALAEIALABQAAATALAKIgRAPQgMAIgEAIg");
	this.shape_42.setTransform(145.4,26.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#248D3A").s().p("AgWALIAWgUQAQgKAHARQgIALgLAEg");
	this.shape_43.setTransform(148.8,21.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#248D3A").s().p("AgLABIAFgMIAVAAIgaAXQgFgEAFgHg");
	this.shape_44.setTransform(140.9,19);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#248D3A").s().p("AgiAPQAKgFAUgVQAUgRAUAMQgKARgRAMQgMAJgMAAQgKAAgJgHg");
	this.shape_45.setTransform(145.1,19.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E6211A").s().p("AhVgQQAMgiAkgIQAhgIAjAPQAkAPAOAdQAPAhgYAkQhVg3hIgXg");
	this.shape_46.setTransform(130.6,12.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E6211A").s().p("AgzgKQAIgRAVgHIAsgBQADAAAMgIQAIgFAHAIQgLAJAFAjQAFAhgSAJQgRguhDgKg");
	this.shape_47.setTransform(136.4,6.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("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");
	this.shape_48.setTransform(99,105.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F4AF95").s().p("AADA6IgngFQAGgXgOgYQgQgZACgQQACgSASgJQARgHAVAEQAhAGASAxQATAxgcAcQgMgIgbgBg");
	this.shape_49.setTransform(89.4,51.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F4AF95").s().p("AgBAgIgVgMQACgKAMgPQAKgPACgNIALADQAAAOgFALIgLARQABAFANAEQALADgBAKg");
	this.shape_50.setTransform(86.7,40.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F4AF95").s().p("AhqA6QgFgRAFgWQACgJAJgZQAAgFgJgDQgHgDACgIQAcgCBLABQA/gDASgaQAEAFgDAFIgGAJQAHgBAGgOQAGgMALAAQAAAGgDAGIgFAKIAIgIQAEgHAHABIgGARQgCAGAIAHQgTAJgLACQADBBhCAWQgaAJgbAAQgjAAgkgPg");
	this.shape_51.setTransform(104.9,40.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F4AF95").s().p("AgvA2QglgjAWg1IgHgMIgJgKQAAgGADgBQACgCADADQABgEgDgIQgCgGAEgEQAJAFgBAPQAEgBgBgKQgBgLAEAAQAGAAAAANQgBAOADADQACgBgBgHQgBgHAIABIAGAWQAOALAeAOQAjAPAMAIIAPAAQAIABgBAHQACAGgIAAQgJAAgBACIgFApQgEAUgKAKQg6gBghggg");
	this.shape_52.setTransform(77,35.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F4AF95").s().p("AhdDiQhbgOg4gaQhNglgFg4QgBgKADgUIAEghIgDg4QgEgnABgVQACg0AOgqQAPgyAYgGIBTgDIBWAJQEOASCXBQQgNBYgdBhIg4CrQhIAQhUAAQhMAAhWgOg");
	this.shape_53.setTransform(100.3,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,198,211.1);


// stage content:
(lib.无标题1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Sound1atframe0wav");
	}
	this.frame_10 = function() {
		playSound("Sound2atframe11wav");
	}
	this.frame_20 = function() {
		playSound("Sound3atframe21wav");
	}
	this.frame_33 = function() {
		playSound("Sound4atframe34wav");
	}
	this.frame_42 = function() {
		playSound("Sound5atframe43wav");
	}
	this.frame_54 = function() {
		playSound("Sound6atframe55wav");
	}
	this.frame_65 = function() {
		playSound("Sound7atframe66wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10).call(this.frame_20).wait(13).call(this.frame_33).wait(9).call(this.frame_42).wait(12).call(this.frame_54).wait(11).call(this.frame_65).wait(18));

	// 图层 1
	this.instance = new lib.元件13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-2,0);
	this.instance.alpha = 0;

	this.instance_1 = new lib.元件12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(176,94.5);

	this.instance_2 = new lib.元件14("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(609.7,-99.7);

	this.instance_3 = new lib.元件15("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-229.4,-144.6);

	this.instance_4 = new lib.元件16("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(191.8,431.8);

	this.instance_5 = new lib.元件17("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(257.8,179.7,0.183,0.183);

	this.instance_6 = new lib.元件18("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(555.8,-200.5);

	this.instance_7 = new lib.元件19("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-22.3,-311.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,x:176,y:94.5}},{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1.45,scaleY:1.45,x:131.3,y:80.1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.901,scaleY:1.901,x:86.7,y:65.6}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:2.351,scaleY:2.351,x:42.1,y:51.2}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:2.802,scaleY:2.802,x:-2.5,y:36.8}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:3.252,scaleY:3.252,x:-47.1,y:22.4}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:3.703,scaleY:3.703,x:-91.7,y:8}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:4.153,scaleY:4.153,x:-136.3,y:-6.4}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:4.153,scaleY:4.153,x:-136.3,y:-6.4}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:4.153,scaleY:4.153,x:-136.3,y:-6.4}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:4.153,scaleY:4.153,x:-136.3,y:-6.4}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:4.153,scaleY:4.153,x:-136.3,y:-6.4}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:609.7,y:-99.7}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:4.153,scaleY:4.153,x:-136.3,y:-6.4}},{t:this.instance_2,p:{scaleX:1.589,scaleY:1.589,x:454.7,y:-83.8}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:3.136,scaleY:3.136,x:-174.2,y:95.6}},{t:this.instance_2,p:{scaleX:2.178,scaleY:2.178,x:299.7,y:-67.8}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:2.119,scaleY:2.119,x:-212.2,y:197.6}},{t:this.instance_2,p:{scaleX:2.767,scaleY:2.767,x:144.7,y:-51.9}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.102,scaleY:1.102,x:-250.2,y:299.5}},{t:this.instance_2,p:{scaleX:3.356,scaleY:3.356,x:-10.3,y:-36}},{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{scaleX:3.945,scaleY:3.945,x:-165.3,y:-20}},{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{scaleX:3.945,scaleY:3.945,x:-165.3,y:-20}},{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{scaleX:3.945,scaleY:3.945,x:-165.3,y:-20}},{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{scaleX:3.945,scaleY:3.945,x:-165.3,y:-20}},{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{scaleX:3.945,scaleY:3.945,x:-165.3,y:-20}},{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{scaleX:3.945,scaleY:3.945,x:-165.3,y:-20}},{t:this.instance_3,p:{scaleX:1,scaleY:1,x:-229.4,y:-144.6}},{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{scaleX:3.261,scaleY:3.261,x:17.7,y:61.1}},{t:this.instance_3,p:{scaleX:1.525,scaleY:1.525,x:-200.3,y:-122.1}},{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{scaleX:2.577,scaleY:2.577,x:200.8,y:142.1}},{t:this.instance_3,p:{scaleX:2.05,scaleY:2.05,x:-171.1,y:-99.6}},{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.892,scaleY:1.892,x:383.7,y:223.2}},{t:this.instance_3,p:{scaleX:2.574,scaleY:2.574,x:-141.9,y:-77.1}},{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.208,scaleY:1.208,x:566.7,y:304.3}},{t:this.instance_3,p:{scaleX:3.099,scaleY:3.099,x:-112.8,y:-54.7}},{t:this.instance}]},1).to({state:[{t:this.instance_3,p:{scaleX:3.624,scaleY:3.624,x:-83.8,y:-32.2}},{t:this.instance}]},1).to({state:[{t:this.instance_3,p:{scaleX:3.624,scaleY:3.624,x:-83.8,y:-32.2}},{t:this.instance}]},1).to({state:[{t:this.instance_3,p:{scaleX:3.624,scaleY:3.624,x:-83.8,y:-32.2}},{t:this.instance}]},1).to({state:[{t:this.instance_3,p:{scaleX:3.624,scaleY:3.624,x:-83.8,y:-32.2}},{t:this.instance}]},1).to({state:[{t:this.instance_3,p:{scaleX:3.624,scaleY:3.624,x:-83.8,y:-32.2}},{t:this.instance}]},1).to({state:[{t:this.instance_3,p:{scaleX:3.624,scaleY:3.624,x:-83.8,y:-32.2}},{t:this.instance}]},1).to({state:[{t:this.instance_3,p:{scaleX:3.624,scaleY:3.624,x:-83.8,y:-32.2}},{t:this.instance}]},1).to({state:[{t:this.instance_3,p:{scaleX:3.624,scaleY:3.624,x:-83.8,y:-32.2}},{t:this.instance}]},1).to({state:[{t:this.instance_3,p:{scaleX:2.685,scaleY:2.685,x:21,y:-81.4}},{t:this.instance_4,p:{scaleX:1,scaleY:1,x:191.8,y:431.8,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_3,p:{scaleX:1.746,scaleY:1.746,x:125.9,y:-130.6}},{t:this.instance_4,p:{scaleX:1.329,scaleY:1.329,x:155.8,y:342.3,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_3,p:{scaleX:0.807,scaleY:0.807,x:230.7,y:-179.9}},{t:this.instance_4,p:{scaleX:1.657,scaleY:1.657,x:119.9,y:252.8,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_4,p:{scaleX:1.986,scaleY:1.986,x:83.9,y:163.3,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_4,p:{scaleX:2.315,scaleY:2.315,x:48,y:73.7,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_4,p:{scaleX:2.643,scaleY:2.643,x:12,y:-15.8,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_4,p:{scaleX:2.643,scaleY:2.643,x:12,y:-15.8,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_4,p:{scaleX:2.643,scaleY:2.643,x:12,y:-15.8,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_4,p:{scaleX:2.643,scaleY:2.643,x:12,y:-15.8,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_4,p:{scaleX:2.643,scaleY:2.643,x:12,y:-15.8,alpha:1}},{t:this.instance_5,p:{scaleX:0.183,scaleY:0.183,x:257.8,y:179.7}},{t:this.instance}]},1).to({state:[{t:this.instance_4,p:{scaleX:3.758,scaleY:3.758,x:-97.6,y:-132.5,alpha:0.672}},{t:this.instance_5,p:{scaleX:0.751,scaleY:0.751,x:218.6,y:148.8}},{t:this.instance}]},1).to({state:[{t:this.instance_4,p:{scaleX:4.874,scaleY:4.874,x:-207.2,y:-249.1,alpha:0.328}},{t:this.instance_5,p:{scaleX:1.318,scaleY:1.318,x:179.4,y:117.8}},{t:this.instance}]},1).to({state:[{t:this.instance_4,p:{scaleX:5.989,scaleY:5.989,x:-316.8,y:-365.8,alpha:0}},{t:this.instance_5,p:{scaleX:1.886,scaleY:1.886,x:140.2,y:86.9}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:2.454,scaleY:2.454,x:101,y:56}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:3.022,scaleY:3.022,x:61.7,y:25.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:3.022,scaleY:3.022,x:61.7,y:25.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:3.022,scaleY:3.022,x:61.7,y:25.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:3.022,scaleY:3.022,x:61.7,y:25.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:3.022,scaleY:3.022,x:61.7,y:25.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:3.022,scaleY:3.022,x:61.7,y:25.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:3.022,scaleY:3.022,x:61.7,y:25.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:2.493,scaleY:2.493,x:10.3,y:111.7}},{t:this.instance_6,p:{scaleX:1,scaleY:1,x:555.8,y:-200.5}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.964,scaleY:1.964,x:-41.3,y:198.2}},{t:this.instance_6,p:{scaleX:1.275,scaleY:1.275,x:459.7,y:-162.6}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.435,scaleY:1.435,x:-92.8,y:284.7}},{t:this.instance_6,p:{scaleX:1.55,scaleY:1.55,x:363.7,y:-124.6}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:0.907,scaleY:0.907,x:-144.3,y:371.2}},{t:this.instance_6,p:{scaleX:1.825,scaleY:1.825,x:267.7,y:-86.7}},{t:this.instance}]},1).to({state:[{t:this.instance_6,p:{scaleX:2.099,scaleY:2.099,x:171.6,y:-48.7}},{t:this.instance}]},1).to({state:[{t:this.instance_6,p:{scaleX:2.374,scaleY:2.374,x:75.6,y:-10.8}},{t:this.instance}]},1).to({state:[{t:this.instance_6,p:{scaleX:2.649,scaleY:2.649,x:-20.4,y:27.2}},{t:this.instance}]},1).to({state:[{t:this.instance_6,p:{scaleX:2.649,scaleY:2.649,x:-20.4,y:27.2}},{t:this.instance}]},1).to({state:[{t:this.instance_6,p:{scaleX:2.649,scaleY:2.649,x:-20.4,y:27.2}},{t:this.instance}]},1).to({state:[{t:this.instance_6,p:{scaleX:2.649,scaleY:2.649,x:-20.4,y:27.2}},{t:this.instance}]},1).to({state:[{t:this.instance_6,p:{scaleX:2.649,scaleY:2.649,x:-20.4,y:27.2}},{t:this.instance}]},1).to({state:[{t:this.instance_6,p:{scaleX:2.649,scaleY:2.649,x:-20.4,y:27.2}},{t:this.instance_7,p:{scaleX:1,scaleY:1,x:-22.3,y:-311.2,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_6,p:{scaleX:2.26,scaleY:2.26,x:89.6,y:149.3}},{t:this.instance_7,p:{scaleX:1.317,scaleY:1.317,x:-17.4,y:-263.8,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.872,scaleY:1.872,x:199.5,y:271.3}},{t:this.instance_7,p:{scaleX:1.634,scaleY:1.634,x:-12.5,y:-216.4,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.483,scaleY:1.483,x:309.4,y:393.4}},{t:this.instance_7,p:{scaleX:1.951,scaleY:1.951,x:-7.6,y:-169,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_6,p:{scaleX:1.095,scaleY:1.095,x:419.3,y:515.5}},{t:this.instance_7,p:{scaleX:2.268,scaleY:2.268,x:-2.8,y:-121.6,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{scaleX:2.585,scaleY:2.585,x:2.1,y:-74.3,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{scaleX:2.902,scaleY:2.902,x:7,y:-26.9,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{scaleX:2.902,scaleY:2.902,x:7,y:-26.9,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{scaleX:2.902,scaleY:2.902,x:7,y:-26.9,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{scaleX:2.902,scaleY:2.902,x:7,y:-26.9,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{scaleX:2.902,scaleY:2.902,x:7,y:-26.9,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{scaleX:2.902,scaleY:2.902,x:7,y:-26.9,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{scaleX:2.902,scaleY:2.902,x:7,y:-26.9,alpha:0.801}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{scaleX:2.902,scaleY:2.902,x:7,y:-26.9,alpha:0.602}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{scaleX:2.902,scaleY:2.902,x:7,y:-26.9,alpha:0.398}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{scaleX:2.902,scaleY:2.902,x:7,y:-26.9,alpha:0.199}},{t:this.instance}]},1).to({state:[{t:this.instance_7,p:{scaleX:2.902,scaleY:2.902,x:7,y:-26.9,alpha:0}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(268,196.5,554.1,400.1);
// library properties:
lib.properties = {
	width: 540,
	height: 393,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/Sound1atframe0wav.ogg", id:"Sound1atframe0wav"},
		{src:"sounds/Sound2atframe11wav.ogg", id:"Sound2atframe11wav"},
		{src:"sounds/Sound3atframe21wav.ogg", id:"Sound3atframe21wav"},
		{src:"sounds/Sound4atframe34wav.ogg", id:"Sound4atframe34wav"},
		{src:"sounds/Sound5atframe43wav.ogg", id:"Sound5atframe43wav"},
		{src:"sounds/Sound6atframe55wav.ogg", id:"Sound6atframe55wav"},
		{src:"sounds/Sound7atframe66wav.ogg", id:"Sound7atframe66wav"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;