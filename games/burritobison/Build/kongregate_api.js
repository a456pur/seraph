var Kongregate = Kongregate || {};
Kongregate.Utils = Kongregate.Utils || {};
Kongregate.Utils.catchErrors = function(a, b, c) {
    return function() {
        try {
            return a.apply(b, arguments)
        } catch (d) {
            return Kongregate.Log.error("catchErrors caught unhandled exception", d), c
        }
    }
};
(function() {
    function a(a, c, d) {
        Kongregate.Log[a] = function() {
            try {
                "undefined" !== typeof active_user && void 0 === Kongregate.Log.debugLevel && (Kongregate.Log.debugLevel = active_user.debugLevel()), Kongregate.Log.debugLevel >= c && (console[d] ? Function.prototype.apply.call(console[d], console, arguments) : console.log(arguments))
            } catch (a) {}
        }
    }
    Kongregate.Log = {};
    a("spam", 5, "log");
    a("debug", 4, "log");
    a("info", 3, "info");
    a("warn", 2, "warn");
    a("error", 1, "error")
})();
KonduitEvent = {
    INIT: "init",
    CONNECT: "connect",
    CONNECTED: "connected",
    DISCONNECT: "disconnect",
    LOGIN: "login",
    SWITCH_USER: "switch_user",
    JOIN_ROOM: "join_room",
    LEAVE_ROOM: "leave_room",
    USER_JOIN: "user_join",
    USER_DEPARTURE: "user_departure",
    USER_CHANGED: "user_changed",
    ROOM_MESSAGE: "room_message",
    SYSTEM_MESSAGE: "system_message",
    PRIVATE_MESSAGE: "private_message",
    ADMIN_MESSAGE: "admin_message",
    MESSAGE_ERROR: "message_error",
    SET_PRESENCE: "set_presence",
    GUEST_COUNT: "guest_count",
    ROOM_NOT_FOUND: "room_not_found",
    ROOM_FULL: "room_full",
    REQUEST_CHAT_ROOM: "request_chat_room",
    CREATE_PRIVATE_ROOM: "create_private_room",
    DESTROY_PRIVATE_ROOM: "destroy_private_room",
    PRIVATE_ROOM_INVITATION: "private_room_invitation",
    PRIVATE_ROOM_KICK: "private_room_kick",
    PRIVATE_ROOM_INVITATION_SENT: "private_room_invitation_sent",
    JOIN_GUILD_ROOM: "join_guild_room",
    SILENCED: "silenced",
    PARTICIPATE: "participate",
    AMNESTY: "amnesty",
    API_INITIALIZED: "api_initialized",
    ADD_STATISTICS: "add_statistics",
    STATISTIC_UPDATED: "statistic_updated",
    STATISTIC_SUBMISSION: "statistic_submission",
    STATISTICS_FLUSH: "statistics_flush",
    SET_ACCOMPLISHMENT_PROGRESS: "set_accomplishment_progress",
    NEW_HIGH_SCORE: "new_high_score",
    DISPLAY_SHOUT_BOX: "display_shout_box",
    DISPLAY_INVITATION_BOX: "display_invitation_box",
    SEND_PRIVATE_MESSAGE: "send_private_message",
    DISPLAY_FEED_POST_BOX: "display_feed_post_box",
    DISPLAY_SIGN_IN_LIGHTBOX: "display_sign_in_lightbox",
    DISPLAY_REGISTRATION_LIGHTBOX: "display_registration_lightbox",
    RESIZE_GAME: "resize_game",
    HANDLE_ITEM_CHECKOUT_REQUEST: "handle_item_checkout_request",
    KONDUIT_MESSAGE: "konduit_message",
    ANALYTICS_PAYLOAD: "analytics_payload",
    OP_EXTERNAL_MESSAGE: "ext.msg",
    OP_CONNECTED: "connected",
    OP_HELLO: "hello",
    OP_USER_INFO: "user.info",
    OP_SIGN_IN: "sign_in",
    PARAM_USER: "user",
    PARAM_USER_ID: "user_id",
    PARAM_GAME_AUTH_TOKEN: "auth_token",
    PURCHASE_RESULT: "purchase_result",
    PARAM_LOCALCONNECTION_ONLY: "localconnection_only",
    CUSTOM_TAB_MESSAGE: "custom_tab_message",
    CUSTOM_TAB_SHOW: "custom_tab_show",
    CUSTOM_TAB_CLOSE: "custom_tab_close",
    CUSTOM_TAB_SHOWN: "custom_tab_shown",
    CUSTOM_TAB_CLEAR_MESSAGES: "custom_tab_clear_messages",
    OP_CHAT_TAB: "chat.tab",
    OP_CHAT_CLEAR_DIALOG: "chat.dlg.clear",
    OP_CHAT_DISPLAY: "chat.disp",
    OP_CHAT_MSG: "chat.msg",
    OP_CHAT_CANVAS_ELEMENT: "chat.elm",
    OP_CHAT_PRIVATE_MESSAGE: "chat.privateMessage",
    OP_CHAT_RESIZE_GAME: "chat.resizeGame",
    OP_CHAT_DISPLAY_INVITATION_BOX: "chat.invite",
    OP_CHAT_DISPLAY_FEED_POST_BOX: "chat.feedpost",
    OP_CHAT_DISPLAY_REGISTRATION: "chat.registration",
    OP_CHAT_DISPLAY_SHOUT_BOX: "chat.shoutbox",
    PARAM_SHOUT_MESSAGE: "shout_message",
    PARAM_CANVAS_SIZE: "chat.canvas.size",
    PARAM_RESIZE_GAME_WIDTH: "chat.resizeGame.width",
    PARAM_RESIZE_GAME_HEIGHT: "chat.resizeGame.height",
    PARAM_INVITATION_MESSAGE: "invitation_message",
    PARAM_FRIEND_FILTER: "filter",
    PARAM_IMAGE_URI: "image_uri",
    PARAM_KV_PARAMS: "kv_params",
    PARAM_NAME: "name",
    PARAM_DESCRIPTION: "desc",
    PARAM_DATA: "data",
    OP_SHOUT_CALLBACK: "ext.shout_callback",
    PARAM_MESSAGE_TYPE: "ext.message_type",
    PARAM_MESSAGE_RECIPIENTS: "ext.message_recipients",
    PARAM_ERROR: "error",
    PARAM_SUCCESS: "success",
    PARAM_REQUEST_ID: "req.id",
    OP_STATS_SUBMIT: "stat.submit",
    ITEM_LIST: "mtx.item_list",
    ITEM_CHECKOUT: "mtx.checkout",
    PURCHASE_KREDS: "mtx.kred_purchase",
    ITEM_INSTANCES: "mtx.item_instances",
    USE_ITEM_INSTANCE: "mtx.use_item_instance",
    PARAM_PURCHASE_METHOD: "purchase_method",
    PARAM_ITEM_TAGS: "item_tags",
    PARAM_ITEMS: "items",
    PARAM_ORDER_INFO: "order_info",
    PARAM_ID: "id",
    ADS_INITIALIZE: "ads.initialize",
    ADS_AVAILABLE: "ads.available",
    ADS_UNAVAILABLE: "ads.unavailable",
    ADS_SHOW_INCENTIVIZED: "ads.show_incentivized",
    AD_OPENED: "ads.ad_opened",
    AD_COMPLETED: "ads.ad_completed",
    AD_ABANDONED: "ads.ad_abandoned",
    PROCESSING_SAVE_SHARED_CONTENT: "processing_save_shared_content",
    SAVE_SHARED_CONTENT: "save_shared_content",
    SAVE_SHARED_CONTENT_COMPLETE: "shared_content_save_complete",
    LOAD_SHARED_CONTENT: "load_shared_content",
    BROWSE_SHARED_CONTENT: "browse_shared_content",
    OP_SAVE_SHARED_CONTENT: "save_shared_content",
    OP_BROWSE_SHARED_CONTENT: "browse_shared_content",
    OP_LOAD_SHARED_CONTENT: "load_shared_content",
    OP_SHARED_CONTENT_SAVE_COMPLETE: "shared_content_save_complete",
    PARAM_CONTENT_TYPE: "content_type",
    PARAM_LABEL: "label",
    PARAM_IMAGE: "image",
    OP_IMAGE_AVATAR_SUBMIT: "avatar.submit",
    OP_IMAGE_AVATAR_FINISHED: "avatar.finished",
    IMAGE_AVATAR_SUBMIT: "image_avatar_submit",
    IMAGE_AVATAR_COMPLETE: "image_avatar_complete",
    OP_ANALYTICS_PAYLOAD: "analytics.payload",
    HOLODECK_DATA: "holodeck_data",
    PARAM_HOLODECK_TYPE: "holodeck_type",
    FETCH_HISTORY: "fetch_history",
    HISTORY_RECEIVED: "history_received",
    FAYE_DISCONNECT: "faye_disconnect"
};
KonduitChatErrorMessage = {
    MESSAGE_TOO_LONG: "error_msg_too_long",
    RATE_LIMITED: "error_msg_rate_limit"
};
KonduitPresenceType = {
    CHAT: "chat",
    AWAY: "away"
};
Kongregate.polyfillJSON = function() {
    window.JSON || (window.JSON = {
        parse: function(a) {
            return eval("(" + a + ")")
        },
        stringify: function() {
            var a = Object.prototype.toString,
                b = Array.isArray || function(c) {
                    return "[object Array]" === a.call(c)
                },
                c = {
                    '"': '\\"',
                    "\\": "\\\\",
                    "\b": "\\b",
                    "\f": "\\f",
                    "\n": "\\n",
                    "\r": "\\r",
                    "\t": "\\t"
                },
                d = function(a) {
                    return c[a] || "\\u" + (a.charCodeAt(0) + 65536).toString(16).substr(1)
                },
                e = /[\\"\u0000-\u001F\u2028\u2029]/g;
            return function h(c) {
                if (null == c) return "null";
                if ("number" === typeof c) return isFinite(c) ?
                    c.toString() : "null";
                if ("boolean" === typeof c) return c.toString();
                if ("object" === typeof c) {
                    if ("function" === typeof c.toJSON) return h(c.toJSON());
                    if (b(c)) {
                        for (var m = "[", p = 0; p < c.length; p++) m += (p ? ", " : "") + h(c[p]);
                        return m + "]"
                    }
                    if ("[object Object]" === a.call(c)) {
                        m = [];
                        for (p in c) Object.prototype.hasOwnProperty.call(c, p) && m.push(h(p) + ": " + h(c[p]));
                        return "{" + m.join(", ") + "}"
                    }
                }
                return '"' + c.toString().replace(e, d) + '"'
            }
        }()
    })
};
Kongregate.contentLoaded = function(a) {
    var b = window,
        c = !1,
        d = !0,
        e = b.document,
        k = e.documentElement,
        h = e.addEventListener,
        g = h ? "addEventListener" : "attachEvent",
        m = h ? "removeEventListener" : "detachEvent",
        p = h ? "" : "on",
        l = function(d) {
            if (!("readystatechange" == d.type && "complete" != e.readyState) && (("load" == d.type ? b : e)[m](p + d.type, l, !1), !c && (c = !0))) a.call(b, d.type || d)
        },
        r = function() {
            try {
                k.doScroll("left")
            } catch (a) {
                setTimeout(r, 50);
                return
            }
            l("poll")
        };
    if ("complete" == e.readyState) a.call(b, "lazy");
    else {
        if (!h && k.doScroll) {
            try {
                d = !b.frameElement
            } catch (q) {}
            d && r()
        }
        e[g](p + "DOMContentLoaded", l, !1);
        e[g](p + "readystatechange", l, !1);
        b[g](p + "load", l, !1)
    }
};
(function() {
    var a;
    Kongregate.MessageConnection = function(a) {
        this.initialize(a)
    };
    Kongregate.MessageConnection.MESSAGE_EVENT = "kongregate:api:message";
    Kongregate.MessageConnection.prototype = {
        initialize: function(b) {
            a = b.channel_id;
            this._window = b.window || window;
            this._targetOrigin = b.target_origin;
            this._targetWindows = b.target_window ? [b.target_window] : [];
            this._retryConnection = b.retry_connection || !1;
            this._messageListeners = [];
            this._supportsObjects = Kongregate.PostMessage.supportsObjects();
            this._client = "string" ===
                typeof this._targetOrigin;
            this._connected = this._handleMessages = !1
        },
        addMessageListener: function(a) {
            this._messageListeners.push(a)
        },
        isSupported: function() {
            return !this.supportsObjects() && "undefined" === typeof this._window.JSON ? !1 : "undefined" !== typeof(this._targetWindows[0] || window).postMessage
        },
        connected: function() {
            return this._connected
        },
        isClient: function() {
            return this._client
        },
        supportsObjects: function() {
            return this._supportsObjects
        },
        logPrefix: function() {
            return this._client ? "[Game:JS]" : "[Konduit]"
        },
        listen: function() {
            if (this.isSupported() && !this._listening) {
                this._listening = !0;
                var a = this;
                Kongregate.PostMessage.addMessageListener(this._window, function(c) {
                    a.onMessageReceived.call(a, c)
                })
            }
        },
        parseMessage: function(a) {
            try {
                var c = Kongregate.PostMessage.parseMessage(a);
                if (c && c.kongregate_type === Kongregate.MessageConnection.MESSAGE_EVENT) return {
                    opcode: c.opcode,
                    params: c.params
                }
            } catch (d) {
                Kongregate.Log.warn(this.logPrefix(), "Error parsing message", a, d)
            }
            return null
        },
        onMessageReceived: function(a) {
            var c = a.origin ||
                a.originalEvent.origin;
            this._targetOrigin && c !== this._targetOrigin ? Kongregate.Log.debug(this.logPrefix(), "Ignoring message from " + c) : (c = this.parseMessage(a.data)) && this.processMessage(c, a)
        },
        processMessage: function(a, c) {
            Kongregate.Log.debug(this.logPrefix(), "Message received:", a);
            switch (a.opcode) {
                case KonduitEvent.CONNECT:
                    this.onClientConnected(a.params, c.source);
                    break;
                case KonduitEvent.CONNECTED:
                    this.onConnectedToServer()
            }
            for (var d = 0; d < this._messageListeners.length; d++) this._messageListeners[d](a.opcode,
                a.params)
        },
        sendMessage: function(a, c) {
            this.removeMissingWindows();
            if (!this.connected() && a !== KonduitEvent.CONNECT && a !== KonduitEvent.CONNECTED) Kongregate.Log.debug(this.logPrefix(), "Not sending " + a + ", not connected");
            else {
                var d = {
                    kongregate_type: Kongregate.MessageConnection.MESSAGE_EVENT,
                    opcode: a,
                    params: "string" === typeof c ? JSON.parse(c) : c
                };
                this.supportsObjects() || (d = JSON.stringify(d));
                //for (var e = this._targetOrigin || "*", k = 0; k < this._targetWindows.length; k++) this._targetWindows[k].postMessage(d, e)
            }
        },
        connect: function() {
            this.connected() ||
                (this.listen(), Kongregate.Log.debug("Attempting to connect to Kongregate API"), this.sendMessage(KonduitEvent.CONNECT, {
                    chnl: a
                }), this._retryConnection && this.retryConnection())
        },
        retryConnection: function() {
            var a = this;
            setTimeout(function() {
                a.connect()
            }, 5E3)
        },
        onClientConnected: function(b, c) {
            b.chnl !== a ? Kongregate.Log.warn(this.logPrefix(), "Channel ID mismatch, ignoring connect") : (Kongregate.Log.debug(this.logPrefix(), "API connection established!"), this.acceptClientConnection(c))
        },
        onConnectedToServer: function() {
            this.connected() ||
                (Kongregate.Log.debug(this.logPrefix(), "API connection established!"), this._connected = !0)
        },
        acceptClientConnection: function(a) {
            for (var c = !1, d = this._targetWindows, e = 0; e < this._targetWindows.length; e++)
                if (this._targetWindows[e] === a) {
                    Kongregate.Log.warn("Re-initializing duplicate connection");
                    c = !0;
                    break
                }
            this._targetWindows = [a];
            this.sendMessage(KonduitEvent.CONNECTED, {});
            this._targetWindows = d;
            c || this._targetWindows.push(a);
            this.removeMissingWindows()
        },
        removeMissingWindows: function(a) {
            if (!this._client) {
                for (i =
                    this._targetWindows.length - 1; 0 <= i; i--) this._targetWindows[i].top || this._targetWindows.splice(i, 1);
                this._connected = 0 < this._targetWindows.length
            }
        }
    }
})();
Kongregate.PostMessage = {
    addMessageListener: function(a, b) {
        if (a.document.addEventListener) try {
            a.document.addEventListener.call(a, "message", b, !1)
        } catch (c) {
            Kongregate.Log.debug("addEventListener failed, using iframe addEventListener: " + c), Kongregate.PostMessage.createIframeEventListener(a, b)
        } else a.attachEvent ? a.attachEvent("onmessage", b) : Kongregate.Log.error("Could not add event listener, neither addEventListener or attachEvent found!")
    },
    supportsObjects: function() {
        var a = document.createElement("iframe"),
            b = !0;
        a.src = "about:blank";
        document.body.appendChild(a);
        try {
            a.contentWindow.postMessage({
                toString: function() {
                    b = !1;
                    return ""
                }
            }, "*")
        } catch (c) {}
        document.body.removeChild(a);
        return b
    },
    parseMessage: function(a) {
        return "string" === typeof a && "{" === a.charAt(0) ? JSON.parse(a) : "object" === typeof a ? a : null
    },
    createIframeEventListener: function(a, b) {
        var c = document.createElement("iframe");
        c.src = "about:blank";
        document.head.appendChild(c);
        c.contentWindow.addEventListener.call(a, "message", b, !1);
        document.head.removeChild(c)
    }
};
(function() {
    Kongregate.AnalyticsServices = function(a) {
        this.initialize(a)
    };
    Kongregate.AnalyticsServices.prototype = {
        initialize: function(a) {
            var c = this;
            this._heartbeatInterval = a.heartbeat_interval || 15E3;
            this._services = a.services;
            this._swrveClient = a.swrve_client;
            this._mtx = a.mtx;
            this._kongVars = a.kongregate_variables;
            this._staticVars = {};
            this._persistentStore = {};
            this._heartbeatCount = 0;
            this._enablePersistence = a.enable_persistence;
            this._services.addEventListener(KonduitEvent.KONDUIT_MESSAGE, function(a) {
                c._onIncomingMessage(a.opcode,
                    a.params)
            });
            a.start && this._setup()
        },
        addEvent: function(a, c) {
            this._enabled && (!this._autoAnalyticsDisabled() && 0 <= Kongregate.Utils.indexOf(ga, a) ? Kongregate.Log.warn("Ignoring analytics event: " + a + " since it is a kong-automatic event.") : this._addEventInternal(a, this._objectify(c)))
        },
        addFilterType: function(a) {
            if (this._enabled && a) {
                var c = /^[a-zA-Z0-9_]+$/;
                !a || !c.test(a) ? Kongregate.Log.warn("Invalid filterType: " + a + ", must be alpha_numeric") : (c = (c = this._savedData[B]) ? c.split(",") : [], 0 > Kongregate.Utils.indexOf(c,
                    a) && (c.push(a), c.sort(), this._savedData[B] = c.join(","), this._flushPersistentStore(), Kongregate.Log.info("Filter type added: " + a)))
            }
        },
        setCommonPropsCallback: function(a) {
            this._enabled && (this._commonPropsCallback = a, this.updateCommonProperties())
        },
        setCommonProperties: function(a) {
            a = this._objectify(a);
            this.setCommonPropsCallback(function() {
                return a
            })
        },
        updateCommonProperties: function() {
            try {
                "function" === typeof this._commonPropsCallback && (this._commonProperties = this._objectify(this._commonPropsCallback()),
                    this._savedData[ha] = this._commonProperties, this._commonProperties[O] && !this._savedData[C] && (this._savedData[C] = this._commonProperties[O]))
            } catch (a) {
                Kongregate.Log.error("Error updating common properties: " + a)
            }
        },
        getAutoLongProperty: function(a) {
            return this.getAutoIntProperty(a)
        },
        getAutoLongLongProperty: function(a) {
            return this.getAutoLongProperty(a)
        },
        getAutoStringProperty: function(a) {
            if (!this._enabled) return null;
            var c = this._getKongAutomaticVariables();
            if ("string" === typeof c[a]) return c[a];
            Kongregate.Log.warn("Property is not a string: " +
                a);
            return null
        },
        getAutoBoolProperty: function(a) {
            return !this._enabled ? !1 : !!this._getKongAutomaticVariables()[a]
        },
        getAutoDoubleProperty: function(a) {
            if (!this._enabled) return NaN;
            var c = this._getKongAutomaticVariables();
            return Number(c[a])
        },
        getAutoIntProperty: function(a) {
            return !this._enabled ? NaN : Math.floor(this.getAutoDoubleProperty(a))
        },
        getAutoUTCProperty: function(a) {
            return this.getAutoStringProperty(a)
        },
        getAutoPropertiesJSON: function() {
            if (!this._enabled) return "{}";
            this._buildKongAutomaticVariables();
            return "function" === typeof JSON.stringify ? JSON.stringify(this._automaticVars) : "{}"
        },
        startPurchase: function(a, c) {
            if (!this._autoAnalyticsDisabled()) {
                var b = this._getProductId(a);
                b ? (this._priceUSD = this._getUSDPrice(b, c), this._iapID && Kongregate.Log.warn("startPurchase: invoked before active transaction finished. iap_ids may mismatch."), Kongregate.Log.debug("IAP FLOW STEP: startPurchase(): " + b), this._iapID = this._uuid(), this._productId = b, this._addIAPEvent(null, this._objectify(c), D)) : Kongregate.Log.warn("startPurchase: Can't start purchase with null productId, param was: " +
                    a)
            }
        },
        finishPurchase: function(a, c, b) {
            this._autoAnalyticsDisabled() || (Kongregate.Log.debug("IAP FLOW STEP: finishPurchase(): " + this._productId + ", transactionId: " + c + ", resultCode: " + a), ia === a ? (this._numPurchases++, this._totalSpentUSD += this._priceUSD, this._addIAPEvent(c, this._objectify(b), E)) : this._addIAPFailEvent(c, this._objectify(b)))
        },
        setAutomaticVariablesListener: function(a) {
            this._enabled && (this._automaticVarsListener = a, this._getKongAutomaticVariables())
        },
        start: function() {},
        _setup: function() {
            if (!this._savedData) {
                var c =
                    this._services.isKongregate();
                this._mode = c ? this._kongVars.kongregate_analytics_mode : null;
                this._enabled = null !== this._mode && void 0 !== this._mode && this._checkBrowserSupport();
                Kongregate.Log.debug("Initializing Analytics API, mode: " + this._mode);
                if (this._enabled) {
                    this._enablePersistence && this._hasLocalStorage() && this._loadPersistentStore();
                    this._clientVersion = c ? this._kongVars.kongregate_game_version : "1";
                    this._pendingEvents = this._persistentStore.pending_events = this._persistentStore.pending_events || [];
                    this._persistentStore.event_queues =
                        this._persistentStore.event_queues || {
                            swrve: []
                        };
                    this._eventQueue = this._persistentStore.event_queues.swrve = this._persistentStore.event_queues.swrve || [];
                    this._savedData = this._persistentStore.saved_data = this._persistentStore.saved_data || {};
                    this._items = this._persistentStore.items = this._persistentStore.items || [];
                    this._commonProperties = this._savedData.common_properties = this._savedData.common_properties || {};
                    this._bundleId = this._savedData[h];
                    this._autoAnalyticsDisabled() ? Kongregate.Log.debug("Auto analytics disabled") :
                        this._autoAnalyticsExcludesServer() ? Kongregate.Log.debug("Game has a server, only tracking a subset of analytics automatically") : Kongregate.Log.debug("Automatic analytics enabled");
                    c && this._requestItems();
                    var c = this._getDate(),
                        b = !this._savedData[t];
                    this._setInitialSavedData(t, this._toW3CDTF(c));
                    this._setInitialSavedData(F, a);
                    this._setInitialSavedData(w, this._clientVersion);
                    this._setInitialSavedData(u, this._timeZoneOffset());
                    b && (Kongregate.Log.debug("Analytics: First play"), this._installEvent());
                    this._startSession();
                    this._buildKongStaticVars()
                } else Kongregate.Log.debug("Analytics API not enabled")
            }
        },
        _enqueueEvent: function(a, c) {
            if (!this._initialized) {
                if (!this._autoAnalyticsDisabled() || !c[G]) Kongregate.Log.debug("Queueing pending event: " + a), this._pendingEvents.push({
                    name: a,
                    event: c
                });
                return !0
            }
            return !1
        },
        _addEventInternal: function(a, c, b) {
            var n = 0 === a.indexOf("swrve.");
            !n && !c[P] && (c = this._merge(this._buildEventSpecificVariables(), c));
            if (!this._enqueueEvent(a, c) && this._enabled) {
                Q === a && this._refreshPlayerInfoFields(c);
                var y = this._getKongAutomaticVariables(),
                    d = {};
                n ? d = c : (this._merge(d, this._objectify(this._commonProperties)), c[G] ? (this._merge(d, y), this._merge(d, c)) : (this._merge(d, c), this._merge(d, y)));
                Kongregate.SwrveClient.SWRVE_SESSION_START_IDENTIFIER === a && (b = !0);
                Kongregate.Log.debug("Adding event: " + a + ", flush=" + b);
                this._eventQueue.push({
                    name: a,
                    event: d
                });
                this._flushQueue();
                b && this._flushPersistentStore()
            }
        },
        _flushQueue: function() {
            if (this._swrveClient) {
                var a = this;
                this._eventQueue.length && !this._submitLock && (Kongregate.Log.debug("Flushing swrve event queue"),
                    this._submitLock = !0, this._swrveClient.sendEvents(this._eventQueue, function(c) {
                        a._submitLock = !1;
                        a._flushPersistentStore();
                        a._flushQueueDelayed(c.success ? 1E3 : 1E4)
                    }))
            }
        },
        _flushQueueDelayed: function(a) {
            var c = this;
            setTimeout(function() {
                c._flushQueue()
            }, a)
        },
        _persistentStoreName: function() {
            return Kongregate.AnalyticsServices.persistentStoreName(this._kongVars.kongregate_game_id)
        },
        _loadPersistentStore: function() {
            var a;
            try {
                var c = localStorage.getItem(this._persistentStoreName()) || "{}";
                a = JSON.parse(c)
            } catch (b) {
                Kongregate.Log.warn("Error loading persistent store: " +
                    b)
            }
            this._persistentStore = a || {}
        },
        _flushPersistentStore: function() {
            try {
                var a = JSON.stringify(this._persistentStore);
                localStorage.setItem(this._persistentStoreName(), a)
            } catch (c) {
                Kongregate.Log.warn("Error flushing persistent store: " + c)
            }
        },
        _destroyPersistentStore: function() {
            localStorage.removeItem(this._persistentStoreName())
        },
        _buildEventSpecificVariables: function() {
            var a = {};
            a[P] = 0;
            if (this._autoAnalyticsDisabled()) return a;
            a[n] = this._uuid();
            a[R] = this._toW3CDTF(this._getDate());
            a[ja] = this._timeZoneOffset();
            return a
        },
        _refreshPlayerInfoFields: function(a) {
            a[H] = this._savedData[H];
            a[I] = this._savedData[I];
            for (var c = 0; c < S.length; c++) {
                var b = S[c];
                a[b] ? this._savedData[b] = a[b] : a[b] = this._savedData[b] ? this._savedData[b] : null
            }
        },
        _addAutoEvent: function(a, c) {
            this._autoAnalyticsDisabled() || (c = this._objectify(c), c[G] = !0, this._addEventInternal(a, c))
        },
        _addIAPEvent: function(a, c, b) {
            var n = {};
            this._merge(n, this._objectify(c));
            n[J] = this._priceUSD;
            n[ka] = this._productId;
            n[T] = this._iapID;
            D != b && (n[U] = a || V);
            this._services.isKongregate() ?
                (n[K] = this._getKredPrice(this._productId), n[L] = "KRED") : (n[K] = c[K] || this._priceUSD, n[L] = c[L] || "USD");
            E === b && (this._sendSwrveIAPEvent(this._productId, this._priceUSD, c), this._productId = this._iapID = null, this._priceUSD = 0);
            this._addEventInternal(b, n)
        },
        _addIAPFailEvent: function(a, c) {
            var b = {};
            this._merge(b, this._objectify(c));
            b[la] = "SKErrorPaymentCancelled";
            b[U] = a || V;
            b[T] = this._iapID;
            this._productId = this._iapID = null;
            this._priceUSD = 0;
            this._addEventInternal(W, b)
        },
        _sendSwrveUserEvent: function() {
            if (!this._autoAnalyticsDisabled()) {
                for (var a =
                        this._getKongAutomaticVariables(), c = {}, b = 0; b < X.length; b++) {
                    var n = X[b];
                    c["kong." + n] = a[n]
                }
                this._addAutoEvent(Kongregate.SwrveClient.SWRVE_USER_IDENTIFIER, c)
            }
        },
        _sendSwrveIAPEvent: function(a, c, b) {
            c = {
                product_id: a,
                quantity: 1,
                local_cost: c,
                local_currency: "USD",
                app_store: "unknown_store"
            };
            var n = {};
            n[a] = {
                type: "item",
                amount: 1
            };
            b.soft_currency_change && (n.soft_currency_change = {
                type: "currency",
                amount: b.soft_currency_change
            });
            b.hard_currency_change && (n.hard_currency_change = {
                type: "currency",
                amount: b.hard_currency_change
            });
            b.type && (n[b.type] = {
                type: "item",
                amount: 1
            });
            c.rewards = n;
            this.addEvent(Kongregate.SwrveClient.SWRVE_IAP_IDENTIFIER, c)
        },
        _onIncomingMessage: function(a, c) {
            a === KonduitEvent.OP_ANALYTICS_PAYLOAD && this._processAnalyticsPayload(c.data.info, c.data.payload)
        },
        _setInitialSavedData: function(a, c) {
            this._savedData[a] || (this._savedData[a] = c)
        },
        _autoAnalyticsDisabled: function() {
            return !this._enabled || this._mode === c
        },
        _autoAnalyticsAllEnabled: function() {
            return this._enabled && this._mode === d
        },
        _autoAnalyticsExcludesServer: function() {
            return this._enabled &&
                this._mode === e
        },
        _getProductId: function(a) {
            try {
                if ("string" === typeof a) return a;
                if (Number(parseFloat(a)) == a) return a.toString();
                if ("[object Array]" === Object.prototype.toString.call(a)) {
                    if (0 < a.length) return this._getProductId(a[0])
                } else if ("string" === typeof a.identifier) return a.identifier
            } catch (c) {
                Kongregate.Log.error("Error calculating product ID:", c)
            }
            Kongregate.Log.warn("Couldn't get product ID from: " + a + ", type=" + typeof a);
            return null
        },
        _getUSDPrice: function(a, c) {
            if (this._services.isKongregate()) {
                var b =
                    this._getKredPrice(a);
                if (0 !== b) return Math.floor(100 * b * this._kredExchangeRate) / 100
            } else if (c && c[J]) return c[J];
            if ((b = a.match(/^.*t([0-9][0-9])_.*$/)) && 2 === b.length)
                if (b = parseInt(b[1], 10), 0 < b && b <= Y.length) return Y[b - 1];
            Kongregate.Log.warn("Couldn't calculate USD price for identifier: " + a);
            return 0
        },
        _getKredPrice: function(a) {
            for (var c = 0; c < this._items.length; c++) {
                var b = this._items[c];
                if (a === b.identifier) return b.price
            }
            Kongregate.Log.warn("Couldn't get kred price for identifier: " + a);
            return 0
        },
        _requestItems: function(a) {
            a =
                a || 0;
            if (5 < a) Kongregate.Log.error("Giving up on retrieving item list");
            else {
                var c = this;
                this._mtx.requestItemList(null, function(b) {
                    b.success ? c._items = c._persistentStore.items = b.data : c._retryRequestItems(a + 1)
                })
            }
        },
        _retryRequestItems: function(a) {
            var c = this;
            Kongregate.Log.warn("Retrying item list request, retry #" + a);
            setTimeout(function() {
                c.requestItems(a)
            }, 15E3 * a)
        },
        _processAnalyticsPayload: function(a, c) {
            Kongregate.Log.info("Analytics payload received");
            if (this._enabled)
                if (this._checkBrowserSupport(c)) {
                    this._config =
                        a;
                    var b = this._config.swrve;
                    this._svid = c.site_visitor_uid;
                    c.kger && (this._kredExchangeRate = c.kger);
                    this._updateKongStaticVars(c);
                    this._initialized || (this._initialized = !0, !this._swrveClient && (b && b.application_id && b.key) && (Kongregate.Log.debug("Swrve initialized"), this._swrveClient = new Kongregate.SwrveClient({
                        application_id: b.application_id,
                        api_key: b.key,
                        player_id: this._services.isKongregate() ? this._svid : this._savedData[M],
                        client_version: this._clientVersion
                    })), this._swrveClient ? (this._submitLock = !1, this._startHeartbeatTimer(),
                        this._flushPendingEvents(), this._sendSwrveUserEvent(), this.addEvent(Q, {}), this._flushQueue()) : (Kongregate.Log.debug("Analytics not initialized, no services configured"), this._enabled = !1))
                } else this._enabled = !1
        },
        _checkBrowserSupport: function(a) {
            try {
                if (a && "safari" === a.browser.browser.toLowerCase()) Kongregate.Log.warn("Analytics disabled on Safari");
                else {
                    if (window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest) return !0;
                    Kongregate.Log.warn("Analytics disabled due to lack of XHR/CORS support")
                }
            } catch (c) {
                Kongregate.Log.warn("Error while checking browser support: " +
                    c)
            }
            return !1
        },
        _hasLocalStorage: function() {
            try {
                var a = "kong-" + this._getDate().getTime();
                localStorage.setItem(a, a);
                localStorage.removeItem(a);
                return !0
            } catch (c) {
                return !1
            }
        },
        _startHeartbeatTimer: function() {
            if (this._heartbeatInterval) {
                var a = this;
                setInterval(function() {
                    a._onHeartbeatInterval()
                }, this._heartbeatInterval)
            }
        },
        _onHeartbeatInterval: function() {
            this._heartbeatCount += 1;
            this._session.active = this._getDate().getTime();
            4 == this._heartbeatCount && (this._heartbeatCount = 0, this.addEvent(ma, {}))
        },
        _flushPendingEvents: function() {
            if (0 <
                this._pendingEvents.length) {
                Kongregate.Log.debug("Flushing " + this._pendingEvents.length + " pending event(s)");
                for (var a = 0; a < this._pendingEvents.length; a++) {
                    var c = this._pendingEvents[a];
                    this._addEventInternal(c.name, c.event, !1)
                }
                this._pendingEvents.length = 0
            }
        },
        _buildKongStaticVars: function() {
            if (!this._autoAnalyticsDisabled()) {
                var c = this._services.isKongregate();
                this._staticVars[h] = this._bundleId;
                this._staticVars[Z] = this._services.getUsername();
                this._staticVars[na] = this._services.getUserId();
                this._staticVars[oa] =
                    c ? this._svid : "";
                this._staticVars[N] = this._session.id;
                this._staticVars[pa] = a;
                this._staticVars[z] = this._numSessions();
                this._staticVars[q] = this._clientVersion;
                this._staticVars[s] = this._clientVersion;
                this._staticVars[w] = this._savedData[w];
                this._staticVars[C] = this._savedData[C] || null;
                this._staticVars[qa] = "kongregate_web";
                this._autoAnalyticsExcludesServer() || (this._staticVars[M] = c ? this._svid : this._savedData[M]);
                this._staticVars[y] = "browser";
                this._staticVars[ra] = null;
                this._staticVars[t] = this._savedData[t];
                this._staticVars[F] = this._savedData[F];
                this._staticVars[u] = this._savedData[u];
                this._staticVars[sa] = this._kongVars.kongregate_language || (window.navigator.userLanguage || window.navigator.language).split("-")[0];
                this._staticVars[aa] = null;
                this._staticVars[ba] = null;
                this._staticVars[ta] = null;
                this._staticVars[ua] = null;
                this._staticVars[k] = !1;
                this._staticVars[A] = "wifi";
                this._staticVars[p] = null;
                this._staticVars[va] = null;
                this._staticVars[wa] = null;
                this._staticVars[xa] = !0;
                this._staticVars[ya] = "web"
            }
        },
        _buildKongAutomaticVariables: function() {
            if (this._autoAnalyticsDisabled()) this._automaticVars = {};
            else {
                var a = {};
                a[B] = this._savedData[B] || "";
                a[za] = this._numPurchases;
                a[x] = this._daysRetained();
                this._autoAnalyticsExcludesServer() || (a[ca] = this._totalSpentUSD);
                this._automaticVars = this._merge(a, this._staticVars)
            }
        },
        _updateKongStaticVars: function(a) {
            if (!this._autoAnalyticsDisabled()) {
                this._bundleId = "com.kongregate.web." + a.game_permalink;
                this._services.isExternal() && (this._bundleId += ".external");
                this._savedData[h] = this._bundleId;
                this._buildKongStaticVars();
                var c = this._parseOS(a.browser.os);
                this._staticVars[l] =
                    c.type;
                this._staticVars[r] = c.version;
                this._staticVars[Aa] = a.premium;
                this._staticVars[Ba] = a.powerup_rewards_tier;
                this._savedData[H] = a.pur_link_date || null;
                this._savedData[I] = a.join_date || null;
                this._staticVars[Ca] = Number(a.spent_on_kreds);
                this._totalSpentUSD = a.spent_usd;
                this._numPurchases = a.num_purchases;
                this._staticVars[g] = a.browser.browser;
                this._staticVars[m] = a.browser.version;
                this._staticVars[Da] = a.ip_address;
                this._staticVars[f] = a.ip_address;
                c = this._getDate();
                c = Math.abs(c.getTime() - this._parseW3CDTF(a.server_time,
                    c).getTime()) / 1E3;
                this._staticVars[Ea] = Math.floor(c);
                this._savedData[Fa] = a.server_time;
                this._staticVars[v] = a.country_code;
                this._getKongAutomaticVariables()
            }
        },
        _getKongAutomaticVariables: function() {
            if (!this._enabled) return {};
            this.updateCommonProperties();
            this._buildKongAutomaticVariables();
            this._automaticVarsListener && this._automaticVarsListener(this._automaticVars);
            return this._automaticVars
        },
        _startSession: function() {
            var a = this._getDate(),
                c = (this._previousSession = this._savedData.current_session) ? (a.getTime() -
                    this._previousSession.active) / 1E3 : 0,
                n = this._previousSession ? (a.getTime() - this._previousSession.start) / 1E3 : 0;
            c > b ? (Kongregate.Log.debug("Terminating previous session (" + this._previousSession.id + "), inactiveFor=" + c + ", length=" + n), c = {}, c[N] = this._previousSession.id, c[z] = this._numSessions(), c[Ga] = this._toW3CDTF(this._previousSession.active), c[Ha] = n, c[Ia] = !1, this._addAutoEvent(da, c)) : this._previousSession && (this._session = this._previousSession, Kongregate.Log.debug("Reopening previous session (" + this._previousSession.id +
                "), inactiveFor=" + c + ", length=" + n));
            this._session || (this._session = {
                id: this._uuid(),
                start: a.getTime(),
                active: a.getTime()
            }, this._savedData.current_session = this._session, a = this._savedData[z] ? this._numSessions() + 1 : 1, this._savedData[z] = a, Kongregate.Log.debug("Created new session: " + this._session.id));
            this._session != this._previousSession && (this.addEvent(Kongregate.SwrveClient.SWRVE_SESSION_START_IDENTIFIER, {}), a = {}, a[Ja] = !1, this._addAutoEvent(ea, a))
        },
        _installEvent: function() {
            if (this._autoAnalyticsAllEnabled()) {
                var a = {};
                a[Ka] = null;
                a[La] = null;
                a[Ma] = null;
                a[Na] = null;
                a[Oa] = null;
                a[Pa] = null;
                this._addAutoEvent(fa, a)
            } else Kongregate.Log.debug("Not firing installs event since analytics mode is not all")
        },
        _parseOS: function(a) {
            var c = "Unknown",
                b = "Unknown";
            try {
                var n = a.split(" ");
                if (2 > n.length) throw Error("Not enough segments in OS string");
                c = n.shift();
                "OS" === c && (c = "MacOS", n.shift());
                b = n.join(" ")
            } catch (y) {
                Kongregate.Log.error("Error parsing OS version (" + a + "): " + y.toString())
            }
            return {
                type: c,
                version: b
            }
        },
        _numSessions: function() {
            return this._savedData[z] ||
                1
        },
        _timeZoneOffset: function() {
            return this._getDate().getTimezoneOffset() / -60
        },
        _daysRetained: function() {
            var a = this._getDate(),
                c = this._timeZoneOffset(),
                b = this._staticVars[t];
            b && (a = this._parseW3CDTF(b, null), null === a && (Kongregate.Log.warn("Failed to parse first play date: " + b + ", resetting"), a = this._getDate(), this._savedData[t] = this._toW3CDTF(a), this._flushPersistentStore()));
            this._staticVars[u] && (c = this._staticVars[u]);
            return this._daysSince(a, c)
        },
        _dayOfEra: function(a, c) {
            return Math.floor((a + 3600 * c) /
                86400)
        },
        _daysSince: function(a, c) {
            var b = Math.floor(this._getDate() / 1E3),
                n = Math.floor(a.getTime() / 1E3);
            return this._dayOfEra(b, this._timeZoneOffset()) - this._dayOfEra(n, c)
        },
        _objectify: function(a) {
            if ("string" === typeof a) {
                if (0 === a.length || "function" !== typeof JSON.parse) return {};
                try {
                    return JSON.parse(a) || {}
                } catch (c) {
                    return Kongregate.Log.warn("Failed to parse JSON: " + a + ", error: " + c), {}
                }
            }
            return a
        },
        _toW3CDTF: function(a) {
            return Kongregate.Utils.toW3CDTF(a)
        },
        _parseW3CDTF: function(a, c) {
            return Kongregate.Utils.parseW3CDTF(a,
                c)
        },
        _uuid: function() {
            var a = this._getDate().getTime();
            window.performance && "function" === typeof window.performance.now && (a += performance.now());
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                var b = (a + 16 * Math.random()) % 16 | 0;
                a = Math.floor(a / 16);
                return ("x" == c ? b : b & 3 | 8).toString(16)
            })
        },
        _merge: function(a, c) {
            return Kongregate.Utils.merge(a, c)
        },
        _getDate: function() {
            return new Date
        }
    };
    var a = "2.0.0",
        b = 300,
        c = "none",
        d = "all",
        e = "cloud",
        k = "ad_tracking",
        h = "bundle_id",
        g = "browser",
        m = "browser_version",
        p = "carrier",
        l = "client_os_type",
        r = "client_os_version",
        q = "client_version",
        v = "country_code",
        A = "data_connection_type",
        x = "days_retained",
        s = "dev_client_version",
        n = "device_event_id",
        y = "device_type",
        R = "event_time",
        f = "external_ip_address",
        B = "filter_type",
        w = "first_client_version",
        u = "first_play_time_offset",
        t = "first_play_time",
        F = "first_sdk_version",
        C = "first_server_version",
        va = "gamecenter_id",
        wa = "gamecenter_alias",
        Ba = "pur_tier",
        aa = "idfa",
        ba = "idfv",
        ua = "imei",
        ta = "android_id",
        Da = "ip_address",
        xa = "is_valid",
        na = "kong_user_id",
        Z = "kong_username",
        Aa = "kong_plus",
        sa = "lang_code",
        Fa = "last_skew_refresh_time",
        za = "num_purchases",
        z = "num_sessions",
        ra = "mac_address",
        M = "player_id",
        pa = "sdk_version",
        O = "server_version",
        N = "session_id",
        Ea = "time_skew",
        ca = "total_spent_in_usd",
        ja = "event_time_offset",
        oa = "site_visitor_id",
        Ca = "usd_spent_on_kreds",
        qa = "platform",
        ya = "pkg_src",
        P = "retry_count",
        G = "auto_event",
        ea = "session_starts",
        Ja = "is_from_background",
        da = "session_ends",
        Ha = "session_length_seconds",
        Ga = "session_end_time",
        Ia = "did_crash",
        fa = "installs",
        Ka =
        "stub_field",
        La = "utm_source",
        Ma = "utm_medium",
        Na = "utm_term",
        Oa = "utm_content",
        Pa = "utm_campaign",
        D = "iap_attempts",
        E = "iap_transactions",
        W = "iap_fails",
        J = "usd_cost",
        ka = "product_id",
        T = "iap_id",
        la = "fail_reason",
        U = "receipt_id",
        L = "local_currency_type",
        K = "local_currency_cost",
        ia = "SUCCESS",
        V = "none",
        Q = "player_info",
        I = "kong_join_date",
        H = "pur_link_date",
        ga = [fa, ea, da, "foreground_visits", "background_visits", D, W, E, "invalid_states"],
        S = ["twitter_id", "fb_user_id", "fb_username", "fb_email", "email"],
        X = [ca, t, z, x, y, l, r, v,
            Z, N, aa, ba, q
        ],
        ma = "swrve.heartbeat",
        Y = [0.99, 1.99, 2.99, 3.99, 4.99, 5.99, 6.99, 7.99, 8.99, 9.99, 10.99, 11.99, 12.99, 13.99, 14.99, 15.99, 16.99, 17.99, 18.99, 19.99, 20.99, 21.99, 22.99, 23.99, 24.99, 25.99, 26.99, 27.99, 28.99, 29.99, 30.99, 31.99, 32.99, 33.99, 34.99, 35.99, 36.99, 37.99, 38.99, 39.99, 40.99, 41.99, 42.99, 43.99, 44.99, 45.99, 46.99, 47.99, 48.99, 49.99, 54.99, 59.99, 64.99, 69.99, 74.99, 79.99, 84.99, 89.99, 94.99, 99.99, 109.99, 119.99, 124.99, 129.99, 139.99, 149.99, 159.99, 169.99, 174.99, 179.99, 189.99, 199.99, 209.99, 219.99, 229.99, 239.99, 249.99,
            299.99, 349.99, 399.99, 449.99, 499.99, 599.99, 699.99, 799.99, 899.99, 999.99
        ],
        ha = "common_properties";
    Kongregate.AnalyticsServices.KONG_ANALYTICS_EVENT_TIME = R;
    Kongregate.AnalyticsServices.persistentStoreName = function(a) {
        return "kong-game-analytics-" + a
    }
})();
Kongregate.ApiServices = function(a) {
    this.initialize(a)
};
Kongregate.ApiServices.prototype = {
    initialize: function(a) {
        this._kongVars = a.kongregate_variables || {};
        this._messageConnection = a.message_connection;
        this._eventListeners = {};
        this._requestHandlers = {};
        this._messageQueue = [];
        this._requestId = 0;
        this._initializeKongVars(this._kongVars);
        this.initializeEventListeners()
    },
    initializeEventListeners: function() {
        var a = this;
        this._messageConnection.addMessageListener(function(b, c) {
            a._onIncomingMessage(b, c)
        })
    },
    _initializeKongVars: function(a) {
        a = a || {};
        this._kongregate = "true" ===
            String(a.kongregate);
        this._username = a.kongregate_username || "Guest";
        this._authToken = a.kongregate_game_auth_token;
        this._userId = parseInt(a.kongregate_user_id, 10) || 0;
        this._gameId = parseInt(a.kongregate_game_id, 10) || 0
    },
    addEventListener: function(a, b) {
        this._eventListeners[a] || (this._eventListeners[a] = []);
        this._eventListeners[a].push(b)
    },
    _dispatchEvent: function(a, b) {
        for (var c = this._eventListeners[a] || [], d = 0; d < c.length; d++) c[d](b || {})
    },
    connect: function() {},
    connectExternal: function() {
        Kongregate.Log.warn("The Kongregate externally hosted API is not available")
    },
    isExternal: function() {
        return !this.isKongregate()
    },
    isKongregate: function() {
        return this._kongregate
    },
    getUsername: function() {
        return this._username
    },
    getGameAuthToken: function() {
        return this._authToken
    },
    getUserId: function() {
        return this._userId
    },
    getUserID: function() {
        return this.getUserId()
    },
    getGameId: function() {
        return this._gameId
    },
    getGameID: function() {
        return this.getGameId()
    },
    isGuest: function() {
        return 0 === this.getUserId()
    },
    isConnected: function() {
        return this._messageConnection.connected() && !this._messageQueue
    },
    sendMessage: function(a) {
        this.isConnected() ? this._messageConnection.sendMessage(a.opcode, a.params) : (Kongregate.Log.debug("Queueing message " + a.opcode + " since API is not yet connected!"), this._messageQueue.push(a))
    },
    _flushMessageQueue: function() {
        if (this._messageQueue) {
            var a = this._messageQueue;
            this._messageQueue = null;
            Kongregate.Log.debug("Flushing message queue", a);
            for (var b = 0; b < a.length; b++) this.sendMessage(a[b])
        }
    },
    _onIncomingMessage: function(a, b) {
        switch (a) {
            case KonduitEvent.OP_CONNECTED:
                this.sendMessage({
                    opcode: KonduitEvent.OP_HELLO,
                    params: {}
                });
                this._flushMessageQueue();
                break;
            case KonduitEvent.OP_EXTERNAL_MESSAGE:
                this._onIncomingMessage(b.opcode, b.data);
                break;
            case KonduitEvent.OP_SHOUT_CALLBACK:
                this._onShoutResponse(b);
                break;
            case KonduitEvent.OP_USER_INFO:
                this._onUserInfo(b)
        }
        this._dispatchEvent(KonduitEvent.KONDUIT_MESSAGE, {
            opcode: a,
            params: b
        })
    },
    _onShoutResponse: function(a) {
        this._completeRequest(a, {
            type: a[KonduitEvent.PARAM_MESSAGE_TYPE],
            recipients: a[KonduitEvent.PARAM_MESSAGE_RECIPIENTS],
            success: a.success,
            error: a.error
        })
    },
    _onUserInfo: function(a) {
        var b =
            a[KonduitEvent.PARAM_USER_ID];
        if (0 !== b) {
            var c = this.isGuest();
            this._username = a[KonduitEvent.PARAM_USER];
            this._authToken = a[KonduitEvent.PARAM_GAME_AUTH_TOKEN];
            this._userId = b;
            c && this._dispatchEvent(KonduitEvent.LOGIN)
        }
    },
    privateMessage: function(a, b) {
        if (this._ensureKongregate(b)) {
            var c = {
                shout_message: ("string" === typeof a ? a : a.content) || ""
            };
            this._enqueueRequest(c, b);
            this.sendMessage({
                opcode: KonduitEvent.OP_CHAT_PRIVATE_MESSAGE,
                params: c
            })
        }
    },
    resizeGame: function(a, b) {
        if (this._ensureKongregate()) {
            var c = {};
            c[KonduitEvent.PARAM_RESIZE_GAME_WIDTH] =
                a;
            c[KonduitEvent.PARAM_RESIZE_GAME_HEIGHT] = b;
            this.sendMessage({
                opcode: KonduitEvent.OP_CHAT_RESIZE_GAME,
                params: c
            })
        }
    },
    showInvitationBox: function(a, b) {
        if (this._ensureKongregate()) {
            var c = {};
            a = "string" === typeof a ? {
                content: a
            } : a;
            c[KonduitEvent.PARAM_INVITATION_MESSAGE] = a.content || "";
            c[KonduitEvent.PARAM_FRIEND_FILTER] = a.filter || "";
            c[KonduitEvent.PARAM_KV_PARAMS] = a.kv_params || {};
            this._enqueueRequest(c, b);
            this.sendMessage({
                opcode: KonduitEvent.OP_CHAT_DISPLAY_INVITATION_BOX,
                params: c
            })
        }
    },
    showFeedPostBox: function(a,
        b) {
        if (this._ensureKongregate()) {
            var c = {};
            a = "string" === typeof a ? {
                content: a
            } : a;
            c[KonduitEvent.PARAM_SHOUT_MESSAGE] = a.content || "";
            c[KonduitEvent.PARAM_KV_PARAMS] = a.kv_params || {};
            a.image_uri && (c[KonduitEvent.PARAM_IMAGE_URI] = a.image_uri);
            this._enqueueRequest(c, b);
            this.sendMessage({
                opcode: KonduitEvent.OP_CHAT_DISPLAY_FEED_POST_BOX,
                params: c
            })
        }
    },
    showSignInBox: function() {
        this.showRegistrationBox()
    },
    showRegistrationBox: function() {
        this._ensureKongregate() && this.isGuest() && this.sendMessage({
            opcode: KonduitEvent.OP_CHAT_DISPLAY_REGISTRATION,
            params: {}
        })
    },
    showShoutBox: function(a, b) {
        if (this._ensureKongregate()) {
            var c = {};
            c[KonduitEvent.PARAM_SHOUT_MESSAGE] = ("string" === typeof a ? a : a.content) || "";
            this._enqueueRequest(c, b);
            this.sendMessage({
                opcode: KonduitEvent.OP_CHAT_DISPLAY_SHOUT_BOX,
                params: c
            })
        }
    },
    _ensureKongregate: function(a) {
        return !this.isKongregate() ? (a && a({
            success: !1
        }), !1) : !0
    },
    _enqueueRequest: function(a, b) {
        var c = this._nextRequestId();
        a[KonduitEvent.PARAM_REQUEST_ID] = c;
        "function" === typeof b && (this._requestHandlers[c] = b)
    },
    _completeRequest: function(a,
        b) {
        var c = a[KonduitEvent.PARAM_REQUEST_ID],
            d = this._requestHandlers[c];
        "function" === typeof d && (d(b || a), delete this._requestHandlers[c])
    },
    _nextRequestId: function() {
        return this._requestId += 1
    }
};
Kongregate.ChatServices = function(a) {
    this.initialize(a)
};
Kongregate.ChatServices.DEFAULT_TAB = "Default";
Kongregate.ChatServices.prototype = {
    initialize: function(a) {
        var b = this;
        this._services = a.services;
        this._eventCallbacks = [];
        this._services.addEventListener(KonduitEvent.KONDUIT_MESSAGE, function(a) {
            b._onIncomingMessage(a.opcode, a.params)
        })
    },
    showTab: function(a, b, c) {
        var d = {};
        d[KonduitEvent.PARAM_NAME] = a;
        d[KonduitEvent.PARAM_DESCRIPTION] = b;
        c && c.size && (d[KonduitEvent.PARAM_CANVAS_SIZE] = c.size);
        this._services.sendMessage({
            opcode: KonduitEvent.OP_CHAT_TAB,
            params: d
        })
    },
    closeTab: function() {
        this.showTab(Kongregate.ChatServices.DEFAULT_TAB)
    },
    displayMessage: function(a, b) {
        var c = {};
        c[KonduitEvent.PARAM_DATA] = a;
        c[KonduitEvent.PARAM_USER] = b;
        this._services.sendMessage({
            opcode: KonduitEvent.OP_CHAT_DISPLAY,
            params: c
        })
    },
    clearMessages: function() {
        this._services.sendMessage({
            opcode: KonduitEvent.OP_CHAT_CLEAR_DIALOG
        })
    },
    displayCanvasImage: function(a, b, c) {
        var d = {};
        d[KonduitEvent.PARAM_DATA] = {
            type: "image",
            name: a,
            url: b,
            position: c
        };
        this._services.sendMessage({
            opcode: KonduitEvent.OP_CHAT_CANVAS_ELEMENT,
            params: d
        })
    },
    displayCanvasText: function(a, b, c, d) {
        var e = {};
        e[KonduitEvent.PARAM_DATA] = {
            type: "text",
            name: a,
            text: b,
            position: c,
            options: d
        };
        this._services.sendMessage({
            opcode: KonduitEvent.OP_CHAT_CANVAS_ELEMENT,
            params: e
        })
    },
    drawCanvasObject: function(a, b) {
        var c = {};
        c[KonduitEvent.PARAM_DATA] = {
            type: "draw",
            name: a,
            commands: b
        };
        this._services.sendMessage({
            opcode: KonduitEvent.OP_CHAT_CANVAS_ELEMENT,
            params: c
        })
    },
    removeCanvasObject: function(a) {
        var b = {};
        b[KonduitEvent.PARAM_DATA] = {
            type: "remove",
            name: a
        };
        this._services.sendMessage({
            opcode: KonduitEvent.OP_CHAT_CANVAS_ELEMENT,
            params: b
        })
    },
    _onIncomingMessage: function(a, b) {
        switch (a) {
            case KonduitEvent.OP_CHAT_MSG:
                this._handleChatEvent("message", b);
                break;
            case KonduitEvent.OP_CHAT_ROOM_MESSAGE:
                this._handleChatEvent("room.message", b);
                break;
            case KonduitEvent.OP_CHAT_TAB:
                this._handleChatEvent("tab_visible", b)
        }
    },
    addEventListener: function(a, b) {
        "function" !== typeof b ? Kongregate.Log.error("addEventListener requires a callback function") : (this._eventCallbacks[a] || (this._eventCallbacks[a] = []), this._eventCallbacks[a].push(b))
    },
    _handleChatEvent: function(a,
        b) {
        var c = this._eventCallbacks[a];
        if (c)
            for (var d = 0; d < c.length; d++) c[d](b)
    }
};
Kongregate.ImageServices = function(a) {
    this.initialize(a)
};
Kongregate.ImageServices.prototype = {
    initialize: function(a) {
        var b = this;
        this._services = a.services;
        this._submitting = !1;
        this._callback = null;
        this._services.addEventListener(KonduitEvent.KONDUIT_MESSAGE, function(a) {
            b._onIncomingMessage(a.opcode, a.params)
        })
    },
    submitAvatar: function(a, b) {
        this._submitting ? (Kongregate.Log.warn("Another avatar submission is active, ignoring"), b && b({
            success: !1
        })) : (this._submitting = !0, this._callback = b, this._services.sendMessage({
            opcode: KonduitEvent.OP_IMAGE_AVATAR_SUBMIT,
            params: {
                image: a
            }
        }))
    },
    _onIncomingMessage: function(a, b) {
        KonduitEvent.OP_IMAGE_AVATAR_FINISHED === a && (this._submitting = !1, this._callback && this._callback(b.success))
    }
};

