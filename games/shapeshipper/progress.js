var __loadWithProgress = function __loadWithProgress(filesToLoad, progressListener, completionCallback) {
	var progressManager = {},
		interval;
	var __loadedFiles = {};

	var scriptsToLoad = Object.keys(filesToLoad).filter(function (url) {return url.indexOf('.js') > 0;});
	
	var sentProgress = false;
	
	var fileCount = Object.keys(filesToLoad).length;
	
	var __loadFile = function __loadFile(url) {
		var request = new XMLHttpRequest();
		request.open('GET', url);
		request.responseType = 'blob';
		
		request.onload = function () {
			if (request.status === 200) {
				__loadedFiles[url] = request.response;
				if(--fileCount == 0)
					__prepareScripts();
			} else {
				console.error("Couldn't load " + url);
			}
		};
		
		request.onerror = function () {
			console.error("Couldn't load " + url);
		};
		
		request.onprogress = function (event) {
			progressManager[url] = {
				loaded: event.loaded,
				total: filesToLoad[url].total
			};
		};
		
		request.send();
	};
	
	var urls = Object.keys(filesToLoad);
	interval = setInterval(function () {
		var currentProgress = __getProgress() || 0;
		progressListener(currentProgress);
		sentProgress = true;
		if (currentProgress === 1 && Object.keys(progressManager).length === urls.length) clearInterval(interval);
	}, 50);
	
	var __getProgress = function __getProgress() {
		var loaded = 0,
			total = 0;
		Object.keys(progressManager).forEach(function (url) {
			loaded += progressManager[url].loaded;
			total += progressManager[url].total;
		});
		return loaded / total;
	};

	var urlCreator = window.URL || window.webkitURL;

	var __prepareScripts = function __prepareScripts() {
		var scriptCount = scriptsToLoad.length;
		scriptsToLoad.forEach(function(url) {
			var script = document.createElement('script'),
			src = urlCreator.createObjectURL(__loadedFiles[url]);
			script.src = src;
			script.onload = function(){
				if(--scriptCount == 0)
				{
					if(!sentProgress)
						progressListener(1.0);
					completionCallback();
				}
			};
			document.body.appendChild(script);
		});
	};

	Object.keys(filesToLoad).forEach(function(url) {
		__loadFile(url);
	});
}