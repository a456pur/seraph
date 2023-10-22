(() => {
	var e = function(e) {
			var n = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
			return n && decodeURIComponent(n[1].replace(/\+/g, " "))
		},
		n = "kids" === e("tag"),
		t = new(function() {
			function e() {
				var e = this;
				this.queue = [], this.init = function(n) {
					return void 0 === n && (n = {}), new Promise((function(t, o) {
						e.enqueue("init", n, t, o)
					}))
				}, this.rewardedBreak = function() {
					return new Promise((function(e) {
						e(!1)
					}))
				}, this.noArguments = function(n) {
					return function() {
						e.enqueue(n)
					}
				}, this.oneArgument = function(n) {
					return function(t) {
						e.enqueue(n, t)
					}
				}, this.handleAutoResolvePromise = function() {
					return new Promise((function(e) {
						e()
					}))
				}, this.throwNotLoaded = function() {
					console.debug("PokiSDK is not loaded yet. Not all methods are available.")
				}
			}
			return e.prototype.enqueue = function(e, t, o, i) {
				var r = {
					fn: e,
					options: t,
					resolveFn: o,
					rejectFn: i
				};
				n ? i && i() : this.queue.push(r)
			}, e.prototype.dequeue = function() {
				for (var e = function() {
						var e = n.queue.shift(),
							t = e,
							o = t.fn,
							i = t.options;
						"function" == typeof window.PokiSDK[o] ? (null == e ? void 0 : e.resolveFn) || (null == e ? void 0 : e.rejectFn) ? window.PokiSDK[o](i).then((function() {
							for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
							"function" == typeof e.resolveFn && e.resolveFn.apply(e, n)
						})).catch((function() {
							for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
							"function" == typeof e.rejectFn && e.rejectFn.apply(e, n)
						})) : void 0 !== (null == e ? void 0 : e.fn) && window.PokiSDK[o](i) : console.error("Cannot execute " + e.fn)
					}, n = this; this.queue.length > 0;) e()
			}, e
		}());
	window.PokiSDK = {
		init: t.init,
		initWithVideoHB: t.init,
		customEvent: t.throwNotLoaded,
		commercialBreak: t.handleAutoResolvePromise,
		rewardedBreak: t.rewardedBreak,
		displayAd: t.throwNotLoaded,
		destroyAd: t.throwNotLoaded,
		getLeaderboard: t.handleAutoResolvePromise,
		getSharableURL: function() {
			return new Promise((function(e, n) {
				return n()
			}))
		},
		getURLParam: function(n) {
			return e("gd" + n) || e(n) || ""
		}
	}, ["disableProgrammatic", "gameLoadingStart", "gameLoadingFinished", "gameInteractive", "roundStart", "roundEnd", "muteAd"].forEach((function(e) {
		window.PokiSDK[e] = t.noArguments(e)
	})), ["setDebug", "gameplayStart", "gameplayStop", "gameLoadingProgress", "happyTime", "setPlayerAge", "togglePlayerAdvertisingConsent", "logError", "sendHighscore", "setDebugTouchOverlayController"].forEach((function(e) {
		window.PokiSDK[e] = t.oneArgument(e)
	}));
	var o, i = ((o = window.pokiSDKVersion) || (o = e("ab") || "v2.263.0"), "//tbg95.github.io/poki-sdk-" + (n ? "kids" : "core") + "-" + o + ".js"),
		r = document.createElement("script");
	r.setAttribute("src", i), r.setAttribute("type", "text/javascript"), r.setAttribute("crossOrigin", "anonymous"), r.onload = function() {
		return t.dequeue()
	}, document.head.appendChild(r)
})();