function KongregateAPI() {
    this._initialize()
}
KongregateAPI.prototype = {
    unityElementId: null,
    _initialize: function() {
        this._flashVarsString = "";
        this._flashVarsObject = {};
        this._services = {};
        this._postMessageParams = void 0;
        this._loaded = this._paramsReceived = !1;
        this._queuedMessages = [];
        this._loadCallbacks = [];
        this._processParentKongregateParams();
        this._processParams(location.search.split("?")[1]);
        this._updateDebugLevel();
        if (this._postMessageParams = !this.flashVarsObject().kongregate_username && top != window) {
            var a = this;
            Kongregate.polyfillJSON();
            Kongregate.PostMessage.addMessageListener(window,
                function(b) {
                    a._messageOriginIsKongregate(b) && (b = Kongregate.PostMessage.parseMessage(b.data)) && "params" === b.type && a._handleParamsMessage(b.data)
                });
            top.postMessage("kongregate_request_params", "*")
        } else this._paramsReceived = !0;
        setTimeout(this._hijackUnityErrorHandler, 0)
    },
    flashVarsString: function() {
        return this._flashVarsString
    },
    flashVarsObject: function() {
        return this._flashVarsObject
    },
    getVariable: function(a) {
        return this._flashVarsObject[a]
    },
    loadAPI: function(a) {
        !this._postMessageParams || this._paramsReceived ?
            this._doLoadAPI(a) : this._loadCallbacks.push(a)
    },
    getAPI: function() {
        return this._services
    },
    embedFrame: function(a, b) {
        try {
            console.warn("KONGREGATE WARNING: The Kongregate Shell and embedFrame method are deprecated, and it is very unlikely that this functionality is really needed. See the note on the documentation page: https://docs.kongregate.com/v1.0/docs/concepts-kongregate-shell")
        } catch (c) {}
        var d = document.getElementById(b ? b : "contentdiv"),
            e;
        e = "<iframe id='content' frameborder='0' style='position:relative;top:0px;left:0px;" +
            ("border:0px none;padding:0px;width:" + d.offsetWidth + "px;height:" + d.offsetHeight + "px;'");
        e += "src='" + a + "'></iframe>";
        d.innerHTML = e
    },
    _setGameSwf: function(a) {
        var b = this.flashVarsObject(),
            c = this,
            d = this._findSwf(a);
        d ? (this._gameSwf = d, this.messageConnection = this.messageConnection || this._createMessageConnection(b), this.messageConnection.isSupported() ? setTimeout(function() {
                c._gameSwf.setConnectionObject("kongregateAPI.messageConnection") ? c.messageConnection.connect() : Kongregate.Log.warn("setConnectionObject returned false, not connecting")
            },
            1) : (Kongregate.Log.debug("MessageConnection isSupported was false"), setTimeout(function() {
            c._gameSwf.setConnectionObject(null)
        }, 1))) : Kongregate.Log.debug("Kongregate game SWF element does not appear to be a swf: " + a)
    },
    _isSwf: function(a) {
        return a && "undefined" !== typeof a.Play && "undefined" !== typeof a.setConnectionObject
    },
    _findSwf: function(a) {
        var b = document.getElementById(a),
            c = this,
            d = function(a) {
                for (var d = 0; d < a.length; d++)
                    if (b = a[d], c._isSwf(b)) return b
            };
        return this._isSwf(b) ? b : b = d(document.getElementsByName(a)) ||
            d(document.querySelectorAll("[id='" + a + "']")) || d(document.getElementsByTagName("object")) || d(document.getElementsByTagName("embed"))
    },
    _updateDebugLevel: function() {
        Kongregate.Log.debugLevel = this._flashVarsObject.kongregate_debug_level || 2
    },
    _processParentKongregateParams: function(a) {
        try {
            for (var b = window.parent; b !== top;) {
                try {
                    b.kongregateAPI && this._processParams(b.kongregateAPI.flashVarsString())
                } catch (c) {}
                b = b.parent
            }
        } catch (d) {}
    },
    _handleParamsMessage: function(a) {
        if (!this._paramsReceived) {
            for (var b in a) this._processParam(b,
                a[b]);
            this._paramsReceived = !0;
            this._updateDebugLevel();
            this._hijackUnityErrorHandler();
            0 < this._loadCallbacks.length && this._doLoadAPI()
        }
    },
    _fireLoadCallbacks: function() {
        var a = this._loadCallbacks.length;
        Kongregate.Log.debug("Kongregate API: Firing " + a + " load callback(s)");
        for (var b = 0; b < a; b++) {
            var c = this._loadCallbacks[b];
            "function" === typeof c && setTimeout(c, 0)
        }
        this._loadCallbacks = []
    },
    _checkAlreadyLoaded: function() {
        this._loaded && this._fireLoadCallbacks();
        return this._loaded
    },
    _doLoadAPI: function(a) {
        var b =
            this;
        Kongregate.contentLoaded(function() {
            b._loadCallbacks.push(a);
            b._checkAlreadyLoaded() || (b._loaded = !0, Kongregate.polyfillJSON(), b._hijackUnityErrorHandler(), b.messageConnection = b._createMessageConnection(), b._createJavascriptApi(), b._fireLoadCallbacks())
        })
    },
    _processParams: function(a) {
        if (a) {
            a = a.split("&");
            for (var b = 0; b < a.length; b++) {
                var c = a[b].split("=");
                c && 2 == c.length && this._processParam(c[0], c[1])
            }
        }
    },
    _processParam: function(a, b) {
        0 === a.indexOf("kongregate") && (this._flashVarsObject[a] = b, this._flashVarsString +=
            a + "=" + b + "&")
    },
    _messageOriginIsKongregate: function(a) {
        var b = decodeURIComponent(this._flashVarsObject.kongregate_host || "");
        a = a.origin;
        return b && (a === b || a == "http://" + b || a == "https://" + b)
    },
    _createJavascriptApi: function() {
        var a = this;
        this._services.services = new Kongregate.ApiServices({
            kongregate_variables: this.flashVarsObject(),
            message_connection: this.messageConnection
        });
        this._services.stats = new Kongregate.StatisticServices({
            services: this._services.services
        });
        this._services.sharedContent = new Kongregate.SharedContentServices({
            services: this._services.services
        });
        this._services.images = new Kongregate.ImageServices({
            services: this._services.services
        });
        this._services.mtx = new Kongregate.MicrotransactionServices({
            services: this._services.services
        });
        this._services.chat = new Kongregate.ChatServices({
            services: this._services.services
        });
        this._services.analytics = new Kongregate.AnalyticsServices({
            services: this._services.services,
            mtx: this._services.mtx,
            kongregate_variables: this.flashVarsObject(),
            enable_persistence: !0,
            start: !0
        });
        setTimeout(function() {
                a.messageConnection.connect()
            },
            0)
    },
    _createMessageConnection: function() {
        var a = this,
            b = this.flashVarsObject(),
            b = new Kongregate.MessageConnection({
                target_window: top,
                target_origin: decodeURIComponent(b.kongregate_host),
                channel_id: b.kongregate_channel_id,
                retry_connection: !0
            });
        b.isSupported() && b.addMessageListener(function(c, b) {
            var e = a._gameSwf;
            e && "function" === typeof e.handleMessageConnectionEvent && e.handleMessageConnectionEvent(JSON.stringify({
                opcode: c,
                params: b
            }))
        });
        return b
    },
    _hijackUnityErrorHandler: function() {
        try {
            kongregateUnitySupport.hijackUnityErrorHandler()
        } catch (a) {}
    }
};
kongregateAPI = new KongregateAPI;
! function(a) {
    function b(a) {
        for (var c = 16; c--;) {
            var b = c << 2;
            m[c] = a.charCodeAt(b) + (a.charCodeAt(b + 1) << 8) + (a.charCodeAt(b + 2) << 16) + (a.charCodeAt(b + 3) << 24)
        }
    }

    function c(a, c, b, d, e, g, h) {
        c += a + d + h;
        return (c << e | c >>> g) + b << 0
    }

    function d(a) {
        k(0, 0, 0, 0, a);
        q[0] = s[0] + 1732584193 << 0;
        q[1] = s[1] - 271733879 << 0;
        q[2] = s[2] - 1732584194 << 0;
        q[3] = s[3] + 271733878 << 0
    }

    function e(a) {
        k(q[0], q[1], q[2], q[3], a);
        q[0] = s[0] + q[0] << 0;
        q[1] = s[1] + q[1] << 0;
        q[2] = s[2] + q[2] << 0;
        q[3] = s[3] + q[3] << 0
    }

    function k(a, b, d, f, e) {
        var g;
        v ? (a = c((d ^ f) & b ^ f, a, b, e[0], 7, 25, -680876936),
            f = c((b ^ d) & a ^ d, f, a, e[1], 12, 20, -389564586), d = c((a ^ b) & f ^ b, d, f, e[2], 17, 15, 606105819), b = c((f ^ a) & d ^ a, b, d, e[3], 22, 10, -1044525330)) : (a = e[0] - 680876937, a = (a << 7 | a >>> 25) - 271733879 << 0, f = e[1] - 117830708 + (2004318071 & a ^ -1732584194), f = (f << 12 | f >>> 20) + a << 0, d = e[2] - 1126478375 + ((a ^ -271733879) & f ^ -271733879), d = (d << 17 | d >>> 15) + f << 0, b = e[3] - 1316259209 + ((f ^ a) & d ^ a), b = (b << 22 | b >>> 10) + d << 0);
        a = c((d ^ f) & b ^ f, a, b, e[4], 7, 25, -176418897);
        f = c((b ^ d) & a ^ d, f, a, e[5], 12, 20, 1200080426);
        d = c((a ^ b) & f ^ b, d, f, e[6], 17, 15, -1473231341);
        b = c((f ^ a) & d ^ a, b, d,
            e[7], 22, 10, -45705983);
        a = c((d ^ f) & b ^ f, a, b, e[8], 7, 25, 1770035416);
        f = c((b ^ d) & a ^ d, f, a, e[9], 12, 20, -1958414417);
        d = c((a ^ b) & f ^ b, d, f, e[10], 17, 15, -42063);
        b = c((f ^ a) & d ^ a, b, d, e[11], 22, 10, -1990404162);
        a = c((d ^ f) & b ^ f, a, b, e[12], 7, 25, 1804603682);
        f = c((b ^ d) & a ^ d, f, a, e[13], 12, 20, -40341101);
        d = c((a ^ b) & f ^ b, d, f, e[14], 17, 15, -1502002290);
        b = c((f ^ a) & d ^ a, b, d, e[15], 22, 10, 1236535329);
        a = c((b ^ d) & f ^ d, a, b, e[1], 5, 27, -165796510);
        f = c((a ^ b) & d ^ b, f, a, e[6], 9, 23, -1069501632);
        d = c((f ^ a) & b ^ a, d, f, e[11], 14, 18, 643717713);
        b = c((d ^ f) & a ^ f, b, d, e[0], 20, 12, -373897302);
        a = c((b ^ d) & f ^ d, a, b, e[5], 5, 27, -701558691);
        f = c((a ^ b) & d ^ b, f, a, e[10], 9, 23, 38016083);
        d = c((f ^ a) & b ^ a, d, f, e[15], 14, 18, -660478335);
        b = c((d ^ f) & a ^ f, b, d, e[4], 20, 12, -405537848);
        a = c((b ^ d) & f ^ d, a, b, e[9], 5, 27, 568446438);
        f = c((a ^ b) & d ^ b, f, a, e[14], 9, 23, -1019803690);
        d = c((f ^ a) & b ^ a, d, f, e[3], 14, 18, -187363961);
        b = c((d ^ f) & a ^ f, b, d, e[8], 20, 12, 1163531501);
        a = c((b ^ d) & f ^ d, a, b, e[13], 5, 27, -1444681467);
        f = c((a ^ b) & d ^ b, f, a, e[2], 9, 23, -51403784);
        d = c((f ^ a) & b ^ a, d, f, e[7], 14, 18, 1735328473);
        b = c((d ^ f) & a ^ f, b, d, e[12], 20, 12, -1926607734);
        g = b ^ d;
        a = c(g ^ f, a, b, e[5], 4, 28, -378558);
        f = c(g ^ a, f, a, e[8], 11, 21, -2022574463);
        g = f ^ a;
        d = c(g ^ b, d, f, e[11], 16, 16, 1839030562);
        b = c(g ^ d, b, d, e[14], 23, 9, -35309556);
        g = b ^ d;
        a = c(g ^ f, a, b, e[1], 4, 28, -1530992060);
        f = c(g ^ a, f, a, e[4], 11, 21, 1272893353);
        g = f ^ a;
        d = c(g ^ b, d, f, e[7], 16, 16, -155497632);
        b = c(g ^ d, b, d, e[10], 23, 9, -1094730640);
        g = b ^ d;
        a = c(g ^ f, a, b, e[13], 4, 28, 681279174);
        f = c(g ^ a, f, a, e[0], 11, 21, -358537222);
        g = f ^ a;
        d = c(g ^ b, d, f, e[3], 16, 16, -722521979);
        b = c(g ^ d, b, d, e[6], 23, 9, 76029189);
        g = b ^ d;
        a = c(g ^ f, a, b, e[9], 4, 28, -640364487);
        f = c(g ^ a, f, a,
            e[12], 11, 21, -421815835);
        g = f ^ a;
        d = c(g ^ b, d, f, e[15], 16, 16, 530742520);
        b = c(g ^ d, b, d, e[2], 23, 9, -995338651);
        a = c(d ^ (b | ~f), a, b, e[0], 6, 26, -198630844);
        f = c(b ^ (a | ~d), f, a, e[7], 10, 22, 1126891415);
        d = c(a ^ (f | ~b), d, f, e[14], 15, 17, -1416354905);
        b = c(f ^ (d | ~a), b, d, e[5], 21, 11, -57434055);
        a = c(d ^ (b | ~f), a, b, e[12], 6, 26, 1700485571);
        f = c(b ^ (a | ~d), f, a, e[3], 10, 22, -1894986606);
        d = c(a ^ (f | ~b), d, f, e[10], 15, 17, -1051523);
        b = c(f ^ (d | ~a), b, d, e[1], 21, 11, -2054922799);
        a = c(d ^ (b | ~f), a, b, e[8], 6, 26, 1873313359);
        f = c(b ^ (a | ~d), f, a, e[15], 10, 22, -30611744);
        d =
            c(a ^ (f | ~b), d, f, e[6], 15, 17, -1560198380);
        b = c(f ^ (d | ~a), b, d, e[13], 21, 11, 1309151649);
        a = c(d ^ (b | ~f), a, b, e[4], 6, 26, -145523070);
        f = c(b ^ (a | ~d), f, a, e[11], 10, 22, -1120210379);
        d = c(a ^ (f | ~b), d, f, e[2], 15, 17, 718787259);
        b = c(f ^ (d | ~a), b, d, e[9], 21, 11, -343485551);
        s[0] = a;
        s[1] = b;
        s[2] = d;
        s[3] = f
    }
    var h = [],
        g = [],
        m = [],
        p = [],
        l = "0123456789abcdef".split(""),
        r = [],
        q = [],
        v = !1,
        A = 0,
        x = 0,
        s = [];
    if (a.Int32Array) g = new Int32Array(16), m = new Int32Array(16), p = new Int32Array(4), r = new Int32Array(4), q = new Int32Array(4), s = new Int32Array(4);
    else {
        for (a = 0; 16 >
            a; a++) g[a] = m[a] = 0;
        for (a = 0; 4 > a; a++) p[a] = r[a] = q[a] = s[a] = 0
    }
    p[0] = 128;
    p[1] = 32768;
    p[2] = 8388608;
    p[3] = -2147483648;
    r[0] = 0;
    r[1] = 8;
    r[2] = 16;
    r[3] = 24;
    Kongregate.Utils.md5 = function(a, c, k) {
        if (!c) {
            for (var f = c = "", s = 0, w = 0, u = 0, t = a.length; u < t; u++) f = a.charCodeAt(u), 128 > f ? w++ : (f = 2048 > f ? String.fromCharCode(f >> 6 | 192, f & 63 | 128) : String.fromCharCode(f >> 12 | 224, f >> 6 & 63 | 128, f & 63 | 128), w > s && (c += a.slice(s, w)), c += f, s = w = u + 1);
            w > s && (c += a.slice(s, t));
            a = c
        }
        a += "";
        v = !1;
        A = x = a.length;
        if (63 < x) {
            b(a.substring(0, 64));
            d(m);
            v = !0;
            for (c = 128; c <= x; c +=
                64) b(a.substring(c - 64, c)), e(m);
            a = a.substring(c - 64);
            x = a.length
        }
        for (c = g[0] = g[1] = g[2] = g[3] = g[4] = g[5] = g[6] = g[7] = g[8] = g[9] = g[10] = g[11] = g[12] = g[13] = g[14] = g[15] = 0; c < x; c++) s = c & 3, g[c >> 2] = 0 === s ? a.charCodeAt(c) : g[c >> 2] | a.charCodeAt(c) << r[s];
        g[c >> 2] |= p[c & 3];
        55 < c ? (v ? e(g) : (d(g), v = !0), e([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, A << 3, 0])) : (g[14] = A << 3, v ? e(g) : d(g));
        a = q[0];
        h[1] = l[a & 15];
        h[0] = l[(a >>= 4) & 15];
        h[3] = l[(a >>= 4) & 15];
        h[2] = l[(a >>= 4) & 15];
        h[5] = l[(a >>= 4) & 15];
        h[4] = l[(a >>= 4) & 15];
        h[7] = l[(a >>= 4) & 15];
        h[6] = l[a >> 4 & 15];
        a = q[1];
        h[9] = l[a &
            15];
        h[8] = l[(a >>= 4) & 15];
        h[11] = l[(a >>= 4) & 15];
        h[10] = l[(a >>= 4) & 15];
        h[13] = l[(a >>= 4) & 15];
        h[12] = l[(a >>= 4) & 15];
        h[15] = l[(a >>= 4) & 15];
        h[14] = l[a >> 4 & 15];
        a = q[2];
        h[17] = l[a & 15];
        h[16] = l[(a >>= 4) & 15];
        h[19] = l[(a >>= 4) & 15];
        h[18] = l[(a >>= 4) & 15];
        h[21] = l[(a >>= 4) & 15];
        h[20] = l[(a >>= 4) & 15];
        h[23] = l[(a >>= 4) & 15];
        h[22] = l[a >> 4 & 15];
        a = q[3];
        h[25] = l[a & 15];
        h[24] = l[(a >>= 4) & 15];
        h[27] = l[(a >>= 4) & 15];
        h[26] = l[(a >>= 4) & 15];
        h[29] = l[(a >>= 4) & 15];
        h[28] = l[(a >>= 4) & 15];
        h[31] = l[(a >>= 4) & 15];
        h[30] = l[a >> 4 & 15];
        return k ? h : h.join("")
    }
}("undefined" === typeof global ?
    window : global);
