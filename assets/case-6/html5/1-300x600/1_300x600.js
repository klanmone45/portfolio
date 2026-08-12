(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"1_300x600_atlas_1", frames: [[513,0,384,383],[0,347,297,189],[457,385,144,144],[299,347,156,156],[0,0,511,345]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.green = function() {
	this.initialize(ss["1_300x600_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.plate = function() {
	this.initialize(ss["1_300x600_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.purple = function() {
	this.initialize(ss["1_300x600_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.red = function() {
	this.initialize(ss["1_300x600_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.store = function() {
	this.initialize(ss["1_300x600_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.RED = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_20
	this.instance = new lib.red();
	this.instance.setTransform(-78,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(720));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-78,156,156);


(lib.PURPLE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_18
	this.instance = new lib.purple();
	this.instance.setTransform(-72,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(720));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-72,144,144);


(lib.plate_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.plate();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297,189);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkCKIAAkTIBJAAIAAETg");
	this.shape.setTransform(119.825,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAPAQAAAVQAAAWgPAQQgQAQgWAAQgVAAgQgQg");
	this.shape_1.setTransform(119.85,5.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXCaQgZgZAAgwIAAh1IgqAAIAAhCIAqAAIAAhJIBJAAIAABJIBCAAIAABCIhCAAIAABkQAAAnAnAAQAOAAANgGIAABFQgYAKgbAAQgoAAgXgWg");
	this.shape_2.setTransform(135.55,22.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglCKIhokTIBMAAIBBCtIBCitIBMAAIhnETg");
	this.shape_3.setTransform(99.55,26.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhkBlQgqgqAAg7QAAg6AqgqQAqgqA6AAQA7AAAqAqQAqAqAAA6QAAA7gqAqQgqAqg7AAQg6AAgqgqgAgwgwQgUAUAAAcQAAAdAUAUQAUAVAcAAQAdAAAUgVQAVgUgBgdQABgcgVgUQgUgUgdAAQgcAAgUAUg");
	this.shape_4.setTransform(160.1,26.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABvDEIgfhSIifAAIgfBSIhRAAICXmHIBSAAICWGHgAA1AqIg0iJIg0CJIBoAAg");
	this.shape_5.setTransform(70.725,20.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(51.6,0,122.80000000000001,40.8), null);


(lib.main_solid = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgZZAwdMAAAhg5MAyyAAAMAAABg5g");
	this.shape.setTransform(162.55,310.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325.1,620.2);


(lib.logo_anim_red = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// red_pin
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF4053").s().p("Ag8A9QgagZAAgkQAAgjAagZQAagZAiAAQAkAAAaAZQAZAZAAAjQAAAkgZAZQgaAZgkAAQgiAAgagZg");
	this.shape.setTransform(8.65,8.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(29).to({_off:true},1).wait(449).to({_off:false},0).wait(29).to({_off:true},1).wait(90).to({_off:false},0).wait(121));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.3,17.3);


(lib.logo_anim_purple = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// purple_pin
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#965EEB").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgPAVAAQAWAAAQAPQAQAQAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape.setTransform(5.35,5.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(29).to({_off:true},1).wait(449).to({_off:false},0).wait(29).to({_off:true},1).wait(90).to({_off:false},0).wait(121));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.7,10.7);


(lib.logo_anim_green = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// green_pin
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#04E061").s().p("AhkBlQgqgqAAg7QAAg6AqgqQAqgqA6AAQA7AAAqAqQAqAqAAA6QAAA7gqAqQgqAqg7AAQg6AAgqgqg");
	this.shape.setTransform(14.3,14.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(29).to({_off:true},1).wait(449).to({_off:false},0).wait(29).to({_off:true},1).wait(90).to({_off:false},0).wait(121));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.6,28.6);


(lib.logo_anim_blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// blue_pin
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AAFF").s().p("AhRBSQgigiAAgwQAAgvAigiQAigiAvAAQAwAAAjAiQAhAiABAvQgBAwghAiQgjAigwAAQgvAAgigig");
	this.shape.setTransform(11.65,11.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(29).to({_off:true},1).wait(449).to({_off:false},0).wait(29).to({_off:true},1).wait(90).to({_off:false},0).wait(121));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.3,23.3);


(lib.legal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_22
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#858585").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape.setTransform(231.2,7.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#858585").s().p("AgGAVIgGgDIgFgEIgCgFIAJAAQABADADABQAEACAEAAQAEAAADgCQADgBAAgDQAAAAAAgBQAAgBAAAAQgBAAAAgBQAAAAgBgBIgGgBIgIgBQgNgBgBgKIABgFIAFgEIAFgDIAHgBIAHABIAHADIAEAEIACAFIgJAAQAAgDgEgBQgDgCgEAAQgFAAgCACQgDABAAADQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABIAHABIAHABQAHAAADACQAEADgBAGIgBAFIgDAEIgGADIgIABIgHgBg");
	this.shape_1.setTransform(227.85,5.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#858585").s().p("AgIAVIgFgCIgEgFQgBgCAAgEQAAgEABgCIAFgDIAFgDIAHAAIANAAQAAgFgEgDQgEgCgFAAQgDAAgDACQgDABgBADIgJAAIADgFIAFgEQACgCADgBIAGgBIAIABIAHADIADAFIACAHIAAAaIgHAAIAAgFIgGAEQgEACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAEAAQAGAAADgDQAEgDABgFIAAgCIgNAAQgFAAgDABg");
	this.shape_2.setTransform(222.9,5.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#858585").s().p("AgDAVIgSgpIAIAAIANAfIAOgfIAIAAIgSApg");
	this.shape_3.setTransform(218.225,5.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#858585").s().p("AgLADIAAgFIAXAAIAAAFg");
	this.shape_4.setTransform(214.1,5.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#858585").s().p("AgGAVIgGgDIgEgEIgDgFIAJAAQABADADABQAEACAEAAQAEAAADgCQADgBAAgDQAAAAAAgBQAAgBAAAAQgBAAAAgBQgBAAAAgBIgHgBIgIgBQgNgBABgKIABgFIADgEIAGgDIAHgBIAIABIAFADIAFAEIACAFIgJAAQgBgDgDgBQgDgCgEAAQgEAAgDACQgDABAAADQAAABAAAAQAAABABAAQAAABAAAAQABAAABABIAGABIAHABQAGAAAEACQADADAAAGIAAAFIgEAEIgGADIgIABIgHgBg");
	this.shape_5.setTransform(210,5.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#858585").s().p("AgLAVIAAgpIAHAAIAAAGQACgCADgCQADgCAGAAIACAAIAAAHIgCAAQgHAAgDAEQgDAEgBAGIAAAUg");
	this.shape_6.setTransform(206.05,5.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_7.setTransform(201.575,5.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#858585").s().p("AgDAeIAAg7IAHAAIAAA7g");
	this.shape_8.setTransform(197.95,4.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#858585").s().p("AgDAeIAAg7IAHAAIAAA7g");
	this.shape_9.setTransform(195.75,4.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_10.setTransform(192.125,5.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#858585").s().p("AgGAVIgGgDIgEgEIgDgFIAIAAQACADAEABQADACAFAAQADAAADgCQADgBAAgDQAAAAAAgBQAAgBgBAAQAAAAAAgBQgBAAAAgBIgHgBIgIgBQgMgBAAgKIABgFIADgEIAGgDIAHgBIAHABIAGADIAFAEIACAFIgIAAQgCgDgDgBQgDgCgEAAQgFAAgCACQgDABAAADQAAABAAAAQAAABABAAQAAABAAAAQABAAABABIAFABIAIABQAGAAAEACQADADABAGIgBAFIgEAEIgGADIgHABIgIgBg");
	this.shape_11.setTransform(187.3,5.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#858585").s().p("AgLADIAAgFIAXAAIAAAFg");
	this.shape_12.setTransform(183.15,5.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#858585").s().p("AgGAVIgGgDIgEgEIgDgFIAJAAQABADADABQAEACAEAAQAFAAACgCQADgBAAgDQAAAAAAgBQAAgBAAAAQgBAAAAgBQAAAAgBgBIgHgBIgIgBQgNgBABgKIABgFIADgEIAGgDIAHgBIAIABIAFADIAFAEIACAFIgJAAQgBgDgDgBQgDgCgEAAQgEAAgDACQgDABAAADQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABIAHABIAHABQAHAAADACQADADAAAGIgBAFIgDAEIgGADIgIABIgHgBg");
	this.shape_13.setTransform(179.05,5.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_14.setTransform(174.175,5.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#858585").s().p("AgGAVIgGgDIgFgEIgCgFIAJAAQABADADABQAEACAEAAQAEAAADgCQADgBAAgDQAAAAAAgBQAAgBAAAAQgBAAAAgBQAAAAgBgBIgGgBIgIgBQgNgBgBgKIABgFIAFgEIAFgDIAHgBIAHABIAHADIAEAEIACAFIgJAAQAAgDgEgBQgDgCgEAAQgFAAgCACQgDABAAADQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABIAHABIAHABQAHAAADACQAEADgBAGIgBAFIgDAEIgGADIgIABIgHgBg");
	this.shape_15.setTransform(169.35,5.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#858585").s().p("AgIAUQgEgBgCgDQgCgCgBgDIgCgIIAAgXIAIAAIAAAXQAAAFADADQADADAFAAIADgBIAFgCIADgFIABgGIAAgUIAIAAIAAAoIgIAAIAAgEQgCACgEACQgDABgEAAIgHgBg");
	this.shape_16.setTransform(164.35,5.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#858585").s().p("AAMAVIAAgXQAAgFgCgDQgDgDgGAAIgEABIgEADIgDAEIgBAFIAAAVIgIAAIAAgoIAIAAIAAAEQACgCADgCQAEgBAEAAQAEAAAEABQADABACADQACACACAEQABADAAAEIAAAXg");
	this.shape_17.setTransform(159.15,5.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_18.setTransform(153.875,5.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#858585").s().p("AgGAdIgHgEIAAAFIgIAAIAAg8IAIAAIAAAYIAHgFQADgBAEAAQAEAAAFABQAEADACACIAEAHQACAEgBAEIgBAIIgEAHQgCADgEACQgFACgEgBQgEABgDgCgAgEgEIgEADQgCABgCACQgBADAAAEQAAADABADIAEAFIAEACIAEABIAFgBIAFgDIACgFIABgFIgBgGIgCgDIgFgEQgCgBgDAAIgEABg");
	this.shape_19.setTransform(148.7,4.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#858585").s().p("AgPAiIAXhDIAIAAIgXBDg");
	this.shape_20.setTransform(144.275,5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_21.setTransform(140.075,5.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#858585").s().p("AAbAVIAAgXQAAgFgCgDQgDgDgFAAIgFABIgEACIgDAFIgBAFIAAAVIgHAAIAAgXQAAgFgCgDQgDgDgGAAIgEABIgEACIgDAFIgBAFIAAAVIgIAAIAAgoIAIAAIAAAEIAFgEQADgBAFAAQAFAAAEACQAEACABADIAHgFQAEgCAFAAQAFAAADABQADABADADIADAFIABAIIAAAXg");
	this.shape_22.setTransform(133.325,5.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_23.setTransform(126.525,5.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#858585").s().p("AgMAVIAAgpIAJAAIAAAGQABgCADgCQAEgCAFAAIADAAIAAAHIgDAAQgHAAgDAEQgDAEAAAGIAAAUg");
	this.shape_24.setTransform(122.3,5.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#858585").s().p("AgUAfIAAg7IAIAAIAAAEIAGgEQADgCADABQAGgBADACQAEACADADIAEAHQABAEABAEIgCAIIgEAHQgDACgEACQgDACgGAAQgDAAgDgCIgGgEIAAAYgAgEgVIgFACQgCACgBADQgBACAAAEQAAAEABADIADADIAFADIAEABIAFgBIAFgEIADgDIABgGIgBgFIgDgFIgFgDQgCgBgDAAIgEABg");
	this.shape_25.setTransform(117.8,6.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#858585").s().p("AgPAiIAXhDIAIAAIgXBDg");
	this.shape_26.setTransform(113.375,5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#858585").s().p("AgDAeIAAg7IAHAAIAAA7g");
	this.shape_27.setTransform(110.65,4.65);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#858585").s().p("AgIAVIgFgCIgDgFQgCgCAAgEQAAgEACgCIADgDIAGgDIAHAAIAMAAQABgFgEgDQgEgCgEAAQgDAAgEACQgDABgBADIgJAAIADgFIAEgEQADgCADgBIAHgBIAIABIAFADIAFAFIABAHIAAAaIgIAAIAAgFIgFAEQgEACgEAAIgHgBgAgHADQgDACAAADQAAAEADABQACACAFAAQAFAAAEgDQADgDAAgFIAAgCIgMAAQgEAAgDABg");
	this.shape_28.setTransform(106.95,5.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#858585").s().p("AgFAeIgGgCIgFgFIgDgFIAIAAQACADADABQADACADAAQAHAAADgEQAEgFAAgFIAAgDIgGAEQgEACgEgBQgEABgEgCQgEgCgDgDQgDgDgBgDIgBgIQAAgEABgEQABgFADgDQADgCAEgDQAEgBAEAAQAEAAAEABIAGAFIAAgFIAHAAIAAAnQAAAEgBAFQgBAEgDACQgDADgEABQgEACgFAAIgFgBgAgEgWQgDABgCADIgDAEIAAAGIAAAFIADAEIAFADIAEABIAFgBIAFgCIADgEIABgGIgBgHQgBgCgCgCIgFgDIgFgBQgCAAgCABg");
	this.shape_29.setTransform(101.775,6.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_30.setTransform(96.675,5.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#858585").s().p("AgDAeIAAg7IAHAAIAAA7g");
	this.shape_31.setTransform(93.05,4.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#858585").s().p("AgPAiIAXhDIAIAAIgXBDg");
	this.shape_32.setTransform(90.375,5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#858585").s().p("AgJAUQgDgBgCgDQgCgCgCgDIAAgIIAAgXIAHAAIAAAXQAAAFACADQADADAGAAIAEgBIAEgCIACgFIABgGIAAgUIAIAAIAAAoIgIAAIAAgEQgBACgEACQgDABgEAAIgIgBg");
	this.shape_33.setTransform(86.1,5.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#858585").s().p("AgMAVIAAgpIAIAAIAAAGQACgCADgCQAEgCAFAAIADAAIAAAHIgDAAQgHAAgDAEQgEAEAAAGIAAAUg");
	this.shape_34.setTransform(81.9,5.575);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#858585").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_35.setTransform(78.95,7.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_36.setTransform(75.325,5.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#858585").s().p("AAIAaQgHAAgCgDQgEgDAAgHIAAgUIgIAAIAAgHIAIAAIAAgLIAGAAIAAALIAOAAIAAAHIgOAAIAAASQAAAEACACQABACAEAAIAHAAIAAAHg");
	this.shape_37.setTransform(70.9,5.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#858585").s().p("AgDAeIAAgoIAHAAIAAAogAgDgUIAAgJIAHAAIAAAJg");
	this.shape_38.setTransform(68.075,4.65);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#858585").s().p("AgDAVIgSgpIAIAAIANAfIAOgfIAIAAIgSApg");
	this.shape_39.setTransform(64.625,5.575);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#858585").s().p("AgIAVIgFgCIgDgFQgCgCAAgEQAAgEACgCIADgDIAHgDIAGAAIAMAAQABgFgEgDQgEgCgEAAQgDAAgEACQgDABgBADIgJAAIADgFIAEgEQADgCADgBIAHgBIAIABIAFADIAFAFIABAHIAAAaIgIAAIAAgFIgFAEQgEACgEAAIgHgBgAgHADQgDACAAADQAAAEADABQACACAFAAQAFAAAEgDQADgDAAgFIAAgCIgMAAQgEAAgDABg");
	this.shape_40.setTransform(59.7,5.575);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#858585").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_41.setTransform(56.35,7.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#858585").s().p("AAMAVIgMgfIgLAfIgIAAIgQgpIAIAAIAMAfIAMgfIAHAAIAMAfIAMgfIAIAAIgQApg");
	this.shape_42.setTransform(51.575,5.575);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#858585").s().p("AAMAVIgMgfIgLAfIgIAAIgQgpIAIAAIAMAfIAMgfIAHAAIAMAfIAMgfIAIAAIgQApg");
	this.shape_43.setTransform(44.075,5.575);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#858585").s().p("AAMAVIgMgfIgLAfIgIAAIgQgpIAIAAIAMAfIAMgfIAHAAIAMAfIAMgfIAIAAIgQApg");
	this.shape_44.setTransform(36.575,5.575);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#858585").s().p("AgPAiIAXhDIAIAAIgXBDg");
	this.shape_45.setTransform(31.225,5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#858585").s().p("AgPAiIAXhDIAIAAIgXBDg");
	this.shape_46.setTransform(28.025,5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#858585").s().p("AgEATIAAgKIAJAAIAAAKgAgEgIIAAgKIAJAAIAAAKg");
	this.shape_47.setTransform(25.4,5.75);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#858585").s().p("AgGAVIgGgDIgEgEIgDgFIAIAAQACADAEABQADACAFAAQAEAAACgCQADgBAAgDQAAAAAAgBQAAgBgBAAQAAAAAAgBQgBAAAAgBIgGgBIgIgBQgOgBAAgKIACgFIADgEIAGgDIAHgBIAHABIAGADIAFAEIACAFIgIAAQgBgDgEgBQgDgCgEAAQgEAAgDACQgDABAAADQAAABAAAAQAAABABAAQAAABAAAAQABAAABABIAFABIAIABQAHAAADACQAEADAAAGIgBAFIgEAEIgGADIgHABIgIgBg");
	this.shape_48.setTransform(22.05,5.575);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#858585").s().p("AgUAfIAAg7IAIAAIAAAEIAFgEQAEgCADABQAFgBAEACQAEACADADIAEAHQABAEAAAEIgBAIIgEAHQgDACgEACQgEACgFAAQgDAAgEgCIgFgEIAAAYgAgEgVIgFACQgBACgBADQgCACAAAEQAAAEACADIACADIAFADIAEABIAGgBIAEgEIACgDIACgGIgCgFIgCgFIgEgDQgDgBgDAAIgEABg");
	this.shape_49.setTransform(17.15,6.45);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#858585").s().p("AAIAaQgHAAgDgDQgDgDAAgHIAAgUIgIAAIAAgHIAIAAIAAgLIAGAAIAAALIANAAIAAAHIgNAAIAAASQAAAEACACQABACAEAAIAGAAIAAAHg");
	this.shape_50.setTransform(12.5,5.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#858585").s().p("AAIAaQgHAAgDgDQgDgDAAgHIAAgUIgIAAIAAgHIAIAAIAAgLIAGAAIAAALIANAAIAAAHIgNAAIAAASQAAAEACACQABACAEAAIAGAAIAAAHg");
	this.shape_51.setTransform(9,5.025);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#858585").s().p("AAMAeIAAgYQAAgFgCgCQgDgDgGAAIgEABIgEACIgDADIgBAGIAAAWIgIAAIAAg7IAIAAIAAAXQACgCADgCQAEgCAEABQAEgBAEACQADABACACQADADABADQABACAAAFIAAAYg");
	this.shape_52.setTransform(4.7,4.65);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_53.setTransform(188.25,-3.725);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_54.setTransform(182.85,-3.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#858585").s().p("AAPAaIAAgLIglAAIAAgoIAIAAIAAAhIAXAAIAAghIAHAAIAAAhIAHAAIAAASg");
	this.shape_55.setTransform(177.5,-3.15);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#858585").s().p("AAJAVIgTgRIAAARIgIAAIAAgpIAIAAIAAASIATgSIAKAAIgWAUIAWAVg");
	this.shape_56.setTransform(172.5,-3.725);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#858585").s().p("AgIAVIgFgCIgEgFQgBgCAAgEQAAgEABgCIAFgDIAGgDIAGAAIANAAQgBgFgDgDQgDgCgGAAQgDAAgDACQgDABgCADIgIAAIADgFIAFgEQACgCAEgBIAFgBIAIABIAGADIAEAFIACAHIAAAaIgHAAIAAgFIgHAEQgDACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAEAAQAGAAADgDQAFgDAAgFIAAgCIgNAAQgFAAgDABg");
	this.shape_57.setTransform(167.3,-3.725);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#858585").s().p("AgSAVIAAgpIAYAAQAGAAAEAEQADADAAAEIgBAGQgBACgDABQADACABACIABAGQAAAEgDADQgDAEgHAAgAgKAOIAPAAIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgPAAgAgKgCIAPAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgEgBIgPAAg");
	this.shape_58.setTransform(160.525,-3.725);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#858585").s().p("AAMAVIAAgOIgKAAIgKAOIgLAAIANgPQgFgBgDgEQgCgCAAgFIABgFIADgFIAEgDIAHgBIAVAAIAAApgAgGgLQgCACAAADQAAAEACABQACABAEAAIAMAAIAAgNIgMAAQgEAAgCACg");
	this.shape_59.setTransform(153.175,-3.725);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_60.setTransform(148.35,-3.725);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#858585").s().p("AgDAVIAAgiIgQAAIAAgHIAnAAIAAAHIgQAAIAAAig");
	this.shape_61.setTransform(143.525,-3.725);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#858585").s().p("AgHAUQgEgBgDgDIgEgHQgBgEAAgFQAAgEABgEIAEgHIAHgEQAEgCAEAAQAHAAAFAEQAFADACAGIgIAAQgBgCgDgCQgDgCgEAAQgCAAgDACIgEADIgCAEIgCAFIACAGIACAFIAEADIAFABQAEAAADgCIAEgEIAIAAQgCAGgFADQgFAEgHAAQgEAAgEgCg");
	this.shape_62.setTransform(138.9,-3.725);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#858585").s().p("AgIAVIgFgCQgDgCgBgDQgBgCAAgEQAAgEABgCIAFgDIAFgDIAHAAIANAAQAAgFgEgDQgEgCgFAAQgDAAgDACQgDABgBADIgJAAIADgFIAFgEQACgCADgBIAGgBIAIABIAHADIADAFIACAHIAAAaIgHAAIAAgFIgGAEQgEACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAEAAQAGAAADgDQAEgDABgFIAAgCIgNAAQgFAAgDABg");
	this.shape_63.setTransform(133.8,-3.725);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#858585").s().p("AALAVIAAgQIgCABIgDAAIgEABIgCAAQgSAAAAgNIAAgOIAHAAIAAANQAAAEADACQACABAGAAIAFAAIAGgBIAAgTIAIAAIAAApg");
	this.shape_64.setTransform(128.875,-3.725);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#858585").s().p("AgRAeIAAgHIADAAIADAAIACgBIACgDIACgEIACgEIgSgoIAJAAIAMAfIAOgfIAJAAIgUArIgDAIIgDAEQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgFABg");
	this.shape_65.setTransform(124.1,-2.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#858585").s().p("AAMAVIgMgPIgMAPIgIAAIAQgVIgQgUIAJAAIALAPIAMgPIAJAAIgRAUIARAVg");
	this.shape_66.setTransform(117.4,-3.725);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#858585").s().p("AgIAVIgFgCQgCgCgCgDQgBgCAAgEQAAgEABgCIAEgDIAGgDIAHAAIAMAAQABgFgEgDQgEgCgFAAQgCAAgEACQgDABgBADIgJAAIADgFIAFgEQACgCADgBIAGgBIAJABIAGADIADAFIACAHIAAAaIgIAAIAAgFIgFAEQgEACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAFAAQAFAAAEgDQADgDAAgFIAAgCIgMAAQgFAAgDABg");
	this.shape_67.setTransform(112.45,-3.725);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#858585").s().p("AANAVIAAgiIgQAAIAAALIgBAHQAAAEgBAEQgCADgDADQgDACgFAAIgCAAIAAgHIABAAQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgEIABgFIAAgFIAAgSIAgAAIAAApg");
	this.shape_68.setTransform(107.275,-3.725);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_69.setTransform(102.25,-3.725);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#858585").s().p("AgSAVIAAgpIAYAAQAGAAAEAEQADADAAAEIgBAGQgBACgDABQADACABACIABAGQAAAEgDADQgDAEgHAAgAgKAOIAPAAIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgPAAgAgKgCIAPAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgEgBIgPAAg");
	this.shape_70.setTransform(97.175,-3.725);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#858585").s().p("AgIAVIgFgCQgDgCgBgDQgBgCAAgEQAAgEABgCIAFgDIAFgDIAHAAIANAAQAAgFgEgDQgEgCgFAAQgDAAgDACQgDABgBADIgJAAIADgFIAFgEQACgCADgBIAGgBIAIABIAHADIADAFIACAHIAAAaIgHAAIAAgFIgGAEQgEACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAEAAQAGAAADgDQAEgDABgFIAAgCIgNAAQgFAAgDABg");
	this.shape_71.setTransform(91.95,-3.725);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#858585").s().p("AgVAeIAAg6IAIAAIAAAEIAHgEQADgCAEAAQAEAAAFACQAEACACADIAEAHQACAEgBAFIgBAHIgEAHQgCADgEABQgFACgEAAQgEAAgDgCIgHgDIAAAWgAgEgWIgEAEQgCABgCADQgBADAAAEQAAADABADIAEADIAEADIAEABIAFgBIAFgEIACgDIABgFIgBgHIgCgEIgFgDQgCgBgDgBIgEABg");
	this.shape_72.setTransform(87.05,-2.85);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#858585").s().p("AAMAVIAAgiIgXAAIAAAiIgIAAIAAgpIAnAAIAAApg");
	this.shape_73.setTransform(81.55,-3.725);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#858585").s().p("AgFAKIAFgKIgDAAIAAgJIAJAAIAAAKIgGAJg");
	this.shape_74.setTransform(75.775,-1.625);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_75.setTransform(72.275,-3.725);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#858585").s().p("AgUAeIAAg6IAIAAIAAAEIAFgEQAEgCADAAQAGAAADACQAFACACADIAEAHQACAEAAAFIgCAHIgEAHQgCADgFABQgDACgGAAQgDAAgEgCIgFgDIAAAWgAgEgWIgFAEQgBABgBADQgCADAAAEQAAADACADIACADIAFADIAEABIAGgBIAEgEIADgDIABgFIgBgHIgDgEIgEgDQgDgBgDgBIgEABg");
	this.shape_76.setTransform(67.2,-2.85);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_77.setTransform(61.775,-3.725);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#858585").s().p("AgDAVIAAgiIgQAAIAAgHIAnAAIAAAHIgQAAIAAAig");
	this.shape_78.setTransform(57.025,-3.725);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#858585").s().p("AgIAVIgFgCQgCgCgCgDQgBgCAAgEQAAgEABgCIAFgDIAFgDIAHAAIAMAAQAAgFgDgDQgEgCgFAAQgCAAgEACQgDABgBADIgJAAIADgFIAFgEQACgCADgBIAGgBIAIABIAHADIADAFIACAHIAAAaIgIAAIAAgFIgFAEQgEACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAFAAQAFAAADgDQAEgDAAgFIAAgCIgMAAQgFAAgDABg");
	this.shape_79.setTransform(52.25,-3.725);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#858585").s().p("AgGAVIgGgDIgEgEIgDgFIAJAAQABADADABQADACAEAAIAEgBIAEgBIACgCIABgDQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQgCgCgDAAIgJAAIAAgFIAJAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgDgDgCQgDgCgFAAQgDAAgDACQgDABgCADIgIAAIACgFIAEgEIAGgDIAHgBIAGABIAGACIAFAEQABADAAADQAAAEgBACIgEACIACABIACACIABADIABADQAAADgCACIgEAEIgGADIgHABIgHgBg");
	this.shape_80.setTransform(47.475,-3.725);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_81.setTransform(42.4,-3.725);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#858585").s().p("AAMAVIAAgSIgXAAIAAASIgIAAIAAgpIAIAAIAAARIAXAAIAAgRIAIAAIAAApg");
	this.shape_82.setTransform(37,-3.725);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#858585").s().p("AgIAVIgFgCQgDgCAAgDQgCgCAAgEQAAgEACgCIADgDIAHgDIAGAAIAMAAQAAgFgDgDQgEgCgEAAQgEAAgDACQgDABgCADIgIAAIADgFIAEgEQADgCADgBIAHgBIAIABIAFADIAFAFIABAHIAAAaIgIAAIAAgFIgGAEQgDACgEAAIgHgBgAgHADQgDACAAADQAAAEADABQACACAFAAQAFAAAEgDQADgDAAgFIAAgCIgMAAQgEAAgDABg");
	this.shape_83.setTransform(31.7,-3.725);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#858585").s().p("AgPAVIAAgpIAfAAIAAAHIgXAAIAAAig");
	this.shape_84.setTransform(27.475,-3.725);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#858585").s().p("AgVAeIAAg6IAIAAIAAAEIAHgEQADgCAEAAQAEAAAFACQAEACACADIAEAHQABAEAAAFIgBAHIgEAHQgCADgEABQgFACgEAAQgEAAgDgCIgHgDIAAAWgAgEgWIgEAEQgDABgBADQgBADAAAEQAAADABADIAEADIAEADIAEABIAFgBIAFgEIADgDIAAgFIAAgHIgDgEIgFgDQgCgBgDgBIgEABg");
	this.shape_85.setTransform(22.6,-2.85);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_86.setTransform(17.175,-3.725);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#858585").s().p("AgJAdQgEgCgCgEQgDgDgBgFQgBgEgBgGIABgLIADgJQACgEAEgCQAEgDAEAAIAIgBQAEAAACgCIACgDIAIAAQgBAEgDAEQgDADgGABIgKABIgFACIgEADIgBADIgBAFIAGgFQADgCAFAAQAEABAEABQADACADADQADACACAEQABADABAEQgBAFgBAEQgCADgDADQgCADgFACQgEABgEABQgEgBgFgBgAgEgDIgFADIgDAEIgBAFIABAGIADAFIAFADIAEAAIAFAAIAFgDIADgFIABgGIgBgFIgDgEIgFgDIgFAAIgEAAg");
	this.shape_87.setTransform(9.9,-4.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_88.setTransform(4.625,-3.725);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#858585").s().p("AAMAVIAAgOIgKAAIgKAOIgLAAIANgPQgFgBgDgEQgCgCAAgFIABgFIADgFIAEgDIAHgBIAVAAIAAApgAgGgLQgCACAAADQAAAEACABQACABAEAAIAMAAIAAgNIgMAAQgEAAgCACg");
	this.shape_89.setTransform(186.725,-13.025);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_90.setTransform(181.9,-13.025);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#858585").s().p("AAPAaIAAgLIglAAIAAgpIAIAAIAAAiIAWAAIAAgiIAIAAIAAAiIAHAAIAAASg");
	this.shape_91.setTransform(176.55,-12.45);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#858585").s().p("AgIAVIgFgCIgEgFQgBgCAAgEQAAgEABgCIAEgDIAGgDIAHAAIAMAAQABgFgEgDQgEgCgEAAQgDAAgEACQgDABgBADIgJAAIADgFIAFgEQACgCADgBIAHgBIAIABIAGADIAEAFIABAHIAAAaIgIAAIAAgFIgFAEQgEACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAFAAQAFAAAEgDQADgDAAgFIAAgCIgMAAQgFAAgDABg");
	this.shape_92.setTransform(170.95,-13.025);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#858585").s().p("AARAVIAAgbIgNAbIgHAAIgNgbIAAAbIgIAAIAAgpIAJAAIAPAhIAQghIAJAAIAAApg");
	this.shape_93.setTransform(165.375,-13.025);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#858585").s().p("AgVAfIAAg8IAIAAIAAAFIAGgEQAEgBAEgBQAFABAEABQADACADADIAEAHQACAEgBAFIgBAHIgEAGQgDADgDADQgEABgFAAQgEAAgEgBIgGgFIAAAYgAgEgWIgEADQgCACgCADQgBADAAAEQAAADABACIAEAFIAEACIAEABIAFgBIAFgDIACgEIABgFIgBgGIgCgFIgFgDQgCgCgDABIgEAAg");
	this.shape_94.setTransform(159.6,-12.15);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_95.setTransform(154.175,-13.025);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#858585").s().p("AgDAnIAAgSIgEAAQgFAAgEgCQgEgBgDgDQgDgDgCgEQgBgDAAgFIABgHQACgEADgDQADgDAEgBQAEgCAFAAIAEAAIAAgSIAHAAIAAASIAEAAIAJACQAEABADADIAFAHIABAHQAAAFgBADQgCAEgDADQgDADgEABQgEACgFAAIgEAAIAAASgAAEAOIAEAAIAGgBQADgBACgCIADgEIAAgGIgBgFIgCgEIgFgDIgHgBIgDAAgAgNgMIgEADIgEAEIAAAFIAAAGIAEAEQABACADABIAGABIAEAAIAAgbIgEAAIgGABg");
	this.shape_96.setTransform(148.15,-13.025);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#858585").s().p("AAMAVIAAgSIgXAAIAAASIgIAAIAAgpIAIAAIAAARIAXAAIAAgRIAIAAIAAApg");
	this.shape_97.setTransform(142,-13.025);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#858585").s().p("AASAeIAAgwIgiAwIgJAAIAAg7IAIAAIAAAwIAigwIAJAAIAAA7g");
	this.shape_98.setTransform(135.95,-13.95);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#858585").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_99.setTransform(129.55,-11.45);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#858585").s().p("AgIAVIgFgCIgEgFQgBgCAAgEQAAgEABgCIAFgDIAGgDIAGAAIANAAQgBgFgDgDQgDgCgGAAQgDAAgDACQgDABgCADIgIAAIADgFIAFgEQACgCAEgBIAFgBIAIABIAGADIAEAFIACAHIAAAaIgHAAIAAgFIgHAEQgDACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAEAAQAGAAADgDQAFgDAAgFIAAgCIgNAAQgFAAgDABg");
	this.shape_100.setTransform(125.9,-13.025);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#858585").s().p("AASAaIAAgLIgiAAIAAALIgIAAIAAgSIAEAAIADgDIACgFIABgDIAAgFIAAgSIAhAAIAAAiIAGAAIAAASgAgGgJIAAAFIgBAEIgBAEIgCAEIAVAAIAAgbIgRAAg");
	this.shape_101.setTransform(120.7,-12.45);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_102.setTransform(115.425,-13.025);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#858585").s().p("AgPAVIAAgpIAfAAIAAAHIgXAAIAAAig");
	this.shape_103.setTransform(110.925,-13.025);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#858585").s().p("AAHAeIAAgNIgfAAIAAgHIAcgnIAJAAIgcAnIAWAAIAAgRIAIAAIAAARIAKAAIAAAHIgKAAIAAANg");
	this.shape_104.setTransform(103.925,-13.95);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#858585").s().p("AgTAeIAAgHIAYgXIAFgEQACgDAAgEIgBgFQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgDgCIgFgBQgEAAgDADQgEACgBAFIgIAAIACgHQACgEADgCQACgCAEgBQADgBAEAAQAEAAAEABQAEABACACIAEAGQACADAAAFQAAAFgDAEIgGAGIgTATIAdAAIAAAHg");
	this.shape_105.setTransform(98.625,-14);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#858585").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_106.setTransform(95.1,-11.45);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#858585").s().p("AgTAeIAAgHIAYgXIAFgEQACgDAAgEIgBgFQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgDgCIgFgBQgEAAgDADQgEACgBAFIgIAAIACgHQACgEADgCQACgCAEgBQADgBAEAAQAEAAAEABQAEABACACIAEAGQACADAAAFQAAAFgDAEIgGAGIgTATIAdAAIAAAHg");
	this.shape_107.setTransform(91.475,-14);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#858585").s().p("AACAeIAAgyIgMAMIAAgKIAMgLIAIAAIAAA7g");
	this.shape_108.setTransform(87,-13.95);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#858585").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_109.setTransform(84.5,-11.45);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#858585").s().p("AgHAeQgDgBgDgDIgEgGIgDgHIgBgHIgBgGIABgFIABgIIADgGIAEgFIAGgFQAEgBADAAQAEAAAEABIAGAFIAEAFIADAGIABAIIABAFIgBAGIgBAHIgDAHIgEAGQgDADgDABQgEABgEAAQgDAAgEgBgAgGgUIgFAGIgCAHIgBAHIABAIIACAHIAFAHQADABADAAQAEAAADgBIAFgHIACgHIABgIIgBgHIgCgHIgFgGQgDgDgEABQgDgBgDADg");
	this.shape_110.setTransform(80.625,-13.95);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#858585").s().p("AgGAeQgEgBgCgBIgFgGIgDgHIAIAAQACAFADACQAEABAEAAQAFABADgDQAEgDAAgFQAAgEgEgDQgDgDgFABIgHAAIAAgHIAHAAQAFAAADgCQAEgDAAgFQAAgEgEgDQgDgDgFABQgEAAgEABQgDACgBAFIgJAAQABgEACgDIAFgFIAGgDIAHgBQAEAAAEABIAHAEQACACABADIACAHIgCAHQgBADgFADQAFACABAEQACAEAAADQAAAEgBADIgEAGQgDADgEABQgEABgEAAIgHgBg");
	this.shape_111.setTransform(75.1,-13.95);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_112.setTransform(67.975,-13.025);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#858585").s().p("AAMAVIAAgiIgWAAIAAAiIgJAAIAAgpIAmAAIAAApg");
	this.shape_113.setTransform(62.7,-13.025);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#858585").s().p("AgIAVIgFgCIgEgFQgBgCAAgEQAAgEABgCIAFgDIAFgDIAHAAIAMAAQAAgFgDgDQgEgCgFAAQgCAAgEACQgDABgBADIgJAAIADgFIAFgEQACgCADgBIAGgBIAJABIAGADIADAFIACAHIAAAaIgIAAIAAgFIgFAEQgEACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAFAAQAFAAAEgDQADgDAAgFIAAgCIgMAAQgFAAgDABg");
	this.shape_114.setTransform(55.4,-13.025);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#858585").s().p("AARAaIAAgLIgiAAIAAALIgHAAIAAgSIAEAAIADgDIABgFIACgDIAAgFIAAgSIAgAAIAAAiIAHAAIAAASgAgHgJIAAAFIAAAEIgCAEIgBAEIAUAAIAAgbIgRAAg");
	this.shape_115.setTransform(50.2,-12.45);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_116.setTransform(44.925,-13.025);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#858585").s().p("AgPAVIAAgpIAfAAIAAAHIgXAAIAAAig");
	this.shape_117.setTransform(40.425,-13.025);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#858585").s().p("AAHAeIAAgNIgfAAIAAgHIAcgnIAJAAIgcAnIAWAAIAAgRIAIAAIAAARIAKAAIAAAHIgKAAIAAANg");
	this.shape_118.setTransform(33.425,-13.95);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#858585").s().p("AgTAeIAAgHIAYgXIAFgEQACgDAAgEIgBgFQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgDgCIgFgBQgEAAgDADQgEACgBAFIgIAAIACgHQACgEADgCQACgCAEgBQADgBAEAAQAEAAAEABQAEABACACIAEAGQACADAAAFQAAAFgDAEIgGAGIgTATIAdAAIAAAHg");
	this.shape_119.setTransform(28.125,-14);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#858585").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_120.setTransform(24.6,-11.45);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#858585").s().p("AgQAeIAcgzIgfAAIAAgIIAnAAIAAAIIgbAzg");
	this.shape_121.setTransform(21.225,-13.95);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#858585").s().p("AgHAeQgDgBgDgDIgEgGIgDgHIgBgHIgBgGIABgFIABgIIADgGIAEgFIAGgFQAEgBADAAQAEAAAEABIAGAFIAEAFIADAGIABAIIABAFIgBAGIgBAHIgDAHIgEAGQgDADgDABQgEABgEAAQgDAAgEgBgAgGgUIgFAGIgCAHIgBAHIABAIIACAHIAFAHQADABADAAQAEAAADgBIAFgHIACgHIABgIIgBgHIgCgHIgFgGQgDgDgEABQgDgBgDADg");
	this.shape_122.setTransform(15.975,-13.95);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#858585").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_123.setTransform(12.15,-11.45);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#858585").s().p("AACAeIAAgyIgMAMIAAgKIAMgLIAIAAIAAA7g");
	this.shape_124.setTransform(9.15,-13.95);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#858585").s().p("AgHAeQgDgBgDgDIgEgGIgDgHIgBgHIgBgGIABgFIABgIIADgGIAEgFIAGgFQAEgBADAAQAEAAAEABIAGAFIAEAFIADAGIABAIIABAFIgBAGIgBAHIgDAHIgEAGQgDADgDABQgEABgEAAQgDAAgEgBgAgGgUIgFAGIgCAHIgBAHIABAIIACAHIAFAHQADABADAAQAEAAADgBIAFgHIACgHIABgIIgBgHIgCgHIgFgGQgDgDgEABQgDgBgDADg");
	this.shape_125.setTransform(4.825,-13.95);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#858585").s().p("AAMAVIAAgOIgKAAIgKAOIgLAAIANgPQgFgBgDgEQgCgCAAgFIABgFIADgFIAEgDIAHgBIAVAAIAAApgAgGgLQgCACAAADQAAAEACABQACABAEAAIAMAAIAAgNIgMAAQgEAAgCACg");
	this.shape_126.setTransform(205.225,-22.325);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#858585").s().p("AgHAUQgDgBgEgDIgEgHQgBgEAAgFQAAgEABgEIAEgHIAHgEQAEgCAEAAQAHAAAFAEQAFADACAGIgIAAQgBgCgDgCQgDgCgEAAQgCAAgDACIgEADIgCAEIgBAFIABAGIACAFIAEADIAFABQAEAAADgCIAEgEIAIAAQgCAGgFADQgFAEgHAAQgEAAgEgCg");
	this.shape_127.setTransform(200.65,-22.325);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#858585").s().p("AgDAVIAAgiIgQAAIAAgHIAnAAIAAAHIgQAAIAAAig");
	this.shape_128.setTransform(196.025,-22.325);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_129.setTransform(191.15,-22.325);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#858585").s().p("AASAbIAAgMIgiAAIAAAMIgIAAIAAgTIAEAAIADgDIACgEIABgEIAAgFIAAgRIAhAAIAAAhIAGAAIAAATgAgGgIIAAAEIgBAEIgBAEIgCAEIAVAAIAAgaIgRAAg");
	this.shape_130.setTransform(185.6,-21.75);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_131.setTransform(180.325,-22.325);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#858585").s().p("AgSAVIAAgpIAYAAQAGAAAEAEQADADAAAEIgBAGQgBACgDABQADACABACIABAGQAAAEgDADQgDAEgHAAgAgKAOIAPAAIAFgBQAAgBABAAQAAAAAAgBQAAAAABgBQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgPAAgAgKgCIAPAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQgBAAAAgBQAAAAgBgBIgEgBIgPAAg");
	this.shape_132.setTransform(175.325,-22.325);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_133.setTransform(170.125,-22.325);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#858585").s().p("AgUAfIAAg7IAIAAIAAAEIAFgEQAEgCADABQAGgBADACQAEACADADIAEAHQACAEAAAEIgCAIIgEAHQgDACgEACQgDACgGAAQgDAAgEgCIgFgEIAAAYgAgEgVIgFACQgCACAAADQgCACAAAEQAAAEACADIACADIAFADIAEABIAGgBIAEgEIADgDIABgGIgBgFIgDgFIgEgDQgDgBgDAAIgEABg");
	this.shape_134.setTransform(164.95,-21.45);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#858585").s().p("AAMAVIAAgiIgWAAIAAAiIgIAAIAAgpIAlAAIAAApg");
	this.shape_135.setTransform(159.45,-22.325);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#858585").s().p("AAMAVIAAgOIgKAAIgKAOIgLAAIANgPQgFgBgDgEQgCgCAAgFIABgFIADgFIAEgDIAHgBIAVAAIAAApgAgGgLQgCACAAADQAAAEACABQACABAEAAIAMAAIAAgNIgMAAQgEAAgCACg");
	this.shape_136.setTransform(152.075,-22.325);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_137.setTransform(147.25,-22.325);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#858585").s().p("AAPAbIAAgMIglAAIAAgoIAIAAIAAAhIAWAAIAAghIAIAAIAAAhIAHAAIAAATg");
	this.shape_138.setTransform(141.9,-21.75);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#858585").s().p("AAJAVIgTgRIAAARIgIAAIAAgpIAIAAIAAASIATgSIAKAAIgWAUIAWAVg");
	this.shape_139.setTransform(136.9,-22.325);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#858585").s().p("AAWAeIgGgOIgfAAIgGAOIgJAAIAbg7IAHAAIAbA7gAANAIIgNgcIgMAcIAZAAg");
	this.shape_140.setTransform(131.275,-23.25);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#858585").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_141.setTransform(125.15,-20.75);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#858585").s().p("AgHAdQgDgBgDgCIgEgGIgDgGIgBgHIgBgHIABgGIABgGIADgHIAEgGIAGgDQAEgCADAAQAEAAAEACIAGADIAEAGIADAHIABAGIABAGIgBAHIgBAHIgDAGIgEAGQgDACgDABQgEACgEAAQgDAAgEgCgAgGgUIgFAFIgCAIIgBAHIABAIIACAIIAFAGQADACADAAQAEAAADgCIAFgGIACgIIABgIIgBgHIgCgIIgFgFQgDgCgEAAQgDAAgDACg");
	this.shape_142.setTransform(121.275,-23.25);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#858585").s().p("AgHAdQgDgBgDgCIgEgGIgDgGIgBgHIgBgHIABgGIABgGIADgHIAEgGIAGgDQAEgCADAAQAEAAAEACIAGADIAEAGIADAHIABAGIABAGIgBAHIgBAHIgDAGIgEAGQgDACgDABQgEACgEAAQgDAAgEgCgAgGgUIgFAFIgCAIIgBAHIABAIIACAIIAFAGQADACADAAQAEAAADgCIAFgGIACgIIABgIIgBgHIgCgIIgFgFQgDgCgEAAQgDAAgDACg");
	this.shape_143.setTransform(115.625,-23.25);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#858585").s().p("AgTAeIAAgHIAYgWIAFgFQACgDAAgEIgBgEQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgDgCIgFgBQgEAAgDACQgEADgBAFIgIAAIACgHQACgDADgCQACgDAEgBQADgBAEgBQAEABAEABQAEABACADIAEAFQACADAAAEQAAAFgDAFIgGAGIgTATIAdAAIAAAHg");
	this.shape_144.setTransform(110.225,-23.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#858585").s().p("AgHAdQgDgBgDgCIgEgGIgDgGIgBgHIgBgHIABgGIABgGIADgHIAEgGIAGgDQAEgCADAAQAEAAAEACIAGADIAEAGIADAHIABAGIABAGIgBAHIgBAHIgDAGIgEAGQgDACgDABQgEACgEAAQgDAAgEgCgAgGgUIgFAFIgCAIIgBAHIABAIIACAIIAFAGQADACADAAQAEAAADgCIAFgGIACgIIABgIIgBgHIgCgIIgFgFQgDgCgEAAQgDAAgDACg");
	this.shape_145.setTransform(102.825,-23.25);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#858585").s().p("AgIAdQgEgBgDgEQgDgDgCgGQgBgFAAgJIABgLQABgFADgFQADgEAFgDQAEgDAGAAQAOAAAGAOIgJAAQgBgDgDgCQgDgBgEAAIgFABQgDABgCADQgDADgBAEQgBAEAAAFQACgCAEgDQAEgCAEAAQAFABADABQAEACADADQADABABAEQACADAAAEQAAAFgCADIgEAGQgDADgEABQgEACgEAAQgEAAgFgCgAgEAAIgEACIgDAFIgBAEIABAFIADAEQACACACABIAEABIAGgBQAAgBABAAQABAAAAAAQABgBAAAAQAAAAABgBIADgEIABgFIgBgEIgDgFIgEgCIgGAAIgEAAg");
	this.shape_146.setTransform(97.375,-23.25);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#858585").s().p("AgSAVIAAgpIAIAAIAAAOIANAAIAHABIAFADIADAEIABAFIgBAFIgDAFIgFADIgHABgAgKAOIANAAQAEAAACgCQACgCAAgDQAAgEgCgBQgCgCgEAAIgNAAg");
	this.shape_147.setTransform(90.4,-22.325);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#858585").s().p("AgDAVIAAgiIgQAAIAAgHIAnAAIAAAHIgQAAIAAAig");
	this.shape_148.setTransform(85.675,-22.325);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#858585").s().p("AgIAVIgFgCIgEgFQgBgCAAgEQAAgEABgCIAFgDIAGgDIAGAAIANAAQgBgFgDgDQgDgCgGAAQgDAAgDACQgDABgCADIgIAAIADgFIAFgEQACgCAEgBIAFgBIAIABIAGADIAEAFIACAHIAAAaIgHAAIAAgFIgHAEQgDACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAEAAQAGAAADgDQAFgDAAgFIAAgCIgNAAQgFAAgDABg");
	this.shape_149.setTransform(80.9,-22.325);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#858585").s().p("AgdAVIAAgpIAIAAIAAAiIASAAIAAgiIAHAAIAAAiIASAAIAAgiIAIAAIAAApg");
	this.shape_150.setTransform(74.875,-22.325);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#858585").s().p("AARAVIAAgpIAIAAIAAApgAgYAVIAAgpIAIAAIAAAOIAMAAIAGABIAFADIADAEIABAFIgBAFIgDAFIgFADIgGABgAgQAOIAMAAQADAAACgCQACgCAAgDQAAgEgCgBQgCgCgDAAIgMAAg");
	this.shape_151.setTransform(67.95,-22.325);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#858585").s().p("AgSAVIAAgpIAYAAQAGAAAEAEQADADAAAEIgBAGQgBACgDABQADACABACIABAGQAAAEgDADQgDAEgHAAgAgKAOIAPAAIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgPAAgAgKgCIAPAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAAAgBgBQAAAAgBgBIgEgBIgPAAg");
	this.shape_152.setTransform(62.325,-22.325);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_153.setTransform(57.175,-22.325);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#858585").s().p("AgUAfIAAg7IAIAAIAAAEIAGgEQADgCADABQAGgBADACQAEACADADIAEAHQABAEABAEIgCAIIgEAHQgDACgEACQgDACgGAAQgDAAgDgCIgGgEIAAAYgAgEgVIgFACQgCACgBADQgBACAAAEQAAAEABADIADADIAFADIAEABIAFgBIAFgEIADgDIABgGIgBgFIgDgFIgFgDQgCgBgDAAIgEABg");
	this.shape_154.setTransform(52.1,-21.45);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#858585").s().p("AAMAVIAAgiIgWAAIAAAiIgJAAIAAgpIAmAAIAAApg");
	this.shape_155.setTransform(46.6,-22.325);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#858585").s().p("AgDAVIAAgiIgQAAIAAgHIAnAAIAAAHIgQAAIAAAig");
	this.shape_156.setTransform(39.775,-22.325);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_157.setTransform(35.075,-22.325);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#858585").s().p("AAVAVIgRgRIAAARIgHAAIAAgRIgRARIgKAAIAVgVIgVgUIAJAAIASASIAAgSIAHAAIAAASIARgSIAKAAIgVAUIAVAVg");
	this.shape_158.setTransform(29.375,-22.325);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_159.setTransform(23.575,-22.325);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#858585").s().p("AARAVIAAgbIgNAbIgHAAIgNgbIAAAbIgIAAIAAgpIAJAAIAPAhIAQghIAJAAIAAApg");
	this.shape_160.setTransform(17.725,-22.325);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_161.setTransform(9.925,-22.325);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#858585").s().p("AAMAVIAAgSIgXAAIAAASIgIAAIAAgpIAIAAIAAARIAXAAIAAgRIAIAAIAAApg");
	this.shape_162.setTransform(4.7,-22.325);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#858585").s().p("AgSAVIAAgpIAYAAQAGAAAEAEQADADAAAEIgBAGQgBACgDABQADACABACIABAGQAAAEgDADQgDAEgHAAgAgKAOIAPAAIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgPAAgAgKgCIAPAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgEgBIgPAAg");
	this.shape_163.setTransform(216.225,-31.625);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_164.setTransform(211.025,-31.625);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#858585").s().p("AgHAUQgEgBgDgDIgEgHQgBgEAAgFQAAgEABgEIAEgHIAHgEQAEgCAEAAQAHAAAFAEQAFADACAGIgIAAQgBgCgDgCQgDgCgEAAQgCAAgDACIgEADIgCAEIgCAFIACAGIACAFIAEADIAFABQAEAAADgCIAEgEIAIAAQgCAGgFADQgFAEgHAAQgEAAgEgCg");
	this.shape_165.setTransform(205.95,-31.625);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#858585").s().p("AgRAeIAAgHIADAAIADAAIADgBIABgDIACgEIACgEIgTgoIAJAAIANAfIAOgfIAIAAIgTArIgDAIIgDAEQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgGABg");
	this.shape_166.setTransform(201.1,-30.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#858585").s().p("AAMAVIAAgSIgXAAIAAASIgIAAIAAgpIAIAAIAAARIAXAAIAAgRIAIAAIAAApg");
	this.shape_167.setTransform(196.05,-31.625);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_168.setTransform(190.775,-31.625);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#858585").s().p("AgJAdQgDgCgDgEQgDgDgBgFQgCgEABgGIAAgLIADgJQADgEADgCQAEgDAFAAIAHgBQADAAACgCIADgDIAHAAQAAAEgDAEQgDADgGABIgJABIgGACIgDADIgCADIgBAFIAFgFQAEgCAEAAQAFABAEABQAEACADADQADACABAEQACADAAAEQAAAFgCAEQgBADgDADQgEADgEACQgDABgFABQgFgBgEgBgAgEgDIgFADIgDAEIgBAFIABAGIADAFIAFADIAEAAIAGAAIAEgDIADgFIABgGIgBgFIgDgEIgEgDIgGAAIgEAAg");
	this.shape_169.setTransform(185.55,-32.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_170.setTransform(178.1,-31.625);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_171.setTransform(172.7,-31.625);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#858585").s().p("AAPAaIAAgLIglAAIAAgoIAIAAIAAAhIAXAAIAAghIAHAAIAAAhIAHAAIAAASg");
	this.shape_172.setTransform(167.35,-31.05);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#858585").s().p("AAJAVIgTgRIAAARIgIAAIAAgpIAIAAIAAASIATgSIAKAAIgWAUIAWAVg");
	this.shape_173.setTransform(162.35,-31.625);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#858585").s().p("AgIAVIgFgCQgDgCAAgDQgCgCAAgEQAAgEACgCIADgDIAHgDIAGAAIAMAAQAAgFgDgDQgDgCgFAAQgDAAgEACQgDABgCADIgIAAIADgFIAEgEQADgCAEgBIAGgBIAIABIAFADIAFAFIABAHIAAAaIgIAAIAAgFIgGAEQgDACgEAAIgHgBgAgHADQgDACAAADQAAAEADABQACACAEAAQAGAAAEgDQADgDAAgFIAAgCIgMAAQgEAAgDABg");
	this.shape_174.setTransform(157.15,-31.625);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#858585").s().p("AAMAVIgMgPIgMAPIgIAAIAQgVIgQgUIAJAAIALAPIAMgPIAKAAIgRAUIARAVg");
	this.shape_175.setTransform(150.45,-31.625);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#858585").s().p("AgIAVIgFgCQgDgCgBgDQgBgCAAgEQAAgEABgCIAFgDIAFgDIAHAAIANAAQAAgFgEgDQgEgCgFAAQgDAAgDACQgDABgBADIgJAAIADgFIAFgEQACgCADgBIAGgBIAIABIAHADIADAFIACAHIAAAaIgHAAIAAgFIgGAEQgEACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAEAAQAGAAADgDQAEgDABgFIAAgCIgNAAQgFAAgDABg");
	this.shape_176.setTransform(145.5,-31.625);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#858585").s().p("AAJAVIgTgRIAAARIgIAAIAAgpIAIAAIAAASIATgSIAKAAIgWAUIAWAVg");
	this.shape_177.setTransform(141.15,-31.625);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#858585").s().p("AARAVIAAgbIgNAbIgHAAIgNgbIAAAbIgIAAIAAgpIAJAAIAPAhIAQghIAJAAIAAApg");
	this.shape_178.setTransform(135.325,-31.625);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#858585").s().p("AgIAVIgFgCIgEgFQgBgCAAgEQAAgEABgCIAFgDIAGgDIAGAAIANAAQgBgFgDgDQgDgCgGAAQgDAAgDACQgDABgCADIgIAAIADgFIAEgEQADgCAEgBIAFgBIAIABIAGADIAEAFIACAHIAAAaIgHAAIAAgFIgHAEQgDACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAEAAQAGAAADgDQAFgDAAgFIAAgCIgNAAQgFAAgDABg");
	this.shape_179.setTransform(129.5,-31.625);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#858585").s().p("AgUAeIAAg6IAHAAIAAAEIAGgEQAEgCAEAAQAEAAAFACQADACADADIAEAHQABAEAAAFIgBAHIgEAHQgDADgDABQgFACgEAAQgEAAgEgCIgGgDIAAAWgAgEgWIgEAEQgCABgBADQgCADAAAEQAAADACADIADADIAEADIAEABIAGgBIAEgEIACgDIABgFIgBgHIgCgEIgEgDQgDgBgDgBIgEABg");
	this.shape_180.setTransform(124.6,-30.75);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#858585").s().p("AgSAVIAAgpIAYAAQAGAAAEAEQADADAAAEIgBAGQgBACgDABQADACABACIABAGQAAAEgDADQgDAEgHAAgAgKAOIAPAAIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgPAAgAgKgCIAPAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgEgBIgPAAg");
	this.shape_181.setTransform(117.325,-31.625);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#858585").s().p("AAMAVIgMgPIgMAPIgJAAIARgVIgRgUIAKAAIALAPIAMgPIAKAAIgSAUIASAVg");
	this.shape_182.setTransform(110.35,-31.625);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#858585").s().p("AARAVIAAgpIAIAAIAAApgAgYAVIAAgpIAHAAIAAAOIANAAIAGABIAFADIACAEIACAFIgCAFIgCAFIgFADIgGABgAgRAOIANAAQAEAAAAgCQADgCAAgDQAAgEgDgBQAAgCgEAAIgNAAg");
	this.shape_183.setTransform(104.75,-31.625);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#858585").s().p("AAMAVIAAgSIgXAAIAAASIgIAAIAAgpIAIAAIAAARIAXAAIAAgRIAIAAIAAApg");
	this.shape_184.setTransform(98.8,-31.625);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#858585").s().p("AAMAVIAAgSIgXAAIAAASIgIAAIAAgpIAIAAIAAARIAXAAIAAgRIAIAAIAAApg");
	this.shape_185.setTransform(93.4,-31.625);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_186.setTransform(88.175,-31.625);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#858585").s().p("AANAVIAAgiIgQAAIAAALIgBAHQAAAEgBAEQgCADgDADQgDACgFAAIgCAAIAAgHIABAAQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgEIABgFIAAgFIAAgSIAgAAIAAApg");
	this.shape_187.setTransform(82.825,-31.625);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#858585").s().p("AgGAUQgEgBgEgDIgEgHQgCgEAAgFQAAgEACgEIAEgHIAIgEQADgCAEAAQAHAAAFAEQAFADACAGIgIAAQgCgCgCgCQgDgCgEAAQgCAAgDACIgEADIgDAEIgBAFIABAGIADAFIAEADIAFABQAEAAADgCIAEgEIAIAAQgCAGgFADQgFAEgHAAQgEAAgDgCg");
	this.shape_188.setTransform(78.05,-31.625);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_189.setTransform(72.85,-31.625);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#858585").s().p("AALAVIAAgQIgCABIgDAAIgEABIgCAAQgSAAAAgNIAAgOIAHAAIAAANQAAAEADACQACABAGAAIAFAAIAGgBIAAgTIAIAAIAAApg");
	this.shape_190.setTransform(67.575,-31.625);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#858585").s().p("AgIAVIgFgCQgCgCgBgDQgCgCAAgEQAAgEACgCIAEgDIAGgDIAGAAIANAAQgBgFgDgDQgDgCgFAAQgEAAgDACQgDABgCADIgIAAIADgFIAEgEQADgCAEgBIAGgBIAHABIAGADIAFAFIABAHIAAAaIgHAAIAAgFIgHAEQgDACgEAAIgHgBgAgHADQgDACAAADQAAAEADABQACACAEAAQAGAAADgDQAFgDAAgFIAAgCIgNAAQgEAAgDABg");
	this.shape_191.setTransform(62.55,-31.625);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#858585").s().p("AAMAVIAAgSIgXAAIAAASIgIAAIAAgpIAIAAIAAARIAXAAIAAgRIAIAAIAAApg");
	this.shape_192.setTransform(57.5,-31.625);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_193.setTransform(50.175,-31.625);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#858585").s().p("AgSAVIAAgpIAYAAQAGAAAEAEQADADAAAEIgBAGQgBACgDABQADACABACIABAGQAAAEgDADQgDAEgHAAgAgKAOIAPAAIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgPAAgAgKgCIAPAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgEgBIgPAAg");
	this.shape_194.setTransform(45.175,-31.625);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#858585").s().p("AgDAVIAAgiIgQAAIAAgHIAnAAIAAAHIgQAAIAAAig");
	this.shape_195.setTransform(40.425,-31.625);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#858585").s().p("AgHAUQgEgBgCgDIgFgHQgBgEAAgFQAAgEABgEIAFgHIAGgEQAFgCADAAQAHAAAFAEQAFADADAGIgJAAQgCgCgDgCQgCgCgEAAQgCAAgCACIgFADIgDAEIAAAFIAAAGIADAFIAFADIAEABQAEAAACgCIAFgEIAJAAQgDAGgFADQgFAEgHAAQgDAAgFgCg");
	this.shape_196.setTransform(35.8,-31.625);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_197.setTransform(30.775,-31.625);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#858585").s().p("AALAVIAAgQIgCABIgDAAIgEABIgCAAQgSAAAAgNIAAgOIAHAAIAAANQAAAEADACQACABAGAAIAFAAIAGgBIAAgTIAIAAIAAApg");
	this.shape_198.setTransform(25.675,-31.625);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_199.setTransform(20.55,-31.625);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#858585").s().p("AANAVIAAgiIgQAAIAAALIgBAHQAAAEgBAEQgCADgDADQgDACgFAAIgCAAIAAgHIABAAQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgEIABgFIAAgFIAAgSIAgAAIAAApg");
	this.shape_200.setTransform(15.025,-31.625);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_201.setTransform(10.125,-31.625);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#858585").s().p("AANAeIgcgaIAAAaIgHAAIAAg7IAHAAIAAAaIAcgaIALAAIggAdIAgAeg");
	this.shape_202.setTransform(5.1,-32.55);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#858585").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_203.setTransform(216.15,-39.35);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#858585").s().p("AAMAfIAAgeIgXAeIgIAAIAAgoIAIAAIAAAdIAXgdIAIAAIAAAogAgFgQIgGgEIgCgEIgCgGIAGAAQABADADADQACACADAAQAEAAACgCQADgDABgDIAGAAIgCAGIgDAEIgFAEIgGABIgFgBg");
	this.shape_204.setTransform(212.4,-41.975);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_205.setTransform(207.175,-40.925);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#858585").s().p("AANAVIAAgiIgQAAIAAALIgBAHQAAAEgBAEQgCADgDADQgDACgFAAIgCAAIAAgHIABAAQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgEIABgFIAAgFIAAgSIAgAAIAAApg");
	this.shape_206.setTransform(201.825,-40.925);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#858585").s().p("AgJAdQgEgCgCgDQgDgEgBgEQgCgFABgFIAAgMIADgJQACgEAEgCQAEgCAFgBIAHgBQAEAAABgCIADgCIAIAAQgBAEgDADQgDADgGABIgKABIgFABIgEAEIgBADIgBAFIAFgFQAEgBAEAAQAFgBAEACQAEACACACQADAEACACQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgFABQgEABgEAAQgEAAgFgBgAgEgCIgFACIgDAEIgBAFIABAGIADAEIAFAEIAEABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgCIgGgBIgEABg");
	this.shape_207.setTransform(196.9,-41.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#858585").s().p("AgRAeIAAgHIADAAIADAAIACgCIACgCIACgEIACgEIgSgoIAJAAIAMAeIAOgeIAJAAIgUArIgDAHIgDAFQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgFABg");
	this.shape_208.setTransform(191.85,-40);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#858585").s().p("AgVAfIAAg8IAIAAIAAAFIAHgEQADgBAEgBQAEABAFABQAEACACADIAEAHQACAEgBAFIgBAHIgEAGQgCADgEADQgFABgEAAQgEAAgDgBIgHgFIAAAYgAgEgWIgEADQgCACgCADQgBADAAAEQAAADABACIAEAFIAEACIAEABIAFgBIAFgDIACgEIABgFIgBgGIgCgFIgFgDQgCgCgDABIgEAAg");
	this.shape_209.setTransform(186.95,-40.05);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#858585").s().p("AgHAeQgDgBgDgDIgEgGIgDgHIgBgHIgBgGIABgFIABgIIADgGIAEgFIAGgFQAEgBADAAQAEAAAEABIAGAFIAEAFIADAGIABAIIABAFIgBAGIgBAHIgDAHIgEAGQgDADgDABQgEABgEAAQgDAAgEgBgAgGgUIgFAGIgCAHIgBAHIABAIIACAHIAFAHQADABADAAQAEAAADgBIAFgHIACgHIABgIIgBgHIgCgHIgFgGQgDgDgEABQgDgBgDADg");
	this.shape_210.setTransform(179.225,-41.85);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#858585").s().p("AgHAeQgDgBgDgDIgEgGIgDgHIgBgHIgBgGIABgFIABgIIADgGIAEgFIAGgFQAEgBADAAQAEAAAEABIAGAFIAEAFIADAGIABAIIABAFIgBAGIgBAHIgDAHIgEAGQgDADgDABQgEABgEAAQgDAAgEgBgAgGgUIgFAGIgCAHIgBAHIABAIIACAHIAFAHQADABADAAQAEAAADgBIAFgHIACgHIABgIIgBgHIgCgHIgFgGQgDgDgEABQgDgBgDADg");
	this.shape_211.setTransform(173.575,-41.85);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#858585").s().p("AgHAeQgDgBgDgDIgEgGIgDgHIgBgHIgBgGIABgFIABgIIADgGIAEgFIAGgFQAEgBADAAQAEAAAEABIAGAFIAEAFIADAGIABAIIABAFIgBAGIgBAHIgDAHIgEAGQgDADgDABQgEABgEAAQgDAAgEgBgAgGgUIgFAGIgCAHIgBAHIABAIIACAHIAFAHQADABADAAQAEAAADgBIAFgHIACgHIABgIIgBgHIgCgHIgFgGQgDgDgEABQgDgBgDADg");
	this.shape_212.setTransform(167.925,-41.85);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#858585").s().p("AADAeIAAgyIgNAMIAAgKIAMgLIAJAAIAAA7g");
	this.shape_213.setTransform(161.1,-41.85);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_214.setTransform(155.025,-40.925);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_215.setTransform(149.975,-40.925);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#858585").s().p("AANAVIAAgiIgQAAIAAALIgBAHQAAAEgBAEQgCADgDADQgDACgFAAIgCAAIAAgHIABAAQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgEIABgFIAAgFIAAgSIAgAAIAAApg");
	this.shape_216.setTransform(144.625,-40.925);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_217.setTransform(139.725,-40.925);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#858585").s().p("AgIAdQgEgCgDgDQgDgEgBgEQgBgFAAgFIAAgMIADgJQADgEADgCQADgCAGgBIAHgBQADAAACgCIACgCIAIAAQAAAEgDADQgCADgHABIgJABIgGABIgDAEIgDADIAAAFIAFgFQAEgBAFAAQAEgBAEACQADACAEACQADAEABACQABAEAAAEQAAAFgBAEQgBAEgDADQgEADgDABQgEABgFAAQgFAAgDgBgAgFgCIgEACIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgCIgGgBIgFABg");
	this.shape_218.setTransform(134.5,-41.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#858585").s().p("AgRAeIAAgHIADAAIADAAIACgCIACgCIACgEIACgEIgSgoIAJAAIAMAeIAOgeIAJAAIgUArIgDAHIgDAFQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgFABg");
	this.shape_219.setTransform(127.4,-40);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#858585").s().p("AARAVIAAgbIgNAbIgHAAIgNgbIAAAbIgIAAIAAgpIAJAAIAPAhIAQghIAJAAIAAApg");
	this.shape_220.setTransform(121.825,-40.925);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#858585").s().p("AARAVIAAgbIgNAbIgHAAIgNgbIAAAbIgIAAIAAgpIAJAAIAPAhIAQghIAJAAIAAApg");
	this.shape_221.setTransform(115.375,-40.925);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#858585").s().p("AgQAeIAAgHIACAAIADAAIACgCIACgCIACgEIACgEIgTgoIAJAAIAOAeIANgeIAIAAIgTArIgDAHIgDAFQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgGABg");
	this.shape_222.setTransform(109.8,-40);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#858585").s().p("AgHAUQgDgBgDgDIgFgHQgCgEABgFQgBgEACgEIAFgHIAGgEQAEgCAEAAQAHAAAFAEQAGADABAGIgIAAQgCgCgCgCQgDgCgEAAQgCAAgCACIgFADIgCAEIgBAFIABAGIACAFIAFADIAEABQAEAAADgCIAEgEIAIAAQgBAGgGADQgFAEgHAAQgEAAgEgCg");
	this.shape_223.setTransform(105,-40.925);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#858585").s().p("AgIAVIgFgCQgDgCAAgDQgCgCAAgEQAAgEACgCIADgDIAHgDIAGAAIAMAAQAAgFgDgDQgEgCgEAAQgEAAgDACQgDABgCADIgIAAIADgFIAEgEQADgCADgBIAHgBIAIABIAFADIAFAFIABAHIAAAaIgIAAIAAgFIgGAEQgDACgEAAIgHgBgAgHADQgDACAAADQAAAEADABQACACAFAAQAFAAAEgDQADgDAAgFIAAgCIgMAAQgEAAgDABg");
	this.shape_224.setTransform(97.85,-40.925);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#858585").s().p("AAMAVIAAgSIgXAAIAAASIgIAAIAAgpIAIAAIAAARIAXAAIAAgRIAIAAIAAApg");
	this.shape_225.setTransform(92.8,-40.925);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#858585").s().p("AASAVIAAgpIAIAAIAAApgAgYAVIAAgpIAIAAIAAAOIAMAAIAGABIAFADIADAEIABAFIgBAFIgDAFIgFADIgGABgAgQAOIAMAAQAEAAABgCQACgCAAgDQAAgEgCgBQgBgCgEAAIgMAAg");
	this.shape_226.setTransform(84.8,-40.925);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#858585").s().p("AgUAfIAAg8IAIAAIAAAFIAFgEQAEgBADgBQAGABADABQAEACADADIAEAHQACAEAAAFIgCAHIgEAGQgDADgEADQgDABgGAAQgDAAgEgBIgFgFIAAAYgAgEgWIgFADQgCACAAADQgCADAAAEQAAADACACIACAFIAFACIAEABIAGgBIAEgDIADgEIABgFIgBgGIgDgFIgEgDQgDgCgDABIgEAAg");
	this.shape_227.setTransform(79,-40.05);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#858585").s().p("AgIAVIgFgCQgDgCAAgDQgCgCAAgEQAAgEACgCIADgDIAHgDIAGAAIAMAAQAAgFgDgDQgEgCgEAAQgEAAgDACQgDABgCADIgIAAIADgFIAEgEQADgCAEgBIAGgBIAIABIAFADIAFAFIABAHIAAAaIgIAAIAAgFIgGAEQgDACgEAAIgHgBgAgHADQgDACAAADQAAAEADABQACACAFAAQAFAAAEgDQADgDAAgFIAAgCIgMAAQgEAAgDABg");
	this.shape_228.setTransform(73.55,-40.925);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#858585").s().p("AgSAVIAAgpIAYAAQAGAAAEAEQADADAAAEIgBAGQgBACgDABQADACABACIABAGQAAAEgDADQgDAEgHAAgAgKAOIAPAAIAFgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgPAAgAgKgCIAPAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBIgEgBIgPAAg");
	this.shape_229.setTransform(68.825,-40.925);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_230.setTransform(63.625,-40.925);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#858585").s().p("AgDAeIAAgzIgVAAIAAgIIAxAAIAAAIIgVAAIAAAzg");
	this.shape_231.setTransform(58.3,-41.85);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_232.setTransform(50.85,-40.925);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_233.setTransform(45.45,-40.925);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#858585").s().p("AgUAfIAAg8IAIAAIAAAFIAFgEQAEgBADgBQAGABADABQAFACACADIAEAHQACAEAAAFIgCAHIgEAGQgCADgFADQgDABgGAAQgDAAgEgBIgFgFIAAAYgAgEgWIgFADQgBACgBADQgCADAAAEQAAADACACIACAFIAFACIAEABIAGgBIAEgDIADgEIABgFIgBgGIgDgFIgEgDQgDgCgDABIgEAAg");
	this.shape_234.setTransform(40.2,-40.05);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_235.setTransform(34.775,-40.925);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#858585").s().p("AgPAVIAAgpIAfAAIAAAHIgXAAIAAAig");
	this.shape_236.setTransform(30.275,-40.925);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_237.setTransform(25.425,-40.925);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#858585").s().p("AgDAVIAAgiIgQAAIAAgHIAnAAIAAAHIgQAAIAAAig");
	this.shape_238.setTransform(20.775,-40.925);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#858585").s().p("AgIAVIgFgCIgEgFQgBgCAAgEQAAgEABgCIAFgDIAFgDIAHAAIANAAQAAgFgEgDQgDgCgGAAQgDAAgDACQgDABgCADIgIAAIADgFIAFgEQACgCAEgBIAFgBIAIABIAHADIADAFIACAHIAAAaIgHAAIAAgFIgHAEQgDACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAEAAQAGAAADgDQAFgDAAgFIAAgCIgNAAQgEAAgEABg");
	this.shape_239.setTransform(16,-40.925);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#858585").s().p("AAJAVIgTgRIAAARIgIAAIAAgpIAIAAIAAASIATgSIAKAAIgWAUIAWAVg");
	this.shape_240.setTransform(11.65,-40.925);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#858585").s().p("AgSAVIAAgpIAYAAQAGAAAEAEQADADAAAEIgBAGQgBACgDABQADACABACIABAGQAAAEgDADQgDAEgHAAgAgKAOIAPAAIAFgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgPAAgAgKgCIAPAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBgBIgEgBIgPAAg");
	this.shape_241.setTransform(4.625,-40.925);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#858585").s().p("AgSAVIAAgpIAYAAQAGAAAEAEQADADAAAEIgBAGQgBACgDABQADACABACIABAGQAAAEgDADQgDAEgHAAgAgKAOIAPAAIAFgBQAAgBABAAQAAAAAAgBQAAAAABgBQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgPAAgAgKgCIAPAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAAAgBgBQAAAAgBgBIgEgBIgPAAg");
	this.shape_242.setTransform(209.175,-50.225);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_243.setTransform(203.975,-50.225);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#858585").s().p("AgVAfIAAg7IAJAAIAAAEIAGgEQADgCADABQAGgBADACQAEACADADIAEAHQABAEABAEIgCAIIgEAHQgDACgEACQgDACgGAAQgDAAgDgCIgGgEIAAAYgAgEgVIgFACQgCACAAADQgCACAAAEQAAAEACADIACADIAFADIAEABIAFgBIAFgEIADgDIABgGIgBgFIgDgFIgFgDQgCgBgDAAIgEABg");
	this.shape_244.setTransform(198.8,-49.35);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#858585").s().p("AgDAVIAAgiIgQAAIAAgHIAnAAIAAAHIgQAAIAAAig");
	this.shape_245.setTransform(193.825,-50.225);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_246.setTransform(189.075,-50.225);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#858585").s().p("AARAVIAAgbIgNAbIgHAAIgNgbIAAAbIgIAAIAAgpIAJAAIAPAhIAQghIAJAAIAAApg");
	this.shape_247.setTransform(183.225,-50.225);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#858585").s().p("AgHAUQgDgBgDgDIgFgHQgBgEgBgFQABgEABgEIAFgHIAGgEQAFgCADAAQAHAAAFAEQAFADADAGIgJAAQgCgCgDgCQgCgCgEAAQgCAAgCACIgFADIgDAEIAAAFIAAAGIADAFIAFADIAEABQAEAAACgCIAFgEIAJAAQgDAGgFADQgFAEgHAAQgDAAgFgCg");
	this.shape_248.setTransform(177.55,-50.225);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_249.setTransform(172.475,-50.225);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#858585").s().p("AgVAfIAAg7IAJAAIAAAEIAGgEQADgCADABQAGgBADACQAEACADADIAEAHQABAEABAEIgCAIIgEAHQgDACgEACQgDACgGAAQgDAAgDgCIgGgEIAAAYgAgEgVIgFACQgCACAAADQgCACAAAEQAAAEACADIACADIAFADIAEABIAFgBIAFgEIADgDIABgGIgBgFIgDgFIgFgDQgCgBgDAAIgEABg");
	this.shape_250.setTransform(167.3,-49.35);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#858585").s().p("AAMAVIAAgiIgXAAIAAAiIgIAAIAAgpIAmAAIAAApg");
	this.shape_251.setTransform(161.8,-50.225);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#858585").s().p("AAMAVIgMgPIgMAPIgJAAIARgVIgRgUIAKAAIALAPIAMgPIAKAAIgSAUIASAVg");
	this.shape_252.setTransform(154.8,-50.225);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#858585").s().p("AARAVIAAgpIAIAAIAAApgAgZAVIAAgpIAIAAIAAAOIANAAIAGABIAFADIACAEIABAFIgBAFIgCAFIgFADIgGABgAgRAOIANAAQADAAABgCQADgCAAgDQAAgEgDgBQgBgCgDAAIgNAAg");
	this.shape_253.setTransform(149.2,-50.225);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#858585").s().p("AgSAVIAAgpIAYAAQAGAAAEAEQADADAAAEIgBAGQgBACgDABQADACABACIABAGQAAAEgDADQgDAEgHAAgAgKAOIAPAAIAFgBQAAgBABAAQAAAAAAgBQAAAAABgBQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgPAAgAgKgCIAPAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAAAgBgBQAAAAgBgBIgEgBIgPAAg");
	this.shape_254.setTransform(143.575,-50.225);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_255.setTransform(138.425,-50.225);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#858585").s().p("AANAVIAAgiIgQAAIAAALIgBAHQAAAEgBAEQgCADgDADQgDACgFAAIgCAAIAAgHIABAAQABAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIACgEIABgFIAAgFIAAgSIAgAAIAAApg");
	this.shape_256.setTransform(133.075,-50.225);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_257.setTransform(128.225,-50.225);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#858585").s().p("AAPAbIAAgMIglAAIAAgoIAIAAIAAAhIAXAAIAAghIAHAAIAAAhIAHAAIAAATg");
	this.shape_258.setTransform(123.05,-49.65);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#858585").s().p("AgQAeIAAgHIACAAIADgBIACgBIACgCIACgEIACgEIgSgoIAIAAIAOAfIANgfIAJAAIgUAqIgDAIIgDAGQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgGABg");
	this.shape_259.setTransform(115.65,-49.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#858585").s().p("AgDAVIAAgiIgQAAIAAgHIAnAAIAAAHIgQAAIAAAig");
	this.shape_260.setTransform(111.175,-50.225);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#858585").s().p("AgIAVIgFgCQgDgCAAgDQgCgCAAgEQAAgEACgCIADgDIAHgDIAGAAIAMAAQAAgFgDgDQgEgCgEAAQgEAAgDACQgDABgCADIgIAAIADgFIAEgEQADgCADgBIAHgBIAIABIAFADIAFAFIABAHIAAAaIgIAAIAAgFIgGAEQgDACgEAAIgHgBgAgHADQgDACAAADQAAAEADABQACACAFAAQAFAAAEgDQADgDAAgFIAAgCIgMAAQgEAAgDABg");
	this.shape_261.setTransform(106.4,-50.225);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#858585").s().p("AANAVIAAgiIgQAAIAAALIgBAHQAAAEgBAEQgCADgDADQgDACgFAAIgCAAIAAgHIABAAQABAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIACgEIABgFIAAgFIAAgSIAgAAIAAApg");
	this.shape_262.setTransform(101.225,-50.225);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#858585").s().p("AAMAVIAAgiIgWAAIAAAiIgIAAIAAgpIAlAAIAAApg");
	this.shape_263.setTransform(96.25,-50.225);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_264.setTransform(91.025,-50.225);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#858585").s().p("AgIAVIgFgCIgEgFQgBgCAAgEQAAgEABgCIAFgDIAFgDIAHAAIAMAAQAAgFgDgDQgEgCgFAAQgCAAgEACQgDABgBADIgJAAIADgFIAFgEQACgCADgBIAGgBIAIABIAHADIADAFIACAHIAAAaIgIAAIAAgFIgFAEQgEACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAFAAQAFAAADgDQAEgDAAgFIAAgCIgMAAQgFAAgDABg");
	this.shape_265.setTransform(83.75,-50.225);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#858585").s().p("AAMAVIAAgSIgXAAIAAASIgIAAIAAgpIAIAAIAAARIAXAAIAAgRIAIAAIAAApg");
	this.shape_266.setTransform(78.7,-50.225);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#858585").s().p("AgIAVIgFgCIgEgFQgBgCAAgEQAAgEABgCIAFgDIAFgDIAHAAIANAAQAAgFgEgDQgDgCgGAAQgDAAgDACQgDABgCADIgIAAIADgFIAFgEQACgCAEgBIAFgBIAIABIAHADIADAFIACAHIAAAaIgHAAIAAgFIgGAEQgEACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAEAAQAGAAADgDQAFgDAAgFIAAgCIgNAAQgEAAgEABg");
	this.shape_267.setTransform(71.35,-50.225);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#858585").s().p("AgDAnIAAgSIgEAAQgFAAgFgCQgEgBgCgDQgDgDgCgEQgBgDAAgFIABgHQACgEADgDQADgDAEgBQAEgCAFAAIAEAAIAAgSIAHAAIAAASIAEAAIAJACQAEABADADIAFAHIABAHQAAAFgBADQgCAEgDADQgDADgEABQgEACgFAAIgEAAIAAASgAAEAOIAEAAIAGgBQADgBABgCIAEgEIAAgGIgBgFIgDgEIgEgDIgHgBIgDAAgAgNgMIgFADIgCAEIgBAFIABAGIACAEQACACADABIAGABIAEAAIAAgbIgEAAIgGABg");
	this.shape_268.setTransform(65.6,-50.225);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_269.setTransform(59.45,-50.225);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#858585").s().p("AgVAfIAAg7IAIAAIAAAEIAHgEQADgCAEABQAEgBAFACQAEACACADIAEAHQACAEgBAEIgBAIIgEAHQgCACgEACQgFACgEAAQgEAAgDgCIgHgEIAAAYgAgEgVIgEACQgCACgCADQgBACAAAEQAAAEABADIAEADIAEADIAEABIAFgBIAFgEIACgDIABgGIgBgFIgCgFIgFgDQgCgBgDAAIgEABg");
	this.shape_270.setTransform(54.2,-49.35);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#858585").s().p("AgIAVIgFgCIgEgFQgBgCAAgEQAAgEABgCIAFgDIAFgDIAHAAIANAAQAAgFgEgDQgEgCgFAAQgDAAgDACQgDABgBADIgJAAIADgFIAFgEQACgCADgBIAGgBIAIABIAHADIADAFIACAHIAAAaIgHAAIAAgFIgGAEQgEACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAEAAQAGAAADgDQAEgDABgFIAAgCIgNAAQgFAAgDABg");
	this.shape_271.setTransform(48.75,-50.225);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#858585").s().p("AgDAVIAAgiIgQAAIAAgHIAnAAIAAAHIgQAAIAAAig");
	this.shape_272.setTransform(44.275,-50.225);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#858585").s().p("AAMAVIgMgPIgMAPIgIAAIAQgVIgQgUIAJAAIALAPIAMgPIAJAAIgRAUIARAVg");
	this.shape_273.setTransform(37.75,-50.225);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#858585").s().p("AgIAVIgFgCIgEgFQgBgCAAgEQAAgEABgCIAEgDIAGgDIAHAAIAMAAQABgFgEgDQgEgCgFAAQgCAAgEACQgDABgBADIgJAAIADgFIAFgEQACgCADgBIAGgBIAJABIAGADIADAFIACAHIAAAaIgIAAIAAgFIgFAEQgEACgEAAIgHgBgAgHADQgDACAAADQAAAEADABQACACAFAAQAFAAAEgDQADgDAAgFIAAgCIgMAAQgFAAgCABg");
	this.shape_274.setTransform(32.8,-50.225);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#858585").s().p("AAJAVIgTgRIAAARIgIAAIAAgpIAIAAIAAASIATgSIAKAAIgWAUIAWAVg");
	this.shape_275.setTransform(28.45,-50.225);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#858585").s().p("AARAVIAAgbIgNAbIgHAAIgNgbIAAAbIgIAAIAAgpIAJAAIAPAhIAQghIAJAAIAAApg");
	this.shape_276.setTransform(22.625,-50.225);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#858585").s().p("AgIAVIgFgCIgEgFQgBgCAAgEQAAgEABgCIAFgDIAFgDIAHAAIANAAQAAgFgEgDQgEgCgFAAQgDAAgDACQgDABgBADIgJAAIADgFIAFgEQACgCADgBIAGgBIAIABIAHADIADAFIACAHIAAAaIgHAAIAAgFIgGAEQgEACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAEAAQAGAAADgDQAEgDABgFIAAgCIgNAAQgFAAgDABg");
	this.shape_277.setTransform(16.8,-50.225);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#858585").s().p("AgVAfIAAg7IAIAAIAAAEIAHgEQADgCAEABQAEgBAFACQAEACACADIAEAHQACAEgBAEIgBAIIgEAHQgCACgEACQgFACgEAAQgEAAgDgCIgHgEIAAAYgAgEgVIgEACQgCACgCADQgBACAAAEQAAAEABADIAEADIAEADIAEABIAFgBIAFgEIACgDIABgGIgBgFIgCgFIgFgDQgCgBgDAAIgEABg");
	this.shape_278.setTransform(11.9,-49.35);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#858585").s().p("AgSAVIAAgpIAYAAQAGAAAEAEQADADAAAEIgBAGQgBACgDABQADACABACIABAGQAAAEgDADQgDAEgHAAgAgKAOIAPAAIAFgBQAAgBABAAQAAAAAAgBQAAAAABgBQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgPAAgAgKgCIAPAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAAAgBgBQAAAAgBgBIgEgBIgPAAg");
	this.shape_279.setTransform(4.625,-50.225);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_280.setTransform(214.725,-59.525);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#858585").s().p("AgPAVIAAgpIAfAAIAAAHIgXAAIAAAig");
	this.shape_281.setTransform(210.225,-59.525);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_282.setTransform(205.325,-59.525);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#858585").s().p("AAMAVIAAgSIgXAAIAAASIgIAAIAAgpIAIAAIAAARIAXAAIAAgRIAIAAIAAApg");
	this.shape_283.setTransform(200,-59.525);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#858585").s().p("AAMAVIAAgSIgXAAIAAASIgIAAIAAgpIAIAAIAAARIAXAAIAAgRIAIAAIAAApg");
	this.shape_284.setTransform(194.6,-59.525);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_285.setTransform(189.375,-59.525);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#858585").s().p("AgGAUQgFgBgCgDIgFgHQgBgEgBgFQABgEABgEIAFgHIAHgEQAEgCADAAQAHAAAFAEQAGADACAGIgJAAQgCgCgDgCQgCgCgEAAQgCAAgCACIgFADIgDAEIgBAFIABAGIADAFIAFADIAEABQAEAAACgCIAFgEIAJAAQgCAGgGADQgFAEgHAAQgDAAgEgCg");
	this.shape_286.setTransform(184.4,-59.525);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_287.setTransform(179.375,-59.525);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#858585").s().p("AAMAVIAAgSIgXAAIAAASIgIAAIAAgpIAIAAIAAARIAXAAIAAgRIAIAAIAAApg");
	this.shape_288.setTransform(174.15,-59.525);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#858585").s().p("AgSAVIAAgpIAYAAQAGAAAEAEQADADAAAEIgBAGQgBACgDABQADACABACIABAGQAAAEgDADQgDAEgHAAgAgKAOIAPAAIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgPAAgAgKgCIAPAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgEgBIgPAAg");
	this.shape_289.setTransform(169.075,-59.525);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#858585").s().p("AgFAKIAFgKIgDAAIAAgJIAJAAIAAAKIgGAJg");
	this.shape_290.setTransform(163.325,-57.425);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#858585").s().p("AgIAVIgFgCQgCgCgBgDQgCgCAAgEQAAgEACgCIADgDIAHgDIAGAAIANAAQgBgFgDgDQgDgCgFAAQgEAAgDACQgDABgCADIgIAAIADgFIAEgEQADgCAEgBIAGgBIAHABIAGADIAFAFIABAHIAAAaIgHAAIAAgFIgHAEQgDACgEAAIgHgBgAgHADQgDACAAADQAAAEADABQACACAEAAQAGAAADgDQAFgDAAgFIAAgCIgNAAQgEAAgDABg");
	this.shape_291.setTransform(159.75,-59.525);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#858585").s().p("AgHAUQgDgBgDgDIgFgHQgCgEABgFQgBgEACgEIAFgHIAGgEQAEgCAEAAQAHAAAFAEQAGADABAGIgIAAQgCgCgDgCQgCgCgEAAQgCAAgCACIgFADIgCAEIgBAFIABAGIACAFIAFADIAEABQAEAAACgCIAFgEIAIAAQgBAGgGADQgFAEgHAAQgEAAgEgCg");
	this.shape_292.setTransform(154.95,-59.525);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#858585").s().p("AAMAVIAAgSIgXAAIAAASIgIAAIAAgpIAIAAIAAARIAXAAIAAgRIAIAAIAAApg");
	this.shape_293.setTransform(149.75,-59.525);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#858585").s().p("AgIAVIgFgCQgCgCgBgDQgCgCAAgEQAAgEACgCIADgDIAHgDIAGAAIANAAQgBgFgDgDQgDgCgFAAQgEAAgDACQgDABgCADIgIAAIADgFIAEgEQADgCAEgBIAGgBIAHABIAGADIAFAFIABAHIAAAaIgHAAIAAgFIgHAEQgDACgEAAIgHgBgAgHADQgDACAAADQAAAEADABQACACAEAAQAGAAADgDQAFgDAAgFIAAgCIgNAAQgEAAgDABg");
	this.shape_294.setTransform(144.45,-59.525);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#858585").s().p("AgSAVIAAgpIAYAAQAGAAAEAEQADADAAAEIgBAGQgBACgDABQADACABACIABAGQAAAEgDADQgDAEgHAAgAgKAOIAPAAIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgPAAgAgKgCIAPAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgEgBIgPAAg");
	this.shape_295.setTransform(139.725,-59.525);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#858585").s().p("AgIAVIgFgCQgCgCgCgDQgBgCAAgEQAAgEABgCIAEgDIAGgDIAHAAIAMAAQABgFgEgDQgEgCgEAAQgDAAgEACQgDABgBADIgJAAIADgFIAFgEQACgCADgBIAHgBIAIABIAGADIADAFIACAHIAAAaIgIAAIAAgFIgFAEQgEACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAFAAQAFAAAEgDQADgDAAgFIAAgCIgMAAQgFAAgDABg");
	this.shape_296.setTransform(134.5,-59.525);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#858585").s().p("AgIAVIgFgCQgDgCgBgDQgBgCAAgEQAAgEABgCIAFgDIAFgDIAHAAIANAAQAAgFgEgDQgEgCgFAAQgDAAgDACQgDABgBADIgJAAIADgFIAFgEQACgCADgBIAGgBIAIABIAHADIADAFIACAHIAAAaIgHAAIAAgFIgGAEQgEACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAEAAQAGAAADgDQAEgDABgFIAAgCIgNAAQgFAAgDABg");
	this.shape_297.setTransform(127.5,-59.525);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#858585").s().p("AgVAeIAAg6IAIAAIAAAEIAHgEQADgCAEAAQAEAAAFACQAEACACADIAEAHQACAEgBAFIgBAHIgEAHQgCADgEABQgFACgEAAQgEAAgDgCIgHgDIAAAWgAgEgWIgEAEQgCABgCADQgBADAAAEQAAADABADIAEADIAEADIAEABIAFgBIAFgEIACgDIABgFIgBgHIgCgEIgFgDQgCgBgDgBIgEABg");
	this.shape_298.setTransform(122.6,-58.65);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_299.setTransform(117.225,-59.525);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#858585").s().p("AARAVIAAgbIgNAbIgHAAIgNgbIAAAbIgIAAIAAgpIAJAAIAPAhIAQghIAJAAIAAApg");
	this.shape_300.setTransform(111.475,-59.525);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#858585").s().p("AgGAVIgGgDIgEgEIgDgFIAJAAQABADADABQADACAEAAIAEgBIAEgBIACgCIABgDQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQgCgCgDAAIgJAAIAAgFIAJAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgDgDgCQgDgCgFAAQgDAAgDACQgDABgCADIgIAAIACgFIAEgEIAGgDIAHgBIAGABIAGACIAFAEQABADAAADQAAAEgBACIgEACIACABIACACIABADIABADQAAADgCACIgEAEIgGADIgHABIgHgBg");
	this.shape_301.setTransform(105.825,-59.525);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#858585").s().p("AgIAVIgFgCQgCgCgCgDQgBgCAAgEQAAgEABgCIAFgDIAFgDIAHAAIAMAAQAAgFgDgDQgEgCgFAAQgCAAgEACQgDABgBADIgJAAIADgFIAFgEQACgCADgBIAGgBIAIABIAHADIADAFIACAHIAAAaIgIAAIAAgFIgFAEQgEACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAFAAQAFAAADgDQAEgDAAgFIAAgCIgMAAQgFAAgDABg");
	this.shape_302.setTransform(100.85,-59.525);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#858585").s().p("AgVAeIAAg6IAIAAIAAAEIAHgEQADgCAEAAQAEAAAFACQAEACACADIAEAHQABAEAAAFIgBAHIgEAHQgCADgEABQgFACgEAAQgEAAgDgCIgHgDIAAAWgAgEgWIgEAEQgDABgBADQgBADAAAEQAAADABADIAEADIAEADIAEABIAFgBIAFgEIACgDIABgFIgBgHIgCgEIgFgDQgCgBgDgBIgEABg");
	this.shape_303.setTransform(95.95,-58.65);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#858585").s().p("AgDAVIAAgiIgQAAIAAgHIAnAAIAAAHIgQAAIAAAig");
	this.shape_304.setTransform(88.925,-59.525);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_305.setTransform(84.175,-59.525);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#858585").s().p("AANAdIgFgCIgDgGQgBgCAAgDQAAgDABgDIADgFIAFgDIAHgBQADgBACACIAGADIACAFQACADAAADQAAADgCACIgCAGIgGACIgFABIgHgBgAAOAKQgDADABADQgBADADACQACADAEAAQADAAACgDQACgCABgDQgBgDgCgDQgCgCgDAAQgEAAgCACgAgVAeIAig7IAJAAIgiA7gAgZAAIgFgEIgDgEIgBgHIABgFIADgFIAFgDQADgCADAAIAHACIAEADIAEAFIABAFIgBAHIgEAEIgEAEIgHAAIgGAAgAgYgUQgCACgBADQABAEACADQACABADAAQAEAAACgBQADgDgBgEQABgDgDgCQgCgCgEgBQgDABgCACg");
	this.shape_306.setTransform(75.6,-60.45);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#858585").s().p("AgHAdQgDgBgDgCIgEgGIgDgHIgBgGIgBgHIABgGIABgHIADgGIAEgGIAGgDQAEgCADAAQAEAAAEACIAGADIAEAGIADAGIABAHIABAGIgBAHIgBAGIgDAHIgEAGQgDACgDABQgEACgEAAQgDAAgEgCgAgGgUIgFAFIgCAIIgBAHIABAIIACAIIAFAFQADACADAAQAEAAADgCIAFgFIACgIIABgIIgBgHIgCgIIgFgFQgDgCgEgBQgDABgDACg");
	this.shape_307.setTransform(68.825,-60.45);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#858585").s().p("AgGAeQgEgCgDgCQgDgCgCgCIgCgHIAIAAQACAEADADQAEABADAAIAGgBIAEgCIADgFIABgEIgBgGIgDgDQgCgCgCAAIgGgBIgFABIgGACIgIAAIAEggIAiAAIAAAJIgcAAIgBAQIAFgDIAGgBIAHABIAHAFQADACACADQABADABAGQgBAEgBADQgBAEgDACQgDADgEACQgEABgFABIgGgBg");
	this.shape_308.setTransform(63.35,-60.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_309.setTransform(56.225,-59.525);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#858585").s().p("AgSAVIAAgpIAYAAQAGAAAEAEQADADAAAEIgBAGQgBACgDABQADACABACIABAGQAAAEgDADQgDAEgHAAgAgKAOIAPAAIAFgBQAAgBABAAQAAAAAAgBQAAAAABgBQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgPAAgAgKgCIAPAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgEgBIgPAAg");
	this.shape_310.setTransform(51.325,-59.525);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#858585").s().p("AgDAVIAAgiIgQAAIAAgHIAnAAIAAAHIgQAAIAAAig");
	this.shape_311.setTransform(46.575,-59.525);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#858585").s().p("AgGAUQgFgBgDgDIgEgHQgCgEAAgFQAAgEACgEIAEgHIAIgEQAEgCADAAQAHAAAFAEQAGADACAGIgJAAQgBgCgEgCQgCgCgEAAQgCAAgDACIgEADIgDAEIgBAFIABAGIADAFIAEADIAFABQAEAAACgCIAFgEIAJAAQgCAGgGADQgFAEgHAAQgDAAgEgCg");
	this.shape_312.setTransform(41.95,-59.525);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_313.setTransform(36.925,-59.525);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#858585").s().p("AALAVIAAgQIgCABIgDAAIgEABIgCAAQgSAAAAgNIAAgOIAHAAIAAANQAAAEADACQACABAGAAIAFAAIAGgBIAAgTIAIAAIAAApg");
	this.shape_314.setTransform(31.825,-59.525);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_315.setTransform(26.7,-59.525);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#858585").s().p("AANAVIAAgiIgQAAIAAALIgBAHQAAAEgBAEQgCADgDADQgDACgFAAIgCAAIAAgHIABAAQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgEIABgFIAAgFIAAgSIAgAAIAAApg");
	this.shape_316.setTransform(21.175,-59.525);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_317.setTransform(16.275,-59.525);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#858585").s().p("AAJAVIgTgRIAAARIgIAAIAAgpIAIAAIAAASIATgSIAKAAIgWAUIAWAVg");
	this.shape_318.setTransform(11.65,-59.525);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#858585").s().p("AgSAVIAAgpIAYAAQAGAAAEAEQADADAAAEIgBAGQgBACgDABQADACABACIABAGQAAAEgDADQgDAEgHAAgAgKAOIAPAAIAFgBQAAgBABAAQAAAAAAgBQAAAAABgBQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgPAAgAgKgCIAPAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgEgBIgPAAg");
	this.shape_319.setTransform(4.625,-59.525);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#858585").s().p("AAJAVIgTgRIAAARIgIAAIAAgpIAIAAIAAASIATgSIAKAAIgWAUIAWAVg");
	this.shape_320.setTransform(171.8,-68.825);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_321.setTransform(166.675,-68.825);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#858585").s().p("AANAVIAAgiIgQAAIAAALIgBAHQAAAEgBAEQgCADgDADQgDACgFAAIgCAAIAAgHIABAAQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgEIABgFIAAgFIAAgSIAgAAIAAApg");
	this.shape_322.setTransform(161.325,-68.825);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#858585").s().p("AgHAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAIAIACIAGAEIAEAHQACAEAAAEIAAABIAAACIghAAIACAFIADADIAEADIAEABQAEAAACgCQADgBACgDIAIAAQgCAGgFAEQgFADgHAAQgEAAgEgCgAANgDQgBgFgDgDQgDgDgFAAQgFAAgDADQgEADgBAFIAZAAIAAAAg");
	this.shape_323.setTransform(156.475,-68.825);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#858585").s().p("AgdAVIAAgpIAIAAIAAAiIASAAIAAgiIAHAAIAAAiIASAAIAAgiIAIAAIAAApg");
	this.shape_324.setTransform(150.275,-68.825);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_325.setTransform(144.025,-68.825);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#858585").s().p("AANAeIgcgaIAAAaIgIAAIAAg7IAIAAIAAAaIAcgaIALAAIggAdIAgAeg");
	this.shape_326.setTransform(139,-69.75);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_327.setTransform(131.275,-68.825);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#858585").s().p("AgDAVIAAgiIgQAAIAAgHIAnAAIAAAHIgQAAIAAAig");
	this.shape_328.setTransform(126.525,-68.825);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_329.setTransform(121.65,-68.825);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#858585").s().p("AgSAVIAAgpIAYAAQAGAAAEAEQADADAAAEIgBAGQgBACgDABQADACABACIABAGQAAAEgDADQgDAEgHAAgAgKAOIAPAAIAFgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgPAAgAgKgCIAPAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBgBIgEgBIgPAAg");
	this.shape_330.setTransform(116.575,-68.825);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#858585").s().p("AAWAeIgGgOIgfAAIgGAOIgJAAIAbg7IAHAAIAbA7gAANAIIgNgcIgMAcIAZAAg");
	this.shape_331.setTransform(110.925,-69.75);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#858585").s().p("AgIAVIgFgCIgEgFQgBgCAAgEQAAgEABgCIAFgDIAFgDIAHAAIANAAQAAgFgEgDQgEgCgFAAQgDAAgDACQgDABgBADIgJAAIADgFIAFgEQACgCADgBIAGgBIAIABIAHADIADAFIACAHIAAAaIgHAAIAAgFIgGAEQgEACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAEAAQAGAAADgDQAEgDABgFIAAgCIgNAAQgFAAgDABg");
	this.shape_332.setTransform(103.2,-68.825);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#858585").s().p("AAMAVIAAgSIgXAAIAAASIgIAAIAAgpIAIAAIAAARIAXAAIAAgRIAIAAIAAApg");
	this.shape_333.setTransform(98.15,-68.825);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#858585").s().p("AAMAVIAAgOIgKAAIgKAOIgLAAIANgPQgFgBgDgEQgCgCAAgFIABgFIADgFIAEgDIAHgBIAVAAIAAApgAgGgLQgCACAAADQAAAEACABQACABAEAAIAMAAIAAgNIgMAAQgEAAgCACg");
	this.shape_334.setTransform(90.725,-68.825);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#858585").s().p("AgGAUQgEgBgEgDIgEgHQgCgEAAgFQAAgEACgEIAEgHIAIgEQADgCAEAAQAHAAAFAEQAFADACAGIgIAAQgCgCgCgCQgDgCgEAAQgCAAgDACIgEADIgDAEIgBAFIABAGIADAFIAEADIAFABQAEAAADgCIAEgEIAIAAQgCAGgFADQgFAEgHAAQgEAAgDgCg");
	this.shape_335.setTransform(86.15,-68.825);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#858585").s().p("AgDAVIAAgiIgQAAIAAgHIAnAAIAAAHIgQAAIAAAig");
	this.shape_336.setTransform(81.525,-68.825);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#858585").s().p("AAAAVIgFgEQgDgDgBgDQgCgEgBgEIgIAAIAAASIgIAAIAAgpIAIAAIAAARIAIAAQABgEACgDQABgDADgDQADgCADgBQADgCAEAAQAFAAAEACIAGAEQADADACAEQABAEAAAEQAAAFgBAEQgCAEgDADQgCADgEABQgEACgFAAIgIgBgAADgMIgEADIgCAEIgBAFIABAGIACAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgDAAgCACg");
	this.shape_337.setTransform(75.975,-68.825);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#858585").s().p("AAMAVIAAgOIgKAAIgKAOIgLAAIANgPQgFgBgDgEQgCgCAAgFIABgFIADgFIAEgDIAHgBIAVAAIAAApgAgGgLQgCACAAADQAAAEACABQACABAEAAIAMAAIAAgNIgMAAQgEAAgCACg");
	this.shape_338.setTransform(69.675,-68.825);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#858585").s().p("AANAVIAAgiIgQAAIAAALIgBAHQAAAEgBAEQgCADgDADQgDACgFAAIgCAAIAAgHIABAAQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgEIABgFIAAgFIAAgSIAgAAIAAApg");
	this.shape_339.setTransform(64.725,-68.825);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#858585").s().p("AgGAUQgFgBgDgDIgEgHQgCgEAAgFQAAgEACgEIAEgHIAIgEQAEgCADAAQAHAAAFAEQAGADACAGIgJAAQgBgCgEgCQgCgCgEAAQgCAAgDACIgEADIgDAEIgBAFIABAGIADAFIAEADIAFABQAEAAACgCIAFgEIAJAAQgCAGgGADQgFAEgHAAQgDAAgEgCg");
	this.shape_340.setTransform(59.95,-68.825);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#858585").s().p("AAMAVIAAgdIgXAdIgIAAIAAgpIAIAAIAAAeIAXgeIAIAAIAAApg");
	this.shape_341.setTransform(54.75,-68.825);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#858585").s().p("AALAVIAAgQIgCABIgDAAIgEABIgCAAQgSAAAAgNIAAgOIAHAAIAAANQAAAEADACQACABAGAAIAFAAIAGgBIAAgTIAIAAIAAApg");
	this.shape_342.setTransform(49.475,-68.825);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#858585").s().p("AgIAVIgFgCIgEgFQgBgCAAgEQAAgEABgCIAFgDIAGgDIAGAAIANAAQgBgFgDgDQgDgCgGAAQgDAAgDACQgDABgCADIgIAAIADgFIAFgEQACgCAEgBIAFgBIAIABIAGADIAEAFIACAHIAAAaIgHAAIAAgFIgHAEQgDACgEAAIgHgBgAgIADQgCACAAADQAAAEACABQADACAEAAQAGAAADgDQAFgDAAgFIAAgCIgNAAQgFAAgDABg");
	this.shape_343.setTransform(44.45,-68.825);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#858585").s().p("AAMAVIAAgSIgXAAIAAASIgIAAIAAgpIAIAAIAAARIAXAAIAAgRIAIAAIAAApg");
	this.shape_344.setTransform(39.4,-68.825);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#858585").s().p("AARAVIAAgpIAIAAIAAApgAgYAVIAAgpIAHAAIAAAOIANAAIAGABIAFADIACAEIACAFIgCAFIgCAFIgFADIgGABgAgRAOIANAAQAEAAAAgCQADgCAAgDQAAgEgDgBQAAgCgEAAIgNAAg");
	this.shape_345.setTransform(31.4,-68.825);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#858585").s().p("AgHAUQgDgBgEgDIgEgHQgCgEABgFQgBgEACgEIAEgHIAHgEQAFgCADAAQAHAAAFAEQAFADACAGIgIAAQgBgCgDgCQgDgCgEAAQgCAAgCACIgFADIgCAEIgBAFIABAGIACAFIAFADIAEABQAEAAADgCIAEgEIAIAAQgCAGgFADQgFAEgHAAQgDAAgFgCg");
	this.shape_346.setTransform(25.7,-68.825);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#858585").s().p("AgRAeIAAgHIADAAIADAAIACgCIACgCIACgEIACgEIgSgoIAJAAIAMAeIAOgeIAJAAIgUArIgDAHIgDAFQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgFABg");
	this.shape_347.setTransform(20.85,-67.9);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#858585").s().p("AAMAVIAAgSIgXAAIAAASIgIAAIAAgpIAIAAIAAARIAXAAIAAgRIAIAAIAAApg");
	this.shape_348.setTransform(15.8,-68.825);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#858585").s().p("AgIAUQgEgBgDgDQgDgDgBgEQgCgEAAgFQAAgEACgEQABgEADgDIAHgEQAEgCAEAAQAFAAAEACIAGAEQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADQgCADgEABQgEACgFAAQgEAAgEgCgAgFgMIgEADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBIAEgEIADgEIABgGIgBgFIgDgEIgEgDQgDgCgDAAQgCAAgDACg");
	this.shape_349.setTransform(10.525,-68.825);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#858585").s().p("AgXAeIAAg7IArAAIAAAIIgjAAIAAAQIATAAQAFAAAEABQAEACACACQADACABADIABAHQAAAEgBADQgBADgDACQgCADgEACQgEABgFAAgAgPAWIATAAQAFAAAEgCQADgDAAgFQAAgFgDgDQgEgCgFAAIgTAAg");
	this.shape_350.setTransform(5.175,-69.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},479).wait(241));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-78.3,234.2,90.7);


(lib.l4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAvA4IAAhvIAZAAIAABvgAhHA4IAAhvIAZAAIAAAjIAgAAQALAAAHACQAIAEAGAFQAFAGADAFQADAHAAAIQAAAJgDAGQgDAHgFAFQgGAGgIADQgHADgLAAgAguAiIAfAAQAJAAAFgFQAEgDAAgJQAAgIgEgEQgFgEgJAAIgfAAg");
	this.shape.setTransform(223.775,44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUA2QgLgEgHgHQgJgJgEgKQgEgMAAgMQAAgMAEgLQAEgKAJgJQAHgHALgFQALgEALAAQAKAAAIADQAIACAIAFQAHAFAFAHQAFAHADAJIgaAAQgEgHgIgEQgHgDgJgBQgGABgGACQgGADgFAEQgEAFgDAGQgCAHAAAHQAAAIACAGQADAHAEAFQAFAEAGADQAGACAGAAQAJAAAHgDQAIgEAEgHIAaAAQgDAJgFAHQgFAHgHAFQgIAFgIACQgIADgKAAQgLAAgLgFg");
	this.shape_1.setTransform(208.05,44.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgxBQIAAgWIAKAAQAHAAAFgEQAGgEAEgLIAFgKIgyhtIAdAAIAhBPIAkhPIAbAAIg2B1IgJAVQgDAJgFAEQgEAGgHABQgHACgKAAg");
	this.shape_2.setTransform(194.75,47.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAeA4IAAguIg7AAIAAAuIgZAAIAAhvIAZAAIAAAtIA7AAIAAgtIAZAAIAABvg");
	this.shape_3.setTransform(180.925,44.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXA2QgLgEgIgHQgIgJgEgKQgFgLAAgNQAAgLAFgMQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFAMAAALQAAANgFALQgEAKgIAJQgIAHgLAEQgLAFgNAAQgMAAgLgFgAgNggQgGADgFAEQgEAFgDAHQgDAGAAAHQAAAHADAIQADAGAEAFQAFAEAGADQAHACAGAAQAIAAAGgCQAGgDAFgEQAEgFADgGQACgIAAgHQAAgHgCgGQgDgHgEgFQgFgEgGgDQgGgCgIgBQgGABgHACg");
	this.shape_4.setTransform(166.425,44.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgqBAQgQgSAAghQAAgmAMgTQAMgUAagDIATgCQAJgBAFgCQAFgDABgGIAZAAQgBAQgJAIQgIAIgQACIgcADQgNABgIAJQgGAIgBALQAFgGAJgFQAJgFANAAQANAAAKAFQALAEAHAIQAHAHAFAKQAEAKAAAMQAAAMgFALQgEAKgIAIQgHAHgLAFQgMAEgMAAQgbAAgPgSgAgMgFQgGADgEADQgGAFgCAGQgDAGAAAHQAAAHADAHQACAGAGAEQAEAEAGADQAGACAGAAQAHAAAHgCQAFgDAFgEQAFgEACgGQADgHAAgHQAAgHgDgGQgCgGgFgFQgFgDgFgDQgHgCgHAAQgGAAgGACg");
	this.shape_5.setTransform(152.25,42.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAeA4IAAhLIg7BLIgZAAIAAhvIAZAAIAABLIA7hLIAZAAIAABvg");
	this.shape_6.setTransform(132.425,44.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AA4A4IgrgsIAAAsIgZAAIAAgsIgrAsIgiAAIA4g4Ig4g3IAhAAIAsAuIAAguIAZAAIAAAuIAsguIAgAAIg3A3IA3A4g");
	this.shape_7.setTransform(110.6,44.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnAyQgNgKAAgTQAAgKAFgHQAEgGAHgEQAHgEAKgCQAIgCAKAAIAfAAQAAgLgJgFQgJgEgMgBQgIAAgJADQgHAEgEAIIgbAAQADgJAFgIQAGgHAHgEQAIgGAIgCQAKgCAIAAQANAAAKADQAKADAHAGQAHAFAEAIQAFAJgBAKIAABGIgZAAIAAgLQgGAIgKADQgKADgLAAQgUAAgMgJgAgTAJQgIAEAAAIQABAIAGAFQAGADALAAQANAAAKgGQAKgHAAgMIAAgGIgfAAQgMAAgGADg");
	this.shape_8.setTransform(94.3,44.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAtBHIAAgeIhZAAIAAAeIgYAAIAAg0IAOAAQAHgHACgMQADgLAAgNIAAguIBdAAIAABZIASAAIAAA0gAgRgYIgBAWQgCALgFAKIAyAAIAAhDIgqAAg");
	this.shape_9.setTransform(80.025,46.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgXA2QgLgEgIgHQgIgJgEgKQgFgLAAgNQAAgLAFgMQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFAMAAALQAAANgFALQgEAKgIAJQgIAHgLAEQgLAFgNAAQgMAAgLgFgAgNggQgGADgFAEQgEAFgDAHQgDAGAAAHQAAAHADAIQADAGAEAFQAFAEAGADQAHACAGAAQAIAAAGgCQAGgDAFgEQAEgFADgGQACgIAAgHQAAgHgCgGQgDgHgEgFQgFgEgGgDQgGgCgIgBQgGABgHACg");
	this.shape_10.setTransform(65.375,44.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag6BSIAAigIAZAAIAAAKQAGgGAKgDQAJgEAKAAQANAAALAEQALAFAHAJQAHAIAEALQAEAKAAAMQAAALgEALQgEAKgHAIQgHAIgLAFQgLAFgNAAQgKAAgJgEQgKgDgGgHIAAA8gAgMg4QgGACgFAFQgFAFgDAGQgCAHAAAJQAAAJACAHQADAGAFADQAFAFAGADQAHABAFAAQAHAAAHgCQAGgDAEgFQAFgEACgGQACgHAAgHQAAgIgCgGQgCgGgFgFQgEgFgGgDQgHgCgHgBQgFAAgHACg");
	this.shape_11.setTransform(51.275,46.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAdA4IAAhZIg5AAIAABZIgZAAIAAhvIBrAAIAABvg");
	this.shape_12.setTransform(36.325,44.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AADA4QgJgEgIgGQgHgHgGgJQgFgJgCgKIgWAAIAAAtIgZAAIAAhvIAZAAIAAAsIAXAAQACgKAFgJQAFgIAHgHQAIgGAJgDQAJgEAMAAQAMAAALAFQAKADAIAIQAIAJAFAKQAEALAAAMQAAANgEAKQgFAMgIAHQgIAIgKAFQgLAEgMAAQgMAAgJgDgAAKggQgGADgEAFQgEAEgCAHQgDAHAAAGQAAAIADAGQACAHAEAFQAEAEAGADQAGADAIAAQAHAAAGgDQAGgDAEgEQAFgFACgHQACgGAAgIQAAgGgCgHQgCgHgFgEQgEgFgGgDQgGgDgHABQgIgBgGADg");
	this.shape_13.setTransform(243.075,21.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAeA4IAAhLIg7BLIgZAAIAAhvIAZAAIAABLIA7hLIAZAAIAABvg");
	this.shape_14.setTransform(225.725,21.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgrA4IAAhvIBXAAIAAAWIg+AAIAABZg");
	this.shape_15.setTransform(213.3,21.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVA3QgLgFgHgIQgJgHgEgMQgEgKgBgNQABgMADgLQAFgKAIgIQAIgIAKgEQALgFAMAAQANAAAKAFQAKADAIAIQAIAJADAKQAFAKAAANIAAAEIgBAFIhXAAQACAMAJAHQAJAIAMAAQAJAAAGgEQAHgCAFgHIAbAAQgGARgPAJQgPAKgSAAQgMAAgLgEgAAfgLQgCgKgIgIQgIgGgMAAQgMAAgIAGQgJAIgCAKIA9AAIAAAAg");
	this.shape_16.setTransform(200.15,21.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMA4IAAhZIgqAAIAAgWIBtAAIAAAWIgqAAIAABZg");
	this.shape_17.setTransform(187.275,21.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgnAxQgNgJAAgTQAAgKAFgHQAEgGAHgEQAHgEAKgCQAIgBALgBIAeAAQAAgLgJgFQgJgFgMABQgJAAgIACQgHAEgDAIIgbAAQACgJAGgIQAFgHAHgFQAHgEAJgDQAKgCAIAAQAMAAALADQAJADAIAFQAHAGAEAIQAFAJgBAKIAABGIgZAAIAAgKQgHAGgJAEQgKADgLAAQgUAAgMgKgAgTAKQgIADAAAIQABAIAGAEQAGAFALAAQANgBAKgGQAKgHAAgMIAAgGIgfAAQgMAAgGAEg");
	this.shape_18.setTransform(174.2,21.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag6BSIAAigIAZAAIAAALQAGgHAKgDQAJgEAKAAQANAAALAFQALAEAHAJQAHAIAEAKQAEALAAAMQAAALgEALQgEAKgHAIQgHAIgLAFQgLAFgNAAQgKAAgJgDQgKgEgGgGIAAA7gAgMg4QgGADgFAEQgFAFgDAHQgCAGAAAJQAAAJACAGQADAHAFAEQAFAEAGACQAHADAFAAQAHAAAHgEQAGgCAEgFQAFgDACgIQACgGAAgHQAAgHgCgHQgCgGgFgFQgEgFgGgDQgHgDgHABQgFAAgHABg");
	this.shape_19.setTransform(160.775,24.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMA4IAAhZIgqAAIAAgWIBtAAIAAAWIgqAAIAABZg");
	this.shape_20.setTransform(147.075,21.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUA3QgLgFgHgIQgJgHgEgMQgEgKgBgNQABgMAEgLQAEgKAJgJQAHgIALgDQALgFAMAAQAJAAAJACQAHADAIAFQAHAFAFAHQAFAHAEAJIgbAAQgEgIgIgDQgHgEgIABQgHgBgGADQgGADgFAFQgFAEgCAGQgCAHAAAHQAAAHACAHQACAGAFAGQAFAEAGADQAGADAHAAQAIAAAHgEQAIgEAEgHIAbAAQgEAJgFAHQgFAHgHAFQgIAFgHACQgJADgJAAQgMAAgLgEg");
	this.shape_21.setTransform(134.45,21.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVA3QgLgFgIgIQgHgHgFgMQgFgKAAgNQABgMAEgLQAEgKAIgIQAHgIALgEQALgFAMAAQAMAAALAFQAKADAHAIQAIAJAFAKQADAKAAANIAAAEIAAAFIhYAAQADAMAJAHQAKAIALAAQAIAAAIgEQAGgCAEgHIAcAAQgGARgPAJQgPAKgSAAQgMAAgLgEgAAfgLQgCgKgIgIQgIgGgMAAQgLAAgJAGQgJAIgCAKIA9AAIAAAAg");
	this.shape_22.setTransform(115.5,21.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgMA4IAAhZIgqAAIAAgWIBtAAIAAAWIgqAAIAABZg");
	this.shape_23.setTransform(102.625,21.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAeA4IAAhLIg7BLIgZAAIAAhvIAZAAIAABLIA7hLIAZAAIAABvg");
	this.shape_24.setTransform(89.325,21.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAcA4IAAgnIgHABIgIABIgIABIgGAAQgZAAgOgJQgMgJAAgUIAAglIAZAAIAAAhQAAALAGAEQAGAFAOgBIANgBIAQgCIAAgxIAaAAIAABvg");
	this.shape_25.setTransform(74.8,21.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgyBRIAAgXIALAAQAIAAAFgEQAEgEAFgLIAFgKIgyhtIAcAAIAiBPIAkhPIAbAAIg2B1IgJAVQgEAJgEAFQgFAFgGACQgGACgLAAg");
	this.shape_26.setTransform(61.7,24.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAiA4IAAhZIgpAAIAAAZIgBAVQgBAMgFAJQgEAKgIAGQgJAGgOAAIgJAAIAAgYIAGAAQAHAAAEgDQAEgFACgGIACgOIAAgMIAAgvIBcAAIAABvg");
	this.shape_27.setTransform(47.475,21.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgXA3QgLgFgIgIQgIgHgEgMQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEAMgIAHQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgNggQgGADgFAFQgEAEgDAHQgDAHAAAGQAAAIADAGQADAHAEAFQAFAEAGADQAHADAGAAQAIAAAGgDQAGgDAFgEQAEgFADgHQACgGAAgIQAAgGgCgHQgDgHgEgEQgFgFgGgDQgGgDgIABQgGgBgHADg");
	this.shape_28.setTransform(33.975,21.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AApBQIAAiGIhRAAIAACGIgbAAIAAifICHAAIAACfg");
	this.shape_29.setTransform(18.175,19.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},672).to({state:[]},1).wait(47));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261.9,59.6);


(lib.l3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABNCEIAAi/IiZC/IgxAAIAAkHIAxAAIAAC/ICZi/IAxAAIAAEHg");
	this.shape.setTransform(183.275,49.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABuCEIAAiuIhVCuIgxAAIhWiuIAACuIgxAAIAAkHIA4AAIBnDTIBojTIA3AAIAAEHg");
	this.shape_1.setTransform(145.55,49.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag4CGQgTgGgPgLQgOgKgIgRQgIgQAAgXQAAgYAJgQQAKgPAQgKQAQgKAVgFQAVgEAXAAIBSAAQAAghgWgNQgWgNghAAQgXAAgVAJQgVAKgIATIg2AAQAFgVANgPQAMgQARgLQARgKAUgGQAVgFAWAAQAcAAAXAHQAYAGAQAOQARANAJATQAJATAAAZIAACnIgxAAIAAgdQgQARgWAKQgXAJgeAAQgXAAgUgFgAg1AUQgSAKAAAVQAAAWARAKQASAKAcAAQAnAAAYgSQAXgTAAgeIAAgRIhTAAQgfAAgRALg");
	this.shape_2.setTransform(108.325,49.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABNCEIAAhvIiZAAIAABvIgxAAIAAkHIAxAAIAABtICZAAIAAhtIAxAAIAAEHg");
	this.shape_3.setTransform(76.125,49.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvCBQgZgLgSgTQgTgSgKgaQgLgZAAgeQAAgdALgZQAKgaATgSQASgTAZgLQAagKAcAAQAsAAAgAXQAiAXAOAmIg2AAQgKgSgTgKQgSgKgXAAQgTAAgQAHQgQAHgLAMQgMANgHARQgGARAAATQAAAUAGARQAHARAMANQALAMAQAHQAQAHATAAQAXAAASgKQATgKAKgSIA2AAQgOAmgiAXQggAXgsAAQgcAAgagKg");
	this.shape_4.setTransform(30.1,49.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},704).to({state:[]},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,214.6,82.4);


(lib.l2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgvCBQgZgLgSgTQgTgSgKgaQgLgZAAgeQAAgdALgZQAKgaATgSQASgTAZgLQAZgKAcAAQAtAAAhAXQAgAXAPAmIg2AAQgKgSgSgKQgTgKgYAAQgSAAgQAHQgQAHgLAMQgMANgHARQgGARgBATQABAUAGARQAHARAMANQALAMAQAHQAQAHASAAQAYAAATgKQASgKAKgSIA2AAQgPAmggAXQghAXgtAAQgcAAgZgKg");
	this.shape.setTransform(200.95,49.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwCBQgZgKgTgTQgTgTgKgZQgLgaAAgeQAAgeALgZQAJgZATgSQARgTAZgLQAZgKAdAAQAcAAAXAKQAZALARASQARATAKAYQAKAZAAAdIAAAJIgCALIjUAAQADAQAHAOQAIAOALAKQALAKAPAGQAPAFARAAQAYAAARgJQASgIALgSIA1AAQgOAmghAWQggAVgsAAQgdAAgZgKgABQgYQgEgfgUgSQgVgTggAAQgiAAgWATQgWASgFAfICgAAIAAAAg");
	this.shape_1.setTransform(168.9,49.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABNCEIAAhvIiZAAIAABvIgxAAIAAkHIAxAAIAABtICZAAIAAhtIAxAAIAAEHg");
	this.shape_2.setTransform(135.625,49.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgtCFQgWgHgPgMQgRgLgKgQQgLgPgEgRIA5AAQAIATASAKQATAJAfAAIAagCQAMgDAJgFQAJgFAFgIQAGgHAAgKQAAgPgMgIQgKgJgUAAIg+AAIAAgqIA+AAQASAAALgIQALgIAAgQQAAgSgTgLQgTgKgcAAQgdAAgSAIQgTAJgJASIg2AAQAEgQAKgPQAJgPARgLQAPgLAXgHQAWgGAcAAQATAAAUAEQAVAFARAKQARAKALAQQAMAQAAAXQAAAVgKANQgKANgPAHIANAIIAMAMIAIAQQADAIAAAMQAAASgJAPQgIAPgRALQgPAMgXAGQgWAGgaAAQgbAAgXgGg");
	this.shape_3.setTransform(102.75,49.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABNCEIAAi/IiZC/IgxAAIAAkHIAxAAIAAC/ICZi/IAxAAIAAEHg");
	this.shape_4.setTransform(70.525,49.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7C4QgagMgRgWQgRgVgJgeQgIgdgBgjQAAgrAGgjQAFgiAOgYQANgYAXgPQAWgPAigCIA1gHQAUgCANgHQALgHADgOIAyAAQgDAbgSAVQgSAVgoAFIhEAHQgUACgNAIQgOAJgIALQgIALgEAOIgFAbQANgRAXgNQAWgMAjAAQAbAAAZALQAYALATARQARATALAXQALAZAAAcQAAAdgLAYQgLAYgSASQgTATgZAKQgZAKgdABQgiAAgZgMgAgjgUQgQAGgMANQgLALgHAQQgGARgBASQABATAGAQQAHAQALAMQAMAMAQAGQAQAIATAAQATAAAQgIQAQgGAMgMQAMgMAGgQQAHgQAAgTQAAgSgHgRQgGgQgMgLQgMgNgQgGQgQgHgTAAQgTAAgQAHg");
	this.shape_5.setTransform(36.7,43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},711).to({state:[]},1).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236.2,82.4);


(lib.l1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwCBQgZgKgTgTQgTgTgKgZQgLgaAAgeQAAgeALgZQAJgZATgSQARgTAZgLQAZgKAdAAQAcAAAXAKQAZALARASQARATAKAYQAKAZAAAdIAAAJIgCALIjUAAQADAQAHAOQAIAOALAKQALAKAPAGQAPAFARAAQAYAAARgJQASgIALgSIA1AAQgOAmghAWQggAVgsAAQgdAAgZgKgABQgYQgEgfgUgSQgVgTggAAQgiAAgWATQgWASgFAfICgAAIAAAAg");
	this.shape.setTransform(221.1,49.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYCEIAAjbIhlAAIAAgsID7AAIAAAsIhlAAIAADbg");
	this.shape_1.setTransform(191.2,49.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABNCEIAAi/IiZC/IgxAAIAAkHIAxAAIAAC/ICZi/IAxAAIAAEHg");
	this.shape_2.setTransform(160.225,49.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYCEIAAjbIhmAAIAAgsID8AAIAAAsIhlAAIAADbg");
	this.shape_3.setTransform(129.2,49.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvCBQgZgLgSgTQgSgSgMgaQgKgZAAgeQAAgdAKgZQAMgaASgSQASgTAZgLQAZgKAdAAQAsAAAgAXQAiAXAOAmIg2AAQgKgSgTgKQgSgKgXAAQgTAAgQAHQgQAHgLAMQgNANgGARQgGARAAATQAAAUAGARQAGARANANQALAMAQAHQAQAHATAAQAXAAASgKQATgKAKgSIA2AAQgOAmgiAXQggAXgsAAQgdAAgZgKg");
	this.shape_4.setTransform(99.75,49.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag4CGQgTgGgPgLQgOgKgIgRQgIgQAAgXQAAgYAJgQQAKgPAQgKQAQgKAVgFQAVgEAXAAIBSAAQAAghgWgNQgWgNghAAQgXAAgVAJQgVAKgIATIg2AAQAFgVANgPQAMgQARgLQARgKAUgGQAVgFAWAAQAcAAAXAHQAYAGAQAOQARANAJATQAJATAAAZIAACnIgxAAIAAgdQgQARgWAKQgXAJgeAAQgXAAgUgFgAg1AUQgSAKAAAVQAAAWARAKQASAKAcAAQAnAAAYgSQAXgTAAgeIAAgRIhTAAQgfAAgRALg");
	this.shape_5.setTransform(67.125,49.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiYC+IAAl7IC4AAQAbAAAWAHQAXAIAPAOQAQAOAKAVQAJAVAAAaQAAAcgJAUQgKAVgQANQgPAOgXAIQgWAHgbAAIiFAAIAACdgAhlgOICFAAQAfAAAUgQQASgRAAgfQAAgegSgRQgUgQgfAAIiFAAg");
	this.shape_6.setTransform(34.5,43.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(720));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251.6,82.4);


(lib.l_shape_masked = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#04E061").s().p("AiiCiQhDhCAAhgQAAhfBDhDQBDhDBfAAQBgAABCBDQBEBDAABfQAABghEBCQhCBEhgAAQhfAAhDhEg");
	this.shape.setTransform(23,23);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(720));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,46);


(lib._img = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_23
	this.instance = new lib.store();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(720));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,511,345);


(lib.GREEN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_16
	this.instance = new lib.green();
	this.instance.setTransform(-192,-191.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(720));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192,-191.5,384,383);


(lib.PINS = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// RED
	this.instance = new lib.RED("synched",0);
	this.instance.setTransform(299.3,29.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({startPosition:31},0).to({x:120.8,y:-33.7,startPosition:91},60,cjs.Ease.quartInOut).wait(629));

	// PURPLE
	this.instance_1 = new lib.PURPLE("synched",0);
	this.instance_1.setTransform(-200.3,-192.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({startPosition:31},0).to({x:-32.3,y:-98.2,startPosition:91},60,cjs.Ease.quartInOut).wait(629));

	// GREEN
	this.instance_2 = new lib.GREEN("synched",0);
	this.instance_2.setTransform(-242.3,133,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({startPosition:31},0).to({x:-32.3,y:7,startPosition:91},60,cjs.Ease.quartInOut).wait(629));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-338.3,-228.7,676.6,457.5);


(lib.logo_anim_pins = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo_anim_purple
	this.instance = new lib.logo_anim_purple("synched",479);
	this.instance.setTransform(-9.1,-14.65,1,1,0,0,0,5.4,5.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(509).to({_off:false},0).to({x:-16.6,y:-22.15,alpha:1},30,cjs.Ease.quintInOut).to({x:-6.6,y:-18.65,startPosition:599},30,cjs.Ease.quintInOut).wait(151));

	// logo_anim_blue
	this.instance_1 = new lib.logo_anim_blue("synched",479);
	this.instance_1.setTransform(14.6,-13,1,1,0,0,0,11.7,11.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(511).to({_off:false},0).to({x:22.1,y:-20.5,alpha:1},28,cjs.Ease.quintInOut).to({x:12.1,y:-15.5,startPosition:599},30,cjs.Ease.quintInOut).wait(151));

	// logo_anim_green
	this.instance_2 = new lib.logo_anim_green("synched",479);
	this.instance_2.setTransform(-11.9,10.25,1,1,0,0,0,14.3,14.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(513).to({_off:false},0).to({x:-19.4,y:17.75,alpha:1},26,cjs.Ease.quintInOut).to({x:-9.4,y:2.75,startPosition:599},30,cjs.Ease.quintInOut).wait(151));

	// logo_anim_red
	this.instance_3 = new lib.logo_anim_red("synched",479);
	this.instance_3.setTransform(12.95,14.15,1,1,0,0,0,8.7,8.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(515).to({_off:false},0).to({x:20.45,y:21.65,alpha:1},24,cjs.Ease.quintInOut).to({x:15.45,y:6.65,startPosition:599},30,cjs.Ease.quintInOut).wait(151));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-32.1,67.4,64.2);


(lib.logo_anim_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-25.75,1.75,1,1,0,0,0,87.2,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(689).to({_off:true},1).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.4,-20.3,122.9,40.7);


(lib.l_shape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// l_shape_masked
	this.instance = new lib.l_shape_masked("synched",0);
	this.instance.setTransform(23,23,1,1,0,0,0,23,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({startPosition:23},0).to({x:197,startPosition:83},60,cjs.Ease.quartInOut).wait(637));

	// l_shape_pin (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_23 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_24 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_25 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_26 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_27 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_28 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_29 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_30 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_31 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_32 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_33 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_34 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_35 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_36 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_37 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_38 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_39 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_40 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_41 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_42 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_43 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_44 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_45 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_46 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_47 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_48 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_49 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_50 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_51 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_52 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_53 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_54 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_55 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_56 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_57 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_58 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_59 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_60 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_61 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_62 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_63 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_64 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_65 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_66 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_67 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_68 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_69 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_70 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_71 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_72 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_73 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_74 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_75 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_76 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_77 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_78 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_79 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_80 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_81 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_82 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");
	var mask_graphics_83 = new cjs.Graphics().p("A4NNcIAA63MAwbAAAIAAa3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-131.975,y:37.05}).wait(23).to({graphics:mask_graphics_23,x:-131.975,y:37.05}).wait(1).to({graphics:mask_graphics_24,x:-131.9749,y:37.05}).wait(1).to({graphics:mask_graphics_25,x:-131.9733,y:37.05}).wait(1).to({graphics:mask_graphics_26,x:-131.9663,y:37.05}).wait(1).to({graphics:mask_graphics_27,x:-131.9475,y:37.05}).wait(1).to({graphics:mask_graphics_28,x:-131.9079,y:37.05}).wait(1).to({graphics:mask_graphics_29,x:-131.8358,y:37.05}).wait(1).to({graphics:mask_graphics_30,x:-131.7171,y:37.05}).wait(1).to({graphics:mask_graphics_31,x:-131.5351,y:37.05}).wait(1).to({graphics:mask_graphics_32,x:-131.2703,y:37.05}).wait(1).to({graphics:mask_graphics_33,x:-130.9009,y:37.05}).wait(1).to({graphics:mask_graphics_34,x:-130.4024,y:37.05}).wait(1).to({graphics:mask_graphics_35,x:-129.7478,y:37.05}).wait(1).to({graphics:mask_graphics_36,x:-128.9073,y:37.05}).wait(1).to({graphics:mask_graphics_37,x:-127.8488,y:37.05}).wait(1).to({graphics:mask_graphics_38,x:-126.5375,y:37.05}).wait(1).to({graphics:mask_graphics_39,x:-124.9359,y:37.05}).wait(1).to({graphics:mask_graphics_40,x:-123.0042,y:37.05}).wait(1).to({graphics:mask_graphics_41,x:-120.6998,y:37.05}).wait(1).to({graphics:mask_graphics_42,x:-117.9776,y:37.05}).wait(1).to({graphics:mask_graphics_43,x:-114.7898,y:37.05}).wait(1).to({graphics:mask_graphics_44,x:-111.0863,y:37.05}).wait(1).to({graphics:mask_graphics_45,x:-106.8142,y:37.05}).wait(1).to({graphics:mask_graphics_46,x:-101.918,y:37.05}).wait(1).to({graphics:mask_graphics_47,x:-96.3398,y:37.05}).wait(1).to({graphics:mask_graphics_48,x:-90.019,y:37.05}).wait(1).to({graphics:mask_graphics_49,x:-82.8924,y:37.05}).wait(1).to({graphics:mask_graphics_50,x:-74.8943,y:37.05}).wait(1).to({graphics:mask_graphics_51,x:-65.9564,y:37.05}).wait(1).to({graphics:mask_graphics_52,x:-56.0078,y:37.05}).wait(1).to({graphics:mask_graphics_53,x:-44.975,y:37.05}).wait(1).to({graphics:mask_graphics_54,x:-33.9422,y:37.05}).wait(1).to({graphics:mask_graphics_55,x:-23.9936,y:37.05}).wait(1).to({graphics:mask_graphics_56,x:-15.0557,y:37.05}).wait(1).to({graphics:mask_graphics_57,x:-7.0576,y:37.05}).wait(1).to({graphics:mask_graphics_58,x:0.069,y:37.05}).wait(1).to({graphics:mask_graphics_59,x:6.3898,y:37.05}).wait(1).to({graphics:mask_graphics_60,x:11.968,y:37.05}).wait(1).to({graphics:mask_graphics_61,x:16.8642,y:37.05}).wait(1).to({graphics:mask_graphics_62,x:21.1363,y:37.05}).wait(1).to({graphics:mask_graphics_63,x:24.8398,y:37.05}).wait(1).to({graphics:mask_graphics_64,x:28.0276,y:37.05}).wait(1).to({graphics:mask_graphics_65,x:30.7498,y:37.05}).wait(1).to({graphics:mask_graphics_66,x:33.0542,y:37.05}).wait(1).to({graphics:mask_graphics_67,x:34.9859,y:37.05}).wait(1).to({graphics:mask_graphics_68,x:36.5875,y:37.05}).wait(1).to({graphics:mask_graphics_69,x:37.8988,y:37.05}).wait(1).to({graphics:mask_graphics_70,x:38.9573,y:37.05}).wait(1).to({graphics:mask_graphics_71,x:39.7978,y:37.05}).wait(1).to({graphics:mask_graphics_72,x:40.4524,y:37.05}).wait(1).to({graphics:mask_graphics_73,x:40.9509,y:37.05}).wait(1).to({graphics:mask_graphics_74,x:41.3203,y:37.05}).wait(1).to({graphics:mask_graphics_75,x:41.5851,y:37.05}).wait(1).to({graphics:mask_graphics_76,x:41.7671,y:37.05}).wait(1).to({graphics:mask_graphics_77,x:41.8858,y:37.05}).wait(1).to({graphics:mask_graphics_78,x:41.9579,y:37.05}).wait(1).to({graphics:mask_graphics_79,x:41.9975,y:37.05}).wait(1).to({graphics:mask_graphics_80,x:42.0163,y:37.05}).wait(1).to({graphics:mask_graphics_81,x:42.0233,y:37.05}).wait(1).to({graphics:mask_graphics_82,x:42.0249,y:37.05}).wait(1).to({graphics:mask_graphics_83,x:42.025,y:37.05}).wait(637));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#04E061").s().p("AtUDmQhnAAhIhEQhIhDAAhfIAAAAQAAheBIhEQBIhDBnAAIapAAQBmAABIBDQBJBEAABeIAAAAQAABfhJBDQhIBEhmAAg");
	this.shape.setTransform(110,23);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(720));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,46);


(lib.KV = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// img
	this.instance = new lib._img("synched",0);
	this.instance.setTransform(301.7,409.85,0.499,0.499,0,0,0,255.5,172.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:357.35,alpha:1,startPosition:59},59,cjs.Ease.quartInOut).wait(600).to({startPosition:659},0).to({_off:true},1).wait(60));

	// plate
	this.instance_1 = new lib.plate_1("synched",0);
	this.instance_1.setTransform(341.35,323.55,0.5,0.5,0,0,0,148.5,94.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({startPosition:0},0).to({y:239.55,alpha:1},41,cjs.Ease.quartInOut).wait(559).to({startPosition:0},0).to({_off:true},1).wait(60));

	// PINS
	this.instance_2 = new lib.PINS("synched",0);
	this.instance_2.setTransform(339.65,336.95,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({startPosition:31},0).to({rotation:0,x:272.85,y:357.45,startPosition:91},60,cjs.Ease.quartInOut).wait(568).to({startPosition:659},0).to({_off:true},1).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,678.1,608.4);


(lib.a_legal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// legal
	this.instance = new lib.legal("synched",0);
	this.instance.setTransform(121.3,93.6,1,1,0,0,0,121.3,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(479).to({alpha:0,startPosition:479},0).to({alpha:1,startPosition:539},60,cjs.Ease.quintInOut).wait(120).to({startPosition:659},0).to({alpha:0,startPosition:719},60,cjs.Ease.quintInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234.2,90.7);


(lib.OUTRO_LOGO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo_anim_pins
	this.instance = new lib.logo_anim_pins("synched",0);
	this.instance.setTransform(13.85,18.05,1,1,0,0,0,-9.7,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(509).to({rotation:-89.9948,x:13.8,y:18.15,startPosition:509},0).wait(30).to({startPosition:539},0).to({rotation:0,x:13.85,y:18.05,startPosition:569},30,cjs.Ease.quintInOut).wait(151));

	// logo_anim_logo
	this.instance_1 = new lib.logo_anim_logo("synched",0);
	this.instance_1.setTransform(112.95,20.35);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(509).to({startPosition:0},0).wait(30).to({x:102.95,startPosition:509},0).to({x:112.95,alpha:1,startPosition:539},30,cjs.Ease.quintInOut).wait(151));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-25.6,183.6,74.9);


(lib.LINE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// l1
	this.instance = new lib.l1("synched",0);
	this.instance.setTransform(236.8,51.6,1,1,0,0,0,125.8,41.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:41.1,alpha:1,startPosition:59},59,cjs.Ease.quintInOut).wait(600).to({startPosition:659},0).to({_off:true},1).wait(60));

	// l2
	this.instance_1 = new lib.l2("synched",0);
	this.instance_1.setTransform(235.1,102.35,1,1,0,0,0,118,41.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:91.85,alpha:1,startPosition:59},59,cjs.Ease.quintInOut).wait(592).to({startPosition:651},0).to({_off:true},1).wait(60));

	// l3
	this.instance_2 = new lib.l3("synched",0);
	this.instance_2.setTransform(237,151.75,1,1,0,0,0,107.3,41.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({y:141.25,alpha:1,startPosition:59},59,cjs.Ease.quintInOut).wait(585).to({startPosition:644},0).to({_off:true},1).wait(60));

	// Слой_14
	this.instance_3 = new lib.l_shape("synched",0);
	this.instance_3.setTransform(-99.5,112.85,1,1,0,0,0,-99.5,37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({startPosition:23},0).to({x:26.5,startPosition:83},60,cjs.Ease.quartInOut).wait(576).to({startPosition:659},0).to({_off:true},1).wait(60));

	// l4
	this.instance_4 = new lib.l4("synched",0);
	this.instance_4.setTransform(235.75,212.3,1,1,0,0,0,130.9,29.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47).to({_off:false},0).to({y:201.8,alpha:1,startPosition:59},59,cjs.Ease.quintInOut).wait(553).to({startPosition:612},0).to({_off:true},1).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,366.7,242.1);


(lib.a_outro_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// OUTRO_LOGO
	this.instance = new lib.OUTRO_LOGO("synched",0);
	this.instance.setTransform(96.75,71.25,1,1,0,0,0,87.4,45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(659).to({startPosition:659},0).to({alpha:0,startPosition:719},60,cjs.Ease.quintInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183.8,75);


// stage content:
(lib._1_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#858585").ss(1,0,0,3).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(720));

	// cens
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#858585").s().p("AgHAnIAAgfIgfAAIAAgOIAfAAIAAggIAOAAIAAAgIAgAAIAAAOIggAAIAAAfg");
	this.shape_1.setTransform(276.1,565.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#858585").s().p("AgmA9IAAgPIAwgtIAKgKQAEgHAAgHQAAgFgCgEIgFgHIgHgEQgFgBgFgBQgIABgHAEQgHAFgCAJIgRAAQABgHAEgGQADgGAFgFQAGgFAHgCQAHgDAIAAQAIAAAIADQAHADAGAEQAFAEADAIQADAGAAAIQAAALgFAHQgFAIgIAHIgmAlIA6AAIAAAPg");
	this.shape_2.setTransform(266.025,564.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#858585").s().p("AAEA8IAAhkIgYAXIAAgUIAYgWIARAAIAAB3g");
	this.shape_3.setTransform(257.05,564.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(720));

	// a_legal
	this.instance = new lib.a_legal("synched",0);
	this.instance.setTransform(128.1,529.6,1,1,0,0,0,117.1,45.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(720));

	// a_outro_logo
	this.instance_1 = new lib.a_outro_logo("synched",0);
	this.instance_1.setTransform(145.55,289.85,1,1,0,0,0,91.9,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(720));

	// white_solid
	this.instance_2 = new lib.main_solid("synched",0);
	this.instance_2.setTransform(147.6,301.1,1,1,0,0,0,162.6,310.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(479).to({startPosition:0},0).to({alpha:1},60,cjs.Ease.quintInOut).wait(120).to({startPosition:0},0).to({alpha:0},60,cjs.Ease.quintInOut).wait(1));

	// Logo_bis2_svg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABKCDIgVg3IhpAAIgVA3Ig2AAIBlkFIA2AAIBkEFgAAjAcIgjhbIgiBbIBFAAg");
	this.shape_4.setTransform(141.775,539.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXBcIAAi3IAwAAIAAC3g");
	this.shape_5.setTransform(174.5,543.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAZQgLgLAAgOQAAgOALgKQAKgLAOAAQAPAAAKALQALAKAAAOQAAAPgLAKQgLALgOAAQgOAAgKgLg");
	this.shape_6.setTransform(174.525,529.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOBmQgRgQAAggIAAhNIgdAAIAAgsIAdAAIAAgxIAwAAIAAAxIAsAAIAAAsIgsAAIAABCQAAAZAaAAQAKAAAIgDIAAAuQgQAGgSAAQgbAAgOgPg");
	this.shape_7.setTransform(184.975,541.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYBcIhGi3IAzAAIArBzIArhzIA0AAIhFC3g");
	this.shape_8.setTransform(161,543.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhDBDQgcgbABgoQgBgmAcgcQAcgcAnAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgnAAgcgcgAggggQgOAOAAASQAAATAOAOQAOAOASAAQAUAAANgOQAOgOAAgTQAAgSgOgOQgNgNgUAAQgSAAgOANg");
	this.shape_9.setTransform(201.35,543.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#965EEB").s().p("AgYAaQgLgLAAgPQAAgOALgKQAKgKAOAAQAPAAAKAKQALAKAAAOQAAAOgLALQgKALgPAAQgOgBgKgJg");
	this.shape_10.setTransform(105.975,531.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF4053").s().p("AgoAoQgRgQAAgYQAAgXARgRQARgQAXgBQAYABARAQQARARAAAXQAAAYgRAQQgRARgYAAQgXAAgRgRg");
	this.shape_11.setTransform(120.675,548.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00AAFF").s().p("Ag2A3QgWgXAAggQAAgfAWgWQAXgYAfAAQAgAAAXAYQAXAWgBAfQABAggXAXQgXAWggAAQgfAAgXgWg");
	this.shape_12.setTransform(118.45,533.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#04E061").s().p("AhDBDQgbgbAAgoQAAgnAbgbQAcgcAnAAQAnAAAcAcQAcAbAAAnQAAAngcAcQgcAcgnAAQgnAAgcgcg");
	this.shape_13.setTransform(104.15,545.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AnKBOIAAgWIg/AAIAAAWIgSAAIAAgmIAFAAQAMAAAAgoIABgjIBIAAIAABLIAKAAIAAAmgAn3AAQgBAbgGANIAqAAIAAg7IgjAAgAioAqQgFgHgDgIIgFgfQAAg8AygHIApgHIABAUIgnAFIAAAAQgiAFgCAkIABgBQAKgTAVgCIAHAAIAQADQAHADAHAHQAGAGAEAJIAEAQIAAAAIAAABIAAABIgGAWQgEAGgFAGQgOANgUgBQgYAAgOgQgAiDApIABAAQAMAAAIgIQAJgJAAgMQgBgMgHgIQgJgIgMAAQgLgBgJAJQgJAIAAALIAAABIACALQACAFAEAEQAFAFAHACIAHACIABAAIAAAAgAHIAtQgOgOAAgVQAAgUAOgOQANgNATAAQAUAAANAPIAAgNIATAAIAABbIgTAAIAAgNQgMAPgVAAQgTAAgNgNgAHWgLQgFAFgCAHIgBAKQAAANAIAIQAIAJAOAAQANAAAIgJQAJgIAAgOQAAgMgJgJQgIgJgNAAQgNAAgJAJgAFlAtQgGgFgDgGQgGgKAAgNQAAgUAPgOQAOgNAUAAQAXAAAMANIAHALIgQAIIgEgGIgCgCQgIgIgMAAQgMABgJAIQgFAGgCAHIgBAJIABAJQACAHAFAFQAGAGAIACIAFABIABAAIABAAQARAAAKgRIAPAJIgHALQgNAOgWAAQgVAAgNgNgAD6AtQgOgOgBgVQABgTAOgPQANgNAUAAQAVAAANAOQAOAPgBAUIAAAEIhLAAIAEALQACAEAEAEQAIAGAKAAIAAABQATAAAKgRIAPAJQgMAYggAAQgTAAgOgNgAEKgPQgIAGgCAJIA1AAIgCgGIAAgBQgDgFgEgDQgEgEgHgCIgEAAIgBAAIgBAAQgJAAgIAGgAAkAjIAPgIQAIAPAUAAQAJAAAFgDQAGgFAAgFQAAgMgPAAIgUAAIAAgPIAUAAQAOAAAAgKIAAgBQgBgFgFgDQgEgDgGgBIgDAAQgTAAgIAQIgQgHIAGgKQALgMASgCIAFgBIACAAIABAAQAQAAALAHQALAHAAALQgBAOgNAHQAPAGAAAOQAAANgKAHQgKAJgUAAQgeAAgMgXgADHA4IAAgnIgsAAIAAAnIgTAAIAAhbIATAAIAAAkIAsAAIAAgkIATAAIAABbgAAAA4IAAhBIgtBBIgSAAIAAhbIATAAIAABAIAthAIASAAIAABbgAkGA4IAAggIgPAAIgZAgIgVAAIAagjQgMgCgGgIQgGgHgBgJIACgJQACgHAGgFQAIgHAKgBIAHgBIAtAAIAABbgAkpgPQgFAEAAAGQAAAFAFAEQAEAEAHAAIAYAAIAAgbIgYAAQgHAAgEAEgAloA4IAAhLIgjAAIgBAhQgBAWgGAKQgHAKgOAAIgGAAIAAgRIACAAQAIgBACgFQAEgGABgOIABgwIBHAAIAABbg");
	this.shape_14.setTransform(153.05,565.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(720));

	// LINE
	this.instance_3 = new lib.LINE("synched",0);
	this.instance_3.setTransform(97.05,126.15,1,1,0,0,0,183.3,121);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},660).wait(60));

	// KV
	this.instance_4 = new lib.KV("synched",0);
	this.instance_4.setTransform(191.95,374.9,1,1,0,0,0,338.9,304.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},660).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(3,291,528,388.1);
// library properties:
lib.properties = {
	id: 'EF38F2B78FDA4F86963F34EB42F4D331',
	width: 300,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"1_300x600_atlas_1.png?1723216609706", id:"1_300x600_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EF38F2B78FDA4F86963F34EB42F4D331'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;