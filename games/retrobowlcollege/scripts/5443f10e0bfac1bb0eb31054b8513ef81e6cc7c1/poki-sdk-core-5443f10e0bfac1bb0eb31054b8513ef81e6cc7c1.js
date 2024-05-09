(() => {
  var e,
    t,
    n,
    i,
    o = {
      583: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        const i = { ready: "pokiAppReady", adblocked: "pokiAppAdblocked", startLoading: "pokiAppStartLoading", ads: { completed: "pokiAdsCompleted", error: "pokiAdsError", impression: "pokiAdsImpression", durationChange: "pokiAdsDurationChange", limit: "pokiAdsLimit", ready: "pokiAdsReady", requested: "pokiAdsRequested", prebidRequested: "pokiAdsPrebidRequested", skipped: "pokiAdsSkipped", started: "pokiAdsStarted", stopped: "pokiAdsStopped", busy: "pokiAdsBusy", inFlight: "pokiAdsInflight", position: { preroll: "PP", midroll: "PM", rewarded: "PR", display: "DP" }, video: { clicked: "pokiVideoAdsClicked", firstQuartile: "pokiVideoAdsFirstQuartile", midPoint: "pokiVideoAdsMidPoint", thirdQuartile: "pokiVideoAdsThirdQuartile", error: "pokiVideoAdsError", loaderError: "pokiVideoAdsLoaderError", paused: "pokiVideoAdsPauseTriggered", resumed: "pokiVideoAdsResumedTriggered", progress: "pokiVideoAdsProgress", buffering: "pokiVideoAdsBuffering", startHouseAdFlow: "pokiVideoAdsStartHouseAdFlow" }, display: { error: "pokiDisplayAdsError" } }, info: { messages: { timeLimit: "The ad-request was not processed, because of a time constraint", prerollLimit: "The ad-request was cancelled, because we're not allowed to show a preroll (PokiSDK.commercialBreak before PokiSDK.gameplayStart)", disabled: "The ad-request was cancelled, because we've disabled this format for this specific configuration" } }, playtest: { startVideo: "pokiPlaytestStartVideo", stopVideo: "pokiPlaytestStopVideo" }, message: { event: "pokiMessageEvent", sdkDetails: "pokiMessageSdkDetails", setPokiURLParams: "pokiMessageSetPokiURLParams", sendGameScreenshot: "pokiMessageSendScreenshot", sendGameRawScreenshot: "pokiMessageSendRawScreenshot", sendUploadScreenshot: "pokiMessageSendUploadScreenshot", sendCommand: "pokiMessageSendCommand", sendInspectorCookies: "pokiMessageSendInspectorCookies" }, tracking: { custom: "pokiTrackingCustom", debugTrueInProduction: "pokiMessageDebugTrueProduction", screen: { gameplayStart: "pokiTrackingScreenGameplayStart", gameplayStop: "pokiTrackingScreenGameplayStop", gameLoadingFinished: "pokiTrackingScreenGameLoadingFinished", commercialBreak: "pokiTrackingScreenCommercialBreak", rewardedBreak: "pokiTrackingScreenRewardedBreak", firstRound: "pokiTrackingScreenFirstRound", roundStart: "pokiTrackingScreenRoundStart", roundEnd: "pokiTrackingScreenRoundEnd", displayAd: "pokiTrackingScreenDisplayAdRequest", destroyAd: "pokiTrackingScreenDisplayAdDestroy", playerActive: "pokiTrackingScreenPlayerActive" }, playtest: { showModal: "pokiTrackingPlaytestShowModal", accepted: "pokiTrackingPlaytestAccepted", rejected: "pokiTrackingPlaytestRejected", noCanvas: "pokiTrackingPlaytestNoCanvas", starting: "pokiTrackingPlaytestStarting", connected: "pokiTrackingPlaytestConnected", closed: "pokiTrackingPlaytestClosed", error: "pokiTrackingPlaytestError" }, sdk: { status: { initialized: "pokiTrackingSdkStatusInitialized", failed: "pokiTrackingSdkStatusFailed" } }, ads: { status: { busy: "pokiTrackingAdsStatusBusy", completed: "pokiTrackingAdsStatusCompleted", error: "pokiTrackingAdsStatusError", impression: "pokiTrackingAdsStatusImpression", limit: "pokiTrackingAdsStatusLimit", ready: "pokiTrackingAdsStatusReady", requested: "pokiTrackingAdsStatusRequested", prebidRequested: "pokiTrackingAdsStatusPrebidRequested", skipped: "pokiTrackingAdsStatusSkipped", started: "pokiTrackingAdsStatusStarted", buffering: "pokiTrackingAdsStatusBuffering" }, video: { clicked: "pokiTrackingAdsVideoClicked", error: "pokiTrackingAdsVideoError", loaderError: "pokiTrackingAdsVideoLoaderError", progress: "pokiTrackingAdsVideoProgress", paused: "pokiTrackingAdsVideoPaused", resumed: "pokiTrackingAdsVideoResumed" }, display: { requested: "pokiTrackingScreenDisplayAdRequested", impression: "pokiTrackingScreenDisplayAdImpression" }, rewardedWeb: { request: "pokiTrackingRewardedWebRequest", ready: "pokiTrackingRewardedWebReady", impression: "pokiTrackingRewardedWebImpression", closedGranted: "pokiTrackingRewardedWebClosedGranted", closedDeclined: "pokiTrackingRewardedWebclosedDeclined", empty: "pokiTrackingRewardedWebEmpty" } } } };
      },
      398: (e, t, n) => {
        "use strict";
        n.d(t, { K: () => g, S8: () => v, ZP: () => y });
        var i = n(583),
          o = n(453),
          r = n(715),
          a = n(906);
        var s = n(707),
          d = n(298),
          c = n(687),
          l = n(888),
          u = n(272),
          p = n(128);
        var A = n(459),
          h = function () {
            return (
              (h =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              h.apply(this, arguments)
            );
          },
          f = function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
              function a(e) {
                try {
                  d(i.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                try {
                  d(i.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function d(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              d((i = i.apply(e, t || [])).next());
            });
          },
          m = function (e, t) {
            var n,
              i,
              o,
              r,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function s(s) {
              return function (d) {
                return (function (s) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; r && ((r = 0), s[0] && (a = 0)), a; )
                    try {
                      if (((n = 1), i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)) return o;
                      switch (((i = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                        case 0:
                        case 1:
                          o = s;
                          break;
                        case 4:
                          return a.label++, { value: s[1], done: !1 };
                        case 5:
                          a.label++, (i = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                            a.label = s[1];
                            break;
                          }
                          if (6 === s[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = s);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(s);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      s = t.call(e, a);
                    } catch (e) {
                      (s = [6, e]), (i = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, d]);
              };
            }
          },
          v = "once",
          g = "off";
        const y = (function () {
          function e(t) {
            var n = this;
            (this.gameStarted = !1),
              (this.duringGameplay = !1),
              (this.fpsStats = new u.V(0.01)),
              (this.lastInteractionTime = 0),
              (this.lastGamePlayStop = 0),
              (this.badEventsCounter = 0),
              (this.asyncScreenshotLoader = function () {
                window.addEventListener(
                  "message",
                  function (e) {
                    return f(n, void 0, void 0, function () {
                      var t;
                      return m(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return "pokiGenerateScreenshot" !== e.data.type ? [3, 1] : ((0, A.FR)(e.data), [3, 4]);
                          case 1:
                            return "pokiGenerateRawScreenshot" !== e.data.type ? [3, 2] : ((0, A.Ii)(), [3, 4]);
                          case 2:
                            return "pokiUploadScreenshot" !== e.data.type ? [3, 4] : [4, (0, A.lW)(e.data)];
                          case 3:
                            (t = n.sent()), r.Z.sendMessage(i.Z.message.sendUploadScreenshot, { data: { screenshot: t } }), (n.label = 4);
                          case 4:
                            return [2];
                        }
                      });
                    });
                  },
                  !1
                );
              }),
              (this.setupInspector = function () {
                var e = 0;
                window.addEventListener(
                  "message",
                  function (t) {
                    return f(n, void 0, void 0, function () {
                      return m(this, function (n) {
                        var o, a;
                        return (
                          "pokiInspectorRequestCookies" === t.data.type
                            ? (0, p.$)().then(function (e) {
                                r.Z.sendMessage(i.Z.message.sendInspectorCookies, { data: { cookies: e } });
                              })
                            : "pokiInspectorSetFPS" === t.data.type &&
                              (e = t.data.fps || 0) &&
                              ((o = performance.now()),
                              (a = function () {
                                if (e) {
                                  for (var t = o + 1e3 / e; !((o = performance.now()) >= t); );
                                  requestAnimationFrame(a);
                                }
                              }),
                              requestAnimationFrame(a)),
                          [2]
                        );
                      });
                    });
                  },
                  !1
                );
              }),
              (this.initWithVideoHB = function () {
                return n.init();
              }),
              (this.setDebug = function (e) {
                void 0 === e && (e = !0);
                var t = window.location.hostname;
                t.endsWith("poki-gdn.com") || 1 == 1 || "qa-files.poki.com" === t ? e && o.Z.track(i.Z.tracking.debugTrueInProduction) : ((d.Z.debug = e), (d.Z.log = null != e ? e : d.Z.log));
              }),
              (this.setLogging = function (e) {
                d.Z.log = e;
              }),
              (this.gameLoadingFinished = function () {
                var e, t, n, r, a;
                try {
                  (n = performance
                    .getEntriesByType("resource")
                    .map(function (e) {
                      return e.transferSize;
                    })
                    .reduce(function (e, t) {
                      return e + t;
                    })),
                    (n += performance.getEntriesByType("navigation")[0].transferSize);
                } catch (e) {}
                o.Z.track(i.Z.tracking.screen.gameLoadingFinished, { transferSize: n, trackers: ((r = window), (a = []), ("function" != typeof r.ga && "function" != typeof r.gtag) || a.push("ga"), r.mixpanel && "function" == typeof r.mixpanel.track && a.push("mixpanel"), "function" == typeof r.GameAnalytics && a.push("gameanalytics"), (r.kongregateAPI || r.kongregate) && a.push("kongregate"), r.FlurryAgent && a.push("flurry"), r.Countly && a.push("countly"), r.amplitude && a.push("amplitude"), a).join(","), error_session_id: s.ZB, now: Math.round(null === (t = null === (e = window.performance) || void 0 === e ? void 0 : e.now) || void 0 === t ? void 0 : t.call(e)) || void 0 });
              }),
              (this.gameplayStart = function (e) {
                var t;
                n.ignoreEvents()
                  ? d.Z.debug && console.error("gameplayStart ignored because of too many events")
                  : ((n.duringGameplay = !0),
                    n.gameStarted || ((n.gameStarted = !0), o.Z.track(i.Z.tracking.screen.firstRound), n.monetization.startStartAdsAfterTimer()),
                    performance.now() - n.lastInteractionTime < 5e3 && (t = n.lastInteractionEvent),
                    o.Z.track(i.Z.tracking.screen.gameplayStart, h(h({}, e), { fps: n.fpsStats.stats(), badEvents: n.badEventsCounter, interaction: t })),
                    clearTimeout(n.playerActiveTimeout),
                    (n.playerActiveTimeout = setTimeout(function () {
                      window.addEventListener("pointermove", n.playerIsActiveEvent), document.addEventListener("keydown", n.playerIsActiveEvent);
                    }, 6e5)),
                    n.lastGamePlayStop && (n.lastGamePlayStop > performance.now() - 50 && n.badEventsCounter++, (n.lastGamePlayStop = 0)));
              }),
              (this.gameplayStop = function (e) {
                n.ignoreEvents() ? d.Z.debug && console.error("gameplayStop ignored because of too many events") : ((n.duringGameplay = !1), o.Z.track(i.Z.tracking.screen.gameplayStop, h(h({}, e), { fps: n.fpsStats.stats() })), clearTimeout(n.playerActiveTimeout), window.removeEventListener("pointermove", n.playerIsActiveEvent), document.removeEventListener("keydown", n.playerIsActiveEvent), (n.lastGamePlayStop = performance.now()));
              }),
              (this.roundStart = function (e) {
                void 0 === e && (e = ""), n.ignoreEvents() ? d.Z.debug && console.error("roundStart ignored because of too many events") : ((e = String(e)), o.Z.track(i.Z.tracking.screen.roundStart, { identifier: e }));
              }),
              (this.roundEnd = function (e) {
                void 0 === e && (e = ""), n.ignoreEvents() ? d.Z.debug && console.error("roundEnd ignored because of too many events") : ((e = String(e)), o.Z.track(i.Z.tracking.screen.roundEnd, { identifier: e }));
              }),
              (this.customEvent = function (e, t, r) {
                void 0 === r && (r = {}), e && t ? ((e = String(e)), (t = String(t)), (r = h({}, r)), o.Z.track(i.Z.tracking.custom, { eventNoun: e, eventVerb: t, eventData: r })) : n.error("customEvent", "customEvent needs at least a noun and a verb");
              }),
              (this.commercialBreak = function (e) {
                return new Promise(function (t) {
                  if (n.ignoreEvents()) return d.Z.debug && console.error("commercialBreak ignored because of too many events"), void t();
                  var o = n.gameStarted ? i.Z.ads.position.midroll : i.Z.ads.position.preroll;
                  n.monetization.requestAd({ position: o, onFinish: t, onStart: e });
                });
              }),
              (this.rewardedBreak = function (e, t, o, r) {
                return new Promise(function (a) {
                  var s,
                    d = {};
                  "function" == typeof e ? ((s = e), void 0 !== t && (d.category = t), void 0 !== o && (d.details = o), void 0 !== r && (d.placement = r)) : (void 0 !== e && (d.category = e), void 0 !== t && (d.details = t), void 0 !== o && (d.placement = o)),
                    setTimeout(function () {
                      d.category && performance.now() - n.lastInteractionTime < 500 && (d.from = n.lastInteractionEvent);
                      var e = i.Z.ads.position.rewarded;
                      n.monetization.requestAd({
                        position: e,
                        onFinish: function (e) {
                          a(!!(null == e ? void 0 : e.rewardAllowed));
                        },
                        onStart: s,
                        rewardedKVs: d,
                      });
                    }, 0);
                });
              }),
              (this.displayAd = function (e, t, r, a) {
                var s = (0, c.Z)();
                o.Z.track(i.Z.tracking.screen.displayAd, { size: t, opportunityId: s, duringGameplay: n.duringGameplay });
                var d = {
                  container: e,
                  opportunityId: s,
                  size: t,
                  duringGameplay: function () {
                    return n.duringGameplay;
                  },
                  onCanDestroy: r,
                  onDisplayRendered: a,
                };
                n.monetization.displayAd(d);
              }),
              (this.isAdBlocked = function () {
                return !1;
              }),
              (this.muteAd = function () {
                n.monetization.muteAd();
              }),
              (this.logError = function (e) {
                n.captureError(e);
              }),
              (this.setPlaytestCanvas = function (e) {
                return n.playtestSetCanvas(e);
              }),
              (this.playtestSetCanvas = function (t) {
                e.playtestCanvas = t ? [].concat(t) : [];
              }),
              (this.playtestCaptureHtmlOnce = function () {
                e.playtestCaptureUI = v;
              }),
              (this.playtestCaptureHtmlOff = function () {
                e.playtestCaptureUI = g;
              }),
              (this.getIsoLanguage = function () {
                return (0, a.Z)("iso_lang");
              }),
              (this.shareableURL = function (e) {
                return (
                  void 0 === e && (e = {}),
                  new Promise(function (t, n) {
                    var o = new URLSearchParams(),
                      s = Object.keys(e);
                    if (l.Z.isPokiIframe) {
                      var d = (0, a.Z)("poki_url");
                      s.forEach(function (t) {
                        void 0 !== e[t] && null !== e[t] && o.set("gd".concat(t), e[t]);
                      }),
                        t("".concat(d, "?").concat(o.toString())),
                        r.Z.sendMessage(i.Z.message.setPokiURLParams, { params: e });
                    } else
                      window.self === window.top
                        ? (s.forEach(function (t) {
                            void 0 !== e[t] && null !== e[t] && o.set("".concat(t), e[t]);
                          }),
                          t("".concat(window.location.origin).concat(window.location.pathname, "?").concat(o.toString())))
                        : n(new Error("shareableURL only works on Poki or a top level frame"));
                  })
                );
              }),
              (this.getURLParam = function (e) {
                return (0, a.Z)("gd".concat(e)) || (0, a.Z)(e);
              }),
              (this.captureError = function (e) {
                (0, s.$r)(e);
              }),
              (this.getLanguage = function () {
                return navigator.language.toLowerCase().split("-")[0];
              }),
              (this.generateScreenshot = function () {
                return f(n, void 0, void 0, function () {
                  return m(this, function (e) {
                    return [2, (0, A.iz)()];
                  });
                });
              }),
              (this.enableEventTracking = function (e) {
                window.top === window && o.Z.setupObserverWithCMP(e || 0);
              }),
              (this.error = function (e, t) {
                console.error("PokiSDK.".concat(e, ": ").concat(t));
              }),
              (this.playerIsActiveEvent = function () {
                window.removeEventListener("pointermove", n.playerIsActiveEvent),
                  document.removeEventListener("keydown", n.playerIsActiveEvent),
                  o.Z.track(i.Z.tracking.screen.playerActive),
                  (n.playerActiveTimeout = setTimeout(function () {
                    window.addEventListener("pointermove", n.playerIsActiveEvent), document.addEventListener("keydown", n.playerIsActiveEvent);
                  }, 6e5));
              }),
              (this.interactionEvent = function (e) {
                "mousedown" === e.type ? (n.lastInteractionEvent = "mousedown") : "pointerdown" === e.type ? (n.lastInteractionEvent = "pointerdown") : "keydown" === e.type && (n.lastInteractionEvent = "keydown-".concat(e.code)), (n.lastInteractionTime = performance.now());
              }),
              (this.setDebugTouchOverlayController = function () {}),
              (this.gameInteractive = function () {}),
              (this.gameLoadingProgress = function () {}),
              (this.gameLoadingStart = function () {}),
              (this.getLeaderboard = function () {
                return Promise.resolve([]);
              }),
              (this.happyTime = function () {}),
              (this.sendHighscore = function () {}),
              (this.setPlayerAge = function () {}),
              (this.monetization = t),
              (this.SDK = this.monetization),
              setInterval(function () {
                n.badEventsCounter = Math.max(n.badEventsCounter - 1, 0);
              }, 1e3);
          }
          return (
            (e.prototype.init = function (e) {
              var t = this;
              return (
                void 0 === e && (e = {}),
                window.addEventListener("pointerdown", this.interactionEvent),
                document.addEventListener("keydown", this.interactionEvent),
                new Promise(function (n) {
                  t.monetization.init(
                    h(
                      {
                        onReady: function () {
                          (0, a.Z)("preroll") && t.monetization.forcePreroll(), n();
                        },
                      },
                      e
                    )
                  ),
                    t.asyncScreenshotLoader(),
                    ("inspector-uploads.poki-user-content.com" === window.location.hostname || document.referrer.startsWith("https://inspector.poki.dev/")) && t.setupInspector(),
                    r.Z.sendMessage(i.Z.message.sdkDetails, { version: "5443f10e0bfac1bb0eb31054b8513ef81e6cc7c1" });
                })
              );
            }),
            (e.prototype.ignoreEvents = function () {
              return this.badEventsCounter >= 10;
            }),
            (e.prototype.destroyAd = function (e) {
              this.monetization.destroyAd(e);
            }),
            (e.prototype.setVolume = function (e) {
              this.monetization.setVolume(e);
            }),
            (e.getGameCanvasses = function () {
              var t = e.playtestCanvas;
              if (null == t ? void 0 : t.length) return t;
              var n = 0,
                i = Array.from(document.getElementsByTagName("canvas")),
                o = [];
              return (
                i.forEach(function (e) {
                  if ("true" !== e.getAttribute("data-no-playtest")) {
                    var t = getComputedStyle(e),
                      i = t.width,
                      r = t.height,
                      a = parseInt(i, 10) * parseInt(r, 10);
                    a >= n &&
                      (function (e) {
                        if (!e) return !1;
                        for (var t = e, n = !0; t && t !== document.body; ) {
                          var i = window.getComputedStyle(t);
                          if ("none" === i.display) return !1;
                          if ("hidden" === i.visibility) return !1;
                          if (n && (0 === t.offsetWidth || 0 === t.offsetHeight)) return !1;
                          "absolute" === i.position && (n = !1), (t = t.parentElement);
                        }
                        var o = e.getBoundingClientRect(),
                          r = window.innerHeight || document.documentElement.clientHeight,
                          a = window.innerWidth || document.documentElement.clientWidth;
                        return !(o.right < 0 || o.bottom < 0 || o.left > a || o.top > r);
                      })(e) &&
                      (a > n && (o = []), o.push({ canvas: e, style: t, index: o.length }), (n = a));
                  }
                }),
                o.sort(function (e, t) {
                  var n = parseInt(e.style.zIndex, 10) || 0,
                    i = parseInt(t.style.zIndex, 10) || 0;
                  return n < i ? -1 : n > i ? 1 : e.index - t.index;
                }),
                o.map(function (e) {
                  return e.canvas;
                })
              );
            }),
            (e.playtestCaptureUI = ""),
            e
          );
        })();
      },
      715: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => a });
        var i = n(583),
          o = n(992),
          r = n(888);
        const a = (function () {
          function e() {}
          return (
            (e.sendMessage = function (e, t, n) {
              if ((void 0 === n && (n = window.parent), !(0, o.Z)(e, i.Z.message))) {
                var a = Object.keys(i.Z.message).map(function (e) {
                  return "poki.message.".concat(e);
                });
                throw new TypeError("Argument 'type' must be one of ".concat(a.join(", ")));
              }
              var s = t || {};
              r.Z.gameID && r.Z.versionID && (s.pokifordevs = { game_id: r.Z.gameID, game_version_id: r.Z.versionID }), null == n || n.postMessage({ type: e, content: s }, "*");
            }),
            e
          );
        })();
      },
      58: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => r });
        var i = n(298),
          o = function () {
            return (
              (o =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              o.apply(this, arguments)
            );
          };
        const r = (function () {
          function e() {}
          return (
            (e.clearEventListeners = function () {
              this.listeners = {};
            }),
            (e.removeEventListener = function (e, t) {
              if (Object.prototype.hasOwnProperty.call(this.listeners, e)) {
                var n = this.listeners[e].indexOf(t);
                -1 !== n && this.listeners[e].splice(n, 1);
              }
            }),
            (e.addEventListener = function (e, t, n) {
              var i = this;
              if ((void 0 === n && (n = !1), (n = !!n), Object.prototype.hasOwnProperty.call(this.listeners, e) || (this.listeners[e] = []), n)) {
                var o = function (n) {
                  i.removeEventListener.bind(i)(e, o), t(n);
                };
                this.listeners[e].push(o);
              } else this.listeners[e].push(t);
            }),
            (e.dispatchEvent = function (e, t) {
              var n, r;
              void 0 === t && (t = {}), i.Z.debug && "test" !== (null === (r = null === (n = null === window || void 0 === window ? void 0 : window.process) || void 0 === n ? void 0 : n.env) || void 0 === r ? void 0 : r.NODE_ENV) && console.info(e, t);
              for (var a = Object.keys(this.listeners), s = 0; s < a.length; s++) {
                var d = a[s];
                if (e === d) for (var c = this.listeners[d], l = 0; l < c.length; l++) c[l](o(o({}, this.dataAnnotations), t));
              }
            }),
            (e.setVideoDataAnnotations = function (e) {
              this.dataAnnotations = o(o({}, this.dataAnnotations), e);
            }),
            (e.getVideoDataAnnotations = function () {
              return this.dataAnnotations;
            }),
            (e.clearVideoDataAnnotations = function () {
              this.dataAnnotations = {};
            }),
            (e.listeners = {}),
            (e.dataAnnotations = {}),
            e
          );
        })();
      },
      128: (e, t, n) => {
        "use strict";
        n.d(t, { $: () => d, Z: () => c });
        var i = n(888),
          o = function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
              function a(e) {
                try {
                  d(i.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                try {
                  d(i.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function d(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              d((i = i.apply(e, t || [])).next());
            });
          },
          r = function (e, t) {
            var n,
              i,
              o,
              r,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function s(s) {
              return function (d) {
                return (function (s) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; r && ((r = 0), s[0] && (a = 0)), a; )
                    try {
                      if (((n = 1), i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)) return o;
                      switch (((i = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                        case 0:
                        case 1:
                          o = s;
                          break;
                        case 4:
                          return a.label++, { value: s[1], done: !1 };
                        case 5:
                          a.label++, (i = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                            a.label = s[1];
                            break;
                          }
                          if (6 === s[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = s);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(s);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      s = t.call(e, a);
                    } catch (e) {
                      (s = [6, e]), (i = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, d]);
              };
            }
          },
          a = function (e, t, n) {
            if (n || 2 === arguments.length) for (var i, o = 0, r = t.length; o < r; o++) (!i && o in t) || (i || (i = Array.prototype.slice.call(t, 0, o)), (i[o] = t[o]));
            return e.concat(i || Array.prototype.slice.call(t));
          },
          s = Math.random().toString(36).substr(2, 9);
        function d() {
          return o(this, void 0, void 0, function () {
            var e, t, n;
            return r(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, window.cookieStore.getAll()];
                case 1:
                  return (e = i.sent()), window.indexedDB.databases ? [4, window.indexedDB.databases()] : [3, 3];
                case 2:
                  return (n = i.sent()), [3, 4];
                case 3:
                  (n = []), (i.label = 4);
                case 4:
                  return (
                    (t = n),
                    [
                      2,
                      a(
                        a(
                          a(
                            [],
                            e.map(function (e) {
                              return { name: e.name, expire_seconds: Math.round((e.expires - Date.now()) / 1e3), type: "cookie", domain: e.domain };
                            }),
                            !0
                          ),
                          Object.keys(window.localStorage).map(function (e) {
                            return { name: e, expire_seconds: 15552e3, type: "localStorage" };
                          }),
                          !0
                        ),
                        t.map(function (e) {
                          return { name: e.name, expire_seconds: 0, type: "idb" };
                        }),
                        !0
                      ),
                    ]
                  );
              }
            });
          });
        }
        const c = (function () {
          function e() {}
          return (
            (e.collectAndLog = function () {
              return o(this, void 0, void 0, function () {
                var e, t;
                return r(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return n.trys.push([0, 2, , 3]), (t = {}), [4, d()];
                    case 1:
                      return (t.cookies = n.sent()), (t.p4d_game_id = i.Z.gameID), (t.user_id = s), (e = t), window.fetch("https://t.poki.io/game-cookies", { method: "post", body: JSON.stringify(e) }).catch(), [3, 3];
                    case 2:
                      return n.sent(), [3, 3];
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.trackSavegames = function () {
              window.cookieStore && window.cookieStore.getAll && i.Z.gameID && (Math.random() > 0.01 || (navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") <= -1) || (e.collectAndLog(), setInterval(e.collectAndLog, 12e4)));
            }),
            e
          );
        })();
      },
      459: (e, t, n) => {
        "use strict";
        n.d(t, { dF: () => Ie, iz: () => ge, FR: () => ye, Ii: () => be, lW: () => we });
        var i = n(583),
          o = n(715),
          r = function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
              function a(e) {
                try {
                  d(i.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                try {
                  d(i.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function d(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              d((i = i.apply(e, t || [])).next());
            });
          },
          a = function (e, t) {
            var n,
              i,
              o,
              r,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function s(s) {
              return function (d) {
                return (function (s) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; r && ((r = 0), s[0] && (a = 0)), a; )
                    try {
                      if (((n = 1), i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)) return o;
                      switch (((i = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                        case 0:
                        case 1:
                          o = s;
                          break;
                        case 4:
                          return a.label++, { value: s[1], done: !1 };
                        case 5:
                          a.label++, (i = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                            a.label = s[1];
                            break;
                          }
                          if (6 === s[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = s);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(s);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      s = t.call(e, a);
                    } catch (e) {
                      (s = [6, e]), (i = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, d]);
              };
            }
          };
        var s,
          d =
            ((s = 0),
            function () {
              return (s += 1), "u".concat("0000".concat(((Math.random() * Math.pow(36, 4)) << 0).toString(36)).slice(-4)).concat(s);
            });
        function c(e) {
          for (var t = [], n = 0, i = e.length; n < i; n++) t.push(e[n]);
          return t;
        }
        function l(e, t) {
          var n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
          return n ? parseFloat(n.replace("px", "")) : 0;
        }
        function u(e, t) {
          void 0 === t && (t = {});
          var n,
            i,
            o,
            r = t.width || ((i = l((n = e), "border-left-width")), (o = l(n, "border-right-width")), n.clientWidth + i + o),
            a =
              t.height ||
              (function (e) {
                var t = l(e, "border-top-width"),
                  n = l(e, "border-bottom-width");
                return e.clientHeight + t + n;
              })(e);
          return { width: r, height: a };
        }
        var p = 16384;
        function A(e) {
          return new Promise(function (t, n) {
            var i = new Image();
            (i.decode = function () {
              return t(i);
            }),
              (i.onload = function () {
                return t(i);
              }),
              (i.onerror = n),
              (i.crossOrigin = "anonymous"),
              (i.decoding = "async"),
              (i.src = e);
          });
        }
        function h(e) {
          return r(this, void 0, void 0, function () {
            return a(this, function (t) {
              return [
                2,
                Promise.resolve()
                  .then(function () {
                    return new XMLSerializer().serializeToString(e);
                  })
                  .then(encodeURIComponent)
                  .then(function (e) {
                    return "data:image/svg+xml;charset=utf-8,".concat(e);
                  }),
              ];
            });
          });
        }
        function f(e, t, n) {
          return r(this, void 0, void 0, function () {
            var i, o, r;
            return a(this, function (a) {
              return (i = "http://www.w3.org/2000/svg"), (o = document.createElementNS(i, "svg")), (r = document.createElementNS(i, "foreignObject")), o.setAttribute("width", "".concat(t)), o.setAttribute("height", "".concat(n)), o.setAttribute("viewBox", "0 0 ".concat(t, " ").concat(n)), r.setAttribute("width", "100%"), r.setAttribute("height", "100%"), r.setAttribute("x", "0"), r.setAttribute("y", "0"), r.setAttribute("externalResourcesRequired", "true"), o.appendChild(r), r.appendChild(e), [2, h(o)];
            });
          });
        }
        var m = function (e, t) {
          if (e instanceof t) return !0;
          var n = Object.getPrototypeOf(e);
          return null !== n && (n.constructor.name === t.name || m(n, t));
        };
        function v(e, t, n) {
          var i = ".".concat(e, ":").concat(t),
            o = n.cssText
              ? (function (e) {
                  var t = e.getPropertyValue("content");
                  return "".concat(e.cssText, " content: '").concat(t.replace(/'|"/g, ""), "';");
                })(n)
              : (function (e) {
                  return c(e)
                    .map(function (t) {
                      var n = e.getPropertyValue(t),
                        i = e.getPropertyPriority(t);
                      return ""
                        .concat(t, ": ")
                        .concat(n)
                        .concat(i ? " !important" : "", ";");
                    })
                    .join(" ");
                })(n);
          return document.createTextNode("".concat(i, "{").concat(o, "}"));
        }
        function g(e, t, n) {
          var i = window.getComputedStyle(e, n),
            o = i.getPropertyValue("content");
          if ("" !== o && "none" !== o) {
            var r = d();
            try {
              t.className = "".concat(t.className, " ").concat(r);
            } catch (e) {
              return;
            }
            var a = document.createElement("style");
            a.appendChild(v(r, n, i)), t.appendChild(a);
          }
        }
        var y = "application/font-woff",
          b = "image/jpeg",
          w = { woff: y, woff2: y, ttf: "application/font-truetype", eot: "application/vnd.ms-fontobject", png: "image/png", jpg: b, jpeg: b, gif: "image/gif", tiff: "image/tiff", svg: "image/svg+xml", webp: "image/webp" };
        function k(e) {
          var t = (function (e) {
            var t = /\.([^./]*?)$/g.exec(e);
            return t ? t[1] : "";
          })(e).toLowerCase();
          return w[t] || "";
        }
        var Z = function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
              function a(e) {
                try {
                  d(i.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                try {
                  d(i.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function d(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              d((i = i.apply(e, t || [])).next());
            });
          },
          E = function (e, t) {
            var n,
              i,
              o,
              r,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function s(s) {
              return function (d) {
                return (function (s) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; r && ((r = 0), s[0] && (a = 0)), a; )
                    try {
                      if (((n = 1), i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)) return o;
                      switch (((i = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                        case 0:
                        case 1:
                          o = s;
                          break;
                        case 4:
                          return a.label++, { value: s[1], done: !1 };
                        case 5:
                          a.label++, (i = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                            a.label = s[1];
                            break;
                          }
                          if (6 === s[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = s);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(s);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      s = t.call(e, a);
                    } catch (e) {
                      (s = [6, e]), (i = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, d]);
              };
            }
          };
        function I(e) {
          return -1 !== e.search(/^(data:)/);
        }
        function C(e, t) {
          return "data:".concat(t, ";base64,").concat(e);
        }
        function x(e, t, n) {
          return Z(this, void 0, void 0, function () {
            var i, o;
            return E(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, fetch(e, t)];
                case 1:
                  if (404 === (i = r.sent()).status) throw new Error('Resource "'.concat(i.url, '" not found'));
                  return [4, i.blob()];
                case 2:
                  return (
                    (o = r.sent()),
                    [
                      2,
                      new Promise(function (e, t) {
                        var r = new FileReader();
                        (r.onerror = t),
                          (r.onloadend = function () {
                            try {
                              e(n({ res: i, result: r.result }));
                            } catch (e) {
                              t(e);
                            }
                          }),
                          r.readAsDataURL(o);
                      }),
                    ]
                  );
              }
            });
          });
        }
        var S = {};
        function T(e, t, n) {
          return Z(this, void 0, void 0, function () {
            var i, o, r, a, s;
            return E(this, function (d) {
              switch (d.label) {
                case 0:
                  if (
                    ((i = (function (e, t, n) {
                      var i = e.replace(/\?.*/, "");
                      return n && (i = e), /ttf|otf|eot|woff2?/i.test(i) && (i = i.replace(/.*\//, "")), t ? "[".concat(t, "]").concat(i) : i;
                    })(e, t, n.includeQueryParams)),
                    null != S[i])
                  )
                    return [2, S[i]];
                  n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime()), (d.label = 1);
                case 1:
                  return (
                    d.trys.push([1, 3, , 4]),
                    [
                      4,
                      x(e, n.fetchRequestInit, function (e) {
                        var n = e.res,
                          i = e.result;
                        return (
                          t || (t = n.headers.get("Content-Type") || ""),
                          (function (e) {
                            return e.split(/,/)[1];
                          })(i)
                        );
                      }),
                    ]
                  );
                case 2:
                  return (r = d.sent()), (o = C(r, t)), [3, 4];
                case 3:
                  return (a = d.sent()), (o = n.imagePlaceholder || ""), (s = "Failed to fetch resource: ".concat(e)), a && (s = "string" == typeof a ? a : a.message), s && console.warn(s), [3, 4];
                case 4:
                  return (S[i] = o), [2, o];
              }
            });
          });
        }
        var _ = function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
              function a(e) {
                try {
                  d(i.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                try {
                  d(i.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function d(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              d((i = i.apply(e, t || [])).next());
            });
          },
          P = function (e, t) {
            var n,
              i,
              o,
              r,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function s(s) {
              return function (d) {
                return (function (s) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; r && ((r = 0), s[0] && (a = 0)), a; )
                    try {
                      if (((n = 1), i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)) return o;
                      switch (((i = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                        case 0:
                        case 1:
                          o = s;
                          break;
                        case 4:
                          return a.label++, { value: s[1], done: !1 };
                        case 5:
                          a.label++, (i = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                            a.label = s[1];
                            break;
                          }
                          if (6 === s[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = s);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(s);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      s = t.call(e, a);
                    } catch (e) {
                      (s = [6, e]), (i = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, d]);
              };
            }
          };
        function D(e) {
          return _(this, void 0, void 0, function () {
            var t, n, i;
            return P(this, function (o) {
              switch (o.label) {
                case 0:
                  return "data:," === (t = e.toDataURL())
                    ? [2, e.cloneNode(!1)]
                    : e.getContext("2d")
                    ? [2, A(t)]
                    : (((n = document.createElement("canvas").getContext("2d", { alpha: !0 })).canvas.width = e.width),
                      (n.canvas.height = e.height),
                      (i = n.getImageData(0, 0, n.canvas.width, n.canvas.height)),
                      [
                        4,
                        new Promise(function (o) {
                          try {
                            requestAnimationFrame(function () {
                              var t = document.createElement("canvas").getContext("webgl"),
                                r = t.createTexture();
                              t.bindTexture(t.TEXTURE_2D, r), t.texImage2D(t.TEXTURE_2D, 0, t.RGB, t.RGB, t.UNSIGNED_BYTE, e);
                              var a = t.createFramebuffer();
                              t.bindFramebuffer(t.FRAMEBUFFER, a), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, r, 0), t.readPixels(0, 0, e.width, e.height, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(i.data.buffer)), n.putImageData(i, 0, 0), t.deleteTexture(r), t.deleteFramebuffer(a);
                              var s = t.getExtension("WEBGL_lose_context");
                              s && s.loseContext(), o(n.canvas.toDataURL());
                            });
                          } catch (e) {
                            o(t);
                          }
                        }),
                      ]);
                case 1:
                  return [2, A(o.sent())];
              }
            });
          });
        }
        function B(e, t) {
          return _(this, void 0, void 0, function () {
            var n, i, o, r;
            return P(this, function (a) {
              switch (a.label) {
                case 0:
                  return e.currentSrc ? ((n = document.createElement("canvas")), (i = n.getContext("2d")), (n.width = e.clientWidth), (n.height = e.clientHeight), null == i || i.drawImage(e, 0, 0, n.width, n.height), [2, A(n.toDataURL())]) : ((o = e.poster), (r = k(o)), [4, T(o, r, t)]);
                case 1:
                  return [2, A(a.sent())];
              }
            });
          });
        }
        function R(e) {
          return _(this, void 0, void 0, function () {
            var t;
            return P(this, function (n) {
              switch (n.label) {
                case 0:
                  return n.trys.push([0, 3, , 4]), (null === (t = null == e ? void 0 : e.contentDocument) || void 0 === t ? void 0 : t.body) ? [4, j(e.contentDocument.body, {}, !0)] : [3, 2];
                case 1:
                  return [2, n.sent()];
                case 2:
                  return [3, 4];
                case 3:
                  return n.sent(), [3, 4];
                case 4:
                  return [2, e.cloneNode(!1)];
              }
            });
          });
        }
        var M = function (e) {
          return null != e.tagName && "SLOT" === e.tagName.toUpperCase();
        };
        function z(e, t) {
          return (
            m(t, Element) &&
              ((function (e, t) {
                var n = t.style;
                if (n) {
                  var i = window.getComputedStyle(e);
                  i.cssText
                    ? ((n.cssText = i.cssText), (n.transformOrigin = i.transformOrigin))
                    : c(i).forEach(function (o) {
                        var r = i.getPropertyValue(o);
                        if ("font-size" === o && r.endsWith("px")) {
                          var a = Math.floor(parseFloat(r.substring(0, r.length - 2))) - 0.1;
                          r = "".concat(a, "px");
                        }
                        m(e, HTMLIFrameElement) && "display" === o && "inline" === r && (r = "block"), "d" === o && t.getAttribute("d") && (r = "path(".concat(t.getAttribute("d"), ")")), n.setProperty(o, r, i.getPropertyPriority(o));
                      });
                }
              })(e, t),
              (function (e, t) {
                g(e, t, ":before"), g(e, t, ":after");
              })(e, t),
              (function (e, t) {
                m(e, HTMLTextAreaElement) && (t.innerHTML = e.value), m(e, HTMLInputElement) && t.setAttribute("value", e.value);
              })(e, t),
              (function (e, t) {
                if (m(e, HTMLSelectElement)) {
                  var n = t,
                    i = Array.from(n.children).find(function (t) {
                      return e.value === t.getAttribute("value");
                    });
                  i && i.setAttribute("selected", "");
                }
              })(e, t)),
            t
          );
        }
        function j(e, t, n) {
          return _(this, void 0, void 0, function () {
            return P(this, function (i) {
              return n || !t.filter || t.filter(e)
                ? [
                    2,
                    Promise.resolve(e)
                      .then(function (e) {
                        return (function (e, t) {
                          return _(this, void 0, void 0, function () {
                            return P(this, function (n) {
                              return m(e, HTMLCanvasElement) ? [2, D(e)] : m(e, HTMLVideoElement) ? [2, B(e, t)] : m(e, HTMLIFrameElement) ? [2, R(e)] : [2, e.cloneNode(!1)];
                            });
                          });
                        })(e, t);
                      })
                      .then(function (n) {
                        return (function (e, t, n) {
                          return _(this, void 0, void 0, function () {
                            var i, o, r;
                            return P(this, function (a) {
                              switch (a.label) {
                                case 0:
                                  return (
                                    (r = []),
                                    0 === (r = M(e) && e.assignedNodes ? c(e.assignedNodes()) : m(e, HTMLIFrameElement) && (null === (i = e.contentDocument) || void 0 === i ? void 0 : i.body) ? c(e.contentDocument.body.childNodes) : c((null !== (o = e.shadowRoot) && void 0 !== o ? o : e).childNodes)).length || m(e, HTMLVideoElement)
                                      ? [2, t]
                                      : [
                                          4,
                                          r.reduce(function (e, i) {
                                            return e
                                              .then(function () {
                                                return j(i, n);
                                              })
                                              .then(function (e) {
                                                e && t.appendChild(e);
                                              });
                                          }, Promise.resolve()),
                                        ]
                                  );
                                case 1:
                                  return a.sent(), [2, t];
                              }
                            });
                          });
                        })(e, n, t);
                      })
                      .then(function (t) {
                        return z(e, t);
                      })
                      .then(function (e) {
                        return (function (e, t) {
                          return _(this, void 0, void 0, function () {
                            var n, i, o, r, a, s, d, c, l, u, p, A, h;
                            return P(this, function (f) {
                              switch (f.label) {
                                case 0:
                                  if (0 === (n = e.querySelectorAll ? e.querySelectorAll("use") : []).length) return [2, e];
                                  (i = {}), (h = 0), (f.label = 1);
                                case 1:
                                  return h < n.length ? ((o = n[h]), (r = o.getAttribute("xlink:href")) ? ((a = e.querySelector(r)), (s = document.querySelector(r)), a || !s || i[r] ? [3, 3] : ((d = i), (c = r), [4, j(s, t, !0)])) : [3, 3]) : [3, 4];
                                case 2:
                                  (d[c] = f.sent()), (f.label = 3);
                                case 3:
                                  return h++, [3, 1];
                                case 4:
                                  if ((l = Object.values(i)).length) {
                                    for (u = "http://www.w3.org/1999/xhtml", (p = document.createElementNS(u, "svg")).setAttribute("xmlns", u), p.style.position = "absolute", p.style.width = "0", p.style.height = "0", p.style.overflow = "hidden", p.style.display = "none", A = document.createElementNS(u, "defs"), p.appendChild(A), h = 0; h < l.length; h++) A.appendChild(l[h]);
                                    e.appendChild(p);
                                  }
                                  return [2, e];
                              }
                            });
                          });
                        })(e, t);
                      }),
                  ]
                : [2, null];
            });
          });
        }
        var O = function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
              function a(e) {
                try {
                  d(i.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                try {
                  d(i.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function d(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              d((i = i.apply(e, t || [])).next());
            });
          },
          L = function (e, t) {
            var n,
              i,
              o,
              r,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function s(s) {
              return function (d) {
                return (function (s) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; r && ((r = 0), s[0] && (a = 0)), a; )
                    try {
                      if (((n = 1), i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)) return o;
                      switch (((i = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                        case 0:
                        case 1:
                          o = s;
                          break;
                        case 4:
                          return a.label++, { value: s[1], done: !1 };
                        case 5:
                          a.label++, (i = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                            a.label = s[1];
                            break;
                          }
                          if (6 === s[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = s);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(s);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      s = t.call(e, a);
                    } catch (e) {
                      (s = [6, e]), (i = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, d]);
              };
            }
          },
          N = /url\((['"]?)([^'"]+?)\1\)/g,
          U = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
          G = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
        function q(e, t, n, i, o) {
          return O(this, void 0, void 0, function () {
            var r, a, s, d;
            return L(this, function (c) {
              switch (c.label) {
                case 0:
                  return (
                    c.trys.push([0, 5, , 6]),
                    (r = n
                      ? (function (e, t) {
                          if (e.match(/^[a-z]+:\/\//i)) return e;
                          if (e.match(/^\/\//)) return window.location.protocol + e;
                          if (e.match(/^[a-z]+:/i)) return e;
                          var n = document.implementation.createHTMLDocument(),
                            i = n.createElement("base"),
                            o = n.createElement("a");
                          return n.head.appendChild(i), n.body.appendChild(o), t && (i.href = t), (o.href = e), o.href;
                        })(t, n)
                      : t),
                    (a = k(t)),
                    (s = void 0),
                    o ? [4, o(r)] : [3, 2]
                  );
                case 1:
                  return (d = c.sent()), (s = C(d, a)), [3, 4];
                case 2:
                  return [4, T(r, a, i)];
                case 3:
                  (s = c.sent()), (c.label = 4);
                case 4:
                  return [2, e.replace(((l = t), (u = l.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")), new RegExp("(url\\(['\"]?)(".concat(u, ")(['\"]?\\))"), "g")), "$1".concat(s, "$3"))];
                case 5:
                  return c.sent(), [3, 6];
                case 6:
                  return [2, e];
              }
              var l, u;
            });
          });
        }
        function F(e) {
          return -1 !== e.search(N);
        }
        function V(e, t, n) {
          return O(this, void 0, void 0, function () {
            var i, o;
            return L(this, function (r) {
              return F(e)
                ? ((i = (function (e, t) {
                    var n = t.preferredFontFormat;
                    return n
                      ? e.replace(G, function (e) {
                          for (;;) {
                            var t = U.exec(e) || [],
                              i = t[0],
                              o = t[2];
                            if (!o) return "";
                            if (o === n) return "src: ".concat(i, ";");
                          }
                        })
                      : e;
                  })(e, n)),
                  (o = (function (e) {
                    var t = [];
                    return (
                      e.replace(N, function (e, n, i) {
                        return t.push(i), e;
                      }),
                      t.filter(function (e) {
                        return !I(e);
                      })
                    );
                  })(i)),
                  [
                    2,
                    o.reduce(function (e, i) {
                      return e.then(function (e) {
                        return q(e, i, t, n);
                      });
                    }, Promise.resolve(i)),
                  ])
                : [2, e];
            });
          });
        }
        var H = function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
              function a(e) {
                try {
                  d(i.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                try {
                  d(i.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function d(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              d((i = i.apply(e, t || [])).next());
            });
          },
          Q = function (e, t) {
            var n,
              i,
              o,
              r,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function s(s) {
              return function (d) {
                return (function (s) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; r && ((r = 0), s[0] && (a = 0)), a; )
                    try {
                      if (((n = 1), i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)) return o;
                      switch (((i = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                        case 0:
                        case 1:
                          o = s;
                          break;
                        case 4:
                          return a.label++, { value: s[1], done: !1 };
                        case 5:
                          a.label++, (i = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                            a.label = s[1];
                            break;
                          }
                          if (6 === s[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = s);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(s);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      s = t.call(e, a);
                    } catch (e) {
                      (s = [6, e]), (i = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, d]);
              };
            }
          };
        function W(e, t, n) {
          return H(this, void 0, void 0, function () {
            var i, o, r;
            return Q(this, function (a) {
              switch (a.label) {
                case 0:
                  return (o = null === (i = t.style) || void 0 === i ? void 0 : i.getPropertyValue(e)) ? [4, V(o, null, n)] : [3, 2];
                case 1:
                  return (r = a.sent()), t.style.setProperty(e, r, t.style.getPropertyPriority(e)), [2, !0];
                case 2:
                  return [2, !1];
              }
            });
          });
        }
        function X(e, t) {
          return H(this, void 0, void 0, function () {
            return Q(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, W("background", e, t)];
                case 1:
                  return n.sent() ? [3, 3] : [4, W("background-image", e, t)];
                case 2:
                  n.sent(), (n.label = 3);
                case 3:
                  return [4, W("mask", e, t)];
                case 4:
                  return n.sent() ? [3, 6] : [4, W("mask-image", e, t)];
                case 5:
                  n.sent(), (n.label = 6);
                case 6:
                  return [2];
              }
            });
          });
        }
        function J(e, t) {
          return H(this, void 0, void 0, function () {
            var n, i, o;
            return Q(this, function (r) {
              switch (r.label) {
                case 0:
                  return ((n = m(e, HTMLImageElement)) && !I(e.src)) || (m(e, SVGImageElement) && !I(e.href.baseVal)) ? [4, T((i = n ? e.src : e.href.baseVal), k(i), t)] : [2];
                case 1:
                  return (
                    (o = r.sent()),
                    [
                      4,
                      new Promise(function (t, i) {
                        (e.onload = t), (e.onerror = i);
                        var r = e;
                        r.decode && (r.decode = t), "lazy" === r.loading && (r.loading = "eager"), n ? ((e.srcset = ""), (e.src = o)) : (e.href.baseVal = o);
                      }),
                    ]
                  );
                case 2:
                  return r.sent(), [2];
              }
            });
          });
        }
        function K(e, t) {
          return H(this, void 0, void 0, function () {
            var n, i;
            return Q(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (n = c(e.childNodes)),
                    (i = n.map(function (e) {
                      return Y(e, t);
                    })),
                    [
                      4,
                      Promise.all(i).then(function () {
                        return e;
                      }),
                    ]
                  );
                case 1:
                  return o.sent(), [2];
              }
            });
          });
        }
        function Y(e, t) {
          return H(this, void 0, void 0, function () {
            return Q(this, function (n) {
              switch (n.label) {
                case 0:
                  return m(e, Element) ? [4, X(e, t)] : [3, 4];
                case 1:
                  return n.sent(), [4, J(e, t)];
                case 2:
                  return n.sent(), [4, K(e, t)];
                case 3:
                  n.sent(), (n.label = 4);
                case 4:
                  return [2];
              }
            });
          });
        }
        var $ = function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
              function a(e) {
                try {
                  d(i.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                try {
                  d(i.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function d(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              d((i = i.apply(e, t || [])).next());
            });
          },
          ee = function (e, t) {
            var n,
              i,
              o,
              r,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function s(s) {
              return function (d) {
                return (function (s) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; r && ((r = 0), s[0] && (a = 0)), a; )
                    try {
                      if (((n = 1), i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)) return o;
                      switch (((i = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                        case 0:
                        case 1:
                          o = s;
                          break;
                        case 4:
                          return a.label++, { value: s[1], done: !1 };
                        case 5:
                          a.label++, (i = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                            a.label = s[1];
                            break;
                          }
                          if (6 === s[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = s);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(s);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      s = t.call(e, a);
                    } catch (e) {
                      (s = [6, e]), (i = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, d]);
              };
            }
          },
          te = {};
        function ne(e) {
          return $(this, void 0, void 0, function () {
            var t, n;
            return ee(this, function (i) {
              switch (i.label) {
                case 0:
                  return null != (t = te[e]) ? [2, t] : [4, fetch(e)];
                case 1:
                  return [4, i.sent().text()];
                case 2:
                  return (n = i.sent()), (t = { url: e, cssText: n }), (te[e] = t), [2, t];
              }
            });
          });
        }
        function ie(e, t) {
          return $(this, void 0, void 0, function () {
            var n,
              i,
              o,
              r,
              a = this;
            return ee(this, function (s) {
              return (
                (n = e.cssText),
                (i = /url\(["']?([^"')]+)["']?\)/g),
                (o = n.match(/url\([^)]+\)/g) || []),
                (r = o.map(function (o) {
                  return $(a, void 0, void 0, function () {
                    var r;
                    return ee(this, function (a) {
                      return (
                        (r = o.replace(i, "$1")).startsWith("https://") || (r = new URL(r, e.url).href),
                        [
                          2,
                          x(r, t.fetchRequestInit, function (e) {
                            var t = e.result;
                            return (n = n.replace(o, "url(".concat(t, ")"))), [o, t];
                          }),
                        ]
                      );
                    });
                  });
                })),
                [
                  2,
                  Promise.all(r).then(function () {
                    return n;
                  }),
                ]
              );
            });
          });
        }
        function oe(e) {
          if (null == e) return [];
          for (var t = [], n = e.replace(/(\/\*[\s\S]*?\*\/)/gi, ""), i = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi"); ; ) {
            if (null === (a = i.exec(n))) break;
            t.push(a[0]);
          }
          n = n.replace(i, "");
          for (var o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, r = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi"); ; ) {
            var a;
            if (null === (a = o.exec(n))) {
              if (null === (a = r.exec(n))) break;
              o.lastIndex = r.lastIndex;
            } else r.lastIndex = o.lastIndex;
            t.push(a[0]);
          }
          return t;
        }
        function re(e, t) {
          return $(this, void 0, void 0, function () {
            var n, i;
            return ee(this, function (o) {
              return (
                (n = []),
                (i = []),
                e.forEach(function (n) {
                  if ("cssRules" in n)
                    try {
                      c(n.cssRules || []).forEach(function (e, o) {
                        if (e.type === CSSRule.IMPORT_RULE) {
                          var r = o + 1,
                            a = ne(e.href)
                              .then(function (e) {
                                return ie(e, t);
                              })
                              .then(function (e) {
                                return oe(e).forEach(function (e) {
                                  try {
                                    n.insertRule(e, e.startsWith("@import") ? (r += 1) : n.cssRules.length);
                                  } catch (t) {
                                    console.error("Error inserting rule from remote css", { rule: e, error: t });
                                  }
                                });
                              })
                              .catch(function (e) {
                                console.error("Error loading remote css", e.toString());
                              });
                          i.push(a);
                        }
                      });
                    } catch (r) {
                      var o =
                        e.find(function (e) {
                          return null == e.href;
                        }) || document.styleSheets[0];
                      null != n.href &&
                        i.push(
                          ne(n.href)
                            .then(function (e) {
                              return ie(e, t);
                            })
                            .then(function (e) {
                              return oe(e).forEach(function (e) {
                                o.insertRule(e, o.cssRules.length);
                              });
                            })
                            .catch(function (e) {
                              console.error("Error loading remote stylesheet", e);
                            })
                        ),
                        console.error("Error inlining remote css file", r);
                    }
                }),
                [
                  2,
                  Promise.all(i).then(function () {
                    return (
                      e.forEach(function (e) {
                        if ("cssRules" in e)
                          try {
                            c(e.cssRules || []).forEach(function (e) {
                              n.push(e);
                            });
                          } catch (t) {
                            console.error("Error while reading CSS rules from ".concat(e.href), t);
                          }
                      }),
                      n
                    );
                  }),
                ]
              );
            });
          });
        }
        function ae(e) {
          return e
            .filter(function (e) {
              return e.type === CSSRule.FONT_FACE_RULE;
            })
            .filter(function (e) {
              return F(e.style.getPropertyValue("src"));
            });
        }
        function se(e, t) {
          return $(this, void 0, void 0, function () {
            return ee(this, function (n) {
              switch (n.label) {
                case 0:
                  if (null == e.ownerDocument) throw new Error("Provided element is not within a Document");
                  return [4, re(c(e.ownerDocument.styleSheets), t)];
                case 1:
                  return [2, ae(n.sent())];
              }
            });
          });
        }
        function de(e, t) {
          return $(this, void 0, void 0, function () {
            var n;
            return ee(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, se(e, t)];
                case 1:
                  return (
                    (n = i.sent()),
                    [
                      4,
                      Promise.all(
                        n.map(function (e) {
                          var n = e.parentStyleSheet ? e.parentStyleSheet.href : null;
                          return V(e.cssText, n, t);
                        })
                      ),
                    ]
                  );
                case 2:
                  return [2, i.sent().join("\n")];
              }
            });
          });
        }
        function ce(e, t) {
          return $(this, void 0, void 0, function () {
            var n, i, o, r, a;
            return ee(this, function (s) {
              switch (s.label) {
                case 0:
                  return null == t.fontEmbedCSS ? [3, 1] : ((i = t.fontEmbedCSS), [3, 5]);
                case 1:
                  return t.skipFonts ? ((o = null), [3, 4]) : [3, 2];
                case 2:
                  return [4, de(e, t)];
                case 3:
                  (o = s.sent()), (s.label = 4);
                case 4:
                  (i = o), (s.label = 5);
                case 5:
                  return (n = i) && ((r = document.createElement("style")), (a = document.createTextNode(n)), r.appendChild(a), e.firstChild ? e.insertBefore(r, e.firstChild) : e.appendChild(r)), [2];
              }
            });
          });
        }
        var le = function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
              function a(e) {
                try {
                  d(i.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                try {
                  d(i.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function d(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              d((i = i.apply(e, t || [])).next());
            });
          },
          ue = function (e, t) {
            var n,
              i,
              o,
              r,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function s(s) {
              return function (d) {
                return (function (s) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; r && ((r = 0), s[0] && (a = 0)), a; )
                    try {
                      if (((n = 1), i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)) return o;
                      switch (((i = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                        case 0:
                        case 1:
                          o = s;
                          break;
                        case 4:
                          return a.label++, { value: s[1], done: !1 };
                        case 5:
                          a.label++, (i = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                            a.label = s[1];
                            break;
                          }
                          if (6 === s[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = s);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(s);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      s = t.call(e, a);
                    } catch (e) {
                      (s = [6, e]), (i = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, d]);
              };
            }
          };
        function pe(e, t) {
          return (
            void 0 === t && (t = {}),
            le(this, void 0, void 0, function () {
              var n, i, o, r;
              return ue(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (n = u(e, t)), (i = n.width), (o = n.height), [4, j(e, t, !0)];
                  case 1:
                    return [4, ce((r = a.sent()), t)];
                  case 2:
                    return a.sent(), [4, Y(r, t)];
                  case 3:
                    return (
                      a.sent(),
                      (function (e, t) {
                        var n = e.style;
                        t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = "".concat(t.width, "px")), t.height && (n.height = "".concat(t.height, "px"));
                        var i = t.style;
                        null != i &&
                          Object.keys(i).forEach(function (e) {
                            n[e] = i[e];
                          });
                      })(r, t),
                      [4, f(r, i, o)]
                    );
                  case 4:
                    return [2, a.sent()];
                }
              });
            })
          );
        }
        function Ae(e, t) {
          return (
            void 0 === t && (t = {}),
            le(this, void 0, void 0, function () {
              var n, i, o, r, a, s, d, c, l;
              return ue(this, function (h) {
                switch (h.label) {
                  case 0:
                    return (n = u(e, t)), (i = n.width), (o = n.height), [4, pe(e, t)];
                  case 1:
                    return [4, A(h.sent())];
                  case 2:
                    return (
                      (r = h.sent()),
                      (a = document.createElement("canvas")),
                      (s = a.getContext("2d")),
                      (d =
                        t.pixelRatio ||
                        (function () {
                          var e, t;
                          try {
                            t = process;
                          } catch (e) {}
                          var n = t && t.env ? t.env.devicePixelRatio : null;
                          return n && ((e = parseInt(n, 10)), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
                        })()),
                      (c = t.canvasWidth || i),
                      (l = t.canvasHeight || o),
                      (a.width = c * d),
                      (a.height = l * d),
                      t.skipAutoScale ||
                        (function (e) {
                          (e.width > p || e.height > p) && (e.width > p && e.height > p ? (e.width > e.height ? ((e.height *= p / e.width), (e.width = p)) : ((e.width *= p / e.height), (e.height = p))) : e.width > p ? ((e.height *= p / e.width), (e.width = p)) : ((e.width *= p / e.height), (e.height = p)));
                        })(a),
                      (a.style.width = "".concat(c)),
                      (a.style.height = "".concat(l)),
                      t.backgroundColor && ((s.fillStyle = t.backgroundColor), s.fillRect(0, 0, a.width, a.height)),
                      s.drawImage(r, 0, 0, a.width, a.height),
                      [2, a]
                    );
                }
              });
            })
          );
        }
        function he(e, t) {
          return (
            void 0 === t && (t = {}),
            le(this, void 0, void 0, function () {
              return ue(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, Ae(e, t)];
                  case 1:
                    return [2, n.sent().toDataURL()];
                }
              });
            })
          );
        }
        var fe = n(707),
          me = function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
              function a(e) {
                try {
                  d(i.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                try {
                  d(i.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function d(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              d((i = i.apply(e, t || [])).next());
            });
          },
          ve = function (e, t) {
            var n,
              i,
              o,
              r,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function s(s) {
              return function (d) {
                return (function (s) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; r && ((r = 0), s[0] && (a = 0)), a; )
                    try {
                      if (((n = 1), i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)) return o;
                      switch (((i = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                        case 0:
                        case 1:
                          o = s;
                          break;
                        case 4:
                          return a.label++, { value: s[1], done: !1 };
                        case 5:
                          a.label++, (i = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                            a = 0;
                            continue;
                          }
                          if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                            a.label = s[1];
                            break;
                          }
                          if (6 === s[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = s);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(s);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      s = t.call(e, a);
                    } catch (e) {
                      (s = [6, e]), (i = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, d]);
              };
            }
          },
          ge = function (e) {
            return (
              void 0 === e && (e = null),
              me(void 0, void 0, void 0, function () {
                var t;
                return ve(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, Ee()];
                    case 1:
                      return (t = n.sent()) && t.length > 10 ? (e ? [4, ke(t, e)] : [3, 3]) : [3, 5];
                    case 2:
                      (t = n.sent()), (n.label = 3);
                    case 3:
                      return [4, we({ screenshot: t })];
                    case 4:
                      return [2, n.sent()];
                    case 5:
                      return [2, null];
                  }
                });
              })
            );
          },
          ye = function (e) {
            return me(void 0, void 0, void 0, function () {
              var t, n, r, a, s;
              return ve(this, function (d) {
                switch (d.label) {
                  case 0:
                    return (t = e.hasFrame), (n = null), t ? ((r = e.title), (a = e.thumbnail), [4, ge({ title: r, thumbnail: a })]) : [3, 2];
                  case 1:
                    return (n = d.sent()), [3, 4];
                  case 2:
                    return [4, ge()];
                  case 3:
                    (n = d.sent()), (d.label = 4);
                  case 4:
                    return (s = { screenshot: n, errors: (0, fe.FU)() }), e.callback && (s.callback = e.callback), o.Z.sendMessage(i.Z.message.sendGameScreenshot, { data: s }), [2];
                }
              });
            });
          },
          be = function () {
            return me(void 0, void 0, void 0, function () {
              var e;
              return ve(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, Ee()];
                  case 1:
                    return (e = t.sent()), o.Z.sendMessage(i.Z.message.sendGameRawScreenshot, { data: { screenshot: e } }), [2];
                }
              });
            });
          },
          we = function (e) {
            return me(void 0, void 0, void 0, function () {
              var t, n, i, o;
              return ve(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (t = e.screenshot), "https://api.poki.io/screenshot", (n = "https://poki-user-content.com/"), [4, fetch("https://api.poki.io/screenshot", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ data: t }) })];
                  case 1:
                    (i = r.sent()), (r.label = 2);
                  case 2:
                    return r.trys.push([2, 5, , 6]), 200 !== i.status ? [3, 4] : [4, i.json()];
                  case 3:
                    return (o = r.sent()), [2, n + o.source];
                  case 4:
                    return [3, 6];
                  case 5:
                    return r.sent(), [3, 6];
                  case 6:
                    return [2, null];
                }
              });
            });
          },
          ke = function (e, t) {
            return me(void 0, void 0, void 0, function () {
              var n, i, o, r, a, s, d, c, l, u, p, A, h, f, m, v, g, y, b, w, k, Z, E;
              return ve(this, function (I) {
                switch (I.label) {
                  case 0:
                    return (
                      (n = t.title),
                      (i = t.thumbnail),
                      ((o = new Image()).crossOrigin = "Anonymous"),
                      (r = new Promise(function (e) {
                        o.onload = function () {
                          return e(o);
                        };
                      })),
                      (o.src = e),
                      ((a = new Image()).crossOrigin = "Anonymous"),
                      (s = new Promise(function (e) {
                        a.onload = function () {
                          return e(a);
                        };
                      })),
                      (a.src = "https://a.poki.com/images/screenshot-frame.png"),
                      ((d = new Image()).crossOrigin = "Anonymous"),
                      (c = new Promise(function (e) {
                        d.onload = function () {
                          return e(d);
                        };
                      })),
                      128,
                      (d.src = "https://img.poki.com/cdn-cgi/image/quality=78,width=".concat(128, ",height=").concat(128, ",fit=cover,f=auto/").concat(i)),
                      (l = new FontFace("TorusBold", "url(https://a.poki.com/fonts/torus-bold-latin.woff2)")),
                      (u = l.load()),
                      [4, Promise.all([r, s, c, u])]
                    );
                  case 1:
                    return (p = I.sent()), (A = p[0]), (h = p[1]), (f = p[2]), (m = p[3]), ((v = document.createElement("canvas")).width = A.width), (v.height = A.height), (g = v.getContext("2d")).drawImage(A, 0, 0), (y = v.width / h.width), (b = h.height * y), (w = v.height - b), g.drawImage(h, 0, w, v.width, b), (k = f.height * y), Ze(g, f, 64 * y, w + 20 * y, k, k, 24 * y), document.fonts.add(m), (Z = 226 * y), (E = w + 68 * y), (g.textAlign = "left"), (g.textBaseline = "top"), (g.fillStyle = "#002b50"), (g.font = "700 ".concat(56 * y, "px TorusBold,sans-serif")), g.fillText(n, Z, E), [2, v.toDataURL()];
                }
              });
            });
          },
          Ze = function (e, t, n, i, o, r, a) {
            e.save(), e.beginPath();
            var s = n + o,
              d = i + r;
            e.moveTo(n + a, i), e.lineTo(s - a, i), e.quadraticCurveTo(s, i, s, i + a), e.lineTo(s, d - a), e.quadraticCurveTo(s, d, s - a, d), e.lineTo(n + a, d), e.quadraticCurveTo(n, d, n, d - a), e.lineTo(n, i + a), e.quadraticCurveTo(n, i, n + a, i), e.closePath(), e.clip(), e.drawImage(t, n, i, o, r), e.restore();
          },
          Ee = function () {
            return me(void 0, void 0, void 0, function () {
              var e, t, n, i, o;
              return ve(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (e = function (e) {
                        return !["VIDEO", "TEXTAREA", "NOSCRIPT", "INPUT", "IFRAME"].includes(e.nodeName) && !("IMG" === e.nodeName && !e.getAttribute("src"));
                      }),
                      (t = document.body.style.minWidth),
                      (n = document.body.style.minHeight),
                      (document.body.style.minWidth = "100%"),
                      (document.body.style.minHeight = "100%"),
                      [4, he(document.body, { quality: 0.95, filter: e })]
                    );
                  case 1:
                    return (i = r.sent()) && i.length < 10 ? ((o = document.body.style.position), (document.body.style.position = "fixed"), [4, he(document.body, { quality: 0.95, filter: e })]) : [3, 3];
                  case 2:
                    (i = r.sent()), (document.body.style.position = o), (r.label = 3);
                  case 3:
                    return (document.body.style.minWidth = t), (document.body.style.minHeight = n), [2, i];
                }
              });
            });
          },
          Ie = function (e) {
            return me(void 0, void 0, void 0, function () {
              var t, n, i, o, r;
              return ve(this, function (a) {
                switch (a.label) {
                  case 0:
                    (e =
                      e ||
                      function (e) {
                        return !["VIDEO", "TEXTAREA", "NOSCRIPT", "INPUT", "IFRAME", "CANVAS"].includes(e.nodeName) && !("IMG" === e.nodeName && !e.getAttribute("src"));
                      }),
                      (t = document.body.style.minWidth),
                      (n = document.body.style.minHeight),
                      (i = document.body.style.backgroundColor),
                      (document.body.style.minWidth = "100%"),
                      (document.body.style.minHeight = "100%"),
                      (document.body.style.backgroundColor = "transparent"),
                      (a.label = 1);
                  case 1:
                    return a.trys.push([1, 3, , 4]), [4, pe(document.body, { quality: 0.95, filter: e })];
                  case 2:
                    return (o = a.sent()), [3, 4];
                  case 3:
                    return (r = a.sent()), console.error(r), [3, 4];
                  case 4:
                    return (document.body.style.minWidth = t), (document.body.style.minHeight = n), (document.body.style.backgroundColor = i), [2, o];
                }
              });
            });
          };
      },
      453: (e, t, n) => {
        "use strict";
        function i(e) {
          var t = new RegExp("".concat(e, "=([^;]+)(?:;|$)")).exec(document.cookie);
          return t ? t[1] : "";
        }
        function o(e, t, n) {
          document.cookie = ""
            .concat(e, "=")
            .concat(t, "; path=/; samesite=lax; max-age=")
            .concat(Math.min(n || 15552e3, 15552e3));
        }
        function r() {
          for (var e = Math.floor(Date.now() / 1e3), t = "", n = 0; n < 4; n++) (t = String.fromCharCode(255 & e) + t), (e >>= 8);
          if (window.crypto && crypto.getRandomValues && Uint32Array) {
            var i = new Uint32Array(12);
            crypto.getRandomValues(i);
            for (var o = 0; o < 12; o++) t += String.fromCharCode(255 & i[o]);
          } else for (var r = 0; r < 12; r++) t += String.fromCharCode(Math.floor(256 * Math.random()));
          return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
        }
        n.d(t, { Z: () => C });
        function a(e, t, n) {
          console.error(e);
          var i = [
            { k: "where", v: t },
            { k: "error", v: e.name && e.message ? "".concat(e.name, ": ").concat(e.message) : JSON.stringify(e) },
          ];
          if (void 0 !== n) {
            var o = n;
            "string" != typeof e && (o = JSON.stringify(e)), i.push({ k: "extra", v: o });
          }
          !(function (e, t) {
            if (navigator.sendBeacon) {
              var n = navigator.sendBeacon.bind(navigator);
              try {
                if (n(e, t)) return;
              } catch (e) {
                console.error(e);
              }
            }
            try {
              var i = "XMLHttpRequest" in window ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
              i.open("POST", e, !0), i.setRequestHeader("Content-Type", "text/plain"), i.send(t);
            } catch (e) {}
          })("https://t.poki.io/l", JSON.stringify({ c: "observer-error", ve: 7, d: i }));
        }
        window._pokiUserGlobalName = window._pokiUserGlobalName || "user";
        var s = "poki_session";
        function d(e) {
          return !(!e || !(e && e.page && e.landing_page && e.previous_page) || !e.tab_id || !e.expire || Date.now() > e.expire || e.expire > Date.now() + 18e5);
        }
        function c() {
          var e = null;
          d(window[window._pokiSessionGlobalName]) && (e = window[window._pokiSessionGlobalName]);
          try {
            var t = JSON.parse(sessionStorage.getItem(s));
            d(t) && (!e || t.depth > e.depth) && (e = t);
          } catch (e) {
            try {
              a(e, "getTabSession", sessionStorage.getItem(s));
            } catch (t) {
              a(e, "getTabSession", t);
            }
          }
          return e;
        }
        function l() {
          var e = c();
          return e ? e.tab_id : r();
        }
        function u() {
          var e = 0,
            t = c();
          t && (e = t.depth);
          try {
            var n = JSON.parse(i(s) || null);
            d(n) && (e = Math.max(e, n.depth));
          } catch (e) {
            var o = null;
            try {
              o = i(s) || null;
            } catch (e) {}
            a(e, "getSessionDepth", o);
          }
          return e;
        }
        function p() {
          try {
            var e = i("ses_cnt");
            return (e && parseInt(e, 10)) || 0;
          } catch (e) {
            return 0;
          }
        }
        window._pokiSessionGlobalName = window._pokiSessionGlobalName || "session";
        var A = n(583),
          h = n(715),
          f = n(298),
          m = function (e) {
            var t = new Array();
            return (
              Object.keys(e).forEach(function (n) {
                "object" == typeof e[n] ? (t = t.concat(m(e[n]))) : t.push(e[n]);
              }),
              t
            );
          };
        const v = m;
        var g = n(902),
          y = n(699),
          b = n(888),
          w = n(58),
          k = function () {
            return (
              (k =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              k.apply(this, arguments)
            );
          },
          Z = v(A.Z.tracking),
          E = window,
          I = (function () {
            function e() {}
            return (
              (e.track = function (t, n) {
                var i, o;
                if ((void 0 === n && (n = {}), -1 === Z.indexOf(t))) throw new TypeError("Invalid 'event', must be one of ".concat(Z.join(", ")));
                if ("object" != typeof n) throw new TypeError("Invalid data, must be an object");
                var r = w.Z.getVideoDataAnnotations();
                if (null == r ? void 0 : r.pokiAdServer)
                  switch (t) {
                    case A.Z.tracking.ads.status.impression:
                      (0, g.Z)(k(k({}, n), { event: "video-impression", creativeId: null == n ? void 0 : n.creativeId }));
                      break;
                    case A.Z.tracking.ads.video.error:
                      (0, g.Z)(k(k({}, n), { event: "video-error", errorCode: null == n ? void 0 : n.errorCode }));
                      break;
                    case A.Z.tracking.ads.video.loaderError:
                      (0, g.Z)(k(k({}, n), { event: "video-adsloader-error", errorCode: null == n ? void 0 : n.errorCode }));
                      break;
                    case A.Z.tracking.ads.status.completed:
                      (0, g.Z)(k(k({}, n), { event: "video-complete" }));
                  }
                if ((t.includes("pokiTrackingRewardedWeb") && (n = r), f.Z.log)) {
                  if ("test" === (null === (o = null === (i = null === window || void 0 === window ? void 0 : window.process) || void 0 === i ? void 0 : i.env) || void 0 === o ? void 0 : o.NODE_ENV)) return;
                  Object.keys(n).length ? console.info("%cPOKI_TRACKER:%c Tracked event '".concat(t, "' with data:"), "font-weight: bold", "", n) : console.info("%cPOKI_TRACKER:%c Tracked event '".concat(t, "'"), "font-weight: bold", "");
                }
                e.playtestMessageCallback({ event: t, data: n }), e.logToObserver ? e.pushEvent("sdk", "message", { content: { event: t, data: n, pokifordevs: { game_id: b.Z.gameID, game_version_id: void 0 } }, type: A.Z.message.event, origin: "game" }) : h.Z.sendMessage(A.Z.message.event, { event: t, data: n });
              }),
              (e.setMessageCallback = function (t) {
                e.playtestMessageCallback = t;
              }),
              (e.setupDefaultEvents = function () {
                var t,
                  n = (((t = {})[A.Z.ready] = A.Z.tracking.sdk.status.initialized), (t[A.Z.adblocked] = A.Z.tracking.sdk.status.failed), (t[A.Z.ads.busy] = A.Z.tracking.ads.status.busy), (t[A.Z.ads.completed] = A.Z.tracking.ads.status.completed), (t[A.Z.ads.error] = A.Z.tracking.ads.status.error), (t[A.Z.ads.impression] = A.Z.tracking.ads.status.impression), (t[A.Z.ads.limit] = A.Z.tracking.ads.status.limit), (t[A.Z.ads.ready] = A.Z.tracking.ads.status.ready), (t[A.Z.ads.requested] = A.Z.tracking.ads.status.requested), (t[A.Z.ads.prebidRequested] = A.Z.tracking.ads.status.prebidRequested), (t[A.Z.ads.skipped] = A.Z.tracking.ads.status.skipped), (t[A.Z.ads.started] = A.Z.tracking.ads.status.started), (t[A.Z.ads.video.clicked] = A.Z.tracking.ads.video.clicked), (t[A.Z.ads.video.error] = A.Z.tracking.ads.video.error), (t[A.Z.ads.video.loaderError] = A.Z.tracking.ads.video.loaderError), (t[A.Z.ads.video.buffering] = A.Z.tracking.ads.status.buffering), (t[A.Z.ads.video.progress] = A.Z.tracking.ads.video.progress), (t[A.Z.ads.video.paused] = A.Z.tracking.ads.video.paused), (t[A.Z.ads.video.resumed] = A.Z.tracking.ads.video.resumed), (t[A.Z.tracking.screen.gameplayStart] = A.Z.tracking.screen.gameplayStart), (t[A.Z.tracking.screen.gameplayStop] = A.Z.tracking.screen.gameplayStop), (t[A.Z.tracking.screen.commercialBreak] = A.Z.tracking.screen.commercialBreak), (t[A.Z.tracking.screen.rewardedBreak] = A.Z.tracking.screen.rewardedBreak), t);
                Object.keys(n).forEach(function (t) {
                  w.Z.addEventListener(t, function (i) {
                    e.track(n[t], i);
                  });
                });
              }),
              (e.pushEvent = function (e, t, n) {
                E.pokiGTM.push({ event: "".concat(e, "-").concat(t), eventNoun: e, eventVerb: t, eventData: n || {} });
              }),
              (e.setRequireConsent = function (t) {
                (e.cmpRequired = t), e.setupObserverIfCMP();
              }),
              (e.setupObserverWithCMP = function (t) {
                (e.cmpIndex = t), e.setupObserverIfCMP();
              }),
              (e.setupObserverIfCMP = function () {
                if (void 0 !== e.cmpRequired && void 0 !== e.cmpIndex)
                  if (e.cmpRequired) {
                    if (!window.__tcfapi) return void console.error("POKI-SDK: enableEventTracking: a CMP is required but no CMP is present.");
                    window.__tcfapi("addEventListener", 2, function (t, n) {
                      !n ||
                        ("tcloaded" !== t.eventStatus && "useractioncomplete" !== t.eventStatus) ||
                        (window.__tcfapi("getNonIABVendorConsents", 2, function (t) {
                          t && t.nonIabVendorConsents && t.nonIabVendorConsents[e.cmpIndex || 0] && e.setupObserver();
                        }),
                        window.__tcfapi("removeEventListener", 2, function () {}, t.listenerId));
                    });
                  } else e.setupObserver();
              }),
              (e.setupObserver = function () {
                (E._pokiSessionGlobalName = "pokiSession"),
                  (E._pokiUserGlobalName = "pokiUser"),
                  (E._pokiContextGlobalName = "pokiContext"),
                  (E._pokiTrackerGlobalName = "pokiTracker"),
                  (function (e, t, n) {
                    var A = null;
                    try {
                      d((A = c()))
                        ? ((A.previous_page.path = A.page.path), (A.previous_page.type = A.page.type), (A.previous_page.id = A.page.id), (A.previous_page.start = A.page.start), (A.previous_page.pageview_id = A.page.pageview_id), (A.page.path = e), (A.page.type = t), (A.page.id = n), (A.page.start = Date.now()), (A.page.pageview_id = r()), (A.depth = u() + 1), (A.expire = Date.now() + 18e5))
                        : (A = (function (e, t, n) {
                            try {
                              var c = JSON.parse(i(s) || null);
                              if (d(c)) return (c.previous_page.path = c.page.path), (c.previous_page.type = c.page.type), (c.previous_page.id = c.page.id), (c.previous_page.start = c.page.start), (c.previous_page.pageview_id = c.page.pageview_id), (c.page.path = e), (c.page.type = t), (c.page.id = n), (c.page.start = Date.now()), (c.page.pageview_id = r()), (c.depth = u() + 1), (c.expire = Date.now() + 18e5), (c.tab_id = l()), o(s, JSON.stringify(c)), c;
                            } catch (e) {
                              var A = null;
                              try {
                                A = i(s) || null;
                              } catch (e) {}
                              a(e, "getSessionDepth", A);
                            }
                            var h = r();
                            return { id: r(), expire: Date.now() + 18e5, tab_id: l(), depth: 1, count: p() + 1, page: { path: e, type: t, id: n, start: Date.now(), pageview_id: h }, previous_page: {}, landing_page: { path: e, type: t, id: n, start: Date.now(), pageview_id: h } };
                          })(e, t, n));
                      try {
                        o("ses_cnt", A.count);
                      } catch (e) {
                        a(e, "updateSession-3");
                      }
                      A.count > 1 &&
                        (function () {
                          try {
                            o("uid_new", "0"), sessionStorage.setItem("uid_new", "0");
                          } catch (e) {}
                          window[window._pokiUserGlobalName] && (window[window._pokiUserGlobalName].is_new = !1);
                        })();
                      var h = JSON.stringify(A);
                      try {
                        sessionStorage.setItem(s, h);
                      } catch (e) {
                        a(e, "updateSession-1");
                      }
                      window[window._pokiSessionGlobalName] = A;
                      try {
                        o(s, h);
                      } catch (e) {
                        a(e, "updateSession-4");
                      }
                    } catch (e) {
                      a(e, "updateSession-2");
                    }
                  })(window.location.pathname, "external", b.Z.contentGameID),
                  (function () {
                    var e,
                      t,
                      n = null === (e = window[window._pokiUserGlobalName]) || void 0 === e ? void 0 : e.id,
                      a = (null === (t = window[window._pokiUserGlobalName]) || void 0 === t ? void 0 : t.is_new) || !1;
                    if (!n)
                      try {
                        (n = sessionStorage.getItem("uid")), (a = "1" === sessionStorage.getItem("uid_new"));
                      } catch (e) {}
                    n || ((n = i("uid")), (a = "1" === i("uid_new"))), n || ((n = r()), (a = !0)), o("uid", n), o("uid_new", a ? "1" : "0");
                    try {
                      sessionStorage.setItem("uid", n), sessionStorage.setItem("uid_new", a ? "1" : "0");
                    } catch (e) {}
                    window[window._pokiUserGlobalName] = { id: n, is_new: a };
                  })(),
                  (E[E._pokiContextGlobalName] = { tag: null, site: { id: null, domain: window.location.hostname, prefix: "" }, page: { id: b.Z.contentGameID, type: "external", path: window.location.pathname, pageview_id: r() }, user: E[E._pokiUserGlobalName], session: E[E._pokiSessionGlobalName] }),
                  (E.pokiGTM = E.pokiGTM || []),
                  (0, y.Z)("https://a.poki.com/t2.js"),
                  (e.logToObserver = !0);
              }),
              (e.logToObserver = !1),
              (e.cmpRequired = void 0),
              (e.cmpIndex = void 0),
              (e.playtestMessageCallback = function () {}),
              e
            );
          })();
        const C = I;
      },
      662: (e, t, n) => {
        "use strict";
        n.d(t, { D: () => o, M: () => r });
        var i = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "GB", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO"],
          o = "ZZ";
        function r(e) {
          return i.includes(e);
        }
      },
      298: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => o });
        var i = n(888);
        const o = (function () {
          function e() {}
          return (
            (e.debug = !1),
            (e.log = !1),
            (e.init = function (t, n) {
              var o,
                r,
                a = window.location.hostname;
              void 0 === t && ("test" === (null === (r = null === (o = null === window || void 0 === window ? void 0 : window.process) || void 0 === o ? void 0 : o.env) || void 0 === r ? void 0 : r.NODE_ENV) ? ((t = !1), void 0 === n && (n = !1)) : "127.0.0.1" === a || 1 == 1 || "[::1]" === a ? ((t = !0), void 0 === n && (n = !1)) : ((t = !1), void 0 === n && (n = !1))), i.Z.isInspector || "qa-files.poki.com" === a ? ((t = !0), (n = !0)) : a.endsWith(".poki-gdn.com") && ((t = !1), (n = !1)), i.Z.debugMode && (t = !0), i.Z.logMode && (n = !0), void 0 === n && (n = t), (e.debug = t), (e.log = n);
            }),
            e
          );
        })();
      },
      272: (e, t, n) => {
        "use strict";
        n.d(t, { V: () => o });
        function i(e) {
          return Math.round(100 * e) / 100;
        }
        var o = (function () {
          function e(e) {
            var t = this;
            (this.seconds = []),
              (this.frameCounter = 0),
              Math.random() > e ||
                (window.requestAnimationFrame &&
                  -1 !== window.requestAnimationFrame.toString().indexOf("[native code]") &&
                  ((this.nextSecond = performance.now() + 1e3),
                  window.requestAnimationFrame(function () {
                    t.frame();
                  })));
          }
          return (
            (e.prototype.frame = function () {
              for (var e = this, t = performance.now(); t >= this.nextSecond; ) this.seconds.unshift(this.frameCounter), this.seconds.length > 10 && this.seconds.pop(), (this.frameCounter = 0), (this.nextSecond += 1e3);
              this.frameCounter++,
                window.requestAnimationFrame(function () {
                  e.frame();
                });
            }),
            (e.prototype.stats = function () {
              var e = this;
              if (0 !== this.seconds.length) {
                var t = Math.min.apply(Math, this.seconds),
                  n = Math.max.apply(Math, this.seconds),
                  o = i(
                    this.seconds.reduce(function (e, t) {
                      return e + t;
                    }, 0) / this.seconds.length
                  ),
                  r = i(
                    this.seconds
                      .slice(1)
                      .map(function (t, n) {
                        return Math.abs(t - e.seconds[n]);
                      })
                      .reduce(function (e, t) {
                        return e + t;
                      }, 0) /
                      (this.seconds.length - 1)
                  );
                return isNaN(r) && (r = 0), "".concat(t, "|").concat(n, "|").concat(o, "|").concat(r);
              }
            }),
            e
          );
        })();
      },
      687: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        const i = function () {
          for (var e = Math.floor(Date.now() / 1e3), t = "", n = 0; n < 4; n++) (t = String.fromCharCode(255 & e) + t), (e >>= 8);
          if (window.crypto && crypto.getRandomValues && Uint32Array) {
            var i = new Uint32Array(12);
            crypto.getRandomValues(i);
            for (n = 0; n < 12; n++) t += String.fromCharCode(255 & i[n]);
          } else for (n = 0; n < 12; n++) t += String.fromCharCode(Math.floor(256 * Math.random()));
          return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
        };
      },
      906: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        const i = function (e, t) {
          var n;
          if ("undefined" == typeof window && !t) return "";
          e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
          var i = new RegExp("(?:[\\?&]|^)".concat(e, "=([^&#]*)")).exec(t || (null === (n = null === window || void 0 === window ? void 0 : window.location) || void 0 === n ? void 0 : n.search) || "");
          return null === i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "));
        };
      },
      640: () => {
        var e = document.createElement("style");
        (e.innerHTML = "\n\t".concat("\n\tcanvas{\n\t\ttouch-action: none;\n\t\t-webkit-touch-callout: none;\n\t\t-webkit-user-select: none;\n\t\t-moz-user-select: none;\n\t\t-ms-user-select: none;\n\t\tuser-select: none;\n\t}\n", "\n")), document.head.appendChild(e);
      },
      893: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        const i = function () {
          return "undefined" != typeof navigator && /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera\smini|avantgo|mobilesafari|docomo)/i.test(navigator.userAgent);
        };
      },
      573: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        const i = function () {
          return "undefined" != typeof navigator && /(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i.test(navigator.userAgent);
        };
      },
      699: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        const i = function (e) {
          return new Promise(function (t, n) {
            var i = document.createElement("script");
            (i.type = "text/javascript"), (i.async = !0), (i.src = e);
            var o = function () {
              (i.readyState && "loaded" !== i.readyState && "complete" !== i.readyState) || (t(), (i.onload = null), (i.onreadystatechange = null));
            };
            (i.onload = o), (i.onreadystatechange = o), (i.onerror = n), document.head.appendChild(i);
          });
        };
      },
      707: (e, t, n) => {
        "use strict";
        function i(e) {
          switch (Object.prototype.toString.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
              return !0;
            default:
              return e instanceof Error;
          }
        }
        n.d(t, { ZB: () => s, FU: () => d, $r: () => c });
        var o = n(888),
          r = [],
          a = Date.now(),
          s = Math.random().toString(36).substr(2, 9);
        function d() {
          return r;
        }
        function c(e) {
          if (o.Z.gameID && !o.Z.isPlayground) {
            if (!(Date.now() < a))
              try {
                var t = e.message || JSON.stringify(e);
                r.push({ n: e.name, m: t, s: JSON.stringify(e.stack) });
                var n = JSON.stringify({ gid: o.Z.gameID, vid: o.Z.versionID, ve: 7, n: e.name, m: t, s: JSON.stringify(e.stack), ui: s }),
                  i = "https://t.poki.io/ge";
                if (navigator.sendBeacon) navigator.sendBeacon(i, n);
                else {
                  var d = new XMLHttpRequest();
                  d.open("POST", i, !0), d.send(n);
                }
                a = Date.now() + 100;
              } catch (e) {
                console.error(e);
              }
          } else console.log(e);
        }
        "undefined" == typeof window ||
          o.Z.isPlayground ||
          (window.addEventListener("unhandledrejection", function (e) {
            i(e.reason) ? c(e.reason) : c({ name: "unhandledrejection", message: JSON.stringify(e.reason) || JSON.stringify(e) });
          }),
          window.addEventListener("error", function (e) {
            i(e.error) ? c(e.error) : c(e);
          }));
      },
      902: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => s });
        var i = n(298),
          o = n(888),
          r = n(58),
          a = function () {
            return (
              (a =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, i = arguments.length; n < i; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              a.apply(this, arguments)
            );
          };
        const s = function (e) {
          var t;
          if ("undefined" != typeof window && "undefined" != typeof fetch) {
            var n = r.Z.getVideoDataAnnotations(),
              s = e.size;
            (null === (t = e.event) || void 0 === t ? void 0 : t.startsWith("video-")) && (s = "640x360v");
            var d = a(a({}, e), { size: s, opportunity_id: e.opportunityId || n.opportunityId, ad_unit_path: e.adUnitPath || n.adUnitPath, p4d_game_id: o.Z.gameID, p4d_version_id: o.Z.versionID, bidder: e.bidder || n.bidder, bid: e.bid || n.bid || 0, error_code: e.errorCode, creative_id: e.creativeId || n.creativeId, experiment: o.Z.experiment });
            i.Z.debug ? console.log("PokiAdServer Tracking: ", d) : fetch("https://t.poki.io/adserver", { method: "POST", mode: "no-cors", body: JSON.stringify(d) });
          }
        };
      },
      888: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => p, w: () => u });
        var i = n(662),
          o = n(906),
          r = n(893),
          a = n(573);
        var s,
          d,
          c = (0, o.Z)("url_referrer") || "",
          l = { bot: "1" === (0, o.Z)("bot"), categories: (0, o.Z)("categories") || "", device: (0, r.Z)() ? "mobile" : (0, a.Z)() ? "tablet" : "desktop", experiment: (0, o.Z)("experiment") || "", forceAd: (0, o.Z)("force_ad") || !1, isPokiIframe: (parseInt((0, o.Z)("site_id"), 10) || 0) > 0, siteID: parseInt((0, o.Z)("site_id"), 10) || 3, tag: (0, o.Z)("tag") || "", versionID: (0, o.Z)("game_version_id"), debugMode: "true" === (0, o.Z)("pokiDebug"), logMode: "" !== (0, o.Z)("pokiLogging"), playtest: (0, o.Z)("playtest"), testVideos: "true" === (0, o.Z)("testVideos"), referrer: c, isPlayground: !!window.isPokiPlayground, isInspector: "inspector-uploads.poki-user-content.com" === (null === (s = null === window || void 0 === window ? void 0 : window.location) || void 0 === s ? void 0 : s.host) || (null === (d = null === document || void 0 === document ? void 0 : document.referrer) || void 0 === d ? void 0 : d.includes("inspector.poki.dev")) || "1" === (0, o.Z)("inspector"), ccpaApplies: (0, o.Z)("ccpaApplies"), country: ((0, o.Z)("country") || "").toUpperCase(), gameID: (0, o.Z)("game_id"), gdprApplies: (0, i.M)(((0, o.Z)("country") || "").toUpperCase()), contentGameID: void 0, specialCondition: (0, o.Z)("special_condition"), iabcat: void 0, nonPersonalized: "y" === (0, o.Z)("nonPersonalized"), familyFriendly: "y" === (0, o.Z)("familyFriendly") },
          u = function (e, t) {
            l[e] = t;
          };
        const p = l;
      },
      563: () => {
        Promise.allSettled =
          Promise.allSettled ||
          function (e) {
            return Promise.all(
              e.map(function (e) {
                return e
                  .then(function (e) {
                    return { status: "fulfilled", value: e };
                  })
                  .catch(function (e) {
                    return { status: "rejected", reason: e };
                  });
              })
            );
          };
      },
      992: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        const i = function (e, t) {
          var n = !1;
          return (
            Object.keys(t).forEach(function (i) {
              t[i] === e && (n = !0);
            }),
            n
          );
        };
      },
    },
    r = {};
  function a(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var n = (r[e] = { exports: {} });
    return o[e].call(n.exports, n, n.exports, a), n.exports;
  }
  (a.m = o),
    (t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__),
    (a.t = function (n, i) {
      if ((1 & i && (n = this(n)), 8 & i)) return n;
      if ("object" == typeof n && n) {
        if (4 & i && n.__esModule) return n;
        if (16 & i && "function" == typeof n.then) return n;
      }
      var o = Object.create(null);
      a.r(o);
      var r = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var s = 2 & i && n; "object" == typeof s && !~e.indexOf(s); s = t(s)) Object.getOwnPropertyNames(s).forEach((e) => (r[e] = () => n[e]));
      return (r.default = () => n), a.d(o, r), o;
    }),
    (a.d = (e, t) => {
      for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.f = {}),
    (a.e = (e) => Promise.all(Object.keys(a.f).reduce((t, n) => (a.f[n](e, t), t), []))),
    (a.u = (e) => e + ".js"),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n = {}),
    (i = "@poki/poki-sdk:"),
    (a.l = (e, t, o, r) => {
      if (n[e]) n[e].push(t);
      else {
        var s, d;
        if (void 0 !== o)
          for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
            var u = c[l];
            if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == i + o) {
              s = u;
              break;
            }
          }
        s || ((d = !0), ((s = document.createElement("script")).charset = "utf-8"), (s.timeout = 120), a.nc && s.setAttribute("nonce", a.nc), s.setAttribute("data-webpack", i + o), (s.src = e)), (n[e] = [t]);
        var p = (t, i) => {
            (s.onerror = s.onload = null), clearTimeout(A);
            var o = n[e];
            if ((delete n[e], s.parentNode && s.parentNode.removeChild(s), o && o.forEach((e) => e(i)), t)) return t(i);
          },
          A = setTimeout(p.bind(null, void 0, { type: "timeout", target: s }), 12e4);
        (s.onerror = p.bind(null, s.onerror)), (s.onload = p.bind(null, s.onload)), d && document.head.appendChild(s);
      }
    }),
    (a.r = (e) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      a.g.importScripts && (e = a.g.location + "");
      var t = a.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length) for (var i = n.length - 1; i > -1 && !e; ) e = n[i--].src;
      }
      if (!e) throw new Error("Automatic publicPath is not supported in this browser");
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (a.p = e);
    })(),
    (() => {
      var e = { 702: 0 };
      a.f.j = (t, n) => {
        var i = a.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) n.push(i[2]);
          else {
            var o = new Promise((n, o) => (i = e[t] = [n, o]));
            n.push((i[2] = o));
            var r = a.p + a.u(t),
              s = new Error();
            a.l(
              r,
              (n) => {
                if (a.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var o = n && ("load" === n.type ? "missing" : n.type),
                    r = n && n.target && n.target.src;
                  (s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + r + ")"), (s.name = "ChunkLoadError"), (s.type = o), (s.request = r), i[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, n) => {
          var i,
            o,
            [r, s, d] = n,
            c = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (i in s) a.o(s, i) && (a.m[i] = s[i]);
            if (d) d(a);
          }
          for (t && t(n); c < r.length; c++) (o = r[c]), a.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        n = (self.webpackChunk_poki_poki_sdk = self.webpackChunk_poki_poki_sdk || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (() => {
      "use strict";
      var e = a(583),
        t = a(453),
        n = (a(563), a(888)),
        i = a(298),
        o = a(128);
      function r(e) {
        if (document.body && document.body.appendChild) {
          var t = document.createElement("iframe");
          (t.style.display = "none"), document.body.appendChild(t), t.contentWindow && (t.contentWindow.document.open(), t.contentWindow.document.write("<script>".concat(e, "</script>")), t.contentWindow.document.close());
        } else
          document.addEventListener("DOMContentLoaded", function () {
            r(e);
          });
      }
      function s() {
        r("\nwindow.addEventListener('storage', function(event) {\n\ttry {\n\t\tconst key = event.key;\n\n\t\t// key is null when localStorage.clear() is called.\n\t\tif (key === null) {\n\t\t\twindow.top.postMessage({\n\t\t\t\ttype: 'mutateSaveGame',\n\t\t\t\tcontent: {\n\t\t\t\t\taction: 'clear',\n\t\t\t\t},\n\t\t\t}, '*');\n\t\t\treturn;\n\t\t}\n\n\t\t// newValue is null when localStorage.removeItem() is called.\n\t\tif (event.newValue === null) {\n\t\t\twindow.top.postMessage({\n\t\t\t\ttype: 'mutateSaveGame',\n\t\t\t\tcontent: {\n\t\t\t\t\taction: 'delete',\n\t\t\t\t\tkey,\n\t\t\t\t},\n\t\t\t}, '*');\n\t\t} else {\n\t\t\twindow.top.postMessage({\n\t\t\t\ttype: 'mutateSaveGame',\n\t\t\t\tcontent: {\n\t\t\t\t\taction: 'set',\n\t\t\t\t\tkey,\n\t\t\t\t\tvalue: event.newValue,\n\t\t\t\t},\n\t\t\t}, '*');\n\t\t}\n\t} catch (e) {}\n});\n");
      }
      var d,
        c,
        l = function () {
          n.Z.isPokiIframe && (setTimeout(o.Z.trackSavegames, 1e4), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && s());
        },
        u = !1,
        p = !1,
        A = 0,
        h = function () {
          A++,
            (d = setTimeout(h, 100 * A)),
            window.__tcfapi &&
              window.__tcfapi("ping", 2, function (e, t) {
                t && (null == e ? void 0 : e.cmpLoaded) && ((u = !0), clearTimeout(d));
              });
        },
        f = function () {
          A++,
            (c = setTimeout(f, 100 * A)),
            window.__uspapi &&
              window.__uspapi("uspPing", 1, function () {
                (p = !0), clearInterval(c);
              });
        },
        m = function () {
          n.Z.gdprApplies
            ? (t.Z.setRequireConsent(!0),
              (function () {
                if (!(window.__tcfapi || n.Z.isPlayground || n.Z.familyFriendly)) {
                  var e = window.top,
                    t = {};
                  (window.__tcfapi = function (n, i, o, r) {
                    var a = "".concat(Math.random()),
                      s = { __tcfapiCall: { command: n, parameter: r, version: i, callId: a } };
                    (t[a] = o), e.postMessage(s, "*");
                  }),
                    window.addEventListener(
                      "message",
                      function (e) {
                        var n = {};
                        try {
                          n = "string" == typeof e.data ? JSON.parse(e.data) : e.data;
                        } catch (e) {}
                        var i = n.__tcfapiReturn;
                        i && "function" == typeof t[i.callId] && (t[i.callId](i.returnValue, i.success), (t[i.callId] = null));
                      },
                      !1
                    );
                }
              })(),
              h(),
              setTimeout(function () {
                u || n.Z.isPlayground || n.Z.isPokiIframe || console.error("GDPR - No __tcfapi callback after 2s, verify implementation!");
              }, 2e3))
            : t.Z.setRequireConsent(!1),
            n.Z.ccpaApplies &&
              (!(function () {
                if (!(window.__uspapi || n.Z.isPlayground || n.Z.familyFriendly)) {
                  var e = window.top,
                    t = {};
                  (window.__uspapi = function (n, i, o) {
                    var r = "".concat(Math.random()),
                      a = { __uspapiCall: { command: n, version: i, callId: r } };
                    (t[r] = o), e.postMessage(a, "*");
                  }),
                    window.addEventListener(
                      "message",
                      function (e) {
                        var n = e && e.data && e.data.__uspapiReturn;
                        n && n.callId && "function" == typeof t[n.callId] && (t[n.callId](n.returnValue, n.success), (t[n.callId] = null));
                      },
                      !1
                    );
                }
              })(),
              f(),
              setTimeout(function () {
                p || n.Z.isPlayground || n.Z.isPokiIframe || console.error("USPrivacy - No __uspapi callback after 2s, verify implementation!");
              }, 2e3));
        },
        v = function () {
          return n.Z.gdprApplies && !u && !i.Z.debug && !n.Z.familyFriendly;
        },
        g = function () {
          return n.Z.ccpaApplies && !p && !i.Z.debug && !n.Z.familyFriendly;
        },
        y = a(715),
        b = a(699),
        w = a(893);
      const k = function () {
        return "undefined" != typeof navigator && /(iPad|iPhone|iPod)/gi.test(navigator.userAgent);
      };
      var Z = "MacIntel" === window.navigator.platform && void 0 !== window.navigator.standalone && navigator.maxTouchPoints > 1,
        E = a(573),
        I = a(992),
        C = a(687);
      const x = function (e) {
        return e instanceof Array ? e : [e];
      };
      var S = 21682198607;
      const T = { adTagUrl: "//pubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=/1053551/Pub-Poki-Generic&ciu_szs&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}&nofb=1", adTiming: { preroll: !1, timeBetweenAds: 12e4, timePerTry: 7e3, startAdsAfter: 12e4 }, waterfallRetries: 2 };
      var _ = a(58);
      const P = (function () {
        function t(t) {
          void 0 === t && (t = {}), this.setTimings(t), (this.timingIdx = { timePerTry: 0 }), (this.timers = { timePerTry: void 0, timeBetweenAds: void 0, startAdsAfter: void 0 }), (null == t ? void 0 : t.fake) || (_.Z.addEventListener(e.Z.ads.requested, this.startTimeBetweenAdsTimer.bind(this)), _.Z.addEventListener(e.Z.ads.completed, this.startTimeBetweenAdsTimer.bind(this)), _.Z.addEventListener(e.Z.ads.stopped, this.startTimeBetweenAdsTimer.bind(this)));
        }
        return (
          (t.prototype.setTimings = function (e) {
            var t = T.adTiming,
              n = e.preroll,
              i = void 0 === n ? t.preroll : n,
              o = e.timePerTry,
              r = void 0 === o ? t.timePerTry : o,
              a = e.timeBetweenAds,
              s = void 0 === a ? t.timeBetweenAds : a,
              d = e.startAdsAfter,
              c = void 0 === d ? t.startAdsAfter : d;
            this.timings = { preroll: !1 !== i, timePerTry: x(r), timeBetweenAds: s, startAdsAfter: c };
          }),
          (t.prototype.resetAll = function () {
            (this.timingIdx = { timePerTry: 0 }), this.stopTimer("timePerTry"), this.stopTimer("timeBetweenAds"), this.stopTimer("startAdsAfter");
          }),
          (t.prototype.startTimeBetweenAdsTimer = function () {
            this.startTimer("timeBetweenAds");
          }),
          (t.prototype.startStartAdsAfterTimer = function () {
            this.startTimer("startAdsAfter");
          }),
          (t.prototype.requestPossible = function () {
            return !this.timers.timeBetweenAds && !this.timers.startAdsAfter;
          }),
          (t.prototype.startWaterfallTimer = function (e) {
            this.startTimer("timePerTry", e);
          }),
          (t.prototype.stopWaterfallTimer = function () {
            this.stopTimer("timePerTry");
          }),
          (t.prototype.nextWaterfallTimer = function () {
            this.nextTiming("timePerTry");
          }),
          (t.prototype.resetWaterfallTimerIdx = function () {
            this.resetTimingIdx("timePerTry");
          }),
          (t.prototype.stopTimer = function (e) {
            this.timers[e] && (clearTimeout(this.timers[e]), (this.timers[e] = void 0));
          }),
          (t.prototype.startTimer = function (e, t) {
            var n = this;
            void 0 === t && (t = function () {}),
              this.getTiming(e) <= 0
                ? t()
                : (this.timers[e] && clearTimeout(this.timers[e]),
                  (this.timers[e] = window.setTimeout(function () {
                    n.stopTimer(e), t();
                  }, this.getTiming(e))));
          }),
          (t.prototype.getTiming = function (e) {
            var t = this.timings[e];
            return t instanceof Array ? t[this.timingIdx[e]] : t;
          }),
          (t.prototype.nextTiming = function (e) {
            if (void 0 === this.timingIdx[e]) throw new Error("AdTimings Error: ".concat(e, " does not have multiple timers"));
            this.timingIdx[e] = (this.timingIdx[e] + 1) % this.timings[e].length;
          }),
          (t.prototype.resetTimingIdx = function (e) {
            if (void 0 === this.timingIdx[e]) throw new Error("AdTimings Error: ".concat(e, " does not have multiple timers"));
            this.timingIdx[e] = 0;
          }),
          (t.prototype.prerollPossible = function () {
            return this.timings.preroll;
          }),
          t
        );
      })();
      var D = a(902);
      const B = function () {
        var e = new URL(window.location.href);
        e.hash = "";
        var t = [];
        return (
          e.searchParams.forEach(function (e, n) {
            return t.push(n);
          }),
          t.forEach(function (t) {
            e.searchParams.delete(t);
          }),
          e.toString()
        );
      };
      var R = a(906),
        M = ["AU", "CA", "IE", "NZ", "US", "GB"],
        z = ["AT", "BE", "DK", "FI", "FR", "DE", "JA", "NO", "NL", "SA", "ES", "SE", "CH", "AE", "IT"],
        j = ["BR", "CL", "CZ", "HU", "PL", "PT", "RU", "SK", "TH"];
      function O() {
        var e = n.Z.country;
        return "US" === e ? 1.49 : M.includes(e) ? 0.49 : 0.15;
      }
      var L = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function s(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            d((i = i.apply(e, t || [])).next());
          });
        },
        N = function (e, t) {
          var n,
            i,
            o,
            r,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (r = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (r[Symbol.iterator] = function () {
                return this;
              }),
            r
          );
          function s(s) {
            return function (d) {
              return (function (s) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; r && ((r = 0), s[0] && (a = 0)), a; )
                  try {
                    if (((n = 1), i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)) return o;
                    switch (((i = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                      case 0:
                      case 1:
                        o = s;
                        break;
                      case 4:
                        return a.label++, { value: s[1], done: !1 };
                      case 5:
                        a.label++, (i = s[1]), (s = [0]);
                        continue;
                      case 7:
                        (s = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                          a = 0;
                          continue;
                        }
                        if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                          a.label = s[1];
                          break;
                        }
                        if (6 === s[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = s);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(s);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    s = t.call(e, a);
                  } catch (e) {
                    (s = [6, e]), (i = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & s[0]) throw s[1];
                return { value: s[0] ? s[1] : void 0, done: !0 };
              })([s, d]);
            };
          }
        };
      function U() {
        var e = new URL("https://api.poki.com/ads/houseads/video/vast");
        return e.searchParams.append("game_id", n.Z.gameID), e.searchParams.append("site", "".concat(n.Z.siteID)), e.href;
      }
      var G = { v_k0treo: 2.5, v_qr1wxs: 7.5, v_9diccg: 19, v_13q0xkw: 0.25, v_dn33ls: 1, v_z07u2o: 1.5, v_1400iyo: 2.25, v_9w8kxs: 3, v_ufej9c: 3.5, v_10960ao: 4.25, v_1ksbym8: 4.75, v_1ag9340: 5.25, v_1tbhh4w: 5.75, v_jjcgzk: 6.5, v_brnu9s: 7, v_1wscef4: 7.75, v_q22xhc: 8.5, v_f8irk0: 9, v_1rik45c: 9.75, v_lxhyww: 10.5, v_a9z0u8: 11, v_1yhiww0: 11.75, v_10mwg74: 12.25, v_1ji4u80: 12.75, v_wm2c5c: 13.5, v_2na6tc: 14, v_1myzri8: 14.75, v_3pzm68: 6, v_16kerr4: 6.25, v_1mdrmkg: 6.75, v_1ga0k5c: 7.25, v_5iwz5s: 8, v_12tk934: 8.25, v_1hsybr4: 8.75, v_1cj61hc: 9.25, v_y3r5kw: 9.5, v_94ow0: 10, v_15woqgw: 10.25, v_1orx4hs: 10.75, v_1d4e6f4: 11.25, v_t57ev4: 11.5, v_783hmo: 12, v_m7hkao: 12.5, v_hmo9hc: 13, v_19djnr4: 13.25, v_1twpm2o: 13.75, v_17zlou8: 14.25, v_ign1mo: 14.5, v_ccvz7k: 15, v_1f7b4sg: 15.25, v_snq4g0: 15.5, v_5wnf28: 16, v_137aozk: 16.25, v_1j0njsw: 16.75, v_1b8yx34: 17.25, v_yhhlhc: 17.5, v_25swe8: 18, v_15081z4: 18.25, v_1pje0ao: 18.75, v_1eptudc: 19.25, v_1xl28e8: 19.75, v_gfliio: 21, v_3y3sao: 22, v_ixhuyo: 22.5, v_ro52io: 23.5, v_qa73ls: 24.5, v_emo5j4: 25, v_yq5fk: 26, v_aobxts: 27, v_6shmgw: 28, v_natgqo: 28.5, v_x0f94w: 29.5, v_d2hfr4: 31, v_dch14w: 33, v_1jyadc: 34, v_8p5tz4: 36, v_fwv9xc: 37, v_c60r9c: 39, v_58awow: 40, v_bbcow: 42, v_a0x534: 43, v_hdmdq8: 45, v_2e8b28: 46, v_5nljb4: 48, v_1wr0n4: 50, v_pam1og: 0.5, v_1ipf08w: 0.75, v_1axqdj4: 1.25, v_1qr38cg: 1.75, v_15ldds: 2, v_1q248w0: 2.75, v_1eelatc: 3.25, v_1x9tou8: 3.75, v_8iam0w: 4, v_nhooow: 4.5, v_fq01z4: 5, v_w0u77k: 5.5, v_1vi5a0w: 15.75, v_orvt34: 16.5, v_dybn5s: 17, v_1q8czr4: 17.75, v_l11af4: 18.5, v_uqn2tc: 19.5, v_7zkdfk: 20, v_o7a58g: 20.5, v_vezl6o: 21.5, v_b5t88w: 23, v_4x2d4w: 24, v_xhwjk0: 25.5, v_lhw3r4: 26.5, v_tjkbuo: 27.5, v_h72ebk: 29, v_31n3sw: 30, v_64rl6o: 32, v_9lmigw: 35, v_3fdjpc: 38, v_fapfcw: 41, v_7o0lc0: 44, v_clbdvk: 47, v_ee8qv4: 49 },
        q = { "11s3rwg": 2.49, "1uhxr0g": 2.87, qr1wxs: 7.5, "15xxon4": 0.01, o6no5c: 0.02, fb0nwg: 0.04, "1etkow0": 0.05, x2aoe8: 0.06, "1wkupds": 0.07, "11i46io": 0.09, jqu60w: 0.1, "1j9e70g": 0.11, "1adr6rk": 0.13, smh69s: 0.14, "1s5179c": 0.15, "8naeps": 0.16, qekf7k: 0.18, "1px4g74": 0.19, hixeyo: 0.2, za7fgg: 0.22, "1ysrgg0": 0.23, lyqx34: 0.26, "16hwveo": 1.13, "1fdjvnk": 1.17, "2jjcao": 1.2, "1jtdds0": 1.23, t6gd1c: 1.26, "65e29s": 1.28, "1nf83r4": 1.31, wsb30g: 1.34, jgukn4: 1.38, al7ke8: 1.4, "1a3rlds": 1.41, "8datc0": 1.44, "1pn4utc": 1.47, z07u2o: 1.5, "13g1c74": 1.53, ct4bgg: 1.56, ukeby8: 1.58, mspp8g: 1.62, "1dfmpz4": 1.65, lm6m8: 1.68, icw740: 1.7, "18zt7uo": 1.73, "79cfsw": 1.76, "1oj6ha8": 1.79, "1xethj4": 1.83, "12c2yo0": 1.85, bp5xxc: 1.88, "1syzzeo": 1.91, ncow00: 1.94, "1dzlwqo": 1.97, "15ldds": 2, "10o5edc": 2.009999, a18dmo: 2.04, "1rb2f40": 2.069999, pkln28: 2.1, "1g7insw": 2.13, "12w25fk": 2.17, c954ow: 2.2, "1brp5og": 2.21, "1400iyo": 2.25, v4dips: 2.3, hsx0cg: 2.34, "18fu134": 2.37, "167xa0w": 2.41, "1f3ka9s": 2.45, "1d5n4lc": 1.01, "1uwx534": 1.03, bml8g: 1.04, i2wlq8: 1.06, "979lhc": 1.08, "18ptmgw": 1.09, "1qh3myo": 1.11, "6zcuf4": 1.12, oqmuww: 1.14, fuzuo0: 1.16, xm9v5s: 1.18, "1x4tw5c": 1.19, "1223da8": 1.21, katcsg: 1.22, bf6cjk: 1.24, "1axqdj4": 1.25, "1sp0e0w": 1.27, "15ny39c": 1.29, nwo2rk: 1.3, f112io: 1.32, "1ejl3i8": 1.33, "1pkk5c": 1.36, "1184l4w": 1.37, "1izelmo": 1.39, schkw0: 1.42, "1rv1lvk": 1.43, "17vuubk": 1.45, q4ktts: 1.46, h8xtkw: 1.48, "1yirv28": 1.51, "3xhb7k": 1.52, lorbpc: 1.54, "1l7bcow": 1.55, "1cbocg0": 1.57, "1u2ycxs": 1.59, "51foqo": 1.6, "14jzpq8": 1.61, "1mb9q80": 1.63, dx2ozk: 1.64, vocphc: 1.66, "1v6wqgw": 1.67, "10467ls": 1.69, "1hvg83k": 1.71, "9h96v4": 1.72, r8j7cw: 1.74, "1qr38cg": 1.75, "16rwgsg": 1.77, p0mgao: 1.78, g4zg1s: 1.8, "1fnjh1c": 1.81, xw9gjk: 1.82, "2tixog": 1.84, kksy68: 1.86, "1k3cz5s": 1.87, "1b7pyww": 1.89, tgfyf4: 1.9, "5levi8": 1.92, "153ywhs": 1.93, "1mv8wzk": 1.95, eh1vr4: 1.96, w8bw8w: 1.98, iwvdvk: 2.02, "1iffev4": 2.029999, "19jsem8": 2.049999, rsie4g: 2.06, "7tbmkg": 2.08, "17bvnk0": 2.089999, "1p35o1s": 2.11, goymtc: 2.12, "1xysoao": 2.15, "3di4g0": 2.16, l4s4xs: 2.18, "1knc5xc": 2.19, u0f56o: 2.22, "1tiz668": 2.23, "4hghz4": 2.24, m8qigw: 2.26, dd3i80: 2.28, "1cvnj7k": 2.29, "1umxjpc": 2.31, "1mzuo": 2.32, zk70u8: 2.33, "1hbh1c0": 2.35, "8xa03k": 2.36, qok0lc: 2.38, "1q741kw": 2.39, "6pd91c": 2.4, ogn9j4: 2.42, "1wuuark": 2.47, k0treo: 2.5, "1jjdse8": 2.51, swgrnk: 2.54, "162xhc0": 2.57, fg0glc: 2.6, l11af4: 18.5, "9diccg": 19, "7zkdfk": 20, gfliio: 21, b5t88w: 23, "4x2d4w": 24, emo5j4: 25, aobxts: 27, "6shmgw": 28, "31n3sw": 30, "64rl6o": 32, dch14w: 33, "9lmigw": 35, "1yv9csg": 5.35, o42yo: 6.8, q22xhc: 8.5, d2hfr4: 31, "1np7p4w": 0.03, "1zk5j4": 0.08, av75s0: 0.12, "185ufpc": 0.17, "1h1hfy8": 0.21, "47gwlc": 0.24, d33wu8: 0.28, uudxc0: 0.3, "14tzb40": 0.33, e72adc: 0.36, "1vgwbuo": 0.39, "10e5szk": 0.41, "1i5fthc": 0.43, "1r12tq8": 0.47, pam1og: 0.5, gez1fk: 0.52, "1xot2ww": 0.55, kusjk0: 0.58, bz5jb4: 0.6, tqfjsw: 0.62, "5vegw0": 0.64, "1n58idc": 0.67, wibhmo: 0.7, "1fkyrk": 0.72, "1ipf08w": 0.75, s2hzi8: 0.78, pul8g0: 0.82, "1ghi96o": 0.85, "3nhpts": 0.88, lerqbk: 0.9, uaeqkg: 0.94, "14a04cg": 0.97, dn33ls: 1, ved43k: 1.02, zu6m80: 1.05, "1hlgmps": 1.07, qyjlz4: 1.1, "1lhay2o": 0.27, "1clnxts": 0.29, "1ucxybk": 0.31, "5bfa4g": 0.32, n2pam8: 0.34, "1ml9bls": 0.35, "1dpmbcw": 0.37, vycav4: 0.38, vls00: 0.4, imvshs: 0.42, "9r8s8w": 0.44, "199st8g": 0.45, "7jc16o": 0.48, "171w268": 0.49, "1ot62o0": 0.51, "1fxj2f4": 0.53, y691xc: 0.54, "33ij28": 0.56, "12m2k1s": 0.57, "1kdckjk": 0.59, "1t8zksg": 0.63, "15dyhvk": 0.65, nmohds: 0.66, er1h4w: 0.68, "1e9li4g": 0.69, "1w0vim8": 0.71, "10y4zr4": 0.73, j6uz9c: 0.74, ab7z0g: 0.76, "19ts000": 0.77, "1rl20hs": 0.79, "83b7y8": 0.8, "17lv8xs": 0.81, "1pd59fk": 0.83, gyy874: 0.84, yq88ow: 0.86, "1y8s9og": 0.87, "1361qtc": 0.89, "1kxbrb4": 0.91, "1c1or28": 0.93, "1tsyrk0": 0.95, "4rg3cw": 0.96, miq3uo: 0.98, "1m1a4u8": 0.99, "11x3klc": 5.05, "1nrplhc": 5.15, "1ag9340": 5.25, qh2bk0: 5.3, "14wh7gg": 5.45, w0u77k: 5.5, "7ltxj4": 5.6, kxafwg: 5.7, "1tbhh4w": 5.75, "110mw3k": 5.85, "1pfn5s0": 5.95, "3pzm68": 6, ml8074: 6.1, "1uzf1fk": 6.15, "16kerr4": 6.25, "1jvva4g": 6.35, "67vym8": 6.4, jjcgzk: 6.5, hbfpxc: 6.6, "13ij8jk": 6.65, "1mdrmkg": 6.75, p34cn4: 6.9, "1xhbdvk": 6.95, "1ihxb7k": 7.15, "1ga0k5c": 7.25, dflekg: 7.4, "1o1p6v4": 7.55, "2c1n9c": 7.6, "1wscef4": 7.75, zhp4hs: 7.9, "5iwz5s": 8, f8irk0: 9, y3r5kw: 9.5, lxhyww: 10.5, a9z0u8: 11, "783hmo": 12, m7hkao: 12.5, wm2c5c: 13.5, "2na6tc": 14, ign1mo: 14.5, snq4g0: 15.5, "5wnf28": 16, dybn5s: 17, yhhlhc: 17.5, testbid: 0, "1nz7aio": 2.43, xca9s0: 2.46, b56r5s: 2.52, obngu8: 2.58, "24jy80": 2.64, "1jedzpc": 2.67, "18au8e8": 2.73, hnx7nk: 2.76, "13v0q9s": 2.81, "10lkow": 2.96, "156gsu8": 7.05, "1tlh2io": 7.35, "1aq8ohs": 7.65, "1losn40": 7.95, "1sf0sn4": 2.55, "1eykhkw": 2.61, srgyyo: 2.7, "1yxr94w": 2.79, d83pj4: 2.84, n7p3b4: 2.9, "1dum41s": 2.93, "1iafm68": 2.99, "7vtiww": 7.2, b2outc: 7.8, "13q0xkw": 0.25, riisqo: 0.46, "1bhpkao": 0.61, cj4q2o: 0.92, "1o96vwg": 1.15, "1wav400": 1.35, "1grhukg": 1.49, "1vqvx8g": 1.99, yg8nb4: 2.14, "1lrajgg": 2.27, fl09a8: 2.44, "1h6h8n4": 2.77, "1m69xj4": 3.55, rdj01s: 4.3, "29jqww": 2.48, "1anqs5c": 2.53, "6kdgcg": 2.56, "1nu7hts": 2.59, "1wpui2o": 2.63, jvtyps: 2.66, "1sa0zy8": 2.71, "1q248w0": 2.75, "4cgpa8": 2.8, "1cqnqio": 2.85, "5gf2tc": 2.88, ec2328: 2.92, "1vlw4jk": 2.95, "9w8kxs": 3, "176vuv4": 3.05, "1kicd8g": 3.15, jbury8: 3.3, h3y0w0: 3.4, gmdxc: 3.6, ovmnls: 3.7, "15sxvy8": 3.85, "1j4eebk": 3.95, "1gwhn9c": 4.05, e22hog: 4.2, "1oo69z4": 4.35, nhooow: 4.5, "17gvg8w": 4.65, "1ksbym8": 4.75, hxwt1c: 4.9, t1gkcg: 5.1, "2221vk": 5.2, d5lt6o: 5.4, "1i7xpts": 5.55, "1g00yrk": 5.65, etjdhc: 5.8, s4zvuo: 5.9, "1c46neo": 6.05, "99rhts": 6.2, xorri8: 6.3, "1em2zuo": 6.45, "1rxji80": 6.55, umw8ao: 6.7, "192b474": 6.85, brnu9s: 7, x7ah34: 2.62, "11n3z7k": 2.65, b06ygw: 2.68, "1aiqzgg": 2.69, "8sa7eo": 2.72, qjk7wg: 2.74, zf785c: 2.78, m3qps0: 2.82, "1lmaqrk": 2.83, uzdq0w: 2.86, "14yz3sw": 2.89, "1mq94ao": 2.91, w3c3k0: 2.94, "10j5log": 2.97, irvl6o: 2.98, yb8um8: 3.1, "60e9kw": 3.2, "1eelatc": 3.25, "1rq1t6o": 3.35, "13b1ji8": 3.45, ufej9c: 3.5, "18utf5s": 3.65, "1x9tou8": 3.75, bk658g: 3.8, wxavpc: 3.9, "8iam0w": 4, ltr4e8: 4.099999, "1u7y5mo": 4.15, "10960ao": 4.25, "2yiqdc": 4.4, "1bcprls": 4.45, "1vvvpxc": 4.55, a686bk: 4.6, yl8g00: 4.7, "4mgao0": 4.8, "1d0nbwg": 4.85, "1qc3u9s": 4.95, fq01z4: 5, watslc: 7.1, l7a1a8: 7.3, zmox6o: 7.45, oe5d6o: 7.7, "18dc4qo": 7.85, "94ow0": 10, t57ev4: 11.5, hmo9hc: 13, ccvz7k: 15, orvt34: 16.5, "25swe8": 18, uqn2tc: 19.5, "3y3sao": 22, yq5fk: 26, h72ebk: 29, "1jyadc": 34, testBid: 50 },
        F = { hgfim8: "Amazon - DistrictM", qc2iv4: "Amazon - Magnite", "183cjcw": "Amazon - AppNexus", "8ksidc": "Amazon - OpenX", "1s2jaww": "Amazon - PubMatic", "1pumjuo": "Amazon - EMX", "12jknpc": "Amazon - Conversant UAM", "1kauo74": "Amazon - Amobee DSP", "15bglj4": "Amazon - PubMatic UAM APAC", "5swkjk": "Amazon - PubMatic UAM EU", "1d32f4": "Amazon - Simpli.fi", ksan7k: "Amazon - Index Exchange", urw0zk: "Amazon - Smaato", "1dn4f0g": "Amazon - AdGeneration", vvueio: "Amazon - DMX", "1veefi8": "Amazon - Yieldmo", "1i2xx4w": "Amazon - Yahoo Japan", rg0we8: "Amazon - UnrulyX_SSP_APS", y3r5kw: "Amazon - Verizon Media Group", "1xmb6kg": "Amazon - GumGum UAM", "1t6hog0": "Amazon - Acuity", "1n2qm0w": "Amazon - Sharethrough", j4d2ww: "Amazon - EMX UAM", "1imx3wg": "Amazon - LoopMe_UAM", z7pj40: "Amazon - Pulsepoint", p845c0: "Amazon - SmartRTB+" };
      var V,
        H = [],
        Q = function (e) {
          return H.includes(e) || H.includes("www.".concat(e)) || e.includes("game");
        };
      function W(e) {
        return function (t, n) {
          var i,
            o,
            r,
            a = null === (o = null === (i = null == n ? void 0 : n.meta) || void 0 === i ? void 0 : i.advertiserDomains) || void 0 === o ? void 0 : o.find(Q);
          return a
            ? (V || (V = []),
              V.push(
                ""
                  .concat(e, ":")
                  .concat(a, ":")
                  .concat(t.toFixed(4), ":")
                  .concat((null === (r = null == n ? void 0 : n.meta) || void 0 === r ? void 0 : r.primaryCatId) || "-")
              ),
              console.warn("Blocked ad: ", n),
              0)
            : t;
        };
      }
      function X() {
        var e;
        return V && (e = V.join(";")), (V = void 0), e;
      }
      const J = function () {
        return "undefined" != typeof navigator && /MSIE \\d|Trident.*rv:/i.test(navigator.userAgent);
      };
      var K = { 1: "eNjDw1AVTr", 3: "AfRKClvdYk", 5: "UprdYKe74r", 6: "tBCJC9E6Y4", 7: "AfRKClvdYk", 8: "tJ44vpLpuM", 10: "rKV8rMwiwk", 11: "SvK8BH5qS5", 12: "SpfIMxnWTS", 13: "ysxIcmt3tW", 14: "gLmtGS4aUq", 15: "RU6ebIFLw9", 16: "r9G4tVMYw7", 17: "SgcDa5B8s1", 18: "AfRKClvdYk", 19: "DNZX8XdJXV", 20: "39o4YUyZTX", 21: "5sb2HFpz5a", 22: "pgXzCJZipE", 23: "Oani8EAGI9", 24: "IzCeh7d7vW", 30: "9ALgxEyGXU", 31: "lBzSdVGY8F", 37: "mis9Mt4np4", 38: "AfRKClvdYk", 43: "AfRKClvdYk", 46: "AfRKClvdYk", 47: "21OybbiIdc", 48: "AfRKClvdYk", 49: "CMVoMvvEmu", 50: "IoQrhRb3wU", 52: "AfRKClvdYk", 53: "AfRKClvdYk" };
      var Y = { skyscraper: { 1: "eexq7SUa6daeQrPF6q1CaKZ0", 10: "SSZzGHt3d4BrOdVUug1ypxji", 11: "OXc0ZJDJIcRgGcIta8mTUQSZ", 12: "ulACVGPjP002tSfhDGRApuub", 13: "c7FldnCsd9Mtcr7PgBFGKWEQ", 14: "KJouWQMjZwvE8fxw4mAvGopZ", 15: "ilNkOqBMO6EGbQwrZtCMHzeJ", 16: "Kg24ec1AyTvzJ6I3Cji8lqzx", 17: "iqvpcyepSMCVCsJfKu4JQGwr", 18: "es9ztDrPZDW883VHbK2gUfkQ", 19: "pvXQE41GXKGsW5Li0OSQavwT", 20: "MCy638sYvzVbsrvcPau6lABN", 21: "NkJeV6CuMlt41iJWcgnmMSDN", 22: "fjKznUvVWlp6TBxuSsEkQF8H", 23: "5tJM2ZFmNf7gii6KVS6msGc4", 24: "xZUYMFw1zGuRzFd6DRl88Pwk", 3: "xNmhWWy88VtzOGfderrtgDBb", 30: "KO0gUA5iJIsleK9a941H0pW1", 31: "wo0KU1WR11jNFxoy121ciQj8", 37: "areVtONg11YNRQin7R2sveKy", 47: "uzLaOEe8yqB9eWZuxdnwyawr", 49: "ZYaqiQw00NSTBGJ4HacifENM", 5: "qe5Tc3N2MO3daALoTdIaTmSA", 50: "NZv1ui2F1tlQ6PQQi7umnFht", 6: "xbx8OLCAgjm0igkmFIBw8n6E", 8: "4vYDfNOQagnuwg9REGNWGv83" }, rectangle: { 1: "Ka3KvQx9svu71CJoRtZlwFY9", 10: "9o5dMBQZX9bi2OsvTpc5j0pO", 11: "gwL6nB1Twy25gpWQyEP2cVMJ", 12: "yYUjIY5L6w2ukD5FxCIVydgG", 13: "PoqRXAEYHKTdqNY22lIFTXRp", 14: "eAudypoJLJEtFZz3zzvKYoAu", 15: "4b416MUjJEdZm5nDKwvn2ELO", 16: "H6jadzxgw0uRVRHHadZ19Zvp", 17: "5zG8Ioh6paBscdCgUQTQE0eu", 18: "OgMX0PlDPabF3BHOgxDbeH2n", 19: "uzK7eCjSVYDp4KvJEg6mC59r", 20: "yapIY909O3cgcD8QDAEehtkb", 21: "8KT1bEUCcvASfq0LXWN2nVe0", 22: "3LKyDpL1Xt7YactKFGxFpJO7", 23: "GMaOiZl6YeMzYckusbO4Cdh1", 24: "5iZnMqviynz6ndlaikqhMy73", 3: "lcpgaTLqkd6gRi8AVtVr0gLe", 30: "xWGhFW6bvMf9LuGYqQOhoD2h", 31: "GqMz69ka237zrG4H8bpMuYTy", 37: "lYrk2xnelCQrhwmO43AtjErF", 47: "PDA12fEHtYIVr6A12fZ86JQH", 49: "RYn9wxADCbBgKeo8Lyxx1ZHE", 5: "N3wOmgPMiK6RaGNYjeqOzuHU", 50: "KwEXqYIZG8fOlJyePKTBiJFs", 6: "fJMv7XtKbfsRbzkO42fkS3Dr", 8: "915o8cwxF5rzfQsA1Op6hhQV" }, leaderboard: { 16: "ZPwouCq7eD5kRnZjX5ct8ZIT", 1: "sysnuL1RKPIEL98w2l6lPc1w", 31: "FgHUFCWMZCCJaHKMF0LyIgSI", 23: "eyGVQGQkrHwJRcLoBzepUHW2", 14: "PeRnr3pCNPpCgJAOF3yuQCGg", 37: "5DXFSCYcaAxAXBuZVpTHAx59", 30: "MpHDUxZ178U65yD3l878z5m1", 47: "oYQGytr0CbDDQqIooggCsNTO", 18: "na3uJK58s0vgb7NyaPR6R5P8", 50: "m3hskIBrmloAWHD7i27q2ZPN", 3: "PIsUL8EJvXXA1thcFkCPWdhi", 19: "cluKVL1thRZlb3bsK7oVadOZ", 20: "8PPLwmi2mra9HNTdhftQOcC4", 8: "cCQE4L5S1j9BmKeywuonM6hM", 11: "uvkuS4QYv01YvuGoJvqa9xnz", 12: "GyG0XHcaahKmsXbcjDlgtjCQ", 17: "0ut5aHlZRj5dNfTKo9bM8nXj", 10: "TzMO5iGdP4vt7BIOAQ2e3kpU", 49: "f1vArQjoEfX9QdjK2TvBjnDv", 22: "92kdBH3AxvPr1pqZ1h1TYkjN", 13: "Y6Tl87JTAn9T1B8rq523UDeH", 15: "B3HlKKIdq8mGyoMGkjT4m9RD", 24: "nfS0DrtZtJ6eZVNqsWqyVVFS", 5: "gr33qXeArxdqi0Sk4i50TmE3", 6: "ACn0XyU2KP2l94N0HMf1vhlu", 21: "o2PQGGTxXO92in2mASt624tn" }, mobile_leaderboard: { 16: "5X98AYdO2OAIb2m6ThLjCGR5", 1: "nVDrFwfkiRg5Tb426duBnat4", 31: "H8tpygATsgJwk7qJzh612B0I", 23: "07iMij2dOIgPHzM7JFv5fYBN", 14: "XCQLWETuRkKmiN9jCOu01NOp", 37: "419OVNbGzLJn7wlh5jAiUFLA", 30: "ErE9N4WozhjbawA6HFN2hC0V", 47: "4aBsJtSPEivB07hrlV6nTgj7", 18: "waksL4h4X7gn2TU88OgeZHHl", 50: "Wi3BRMWcCUdKZO7leMhtCfdp", 3: "KQ3P2qVndkjlesGkzM5Rknma", 19: "OCsZIZrTXKyprJ8AKiI7e0Jl", 20: "h2aMA8KeZ3tHtfRgwT2xCHUJ", 8: "igvEPDF1ft8FBFQ2aVhCS0BG", 11: "I1ZnJzEjRg75BZikcGMWxMTF", 12: "ZrnW76G2qvB5pZx8VvOanqQQ", 17: "B4f8YQfcg3WWl5k9pAnqVCfm", 10: "cfNKknbTZxcxhNZCV2fWr4Ne", 49: "ziBY1mSHWj9UTGcq9Tbzo5J4", 22: "ImlLSALVeaqvi7y2e6qdBDkw", 13: "NUx9OmJMlzbkv39hUX5FOnXv", 15: "RxDq1opgeO5VXEQRPtdESHaX", 24: "aswJxUjNpHyiEunaOUBGbajK", 5: "1M1EIJhXdwEoJ8utYTDjj0DD", 6: "gExvCBm9TEaw4jV6kRzEuDxq", 21: "wNOOjIhadhe2s1jgq3LppWm0" }, billboard: { 16: "dr2IuY7Yb8POz9tbezoJUFey", 1: "WhhFn8GL9nBEK2z9psbtD1SV", 31: "JNfSIPKKAkfNgzkg3hrGlGEV", 23: "xvsrS9J4xrRGjlus3pKkIatI", 14: "4BL4a74RRMoiRu9D8jKAfdij", 37: "f8B8j7tjb1YA6lAcnHSRBlfI", 30: "vW1ODUqFt2jDk5laYsVh9PIF", 47: "R7GldiHZEWYFwdJq936YnbZW", 18: "83noJ3tAhRyFWDlS1iXKuRGa", 50: "WNu1woAb2OHf3KncItSAnYnm", 3: "Ydwhf5DPoJBinldgPdkD9okm", 19: "3X7dNFFm484Xx6aD6nBF0k43", 20: "qzLmNwSljh25A7s9HXQYVYtr", 8: "tXWpZaKO291ytd8kfiy3NWlz", 11: "0ePnxLUMZ8tKBxImFp2i1J4g", 12: "Y1HuzbhxRv1UmUhd8dUtONQI", 17: "lqSabVDWqYWy8jpJH57BK1vS", 10: "zVEWUpJuNfEipDrTPGwniMP3", 49: "B2srINo0hBkijyowlq4FQk7c", 22: "Ljcylng1YDm5yAqEpiomGazZ", 13: "hYTGyFgCiCUVtNOx56TkKexo", 15: "5xkx65Y9eEhPen8gqIuOFQRZ", 24: "ZH3Odxmz8QF49ZoZ16mPs08T", 5: "Ax2noHPv7iRdW6DM26NxmtFT", 6: "mZEu6Z0wDTq4UAHQoyUosm5y", 21: "7bAgpwCip0dSf6bJXgBO6nY1" } };
      var $,
        ee = function () {
          return (
            (ee =
              Object.assign ||
              function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            ee.apply(this, arguments)
          );
        },
        te = function (e, t, n) {
          if (n || 2 === arguments.length) for (var i, o = 0, r = t.length; o < r; o++) (!i && o in t) || (i || (i = Array.prototype.slice.call(t, 0, o)), (i[o] = t[o]));
          return e.concat(i || Array.prototype.slice.call(t));
        },
        ne = "rewarded",
        ie = "video",
        oe = !1,
        re = {},
        ae = !1,
        se = function () {
          return oe;
        },
        de = function () {
          return ae;
        },
        ce = function (e, t) {
          var o, r, a, s, d;
          if ((void 0 === $ && ((o = t), (s = n.Z.country), (d = null === (a = null === (r = null == o ? void 0 : o[s]) || void 0 === r ? void 0 : r.video) || void 0 === a ? void 0 : a.amazon), ($ = !!d && Math.random() > d)), !$ && ((re = e), window.apstag)))
            try {
              var c = function (e) {
                i.Z.debug && console.log("Configure A9 with APS CCPA Privacy mode:", "".concat(n.Z.ccpaApplies ? "on" : "off"), e);
                var t = ee(ee(ee({ pubID: "e32f1423-28bc-43ed-8ab0-5ae6b4449cf8", adServer: "googletag", videoAdServer: "GAM" }, n.Z.gdprApplies ? { gdpr: { cmpTimeout: 1e4 } } : {}), n.Z.ccpaApplies ? { params: { aps_privacy: e || "1--" } } : {}), { signals: re });
                window.apstag.init(t, function () {
                  oe = !0;
                });
              };
              n.Z.ccpaApplies
                ? window.__uspapi("uspPing", 1, function () {
                    window.__uspapi("getUSPData", 1, function (e, t) {
                      var n;
                      if (t) {
                        var i = (null === (n = null == e ? void 0 : e.uspString) || void 0 === n ? void 0 : n.charAt(2)) || "N";
                        "-" === i && (i = "N"), c("1Y".concat(i));
                      } else c("1YN");
                    });
                  })
                : c("1--");
            } catch (e) {
              (oe = !1), (window.apstag = void 0);
            }
        },
        le = function (e, t) {
          var i = ["US", "CA", "AU"],
            o = { "728x90": "/".concat(S, "/").concat(n.Z.device, "_ingame_728x90/").concat(n.Z.siteID, "_").concat(n.Z.device, "_ingame_728x90"), "300x250": "/".concat(S, "/").concat(n.Z.device, "_ingame_300x250/").concat(n.Z.siteID, "_").concat(n.Z.device, "_ingame_300x250"), "970x250": "/".concat(S, "/").concat(n.Z.device, "_ingame_970x250/").concat(n.Z.siteID, "_").concat(n.Z.device, "_ingame_970x250"), "160x600": "/".concat(S, "/").concat(n.Z.device, "_ingame_160x600/").concat(n.Z.siteID, "_").concat(n.Z.device, "_ingame_160x600"), "320x50": "/".concat(S, "/").concat(n.Z.device, "_ingame_320x50/").concat(n.Z.siteID, "_").concat(n.Z.device, "_ingame_320x50"), "728x90_external": "/".concat(S, "/external_").concat(n.Z.device, "_display_ingame/external_").concat(n.Z.device, "_ingame_728x90"), "300x250_external": "/".concat(S, "/external_").concat(n.Z.device, "_display_ingame/external_").concat(n.Z.device, "_ingame_300x250"), "970x250_external": "/".concat(S, "/external_").concat(n.Z.device, "_display_ingame/external_").concat(n.Z.device, "_ingame_970x250"), "160x600_external": "/".concat(S, "/external_").concat(n.Z.device, "_display_ingame/external_").concat(n.Z.device, "_ingame_160x600"), "320x50_external": "/".concat(S, "/external_").concat(n.Z.device, "_display_ingame/external_").concat(n.Z.device, "_ingame_320x50") },
            r = function (e) {
              var t = J() || (0, w.Z)() || (0, E.Z)() ? ["video/mp4", "application/javascript"] : ["video/mp4", "video/webm", "video/ogg", "application/javascript"],
                i = ee(ee({ mimes: t, minduration: 0, maxduration: 15, protocols: [2, 3, 5, 6, 7, 8, 11, 12, 13, 14], w: 640, h: 480, placement: 1, linearity: 1, playbackmethod: [1, 5] }, e ? {} : { skip: 1, skipafter: 5 }), { boxingallowed: 1, pos: 1, api: [2, 7, 8] }),
                o = "";
              e && "desktop" === n.Z.device ? (o = "4725015@640x360") : e && "desktop" !== n.Z.device ? (o = "4725013@640x360") : e || "desktop" !== n.Z.device ? e || "desktop" === n.Z.device || (o = "4725011@640x360") : (o = "4725008@640x360");
              var r;
              return {
                bids: [
                  { bidder: "appnexus", params: { placementId: e ? 13184309 : 13184250, supplyType: "web" } },
                  { bidder: "openx", params: { delDomain: "poki-d.openx.net", unit: "540105196" } },
                  { bidder: "ix", params: { siteId: "436284", video: {} } },
                  { bidder: "richaudience", params: { pid: ((r = n.Z.siteID), K[r] || "MP_gIE1VDieUi"), supplyType: "site" } },
                  { bidder: "onetag", params: { pubId: "6da09f566a9dc06" } },
                  { bidder: "rubicon", params: { accountId: "18608", siteId: "266914", zoneId: "1322034", position: "atf", video: { size_id: 204 } } },
                  { bidder: "pubmatic", params: { publisherId: "156838", adSlot: o } },
                  { bidder: "sharethrough", params: { pkey: "vRjLnZDA86biUVrjIKVGxq3x" } },
                  { bidder: "triplelift", params: { inventoryCode: "Poki_Instream_Prebid", video: ee({}, i) } },
                ],
                mediaTypes: { video: ee({ context: "instream", playerSize: [640, 480], plcmt: 1 }, i) },
              };
            },
            a = r(!0),
            s = r(!1),
            d = [
              { code: ie, mediaTypes: s.mediaTypes, bids: te([], s.bids, !0) },
              { code: ne, mediaTypes: a.mediaTypes, bids: te([], a.bids, !0) },
              {
                code: o["728x90"],
                mediaTypes: { banner: { sizes: [[728, 90]] } },
                bids: te(
                  te(
                    [
                      { bidder: "appnexus", params: { placementId: "12940427" } },
                      { bidder: "openx", params: { unit: "539859872", delDomain: "poki-d.openx.net" } },
                      { bidder: "ix", params: { siteId: "268177", size: [728, 90] } },
                      { bidder: "pubmatic", params: { publisherId: "156838", adSlot: "1374895@728x90" } },
                      { bidder: "rubicon", params: { accountId: "18608", siteId: "204596", zoneId: "1008080" } },
                      { bidder: "onetag", params: { pubId: "6da09f566a9dc06" } },
                      { bidder: "richaudience", params: { pid: "1V6a2fgLvX", supplyType: "site" } },
                    ],
                    i.includes(n.Z.country) ? [{ bidder: "33across", params: { siteId: "aRJKVCig8r7ikZaKj0P0Le", productId: "siab" } }] : [],
                    !0
                  ),
                  [
                    { bidder: "sharethrough", params: { pkey: Y.leaderboard[n.Z.siteID] || Y.leaderboard[3] } },
                    { bidder: "triplelift", params: { inventoryCode: "Poki_728x90_Prebid" } },
                    { bidder: "adagio", params: { organizationId: "1155", site: "poki-com", useAdUnitCodeAsPlacement: !0, useAdUnitCodeAsAdUnitElementId: !0, environment: "desktop", pagetype: "game", category: "games" } },
                  ],
                  !1
                ),
              },
              {
                code: o["300x250"],
                mediaTypes: { banner: { sizes: [[300, 250]] } },
                bids: te(
                  te(
                    [
                      { bidder: "appnexus", params: { placementId: "12935252" } },
                      { bidder: "openx", params: { unit: "539859873", delDomain: "poki-d.openx.net" } },
                      { bidder: "ix", params: { siteId: "268178", size: [300, 250] } },
                      { bidder: "pubmatic", params: { publisherId: "156838", adSlot: "1374896@300x250" } },
                      { bidder: "rubicon", params: { accountId: "18608", siteId: "204596", zoneId: "1008080" } },
                      { bidder: "onetag", params: { pubId: "6da09f566a9dc06" } },
                      { bidder: "richaudience", params: { pid: "pKqNt5LyvF", supplyType: "site" } },
                    ],
                    i.includes(n.Z.country) ? [{ bidder: "33across", params: { siteId: "aRJKVCig8r7ikZaKj0P0Le", productId: "siab" } }] : [],
                    !0
                  ),
                  [
                    { bidder: "sharethrough", params: { pkey: Y.skyscraper[n.Z.siteID] || Y.skyscraper[3] } },
                    { bidder: "triplelift", params: { inventoryCode: "Poki_300x250_Prebid" } },
                    { bidder: "adagio", params: { organizationId: "1155", site: "poki-com", useAdUnitCodeAsPlacement: !0, useAdUnitCodeAsAdUnitElementId: !0, environment: "desktop", pagetype: "game", category: "games" } },
                  ],
                  !1
                ),
              },
              {
                code: o["970x250"],
                mediaTypes: { banner: { sizes: [[970, 250]] } },
                bids: te(
                  te(
                    [
                      { bidder: "appnexus", params: { placementId: "20595278" } },
                      { bidder: "openx", params: { unit: "543540497", delDomain: "poki-d.openx.net" } },
                      { bidder: "ix", params: { siteId: "597527", size: [970, 250] } },
                      { bidder: "pubmatic", params: { publisherId: "156838", adSlot: "3344351@970x250" } },
                      { bidder: "onetag", params: { pubId: "6da09f566a9dc06" } },
                      { bidder: "richaudience", params: { pid: "yYyae7vnIh", supplyType: "site" } },
                    ],
                    i.includes(n.Z.country) ? [{ bidder: "33across", params: { siteId: "aRJKVCig8r7ikZaKj0P0Le", productId: "siab" } }] : [],
                    !0
                  ),
                  [
                    { bidder: "sharethrough", params: { pkey: Y.rectangle[n.Z.siteID] || Y.rectangle[3] } },
                    { bidder: "triplelift", params: { inventoryCode: "Poki_970x250_Prebid" } },
                    { bidder: "adagio", params: { organizationId: "1155", site: "poki-com", useAdUnitCodeAsPlacement: !0, useAdUnitCodeAsAdUnitElementId: !0, environment: "desktop", pagetype: "game", category: "games" } },
                  ],
                  !1
                ),
              },
              {
                code: o["160x600"],
                mediaTypes: { banner: { sizes: [[160, 600]] } },
                bids: te(
                  te(
                    [
                      { bidder: "appnexus", params: { placementId: "12940425" } },
                      { bidder: "openx", params: { unit: "539859871", delDomain: "poki-d.openx.net" } },
                      { bidder: "ix", params: { siteId: "268175", size: [160, 600] } },
                      { bidder: "pubmatic", params: { publisherId: "156838", adSlot: "1374893@160x600" } },
                      { bidder: "rubicon", params: { accountId: "18608", siteId: "204596", zoneId: "1008080" } },
                      { bidder: "onetag", params: { pubId: "6da09f566a9dc06" } },
                      { bidder: "richaudience", params: { pid: "rAEnPimPzC", supplyType: "site" } },
                    ],
                    i.includes(n.Z.country) ? [{ bidder: "33across", params: { siteId: "aRJKVCig8r7ikZaKj0P0Le", productId: "siab" } }] : [],
                    !0
                  ),
                  [
                    { bidder: "sharethrough", params: { pkey: Y.billboard[n.Z.siteID] || Y.billboard[3] } },
                    { bidder: "triplelift", params: { inventoryCode: "Poki_160x600_Prebid" } },
                    { bidder: "adagio", params: { organizationId: "1155", site: "poki-com", useAdUnitCodeAsPlacement: !0, useAdUnitCodeAsAdUnitElementId: !0, environment: "desktop", pagetype: "game", category: "games" } },
                  ],
                  !1
                ),
              },
              {
                code: o["320x50"],
                mediaTypes: { banner: { sizes: [[320, 50]] } },
                bids: te(
                  te(
                    [
                      { bidder: "appnexus", params: { placementId: "20595224" } },
                      { bidder: "openx", params: { unit: "543540495", delDomain: "poki-d.openx.net" } },
                      { bidder: "ix", params: { siteId: "597529", size: [320, 50] } },
                      { bidder: "pubmatic", params: { publisherId: "156838", adSlot: "3344350@320x50" } },
                      { bidder: "rubicon", params: { accountId: "18608", siteId: "204596", zoneId: "1008080" } },
                      { bidder: "onetag", params: { pubId: "6da09f566a9dc06" } },
                      { bidder: "richaudience", params: { pid: "1DP5EtcOip", supplyType: "site" } },
                    ],
                    i.includes(n.Z.country) ? [{ bidder: "33across", params: { siteId: "aRJKVCig8r7ikZaKj0P0Le", productId: "siab" } }] : [],
                    !0
                  ),
                  [
                    { bidder: "sharethrough", params: { pkey: Y.skyscraper[n.Z.siteID] || Y.skyscraper[3] } },
                    { bidder: "triplelift", params: { inventoryCode: "Poki_320x50_Prebid" } },
                    { bidder: "adagio", params: { organizationId: "1155", site: "poki-com", useAdUnitCodeAsPlacement: !0, useAdUnitCodeAsAdUnitElementId: !0, environment: "desktop", pagetype: "game", category: "games" } },
                  ],
                  !1
                ),
              },
              {
                code: o["728x90_external"],
                mediaTypes: { banner: { sizes: [[728, 90]] } },
                bids: te(
                  te(
                    [
                      { bidder: "appnexus", params: { placementId: "20973406" } },
                      { bidder: "openx", params: { unit: "543885656", delDomain: "poki-d.openx.net" } },
                      { bidder: "ix", params: { siteId: "268177", placementId: "625562", size: [728, 90] } },
                      { bidder: "pubmatic", params: { publisherId: "156838", adSlot: "3457872" } },
                      { bidder: "rubicon", params: { accountId: "18608", siteId: "362566", zoneId: "1962680-2" } },
                      { bidder: "onetag", params: { pubId: "6da09f566a9dc06" } },
                      { bidder: "richaudience", params: { pid: "MP_gIE1VDieUi", supplyType: "site" } },
                    ],
                    i.includes(n.Z.country) ? [{ bidder: "33across", params: { siteId: "aRJKVCig8r7ikZaKj0P0Le", productId: "siab" } }] : [],
                    !0
                  ),
                  [
                    { bidder: "sharethrough", params: { pkey: Y.billboard[n.Z.siteID] || Y.billboard[3] } },
                    { bidder: "triplelift", params: { inventoryCode: "Poki_728x90_Prebid" } },
                    { bidder: "adagio", params: { organizationId: "1155", site: "poki-com", useAdUnitCodeAsPlacement: !0, useAdUnitCodeAsAdUnitElementId: !0, environment: "desktop", pagetype: "game", category: "games" } },
                  ],
                  !1
                ),
              },
              {
                code: o["300x250_external"],
                mediaTypes: { banner: { sizes: [[300, 250]] } },
                bids: te(
                  te(
                    [
                      { bidder: "appnexus", params: { placementId: "20973408" } },
                      { bidder: "openx", params: { unit: "543885657", delDomain: "poki-d.openx.net" } },
                      { bidder: "ix", params: { siteId: "625564", size: [300, 250] } },
                      { bidder: "pubmatic", params: { publisherId: "156838", adSlot: "3457874" } },
                      { bidder: "rubicon", params: { accountId: "18608", siteId: "362566", zoneId: "1962680-15" } },
                      { bidder: "onetag", params: { pubId: "6da09f566a9dc06" } },
                      { bidder: "richaudience", params: { pid: "MP_gIE1VDieUi", supplyType: "site" } },
                    ],
                    i.includes(n.Z.country) ? [{ bidder: "33across", params: { siteId: "aRJKVCig8r7ikZaKj0P0Le", productId: "siab" } }] : [],
                    !0
                  ),
                  [
                    { bidder: "sharethrough", params: { pkey: Y.mobile_leaderboard[n.Z.siteID] || Y.mobile_leaderboard[3] } },
                    { bidder: "triplelift", params: { inventoryCode: "Poki_300x250_Prebid" } },
                    { bidder: "adagio", params: { organizationId: "1155", site: "poki-com", useAdUnitCodeAsPlacement: !0, useAdUnitCodeAsAdUnitElementId: !0, environment: "desktop", pagetype: "game", category: "games" } },
                  ],
                  !1
                ),
              },
              {
                code: o["970x250_external"],
                mediaTypes: { banner: { sizes: [[970, 250]] } },
                bids: te(
                  te(
                    [
                      { bidder: "appnexus", params: { placementId: "20973415" } },
                      { bidder: "openx", params: { unit: "543885650", delDomain: "poki-d.openx.net" } },
                      { bidder: "ix", params: { siteId: "625560", size: [970, 250] } },
                      { bidder: "pubmatic", params: { publisherId: "156838", adSlot: "3457879" } },
                      { bidder: "rubicon", params: { accountId: "18608", siteId: "362566", zoneId: "1962680-57" } },
                      { bidder: "onetag", params: { pubId: "6da09f566a9dc06" } },
                      { bidder: "richaudience", params: { pid: "MP_gIE1VDieUi", supplyType: "site" } },
                    ],
                    i.includes(n.Z.country) ? [{ bidder: "33across", params: { siteId: "aRJKVCig8r7ikZaKj0P0Le", productId: "siab" } }] : [],
                    !0
                  ),
                  [
                    { bidder: "sharethrough", params: { pkey: Y.leaderboard[n.Z.siteID] || Y.leaderboard[3] } },
                    { bidder: "triplelift", params: { inventoryCode: "Poki_970x250_Prebid" } },
                    { bidder: "adagio", params: { organizationId: "1155", site: "poki-com", useAdUnitCodeAsPlacement: !0, useAdUnitCodeAsAdUnitElementId: !0, environment: "desktop", pagetype: "game", category: "games" } },
                  ],
                  !1
                ),
              },
              {
                code: o["160x600_external"],
                mediaTypes: { banner: { sizes: [[160, 600]] } },
                bids: te(
                  te(
                    [
                      { bidder: "appnexus", params: { placementId: "20973407" } },
                      { bidder: "openx", params: { unit: "543885653", delDomain: "poki-d.openx.net" } },
                      { bidder: "ix", params: { siteId: "625563", size: [160, 600] } },
                      { bidder: "pubmatic", params: { publisherId: "156838", adSlot: "3457877" } },
                      { bidder: "rubicon", params: { accountId: "18608", siteId: "362566", zoneId: "1962680-9" } },
                      { bidder: "onetag", params: { pubId: "6da09f566a9dc06" } },
                      { bidder: "richaudience", params: { pid: "MP_gIE1VDieUi", supplyType: "site" } },
                    ],
                    i.includes(n.Z.country) ? [{ bidder: "33across", params: { siteId: "aRJKVCig8r7ikZaKj0P0Le", productId: "siab" } }] : [],
                    !0
                  ),
                  [
                    { bidder: "sharethrough", params: { pkey: Y.rectangle[n.Z.siteID] || Y.rectangle[3] } },
                    { bidder: "triplelift", params: { inventoryCode: "Poki_160x600_Prebid" } },
                    { bidder: "adagio", params: { organizationId: "1155", site: "poki-com", useAdUnitCodeAsPlacement: !0, useAdUnitCodeAsAdUnitElementId: !0, environment: "desktop", pagetype: "game", category: "games" } },
                  ],
                  !1
                ),
              },
              {
                code: o["320x50_external"],
                mediaTypes: { banner: { sizes: [[320, 50]] } },
                bids: te(
                  te(
                    [
                      { bidder: "appnexus", params: { placementId: "20973413" } },
                      { bidder: "openx", params: { unit: "543885649", delDomain: "poki-d.openx.net" } },
                      { bidder: "ix", params: { siteId: "625559", size: [320, 50] } },
                      { bidder: "pubmatic", params: { publisherId: "156838", adSlot: "3457875" } },
                      { bidder: "rubicon", params: { accountId: "18608", siteId: "362566", zoneId: "1962680-43" } },
                      { bidder: "onetag", params: { pubId: "6da09f566a9dc06" } },
                      { bidder: "richaudience", params: { pid: "MP_gIE1VDieUi", supplyType: "site" } },
                    ],
                    i.includes(n.Z.country) ? [{ bidder: "33across", params: { siteId: "aRJKVCig8r7ikZaKj0P0Le", productId: "siab" } }] : [],
                    !0
                  ),
                  [
                    { bidder: "sharethrough", params: { pkey: Y.mobile_leaderboard[n.Z.siteID] || Y.mobile_leaderboard[3] } },
                    { bidder: "triplelift", params: { inventoryCode: "Poki_320x50_Prebid" } },
                    { bidder: "adagio", params: { organizationId: "1155", site: "poki-com", useAdUnitCodeAsPlacement: !0, useAdUnitCodeAsAdUnitElementId: !0, environment: "desktop", pagetype: "game", category: "games" } },
                  ],
                  !1
                ),
              },
            ],
            c = ee(
              ee(
                {
                  debug: !1,
                  enableSendAllBids: !0,
                  usePrebidCache: !0,
                  bidderTimeout: 1500,
                  priceGranularity: {
                    buckets: [
                      { precision: 2, min: 0.01, max: 3, increment: 0.01 },
                      { precision: 2, min: 3, max: 8, increment: 0.05 },
                      { precision: 2, min: 8, max: 20, increment: 0.5 },
                      { precision: 2, min: 20, max: 45, increment: 1 },
                    ],
                  },
                  currency: { adServerCurrency: "EUR", defaultRates: { EUR: { EUR: 1, GBP: 0.84, USD: 1.02 }, GBP: { EUR: 1.2, GBP: 1, USD: 1.22 }, USD: { EUR: 0.98, GBP: 0.82, USD: 1 } } },
                  cache: { url: "https://prebid.adnxs.com/pbc/v1/cache" },
                  targetingControls: { allowTargetingKeys: ["BIDDER", "AD_ID", "PRICE_BUCKET", "SIZE", "DEAL", "SOURCE", "FORMAT", "UUID", "CACHE_ID", "CACHE_HOST", "ADOMAIN"], allowSendAllBidsTargetingKeys: ["BIDDER", "AD_ID", "PRICE_BUCKET", "SIZE", "DEAL", "SOURCE", "FORMAT", "UUID", "CACHE_ID", "CACHE_HOST", "ADOMAIN"] },
                  ortb2: { site: { name: "Poki", page: B() }, device: ee({}, window.innerWidth && window.innerHeight ? { w: window.innerWidth, h: window.innerHeight } : {}) },
                  pageUrl: B(),
                  userSync: { filterSettings: { all: { bidders: "*", filter: "include" } }, syncsPerBidder: 1e3, syncDelay: 100, userIds: [{ name: "pubCommonId", storage: { type: "cookie", name: "poki_pubcid", expires: 180 } }] },
                },
                n.Z.gdprApplies ? { consentManagement: { gdpr: { cmpApi: "iab", timeout: 8e3, defaultGdprScope: !0 } } } : {}
              ),
              n.Z.ccpaApplies ? { consentManagement: { usp: { cmpApi: "iab", timeout: 8e3 } } } : {}
            );
          window.pbjs.que.push(function () {
            var i;
            ae = !0;
            var o,
              r = ee(ee({ floors: { data: { currency: "EUR", schema: { fields: ["mediaType"] }, values: { banner: ((o = n.Z.country), M.includes(o) ? 0.13 : z.includes(o) ? 0.07 : j.includes(o) ? 0.04 : 0.03), video: O() } } } }, c), e.config);
            0 === (null === (i = Object.keys(r.floors)) || void 0 === i ? void 0 : i.length) && (console.log("disabled floor module"), null == r || delete r.floors),
              window.pbjs.addAdUnits(
                (function (e, t) {
                  var i,
                    o,
                    r = n.Z.country,
                    a = null == t ? void 0 : t[r];
                  if (!a) return e;
                  for (var s = 0; s <= e.length; s++)
                    for (var d = e[s], c = a[(null === (i = null == d ? void 0 : d.mediaTypes) || void 0 === i ? void 0 : i.video) ? "video" : "display"] || {}, l = (null === (o = null == d ? void 0 : d.bids) || void 0 === o ? void 0 : o.length) - 1; l >= 0; l--) {
                      var u = d.bids[l],
                        p = Math.random();
                      c[u.bidder] && p > c[u.bidder] && e[s].bids.splice(l, 1);
                    }
                  return e;
                })(e.adUnits || d, t)
              ),
              window.pbjs.setConfig(r);
            var a = function (e) {
              var t = W(e);
              return function (e, n) {
                return 640 !== n.width && (e *= 0.95), t(e, n);
              };
            };
            window.pbjs.bidderSettings = { standard: { storageAllowed: !0 }, appnexus: { bidCpmAdjustment: W("appnexus") }, openx: { bidCpmAdjustment: W("openx") }, ix: { bidCpmAdjustment: a("ix") }, richaudience: { bidCpmAdjustment: a("richaudience") }, onetag: { bidCpmAdjustment: W("onetag") }, rubicon: { bidCpmAdjustment: W("rubicon") }, pubmatic: { bidCpmAdjustment: a("pubmatic") }, "33across": { bidCpmAdjustment: W("33across") }, sharethrough: { bidCpmAdjustment: a("sharethrough") }, triplelift: { bidCpmAdjustment: W("triplelift") }, adagio: { bidCpmAdjustment: W("adagio") } };
          });
        };
      function ue(t, i, o, r, a, s, d) {
        var c,
          l = s ? "nope" : i,
          u = B(),
          p = r ? ne : ie,
          A = 0,
          h = function () {
            var r, a;
            if (!(--A > 0))
              try {
                var h = l,
                  f = void 0;
                if (de()) {
                  _.Z.dispatchEvent(e.Z.ads.prebidRequested, { blocked: X() });
                  var m = window.pbjs.adUnits.filter(function (e) {
                    return e.code === p;
                  })[0];
                  if ("undefined" === m) return console.error("Video-ad-unit not found, did you give it the adunit.code='video' value?"), void t.requestAd(l);
                  h = window.pbjs.adServers.dfp.buildVideoUrl({ adUnit: m, params: { iu: (0, R.Z)("iu", i), sz: "640x360|640x480", output: "vast", cust_params: o, description_url: u, url: u, nofb: 1 } });
                  var v = window.pbjs.getHighestCpmBids(p);
                  v.length > 0 && (f = v[0]), f && (null === (a = null === (r = null == f ? void 0 : f.meta) || void 0 === r ? void 0 : r.advertiserDomains) || void 0 === a ? void 0 : a.length) > 0 && _.Z.setVideoDataAnnotations({ adDomain: f.meta.advertiserDomains.join(",") }), window.pbjs.markWinningBidAsUsed({ adUnitCode: p });
                }
                if ((c && (h = h.replace("cust_params=", "cust_params=".concat(c, "%26"))), s)) {
                  if (c) {
                    var g = (function (e) {
                      var t = decodeURIComponent(e),
                        n = (0, R.Z)("amznbid", t);
                      if (!n) return null;
                      var i = G[n];
                      if (!i) return null;
                      var o = (0, R.Z)("amzniid", t);
                      return {
                        bid: i,
                        vast: "https://aax.amazon-adsystem.com/e/dtb/vast?b="
                          .concat(o, "&rnd=")
                          .concat(Math.round(1e10 * Math.random()), "&pp=")
                          .concat(n),
                      };
                    })(c);
                    g && (!f || !f.videoCacheKey || f.cpm < g.bid) && (f = { cpm: g.bid, vast: g.vast, bidder: "amazon", videoCacheKey: "amazon" });
                  }
                  if ((1 === d || (f && f.videoCacheKey && !(f.cpm < O())) || (f = { cpm: O(), vast: U(), bidder: "poki", videoCacheKey: "poki" }), !f || !f.videoCacheKey)) return void _.Z.dispatchEvent(1 === d ? e.Z.ads.video.error : e.Z.ads.completed, { rewardAllowed: !1 });
                  switch (f.bidder) {
                    case "onetag":
                      h = "https://onetag-sys.com/invocation/?key=".concat(f.videoCacheKey);
                      break;
                    case "rubicon":
                      h = "https://prebid-server.rubiconproject.com/cache?uuid=".concat(f.videoCacheKey);
                      break;
                    case "spotx":
                      h = "https://search.spotxchange.com/ad/vast.html?key=".concat(f.videoCacheKey);
                      break;
                    case "amazon":
                    case "poki":
                      h = f.vast;
                      break;
                    default:
                      h = "https://prebid.adnxs.com/pbc/v1/cache?uuid=".concat(f.videoCacheKey);
                  }
                  (0, D.Z)({ event: "video-ready", bidder: null == f ? void 0 : f.bidder, bid: null == f ? void 0 : f.cpm }), _.Z.setVideoDataAnnotations({ p4d_game_id: n.Z.gameID, p4d_version_id: n.Z.versionID, bidder: null == f ? void 0 : f.bidder, bid: null == f ? void 0 : f.cpm });
                }
                _.Z.setVideoDataAnnotations({ pokiAdServer: s, adTagUrl: h }), f ? _.Z.setVideoDataAnnotations({ prebidBidder: null == f ? void 0 : f.bidder, prebidBid: null == f ? void 0 : f.cpm }) : _.Z.setVideoDataAnnotations({ prebidBidder: void 0, prebidBid: void 0 }), t.requestAd(h);
              } catch (e) {
                t.requestAd(l);
              }
          };
        if ((se() && A++, de() && A++, se()))
          try {
            window.apstag.fetchBids({ slots: [{ slotID: r ? "Rewarded" : "Midroll", mediaType: "video" }], timeout: 1500 }, function (e) {
              e.length > 0 && (c = e[0].encodedQsParams), h();
            });
          } catch (e) {
            h();
          }
        s && (0, D.Z)({ event: "video-request" }),
          de() &&
            window.pbjs.que.push(function () {
              window.pbjs.requestBids({
                adUnitCodes: [p],
                bidsBackHandler: function () {
                  h();
                },
              });
            }),
          se() || de() || h();
      }
      function pe() {
        var e,
          t = (null === (e = null === window || void 0 === window ? void 0 : window.location) || void 0 === e ? void 0 : e.hostname) || "";
        return "yes" === (0, R.Z)("poki-ad-server") ? (console.log("DEBUG: Only running Poki-ad-server"), !0) : ("game-cdn.poki.com" === t || 1 == 1 || t.endsWith(".poki-gdn.com"), !1);
      }
      var Ae,
        he = !1,
        fe = n.Z.testVideos,
        me = n.Z.device,
        ve = function () {
          return fe ? "/6062/sanghan_rweb_ad_unit" : "/".concat(S, "/").concat(me, "_ingame_rewarded_google/").concat(n.Z.siteID, "_").concat(me, "_ingame_rewarded_google");
        },
        ge = function (n) {
          "desktop" !== me
            ? window.googletag.cmd.push(function () {
                t.Z.track(e.Z.tracking.ads.rewardedWeb.request),
                  (function (e) {
                    googletag.defineOutOfPageSlot &&
                      (Ae && googletag.destroySlots([Ae]),
                      (Ae = googletag.defineOutOfPageSlot(ve(), googletag.enums.OutOfPageFormat.REWARDED).addService(googletag.pubads())),
                      googletag.enableServices(),
                      Object.keys(e).forEach(function (t) {
                        var n,
                          i = e[t];
                        "" !== i && (null === (n = null == Ae ? void 0 : Ae.setTargeting) || void 0 === n || n.call(Ae, t, i));
                      }));
                  })(n),
                  Ae
                    ? window.googletag.cmd.push(function () {
                        window.googletag.display(Ae);
                      })
                    : _.Z.dispatchEvent(e.Z.ads.video.startHouseAdFlow);
              })
            : _.Z.dispatchEvent(e.Z.ads.video.startHouseAdFlow);
        },
        ye = (function () {
          function t(t, i) {
            void 0 === i && (i = {});
            var o = this;
            (this.retries = 0),
              (this.running = !1),
              (this.ima = t),
              (this.siteID = n.Z.siteID || 3),
              (this.country = n.Z.country || "ZZ"),
              (this.usePokiAdserver = pe()),
              (this.totalRetries = i.totalRetries || T.waterfallRetries || 1),
              (this.timing = i.timing || new P(T.adTiming)),
              _.Z.addEventListener(e.Z.ads.video.error, this.moveThroughWaterfall.bind(this)),
              _.Z.addEventListener(e.Z.ads.video.loaderError, this.moveThroughWaterfall.bind(this)),
              _.Z.addEventListener(e.Z.ads.ready, this.timing.stopWaterfallTimer.bind(this.timing)),
              _.Z.addEventListener(e.Z.ads.started, this.stopWaterfall.bind(this)),
              _.Z.addEventListener(e.Z.ads.video.startHouseAdFlow, function () {
                o.startHouseAdFlow();
              });
          }
          return (
            (t.prototype.moveThroughWaterfall = function () {
              if (this.runningBackfill) return (this.runningBackfill = !1), void _.Z.dispatchEvent(e.Z.ads.error, { message: "Backfilling failed", rewardAllowed: !1 });
              if (!1 !== this.running) {
                var t = this.totalRetries;
                if ((this.timing.stopWaterfallTimer(), this.retries < t)) return this.timing.nextWaterfallTimer(), void this.requestAd();
                (this.running = !1), this.timing.resetWaterfallTimerIdx(), this.rewarded ? ge(this.criteria) : _.Z.dispatchEvent(e.Z.ads.error, { message: "No ads" });
              }
            }),
            (t.prototype.cutOffWaterfall = function () {
              this.ima.tearDown(), this.moveThroughWaterfall();
            }),
            (t.prototype.startHouseAdFlow = function () {
              var e = U();
              _.Z.setVideoDataAnnotations({ pokiAdServer: !0, adTagUrl: e, bidder: "poki", bid: 0 }), (0, D.Z)({ event: "video-request" }), this.ima.requestAd(e), (this.runningBackfill = !0);
            }),
            (t.prototype.start = function (t, o) {
              void 0 === t && (t = {}),
                (this.running = !0),
                (this.retries = 0),
                (this.criteria = t),
                this.timing.resetWaterfallTimerIdx(),
                (this.rewarded = o === e.Z.ads.position.rewarded),
                (this.adUnitPaths = (function (t) {
                  var o = n.Z.device,
                    r = "midroll";
                  if ((0, R.Z)("noFill") || i.Z.debug) return ["junk", "junk"];
                  t === e.Z.ads.position.rewarded && (r = "rewarded");
                  var a = "/".concat(S, "/");
                  return n.Z.isPokiIframe || n.Z.isPlayground ? ["".concat(a).concat(o, "_ingame_").concat(r, "_1/").concat(n.Z.siteID, "_").concat(o, "_ingame_").concat(r, "_1"), "".concat(a).concat(o, "_ingame_").concat(r, "_2/").concat(n.Z.siteID, "_").concat(o, "_ingame_").concat(r, "_2")] : ["".concat(a, "external_").concat(o, "_video_1/external_").concat(o, "_ingame_").concat(r, "_1"), "".concat(a, "external_").concat(o, "_video_2/external_").concat(o, "_ingame_").concat(r, "_2")];
                })(o)),
                this.requestAd();
            }),
            (t.prototype.requestAd = function () {
              this.timing.startWaterfallTimer(this.cutOffWaterfall.bind(this)), this.retries++, (this.criteria.waterfall = this.retries), (this.runningBackfill = !1);
              var t = (this.retries - 1) % this.adUnitPaths.length,
                o = this.adUnitPaths[t],
                r = "https://securepubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=".concat(o, "&ciu_szs&impl=s&gdfp_req=1&env=vp&output=xml_vast4");
              n.Z.familyFriendly && (r += "&tfcd=1&tfua=1&rdp=1&npa=1"), n.Z.nonPersonalized && (r += "&npa=1"), (r += "&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}&nofb=1");
              var a = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 970;
              this.criteria.billboards_fit = a ? "yes" : "no";
              var s,
                d,
                c =
                  (function (e) {
                    var t = encodeURIComponent(B());
                    return (e = (e = e.split("{url}").join(t)).split("{descriptionUrl}").join(t)).split("{timestamp}").join(new Date().getTime().toString());
                  })(r) +
                  ((s = this.criteria),
                  (d = ""),
                  Object.keys(s).forEach(function (e) {
                    if (Object.prototype.hasOwnProperty.call(s, e)) {
                      var t = s[e];
                      Array.isArray(t) && (t = t.join()), (d += "".concat(e, "=").concat(t, "&"));
                    }
                  }),
                  (d = encodeURIComponent(d)),
                  "&cust_params=".concat(d, "&"));
              _.Z.setVideoDataAnnotations({ adUnitPath: o, adTagUrl: c, waterfall: this.retries, size: "640x360v" }), _.Z.dispatchEvent(e.Z.ads.requested), i.Z.debug ? (console.debug("adRequest started in debug mode (".concat(this.retries, "/").concat(this.totalRetries, ")")), this.ima.requestAd(U())) : this.usePokiAdserver ? (console.debug("adRequest started with Prebid Video enabled (".concat(this.retries, "/").concat(this.totalRetries, ")")), ue(this.ima, c, this.criteria, this.rewarded, this.country, !0, this.retries)) : 1 === this.retries ? (console.debug("adRequest started with Prebid Video enabled (".concat(this.retries, "/").concat(this.totalRetries, ")")), ue(this.ima, c, this.criteria, this.rewarded, this.country, !1, this.retries)) : (console.debug("adRequest started in plain mode (".concat(this.retries, "/").concat(this.totalRetries, ")")), this.ima.requestAd(c));
            }),
            (t.prototype.isRunning = function () {
              return this.running;
            }),
            (t.prototype.stopWaterfall = function () {
              (this.running = !1), this.timing.stopWaterfallTimer(), this.timing.resetWaterfallTimerIdx();
            }),
            t
          );
        })();
      const be = ye;
      var we = function (e, t, n) {
        if (n || 2 === arguments.length) for (var i, o = 0, r = t.length; o < r; o++) (!i && o in t) || (i || (i = Array.prototype.slice.call(t, 0, o)), (i[o] = t[o]));
        return e.concat(i || Array.prototype.slice.call(t));
      };
      const ke = (function () {
        function t(t) {
          var n = this;
          (this.storedQueue = []),
            (this.progressCallback = t),
            this.reset(),
            _.Z.addEventListener(e.Z.ads.video.progress, function (e) {
              var t = 100 - n.currentProgress,
                i = (e.currentTime / e.duration) * t;
              i < t && n.progressCallback(n.currentProgress + i);
            }),
            this.initializeNoProgressFix();
        }
        return (
          (t.prototype.queueFakeProgress = function (e, t, n) {
            var i = this;
            this.storedQueue.push({ progressToFake: e, duration: t, stopEvent: n }),
              _.Z.addEventListener(n, function () {
                (i.eventWatcher[n] = !0), (i.currentProgress = i.startProgress + e), (i.startProgress = i.currentProgress), i.progressCallback(i.currentProgress), i.activeQueue.shift(), i.activeQueue.length > 0 ? i.continue() : i.pause();
              });
          }),
          (t.prototype.fakeProgress = function (e, t, n) {
            this.activeQueue.push({ progressToFake: e, duration: t, stopEvent: n }), (this.fakeProgressEvents = !0), this.continue();
          }),
          (t.prototype.start = function () {
            this.activeQueue.length > 0 || ((this.activeQueue = we([], this.storedQueue, !0)), (this.active = !0), this.continue());
          }),
          (t.prototype.continue = function () {
            if (this.activeQueue.length > 0 && !this.tickInterval) {
              this.startTime = Date.now();
              (this.tickInterval = window.setInterval(this.tick.bind(this), 50)), (this.active = !0);
            }
          }),
          (t.prototype.pause = function () {
            this.clearInterval();
          }),
          (t.prototype.tick = function () {
            var t = this.activeQueue[0],
              n = Date.now() - this.startTime,
              i = Math.min(n / t.duration, 1);
            (this.currentProgress = this.startProgress + t.progressToFake * i), this.fakeProgressEvents && _.Z.dispatchEvent(e.Z.ads.video.progress, { duration: t.duration / 1e3, currentTime: n / 1e3 }), this.progressCallback(this.currentProgress), (this.eventWatcher[t.stopEvent] || 1 === i) && this.pause();
          }),
          (t.prototype.clearInterval = function () {
            this.tickInterval && (clearInterval(this.tickInterval), (this.tickInterval = 0));
          }),
          (t.prototype.initializeNoProgressFix = function () {
            var t = this;
            _.Z.addEventListener(e.Z.ads.started, function (n) {
              t.progressWatcherTimeout = window.setTimeout(function () {
                if (t.active) {
                  var i = 100 - t.currentProgress,
                    o = 1e3 * n.duration - 1e3;
                  t.fakeProgress(i, o, e.Z.ads.completed);
                }
              }, 1e3);
            }),
              _.Z.addEventListener(e.Z.ads.video.progress, function () {
                t.progressWatcherTimeout && (clearTimeout(t.progressWatcherTimeout), (t.progressWatcherTimeout = 0));
              });
          }),
          (t.prototype.reset = function () {
            (this.eventWatcher = {}), (this.startProgress = 0), (this.startTime = 0), (this.currentProgress = 0), (this.activeQueue = []), (this.active = !1), (this.fakeProgressEvents = !1), this.clearInterval();
          }),
          (t.prototype.fakeItTillTheEnd = function (t) {
            var n = 100 - this.currentProgress;
            this.fakeProgress(n, 1e3 * t, e.Z.ads.completed);
          }),
          t
        );
      })();
      var Ze = "pokiSdkContainer",
        Ee = "pokiSdkFixed",
        Ie = "pokiSdkOverlay",
        Ce = "pokiSdkHidden",
        xe = "pokiSdkInsideContainer",
        Se = "pokiSdkPauseButtonContainer",
        Te = "pokiSdkPauseButton",
        _e = "pokiSdkPauseButtonBG",
        Pe = "pokiSdkStartAdButton",
        De = "pokiSdkProgressBar",
        Be = "pokiSdkProgressContainer",
        Re = "pokiSdkSpinnerContainer",
        Me = "pokiSdkVideoContainer",
        ze = "pokiSdkVisible",
        je = "pokiSDKAdContainer",
        Oe = "pokiSDKHouseAdContainer",
        Le = "\n.".concat(Ze, " {\n\toverflow: hidden;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 1000;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.").concat(Ze, ".").concat(Ee, " {\n\tposition: fixed;\n}\n\n.").concat(Ze, ".").concat(ze, " {\n\tdisplay: block;\n}\n\n.").concat(Ze, ".").concat(Ce, ",\n.").concat(Re, ".").concat(Ce, " {\n\tdisplay: none;\n}\n\n.").concat(Ze, ".").concat(Ce, ",\n.").concat(Re, " {\n\tpointer-events: none;\n}\n\n.").concat(Re, " {\n\tz-index: 10;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: url('https://a.poki.com/images/thumb_anim_2x.gif') 50% 50% no-repeat;\n\tuser-select: none;\n}\n\n.").concat(xe, " {\n\tbackground: #000;\n\tposition: relative;\n\tz-index: 1;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\n\topacity: 0;\n\t-webkit-transition: opacity 0.5s ease-in-out;\n\t-moz-transition: opacity 0.5s ease-in-out;\n\t-ms-transition: opacity 0.5s ease-in-out;\n\t-o-transition: opacity 0.5s ease-in-out;\n\ttransition: opacity 0.5s ease-in-out;\n}\n\n.").concat(Ze, ".").concat(ze, " .").concat(xe, " {\n\topacity: 1;\n}\n\n.").concat(je, ", .").concat(Me, " {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.").concat(Pe, " {\n\tposition: absolute;\n\tz-index: 9999;\n\ttop: 0;\n\n\tpadding-top: 10%;\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n\tcolor: #FFF;\n\n\tfont: 700 15pt 'Arial', sans-serif;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttransition: 0.1s ease-in-out;\n\tline-height: 1em;\n}\n\n.").concat(Se, " {\n\tcursor:pointer;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 10;\n}\n\n.").concat(_e, " {\n    content: '';\n    background: rgba(0, 43, 80, 0.5);\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n\tz-index: 11;\n}\n\n.").concat(Se, ":hover .").concat(_e, " {\n\tbackground: rgba(0, 43, 80, 0.7);\n}\n\n.").concat(Te, " {\n\tposition: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 12;\n}\n\n.").concat(Te, ":before {\n\tcontent: '';\n\tposition: absolute;\n\twidth: 100px;\n\theight: 100px;\n\tdisplay: block;\n\tborder: 2px solid #fff;\n\tborder-radius: 50%;\n\tuser-select: none;\n\tbackground-color: rgba(0, 0, 0, 0.6);\n\ttransition: background-color 0.5s ease;\n\tanimation: 1s linear infinite pokiPulse;\n\tz-index: 12;\n}\n\n.").concat(Te, ":after {\n\tcontent: '';\n\tposition: absolute;\n\tdisplay: block;\n\tbox-sizing: border-box;\n\tborder-color: transparent transparent transparent #fff;\n\tborder-style: solid;\n\tborder-width: 26px 0 26px 40px;\n\tpointer-events: none;\n\tanimation: 1s linear infinite pokiPulse;\n\tleft: 6px;\n\tz-index: 12;\n}\n\n@keyframes pokiPulse {\n\t0% {\n\t\ttransform: translate(-50%, -50%) scale(0.95);\n\t}\n\t70% {\n\t\ttransform: translate(-50%, -50%) scale(1.1);\n\t}\n\t100% {\n\t\ttransform: translate(-50%, -50%) scale(0.95);\n\t}\n}\n\n.").concat(Be, " {\n\tbackground: #B8C7DD;\n\twidth: 100%;\n\theight: 5px;\n\tposition: absolute;\n\tbottom: 0;\n\tz-index: 9999;\n}\n\n.").concat(De, " {\n\tposition:relative;\n\tbottom:0px;\n\tbackground: #FFDC00;\n\theight: 100%;\n\twidth: 0%;\n\ttransition: width 0.5s;\n\ttransition-timing-function: linear;\n}\n\n.").concat(De, ".").concat(ze, ", .").concat(Se, ".").concat(ze, ", .").concat(Pe, ".").concat(ze, " {\n\tdisplay: block;\n\tpointer-events: auto;\n}\n\n.").concat(De, ".").concat(Ce, ", .").concat(Se, ".").concat(Ce, ", .").concat(Pe, ".").concat(Ce, " {\n\tdisplay: none;\n\tpointer-events: none;\n}\n\n.").concat(je, " .").concat(Oe, " {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 99999;\n\tcursor: pointer;\n}\n\n"),
        Ne = (function () {
          function t(t) {
            var n = this;
            if (
              ((this.hideElement = function (e) {
                e.classList.add(Ce), e.classList.remove(ze);
              }),
              (this.showElement = function (e) {
                e.classList.add(ze), e.classList.remove(Ce);
              }),
              (this.progressFaker = new ke(function (e) {
                return n.updateProgressBar(e);
              })),
              this.progressFaker.queueFakeProgress(20, 2e3, e.Z.ads.started),
              this.createElements(t.wrapper),
              "undefined" != typeof window && document)
            ) {
              var i = document.createElement("style");
              (i.innerHTML = Le), document.head.appendChild(i);
            }
          }
          return (
            (t.prototype.updateProgressBar = function (e) {
              this.progressBar.style.width = "".concat(e, "%");
            }),
            (t.prototype.setupEvents = function (e) {
              this.monetization = e;
            }),
            (t.prototype.hide = function () {
              var e;
              null === (e = this.destroyHouseAds) || void 0 === e || e.call(this), this.hideElement(this.containerDiv), this.hideElement(this.progressContainer), this.hidePauseButton(), this.hideElement(this.startAdButton), this.containerDiv.classList.remove(Ie), (this.progressBar.style.width = "0%"), this.progressFaker.reset();
            }),
            (t.prototype.hideSpinner = function () {
              this.hideElement(this.spinnerContainer);
            }),
            (t.prototype.show = function () {
              this.containerDiv.classList.add(Ie), this.showElement(this.containerDiv), this.showElement(this.spinnerContainer), this.showElement(this.progressContainer), this.progressFaker.start();
            }),
            (t.prototype.getVideoBounds = function () {
              return this.adContainer.getBoundingClientRect();
            }),
            (t.prototype.getAdContainer = function () {
              return this.adContainer;
            }),
            (t.prototype.getVideoContainer = function () {
              return this.videoContainer;
            }),
            (t.prototype.showPauseButton = function () {
              this.showElement(this.pauseButtonContainer), this.monetization && this.pauseButtonContainer.addEventListener("click", this.monetization.resumeAd.bind(this.monetization));
            }),
            (t.prototype.hidePauseButton = function () {
              this.hideElement(this.pauseButtonContainer), this.monetization && this.pauseButtonContainer.removeEventListener("click", this.monetization.resumeAd.bind(this.monetization));
            }),
            (t.prototype.showStartAdButton = function () {
              this.showElement(this.startAdButton), this.monetization && this.startAdButton.addEventListener("click", this.monetization.startAdClicked.bind(this.monetization));
            }),
            (t.prototype.hideStartAdButton = function () {
              this.hideElement(this.startAdButton), this.monetization && this.startAdButton.removeEventListener("click", this.monetization.startAdClicked.bind(this.monetization));
            }),
            (t.prototype.createElements = function (e) {
              var t = this;
              (this.containerDiv = document.createElement("div")), (this.insideContainer = document.createElement("div")), (this.pauseButtonContainer = document.createElement("div")), (this.pauseButton = document.createElement("div")), (this.pauseButtonBG = document.createElement("div")), (this.startAdButton = document.createElement("div")), (this.progressBar = document.createElement("div")), (this.progressContainer = document.createElement("div")), (this.spinnerContainer = document.createElement("div")), (this.adContainer = document.createElement("div")), (this.videoContainer = document.createElement("video")), (this.adContainer.id = "pokiSDKAdContainer"), (this.videoContainer.id = "pokiSDKVideoContainer"), (this.containerDiv.className = Ze), (this.insideContainer.className = xe), (this.pauseButtonContainer.className = Se), (this.pauseButton.className = Te), (this.pauseButtonBG.className = _e), this.pauseButtonContainer.appendChild(this.pauseButton), this.pauseButtonContainer.appendChild(this.pauseButtonBG), (this.startAdButton.className = Pe), (this.startAdButton.innerHTML = "Tap anywhere to play ad"), (this.progressBar.className = De), (this.progressContainer.className = Be), (this.spinnerContainer.className = Re), (this.adContainer.className = je), (this.videoContainer.className = Me), this.hide(), this.videoContainer.setAttribute("playsinline", "playsinline"), this.videoContainer.setAttribute("muted", "muted"), this.containerDiv.appendChild(this.insideContainer), this.containerDiv.appendChild(this.spinnerContainer), this.insideContainer.appendChild(this.progressContainer), this.insideContainer.appendChild(this.videoContainer), this.insideContainer.appendChild(this.adContainer), this.containerDiv.appendChild(this.pauseButtonContainer), this.containerDiv.appendChild(this.startAdButton), this.progressContainer.appendChild(this.progressBar);
              var n = e || null,
                i = function () {
                  if ((n || (n = document.body), n))
                    if ((n.appendChild(t.containerDiv), n === document.body)) t.containerDiv.classList.add(Ee);
                    else {
                      var e = window.getComputedStyle(n).position;
                      (e && -1 !== ["absolute", "fixed", "relative"].indexOf(e)) || (n.style.position = "relative");
                    }
                  else window.requestAnimationFrame(i);
                };
              !n || n instanceof HTMLElement || ((n = null), console.error("POKI-SDK: wrapper is not a HTMLElement, falling back to document.body")), i();
            }),
            (t.prototype.startNonIMAFallbackVideo = function (t) {
              var n = this,
                i = document.createElement("video");
              (i.id = "pokiSDKHouseAdContainer"), (i.className = Oe), (i.playsInline = !0), (i.muted = k() || Z), (i.src = t.videoUrl);
              var o = !1,
                r = function () {
                  t.clickThrough && window.open(t.clickThrough), _.Z.dispatchEvent(e.Z.ads.video.clicked, { creativeId: "HouseAd" }), (o = !0), i.pause(), a();
                };
              this.insideContainer.addEventListener("click", r);
              var a = function (t) {
                (n.destroyHouseAds = void 0), n.hide(), n.insideContainer.removeChild(i), n.insideContainer.removeEventListener("click", r), t || _.Z.dispatchEvent(e.Z.ads.completed, { rewardAllowed: o });
              };
              (this.destroyHouseAds = function () {
                return a(!0);
              }),
                (i.onabort = function () {
                  return a();
                }),
                (i.onerror = function () {
                  return a();
                }),
                (i.onplaying = function () {
                  _.Z.dispatchEvent(e.Z.ads.started, { creativeId: "HouseAd", duration: t.duration }), _.Z.dispatchEvent(e.Z.ads.impression), n.progressFaker.fakeItTillTheEnd(t.duration);
                }),
                (i.onended = function () {
                  (o = !0), a();
                }),
                this.insideContainer.appendChild(i),
                i.play();
            }),
            t
          );
        })();
      const Ue = Ne;
      var Ge = a(662),
        qe = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function s(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            d((i = i.apply(e, t || [])).next());
          });
        },
        Fe = function (e, t) {
          var n,
            i,
            o,
            r,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (r = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (r[Symbol.iterator] = function () {
                return this;
              }),
            r
          );
          function s(s) {
            return function (d) {
              return (function (s) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; r && ((r = 0), s[0] && (a = 0)), a; )
                  try {
                    if (((n = 1), i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)) return o;
                    switch (((i = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                      case 0:
                      case 1:
                        o = s;
                        break;
                      case 4:
                        return a.label++, { value: s[1], done: !1 };
                      case 5:
                        a.label++, (i = s[1]), (s = [0]);
                        continue;
                      case 7:
                        (s = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                          a = 0;
                          continue;
                        }
                        if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                          a.label = s[1];
                          break;
                        }
                        if (6 === s[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = s);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(s);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    s = t.call(e, a);
                  } catch (e) {
                    (s = [6, e]), (i = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & s[0]) throw s[1];
                return { value: s[0] ? s[1] : void 0, done: !0 };
              })([s, d]);
            };
          }
        };
      const Ve = (function () {
        function t(e) {
          var t = this;
          (this.bannerTimeout = null),
            (this.allowedToPlayAd = !1),
            (this.runningAd = !1),
            (this.completeOnce = !1),
            (this.videoStarted = !1),
            (this.currentWidth = 640),
            (this.currentHeight = 480),
            (this.currentRequestIsMuted = !1),
            (this.volume = 1),
            (this.canWeAutoPlayWithSound = function () {
              return qe(t, void 0, void 0, function () {
                return Fe(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (!this.blankVideo) return [2, !1];
                      e.label = 1;
                    case 1:
                      return e.trys.push([1, 3, , 4]), [4, this.blankVideo.play()];
                    case 2:
                      return e.sent(), [2, !0];
                    case 3:
                      return e.sent(), [2, !1];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (this.videoElement = document.getElementById("pokiSDKVideoContainer")),
            (this.adsManager = null),
            (this.volume = e),
            this.initAdDisplayContainer(),
            this.initBlankVideo(),
            this.initAdsLoader();
        }
        return (
          (t.prototype.initAdDisplayContainer = function () {
            this.adDisplayContainer || (window.google && (this.adDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById("pokiSDKAdContainer"), this.videoElement)));
          }),
          (t.prototype.initBlankVideo = function () {
            (this.blankVideo = document.createElement("video")), this.blankVideo.setAttribute("playsinline", "playsinline");
            var e = document.createElement("source");
            (e.src = "data:video/mp4;base64, AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw"), this.blankVideo.appendChild(e);
          }),
          (t.prototype.initAdsLoader = function () {
            var e = this;
            this.adsLoader ||
              (window.google &&
                ((this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer)),
                this.adsLoader.getSettings().setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE),
                this.adsLoader.getSettings().setDisableCustomPlaybackForIOS10Plus(!0),
                this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded, !1, this),
                this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdLoaderError, !1, this),
                this.videoElement.addEventListener("onended", function () {
                  return e.adsLoader.contentComplete();
                })));
          }),
          (t.prototype.requestAd = function (e) {
            return qe(this, void 0, void 0, function () {
              var t;
              return Fe(this, function (n) {
                switch (n.label) {
                  case 0:
                    return this.runningAd ? [2] : ((this.runningAd = !0), (this.completeOnce = !0), (this.videoStarted = !1), this.adDisplayContainer.initialize(), (this.videoElement.src = ""), ((t = new google.ima.AdsRequest()).adTagUrl = e), (t.linearAdSlotWidth = this.currentWidth), (t.linearAdSlotHeight = this.currentHeight), (t.nonLinearAdSlotWidth = this.currentWidth), (t.nonLinearAdSlotHeight = this.currentHeight), (t.forceNonLinearFullSlot = !0), [4, this.canWeAutoPlayWithSound()]);
                  case 1:
                    return n.sent() ? (t.setAdWillPlayMuted(!1), (this.currentRequestIsMuted = !1)) : (t.setAdWillPlayMuted(!0), (this.currentRequestIsMuted = !0)), (this.allowedToPlayAd = !0), this.adsLoader.requestAds(t), [2];
                }
              });
            });
          }),
          (t.prototype.resize = function (e, t, n) {
            void 0 === n && (n = google.ima.ViewMode.NORMAL), (this.currentWidth = e), (this.currentHeight = t), this.adsManager && this.adsManager.resize(e, t, n);
          }),
          (t.prototype.onAdsManagerLoaded = function (t) {
            var n = new google.ima.AdsRenderingSettings();
            (n.enablePreloading = !0), (n.restoreCustomPlaybackStateOnAdBreakComplete = !0), (n.mimeTypes = J() || (0, w.Z)() || (0, E.Z)() ? ["video/mp4"] : ["video/mp4", "video/webm", "video/ogg"]), (n.loadVideoTimeout = 8e3), (this.adsManager = t.getAdsManager(this.videoElement, n)), this.adsManager.setVolume(Math.max(0, Math.min(1, this.volume))), this.currentRequestIsMuted && this.adsManager.setVolume(0), this.allowedToPlayAd ? (this.attachAdEvents(), _.Z.dispatchEvent(e.Z.ads.ready)) : this.tearDown();
          }),
          (t.prototype.setVolume = function (e) {
            (this.volume = e), this.adsManager && this.adsManager.setVolume(Math.max(0, Math.min(1, this.volume)));
          }),
          (t.prototype.startPlayback = function () {
            try {
              this.adsManager.init(this.currentWidth, this.currentHeight, google.ima.ViewMode.NORMAL), this.adsManager.start();
            } catch (e) {
              this.videoElement.play();
            }
          }),
          (t.prototype.startIOSPlayback = function () {
            this.adsManager.start();
          }),
          (t.prototype.stopPlayback = function () {
            this.tearDown();
          }),
          (t.prototype.resumeAd = function () {
            _.Z.dispatchEvent(e.Z.ads.video.resumed), this.adsManager && this.adsManager.resume();
          }),
          (t.prototype.tearDown = function () {
            this.adsManager && (this.adsManager.stop(), this.adsManager.destroy(), (this.adsManager = null)), null !== this.bannerTimeout && (clearTimeout(this.bannerTimeout), (this.bannerTimeout = null)), this.adsLoader && (this.adsLoader.contentComplete(), this.adsLoader.destroy(), (this.adsLoader = null), this.initAdsLoader()), (this.completeOnce = !1), (this.runningAd = !1);
          }),
          (t.prototype.attachAdEvents = function () {
            var e = this,
              t = google.ima.AdEvent.Type;
            this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError, !1, this),
              [t.AD_PROGRESS, t.ALL_ADS_COMPLETED, t.CLICK, t.COMPLETE, t.IMPRESSION, t.PAUSED, t.SKIPPED, t.STARTED, t.USER_CLOSE, t.AD_BUFFERING].forEach(function (t) {
                e.adsManager.addEventListener(t, e.onAdEvent, !1, e);
              });
          }),
          (t.prototype.onAdEvent = function (t) {
            var n = this,
              i = t.getAd();
            switch (t.type) {
              case google.ima.AdEvent.Type.AD_PROGRESS:
                _.Z.dispatchEvent(e.Z.ads.video.progress, t.getAdData());
                break;
              case google.ima.AdEvent.Type.STARTED:
                (t.remainingTime = this.adsManager.getRemainingTime()),
                  t.remainingTime <= 0 && (t.remainingTime = 15),
                  (this.videoStarted = !0),
                  i.isLinear() ||
                    (this.bannerTimeout = window.setTimeout(function () {
                      n.completeOnce && ((n.completeOnce = !1), _.Z.dispatchEvent(e.Z.ads.completed, { rewardAllowed: n.videoStarted && t.rewardAllowed })), n.tearDown();
                    }, 1e3 * (t.remainingTime + 1))),
                  _.Z.setVideoDataAnnotations({ creativeId: i.getCreativeId() }),
                  _.Z.dispatchEvent(e.Z.ads.started, { duration: i.getDuration() });
                break;
              case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
              case google.ima.AdEvent.Type.COMPLETE:
                this.completeOnce && ((this.completeOnce = !1), _.Z.dispatchEvent(e.Z.ads.completed, { rewardAllowed: this.videoStarted })), this.tearDown();
                break;
              case google.ima.AdEvent.Type.USER_CLOSE:
                this.completeOnce && ((this.completeOnce = !1), _.Z.dispatchEvent(e.Z.ads.completed, { rewardAllowed: !1 })), this.tearDown();
                break;
              case google.ima.AdEvent.Type.PAUSED:
                this.adsManager.pause(), _.Z.dispatchEvent(e.Z.ads.video.paused);
                break;
              case google.ima.AdEvent.Type.AD_BUFFERING:
                _.Z.dispatchEvent(e.Z.ads.video.buffering);
                break;
              case google.ima.AdEvent.Type.CLICK:
                _.Z.dispatchEvent(e.Z.ads.video.clicked);
                break;
              case google.ima.AdEvent.Type.SKIPPED:
                _.Z.dispatchEvent(e.Z.ads.skipped), this.completeOnce && ((this.completeOnce = !1), _.Z.dispatchEvent(e.Z.ads.completed, { rewardAllowed: this.videoStarted })), document.activeElement && document.activeElement.blur();
                break;
              case google.ima.AdEvent.Type.IMPRESSION:
                _.Z.dispatchEvent(e.Z.ads.impression, { creativeId: i.getCreativeId() });
            }
          }),
          (t.prototype.onAdLoaderError = function (t) {
            this.tearDown();
            var n = null == t ? void 0 : t.getError(),
              i = (null == n ? void 0 : n.toString()) || "Unknown",
              o = (null == n ? void 0 : n.getErrorCode()) || 0;
            _.Z.dispatchEvent(e.Z.ads.video.loaderError, { message: i, errorCode: o });
          }),
          (t.prototype.onAdError = function (t) {
            this.tearDown();
            var n = null == t ? void 0 : t.getError(),
              i = (null == n ? void 0 : n.toString()) || "Unknown",
              o = (null == n ? void 0 : n.getErrorCode()) || 0;
            _.Z.dispatchEvent(e.Z.ads.video.error, { message: i, errorCode: o });
          }),
          (t.prototype.muteAd = function () {
            void 0 !== this.adsManager && null != this.adsManager && this.adsManager.setVolume(0);
          }),
          (t.prototype.isAdRunning = function () {
            return this.runningAd;
          }),
          t
        );
      })();
      var He = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function s(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            d((i = i.apply(e, t || [])).next());
          });
        },
        Qe = function (e, t) {
          var n,
            i,
            o,
            r,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (r = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (r[Symbol.iterator] = function () {
                return this;
              }),
            r
          );
          function s(s) {
            return function (d) {
              return (function (s) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; r && ((r = 0), s[0] && (a = 0)), a; )
                  try {
                    if (((n = 1), i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)) return o;
                    switch (((i = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                      case 0:
                      case 1:
                        o = s;
                        break;
                      case 4:
                        return a.label++, { value: s[1], done: !1 };
                      case 5:
                        a.label++, (i = s[1]), (s = [0]);
                        continue;
                      case 7:
                        (s = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                          a = 0;
                          continue;
                        }
                        if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                          a.label = s[1];
                          break;
                        }
                        if (6 === s[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = s);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(s);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    s = t.call(e, a);
                  } catch (e) {
                    (s = [6, e]), (i = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & s[0]) throw s[1];
                return { value: s[0] ? s[1] : void 0, done: !0 };
              })([s, d]);
            };
          }
        };
      const We = function () {
        var e = window.location.pathname;
        "/" !== e[0] && (e = "/".concat(e));
        var t = encodeURIComponent("".concat(window.location.protocol, "//").concat(window.location.host).concat(e).concat(window.location.search)),
          n = encodeURIComponent(document.referrer),
          i = "https://devs-api.poki.com/gameinfo/@sdk?href=".concat(t, "&referrer=").concat(n);
        return fetch(i, { method: "GET", headers: { "Content-Type": "text/plain" } })
          .then(function (e) {
            return He(void 0, void 0, void 0, function () {
              var t;
              return Qe(this, function (n) {
                switch (n.label) {
                  case 0:
                    return e.status >= 200 && e.status < 400 ? [4, e.json()] : [3, 2];
                  case 1:
                    return (t = n.sent()).game_id ? [2, { gameID: t.game_id, gameTitle: t.game_name, playtestLobbyID: t.playtest_lobby_id, playtestRecord: t.playtest_record, cachedContentGameID: t.cached_content_game_id, specialConditions: t.ad_settings.special_conditions, adTiming: { preroll: t.ad_settings.preroll, timePerTry: t.ad_settings.time_per_try, timeBetweenAds: t.ad_settings.time_between_ads, startAdsAfter: t.ad_settings.start_ads_after } }] : [2, void 0];
                  case 2:
                    throw e;
                }
              });
            });
          })
          .catch(function (e) {
            return (function (e) {
              return He(this, void 0, void 0, function () {
                var t, n, i, o, r, a, s, d, c, l, u, p;
                return Qe(this, function (A) {
                  switch (A.label) {
                    case 0:
                      console.error(e), (A.label = 1);
                    case 1:
                      return A.trys.push([1, 4, , 5]), "/" !== (t = window.location.pathname)[0] && (t = "/".concat(t)), (o = (i = JSON).stringify), (l = { c: "sdk-p4d-error", ve: 7 }), (u = { k: "error" }), (a = (r = JSON).stringify), (p = { status: e.status }), (s = e.json) ? [4, e.json()] : [3, 3];
                    case 2:
                      (s = A.sent()), (A.label = 3);
                    case 3:
                      if (((n = o.apply(i, [((l.d = [((u.v = a.apply(r, [((p.json = s), (p.body = JSON.stringify({ href: "".concat(window.location.protocol, "//").concat(window.location.host).concat(t).concat(window.location.search) })), (p.name = e.name), (p.message = e.message), p)])), u)]), l)])), (d = "https://t.poki.io/l"), navigator.sendBeacon)) navigator.sendBeacon(d, n);
                      else
                        try {
                          (c = new XMLHttpRequest()).open("POST", d, !0), c.send(n);
                        } catch (e) {}
                      return [3, 5];
                    case 4:
                      return A.sent(), [3, 5];
                    case 5:
                      return [2];
                  }
                });
              });
            })(e);
          });
      };
      var Xe = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function s(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            d((i = i.apply(e, t || [])).next());
          });
        },
        Je = function (e, t) {
          var n,
            i,
            o,
            r,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (r = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (r[Symbol.iterator] = function () {
                return this;
              }),
            r
          );
          function s(s) {
            return function (d) {
              return (function (s) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; r && ((r = 0), s[0] && (a = 0)), a; )
                  try {
                    if (((n = 1), i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)) return o;
                    switch (((i = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                      case 0:
                      case 1:
                        o = s;
                        break;
                      case 4:
                        return a.label++, { value: s[1], done: !1 };
                      case 5:
                        a.label++, (i = s[1]), (s = [0]);
                        continue;
                      case 7:
                        (s = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                          a = 0;
                          continue;
                        }
                        if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                          a.label = s[1];
                          break;
                        }
                        if (6 === s[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = s);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(s);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    s = t.call(e, a);
                  } catch (e) {
                    (s = [6, e]), (i = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & s[0]) throw s[1];
                return { value: s[0] ? s[1] : void 0, done: !0 };
              })([s, d]);
            };
          }
        };
      function Ke() {
        return Xe(this, void 0, void 0, function () {
          var e, t, n, i;
          return Je(this, function (o) {
            switch (o.label) {
              case 0:
                return o.trys.push([0, 3, , 4]), [4, fetch("https://geo.poki.io/", { method: "GET", headers: { "Content-Type": "text/plain" } })];
              case 1:
                return [4, o.sent().json()];
              case 2:
                return (e = o.sent()), (t = e.ISO), (n = e.ccpaApplies), [2, { ISO: t, ccpaApplies: n }];
              case 3:
                return (i = o.sent()), console.error(i), [2, { ISO: Ge.D, ccpaApplies: !1 }];
              case 4:
                return [2];
            }
          });
        });
      }
      var Ye = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function s(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            d((i = i.apply(e, t || [])).next());
          });
        },
        $e = function (e, t) {
          var n,
            i,
            o,
            r,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (r = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (r[Symbol.iterator] = function () {
                return this;
              }),
            r
          );
          function s(s) {
            return function (d) {
              return (function (s) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; r && ((r = 0), s[0] && (a = 0)), a; )
                  try {
                    if (((n = 1), i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)) return o;
                    switch (((i = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                      case 0:
                      case 1:
                        o = s;
                        break;
                      case 4:
                        return a.label++, { value: s[1], done: !1 };
                      case 5:
                        a.label++, (i = s[1]), (s = [0]);
                        continue;
                      case 7:
                        (s = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                          a = 0;
                          continue;
                        }
                        if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                          a.label = s[1];
                          break;
                        }
                        if (6 === s[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = s);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(s);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    s = t.call(e, a);
                  } catch (e) {
                    (s = [6, e]), (i = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & s[0]) throw s[1];
                return { value: s[0] ? s[1] : void 0, done: !0 };
              })([s, d]);
            };
          }
        };
      function et() {
        var e, t;
        return Ye(this, void 0, void 0, function () {
          var n, i, o, r, a;
          return $e(this, function (s) {
            switch (s.label) {
              case 0:
                if ("test" === (null === (t = null === (e = null === window || void 0 === window ? void 0 : window.process) || void 0 === e ? void 0 : e.env) || void 0 === t ? void 0 : t.NODE_ENV)) return [2, { blocklist: [], countryExclusion: [], bidderLimitation: {} }];
                s.label = 1;
              case 1:
                return s.trys.push([1, 4, , 5]), [4, fetch("https://api.poki.com/ads/settings", { method: "GET", headers: { "Content-Type": "application/json" } })];
              case 2:
                return [4, s.sent().json()];
              case 3:
                return (
                  (n = s.sent()),
                  (i = n.blocklist),
                  (o = n.country_exclusion),
                  (r = n.bidder_limitation),
                  [
                    2,
                    {
                      blocklist: (null == i ? void 0 : i.split(/[\r\n]+/)) || [],
                      countryExclusion: (o.split(",") || []).map(function (e) {
                        return e.toUpperCase();
                      }),
                      bidderLimitation: JSON.parse(r || "{}"),
                    },
                  ]
                );
              case 4:
                return (a = s.sent()), console.error(a), [2, { blocklist: [], countryExclusion: [], bidderLimitation: {} }];
              case 5:
                return [2];
            }
          });
        });
      }
      var tt = function () {
        return (
          (tt =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          tt.apply(this, arguments)
        );
      };
      var nt = (function () {
        function o() {
          (this.slotMap = new Map()),
            (this.totalRefreshNumber = {}),
            (this.enforceFamilyFriendlyFlow = function () {
              window.googletag.cmd.push(function () {
                window.googletag.pubads().setPrivacySettings({ underAgeOfConsent: !0, childDirectedTreatment: !0, restrictDataProcessing: !0, nonPersonalizedAds: !0 });
              });
            }),
            (this.enforceNonPersonalized = function () {
              window.googletag.cmd.push(function () {
                window.googletag.pubads().setPrivacySettings({ nonPersonalizedAds: !0 });
              });
            }),
            (this.requestAd = function (n) {
              var i, o;
              t.Z.track(e.Z.tracking.ads.display.requested, { size: n.size, opportunityId: n.opportunityId, adUnitPath: n.adUnitPath, duringGameplay: null === (i = n.duringGameplay) || void 0 === i ? void 0 : i.call(n), refresh: n.refreshNumber > 0, refreshNumber: n.refreshNumber, refreshType: (null === (o = n.criteria) || void 0 === o ? void 0 : o.refreshType) || "", platformAd: n.platformAd });
              var r = 0,
                a = function () {
                  if (!(--r > 0)) {
                    if (se())
                      try {
                        window.apstag.setDisplayBids();
                      } catch (e) {}
                    if (de())
                      try {
                        window.pbjs.setTargetingForGPTAsync([n.adUnitPath]), (n.pbjsTargetting = window.pbjs.getAdserverTargetingForAdUnitCode([n.adUnitPath]));
                      } catch (e) {}
                    n.refreshNumber > 0 ? window.googletag.pubads().refresh([n.gptSlot]) : window.googletag.display(n.id);
                  }
                };
              if ((se() && r++, de() && r++, se()))
                try {
                  window.apstag.fetchBids({ slots: [{ slotName: n.adUnitPath, slotID: n.id, sizes: [[n.width, n.height]] }], timeout: 1500 }, function () {
                    a();
                  });
                } catch (e) {
                  a();
                }
              if (de())
                try {
                  window.pbjs.requestBids({
                    adUnitCodes: [n.adUnitPath],
                    bidsBackHandler: function () {
                      a();
                    },
                  });
                } catch (e) {
                  a();
                }
              se() || de() || a();
            }),
            (this.requestHouseAd = function (i, o) {
              var r = tt(tt({}, o), { dfpIsBackfill: void 0, dfpLineItemId: void 0, dfpCampaignId: void 0, size: "".concat(i.width, "x").concat(i.height), bidder: "poki", bid: 0 });
              (0, D.Z)(tt(tt({}, r), { event: "request" })),
                fetch("https://api.poki.com/ads/houseads/display/".concat(i.width, "x").concat(i.height, "?game_id=").concat(n.Z.gameID, "&site=").concat(n.Z.siteID))
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (n) {
                    (i.innerAdContainer.innerHTML = '<a href="'.concat(n.click_through_url, '" target="_blank"><img src="').concat(n.asset, '" alt="house ad" /></a>')),
                      (o.houseAdId = n.id),
                      t.Z.track(e.Z.tracking.ads.display.impression, o),
                      (0, D.Z)(tt(tt({}, r), { event: "impression" })),
                      setTimeout(function () {
                        (0, D.Z)(tt(tt({}, r), { event: "viewable" }));
                      }, 1e3);
                  })
                  .catch(function () {});
            });
        }
        return (
          (o.prototype.callOnCanDestroy = function (e) {
            var t = this.slotMap.get(e);
            t && !t.onCanDestroyCalled && t.onCanDestroy && ((t.onCanDestroyCalled = !0), t.onCanDestroy());
          }),
          (o.prototype.setupSlotRenderEndedListener = function () {
            var n = this;
            window.googletag.cmd.push(function () {
              window.googletag.pubads().addEventListener("slotRenderEnded", function (i) {
                var o,
                  r,
                  a,
                  s,
                  d,
                  c = i.slot.getSlotElementId(),
                  l = n.slotMap.get(c);
                if (l && l.gptSlot) {
                  var u = i.slot || {},
                    p = (null === (o = u.getResponseInformation) || void 0 === o ? void 0 : o.call(u)) || {},
                    A = p.isBackfill,
                    h = p.lineItemId,
                    f = p.campaignId,
                    m = p.creativeId,
                    v = (function (e) {
                      if (!e || "function" != typeof e.indexOf) return null;
                      if (-1 !== e.indexOf("amazon-adsystem.com/aax2/apstag")) return null;
                      var t = new RegExp('(?:(?:pbjs\\.renderAd\\(document,|adId:*|hb_adid":\\[)|(?:pbadid=)|(?:adId=))[\'"](.*?)["\']', "gi"),
                        n = e.replace(/ /g, ""),
                        i = t.exec(n);
                      return (i && i[1]) || null;
                    })(null === (a = (r = u).getHtml) || void 0 === a ? void 0 : a.call(r)),
                    g = !!v,
                    y = l.pbjsTargetting || {},
                    b = y.hb_bidder,
                    w = y.hb_adomain,
                    k = (function (e) {
                      var t,
                        n = { cpm: 0 };
                      if (void 0 === window.pbjs || !de()) return n;
                      var i = window.pbjs.getAllWinningBids() || [];
                      return (
                        ((null === (t = window.pbjs.getBidResponsesForAdUnitCode(e)) || void 0 === t ? void 0 : t.bids) || []).forEach(function (e) {
                          !i.find(function (t) {
                            return t.adId === e.adId;
                          }) &&
                            e.cpm > n.cpm &&
                            (n = e);
                        }),
                        n
                      );
                    })(l.adUnitPath),
                    Z = i.isEmpty,
                    E = parseFloat(y.hb_pb);
                  isNaN(E) && (E = void 0);
                  var I = { size: l.size, opportunityId: l.opportunityId, refresh: l.refreshNumber > 0, refreshNumber: l.refreshNumber, refreshType: (null === (s = l.criteria) || void 0 === s ? void 0 : s.refreshType) || "", duringGameplay: null === (d = l.duringGameplay) || void 0 === d ? void 0 : d.call(l), adUnitPath: l.adUnitPath, prebidBid: E, prebidBidder: b, prebidWon: g, prebidSecondBid: k.cpm > 0 ? k.cpm : void 0, prebidSecondBidder: k.bidder, dfpIsBackfill: A, dfpLineItemId: h, dfpCampaignId: f, dfpCreativeId: m, isEmpty: Z, adDomain: w, platformAd: l.platformAd, blocked: X() };
                  l.onDisplayRendered && l.onDisplayRendered(Z), Z && n.callOnCanDestroy(l.id), Z && l.backfillHouseads ? n.requestHouseAd(l, I) : t.Z.track(e.Z.tracking.ads.display.impression, I);
                }
              }),
                window.googletag.pubads().addEventListener("impressionViewable", function (i) {
                  var o,
                    r,
                    a,
                    s,
                    d = i.slot.getSlotElementId();
                  ((null === (r = null === (o = null == i ? void 0 : i.slot) || void 0 === o ? void 0 : o.getAdUnitPath()) || void 0 === r ? void 0 : r.includes("ingame_rewarded_google")) || (null === (s = null === (a = null == i ? void 0 : i.slot) || void 0 === a ? void 0 : a.getAdUnitPath()) || void 0 === s ? void 0 : s.includes("sanghan_rweb_ad_unit"))) && t.Z.track(e.Z.tracking.ads.rewardedWeb.impression),
                    setTimeout(function () {
                      n.callOnCanDestroy(d);
                    }, 1e3 * Math.random());
                });
            });
          }),
          (o.prototype.validateDisplaySettings = function (e) {
            return (0, w.Z)() || (0, E.Z)() ? ["320x50"].includes(e) : ["970x250", "300x250", "728x90", "160x600", "320x50"].includes(e);
          }),
          (o.prototype.getDisplaySlotConfig = function (e, t, o) {
            var r = t.split("x").map(function (e) {
                return parseInt(e, 10);
              }),
              a = this.getDisplaySlotID(e);
            if (a) {
              var s = this.slotMap.get(a);
              if (s && s.width === r[0] && s.height === r[1]) return s.refreshNumber++, s;
              this.clearAd(e);
            }
            var d = (function (e) {
              var t = "/".concat(S, "/debug-display/debug-display-").concat(e);
              return i.Z.debug || (t = n.Z.isPokiIframe ? "/".concat(S, "/").concat(n.Z.device, "_ingame_").concat(e, "/").concat(n.Z.siteID, "_").concat(n.Z.device, "_ingame_").concat(e) : "/".concat(S, "/external_").concat(n.Z.device, "_display_ingame/external_").concat(n.Z.device, "_ingame_").concat(e)), t;
            })(t);
            o && (d = o);
            var c = "poki-".concat((0, C.Z)()),
              l = document.createElement("div");
            return (l.id = c), (l.className = "poki-ad-slot"), (l.style.width = "".concat(r[0], "px")), (l.style.height = "".concat(r[1], "px")), (l.style.overflow = "hidden"), (l.style.position = "relative"), l.setAttribute("data-poki-ad-size", t), { id: c, adUnitPath: d, size: t, width: r[0], height: r[1], refreshNumber: 0, onCanDestroyCalled: !1, backfillHouseads: !1, innerAdContainer: l, platformAd: !1, criteria: {} };
          }),
          (o.prototype.renderAd = function (e) {
            var t,
              n = this,
              o = e.container,
              r = e.size,
              a = e.opportunityId,
              s = e.criteria,
              d = void 0 === s ? {} : s,
              c = e.adUnitPath,
              l = void 0 === c ? "" : c,
              u = e.duringGameplay,
              p =
                void 0 === u
                  ? function () {
                      return !1;
                    }
                  : u,
              A = e.onCanDestroy,
              h = void 0 === A ? function () {} : A,
              f = e.onDisplayRendered,
              m = void 0 === f ? function () {} : f,
              v = e.backfillHouseads,
              g = void 0 !== v && v,
              y = e.platformAd,
              b = void 0 !== y && y,
              w = this.getDisplaySlotConfig(o, r, l);
            (w.backfillHouseads = g), (w.criteria = d), (w.platformAd = b), this.slotMap.set(w.id, w), (w.opportunityId = a), (w.duringGameplay = p), (w.onDisplayRendered = m), (w.onCanDestroy = h);
            var k = null;
            w.refreshNumber > 0 && (k = w.innerAdContainer),
              k || (o.appendChild(w.innerAdContainer), o.setAttribute("data-poki-ad-id", w.id)),
              null === (t = w.intersectionObserver) || void 0 === t || t.disconnect(),
              (w.intersectionObserver = new window.IntersectionObserver(
                function (e) {
                  var t, o, r;
                  e[0].isIntersecting &&
                    (null === (t = w.intersectionObserver) || void 0 === t || t.disconnect(),
                    setTimeout(function () {
                      n.callOnCanDestroy(w.id);
                    }, 6e3),
                    i.Z.debug
                      ? n.requestHouseAd(w, { opportunityId: w.opportunityId, refresh: w.refreshNumber > 0, refreshNumber: w.refreshNumber, refreshType: (null === (o = w.criteria) || void 0 === o ? void 0 : o.refreshType) || "", duringGameplay: null === (r = w.duringGameplay) || void 0 === r ? void 0 : r.call(w), adUnitPath: w.adUnitPath, platformAd: w.platformAd })
                      : window.googletag.cmd.push(function () {
                          var e = n.slotMap.get(w.id);
                          e && e.opportunityId === a && (n.totalRefreshNumber[w.adUnitPath] || (n.totalRefreshNumber[w.adUnitPath] = 0), n.setupGPT(w, tt(tt({}, d), { refresh_number: "".concat(w.refreshNumber || 0), total_refresh_number: "".concat(n.totalRefreshNumber[w.adUnitPath]) })), n.totalRefreshNumber[w.adUnitPath]++, n.requestAd(w));
                        }));
                },
                { threshold: 0.5 }
              )),
              w.intersectionObserver.observe(w.innerAdContainer);
          }),
          (o.prototype.setupGPT = function (e, t) {
            var n;
            e.gptSlot || (160 === e.width && 600 === e.height ? (e.gptSlot = window.googletag.defineSlot(e.adUnitPath, [[e.width, e.height], "fluid"], e.id).addService(window.googletag.pubads())) : (e.gptSlot = window.googletag.defineSlot(e.adUnitPath, [e.width, e.height], e.id).addService(window.googletag.pubads()))),
              window.googletag.enableServices(),
              null === (n = e.gptSlot) || void 0 === n || n.clearTargeting(),
              Object.keys(t).forEach(function (n) {
                var i,
                  o = t[n];
                o && (null === (i = e.gptSlot) || void 0 === i || i.setTargeting(n, o));
              });
          }),
          (o.prototype.clearAd = function (n) {
            var i,
              o,
              r = this.getDisplaySlotID(n);
            if (r) {
              var a = this.slotMap.get(r) || null;
              if (a) {
                for (a.onCanDestroy && !a.onCanDestroyCalled && console.warn("destroyAd called without waiting for onCanDestroy"), t.Z.track(e.Z.tracking.screen.destroyAd, { opportunityId: a.opportunityId, okToDestroy: a.onCanDestroyCalled, platformAd: a.platformAd }), null === (i = a.intersectionObserver) || void 0 === i || i.disconnect(), a.gptSlot && (null === (o = null === googletag || void 0 === googletag ? void 0 : googletag.destroySlots) || void 0 === o || o.call(googletag, [a.gptSlot])); n.lastChild; ) n.removeChild(n.lastChild);
                n.removeAttribute("data-poki-ad-id"), this.slotMap.delete(a.id);
              }
            } else console.error("destroyAd called on a container without ad");
          }),
          (o.prototype.getDisplaySlotID = function (e) {
            if (!e) return null;
            var t = e.getAttribute("data-poki-ad-id");
            return t || null;
          }),
          o
        );
      })();
      const it = nt;
      var ot,
        rt =
          ((ot = function (e, t) {
            return (
              (ot =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              ot(e, t)
            );
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
              this.constructor = e;
            }
            ot(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
          }),
        at = (function (n) {
          function i() {
            var e = (null !== n && n.apply(this, arguments)) || this;
            return (
              (e.requestAd = function (t) {
                (0, D.Z)({ event: "request", size: t.size, opportunityId: t.opportunityId, adUnitPath: t.adUnitPath });
                var n = 0,
                  i = function () {
                    --n > 0 || e.allBidsBack(t.id);
                  };
                if ((se() && n++, de() && n++, se()))
                  try {
                    window.apstag.fetchBids({ slots: [{ slotName: t.adUnitPath, slotID: t.id, sizes: [[t.width, t.height]] }], timeout: 1500 }, function (e) {
                      e && e.length > 0 && (t.amznTargetting = e[0]), i();
                    });
                  } catch (e) {
                    i();
                  }
                if (de())
                  try {
                    window.pbjs.requestBids({
                      adUnitCodes: [t.adUnitPath],
                      bidsBackHandler: function () {
                        (t.pbjsTargetting = window.pbjs.getAdserverTargetingForAdUnitCode([t.adUnitPath])), i();
                      },
                    });
                  } catch (e) {
                    i();
                  }
                se() || de() || ((t.pbjsTargetting = {}), (t.amznTargetting = {}), i());
              }),
              (e.setupGPT = function (e, t) {}),
              (e.setupSlotRenderEndedListener = function () {}),
              e
            );
          }
          return (
            rt(i, n),
            (i.prototype.allBidsBack = function (n) {
              var i,
                o,
                r,
                a,
                s = this,
                d = this.slotMap.get(n);
              if (d) {
                var c = document.createElement("iframe");
                c.setAttribute("frameborder", "0"), c.setAttribute("scrolling", "no"), c.setAttribute("marginheight", "0"), c.setAttribute("marginwidth", "0"), c.setAttribute("topmargin", "0"), c.setAttribute("leftmargin", "0"), c.setAttribute("allowtransparency", "true"), c.setAttribute("width", "".concat(d.width)), c.setAttribute("height", "".concat(d.height));
                var l = document.getElementById(d.id);
                if (l) {
                  l.appendChild(c);
                  var u = null === (i = null == c ? void 0 : c.contentWindow) || void 0 === i ? void 0 : i.document;
                  if (!u) return console.error("Display error - iframe injection for ad failed", n), void this.clearAd(l.parentNode);
                  var p = !0,
                    A = d.pbjsTargetting.hb_bidder,
                    h = parseFloat(d.pbjsTargetting.hb_pb);
                  isNaN(h) && (h = 0);
                  var f,
                    m,
                    v = ((f = null === (o = null == d ? void 0 : d.amznTargetting) || void 0 === o ? void 0 : o.amznbid), q[f] || 0);
                  v > h ? ((m = null === (r = null == d ? void 0 : d.amznTargetting) || void 0 === r ? void 0 : r.amnzp), (A = F[m] || "Amazon"), (h = v), (p = !1), this.renderAMZNAd(d.id, l, u)) : this.renderPrebidAd(d.id, l, u);
                  var g = !A;
                  t.Z.track(e.Z.tracking.ads.display.impression, { size: d.size, opportunityId: d.opportunityId, duringGameplay: null === (a = d.duringGameplay) || void 0 === a ? void 0 : a.call(d), adUnitPath: d.adUnitPath, prebidBid: h, prebidBidder: A, preBidWon: p, dfpIsBackfill: !1, dfpLineItemId: void 0, dfpCampaignId: void 0, adDomain: d.pbjsTargetting.hb_adomain, isEmpty: g }),
                    (0, D.Z)({ event: "impression", size: d.size, opportunityId: d.opportunityId, adUnitPath: d.adUnitPath, bidder: A, bid: h }),
                    d.onDisplayRendered && d.onDisplayRendered(g),
                    g
                      ? this.callOnCanDestroy(d.id)
                      : ((d.intersectionObserver = new IntersectionObserver(
                          function (e) {
                            e.forEach(function (e) {
                              e.isIntersecting
                                ? d.intersectingTimer ||
                                  (d.intersectingTimer = setTimeout(function () {
                                    var t;
                                    null === (t = d.intersectionObserver) || void 0 === t || t.unobserve(e.target), (0, D.Z)({ event: "viewable", size: d.size, opportunityId: d.opportunityId, adUnitPath: d.adUnitPath, bidder: A, bid: h }), s.callOnCanDestroy(d.id);
                                  }, 1e3))
                                : d.intersectingTimer && (clearTimeout(d.intersectingTimer), (d.intersectingTimer = void 0));
                            });
                          },
                          { threshold: 0.5 }
                        )),
                        d.intersectionObserver.observe(l));
                } else console.error("Display error - container not found", n);
              }
            }),
            (i.prototype.renderPrebidAd = function (e, t, n) {
              var i = this.slotMap.get(e);
              if (i) return i.pbjsTargetting.hb_adid ? void window.pbjs.renderAd(n, i.pbjsTargetting.hb_adid) : (console.error("Display info - prebid nothing to render", e, i.pbjsTargetting), void this.clearAd(t.parentNode));
            }),
            (i.prototype.renderAMZNAd = function (e, t, n) {
              var i,
                o,
                r = this.slotMap.get(e);
              if (r) return (null === (i = null == r ? void 0 : r.amznTargetting) || void 0 === i ? void 0 : i.amzniid) ? void window.apstag.renderImp(n, null === (o = null == r ? void 0 : r.amznTargetting) || void 0 === o ? void 0 : o.amzniid) : (console.error("Display info - amazon nothing to render", e, r.pbjsTargetting), void this.clearAd(t.parentNode));
            }),
            i
          );
        })(it);
      const st = at;
      a(640);
      var dt = function () {
          return (
            (dt =
              Object.assign ||
              function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            dt.apply(this, arguments)
          );
        },
        ct = function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, r) {
            function a(e) {
              try {
                d(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function s(e) {
              try {
                d(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            d((i = i.apply(e, t || [])).next());
          });
        },
        lt = function (e, t) {
          var n,
            i,
            o,
            r,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (r = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (r[Symbol.iterator] = function () {
                return this;
              }),
            r
          );
          function s(s) {
            return function (d) {
              return (function (s) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; r && ((r = 0), s[0] && (a = 0)), a; )
                  try {
                    if (((n = 1), i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)) return o;
                    switch (((i = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                      case 0:
                      case 1:
                        o = s;
                        break;
                      case 4:
                        return a.label++, { value: s[1], done: !1 };
                      case 5:
                        a.label++, (i = s[1]), (s = [0]);
                        continue;
                      case 7:
                        (s = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                          a = 0;
                          continue;
                        }
                        if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                          a.label = s[1];
                          break;
                        }
                        if (6 === s[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = s);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(s);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    s = t.call(e, a);
                  } catch (e) {
                    (s = [6, e]), (i = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & s[0]) throw s[1];
                return { value: s[0] ? s[1] : void 0, done: !0 };
              })([s, d]);
            };
          }
        },
        ut = function (e, t, n) {
          if (n || 2 === arguments.length) for (var i, o = 0, r = t.length; o < r; o++) (!i && o in t) || (i || (i = Array.prototype.slice.call(t, 0, o)), (i[o] = t[o]));
          return e.concat(i || Array.prototype.slice.call(t));
        },
        pt = new P(T.adTiming),
        At = (function () {
          function o() {
            var t,
              i,
              o = this;
            (this.autoStartOnReady = !1),
              (this.refreshNumber = (((t = {})[e.Z.ads.position.preroll] = 0), (t[e.Z.ads.position.midroll] = 0), (t[e.Z.ads.position.rewarded] = 0), t)),
              (this.totalRefreshNumber = (((i = {})[e.Z.ads.position.preroll] = 0), (i[e.Z.ads.position.midroll] = 0), (i[e.Z.ads.position.rewarded] = 0), i)),
              (this.criteria = {}),
              (this.handlers = {}),
              (this.initializingPromise = null),
              (this.sdkBooted = !1),
              (this.startAdEnabled = !1),
              (this.startStartAdsAfterTimerOnInit = !1),
              (this.initOptions = {}),
              (this.adSettings = { blocklist: [], countryExclusion: [], bidderLimitation: {} }),
              (this.videoRequestInFlight = !1),
              (this.adReady = !1),
              (this.sdkImaError = !1),
              (this.displayOnly = !1),
              (this.strictConsentMode = !1),
              (this.monetizationCoreLoaded = !1),
              (this.GPTRejected = !1),
              (this.IMARejected = !1),
              (this.startLoadingMonetizationCore = function () {
                return o.loadMonetizationCore();
              }),
              (this.configureA9 = function (e) {
                return ce(e, o.adSettings.bidderLimitation);
              }),
              (this.isAdBlocked = function () {
                return !1;
              }),
              (this.sdkNotBootedButCalled = function () {
                return !(!o.strictConsentMode || o.monetizationCoreLoaded) || (!o.strictConsentMode && !o.sdkBooted && (console.error("The Poki SDK was not yet booted"), !0));
              }),
              (this.genericCriteria = function () {
                var e = {};
                if (((e.tag = n.Z.tag), (e.site_id = n.Z.siteID), (e.categories = decodeURIComponent(n.Z.categories)), (e.iabcat = n.Z.iabcat), n.Z.experiment)) {
                  var t = decodeURIComponent(n.Z.experiment);
                  (e.experiment = t), n.Z.contentGameID && (e.expid_content_gameid = "".concat(t, "|").concat(n.Z.contentGameID));
                }
                return n.Z.specialCondition && o.specialConditions && o.specialConditions.includes(n.Z.specialCondition) ? ("landing" === n.Z.specialCondition ? (e.p4d_game_id_cond = "".concat(n.Z.gameID, "|l")) : "crosspromo" === n.Z.specialCondition ? (e.p4d_game_id_cond = "".concat(n.Z.gameID, "|cp")) : (e.p4d_game_id = n.Z.gameID)) : (e.p4d_game_id = n.Z.gameID), e;
              }),
              (this.runNonIMAVideoHouseAd = function (t) {
                _.Z.clearVideoDataAnnotations(),
                  _.Z.setVideoDataAnnotations(t),
                  (function () {
                    var e, t, n, i;
                    return L(this, void 0, void 0, function () {
                      var o, r, a, s, d, c, l, u;
                      return N(this, function (p) {
                        switch (p.label) {
                          case 0:
                            return [4, fetch(U())];
                          case 1:
                            return [4, p.sent().text()];
                          case 2:
                            return (
                              (o = p.sent()),
                              (r = new DOMParser()),
                              (a = r.parseFromString(o, "text/xml")),
                              (s = (null === (t = null === (e = a.querySelector("ClickThrough")) || void 0 === e ? void 0 : e.textContent) || void 0 === t ? void 0 : t.trim()) || ""),
                              (d = (null === (i = null === (n = a.querySelector("Duration")) || void 0 === n ? void 0 : n.textContent) || void 0 === i ? void 0 : i.trim()) || "00:00:11"),
                              (c = d.split(":")),
                              (l = 60 * +c[0] * 60 + 60 * +c[1] + +c[2]),
                              (u = ""),
                              a.querySelectorAll("MediaFile").forEach(function (e) {
                                var t,
                                  n = (null === (t = null == e ? void 0 : e.textContent) || void 0 === t ? void 0 : t.trim()) || "";
                                n.includes("advertisement.h264_medium.mp4") && (u = n);
                              }),
                              [2, { clickThrough: s, duration: l, videoUrl: u }]
                            );
                        }
                      });
                    });
                  })()
                    .then(function (e) {
                      o.playerSkin.show(), o.playerSkin.startNonIMAFallbackVideo(e);
                    })
                    .catch(function () {
                      y.Z.sendMessage(e.Z.message.sendCommand, { event: "adLibrariesNotLoaded" }), _.Z.dispatchEvent(e.Z.ads.error, dt(dt({}, t), { message: "HouseAd playback error" }));
                    });
              }),
              (window.googletag = window.googletag || { cmd: [] }),
              (window.pbjs = window.pbjs || { que: [] }),
              (this.display = pe() ? new st() : new it());
          }
          return (
            (o.prototype.init = function (e) {
              if ((void 0 === e && (e = {}), "undefined" != typeof window)) {
                var t = e.onReady,
                  i = void 0 === t ? null : t;
                return (this.initOptions = e), i && (this.registerHandler("onReady", i), this.registerHandler("onAdblocked", i)), this.sdkBooted ? console.error("Poki SDK has already been initialized") : (this.initializingPromise || ((e.strictConsentMode || n.Z.gdprApplies) && (this.strictConsentMode = !0), (this.initializingPromise = this.loadPokiSettings())), this.initializingPromise);
              }
            }),
            (o.prototype.loadPokiSettings = function () {
              var o = this,
                r = this.initOptions,
                s = r.debug,
                d = void 0 === s ? void 0 : s,
                c = r.logging,
                u = void 0 === c ? void 0 : c,
                p = r.wrapper;
              i.Z.init(d, u), this.setupDefaultEvents(), t.Z.setupDefaultEvents(), l(), (this.playerSkin = new Ue({ wrapper: p })), window.addEventListener("resize", this.resizeVideoAd.bind(this), !1);
              var A = We;
              (i.Z.debug || n.Z.isPlayground) &&
                (A = function () {
                  return Promise.resolve();
                });
              var h = n.Z.ccpaApplies,
                f = void 0 !== this.initOptions.isCCPA ? this.initOptions.isCCPA : "" !== h ? "1" === h : void 0,
                v = Ke,
                g = (this.initOptions.country || n.Z.country).toUpperCase();
              g &&
                void 0 !== f &&
                (v = function () {
                  return Promise.resolve({ ISO: g, ccpaApplies: f });
                });
              var y = [A(), v()],
                b = ut(ut([], y, !0), [et()], !1);
              return Promise.allSettled(b)
                .then(function (r) {
                  var s, d, c;
                  try {
                    var l = r[0],
                      u = r[1],
                      p = r[2];
                    if ("fulfilled" === l.status) {
                      var A = l.value;
                      if (A) {
                        n.Z.gameID || (0, n.w)("gameID", A.gameID), A.cachedContentGameID && (0, n.w)("contentGameID", A.cachedContentGameID), o.setAdTimings(A.adTiming), (o.specialConditions = A.specialConditions);
                        var h = (function (i) {
                            var o,
                              r = n.Z.playtest;
                            if (r) return { lobbyID: r, record: !1 };
                            r = (null == i ? void 0 : i.playtestLobbyID) || void 0;
                            var a = (null == i ? void 0 : i.playtestRecord) || !1;
                            if (r || a) {
                              var s = "4g" === (null === (o = navigator.connection) || void 0 === o ? void 0 : o.effectiveType) && !(0, w.Z)() && !(0, E.Z)() && n.Z.isPokiIframe && !Z && "GB" !== n.Z.country;
                              if ((t.Z.track(e.Z.tracking.playtest.showModal, { show: s }), s)) return { lobbyID: r, record: a };
                            }
                            return { lobbyID: void 0, record: !1 };
                          })(A),
                          v = h.lobbyID,
                          y = h.record;
                        (v || y) &&
                          a
                            .e(545)
                            .then(a.bind(a, 545))
                            .then(function (e) {
                              (0, e.initPlaytest)(A, v, y);
                            });
                      }
                      if (!((A && A.gameID) || i.Z.debug || (null === window || void 0 === window ? void 0 : window.isPokiPlayground) || "test" === (null === (d = null === (s = null === window || void 0 === window ? void 0 : window.process) || void 0 === s ? void 0 : s.env) || void 0 === d ? void 0 : d.NODE_ENV))) {
                        console.error("%cALERT", "background-color: red; border-radius: 3px; color: white; padding: 1px 5px", ["Possible Unauthorized Game Hosting Detectedâ—", "We've noticed that this game, which is part of Poki, is being played on a site that isn't currently allowed.", "If you're a developer who is hosting this game on your site, no worries! Please reach out to us to get your domain approved and we'll hook you up.", "However, if you are hosting this game without proper authorization, be advised: this is a violation of our terms and infringes upon copyright laws. Consider this message as a formal Digital Millennium Copyright Act (DMCA) Takedown Notice. Please remove the game from your site immediately to avoid further action."].join("\n\n"));
                      }
                    }
                    var b = { ISO: "ZZ", ccpaApplies: !1 };
                    if (("fulfilled" === u.status && (b = u.value), (0, n.w)("country", (g || (null == b ? void 0 : b.ISO) || "ZZ").toUpperCase()), (0, n.w)("gdprApplies", (0, Ge.M)(n.Z.country)), (0, n.w)("ccpaApplies", void 0 === f ? (null == b ? void 0 : b.ccpaApplies) || !1 : f), n.Z.gdprApplies && (o.strictConsentMode = !0), m(), "fulfilled" === p.status)) {
                      var k = p.value;
                      k && (o.adSettings = k);
                    }
                    (c = o.adSettings.blocklist), (H = c || []), o.strictConsentMode && _.Z.dispatchEvent(e.Z.ready), n.Z.isPlayground || o.loadMonetizationCore();
                  } catch (t) {
                    _.Z.dispatchEvent(e.Z.adblocked, { message: "".concat(t) });
                  }
                })
                .catch(function (t) {
                  _.Z.dispatchEvent(e.Z.adblocked, { message: "".concat(t) });
                });
            }),
            (o.prototype.loadMonetizationCore = function () {
              return ct(this, void 0, void 0, function () {
                var o,
                  r,
                  a,
                  s,
                  d,
                  c,
                  l,
                  p,
                  A,
                  h,
                  f,
                  m,
                  v,
                  g,
                  y,
                  w,
                  k = this;
                return lt(this, function (Z) {
                  switch (Z.label) {
                    case 0:
                      return (
                        (o = this.initOptions),
                        (r = o.prebid),
                        (a = void 0 === r ? {} : r),
                        (s = o.a9Signals),
                        (d = void 0 === s ? {} : s),
                        (c = o.volume),
                        (l = void 0 === c ? 1 : c),
                        (p = o.waterfallRetries),
                        (A = o.displayOnly),
                        (h = void 0 !== A && A),
                        (f = dt({}, this.initOptions)),
                        (m = f.nonPersonalized),
                        (v = void 0 !== m && m),
                        (g = f.familyFriendly),
                        (y = void 0 !== g && g),
                        n.Z.isInspector
                          ? (this.strictConsentMode || _.Z.dispatchEvent(e.Z.ready), [2])
                          : ((v = v || !!n.Z.nonPersonalized),
                            (y = y || !!n.Z.familyFriendly),
                            (0, n.w)("nonPersonalized", v),
                            (0, n.w)("familyFriendly", y),
                            (w = []),
                            (this.displayOnly = h),
                            !this.strictConsentMode || n.Z.familyFriendly
                              ? [3, 2]
                              : [
                                  4,
                                  new Promise(function (e) {
                                    (n.Z.gdprApplies && !i.Z.debug) || e();
                                    var t = 0,
                                      o = function () {
                                        if (!u) return t++, void setTimeout(o, 50 * t);
                                        window.__tcfapi("addEventListener", 2, function (t, n) {
                                          var i, o;
                                          n && ["tcloaded", "useractioncomplete"].includes(t.eventStatus) && (null === (o = null === (i = null == t ? void 0 : t.purpose) || void 0 === i ? void 0 : i.consents) || void 0 === o ? void 0 : o[1]) && (t.listenerId && window.__tcfapi("removeEventListener", 2, function () {}, t.listenerId), e());
                                        });
                                      };
                                    o();
                                  }),
                                ])
                      );
                    case 1:
                      Z.sent(), (Z.label = 2);
                    case 2:
                      return (
                        w.push((0, b.Z)("https://securepubads.g.doubleclick.net/tag/js/gpt.js")),
                        h || w.push((0, b.Z)("https://imasdk.googleapis.com/js/sdkloader/ima3.js")),
                        n.Z.familyFriendly || n.Z.nonPersonalized ? (n.Z.familyFriendly && this.display.enforceFamilyFriendlyFlow(), (0, n.w)("nonPersonalized", "true"), this.display.enforceNonPersonalized()) : w.push((0, b.Z)("https://a.poki.com/prebid/prebid8.16.0.js"), (0, b.Z)("https://c.amazon-adsystem.com/aax2/apstag.js")),
                        this.display.setupSlotRenderEndedListener(),
                        [
                          2,
                          Promise.allSettled(w)
                            .then(function (o) {
                              try {
                                var r = o[0],
                                  s = o[1];
                                "rejected" === r.status && (k.GPTRejected = !0),
                                  le(a, k.adSettings.bidderLimitation),
                                  ce(d, k.adSettings.bidderLimitation),
                                  window.googletag.cmd.push(function () {
                                    googletag.pubads().addEventListener("rewardedSlotReady", function (n) {
                                      t.Z.track(e.Z.tracking.ads.rewardedWeb.ready), n.makeRewardedVisible();
                                    }),
                                      googletag.pubads().addEventListener("rewardedSlotGranted", function () {
                                        he = !0;
                                      }),
                                      googletag.pubads().addEventListener("rewardedSlotClosed", function () {
                                        var n, i, o;
                                        he ? t.Z.track(e.Z.tracking.ads.rewardedWeb.closedGranted) : t.Z.track(e.Z.tracking.ads.rewardedWeb.closedDeclined), (null === (i = null === (n = null === window || void 0 === window ? void 0 : window.location) || void 0 === n ? void 0 : n.toString()) || void 0 === i ? void 0 : i.includes("#goog_rewarded")) && (null === (o = null === window || void 0 === window ? void 0 : window.history) || void 0 === o || o.go(-1)), _.Z.dispatchEvent(e.Z.ads.completed, { rewardAllowed: he });
                                      }),
                                      googletag.pubads().addEventListener("slotRenderEnded", function (n) {
                                        var i;
                                        ve() === (null === (i = null == n ? void 0 : n.slot) || void 0 === i ? void 0 : i.getAdUnitPath()) && n.isEmpty && (t.Z.track(e.Z.tracking.ads.rewardedWeb.empty), _.Z.dispatchEvent(e.Z.ads.video.startHouseAdFlow));
                                      }),
                                      googletag.pubads().addEventListener("slotRequested", function (n) {
                                        n || (t.Z.track(e.Z.tracking.ads.rewardedWeb.empty), _.Z.dispatchEvent(e.Z.ads.video.startHouseAdFlow));
                                      });
                                  }),
                                  h || "rejected" !== s.status || (k.IMARejected = !0);
                                var c = dt({}, T);
                                i.Z.debug && ((c.adTiming.startAdsAfter = 0), k.setAdTimings(c.adTiming));
                                var u = n.Z.forceAd;
                                if ((u && (k.setAdTimings({ preroll: !0, timeBetweenAds: 12e4, timePerTry: 7e3, startAdsAfter: 0 }), (c.customCriteria = dt(dt({}, c.customCriteria), { force_ad: u }))), (k.criteria = dt({}, c.customCriteria)), (k.ima = new Ve(l)), k.playerSkin.setupEvents(k), k.startStartAdsAfterTimerOnInit && pt.startStartAdsAfterTimer(), (k.waterfall = new be(k.ima, { timing: pt, totalRetries: p })), (k.monetizationCoreLoaded = !0), k.GPTRejected && k.IMARejected)) return void _.Z.dispatchEvent(e.Z.adblocked, { message: "Both core sdks failed to boot" });
                                k.strictConsentMode || _.Z.dispatchEvent(e.Z.ready);
                              } catch (t) {
                                _.Z.dispatchEvent(e.Z.adblocked, { message: "".concat(t) });
                              }
                            })
                            .catch(function (t) {
                              console.error(t), _.Z.dispatchEvent(e.Z.adblocked, { message: "".concat(t) });
                            }),
                        ]
                      );
                  }
                });
              });
            }),
            (o.prototype.requestAd = function (o) {
              var r, a, s, d;
              void 0 === o && (o = {});
              var c = o.autoStart,
                l = void 0 === c || c,
                u = o.onFinish,
                p = void 0 === u ? null : u,
                A = o.onStart,
                h = void 0 === A ? null : A,
                f = o.position,
                m = void 0 === f ? null : f,
                y = { opportunityId: (0, C.Z)(), position: m };
              if ((t.Z.track(m === e.Z.ads.position.rewarded ? e.Z.tracking.screen.rewardedBreak : e.Z.tracking.screen.commercialBreak, dt(dt({}, o.rewardedKVs), y)), this.videoRequestInFlight)) _.Z.dispatchEvent(e.Z.ads.inFlight, dt(dt({}, y), { onFinish: p }));
              else if (
                ((this.videoRequestInFlight = !0),
                (this.autoStartOnReady = !1 !== l),
                this.registerHandler("onFinish", function (t) {
                  _.Z.dispatchEvent(e.Z.playtest.stopVideo), p && p(t);
                }),
                this.registerHandler("onStart", function (t) {
                  _.Z.dispatchEvent(e.Z.playtest.startVideo, { position: m }), h && h(t);
                }),
                null !== m && (0, I.Z)(m, e.Z.ads.position))
              )
                if (this.displayOnly) _.Z.dispatchEvent(e.Z.ads.error, dt(dt({}, y), { message: "Video disabled" }));
                else {
                  if (!this.sdkBooted) return _.Z.dispatchEvent(e.Z.ads.error, dt(dt({}, y), { message: "Requesting ad on unbooted SDK" })), void this.sdkNotBootedButCalled();
                  if ((!(0, w.Z)() && !(0, E.Z)()) || m === e.Z.ads.position.rewarded)
                    if ((null === (a = null === (r = this.ima) || void 0 === r ? void 0 : r.isAdRunning) || void 0 === a ? void 0 : a.call(r)) || (null === (d = null === (s = this.waterfall) || void 0 === s ? void 0 : s.isRunning) || void 0 === d ? void 0 : d.call(s))) _.Z.dispatchEvent(e.Z.ads.busy, y);
                    else if (m !== e.Z.ads.position.preroll || pt.prerollPossible())
                      if (m === e.Z.ads.position.rewarded || pt.requestPossible())
                        if (m !== e.Z.ads.position.rewarded && this.adSettings.countryExclusion.includes(n.Z.country)) _.Z.dispatchEvent(e.Z.ads.limit, dt(dt({}, y), { reason: e.Z.info.messages.disabled }));
                        else {
                          if (this.strictConsentMode && !this.monetizationCoreLoaded) return m === e.Z.ads.position.rewarded || i.Z.debug ? void this.runNonIMAVideoHouseAd(y) : void _.Z.dispatchEvent(e.Z.ads.error, dt(dt({}, y), { messaage: "Ad libraries not yet loaded" }));
                          if (!this.ima || this.sdkImaError || this.IMARejected) m === e.Z.ads.position.rewarded ? this.runNonIMAVideoHouseAd(y) : _.Z.dispatchEvent(e.Z.ads.error, dt(dt({}, y), { message: "Bot, IMA or Adblocker error" }));
                          else if (v()) _.Z.dispatchEvent(e.Z.ads.error, dt(dt({}, y), { messaage: "No TCFv2 CMP detected, please contact developersupport@poki.com for more information" }));
                          else if (g()) _.Z.dispatchEvent(e.Z.ads.error, dt(dt({}, y), { messaage: "No USP detected, please contact developersupport@poki.com for more information" }));
                          else if (this.adReady) _.Z.dispatchEvent(e.Z.ads.ready, y);
                          else {
                            _.Z.clearVideoDataAnnotations(), _.Z.setVideoDataAnnotations(y);
                            var b = dt(dt(dt({}, this.genericCriteria()), this.criteria), { position: m, ab: Math.round(Math.random()).toString(), refresh_number: this.refreshNumber[m], total_refresh_number: this.totalRefreshNumber[m] });
                            this.refreshNumber[m]++, this.totalRefreshNumber[m]++, this.playerSkin.show(), this.resizeVideoAd(), this.waterfall.start(b, m);
                          }
                        }
                      else _.Z.dispatchEvent(e.Z.ads.limit, dt(dt({}, y), { reason: e.Z.info.messages.timeLimit }));
                    else _.Z.dispatchEvent(e.Z.ads.limit, dt(dt({}, y), { reason: e.Z.info.messages.prerollLimit }));
                  else _.Z.dispatchEvent(e.Z.ads.error, dt(dt({}, y), { message: "Interstitials are disabled on mobile" }));
                }
              else console.error("POKI-SDK: Invalid position");
            }),
            (o.prototype.displayAd = function (t) {
              var o = t.container,
                r = t.size;
              return (t.criteria = dt(dt(dt({ ab: Math.round(Math.random()).toString() }, this.genericCriteria()), this.criteria), t.criteria || {})), t.platformAd && (delete t.criteria.p4d_game_id_cond, delete t.criteria.p4d_game_id), i.Z.debug ? (this.display.renderAd(t), !0) : this.strictConsentMode && !this.monetizationCoreLoaded ? (_.Z.dispatchEvent(e.Z.ads.error, { messaage: "Ad libraries not yet loaded" }), !1) : this.GPTRejected ? (_.Z.dispatchEvent(e.Z.ads.error, { message: "Bot, IMA or Adblocker error" }), !1) : v() ? (_.Z.dispatchEvent(e.Z.ads.error, { message: "No TCFv2 CMP detected, please contact developersupport@poki.com for more information" }), !1) : g() ? (_.Z.dispatchEvent(e.Z.ads.error, { message: "No USP detected, please contact developersupport@poki.com for more information" }), !1) : r ? (this.sdkBooted ? (o ? (void 0 === window.googletag ? (_.Z.dispatchEvent(e.Z.ads.error, { message: "Adblocker has been detected" }), !1) : this.adSettings.countryExclusion.includes(n.Z.country) ? (_.Z.dispatchEvent(e.Z.ads.limit, { reason: e.Z.info.messages.disabled }), !1) : this.display.validateDisplaySettings(r) ? (this.display.renderAd(t), !0) : (_.Z.dispatchEvent(e.Z.ads.error, { reason: "Display size ".concat(r, " is not supported on this device") }), !1)) : (_.Z.dispatchEvent(e.Z.ads.error, { message: "Provided container does not exist" }), !1)) : (_.Z.dispatchEvent(e.Z.ads.error, { message: "Requesting ad on unbooted SDK" }), this.sdkNotBootedButCalled(), !1)) : (_.Z.dispatchEvent(e.Z.ads.error, { message: "No ad size given, usage: displayAd(<container>, <size>)" }), !1);
            }),
            (o.prototype.destroyAd = function (e) {
              this.adSettings.countryExclusion.includes(n.Z.country) || ((e = e || document.body), this.display.clearAd(e));
            }),
            (o.prototype.startStartAdsAfterTimer = function () {
              this.sdkNotBootedButCalled() ? (this.startStartAdsAfterTimerOnInit = !0) : pt.startStartAdsAfterTimer();
            }),
            (o.prototype.muteAd = function () {
              this.sdkNotBootedButCalled() || this.ima.muteAd();
            }),
            (o.prototype.setVolume = function (e) {
              var t;
              this.sdkNotBootedButCalled() || null === (t = this.ima) || void 0 === t || t.setVolume(e);
            }),
            (o.prototype.forcePreroll = function () {
              if (!this.sdkNotBootedButCalled()) {
                var t = pt.prerollPossible;
                (pt.prerollPossible = function () {
                  return !0;
                }),
                  this.requestAd({ position: e.Z.ads.position.preroll }),
                  (pt.prerollPossible = t);
              }
            }),
            (o.prototype.resumeAd = function () {
              this.sdkNotBootedButCalled() || (this.playerSkin.hidePauseButton(), this.ima.resumeAd());
            }),
            (o.prototype.startAdClicked = function () {
              this.sdkNotBootedButCalled() || (k() && this.startAdEnabled && ((this.startAdEnabled = !1), this.playerSkin.hideStartAdButton(), this.ima.startIOSPlayback()));
            }),
            (o.prototype.stopVideoAd = function () {
              this.playerSkin.hide(), _.Z.dispatchEvent(e.Z.ads.stopped), this.sdkNotBootedButCalled() || (this.waterfall.stopWaterfall(), this.ima.stopPlayback(), Ae && googletag.destroySlots([Ae]));
            }),
            (o.prototype.resizeVideoAd = function () {
              var e = this;
              if (!this.sdkNotBootedButCalled()) {
                var t = this.playerSkin.getVideoBounds();
                if (0 === t.width || 0 === t.height)
                  return (
                    this.resizeTimeout && clearTimeout(this.resizeTimeout),
                    void (this.resizeTimeout = setTimeout(function () {
                      e.resizeVideoAd();
                    }, 100))
                  );
                this.ima.resize(t.width, t.height);
              }
            }),
            (o.prototype.setAdTimings = function (t) {
              var n;
              void 0 === t && (t = {}), (this.refreshNumber = (((n = {})[e.Z.ads.position.preroll] = 0), (n[e.Z.ads.position.midroll] = 0), (n[e.Z.ads.position.rewarded] = 0), n)), pt.setTimings(t), pt.resetAll();
            }),
            (o.prototype.setSpecialConditions = function (e) {
              this.specialConditions = e || [];
            }),
            (o.prototype.startAd = function () {
              this.sdkNotBootedButCalled() || (this.adReady ? (this.resizeVideoAd(), this.ima.startPlayback()) : _.Z.dispatchEvent(e.Z.ads.error, { message: "No ads ready to start" }));
            }),
            (o.prototype.registerHandler = function (e, t) {
              this.handlers[e] = t;
            }),
            (o.prototype.callHandler = function (e, t) {
              void 0 === t && (t = void 0), "function" == typeof this.handlers[e] && this.handlers[e](t);
            }),
            (o.prototype.setupDefaultEvents = function () {
              var t = this;
              _.Z.addEventListener(e.Z.ready, function () {
                (t.sdkBooted = !0), t.setVolume(0.6), t.callHandler("onReady");
              }),
                _.Z.addEventListener(e.Z.adblocked, function () {
                  (t.sdkBooted = !0), (t.sdkImaError = !0);
                }),
                _.Z.addEventListener(e.Z.ads.ready, function () {
                  (t.adReady = !0), t.autoStartOnReady && t.startAd();
                }),
                _.Z.addEventListener(e.Z.ads.started, function () {
                  t.playerSkin.hideSpinner(), t.callHandler("onStart", { type: e.Z.ads.limit });
                }),
                _.Z.addEventListener(e.Z.ads.video.paused, function () {
                  t.playerSkin.showPauseButton();
                }),
                _.Z.addEventListener(e.Z.ads.limit, function () {
                  (t.videoRequestInFlight = !1), t.callHandler("onFinish", { type: e.Z.ads.limit, rewardAllowed: !1 });
                }),
                _.Z.addEventListener(e.Z.ads.stopped, function () {
                  (t.videoRequestInFlight = !1), t.callHandler("onFinish", { type: e.Z.ads.stopped, rewardAllowed: !1 });
                }),
                _.Z.addEventListener(e.Z.ads.error, function (n) {
                  (t.videoRequestInFlight = !1), t.callHandler("onFinish", { type: e.Z.ads.error, rewardAllowed: !!n.rewardAllowed });
                }),
                _.Z.addEventListener(e.Z.ads.inFlight, function (t) {
                  var n,
                    i = dt({}, t);
                  delete i.onFinish, null === (n = t.onFinish) || void 0 === n || n.call(t, dt(dt({}, i), { type: e.Z.ads.busy, rewardAllowed: !1 }));
                }),
                _.Z.addEventListener(e.Z.ads.busy, function () {
                  t.callHandler("onFinish", { type: e.Z.ads.busy, rewardAllowed: !1 });
                }),
                _.Z.addEventListener(e.Z.ads.completed, function (n) {
                  (t.videoRequestInFlight = !1), t.callHandler("onFinish", { type: e.Z.ads.completed, rewardAllowed: !!n.rewardAllowed });
                }),
                [e.Z.ads.limit, e.Z.ads.stopped, e.Z.ads.error, e.Z.ads.completed].forEach(function (e) {
                  _.Z.addEventListener(e, function () {
                    t.playerSkin && t.playerSkin.hide(), (t.adReady = !1);
                  });
                });
            }),
            o
          );
        })();
      const ht = At;
      var ft = new (a(398).ZP)(new ht());
      for (var mt in ft) window.PokiSDK[mt] = ft[mt];
    })();
})();
