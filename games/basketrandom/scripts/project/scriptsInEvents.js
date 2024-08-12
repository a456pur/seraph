


const scriptsInEvents = {

	async Introevent_Event2_Act1(runtime, localVars)
	{
		initSDK();
	},

	async Rhm_ads_Event1_Act1(runtime, localVars)
	{
		CallInterstitialAds();
	},

	async Rhm_ads_Event2_Act1(runtime, localVars)
	{
		CallRewardedAds();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