Kongregate.MicrotransactionServices = function(a) {
    this.initialize(a)
};
Kongregate.MicrotransactionServices.prototype = {
    initialize: function(a) {
        var b = this;
        this._services = a.services;
        this._services.addEventListener(KonduitEvent.KONDUIT_MESSAGE, function(a) {
            b._onIncomingMessage(a.opcode, a.params)
        });
        this._adCallbacks = []
    },
    requestItemList: function(a, b) {
        Kongregate.Log.info("MicrotransactionServices.requestItemList(" + a + ")");
        var c = {};
        a && 0 < a.length && (c[KonduitEvent.PARAM_ITEM_TAGS] = a);
        this._services._enqueueRequest(c, b);
        this._services.sendMessage({
            opcode: KonduitEvent.ITEM_LIST,
            params: c
        })
    },
    requestUserItemList: function(a, b) {
        Kongregate.Log.info("MicrotransactionServices.requestUserItemList(" + a + ")");
        var c = {};
        c[KonduitEvent.PARAM_USER] = a || this._services.getUsername();
        this._services._enqueueRequest(c, b);
        this._services.sendMessage({
            opcode: KonduitEvent.ITEM_INSTANCES,
            params: c
        })
    },
    purchaseItems: function(a, b) {
        Kongregate.Log.info("MicrotransactionServices.purchaseItems(" + a + ")");
        var c = {};
        a && 0 < a.length ? (this._purchaseItemsCallback = b, c[KonduitEvent.PARAM_ITEMS] = a, this._services.sendMessage({
            opcode: KonduitEvent.ITEM_CHECKOUT,
            params: c
        })) : (Kongregate.Log.error("purchaseItems requires a non-empty item identifier array"), b && b({
            success: !1
        }))
    },
    purchaseItemsRemote: function(a, b) {
        Kongregate.Log.info("MicrotransactionServices.purchaseItemsRemote(" + a + ")");
        var c = {};
        a && 0 < String(a).length ? (this._purchaseItemsCallback = b, c[KonduitEvent.PARAM_ORDER_INFO] = String(a), this._services.sendMessage({
            opcode: KonduitEvent.ITEM_CHECKOUT,
            params: c
        })) : (Kongregate.Log.error("purchaseItemsRemote requires an orderInformation string"), b && b({
            success: !1
        }))
    },
    useItemInstance: function(a, b) {
        Kongregate.Log.info("MicrotransactionServices.useItemInstance(" + a + ")");
        var c = {};
        a ? (c[KonduitEvent.PARAM_ID] = a, this._services._enqueueRequest(c, b), this._services.sendMessage({
            opcode: KonduitEvent.USE_ITEM_INSTANCE,
            params: c
        })) : (Kongregate.Log.error("useItemInstance requires an itemInstanceId"), b && b({
            success: !1
        }))
    },
    showKredPurchaseDialog: function(a) {
        var b = {};
        b[KonduitEvent.PARAM_PURCHASE_METHOD] = a;
        this._services.sendMessage({
            opcode: KonduitEvent.PURCHASE_KREDS,
            params: b
        })
    },
    initializeIncentivizedAds: function() {
        this._services.sendMessage({
            opcode: KonduitEvent.ADS_INITIALIZE
        })
    },
    showIncentivizedAd: function() {
        this._services.sendMessage({
            opcode: KonduitEvent.ADS_SHOW_INCENTIVIZED
        })
    },
    addEventListener: function(a, b) {
        "function" !== typeof b ? Kongregate.Log.error("addEventListener requires a callback function") : (this._adCallbacks[a] || (this._adCallbacks[a] = []), this._adCallbacks[a].push(b))
    },
    _onIncomingMessage: function(a, b) {
        switch (a) {
            case KonduitEvent.ITEM_INSTANCES:
            case KonduitEvent.ITEM_LIST:
            case KonduitEvent.USE_ITEM_INSTANCE:
                this._services._completeRequest(b);
                break;
            case KonduitEvent.PURCHASE_RESULT:
                this._onPurchaseResultResponse(b);
                break;
            case KonduitEvent.ADS_AVAILABLE:
                this._handleAdEvent("adsAvailable", b);
                break;
            case KonduitEvent.ADS_UNAVAILABLE:
                this._handleAdEvent("adsUnavailable", b);
                break;
            case KonduitEvent.AD_OPENED:
                this._handleAdEvent("adOpened", b);
                break;
            case KonduitEvent.AD_COMPLETED:
                this._handleAdEvent("adCompleted", b);
                break;
            case KonduitEvent.AD_ABANDONED:
                this._handleAdEvent("adAbandoned", b)
        }
    },
    _onPurchaseResultResponse: function(a) {
        this._purchaseItemsCallback &&
            (this._purchaseItemsCallback(a), this._purchaseItemsCallback = null)
    },
    _handleAdEvent: function(a, b) {
        var c = this._adCallbacks[a];
        if (c)
            for (var d = 0; d < c.length; d++) c[d](b)
    }
};
Kongregate.SharedContentServices = function(a) {
    this.initialize(a)
};
Kongregate.SharedContentServices.CONTENT_TYPE_LIMIT = 12;
Kongregate.SharedContentServices.prototype = {
    initialize: function(a) {
        var b = this;
        this._services = a.services;
        this._loadListeners = {};
        this._services.addEventListener(KonduitEvent.KONDUIT_MESSAGE, function(a) {
            b._onIncomingMessage(a.opcode, a.params)
        })
    },
    browse: function(a, b, c) {
        var d = {};
        d[KonduitEvent.PARAM_CONTENT_TYPE] = a;
        c && (d[KonduitEvent.PARAM_LABEL] = c);
        b && (d[KonduitEvent.PARAM_SORT] = b);
        this._services.sendMessage({
            opcode: KonduitEvent.OP_BROWSE_SHARED_CONTENT,
            params: d
        })
    },
    save: function(a, b, c, d, e) {
        if (this._saving ||
            a.length > Kongregate.SharedContentServices.CONTENT_TYPE_LIMIT) c && c({
            success: !1
        });
        else {
            var k = {};
            k[KonduitEvent.PARAM_CONTENT_TYPE] = a;
            k[KonduitEvent.PARAM_LABEL] = e;
            k[KonduitEvent.PARAM_DATA] = b;
            k[KonduitEvent.PARAM_IMAGE] = d;
            this._services.sendMessage({
                opcode: KonduitEvent.OP_SAVE_SHARED_CONTENT,
                params: k
            });
            this._saving = !0;
            this._saveCallback = c
        }
    },
    addLoadListener: function(a, b) {
        this._loadListeners[a] || (this._loadListeners[a] = []);
        this._loadListeners[a].push(b)
    },
    _onIncomingMessage: function(a, b) {
        switch (a) {
            case KonduitEvent.OP_SHARED_CONTENT_SAVE_COMPLETE:
                this._onSaveContentComplete(b);
                break;
            case KonduitEvent.OP_LOAD_SHARED_CONTENT:
                this._onLoadSharedContent(b)
        }
    },
    _onSaveContentComplete: function(a) {
        this._saving = !1;
        this._saveCallback && (this._saveCallback(a), this._saveCallback = null)
    },
    _onLoadSharedContent: function(a) {
        var b = a.contentType;
        a = {
            id: a.id,
            name: a.name,
            permalink: a.permalink,
            content: a.content,
            label: a.label
        };
        Kongregate.Log.info({
            loadContent: a
        });
        for (var b = this._loadListeners[b] || [], c = 0; c < b.length; c++) b[c](a)
    }
};
Kongregate.StatisticServices = function(a) {
    this.initialize(a)
};
Kongregate.StatisticServices.prototype = {
    initialize: function(a) {
        this._services = a.services
    },
    submit: function(a, b) {
        Kongregate.Log.info("StatServices.submit(" + a + "," + b + ")");
        !a || null === b || void 0 === b || isNaN(b) ? Kongregate.Log.warn("Invalid stat name or value:", a, b) : this._services.sendMessage({
            opcode: KonduitEvent.OP_STATS_SUBMIT,
            params: {
                stats: [{
                    name: a,
                    value: b
                }]
            }
        })
    },
    submitArray: function(a) {
        if (a && a.length)
            for (var b = 0; b < a.length; b++) this.submit(a[b].name, a[b].value)
    }
};
(function() {
    Kongregate.SwrveClient = function(a) {
        this.initialize(a)
    };
    var a = Kongregate.SwrveClient;
    Kongregate.SwrveClient.prototype = {
        initialize: function(a) {
            this._applicationId = a.application_id;
            this._apiKey = a.api_key;
            this._playerId = a.player_id;
            this._clientVersion = a.client_version
        },
        sendEvents: function(a, b) {
            var e = new XMLHttpRequest,
                k = a.length,
                h = this,
                g = function(e) {
                    h._onError(a, k, e, b)
                };
            e.open("POST", "//" + this._applicationId + ".api.swrve.com/1/batch");
            e.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            e.onerror = e.onabort = g;
            e.onload = function() {
                h._onBatchResponse(e, a, k, b, g)
            };
            "undefined" !== typeof e.timeout && (e.timeout = 3E4, e.ontimeout = g);
            e.send(JSON.stringify(this._createPayload(a)))
        },
        _onBatchResponse: function(a, b, e, k, h) {
            var g = !1;
            if (200 === a.status) {
                var m = a.responseText;
                (g = 0 === m.length) || (g = 200 === JSON.parse(m).code)
            }
            g ? (Kongregate.Log.debug("SWRVE submission complete, " + e + " event(s)"), b.splice(0, e), k && k({
                success: !0
            })) : (Kongregate.Log.error("Error while parsing swrve result: " + a.status + ", removing " +
                e + " event(s)"), h(!0))
        },
        _onError: function(a, b, e, k) {
            for (var h = 0; h < b && h < a.length; h++) {
                var g = a[h];
                if (g) {
                    var m = (g.event.retry_count || 0) + (e ? this._maxRetries() + 1 : 1);
                    g.event.retry_count = m
                }
            }
            this._pruneEvents(a);
            k && k({
                success: !1
            })
        },
        _createPayload: function(c) {
            for (var b = {
                    app_version: this._clientVersion,
                    session_token: this._createSessionToken(),
                    user: this._playerId
                }, e = [], k = 0; k < c.length; k++) {
                var h = c[k],
                    g = h.name,
                    m = this._getTime(h),
                    h = Kongregate.Utils.merge({}, h.event);
                this._removeTransientProperties(h);
                a.SWRVE_SESSION_START_IDENTIFIER ===
                    g ? e.push({
                        type: "session_start",
                        time: m
                    }) : a.SWRVE_USER_IDENTIFIER === g ? e.push({
                        type: "user",
                        time: m,
                        attributes: h
                    }) : a.SWRVE_IAP_IDENTIFIER === g ? e.push(Kongregate.Utils.merge({
                        type: "iap",
                        time: m
                    }, h)) : 0 === g.indexOf("swrve.") ? (g = g.replace("swrve.", "Kongregate."), e.push({
                        type: "event",
                        name: g,
                        time: m,
                        payload: h
                    })) : (g = "Kongregate.RawData." + g, e.push({
                        type: "event",
                        name: g,
                        time: m,
                        payload: {
                            data: JSON.stringify(h)
                        }
                    }))
            }
            b.data = e;
            return b
        },
        _pruneEvents: function(a) {
            for (var b = a.length - 1; 0 <= b; b--) a[b].event && a[b].event.retry_count >
                this._maxRetries() && (Kongregate.Log.debug("Event " + a[b].name + " is over max retry count, deleting it"), a.splice(b, 1));
            b = this._maxBacklogSize();
            a && a.length > b && a.splice(0, a.length - b)
        },
        _removeTransientProperties: function(a) {
            for (var d = 0; d < b.length; d++) {
                var e = b[d];
                void 0 !== a[e] && delete a[e]
            }
        },
        _createSessionToken: function() {
            var a = Math.floor(this._getDate().getTime() / 1E3);
            return this._applicationId + "=" + this._playerId + "=" + String(a) + "=" + Kongregate.Utils.md5(this._playerId + String(a) + this._apiKey)
        },
        _maxRetries: function() {
            return 2
        },
        _maxBacklogSize: function() {
            return 100
        },
        _getDate: function() {
            return new Date
        },
        _getTime: function(a) {
            var b = this._getDate();
            a.event && a.event[Kongregate.AnalyticsServices.KONG_ANALYTICS_EVENT_TIME] && (b = Kongregate.Utils.parseW3CDTF(a.event[Kongregate.AnalyticsServices.KONG_ANALYTICS_EVENT_TIME], this._getDate()));
            return Math.floor(b.getTime() / 1E3)
        }
    };
    a.SWRVE_EVENT_IDENTIFIER = "swrve.";
    a.SWRVE_BARE_EVENT_IDENTIFIER = a.SWRVE_EVENT_IDENTIFIER + "__bare_";
    a.SWRVE_SESSION_START_IDENTIFIER = a.SWRVE_BARE_EVENT_IDENTIFIER +
        "session_start";
    a.SWRVE_USER_IDENTIFIER = a.SWRVE_BARE_EVENT_IDENTIFIER + "user";
    a.SWRVE_IAP_IDENTIFIER = a.SWRVE_BARE_EVENT_IDENTIFIER + "iap";
    var b = ["auto_event", "retry_count"]
})();
(function() {
    Kongregate.Utils.merge = function(a, c) {
        if (!a || !c) return a;
        for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d]);
        return a
    };
    Kongregate.Utils.toW3CDTF = function(a) {
        function c(a) {
            return 10 > a ? "0" + a : a
        }
        return !(a instanceof Date) ? "" : a.getUTCFullYear() + "-" + c(a.getUTCMonth() + 1) + "-" + c(a.getUTCDate()) + "T" + c(a.getUTCHours()) + ":" + c(a.getUTCMinutes()) + ":" + c(a.getUTCSeconds()) + "." + (a.getUTCMilliseconds() / 1E3).toFixed(3).slice(2, 5) + "-00:00"
    };
    Kongregate.Utils.parseW3CDTF = function(b, c) {
        var d;
        try {
            var e, k = 0,
                h = [1, 4,
                    5, 6, 7, 10, 11
                ];
            if (e = a.exec(b)) {
                for (var g = 0, m; m = h[g]; ++g) e[m] = +e[m] || 0;
                e[2] = (+e[2] || 1) - 1;
                e[3] = +e[3] || 1;
                "Z" !== e[8] && void 0 !== e[9] && (k = 60 * e[10] + e[11], "+" === e[9] && (k = 0 - k));
                d = new Date(Date.UTC(e[1], e[2], e[3], e[4], e[5] + k, e[6], e[7]))
            }
            if (!d || "Invalid Date" === d.toString()) throw Error("This date does not conform to W3CDTF.");
        } catch (p) {
            return d = "Unable to parse the string [" + b + "] into a date. " + ("The internal error was: " + p.toString()), Kongregate.Log.error(d), c
        }
        return d
    };
    Kongregate.Utils.indexOf = function(a, c) {
        if (!a) return -1;
        if ("function" === typeof a.indexOf) return a.indexOf(c);
        for (var d = 0; d < a.length; d++)
            if (a[d] === c) return d;
        return -1
    };
    var a = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/
})();
"undefined" == typeof kongregateUnitySupport && (kongregateUnitySupport = function() {
    function a(a) {
        a = h.getElementById(a);
        if (!a) return null;
        var b;
        r.win && r.ie ? (a = a.getElementsByTagName("object")[0]) && "OBJECT" == a.nodeName && (b = a) : (a = a.getElementsByTagName("embed")[0]) && "EMBED" == a.nodeName && (b = a);
        return b && typeof b.GetPluginVersion == e ? null : b
    }

    function b() {
        var b = typeof kongregateAPI != e && kongregateAPI.unityGameInstance ? kongregateAPI.unityGameInstance : "function" === typeof window.SendMessage ? window : window.gameInstance &&
            "function" === typeof window.gameInstance.SendMessage ? window.gameInstance : null;
        if (b) return b;
        b = "kongregateUnityDiv";
        typeof kongregateAPI != e && kongregateAPI.unityElementId && (b = kongregateAPI.unityElementId);
        return a(b) || a("unityPlayer")
    }

    function c() {
        return [kongregate.services.getUserId(), kongregate.services.getUsername(), kongregate.services.getGameAuthToken()].join("|")
    }
    var d = [],
        e = "undefined",
        k = navigator,
        h = document,
        g = k.userAgent,
        k = k.platform,
        m = !1,
        p = /chrome/i.test(g),
        l = {};
    /msie/i.test(g) ? m = parseFloat(g.replace(/^.*msie ([0-9]+(\.[0-9]+)?).*$/i,
        "$1")) : /Trident/i.test(g) && (m = parseFloat(g.replace(/^.*rv:([0-9]+(\.[0-9]+)?).*$/i, "$1")));
    var r = {
        w3: typeof h.getElementById != e && typeof h.getElementsByTagName != e && typeof h.createElement != e,
        win: k ? /win/i.test(k) : /win/i.test(g),
        mac: k ? /mac/i.test(k) : /mac/i.test(g),
        ie: m,
        ff: /firefox/i.test(g),
        op: /opera/i.test(g),
        ch: p,
        ch_v: /chrome/i.test(g) ? parseFloat(g.replace(/^.*chrome\/(\d+(\.\d+)?).*$/i, "$1")) : !1,
        sf: /safari/i.test(g) && !p,
        wk: /webkit/i.test(g) ? parseFloat(g.replace(/^.*webkit\/(\d+(\.\d+)?).*$/i, "$1")) :
            !1,
        x64: /win64/i.test(g) && /x64/i.test(g),
        moz: /mozilla/i.test(g) ? parseFloat(g.replace(/^.*mozilla\/([0-9]+(\.[0-9]+)?).*$/i, "$1")) : 0,
        mobile: /ipad/i.test(k) || /iphone/i.test(k) || /ipod/i.test(k) || /android/i.test(g) || /windows phone/i.test(g)
    };
    r.clientBrand = r.ch ? "ch" : r.ff ? "ff" : r.sf ? "sf" : r.ie ? "ie" : r.op ? "op" : "??";
    r.clientPlatform = r.win ? "win" : r.mac ? "mac" : "???";
    return {
        onUnityEmbed: function(a) {
            $("unity_missing") && (a.success ? "missingUnityObject" == a.id ? ($("missingUnityObject").update(""), $("kongregateUnityDiv").update(""),
                top.location.replace(decodeURIComponent(kongregateAPI.getVariable("kongregate_game_url")))) : $("unity_missing").remove() : $("unity_missing").show())
        },
        initAPI: function(a, e) {
            d.push({
                object: a || "KongregateAPI",
                callback: e || "OnKongregateAPILoaded"
            });
            kongregateAPI.loadAPI(function() {
                "undefined" === typeof kongregate && (kongregate = kongregateAPI.getAPI());
                for (var a = 0; a < d.length; a++) {
                    var e = d[a];
                    b().SendMessage(e.object, e.callback, c())
                }
                d = []
            })
        },
        getUnityObject: function() {
            return b()
        },
        getUserInfoString: function() {
            return c()
        },
        hijackUnityErrorHandler: function() {
            if (!kongregateAPI.disableUnityErrorHandler && !this.unityErrorHandlerInstalled) {
                var a = function(a) {
                    if (a.match(/Permission denied to access property/)) {
                        try {
                            console.error("Caught error: " + a)
                        } catch (b) {}
                        return !0
                    }
                    try {
                        var c;
                        b: {
                            if ("string" === typeof a) {
                                if (-1 !== a.indexOf("Cannot enlarge memory arrays")) {
                                    c = "UnityWebGL:Memory:WebGL";
                                    break b
                                }
                                if (-1 !== a.indexOf("out of memory")) {
                                    c = "UnityWebGL:Memory:Browser";
                                    break b
                                }
                            }
                            c = void 0
                        }
                        if (c && !l[c]) {
                            var d = decodeURIComponent(kongregateAPI.flashVarsObject().kongregate_host ||
                                "*");
                            l[c] = !0;
                            top.postMessage({
                                kongregateGameError: {
                                    type: c
                                }
                            }, d)
                        }
                    } catch (e) {}
                };
                if ("undefined" !== typeof UnityLoader && UnityLoader.Error && UnityLoader.Error.handler) {
                    var b = UnityLoader.Error.handler;
                    UnityLoader.Error.handler = function(c) {
                        return a(c.message) ? !0 : "function" === typeof b && b.apply(UnityLoader.Error, arguments)
                    };
                    this.unityErrorHandlerInstalled = !0
                }
                var c = window.Module;
                if (c && c.TOTAL_MEMORY && c.codeUrl) {
                    var d = c.errorhandler;
                    c.errorhandler = function(b, c, e) {
                        return a(b) ? !0 : "function" === typeof d && d(b, c, e)
                    };
                    this.unityErrorHandlerInstalled = !0
                }
            }
        }
    }
}());