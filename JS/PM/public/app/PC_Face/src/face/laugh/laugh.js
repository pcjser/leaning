(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"laugh_atlas_", frames: [[0,0,152,218],[0,220,152,218]]}
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



(lib.位图24 = function() {
	this.spriteSheet = ss["laugh_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.位图25 = function() {
	this.spriteSheet = ss["laugh_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.元件146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],1), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlHkKiOnGQgFAAgBgCQg8h1g2h5IgoAKQglASgXAgQg4ABgigVIAAgKQgGgngOgfIAAihQAEAIAGAEQAHhdAJhXQAQiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCpgrQAqgLAtgFIAAgFIDPAAIAsAbIAGAAIAOAHIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAlBhIAFAHIAHACQA1DOgGDfIgCAFIABAMIgBAOIACADIADAHIABgOIAAABIAAARIAGADIAAAVIgGAEIgHAPIgEAZQgdBUgLBnIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL4k/IAAAKIgBACg");
	this.shape.setTransform(140.4,156);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.4,51.4,152,209.3);


(lib.元件145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,152.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,48,152,209.3);


(lib.元件144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],1), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlHkKiOnGQgFAAgBgCQg8h1g2h5IgoAKQglASgXAgQg4ABgigVIAAgKQgGgngOgfIAAihQAEAIAGAEQAHhdAJhXQAQiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCpgrQAqgLAtgFIAAgFIDPAAIAsAbIAGAAIAOAHIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAlBhIAFAHIAHACQA1DOgGDfIgCAFIABAMIgBAOIACADIADAHIABgOIAAABIAAARIAGADIAAAVIgGAEIgHAPIgEAZQgdBUgLBnIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL4k/IAAAKIgBACg");
	this.shape.setTransform(140.4,156);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.4,51.4,152,209.3);


(lib.元件143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,152.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,48,152,209.3);


(lib.元件142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],1), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlHkKiOnGQgFAAgBgCQg8h1g2h5IgoAKQglASgXAgQg4ABgigVIAAgKQgGgngOgfIAAihQAEAIAGAEQAHhdAJhXQAQiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCpgrQAqgLAtgFIAAgFIDPAAIAsAbIAGAAIAOAHIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAlBhIAFAHIAHACQA1DOgGDfIgCAFIABAMIgBAOIACADIADAHIABgOIAAABIAAARIAGADIAAAVIgGAEIgHAPIgEAZQgdBUgLBnIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL4k/IAAAKIgBACg");
	this.shape.setTransform(140.4,156);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.4,51.4,152,209.3);


(lib.元件141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,152.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,48,152,209.3);


(lib.元件140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],1), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlHkKiOnGQgFAAgBgCQg8h1g2h5IgoAKQglASgXAgQg4ABgigVIAAgKQgGgngOgfIAAihQAEAIAGAEQAHhdAJhXQAQiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCpgrQAqgLAtgFIAAgFIDPAAIAsAbIAGAAIAOAHIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAlBhIAFAHIAHACQA1DOgGDfIgCAFIABAMIgBAOIACADIADAHIABgOIAAABIAAARIAGADIAAAVIgGAEIgHAPIgEAZQgdBUgLBnIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL4k/IAAAKIgBACg");
	this.shape.setTransform(140.4,156);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.4,51.4,152,209.3);


(lib.元件139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,152.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,48,152,209.3);


(lib.元件138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],1), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlHkKiOnGQgFAAgBgCQg8h1g2h5IgoAKQglASgXAgQg4ABgigVIAAgKQgGgngOgfIAAihQAEAIAGAEQAHhdAJhXQAQiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCpgrQAqgLAtgFIAAgFIDPAAIAsAbIAGAAIAOAHIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAlBhIAFAHIAHACQA1DOgGDfIgCAFIABAMIgBAOIACADIADAHIABgOIAAABIAAARIAGADIAAAVIgGAEIgHAPIgEAZQgdBUgLBnIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL4k/IAAAKIgBACg");
	this.shape.setTransform(140.4,156);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.4,51.4,152,209.3);


(lib.元件137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,152.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,48,152,209.3);


(lib.元件136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],1), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlHkKiOnGQgFAAgBgCQg8h1g2h5IgoAKQglASgXAgQg4ABgigVIAAgKQgGgngOgfIAAihQAEAIAGAEQAHhdAJhXQAQiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCpgrQAqgLAtgFIAAgFIDPAAIAsAbIAGAAIAOAHIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAlBhIAFAHIAHACQA1DOgGDfIgCAFIABAMIgBAOIACADIADAHIABgOIAAABIAAARIAGADIAAAVIgGAEIgHAPIgEAZQgdBUgLBnIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL4k/IAAAKIgBACg");
	this.shape.setTransform(140.4,156);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.4,51.4,152,209.3);


(lib.元件135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,152.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,48,152,209.3);


(lib.元件134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],1), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlHkKiOnGQgFAAgBgCQg8h1g2h5IgoAKQglASgXAgQg4ABgigVIAAgKQgGgngOgfIAAihQAEAIAGAEQAHhdAJhXQAQiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCpgrQAqgLAtgFIAAgFIDPAAIAsAbIAGAAIAOAHIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAlBhIAFAHIAHACQA1DOgGDfIgCAFIABAMIgBAOIACADIADAHIABgOIAAABIAAARIAGADIAAAVIgGAEIgHAPIgEAZQgdBUgLBnIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL4k/IAAAKIgBACg");
	this.shape.setTransform(140.4,156);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.4,51.4,152,209.3);


(lib.元件133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,152.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,48,152,209.3);


(lib.元件132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],1), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlHkKiOnGQgFAAgBgCQg8h1g2h5IgoAKQglASgXAgQg4ABgigVIAAgKQgGgngOgfIAAihQAEAIAGAEQAHhdAJhXQAQiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCpgrQAqgLAtgFIAAgFIDPAAIAsAbIAGAAIAOAHIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAlBhIAFAHIAHACQA1DOgGDfIgCAFIABAMIgBAOIACADIADAHIABgOIAAABIAAARIAGADIAAAVIgGAEIgHAPIgEAZQgdBUgLBnIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL4k/IAAAKIgBACg");
	this.shape.setTransform(140.4,156);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.4,51.4,152,209.3);


(lib.元件131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlHkKiOnGIgGgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIgBgKQgEgngPgfIAAihQAEAIAGAEQAGhdAKhXQAPiFAch1IABgUIBQhrQBFhdBdhDIAFgFQADgDAAgFQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAsgFIABgFIDXAAIABABIAEABIAAABIACACIABABIADABIADADIAFAFIAGAAIAAAAIgBAAIACADQADACAFAAQAKAKAMAEIAvALIABAFQCDBUB0BjIAGAFQACACAFAAIAIALIACAJIAAAKIASAEIAEAEQADACAFAAQA9BKAlBhIAEAHQADACAFAAQA6DcgNDwIAAABIAAAFIAJAEIABAZIgEAdIgBgOIgBAKQgkBcgNB1IgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg5AYhRAAQgdAAghgEgAL4k/IAABQIgFAeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-104.6,152,209.3);


(lib.元件130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,152.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,48,152,209.3);


(lib.元件129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],1), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlHkKiOnGQgFAAgBgCQg8h1g2h5IgoAKQglASgXAgQg4ABgigVIAAgKQgGgngOgfIAAihQAEAIAGAEQAHhdAJhXQAQiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCpgrQAqgLAtgFIAAgFIDPAAIAsAbIAGAAIAOAHIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAlBhIAFAHIAHACQA1DOgGDfIgCAFIABAMIgBAOIACADIADAHIABgOIAAABIAAARIAGADIAAAVIgGAEIgHAPIgEAZQgdBUgLBnIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL4k/IAAAKIgBACg");
	this.shape.setTransform(140.4,156);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.4,51.4,152,209.3);


