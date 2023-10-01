var _SETTINGS = {
    MarketJSGameCenter: {
        Activator: {
            Enabled: !1,
            Position: {
                Top: "15%",
                Left: "0"
            }
        },
        API: {
            Enabled: !1,
            Log: {
                Events: {
                    InitializeGame: !0,
                    EndGame: !0,
                    Level: {
                        Begin: !0,
                        End: !0,
                        Win: !0,
                        Lose: !0,
                        Draw: !0
                    }
                }
            }
        }
    },
    API: {
        Enabled: !1,
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !1,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "https://www.arcadebull.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "https://www.arcadebull.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    MoreGames: {
        Enabled: !1,
        Link: "https://www.arcadebull.com/",
        NewWindow: !0
    },
    Gamecenter: {
        Enabled: !1
    }
};
var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Splash: {
        Loading: "Loading ...",
        LogoLine1: "Some text here",
        LogoLine2: "powered by MarketJS",
        LogoLine3: "none"
    },
    Game: {
        SelectPlayer: "Select Player",
        Win: "You win!",
        Lose: "You lose!",
        Score: "Score",
        Time: "Time"
    },
    Results: {
        Title: "High score"
    },
    UnitStatistics: {
        Tank: {
            M1: {
                HP: 3E3,
                Armor: 50,
                Cost: 0,
                Upgrades: {
                    Cost: {
                        Base: 1E3,
                        Increment: 1E3
                    },
                    HP: {
                        Base: 100,
                        Increment: 10
                    },
                    Armor: {
                        Base: 5,
                        Increment: 2
                    }
                },
                Seats: {
                    One: [43, 143],
                    Two: [60, 17],
                    Three: [141, 81]
                }
            },
            M2: {
                HP: 2E3,
                Armor: 25,
                Cost: 1E4,
                Upgrades: {
                    Cost: {
                        Base: 1E3,
                        Increment: 1E3
                    },
                    HP: {
                        Base: 25,
                        Increment: 5
                    },
                    Armor: {
                        Base: 1,
                        Increment: 2
                    }
                }
            },
            M3: {
                HP: 2800,
                Armor: 10,
                Cost: 3E4,
                Upgrades: {
                    Cost: {
                        Base: 1E3,
                        Increment: 1E3
                    },
                    HP: {
                        Base: 100,
                        Increment: 10
                    },
                    Armor: {
                        Base: 2,
                        Increment: 2
                    }
                }
            }
        }
    }
};
var MobileAdInGamePreroll = {
};
var MobileAdInGameHeader = {
};
var MobileAdInGameFooter = {
};
var MobileAdInGameEnd = {
};
! function(b, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = b.document ? c(b, !0) : function(b) {
        if (!b.document) throw Error("jQuery requires a window with a document");
        return c(b)
    } : c(b)
}("undefined" != typeof window ? window : this, function(b, c) {
    function d(b, c) {
        c = c || A;
        var v = c.createElement("script");
        v.text = b;
        c.head.appendChild(v).parentNode.removeChild(v)
    }

    function e(b) {
        var c = !!b && "length" in b && b.length,
            v = j.type(b);
        return "function" !== v && !j.isWindow(b) && ("array" === v || 0 === c || "number" == typeof c && 0 < c && c - 1 in b)
    }

    function f(b, c) {
        return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
    }

    function l(b, c, v) {
        return j.isFunction(c) ? j.grep(b, function(b, x) {
            return !!c.call(b, x, b) !== v
        }) : c.nodeType ? j.grep(b, function(b) {
            return b === c !== v
        }) : "string" != typeof c ? j.grep(b, function(b) {
            return -1 < Da.call(c, b) !== v
        }) : Cc.test(c) ? j.filter(c, b, v) : (c = j.filter(c, b), j.grep(b, function(b) {
            return -1 < Da.call(c, b) !== v && 1 === b.nodeType
        }))
    }

    function q(b, c) {
        for (;
            (b = b[c]) && 1 !== b.nodeType;);
        return b
    }

    function r(b) {
        return b
    }

    function g(b) {
        throw b;
    }

    function m(b, c, v, d) {
        var g;
        try {
            b && j.isFunction(g = b.promise) ? g.call(b).done(c).fail(v) : b && j.isFunction(g = b.then) ? g.call(b, c, v) : c.apply(void 0, [b].slice(d))
        } catch (B) {
            v.apply(void 0, [B])
        }
    }

    function n() {
        A.removeEventListener("DOMContentLoaded", n);
        b.removeEventListener("load", n);
        j.ready()
    }

    function p() {
        this.expando = j.expando + p.uid++
    }

    function s(b, c, v) {
        var d;
        if (void 0 === v && 1 === b.nodeType)
            if (d = "data-" + c.replace(Dc, "-$&").toLowerCase(), v = b.getAttribute(d), "string" == typeof v) {
                try {
                    v = "true" === v || "false" !== v && ("null" === v ? null : v === +v + "" ? +v : Ec.test(v) ? JSON.parse(v) : v)
                } catch (g) {}
                Q.set(b, c, v)
            } else v = void 0;
        return v
    }

    function u(b, c, v, d) {
        var g, B = 1,
            f = 20,
            e = d ? function() {
                return d.cur()
            } : function() {
                return j.css(b, c, "")
            },
            m = e(),
            n = v && v[3] || (j.cssNumber[c] ? "" : "px"),
            l = (j.cssNumber[c] || "px" !== n && +m) && Ea.exec(j.css(b, c));
        if (l && l[3] !== n) {
            n = n || l[3];
            v = v || [];
            l = +m || 1;
            do B = B || ".5", l /= B, j.style(b, c, l + n); while (B !== (B = e() / m) && 1 !== B && --f)
        }
        return v && (l = +l || +m || 0, g = v[1] ? l + (v[1] + 1) * v[2] : +v[2], d && (d.unit = n, d.start = l, d.end = g)), g
    }

    function t(b, c) {
        for (var v, d, g = [], B = 0, f = b.length; B < f; B++)
            if (d = b[B], d.style)
                if (v = d.style.display, c) {
                    if ("none" === v && (g[B] = D.get(d, "display") || null, g[B] || (d.style.display = "")), "" === d.style.display && Ma(d)) {
                        v = g;
                        var e = B,
                            m, n = void 0;
                        m = d.ownerDocument;
                        var l = d.nodeName;
                        m = (d = Ab[l]) ? d : (n = m.body.appendChild(m.createElement(l)), d = j.css(n, "display"), n.parentNode.removeChild(n), "none" === d && (d = "block"), Ab[l] = d, d);
                        v[e] = m
                    }
                } else "none" !== v && (g[B] = "none", D.set(d, "display", v));
        for (B = 0; B < f; B++) null != g[B] && (b[B].style.display = g[B]);
        return b
    }

    function y(b, c) {
        var v;
        return v = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(c || "*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll(c || "*") : [], void 0 === c || c && f(b, c) ? j.merge([b], v) : v
    }

    function G(b, c) {
        for (var v = 0, d = b.length; v < d; v++) D.set(b[v], "globalEval", !c || D.get(c[v], "globalEval"))
    }

    function F(b, c, v, d, g) {
        for (var B, f, e, m, n = c.createDocumentFragment(), l = [], p = 0, s = b.length; p < s; p++)
            if (B = b[p], B || 0 === B)
                if ("object" === j.type(B)) j.merge(l, B.nodeType ? [B] : B);
                else if (Fc.test(B)) {
            f = f || n.appendChild(c.createElement("div"));
            e = (Bb.exec(B) || ["", ""])[1].toLowerCase();
            e = T[e] || T._default;
            f.innerHTML = e[1] + j.htmlPrefilter(B) + e[2];
            for (e = e[0]; e--;) f = f.lastChild;
            j.merge(l, f.childNodes);
            f = n.firstChild;
            f.textContent = ""
        } else l.push(c.createTextNode(B));
        n.textContent = "";
        for (p = 0; B = l[p++];)
            if (d && -1 < j.inArray(B, d)) g && g.push(B);
            else if (m = j.contains(B.ownerDocument, B), f = y(n.appendChild(B), "script"), m && G(f), v)
            for (e = 0; B = f[e++];) Cb.test(B.type || "") && v.push(B);
        return n
    }

    function J() {
        return !0
    }

    function U() {
        return !1
    }

    function ma() {
        try {
            return A.activeElement
        } catch (b) {}
    }

    function P(b, c, v, d, g, f) {
        var e, m;
        if ("object" == typeof c) {
            "string" != typeof v && (d = d || v, v = void 0);
            for (m in c) P(b, m, v, d, c[m], f);
            return b
        }
        if (null == d && null == g ? (g = v, d = v = void 0) : null == g && ("string" == typeof v ? (g = d, d = void 0) : (g = d, d = v, v = void 0)), !1 === g) g = U;
        else if (!g) return b;
        return 1 === f && (e = g, g = function(b) {
            return j().off(b), e.apply(this, arguments)
        }, g.guid = e.guid || (e.guid = j.guid++)), b.each(function() {
            j.event.add(this, c, g, d, v)
        })
    }

    function Db(b, c) {
        return f(b, "table") && f(11 !== c.nodeType ? c : c.firstChild, "tr") ? j(">tbody", b)[0] || b : b
    }

    function Gc(b) {
        return b.type = (null !== b.getAttribute("type")) + "/" + b.type, b
    }

    function Hc(b) {
        var c = Ic.exec(b.type);
        return c ? b.type = c[1] : b.removeAttribute("type"), b
    }

    function Eb(b, c) {
        var d, g, K, f, e, m;
        if (1 === c.nodeType) {
            if (D.hasData(b) && (d = D.access(b), g = D.set(c, d), m = d.events))
                for (K in delete g.handle, g.events = {}, m) {
                    d = 0;
                    for (g = m[K].length; d < g; d++) j.event.add(c, K, m[K][d])
                }
            Q.hasData(b) && (f = Q.access(b), e = j.extend({}, f), Q.set(c, e))
        }
    }

    function xa(b, c, v, g) {
        c = Fb.apply([], c);
        var K, f, e, m, n = 0,
            l = b.length,
            p = l - 1,
            s = c[0],
            r = j.isFunction(s);
        if (r || 1 < l && "string" == typeof s && !H.checkClone && Jc.test(s)) return b.each(function(d) {
            var j = b.eq(d);
            r && (c[0] = s.call(this, d, j.html()));
            xa(j, c, v, g)
        });
        if (l && (K = F(c, b[0].ownerDocument, !1, b, g), f = K.firstChild, 1 === K.childNodes.length && (K = f), f || g)) {
            f = j.map(y(K, "script"), Gc);
            for (e = f.length; n < l; n++) m = K, n !== p && (m = j.clone(m, !0, !0), e && j.merge(f, y(m, "script"))), v.call(b[n], m, n);
            if (e) {
                K = f[f.length - 1].ownerDocument;
                j.map(f, Hc);
                for (n = 0; n < e; n++) m = f[n], Cb.test(m.type || "") && !D.access(m, "globalEval") && j.contains(K, m) && (m.src ? j._evalUrl && j._evalUrl(m.src) : d(m.textContent.replace(Lc, ""), K))
            }
        }
        return b
    }

    function Gb(b, c, d) {
        for (var g = c ? j.filter(c, b) : b, K = 0; null != (c = g[K]); K++) d || 1 !== c.nodeType || j.cleanData(y(c)), c.parentNode && (d && j.contains(c.ownerDocument, c) && G(y(c, "script")), c.parentNode.removeChild(c));
        return b
    }

    function Fa(b, c, d) {
        var g, K, f, e, m = b.style;
        return d = d || Na(b), d && (e = d.getPropertyValue(c) || d[c], "" !== e || j.contains(b.ownerDocument, b) || (e = j.style(b, c)), !H.pixelMarginRight() && gb.test(e) && Hb.test(c) && (g = m.width, K = m.minWidth, f = m.maxWidth, m.minWidth = m.maxWidth = m.width = e, e = d.width, m.width = g, m.minWidth = K, m.maxWidth = f)), void 0 !== e ? e + "" : e
    }

    function Ib(b, c) {
        return {
            get: function() {
                return b() ? void delete this.get : (this.get = c).apply(this, arguments)
            }
        }
    }

    function Jb(b) {
        var c = j.cssProps[b];
        if (!c) {
            var c = j.cssProps,
                d;
            a: if (d = b, !(d in Kb)) {
                for (var g = d[0].toUpperCase() + d.slice(1), K = Lb.length; K--;)
                    if (d = Lb[K] + g, d in Kb) break a;
                d = void 0
            }
            c = c[b] = d || b
        }
        return c
    }

    function Mb(b, c, d) {
        return (b = Ea.exec(c)) ? Math.max(0, b[2] - (d || 0)) + (b[3] || "px") : c
    }

    function Nb(b, c, d, g, K) {
        var e = 0;
        for (c = d === (g ? "border" : "content") ? 4 : "width" === c ? 1 : 0; 4 > c; c += 2) "margin" === d && (e += j.css(b, d + na[c], !0, K)), g ? ("content" === d && (e -= j.css(b, "padding" + na[c], !0, K)), "margin" !== d && (e -= j.css(b, "border" + na[c] + "Width", !0, K))) : (e += j.css(b, "padding" + na[c], !0, K), "padding" !== d && (e += j.css(b, "border" + na[c] + "Width", !0, K)));
        return e
    }

    function Ob(b, c, d) {
        var g, K = Na(b),
            e = Fa(b, c, K),
            f = "border-box" === j.css(b, "boxSizing", !1, K);
        return gb.test(e) ? e : (g = f && (H.boxSizingReliable() || e === b.style[c]), "auto" === e && (e = b["offset" + c[0].toUpperCase() + c.slice(1)]), e = parseFloat(e) || 0, e + Nb(b, c, d || (f ? "border" : "content"), g, K) + "px")
    }

    function R(b, c, d, g, j) {
        return new R.prototype.init(b, c, d, g, j)
    }

    function hb() {
        Oa && (!1 === A.hidden && b.requestAnimationFrame ? b.requestAnimationFrame(hb) : b.setTimeout(hb, j.fx.interval), j.fx.tick())
    }

    function Pb() {
        return b.setTimeout(function() {
            ya = void 0
        }), ya = j.now()
    }

    function Pa(b, c) {
        var d, g = 0,
            j = {
                height: b
            };
        for (c = c ? 1 : 0; 4 > g; g += 2 - c) d = na[g], j["margin" + d] = j["padding" + d] = b;
        return c && (j.opacity = j.width = b), j
    }

    function Qb(b, c, d) {
        for (var g, j = (Z.tweeners[c] || []).concat(Z.tweeners["*"]), e = 0, f = j.length; e < f; e++)
            if (g = j[e].call(d, c, b)) return g
    }

    function Z(b, c, d) {
        var g, e, f = 0,
            m = Z.prefilters.length,
            n = j.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (e) return !1;
                for (var c = ya || Pb(), c = Math.max(0, p.startTime + p.duration - c), z = 1 - (c / p.duration || 0), d = 0, v = p.tweens.length; d < v; d++) p.tweens[d].run(z);
                return n.notifyWith(b, [p, z, c]), 1 > z && v ? c : (v || n.notifyWith(b, [p, 1, 0]), n.resolveWith(b, [p]), !1)
            },
            p = n.promise({
                elem: b,
                props: j.extend({}, c),
                opts: j.extend(!0, {
                    specialEasing: {},
                    easing: j.easing._default
                }, d),
                originalProperties: c,
                originalOptions: d,
                startTime: ya || Pb(),
                duration: d.duration,
                tweens: [],
                createTween: function(c, z) {
                    var d = j.Tween(b, p.opts, c, z, p.opts.specialEasing[c] || p.opts.easing);
                    return p.tweens.push(d), d
                },
                stop: function(c) {
                    var z = 0,
                        d = c ? p.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; z < d; z++) p.tweens[z].run(1);
                    return c ? (n.notifyWith(b, [p, 1, 0]), n.resolveWith(b, [p, c])) : n.rejectWith(b, [p, c]), this
                }
            });
        c = p.props;
        d = p.opts.specialEasing;
        var s, r, q, u;
        for (g in c)
            if (s = j.camelCase(g), r = d[s], q = c[g], Array.isArray(q) && (r = q[1], q = c[g] = q[0]), g !== s && (c[s] = q, delete c[g]), u = j.cssHooks[s], u && "expand" in u)
                for (g in q = u.expand(q), delete c[s], q) g in c || (c[g] = q[g], d[g] = r);
            else d[s] = r;
        for (; f < m; f++)
            if (g = Z.prefilters[f].call(p, b, c, p.opts)) return j.isFunction(g.stop) && (j._queueHooks(p.elem, p.opts.queue).stop = j.proxy(g.stop, g)), g;
        return j.map(c, Qb, p), j.isFunction(p.opts.start) && p.opts.start.call(b, p), p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always), j.fx.timer(j.extend(l, {
            elem: b,
            anim: p,
            queue: p.opts.queue
        })), p
    }

    function oa(b) {
        return (b.match(V) || []).join(" ")
    }

    function pa(b) {
        return b.getAttribute && b.getAttribute("class") || ""
    }

    function ib(b, c, d, g) {
        var e;
        if (Array.isArray(c)) j.each(c, function(c, z) {
            d || Mc.test(b) ? g(b, z) : ib(b + "[" + ("object" == typeof z && null != z ? c : "") + "]", z, d, g)
        });
        else if (d || "object" !== j.type(c)) g(b, c);
        else
            for (e in c) ib(b + "[" + e + "]", c[e], d, g)
    }

    function Rb(b) {
        return function(c, d) {
            "string" != typeof c && (d = c, c = "*");
            var g, e = 0,
                f = c.toLowerCase().match(V) || [];
            if (j.isFunction(d))
                for (; g = f[e++];) "+" === g[0] ? (g = g.slice(1) || "*", (b[g] = b[g] || []).unshift(d)) : (b[g] = b[g] || []).push(d)
        }
    }

    function Sb(b, c, d, g) {
        function e(n) {
            var l;
            return f[n] = !0, j.each(b[n] || [], function(b, x) {
                var j = x(c, d, g);
                return "string" != typeof j || m || f[j] ? m ? !(l = j) : void 0 : (c.dataTypes.unshift(j), e(j), !1)
            }), l
        }
        var f = {},
            m = b === jb;
        return e(c.dataTypes[0]) || !f["*"] && e("*")
    }

    function kb(b, c) {
        var d, g, e = j.ajaxSettings.flatOptions || {};
        for (d in c) void 0 !== c[d] && ((e[d] ? b : g || (g = {}))[d] = c[d]);
        return g && j.extend(!0, b, g), b
    }
    var qa = [],
        A = b.document,
        Nc = Object.getPrototypeOf,
        ra = qa.slice,
        Fb = qa.concat,
        lb = qa.push,
        Da = qa.indexOf,
        Qa = {},
        Tb = Qa.toString,
        Ra = Qa.hasOwnProperty,
        Ub = Ra.toString,
        Oc = Ub.call(Object),
        H = {},
        j = function(b, c) {
            return new j.fn.init(b, c)
        },
        Pc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Qc = /^-ms-/,
        Rc = /-([a-z])/g,
        Sc = function(b, c) {
            return c.toUpperCase()
        };
    j.fn = j.prototype = {
        jquery: "3.2.1",
        constructor: j,
        length: 0,
        toArray: function() {
            return ra.call(this)
        },
        get: function(b) {
            return null == b ? ra.call(this) : 0 > b ? this[b + this.length] : this[b]
        },
        pushStack: function(b) {
            b = j.merge(this.constructor(), b);
            return b.prevObject = this, b
        },
        each: function(b) {
            return j.each(this, b)
        },
        map: function(b) {
            return this.pushStack(j.map(this, function(c, d) {
                return b.call(c, d, c)
            }))
        },
        slice: function() {
            return this.pushStack(ra.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(b) {
            var c = this.length;
            b = +b + (0 > b ? c : 0);
            return this.pushStack(0 <= b && b < c ? [this[b]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: lb,
        sort: qa.sort,
        splice: qa.splice
    };
    j.extend = j.fn.extend = function() {
        var b, c, d, g, e, f, m = arguments[0] || {},
            n = 1,
            l = arguments.length,
            p = !1;
        "boolean" == typeof m && (p = m, m = arguments[n] || {}, n++);
        "object" == typeof m || j.isFunction(m) || (m = {});
        for (n === l && (m = this, n--); n < l; n++)
            if (null != (b = arguments[n]))
                for (c in b) d = m[c], g = b[c], m !== g && (p && g && (j.isPlainObject(g) || (e = Array.isArray(g))) ? (e ? (e = !1, f = d && Array.isArray(d) ? d : []) : f = d && j.isPlainObject(d) ? d : {}, m[c] = j.extend(p, f, g)) : void 0 !== g && (m[c] = g));
        return m
    };
    j.extend({
        expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(b) {
            throw Error(b);
        },
        noop: function() {},
        isFunction: function(b) {
            return "function" === j.type(b)
        },
        isWindow: function(b) {
            return null != b && b === b.window
        },
        isNumeric: function(b) {
            var c = j.type(b);
            return ("number" === c || "string" === c) && !isNaN(b - parseFloat(b))
        },
        isPlainObject: function(b) {
            var c, d;
            return !(!b || "[object Object]" !== Tb.call(b)) && (!(c = Nc(b)) || (d = Ra.call(c, "constructor") && c.constructor, "function" == typeof d && Ub.call(d) === Oc))
        },
        isEmptyObject: function(b) {
            for (var c in b) return !1;
            return !0
        },
        type: function(b) {
            return null == b ? b + "" : "object" == typeof b || "function" == typeof b ? Qa[Tb.call(b)] || "object" : typeof b
        },
        globalEval: function(b) {
            d(b)
        },
        camelCase: function(b) {
            return b.replace(Qc, "ms-").replace(Rc, Sc)
        },
        each: function(b, c) {
            var d, g = 0;
            if (e(b))
                for (d = b.length; g < d && !1 !== c.call(b[g], g, b[g]); g++);
            else
                for (g in b)
                    if (!1 === c.call(b[g], g, b[g])) break; return b
        },
        trim: function(b) {
            return null == b ? "" : (b + "").replace(Pc, "")
        },
        makeArray: function(b, c) {
            var d = c || [];
            return null != b && (e(Object(b)) ? j.merge(d, "string" == typeof b ? [b] : b) : lb.call(d, b)), d
        },
        inArray: function(b, c, d) {
            return null == c ? -1 : Da.call(c, b, d)
        },
        merge: function(b, c) {
            for (var d = +c.length, g = 0, j = b.length; g < d; g++) b[j++] = c[g];
            return b.length = j, b
        },
        grep: function(b, c, d) {
            for (var g = [], j = 0, e = b.length, f = !d; j < e; j++) d = !c(b[j], j), d !== f && g.push(b[j]);
            return g
        },
        map: function(b, c, d) {
            var g, j, f = 0,
                m = [];
            if (e(b))
                for (g = b.length; f < g; f++) j = c(b[f], f, d), null != j && m.push(j);
            else
                for (f in b) j = c(b[f], f, d), null != j && m.push(j);
            return Fb.apply([], m)
        },
        guid: 1,
        proxy: function(b, c) {
            var d, g, e;
            if ("string" == typeof c && (d = b[c], c = b, b = d), j.isFunction(b)) return g = ra.call(arguments, 2), e = function() {
                return b.apply(c || this, g.concat(ra.call(arguments)))
            }, e.guid = b.guid = b.guid || j.guid++, e
        },
        now: Date.now,
        support: H
    });
    "function" == typeof Symbol && (j.fn[Symbol.iterator] = qa[Symbol.iterator]);
    j.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(b, c) {
        Qa["[object " + c + "]"] = c.toLowerCase()
    });
    var ia, mb = b,
        E = function(b, c, d, g) {
            var j, e, f, m, n, l = c && c.ownerDocument,
                p = c ? c.nodeType : 9;
            if (d = d || [], "string" != typeof b || !b || 1 !== p && 9 !== p && 11 !== p) return d;
            if (!g && ((c ? c.ownerDocument || c : W) !== I && ja(c), c = c || I, X)) {
                if (11 !== p && (m = Tc.exec(b)))
                    if (j = m[1])
                        if (9 === p) {
                            if (!(e = c.getElementById(j))) return d;
                            if (e.id === j) return d.push(e), d
                        } else {
                            if (l && (e = l.getElementById(j)) && Ga(c, e) && e.id === j) return d.push(e), d
                        } else {
                    if (m[2]) return ka.apply(d, c.getElementsByTagName(b)), d;
                    if ((j = m[3]) && M.getElementsByClassName && c.getElementsByClassName) return ka.apply(d, c.getElementsByClassName(j)), d
                } if (M.qsa && !Sa[b + " "] && (!O || !O.test(b))) {
                    if (1 !== p) l = c, n = b;
                    else if ("object" !== c.nodeName.toLowerCase()) {
                        (f = c.getAttribute("id")) ? f = f.replace(Vb, Wb): c.setAttribute("id", f = N);
                        e = Ha(b);
                        for (j = e.length; j--;) e[j] = "#" + f + " " + Ta(e[j]);
                        n = e.join(",");
                        l = nb.test(b) && ob(c.parentNode) || c
                    }
                    if (n) try {
                        return ka.apply(d, l.querySelectorAll(n)), d
                    } catch (s) {} finally {
                        f === N && c.removeAttribute("id")
                    }
                }
            }
            return Xb(b.replace(Ua, "$1"), c, d, g)
        },
        pb = function() {
            function b(d, g) {
                return c.push(d + " ") > C.cacheLength && delete b[c.shift()], b[d + " "] = g
            }
            var c = [];
            return b
        },
        aa = function(b) {
            return b[N] = !0, b
        },
        ca = function(b) {
            var c = I.createElement("fieldset");
            try {
                return !!b(c)
            } catch (d) {
                return !1
            } finally {
                c.parentNode && c.parentNode.removeChild(c)
            }
        },
        qb = function(b, c) {
            for (var d = b.split("|"), g = d.length; g--;) C.attrHandle[d[g]] = c
        },
        Yb = function(b, c) {
            var d = c && b,
                g = d && 1 === b.nodeType && 1 === c.nodeType && b.sourceIndex - c.sourceIndex;
            if (g) return g;
            if (d)
                for (; d = d.nextSibling;)
                    if (d === c) return -1;
            return b ? 1 : -1
        },
        Uc = function(b) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        },
        Vc = function(b) {
            return function(c) {
                var d = c.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && c.type === b
            }
        },
        Zb = function(b) {
            return function(c) {
                return "form" in c ? c.parentNode && !1 === c.disabled ? "label" in c ? "label" in c.parentNode ? c.parentNode.disabled === b : c.disabled === b : c.isDisabled === b || c.isDisabled !== !b && Wc(c) === b : c.disabled === b : "label" in c && c.disabled === b
            }
        },
        sa = function(b) {
            return aa(function(c) {
                return c = +c, aa(function(d, g) {
                    for (var j, e = b([], d.length, c), f = e.length; f--;) d[j = e[f]] && (d[j] = !(g[j] = d[j]))
                })
            })
        },
        ob = function(b) {
            return b && "undefined" != typeof b.getElementsByTagName && b
        },
        $b = function() {},
        Ta = function(b) {
            for (var c = 0, d = b.length, g = ""; c < d; c++) g += b[c].value;
            return g
        },
        Va = function(b, c, d) {
            var g = c.dir,
                j = c.next,
                e = j || g,
                f = d && "parentNode" === e,
                m = Xc++;
            return c.first ? function(c, d, z) {
                for (; c = c[g];)
                    if (1 === c.nodeType || f) return b(c, d, z);
                return !1
            } : function(c, d, z) {
                var v, n, l, p = [da, m];
                if (z)
                    for (; c = c[g];) {
                        if ((1 === c.nodeType || f) && b(c, d, z)) return !0
                    } else
                        for (; c = c[g];)
                            if (1 === c.nodeType || f)
                                if (l = c[N] || (c[N] = {}), n = l[c.uniqueID] || (l[c.uniqueID] = {}), j && j === c.nodeName.toLowerCase()) c = c[g] || c;
                                else {
                                    if ((v = n[e]) && v[0] === da && v[1] === m) return p[2] = v[2];
                                    if (n[e] = p, p[2] = b(c, d, z)) return !0
                                }
                return !1
            }
        },
        rb = function(b) {
            return 1 < b.length ? function(c, d, g) {
                for (var j = b.length; j--;)
                    if (!b[j](c, d, g)) return !1;
                return !0
            } : b[0]
        },
        Wa = function(b, c, d, g, j) {
            for (var e, f = [], m = 0, n = b.length, l = null != c; m < n; m++)(e = b[m]) && (d && !d(e, g, j) || (f.push(e), l && c.push(m)));
            return f
        },
        sb = function(b, c, d, g, j, e) {
            return g && !g[N] && (g = sb(g)), j && !j[N] && (j = sb(j, e)), aa(function(e, f, m, n) {
                var B, l, p = [],
                    s = [],
                    r = f.length,
                    q;
                if (!(q = e)) {
                    q = c || "*";
                    for (var u = m.nodeType ? [m] : m, t = [], y = 0, D = u.length; y < D; y++) E(q, u[y], t);
                    q = t
                }
                q = !b || !e && c ? q : Wa(q, p, b, m, n);
                u = d ? j || (e ? b : r || g) ? [] : f : q;
                if (d && d(q, u, m, n), g) {
                    B = Wa(u, s);
                    g(B, [], m, n);
                    for (m = B.length; m--;)(l = B[m]) && (u[s[m]] = !(q[s[m]] = l))
                }
                if (e) {
                    if (j || b) {
                        if (j) {
                            B = [];
                            for (m = u.length; m--;)(l = u[m]) && B.push(q[m] = l);
                            j(null, u = [], B, n)
                        }
                        for (m = u.length; m--;)(l = u[m]) && -1 < (B = j ? ta(e, l) : p[m]) && (e[B] = !(f[B] = l))
                    }
                } else u = Wa(u === f ? u.splice(r, u.length) : u), j ? j(null, f, u, n) : ka.apply(f, u)
            })
        },
        tb = function(b) {
            var c, d, g, j = b.length,
                e = C.relative[b[0].type];
            d = e || C.relative[" "];
            for (var f = e ? 1 : 0, m = Va(function(b) {
                return b === c
            }, d, !0), n = Va(function(b) {
                return -1 < ta(c, b)
            }, d, !0), l = [
                function(b, x, d) {
                    b = !e && (d || x !== Xa) || ((c = x).nodeType ? m(b, x, d) : n(b, x, d));
                    return c = null, b
                }
            ]; f < j; f++)
                if (d = C.relative[b[f].type]) l = [Va(rb(l), d)];
                else {
                    if (d = C.filter[b[f].type].apply(null, b[f].matches), d[N]) {
                        for (g = ++f; g < j && !C.relative[b[g].type]; g++);
                        return sb(1 < f && rb(l), 1 < f && Ta(b.slice(0, f - 1).concat({
                            value: " " === b[f - 2].type ? "*" : ""
                        })).replace(Ua, "$1"), d, f < g && tb(b.slice(f, g)), g < j && tb(b = b.slice(g)), g < j && Ta(b))
                    }
                    l.push(d)
                }
            return rb(l)
        },
        za, M, C, Ya, ac, Ha, ub, Xb, Xa, la, Aa, ja, I, Y, X, O, ua, Za, Ga, N = "sizzle" + 1 * new Date,
        W = mb.document,
        da = 0,
        Xc = 0,
        bc = pb(),
        cc = pb(),
        Sa = pb(),
        vb = function(b, c) {
            return b === c && (Aa = !0), 0
        },
        Yc = {}.hasOwnProperty,
        va = [],
        Zc = va.pop,
        $c = va.push,
        ka = va.push,
        dc = va.slice,
        ta = function(b, c) {
            for (var d = 0, g = b.length; d < g; d++)
                if (b[d] === c) return d;
            return -1
        },
        ad = /[\x20\t\r\n\f]+/g,
        Ua = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        bd = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        cd = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
        dd = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
        ed = RegExp(":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
        fd = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
        $a = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
            ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
            PSEUDO: RegExp("^:((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        gd = /^(?:input|select|textarea|button)$/i,
        hd = /^h\d$/i,
        Ia = /^[^{]+\{\s*\[native \w/,
        Tc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        nb = /[+~]/,
        ea = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
        fa = function(b, c, d) {
            b = "0x" + c - 65536;
            return b !== b || d ? c : 0 > b ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, 1023 & b | 56320)
        },
        Vb = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        Wb = function(b, c) {
            return c ? "\x00" === b ? "\ufffd" : b.slice(0, -1) + "\\" + b.charCodeAt(b.length - 1).toString(16) + " " : "\\" + b
        },
        ec = function() {
            ja()
        },
        Wc = Va(function(b) {
            return !0 === b.disabled && ("form" in b || "label" in b)
        }, {
            dir: "parentNode",
            next: "legend"
        });
    try {
        ka.apply(va = dc.call(W.childNodes), W.childNodes), va[W.childNodes.length].nodeType
    } catch (Kd) {
        ka = {
            apply: va.length ? function(b, c) {
                $c.apply(b, dc.call(c))
            } : function(b, c) {
                for (var d = b.length, g = 0; b[d++] = c[g++];);
                b.length = d - 1
            }
        }
    }
    M = E.support = {};
    ac = E.isXML = function(b) {
        b = b && (b.ownerDocument || b).documentElement;
        return !!b && "HTML" !== b.nodeName
    };
    ja = E.setDocument = function(b) {
        var c, d;
        b = b ? b.ownerDocument || b : W;
        return b !== I && 9 === b.nodeType && b.documentElement ? (I = b, Y = I.documentElement, X = !ac(I), W !== I && (d = I.defaultView) && d.top !== d && (d.addEventListener ? d.addEventListener("unload", ec, !1) : d.attachEvent && d.attachEvent("onunload", ec)), M.attributes = ca(function(b) {
            return b.className = "i", !b.getAttribute("className")
        }), M.getElementsByTagName = ca(function(b) {
            return b.appendChild(I.createComment("")), !b.getElementsByTagName("*").length
        }), M.getElementsByClassName = Ia.test(I.getElementsByClassName), M.getById = ca(function(b) {
            return Y.appendChild(b).id = N, !I.getElementsByName || !I.getElementsByName(N).length
        }), M.getById ? (C.filter.ID = function(b) {
            var c = b.replace(ea, fa);
            return function(b) {
                return b.getAttribute("id") === c
            }
        }, C.find.ID = function(b, c) {
            if ("undefined" != typeof c.getElementById && X) {
                var x = c.getElementById(b);
                return x ? [x] : []
            }
        }) : (C.filter.ID = function(b) {
            var c = b.replace(ea, fa);
            return function(b) {
                return (b = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id")) && b.value === c
            }
        }, C.find.ID = function(b, c) {
            if ("undefined" != typeof c.getElementById && X) {
                var x, d, g, z = c.getElementById(b);
                if (z) {
                    if (x = z.getAttributeNode("id"), x && x.value === b) return [z];
                    g = c.getElementsByName(b);
                    for (d = 0; z = g[d++];)
                        if (x = z.getAttributeNode("id"), x && x.value === b) return [z]
                }
                return []
            }
        }), C.find.TAG = M.getElementsByTagName ? function(b, c) {
            return "undefined" != typeof c.getElementsByTagName ? c.getElementsByTagName(b) : M.qsa ? c.querySelectorAll(b) : void 0
        } : function(b, c) {
            var x, d = [],
                g = 0,
                z = c.getElementsByTagName(b);
            if ("*" === b) {
                for (; x = z[g++];) 1 === x.nodeType && d.push(x);
                return d
            }
            return z
        }, C.find.CLASS = M.getElementsByClassName && function(b, c) {
            if ("undefined" != typeof c.getElementsByClassName && X) return c.getElementsByClassName(b)
        }, ua = [], O = [], (M.qsa = Ia.test(I.querySelectorAll)) && (ca(function(b) {
            Y.appendChild(b).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>";
            b.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
            b.querySelectorAll("[selected]").length || O.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
            b.querySelectorAll("[id~=" + N + "-]").length || O.push("~=");
            b.querySelectorAll(":checked").length || O.push(":checked");
            b.querySelectorAll("a#" + N + "+*").length || O.push(".#.+[+~]")
        }), ca(function(b) {
            b.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var c = I.createElement("input");
            c.setAttribute("type", "hidden");
            b.appendChild(c).setAttribute("name", "D");
            b.querySelectorAll("[name=d]").length && O.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
            2 !== b.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled");
            Y.appendChild(b).disabled = !0;
            2 !== b.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled");
            b.querySelectorAll("*,:x");
            O.push(",.*:")
        })), (M.matchesSelector = Ia.test(Za = Y.matches || Y.webkitMatchesSelector || Y.mozMatchesSelector || Y.oMatchesSelector || Y.msMatchesSelector)) && ca(function(b) {
            M.disconnectedMatch = Za.call(b, "*");
            Za.call(b, "[s!='']:x");
            ua.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
        }), O = O.length && RegExp(O.join("|")), ua = ua.length && RegExp(ua.join("|")), c = Ia.test(Y.compareDocumentPosition), Ga = c || Ia.test(Y.contains) ? function(b, c) {
            var x = 9 === b.nodeType ? b.documentElement : b,
                d = c && c.parentNode;
            return b === d || !(!d || 1 !== d.nodeType || !(x.contains ? x.contains(d) : b.compareDocumentPosition && 16 & b.compareDocumentPosition(d)))
        } : function(b, c) {
            if (c)
                for (; c = c.parentNode;)
                    if (c === b) return !0;
            return !1
        }, vb = c ? function(b, c) {
            if (b === c) return Aa = !0, 0;
            var x = !b.compareDocumentPosition - !c.compareDocumentPosition;
            return x ? x : (x = (b.ownerDocument || b) === (c.ownerDocument || c) ? b.compareDocumentPosition(c) : 1, 1 & x || !M.sortDetached && c.compareDocumentPosition(b) === x ? b === I || b.ownerDocument === W && Ga(W, b) ? -1 : c === I || c.ownerDocument === W && Ga(W, c) ? 1 : la ? ta(la, b) - ta(la, c) : 0 : 4 & x ? -1 : 1)
        } : function(b, c) {
            if (b === c) return Aa = !0, 0;
            var x, d = 0;
            x = b.parentNode;
            var g = c.parentNode,
                z = [b],
                j = [c];
            if (!x || !g) return b === I ? -1 : c === I ? 1 : x ? -1 : g ? 1 : la ? ta(la, b) - ta(la, c) : 0;
            if (x === g) return Yb(b, c);
            for (x = b; x = x.parentNode;) z.unshift(x);
            for (x = c; x = x.parentNode;) j.unshift(x);
            for (; z[d] === j[d];) d++;
            return d ? Yb(z[d], j[d]) : z[d] === W ? -1 : j[d] === W ? 1 : 0
        }, I) : I
    };
    E.matches = function(b, c) {
        return E(b, null, null, c)
    };
    E.matchesSelector = function(b, c) {
        if ((b.ownerDocument || b) !== I && ja(b), c = c.replace(dd, "='$1']"), M.matchesSelector && X && !Sa[c + " "] && (!ua || !ua.test(c)) && (!O || !O.test(c))) try {
            var d = Za.call(b, c);
            if (d || M.disconnectedMatch || b.document && 11 !== b.document.nodeType) return d
        } catch (g) {}
        return 0 < E(c, I, null, [b]).length
    };
    E.contains = function(b, c) {
        return (b.ownerDocument || b) !== I && ja(b), Ga(b, c)
    };
    E.attr = function(b, c) {
        (b.ownerDocument || b) !== I && ja(b);
        var d = C.attrHandle[c.toLowerCase()],
            d = d && Yc.call(C.attrHandle, c.toLowerCase()) ? d(b, c, !X) : void 0;
        return void 0 !== d ? d : M.attributes || !X ? b.getAttribute(c) : (d = b.getAttributeNode(c)) && d.specified ? d.value : null
    };
    E.escape = function(b) {
        return (b + "").replace(Vb, Wb)
    };
    E.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    E.uniqueSort = function(b) {
        var c, d = [],
            g = 0,
            j = 0;
        if (Aa = !M.detectDuplicates, la = !M.sortStable && b.slice(0), b.sort(vb), Aa) {
            for (; c = b[j++];) c === b[j] && (g = d.push(j));
            for (; g--;) b.splice(d[g], 1)
        }
        return la = null, b
    };
    Ya = E.getText = function(b) {
        var c, d = "",
            g = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent) return b.textContent;
                for (b = b.firstChild; b; b = b.nextSibling) d += Ya(b)
            } else {
                if (3 === c || 4 === c) return b.nodeValue
            } else
            for (; c = b[g++];) d += Ya(c);
        return d
    };
    C = E.selectors = {
        cacheLength: 50,
        createPseudo: aa,
        match: $a,
        attrHandle: {},
        find: {},
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(b) {
                return b[1] = b[1].replace(ea, fa), b[3] = (b[3] || b[4] || b[5] || "").replace(ea, fa), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1].slice(0, 3) ? (b[3] || E.error(b[0]), b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && E.error(b[0]), b
            },
            PSEUDO: function(b) {
                var c, d = !b[6] && b[2];
                return $a.CHILD.test(b[0]) ? null : (b[3] ? b[2] = b[4] || b[5] || "" : d && ed.test(d) && (c = Ha(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (b[0] = b[0].slice(0, c), b[2] = d.slice(0, c)), b.slice(0, 3))
            }
        },
        filter: {
            TAG: function(b) {
                var c = b.replace(ea, fa).toLowerCase();
                return "*" === b ? function() {
                    return !0
                } : function(b) {
                    return b.nodeName && b.nodeName.toLowerCase() === c
                }
            },
            CLASS: function(b) {
                var c = bc[b + " "];
                return c || (c = RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)")) && bc(b, function(b) {
                    return c.test("string" == typeof b.className && b.className || "undefined" != typeof b.getAttribute && b.getAttribute("class") || "")
                })
            },
            ATTR: function(b, c, d) {
                return function(g) {
                    g = E.attr(g, b);
                    return null == g ? "!=" === c : !c || (g += "", "=" === c ? g === d : "!=" === c ? g !== d : "^=" === c ? d && 0 === g.indexOf(d) : "*=" === c ? d && -1 < g.indexOf(d) : "$=" === c ? d && g.slice(-d.length) === d : "~=" === c ? -1 < (" " + g.replace(ad, " ") + " ").indexOf(d) : "|=" === c && (g === d || g.slice(0, d.length + 1) === d + "-"))
                }
            },
            CHILD: function(b, c, d, g, j) {
                var e = "nth" !== b.slice(0, 3),
                    f = "last" !== b.slice(-4),
                    m = "of-type" === c;
                return 1 === g && 0 === j ? function(b) {
                    return !!b.parentNode
                } : function(c, d, z) {
                    var v, n, l, p, s, r;
                    d = e !== f ? "nextSibling" : "previousSibling";
                    var q = c.parentNode,
                        u = m && c.nodeName.toLowerCase();
                    z = !z && !m;
                    var t = !1;
                    if (q) {
                        if (e) {
                            for (; d;) {
                                for (p = c; p = p[d];)
                                    if (m ? p.nodeName.toLowerCase() === u : 1 === p.nodeType) return !1;
                                r = d = "only" === b && !r && "nextSibling"
                            }
                            return !0
                        }
                        if (r = [f ? q.firstChild : q.lastChild], f && z) {
                            p = q;
                            l = p[N] || (p[N] = {});
                            n = l[p.uniqueID] || (l[p.uniqueID] = {});
                            v = n[b] || [];
                            t = (s = v[0] === da && v[1]) && v[2];
                            for (p = s && q.childNodes[s]; p = ++s && p && p[d] || (t = s = 0) || r.pop();)
                                if (1 === p.nodeType && ++t && p === c) {
                                    n[b] = [da, s, t];
                                    break
                                }
                        } else if (z && (p = c, l = p[N] || (p[N] = {}), n = l[p.uniqueID] || (l[p.uniqueID] = {}), v = n[b] || [], s = v[0] === da && v[1], t = s), !1 === t)
                            for (;
                                (p = ++s && p && p[d] || (t = s = 0) || r.pop()) && (!(m ? p.nodeName.toLowerCase() === u : 1 === p.nodeType) || !++t || !(z && (l = p[N] || (p[N] = {}), n = l[p.uniqueID] || (l[p.uniqueID] = {}), n[b] = [da, t]), p === c)););
                        return t -= j, t === g || 0 === t % g && 0 <= t / g
                    }
                }
            },
            PSEUDO: function(b, c) {
                var d, g = C.pseudos[b] || C.setFilters[b.toLowerCase()] || E.error("unsupported pseudo: " + b);
                return g[N] ? g(c) : 1 < g.length ? (d = [b, b, "", c], C.setFilters.hasOwnProperty(b.toLowerCase()) ? aa(function(b, d) {
                    for (var x, j = g(b, c), v = j.length; v--;) x = ta(b, j[v]), b[x] = !(d[x] = j[v])
                }) : function(b) {
                    return g(b, 0, d)
                }) : g
            }
        },
        pseudos: {
            not: aa(function(b) {
                var c = [],
                    d = [],
                    g = ub(b.replace(Ua, "$1"));
                return g[N] ? aa(function(b, c, d, x) {
                    var z;
                    d = g(b, null, x, []);
                    for (x = b.length; x--;)(z = d[x]) && (b[x] = !(c[x] = z))
                }) : function(b, x, j) {
                    return c[0] = b, g(c, null, j, d), c[0] = null, !d.pop()
                }
            }),
            has: aa(function(b) {
                return function(c) {
                    return 0 < E(b, c).length
                }
            }),
            contains: aa(function(b) {
                return b = b.replace(ea, fa),
                    function(c) {
                        return -1 < (c.textContent || c.innerText || Ya(c)).indexOf(b)
                    }
            }),
            lang: aa(function(b) {
                return fd.test(b || "") || E.error("unsupported lang: " + b), b = b.replace(ea, fa).toLowerCase(),
                    function(c) {
                        var d;
                        do
                            if (d = X ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang")) return d = d.toLowerCase(), d === b || 0 === d.indexOf(b + "-");
                        while ((c = c.parentNode) && 1 === c.nodeType);
                        return !1
                    }
            }),
            target: function(b) {
                var c = mb.location && mb.location.hash;
                return c && c.slice(1) === b.id
            },
            root: function(b) {
                return b === Y
            },
            focus: function(b) {
                return b === I.activeElement && (!I.hasFocus || I.hasFocus()) && !(!b.type && !b.href && !~b.tabIndex)
            },
            enabled: Zb(!1),
            disabled: Zb(!0),
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" === c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            empty: function(b) {
                for (b = b.firstChild; b; b = b.nextSibling)
                    if (6 > b.nodeType) return !1;
                return !0
            },
            parent: function(b) {
                return !C.pseudos.empty(b)
            },
            header: function(b) {
                return hd.test(b.nodeName)
            },
            input: function(b) {
                return gd.test(b.nodeName)
            },
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            text: function(b) {
                var c;
                return "input" === b.nodeName.toLowerCase() && "text" === b.type && (null == (c = b.getAttribute("type")) || "text" === c.toLowerCase())
            },
            first: sa(function() {
                return [0]
            }),
            last: sa(function(b, c) {
                return [c - 1]
            }),
            eq: sa(function(b, c, d) {
                return [0 > d ? d + c : d]
            }),
            even: sa(function(b, c) {
                for (var d = 0; d < c; d += 2) b.push(d);
                return b
            }),
            odd: sa(function(b, c) {
                for (var d = 1; d < c; d += 2) b.push(d);
                return b
            }),
            lt: sa(function(b, c, d) {
                for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
                return b
            }),
            gt: sa(function(b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
                return b
            })
        }
    };
    C.pseudos.nth = C.pseudos.eq;
    for (za in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
    }) C.pseudos[za] = Uc(za);
    for (za in {
        submit: !0,
        reset: !0
    }) C.pseudos[za] = Vc(za);
    $b.prototype = C.filters = C.pseudos;
    C.setFilters = new $b;
    Ha = E.tokenize = function(b, c) {
        var d, g, j, e, f, m, n;
        if (f = cc[b + " "]) return c ? 0 : f.slice(0);
        f = b;
        m = [];
        for (n = C.preFilter; f;) {
            d && !(g = bd.exec(f)) || (g && (f = f.slice(g[0].length) || f), m.push(j = []));
            d = !1;
            (g = cd.exec(f)) && (d = g.shift(), j.push({
                value: d,
                type: g[0].replace(Ua, " ")
            }), f = f.slice(d.length));
            for (e in C.filter)!(g = $a[e].exec(f)) || n[e] && !(g = n[e](g)) || (d = g.shift(), j.push({
                value: d,
                type: e,
                matches: g
            }), f = f.slice(d.length));
            if (!d) break
        }
        return c ? f.length : f ? E.error(b) : cc(b, m).slice(0)
    };
    ia = (ub = E.compile = function(b, c) {
        var d, g = [],
            j = [],
            e = Sa[b + " "];
        if (!e) {
            c || (c = Ha(b));
            for (d = c.length; d--;) e = tb(c[d]), e[N] ? g.push(e) : j.push(e);
            d = Sa;
            var f = 0 < g.length,
                m = 0 < j.length,
                e = function(b, c, d, x, z) {
                    var e, v, n, l = 0,
                        p = "0",
                        B = b && [],
                        s = [],
                        r = Xa,
                        q = b || m && C.find.TAG("*", z),
                        u = da += null == r ? 1 : Math.random() || 0.1,
                        t = q.length;
                    for (z && (Xa = c === I || c || z); p !== t && null != (e = q[p]); p++) {
                        if (m && e) {
                            v = 0;
                            for (c || e.ownerDocument === I || (ja(e), d = !X); n = j[v++];)
                                if (n(e, c || I, d)) {
                                    x.push(e);
                                    break
                                }
                            z && (da = u)
                        }
                        f && ((e = !n && e) && l--, b && B.push(e))
                    }
                    if (l += p, f && p !== l) {
                        for (v = 0; n = g[v++];) n(B, s, c, d);
                        if (b) {
                            if (0 < l)
                                for (; p--;) B[p] || s[p] || (s[p] = Zc.call(x));
                            s = Wa(s)
                        }
                        ka.apply(x, s);
                        z && !b && 0 < s.length && 1 < l + g.length && E.uniqueSort(x)
                    }
                    return z && (da = u, Xa = r), B
                },
                e = f ? aa(e) : e,
                e = d(b, e);
            e.selector = b
        }
        return e
    }, Xb = E.select = function(b, c, d, g) {
        var j, e, f, m, n, l = "function" == typeof b && b,
            p = !g && Ha(b = l.selector || b);
        if (d = d || [], 1 === p.length) {
            if (e = p[0] = p[0].slice(0), 2 < e.length && "ID" === (f = e[0]).type && 9 === c.nodeType && X && C.relative[e[1].type]) {
                if (c = (C.find.ID(f.matches[0].replace(ea, fa), c) || [])[0], !c) return d;
                l && (c = c.parentNode);
                b = b.slice(e.shift().value.length)
            }
            for (j = $a.needsContext.test(b) ? 0 : e.length; j-- && !(f = e[j], C.relative[m = f.type]);)
                if ((n = C.find[m]) && (g = n(f.matches[0].replace(ea, fa), nb.test(e[0].type) && ob(c.parentNode) || c))) {
                    if (e.splice(j, 1), b = g.length && Ta(e), !b) return ka.apply(d, g), d;
                    break
                }
        }
        return (l || ub(b, p))(g, c, !X, d, !c || nb.test(b) && ob(c.parentNode) || c), d
    }, M.sortStable = N.split("").sort(vb).join("") === N, M.detectDuplicates = !!Aa, ja(), M.sortDetached = ca(function(b) {
        return 1 & b.compareDocumentPosition(I.createElement("fieldset"))
    }), ca(function(b) {
        return b.innerHTML = "<a href='#'></a>", "#" === b.firstChild.getAttribute("href")
    }) || qb("type|href|height|width", function(b, c, d) {
        if (!d) return b.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
    }), M.attributes && ca(function(b) {
        return b.innerHTML = "<input/>", b.firstChild.setAttribute("value", ""), "" === b.firstChild.getAttribute("value")
    }) || qb("value", function(b, c, d) {
        if (!d && "input" === b.nodeName.toLowerCase()) return b.defaultValue
    }), ca(function(b) {
        return null == b.getAttribute("disabled")
    }) || qb("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(b, c, d) {
        var g;
        if (!d) return !0 === b[c] ? c.toLowerCase() : (g = b.getAttributeNode(c)) && g.specified ? g.value : null
    }), E);
    j.find = ia;
    j.expr = ia.selectors;
    j.expr[":"] = j.expr.pseudos;
    j.uniqueSort = j.unique = ia.uniqueSort;
    j.text = ia.getText;
    j.isXMLDoc = ia.isXML;
    j.contains = ia.contains;
    j.escapeSelector = ia.escape;
    var Ba = function(b, c, d) {
            for (var g = [], e = void 0 !== d;
                (b = b[c]) && 9 !== b.nodeType;)
                if (1 === b.nodeType) {
                    if (e && j(b).is(d)) break;
                    g.push(b)
                }
            return g
        },
        fc = function(b, c) {
            for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && d.push(b);
            return d
        },
        gc = j.expr.match.needsContext,
        hc = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Cc = /^.[^:#\[\.,]*$/;
    j.filter = function(b, c, d) {
        var g = c[0];
        return d && (b = ":not(" + b + ")"), 1 === c.length && 1 === g.nodeType ? j.find.matchesSelector(g, b) ? [g] : [] : j.find.matches(b, j.grep(c, function(b) {
            return 1 === b.nodeType
        }))
    };
    j.fn.extend({
        find: function(b) {
            var c, d, g = this.length,
                e = this;
            if ("string" != typeof b) return this.pushStack(j(b).filter(function() {
                for (c = 0; c < g; c++)
                    if (j.contains(e[c], this)) return !0
            }));
            d = this.pushStack([]);
            for (c = 0; c < g; c++) j.find(b, e[c], d);
            return 1 < g ? j.uniqueSort(d) : d
        },
        filter: function(b) {
            return this.pushStack(l(this, b || [], !1))
        },
        not: function(b) {
            return this.pushStack(l(this, b || [], !0))
        },
        is: function(b) {
            return !!l(this, "string" == typeof b && gc.test(b) ? j(b) : b || [], !1).length
        }
    });
    var ic, id = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (j.fn.init = function(b, c, d) {
        var g, e;
        if (!b) return this;
        if (d = d || ic, "string" == typeof b) {
            if (g = "<" === b[0] && ">" === b[b.length - 1] && 3 <= b.length ? [null, b, null] : id.exec(b), !g || !g[1] && c) return !c || c.jquery ? (c || d).find(b) : this.constructor(c).find(b);
            if (g[1]) {
                if (c = c instanceof j ? c[0] : c, j.merge(this, j.parseHTML(g[1], c && c.nodeType ? c.ownerDocument || c : A, !0)), hc.test(g[1]) && j.isPlainObject(c))
                    for (g in c) j.isFunction(this[g]) ? this[g](c[g]) : this.attr(g, c[g]);
                return this
            }
            return e = A.getElementById(g[2]), e && (this[0] = e, this.length = 1), this
        }
        return b.nodeType ? (this[0] = b, this.length = 1, this) : j.isFunction(b) ? void 0 !== d.ready ? d.ready(b) : b(j) : j.makeArray(b, this)
    }).prototype = j.fn;
    ic = j(A);
    var jd = /^(?:parents|prev(?:Until|All))/,
        kd = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    j.fn.extend({
        has: function(b) {
            var c = j(b, this),
                d = c.length;
            return this.filter(function() {
                for (var b = 0; b < d; b++)
                    if (j.contains(this, c[b])) return !0
            })
        },
        closest: function(b, c) {
            var d, g = 0,
                e = this.length,
                f = [],
                m = "string" != typeof b && j(b);
            if (!gc.test(b))
                for (; g < e; g++)
                    for (d = this[g]; d && d !== c; d = d.parentNode)
                        if (11 > d.nodeType && (m ? -1 < m.index(d) : 1 === d.nodeType && j.find.matchesSelector(d, b))) {
                            f.push(d);
                            break
                        }
            return this.pushStack(1 < f.length ? j.uniqueSort(f) : f)
        },
        index: function(b) {
            return b ? "string" == typeof b ? Da.call(j(b), this[0]) : Da.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(b, c) {
            return this.pushStack(j.uniqueSort(j.merge(this.get(), j(b, c))))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    j.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return Ba(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return Ba(b, "parentNode", d)
        },
        next: function(b) {
            return q(b, "nextSibling")
        },
        prev: function(b) {
            return q(b, "previousSibling")
        },
        nextAll: function(b) {
            return Ba(b, "nextSibling")
        },
        prevAll: function(b) {
            return Ba(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return Ba(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return Ba(b, "previousSibling", d)
        },
        siblings: function(b) {
            return fc((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return fc(b.firstChild)
        },
        contents: function(b) {
            return f(b, "iframe") ? b.contentDocument : (f(b, "template") && (b = b.content || b), j.merge([], b.childNodes))
        }
    }, function(b, c) {
        j.fn[b] = function(d, g) {
            var e = j.map(this, c, d);
            return "Until" !== b.slice(-5) && (g = d), g && "string" == typeof g && (e = j.filter(g, e)), 1 < this.length && (kd[b] || j.uniqueSort(e), jd.test(b) && e.reverse()), this.pushStack(e)
        }
    });
    var V = /[^\x20\t\r\n\f]+/g;
    j.Callbacks = function(b) {
        var c;
        if ("string" == typeof b) {
            var d = {};
            c = (j.each(b.match(V) || [], function(b, c) {
                d[c] = !0
            }), d)
        } else c = j.extend({}, b);
        b = c;
        var g, e, f, m, n = [],
            l = [],
            p = -1,
            s = function() {
                m = m || b.once;
                for (f = g = !0; l.length; p = -1)
                    for (e = l.shift(); ++p < n.length;)!1 === n[p].apply(e[0], e[1]) && b.stopOnFalse && (p = n.length, e = !1);
                b.memory || (e = !1);
                g = !1;
                m && (n = e ? [] : "")
            },
            r = {
                add: function() {
                    return n && (e && !g && (p = n.length - 1, l.push(e)), function Kc(c) {
                        j.each(c, function(c, d) {
                            j.isFunction(d) ? b.unique && r.has(d) || n.push(d) : d && d.length && "string" !== j.type(d) && Kc(d)
                        })
                    }(arguments), e && !g && s()), this
                },
                remove: function() {
                    return j.each(arguments, function(b, c) {
                        for (var d; - 1 < (d = j.inArray(c, n, d));) n.splice(d, 1), d <= p && p--
                    }), this
                },
                has: function(b) {
                    return b ? -1 < j.inArray(b, n) : 0 < n.length
                },
                empty: function() {
                    return n && (n = []), this
                },
                disable: function() {
                    return m = l = [], n = e = "", this
                },
                disabled: function() {
                    return !n
                },
                lock: function() {
                    return m = l = [], e || g || (n = e = ""), this
                },
                locked: function() {
                    return !!m
                },
                fireWith: function(b, c) {
                    return m || (c = c || [], c = [b, c.slice ? c.slice() : c], l.push(c), g || s()), this
                },
                fire: function() {
                    return r.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!f
                }
            };
        return r
    };
    j.extend({
        Deferred: function(c) {
            var d = [
                    ["notify", "progress", j.Callbacks("memory"), j.Callbacks("memory"), 2],
                    ["resolve", "done", j.Callbacks("once memory"), j.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", j.Callbacks("once memory"), j.Callbacks("once memory"), 1, "rejected"]
                ],
                e = "pending",
                f = {
                    state: function() {
                        return e
                    },
                    always: function() {
                        return m.done(arguments).fail(arguments), this
                    },
                    "catch": function(b) {
                        return f.then(null, b)
                    },
                    pipe: function() {
                        var b = arguments;
                        return j.Deferred(function(c) {
                            j.each(d, function(d, g) {
                                var x = j.isFunction(b[g[4]]) && b[g[4]];
                                m[g[1]](function() {
                                    var b = x && x.apply(this, arguments);
                                    b && j.isFunction(b.promise) ? b.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[g[0] + "With"](this, x ? [b] : arguments)
                                })
                            });
                            b = null
                        }).promise()
                    },
                    then: function(c, x, e) {
                        function f(c, d, x, e) {
                            return function() {
                                var z = this,
                                    v = arguments,
                                    n = function() {
                                        var b, n;
                                        if (!(c < m)) {
                                            if (b = x.apply(z, v), b === d.promise()) throw new TypeError("Thenable self-resolution");
                                            n = b && ("object" == typeof b || "function" == typeof b) && b.then;
                                            j.isFunction(n) ? e ? n.call(b, f(m, d, r, e), f(m, d, g, e)) : (m++, n.call(b, f(m, d, r, e), f(m, d, g, e), f(m, d, r, d.notifyWith))) : (x !== r && (z = void 0, v = [b]), (e || d.resolveWith)(z, v))
                                        }
                                    },
                                    l = e ? n : function() {
                                        try {
                                            n()
                                        } catch (b) {
                                            j.Deferred.exceptionHook && j.Deferred.exceptionHook(b, l.stackTrace), c + 1 >= m && (x !== g && (z = void 0, v = [b]), d.rejectWith(z, v))
                                        }
                                    };
                                c ? l() : (j.Deferred.getStackHook && (l.stackTrace = j.Deferred.getStackHook()), b.setTimeout(l))
                            }
                        }
                        var m = 0;
                        return j.Deferred(function(b) {
                            d[0][3].add(f(0, b, j.isFunction(e) ? e : r, b.notifyWith));
                            d[1][3].add(f(0, b, j.isFunction(c) ? c : r));
                            d[2][3].add(f(0, b, j.isFunction(x) ? x : g))
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? j.extend(b, f) : f
                    }
                },
                m = {};
            return j.each(d, function(b, c) {
                var g = c[2],
                    x = c[5];
                f[c[1]] = g.add;
                x && g.add(function() {
                    e = x
                }, d[3 - b][2].disable, d[0][2].lock);
                g.add(c[3].fire);
                m[c[0]] = function() {
                    return m[c[0] + "With"](this === m ? void 0 : this, arguments), this
                };
                m[c[0] + "With"] = g.fireWith
            }), f.promise(m), c && c.call(m, m), m
        },
        when: function(b) {
            var c = arguments.length,
                d = c,
                g = Array(d),
                e = ra.call(arguments),
                f = j.Deferred(),
                n = function(b) {
                    return function(d) {
                        g[b] = this;
                        e[b] = 1 < arguments.length ? ra.call(arguments) : d;
                        --c || f.resolveWith(g, e)
                    }
                };
            if (1 >= c && (m(b, f.done(n(d)).resolve, f.reject, !c), "pending" === f.state() || j.isFunction(e[d] && e[d].then))) return f.then();
            for (; d--;) m(e[d], n(d), f.reject);
            return f.promise()
        }
    });
    var ld = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    j.Deferred.exceptionHook = function(c, d) {
        b.console && b.console.warn && c && ld.test(c.name) && b.console.warn("jQuery.Deferred exception: " + c.message, c.stack, d)
    };
    j.readyException = function(c) {
        b.setTimeout(function() {
            throw c;
        })
    };
    var wb = j.Deferred();
    j.fn.ready = function(b) {
        return wb.then(b)["catch"](function(b) {
            j.readyException(b)
        }), this
    };
    j.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(b) {
            (!0 === b ? --j.readyWait : j.isReady) || (j.isReady = !0, !0 !== b && 0 < --j.readyWait || wb.resolveWith(A, [j]))
        }
    });
    j.ready.then = wb.then;
    "complete" === A.readyState || "loading" !== A.readyState && !A.documentElement.doScroll ? b.setTimeout(j.ready) : (A.addEventListener("DOMContentLoaded", n), b.addEventListener("load", n));
    var ha = function(b, c, d, g, e, f, m) {
            var n = 0,
                l = b.length,
                p = null == d;
            if ("object" === j.type(d))
                for (n in e = !0, d) ha(b, c, n, d[n], !0, f, m);
            else if (void 0 !== g && (e = !0, j.isFunction(g) || (m = !0), p && (m ? (c.call(b, g), c = null) : (p = c, c = function(b, c, d) {
                return p.call(j(b), d)
            })), c))
                for (; n < l; n++) c(b[n], d, m ? g : g.call(b[n], n, c(b[n], d)));
            return e ? b : p ? c.call(b) : l ? c(b[0], d) : f
        },
        ab = function(b) {
            return 1 === b.nodeType || 9 === b.nodeType || !+b.nodeType
        };
    p.uid = 1;
    p.prototype = {
        cache: function(b) {
            var c = b[this.expando];
            return c || (c = {}, ab(b) && (b.nodeType ? b[this.expando] = c : Object.defineProperty(b, this.expando, {
                value: c,
                configurable: !0
            }))), c
        },
        set: function(b, c, d) {
            var g;
            b = this.cache(b);
            if ("string" == typeof c) b[j.camelCase(c)] = d;
            else
                for (g in c) b[j.camelCase(g)] = c[g];
            return b
        },
        get: function(b, c) {
            return void 0 === c ? this.cache(b) : b[this.expando] && b[this.expando][j.camelCase(c)]
        },
        access: function(b, c, d) {
            return void 0 === c || c && "string" == typeof c && void 0 === d ? this.get(b, c) : (this.set(b, c, d), void 0 !== d ? d : c)
        },
        remove: function(b, c) {
            var d, g = b[this.expando];
            if (void 0 !== g) {
                if (void 0 !== c) {
                    Array.isArray(c) ? c = c.map(j.camelCase) : (c = j.camelCase(c), c = c in g ? [c] : c.match(V) || []);
                    for (d = c.length; d--;) delete g[c[d]]
                }(void 0 === c || j.isEmptyObject(g)) && (b.nodeType ? b[this.expando] = void 0 : delete b[this.expando])
            }
        },
        hasData: function(b) {
            b = b[this.expando];
            return void 0 !== b && !j.isEmptyObject(b)
        }
    };
    var D = new p,
        Q = new p,
        Ec = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Dc = /[A-Z]/g;
    j.extend({
        hasData: function(b) {
            return Q.hasData(b) || D.hasData(b)
        },
        data: function(b, c, d) {
            return Q.access(b, c, d)
        },
        removeData: function(b, c) {
            Q.remove(b, c)
        },
        _data: function(b, c, d) {
            return D.access(b, c, d)
        },
        _removeData: function(b, c) {
            D.remove(b, c)
        }
    });
    j.fn.extend({
        data: function(b, c) {
            var d, g, e, f = this[0],
                m = f && f.attributes;
            if (void 0 === b) {
                if (this.length && (e = Q.get(f), 1 === f.nodeType && !D.get(f, "hasDataAttrs"))) {
                    for (d = m.length; d--;) m[d] && (g = m[d].name, 0 === g.indexOf("data-") && (g = j.camelCase(g.slice(5)), s(f, g, e[g])));
                    D.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof b ? this.each(function() {
                Q.set(this, b)
            }) : ha(this, function(c) {
                var d;
                if (f && void 0 === c) {
                    if ((d = Q.get(f, b), void 0 !== d) || (d = s(f, b), void 0 !== d)) return d
                } else this.each(function() {
                    Q.set(this, b, c)
                })
            }, null, c, 1 < arguments.length, null, !0)
        },
        removeData: function(b) {
            return this.each(function() {
                Q.remove(this, b)
            })
        }
    });
    j.extend({
        queue: function(b, c, d) {
            var g;
            if (b) return c = (c || "fx") + "queue", g = D.get(b, c), d && (!g || Array.isArray(d) ? g = D.access(b, c, j.makeArray(d)) : g.push(d)), g || []
        },
        dequeue: function(b, c) {
            c = c || "fx";
            var d = j.queue(b, c),
                g = d.length,
                e = d.shift(),
                f = j._queueHooks(b, c),
                m = function() {
                    j.dequeue(b, c)
                };
            "inprogress" === e && (e = d.shift(), g--);
            e && ("fx" === c && d.unshift("inprogress"), delete f.stop, e.call(b, m, f));
            !g && f && f.empty.fire()
        },
        _queueHooks: function(b, c) {
            var d = c + "queueHooks";
            return D.get(b, d) || D.access(b, d, {
                empty: j.Callbacks("once memory").add(function() {
                    D.remove(b, [c + "queue", d])
                })
            })
        }
    });
    j.fn.extend({
        queue: function(b, c) {
            var d = 2;
            return "string" != typeof b && (c = b, b = "fx", d--), arguments.length < d ? j.queue(this[0], b) : void 0 === c ? this : this.each(function() {
                var d = j.queue(this, b, c);
                j._queueHooks(this, b);
                "fx" === b && "inprogress" !== d[0] && j.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                j.dequeue(this, b)
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, c) {
            var d, g = 1,
                e = j.Deferred(),
                f = this,
                m = this.length,
                n = function() {
                    --g || e.resolveWith(f, [f])
                };
            "string" != typeof b && (c = b, b = void 0);
            for (b = b || "fx"; m--;)(d = D.get(f[m], b + "queueHooks")) && d.empty && (g++, d.empty.add(n));
            return n(), e.promise(c)
        }
    });
    var jc = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ea = RegExp("^(?:([+-])=|)(" + jc + ")([a-z%]*)$", "i"),
        na = ["Top", "Right", "Bottom", "Left"],
        Ma = function(b, c) {
            return b = c || b, "none" === b.style.display || "" === b.style.display && j.contains(b.ownerDocument, b) && "none" === j.css(b, "display")
        },
        kc = function(b, c, d, g) {
            var e, j = {};
            for (e in c) j[e] = b.style[e], b.style[e] = c[e];
            d = d.apply(b, g || []);
            for (e in c) b.style[e] = j[e];
            return d
        },
        Ab = {};
    j.fn.extend({
        show: function() {
            return t(this, !0)
        },
        hide: function() {
            return t(this)
        },
        toggle: function(b) {
            return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function() {
                Ma(this) ? j(this).show() : j(this).hide()
            })
        }
    });
    var lc = /^(?:checkbox|radio)$/i,
        Bb = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Cb = /^$|\/(?:java|ecma)script/i,
        T = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    T.optgroup = T.option;
    T.tbody = T.tfoot = T.colgroup = T.caption = T.thead;
    T.th = T.td;
    var Fc = /<|&#?\w+;/,
        bb = A.createDocumentFragment().appendChild(A.createElement("div")),
        cb = A.createElement("input");
    cb.setAttribute("type", "radio");
    cb.setAttribute("checked", "checked");
    cb.setAttribute("name", "t");
    bb.appendChild(cb);
    H.checkClone = bb.cloneNode(!0).cloneNode(!0).lastChild.checked;
    bb.innerHTML = "<textarea>x</textarea>";
    H.noCloneChecked = !!bb.cloneNode(!0).lastChild.defaultValue;
    !0;
    var db = A.documentElement,
        md = /^key/,
        nd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        mc = /^([^.]*)(?:\.(.+)|)/;
    j.event = {
        global: {},
        add: function(b, c, d, g, e) {
            var f, m, n, l, p, s, r, q, u, t;
            if (p = D.get(b)) {
                d.handler && (f = d, d = f.handler, e = f.selector);
                e && j.find.matchesSelector(db, e);
                d.guid || (d.guid = j.guid++);
                (l = p.events) || (l = p.events = {});
                (m = p.handle) || (m = p.handle = function(c) {
                    return "undefined" != typeof j && j.event.triggered !== c.type ? j.event.dispatch.apply(b, arguments) : void 0
                });
                c = (c || "").match(V) || [""];
                for (p = c.length; p--;) n = mc.exec(c[p]) || [], u = t = n[1], n = (n[2] || "").split(".").sort(), u && (r = j.event.special[u] || {}, u = (e ? r.delegateType : r.bindType) || u, r = j.event.special[u] || {}, s = j.extend({
                    type: u,
                    origType: t,
                    data: g,
                    handler: d,
                    guid: d.guid,
                    selector: e,
                    needsContext: e && j.expr.match.needsContext.test(e),
                    namespace: n.join(".")
                }, f), (q = l[u]) || (q = l[u] = [], q.delegateCount = 0, r.setup && !1 !== r.setup.call(b, g, n, m) || b.addEventListener && b.addEventListener(u, m)), r.add && (r.add.call(b, s), s.handler.guid || (s.handler.guid = d.guid)), e ? q.splice(q.delegateCount++, 0, s) : q.push(s), j.event.global[u] = !0)
            }
        },
        remove: function(b, c, d, g, e) {
            var f, m, n, l, p, s, r, q, u, t, y, C = D.hasData(b) && D.get(b);
            if (C && (l = C.events)) {
                c = (c || "").match(V) || [""];
                for (p = c.length; p--;)
                    if (n = mc.exec(c[p]) || [], u = y = n[1], t = (n[2] || "").split(".").sort(), u) {
                        r = j.event.special[u] || {};
                        u = (g ? r.delegateType : r.bindType) || u;
                        q = l[u] || [];
                        n = n[2] && RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (m = f = q.length; f--;) s = q[f], !e && y !== s.origType || d && d.guid !== s.guid || n && !n.test(s.namespace) || g && g !== s.selector && ("**" !== g || !s.selector) || (q.splice(f, 1), s.selector && q.delegateCount--, r.remove && r.remove.call(b, s));
                        m && !q.length && (r.teardown && !1 !== r.teardown.call(b, t, C.handle) || j.removeEvent(b, u, C.handle), delete l[u])
                    } else
                        for (u in l) j.event.remove(b, u + c[p], d, g, !0);
                j.isEmptyObject(l) && D.remove(b, "handle events")
            }
        },
        dispatch: function(b) {
            var c = j.event.fix(b),
                d, g, e, f, m, n, l = Array(arguments.length);
            g = (D.get(this, "events") || {})[c.type] || [];
            var p = j.event.special[c.type] || {};
            l[0] = c;
            for (d = 1; d < arguments.length; d++) l[d] = arguments[d];
            if (c.delegateTarget = this, !p.preDispatch || !1 !== p.preDispatch.call(this, c)) {
                n = j.event.handlers.call(this, c, g);
                for (d = 0;
                    (f = n[d++]) && !c.isPropagationStopped();) {
                    c.currentTarget = f.elem;
                    for (g = 0;
                        (m = f.handlers[g++]) && !c.isImmediatePropagationStopped();) c.rnamespace && !c.rnamespace.test(m.namespace) || (c.handleObj = m, c.data = m.data, e = ((j.event.special[m.origType] || {}).handle || m.handler).apply(f.elem, l), void 0 !== e && !1 === (c.result = e) && (c.preventDefault(), c.stopPropagation()))
                }
                return p.postDispatch && p.postDispatch.call(this, c), c.result
            }
        },
        handlers: function(b, c) {
            var d, g, e, f, m, n = [],
                l = c.delegateCount,
                p = b.target;
            if (l && p.nodeType && !("click" === b.type && 1 <= b.button))
                for (; p !== this; p = p.parentNode || this)
                    if (1 === p.nodeType && ("click" !== b.type || !0 !== p.disabled)) {
                        f = [];
                        m = {};
                        for (d = 0; d < l; d++) g = c[d], e = g.selector + " ", void 0 === m[e] && (m[e] = g.needsContext ? -1 < j(e, this).index(p) : j.find(e, this, null, [p]).length), m[e] && f.push(g);
                        f.length && n.push({
                            elem: p,
                            handlers: f
                        })
                    }
            return p = this, l < c.length && n.push({
                elem: p,
                handlers: c.slice(l)
            }), n
        },
        addProp: function(b, c) {
            Object.defineProperty(j.Event.prototype, b, {
                enumerable: !0,
                configurable: !0,
                get: j.isFunction(c) ? function() {
                    if (this.originalEvent) return c(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[b]
                },
                set: function(c) {
                    Object.defineProperty(this, b, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: c
                    })
                }
            })
        },
        fix: function(b) {
            return b[j.expando] ? b : new j.Event(b)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ma() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === ma() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && f(this, "input")) return this.click(), !1
                },
                _default: function(b) {
                    return f(b.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(b) {
                    void 0 !== b.result && b.originalEvent && (b.originalEvent.returnValue = b.result)
                }
            }
        }
    };
    j.removeEvent = function(b, c, d) {
        b.removeEventListener && b.removeEventListener(c, d)
    };
    j.Event = function(b, c) {
        return this instanceof j.Event ? (b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || void 0 === b.defaultPrevented && !1 === b.returnValue ? J : U, this.target = b.target && 3 === b.target.nodeType ? b.target.parentNode : b.target, this.currentTarget = b.currentTarget, this.relatedTarget = b.relatedTarget) : this.type = b, c && j.extend(this, c), this.timeStamp = b && b.timeStamp || j.now(), void(this[j.expando] = !0)) : new j.Event(b, c)
    };
    j.Event.prototype = {
        constructor: j.Event,
        isDefaultPrevented: U,
        isPropagationStopped: U,
        isImmediatePropagationStopped: U,
        isSimulated: !1,
        preventDefault: function() {
            var b = this.originalEvent;
            this.isDefaultPrevented = J;
            b && !this.isSimulated && b.preventDefault()
        },
        stopPropagation: function() {
            var b = this.originalEvent;
            this.isPropagationStopped = J;
            b && !this.isSimulated && b.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var b = this.originalEvent;
            this.isImmediatePropagationStopped = J;
            b && !this.isSimulated && b.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    j.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(b) {
            var c = b.button;
            return null == b.which && md.test(b.type) ? null != b.charCode ? b.charCode : b.keyCode : !b.which && void 0 !== c && nd.test(b.type) ? 1 & c ? 1 : 2 & c ? 3 : 4 & c ? 2 : 0 : b.which
        }
    }, j.event.addProp);
    j.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(b, c) {
        j.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var d, g = b.relatedTarget,
                    e = b.handleObj;
                return g && (g === this || j.contains(this, g)) || (b.type = e.origType, d = e.handler.apply(this, arguments), b.type = c), d
            }
        }
    });
    j.fn.extend({
        on: function(b, c, d, g) {
            return P(this, b, c, d, g)
        },
        one: function(b, c, d, g) {
            return P(this, b, c, d, g, 1)
        },
        off: function(b, c, d) {
            var g, e;
            if (b && b.preventDefault && b.handleObj) return g = b.handleObj, j(b.delegateTarget).off(g.namespace ? g.origType + "." + g.namespace : g.origType, g.selector, g.handler), this;
            if ("object" == typeof b) {
                for (e in b) this.off(e, c, b[e]);
                return this
            }
            return !1 !== c && "function" != typeof c || (d = c, c = void 0), !1 === d && (d = U), this.each(function() {
                j.event.remove(this, b, d, c)
            })
        }
    });
    var od = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        pd = /<script|<style|<link/i,
        Jc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ic = /^true\/(.*)/,
        Lc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    j.extend({
        htmlPrefilter: function(b) {
            return b.replace(od, "<$1></$2>")
        },
        clone: function(b, c, d) {
            var g, e, f, m, n = b.cloneNode(!0),
                p = j.contains(b.ownerDocument, b);
            if (!H.noCloneChecked && !(1 !== b.nodeType && 11 !== b.nodeType || j.isXMLDoc(b))) {
                m = y(n);
                f = y(b);
                g = 0;
                for (e = f.length; g < e; g++) {
                    var l = f[g],
                        s = m[g],
                        r = s.nodeName.toLowerCase();
                    "input" === r && lc.test(l.type) ? s.checked = l.checked : "input" !== r && "textarea" !== r || (s.defaultValue = l.defaultValue)
                }
            }
            if (c)
                if (d) {
                    f = f || y(b);
                    m = m || y(n);
                    g = 0;
                    for (e = f.length; g < e; g++) Eb(f[g], m[g])
                } else Eb(b, n);
            return m = y(n, "script"), 0 < m.length && G(m, !p && y(b, "script")), n
        },
        cleanData: function(b) {
            for (var c, d, g, e = j.event.special, f = 0; void 0 !== (d = b[f]); f++)
                if (ab(d)) {
                    if (c = d[D.expando]) {
                        if (c.events)
                            for (g in c.events) e[g] ? j.event.remove(d, g) : j.removeEvent(d, g, c.handle);
                        d[D.expando] = void 0
                    }
                    d[Q.expando] && (d[Q.expando] = void 0)
                }
        }
    });
    j.fn.extend({
        detach: function(b) {
            return Gb(this, b, !0)
        },
        remove: function(b) {
            return Gb(this, b)
        },
        text: function(b) {
            return ha(this, function(b) {
                return void 0 === b ? j.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = b)
                })
            }, null, b, arguments.length)
        },
        append: function() {
            return xa(this, arguments, function(b) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && Db(this, b).appendChild(b)
            })
        },
        prepend: function() {
            return xa(this, arguments, function(b) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var c = Db(this, b);
                    c.insertBefore(b, c.firstChild)
                }
            })
        },
        before: function() {
            return xa(this, arguments, function(b) {
                this.parentNode && this.parentNode.insertBefore(b, this)
            })
        },
        after: function() {
            return xa(this, arguments, function(b) {
                this.parentNode && this.parentNode.insertBefore(b, this.nextSibling)
            })
        },
        empty: function() {
            for (var b, c = 0; null != (b = this[c]); c++) 1 === b.nodeType && (j.cleanData(y(b, !1)), b.textContent = "");
            return this
        },
        clone: function(b, c) {
            return b = null != b && b, c = null == c ? b : c, this.map(function() {
                return j.clone(this, b, c)
            })
        },
        html: function(b) {
            return ha(this, function(b) {
                var c = this[0] || {},
                    d = 0,
                    g = this.length;
                if (void 0 === b && 1 === c.nodeType) return c.innerHTML;
                if ("string" == typeof b && !pd.test(b) && !T[(Bb.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = j.htmlPrefilter(b);
                    try {
                        for (; d < g; d++) c = this[d] || {}, 1 === c.nodeType && (j.cleanData(y(c, !1)), c.innerHTML = b);
                        c = 0
                    } catch (e) {}
                }
                c && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function() {
            var b = [];
            return xa(this, arguments, function(c) {
                var d = this.parentNode;
                0 > j.inArray(this, b) && (j.cleanData(y(this)), d && d.replaceChild(c, this))
            }, b)
        }
    });
    j.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        j.fn[b] = function(b) {
            for (var d = [], g = j(b), e = g.length - 1, f = 0; f <= e; f++) b = f === e ? this : this.clone(!0), j(g[f])[c](b), lb.apply(d, b.get());
            return this.pushStack(d)
        }
    });
    var Hb = /^margin/,
        gb = RegExp("^(" + jc + ")(?!px)[a-z%]+$", "i"),
        Na = function(c) {
            var d = c.ownerDocument.defaultView;
            return d && d.opener || (d = b), d.getComputedStyle(c)
        },
        fb = function() {
            if (ba) {
                ba.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                ba.innerHTML = "";
                db.appendChild(eb);
                var c = b.getComputedStyle(ba);
                nc = "1%" !== c.top;
                oc = "2px" === c.marginLeft;
                pc = "4px" === c.width;
                ba.style.marginRight = "50%";
                qc = "4px" === c.marginRight;
                db.removeChild(eb);
                ba = null
            }
        },
        nc, pc, qc, oc, eb = A.createElement("div"),
        ba = A.createElement("div");
    ba.style && (ba.style.backgroundClip = "content-box", ba.cloneNode(!0).style.backgroundClip = "", H.clearCloneStyle = "content-box" === ba.style.backgroundClip, eb.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", eb.appendChild(ba), j.extend(H, {
        pixelPosition: function() {
            return fb(), nc
        },
        boxSizingReliable: function() {
            return fb(), pc
        },
        pixelMarginRight: function() {
            return fb(), qc
        },
        reliableMarginLeft: function() {
            return fb(), oc
        }
    }));
    !0;
    var qd = /^(none|table(?!-c[ea]).+)/,
        rc = /^--/,
        rd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        sc = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Lb = ["Webkit", "Moz", "ms"],
        Kb = A.createElement("div").style;
    j.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = Fa(b, "opacity");
                        return "" === d ? "1" : d
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(b, c, d, g) {
            if (b && 3 !== b.nodeType && 8 !== b.nodeType && b.style) {
                var e, f, m, n = j.camelCase(c),
                    p = rc.test(c),
                    l = b.style;
                return p || (c = Jb(n)), m = j.cssHooks[c] || j.cssHooks[n], void 0 === d ? m && "get" in m && void 0 !== (e = m.get(b, !1, g)) ? e : l[c] : (f = typeof d, "string" === f && (e = Ea.exec(d)) && e[1] && (d = u(b, c, e), f = "number"), null != d && d === d && ("number" === f && (d += e && e[3] || (j.cssNumber[n] ? "" : "px")), H.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (l[c] = "inherit"), m && "set" in m && void 0 === (d = m.set(b, d, g)) || (p ? l.setProperty(c, d) : l[c] = d)), void 0)
            }
        },
        css: function(b, c, d, g) {
            var e, f, m, n = j.camelCase(c);
            return rc.test(c) || (c = Jb(n)), m = j.cssHooks[c] || j.cssHooks[n], m && "get" in m && (e = m.get(b, !0, d)), void 0 === e && (e = Fa(b, c, g)), "normal" === e && c in sc && (e = sc[c]), "" === d || d ? (f = parseFloat(e), !0 === d || isFinite(f) ? f || 0 : e) : e
        }
    });
    j.each(["height", "width"], function(b, c) {
        j.cssHooks[c] = {
            get: function(b, d, g) {
                if (d) return !qd.test(j.css(b, "display")) || b.getClientRects().length && b.getBoundingClientRect().width ? Ob(b, c, g) : kc(b, rd, function() {
                    return Ob(b, c, g)
                })
            },
            set: function(b, d, g) {
                var e, f = g && Na(b);
                g = g && Nb(b, c, g, "border-box" === j.css(b, "boxSizing", !1, f), f);
                return g && (e = Ea.exec(d)) && "px" !== (e[3] || "px") && (b.style[c] = d, d = j.css(b, c)), Mb(b, d, g)
            }
        }
    });
    j.cssHooks.marginLeft = Ib(H.reliableMarginLeft, function(b, c) {
        if (c) return (parseFloat(Fa(b, "marginLeft")) || b.getBoundingClientRect().left - kc(b, {
            marginLeft: 0
        }, function() {
            return b.getBoundingClientRect().left
        })) + "px"
    });
    j.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        j.cssHooks[b + c] = {
            expand: function(d) {
                var g = 0,
                    e = {};
                for (d = "string" == typeof d ? d.split(" ") : [d]; 4 > g; g++) e[b + na[g] + c] = d[g] || d[g - 2] || d[0];
                return e
            }
        };
        Hb.test(b) || (j.cssHooks[b + c].set = Mb)
    });
    j.fn.extend({
        css: function(b, c) {
            return ha(this, function(b, c, d) {
                var g, e = {},
                    f = 0;
                if (Array.isArray(c)) {
                    d = Na(b);
                    for (g = c.length; f < g; f++) e[c[f]] = j.css(b, c[f], !1, d);
                    return e
                }
                return void 0 !== d ? j.style(b, c, d) : j.css(b, c)
            }, b, c, 1 < arguments.length)
        }
    });
    j.Tween = R;
    R.prototype = {
        constructor: R,
        init: function(b, c, d, g, e, f) {
            this.elem = b;
            this.prop = d;
            this.easing = e || j.easing._default;
            this.options = c;
            this.start = this.now = this.cur();
            this.end = g;
            this.unit = f || (j.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = R.propHooks[this.prop];
            return b && b.get ? b.get(this) : R.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = R.propHooks[this.prop];
            return this.options.duration ? this.pos = c = j.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : R.propHooks._default.set(this), this
        }
    };
    R.prototype.init.prototype = R.prototype;
    R.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return 1 !== b.elem.nodeType || null != b.elem[b.prop] && null == b.elem.style[b.prop] ? b.elem[b.prop] : (c = j.css(b.elem, b.prop, ""), c && "auto" !== c ? c : 0)
            },
            set: function(b) {
                j.fx.step[b.prop] ? j.fx.step[b.prop](b) : 1 !== b.elem.nodeType || null == b.elem.style[j.cssProps[b.prop]] && !j.cssHooks[b.prop] ? b.elem[b.prop] = b.now : j.style(b.elem, b.prop, b.now + b.unit)
            }
        }
    };
    R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    j.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        },
        _default: "swing"
    };
    j.fx = R.prototype.init;
    j.fx.step = {};
    var ya, Oa, sd = /^(?:toggle|show|hide)$/,
        td = /queueHooks$/;
    j.Animation = j.extend(Z, {
        tweeners: {
            "*": [
                function(b, c) {
                    var d = this.createTween(b, c);
                    return u(d.elem, b, Ea.exec(c), d), d
                }
            ]
        },
        tweener: function(b, c) {
            j.isFunction(b) ? (c = b, b = ["*"]) : b = b.match(V);
            for (var d, g = 0, e = b.length; g < e; g++) d = b[g], Z.tweeners[d] = Z.tweeners[d] || [], Z.tweeners[d].unshift(c)
        },
        prefilters: [
            function(b, c, d) {
                var g, e, f, m, n, l, p, s, r = "width" in c || "height" in c,
                    q = this,
                    u = {},
                    y = b.style,
                    C = b.nodeType && Ma(b),
                    A = D.get(b, "fxshow");
                d.queue || (m = j._queueHooks(b, "fx"), null == m.unqueued && (m.unqueued = 0, n = m.empty.fire, m.empty.fire = function() {
                    m.unqueued || n()
                }), m.unqueued++, q.always(function() {
                    q.always(function() {
                        m.unqueued--;
                        j.queue(b, "fx").length || m.empty.fire()
                    })
                }));
                for (g in c)
                    if (e = c[g], sd.test(e)) {
                        if (delete c[g], f = f || "toggle" === e, e === (C ? "hide" : "show")) {
                            if ("show" !== e || !A || void 0 === A[g]) continue;
                            C = !0
                        }
                        u[g] = A && A[g] || j.style(b, g)
                    }
                if (l = !j.isEmptyObject(c), l || !j.isEmptyObject(u))
                    for (g in r && 1 === b.nodeType && (d.overflow = [y.overflow, y.overflowX, y.overflowY], p = A && A.display, null == p && (p = D.get(b, "display")), s = j.css(b, "display"), "none" === s && (p ? s = p : (t([b], !0), p = b.style.display || p, s = j.css(b, "display"), t([b]))), ("inline" === s || "inline-block" === s && null != p) && "none" === j.css(b, "float") && (l || (q.done(function() {
                        y.display = p
                    }), null == p && (s = y.display, p = "none" === s ? "" : s)), y.display = "inline-block")), d.overflow && (y.overflow = "hidden", q.always(function() {
                        y.overflow = d.overflow[0];
                        y.overflowX = d.overflow[1];
                        y.overflowY = d.overflow[2]
                    })), l = !1, u) l || (A ? "hidden" in A && (C = A.hidden) : A = D.access(b, "fxshow", {
                        display: p
                    }), f && (A.hidden = !C), C && t([b], !0), q.done(function() {
                        C || t([b]);
                        D.remove(b, "fxshow");
                        for (g in u) j.style(b, g, u[g])
                    })), l = Qb(C ? A[g] : 0, g, q), g in A || (A[g] = l.start, C && (l.end = l.start, l.start = 0))
            }
        ],
        prefilter: function(b, c) {
            c ? Z.prefilters.unshift(b) : Z.prefilters.push(b)
        }
    });
    j.speed = function(b, c, d) {
        var g = b && "object" == typeof b ? j.extend({}, b) : {
            complete: d || !d && c || j.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !j.isFunction(c) && c
        };
        return j.fx.off ? g.duration = 0 : "number" != typeof g.duration && (g.duration in j.fx.speeds ? g.duration = j.fx.speeds[g.duration] : g.duration = j.fx.speeds._default), null != g.queue && !0 !== g.queue || (g.queue = "fx"), g.old = g.complete, g.complete = function() {
            j.isFunction(g.old) && g.old.call(this);
            g.queue && j.dequeue(this, g.queue)
        }, g
    };
    j.fn.extend({
        fadeTo: function(b, c, d, g) {
            return this.filter(Ma).css("opacity", 0).show().end().animate({
                opacity: c
            }, b, d, g)
        },
        animate: function(b, c, d, g) {
            var e = j.isEmptyObject(b),
                f = j.speed(c, d, g);
            c = function() {
                var c = Z(this, j.extend({}, b), f);
                (e || D.get(this, "finish")) && c.stop(!0)
            };
            return c.finish = c, e || !1 === f.queue ? this.each(c) : this.queue(f.queue, c)
        },
        stop: function(b, c, d) {
            var g = function(b) {
                var c = b.stop;
                delete b.stop;
                c(d)
            };
            return "string" != typeof b && (d = c, c = b, b = void 0), c && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var c = !0,
                    e = null != b && b + "queueHooks",
                    f = j.timers,
                    m = D.get(this);
                if (e) m[e] && m[e].stop && g(m[e]);
                else
                    for (e in m) m[e] && m[e].stop && td.test(e) && g(m[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != b && f[e].queue !== b || (f[e].anim.stop(d), c = !1, f.splice(e, 1));
                !c && d || j.dequeue(this, b)
            })
        },
        finish: function(b) {
            return !1 !== b && (b = b || "fx"), this.each(function() {
                var c, d = D.get(this),
                    g = d[b + "queue"];
                c = d[b + "queueHooks"];
                var e = j.timers,
                    f = g ? g.length : 0;
                d.finish = !0;
                j.queue(this, b, []);
                c && c.stop && c.stop.call(this, !0);
                for (c = e.length; c--;) e[c].elem === this && e[c].queue === b && (e[c].anim.stop(!0), e.splice(c, 1));
                for (c = 0; c < f; c++) g[c] && g[c].finish && g[c].finish.call(this);
                delete d.finish
            })
        }
    });
    j.each(["toggle", "show", "hide"], function(b, c) {
        var d = j.fn[c];
        j.fn[c] = function(b, g, e) {
            return null == b || "boolean" == typeof b ? d.apply(this, arguments) : this.animate(Pa(c, !0), b, g, e)
        }
    });
    j.each({
        slideDown: Pa("show"),
        slideUp: Pa("hide"),
        slideToggle: Pa("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        j.fn[b] = function(b, d, g) {
            return this.animate(c, b, d, g)
        }
    });
    j.timers = [];
    j.fx.tick = function() {
        var b, c = 0,
            d = j.timers;
        for (ya = j.now(); c < d.length; c++) b = d[c], b() || d[c] !== b || d.splice(c--, 1);
        d.length || j.fx.stop();
        ya = void 0
    };
    j.fx.timer = function(b) {
        j.timers.push(b);
        j.fx.start()
    };
    j.fx.interval = 13;
    j.fx.start = function() {
        Oa || (Oa = !0, hb())
    };
    j.fx.stop = function() {
        Oa = null
    };
    j.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    j.fn.delay = function(c, d) {
        return c = j.fx ? j.fx.speeds[c] || c : c, d = d || "fx", this.queue(d, function(d, g) {
            var e = b.setTimeout(d, c);
            g.stop = function() {
                b.clearTimeout(e)
            }
        })
    };
    var Ca = A.createElement("input"),
        ud = A.createElement("select").appendChild(A.createElement("option"));
    Ca.type = "checkbox";
    H.checkOn = "" !== Ca.value;
    H.optSelected = ud.selected;
    Ca = A.createElement("input");
    Ca.value = "t";
    Ca.type = "radio";
    H.radioValue = "t" === Ca.value;
    var tc, Ja = j.expr.attrHandle;
    j.fn.extend({
        attr: function(b, c) {
            return ha(this, j.attr, b, c, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                j.removeAttr(this, b)
            })
        }
    });
    j.extend({
        attr: function(b, c, d) {
            var g, e, f = b.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof b.getAttribute ? j.prop(b, c, d) : (1 === f && j.isXMLDoc(b) || (e = j.attrHooks[c.toLowerCase()] || (j.expr.match.bool.test(c) ? tc : void 0)), void 0 !== d ? null === d ? void j.removeAttr(b, c) : e && "set" in e && void 0 !== (g = e.set(b, d, c)) ? g : (b.setAttribute(c, d + ""), d) : e && "get" in e && null !== (g = e.get(b, c)) ? g : (g = j.find.attr(b, c), null == g ? void 0 : g))
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (!H.radioValue && "radio" === c && f(b, "input")) {
                        var d = b.value;
                        return b.setAttribute("type", c), d && (b.value = d), c
                    }
                }
            }
        },
        removeAttr: function(b, c) {
            var d, g = 0,
                e = c && c.match(V);
            if (e && 1 === b.nodeType)
                for (; d = e[g++];) b.removeAttribute(d)
        }
    });
    tc = {
        set: function(b, c, d) {
            return !1 === c ? j.removeAttr(b, d) : b.setAttribute(d, d), d
        }
    };
    j.each(j.expr.match.bool.source.match(/\w+/g), function(b, c) {
        var d = Ja[c] || j.find.attr;
        Ja[c] = function(b, c, g) {
            var e, f, j = c.toLowerCase();
            return g || (f = Ja[j], Ja[j] = e, e = null != d(b, c, g) ? j : null, Ja[j] = f), e
        }
    });
    var vd = /^(?:input|select|textarea|button)$/i,
        wd = /^(?:a|area)$/i;
    j.fn.extend({
        prop: function(b, c) {
            return ha(this, j.prop, b, c, 1 < arguments.length)
        },
        removeProp: function(b) {
            return this.each(function() {
                delete this[j.propFix[b] || b]
            })
        }
    });
    j.extend({
        prop: function(b, c, d) {
            var g, e, f = b.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && j.isXMLDoc(b) || (c = j.propFix[c] || c, e = j.propHooks[c]), void 0 !== d ? e && "set" in e && void 0 !== (g = e.set(b, d, c)) ? g : b[c] = d : e && "get" in
                e && null !== (g = e.get(b, c)) ? g : b[c]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var c = j.find.attr(b, "tabindex");
                    return c ? parseInt(c, 10) : vd.test(b.nodeName) || wd.test(b.nodeName) && b.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    H.optSelected || (j.propHooks.selected = {
        get: function(b) {
            b = b.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(b) {
            b = b.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    });
    j.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        j.propFix[this.toLowerCase()] = this
    });
    j.fn.extend({
        addClass: function(b) {
            var c, d, g, e, f, m, n = 0;
            if (j.isFunction(b)) return this.each(function(c) {
                j(this).addClass(b.call(this, c, pa(this)))
            });
            if ("string" == typeof b && b)
                for (c = b.match(V) || []; d = this[n++];)
                    if (e = pa(d), g = 1 === d.nodeType && " " + oa(e) + " ") {
                        for (m = 0; f = c[m++];) 0 > g.indexOf(" " + f + " ") && (g += f + " ");
                        g = oa(g);
                        e !== g && d.setAttribute("class", g)
                    }
            return this
        },
        removeClass: function(b) {
            var c, d, g, e, f, m, n = 0;
            if (j.isFunction(b)) return this.each(function(c) {
                j(this).removeClass(b.call(this, c, pa(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof b && b)
                for (c = b.match(V) || []; d = this[n++];)
                    if (e = pa(d), g = 1 === d.nodeType && " " + oa(e) + " ") {
                        for (m = 0; f = c[m++];)
                            for (; - 1 < g.indexOf(" " + f + " ");) g = g.replace(" " + f + " ", " ");
                        g = oa(g);
                        e !== g && d.setAttribute("class", g)
                    }
            return this
        },
        toggleClass: function(b, c) {
            var d = typeof b;
            return "boolean" == typeof c && "string" === d ? c ? this.addClass(b) : this.removeClass(b) : j.isFunction(b) ? this.each(function(d) {
                j(this).toggleClass(b.call(this, d, pa(this), c), c)
            }) : this.each(function() {
                var c, g, e, f;
                if ("string" === d) {
                    g = 0;
                    e = j(this);
                    for (f = b.match(V) || []; c = f[g++];) e.hasClass(c) ? e.removeClass(c) : e.addClass(c)
                } else void 0 !== b && "boolean" !== d || (c = pa(this), c && D.set(this, "__className__", c), this.setAttribute && this.setAttribute("class", c || !1 === b ? "" : D.get(this, "__className__") || ""))
            })
        },
        hasClass: function(b) {
            var c, d = 0;
            for (b = " " + b + " "; c = this[d++];)
                if (1 === c.nodeType && -1 < (" " + oa(pa(c)) + " ").indexOf(b)) return !0;
            return !1
        }
    });
    var xd = /\r/g;
    j.fn.extend({
        val: function(b) {
            var c, d, g, e = this[0];
            if (arguments.length) return g = j.isFunction(b), this.each(function(d) {
                var e;
                1 === this.nodeType && (e = g ? b.call(this, d, j(this).val()) : b, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = j.map(e, function(b) {
                    return null == b ? "" : b + ""
                })), c = j.valHooks[this.type] || j.valHooks[this.nodeName.toLowerCase()], c && "set" in c && void 0 !== c.set(this, e, "value") || (this.value = e))
            });
            if (e) return c = j.valHooks[e.type] || j.valHooks[e.nodeName.toLowerCase()], c && "get" in c && void 0 !== (d = c.get(e, "value")) ? d : (d = e.value, "string" == typeof d ? d.replace(xd, "") : null == d ? "" : d)
        }
    });
    j.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = j.find.attr(b, "value");
                    return null != c ? c : oa(j.text(b))
                }
            },
            select: {
                get: function(b) {
                    var c, d, g = b.options,
                        e = b.selectedIndex,
                        m = "select-one" === b.type,
                        n = m ? null : [],
                        p = m ? e + 1 : g.length;
                    for (d = 0 > e ? p : m ? e : 0; d < p; d++)
                        if (c = g[d], (c.selected || d === e) && !c.disabled && (!c.parentNode.disabled || !f(c.parentNode, "optgroup"))) {
                            if (b = j(c).val(), m) return b;
                            n.push(b)
                        }
                    return n
                },
                set: function(b, c) {
                    for (var d, g, e = b.options, f = j.makeArray(c), m = e.length; m--;) g = e[m], (g.selected = -1 < j.inArray(j.valHooks.option.get(g), f)) && (d = !0);
                    return d || (b.selectedIndex = -1), f
                }
            }
        }
    });
    j.each(["radio", "checkbox"], function() {
        j.valHooks[this] = {
            set: function(b, c) {
                if (Array.isArray(c)) return b.checked = -1 < j.inArray(j(b).val(), c)
            }
        };
        H.checkOn || (j.valHooks[this].get = function(b) {
            return null === b.getAttribute("value") ? "on" : b.value
        })
    });
    var uc = /^(?:focusinfocus|focusoutblur)$/;
    j.extend(j.event, {
        trigger: function(c, d, g, e) {
            var f, m, n, p, l, s, r, q = [g || A],
                u = Ra.call(c, "type") ? c.type : c;
            f = Ra.call(c, "namespace") ? c.namespace.split(".") : [];
            if (m = n = g = g || A, 3 !== g.nodeType && 8 !== g.nodeType && !uc.test(u + j.event.triggered) && (-1 < u.indexOf(".") && (f = u.split("."), u = f.shift(), f.sort()), l = 0 > u.indexOf(":") && "on" + u, c = c[j.expando] ? c : new j.Event(u, "object" == typeof c && c), c.isTrigger = e ? 2 : 3, c.namespace = f.join("."), c.rnamespace = c.namespace ? RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = void 0, c.target || (c.target = g), d = null == d ? [c] : j.makeArray(d, [c]), r = j.event.special[u] || {}, e || !r.trigger || !1 !== r.trigger.apply(g, d))) {
                if (!e && !r.noBubble && !j.isWindow(g)) {
                    p = r.delegateType || u;
                    for (uc.test(p + u) || (m = m.parentNode); m; m = m.parentNode) q.push(m), n = m;
                    n === (g.ownerDocument || A) && q.push(n.defaultView || n.parentWindow || b)
                }
                for (f = 0;
                    (m = q[f++]) && !c.isPropagationStopped();) c.type = 1 < f ? p : r.bindType || u, (s = (D.get(m, "events") || {})[c.type] && D.get(m, "handle")) && s.apply(m, d), (s = l && m[l]) && s.apply && ab(m) && (c.result = s.apply(m, d), !1 === c.result && c.preventDefault());
                return c.type = u, e || c.isDefaultPrevented() || r._default && !1 !== r._default.apply(q.pop(), d) || !ab(g) || l && j.isFunction(g[u]) && !j.isWindow(g) && (n = g[l], n && (g[l] = null), j.event.triggered = u, g[u](), j.event.triggered = void 0, n && (g[l] = n)), c.result
            }
        },
        simulate: function(b, c, d) {
            b = j.extend(new j.Event, d, {
                type: b,
                isSimulated: !0
            });
            j.event.trigger(b, null, c)
        }
    });
    j.fn.extend({
        trigger: function(b, c) {
            return this.each(function() {
                j.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            var d = this[0];
            if (d) return j.event.trigger(b, c, d, !0)
        }
    });
    j.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(b, c) {
        j.fn[c] = function(b, d) {
            return 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
        }
    });
    j.fn.extend({
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    H.focusin = "onfocusin" in b;
    H.focusin || j.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        var d = function(b) {
            j.event.simulate(c, b.target, j.event.fix(b))
        };
        j.event.special[c] = {
            setup: function() {
                var g = this.ownerDocument || this,
                    e = D.access(g, c);
                e || g.addEventListener(b, d, !0);
                D.access(g, c, (e || 0) + 1)
            },
            teardown: function() {
                var g = this.ownerDocument || this,
                    e = D.access(g, c) - 1;
                e ? D.access(g, c, e) : (g.removeEventListener(b, d, !0), D.remove(g, c))
            }
        }
    });
    var Ka = b.location,
        vc = j.now(),
        xb = /\?/;
    j.parseXML = function(c) {
        var d;
        if (!c || "string" != typeof c) return null;
        try {
            d = (new b.DOMParser).parseFromString(c, "text/xml")
        } catch (g) {
            d = void 0
        }
        return d && !d.getElementsByTagName("parsererror").length || j.error("Invalid XML: " + c), d
    };
    var Mc = /\[\]$/,
        wc = /\r?\n/g,
        yd = /^(?:submit|button|image|reset|file)$/i,
        zd = /^(?:input|select|textarea|keygen)/i;
    j.param = function(b, c) {
        var d, g = [],
            e = function(b, c) {
                var d = j.isFunction(c) ? c() : c;
                g[g.length] = encodeURIComponent(b) + "=" + encodeURIComponent(null == d ? "" : d)
            };
        if (Array.isArray(b) || b.jquery && !j.isPlainObject(b)) j.each(b, function() {
            e(this.name, this.value)
        });
        else
            for (d in b) ib(d, b[d], c, e);
        return g.join("&")
    };
    j.fn.extend({
        serialize: function() {
            return j.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var b = j.prop(this, "elements");
                return b ? j.makeArray(b) : this
            }).filter(function() {
                var b = this.type;
                return this.name && !j(this).is(":disabled") && zd.test(this.nodeName) && !yd.test(b) && (this.checked || !lc.test(b))
            }).map(function(b, c) {
                var d = j(this).val();
                return null == d ? null : Array.isArray(d) ? j.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(wc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(wc, "\r\n")
                }
            }).get()
        }
    });
    var Ad = /%20/g,
        Bd = /#.*$/,
        Cd = /([?&])_=[^&]*/,
        Dd = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ed = /^(?:GET|HEAD)$/,
        Fd = /^\/\//,
        xc = {},
        jb = {},
        yc = "*/".concat("*"),
        yb = A.createElement("a");
    yb.href = Ka.href;
    j.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ka.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ka.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": yc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": j.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(b, c) {
            return c ? kb(kb(b, j.ajaxSettings), c) : kb(j.ajaxSettings, b)
        },
        ajaxPrefilter: Rb(xc),
        ajaxTransport: Rb(jb),
        ajax: function(c, d) {
            function g(c, d, n, p) {
                var u, q, x, v, z = d;
                if (!s) {
                    s = !0;
                    l && b.clearTimeout(l);
                    e = void 0;
                    m = p || "";
                    L.readyState = 0 < c ? 4 : 0;
                    p = 200 <= c && 300 > c || 304 === c;
                    if (n) {
                        x = t;
                        for (var wa = L, A, G, F, E, N = x.contents, H = x.dataTypes;
                            "*" === H[0];) H.shift(), void 0 === A && (A = x.mimeType || wa.getResponseHeader("Content-Type"));
                        if (A)
                            for (G in N)
                                if (N[G] && N[G].test(A)) {
                                    H.unshift(G);
                                    break
                                }
                        if (H[0] in n) F = H[0];
                        else {
                            for (G in n) {
                                if (!H[0] || x.converters[G + " " + H[0]]) {
                                    F = G;
                                    break
                                }
                                E || (E = G)
                            }
                            F = F || E
                        }
                        n = F ? (F !== H[0] && H.unshift(F), n[F]) : void 0;
                        x = n
                    }
                    var M;
                    a: {
                        n = t;
                        A = x;
                        G = L;
                        F = p;
                        var S, P, O;
                        x = {};
                        wa = n.dataTypes.slice();
                        if (wa[1])
                            for (S in n.converters) x[S.toLowerCase()] = n.converters[S];
                        for (E = wa.shift(); E;)
                            if (n.responseFields[E] && (G[n.responseFields[E]] = A), !O && F && n.dataFilter && (A = n.dataFilter(A, n.dataType)), O = E, E = wa.shift())
                                if ("*" === E) E = O;
                                else if ("*" !== O && O !== E) {
                            if (S = x[O + " " + E] || x["* " + E], !S)
                                for (M in x)
                                    if (P = M.split(" "), P[1] === E && (S = x[O + " " + P[0]] || x["* " + P[0]])) {
                                        !0 === S ? S = x[M] : !0 !== x[M] && (E = P[0], wa.unshift(P[1]));
                                        break
                                    }
                            if (!0 !== S)
                                if (S && n["throws"]) A = S(A);
                                else try {
                                    A = S(A)
                                } catch (Q) {
                                    M = {
                                        state: "parsererror",
                                        error: S ? Q : "No conversion from " + O + " to " + E
                                    };
                                    break a
                                }
                        }
                        M = {
                            state: "success",
                            data: A
                        }
                    }
                    x = M;
                    p ? (t.ifModified && (v = L.getResponseHeader("Last-Modified"), v && (j.lastModified[f] = v), v = L.getResponseHeader("etag"), v && (j.etag[f] = v)), 204 === c || "HEAD" === t.type ? z = "nocontent" : 304 === c ? z = "notmodified" : (z = x.state, u = x.data, q = x.error, p = !q)) : (q = z, !c && z || (z = "error", 0 > c && (c = 0)));
                    L.status = c;
                    L.statusText = (d || z) + "";
                    p ? D.resolveWith(y, [u, z, L]) : D.rejectWith(y, [L, z, q]);
                    L.statusCode(J);
                    J = void 0;
                    r && C.trigger(p ? "ajaxSuccess" : "ajaxError", [L, t, p ? u : q]);
                    I.fireWith(y, [L, z]);
                    r && (C.trigger("ajaxComplete", [L, t]), --j.active || j.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof c && (d = c, c = void 0);
            d = d || {};
            var e, f, m, n, l, p, s, r, u, q, t = j.ajaxSetup({}, d),
                y = t.context || t,
                C = t.context && (y.nodeType || y.jquery) ? j(y) : j.event,
                D = j.Deferred(),
                I = j.Callbacks("once memory"),
                J = t.statusCode || {},
                G = {},
                F = {},
                E = "canceled",
                L = {
                    readyState: 0,
                    getResponseHeader: function(b) {
                        var c;
                        if (s) {
                            if (!n)
                                for (n = {}; c = Dd.exec(m);) n[c[1].toLowerCase()] = c[2];
                            c = n[b.toLowerCase()]
                        }
                        return null == c ? null : c
                    },
                    getAllResponseHeaders: function() {
                        return s ? m : null
                    },
                    setRequestHeader: function(b, c) {
                        return null == s && (b = F[b.toLowerCase()] = F[b.toLowerCase()] || b, G[b] = c), this
                    },
                    overrideMimeType: function(b) {
                        return null == s && (t.mimeType = b), this
                    },
                    statusCode: function(b) {
                        var c;
                        if (b)
                            if (s) L.always(b[L.status]);
                            else
                                for (c in b) J[c] = [J[c], b[c]];
                        return this
                    },
                    abort: function(b) {
                        b = b || E;
                        return e && e.abort(b), g(0, b), this
                    }
                };
            if (D.promise(L), t.url = ((c || t.url || Ka.href) + "").replace(Fd, Ka.protocol + "//"), t.type = d.method || d.type || t.method || t.type, t.dataTypes = (t.dataType || "*").toLowerCase().match(V) || [""], null == t.crossDomain) {
                p = A.createElement("a");
                try {
                    p.href = t.url, p.href = p.href, t.crossDomain = yb.protocol + "//" + yb.host != p.protocol + "//" + p.host
                } catch (H) {
                    t.crossDomain = !0
                }
            }
            if (t.data && t.processData && "string" != typeof t.data && (t.data = j.param(t.data, t.traditional)), Sb(xc, t, d, L), s) return L;
            (r = j.event && t.global) && 0 === j.active++ && j.event.trigger("ajaxStart");
            t.type = t.type.toUpperCase();
            t.hasContent = !Ed.test(t.type);
            f = t.url.replace(Bd, "");
            t.hasContent ? t.data && t.processData && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && (t.data = t.data.replace(Ad, "+")) : (q = t.url.slice(f.length), t.data && (f += (xb.test(f) ? "&" : "?") + t.data, delete t.data), !1 === t.cache && (f = f.replace(Cd, "$1"), q = (xb.test(f) ? "&" : "?") + "_=" + vc+++q), t.url = f + q);
            t.ifModified && (j.lastModified[f] && L.setRequestHeader("If-Modified-Since", j.lastModified[f]), j.etag[f] && L.setRequestHeader("If-None-Match", j.etag[f]));
            (t.data && t.hasContent && !1 !== t.contentType || d.contentType) && L.setRequestHeader("Content-Type", t.contentType);
            L.setRequestHeader("Accept", t.dataTypes[0] && t.accepts[t.dataTypes[0]] ? t.accepts[t.dataTypes[0]] + ("*" !== t.dataTypes[0] ? ", " + yc + "; q=0.01" : "") : t.accepts["*"]);
            for (u in t.headers) L.setRequestHeader(u, t.headers[u]);
            if (t.beforeSend && (!1 === t.beforeSend.call(y, L, t) || s)) return L.abort();
            if (E = "abort", I.add(t.complete), L.done(t.success), L.fail(t.error), e = Sb(jb, t, d, L)) {
                if (L.readyState = 1, r && C.trigger("ajaxSend", [L, t]), s) return L;
                t.async && 0 < t.timeout && (l = b.setTimeout(function() {
                    L.abort("timeout")
                }, t.timeout));
                try {
                    s = !1, e.send(G, g)
                } catch (N) {
                    if (s) throw N;
                    g(-1, N)
                }
            } else g(-1, "No Transport");
            return L
        },
        getJSON: function(b, c, d) {
            return j.get(b, c, d, "json")
        },
        getScript: function(b, c) {
            return j.get(b, void 0, c, "script")
        }
    });
    j.each(["get", "post"], function(b, c) {
        j[c] = function(b, d, g, e) {
            return j.isFunction(d) && (e = e || g, g = d, d = void 0), j.ajax(j.extend({
                url: b,
                type: c,
                dataType: e,
                data: d,
                success: g
            }, j.isPlainObject(b) && b))
        }
    });
    j._evalUrl = function(b) {
        return j.ajax({
            url: b,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    j.fn.extend({
        wrapAll: function(b) {
            var c;
            return this[0] && (j.isFunction(b) && (b = b.call(this[0])), c = j(b, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function() {
                for (var b = this; b.firstElementChild;) b = b.firstElementChild;
                return b
            }).append(this)), this
        },
        wrapInner: function(b) {
            return j.isFunction(b) ? this.each(function(c) {
                j(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = j(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = j.isFunction(b);
            return this.each(function(d) {
                j(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function(b) {
            return this.parent(b).not("body").each(function() {
                j(this).replaceWith(this.childNodes)
            }), this
        }
    });
    j.expr.pseudos.hidden = function(b) {
        return !j.expr.pseudos.visible(b)
    };
    j.expr.pseudos.visible = function(b) {
        return !(!b.offsetWidth && !b.offsetHeight && !b.getClientRects().length)
    };
    j.ajaxSettings.xhr = function() {
        try {
            return new b.XMLHttpRequest
        } catch (c) {}
    };
    var Gd = {
            "0": 200,
            1223: 204
        },
        La = j.ajaxSettings.xhr();
    H.cors = !!La && "withCredentials" in La;
    H.ajax = La = !!La;
    j.ajaxTransport(function(c) {
        var d, g;
        if (H.cors || La && !c.crossDomain) return {
            send: function(e, f) {
                var j, m = c.xhr();
                if (m.open(c.type, c.url, c.async, c.username, c.password), c.xhrFields)
                    for (j in c.xhrFields) m[j] = c.xhrFields[j];
                c.mimeType && m.overrideMimeType && m.overrideMimeType(c.mimeType);
                c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (j in e) m.setRequestHeader(j, e[j]);
                d = function(b) {
                    return function() {
                        d && (d = g = m.onload = m.onerror = m.onabort = m.onreadystatechange = null, "abort" === b ? m.abort() : "error" === b ? "number" != typeof m.status ? f(0, "error") : f(m.status, m.statusText) : f(Gd[m.status] || m.status, m.statusText, "text" !== (m.responseType || "text") || "string" != typeof m.responseText ? {
                            binary: m.response
                        } : {
                            text: m.responseText
                        }, m.getAllResponseHeaders()))
                    }
                };
                m.onload = d();
                g = m.onerror = d("error");
                void 0 !== m.onabort ? m.onabort = g : m.onreadystatechange = function() {
                    4 === m.readyState && b.setTimeout(function() {
                        d && g()
                    })
                };
                d = d("abort");
                try {
                    m.send(c.hasContent && c.data || null)
                } catch (n) {
                    if (d) throw n;
                }
            },
            abort: function() {
                d && d()
            }
        }
    });
    j.ajaxPrefilter(function(b) {
        b.crossDomain && (b.contents.script = !1)
    });
    j.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(b) {
                return j.globalEval(b), b
            }
        }
    });
    j.ajaxPrefilter("script", function(b) {
        void 0 === b.cache && (b.cache = !1);
        b.crossDomain && (b.type = "GET")
    });
    j.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var c, d;
            return {
                send: function(g, e) {
                    c = j("<script>").prop({
                        charset: b.scriptCharset,
                        src: b.url
                    }).on("load error", d = function(b) {
                        c.remove();
                        d = null;
                        b && e("error" === b.type ? 404 : 200, b.type)
                    });
                    A.head.appendChild(c[0])
                },
                abort: function() {
                    d && d()
                }
            }
        }
    });
    var zc = [],
        zb = /(=)\?(?=&|$)|\?\?/;
    j.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = zc.pop() || j.expando + "_" + vc++;
            return this[b] = !0, b
        }
    });
    j.ajaxPrefilter("json jsonp", function(c, d, g) {
        var e, f, m, n = !1 !== c.jsonp && (zb.test(c.url) ? "url" : "string" == typeof c.data && 0 === (c.contentType || "").indexOf("application/x-www-form-urlencoded") && zb.test(c.data) && "data");
        if (n || "jsonp" === c.dataTypes[0]) return e = c.jsonpCallback = j.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, n ? c[n] = c[n].replace(zb, "$1" + e) : !1 !== c.jsonp && (c.url += (xb.test(c.url) ? "&" : "?") + c.jsonp +
            "=" + e), c.converters["script json"] = function() {
            return m || j.error(e + " was not called"), m[0]
        }, c.dataTypes[0] = "json", f = b[e], b[e] = function() {
            m = arguments
        }, g.always(function() {
            void 0 === f ? j(b).removeProp(e) : b[e] = f;
            c[e] && (c.jsonpCallback = d.jsonpCallback, zc.push(e));
            m && j.isFunction(f) && f(m[0]);
            m = f = void 0
        }), "script"
    });
    var Hd = H,
        Ac, Bc = A.implementation.createHTMLDocument("").body;
    Ac = (Bc.innerHTML = "<form></form><form></form>", 2 === Bc.childNodes.length);
    Hd.createHTMLDocument = Ac;
    j.parseHTML = function(b, c, d) {
        if ("string" != typeof b) return [];
        "boolean" == typeof c && (d = c, c = !1);
        var g, e, f;
        return c || (H.createHTMLDocument ? (c = A.implementation.createHTMLDocument(""), g = c.createElement("base"), g.href = A.location.href, c.head.appendChild(g)) : c = A), e = hc.exec(b), f = !d && [], e ? [c.createElement(e[1])] : (e = F([b], c, f), f && f.length && j(f).remove(), j.merge([], e.childNodes))
    };
    j.fn.load = function(b, c, d) {
        var g, e, f, m = this,
            n = b.indexOf(" ");
        return -1 < n && (g = oa(b.slice(n)), b = b.slice(0, n)), j.isFunction(c) ? (d = c, c = void 0) : c && "object" == typeof c && (e = "POST"), 0 < m.length && j.ajax({
            url: b,
            type: e || "GET",
            dataType: "html",
            data: c
        }).done(function(b) {
            f = arguments;
            m.html(g ? j("<div>").append(j.parseHTML(b)).find(g) : b)
        }).always(d && function(b, c) {
            m.each(function() {
                d.apply(this, f || [b.responseText, c, b])
            })
        }), this
    };
    j.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        j.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    j.expr.pseudos.animated = function(b) {
        return j.grep(j.timers, function(c) {
            return b === c.elem
        }).length
    };
    j.offset = {
        setOffset: function(b, c, d) {
            var g, e, f, m, n, p, l = j.css(b, "position"),
                s = j(b),
                r = {};
            "static" === l && (b.style.position = "relative");
            n = s.offset();
            f = j.css(b, "top");
            p = j.css(b, "left");
            ("absolute" === l || "fixed" === l) && -1 < (f + p).indexOf("auto") ? (g = s.position(), m = g.top, e = g.left) : (m = parseFloat(f) || 0, e = parseFloat(p) || 0);
            j.isFunction(c) && (c = c.call(b, d, j.extend({}, n)));
            null != c.top && (r.top = c.top - n.top + m);
            null != c.left && (r.left = c.left - n.left + e);
            "using" in c ? c.using.call(b, r) : s.css(r)
        }
    };
    j.fn.extend({
        offset: function(b) {
            if (arguments.length) return void 0 === b ? this : this.each(function(c) {
                j.offset.setOffset(this, b, c)
            });
            var c, d, g, e, f = this[0];
            if (f) return f.getClientRects().length ? (g = f.getBoundingClientRect(), c = f.ownerDocument, d = c.documentElement, e = c.defaultView, {
                top: g.top + e.pageYOffset - d.clientTop,
                left: g.left + e.pageXOffset - d.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var b, c, d = this[0],
                    g = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === j.css(d, "position") ? c = d.getBoundingClientRect() : (b = this.offsetParent(), c = this.offset(), f(b[0], "html") || (g = b.offset()), g = {
                    top: g.top +
                        j.css(b[0], "borderTopWidth", !0),
                    left: g.left + j.css(b[0], "borderLeftWidth", !0)
                }), {
                    top: c.top - g.top - j.css(d, "marginTop", !0),
                    left: c.left - g.left - j.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent; b && "static" === j.css(b, "position");) b = b.offsetParent;
                return b || db
            })
        }
    });
    j.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        j.fn[b] = function(g) {
            return ha(this, function(b, g, e) {
                var f;
                return j.isWindow(b) ? f = b : 9 === b.nodeType && (f = b.defaultView), void 0 === e ? f ? f[c] : b[g] : void(f ? f.scrollTo(d ? f.pageXOffset : e, d ? e : f.pageYOffset) : b[g] = e)
            }, b, g, arguments.length)
        }
    });
    j.each(["top", "left"], function(b, c) {
        j.cssHooks[c] = Ib(H.pixelPosition, function(b, d) {
            if (d) return d = Fa(b, c), gb.test(d) ? j(b).position()[c] + "px" : d
        })
    });
    j.each({
        Height: "height",
        Width: "width"
    }, function(b, c) {
        j.each({
            padding: "inner" + b,
            content: c,
            "": "outer" + b
        }, function(d, g) {
            j.fn[g] = function(e, f) {
                var m = arguments.length && (d || "boolean" != typeof e),
                    n = d || (!0 === e || !0 === f ? "margin" : "border");
                return ha(this, function(c, d, e) {
                    var f;
                    return j.isWindow(c) ? 0 === g.indexOf("outer") ? c["inner" + b] : c.document.documentElement["client" + b] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + b], f["scroll" + b], c.body["offset" + b], f["offset" + b], f["client" + b])) : void 0 === e ? j.css(c, d, n) : j.style(c, d, e, n)
                }, c, m ? e : void 0, m)
            }
        })
    });
    j.fn.extend({
        bind: function(b, c, d) {
            return this.on(b, null, c, d)
        },
        unbind: function(b, c) {
            return this.off(b, null, c)
        },
        delegate: function(b, c, d, g) {
            return this.on(c, b, d, g)
        },
        undelegate: function(b, c, d) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
        }
    });
    j.holdReady = function(b) {
        b ? j.readyWait++ : j.ready(!0)
    };
    j.isArray = Array.isArray;
    j.parseJSON = JSON.parse;
    j.nodeName = f;
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return j
    });
    var Id = b.jQuery,
        Jd = b.$;
    return j.noConflict = function(c) {
        return b.$ === j && (b.$ = Jd), c && b.jQuery === j && (b.jQuery = Id), j
    }, c || (b.jQuery = b.$ = j), j
});
var portraitMode = !0,
    mobilePortraitWidth = 480,
    mobilePortraitHeight = 640,
    mobileLandscapeWidth = 640,
    mobileLandscapeHeight = 480,
    mobileWidth = portraitMode ? mobilePortraitWidth : mobileLandscapeWidth,
    mobileHeight = portraitMode ? mobilePortraitHeight : mobileLandscapeHeight,
    desktopWidth = portraitMode ? 480 : 640,
    desktopHeight = portraitMode ? 640 : 480,
    w, h, multiplier, destW, destH, dynamicClickableEntityDivs = {},
    coreDivsToResize = ["game", "play", "orientate"],
    advancedDivsToResize = {
    };

function adjustLayers(b) {
    for (i = 0; i < coreDivsToResize.length; i++) ig.ua.mobile ? ($("#" + coreDivsToResize[i]).width(w), $("#" + coreDivsToResize[i]).height(h)) : ($("#" + coreDivsToResize[i]).width(destW), $("#" + coreDivsToResize[i]).height(destH), $("#" + coreDivsToResize[i]).css("left", b ? 0 : w / 2 - destW / 2));
    for (key in advancedDivsToResize) try {
        $("#" + key).width(w), $("#" + key).height(h), $("#" + key + "-Box").css("left", (w - advancedDivsToResize[key]["box-width"]) / 2), $("#" + key + "-Box").css("top", (h - advancedDivsToResize[key]["box-height"]) / 2)
    } catch (c) {
        console.log(c)
    }
    $("#ajaxbar").width(w);
    $("#ajaxbar").height(h)
}

function sizeHandler() {
    $("#game") && (w = window.innerWidth, h = window.innerHeight, ig.ua.mobile ? (multiplier = Math.min(h / mobileHeight, w / mobileWidth), destW = mobileWidth * multiplier, destH = mobileHeight * multiplier) : (multiplier = Math.min(h / desktopHeight, w / desktopWidth), destW = desktopWidth * multiplier, destH = desktopHeight * multiplier), widthRatio = window.innerWidth / mobileWidth, heightRatio = window.innerHeight / mobileHeight, adjustLayers(), window.scrollTo(0, 1))
}

function orientationHandler() {
    console.log("changing orientation ...");
    ig.ua.mobile && ((portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth) ? ($("#orientate").show(), $("#game").hide()) : ($("#orientate").hide(), $("#game").show()));
    sizeHandler()
}
orientationTimeout = orientationInterval = null;

function orientationDelayHandler() {
    ig.ua.iOS ? (null == orientationInterval && (orientationInterval = window.setInterval(orientationHandler, 100)), null == orientationTimeout && (orientationTimeout = window.setTimeout(function() {
        clearAllIntervals()
    }, 2E3))) : orientationHandler()
}

function clearAllIntervals() {
    window.clearInterval(orientationInterval);
    orientationInterval = null;
    window.clearTimeout(orientationTimeout);
    orientationTimeout = null
}
window.addEventListener("orientationchange", orientationDelayHandler);
window.addEventListener("resize", orientationDelayHandler);

function fixSamsungHandler() {
    ig.ua.android && (!(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && !(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchmove", function(b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchend", function(b) {
        b.preventDefault();
        return !1
    }, !1))
}
document.ontouchmove = function(b) {
    window.scrollTo(0, 1);
    b.preventDefault()
};

function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}
var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var e = c[d].split("=");
        if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
    }
};
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var e in b) this.settings[e] = b[e];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var b = this,
            c = this.settings,
            d = {},
            e;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var f = function(c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", f, !0);
                window.setTimeout(function() {
                    b.context.removeEventListener("canplaythrough", f, !0);
                    f("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (e in this.HTML5API) this[e] = this.HTML5API[e];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c, d = this.settings.flashMediaElement,
            e, f = {
                flashvars: b.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var l = document.createElement("object");
            l.id = "jukebox-flashstream-" + this.id;
            l.setAttribute("type", "application/x-shockwave-flash");
            l.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            l.setAttribute("width", "0");
            l.setAttribute("height", "0");
            f.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            f.flashvars = b.join("&amp;");
            for (e in f) b = document.createElement("param"), b.setAttribute("name", e), b.setAttribute("value", f[e]), l.appendChild(b);
            c.outerHTML = l.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c = document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            f.play = !1;
            f.loop = !1;
            f.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (e in f) c.setAttribute(e, f[e]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started = b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
                e;
            if (void 0 !== d[b]) e = d[b].start;
            else if ("number" === typeof b) {
                e = b;
                for (var f in d)
                    if (e >= d[f].start && e <= d[f].end) {
                        b = f;
                        break
                    }
            }
            void 0 !== e && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(e))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(b) {
        b = "number" === typeof b ? b : this.__lastPosition;
        if (null !== b) return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ? this.context.getVolume() : 1
        },
        setVolume: function(b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                e: "3gp",
                m: ["audio/3gpp", "audio/amr"]
            }, {
                e: "aac",
                m: ["audio/aac", "audio/aacp"]
            }, {
                e: "amr",
                m: ["audio/amr", "audio/3gpp"]
            }, {
                e: "caf",
                m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
            }, {
                e: "m4a",
                m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
            }, {
                e: "mp3",
                m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
            }, {
                e: "mpga",
                m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
            }, {
                e: "mp4",
                m: ["audio/mp4", "video/mp4"]
            }, {
                e: "ogg",
                m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
            }, {
                e: "wav",
                m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
            }, {
                e: "webm",
                m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
            }], d, e, f = 0, l = c.length; f < l; f++)
                if (e = c[f].e, c[f].m.length && "object" === typeof c[f].m)
                    for (var q = 0, r = c[f].m.length; q < r; q++)
                        if (d = c[f].m[q], "" !== b.canPlayType(d)) {
                            this.codecs[e] = d;
                            break
                        } else this.codecs[e] || (this.codecs[e] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (g) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr", this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var e = this.__clones[d];
            if (null === e.isPlaying && e.origin === b) return e
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var f in c) d[f] = c[f];
            d.autoplay = !1;
            f = new jukebox.Player(d, b);
            f.isClone = !0;
            f.wasReady = !1;
            return this.__clones[f.id] = f
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length && this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d], c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var e = b[c],
                f = e.match(/\.([^\.]*)$/)[1];
            if (f && this.codecs[f]) return e
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
(function() {
    var b = function() {
        this.init()
    };
    b.prototype = {
        init: function() {
            var b = this || c;
            b._codecs = {};
            b._howls = [];
            b._muted = !1;
            b._volume = 1;
            b._canPlayEvent = "canplaythrough";
            b._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null;
            b.masterGain = null;
            b.noAudio = !1;
            b.usingWebAudio = !0;
            b.autoSuspend = !0;
            b.ctx = null;
            b.mobileAutoEnable = !0;
            b._setup();
            return b
        },
        volume: function(b) {
            var d = this || c;
            b = parseFloat(b);
            d.ctx || r();
            if ("undefined" !== typeof b && 0 <= b && 1 >= b) {
                d._volume = b;
                if (d._muted) return d;
                d.usingWebAudio && (d.masterGain.gain.value = b);
                for (var e = 0; e < d._howls.length; e++)
                    if (!d._howls[e]._webAudio)
                        for (var f = d._howls[e]._getSoundIds(), l = 0; l < f.length; l++) {
                            var u = d._howls[e]._soundById(f[l]);
                            u && u._node && (u._node.volume = u._volume * b)
                        }
                    return d
            }
            return d._volume
        },
        mute: function(b) {
            var d = this || c;
            d.ctx || r();
            d._muted = b;
            d.usingWebAudio && (d.masterGain.gain.value = b ? 0 : d._volume);
            for (var e = 0; e < d._howls.length; e++)
                if (!d._howls[e]._webAudio)
                    for (var f = d._howls[e]._getSoundIds(), l = 0; l < f.length; l++) {
                        var u = d._howls[e]._soundById(f[l]);
                        u && u._node && (u._node.muted = b ? !0 : u._muted)
                    }
                return d
        },
        unload: function() {
            for (var b = this || c, d = b._howls.length - 1; 0 <= d; d--) b._howls[d].unload();
            b.usingWebAudio && (b.ctx && "undefined" !== typeof b.ctx.close) && (b.ctx.close(), b.ctx = null, r());
            return b
        },
        codecs: function(b) {
            return (this || c)._codecs[b.replace(/^x-/, "")]
        },
        _setup: function() {
            var b = this || c;
            b.state = b.ctx ? b.ctx.state || "running" : "running";
            b._autoSuspend();
            if (!b.usingWebAudio)
                if ("undefined" !== typeof Audio) try {
                    var d = new Audio;
                    "undefined" === typeof d.oncanplaythrough && (b._canPlayEvent = "canplay")
                } catch (e) {
                    b.noAudio = !0
                } else b.noAudio = !0;
            try {
                d = new Audio, d.muted && (b.noAudio = !0)
            } catch (f) {}
            b.noAudio || b._setupCodecs();
            return b
        },
        _setupCodecs: function() {
            var b = this || c,
                d = null;
            try {
                d = "undefined" !== typeof Audio ? new Audio : null
            } catch (e) {
                return b
            }
            if (!d || "function" !== typeof d.canPlayType) return b;
            var f = d.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                l = b._navigator && b._navigator.userAgent.match(/OPR\/([0-6].)/g),
                l = l && 33 > parseInt(l[0].split("/")[1], 10);
            b._codecs = {
                mp3: !(l || !f && !d.canPlayType("audio/mp3;").replace(/^no$/, "")),
                mpeg: !!f,
                opus: !!d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!d.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!d.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!d.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(d.canPlayType("audio/x-m4a;") || d.canPlayType("audio/m4a;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(d.canPlayType("audio/x-mp4;") || d.canPlayType("audio/mp4;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                dolby: !!d.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(d.canPlayType("audio/x-flac;") || d.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return b
        },
        _enableMobileAudio: function() {
            var b = this || c,
                d = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(b._navigator && b._navigator.userAgent),
                e = !!("ontouchend" in window || b._navigator && 0 < b._navigator.maxTouchPoints || b._navigator && 0 < b._navigator.msMaxTouchPoints);
            if (!b._mobileEnabled && b.ctx && (d || e)) {
                b._mobileEnabled = !1;
                !b._mobileUnloaded && 44100 !== b.ctx.sampleRate && (b._mobileUnloaded = !0, b.unload());
                b._scratchBuffer = b.ctx.createBuffer(1, 1, 22050);
                var f = function() {
                    var c = b.ctx.createBufferSource();
                    c.buffer = b._scratchBuffer;
                    c.connect(b.ctx.destination);
                    "undefined" === typeof c.start ? c.noteOn(0) : c.start(0);
                    c.onended = function() {
                        c.disconnect(0);
                        b._mobileEnabled = !0;
                        b.mobileAutoEnable = !1;
                        document.removeEventListener("touchend", f, !0)
                    }
                };
                document.addEventListener("touchend", f, !0);
                return b
            }
        },
        _autoSuspend: function() {
            var b = this;
            if (b.autoSuspend && b.ctx && "undefined" !== typeof b.ctx.suspend && c.usingWebAudio) {
                for (var d = 0; d < b._howls.length; d++)
                    if (b._howls[d]._webAudio)
                        for (var e = 0; e < b._howls[d]._sounds.length; e++)
                            if (!b._howls[d]._sounds[e]._paused) return b;
                b._suspendTimer && clearTimeout(b._suspendTimer);
                b._suspendTimer = setTimeout(function() {
                    b.autoSuspend && (b._suspendTimer = null, b.state = "suspending", b.ctx.suspend().then(function() {
                        b.state = "suspended";
                        b._resumeAfterSuspend && (delete b._resumeAfterSuspend, b._autoResume())
                    }))
                }, 3E4);
                return b
            }
        },
        _autoResume: function() {
            var b = this;
            if (b.ctx && "undefined" !== typeof b.ctx.resume && c.usingWebAudio) return "running" === b.state && b._suspendTimer ? (clearTimeout(b._suspendTimer), b._suspendTimer = null) : "suspended" === b.state ? (b.state = "resuming", b.ctx.resume().then(function() {
                b.state = "running";
                for (var c = 0; c < b._howls.length; c++) b._howls[c]._emit("resume")
            }), b._suspendTimer && (clearTimeout(b._suspendTimer), b._suspendTimer = null)) : "suspending" === b.state && (b._resumeAfterSuspend = !0), b
        }
    };
    var c = new b,
        d = function(b) {
            !b.src || 0 === b.src.length ? console.error("An array of source files must be passed with any new Howl.") : this.init(b)
        };
    d.prototype = {
        init: function(b) {
            var d = this;
            c.ctx || r();
            d._autoplay = b.autoplay || !1;
            d._format = "string" !== typeof b.format ? b.format : [b.format];
            d._html5 = b.html5 || !1;
            d._muted = b.mute || !1;
            d._loop = b.loop || !1;
            d._pool = b.pool || 5;
            d._preload = "boolean" === typeof b.preload ? b.preload : !0;
            d._rate = b.rate || 1;
            d._sprite = b.sprite || {};
            d._src = "string" !== typeof b.src ? b.src : [b.src];
            d._volume = void 0 !== b.volume ? b.volume : 1;
            d._duration = 0;
            d._state = "unloaded";
            d._sounds = [];
            d._endTimers = {};
            d._queue = [];
            d._onend = b.onend ? [{
                fn: b.onend
            }] : [];
            d._onfade = b.onfade ? [{
                fn: b.onfade
            }] : [];
            d._onload = b.onload ? [{
                fn: b.onload
            }] : [];
            d._onloaderror = b.onloaderror ? [{
                fn: b.onloaderror
            }] : [];
            d._onpause = b.onpause ? [{
                fn: b.onpause
            }] : [];
            d._onplay = b.onplay ? [{
                fn: b.onplay
            }] : [];
            d._onstop = b.onstop ? [{
                fn: b.onstop
            }] : [];
            d._onmute = b.onmute ? [{
                fn: b.onmute
            }] : [];
            d._onvolume = b.onvolume ? [{
                fn: b.onvolume
            }] : [];
            d._onrate = b.onrate ? [{
                fn: b.onrate
            }] : [];
            d._onseek = b.onseek ? [{
                fn: b.onseek
            }] : [];
            d._onresume = [];
            d._webAudio = c.usingWebAudio && !d._html5;
            "undefined" !== typeof c.ctx && (c.ctx && c.mobileAutoEnable) && c._enableMobileAudio();
            c._howls.push(d);
            d._autoplay && d._queue.push({
                event: "play",
                action: function() {
                    d.play()
                }
            });
            d._preload && d.load();
            return d
        },
        load: function() {
            var b = null;
            if (c.noAudio) this._emit("loaderror", null, "No audio support.");
            else {
                "string" === typeof this._src && (this._src = [this._src]);
                for (var d = 0; d < this._src.length; d++) {
                    var n, p;
                    if (this._format && this._format[d]) n = this._format[d];
                    else {
                        p = this._src[d];
                        if ("string" !== typeof p) {
                            this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        }(n = /^data:audio\/([^;,]+);/i.exec(p)) || (n = /\.([^.]+)$/.exec(p.split("?", 1)[0]));
                        n && (n = n[1].toLowerCase())
                    } if (c.codecs(n)) {
                        b = this._src[d];
                        break
                    }
                }
                if (b) {
                    this._src = b;
                    this._state = "loading";
                    "https:" === window.location.protocol && "http:" === b.slice(0, 5) && (this._html5 = !0, this._webAudio = !1);
                    new e(this);
                    if (this._webAudio) {
                        var s = this,
                            r = s._src;
                        if (f[r]) s._duration = f[r].duration, q(s);
                        else if (/^data:[^;]+;base64,/.test(r)) {
                            b = atob(r.split(",")[1]);
                            d = new Uint8Array(b.length);
                            for (n = 0; n < b.length; ++n) d[n] = b.charCodeAt(n);
                            l(d.buffer, s)
                        } else {
                            var t = new XMLHttpRequest;
                            t.open("GET", r, !0);
                            t.responseType = "arraybuffer";
                            t.onload = function() {
                                var b = (t.status + "")[0];
                                "0" !== b && "2" !== b && "3" !== b ? s._emit("loaderror", null, "Failed loading audio file with status: " +
                                    t.status + ".") : l(t.response, s)
                            };
                            t.onerror = function() {
                                s._webAudio && (s._html5 = !0, s._webAudio = !1, s._sounds = [], delete f[r], s.load())
                            };
                            try {
                                t.send()
                            } catch (y) {
                                t.onerror()
                            }
                        }
                    }
                    return this
                }
                this._emit("loaderror", null, "No codec support for selected audio sources.")
            }
        },
        play: function(b, d) {
            var e = this,
                f = null;
            if ("number" === typeof b) f = b, b = null;
            else {
                if ("string" === typeof b && "loaded" === e._state && !e._sprite[b]) return null;
                if ("undefined" === typeof b) {
                    b = "__default";
                    for (var l = 0, r = 0; r < e._sounds.length; r++) e._sounds[r]._paused && !e._sounds[r]._ended && (l++, f = e._sounds[r]._id);
                    1 === l ? b = null : f = null
                }
            }
            var q = f ? e._soundById(f) : e._inactiveSound();
            if (!q) return null;
            f && !b && (b = q._sprite || "__default");
            if ("loaded" !== e._state && !e._sprite[b]) return e._queue.push({
                event: "play",
                action: function() {
                    e.play(e._soundById(q._id) ? q._id : void 0)
                }
            }), q._id;
            if (f && !q._paused) return d || setTimeout(function() {
                e._emit("play", q._id)
            }, 0), q._id;
            e._webAudio && c._autoResume();
            var y = Math.max(0, 0 < q._seek ? q._seek : e._sprite[b][0] / 1E3),
                G = Math.max(0, (e._sprite[b][0] + e._sprite[b][1]) / 1E3 - y),
                F = 1E3 * G / Math.abs(q._rate);
            q._paused = !1;
            q._ended = !1;
            q._sprite = b;
            q._seek = y;
            q._start = e._sprite[b][0] / 1E3;
            q._stop = (e._sprite[b][0] + e._sprite[b][1]) / 1E3;
            q._loop = !(!q._loop && !e._sprite[b][2]);
            var J = q._node;
            if (e._webAudio) f = function() {
                e._refreshBuffer(q);
                J.gain.setValueAtTime(q._muted || e._muted ? 0 : q._volume, c.ctx.currentTime);
                q._playStart = c.ctx.currentTime;
                "undefined" === typeof J.bufferSource.start ? q._loop ? J.bufferSource.noteGrainOn(0, y, 86400) : J.bufferSource.noteGrainOn(0, y, G) : q._loop ? J.bufferSource.start(0, y, 86400) : J.bufferSource.start(0, y, G);
                Infinity !== F && (e._endTimers[q._id] = setTimeout(e._ended.bind(e, q), F));
                d || setTimeout(function() {
                    e._emit("play", q._id)
                }, 0)
            }, l = "running" === c.state, "loaded" === e._state && l ? f() : (e.once(l ? "load" : "resume", f, l ? q._id : null), e._clearTimer(q._id));
            else {
                var U = function() {
                        J.currentTime = y;
                        J.muted = q._muted || e._muted || c._muted || J.muted;
                        J.volume = q._volume * c.volume();
                        J.playbackRate = q._rate;
                        setTimeout(function() {
                            J.play();
                            Infinity !== F && (e._endTimers[q._id] = setTimeout(e._ended.bind(e, q), F));
                            d || e._emit("play", q._id)
                        }, 0)
                    },
                    f = "loaded" === e._state && (window && window.ejecta || !J.readyState && c._navigator.isCocoonJS);
                if (4 === J.readyState || f) U();
                else {
                    var ma = function() {
                        U();
                        J.removeEventListener(c._canPlayEvent, ma, !1)
                    };
                    J.addEventListener(c._canPlayEvent, ma, !1);
                    e._clearTimer(q._id)
                }
            }
            return q._id
        },
        pause: function(b, c) {
            var d = this;
            if ("loaded" !== d._state) return d._queue.push({
                event: "pause",
                action: function() {
                    d.pause(b)
                }
            }), d;
            for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
                d._clearTimer(e[f]);
                var l = d._soundById(e[f]);
                if (l && !l._paused && (l._seek = d.seek(e[f]), l._rateSeek = 0, l._paused = !0, d._stopFade(e[f]), l._node))
                    if (d._webAudio) {
                        if (!l._node.bufferSource) break;
                        "undefined" === typeof l._node.bufferSource.stop ? l._node.bufferSource.noteOff(0) : l._node.bufferSource.stop(0);
                        d._cleanBuffer(l._node)
                    } else(!isNaN(l._node.duration) || Infinity === l._node.duration) && l._node.pause();
                c || d._emit("pause", l ? l._id : null)
            }
            return d
        },
        stop: function(b, c) {
            var d = this;
            if ("loaded" !== d._state) return d._queue.push({
                event: "stop",
                action: function() {
                    d.stop(b)
                }
            }), d;
            for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
                d._clearTimer(e[f]);
                var l = d._soundById(e[f]);
                if (l && (l._seek = l._start || 0, l._rateSeek = 0, l._paused = !0, l._ended = !0, d._stopFade(e[f]), l._node))
                    if (d._webAudio) {
                        if (!l._node.bufferSource) {
                            c || d._emit("stop", l._id);
                            break
                        }
                        "undefined" === typeof l._node.bufferSource.stop ? l._node.bufferSource.noteOff(0) : l._node.bufferSource.stop(0);
                        d._cleanBuffer(l._node)
                    } else if (!isNaN(l._node.duration) || Infinity === l._node.duration) l._node.currentTime = l._start || 0, l._node.pause();
                l && !c && d._emit("stop", l._id)
            }
            return d
        },
        mute: function(b, d) {
            var e = this;
            if ("loaded" !== e._state) return e._queue.push({
                event: "mute",
                action: function() {
                    e.mute(b, d)
                }
            }), e;
            if ("undefined" === typeof d)
                if ("boolean" === typeof b) e._muted = b;
                else return e._muted;
            for (var f = e._getSoundIds(d), l = 0; l < f.length; l++) {
                var r = e._soundById(f[l]);
                r && (r._muted = b, e._webAudio && r._node ? r._node.gain.setValueAtTime(b ? 0 : r._volume, c.ctx.currentTime) : r._node && (r._node.muted = c._muted ? !0 : b), e._emit("mute", r._id))
            }
            return e
        },
        volume: function() {
            var b = this,
                d = arguments,
                e, f;
            if (0 === d.length) return b._volume;
            1 === d.length || 2 === d.length && "undefined" === typeof d[1] ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 <= d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            var l;
            if ("undefined" !== typeof e && 0 <= e && 1 >= e) {
                if ("loaded" !== b._state) return b._queue.push({
                    event: "volume",
                    action: function() {
                        b.volume.apply(b, d)
                    }
                }), b;
                "undefined" === typeof f && (b._volume = e);
                f = b._getSoundIds(f);
                for (var r = 0; r < f.length; r++)
                    if (l = b._soundById(f[r])) l._volume = e, d[2] || b._stopFade(f[r]), b._webAudio && l._node && !l._muted ? l._node.gain.setValueAtTime(e, c.ctx.currentTime) : l._node && !l._muted && (l._node.volume = e * c.volume()), b._emit("volume", l._id)
            } else return (l = f ? b._soundById(f) : b._sounds[0]) ? l._volume : 0;
            return b
        },
        fade: function(b, d, e, f) {
            var l = this,
                r = Math.abs(b - d),
                q = b > d ? "out" : "in",
                y = r / 0.01,
                r = 0 < y ? e / y : e;
            4 > r && (y = Math.ceil(y / (4 / r)), r = 4);
            if ("loaded" !== l._state) return l._queue.push({
                event: "fade",
                action: function() {
                    l.fade(b, d, e, f)
                }
            }), l;
            l.volume(b, f);
            for (var G = l._getSoundIds(f), F = 0; F < G.length; F++) {
                var J = l._soundById(G[F]);
                if (J) {
                    f || l._stopFade(G[F]);
                    if (l._webAudio && !J._muted) {
                        var U = c.ctx.currentTime,
                            ma = U + e / 1E3;
                        J._volume = b;
                        J._node.gain.setValueAtTime(b, U);
                        J._node.gain.linearRampToValueAtTime(d, ma)
                    }
                    var P = b;
                    J._interval = setInterval(function(b, c) {
                        0 < y && (P += "in" === q ? 0.01 : -0.01);
                        P = Math.max(0, P);
                        P = Math.min(1, P);
                        P = Math.round(100 * P) / 100;
                        l._webAudio ? ("undefined" === typeof f && (l._volume = P), c._volume = P) : l.volume(P, b, !0);
                        P === d && (clearInterval(c._interval), c._interval = null, l.volume(P, b), l._emit("fade", b))
                    }.bind(l, G[F], J), r)
                }
            }
            return l
        },
        _stopFade: function(b) {
            var d = this._soundById(b);
            d && d._interval && (this._webAudio && d._node.gain.cancelScheduledValues(c.ctx.currentTime), clearInterval(d._interval), d._interval = null, this._emit("fade", b));
            return this
        },
        loop: function() {
            var b = arguments,
                c, d;
            if (0 === b.length) return this._loop;
            if (1 === b.length)
                if ("boolean" === typeof b[0]) this._loop = c = b[0];
                else return (b = this._soundById(parseInt(b[0], 10))) ? b._loop : !1;
            else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
            d = this._getSoundIds(d);
            for (var e = 0; e < d.length; e++)
                if (b = this._soundById(d[e]))
                    if (b._loop = c, this._webAudio && (b._node && b._node.bufferSource) && (b._node.bufferSource.loop = c)) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
            return this
        },
        rate: function() {
            var b = this,
                d = arguments,
                e, f;
            0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            var l;
            if ("number" === typeof e) {
                if ("loaded" !== b._state) return b._queue.push({
                    event: "rate",
                    action: function() {
                        b.rate.apply(b, d)
                    }
                }), b;
                "undefined" === typeof f && (b._rate = e);
                f = b._getSoundIds(f);
                for (var r = 0; r < f.length; r++)
                    if (l = b._soundById(f[r])) {
                        l._rateSeek = b.seek(f[r]);
                        l._playStart = b._webAudio ? c.ctx.currentTime : l._playStart;
                        l._rate = e;
                        b._webAudio && l._node && l._node.bufferSource ? l._node.bufferSource.playbackRate.value = e : l._node && (l._node.playbackRate = e);
                        var q = b.seek(f[r]),
                            q = 1E3 * ((b._sprite[l._sprite][0] + b._sprite[l._sprite][1]) / 1E3 - q) / Math.abs(l._rate);
                        if (b._endTimers[f[r]] || !l._paused) b._clearTimer(f[r]), b._endTimers[f[r]] = setTimeout(b._ended.bind(b, l), q);
                        b._emit("rate", l._id)
                    }
            } else return (l = b._soundById(f)) ? l._rate : b._rate;
            return b
        },
        seek: function() {
            var b = this,
                d = arguments,
                e, f;
            0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : (f = b._sounds[0]._id, e = parseFloat(d[0])) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            if ("undefined" === typeof f) return b;
            if ("loaded" !== b._state) return b._queue.push({
                event: "seek",
                action: function() {
                    b.seek.apply(b, d)
                }
            }), b;
            var l = b._soundById(f);
            if (l)
                if ("number" === typeof e && 0 <= e) {
                    var r = b.playing(f);
                    r && b.pause(f, !0);
                    l._seek = e;
                    l._ended = !1;
                    b._clearTimer(f);
                    r && b.play(f, !0);
                    !b._webAudio && l._node && (l._node.currentTime = e);
                    b._emit("seek", f)
                } else return b._webAudio ? (e = b.playing(f) ? c.ctx.currentTime - l._playStart : 0, l._seek + ((l._rateSeek ? l._rateSeek - l._seek : 0) + e * Math.abs(l._rate))) : l._node.currentTime;
            return b
        },
        playing: function(b) {
            if ("number" === typeof b) return (b = this._soundById(b)) ? !b._paused : !1;
            for (b = 0; b < this._sounds.length; b++)
                if (!this._sounds[b]._paused) return !0;
            return !1
        },
        duration: function(b) {
            var c = this._duration;
            (b = this._soundById(b)) && (c = this._sprite[b._sprite][1] / 1E3);
            return c
        },
        state: function() {
            return this._state
        },
        unload: function() {
            for (var b = this._sounds, d = 0; d < b.length; d++) {
                b[d]._paused || (this.stop(b[d]._id), this._emit("end", b[d]._id));
                this._webAudio || (b[d]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=", b[d]._node.removeEventListener("error", b[d]._errorFn, !1), b[d]._node.removeEventListener(c._canPlayEvent, b[d]._loadFn, !1));
                delete b[d]._node;
                this._clearTimer(b[d]._id);
                var e = c._howls.indexOf(this);
                0 <= e && c._howls.splice(e, 1)
            }
            b = !0;
            for (d = 0; d < c._howls.length; d++)
                if (c._howls[d]._src === this._src) {
                    b = !1;
                    break
                }
            f && b && delete f[this._src];
            c.noAudio = !1;
            this._state = "unloaded";
            this._sounds = [];
            return null
        },
        on: function(b, c, d, e) {
            b = this["_on" + b];
            "function" === typeof c && b.push(e ? {
                id: d,
                fn: c,
                once: e
            } : {
                id: d,
                fn: c
            });
            return this
        },
        off: function(b, c, d) {
            var e = this["_on" +
                    b],
                f = 0;
            if (c)
                for (f = 0; f < e.length; f++) {
                    if (c === e[f].fn && d === e[f].id) {
                        e.splice(f, 1);
                        break
                    }
                } else if (b) this["_on" + b] = [];
                else {
                    b = Object.keys(this);
                    for (f = 0; f < b.length; f++) 0 === b[f].indexOf("_on") && Array.isArray(this[b[f]]) && (this[b[f]] = [])
                }
            return this
        },
        once: function(b, c, d) {
            this.on(b, c, d, 1);
            return this
        },
        _emit: function(b, c, d) {
            for (var e = this["_on" + b], f = e.length - 1; 0 <= f; f--)
                if (!e[f].id || e[f].id === c || "load" === b) setTimeout(function(b) {
                    b.call(this, c, d)
                }.bind(this, e[f].fn), 0), e[f].once && this.off(b, e[f].fn, e[f].id);
            return this
        },
        _loadQueue: function() {
            var b = this;
            if (0 < b._queue.length) {
                var c = b._queue[0];
                b.once(c.event, function() {
                    b._queue.shift();
                    b._loadQueue()
                });
                c.action()
            }
            return b
        },
        _ended: function(b) {
            var d = b._sprite,
                d = !(!b._loop && !this._sprite[d][2]);
            this._emit("end", b._id);
            !this._webAudio && d && this.stop(b._id, !0).play(b._id);
            if (this._webAudio && d) {
                this._emit("play", b._id);
                b._seek = b._start || 0;
                b._rateSeek = 0;
                b._playStart = c.ctx.currentTime;
                var e = 1E3 * (b._stop - b._start) / Math.abs(b._rate);
                this._endTimers[b._id] = setTimeout(this._ended.bind(this, b), e)
            }
            this._webAudio && !d && (b._paused = !0, b._ended = !0, b._seek = b._start || 0, b._rateSeek = 0, this._clearTimer(b._id), this._cleanBuffer(b._node), c._autoSuspend());
            !this._webAudio && !d && this.stop(b._id);
            return this
        },
        _clearTimer: function(b) {
            this._endTimers[b] && (clearTimeout(this._endTimers[b]), delete this._endTimers[b]);
            return this
        },
        _soundById: function(b) {
            for (var c = 0; c < this._sounds.length; c++)
                if (b === this._sounds[c]._id) return this._sounds[c];
            return null
        },
        _inactiveSound: function() {
            this._drain();
            for (var b = 0; b < this._sounds.length; b++)
                if (this._sounds[b]._ended) return this._sounds[b].reset();
            return new e(this)
        },
        _drain: function() {
            var b = this._pool,
                c = 0,
                d = 0;
            if (!(this._sounds.length < b)) {
                for (d = 0; d < this._sounds.length; d++) this._sounds[d]._ended && c++;
                for (d = this._sounds.length - 1; 0 <= d && !(c <= b); d--) this._sounds[d]._ended && (this._webAudio && this._sounds[d]._node && this._sounds[d]._node.disconnect(0), this._sounds.splice(d, 1), c--)
            }
        },
        _getSoundIds: function(b) {
            if ("undefined" === typeof b) {
                b = [];
                for (var c = 0; c < this._sounds.length; c++) b.push(this._sounds[c]._id);
                return b
            }
            return [b]
        },
        _refreshBuffer: function(b) {
            b._node.bufferSource = c.ctx.createBufferSource();
            b._node.bufferSource.buffer = f[this._src];
            b._panner ? b._node.bufferSource.connect(b._panner) : b._node.bufferSource.connect(b._node);
            if (b._node.bufferSource.loop = b._loop) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
            b._node.bufferSource.playbackRate.value = b._rate;
            return this
        },
        _cleanBuffer: function(b) {
            if (this._scratchBuffer) {
                b.bufferSource.onended = null;
                b.bufferSource.disconnect(0);
                try {
                    b.bufferSource.buffer = this._scratchBuffer
                } catch (c) {}
            }
            b.bufferSource = null;
            return this
        }
    };
    var e = function(b) {
        this._parent = b;
        this.init()
    };
    e.prototype = {
        init: function() {
            var b = this._parent;
            this._muted = b._muted;
            this._loop = b._loop;
            this._volume = b._volume;
            this._muted = b._muted;
            this._rate = b._rate;
            this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = Math.round(Date.now() * Math.random());
            b._sounds.push(this);
            this.create();
            return this
        },
        create: function() {
            var b = this._parent,
                d = c._muted || this._muted || this._parent._muted ? 0 : this._volume;
            b._webAudio ? (this._node = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), this._node.gain.setValueAtTime(d, c.ctx.currentTime), this._node.paused = !0, this._node.connect(c.masterGain)) : (this._node = new Audio, this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(c._canPlayEvent, this._loadFn, !1), this._node.src = b._src, this._node.preload = "auto", this._node.volume = d * c.volume(), this._node.load());
            return this
        },
        reset: function() {
            var b = this._parent;
            this._muted = b._muted;
            this._loop = b._loop;
            this._volume = b._volume;
            this._muted = b._muted;
            this._rate = b._rate;
            this._rateSeek = this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = Math.round(Date.now() * Math.random());
            return this
        },
        _errorListener: function() {
            this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0);
            this._node.removeEventListener("error", this._errorListener, !1)
        },
        _loadListener: function() {
            var b = this._parent;
            b._duration = Math.ceil(10 * this._node.duration) / 10;
            0 === Object.keys(b._sprite).length && (b._sprite = {
                __default: [0, 1E3 * b._duration]
            });
            "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue());
            this._node.removeEventListener(c._canPlayEvent, this._loadFn, !1)
        }
    };
    var f = {},
        l = function(b, d) {
            c.ctx.decodeAudioData(b, function(b) {
                b && 0 < d._sounds.length && (f[d._src] = b, q(d, b))
            }, function() {
                d._emit("loaderror", null, "Decoding audio data failed.")
            })
        },
        q = function(b, c) {
            c && !b._duration && (b._duration = c.duration);
            0 === Object.keys(b._sprite).length && (b._sprite = {
                __default: [0, 1E3 * b._duration]
            });
            "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue())
        },
        r = function() {
            try {
                "undefined" !== typeof AudioContext ? c.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? c.ctx = new webkitAudioContext : c.usingWebAudio = !1
            } catch (b) {
                c.usingWebAudio = !1
            }
            var d = /iP(hone|od|ad)/.test(c._navigator && c._navigator.platform),
                e = c._navigator && c._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                e = e ? parseInt(e[1], 10) : null;
            if (d && (e && 9 > e) && (d = /safari/.test(c._navigator && c._navigator.userAgent.toLowerCase()), c._navigator && c._navigator.standalone && !d || c._navigator && !c._navigator.standalone && !d)) c.usingWebAudio = !1;
            c.usingWebAudio && (c.masterGain = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), c.masterGain.gain.value = 1, c.masterGain.connect(c.ctx.destination));
            c._setup()
        };
    "function" === typeof define && define.amd && define([], function() {
        return {
            Howler: c,
            Howl: d
        }
    });
    "undefined" !== typeof exports && (exports.Howler = c, exports.Howl = d);
    "undefined" !== typeof window ? (window.HowlerGlobal = b, window.Howler = c, window.Howl = d, window.Sound = e) : "undefined" !== typeof global && (global.HowlerGlobal = b, global.Howler = c, global.Howl = d, global.Sound = e)
})();
(function() {
    HowlerGlobal.prototype._pos = [0, 0, 0];
    HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
    HowlerGlobal.prototype.stereo = function(b) {
        if (!this.ctx || !this.ctx.listener) return this;
        for (var c = this._howls.length - 1; 0 <= c; c--) this._howls[c].stereo(b);
        return this
    };
    HowlerGlobal.prototype.pos = function(b, c, d) {
        if (!this.ctx || !this.ctx.listener) return this;
        c = "number" !== typeof c ? this._pos[1] : c;
        d = "number" !== typeof d ? this._pos[2] : d;
        if ("number" === typeof b) this._pos = [b, c, d], this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]);
        else return this._pos;
        return this
    };
    HowlerGlobal.prototype.orientation = function(b, c, d, e, g, m) {
        if (!this.ctx || !this.ctx.listener) return this;
        var n = this._orientation;
        c = "number" !== typeof c ? n[1] : c;
        d = "number" !== typeof d ? n[2] : d;
        e = "number" !== typeof e ? n[3] : e;
        g = "number" !== typeof g ? n[4] : g;
        m = "number" !== typeof m ? n[5] : m;
        if ("number" === typeof b) this._orientation = [b, c, d, e, g, m], this.ctx.listener.setOrientation(b, c, d, e, g, m);
        else return n;
        return this
    };
    var b = Howl.prototype.init;
    Howl.prototype.init = function(c) {
        this._orientation = c.orientation || [1, 0, 0];
        this._stereo = c.stereo || null;
        this._pos = c.pos || null;
        this._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : 360,
            coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : 360,
            coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : 0,
            distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : "inverse",
            maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : 1E4,
            panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : "HRTF",
            refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : 1,
            rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : 1
        };
        this._onstereo = c.onstereo ? [{
            fn: c.onstereo
        }] : [];
        this._onpos = c.onpos ? [{
            fn: c.onpos
        }] : [];
        this._onorientation = c.onorientation ? [{
            fn: c.onorientation
        }] : [];
        return b.call(this, c)
    };
    Howl.prototype.stereo = function(b, c) {
        var d = this;
        if (!d._webAudio) return d;
        if ("loaded" !== d._state) return d._queue.push({
            event: "stereo",
            action: function() {
                d.stereo(b, c)
            }
        }), d;
        var r = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof c)
            if ("number" === typeof b) d._stereo = b, d._pos = [b, 0, 0];
            else return d._stereo;
        for (var g = d._getSoundIds(c), m = 0; m < g.length; m++) {
            var n = d._soundById(g[m]);
            if (n)
                if ("number" === typeof b) n._stereo = b, n._pos = [b, 0, 0], n._node && (n._pannerAttr.panningModel = "equalpower", (!n._panner || !n._panner.pan) && e(n, r), "spatial" === r ? n._panner.setPosition(b, 0, 0) : n._panner.pan.value = b), d._emit("stereo", n._id);
                else return n._stereo
        }
        return d
    };
    Howl.prototype.pos = function(b, c, d, r) {
        var g = this;
        if (!g._webAudio) return g;
        if ("loaded" !== g._state) return g._queue.push({
            event: "pos",
            action: function() {
                g.pos(b, c, d, r)
            }
        }), g;
        c = "number" !== typeof c ? 0 : c;
        d = "number" !== typeof d ? -0.5 : d;
        if ("undefined" === typeof r)
            if ("number" === typeof b) g._pos = [b, c, d];
            else return g._pos;
        for (var m = g._getSoundIds(r), n = 0; n < m.length; n++) {
            var p = g._soundById(m[n]);
            if (p)
                if ("number" === typeof b) p._pos = [b, c, d], p._node && ((!p._panner || p._panner.pan) && e(p, "spatial"), p._panner.setPosition(b, c, d)), g._emit("pos", p._id);
                else return p._pos
        }
        return g
    };
    Howl.prototype.orientation = function(b, c, d, r) {
        var g = this;
        if (!g._webAudio) return g;
        if ("loaded" !== g._state) return g._queue.push({
            event: "orientation",
            action: function() {
                g.orientation(b, c, d, r)
            }
        }), g;
        c = "number" !== typeof c ? g._orientation[1] : c;
        d = "number" !== typeof d ? g._orientation[2] : d;
        if ("undefined" === typeof r)
            if ("number" === typeof b) g._orientation = [b, c, d];
            else return g._orientation;
        for (var m = g._getSoundIds(r), n = 0; n < m.length; n++) {
            var p = g._soundById(m[n]);
            if (p)
                if ("number" === typeof b) p._orientation = [b, c, d], p._node && (p._panner || (p._pos || (p._pos = g._pos || [0, 0, -0.5]), e(p, "spatial")), p._panner.setOrientation(b, c, d)), g._emit("orientation", p._id);
                else return p._orientation
        }
        return g
    };
    Howl.prototype.pannerAttr = function() {
        var b = arguments,
            c, d;
        if (!this._webAudio) return this;
        if (0 === b.length) return this._pannerAttr;
        if (1 === b.length)
            if ("object" === typeof b[0]) c = b[0], "undefined" === typeof d && (this._pannerAttr = {
                coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : this._coneInnerAngle,
                coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : this._coneOuterAngle,
                coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : this._coneOuterGain,
                distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : this._distanceModel,
                maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : this._maxDistance,
                panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : this._panningModel,
                refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : this._refDistance,
                rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : this._rolloffFactor
            });
            else return (b = this._soundById(parseInt(b[0], 10))) ? b._pannerAttr : this._pannerAttr;
        else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
        d = this._getSoundIds(d);
        for (var r = 0; r < d.length; r++)
            if (b = this._soundById(d[r])) {
                var g = b._pannerAttr,
                    g = {
                        coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : g.coneInnerAngle,
                        coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : g.coneOuterAngle,
                        coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : g.coneOuterGain,
                        distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : g.distanceModel,
                        maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : g.maxDistance,
                        panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : g.panningModel,
                        refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : g.refDistance,
                        rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : g.rolloffFactor
                    },
                    m = b._panner;
                m ? (m.coneInnerAngle = g.coneInnerAngle, m.coneOuterAngle = g.coneOuterAngle, m.coneOuterGain = g.coneOuterGain, m.distanceModel = g.distanceModel, m.maxDistance = g.maxDistance, m.panningModel = g.panningModel, m.refDistance = g.refDistance, m.rolloffFactor = g.rolloffFactor) : (b._pos || (b._pos = this._pos || [0, 0, -0.5]), e(b, "spatial"))
            }
        return this
    };
    var c = Sound.prototype.init;
    Sound.prototype.init = function() {
        var b = this._parent;
        this._orientation = b._orientation;
        this._stereo = b._stereo;
        this._pos = b._pos;
        this._pannerAttr = b._pannerAttr;
        c.call(this);
        this._stereo ? b.stereo(this._stereo) : this._pos && b.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
    };
    var d = Sound.prototype.reset;
    Sound.prototype.reset = function() {
        var b = this._parent;
        this._orientation = b._orientation;
        this._pos = b._pos;
        this._pannerAttr = b._pannerAttr;
        return d.call(this)
    };
    var e = function(b, c) {
        "spatial" === (c || "spatial") ? (b._panner = Howler.ctx.createPanner(), b._panner.coneInnerAngle = b._pannerAttr.coneInnerAngle, b._panner.coneOuterAngle = b._pannerAttr.coneOuterAngle, b._panner.coneOuterGain = b._pannerAttr.coneOuterGain, b._panner.distanceModel = b._pannerAttr.distanceModel, b._panner.maxDistance = b._pannerAttr.maxDistance, b._panner.panningModel = b._pannerAttr.panningModel, b._panner.refDistance = b._pannerAttr.refDistance, b._panner.rolloffFactor = b._pannerAttr.rolloffFactor, b._panner.setPosition(b._pos[0], b._pos[1], b._pos[2]), b._panner.setOrientation(b._orientation[0], b._orientation[1], b._orientation[2])) : (b._panner = Howler.ctx.createStereoPanner(), b._panner.pan.value = b._stereo);
        b._panner.connect(b._node);
        b._paused || b._parent.pause(b._id, !0).play(b._id)
    }
})();

(function(b) {
    Number.prototype.map = function(b, c, d, e) {
        return d + (e - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 * this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            e = function() {},
            f = function() {
                return d.apply(this instanceof e && b ? this : b, c.concat(Array.prototype.slice.call(arguments)))
            };
        e.prototype = this.prototype;
        f.prototype = new e;
        return f
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b || b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array)
                for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var e = c[d];
                if ("object" != typeof e || e instanceof HTMLElement || e instanceof ig.Class || null === e) b[d] = e;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = e instanceof Array ? [] : {};
                    ig.merge(b[d], e)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
                d = [],
                e;
            for (e in b) c.push(e);
            c.sort();
            for (e = 0; e < c.length; e++) d.push(b[c[e]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var e = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d
        },
        getVendorAttribute: function(b, c) {
            var d = c.charAt(0).toUpperCase() + c.substr(1);
            return b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function(b, c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function(b, c, d, e, f) {
            var l = ig.$new("canvas");
            l.width = b.width;
            l.height = b.height;
            var q = l.getContext("2d");
            ig.System.SCALE.CRISP(l, q);
            var t = ig.getVendorAttribute(q, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(q, "getImageDataHD");
            var y = b.width / t,
                G = b.height / t;
            l.width = Math.ceil(y);
            l.height = Math.ceil(G);
            q.drawImage(b, 0, 0, y, G);
            return 1 === t ? q.getImageData(c, d, e, f) : q.getImageDataHD(c, d, e, f)
        },
        module: function(b) {
            if (ig._current) throw "Module '" + ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                e = ig.$new("script");
            e.type = "text/javascript";
            e.src = d;
            e.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            e.onerror = function() {
                throw "Failed to load module " + b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(e)
        },
        _execModules: function() {
            for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], e = !0, f = 0; f < d.requires.length; f++) {
                    var l = d.requires[f];
                    ig.modules[l] ? ig.modules[l].loaded || (e = !1) : (e = !1, ig._loadScript(l, d.name))
                }
                e && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    e = [];
                    l = ig._loadQueue[c].requires;
                    for (f = 0; f < l.length; f++) d = ig.modules[l[f]], (!d || !d.loaded) && e.push(l[f]);
                    b.push(ig._loadQueue[c].name + " (requires: " + e.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" +
                b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio = b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.winPhone || /mobile/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in b || b.navigator.msMaxTouchPoints;
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(b, "requestAnimationFrame");
    if (b.requestAnimationFrame) {
        var c = 1,
            d = {};
        b.ig.setAnimation = function(e, f) {
            var l = c++;
            d[l] = !0;
            var n = function() {
                d[l] && (b.requestAnimationFrame(n, f), e())
            };
            b.requestAnimationFrame(n, f);
            return l
        };
        b.ig.clearAnimation = function(b) {
            delete d[b]
        }
    } else b.ig.setAnimation = function(c) {
        return b.setInterval(c, 1E3 / 60)
    }, b.ig.clearAnimation = function(c) {
        b.clearInterval(c)
    };
    var e = !1,
        f = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/,
        l = 0;
    b.ig.Class = function() {};
    var q = function(b) {
        var c = this.prototype,
            d = {},
            e;
        for (e in b) "function" == typeof b[e] && "function" == typeof c[e] && f.test(b[e]) ? (d[e] = c[e], c[e] = function(b, c) {
            return function() {
                var e = this.parent;
                this.parent = d[b];
                var f = c.apply(this, arguments);
                this.parent = e;
                return f
            }
        }(e, b[e])) : c[e] = b[e]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!e) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b) return b
                }
                for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var m = this.prototype;
        e = !0;
        var n = new this;
        e = !1;
        for (var p in c) n[p] = "function" == typeof c[p] && "function" == typeof m[p] && f.test(c[p]) ? function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = m[b];
                var e = c.apply(this, arguments);
                this.parent = d;
                return e
            }
        }(p, c[p]) : c[p];
        d.prototype = n;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = q;
        d.classId = n.classId = ++l;
        return d
    };
    b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(b) {
            return ig.Image.cache[b] || null
        },
        init: function(b) {
            this.path = b;
            this.load()
        },
        load: function(b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(b) {
            var c = this.width * b,
                d = this.height * b,
                e = ig.$new("canvas");
            e.width = this.width;
            e.height = this.height;
            e = e.getContext("2d");
            e.drawImage(this.data, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
            var e = e.getImageData(0, 0, this.width, this.height),
                f = ig.$new("canvas");
            f.width = c;
            f.height = d;
            for (var l = f.getContext("2d"), q = l.getImageData(0, 0, c, d), r = 0; r < d; r++)
                for (var g = 0; g < c; g++) {
                    var m = 4 * (Math.floor(r / b) * this.width + Math.floor(g / b)),
                        n = 4 * (r * c + g);
                    q.data[n] = e.data[m];
                    q.data[n + 1] = e.data[m + 1];
                    q.data[n + 2] = e.data[m + 2];
                    q.data[n + 3] = e.data[m + 3]
                }
            l.putImageData(q, 0, 0);
            this.data = f
        },
        draw: function(b, c, d, e, f, l) {
            if (this.loaded) {
                var q = ig.system.scale;
                f = (f ? f : this.width) * q;
                l = (l ? l : this.height) * q;
                ig.system.context.drawImage(this.data, d ? d * q : 0, e ? e * q : 0, f, l, ig.system.getDrawPos(b), ig.system.getDrawPos(c), f, l);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, e, f, l, q) {
            f = f ? f : e;
            if (this.loaded && !(e > this.width || f > this.height)) {
                var r = ig.system.scale,
                    g = Math.floor(e * r),
                    m = Math.floor(f * r),
                    n = l ? -1 : 1,
                    p = q ? -1 : 1;
                if (l || q) ig.system.context.save(), ig.system.context.scale(n, p);
                ig.system.context.drawImage(this.data, Math.floor(d * e) % this.width * r, Math.floor(d * e / this.width) * f * r, g, m, ig.system.getDrawPos(b) * n - (l ? g : 0), ig.system.getDrawPos(c) * p - (q ? m : 0), g, m);
                (l || q) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var b in ig.Image.cache) ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function(b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function(b) {
            for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return c
        },
        heightForString: function(b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(b, c, d, e) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var f = this.height + this.lineSpacing, l = 0; l < b.length; l++) this.draw(b[l], c, d + l * f, e)
            } else {
                if (e == ig.Font.ALIGN.RIGHT || e == ig.Font.ALIGN.CENTER) l = this._widthForLine(b), c -= e == ig.Font.ALIGN.CENTER ? l / 2 : l;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (l = 0; l < b.length; l++) e = b.charCodeAt(l), c += this._drawChar(e - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var e = ig.system.scale,
                f = this.widthMap[b] * e,
                l = (this.height - 2) * e;
            ig.system.context.drawImage(this.data, this.indices[b] * e, 0, f, l, ig.system.getDrawPos(c), ig.system.getDrawPos(d), f, l);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            var c = ig.$new("canvas");
            c.width = b.width;
            c.height = b.height;
            c = c.getContext("2d");
            c.drawImage(b, 0, 0);
            for (var c = c.getImageData(0, b.height - 1, b.width, 1), d = 0, e = 0, f = 0; f < b.width; f++) {
                var l = 4 * f + 3;
                0 != c.data[l] ? e++ : 0 == c.data[l] && e && (this.widthMap.push(e), this.indices.push(f - e), d++, e = 0)
            }
            this.widthMap.push(e);
            this.indices.push(f - e)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                var d = ig.Sound.use[c];
                if (b.canPlayType(d.mime)) {
                    this.format = d;
                    break
                }
            }
            this.format || (ig.Sound.enabled = !1)
        },
        load: function(b, c, d) {
            var e = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c < ig.Sound.channels; c++) {
                        var f = new Audio(e);
                        f.load();
                        this.clips[b].push(f)
                    }
                return this.clips[b][0]
            }
            var l = new Audio(e);
            d && (l.addEventListener("canplaythrough", function r(c) {
                l.removeEventListener("canplaythrough", r, !1);
                d(b, !0, c)
            }, !1), l.addEventListener("error", function(c) {
                d(b, !0, c)
            }, !1));
            l.preload = "auto";
            l.load();
            this.clips[b] = [l];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++) f = new Audio(e), f.load(), this.clips[b].push(f);
            return l
        },
        get: function(b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];)
                if (d.paused || d.ended) return d.ended && (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                get: this.getVolume.bind(this),
                set: this.setVolume.bind(this)
            }), Object.defineProperty(this, "loop", {
                get: this.getLooping.bind(this),
                set: this.setLooping.bind(this)
            })) : this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack || (this.currentTrack = d)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            if (this.currentTrack) {
                this.currentTrack.pause();
                try {
                    this.currentTrack.currentTime = 0
                } catch (b) {
                    console.log(b)
                }
            }
        },
        play: function(b) {
            if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(), this.currentTrack = b);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(b) {
            this._loop = b;
            for (var c in this.tracks) this.tracks[c].loop = b
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks) this.tracks[c].volume = this._volume
        },
        fadeOut: function(b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this), 50))
        },
        _fadeStep: function() {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function(b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.MP3, ig.Sound.FORMAT.OGG];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b = 0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(b) {
            b.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(b, c) {
            if (c) this._unloaded.erase(b);
            else throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function(b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt = ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(b, c, d, e, f) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, e, f);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode
        },
        resize: function(b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function(b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(b) {
            if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function(b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function(b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            b = b.touches ? b.touches[0] : b;
            this.mouse.x = (b.clientX - d.left) / c;
            this.mouse.y = (b.clientY - d.top) / c
        },
        contextmenu: function(b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
        },
        keyup: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
        },
        devicemotion: function(b) {
            this.accel = b.accelerationIncludingGravity
        },
        bind: function(b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function(b, c) {
            var d = ig.$(b),
                e = this;
            d.addEventListener("touchstart", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function(b) {
                e.touchEnd(b, c)
            }, !1);
            d.addEventListener("MSPointerDown", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("MSPointerUp", function(b) {
                e.touchEnd(b, c)
            }, !1)
        },
        unbind: function(b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(b) {
            return this.actions[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return !!this.delayedKeyup[b]
        },
        clearPressed: function() {
            for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function(b, c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("plugins.webaudio-music-player").defines(function() {
    WebaudioMusicPlayer = ig.Class.extend({
        bgmPlaying: !1,
        isSupported: !1,
        muteFlag: !1,
        pausedTime: 0,
        webaudio: null,
        useHTML5Audio: !1,
        audio: null,
        inactiveAudio: null,
        codecs: null,
        _volume: 1,
        soundList: {},
        init: function(b) {
            this.webaudio = {
                compatibility: {},
                gainNode: null,
                buffer: null,
                source_loop: {},
                source_once: {}
            };
            try {
                this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext, this.isSupported = !0
            } catch (c) {
                console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0
            }
            if (this.useHTML5Audio)
                if ("undefined" !== typeof Audio) try {
                    new Audio
                } catch (d) {
                    this.useHTML5Audio = !1
                } else this.useHTML5Audio = !1;
            this.useHTML5Audio && (this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(b));
            if (!this.isSupported) return null;
            this.webaudio && this.initWebAudio(b)
        },
        initWebAudio: function(b) {
            ig.ua.iOS && this.initIOSWebAudioUnlock();
            this.webaudio.gainNode = this.webaudio.context.createGain();
            this.webaudio.gainNode.connect(this.webaudio.context.destination);
            this.webaudio.gainNode.gain.value = this._volume;
            var c = "start",
                d = "stop",
                e = this.webaudio.context.createBufferSource();
            "function" !== typeof e.start && (c = "noteOn");
            this.webaudio.compatibility.start = c;
            "function" !== typeof e.stop && (d = "noteOff");
            this.webaudio.compatibility.stop = d;
            for (var f in b) {
                this.soundList[f] = f;
                c = b[f].path;
                b = c + "." + ig.Sound.FORMAT.MP3.ext;
                var l = c + "." + ig.Sound.FORMAT.OGG.ext;
                ig.ua.mobile ? ig.ua.iOS && (l = b) : (c = navigator.userAgent.toLowerCase(), -1 != c.indexOf("safari") && -1 >= c.indexOf("chrome") && (l = b));
                var q = new XMLHttpRequest;
                q.open("GET", l, !0);
                q.responseType = "arraybuffer";
                q.onload = function() {
                    this.webaudio.context.decodeAudioData(q.response, function(b) {
                        this.webaudio.buffer = b;
                        this.webaudio.source_loop = {};
                        this.bgmPlaying ? this.play() : this.stop()
                    }.bind(this), function() {
                        console.log('Error decoding audio "' + l + '".')
                    })
                }.bind(this);
                q.send();
                break
            }
        },
        initIOSWebAudioUnlock: function() {
            if (this.webaudio) {
                webaudio = this.webaudio;
                var b = function() {
                    var c = webaudio.context,
                        d = c.createBuffer(1, 1, 22050),
                        e = c.createBufferSource();
                    e.buffer = d;
                    e.connect(c.destination);
                    "undefined" === typeof e.start ? e.noteOn(0) : e.start(0);
                    setTimeout(function() {
                        (e.playbackState === e.PLAYING_STATE || e.playbackState === e.FINISHED_STATE) && window.removeEventListener("touchend", b, !1)
                    }, 0)
                };
                window.addEventListener("touchend", b, !1)
            }
        },
        initHTML5Audio: function(b) {
            if (this.useHTML5Audio && this.audio) {
                var c = this.audio;
                this.codecs = {};
                this.codecs = {
                    mp3: !!c.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
                    m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
                };
                this.is = {
                    ff: Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
                    ie: Boolean(document.all && !window.opera),
                    opera: Boolean(window.opera),
                    chrome: Boolean(window.chrome),
                    safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
                };
                this.playDelay = -60;
                this.stopDelay = 30;
                this.is.chrome && (this.playDelay = -25);
                this.is.chrome && (this.stopDelay = 25);
                this.is.ff && (this.playDelay = -25);
                this.is.ff && (this.stopDelay = 85);
                this.is.opera && (this.playDelay = 5);
                this.is.opera && (this.stopDelay = 0);
                for (var d in b) {
                    this.soundList[d] = d;
                    var e = b[d].path,
                        c = e + "." + ig.Sound.FORMAT.OGG.ext,
                        e = e + "." + ig.Sound.FORMAT.MP3.ext,
                        f = null;
                    this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? f = c : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (f = e);
                    if (f) {
                        ig.ua.mobile ? ig.ua.iOS && (f = e) : (b = navigator.userAgent.toLowerCase(), -1 != b.indexOf("safari") && -1 >= b.indexOf("chrome") && (f = e));
                        this.audio.addEventListener("error", function() {
                            this.audio.error && 4 === this.audio.error.code && (this.isSupported = !1)
                        }, !1);
                        this.audio.src = f;
                        this.audio._pos = 0;
                        this.audio.preload = "auto";
                        this.audio.volume = this._volume;
                        this.inactiveAudio = new Audio;
                        this.inactiveAudio.src = f;
                        this.inactiveAudio._pos = 0;
                        this.inactiveAudio.preload = "auto";
                        this.inactiveAudio.volume = this._volume;
                        this.inactiveAudio.load();
                        var l = function() {
                            this._duration = this.audio.duration;
                            this._loaded || (this._loaded = !0);
                            this.bgmPlaying ? this.play() : this.stop();
                            this.audio.removeEventListener("canplaythrough", l, !1)
                        }.bind(this);
                        this.audio.addEventListener("canplaythrough", l, !1);
                        this.audio.load();
                        break
                    }
                }
            }
        },
        play: function(b) {
            if (this.isSupported)
                if (this.bgmPlaying = !0, this.webaudio)
                    if (this.webaudio.buffer) {
                        if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
                            this.webaudio.source_loop = this.webaudio.context.createBufferSource();
                            this.webaudio.source_loop.buffer = this.webaudio.buffer;
                            this.webaudio.source_loop.loop = !0;
                            this.webaudio.source_loop.connect(this.webaudio.gainNode);
                            isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime));
                            this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
                            if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration - b));
                            else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
                            this.webaudio.source_loop._playing = !0
                        }
                    } else this.bgmPlaying = !0;
            else if (this.audio) {
                var c = this.audio;
                if (!this.muteFlag) {
                    this.bgmPlaying = !0;
                    isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime));
                    var d = this._duration - b;
                    this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null);
                    this._onEndTimer = setTimeout(function() {
                        this.audio.currentTime = 0;
                        this.audio.pause();
                        this.pausedTime = 0;
                        if (this.inactiveAudio) {
                            var b = this.audio;
                            this.audio = this.inactiveAudio;
                            this.inactiveAudio = b
                        }
                        this.play()
                    }.bind(this), 1E3 * d + this.playDelay);
                    4 === c.readyState || !c.readyState && navigator.isCocoonJS ? (c.readyState = 4, c.currentTime = b, c.muted = this.muteFlag || c.muted, c.volume = this._volume, setTimeout(function() {
                        c.play()
                    }, 0)) : (clearTimeout(this._onEndTimer), this._onEndTimer = null, function() {
                        var b = function() {
                            this.play();
                            c.removeEventListener("canplaythrough", b, !1)
                        }.bind(this);
                        c.addEventListener("canplaythrough", b, !1)
                    }())
                }
            }
        },
        stop: function() {
            this.bgmPlaying = !1;
            if (this.isSupported)
                if (this.webaudio) {
                    if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0)
                } else if (this.audio) {
                var b = this.audio;
                b.currentTime && (this.pausedTime = b.currentTime, b.currentTime = 0, b.pause(), clearTimeout(this._onEndTimer), this._onEndTimer = null)
            }
        },
        volume: function(b) {
            this.isSupported && (this._volume = b, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)))
        },
        getVolume: function() {
            return !this.isSupported ? 0 : this._volume
        },
        mute: function() {
            !1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0))
        },
        unmute: function() {
            !0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play())
        }
    })
});
ig.baked = !0;
ig.module("impact.sound-handler").requires("plugins.webaudio-music-player").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        formats: {
            ogg: ".ogg",
            mp3: ".mp3"
        },
        jukebox: null,
        pausePosition: null,
        globalMute: !1,
        forceMuted: !1,
        muted: !1,
        bgmStarted: !1,
        bgmPlaying: !1,
        soundPlaying: !1,
        currentSoundPlaying: null,
        soundBuffer: [],
        voSoundLoaded: [],
        sfxSoundLoaded: [],
        SOUNDID: {},
        voSoundsToLoad: [],
        sfxSoundsToLoad: [{
            name: "static",
            path: "media/audio/play/static"
        }, {
            name: "kittyopeningSound",
            path: "media/audio/opening/kittyopening"
        }, {
            name: "bosscannon",
            path: "media/audio/bosscannon"
        }, {
            name: "cannon",
            path: "media/audio/cannon"
        }, {
            name: "click",
            path: "media/audio/click"
        }, {
            name: "coins",
            path: "media/audio/coins"
        }, {
            name: "death",
            path: "media/audio/death"
        }, {
            name: "hit",
            path: "media/audio/hit"
        }, {
            name: "laser_beam",
            path: "media/audio/laser_beam"
        }, {
            name: "machinegun",
            path: "media/audio/machinegun"
        }, {
            name: "projectileshoot",
            path: "media/audio/projectileshoot"
        }, {
            name: "reload",
            path: "media/audio/reload"
        }, {
            name: "repair",
            path: "media/audio/repair"
        }, {
            name: "screenshake",
            path: "media/audio/screenshake"
        }, {
            name: "shot",
            path: "media/audio/shot"
        }, {
            name: "shotgun",
            path: "media/audio/shotgun"
        }, {
            name: "softexplosion",
            path: "media/audio/softexplosion"
        }, {
            name: "tankshoot",
            path: "media/audio/tankshoot"
        }],
        debug: !1,
        init: function() {
            this.initSfx();
            ig.ua.mobile ? this.setupJukebox() : this.setupDesktopMusic();
            this.setupWindowHandler()
        },
        fnSetupMusic: function() {
            ig.game.webaudioPlugin = new WebaudioMusicPlayer({
                bgm: {
                    path: "media/audio/bgm"
                }
            });
            this.playBackgroundMusic()
        },
        visChangeSoundCheck: function() {
            this.soundMute ? this.fnMute() : this.fnUnmute();
            this.bgmMute ? this.fnMute("bgm") : this.fnUnmute("bgm")
        },
        fnMuteAll: function() {
            this.fnMute();
            this.fnMute("bgm")
        },
        fnUnmuteAll: function() {
            this.fnUnmute();
            this.fnUnmute("bgm")
        },
        fnMute: function(b) {
            switch (b || "sound") {
                case "sound":
                    this.soundMute || (this.soundMute = !0);
                    ig.soundHandler._muteSounds();
                    break;
                case "bgm":
                    this.bgmMute || (this.bgmMute = !0), ig.soundHandler._muteBackgroundMusic()
            }
        },
        fnUnmute: function(b) {
            switch (b || "sound") {
                case "sound":
                    this.soundMute && (this.soundMute = !1);
                    ig.soundHandler._unMuteSounds();
                    break;
                case "bgm":
                    this.bgmMute && (this.bgmMute = !1), ig.soundHandler._unMuteBackgroundMusic()
            }
        },
        allVoSoundLoaded: function() {
            if (this.voSoundLoaded.length >= this.voSoundsToLoad.length) {
                this.debug && console.log("Vo ready");
                for (index = 0; index < this.voSoundLoaded.length; index++) this.voSoundLoaded[index].on("end", function(b) {
                    b.isPlaying = !1;
                    this.soundBuffer.pop()
                }.bind(this, this.voSoundLoaded[index])), this.voSoundLoaded[index].on("play", function(b) {
                    b.isPlaying = !0
                }.bind(this, this.voSoundLoaded[index]));
                return !0
            }
            return !1
        },
        allSfxSoundLoaded: function() {
            return this.sfxSoundLoaded.length >= this.sfxSoundsToLoad.length ? !0 : !1
        },
        stopBackgroundMusic: function() {
            ig.game && ig.game.webaudioPlugin && ig.game.webaudioPlugin.stop();
            this.bgmPlaying = !1
        },
        playBackgroundMusic: function() {
            this.bgmPlaying || (this.bgmStarted = !0, ig.game && ig.game.webaudioPlugin && ig.game.webaudioPlugin.play(), this._unMuteBackgroundMusic(), this.bgmPlaying = !0)
        },
        playSound: function(b) {
            if ((b = this[b]) && (!this.forceMuted || !this.muted) && !b.isPlaying) this.soundBuffer.push(b), b.play()
        },
        stopAllAndPlaySound: function(b) {
            this.stopAllSounds();
            this.playSound(b)
        },
        stopAllSounds: function() {
            for (index = 0; index < this.soundBuffer.length; index++) this.soundBuffer[index].isPlaying = !1, this.soundBuffer.splice(0, 1)[0].stop()
        },
        addSound: function(b, c, d, e) {
            e = e || !1;
            var f = c + this.formats.ogg;
            c += this.formats.mp3;
            this.SOUNDID[b] = b;
            this[b] = d ? new Howl({
                src: [f, c],
                onload: d,
                loop: e
            }) : new Howl({
                src: [f, c],
                loop: e
            })
        },
        _muteSounds: function() {
            for (i = 0; i < ig.resources.length; i++) ig.resources[i].multiChannel && ig.resources[i].stop();
            Howler.mute(!0);
            this.debug && console.log("Sounds muted")
        },
        _unMuteSounds: function() {
            Howler.mute(!1);
            ig.Sound.enabled = !0;
            this.debug && console.log("Sounds can play")
        },
        _muteBackgroundMusic: function() {
            ig.game && ig.game.webaudioPlugin.mute();
            this.debug && console.log("BGM muted")
        },
        _unMuteBackgroundMusic: function() {
            this.bgmStarted && (ig.game && ig.game.webaudioPlugin.unmute(), this.debug && console.log("BGM can play"))
        },
        focusBlurMute: function() {
            this.forceMuted || this.mute()
        },
        focusBlurUnmute: function() {
            this.forceMuted || this.unmute()
        },
        supports_local_storage: function() {
            try {
                return localStorage.setItem("test", "test"), localStorage.removeItem("test"), "localStorage" in window && null !== window.localStorage
            } catch (b) {
                return !1
            }
        },
        setForceMuted: function(b) {
            this.forceMuted = b
        },
        mute: function() {
            this.muted || (this._muteSounds(), this._muteBackgroundMusic(), this.muted = !0, this.bgmPlaying = !1)
        },
        unmute: function() {
            this.muted && (this._unMuteSounds(), this._unMuteBackgroundMusic(), this.muted = !1, this.bgmPlaying = !0)
        },
        setupWindowHandler: function() {
            "true" === getQueryVariable("webview") ? ($(window).focus(function() {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute();
                ig.soundHandler && ig.soundHandler.visChangeSoundCheck()
            }), $(window).blur(function() {
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            })) : (window.onfocus = function() {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute();
                ig.soundHandler && ig.soundHandler.visChangeSoundCheck()
            }, window.onblur = function() {
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            })
        },
        initSfx: function() {
            for (index = 0; index < this.sfxSoundsToLoad.length; index++) {
                var b = function(b) {
                    this.sfxSoundLoaded.push(this[b])
                }.bind(this, this.sfxSoundsToLoad[index].name);
                this.addSound(this.sfxSoundsToLoad[index].name, this.sfxSoundsToLoad[index].path, b, this.sfxSoundsToLoad[index].loop || !1)
            }
        },
        initVoSfx: function() {
            for (index = 0; index < this.voSoundsToLoad.length; index++) {
                var b = function(b) {
                    this.voSoundLoaded.push(this[b])
                }.bind(this, this.voSoundsToLoad[index].name);
                this.addSound(this.voSoundsToLoad[index].name, this.voSoundsToLoad[index].path, b, this.sfxSoundsToLoad[index].loop || !1)
            }
        },
        setupDesktopMusic: function() {},
        setupJukebox: function() {
            ig.ua.mobile && (this.jukebox = new ig.Jukebox, this.pausePosition = this.jukebox.player.settings.spritemap.music.start)
        },
        forceLoopBGM: function() {
            this.bgmStarted && this.bgmPlaying && !this.muted && !this.forceMuted && this.jukebox && this.jukebox.player && (0 <= this.jukebox.player.getCurrentTime() ? this.jukebox.player.settings.spritemap.music && this.jukebox.player.settings.spritemap.music.loop ? this.jukebox.player.getCurrentTime() > this.jukebox.player.settings.spritemap.music.end && this.jukebox.player.resume(this.jukebox.player.settings.spritemap.music.start) : this.jukebox.player.isPlaying && this.jukebox.player.isPlaying.loop ? this.jukebox.player.getCurrentTime() > this.jukebox.player.isPlaying.end && this.jukebox.player.resume(this.jukebox.player.isPlaying.start) : this.jukebox.player.backgroundMusic && this.jukebox.player.backgroundMusic.loop && this.jukebox.player.getCurrentTime() > this.jukebox.player.backgroundMusic.end && this.jukebox.player.resume(this.jukebox.player.backgroundMusic.start) : this.pausePosition ? this.jukebox.player.setCurrentTime(this.pausePosition) : this.jukebox.player.setCurrentTime(this.jukebox.player.settings.spritemap.music.start))
        },
        setSfxVolume: function(b) {
            this.sfxVolume = b;
            Howler.volume(this.sfxVolume)
        },
        setMusicVolume: function(b) {
            this.musicVolume = b;
            ig.game.webaudioPlugin.volume(this.musicVolume)
        }
    })
});

function getHiddenProp() {
    var b = ["webkit", "moz", "ms", "o"];
    if ("hidden" in document) return "hidden";
    for (var c = 0; c < b.length; c++)
        if (b[c] + "Hidden" in document) return b[c] + "Hidden";
    return null
}

function isHidden() {
    var b = getHiddenProp();
    return !b ? !1 : document[b]
}
var visProp = getHiddenProp();
if (visProp) {
    var evtname = visProp.replace(/[H|h]idden/, "") + "visibilitychange";
    document.addEventListener(evtname, visChange)
}
window.addEventListener("pagehide", function() {
    ig.soundHandler && ig.soundHandler.focusBlurMute()
}, !1);
window.addEventListener("pageshow", function() {
    ig.ua.mobile && ig.game && ig.game.resumeGame();
    ig.soundHandler && ig.soundHandler.focusBlurUnmute();
    ig.soundHandler && ig.soundHandler.visChangeSoundCheck()
}, !1);

function visChange() {
    isHidden() ? ig.soundHandler && ig.soundHandler.focusBlurMute() : (ig.ua.mobile && ig.game && ig.game.resumeGame(), ig.soundHandler && ig.soundHandler.focusBlurUnmute(), ig.soundHandler && ig.soundHandler.visChangeSoundCheck())
}
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound", "impact.sound-handler").defines(function() {
    ig.main = function(b, c, d, e, f, l, q) {
        ig.system = new ig.System(b, d, e, f, l || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        ig.soundHandler = new ig.SoundHandler;
        (new(q || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(b, c, d, e) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!e;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(b) {
            this.timer.set(this.frameTime * -b - 1E-4);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            if (this.frame == this.sequence.length - 1 && "function" == typeof this.onEnd) this.onEnd();
            this.tile = this.sequence[this.frame]
        },
        draw: function(b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || (c > ig.system.height || 0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(b, c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = b;
            this.pos.y = this.last.y = c;
            ig.merge(this, d)
        },
        reset: function(b, c, d) {
            var e = this.constructor.prototype;
            this.pos.x = b;
            this.pos.y = c;
            this.last.x = b;
            this.last.y = c;
            this.vel.x = e.vel.x;
            this.vel.y = e.vel.y;
            this.accel.x = e.accel.x;
            this.accel.y = e.accel.y;
            this.health = e.health;
            this._killed = e._killed;
            this.standing = e.standing;
            this.type = e.type;
            this.checkAgainst = e.checkAgainst;
            this.collides = e.collides;
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, e) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                b + " to.";
            c = new ig.Animation(this.animSheet, c, d, e);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(b, c, d, e) {
            return c ? (b + c * ig.system.tick).limit(-e, e) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-e, e)
        },
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function(b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function(b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function(b) {
            return Math.atan2(b.pos.y +
                b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {},
        erase: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && (c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE) && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision = function(b, c) {
        var d = null;
        if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
        else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
        b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c, b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
    };
    ig.Entity.seperateOnXAxis = function(b, c, d) {
        var e = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -e : e, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -e / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var e = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var f = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, f = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, f, d == b ? -e : e, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness && b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, f = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, f, -e / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, e / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function(b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length
        },
        getTile: function(b, c) {
            var d = Math.floor(b / this.tilesize),
                e = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= e && e < this.height ? this.data[e][d] : 0
        },
        setTile: function(b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c / this.tilesize);
            0 <= b && b < this.width && (0 <= c && c < this.height) && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, f) {
            this.parent(b, c);
            this.tiledef = f || ig.CollisionMap.defaultTileDef;
            for (var l in this.tiledef) l | 0 > this.lastSlope && (this.lastSlope = l | 0)
        },
        trace: function(b, c, f, l, q, r) {
            var g = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: b,
                        y: c
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                m = Math.ceil(Math.max(Math.abs(f), Math.abs(l)) / this.tilesize);
            if (1 < m)
                for (var n = f / m, p = l / m, s = 0; s < m && (n || p) && !(this._traceStep(g, b, c, n, p, q, r, f, l, s), b = g.pos.x, c = g.pos.y, g.collision.x && (f = n = 0), g.collision.y && (l = p = 0), g.collision.slope); s++);
            else this._traceStep(g, b, c, f, l, q, r, f, l, 0);
            return g
        },
        _traceStep: function(b, c, f, l, q, r, g, m, n, p) {
            b.pos.x += l;
            b.pos.y += q;
            var s = 0;
            if (l) {
                var u = 0 < l ? r : 0,
                    t = 0 > l ? this.tilesize : 0,
                    s = Math.max(Math.floor(f / this.tilesize), 0),
                    y = Math.min(Math.ceil((f + g) / this.tilesize), this.height);
                l = Math.floor((b.pos.x + u) / this.tilesize);
                var G = Math.floor((c + u) / this.tilesize);
                if (0 < p || l == G || 0 > G || G >= this.width) G = -1;
                if (0 <= l && l < this.width)
                    for (var F = s; F < y && !(-1 != G && (s = this.data[F][G], 1 < s && s <= this.lastSlope && this._checkTileDef(b, s, c, f, m, n, r, g, G, F))); F++)
                        if (s = this.data[F][l], 1 == s || s > this.lastSlope || 1 < s && this._checkTileDef(b, s, c, f, m, n, r, g, l, F)) {
                            if (1 < s && s <= this.lastSlope && b.collision.slope) break;
                            b.collision.x = !0;
                            b.tile.x = s;
                            c = b.pos.x = l * this.tilesize - u + t;
                            m = 0;
                            break
                        }
            }
            if (q) {
                u = 0 < q ? g : 0;
                q = 0 > q ? this.tilesize : 0;
                s = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                t = Math.min(Math.ceil((b.pos.x + r) / this.tilesize), this.width);
                F = Math.floor((b.pos.y + u) / this.tilesize);
                y = Math.floor((f + u) / this.tilesize);
                if (0 < p || F == y || 0 > y || y >= this.height) y = -1;
                if (0 <= F && F < this.height)
                    for (l = s; l < t && !(-1 != y && (s = this.data[y][l], 1 < s && s <= this.lastSlope && this._checkTileDef(b, s, c, f, m, n, r, g, l, y))); l++)
                        if (s = this.data[F][l], 1 == s || s > this.lastSlope || 1 < s && this._checkTileDef(b, s, c, f, m, n, r, g, l, F)) {
                            if (1 < s && s <= this.lastSlope && b.collision.slope) break;
                            b.collision.y = !0;
                            b.tile.y = s;
                            b.pos.y = F * this.tilesize - u + q;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, f, l, q, r, g, m, n, p) {
            var s = this.tiledef[c];
            if (!s) return !1;
            c = (s[2] -
                s[0]) * this.tilesize;
            var u = (s[3] - s[1]) * this.tilesize,
                t = s[4];
            g = f + q + (0 > u ? g : 0) - (n + s[0]) * this.tilesize;
            m = l + r + (0 < c ? m : 0) - (p + s[1]) * this.tilesize;
            if (0 < c * m - u * g) {
                if (0 > q * -u + r * c) return t;
                n = Math.sqrt(c * c + u * u);
                p = u / n;
                n = -c / n;
                var y = g * p + m * n,
                    s = p * y,
                    y = n * y;
                if (s * s + y * y >= q * q + r * r) return t || 0.5 > c * (m - r) - u * (g - q);
                b.pos.x = f + q - s;
                b.pos.y = l + r - y;
                b.collision.slope = {
                    x: c,
                    y: u,
                    nx: p,
                    ny: n
                };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0, 1, 1, 0, !0],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0, 0, b, !0],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(b, c, f, l) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + f,
                    y: c + l
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function(b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(b, c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function() {
            var b = this.width * this.tilesize * ig.system.scale,
                c = this.height * this.tilesize * ig.system.scale,
                d = Math.ceil(b / this.chunkSize),
                e = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var f = 0; f < e; f++) {
                this.preRenderedChunks[f] = [];
                for (var l = 0; l < d; l++) this.preRenderedChunks[f][l] = this.preRenderChunk(l, f, l == d - 1 ? b - l * this.chunkSize : this.chunkSize, f == e - 1 ? c - f * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(b, c, d, e) {
            var f = d / this.tilesize / ig.system.scale + 1,
                l = e / this.tilesize / ig.system.scale + 1,
                q = b * this.chunkSize / ig.system.scale % this.tilesize,
                r = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var g = ig.$new("canvas");
            g.width = d;
            g.height = e;
            d = ig.system.context;
            ig.system.context = g.getContext("2d");
            for (e = 0; e < f; e++)
                for (var m = 0; m < l; m++)
                    if (e + b < this.width && m + c < this.height) {
                        var n = this.data[m + c][e + b];
                        n && this.tiles.drawTile(e * this.tilesize - q, m * this.tilesize - r, n - 1, this.tilesize)
                    }
            ig.system.context = d;
            return g
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
                c = ig.system.getDrawPos(this.scroll.y);
            this.repeat && (b %= this.width * this.tilesize * ig.system.scale, c %= this.height * this.tilesize * ig.system.scale);
            var d = Math.max(Math.floor(b / this.chunkSize), 0),
                e = Math.max(Math.floor(c / this.chunkSize), 0),
                f = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                l = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                q = this.preRenderedChunks[0].length,
                r = this.preRenderedChunks.length;
            this.repeat || (f = Math.min(f, q), l = Math.min(l, r));
            for (var g = 0; e < l; e++) {
                for (var m = 0, n = d; n < f; n++) {
                    var p = this.preRenderedChunks[e % r][n % q],
                        s = -b + n * this.chunkSize - m,
                        u = -c + e * this.chunkSize - g;
                    ig.system.context.drawImage(p, s, u);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(s, u, this.chunkSize, this.chunkSize));
                    this.repeat && (p.width < this.chunkSize && s + p.width < ig.system.realWidth) && (m = this.chunkSize - p.width, f++)
                }
                this.repeat && (p.height < this.chunkSize && u + p.height < ig.system.realHeight) && (g = this.chunkSize - p.height, l++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(), e = (this.scroll.y / this.tilesize).toInt(), f = this.scroll.x % this.tilesize, l = this.scroll.y % this.tilesize, q = -f - this.tilesize, f = ig.system.width + this.tilesize -
                f, r = ig.system.height + this.tilesize - l, g = -1, l = -l - this.tilesize; l < r; g++, l += this.tilesize) {
                var m = g + e;
                if (m >= this.height || 0 > m) {
                    if (!this.repeat) continue;
                    m = 0 < m ? m % this.height : (m + 1) % this.height + this.height - 1
                }
                for (var n = -1, p = q; p < f; n++, p += this.tilesize) {
                    b = n + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = 0 < b ? b % this.width : (b + 1) % this.width + this.width - 1
                    }
                    if (b = this.data[m][b])(c = this.anims[b - 1]) ? c.draw(p, l) : this.tiles.drawTile(p, l, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !0,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++)
                if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    e.anims = this.backgroundAnims[d.tilesetName] || {};
                    e.repeat = d.repeat;
                    e.distance = d.distance;
                    e.foreground = !!d.foreground;
                    e.preRender = !!d.preRender;
                    e.name = d.name;
                    this.backgroundMaps.push(e)
                }
            for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
        },
        loadLevelDeferred: function(b) {
            this._levelToLoad = b
        },
        getMapByName: function(b) {
            if ("collision" == b) return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++)
                if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function(b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function(b) {
            b = "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var e = this.entities[d];
                e instanceof b && !e._killed && c.push(e)
            }
            return c
        },
        spawnEntity: function(b, c, d, e) {
            var f = "string" === typeof b ? ig.global[b] : b;
            if (!f) throw "Can't spawn entity of type " + b;
            b = new f(c, d, e || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(b) {
            b.name && delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            if (this._doSortEntities || this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                    d;
                for (d in b) b[d].update()
            }
        },
        updateEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c = this.backgroundMaps[b];
                if (c.foreground) break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
        },
        drawEntities: function() {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
        },
        checkEntities: function() {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var e = {}, f = Math.floor(d.pos.y / this.cellSize), l = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, q = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, r = Math.floor(d.pos.x / this.cellSize); r < l; r++)
                        for (var g = f; g < q; g++)
                            if (b[r])
                                if (b[r][g]) {
                                    for (var m = b[r][g], n = 0; n < m.length; n++) d.touches(m[n]) && !e[m[n].id] && (e[m[n].id] = !0, ig.Entity.checkPair(d, m[n]));
                                    m.push(d)
                                } else b[r][g] = [d];
                else b[r] = {}, b[r][g] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(b, c) {
            return b.zIndex - c.zIndex
        },
        POS_X: function(b, c) {
            return b.pos.x + b.size.x - (c.pos.x +
                c.size.x)
        },
        POS_Y: function(b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        loadingImage: new ig.Image("media/graphics/splash/loading.png"),
        loadingBarImage: new ig.Image("media/graphics/splash/loading-bar.png"),
        loadingTextImage: new ig.Image("media/graphics/splash/loading-text.png"),
        splashPortrait: new ig.Image("media/graphics/splash/portrait.jpg"),
        init: function(b, c) {
            this.parent(b, c);
        },
        end: function() {
            this.parent();
            var b = 0 <= document.URL.indexOf("localhost") ? 500 : 3E3;
            window.setTimeout("ig.system.setGame(MyGame)", b)
        },
        setupCustomAnimation: function() {
            this.customAnim = new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function() {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame = 0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        draw: function() {
            if (this.splashPortrait.loaded && (this._drawStatus += (this.status - this._drawStatus) / 5, ig.system.context.fillStyle = "#000", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), this.splashPortrait.draw(0, 0), this.loadingImage.loaded && this.loadingBarImage.loaded && this.loadingTextImage.loaded)) {
                var b;
                b = 0.5 * ig.system.width - 191.5;
                this.loadingImage.draw(b, 581);
                this.loadingBarImage.draw(b, 581, 0, 0, 383 * this._drawStatus, 56);
                this.loadingTextImage.draw(b, 581)
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var c = 0; c < this.length; ++c)
            if (this[c] === b) return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens = b
        }
    };
    ig.Entity.prototype.tween = function(b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function(b) {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
    };
    ig.Tween = function(b, c, d, e) {
        var f = {},
            l = {},
            q = {},
            r = 0,
            g = !1,
            m = !1,
            n = !1;
        this.duration = d;
        this.paused = this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, e);
        this.loopNum = this.loopCount;
        this.chain = function(b) {
            n = b
        };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, e) {
            if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (e[b] = d[b]);
            else
                for (subprop in d[b]) e[b] || (e[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop, c[b], d[b], e[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            r = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            m = !0;
            g = new ig.Timer;
            for (var d in c) this.initEnd(d, c, l);
            for (d in l) this.initStart(d, l, b, f), this.initDelta(d, q, b, l)
        };
        this.initDelta = function(b, c, d, e) {
            if ("object" !== typeof e[b]) c[b] = e[b] - d[b];
            else
                for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b])
        };
        this.propUpdate = function(b, c, d, e, f) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ? d[b] + e[b] * f : c[b];
            else
                for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], f)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!m) return !1;
            if (this.delay) {
                if (g.delta() < this.delay) return;
                this.delay = 0;
                g.reset()
            }
            if (this.paused || this.complete) return !1;
            var c = (g.delta() + r) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in q) this.propUpdate(property, b, f, q, d);
            if (1 <= c) {
                if (0 == this.loopNum || !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    n && n.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in f) this.propSet(property, f, b);
                    r = 0;
                    g.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, l);
                    ig.merge(d, f);
                    ig.merge(f, c);
                    ig.merge(l, d);
                    for (property in l) this.initDelta(property, q, b, l);
                    r = 0;
                    g.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            r += g.delta()
        };
        this.resume = function() {
            this.paused = !1;
            g.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, r += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(b) {
        return -b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
    };
    ig.Tween.Easing.Cubic.EaseIn = function(b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function(b) {
        return --b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function(b) {
        return -(--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn = function(b) {
        return b * b * b * b * b
    };
    ig.Tween.Easing.Quintic.EaseOut = function(b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
        return -Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(b) {
        return 0 == b ? 0 : Math.pow(2, 10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / e))
    };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin((b - c) * 2 * Math.PI / e) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / e) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / e) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn = function(b) {
        return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
    };
    ig.Tween.Easing.Bounce.EaseOut = function(b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b) switch (b) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (b = getQueryVariable("debug")) switch (b) {
                case "true":
                    ig.game.debug = !0, ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.jukebox").defines(function() {
    ig.Jukebox = ig.Class.extend({
        init: function() {
            this.player = new jukebox.Player({
                resources: ["media/audio/bgm.mp3", "media/sounds/bgm.ogg"],
                autoplay: !1,
                spritemap: {
                    music: {
                        start: 0,
                        end: 18.108,
                        loop: !0
                    }
                }
            })
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function(b) {
            for (key in dynamicClickableEntityDivs) ig.game.hideOverlay([key]);
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function(b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function(b) {
            newLevels = [];
            return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length -
                1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                d == QUOTA_EXCEEDED_ERR && console.log("localStorage quota exceeded")
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.storage-manager").requires("impact.game").defines(function() {
    ig.Game.prototype.name = "MJS-Game";
    ig.Game.prototype.version = "1.0";
    ig.Game.prototype.sessionData = {};
    ig.Game.prototype.initData = function() {
        return this.sessionData = {
            sound: 0.5,
            music: 0.5,
            level: 1,
            score: 0
        }
    };
    ig.Game.prototype.setupStorageManager = function() {
        if ("undefined" === typeof this.name) console.error("Cannot found Game Name, Storage Manager Cancelled.");
        else if ("undefined" === typeof this.version) console.error("Cannot found Game Version, Storage Manager Cancelled.");
        else {
            console.log("Plug in Storage Manager");
            try {
                window.localStorage.setItem("test", "test"), this.storage = new ig.Storage
            } catch (b) {
                console.log("using fake storage"), this.storage = new ig.FakeStorage
            } finally {
                window.localStorage.removeItem("test")
            }
            this.storageName = this.name + "-v" + this.version
        }
    };
    ig.Game.prototype.loadAll = function() {
        var b = this.storage.get(this.storageName);
        if (null === b || "undefined" === typeof b) b = this.initData();
        for (var c in b) this.sessionData[c] = b[c];
        this.storage.set(this.storageName, b)
    };
    ig.Game.prototype.saveAll = function() {
        var b = this.storage.get(this.storageName),
            c;
        for (c in b) b[c] = this.sessionData[c];
        this.storage.set(this.storageName, b)
    };
    ig.Game.prototype.load = function(b) {
        return this.storage.get(this.storageName)[b]
    };
    ig.Game.prototype.save = function(b, c) {
        var d = this.storage.get(this.storageName);
        d[b] = c;
        this.storage.set(this.storageName, d)
    }
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0)
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splashlogo: new ig.Image("branding/logo.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.pos.x = ig.system.width / 2;
            this.pos.y = ig.system.height / 2 - ig.system.height;
            b = this.tween({
                pos: {
                    y: ig.system.height / 2
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            c = this.tween({}, 2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start()
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, !0)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var f = ig.$new("div");
            f.id = b;
            document.body.appendChild(f);
            $("#" + f.id).css("float", "left");
            $("#" + f.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var l = window.innerHeight / mobileHeight,
                    q = window.innerWidth / mobileWidth;
                $("#" + f.id).css("left", this.pos.x * q);
                $("#" + f.id).css("top", this.pos.y * l);
                $("#" + f.id).css("width", this.size.x * q);
                $("#" + f.id).css("height", this.size.y * l)
            } else l = w / 2 - destW / 2, q = h / 2 - destH / 2, console.log(l, q), $("#" + f.id).css("left", l + this.pos.x * multiplier), $("#" + f.id).css("top", q + this.pos.y * multiplier), $("#" + f.id).css("width", this.size.x * multiplier), $("#" + f.id).css("height", this.size.y * multiplier);
            e ? $("#" + f.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + f.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#e1ebf1";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            this.splashlogo.draw(this.pos.x - this.splashlogo.width / 2, this.pos.y - this.splashlogo.height / 2);
            this.parent()
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.lagged-api").requires("impact.game", "impact.timer").defines(function() {
    ig.Game.inject({
        laggedAdShown: !1,
        laggedTimer: !1,
        laggedNomoreTimer: !1,
        laggedNomoreTimerDuration: 0,
        initLagged: function(b, c) {
            // LaggedAPI.init(b, c)
        },
        saveLaggedAward: function(b) {
            var c = [];
            c.push(b);
            // LaggedAPI.Achievements.save(c, function(b) {
            //     b.success ? console.log("achievement saved") : console.log(b.errormsg)
            // })
        },
        saveLaggedHighscore: function(b, c) {
            console.log(c);
            var d = {};
            d.score = c;
            d.board = b;
            // LaggedAPI.Scores.save(d, function(b) {
            //     b.success ? console.log("high score saved") : console.log(b.errormsg)
            // })
        },
        initLaggedAdTimer: function(b, c, d, e) {
            b && (this.laggedTimerDuration = b, this.laggedTimerId = c, this.laggedTimerIdImage = d);
            e && (this.laggedTimerAdOnComplete = e);
            this.laggedTimer = new ig.Timer(this.laggedTimerDuration)
        },
        update: function() {
            this.parent();
            this.laggedTimer && 0 < this.laggedTimer.delta()
            // && (this.fnShowLaggedAd(this.laggedTimerId, this.laggedTimerIdImage, this.laggedTimerAdOnComplete || !1),
                // this.initLaggedAdTimer())
        },
        initLaggedNomoreTimer: function() {
            this.laggedNomoreTimer = new ig.Timer(this.laggedNomoreTimerDuration)
        },
        fnShowLaggedAd: function(b, c, d) {
            // if (!this.laggedAdShown) {
            //     if (this.laggedNomoreTimerDuration) {
            //         if (this.laggedNomoreTimer && 0 > this.laggedNomoreTimer.delta()) return;
            //         this.initLaggedNomoreTimer()
            //     }
            //     this.laggedAdShown = !0;
            //     "undefined" === typeof prerollStart ? console.log("skip ad, prerollStart not found") : LaggedAPI.APIAds.show("interstitial", b, c, function(b) {
            //         b.success ? (this.laggedAdShown = !1, console.log("ad done")) : (this.laggedAdShown = !1, console.log("ad error, continue"));
            //         d && "function" === typeof d && d()
            //     }.bind(this))
            // }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else b = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: b,
                        centralize: centralize
                    })
                } catch (e) {
                    console.log(e)
                }
                this.kill()
            }
        }
    })
});
this.START_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.branding-logo").requires("impact.entity").defines(function() {
    EntityBrandingLogo = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        size: {
            x: 141,
            y: 20
        },
        zIndex: 1099,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.Branding.Logo.Enabled ? (this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, d && d.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ..."))) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle;
            d ? (console.log("branding settings found ... using that div layer name"), b = d.div_layer_name) : b = "branding-logo";
            _SETTINGS.Branding.Logo.LinkEnabled && (console.log("logo link enabled"), this.checkClickableLayer(b, _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow));
            console.log("branding logo spawed ...")
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var f = ig.$new("div");
            f.id = b;
            document.body.appendChild(f);
            $("#" + f.id).css("float", "left");
            $("#" + f.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var l = window.innerHeight / mobileHeight,
                    q = window.innerWidth / mobileWidth;
                $("#" + f.id).css("left", this.pos.x * q);
                $("#" + f.id).css("top", this.pos.y * l);
                $("#" + f.id).css("width", this.size.x * q);
                $("#" + f.id).css("height", this.size.y * l)
            } else l = w / 2 - destW / 2, q = h / 2 - destH / 2, console.log(l, q), $("#" + f.id).css("left", l + this.pos.x * multiplier), $("#" + f.id).css("top", q + this.pos.y * multiplier), $("#" + f.id).css("width", this.size.x * multiplier), $("#" + f.id).css("height", this.size.y * multiplier);
            e ? $("#" + f.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" +
                d + "'></a>") : $("#" + f.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
this.END_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.button-more-games").requires("impact.entity").defines(function() {
    EntityButtonMoreGames = ig.Entity.extend({
        size: {
            x: 220,
            y: 52
        },
        zIndex: 1750,
        hidden: !1,
        image: new ig.Image("media/graphics/game/ui/mainmenu/moregames.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.offset.y = -(ig.system.height - c + 54);
            this.tween({
                offset: {
                    y: 0
                }
            }, 1, {
                easing: ig.Tween.Easing.Elastic.EaseOut
            }).start()
        },
        ready: function() {
            setTimeout(this.spawnDiv(), 5)
        },
        spawnDiv: function() {
            this.canSpawnDiv || (this.canSpawnDiv = !0, _SETTINGS.MoreGames.Enabled ? this.checkClickableLayer(this.divLayerName ? this.divLayerName : "more-games", _SETTINGS.MoreGames.Link, _SETTINGS.MoreGames.NewWindow) : this.kill())
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c), ig.ua.mobile ? (c = window.innerHeight / mobileHeight, d = window.innerWidth / mobileWidth, $("#" + b).css("left", this.pos.x * d), $("#" + b).css("top", this.pos.y * c), $("#" + b).css("width", this.size.x * d), $("#" + b).css("height", this.size.y * c)) : (c = document.getElementById("game").offsetLeft, d = document.getElementById("game").offsetTop, $("#" + b).css("left", c + this.pos.x * multiplier), $("#" + b).css("top", d + this.pos.y * multiplier), $("#" + b).css("width", this.size.x * multiplier), $("#" + b).css("height", this.size.y * multiplier))) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var f = ig.$new("div");
            f.id = b;
            document.body.appendChild(f);
            $("#" + f.id).css("float", "left");
            $("#" + f.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var l = window.innerHeight / mobileHeight,
                    q = window.innerWidth / mobileWidth;
                $("#" + f.id).css("left", this.pos.x * q);
                $("#" + f.id).css("top", this.pos.y * l);
                $("#" + f.id).css("width", this.size.x * q);
                $("#" + f.id).css("height", this.size.y * l)
            } else l = document.getElementById("game").offsetLeft, q = document.getElementById("game").offsetTop, $("#" + f.id).css("left", l + this.pos.x * multiplier), $("#" + f.id).css("top", q + this.pos.y * multiplier), $("#" + f.id).css("width", this.size.x * multiplier), $("#" + f.id).css("height", this.size.y * multiplier);
            e ? $("#" + f.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + f.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hide: function() {
            var b = "more-games";
            this.divLayerName && (b = this.divLayerName);
            var c = document.getElementById(b);
            c && (c.style.visibility = "hidden");
            $("#" + b) && $("#" + b).hide();
            this.hidden = !0
        },
        show: function() {
            var b = "more-games";
            this.divLayerName && (b = this.divLayerName);
            var c = document.getElementById(b);
            c && (c.style.visibility = "visible");
            $("#" + b) && $("#" + b).show();
            this.hidden = !1
        },
        draw: function() {},
        hideLink: function() {
            var b = "more-games";
            this.divLayerName && (b = this.divLayerName);
            var c = document.getElementById(b);
            c && (c.style.visibility = "hidden");
            $("#" + b) && $("#" + b).hide()
        },
        showLink: function() {
            var b = "more-games";
            this.divLayerName && (b = this.divLayerName);
            var c = document.getElementById(b);
            c && (c.style.visibility = "visible");
            $("#" + b) && $("#" + b).show()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound("kittyopeningSound")
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) : (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            this.kittyImage.drawTile(ig.system.width / 2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325);
            this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37);
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        isClicking: !1,
        selectedItem: null,
        firstClick: !1,
        isReleased: !1,
        hoveringItem: null,
        objectArray: [],
        ignorePause: !0,
        zIndex: 2E4,
        firstClickObject: null,
        check: function(b) {
            this.objectArray.push(b)
        },
        clickObject: function(b) {
            this.firstClick && !this.isReleased && (b == this.firstClickObject ? "function" == typeof b.clicking && b.clicking(this) : this.touches(this.firstClickObject) ? "function" == typeof this.firstClickObject.clicking && this.firstClickObject.clicking(this) : ("function" == typeof this.firstClickObject.lostPointer && this.firstClickObject.lostPointer(this), this.firstClickObject = null, this.firstClick = !1));
            this.isClicking && !this.firstClick && ("function" == typeof b.clicked && b.clicked(this), this.firstClick = !0, this.firstClickObject = b);
            this.isReleased && ("function" == typeof b.released && b.released(this), this.firstClickObject = null, this.firstClick = !1)
        },
        reset: function() {
            this.firstClickObject = null;
            this.firstClick = !1
        },
        refreshPos: function() {
            if (ig.ua.mobile) {
                var b = window.innerHeight / mobileHeight,
                    c = window.innerWidth / mobileWidth;
                portraitMode ? (b /= c, c = 1) : (c /= b, b = 1);
                this.pos.x = ig.input.mouse.x / c - this.size.x / 2;
                this.pos.y = ig.input.mouse.y / b - this.size.y / 2
            } else this.pos.x = ig.input.mouse.x - this.size.x / 2, this.pos.y = ig.input.mouse.y - this.size.y / 2
        },
        update: function() {
            this.refreshPos();
            var b = null,
                c = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            null != b ? (null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && this.hoveringItem != b && this.hoveringItem.idle(this), this.hoveringItem = b, this.clickObject(b), this.objectArray = []) : (null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && (this.hoveringItem.idle(this), this.hoveringItem = null), this.firstClick && !this.isReleased && null != this.firstClickObject && ("function" == typeof this.firstClickObject.lostPointer && this.firstClickObject.lostPointer(this), this.firstClickObject = null, this.firstClick = !1));
            this.isClicking = ig.input.pressed("click");
            this.isReleased = ig.input.released("click")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 10,
            y: 10
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent();
            ig.game.debug && (ig.system.context.fillStyle = "black", ig.system.context.font = "18px Arial", ig.system.context.textAlign = "left", ig.system.context.fillText(Math.round(this.pos.x) + ", " + Math.round(this.pos.y), this.pos.x, this.pos.y))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var f = ig.$new("div");
            f.id = b;
            document.body.appendChild(f);
            $("#" + f.id).css("float", "left");
            $("#" + f.id).css("width", this.size.x * multiplier);
            $("#" + f.id).css("height", this.size.y * multiplier);
            $("#" + f.id).css("position", "absolute");
            var l = w / 2 - destW / 2,
                q = h / 2 - destH / 2;
            w == mobileWidth ? ($("#" + f.id).css("left", this.pos.x), $("#" + f.id).css("top", this.pos.y)) : ($("#" + f.id).css("left", l + this.pos.x * multiplier), $("#" + f.id).css("top", q + this.pos.y * multiplier));
            e ? $("#" + f.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + f.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + f.id).width();
            dynamicClickableEntityDivs[b].height = $("#" + f.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
        },
        deselectOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 < this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 436,
            y: 204
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.howtoplay").requires("impact.entity").defines(function() {
    EntityHowtoplay = ig.Entity.extend({
        zIndex: 1100,
        type: ig.Entity.TYPE.B,
        size: {
            x: 0,
            y: 0
        },
        control: null,
        pointer: null,
        bgImage: new ig.Image("media/graphics/game/ui/howtoplay.jpg"),
        closeBox: {
            x: 281,
            y: 4,
            w: 194,
            h: 70
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            1 < ig.game.getEntitiesByType(EntityHowtoplay).length && this.kill();
            this.size.x = ig.system.width;
            this.size.y = ig.system.height
        },
        ready: function() {
            var b = ig.game.getEntitiesByType(EntityPointer);
            0 < b.length && (this.pointer = b[0])
        },
        draw: function() {
            this.parent();
            this.bgImage.draw(0, 0)
        },
        update: function() {
            this.parent()
        },
        released: function() {
            if (this.aabbCheck({
                x1: this.pointer.pos.x,
                y1: this.pointer.pos.y,
                x2: this.pointer.pos.x + this.pointer.size.x,
                y2: this.pointer.pos.y + this.pointer.size.y
            }, {
                x1: this.closeBox.x,
                y1: this.closeBox.y,
                x2: this.closeBox.x + this.closeBox.w,
                y2: this.closeBox.y + this.closeBox.h
            })) {
                this.kill();
                this.control.moregames && this.control.moregames.show();
                this.control.howtoplay = null;
                try {
                    ig.soundHandler.playSound("click")
                } catch (b) {
                    console.log(b)
                }
            }
        },
        aabbCheck: function(b, c) {
            return b.x1 < c.x2 && b.x2 > c.x1 && b.y1 < c.y2 && b.y2 > c.y1 ? !0 : !1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.home-control").requires("impact.entity", "game.entities.button-more-games", "game.entities.howtoplay").defines(function() {
    EntityHomeControl = ig.Entity.extend({
        zIndex: 1E3,
        pointer: null,
        howtoplay: null,
        showEditTeam: !1,
        showUpgrade: !1,
        selectedUnitPos: 0,
        selectedTankType: 0,
        unitAnims: [new ig.Animation(new ig.AnimationSheet("media/graphics/game/unit/friend/cat/idle.png", 160, 160), 0.2, [0, 1, 2]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/unit/friend/panda/idle.png", 160, 160), 0.2, [0, 1, 2]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/unit/friend/repair/idle.png", 160, 160), 0.2, [0, 1, 2]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/unit/friend/wolf/idle.png", 160, 160), 0.2, [0, 1, 2])],
        tankAnims: [new ig.Animation(new ig.AnimationSheet("media/graphics/game/tank/tank1/idle.png", 438, 375), 0.2, [0]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/tank/tank2/idle.png", 438, 375), 0.2, [0]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/tank/tank3/idle.png", 438, 375), 0.2, [0])],
        seatPos: [{
            x: 127,
            y: 98
        }, {
            x: 209,
            y: 163
        }, {
            x: 117,
            y: 221
        }],
        tankPrice: [0, -2500, -5E3],
        tankReqLevel: [0, 0, 0],
        seatImage: new ig.Image("media/graphics/game/tank/seat.png"),
        seatRedImage: new ig.Image("media/graphics/game/tank/seat-red.png"),
        tankStatsImage: new ig.Image("media/graphics/game/ui/mainmenu/tankstats.png"),
        lockImage: new ig.Image("media/graphics/game/ui/mainmenu/lock.png"),
        unitSelectImage: new ig.Image("media/graphics/game/ui/mainmenu/unitselect.png"),
        coinImage: new ig.Image("media/graphics/game/ui/mainmenu/coin.png"),
        bgImage: new ig.Image("media/graphics/game/ui/mainmenu/mainbg.jpg"),
        playImage: new ig.Image("media/graphics/game/ui/mainmenu/play.png"),
        howtoplayImage: new ig.Image("media/graphics/game/ui/mainmenu/howtoplay.png"),
        moregamesImage: new ig.Image("media/graphics/game/ui/mainmenu/moregames.png"),
        playBox: {
            x: 256,
            y: 574,
            w: 213,
            h: 51
        },
        howtoplayBox: {
            x: 163,
            y: 524,
            w: 152,
            h: 36
        },
        moregamesBox: {
            x: 14,
            y: 573,
            w: 220,
            h: 52
        },
        medalImage: new ig.Image("media/graphics/game/ui/mainmenu/medal.png"),
        editTeamImage: new ig.Image("media/graphics/game/ui/mainmenu/editteam.png"),
        upgradeImage: new ig.Image("media/graphics/game/ui/mainmenu/upgrade.png"),
        editTeamBox: {
            x: 320,
            y: 524,
            w: 149,
            h: 36
        },
        upgradeBox: {
            x: 11,
            y: 525,
            w: 149,
            h: 35
        },
        editBgImage: new ig.Image("media/graphics/game/ui/mainmenu/editbg.png"),
        okImage: new ig.Image("media/graphics/game/ui/mainmenu/ok.png"),
        frameBigImage: new ig.Image("media/graphics/game/ui/mainmenu/frame-big.png"),
        frameSmallImage: new ig.Image("media/graphics/game/ui/mainmenu/frame-small.png"),
        unitSelectImage: new ig.Image("media/graphics/game/ui/mainmenu/unitselect.png"),
        okBox: {
            x: 140,
            y: 501,
            w: 195,
            h: 47
        },
        unitSelectBox: [{
            x: 68,
            y: 210,
            w: 103,
            h: 102
        }, {
            x: 189,
            y: 210,
            w: 103,
            h: 102
        }, {
            x: 313,
            y: 210,
            w: 103,
            h: 102
        }],
        availableUnitSelectBox: [{
            x: 33,
            y: 366,
            w: 91,
            h: 90
        }, {
            x: 138,
            y: 366,
            w: 91,
            h: 90
        }, {
            x: 246,
            y: 366,
            w: 91,
            h: 90
        }, {
            x: 354,
            y: 366,
            w: 91,
            h: 90
        }],
        tankBox: [{
            x: -130,
            y: 170,
            w: 230,
            h: 190
        }, {
            x: 370,
            y: 170,
            w: 230,
            h: 190
        }, {
            x: 120,
            y: 170,
            w: 230,
            h: 190
        }],
        tankScrollOffsetX: 0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            this.muteButton = ig.game.spawnEntity(EntityButtonMute, 420, 14);
            this.muteButton.zIndex = 1100;
            var b = ig.game.getEntitiesByType(EntityPointer);
            0 < b.length && (this.pointer = b[0]);
            b = this.playBox.y;
            this.playBox.y = ig.system.height + 54;
            this.tween({
                playBox: {
                    y: b
                }
            }, 1, {
                easing: ig.Tween.Easing.Elastic.EaseOut
            }).start();
            b = this.howtoplayBox.y;
            this.howtoplayBox.y = ig.system.height + 54;
            this.tween({
                howtoplayBox: {
                    y: b
                }
            }, 1, {
                easing: ig.Tween.Easing.Elastic.EaseOut
            }).start();
            b = this.editTeamBox.y;
            this.editTeamBox.y = ig.system.height + 54;
            this.tween({
                editTeamBox: {
                    y: b
                }
            }, 1, {
                easing: ig.Tween.Easing.Elastic.EaseOut
            }).start();
            b = this.upgradeBox.y;
            this.upgradeBox.y = ig.system.height + 54;
            this.tween({
                upgradeBox: {
                    y: b
                }
            }, 1, {
                easing: ig.Tween.Easing.Elastic.EaseOut
            }).start();
            _SETTINGS.MoreGames.Enabled && (this.moregames = ig.game.spawnEntity(EntityButtonMoreGames, this.moregamesBox.x, this.moregamesBox.y), this.moregames.ready());
            ig.game.sortEntitiesDeferred()
        },
        draw: function() {
            this.parent();
            this.bgImage.draw(0, 0);
            ig.system.context.globalAlpha = 0.4;
            ig.system.context.fillStyle = "#000000";
            ig.system.context.fillRect(0, 0, ig.system.width, 50);
            ig.system.context.globalAlpha = 1;
            this.playImage.draw(this.playBox.x, this.playBox.y);
            this.howtoplayImage.draw(this.howtoplayBox.x, this.howtoplayBox.y);
            this.medalImage.draw(21, 0);
            this.coinImage.draw(130, 3);
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.font = "20px avenger";
            str = ig.game.totalCoins;
            var b = ig.system.context.measureText(str).width,
                c = ig.system.context.measureText("m").width;
            ig.system.context.fillText(str, 170, 10 + c);
            ig.global.wm || (ig.game.currentPlayerLevel < ig.game.requiredXP.length && (ig.system.context.fillStyle = "#FFFFFF", ig.system.context.font = "12px ariel", str = "/", b = ig.system.context.measureText(str).width, c = ig.system.context.measureText("m").width, ig.system.context.fillText(str, 64 - b / 2, 6 + c), ig.system.context.fillStyle = "#FFFFFF", ig.system.context.font = "10px avenger", str = ig.game.currentXP, b = ig.system.context.measureText(str).width, c = ig.system.context.measureText("m").width, ig.system.context.fillText(str, 58 - b, 6 + c), str = ig.game.requiredXP[ig.game.currentPlayerLevel], ig.system.context.measureText(str), c = ig.system.context.measureText("m").width, ig.system.context.fillText(str, 68, 6 + c)), ig.system.context.fillStyle = "#FFFFFF", ig.system.context.font = "20px avenger", str = "LV", b = ig.system.context.measureText(str).width, c = ig.system.context.measureText("m").width, ig.system.context.fillText(str, 63 - b / 2, 28 + c), ig.system.context.font = "40px avenger", str = ig.game.currentPlayerLevel, b = ig.system.context.measureText(str).width, c = ig.system.context.measureText("m").width, ig.system.context.fillText(str, 60 - b / 2, 55 + c), this.editTeamImage.draw(this.editTeamBox.x, this.editTeamBox.y), this.upgradeImage.draw(this.upgradeBox.x, this.upgradeBox.y), this.moregames && this.moregamesImage.draw(this.moregames.pos.x - this.moregames.offset.x, this.moregames.pos.y - this.moregames.offset.y), this.showUpgrade && this.drawUpgrade(), this.showEditTeam && this.drawEditTeam())
        },
        drawEditTeam: function() {
            ig.system.context.globalAlpha = 0.4;
            ig.system.context.fillStyle = "#000000";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.globalAlpha = 1;
            this.editBgImage.draw(0, 0);
            this.okImage.draw(this.okBox.x, this.okBox.y);
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.font = "24px avenger";
            str = "CHOOSE YOUR TEAM";
            var b = ig.system.context.measureText(str).width;
            ig.system.context.measureText("m");
            var c;
            ig.system.context.fillText(str, 240 - b / 2, 195);
            0 == this.selectedUnitPos ? this.unitSelectImage.draw(58, 210) : 1 == this.selectedUnitPos ? this.unitSelectImage.draw(179, 210) : 2 == this.selectedUnitPos && this.unitSelectImage.draw(301, 210);
            this.frameBigImage.draw(68, 220);
            this.frameBigImage.draw(189, 220);
            this.frameBigImage.draw(313, 220);
            if (ig.game.currentTeam) {
                var d = this.unitAnims[ig.game.currentTeam[0]];
                d.sheet.image.draw(80, 232, 0 * d.sheet.width + 37, 37, 79, 78);
                d = this.unitAnims[ig.game.currentTeam[1]];
                d.sheet.image.draw(201, 232, 0 * d.sheet.width + 37, 37, 79, 78);
                d = this.unitAnims[ig.game.currentTeam[2]];
                d.sheet.image.draw(325, 232, 0 * d.sheet.width + 37, 37, 79, 78)
            }
            this.frameSmallImage.draw(33, 366);
            this.frameSmallImage.draw(138, 366);
            this.frameSmallImage.draw(246, 366);
            this.frameSmallImage.draw(354, 366);
            d = this.unitAnims[0];
            d.sheet.image.draw(45, 378, 0 * d.sheet.width + 42, 42, 67, 66);
            d = this.unitAnims[1];
            d.sheet.image.draw(150, 378, 0 * d.sheet.width + 42, 42, 67, 66);
            d = this.unitAnims[2];
            d.sheet.image.draw(258, 378, 0 * d.sheet.width + 42, 42, 67, 66);
            d = this.unitAnims[3];
            d.sheet.image.draw(366, 378, 0 * d.sheet.width + 42, 42, 67, 66);
            ig.system.context.globalAlpha = 0.6;
            ig.system.context.fillStyle = "#000000";
            for (b = 0; b < ig.game.currentTeam.length; b++) 0 == ig.game.currentTeam[b] ? ig.system.context.fillRect(44, 377, 73, 72) : 1 == ig.game.currentTeam[b] ? ig.system.context.fillRect(149, 377, 73, 72) : 2 == ig.game.currentTeam[b] ? ig.system.context.fillRect(257, 377, 73, 72) : 3 == ig.game.currentTeam[b] && ig.system.context.fillRect(365, 377, 73, 72);
            ig.system.context.globalAlpha = 1;
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.font = "16px avenger";
            for (d = 0; d < this.unitAnims.length; d++) {
                c = !1;
                for (b = 0; b < ig.game.currentTeam.length; b++)
                    if (ig.game.currentTeam[b] == d) {
                        c = !0;
                        break
                    }!1 == c && (0 == d ? (str = "Shotgun", b = ig.system.context.measureText(str).width, ig.system.context.measureText("m"), b = 81 - b / 2, c = 362, ig.system.context.fillText(str, b, c)) : 1 == d ? (str = "Bazooka", b = ig.system.context.measureText(str).width, ig.system.context.measureText("m"), b = 186 - b / 2, c = 362, ig.system.context.fillText(str, b, c)) : 2 == d ? (str = "Repair", b = ig.system.context.measureText(str).width, ig.system.context.measureText("m"), b = 294 - b / 2, c = 362, ig.system.context.fillText(str, b, c)) : 3 == d && (str = "Machine Gun", b = ig.system.context.measureText(str).width, ig.system.context.measureText("m"), b = 402 - b / 2, c = 362, ig.system.context.fillText(str, b, c)))
            }
        },
        drawUpgrade: function() {
            ig.system.context.globalAlpha = 0.4;
            ig.system.context.fillStyle = "#000000";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.globalAlpha = 1;
            this.editBgImage.draw(0, 0);
            this.okImage.draw(this.okBox.x, this.okBox.y);
            this.tankStatsImage.draw(118, 371);
            ig.system.context.fillStyle = "#FFFF00";
            0 == this.selectedTankType ? (ig.system.context.fillRect(215, 394, 43.2, 9), ig.system.context.fillRect(215, 417, 10.8, 9), ig.system.context.fillRect(215, 440, 32.4, 9)) : 1 == this.selectedTankType ? (ig.system.context.fillRect(215, 394, 64.8, 9), ig.system.context.fillRect(215, 417, 43.2, 9), ig.system.context.fillRect(215, 440, 64.8, 9)) : 2 == this.selectedTankType && (ig.system.context.fillRect(215, 394, 108, 9), ig.system.context.fillRect(215, 417, 108, 9), ig.system.context.fillRect(215, 440, 108, 9));
            var b = this.selectedTankType,
                c = this.tankAnims[b];
            ig.system.context.save();
            var d = this.tankBox[2].x - 50,
                e = this.tankBox[2].y - 60;
            ig.system.context.translate(d, e);
            ig.system.context.scale(0.75, 0.75);
            c.draw(0, 0);
            d = this.seatImage;
            2 == b && (d = this.seatRedImage);
            for (c = 0; c < this.seatPos.length; c++) {
                var e = this.seatPos[c].x,
                    f = this.seatPos[c].y,
                    l = e + 19,
                    q = f + 7,
                    r = d.data.width - 36,
                    g = d.data.height - 14;
                ig.system.context.fillStyle = "#999999";
                ig.system.context.fillRect(l, q, r, g);
                d.draw(e, f)
            }
            ig.system.context.restore();
            d = !1;
            for (c = 0; c < ig.game.unlockedTanks.length; c++)
                if (ig.game.unlockedTanks[c] == b) {
                    d = !0;
                    break
                }
            d || (c = this.tankBox[2].x + 49, d = this.tankBox[2].y + 7, this.lockImage.draw(c, d), this.coinImage.draw(c + 47, d + 97), ig.system.context.fillStyle = "#FFFFFF", ig.system.context.font = "16px avenger", str = "lv " + this.tankReqLevel[b], e = ig.system.context.measureText(str).width, f = ig.system.context.measureText("m").width, ig.system.context.fillText(str, c + 65 - e / 2, d + 75 + f), ig.system.context.font = "16px avenger", str = this.tankPrice[b], e = ig.system.context.measureText(str).width, f = ig.system.context.measureText("m").width, ig.system.context.fillText(str, c + 65 - e / 2, d + 125 + f), ig.system.context.font = "12px avenger", str = "to unlock", e = ig.system.context.measureText(str).width, f = ig.system.context.measureText("m").width, ig.system.context.fillText(str, c + 65 - e / 2, d + 148 + f));
            b = this.selectedTankType + 1;
            b >= this.tankAnims.length && (b = 0);
            c = this.tankAnims[b];
            ig.system.context.save();
            d = this.tankBox[1].x - 50;
            e = this.tankBox[1].y - 60;
            ig.system.context.translate(d, e);
            ig.system.context.scale(0.75, 0.75);
            c.draw(0, 0);
            d = this.seatImage;
            2 == b && (d = this.seatRedImage);
            for (c = 0; c < this.seatPos.length; c++) e = this.seatPos[c].x, f = this.seatPos[c].y, l = e + 19, q = f + 7, r = d.data.width - 36, g = d.data.height - 14, ig.system.context.fillStyle = "#999999", ig.system.context.fillRect(l, q, r, g), d.draw(e, f);
            ig.system.context.restore();
            d = !1;
            for (c = 0; c < ig.game.unlockedTanks.length; c++)
                if (ig.game.unlockedTanks[c] == b) {
                    d = !0;
                    break
                }
            d || (c = this.tankBox[1].x + 49, d = this.tankBox[1].y + 7, this.lockImage.draw(c, d), this.coinImage.draw(c + 47, d + 97), ig.system.context.fillStyle = "#FFFFFF", ig.system.context.font = "16px avenger", str = "lv " + this.tankReqLevel[b], e = ig.system.context.measureText(str).width, f = ig.system.context.measureText("m").width, ig.system.context.fillText(str, c + 65 - e / 2, d + 75 + f), ig.system.context.font = "16px avenger", str = this.tankPrice[b], e = ig.system.context.measureText(str).width, f = ig.system.context.measureText("m").width, ig.system.context.fillText(str, c + 65 - e / 2, d + 125 + f), ig.system.context.font = "12px avenger", str = "to unlock", e = ig.system.context.measureText(str).width, f = ig.system.context.measureText("m").width, ig.system.context.fillText(str, c + 65 - e / 2, d + 148 + f));
            b = this.selectedTankType - 1;
            0 > b && (b = this.tankAnims.length - 1);
            c = this.tankAnims[b];
            ig.system.context.save();
            d = this.tankBox[0].x - 50;
            e = this.tankBox[0].y - 60;
            ig.system.context.translate(d, e);
            ig.system.context.scale(0.75, 0.75);
            c.draw(0, 0);
            d = this.seatImage;
            2 == b && (d = this.seatRedImage);
            for (c = 0; c < this.seatPos.length; c++) e = this.seatPos[c].x, f = this.seatPos[c].y, l = e + 19, q = f + 7, r = d.data.width - 36, g = d.data.height - 14, ig.system.context.fillStyle = "#999999", ig.system.context.fillRect(l, q, r, g), d.draw(e, f);
            ig.system.context.restore();
            d = !1;
            for (c = 0; c < ig.game.unlockedTanks.length; c++)
                if (ig.game.unlockedTanks[c] == b) {
                    d = !0;
                    break
                }
            d || (c = this.tankBox[0].x + 49, d = this.tankBox[0].y + 7, this.lockImage.draw(c, d), this.coinImage.draw(c +
                47, d + 97), ig.system.context.fillStyle = "#FFFFFF", ig.system.context.font = "16px avenger", str = "lv " + this.tankReqLevel[b], e = ig.system.context.measureText(str).width, f = ig.system.context.measureText("m").width, ig.system.context.fillText(str, c + 65 - e / 2, d + 75 + f), ig.system.context.font = "16px avenger", str = this.tankPrice[b], e = ig.system.context.measureText(str).width, f = ig.system.context.measureText("m").width, ig.system.context.fillText(str, c + 65 - e / 2, d + 125 + f), ig.system.context.font = "12px avenger", str = "to unlock", e = ig.system.context.measureText(str).width, f = ig.system.context.measureText("m").width, ig.system.context.fillText(str, c + 65 - e / 2, d + 148 + f))
        },
        update: function() {
            this.parent();
            for (var b = 0; b < this.unitAnims.length; b++) this.unitAnims[b].update();
            for (b = 0; b < this.tankAnims.length; b++) this.tankAnims[b].update();
            !this.howtoplay && ig.input.released("click") && (this.showEditTeam ? this.editTeamReleased() : this.showUpgrade ? this.upgradeReleased() : this.released())
        },
        released: function() {
            var b = {
                    x1: this.pointer.pos.x,
                    y1: this.pointer.pos.y,
                    x2: this.pointer.pos.x + this.pointer.size.x,
                    y2: this.pointer.pos.y + this.pointer.size.y
                },
                c = {
                    x1: this.playBox.x,
                    y1: this.playBox.y,
                    x2: this.playBox.x + this.playBox.w,
                    y2: this.playBox.y + this.playBox.h
                };
            if (this.aabbCheck(b, c)) {
                ig.game.director.loadLevel(2);
                try {
                    ig.soundHandler.playSound("click")
                } catch (d) {
                    console.log(d)
                }
            } else if (c = {
                x1: this.howtoplayBox.x,
                y1: this.howtoplayBox.y,
                x2: this.howtoplayBox.x + this.howtoplayBox.w,
                y2: this.howtoplayBox.y + this.howtoplayBox.h
            }, this.aabbCheck(b, c)) {
                this.howtoplay = ig.game.spawnEntity(EntityHowtoplay, 0, 0, {
                    control: this
                });
                this.howtoplay.ready();
                try {
                    ig.soundHandler.playSound("click")
                } catch (e) {
                    console.log(e)
                }
                this.moregames && this.moregames.hide()
            } else if (c = {
                x1: this.upgradeBox.x,
                y1: this.upgradeBox.y,
                x2: this.upgradeBox.x + this.upgradeBox.w,
                y2: this.upgradeBox.y + this.upgradeBox.h
            }, this.aabbCheck(b, c)) {
                this.showUpgrade = !0;
                this.selectedTankType = ig.game.tankType;
                try {
                    ig.soundHandler.playSound("click")
                } catch (f) {
                    console.log(f)
                }
                this.moregames && this.moregames.hideLink()
            } else if (c = {
                x1: this.editTeamBox.x,
                y1: this.editTeamBox.y,
                x2: this.editTeamBox.x + this.editTeamBox.w,
                y2: this.editTeamBox.y + this.editTeamBox.h
            }, this.aabbCheck(b, c)) {
                this.showEditTeam = !0;
                this.selectedUnitPos = 0;
                try {
                    ig.soundHandler.playSound("click")
                } catch (l) {
                    console.log(l)
                }
                this.moregames && this.moregames.hideLink()
            }
        },
        editTeamReleased: function() {
            var b = {
                    x1: this.pointer.pos.x,
                    y1: this.pointer.pos.y,
                    x2: this.pointer.pos.x + this.pointer.size.x,
                    y2: this.pointer.pos.y + this.pointer.size.y
                },
                c = {
                    x1: this.okBox.x,
                    y1: this.okBox.y,
                    x2: this.okBox.x + this.okBox.w,
                    y2: this.okBox.y + this.okBox.h
                };
            if (this.aabbCheck(b, c)) {
                this.showEditTeam = !1;
                try {
                    ig.soundHandler.playSound("click")
                } catch (d) {
                    console.log(d)
                }
                this.moregames && this.moregames.showLink()
            } else {
                for (var e = 0; e < this.unitSelectBox.length; e++)
                    if (c = this.unitSelectBox[e], c = {
                        x1: c.x,
                        y1: c.y,
                        x2: c.x + c.w,
                        y2: c.y + c.h
                    }, this.aabbCheck(b, c)) {
                        this.selectedUnitPos = e;
                        try {
                            ig.soundHandler.playSound("click")
                        } catch (f) {
                            console.log(f)
                        }
                        return
                    }
                for (e = 0; e < this.availableUnitSelectBox.length; e++)
                    if (c = this.availableUnitSelectBox[e], c = {
                        x1: c.x,
                        y1: c.y,
                        x2: c.x + c.w,
                        y2: c.y + c.h
                    }, this.aabbCheck(b, c)) {
                        b = !1;
                        for (c = 0; c < ig.game.currentTeam.length; c++)
                            if (ig.game.currentTeam[c] == e) {
                                b = !0;
                                break
                            }
                        if (b) break;
                        ig.game.currentTeam[this.selectedUnitPos] = e;
                        ig.game.setLocalStorage();
                        try {
                            ig.soundHandler.playSound("click")
                        } catch (l) {
                            console.log(l)
                        }
                        break
                    }
            }
        },
        upgradeReleased: function() {
            var b = {
                    x1: this.pointer.pos.x,
                    y1: this.pointer.pos.y,
                    x2: this.pointer.pos.x + this.pointer.size.x,
                    y2: this.pointer.pos.y + this.pointer.size.y
                },
                c = {
                    x1: this.okBox.x,
                    y1: this.okBox.y,
                    x2: this.okBox.x + this.okBox.w,
                    y2: this.okBox.y +
                        this.okBox.h
                };
            if (this.aabbCheck(b, c)) {
                this.showUpgrade = !1;
                try {
                    ig.soundHandler.playSound("click")
                } catch (d) {
                    console.log(d)
                }
                this.moregames && this.moregames.showLink()
            } else
                for (var e = 0; e < this.tankBox.length; e++)
                    if (c = this.tankBox[e], c = {
                        x1: c.x,
                        y1: c.y,
                        x2: c.x + c.w,
                        y2: c.y + c.h
                    }, this.aabbCheck(b, c)) {
                        if (2 == e) {
                            b = !1;
                            for (e = 0; e < ig.game.unlockedTanks.length; e++)
                                if (ig.game.unlockedTanks[e] == this.selectedTankType) {
                                    b = !0;
                                    break
                                }
                            if (!b && ig.game.currentPlayerLevel >= this.tankReqLevel[this.selectedTankType] && ig.game.totalCoins >= this.tankPrice[this.selectedTankType]) {
                                ig.game.unlockedTanks.push(this.selectedTankType);
                                ig.game.totalCoins -= this.tankPrice[this.selectedTankType];
                                ig.game.tankType = this.selectedTankType;
                                ig.game.setLocalStorage();
                                try {
                                    ig.soundHandler.playSound("click")
                                } catch (f) {
                                    console.log(f)
                                }
                                try {
                                    ig.soundHandler.playSound("coins")
                                } catch (l) {
                                    console.log(l)
                                }
                            }
                        } else {
                            0 == e ? (this.selectedTankType -= 1, 0 > this.selectedTankType && (this.selectedTankType = this.tankAnims.length - 1)) : 1 == e && (this.selectedTankType += 1, this.selectedTankType >= this.tankAnims.length && (this.selectedTankType = 0));
                            b = !1;
                            for (e = 0; e < ig.game.unlockedTanks.length; e++)
                                if (ig.game.unlockedTanks[e] == this.selectedTankType) {
                                    b = !0;
                                    break
                                }
                            if (b) {
                                ig.game.tankType = this.selectedTankType;
                                ig.game.setLocalStorage();
                                try {
                                    ig.soundHandler.playSound("click")
                                } catch (q) {
                                    console.log(q)
                                }
                            }
                        }
                        break
                    }
        },
        aabbCheck: function(b, c) {
            return b.x1 < c.x2 && b.x2 > c.x1 && b.y1 < c.y2 && b.y2 > c.y1 ? !0 : !1
        }
    })
});
ig.baked = !0;
ig.module("game.levels.mainmenu").requires("impact.image", "game.entities.home-control", "game.entities.pointer-selector", "game.entities.branding-logo").defines(function() {
    LevelMainmenu = {
        entities: [{
            type: "EntityHomeControl",
            x: -4,
            y: -28
        }, {
            type: "EntityPointerSelector",
            x: -4,
            y: -48
        }, {
            type: "EntityBrandingLogo",
            x: 265,
            y: 15
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.results-control").requires("impact.entity").defines(function() {
    EntityResultsControl = ig.Entity.extend({
        zIndex: 1E3,
        pointer: null,
        bgImage: new ig.Image("media/graphics/game/ui/menubg.jpg"),
        bg2Image: new ig.Image("media/graphics/game/ui/menubg2.png"),
        titleImage: new ig.Image("media/graphics/game/ui/resultstitle.png"),
        coinImage: new ig.Image("media/graphics/game/ui/bigcoin.png"),
        flagImage: new ig.Image("media/graphics/game/ui/flag.png"),
        replayImage: new ig.Image("media/graphics/game/ui/replay.png"),
        homeImage: new ig.Image("media/graphics/game/ui/home.png"),
        replayBox: {
            x: 94,
            y: 396,
            w: 314,
            h: 75
        },
        homeBox: {
            x: 94,
            y: 474,
            w: 314,
            h: 75
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            console.log('oogl', ig.game.lastGameCoins);
            var iScore = ig.game.lastGameCoins;
            var ach = false;
            var ach_numb = [];
            if (iScore > 299) {
                ach = true;
                ach_numb.push("defend_dattankr_gba005");
            }
            if (iScore > 249) {
                ach = true;
                ach_numb.push("defend_dattankr_gba004");
            }
            if (iScore > 199) {
                ach = true;
                ach_numb.push("defend_dattankr_gba003");
            }
            if (iScore > 149) {
                ach = true;
                ach_numb.push("defend_dattankr_gba002");
            }
            if (iScore > 99) {
                ach = true;
                ach_numb.push("defend_dattankr_gba001");
            }
            if (ach) {
                // LaggedAPI.Achievements.save(ach_numb, function(response) {
                //     if (response.success) {
                //         console.log('achievement saved')
                //     } else {
                //         console.log(response.errormsg);
                //     }
                // });
            };
            ig.game.lastGameCoins > ig.game.highScore && (ig.game.highScore = ig.game.lastGameCoins, b = {}, b.score = ig.game.highScore, b.board = "defend_datankr_hsbdds"
            //     LaggedAPI.Scores.save(b, function(b) {
            //     b.success ? console.log("high score saved") : console.log(b.errormsg)
            // })
                );
            // ig.game.fnShowLaggedAd("defend-the-tank", "defend-the-tank-game.jpg")
        },
        ready: function() {
            var b = ig.game.getEntitiesByType(EntityPointer);
            0 < b.length && (this.pointer = b[0]);
            this.pos.x = 0;
            this.pos.y = 0;
            b = this.pos.x;
            this.pos.x = ig.system.width + b;
            this.tween({
                pos: {
                    x: b
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Elastic.EaseOut
            }).start()
        },
        draw: function() {
            this.parent();
            this.bgImage.draw(0, 0);
            this.bg2Image.draw(this.pos.x + 0, this.pos.y + 0);
            this.titleImage.draw(this.pos.x + 143, this.pos.y + 60);
            this.coinImage.draw(this.pos.x + 98, this.pos.y + 169);
            this.flagImage.draw(this.pos.x + 103, this.pos.y + 269);
            ig.system.context.fillStyle = "#cd1515";
            ig.system.context.font = "46px avenger_bold";
            str = ig.game.lastGameCoins;
            var b = ig.system.context.measureText(str).width,
                c = ig.system.context.measureText("m").width,
                d = this.pos.x + 244 - b / 2,
                c = this.pos.y + 180 + c;
            ig.system.context.fillText(str, d, c);
            ig.system.context.fillStyle = "#cd1515";
            ig.system.context.font = "46px avenger_bold";
            str = ig.game.lastGameDistance;
            b = ig.system.context.measureText(str).width;
            c = ig.system.context.measureText("m").width;
            d = this.pos.x + 244 - b / 2;
            c = this.pos.y + 276 + c;
            ig.system.context.fillText(str, d, c);
            ig.system.context.fillText(" km", d + b, c);
            this.replayImage.draw(this.pos.x + this.replayBox.x, this.pos.y + this.replayBox.y);
            this.homeImage.draw(this.pos.x + this.homeBox.x, this.pos.y + this.homeBox.y)
        },
        update: function() {
            this.parent();
            ig.input.released("click") && this.released()
        },
        released: function() {
            var b = {
                    x1: this.pointer.pos.x,
                    y1: this.pointer.pos.y,
                    x2: this.pointer.pos.x + this.pointer.size.x,
                    y2: this.pointer.pos.y + this.pointer.size.y
                },
                c = {
                    x1: this.replayBox.x,
                    y1: this.replayBox.y,
                    x2: this.replayBox.x + this.replayBox.w,
                    y2: this.replayBox.y + this.replayBox.h
                };
            if (this.aabbCheck(b, c)) {
                b = ig.system.width;
                this.tween({
                    pos: {
                        x: b
                    }
                }, 0.5, {
                    easing: ig.Tween.Easing.Elastic.EaseIn,
                    entity: this,
                    onComplete: function() {
                        ig.game.director.loadLevel(2)
                    }
                }).start();
                try {
                    ig.soundHandler.playSound("click")
                } catch (d) {
                    console.log(d)
                }
            } else if (c = {
                x1: this.homeBox.x,
                y1: this.homeBox.y,
                x2: this.homeBox.x + this.homeBox.w,
                y2: this.homeBox.y + this.homeBox.h
            }, this.aabbCheck(b, c)) {
                b = ig.system.width;
                this.tween({
                    pos: {
                        x: b
                    }
                }, 0.5, {
                    easing: ig.Tween.Easing.Elastic.EaseIn,
                    entity: this,
                    onComplete: function() {
                        ig.game.director.loadLevel(1)
                    }
                }).start();
                try {
                    ig.soundHandler.playSound("click")
                } catch (e) {
                    console.log(e)
                }
            }
        },
        aabbCheck: function(b, c) {
            return b.x1 < c.x2 && b.x2 > c.x1 && b.y1 < c.y2 && b.y2 > c.y1 ? !0 : !1
        }
    })
});
ig.baked = !0;
ig.module("game.levels.results").requires("impact.image", "game.entities.results-control", "game.entities.pointer-selector").defines(function() {
    LevelResults = {
        entities: [{
            type: "EntityResultsControl",
            x: -4,
            y: -28
        }, {
            type: "EntityPointerSelector",
            x: -4,
            y: -48
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.game-bg").requires("impact.entity").defines(function() {
    EntityGameBg = ig.Entity.extend({
        zIndex: 0,
        skyImage: new ig.Image("media/graphics/game/bg/sky.jpg"),
        farBuildingImage: new ig.Image("media/graphics/game/bg/far_building.png"),
        buildingImage: new ig.Image("media/graphics/game/bg/building.png"),
        ground: null,
        farBuildingScrollSpeed: -5,
        buildingScrollSpeed: -10,
        curFarBuildingOffset: 0,
        curBuildingOffset: 0,
        farBuildingRepeats: 1,
        buildingRepeats: 1,
        farBuildingRepeatSpacing: 0,
        buildingRepeatSpacing: -18,
        farBuildingWidth: 0,
        buildingWidth: 0,
        control: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.ground = ig.game.spawnEntity(EntityGameGround, 0, 438, {
                bg: this
            }), ig.game.sortEntitiesDeferred(), this.farBuildingWidth = this.farBuildingImage.data.width + this.farBuildingRepeatSpacing, this.buildingWidth = this.buildingImage.data.width + this.buildingRepeatSpacing, this.ground.repeatWidth = this.ground.groundImage.data.width + this.ground.repeatSpacing, this.farBuildingRepeats = 2 + Math.ceil(ig.system.width / this.farBuildingWidth), this.buildingRepeats = 2 + Math.ceil(ig.system.width / this.buildingWidth), this.ground.repeats = 2 + Math.ceil(ig.system.width / this.ground.repeatWidth))
        },
        update: function() {
            this.parent();
            this.control.isPaused || (this.curFarBuildingOffset += this.farBuildingScrollSpeed * ig.system.tick, this.curBuildingOffset += this.buildingScrollSpeed * ig.system.tick, this.ground.curOffset += this.ground.scrollSpeed * ig.system.tick, Math.abs(this.curFarBuildingOffset) > this.farBuildingWidth && (this.curFarBuildingOffset = 0 > this.curFarBuildingOffset ? this.curFarBuildingOffset + this.farBuildingWidth : this.curFarBuildingOffset - this.farBuildingWidth), Math.abs(this.curBuildingOffset) > this.buildingWidth && (this.curBuildingOffset = 0 > this.curBuildingOffset ? this.curBuildingOffset + this.buildingWidth : this.curBuildingOffset - this.buildingWidth), Math.abs(this.ground.curOffset) > this.ground.repeatWidth && (this.ground.curOffset = 0 > this.ground.curOffset ? this.ground.curOffset + this.ground.repeatWidth : this.ground.curOffset - this.ground.repeatWidth))
        },
        draw: function() {
            this.parent();
            this.skyImage.draw(0, 0);
            for (var b = 0; b < this.farBuildingRepeats; b++) {
                var c = (b - 1) * this.farBuildingWidth,
                    c = c + this.curFarBuildingOffset;
                this.farBuildingImage.draw(-ig.game.screen.x + c, -ig.game.screen.y + 347)
            }
            for (b = 0; b < this.buildingRepeats; b++) c = (b - 1) * this.buildingWidth, c += this.curBuildingOffset, this.buildingImage.draw(-ig.game.screen.x + c, -ig.game.screen.y + 341)
        }
    });
    EntityGameGround = ig.Entity.extend({
        zIndex: 200,
        groundImage: new ig.Image("media/graphics/game/bg/ground.png"),
        bg: null,
        scrollSpeed: -15,
        curOffset: 0,
        repeats: 1,
        repeatSpacing: 0,
        repeatWidth: 0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent();
            this.size.y = this.groundImage.data.height;
            this.size.x = ig.system.width;
            for (var b = 0; b < this.repeats; b++) {
                var c = (b - 1) * this.repeatWidth,
                    c = c + this.curOffset;
                this.groundImage.draw(-ig.game.screen.x + c, -ig.game.screen.y + this.pos.y)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-mute").requires("impact.entity").defines(function() {
    EntityButtonMute = ig.Entity.extend({
        zIndex: 550,
        size: {
            x: 25,
            y: 25
        },
        offset: {
            x: 0,
            y: 0
        },
        type: ig.Entity.TYPE.B,
        animSheet: new ig.AnimationSheet("media/graphics/game/ui/muteoff.png", 25, 25),
        offSheet: new ig.AnimationSheet("media/graphics/game/ui/muteon.png", 25, 25),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            "undefined" == typeof wm && Howler._muted && (this.currentAnim = new ig.Animation(this.offSheet, 1, [0]))
        },
        clicked: function() {
            if (ig.soundHandler.bgmMute) {
                ig.soundHandler.fnUnmuteAll();
                this.currentAnim = new ig.Animation(this.animSheet, 1, [0]);
                try {
                    ig.soundHandler.playSound("click")
                } catch (b) {
                    console.log(b)
                }
            } else ig.soundHandler.fnMuteAll(), this.currentAnim = new ig.Animation(this.offSheet, 1, [0])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-pause").requires("impact.entity").defines(function() {
    EntityButtonPause = ig.Entity.extend({
        zIndex: 550,
        size: {
            x: 25,
            y: 25
        },
        offset: {
            x: 0,
            y: 0
        },
        type: ig.Entity.TYPE.B,
        animSheet: new ig.AnimationSheet("media/graphics/game/ui/pause.png", 25, 25),
        control: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0])
        },
        clicked: function() {
            if (this.control) {
                try {
                    ig.soundHandler.playSound("click")
                } catch (b) {
                    console.log(b)
                }
                this.control.isPaused ? this.control.unpauseGame() : this.control.pauseGame()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-button-mainweapon").requires("impact.entity").defines(function() {
    EntityGameButtonMainweapon = ig.Entity.extend({
        zIndex: 550,
        size: {
            x: 80,
            y: 80
        },
        type: ig.Entity.TYPE.B,
        drawRelPos: {
            x: 0,
            y: 0
        },
        control: null,
        mainWeaponIconImages: [new ig.Image("media/graphics/game/ui/icons/rocket.png"), new ig.Image("media/graphics/game/ui/icons/fireball.png"), new ig.Image("media/graphics/game/ui/icons/laser.png")],
        mainWeaponType: 0,
        isWaiting: !1,
        timeWaited: 0,
        waitTime: [5, 5, 10],
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.mainWeaponType = this.control.tank.tankType;
            this.refreshDrawRelPos()
        },
        update: function() {
            this.parent();
            !ig.game.gamePaused && this.isWaiting && (this.timeWaited += ig.system.tick, this.timeWaited >= this.waitTime[this.mainWeaponType] && this.stopWaiting())
        },
        draw: function() {
            this.parent();
            if (this.isWaiting) {
                var b = this.timeWaited / this.waitTime[this.mainWeaponType],
                    c = this.size.x,
                    d = this.size.y * b,
                    e = -ig.game.screen.x + this.pos.x,
                    b = -ig.game.screen.y + this.pos.y + this.size.y * (1 - b);
                ig.system.context.globalAlpha = 0.5;
                ig.system.context.fillStyle = "#00FF00";
                ig.system.context.fillRect(e, b, c, d);
                ig.system.context.globalAlpha = 1
            } else this.mainWeaponIconImages[this.mainWeaponType].draw(-ig.game.screen.x + this.pos.x + this.drawRelPos.x, -ig.game.screen.y + this.pos.y + this.drawRelPos.y)
        },
        refreshDrawRelPos: function() {
            var b = this.mainWeaponIconImages[this.mainWeaponType];
            this.drawRelPos.x = 0.5 * this.size.x - 0.5 * b.data.width;
            this.drawRelPos.y = 0.5 * this.size.y - 0.5 * b.data.height
        },
        clicked: function() {
            if (!this.isWaiting)
                if (this.control.tank.fireMainWeapon(), this.startWaiting(), 0 == this.mainWeaponType) try {
                    ig.soundHandler.playSound("tankshoot")
                } catch (b) {
                    console.log(b)
                } else if (1 == this.mainWeaponType) try {
                    ig.soundHandler.playSound("tankshoot")
                } catch (c) {
                    console.log(c)
                } else if (2 == this.mainWeaponType) try {
                    ig.soundHandler.playSound("laser_beam")
                } catch (d) {
                    console.log(d)
                }
        },
        startWaiting: function() {
            this.isWaiting = !0;
            this.timeWaited = 0
        },
        stopWaiting: function() {
            this.isWaiting = !1;
            try {
                ig.soundHandler.playSound("reload")
            } catch (b) {
                console.log(b)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-unit-friendly").requires("impact.entity").defines(function() {
    EntityGameUnitFriendly = ig.Entity.extend({
        zIndex: 200,
        size: {
            x: 60,
            y: 60
        },
        type: ig.Entity.TYPE.B,
        control: null,
        pointer: null,
        seat: null,
        unitAnimSheets: [new ig.AnimationSheet("media/graphics/game/unit/friend/cat/idle.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/panda/idle.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/repair/idle.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/wolf/idle.png", 160, 160)],
        unitAnims: [],
        unitDragAnimSheets: [new ig.AnimationSheet("media/graphics/game/unit/friend/cat/drag.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/panda/drag.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/repair/drag.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/wolf/drag.png", 160, 160)],
        unitDragAnims: [],
        unitFireAnimSheets: [new ig.AnimationSheet("media/graphics/game/unit/friend/cat/fire.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/panda/fire.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/repair/fire.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/wolf/fire.png", 160, 160)],
        unitFireAnims: [],
        unitFireLowAnimSheets: [new ig.AnimationSheet("media/graphics/game/unit/friend/cat/fire-low.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/panda/fire.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/repair/fire.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/wolf/fire.png", 160, 160)],
        unitFireLowAnims: [],
        unitFireHighAnimSheets: [new ig.AnimationSheet("media/graphics/game/unit/friend/cat/fire-high.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/panda/fire.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/repair/fire.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/wolf/fire.png", 160, 160)],
        unitFireHighAnims: [],
        unitFireAnim: null,
        barrelPos: [{
            x: 106,
            y: 89
        }, {
            x: 111,
            y: 55
        }, {
            x: 0,
            y: 0
        }, {
            x: 109,
            y: 91
        }],
        barrelLowPos: [{
            x: 102,
            y: 96
        }, {
            x: 111,
            y: 55
        }, {
            x: 0,
            y: 0
        }, {
            x: 109,
            y: 91
        }],
        barrelHighPos: [{
            x: 107,
            y: 79
        }, {
            x: 111,
            y: 55
        }, {
            x: 0,
            y: 0
        }, {
            x: 109,
            y: 91
        }],
        refireRate: [1, 0.5, 4, 6],
        refireDelay: [],
        fireDamage: [13, 60, 5, 5],
        fireRange: 0,
        superMode: !1,
        superRefireRate: [1.2, 0.6, 5, 6],
        superRefireDelay: [],
        superHpDrain: 100,
        superUnitFireAnims: [],
        superUnitFireLowAnims: [],
        superUnitFireHighAnims: [],
        moveVel: {
            x: 0,
            y: 0
        },
        hp: 1E3,
        maxHp: 1E3,
        baseHpDrain: 50,
        unitType: 0,
        relDrawPos: {
            x: 0,
            y: 0
        },
        pointerRelPos: {
            x: 0,
            y: 0
        },
        preDragPos: {
            x: 0,
            y: 0
        },
        isDragging: !1,
        isDying: !1,
        isFiring: !1,
        hasShot: !1,
        lastShotTime: -10,
        dieTime: 0,
        spawnTime: 0,
        alpha: 1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            for (b = 0; b < this.unitAnimSheets.length; b++) this.unitAnims.push(new ig.Animation(this.unitAnimSheets[b], 0.2, [0, 1, 2]));
            for (b = 0; b < this.unitDragAnimSheets.length; b++) this.unitDragAnims.push(new ig.Animation(this.unitDragAnimSheets[b], 1, [0]));
            for (b = 0; b < this.unitFireAnimSheets.length; b++) this.unitFireAnims.push(new ig.Animation(this.unitFireAnimSheets[b], 0.1, [0, 1, 2]));
            this.unitFireAnims[3].frameTime = 0.05;
            for (b = 0; b < this.unitFireLowAnimSheets.length; b++) this.unitFireLowAnims.push(new ig.Animation(this.unitFireLowAnimSheets[b], 0.1, [0, 1, 2]));
            this.unitFireLowAnims[3].frameTime = 0.05;
            for (b = 0; b < this.unitFireHighAnimSheets.length; b++) this.unitFireHighAnims.push(new ig.Animation(this.unitFireHighAnimSheets[b], 0.1, [0, 1, 2]));
            this.unitFireHighAnims[3].frameTime = 0.05;
            for (b = 0; b < this.refireRate.length; b++) this.refireDelay.push(1 / this.refireRate[b]);
            this.superUnitFireAnims.push(new ig.Animation(this.unitFireAnimSheets[0], 0.1, [0, 1, 2]));
            this.superUnitFireAnims.push(new ig.Animation(this.unitFireAnimSheets[1], 0.1, [0, 1, 2]));
            this.superUnitFireAnims.push(new ig.Animation(this.unitFireAnimSheets[2], 0.05, [0, 1, 2]));
            this.superUnitFireAnims.push(new ig.Animation(this.unitFireAnimSheets[3], 0.0375, [0, 1, 2]));
            this.superUnitFireLowAnims.push(new ig.Animation(this.unitFireLowAnimSheets[0], 0.1, [0, 1, 2]));
            this.superUnitFireLowAnims.push(new ig.Animation(this.unitFireLowAnimSheets[1], 0.1, [0, 1, 2]));
            this.superUnitFireLowAnims.push(new ig.Animation(this.unitFireLowAnimSheets[2], 0.05, [0, 1, 2]));
            this.superUnitFireLowAnims.push(new ig.Animation(this.unitFireLowAnimSheets[3], 0.0375, [0, 1, 2]));
            this.superUnitFireHighAnims.push(new ig.Animation(this.unitFireHighAnimSheets[0], 0.1, [0, 1, 2]));
            this.superUnitFireHighAnims.push(new ig.Animation(this.unitFireHighAnimSheets[1], 0.1, [0, 1, 2]));
            this.superUnitFireHighAnims.push(new ig.Animation(this.unitFireHighAnimSheets[2], 0.05, [0, 1, 2]));
            this.superUnitFireHighAnims.push(new ig.Animation(this.unitFireHighAnimSheets[3], 0.0375, [0, 1, 2]));
            for (b = 0; b < this.superRefireRate.length; b++) this.superRefireDelay.push(1 / this.superRefireRate[b]);
            this.pos.x -= 0.5 * this.size.x;
            this.pos.y -= 0.5 * this.size.y;
            this.relDrawPos.x = 0.5 * -(this.unitAnims[this.unitType].sheet.width -
                this.size.x);
            this.relDrawPos.y = 0.5 * -(this.unitAnims[this.unitType].sheet.height - this.size.y)
        },
        update: function() {
            this.parent();
            if (!ig.game.gamePaused) {
                if (this.isDying) this.alpha -= 0.5 * ig.system.tick, 0 > this.alpha && (this.alpha = 0), this.pos.x += this.moveVel.x * ig.system.tick, this.pos.y += this.moveVel.y * ig.system.tick, 2 < this.control.gameTime - this.dieTime && this.kill();
                else if (this.isDragging) this.unitDragAnims[this.unitType].update();
                else if (this.isFiring) {
                    this.unitFireAnim && this.unitFireAnim.update();
                    this.hp -= this.baseHpDrain * ig.system.tick;
                    if (0 >= this.hp) {
                        this.hp = 0;
                        this.seat.unit = null;
                        this.seat.drawTarget = !0;
                        this.die();
                        return
                    }
                    if (1 <= this.unitFireAnim.loopCount) {
                        var b = this.refireDelay[this.unitType];
                        this.superMode && (b = this.superRefireDelay[this.unitType]);
                        this.control.gameTime - this.lastShotTime > b ? this.shoot() : (this.isFiring = !1, this.unitAnims[this.unitType].rewind())
                    }
                } else {
                    this.unitAnims[this.unitType].update();
                    this.hp = this.superMode ? this.hp - this.superHpDrain * ig.system.tick : this.hp - this.baseHpDrain * ig.system.tick;
                    if (0 >= this.hp) {
                        this.hp = 0;
                        this.seat.unit = null;
                        this.seat.drawTarget = !0;
                        this.die();
                        return
                    }
                    b = this.refireDelay[this.unitType];
                    this.superMode && (b = this.superRefireDelay[this.unitType]);
                    this.control.gameTime - this.lastShotTime > b && this.shoot()
                }
                this.isDragging && (this.pos.x = this.pointer.pos.x + this.pointerRelPos.x, this.pos.y = this.pointer.pos.y + this.pointerRelPos.y)
            }
        },
        draw: function() {
            this.parent();
            var b = -ig.game.screen.x + this.pos.x + this.relDrawPos.x,
                c = -ig.game.screen.y + this.pos.y + this.relDrawPos.y;
            this.isDragging ? this.unitDragAnims[this.unitType].draw(b, c) : this.isFiring ? this.unitFireAnim && this.unitFireAnim.draw(b, c) : (this.isDying && (ig.system.context.globalAlpha = this.alpha), this.unitAnims[this.unitType].draw(b, c), this.isDying && (ig.system.context.globalAlpha = 1))
        },
        clicked: function(b) {
            !ig.game.gamePaused && (!this.isDying && this.touches(b)) && (this.isDragging = !0, this.pointer = b, this.preDragPos.x = this.pos.x, this.preDragPos.y = this.pos.y, this.pointerRelPos.x = this.pos.x - this.pointer.pos.x, this.pointerRelPos.y = this.pos.y -
                this.pointer.pos.y, this.control.tank.showTargets(), this.zIndex += 1E3, ig.game.sortEntitiesDeferred())
        },
        released: function() {
            if (this.isDragging) {
                this.pos.x = this.pointer.pos.x + this.pointerRelPos.x;
                this.pos.y = this.pointer.pos.y + this.pointerRelPos.y;
                for (var b = !0, c = null, d = null, e = this.pos.x, f = this.pos.y, l = this.pos.x + this.size.x, q = this.pos.y + this.size.y, r = 0; r < this.control.tank.seats.length; r++) {
                    var g = this.control.tank.seats[r],
                        m = g.pos.x,
                        n = g.pos.y,
                        p = g.pos.x + g.size.x,
                        s = g.pos.y + g.size.y;
                    if (e < p && (l > m && f < s && q > n) && (b = p - e, l < p && (b = l - m), m = s - f, q < s && (m = q - n), n = b * m, b = !1, !c || n > c.area)) c = {
                        seat: g,
                        area: n
                    }
                }
                if (b) {
                    if (this.pos.x >= this.preDragPos.x + this.size.x || this.pos.x + this.size.x <= this.preDragPos.x || this.pos.y >= this.preDragPos.y + this.size.y || this.pos.y + this.size.y <= this.preDragPos.y) {
                        this.seat.unit = null;
                        this.die();
                        this.control.tank.hideTargets();
                        return
                    }
                } else c && c.seat != this.seat && (d = c.seat);
                this.isDragging = !1;
                this.pos.x = this.preDragPos.x;
                this.pos.y = this.preDragPos.y;
                this.zIndex -= 1E3;
                ig.game.sortEntitiesDeferred();
                d && (c = d.unit, this.seat.unit = c, null != c && (c.seat = this.seat, c.snapPosToSeat()), d.unit = this, this.seat = d, this.snapPosToSeat());
                this.control.tank.hideTargets()
            }
        },
        snapPosToSeat: function() {
            this.pos.x = this.seat.pos.x + this.seat.size.x / 2 - this.size.x / 2;
            this.pos.y = this.seat.pos.y + this.seat.size.y / 2 - this.size.y / 2
        },
        die: function() {
            if (!this.isDying) {
                this.isDying = !0;
                this.isDragging = this.isFiring = !1;
                this.alpha = 0.5;
                this.moveVel.x = -15;
                this.moveVel.y = -100;
                this.dieTime = this.control.gameTime;
                this.unitAnims[this.unitType].rewind();
                this.seat && (this.seat = this.seat.unit = null);
                try {
                    ig.soundHandler.playSound("death")
                } catch (b) {
                    console.log(b)
                }
            }
        },
        kill: function() {
            this.parent();
            this.seat && (this.seat.unit = null)
        },
        shoot: function() {
            if (2 == this.unitType)
                if (this.control.tank.hp >= this.control.tank.maxHp[this.control.tank.tankType]) this.isFiring = !1;
                else {
                    this.control.tank.deferredHealAmt += this.fireDamage[this.unitType];
                    this.unitFireAnim = this.superMode ? this.superUnitFireAnims[this.unitType] : this.unitFireAnims[this.unitType];
                    this.unitFireAnim.rewind();
                    this.isFiring = !0;
                    this.lastShotTime = this.control.gameTime;
                    try {
                        ig.soundHandler.playSound("repair")
                    } catch (b) {
                        console.log(b)
                    }
                } else {
                var c = null,
                    d = this.control.enemies,
                    e = 9E5;
                0 < this.fireRange && (e = this.fireRange);
                for (var f = 0, l = 0, f = this.pos.x + this.size.x / 2, l = this.pos.y + this.size.y / 2, q = this.pos.x + this.relDrawPos.x + this.barrelPos[this.unitType].x, r = this.pos.y + this.relDrawPos.y + this.barrelPos[this.unitType].y, g = 0; g < d.length; g++) {
                    var m = d[g],
                        n = m.pos.x + m.size.x / 2,
                        p = m.pos.y + m.size.y / 2;
                    n <= q || (n = (f - n) * (f - n) + (l - p) * (l -
                        p), n < e && (c = m, e = n))
                }
                if (null == c) this.isFiring = !1;
                else {
                    f = c.pos.x + c.size.x / 2;
                    l = c.pos.y + c.size.y / 2;
                    c = 0;
                    1 == this.unitType && (c = 1);
                    d = ig.game.spawnEntity(EntityGameBullet, q, r, {
                        control: this.control,
                        bulletType: c
                    });
                    d.sourceType = 1;
                    d.targetType = 2;
                    d.startVel = 500;
                    d.zIndex = this.zIndex - 1;
                    d.damage = this.fireDamage[this.unitType];
                    if (1 == this.unitType) {
                        if (!1 == d.setTargetArc(f, l)) {
                            d.kill();
                            return
                        }
                    } else d.setTarget(f, l);
                    0 == this.unitType && (d = ig.game.spawnEntity(EntityGameBullet, q, r - 1, {
                        control: this.control,
                        bulletType: c
                    }), d.sourceType = 1, d.targetType = 2, d.startVel = 500, d.zIndex = this.zIndex - 1, d.damage = this.fireDamage[this.unitType], d.setTarget(f, l - 1), d.angle -= Math.PI / (45 - 25 * Math.random()), e = Math.cos(d.angle), g = Math.sin(d.angle), d.moveVel.x = e * d.startVel, d.moveVel.y = g * d.startVel, d = ig.game.spawnEntity(EntityGameBullet, q, r + 1, {
                        control: this.control,
                        bulletType: c
                    }), d.sourceType = 1, d.targetType = 2, d.startVel = 500, d.zIndex = this.zIndex - 1, d.damage = this.fireDamage[this.unitType], d.setTarget(f, l + 1), d.angle += Math.PI / (45 - 25 * Math.random()), e = Math.cos(d.angle), g = Math.sin(d.angle), d.moveVel.x = e * d.startVel, d.moveVel.y = g * d.startVel);
                    q = d.angle;
                    this.unitFireAnim = this.superMode ? this.superUnitFireAnims[this.unitType] : this.unitFireAnims[this.unitType];
                    q > Math.PI / 6 && q < Math.PI ? this.unitFireAnim = this.superMode ? this.superUnitFireLowAnims[this.unitType] : this.unitFireLowAnims[this.unitType] : q > Math.PI && q < Math.PI + 5 * Math.PI / 6 && (this.unitFireAnim = this.superMode ? this.superUnitFireHighAnims[this.unitType] : this.unitFireHighAnims[this.unitType]);
                    this.unitFireAnim.rewind();
                    this.isFiring = !0;
                    if (0 == this.unitType) try {
                        ig.soundHandler.playSound("shotgun")
                    } catch (s) {
                        console.log(s)
                    } else if (1 == this.unitType) try {
                        ig.soundHandler.playSound("cannon")
                    } catch (u) {
                        console.log(u)
                    } else if (2 == this.unitType) try {
                            ig.soundHandler.playSound("repair")
                        } catch (t) {
                            console.log(t)
                        } else if (3 == this.unitType) try {
                            ig.soundHandler.playSound("machinegun")
                        } catch (y) {
                            console.log(y)
                        }
                        this.lastShotTime = this.control.gameTime;
                    ig.game.sortEntitiesDeferred()
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-unit-queue").requires("impact.entity", "game.entities.game-unit-friendly").defines(function() {
    EntityGameUnitQueue = ig.Entity.extend({
        zIndex: 550,
        size: {
            x: 60,
            y: 60
        },
        type: ig.Entity.TYPE.B,
        control: null,
        pointer: null,
        unitAnimSheets: [new ig.AnimationSheet("media/graphics/game/unit/friend/cat/idle.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/panda/idle.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/repair/idle.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/wolf/idle.png", 160, 160)],
        unitAnims: [],
        unitDragAnimSheets: [new ig.AnimationSheet("media/graphics/game/unit/friend/cat/drag.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/panda/drag.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/repair/drag.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/friend/wolf/drag.png", 160, 160)],
        unitDragAnims: [],
        unitType: 0,
        relDrawPos: {
            x: 0,
            y: 0
        },
        pointerRelPos: {
            x: 0,
            y: 0
        },
        preDragPos: {
            x: 0,
            y: 0
        },
        isDragging: !1,
        isWaiting: !1,
        timeWaited: 0,
        waitTime: 3,
        init: function(b, c, d) {
            this.parent(b, c, d);
            for (b = 0; b < this.unitAnimSheets.length; b++) this.unitAnims.push(new ig.Animation(this.unitAnimSheets[b], 0.2, [0, 1, 2]));
            for (b = 0; b < this.unitDragAnimSheets.length; b++) this.unitDragAnims.push(new ig.Animation(this.unitDragAnimSheets[b], 1, [0]));
            this.relDrawPos.x = 3 - 0.5 * (this.unitAnims[this.unitType].sheet.width - this.size.x);
            this.relDrawPos.y = 8 - 0.5 * (this.unitAnims[this.unitType].sheet.height - this.size.y);
            if (b = ig.game.currentTeam) c = Math.floor(Math.random() * b.length), this.unitType = b[c];
            this.preDragPos.x = this.pos.x;
            this.preDragPos.y = this.pos.y
        },
        update: function() {
            this.parent();
            ig.game.gamePaused || (this.isDragging ? this.unitDragAnims[this.unitType].update() : this.isWaiting ? (this.timeWaited += ig.system.tick, this.timeWaited >= this.waitTime && this.stopWaiting()) : this.unitAnims[this.unitType].update());
            this.isDragging && (this.pos.x = this.pointer.pos.x + this.pointerRelPos.x, this.pos.y = this.pointer.pos.y + this.pointerRelPos.y)
        },
        draw: function() {
            this.parent();
            if (this.isDragging) this.unitDragAnims[this.unitType].draw(this.pos.x +
                this.relDrawPos.x, this.pos.y + this.relDrawPos.y);
            else if (this.isWaiting) {
                var b = this.timeWaited / this.waitTime,
                    c = this.size.x,
                    d = this.size.y * b,
                    e = -ig.game.screen.x + this.pos.x,
                    b = -ig.game.screen.y + this.pos.y + this.size.y * (1 - b);
                ig.system.context.globalAlpha = 0.5;
                ig.system.context.fillStyle = "#00FF00";
                ig.system.context.fillRect(e, b, c, d);
                ig.system.context.globalAlpha = 1
            } else this.unitAnims[this.unitType].draw(-ig.game.screen.x + this.pos.x + this.relDrawPos.x, -ig.game.screen.y + this.pos.y + this.relDrawPos.y)
        },
        clicked: function(b) {
            !ig.game.gamePaused && (!this.isWaiting && this.touches(b)) && (this.isDragging = !0, this.pointer = b, this.pointerRelPos.x = this.pos.x - this.pointer.pos.x, this.pointerRelPos.y = this.pos.y - this.pointer.pos.y, this.control.tank.showTargets(), this.zIndex = 1550, ig.game.sortEntitiesDeferred())
        },
        released: function() {
            if (this.isDragging) {
                this.pos.x = this.pointer.pos.x + this.pointerRelPos.x;
                this.pos.y = this.pointer.pos.y + this.pointerRelPos.y;
                for (var b = !0, c = null, d = this.pos.x, e = this.pos.y, f = this.pos.x + this.size.x, l = this.pos.y + this.size.y, q = 0; q < this.control.tank.seats.length; q++) {
                    var r = this.control.tank.seats[q],
                        g = r.pos.x,
                        m = r.pos.y,
                        n = r.pos.x + r.size.x,
                        p = r.pos.y + r.size.y;
                    if (d < n && (f > g && e < p && l > m) && (b = n - d, f < n && (b = f - g), g = p - e, l < p && (g = l - m), m = b * g, b = !1, !c || m > c.area)) c = {
                        seat: r,
                        area: m
                    }
                }
                if (b) {
                    if (this.pos.x >= this.preDragPos.x + this.size.x || this.pos.x + this.size.x <= this.preDragPos.x || this.pos.y >= this.preDragPos.y + this.size.y || this.pos.y + this.size.y <= this.preDragPos.y) c = ig.game.spawnEntity(EntityGameUnitFriendly, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                        control: this.control,
                        unitType: this.unitType
                    }), c.zIndex = this.zIndex, c.die(), this.startWaiting()
                } else c && (r = c.seat, r.spawnUnit(this.unitType), this.startWaiting(), this.control.tank.checkUnitMatches(), this.control.hideGuide());
                this.isDragging = !1;
                this.pos.x = this.preDragPos.x;
                this.pos.y = this.preDragPos.y;
                this.control.tank.hideTargets();
                this.zIndex = 550;
                ig.game.sortEntitiesDeferred()
            }
        },
        startWaiting: function() {
            this.isWaiting = !0;
            this.timeWaited = 0
        },
        stopWaiting: function() {
            this.isWaiting = !1;
            var b = ig.game.currentTeam;
            if (b) {
                var c = Math.floor(Math.random() * b.length);
                this.unitType = b[c]
            }
            try {
                ig.soundHandler.playSound("reload")
            } catch (d) {
                console.log(d)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-ui").requires("impact.entity", "game.entities.button-mute", "game.entities.button-pause", "game.entities.game-button-mainweapon", "game.entities.game-unit-queue", "game.entities.howtoplay").defines(function() {
    EntityGameUi = ig.Entity.extend({
        zIndex: 500,
        control: null,
        front: null,
        topBarImage: new ig.Image("media/graphics/game/ui/topbar.png"),
        bottomBarBackImage: new ig.Image("media/graphics/game/ui/bottombarback.png"),
        muteButton: null,
        pauseButton: null,
        mainweaponButton: null,
        unitQueues: [],
        distanceText: "0",
        coinText: "0",
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.front = ig.game.spawnEntity(EntityGameUiFront, 0, 0, {
                back: this
            }), this.muteButton = ig.game.spawnEntity(EntityButtonMute, 420, 8), this.pauseButton = ig.game.spawnEntity(EntityButtonPause, 450, 8, {
                control: this.control
            }), this.mainweaponButton = ig.game.spawnEntity(EntityGameButtonMainweapon, 369, 531, {
                control: this.control
            }), this.unitQueues.push(ig.game.spawnEntity(EntityGameUnitQueue, 30, 550, {
                control: this.control
            })), this.unitQueues.push(ig.game.spawnEntity(EntityGameUnitQueue, 132, 550, {
                control: this.control
            })), this.unitQueues.push(ig.game.spawnEntity(EntityGameUnitQueue, 230, 550, {
                control: this.control
            })), ig.game.sortEntitiesDeferred())
        },
        update: function() {
            this.parent();
            this.distanceText = Math.floor(this.control.distanceTravelled).toString();
            this.coinText = Math.floor(this.control.coinsCollected).toString()
        },
        draw: function() {
            this.parent();
            this.topBarImage.draw(-ig.game.screen.x + 0, -ig.game.screen.y + 0);
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.font = "10px avenger";
            str = "km";
            var b = ig.system.context.measureText(str).width,
                c = ig.system.context.measureText("m").width,
                b = -ig.game.screen.x + 378,
                c = -ig.game.screen.y + 18 + c;
            ig.system.context.fillText(str, b, c);
            ig.system.context.font = "16px avenger_bold";
            str = this.distanceText;
            b = ig.system.context.measureText(str).width;
            c = ig.system.context.measureText("m").width;
            b = -ig.game.screen.x + 377 - b;
            c = -ig.game.screen.y + 13 + c;
            ig.system.context.fillText(str, b, c);
            ig.system.context.font = "16px avenger_bold";
            str = this.coinText;
            b = ig.system.context.measureText(str).width;
            c = ig.system.context.measureText("m").width;
            b = -ig.game.screen.x + 292 - b;
            c = -ig.game.screen.y + 13 + c;
            ig.system.context.fillText(str, b, c);
            this.bottomBarBackImage.draw(-ig.game.screen.x + 0, -ig.game.screen.y + 515);
            var d = this.control.tank.hp / this.control.tank.maxHp[this.control.tank.tankType],
                b = -ig.game.screen.x + 40,
                c = -ig.game.screen.y + 16;
            ig.system.context.fillStyle = 0.25 > d ? "#FF0000" : 0.5 > d ? "#FFFF00" : "#00FF00";
            ig.system.context.fillRect(b, c, 158 * d, 10)
        }
    });
    EntityGameUiFront = ig.Entity.extend({
        zIndex: 600,
        back: null,
        control: null,
        bottomBarFrontImage: new ig.Image("media/graphics/game/ui/bottombarfront.png"),
        guideImage: new ig.Image("media/graphics/game/ui/guide1.png"),
        handImage: new ig.Image("media/graphics/game/ui/finger.png"),
        showGuide: !0,
        guideStartTime: 0,
        handOffsetY: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.control = this.back.control
        },
        draw: function() {
            this.parent();
            this.bottomBarFrontImage.draw(-ig.game.screen.x + 0, -ig.game.screen.y + 515);
            var b = 200,
                c = ig.system.height,
                d = -ig.game.screen.x + ig.system.width,
                e = -ig.game.screen.y;
            ig.system.context.fillStyle = "#000000";
            ig.system.context.fillRect(d, e, b, c);
            d = -ig.game.screen.x - 200;
            ig.system.context.fillStyle = "#000000";
            ig.system.context.fillRect(d, e, b, c);
            b = ig.system.width + 400;
            c = 200;
            e = -ig.game.screen.y - 200;
            ig.system.context.fillStyle = "#000000";
            ig.system.context.fillRect(d, e, b, c);
            e = -ig.game.screen.y + ig.system.height + 200;
            ig.system.context.fillStyle = "#000000";
            ig.system.context.fillRect(d, e, b, c);
            this.showGuide && (this.guideImage.draw(-ig.game.screen.x + 118, -ig.game.screen.y + 282), d = -ig.game.screen.x +
                138, e = -ig.game.screen.y + 577 + this.handOffsetY, this.handImage.draw(-ig.game.screen.x + d, -ig.game.screen.y + e))
        },
        update: function() {
            this.parent();
            if (this.showGuide) {
                var b = this.control.gameTime - this.guideStartTime;
                1 >= b ? this.handOffsetY = -300 * b : 2 <= b && (this.guideStartTime = this.control.gameTime)
            }
        }
    });
    EntityGameUIPause = ig.Entity.extend({
        zIndex: 700,
        control: null,
        pointer: null,
        bgImage: new ig.Image("media/graphics/game/ui/menubg.jpg"),
        bg2Image: new ig.Image("media/graphics/game/ui/menubg2.png"),
        titleImage: new ig.Image("media/graphics/game/ui/pausetitle.png"),
        replayImage: new ig.Image("media/graphics/game/ui/replay.png"),
        homeImage: new ig.Image("media/graphics/game/ui/home.png"),
        howtoplayImage: new ig.Image("media/graphics/game/ui/howtoplay.png"),
        backImage: new ig.Image("media/graphics/game/ui/back.png"),
        bgPos: {
            x: 0,
            y: 0
        },
        bg2Pos: {
            x: 0,
            y: 0
        },
        titlePos: {
            x: 153,
            y: 60
        },
        replayBox: {
            x: 94,
            y: 172,
            w: 314,
            h: 75
        },
        homeBox: {
            x: 94,
            y: 250,
            w: 314,
            h: 75
        },
        howtoplayBox: {
            x: 94,
            y: 329,
            w: 314,
            h: 75
        },
        backBox: {
            x: 94,
            y: 407,
            w: 314,
            h: 75
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            1 < ig.game.getEntitiesByType(EntityGameUIPause).length && this.kill()
        },
        ready: function() {
            var b = ig.game.getEntitiesByType(EntityPointer);
            0 < b.length && (this.pointer = b[0]);
            b = this.pos.x;
            this.pos.x = ig.system.width + b;
            this.tween({
                pos: {
                    x: b
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Elastic.EaseOut
            }).start()
        },
        draw: function() {
            this.parent();
            this.bgImage.draw(this.bgPos.x, this.bgPos.y);
            this.bg2Image.draw(this.pos.x + this.bg2Pos.x, this.pos.y + this.bg2Pos.y);
            this.titleImage.draw(this.pos.x + this.titlePos.x, this.pos.y + this.titlePos.y);
            this.replayImage.draw(this.pos.x + this.replayBox.x, this.pos.y +
                this.replayBox.y);
            this.homeImage.draw(this.pos.x + this.homeBox.x, this.pos.y + this.homeBox.y);
            this.howtoplayImage.draw(this.pos.x + this.howtoplayBox.x, this.pos.y + this.howtoplayBox.y);
            this.backImage.draw(this.pos.x + this.backBox.x, this.pos.y + this.backBox.y)
        },
        update: function() {
            this.parent();
            ig.input.released("click") && this.released()
        },
        released: function() {
            var b = {
                    x1: this.pointer.pos.x,
                    y1: this.pointer.pos.y,
                    x2: this.pointer.pos.x + this.pointer.size.x,
                    y2: this.pointer.pos.y + this.pointer.size.y
                },
                c = {
                    x1: this.backBox.x,
                    y1: this.backBox.y,
                    x2: this.backBox.x + this.backBox.w,
                    y2: this.backBox.y + this.backBox.h
                };
            if (this.aabbCheck(b, c)) {
                this.tween({
                    pos: {
                        x: ig.system.width
                    }
                }, 0.5, {
                    easing: ig.Tween.Easing.Elastic.EaseIn,
                    entity: this,
                    onComplete: function() {
                        this.entity.control.unpauseGame()
                    }
                }).start();
                try {
                    ig.soundHandler.playSound("click")
                } catch (d) {
                    console.log(d)
                }
            } else if (c = {
                x1: this.replayBox.x,
                y1: this.replayBox.y,
                x2: this.replayBox.x + this.replayBox.w,
                y2: this.replayBox.y + this.replayBox.h
            }, this.aabbCheck(b, c)) {
                this.control.unpauseGame();
                ig.game.director.loadLevel(ig.game.director.currentLevel);
                try {
                    ig.soundHandler.playSound("click")
                } catch (e) {
                    console.log(e)
                }
            } else if (c = {
                x1: this.homeBox.x,
                y1: this.homeBox.y,
                x2: this.homeBox.x + this.homeBox.w,
                y2: this.homeBox.y + this.homeBox.h
            }, this.aabbCheck(b, c)) {
                this.control.unpauseGame();
                ig.game.director.loadLevel(1);
                try {
                    ig.soundHandler.playSound("click")
                } catch (f) {
                    console.log(f)
                }
            } else if (c = {
                x1: this.howtoplayBox.x,
                y1: this.howtoplayBox.y,
                x2: this.howtoplayBox.x + this.howtoplayBox.w,
                y2: this.howtoplayBox.y +
                    this.howtoplayBox.h
            }, this.aabbCheck(b, c)) {
                ig.game.spawnEntity(EntityHowtoplay, 0, 0, {
                    control: this.control
                }).ready();
                try {
                    ig.soundHandler.playSound("click")
                } catch (l) {
                    console.log(l)
                }
            }
        },
        aabbCheck: function(b, c) {
            return b.x1 < c.x2 && b.x2 > c.x1 && b.y1 < c.y2 && b.y2 > c.y1 ? !0 : !1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-tank-seat").requires("impact.entity").defines(function() {
    EntityGameTankSeat = ig.Entity.extend({
        zIndex: 150,
        size: {
            x: 60,
            y: 60
        },
        type: ig.Entity.TYPE.B,
        control: null,
        seatImage: new ig.Image("media/graphics/game/tank/seat.png"),
        seatRedImage: new ig.Image("media/graphics/game/tank/seat-red.png"),
        targetImage: new ig.Image("media/graphics/game/ui/target.png"),
        unit: null,
        posOffsetX: 0,
        posOffsetY: 0,
        isBumped: !1,
        drawTarget: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.pos.x -= 0.5 * this.size.x;
            this.pos.y -= 0.5 * this.size.y
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            var b = -ig.game.screen.x + this.pos.x + 0.5 * (this.size.x - this.seatImage.data.width),
                c = -ig.game.screen.y + this.pos.y + this.size.y - 2;
            this.drawBar(b + 19, c + 7, this.seatImage.data.width - 36, this.seatImage.data.height - 14);
            2 != this.control.tank.tankType ? this.seatImage.draw(b, c) : this.seatRedImage.draw(b, c);
            this.drawTarget && (b = -ig.game.screen.x + this.pos.x + 0.5 * (this.size.x - this.targetImage.data.width), c = -ig.game.screen.y + this.pos.y +
                0.5 * (this.size.y - this.targetImage.data.height), this.targetImage.draw(b, c))
        },
        drawBar: function(b, c, d, e) {
            ig.system.context.fillStyle = "#999999";
            ig.system.context.fillRect(b, c, d, e);
            if (this.unit) {
                var f = this.unit.hp / this.unit.maxHp;
                0 < f && (ig.system.context.fillStyle = 0.5 < f ? "#00FF00" : 0.2 < f ? "#FFFF00" : "#FF0000", ig.system.context.fillRect(b, c, d * f, e))
            }
        },
        bump: function(b, c) {
            this.isBumped || (this.isBumped = !0, this.posOffsetX = b, this.posOffsetY = c, this.pos.x += b, this.pos.y += c, this.unit && (this.unit.pos.x = this.pos.x + this.size.x / 2 - this.unit.size.x / 2, this.unit.pos.y = this.pos.y + this.size.y / 2 - this.unit.size.y / 2))
        },
        unbump: function() {
            this.isBumped && (this.isBumped = !1, this.pos.y -= this.posOffsetY, this.pos.x -= this.posOffsetX, this.unit && (this.unit.pos.x = this.pos.x + this.size.x / 2 - this.unit.size.x / 2, this.unit.pos.y = this.pos.y + this.size.y / 2 - this.unit.size.y / 2))
        },
        movePos: function(b, c) {
            this.pos.x += b;
            this.pos.y += c;
            this.unit && (this.unit.pos.x += b, this.unit.pos.y += c)
        },
        spawnUnit: function(b) {
            this.unit && this.unit.die();
            this.unit = ig.game.spawnEntity(EntityGameUnitFriendly, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                control: this.control,
                seat: this,
                unitType: b
            });
            this.unit.spawnTime = this.control.gameTime;
            this.control.tank.rearrangeSeatUnitZIndex()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-tank").requires("impact.entity", "game.entities.game-tank-seat").defines(function() {
    EntityGameTank = ig.Entity.extend({
        zIndex: 100,
        size: {
            x: 240,
            y: 120
        },
        relDrawPos: {
            x: 0,
            y: 0
        },
        control: null,
        tankIdleAnim: [new ig.Animation(new ig.AnimationSheet("media/graphics/game/tank/tank1/idle.png", 438, 375), 0.2, [0, 1]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/tank/tank2/idle.png", 438, 375), 0.2, [0, 1]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/tank/tank3/idle.png", 438, 375), 0.2, [0, 1])],
        tankShootAnim: [new ig.Animation(new ig.AnimationSheet("media/graphics/game/tank/tank1/fire.png", 438, 375), 0.2, [0, 1, 2, 3]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/tank/tank2/fire.png", 438, 375), 0.2, [0, 1, 2, 3]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/tank/tank3/fire.png", 438, 375), 0.2, [0, 1, 2, 3])],
        barrelPos: [{
            x: 349,
            y: 175
        }, {
            x: 391,
            y: 105
        }, {
            x: 294,
            y: 154
        }],
        fireDamage: [500, 500, 600, 500],
        bulletType: [1, 5, 6],
        bulletStartVel: [250, 250, 0],
        tankType: 0,
        hp: 1E3,
        maxHp: [1E3, 1200, 1500],
        defence: [0, 1, 2],
        seats: [],
        seatPos: [{
            x: 160,
            y: 70
        }, {
            x: 242,
            y: 135
        }, {
            x: 150,
            y: 193
        }],
        isFiring: !1,
        hoverOffset: {
            x: 0,
            y: 0
        },
        minHover: {
            x: -5,
            y: 0
        },
        maxHover: {
            x: 5,
            y: 0
        },
        hoverDirection: {
            x: 2,
            y: 0
        },
        deferredHealAmt: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.relDrawPos.x = 0.5 * -(this.tankIdleAnim[this.tankType].sheet.width - this.size.x);
            this.relDrawPos.y = -75 - 0.5 * (this.tankIdleAnim[this.tankType].sheet.height - this.size.y);
            if (!ig.global.wm) {
                for (d = 0; d < this.seatPos.length; d++) b = this.pos.x + this.seatPos[d].x + this.relDrawPos.x, c = this.pos.y + this.seatPos[d].y + this.relDrawPos.y, this.seats.push(ig.game.spawnEntity(EntityGameTankSeat, b, c, {
                    control: this.control
                }));
                ig.game.sortEntitiesDeferred()
            }
            this.minHover.x = -5 * Math.random();
            this.maxHover.x = 5 * Math.random();
            0.5 <= Math.random() && (this.hoverDirection.x *= -1);
            this.hp = this.maxHp[this.tankType]
        },
        update: function() {
            this.parent();
            if (!this.control.isPaused) {
                if (this.isFiring)
                    if (this.tankShootAnim[this.tankType].update(), 1 <= this.tankShootAnim[this.tankType].loopCount) this.isFiring = !1;
                    else {
                        for (var b = 0; b < this.seats.length; b++) this.seats[b].unbump();
                        0 != this.tankShootAnim[this.tankType].frame && (1 == this.tankShootAnim[this.tankType].frame ? 0 == this.tankType ? (this.seats[0].bump(-24, 6), this.seats[1].bump(-24, 6), this.seats[2].bump(0, 6)) : 1 == this.tankType ? (this.seats[0].bump(-19, 6), this.seats[1].bump(-19, 6), this.seats[2].bump(0, 6)) : 2 == this.tankType && (this.seats[0].bump(-20, 0), this.seats[1].bump(-20, 0), this.seats[2].bump(0, 3)) : 2 == this.tankShootAnim[this.tankType].frame ? 0 == this.tankType ? (this.seats[0].bump(-11, 6), this.seats[1].bump(-11, 6)) : 1 == this.tankType ? (this.seats[0].bump(-10, 0), this.seats[1].bump(-10, 0)) : 2 == this.tankType && (this.seats[0].bump(-12, 0), this.seats[1].bump(-12, 0)) : 3 == this.tankShootAnim[this.tankType].frame && (0 == this.tankType ? this.seats[2].bump(0, 6) : 1 == this.tankType ? (this.seats[0].bump(-5, 5), this.seats[1].bump(-5, 5), this.seats[2].bump(0, 6)) : 2 == this.tankType && (this.seats[0].bump(-5, 0), this.seats[1].bump(-5, 0), this.seats[2].bump(0, 3))))
                    }
                if (!this.isFiring) {
                    this.tankIdleAnim[this.tankType].update();
                    for (b = 0; b < this.seats.length; b++) this.seats[b].unbump();
                    if (1 == this.tankIdleAnim[this.tankType].frame)
                        for (b = 0; b < this.seats.length; b++) 2 == b && 2 == this.tankType ? this.seats[b].bump(0, 3) : this.seats[b].bump(0, 6);
                    this.hoverOffset.x += this.hoverDirection.x * ig.system.tick;
                    for (b = 0; b < this.seats.length; b++) this.seats[b].movePos(this.hoverDirection.x * ig.system.tick, 0);
                    this.hoverOffset.x >= this.maxHover.x ? (this.hoverOffset.x = this.maxHover.x, this.hoverDirection.x *= -1, this.minHover.x = -5 * Math.random()) : this.hoverOffset.x <= this.minHover.x && (this.hoverOffset.x = this.minHover.x, this.hoverDirection.x *= -1, this.maxHover.x = 5 * Math.random())
                }
            }
        },
        draw: function() {
            this.parent();
            var b = -ig.game.screen.x + this.pos.x + this.relDrawPos.x + this.hoverOffset.x,
                c = -ig.game.screen.y + this.pos.y + this.relDrawPos.y + this.hoverOffset.y;
            this.isFiring ? this.tankShootAnim[this.tankType].draw(b, c) : this.tankIdleAnim[this.tankType].draw(b, c)
        },
        showTargets: function() {
            for (var b = 0; b < this.seats.length; b++) this.seats[b].drawTarget = !0
        },
        hideTargets: function() {
            for (var b = 0; b < this.seats.length; b++) null != this.seats[b].unit && (this.seats[b].drawTarget = !1)
        },
        rearrangeSeatUnitZIndex: function() {
            for (var b = 200, c = 0; c < this.seats.length; c++) null != this.seats[c].unit && (this.seats[c].unit.zIndex = b, b += 10);
            ig.game.sortEntitiesDeferred()
        },
        fireMainWeapon: function() {
            this.isFiring = !0;
            this.tankShootAnim[this.tankType].rewind();
            this.tankIdleAnim[this.tankType].rewind();
            for (var b = 0; b < this.seats.length; b++) this.seats[b].unbump();
            var b = this.bulletType[this.tankType],
                c = ig.game.spawnEntity(EntityGameBullet, this.pos.x + this.relDrawPos.x + this.barrelPos[this.tankType].x, this.pos.y + this.relDrawPos.y + this.barrelPos[this.tankType].y, {
                    control: this.control,
                    bulletType: b
                });
            c.sourceType = 0;
            c.targetType = 2;
            c.startVel = this.bulletStartVel[this.tankType];
            c.zIndex = 99;
            c.damage = this.fireDamage[this.tankType];
            6 != b && !1 == c.setTargetArc(460, 450) ? c.kill() : ig.game.sortEntitiesDeferred()
        },
        takeDamage: function(b) {
            b -= this.defence[this.tankType];
            0 > b || (this.hp -= b, 0 > this.hp && (this.hp = 0, this.control.endGame()))
        },
        healDamage: function(b) {
            this.hp += b;
            this.hp > this.maxHp[this.tankType] && (this.hp = this.maxHp[this.tankType])
        },
        checkUnitMatches: function() {
            for (var b = -1, c = 0; c < this.seats.length; c++) {
                var d = this.seats[c];
                if (null != d.unit)
                    if (d = d.unit.unitType, -1 == b) b = d;
                    else {
                        if (b != d) {
                            b = -1;
                            break
                        }
                    } else {
                    b = -1;
                    break
                }
            }
            if (-1 == b)
                for (c = 0; c < this.seats.length; c++) d = this.seats[c], null != d.unit && (d.unit.superMode = !1);
            else
                for (c = 0; c < this.seats.length; c++) d = this.seats[c], d.unit.hp = d.unit.maxHp, d.unit.superMode = !0
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-effect").requires("impact.entity").defines(function() {
    EntityGameEffect = ig.Entity.extend({
        zIndex: 210,
        size: {
            x: 1,
            y: 1
        },
        control: null,
        effectAnimSheets: [new ig.AnimationSheet("media/graphics/game/effects/bullethit.png", 150, 150), new ig.AnimationSheet("media/graphics/game/effects/fire.png", 120, 120), new ig.AnimationSheet("media/graphics/game/effects/smoke.png", 80, 80), new ig.AnimationSheet("media/graphics/game/effects/smokered.png", 80, 80), new ig.AnimationSheet("media/graphics/game/effects/smokewhite.png", 80, 80)],
        effectAnims: [],
        effectType: 0,
        relDrawPos: {
            x: 0,
            y: 0
        },
        moveVel: {
            x: 0,
            y: 0
        },
        startVel: 0,
        angle: 0,
        alpha: 1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.effectAnims.push(new ig.Animation(this.effectAnimSheets[0], 0.1, [0, 1, 2, 3]));
            this.effectAnims.push(new ig.Animation(this.effectAnimSheets[1], 0.1, [0, 1]));
            this.setPos(b, c);
            this.relDrawPos.x = 0.5 * -this.effectAnims[this.effectType].sheet.width;
            this.relDrawPos.y = 0.5 * -this.effectAnims[this.effectType].sheet.height;
            this.effectAnims[this.effectType].rewind()
        },
        update: function() {
            this.parent();
            if (!ig.game.gamePaused)
                if (this.pos.x += this.moveVel.x * ig.system.tick, this.pos.y += this.moveVel.y * ig.system.tick, this.effectAnims[this.effectType].update(), 1 <= this.effectAnims[this.effectType].loopCount) this.kill();
                else {
                    var b = Math.max(this.effectAnims[this.effectType].sheet.width, this.effectAnims[this.effectType].sheet.height);
                    (this.pos.x - b > ig.system.width + 100 || this.pos.y - b > ig.system.height + 100 || -100 > this.pos.x + b || -100 > this.pos.y + b) && this.kill()
                }
        },
        draw: function() {
            this.parent();
            var b = -ig.game.screen.x +
                this.pos.x + this.relDrawPos.x,
                c = -ig.game.screen.y + this.pos.y + this.relDrawPos.y;
            this.effectAnims[this.effectType].angle = this.angle;
            this.effectAnims[this.effectType].draw(b, c)
        },
        kill: function() {
            this.parent()
        },
        setPos: function(b, c) {
            this.pos.x = b - 0.5 * this.size.x;
            this.pos.y = c - 0.5 * this.size.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-bullet").requires("impact.entity", "game.entities.game-effect").defines(function() {
    EntityGameBullet = ig.Entity.extend({
        zIndex: 170,
        size: {
            x: 1,
            y: 1
        },
        control: null,
        bulletAnims: [new ig.Animation(new ig.AnimationSheet("media/graphics/game/bullets/bullet.png", 20, 6), 0.2, [0]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/bullets/rocket.png", 35, 21), 0.2, [0]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/bullets/bulletpig.png", 22, 6), 0.2, [0]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/bullets/bulletpighead.png", 39, 40), 0.2, [0]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/bullets/bomb.png", 119, 45), 0.2, [0]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/bullets/fireball.png", 106, 72), 0.2, [0]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/bullets/laser.png", 1, 53), 0.2, [0])],
        bulletSpread: [0.09, 0.09, 0.09, 0.09, 0.09, 0.09, 0],
        bulletLifetime: [0, 0, 0, 0, 0, 0, 1],
        shotTime: 0,
        bulletType: 0,
        relDrawPos: {
            x: 0,
            y: 0
        },
        moveVel: {
            x: 0,
            y: 0
        },
        startVel: 1E3,
        sourceType: 0,
        targetType: 1,
        targetPos: {
            x: 0,
            y: 0
        },
        angle: 0,
        hit: !1,
        damage: 5,
        hasGravity: !1,
        gravity: 500,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.setPos(b, c);
            this.relDrawPos.x = -this.bulletAnims[this.bulletType].sheet.width;
            this.relDrawPos.y = 0.5 * -this.bulletAnims[this.bulletType].sheet.height;
            for (b = 0; b < this.bulletAnims.length; b++) this.bulletAnims[b].pivot.x = this.bulletAnims[b].sheet.width;
            1 == this.bulletType ? (this.size.x = 20, this.size.y = 20, this.relDrawPos.x += 10, this.relDrawPos.y += 10, this.x -= 10, this.y -= 10) : 5 == this.bulletType && (this.size.x = 40, this.size.y = 40, this.relDrawPos.x += 20, this.relDrawPos.y += 20, this.x -= 30, this.y -= 30);
            this.shotTime = this.control.gameTime
        },
        update: function() {
            this.parent();
            if (!ig.game.gamePaused && !this.hit) {
                this.hasGravity && (this.moveVel.y += this.gravity * ig.system.tick, this.bulletAnims[this.bulletType].flip.y = !1, this.angle = this.getAngleFromVector(), this.angle > 0.5 * Math.PI && this.angle < 1.5 * Math.PI && 3 != this.bulletType && (this.bulletAnims[this.bulletType].flip.y = !0));
                this.pos.x += this.moveVel.x * ig.system.tick;
                this.pos.y += this.moveVel.y * ig.system.tick;
                this.bulletAnims[this.bulletType].update();
                var b = Math.max(this.bulletAnims[this.bulletType].sheet.width, this.bulletAnims[this.bulletType].sheet.height);
                this.pos.x - b > ig.system.width + 100 || this.pos.y - b > ig.system.height + 100 || -100 > this.pos.x + b || -100 > this.pos.y + b ? this.kill() : (this.checkCollisions(), 0 < this.bulletLifetime[this.bulletType] && this.control.gameTime - this.shotTime > this.bulletLifetime[this.bulletType] && this.kill())
            }
        },
        draw: function() {
            this.parent();
            if (6 != this.bulletType) {
                if (!this.hit) {
                    var b = -ig.game.screen.x + this.pos.x + this.relDrawPos.x,
                        c = -ig.game.screen.y + this.pos.y + this.relDrawPos.y;
                    this.bulletAnims[this.bulletType].angle = this.angle;
                    this.bulletAnims[this.bulletType].draw(b, c)
                }
            } else b = this.bulletAnims[this.bulletType].sheet.image.data, ig.system.context.drawImage(b, 0, 0, b.width, b.height, -ig.game.screen.x + this.pos.x, -ig.game.screen.y + this.pos.y - 30, ig.system.width - this.pos.x, 60)
        },
        kill: function() {
            this.parent()
        },
        setPos: function(b, c) {
            this.pos.x = b - 0.5 * this.size.x;
            this.pos.y = c - 0.5 * this.size.y
        },
        setTarget: function(b, c) {
            this.targetPos.x = b;
            this.targetPos.y = c;
            this.bulletAnims[this.bulletType].flip.y = !1;
            this.angle = this.getAngleToTarget();
            if (0 < this.bulletSpread[this.bulletType]) {
                var d = this.bulletSpread[this.bulletType];
                this.angle = this.angle - d + Math.random() * 2 * d
            }
            this.angle > 0.5 * Math.PI && this.angle < 1.5 * Math.PI && 3 != this.bulletType && (this.bulletAnims[this.bulletType].flip.y = !0);
            var d = this.targetPos.x - this.pos.x,
                e = this.targetPos.y - this.pos.y,
                f = Math.sqrt(d * d + e * e);
            this.moveVel.x = d / f * this.startVel;
            this.moveVel.y = e / f * this.startVel
        },
        setTargetArc: function(b, c, d) {
            this.targetPos.x = b;
            this.targetPos.y = c;
            this.bulletAnims[this.bulletType].flip.y = !1;
            c = this.targetPos.x - this.pos.x;
            var e = -this.gravity,
                f = this.startVel,
                l = Math.sqrt(f * f * f * f - e * (e * c * c + 2 * (this.targetPos.y - this.pos.y) * f * f));
            if (isNaN(l)) return !1;
            b = Math.atan((f * f + l) / (e * c));
            c = Math.atan((f * f - l) / (e * c));
            this.angle = b;
            c > b && (this.angle = c);
            d && b < c && (this.angle = b);
            0 < this.bulletSpread[this.bulletType] && (d = this.bulletSpread[this.bulletType], this.angle = this.angle - d + Math.random() * 2 * d);
            this.angle > 0.5 * Math.PI && this.angle < 1.5 * Math.PI && 3 != this.bulletType && (this.bulletAnims[this.bulletType].flip.y = !0);
            this.hasGravity = !0;
            d = Math.cos(this.angle);
            b = Math.sin(this.angle);
            this.moveVel.x = d * this.startVel;
            this.moveVel.y = b * this.startVel;
            return !0
        },
        getAngleToTarget: function() {
            var b = this.targetPos.y - this.pos.y,
                c = this.targetPos.x - this.pos.x;
            if (0 == b) {
                if (0 == c || 0 < c) return 0;
                if (0 > c) return Math.PI
            }
            if (0 == c) {
                if (0 < b) return Math.PI / 2;
                if (0 > b) return 3 * (Math.PI / 2)
            }
            var d = Math.atan(Math.abs(b / c));
            0 > c && 0 < b && (d = Math.PI - d);
            0 > c && 0 > b && (d = Math.PI + d);
            0 < c && 0 > b && (d = 2 * Math.PI - d);
            return d
        },
        getAngleFromVector: function() {
            var b = this.moveVel.y,
                c = this.moveVel.x;
            if (0 == b) {
                if (0 == c || 0 < c) return 0;
                if (0 > c) return Math.PI
            }
            if (0 == c) {
                if (0 < b) return Math.PI / 2;
                if (0 > b) return 3 * (Math.PI / 2)
            }
            var d = Math.atan(Math.abs(b / c));
            0 > c && 0 < b && (d = Math.PI - d);
            0 > c && 0 > b && (d = Math.PI + d);
            0 < c && 0 > b && (d = 2 * Math.PI - d);
            return d
        },
        checkCollisions: function() {
            if ((2 == this.sourceType || 3 == this.sourceType) && 0 == this.targetType) {
                var b = this.control.tank;
                if (1 == this.bulletType || 3 == this.bulletType || 5 == this.bulletType) {
                    if (this.boxBoxCollision(this.pos.x, this.pos.y, this.size.x, this.size.y, b.pos.x, b.pos.y, b.size.x, b.size.y)) {
                        this.hit = !0;
                        b.takeDamage(this.damage);
                        ig.game.spawnEntity(EntityGameEffect, this.pos.x, this.pos.y, {
                            control: this.control,
                            effectType: 1
                        });
                        this.kill();
                        try {
                            ig.soundHandler.playSound("softexplosion")
                        } catch (c) {
                            console.log(c)
                        }
                    }
                } else if (this.pointBoxCollision(this.pos.x, this.pos.y, b.pos.x, b.pos.y, b.size.x, b.size.y)) {
                    this.hit = !0;
                    b.takeDamage(this.damage);
                    var d = 0;
                    try {
                        ig.soundHandler.playSound("hit")
                    } catch (e) {
                        console.log(e)
                    }
                    ig.game.spawnEntity(EntityGameEffect, this.pos.x, this.pos.y, {
                        control: this.control,
                        effectType: d
                    });
                    this.kill()
                }
            } else if ((0 == this.sourceType || 1 == this.sourceType) && (2 == this.targetType || 3 == this.targetType)) {
                for (var b = this.control.enemies, f = 0; f < b.length; f++) {
                    var l = b[f];
                    if (!l.isDying) {
                        d = 0;
                        if (1 == this.bulletType || 3 == this.bulletType || 5 == this.bulletType) d = 1;
                        if (1 == this.bulletType || 5 == this.bulletType) {
                            if (this.boxBoxCollision(this.pos.x, this.pos.y, this.size.x, this.size.y, l.pos.x, l.pos.y, l.size.x, l.size.y)) {
                                this.hit = !0;
                                l.takeDamage(this.damage);
                                ig.game.spawnEntity(EntityGameEffect, this.pos.x, this.pos.y, {
                                    control: this.control,
                                    effectType: d
                                });
                                try {
                                    ig.soundHandler.playSound("softexplosion")
                                } catch (q) {
                                    console.log(q)
                                }
                                if (5 == this.bulletType) {
                                    for (d = 0; d < b.length; d++) l = b[d], d != f && this.boxBoxCollision(this.pos.x - 2 * this.size.x, this.pos.y, 5 * this.size.x, this.size.y, l.pos.x, l.pos.y, l.size.x, l.size.y) && l.takeDamage(this.damage);
                                    this.kill();
                                    return
                                }
                                this.kill()
                            }
                        } else if (6 == this.bulletType) l.takeDamage(this.damage * ig.system.tick);
                        else if (this.pointBoxCollision(this.pos.x, this.pos.y, l.pos.x, l.pos.y, l.size.x, l.size.y)) {
                            this.hit = !0;
                            l.takeDamage(this.damage);
                            try {
                                ig.soundHandler.playSound("hit")
                            } catch (r) {
                                console.log(r)
                            }
                            ig.game.spawnEntity(EntityGameEffect, this.pos.x, this.pos.y, {
                                control: this.control,
                                effectType: d
                            });
                            this.kill();
                            return
                        }
                    }
                }
                f = this.control.background.ground;
                if (this.pos.y > f.pos.y + 10)
                    if (1 == this.bulletType || 3 == this.bulletType || 5 == this.bulletType) {
                        ig.game.spawnEntity(EntityGameEffect, this.pos.x, this.pos.y, {
                            control: this.control,
                            effectType: 1
                        }).zIndex = f.zIndex - 1;
                        if (5 == this.bulletType)
                            for (d = 0; d < b.length; d++) l = b[d], this.boxBoxCollision(this.pos.x - 2 * this.size.x, this.pos.y, 5 * this.size.x, this.size.y, l.pos.x, l.pos.y, l.size.x, l.size.y) && l.takeDamage(this.damage);
                        this.kill();
                        try {
                            ig.soundHandler.playSound("softexplosion")
                        } catch (g) {
                            console.log(g)
                        }
                        ig.game.sortEntitiesDeferred()
                    } else this.kill()
            }
        },
        pointBoxCollision: function(b, c, d, e, f, l) {
            return b > d && b < d + f && c > e && c < e + l ? !0 : !1
        },
        boxBoxCollision: function(b, c, d, e, f, l, q, r) {
            return b + d > f && b < f + q && c + e > l && c < l + r ? !0 : !1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-screenshake").requires("impact.entity").defines(function() {
    EntityGameScreenshake = ig.Entity.extend({
        duration: 0.5,
        strength: 5,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.initShock();
            1 < ig.game.getEntitiesByType(EntityGameScreenshake).length && this.kill()
        },
        initShock: function() {
            this.shockTimer = new ig.Timer;
            this.shockTimer.set(this.duration)
        },
        resetShock: function() {
            this.shockTimer = null;
            ig.game.screen.x = 0;
            ig.game.screen.y = 0;
            this.kill()
        },
        shock: function() {
            var b = this.shockTimer.delta();
            if (-0.2 > b) {
                var c = this.strength * Math.pow(-b / this.duration, 2);
                0.5 < c && (ig.game.screen.x += Math.random().map(0, 1, -c, c), ig.game.screen.y += Math.random().map(0, 1, -c, c))
            }
            0 < b && this.resetShock()
        },
        update: function() {
            this.parent();
            this.shock()
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-unit-enemy").requires("impact.entity", "game.entities.game-bullet", "game.entities.game-screenshake").defines(function() {
    EntityGameUnitEnemy = ig.Entity.extend({
        zIndex: 190,
        size: {
            x: 60,
            y: 60
        },
        type: ig.Entity.TYPE.B,
        control: null,
        unitAnimSheets: [new ig.AnimationSheet("media/graphics/game/unit/foe/pig/fire-run.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/foe/cow/fire-run.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/foe/monkey/fire-run.png", 160, 160), new ig.AnimationSheet("media/graphics/game/unit/foe/plane/idle.png", 190, 118), new ig.AnimationSheet("media/graphics/game/bullets/bomb.png", 119, 45)],
        unitAnims: [],
        barrelPos: [{
            x: 45,
            y: 86
        }, {
            x: 33,
            y: 14
        }, {
            x: 27,
            y: 81
        }, {
            x: 99,
            y: 89
        }, {
            x: 0,
            y: 0
        }],
        fireDamage: [5, 5, 5, 10, 0],
        ramDamage: [20, 20, 20, 20, 50],
        fireRange: 0,
        hp: 150,
        maxHp: 150,
        unitType: 0,
        relDrawPos: {
            x: 0,
            y: 0
        },
        moveVel: {
            x: 0,
            y: 0
        },
        hasShot: !1,
        isDead: !1,
        isDying: !1,
        dieTime: 0,
        hoverOffset: {
            x: 0,
            y: 0
        },
        minHover: {
            x: 0,
            y: 0
        },
        maxHover: {
            x: 0,
            y: 0
        },
        hoverDirection: {
            x: 0,
            y: 0
        },
        alpha: 1,
        spawnTime: 0,
        difficulty: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.unitAnims.push(new ig.Animation(this.unitAnimSheets[0], 0.2, [0, 1, 2, 3]));
            this.unitAnims.push(new ig.Animation(this.unitAnimSheets[1], 0.2, [0, 1, 2, 3]));
            this.unitAnims.push(new ig.Animation(this.unitAnimSheets[2], 0.2, [0, 1, 2, 3]));
            this.unitAnims.push(new ig.Animation(this.unitAnimSheets[3], 1, [0, 1]));
            this.unitAnims.push(new ig.Animation(this.unitAnimSheets[4], 1, [0]));
            this.setPos(b, c);
            this.relDrawPos.x = 0.5 * -(this.unitAnims[this.unitType].sheet.width -
                this.size.x);
            this.relDrawPos.y = 0.5 * -(this.unitAnims[this.unitType].sheet.height - this.size.y);
            3 == this.unitType && (this.maxHp = this.hp = 120);
            4 == this.unitType ? (this.maxHp = this.hp = 20, this.zIndex = 170) : 3 == this.unitType && (this.zIndex = 170)
        },
        update: function() {
            this.parent();
            if (!ig.game.gamePaused)
                if (this.isDying) this.alpha -= 0.5 * ig.system.tick, 0 > this.alpha && (this.alpha = 0), this.pos.x += this.moveVel.x * ig.system.tick, this.pos.y += this.moveVel.y * ig.system.tick, 2 < this.control.gameTime - this.dieTime && this.kill();
                else if (this.pos.x += this.moveVel.x * ig.system.tick, this.pos.y += this.moveVel.y * ig.system.tick, 4 == this.unitType && (this.moveVel.y += 100 * ig.system.tick), 3 != this.unitType && this.unitAnims[this.unitType].update(), 0 >= this.hp) this.hp = 0, this.die();
            else if (0 > this.pos.x + this.relDrawPos.x + this.unitAnims[this.unitType].sheet.image.width) this.kill();
            else if (3 == this.unitType) {
                if (0 == this.unitAnims[this.unitType].frame && 300 >= this.pos.x) {
                    this.unitAnims[this.unitType].gotoFrame(1);
                    var b = this.pos.x + this.relDrawPos.x + this.barrelPos[this.unitType].x,
                        c = this.pos.y + this.relDrawPos.y + this.barrelPos[this.unitType].y,
                        d = ig.game.spawnEntity(EntityGameUnitEnemy, 0, 0, {
                            control: this.control,
                            unitType: 4
                        });
                    d.setPos(b, c);
                    d.unitAnims[4].flip.x = !0;
                    d.moveVel.x = -50;
                    d.moveVel.y = 0;
                    this.control.enemies.push(d)
                }
            } else if (this.touches(this.control.tank)) {
                this.die();
                b = this.ramDamage[this.unitType];
                0 < this.difficulty && (b += 0.25 * this.difficulty * this.ramDamage[this.unitType]);
                this.control.tank.takeDamage(b);
                ig.game.spawnEntity(EntityGameEffect, this.pos.x + this.size.x / 2, this.pos.y +
                    this.size.y / 2, {
                        control: this.control,
                        effectType: 1
                    });
                ig.game.spawnEntity(EntityGameScreenshake, 0, 0);
                try {
                    ig.soundHandler.playSound("screenshake")
                } catch (e) {
                    console.log(e)
                }
            } else this.hasShot ? 0 != this.unitAnims[this.unitType].frame && (this.hasShot = !1) : 0 == this.unitAnims[this.unitType].frame && (this.shoot(), this.hasShot = !0)
        },
        draw: function() {
            this.parent();
            var b = -ig.game.screen.x + this.pos.x + this.relDrawPos.x,
                c = -ig.game.screen.y + this.pos.y + this.relDrawPos.y;
            this.isDying && (ig.system.context.globalAlpha = this.alpha);
            this.unitAnims[this.unitType].draw(b, c);
            if (this.isDying) ig.system.context.globalAlpha = 1;
            else {
                var d = this.hp / this.maxHp,
                    e = this.size.x,
                    b = this.pos.x,
                    c = this.pos.y - 8 - 40;
                3 == this.unitType && (c += 23);
                4 == this.unitType && (c += 40);
                ig.system.context.fillStyle = "#000000";
                ig.system.context.fillRect(b, c, e, 6);
                e = (this.size.x - 2) * d;
                ig.system.context.fillStyle = 0.25 > d ? "#FF0000" : 0.5 > d ? "#FFFF00" : "#00FF00";
                ig.system.context.fillRect(b + 1, c + 1, e, 4)
            }
        },
        clicked: function() {},
        kill: function() {
            this.parent();
            this.isDead = !0;
            this.control.refreshEnemyListDeferred()
        },
        die: function() {
            this.isDying || (this.isDying = !0, 0 <= this.unitType && 2 >= this.unitType ? (this.alpha = 0.5, this.moveVel.x = -15, this.moveVel.y = -100, this.dieTime = this.control.gameTime, this.unitAnims[this.unitType].gotoFrame(3)) : (ig.game.spawnEntity(EntityGameEffect, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                control: this.control,
                effectType: 1
            }), this.kill()), this.isDead = !0, this.control.refreshEnemyListDeferred())
        },
        setPos: function(b, c) {
            this.pos.x = b - 0.5 * this.size.x;
            this.pos.y = c - 0.5 * this.size.y
        },
        shoot: function() {
            if (!(this.pos.x +
                this.relDrawPos.x + this.barrelPos[this.unitType].x - 20 > ig.system.width) && 0 != this.fireDamage[this.unitType]) {
                var b = this.control.tank.pos.x + this.control.tank.size.x / 2 - 10 + 20 * Math.random(),
                    c = this.control.tank.pos.y + this.control.tank.size.y / 2 - 10 + 20 * Math.random();
                if (!(0 < this.fireRange && Math.abs(this.pos.x - b) > this.fireRange)) {
                    var d = this.pos.x + this.relDrawPos.x + this.barrelPos[this.unitType].x,
                        e = this.pos.y + this.relDrawPos.y + this.barrelPos[this.unitType].y,
                        f = 2;
                    1 == this.unitType && (f = 1);
                    d = ig.game.spawnEntity(EntityGameBullet, d, e, {
                        control: this.control,
                        bulletType: f
                    });
                    d.sourceType = 2;
                    d.targetType = 0;
                    d.startVel = 500;
                    d.damage = this.fireDamage[this.unitType];
                    0 < this.difficulty && (d.damage += 0.25 * this.difficulty * this.fireDamage[this.unitType]);
                    d.setTarget(b, c);
                    d.zIndex = this.zIndex - 1;
                    1 == this.unitType && (d.pos.x = 0 > d.moveVel.x ? d.pos.x - 13 : d.pos.x + 13);
                    if (0 == this.unitType) try {
                        ig.soundHandler.playSound("shot")
                    } catch (l) {
                        console.log(l)
                    } else if (1 == this.unitType) try {
                            ig.soundHandler.playSound("projectileshoot")
                        } catch (q) {
                            console.log(q)
                        } else if (2 == this.unitType) try {
                            ig.soundHandler.playSound("shot")
                        } catch (r) {
                            console.log(r)
                        }
                        ig.game.sortEntitiesDeferred()
                }
            }
        },
        takeDamage: function(b) {
            if (!(0 >= this.hp) && (this.hp -= b, 0 >= this.hp && (this.hp = 0, 4 != this.unitType))) {
                this.control.coinsCollected += 3;
                try {
                    ig.soundHandler.playSound("coins")
                } catch (c) {
                    console.log(c)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-unit-enemy-boss").requires("impact.entity", "game.entities.game-bullet").defines(function() {
    EntityGameUnitEnemyBoss = ig.Entity.extend({
        zIndex: 180,
        size: {
            x: 150,
            y: 150
        },
        type: ig.Entity.TYPE.B,
        control: null,
        bossAnims: [new ig.Animation(new ig.AnimationSheet("media/graphics/game/unit/foe/pig-boss/idle.png", 320, 320), 0.2, [0, 1, 2]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/unit/foe/cow-boss/idle.png", 320, 320), 0.2, [0, 1, 2]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/unit/foe/monkey-boss/idle.png", 320, 320), 0.2, [0, 1, 2])],
        bossFireAnims: [new ig.Animation(new ig.AnimationSheet("media/graphics/game/unit/foe/pig-boss/fire.png", 320, 320), 0.2, [0, 1, 2, 3, 4, 5, 6, 7]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/unit/foe/cow-boss/fire.png", 320, 320), 0.2, [0, 1, 2]), new ig.Animation(new ig.AnimationSheet("media/graphics/game/unit/foe/monkey-boss/fire.png", 320, 320), 0.2, [0, 1, 2])],
        barrelPos: [
            [{
                x: 116,
                y: 212
            }, {
                x: 98,
                y: 212
            }, {
                x: 77,
                y: 212
            }], {
                x: 98,
                y: 244
            }, {
                x: 99,
                y: 203
            }
        ],
        fireRange: 0,
        refireRate: [0.2, 0.5, 1],
        fireDamage: [30, 40, 20],
        refireDelay: [],
        fireSequence: 0,
        hp: 2E3,
        maxHp: 2E3,
        bossType: 0,
        relDrawPos: {
            x: 0,
            y: 0
        },
        hoverOffset: {
            x: 0,
            y: 0
        },
        minHover: {
            x: -10,
            y: -10
        },
        maxHover: {
            x: 10,
            y: 10
        },
        hoverDirection: {
            x: 5,
            y: 5
        },
        moveVel: {
            x: 0,
            y: 0
        },
        lastShotTime: 0,
        isBoss: !0,
        isFiring: !1,
        isDead: !1,
        isDying: !1,
        alpha: 1,
        spawnTime: 0,
        difficulty: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.setPos(b, c);
            this.relDrawPos.x = 0.5 * -(this.bossAnims[this.bossType].sheet.width - this.size.x);
            this.relDrawPos.y = 0.5 * -(this.bossAnims[this.bossType].sheet.height - this.size.y);
            for (b = 0; b < this.refireRate.length; b++) this.refireDelay.push(1 / this.refireRate[b]);
            this.minHover.x = -10 * Math.random();
            this.minHover.y = -10 * Math.random();
            this.maxHover.x = 10 * Math.random();
            this.maxHover.y = 10 * Math.random();
            0.5 <= Math.random() && (this.hoverDirection.x *= -1);
            0.5 <= Math.random() && (this.hoverDirection.y *= -1)
        },
        update: function() {
            this.parent();
            ig.game.gamePaused || (this.pos.x += this.moveVel.x * ig.system.tick, this.pos.y += this.moveVel.y * ig.system.tick, 380 >= this.pos.x + this.size.x / 2 && (this.pos.x = 380 - this.size.x / 2, this.moveVel.x = 0), this.hoverOffset.x += this.hoverDirection.x * ig.system.tick, this.hoverOffset.y += this.hoverDirection.y * ig.system.tick, this.hoverOffset.x >= this.maxHover.x ? (this.hoverOffset.x = this.maxHover.x, this.hoverDirection.x *= -1, this.minHover.x = -10 * Math.random()) : this.hoverOffset.x <= this.minHover.x && (this.hoverOffset.x = this.minHover.x, this.hoverDirection.x *= -1, this.maxHover.x = 10 * Math.random()), this.hoverOffset.y >= this.maxHover.y ? (this.hoverOffset.y = this.maxHover.y, this.hoverDirection.y *= -1, this.minHover.y = -10 * Math.random()) : this.hoverOffset.y <= this.minHover.y && (this.hoverOffset.y = this.minHover.y, this.hoverDirection.y *= -1, this.maxHover.y = 10 * Math.random()), this.bossAnims[this.bossType].update(), 0 >= this.hp ? (this.hp = 0, this.kill(), ig.game.spawnEntity(EntityGameEffect, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                control: this.control,
                effectType: 1
            })) : this.isFiring ? (this.bossFireAnims[this.bossType].update(), 1 <= this.bossFireAnims[this.bossType].loopCount ? this.control.gameTime - this.lastShotTime > this.refireDelay[this.bossType] ? this.shoot() : (this.isFiring = !1, this.bossAnims[this.bossType].rewind()) : 0 == this.bossType && (1 == this.fireSequence && 3 == this.bossFireAnims[0].frame && this.shoot(), 2 == this.fireSequence && 6 == this.bossFireAnims[0].frame && this.shoot())) : this.control.gameTime - this.lastShotTime > this.refireDelay[this.bossType] && (this.fireSequence = 0, this.bossFireAnims[this.bossType].rewind(), this.shoot()))
        },
        draw: function() {
            this.parent();
            var b = -ig.game.screen.x + this.pos.x + this.relDrawPos.x + this.hoverOffset.x,
                c = -ig.game.screen.y +
                this.pos.y + this.relDrawPos.y + this.hoverOffset.y;
            this.isFiring ? this.bossFireAnims[this.bossType].draw(b, c) : this.bossAnims[this.bossType].draw(b, c);
            var d = this.hp / this.maxHp,
                e = this.size.x,
                b = this.pos.x + this.hoverOffset.x,
                c = this.pos.y + this.hoverOffset.y - 8 - 40;
            ig.system.context.fillStyle = "#000000";
            ig.system.context.fillRect(b, c, e, 6);
            e = (this.size.x - 2) * d;
            ig.system.context.fillStyle = 0.25 > d ? "#FF0000" : 0.5 > d ? "#FFFF00" : "#00FF00";
            ig.system.context.fillRect(b + 1, c + 1, e, 4)
        },
        clicked: function() {},
        kill: function() {
            this.parent();
            this.isDead = !0;
            this.control.refreshEnemyListDeferred()
        },
        setPos: function(b, c) {
            this.pos.x = b - 0.5 * this.size.x;
            this.pos.y = c - 0.5 * this.size.y
        },
        shoot: function() {
            var b = this.control.tank.pos.x + this.control.tank.size.x / 2 - 10 + 20 * Math.random(),
                c = this.control.tank.pos.y + this.control.tank.size.y / 2 - 10 + 20 * Math.random();
            if (!(0 < this.fireRange && Math.abs(this.pos.x - b) > this.fireRange)) {
                var d = 0,
                    e = 0;
                if (0 == this.bossType) {
                    d = this.pos.x + this.relDrawPos.x + this.barrelPos[0][this.fireSequence].x + this.hoverOffset.x;
                    e = this.pos.y +
                        this.relDrawPos.y + this.barrelPos[0][this.fireSequence].y + this.hoverOffset.y;
                    d = ig.game.spawnEntity(EntityGameBullet, d, e, {
                        control: this.control,
                        bulletType: 3
                    });
                    d.sourceType = 3;
                    d.targetType = 0;
                    d.startVel = 500;
                    d.setTarget(b, c);
                    d.damage = this.fireDamage[this.bossType];
                    0 < this.difficulty && (d.damage += 0.25 * this.difficulty * this.fireDamage[this.bossType]);
                    this.isFiring = !0;
                    this.lastShotTime = this.control.gameTime;
                    ig.game.sortEntitiesDeferred();
                    this.fireSequence += 1;
                    try {
                        ig.soundHandler.playSound("bosscannon")
                    } catch (f) {
                        console.log(f)
                    }
                } else {
                    d = this.pos.x + this.relDrawPos.x + this.barrelPos[this.bossType].x + this.hoverOffset.x;
                    e = this.pos.y + this.relDrawPos.y + this.barrelPos[this.bossType].y + this.hoverOffset.y;
                    d = ig.game.spawnEntity(EntityGameBullet, d, e, {
                        control: this.control,
                        bulletType: 3
                    });
                    d.sourceType = 3;
                    d.targetType = 0;
                    d.startVel = 500;
                    d.setTarget(b, c);
                    d.damage = this.fireDamage[this.bossType];
                    0 < this.difficulty && (d.damage += 0.25 * this.difficulty * this.fireDamage[this.bossType]);
                    this.isFiring = !0;
                    this.lastShotTime = this.control.gameTime;
                    ig.game.sortEntitiesDeferred();
                    try {
                        ig.soundHandler.playSound("bosscannon")
                    } catch (l) {
                        console.log(l)
                    }
                }
            }
        },
        takeDamage: function(b) {
            if (!(0 >= this.hp) && (this.hp -= b, 0 >= this.hp)) {
                this.hp = 0;
                this.control.coinsCollected += 10;
                try {
                    ig.soundHandler.playSound("coins")
                } catch (c) {
                    console.log(c)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-control").requires("impact.entity", "game.entities.game-bg", "game.entities.game-ui", "game.entities.game-tank", "game.entities.game-unit-enemy", "game.entities.game-unit-enemy-boss").defines(function() {
    EntityGameControl = ig.Entity.extend({
        zIndex: 1E3,
        background: null,
        ui: null,
        tank: null,
        pauseScreen: null,
        isPaused: !1,
        distanceTravelled: 0,
        coinsCollected: 0,
        enemies: [],
        gameTime: 0,
        waveSet: null,
        easyWaves: [],
        easyBossWaves: [],
        mediumWaves: [],
        mediumBossWaves: [],
        hardWaves: [],
        hardBossWaves: [],
        impossibleWaves: [],
        impossibleBossWaves: [],
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.background = ig.game.spawnEntity(EntityGameBg, 0, 0, {
                control: this
            }), this.tank = ig.game.spawnEntity(EntityGameTank, -10, 345, {
                tankType: ig.game.tankType,
                control: this
            }), this.ui = ig.game.spawnEntity(EntityGameUi, 0, 0, {
                control: this
            }), ig.game.sortEntitiesDeferred());
            this.initWaves();
            this.waveSet = this.generateEnemyWaveSet();
            this.waveSet.startSpawn();
            ig.game.lastGameDistance = 0;
            ig.game.lastGameCoins = 0;
            ig.game.lastGameXP = 0
        },
        update: function() {
            this.parent();
            if (!this.isPaused && (this.distanceTravelled += 0.5 * ig.system.tick, this.gameTime += ig.system.tick, this.waveSet.update(), 0 >= this.enemies.length && (!1 == this.waveSet.isSpawning && this.waveSet.waves[this.waveSet.currentWave].isBossWave) && (this.waveSet = this.generateEnemyWaveSet(), this.waveSet.waves[0].delay = 2, this.waveSet.startSpawn()), !1 == this.waveSet.isSpawning && 1 == this.enemies.length && this.enemies[0].isBoss))
                if (30 > this.distanceTravelled) {
                    if (30 < this.gameTime - this.enemies[0].spawnTime) {
                        this.waveSet.waves = [];
                        var b = Math.floor(Math.random() * this.easyWaves.length);
                        this.waveSet.addWave(this.easyWaves[b]);
                        this.waveSet.waves[0].isBossWave = !0;
                        this.waveSet.waves[0].endDelay *= 2;
                        this.waveSet.startSpawn()
                    }
                } else 150 > this.distanceTravelled ? 20 < this.gameTime - this.enemies[0].spawnTime && (this.waveSet.waves = [], b = Math.floor(Math.random() * this.mediumWaves.length), this.waveSet.addWave(this.mediumWaves[b]), this.waveSet.waves[0].isBossWave = !0, this.waveSet.waves[0].endDelay *= 2, this.waveSet.startSpawn()) : 300 > this.distanceTravelled ? 10 < this.gameTime - this.enemies[0].spawnTime && (this.waveSet.waves = [], b = Math.floor(Math.random() * this.hardWaves.length), this.waveSet.addWave(this.hardWaves[b]), this.waveSet.waves[0].isBossWave = !0, this.waveSet.waves[0].endDelay *= 2, this.waveSet.startSpawn()) : 5 < this.gameTime - this.enemies[0].spawnTime && (this.waveSet.waves = [], b = Math.floor(Math.random() * this.impossibleWaves.length), this.waveSet.addWave(this.impossibleWaves[b]), this.waveSet.waves[0].isBossWave = !0, this.waveSet.waves[0].endDelay *= 2, this.waveSet.startSpawn());
            0 < this.tank.deferredHealAmt && (this.tank.healDamage(this.tank.deferredHealAmt), this.tank.deferredHealAmt = 0);
            this.deferEnemyListRefresh && (this.refreshEnemyList(), this.deferEnemyListRefresh = !1)
        },
        pauseGame: function() {
            this.isPaused = !0;
            ig.game.gamePaused = !0;
            this.pauseScreen = ig.game.spawnEntity(EntityGameUIPause, 0, 0, {
                control: this
            });
            this.pauseScreen.ready()
        },
        unpauseGame: function() {
            this.isPaused = !1;
            ig.game.gamePaused = !1;
            this.pauseScreen && (this.pauseScreen.kill(), this.pauseScreen = null)
        },
        endGame: function() {
            ig.game.lastGameDistance = Math.floor(this.distanceTravelled);
            ig.game.lastGameCoins = Math.floor(this.coinsCollected);
            ig.game.lastGameXP = Math.floor(this.coinsCollected / 10);
            ig.game.totalCoins += ig.game.lastGameCoins;
            ig.game.addXP(ig.game.lastGameXP);
            ig.game.setLocalStorage();
            this.unpauseGame();
            ig.game.director.loadLevel(3)
        },
        hideGuide: function() {
            this.ui.front.showGuide = !1
        },
        spawnEnemyUnitWave: function() {},
        refreshEnemyList: function() {
            for (var b = [], c = 0; c < this.enemies.length; c++)(null == this.enemies[c] || this.enemies[c].isDead) && b.push(c);
            for (c = b.length - 1; 0 <= c; c--) this.enemies.splice(b[c], 1)
        },
        refreshEnemyListDeferred: function() {
            this.deferEnemyListRefresh = !0
        },
        generateEnemyWaveSet: function() {
            var b = new EnemyWaveSet(this);
            if (30 > this.distanceTravelled) {
                for (var c = [], d = 0; d < this.easyWaves.length; d++) c.push(d);
                for (d = 0; 5 > d; d++) {
                    var e = Math.floor(Math.random() * c.length);
                    b.addWave(this.easyWaves[c[e]]);
                    c.splice(e, 1)
                }
                e = Math.floor(Math.random() * this.easyBossWaves.length);
                b.addWave(this.easyBossWaves[e])
            } else if (150 > this.distanceTravelled) {
                c = [];
                for (d = 0; d < this.mediumWaves.length; d++) c.push(d);
                for (d = 0; 6 > d; d++) e = Math.floor(Math.random() * c.length), b.addWave(this.mediumWaves[c[e]]), c.splice(e, 1);
                e = Math.floor(Math.random() * this.mediumBossWaves.length);
                b.addWave(this.mediumBossWaves[e])
            } else if (300 > this.distanceTravelled) {
                c = [];
                for (d = 0; d < this.hardWaves.length; d++) c.push(d);
                for (d = 0; 6 > d; d++) e = Math.floor(Math.random() * c.length), b.addWave(this.hardWaves[c[e]]), c.splice(e, 1);
                e = Math.floor(Math.random() * this.hardBossWaves.length);
                b.addWave(this.hardBossWaves[e])
            } else {
                c = [];
                for (d = 0; d < this.impossibleWaves.length; d++) c.push(d);
                for (d = 0; 6 > d; d++) e = Math.floor(Math.random() * c.length), b.addWave(this.impossibleWaves[c[e]]), c.splice(e, 1);
                e = Math.floor(Math.random() * this.impossibleBossWaves.length);
                b.addWave(this.impossibleBossWaves[e])
            }
            return b
        },
        initWaves: function() {
            var b = null,
                b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -25,
                y: 0
            }, 0));
            b.addSpawn(new EnemySpawn(this, 3, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -25,
                y: 0
            }, 0));
            b.endDelay = 6;
            this.easyWaves.push(b);
            this.easyWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -25,
                y: 0
            }, 0));
            b.addSpawn(new EnemySpawn(this, 3, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -25,
                y: 0
            }, 0));
            b.endDelay = 6;
            this.easyWaves.push(b);
            this.easyWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -25,
                y: 0
            }, 0));
            b.addSpawn(new EnemySpawn(this, 3, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -25,
                y: 0
            }, 0));
            b.endDelay = 6;
            this.easyWaves.push(b);
            this.easyWaves.push(b);
            b = new EnemyWave(this);
            b.delay = 4;
            b.addSpawn(new EnemySpawn(this, 0, 1, 0, {
                x: 620,
                y: 225
            }, {
                x: -40,
                y: 0
            }, 4, 0));
            b.endDelay = 6;
            this.easyBossWaves.push(b);
            b = new EnemyWave(this);
            b.delay = 4;
            b.addSpawn(new EnemySpawn(this, 0, 1, 1, {
                x: 620,
                y: 225
            }, {
                x: -40,
                y: 0
            }, 4, 0));
            b.endDelay = 6;
            this.easyBossWaves.push(b);
            b = new EnemyWave(this);
            b.delay = 4;
            b.addSpawn(new EnemySpawn(this, 0, 1, 2, {
                x: 620,
                y: 225
            }, {
                x: -40,
                y: 0
            }, 4, 0));
            b.endDelay = 6;
            this.easyBossWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -30,
                y: 0
            }, 0, 1));
            b.addSpawn(new EnemySpawn(this, 3, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -30,
                y: 0
            }, 0, 1));
            b.addSpawn(new EnemySpawn(this, 6, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -30,
                y: 0
            }, 0, 1));
            b.endDelay = 6;
            this.mediumWaves.push(b);
            this.mediumWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -30,
                y: 0
            }, 0, 1));
            b.addSpawn(new EnemySpawn(this, 3, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -30,
                y: 0
            }, 0, 1));
            b.addSpawn(new EnemySpawn(this, 6, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -30,
                y: 0
            }, 0, 1));
            b.endDelay = 6;
            this.mediumWaves.push(b);
            this.mediumWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -30,
                y: 0
            }, 0, 1));
            b.addSpawn(new EnemySpawn(this, 3, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -30,
                y: 0
            }, 0, 1));
            b.addSpawn(new EnemySpawn(this, 6, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -30,
                y: 0
            }, 0, 1));
            b.endDelay = 6;
            this.mediumWaves.push(b);
            this.mediumWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 1));
            b.addSpawn(new EnemySpawn(this, 3, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 1));
            b.endDelay = 6;
            this.mediumWaves.push(b);
            this.mediumWaves.push(b);
            b = new EnemyWave(this);
            b.delay = 4;
            b.addSpawn(new EnemySpawn(this, 0, 1, 0, {
                x: 620,
                y: 225
            }, {
                x: -40,
                y: 0
            }, 4, 1));
            b.endDelay = 6;
            this.mediumBossWaves.push(b);
            b = new EnemyWave(this);
            b.delay = 4;
            b.addSpawn(new EnemySpawn(this, 0, 1, 1, {
                x: 620,
                y: 225
            }, {
                x: -40,
                y: 0
            }, 4, 1));
            b.endDelay = 6;
            this.mediumBossWaves.push(b);
            b = new EnemyWave(this);
            b.delay = 4;
            b.addSpawn(new EnemySpawn(this, 0, 1, 2, {
                x: 620,
                y: 225
            }, {
                x: -40,
                y: 0
            }, 4, 1));
            b.endDelay = 6;
            this.mediumBossWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 3, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 6, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 9, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.endDelay = 6;
            this.hardWaves.push(b);
            this.hardWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 3, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 6, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 9, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.endDelay = 6;
            this.hardWaves.push(b);
            this.hardWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 3, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 6, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 9, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.endDelay = 6;
            this.hardWaves.push(b);
            this.hardWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 3, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 6, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 2));
            b.endDelay = 6;
            this.hardWaves.push(b);
            this.hardWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 3, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 6, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 0, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 3, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 6, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.endDelay = 6;
            this.hardWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 3, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 6, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 0, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 3, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 6, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.endDelay = 6;
            this.hardWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 3, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 6, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 0, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 3, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.addSpawn(new EnemySpawn(this, 6, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 2));
            b.endDelay = 6;
            this.hardWaves.push(b);
            b = new EnemyWave(this);
            b.delay = 4;
            b.addSpawn(new EnemySpawn(this, 0, 1, 0, {
                x: 620,
                y: 225
            }, {
                x: -40,
                y: 0
            }, 4, 2));
            b.endDelay = 6;
            this.hardBossWaves.push(b);
            b = new EnemyWave(this);
            b.delay = 4;
            b.addSpawn(new EnemySpawn(this, 0, 1, 1, {
                x: 620,
                y: 225
            }, {
                x: -40,
                y: 0
            }, 4, 2));
            b.endDelay = 6;
            this.hardBossWaves.push(b);
            b = new EnemyWave(this);
            b.delay = 4;
            b.addSpawn(new EnemySpawn(this, 0, 1, 2, {
                x: 620,
                y: 225
            }, {
                x: -40,
                y: 0
            }, 4, 2));
            b.endDelay = 6;
            this.hardBossWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 2, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 4, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 6, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 8, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.endDelay = 4;
            this.impossibleWaves.push(b);
            this.impossibleWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 2, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 4, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 6, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 8, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.endDelay = 4;
            this.impossibleWaves.push(b);
            this.impossibleWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 2, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 4, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 6, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 8, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.endDelay = 4;
            this.impossibleWaves.push(b);
            this.impossibleWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 3, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 6, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 9, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 3));
            b.endDelay = 4;
            this.impossibleWaves.push(b);
            this.impossibleWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 3, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 6, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 0, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 2, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 4, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 6, 0, 2, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.endDelay = 4;
            this.impossibleWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 3, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 6, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 0, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 2, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 4, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 6, 0, 1, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.endDelay = 4;
            this.impossibleWaves.push(b);
            b = new EnemyWave(this);
            b.addSpawn(new EnemySpawn(this, 0, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 3, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 6, 0, 3, {
                x: 560,
                y: 120
            }, {
                x: -50,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 0, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 2, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 4, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.addSpawn(new EnemySpawn(this, 6, 0, 0, {
                x: 540,
                y: 428
            }, {
                x: -35,
                y: 0
            }, 0, 3));
            b.endDelay = 4;
            this.impossibleWaves.push(b);
            b = new EnemyWave(this);
            b.delay = 4;
            b.addSpawn(new EnemySpawn(this, 0, 1, 0, {
                x: 620,
                y: 225
            }, {
                x: -40,
                y: 0
            }, 4, 3));
            b.endDelay = 4;
            this.impossibleBossWaves.push(b);
            b = new EnemyWave(this);
            b.delay = 4;
            b.addSpawn(new EnemySpawn(this, 0, 1, 1, {
                x: 620,
                y: 225
            }, {
                x: -40,
                y: 0
            }, 4, 3));
            b.endDelay = 4;
            this.impossibleBossWaves.push(b);
            b = new EnemyWave(this);
            b.delay = 4;
            b.addSpawn(new EnemySpawn(this, 0, 1, 2, {
                x: 620,
                y: 225
            }, {
                x: -40,
                y: 0
            }, 4, 3));
            b.endDelay = 4;
            this.impossibleBossWaves.push(b)
        }
    });
    EnemySpawn = ig.Class.extend({
        control: null,
        time: 0,
        enemyType: 0,
        unitType: 0,
        pos: {
            x: 0,
            y: 0
        },
        move: {
            x: 0,
            y: 0
        },
        shootDelay: 0,
        difficulty: 0,
        zIndexOffset: 0,
        init: function(b, c, d, e, f, l, q, r) {
            this.control = b;
            this.time = c;
            this.enemyType = d;
            this.unitType = e;
            this.pos.x = f.x;
            this.pos.y = f.y;
            this.move.x = l.x;
            this.move.y = l.y;
            q && (this.shootDelay = q);
            r && (this.difficulty = r)
        },
        spawn: function() {
            if (0 == this.enemyType) {
                var b = ig.game.spawnEntity(EntityGameUnitEnemy, 0, 0, {
                    control: this.control,
                    unitType: this.unitType
                });
                b.setPos(this.pos.x, this.pos.y);
                b.moveVel.x = this.move.x;
                b.moveVel.y = this.move.y;
                b.lastShotTime = this.control.gameTime + this.shootDelay;
                b.zIndex += this.zIndexOffset;
                b.spawnTime = this.control.gameTime;
                b.difficulty = this.difficulty;
                b.maxHp += 0.5 * b.maxHp * this.difficulty;
                b.hp = b.maxHp;
                this.control.enemies.push(b)
            } else 1 == this.enemyType && (b = ig.game.spawnEntity(EntityGameUnitEnemyBoss, 0, 0, {
                control: this.control,
                bossType: this.unitType
            }), b.setPos(this.pos.x, this.pos.y), b.moveVel.x = this.move.x, b.moveVel.y = this.move.y, b.lastShotTime = this.control.gameTime + this.shootDelay, b.zIndex += this.zIndexOffset, b.spawnTime = this.control.gameTime, b.difficulty = this.difficulty, b.maxHp += 0.5 * b.maxHp * this.difficulty, b.hp = b.maxHp, this.control.enemies.push(b))
        }
    });
    EnemyWave = ig.Class.extend({
        control: null,
        startSpawnTime: 0,
        isSpawning: !1,
        isBossWave: !1,
        delay: 0,
        maxTime: 0,
        endDelay: 0,
        spawns: [],
        zIndexOffset: 0,
        init: function(b) {
            this.control = b
        },
        addSpawn: function(b) {
            b && (this.spawns.push(b), 1 == b.enemyType && (this.isBossWave = !0), b.time > this.maxTime && (this.maxTime = b.time))
        },
        update: function() {
            if (this.isSpawning) {
                var b = this.control.gameTime - this.spawnStartTime;
                if (!(b < this.delay)) {
                    for (var b = b - this.delay, c = [], d = 0; d < this.spawns.length; d++) {
                        var e = this.spawns[d];
                        e.time <= b && (e.zIndexOffset = this.zIndexOffset, this.zIndexOffset += 2, e.spawn(), c.push(d))
                    }
                    for (b = c.length -
                        1; 0 <= b; b--) this.spawns.splice(c[b], 1)
                }
            }
        },
        startSpawn: function() {
            this.spawnStartTime = this.control.gameTime;
            this.isSpawning = !0
        }
    });
    EnemyWaveSet = ig.Class.extend({
        control: null,
        startSpawnTime: 0,
        isSpawning: !1,
        delay: 0,
        waves: [],
        currentWave: 0,
        init: function(b) {
            this.control = b
        },
        addWave: function(b) {
            if (b) {
                var c = new EnemyWave(this.control);
                c.delay = b.delay;
                for (var d = 0; d < b.spawns.length; d++) c.addSpawn(b.spawns[d]);
                c.endDelay = b.endDelay;
                this.waves.push(c)
            }
        },
        update: function() {
            this.isSpawning && (this.currentWave >= this.waves.length ? this.isSpawning = !1 : (this.waves[this.currentWave].update(), this.control.gameTime - this.spawnStartTime > this.waves[this.currentWave].delay + this.waves[this.currentWave].maxTime + this.waves[this.currentWave].endDelay && (this.currentWave + 1 >= this.waves.length ? this.isSpawning = !1 : (this.currentWave += 1, this.spawnStartTime = this.control.gameTime, this.waves[this.currentWave].startSpawn()))))
        },
        startSpawn: function() {
            0 == this.waves.length ? this.isSpawning = !1 : (this.currentWave = 0, this.spawnStartTime = this.control.gameTime, this.isSpawning = !0, this.waves[this.currentWave].startSpawn())
        }
    })
});
ig.baked = !0;
ig.module("game.levels.game").requires("impact.image", "game.entities.game-control", "game.entities.pointer-selector").defines(function() {
    LevelGame = {
        entities: [{
            type: "EntityGameControl",
            x: -4,
            y: -28
        }, {
            type: "EntityPointerSelector",
            x: -4,
            y: -48
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.jukebox", "plugins.director", "plugins.impact-storage", "plugins.storage-manager", "plugins.branding.splash", "plugins.lagged-api", "game.entities.branding-logo-placeholder", "game.entities.branding-logo", "game.entities.button-more-games", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening", "game.levels.mainmenu", "game.levels.results", "game.levels.game").defines(function() {
    this.START_OBFUSCATION;
    this.FRAMEBREAKER;
    MyGame = ig.Game.extend({
        gamePaused: !1,
        musicVolume: 0.4,
        lastGameDistance: 0,
        lastGameCoins: 0,
        lastGameXP: 0,
        highScore: 0,
        totalCoins: 0,
        currentPlayerLevel: 1,
        currentXP: 0,
        currentTeam: [0, 1, 2],
        tankType: 0,
        unlockedTanks: [0],
        requiredXP: [0, 16, 38, 66, 100, 140],
        name: "MJS-Defend the Tank",
        version: "1.0",
        init: function() {
            this.setupControls();
            this.setupStorageManager();
            this.getLocalStorage();
            // LaggedAPI.init("defend_datank_vints", "lagdevaF3001");
            this.removeLoadingWheel();
            this.injectMobileLink();
            this.setupURLParameters();
            this.finalize();
            ig.soundHandler.fnSetupMusic();
            ig.soundHandler.setMusicVolume(0.5)
        },
        finalize: function() {
            ig.ua.mobile ? ig.game.showOverlay(["play"]) : ig.game.startGame();
            sizeHandler()
        },
        initData: function() {
            return this.sessionData = {
                totalCoins: 0,
                currentPlayerLevel: 1,
                currentXP: 0,
                currentTeam: [0, 1, 2],
                tankType: 0,
                unlockedTanks: [0]
            }
        },
        injectMobileLink: function() {
            ig.ua.mobile ? $("#play").attr("onclick", "ig.game.setupJukebox();ig.game.pressPlay();") : $("#play").attr("onclick", "ig.game.silence.play();ig.game.pressPlay();")
        },
        removeLoadingWheel: function() {
            try {
                $("#ajaxbar").css("background", "none")
            } catch (b) {
                console.log(b)
            }
        },
        showDebugMenu: function() {
            console.log("showing debug menu ...");
            ig.Entity._debugShowBoxes = !0;
            $(".ig_debug").show()
        },
        setupLocalStorage: function() {
            this.storage = new ig.Storage;
            this.getLocalStorage()
        },
        getLocalStorage: function() {
            this.storage && (this.loadAll(), this.totalCoins = this.sessionData.totalCoins, this.currentPlayerLevel = this.sessionData.currentPlayerLevel, this.currentXP = this.sessionData.currentXP, this.currentTeam = this.sessionData.currentTeam, this.tankType = this.sessionData.tankType, this.unlockedTanks = this.sessionData.unlockedTanks)
        },
        setLocalStorage: function() {
            this.storage && (this.save("totalCoins", this.totalCoins), this.save("currentPlayerLevel", this.currentPlayerLevel), this.save("currentXP", this.currentXP), this.save("currentTeam", this.currentTeam), this.save("tankType", this.tankType), this.save("unlockedTanks", this.unlockedTanks))
        },
        addXP: function(b) {
            this.currentPlayerLevel >= this.requiredXP.length ? this.currentPlayerLevel = this.requiredXP.length : (this.currentXP += b, this.requiredXP[this.currentPlayerLevel] < this.currentXP && (b = this.currentXP - this.requiredXP[this.currentPlayerLevel], this.currentPlayerLevel += 1, this.currentXP = 0, this.addXP(b)))
        },
        playSFX: function() {},
        startGame: function() {
            this.resetPlayerStats();
            this.director = new ig.Director(this, [LevelOpening, LevelMainmenu, LevelGame, LevelResults]);
            if (_SETTINGS.Branding.Splash.Enabled) try {
                this.branding = new ig.BrandingSplash
            } catch (b) {
                console.log(b), console.log("Loading original levels ..."), this.director.loadLevel(this.director.currentLevel)
            } else this.director.loadLevel(this.director.currentLevel)
        },
        fpsCount: function() {
            this.fpsTimer || (this.fpsTimer = new ig.Timer(1));
            this.fpsTimer && 0 > this.fpsTimer.delta() ? null != this.fpsCounter ? this.fpsCounter++ : this.fpsCounter = 0 : (ig.game.fps = this.fpsCounter, this.fpsCounter = 0, this.fpsTimer.reset())
        },
        endGame: function() {
            console.log("End game");
            this.stopBackgroundMusic();
            ig.ua.mobile && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize()
        },
        resetPlayerStats: function() {
            ig.log("resetting player stats ...");
            this.playerStats = {
                id: this.playerStats ? this.playerStats.id : null
            }
        },
        setupControls: function() {
            ig.input.unbindAll();
            ig.input.initMouse();
            ig.input.bind(ig.KEY.MOUSE1, "click")
        },
        setupJukebox: function() {
            ig.ua.mobile && (this.jukeboxPlayer = new ig.Jukebox, this.jukeboxPlayer.player.setVolume(this.musicVolume))
        },
        setupURLParameters: function() {
            this.setupURLParameters = new ig.UrlParameters
        },
        msToTime: function(b) {
            b = (b - b % 1E3) / 1E3;
            var d = b % 60;
            b = (b - d) / 60;
            var e = b % 60;
            b = (b - e) / 60;
            return (10 > b ? "0" : "") + b + ":" + ((10 > e ? "0" : "") + e) + ":" + ((10 > d ? "0" : "") + d)
        },
        pressPlay: function() {
            this.hideOverlay(["play"]);
            this.startGame();
            ig.ua.mobile && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize();
            ig.ua.mobile && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize()
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            console.log("Game Paused")
        },
        resumeGame: function() {
            ig.system.startRunLoop.call(ig.system);
            console.log("Game Resumed")
        },
        pressMute: function() {
            try {
                ig.game.muted ? this.unmute() : this.mute()
            } catch (b) {
                console.log("pressMute() error: " + b)
            }
        },
        showOverlay: function(b) {
            for (i = 0; i < b.length; i++) $("#" + b[i]) && $("#" + b[i]).show(), document.getElementById(b[i]) && (document.getElementById(b[i]).style.visibility = "visible")
        },
        hideOverlay: function(b) {
            for (i = 0; i < b.length; i++) $("#" + b[i]) && $("#" + b[i]).hide(), document.getElementById(b[i]) && (document.getElementById(b[i]).style.visibility = "hidden")
        },
        stopAllSounds: function() {
            for (i = 0; i < ig.resources.length; i++) ig.resources[i].multiChannel && ig.resources[i].stop();
            console.log("all sounds stopped")
        },
        loadLevel: function(b) {
            this.parent(b)
        },
        update: function() {
            if (this.paused)
                for (var b = 0; b < this.entities.length; b++) this.entities[b].ignorePause && this.entities[b].update();
            else this.parent(); if (ig.game.jukebox && ig.ua.mobile)
                for (var d in ig.game.jukebox.player.settings.spritemap) ig.game.jukebox.player.getCurrentTime() < ig.game.jukebox.player.settings.spritemap[d].end + ig.game.jukebox.player.settings.timeout / 1E3 || (ig.game.jukebox.player.pause(), this.setupJukebox())
        },
        draw: function() {
            this.parent();
            this.dctf()
        },
        dctf: function() {
            this.COPYRIGHT
        },
        drawDebug: function() {
            if (!ig.global.wm && (this.debugEnable(), this.viewDebug && (ig.system.context.fillStyle = "#000000", ig.system.context.globalAlpha = 0.35, ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height), ig.system.context.globalAlpha = 1, this.debug && 0 < this.debug.length)))
                for (i = 0; i < this.debug.length; i++) ig.system.context.font = "10px Arial", ig.system.context.fillStyle = "#ffffff", ig.system.context.fillText(this.debugLine -
                    this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i)
        },
        debugCL: function(b) {
            this.debug ? (50 > this.debug.length || this.debug.splice(0, 1), this.debug.push(b), this.debugLine++) : (this.debug = [], this.debugLine = 1, this.debug.push(b));
            console.log(b)
        },
        debugEnable: function() {
            ig.input.pressed("click") && (this.debugEnableTimer = new ig.Timer(2));
            this.debugEnableTimer && 0 > this.debugEnableTimer.delta() ? ig.input.released("click") && (this.debugEnableTimer = null) : this.debugEnableTimer && 0 < this.debugEnableTimer.delta() && (this.debugEnableTimer = null, this.viewDebug = this.viewDebug ? !1 : !0)
        }
    });
    var b = getQueryVariable("device");
    if (b) switch (b) {
        case "mobile":
            console.log("serving mobile version ...");
            ig.ua.mobile = !0;
            break;
        case "desktop":
            console.log("serving desktop version ...");
            ig.ua.mobile = !1;
            break;
        default:
            console.log("serving universal version ...")
    } else console.log("serving universal version ...");
    if (b = getQueryVariable("force-rotate")) switch (b) {
        case "portrait":
            console.log("force rotate to portrait");
            window.orientation = 0;
            break;
        case "landscape":
            console.log("force rotate to horizontal");
            window.orientation = 90;
            break;
        default:
            alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0
    }
    ig.ua.mobile ? ig.main("#canvas", MyGame, 60, mobileWidth, mobileHeight, 1, ig.SplashLoader) : ig.main("#canvas", MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
    ig.ua.mobile && orientationHandler();
    sizeHandler();
    fixSamsungHandler();
    this.DOMAINLOCK_BREAKOUT_ATTEMPT;
    this.END_OBFUSCATION
});