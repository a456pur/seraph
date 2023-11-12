var body = document.querySelector("body");
var canvas = document.querySelector("#unity-canvas");
var loadingBar = document.querySelector("#unity-loading-bar");
var progressBarFull = document.querySelector("#unity-progress-bar-full");

body.style.background = "url('TemplateData/bg.png') center / cover";

var scaleToFit;
try {
    scaleToFit = !!JSON.parse("");
} catch (e) {
    scaleToFit = true;
}

function progressHandler(progress) {
    progressBarFull.style.width = 100 * progress + "%";
}

function onResize() {
    var container = canvas.parentElement;
    var w;
    var h;

    if (scaleToFit) {
        w = window.innerWidth;
        h = window.innerHeight;

        var r = 1920 / 1080;

        if (w * r > window.innerHeight) {
            w = Math.min(w, Math.ceil(h / r));
        }
        h = Math.floor(w * r);
    } else {
        w = 1080;
        h = 1920;
    }

    container.style.width = canvas.style.width = w + "px";
    container.style.height = canvas.style.height = h + "px";
    container.style.top = Math.floor((window.innerHeight - h) / 2) + "px";
    container.style.left = Math.floor((window.innerWidth - w) / 2) + "px";
}
var buildUrl = "Build";
if (/iPhone|iPad/i.test(navigator.userAgent)) {
    var buildUrl = "Build_ios";
}
var loaderUrl = buildUrl + "/dist.loader.js";

var unityConfig = {
    dataUrl: buildUrl + "/dist.data.unityweb",
    frameworkUrl: buildUrl + "/dist.framework.js.unityweb",
    codeUrl: buildUrl + "/dist.wasm.unityweb",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "nate-games",
    productName: "Lazy Jump",
    productVersion: "1.0"
}

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    unityConfig.devicePixelRatio = 1;
}


window.unityInstance = createUnityInstance(canvas, unityConfig, progressHandler).then(function(instance) {
    window.unityInstance = instance;
    loadingBar.style.display = "none";
    body.style.background = "none";
    canvas = instance.Module.canvas;

    if (window.innerWidth > 991) {
        onResize();
    }
});

if (window.innerWidth > 991) {
    window.addEventListener('resize', onResize);
    onResize();
}

// 
var _container = document.querySelector('#gameContainer');
var _canvas = document.querySelector('#unity-canvas');

window.addEventListener('touchstart', function(evt) {
    _container.focus();
    window.focus();
    _canvas.focus();
}, false);

window.addEventListener('pointerdown', function(evt) {
    _container.focus();
    window.focus();
    _canvas.focus();
}, false);