(lib.元件128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,152.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,48,152,209.3);


(lib.元件127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlHkKiOnGIgGgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIgBgKQgEgngPgfIAAihQAEAIAGAEQAGhdAKhXQAPiFAch1IABgUIBQhrQBFhdBdhDIAFgFQADgDAAgFQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAsgFIABgFIDXAAIABABIAEABIAAABIACACIABABIADABIADADIAFAFIAGAAIAAAAIgBAAIACADQADACAFAAQAKAKAMAEIAvALIABAFQCDBUB0BjIAGAFQACACAFAAIAIALIACAJIAAAKIASAEIAEAEQADACAFAAQA9BKAlBhIAEAHQADACAFAAQA6DcgNDwIAAABIAAAFIAJAEIABAZIgEAdIgBgOIgBAKQgkBcgNB1IgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg5AYhRAAQgdAAghgEgAL4k/IAABQIgFAeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-104.6,152,209.3);


(lib.元件126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiBFNIniC4IF4mBIo0hVIIChmIksjeIFvAaIkZmaIHNEzIAzkiIBVEJIFWmBIhMGrIGJhVIlWEAIGBA0IlXCqID5DVIlngqIDeGzIm9k8IlvGjg");
	this.shape.setTransform(80,76.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,153);


(lib.元件125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA0000").s().p("AiBFNIniC4IF5mBIo1hVIIBhmIkrjeIFwAaIkbmaIHOEzIAzkiIBVEJIFXmBIhNGrIGJhVIlWEAIGBA0IlWCqID4DVIlngqIDeGzIm9k8IlvGjg");
	this.shape.setTransform(80,76.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,153);


(lib.元件124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],1), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlHkKiOnGQgFAAgBgCQg8h1g2h5IgoAKQglASgXAgQg4ABgigVIAAgKQgGgngOgfIAAihQAEAIAGAEQAHhdAJhXQAQiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCpgrQAqgLAtgFIAAgFIDPAAIAsAbIAGAAIAOAHIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAlBhIAFAHIAHACQA1DOgGDfIgCAFIABAMIgBAOIACADIADAHIABgOIAAABIAAARIAGADIAAAVIgGAEIgHAPIgEAZQgdBUgLBnIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL4k/IAAAKIgBACg");
	this.shape.setTransform(140.4,156);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.4,51.4,152,209.3);


(lib.元件123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,152.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,48,152,209.3);


(lib.元件122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,158.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,54,152,209.3);


