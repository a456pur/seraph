(() => {
	"use strict";
	function e() {
		var e;
		try {
			(e = performance
				.getEntriesByType("resource")
				.map(function (e) {
					return e.transferSize;
				})
				.reduce(function (e, t) {
					return e + t;
				})),
				(e += performance.getEntriesByType("navigation")[0].transferSize);
		} catch (e) {}
		return e;
	}
	var t = function (e) {
			var t = RegExp("[?&]".concat(e, "=([^&]*)")).exec(window.location.search);
			return t && decodeURIComponent(t[1].replace(/\+/g, " "));
		},
		n = "kids" === t("tag"),
		o = !!window.adBridge,
		r = "yes" === t("hoist") || "yes" === t("gdhoist"),
		i = new ((function () {
			function e() {
				var e = this;
				(this.queue = []),
					(this.init = function (t, n) {
						return (
							void 0 === t && (t = {}),
							void 0 === n && (n = {}),
							new Promise(function (o, r) {
								e.enqueue("init", [t, n], o, r);
							})
						);
					}),
					(this.rewardedBreak = function () {
						return new Promise(function (e) {
							e(!1);
						});
					}),
					(this.commercialBreak = function (t) {
						return new Promise(function (n, o) {
							e.enqueue("commercialBreak", [t], n, o);
						});
					}),
					(this.displayAd = function (e, t, n, o) {
						o && o(!0), n && n();
					}),
					(this.withArguments = function (t) {
						return function () {
							for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
							e.enqueue(t, n);
						};
					}),
					(this.handleAutoResolvePromise = function () {
						return new Promise(function (e) {
							e();
						});
					}),
					(this.throwNotLoaded = function () {
						console.debug("PokiSDK is not loaded yet. Not all methods are available.");
					}),
					(this.doNothing = function () {});
			}
			return (
				(e.prototype.enqueue = function (e, t, o, r) {
					var i = { fn: e, args: t || [], resolveFn: o, rejectFn: r };
					n ? o && o(!0) : this.queue.push(i);
				}),
				(e.prototype.dequeue = function () {
					for (
						var e = this,
							t = function () {
								var t,
									o,
									r = n.queue.shift(),
									i = r,
									a = i.fn,
									c = i.args;
								if ("function" == typeof window.PokiSDK[a])
									if ((null == r ? void 0 : r.resolveFn) || (null == r ? void 0 : r.rejectFn)) {
										var u = "init" === a;
										if (
											((t = window.PokiSDK)[a]
												.apply(t, c)
												.catch(function () {
													for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
													"function" == typeof r.rejectFn && r.rejectFn.apply(r, t),
														u &&
															setTimeout(function () {
																e.dequeue();
															}, 0);
												})
												.then(function () {
													for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
													"function" == typeof r.resolveFn && r.resolveFn.apply(r, t),
														u &&
															setTimeout(function () {
																e.dequeue();
															}, 0);
												}),
											u)
										)
											return "break";
									} else (o = window.PokiSDK)[a].apply(o, c);
								else console.error("Cannot execute ".concat(a));
							},
							n = this;
						this.queue.length > 0;

					) {
						if ("break" === t()) break;
					}
				}),
				e
			);
		})())();
	(window.PokiSDK = {
		init: i.init,
		initWithVideoHB: i.init,
		commercialBreak: i.commercialBreak,
		rewardedBreak: i.rewardedBreak,
		displayAd: i.displayAd,
		destroyAd: i.doNothing,
		getLeaderboard: i.handleAutoResolvePromise,
		shareableURL: function () {
			return new Promise(function (e, t) {
				return t();
			});
		},
		getURLParam: function (e) {
			return t("gd".concat(e)) || t(e) || "";
		},
		getLanguage: function () {
			return navigator.language.toLowerCase().split("-")[0];
		},
		isAdBlocked: function () {},
	}),
		["captureError", "customEvent", "gameInteractive", "gameLoadingFinished", "gameLoadingProgress", "gameLoadingStart", "gameplayStart", "gameplayStop", "happyTime", "logError", "muteAd", "roundEnd", "roundStart", "sendHighscore", "setDebug", "setDebugTouchOverlayController", "setLogging", "setPlayerAge", "setPlaytestCanvas", "enableEventTracking", "playtestSetCanvas", "playtestCaptureHtmlOnce"].forEach(function (e) {
			window.PokiSDK[e] = i.withArguments(e);
		}),
		o ||
			n ||
			(window.pokiCancelProgressInterval = setInterval(function () {
				window.parent.postMessage({ type: "pokiProgress", downloaded: e() }, "*");
			}, 1e3));
	var a = (function () {
			var e = window.pokiSDKVersion || t("ab") || "a7c3d8457e9d001550c049f821d50d7c386f7a05",
				i = "poki-sdk-core-".concat(e, ".js");
			n && (i = "poki-sdk-kids-".concat(e, ".js")), o && (i = "poki-sdk-playground-".concat(e, ".js")), r && (i = "poki-sdk-hoist-".concat(e, ".js"));
			new URL(document.currentScript.src);
			return "".concat(e, "/").concat(i);
		})(),
		c = document.createElement("script");
	c.setAttribute("src", a),
		c.setAttribute("type", "text/javascript"),
		c.setAttribute("crossOrigin", "anonymous"),
		(c.onload = function () {
			return i.dequeue();
		}),
		document.head.appendChild(c);
})();
