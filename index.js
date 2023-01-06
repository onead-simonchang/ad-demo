(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.Back = function() {
	this.initialize(img.Back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,37);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,695);


(lib.bg_w = function() {
	this.initialize(img.bg_w);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,2000);


(lib.bgloop = function() {
	this.initialize(img.bgloop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,2000);


(lib.black = function() {
	this.initialize(img.black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,198);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,257,258);


(lib.BTNa = function() {
	this.initialize(img.BTNa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,925);


(lib.BTNAJ2 = function() {
	this.initialize(img.BTNAJ2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,737);


(lib.BTNB = function() {
	this.initialize(img.BTNB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,737);


(lib.BTNCF = function() {
	this.initialize(img.BTNCF);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,140);


(lib.BTND = function() {
	this.initialize(img.BTND);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,563);


(lib.coff = function() {
	this.initialize(img.coff);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,67);


(lib.Lat = function() {
	this.initialize(img.Lat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,199);


(lib.men = function() {
	this.initialize(img.men);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,500);


(lib.men_w = function() {
	this.initialize(img.men_w);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,498);


(lib.moon = function() {
	this.initialize(img.moon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,73);


(lib.moon_w = function() {
	this.initialize(img.moon_w);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,72);


(lib.sun = function() {
	this.initialize(img.sun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.sun_w = function() {
	this.initialize(img.sun_w);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.talk = function() {
	this.initialize(img.talk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,308,235);


(lib.talk_w = function() {
	this.initialize(img.talk_w);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,283,211);


(lib.toplogo = function() {
	this.initialize(img.toplogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,127);


(lib.toplogo_w = function() {
	this.initialize(img.toplogo_w);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,127);


(lib.win = function() {
	this.initialize(img.win);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,495,556);


(lib.win2 = function() {
	this.initialize(img.win2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,618,119);


(lib.win2_w = function() {
	this.initialize(img.win2_w);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,618,119);


(lib.win_w = function() {
	this.initialize(img.win_w);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,494,557);// helper functions:

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


(lib.Symbol32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],-64.8,-42.9,-17.6,-19.6).s().p("AiJjmIETDaIkTDzg");
	this.shape.setTransform(13.8,23.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],-57.7,-42.5,-10.5,-19.2).s().p("AiJjmIETDaIkTDzg");
	this.shape_1.setTransform(13.8,23.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],-50.5,-42.1,-3.3,-18.8).s().p("AiJjmIETDaIkTDzg");
	this.shape_2.setTransform(13.8,23.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],-43.4,-41.8,3.8,-18.5).s().p("AiJjmIETDaIkTDzg");
	this.shape_3.setTransform(13.8,23.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],-36.3,-41.4,10.9,-18.1).s().p("AiJjmIETDaIkTDzg");
	this.shape_4.setTransform(13.8,23.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],-29.2,-41,18,-17.7).s().p("AiJjmIETDaIkTDzg");
	this.shape_5.setTransform(13.8,23.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],-22.1,-40.6,25.1,-17.3).s().p("AiJjmIETDaIkTDzg");
	this.shape_6.setTransform(13.8,23.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],-15,-40.2,32.2,-16.9).s().p("AiJjmIETDaIkTDzg");
	this.shape_7.setTransform(13.8,23.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],-7.8,-39.8,39.4,-16.5).s().p("AiJjmIETDaIkTDzg");
	this.shape_8.setTransform(13.8,23.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],-0.7,-39.4,46.5,-16.1).s().p("AiJjmIETDaIkTDzg");
	this.shape_9.setTransform(13.8,23.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],2.8,-38.3,50,-15).s().p("AiJjmIETDaIkTDzg");
	this.shape_10.setTransform(13.8,23.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],6.2,-37.2,53.4,-13.9).s().p("AiJjmIETDaIkTDzg");
	this.shape_11.setTransform(13.8,23.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],9.7,-36,56.9,-12.7).s().p("AiJjmIETDaIkTDzg");
	this.shape_12.setTransform(13.8,23.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],13.2,-34.9,60.4,-11.6).s().p("AiJjmIETDaIkTDzg");
	this.shape_13.setTransform(13.8,23.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],16.7,-33.8,63.9,-10.5).s().p("AiJjmIETDaIkTDzg");
	this.shape_14.setTransform(13.8,23.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],20.1,-32.6,67.3,-9.3).s().p("AiJjmIETDaIkTDzg");
	this.shape_15.setTransform(13.8,23.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],23.6,-31.5,70.8,-8.2).s().p("AiJjmIETDaIkTDzg");
	this.shape_16.setTransform(13.8,23.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],27.1,-30.4,74.3,-7.1).s().p("AiJjmIETDaIkTDzg");
	this.shape_17.setTransform(13.8,23.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],30.5,-29.3,77.7,-6).s().p("AiJjmIETDaIkTDzg");
	this.shape_18.setTransform(13.8,23.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,204,51,0)","#FFCC33","rgba(255,255,255,0)"],[0.012,0.227,1],34,-28.1,81.2,-4.8).s().p("AiJjmIETDaIkTDzg");
	this.shape_19.setTransform(13.8,23.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.6,46.2);


(lib.Symbol31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.toplogo();

	this.instance_1 = new lib.toplogo_w();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,292,127);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,204,51,0)").ss(3,2,0,3).p("AA2g1IAABrIhrAA");
	this.shape.setTransform(-3.575,-4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,204,51,0.267)").ss(3,2,0,3).p("Ag1A2IBrAAIAAhr");
	this.shape_1.setTransform(-2.025,-3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,204,51,0.49)").ss(3,2,0,3).p("Ag1A2IBrAAIAAhr");
	this.shape_2.setTransform(-0.675,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,204,51,0.675)").ss(3,2,0,3).p("Ag1A2IBrAAIAAhr");
	this.shape_3.setTransform(0.375,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,204,51,0.816)").ss(3,2,0,3).p("Ag1A2IBrAAIAAhr");
	this.shape_4.setTransform(1.225,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,204,51,0.918)").ss(3,2,0,3).p("Ag1A2IBrAAIAAhr");
	this.shape_5.setTransform(1.825,1.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,204,51,0.98)").ss(3,2,0,3).p("Ag1A2IBrAAIAAhr");
	this.shape_6.setTransform(2.225,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFCC33").ss(3,2,0,3).p("AA2g1IAABrIhrAA");
	this.shape_7.setTransform(2.325,1.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFCC33").ss(3,2,0,3).p("Ag1A2IBrAAIAAhr");
	this.shape_8.setTransform(2.525,1.8);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{x:2.325,y:1.65}}]},1).to({state:[{t:this.shape_7,p:{x:2.325,y:1.65}}]},8).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7,p:{x:20.325,y:18.4}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(16).to({_off:false},0).wait(1).to({x:3.025,y:2.3},0).wait(1).to({x:3.925,y:3.15},0).wait(1).to({x:5.225,y:4.35},0).wait(1).to({x:6.825,y:5.85},0).wait(1).to({x:8.825,y:7.7},0).wait(1).to({x:11.125,y:9.85},0).wait(1).to({x:13.825,y:12.35},0).wait(1).to({x:16.925,y:15.2},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-11.6,37.8,36.9);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BTNCF();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117,140);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BTNAJ2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,737);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BTNa();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117,925);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BTNB();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,737);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BTND();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128,563);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.moon_w();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,72);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sun_w();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-531.2,-65.7,-398.3,32.4).s().p("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");
	this.shape.setTransform(279.1,31.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-500.1,-64.4,-367.2,33.7).s().p("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");
	this.shape_1.setTransform(279.1,31.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-469,-63.2,-336.1,34.9).s().p("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");
	this.shape_2.setTransform(279.1,31.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-437.9,-62,-304.9,36.1).s().p("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");
	this.shape_3.setTransform(279.1,31.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-406.8,-60.7,-273.8,37.4).s().p("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");
	this.shape_4.setTransform(279.1,31.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-375.7,-59.5,-242.7,38.6).s().p("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");
	this.shape_5.setTransform(279.1,31.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-344.6,-58.2,-211.6,39.9).s().p("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");
	this.shape_6.setTransform(279.1,31.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-313.5,-57,-180.5,41.1).s().p("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");
	this.shape_7.setTransform(279.1,31.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-282.3,-55.7,-149.4,42.4).s().p("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");
	this.shape_8.setTransform(279.1,31.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-251.2,-54.5,-118.3,43.6).s().p("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");
	this.shape_9.setTransform(279.1,31.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-220.1,-53.3,-87.2,44.8).s().p("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");
	this.shape_10.setTransform(279.1,31.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-189,-52,-56.1,46.1).s().p("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");
	this.shape_11.setTransform(279.1,31.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-157.9,-50.8,-25,47.3).s().p("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");
	this.shape_12.setTransform(279.1,31.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-126.8,-49.5,6.2,48.6).s().p("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");
	this.shape_13.setTransform(279.1,31.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-95.7,-48.3,37.3,49.8).s().p("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");
	this.shape_14.setTransform(279.1,31.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-64.6,-47.1,68.4,51).s().p("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");
	this.shape_15.setTransform(279.1,31.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-33.5,-45.8,99.5,52.3).s().p("AZeEbQgRgQgPgKQAtgbAOg8Ig3AAIAAhLIA7AAIAAglIgzAAIAAhIIE0AAIAABIIg1AAIAAAlIA+AAIAABLIg+AAIAACAIhSAAIAAiAIgtAAQgHAngRAjQgWAqgjAYQgJgLgSgQgAbMBfIArAAIAAglIgrAAgA5nEDQhGgbhDgWIAeg0IgTAAQgZA6g7AiQhCAnh8AUQgFgTgOgZQgOgagOgPQBTgKAzgRQAugPAZgZIivAAIAAhOIDUAAIjjgXIAAhRIDzAAIAAgXIi5AAIAAhOIC5AAIAAgVIjfAAIAAhSIByAAQgLgZgRgVIBUghQAfAkANAkIgQAHIB9AAQAZglAQgqIBmAYQgaApgMAOIB0AAIAABSIjgAAIAAAVIDBAAIAABOIjBAAIAAAXID8AAIAABRIkHAAIgDAXIDzAAIAABPIirAAQB3AlBOAiIgrBRQgogThQgggAXRE1IAApMIECAAIAADsIinAAIAAFggAYshtIBPgXIhPAAgAYsjAIBPgVIhPAAgALnEXQAigoALhJIA8ASIA1gTQALA7ABA1Ig7AHQACgegHg9QgQBTgeAhgEgrKAELQgOgYgOgOQBmgPAhggQAbgaADhDIiXAAIAAhYIJEAAIAABYIilAAIAABnQAAARAEADQADAEAQAAIAvgBQANAAAFgNQAFgMACgxQANALAaALQAXAJAVAFQgHBIgVAaQgVAagyAAIhIAAQg9AAgVgZQgVgWABg9IAAhoIhJAAQgGBjgkArQguA3h9AXQgFgRgPgZgEAphAE1IAAgZIiJAAIAAAZIhVAAIAAh4Ig0BCQgRgXgkglQgpBAg/AxQgKgOgTgTQgSgTgQgLQA+gtAohEIhahUQAPgyARhUIgiACIgIhSIA4gDQALhGADg7IBXAGQgIBAgIA3IAUgmIBTAAIAAAhIAcgCIAABOIgcACIgBAVQgGBtgfBSQArAnAUAYIAAiOIE5AAIAAEUgEAnYADKICJAAIAAhXIiJAAgEAj0gBcQgQBNgIAkIAhAeQAVhAAEhRgAQvE1IAAg7Ig1AWQgEgWgNgeQgMgegOgZIA2gTIkMALIgChOIBwgCIhfgTIAAhFIBfAAIAAgTIhjAAIAAj+IEdAAIAAD+IhoAAIAAASIBiAAIAABGIhiAAIAAARIBugEIgDBJIgeACQAbApAOArIAAjlIBRAAIAAkuIBbAAIAACAIB2AAIAABXIh2AAIAABXIBiAAIAAExIhZAAIAAgUIhhAAIAAAXgASDDKIBhAAIAAh1IhhAAgAOrhbIAuAAIAAhBIgUAxIgagKgANIhbIAtgbIgjAMQAAgXgKgsgAOriOQAKgfAIgkIAcgOIguAAgANljRQALAhAFAaIAAhJIgtAAgAEoE0IAAiCIj1AAIAAhZID1AAIAAg8Ii3AAIAAkxIHUAAIAAExIi9AAIAAA8ID+AAIAABZIj+AAIAACCgADNg0IEXAAIAAgiIkXAAgADNiiIEXAAIAAghIkXAAgAdsEzQgDgUgHgbQgJgcgJgSIBCABIAMkAIiqAAIAAjuIEHAAIAAHjQAAAjgHASQgIAVgSALQgTALgcAEQgTADghAAIgLAAgAdNhqIBRgaIhRAAgAdNjAIBRgVIhRAAgAp7EHQgTgagPgOQC0g5A0iNIjOAAIAAhfIDhAAIAChgIjJAAIAAhhIIBAAIAABhIjVAAIgBBgIDvAAIAABfIjYAAQBICSCwArQgQAPgTAbQgRAYgNAWQhWgag8g0Qg7gxgphKQhFCOi1A9QgIgRgTgYgAOQCoIA2gJQAUA+AFAuIg5AMQgDgwgTg/gA1ZAwIAAhlIJYAAIAABlgEAqHgAZQiSANgtAGQguAGgTAGQgMgqgTgrQAMgDAKgKQAIgJAMgSQANgTAYgyQAbg7AQg2IBiAZQgjBbg2BVIB0gHQgXglgWgfIBLglQAhAqAeAzQAcAzAPAoIhQAqQgJgagHgNgEgpdgAeIAAhVIFGAAIAABVgEgkCgBEIAAhSIlwAAIAABSIheAAIAAisIDlAAQgEgOgMgcIBggcQAUAjAMAjIDbAAIAACsg");
	this.shape_16.setTransform(279.1,31.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-2.3,-44.6,130.6,53.5).s().p("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");
	this.shape_17.setTransform(279.1,31.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],28.8,-43.3,161.7,54.8).s().p("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");
	this.shape_18.setTransform(279.1,31.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],59.9,-42.1,192.8,56).s().p("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");
	this.shape_19.setTransform(279.1,31.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],91,-40.8,223.9,57.3).s().p("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");
	this.shape_20.setTransform(279.1,31.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],122.1,-39.6,255,58.5).s().p("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");
	this.shape_21.setTransform(279.1,31.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],153.2,-38.4,286.2,59.7).s().p("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");
	this.shape_22.setTransform(279.1,31.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],184.3,-37.1,317.3,61).s().p("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");
	this.shape_23.setTransform(279.1,31.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],215.4,-35.9,348.4,62.2).s().p("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");
	this.shape_24.setTransform(279.1,31.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],246.5,-34.6,379.5,63.5).s().p("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");
	this.shape_25.setTransform(279.1,31.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],277.6,-33.4,410.6,64.7).s().p("AZeEbQgRgQgPgKQAtgbAOg8Ig3AAIAAhLIA7AAIAAglIgzAAIAAhIIE0AAIAABIIg1AAIAAAlIA+AAIAABLIg+AAIAACAIhSAAIAAiAIgtAAQgHAngRAjQgWAqgjAYQgJgLgSgQgAbMBfIArAAIAAglIgrAAgA5nEDQhGgbhDgWIAeg0IgTAAQgZA6g7AiQhCAnh8AUQgFgTgOgZQgOgagOgPQBTgKAzgRQAugPAZgZIivAAIAAhOIDUAAIjjgXIAAhRIDzAAIAAgXIi5AAIAAhOIC5AAIAAgVIjfAAIAAhSIByAAQgLgZgRgVIBUghQAfAkANAkIgQAHIB9AAQAZglAQgqIBmAYQgaApgMAOIB0AAIAABSIjgAAIAAAVIDBAAIAABOIjBAAIAAAXID8AAIAABRIkHAAIgDAXIDzAAIAABPIirAAQB3AlBOAiIgrBRQgogThQgggAXRE1IAApMIECAAIAADsIinAAIAAFggAYshtIBPgXIhPAAgAYsjAIBPgVIhPAAgALnEXQAigoALhJIA8ASIA1gTQALA7ABA1Ig7AHQACgegHg9QgQBTgeAhgEgrKAELQgOgYgOgOQBmgPAhggQAbgaADhDIiXAAIAAhYIJEAAIAABYIilAAIAABnQAAARAEADQADAEAQAAIAvgBQANAAAFgNQAFgMACgxQANALAaALQAXAJAVAFQgHBIgVAaQgVAagyAAIhIAAQg9AAgVgZQgVgWABg9IAAhoIhJAAQgGBjgkArQguA3h9AXQgFgRgPgZgEAphAE1IAAgZIiJAAIAAAZIhVAAIAAh4Ig0BCQgRgXgkglQgpBAg/AxQgKgOgTgTQgSgTgQgLQA+gtAohEIhahUQAPgyARhUIgiACIgIhSIA4gDQALhGADg7IBXAGQgIBAgIA3IAUgmIBTAAIAAAhIAcgCIAABOIgcACIgBAVQgGBtgfBSQArAnAUAYIAAiOIE5AAIAAEUgEAnYADKICJAAIAAhXIiJAAgEAj0gBcQgQBNgIAkIAhAeQAVhAAEhRgAQvE1IAAg7Ig1AWQgEgWgNgeQgMgegOgZIA2gTIkMALIgChOIBwgCIhfgTIAAhFIBfAAIAAgTIhjAAIAAj+IEdAAIAAD+IhoAAIAAASIBiAAIAABGIhiAAIAAARIBugEIgDBJIgeACQAbApAOArIAAjlIBRAAIAAkuIBbAAIAACAIB2AAIAABXIh2AAIAABXIBiAAIAAExIhZAAIAAgUIhhAAIAAAXgASDDKIBhAAIAAh1IhhAAgAOrhbIAuAAIAAhBIgUAxIgagKgANIhbIAtgbIgjAMQAAgXgKgsgAOriOQAKgfAIgkIAcgOIguAAgANljRQALAhAFAaIAAhJIgtAAgAEoE0IAAiCIj1AAIAAhZID1AAIAAg8Ii3AAIAAkxIHUAAIAAExIi9AAIAAA8ID+AAIAABZIj+AAIAACCgADNg0IEXAAIAAgiIkXAAgADNiiIEXAAIAAghIkXAAgAdsEzQgDgUgHgbQgJgcgJgSIBCABIAMkAIiqAAIAAjuIEHAAIAAHjQAAAjgHASQgIAVgSALQgTALgcAEQgTADghAAIgLAAgAdNhqIBRgaIhRAAgAdNjAIBRgVIhRAAgAp7EHQgTgagPgOQC0g5A0iNIjOAAIAAhfIDhAAIAChgIjJAAIAAhhIIBAAIAABhIjVAAIgBBgIDvAAIAABfIjYAAQBICSCwArQgQAPgTAbQgRAYgNAWQhWgag8g0Qg7gxgphKQhFCOi1A9QgIgRgTgYgAOQCoIA2gJQAUA+AFAuIg5AMQgDgwgTg/gA1ZAwIAAhlIJYAAIAABlgEAqHgAZQiSANgtAGQguAGgTAGQgMgqgTgrQAMgDAKgKQAIgJAMgSQANgTAYgyQAbg7AQg2IBiAZQgjBbg2BVIB0gHQgXglgWgfIBLglQAhAqAeAzQAcAzAPAoIhQAqQgJgagHgNgEgpdgAeIAAhVIFGAAIAABVgEgkCgBEIAAhSIlwAAIAABSIheAAIAAisIDlAAQgEgOgMgcIBggcQAUAjAMAjIDbAAIAACsg");
	this.shape_26.setTransform(279.1,31.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],308.8,-32.2,441.7,65.9).s().p("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");
	this.shape_27.setTransform(279.1,31.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],339.9,-30.9,472.8,67.2).s().p("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");
	this.shape_28.setTransform(279.1,31.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],371,-29.7,503.9,68.4).s().p("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");
	this.shape_29.setTransform(279.1,31.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).wait(30));

	// _圖層_1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E1C088").s().p("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");
	this.shape_30.setTransform(279.1,57.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,558.2,115.2);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.men();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,500);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.btn();
	this.instance.setTransform(197,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(197,-74,257,258);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.moon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,64,73), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sun();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,60,60), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.win2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,618,119), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.talk_w();

	this.instance_1 = new lib.talk();
	this.instance_1.setTransform(0,0,0.9149,0.9149);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283,215);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATCLQAkgeAMg2IguAAIAAgjIAzAAIACguIgsAAIAAgjIAsAAIAAguIgwAGIgIgiQBLgGA5gSIANAhIg0ANIAAA0IAtAAIAAAjIgtAAIgCAuIAxAAIAAAjIg1AAQgOBGgsAngADqCiIAAhQIhFAAIAAgjIBFAAIAAggIg4AAIAAghIA4AAIAAgeIg4AAIAAgiIA4AAIAAgfIg/AAIAAgkICgAAIAAAkIg8AAIAAAfIA1AAIAAAiIg1AAIAAAeIA1AAIAAAhIg1AAIAAAgIA/AAIAAAjIg/AAIAABQgAkjChIAAiDIgfAhIgMgmQA1g1AUg1IhBAAIAAgjIAkAAIgQglIAigKQAKAYAHAXIAeAAIAAAfQgLAhgSAhIAAABQAVAOAQAQIAAgYIDGAAIAAAcIjDAAIgTAdIgVgXIAACLgAjhCaIAAgfIA2AAIgIgUIgXAAIAAhLICqAAIAABLIgXAAIgJAUIA1AAIAAAfgAiIB7IAlAAIAJgUIg2AAgAiqBKIBpAAIAAgSIhpAAgAjRgXIAAhyIAvAAIAAgWIAhAAIAAAWIAZAAIAAgWIAhAAIAAAWIAvAAIAABygAhMg1IAUAAIAAgQIgUAAgAh/g1IAVAAIAAgQIgVAAgAizg1IAWAAIAAgQIgWAAgAhMhdIAUAAIAAgQIgUAAgAh/hdIAVAAIAAgQIgVAAgAizhdIAWAAIAAgQIgWAAg");
	this.shape.setTransform(36.7,26.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(7));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhxCcIAAk3IDjAAIAAE2IglAAIAAgXIiZAAIAAAYgAhMBgICZAAIAAhfIiZAAgAhMghICZAAIAAhWIiZAAg");
	this.shape_1.setTransform(89.825,27.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AieASIAAgjIE9AAIAAAjg");
	this.shape_2.setTransform(89.475,26.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AidCBIAAglIE7AAIAAAlgAh8hbIAAglID6AAIAAAlg");
	this.shape_3.setTransform(89.475,26.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AieCOIAAgkIE9AAIAAAkgAhtANIAAgjIDbAAIAAAjgAiFhqIAAgjIEMAAIAAAjg");
	this.shape_4.setTransform(89.5,26.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABvCWIAAgRIjdAAIAAARIgmAAIAAkrIEoAAIAAErgAhuBlIDdAAIAAjZIg4AAIAAB6QAAAJAMAAIAkAAIAAAhIgvAAQglAAAAghIAAiDIgnAAIAABGQgBBKg7AjIgcgZQA0gaABg6IAAhGIg3AAg");
	this.shape_5.setTransform(89.5,27.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AicCTIAAgkIBNAAIAYhxIhGAAIAAgkIBNAAIAPhIIhuAAIAAgkIEfAAIAAAkIiNAAIgOBIIByAAIAACVIA2AAIAAAkgAgrBvIBtAAIAAhxIhVAAg");
	this.shape_6.setTransform(89.525,26.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAkALIAfgTQA6BVAdA8IggAXQgihFg0hQgAidCDQA+g0AchVIAjANQgjBig6A0gAibgkIAAgjIE4AAIAAAjgAgziHIAagYQAnAbAcAcIgaAbQgWgagtggg");
	this.shape_7.setTransform(89.4,26.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.3,10.1,102.10000000000001,32.8);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.Lat();
	this.instance.setTransform(409,1002);

	this.instance_1 = new lib.black();
	this.instance_1.setTransform(47,1003);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_3
	this.instance_2 = new lib.bg();
	this.instance_2.setTransform(-3,665);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,665,640,695);


(lib.tvc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CF
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1C088").s().p("AmXJcQjdjIAAmiQAAk9CmjLQC0jdE6AAQEOAACUCQQCVCPAQC3Ii9AAQgfiLhfhRQhfhRirAAQjPAAiACVQiACVAAE0QAAD7B0CdQB0CdDkAAQDTAABvilQA6hXAdiOIC9AAQgZDjiNCZQipC5kfAAQj2AAioiYg");
	this.shape.setTransform(1611.525,662.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1C088").s().p("AhnLNIoK2ZIDXAAIGbTEIGXzEIDaAAIoLWZg");
	this.shape_1.setTransform(1474.275,662.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1C088").s().p("AhhLNIAAzuInkAAIAAirISLAAIAACrInkAAIAATug");
	this.shape_2.setTransform(1345.725,662.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1282.4,578.2,404.0999999999999,204);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1C088").s().p("AlPI8QiQiVABlhQAAkEA/i1QB6lcFDAAQDrAABdB6QBcB5gBCBIitAAQgQhTgigvQhAhYiAAAQiTAAhXCJQhXCIgKD+QA9hZBcgsQBUgnBmAAQCwAACDBwQCCBvAADfQAAC+h7CUQh9CSjlAAQjDAAiOiUgAi9AYQhVBLAACYQAACEBOBbQBNBaCJAAQCLAABFhdQBEhdAAh/QAAhsg+hgQg9hhiiAAQhxAAhVBKg");
	this.shape.setTransform(1339.8,665.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1282.4,578.2,115.39999999999986,204);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1C088").s().p("ABzK9IAAlWIpkAAIAAirIKAt4ICVAAIAAOKIDOAAIAACZIjOAAIAAFWgAlPDOIG/AAIAAp6g");
	this.shape.setTransform(1339.2,664.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1282.4,578.2,115.39999999999986,204);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1C088").s().p("AnjK+QAKi1BBiGQBBiFC8huIC7hsQB+hJAzgzQBQhRAAhpQAAh7hJhHQhKhIh5AAQi0AAhGCIQglBLgDCBIizAAQACi2BBhzQBzjMEfAAQDwAABwCCQBuCCAACfQAACoh2B2QhEBGixBiIiFBLQhfA0g3AwQhiBVgZBoIL7AAIAACmg");
	this.shape.setTransform(1338.95,663.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1282.4,578.2,115.39999999999986,204);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1C088").s().p("AlNJhQiEhggQjIIC3AAQARCXB7A5QA+AeBSAAQCbAABMhkQBLhjAAh5QAAiThZhQQhahPh8AAQhbAAhAAjQhCAjgtA+IiZgJIBrrwILVAAIAACqIpSAAIg7GFQAxglAsgTQBOghBlAAQDBABCFB7QCGB8AAC+QAADHh5CXQh8CXkMAAQiqAAiDhgg");
	this.shape.setTransform(1338.95,667.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1282.4,578.2,115.39999999999986,204);


(lib.page_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1C088").s().p("ABHK4IAAvdIlIAAIAAiHQC+gSBKgrQBLgsAmiiICKAAIAAVvg");
	this.shape.setTransform(1329.325,664.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(23).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1282.4,578.2,115.39999999999986,204);


(lib.p3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1C088").s().p("AlGJrQiAhvgVi1IEKggQANBlA3A1QA4A2BPAAQBUAAA7hAQA5hBAAhtQAAhog3g8Qg4g9hQABQg0gBhJAVIAejfQBvADA6gyQA7g0AAhVQAAhIgrgrQgrgrhGgBQhHAAgyAyQgxAwgLBeIj9grQAaiCA2hNQA1hOBfgsQBfgtB2AAQDKAAB6CBQBkBpAACFQAAC8jOBxQB7AbBKBaQBKBcAACCQAAC8iKCFQiKCFjMAAQjCAAiAhwg");
	this.shape.setTransform(1339.425,690.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1282.4,578.2,115.39999999999986,227.39999999999998);


(lib.backBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Back();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvvPwQmimiAApOQAApNGimiQGhmhJOAAQJPAAGhGhQGiGiAAJNQAAJOmiGiQmhGipPAAQpOAAmhmig");
	this.shape.setTransform(44.55,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-132,285.1,285.1);


(lib.backgr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg_w();
	this.instance.setTransform(12,12,0.8,0.8);

	this.instance_1 = new lib.bgloop();
	this.instance_1.setTransform(11.95,11.95,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12,12,1600,1600);


(lib.winds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.win_w();
	this.instance.setTransform(0,-10);

	this.instance_1 = new lib.win();
	this.instance_1.setTransform(0,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer_2
	this.instance_2 = new lib.men_w();
	this.instance_2.setTransform(88,49);

	this.instance_3 = new lib.Symbol16("synched",0);
	this.instance_3.setTransform(253,297,1,1,0,0,0,166,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10,495,557);


(lib.TimeMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// weekday_mc
	this.weekday_mc = new lib.Symbol6();
	this.weekday_mc.name = "weekday_mc";
	this.weekday_mc.setTransform(428.75,26.5,1,1,0,0,0,54.6,26.5);

	this.timeline.addTween(cjs.Tween.get(this.weekday_mc).wait(1));

	// date_txt
	this.date_txt = new cjs.Text("2022/08/02 ", "bold 40px 'Arial'", "#FFFFFF");
	this.date_txt.name = "date_txt";
	this.date_txt.lineHeight = 47;
	this.date_txt.lineWidth = 214;
	this.date_txt.parent = this;
	this.date_txt.setTransform(152.1,9);

	this.timeline.addTween(cjs.Tween.get(this.date_txt).wait(1));

	// 冒號
	this.text = new cjs.Text(":", "bold 200px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 225;
	this.text.lineWidth = 142;
	this.text.parent = this;
	this.text.setTransform(317.1,33);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// clock_txt
	this.clock_txt = new cjs.Text("08 00", "bold 200px 'Arial'", "#FFFFFF");
	this.clock_txt.name = "clock_txt";
	this.clock_txt.textAlign = "center";
	this.clock_txt.lineHeight = 225;
	this.clock_txt.lineWidth = 638;
	this.clock_txt.parent = this;
	this.clock_txt.setTransform(321.1,47);

	this.timeline.addTween(cjs.Tween.get(this.clock_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TimeMC, new cjs.Rectangle(0,7,642.2,366.9), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.Symbol20("synched",0);
	this.instance.setTransform(126.05,124.4,0.8,0.8,0,0,0,31,31);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:31.1,scaleX:0.9,scaleY:0.9,guide:{path:[126.1,124.5,18.8,104.5,10.1,71.4,10.5,52,50.3,39.6,69.5,34.7,88.9,30.5]},alpha:1},19,cjs.Ease.get(0.5)).to({regY:31.1,scaleX:1,scaleY:1,guide:{path:[89,30.3,194.2,7.8,303,6.9]}},19).to({regY:31,scaleX:0.9,scaleY:0.9,guide:{path:[303.1,6.9,421.6,5.9,544.4,30.7,546.6,31.3,548.7,31.9]}},20).to({regX:31,scaleX:0.8,scaleY:0.8,guide:{path:[548.7,32,583.3,41.8,599.6,51.6,615.9,61.4,613.9,71.2,604,110.3,452.7,136.7]},alpha:0},21,cjs.Ease.get(-0.5)).to({_off:true},1).wait(135));

	// Layer_3
	this.instance_1 = new lib.Symbol21("synched",0);
	this.instance_1.setTransform(140.85,127,0.8,0.8,0,0,0,31.6,36);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(101).to({_off:false},0).to({scaleX:0.9,scaleY:0.9,guide:{path:[140.8,127.1,19.3,106.7,10.1,71.4,10.4,52,50.2,39.6,74.9,33.3,99.9,28.2]},alpha:1},19,cjs.Ease.get(0.5)).to({regX:31.5,scaleX:1,scaleY:1,guide:{path:[100.1,28.1,199.7,7.8,302.5,6.9]}},19).to({regX:31.6,scaleX:0.9,scaleY:0.9,guide:{path:[302.5,6.9,413.6,5.9,528.3,27.5]}},20).to({scaleX:0.8,scaleY:0.8,guide:{path:[528.4,27.6,536.4,29.1,544.4,30.7,581.2,40.9,598.6,51,615.9,61.1,613.9,71.1,604,110.3,452.5,136.7]},alpha:0},21,cjs.Ease.get(-0.5)).to({_off:true},1).wait(34));

	// Layer_1
	this.instance_2 = new lib.win2_w();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(215));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-29.1,657.5,194.9);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol7("single",1);
	this.instance.setTransform(45.45,187.5,0.32,0.32,0,0,0,45.5,187.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,x:45.5,y:187.55},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:187.5},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-9.3,295.8,225.8);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_5
	this.instance = new lib.Symbol28("synched",0);
	this.instance.setTransform(-1.25,8.75,1,1,0,0,0,58.5,70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.7,-61.2,117,140);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol7("single",0);
	this.instance.setTransform(45.45,187.5,0.32,0.32,0,0,0,45.5,187.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,x:45.5,y:187.55},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:187.5},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-9.3,297.09999999999997,221.60000000000002);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Symbol13();
	this.instance.setTransform(646.35,28.7,0.8,0.8,0,0,0,30,30.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:30,scaleX:1,scaleY:1,guide:{path:[646.3,28.6,742,5.7,749.7,-25,751.4,-33.2,740.4,-41.3,729.4,-49.5,705.7,-57.7]},alpha:1},19).to({guide:{path:[705.8,-57.7,694.5,-61.6,680.3,-65.5,561.3,-89.6,446.1,-89.4]}},20).to({guide:{path:[446.1,-89.4,314.5,-89.2,188.1,-57.2]}},20).to({regY:29.9,scaleX:0.8,scaleY:0.7333,guide:{path:[188,-57.2,187,-56.9,186.1,-56.7,146.3,-44.3,145.9,-24.7,154.4,7.3,256.3,27.1]},alpha:0},21).to({_off:true},1).wait(114));

	// Layer_2
	this.instance_1 = new lib.Symbol14();
	this.instance_1.setTransform(638.4,30.5,0.8356,0.8356,0,0,0,32,36.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96).to({_off:false},0).to({scaleX:1,scaleY:1,guide:{path:[638.4,30.5,741.6,6.9,749.7,-25,751.8,-35.1,734.4,-45.3,717,-55.4,680.2,-65.5,657.6,-70.1,635.2,-73.8]},alpha:1},19,cjs.Ease.get(0.5)).to({guide:{path:[635.3,-73.8,523.5,-92.2,415.3,-88.9]}},20).to({guide:{path:[415.2,-89,300.8,-85.5,190.4,-57.8]}},20).to({scaleX:0.7548,scaleY:0.7548,guide:{path:[190.3,-57.8,188.2,-57.3,186,-56.7,146.3,-44.3,145.9,-24.8,154.6,8.5,263.9,28.5]},alpha:0},21,cjs.Ease.get(-0.5)).to({_off:true},1).wait(18));

	// Layer_1
	this.instance_2 = new lib.Symbol9();
	this.instance_2.setTransform(447,-36.5,1,1,0,0,0,309,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(195));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(116.5,-126,661.5,187);


(lib.Symbol5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_1
	this.instance = new lib.Symbol27("synched",0);
	this.instance.setTransform(-3.75,-64.35,1,1,0,0,0,77.1,293.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0.7746,y:-64.4},7,cjs.Ease.get(1)).to({rotation:0,y:-64.35},7,cjs.Ease.get(-1)).to({regY:293.7,rotation:-0.9495,y:-64.5},7,cjs.Ease.get(1)).to({regY:293.8,rotation:0,y:-64.35},8,cjs.Ease.get(-1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.8,-359.2,137.3,739.3);


(lib.Symbol4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_5
	this.instance = new lib.Symbol25("synched",0);
	this.instance.setTransform(7.05,24.95,1,1,0,0,0,78.5,392);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.0002,x:7.1,y:25},7,cjs.Ease.get(1)).to({rotation:0,x:7.05,y:24.95},7,cjs.Ease.get(-1)).to({regY:391.9,rotation:1.0002,x:7.1,y:24.9},7,cjs.Ease.get(1)).to({regY:392,rotation:0,x:7.05,y:24.95},8,cjs.Ease.get(-1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-368.3,142.7,739.7);


(lib.Symbol3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_5
	this.instance = new lib.Symbol26("synched",0);
	this.instance.setTransform(-4.05,-394.4,1,1,0,0,0,84.9,199.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-0.7073},7,cjs.Ease.get(1)).to({rotation:0},7,cjs.Ease.get(-1)).to({rotation:0.9495,x:-4},8,cjs.Ease.get(1)).to({rotation:0,x:-4.05},7,cjs.Ease.get(-1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.9,-594.9,137.9,927.3);


(lib.Symbol2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_5
	this.instance = new lib.Symbol24("synched",0);
	this.instance.setTransform(0.6,-2.3,1,1,0,0,0,79.5,247.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:79.4,rotation:-1.1838,x:0.55},7,cjs.Ease.get(1)).to({regX:79.5,rotation:0,x:0.6},8,cjs.Ease.get(-1)).to({rotation:0.7073,x:0.65},7,cjs.Ease.get(1)).to({rotation:0,x:0.6},7,cjs.Ease.get(-1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.9,-251,139.60000000000002,565.6);


(lib.videoShowBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol32();
	this.instance.setTransform(105.4,95.5,1,1,0,0,0,13.8,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol11();
	this.instance_1.setTransform(119.05,115.05,1,1,0,0,0,17,19);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AptJuQkCkCgBlsQABlsECkCQEBkCFsAAQFsAAECECQECECABFsQgBFskCECQkCEDlsgBQlsABkBkDg");
	this.shape.setTransform(98.05,114.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,26.1,176.1,176.1);


(lib.Symbol13_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Symbol5("single",23);
	this.instance_1.setTransform(-272,-626,1,1,0,0,0,48,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13_1, new cjs.Rectangle(962.4,-101.8,115.39999999999998,204), null);


(lib.Symbol12_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Symbol2("single",23);
	this.instance_1.setTransform(-252,-622,1,1,0,0,0,68,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12_1, new cjs.Rectangle(962.4,-101.8,115.39999999999998,204), null);


(lib.Symbol11_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Symbol4("synched",23);
	this.instance_1.setTransform(-210,-570,1,1,0,0,0,110,110);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11_1, new cjs.Rectangle(962.4,-101.8,115.39999999999998,204), null);


(lib.Symbol10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.p3("single",23);
	this.instance_1.setTransform(-244,-626,1,1,0,0,0,76,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10_1, new cjs.Rectangle(962.4,-101.8,115.39999999999998,227.39999999999998), null);


(lib.Symbol9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Symbol3("single",0);
	this.instance_1.setTransform(-276,-636,1,1,0,0,0,44,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9_1, new cjs.Rectangle(962.4,-101.8,115.39999999999998,204), null);


(lib.Symbol7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.page_01("synched",23);
	this.instance_2.setTransform(-254,-620,1,1,0,0,0,66,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7_1, new cjs.Rectangle(962.4,-101.8,115.39999999999998,204), null);


(lib.rightBotBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol2_1();
	this.instance.setTransform(37.45,-225.1,1,1,0,0,0,29,27);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ao+I/QjujuAAlRQAAlQDujuQDujuFQAAQFRAADuDuQDuDuAAFQQAAFRjuDuQjuDulRAAQlQAAjujug");
	this.shape.setTransform(-1.725,-3.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol29();
	this.instance_1.setTransform(-4,9.5,1,1,0,0,180,56.7,56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-502.1,162.6,580.1);


(lib.midRightBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol4_1();
	this.instance.setTransform(34.45,-287.25,1,1,0,0,0,19.5,19);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ao+I/QjujuAAlRQAAlQDujuQDujuFQAAQFRAADuDuQDuDuAAFQQAAFRjuDuQjuDulRAAQlQAAjujug");
	this.shape.setTransform(-1.725,-3.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol29();
	this.instance_1.setTransform(-1.2,8.1,1,1,0,0,180,56.7,56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-673.3,162.6,751.3);


(lib.leftTopBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.coff();
	this.instance.setTransform(-22,-71);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("EgqRBZ+MAAAiz7MBUaAAAMAAABIYIAJAAMAAABGYIgCAAMAAAAlLg");
	this.shape.setTransform(2.2,-356.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol15("synched",0);
	this.instance_1.setTransform(-1.7,-0.35,0.8,0.8,0,0,0,317,43.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268.3,-932.2,541.1,1151.6000000000001);


(lib.leftMidBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol5_1();
	this.instance.setTransform(106.05,-224.4,1,1,0,0,0,88,88);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ao+I/QjujuAAlRQAAlQDujuQDujuFQAAQFRAADuDuQDuDuAAFQQAAFRjuDuQjuDulRAAQlQAAjujug");
	this.shape.setTransform(-1.725,-3.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol29();
	this.instance_1.setTransform(3.45,7.5,1,1,0,0,0,56.7,56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-670.5,162.6,748.5);


(lib.leftBotBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol3_1();
	this.instance.setTransform(120,177.05,1,1,0,0,0,86,75);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ao+I/QjujuAAlRQAAlQDujuQDujuFQAAQFRAADuDuQDuDuAAFQQAAFRjuDuQjuDulRAAQlQAAjujug");
	this.shape.setTransform(13.625,371.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol29();
	this.instance_1.setTransform(3.6,372.85,1,1,0,0,0,56.7,56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.7,-491.5,162.7,944);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol10();
	this.instance.setTransform(476.5,39.5,1,1,0,0,0,141.5,105.5);

	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(359.4,-44.3,1,1,0,0,0,24,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer_1
	this.instance_2 = new lib.Symbol19();
	this.instance_2.setTransform(309,179,1,1,0,0,0,309,179);

	this.instance_3 = new lib.Symbol8();
	this.instance_3.setTransform(171,155.5,1,1,0,0,0,309,59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,618,149.2);


// stage content:
(lib._1Pages_Georgia_s = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,10,24,25,34,48,49,58,72,73,82,96,97,106,120,121,130,144,145,154,168];
	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		const sendEng = () => {
			window.oneadMaterial.sendEngEvent({
		      buttonIndex: 'banner interacted'
		    })
			document.removeEventListener('click' ,sendEng)
		}
		
		document.addEventListener('click' ,sendEng)
		
		/* Click to show video
		說明:
		點擊後影片出現
		*/
		
		const ONEAD_VIDEO_TRIGGER = () => {
			window.oneadMaterial.mirfPlayDone({
				playBtnClicked: true
			})
		}
		this.videoShowBtn.addEventListener('click', ONEAD_VIDEO_TRIGGER)
		
		// go to certain frame and send banner interaction event
		// 把 __frame__ 改成要去的影格數
		// 把__bannerNum__改成該影格數的 banner 編號
		if (!this.leftTopBtn_isListening) {
		  const gotoAndSendInteraction = () => {
		    if(this.bannerActive) {
				  return
			  }
		    const videoTrigger = () => {
		      const __show__ = 0
		      return __show__ ? true : false
		    }
		    window.oneadMaterial.mirfPlayDone({
		      playBtnClicked: videoTrigger()
		    })
		    if(videoTrigger()) {
		      window.oneadMaterial.sendEngEvent({
		      buttonIndex: `video_Interaction`
		      })
		    }
		    this.gotoAndPlay(2)
		    this.bannerActive = true
		    window.oneadMaterial.sendEngEvent({
		      buttonIndex: `banner_${1}_Interaction`
		    })
		  }
		  this.leftTopBtn.addEventListener('click', gotoAndSendInteraction)
		  this.leftTopBtn_isListening = true
		}
		
		// go to certain frame and send banner interaction event
		// 把 __frame__ 改成要去的影格數
		// 把__bannerNum__改成該影格數的 banner 編號
		if (!this.leftMidBtn_isListening) {
		  const gotoAndSendInteraction = () => {
		    if(this.bannerActive) {
				  return
			  }
		    const videoTrigger = () => {
		      const __show__ = 0
		      return __show__ ? true : false
		    }
		    window.oneadMaterial.mirfPlayDone({
		      playBtnClicked: videoTrigger()
		    })
		    if(videoTrigger()) {
		      window.oneadMaterial.sendEngEvent({
		      buttonIndex: `video_Interaction`
		      })
		    }
		    this.gotoAndPlay(25)
		    this.bannerActive = true
		    window.oneadMaterial.sendEngEvent({
		      buttonIndex: `banner_${2}_Interaction`
		    })
		  }
		  this.leftMidBtn.addEventListener('click', gotoAndSendInteraction)
		  this.leftMidBtn_isListening = true
		}
		
		// go to certain frame and send banner interaction event
		// 把 __frame__ 改成要去的影格數
		// 把__bannerNum__改成該影格數的 banner 編號
		if (!this.leftBotBtn_isListening) {
		  const gotoAndSendInteraction = () => {
		    if(this.bannerActive) {
				  return
			  }
		    const videoTrigger = () => {
		      const __show__ = 0
		      return __show__ ? true : false
		    }
		    window.oneadMaterial.mirfPlayDone({
		      playBtnClicked: videoTrigger()
		    })
		    if(videoTrigger()) {
		      window.oneadMaterial.sendEngEvent({
		      buttonIndex: `video_Interaction`
		      })
		    }
		    this.gotoAndPlay(50)
		    this.bannerActive = true
		    window.oneadMaterial.sendEngEvent({
		      buttonIndex: `banner_${3}_Interaction`
		    })
		  }
		  this.leftBotBtn.addEventListener('click', gotoAndSendInteraction)
		  this.leftBotBtn_isListening = true
		}
		
		// go to certain frame and send banner interaction event
		// 把 __frame__ 改成要去的影格數
		// 把__bannerNum__改成該影格數的 banner 編號
		if (!this.midRightBtn_isListening) {
		  const gotoAndSendInteraction = () => {
		    if(this.bannerActive) {
				  return
			  }
		    const videoTrigger = () => {
		      const __show__ = 0
		      return __show__ ? true : false
		    }
		    window.oneadMaterial.mirfPlayDone({
		      playBtnClicked: videoTrigger()
		    })
		    if(videoTrigger()) {
		      window.oneadMaterial.sendEngEvent({
		      buttonIndex: `video_Interaction`
		      })
		    }
		    this.gotoAndPlay(98)
		    this.bannerActive = true
		    window.oneadMaterial.sendEngEvent({
		      buttonIndex: `banner_${5}_Interaction`
		    })
		  }
		  this.midRightBtn.addEventListener('click', gotoAndSendInteraction)
		  this.midRightBtn_isListening = true
		}
		
		// go to certain frame and send banner interaction event
		// 把 __frame__ 改成要去的影格數
		// 把__bannerNum__改成該影格數的 banner 編號
		if (!this.rightBotBtn_isListening) {
		  const gotoAndSendInteraction = () => {
		    if(this.bannerActive) {
				  return
			  }
		    const videoTrigger = () => {
		      const __show__ = 0
		      return __show__ ? true : false
		    }
		    window.oneadMaterial.mirfPlayDone({
		      playBtnClicked: videoTrigger()
		    })
		    if(videoTrigger()) {
		      window.oneadMaterial.sendEngEvent({
		      buttonIndex: `video_Interaction`
		      })
		    }
		    this.gotoAndPlay(122)
		    this.bannerActive = true
		    window.oneadMaterial.sendEngEvent({
		      buttonIndex: `banner_${6}_Interaction`
		    })
		  }
		  this.rightBotBtn.addEventListener('click', gotoAndSendInteraction)
		  this.rightBotBtn_isListening = true
		}
		
		// go to certain frame and send banner interaction event
		// 把 __frame__ 改成要去的影格數
		// 把__bannerNum__改成該影格數的 banner 編號
		if (!this.videoShowBtn_isListening) {
		  const gotoAndSendInteraction = () => {
		    if(this.bannerActive) {
				  return
			  }
		    const videoTrigger = () => {
		      const __show__ = 0
		      return __show__ ? true : false
		    }
		    window.oneadMaterial.mirfPlayDone({
		      playBtnClicked: videoTrigger()
		    })
		    if(videoTrigger()) {
		      window.oneadMaterial.sendEngEvent({
		      buttonIndex: `video_Interaction`
		      })
		    }
		    this.gotoAndPlay(146)
		    this.bannerActive = true
		    window.oneadMaterial.sendEngEvent({
		      buttonIndex: `banner_${7}_Interaction`
		    })
			showVideo()
		  }
		  this.videoShowBtn.addEventListener('click', gotoAndSendInteraction)
		  this.videoShowBtn_isListening = true
		}
		
		// 時鐘互動區塊
		(() => {
			var bg_mc = this.bg_mc;
			var frame_mc = this.frame_mc;
			var ring_mc = this.ring_mc;
			var logo_mc = this.logo_mc;
			var time_mc = this.time_mc;
			
			this.bg_mc.stop();
			this.frame_mc.stop();
			this.ring_mc.stop();
			this.logo_mc.stop();
			this.time_mc.weekday_mc.stop();
			
			getTime();
			setInterval(getTime, 1000);
			
			const urlParams = new URLSearchParams(window.location.search);
			const rotateTime = urlParams.has('mockRotate') ? Number(urlParams.get('mockRotate')) : 4000;
			
			createjs.Tween.get(bg_mc, { loop: true }).to({ rotation: 360 }, rotateTime, createjs.Ease.linear);
		
			function getTime() {
				const d = new Date();
				const m = d.getMinutes();
				const h = d.getHours();
				time_mc.clock_txt.text = ("0" + h).substr(-2) + " " + ("0" + m).substr(-2);
				
				const year = d.getFullYear();
				const month = d.getMonth() + 1;
				const date = d.getDate();
				time_mc.date_txt.text = year + '/' + ('0' + month).substr(-2) + "/" + ("0" + date).substr(-2);
				
				time_mc.weekday_mc.gotoAndStop(d.getDay());
				
				const urlParams = new URLSearchParams(window.location.search);
				const dayFrame = urlParams.has('mockDay') ? Number(urlParams.get('mockDay')) : (h > 5 && h < 19 ? 0 : 1);
				
				bg_mc.gotoAndStop(dayFrame);
				frame_mc.gotoAndStop(dayFrame);
				ring_mc.gotoAndStop(dayFrame);
				logo_mc.gotoAndStop(dayFrame);
			}
		})();
	}
	this.frame_10 = function() {
		// hide video
		// 把 __frame__ 改成要去的影格數
		if (!this.backBtn_isListening) {
		  const hideVideoAndGoBack = () => {
		    const videoTrigger = () => {
		      const show = 0
		      return show ? true : false
		    }
		    window.oneadMaterial.mirfPlayDone({
		      playBtnClicked: videoTrigger()
		    })
		    this.gotoAndStop(1)
		    this.bannerActive = false
		  }
		  this.backBtn.addEventListener('click', hideVideoAndGoBack)
		  this.backBtn_isListening = true
		}
	}
	this.frame_24 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		// visit banner1 link
		// 導外1
		if (!this.movieClip_1_isListening) {
		  const ONEAD_VISIT_BANNER_LINK_1 = () => {
		    window.oneadMaterial.sendClickLandingPage({
		      bannerInfo: '',
		      url: 0,
		      bannerIndex: 0,
		      eng: 'banner 1 clicked'
		    })
		  }
		  this.movieClip_1.addEventListener('click', ONEAD_VISIT_BANNER_LINK_1)
		  this.movieClip_1_isListening = true
		}
	}
	this.frame_25 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.leftBotBtn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(26);
		}
	}
	this.frame_34 = function() {
		// hide video
		// 把 __frame__ 改成要去的影格數
		if (!this.backBtn_isListening) {
		  const hideVideoAndGoBack = () => {
		    const videoTrigger = () => {
		      const show = 0
		      return show ? true : false
		    }
		    window.oneadMaterial.mirfPlayDone({
		      playBtnClicked: videoTrigger()
		    })
		    this.gotoAndStop(1)
		    this.bannerActive = false
		  }
		  this.backBtn.addEventListener('click', hideVideoAndGoBack)
		  this.backBtn_isListening = true
		}
	}
	this.frame_48 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Banner link 2
		第二個Banner導外點擊
		
		說明:
		點擊後會導外到Banner的第二個連結
		*/
		
		const ONEAD_MULTIPLE_BANNER_TRIGGER_2 = () => {
			window.oneadMaterial.sendClickLandingPage({
				url: 1,
				bannerIndex: 1,
				eng: 'banner 2 clicked'
			})
			this.movieClip_2.removeEventListener('click', ONEAD_MULTIPLE_BANNER_TRIGGER_2)
		}
		this.movieClip_2.addEventListener('click', ONEAD_MULTIPLE_BANNER_TRIGGER_2)
	}
	this.frame_49 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.leftBotBtn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(50);
		}
	}
	this.frame_58 = function() {
		// hide video
		// 把 __frame__ 改成要去的影格數
		if (!this.backBtn_isListening) {
		  const hideVideoAndGoBack = () => {
		    const videoTrigger = () => {
		      const show = 0
		      return show ? true : false
		    }
		    window.oneadMaterial.mirfPlayDone({
		      playBtnClicked: videoTrigger()
		    })
		    this.gotoAndStop(1)
		    this.bannerActive = false
		  }
		  this.backBtn.addEventListener('click', hideVideoAndGoBack)
		  this.backBtn_isListening = true
		}
	}
	this.frame_72 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Banner link 3
		第三個Banner導外點擊
		
		說明:
		點擊後會導外到Banner的第三個連結
		*/
		
		const ONEAD_MULTIPLE_BANNER_TRIGGER_3 = () => {
			window.oneadMaterial.sendClickLandingPage({
				url: 2,
				bannerIndex: 2,
				eng: 'banner 3 clicked'
			})
			this.movieClip_3.removeEventListener('click', ONEAD_MULTIPLE_BANNER_TRIGGER_3)
		}
		this.movieClip_3.addEventListener('click', ONEAD_MULTIPLE_BANNER_TRIGGER_3)
	}
	this.frame_73 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.rightTopBtn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(74);
		}
	}
	this.frame_82 = function() {
		// hide video
		// 把 __frame__ 改成要去的影格數
		if (!this.backBtn_isListening) {
		  const hideVideoAndGoBack = () => {
		    const videoTrigger = () => {
		      const show = 0
		      return show ? true : false
		    }
		    window.oneadMaterial.mirfPlayDone({
		      playBtnClicked: videoTrigger()
		    })
		    this.gotoAndStop(1)
		    this.bannerActive = false
		  }
		  this.backBtn.addEventListener('click', hideVideoAndGoBack)
		  this.backBtn_isListening = true
		}
	}
	this.frame_96 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Banner link 4
		第四個Banner導外點擊
		
		說明:
		點擊後會導外到Banner的第四個連結
		*/
		
		const ONEAD_MULTIPLE_BANNER_TRIGGER_4 = () => {
			window.oneadMaterial.sendClickLandingPage({
				url: 3,
				bannerIndex: 3,
				eng: 'banner 4 clicked'
			})
			this.movieClip_4.removeEventListener('click', ONEAD_MULTIPLE_BANNER_TRIGGER_4)
		}
		this.movieClip_4.addEventListener('click', ONEAD_MULTIPLE_BANNER_TRIGGER_4)
	}
	this.frame_97 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.rightTopBtn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(98);
		}
	}
	this.frame_106 = function() {
		// hide video
		// 把 __frame__ 改成要去的影格數
		if (!this.backBtn_isListening) {
		  const hideVideoAndGoBack = () => {
		    const videoTrigger = () => {
		      const show = 0
		      return show ? true : false
		    }
		    window.oneadMaterial.mirfPlayDone({
		      playBtnClicked: videoTrigger()
		    })
		    this.gotoAndStop(1)
		    this.bannerActive = false
		  }
		  this.backBtn.addEventListener('click', hideVideoAndGoBack)
		  this.backBtn_isListening = true
		}
	}
	this.frame_120 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Banner link 5
		第五個Banner導外點擊
		
		說明:
		點擊後會導外到Banner的第五個連結
		*/
		
		const ONEAD_MULTIPLE_BANNER_TRIGGER_5 = () => {
			window.oneadMaterial.sendClickLandingPage({
				url: 4,
				bannerIndex: 4,
				eng: 'banner 5 clicked'
			})
			this.movieClip_5.removeEventListener('click', ONEAD_MULTIPLE_BANNER_TRIGGER_5)
		}
		this.movieClip_5.addEventListener('click', ONEAD_MULTIPLE_BANNER_TRIGGER_5)
	}
	this.frame_121 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.rightBotBtn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{
			this.gotoAndPlay(122);
		}
	}
	this.frame_130 = function() {
		// hide video
		// 把 __frame__ 改成要去的影格數
		if (!this.backBtn_isListening) {
		  const hideVideoAndGoBack = () => {
		    const videoTrigger = () => {
		      const show = 0
		      return show ? true : false
		    }
		    window.oneadMaterial.mirfPlayDone({
		      playBtnClicked: videoTrigger()
		    })
		    this.gotoAndStop(1)
		    this.bannerActive = false
		  }
		  this.backBtn.addEventListener('click', hideVideoAndGoBack)
		  this.backBtn_isListening = true
		}
	}
	this.frame_144 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Banner link 6
		第六個Banner導外點擊
		
		說明:
		點擊後會導外到Banner的第六個連結
		*/
		
		const ONEAD_MULTIPLE_BANNER_TRIGGER_6 = () => {
			window.oneadMaterial.sendClickLandingPage({
				url: 5,
				bannerIndex: 5,
				eng: 'banner 6 clicked'
			})
			this.movieClip_6.removeEventListener('click', ONEAD_MULTIPLE_BANNER_TRIGGER_6)
		}
		this.movieClip_6.addEventListener('click', ONEAD_MULTIPLE_BANNER_TRIGGER_6)
	}
	this.frame_145 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.rightBotBtn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{
			this.gotoAndPlay(146);
		}
	}
	this.frame_154 = function() {
		// hide video
		// 把 __frame__ 改成要去的影格數
		if (!this.backBtn_isListening) {
		  const hideVideoAndGoBack = () => {
			hideVideo()
		    const videoTrigger = () => {
		      const show = 0
		      return show ? true : false
		    }
		    window.oneadMaterial.mirfPlayDone({
		      playBtnClicked: videoTrigger()
		    })
		    this.gotoAndStop(1)
		    this.bannerActive = false
		  }
		  this.backBtn.addEventListener('click', hideVideoAndGoBack)
		  this.backBtn_isListening = true
		}
	}
	this.frame_168 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(14).call(this.frame_24).wait(1).call(this.frame_25).wait(9).call(this.frame_34).wait(14).call(this.frame_48).wait(1).call(this.frame_49).wait(9).call(this.frame_58).wait(14).call(this.frame_72).wait(1).call(this.frame_73).wait(9).call(this.frame_82).wait(14).call(this.frame_96).wait(1).call(this.frame_97).wait(9).call(this.frame_106).wait(14).call(this.frame_120).wait(1).call(this.frame_121).wait(9).call(this.frame_130).wait(14).call(this.frame_144).wait(1).call(this.frame_145).wait(9).call(this.frame_154).wait(14).call(this.frame_168).wait(1));

	// 返回按鈕
	this.backBtn = new lib.backBtn();
	this.backBtn.name = "backBtn";
	this.backBtn.setTransform(-615.95,120.8,1,1,0,0,0,33.5,33.5);
	this.backBtn._off = true;
	new cjs.ButtonHelper(this.backBtn, 0, 1, 2, false, new lib.backBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.backBtn).wait(10).to({_off:false},0).to({_off:true},15).wait(9).to({_off:false},0).to({_off:true},15).wait(9).to({_off:false},0).to({_off:true},15).wait(9).to({_off:false},0).to({_off:true},15).wait(9).to({_off:false},0).to({_off:true},15).wait(9).to({_off:false},0).to({_off:true},15).wait(9).to({_off:false},0).wait(15));

	// content
	this.instance = new lib.page_01("synched",0);
	this.instance.setTransform(66,60,1,1,0,0,0,66,60);

	this.movieClip_1 = new lib.Symbol7_1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(250,680,1,1,0,0,0,-70,0);

	this.instance_1 = new lib.Symbol3("synched",0);
	this.instance_1.setTransform(44,44,1,1,0,0,0,44,44);

	this.movieClip_2 = new lib.Symbol9_1();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(250,680,1,1,0,0,0,-70,0);

	this.instance_2 = new lib.p3("synched",0);
	this.instance_2.setTransform(76,54,1,1,0,0,0,76,54);

	this.movieClip_3 = new lib.Symbol10_1();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.setTransform(250,680,1,1,0,0,0,-70,0);

	this.instance_3 = new lib.Symbol4("synched",0);
	this.instance_3.setTransform(110,110,1,1,0,0,0,110,110);

	this.movieClip_4 = new lib.Symbol11_1();
	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.setTransform(250,680,1,1,0,0,0,-70,0);

	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.setTransform(68,58,1,1,0,0,0,68,58);

	this.movieClip_5 = new lib.Symbol12_1();
	this.movieClip_5.name = "movieClip_5";
	this.movieClip_5.setTransform(250,680,1,1,0,0,0,-70,0);

	this.instance_5 = new lib.Symbol5("synched",0);
	this.instance_5.setTransform(48,54,1,1,0,0,0,48,54);

	this.movieClip_6 = new lib.Symbol13_1();
	this.movieClip_6.name = "movieClip_6";
	this.movieClip_6.setTransform(250,680,1,1,0,0,0,-70,0);

	this.instance_6 = new lib.tvc("synched",0);
	this.instance_6.setTransform(52,70,1,1,0,0,0,52,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.movieClip_1}]},23).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.movieClip_2}]},23).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.movieClip_3}]},23).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.movieClip_4}]},23).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.movieClip_5}]},23).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.movieClip_6}]},23).to({state:[{t:this.instance_6}]},1).wait(24));

	// logo
	this.instance_7 = new lib.Symbol17();
	this.instance_7.setTransform(171.1,1257.8,0.5305,0.5305,0,0,0,13.2,22.1);

	this.logo_mc = new lib.Symbol31();
	this.logo_mc.name = "logo_mc";
	this.logo_mc.setTransform(300.5,97.1,0.8,0.8,0,0,0,131.2,33.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_mc},{t:this.instance_7}]}).wait(169));

	// ring_mc
	this.ring_mc = new lib.Symbol18();
	this.ring_mc.name = "ring_mc";
	this.ring_mc.setTransform(321.95,278.75,1,1,0,0,0,309,77.8);

	this.timeline.addTween(cjs.Tween.get(this.ring_mc).wait(169));

	// frame_mc
	this.frame_mc = new lib.winds();
	this.frame_mc.name = "frame_mc";
	this.frame_mc.setTransform(96,222.95,1,1,0,0,0,18,23);

	this.timeline.addTween(cjs.Tween.get(this.frame_mc).wait(169));

	// BTNS
	this.leftTopBtn = new lib.leftTopBtn();
	this.leftTopBtn.name = "leftTopBtn";
	this.leftTopBtn.setTransform(317.8,1100.85,1.1811,1.1811);
	new cjs.ButtonHelper(this.leftTopBtn, 0, 1, 2, false, new lib.leftTopBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.leftTopBtn).wait(169));

	// time
	this.time_mc = new lib.TimeMC();
	this.time_mc.name = "time_mc";
	this.time_mc.setTransform(321.1,932.8,1,1,0,0,0,321.1,171.4);

	this.timeline.addTween(cjs.Tween.get(this.time_mc).wait(169));

	// backpround
	this.instance_8 = new lib.Symbol1("synched",0);
	this.instance_8.setTransform(323,680,1,1,0,0,0,320,680);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(169));

	// bg_mc
	this.bg_mc = new lib.backgr();
	this.bg_mc.name = "bg_mc";
	this.bg_mc.setTransform(328.05,688.05,1,1,0,0,0,812,812);

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(169));

	// xxxxxx
	this.videoShowBtn = new lib.videoShowBtn();
	this.videoShowBtn.name = "videoShowBtn";
	this.videoShowBtn.setTransform(1618.15,849.8,1.1396,1.1396,0,0,0,108,97.5);
	new cjs.ButtonHelper(this.videoShowBtn, 0, 1, 2, false, new lib.videoShowBtn(), 3);

	this.rightBotBtn = new lib.rightBotBtn();
	this.rightBotBtn.name = "rightBotBtn";
	this.rightBotBtn.setTransform(1441.15,846.15,1.1811,1.1811,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.rightBotBtn, 0, 1, 2, false, new lib.rightBotBtn(), 3);

	this.midRightBtn = new lib.midRightBtn();
	this.midRightBtn.name = "midRightBtn";
	this.midRightBtn.setTransform(1272.4,842.85,1.1811,1.1811,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.midRightBtn, 0, 1, 2, false, new lib.midRightBtn(), 3);

	this.leftMidBtn = new lib.leftMidBtn();
	this.leftMidBtn.name = "leftMidBtn";
	this.leftMidBtn.setTransform(937.5,859.5,1.1811,1.1811,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.leftMidBtn, 0, 1, 2, false, new lib.leftMidBtn(), 3);

	this.leftBotBtn = new lib.leftBotBtn();
	this.leftBotBtn.name = "leftBotBtn";
	this.leftBotBtn.setTransform(1249.3,577.85,1.1811,1.1811,0,0,0,131.1,128.6);
	new cjs.ButtonHelper(this.leftBotBtn, 0, 1, 2, false, new lib.leftBotBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.leftBotBtn},{t:this.leftMidBtn},{t:this.midRightBtn},{t:this.rightBotBtn},{t:this.videoShowBtn}]}).wait(169));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-427.4,525.4,2134.6,962.6999999999999);
