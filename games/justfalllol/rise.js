//init the interstitial ads

var interstitialInstance;
var interstitialLoaded = false;

window.playerConfigs = {
	'61712797ab1f86000190f30a': {
		plugins: {
			interstitial: {
				enabled: true,
				zIndex: 20000,
				closeButton: true
			}
		}
	}
}

window.srInterstitialCallback = {
	'61712797ab1f86000190f30a': function (error, player) {
		if (error) {
			console.log(error);
			interstitialLoaded = false;
		}
		
		interstitialInstance = player;
		
		player.on('interstitialready', function () {
			console.log('interstitialready');
			interstitialLoaded = true;
		});
		
		player.on('interstitialnofill', function () {
			console.log('interstitialnofill');
			interstitialLoaded = false;
		});
		
		player.on('interstitialexpired', function () {
			console.log('interstitialexpired');
			interstitialLoaded = false;
		});
		
		player.on('interstitialcomplete', function () {
			console.log('interstitialcomplete');
			interstitialLoaded = false;
			
			unityAdFinishedCallback(1);
		});
	}
}

function requestNewAd() {
	console.log("requested AD");
	
	if (interstitialInstance && interstitialLoaded) {
		interstitialInstance.displayInterstitial();
	}
	else {
		unityAdFinishedCallback(0);
	}
}

// This function calls Unity to tell the ad finished
function unityAdFinishedCallback(isSuccess) {
	try {
		if(gameInstance)
			gameInstance.SendMessage('AdsManager', 'OnWebCallback', isSuccess);
	}
	catch(error) {
		console.log(error);
	}
}