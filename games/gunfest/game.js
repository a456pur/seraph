function ToggleFullScreen() {
			var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
			(document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
			(document.msFullscreenElement && document.msFullscreenElement !== null);
			
			var element = document.body.getElementsByClassName("webgl-content")[0];
			
			if (!isInFullScreen) {
				if (element.webkitRequestFullscreen) {
					element.webkitRequestFullscreen();
				} else if (element.msRequestFullscreen) { 
					element.msRequestFullscreen();
				} else if (element.requestFullscreen) {
					element.requestFullscreen();
				} 
			}
			else {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.webkitExitFullscreen) { //Chrome, Safari and Opera
					document.webkitExitFullscreen();
				} else if (document.msExitFullscreen) { //IE/Edge
					document.msExitFullscreen();
				}
			}
		}
		
		function CheckCompatibility()
		{
			if (!hasWebGL()){
				document.getElementById("errorBrowserBlock").style.display = "inherit";
			}
			else if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
			{
				document.getElementById("warningMobileBlock").style.display = "inherit";
			}
			else if (!isFirefox&&!isSafari&&!isChrome) {
				document.getElementById("warningBrowserBlock").style.display = "inherit";
			}
		}
		
		function hasWebGL() {
			var supported;
			try {
				var canvas = document.createElement('canvas');
				supported = !! window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
			} catch(e) { supported = false; }

			try {
				// let is by no means required, but will help us rule out some old browsers/devices with potentially buggy implementations: http://caniuse.com/#feat=let
				eval('let foo = 123;');
			} catch (e) { supported = false; }
			canvas = undefined;
			return supported;
		}

		var isFirefox = typeof InstallTrigger !== 'undefined';
		var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
		
		var isChromium = window.chrome;
		var winNav = window.navigator;
		var vendorName = winNav.vendor;
		var isOpera = typeof window.opr !== "undefined";
		var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
		var isIOSChrome = winNav.userAgent.match("CriOS");
		var isChrome =  isIOSChrome || (isChromium !== null && typeof isChromium !== "undefined" && vendorName === "Google Inc." && isOpera === false && isIEedge === false);
		
		var buildUrl = "Build";
		var loaderUrl = buildUrl + "/Gun_Fest.loader.js";
		var config = {
        dataUrl: buildUrl + "/Gun_Fest.data",
        frameworkUrl: buildUrl + "/Gun_Fest.framework.js",
        codeUrl: buildUrl + "/Gun_Fest.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "Gamebol",
        productName: "Gun Fest",
        productVersion: "1.0",
      };

		var container = document.querySelector("#gameContainer");
		var canvas = document.querySelector("#gameCanvas");
		var loadingBar = document.querySelector("#loadingBlock");
		var progressBarFull = document.querySelector("#fullBar");
		var progressBarEmpty = document.querySelector("#emptyBar");

		if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
			container.className = "unity-mobile";
			config.devicePixelRatio = 1;
		}
		CheckCompatibility();

		var script = document.createElement("script");
		script.src = loaderUrl;
		script.onload = () => {
			createUnityInstance(canvas, config, (progress) => {
			progressBarFull.style.width = 100 * progress + "%";	 	
			progressBarEmpty.style.width = (100 * (1 - progress)) + "%";
		}).then((unityInstance) => {
			loadingBar.style.display = "none";
		}).catch((message) => {
			alert(message);
		});
		};
		document.body.appendChild(script);