// library properties:
lib.properties = {
	id: 'EED7E21219194F0998CD0D498CA63BF3',
	width: 640,
	height: 1360,
	fps: 24,
	color: "#545554",
	opacity: 1.00,
	manifest: [
		{src:"images/Back.png", id:"Back"},
		{src:"images/bg.png", id:"bg"},
		{src:"images/bg_w.png", id:"bg_w"},
		{src:"images/bgloop.png", id:"bgloop"},
		{src:"images/black.png", id:"black"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/BTNa.png", id:"BTNa"},
		{src:"images/BTNAJ2.png", id:"BTNAJ2"},
		{src:"images/BTNB.png", id:"BTNB"},
		{src:"images/BTNCF.png", id:"BTNCF"},
		{src:"images/BTND.png", id:"BTND"},
		{src:"images/coff.png", id:"coff"},
		{src:"images/Lat.png", id:"Lat"},
		{src:"images/men.png", id:"men"},
		{src:"images/men_w.png", id:"men_w"},
		{src:"images/moon.png", id:"moon"},
		{src:"images/moon_w.png", id:"moon_w"},
		{src:"images/sun.png", id:"sun"},
		{src:"images/sun_w.png", id:"sun_w"},
		{src:"images/talk.png", id:"talk"},
		{src:"images/talk_w.png", id:"talk_w"},
		{src:"images/toplogo.png", id:"toplogo"},
		{src:"images/toplogo_w.png", id:"toplogo_w"},
		{src:"images/win.png", id:"win"},
		{src:"images/win2.png", id:"win2"},
		{src:"images/win2_w.png", id:"win2_w"},
		{src:"images/win_w.png", id:"win_w"}
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
an.compositions['EED7E21219194F0998CD0D498CA63BF3'] = {
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