(lib.元件121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGIgGgCQg8h1g2h5IgoAKQglASgXAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAJhXQAPiFAch1IABgUIBQhrQBFhdBdhDIAGgFIACgIQAKAAAIgEIAEgCIASgEQByhqCpgrIBWgQIABgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAlBhIAFAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIADADIACAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQACAWgRgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(138,155.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62,51,152,209.3);


(lib.元件120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGIgGgCQg8h1g2h5IgoAKQglASgXAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAJhXQAPiFAch1IABgUIBQhrQBFhdBdhDIAGgFIACgIQAKAAAIgEIAEgCIASgEQByhqCpgrIBWgQIABgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAlBhIAFAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIADADIACAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQACAWgRgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(138,155.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62,51,152,209.3);


(lib.元件119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlHkKiOnGQgFAAgBgCQg8h1g2h5IgoAKQglASgXAgQg4ABgigVIgBgKQgEgngPgfIAAihIAKAMQAGhdALhXQAOiFAch1IABgUIBQhrQBFhdBdhDIAFgFIADgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAsgFIABgFIDVAAIAfAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB0BjIAGAFIAHACIAIALIACAJIAAAKIASAEIAEAEIAIACQA9BKAmBhIADAHIAIACQAnCVAHCdIgGAJIAECMIABABIAAAEIACADIADAHIABgJIAJAKIAAAWIgEAbIgFAAIgBgJIgBAJIAAAAIgEAAIAAAJQghBZgMBvIgFAAQACAWgRgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(143,155.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67,51,152,209.3);


(lib.元件118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,158.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,54,152,209.3);


(lib.元件117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,152.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,48,152,209.3);


(lib.元件116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,158.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,54,152,209.3);


(lib.元件115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQglASgXAgQg4ABgigVIgBgKQgEgngPgfIAAihIAKAMQAGhdAKhXQAPiFAch1IABgUIBQhrQBGhdBchDIAGgFIACgIQAKAAAIgEIAEgCIASgEQByhqCpgrQAqgLAsgFIABgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB0BjIAGAFIAHACIAIALIACAJIAAAKIASAEIAEAEIAIACQA9BKAlBhIAFAHIAHACQAnCVAHCdIgGAJIAECMIACABIgBAEIADADIACAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgBAJIAAAAIgEAAIAAAJQggBZgNBvIgFAAQACAWgRgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(137,155.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61,51,152,209.3);


(lib.元件114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIgBgKQgEgngPgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBGhdBbhDIAGgFIADgIIASgEIAEgCIASgEQByhqCogrIBYgQIAAgFIDVAAIAfAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAFAFIAHACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIADAHIAIACQAnCVAHCdIgHAJIAFCMIABABIAAAEIACADIADAHIABgJIAJAKIAAAWIgEAbIgFAAIgBgJIgCAJIAAAAIgDAAIAAAJQghBZgMBvIgFAAQACAWgRgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(142,155.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(66,51,152,209.3);


(lib.元件113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,152.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,48,152,209.3);


(lib.元件112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,159.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,55,152,209.3);


(lib.元件111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlHkKiOnGIgGgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIgBgKQgEgngPgfIAAihIAKAMQAGhdAKhXQAPiFAch1IABgUIBQhrQBFhdBdhDIAFgFIADgIQAKAAAIgEIAEgCIASgEQByhqCogrIBXgQIABgFIDVAAIAfAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB0BjIAGAFIAHACIAIALIACAJIAAAKIASAEIAEAEIAIACQA9BKAlBhIAEAHIAIACQAnCVAHCdIgGAJIAECMIABABIAAAEIADADIACAHIABgJIAJAKIAAAWIgEAbIgFAAIgBgJIgBAJIAAAAIgEAAIAAAJQghBZgMBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(135,155.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59,51,152,209.3);


(lib.元件110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,159.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,55,152,209.3);


(lib.元件109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQglASgXAgQg4ABgigVIgBgKQgEgngPgfIAAihIAKAMQAGhdAKhXQAPiFAch1IABgUIBQhrQBFhdBdhDIAFgFIADgIQAKAAAIgEIAEgCIASgEQByhqCpgrQAqgLAsgFIABgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB0BjIAGAFIAHACIAIALIACAJIAAAKIASAEIAEAEIAIACQA9BKAlBhIAFAHIAHACQAnCVAHCdIgGAJIAECMIABABIAAAEIADADIACAHIABgJIAJAKIAAAWIgEAbIgFAAIgBgJIgBAJIAAAAIgEAAIAAAJQghBZgMBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(145,155.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69,51,152,209.3);


(lib.元件108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgJIgCAJIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,149.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,45,152,209.3);


(lib.元件107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC99").s().p("A1qY9MAAAgx5MArUAAAMAAAAx5g");
	this.shape.setTransform(138.7,159.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277.3,319.3);


(lib.元件106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC99").s().p("AgsD8QgFgEAAgGIgLjDQgBgFAEgFQADgEAHAAIEOgNQAFgBAEAEQAEAEgBAGIgZDMQAAAGgEAEIgKAEIjnAEgAACBRQgEAAgFAEQgEADABAIIAGBgIAEAKQADAEAGAAICRgCQAGAAAEgFQAEgEABgGIAMhoQABgFgDgEQgEgEgGAAgAjuCDQgEgEgBgHIgNjUQAAgGAEgFIAJgFICOgQQAGgBADAEQAEAEgBAFIgMDgQgBAGgEAFQgEAEgGAAIhwAGgAiXhEIgqAEQgGABgEAEQgEAFABAGIAHB0IAFAKQAEAEAGgBIAYAAIAKgGQAEgDAAgGIAGh5QABgGgDgEQgDgDgEAAIgCAAgAAPAHQgEgDAAgGIgCgVQAAgGAEgEQADgEAGgBICYgKQAFAAAFADQAEAEAAAGIABAVQABAGgEAEQgEAEgFABIiYAJIgDAAQgEAAgDgDgAgvgeIgQgPIgEgJQAAgGADgEICei5QADgFAGAAQAGAAADADIAPAPQAFAEAAAGQABAFgEAFIgPARQgEAEABAEIAHAIICCA0IAHAIQADAGgCAFIgIAUQgBAFgFACIgLABIiTg8IgLgBQgHABgDAFIhbBsQgEAEgGABIgBAAQgFAAgDgEg");
	this.shape.setTransform(-18.9,39.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,14.4,51.4,51.1);


(lib.元件105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B50000").s().p("AgsD8QgFgEAAgGIgLjDQgBgFAEgFQADgEAHAAIEOgNQAFgBAEAEQAEAEgBAGIgZDMQAAAGgEAEIgKAEIjnAEIgBAAQgFAAgDgDgAACBRQgEAAgFAEQgEADABAIIAGBgQABAGADAEQADAEAGAAICRgCQAGAAAEgFQAEgEABgGIAMhoQABgFgDgEQgEgEgGAAgAjuCDQgEgEgBgHIgNjUQAAgGAEgFQAEgEAFgBICOgQQAGgBADAEQAEAEgBAFIgMDgIgFALQgEAEgGAAIhwAGgAiXhEIgqAEIgKAFQgEAFABAGIAHB0QABAGAEAEIAJADIAZAAIAKgGQAEgDAAgGIAGh5QABgGgDgEQgDgDgEAAIgCAAgAAPAHQgEgDAAgGIgCgVQAAgGAEgEQADgEAGgBICYgKQAFAAAFADQAEAEAAAGIABAVQABAGgEAEQgEAEgFABIiYAJIgDAAQgEAAgDgDgAgvgeIgQgPIgEgJQAAgGADgEICei5QADgFAGAAQAGAAADADIAPAPQAFAEAAAGIAAACIgDAIIgPARQgEAEABAEQABAFAGADICCA0IAHAIQADAGgCAFIgIAUQgBAFgFACIgLABIiTg8IgLgBQgHABgDAFIhbBsQgEAEgGABIgBAAQgFAAgDgEg");
	this.shape.setTransform(25.7,25.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.4,51.1);


(lib.元件104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["laugh_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-76,-104.7)).s().p("ABuQTQgZgYgtgGQlIkKiNnGQgFAAgBgCQg8h1g2h5IgoAKQgmASgWAgQg4ABgigVIAAgKQgGgngOgfIAAihIAKAMQAHhdAKhXQAPiFAbh1IABgUIBQhrQBFhdBchDIAHgFIACgIQAKAAAIgEIAEgCIASgEQByhqCogrQArgLAtgFIAAgFIDUAAIAgAUIAFAAQAKAKAMAEIAvALIABAFQCDBUB1BjIAEAFIAIACIAIALIACAJIAAAKIASAEIAFAEIAHACQA9BKAmBhIAEAHIAHACQAnCVAHCdIgHAJIAGCMIABABIgBAEIACADIADAHIAAgJIAKAKIAAAWIgEAbIgGAAIAAgKIgCAKIAAAAIgDAAIAAAJQggBZgNBvIgFAAQABAWgQgCIAABaIgFABQgxHCjsEDQgzATgdApQg6AYhQAAQgeAAgggEgAL3DuIABACIAAAwg");
	this.shape.setTransform(140,155.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,51,152,209.3);


(lib.元件103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#DB6919","#D9651A","#D2591D","#C74621","#B82B27"],[0,0.259,0.51,0.757,1],-2.6,-11.9,0,-2.6,-11.9,472.1).s().p("AgQHKIiIZDIBn5FIj/Y0IDd45IlyYdIFQ4lInkX+IHE4IIpVXWII13iIrBWlIKj20IsqVuIMM1+IuOUtINy1AIvuTnIPTz8IxISZIQvywIycRFISFxeIzpPrITTwFI0vOLIUcunI1vMnIVetEI2nK+IWYrcI3XJRIXKpxI3+HhIXzoBI4eFuIYWmPI40D6IYvkcI5DCEIY/ilI5HAMIZHgtI5EhqIZGBII45jgIY+C+I4llVIYrE0I4GnIIYQGnI3go5IXrIZI2yqmIXAKII17sRIWLLzI0+t2IVRNZIz5vWIUNO7IyswyITCQZIxayIIRzRwIwBzXIQbTBIuk0fIO/ULItA1gINdVOIrY2aIL2WKIps3LIKMW+In+32IIdXrImL4XIGsYOIkW4vIE4YpIih5AIDCY8Igq5HIBLZGIBN5GIgrZHIDD48IihZAIE44pIkXYvIGs4OImLYXIId3rIn9X2IKM2+IptXLIL22KIrYWaINd1OItAVgIO/0LIujUfIQczBIwCTXIRyxwIxbSIITFwZIyuQyIUOu7Iz6PWIVRtZI0+N2IWMrzI18MRIXAqII2yKmIXtoZI3hI5IYPmnI4GHIIYqk0I4jFVIY9i+I44DgIZGhII5FBqIZIAtI5JgMIZBClI5DiEIYvEcI41j6IYWGPI4fluIX1IBI3/nhIXLJxI3XpRIWYLcI2nq+IVeNEI1wsnIUcOnI0vuLITTQFIzpvrISFReIycxFIQvSwIxJyZIPUT8IvuznINzVAIuP0tIMNV+Isq1uIKiW0IrC2lII2XiIpV3WIHEYIInl3+IFSYlIly4dIDbY5Ij940IBmZFIiI5DIgRZIg");
	this.shape.setTransform(260.3,260.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53.6,53.6,413.3,413.3);


// stage content:
(lib.无标题1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Sound1atframe0wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(93));

	// 图层 1
	this.instance = new lib.元件107("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.8,-0.2);
	this.instance.alpha = 0;

	this.instance_1 = new lib.元件106("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(249,221.2);

	this.instance_2 = new lib.元件105("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(45.5,203.6,0.608,0.608);

	this.instance_3 = new lib.元件105("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(211,23.5);

	this.instance_4 = new lib.元件104("synched",0);
	this.instance_4.parent = this;

	this.instance_5 = new lib.元件103("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-35.4,-28.4,0.695,0.695);

	this.instance_6 = new lib.元件108("synched",0);
	this.instance_6.parent = this;

	this.instance_7 = new lib.元件109("synched",0);
	this.instance_7.parent = this;

	this.instance_8 = new lib.元件110("synched",0);
	this.instance_8.parent = this;

	this.instance_9 = new lib.元件111("synched",0);
	this.instance_9.parent = this;

	this.instance_10 = new lib.元件112("synched",0);
	this.instance_10.parent = this;

	this.instance_11 = new lib.元件113("synched",0);
	this.instance_11.parent = this;

	this.instance_12 = new lib.元件114("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.元件115("synched",0);
	this.instance_13.parent = this;

	this.instance_14 = new lib.元件116("synched",0);
	this.instance_14.parent = this;

	this.instance_15 = new lib.元件117("synched",0);
	this.instance_15.parent = this;

	this.instance_16 = new lib.元件118("synched",0);
	this.instance_16.parent = this;

	this.instance_17 = new lib.元件119("synched",0);
	this.instance_17.parent = this;

	this.instance_18 = new lib.元件120("synched",0);
	this.instance_18.parent = this;

	this.instance_19 = new lib.元件121("synched",0);
	this.instance_19.parent = this;

	this.instance_20 = new lib.元件122("synched",0);
	this.instance_20.parent = this;

	this.instance_21 = new lib.元件123("synched",0);
	this.instance_21.parent = this;

	this.instance_22 = new lib.元件124("synched",0);
	this.instance_22.parent = this;

	this.instance_23 = new lib.元件127("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(154.8,218.6,0.021,0.021);
	this.instance_23.alpha = 0;

	this.instance_24 = new lib.元件126("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(149.6,213.6,0.065,0.065);

	this.instance_25 = new lib.元件125("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(148.8,214.3,0.065,0.065);
	this.instance_25.alpha = 0;

	this.instance_26 = new lib.元件128("synched",0);
	this.instance_26.parent = this;

	this.instance_27 = new lib.元件129("synched",0);
	this.instance_27.parent = this;

	this.instance_28 = new lib.元件130("synched",0);
	this.instance_28.parent = this;

	this.instance_29 = new lib.元件131("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(140.4,156.1);

	this.instance_30 = new lib.元件132("synched",0);
	this.instance_30.parent = this;

	this.instance_31 = new lib.元件133("synched",0);
	this.instance_31.parent = this;

	this.instance_32 = new lib.元件134("synched",0);
	this.instance_32.parent = this;

	this.instance_33 = new lib.元件135("synched",0);
	this.instance_33.parent = this;

	this.instance_34 = new lib.元件136("synched",0);
	this.instance_34.parent = this;

	this.instance_35 = new lib.元件137("synched",0);
	this.instance_35.parent = this;

	this.instance_36 = new lib.元件138("synched",0);
	this.instance_36.parent = this;

	this.instance_37 = new lib.元件139("synched",0);
	this.instance_37.parent = this;

	this.instance_38 = new lib.元件140("synched",0);
	this.instance_38.parent = this;

	this.instance_39 = new lib.元件141("synched",0);
	this.instance_39.parent = this;

	this.instance_40 = new lib.元件142("synched",0);
	this.instance_40.parent = this;

	this.instance_41 = new lib.元件143("synched",0);
	this.instance_41.parent = this;

	this.instance_42 = new lib.元件144("synched",0);
	this.instance_42.parent = this;

	this.instance_43 = new lib.元件145("synched",0);
	this.instance_43.parent = this;

	this.instance_44 = new lib.元件146("synched",0);
	this.instance_44.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3,p:{x:211,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.608,scaleY:0.608,x:45.5,y:203.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:249,y:221.2}},{t:this.instance}]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3,p:{x:211,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.608,scaleY:0.608,x:45.5,y:203.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:249,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_6},{t:this.instance_3,p:{x:218,y:51,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:114.4,y:235.5}},{t:this.instance_1,p:{scaleX:0.883,scaleY:0.883,x:248.8,y:177.7}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_6},{t:this.instance_3,p:{x:218,y:51,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:114.4,y:235.5}},{t:this.instance_1,p:{scaleX:0.883,scaleY:0.883,x:248.8,y:177.7}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_7},{t:this.instance_3,p:{x:211,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:29.5,y:139.6}},{t:this.instance_1,p:{scaleX:0.805,scaleY:0.805,x:155.2,y:228}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_7},{t:this.instance_3,p:{x:211,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:29.5,y:139.6}},{t:this.instance_1,p:{scaleX:0.805,scaleY:0.805,x:155.2,y:228}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_8},{t:this.instance_3,p:{x:226.1,y:95.6,scaleX:0.687,scaleY:0.687}},{t:this.instance_2,p:{scaleX:0.687,scaleY:0.687,x:171.1,y:248.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:103.9,y:193.9}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_8},{t:this.instance_3,p:{x:226.1,y:95.6,scaleX:0.687,scaleY:0.687}},{t:this.instance_2,p:{scaleX:0.687,scaleY:0.687,x:171.1,y:248.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:103.9,y:193.9}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_9},{t:this.instance_3,p:{x:211,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:74.5,y:199.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:260.6,y:162.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_9},{t:this.instance_3,p:{x:211,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:74.5,y:199.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:260.6,y:162.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_10},{t:this.instance_3,p:{x:154.5,y:9,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:23,y:100.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:67.6,y:208.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_10},{t:this.instance_3,p:{x:154.5,y:9,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:23,y:100.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:67.6,y:208.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_11},{t:this.instance_3,p:{x:192,y:54.5,scaleX:0.765,scaleY:0.765}},{t:this.instance_2,p:{scaleX:0.765,scaleY:0.765,x:64,y:249.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:260.6,y:144.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_11},{t:this.instance_3,p:{x:192,y:54.5,scaleX:0.765,scaleY:0.765}},{t:this.instance_2,p:{scaleX:0.765,scaleY:0.765,x:64,y:249.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:260.6,y:144.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_12},{t:this.instance_3,p:{x:218,y:126.6,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:29,y:250.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:221,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_12},{t:this.instance_3,p:{x:218,y:126.6,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:29,y:250.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:221,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_13},{t:this.instance_3,p:{x:224.5,y:72.6,scaleX:0.902,scaleY:0.902}},{t:this.instance_2,p:{scaleX:0.902,scaleY:0.902,x:29.5,y:85.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:74,y:165.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_13},{t:this.instance_3,p:{x:224.5,y:72.6,scaleX:0.902,scaleY:0.902}},{t:this.instance_2,p:{scaleX:0.902,scaleY:0.902,x:29.5,y:85.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:74,y:165.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_14},{t:this.instance_3,p:{x:159,y:27,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:154,y:247.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:135,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_14},{t:this.instance_3,p:{x:159,y:27,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:154,y:247.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:135,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_15},{t:this.instance_3,p:{x:211,y:57.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:79.5,y:143}},{t:this.instance_1,p:{scaleX:0.805,scaleY:0.805,x:245.3,y:106.9}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_15},{t:this.instance_3,p:{x:211,y:57.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:79.5,y:143}},{t:this.instance_1,p:{scaleX:0.805,scaleY:0.805,x:245.3,y:106.9}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_16},{t:this.instance_3,p:{x:178,y:51,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:23.5,y:208.3}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:183,y:245}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_16},{t:this.instance_3,p:{x:178,y:51,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:23.5,y:208.3}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:183,y:245}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_17},{t:this.instance_3,p:{x:221,y:33.5,scaleX:0.61,scaleY:0.61}},{t:this.instance_2,p:{scaleX:0.61,scaleY:0.61,x:102.5,y:209.5}},{t:this.instance_1,p:{scaleX:0.767,scaleY:0.767,x:64.5,y:163.5}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_17},{t:this.instance_3,p:{x:221,y:33.5,scaleX:0.61,scaleY:0.61}},{t:this.instance_2,p:{scaleX:0.61,scaleY:0.61,x:102.5,y:209.5}},{t:this.instance_1,p:{scaleX:0.767,scaleY:0.767,x:64.5,y:163.5}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_18},{t:this.instance_3,p:{x:226.4,y:8,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:164.9,y:225.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:126,y:171.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_18},{t:this.instance_3,p:{x:226.4,y:8,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:164.9,y:225.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:126,y:171.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_19},{t:this.instance_3,p:{x:211,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:39,y:86.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:118.9,y:203.6}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_19},{t:this.instance_3,p:{x:211,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:39,y:86.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:118.9,y:203.6}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_20},{t:this.instance_3,p:{x:183,y:13.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.747,scaleY:0.747,x:150,y:250}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:249,y:174.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_20},{t:this.instance_3,p:{x:183,y:13.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.747,scaleY:0.747,x:150,y:250}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:249,y:174.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_21},{t:this.instance_3,p:{x:211,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.608,scaleY:0.608,x:45.5,y:203.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:120.9,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_21},{t:this.instance_3,p:{x:211,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.608,scaleY:0.608,x:45.5,y:203.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:120.9,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_21},{t:this.instance_3,p:{x:209.5,y:109.1,scaleX:0.785,scaleY:0.785}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:114.4,y:235.5}},{t:this.instance_1,p:{scaleX:0.883,scaleY:0.883,x:248.8,y:177.7}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_22},{t:this.instance_3,p:{x:209.5,y:109.1,scaleX:0.785,scaleY:0.785}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:114.4,y:235.5}},{t:this.instance_1,p:{scaleX:0.883,scaleY:0.883,x:248.8,y:177.7}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_22},{t:this.instance_25,p:{scaleX:0.065,scaleY:0.065,x:148.8,y:214.3,alpha:0}},{t:this.instance_24,p:{scaleX:0.065,scaleY:0.065,x:149.6,y:213.6,alpha:1}},{t:this.instance_23,p:{scaleX:0.021,scaleY:0.021,x:154.8,y:218.6,alpha:0}},{t:this.instance_3,p:{x:195.5,y:102.1,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:29.5,y:139.6}},{t:this.instance_1,p:{scaleX:0.805,scaleY:0.805,x:155.2,y:228}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_22},{t:this.instance_25,p:{scaleX:0.252,scaleY:0.252,x:132.8,y:200.1,alpha:0.199}},{t:this.instance_24,p:{scaleX:0.18,scaleY:0.18,x:139.1,y:205,alpha:1}},{t:this.instance_23,p:{scaleX:0.119,scaleY:0.119,x:153.4,y:212.3,alpha:0.102}},{t:this.instance_3,p:{x:195.5,y:102.1,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:29.5,y:139.6}},{t:this.instance_1,p:{scaleX:0.805,scaleY:0.805,x:155.2,y:228}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_26},{t:this.instance_25,p:{scaleX:0.439,scaleY:0.439,x:116.9,y:185.8,alpha:0.398}},{t:this.instance_24,p:{scaleX:0.296,scaleY:0.296,x:128.6,y:196.2,alpha:1}},{t:this.instance_23,p:{scaleX:0.217,scaleY:0.217,x:151.9,y:206.1,alpha:0.199}},{t:this.instance_3,p:{x:157.5,y:27,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.687,scaleY:0.687,x:171.1,y:248.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:103.9,y:193.9}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_26},{t:this.instance_25,p:{scaleX:0.626,scaleY:0.626,x:100.9,y:171.6,alpha:0.602}},{t:this.instance_24,p:{scaleX:0.411,scaleY:0.411,x:118.3,y:187.6,alpha:1}},{t:this.instance_23,p:{scaleX:0.315,scaleY:0.315,x:150.5,y:199.8,alpha:0.301}},{t:this.instance_3,p:{x:157.5,y:27,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.687,scaleY:0.687,x:171.1,y:248.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:103.9,y:193.9}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_26},{t:this.instance_25,p:{scaleX:0.813,scaleY:0.813,x:84.9,y:157.4,alpha:0.801}},{t:this.instance_24,p:{scaleX:0.527,scaleY:0.527,x:107.8,y:178.9,alpha:1}},{t:this.instance_23,p:{scaleX:0.413,scaleY:0.413,x:149.1,y:193.5,alpha:0.398}},{t:this.instance_3,p:{x:211,y:53.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:74.5,y:199.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:260.6,y:162.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_27},{t:this.instance_25,p:{scaleX:1,scaleY:1,x:68.9,y:142.8,alpha:1}},{t:this.instance_24,p:{scaleX:0.642,scaleY:0.642,x:97.5,y:170.2,alpha:1}},{t:this.instance_23,p:{scaleX:0.511,scaleY:0.511,x:147.6,y:187.3,alpha:0.5}},{t:this.instance_3,p:{x:211,y:53.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:74.5,y:199.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:260.6,y:162.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_27},{t:this.instance_25,p:{scaleX:1.438,scaleY:1.438,x:33.9,y:109.4,alpha:0.801}},{t:this.instance_24,p:{scaleX:0.887,scaleY:0.887,x:80.2,y:152.6,alpha:0.801}},{t:this.instance_23,p:{scaleX:0.609,scaleY:0.609,x:146.2,y:181.1,alpha:0.602}},{t:this.instance_3,p:{x:200,y:16,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:23,y:100.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:67.6,y:208.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_27},{t:this.instance_25,p:{scaleX:1.875,scaleY:1.875,x:-1.1,y:75.9,alpha:0.602}},{t:this.instance_24,p:{scaleX:1.131,scaleY:1.131,x:63,y:135,alpha:0.602}},{t:this.instance_23,p:{scaleX:0.706,scaleY:0.706,x:144.8,y:174.8,alpha:0.699}},{t:this.instance_3,p:{x:200,y:16,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:23,y:100.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:67.6,y:208.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_28},{t:this.instance_25,p:{scaleX:2.313,scaleY:2.313,x:-36.2,y:42.5,alpha:0.398}},{t:this.instance_24,p:{scaleX:1.375,scaleY:1.375,x:45.7,y:117.4,alpha:0.398}},{t:this.instance_23,p:{scaleX:0.804,scaleY:0.804,x:143.3,y:168.6,alpha:0.801}},{t:this.instance_3,p:{x:211,y:55.1,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.765,scaleY:0.765,x:64,y:249.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:260.6,y:144.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_28},{t:this.instance_25,p:{scaleX:2.751,scaleY:2.751,x:-71.1,y:9,alpha:0.199}},{t:this.instance_24,p:{scaleX:1.62,scaleY:1.62,x:28.4,y:99.8,alpha:0.199}},{t:this.instance_23,p:{scaleX:0.902,scaleY:0.902,x:141.9,y:162.3,alpha:0.898}},{t:this.instance_3,p:{x:211,y:55.1,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.765,scaleY:0.765,x:64,y:249.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:260.6,y:144.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_28},{t:this.instance_25,p:{scaleX:3.188,scaleY:3.188,x:-106.2,y:-24.4,alpha:0}},{t:this.instance_24,p:{scaleX:1.864,scaleY:1.864,x:11.2,y:82.1,alpha:0}},{t:this.instance_29},{t:this.instance_3,p:{x:153,y:21,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:29,y:250.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:221,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_30},{t:this.instance_25,p:{scaleX:3.188,scaleY:3.188,x:-106.2,y:-24.4,alpha:0}},{t:this.instance_24,p:{scaleX:1.864,scaleY:1.864,x:11.2,y:82.1,alpha:0}},{t:this.instance_29},{t:this.instance_3,p:{x:153,y:21,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:29,y:250.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:221,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_30},{t:this.instance_25,p:{scaleX:3.188,scaleY:3.188,x:-106.2,y:-24.4,alpha:0}},{t:this.instance_24,p:{scaleX:1.864,scaleY:1.864,x:11.2,y:82.1,alpha:0}},{t:this.instance_29},{t:this.instance_3,p:{x:146,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.902,scaleY:0.902,x:29.5,y:85.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:74,y:165.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_30},{t:this.instance_25,p:{scaleX:3.188,scaleY:3.188,x:-106.2,y:-24.4,alpha:0}},{t:this.instance_24,p:{scaleX:1.864,scaleY:1.864,x:11.2,y:82.1,alpha:0}},{t:this.instance_29},{t:this.instance_3,p:{x:146,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.902,scaleY:0.902,x:29.5,y:85.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:74,y:165.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_31},{t:this.instance_25,p:{scaleX:0.065,scaleY:0.065,x:148.8,y:214.3,alpha:0}},{t:this.instance_24,p:{scaleX:0.065,scaleY:0.065,x:149.6,y:213.6,alpha:1}},{t:this.instance_23,p:{scaleX:0.021,scaleY:0.021,x:154.8,y:218.6,alpha:0}},{t:this.instance_3,p:{x:220.6,y:32,scaleX:0.667,scaleY:0.667}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:154,y:247.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:135,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_31},{t:this.instance_25,p:{scaleX:0.252,scaleY:0.252,x:132.8,y:200.1,alpha:0.199}},{t:this.instance_24,p:{scaleX:0.18,scaleY:0.18,x:139.1,y:205,alpha:1}},{t:this.instance_23,p:{scaleX:0.119,scaleY:0.119,x:153.4,y:212.3,alpha:0.102}},{t:this.instance_3,p:{x:220.6,y:32,scaleX:0.667,scaleY:0.667}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:154,y:247.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:135,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_31},{t:this.instance_25,p:{scaleX:0.439,scaleY:0.439,x:116.9,y:185.8,alpha:0.398}},{t:this.instance_24,p:{scaleX:0.296,scaleY:0.296,x:128.6,y:196.2,alpha:1}},{t:this.instance_23,p:{scaleX:0.217,scaleY:0.217,x:151.9,y:206.1,alpha:0.199}},{t:this.instance_3,p:{x:197,y:141.6,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:59,y:199}},{t:this.instance_1,p:{scaleX:0.805,scaleY:0.805,x:251.9,y:65.9}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_32},{t:this.instance_25,p:{scaleX:0.626,scaleY:0.626,x:100.9,y:171.6,alpha:0.602}},{t:this.instance_24,p:{scaleX:0.411,scaleY:0.411,x:118.3,y:187.6,alpha:1}},{t:this.instance_23,p:{scaleX:0.315,scaleY:0.315,x:150.5,y:199.8,alpha:0.301}},{t:this.instance_3,p:{x:197,y:141.6,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:59,y:199}},{t:this.instance_1,p:{scaleX:0.805,scaleY:0.805,x:251.9,y:65.9}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_32},{t:this.instance_25,p:{scaleX:0.813,scaleY:0.813,x:84.9,y:157.4,alpha:0.801}},{t:this.instance_24,p:{scaleX:0.527,scaleY:0.527,x:107.8,y:178.9,alpha:1}},{t:this.instance_23,p:{scaleX:0.413,scaleY:0.413,x:149.1,y:193.5,alpha:0.398}},{t:this.instance_3,p:{x:186,y:72.1,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:23.5,y:208.3}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:249,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_32},{t:this.instance_25,p:{scaleX:1,scaleY:1,x:68.9,y:142.8,alpha:1}},{t:this.instance_24,p:{scaleX:0.642,scaleY:0.642,x:97.5,y:170.2,alpha:1}},{t:this.instance_23,p:{scaleX:0.511,scaleY:0.511,x:147.6,y:187.3,alpha:0.5}},{t:this.instance_3,p:{x:186,y:72.1,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:23.5,y:208.3}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:249,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_33},{t:this.instance_25,p:{scaleX:1.438,scaleY:1.438,x:33.9,y:109.4,alpha:0.801}},{t:this.instance_24,p:{scaleX:0.887,scaleY:0.887,x:80.2,y:152.6,alpha:0.801}},{t:this.instance_23,p:{scaleX:0.609,scaleY:0.609,x:146.2,y:181.1,alpha:0.602}},{t:this.instance_3,p:{x:211,y:67.6,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.61,scaleY:0.61,x:102.5,y:209.5}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:249,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_33},{t:this.instance_25,p:{scaleX:1.875,scaleY:1.875,x:-1.1,y:75.9,alpha:0.602}},{t:this.instance_24,p:{scaleX:1.131,scaleY:1.131,x:63,y:135,alpha:0.602}},{t:this.instance_23,p:{scaleX:0.706,scaleY:0.706,x:144.8,y:174.8,alpha:0.699}},{t:this.instance_3,p:{x:211,y:67.6,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.61,scaleY:0.61,x:102.5,y:209.5}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:249,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_33},{t:this.instance_25,p:{scaleX:2.313,scaleY:2.313,x:-36.2,y:42.5,alpha:0.398}},{t:this.instance_24,p:{scaleX:1.375,scaleY:1.375,x:45.7,y:117.4,alpha:0.398}},{t:this.instance_23,p:{scaleX:0.804,scaleY:0.804,x:143.3,y:168.6,alpha:0.801}},{t:this.instance_3,p:{x:168,y:21,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:164.9,y:225.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:249,y:232.7}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_34},{t:this.instance_25,p:{scaleX:2.751,scaleY:2.751,x:-71.1,y:9,alpha:0.199}},{t:this.instance_24,p:{scaleX:1.62,scaleY:1.62,x:28.4,y:99.8,alpha:0.199}},{t:this.instance_23,p:{scaleX:0.902,scaleY:0.902,x:141.9,y:162.3,alpha:0.898}},{t:this.instance_3,p:{x:168,y:21,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:164.9,y:225.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:249,y:232.7}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_34},{t:this.instance_25,p:{scaleX:3.188,scaleY:3.188,x:-106.2,y:-24.4,alpha:0}},{t:this.instance_24,p:{scaleX:1.864,scaleY:1.864,x:11.2,y:82.1,alpha:0}},{t:this.instance_29},{t:this.instance_3,p:{x:158,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:39,y:86.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:249,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_34},{t:this.instance_25,p:{scaleX:3.188,scaleY:3.188,x:-106.2,y:-24.4,alpha:0}},{t:this.instance_24,p:{scaleX:1.864,scaleY:1.864,x:11.2,y:82.1,alpha:0}},{t:this.instance_29},{t:this.instance_3,p:{x:158,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:39,y:86.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:249,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_35},{t:this.instance_25,p:{scaleX:3.188,scaleY:3.188,x:-106.2,y:-24.4,alpha:0}},{t:this.instance_24,p:{scaleX:1.864,scaleY:1.864,x:11.2,y:82.1,alpha:0}},{t:this.instance_29},{t:this.instance_3,p:{x:204,y:74.5,scaleX:0.61,scaleY:0.61}},{t:this.instance_2,p:{scaleX:0.747,scaleY:0.747,x:150,y:250}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:71.9,y:26.1}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_35},{t:this.instance_25,p:{scaleX:3.188,scaleY:3.188,x:-106.2,y:-24.4,alpha:0}},{t:this.instance_24,p:{scaleX:1.864,scaleY:1.864,x:11.2,y:82.1,alpha:0}},{t:this.instance_29},{t:this.instance_3,p:{x:204,y:74.5,scaleX:0.61,scaleY:0.61}},{t:this.instance_2,p:{scaleX:0.747,scaleY:0.747,x:150,y:250}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:71.9,y:26.1}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_35},{t:this.instance_25,p:{scaleX:3.188,scaleY:3.188,x:-106.2,y:-24.4,alpha:0}},{t:this.instance_24,p:{scaleX:1.864,scaleY:1.864,x:11.2,y:82.1,alpha:0}},{t:this.instance_29},{t:this.instance_3,p:{x:219.5,y:59.1,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.608,scaleY:0.608,x:45.5,y:203.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:249,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_36},{t:this.instance_25,p:{scaleX:0.065,scaleY:0.065,x:148.8,y:214.3,alpha:0}},{t:this.instance_24,p:{scaleX:0.065,scaleY:0.065,x:149.6,y:213.6,alpha:1}},{t:this.instance_23,p:{scaleX:0.021,scaleY:0.021,x:154.8,y:218.6,alpha:0}},{t:this.instance_3,p:{x:219.5,y:59.1,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.608,scaleY:0.608,x:45.5,y:203.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:249,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_36},{t:this.instance_25,p:{scaleX:0.252,scaleY:0.252,x:132.8,y:200.1,alpha:0.199}},{t:this.instance_24,p:{scaleX:0.18,scaleY:0.18,x:139.1,y:205,alpha:1}},{t:this.instance_23,p:{scaleX:0.119,scaleY:0.119,x:153.4,y:212.3,alpha:0.102}},{t:this.instance_3,p:{x:205.5,y:80.1,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:114.4,y:235.5}},{t:this.instance_1,p:{scaleX:0.883,scaleY:0.883,x:248.8,y:177.7}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_36},{t:this.instance_25,p:{scaleX:0.439,scaleY:0.439,x:116.9,y:185.8,alpha:0.398}},{t:this.instance_24,p:{scaleX:0.296,scaleY:0.296,x:128.6,y:196.2,alpha:1}},{t:this.instance_23,p:{scaleX:0.217,scaleY:0.217,x:151.9,y:206.1,alpha:0.199}},{t:this.instance_3,p:{x:205.5,y:80.1,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:114.4,y:235.5}},{t:this.instance_1,p:{scaleX:0.883,scaleY:0.883,x:248.8,y:177.7}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_37},{t:this.instance_25,p:{scaleX:0.626,scaleY:0.626,x:100.9,y:171.6,alpha:0.602}},{t:this.instance_24,p:{scaleX:0.411,scaleY:0.411,x:118.3,y:187.6,alpha:1}},{t:this.instance_23,p:{scaleX:0.315,scaleY:0.315,x:150.5,y:199.8,alpha:0.301}},{t:this.instance_3,p:{x:216,y:62,scaleX:0.805,scaleY:0.805}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:29.5,y:139.6}},{t:this.instance_1,p:{scaleX:0.805,scaleY:0.805,x:155.2,y:228}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_37},{t:this.instance_25,p:{scaleX:0.813,scaleY:0.813,x:84.9,y:157.4,alpha:0.801}},{t:this.instance_24,p:{scaleX:0.527,scaleY:0.527,x:107.8,y:178.9,alpha:1}},{t:this.instance_23,p:{scaleX:0.413,scaleY:0.413,x:149.1,y:193.5,alpha:0.398}},{t:this.instance_3,p:{x:216,y:62,scaleX:0.805,scaleY:0.805}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:29.5,y:139.6}},{t:this.instance_1,p:{scaleX:0.805,scaleY:0.805,x:155.2,y:228}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_37},{t:this.instance_25,p:{scaleX:1,scaleY:1,x:68.9,y:142.8,alpha:1}},{t:this.instance_24,p:{scaleX:0.642,scaleY:0.642,x:97.5,y:170.2,alpha:1}},{t:this.instance_23,p:{scaleX:0.511,scaleY:0.511,x:147.6,y:187.3,alpha:0.5}},{t:this.instance_3,p:{x:222.5,y:55.5,scaleX:0.825,scaleY:0.825}},{t:this.instance_2,p:{scaleX:0.687,scaleY:0.687,x:171.1,y:248.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:103.9,y:193.9}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_38},{t:this.instance_25,p:{scaleX:1.438,scaleY:1.438,x:33.9,y:109.4,alpha:0.801}},{t:this.instance_24,p:{scaleX:0.887,scaleY:0.887,x:80.2,y:152.6,alpha:0.801}},{t:this.instance_23,p:{scaleX:0.609,scaleY:0.609,x:146.2,y:181.1,alpha:0.602}},{t:this.instance_3,p:{x:222.5,y:55.5,scaleX:0.825,scaleY:0.825}},{t:this.instance_2,p:{scaleX:0.687,scaleY:0.687,x:171.1,y:248.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:103.9,y:193.9}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_38},{t:this.instance_25,p:{scaleX:1.875,scaleY:1.875,x:-1.1,y:75.9,alpha:0.602}},{t:this.instance_24,p:{scaleX:1.131,scaleY:1.131,x:63,y:135,alpha:0.602}},{t:this.instance_23,p:{scaleX:0.706,scaleY:0.706,x:144.8,y:174.8,alpha:0.699}},{t:this.instance_3,p:{x:211,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:74.5,y:199.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:260.6,y:162.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_38},{t:this.instance_25,p:{scaleX:2.313,scaleY:2.313,x:-36.2,y:42.5,alpha:0.398}},{t:this.instance_24,p:{scaleX:1.375,scaleY:1.375,x:45.7,y:117.4,alpha:0.398}},{t:this.instance_23,p:{scaleX:0.804,scaleY:0.804,x:143.3,y:168.6,alpha:0.801}},{t:this.instance_3,p:{x:211,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:74.5,y:199.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:260.6,y:162.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_39},{t:this.instance_25,p:{scaleX:2.751,scaleY:2.751,x:-71.1,y:9,alpha:0.199}},{t:this.instance_24,p:{scaleX:1.62,scaleY:1.62,x:28.4,y:99.8,alpha:0.199}},{t:this.instance_23,p:{scaleX:0.902,scaleY:0.902,x:141.9,y:162.3,alpha:0.898}},{t:this.instance_3,p:{x:218,y:51,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:23,y:100.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:67.6,y:208.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_39},{t:this.instance_25,p:{scaleX:3.188,scaleY:3.188,x:-106.2,y:-24.4,alpha:0}},{t:this.instance_24,p:{scaleX:1.864,scaleY:1.864,x:11.2,y:82.1,alpha:0}},{t:this.instance_29},{t:this.instance_3,p:{x:218,y:51,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:23,y:100.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:67.6,y:208.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_39},{t:this.instance_25,p:{scaleX:3.188,scaleY:3.188,x:-106.2,y:-24.4,alpha:0}},{t:this.instance_24,p:{scaleX:1.864,scaleY:1.864,x:11.2,y:82.1,alpha:0}},{t:this.instance_29},{t:this.instance_3,p:{x:211,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.765,scaleY:0.765,x:64,y:249.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:260.6,y:144.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_40},{t:this.instance_25,p:{scaleX:3.188,scaleY:3.188,x:-106.2,y:-24.4,alpha:0}},{t:this.instance_24,p:{scaleX:1.864,scaleY:1.864,x:11.2,y:82.1,alpha:0}},{t:this.instance_29},{t:this.instance_3,p:{x:211,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.765,scaleY:0.765,x:64,y:249.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:260.6,y:144.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_40},{t:this.instance_25,p:{scaleX:3.188,scaleY:3.188,x:-106.2,y:-24.4,alpha:0}},{t:this.instance_24,p:{scaleX:1.864,scaleY:1.864,x:11.2,y:82.1,alpha:0}},{t:this.instance_29},{t:this.instance_3,p:{x:226.1,y:95.6,scaleX:0.687,scaleY:0.687}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:29,y:250.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:221,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_40},{t:this.instance_25,p:{scaleX:3.188,scaleY:3.188,x:-106.2,y:-24.4,alpha:0}},{t:this.instance_24,p:{scaleX:1.864,scaleY:1.864,x:11.2,y:82.1,alpha:0}},{t:this.instance_29},{t:this.instance_3,p:{x:226.1,y:95.6,scaleX:0.687,scaleY:0.687}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:29,y:250.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:221,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_41},{t:this.instance_25,p:{scaleX:3.188,scaleY:3.188,x:-106.2,y:-24.4,alpha:0}},{t:this.instance_24,p:{scaleX:1.864,scaleY:1.864,x:11.2,y:82.1,alpha:0}},{t:this.instance_29},{t:this.instance_3,p:{x:211,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.902,scaleY:0.902,x:29.5,y:85.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:120.4,y:175.7}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_41},{t:this.instance_25,p:{scaleX:0.065,scaleY:0.065,x:148.8,y:214.3,alpha:0}},{t:this.instance_24,p:{scaleX:0.065,scaleY:0.065,x:149.6,y:213.6,alpha:1}},{t:this.instance_23,p:{scaleX:0.021,scaleY:0.021,x:154.8,y:218.6,alpha:0}},{t:this.instance_3,p:{x:211,y:23.5,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:0.902,scaleY:0.902,x:29.5,y:85.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:120.4,y:175.7}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_41},{t:this.instance_25,p:{scaleX:0.252,scaleY:0.252,x:132.8,y:200.1,alpha:0.199}},{t:this.instance_24,p:{scaleX:0.18,scaleY:0.18,x:139.1,y:205,alpha:1}},{t:this.instance_23,p:{scaleX:0.119,scaleY:0.119,x:153.4,y:212.3,alpha:0.102}},{t:this.instance_3,p:{x:154.5,y:9,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:154,y:247.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:135,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_42},{t:this.instance_25,p:{scaleX:0.439,scaleY:0.439,x:116.9,y:185.8,alpha:0.398}},{t:this.instance_24,p:{scaleX:0.296,scaleY:0.296,x:128.6,y:196.2,alpha:1}},{t:this.instance_23,p:{scaleX:0.217,scaleY:0.217,x:151.9,y:206.1,alpha:0.199}},{t:this.instance_3,p:{x:154.5,y:9,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:154,y:247.1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:135,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_42},{t:this.instance_25,p:{scaleX:0.626,scaleY:0.626,x:100.9,y:171.6,alpha:0.602}},{t:this.instance_24,p:{scaleX:0.411,scaleY:0.411,x:118.3,y:187.6,alpha:1}},{t:this.instance_23,p:{scaleX:0.315,scaleY:0.315,x:150.5,y:199.8,alpha:0.301}},{t:this.instance_3,p:{x:192,y:54.5,scaleX:0.765,scaleY:0.765}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:79.5,y:143}},{t:this.instance_1,p:{scaleX:0.805,scaleY:0.805,x:245.3,y:106.9}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_42},{t:this.instance_25,p:{scaleX:0.813,scaleY:0.813,x:84.9,y:157.4,alpha:0.801}},{t:this.instance_24,p:{scaleX:0.527,scaleY:0.527,x:107.8,y:178.9,alpha:1}},{t:this.instance_23,p:{scaleX:0.413,scaleY:0.413,x:149.1,y:193.5,alpha:0.398}},{t:this.instance_3,p:{x:192,y:54.5,scaleX:0.765,scaleY:0.765}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:79.5,y:143}},{t:this.instance_1,p:{scaleX:0.805,scaleY:0.805,x:245.3,y:106.9}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_43},{t:this.instance_25,p:{scaleX:1,scaleY:1,x:68.9,y:142.8,alpha:1}},{t:this.instance_24,p:{scaleX:0.642,scaleY:0.642,x:97.5,y:170.2,alpha:1}},{t:this.instance_23,p:{scaleX:0.511,scaleY:0.511,x:147.6,y:187.3,alpha:0.5}},{t:this.instance_3,p:{x:218,y:126.6,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:23.5,y:208.3}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:183,y:245}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_43},{t:this.instance_25,p:{scaleX:1.438,scaleY:1.438,x:33.9,y:109.4,alpha:0.801}},{t:this.instance_24,p:{scaleX:0.887,scaleY:0.887,x:80.2,y:152.6,alpha:0.801}},{t:this.instance_23,p:{scaleX:0.609,scaleY:0.609,x:146.2,y:181.1,alpha:0.602}},{t:this.instance_3,p:{x:218,y:126.6,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:23.5,y:208.3}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:183,y:245}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_43},{t:this.instance_25,p:{scaleX:1.875,scaleY:1.875,x:-1.1,y:75.9,alpha:0.602}},{t:this.instance_24,p:{scaleX:1.131,scaleY:1.131,x:63,y:135,alpha:0.602}},{t:this.instance_23,p:{scaleX:0.706,scaleY:0.706,x:144.8,y:174.8,alpha:0.699}},{t:this.instance_3,p:{x:224.5,y:72.6,scaleX:0.902,scaleY:0.902}},{t:this.instance_2,p:{scaleX:0.61,scaleY:0.61,x:102.5,y:209.5}},{t:this.instance_1,p:{scaleX:0.767,scaleY:0.767,x:64.5,y:163.5}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_44},{t:this.instance_25,p:{scaleX:2.313,scaleY:2.313,x:-36.2,y:42.5,alpha:0.398}},{t:this.instance_24,p:{scaleX:1.375,scaleY:1.375,x:45.7,y:117.4,alpha:0.398}},{t:this.instance_23,p:{scaleX:0.804,scaleY:0.804,x:143.3,y:168.6,alpha:0.801}},{t:this.instance_3,p:{x:224.5,y:72.6,scaleX:0.902,scaleY:0.902}},{t:this.instance_2,p:{scaleX:0.61,scaleY:0.61,x:102.5,y:209.5}},{t:this.instance_1,p:{scaleX:0.767,scaleY:0.767,x:64.5,y:163.5}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_44},{t:this.instance_25,p:{scaleX:2.751,scaleY:2.751,x:-71.1,y:9,alpha:0.199}},{t:this.instance_24,p:{scaleX:1.62,scaleY:1.62,x:28.4,y:99.8,alpha:0.199}},{t:this.instance_23,p:{scaleX:0.902,scaleY:0.902,x:141.9,y:162.3,alpha:0.898}},{t:this.instance_3,p:{x:159,y:27,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:164.9,y:225.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:249,y:221.2}},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.instance_44},{t:this.instance_25,p:{scaleX:3.188,scaleY:3.188,x:-106.2,y:-24.4,alpha:0}},{t:this.instance_24,p:{scaleX:1.864,scaleY:1.864,x:11.2,y:82.1,alpha:0}},{t:this.instance_29},{t:this.instance_3,p:{x:159,y:27,scaleX:1,scaleY:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:164.9,y:225.6}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:249,y:221.2}},{t:this.instance}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(271.8,196.3,287.4,319.3);
// library properties:
lib.properties = {
	width: 540,
	height: 393,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/laugh_atlas_.png", id:"laugh_atlas_"},
		{src:"sounds/Sound1atframe0wav.ogg", id:"Sound1atframe0wav"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;