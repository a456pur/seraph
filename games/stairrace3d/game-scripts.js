// fps.js
if (typeof(document) !== "undefined") {
    /*! FPSMeter 0.3.1 - 9th May 2013 | https://github.com/Darsain/fpsmeter */
    (function(m,j){function s(a,e){for(var g in e)try{a.style[g]=e[g]}catch(j){}return a}function H(a){return null==a?String(a):"object"===typeof a||"function"===typeof a?Object.prototype.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof a}function R(a,e){if("array"!==H(e))return-1;if(e.indexOf)return e.indexOf(a);for(var g=0,j=e.length;g<j;g++)if(e[g]===a)return g;return-1}function I(){var a=arguments,e;for(e in a[1])if(a[1].hasOwnProperty(e))switch(H(a[1][e])){case "object":a[0][e]=
    I({},a[0][e],a[1][e]);break;case "array":a[0][e]=a[1][e].slice(0);break;default:a[0][e]=a[1][e]}return 2<a.length?I.apply(null,[a[0]].concat(Array.prototype.slice.call(a,2))):a[0]}function N(a){a=Math.round(255*a).toString(16);return 1===a.length?"0"+a:a}function S(a,e,g,j){if(a.addEventListener)a[j?"removeEventListener":"addEventListener"](e,g,!1);else if(a.attachEvent)a[j?"detachEvent":"attachEvent"]("on"+e,g)}function D(a,e){function g(a,b,d,c){return y[0|a][Math.round(Math.min((b-d)/(c-d)*J,J))]}
    function r(){f.legend.fps!==q&&(f.legend.fps=q,f.legend[T]=q?"FPS":"ms");K=q?b.fps:b.duration;f.count[T]=999<K?"999+":K.toFixed(99<K?0:d.decimals)}function m(){z=A();L<z-d.threshold&&(b.fps-=b.fps/Math.max(1,60*d.smoothing/d.interval),b.duration=1E3/b.fps);for(c=d.history;c--;)E[c]=0===c?b.fps:E[c-1],F[c]=0===c?b.duration:F[c-1];r();if(d.heat){if(w.length)for(c=w.length;c--;)w[c].el.style[h[w[c].name].heatOn]=q?g(h[w[c].name].heatmap,b.fps,0,d.maxFps):g(h[w[c].name].heatmap,b.duration,d.threshold,
    0);if(f.graph&&h.column.heatOn)for(c=u.length;c--;)u[c].style[h.column.heatOn]=q?g(h.column.heatmap,E[c],0,d.maxFps):g(h.column.heatmap,F[c],d.threshold,0)}if(f.graph)for(p=0;p<d.history;p++)u[p].style.height=(q?E[p]?Math.round(O/d.maxFps*Math.min(E[p],d.maxFps)):0:F[p]?Math.round(O/d.threshold*Math.min(F[p],d.threshold)):0)+"px"}function k(){20>d.interval?(x=M(k),m()):(x=setTimeout(k,d.interval),P=M(m))}function G(a){a=a||window.event;a.preventDefault?(a.preventDefault(),a.stopPropagation()):(a.returnValue=
    !1,a.cancelBubble=!0);b.toggle()}function U(){d.toggleOn&&S(f.container,d.toggleOn,G,1);a.removeChild(f.container)}function V(){f.container&&U();h=D.theme[d.theme];y=h.compiledHeatmaps||[];if(!y.length&&h.heatmaps.length){for(p=0;p<h.heatmaps.length;p++){y[p]=[];for(c=0;c<=J;c++){var b=y[p],e=c,g;g=0.33/J*c;var j=h.heatmaps[p].saturation,m=h.heatmaps[p].lightness,n=void 0,k=void 0,l=void 0,t=l=void 0,v=n=k=void 0,v=void 0,l=0.5>=m?m*(1+j):m+j-m*j;0===l?g="#000":(t=2*m-l,k=(l-t)/l,g*=6,n=Math.floor(g),
    v=g-n,v*=l*k,0===n||6===n?(n=l,k=t+v,l=t):1===n?(n=l-v,k=l,l=t):2===n?(n=t,k=l,l=t+v):3===n?(n=t,k=l-v):4===n?(n=t+v,k=t):(n=l,k=t,l-=v),g="#"+N(n)+N(k)+N(l));b[e]=g}}h.compiledHeatmaps=y}f.container=s(document.createElement("div"),h.container);f.count=f.container.appendChild(s(document.createElement("div"),h.count));f.legend=f.container.appendChild(s(document.createElement("div"),h.legend));f.graph=d.graph?f.container.appendChild(s(document.createElement("div"),h.graph)):0;w.length=0;for(var q in f)f[q]&&
    h[q].heatOn&&w.push({name:q,el:f[q]});u.length=0;if(f.graph){f.graph.style.width=d.history*h.column.width+(d.history-1)*h.column.spacing+"px";for(c=0;c<d.history;c++)u[c]=f.graph.appendChild(s(document.createElement("div"),h.column)),u[c].style.position="absolute",u[c].style.bottom=0,u[c].style.right=c*h.column.width+c*h.column.spacing+"px",u[c].style.width=h.column.width+"px",u[c].style.height="0px"}s(f.container,d);r();a.appendChild(f.container);f.graph&&(O=f.graph.clientHeight);d.toggleOn&&("click"===
    d.toggleOn&&(f.container.style.cursor="pointer"),S(f.container,d.toggleOn,G))}"object"===H(a)&&a.nodeType===j&&(e=a,a=document.body);a||(a=document.body);var b=this,d=I({},D.defaults,e||{}),f={},u=[],h,y,J=100,w=[],W=0,B=d.threshold,Q=0,L=A()-B,z,E=[],F=[],x,P,q="fps"===d.show,O,K,c,p;b.options=d;b.fps=0;b.duration=0;b.isPaused=0;b.tickStart=function(){Q=A()};b.tick=function(){z=A();W=z-L;B+=(W-B)/d.smoothing;b.fps=1E3/B;b.duration=Q<L?B:z-Q;L=z};b.pause=function(){x&&(b.isPaused=1,clearTimeout(x),
    C(x),C(P),x=P=0);return b};b.resume=function(){x||(b.isPaused=0,k());return b};b.set=function(a,c){d[a]=c;q="fps"===d.show;-1!==R(a,X)&&V();-1!==R(a,Y)&&s(f.container,d);return b};b.showDuration=function(){b.set("show","ms");return b};b.showFps=function(){b.set("show","fps");return b};b.toggle=function(){b.set("show",q?"ms":"fps");return b};b.hide=function(){b.pause();f.container.style.display="none";return b};b.show=function(){b.resume();f.container.style.display="block";return b};b.destroy=function(){b.pause();
    U();b.tick=b.tickStart=function(){}};V();k()}var A,r=m.performance;A=r&&(r.now||r.webkitNow)?r[r.now?"now":"webkitNow"].bind(r):function(){return+new Date};for(var C=m.cancelAnimationFrame||m.cancelRequestAnimationFrame,M=m.requestAnimationFrame,r=["moz","webkit","o"],G=0,k=0,Z=r.length;k<Z&&!C;++k)M=(C=m[r[k]+"CancelAnimationFrame"]||m[r[k]+"CancelRequestAnimationFrame"])&&m[r[k]+"RequestAnimationFrame"];C||(M=function(a){var e=A(),g=Math.max(0,16-(e-G));G=e+g;return m.setTimeout(function(){a(e+
    g)},g)},C=function(a){clearTimeout(a)});var T="string"===H(document.createElement("div").textContent)?"textContent":"innerText";D.extend=I;window.FPSMeter=D;D.defaults={interval:100,smoothing:10,show:"fps",toggleOn:"click",decimals:1,maxFps:60,threshold:100,position:"absolute",zIndex:10,left:"5px",top:"5px",right:"auto",bottom:"auto",margin:"0 0 0 0",theme:"dark",heat:0,graph:0,history:20};var X=["toggleOn","theme","heat","graph","history"],Y="position zIndex left top right bottom margin".split(" ")})(window);(function(m,j){j.theme={};var s=j.theme.base={heatmaps:[],container:{heatOn:null,heatmap:null,padding:"5px",minWidth:"95px",height:"30px",lineHeight:"30px",textAlign:"right",textShadow:"none"},count:{heatOn:null,heatmap:null,position:"absolute",top:0,right:0,padding:"5px 10px",height:"30px",fontSize:"24px",fontFamily:"Consolas, Andale Mono, monospace",zIndex:2},legend:{heatOn:null,heatmap:null,position:"absolute",top:0,left:0,padding:"5px 10px",height:"30px",fontSize:"12px",lineHeight:"32px",fontFamily:"sans-serif",
    textAlign:"left",zIndex:2},graph:{heatOn:null,heatmap:null,position:"relative",boxSizing:"padding-box",MozBoxSizing:"padding-box",height:"100%",zIndex:1},column:{width:4,spacing:1,heatOn:null,heatmap:null}};j.theme.dark=j.extend({},s,{heatmaps:[{saturation:0.8,lightness:0.8}],container:{background:"#222",color:"#fff",border:"1px solid #1a1a1a",textShadow:"1px 1px 0 #222"},count:{heatOn:"color"},column:{background:"#3f3f3f"}});j.theme.light=j.extend({},s,{heatmaps:[{saturation:0.5,lightness:0.5}],
    container:{color:"#666",background:"#fff",textShadow:"1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},count:{heatOn:"color"},column:{background:"#eaeaea"}});j.theme.colorful=j.extend({},s,{heatmaps:[{saturation:0.5,lightness:0.6}],container:{heatOn:"backgroundColor",background:"#888",color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.2)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},column:{background:"#777",backgroundColor:"rgba(0,0,0,.2)"}});j.theme.transparent=
    j.extend({},s,{heatmaps:[{saturation:0.8,lightness:0.5}],container:{padding:0,color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.5)"},count:{padding:"0 5px",height:"40px",lineHeight:"40px"},legend:{padding:"0 5px",height:"40px",lineHeight:"42px"},graph:{height:"40px"},column:{width:5,background:"#999",heatOn:"backgroundColor",opacity:0.5}})})(window,FPSMeter);    
}

var Fps = pc.createScript('fps');

Fps.prototype.initialize = function () {
    this.fps = new FPSMeter({heat: true, graph: true});
};

Fps.prototype.update = function (dt) {
    this.fps.tick();
};


// inputController.js
var InputController = pc.createScript('inputController');

InputController.getInstance = function() {
    if(!InputController._instance) console.error('InputController is not initialized yet');
    return InputController._instance;
};

InputController.inputPosition = null;

InputController.prototype.initialize = function() {
    InputController._app = this.app;
    if(!InputController._instance) {
        InputController._instance = this;
    }
    
    this.activePointer = {
        active: false,
        touch: false,
        id: -1,
        x: 0,
        y: 0,
        startX: 0,
        startY: 0,
        downX: 0,
        downY: 0,
        velocity: new pc.Vec2(0, 0),
        distance: 0,
        azimuth: 0,
        timestamp: new Date().getTime()
    }; 
    
    const mouseSupported = this.app.mouse; 
    const touchSupported = this.app.touch; 
    
    if (touchSupported) {
        this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
        this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
        this.app.touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchCancel, this);
        
        this.app.touch.on(pc.EVENT_TOUCHEND, function(event) {
            // This prevents that a mouse click event will be executed after a touch event.
            event.event.preventDefault();
        });
    } 
    
    if (mouseSupported) {
        this.app.mouse.disableContextMenu();
        this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
        this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this);
        this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
        this.app.mouse.on(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this);
    }
    
    if(this.app.keyboard) {
        this.keyStates = new Map();
        this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
        this.app.keyboard.on(pc.EVENT_KEYUP, this.onKeyUp, this);
    }
    this._keyboardInputActive = false;
        
    this.on("destroy", this.destroy, this);
};

InputController.prototype.update = function(dt) {
    if(this._keyboardInputActive) {
        this.app.fire(EventTypes.GameInput.UPDATED, Math.PI / 2 - this._getKeyboardInputAzimuth());
        this.app.fire(EventTypes.GameInput.KEYBOARD_UPDATED, Math.PI / 2 - this._getKeyboardInputAzimuth());
    }
    
    if(this.activePointer.active) {
        const velocityThreshold = this.activePointer.touch ? GameConfig.getAttribute('input', 'frameVelocityThreshold') : GameConfig.getAttribute('input', 'mouseFrameVelocityThreshold');
        const velocityDecay = this.activePointer.touch ?  GameConfig.getAttribute('input', 'frameVelocityDecay') :   GameConfig.getAttribute('input', 'mouseFrameVelocityDecay');
        if(this.activePointer.velocity.length() > velocityThreshold) {
            this.activePointer.velocity.scale(velocityDecay);
        }
    }
};



/** 
 * INTERNAL 
 */

InputController.prototype._updatePointerPosition = function (x, y) {
    
    /* let the joystick know that input has been moved */
    this.app.fire(EventTypes.INPUT_MOVED, x, y);
    
    const _distanceThreshold = this.activePointer.touch ?  GameConfig.getAttribute('input', 'touchDistanceThreshold') :  GameConfig.getAttribute('input', 'mouseDistanceThreshold');
    const _frameVelocity = new pc.Vec2(x - this.activePointer.x, y - this.activePointer.y);
    const _frameDistance = _frameVelocity.length();
    if(_frameDistance < _distanceThreshold) {
        return;
    }
    // this.activePointer.velocity = this.activePointer.velocity.add(_frameVelocity.scale(GameConfig.getAttribute('input', 'frameDistanceTolerance'))).normalize();
    this.activePointer.velocity = this.activePointer.velocity.add(_frameVelocity.scale(this.activePointer.touch ? GameConfig.getAttribute('input', 'frameDistanceTolerance') :  GameConfig.getAttribute('input', 'mouseFrameDistanceTolerance')));
    this.activePointer.distance = _frameDistance;
    this.activePointer.startX = this.activePointer.x;
    this.activePointer.startY = this.activePointer.y;
    this.activePointer.x = x;
    this.activePointer.y = y;
    this.activePointer.azimuth = Math.atan2(this.activePointer.velocity.y, this.activePointer.velocity.x);
};

InputController.prototype._isKeyboardInputActive = function() {
    return this.app.keyboard && [pc.KEY_LEFT, pc.KEY_RIGHT, pc.KEY_DOWN, pc.KEY_UP].some(key => this.keyStates.get(key));
};


InputController.prototype._getKeyboardInputAzimuth = function() {
    let vx = 0, vy = 0;
    if(this.app.keyboard) {
        if(this.keyStates.get(pc.KEY_LEFT)) vx -= 1;
        if(this.keyStates.get(pc.KEY_RIGHT)) vx += 1;
        if(this.keyStates.get(pc.KEY_UP)) vy -= 1;
        if(this.keyStates.get(pc.KEY_DOWN)) vy += 1;
        return Math.atan2(vy, vx);
    }
};

/** 
 * TOUCH INPUT 
 */

InputController.prototype.onTouchStart = function (event) {    
    if(this.activePointer.active) return; // touch pointer is already active
    if(event.changedTouches.length === 0) return; //no touches 

    this.activePointer.active = true;
    this.activePointer.touch = true;
    this.activePointer.id = event.changedTouches[0].id;
    this.activePointer.x =  event.changedTouches[0].x;
    this.activePointer.y = event.changedTouches[0].y;
    this.activePointer.startX = event.changedTouches[0].x;
    this.activePointer.startY = event.changedTouches[0].y;
    this.activePointer.downX = event.changedTouches[0].x;
    this.activePointer.downY = event.changedTouches[0].y;
    this.activePointer.velocity.set(0, 0);
    this.activePointer.distance = 0;
    this.activePointer.timestamp = new Date().getTime();
    
    this.app.fire(EventTypes.INPUT_STARTED, this.activePointer.x, this.activePointer.y);
    this.app.fire(EventTypes.GameInput.TOUCH_STARTED);
};


InputController.prototype.onTouchEnd = function (event) {
    if(this.activePointer.active) {
        const foundTouch = event.changedTouches.find(touch => touch.id === this.activePointer.id);
        if(foundTouch) {
            this.app.fire(EventTypes.INPUT_ENDED, foundTouch.x, foundTouch.y);
            this.activePointer.active = false;
            this.app.fire(EventTypes.GameInput.TOUCH_ENDED);
        }
    }
};


InputController.prototype.onTouchCancel = function (event) {
    if(this.activePointer.active) {
        const foundTouch = event.changedTouches.find(touch => touch.id === this.activePointer.id);
        if(foundTouch) {
            this.app.fire(EventTypes.INPUT_ENDED, foundTouch.x, foundTouch.y);
            this.activePointer.active = false;
            this.app.fire(EventTypes.GameInput.TOUCH_ENDED);
        }
    }
};


InputController.prototype.onTouchMove = function (event) {
    if(this.activePointer.active) {
        const foundTouch = event.changedTouches.find(touch => touch.id === this.activePointer.id);
        if(foundTouch) {         
            this._updatePointerPosition(foundTouch.x, foundTouch.y);
            this.app.fire(EventTypes.GameInput.TOUCH_UPDATED, Math.PI / 2 - this.activePointer.azimuth);
            this.app.fire(EventTypes.GameInput.TOUCH_MOVE, foundTouch.x, foundTouch.y);
        }
    }
};


/** 
 * KEYBOARD INPUT 
 */


InputController.prototype.onKeyDown = function (event) {
    this.keyStates.set(event.key, true);
    if(this._isKeyboardInputActive()) {
        this._keyboardInputActive = true;
        this.app.fire(EventTypes.GameInput.KEYBOARD_STARTED);
    }
};

InputController.prototype.onKeyUp = function (event) {
    this.keyStates.set(event.key, false);
    if(!this._isKeyboardInputActive()) {
        this._keyboardInputActive = false;
        this.app.fire(EventTypes.GameInput.KEYBOARD_ENDED);
    }
};


/**
 * MOUSE INPUT 
 */


InputController.prototype.onMouseDown = function (event) {
    if(this.activePointer.active) return; 
    
    this.activePointer.active = true;
    this.activePointer.touch = false;
    this.activePointer.id = -1;
    this.activePointer.x = event.x;
    this.activePointer.y = event.y;
    this.activePointer.startX = event.x;
    this.activePointer.startY = event.y;
    this.activePointer.downX = event.x;
    this.activePointer.downY = event.y;
    this.activePointer.velocity.set(0, 0);
    this.activePointer.distance = 0;
    this.activePointer.timestamp = new Date().getTime();
    
    this.app.fire(EventTypes.INPUT_STARTED, this.activePointer.x, this.activePointer.y);

    this.app.fire(EventTypes.GameInput.MOUSE_DOWN, event.x, event.y);


    
};


InputController.prototype.onMouseUp = function (event) {
    if(this.activePointer.active && !this.activePointer.touch) {
        this.app.fire(EventTypes.INPUT_ENDED, event.x, event.y);        
        this.activePointer.active = false;   
        this.app.fire(EventTypes.GameInput.MOUSE_UP, event.x, event.y);
    }
};


InputController.prototype.onMouseLeave = function (event) {
    if(this.activePointer && this.activePointer.active && !this.activePointer.touch) {
        this.app.fire(EventTypes.INPUT_ENDED, event.x, event.y);
        this.activePointer.active = false;   
        this.app.fire(EventTypes.GameInput.MOUSE_UP, event.x, event.y);
    }
};

InputController.prototype.onMouseMove = function (event) {
    if(this.activePointer.active && !this.activePointer.touch) {
        this._updatePointerPosition(event.x, event.y);
        this.app.fire(EventTypes.GameInput.MOUSE_MOVE, event.x, event.y);
    }
};
    
    
InputController.prototype.onMouseWheel = function (event) {
    event.event.preventDefault();
};



InputController.prototype.destroy = function() {       
    if(this.app.touch) {
        this.app.touch.off(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        this.app.touch.off(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
        this.app.touch.off(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
        this.app.touch.off(pc.EVENT_TOUCHCANCEL, this.onTouchCancel, this);
    }

    if(this.app.mouse) { 
        this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
        this.app.mouse.off(pc.EVENT_MOUSEUP, this.onMouseUp, this);
        this.app.mouse.off(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
    }
    
    if(this.app.keyboard) {
        this.app.keyboard.off(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    }
};

// EventTypes.js
var EventTypes = pc.createScript('eventTypes');

/* App */
EventTypes.APP_LOADED = 'app:onLoaded';
EventTypes.SAVE_APP = 'app:save';
EventTypes.POSTINITIALIZE = 'postinitialize';

/* Screen size/scale */
EventTypes.Screen = {
    RESIZED: 'app:screen:resized',
    SET_SCALE_BLEND: 'app:screen:setScaleBlend'
};

/* Animations */
EventTypes.ANIMATION_END = 'animation:end';
EventTypes.ANIMATION_LOOP = 'animation:loop';
EventTypes.ANIMATION_END_SEQUENCE = 'animation:end_sequence';

/* Bricks cache */
EventTypes.ENTITY_CACHED = 'cache:cached';
EventTypes.ENTITY_REUSED_FROM_CACHE = 'cache:entityReused';

/* Audio */
EventTypes.ENABLE_MUSIC = 'music:enable';
EventTypes.DISABLE_MUSIC = 'music:disable';
EventTypes.ENABLE_SFX = 'sfx:enable';
EventTypes.DISABLE_SFX = 'sfx:disable';
EventTypes.SET_SFX_VOLUME = 'sfx:setVolume';
EventTypes.SET_MUSIC_VOLUME = 'music:setVolume';
EventTypes.PLAY_MUSIC = 'music:play';
EventTypes.STOP_MUSIC = 'music:stop';
EventTypes.CHOKE_MUSIC = 'music:choke';
EventTypes.UNCHOKE_MUSIC = 'music:unchoke';
EventTypes.PLAY_EXTERNAL_SFX = 'sfx:playExternal';
EventTypes.PLAY_SFX = 'sfx:play';
EventTypes.STOP_SFX = 'sfx:stop';
EventTypes.MUTE_SOUND = 'audio:mute';
EventTypes.UNMUTE_SOUND = 'audio:unmute';
EventTypes.SOUND_STATE_CHANGED = 'sound:stateChanged';
EventTypes.MUSIC_STATE_CHANGED = 'music:stateChanged';
EventTypes.START_GAMEPLAY_MUSIC = 'music:startGameplayLoop';
EventTypes.START_MENU_MUSIC = 'music:startMenuLoop';
EventTypes.SET_VOLUME_MULTIPLIER = 'audio:setVolumeMultiplier';
EventTypes.SET_MASTER_VOLUME = 'audio:setMasterVolume';

/* Input */
EventTypes.INPUT_STARTED = 'input:started';
EventTypes.INPUT_MOVED = 'input:moved';
EventTypes.INPUT_ENDED = 'input:ended';
EventTypes.GameInput = {
    MOUSE_DOWN: "gameInput:mouse_down",
    MOUSE_UP: "gameInput:mouse_up",
    MOUSE_MOVE: "gameInput:mouse_move",
    TOUCH_STARTED: "gameInput:touch_started",
    TOUCH_ENDED: "gameInput:touch_ended",
    TOUCH_UPDATED: "gameInput:touch_updated",
    TOUCH_MOVE: "gameInput:touch_move",
    KEYBOARD_STARTED: "gameInput:keyboard_started",
    KEYBOARD_ENDED: "gameInput:keyboard_ended",
    KEYBOARD_UPDATED: "gameInput:keyboard_updated",
};

/* UI */
EventTypes.SHOW_UI_WINDOW = 'ui:showWindow';
EventTypes.SHOW_TRANSITION_SCREEN = 'show:transitionScreen';
EventTypes.HIDE_TRANSITION_SCREEN = 'hide:transitionScreen';

/* UI elements animation */
EventTypes.UI_ELEMENT = {
    APPEAR: 'uiElement:appear',
    APPEAR_MANUALLY: 'uiElement:appearManually',
    DISAPPEAR: 'uiElement:disappear',
    APPEARED: 'uiElement:appeared',
    DISAPPEARED: 'uiElement:disappeared',
};

/* Camera */
EventTypes.SET_GAMEPLAY_CAMERA_TARGET = 'camera:set_target';

/* Game session */
EventTypes.GameSession = {
    START: 'gameSession:start',
    RESTART: 'gameSession:restart',
    STOP: 'gameSession:stop',
    PAUSE: 'gameSession:pause',
    RESUME: 'gameSession:resume',
    SESSION_STARTED: 'gameSession:session_started',
    SESSION_STOPED: 'gameSession:session_stoped',
    SESSION_PAUSED: 'gameSession:session_paused',
    SESSION_RESUMED: 'gameSession:session_resumed',
    VICTORY: 'gameSession:victory',
    DEFEAT: 'gameSession:defeat',
};

/* Gameplay */
EventTypes.STAIR_PAINTED = 'gameplay:stairPainted';
EventTypes.STICKMAN_FINISHED = 'gameplay:stickman_finished';
EventTypes.AWARD_PLAYER_STICKMAN_WITH_BRICKS = 'gameplay:awardPlayerStickmanWithBricks';
EventTypes.STICKMAN_CHANGED_PLATFORM = 'gameplay:stickmanChangedPlatform';
EventTypes.STICKMAN_DROPPED_BRICKS = 'gameplay:stickmanDroppedBricksm';
EventTypes.RESPAWN_PLAYER = 'gameplay:respawnPlayer';

/* Level management */
EventTypes.LOAD_LEVEL = 'game:load_level';
EventTypes.LOAD_INITIAL_LEVEL = 'game:load_initial_level';
EventTypes.LEVEL_LOADED = 'game:level_loaded';
EventTypes.LOAD_NEXT_LEVEL = 'game:load_next_level';
EventTypes.RELOAD_LEVEL = 'game:reload_level';
EventTypes.RELOAD_LEVEL_AND_SHOW_MENU = 'game:reload_level_and_show_menu';

/* Level creation events */
EventTypes.LEVEL = {
    PREPARE_SPAWN_SPOTS: 'level:prepare_spawn_spots',
    SPAWN_BRICK_SPOTS : "level:spaw_brick_spots",
    BUILD_NAVIGATION_GRAPH: 'level:build_nav_graph',
    SPAWN_STICKMANS: 'level:spawn_stickmans',
};

/* Bricks status */
EventTypes.BRICK_ACTIVATED = 'brick:activated';
EventTypes.BRICK_DEACTIVATED = 'brick:deactivated';
EventTypes.BRICK_DESTROYED = 'brick:destroyed';


/* Platform */
EventTypes.Platform = {
    BRICK_SPOT_CLEARED: 'platform:spot_cleared',
    GENERATE_BRICK_AT_EMPTY_SPOT: 'platform:generateBrickAtSpot',
    GENERATE_BRICKS_WHEN_STICKMAN_ENTERED: 'platform:generateBricksWhenStickmanEntered',
    DESTROY_BRICKS_WHEN_STICKMAN_LEAVED: 'platform:destroyBricksWhenStckmanLeaved'
};


/* Stickman */
EventTypes.Stickman = {
    ENTERED_STAIR: 'stickman:entered_stair',
    ENTERED_PLATFORM: 'stickman:entered_platform',
    ENTERED_FINISH_PLATFORM: 'stickman:entered_finish_platform',
    LEAVED_PLATFORM: 'stickman:leaved_platform',
    ENTERED_STAIRS: 'stickman:entered_stairs',
    LEAVED_STAIRS: 'stickman:leaved_stairs',
    BRICK_PICKED_UP: 'stickman:brickPickedUp',
    OUT_OF_BRICKS: 'stickman:outOfBricks',
    RESPAWNED: 'stickman:respawned',
    TELEPORTED: 'stickman:teleported',
    DIED: 'stickman:died',
    REVIVED: 'stickman:revived',
    COLLIDED_WITH_OTHER_STICKMAN: 'stickman:collideWithOther'
};

/* Stairs */
EventTypes.Stairs = {
    STICKMAN_ENTERED_STAIR: 'stairs:stickmanEnteredStair',
    STICKMAN_LEAVED_STAIR: 'stairs:stickmanLeavedStair',
    UPDATE_BLOCKER_POSITION: 'stairs:updateBlockerPosition'
};


/* Skins */
EventTypes.UPDATE_SKIN_PANELS = 'skins:updatePanels';
EventTypes.ON_PLAYER_SKIN_CHANGED = 'skins:skinChanged';
EventTypes.ON_PLAYER_COLOR_CHANGED = 'skins:colorChanged';
EventTypes.ON_BRICK_SKIN_CHANGED = 'skins:brickSkinChanged';


/* AI */
EventTypes.AI = {
    SET_TARGET_POSITION: 'ai:set_target_position',
    TARGET_POSITION_REACHED: 'ai:target_reached',
};


/* Coins */
EventTypes.COINS_AMOUNT_CHANGED = 'coins:amountChanged';

/* Stats */
EventTypes.Stats = {
    PLAYER_PICKED_UP_A_BRICK: 'stats:playerPickedUpABrick'
};

/* Input blocking */
EventTypes.BLOCK_INPUT = 'app:inputBlock';
EventTypes.UNBLOCK_INPUT = 'app:inputUnblock';

// gameConfig.js
var GameConfig = pc.createScript('gameConfig');


GameConfig.EASINGS = [
        {"Linear": "Linear"},
        {"QuadraticIn": "QuadraticIn"},
        {"QuadraticOut": "QuadraticOut"},
        {"QuadraticInOut": "QuadraticInOut"},
        {"CubicIn": "CubicIn"},
        {"CubicOut": "CubicOut"},
        {"CubicInOut": "CubicInOut"},
        {"QuarticIn": "QuarticIn"},
        {"QuarticOut": "QuarticOut"},
        {"QuarticInOut": "QuarticInOut"},
        {"QuinticIn": "QuinticIn"},
        {"QuinticOut": "QuinticOut"},
        {"QuinticInOut": "QuinticInOut"},
        {"SineIn": "SineIn"},
        {"SineOut": "SineOut"},
        {"SineInOut": "SineInOut"},
        {"ExponentialIn": "ExponentialIn"},
        {"ExponentialOut": "ExponentialOut"},
        {"ExponentialInOut": "ExponentialInOut"},
        {"CircularIn": "CircularIn"},
        {"CircularOut": "CircularOut"},
        {"CircularInOut": "CircularInOut"},
        {"BackIn": "BackIn"},
        {"BackOut": "BackOut"},
        {"BackInOut": "BackInOut"},
        {"BounceIn": "BounceIn"},
        {"BounceOut": "BounceOut"},
        {"BounceInOut": "BounceInOut"},
        {"ElasticIn": "ElasticIn"},
        {"ElasticOut": "ElasticOut"},
        {"ElasticInOut": "ElasticInOut"}
    ];


GameConfig.attributes.add('gameplay', {
    type: 'json',
    schema: [{
        name: 'maxBackpackCapacity',
        type: 'number',
        default: 100
    }, {        
        name: 'rewardPerBrick',
        type: 'number',
        default: 10
    }, {        
        name: 'rewardPerExtraSecond',
        type: 'number',
        default: 1
    }, {        
        name: 'maxExtraSeconds',
        type: 'number',
        default: 300
    }, {        
        name: 'slowdownFactorPerBrick',
        type: 'number',
        default: 0.01
    }, {        
        name: 'minRunningVelocityFactor',
        type: 'number',
        default: 0.5,
        min: 0.1,
        max: 1
    }, {
        name: 'respawnDelay',
        type: 'number',
        default: 2000
    }, {
        name: 'limitBricksPerPlatform',
        type: 'number',
        default: 0.4,
        min: 0,
        max: 1,
        description: 'Amount of bricks of some color that may be generated once stickman enters a platform. 0.4 means 40% of max platfomr capacity'
    }, {
        name: 'invincibleAfterRespawnDuration',
        type: 'number',
        default: 1.0
    }, {
        name: 'skinsExtraCoinsForWatchingAVideoAmount',
        type: 'number',
        default: 100
    }, {
        name: 'groundY',
        type: 'number',
        default: -12
    }, {
        name: 'initialBricksSpawningDuration',
        type: 'number',
        default: 0.25
    }, {
        name: 'randomizeAIColors',
        type: 'boolean',
        default: false
    }, {
        name: 'brickLinearVelocityDamping',
        type: 'vec3',
        default: [0.75, 0.95, 0.75]
    }, {
        name: 'brickAngularVelocityDamping',
        type: 'vec3',
        default: [0.75, 0.75, 0.75]
    }, {        
        name: 'brickLinearVelocityThreshold',
        type: 'number',
        default: 0.1
    }, {
        name: 'brickAngularVelocityThreshold',
        type: 'number',
        default: 0.1
    }, {
        name: 'victoryWatchVideoRewardMultiplier',
        type: 'number',
        default: 2
    }]
});


GameConfig.attributes.add('debug', {
    type: 'json',
    schema: [{
        name: 'unlockAllLevels',
        type: 'boolean',
        default: false
    }, {
        name: 'showSpawnSpots',
        type: 'boolean',
        default: false
    },  {
        name: 'showBrickSpots',
        type: 'boolean',
        default: false
    },  {
        name: 'drawSpotsConnections',
        type: 'boolean',
        default: false
    }, {
        name: 'unlimitedBricks',
        type: 'boolean',
        default: false
    },  {
        name: 'drawAITargets',
        type: 'boolean',
        default: false
    }, {
        name: 'showBlockers',
        type: 'boolean',
        default: false
    }, {
        name: 'showFloorName',
        type: 'boolean',
        default: false
    }, {
        name: 'logAIDecisions',
        type: 'boolean',
        default: false
    }, {
        name: 'showStairsDirection',
        type: 'boolean',
        default: false
    }, {
        name: 'showVelocitySlowdown',
        type: 'boolean',
        default: false
    }, {
        name: 'overrideEnemiesAmount',
        type: 'boolean',
        default: false
    }, {
        name: 'limitEnemiesAmount',
        type: 'number',
        default: 1,
        min: 0,
        max: 6,
        step: 1
    }, {
        name: 'demoMode',
        type: 'boolean',
        default: false
    },]
});

GameConfig.attributes.add('hierarchy', {
    type: 'json',
    schema: [{
        name: 'Gameplay',
        type: 'entity'
    }, {
        name: 'Camera',
        type: 'entity'
    }, {
        name: 'LevelContainer',
        type: 'entity'
    }, {
        name: 'DroppedBricks',
        type: 'entity'
    }]
});

GameConfig.attributes.add('input', {
    type: 'json',
    schema: [{
        name: 'mouseDistanceThreshold',
        type: 'number',
        default: 25
    }, {
        name: 'touchDistanceThreshold',
        type: 'number',
        default: 10
    },  {
        name: 'frameDistanceTolerance',
        type: 'number',
        default: 0.075
    }, {
        name: 'frameVelocityDecay',
        type: 'number',
        default: 0.97
    },  {
        name: 'frameVelocityThreshold',
        type: 'number',
        default: 0.25
    },  {
        name: 'mouseFrameDistanceTolerance',
        type: 'number',
        default: 0.075
    }, {
        name: 'mouseFrameVelocityDecay',
        type: 'number',
        default: 0.97
    },  {
        name: 'mouseFrameVelocityThreshold',
        type: 'number',
        default: 0.25
    }, {
        name: 'keyboardSmootheningLerp',
        type: 'number',
        default: 0.2
    }]
});




GameConfig.attributes.add('movement', {
    type: 'json',
    schema: [{
        name: 'velocity',
        type: 'number',
        default: 5
    }, {
        name: 'velocityDamping',
        type: 'number',
        default: 0.01,
        min: 0
    }, {
        name: 'deadVelocityDamping',
        type: 'number',
        default: 0.985,
        min: 0
    }, {
        name: 'kickScaleXZ',
        type: 'number',
        default: 3
    }, {
        name: 'kickForceY',
        type: 'number',
        default: 12
    }]
});


GameConfig.attributes.add('jumper', {
    type: 'json',
    schema: [{
        name: 'jumpCurve',
        type: 'curve',
        default: {
            keys: [ 0, 0, 0.153, 0.713, 0.4, 1, 1, 0 ]
        }
    }, {
        name: 'jumpHeight',
        type: 'number',
        default: 10
    }, {
        name: 'horizontalSpeed',
        type: 'number',
        default: 25
    }, {
        name: 'easing',
        type: 'string',
        default: "Linear",
        enum: GameConfig.EASINGS
    }, {
        name: 'easingPower',
        type: 'number',
        default: 1.0,
        min: 0,
        max: 1
    }]
});




GameConfig.attributes.add('AI', {
    type: 'json',
    schema: [{
        name: 'turnSpeed',
        type: 'number',
        description: "Turn speed (degrees per second)",
        default: 450
    },{
       name: 'stairsTurnSpeed',
        type: 'number',
        description: "Turn speed on stairs (degrees per second)",
        default: 720
    }, {
        name: 'velocityScale',
        type: 'number',
        default: 1.0
    }, {
        name: 'targetDistanceThresholdH',
        type: 'number',
        description: "Max horizontal (X/Z) distance to target to consider target as reached",
        default: 0.5
    }, {
        name: 'targetDistanceThresholdV',
        type: 'number',
        description: "Max vertical (Y) distance to target to consider target as reached. Recommended not less than 0.8",
        default: 0.85
    }, {
        name: 'goToStairsChancePerEachBrick',
        type: 'number',
        default: 0.1
    }, {
        name: 'aiRespawnCooldown',
        type: 'number',
        default: 3000
    }, {
        name: 'stuckingPreventionCooldown',
        type: 'number',
        default: 3
    }, {
        name: 'maxDistanceToConsiderStucked',
        type: 'number',
        default: 0.15
    }, {
        name: 'droppedBrickVisionDistance',
        type: 'number',
        default: 10
    }, {
        name: 'droppedBrickSearchCooldown',
        description: "How ofter can AI bot search for dropped bricks, in milliseconds",
        type: 'number',
        default: 500
    }, {
        name: 'chanceToReactOnDroppedBrick',
        type: 'number',
        default: 0.2,
        min: 0,
        max: 1
    }, {
        name: 'chanceToPickupDroppedBrickVsNormalBrick',
        type: 'number',
        default: 0.6,
    }, {
        name: 'nicknames',
        type: 'string',
        array: true
    }]
});


GameConfig.attributes.add('brick', {
    type: 'json',
    schema: [{
        name: 'size',
        type: 'vec3',
        default: [0.65, 0.15, 0.35]
    }, {
        name: 'appearingDuration',
        type: 'number',
        default: 0.2
    }, {
        name: 'maxActivationDelay',
        type: 'number',
        default: 500
    }, {
        name: 'appearingStartScale',
        type: 'vec3',
        default: [0, 0, 0]
    }, {
        name: 'appearingEasing',
        type: 'string',
        default: "Linear",
        enum: GameConfig.EASINGS
    }]
});


GameConfig.attributes.add('stair', {
    type: 'json',
    schema: [{
        name: 'appearingDuration',
        type: 'number',
        default: 0.2
    }, {
        name: 'appearingStartScale',
        type: 'vec3',
        default: [0, 0, 0]
    },  {
        name: 'appearingStartPosition',
        type: 'vec3',
        default: [0, -1, 0]
    }, {
        name: 'appearingEasing',
        type: 'string',
        default: "Linear",
        enum: GameConfig.EASINGS
    }]
});


GameConfig.attributes.add('templates', {
    type: 'json',
    schema: [{
        name: 'stickman',
        type: 'asset',
        assetType: 'template'
    }, {
        name: 'stickmanAI',
        type: 'asset',
        assetType: 'template'
    }, {
        name: 'brickSpot',
        type: 'asset',
        assetType: 'template'
    }]
});



GameConfig.attributes.add('platform', {
    type: 'json',
    schema: [{
        name: 'material',
        type: 'asset',
        assetType: 'material'
    }]
});


GameConfig.attributes.add('skins', {
    type: 'json',
    schema: [{
        name: 'material',
        type: 'asset',
        assetType: 'material'
    }, {
        name: 'name',
        type: 'string'
    }],
    array: true
});



/* Global methods */

GameConfig.prototype.initialize = function() {
    GameConfig.app = this.app;
    GameConfig.instance = this;    
};

GameConfig.getAttribute = function(category, key) {
    if(!category) {
        console.warn('GameConfig.getAttribute: invalid category param ', category);
        return null;
    }
    if(GameConfig.instance[category] === undefined) {
        console.warn('GameConfig doesn\'t contain  category  ' + category);
        return null;
    } else {
        if(key !== undefined) {
            if(GameConfig.instance[category][key] === undefined) {
               console.warn('GameConfig doesn\'t contain key  ' +  category + " > " + key);
               return null;     
            } else {
                return GameConfig.instance[category][key];
            }
        }  else {
            return GameConfig.instance[category];
        }    
    } 
};

GameConfig.setAttribute = function(category, key, value) {
     if(GameConfig.instance[category] === undefined) {
        console.warn('GameConfig.setAttribute: invalid category  ' + category);
        return;
    } else if(GameConfig.instance[category][key] === undefined) {
       console.warn('GameConfig.setAttribute: invalid key  ' +  category + " > " + key);
       return;     
    } else {
        GameConfig.instance[category][key] = value;
    }
};

// follow.js
var Follow = pc.createScript('follow');

Follow.attributes.add('target', {
    type: 'entity',
    title: 'Target',
    description: 'The Entity to follow'
});

Follow.attributes.add('distance', {
    type: 'number',
    default: 4,
    title: 'Distance',
    description: 'How far from the Entity should the follower be'
});

Follow.attributes.add('maxDistance', {
    type: 'number',
    default: 25,
    title: 'Max desktop distance',
});

Follow.attributes.add('maxMobileDistance', {
    type: 'number',
    default: 20,
    title: 'Max mobile distance',
});

Follow.attributes.add('shift', {
    type: 'vec3',
    default: [0, 0.75, 1.0],
    title: 'Shift factor',
});

Follow.attributes.add('inertia', {
    type: 'number',
    default: 0.05,
    title: 'Inertia'
});

Follow.attributes.add('minBricksToIncreaseDistance', {
    type: 'number',
    default: 10,
});

Follow.attributes.add('extraDistancePerBrick', {
    type: 'number',
    default: 0.05,
});


Follow.prototype.initialize = function() {
    this.vec = new pc.Vec3();
};

Follow.prototype.update = function(dt) {
    if (!this.target) return;
    
    this.followTarget(this.inertia);
};


Follow.prototype.setTarget = function(target) {
    this.target = target;
    if (!this.target) return;

    this.followTarget(0.9);
};

Follow.prototype.followTarget = function(inertia) {
    // get the position of the target entity
    const targetPos = this.target.getPosition();
    const pos = targetPos.clone();
    const deltaPos = new pc.Vec3(
        this.shift.x * this.distance,
        this.shift.y * this.distance,
        this.shift.z * this.distance
    );
    
    if(this.target.tags.has('stickman')) {
        const numBricks = this.target.backpack.capacity;
        if(numBricks > this.minBricksToIncreaseDistance) {
            deltaPos.scale( 1 + (numBricks - this.minBricksToIncreaseDistance) * this.extraDistancePerBrick);
        }
        const maxDistance = pc.platform.mobile ? this.maxMobileDistance : this.maxDistance;
        if(deltaPos.length() > maxDistance) {
            deltaPos.scale(maxDistance / deltaPos.length());
        }
    }
    
    // calculate the desired position for this entity
    pos.add(deltaPos);
    
    // smoothly interpolate towards the target position
    this.vec.lerp(this.vec, pos, inertia);

    // set the position for this entity
    this.entity.setPosition(this.vec); 
    
    //calculate camera displacement
    this.entity.cameraDisplacement = this.vec.clone().sub(targetPos).sub(deltaPos);
};

// utils.js
/* jshint esversion: 6 */
var Utils = pc.createScript('utils');

Utils.prototype.initialize = function() {
    Utils.app = this.app;
    
    this.injectMeshCollisionSystem();
};

Utils.prototype.update = function(dt) {
    
};

Utils.prototype.injectMeshCollisionSystem = function() {    
   
};

pc.Entity.prototype.delayedCall = function (durationMS, f, scope) {
    var n = 0;
    while(this["delayedExecuteTween" + n]) {
        n++;
    }
    var id = "delayedExecuteTween" + n;
    var m;
    this[id] = this.tween(m)
        .to(1, durationMS / 1000, pc.Linear)
    ;
    this[id].start();
    
    this[id].once("complete", function() {
        f.call(scope);
        this[id] = null;
    }, this);
    
    return this[id];
};

Utils.raycastAll = function(from, to, results) {
    results = results || [];
    lastResult = this.app.systems.rigidbody.raycastFirst(from, to);
    if (lastResult) {
        if(lastResult.entity){  
            for(var i = 0; i < results.length; i++){
                if(results[i] === lastResult.entity){
                    return results;
                }
            }
           results.push(lastResult.entity);
           Utils.raycastAll(lastResult.point.sub(lastResult.normal.scale(0.001)), to, results);
        }
    }
    return results;
};

/**
 *  Raycast through multiple entities returning RaycastResult instances (entity, point, normal) instead of entities. 
 **/
pc.Application.prototype.raycastAllAdvanced = function(from, to, results) {
    results = results || [];
    lastResult = this.systems.rigidbody.raycastFirst(from, to);
    if (lastResult) {
        if(lastResult.entity){  
            // this prevents rays from bouncing off the same entities
            // in a loop causing ammojs to crash
            for(var i = 0; i < results.length; i++){
                if(results[i].entity === lastResult.entity){
                    return results;
                }
            }
           results.push(lastResult);
           this.raycastAllAdvanced(lastResult.point.sub(lastResult.normal.scale(0.001)), to, results);
        }
    }
    return results;
};

    
pc.Application.prototype.raycastAll = function(from, to, results) {
    
    if(!this.raycastFiltered) {
            let n = new Ammo.btVector3;
            let t = new Ammo.btVector3;
            let e = function(n, t, e) {
                this.entity = n,
                this.point = t,
                this.normal = e;
            };
            pc.Application.prototype.raycastFiltered = function(o, i) {
                n.setValue(o.x, o.y, o.z),
                t.setValue(i.x, i.y, i.z);
                var l = new Ammo.ClosestRayResultCallback(n,t);
                //l.set_m_collisionFilterGroup(r),
                //l.set_m_collisionFilterMask(a),
                this.systems.rigidbody.dynamicsWorld.rayTest(n, t, l);
                var s = null;
                if (l.hasHit()) {
                    var u = l.get_m_collisionObject()
                      , c = Ammo.castObject(u, Ammo.btRigidBody)
                      , m = l.get_m_hitPointWorld()
                      , d = l.get_m_hitNormalWorld();
                    c && (s = new e(c.entity,new pc.Vec3(m.x(),m.y(),m.z()),new pc.Vec3(d.x(),d.y(),d.z())))
                }
                return Ammo.destroy(l),
                s
            }
    }
    
    results = results || [];
    lastResult = this.raycastFiltered(from, to);
    if (lastResult) {
        if(lastResult.entity){  
            // this prevents rays from bouncing off the same entities
            // in a loop causing ammojs to crash
            for(var i = 0; i < results.length; i++){
                if(results[i].entity === lastResult.entity){
                    return results;
                }
            }
           results.push(lastResult);
           this.raycastAll(lastResult.point.sub(lastResult.normal.scale(0.001)), to, results);
        }
    }
    return results;
};


pc.Entity.prototype.childrenAlphaAppear = function(initialAlpha, duration, sine, delay) {
    for(var i = this.children.length - 1; i > -1; i--) {
        var child = this.children[i];
        if(child instanceof pc.Entity) {
           child.childrenAlphaAppear(initialAlpha, duration, sine, delay);
        }
        if(child.element) {
            var targetAlpha = child.element.opacity;
            child.element.opacity = initialAlpha;
            child.tween(child.element)
                .to({opacity: targetAlpha}, duration, sine)
                .delay(delay)
                .start();
        }
    }
};

pc.GraphicsDevice.prototype.updateClientRect = function() {    
    if(window.visualViewport) {
        this.clientRect = this.canvas.getBoundingClientRect();
        this.clientRect.x = window.visualViewport.offsetLeft;
        this.clientRect.y = window.visualViewport.offsetTop;
        this.clientRect.width = window.visualViewport.width;        
        this.clientRect.height = window.visualViewport.height;
    } else {
        this.clientRect = this.canvas.getBoundingClientRect();
    }    
};

Utils.lerpColor = function(colorA, colorB, progress, targetColor) {
    return targetColor.set(colorA.r + (colorB.r - colorA.r) * progress, colorA.g + (colorB.g - colorA.g) * progress, colorA.b + (colorB.b - colorA.b) * progress, 1);
};


Utils.segmentPointDistance = function(A, B, C) {
    if(!Utils.tempVectors) {
        Utils.tempVectors = {
            d: new pc.Vec3(),
            dScaled: new pc.Vec3(),
            dx1: new pc.Vec3(),
            dx2: new pc.Vec3(),
            v: new pc.Vec3(),
            P: new pc.Vec3(),            
            X1: new pc.Vec3(),
            X2: new pc.Vec3()
        };
    }    
    
    //A - the point
    //B, C - the segment start and end
    Utils.tempVectors.d.sub2(C, B).normalize();
	Utils.tempVectors.v.sub2(A, B);
	const t = Utils.tempVectors.v.dot(Utils.tempVectors.d);
	Utils.tempVectors.P.add2(B, Utils.tempVectors.d.scale(t));
	return Utils.tempVectors.P.distance(A);
};


Utils.checkSegmentSphereIntersection = function(B, C, A, r) {
    if(!Utils.tempVectors) {
        Utils.tempVectors = {
            d: new pc.Vec3(),
            dScaled: new pc.Vec3(),
            dx1: new pc.Vec3(),
            dx2: new pc.Vec3(),
            v: new pc.Vec3(),
            P: new pc.Vec3(),            
            X1: new pc.Vec3(),
            X2: new pc.Vec3()
        };
    }    
    
    //A - the point
    //B, C - the segment start and end
    const lengthBCSquared = (B.x - C.x) * (B.x - C.x)  + (B.y - C.y) * (B.y - C.y) + (B.z - C.z) * (B.z - C.z); 
    const lengthABSquared = (A.x - B.x) * (A.x - B.x)  + (A.y - B.y) * (A.y - B.y) + (A.z - B.z) * (A.z - B.z);
    const lengthACSquared = (A.x - C.x) * (A.x - C.x)  + (A.y - C.y) * (A.y - C.y) + (A.z - C.z) * (A.z - C.z);
    
    //if any of the end points is inside of the sphere, then true
    if(lengthABSquared <= r * r || lengthACSquared <= r * r) {
        return true;
    }
    
    Utils.tempVectors.d.sub2(C, B).normalize();
	Utils.tempVectors.v.sub2(A, B);
	const t = Utils.tempVectors.v.dot(Utils.tempVectors.d);
    if(t < 0 || t * t > lengthBCSquared) {
        // console.log(`perpendicular point is not on that segment: ${t * t} > ${lengthBCSquared}`);
        return false;
    }
    Utils.tempVectors.dScaled.copy(Utils.tempVectors.d);
    Utils.tempVectors.dx1.copy(Utils.tempVectors.d);
    Utils.tempVectors.dx2.copy(Utils.tempVectors.d);
	Utils.tempVectors.P.add2(B, Utils.tempVectors.dScaled.scale(t));
    const verticalDistance = Utils.tempVectors.P.distance(A);
    if(verticalDistance > r) {        
        return false;
    }
    
    const dx = Math.sqrt(r * r - verticalDistance * verticalDistance);
    const t1 = t + dx;
    const t2 = t - dx;
    return ((t1 >= 0 && t1 * t1 <= lengthBCSquared) || (t2 >= 0 && t2 * t2 <= lengthBCSquared));
};

Utils.findSegmentSphereIntersection = function(B, C, A, r) {
    if(!Utils.tempVectors) {
        Utils.tempVectors = {
            d: new pc.Vec3(),
            dScaled: new pc.Vec3(),
            dx1: new pc.Vec3(),
            dx2: new pc.Vec3(),
            v: new pc.Vec3(),
            P: new pc.Vec3(),            
            X1: new pc.Vec3(),
            X2: new pc.Vec3()
        };
    }    
    
    //A - the point
    //B, C - the segment start and end
    const lengthBCSquared = (B.x - C.x) * (B.x - C.x)  + (B.y - C.y) * (B.y - C.y) + (B.z - C.z) * (B.z - C.z); 
    Utils.tempVectors.d.sub2(C, B).normalize();
	Utils.tempVectors.v.sub2(A, B);
	const t = Utils.tempVectors.v.dot(Utils.tempVectors.d);
    // if(t < 0 || t * t > lengthBCSquared) {
    //     console.log(`perpendicular point is not on that segment: ${t * t} > ${lengthBCSquared}`);
    //     return null;
    // }
    Utils.tempVectors.dScaled.copy(Utils.tempVectors.d);
    Utils.tempVectors.dx1.copy(Utils.tempVectors.d);
    Utils.tempVectors.dx2.copy(Utils.tempVectors.d);
	Utils.tempVectors.P.add2(B, Utils.tempVectors.dScaled.scale(t));
    const verticalDistance = Utils.tempVectors.P.distance(A);
    if(verticalDistance > r) {        
        return null;
    }
    
    const dx = Math.sqrt(r * r - verticalDistance * verticalDistance);
    const t1 = t + dx;
    const t2 = t - dx;

    const results = [];
    if(t1 >= 0 && t1 * t1 <= lengthBCSquared) {
        Utils.tempVectors.X1.add2(Utils.tempVectors.P, Utils.tempVectors.dx1.scale(dx));  
        results.push(Utils.tempVectors.X1);
    }
    
    if(t2 >= 0 && t2 * t2 <= lengthBCSquared) {
        Utils.tempVectors.X2.add2(Utils.tempVectors.P, Utils.tempVectors.dx2.scale(-dx));  
        results.push(Utils.tempVectors.X2);
    }
    
	return results.length > 0 ? results : null;
};

Utils.findSpheresCollisionNormal = function(centerA, radiusA, centerB, radiusB) {    
    if(centerA.distance(centerB) <= radiusA + radiusB) {
        const direction = new pc.Vec3().sub2(centerB, centerA);
        return direction.normalize();
    }
    
    return null;    
};


Utils.distanceBetween = function(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
};

Utils.distanceSq = function(vecA, vecB) {
    let x = vecA.x - vecB.x;
    let y = vecA.y - vecB.y;
    let z = vecA.z - vecB.z;
    return x * x + y * y + z * z;
};

Utils.checkContact = function(entityA, entityB) {
    var pos1 = entityA.getPosition();
    var pos2 = entityB.getPosition();
    return Math.sqrt((pos1.x - pos2.x) * (pos1.x - pos2.x) + (pos1.z - pos2.z) * (pos1.z - pos2.z)) <=  (entityA.script.item.collisionDiameter * entityA.collisionScale / 2 + entityB.script.item.collisionDiameter * entityB.collisionScale / 2) && 
        Math.abs(pos1.y - pos2.y) <= (entityA.script.item.collisionHeight * entityA.collisionScale / 2 + entityB.script.item.collisionHeight * entityB.collisionScale / 2);
};


Utils.checkContactRough = function(entityA, entityB) {
    var scaleFactor = 1.1;
    var pos1 = entityA.getPosition();
    var pos2 = entityB.getPosition();
    return Math.sqrt((pos1.x - pos2.x) * (pos1.x - pos2.x) + (pos1.z - pos2.z) * (pos1.z - pos2.z)) <=  (entityA.script.item.collisionDiameter * entityA.collisionScale * scaleFactor / 2 + entityB.script.item.collisionDiameter * entityB.collisionScale * scaleFactor / 2) && 
        Math.abs(pos1.y - pos2.y) <= (entityA.script.item.collisionHeight * entityA.collisionScale * scaleFactor / 2 + entityB.script.item.collisionHeight * entityB.collisionScale * scaleFactor / 2);
};

Utils.contactTestInternal = function(entityA, entityB, callback) {
  
    var resultCallback = new Ammo.ConcreteContactResultCallback();
        resultCallback.addSingleResult = function(
            manifoldPoint,
            collisionObjectA,
            id0,
            index0,
            collisionObjectB,
            id1,
            index1
        ) {
            if(callback) {
                callback(entityA, entityB);
            }
        };
    
    Utils.app.systems.rigidbody.dynamicsWorld.contactPairTest(entityA.rigidbody.body, entityB.rigidbody.body, resultCallback);
};

Utils.distanceXZ = function(pos1, pos2) {
    return Math.sqrt((pos1.x - pos2.x) * (pos1.x - pos2.x) + (pos1.z - pos2.z) * (pos1.z - pos2.z));
};

Utils.distanceY = function(pos1, pos2) {
    return Math.abs(pos1.y - pos2.y);
};

Utils.distanceBetweenEntities = function(posA, posB) {
    return Math.sqrt((posA.x - posB.x) * (posA.x - posB.x) + (posA.y - posB.y) * (posA.y - posB.y) + (posA.z - posB.z) * (posA.z - posB.z));
};

Utils.tweenText = function(textElement, initialValue, targetValue, duration, delay, easing, playCountingSound, prefix, suffix) {
      textElement.element.textValue = initialValue;
      textElement.element.text = '' + (prefix || "") + Math.round(initialValue) + (suffix || "");  
      textElement.tween(textElement.element)
            .to({textValue: targetValue}, duration, easing)
            .delay(delay)
            .on('update', function() {textElement.element.text = '' + (prefix || "") + Math.round(textElement.element.textValue) + (suffix || "");})
            .start();
    
    if(playCountingSound) {
        const app = pc.Application.getApplication();
        app.root.delayedCall(delay * 1000, () => {
            app._countingSoundQueries = (app._countingSoundQueries || 0) + 1;
            app.fire(EventTypes.UNMUTE_SOUND, "counting", 0.5);
        });
        app.root.delayedCall((delay + duration) * 1000, () => {
            app._countingSoundQueries = (app._countingSoundQueries || 0) - 1;
            if(app._countingSoundQueries <= 0) {
                app.fire(EventTypes.MUTE_SOUND, "counting");
            }
        });       
    }
};

Utils.getRandomItem = function (objects, startIndex, length) {

        if (objects === null) { return null; }
        if (startIndex === undefined) { startIndex = 0; }
        if (length === undefined) { length = objects.length; }

        var randomIndex = startIndex + Math.floor(Math.random() * length);

        return objects[randomIndex] === undefined ? null : objects[randomIndex];

};

Utils.removeRandomItem = function (objects, startIndex, length) {

    if (objects === null) { // undefined or null
        return null;
    }

    if (startIndex === undefined) { startIndex = 0; }
    if (length === undefined) { length = objects.length; }

    var randomIndex = startIndex + Math.floor(Math.random() * length);
    if (randomIndex < objects.length)
    {
        var removed = objects.splice(randomIndex, 1);
        return removed[0] === undefined ? null : removed[0];
    }
    else
    {
        return null;
    }

};

Utils.randomWeightedChoise = function(array, power) {
    if (!array || array.length === 0) { return null; }
    const index = Math.floor(Math.pow(Math.random(), power) * array.length);
    return array[index];
};

Utils.shuffle = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;  
};

Utils.humanizeTime = function(seconds) {
    var restSeconds = seconds;
    var hours = Math.floor(restSeconds / 3600);
    restSeconds %= 3600;
    var minutes = Math.floor(restSeconds / 60);
    restSeconds %= 60;

    return /*(hours < 10 ? "0" : "") + hours + ":" +*/ (minutes < 10 ? "0" : "") + minutes + ":" + (restSeconds < 10 ? "0" : "") + Math.floor(restSeconds);  
};


Utils.humanizeTimeWithHours = function(seconds) {
    var restSeconds = seconds;
    var hours = Math.floor(restSeconds / 3600);
    restSeconds %= 3600;
    var minutes = Math.floor(restSeconds / 60);
    restSeconds %= 60;

    return (hours < 10 ? "0" : "") + hours + "h " + (minutes < 10 ? "0" : "") + minutes + "m ";  
};

Utils.humanizeTimeWithMinutes = function(seconds) {
    var restSeconds = seconds;
    var hours = Math.floor(restSeconds / 3600);
    restSeconds %= 3600;
    var minutes = Math.floor(restSeconds / 60);
    restSeconds %= 60;

    return (minutes < 10 ? "0" : "") + minutes + "m " + (restSeconds < 10 ? "0" : "") + Math.floor(restSeconds) + 's';  
};

Utils.getBoundingBox = function(entity, extendDistance) {
    if (entity.model && entity.model.meshInstances && entity.model.meshInstances.length > 0) {
        var meshInstances = entity.model.meshInstances;
        var bbox = new pc.BoundingBox();
        bbox.copy(meshInstances[0].aabb);
        for (var i = 1; i < meshInstances.length; i++) {
            bbox.add(meshInstances[i].aabb);
        }
        if(extendDistance) {
            bbox.halfExtents.add(extendDistance);
        }
        return bbox;
    }
    return null;
   
};


/**
 * Normalize an angle to the (-Pi, Pi] range.
 */ 
Utils.normalizeAngle = function (angle) {
    angle = angle % (2 * Math.PI);

    return angle > Math.PI ? angle - 2 * Math.PI : angle <= -Math.PI ? angle + 2 * Math.PI  : angle;
};

/**
 * Normalize an angle to the (-180, 180] range.
 */ 

Utils.normalizeDegreesAngle = function (angle) {
    angle = angle % 360;

    return angle > 180 ? angle - 360 : angle <= -180 ? angle + 360  : angle;
};

/**
 * Gets the shortest angle between `angle1` and `angle2`.
 *
 * Both angles must be in the range -180 to 180, which is the same clamped
 * range that `sprite.angle` uses, so you can pass in two sprite angles to
 * this method and get the shortest angle back between the two of them.
 *
 * The angle returned will be in the same range. If the returned angle is
 * greater than 0 then it's a counter-clockwise rotation, if < 0 then it's
 * a clockwise rotation.
 *
 * @param {number} angle1 - The first angle in the range -180 to 180.
 * @param {number} angle2 - The second angle in the range -180 to 180.
 *
 * @return {number} The shortest angle, in degrees. If greater than zero it's a counter-clockwise rotation.
 */

Utils.shortestAngleBetween = function (angle1, angle2) {
    let difference = angle2 - angle1;
    if (difference === 0) {
        return 0;
    }
    var times = Math.floor((difference - (-180)) / 360);
    return difference - (times * 360);
};


/**
 * Rotates `currentAngle` towards `targetAngle`, taking the shortest rotation distance. The `lerp` argument is the amount to rotate by in this call.
 *
 * @param {number} currentAngle - The current angle, in radians.
 * @param {number} targetAngle - The target angle to rotate to, in radians.
 * @param {number} [lerp=0.05] - The lerp value to add to the current angle.
 *
 * @return {number} The adjusted angle.
 */

Utils.rotateTo = function (currentAngle, targetAngle, lerp)
{
    if (lerp === undefined) { lerp = 0.05; }

    if (currentAngle === targetAngle)
    {
        return currentAngle;
    }

    if (Math.abs(targetAngle - currentAngle) <= lerp || Math.abs(targetAngle - currentAngle) >= (1.5707963267948966 - lerp))
    {
        currentAngle = targetAngle;
    }
    else
    {
        if (Math.abs(targetAngle - currentAngle) > Math.PI)
        {
            if (targetAngle < currentAngle)
            {
                targetAngle += 1.5707963267948966;
            }
            else
            {
                targetAngle -= 1.5707963267948966;
            }
        }

        if (targetAngle > currentAngle)
        {
            currentAngle += lerp;
        }
        else if (targetAngle < currentAngle)
        {
            currentAngle -= lerp;
        }
    }

    return currentAngle;
};

/**
 *  Returns the value (angle)/360
 */ 

Utils.getAngleValue = function (angle) {
    angle = (angle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);

    return angle / (2 * Math.PI);
};

Utils.randomInRangeSigned = function(a,b) {
    if(Math.random() <= 0.5) {
        return pc.math.random(Math.min(-a, -b), Math.max(-a, -b));
    } else {
         return pc.math.random(Math.min(a, b), Math.max(a, b)) ;
    }   
};

Utils.vibrate = function(pattern) {
    if(GameplayController.enableVibration && window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(pattern); 
    }
};

// bricksSpawner.js
var BricksSpawner = pc.createScript('bricksSpawner');


BricksSpawner.attributes.add('step', {
    type: 'vec2',
    default: [1.5, 1.25]
});


BricksSpawner.attributes.add('displacement', {
    type: 'vec3',
    default: [0, 0, 0]
});


BricksSpawner.prototype.initialize = function() {
    this.entity.bricks = [];

    if(!this.entity.brickSpawner) return console.warn('Platform ' + this.entity.path + " has no brick spawn zones defined");
    
    this.testCorners = [new pc.Vec3(), new pc.Vec3(), new pc.Vec3(), new pc.Vec3()];
    this.brickSize = GameConfig.getAttribute('brick', 'size');


    this._addEventListeners();
  
    this.on('destroy', () => {
        this._removeEventListeners();
  
    });
    
};

BricksSpawner.prototype.postInitialize = function() {

};



BricksSpawner.prototype._addEventListeners = function() {
    
    this.on('attr', this.spawnBrickSpots, this);
    this.app.on(EventTypes.LEVEL.SPAWN_BRICK_SPOTS, this.spawnBrickSpots, this);
    this.app.on(EventTypes.GameSession.SESSION_STARTED,  this._onSessionStarted, this);
    this.entity.on(EventTypes.Platform.GENERATE_BRICKS_WHEN_STICKMAN_ENTERED, this.generateBricksWhenStickmanEntered, this);
    this.entity.on(EventTypes.Platform.DESTROY_BRICKS_WHEN_STICKMAN_LEAVED, this.destroyBricksWhenStickmanLeaved, this);
    this.entity.on(EventTypes.Platform.GENERATE_BRICK_AT_EMPTY_SPOT, this.generateBrickAtEmptySpot, this);
};

BricksSpawner.prototype._removeEventListeners = function() {
    this.off('attr', this.spawnBrickSpots, this);
    this.app.off(EventTypes.LEVEL.SPAWN_BRICK_SPOTS, this.spawnBrickSpots, this);
    this.app.off(EventTypes.GameSession.SESSION_STARTED,  this._onSessionStarted, this);
    this.entity.off(EventTypes.Platform.GENERATE_BRICKS_WHEN_STICKMAN_ENTERED, this.generateBricksWhenStickmanEntered, this);
    this.entity.off(EventTypes.Platform.DESTROY_BRICKS_WHEN_STICKMAN_LEAVED, this.destroyBricksWhenStickmanLeaved, this);
    this.entity.off(EventTypes.Platform.GENERATE_BRICK_AT_EMPTY_SPOT, this.generateBrickAtEmptySpot, this);
};


BricksSpawner.prototype.calculateSpawnBounds = function() {
    this.spawnBounds = new pc.BoundingBox();
    const aabbs = this.entity.brickSpawner.children.filter(entity => entity.tags.has('spawn-zone')).map(zone => zone.model.model.meshInstances[0].aabb);
    if(aabbs.length > 0) {
        this.spawnBounds.copy(aabbs[0]);
        for (let i = 1; i < aabbs.length; i++) {
            this.spawnBounds.add(aabbs[i]);
        }
    }
};


BricksSpawner.prototype.spawnBrickSpots = function() {
    this.entity.spawnZonesAABBs = this.entity.brickSpawner.children.filter(entity => entity.tags.has('spawn-zone')).map(zone => new pc.OrientedBox(zone.getWorldTransform()));
    this.entity.skipZonesAABBs = this.entity.brickSpawner.children.filter(entity => entity.tags.has('skip-zone')).map(zone => new pc.OrientedBox(zone.getWorldTransform()));
    
    this.destroyAllBrickSpots();
    this.calculateSpawnBounds();
    this.createBrickSpots();
    this.disableSpawnZones();
};


BricksSpawner.prototype.createBrickSpots = function() {
    const containerPosition = this.spawnBounds.center; 
    const testPoint = new pc.Vec3();
    
    if(!this.step.x || !this.step.y) {
        console.error('BrickSpawner step should not be zero!');
        return;
    }
        
    const rows = Math.floor(this.spawnBounds.halfExtents.x / this.step.x); 
    const cols = Math.floor(this.spawnBounds.halfExtents.z / this.step.y); 
    
    for(let i = -rows; i <= rows; i++) {
        for(let j = -cols; j <= cols; j++) {
            testPoint.set(containerPosition.x + this.displacement.x + i * this.step.x, containerPosition.y + this.displacement.y, containerPosition.z + this.displacement.z + j * this.step.y);
            this.placeBrickSpot(testPoint);   
        }
    }
    
    console.log('Spawned ' + this.entity.brickSpots.length + " brick spots on " + this.entity.name);
};


BricksSpawner.prototype.destroyAllBrickSpots = function() {
    for(let i = this.entity.brickSpots.length - 1; i > -1; i--) {
        this.entity.destroyBrickSpot(this.entity.brickSpots[i]);
    }
};


BricksSpawner.prototype.disableSpawnZones = function() {
    this.entity.brickSpawner.enabled = false;
};



BricksSpawner.prototype.placeBrickSpot = function(point) {
    const brickHalfWidth = this.brickSize.x / 2;
    const brickHalfHeight = this.brickSize.z / 2;
    
    this.testCorners[0].set(point.x - brickHalfWidth, point.y, point.z - brickHalfHeight);
    this.testCorners[1].set(point.x + brickHalfWidth, point.y, point.z - brickHalfHeight);
    this.testCorners[2].set(point.x - brickHalfWidth, point.y, point.z + brickHalfHeight);
    this.testCorners[3].set(point.x + brickHalfWidth, point.y, point.z + brickHalfHeight);
    
    for(let skipZone of this.entity.skipZonesAABBs) {
        if(skipZone.containsPoint(point) || this.testCorners.some(testPos => skipZone.containsPoint(testPos))) {
            return;
        }
    }
    
    for(let spawnZone of this.entity.spawnZonesAABBs) {
        if(spawnZone.containsPoint(point)) {
            this.testCorners[0].set(point.x - brickHalfWidth, point.y, point.z - brickHalfHeight);
            this.testCorners[1].set(point.x + brickHalfWidth, point.y, point.z - brickHalfHeight);
            this.testCorners[2].set(point.x - brickHalfWidth, point.y, point.z + brickHalfHeight);
            this.testCorners[3].set(point.x + brickHalfWidth, point.y, point.z + brickHalfHeight);

            if(this.testCorners.every(testPos => spawnZone.containsPoint(testPos))) { // precise check
                this.entity.createBrickSpotAt(point.x, point.y + this.brickSize.y / 2, point.z);
                return;
            }    
        }
    }
};


BricksSpawner.prototype._onSessionStarted = function() {
    if(this.entity.level.firstPlatform === this.entity) {
        if(!GameConfig.getAttribute('debug', 'demoMode')) {
            const now = performance.now();
            this.entity.brickSpots.forEach((bs, index) => bs.createBrick(this.app.colorsStorage.getRandomColor(), Math.random() * GameConfig.getAttribute('gameplay', 'initialBricksSpawningDuration')));
        }
    }
};


BricksSpawner.prototype.generateBrickAtEmptySpot = function(color) {
    const maxPossibleBricks = this.entity.getMaxPossibleBricksOfColor(color);
    const currentBricksAmount = this.entity.getBrickSpotsWithColoredBricks(color).length;
    if(currentBricksAmount < maxPossibleBricks) {
        this.generateRandomBrick(color);
    } else {
        //console.log('Can not generate brick at ' + this.entity.name + ': limit of ' + color + ' bricks has reached (' + maxPossibleBricks +')');
    }
};


BricksSpawner.prototype.generateBricksWhenStickmanEntered = function(stickman) {
    if(this.entity.level.firstPlatform === this.entity) return; //do not generate bricks on first platform
        
    const numAlreadyPresentedBricks = this.entity.getBrickSpotsWithColoredBricks(stickman.color).length;
    const totalBricksToCreate = this.entity.getMaxPossibleBricksOfColor(stickman.color);
    for(let i = numAlreadyPresentedBricks; i < totalBricksToCreate; i++) {
        this.generateRandomBrick(stickman.color, (i - numAlreadyPresentedBricks) / (totalBricksToCreate - numAlreadyPresentedBricks) * GameConfig.getAttribute('gameplay', 'initialBricksSpawningDuration'));
    }
};

BricksSpawner.prototype.generateRandomBrick = function(color, delay) {
    const emptyBrickSpots = this.entity.getEmptyBrickSpots();
    const otherColorsBrickSpots = this.entity.getColoredBrickSpotsSkipingColor(color);
    
    let brickSpot = null;
    if(emptyBrickSpots.length > 0)  {
        brickSpot = Utils.removeRandomItem(emptyBrickSpots);
    } else if(otherColorsBrickSpots.length > 0) {
        brickSpot = Utils.removeRandomItem(otherColorsBrickSpots);
    }

    if(brickSpot) {
        if(!brickSpot.isEmpty()) {
            brickSpot.destroyBrick();
        }
        brickSpot.createBrick(color, delay);
    }
};

BricksSpawner.prototype.destroyBricksWhenStickmanLeaved = function(stickman) {
    // console.log('DESTROY_BRICKS_WHEN_STICKMAN_LEAVED ' + stickman.color + ' on  ' + this.entity.name);
    this.entity.brickSpots.forEach((bs, index) => {
        if(bs.hasBrick() && bs.brick.color === stickman.color) {
            bs.destroyBrick();
        }
    });
};



// selfAttachableAcessory.js
var SelfAttachableAcessory = pc.createScript('selfAttachableAcessory');

SelfAttachableAcessory.attributes.add('targetEntity', {
    type: 'entity'
});

SelfAttachableAcessory.attributes.add('boneName', {
    type: 'string',
    default: ''
});

SelfAttachableAcessory.attributes.add('localPosition', {
    type: 'vec3',
    default: [0, 0, 0]
});


SelfAttachableAcessory.attributes.add('localScale', {
    type: 'vec3',
    default: [1, 1, 1]
});


SelfAttachableAcessory.attributes.add('localEulerAngles', {
    type: 'vec3',
    default: [0, 0, 0]
});


SelfAttachableAcessory.prototype.initialize = function() {
    this._attachedToTarget = false;
    
    this.on('attr:localPosition', () =>  this.entity.setLocalPosition(this.localPosition));
    this.on('attr:localScale', () => this.entity.setLocalScale(this.localScale));
    this.on('attr:localEulerAngles', () => this.entity.setLocalEulerAngles(this.localEulerAngles));
    this.on('attr:boneName', () =>  {
        this.selfAttachToTargetEntity();
    });
    
    this.on('destroy', this.handleDestroy, this);
};

SelfAttachableAcessory.prototype.update = function(dt) {
    if(!this._attachedToTarget) {
        this.selfAttachToTargetEntity();  
    }
};

SelfAttachableAcessory.prototype.selfAttachToTargetEntity = function() {
    if(this.entity.overrideTargetModel) {
        this.targetEntity = this.entity.overrideTargetModel;
    }
    
    if(!this.targetEntity) {
        console.error('Can not attach acessory ' + this.entity.name + ': target entity is not set');
        return;
    }
    
    try {
        
        this.targetEntity.acessories = this.targetEntity.acessories || {};
        this.targetEntity.acessories[this.entity.name] = this.entity;

        this.targetNode = this.targetEntity.model.model.skinInstances[0].bones.find(bone => bone.name === this.boneName);
        
        if(this.targetNode) {
            this.entity.reparent(this.targetNode);

            this.entity.setLocalPosition(this.localPosition);
            this.entity.setLocalScale(this.localScale);
            this.entity.setLocalEulerAngles(this.localEulerAngles);
            this._attachedToTarget = true;
        } else {
             console.error('Can not attach acessory ' + this.name + ': target bone ' + this.boneName + ' not exist in model');
        }
    } catch (e) {
        //console.warn(`Error while attaching accessory ${this.entity.name} to ${this.targetEntity.name}: ` + e);
    }
};

SelfAttachableAcessory.prototype.handleDestroy = function() {
    if(this.targetEntity && this.targetEntity.acessories) {
        this.targetEntity.acessories = null;
    }
};



// backpack.js
var Backpack = pc.createScript('backpack');

Backpack.attributes.add('brickTemplate', {
    type: 'asset',
    assetType: 'template'
});

Backpack.prototype.initialize = function() {
    this._initializeEntityProperties();
    this._assignEntityMethods();
    
    // this.app.on(EventTypes.BRICK_DESTROYED, this.onBrickDestroyed, this);
    
    this.on('destroy', () => {
        for(let i = this.entity.bricks.length - 1; i > -1; i--) {
            this.entity.bricks[i].destroy();
        }
        this.entity.bricks = null;
    });
};


Backpack.prototype._initializeEntityProperties = function() {
    /* stickman */
    this.entity._stickman = null;
    Object.defineProperty(this.entity, "stickman", {
        get() {
            return this._stickman;    
        }
    });
    
    /* bricks */
    this.entity._bricks = [];    
    Object.defineProperty(this.entity, "bricks", {
        get() {
            return this._bricks;    
        }
    });
    
    /* capacity */
    Object.defineProperty(this.entity, "capacity", {
        get() {
            return this._bricks.length;    
        }
    });
};


Backpack.prototype._assignEntityMethods = function() {
    const scriptContext = this;
       
    this.entity.init  = function(stickman) {
        this._stickman = stickman;
    }.bind(this.entity);
    

    this.entity.addBrick  = function(brick, instantly) {
        scriptContext.onBrickPickedUp(brick, instantly);
    }.bind(this.entity);

    
    this.entity.popBrick  = function() {
        if(this.bricks.length > 0) {
            const poppedBrick = this.bricks.pop();
            if(this.bricks.length === 0) {
                this.stickman.fire(EventTypes.Stickman.OUT_OF_BRICKS);
            }
            return poppedBrick;
        } else return null;
    }.bind(this.entity);
    
    
    this.entity.dropBricks  = function() {        
        const droppedBricks = this.bricks.length;
        const dropPosition = this.getPosition().clone();
        let brick = this.popBrick();
        while(brick) {            
            brick.drop();
            /* go to next brick */
            brick = this.popBrick();
        }
        if(droppedBricks > 0) {
            this.delayedCall(GameConfig.getAttribute('brick', 'maxActivationDelay') + 100, () => {
                this._app.fire(EventTypes.STICKMAN_DROPPED_BRICKS, droppedBricks, dropPosition);
            });
        }
    }.bind(this.entity);
};


Backpack.prototype.update = function(dt) {
    
};

Backpack.prototype.onBrickPickedUp = function(brick, instantly) {
    const _brickWorldPosition = brick.getPosition().clone();
    brick.reparent(this.entity);
    brick.setPosition(_brickWorldPosition);
    
    brick.deactivate();

    const pendingDestroy = this.entity.capacity >= GameConfig.getAttribute('gameplay', 'maxBackpackCapacity');
    
    if(!pendingDestroy) {
        this.entity.bricks.push(brick);   
    }
        
    if(instantly) {

        if(pendingDestroy) {
            this._destroyBrick(brick);
        } else {
            brick.setLocalPosition(0, this.entity.bricks.length * 0.12, 0);
        }
        
    } else {
        const targetPosition = new pc.Vec3(0, this.entity.bricks.length * 0.12, 0);

        brick.tween(brick.getLocalPosition())
            .to(targetPosition, 0.2 + this.entity.bricks.length * 0.0075, pc.BackOut)
            .start();

        brick.tween(brick.getLocalRotation())
            .rotate(new pc.Vec3(180, 0, 180), 0.2 + this.entity.bricks.length * 0.0075, pc.SineInOut)
            .on('complete', () => {
                if(pendingDestroy) this._destroyBrick(brick);
             })
            .start();
    }    
   
};

Backpack.prototype._destroyBrick = function(brick) {
    if(brick && brick.destroy) {
        brick.destroy();
    }
};



// brick.js
var Brick = pc.createScript('brick');

Brick.attributes.add('trigger', {
    type: 'entity'
});

Brick.attributes.add('brickModel', {
    type: 'entity'
});

Brick.CURRENT_BRICK_ID = 0;

Brick.prototype.initialize = function() {
    if(!this.trigger) console.error('Brick: collision trigger is not defined');
    if(!this.brickModel) console.error('Brick: brick model is not set');
        
    this.entity._brickID = Brick.CURRENT_BRICK_ID++;
    this.entity.triggerVolume = this.trigger;
    this.entity.brickModel = this.brickModel;
    this.entity.yElevation = -this.brickModel.getLocalPosition().y;
    
    this._addEventListeners();   
    this._initializeEntityProperties();
    this._assignEntityMethods();
    
    // this.entity.color = 'default';    
    
    this.on('destroy', () => {
        this.app.fire(EventTypes.BRICK_DEACTIVATED, this.entity);
        this.app.fire(EventTypes.BRICK_DESTROYED, this.entity);        
        this._removeEventListeners();
    });
};

Brick.prototype.postInitialize = function() {
    this._initializeColliders();
};


Brick.prototype.update = function(dt) {  
    this._verifyTriggerActivationPossible();
    this._verifyFallOutCondition();
};


/* private */

Brick.prototype._addEventListeners = function() {
    this.entity.on(EventTypes.ENTITY_CACHED, this.onCached, this);
    this.entity.on(EventTypes.ENTITY_REUSED_FROM_CACHE, this.onReusedFromCache, this);
};

Brick.prototype._removeEventListeners = function() {
    if(this.entity && this.entity.triggerVolume && this.entity.triggerVolume.collision) this.entity.triggerVolume.collision.off('triggerenter', this.onTriggerEnter, this);
    if(this.entity && this.entity.collision)  this.entity.collision.off('collisionstart', this.onCollisionStart, this);
    if(this.entity) this.entity.off(EventTypes.ENTITY_CACHED, this.onCached, this);
    if(this.entity) this.entity.off(EventTypes.ENTITY_REUSED_FROM_CACHE, this.onReusedFromCache, this);
};



Brick.prototype.onCached = function() {
    this.entity.brickSpot = null;
    this.entity._active = null;
    this.entity.collision.enabled = false;
    this.entity.rigidbody.enabled = false;
    this.entity.triggerVolume.collision.enabled = false;
    if(this.entity._activationDelayedCall) {
        this.entity._activationDelayedCall.stop();
        this.entity._activationDelayedCall = null;
    }
    // console.log(`cached #${this.entity._brickID}`);
};


Brick.prototype.onReusedFromCache = function() {
    this.entity.brickSpot = null;
    this.entity._active = null;
    this.entity.rigidbody.type = pc.BODYTYPE_KINEMATIC;    
    this.entity.rigidbody.enabled = true;
    this.entity.collision.enabled = true;
    this.entity.triggerVolume.enabled = true;
    this.entity.triggerVolume.collision.enabled = true;
    // console.log(`reused #${this.entity._brickID}`);
};

Brick.prototype._initializeEntityProperties = function() {
    const scriptContext = this;
    
    this.entity._color = null;
    Object.defineProperty(this.entity, "color", {
        get() {
            return this._color;    
        },
        
        set(value) {
            
            if(this._color !== value) {
                this._color = value;     
                this.brickModel.model.model.meshInstances[0].material = this._app.colorsStorage.getMaterial(this._color);
                if(this.rigidbody) {
                    this.rigidbody.group = this._app.colorsStorage.getBrickCollisionGroup(this._color);
                    this.rigidbody.mask = this._app.colorsStorage.getBrickCollisionMask(this._color);
                }
            } 
        }
    });
    
    
    this.entity._active = null;
    Object.defineProperty(this.entity, "active", {
        get() {
            return this._active;    
        },
        
        set(value) {
            if(value !== this._active) {
                this._active = value;    
                this._app.fire(value ? EventTypes.BRICK_ACTIVATED : EventTypes.BRICK_DEACTIVATED, this);
            }
        }
    });
    
    
    /* brick spot */
    this.entity._brickSpot = null;
    Object.defineProperty(this.entity, "brickSpot", {
        get() {
            return this._brickSpot;    
        },
        
        set(value) {
            this._brickSpot = value;     
        }
    });
};


Brick.prototype._assignEntityMethods = function() {
    const scriptContext = this;
  
    this.entity.drop = function() {
        
        this.color = this._app.colorsStorage.getDefaultColor();
        
        const brickPosition = this.getPosition().clone();
        const brickRotation = this.getRotation().clone();
        this.reparent(GameConfig.getAttribute('hierarchy', 'DroppedBricks'));
        this.setPosition(brickPosition);
        this.setRotation(brickRotation);
        this.rigidbody.type = pc.BODYTYPE_DYNAMIC;
        this.rigidbody.group = this._app.colorsStorage.getBrickCollisionGroup(this._color);
        this.rigidbody.mask = this._app.colorsStorage.getBrickCollisionMask(this._color);
        this.activateBody();    
        this.rigidbody.applyImpulse(new pc.Vec3(pc.math.random(-5, 5), pc.math.random(2, 4), pc.math.random(-5, 5)), new pc.Vec3(pc.math.random(-0.1, 0.1), pc.math.random(-0.1, 0.1), pc.math.random(-0.1, 0.1)));
        
        if(this._activationDelayedCall) {
            this._activationDelayedCall.stop();
            this._activationDelayedCall = null;
        }
        this._activationDelayedCall = this.delayedCall(GameConfig.getAttribute('brick', 'maxActivationDelay'), () => {
            this.activateTriggerOnly();
            this._activationDelayedCall = null;
        });

    }.bind(this.entity);
    
    this.entity.deactivate = function() {
        this.triggerVolume.enabled = false;
        this.rigidbody.enabled = false;
        this.collision.enabled = false;
        this.active = false;
    }.bind(this.entity);
        
    
    this.entity.activateBody = function() {
        this.triggerVolume.enabled = false;
        this.rigidbody.enabled = true;
        this.collision.enabled = true;
    }.bind(this.entity);
    
    
    this.entity.activateTriggerOnly = function() {
        this.triggerVolume.enabled = true;
        this.active = true;
    }.bind(this.entity);
        
    
    this.entity.deactivateBody = function() {
        this.triggerVolume.enabled = true;
        this.collision.enabled = false;
        this.rigidbody.enabled = false;
    }.bind(this.entity);
    
        
    this.entity.tweenAppearing = function(delay) {
        this._initialScale = this._initialScale || this.getLocalScale().clone();
        const startScale = GameConfig.getAttribute('brick', 'appearingStartScale');
        this.setLocalScale(startScale, startScale, startScale);
        this.tween(this.getLocalScale())
            .to(this._initialScale, GameConfig.getAttribute('brick', 'appearingDuration'), pc[GameConfig.getAttribute('brick', 'appearingEasing')])
            .delay(delay || 0)
            .start();
    }.bind(this.entity);
    
};

Brick.prototype._initializeColliders = function() {
    this.entity.triggerVolume.collision.on('triggerenter', this.onTriggerEnter, this);
    this.entity.collision.on('collisionstart', this.onCollisionStart, this);
};


Brick.prototype._verifyTriggerActivationPossible = function() {
    if(this._pendingRigidbodyDisable) {
        if(this.entity.rigidbody && this.entity.rigidbody.enabled) {
            const velocity = this.entity.rigidbody.linearVelocity;
            const velocityDamping = GameConfig.getAttribute('gameplay', 'brickLinearVelocityDamping');
            velocity.x *= velocityDamping.x;
            velocity.y *= velocityDamping.y;
            velocity.z *= velocityDamping.z;
            this.entity.rigidbody.linearVelocity = velocity;
            
            const angularVelocity = this.entity.rigidbody.angularVelocity;
            const angularVelocityDamping = GameConfig.getAttribute('gameplay', 'brickAngularVelocityDamping');
            angularVelocity.x *= angularVelocityDamping.x;
            angularVelocity.y *= angularVelocityDamping.y;
            angularVelocity.z *= angularVelocityDamping.z;
            this.entity.rigidbody.angularVelocity = angularVelocity;
            
            if(this.entity.rigidbody.linearVelocity.length() < GameConfig.getAttribute('gameplay', 'brickLinearVelocityThreshold') && this.entity.rigidbody.angularVelocity.length() < GameConfig.getAttribute('gameplay', 'brickAngularVelocityThreshold')) {
                this._pendingRigidbodyDisable = false;
                this.entity.deactivateBody();
                if(this.entity._activationDelayedCall) {
                    this.entity.activateTriggerOnly();
                    this.entity._activationDelayedCall.stop();
                    this.entity._activationDelayedCall = null;
                }
            }
        }
    }
};


Brick.prototype._verifyFallOutCondition = function() {
    if(this.entity.getPosition().y < GameConfig.getAttribute('gameplay', 'groundY')) {
        BricksCache.getInstance().disposeBrick(this.entity);
    }
};

Brick.prototype.onTriggerEnter = function(otherEntity) {
    if(otherEntity.tags.has('stickman')) {
        const stickman = otherEntity;
        if(stickman.alive && (this.entity.color === stickman.color || this.entity.color === this.app.colorsStorage.getDefaultColor())) {
            if(this.entity._activationDelayedCall) {
                this.entity._activationDelayedCall.stop();
                this.entity._activationDelayedCall = null;
            }
            
            this.entity.collision.enabled = false;
            if(this.entity.brickSpot) {
                this.entity.brickSpot.removeBrick();
            }        
            this.entity.color = stickman.color;
            stickman.pickupBrick(this.entity);
        }
    }
    
};



Brick.prototype.onCollisionStart = function(result) {
    if(result.other.tags.has('platform-collider', 'stairs-collider')) {
        this._pendingRigidbodyDisable = true;
    }
};


// tween.js
pc.extend(pc, function () {

    /**
     * @name pc.TweenManager
     * @description Handles updating tweens
     * @param {pc.Application} app  - The application
     */
    var TweenManager = function (app) {
        this._app = app;
        this._tweens = [];
        this._add = []; // to be added
    };

    TweenManager.prototype = {
        add: function (tween) {
            this._add.push(tween);
            return tween;
        },

        update: function (dt) {
            var i = 0;
            var n = this._tweens.length;
            while (i < n) {
                if (this._tweens[i].update(dt)) {
                    i++;
                } else {
                    this._tweens.splice(i, 1);
                    n--;
                }
            }

            // add any tweens that were added mid-update
            if (this._add.length) {
                this._tweens = this._tweens.concat(this._add);
                this._add.length = 0;
            }
        }
    };

    /**
     * @name  pc.Tween
     * @param {object} target - The target property that will be tweened
     * @param {pc.TweenManager} manager - The tween manager
     * @param {pc.Entity} entity - The pc.Entity whose property we are tweening
     */
    var Tween = function (target, manager, entity) {
        pc.events.attach(this);

        this.manager = manager;

        if (entity) {
            this.entity = null; // if present the tween will dirty the transforms after modify the target
        }

        this.time = 0;

        this.complete = false;
        this.playing = false;
        this.stopped = true;
        this.pending = false;

        this.target = target;

        this.duration = 0;
        this._currentDelay = 0;
        this.timeScale = 1;
        this._reverse = false;

        this._delay = 0;
        this._yoyo = false;

        this._count = 0;
        this._numRepeats = 0;
        this._repeatDelay = 0;

        this._from = false; // indicates a "from" tween

        // for rotation tween
        this._slerp = false; // indicates a rotation tween
        this._fromQuat = new pc.Quat();
        this._toQuat = new pc.Quat();
        this._quat = new pc.Quat();

        this.easing = pc.Linear;

        this._sv = {}; // start values
        this._ev = {}; // end values
    };

    var _parseProperties = function (properties) {
        var _properties;
        if (properties instanceof pc.Vec2) {
            _properties = {
                x: properties.x,
                y: properties.y
            };
        } else if (properties instanceof pc.Vec3) {
            _properties = {
                x: properties.x,
                y: properties.y,
                z: properties.z
            };
        } else if (properties instanceof pc.Vec4) {
            _properties = {
                x: properties.x,
                y: properties.y,
                z: properties.z,
                w: properties.w
            };
        } else if (properties instanceof pc.Quat) {
            _properties = {
                x: properties.x,
                y: properties.y,
                z: properties.z,
                w: properties.w
            };
        } else if (properties instanceof pc.Color) {
            _properties = {
                r: properties.r,
                g: properties.g,
                b: properties.b
            };
            if (properties.a !== undefined) {
                _properties.a = properties.a;
            }
        } else {
            _properties = properties;
        }
        return _properties;
    };
    Tween.prototype = {
        // properties - js obj of values to update in target
        to: function (properties, duration, easing, delay, repeat, yoyo) {
            this._properties = _parseProperties(properties);
            this.duration = duration;

            if (easing) this.easing = easing;
            if (delay) {
                this.delay(delay);
            }
            if (repeat) {
                this.repeat(repeat);
            }

            if (yoyo) {
                this.yoyo(yoyo);
            }

            return this;
        },

        from: function (properties, duration, easing, delay, repeat, yoyo) {
            this._properties = _parseProperties(properties);
            this.duration = duration;

            if (easing) this.easing = easing;
            if (delay) {
                this.delay(delay);
            }
            if (repeat) {
                this.repeat(repeat);
            }

            if (yoyo) {
                this.yoyo(yoyo);
            }

            this._from = true;

            return this;
        },

        rotate: function (properties, duration, easing, delay, repeat, yoyo) {
            this._properties = _parseProperties(properties);

            this.duration = duration;

            if (easing) this.easing = easing;
            if (delay) {
                this.delay(delay);
            }
            if (repeat) {
                this.repeat(repeat);
            }

            if (yoyo) {
                this.yoyo(yoyo);
            }

            this._slerp = true;

            return this;
        },

        start: function () {
            var prop, _x, _y, _z;

            this.playing = true;
            this.complete = false;
            this.stopped = false;
            this._count = 0;
            this.pending = (this._delay > 0);

            if (this._reverse && !this.pending) {
                this.time = this.duration;
            } else {
                this.time = 0;
            }

            if (this._from) {
                for (prop in this._properties) {
                    if (this._properties.hasOwnProperty(prop)) {
                        this._sv[prop] = this._properties[prop];
                        this._ev[prop] = this.target[prop];
                    }
                }

                if (this._slerp) {
                    this._toQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z);

                    _x = this._properties.x !== undefined ? this._properties.x : this.target.x;
                    _y = this._properties.y !== undefined ? this._properties.y : this.target.y;
                    _z = this._properties.z !== undefined ? this._properties.z : this.target.z;
                    this._fromQuat.setFromEulerAngles(_x, _y, _z);
                }
            } else {
                for (prop in this._properties) {
                    if (this._properties.hasOwnProperty(prop)) {
                        this._sv[prop] = this.target[prop];
                        this._ev[prop] = this._properties[prop];
                    }
                }

                if (this._slerp) {
                    this._fromQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z);

                    _x = this._properties.x !== undefined ? this._properties.x : this.target.x;
                    _y = this._properties.y !== undefined ? this._properties.y : this.target.y;
                    _z = this._properties.z !== undefined ? this._properties.z : this.target.z;
                    this._toQuat.setFromEulerAngles(_x, _y, _z);
                }
            }

            // set delay
            this._currentDelay = this._delay;

            // add to manager when started
            this.manager.add(this);

            return this;
        },

        pause: function () {
            this.playing = false;
        },

        resume: function () {
            this.playing = true;
        },

        stop: function () {
            this.playing = false;
            this.stopped = true;
        },

        delay: function (delay) {
            this._delay = delay;
            this.pending = true;

            return this;
        },

        repeat: function (num, delay) {
            this._count = 0;
            this._numRepeats = num;
            if (delay) {
                this._repeatDelay = delay;
            } else {
                this._repeatDelay = 0;
            }

            return this;
        },

        loop: function (loop) {
            if (loop) {
                this._count = 0;
                this._numRepeats = Infinity;
            } else {
                this._numRepeats = 0;
            }

            return this;
        },

        yoyo: function (yoyo) {
            this._yoyo = yoyo;
            return this;
        },

        reverse: function () {
            this._reverse = !this._reverse;

            return this;
        },

        chain: function () {
            var n = arguments.length;

            while (n--) {
                if (n > 0) {
                    arguments[n - 1]._chained = arguments[n];
                } else {
                    this._chained = arguments[n];
                }
            }

            return this;
        },

        update: function (dt) {
            if (this.stopped) return false;

            if (!this.playing) return true;

            if (!this._reverse || this.pending) {
                this.time += dt * this.timeScale;
            } else {
                this.time -= dt * this.timeScale;
            }

            // delay start if required
            if (this.pending) {
                if (this.time > this._currentDelay) {
                    if (this._reverse) {
                        this.time = this.duration - (this.time - this._currentDelay);
                    } else {
                        this.time -= this._currentDelay;
                    }
                    this.pending = false;
                    this.fire('start');
                } else {
                    return true;
                }
            }

            var _extra = 0;
            if ((!this._reverse && this.time > this.duration) || (this._reverse && this.time < 0)) {
                this._count++;
                this.complete = true;
                this.playing = false;
                if (this._reverse) {
                    _extra = this.duration - this.time;
                    this.time = 0;
                } else {
                    _extra = this.time - this.duration;
                    this.time = this.duration;
                }
            }

            var elapsed = (this.duration === 0) ? 1 : (this.time / this.duration);

            // run easing
            var a = this.easing(elapsed);

            // increment property
            var s, e;
            for (var prop in this._properties) {
                if (this._properties.hasOwnProperty(prop)) {
                    s = this._sv[prop];
                    e = this._ev[prop];
                    this.target[prop] = s + (e - s) * a;
                }
            }

            if (this._slerp) {
                this._quat.slerp(this._fromQuat, this._toQuat, a);
            }

            // if this is a entity property then we should dirty the transform
            if (this.entity) {
                this.entity._dirtifyLocal();

                // apply element property changes
                if (this.element && this.entity.element) {
                    this.entity.element[this.element] = this.target;
                }

                if (this._slerp) {
                    this.entity.setLocalRotation(this._quat);
                }
            }

            this.fire("update", dt);

            if (this.complete) {
                var repeat = this._repeat(_extra);
                if (!repeat) {
                    this.fire("complete", _extra);
                    if (this.entity)
                        this.entity.off('destroy', this.stop, this);
                    if (this._chained) this._chained.start();
                } else {
                    this.fire("loop");
                }

                return repeat;
            }

            return true;
        },

        _repeat: function (extra) {
            // test for repeat conditions
            if (this._count < this._numRepeats) {
                // do a repeat
                if (this._reverse) {
                    this.time = this.duration - extra;
                } else {
                    this.time = extra; // include overspill time
                }
                this.complete = false;
                this.playing = true;

                this._currentDelay = this._repeatDelay;
                this.pending = true;

                if (this._yoyo) {
                    // swap start/end properties
                    for (var prop in this._properties) {
                        var tmp = this._sv[prop];
                        this._sv[prop] = this._ev[prop];
                        this._ev[prop] = tmp;
                    }

                    if (this._slerp) {
                        this._quat.copy(this._fromQuat);
                        this._fromQuat.copy(this._toQuat);
                        this._toQuat.copy(this._quat);
                    }
                }

                return true;
            }
            return false;
        }

    };


    /**
     * Easing methods
     */

    var Linear = function (k) {
        return k;
    };

    var QuadraticIn = function (k) {
        return k * k;
    };

    var QuadraticOut = function (k) {
        return k * (2 - k);
    };

    var QuadraticInOut = function (k) {
        if ((k *= 2) < 1) {
            return 0.5 * k * k;
        }
        return -0.5 * (--k * (k - 2) - 1);
    };

    var CubicIn = function (k) {
        return k * k * k;
    };

    var CubicOut = function (k) {
        return --k * k * k + 1;
    };

    var CubicInOut = function (k) {
        if ((k *= 2) < 1) return 0.5 * k * k * k;
        return 0.5 * ((k -= 2) * k * k + 2);
    };

    var QuarticIn = function (k) {
        return k * k * k * k;
    };

    var QuarticOut = function (k) {
        return 1 - (--k * k * k * k);
    };

    var QuarticInOut = function (k) {
        if ((k *= 2) < 1) return 0.5 * k * k * k * k;
        return - 0.5 * ((k -= 2) * k * k * k - 2);
    };

    var QuinticIn = function (k) {
        return k * k * k * k * k;
    };

    var QuinticOut = function (k) {
        return --k * k * k * k * k + 1;
    };

    var QuinticInOut = function (k) {
        if ((k *= 2) < 1) return 0.5 * k * k * k * k * k;
        return 0.5 * ((k -= 2) * k * k * k * k + 2);
    };

    var SineIn = function (k) {
        if (k === 0) return 0;
        if (k === 1) return 1;
        return 1 - Math.cos(k * Math.PI / 2);
    };

    var SineOut = function (k) {
        if (k === 0) return 0;
        if (k === 1) return 1;
        return Math.sin(k * Math.PI / 2);
    };

    var SineInOut = function (k) {
        if (k === 0) return 0;
        if (k === 1) return 1;
        return 0.5 * (1 - Math.cos(Math.PI * k));
    };

    var ExponentialIn = function (k) {
        return k === 0 ? 0 : Math.pow(1024, k - 1);
    };

    var ExponentialOut = function (k) {
        return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);
    };

    var ExponentialInOut = function (k) {
        if (k === 0) return 0;
        if (k === 1) return 1;
        if ((k *= 2) < 1) return 0.5 * Math.pow(1024, k - 1);
        return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);
    };

    var CircularIn = function (k) {
        return 1 - Math.sqrt(1 - k * k);
    };

    var CircularOut = function (k) {
        return Math.sqrt(1 - (--k * k));
    };

    var CircularInOut = function (k) {
        if ((k *= 2) < 1) return - 0.5 * (Math.sqrt(1 - k * k) - 1);
        return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    };

    var ElasticIn = function (k) {
        var s, a = 0.1, p = 0.4;
        if (k === 0) return 0;
        if (k === 1) return 1;
        if (!a || a < 1) {
            a = 1; s = p / 4;
        } else s = p * Math.asin(1 / a) / (2 * Math.PI);
        return - (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
    };

    var ElasticOut = function (k) {
        var s, a = 0.1, p = 0.4;
        if (k === 0) return 0;
        if (k === 1) return 1;
        if (!a || a < 1) {
            a = 1; s = p / 4;
        } else s = p * Math.asin(1 / a) / (2 * Math.PI);
        return (a * Math.pow(2, - 10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);
    };

    var ElasticInOut = function (k) {
        var s, a = 0.1, p = 0.4;
        if (k === 0) return 0;
        if (k === 1) return 1;
        if (!a || a < 1) {
            a = 1; s = p / 4;
        } else s = p * Math.asin(1 / a) / (2 * Math.PI);
        if ((k *= 2) < 1) return - 0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
        return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
    };

    var BackIn = function (k) {
        var s = 1.70158;
        return k * k * ((s + 1) * k - s);
    };

    var BackOut = function (k) {
        var s = 1.70158;
        return --k * k * ((s + 1) * k + s) + 1;
    };

    var BackInOut = function (k) {
        var s = 1.70158 * 1.525;
        if ((k *= 2) < 1) return 0.5 * (k * k * ((s + 1) * k - s));
        return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    };

    var BounceOut = function (k) {
        if (k < (1 / 2.75)) {
            return 7.5625 * k * k;
        } else if (k < (2 / 2.75)) {
            return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
        } else if (k < (2.5 / 2.75)) {
            return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
        }
        return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;

    };

    var BounceIn = function (k) {
        return 1 - BounceOut(1 - k);
    };

    var BounceInOut = function (k) {
        if (k < 0.5) return BounceIn(k * 2) * 0.5;
        return BounceOut(k * 2 - 1) * 0.5 + 0.5;
    };

    return {
        TweenManager: TweenManager,
        Tween: Tween,
        Linear: Linear,
        QuadraticIn: QuadraticIn,
        QuadraticOut: QuadraticOut,
        QuadraticInOut: QuadraticInOut,
        CubicIn: CubicIn,
        CubicOut: CubicOut,
        CubicInOut: CubicInOut,
        QuarticIn: QuarticIn,
        QuarticOut: QuarticOut,
        QuarticInOut: QuarticInOut,
        QuinticIn: QuinticIn,
        QuinticOut: QuinticOut,
        QuinticInOut: QuinticInOut,
        SineIn: SineIn,
        SineOut: SineOut,
        SineInOut: SineInOut,
        ExponentialIn: ExponentialIn,
        ExponentialOut: ExponentialOut,
        ExponentialInOut: ExponentialInOut,
        CircularIn: CircularIn,
        CircularOut: CircularOut,
        CircularInOut: CircularInOut,
        BackIn: BackIn,
        BackOut: BackOut,
        BackInOut: BackInOut,
        BounceIn: BounceIn,
        BounceOut: BounceOut,
        BounceInOut: BounceInOut,
        ElasticIn: ElasticIn,
        ElasticOut: ElasticOut,
        ElasticInOut: ElasticInOut
    };
}());

// Expose prototype methods and create a default tween manager on the application
(function () {
    // Add pc.Application#addTweenManager method
    pc.Application.prototype.addTweenManager = function () {
        this._tweenManager = new pc.TweenManager(this);

        this.on("update", function (dt) {
            this._tweenManager.update(dt);
        });
    };

    // Add pc.Application#tween method
    pc.Application.prototype.tween = function (target) {
        return new pc.Tween(target, this._tweenManager);
    };
    
        
    pc.Application.prototype.stopAllTweens = function (target) {
        for(var i = this._tweenManager._tweens.length - 1; i > -1; i--) {
            if(this._tweenManager._tweens[i].entity === target) {
                this._tweenManager._tweens[i].stop();
            }
        }
    };

    // Add pc.Entity#tween method
    pc.Entity.prototype.tween = function (target, options) {
        var tween = this._app.tween(target);
        tween.entity = this;

        this.once('destroy', tween.stop, tween);

        if (options && options.element) {
            // specifiy a element property to be updated
            tween.element = options.element;
        }
        return tween;
    };

    // Create a default tween manager on the application
    var application = pc.Application.getApplication();
    if (application) {
        application.addTweenManager();
    }
})();

// Stickman.js
var Stickman = pc.createScript('stickman');

Stickman.attributes.add('color', {
    type: 'string'
});

Stickman.attributes.add('stickmanModel', {
    type: 'entity'
});

Stickman.attributes.add('backpack', {
    type: 'entity'
});

Stickman.attributes.add('accessoryContainer', {
    type: 'entity'
});

Stickman._lastID = 0;

Stickman.prototype.initialize = function() {
    this._initializeEntityComponents();
    this._initializeEntityProperties();
    this._assignEntityMethods();
    this._addEventListeners();
  
    /* set random color */
    if(!this.color) {
        console.error('Color should be set for stickman ' + this.entity.path);
        this.color = this.app.colorsStorage.getRandomColor();
    }
    
    this.entity.color = this.color;
    this.entity.isPlayer = this.entity.tags.has('player-stickman');
    this.entity._stickmanID = ++Stickman._lastID;
    
    this.entity._jumpProgress = 0;
    this.entity._jumpStartPosition = null;
    this.entity._jumpDeltaPosition = null;
    this.entity._jumpTargetPosition = null;
    this.entity._jumpDuration = 0;
    
    this.on('destroy', () => {
        this.entity.backpack.destroy();
        this.entity.stickmanModel.destroy();
        if(this.entity.collision) this.entity.collision.off('collisionstart');
    });
};

Stickman.prototype.postInitialize = function() {
    this.entity.backpack.init(this.entity);
    this._initializeColliders();
};

Stickman.prototype.update = function(dt) {
    this.updateInvincibleCountdown(dt);   
    this.updateInvincibleStatus(dt);   
    this.updateJumpingProgress(dt);   
    // this.entity.nicknameTextField.element.opacity = this.entity.invincible ? 0.5 : 1;   
};

Stickman.prototype.postUpdate = function(dt) {

};

/* private */

Stickman.prototype._initializeEntityComponents = function() {
    /* entity components */
    this.entity.backpack = this.backpack;
    this.entity.stickmanModel = this.stickmanModel;
    this.entity.nicknameTextField =  this.entity.findByName('StickmanText');        
    this.entity.accessoryContainer =  this.accessoryContainer;
};

Stickman.prototype._initializeEntityProperties = function() {
    
    /* skin color */
    this.entity._color = null;    
    Object.defineProperty(this.entity, "color", {
        get() {
            return this._color;    
        },
        set(value) {
            this._color = value;     
            this.stickmanModel.model.model.meshInstances.forEach(mesh => mesh.material = this._app.colorsStorage.getMaterial(this._color));
            this.rigidbody.group = this._app.colorsStorage.getStickmanCollisionGroup(this._color);
        }
    });
    
    
    /* nickname */
    this.entity._nickname = "Stickman";    
    Object.defineProperty(this.entity, "nickname", {
        get() {
            return this._nickname;    
        },
        set(value) {
            this._nickname = value;    
            this.nicknameTextField.element.text = this._nickname;            
        }
    });
    
    
    /* alive status */
    this.entity._alive = true;
    Object.defineProperty(this.entity, "alive", {
        get() {
            return this._alive;    
        },
        set(value) {
            const valueChanged = this._alive != value;
            this._alive = value;
            if(valueChanged) {
                this.fire('status:alive', value);
                if(!this._alive) {
                    this.fire(EventTypes.Stickman.DIED);
                } else {
                    this.fire(EventTypes.Stickman.REVIVED);
                }
            }
            
        }
    });
    
    /* finished status */
    this.entity._finished = false;
    Object.defineProperty(this.entity, "finished", {
        get() {
            return this._finished;    
        },
        set(value) {
            if(this._finished != value) {
                this.fire('status:finished', value);
            }
            this._finished = value;           
            if(this._finished) this.rigidbody.linearVelocity = new pc.Vec3(0, 0, 0);
        }
    });
    
    /* finish place  */
    this.entity._finishPlace = false;
    Object.defineProperty(this.entity, "finishPlace", {
        get() {
            return this._finishPlace;    
        },
        set(value) {
            if(this._finishPlace != value) {
                this.fire('status:finishedAtPlace', value);
            }
            this._finishPlace = value;           
        }
    });
    
    /* running status */
    this.entity._running = false;
    Object.defineProperty(this.entity, "running", {
        get() {
            return this._running;    
        },
        set(value) {
            if(this._running != value) {
                this.fire('status:running', value);
            }
            this._running = value;
        }
    });
    
    /* jumping status */
    this.entity._jumping = false;
    Object.defineProperty(this.entity, "jumping", {
        get() {
            return this._jumping;    
        },
        set(value) {
            if(this._jumping != value) {
                this.fire('status:jumping', value);
            }
            this._jumping = value;
            this.rigidbody.enabled = !this._jumping;            
        }
    });

      
    /* invincible after respawn countdown */
    this.entity._invincibleCountdown = false;
    Object.defineProperty(this.entity, "invincibleCountdown", {
        get() {
            return this._invincibleCountdown;    
        },
        set(value) {
            this._invincibleCountdown = value;
        }
    });
    
    
      
    /* invincible status */
    Object.defineProperty(this.entity, "invincible", {
        get() {
            if(!this.alive || this.finished) return true;
            if(this._invincibleCountdown > 0) return true;
            if(this.floor && (this.floor.isStairs || this.floor.isFinishPlatform)) return true;
        }
    });
    
    
    /* last painted stair */
    this.entity._lastStair = null;
    Object.defineProperty(this.entity, "lastStair", {
        get() {
            return this._lastStair;    
        },
        set(value) {
            this._lastStair = value;
        }
    });
    
    
    /* ground (feet) position */
    this.entity._groundPositionDisplacement = new pc.Vec3(0, -0.8, 0);
    Object.defineProperty(this.entity, "groundPosition", {
        get() {
            return this.getPosition().add(this._groundPositionDisplacement);    
        }
    });
    
          
    /* slowdown factor  */
    Object.defineProperty(this.entity, "slowdownFactor", {
        get() {
            return pc.math.clamp(1 - this.backpack.capacity * GameConfig.getAttribute('gameplay', 'slowdownFactorPerBrick'), GameConfig.getAttribute('gameplay', 'minRunningVelocityFactor'), 1);
        }
    });
        
    
    /* running velocity  */
    Object.defineProperty(this.entity, "runningVelocity", {
        get() {
            return GameConfig.getAttribute('movement', 'velocity') * this.slowdownFactor;
        }
    });  
    
    
    /* last platform ID  */
    this.entity._lastPlatformID = 0;
    Object.defineProperty(this.entity, "lastPlatformID", {
        get() {
            return this._lastPlatformID;
        }
    });
    
        
    /* current floor */
    this.entity._floor = null;
    Object.defineProperty(this.entity, "floor", {
        get() {
            return this._floor;    
        },
        set(value) {
            if(value !== this._floor) {
                const prevValue = this._floor;
                this._floor = value;
                if(prevValue && prevValue.isPlatform) {
                    this.fire(EventTypes.Stickman.LEAVED_PLATFORM, prevValue);
                } 
                if(prevValue && prevValue.isStairs) {
                    this.fire(EventTypes.Stickman.LEAVED_STAIRS, prevValue);
                }                 
                if(value && value.isPlatform) {
                    this._lastPlatformID = value.platformIndex;
                    this.fire(EventTypes.Stickman.ENTERED_PLATFORM, value);
                }
                if(value && value.isFinishPlatform) {                    
                    this._lastPlatformID = value.platformIndex;
                    this.fire(EventTypes.Stickman.ENTERED_FINISH_PLATFORM, value);
                }
                if(value && value.isStairs) {
                    this.fire(EventTypes.Stickman.ENTERED_STAIRS, value);
                }
                
            }
        }
    });
    
};


Stickman.prototype._assignEntityMethods = function() {
    const scriptContext = this;
    
    
    /* bricks */
    this.entity.pickupBrick = function(brick) {
        this.backpack.addBrick(brick);
        this.fire(EventTypes.Stickman.BRICK_PICKED_UP, brick);
        Apicontroller.trackStats("brick_collected", {
            color: this.color,
            by_player: !!this.isPlayer
        });
        if(this.isPlayer) {
            this._app.fire(EventTypes.PLAY_SFX, [Constants.AUDIO.PICKUP_BRICK_1, Constants.AUDIO.PICKUP_BRICK_2]);
            this._app.fire(EventTypes.Stats.PLAYER_PICKED_UP_A_BRICK);           
        }
    }.bind(this.entity);
    
    
    this.entity.createBrick = function() {
        const brick =  BricksCache.getInstance().getBrick(this.color);
        brick.setPosition(this.backpack.getPosition());
        this.backpack.addBrick(brick, false);    
        brick.color = this.color;
        
    }.bind(this.entity);
    
    
    this.entity.teleportTo = function(worldPosition) {
        if(this.rigidbody) {
            this.rigidbody.teleport(worldPosition);
            this.fire(EventTypes.Stickman.TELEPORTED);
        } else {
            console.warn('Can not teleport stickman to its target position: rigidbody is undefined', this);
        }
    }.bind(this.entity); 
    
    
    this.entity.jumpTo = function(targetPosition) {
        if(this.rigidbody) {
            this._jumpProgress = 0;
            this._jumpStartPosition = this.getPosition().clone();
            this._jumpTargetPosition = targetPosition.clone().sub(this._groundPositionDisplacement).add(new pc.Vec3(0, 0.05, 0));
            this._jumpDeltaPosition = new pc.Vec3(this._jumpTargetPosition.x - this._jumpStartPosition.x, this._jumpTargetPosition.y - this._jumpStartPosition.y, this._jumpTargetPosition.z - this._jumpStartPosition.z); 
            this._jumpDuration = Utils.distanceXZ(this._jumpStartPosition, this._jumpTargetPosition) / GameConfig.getAttribute('jumper', 'horizontalSpeed');
            this.jumping = true;
            this._app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.JUMP);
            if(this.isPlayer) {
                Apicontroller.trackStats('jumper_used');
            }
        } else {
            console.warn('Can not jump stickman to its target position: rigidbody is undefined', this);
        }
    }.bind(this.entity); 
    
    
    this.entity.lookAtCamera = function(cameraEntity) {
        this.stickmanModel.lookAt(cameraEntity);
        const localAngles = this.stickmanModel.getLocalEulerAngles();
        this.stickmanModel.setLocalEulerAngles(0, localAngles.y, 0);
    }.bind(this.entity);
};


Stickman.prototype._addEventListeners = function() {
    
};


Stickman.prototype.updateJumpingProgress = function(dt) {
    if(this.entity.jumping) {
        this.entity._jumpProgress = pc.math.clamp(this.entity._jumpProgress + dt / this.entity._jumpDuration, 0, 1);
        
        const easingPower = GameConfig.getAttribute('jumper', 'easingPower');
        const tweenedProgressValue = pc[GameConfig.getAttribute('jumper', 'easing')](this.entity._jumpProgress);
        const progressA = Math.pow(tweenedProgressValue, easingPower);
        const progressB = Math.pow(tweenedProgressValue, 1 / easingPower);
        const progress =  progressA * (1 - this.entity._jumpProgress) + progressB * this.entity._jumpProgress;
        this.entity.setPosition(
            this.entity._jumpStartPosition.x + this.entity._jumpDeltaPosition.x * progress,
            this.entity._jumpStartPosition.y + this.entity._jumpDeltaPosition.y * progress +  GameConfig.getAttribute('jumper', 'jumpCurve').value(progress) * GameConfig.getAttribute('jumper', 'jumpHeight'),
            this.entity._jumpStartPosition.z + this.entity._jumpDeltaPosition.z * progress
        );
        
        if(this.entity._jumpProgress === 1) {
            //end jump
            this.entity._jumpProgress = 0;
            this.entity._jumpStartPosition = null;
            this.entity._jumpTargetPosition = null;
            this.entity._jumpDeltaPosition = null;
            this.entity._jumpDuration = 0;
            this.entity.jumping = false;  
            this.entity.fire(EventTypes.Stickman.TELEPORTED);
        }
    }
};


Stickman.prototype.updateInvincibleStatus = function(dt) {
    this.entity.rigidbody.mask = this.entity.invincible ? this.app.colorsStorage.getStickmanInvincibleMask() : this.app.colorsStorage.getStickmanCollisionMask(this.entity.color);
};


Stickman.prototype.updateInvincibleCountdown = function(dt) {
    if(this.entity.invincibleCountdown > 0) {
        this.entity.invincibleCountdown -= dt;
        this.entity.invincibleCountdown = Math.max(this.entity.invincibleCountdown, 0);
    }
};


Stickman.prototype._initializeColliders = function() {
    
    this.entity.collision.on('collisionstart', (result) => {
        if(this.entity.alive && result.other.tags.has('stickman') && result.other.alive) {
            
            if(this.entity.backpack.capacity < result.other.backpack.capacity) {
                if(result.other.isPlayer) {
                    Apicontroller.trackStats("enemy_kicked", {
                        color: this.entity.color,
                        dropped_bricks: this.entity.backpack.capacity
                    });
                }
                this.entity.fire(EventTypes.Stickman.COLLIDED_WITH_OTHER_STICKMAN, result.other, result);
            } 
        }        
    });
};



// colorsStorage.js
/* jshint esversion: 6 */
var ColorsStorage = pc.createScript('colorsStorage');

ColorsStorage.prototype.initialize = function() {
    this.entity.coloredMaterials = this.coloredMaterials;
    this.app.colorsStorage = this;
    
    this.initializeAvailableColors();
};


ColorsStorage.prototype.initializeAvailableColors = function() {
    this.availableSkins = GameConfig.getAttribute('skins');
    this.defaultSkin = this.availableSkins[0]; 
    this.coloredSkins = this.availableSkins.slice(1); 
    this.currentRoundSkins = [];
    
    if(this.availableSkins.length === 0) {
        console.error('There are no skins defined in GameConfig->skins');
    } else if(this.availableSkins[0].name !== "default") {
        console.error("First skin in  GameConfig->skins should be named as 'default'");
    }
};

ColorsStorage.prototype.prepareRoundColors = function(amount, playerColorName) {
    if(amount > this.coloredSkins.length - 1) {
        console.error(`ColorsStorage:prepareColors - not enough colors is storage (${this.coloredSkins.length}/${amount})`);
    }
    
    const playerSkin = this.coloredSkins.find(skin => skin.name === playerColorName);
    const otherColorsSkins = this.coloredSkins.filter(skin => skin !== playerSkin);
    if(GameConfig.getAttribute('gameplay', 'randomizeAIColors')) {
        Utils.shuffle(otherColorsSkins);
    }
    
    if(amount === 1) {
        this.currentRoundSkins = [playerSkin];
    } else {
        if(amount <= 4) {
            let shuffledColors = Utils.shuffle(otherColorsSkins.slice(0, 4).filter(color => !!color));
            this.currentRoundSkins = [playerSkin, ...shuffledColors.reverse().slice(1 - amount)];
        } else {
            this.currentRoundSkins = [playerSkin, ...otherColorsSkins.reverse().slice(1 - amount)];
        }
    }
    // famobi.log(`Prepared ${amount} colors: [${this.getColorsList().join(' ')}]`);
};

ColorsStorage.prototype.getColorsList = function() {
    return this.currentRoundSkins.map(skin => skin.name);
};

ColorsStorage.prototype.getRandomColor = function() {
    return Utils.getRandomItem(this.currentRoundSkins).name;
};

ColorsStorage.prototype.getDefaultColor = function() {
    return this.defaultSkin.name;
};

ColorsStorage.prototype.getDefaultSkin = function() {
    return this.defaultSkin;
};

ColorsStorage.prototype.getRandomSkin = function() {
    return Utils.getRandomItem(this.currentRoundSkins);
};

ColorsStorage.prototype.getRandomMaterial = function() {
    return this.getMaterial(this.getRandomSkin().name);
};

ColorsStorage.prototype.isColored = function(colorName) {
    return colorName != this.getDefaultColor();
};


/* collision groups & masks */
ColorsStorage.prototype.getStickmanCollisionGroup = function(colorName) {
    const colorIndex = this.currentRoundSkins.findIndex(skin => skin.name === colorName);
    return 128 << colorIndex;
};

ColorsStorage.prototype.getStickmanInvincibleMask = function() {
    return 127;
};

ColorsStorage.prototype.getStickmanCollisionMask = function(colorName) {
    return pc.BODYMASK_ALL;
};


ColorsStorage.prototype.getBrickCollisionGroup = function(colorName) {
    return 127; //65535 ^ (128 << colorIndex);
};

ColorsStorage.prototype.getBrickCollisionMask = function(colorName) {
    return 127;//pc.BODYMASK_ALL;
};


ColorsStorage.prototype.getBlockerCollisionMask = function(colorName) {
    const colorIndex = this.currentRoundSkins.findIndex(skin => skin.name === colorName);
    return pc.BODYMASK_ALL ^ 65408 | this.getStickmanCollisionGroup(colorName);
};



ColorsStorage.prototype.getMaterial = function(colorName) {
    const skin = this.availableSkins.find(skin => skin.name === colorName);
    if(skin) {
        return skin.material.resource;
    } else {
        console.warn(`ColorsStorage.getMaterial(${colorName}): there is no such color in colors storage`);
        return null;
    }
};



// StickmanMovement.js
var StickmanMovement = pc.createScript('stickmanMovement');


StickmanMovement.prototype.initialize = function() {
    this.currentAzimuth = 0;
    this.currentAngle = 0;
    this._isTouchActive = false;
    this._isKeyboardActive = false;
    this._isMouseDown = false;
    this._mousePosition = new pc.Vec2();
    
    this.app.on(EventTypes.GameInput.TOUCH_STARTED, this._onInputStarted, this);
    this.app.on(EventTypes.GameInput.TOUCH_ENDED, this._onInputEnded, this);
    this.app.on(EventTypes.GameInput.TOUCH_UPDATED, this._onInputUpdated, this);
    
    this.app.on(EventTypes.GameInput.MOUSE_DOWN, this._onMouseDown, this);
    this.app.on(EventTypes.GameInput.MOUSE_MOVE, this._onMouseMove, this);
    this.app.on(EventTypes.GameInput.MOUSE_UP, this._onMouseUp, this);
    
    this.app.on(EventTypes.GameInput.KEYBOARD_STARTED, this._onKeyboardStarted, this);
    this.app.on(EventTypes.GameInput.KEYBOARD_ENDED, this._onKeyboardEnded, this);
    this.app.on(EventTypes.GameInput.KEYBOARD_UPDATED, this._onKeyboardUpdated, this);
    
    this.on("destroy", () => {
        //destroying event listeners
        this.app.off(EventTypes.GameInput.TOUCH_STARTED, this._onInputStarted, this);
        this.app.off(EventTypes.GameInput.TOUCH_ENDED, this._onInputEnded, this);
        this.app.off(EventTypes.GameInput.TOUCH_UPDATED, this._onInputUpdated, this);

        this.app.off(EventTypes.GameInput.MOUSE_DOWN, this._onMouseDown, this);
        this.app.off(EventTypes.GameInput.MOUSE_MOVE, this._onMouseMove, this);
        this.app.off(EventTypes.GameInput.MOUSE_UP, this._onMouseUp, this);

        this.app.off(EventTypes.GameInput.KEYBOARD_STARTED, this._onKeyboardStarted, this);
        this.app.off(EventTypes.GameInput.KEYBOARD_ENDED, this._onKeyboardEnded, this);
        this.app.off(EventTypes.GameInput.KEYBOARD_UPDATED, this._onKeyboardUpdated, this);
    });
    
};

StickmanMovement.prototype.update = function(dt) {  
   

    /* update movement */
    if(GameSession.getInstance().sessionActive) {
        
        /* update friction */
        this.entity.rigidbody.friction = (this.entity.floor && this.entity.floor.isStairs) ? 0.4 : 0.1;
        
        const linearVelocity = this.entity.rigidbody.linearVelocity;
    
        if(!this.app.applicationPaused && this.entity.alive && !this.entity.jumping && !this.entity.finished && !GameSession.getInstance().sessionPaused) {
        
            if(this._isTouchActive) {
                this._updateTouchMovement(linearVelocity);
            } else if(this._isMouseDown) {
                this._updateMouseMovement(linearVelocity);
            } else if(this._isKeyboardActive) {
                this._updateKeyboardMovement(linearVelocity);
            } else {
                this.entity.running = false;
                const velocityDamping = GameConfig.getAttribute('movement', 'velocityDamping');
                linearVelocity.set(linearVelocity.x * velocityDamping, linearVelocity.y, linearVelocity.z * velocityDamping);
            }
        }
        
        const velocityDamping = GameConfig.getAttribute('movement', 'deadVelocityDamping');
        linearVelocity.set(linearVelocity.x * velocityDamping, linearVelocity.y, linearVelocity.z * velocityDamping);

        /* if paused - do not moveat all */
        if(GameSession.getInstance().sessionPaused) {
            linearVelocity.set(0, 0, 0);
        }
        
        this.entity.rigidbody.linearVelocity = linearVelocity;   
    }
};


StickmanMovement.prototype._updateTouchMovement = function(linearVelocity) {
    this.entity.running = true;

    const targetAngle = Utils.normalizeDegreesAngle(this.currentAzimuth * pc.math.RAD_TO_DEG);
    const dx = Math.sin(this.currentAzimuth) * this.entity.runningVelocity;
    const dz = Math.cos(this.currentAzimuth) * this.entity.runningVelocity;

    /* set visual rotation */
    this.entity.stickmanModel.setLocalEulerAngles(0, targetAngle, 0);

    /* set plysical velocity */ 
    linearVelocity.set(dx, linearVelocity.y, dz);
};



StickmanMovement.prototype._updateMouseMovement = function(linearVelocity) {        
    this.entity.running = true;
            
    const stickmanPosition = this.entity.groundPosition.add(GameConfig.getAttribute('hierarchy', 'Camera').cameraDisplacement);
    const stickmanScreenPos =  GameConfig.getAttribute('hierarchy', 'Camera').camera.worldToScreen(stickmanPosition);

    this.currentAzimuth = Math.atan2(this._mousePosition.x - stickmanScreenPos.x, this._mousePosition.y - stickmanScreenPos.y); 

    const targetAngle = Utils.normalizeDegreesAngle(this.currentAzimuth * pc.math.RAD_TO_DEG);
    const dx = Math.sin(this.currentAzimuth) * this.entity.runningVelocity;
    const dz = Math.cos(this.currentAzimuth) * this.entity.runningVelocity;

    /* set visual rotation */
    this.entity.stickmanModel.setLocalEulerAngles(0, targetAngle, 0);

    /* set plysical velocity */ 
    linearVelocity.set(dx, linearVelocity.y, dz);
};



StickmanMovement.prototype._updateKeyboardMovement = function(linearVelocity) {
    this.entity.running = true;
    
    const targetAngle = Utils.normalizeDegreesAngle(this.currentAzimuth * pc.math.RAD_TO_DEG);
    const dx = Math.sin(this.currentAzimuth) * this.entity.runningVelocity;
    const dz = Math.cos(this.currentAzimuth) * this.entity.runningVelocity;
    
    this.currentAngle = pc.math.lerpAngle(Utils.normalizeDegreesAngle(this.currentAngle), targetAngle, GameConfig.getAttribute('input', 'keyboardSmootheningLerp'));
    
    /* set visual rotation */
    this.entity.stickmanModel.setLocalEulerAngles(0, this.currentAngle || 0, 0);
    
    /* set plysical velocity */ 
    linearVelocity.set(dx, linearVelocity.y, dz);
};



/* handlers */
StickmanMovement.prototype._onInputStarted = function() {   
    this._isTouchActive = true;
};

StickmanMovement.prototype._onInputEnded = function() {    
    this._isTouchActive = false;
};

StickmanMovement.prototype._onInputUpdated = function(azimuth) {    
    this.currentAzimuth = azimuth;
};



StickmanMovement.prototype._onMouseDown = function(x, y) {   
    this._isMouseDown = true; 
    this._mousePosition.set(x, y);
};

StickmanMovement.prototype._onMouseMove = function(x, y) {    
    this._mousePosition.set(x, y);
};

StickmanMovement.prototype._onMouseUp = function(x, y) {    
    this._isMouseDown = false; 
    this._mousePosition.set(0, 0);
};


StickmanMovement.prototype._onKeyboardStarted = function() {   
    this._isKeyboardActive = true;
};

StickmanMovement.prototype._onKeyboardEnded = function() {    
    this._isKeyboardActive = false;
};

StickmanMovement.prototype._onKeyboardUpdated = function(keyboardAzimuth) {    
    this.currentAzimuth = keyboardAzimuth;
};


// follow-world-target.js
var FollowWorldTarget = pc.createScript('followWorldTarget');

FollowWorldTarget.attributes.add('target', {type: "entity"});
FollowWorldTarget.attributes.add('camera', {type: "entity"});

// initialize code called once per entity
FollowWorldTarget.prototype.initialize = function() {
    // IMPORTANT: The element must be anchored to the bottom left of the screen
    if(!this.camera) {
        this.camera = GameConfig.getAttribute('hierarchy', 'Camera');
    }
};

// update code called every frame
FollowWorldTarget.prototype.postUpdate = function(dt) {
    // world space position of target
    var worldPos = this.target.getPosition();
    var screenPos = new pc.Vec3();
    
    // get screen space co-ord
    this.camera.camera.worldToScreen(worldPos, screenPos);
    
    // Take into account of pixel ratio
    var pixelRatio = this.app.graphicsDevice.maxPixelRatio;
    screenPos.x *= pixelRatio;
    screenPos.y *= pixelRatio;
    
    // convert to screen component co-ordinates
    var screenEntity = this.entity.element.screen;
    var scale = screenEntity.screen.scale;
    
    var device = this.app.graphicsDevice;
    
    this.entity.setLocalPosition(screenPos.x / scale, (device.height - screenPos.y) / scale, 0);    
};

// swap method called for script hot-reloading
// inherit your script state here
// FollowWorldTarget.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/

// StickmanAnimator.js
var StickmanAnimator = pc.createScript('stickmanAnimator');


StickmanAnimator.prototype.initialize = function() {
    this.entity.on('status:running', this.onRunningStatusUpdated, this);
    this.entity.on('status:alive', this.onAliveStatusUpdated, this);
    this.entity.on('status:jumping', this.onJumpingStatusUpdated, this);
    this.entity.on('status:finishedAtPlace', this.onFinishedStatusUpdated, this);
    
    this.entity._currentAnimSpeed = 1.0;
    
    this.on("destroy", () => {
        this.entity.off('status:running', this.onRunningStatusUpdated, this);
        this.entity.off('status:alive', this.onAliveStatusUpdated, this);
        this.entity.off('status:jumping', this.onJumpingStatusUpdated, this);
        this.entity.off('status:finishedAtPlace', this.onFinishedStatusUpdated, this);
    });
};


StickmanAnimator.prototype.update = function(dt) {
    /* update current anim speed depending on num bricks in backpack */
    this.entity._currentAnimSpeed = this.entity.alive ? Math.pow(this.entity.slowdownFactor, 0.57) : 1;
    
    if(GameSession.getInstance().sessionPaused) {
        this.entity.stickmanModel.anim.speed = 0;
    } else {
        this.entity.stickmanModel.anim.speed = this.entity._currentAnimSpeed;
    }
};



StickmanAnimator.prototype.onRunningStatusUpdated = function(value) {
    this.entity.stickmanModel.anim.setBoolean('running', value);
};

StickmanAnimator.prototype.onAliveStatusUpdated = function(value) {
    if(value) {
         this.entity.stickmanModel.anim.setTrigger('respawn');
    } else {
         this.entity.stickmanModel.anim.setTrigger('die');
    }
};

StickmanAnimator.prototype.onJumpingStatusUpdated = function(value) {
    this.entity.stickmanModel.anim.setBoolean('jumping', value);
};

StickmanAnimator.prototype.onFinishedStatusUpdated = function(position) {
    if(position) {
        this.entity.stickmanModel.anim.setInteger('finished', position);
    }
};

// Stairs.js
var Stairs = pc.createScript('stairs');

Stairs.attributes.add('platformFrom', {
    type: 'entity'
});

Stairs.attributes.add('platformTo', {
    type: 'entity'
});

Stairs.attributes.add('reversedStairsOrder', {
    type: 'boolean',
    default: true
});

Stairs.attributes.add('blockerTemplate', {
    type: 'asset',
    assetType: 'template'
});


Stairs.prototype.initialize = function() {
    
    this._displayBlockers = undefined;
    
    this._initializeEntityComponents();
    this._initializeEntityProperties();
    this._assignEntityMethods();
    this._addEventListeners();
    
    this.platformFrom.outgoingStairs.push(this.entity);
    this.platformTo.ingoingStairs.push(this.entity);
    
    this.on('destroy', () => {
        this._removeEventListeners();
    });
};

Stairs.prototype.postInitialize = function() {

};


Stairs.prototype.update = function(dt) {
    if(GameConfig.getAttribute('debug', 'showBlockers') !== this._displayBlockers) {
        this._displayBlockers = GameConfig.getAttribute('debug', 'showBlockers');
        this.blockers.forEach((blocker, key) => blocker.model.enabled = !!GameConfig.getAttribute('debug', 'showBlockers'));
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// Stairs.prototype.swap = function(old) { 
//     console.log("Stairs reloaded " + this.entity.path);
//     this.initialize();
// };




/* private */


Stairs.prototype._initializeEntityComponents = function() {
    this.stairsContainer = this.entity.findByName('StairsContainer');
    
    this.blockersContainer = this.entity.findByName('BlockersContainer');    
    if(!this.blockersContainer) {
        this.blockersContainer = new pc.Entity('BlockersContainer');
        this.entity.addChild(this.blockersContainer);
    }
    
    if(!this.platformFrom) return console.error('platform from is not set on ' + this.entity.path);
    if(!this.platformTo) return console.error('platform to is not set on ' + this.entity.path);
    if(!this.stairsContainer) return console.error('StairsContainer is not set on ' + this.entity.path);
    if(!this.blockersContainer) return console.error('blockers container is not set on ' + this.entity.path);
    if(!this.blockerTemplate) return console.error('blocker template is not set on ' + this.entity.path);

    /* mark as stairs */
    this.entity.isStairs = true;
    
    /* entity components */
    this.entity.stairsContainer = this.stairsContainer;
};

Stairs.prototype._initializeEntityProperties = function() {
    const scriptContext = this;
    
    this.entity.stairs = this.entity.stairsContainer.children.slice();
    if(this.reversedStairsOrder) this.entity.stairs.reverse();
    
    /* init stairs */
    this.entity.stairs.forEach((stair, index) => this._initStair(stair, index));
    
    /* blockers */
    this.blockers = new Map();
    
    /* pass statuses */
    this.passStatuses = new Map();
    
    /* platform from */
    Object.defineProperty(this.entity, "platformFrom", {
        get() {
            return scriptContext.platformFrom;    
        }
    });
    
    /* platform to */
    Object.defineProperty(this.entity, "platformTo", {
        get() {
            return scriptContext.platformTo;    
        }
    });
};


Stairs.prototype._assignEntityMethods = function() {
    const scriptContext = this;
    
    this.entity.getFirstStair = function() {
         return this.stairs[0];
    }.bind(this.entity);
    
    
    this.entity.getLastStair = function() {
         return this.stairs[this.stairs.length - 1];
    }.bind(this.entity);
    
    
    this.entity.getNextStair = function(stair) {
        const index = this.stairs.indexOf(stair);
        return (index >= 0 && index < this.stairs.length - 1) ? this.stairs[index + 1] : null;
    }.bind(this.entity);
    
    
    this.entity.getPrevStair = function(stair) {
        const index = this.stairs.indexOf(stair);
        return (index > 0 && index < this.stairs.length) ? this.stairs[index - 1] : null;
    }.bind(this.entity);

    
    this.entity.isFirstStair = function(stair) {
        return stair.stairs === this && stair.index === 0;
    }.bind(this.entity);
    
    
    this.entity.isLastStair = function(stair) {
        return stair.stairs === this && stair.index === this.stairs.length - 1;
    }.bind(this.entity);
    
    
    this.entity.getTotalStairs = function() {
        return this.stairs.length;
    }.bind(this.entity);
    
    
    this.entity.getNumPaintedStairs = function(color) {
        return this.stairs.reduce((sum, current) => sum + (current.color === color ? 1 : 0), 0);
    }.bind(this.entity);
    
    
    this.entity.getTotalPaintedStairs = function() {
        return this.stairs.reduce((sum, current) => sum + (this._app.colorsStorage.isColored(current.color) ? 1 : 0), 0);
    }.bind(this.entity);
       
    
    this.entity.isFullyPainted = function() {
        return this.getTotalPaintedStairs() === this.stairs.length;
    }.bind(this.entity);
    
    
    this.entity.isPassed = function(color) {
        return scriptContext.passStatuses.get(color) || false;
    }.bind(this.entity);
    
       
    this.entity.setPassStatus = function(color, status) {
        scriptContext.passStatuses.set(color, status);
    }.bind(this.entity);
    
       
    this.entity.isExitOpenedForColor = function(fromStair, color) {
        const givenStairIndex = fromStair.index;
        for(let i = givenStairIndex + 1; i < this.stairs.length; i++) {
            if(this.stairs[i].color !== color) return false;
        }
        return true;
    }.bind(this.entity);
};


Stairs.prototype._addEventListeners = function() {
    this.app.on(EventTypes.STAIR_PAINTED, this.onStairPainted, this);
    this.entity.on(EventTypes.Stairs.STICKMAN_ENTERED_STAIR, this.onStickmanEnteredStair, this);    
    this.entity.on(EventTypes.Stairs.STICKMAN_LEAVED_STAIR, this.onStickmanLeavedStair, this);        
    this.entity.on(EventTypes.Stairs.UPDATE_BLOCKER_POSITION, this.onUpdateBlockerPosition, this);    
};

Stairs.prototype._removeEventListeners = function() {
    this.app.off(EventTypes.STAIR_PAINTED, this.onStairPainted, this);
    this.entity.off(EventTypes.Stairs.STICKMAN_ENTERED_STAIR, this.onStickmanEnteredStair, this);    
    this.entity.off(EventTypes.Stairs.STICKMAN_LEAVED_STAIR, this.onStickmanLeavedStair, this);    
    this.entity.off(EventTypes.Stairs.UPDATE_BLOCKER_POSITION, this.onUpdateBlockerPosition, this);    
};


/* Private */

Stairs.prototype._initStair = function(stair, index) {
    if(!stair.script) stair.addComponent('script');
    if(!stair.script.stair) stair.script.create('stair');

    if(stair.initialize) {
        stair.initialize(this.entity, index);
        stair.reset();
    } else {
        stair.delayedCall(0, () => {
            stair.initialize(this.entity, index);
            stair.reset();
        });
    }
};

Stairs.prototype.isStickmanPresentOnStairs = function(stickman) {
     // return this.entity.stairs.some(stair => stair.activeStickmans.has(stickman));
    return stickman.floor === this.entity; 
};

// Stairs.prototype.getHighestColoredStairIndex = function(color) {
//     for(let i = this.entity.stairs.length - 1; i > -1; i--) {
//         if(this.entity.stairs[i].color === color) {
//             return i;
//         }
//     }
//     return -1;
// };

Stairs.prototype.getNextUnpaintedStair = function(color, fromIndex) {
    for(let i = fromIndex + 1; i < this.entity.stairs.length; i++) {
        if(this.entity.stairs[i].color !== color) {
            return this.entity.stairs[i];
        }
    }
    return null;
};

Stairs.prototype.getStickmanCurrentStair = function(stickman) {
    for(let i = this.entity.stairs.length - 1; i > -1; i--) {
        if(this.entity.stairs[i].hasStickman(stickman)) {
            return this.entity.stairs[i];
        }
    }
    return null;
};


/* Internal */


Stairs.prototype.onUpdateBlockerPosition = function(stickman) {
    const stair = this.getStickmanCurrentStair(stickman);
    if(!stair) {
        console.log('onUpdateBlockerPosition: no current stair for stickman ' + stickman.color);
        return;
    }
    const movementDirection = this.getStickmanMovementDirectionOnStairs(stickman, stair);
    if(movementDirection === Constants.StairsMovementDirection.DOWN) {
        this.disableBlocker(stickman.color);
    }
};



Stairs.prototype.onStickmanEnteredStair = function(stickman, stair) {
    const movementDirection = this.getStickmanMovementDirectionOnStairs(stickman, stair);
    if(GameConfig.getAttribute('debug', 'showStairsDirection')) {
        stickman.nicknameTextField.element.text = movementDirection;
    }
    
    const cheatEnabled = GameConfig.getAttribute('debug', 'unlimitedBricks') && stickman.tags.has('player-stickman');
   
    if(stair.stairs.isPassed(stickman.color) && stair.isLast() && !cheatEnabled) {
        if(stickman.floor && stickman.floor.isStairs && stickman.floor === this.entity) {
            this.disableBlocker(stickman.color);
            //already at stairs, no need to block him
        } else {
            console.log('An attempt to step at already passed stairs by [' + stickman.color + '] has been prevented');
            this.updateBlockerPosition(stickman, stair);
            return;    
        }
    }
    
    if(stair.color !== stickman.color) {
        if(stickman.backpack.capacity > 0 || cheatEnabled) {
            if(!cheatEnabled) stickman.backpack.popBrick().destroy();
            stair.color = stickman.color;            
            this.app.fire(EventTypes.STAIR_PAINTED, stair, stickman);
            if(movementDirection === Constants.StairsMovementDirection.UP) {
                const nextUnpaintedStair = this.getNextUnpaintedStair(stair.color, stair.index + stickman.backpack.capacity);
                if(nextUnpaintedStair) {
                    this.updateBlockerPosition(stickman, nextUnpaintedStair); 
                } else {
                    this.disableBlocker(stickman.color);
                }
            } else {
                this.disableBlocker(stickman.color); 
            }   
            if(stickman.isPlayer) {
                this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.BUILD_STAIR);               
            }
            Apicontroller.trackStats("stair_painted", {
                color: stickman.color,
                by_player: !!stickman.isPlayer
            });
        } else {       
            
            if(movementDirection === Constants.StairsMovementDirection.UP) {
                 this.updateBlockerPosition(stickman, stair);
            } else {
                //moving downwards, do nothing...
                this.disableBlocker(stickman.color); 
            }
        }
    }
    
    stickman.fire(EventTypes.Stickman.ENTERED_STAIR, stair);
    // console.log(`Stickman ${stickman.color} entered stair ${stair.index}`);
};


Stairs.prototype.onStickmanLeavedStair = function(stickman, stair) {

    /* block stairs once stickman has left */
    if(this.entity.isFirstStair(stair) && stair.color !== stickman.color) {
        if(!this.isStickmanPresentOnStairs(stickman)) {
            this.updateBlockerPosition(stickman, stair);    
        }
    }
};

Stairs.prototype.onStairPainted = function(stair) {
    if(stair.stairs === this.entity) {
        this.platformFrom.fire(EventTypes.Platform.GENERATE_BRICK_AT_EMPTY_SPOT, stair.color);    
    }
};


/* returns UP if moving upstairs and DOWN if downstairs */
Stairs.prototype.getStickmanMovementDirectionOnStairs = function(stickman, stair) {
    const lookingDirection = stickman.rigidbody.linearVelocity.clone();
    const currentStairPosition = stair.getPosition().clone();
    const nextStair = stair.getNext() || stair.stairs.getLastStair();
    const prevStair = stair.getPrev() || stair.stairs.getFirstStair();
    const nextStairPosition = nextStair.getPosition().clone();
    const prevStairPosition = prevStair.getPosition().clone();

    const nextStairDirection = nextStairPosition.sub(stickman.groundPosition);
    const prevStairDirection = prevStairPosition.sub(stickman.groundPosition);
    
    const nextDot = lookingDirection.dot(nextStairDirection);
    const prevDot = lookingDirection.dot(prevStairDirection);

    return nextDot > prevDot ? Constants.StairsMovementDirection.UP : Constants.StairsMovementDirection.DOWN;
};



/* Blockers */

Stairs.prototype.disableBlocker = function(color) {    
    const blocker = this.blockers.get(color);
    if(blocker) {
        blocker.enabled = false;
    }
};

Stairs.prototype.updateBlockerPosition = function(stickman, blockedStair) {    
    if(!this.blockers.has(stickman.color)) {
        this._createBlockerFor(stickman.color);
    }
    
    const blocker  = this.blockers.get(stickman.color);
    blocker.enabled = false;
    
    if(blockedStair) {
        blocker.setPosition(blockedStair.getPosition().clone().add(new pc.Vec3(0, 1.3, 0)));
        blocker.setRotation(blockedStair.getRotation());
        blocker.enabled = true;
    } else {
        this.disableBlocker();
    }
};

Stairs.prototype._createBlockerFor = function(color) {
    const blocker = this.blockerTemplate.resource.instantiate();
    blocker.setPosition(0, -50, 0);
    blocker.rigidbody.mask = this.app.colorsStorage.getBlockerCollisionMask(color);
    blocker.model.model.meshInstances[0].material = this.app.colorsStorage.getMaterial(color).clone();
    blocker.model.model.meshInstances[0].material.opacity = 0.5;
    blocker.model.model.meshInstances[0].material.blendType = 2;
    blocker.model.model.meshInstances[0].material.update();
    blocker.model.enabled = GameConfig.getAttribute('debug', 'showBlockers');
    this.blockers.set(color, blocker);
    this.blockersContainer.addChild(blocker);
};



// Stair.js
var Stair = pc.createScript('stair');

Stair.prototype.initialize = function() {
    this._initializeEntityProperties();
    this._assignEntityMethods();
    this._initializeColliders();
    
    this.on('destroy', () => {
        this.entity.neighbors = null; 
        this._destroyColliders();
    });
    
    const halfExtents = this.entity.collision.halfExtents;
    halfExtents.y = 0.5;
    this.entity.collision.halfExtents = halfExtents;
    // this.entity.translateLocal(0, 2, 0);
};

Stair.prototype.update = function(dt) {
    
};


Stair.prototype._initializeEntityProperties = function() {
    
    /* mark as stair */
    this.entity.isStair = true;
    
    /* skin color */
    this.entity._color = null;    
    Object.defineProperty(this.entity, "color", {
        get() {
            return this._color;    
        },
        
        set(value) {
            const prevColor = this._color;
            this._color = value;     
            if(!this.model) console.error("Missing model on stair: " + this.path);
            const wasEnabled = this.model.enabled;
            this.model.enabled = value && value !== "default";
            if(prevColor === 'default' && this._color !== 'default' && !wasEnabled) {
                const appearingStartScale = GameConfig.getAttribute('stair', 'appearingStartScale');
                this._initialModelScale = this._initialModelScale || this.getLocalScale().clone();
                this.setLocalScale(appearingStartScale, appearingStartScale, appearingStartScale);
                this.tween(this.getLocalScale())
                    .to(this._initialModelScale, GameConfig.getAttribute('stair', 'appearingDuration'),  pc[GameConfig.getAttribute('stair', 'appearingEasing')])
                    .start();
                   
                const appearingStartPosition = GameConfig.getAttribute('stair', 'appearingStartPosition');
                if(appearingStartPosition.length() > 0) {
                    this._initialPosition = this._initialPosition || this.getLocalPosition().clone();
                    this.setLocalPosition(this._initialPosition.x + appearingStartPosition.x, this._initialPosition.y + appearingStartPosition.y, this._initialPosition.z + appearingStartPosition.z);
                    this.tween(this.getLocalPosition())
                        .to(this._initialPosition, GameConfig.getAttribute('stair', 'appearingDuration'), pc[GameConfig.getAttribute('stair', 'appearingEasing')])
                        .start();    
                }
            }
            if(this._color) {
                this.model.model.meshInstances.forEach(mesh => mesh.material = this._app.colorsStorage.getMaterial(this._color));
            }
        }
    });
    
    /* neighbors */
    this.entity._neighbors = new Set();
    Object.defineProperty(this.entity, "neighbors", {
        get() {
            return this._neighbors;    
        }
    });
    
    /* active stickmans that are staying on this stair */
    this.entity._activeStickmans = new Set();
    Object.defineProperty(this.entity, "activeStickmans", {
        get() {
            return this._activeStickmans;    
        }
    });
};


Stair.prototype._assignEntityMethods = function() {
    const scriptContext = this;
    
    /* initialize */
    this.entity.initialize = function(stairs, index) {
        this.stairs = stairs;
        this.index = index;
    }.bind(this.entity);
    
    /* reset */
    this.entity.reset  = function() {
        this.color = 'default';
    }.bind(this.entity);
    
    /* is first stair? */
    this.entity.isFirst  = function() {
        return this.stairs.isFirstStair(this);
    }.bind(this.entity);
    
    /* is last stair? */
    this.entity.isLast  = function() {
        return this.stairs.isLastStair(this);
    }.bind(this.entity);
    
    /* next stair */
    this.entity.getNext  = function() {
        return this.stairs.getNextStair(this);
    }.bind(this.entity);
     
    /* prev stair */
    this.entity.getPrev  = function() {
        return this.stairs.getPrevStair(this);
    }.bind(this.entity);
    
    /* has stickman */
    this.entity.hasStickman  = function(stickman) {
        return this.activeStickmans.has(stickman);
    }.bind(this.entity);
};


Stair.prototype._initializeColliders = function() {
    this.entity.collision.on('triggerenter', (entity) => {
        if(entity.tags.has('stickman')) {
            if(entity.getPosition().y < this.entity.getPosition().y - 1.0) {
                famobi.log(entity.color + ' cannot collide with brick from underneath');
                return;
            }
            this.entity.activeStickmans.add(entity);
            if(this.entity.stairs) {
                this.entity.stairs.fire(EventTypes.Stairs.STICKMAN_ENTERED_STAIR, entity, this.entity);
            }
        } 
    });
    
    this.entity.collision.on('triggerleave', (entity) => {
        if(entity.tags.has('stickman')) {
            this.entity.activeStickmans.delete(entity);
            if(this.entity.stairs) {
                this.entity.stairs.fire(EventTypes.Stairs.STICKMAN_LEAVED_STAIR, entity, this.entity);
            }
        } 
    });
};

Stair.prototype._destroyColliders = function() {
    if(this.entity && this.entity.collision) {
         this.entity.collision.off('triggerenter');
         this.entity.collision.off('triggerleave');
    }
};



// WaterSurface.js
/* jshint esversion: 6 */
var WaterSurface = pc.createScript('waterSurface');



WaterSurface.attributes.add('mainCamera', {
    type: 'entity',
    title: 'Main camera'
});

WaterSurface.attributes.add('vs', {
    type: 'asset',
    assetType: 'shader',
    title: 'Vertex Shader'
});

WaterSurface.attributes.add('fs', {
    type: 'asset',
    assetType: 'shader',
    title: 'Fragment Shader'
});

WaterSurface.attributes.add('surfaceTexture', {
    type: 'asset',
    assetType: 'texture',
    title: 'Texture scale'
});


WaterSurface.attributes.add('surfaceScale', {
    type: 'number',
    default: 1.0,
    title: "Surface Texture Scale"
});

WaterSurface.attributes.add('subdivisions', {
    type: 'number',
    default: 50
});


WaterSurface.attributes.add('width', {
    type: 'number',
    default: 20
});


WaterSurface.attributes.add('height', {
    type: 'number',
    default: 20
});

WaterSurface.attributes.add('isMask', {type:'boolean',title:"Is Mask?"});

WaterSurface.prototype.GeneratePlaneMesh = function(options){
    // 1 - Set default options if none are provided 
    if(options === undefined)
        options = {subdivisions: this.subdivisions, 
                   width: this.width,
                   height: this.height};
    // 2 - Generate points, uv's and indices 
    var positions = [];
    var uvs = [];
    var indices = [];
    var row, col;
    var normals;

    for (row = 0; row <= options.subdivisions; row++) {
        for (col = 0; col <= options.subdivisions; col++) {
            var position = new pc.Vec3((col * options.width) / options.subdivisions - (options.width / 2.0), 0, ((options.subdivisions - row) * options.height) / options.subdivisions - (options.height / 2.0));
            
            positions.push(position.x, position.y, position.z);
            
            uvs.push(col / options.subdivisions, 1.0 - row / options.subdivisions);
        }
    }

    for (row = 0; row < options.subdivisions; row++) {
        for (col = 0; col < options.subdivisions; col++) {
            indices.push(col + row * (options.subdivisions + 1));
            indices.push(col + 1 + row * (options.subdivisions + 1));
            indices.push(col + 1 + (row + 1) * (options.subdivisions + 1));

            indices.push(col + row * (options.subdivisions + 1));
            indices.push(col + 1 + (row + 1) * (options.subdivisions + 1));
            indices.push(col + (row + 1) * (options.subdivisions + 1));
        }
    }
    
    // Compute the normals 
    normals = pc.calculateNormals(positions, indices);

    
    // Make the actual model
    var node = new pc.GraphNode();
    var material = this.CreateWaterMaterial();
   
    // Create the mesh 
    var mesh = pc.createMesh(this.app.graphicsDevice, positions, {
        normals: normals,
        uvs: uvs,
        indices: indices
    });

    var meshInstance = new pc.MeshInstance(node, mesh, material);
    
    // Add it to this entity 
    var model = new pc.Model();
    model.graph = node;
    model.meshInstances.push(meshInstance);
    
    this.entity.addComponent('model');
    this.entity.model.model = model;
    this.entity.model.castShadows = false; // We don't want the water surface itself to cast a shadow 
    
    // Set the culling masks 
    var bit = this.isMask ? 3 : 2; 
    meshInstance.mask = 0; 
    meshInstance.mask |= (1 << bit);
};

WaterSurface.prototype.CreateWaterMaterial = function(){
    // Create a new blank material  
    var material = new pc.Material();
    // A name just makes it easier to identify when debugging 
    material.name = "DynamicWater_Material";
    
    // Create the shader definition 
    // dynamically set the precision depending on device.
    var gd = this.app.graphicsDevice;
    var fragmentShader = "precision " + gd.precision + " float;\n";
    fragmentShader = fragmentShader + this.fs.resource;
    
    var vertexShader = this.vs.resource;

    // A shader definition used to create a new shader.
    var shaderDefinition = {
        attributes: {           
            aPosition: pc.gfx.SEMANTIC_POSITION,
            aUv0: pc.SEMANTIC_TEXCOORD0,
        },
        vshader: vertexShader,
        fshader: fragmentShader
    };
    
    // Create the shader from the definition
    this.shader = new pc.Shader(gd, shaderDefinition);
    
    // Set blending 
    material.blendType = pc.BLEND_ADDITIVEALPHA;  
    //pc.BLEND_ADDITIVEALPHA;
    //pc.BLEND_SUBTRACTIVE
    //pc.BLEND_NONE;  
    
    // Define our uniforms

    var camera = this.mainCamera; 
    var n = camera.nearClip;
    var f = camera.farClip;
    var camera_params = [
        1/f,
        f,
        (1 - f / n) / 2,
        (1 + f / n) / 2
    ];
            
    material.setParameter('camera_params', camera_params);
    material.setParameter('uTime', this.time);
    material.setParameter('uSurfaceTexture', this.surfaceTexture.resource);
    material.setParameter('uSurfaceScale', this.surfaceScale);
    material.setParameter('isMask', this.isMask);   
    this.material = material; // Save a reference to this material
     
    // Apply shader to this material 
    material.shader = this.shader;
    
    return material;
};

// initialize code called once per entity
WaterSurface.prototype.initialize = function() {
    this.time = 0;
    
    this.GeneratePlaneMesh();
    
    // Save the current shaders 
    this.savedVS = this.vs.resource;
    this.savedFS = this.fs.resource;
    
    this.initialPosition = this.entity.getPosition();
    
    this.on('attr', this.onAttributeChanged, this);
    
    if(GameConfig.getAttribute('debug', 'demoMode')) {
        this.entity.setLocalScale(20, 1, 20);
    }
};

// update code called every frame
WaterSurface.prototype.update = function(dt) {
    
    if(this.savedFS != this.fs.resource || this.savedVS != this.vs.resource || this._attributeChanged){
        // Re-create the material so the shaders can be recompiled 
        var newMaterial = this.CreateWaterMaterial();
        // Apply it to the model 
        var model = this.entity.model.model;
        var mesh = model.meshInstances[0]; 
        mesh.material = newMaterial;  
        
        // Save the new shaders
        this.savedVS = this.vs.resource;
        this.savedFS = this.fs.resource;
        this._attributeChanged = false;
    }
    
    this.time += dt * 1.5; 
    this.material.setParameter('uTime', this.time);
};

WaterSurface.prototype.onAttributeChanged = function() { 
    this._attributeChanged = true;
};

// swap method called for script hot-reloading
// inherit your script state here
WaterSurface.prototype.swap = function(old) { 
    this.time = old.time;
};

// Platform.js
var Platform = pc.createScript('platform');

Platform.prototype.initialize = function() {
    this._initializeEntityComponents();
    this._initializeEntityProperties();
    this._assignEntityMethods();
    this._addEventListeners();
    
    this.on('destroy', () => {
        this._removeEventListeners();
    });
};

Platform.prototype.postInitialize = function() {
 
};

Platform.prototype.update = function(dt) {
    
};

Platform.prototype._initializeEntityComponents = function() {
    this.brickSpotsContainer = this.entity.findByName('BrickSpots');
    this.spawnSpotsContainer = this.entity.findByName('SpawnSpots');
    this.brickSpawner        = this.entity.findByName('BrickSpawner');
    
    if(!this.brickSpotsContainer) {
        this.brickSpotsContainer = new pc.Entity('BrickSpots');
        this.entity.addChild(this.brickSpotsContainer);
    }
    
    if(!this.brickSpotsContainer) return console.error("BrickSpots container is not set on " + this.entity.path);
    if(!this.spawnSpotsContainer) return console.error("SpawnSpots is not set on " + this.entity.path);
    if(this.spawnSpotsContainer.children.length === 0) return console.error("There are not enough spawn spots on " + this.entity.path);
    
    /* mark as platform */
    this.entity.isPlatform = true;
    
    /* Platform index */
    this.entity.platformIndex = this.entity.parent.children.indexOf(this.entity) + 1;
    
    /* entity components */
    this.entity.brickSpotsContainer = this.brickSpotsContainer;
    this.entity.brickSpawner = this.brickSpawner;
    
    /* jumpers */
    this.entity.jumpers = this.entity.findByTag('jumper');
    
    /* elevators */
    this.entity.elevators = this.entity.findByTag('elevator');
    
};


Platform.prototype._initializeEntityProperties = function() {
       
    /* level entity link */
    this.entity._level = null;
    Object.defineProperty(this.entity, "level", {
        get() {
            return this._level;
        } 
    });
    
    /* brick spots */
    this.entity._brickSpots = [];
    Object.defineProperty(this.entity, "brickSpots", {
        get() {
            return this._brickSpots;    
        }
    });
    
    
    /* bricks */
    Object.defineProperty(this.entity, "bricks", {
        get() {
            return this._brickSpots.filter(brickSpot => brickSpot.hasBrick()).map(brickSpot => brickSpot.brick);    
        }
    });
    
    
    /* outgoing stairs */
    this.entity._outgoingStairs = [];
    Object.defineProperty(this.entity, "outgoingStairs", {
        get() {
            return this._outgoingStairs;
        } 
    });
    
    
    /* ingoing stairs */
    this.entity._ingoingStairs = [];
    Object.defineProperty(this.entity, "ingoingStairs", {
        get() {
            return this._ingoingStairs;
        } 
    });
    
    
       
    /* ingoing elevators */
    this.entity._ingoingElevators = [];
    Object.defineProperty(this.entity, "ingoingElevators", {
        get() {
            return this._ingoingElevators;
        } 
    });
    
    /* stickman unlock statuses */
    this.entity._unlockStatuses = new Set();
    Object.defineProperty(this.entity, "unlockStatuses", {
        get() {
            return this._unlockStatuses;
        } 
    });
};



Platform.prototype._assignEntityMethods = function() {
    const scriptContext = this;
    
        
        
    this.entity.setLevel  = function(levelEntity) {
        this._level = levelEntity;
    }.bind(this.entity);
    
    
    this.entity.createBrickSpotAt  = function(x, y, z) {
        const brickSpot = GameConfig.getAttribute('templates', 'brickSpot').resource.instantiate();
        
        this.brickSpotsContainer.addChild(brickSpot);
        brickSpot.setPosition(x, y, z);
        
        this.brickSpots.push(brickSpot);
        
        if(!brickSpot.init) console.warn("brickSpot.init is not a function at ", brickSpot.path );
        
        brickSpot.init(this);
    }.bind(this.entity);
    
    
    this.entity.destroyBrickSpot  = function(brickSpot) {
        if(this.brickSpots.indexOf(brickSpot) !== -1) {
            this.brickSpots.splice(this.brickSpots.indexOf(brickSpot), 1);
        }
        brickSpot.destroy();
    }.bind(this.entity);
    
    
    this.entity.getEmptyBrickSpots  = function() {
        return this.brickSpots.filter(spot => spot.isEmpty());
    }.bind(this.entity);
    
    
    this.entity.hasColoredBricks  = function(color) {
        for(let spot of this.brickSpots) if(spot.hasBrick() && spot.brick.color === color) return true;
        return false;
    }.bind(this.entity);
    
    
    this.entity.getBrickSpotsWithColoredBricks  = function(color) {
        return this.brickSpots.filter(spot => spot.hasBrick() && spot.brick.color === color);
    }.bind(this.entity);
    
    
    this.entity.getColoredBrickSpotsSkipingColor  = function(skipColor) {
        return this.brickSpots.filter(spot => spot.hasBrick() && spot.brick.color !== skipColor);
    }.bind(this.entity);
    
    
    this.entity.getSpawnPosition  = function(color) {
        const spawnSpot = this.spawnSpots.get(color);
        if(!spawnSpot) {
            console.error('No spawn spot of color ' + color);
            return new pc.Vec3(0, 0, 0);
        }
        return spawnSpot.getPosition().clone().add(new pc.Vec3(0, 1.0, 0));
    }.bind(this.entity);
    
    
    this.entity.isUnlockedFor  = function(color) {
        return this.unlockStatuses.has(color);
    }.bind(this.entity);

    
    this.entity.getMaxPossibleBricksOfColor  = function(color) {
        const totalBrickSpots = this.brickSpots.length;
        const aliveStickmansAmount = GameplayController.getInstance().entity.numStickmans; 
        const divisor = Math.min(aliveStickmansAmount, Math.max(1 / GameConfig.getAttribute('gameplay', 'limitBricksPerPlatform'), this.unlockStatuses.size, this.ingoingStairs.length));
        return Math.max(1, Math.round(totalBrickSpots / divisor));
        
    }.bind(this.entity);
    
};




Platform.prototype._addEventListeners = function() {
    this.app.on(EventTypes.LEVEL.PREPARE_SPAWN_SPOTS, this.prepareSpawnSpots, this);
    this.app.on(EventTypes.STICKMAN_CHANGED_PLATFORM, this.onStickmanChangedPlatform, this);
    this.entity.on(EventTypes.Platform.BRICK_SPOT_CLEARED, this.onBrickSpotCleared, this);
};


Platform.prototype._removeEventListeners = function() {
    this.app.off(EventTypes.LEVEL.PREPARE_SPAWN_SPOTS, this.prepareSpawnSpots, this);
    this.app.off(EventTypes.STICKMAN_CHANGED_PLATFORM, this.onStickmanChangedPlatform, this);
    this.entity.off(EventTypes.Platform.BRICK_SPOT_CLEARED, this.onBrickSpotCleared, this);
};


Platform.prototype.prepareSpawnSpots = function() {    
    const availableColors = this.app.colorsStorage.getColorsList();
    const availableSpots = this.spawnSpotsContainer.children.slice();
    this.entity.spawnSpots = new Map();
    
    availableSpots.forEach(spawnSpot => {
        const color = Utils.removeRandomItem(availableColors);
        if(color) {
            this.entity.spawnSpots.set(color, spawnSpot);
            spawnSpot.model.model.meshInstances[0].material = this.app.colorsStorage.getMaterial(color);
            spawnSpot.model.enabled = GameConfig.getAttribute('debug', 'showSpawnSpots');
        } else {
            spawnSpot.model.enabled = false;
        }
    });
};


Platform.prototype.onBrickSpotCleared = function(spot) {

};


Platform.prototype.onStickmanChangedPlatform = function(stickman, platform) {
    if(platform === this.entity) {
        if(!this.entity.isUnlockedFor(stickman.color)) {
            this.entity.unlockStatuses.add(stickman.color);
            this.entity.fire(EventTypes.Platform.GENERATE_BRICKS_WHEN_STICKMAN_ENTERED, stickman);
        }
    } else {
        if(this.entity.isUnlockedFor(stickman.color)) {
            this.entity.unlockStatuses.delete(stickman.color);
            this.entity.fire(EventTypes.Platform.DESTROY_BRICKS_WHEN_STICKMAN_LEAVED, stickman);    
        }
    }
};




// Platform.prototype.swap = function(old) { };


// BrickSpot.js
var BrickSpot = pc.createScript('brickSpot');

BrickSpot.prototype.initialize = function() {
    this.entity.model.enabled = GameConfig.getAttribute('debug', 'showBrickSpots');
    
    this._initializeEntityProperties();
    this._assignEntityMethods();
};


BrickSpot.prototype.update = function(dt) {

};



BrickSpot.prototype._initializeEntityProperties = function() {
       
    /* mark as brick spot */
    this.entity.isBrickSpot = true;
    
    /* platform */
    this.entity._platform = null;    
    Object.defineProperty(this.entity, "platform", {
        get() {
            return this._platform;    
        },
        
        set(value) {
            this._platform = value;
        }
    });
    
    
    /* neighbors */
    this.entity._neighbors = new Set();
    Object.defineProperty(this.entity, "neighbors", {
        get() {
            return this._neighbors;    
        }
    });
    
    /* brick spots */
    this.entity._brick = null;        
    Object.defineProperty(this.entity, "brick", {
        get() {
            return this._brick;    
        },
        
        set(value) {
            if(value) {
                value.enabled = false;
                this._brick = value;
                value.reparent(this);
                value.setLocalPosition(0, 0, 0);    
                value.enabled = true;
            } else {
                if(this._brick) {
                    // this._brick.destroy();
                    this._brick = null;
                }
            }
        }
    });
};



BrickSpot.prototype._assignEntityMethods = function() {
    const scriptContext = this;
    
    
    this.entity.init  = function(platform) {
        this.platform = platform;
    }.bind(this.entity);
    
    
    this.entity.hasBrick  = function() {
        return !!this._brick;
    }.bind(this.entity);
    
     
    this.entity.isEmpty  = function() {
        return !this.hasBrick();
    }.bind(this.entity);
        
    
    this.entity.createBrick  = function(color, delay) {
        if(this.brick) return;
        this.brick = BricksCache.getInstance().getBrick(color);
        this.brick.setLocalPosition(0, this.brick.yElevation || 0, 0);
        this.brick.tweenAppearing(delay);
        this.brick.brickSpot = this;
        this.brick.color = color;
    }.bind(this.entity);
    
    
    /* removes a brick from the brickSpot, but doesn't destroy it immediately */
    this.entity.removeBrick  = function() {
        if(this.brick) {
            const brick = this.brick;
            if(this.brick.parent) {
                this.brick.parent.removeChild(this.brick);
            }
            this.brick = null;
            this.platform.fire(EventTypes.Platform.BRICK_SPOT_CLEARED, this);
            return brick;
        }
    }.bind(this.entity);
    
    
    /* destroys a brick completely */
    this.entity.destroyBrick  = function() {
        if(this.brick) {
            this.brick.destroy();
        }
        this.brick = null;
        this.platform.fire(EventTypes.Platform.BRICK_SPOT_CLEARED, this);
    }.bind(this.entity);
    
};


// AIPlayer.js
var Aiplayer = pc.createScript('aiplayer');

Aiplayer.prototype.initialize = function() {
    this.currentPath = [];
    this.targetPosition = null;
    this.wantedBrick = null;
    this.targetStairs = null;
    this._debugPathStartPositionDisplacement = new pc.Vec3(0, -0.8, 0);
    this._pathStartColor = new pc.Color(0, 1, 0, 0.8);
    this._pathEndColor = new pc.Color(1, 0, 0, 0.8);
    this._stuckingCheckTimer = GameConfig.getAttribute('AI', 'stuckingPreventionCooldown');
    this._droppedBricksContainer = GameConfig.getAttribute('hierarchy', 'DroppedBricks');
    this._lastKnownPosition = this.entity.getPosition().clone();
    this._chanceToReactOnDroppedBrick = GameConfig.getAttribute('AI', 'chanceToReactOnDroppedBrick');
    this._chanceToPickupDroppedBrick = GameConfig.getAttribute('AI', 'chanceToPickupDroppedBrickVsNormalBrick');
    
    this._addEventListeners();
    
    this.on('destroy', () => {
        this._removeEventListeners();
    });
};

Aiplayer.prototype.update = function(dt) {
    if(GameSession.getInstance().sessionActive && !GameSession.getInstance().sessionPaused) {
        if(this.entity.alive && !this.entity.jumping && !this.entity.finished) {
            this.updateMainLoop(dt);
        }    
    }
};



Aiplayer.prototype.updateMainLoop = function(dt) {
    this.verifyAndResolveStucking(dt);
    this.debugDrawPathTargets();
    
    if(this.app.keyboard.wasPressed(pc.KEY_Q)) {
        this.moveToClosestDroppedBrick();
    }
};



Aiplayer.prototype.verifyAndResolveStucking = function(dt) {
    this._stuckingCheckTimer -= dt;
    if(this._stuckingCheckTimer <= 0) {
        this._stuckingCheckTimer = GameConfig.getAttribute('AI', 'stuckingPreventionCooldown');
        
        /* check stucked condition */
        if(this._lastKnownPosition &&  this._lastKnownPosition.distance(this.entity.getPosition()) < GameConfig.getAttribute('AI', 'maxDistanceToConsiderStucked')) {
            famobi.log('AI [' + this.entity.color + '] got stuck, finding another target...');
            if(this.entity.floor && this.entity.floor.isStairs) {
                //if moving downwards, remove the blocker
                this.entity.floor.fire(EventTypes.Stairs.UPDATE_BLOCKER_POSITION, this.entity);
            }
            
            this.doNextDecision();
        }
        this._lastKnownPosition = this.entity.getPosition().clone();
    }
};


/* 
 * 
 * 
 * internal
 * 
 * 
 */

Aiplayer.prototype._addEventListeners = function() {

//     this.entity.on(EventTypes.Stickman.ENTERED_STAIR, this.onEnteredStair, this);
//     this.entity.on(EventTypes.Stickman.ENTERED_PLATFORM, this.onEnteredPlatform, this);

    this.app.on(EventTypes.GameSession.SESSION_STARTED, this.startProcessing, this);
    this.app.on(EventTypes.GameSession.SESSION_STOPED, this.stopProcessing, this);
    
    // this.app.on(EventTypes.BRICK_ACTIVATED, this.onBrickActivated, this);
    this.app.on(EventTypes.STICKMAN_DROPPED_BRICKS, this.onSomeoneDroppedBricks, this);
    
    this.entity.on(EventTypes.Stickman.DIED, this._onDied, this);
    this.entity.on(EventTypes.Stickman.REVIVED, this._onRevived, this);
    this.entity.on(EventTypes.Stickman.TELEPORTED, this._onTeleported, this);
    this.entity.on(EventTypes.Stickman.BRICK_PICKED_UP, this._onBrickPickedUp, this);
    this.entity.on(EventTypes.Stickman.OUT_OF_BRICKS, this._onOutOfBricks, this);
    this.entity.on(EventTypes.AI.TARGET_POSITION_REACHED, this._onTargetReached, this);
};

Aiplayer.prototype._removeEventListeners = function() {
   
//     this.entity.off(EventTypes.Stickman.ENTERED_STAIR, this.onEnteredStair, this);
//     this.entity.off(EventTypes.Stickman.ENTERED_PLATFORM, this.onEnteredPlatform, this);

    this.app.off(EventTypes.GameSession.SESSION_STARTED, this.startProcessing, this);
    this.app.off(EventTypes.GameSession.SESSION_STOPED, this.stopProcessing, this);
    
    // this.app.off(EventTypes.BRICK_ACTIVATED, this.onBrickActivated, this);
    this.app.off(EventTypes.STICKMAN_DROPPED_BRICKS, this.onSomeoneDroppedBricks, this);
    
    this.entity.off(EventTypes.Stickman.DIED, this._onDied, this);
    this.entity.off(EventTypes.Stickman.REVIVED, this._onRevived, this);
    this.entity.off(EventTypes.Stickman.TELEPORTED, this._onTeleported, this);
    this.entity.off(EventTypes.Stickman.BRICK_PICKED_UP, this._onBrickPickedUp, this);
    this.entity.off(EventTypes.Stickman.OUT_OF_BRICKS, this._onOutOfBricks, this);
    this.entity.off(EventTypes.AI.TARGET_POSITION_REACHED, this._onTargetReached, this);
};

Aiplayer.prototype.startProcessing = function() {
    this.entity.delayedCall(pc.math.random(100, 600), () => {
        GameSession.getInstance().waitUntilSessionResumed().then(() => this.doNextDecision());
    });
};

Aiplayer.prototype.stopProcessing = function() {

};


Aiplayer.prototype.startFollowingPath = function(path) {
    this.currentPath = path;
    this.processNextPathTarget();
};


Aiplayer.prototype.processNextPathTarget = function() {
    if(this.currentPath[0]) {
        this._moveToPosition(this.currentPath[0]);
    } else {
        this.doNextDecision();
    }
};


Aiplayer.prototype.debugDrawPathTargets = function() {
    if(this.currentPath && this.currentPath.length > 0  && GameConfig.getAttribute('debug', 'drawAITargets')) {
        const material = this.app.colorsStorage.getMaterial(this.entity.color);
        this._pathStartColor.set(material.diffuse.r, material.diffuse.g, material.diffuse.b, 0.8);
        this._pathEndColor.set(material.diffuse.r, material.diffuse.g, material.diffuse.b, 0.8);
        let startPosition = this.entity.getPosition().add(this._debugPathStartPositionDisplacement);
        for(let pathPoint of this.currentPath) {
            this.app.renderLine(startPosition, pathPoint, this._pathStartColor, this._pathEndColor);
            startPosition = pathPoint;
        }    
    }
};


/*
 * 
 *  Event handlers
 * 
 */


Aiplayer.prototype._onTargetReached = function() {   
    if(this.currentPath.length > 0) {
        this.currentPath.shift();
    }
    this.processNextPathTarget();
};


Aiplayer.prototype._onTeleported = function() {
    this.entity.delayedCall(50, () => {
        GameSession.getInstance().waitUntilSessionResumed().then(() => this.doNextDecision());
    });
};

Aiplayer.prototype._onDied = function() {
    this.currentPath = [];
    this._moveToPosition(null);
};

Aiplayer.prototype._onRevived = function() {
    this.entity.delayedCall(25, () => {
        GameSession.getInstance().waitUntilSessionResumed().then(() => this.doNextDecision());
    });
};



Aiplayer.prototype._onBrickPickedUp = function(brick) {
    //this.doNextDecision();
};


Aiplayer.prototype._onOutOfBricks = function() {
    /* wait is a must in order to be able to detect if bridge can be passed */
    this.entity.delayedCall(0, () => {
        GameSession.getInstance().waitUntilSessionResumed().then(() => this.doNextDecision());
    });
};



Aiplayer.prototype.onSomeoneDroppedBricks = function(amount) {
    if(AIManager.getInstance().isStrongestBotOnHisPlatform(this.entity)) {
        this.moveToClosestDroppedBrick();
    }
};


/* 
 * 
 * movement handlers
 * 
 * 
 */

Aiplayer.prototype._moveToPosition = function(position) {
    if(position) {
        const positionDisplacement = GameConfig.getAttribute('AI', 'targetDistanceThresholdH') / 4;
        position = position.clone().add(new pc.Vec3(pc.math.random(-positionDisplacement, positionDisplacement), 0, pc.math.random(-positionDisplacement, positionDisplacement)));
    }
    this.entity.fire(EventTypes.AI.SET_TARGET_POSITION, position);
};


Aiplayer.prototype.attackStrongestBot = function(strongestBot) {
    const botTargetPosition = strongestBot.getTargetPosition();    
    this.entity.fire(EventTypes.AI.SET_TARGET_POSITION, strongestBot.groundPosition);
    console.log(this.entity.color + ' attacks strongest bot ' + strongestBot.color);
    // strongestBot.fire(EventTypes.AI.SET_TARGET_POSITION, this.entity.groundPosition);
};


Aiplayer.prototype.moveToNextBrick = function() {    
    const stickmanPosition = this.entity.getPosition();
    if(this.entity.floor && this.entity.floor.isPlatform) {     
        const closestNode = this.entity.floor.getClosestNode(stickmanPosition);
        if(closestNode) {
            const accessibleNodes = this.entity.floor.findAccessibleColoredNodes(closestNode, this.entity.color, true);
            if(accessibleNodes.length > 0) {
                accessibleNodes.sort((a, b) => Utils.distanceSq(stickmanPosition, a.getPosition()) - Utils.distanceSq(stickmanPosition, b.getPosition()));
                const wantedNode = accessibleNodes[0]; //Utils.randomWeightedChoise(accessibleNodes, 12); 
                const path = this.entity.floor.getPath(closestNode, wantedNode, true, true);
                if(path) {
                    this.startFollowingPath(path.map(node => node.getPosition()));
                    return true;
                }
            } else {
                famobi.log('[moveToNextBrick] No accessible brickSpots found');


             }
        } else {
            famobi.log('[moveToNextBrick] No closest spot with colored brick');
        }
    } else {
        famobi.log('[moveToNextBrick] Not on platform');
     }
    
    return false;
 };

Aiplayer.prototype.diceRoll = function(chance) {
    return Math.random() < chance;
};


Aiplayer.prototype.moveToClosestDroppedBrick = function() {
    this._allowedRayThroughEntityNames = this._allowedRayThroughEntityNames || ['BrickTrigger'];
    this._groundYDisplacement =  this._groundYDisplacement || new pc.Vec3(0, 0.09, 0);
    const stickmanGroundPosition = this.entity.groundPosition.add(this._groundYDisplacement);
    if(this.entity.floor && this.entity.floor.isPlatform) {
        
        const availableDroppedBricks = [];
        let closestDroppedBrick = null;
        let closestDroppedBrickDistance = Number.MAX_VALUE;
        for (let brick of this._droppedBricksContainer.children) {
            const brickPosition = brick.getPosition();
            const distanceXZ = Utils.distanceXZ(stickmanGroundPosition, brickPosition);
            const distanceY = Utils.distanceY(stickmanGroundPosition, brickPosition);
            /* xz distance should be more than 0 to prevent stucking at the dropped brick position */
            if(distanceY < 0.75 && distanceXZ > 1 && distanceXZ < GameConfig.getAttribute('AI', 'droppedBrickVisionDistance') && this.isAccessibleWithRaycast(stickmanGroundPosition, brickPosition, this._allowedRayThroughEntityNames)) { //
                availableDroppedBricks.push(brick);
                if(distanceXZ < closestDroppedBrickDistance) {
                    closestDroppedBrickDistance = distanceXZ;
                    closestDroppedBrick = brick;
                }
            }
        }
       
        
        if(closestDroppedBrick) {
            const path = [closestDroppedBrick];
            this.startFollowingPath(path.map(node => node.getPosition()));
            this.log("Moving to closest dropped brick ", closestDroppedBrick, closestDroppedBrick.getPosition());
            return true;
        }
    }
    
    return false;
};


Aiplayer.prototype.moveToAppropriateStairs = function() {    
    const stickmanPosition = this.entity.getPosition();
    if(this.entity.floor && this.entity.floor.isPlatform) {
        const closestNode = this.entity.floor.getClosestNode(stickmanPosition);
        if(closestNode) {
            const accessibleNodes = this.entity.floor.findAccessibleExitNodes(closestNode);
            if(accessibleNodes.length > 0) {
                               
                const wantedNode = this._selectAppropriateStairsNode(accessibleNodes); //accessibleNodes[0]; //Utils.randomWeightedChoise(accessibleNodes, 12); 
                const path = this.entity.floor.getPath(closestNode, wantedNode, true);
                if(path) {
                    this.startFollowingPath(path.map(node => node.getPosition()));
                    return true;
                }
            } else {
                famobi.log('[moveToAppropriateStairs] ' + this.entity.color + ': no accessible exit nodes found');
            }
        } else {
            return this.moveToClosestJumper();
        }
    } else {
        famobi.log('[moveToAppropriateStairs] ' + this.entity.color + ': not on platform');
    }
    
    return false;
};

Aiplayer.prototype.moveToClosestJumper = function() {
    /* quick fix for Level15 */
    const allowedNames = ['BrickTrigger', 'jumper'];
    const stickmanPosition = this.entity.getPosition();
    const jumperNodes = (this.entity.floor.jumpers || []).slice().filter(jumper => this.isAccessibleWithRaycast(stickmanPosition, jumper.getPosition(), allowedNames)).sort((a, b) => stickmanPosition.distance(a.getPosition()) - stickmanPosition.distance(b.getPosition()));
    if(jumperNodes.length > 0) {
        this.startFollowingPath([jumperNodes[0].getPosition()]);
        return true;
    } else {
        famobi.log('[moveToClosestJumper] ' + this.entity.color + ': no closest exit node');
    }  
    return false;
};


Aiplayer.prototype._selectAppropriateStairsNode = function(accessibleNodes) { 
    //if none of stairs are already painted - chose [random] empty stair
    if(accessibleNodes.every(node => node.stairs.getNumPaintedStairs(this.entity.color) === 0)) {
        const emptyStairsNodes = accessibleNodes.filter(node => node.stairs.getTotalPaintedStairs() === 0);
        if(emptyStairsNodes.length > 0) {
            return Utils.getRandomItem(emptyStairsNodes);
        }
    } 
    
    
    const paintedStairsNodes = accessibleNodes.filter(node => node.stairs.getNumPaintedStairs(this.entity.color) > 0);
    const unpaintedStairsNodes = accessibleNodes.filter(node => node.stairs.getNumPaintedStairs(this.entity.color) === 0);
    let targetNodes = (paintedStairsNodes.length > 0) ? paintedStairsNodes : unpaintedStairsNodes;
    
    if(paintedStairsNodes.length > 0) {
        //sort stairs by amount of painted stairs & distance
        Utils.shuffle(paintedStairsNodes).sort((a, b) => {
            if(a.stairs.getNumPaintedStairs(this.entity.color) > b.stairs.getNumPaintedStairs(this.entity.color)) return -1;
            if(a.stairs.getNumPaintedStairs(this.entity.color) < b.stairs.getNumPaintedStairs(this.entity.color)) return 1;
            return a._accumulatedDistance - b._accumulatedDistance;
        });

        return paintedStairsNodes[0];
    } else {
        //sort stairs by amount of painted stairs & distance
        Utils.shuffle(unpaintedStairsNodes).sort((a, b) => {
            if(a.stairs.getTotalPaintedStairs() < a.stairs.getTotalPaintedStairs()) return -1;
            if(a.stairs.getTotalPaintedStairs() > a.stairs.getTotalPaintedStairs()) return 1;
            return a._accumulatedDistance - b._accumulatedDistance;
        });
        return unpaintedStairsNodes[0];
    }

};

/* 
 * 
 * 
 * Decisions making
 * 
 * 
 */


Aiplayer.prototype.doNextDecision = function() {
    
    if(this.entity.floor) {
        if(this.entity.floor.isPlatform) {
           //on the platform
           this._doNextDecisionOnPlatform();
            
        } else if(this.entity.floor.isStairs) {
            //on the stairs
            this._doNextDecisionOnStairs();    
            
        } else {
            // just stay 
            this._moveToPosition(null);
        }
    } else {
        console.warn('AI [' + this.entity.color + '] can not make a decision, current floor is not set');
        this._moveToPosition(null);
    }   
};


Aiplayer.prototype._doNextDecisionOnPlatform = function() {
    const hasColoredBricksOnThePlatform = this.entity.floor.hasColoredBricks(this.entity.color);
    const isPlayerAhead = AIManager.getInstance().isPlayerAhead(this.entity);
    const isStrongestBot = AIManager.getInstance().isStrongestBotOnHisPlatform(this.entity);
    const strongestBot = AIManager.getInstance().getStrongestBot(this.entity.floor);
    const platformBots =  AIManager.getInstance().getStrongestBotsOfPlatform(this.entity.floor);
    
    if(hasColoredBricksOnThePlatform) {
        /*if(this.entity.backpack.capacity > 2 && platformBots.length > 1 && Utils.distanceXZ(this.entity.getPosition(), strongestBot.getPosition()) < 20 && Math.random() < 0.5 && isPlayerAhead && !isStrongestBot) {
            this.attackStrongestBot(strongestBot);       
            // this.entity.backpack.dropBricks();     
        } else */if((AIManager.getInstance().isStrongestBotOnHisPlatform(this.entity) || this.diceRoll(this._chanceToPickupDroppedBrick)) && this.moveToClosestDroppedBrick()) {
             this.log("moving to closest dropped brick");            
        } else if(this.entity.backpack.capacity > 0 && Math.random() < this.entity.backpack.capacity * GameConfig.getAttribute('AI', 'goToStairsChancePerEachBrick')) {
            this.moveToAppropriateStairs();
        } else {
            this.moveToNextBrick();
        }
    } else {
        //no bricks left :(
        if(this.moveToClosestDroppedBrick()) {
            this.log("moving to closest dropped brick 'cause nothing else left to do :( ");          
        } else if(this.entity.backpack.capacity > 0) {
            this.moveToAppropriateStairs();
        } else if(this.moveToClosestJumper()) {
            // jumper found, moving to it...
        } else {
            this._moveToPosition(null);
        }
    }
};

Aiplayer.prototype._doNextDecisionOnStairs = function() {
    
    const closestNode = this.entity.floor.getClosestNode(this.entity.getPosition());
    const isExitOpened = this.entity.floor.isExitOpenedForColor(closestNode, this.entity.color);
    if(this.entity.backpack.capacity > 0 || isExitOpened) {
        const wantedNode = Utils.getRandomItem(this.entity.floor.exitNodes);
        const path = this.entity.floor.getPath(closestNode, wantedNode, true);
        if(path) {
            this.startFollowingPath(path.map(node => node.getPosition()));
        } else {
            famobi.log('_doNextDecisionOnStairs: no path');
        }

    } else {
        const wantedNode = Utils.getRandomItem(this.entity.floor.entranceNodes);
        const path = this.entity.floor.getPath(closestNode, wantedNode, true);
        if(path) {
            this.startFollowingPath(path.map(node => node.getPosition()));
        } else {
            famobi.log('_doNextDecisionOnStairs: no path and no bricks');
        }

    }  
};


/* Raycasting */
Aiplayer.prototype.isAccessibleWithRaycast = function(positionA, positionB, allowedNames) { 
    this._rayStartPos = this._rayStartPos || new pc.Vec3();
    this._rayStartPos.set(positionA.x, positionA.y, positionA.z);
    this._rayEndPos = this._rayEndPos || new pc.Vec3();
    this._rayEndPos.set(positionB.x, positionB.y, positionB.z);
        
    const results = this.app.raycastAll(this._rayStartPos, this._rayEndPos);
    for(let result of results) {
        if(allowedNames.indexOf(result.entity.name) === -1) {
            return false;
        }
    }
    return true;
};


/* Debug */
Aiplayer.prototype.log = function(...data) {
    if(GameConfig.getAttribute('debug', 'logAIDecisions')) {
        console.log(`[${this.entity.color}]: `, ...data);
    }
};

/* HOT RELOADING */

// swap method called for script hot-reloading
// inherit your script state here
Aiplayer.prototype.swap = function(old) {
    famobi.log('reloading AI script...');
    old._removeEventListeners();
    this.initialize();
};


// AIMovement.js
var Aimovement = pc.createScript('aimovement');

Aimovement.prototype.initialize = function() {
    this.currentAngle = 0;
    this.lastDistanceToTarget = Number.MAX_VALUE;
    
    this._addEventListeners();
    
    this.on('destroy', () => {
         this._removeEventListeners();
    });
    
    const scriptContext = this;
    this.entity.getTargetPosition = function() {
        return scriptContext.targetPosition;
    }.bind(this.entity);
};

Aimovement.prototype.update = function(dt) {
    if(GameSession.getInstance().sessionActive && !this.app.applicationPaused) {
        if(GameSession.getInstance().sessionPaused) {
            this.stopMovement();
        } else {
            this.applyHorizontalVelocityDamping(); /* apply damping in any case */
            this.verifyTargetReached();
            this.moveToTarget(dt);
            this.debugDrawTargetPosition();
        }
    }
};


Aimovement.prototype._addEventListeners = function() {
    this.entity.on(EventTypes.AI.SET_TARGET_POSITION, this._onTargetUpdated, this);
};

Aimovement.prototype._removeEventListeners = function() {
    this.entity.off(EventTypes.AI.SET_TARGET_POSITION, this._onTargetUpdated, this);
};


Aimovement.prototype.isAbleToMove = function() {
    return this.entity.alive && !this.entity.jumping && !this.entity.finished && this.moving && this.targetPosition;
};


Aimovement.prototype.verifyTargetReached = function() {
    if(this.isAbleToMove()) {
        const stickmanPosition = this.entity.getPosition();
        const horizontalDistanceToTarget = Utils.distanceXZ(stickmanPosition, this.targetPosition); // this.entity.getPosition().distance(this.targetPosition);
        const verticalDistanceToTarget = Utils.distanceY(stickmanPosition, this.targetPosition); 
        // const distanceIncreased = distanceToTarget > this.lastDistanceToTarget;
        if(horizontalDistanceToTarget < GameConfig.getAttribute('AI', 'targetDistanceThresholdH') && verticalDistanceToTarget < GameConfig.getAttribute('AI', 'targetDistanceThresholdV')/* || distanceIncreased*/) {
            // if(distanceIncreased) console.error('Distance increased');
            this.resetHorizontalVelocity();
            this.targetPosition = null;
            this.lastDistanceToTarget = Number.MAX_VALUE;
            this.entity.fire(EventTypes.AI.TARGET_POSITION_REACHED);
        } else {
            this.lastDistanceToTarget = horizontalDistanceToTarget;
        }
    }
};


Aimovement.prototype.moveToTarget = function(dt) {
    if(this.isAbleToMove()) {        
    
        const linearVelocity = this.entity.rigidbody.linearVelocity;
        const stickmanPosition = this.entity.getPosition();
        const currentAzimuth = Math.atan2(this.targetPosition.x - stickmanPosition.x,  this.targetPosition.z - stickmanPosition.z);

        const targetAngle = Utils.normalizeDegreesAngle(currentAzimuth * pc.math.RAD_TO_DEG);
        
            
        /* smoother turning V1 */
        const maxFrameDeltaAngle = ((this.entity.floor && this.entity.floor.isStairs) ? GameConfig.getAttribute('AI', 'stairsTurnSpeed') : GameConfig.getAttribute('AI', 'turnSpeed')) * dt;
        let shortestAngle = Utils.shortestAngleBetween(Utils.normalizeDegreesAngle(this.currentAngle), targetAngle);
        if(Math.abs(shortestAngle) > maxFrameDeltaAngle) {
            shortestAngle = Math.sign(shortestAngle) * maxFrameDeltaAngle;
        }
        const calculatedAngle = this.currentAngle + shortestAngle;
        const calculatedAngleInRadians = calculatedAngle * pc.math.DEG_TO_RAD;

        this.currentAngle = calculatedAngle;
        
        const dx = Math.sin(targetAngle * pc.math.DEG_TO_RAD) * this.entity.runningVelocity * GameConfig.getAttribute('AI', 'velocityScale');
        const dz = Math.cos(targetAngle * pc.math.DEG_TO_RAD) * this.entity.runningVelocity * GameConfig.getAttribute('AI', 'velocityScale');
        const speedupValue = 1.3;
        let aiSpeedBonus = 1.0; 
        if(AIManager.getInstance().isPlayerAhead(this.entity)) {
            const strongestBots = AIManager.getInstance().getStrongestBotsOfPlatform;
            if(strongestBots.length > 1) {                
                aiSpeedBonus = (1 + (strongestBots.length - strongestBots.indexOf(this.entity)) / strongestBots.length * (speedupValue - 1)) / this.entity.slowdownFactor;                
            } else {
                aiSpeedBonus = speedupValue / this.entity.slowdownFactor;
            }
        }  
       
        
        /* set visual rotation */
        this.entity.stickmanModel.setLocalEulerAngles(0, calculatedAngle, 0);

        /* set plysical velocity */ 
        linearVelocity.set(dx * aiSpeedBonus, linearVelocity.y, dz * aiSpeedBonus);
        this.entity.rigidbody.linearVelocity = linearVelocity;   
    } 
};

Aimovement.prototype.resetHorizontalVelocity = function() {
    const linearVelocity = this.entity.rigidbody.linearVelocity;
    linearVelocity.set(0, linearVelocity.y, 0);
    this.entity.rigidbody.linearVelocity = linearVelocity;   
};


Aimovement.prototype.applyHorizontalVelocityDamping = function() {
    const linearVelocity = this.entity.rigidbody.linearVelocity;
    const velocityDamping = GameConfig.getAttribute('movement', 'deadVelocityDamping');
    linearVelocity.set(linearVelocity.x * velocityDamping, linearVelocity.y, linearVelocity.z * velocityDamping);
    this.entity.rigidbody.linearVelocity = linearVelocity;   
};

Aimovement.prototype.stopMovement = function() {
    const linearVelocity = this.entity.rigidbody.linearVelocity;
    linearVelocity.set(0, 0, 0);
    this.entity.rigidbody.linearVelocity = linearVelocity;   
};


Aimovement.prototype.debugDrawTargetPosition = function() {
    if(this.targetPosition && GameConfig.getAttribute('debug', 'drawAITargets')) {
        this._targetRendererColor = this._targetRendererColor || new pc.Color(0, 0, 0, 0.75);
        const material = this.app.colorsStorage.getMaterial(this.entity.color);
        this.app.renderLine(this.entity.getPosition(), this.targetPosition, this._targetRendererColor, { depthTest: false});
    }
};


Aimovement.prototype._onTargetUpdated = function(targetPosition) {
    this.targetPosition = targetPosition;
    this.lastDistanceToTarget = Number.MAX_VALUE;
    
    if(this.targetPosition) {
        this.moving = true;
        this.entity.running = true;
    } else {
        this.moving = false;
        this.entity.running = false;
    }
};

// swap method called for script hot-reloading
// inherit your script state here
Aimovement.prototype.swap = function(old) {
    this._removeEventListeners();
    this.initialize();
};


// CloudsManager.js
var CloudsManager = pc.createScript('cloudsManager');

CloudsManager.prototype.initialize = function() {
    this.clouds = this.entity.children.map(a => a); 
    
    this.clouds.forEach(cloud => {
        /* scale */
        const scale = pc.math.random(1, 10);
        cloud.setLocalScale(scale, scale, scale);
        
        cloud.sprite.opacity = pc.math.random(0.5, 0.75);
        
        cloud._velocity = new pc.Vec3(pc.math.random(-2, 2), 0, pc.math.random(-0.5, 0.5));
    });
    
};

CloudsManager.prototype.update = function(dt) {
    // this.clouds.forEach(cloud => {
    //     cloud.translate(cloud._velocity.x * dt, cloud._velocity.y * dt, cloud._velocity.z * dt);  
    // });
};

// swap method called for script hot-reloading
// inherit your script state here
CloudsManager.prototype.swap = function(old) { 
    this.initialize();
};



// DatGUI.js
/* jshint esversion: 6 */
var DatGui = pc.createScript('datGui');
var datGuiInstance;
var GlobalConfig;

DatGui.prototype.initialize = function() {
    
    this.root = this.app.root.findByName('Root');
    
    const uiContainer = this.app.root.findByName('UIContainer');
    const hideUIComponents = () => uiContainer.children.forEach(child => child.enabled = false);
    const clearLevelsTest = () => this.app.root.findByName('LevelsTest') && this.app.root.findByName('LevelsTest').destroy();
          

    GlobalConfig = {
        gameSpeed: 1,
        levelName: '',
        windowName: 'SettingsPopup',
        hideUI: hideUIComponents,
        clearLevelsTest: clearLevelsTest,
    };
    
    

    datGuiInstance = new dat.GUI();
    datGuiInstance.domElement.id = 'datGuiInstance';
    // document.querySelector('#datGuiInstance').style.float = "left";
    
    
    var globalConfigFolder = datGuiInstance.addFolder('Settings');        
    this.addOption(globalConfigFolder, GlobalConfig, 'gameSpeed', 0, 5, 0.001, this.setGameSpeedValue, this);
    this.addStringOption(globalConfigFolder, GlobalConfig, 'levelName', this.setLevel, this);
    this.addStringOption(globalConfigFolder, GlobalConfig, 'windowName', this.openWidnow, this);
    this.addMethod(globalConfigFolder, GlobalConfig, 'hideUI');
    this.addMethod(globalConfigFolder, GlobalConfig, 'clearLevelsTest');
    globalConfigFolder.open();
    
    datGuiInstance.close();
};

DatGui.prototype.setGameSpeedValue = function(key, value) {    
    this.app.timeScale = value;
};

DatGui.prototype.setLevel = function(key, value) { 
    LevelController.getInstance().setCurrentLevelIndex(LevelController.getInstance().getLevelIndexByName(value));
    this.app.fire(EventTypes.LOAD_LEVEL);
};

DatGui.prototype.openWidnow = function(key, value) { 
    UIController.getInstance().showWindow(value);
};

DatGui.prototype.addOption = function(folder, optionHolder, optionKey, min, max, step, listener, listenerContext) {        
    return folder.add(optionHolder, optionKey, min, max).onChange(value => listener.call(listenerContext, optionKey, value)).step(step);
};

DatGui.prototype.addBooleanOption = function(folder, optionHolder, optionKey, listener, listenerContext) {        
    return folder.add(optionHolder, optionKey).onChange(value => listener.call(listenerContext, optionKey, value));
};

DatGui.prototype.addStringOption = function(folder, optionHolder, optionKey, listener, listenerContext) {        
    return folder.add(optionHolder, optionKey).onFinishChange(value => listener.call(listenerContext, optionKey, value));
};

DatGui.prototype.addMethod = function(folder, optionHolder, optionKey) {        
    return folder.add(optionHolder, optionKey);
};

DatGui.prototype.addListenedValue = function(folder, optionHolder, optionKey) {        
    return folder.add(optionHolder, optionKey).listen();
};

DatGui.prototype.update = function(dt) {

};

// dat.gui.min.js
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.dat=t():e.dat=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var i=n(1),r=o(i);e.exports=r["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(2),r=o(i),a=n(6),l=o(a),s=n(3),u=o(s),d=n(7),c=o(d),f=n(8),_=o(f),p=n(10),h=o(p),m=n(11),b=o(m),g=n(12),v=o(g),y=n(13),w=o(y),x=n(14),E=o(x),C=n(15),A=o(C),S=n(16),k=o(S),O=n(9),T=o(O),R=n(17),L=o(R);t["default"]={color:{Color:r["default"],math:l["default"],interpret:u["default"]},controllers:{Controller:c["default"],BooleanController:_["default"],OptionController:h["default"],StringController:b["default"],NumberController:v["default"],NumberControllerBox:w["default"],NumberControllerSlider:E["default"],FunctionController:A["default"],ColorController:k["default"]},dom:{dom:T["default"]},gui:{GUI:L["default"]},GUI:L["default"]}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t,n){Object.defineProperty(e,t,{get:function(){return"RGB"===this.__state.space?this.__state[t]:(h.recalculateRGB(this,t,n),this.__state[t])},set:function(e){"RGB"!==this.__state.space&&(h.recalculateRGB(this,t,n),this.__state.space="RGB"),this.__state[t]=e}})}function a(e,t){Object.defineProperty(e,t,{get:function(){return"HSV"===this.__state.space?this.__state[t]:(h.recalculateHSV(this),this.__state[t])},set:function(e){"HSV"!==this.__state.space&&(h.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=e}})}t.__esModule=!0;var l=n(3),s=o(l),u=n(6),d=o(u),c=n(4),f=o(c),_=n(5),p=o(_),h=function(){function e(){if(i(this,e),this.__state=s["default"].apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return e.prototype.toString=function(){return(0,f["default"])(this)},e.prototype.toHexString=function(){return(0,f["default"])(this,!0)},e.prototype.toOriginal=function(){return this.__state.conversion.write(this)},e}();h.recalculateRGB=function(e,t,n){if("HEX"===e.__state.space)e.__state[t]=d["default"].component_from_hex(e.__state.hex,n);else{if("HSV"!==e.__state.space)throw new Error("Corrupted color state");p["default"].extend(e.__state,d["default"].hsv_to_rgb(e.__state.h,e.__state.s,e.__state.v))}},h.recalculateHSV=function(e){var t=d["default"].rgb_to_hsv(e.r,e.g,e.b);p["default"].extend(e.__state,{s:t.s,v:t.v}),p["default"].isNaN(t.h)?p["default"].isUndefined(e.__state.h)&&(e.__state.h=0):e.__state.h=t.h},h.COMPONENTS=["r","g","b","h","s","v","hex","a"],r(h.prototype,"r",2),r(h.prototype,"g",1),r(h.prototype,"b",0),a(h.prototype,"h"),a(h.prototype,"s"),a(h.prototype,"v"),Object.defineProperty(h.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}}),Object.defineProperty(h.prototype,"hex",{get:function(){return"HEX"!==!this.__state.space&&(this.__state.hex=d["default"].rgb_to_hex(this.r,this.g,this.b)),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}}),t["default"]=h},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(4),r=o(i),a=n(5),l=o(a),s=[{litmus:l["default"].isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return null!==t&&{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:r["default"]},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return null!==t&&{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:r["default"]},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return null!==t&&{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:r["default"]},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return null!==t&&{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:r["default"]}}},{litmus:l["default"].isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:l["default"].isArray,conversions:{RGB_ARRAY:{read:function(e){return 3===e.length&&{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return 4===e.length&&{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:l["default"].isObject,conversions:{RGBA_OBJ:{read:function(e){return!!(l["default"].isNumber(e.r)&&l["default"].isNumber(e.g)&&l["default"].isNumber(e.b)&&l["default"].isNumber(e.a))&&{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return!!(l["default"].isNumber(e.r)&&l["default"].isNumber(e.g)&&l["default"].isNumber(e.b))&&{space:"RGB",r:e.r,g:e.g,b:e.b}},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return!!(l["default"].isNumber(e.h)&&l["default"].isNumber(e.s)&&l["default"].isNumber(e.v)&&l["default"].isNumber(e.a))&&{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return!!(l["default"].isNumber(e.h)&&l["default"].isNumber(e.s)&&l["default"].isNumber(e.v))&&{space:"HSV",h:e.h,s:e.s,v:e.v}},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],u=void 0,d=void 0,c=function(){d=!1;var e=arguments.length>1?l["default"].toArray(arguments):arguments[0];return l["default"].each(s,function(t){if(t.litmus(e))return l["default"].each(t.conversions,function(t,n){if(u=t.read(e),d===!1&&u!==!1)return d=u,u.conversionName=n,u.conversion=t,l["default"].BREAK}),l["default"].BREAK}),d};t["default"]=c},function(e,t){"use strict";t.__esModule=!0,t["default"]=function(e,t){var n=e.__state.conversionName.toString(),o=Math.round(e.r),i=Math.round(e.g),r=Math.round(e.b),a=e.a,l=Math.round(e.h),s=e.s.toFixed(1),u=e.v.toFixed(1);if(t||"THREE_CHAR_HEX"===n||"SIX_CHAR_HEX"===n){for(var d=e.hex.toString(16);d.length<6;)d="0"+d;return"#"+d}return"CSS_RGB"===n?"rgb("+o+","+i+","+r+")":"CSS_RGBA"===n?"rgba("+o+","+i+","+r+","+a+")":"HEX"===n?"0x"+e.hex.toString(16):"RGB_ARRAY"===n?"["+o+","+i+","+r+"]":"RGBA_ARRAY"===n?"["+o+","+i+","+r+","+a+"]":"RGB_OBJ"===n?"{r:"+o+",g:"+i+",b:"+r+"}":"RGBA_OBJ"===n?"{r:"+o+",g:"+i+",b:"+r+",a:"+a+"}":"HSV_OBJ"===n?"{h:"+l+",s:"+s+",v:"+u+"}":"HSVA_OBJ"===n?"{h:"+l+",s:"+s+",v:"+u+",a:"+a+"}":"unknown format"}},function(e,t){"use strict";t.__esModule=!0;var n=Array.prototype.forEach,o=Array.prototype.slice,i={BREAK:{},extend:function(e){return this.each(o.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(n){this.isUndefined(t[n])||(e[n]=t[n])}.bind(this))},this),e},defaults:function(e){return this.each(o.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(n){this.isUndefined(e[n])&&(e[n]=t[n])}.bind(this))},this),e},compose:function(){var e=o.call(arguments);return function(){for(var t=o.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,o){if(e)if(n&&e.forEach&&e.forEach===n)e.forEach(t,o);else if(e.length===e.length+0){var i=void 0,r=void 0;for(i=0,r=e.length;i<r;i++)if(i in e&&t.call(o,e[i],i)===this.BREAK)return}else for(var a in e)if(t.call(o,e[a],a)===this.BREAK)return},defer:function(e){setTimeout(e,0)},debounce:function(e,t){var n=void 0;return function(){function o(){n=null}var i=this,r=arguments,a=!n;clearTimeout(n),n=setTimeout(o,t),a&&e.apply(i,r)}},toArray:function(e){return e.toArray?e.toArray():o.call(e)},isUndefined:function(e){return void 0===e},isNull:function(e){return null===e},isNaN:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return isNaN(e)}),isArray:Array.isArray||function(e){return e.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)}};t["default"]=i},function(e,t){"use strict";t.__esModule=!0;var n=void 0,o={hsv_to_rgb:function(e,t,n){var o=Math.floor(e/60)%6,i=e/60-Math.floor(e/60),r=n*(1-t),a=n*(1-i*t),l=n*(1-(1-i)*t),s=[[n,l,r],[a,n,r],[r,n,l],[r,a,n],[l,r,n],[n,r,a]][o];return{r:255*s[0],g:255*s[1],b:255*s[2]}},rgb_to_hsv:function(e,t,n){var o=Math.min(e,t,n),i=Math.max(e,t,n),r=i-o,a=void 0,l=void 0;return 0===i?{h:NaN,s:0,v:0}:(l=r/i,a=e===i?(t-n)/r:t===i?2+(n-e)/r:4+(e-t)/r,a/=6,a<0&&(a+=1),{h:360*a,s:l,v:i/255})},rgb_to_hex:function(e,t,n){var o=this.hex_with_component(0,2,e);return o=this.hex_with_component(o,1,t),o=this.hex_with_component(o,0,n)},component_from_hex:function(e,t){return e>>8*t&255},hex_with_component:function(e,t,o){return o<<(n=8*t)|e&~(255<<n)}};t["default"]=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var o=function(){function e(t,o){n(this,e),this.initialValue=t[o],this.domElement=document.createElement("div"),this.object=t,this.property=o,this.__onChange=void 0,this.__onFinishChange=void 0}return e.prototype.onChange=function(e){return this.__onChange=e,this},e.prototype.onFinishChange=function(e){return this.__onFinishChange=e,this},e.prototype.setValue=function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this},e.prototype.getValue=function(){return this.object[this.property]},e.prototype.updateDisplay=function(){return this},e.prototype.isModified=function(){return this.initialValue!==this.getValue()},e}();t["default"]=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(7),s=o(l),u=n(9),d=o(u),c=function(e){function t(n,o){function a(){s.setValue(!s.__prev)}i(this,t);var l=r(this,e.call(this,n,o)),s=l;return l.__prev=l.getValue(),l.__checkbox=document.createElement("input"),l.__checkbox.setAttribute("type","checkbox"),d["default"].bind(l.__checkbox,"change",a,!1),l.domElement.appendChild(l.__checkbox),l.updateDisplay(),l}return a(t,e),t.prototype.setValue=function(t){var n=e.prototype.setValue.call(this,t);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),n},t.prototype.updateDisplay=function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0):this.__checkbox.checked=!1,e.prototype.updateDisplay.call(this)},t}(s["default"]);t["default"]=c},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e){if("0"===e||a["default"].isUndefined(e))return 0;var t=e.match(u);return a["default"].isNull(t)?0:parseFloat(t[1])}t.__esModule=!0;var r=n(5),a=o(r),l={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},s={};a["default"].each(l,function(e,t){a["default"].each(e,function(e){s[e]=t})});var u=/(\d+(\.\d+)?)px/,d={makeSelectable:function(e,t){void 0!==e&&void 0!==e.style&&(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var o=n,i=t;a["default"].isUndefined(i)&&(i=!0),a["default"].isUndefined(o)&&(o=!0),e.style.position="absolute",i&&(e.style.left=0,e.style.right=0),o&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,o){var i=n||{},r=s[t];if(!r)throw new Error("Event type "+t+" not supported.");var l=document.createEvent(r);switch(r){case"MouseEvents":var u=i.x||i.clientX||0,d=i.y||i.clientY||0;l.initMouseEvent(t,i.bubbles||!1,i.cancelable||!0,window,i.clickCount||1,0,0,u,d,!1,!1,!1,!1,0,null);break;case"KeyboardEvents":var c=l.initKeyboardEvent||l.initKeyEvent;a["default"].defaults(i,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),c(t,i.bubbles||!1,i.cancelable,window,i.ctrlKey,i.altKey,i.shiftKey,i.metaKey,i.keyCode,i.charCode);break;default:l.initEvent(t,i.bubbles||!1,i.cancelable||!0)}a["default"].defaults(l,o),e.dispatchEvent(l)},bind:function(e,t,n,o){var i=o||!1;return e.addEventListener?e.addEventListener(t,n,i):e.attachEvent&&e.attachEvent("on"+t,n),d},unbind:function(e,t,n,o){var i=o||!1;return e.removeEventListener?e.removeEventListener(t,n,i):e.detachEvent&&e.detachEvent("on"+t,n),d},addClass:function(e,t){if(void 0===e.className)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return d},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),o=n.indexOf(t);o!==-1&&(n.splice(o,1),e.className=n.join(" "))}else e.className=void 0;return d},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return i(t["border-left-width"])+i(t["border-right-width"])+i(t["padding-left"])+i(t["padding-right"])+i(t.width)},getHeight:function(e){var t=getComputedStyle(e);return i(t["border-top-width"])+i(t["border-bottom-width"])+i(t["padding-top"])+i(t["padding-bottom"])+i(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}};t["default"]=d},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(7),s=o(l),u=n(9),d=o(u),c=n(5),f=o(c),_=function(e){function t(n,o,a){i(this,t);var l=r(this,e.call(this,n,o)),s=a,u=l;return l.__select=document.createElement("select"),f["default"].isArray(s)&&!function(){var e={};f["default"].each(s,function(t){e[t]=t}),s=e}(),f["default"].each(s,function(e,t){var n=document.createElement("option");n.innerHTML=t,n.setAttribute("value",e),u.__select.appendChild(n)}),l.updateDisplay(),d["default"].bind(l.__select,"change",function(){var e=this.options[this.selectedIndex].value;u.setValue(e)}),l.domElement.appendChild(l.__select),l}return a(t,e),t.prototype.setValue=function(t){var n=e.prototype.setValue.call(this,t);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),n},t.prototype.updateDisplay=function(){return d["default"].isActive(this.__select)?this:(this.__select.value=this.getValue(),e.prototype.updateDisplay.call(this))},t}(s["default"]);t["default"]=_},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(7),s=o(l),u=n(9),d=o(u),c=function(e){function t(n,o){function a(){u.setValue(u.__input.value)}function l(){u.__onFinishChange&&u.__onFinishChange.call(u,u.getValue())}i(this,t);var s=r(this,e.call(this,n,o)),u=s;return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),d["default"].bind(s.__input,"keyup",a),d["default"].bind(s.__input,"change",a),d["default"].bind(s.__input,"blur",l),d["default"].bind(s.__input,"keydown",function(e){13===e.keyCode&&this.blur()}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return a(t,e),t.prototype.updateDisplay=function(){return d["default"].isActive(this.__input)||(this.__input.value=this.getValue()),e.prototype.updateDisplay.call(this)},t}(s["default"]);t["default"]=c},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){var t=e.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}t.__esModule=!0;var s=n(7),u=o(s),d=n(5),c=o(d),f=function(e){function t(n,o,a){i(this,t);var s=r(this,e.call(this,n,o)),u=a||{};return s.__min=u.min,s.__max=u.max,s.__step=u.step,c["default"].isUndefined(s.__step)?0===s.initialValue?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=l(s.__impliedStep),s}return a(t,e),t.prototype.setValue=function(t){var n=t;return void 0!==this.__min&&n<this.__min?n=this.__min:void 0!==this.__max&&n>this.__max&&(n=this.__max),void 0!==this.__step&&n%this.__step!==0&&(n=Math.round(n/this.__step)*this.__step),e.prototype.setValue.call(this,n)},t.prototype.min=function(e){return this.__min=e,this},t.prototype.max=function(e){return this.__max=e,this},t.prototype.step=function(e){return this.__step=e,this.__impliedStep=e,this.__precision=l(e),this},t}(u["default"]);t["default"]=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n}t.__esModule=!0;var s=n(12),u=o(s),d=n(9),c=o(d),f=n(5),_=o(f),p=function(e){function t(n,o,a){function l(){var e=parseFloat(m.__input.value);_["default"].isNaN(e)||m.setValue(e)}function s(){m.__onFinishChange&&m.__onFinishChange.call(m,m.getValue())}function u(){s()}function d(e){var t=b-e.clientY;m.setValue(m.getValue()+t*m.__impliedStep),b=e.clientY}function f(){c["default"].unbind(window,"mousemove",d),c["default"].unbind(window,"mouseup",f),s()}function p(e){c["default"].bind(window,"mousemove",d),c["default"].bind(window,"mouseup",f),b=e.clientY}i(this,t);var h=r(this,e.call(this,n,o,a));h.__truncationSuspended=!1;var m=h,b=void 0;return h.__input=document.createElement("input"),h.__input.setAttribute("type","text"),c["default"].bind(h.__input,"change",l),c["default"].bind(h.__input,"blur",u),c["default"].bind(h.__input,"mousedown",p),c["default"].bind(h.__input,"keydown",function(e){13===e.keyCode&&(m.__truncationSuspended=!0,this.blur(),m.__truncationSuspended=!1,s())}),h.updateDisplay(),h.domElement.appendChild(h.__input),h}return a(t,e),t.prototype.updateDisplay=function(){return this.__input.value=this.__truncationSuspended?this.getValue():l(this.getValue(),this.__precision),e.prototype.updateDisplay.call(this)},t}(u["default"]);t["default"]=p},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t,n,o,i){return o+(i-o)*((e-t)/(n-t))}t.__esModule=!0;var s=n(12),u=o(s),d=n(9),c=o(d),f=function(e){function t(n,o,a,s,u){function d(e){document.activeElement.blur(),c["default"].bind(window,"mousemove",f),c["default"].bind(window,"mouseup",_),f(e)}function f(e){e.preventDefault();var t=h.__background.getBoundingClientRect();return h.setValue(l(e.clientX,t.left,t.right,h.__min,h.__max)),!1}function _(){c["default"].unbind(window,"mousemove",f),c["default"].unbind(window,"mouseup",_),h.__onFinishChange&&h.__onFinishChange.call(h,h.getValue())}i(this,t);var p=r(this,e.call(this,n,o,{min:a,max:s,step:u})),h=p;return p.__background=document.createElement("div"),p.__foreground=document.createElement("div"),c["default"].bind(p.__background,"mousedown",d),c["default"].addClass(p.__background,"slider"),c["default"].addClass(p.__foreground,"slider-fg"),p.updateDisplay(),p.__background.appendChild(p.__foreground),p.domElement.appendChild(p.__background),p}return a(t,e),t.prototype.updateDisplay=function(){var t=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=100*t+"%",e.prototype.updateDisplay.call(this)},t}(u["default"]);t["default"]=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(7),s=o(l),u=n(9),d=o(u),c=function(e){function t(n,o,a){i(this,t);var l=r(this,e.call(this,n,o)),s=l;return l.__button=document.createElement("div"),l.__button.innerHTML=void 0===a?"Fire":a,d["default"].bind(l.__button,"click",function(e){return e.preventDefault(),s.fire(),!1}),d["default"].addClass(l.__button,"button"),l.domElement.appendChild(l.__button),l}return a(t,e),t.prototype.fire=function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())},t}(s["default"]);t["default"]=c},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t,n,o){e.style.background="",g["default"].each(y,function(i){e.style.cssText+="background: "+i+"linear-gradient("+t+", "+n+" 0%, "+o+" 100%); "})}function s(e){e.style.background="",e.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",e.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}t.__esModule=!0;var u=n(7),d=o(u),c=n(9),f=o(c),_=n(2),p=o(_),h=n(3),m=o(h),b=n(5),g=o(b),v=function(e){function t(n,o){function a(e){h(e),f["default"].bind(window,"mousemove",h),f["default"].bind(window,"mouseup",u)}function u(){f["default"].unbind(window,"mousemove",h),f["default"].unbind(window,"mouseup",u),_()}function d(){var e=(0,m["default"])(this.value);e!==!1?(y.__color.__state=e,y.setValue(y.__color.toOriginal())):this.value=y.__color.toString()}function c(){f["default"].unbind(window,"mousemove",b),f["default"].unbind(window,"mouseup",c),_()}function _(){y.__onFinishChange&&y.__onFinishChange.call(y,y.__color.toOriginal())}function h(e){e.preventDefault();var t=y.__saturation_field.getBoundingClientRect(),n=(e.clientX-t.left)/(t.right-t.left),o=1-(e.clientY-t.top)/(t.bottom-t.top);return o>1?o=1:o<0&&(o=0),n>1?n=1:n<0&&(n=0),y.__color.v=o,y.__color.s=n,y.setValue(y.__color.toOriginal()),!1}function b(e){e.preventDefault();var t=y.__hue_field.getBoundingClientRect(),n=1-(e.clientY-t.top)/(t.bottom-t.top);return n>1?n=1:n<0&&(n=0),y.__color.h=360*n,y.setValue(y.__color.toOriginal()),!1}i(this,t);var v=r(this,e.call(this,n,o));v.__color=new p["default"](v.getValue()),v.__temp=new p["default"](0);var y=v;v.domElement=document.createElement("div"),f["default"].makeSelectable(v.domElement,!1),v.__selector=document.createElement("div"),v.__selector.className="selector",v.__saturation_field=document.createElement("div"),v.__saturation_field.className="saturation-field",v.__field_knob=document.createElement("div"),v.__field_knob.className="field-knob",v.__field_knob_border="2px solid ",v.__hue_knob=document.createElement("div"),v.__hue_knob.className="hue-knob",v.__hue_field=document.createElement("div"),v.__hue_field.className="hue-field",v.__input=document.createElement("input"),v.__input.type="text",v.__input_textShadow="0 1px 1px ",f["default"].bind(v.__input,"keydown",function(e){13===e.keyCode&&d.call(this)}),f["default"].bind(v.__input,"blur",d),f["default"].bind(v.__selector,"mousedown",function(){f["default"].addClass(this,"drag").bind(window,"mouseup",function(){f["default"].removeClass(y.__selector,"drag")})});var w=document.createElement("div");return g["default"].extend(v.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),g["default"].extend(v.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:v.__field_knob_border+(v.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),g["default"].extend(v.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),g["default"].extend(v.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),g["default"].extend(w.style,{width:"100%",height:"100%",background:"none"}),l(w,"top","rgba(0,0,0,0)","#000"),g["default"].extend(v.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),s(v.__hue_field),g["default"].extend(v.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:v.__input_textShadow+"rgba(0,0,0,0.7)"}),f["default"].bind(v.__saturation_field,"mousedown",a),f["default"].bind(v.__field_knob,"mousedown",a),f["default"].bind(v.__hue_field,"mousedown",function(e){b(e),f["default"].bind(window,"mousemove",b),f["default"].bind(window,"mouseup",c)}),v.__saturation_field.appendChild(w),v.__selector.appendChild(v.__field_knob),v.__selector.appendChild(v.__saturation_field),v.__selector.appendChild(v.__hue_field),v.__hue_field.appendChild(v.__hue_knob),v.domElement.appendChild(v.__input),v.domElement.appendChild(v.__selector),v.updateDisplay(),v}return a(t,e),t.prototype.updateDisplay=function(){var e=(0,m["default"])(this.getValue());if(e!==!1){var t=!1;g["default"].each(p["default"].COMPONENTS,function(n){if(!g["default"].isUndefined(e[n])&&!g["default"].isUndefined(this.__color.__state[n])&&e[n]!==this.__color.__state[n])return t=!0,{}},this),t&&g["default"].extend(this.__color.__state,e)}g["default"].extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var n=this.__color.v<.5||this.__color.s>.5?255:0,o=255-n;g["default"].extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+n+","+n+","+n+")"}),this.__hue_knob.style.marginTop=100*(1-this.__color.h/360)+"px",this.__temp.s=1,this.__temp.v=1,l(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),g["default"].extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+n+","+n+","+n+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})},t}(d["default"]),y=["-moz-","-o-","-webkit-","-ms-",""];t["default"]=v},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t,n){var o=document.createElement("li");return t&&o.appendChild(t),n?e.__ul.insertBefore(o,n):e.__ul.appendChild(o),e.onResize(),o}function r(e,t){var n=e.__preset_select[e.__preset_select.selectedIndex];t?n.innerHTML=n.value+"*":n.innerHTML=n.value}function a(e,t,n){if(n.__li=t,n.__gui=e,U["default"].extend(n,{options:function(t){if(arguments.length>1){var o=n.__li.nextElementSibling;return n.remove(),s(e,n.object,n.property,{before:o,factoryArgs:[U["default"].toArray(arguments)]})}if(U["default"].isArray(t)||U["default"].isObject(t)){var i=n.__li.nextElementSibling;return n.remove(),s(e,n.object,n.property,{before:i,factoryArgs:[t]})}},name:function(e){return n.__li.firstElementChild.firstElementChild.innerHTML=e,n},listen:function(){return n.__gui.listen(n),n},remove:function(){
return n.__gui.remove(n),n}}),n instanceof B["default"])!function(){var e=new N["default"](n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});U["default"].each(["updateDisplay","onChange","onFinishChange","step"],function(t){var o=n[t],i=e[t];n[t]=e[t]=function(){var t=Array.prototype.slice.call(arguments);return i.apply(e,t),o.apply(n,t)}}),z["default"].addClass(t,"has-slider"),n.domElement.insertBefore(e.domElement,n.domElement.firstElementChild)}();else if(n instanceof N["default"]){var o=function(t){if(U["default"].isNumber(n.__min)&&U["default"].isNumber(n.__max)){var o=n.__li.firstElementChild.firstElementChild.innerHTML,i=n.__gui.__listening.indexOf(n)>-1;n.remove();var r=s(e,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]});return r.name(o),i&&r.listen(),r}return t};n.min=U["default"].compose(o,n.min),n.max=U["default"].compose(o,n.max)}else n instanceof O["default"]?(z["default"].bind(t,"click",function(){z["default"].fakeEvent(n.__checkbox,"click")}),z["default"].bind(n.__checkbox,"click",function(e){e.stopPropagation()})):n instanceof R["default"]?(z["default"].bind(t,"click",function(){z["default"].fakeEvent(n.__button,"click")}),z["default"].bind(t,"mouseover",function(){z["default"].addClass(n.__button,"hover")}),z["default"].bind(t,"mouseout",function(){z["default"].removeClass(n.__button,"hover")})):n instanceof j["default"]&&(z["default"].addClass(t,"color"),n.updateDisplay=U["default"].compose(function(e){return t.style.borderLeftColor=n.__color.toString(),e},n.updateDisplay),n.updateDisplay());n.setValue=U["default"].compose(function(t){return e.getRoot().__preset_select&&n.isModified()&&r(e.getRoot(),!0),t},n.setValue)}function l(e,t){var n=e.getRoot(),o=n.__rememberedObjects.indexOf(t.object);if(o!==-1){var i=n.__rememberedObjectIndecesToControllers[o];if(void 0===i&&(i={},n.__rememberedObjectIndecesToControllers[o]=i),i[t.property]=t,n.load&&n.load.remembered){var r=n.load.remembered,a=void 0;if(r[e.preset])a=r[e.preset];else{if(!r[Q])return;a=r[Q]}if(a[o]&&void 0!==a[o][t.property]){var l=a[o][t.property];t.initialValue=l,t.setValue(l)}}}}function s(e,t,n,o){if(void 0===t[n])throw new Error('Object "'+t+'" has no property "'+n+'"');var r=void 0;if(o.color)r=new j["default"](t,n);else{var s=[t,n].concat(o.factoryArgs);r=C["default"].apply(e,s)}o.before instanceof S["default"]&&(o.before=o.before.__li),l(e,r),z["default"].addClass(r.domElement,"c");var u=document.createElement("span");z["default"].addClass(u,"property-name"),u.innerHTML=r.property;var d=document.createElement("div");d.appendChild(u),d.appendChild(r.domElement);var c=i(e,d,o.before);return z["default"].addClass(c,oe.CLASS_CONTROLLER_ROW),r instanceof j["default"]?z["default"].addClass(c,"color"):z["default"].addClass(c,g(r.getValue())),a(e,c,r),e.__controllers.push(r),r}function u(e,t){return document.location.href+"."+t}function d(e,t,n){var o=document.createElement("option");o.innerHTML=t,o.value=t,e.__preset_select.appendChild(o),n&&(e.__preset_select.selectedIndex=e.__preset_select.length-1)}function c(e,t){t.style.display=e.useLocalStorage?"block":"none"}function f(e){var t=e.__save_row=document.createElement("li");z["default"].addClass(e.domElement,"has-save"),e.__ul.insertBefore(t,e.__ul.firstChild),z["default"].addClass(t,"save-row");var n=document.createElement("span");n.innerHTML="&nbsp;",z["default"].addClass(n,"button gears");var o=document.createElement("span");o.innerHTML="Save",z["default"].addClass(o,"button"),z["default"].addClass(o,"save");var i=document.createElement("span");i.innerHTML="New",z["default"].addClass(i,"button"),z["default"].addClass(i,"save-as");var r=document.createElement("span");r.innerHTML="Revert",z["default"].addClass(r,"button"),z["default"].addClass(r,"revert");var a=e.__preset_select=document.createElement("select");e.load&&e.load.remembered?U["default"].each(e.load.remembered,function(t,n){d(e,n,n===e.preset)}):d(e,Q,!1),z["default"].bind(a,"change",function(){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].innerHTML=e.__preset_select[t].value;e.preset=this.value}),t.appendChild(a),t.appendChild(n),t.appendChild(o),t.appendChild(i),t.appendChild(r),q&&!function(){var t=document.getElementById("dg-local-explain"),n=document.getElementById("dg-local-storage"),o=document.getElementById("dg-save-locally");o.style.display="block","true"===localStorage.getItem(u(e,"isLocal"))&&n.setAttribute("checked","checked"),c(e,t),z["default"].bind(n,"change",function(){e.useLocalStorage=!e.useLocalStorage,c(e,t)})}();var l=document.getElementById("dg-new-constructor");z["default"].bind(l,"keydown",function(e){!e.metaKey||67!==e.which&&67!==e.keyCode||Z.hide()}),z["default"].bind(n,"click",function(){l.innerHTML=JSON.stringify(e.getSaveObject(),void 0,2),Z.show(),l.focus(),l.select()}),z["default"].bind(o,"click",function(){e.save()}),z["default"].bind(i,"click",function(){var t=prompt("Enter a new preset name.");t&&e.saveAs(t)}),z["default"].bind(r,"click",function(){e.revert()})}function _(e){function t(t){return t.preventDefault(),e.width+=i-t.clientX,e.onResize(),i=t.clientX,!1}function n(){z["default"].removeClass(e.__closeButton,oe.CLASS_DRAG),z["default"].unbind(window,"mousemove",t),z["default"].unbind(window,"mouseup",n)}function o(o){return o.preventDefault(),i=o.clientX,z["default"].addClass(e.__closeButton,oe.CLASS_DRAG),z["default"].bind(window,"mousemove",t),z["default"].bind(window,"mouseup",n),!1}var i=void 0;e.__resize_handle=document.createElement("div"),U["default"].extend(e.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"}),z["default"].bind(e.__resize_handle,"mousedown",o),z["default"].bind(e.__closeButton,"mousedown",o),e.domElement.insertBefore(e.__resize_handle,e.domElement.firstElementChild)}function p(e,t){e.domElement.style.width=t+"px",e.__save_row&&e.autoPlace&&(e.__save_row.style.width=t+"px"),e.__closeButton&&(e.__closeButton.style.width=t+"px")}function h(e,t){var n={};return U["default"].each(e.__rememberedObjects,function(o,i){var r={},a=e.__rememberedObjectIndecesToControllers[i];U["default"].each(a,function(e,n){r[n]=t?e.initialValue:e.getValue()}),n[i]=r}),n}function m(e){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].value===e.preset&&(e.__preset_select.selectedIndex=t)}function b(e){0!==e.length&&D["default"].call(window,function(){b(e)}),U["default"].each(e,function(e){e.updateDisplay()})}var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},v=n(18),y=o(v),w=n(19),x=o(w),E=n(20),C=o(E),A=n(7),S=o(A),k=n(8),O=o(k),T=n(15),R=o(T),L=n(13),N=o(L),M=n(14),B=o(M),H=n(16),j=o(H),P=n(21),D=o(P),V=n(22),F=o(V),I=n(9),z=o(I),G=n(5),U=o(G),X=n(23),K=o(X);y["default"].inject(K["default"]);var Y="dg",J=72,W=20,Q="Default",q=function(){try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}}(),Z=void 0,$=!0,ee=void 0,te=!1,ne=[],oe=function ie(e){function t(){var e=n.getRoot();e.width+=1,U["default"].defer(function(){e.width-=1})}var n=this,o=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),z["default"].addClass(this.domElement,Y),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],o=U["default"].defaults(o,{autoPlace:!0,width:ie.DEFAULT_WIDTH}),o=U["default"].defaults(o,{resizable:o.autoPlace,hideable:o.autoPlace}),U["default"].isUndefined(o.load)?o.load={preset:Q}:o.preset&&(o.load.preset=o.preset),U["default"].isUndefined(o.parent)&&o.hideable&&ne.push(this),o.resizable=U["default"].isUndefined(o.parent)&&o.resizable,o.autoPlace&&U["default"].isUndefined(o.scrollable)&&(o.scrollable=!0);var r=q&&"true"===localStorage.getItem(u(this,"isLocal")),a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return o.parent}},scrollable:{get:function(){return o.scrollable}},autoPlace:{get:function(){return o.autoPlace}},preset:{get:function(){return n.parent?n.getRoot().preset:o.load.preset},set:function(e){n.parent?n.getRoot().preset=e:o.load.preset=e,m(this),n.revert()}},width:{get:function(){return o.width},set:function(e){o.width=e,p(n,e)}},name:{get:function(){return o.name},set:function(e){o.name=e,titleRowName&&(titleRowName.innerHTML=o.name)}},closed:{get:function(){return o.closed},set:function(e){o.closed=e,o.closed?z["default"].addClass(n.__ul,ie.CLASS_CLOSED):z["default"].removeClass(n.__ul,ie.CLASS_CLOSED),this.onResize(),n.__closeButton&&(n.__closeButton.innerHTML=e?ie.TEXT_OPEN:ie.TEXT_CLOSED)}},load:{get:function(){return o.load}},useLocalStorage:{get:function(){return r},set:function(e){q&&(r=e,e?z["default"].bind(window,"unload",a):z["default"].unbind(window,"unload",a),localStorage.setItem(u(n,"isLocal"),e))}}}),U["default"].isUndefined(o.parent)){if(o.closed=!1,z["default"].addClass(this.domElement,ie.CLASS_MAIN),z["default"].makeSelectable(this.domElement,!1),q&&r){n.useLocalStorage=!0;var l=localStorage.getItem(u(this,"gui"));l&&(o.load=JSON.parse(l))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=ie.TEXT_CLOSED,z["default"].addClass(this.__closeButton,ie.CLASS_CLOSE_BUTTON),this.domElement.appendChild(this.__closeButton),z["default"].bind(this.__closeButton,"click",function(){n.closed=!n.closed})}else{void 0===o.closed&&(o.closed=!0);var s=document.createTextNode(o.name);z["default"].addClass(s,"controller-name");var d=i(n,s),c=function(e){return e.preventDefault(),n.closed=!n.closed,!1};z["default"].addClass(this.__ul,ie.CLASS_CLOSED),z["default"].addClass(d,"title"),z["default"].bind(d,"click",c),o.closed||(this.closed=!1)}o.autoPlace&&(U["default"].isUndefined(o.parent)&&($&&(ee=document.createElement("div"),z["default"].addClass(ee,Y),z["default"].addClass(ee,ie.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(ee),$=!1),ee.appendChild(this.domElement),z["default"].addClass(this.domElement,ie.CLASS_AUTO_PLACE)),this.parent||p(n,o.width)),this.__resizeHandler=function(){n.onResizeDebounced()},z["default"].bind(window,"resize",this.__resizeHandler),z["default"].bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),z["default"].bind(this.__ul,"transitionend",this.__resizeHandler),z["default"].bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),o.resizable&&_(this),a=function(){q&&"true"===localStorage.getItem(u(n,"isLocal"))&&localStorage.setItem(u(n,"gui"),JSON.stringify(n.getSaveObject()))},this.saveToLocalStorageIfPossible=a,o.parent||t()};oe.toggleHide=function(){te=!te,U["default"].each(ne,function(e){e.domElement.style.display=te?"none":""})},oe.CLASS_AUTO_PLACE="a",oe.CLASS_AUTO_PLACE_CONTAINER="ac",oe.CLASS_MAIN="main",oe.CLASS_CONTROLLER_ROW="cr",oe.CLASS_TOO_TALL="taller-than-window",oe.CLASS_CLOSED="closed",oe.CLASS_CLOSE_BUTTON="close-button",oe.CLASS_DRAG="drag",oe.DEFAULT_WIDTH=245,oe.TEXT_CLOSED="Close settings",oe.TEXT_OPEN="Open settings",oe._keydownHandler=function(e){"text"===document.activeElement.type||e.which!==J&&e.keyCode!==J||oe.toggleHide()},z["default"].bind(window,"keydown",oe._keydownHandler,!1),U["default"].extend(oe.prototype,{add:function(e,t){return s(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return s(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;U["default"].defer(function(){t.onResize()})},destroy:function(){this.autoPlace&&ee.removeChild(this.domElement),z["default"].unbind(window,"keydown",oe._keydownHandler,!1),z["default"].unbind(window,"resize",this.__resizeHandler),this.saveToLocalStorageIfPossible&&z["default"].unbind(window,"unload",this.saveToLocalStorageIfPossible)},addFolder:function(e){if(void 0!==this.__folders[e])throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new oe(t);this.__folders[e]=n;var o=i(this,n.domElement);return z["default"].addClass(o,"folder"),n},open:function(){this.closed=!1},close:function(){this.closed=!0},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=z["default"].getOffset(e.__ul).top,n=0;U["default"].each(e.__ul.childNodes,function(t){e.autoPlace&&t===e.__save_row||(n+=z["default"].getHeight(t))}),window.innerHeight-t-W<n?(z["default"].addClass(e.domElement,oe.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-W+"px"):(z["default"].removeClass(e.domElement,oe.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&U["default"].defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:U["default"].debounce(function(){this.onResize()},200),remember:function(){if(U["default"].isUndefined(Z)&&(Z=new F["default"],Z.domElement.innerHTML=x["default"]),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;U["default"].each(Array.prototype.slice.call(arguments),function(t){0===e.__rememberedObjects.length&&f(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&p(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=h(this)),e.folders={},U["default"].each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=h(this),r(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Q]=h(this,!0)),this.load.remembered[e]=h(this),this.preset=e,d(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){U["default"].each(this.__controllers,function(t){this.getRoot().load.remembered?l(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),U["default"].each(this.__folders,function(e){e.revert(e)}),e||r(this.getRoot(),!1)},listen:function(e){var t=0===this.__listening.length;this.__listening.push(e),t&&b(this.__listening)},updateDisplay:function(){U["default"].each(this.__controllers,function(e){e.updateDisplay()}),U["default"].each(this.__folders,function(e){e.updateDisplay()})}}),e.exports=oe},function(e,t){"use strict";e.exports={load:function(e,t){var n=t||document,o=n.createElement("link");o.type="text/css",o.rel="stylesheet",o.href=e,n.getElementsByTagName("head")[0].appendChild(o)},inject:function(e,t){var n=t||document,o=document.createElement("style");o.type="text/css",o.innerHTML=e;var i=n.getElementsByTagName("head")[0];try{i.appendChild(o)}catch(r){}}}},function(e,t){e.exports="<div id=dg-save class=\"dg dialogue\"> Here's the new load parameter for your <code>GUI</code>'s constructor: <textarea id=dg-new-constructor></textarea> <div id=dg-save-locally> <input id=dg-local-storage type=checkbox /> Automatically save values to <code>localStorage</code> on exit. <div id=dg-local-explain>The values saved to <code>localStorage</code> will override those passed to <code>dat.GUI</code>'s constructor. This makes it easier to work incrementally, but <code>localStorage</code> is fragile, and your friends may not see the same values you do. </div> </div> </div>"},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(10),r=o(i),a=n(13),l=o(a),s=n(14),u=o(s),d=n(11),c=o(d),f=n(15),_=o(f),p=n(8),h=o(p),m=n(5),b=o(m),g=function(e,t){var n=e[t];return b["default"].isArray(arguments[2])||b["default"].isObject(arguments[2])?new r["default"](e,t,arguments[2]):b["default"].isNumber(n)?b["default"].isNumber(arguments[2])&&b["default"].isNumber(arguments[3])?b["default"].isNumber(arguments[4])?new u["default"](e,t,arguments[2],arguments[3],arguments[4]):new u["default"](e,t,arguments[2],arguments[3]):b["default"].isNumber(arguments[4])?new l["default"](e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new l["default"](e,t,{min:arguments[2],max:arguments[3]}):b["default"].isString(n)?new c["default"](e,t):b["default"].isFunction(n)?new _["default"](e,t,""):b["default"].isBoolean(n)?new h["default"](e,t):null};t["default"]=g},function(e,t){"use strict";function n(e){setTimeout(e,1e3/60)}t.__esModule=!0,t["default"]=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var r=n(9),a=o(r),l=n(5),s=o(l),u=function(){function e(){i(this,e),this.backgroundElement=document.createElement("div"),s["default"].extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),a["default"].makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),s["default"].extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;a["default"].bind(this.backgroundElement,"click",function(){t.hide()})}return e.prototype.show=function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),s["default"].defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})},e.prototype.hide=function t(){var e=this,t=function n(){e.domElement.style.display="none",e.backgroundElement.style.display="none",a["default"].unbind(e.domElement,"webkitTransitionEnd",n),a["default"].unbind(e.domElement,"transitionend",n),a["default"].unbind(e.domElement,"oTransitionEnd",n)};a["default"].bind(this.domElement,"webkitTransitionEnd",t),a["default"].bind(this.domElement,"transitionend",t),a["default"].bind(this.domElement,"oTransitionEnd",t),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"},e.prototype.layout=function(){this.domElement.style.left=window.innerWidth/2-a["default"].getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-a["default"].getHeight(this.domElement)/2+"px"},e}();t["default"]=u},function(e,t,n){t=e.exports=n(24)(),t.push([e.id,".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1!important}.dg.main .close-button.drag,.dg.main:hover .close-button{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;transition:opacity .1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save>ul{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height .1s ease-out;transition:height .1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid transparent}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.boolean,.dg .cr.boolean *,.dg .cr.function,.dg .cr.function *,.dg .cr.function .property-name{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco,monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px Lucida Grande,sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid hsla(0,0%,100%,.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.boolean:hover,.dg .cr.function:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}}])});

// FinishPlatform.js
var FinishPlatform = pc.createScript('finishPlatform');

FinishPlatform.prototype.initialize = function() {
    this._initializeEntityComponents();
    this._initializeEntityProperties();
    this._assignEntityMethods();
    this._addEventListeners();
};

FinishPlatform.prototype.postInitialize = function() {

};

FinishPlatform.prototype.update = function(dt) {
    
};

FinishPlatform.prototype._initializeEntityComponents = function() {
    this.finishSpotsContainer = this.entity.findByName('FinishSpots');
    
    /* mark as finsih platform */
    this.entity.isFinishPlatform = true;
        
    /* Platform index */
    this.entity.platformIndex = this.entity.parent.children.indexOf(this.entity) + 1;
    
    if(!this.finishSpotsContainer) return console.error("FinishSpotsContainer is not set on finish platform " + this.entity.path);
    if(this.finishSpotsContainer.children.length < 3) return console.error("There are not enough finish spots on " + this.entity.path);
    
    this.prepareFinishSpots();
};


FinishPlatform.prototype._initializeEntityProperties = function() {

    /* level entity link */
    this.entity._level = null;
    Object.defineProperty(this.entity, "level", {
        get() {
            return this._level;
        } 
    });
    
    /* winners list */
    this.entity._winners = [];
    Object.defineProperty(this.entity, "winners", {
        get() {
            return this._winners;
        } 
    });
    
    /* outgoing stairs */
    this.entity._outgoingStairs = [];
    Object.defineProperty(this.entity, "outgoingStairs", {
        get() {
            return this._outgoingStairs;
        } 
    });
    
    /* ingoing stairs */
    this.entity._ingoingStairs = [];
    Object.defineProperty(this.entity, "ingoingStairs", {
        get() {
            return this._ingoingStairs;
        } 
    });
    
    Object.defineProperty(this.entity, "centerNode", {
        get() {
            return this.finishSpots[0];
        } 
    });
};



FinishPlatform.prototype._assignEntityMethods = function() {
    const scriptContext = this;
    
    this.entity.getWinnerPosition  = function(winnerIndex) {
        return this.finishSpots[winnerIndex].getPosition();
    }.bind(this.entity);
    
    
    this.entity.placeWinnerStickman  = function(stickman) {
        if(this.winners.length < 3) {
            stickman.teleportTo(this.getWinnerPosition(this.winners.length));
            stickman.lookAtCamera(GameConfig.getAttribute('hierarchy', 'Camera'));
            this.winners.push(stickman);
            return this.winners.length;
        } else {
            console.error('Stickman can not finish cause all 3 winners are already defined');
            return 0;
        }
    }.bind(this.entity);
    
            
    this.entity.setLevel  = function(levelEntity) {
        this._level = levelEntity;
    }.bind(this.entity);
};




FinishPlatform.prototype._addEventListeners = function() {

};


FinishPlatform.prototype.prepareFinishSpots = function() {
    this.entity.finishSpots = this.finishSpotsContainer.children.slice();
    this.entity.finishSpots.forEach(finishSpot => {
        finishSpot.model.enabled = GameConfig.getAttribute('debug', 'showSpawnSpots');
    });
};




// FinishPlatform.prototype.swap = function(old) { };


// basicButton.js
/* jshint esversion: 6 */
var BasicButton = pc.createScript('basicButton');


BasicButton.attributes.add('applyScalingTween', {
    title: "Apply scaling tween",
    type: 'boolean',
    default: true
});

BasicButton.attributes.add('defaultScale', {
    title: "Default scale",
    type: 'number',
    default: 1,
    min: 0.5,
    max: 1.5
});

BasicButton.attributes.add('hoverScale', {
    title: "Hover scale",
    type: 'number',
    default: 1.03,
    min: 0.5,
    max: 1.5
});

BasicButton.attributes.add('pressedScale', {
    title: "Pressed scale",
    type: 'number',
    default: 0.97,
    min: 0.5,
    max: 1.5
});

BasicButton.attributes.add('upScaleDuration', {
    title: "Tween duration",
    type: 'number',
    default: 0.085,
    min: 0.005,
    max: 1
});

BasicButton.attributes.add('clickSound', {
    title: "Play sound",
    type: 'boolean',
    default: true
});

BasicButton.attributes.add('soundOnRelease', {
    title: "Sound on release",
    type: 'boolean',
    default: false
});

BasicButton.attributes.add('allowClickThrough', {
    title: "Click through",
    type: 'boolean',
    default: false
});


BasicButton.attributes.add('triggerEvent', {
    title: "React on",
    type: 'string',
    enum: [
        {"Tap": "down"},
        {"Release": "up"},
    ],
    default: 'down'
});


BasicButton.prototype.initialize = function() {

    // Whether the element is currently hovered or not
    this.hovered = false;

    if(pc.platform.mobile && this.app.touch) {
        this.entity.element.on('touchstart', this.onPress, this);
        this.entity.element.on('touchend', this.onRelease, this);
    } else {
        this.entity.element.on('mouseenter', this.onEnter, this);
        this.entity.element.on('mousedown', this.onPress, this);
        this.entity.element.on('mouseup', this.onRelease, this);
        this.entity.element.on('mouseleave', this.onLeave, this);
    }
};


// When the cursor enters the element assign the hovered texture
BasicButton.prototype.onEnter = function (event) {
    this.hovered = true;
    
    if(this.applyScalingTween) {
        event.element.entity.tween(event.element.entity.getLocalScale())
            .to(new pc.Vec3(this.defaultScale * this.hoverScale, this.defaultScale * this.hoverScale, this.defaultScale * this.hoverScale), this.upScaleDuration, pc.Linear)
            .start();
    }
    document.body.style.cursor = 'pointer';
};

BasicButton.prototype.onLeave = function (event) {
    this.hovered = false;
    
    if(this.applyScalingTween) {
         event.element.entity.tween(event.element.entity.getLocalScale())
            .to(new pc.Vec3(this.defaultScale, this.defaultScale, this.defaultScale), this.upScaleDuration, pc.Linear)
            .start();
    }
   

    document.body.style.cursor = 'default';
};

// When we press the element assign the active texture
BasicButton.prototype.onPress = function (event) {
    if(!this.allowClickThrough) event.stopPropagation();
    if(this.clickSound && !this.soundOnRelease) {
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.CLICK);
    }
    this.wasPressed = true;
    
    if(this.applyScalingTween) {
        event.element.entity.tween(event.element.entity.getLocalScale())
            .to(new pc.Vec3(this.defaultScale * this.pressedScale, this.defaultScale * this.pressedScale, this.defaultScale * this.pressedScale), this.upScaleDuration * 0.5, pc.SineOut)
            .start();
    }
};

BasicButton.prototype.onRelease = function (event) {
    if(this.applyScalingTween) {
         if(this.hovered) {
             event.element.entity.tween(event.element.entity.getLocalScale())
                .to(new pc.Vec3(this.defaultScale * this.hoverScale, this.defaultScale * this.hoverScale, this.defaultScale * this.hoverScale), this.upScaleDuration * 0.5, pc.Linear)
                .start();
        } else {
            event.element.entity.tween(event.element.entity.getLocalScale())
                .to(new pc.Vec3(this.defaultScale, this.defaultScale, this.defaultScale), this.upScaleDuration * 0.5, pc.Linear)
                .start();
        }
        
        if(this.clickSound && this.soundOnRelease && this.wasPressed) {
            this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.CLICK);
        }
    }
    this.wasPressed = false;
};

BasicButton.assignAction = function(button, handler, handlerContext) {
     if(pc.app.touch) {
         button.element.on(this.triggerEvent === 'down' ? 'touchstart' : 'touchend', handler, handlerContext);
     } 
     if(pc.app.mouse) {
          button.element.on(this.triggerEvent === 'down' ? 'mousedown' : 'mouseup', handler, handlerContext);
     } 
};


BasicButton.assignTapAction = function(button, handler, handlerContext) {
     
    if(pc.app.touch) {
        button.element.on('touchstart', (event) => {
            button.inputDownParams = {x: event.touch.clientX, y: event.touch.clientY};
        });
        button.element.on('touchend', (event) => {
            if(button.inputDownParams && Utils.distanceBetween( event.touch.clientX,  event.touch.clientY, button.inputDownParams.x,  button.inputDownParams.y) < 3) {
                handler.call(handlerContext, event);
            }
            button.inputDownParams = null;
        });
    } 
    
    if(pc.app.mouse) {
        button.element.on('mousedown', (event) => {
            button.inputDownParams = {x: event.x, y: event.y};
        });
        button.element.on('mouseup', (event) => {
            if(button.inputDownParams && Utils.distanceBetween(event.x, event.y, button.inputDownParams.x,  button.inputDownParams.y) < 3) {
                handler.call(handlerContext, event);
            }
            button.inputDownParams = null;
        });
    } 
};

// Constants.js
var Constants = pc.createScript('constants');

Constants.GAME_NAME = 'StairsRace';
Constants.GAME_VERSION = 'v1.0.0';
Constants.FAMOBI_TRACKING_KEY = 'stairs-race';
Constants.DEFAULT_LOCALE = 'en-US';


Constants.AUDIO = {
    CLICK: 'click',
    PICKUP_BRICK_1: 'pickUp01',
    PICKUP_BRICK_2: 'pickUp02',
    BUY: 'buy',
    CLAIM: 'claim',
    BUILD_STAIR: 'buildStair',
    CONFETTI: 'confetti',
    COUNTING: 'counting',
    LOSS: 'loss',
    PICK_UP_1: 'pickUp01',
    PICK_UP_2: 'pickUp02',
    REVIVE: 'revive',
    VICTORY: 'victory',
    BRICKS_COLLAPSE: 'bricksCollapse',
    BUMP: 'bump',
    PURCHASE_FAILED: 'purchaseFailed',
    JUMP: 'jump',
    DROP_INTO_WATER: 'dropIntoWater',
    DOOR_CLOSING: 'doorClosing',
    DOOR_OPENING: 'doorOpening',
    MULTIPLE_COINS: 'multipleCoins',
    ELEVATOR_MOVEMENT: 'elevatorMovement'
};


Constants.Storage = {
    CURRENT_LEVEL: 'currentLevel',
    MAX_UNLOCKED_LEVEL: 'maxUnlockedLevel',
    COINS: 'coins',  
    MUSIC_VOLUME: 'musicVolue',  
    SFX_VOLUME: 'sfxVolume',
    UNLOCKED_SKINS: 'unlockedSkins',
    SELECTED_CHARACTER_SKIN: 'characterSkin',
    SELECTED_BRICK_SKIN: 'brickSkin',
    SELECTED_COLOR_SKIN: 'colorSkin',
    LEVEL_TIMES: 'levelTimes'
};


Constants.StairsMovementDirection = {
    UP: 'stairs_up',  
    DOWN: 'stairs_down'
};


Constants.UI_LOCATIONS = {
    START: 'StartLocation',
    LEVELS: 'LevelsLocation',
    SKINS: 'SkinsLocation',
    SETTINGS: 'SettingsPopup',
    VICTORY: 'VictoryLocation',
    DEFEAT: 'DefeatLocation',
    GAMEPLAY: 'GameplayLocation',
    REVIVE: 'ReviveLocation'
};

// UIController.js
/* jshint esversion: 9 */
var UIController = pc.createScript('uicontroller');

UIController.attributes.add('initialWindow', {
    type: 'entity'
});

UIController.attributes.add('autoEnableOnStart', {
    type: 'boolean',
    default: false
});

UIController.getInstance = function() {
    if(!UIController._instance) console.error('UIController is not initialized yet');
    return UIController._instance;
};

UIController.prototype.initialize = function() {
    UIController._app = this.app;
    if(!UIController._instance) {
        UIController._instance = this;
    }
      
    /* add event listeners */
    this.app.on(EventTypes.SHOW_UI_WINDOW, this.showWindow, this);
    this.app.on(EventTypes.HIDE_ALL_UI_WINDOWS, this.hideAll, this);
    
    /* scale blend listener */
    this.app.on(EventTypes.Screen.SET_SCALE_BLEND, this.setScaleBlend, this);
    
    /* auto-enable */
    if(this.autoEnableOnStart) {
        this._initializeWindows();
    }
};


UIController.prototype.postInitialize = function() {
    this.hideAll();

    const showInitialWindow = () => {
        if(this.initialWindow) {
            this.showWindow(this.initialWindow.name);
        }
    };
    
    this.on('attr:initialWindow', showInitialWindow);
    showInitialWindow();
};





UIController.prototype.update = function(dt) {
    
};

UIController.prototype._initializeWindows = function() {
    this.entity.children.forEach(child => {
        if(child.tags.has('ui-window')) {
            child.enabled = true;
            child.enabled = false;    
        } else {
            famobi.log("UI location " + child.name + " should probably have a ui-window tag in order to be properly initialized");
        }
    });
};


UIController.prototype.showWindow = function(windowName, hideOthers = true, windowToOpenOnExit = null) {
    const windowEntity = this.entity.children.find(window => window.name === windowName);
    if(hideOthers) {
        this.hideAll(windowEntity).then(() => {
            if(windowEntity) {
                this._showWindow(windowEntity, windowToOpenOnExit);
            }
        });
    } else {
        if(windowEntity) {
            this._showWindow(windowEntity, windowToOpenOnExit);
        }
    }
};


UIController.prototype.showWindowImmediately = function(windowName, hideOthers = true, windowToOpenOnExit = null) {
    const windowEntity = this.entity.children.find(window => window.name === windowName);
    if(hideOthers) this.hideAll(windowEntity);
    if(windowEntity) {
        this._showWindow(windowEntity, windowToOpenOnExit);
    }
};


UIController.prototype.hideAll = async function(...skipWindows) {
    const windowToHidePromises = this.entity.children.filter(windowEntity =>  windowEntity.tags.has('ui-window') && skipWindows.indexOf(windowEntity) === -1)
            .map(windowEntity => this._hideWindow(windowEntity));
        
    return await Promise.all(windowToHidePromises);
};


UIController.prototype._showWindow = async function(windowEntity, windowToOpenOnExit = null) {
    if(windowEntity.show && typeof windowEntity.show === 'function') {
        return windowEntity.show(windowToOpenOnExit);
    } else {
        windowEntity.enabled = true;
        return true;
    }
};


UIController.prototype._hideWindow = async function(windowEntity) {
    if(windowEntity.hide && typeof windowEntity.hide === 'function') {
        return windowEntity.hide();
    } else {
        return new Promise((resolve, reject) => {
            windowEntity.enabled = false;
            resolve();
        });
    }
};




UIController.prototype.getScaleBlend = function() {
    return this.entity.screen.scaleBlend;
};

UIController.prototype.setScaleBlend = function(scaleBlend) {
    this.entity.screen.scaleBlend = scaleBlend;
};


// BaseWindow.js
class BaseWindow extends pc.ScriptType {
    
    initialize() {
        this._initEntityMethods();
        this._initComponents();        
    }
     
    
    update(dt) {
      
    }
    
    
    appearElements() {
        const elements = this.entity.find(node => node._isAnimatedUIElement);
        elements.forEach(element => {
            element.fire(EventTypes.UI_ELEMENT.APPEAR); 
        });
        
        const completionPromises = elements.map(element => new Promise((resolve, reject) => {
            element.once(EventTypes.UI_ELEMENT.APPEARED, () => resolve());
        }));
        
        /* listen to animation complete events */
        return Promise.all(completionPromises);
    } 
    
    
    disappearElements() {
        const elements = this.entity.find(node => node._isAnimatedUIElement);
        elements.forEach(element => {
            element.fire(EventTypes.UI_ELEMENT.DISAPPEAR);
        });
        
        const completionPromises = elements.map(element => new Promise((resolve, reject) => {
            element.once(EventTypes.UI_ELEMENT.DISAPPEARED, () => resolve());
        }));
        
        /* listen to animation complete events */
        return Promise.all(completionPromises);
    }
    
    
    /* private */
    _initEntityMethods() {
        const scriptContext = this;
        
        this.entity.show = function(windowToOpenOnExit) {
            return new Promise((resolve, reject) => {
                this._windowToOpenOnExit = windowToOpenOnExit;
                this.enabled = true;
                scriptContext.appearElements().then(() => resolve());
                scriptContext._onShow();
            });
            
        }.bind(this.entity);
        
        
        this.entity.hide = function(immediately) {
            return new Promise((resolve, reject) => {
                const disableWindow = () => {
                    this.enabled = false;
                    if(this._windowToOpenOnExit) {
                        const nextWindowName = this._windowToOpenOnExit;
                        this._windowToOpenOnExit = null;
                        scriptContext._onHide();
                        UIController.getInstance().showWindow(nextWindowName);
                    }
                };

                if(immediately || !this.enabled) {
                    //scriptContext.disappearElements();
                    disableWindow(); 
                    resolve();
                } else {
                    scriptContext.disappearElements().then(() => {
                        disableWindow();
                        resolve();
                    });
                }
            });           
        }.bind(this.entity);
        
        
        this.entity.clearPendingWindow = function() {
            this._windowToOpenOnExit = null;
        }.bind(this.entity);
    }
    
    _initComponents() {
        
    }
    
    _onShow() {

    }
    
    _onHide() {
        
    }
}


pc.registerScript(BaseWindow, 'baseWindow');

// CloseableWindow.js
class CloseableWindow extends BaseWindow {
    
    initialize() {
        super.initialize();
    }

    _initComponents() {
        /* components */
        this.closeButton = this.entity.findByName('CloseButton');
        
        /* listeners */
        BasicButton.assignAction(this.closeButton, this.onCloseClicked, this);
    }
    
    
    /* event handlers */
    onCloseClicked() {
        this.entity.hide();
    }
}

pc.registerScript(CloseableWindow, 'closeableWindow');

// SettingsWindow.js
class SettingsWindow extends CloseableWindow {
    
    initialize() {
        super.initialize();
    }
    

    _initComponents() {
        super._initComponents();    
        
        /* event listeners */
        this.app.on(EventTypes.SOUND_STATE_CHANGED, this.updateSoundButtons, this);
        this.app.on(EventTypes.MUSIC_STATE_CHANGED, this.updateMusicButtons, this);
        
        /* buttons */
        this.homeButton = this.entity.findByName('HomeButton');
        this.musicButton = this.entity.findByName('ButtonMusic');
        this.sfxButton = this.entity.findByName('ButtonSfx');
        this.musicVolumeBar = this.entity.findByName('MusicVolumeBar');
        this.sfxVolumeBar = this.entity.findByName('SfxVolumeBar');
        
        
        /* event listeners */
        BasicButton.assignAction(this.homeButton, this.onHomeClicked, this);
        BasicButton.assignAction(this.musicButton, this.onMusicClicked, this);
        BasicButton.assignAction(this.sfxButton, this.onSFXClicked, this);
        
        this.musicVolumeBar.on('sliderValueChanged', this.onMusicVolumeChanged, this);
        this.sfxVolumeBar.on('sliderValueChanged', this.onSFXVolumeChanged, this);
    }
    
    _onShow() {
        super._onShow();
        
        if(this.entity._windowToOpenOnExit === Constants.UI_LOCATIONS.START) {
            this.homeButton.enabled = false;
        } else {
            this.homeButton.enabled = true;
        }
        
        this.updateSoundButtons();
        this.updateMusicButtons();
        
        if(!isExternalPause()) {
            this.app.fire(EventTypes.GameSession.PAUSE);
        }
    }
    
    /* private */
    updateSoundButtons() {
        this.sfxButton.findByName('IconMuted').enabled = !SoundController.sfxEnabled;
        this.sfxVolumeBar.fire('setSliderValue', SoundController.sfxVolume);
    }
    
    updateMusicButtons() {
        this.musicButton.findByName('IconMuted').enabled = !SoundController.musicEnabled;
        this.musicVolumeBar.fire('setSliderValue', SoundController.musicVolume);
    }
    
    
    update(dt) {
       if(isExternalMute()) {
           this.musicButton.enabled = false;
           this.sfxButton.enabled = false;
           this.musicVolumeBar.enabled = false;
           this.sfxVolumeBar.enabled = false;
       } 
    }
    
    /* event handlers */
    
    //@Override
    onCloseClicked() {
        super.onCloseClicked();
        if(GameSession.getInstance().sessionActive) {
            UIController.getInstance().showWindow(Constants.UI_LOCATIONS.GAMEPLAY);
            if(!isExternalPause()) {
                this.app.fire(EventTypes.GameSession.RESUME);
            }
        } else {
             UIController.getInstance().showWindow(Constants.UI_LOCATIONS.START);
        }
    }
    
    onHomeClicked() {
        this.entity.hide();
        
        
        window.famobi_analytics.trackEvent(
            "EVENT_LEVELFAIL",
            {
                levelName: `${LevelController.getInstance().getCurrentLevelIndex() + 1}`,
                reason: 'quit'
            }
        ).then(() => {
            if(GameSession.getInstance().sessionActive) {
                this.app.fire(EventTypes.SHOW_TRANSITION_SCREEN, 0.13, () => {
                    this.app.fire(EventTypes.RELOAD_LEVEL_AND_SHOW_MENU);        
                    setTimeout(() => this.app.fire(EventTypes.HIDE_TRANSITION_SCREEN), 50);
                });
            } else {
                UIController.getInstance().showWindow(Constants.UI_LOCATIONS.START);
            }
        });
    }
    
    
    onMusicClicked() {
        if(SoundController.musicEnabled) {
            this.app.fire(EventTypes.DISABLE_MUSIC);
        } else {
            this.app.fire(EventTypes.ENABLE_MUSIC);
        }
        this.updateMusicButtons();
        this.reportVolumeChangedToAPI();
    }
    
    onSFXClicked() {
        if(SoundController.sfxEnabled) {
            this.app.fire(EventTypes.DISABLE_SFX);
        } else {
            this.app.fire(EventTypes.ENABLE_SFX);
        }
        this.updateSoundButtons();        
        this.reportVolumeChangedToAPI();
    }
    
    onMusicVolumeChanged(value) {
        this.app.fire(EventTypes.SET_MUSIC_VOLUME, value);
        this.reportVolumeChangedToAPI();
    }
    
    
    onSFXVolumeChanged(value) {
        this.app.fire(EventTypes.SET_SFX_VOLUME, value);
        this.reportVolumeChangedToAPI();
    }
    
    reportVolumeChangedToAPI() {
        if(window.famobi_analytics) {
            famobi_analytics.trackEvent(window.famobi_analytics.EVENT_VOLUMECHANGE, {
                bgmVolume: +SoundController.musicVolume.toFixed(2),
                sfxVolume: +SoundController.sfxVolume.toFixed(2)
            });
        }
    }
    
}

pc.registerScript(SettingsWindow, 'settingsWindow');

// SkinsWindow.js
class SkinsWindow extends CloseableWindow {
    
    initialize() {
        super.initialize();
    }
    

    _initComponents() {
        super._initComponents();    
        
        /* skins container */
        this.skinsContainer = this.entity.findByName('SkinsContainer');
        
        /* skin panels */
        this.panelCharacters = this.entity.findByName('PanelCharacters');
        this.panelBricks = this.entity.findByName('PanelBricks');
        this.panelColors = this.entity.findByName('PanelColors');
        
        /* skin buttons */
        this.characterSkinsButton = this.entity.findByName('CharacterSkinsButton');
        this.brickSkinsButton = this.entity.findByName('BrickSkinsButton');
        this.colorSkinsButton = this.entity.findByName('ColorSkinsButton');
        this.extraCoinsButton = this.entity.findByName('ExtraCoinsButton');
        
        /* texts */
        this.extraCoinsRewardAmount = this.entity.findByName('ExtraCoinsRewardAmount');
        this.extraCoinsRewardAmount.element.text = '+' + GameConfig.getAttribute('gameplay', 'skinsExtraCoinsForWatchingAVideoAmount');
        
        
        
        /* event listeners */
        BasicButton.assignAction(this.characterSkinsButton, this.showCharactersSkinsPanel, this);
        BasicButton.assignAction(this.brickSkinsButton, this.showBricksSkinsPanel, this);
        BasicButton.assignAction(this.colorSkinsButton, this.showColorsSkinsPanel, this);
        BasicButton.assignAction(this.extraCoinsButton, this.addExtraCoins, this);
        
        /* show initial panel */
        this.showCharactersSkinsPanel();
    }
    
    _onShow() {
        super._onShow();
        
        this.app.fire(EventTypes.UPDATE_SKIN_PANELS);
        
        if (Apicontroller.hasRewardedVideo()) {
            this.extraCoinsButton.enabled = true;
            this.extraCoinsButton.fire(EventTypes.UI_ELEMENT.APPEAR_MANUALLY);
        } else {
            this.extraCoinsButton.enabled = false;
        }
        
        this._extraCoinsOfferAppeared = false;
        this.extraCoinsButton.on(EventTypes.UI_ELEMENT.APPEARED, this._enableExtraOffer, this);
    }
    
    _onHide() {
        super._onHide();
        
        this.extraCoinsButton.off(EventTypes.UI_ELEMENT.APPEARED, this._enableExtraOffer, this);
    }
    
    _enableExtraOffer() {
        this._extraCoinsOfferAppeared = true;
    }
    
    update(dt) {
        if(!Apicontroller.hasRewardedVideo()) {
            this.extraCoinsButton.enabled = false;
        } else {
            if(!this.extraCoinsButton.enabled && this._extraCoinsOfferAppeared) {
                this.extraCoinsButton.enabled = true;
                this._extraCoinsOfferAppeared = false;
                this.extraCoinsButton.fire(EventTypes.UI_ELEMENT.APPEAR_MANUALLY);
            }
        }
    }
        
    
    /* event handlers */
    showCharactersSkinsPanel() {
        [this.panelBricks, this.panelColors, this.panelCharacters].forEach(c => c.reparent(this.skinsContainer));
    }
    
    showBricksSkinsPanel() {
        [this.panelColors, this.panelCharacters, this.panelBricks].forEach(c => c.reparent(this.skinsContainer));
    }
    
    showColorsSkinsPanel() {
        [this.panelBricks, this.panelCharacters, this.panelColors].forEach(c => c.reparent(this.skinsContainer));
    } 
    
    addExtraCoins() {
        const addCoins = (grantReward) => {
            if(grantReward) {
                this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.MULTIPLE_COINS);
                CoinsStorage.getInstance().addCoins(GameConfig.getAttribute('gameplay', 'skinsExtraCoinsForWatchingAVideoAmount'));
            }
        };
        
        if (Apicontroller.hasRewardedVideo()) {
            Apicontroller.showRewardedVideo((result) => {
                addCoins(result.rewardGranted);
            });
        } else {
            addCoins(false);
        } 

    }
}

pc.registerScript(SkinsWindow, 'skinsWindow');

// LevelsWindow.js
class LevelsWindow extends CloseableWindow {
    
    initialize() {
        super.initialize();
    }
    
    postInitialize() {
        // super.postInitialize();
        this.initializeLevelButtons();
    } 

    _initComponents() {
        super._initComponents();  
        
        this.levelButtons = [];
        
        this.levelButtonsGroup = this.entity.findByName('LevelButtonsGroup');
        this.scrollBar = this.entity.findByName('VerticalScrollbar');
    }
    
    _onShow() {
        super._onShow();
        
        this.updateLevelButtons();
        this.scrollToLevel(LevelController.getInstance().getCurrentLevelIndex());
    }
    
    
    initializeLevelButtons() {
        const levelButtonPrefab = this.app.assets.find('LevelInstance', 'template');
        
        /* delete existing ones */
        for(let i = this.levelButtonsGroup.children.length - 1; i > -1; i--) {
            const levelButton = this.levelButtonsGroup.children[i];
            levelButton.destroy();
        }
        
        /* create level buttons */
        for(let i = 0; i < LevelController.getInstance().getTotalLevels(); i++) {
            const levelButton = levelButtonPrefab.resource.instantiate();
            this.levelButtonsGroup.addChild(levelButton);
            this.levelButtons.push(levelButton);
        }
        
        /* set scroll area height */
        this.levelButtonsGroup.element.height = (this.levelButtonsGroup.children.length + 1) * (280 + 20) + 40; 
        
        /* init level buttons */
        this.levelButtonsGroup.children.forEach((levelButton, index) => {
            levelButton.init(index, this.entity);
        });
    }
    
    updateLevelButtons() {
        this.levelButtons.forEach(levelButton => levelButton.updateView());
    }
    
    
    scrollToLevel(levelIndex) {
        const screenUpscaleFactor = (this.app.graphicsDevice.height / this.app.graphicsDevice.width) /  (1280 / 720);
        const deadSpacing = pc.math.clamp(Math.floor(1280 * pc.math.clamp(screenUpscaleFactor, 1, 2) / 350), 2, LevelController.getInstance().getTotalLevels() / 2 - 1);
        if(levelIndex < deadSpacing) {
            this.scrollBar.scrollbar.value = 0;
        } else if(levelIndex >= LevelController.getInstance().getTotalLevels() - deadSpacing) {
            this.scrollBar.scrollbar.value = 1;
        } else {
            this.scrollBar.scrollbar.value = pc.math.clamp((levelIndex + 0.5 - deadSpacing) / (LevelController.getInstance().getTotalLevels() - 2 * deadSpacing), 0, 1);
        }
    }
}

pc.registerScript(LevelsWindow, 'levelsWindow');

// StartWindow.js
class StartWindow extends BaseWindow {
    
    initialize() {
        super.initialize();
    }

    
    _initComponents() {
        /* buttons */
        this.settingsButton = this.entity.findByName('SettingsButton');
        this.levelsButton = this.entity.findByName('LevelsButton');
        this.skinsButton = this.entity.findByName('SkinsButton');
        this.specialOfferButton = this.entity.findByName('SpecialOfferButton');
        this.playButton = this.entity.findByName('PlayButton');
        this.coinsAmount = this.entity.findByName('CoinsAmount');
        
        /* event listeners */
        BasicButton.assignAction(this.settingsButton, this.onSettingsClicked, this);
        BasicButton.assignAction(this.levelsButton, this.onLevelsClicked, this);
        BasicButton.assignAction(this.skinsButton, this.onSkinsClicked, this);
        BasicButton.assignAction(this.specialOfferButton, this.onSpecialOfferClicked, this);
        BasicButton.assignAction(this.playButton, this.onPlayClicked, this);
        
       
    }
    
    _onShow() {
        super._onShow();
        
        if (Apicontroller.hasRewardedVideo()) {
            this.specialOfferButton.enabled = true;
            this.playButton.fire(EventTypes.UI_ELEMENT.APPEAR_MANUALLY);
            this.specialOfferButton.fire(EventTypes.UI_ELEMENT.APPEAR_MANUALLY);
        } else {
            this.specialOfferButton.enabled = false;
            this.playButton.fire(EventTypes.UI_ELEMENT.APPEAR_MANUALLY);
        }
    }
    
    update(dt) {
       if(isExternalPause() || isExternalMute()) {
           this.settingsButton.enabled = false;
       }
    }
    
    
    /* event handlers */
    onSettingsClicked() {
        UIController.getInstance().showWindow(Constants.UI_LOCATIONS.SETTINGS, true, Constants.UI_LOCATIONS.START);
    }
    
    onLevelsClicked() {
        UIController.getInstance().showWindow(Constants.UI_LOCATIONS.LEVELS, true, Constants.UI_LOCATIONS.START);
    }
    
    onSkinsClicked() {
        UIController.getInstance().showWindow(Constants.UI_LOCATIONS.SKINS, true, Constants.UI_LOCATIONS.START);
    }
    
    onSpecialOfferClicked() {
        const startGame = (grantReward) => {
            this.entity.hide();
            this.app.fire(EventTypes.GameSession.START);
            if(grantReward) this.app.fire(EventTypes.AWARD_PLAYER_STICKMAN_WITH_BRICKS, 10);
        };
        
        if (Apicontroller.hasRewardedVideo()) {
            Apicontroller.showRewardedVideo((result) => {
                startGame(result.rewardGranted);
            });
        } else {
            startGame(false);
        } 
    }  
    
    onPlayClicked() {
        this.entity.hide();
        this.app.fire(EventTypes.GameSession.START);        
    }
    
}

pc.registerScript(StartWindow, 'startWindow');

// stickmanFloorDetector.js
var StickmanFloorDetector = pc.createScript('stickmanFloorDetector');

StickmanFloorDetector.prototype.initialize = function() {
    this._positionFrom = new pc.Vec3();
    this._positionTo = new pc.Vec3();
    
    this._fromDisplacement = new pc.Vec3(0, 1.0, 0);
    this._toDisplacement = new pc.Vec3(0, -7, 0);
};

StickmanFloorDetector.prototype.update = function(dt) {
    this.detectFloor();    
    
    // this.entity.nicknameTextField.element.text = '[ ' + ( this.entity.floor ? this.entity.floor.name : '-' )+ ' ]';
};


StickmanFloorDetector.prototype.detectFloor = function() {
    const position = this.entity.getPosition();
    this._positionFrom.copy(position).add(this._fromDisplacement);
    this._positionTo.copy(position).add(this._toDisplacement);
     
    const results = this.app.raycastAll(this._positionFrom, this._positionTo);
    let currentFloorCollider = null;
    
    for(let result of results) {
        if(result.entity && result.entity.tags.has('platform-collider', 'stairs-collider')) {
            currentFloorCollider = result.entity;
            break;
        }
    }
    
    if(currentFloorCollider) {
        if(currentFloorCollider.tags.has('platform-collider')) {
            const platform = currentFloorCollider.parent.parent;   
            this.entity.floor = platform;
        } else if(currentFloorCollider.tags.has('stairs-collider')) {
            const stairs = currentFloorCollider.parent;   
            this.entity.floor = stairs; 
        }
    } else {
        this.entity.floor = null;
    }
};

// swap method called for script hot-reloading
// inherit your script state here
StickmanFloorDetector.prototype.swap = function(old) {
    this.initialize();
};


// VictoryWindow.js
class VictoryWindow extends BaseWindow {
    
    initialize() {
        super.initialize();
    }

    
    _initComponents() {
        /* buttons */
        this.levelNumberText = this.entity.findByName('LevelNumberText');
        this.regularRewardButton = this.entity.findByName('RegularRewardButton');
        this.doubleRewardButton = this.entity.findByName('DoubleRewardButton');
        this.continueButton = this.entity.findByName('ContinueButton');
        this.homeButton = this.entity.findByName('HomeButton');
        this.notificationIcon = this.entity.findByName('NotificationIcon');
        this.levelPassTime = this.entity.findByName('LevelPassTime');
        this.passTimeRewardAmount = this.entity.findByName('PassTimeRewardAmount');
        this.extraBricks = this.entity.findByName('ExtraBricks');
        this.extraBricksRewardAmount = this.entity.findByName('ExtraBricksRewardAmount');
        this.watchVideoRewardAmount = this.entity.findByName('WatchVideoRewardAmount');
        this.continueRewardAmount = this.entity.findByName('ContinueRewardAmount');
        this.droppedCoinsContainer = this.entity.findByName('DroppedCoinsContainer');
        
        /* values */
        this._levelReward = 0;
        this._levelExtraReward = 0;
        
        /* event listeners */
        BasicButton.assignAction(this.regularRewardButton, this.onRegularRewardClicked, this);
        BasicButton.assignAction(this.doubleRewardButton, this.onDoubleRewardClicked, this);
        BasicButton.assignAction(this.continueButton, this.onContinueClicked, this);
        BasicButton.assignAction(this.homeButton, this.onHomeClicked, this);
    }
    
    
    _onShow() {
        super._onShow();
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.VICTORY);
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.CONFETTI);
        this.app.fire(EventTypes.CHOKE_MUSIC);
        
        /* update level texts */
        this.levelNumberText.element.text = '' + (LevelController.getInstance().getCurrentLevelIndex() + 1);
        
        this.levelPassTime.element.text = '' + Utils.humanizeTime(LevelStatsManager.getInstance().getLevelTime());
        
        this.extraBricks.element.text = '' + LevelStatsManager.getInstance().getExtraBricks();        
        
        this._levelReward = LevelStatsManager.getInstance().getLevelReward();        
        this._levelExtraReward = Math.max(this._levelReward  * GameConfig.getAttribute('gameplay', 'victoryWatchVideoRewardMultiplier'), 50);
        
        this.continueRewardAmount.element.text = '' + this._levelReward ;
        this.watchVideoRewardAmount.element.text = '' + this._levelExtraReward;    

        this.doubleRewardButton.enabled = false;
        this.regularRewardButton.enabled = false;        
        this.continueButton.enabled = false;
        this.homeButton.enabled = false;
        
        LevelController.getInstance().selectNextLevel();
        
        /* set & tween texts */
        const levelTimeReward = LevelStatsManager.getInstance().getLevelTimeReward();
        const levelTimeTweenDuration = pc.math.clamp(levelTimeReward / 100, 0.15, 0.75);
        if(levelTimeReward > 0) {
            this.passTimeRewardAmount.element.text = '+0';
            Utils.tweenText(this.passTimeRewardAmount, 0, levelTimeReward, levelTimeTweenDuration, 0.4, pc.Linear, true, "+");

        } else {
            this.passTimeRewardAmount.element.text = '+' + LevelStatsManager.getInstance().getLevelTimeReward();
        }

        const extraBricksReward = LevelStatsManager.getInstance().getExtraBricksReward();
        if(extraBricksReward > 0) {
            this.extraBricksRewardAmount.element.text = '+' + extraBricksReward;
            Utils.tweenText(this.extraBricksRewardAmount, 0, extraBricksReward, pc.math.clamp(extraBricksReward / 50, 0.15, 0.75), 0.4 + levelTimeTweenDuration + 0.075, pc.Linear, true, "+");
        } else {
            this.extraBricksRewardAmount.element.text = '+0';
        }

        
        /* API */
        setTimeout(() => {
            Promise.all([
                window.famobi_analytics.trackEvent(
                    "EVENT_LEVELSUCCESS",
                    {
                        levelName: `${LevelController.getInstance().getCurrentLevelIndex() + 1}`
                    }
                ),
                window.famobi_analytics.trackEvent(
                    "EVENT_TOTALSCORE",
                    {
                        totalScore: Math.floor(LevelStatsManager.getInstance().getLevelScore())
                    }
                ),
                window.famobi.showInterstitialAd()
            ]).then(() => this._showButtons(), () => this._showButtons());
        }, 500);
    }

    
    /* private */
    _showButtons() {
        if (Apicontroller.hasRewardedVideo()) {          
            this._showRewardButtons();
        } else {
            this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.MULTIPLE_COINS);
            this.entity.delayedCall(350, () => CoinsStorage.getInstance().addCoins(this._levelReward));
            this._showContinueHomeButtons(0);
        }
    }
    
    _showRewardButtons() {
        this.doubleRewardButton.enabled = true;
        this.regularRewardButton.enabled = true;
        this.continueButton.enabled = false;
        this.homeButton.enabled = false;
        this.doubleRewardButton.fire(EventTypes.UI_ELEMENT.APPEAR_MANUALLY);
        this.regularRewardButton.fire(EventTypes.UI_ELEMENT.APPEAR_MANUALLY);
    }
    
    
    _showContinueHomeButtons(delay = 750) {
        
        this.doubleRewardButton.enabled = false;
        this.regularRewardButton.enabled = false;
        
        setTimeout(() => {
            this.continueButton.enabled = true;
            this.homeButton.enabled = true;
            this.continueButton.fire(EventTypes.UI_ELEMENT.APPEAR_MANUALLY);
            this.homeButton.fire(EventTypes.UI_ELEMENT.APPEAR_MANUALLY);
            this.notificationIcon.fire(EventTypes.UI_ELEMENT.APPEAR_MANUALLY);
        }, delay);
    }
    
    /* event handlers */
    onDoubleRewardClicked() {
        const doRewardPlayer = (grantReward) => {
            if(grantReward) {
                this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.MULTIPLE_COINS);
                this.entity.delayedCall(750, () => CoinsStorage.getInstance().addCoins(this._levelExtraReward));
                this.droppedCoinsContainer.setLocalPosition(this.doubleRewardButton.getLocalPosition());
                this.playDroppedCoinsAnimation(35);
                this._showContinueHomeButtons(750);
                
                const levelTimeReward = LevelStatsManager.getInstance().getLevelTimeReward();
                const levelTimeTweenDuration = pc.math.clamp(levelTimeReward / 100, 0.15, 0.75);
                Utils.tweenText(this.passTimeRewardAmount, levelTimeReward, levelTimeReward * GameConfig.getAttribute('gameplay', 'victoryWatchVideoRewardMultiplier'), levelTimeTweenDuration, 0.1, pc.Linear, true, "+");
                
                const extraBricksReward = LevelStatsManager.getInstance().getExtraBricksReward();
                Utils.tweenText(this.extraBricksRewardAmount, extraBricksReward, extraBricksReward * GameConfig.getAttribute('gameplay', 'victoryWatchVideoRewardMultiplier'), pc.math.clamp(extraBricksReward / 50, 0.15, 0.75), 0.175, pc.Linear, true, "+");
            }
        };
        
        if (Apicontroller.hasRewardedVideo()) {
            Apicontroller.showRewardedVideo((result) => {
                doRewardPlayer(result.rewardGranted);
            });
        }
    }

    
    onRegularRewardClicked() {
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.MULTIPLE_COINS);
        this.entity.delayedCall(750, () => CoinsStorage.getInstance().addCoins(this._levelReward));
        this.droppedCoinsContainer.setLocalPosition(this.regularRewardButton.getLocalPosition());
        this.playDroppedCoinsAnimation(17);
        this._showContinueHomeButtons(750);
    }
    
    
    onContinueClicked() {
        this.entity.hide();        
        this.app.fire(EventTypes.UNCHOKE_MUSIC);
        
        this.app.fire(EventTypes.SHOW_TRANSITION_SCREEN, 0.175, () => {
            this.app.fire(EventTypes.RELOAD_LEVEL);
            setTimeout(() => this.app.fire(EventTypes.HIDE_TRANSITION_SCREEN), 20);
        });
    }
    
    onHomeClicked() {
        this.entity.hide();        
        this.app.fire(EventTypes.UNCHOKE_MUSIC);
        
        this.app.fire(EventTypes.SHOW_TRANSITION_SCREEN, 0.175, () => {
            this.app.fire(EventTypes.RELOAD_LEVEL_AND_SHOW_MENU);   
            setTimeout(() => this.app.fire(EventTypes.HIDE_TRANSITION_SCREEN), 100);
        });
    }

    playDroppedCoinsAnimation(amount) {
        const droppedCoinTemplate = this.app.assets.find('DroppedCoin', 'template');
        for(let i = 0; i < amount; i++) {
            const coin = droppedCoinTemplate.resource.instantiate();
            this.droppedCoinsContainer.addChild(coin);
            coin.setLocalPosition(pc.math.random(-4 * amount, 4 * amount), pc.math.random(-2 * amount, 2 * amount), 0);
            coin.setLocalScale(0, 0, 0);
            const delay = 0.15 + pc.math.random(0.0, 0.1);
            
            coin.tween(coin.getLocalScale())
                .to({x: 1, y: 1, z: 1}, 0.1, pc.BackOut)
                .delay(pc.math.random(0.0, 0.09))
                .on('complete', () => {
                    const duration = pc.math.random(0.45, 0.6);
                    coin.tween(coin.getLocalPosition())
                        .to({x: -window.innerWidth / 2 / UIController.getInstance().getScaleBlend() + 50, y: window.innerHeight / UIController.getInstance().getScaleBlend() - 350, z: 0}, duration, pc.SineIn)
                        .on('complete', () => coin.destroy())
                        .delay(delay)
                        .start();

                    coin.tween(coin.getLocalScale())
                        .to({x: 0.0, y: 0.0, z: 0.0}, duration, pc.SineIn)
                        .delay(delay)
                        .start();
                })
                .start();
        }
    }

}

pc.registerScript(VictoryWindow, 'victoryWindow');

// DefeatWindow.js
class DefeatWindow extends BaseWindow {
    
    initialize() {
        super.initialize();
    }

    
    _initComponents() {
        /* buttons */
        this.homeButton = this.entity.findByName('HomeButton');
        this.restartButton = this.entity.findByName('RestartButton');
        
        /* event listeners */        
        BasicButton.assignAction(this.homeButton, this.onHomeClicked, this);
        BasicButton.assignAction(this.restartButton, this.onRestartClicked, this);
    }
    
        
    _onShow() {
        super._onShow();
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.LOSS);
        this.app.fire(EventTypes.CHOKE_MUSIC);
        
        this.app.fire(EventTypes.SAVE_APP);
        
        this.homeButton.enabled = false;
        this.restartButton.enabled = false;
        
        /* API */
        setTimeout(() => {
            Promise.all([
                window.famobi_analytics.trackEvent(
                    "EVENT_LEVELFAIL",
                    {
                        levelName: `${LevelController.getInstance().getCurrentLevelIndex() + 1}`,
                        reason: 'dead'
                    }
                ),
                window.famobi_analytics.trackEvent(
                    "EVENT_TOTALSCORE",
                    {
                        totalScore: 0
                    }
                ),
                window.famobi.showInterstitialAd()
            ]).then(() => this._showButtons(), () => this._showButtons());
        }, 500);
    }
    
    /* private */
    
    _showButtons() {
        this.homeButton.enabled = true;
        this.restartButton.enabled = true;
        
        this.homeButton.fire(EventTypes.UI_ELEMENT.APPEAR_MANUALLY);
        this.restartButton.fire(EventTypes.UI_ELEMENT.APPEAR_MANUALLY);
    }
    
    
    /* event handlers */
    onRestartClicked() {
        this.entity.hide();
        this.app.fire(EventTypes.UNCHOKE_MUSIC);
        
        this.app.fire(EventTypes.SHOW_TRANSITION_SCREEN, 0.175, () => {
            this.app.fire(EventTypes.RELOAD_LEVEL); 
            setTimeout(() => this.app.fire(EventTypes.HIDE_TRANSITION_SCREEN), 100);
        });
    }

    onHomeClicked() {
        this.entity.hide();        
        this.app.fire(EventTypes.UNCHOKE_MUSIC);
        
        this.app.fire(EventTypes.SHOW_TRANSITION_SCREEN, 0.175, () => {
            this.app.fire(EventTypes.RELOAD_LEVEL_AND_SHOW_MENU); 
            setTimeout(() => this.app.fire(EventTypes.HIDE_TRANSITION_SCREEN), 100);
        });
    }
    
}

pc.registerScript(DefeatWindow, 'defeatWindow');

// ScaleManager.js
/* jshint esversion: 6 */
var ScaleManager = pc.createScript('scaleManager');

ScaleManager.attributes.add('useDevicePixelRatio', {
    type: 'boolean',
    default: true
});

ScaleManager.attributes.add('maxDevicePixelRatio', {
    type: 'number',
    default: 3
});

ScaleManager.attributes.add('minPortraitScreenRatio', {
    type: 'number',
    default: 0.5625
});

ScaleManager.attributes.add('landscapeBlend', {
    type: 'number',
    default: 0.75
});

ScaleManager.attributes.add('portraitBlend', {
    type: 'number',
    default: 0
});


ScaleManager.prototype.initialize = function() {
    this.updateDevicePixelRatio();
    this.onCanvasResized(this.app.graphicsDevice.canvas.width, this.app.graphicsDevice.canvas.height);
    this.app.graphicsDevice.on('resizecanvas', this.onCanvasResized, this);
    this.on('attr:useDevicePixelRatio', this.updateDevicePixelRatio, this);
    this.on('attr:maxDevicePixelRatio', this.updateDevicePixelRatio, this);
    this.on('attr:landscapeBlend', this.refresh, this);
    this.on('attr:portraitBlend', this.refresh, this);
};

ScaleManager.prototype.update = function(dt) {
    
};

ScaleManager.prototype.refresh = function() {
    this.updateDevicePixelRatio();
    this.onCanvasResized(this.app.graphicsDevice.canvas.width, this.app.graphicsDevice.canvas.height);
};

ScaleManager.prototype.updateDevicePixelRatio = function() {
    if(this.useDevicePixelRatio) {
        
        /* for MacBookPro and desktops with retina displays */
        if(pc.platform.desktop && this.app.graphicsDevice.maxPixelRatio > 1.99) {
             this.app.graphicsDevice.maxPixelRatio = pc.math.clamp(1 + (this.app.graphicsDevice.maxPixelRatio - 1) / 2, 1, this.maxDevicePixelRatio);
        } else {
            this.app.graphicsDevice.maxPixelRatio = Math.min(window.devicePixelRatio, this.maxDevicePixelRatio);
        }
        
        famobi.log('DevicePixelRatio is set to ', this.app.graphicsDevice.maxPixelRatio);
    } else {
        this.app.graphicsDevice.maxPixelRatio = 1;
        famobi.log('DevicePixelRatio is disabled and set to 1');
    }
};

ScaleManager.prototype.onCanvasResized = function(width, height) {
    const isLandscape = (width / height) >= this.minPortraitScreenRatio;    
    const scaleBlend = isLandscape ? this.landscapeBlend : this.portraitBlend;
    const fireResizedEvent = () => {
        this.app.fire(EventTypes.Screen.RESIZED, isLandscape, width, height);
        this.app.fire(EventTypes.Screen.SET_SCALE_BLEND, scaleBlend);
    };
    
    setTimeout(() => fireResizedEvent(), 0);
    
    if(pc.platform.ios) {
        setTimeout(() => fireResizedEvent(), 500);
    }
};

// scalePulseTween.js
/* jshint esversion: 6 */
var ScalePulseTween = pc.createScript('scalePulseTween');

ScalePulseTween.attributes.add('targetScale', {
    type: 'vec3',
    default: [1.1, 0.925, 1]
});

ScalePulseTween.attributes.add('duration', {
    type: 'number',
    default: 0.9
});

ScalePulseTween.attributes.add('yoyo', {
    type: 'boolean',
    default: true
});

ScalePulseTween.attributes.add('loop', {
    type: 'boolean',
    default: true
});


ScalePulseTween.attributes.add('easing', {
    type: 'string',
    enum: [
        {"Linear": "Linear"},
        {"QuadraticIn": "QuadraticIn"},
        {"QuadraticOut": "QuadraticOut"},
        {"QuadraticInOut": "QuadraticInOut"},
        {"CubicIn": "CubicIn"},
        {"CubicOut": "CubicOut"},
        {"CubicInOut": "CubicInOut"},
        {"QuarticIn": "QuarticIn"},
        {"QuarticOut": "QuarticOut"},
        {"QuarticInOut": "QuarticInOut"},
        {"QuinticIn": "QuinticIn"},
        {"QuinticOut": "QuinticOut"},
        {"QuinticInOut": "QuinticInOut"},
        {"SineIn": "SineIn"},
        {"SineOut": "SineOut"},
        {"SineInOut": "SineInOut"},
        {"ExponentialIn": "ExponentialIn"},
        {"ExponentialOut": "ExponentialOut"},
        {"ExponentialInOut": "ExponentialInOut"},
        {"CircularIn": "CircularIn"},
        {"CircularOut": "CircularOut"},
        {"CircularInOut": "CircularInOut"},
        {"BackIn": "BackIn"},
        {"BackOut": "BackOut"},
        {"BackInOut": "BackInOut"},
        {"BounceIn": "BounceIn"},
        {"BounceOut": "BounceOut"},
        {"BounceInOut": "BounceInOut"},
        {"ElasticIn": "ElasticIn"},
        {"ElasticOut": "ElasticOut"},
        {"ElasticInOut": "ElasticInOut"}
    ],
    default: "Linear"
});

ScalePulseTween.prototype.initialize = function() {
    this.initialScale = this.entity.getLocalScale().clone();
    
    this._restartTween();
    this.on('attr', this._restartTween, this);
};


ScalePulseTween.prototype.update = function(dt) {
    
};


ScalePulseTween.prototype._restartTween = function() {
    this.app.stopAllTweens(this.entity);
    this.entity.setLocalScale(this.initialScale);
    
    this.entity.tween(this.entity.getLocalScale())
        .to(this.targetScale, this.duration, pc[this.easing])
        .yoyo(this.yoyo)
        .loop(this.loop)
        .start(); 
};


// ReviveWindow.js
class ReviveWindow extends BaseWindow {
    
    initialize() {
        super.initialize();
    }

    
    _initComponents() {
        /* buttons */
        this.reviveButton = this.entity.findByName('ReviveButton');
        this.continueButton = this.entity.findByName('ContinueButton');
        
        /* event listeners */
        BasicButton.assignAction(this.reviveButton, this.onReviveClicked, this);
        BasicButton.assignAction(this.continueButton, this.onContinueClicked, this);
    }
    
    
    /* event handlers */
    onReviveClicked() {
        const doRevive = (grantReward) => {
            if(grantReward) {
                this.entity.hide();
                this.app.fire(EventTypes.RESPAWN_PLAYER);
                UIController.getInstance().showWindow(Constants.UI_LOCATIONS.GAMEPLAY);
            }
        };
        
        if (Apicontroller.hasRewardedVideo()) {
            Apicontroller.showRewardedVideo((result) => {
                doRevive(result.rewardGranted);
            });
        } 
    }
    
    onContinueClicked() {
        this.entity.hide();
        GameplayController.getInstance().triggerDefeat();
    }

}

pc.registerScript(ReviveWindow, 'reviveWindow');

// PlatformNavigationGraph.js
var PlatformNavigationGraph = pc.createScript('platformNavigationGraph');

PlatformNavigationGraph.attributes.add('maxSpotSpotConnectionLength', {
    type: 'number',
    default: 3
});

PlatformNavigationGraph.attributes.add('maxSpotStairConnectionLength', {
    type: 'number',
    default: 3
});

PlatformNavigationGraph.prototype.initialize = function() {
    this._assignEntityProperties();
    this._assignEntityMethods();
    
    this.app.on(EventTypes.LEVEL.BUILD_NAVIGATION_GRAPH, this._buildNavigationGraph, this);
};


PlatformNavigationGraph.prototype._assignEntityProperties = function() {
    const scriptContext = this;
   
    this.entity._exitNodes = [];
    Object.defineProperty(this.entity, "exitNodes", {
        get() {
            return this._exitNodes;
        } 
    });
    
    
    this.entity._entranceNodes = [];
    Object.defineProperty(this.entity, "entranceNodes", {
        get() {
            return this._entranceNodes;
        } 
    });
};


PlatformNavigationGraph.prototype._assignEntityMethods = function() {
    const scriptContext = this;
    
    this.entity.getClosestNode = function(worldPosition) {
        return scriptContext.getClosestNode(worldPosition);
    }.bind(this.entity);
    
    this.entity.findAccessibleColoredNodes = function(nodeFrom, color, avoidExitNodes) {
        return scriptContext.findAccessibleColoredNodes(nodeFrom, color, avoidExitNodes);
    }.bind(this.entity);
    
    this.entity.findAccessibleExitNodes = function(nodeFrom) {
        return scriptContext.findAccessibleExitNodes(nodeFrom);
    }.bind(this.entity);
    
    this.entity.getPath = function(nodeFrom, nodeTo, skipFirstNode) {
        return scriptContext.getPath(nodeFrom, nodeTo, skipFirstNode);
    }.bind(this.entity);
    
};


PlatformNavigationGraph.prototype.update = function(dt) {
    if(GameConfig.getAttribute('debug', 'drawSpotsConnections')) {
        this.entity.brickSpots.forEach(bs => {
            if(bs.neighbors) {
                bs.neighbors.forEach(n => this.app.renderLine(bs.getPosition(), n.getPosition(), new pc.Color(0, 0, 0, 0.15)));
            }

        });
    }
};




/* private */

PlatformNavigationGraph.prototype._buildNavigationGraph = function() { 
    
    const timestamp = performance.now();      
    // console.log(`building nav graph from ${this.entity.brickSpots.length} spots and ${this.entity.ingoingStairs.length}/${this.entity.outgoingStairs.length} stairs ...`);
    
    /* define exit & entrance nodes */
    this.entity._exitNodes = this.entity.outgoingStairs.map(stairs => stairs.getFirstStair());
    if(this.entity.exitNodes.length === 0) famobi.log("Warning: the platform " + this.entity.name + " does not have exit nodes ");
    
    this.entity._entranceNodes = this.entity.ingoingStairs.map(stairs => stairs.getLastStair());
    if(this.entity.entranceNodes.length === 0) famobi.log("Warning: the platform " + this.entity.name + " does not have entrance nodes ");
    
    const exitEntranceNodes = [...this.entity.exitNodes, ...this.entity.entranceNodes];
    
    
    const connectCustomNode = (node, nodePosition, stair, stairPosition) => {
        if(nodePosition.distance(stairPosition) < this.maxSpotStairConnectionLength) {
            if(this.isAccessibleWithRaycast(stairPosition, nodePosition)) {
                node.neighbors.add(stair);
                stair.neighbors.add(node);  
            }
        } 
    };
    
    /* loop through all nodes */
    for(let i = 0; i < this.entity.brickSpots.length; i++) {
        const spotA = this.entity.brickSpots[i], positionA = spotA.getPosition();
        
        /* connections between nodes */
        for(let j = i + 1; j < this.entity.brickSpots.length; j++) {
            const spotB = this.entity.brickSpots[j], positionB = spotB.getPosition();
            if(positionA.distance(positionB) < this.maxSpotSpotConnectionLength) {
                if(this.isAccessible(positionA, positionB)) {
                    spotA.neighbors.add(spotB);
                    spotB.neighbors.add(spotA);    
                }
            }
        }
        
        exitEntranceNodes.forEach(stair => {
            const stairPosition = stair.getPosition();
            if(positionA.distance(stairPosition) < this.maxSpotStairConnectionLength) {
                if(this.isAccessibleWithRaycast(positionA, stairPosition)) {
                    spotA.neighbors.add(stair);
                    stair.neighbors.add(spotA);  
                }
            } 
        });
        
        /* incoming elevators */
        for(let elevator of this.entity.ingoingElevators) {
            connectCustomNode(elevator.ExitNode, elevator.exitPosition, spotA, positionA);
        }
    }
    
    
    
    exitEntranceNodes.forEach(node => {
        const nodePosition = node.getPosition();
        
        /* connection with jumpers */
        for(let jumper of this.entity.jumpers) {
            connectCustomNode(jumper, jumper.getPosition(), node, nodePosition);
        }
        
        /* outcoming elevators */
        for(let elevator of this.entity.elevators) {
            connectCustomNode(elevator, elevator.getPosition(), node, nodePosition);
        }
    });
   
    
    // console.log('Navigation graph for ' + this.entity.name + ' built in ' + (performance.now() - timestamp) + ' ms');
};


PlatformNavigationGraph.prototype.getClosestNode = function(worldPosition) {
    let closestNode = null;
    let closestNodeDistance = Number.MAX_VALUE;
    for(let node of this.entity.brickSpots) {
        const distance = worldPosition.distance(node.getPosition());
        if(distance < closestNodeDistance) {
            closestNode = node;
            closestNodeDistance = distance;
        }
    }
    return closestNode;
};


PlatformNavigationGraph.prototype.findAccessibleColoredNodes = function(nodeFrom, color, avoidExitNodes) {
    this._resetSpotsMarks();
    this._markSpots([nodeFrom], null, 0, avoidExitNodes);
    return this.entity.brickSpots.filter(brickSpot => brickSpot._accumulatedDistance >= 0 && brickSpot.hasBrick() && brickSpot.brick.color === color);
};


PlatformNavigationGraph.prototype.findAccessibleExitNodes = function(nodeFrom) {
    this._resetSpotsMarks();
    this._markSpots([nodeFrom], null, 0);
    return Utils.shuffle(this.entity.exitNodes.filter(exitNode => exitNode._accumulatedDistance >= 0));
};

PlatformNavigationGraph.prototype.getPath = function(nodeFrom, nodeTo, skipFirstNode, avoidExitNodes) {
    /* Spots are supposed to be marked at this moment */
    
    if(nodeTo._accumulatedDistance < 0) {
        console.warn("There is no path to given spot");
        return null;
    }
    
    return this._backPropagatePath(nodeFrom, nodeTo, skipFirstNode, avoidExitNodes);
};



PlatformNavigationGraph.prototype._resetSpotsMarks = function() { 
    this.entity.brickSpots.forEach(bs => bs._accumulatedDistance = -1);
    this.entity.exitNodes.forEach(node => node._accumulatedDistance = -1);
    this.entity.entranceNodes.forEach(node => node._accumulatedDistance = -1);
};


PlatformNavigationGraph.prototype._markSpots = function(currentRoundNeighbors, nodeTo, mark, avoidExitNodes) { 
    const maxIterations = 30;
    let stopFlag = false;
    let nextRoundNeighbors = [];
    for (let n of currentRoundNeighbors) {
        if(avoidExitNodes && this.entity.exitNodes.indexOf(n) !== -1) {
            // console.log('exit node skipped ' + n.name);
            continue;
        }    
        if(n._accumulatedDistance < 0 || !n._accumulatedDistance) n._accumulatedDistance = 0;
        const nPosition = n.getPosition();
        for(let nn of n.neighbors) {
            if(nn === nodeTo) {
                stopFlag = true;
            } 
            
            if(avoidExitNodes && nn !== nodeTo && this.entity.exitNodes.indexOf(nn) !== -1) {
                // console.log('exit subnode skipped ' + n.name);
                continue;
            } 
            
            const distanceToNeighbor = nPosition.distance(nn.getPosition());
            if(nn._accumulatedDistance < 0 || nn._accumulatedDistance > n._accumulatedDistance + distanceToNeighbor) {
                nn._accumulatedDistance = n._accumulatedDistance + distanceToNeighbor;  
                nextRoundNeighbors.push(nn);
            }
        }
        if(stopFlag) return;
    }
    
    if(nextRoundNeighbors.length > 0) {
        this._markSpots(nextRoundNeighbors, nodeTo, mark, avoidExitNodes);
    }
};

PlatformNavigationGraph.prototype._backPropagatePath = function(nodeFrom, nodeTo, skipFirstNode, avoidExitNodes) { 
    const path = [];
    let currentNode = nodeTo;
    do {
        let minDistance = Number.MAX_VALUE;
        let minDistanceNode = null;
        for(let neighbor of currentNode.neighbors) {
            if(avoidExitNodes && this.entity.exitNodes.indexOf(neighbor) !== -1) {
                continue;
            } 
            if(neighbor._accumulatedDistance >= 0 && neighbor._accumulatedDistance < minDistance) {
                minDistance = neighbor._accumulatedDistance;
                minDistanceNode = neighbor;
            }
        }
        currentNode = minDistanceNode;
        path.push(currentNode);
    } while (currentNode != nodeFrom);
    
    if(skipFirstNode) {
        return [...path.reverse().slice(1), nodeTo];
    } else {
        return [...path.reverse(), nodeTo];
    }
};


PlatformNavigationGraph.prototype.isAccessible = function(positionA, positionB) { 
    // return true;
    
    this._testRayAB = this._testRayAB || new pc.Ray();
    this._rayDirectionAB = this._rayDirectionAB || new pc.Vec3();
    this._rayDirectionAB.sub2(positionB, positionA).normalize();
    this._testRayAB.set(positionA, this._rayDirectionAB);
    
    this._testRayBA = this._testRayBA || new pc.Ray();
    this._rayDirectionBA = this._rayDirectionBA || new pc.Vec3();
    this._rayDirectionBA.sub2(positionA, positionB).normalize();
    this._testRayBA.set(positionB, this._rayDirectionBA);
    
    return this.entity.skipZonesAABBs.every(skipZoneAABB => !(skipZoneAABB.intersectsRay(this._testRayAB) && skipZoneAABB.intersectsRay(this._testRayBA)));
};



PlatformNavigationGraph.prototype.isAccessibleWithRaycast = function(positionA, positionB) { 
    this._rayStartPos = this._rayStartPos || new pc.Vec3();
    this._rayStartPos.set(positionA.x, positionA.y + 0.75, positionA.z);
    this._rayEndPos = this._rayEndPos || new pc.Vec3();
    this._rayEndPos.set(positionB.x, positionB.y + 0.75, positionB.z);
    
    const allowedNames = ['stair', 'StairsCollider'];
    const results = this.app.raycastAll(this._rayStartPos, this._rayEndPos);
    for(let result of results) {
        if(allowedNames.indexOf(result.entity.name) === -1) {
            return false;
        }
    }
    return true;
};


// StairsNavigationGraph.js
var StairsNavigationGraph = pc.createScript('stairsNavigationGraph');

StairsNavigationGraph.prototype.initialize = function() {
    this._assignEntityProperties();
    this._assignEntityMethods();
    
    this.app.on(EventTypes.LEVEL.BUILD_NAVIGATION_GRAPH, this._buildNavigationGraph, this);
};


StairsNavigationGraph.prototype._assignEntityProperties = function() {
    const scriptContext = this;
    
    this.entity._exitNodes = [];
    Object.defineProperty(this.entity, "exitNodes", {
        get() {
            return this._exitNodes;
        }
    });
    
    this.entity._entranceNodes = [];
    Object.defineProperty(this.entity, "entranceNodes", {
        get() {
            return this._entranceNodes;
        }
    });
};

StairsNavigationGraph.prototype._assignEntityMethods = function() {
    const scriptContext = this;
    
    this.entity.getClosestNode = function(worldPosition) {
        return scriptContext.getClosestNode(worldPosition);
    }.bind(this.entity);

    
    this.entity.getPath = function(nodeFrom, nodeTo, skipFirstNode) {
        return scriptContext.getPath(nodeFrom, nodeTo, skipFirstNode);
    }.bind(this.entity);
};


StairsNavigationGraph.prototype.update = function(dt) {
    if(GameConfig.getAttribute('debug', 'drawSpotsConnections')) {
        this.entity.stairs.forEach(stair => {
            if(stair.neighbors) {
                stair.neighbors.forEach(n => this.app.renderLine(stair.getPosition(), n.getPosition(), new pc.Color(0, 0, 0, 0.25)));
            }
        });
    }
};


StairsNavigationGraph.prototype._buildNavigationGraph = function() {
    
    /* detect exit & entrance nodes */    
    this.entity._entranceNodes = Array.from(this.entity.getFirstStair().neighbors).filter(neighbor => !neighbor.isStair);
    if(this.entity.platformTo.isFinishPlatform) {
        this.entity._exitNodes = [this.entity.platformTo.centerNode];
    } else {
        this.entity._exitNodes = Array.from(this.entity.getLastStair().neighbors).filter(neighbor => !neighbor.isStair);
    }
    
    const timestamp = performance.now();      
    const firstStair = this.entity.getFirstStair();
    const lastStair = this.entity.getLastStair();
    let currentStair = firstStair;
    
    /* connections between stairs */
    do {
        let nextStair = this.entity.getNextStair(currentStair); 
        currentStair.neighbors.add(nextStair);
        nextStair.neighbors.add(currentStair);
        currentStair = nextStair;
        
    } while(currentStair != lastStair);
};



StairsNavigationGraph.prototype.getClosestNode = function(worldPosition) {
    let closestNode = null;
    let closestNodeDistance = Number.MAX_VALUE;
    for(let node of this.entity.stairs) {
        const distance = worldPosition.distance(node.getPosition());
        if(distance < closestNodeDistance) {
            closestNode = node;
            closestNodeDistance = distance;
        }
    }
    return closestNode;
};

StairsNavigationGraph.prototype.getPath = function(nodeFrom, nodeTo, skipFirstNode) {
    if(nodeTo === nodeFrom) {
        console.warn('StairsNavigationGraph:getPath - from and to nodes are the same');
        return skipFirstNode ? [nodeTo] : [nodeFrom, nodeTo];
    }
    if(this.entity.exitNodes.indexOf(nodeTo) !== -1) {
        const nodesList = this.entity.stairs.filter(stair => stair.index >= nodeFrom.index);
        nodesList.push(nodeTo);
        return skipFirstNode ? nodesList.slice(1) : nodesList;  
    } 
    
    if(this.entity.entranceNodes.indexOf(nodeTo) !== -1) {
        const nodesList = this.entity.stairs.filter(stair => stair.index <= nodeFrom.index).reverse();
        nodesList.push(nodeTo);
        return skipFirstNode ? nodesList.slice(1) : nodesList;  
    } 
    
    const nodesList = this.entity.stairs.filter((stair, index) => stair.index >= Math.min(nodeFrom.index, nodeTo.index) && stair.index <= Math.max(nodeFrom.index, nodeTo.index));
    if(nodeFrom.index > nodeTo.index) nodesList.reverse();
    return skipFirstNode ? nodesList.slice(1) : nodesList;     
};


// LoadingScreen.js
 pc.script.createLoadingScreen(function (app) {
    var showSplash = function () {

        // splash wrapper
        var wrapper = document.createElement('div');
        wrapper.id = 'application-splash-wrapper';
        document.body.appendChild(wrapper);

        
        // splash
        var splash = document.createElement('div');
        splash.id = 'application-splash';
        wrapper.appendChild(splash);
        splash.style.display = 'block';
        
        var logo = document.createElement('img');
        logo.src = 'data:image/png;base64,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';
        logo.id = 'logo';
        splash.appendChild(logo);
        logo.onload = function () {
            splash.style.display = 'block';
        };
        
        var loaderBack = document.createElement('div');
        loaderBack.id = 'loaderBack';
        splash.appendChild(loaderBack);
        
        var loaderBar = document.createElement('div');
        loaderBar.id = 'loaderBar';
        loaderBack.appendChild(loaderBar);

        var loadingText = document.createElement('span');
        loadingText.innerHTML = '0%';
        loadingText.id = 'loadingText';
        loaderBack.appendChild(loadingText);

        /* do not allow click through the wrapper */
        ['mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchmove', 'touchend'].forEach(evtKey => wrapper.addEventListener(evtKey, function(e) { e.stopPropagation(); e.preventDefault(); }));
    };

    var hideSplash = function () {
        var splash = document.getElementById('application-splash-wrapper');
        if(splash.parentElement) {
            splash.parentElement.removeChild(splash);
        }
    };

    var setProgress = function (value) {
        var bar = document.getElementById('loaderBar');
        var loadingText = document.getElementById('loadingText');
        if(bar) {
            value = Math.min(1, Math.max(0, value));
            const displayValue = value;
            bar.style.width = displayValue * 99 + '%';
            loadingText.innerHTML = Math.round(displayValue * 99) + '%';
        }
        const loadingProgressValue = value * 99; 
        if(typeof famobi !== "undefined" && famobi.setPreloadProgress) {
            famobi.setPreloadProgress(Math.floor(loadingProgressValue));
        }
    };

    var createCss = function () {
        var css =
            `
            body {
                user-select: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                touch-action: none;
                -webkit-touch-action: none;
                -moz-touch-action: none;
                -ms-touch-action: none;
            }            
            
            #logo {
                position: relative;
            }


            #application-splash-wrapper {      
                background-color: #1A1A1A;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                z-index: 999;
            }
            
            #application-splash {
                position: absolute;
                height: 270px;
                width: 492px;
                left: calc(50% - 246px);
                bottom: calc(50% - 125px);
            }

            #loaderBack {
                left: calc(50% - 209px);
                bottom: -50px;
                height: 60px;
                width: 418px;
                position: absolute;
                background-image: url('data:image/png;base64,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');
                background-repeat: no-repeat;
                background-position: left center;
                background-size: 418px 100%;
                z-index: 10;
            }

            #application-splash img {
                width: 100%;
            }
            
            #loaderBar {
                bottom: 0;
                left: 2px; 
                height: 56px;
                width: 0%;
                position: absolute;
                background-image: url('data:image/png;base64,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');
                background-repeat: no-repeat;
                background-position: left center;
                background-size: 414px 100%;
                z-index: 10;
            }
            
            #loadingText {
                color: white;
                font-size: 38px;                
                font-weight: bold;
                line-height: 60px;
                bottom: 0;
                left: 0;
                right: 0;
                top: 0;
                margin: auto;
                position: absolute;
                text-align: center;
                z-index: 100;
            }
                  
            .hide {
               opacity: 0 !important;
               transition: opacity 0.3s ease-in;
            }

            @media (max-width: 480px), (max-height: 480px) {
                #application-splash {
                    height: 170px;
                    width: 270px;
                    left: calc(50% - 135px);
                    bottom: calc(50% - 75px);
                }

                #loaderBack {
                    height: 37px;
                    width: 261px;
                    left: calc(50% - 130px);
                    bottom: 0;
                    background-size: 261px 100%;
                }

                 #loaderBar {
                    bottom: 0;
                    left: 2px; 
                    height: 34px;
                    background-size: 258px 100%;
                 }
            
                 #loadingText {
                     font-size: 24px;
                     line-height: 37px;
                     bottom: 0;
                 }
            }
        `;

        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);
    };
     
     
     
      
    var injectForcedModeProperties = function() {
        console.warn('Injecting forced mode properties...');
        const forcedModeProperties = getForcedModeProperties();
        if(forcedModeProperties.state.level > 0) {
            LevelController.levelSetViaForcedMode = true;
            LevelController.CURRENT_LEVEL_INDEX = forcedModeProperties.state.level - 1;         
            LevelController.MAX_UNLOCKED_LEVEL_INDEX = Math.max(LevelController.CURRENT_LEVEL_INDEX, LevelController.MAX_UNLOCKED_LEVEL_INDEX);
        } 
        
        if(forcedModeProperties.state.coins >= 0) {
            CoinsStorage.coinsSetViaForcedMode = true;
            CoinsStorage.forcedModeCoins = forcedModeProperties.state.coins;
        } 
        
    };
     
        
    var doAPIHandshake = function(startGameCallback) {   
        if(isExternalStart()) {
            app.timeScale = 0.0;
            famobi.onRequest("startGame", function() {
                app.timeScale = 1.0;                               
                if(startGameCallback) startGameCallback();
            });
        } else {
            if(startGameCallback) startGameCallback();
        }
        
        /* game ready report */
        famobi.gameReady();
    };
    
    
    var startLevelDirectly = function() {
        famobi.log("Starting level " + (LevelController.CURRENT_LEVEL_INDEX + 1) + " directly");
        
        /* timeout is a must to let the game properly initialize level */
        setTimeout(() => doAPIHandshake(() => {
            famobi.log('Handshake completed, skip_title mode');
            app.fire(EventTypes.APP_LOADED);
            app.fire(EventTypes.START_MENU_MUSIC);
            app.fire(EventTypes.GameSession.START);      
            
            if(isForcedMode()) {
                const forcedModeProperties = getForcedModeProperties();
                if(forcedModeProperties.state.initial_bricks > 0) {
                    app.fire(EventTypes.AWARD_PLAYER_STICKMAN_WITH_BRICKS, forcedModeProperties.state.initial_bricks);
                } 
            }
        }), 0);
    };
     

    createCss();
    showSplash();

    app.on('preload:end', function () {
        app.off('preload:progress');
    });
    app.on('preload:progress', setProgress);
    app.on('start', () => {
        famobi.log('App is starting...');        
        
        /* game is loaded, send final progress to Famobi API. */
        famobi.setPreloadProgress(100);
        
        /* inject forced mode properties if needed */
        if(isForcedMode()) {
            injectForcedModeProperties();
        }
        
        /* hide preloader */
        hideSplash();
    });
     
    app.on('postinitialize', () => {
        famobi.log('App is postInitialized');
                
        app.once(EventTypes.LEVEL_LOADED, () => {

            /* if "skip_title" feature is present, start the gameplay/level screen directly */
            if(skipTitleScreen()) { 
                 startLevelDirectly();                
            } else {

                /* timeout is a must to let the game properly initialize a level */
                setTimeout(() => doAPIHandshake(() => {
                    app.fire(EventTypes.APP_LOADED);
                    app.fire(EventTypes.START_MENU_MUSIC);
                    famobi.log('Handshake completed in normal gameplay mode');
                }), 10);
            }  
        });
        
        /* trigger level loading */
        app.fire(EventTypes.LOAD_INITIAL_LEVEL);
    });
});

// GameplayController.js
var GameplayController = pc.createScript('gameplayController');

GameplayController.attributes.add('testLevel', {
    type: 'asset',
    assetType: 'template'
});

GameplayController.getInstance = function() {
    if(!GameplayController._instance) console.error('GameplayController is not initialized yet');
    return GameplayController._instance;
};

GameplayController.prototype.initialize = function() {
    GameplayController._app = this.app;
    if(!GameplayController._instance) {
        GameplayController._instance = this;
    }

    window.gameplay = this.entity;
    
    
    this.entity.levelContainer = GameConfig.getAttribute('hierarchy', 'LevelContainer');
    this.entity.stickmansContainer = this.entity.findByName('StickmansContainer');
    this.entity.droppedBricksContainer = this.entity.findByName('DroppedBricks');
    
    this._initializeEntityProperties();
    
    this.app.on(EventTypes.LOAD_INITIAL_LEVEL, this._loadInitialLevel, this);
    this.app.on(EventTypes.LOAD_LEVEL, this._loadLevel, this);
    this.app.on(EventTypes.RELOAD_LEVEL_AND_SHOW_MENU, this._reloadLevelAndShowMenu, this);
    this.app.on(EventTypes.RELOAD_LEVEL, this._reloadLevel, this);
    this.app.on(EventTypes.LOAD_NEXT_LEVEL, this._loadNextLevel, this);
    this.app.on(EventTypes.LEVEL.SPAWN_STICKMANS, this._spawnStickmans, this);
    this.app.on(EventTypes.STICKMAN_FINISHED, this._onStickmanFinished, this);
    this.app.on(EventTypes.AWARD_PLAYER_STICKMAN_WITH_BRICKS, this._awardPlayerStickman, this);
 
};


GameplayController.prototype.postInitialize = function() {   

};

GameplayController.prototype.update = function(dt) {
    
};



GameplayController.prototype._initializeEntityProperties = function() {       
    const scriptContext = this;
    
    Object.defineProperty(this.entity, "level", {
        get() {
            return this.levelContainer.children[0];    
        }
    });
    
    /* amount of alive stickmans */
    Object.defineProperty(this.entity, "numStickmans", {
        get() {
            return this.stickmansContainer.children.length;    
        }
    });
};

GameplayController.prototype._loadInitialLevel = function() {   
    if(this.testLevel) {
        const levelIndex = LevelController.getInstance().getLevelIndexByName(this.testLevel.name);
        if(levelIndex === -1) {
            alert("Please add the level prefab you want to test in Gameplay>LevelController=>levelTemplates script attributes");
        } else {
            console.warn("Loading test level " + this.testLevel.name + " (level #" + levelIndex + ")");
            LevelController.getInstance().setCurrentLevelIndex(levelIndex);
            this._loadLevel(skipTitleScreen());    
        }
        
    } else {
        this._loadLevel(skipTitleScreen());
    } 
};

GameplayController.prototype._loadLevel = function(skipTitleScreen) {   
    LevelController.getInstance().loadLevel()
        .then(() => {
            famobi.log('Level ' + LevelController.getInstance().getCurrentLevelName() + ' has been loaded');
            this.app.fire(EventTypes.LEVEL_LOADED);
            if(!skipTitleScreen) UIController.getInstance().showWindow(Constants.UI_LOCATIONS.START);
        }).catch(errorMessage => console.error("Level creation failed: ", errorMessage));
};


GameplayController.prototype._reloadLevelAndShowMenu = function() {
    this.app.fire(EventTypes.GameSession.STOP);

    LevelController.getInstance().loadLevel()
        .then(() => {        
            famobi.log('Level ' + LevelController.getInstance().getCurrentLevelName() + ' has been loaded');
            this.app.fire(EventTypes.LEVEL_LOADED);
            UIController.getInstance().showWindow(Constants.UI_LOCATIONS.START);
    }).catch(errorMessage => console.error("Level creation failed: ", errorMessage));
};


GameplayController.prototype._reloadLevel = function() {
    this.app.fire(EventTypes.GameSession.STOP);
    
    LevelController.getInstance().loadLevel()
        .then(() => {        
            famobi.log('Level ' + LevelController.getInstance().getCurrentLevelName() + ' has been loaded');
            this.app.fire(EventTypes.LEVEL_LOADED);            
            this.app.fire(EventTypes.GameSession.RESTART);
        }).catch(errorMessage => console.error("Level creation failed: ", errorMessage));
};

GameplayController.prototype._loadNextLevel = function() {
    this.app.fire(EventTypes.GameSession.STOP);
    
    LevelController.getInstance().selectNextLevel();
    
    LevelController.getInstance().loadLevel()
        .then(() => {
            famobi.log('Level ' + LevelController.getInstance().getCurrentLevelName() + ' has been loaded');
            this.app.fire(EventTypes.LEVEL_LOADED);
            this.app.fire(EventTypes.GameSession.START);
        }).catch(errorMessage => console.error("Level creation failed: ", errorMessage));
};


GameplayController.prototype._spawnStickmans = function() {
    // destroy current stickmans */
    for(let i = this.entity.stickmansContainer.children.length - 1; i > -1; i--) {
        const stickman = this.entity.stickmansContainer.children[i];
        stickman.destroy();
    } 
    
    const playerColor = SkinsManager.getInstance().getPlayerColor();
    const aiColors = Utils.shuffle(this.app.colorsStorage.getColorsList().filter(c => c != playerColor));
    const names = GameConfig.getAttribute('AI', 'nicknames').slice(); 
    const totalEnemies = this.entity.level.totalEnemies;


    //player stickman
    this.entity.playerStickman = GameConfig.getAttribute('templates', 'stickman').resource.instantiate();
    this.entity.stickmansContainer.addChild(this.entity.playerStickman);
    this.entity.playerStickman.color = playerColor;
    this.entity.playerStickman.nickname = "You";
    this.entity.playerStickman.teleportTo(this.entity.level.firstPlatform.getSpawnPosition(this.entity.playerStickman.color));
    this.app.fire(EventTypes.SET_GAMEPLAY_CAMERA_TARGET, this.entity.playerStickman);

    
    //ai stickmans 
    this.entity.stickmansAI = [];
    for(let i = 0; i < totalEnemies; i++) {
        const color = aiColors[i % aiColors.length];
        const stickmanAI = GameConfig.getAttribute('templates', 'stickmanAI').resource.instantiate();
        this.entity.stickmansContainer.addChild(stickmanAI);
        stickmanAI.color = color;
        stickmanAI.nickname = Utils.removeRandomItem(names);
        stickmanAI.teleportTo(this.entity.level.firstPlatform.getSpawnPosition(stickmanAI.color));
        this.entity.stickmansAI.push(stickmanAI);
    }
};

GameplayController.prototype._onStickmanFinished = function(stickman, finishPlatform) {
    if(!GameSession.getInstance().sessionActive) return;
    
    const winnerPlace = this.entity.level.finishPlatform.placeWinnerStickman(stickman);
    stickman.finishPlace = winnerPlace;
    
    if(stickman === this.entity.playerStickman) {
        if(winnerPlace === 1) {
            this.triggerVictory();
        } else {
            this.triggerDefeat();
        }
    } else {
        if(winnerPlace === 1) {
            const secondPlace = this.entity.level.finishPlatform.placeWinnerStickman(this.entity.playerStickman);
            this.entity.playerStickman.finishPlace = secondPlace;
            
            this.triggerDefeat();
        } 
    }
    
};

GameplayController.prototype._awardPlayerStickman = function(numBricks) {
    if(this.entity.playerStickman) {
        for(let i = 0; i < numBricks; i++) {
            this.entity.playerStickman.createBrick();
        }    
    }
};

GameplayController.prototype.triggerVictory = function() {
    LevelController.getInstance().unlockNextLevel();
    this.app.fire(EventTypes.GameSession.STOP);
    this.app.fire(EventTypes.GameSession.VICTORY);

    Apicontroller.trackLevelEnd({
        "success": true,
        "score": LevelStatsManager.getInstance().getLevelScore()
    });     
    
    Apicontroller.handleLevelEndEvent("success", LevelStatsManager.getInstance().getLevelScore(), () => {
        if(isForcedMode()) {
            famobi.log("Level is completed in forced mode");
            this.app.timeScale = 0;
            this.app.applicationPaused = true;
            this.app.applicationFinished = true;
        } else {
            UIController.getInstance().showWindow(Constants.UI_LOCATIONS.VICTORY);
        }
    });    
};

GameplayController.prototype.triggerDefeat = function() {
    this.app.fire(EventTypes.GameSession.STOP);
    this.app.fire(EventTypes.GameSession.DEFEAT);
    
    Apicontroller.trackLevelEnd({
        "success": false,
        "score": LevelStatsManager.getInstance().getLevelScore()
    });     
    
    Apicontroller.handleLevelEndEvent("fail", LevelStatsManager.getInstance().getLevelScore(), () => {
        if(isForcedMode()) {
            famobi.log("Level is failed in forced mode");
            this.app.timeScale = 0;
            this.app.applicationPaused = true;
            this.app.applicationFinished = true;
        } else {
            UIController.getInstance().showWindow(Constants.UI_LOCATIONS.DEFEAT);
        }
    });
};

// LevelController.js
var LevelController = pc.createScript('levelController');

LevelController.attributes.add('levelTemplates', {
    type: 'asset',
    assetType: 'template',
    array: true
});


LevelController.getInstance = function() {
    if(!LevelController._instance) console.error('LevelController is not initialized yet');
    return LevelController._instance;
};

LevelController.levelSetViaForcedMode = false;
LevelController.CURRENT_LEVEL_INDEX = 0;
LevelController.MAX_UNLOCKED_LEVEL_INDEX = 0;

LevelController.prototype.initialize = function() {
    LevelController._app = this.app;
    if(!LevelController._instance) {
        LevelController._instance = this;
    }
        
    this.app.on(EventTypes.ON_PLAYER_SKIN_CHANGED, this.onPlayerSkinChanged, this);
    this.app.on(EventTypes.ON_PLAYER_COLOR_CHANGED, this.onPlayerColorChanged, this);
    
    if(!LevelController.levelSetViaForcedMode) {
        this.setCurrentLevelIndex(LocalStorageController.getSavedValue(Constants.Storage.CURRENT_LEVEL));
        this.setMaxUnlockedLevelIndex(LocalStorageController.getSavedValue(Constants.Storage.MAX_UNLOCKED_LEVEL));
    }
};

LevelController.prototype.update = function(dt) {
    
};

LevelController.prototype.onPlayerSkinChanged = function() {
    if(this.entity.playerStickman) {
        this.entity.playerStickman.setAccessory(SkinsManager.getInstance().getSelectedCharacterSkin());
    }
};


LevelController.prototype.onPlayerColorChanged = function() {
    return new Promise((resolve, reject) => {
        this._generateLevelColors()
            .then(this._prepareSpawnSpots.bind(this))
            .then(this._spawnStickmans.bind(this))
            .then(resolve)
            .catch(reject);
    });
    
};

/* getters/setters */

LevelController.prototype.getTotalLevels = function() {
    return this.levelTemplates.length;
};

LevelController.prototype.getCurrentLevelIndex = function() {
    return LevelController.CURRENT_LEVEL_INDEX;
};

LevelController.prototype.getMaxUnlockedLevelIndex = function() {
    return GameConfig.getAttribute('debug', 'unlockAllLevels') ? (this.getTotalLevels() - 1) : LevelController.MAX_UNLOCKED_LEVEL_INDEX;
};

LevelController.prototype.getLevelIndexByName = function(levelName) {
    return this.levelTemplates.findIndex(template => template.name === levelName);
};

LevelController.prototype.getLevelNameByIndex = function(levelIndex) {
    return this.levelTemplates[levelIndex].name;
};

LevelController.prototype.getCurrentLevelName = function() {
    return this.levelTemplates[this.getCurrentLevelIndex()].name;
};

LevelController.prototype.selectNextLevel = function() {
    const nextLevelIndex = Math.min(this.getMaxUnlockedLevelIndex(), Math.min(LevelController.CURRENT_LEVEL_INDEX + 1, this.getTotalLevels() - 1));
    if(nextLevelIndex >= this.getTotalLevels()) {
        LevelController.CURRENT_LEVEL_INDEX = 1;
    } else {
        LevelController.CURRENT_LEVEL_INDEX = nextLevelIndex;
    }
    this.app.fire(EventTypes.SAVE_APP);
};

LevelController.prototype.unlockNextLevel = function() {
    const nextLevelIndex = LevelController.CURRENT_LEVEL_INDEX + 1;
    this.setMaxUnlockedLevelIndex(Math.max(this.getMaxUnlockedLevelIndex(), Math.min(this.getTotalLevels() - 1, nextLevelIndex)));   
    this.app.fire(EventTypes.SAVE_APP);
};

LevelController.prototype.setCurrentLevelIndex = function(index) {
    LevelController.CURRENT_LEVEL_INDEX = index;
};

LevelController.prototype.setMaxUnlockedLevelIndex = function(index) {
    LevelController.MAX_UNLOCKED_LEVEL_INDEX = index;
};


/* methods */

LevelController.prototype.loadLevel = function() {
    famobi.log('Loading level ' + this.getCurrentLevelName());
    
    this._disableTestLevels();
        
    return new Promise((resolve, reject) => {
        this._destroyCurrentLevel()
            .then(this._instantiateLevel.bind(this))
            .then(this._generateLevelColors.bind(this))
            .then(this._prepareSpawnSpots.bind(this))
            .then(this._createBrickSpots.bind(this))
            .then(this._buildNavigationGraph.bind(this))
            .then(this._spawnStickmans.bind(this))
            .then(resolve)
            .catch(reject);
    });
};


LevelController.prototype._destroyCurrentLevel = async function() {
    famobi.log('Destroying previous level assets...');
    while(this.entity.droppedBricksContainer.children.length > 0 ) if(this.entity.droppedBricksContainer.children[0]) this.entity.droppedBricksContainer.children[0].destroy();
    while(this.entity.levelContainer.children.length > 0) this.entity.levelContainer.children[0].destroy();
    while(this.entity.stickmansContainer.children.length > 0) this.entity.stickmansContainer.children[0].destroy();
    return Promise.resolve();
};


LevelController.prototype._instantiateLevel = async function() {
    const levelName = this.getCurrentLevelName();
    const levelTemplate = this.app.assets.find(levelName, 'template');
    if(!levelTemplate) {
        return Promise.reject(`LevelController._instantiateLevel: Can not find level template "${levelName}" in the library`);
    }

    famobi.log("Instantiating level '" + levelName + "'...");

    const levelEntity = levelTemplate.resource.instantiate();
    levelEntity.enabled = false;
    this.entity.levelContainer.addChild(levelEntity);
    levelEntity.setLocalPosition(0, 0, 0);
    levelEntity.enabled = true;
    
    return Promise.resolve();
};


LevelController.prototype._prepareSpawnSpots = async function() {
    this.app.fire(EventTypes.LEVEL.PREPARE_SPAWN_SPOTS);    
    return Promise.resolve();
};

LevelController.prototype._createBrickSpots = async function() {
    famobi.log('Creating brick spots...');
    this.app.fire(EventTypes.LEVEL.SPAWN_BRICK_SPOTS);       
    return Promise.resolve();
};


LevelController.prototype._buildNavigationGraph = async function() {
    famobi.log('Building nav graphs...');
    this.app.fire(EventTypes.LEVEL.BUILD_NAVIGATION_GRAPH);       
    return Promise.resolve();
};


LevelController.prototype._generateLevelColors = async function() {
    this.app.colorsStorage.prepareRoundColors(this.entity.level.totalEnemies + 1, SkinsManager.getInstance().getPlayerColor()); //we should count player color too
    return Promise.resolve();
};

LevelController.prototype._spawnStickmans = async function() {
    return new Promise((resolve, reject) => this.entity.delayedCall(0, () => {
        if(!GameConfig.getAttribute('debug', 'demoMode')) {
            this.app.fire(EventTypes.LEVEL.SPAWN_STICKMANS);       
        }
        resolve();
    }));
};


LevelController.prototype._disableTestLevels = function() {
    const testLevels = this.app.root.findByName('LevelsTest');
    if(testLevels) {
        testLevels.enabled = false;
    }
    return Promise.resolve();
};


// cameraGameplay.js
var CameraGameplay = pc.createScript('cameraGameplay');

CameraGameplay.prototype.initialize = function() {
    this.app.on(EventTypes.SET_GAMEPLAY_CAMERA_TARGET, this.onTargetChanged, this);
};

CameraGameplay.prototype.update = function(dt) {
    
};

CameraGameplay.prototype.onTargetChanged = function(target) {
    this.entity.script.follow.setTarget(target);
};

// Level.js
var Level = pc.createScript('level');

Level.attributes.add('totalEnemies', {
    type: 'number',
    default: 3
});


Level.prototype.initialize = function() {
    this._initializeEntityProperties();
};

Level.prototype.postInitialize = function() {
    /* set level link for each platform */
    this._platforms.forEach(platform => platform.setLevel(this.entity));
};

Level.prototype.update = function(dt) {
    
};

Level.prototype._initializeEntityProperties = function() {
    const scriptContext = this;
    
    /* find components */
    this._platforms = this.entity.findByName('Platforms').children.slice();
    this._finishPlatform = this.entity.findByName('Platforms').findByName("Platform_Finish");
    this._stairs = this.entity.findByName('Bridges').find(entity => entity.script && entity.script.stairs);
    
    if(!this._finishPlatform) console.error('Platform_Finish platform is not found on level ' + this.entity.name);
    
    /* find platforms */
    Object.defineProperty(this.entity, "platforms", {
        get() {
            return scriptContext._platforms;    
        }
    });
    
    
     /* get first platforms */
    Object.defineProperty(this.entity, "firstPlatform", {
        get() {
            return this.platforms[0];    
        }
    });
    
       
    /* finish platform */
    Object.defineProperty(this.entity, "finishPlatform", {
        get() {
            return scriptContext._finishPlatform;    
        }
    });
    
    
    /* find stairs */
    Object.defineProperty(this.entity, "stairs", {
        get() {
            return scriptContext._stairs;    
        }
    });
    
    
    /* enemies amount */
    Object.defineProperty(this.entity, "totalEnemies", {
        get() {
            if(isForcedMode()) {
                const forcedModeProperties = getForcedModeProperties();
                if(forcedModeProperties.override.num_enemies >= 0) {
                    return forcedModeProperties.override.num_enemies;
                } 
            }
            if(GameConfig.getAttribute('debug', 'overrideEnemiesAmount')) {
                console.warn('Enemies amount limited to ' + GameConfig.getAttribute('debug', 'limitEnemiesAmount') + ' via GameCongig->debug');
                return GameConfig.getAttribute('debug', 'limitEnemiesAmount');
            }
            return scriptContext.totalEnemies;    
        }
    });
};


// swap method called for script hot-reloading
// inherit your script state here
// Level.prototype.swap = function(old) { };



// StickmanLifeStatus.js
var StickmanLifeStatus = pc.createScript('stickmanLifeStatus');


StickmanLifeStatus.prototype.initialize = function() {
    this.lastPlatform = null;
    
    this.app.on(EventTypes.GameSession.SESSION_STARTED, this.onSessionStarted, this);
    this.app.on(EventTypes.RESPAWN_PLAYER, this.onRespawnPlayer, this);
    this.entity.on(EventTypes.Stickman.ENTERED_PLATFORM, this.onEnterPlatform, this);
    this.entity.on(EventTypes.Stickman.LEAVED_PLATFORM, this.onLeavePlatform, this);
    this.entity.on(EventTypes.Stickman.ENTERED_STAIRS, this.onEnterStairs, this);
    this.entity.on(EventTypes.Stickman.LEAVED_STAIRS, this.onLeaveStairs, this);
    this.entity.on(EventTypes.Stickman.ENTERED_FINISH_PLATFORM, this.onEnterFinishPlatform, this);
    this.entity.on(EventTypes.Stickman.COLLIDED_WITH_OTHER_STICKMAN, this.onCollidedWithOtherStickman, this);
    
    this.on("destroy", () => {
        this.app.off(EventTypes.GameSession.SESSION_STARTED, this.onSessionStarted, this);
        this.app.off(EventTypes.RESPAWN_PLAYER, this.onRespawnPlayer, this);
        this.entity.off(EventTypes.Stickman.ENTERED_PLATFORM, this.onEnterPlatform, this);
        this.entity.off(EventTypes.Stickman.LEAVED_PLATFORM, this.onLeavePlatform, this);
        this.entity.off(EventTypes.Stickman.ENTERED_STAIRS, this.onEnterStairs, this);
        this.entity.off(EventTypes.Stickman.LEAVED_STAIRS, this.onLeaveStairs, this);
        this.entity.off(EventTypes.Stickman.ENTERED_FINISH_PLATFORM, this.onEnterFinishPlatform, this);
        this.entity.off(EventTypes.Stickman.COLLIDED_WITH_OTHER_STICKMAN, this.onCollidedWithOtherStickman, this);
        if(this._respawnDelay) {
            this._respawnDelay.stop();
            this._respawnDelay = null;
        }
    });
};


StickmanLifeStatus.prototype.update = function(dt) {
    this.verifyStickmanPosition();
    
    if(GameConfig.getAttribute('debug', 'showFloorName')) {
        this.entity.nicknameTextField.element.text = this.entity.floor ? this.entity.floor.name : '-';
    }
    
    if(GameConfig.getAttribute('debug', 'showVelocitySlowdown')) {
        this.entity.nicknameTextField.element.text = `${Math.floor((this.entity.runningVelocity / GameConfig.getAttribute('movement', 'velocity')) * 100)}%`;
    }
};


StickmanLifeStatus.prototype.onSessionStarted = function() {
    this.entity.invincibleCountdown = GameConfig.getAttribute('gameplay', 'invincibleAfterRespawnDuration');
};

StickmanLifeStatus.prototype.onEnterPlatform = function(platform) {
    this.lastPlatform = platform;
    if(this.lastPlatform && (this.lastPlatform.isPlatform || this.lastPlatform.isFinishPlatform)) {
        this.lastPlatform.ingoingStairs.forEach(stairs => stairs.setPassStatus(this.entity.color, true));
        this.app.fire(EventTypes.STICKMAN_CHANGED_PLATFORM, this.entity, platform);
    }
    console.log('%c Stickman ' + this.entity.color + ' has entered platform ' + platform.name, 'background: #222; color: #bada55');
};


StickmanLifeStatus.prototype.onLeavePlatform = function(oldPlatform) {
    // console.log('Stickman ' + this.entity.color + ' has leaved platform ' + oldPlatform.name);
};

StickmanLifeStatus.prototype.onEnterStairs = function(stairs) {
    // console.log('Stickman ' + this.entity.color + ' has entered stairs ' + stairs.name);
};

StickmanLifeStatus.prototype.onLeaveStairs = function(oldStairs) {
    // console.log('Stickman ' + this.entity.color + ' has leaved stairs ' + oldStairs.name);
};


StickmanLifeStatus.prototype.onEnterFinishPlatform = function(finishPlatform) {
    // console.log('Stickman ' + this.entity.color + ' has finsihed on ' + finishPlatform.name);
    this.entity.finished = true;
    this.app.fire(EventTypes.STICKMAN_FINISHED, this.entity, finishPlatform);
};

StickmanLifeStatus.prototype.onCollidedWithOtherStickman = function(otherStickman, contactResult) {
    this.entity.alive = false;

    if(this.entity.backpack.capacity > 0) {
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.BRICKS_COLLAPSE);
    }
    this.entity.backpack.dropBricks();

    if(this.entity.isPlayer || otherStickman.isPlayer) {
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.BUMP);
    }

    const force = contactResult.contacts[0].normal.clone().normalize().scale(-1).scale(GameConfig.getAttribute('movement', 'kickScaleXZ'));
    force.y = GameConfig.getAttribute('movement', 'kickForceY');
    this.entity.rigidbody.applyImpulse(force, new pc.Vec3(0, 0, 0));

    this.entity.delayedCall(GameConfig.getAttribute('gameplay', 'respawnDelay'), () => {

        if(GameSession.getInstance().sessionPaused) {
            this.app.once(EventTypes.GameSession.SESSION_RESUMED, () => GameSession.getInstance().waitUntilSessionResumed().then(() => this.respawn()));                
        } else {
            this.respawn();
        }
    }, this);
};

StickmanLifeStatus.prototype.verifyStickmanPosition = function() {
    const stickmanPosition = this.entity.getPosition();

    if(this.entity.alive && stickmanPosition.y < GameConfig.getAttribute('gameplay', 'groundY')) {
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.DROP_INTO_WATER);
        this.entity._backpackCapacityBeforeDied = this.entity.backpack.capacity;
        this.entity.backpack.dropBricks();
        this.entity.alive = false;
        this.entity.rigidbody.type = pc.BODYTYPE_STATIC;
        if(this.entity.isPlayer) {
            if (Apicontroller.hasRewardedVideo()) {
                UIController.getInstance().showWindow(Constants.UI_LOCATIONS.REVIVE);
            } else {
                GameplayController.getInstance().triggerDefeat();
            }
        } else {
            this._respawnDelay = this.entity.delayedCall(GameConfig.getAttribute('AI', 'aiRespawnCooldown'), () => GameSession.getInstance().waitUntilSessionResumed().then(() => this.respawnOnStart()));
        }
    }
};



StickmanLifeStatus.prototype.onRespawnPlayer = function() {
    if(this.entity.isPlayer && !this.entity.alive) {
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.REVIVE);
        this.respawnOnStart();
        if(this.entity._backpackCapacityBeforeDied > 0) {
            this.app.fire(EventTypes.AWARD_PLAYER_STICKMAN_WITH_BRICKS, this.entity._backpackCapacityBeforeDied);
            this.entity._backpackCapacityBeforeDied = 0;
        }
    }
};

StickmanLifeStatus.prototype.respawnOnStart = function() {
    const targetPosition = this.lastPlatform ? this.lastPlatform.getSpawnPosition(this.entity.color) : new pc.Vec3(0, 1, 0);
    this.entity.teleportTo(targetPosition);
    
    this.respawn();
    
    this.entity.teleportTo(targetPosition);
};

StickmanLifeStatus.prototype.respawn = function() {
    this.entity.alive = true;
    if(this.entity.rigidbody) this.entity.rigidbody.type = pc.BODYTYPE_DYNAMIC;
    this.entity.color = this.entity.color; //required to reset rigidbody group & mask
    this.entity.invincibleCountdown = GameConfig.getAttribute('gameplay', 'invincibleAfterRespawnDuration');
    this.entity.fire(EventTypes.Stickman.RESPAWNED);

    /* reset Y velocity */
    this.entity.rigidbody.linearVelocity = new pc.Vec3(0, 0, 0);
    
    /* destroy respawn delay */
    if(this._respawnDelay) {
        this._respawnDelay.stop();
        this._respawnDelay = null;
    }
};

// GameSession.js
var GameSession = pc.createScript('gameSession');

GameSession.getInstance = function() {
    if(!GameSession._instance) console.error('GameSession is not initialized yet');
    return GameSession._instance;
};

GameSession.prototype.initialize = function() {
    GameSession._app = this.app;
    if(!GameSession._instance) {
        GameSession._instance = this.entity;
    }
    
    this.entity._zeroGravity = new pc.Vec3(0, 0, 0);
    this.entity._initialWorldGravity = this.app.systems.rigidbody.gravity.clone();

    this._setEntityComponents();
    this._setEntityMethods();
    
    this.app.on(EventTypes.GameSession.START, this.onSessionStart, this);
    this.app.on(EventTypes.GameSession.RESTART, this.onSessionRestart, this);
    this.app.on(EventTypes.GameSession.STOP, this.onSessionStop, this);
    this.app.on(EventTypes.GameSession.PAUSE, this.onSessionPause, this);
    this.app.on(EventTypes.GameSession.RESUME, this.onSessionResume, this);
};

GameSession.prototype._setEntityComponents = function() {
    this.entity._sessionStarted = false;
    this.entity._sessionActive = false;
    this.entity._sessionPaused = false;
    
    /* session started ? */
    Object.defineProperty(this.entity, "sessionStarted", {
        get() {
            return this._sessionStarted;
        } 
    });
    
    /* session active ? */
    Object.defineProperty(this.entity, "sessionActive", {
        get() {
            return this._sessionActive;
        } 
    });
    
    /* session paused ? */
    Object.defineProperty(this.entity, "sessionPaused", {
        get() {
            return this._sessionPaused;
        }, 
        set(value) {
            if(this._sessionPaused != value) {
                this._sessionPaused = value;
                this._app.fire(this._sessionPaused ? EventTypes.GameSession.SESSION_PAUSED : EventTypes.GameSession.SESSION_RESUMED);   
                this.resetGravity();
            }
        }
    });
};

GameSession.prototype._setEntityMethods = function() {
    
    this.entity.waitUntilSessionResumed = async function() {
        const waitForResume = () => {
            return new Promise((resolve, reject) => {
                this._app.once(EventTypes.GameSession.SESSION_STOPED, () => reject());
                this._app.once(EventTypes.GameSession.SESSION_RESUMED, () => resolve());
            });            
        };
        
        if(GameSession.getInstance().sessionPaused) {
            try { 
                await waitForResume();
            } catch(e) {
                return Promise.reject();
            }
            return Promise.resolve(true);
        } 
            
        return Promise.resolve(true);
        
    }.bind(this.entity);
        
    
    this.entity.resetGravity =  function() {
        this._app.systems.rigidbody.gravity.copy(this._sessionPaused ?  this._zeroGravity : this._initialWorldGravity);
    }.bind(this.entity);
        
};

GameSession.prototype.update = function(dt) {
    
};



/* event handlers */

GameSession.prototype._doSessionStartRoutine = function() {
    this.entity._sessionStarted = true;
    this.entity._sessionActive = true;
    this.entity.sessionPaused = false;
    this.app.fire(EventTypes.GameSession.SESSION_STARTED);
    this.entity.resetGravity();
    UIController.getInstance().showWindow(Constants.UI_LOCATIONS.GAMEPLAY);
    /* report player-ready status */
    window.famobi.playerReady();
};

GameSession.prototype.onSessionStart = function() {
     Apicontroller.trackLevelStart({"level": LevelController.getInstance().getCurrentLevelIndex() + 1});        
     window.famobi_analytics.trackEvent("EVENT_LEVELSTART", {levelName: `${LevelController.getInstance().getCurrentLevelIndex() + 1}` })
        .then(() => this._doSessionStartRoutine());
};


GameSession.prototype.onSessionRestart = function() {
    Apicontroller.trackLevelStart({"level": LevelController.getInstance().getCurrentLevelIndex() + 1});        
    window.famobi_analytics.trackEvent("EVENT_LEVELRESTART", {levelName: `${LevelController.getInstance().getCurrentLevelIndex() + 1}` })
       .then(() => this._doSessionStartRoutine());
};


GameSession.prototype.onSessionStop = function() {
    this.entity._sessionStarted = false;
    this.entity._sessionActive = false;
    this.entity.sessionPaused = false;
    this.app.fire(EventTypes.GameSession.SESSION_STOPED);      
};


GameSession.prototype.onSessionPause = function() {
    const doPause = () => this.entity.sessionPaused = true;
    
    if(window.famobi_analytics) {
        window.famobi_analytics.trackEvent("EVENT_PAUSE").then(() => {
            doPause();
        });
    } else {
         doPause();
    }                                   
};


GameSession.prototype.onSessionResume = function() {
    const doUnpause = () => this.entity.sessionPaused = false;
     
    if(window.famobi_analytics) {
        window.famobi_analytics.trackEvent("EVENT_RESUME").then(() => {
            doUnpause();
        });
    } else {
        doUnpause();
    }
};

// SoundController.js
/* jshint esversion: 6 */
var SoundController = pc.createScript('soundController');

SoundController.attributes.add('soundStorage', {
    title: "Sound storage entity",
    type: 'entity'
});

SoundController.attributes.add('preloadSoundAssets', {
    title: "Preload sounds",
    type: 'boolean',
    default: false
});

SoundController.attributes.add('autoPlayMelodyKey', {
    title: "Auto play melody key",
    type: 'string',
    default: ''
});


SoundController.attributes.add('musicAssets', {
    title: "Music assets",
    type: 'json',
    schema: [{
        name: 'key',
        type: 'string',
        default: ''
    },
    {
        name: 'asset',
        type: 'asset',
        assetType: 'audio'
    },
    {
        name: 'overlap',
        type: 'boolean',
        default: false
    },
    {
        name: 'volume',
        type: 'number',
        default: 1.0
    },
    {
        name: 'loop',
        type: 'boolean',
        default: true
    }],
    array: true
});

SoundController.attributes.add('soundAssets', {
    title: "Sound assets",
    type: 'json',
    schema: [{
        name: 'key',
        type: 'string',
        default: ''
    },
    {
        name: 'asset',
        type: 'asset',
        assetType: 'audio'
    },
    {
        name: 'overlap',
        type: 'boolean',
        default: false
    },
    {
        name: 'volume',
        type: 'number',
        default: 1.0
    },
    {
        name: 'autoPlay',
        type: 'boolean',
        default: false
    },
    {
        name: 'loop',
        type: 'boolean',
        default: false
    }],
    array: true
});

SoundController.attributes.add('soundSeries', { 
    title: "Sound series",
    type: 'json',
    schema: [{
        name: 'key',
        type: 'string',
        default: ''
    },
    {
        name: 'startPitch',
        type: 'number',
        default: 1.0
    },
    {
        name: 'endPitch',
        type: 'number',
        default: 1.5
    },
    {
        name: 'steps',
        type: 'number',
        default: 10,
        min: 2,
        max: 25
    }, {
        name: 'timeout',
        type: 'number',
        default: 1000
    }],
    array: true
});


SoundController.sfxStateLoaded = false;
SoundController.sfxVolume = 0.5;
SoundController.musicStateLoaded = false;
SoundController.musicVolume = 0.5;

Object.defineProperty(SoundController, "musicEnabled", {
    get() {
        return SoundController.musicVolume > 0;
    }, 
    set(value) {
        if(!value) {
            SoundController._prevMusicVolume = SoundController.musicVolume;
            SoundController.musicVolume = 0;    
        } else {
            SoundController.musicVolume = SoundController._prevMusicVolume || 0.5;    
        }
        pc.Application.getApplication().fire(EventTypes.SET_MUSIC_VOLUME,  SoundController.musicVolume);
    }
});
   

Object.defineProperty(SoundController, "sfxEnabled", {
    get() {
        return SoundController.sfxVolume > 0;
    }, 
    set(value) {
        if(!value) {
            SoundController._prevSFXVolume = SoundController.sfxVolume;
            SoundController.sfxVolume = 0;    
        } else {
            SoundController.sfxVolume = SoundController._prevSFXVolume || 0.5;    
        }
        pc.Application.getApplication().fire(EventTypes.SET_SFX_VOLUME,  SoundController.sfxVolume);
    }
});

SoundController.masterVolume = 1.0;
SoundController.apiVolumeMultiplier = 1.0;

SoundController.prototype.initialize = function() {
        
    /* music assets */
    this.musicSlotKeys = new Set();
    this.sfxSlotKeys = new Set();
    
    
    /* events handlung */
    this.app.on(EventTypes.PLAY_SFX, this.playSfx, this);
    this.app.on(EventTypes.PLAY_EXTERNAL_SFX, this.playExternalSfx, this);
    this.app.on(EventTypes.STOP_SFX, this.stopSfx, this);
    
    this.app.on(EventTypes.MUTE_SOUND, this.muteSound, this);
    this.app.on(EventTypes.UNMUTE_SOUND , this.unmuteSound, this);
    this.app.on(EventTypes.ENABLE_SFX, this.enableSfx, this);
    this.app.on(EventTypes.DISABLE_SFX, this.disableSfx, this);
    this.app.on(EventTypes.ENABLE_MUSIC, this.enableMusic, this);
    this.app.on(EventTypes.DISABLE_MUSIC, this.disableMusic, this);
    this.app.on(EventTypes.CHOKE_MUSIC, this.chokeMusic, this);
    this.app.on(EventTypes.UNCHOKE_MUSIC, this.unchokeMusic, this);
    this.app.on(EventTypes.SET_MUSIC_VOLUME, this.setMusicVolume, this);
    this.app.on(EventTypes.SET_SFX_VOLUME, this.setSFXVolume, this);
    this.app.on(EventTypes.APP_LOADED, this.onAppLoaded, this);
    this.app.on(EventTypes.SET_MASTER_VOLUME, this.setMasterVolume, this);
    this.app.on(EventTypes.SET_VOLUME_MULTIPLIER, this.setVolumeMultiplier, this);
    
    /* fetch and apply master volume */
    this.setMasterVolume(window.famobi.getVolume());
        
    const savedSFXVolume = LocalStorageController.getSavedValue(Constants.Storage.SFX_VOLUME);    
    if(savedSFXVolume != undefined) {
        SoundController.sfxStateLoaded = true;
        this.setSFXVolume(savedSFXVolume);    
    } else {
        SoundController.sfxStateLoaded = true;
        this.setSFXVolume(0.5);
    }
    
    const savedMusicVolume = LocalStorageController.getSavedValue(Constants.Storage.MUSIC_VOLUME);    
    if(savedMusicVolume != undefined) {
        SoundController.musicStateLoaded = true;
        this.setMusicVolume(savedMusicVolume);
    } else {
        SoundController.musicStateLoaded = true;
        this.setMusicVolume(0.5);
    }
    
    /* init sound series params */
    this.soundSeriesMap = new Map();
    this.soundSeries.forEach(soundConfig => {
        const keys = soundConfig.key.split(',');
        keys.forEach(key => this.soundSeriesMap.set(key, soundConfig));
    });
        
    this.fireSoundStateChangedEvent();
    this.fireMusicStateChangedEvent();
};

SoundController.prototype.update = function(dt) {
    
};

SoundController.prototype.playSfx = function(key, debounceDelay) {
    if(Array.isArray(key)) key = Utils.getRandomItem(key);
    
    const currentTimestamp = new Date().getTime();
    const lastTimestamp = this.soundStorage.sound.slot(key).lastTimeStamp;
    
    if(debounceDelay) {
         const lastTimestamp = this.soundStorage.sound.slot(key).lastTimeStamp;
         if(lastTimestamp && currentTimestamp - lastTimestamp < debounceDelay) {
             return;
         }
    }
    
    if(this.soundSeriesMap.has(key)) {
        const seriesConfig = this.soundSeriesMap.get(key);
        // const seriesIndex = this.soundStorage.sound.slot(key)._lastSeriesIndex || 0;
        const seriesIndex = seriesConfig._lastSeriesIndex || 0;
        const lastSeriesTimestamp = seriesConfig.lastTimeStamp || 0;
        if(currentTimestamp - lastSeriesTimestamp <= seriesConfig.timeout) {
            this.soundStorage.sound.slot(key).pitch = pc.math.clamp(seriesConfig.startPitch + seriesIndex * (seriesConfig.endPitch - seriesConfig.startPitch) / (seriesConfig.steps - 1), seriesConfig.startPitch, seriesConfig.endPitch);
            // this.soundStorage.sound.slot(key)._lastSeriesIndex += 1;
            seriesConfig._lastSeriesIndex += 1;
        } else {
            this.soundStorage.sound.slot(key).pitch = seriesConfig.startPitch;
            // this.soundStorage.sound.slot(key)._lastSeriesIndex = 0;
            seriesConfig._lastSeriesIndex = 0;
        }
        seriesConfig.lastTimeStamp = currentTimestamp;
    }
    
    /* remember current timestamp */
    this.soundStorage.sound.slot(key).lastTimeStamp = currentTimestamp;
    
    if(this.soundStorage.sound.slot(key)) {
        this.soundStorage.sound.play(key);
    } else {
        console.warn("No sound with key '" + key + "' in storage!");
    }
};


SoundController.prototype.playExternalSfx = function(key, targetEntity, debounceDelay) {
    if(!targetEntity || !targetEntity.sound || !targetEntity.sound.slot(key)) {
        return;
    }

    if(SoundController.sfxEnabled) {
        targetEntity.sound.play(key);
    }
};

SoundController.prototype.stopSfx = function(key) {
    this.soundStorage.sound.stop(key);
};

SoundController.prototype.muteSound = function(key) {
    this.soundStorage.sound.slot(key)._initialVolume = 0;
    this.soundStorage.sound.slot(key).volume = 0;
};

SoundController.prototype.unmuteSound = function(key, volume) {
    this.soundStorage.sound.slot(key)._initialVolume = volume;
    this.soundStorage.sound.slot(key).volume = volume;
};

SoundController.prototype.enableSfx = function(saveApp = true) {
    SoundController.sfxEnabled = true;
};

SoundController.prototype.disableSfx = function(saveApp = true) {
     SoundController.sfxEnabled = false;
};



SoundController.prototype.enableMusic = function(saveApp = true) {
    SoundController.musicEnabled = true;
};

SoundController.prototype.disableMusic = function(saveApp = true) {
    SoundController.musicEnabled = false;
};

SoundController.prototype.chokeMusic = function() {
    this.musicSlotKeys.forEach(key => {
        const slot = this.soundStorage.sound.slot(key);
        if(slot) slot.volume = slot._initialVolume * SoundController.musicVolume * 0.2;
    });
};

SoundController.prototype.unchokeMusic = function() {
    this.musicSlotKeys.forEach(key => {
        const slot = this.soundStorage.sound.slot(key);
        if(slot) slot.volume = slot._initialVolume * SoundController.musicVolume * 1.0;
    });
};


SoundController.prototype.fireSoundStateChangedEvent = function() {
    this.app.fire(EventTypes.SOUND_STATE_CHANGED, SoundController.sfxEnabled, SoundController.sfxVolume);
};

SoundController.prototype.fireMusicStateChangedEvent = function() {
    this.app.fire(EventTypes.MUSIC_STATE_CHANGED, SoundController.musicEnabled, SoundController.musicVolume);
};

SoundController.prototype.setMusicVolume = function(volume) {
    SoundController.musicVolume = volume;
    this.musicSlotKeys.forEach(key => {
        const slot = this.soundStorage.sound.slot(key);
        if(slot) slot.volume = slot._initialVolume * SoundController.musicVolume;
    });
    this.fireMusicStateChangedEvent();
    this.app.fire(EventTypes.SAVE_APP);
};

SoundController.prototype.setSFXVolume = function(volume) {
    SoundController.sfxVolume = volume;
    this.sfxSlotKeys.forEach(key => {
        const slot = this.soundStorage.sound.slot(key);
        if(slot) slot.volume = slot._initialVolume * SoundController.sfxVolume;
    });
    this.fireSoundStateChangedEvent();
    this.app.fire(EventTypes.SAVE_APP);
};



SoundController.prototype.onAppLoaded = function() {
    famobi.log('Preloading ' + this.soundAssets.length + ' sounds...');
    this.createSoundsSlots();
    this.createMusicSlots();
    // this.app.fire(EventTypes.PLAY_MUSIC, Constants.AUDIO.MUSIC_MENU);
};

SoundController.prototype.createSoundsSlots = function() {
    this.soundAssets.forEach(asset => {
        const slot = this.entity.sound.addSlot(asset.key, asset);
        slot._initialVolume = slot.volume;
        this.sfxSlotKeys.add(asset.key);
        if(this.preloadSoundAssets) {
            if(this.entity.sound.slot(asset.key) && !this.entity.sound.slot(asset.key).isLoaded) {
                this.entity.sound.slot(asset.key).load();
            }
        }
    });
    
    this.setSFXVolume(SoundController.sfxVolume);
};

SoundController.prototype.createMusicSlots = function() {
    const playMusicTask = (key) => {
        if(this.autoPlayMelodyKey === key) {
            this.entity.sound.slot(key).play();
        }
    };
    this.musicAssets.forEach(asset => {
        const slot = this.entity.sound.addSlot(asset.key, asset);
        slot._initialVolume = slot.volume;
        this.musicSlotKeys.add(asset.key);
        if(this.preloadSoundAssets) {
            if(this.entity.sound.slot(asset.key) && !this.entity.sound.slot(asset.key).isLoaded) {
                this.entity.sound.slot(asset.key).load();
                this.entity.sound.slot(asset.key).once('load', () => {
                    playMusicTask(asset.key);
                });
            } else {
                if(this.entity.sound.slot(asset.key).isLoaded) {
                    playMusicTask(asset.key);
                }
            }
        }
        
    });
    
    this.setMusicVolume(SoundController.musicVolume);
};

/* volume control */

SoundController.prototype.updateVolume = function() {
    this.app.systems.sound.volume = SoundController.masterVolume * SoundController.apiVolumeMultiplier;
};

SoundController.prototype.setMasterVolume = function(volume) {
    famobi.log('Setting master volume to ' + volume);
    SoundController.masterVolume = volume;
    this.updateVolume();
};

SoundController.prototype.setVolumeMultiplier = function(volume) {
    famobi.log('Setting volume multiplier to ' + volume);
    SoundController.apiVolumeMultiplier = volume;
    this.updateVolume();
};


// famobi.js

/* global game state & management variables */
var game = pc.Application.getApplication();
var isPageVisible = true;
var adIsShowing = false;

/* Application extensions */

pc.Application.prototype.pauseGame = function() {
    this.applicationPaused = true;
    this.soundVolumeBeforePaused = SoundController.masterVolume;
    this.fire(EventTypes.SET_MASTER_VOLUME, 0);
    this.timeScale = 0;
    const inputBlocker = this.root.findByName("InputBlocker");
    if(inputBlocker) {
        inputBlocker.enabled = true;
    }
    famobi.log("Application:paused");
};

pc.Application.prototype.unpauseGame = function(forced) {    
    if(this.applicationFinished) return; //no need to unpause
    
    if (isPageVisible && (!adIsShowing || forced)) {
        this.applicationPaused = false;
        this.fire(EventTypes.SET_MASTER_VOLUME, this.soundVolumeBeforePaused || 1);
        this.timeScale = 1;  
        famobi.log("Application:resumed");
        const inputBlocker = this.root.findByName("InputBlocker");
        if(inputBlocker) {
            inputBlocker.enabled = false;
        }
    } else {
        famobi.log('resuming game is not allowed now because ads are displaying or page is not visible...');
    }
};



/* global famobi entry point */
var famobi = window.famobi;



/* famobi feaures shortcuts */


var getForcedModeProperties = function() {
    const forcedModePproperties =  typeof famobi !== "undefined" && famobi.getFeatureProperties("forced_mode");
    return forcedModePproperties;
};

var isExternalStart = function() {
    return typeof famobi !== "undefined" && famobi.hasFeature("external_start");
};

var isExternalMute = function() {
    return typeof famobi !== "undefined" && famobi.hasFeature("external_mute");
};

var isExternalPause = function() {
    return typeof famobi !== "undefined" && famobi.hasFeature("external_pause");
};

var skipTitleScreen = function() {
    return typeof famobi !== "undefined" && famobi.hasFeature("skip_title");
};

var skipTutorial = function() {
    return typeof famobi !== "undefined" && famobi.hasFeature("skip_tutorial");
};

var useAutoQuality = function() {
    return typeof famobi !== "undefined" && famobi.hasFeature("auto_quality");
};

var isForcedMode = function() {
    return typeof famobi !== "undefined" && famobi.hasFeature("forced_mode");
};

var isCopyrightEnabled = function() {
    return typeof famobi !== "undefined" && famobi.hasFeature("copyright");
};

var isEndlessMode = function() {
    return isForcedMode() && getForcedModeProperties().state.level === -1;
};

var hasExternalLeaderboard = function() {
    return typeof famobi !== "undefined" && famobi.hasFeature("external_leaderboard");
};

var isUIHidden = function(uiKey) {
    return isForcedMode() && getForcedModeProperties() && getForcedModeProperties().override.hide_ui && getForcedModeProperties().override.hide_ui.indexOf(uiKey) !== -1;
};



/* famobi pause/resume requests */

window.famobi_onPauseRequested = function () {
    adIsShowing = true;
    if (game) {
        game.pauseGame();
    }
};

window.famobi_onResumeRequested = function () {
    adIsShowing = false;
    if (game) {
        game.unpauseGame();
    }
};


/* Monkey App handlers */

//Monkey App handlers
if(window.famobi) {
     window.famobi.onRequest("pauseGameplay", function() {
        if (game) {
            game.pauseGame();
        }
    });
    
    window.famobi.onRequest("resumeGameplay", function() {
        if (game) {
            game.unpauseGame();
        }
    });
    
    window.famobi.onRequest("enableAudio", function() {
        if(game) {
            game.fire("sfx:enable");
        }
    });
    
    window.famobi.onRequest("disableAudio", function() {
        if(game) {
            game.fire("sfx:disable");
        }
    });
    
    window.famobi.onRequest("enableMusic", function() {
        if(game) {
            game.fire("music:enable");
        }
    });

    window.famobi.onRequest("disableMusic", function() {
        if(game) {
            game.fire("music:disable");
        }
    });
    
    window.famobi.onRequest("changeVolume", function(volume) {
        if(game) {
            game.fire('audio:setVolumeMultiplier', volume);
        }
    });
}


/* Window Visibility API */
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden";
    visibilityChange = "visibilitychange";
} else if (typeof document["msHidden"] !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document["webkitHidden"] !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}

function handleVisibilityChange() {
    if (document[hidden]) {
        isPageVisible = false;
        // if (game && !adIsShowing) game.pauseGame();
    } else {
        isPageVisible = true;
        if (game && !adIsShowing && game.applicationPaused && !game.applicationFinished) game.unpauseGame();
    }
}

// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
    console.log("Browser doesn't support the Page Visibility API.");
} else {
    // Handle page visibility change
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
}

console.log("Window VisibilityAPI connected");


// localStorageController.js
/* jshint esversion: 6 */
var LocalStorageController = pc.createScript('localStorageController');

LocalStorageController._writingAllowed = false;
LocalStorageController._hasPendingWriteRequests = false;

LocalStorageController.prototype.initialize = function() {
    LocalStorageController.app = this.app;
    LocalStorageController.currentLocalStorage = (window.famobi && window.famobi.localStorage) ? window.famobi.localStorage : window.localStorage;
    
    this.app.on(EventTypes.SAVE_APP, () => LocalStorageController.saveData(), this);
    this.app.on(EventTypes.POSTINITIALIZE, this.unlockLocalStorageForWriting, this);
    
    LocalStorageController.loadData();
};

LocalStorageController.prototype.unlockLocalStorageForWriting = function(dt) {
    famobi.log("Unlocking localstorage for writing...");
    LocalStorageController._writingAllowed = true;
    if(LocalStorageController._hasPendingWriteRequests) {
        LocalStorageController.saveData();
    }
};

LocalStorageController.prototype.update = function(dt) {
    
};

LocalStorageController.prepareDefaultSaveData = function() {    
    const defaultSaveData = { };
    defaultSaveData[Constants.Storage.CURRENT_LEVEL] = 0;
    defaultSaveData[Constants.Storage.MAX_UNLOCKED_LEVEL] = 0;
    defaultSaveData[Constants.Storage.COINS] = 0;
    defaultSaveData[Constants.Storage.MUSIC_VOLUME] = 0.5;
    defaultSaveData[Constants.Storage.SFX_VOLUME] = 0.5;
    defaultSaveData[Constants.Storage.UNLOCKED_SKINS] = [];
    defaultSaveData[Constants.Storage.SELECTED_CHARACTER_SKIN] = null;
    defaultSaveData[Constants.Storage.SELECTED_BRICK_SKIN] = null;
    defaultSaveData[Constants.Storage.SELECTED_COLOR_SKIN] = null;
    defaultSaveData[Constants.Storage.LEVEL_TIMES] = [];
  
    return defaultSaveData;
};

LocalStorageController.getActualSaveData = function() {    
    const currentSaveData = { };
    currentSaveData[Constants.Storage.CURRENT_LEVEL] = LevelController.getInstance().getCurrentLevelIndex();
    currentSaveData[Constants.Storage.MAX_UNLOCKED_LEVEL] = LevelController.getInstance().getMaxUnlockedLevelIndex();
    currentSaveData[Constants.Storage.COINS] = CoinsStorage.getInstance().getTotalCoins();
    currentSaveData[Constants.Storage.MUSIC_VOLUME] = SoundController.musicStateLoaded ? SoundController.musicVolume : 0.5;
    currentSaveData[Constants.Storage.SFX_VOLUME] = SoundController.sfxStateLoaded ? SoundController.sfxVolume : 0.5;
    currentSaveData[Constants.Storage.UNLOCKED_SKINS] = SkinsManager.getInstance().getUnlockedSkins();
    currentSaveData[Constants.Storage.SELECTED_CHARACTER_SKIN] = SkinsManager.getInstance().getSelectedCharacterSkin();
    currentSaveData[Constants.Storage.SELECTED_BRICK_SKIN] = SkinsManager.getInstance().getSelectedBrickSkin();
    currentSaveData[Constants.Storage.SELECTED_COLOR_SKIN] = SkinsManager.getInstance().getSelectedColorSkin();
    currentSaveData[Constants.Storage.LEVEL_TIMES] = LevelStatsManager.getInstance().getLevelTimesArray();
    
    return currentSaveData;
};

LocalStorageController.getSlotKey = function() {
    return Constants.GAME_NAME + Constants.GAME_VERSION;
};

LocalStorageController.saveData = function(saveDataObject = null, immediately = true) { 
    if(!LocalStorageController._writingAllowed) {
        famobi.log("localStorage: saving not allowed until app is fully initialized");
        return;
    }
    if(isForcedMode()) {
        famobi.log("localStorage: savedata disabled in forced mode");
        return;
    }
    if(immediately) {
        LocalStorageController.lastSaveData = saveDataObject || LocalStorageController.getActualSaveData();
        LocalStorageController.currentLocalStorage.setItem(LocalStorageController.getSlotKey(), JSON.stringify(LocalStorageController.lastSaveData));    
    } else {
        setTimeout(() => {
            LocalStorageController.lastSaveData = saveDataObject || LocalStorageController.getActualSaveData();
            LocalStorageController.currentLocalStorage.setItem(LocalStorageController.getSlotKey(), JSON.stringify(LocalStorageController.lastSaveData));
        }, 50);
    }
    
    //console.log('Saving data to localstorage...', LocalStorageController.lastSaveData);
};

LocalStorageController.loadData = function() {
    var data = LocalStorageController.currentLocalStorage.getItem(LocalStorageController.getSlotKey());
    var dataLoaded = false;
       
    if(data) {
        try {
            data = JSON.parse(data);
            dataLoaded = true;
        } catch (e) {
            data = LocalStorageController.prepareDefaultSaveData();
            LocalStorageController.saveData(data);
        }
    } else {
        data = LocalStorageController.prepareDefaultSaveData();
        LocalStorageController.saveData(data);
    }
    
    LocalStorageController.lastSaveData = data;    
};

LocalStorageController.getSavedValue = function(key) {
    if(LocalStorageController.lastSaveData) {
        return LocalStorageController.lastSaveData[key];
    } else {
        console.warn(`getSavedValue: No saved value with key '${key}' found`);
    }    
};



// uiElementAnimator.js
var UiElementAnimator = pc.createScript('uiElementAnimator');

UiElementAnimator.EASINGS = [
        {"Linear": "Linear"},
        {"QuadraticIn": "QuadraticIn"},
        {"QuadraticOut": "QuadraticOut"},
        {"QuadraticInOut": "QuadraticInOut"},
        {"CubicIn": "CubicIn"},
        {"CubicOut": "CubicOut"},
        {"CubicInOut": "CubicInOut"},
        {"QuarticIn": "QuarticIn"},
        {"QuarticOut": "QuarticOut"},
        {"QuarticInOut": "QuarticInOut"},
        {"QuinticIn": "QuinticIn"},
        {"QuinticOut": "QuinticOut"},
        {"QuinticInOut": "QuinticInOut"},
        {"SineIn": "SineIn"},
        {"SineOut": "SineOut"},
        {"SineInOut": "SineInOut"},
        {"ExponentialIn": "ExponentialIn"},
        {"ExponentialOut": "ExponentialOut"},
        {"ExponentialInOut": "ExponentialInOut"},
        {"CircularIn": "CircularIn"},
        {"CircularOut": "CircularOut"},
        {"CircularInOut": "CircularInOut"},
        {"BackIn": "BackIn"},
        {"BackOut": "BackOut"},
        {"BackInOut": "BackInOut"},
        {"BounceIn": "BounceIn"},
        {"BounceOut": "BounceOut"},
        {"BounceInOut": "BounceInOut"},
        {"ElasticIn": "ElasticIn"},
        {"ElasticOut": "ElasticOut"},
        {"ElasticInOut": "ElasticInOut"}
    ];


UiElementAnimator.attributes.add('appearManually', {
    type: 'boolean',
    default: false
});

UiElementAnimator.attributes.add('stopAllTweensOnStart', {
    type: 'boolean',
    default: true
});

UiElementAnimator.attributes.add('disabledUntilTweenStarts', {
    type: 'boolean',
    default: false
});

UiElementAnimator.attributes.add('disableInputWhileTweening', {
    type: 'boolean',
    default: true
});

UiElementAnimator.attributes.add('delayDependsOnChildIndex', {
    type: 'boolean',
    default: false
});

UiElementAnimator.attributes.add('appearOpacityTween', {
    type: 'json',
    schema: [{
        name: 'enabled',
        type: 'boolean',
        default: false
    }, {
        name: 'startOpacity',
        type: 'number',
        default: 0
    }, {
        name: 'targetOpacity',
        type: 'number',
        default: 1
    }, {
        name: 'duration',
        type: 'number',
        default: 0.25
    }, {
        name: 'delay',
        type: 'number',
        default: 0
    }, {
        name: 'easing',
        type: 'string',
        default: "Linear",
        enum: UiElementAnimator.EASINGS
    }]
});


UiElementAnimator.attributes.add('appearScaleTween', {
    type: 'json',
    schema: [{
        name: 'enabled',
        type: 'boolean',
        default: false
    }, {
        name: 'startScale',
        type: 'vec3',
        default: [0, 0, 0]
    }, {
        name: 'targetScale',
        type: 'vec3',
        default: [1, 1, 1]
    }, {
        name: 'duration',
        type: 'number',
        default: 0.25
    }, {
        name: 'delay',
        type: 'number',
        default: 0
    }, {
        name: 'easing',
        type: 'string',
        default: "Linear",
        enum: UiElementAnimator.EASINGS
    }]
});

UiElementAnimator.attributes.add('appearPositionTween', {
    type: 'json',
    schema: [{
        name: 'enabled',
        type: 'boolean',
        default: false
    }, {
        name: 'startDeltaPosition',
        type: 'vec3',
        default: [0, -50, 0]
    }, {
        name: 'toCustomPosition',
        type: 'boolean',
        default: false
    },{
        name: 'customTargetPosition',
        type: 'vec3',
        default: [0, 0, 0]
    }, {
        name: 'duration',
        type: 'number',
        default: 0.25
    }, {
        name: 'delay',
        type: 'number',
        default: 0
    }, {
        name: 'easing',
        type: 'string',
        default: "Linear",
        enum: UiElementAnimator.EASINGS
    }]
});




UiElementAnimator.attributes.add('disappearOpacityTween', {
    type: 'json',
    schema: [{
        name: 'enabled',
        type: 'boolean',
        default: false
    }, {
        name: 'targetOpacity',
        type: 'number',
        default: 0
    }, {
        name: 'duration',
        type: 'number',
        default: 0.25
    }, {
        name: 'delay',
        type: 'number',
        default: 0
    }, {
        name: 'easing',
        type: 'string',
        default: "Linear",
        enum: UiElementAnimator.EASINGS
    }]
});


UiElementAnimator.attributes.add('disappearScaleTween', {
    type: 'json',
    schema: [{
        name: 'enabled',
        type: 'boolean',
        default: false
    }, {
        name: 'targetScale',
        type: 'vec3',
        default: [0, 0, 0]
    }, {
        name: 'duration',
        type: 'number',
        default: 0.25
    }, {
        name: 'delay',
        type: 'number',
        default: 0
    }, {
        name: 'easing',
        type: 'string',
        default: "Linear",
        enum: UiElementAnimator.EASINGS
    }]
});

UiElementAnimator.attributes.add('disappearPositionTween', {
    type: 'json',
    schema: [{
        name: 'enabled',
        type: 'boolean',
        default: false
    }, {
        name: 'endDeltaPosition',
        type: 'vec3',
        default: [0, -50, 0]
    },{
        name: 'duration',
        type: 'number',
        default: 0.25
    }, {
        name: 'delay',
        type: 'number',
        default: 0
    }, {
        name: 'easing',
        type: 'string',
        default: "Linear",
        enum: UiElementAnimator.EASINGS
    }]
});


UiElementAnimator.prototype.initialize = function() {
    this.entity._isAnimatedUIElement = true; 
    this.initialScale = this.entity.getLocalScale().clone();
    this.initialPosition = this.entity.getLocalPosition().clone();
    this.initialOpacity = this.entity.element.opacity;
    this.initialInputStatus = this.entity.element.useInput;
    
    if(this.appearManually) {
        this.entity.on(EventTypes.UI_ELEMENT.APPEAR_MANUALLY, this.doAppearManually, this);
    } else {
        this.entity.on(EventTypes.UI_ELEMENT.APPEAR, this.doAppear, this);
    }
    this.entity.on(EventTypes.UI_ELEMENT.DISAPPEAR, this.doDisappear, this);
};


UiElementAnimator.prototype.doAppearManually = function() {
    this.doAppear();
    if(this.appearManually) {
         this.entity.children.forEach(child => child.fire(EventTypes.UI_ELEMENT.APPEAR_MANUALLY));
    }
};

UiElementAnimator.prototype.doAppear = function() {
    if(this.stopAllTweensOnStart) {
        this.app.stopAllTweens(this.entity);
    }
    
    /* reset state on start */
    this.entity.setLocalScale(this.initialScale);
    this.entity.setLocalPosition(this.initialPosition);
    this.entity.element.opacity = this.initialOpacity;
    this.entity.element.useInput = this.initialInputStatus;

    this._processAppearTweens().then(() => this.entity.fire(EventTypes.UI_ELEMENT.APPEARED));
};

UiElementAnimator.prototype.doDisappear = function() {
    if(this.stopAllTweensOnStart) {
        this.app.stopAllTweens(this.entity);
    }

    this._processDisappearTweens().then(() => this.entity.fire(EventTypes.UI_ELEMENT.DISAPPEARED));
};



UiElementAnimator.prototype._processAppearTweens = async function() {
    const tweenCompletePromises = [];
    
    /* disable input if needed */
    if(this.disableInputWhileTweening) {
        this.entity.element.useInput = false;
    }
    
    if(this.disabledUntilTweenStarts) {
        this.entity.enabled = false;
    }
    
    /* opacity tween */
    if(this.appearOpacityTween.enabled) {
        tweenCompletePromises.push(new Promise((resolve, reject) => {
            const tweenConfig = this.appearOpacityTween;
            this.entity.element.opacity = tweenConfig.startOpacity;
            this.entity.tween(this.entity.element)
                .to({opacity: tweenConfig.targetOpacity}, tweenConfig.duration, pc[tweenConfig.easing])
                .delay(tweenConfig.delay * (this.delayDependsOnChildIndex ? (this.entity.parent.children.indexOf(this.entity) + 1) : 1))
                .on('complete', () => resolve())
                .on('start', () => { if(this.disabledUntilTweenStarts) this.entity.enabled = true; })
                .start(); 
        }));
    }
    
    /* scale tween */
    if(this.appearScaleTween.enabled) {
        tweenCompletePromises.push(new Promise((resolve, reject) => {
            const tweenConfig = this.appearScaleTween;
            this.entity.setLocalScale(tweenConfig.startScale);
            this.entity.tween(this.entity.getLocalScale())
                .to(tweenConfig.targetScale, tweenConfig.duration, pc[tweenConfig.easing])
                .delay(tweenConfig.delay * (this.delayDependsOnChildIndex ? (this.entity.parent.children.indexOf(this.entity) + 1) : 1))
                .on('complete', () => resolve())
                .on('start', () => { if(this.disabledUntilTweenStarts) this.entity.enabled = true; })
                .start(); 
        }));
    }
    
    /* position tween */
    if(this.appearPositionTween.enabled) {
        tweenCompletePromises.push(new Promise((resolve, reject) => {
            const tweenConfig = this.appearPositionTween;
            this.entity.setLocalPosition(this.initialPosition.x + tweenConfig.startDeltaPosition.x, this.initialPosition.y + tweenConfig.startDeltaPosition.y, this.initialPosition.z + tweenConfig.startDeltaPosition.z);
            this.entity.tween(this.entity.getLocalPosition())
                .to(tweenConfig.toCustomPosition ? tweenConfig.customTargetPosition : this.initialPosition, tweenConfig.duration, pc[tweenConfig.easing])
                .delay(tweenConfig.delay * (this.delayDependsOnChildIndex ? (this.entity.parent.children.indexOf(this.entity) + 1) : 1))
                .on('complete', () => resolve())
                .on('start', () => { if(this.disabledUntilTweenStarts) this.entity.enabled = true; })
                .start(); 
        }));
    }
    
    
    await Promise.all(tweenCompletePromises);

    this.entity.element.useInput = this.initialInputStatus;
    
    return true;
};



UiElementAnimator.prototype._processDisappearTweens = async function() {
    const tweenCompletePromises = [];
    
    /* disable input if needed */
    if(this.disableInputWhileTweening) {
        this.entity.element.useInput = false;
    }
    
    /* opacity tween */
    if(this.disappearOpacityTween.enabled) {
        tweenCompletePromises.push(new Promise((resolve, reject) => {
            const tweenConfig = this.disappearOpacityTween;
            this.entity.tween(this.entity.element)
                .to({opacity: tweenConfig.targetOpacity}, tweenConfig.duration, pc[tweenConfig.easing])
                .delay(tweenConfig.delay * (this.delayDependsOnChildIndex ? (this.entity.parent.children.indexOf(this.entity) + 1) : 1))
                .on('complete', () => resolve())
                .start(); 
        }));
    }
    
    /* scale tween */
    if(this.disappearScaleTween.enabled) {
        tweenCompletePromises.push(new Promise((resolve, reject) => {
            const tweenConfig = this.disappearScaleTween;
            this.entity.tween(this.entity.getLocalScale())
                .to(tweenConfig.targetScale, tweenConfig.duration, pc[tweenConfig.easing])
                .delay(tweenConfig.delay * (this.delayDependsOnChildIndex ? (this.entity.parent.children.indexOf(this.entity) + 1) : 1))
                .on('complete', () => resolve())
                .start(); 
        }));
    }
    
    /* position tween */
    if(this.disappearPositionTween.enabled) {
        tweenCompletePromises.push(new Promise((resolve, reject) => {
            const tweenConfig = this.disappearPositionTween;
            this.entity.tween(this.entity.getLocalPosition())
                .to(this.initialPosition.clone().add(tweenConfig.endDeltaPosition), tweenConfig.duration, pc[tweenConfig.easing])
                .delay(tweenConfig.delay * (this.delayDependsOnChildIndex ? (this.entity.parent.children.indexOf(this.entity) + 1) : 1))
                .on('complete', () => resolve())
                .start(); 
        }));
    }
    
    
    await Promise.all(tweenCompletePromises);

    this.entity.element.useInput = this.initialInputStatus;
    
    return true;
};


UiElementAnimator.prototype.update = function(dt) {
    
};



// LevelsTest.js
var LevelsTest = pc.createScript('levelsTest');

// initialize code called once per entity
LevelsTest.prototype.initialize = function() {
    this.entity.destroy();  
};

// update code called every frame
LevelsTest.prototype.update = function(dt) {
    
};

// swap method called for script hot-reloading
// inherit your script state here
// LevelsTest.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// testStickmanContainer.js
var TestStickmanContainer = pc.createScript('testStickmanContainer');

TestStickmanContainer.attributes.add('disableMovement', {
    type: 'boolean',
    default: false
});

TestStickmanContainer.prototype.initialize = function() {
    
    this.testStickmans = this.entity.findByTag('stickman');

    
    if(this.disableMovement) {
        if(this.testStickmans) {
            this.testStickmans.forEach(stickman =>  stickman.script.destroy('stickmanMovement'));
        }
    } 
    
    this.app.on(EventTypes.LEVEL.SPAWN_STICKMANS, () => {
        /* test stickman should have its own color too */
        if(this.testStickmans) {
            this.testStickmans.forEach(stickman => stickman.color = SkinsManager.getInstance().getPlayerColor() /* this.app.colorsStorage.getRandomColor()*/ );
        }    
    });
};


TestStickmanContainer.prototype.update = function(dt) {
    
};

// TestStickmanContainer.prototype.swap = function(old) { };


// SkinsManager.js
var SkinsManager = pc.createScript('skinsManager');

SkinsManager.attributes.add('characterSkins', {
    type: 'json',
    schema: [{
        name: 'key',
        type: 'string',
        default: ''
    }, {
        name: 'unlockPrice',
        type: 'number',
        default: 100
    }, {
        name: 'modelPrefab',
        type: 'asset',
        assetType: 'template'
    }, {
        name: 'skinIcon',
        type: 'asset',
        assetType: 'texture'
    }],
    array: true
});


SkinsManager.attributes.add('brickSkins', {
    type: 'json',
    schema: [{
        name: 'key',
        type: 'string',
        default: ''
    }, {
        name: 'unlockPrice',
        type: 'number',
        default: 100
    }, {
        name: 'template',
        type: 'asset',
        assetType: 'template'
    }, {
        name: 'skinIcon',
        type: 'asset',
        assetType: 'texture'
    }],
    array: true
});

SkinsManager.attributes.add('colorSkins', {
    type: 'json',
    schema: [{
        name: 'key',
        type: 'string',
        default: ''
    }, {
        name: 'unlockPrice',
        type: 'number',
        default: 100
    }, {
        name: 'colorKey',
        type: 'string'
    }, {
        name: 'skinColor',
        type: 'rgba'
    }],
    array: true
});

SkinsManager.getInstance = function() {
    if(!SkinsManager._instance) console.error('SkinsManager is not initialized yet');
    return SkinsManager._instance;
};


SkinsManager.prototype.initialize = function() {
    SkinsManager._app = this.app;
    if(!SkinsManager._instance) {
        SkinsManager._instance = this;
    }
    
    this._unlockedSkinsKeys = new Set(LocalStorageController.getSavedValue(Constants.Storage.UNLOCKED_SKINS));
    this._unlockedSkinsKeys.add('characterBasic');
    this._unlockedSkinsKeys.add('brickBasic');
    this._unlockedSkinsKeys.add('colorBlue');
    
    this._characterSkinKeys = new Set(this.characterSkins.map(skin => skin.key));
    this._brickSkinKeys = new Set(this.brickSkins.map(skin => skin.key));
    this._colorSkinKeys = new Set(this.colorSkins.map(skin => skin.key));
    
    this.selectedCharacterSkinKey = LocalStorageController.getSavedValue(Constants.Storage.SELECTED_CHARACTER_SKIN) || 'characterBasic';
    this.selectedBrickSkinKey =  LocalStorageController.getSavedValue(Constants.Storage.SELECTED_BRICK_SKIN) || 'brickBasic';
    this.selectedColorSkinKey =  LocalStorageController.getSavedValue(Constants.Storage.SELECTED_COLD_SKIN)  || 'colorBlue';
    
    this.currentCharacterSkin = null;
    this.currentBrickSkin = null;
    this.currentColorSkin = null;
};


SkinsManager.prototype.update = function(dt) {
    
};


SkinsManager.prototype.getDataObject = function(dataKey) {
    if(dataKey === 'characterSkins') {
        return this.characterSkins;
    } 
    
    if(dataKey === 'brickSkins') {
        return this.brickSkins;
    } 
    
    if(dataKey === 'colorSkins') {
        return this.colorSkins;
    } 
    
    console.error('SkinsManager.getDataObject: wrong data key ' + dataKey);
};

SkinsManager.prototype.isUnlocked = function(key) {
    return this._unlockedSkinsKeys.has(key);
};

SkinsManager.prototype.isSelected = function(key) {
    return this.selectedCharacterSkinKey === key || this.selectedBrickSkinKey === key || this.selectedColorSkinKey === key;
};

SkinsManager.prototype.getSkinPrice = function(key) {
    if(this._characterSkinKeys.has(key)) return this.characterSkins.find(elem => elem.key === key).unlockPrice;
    if(this._brickSkinKeys.has(key)) return this.brickSkins.find(elem => elem.key === key).unlockPrice;
    if(this._colorSkinKeys.has(key)) return this.colorSkins.find(elem => elem.key === key).unlockPrice;
    return undefined;
};

SkinsManager.prototype.hasAvailableForPurchaseSkins = function() {
    const availableCoins = CoinsStorage.getInstance().getTotalCoins();
    return this.getLockedSkins().some(skinKey => this.getSkinPrice(skinKey) <= availableCoins);
};

SkinsManager.prototype.unlock = function(key) {
    this._unlockedSkinsKeys.add(key);
    this.app.fire(EventTypes.SAVE_APP);
};

SkinsManager.prototype.select = function(key) {
    if(this.isUnlocked(key)) {
        
        if(this._characterSkinKeys.has(key)) {
            if(this.selectedCharacterSkinKey !== key) {
                this.selectedCharacterSkinKey = key;
                this.app.fire(EventTypes.ON_PLAYER_SKIN_CHANGED);
            }
        }
        
        if(this._brickSkinKeys.has(key)) {
            if(this.selectedBrickSkinKey !== key) {
                this.selectedBrickSkinKey = key;    
                this.app.fire(EventTypes.ON_BRICK_SKIN_CHANGED);    
            }
        }
        
        if(this._colorSkinKeys.has(key)) {
            if(this.selectedColorSkinKey !== key) {
                this.selectedColorSkinKey = key;
                this.app.fire(EventTypes.ON_PLAYER_COLOR_CHANGED);
            }
        }
        
        this.app.fire(EventTypes.UPDATE_SKIN_PANELS);
        this.app.fire(EventTypes.SAVE_APP);
    }
};



SkinsManager.prototype.getUnlockedSkins = function() {
    return Array.from(this._unlockedSkinsKeys);
};

SkinsManager.prototype.getLockedSkins = function() {
    return [...Array.from(this._characterSkinKeys), ...Array.from(this._brickSkinKeys), ...Array.from(this._colorSkinKeys)].filter(skinKey => !this.isUnlocked(skinKey));
};


/* global accessors */


SkinsManager.prototype.getPlayerColor = function() {
     if(isForcedMode()) {
        const forcedModeProperties = getForcedModeProperties();
        if(forcedModeProperties.override.player_color) {
            return forcedModeProperties.override.player_color;
        } 
    }
    
    if(!this.currentColorSkin || this.currentColorSkin.key !== this.selectedColorSkinKey) {
        this.currentColorSkin = this.colorSkins.find(skin => skin.key === this.selectedColorSkinKey);
    }
    return this.currentColorSkin.colorKey;
};


SkinsManager.prototype.getSkinTemplate = function(skinKey) {
    if(this._characterSkinKeys.has(skinKey)) {
        const skinConfig = this.characterSkins.find(skin => skin.key === skinKey);
        if(skinConfig && skinConfig.modelPrefab) {
            return skinConfig.modelPrefab.resource;
        }
    }
    return null;
};


SkinsManager.prototype.getPlayerSkinTemplate = function() {
    if(!this.currentCharacterSkin || this.currentCharacterSkin.key !== this.selectedCharacterSkinKey) {
        this.currentCharacterSkin = this.characterSkins.find(skin => skin.key === this.selectedCharacterSkinKey);
    }
    
    if( this.currentCharacterSkin.modelPrefab) {
        return this.currentCharacterSkin.modelPrefab.resource;
    } else {
        return null;
    }
};

SkinsManager.prototype.getRandomSkinKey = function() {
    return Utils.getRandomItem(Array.from(this._characterSkinKeys).filter(skin => skin != this.selectedCharacterSkinKey));
};

SkinsManager.prototype.getSelectedCharacterSkin = function() {
    if(isForcedMode()) {
        const forcedModeProperties = getForcedModeProperties();
        if(forcedModeProperties.override.player_skin) {
             this.selectedCharacterSkinKey = forcedModeProperties.override.player_skin;
        } 
    }
        
    return this.selectedCharacterSkinKey;
};

SkinsManager.prototype.getSelectedBrickSkin = function() {
    return this.selectedBrickSkinKey;
};

SkinsManager.prototype.getSelectedColorSkin = function() {
    return this.selectedColorSkinKey;
};

SkinsManager.prototype.getBrickTemplate = function() {
    if(isForcedMode()) {
        const forcedModeProperties = getForcedModeProperties();
        if(forcedModeProperties.override.brick_skin) {
             this.selectedBrickSkinKey = forcedModeProperties.override.brick_skin;
        } 
    }

    if(!this.currentBrickSkin || this.currentBrickSkin.key !== this.selectedBrickSkinKey) {
        this.currentBrickSkin = this.brickSkins.find(skin => skin.key === this.selectedBrickSkinKey);
    }
    return this.currentBrickSkin.template;
};



// SkinsManager.prototype.swap = function(old) { };


// SkinsGroupPanel.js
var SkinsGroupPanel = pc.createScript('skinsGroupPanel');

SkinsGroupPanel.attributes.add('dataKey', {
    type: 'string'
});

SkinsGroupPanel.prototype.initialize = function() {
    this._skinsData = SkinsManager.getInstance().getDataObject(this.dataKey);
    this.skinPanels = this.entity.find('name', 'SkinInstance');   
};

SkinsGroupPanel.prototype.postInitialize = function() {
    this.initializeSkinsPanels();    
};



SkinsGroupPanel.prototype.update = function(dt) {
    
};


SkinsGroupPanel.prototype.initializeSkinsPanels = function() {
    
    this.skinPanels.forEach((skinPanel, index) => {
              
        const skinData = this._skinsData[index];
        skinPanel.initData(skinData);        
        
    });
};



// SkinsGroupPanel.prototype.swap = function(old) { };


// SkinPanel.js
var SkinPanel = pc.createScript('skinPanel');


SkinPanel.prototype.initialize = function() {
    this._initializeEntityProperties();
    this._addEventListeners();
};


SkinPanel.prototype._initializeEntityProperties = function() {
    const scriptContext = this;
    
    ["IconFrame", "IconPad", "IconSelected", "SkinPriceText", "SkinIcon",  "BuyButtonGroup", "SkinPricePad", "SkinPricePadUnavailable", "SkinPriceText"].forEach(itemKey => this.entity[itemKey] = this.entity.findByName(itemKey));
    
    this.entity.initData = function(data) {
        this.skinKey = data.key;
        
        this._unlockPrice = data.unlockPrice;
        this.SkinPriceText.element.text = data.unlockPrice;
        
        if(data.skinIcon) {
            this.SkinIcon.element.texture = data.skinIcon.resource;
        }
        
        if(data.skinColor) {
            this.SkinIcon.element.color = data.skinColor;
        }
        
        scriptContext.updateView();
        
    }.bind(this.entity);
};

SkinPanel.prototype._addEventListeners = function() {
    this.app.on(EventTypes.UPDATE_SKIN_PANELS, this.updateView, this);
    this.app.on(EventTypes.COINS_AMOUNT_CHANGED, this.updateView, this);
    BasicButton.assignAction(this.entity.BuyButtonGroup, this.onBuyClicked, this);
    BasicButton.assignAction(this.entity.IconFrame, this.onIconClicked, this);
};


SkinPanel.prototype.updateView = function() {
    const unlockedStatus = SkinsManager.getInstance().isUnlocked(this.entity.skinKey);
    const isCurrentlySelected = SkinsManager.getInstance().isSelected(this.entity.skinKey);
    
    if(unlockedStatus) {
        this.entity.IconPad.element.color = new pc.Color(113/255, 1, 119/255, 1);
        this.entity.BuyButtonGroup.enabled = false;
        if(isCurrentlySelected && !this.entity.IconSelected.enabled) {
            this.entity.IconSelected.setLocalScale(0, 0, 0);
            this.entity.IconSelected.tween(this.entity.IconSelected.getLocalScale())
                .to({x: 1, y: 1, z: 1}, 0.2, pc.BackOut)
                .start();
        }
        this.entity.IconSelected.enabled = isCurrentlySelected;
    } else {        
        this.entity.BuyButtonGroup.enabled = true;
        this.entity.IconSelected.enabled = false;
        this.entity.SkinPricePad.enabled = CoinsStorage.getInstance().hasEnoughCoins(this.entity._unlockPrice);
        this.entity.SkinPricePadUnavailable.enabled = !this.entity.SkinPricePad.enabled;
        this.entity.IconPad.element.color = CoinsStorage.getInstance().hasEnoughCoins(this.entity._unlockPrice) ? new pc.Color(1, 1, 0, 1) : new pc.Color(0.8, 0.8, 0.8, 0.5);
    }
};

SkinPanel.prototype.onBuyClicked = function(dt) {
    this.updateView();
    
    if(!SkinsManager.getInstance().isUnlocked(this.entity.skinKey)) {
        if(CoinsStorage.getInstance().hasEnoughCoins(this.entity._unlockPrice)) {
            CoinsStorage.getInstance().decreaseCoins(this.entity._unlockPrice);
            SkinsManager.getInstance().unlock(this.entity.skinKey);
            this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.BUY);
            if(SkinsManager.getInstance().isUnlocked(this.entity.skinKey)) {
                SkinsManager.getInstance().select(this.entity.skinKey);
            }
            this.app.fire(EventTypes.SAVE_APP);
        } else {
            this.entity.SkinPriceText.element.color = new pc.Color(0.85, 0, 0, 1);
            this.entity.SkinPriceText.setLocalScale(0.2, 0.2, 0.2);
            this.entity.SkinPriceText.tween(this.entity.SkinPriceText.getLocalScale())
                .to({x: 1, y: 1, z: 1}, 0.65, pc.ElasticOut)
                .start();
            this.entity.delayedCall(500, () =>  this.entity.SkinPriceText.element.color = new pc.Color(1, 1, 1, 1));
            this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.PURCHASE_FAILED);
        }
        
        this.updateView();
    }
};

SkinPanel.prototype.onIconClicked = function(dt) {
    if(SkinsManager.getInstance().isUnlocked(this.entity.skinKey)) {
        SkinsManager.getInstance().select(this.entity.skinKey);
        this.updateView();
    }
};

SkinPanel.prototype.update = function(dt) {
    
};



// AccessoryModelFinder.js
var AccessoryModelFinder = pc.createScript('accessoryModelFinder');

AccessoryModelFinder.prototype.initialize = function() {
    this.entity.overrideTargetModel = this.entity.parent.parent.findByName('StickmanModel');
};

AccessoryModelFinder.prototype.update = function(dt) {
    
};


// StickmanAccessory.js
var StickmanAccessory = pc.createScript('stickmanAccessory');


StickmanAccessory.prototype.initialize = function() {
    this._assignEntityMethods();
    
    this.createAccessory();
};


StickmanAccessory.prototype.update = function(dt) {
    
};

    

StickmanAccessory.prototype._assignEntityMethods = function() {
    const scriptContext = this;
    
    /* accessory */
    this.entity.setAccessory = function(accessoryKey) {
        this.destroyAccessories();
        const accessoryTemplate = SkinsManager.getInstance().getSkinTemplate(accessoryKey);
        if(accessoryTemplate) {
            this.currentAccessory = accessoryTemplate.instantiate();
            this.currentAccessory.reparent(this.accessoryContainer);
        }
    }.bind(this.entity);

    
    
    this.entity.destroyAccessories = function() {
        if(this.currentAccessory) {
            this.currentAccessory.destroy();
        }
        this.currentAccessory = null;
    }.bind(this.entity);

};

StickmanAccessory.prototype.createAccessory = function() {
    
    if(this.entity.isPlayer) {
        this.entity.setAccessory(SkinsManager.getInstance().getSelectedCharacterSkin());
    } else {
        if(Math.random() < 0.25) {
            this.entity.setAccessory(SkinsManager.getInstance().getRandomSkinKey());
        }
    }
    
};


// VolumeSlider.js
var VolumeSlider = pc.createScript('volumeSlider');

VolumeSlider.attributes.add('maxMaskWidth', {
    type: 'number',
    default: 400
});


VolumeSlider.prototype.initialize = function() {
    
    this._sliderHolding = false;
    
    this.uiContainer = this.app.root.findByName('UIContainer');
    
    this.entity.bar = this.entity.findByName('Bar');
    this.entity.barMask = this.entity.findByName('BarMask');
    this.entity.slider = this.slider = this.entity.findByName('Slider');
    

    if(pc.platform.mobile && this.app.touch) {
        this.slider.element.on('touchstart', this.onTap, this);
        this.app.touch.on(pc.EVENT_TOUCHEND, this.onRelease, this);
        this.app.touch.on(pc.EVENT_TOUCHCANCEL, this.onRelease, this);
        this.app.on(EventTypes.GameInput.TOUCH_MOVE, this.onTouchMove, this);
    } else {
        this.slider.element.on('mousedown', this.onPress, this);
        this.app.mouse.on(pc.EVENT_MOUSEUP, this.onRelease, this);
        this.app.on(EventTypes.GameInput.MOUSE_MOVE, this.onMouseMove, this);
    }
    
    this.entity.on('setSliderValue', percentage => this.updateView(percentage, true), this);
};


VolumeSlider.prototype.onPress = function(event) {
    this._sliderHolding = true;
    this.inputDownPosition = new pc.Vec2(event.x, event.y);
};

VolumeSlider.prototype.onTap = function(event) {
    if(event.changedTouches && event.changedTouches[0]) {
         this._sliderHolding = true;
         this.inputDownPosition = new pc.Vec2(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
    }
};


VolumeSlider.prototype.onRelease = function(event) {
    this._sliderHolding = false;
    this.inputDownPosition = null;
};


VolumeSlider.prototype.onMouseMove = function(x, y) {
    if(this._sliderHolding && this.inputDownPosition) {
        const sliderPosition = this.slider.getLocalPosition();
        const dx = x - this.inputDownPosition.x;
        sliderPosition.x = pc.math.clamp(sliderPosition.x + dx, 0, this.maxMaskWidth);
        this.slider.setLocalPosition(sliderPosition);
        this.inputDownPosition.set(x, y);
        this.updateView(sliderPosition.x / this.maxMaskWidth);
    }
};


VolumeSlider.prototype.onTouchMove = function(x, y) {
    if(this._sliderHolding && this.inputDownPosition) {
        const sliderPosition = this.slider.getLocalPosition();
        const dx = (x - this.inputDownPosition.x) / this.uiContainer.screen.scaleBlend;
        sliderPosition.x = pc.math.clamp(sliderPosition.x + dx, 0, this.maxMaskWidth);
        this.slider.setLocalPosition(sliderPosition);
        this.inputDownPosition.set(x, y);
        this.updateView(sliderPosition.x / this.maxMaskWidth);
    }
};

VolumeSlider.prototype.onTouchDrag = function(event) {
    this._sliderHolding = false;
};



VolumeSlider.prototype.updateView = function(percentage, skipEventFiring) {
    const sliderX = pc.math.clamp(percentage *  this.maxMaskWidth, 0, this.maxMaskWidth);
    this.slider.setLocalPosition(new pc.Vec3(sliderX, 0, 0));
    this.entity.barMask.element.width = sliderX;
    
    if(!skipEventFiring) {
        this.entity.fire('sliderValueChanged', percentage);
    }
};


VolumeSlider.prototype.update = function(dt) {
    if(this._sliderHolding) {
        
    }
};


VolumeSlider.prototype.swap = function(old) { 

};



// CoinsStorage.js
var CoinsStorage = pc.createScript('coinsStorage');

CoinsStorage.getInstance = function() {
    if(!CoinsStorage._instance) throw new Error('CoinsStorage is not initialized yet');
    return CoinsStorage._instance;
};

CoinsStorage.coinsSetViaForcedMode = false;
CoinsStorage.forcedModeCoins = 0;

CoinsStorage.prototype.initialize = function() {
    CoinsStorage._app = this.app;
    if(!CoinsStorage._instance) {
        CoinsStorage._instance = this;
    }
    
    /* initialize varibles */
    this._numCoins = CoinsStorage.coinsSetViaForcedMode ? CoinsStorage.forcedModeCoins : LocalStorageController.getSavedValue(Constants.Storage.COINS);
    this._sessionCoins = 0;
    
    this.app.on(EventTypes.GameSession.SESSION_STARTED, this.onSessionStarted, this);
    this.app.on(EventTypes.COINS_AMOUNT_CHANGED, () => this.app.fire(EventTypes.SAVE_APP), this);
};


CoinsStorage.prototype.onSessionStarted = function() {
    this._sessionCoins = 0;
};


CoinsStorage.prototype.getTotalCoins = function() {
    return this._numCoins;
};


CoinsStorage.prototype.getSessionCoins = function() {
    return this._sessionCoins;
};

CoinsStorage.prototype.setTotalCoins = function(value) {
    this._numCoins = Math.max(Math.floor(value), 0);
    this.app.fire(EventTypes.COINS_AMOUNT_CHANGED, this._numCoins);
};

CoinsStorage.prototype.addCoins = function(addValue, skipSessionCoins = false) {
    if(!skipSessionCoins) {
        this._sessionCoins += Math.floor(addValue);
    }
    this._numCoins += Math.floor(addValue);
    this.app.fire(EventTypes.COINS_AMOUNT_CHANGED, this._numCoins);
};

CoinsStorage.prototype.decreaseCoins = function(decreaseValue) {
    this._numCoins -= Math.min(this._numCoins, Math.floor(Math.abs(decreaseValue)));
    this.app.fire(EventTypes.COINS_AMOUNT_CHANGED, this._numCoins);
};

CoinsStorage.prototype.hasEnoughCoins = function(compareValue) {
    return this._numCoins >= compareValue;
};

CoinsStorage.prototype.update = function(dt) {
    
};


// GameplayUIWindow.js
class GameplayUiwindow extends BaseWindow {
    
    initialize() {
        super.initialize();
    }

    _initComponents() {
        /* buttons */
        this.settingsButton = this.entity.findByName('SettingsButton');
        
        /* event listeners */        
        BasicButton.assignAction(this.settingsButton, this.onSettingsClicked, this);
        
        
        this.settingsButton.enabled = !isExternalPause();
    }
   
    update(dt) {
        if(isExternalPause() && isExternalMute()) {
            this.settingsButton.enabled = false;
        }
    }
    
    /* event handlers */
    onSettingsClicked() {
        UIController.getInstance().showWindow(Constants.UI_LOCATIONS.SETTINGS, true);
    }
    
}

pc.registerScript(GameplayUiwindow, 'gameplayUiwindow');

// LevelStatsManager.js
var LevelStatsManager = pc.createScript('levelStatsManager');

LevelStatsManager.getInstance = function() {
    if(!LevelStatsManager._instance) console.error('LevelStatsManager is not initialized yet');
    return LevelStatsManager._instance;
};


LevelStatsManager.prototype.initialize = function() {
    LevelStatsManager._app = this.app;
    if(!LevelStatsManager._instance) {
        LevelStatsManager._instance = this;
    }  
    
    this.levelTimes = LocalStorageController.getSavedValue(Constants.Storage.LEVEL_TIMES) || [];
    
    this.reset();
    
    this.app.on(EventTypes.GameSession.SESSION_STARTED, this.onSessionStart, this);
    this.app.on(EventTypes.GameSession.SESSION_STOPED, this.onSessionStop, this);
    this.app.on(EventTypes.GameSession.VICTORY, this.onLevelPassed, this);
    this.app.on(EventTypes.GameSession.DEFEAT, this.onLevelFailed, this);
    this.app.on(EventTypes.Stats.PLAYER_PICKED_UP_A_BRICK, this._onPlayerPickedUpABrick, this);
};

LevelStatsManager.prototype.update = function(dt) {
    if(GameSession.getInstance().sessionActive) {
        this._levelTime += dt;
    }
};

LevelStatsManager.prototype.reset = function() {
    this._levelTime = 0;
    this._levelCoins = 0;
    this._bricksLeft = 0;
    this._bricksPickedUp = 0;
};


LevelStatsManager.prototype.getLevelTimesArray = function() {
    return this.levelTimes;
};


LevelStatsManager.prototype.getLevelTime = function() {
    return this._levelTime;
};

LevelStatsManager.prototype.getLevelBestTime = function(levelIndex) {
    return this.levelTimes[levelIndex];
};

LevelStatsManager.prototype.saveLevelTime = function(levelTime, levelIndex) {
    this.levelTimes[levelIndex] = levelTime;
    this.app.fire(EventTypes.SAVE_APP);
};


LevelStatsManager.prototype.getLevelTimeReward = function() {
    return Math.floor(pc.math.clamp((GameConfig.getAttribute('gameplay', 'maxExtraSeconds') - this._levelTime) * GameConfig.getAttribute('gameplay', 'rewardPerExtraSecond'), 0, 10000));
};


LevelStatsManager.prototype.getExtraBricks = function() {
    return this._bricksLeft;
};

LevelStatsManager.prototype.getExtraBricksReward = function() {
    return this._bricksLeft * GameConfig.getAttribute('gameplay', 'rewardPerBrick');
};


LevelStatsManager.prototype.getLevelReward = function() {
    return this.getLevelTimeReward() + this.getExtraBricksReward();
};


LevelStatsManager.prototype.getLevelScore = function() {
    return this.getLevelReward() + this.getLiveScore();;
};

LevelStatsManager.prototype.getLiveScore = function() {
    return this._bricksPickedUp * 10;
};


/* event hanlers */
LevelStatsManager.prototype.onSessionStart = function() {
    this.reset();
};

LevelStatsManager.prototype.onSessionStop = function() {
    this._bricksLeft = this.entity.playerStickman.backpack.capacity;
};

LevelStatsManager.prototype.onLevelPassed = function() {
    const prevBestTime = this.levelTimes[LevelController.getInstance().getCurrentLevelIndex()] ;
    if(!prevBestTime || prevBestTime > this._levelTime) {
        this.saveLevelTime(this._levelTime, LevelController.getInstance().getCurrentLevelIndex());
    }
};

LevelStatsManager.prototype._onPlayerPickedUpABrick = function() {
    this._bricksPickedUp += 1;
    Apicontroller.reportLiveScore(this.getLiveScore());
};

LevelStatsManager.prototype.onLevelFailed = function() {

};

// CoinsCounter.js
var CoinsCounter = pc.createScript('coinsCounter');


CoinsCounter.prototype.initialize = function() {
    this.coinsAmount = this.entity.findByName('CoinsAmount');
    
    this.app.on(EventTypes.COINS_AMOUNT_CHANGED, this.updateCoinsAmount, this);
    this.on('enable', this.updateCoinsAmount, this);
        
    this.updateCoinsAmount();
};

CoinsCounter.prototype.update = function(dt) {
    if(isUIHidden('coins')) {
        this.entity.enabled = false;
    }
};

CoinsCounter.prototype.updateCoinsAmount = function() {
    this.coinsAmount.element.text = `${CoinsStorage.getInstance().getTotalCoins()}`;
};



// LevelButton.js
var LevelButton = pc.createScript('levelButton');

LevelButton.prototype.initialize = function() {
    this._initializeEntityProperties();
    this._assignEntityMethods();
};

LevelButton.prototype.update = function(dt) {
    
};

LevelButton.prototype._initializeEntityProperties = function() {
    const scriptContext = this;
   
    ["LevelNumberText", "LevelBestTimeGroup", "LevelBestTimeText", "ButtonPlay", "LevelPreviewPic", "LevelPreviewPicFrame"].forEach(itemKey => this.entity[itemKey] = this.entity.findByName(itemKey));
    
    BasicButton.assignAction(this.entity.ButtonPlay, this.onPlayClicked, this);
};


LevelButton.prototype._assignEntityMethods = function() {
    const scriptContext = this;
    
    this.entity.init = function(levelIndex, levelsLocation) {
        this._levelIndex = levelIndex;        
        this._levelsLocation = levelsLocation;        
        this.updateView();
        
    }.bind(this.entity);
    
    this.entity.updateView = function() {

        /* set level number text */
        this.LevelNumberText.element.text = `${this._levelIndex + 1}`;
        
        /* set level time */
        const levelBestTime = LevelStatsManager.getInstance().getLevelBestTime(this._levelIndex);
        this.LevelBestTimeText.element.text = levelBestTime ? `${levelBestTime.toFixed(2)}s` : `---`;
        
        /* load level preview picture */
        const levelName = LevelController.getInstance().getLevelNameByIndex(this._levelIndex);
        const textureAsset = this._app.assets.find(levelName + ".jpg", "texture");
        if(textureAsset && textureAsset.resource) {
            this.LevelPreviewPic.element.texture = textureAsset.resource;
        } else {
            console.error('Can not find level preview image ' + levelName + ".jpg");
        }
        
        
        /* change view depending on level is unlocked or not */
        if(this._levelIndex <= LevelController.getInstance().getMaxUnlockedLevelIndex()) {
            this.LevelPreviewPic.element.color = new pc.Color().fromString('#FFFFFF');
            this.LevelPreviewPicFrame.element.color = new pc.Color().fromString('#FFFFFF');
            this.ButtonPlay.enabled = true;
        } else {
            this.LevelPreviewPic.element.color = new pc.Color().fromString('#666666');
            this.LevelPreviewPicFrame.element.color = new pc.Color().fromString('#888888');
            this.ButtonPlay.enabled = false;
        }
        
    }.bind(this.entity);
    
};

LevelButton.prototype.onPlayClicked = function() {
    LevelController.getInstance().setCurrentLevelIndex(this.entity._levelIndex);
    
    this.entity._levelsLocation.clearPendingWindow(); //clear pending start_window
    UIController.getInstance().hideAll();
    
    this.app.fire(EventTypes.SHOW_TRANSITION_SCREEN, 0.2, () => {
        this.app.fire(EventTypes.RELOAD_LEVEL);
    
        setTimeout(() =>  this.app.fire(EventTypes.HIDE_TRANSITION_SCREEN), 20);
    });
};




// Jumper.js
var Jumper = pc.createScript('jumper');

Jumper.attributes.add('targetEntity', {
    type: 'entity'
});

Jumper.prototype.initialize = function() {
    this._initializeEntityProperties();
    this._assignEntityMethods();
    this._addEventListeners();
    
    this.on('destroy', () => {
        this._removeEventListeners();
    });
};

Jumper.prototype.update = function(dt) {
    
};


Jumper.prototype._initializeEntityProperties = function() {
    if(!this.targetEntity) return console.error("Jumper target enttiy is not set on " + this.entity.path);

    /* mark as jumper */
    this.entity.isJumper = true;

    /* entity components */
    this.entity.targetEntity = this.targetEntity;
};

Jumper.prototype._assignEntityMethods = function() {
    
    /* neighbors */
    this.entity._neighbors = new Set();
    Object.defineProperty(this.entity, "neighbors", {
        get() {
            return this._neighbors;    
        }
    });
    
};

Jumper.prototype._addEventListeners = function() {
    this.entity.collision.on('triggerenter', (entity) => {
        if(entity.tags.has('stickman')) {
            entity.jumpTo(this.entity.targetEntity.getPosition().clone());
        } 
    });
    
    
    this.entity.collision.on('triggerleave', (entity) => {
        if(entity.tags.has('stickman')) {

        } 
    });
};

Jumper.prototype._removeEventListeners = function() {
    if(this.entity.collision) {
        this.entity.collision.off('triggerenter');
        this.entity.collision.off('triggerleave');    
    }
};


// PlatformColorChager.js
var PlatformColorChager = pc.createScript('platformColorChager');

PlatformColorChager.attributes.add('mainColorValueLimits', {
    type: 'vec2',
    default: [0.25, 0.75]
});

PlatformColorChager.attributes.add('colorDampingFactor', {
    type: 'number',
    default: 1,
    min: 0,
    max: 1
});

PlatformColorChager.attributes.add('rgbDamping', {
    type: 'vec3',
    default: [1, 1, 1]
});


PlatformColorChager.attributes.add('useEmissive', {
    type: 'boolean',
    default: true
});


PlatformColorChager.prototype.initialize = function() {
    this.app.on(EventTypes.LEVEL_LOADED, this.changePlatformColor, this);
    this.on('attr', this.changePlatformColor, this);
};

PlatformColorChager.prototype.update = function(dt) {
    
};

PlatformColorChager.prototype.changePlatformColor = function() {
    const platformMaterial = GameConfig.getAttribute('platform', 'material').resource;

    const randomValue = pc.math.random(this.mainColorValueLimits.x, this.mainColorValueLimits.y);
    const randomColor = Utils.shuffle([randomValue, 1 - randomValue, pc.math.random(0, Math.min(randomValue, 1 - randomValue)) / 2]).map((value, index) => value * this.colorDampingFactor * this.rgbDamping[['x', 'y', 'z'][index]]);
    if(this.useEmissive) {
        platformMaterial.setParameter('material_emissive', randomColor);
    } else {
        platformMaterial.setParameter('material_diffuse', randomColor);
    }
    
};



// AvailableSkinsNotification.js
var AvailableSkinsNotification = pc.createScript('availableSkinsNotification');

AvailableSkinsNotification.prototype.initialize = function() {
    this.app.on(EventTypes.COINS_AMOUNT_CHANGED, this.onCoinsAmountChanged, this);        
};

AvailableSkinsNotification.prototype.postInitialize = function() {
    this.onCoinsAmountChanged();
};

AvailableSkinsNotification.prototype.update = function(dt) {
    
};

AvailableSkinsNotification.prototype.onCoinsAmountChanged = function() {
    this.entity.enabled = SkinsManager.getInstance().hasAvailableForPurchaseSkins();
};



// Elevator.js
var Elevator = pc.createScript('elevator');

Elevator.attributes.add('platformTo', {
    type: 'entity'
});


Elevator.attributes.add('floorDownY', {
    type: 'number',
    default: -0.1
});


Elevator.attributes.add('floorTopY', {
    type: 'number',
    default: 12
});


Elevator.prototype.initialize = function() {
   ["ExitNode", "ElevatorSensor", "ElevatorEnterSensor", "DoorBlockerTop", "DoorBlockerBottom", "ElevatorFloor",  "ElevatorFloorTrigger", "DoorBottomLeft", "DoorBottomRight", "DoorTopLeft", "DoorTopRight", "ElevatorBottomGate", "ElevatorTopGate", 'FloorSideCollider'].forEach(itemKey => this.entity[itemKey] = this.entity.findByName(itemKey));
   
    this._hasPendingPassengers = false;
    this.elevatorProgress = 0; //0 - down. 1 - top
    this.bottomDoorProgress = 0; //0 - closed, 1 - opened
    this.topDoorProgress = 0; //0 - closed, 1 - opened
    this._stickmansInside = new Set();
     
    this._initializeEntityProperties();
    this._assignEntityMethods();
    this._addEventListeners();
    
    this.on('destroy', () => {
       this._removeEventListeners(); 
    });
};

Elevator.prototype.postInitialize = function() {
    this.platformTo.ingoingElevators.push(this.entity);
};

Elevator.prototype.update = function(dt) {
   
};

Elevator.prototype.postUpdate = function(dt) {
    if(GameSession.getInstance().sessionActive && this._stickmansInside.size > 0) {
        const yPosition = this.entity.ElevatorFloor.getPosition().y + this.entity.ElevatorFloor.collision.height / 2;
        this._stickmansInside.forEach(stickman => {
            const stickmanPosition = stickman.getPosition();
            stickman.rigidbody.teleport(new pc.Vec3(stickmanPosition.x, Math.max(stickmanPosition.y, yPosition + 0.8 + 0.001), stickmanPosition.z));
        });
    }
};




Elevator.prototype._updateBottomDoors = function() {
    this.entity.DoorBottomLeft.setLocalEulerAngles(0, -35 * (this.bottomDoorProgress), 0);
    this.entity.DoorBottomRight.setLocalEulerAngles(0, 35 * (this.bottomDoorProgress), 0);
};

Elevator.prototype._updateTopDoors = function() {
    this.entity.DoorTopLeft.setLocalEulerAngles(0, -35 * (this.topDoorProgress), 0);
    this.entity.DoorTopRight.setLocalEulerAngles(0, 35 * (this.topDoorProgress), 0);
};

Elevator.prototype._updateElevatorMovement = function() {
    const position = this.entity.getPosition();
    const targetY = this.floorDownY + this.elevatorProgress * (this.floorTopY - this.floorDownY);
    this.entity.ElevatorFloor.rigidbody.teleport(position.x, position.y + targetY, position.z);
};



Elevator.prototype.openBottomDoors = function() {
    return new Promise((resolve, reject) => {
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.DOOR_OPENING);
        this.entity.DoorBlockerBottom.enabled = false;
        this.entity.tween(this)
            .to( {bottomDoorProgress: 1}, 0.85, pc.SineInOut)
            .on('update', () => this._updateBottomDoors())
            .on('complete', () => resolve())
            .start();
    });
};


Elevator.prototype.closeBottomDoors = function() {
    return new Promise((resolve, reject) => {
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.DOOR_CLOSING);
        this.entity.DoorBlockerBottom.enabled = true;
        this.entity.tween(this)
            .to( {bottomDoorProgress: 0}, 0.85, pc.SineInOut)
            .on('update', () => this._updateBottomDoors())
            .on('complete', () => resolve())
            .start();
    });
};


Elevator.prototype.openTopDoors = function() {
    return new Promise((resolve, reject) => {
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.DOOR_OPENING);
        this.entity.DoorBlockerTop.enabled = false;
        this.entity.tween(this)
            .to( {topDoorProgress: 1}, 0.85, pc.SineInOut)
            .on('update', () => this._updateTopDoors())
            .on('complete', () => resolve())
            .start();
    });
};


Elevator.prototype.closeTopDoors = function() {
    return new Promise((resolve, reject) => {
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.DOOR_CLOSING);
        this.entity.DoorBlockerTop.enabled = true;
        this.entity.tween(this)
            .to( {topDoorProgress: 0}, 0.85, pc.SineInOut)
            .on('update', () => this._updateTopDoors())
            .on('complete', () => resolve())
            .start();
    });
};


Elevator.prototype.liftUp = function() {
    return new Promise((resolve, reject) => {
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.ELEVATOR_MOVEMENT);
        this.entity.tween(this)
            .to( {elevatorProgress: 1}, 5.0, pc.SineInOut)
            .on('update', () => this._updateElevatorMovement())
            .on('complete', () => resolve())
            .start();
    });
};


Elevator.prototype.liftDown = function() {
    return new Promise((resolve, reject) => {
        this.app.fire(EventTypes.PLAY_SFX, Constants.AUDIO.ELEVATOR_MOVEMENT);
        this.entity.tween(this)
            .to( {elevatorProgress: 0}, 5.0, pc.SineInOut)
            .on('update', () => this._updateElevatorMovement())
            .on('complete', () => resolve())
            .start();
    });
};

Elevator.prototype.wait = function(time) {
    return new Promise((resolve, reject) => {
        this.entity.delayedCall(time * 1000, () => resolve());
    });
};


Elevator.prototype.callElevator = function() {
    if(this.elevatorProgress === 0 && this._hasPendingPassengers) {
        this.openBottomDoors();
    }
};


Elevator.prototype.goUp = function() {
    this.closeBottomDoors()
        .then(() => this.wait(0.1))
        .then(() => this.liftUp())
        .then(() => this.openTopDoors());
};


Elevator.prototype.goDown = function() {
    this.closeTopDoors()
        .then(() => this.wait(0.1))
        .then(() => this.liftDown())
        .then(() => this.openBottomDoors());
};



Elevator.prototype._initializeEntityProperties = function() {
    if(!this.entity.ExitNode) return console.error('ExitNode is not found on elevator ' + this.entity.path);
    if(!this.platformTo) return console.error('Platform-To is not set on elevator ' + this.entity.path);

    /* mark as elevator */
    this.entity.isElevator = true;
};

Elevator.prototype._assignEntityMethods = function() {
    
    /* neighbors */
    this.entity._neighbors = new Set();
    Object.defineProperty(this.entity, "neighbors", {
        get() {
            return this._neighbors;    
        }
    });
    
    /* exitPosition */
    Object.defineProperty(this.entity, "exitPosition", {
        get() {
            return this.ExitNode.getPosition();    
        }
    });
    
    /* Exit Node neighbors */
    this.entity.ExitNode._neighbors = new Set();
    Object.defineProperty(this.entity.ExitNode, "neighbors", {
        get() {
            return this._neighbors;    
        }
    });
};


Elevator.prototype._addEventListeners = function() {    
    
    this.entity.ElevatorFloorTrigger.collision.on('triggerenter', (entity) => {
        if(entity.tags.has('stickman')) {
            this._stickmansInside.add(entity);
        } 
    });
    
    
    this.entity.ElevatorFloorTrigger.collision.on('triggerleave', (entity) => {
        if(entity.tags.has('stickman')) {
            if(entity.isPlayer) {
                Apicontroller.trackStats('elevator_used');
            }
            this._stickmansInside.delete(entity);
            if(this._stickmansInside.size === 0 && this.elevatorProgress === 1) {
                this.goDown();
            }
        } 
    });
    
    
    this.entity.ElevatorSensor.collision.on('triggerenter', (entity) => {
        if(entity.tags.has('stickman')) {
            this._hasPendingPassengers = true;
            this.callElevator();
        } 
    });
    
    
    this.entity.ElevatorSensor.collision.on('triggerleave', (entity) => {
        if(entity.tags.has('stickman')) {
            this._hasPendingPassengers = false;
        } 
    });
    
    this.entity.ElevatorEnterSensor.collision.on('triggerenter', (entity) => {
        if(entity.tags.has('stickman')) {
            if(this.elevatorProgress === 0) {
                this.goUp();
            }
        } 
    });
    
    
    this.entity.ElevatorEnterSensor.collision.on('triggerleave', (entity) => {
        if(entity.tags.has('stickman')) {
            
        } 
    });
};

Elevator.prototype._removeEventListeners = function() {
    this.entity.ElevatorSensor.collision.off('triggerenter');
    this.entity.ElevatorSensor.collision.off('triggerleave');
    this.entity.ElevatorFloorTrigger.collision.off('triggerenter');
    this.entity.ElevatorFloorTrigger.collision.off('triggerleave');
    this.entity.ElevatorEnterSensor.collision.off('triggerenter');
    this.entity.ElevatorEnterSensor.collision.off('triggerleave');
};


// ScrollingTexture.js
var ScrollingTexture = pc.createScript('scrollingTexture');

ScrollingTexture.attributes.add('speed', {
    type: 'vec2',
    default: [0, -0.1]
});


ScrollingTexture.prototype.initialize = function() {
    this.offset = new pc.Vec2(0, 0);
};

ScrollingTexture.prototype.update = function(dt) {
    this.offset.x += this.speed.x * dt;
    this.offset.y += this.speed.y * dt;
    this.entity.model.material.diffuseMapOffset.set(this.offset.x % 1, this.offset.y % 1);
    this.entity.model.material.update();
};




// EnvironmentController.js
var EnvironmentController = pc.createScript('environmentController');

EnvironmentController.prototype.initialize = function() {
    this.seaA = this.entity.findByName('SeaA');
    this.seaB = this.entity.findByName('SeaB');
    
    if(Math.random() > 0.5) {
        this.seaA.enabled = false;
        this.seaB.enabled = true;
    } else {
        this.seaA.enabled = true;
        this.seaB.enabled = false;
    }
};

EnvironmentController.prototype.update = function(dt) {
    
};


// ScreenBlocker.js
var ScreenBlocker = pc.createScript('screenBlocker');

ScreenBlocker.attributes.add('windowOpacity', {
    type: 'number',
    default: 1
});

ScreenBlocker.prototype.initialize = function() {      
    this.app.on(EventTypes.SHOW_TRANSITION_SCREEN, this.showTransitionScreen, this);
    this.app.on(EventTypes.HIDE_TRANSITION_SCREEN, this.hideTransitionScreen, this);

    this.initialColor = this.entity.element.color.clone();
    this.entity.enabled = false; 
};

ScreenBlocker.prototype.update = function(dt) {
    
};


ScreenBlocker.prototype.swap = function(old) {

};



ScreenBlocker.prototype.showTransitionScreen = function(duration = 0.3, onCompleteCallback = null, splashColor = null) {
    this.resetActiveTween();

    this.entity.enabled = true;        
    this.entity.element.color = new pc.Color().fromString(splashColor || this.initialColor.toString());

    if(duration > 0) {
        this.entity.element.opacity = 0.0;
        this.transitionTween = this.entity
            .tween(this.entity.element)
            .to({opacity: this.windowOpacity}, duration, pc.Linear)
            .on('complete', () => {
                if (onCompleteCallback) onCompleteCallback();          
            })
            .start();
    } else {
         this.entity.element.opacity = this.windowOpacity;
         if (onCompleteCallback) onCompleteCallback();        
    }


};

ScreenBlocker.prototype.hideTransitionScreen = function(duration = 0.25, onCompleteCallback = null) {
    this.resetActiveTween();

    this.entity.element.opacity = 1.0;
    this.transitionTween = this.entity
        .tween(this.entity.element)
        .to({opacity: 0}, duration, pc.SineOut)
        .on('complete', () => {
            this.entity.enabled = false;    
            if (onCompleteCallback) onCompleteCallback();    
        })
        .start();
};

ScreenBlocker.prototype.resetActiveTween = function() {
    if(this.transitionTween && this.transitionTween.playing) {
        this.transitionTween.stop();
    }
    this.transitionTween = null;
};

// BricksCache.js
var BricksCache = pc.createScript('bricksCache');

BricksCache.attributes.add('cacheEntityEnabled', {
    type: 'entity'
});


BricksCache.attributes.add('cacheEntityDisabled', {
    type: 'entity'
});


BricksCache.attributes.add('cacheSize', {
    type: 'number',
    default: 250,
    min: 0,
    max: 1000
});

BricksCache.attributes.add('maxBricksPerFrame', {
    type: 'number',
    default: 10,
    min: 0,
    max: 25
});



BricksCache.getInstance = function() {
    if(!BricksCache._instance) throw new Error('BricksCache is not initialized yet');
    return BricksCache._instance;
};


BricksCache.prototype.initialize = function() {
    BricksCache._app = this.app;
    if(!BricksCache._instance) {
        BricksCache._instance = this;
    }

    if(!this.cacheEntityEnabled) return console.error("Cache-enabled entity s not set for BricksCache");
    if(!this.cacheEntityDisabled) return console.error("Cache-disabled entity is not set for BricksCache");
    
    this.cachedBrickTemplateName = null;
    this.cache = [];
    
    this.app.on(EventTypes.APP_LOADED, this.onAppLoaded, this);
    this.app.on(EventTypes.ON_BRICK_SKIN_CHANGED, this.onBrickSkinChanged, this);    
};


BricksCache.prototype.onAppLoaded = function() {
    this.app.colorsStorage.prepareRoundColors(6, SkinsManager.getInstance().getPlayerColor()); //prepare some stub colors
    this.rebuildCache();
};

BricksCache.prototype.update = function(dt) {
    if(this._cacheIsRefilling) {
        this.refillCachePortionally();
    }
};


BricksCache.prototype.rebuildCache = function() {
    const selectedBrickTemplate = SkinsManager.getInstance().getBrickTemplate();
    const selectedBrickTemplateName = selectedBrickTemplate.name;
    if(selectedBrickTemplateName !== this.cachedBrickTemplateName) {
        this.clearCache();
        this.cachedBrickTemplateName = selectedBrickTemplateName;
        this._cacheIsRefilling = true;
        famobi.log('Filling up bricks cache...');
    } 
};
 


BricksCache.prototype.refillCachePortionally = function() {
    const now = performance.now();
    const selectedBrickTemplate = SkinsManager.getInstance().getBrickTemplate();
    const selectedBrickTemplateName = selectedBrickTemplate.name;
    if(selectedBrickTemplateName !== this.cachedBrickTemplateName) {
        this.clearCache();
        this.cachedBrickTemplateName = selectedBrickTemplateName;
    } 
    
    const maxBricksPerFrame = this.maxBricksPerFrame;
    let cachedBricks = 0;
    if(this.cache.length < this.cacheSize) {
        for(let i = this.cache.length; i < this.cacheSize; i++) {
            const brick = selectedBrickTemplate.resource.instantiate();
            brick.reparent(this.cacheEntityEnabled);
            brick.color = this.app.colorsStorage.getRandomColor();
            this._addToCache(brick);
            if(++cachedBricks >= maxBricksPerFrame) break;
        }
    }
        
    if(this.cache.length >= this.cacheSize) {
        this._cacheIsRefilling = false;
    }
};



BricksCache.prototype.onBrickSkinChanged = function() {
    this.rebuildCache();
};

BricksCache.prototype.clearCache = function() {
    const now = performance.now();
    for(let i = this.cache.length - 1; i > -1; i--) {
        if(this.cache[i]) {
            this.cache[i].destroy();
            this.cache.splice(i, 1);
        }
    } 
    // famobi.log('Bricks cache cleared, destoyed' + this.cache.length + ' bricks in ' + (performance.now() - now) + ' ms');
};



BricksCache.prototype._getFromCache = function(preferredColor) {
    if(this.cache.length > 0) {
        
        if(preferredColor) {
            for(let i = this.cache.length - 1; i > -1; i--) {
                const brick = this.cache[i];
                if(brick && brick.color === preferredColor) {   
                    this.cache.splice(i, 1);
                    if(brick.parent) {
                        brick.parent.removeChild(brick);
                    }
                    brick.fire(EventTypes.ENTITY_REUSED_FROM_CACHE); 
                    return brick;
                }
            }
        }
               
        //no wanted color
        const brick = this.cache.pop();
        if(brick.parent) {
            brick.parent.removeChild(brick);
        }
        brick.fire(EventTypes.ENTITY_REUSED_FROM_CACHE);
        return brick;
    } else {
        const brick = SkinsManager.getInstance().getBrickTemplate().resource.instantiate();
        return brick;
    }
};


BricksCache.prototype._addToCache = function(entity, skipCacheSizeCheck) {

    if(!skipCacheSizeCheck && this.cache.length > this.cacheSize) {
        famobi.log('Unable to cache ' + entity.name + ': max cache capacity exceeded');
        entity.destroy();
    } else {        
        entity.reparent(this.cacheEntityDisabled);
        entity.setLocalPosition(0, 0, 0);
        entity.setLocalEulerAngles(0, 0, 0);
        // entity.enabled = false;
        entity.fire(EventTypes.ENTITY_CACHED);
        this.cache.push(entity);
    }
};

/* public */

BricksCache.prototype.getBrick = function(preferredColor) {
    return this._getFromCache(preferredColor);
};

BricksCache.prototype.disposeBrick = function(entity) {
    if(!entity) return;
    if(entity.name !== this.cachedBrickTemplateName) {
        console.warn('Disposed brick belongs to a different type: ' + entity.name + ' instead of ' + this.cachedBrickTemplateName);
        if(entity.destroy) entity.destroy();
    } else {
        this._addToCache(entity);
    }
};

// Apicontroller.js
/* jshint esversion: 6 */
var Apicontroller = pc.createScript('apicontroller');

Apicontroller.FAMOBI_TRACKING_KEY = 'stairs-race';

Apicontroller.prototype.initialize = function() {
    famobi.log('Famobi API controller initialized');
    
    Apicontroller.initTracking();
};

Apicontroller.prototype.update = function(dt) {
    //make sure the game is paused 
    if(this.app.applicationPaused) {
        this.app.timeScale = 0;
    } else {
        // if(this.app.timeScale === 0) {
        //     this.app.timeScale = 1;
        // }
    }
};

/* famobi tracking */

Apicontroller.initTracking = function() {
    if(!window.famobi_tracking) {
        console.warn("Tracking API is not defined");
        return;
    }
    window.famobi_tracking.init(Apicontroller.FAMOBI_TRACKING_KEY, null, 100, true, true);
    famobi.log('Tracking API initialized with key ' + Apicontroller.FAMOBI_TRACKING_KEY);
};

Apicontroller.trackLevelStart = function(eventParams) {
    if(!window.famobi_tracking) {
        console.warn("TrackLevelStart: Tracking API is not defined");
        return;
    }
    window.famobi_tracking.trackEvent(window.famobi_tracking.EVENTS.LEVEL_START, eventParams);
};


Apicontroller.trackLevelEnd = function(eventParams) {
    if(!window.famobi_tracking) {
        console.warn("TrackLevelEnd: Tracking API is not defined");
        return;
    }
    window.famobi_tracking.trackEvent(window.famobi_tracking.EVENTS.LEVEL_END, eventParams);
};


Apicontroller.handleLevelEndEvent = function(result, score, resolveCallback) {
    if(!window.famobi) {
        resolveCallback();
    } else {
        game.timeScale = 0.0;    
        window.famobi_analytics.trackEvent("EVENT_CUSTOM", {eventName: "LEVELEND", result: result, score: score})
            .then(() => {
                game.timeScale = 1;
                resolveCallback();
            }).catch(() => {

            });
    }
};

/* Rewarded videos ads */


Apicontroller.hasRewardedVideo = function() {
    if (window.famobi && window.famobi.hasRewardedAd)
        return window.famobi.hasRewardedAd();
    else
        return false;
};

Apicontroller.showRewardedVideo = function(callback) {
    if(!window.famobi) {
        callback({rewardGranted: false});
        return;
    }
    const app = pc.Application.getApplication();
    app.fire(EventTypes.BLOCK_INPUT);

    if (window.famobi && Apicontroller.hasRewardedVideo()) {
        window.famobi.rewardedAd((result) => {
            app.fire(EventTypes.UNBLOCK_INPUT);
            if(callback) callback(result);
        });
    } else {
        callback({rewardGranted: false});
    }
};



/* Tracking stats */

Apicontroller.trackStats = function(...args) {
    if(window.famobi && window.famobi.hasFeature("trackstats") && window.famobi_analytics && window.famobi_analytics.trackStats) {
        window.famobi_analytics.trackStats(...args);
    }
};

/* Live score */
Apicontroller._sendLiveScore = function(liveScore) {
    this.lastLiveScoreReportTimestamp = new Date().getTime();
    window.famobi_analytics.trackEvent(
        "EVENT_LIVESCORE",
        {
            liveScore: liveScore
        }
    );
};

Apicontroller.reportLiveScore = function(score) {
    const currentTimestamp = new Date().getTime();
    this.lastLiveScoreReportTimestamp = this.lastLiveScoreReportTimestamp || 0;
    
    if(currentTimestamp - this.lastLiveScoreReportTimestamp >= 1000) {
        Apicontroller._sendLiveScore(score);
    } else {
        this._lastLiveScore = score;
        if(!this._nextReportTimeout) {
            this._nextReportTimeout = setTimeout(() => {
                if(this._lastLiveScore !== undefined) {
                    Apicontroller._sendLiveScore(this._lastLiveScore);
                    this._lastLiveScore = undefined;
                }
                this._nextReportTimeout = undefined;
            }, 1000 - (currentTimestamp - this.lastLiveScoreReportTimestamp)); 
        }
    }
   
};


// InputBlocker.js
var InputBlocker = pc.createScript('inputBlocker');

InputBlocker.prototype.initialize = function() {
    this.app.on(EventTypes.BLOCK_INPUT, this.blockInput, this);
    this.app.on(EventTypes.UNBLOCK_INPUT, this.unblockInput, this);
    
    this.entity.enabled = false;
};

InputBlocker.prototype.update = function(dt) {
    
};

InputBlocker.prototype.blockInput = function() {
    this.entity.enabled = true;
};

InputBlocker.prototype.unblockInput = function() {
    this.entity.enabled = false;
};


// copyrightText.js
var CopyrightText = pc.createScript('copyrightText');

CopyrightText.prototype.initialize = function() {
    this.entity.enabled = isCopyrightEnabled();
};

CopyrightText.prototype.update = function(dt) {
    
};


// brandingImage.js
/* jshint esversion: 6 */
var BrandingImage = pc.createScript('brandingImage');

BrandingImage.prototype.initialize = function() {
    
    this.entity.element.opacity = 0.0;
    
    if(window.famobi) {
        
        var self = this;
        this.app.loader.getHandler("texture").crossOrigin = "anonymous";

        var asset = new pc.Asset("brandingImage", "texture", {
            url: window.famobi.getBrandingButtonImage()
        });

        this.app.assets.add(asset);

        asset.on("error", function (message) {
            console.log("Branding image loading failed: ", message);
        });

        asset.on("load", function (asset) {
            var material = self.entity.element.texture = asset.resource;
            self.entity.element.opacity = 1;
            self.assignAction(self.entity, self.brandingPressed, self);
        });

        this.app.assets.load(asset);
    }
};


BrandingImage.prototype.assignAction = function(button, handler, handlerContext) {
     if(this.app.touch) {
         button.element.on('touchstart', handler, handlerContext);
     } if(this.app.mouse) {
          button.element.on('mousedown', handler, handlerContext);
     }
};

BrandingImage.prototype.update = function(dt) {
    
};

BrandingImage.prototype.brandingPressed = function() {
    if(window.famobi) {
        window.famobi.openBrandingLink();
    } else {
        console.warn('Famobi API is undefined');
    }
};


// AIManager.js
var AIManager = pc.createScript('aimanager');

AIManager.getInstance = function() {
    if(!AIManager._instance) console.error('AIManager is not initialized yet');
    return AIManager._instance;
};

AIManager.prototype.initialize = function() {
    AIManager._app = this.app;
    if(!AIManager._instance) {
        AIManager._instance = this;
    }
};

AIManager.prototype.update = function(dt) {
    
};

AIManager.prototype.getStrongestBot = function(platform) {
    let maxBricks = 0;
    let strongestBot = null;
    for(let bot of this.entity.stickmansAI) {
        if(bot && bot.alive && bot.floor === platform) {
            if(bot.backpack.capacity >= maxBricks) {
                strongestBot = bot;
            }
        }
    }
    return strongestBot;
};


AIManager.prototype.getStrongestBotsOfPlatform = function(platform) {
    return this.entity.stickmansAI.slice().sort((a, b) => b.backpack.capacity - a.backpack.capacity);
};


AIManager.prototype.isPlayerAhead = function(enemy) {
    return this.entity.playerStickman.alive && this.entity.playerStickman.lastPlatformID > enemy.lastPlatformID;
};


AIManager.prototype.isStrongestBotOnHisPlatform = function(bot) {
    const floor = bot.floor;
    if(!floor) return true;
    if(floor.isPlatform) {
        return this.getStrongestBot(floor) === bot;
    }
};

// Aimanager.prototype.swap = function(old) { };


