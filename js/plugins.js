/*!
 * Bootstrap v4.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t(e.bootstrap = {}, e.jQuery) }(this, function(e, t) { "use strict";

    function i(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

    function s(e, t, n) { return t && i(e.prototype, t), n && i(e, n), e }

    function l(r) { for (var e = 1; e < arguments.length; e++) { var o = null != arguments[e] ? arguments[e] : {},
                t = Object.keys(o); "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function(e) { return Object.getOwnPropertyDescriptor(o, e).enumerable }))), t.forEach(function(e) { var t, n, i;
                t = r, i = o[n = e], n in t ? Object.defineProperty(t, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = i }) } return r } for (var r, n, o, a, c, u, f, h, d, p, m, g, _, v, y, E, b, w, C, T, S, D, A, I, O, N, k, x, P, L, j, H, M, F, W, R, U, B, q, K, Q, Y, V, z, G, J, Z, X, $, ee, te, ne, ie, re, oe, se, ae, le, ce, ue, fe, he, de, pe, me, ge, _e, ve, ye, Ee, be, we = function(i) { var t = "transitionend";

            function e(e) { var t = this,
                    n = !1; return i(this).one(l.TRANSITION_END, function() { n = !0 }), setTimeout(function() { n || l.triggerTransitionEnd(t) }, e), this } var l = { TRANSITION_END: "bsTransitionEnd", getUID: function(e) { for (; e += ~~(1e6 * Math.random()), document.getElementById(e);); return e }, getSelectorFromElement: function(e) { var t = e.getAttribute("data-target");
                    t && "#" !== t || (t = e.getAttribute("href") || ""); try { return document.querySelector(t) ? t : null } catch (e) { return null } }, getTransitionDurationFromElement: function(e) { if (!e) return 0; var t = i(e).css("transition-duration"); return parseFloat(t) ? (t = t.split(",")[0], 1e3 * parseFloat(t)) : 0 }, reflow: function(e) { return e.offsetHeight }, triggerTransitionEnd: function(e) { i(e).trigger(t) }, supportsTransitionEnd: function() { return Boolean(t) }, isElement: function(e) { return (e[0] || e).nodeType }, typeCheckConfig: function(e, t, n) { for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) { var r = n[i],
                                o = t[i],
                                s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()); if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".') } var a } }; return i.fn.emulateTransitionEnd = e, i.event.special[l.TRANSITION_END] = { bindType: t, delegateType: t, handle: function(e) { if (i(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } }, l }(t = t && t.hasOwnProperty("default") ? t.default : t), Ce = (n = "alert", a = "." + (o = "bs.alert"), c = (r = t).fn[n], u = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, f = "alert", h = "fade", d = "show", p = function() {
            function i(e) { this._element = e } var e = i.prototype; return e.close = function(e) { var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t) }, e.dispose = function() { r.removeData(this._element, o), this._element = null }, e._getRootElement = function(e) { var t = we.getSelectorFromElement(e),
                    n = !1; return t && (n = document.querySelector(t)), n || (n = r(e).closest("." + f)[0]), n }, e._triggerCloseEvent = function(e) { var t = r.Event(u.CLOSE); return r(e).trigger(t), t }, e._removeElement = function(t) { var n = this; if (r(t).removeClass(d), r(t).hasClass(h)) { var e = we.getTransitionDurationFromElement(t);
                    r(t).one(we.TRANSITION_END, function(e) { return n._destroyElement(t, e) }).emulateTransitionEnd(e) } else this._destroyElement(t) }, e._destroyElement = function(e) { r(e).detach().trigger(u.CLOSED).remove() }, i._jQueryInterface = function(n) { return this.each(function() { var e = r(this),
                        t = e.data(o);
                    t || (t = new i(this), e.data(o, t)), "close" === n && t[n](this) }) }, i._handleDismiss = function(t) { return function(e) { e && e.preventDefault(), t.close(this) } }, s(i, null, [{ key: "VERSION", get: function() { return "4.1.3" } }]), i }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), r.fn[n] = p._jQueryInterface, r.fn[n].Constructor = p, r.fn[n].noConflict = function() { return r.fn[n] = c, p._jQueryInterface }, p), Te = (g = "button", v = "." + (_ = "bs.button"), y = ".data-api", E = (m = t).fn[g], b = "active", w = "btn", T = '[data-toggle^="button"]', S = '[data-toggle="buttons"]', D = "input", A = ".active", I = ".btn", O = { CLICK_DATA_API: "click" + v + y, FOCUS_BLUR_DATA_API: (C = "focus") + v + y + " blur" + v + y }, N = function() {
            function n(e) { this._element = e } var e = n.prototype; return e.toggle = function() { var e = !0,
                    t = !0,
                    n = m(this._element).closest(S)[0]; if (n) { var i = this._element.querySelector(D); if (i) { if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(b)) e = !1;
                            else { var r = n.querySelector(A);
                                r && m(r).removeClass(b) } if (e) { if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains(b), m(i).trigger("change") } i.focus(), t = !1 } } t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)), e && m(this._element).toggleClass(b) }, e.dispose = function() { m.removeData(this._element, _), this._element = null }, n._jQueryInterface = function(t) { return this.each(function() { var e = m(this).data(_);
                    e || (e = new n(this), m(this).data(_, e)), "toggle" === t && e[t]() }) }, s(n, null, [{ key: "VERSION", get: function() { return "4.1.3" } }]), n }(), m(document).on(O.CLICK_DATA_API, T, function(e) { e.preventDefault(); var t = e.target;
            m(t).hasClass(w) || (t = m(t).closest(I)), N._jQueryInterface.call(m(t), "toggle") }).on(O.FOCUS_BLUR_DATA_API, T, function(e) { var t = m(e.target).closest(I)[0];
            m(t).toggleClass(C, /^focus(in)?$/.test(e.type)) }), m.fn[g] = N._jQueryInterface, m.fn[g].Constructor = N, m.fn[g].noConflict = function() { return m.fn[g] = E, N._jQueryInterface }, N), Se = (x = "carousel", L = "." + (P = "bs.carousel"), j = ".data-api", H = (k = t).fn[x], M = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }, F = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, W = "next", R = "prev", U = "left", B = "right", q = { SLIDE: "slide" + L, SLID: "slid" + L, KEYDOWN: "keydown" + L, MOUSEENTER: "mouseenter" + L, MOUSELEAVE: "mouseleave" + L, TOUCHEND: "touchend" + L, LOAD_DATA_API: "load" + L + j, CLICK_DATA_API: "click" + L + j }, K = "carousel", Q = "active", Y = "slide", V = "carousel-item-right", z = "carousel-item-left", G = "carousel-item-next", J = "carousel-item-prev", Z = ".active", X = ".active.carousel-item", $ = ".carousel-item", ee = ".carousel-item-next, .carousel-item-prev", te = ".carousel-indicators", ne = "[data-slide], [data-slide-to]", ie = '[data-ride="carousel"]', re = function() {
            function o(e, t) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = k(e)[0], this._indicatorsElement = this._element.querySelector(te), this._addEventListeners() } var e = o.prototype; return e.next = function() { this._isSliding || this._slide(W) }, e.nextWhenVisible = function() {!document.hidden && k(this._element).is(":visible") && "hidden" !== k(this._element).css("visibility") && this.next() }, e.prev = function() { this._isSliding || this._slide(R) }, e.pause = function(e) { e || (this._isPaused = !0), this._element.querySelector(ee) && (we.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, e.cycle = function(e) { e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, e.to = function(e) { var t = this;
                this._activeElement = this._element.querySelector(X); var n = this._getItemIndex(this._activeElement); if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) k(this._element).one(q.SLID, function() { return t.to(e) });
                    else { if (n === e) return this.pause(), void this.cycle(); var i = n < e ? W : R;
                        this._slide(i, this._items[e]) } }, e.dispose = function() { k(this._element).off(L), k.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, e._getConfig = function(e) { return e = l({}, M, e), we.typeCheckConfig(x, e, F), e }, e._addEventListeners = function() { var t = this;
                this._config.keyboard && k(this._element).on(q.KEYDOWN, function(e) { return t._keydown(e) }), "hover" === this._config.pause && (k(this._element).on(q.MOUSEENTER, function(e) { return t.pause(e) }).on(q.MOUSELEAVE, function(e) { return t.cycle(e) }), "ontouchstart" in document.documentElement && k(this._element).on(q.TOUCHEND, function() { t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) { return t.cycle(e) }, 500 + t._config.interval) })) }, e._keydown = function(e) { if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev(); break;
                    case 39:
                        e.preventDefault(), this.next() } }, e._getItemIndex = function(e) { return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll($)) : [], this._items.indexOf(e) }, e._getItemByDirection = function(e, t) { var n = e === W,
                    i = e === R,
                    r = this._getItemIndex(t),
                    o = this._items.length - 1; if ((i && 0 === r || n && r === o) && !this._config.wrap) return t; var s = (r + (e === R ? -1 : 1)) % this._items.length; return -1 === s ? this._items[this._items.length - 1] : this._items[s] }, e._triggerSlideEvent = function(e, t) { var n = this._getItemIndex(e),
                    i = this._getItemIndex(this._element.querySelector(X)),
                    r = k.Event(q.SLIDE, { relatedTarget: e, direction: t, from: i, to: n }); return k(this._element).trigger(r), r }, e._setActiveIndicatorElement = function(e) { if (this._indicatorsElement) { var t = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                    k(t).removeClass(Q); var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && k(n).addClass(Q) } }, e._slide = function(e, t) { var n, i, r, o = this,
                    s = this._element.querySelector(X),
                    a = this._getItemIndex(s),
                    l = t || s && this._getItemByDirection(e, s),
                    c = this._getItemIndex(l),
                    u = Boolean(this._interval); if (e === W ? (n = z, i = G, r = U) : (n = V, i = J, r = B), l && k(l).hasClass(Q)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) { this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l); var f = k.Event(q.SLID, { relatedTarget: l, direction: r, from: a, to: c }); if (k(this._element).hasClass(Y)) { k(l).addClass(i), we.reflow(l), k(s).addClass(n), k(l).addClass(n); var h = we.getTransitionDurationFromElement(s);
                        k(s).one(we.TRANSITION_END, function() { k(l).removeClass(n + " " + i).addClass(Q), k(s).removeClass(Q + " " + i + " " + n), o._isSliding = !1, setTimeout(function() { return k(o._element).trigger(f) }, 0) }).emulateTransitionEnd(h) } else k(s).removeClass(Q), k(l).addClass(Q), this._isSliding = !1, k(this._element).trigger(f);
                    u && this.cycle() } }, o._jQueryInterface = function(i) { return this.each(function() { var e = k(this).data(P),
                        t = l({}, M, k(this).data()); "object" == typeof i && (t = l({}, t, i)); var n = "string" == typeof i ? i : t.slide; if (e || (e = new o(this, t), k(this).data(P, e)), "number" == typeof i) e.to(i);
                    else if ("string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]() } else t.interval && (e.pause(), e.cycle()) }) }, o._dataApiClickHandler = function(e) { var t = we.getSelectorFromElement(this); if (t) { var n = k(t)[0]; if (n && k(n).hasClass(K)) { var i = l({}, k(n).data(), k(this).data()),
                            r = this.getAttribute("data-slide-to");
                        r && (i.interval = !1), o._jQueryInterface.call(k(n), i), r && k(n).data(P).to(r), e.preventDefault() } } }, s(o, null, [{ key: "VERSION", get: function() { return "4.1.3" } }, { key: "Default", get: function() { return M } }]), o }(), k(document).on(q.CLICK_DATA_API, ne, re._dataApiClickHandler), k(window).on(q.LOAD_DATA_API, function() { for (var e = [].slice.call(document.querySelectorAll(ie)), t = 0, n = e.length; t < n; t++) { var i = k(e[t]);
                re._jQueryInterface.call(i, i.data()) } }), k.fn[x] = re._jQueryInterface, k.fn[x].Constructor = re, k.fn[x].noConflict = function() { return k.fn[x] = H, re._jQueryInterface }, re), De = (se = "collapse", le = "." + (ae = "bs.collapse"), ce = (oe = t).fn[se], ue = { toggle: !0, parent: "" }, fe = { toggle: "boolean", parent: "(string|element)" }, he = { SHOW: "show" + le, SHOWN: "shown" + le, HIDE: "hide" + le, HIDDEN: "hidden" + le, CLICK_DATA_API: "click" + le + ".data-api" }, de = "show", pe = "collapse", me = "collapsing", ge = "collapsed", _e = "width", ve = "height", ye = ".show, .collapsing", Ee = '[data-toggle="collapse"]', be = function() {
            function a(t, e) { this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = oe.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')); for (var n = [].slice.call(document.querySelectorAll(Ee)), i = 0, r = n.length; i < r; i++) { var o = n[i],
                        s = we.getSelectorFromElement(o),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(e) { return e === t });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o)) } this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var e = a.prototype; return e.toggle = function() { oe(this._element).hasClass(de) ? this.hide() : this.show() }, e.show = function() { var e, t, n = this; if (!this._isTransitioning && !oe(this._element).hasClass(de) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(ye)).filter(function(e) { return e.getAttribute("data-parent") === n._config.parent })).length && (e = null), !(e && (t = oe(e).not(this._selector).data(ae)) && t._isTransitioning))) { var i = oe.Event(he.SHOW); if (oe(this._element).trigger(i), !i.isDefaultPrevented()) { e && (a._jQueryInterface.call(oe(e).not(this._selector), "hide"), t || oe(e).data(ae, null)); var r = this._getDimension();
                        oe(this._element).removeClass(pe).addClass(me), this._element.style[r] = 0, this._triggerArray.length && oe(this._triggerArray).removeClass(ge).attr("aria-expanded", !0), this.setTransitioning(!0); var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            s = we.getTransitionDurationFromElement(this._element);
                        oe(this._element).one(we.TRANSITION_END, function() { oe(n._element).removeClass(me).addClass(pe).addClass(de), n._element.style[r] = "", n.setTransitioning(!1), oe(n._element).trigger(he.SHOWN) }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px" } } }, e.hide = function() { var e = this; if (!this._isTransitioning && oe(this._element).hasClass(de)) { var t = oe.Event(he.HIDE); if (oe(this._element).trigger(t), !t.isDefaultPrevented()) { var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", we.reflow(this._element), oe(this._element).addClass(me).removeClass(pe).removeClass(de); var i = this._triggerArray.length; if (0 < i)
                            for (var r = 0; r < i; r++) { var o = this._triggerArray[r],
                                    s = we.getSelectorFromElement(o); if (null !== s) oe([].slice.call(document.querySelectorAll(s))).hasClass(de) || oe(o).addClass(ge).attr("aria-expanded", !1) } this.setTransitioning(!0);
                        this._element.style[n] = ""; var a = we.getTransitionDurationFromElement(this._element);
                        oe(this._element).one(we.TRANSITION_END, function() { e.setTransitioning(!1), oe(e._element).removeClass(me).addClass(pe).trigger(he.HIDDEN) }).emulateTransitionEnd(a) } } }, e.setTransitioning = function(e) { this._isTransitioning = e }, e.dispose = function() { oe.removeData(this._element, ae), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, e._getConfig = function(e) { return (e = l({}, ue, e)).toggle = Boolean(e.toggle), we.typeCheckConfig(se, e, fe), e }, e._getDimension = function() { return oe(this._element).hasClass(_e) ? _e : ve }, e._getParent = function() { var n = this,
                    e = null;
                we.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent); var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(e.querySelectorAll(t)); return oe(i).each(function(e, t) { n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t]) }), e }, e._addAriaAndCollapsedClass = function(e, t) { if (e) { var n = oe(e).hasClass(de);
                    t.length && oe(t).toggleClass(ge, !n).attr("aria-expanded", n) } }, a._getTargetFromElement = function(e) { var t = we.getSelectorFromElement(e); return t ? document.querySelector(t) : null }, a._jQueryInterface = function(i) { return this.each(function() { var e = oe(this),
                        t = e.data(ae),
                        n = l({}, ue, e.data(), "object" == typeof i && i ? i : {}); if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(ae, t)), "string" == typeof i) { if ("undefined" == typeof t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]() } }) }, s(a, null, [{ key: "VERSION", get: function() { return "4.1.3" } }, { key: "Default", get: function() { return ue } }]), a }(), oe(document).on(he.CLICK_DATA_API, Ee, function(e) { "A" === e.currentTarget.tagName && e.preventDefault(); var n = oe(this),
                t = we.getSelectorFromElement(this),
                i = [].slice.call(document.querySelectorAll(t));
            oe(i).each(function() { var e = oe(this),
                    t = e.data(ae) ? "toggle" : n.data();
                be._jQueryInterface.call(e, t) }) }), oe.fn[se] = be._jQueryInterface, oe.fn[se].Constructor = be, oe.fn[se].noConflict = function() { return oe.fn[se] = ce, be._jQueryInterface }, be), Ae = "undefined" != typeof window && "undefined" != typeof document, Ie = ["Edge", "Trident", "Firefox"], Oe = 0, Ne = 0; Ne < Ie.length; Ne += 1)
        if (Ae && 0 <= navigator.userAgent.indexOf(Ie[Ne])) { Oe = 1; break } var ke = Ae && window.Promise ? function(e) { var t = !1; return function() { t || (t = !0, window.Promise.resolve().then(function() { t = !1, e() })) } } : function(e) { var t = !1; return function() { t || (t = !0, setTimeout(function() { t = !1, e() }, Oe)) } };

    function xe(e) { return e && "[object Function]" === {}.toString.call(e) }

    function Pe(e, t) { if (1 !== e.nodeType) return []; var n = getComputedStyle(e, null); return t ? n[t] : n }

    function Le(e) { return "HTML" === e.nodeName ? e : e.parentNode || e.host }

    function je(e) { if (!e) return document.body; switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body } var t = Pe(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY; return /(auto|scroll|overlay)/.test(n + r + i) ? e : je(Le(e)) } var He = Ae && !(!window.MSInputMethodContext || !document.documentMode),
        Me = Ae && /MSIE 10/.test(navigator.userAgent);

    function Fe(e) { return 11 === e ? He : 10 === e ? Me : He || Me }

    function We(e) { if (!e) return document.documentElement; for (var t = Fe(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === Pe(n, "position") ? We(n) : n : e ? e.ownerDocument.documentElement : document.documentElement }

    function Re(e) { return null !== e.parentNode ? Re(e.parentNode) : e }

    function Ue(e, t) { if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement; var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0); var s, a, l = o.commonAncestorContainer; if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && We(s.firstElementChild) !== s ? We(l) : l; var c = Re(e); return c.host ? Ue(c.host, t) : Ue(e, Re(t).host) }

    function Be(e) { var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName; if ("BODY" === n || "HTML" === n) { var i = e.ownerDocument.documentElement; return (e.ownerDocument.scrollingElement || i)[t] } return e[t] }

    function qe(e, t) { var n = "x" === t ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom"; return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10) }

    function Ke(e, t, n, i) { return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Fe(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0) }

    function Qe() { var e = document.body,
            t = document.documentElement,
            n = Fe(10) && getComputedStyle(t); return { height: Ke("Height", e, t, n), width: Ke("Width", e, t, n) } } var Ye = function() {
            function i(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(e, t, n) { return t && i(e.prototype, t), n && i(e, n), e } }(),
        Ve = function(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e },
        ze = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e };

    function Ge(e) { return ze({}, e, { right: e.left + e.width, bottom: e.top + e.height }) }

    function Je(e) { var t = {}; try { if (Fe(10)) { t = e.getBoundingClientRect(); var n = Be(e, "top"),
                    i = Be(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i } else t = e.getBoundingClientRect() } catch (e) {} var r = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
            o = "HTML" === e.nodeName ? Qe() : {},
            s = o.width || e.clientWidth || r.right - r.left,
            a = o.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - s,
            c = e.offsetHeight - a; if (l || c) { var u = Pe(e);
            l -= qe(u, "x"), c -= qe(u, "y"), r.width -= l, r.height -= c } return Ge(r) }

    function Ze(e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = Fe(10),
            r = "HTML" === t.nodeName,
            o = Je(e),
            s = Je(t),
            a = je(e),
            l = Pe(t),
            c = parseFloat(l.borderTopWidth, 10),
            u = parseFloat(l.borderLeftWidth, 10);
        n && "HTML" === t.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0)); var f = Ge({ top: o.top - s.top - c, left: o.left - s.left - u, width: o.width, height: o.height }); if (f.marginTop = 0, f.marginLeft = 0, !i && r) { var h = parseFloat(l.marginTop, 10),
                d = parseFloat(l.marginLeft, 10);
            f.top -= c - h, f.bottom -= c - h, f.left -= u - d, f.right -= u - d, f.marginTop = h, f.marginLeft = d } return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (f = function(e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = Be(t, "top"),
                r = Be(t, "left"),
                o = n ? -1 : 1; return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e }(f, t)), f }

    function Xe(e) { if (!e || !e.parentElement || Fe()) return document.documentElement; for (var t = e.parentElement; t && "none" === Pe(t, "transform");) t = t.parentElement; return t || document.documentElement }

    function $e(e, t, n, i) { var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            o = { top: 0, left: 0 },
            s = r ? Xe(e) : Ue(e, t); if ("viewport" === i) o = function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                i = Ze(e, n),
                r = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0),
                s = t ? 0 : Be(n),
                a = t ? 0 : Be(n, "left"); return Ge({ top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o }) }(s, r);
        else { var a = void 0; "scrollParent" === i ? "BODY" === (a = je(Le(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i; var l = Ze(a, s, r); if ("HTML" !== a.nodeName || function e(t) { var n = t.nodeName; return "BODY" !== n && "HTML" !== n && ("fixed" === Pe(t, "position") || e(Le(t))) }(s)) o = l;
            else { var c = Qe(),
                    u = c.height,
                    f = c.width;
                o.top += l.top - l.marginTop, o.bottom = u + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left } } return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o }

    function et(e, t, i, n, r) { var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === e.indexOf("auto")) return e; var s = $e(i, n, o, r),
            a = { top: { width: s.width, height: t.top - s.top }, right: { width: s.right - t.right, height: s.height }, bottom: { width: s.width, height: s.bottom - t.bottom }, left: { width: t.left - s.left, height: s.height } },
            l = Object.keys(a).map(function(e) { return ze({ key: e }, a[e], { area: (t = a[e], t.width * t.height) }); var t }).sort(function(e, t) { return t.area - e.area }),
            c = l.filter(function(e) { var t = e.width,
                    n = e.height; return t >= i.clientWidth && n >= i.clientHeight }),
            u = 0 < c.length ? c[0].key : l[0].key,
            f = e.split("-")[1]; return u + (f ? "-" + f : "") }

    function tt(e, t, n) { var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return Ze(n, i ? Xe(t) : Ue(t, n), i) }

    function nt(e) { var t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight); return { width: e.offsetWidth + i, height: e.offsetHeight + n } }

    function it(e) { var t = { left: "right", right: "left", bottom: "top", top: "bottom" }; return e.replace(/left|right|bottom|top/g, function(e) { return t[e] }) }

    function rt(e, t, n) { n = n.split("-")[0]; var i = nt(e),
            r = { width: i.width, height: i.height },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height"; return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[it(a)], r }

    function ot(e, t) { return Array.prototype.find ? e.find(t) : e.filter(t)[0] }

    function st(e, n, t) { return (void 0 === t ? e : e.slice(0, function(e, t, n) { if (Array.prototype.findIndex) return e.findIndex(function(e) { return e[t] === n }); var i = ot(e, function(e) { return e[t] === n }); return e.indexOf(i) }(e, "name", t))).forEach(function(e) { e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!"); var t = e.function || e.fn;
            e.enabled && xe(t) && (n.offsets.popper = Ge(n.offsets.popper), n.offsets.reference = Ge(n.offsets.reference), n = t(n, e)) }), n }

    function at(e, n) { return e.some(function(e) { var t = e.name; return e.enabled && t === n }) }

    function lt(e) { for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) { var r = t[i],
                o = r ? "" + r + n : e; if ("undefined" != typeof document.body.style[o]) return o } return null }

    function ct(e) { var t = e.ownerDocument; return t ? t.defaultView : window }

    function ut(e, t, n, i) { n.updateBound = i, ct(e).addEventListener("resize", n.updateBound, { passive: !0 }); var r = je(e); return function e(t, n, i, r) { var o = "BODY" === t.nodeName,
                s = o ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, i, { passive: !0 }), o || e(je(s.parentNode), n, i, r), r.push(s) }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n }

    function ft() { var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, ct(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) { e.removeEventListener("scroll", t.updateBound) }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t)) }

    function ht(e) { return "" !== e && !isNaN(parseFloat(e)) && isFinite(e) }

    function dt(n, i) { Object.keys(i).forEach(function(e) { var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && ht(i[e]) && (t = "px"), n.style[e] = i[e] + t }) }

    function pt(e, t, n) { var i = ot(e, function(e) { return e.name === t }),
            r = !!i && e.some(function(e) { return e.name === n && e.enabled && e.order < i.order }); if (!r) { var o = "`" + t + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!") } return r } var mt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        gt = mt.slice(3);

    function _t(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = gt.indexOf(e),
            i = gt.slice(n + 1).concat(gt.slice(0, n)); return t ? i.reverse() : i } var vt = "flip",
        yt = "clockwise",
        Et = "counterclockwise";

    function bt(e, r, o, t) { var s = [0, 0],
            a = -1 !== ["right", "left"].indexOf(t),
            n = e.split(/(\+|\-)/).map(function(e) { return e.trim() }),
            i = n.indexOf(ot(n, function(e) { return -1 !== e.search(/,|\s/) }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."); var l = /\s*,\s*|\s+/,
            c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n]; return (c = c.map(function(e, t) { var n = (1 === t ? !a : a) ? "height" : "width",
                i = !1; return e.reduce(function(e, t) { return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t) }, []).map(function(e) { return function(e, t, n, i) { var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +r[1],
                        s = r[2]; if (!o) return e; if (0 === s.indexOf("%")) { var a = void 0; switch (s) {
                            case "%p":
                                a = n; break;
                            case "%":
                            case "%r":
                            default:
                                a = i } return Ge(a)[t] / 100 * o } if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o; return o }(e, n, r, o) }) })).forEach(function(n, i) { n.forEach(function(e, t) { ht(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1)) }) }), s } var wt = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function() {}, onUpdate: function() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function(e) { var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1]; if (i) { var r = e.offsets,
                                o = r.reference,
                                s = r.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                u = { start: Ve({}, l, o[l]), end: Ve({}, l, o[l] + o[c] - s[c]) };
                            e.offsets.popper = ze({}, s, u[i]) } return e } }, offset: { order: 200, enabled: !0, fn: function(e, t) { var n = t.offset,
                            i = e.placement,
                            r = e.offsets,
                            o = r.popper,
                            s = r.reference,
                            a = i.split("-")[0],
                            l = void 0; return l = ht(+n) ? [+n, 0] : bt(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function(e, i) { var t = i.boundariesElement || We(e.instance.popper);
                        e.instance.reference === t && (t = We(t)); var n = lt("transform"),
                            r = e.instance.popper.style,
                            o = r.top,
                            s = r.left,
                            a = r[n];
                        r.top = "", r.left = "", r[n] = ""; var l = $e(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                        r.top = o, r.left = s, r[n] = a, i.boundaries = l; var c = i.priority,
                            u = e.offsets.popper,
                            f = { primary: function(e) { var t = u[e]; return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])), Ve({}, e, t) }, secondary: function(e) { var t = "right" === e ? "left" : "top",
                                        n = u[t]; return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))), Ve({}, t, n) } }; return c.forEach(function(e) { var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            u = ze({}, u, f[t](e)) }), e.offsets.popper = u, e }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function(e) { var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            r = e.placement.split("-")[0],
                            o = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(r),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height"; return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e } }, arrow: { order: 500, enabled: !0, fn: function(e, t) { var n; if (!pt(e.instance.modifiers, "arrow", "keepTogether")) return e; var i = t.element; if ("string" == typeof i) { if (!(i = e.instance.popper.querySelector(i))) return e } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e; var r = e.placement.split("-")[0],
                            o = e.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = -1 !== ["left", "right"].indexOf(r),
                            c = l ? "height" : "width",
                            u = l ? "Top" : "Left",
                            f = u.toLowerCase(),
                            h = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = nt(i)[c];
                        a[d] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[d] - p)), a[f] + p > s[d] && (e.offsets.popper[f] += a[f] + p - s[d]), e.offsets.popper = Ge(e.offsets.popper); var m = a[f] + a[c] / 2 - p / 2,
                            g = Pe(e.instance.popper),
                            _ = parseFloat(g["margin" + u], 10),
                            v = parseFloat(g["border" + u + "Width"], 10),
                            y = m - e.offsets.popper[f] - _ - v; return y = Math.max(Math.min(s[c] - p, y), 0), e.arrowElement = i, e.offsets.arrow = (Ve(n = {}, f, Math.round(y)), Ve(n, h, ""), n), e }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function(p, m) { if (at(p.instance.modifiers, "inner")) return p; if (p.flipped && p.placement === p.originalPlacement) return p; var g = $e(p.instance.popper, p.instance.reference, m.padding, m.boundariesElement, p.positionFixed),
                            _ = p.placement.split("-")[0],
                            v = it(_),
                            y = p.placement.split("-")[1] || "",
                            E = []; switch (m.behavior) {
                            case vt:
                                E = [_, v]; break;
                            case yt:
                                E = _t(_); break;
                            case Et:
                                E = _t(_, !0); break;
                            default:
                                E = m.behavior } return E.forEach(function(e, t) { if (_ !== e || E.length === t + 1) return p;
                            _ = p.placement.split("-")[0], v = it(_); var n, i = p.offsets.popper,
                                r = p.offsets.reference,
                                o = Math.floor,
                                s = "left" === _ && o(i.right) > o(r.left) || "right" === _ && o(i.left) < o(r.right) || "top" === _ && o(i.bottom) > o(r.top) || "bottom" === _ && o(i.top) < o(r.bottom),
                                a = o(i.left) < o(g.left),
                                l = o(i.right) > o(g.right),
                                c = o(i.top) < o(g.top),
                                u = o(i.bottom) > o(g.bottom),
                                f = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && u,
                                h = -1 !== ["top", "bottom"].indexOf(_),
                                d = !!m.flipVariations && (h && "start" === y && a || h && "end" === y && l || !h && "start" === y && c || !h && "end" === y && u);
                            (s || f || d) && (p.flipped = !0, (s || f) && (_ = E[t + 1]), d && (y = "end" === (n = y) ? "start" : "start" === n ? "end" : n), p.placement = _ + (y ? "-" + y : ""), p.offsets.popper = ze({}, p.offsets.popper, rt(p.instance.popper, p.offsets.reference, p.placement)), p = st(p.instance.modifiers, p, "flip")) }), p }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: !1, fn: function(e) { var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            r = i.popper,
                            o = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n); return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = it(t), e.offsets.popper = Ge(r), e } }, hide: { order: 800, enabled: !0, fn: function(e) { if (!pt(e.instance.modifiers, "hide", "preventOverflow")) return e; var t = e.offsets.reference,
                            n = ot(e.instance.modifiers, function(e) { return "preventOverflow" === e.name }).boundaries; if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) { if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = "" } else { if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1 } return e } }, computeStyle: { order: 850, enabled: !0, fn: function(e, t) { var n = t.x,
                            i = t.y,
                            r = e.offsets.popper,
                            o = ot(e.instance.modifiers, function(e) { return "applyStyle" === e.name }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"); var s = void 0 !== o ? o : t.gpuAcceleration,
                            a = Je(We(e.instance.popper)),
                            l = { position: r.position },
                            c = { left: Math.floor(r.left), top: Math.round(r.top), bottom: Math.round(r.bottom), right: Math.floor(r.right) },
                            u = "bottom" === n ? "top" : "bottom",
                            f = "right" === i ? "left" : "right",
                            h = lt("transform"),
                            d = void 0,
                            p = void 0; if (p = "bottom" === u ? -a.height + c.bottom : c.top, d = "right" === f ? -a.width + c.right : c.left, s && h) l[h] = "translate3d(" + d + "px, " + p + "px, 0)", l[u] = 0, l[f] = 0, l.willChange = "transform";
                        else { var m = "bottom" === u ? -1 : 1,
                                g = "right" === f ? -1 : 1;
                            l[u] = p * m, l[f] = d * g, l.willChange = u + ", " + f } var _ = { "x-placement": e.placement }; return e.attributes = ze({}, _, e.attributes), e.styles = ze({}, l, e.styles), e.arrowStyles = ze({}, e.offsets.arrow, e.arrowStyles), e }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function(e) { var t, n; return dt(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {!1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e) }), e.arrowElement && Object.keys(e.arrowStyles).length && dt(e.arrowElement, e.arrowStyles), e }, onLoad: function(e, t, n, i, r) { var o = tt(r, t, e, n.positionFixed),
                            s = et(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding); return t.setAttribute("x-placement", s), dt(t, { position: n.positionFixed ? "fixed" : "absolute" }), n }, gpuAcceleration: void 0 } } },
        Ct = function() {
            function o(e, t) { var n = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, o), this.scheduleUpdate = function() { return requestAnimationFrame(n.update) }, this.update = ke(this.update.bind(this)), this.options = ze({}, o.Defaults, i), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(ze({}, o.Defaults.modifiers, i.modifiers)).forEach(function(e) { n.options.modifiers[e] = ze({}, o.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) { return ze({ name: e }, n.options.modifiers[e]) }).sort(function(e, t) { return e.order - t.order }), this.modifiers.forEach(function(e) { e.enabled && xe(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state) }), this.update(); var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r } return Ye(o, [{ key: "update", value: function() { return function() { if (!this.state.isDestroyed) { var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                            e.offsets.reference = tt(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = et(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = rt(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = st(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e)) } }.call(this) } }, { key: "destroy", value: function() { return function() { return this.state.isDestroyed = !0, at(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[lt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }.call(this) } }, { key: "enableEventListeners", value: function() { return function() { this.state.eventsEnabled || (this.state = ut(this.reference, this.options, this.state, this.scheduleUpdate)) }.call(this) } }, { key: "disableEventListeners", value: function() { return ft.call(this) } }]), o }();
    Ct.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Ct.placements = mt, Ct.Defaults = wt; var Tt, St, Dt, At, It, Ot, Nt, kt, xt, Pt, Lt, jt, Ht, Mt, Ft, Wt, Rt, Ut, Bt, qt, Kt, Qt, Yt, Vt, zt, Gt, Jt, Zt, Xt, $t, en, tn, nn, rn, on, sn, an, ln, cn, un, fn, hn, dn, pn, mn, gn, _n, vn, yn, En, bn, wn, Cn, Tn, Sn, Dn, An, In, On, Nn, kn, xn, Pn, Ln, jn, Hn, Mn, Fn, Wn, Rn, Un, Bn, qn, Kn, Qn, Yn, Vn, zn, Gn, Jn, Zn, Xn, $n, ei, ti, ni, ii, ri, oi, si, ai, li, ci, ui, fi, hi, di, pi, mi, gi, _i, vi, yi, Ei, bi, wi, Ci, Ti, Si, Di, Ai, Ii, Oi, Ni, ki, xi, Pi, Li, ji, Hi, Mi, Fi, Wi, Ri, Ui, Bi = (St = "dropdown", At = "." + (Dt = "bs.dropdown"), It = ".data-api", Ot = (Tt = t).fn[St], Nt = new RegExp("38|40|27"), kt = { HIDE: "hide" + At, HIDDEN: "hidden" + At, SHOW: "show" + At, SHOWN: "shown" + At, CLICK: "click" + At, CLICK_DATA_API: "click" + At + It, KEYDOWN_DATA_API: "keydown" + At + It, KEYUP_DATA_API: "keyup" + At + It }, xt = "disabled", Pt = "show", Lt = "dropup", jt = "dropright", Ht = "dropleft", Mt = "dropdown-menu-right", Ft = "position-static", Wt = '[data-toggle="dropdown"]', Rt = ".dropdown form", Ut = ".dropdown-menu", Bt = ".navbar-nav", qt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Kt = "top-start", Qt = "top-end", Yt = "bottom-start", Vt = "bottom-end", zt = "right-start", Gt = "left-start", Jt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Zt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Xt = function() {
            function c(e, t) { this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var e = c.prototype; return e.toggle = function() { if (!this._element.disabled && !Tt(this._element).hasClass(xt)) { var e = c._getParentFromElement(this._element),
                        t = Tt(this._menu).hasClass(Pt); if (c._clearMenus(), !t) { var n = { relatedTarget: this._element },
                            i = Tt.Event(kt.SHOW, n); if (Tt(e).trigger(i), !i.isDefaultPrevented()) { if (!this._inNavbar) { if ("undefined" == typeof Ct) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)"); var r = this._element; "parent" === this._config.reference ? r = e : we.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && Tt(e).addClass(Ft), this._popper = new Ct(r, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === Tt(e).closest(Bt).length && Tt(document.body).children().on("mouseover", null, Tt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), Tt(this._menu).toggleClass(Pt), Tt(e).toggleClass(Pt).trigger(Tt.Event(kt.SHOWN, n)) } } } }, e.dispose = function() { Tt.removeData(this._element, Dt), Tt(this._element).off(At), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, e.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, e._addEventListeners = function() { var t = this;
                Tt(this._element).on(kt.CLICK, function(e) { e.preventDefault(), e.stopPropagation(), t.toggle() }) }, e._getConfig = function(e) { return e = l({}, this.constructor.Default, Tt(this._element).data(), e), we.typeCheckConfig(St, e, this.constructor.DefaultType), e }, e._getMenuElement = function() { if (!this._menu) { var e = c._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(Ut)) } return this._menu }, e._getPlacement = function() { var e = Tt(this._element.parentNode),
                    t = Yt; return e.hasClass(Lt) ? (t = Kt, Tt(this._menu).hasClass(Mt) && (t = Qt)) : e.hasClass(jt) ? t = zt : e.hasClass(Ht) ? t = Gt : Tt(this._menu).hasClass(Mt) && (t = Vt), t }, e._detectNavbar = function() { return 0 < Tt(this._element).closest(".navbar").length }, e._getPopperConfig = function() { var t = this,
                    e = {}; "function" == typeof this._config.offset ? e.fn = function(e) { return e.offsets = l({}, e.offsets, t._config.offset(e.offsets) || {}), e } : e.offset = this._config.offset; var n = { placement: this._getPlacement(), modifiers: { offset: e, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n }, c._jQueryInterface = function(t) { return this.each(function() { var e = Tt(this).data(Dt); if (e || (e = new c(this, "object" == typeof t ? t : null), Tt(this).data(Dt, e)), "string" == typeof t) { if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]() } }) }, c._clearMenus = function(e) { if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var t = [].slice.call(document.querySelectorAll(Wt)), n = 0, i = t.length; n < i; n++) { var r = c._getParentFromElement(t[n]),
                            o = Tt(t[n]).data(Dt),
                            s = { relatedTarget: t[n] }; if (e && "click" === e.type && (s.clickEvent = e), o) { var a = o._menu; if (Tt(r).hasClass(Pt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && Tt.contains(r, e.target))) { var l = Tt.Event(kt.HIDE, s);
                                Tt(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && Tt(document.body).children().off("mouseover", null, Tt.noop), t[n].setAttribute("aria-expanded", "false"), Tt(a).removeClass(Pt), Tt(r).removeClass(Pt).trigger(Tt.Event(kt.HIDDEN, s))) } } } }, c._getParentFromElement = function(e) { var t, n = we.getSelectorFromElement(e); return n && (t = document.querySelector(n)), t || e.parentNode }, c._dataApiKeydownHandler = function(e) { if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || Tt(e.target).closest(Ut).length)) : Nt.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !Tt(this).hasClass(xt))) { var t = c._getParentFromElement(this),
                        n = Tt(t).hasClass(Pt); if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) { var i = [].slice.call(t.querySelectorAll(qt)); if (0 !== i.length) { var r = i.indexOf(e.target);
                            38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus() } } else { if (27 === e.which) { var o = t.querySelector(Wt);
                            Tt(o).trigger("focus") } Tt(this).trigger("click") } } }, s(c, null, [{ key: "VERSION", get: function() { return "4.1.3" } }, { key: "Default", get: function() { return Jt } }, { key: "DefaultType", get: function() { return Zt } }]), c }(), Tt(document).on(kt.KEYDOWN_DATA_API, Wt, Xt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, Ut, Xt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Xt._clearMenus).on(kt.CLICK_DATA_API, Wt, function(e) { e.preventDefault(), e.stopPropagation(), Xt._jQueryInterface.call(Tt(this), "toggle") }).on(kt.CLICK_DATA_API, Rt, function(e) { e.stopPropagation() }), Tt.fn[St] = Xt._jQueryInterface, Tt.fn[St].Constructor = Xt, Tt.fn[St].noConflict = function() { return Tt.fn[St] = Ot, Xt._jQueryInterface }, Xt),
        qi = (en = "modal", nn = "." + (tn = "bs.modal"), rn = ($t = t).fn[en], on = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, sn = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, an = { HIDE: "hide" + nn, HIDDEN: "hidden" + nn, SHOW: "show" + nn, SHOWN: "shown" + nn, FOCUSIN: "focusin" + nn, RESIZE: "resize" + nn, CLICK_DISMISS: "click.dismiss" + nn, KEYDOWN_DISMISS: "keydown.dismiss" + nn, MOUSEUP_DISMISS: "mouseup.dismiss" + nn, MOUSEDOWN_DISMISS: "mousedown.dismiss" + nn, CLICK_DATA_API: "click" + nn + ".data-api" }, ln = "modal-scrollbar-measure", cn = "modal-backdrop", un = "modal-open", fn = "fade", hn = "show", dn = ".modal-dialog", pn = '[data-toggle="modal"]', mn = '[data-dismiss="modal"]', gn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _n = ".sticky-top", vn = function() {
            function r(e, t) { this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(dn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0 } var e = r.prototype; return e.toggle = function(e) { return this._isShown ? this.hide() : this.show(e) }, e.show = function(e) { var t = this; if (!this._isTransitioning && !this._isShown) { $t(this._element).hasClass(fn) && (this._isTransitioning = !0); var n = $t.Event(an.SHOW, { relatedTarget: e });
                    $t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), $t(document.body).addClass(un), this._setEscapeEvent(), this._setResizeEvent(), $t(this._element).on(an.CLICK_DISMISS, mn, function(e) { return t.hide(e) }), $t(this._dialog).on(an.MOUSEDOWN_DISMISS, function() { $t(t._element).one(an.MOUSEUP_DISMISS, function(e) { $t(e.target).is(t._element) && (t._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return t._showElement(e) })) } }, e.hide = function(e) { var t = this; if (e && e.preventDefault(), !this._isTransitioning && this._isShown) { var n = $t.Event(an.HIDE); if ($t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) { this._isShown = !1; var i = $t(this._element).hasClass(fn); if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $t(document).off(an.FOCUSIN), $t(this._element).removeClass(hn), $t(this._element).off(an.CLICK_DISMISS), $t(this._dialog).off(an.MOUSEDOWN_DISMISS), i) { var r = we.getTransitionDurationFromElement(this._element);
                            $t(this._element).one(we.TRANSITION_END, function(e) { return t._hideModal(e) }).emulateTransitionEnd(r) } else this._hideModal() } } }, e.dispose = function() { $t.removeData(this._element, tn), $t(window, document, this._element, this._backdrop).off(nn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null }, e.handleUpdate = function() { this._adjustDialog() }, e._getConfig = function(e) { return e = l({}, on, e), we.typeCheckConfig(en, e, sn), e }, e._showElement = function(e) { var t = this,
                    n = $t(this._element).hasClass(fn);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && we.reflow(this._element), $t(this._element).addClass(hn), this._config.focus && this._enforceFocus(); var i = $t.Event(an.SHOWN, { relatedTarget: e }),
                    r = function() { t._config.focus && t._element.focus(), t._isTransitioning = !1, $t(t._element).trigger(i) }; if (n) { var o = we.getTransitionDurationFromElement(this._element);
                    $t(this._dialog).one(we.TRANSITION_END, r).emulateTransitionEnd(o) } else r() }, e._enforceFocus = function() { var t = this;
                $t(document).off(an.FOCUSIN).on(an.FOCUSIN, function(e) { document !== e.target && t._element !== e.target && 0 === $t(t._element).has(e.target).length && t._element.focus() }) }, e._setEscapeEvent = function() { var t = this;
                this._isShown && this._config.keyboard ? $t(this._element).on(an.KEYDOWN_DISMISS, function(e) { 27 === e.which && (e.preventDefault(), t.hide()) }) : this._isShown || $t(this._element).off(an.KEYDOWN_DISMISS) }, e._setResizeEvent = function() { var t = this;
                this._isShown ? $t(window).on(an.RESIZE, function(e) { return t.handleUpdate(e) }) : $t(window).off(an.RESIZE) }, e._hideModal = function() { var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() { $t(document.body).removeClass(un), e._resetAdjustments(), e._resetScrollbar(), $t(e._element).trigger(an.HIDDEN) }) }, e._removeBackdrop = function() { this._backdrop && ($t(this._backdrop).remove(), this._backdrop = null) }, e._showBackdrop = function(e) { var t = this,
                    n = $t(this._element).hasClass(fn) ? fn : ""; if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement("div"), this._backdrop.className = cn, n && this._backdrop.classList.add(n), $t(this._backdrop).appendTo(document.body), $t(this._element).on(an.CLICK_DISMISS, function(e) { t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide()) }), n && we.reflow(this._backdrop), $t(this._backdrop).addClass(hn), !e) return; if (!n) return void e(); var i = we.getTransitionDurationFromElement(this._backdrop);
                    $t(this._backdrop).one(we.TRANSITION_END, e).emulateTransitionEnd(i) } else if (!this._isShown && this._backdrop) { $t(this._backdrop).removeClass(hn); var r = function() { t._removeBackdrop(), e && e() }; if ($t(this._element).hasClass(fn)) { var o = we.getTransitionDurationFromElement(this._backdrop);
                        $t(this._backdrop).one(we.TRANSITION_END, r).emulateTransitionEnd(o) } else r() } else e && e() }, e._adjustDialog = function() { var e = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, e._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, e._checkScrollbar = function() { var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, e._setScrollbar = function() { var r = this; if (this._isBodyOverflowing) { var e = [].slice.call(document.querySelectorAll(gn)),
                        t = [].slice.call(document.querySelectorAll(_n));
                    $t(e).each(function(e, t) { var n = t.style.paddingRight,
                            i = $t(t).css("padding-right");
                        $t(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px") }), $t(t).each(function(e, t) { var n = t.style.marginRight,
                            i = $t(t).css("margin-right");
                        $t(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px") }); var n = document.body.style.paddingRight,
                        i = $t(document.body).css("padding-right");
                    $t(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px") } }, e._resetScrollbar = function() { var e = [].slice.call(document.querySelectorAll(gn));
                $t(e).each(function(e, t) { var n = $t(t).data("padding-right");
                    $t(t).removeData("padding-right"), t.style.paddingRight = n || "" }); var t = [].slice.call(document.querySelectorAll("" + _n));
                $t(t).each(function(e, t) { var n = $t(t).data("margin-right"); "undefined" != typeof n && $t(t).css("margin-right", n).removeData("margin-right") }); var n = $t(document.body).data("padding-right");
                $t(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "" }, e._getScrollbarWidth = function() { var e = document.createElement("div");
                e.className = ln, document.body.appendChild(e); var t = e.getBoundingClientRect().width - e.clientWidth; return document.body.removeChild(e), t }, r._jQueryInterface = function(n, i) { return this.each(function() { var e = $t(this).data(tn),
                        t = l({}, on, $t(this).data(), "object" == typeof n && n ? n : {}); if (e || (e = new r(this, t), $t(this).data(tn, e)), "string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](i) } else t.show && e.show(i) }) }, s(r, null, [{ key: "VERSION", get: function() { return "4.1.3" } }, { key: "Default", get: function() { return on } }]), r }(), $t(document).on(an.CLICK_DATA_API, pn, function(e) { var t, n = this,
                i = we.getSelectorFromElement(this);
            i && (t = document.querySelector(i)); var r = $t(t).data(tn) ? "toggle" : l({}, $t(t).data(), $t(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault(); var o = $t(t).one(an.SHOW, function(e) { e.isDefaultPrevented() || o.one(an.HIDDEN, function() { $t(n).is(":visible") && n.focus() }) });
            vn._jQueryInterface.call($t(t), r, this) }), $t.fn[en] = vn._jQueryInterface, $t.fn[en].Constructor = vn, $t.fn[en].noConflict = function() { return $t.fn[en] = rn, vn._jQueryInterface }, vn),
        Ki = (En = "tooltip", wn = "." + (bn = "bs.tooltip"), Cn = (yn = t).fn[En], Tn = "bs-tooltip", Sn = new RegExp("(^|\\s)" + Tn + "\\S+", "g"), In = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !(An = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }), selector: !(Dn = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" }), placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" }, Nn = "out", kn = { HIDE: "hide" + wn, HIDDEN: "hidden" + wn, SHOW: (On = "show") + wn, SHOWN: "shown" + wn, INSERTED: "inserted" + wn, CLICK: "click" + wn, FOCUSIN: "focusin" + wn, FOCUSOUT: "focusout" + wn, MOUSEENTER: "mouseenter" + wn, MOUSELEAVE: "mouseleave" + wn }, xn = "fade", Pn = "show", Ln = ".tooltip-inner", jn = ".arrow", Hn = "hover", Mn = "focus", Fn = "click", Wn = "manual", Rn = function() {
            function i(e, t) { if ("undefined" == typeof Ct) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners() } var e = i.prototype; return e.enable = function() { this._isEnabled = !0 }, e.disable = function() { this._isEnabled = !1 }, e.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, e.toggle = function(e) { if (this._isEnabled)
                    if (e) { var t = this.constructor.DATA_KEY,
                            n = yn(e.currentTarget).data(t);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n) } else { if (yn(this.getTipElement()).hasClass(Pn)) return void this._leave(null, this);
                        this._enter(null, this) } }, e.dispose = function() { clearTimeout(this._timeout), yn.removeData(this.element, this.constructor.DATA_KEY), yn(this.element).off(this.constructor.EVENT_KEY), yn(this.element).closest(".modal").off("hide.bs.modal"), this.tip && yn(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, e.show = function() { var t = this; if ("none" === yn(this.element).css("display")) throw new Error("Please use show on visible elements"); var e = yn.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { yn(this.element).trigger(e); var n = yn.contains(this.element.ownerDocument.documentElement, this.element); if (e.isDefaultPrevented() || !n) return; var i = this.getTipElement(),
                        r = we.getUID(this.constructor.NAME);
                    i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && yn(i).addClass(xn); var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                        s = this._getAttachment(o);
                    this.addAttachmentClass(s); var a = !1 === this.config.container ? document.body : yn(document).find(this.config.container);
                    yn(i).data(this.constructor.DATA_KEY, this), yn.contains(this.element.ownerDocument.documentElement, this.tip) || yn(i).appendTo(a), yn(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Ct(this.element, i, { placement: s, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: jn }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(e) { e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e) }, onUpdate: function(e) { t._handlePopperPlacementChange(e) } }), yn(i).addClass(Pn), "ontouchstart" in document.documentElement && yn(document.body).children().on("mouseover", null, yn.noop); var l = function() { t.config.animation && t._fixTransition(); var e = t._hoverState;
                        t._hoverState = null, yn(t.element).trigger(t.constructor.Event.SHOWN), e === Nn && t._leave(null, t) }; if (yn(this.tip).hasClass(xn)) { var c = we.getTransitionDurationFromElement(this.tip);
                        yn(this.tip).one(we.TRANSITION_END, l).emulateTransitionEnd(c) } else l() } }, e.hide = function(e) { var t = this,
                    n = this.getTipElement(),
                    i = yn.Event(this.constructor.Event.HIDE),
                    r = function() { t._hoverState !== On && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), yn(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e() }; if (yn(this.element).trigger(i), !i.isDefaultPrevented()) { if (yn(n).removeClass(Pn), "ontouchstart" in document.documentElement && yn(document.body).children().off("mouseover", null, yn.noop), this._activeTrigger[Fn] = !1, this._activeTrigger[Mn] = !1, this._activeTrigger[Hn] = !1, yn(this.tip).hasClass(xn)) { var o = we.getTransitionDurationFromElement(n);
                        yn(n).one(we.TRANSITION_END, r).emulateTransitionEnd(o) } else r();
                    this._hoverState = "" } }, e.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, e.isWithContent = function() { return Boolean(this.getTitle()) }, e.addAttachmentClass = function(e) { yn(this.getTipElement()).addClass(Tn + "-" + e) }, e.getTipElement = function() { return this.tip = this.tip || yn(this.config.template)[0], this.tip }, e.setContent = function() { var e = this.getTipElement();
                this.setElementContent(yn(e.querySelectorAll(Ln)), this.getTitle()), yn(e).removeClass(xn + " " + Pn) }, e.setElementContent = function(e, t) { var n = this.config.html; "object" == typeof t && (t.nodeType || t.jquery) ? n ? yn(t).parent().is(e) || e.empty().append(t) : e.text(yn(t).text()) : e[n ? "html" : "text"](t) }, e.getTitle = function() { var e = this.element.getAttribute("data-original-title"); return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e }, e._getAttachment = function(e) { return An[e.toUpperCase()] }, e._setListeners = function() { var i = this;
                this.config.trigger.split(" ").forEach(function(e) { if ("click" === e) yn(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) { return i.toggle(e) });
                    else if (e !== Wn) { var t = e === Hn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = e === Hn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        yn(i.element).on(t, i.config.selector, function(e) { return i._enter(e) }).on(n, i.config.selector, function(e) { return i._leave(e) }) } yn(i.element).closest(".modal").on("hide.bs.modal", function() { return i.hide() }) }), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, e._fixTitle = function() { var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, e._enter = function(e, t) { var n = this.constructor.DATA_KEY;
                (t = t || yn(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Mn : Hn] = !0), yn(t.getTipElement()).hasClass(Pn) || t._hoverState === On ? t._hoverState = On : (clearTimeout(t._timeout), t._hoverState = On, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() { t._hoverState === On && t.show() }, t.config.delay.show) : t.show()) }, e._leave = function(e, t) { var n = this.constructor.DATA_KEY;
                (t = t || yn(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Mn : Hn] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Nn, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() { t._hoverState === Nn && t.hide() }, t.config.delay.hide) : t.hide()) }, e._isWithActiveTrigger = function() { for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0; return !1 }, e._getConfig = function(e) { return "number" == typeof(e = l({}, this.constructor.Default, yn(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = { show: e.delay, hide: e.delay }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), we.typeCheckConfig(En, e, this.constructor.DefaultType), e }, e._getDelegateConfig = function() { var e = {}; if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]); return e }, e._cleanTipClass = function() { var e = yn(this.getTipElement()),
                    t = e.attr("class").match(Sn);
                null !== t && t.length && e.removeClass(t.join("")) }, e._handlePopperPlacementChange = function(e) { var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement)) }, e._fixTransition = function() { var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (yn(e).removeClass(xn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t) }, i._jQueryInterface = function(n) { return this.each(function() { var e = yn(this).data(bn),
                        t = "object" == typeof n && n; if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), yn(this).data(bn, e)), "string" == typeof n)) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]() } }) }, s(i, null, [{ key: "VERSION", get: function() { return "4.1.3" } }, { key: "Default", get: function() { return In } }, { key: "NAME", get: function() { return En } }, { key: "DATA_KEY", get: function() { return bn } }, { key: "Event", get: function() { return kn } }, { key: "EVENT_KEY", get: function() { return wn } }, { key: "DefaultType", get: function() { return Dn } }]), i }(), yn.fn[En] = Rn._jQueryInterface, yn.fn[En].Constructor = Rn, yn.fn[En].noConflict = function() { return yn.fn[En] = Cn, Rn._jQueryInterface }, Rn),
        Qi = (Bn = "popover", Kn = "." + (qn = "bs.popover"), Qn = (Un = t).fn[Bn], Yn = "bs-popover", Vn = new RegExp("(^|\\s)" + Yn + "\\S+", "g"), zn = l({}, Ki.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), Gn = l({}, Ki.DefaultType, { content: "(string|element|function)" }), Jn = "fade", Xn = ".popover-header", $n = ".popover-body", ei = { HIDE: "hide" + Kn, HIDDEN: "hidden" + Kn, SHOW: (Zn = "show") + Kn, SHOWN: "shown" + Kn, INSERTED: "inserted" + Kn, CLICK: "click" + Kn, FOCUSIN: "focusin" + Kn, FOCUSOUT: "focusout" + Kn, MOUSEENTER: "mouseenter" + Kn, MOUSELEAVE: "mouseleave" + Kn }, ti = function(e) { var t, n;

            function i() { return e.apply(this, arguments) || this } n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n; var r = i.prototype; return r.isWithContent = function() { return this.getTitle() || this._getContent() }, r.addAttachmentClass = function(e) { Un(this.getTipElement()).addClass(Yn + "-" + e) }, r.getTipElement = function() { return this.tip = this.tip || Un(this.config.template)[0], this.tip }, r.setContent = function() { var e = Un(this.getTipElement());
                this.setElementContent(e.find(Xn), this.getTitle()); var t = this._getContent(); "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find($n), t), e.removeClass(Jn + " " + Zn) }, r._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, r._cleanTipClass = function() { var e = Un(this.getTipElement()),
                    t = e.attr("class").match(Vn);
                null !== t && 0 < t.length && e.removeClass(t.join("")) }, i._jQueryInterface = function(n) { return this.each(function() { var e = Un(this).data(qn),
                        t = "object" == typeof n ? n : null; if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this, t), Un(this).data(qn, e)), "string" == typeof n)) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]() } }) }, s(i, null, [{ key: "VERSION", get: function() { return "4.1.3" } }, { key: "Default", get: function() { return zn } }, { key: "NAME", get: function() { return Bn } }, { key: "DATA_KEY", get: function() { return qn } }, { key: "Event", get: function() { return ei } }, { key: "EVENT_KEY", get: function() { return Kn } }, { key: "DefaultType", get: function() { return Gn } }]), i }(Ki), Un.fn[Bn] = ti._jQueryInterface, Un.fn[Bn].Constructor = ti, Un.fn[Bn].noConflict = function() { return Un.fn[Bn] = Qn, ti._jQueryInterface }, ti),
        Yi = (ii = "scrollspy", oi = "." + (ri = "bs.scrollspy"), si = (ni = t).fn[ii], ai = { offset: 10, method: "auto", target: "" }, li = { offset: "number", method: "string", target: "(string|element)" }, ci = { ACTIVATE: "activate" + oi, SCROLL: "scroll" + oi, LOAD_DATA_API: "load" + oi + ".data-api" }, ui = "dropdown-item", fi = "active", hi = '[data-spy="scroll"]', di = ".active", pi = ".nav, .list-group", mi = ".nav-link", gi = ".nav-item", _i = ".list-group-item", vi = ".dropdown", yi = ".dropdown-item", Ei = ".dropdown-toggle", bi = "offset", wi = "position", Ci = function() {
            function n(e, t) { var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + mi + "," + this._config.target + " " + _i + "," + this._config.target + " " + yi, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, ni(this._scrollElement).on(ci.SCROLL, function(e) { return n._process(e) }), this.refresh(), this._process() } var e = n.prototype; return e.refresh = function() { var t = this,
                    e = this._scrollElement === this._scrollElement.window ? bi : wi,
                    r = "auto" === this._config.method ? e : this._config.method,
                    o = r === wi ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) { var t, n = we.getSelectorFromElement(e); if (n && (t = document.querySelector(n)), t) { var i = t.getBoundingClientRect(); if (i.width || i.height) return [ni(t)[r]().top + o, n] } return null }).filter(function(e) { return e }).sort(function(e, t) { return e[0] - t[0] }).forEach(function(e) { t._offsets.push(e[0]), t._targets.push(e[1]) }) }, e.dispose = function() { ni.removeData(this._element, ri), ni(this._scrollElement).off(oi), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, e._getConfig = function(e) { if ("string" != typeof(e = l({}, ai, "object" == typeof e && e ? e : {})).target) { var t = ni(e.target).attr("id");
                    t || (t = we.getUID(ii), ni(e.target).attr("id", t)), e.target = "#" + t } return we.typeCheckConfig(ii, e, li), e }, e._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, e._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, e._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, e._process = function() { var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight(); if (this._scrollHeight !== t && this.refresh(), n <= e) { var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var r = this._offsets.length; r--;) { this._activeTarget !== this._targets[r] && e >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r]) } } }, e._activate = function(t) { this._activeTarget = t, this._clear(); var e = this._selector.split(",");
                e = e.map(function(e) { return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]' }); var n = ni([].slice.call(document.querySelectorAll(e.join(","))));
                n.hasClass(ui) ? (n.closest(vi).find(Ei).addClass(fi), n.addClass(fi)) : (n.addClass(fi), n.parents(pi).prev(mi + ", " + _i).addClass(fi), n.parents(pi).prev(gi).children(mi).addClass(fi)), ni(this._scrollElement).trigger(ci.ACTIVATE, { relatedTarget: t }) }, e._clear = function() { var e = [].slice.call(document.querySelectorAll(this._selector));
                ni(e).filter(di).removeClass(fi) }, n._jQueryInterface = function(t) { return this.each(function() { var e = ni(this).data(ri); if (e || (e = new n(this, "object" == typeof t && t), ni(this).data(ri, e)), "string" == typeof t) { if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]() } }) }, s(n, null, [{ key: "VERSION", get: function() { return "4.1.3" } }, { key: "Default", get: function() { return ai } }]), n }(), ni(window).on(ci.LOAD_DATA_API, function() { for (var e = [].slice.call(document.querySelectorAll(hi)), t = e.length; t--;) { var n = ni(e[t]);
                Ci._jQueryInterface.call(n, n.data()) } }), ni.fn[ii] = Ci._jQueryInterface, ni.fn[ii].Constructor = Ci, ni.fn[ii].noConflict = function() { return ni.fn[ii] = si, Ci._jQueryInterface }, Ci),
        Vi = (Di = "." + (Si = "bs.tab"), Ai = (Ti = t).fn.tab, Ii = { HIDE: "hide" + Di, HIDDEN: "hidden" + Di, SHOW: "show" + Di, SHOWN: "shown" + Di, CLICK_DATA_API: "click" + Di + ".data-api" }, Oi = "dropdown-menu", Ni = "active", ki = "disabled", xi = "fade", Pi = "show", Li = ".dropdown", ji = ".nav, .list-group", Hi = ".active", Mi = "> li > .active", Fi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Wi = ".dropdown-toggle", Ri = "> .dropdown-menu .active", Ui = function() {
            function i(e) { this._element = e } var e = i.prototype; return e.show = function() { var n = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && Ti(this._element).hasClass(Ni) || Ti(this._element).hasClass(ki))) { var e, i, t = Ti(this._element).closest(ji)[0],
                        r = we.getSelectorFromElement(this._element); if (t) { var o = "UL" === t.nodeName ? Mi : Hi;
                        i = (i = Ti.makeArray(Ti(t).find(o)))[i.length - 1] } var s = Ti.Event(Ii.HIDE, { relatedTarget: this._element }),
                        a = Ti.Event(Ii.SHOW, { relatedTarget: i }); if (i && Ti(i).trigger(s), Ti(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) { r && (e = document.querySelector(r)), this._activate(this._element, t); var l = function() { var e = Ti.Event(Ii.HIDDEN, { relatedTarget: n._element }),
                                t = Ti.Event(Ii.SHOWN, { relatedTarget: i });
                            Ti(i).trigger(e), Ti(n._element).trigger(t) };
                        e ? this._activate(e, e.parentNode, l) : l() } } }, e.dispose = function() { Ti.removeData(this._element, Si), this._element = null }, e._activate = function(e, t, n) { var i = this,
                    r = ("UL" === t.nodeName ? Ti(t).find(Mi) : Ti(t).children(Hi))[0],
                    o = n && r && Ti(r).hasClass(xi),
                    s = function() { return i._transitionComplete(e, r, n) }; if (r && o) { var a = we.getTransitionDurationFromElement(r);
                    Ti(r).one(we.TRANSITION_END, s).emulateTransitionEnd(a) } else s() }, e._transitionComplete = function(e, t, n) { if (t) { Ti(t).removeClass(Pi + " " + Ni); var i = Ti(t.parentNode).find(Ri)[0];
                    i && Ti(i).removeClass(Ni), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1) } if (Ti(e).addClass(Ni), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), we.reflow(e), Ti(e).addClass(Pi), e.parentNode && Ti(e.parentNode).hasClass(Oi)) { var r = Ti(e).closest(Li)[0]; if (r) { var o = [].slice.call(r.querySelectorAll(Wi));
                        Ti(o).addClass(Ni) } e.setAttribute("aria-expanded", !0) } n && n() }, i._jQueryInterface = function(n) { return this.each(function() { var e = Ti(this),
                        t = e.data(Si); if (t || (t = new i(this), e.data(Si, t)), "string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]() } }) }, s(i, null, [{ key: "VERSION", get: function() { return "4.1.3" } }]), i }(), Ti(document).on(Ii.CLICK_DATA_API, Fi, function(e) { e.preventDefault(), Ui._jQueryInterface.call(Ti(this), "show") }), Ti.fn.tab = Ui._jQueryInterface, Ti.fn.tab.Constructor = Ui, Ti.fn.tab.noConflict = function() { return Ti.fn.tab = Ai, Ui._jQueryInterface }, Ui);! function(e) { if ("undefined" == typeof e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var t = e.fn.jquery.split(" ")[0].split("."); if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(t), e.Util = we, e.Alert = Ce, e.Button = Te, e.Carousel = Se, e.Collapse = De, e.Dropdown = Bi, e.Modal = qi, e.Popover = Qi, e.Scrollspy = Yi, e.Tab = Vi, e.Tooltip = Ki, Object.defineProperty(e, "__esModule", { value: !0 }) });
! function(n) { "function" == typeof define && define.amd ? define(["jquery"], function(e) { return n(e) }) : "object" == typeof module && "object" == typeof module.exports ? exports = n(require("jquery")) : n(jQuery) }(function(n) {
    function e(n) { var e = 7.5625,
            t = 2.75; return n < 1 / t ? e * n * n : n < 2 / t ? e * (n -= 1.5 / t) * n + .75 : n < 2.5 / t ? e * (n -= 2.25 / t) * n + .9375 : e * (n -= 2.625 / t) * n + .984375 } n.easing.jswing = n.easing.swing; var t = Math.pow,
        u = Math.sqrt,
        r = Math.sin,
        i = Math.cos,
        a = Math.PI,
        c = 1.70158,
        o = 1.525 * c,
        s = 2 * a / 3,
        f = 2 * a / 4.5;
    n.extend(n.easing, { def: "easeOutQuad", swing: function(e) { return n.easing[n.easing.def](e) }, easeInQuad: function(n) { return n * n }, easeOutQuad: function(n) { return 1 - (1 - n) * (1 - n) }, easeInOutQuad: function(n) { return n < .5 ? 2 * n * n : 1 - t(-2 * n + 2, 2) / 2 }, easeInCubic: function(n) { return n * n * n }, easeOutCubic: function(n) { return 1 - t(1 - n, 3) }, easeInOutCubic: function(n) { return n < .5 ? 4 * n * n * n : 1 - t(-2 * n + 2, 3) / 2 }, easeInQuart: function(n) { return n * n * n * n }, easeOutQuart: function(n) { return 1 - t(1 - n, 4) }, easeInOutQuart: function(n) { return n < .5 ? 8 * n * n * n * n : 1 - t(-2 * n + 2, 4) / 2 }, easeInQuint: function(n) { return n * n * n * n * n }, easeOutQuint: function(n) { return 1 - t(1 - n, 5) }, easeInOutQuint: function(n) { return n < .5 ? 16 * n * n * n * n * n : 1 - t(-2 * n + 2, 5) / 2 }, easeInSine: function(n) { return 1 - i(n * a / 2) }, easeOutSine: function(n) { return r(n * a / 2) }, easeInOutSine: function(n) { return -(i(a * n) - 1) / 2 }, easeInExpo: function(n) { return 0 === n ? 0 : t(2, 10 * n - 10) }, easeOutExpo: function(n) { return 1 === n ? 1 : 1 - t(2, -10 * n) }, easeInOutExpo: function(n) { return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? t(2, 20 * n - 10) / 2 : (2 - t(2, -20 * n + 10)) / 2 }, easeInCirc: function(n) { return 1 - u(1 - t(n, 2)) }, easeOutCirc: function(n) { return u(1 - t(n - 1, 2)) }, easeInOutCirc: function(n) { return n < .5 ? (1 - u(1 - t(2 * n, 2))) / 2 : (u(1 - t(-2 * n + 2, 2)) + 1) / 2 }, easeInElastic: function(n) { return 0 === n ? 0 : 1 === n ? 1 : -t(2, 10 * n - 10) * r((10 * n - 10.75) * s) }, easeOutElastic: function(n) { return 0 === n ? 0 : 1 === n ? 1 : t(2, -10 * n) * r((10 * n - .75) * s) + 1 }, easeInOutElastic: function(n) { return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? -(t(2, 20 * n - 10) * r((20 * n - 11.125) * f)) / 2 : t(2, -20 * n + 10) * r((20 * n - 11.125) * f) / 2 + 1 }, easeInBack: function(n) { return (c + 1) * n * n * n - c * n * n }, easeOutBack: function(n) { return 1 + (c + 1) * t(n - 1, 3) + c * t(n - 1, 2) }, easeInOutBack: function(n) { return n < .5 ? t(2 * n, 2) * (7.189819 * n - o) / 2 : (t(2 * n - 2, 2) * ((o + 1) * (2 * n - 2) + o) + 2) / 2 }, easeInBounce: function(n) { return 1 - e(1 - n) }, easeOutBounce: e, easeInOutBounce: function(n) { return n < .5 ? (1 - e(1 - 2 * n)) / 2 : (1 + e(2 * n - 1)) / 2 } }) });
! function(e) { var t = function(t, n) { var r = this;
        r.n = "breakpoints", r.settings = {}, r.currentBp = null, r.getBreakpoint = function() { var e, t = a(),
                n = r.settings.breakpoints; return n.forEach(function(n) { t >= n.width && (e = n.name) }), e || (e = n[n.length - 1].name), e }, r.getBreakpointWidth = function(e) { var t; return r.settings.breakpoints.forEach(function(n) { e == n.name && (t = n.width) }), t }, r.compareCheck = function(e, t, n) { var i = a(),
                o = r.settings.breakpoints,
                s = r.getBreakpointWidth(t),
                u = !1; switch (e) {
                case "lessThan":
                    u = i < s; break;
                case "lessEqualTo":
                    u = i <= s; break;
                case "greaterThan":
                case "greaterEqualTo":
                    u = i > s; break;
                case "inside":
                    var g = o.findIndex(function(e) { return e.name === t }); if (g === o.length - 1) u = i > s;
                    else { var d = r.getBreakpointWidth(o[g + 1].name);
                        u = i >= s && i < d } } u && n() }, r.destroy = function() { e(window).unbind(r.n) }; var i = function() { var t = a(),
                    n = r.settings.breakpoints,
                    i = r.currentBp;
                n.forEach(function(n) { i === n.name ? n.inside || (e(window).trigger("inside-" + n.name), n.inside = !0) : n.inside = !1, t < n.width && (n.less || (e(window).trigger("lessThan-" + n.name), n.less = !0, n.greater = !1, n.greaterEqual = !1)), t >= n.width && (n.greaterEqual || (e(window).trigger("greaterEqualTo-" + n.name), n.greaterEqual = !0, n.less = !1), t > n.width && (n.greater || (e(window).trigger("greaterThan-" + n.name), n.greater = !0, n.less = !1))) }) },
            a = function() { var t = e(window); return r.outerWidth ? t.outerWidth() : t.width() },
            o = e.extend({}, e.fn.breakpoints.defaults, n);
        r.settings = { breakpoints: o.breakpoints, buffer: o.buffer, triggerOnInit: o.triggerOnInit, outerWidth: o.outerWidth }, t.data(r.n, this), r.currentBp = r.getBreakpoint(); var s = null;
        e.isFunction(e(window).on) && e(window).on("resize." + r.n, function(t) { s && clearTimeout(s), s = setTimeout(function(t) { var n;
                (n = r.getBreakpoint()) !== r.currentBp && (e(window).trigger({ type: "breakpoint-change", from: r.currentBp, to: n }), r.currentBp = n), i() }, r.settings.buffer) }), r.settings.triggerOnInit && setTimeout(function() { e(window).trigger({ type: "breakpoint-change", from: r.currentBp, to: r.currentBp, initialInit: !0 }) }, r.settings.buffer), setTimeout(function() { i() }, 0) };
    e.fn.breakpoints = function(e, n, r) { if (this.data("breakpoints")) { var i = this.data("breakpoints"); return "getBreakpoint" === e ? i.getBreakpoint() : "getBreakpointWidth" === e ? i.getBreakpointWidth(n) : ["lessThan", "lessEqualTo", "greaterThan", "greaterEqualTo", "inside"].includes(e) ? i.compareCheck(e, n, r) : void("destroy" === e && i.destroy()) } new t(this, e) }, e.fn.breakpoints.defaults = { breakpoints: [{ name: "xs", width: 0 }, { name: "sm", width: 768 }, { name: "md", width: 992 }, { name: "lg", width: 1200 }], buffer: 300, triggerOnInit: !1, outerWidth: !1 } }(jQuery);
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
! function(t, e) { "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery) }(window, function(t, e) { "use strict";

    function i(i, s, a) {
        function u(t, e, o) { var n, s = "$()." + i + '("' + e + '")'; return t.each(function(t, u) { var h = a.data(u, i); if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s); var d = h[e]; if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method"); var l = d.apply(h, o);
                n = void 0 === n ? l : n }), void 0 !== n ? n : t }

        function h(t, e) { t.each(function(t, o) { var n = a.data(o, i);
                n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n)) }) } a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) { a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t)) }), a.fn[i] = function(t) { if ("string" == typeof t) { var e = n.call(arguments, 1); return u(this, t, e) } return h(this, t), this }, o(a)) }

    function o(t) {!t || t && t.bridget || (t.bridget = i) } var n = Array.prototype.slice,
        s = t.console,
        r = "undefined" == typeof s ? function() {} : function(t) { s.error(t) }; return o(e || t.jQuery), i }),
function(t, e) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e() }("undefined" != typeof window ? window : this, function() {
    function t() {} var e = t.prototype; return e.on = function(t, e) { if (t && e) { var i = this._events = this._events || {},
                o = i[t] = i[t] || []; return o.indexOf(e) == -1 && o.push(e), this } }, e.once = function(t, e) { if (t && e) { this.on(t, e); var i = this._onceEvents = this._onceEvents || {},
                o = i[t] = i[t] || {}; return o[e] = !0, this } }, e.off = function(t, e) { var i = this._events && this._events[t]; if (i && i.length) { var o = i.indexOf(e); return o != -1 && i.splice(o, 1), this } }, e.emitEvent = function(t, e) { var i = this._events && this._events[t]; if (i && i.length) { i = i.slice(0), e = e || []; for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) { var s = i[n],
                    r = o && o[s];
                r && (this.off(t, s), delete o[s]), s.apply(this, e) } return this } }, e.allOff = function() { delete this._events, delete this._onceEvents }, t }),
function(t, e) { "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e() }(window, function() { "use strict";

    function t(t) { var e = parseFloat(t),
            i = t.indexOf("%") == -1 && !isNaN(e); return i && e }

    function e() {}

    function i() { for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < h; e++) { var i = u[e];
            t[i] = 0 } return t }

    function o(t) { var e = getComputedStyle(t); return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e }

    function n() { if (!d) { d = !0; var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box"; var i = document.body || document.documentElement;
            i.appendChild(e); var n = o(e);
            r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e) } }

    function s(e) { if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) { var s = o(e); if ("none" == s.display) return i(); var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight; for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) { var f = u[l],
                    c = s[f],
                    m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m } var p = a.paddingLeft + a.paddingRight,
                y = a.paddingTop + a.paddingBottom,
                g = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                z = a.borderTopWidth + a.borderBottomWidth,
                I = d && r,
                x = t(s.width);
            x !== !1 && (a.width = x + (I ? 0 : p + _)); var S = t(s.height); return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a } } var r, a = "undefined" == typeof console ? e : function(t) { console.error(t) },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length,
        d = !1; return s }),
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e() }(window, function() { "use strict"; var t = function() { var t = window.Element.prototype; if (t.matches) return "matches"; if (t.matchesSelector) return "matchesSelector"; for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) { var o = e[i],
                n = o + "MatchesSelector"; if (t[n]) return n } }(); return function(e, i) { return e[t](i) } }),
function(t, e) { "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector) }(window, function(t, e) { var i = {};
    i.extend = function(t, e) { for (var i in e) t[i] = e[i]; return t }, i.modulo = function(t, e) { return (t % e + e) % e }; var o = Array.prototype.slice;
    i.makeArray = function(t) { if (Array.isArray(t)) return t; if (null === t || void 0 === t) return []; var e = "object" == typeof t && "number" == typeof t.length; return e ? o.call(t) : [t] }, i.removeFrom = function(t, e) { var i = t.indexOf(e);
        i != -1 && t.splice(i, 1) }, i.getParent = function(t, i) { for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, e(t, i)) return t }, i.getQueryElement = function(t) { return "string" == typeof t ? document.querySelector(t) : t }, i.handleEvent = function(t) { var e = "on" + t.type;
        this[e] && this[e](t) }, i.filterFindElements = function(t, o) { t = i.makeArray(t); var n = []; return t.forEach(function(t) { if (t instanceof HTMLElement) { if (!o) return void n.push(t);
                e(t, o) && n.push(t); for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s]) } }), n }, i.debounceMethod = function(t, e, i) { i = i || 100; var o = t.prototype[e],
            n = e + "Timeout";
        t.prototype[e] = function() { var t = this[n];
            clearTimeout(t); var e = arguments,
                s = this;
            this[n] = setTimeout(function() { o.apply(s, e), delete s[n] }, i) } }, i.docReady = function(t) { var e = document.readyState; "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t) }, i.toDashed = function(t) { return t.replace(/(.)([A-Z])/g, function(t, e, i) { return e + "-" + i }).toLowerCase() }; var n = t.console; return i.htmlInit = function(e, o) { i.docReady(function() { var s = i.toDashed(o),
                r = "data-" + s,
                a = document.querySelectorAll("[" + r + "]"),
                u = document.querySelectorAll(".js-" + s),
                h = i.makeArray(a).concat(i.makeArray(u)),
                d = r + "-options",
                l = t.jQuery;
            h.forEach(function(t) { var i, s = t.getAttribute(r) || t.getAttribute(d); try { i = s && JSON.parse(s) } catch (a) { return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a)) } var u = new e(t, i);
                l && l.data(t, o, u) }) }) }, i }),
function(t, e) { "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize)) }(window, function(t, e) { "use strict";

    function i(t) { for (var e in t) return !1; return e = null, !0 }

    function o(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) }

    function n(t) { return t.replace(/([A-Z])/g, function(t) { return "-" + t.toLowerCase() }) } var s = document.documentElement.style,
        r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" } [r],
        h = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
        d = o.prototype = Object.create(t.prototype);
    d.constructor = o, d._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, d.handleEvent = function(t) { var e = "on" + t.type;
        this[e] && this[e](t) }, d.getSize = function() { this.size = e(this.element) }, d.css = function(t) { var e = this.element.style; for (var i in t) { var o = h[i] || i;
            e[o] = t[i] } }, d.getPosition = function() { var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = t[e ? "left" : "right"],
            n = t[i ? "top" : "bottom"],
            s = parseFloat(o),
            r = parseFloat(n),
            a = this.layout.size;
        o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r }, d.layoutPosition = function() { var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"),
            n = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[n];
        e[s] = this.getXValue(a), e[r] = ""; var u = o ? "paddingTop" : "paddingBottom",
            h = o ? "top" : "bottom",
            d = o ? "bottom" : "top",
            l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]) }, d.getXValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px" }, d.getYValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px" }, d._transitionTo = function(t, e) { this.getPosition(); var i = this.position.x,
            o = this.position.y,
            n = t == this.position.x && e == this.position.y; if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition(); var s = t - i,
            r = e - o,
            a = {};
        a.transform = this.getTranslate(s, r), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, d.getTranslate = function(t, e) { var i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"); return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)" }, d.goTo = function(t, e) { this.setPosition(t, e), this.layoutPosition() }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) { this.position.x = parseFloat(t), this.position.y = parseFloat(e) }, d._nonTransition = function(t) { this.css(t.to), t.isCleaning && this._removeStyles(t.to); for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, d.transition = function(t) { if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t); var e = this._transn; for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i]; for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0); if (t.from) { this.css(t.from); var o = this.element.offsetHeight;
            o = null } this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0 }; var l = "opacity," + n(a);
    d.enableTransition = function() { if (!this.isTransitioning) { var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(u, this, !1) } }, d.onwebkitTransitionEnd = function(t) { this.ontransitionend(t) }, d.onotransitionend = function(t) { this.ontransitionend(t) }; var f = { "-webkit-transform": "transform" };
    d.ontransitionend = function(t) { if (t.target === this.element) { var e = this._transn,
                o = f[t.propertyName] || t.propertyName; if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) { var n = e.onEnd[o];
                n.call(this), delete e.onEnd[o] } this.emitEvent("transitionEnd", [this]) } }, d.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1 }, d._removeStyles = function(t) { var e = {}; for (var i in t) e[i] = "";
        this.css(e) }; var c = { transitionProperty: "", transitionDuration: "", transitionDelay: "" }; return d.removeTransitionStyles = function() { this.css(c) }, d.stagger = function(t) { t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms" }, d.removeElem = function() { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, d.remove = function() { return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() { this.removeElem() }), void this.hide()) : void this.removeElem() }, d.reveal = function() { delete this.isHidden, this.css({ display: "" }); var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e }) }, d.onRevealTransitionEnd = function() { this.isHidden || this.emitEvent("reveal") }, d.getHideRevealTransitionEndProperty = function(t) { var e = this.layout.options[t]; if (e.opacity) return "opacity"; for (var i in e) return i }, d.hide = function() { this.isHidden = !0, this.css({ display: "" }); var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e }) }, d.onHideTransitionEnd = function() { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, d.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, o }),
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) { return e(t, i, o, n, s) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item) }(window, function(t, e, i, o, n) { "use strict";

    function s(t, e) { var i = o.getQueryElement(t); if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e); var n = ++l;
        this.element.outlayerGUID = n, f[n] = this, this._create(); var s = this._getOption("initLayout");
        s && this.layout() }

    function r(t) {
        function e() { t.apply(this, arguments) } return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e }

    function a(t) { if ("number" == typeof t) return t; var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            o = e && e[2]; if (!i.length) return 0;
        i = parseFloat(i); var n = m[o] || 1; return i * n } var u = t.console,
        h = t.jQuery,
        d = function() {},
        l = 0,
        f = {};
    s.namespace = "outlayer", s.Item = n, s.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }; var c = s.prototype;
    o.extend(c, e.prototype), c.option = function(t) { o.extend(this.options, t) }, c._getOption = function(t) { var e = this.constructor.compatOptions[t]; return e && void 0 !== this.options[e] ? this.options[e] : this.options[t] }, s.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, c._create = function() { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle); var t = this._getOption("resize");
        t && this.bindResize() }, c.reloadItems = function() { this.items = this._itemize(this.element.children) }, c._itemize = function(t) { for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) { var s = e[n],
                r = new i(s, this);
            o.push(r) } return o }, c._filterFindItemElements = function(t) { return o.filterFindElements(t, this.options.itemSelector) }, c.getItemElements = function() { return this.items.map(function(t) { return t.element }) }, c.layout = function() { this._resetLayout(), this._manageStamps(); var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0 }, c._init = c.layout, c._resetLayout = function() { this.getSize() }, c.getSize = function() { this.size = i(this.element) }, c._getMeasurement = function(t, e) { var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0 }, c.layoutItems = function(t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, c._getItemsForLayout = function(t) { return t.filter(function(t) { return !t.isIgnored }) }, c._layoutItems = function(t, e) { if (this._emitCompleteOnItems("layout", t), t && t.length) { var i = [];
            t.forEach(function(t) { var o = this._getItemLayoutPosition(t);
                o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o) }, this), this._processLayoutQueue(i) } }, c._getItemLayoutPosition = function() { return { x: 0, y: 0 } }, c._processLayoutQueue = function(t) { this.updateStagger(), t.forEach(function(t, e) { this._positionItem(t.item, t.x, t.y, t.isInstant, e) }, this) }, c.updateStagger = function() { var t = this.options.stagger; return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger) }, c._positionItem = function(t, e, i, o, n) { o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i)) }, c._postLayout = function() { this.resizeContainer() }, c.resizeContainer = function() { var t = this._getOption("resizeContainer"); if (t) { var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1)) } }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) { if (void 0 !== t) { var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px" } }, c._emitCompleteOnItems = function(t, e) {
        function i() { n.dispatchEvent(t + "Complete", null, [e]) }

        function o() { r++, r == s && i() } var n = this,
            s = e.length; if (!e || !s) return void i(); var r = 0;
        e.forEach(function(e) { e.once(t, o) }) }, c.dispatchEvent = function(t, e, i) { var o = e ? [e].concat(i) : i; if (this.emitEvent(t, o), h)
            if (this.$element = this.$element || h(this.element), e) { var n = h.Event(e);
                n.type = t, this.$element.trigger(n, i) } else this.$element.trigger(t, i) }, c.ignore = function(t) { var e = this.getItem(t);
        e && (e.isIgnored = !0) }, c.unignore = function(t) { var e = this.getItem(t);
        e && delete e.isIgnored }, c.stamp = function(t) { t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this)) }, c.unstamp = function(t) { t = this._find(t), t && t.forEach(function(t) { o.removeFrom(this.stamps, t), this.unignore(t) }, this) }, c._find = function(t) { if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t) }, c._manageStamps = function() { this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this)) }, c._getBoundingRect = function() { var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) } }, c._manageStamp = d, c._getElementOffset = function(t) { var e = t.getBoundingClientRect(),
            o = this._boundingRect,
            n = i(t),
            s = { left: e.left - o.left - n.marginLeft, top: e.top - o.top - n.marginTop, right: o.right - e.right - n.marginRight, bottom: o.bottom - e.bottom - n.marginBottom }; return s }, c.handleEvent = o.handleEvent, c.bindResize = function() { t.addEventListener("resize", this), this.isResizeBound = !0 }, c.unbindResize = function() { t.removeEventListener("resize", this), this.isResizeBound = !1 }, c.onresize = function() { this.resize() }, o.debounceMethod(s, "onresize", 100), c.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, c.needsResizeLayout = function() { var t = i(this.element),
            e = this.size && t; return e && t.innerWidth !== this.size.innerWidth }, c.addItems = function(t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, c.appended = function(t) { var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e)) }, c.prepended = function(t) { var e = this._itemize(t); if (e.length) { var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i) } }, c.reveal = function(t) { if (this._emitCompleteOnItems("reveal", t), t && t.length) { var e = this.updateStagger();
            t.forEach(function(t, i) { t.stagger(i * e), t.reveal() }) } }, c.hide = function(t) { if (this._emitCompleteOnItems("hide", t), t && t.length) { var e = this.updateStagger();
            t.forEach(function(t, i) { t.stagger(i * e), t.hide() }) } }, c.revealItemElements = function(t) { var e = this.getItems(t);
        this.reveal(e) }, c.hideItemElements = function(t) { var e = this.getItems(t);
        this.hide(e) }, c.getItem = function(t) { for (var e = 0; e < this.items.length; e++) { var i = this.items[e]; if (i.element == t) return i } }, c.getItems = function(t) { t = o.makeArray(t); var e = []; return t.forEach(function(t) { var i = this.getItem(t);
            i && e.push(i) }, this), e }, c.remove = function(t) { var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) { t.remove(), o.removeFrom(this.items, t) }, this) }, c.destroy = function() { var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) { t.destroy() }), this.unbindResize(); var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace) }, s.data = function(t) { t = o.getQueryElement(t); var e = t && t.outlayerGUID; return e && f[e] }, s.create = function(t, e) { var i = r(s); return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i }; var m = { ms: 1, s: 1e3 }; return s.Item = n, s }),
function(t, e) { "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer)) }(window, function(t) { "use strict";

    function e() { t.Item.apply(this, arguments) } var i = e.prototype = Object.create(t.Item.prototype),
        o = i._create;
    i._create = function() { this.id = this.layout.itemGUID++, o.call(this), this.sortData = {} }, i.updateSortData = function() { if (!this.isIgnored) { this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random(); var t = this.layout.options.getSortData,
                e = this.layout._sorters; for (var i in t) { var o = e[i];
                this.sortData[i] = o(this.element, this) } } }; var n = i.destroy; return i.destroy = function() { n.apply(this, arguments), this.css({ display: "" }) }, e }),
function(t, e) { "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)) }(window, function(t, e) { "use strict";

    function i(t) { this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size) } var o = i.prototype,
        n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"]; return n.forEach(function(t) { o[t] = function() { return e.prototype[t].apply(this.isotope, arguments) } }), o.needsVerticalResizeLayout = function() { var e = t(this.isotope.element),
            i = this.isotope.size && e; return i && e.innerHeight != this.isotope.size.innerHeight }, o._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments) }, o.getColumnWidth = function() { this.getSegmentSize("column", "Width") }, o.getRowHeight = function() { this.getSegmentSize("row", "Height") }, o.getSegmentSize = function(t, e) { var i = t + e,
            o = "outer" + e; if (this._getMeasurement(i, o), !this[i]) { var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e] } }, o.getFirstItemSize = function() { var e = this.isotope.filteredItems[0]; return e && e.element && t(e.element) }, o.layout = function() { this.isotope.layout.apply(this.isotope, arguments) }, o.getSize = function() { this.isotope.getSize(), this.size = this.isotope.size }, i.modes = {}, i.create = function(t, e) {
        function n() { i.apply(this, arguments) } return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n }, i }),
function(t, e) { "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize) }(window, function(t, e) { var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth"; var o = i.prototype; return o._resetLayout = function() { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = []; for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0 }, o.measureColumns = function() { if (this.getContainerWidth(), !this.columnWidth) { var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth } var o = this.columnWidth += this.gutter,
            n = this.containerWidth + this.gutter,
            s = n / o,
            r = o - n % o,
            a = r && r < 1 ? "round" : "floor";
        s = Math[a](s), this.cols = Math.max(s, 1) }, o.getContainerWidth = function() { var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            o = e(i);
        this.containerWidth = o && o.innerWidth }, o._getItemLayoutPosition = function(t) { t.getSize(); var e = t.size.outerWidth % this.columnWidth,
            i = e && e < 1 ? "round" : "ceil",
            o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols); for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = { x: this.columnWidth * s.col, y: s.y }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a; return r }, o._getTopColPosition = function(t) { var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e); return { col: e.indexOf(i), y: i } }, o._getTopColGroup = function(t) { if (t < 2) return this.colYs; for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t); return e }, o._getColGroupY = function(t, e) { if (e < 2) return this.colYs[t]; var i = this.colYs.slice(t, t + e); return Math.max.apply(Math, i) }, o._getHorizontalColPosition = function(t, e) { var i = this.horizontalColIndex % this.cols,
            o = t > 1 && i + t > this.cols;
        i = o ? 0 : i; var n = e.size.outerWidth && e.size.outerHeight; return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, { col: i, y: this._getColGroupY(i, t) } }, o._manageStamp = function(t) { var i = e(t),
            o = this._getElementOffset(t),
            n = this._getOption("originLeft"),
            s = n ? o.left : o.right,
            r = s + i.outerWidth,
            a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a); var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u); for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l]) }, o._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t }, o._getContainerFitWidth = function() { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++; return (this.cols - t) * this.columnWidth - this.gutter }, o.needsResizeLayout = function() { var t = this.containerWidth; return this.getContainerWidth(), t != this.containerWidth }, i }),
function(t, e) { "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry) }(window, function(t, e) { "use strict"; var i = t.create("masonry"),
        o = i.prototype,
        n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 }; for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]); var r = o.measureColumns;
    o.measureColumns = function() { this.items = this.isotope.filteredItems, r.call(this) }; var a = o._getOption; return o._getOption = function(t) { return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments) }, i }),
function(t, e) { "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) { "use strict"; var e = t.create("fitRows"),
        i = e.prototype; return i._resetLayout = function() { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, i._getItemLayoutPosition = function(t) { t.getSize(); var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY); var o = { x: this.x, y: this.y }; return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o }, i._getContainerSize = function() { return { height: this.maxY } }, e }),
function(t, e) { "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) { "use strict"; var e = t.create("vertical", { horizontalAlignment: 0 }),
        i = e.prototype; return i._resetLayout = function() { this.y = 0 }, i._getItemLayoutPosition = function(t) { t.getSize(); var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y; return this.y += t.size.outerHeight, { x: e, y: i } }, i._getContainerSize = function() { return { height: this.y } }, e }),
function(t, e) { "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) { return e(t, i, o, n, s, r, a) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode) }(window, function(t, e, i, o, n, s, r) {
    function a(t, e) { return function(i, o) { for (var n = 0; n < t.length; n++) { var s = t[n],
                    r = i.sortData[s],
                    a = o.sortData[s]; if (r > a || r < a) { var u = void 0 !== e[s] ? e[s] : e,
                        h = u ? 1 : -1; return (r > a ? 1 : -1) * h } } return 0 } } var u = t.jQuery,
        h = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return t.replace(/^\s+|\s+$/g, "") },
        d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
    d.Item = s, d.LayoutMode = r; var l = d.prototype;
    l._create = function() { this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"]; for (var t in r.modes) this._initLayoutMode(t) }, l.reloadItems = function() { this.itemGUID = 0, e.prototype.reloadItems.call(this) }, l._itemize = function() { for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) { var o = t[i];
            o.id = this.itemGUID++ } return this._updateItemsSortData(t), t }, l._initLayoutMode = function(t) { var e = r.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this) }, l.layout = function() { return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout() }, l._layout = function() { var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0 }, l.arrange = function(t) { this.option(t), this._getIsInstant(); var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout() }, l._init = l.arrange, l._hideReveal = function(t) { this.reveal(t.needReveal), this.hide(t.needHide) }, l._getIsInstant = function() { var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited; return this._isInstant = e, e }, l._bindArrangeComplete = function() {
        function t() { e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]) } var e, i, o, n = this;
        this.once("layoutComplete", function() { e = !0, t() }), this.once("hideComplete", function() { i = !0, t() }), this.once("revealComplete", function() { o = !0, t() }) }, l._filter = function(t) { var e = this.options.filter;
        e = e || "*"; for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) { var a = t[r]; if (!a.isIgnored) { var u = s(a);
                u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a) } } return { matches: i, needReveal: o, needHide: n } }, l._getFilterTest = function(t) { return u && this.options.isJQueryFiltering ? function(e) { return u(e.element).is(t); } : "function" == typeof t ? function(e) { return t(e.element) } : function(e) { return o(e.element, t) } }, l.updateSortData = function(t) { var e;
        t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e) }, l._getSorters = function() { var t = this.options.getSortData; for (var e in t) { var i = t[e];
            this._sorters[e] = f(i) } }, l._updateItemsSortData = function(t) { for (var e = t && t.length, i = 0; e && i < e; i++) { var o = t[i];
            o.updateSortData() } }; var f = function() {
        function t(t) { if ("string" != typeof t) return t; var i = h(t).split(" "),
                o = i[0],
                n = o.match(/^\[(.+)\]$/),
                s = n && n[1],
                r = e(s, o),
                a = d.sortDataParsers[i[1]]; return t = a ? function(t) { return t && a(r(t)) } : function(t) { return t && r(t) } }

        function e(t, e) { return t ? function(e) { return e.getAttribute(t) } : function(t) { var i = t.querySelector(e); return i && i.textContent } } return t }();
    d.sortDataParsers = { parseInt: function(t) { return parseInt(t, 10) }, parseFloat: function(t) { return parseFloat(t) } }, l._sort = function() { if (this.options.sortBy) { var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory)); var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e) } }, l._getIsSameSortBy = function(t) { for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e]) return !1; return !0 }, l._mode = function() { var t = this.options.layoutMode,
            e = this.modes[t]; if (!e) throw new Error("No layout mode: " + t); return e.options = this.options[t], e }, l._resetLayout = function() { e.prototype._resetLayout.call(this), this._mode()._resetLayout() }, l._getItemLayoutPosition = function(t) { return this._mode()._getItemLayoutPosition(t) }, l._manageStamp = function(t) { this._mode()._manageStamp(t) }, l._getContainerSize = function() { return this._mode()._getContainerSize() }, l.needsResizeLayout = function() { return this._mode().needsResizeLayout() }, l.appended = function(t) { var e = this.addItems(t); if (e.length) { var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i) } }, l.prepended = function(t) { var e = this._itemize(t); if (e.length) { this._resetLayout(), this._manageStamps(); var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items) } }, l._filterRevealAdded = function(t) { var e = this._filter(t); return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches }, l.insert = function(t) { var e = this.addItems(t); if (e.length) { var i, o, n = e.length; for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element); var s = this._filter(e).matches; for (i = 0; i < n; i++) e[i].isLayoutInstant = !0; for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
            this.reveal(s) } }; var c = l.remove; return l.remove = function(t) { t = n.makeArray(t); var e = this.getItems(t);
        c.call(this, t); for (var i = e && e.length, o = 0; i && o < i; o++) { var s = e[o];
            n.removeFrom(this.filteredItems, s) } }, l.shuffle = function() { for (var t = 0; t < this.items.length; t++) { var e = this.items[t];
            e.sortData.random = Math.random() } this.options.sortBy = "random", this._sort(), this._layout() }, l._noTransition = function(t, e) { var i = this.options.transitionDuration;
        this.options.transitionDuration = 0; var o = t.apply(this, e); return this.options.transitionDuration = i, o }, l.getFilteredItemElements = function() { return this.filteredItems.map(function(t) { return t.element }) }, d });
! function(a, b, c, d) {
    function e(b, c) { this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) { this._handlers[c] = a.proxy(this[c], this) }, this)), a.each(e.Plugins, a.proxy(function(a, b) { this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this) }, this)), a.each(e.Workers, a.proxy(function(b, c) { this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) }) }, this)), this.setup(), this.initialize() } e.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, checkVisibility: !0, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", slideTransition: "", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Type = { Event: "event", State: "state" }, e.Plugins = {}, e.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(a) { a.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, { filter: ["width", "items", "settings"], run: function(a) { var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };!c && this.$stage.children().css(e), a.css = e } }, { filter: ["width", "items", "settings"], run: function(a) { var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = []; for (a.items = { merge: !1, width: b }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f } }, { filter: ["items", "settings"], run: function() { var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = ""; for (g /= 2; g > 0;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage) } }, { filter: ["width", "items", "settings"], run: function() { for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f } }, { filter: ["width", "items", "settings"], run: function() { var a = this.settings.stagePadding,
                b = this._coordinates,
                c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };
            this.$stage.css(c) } }, { filter: ["width", "items", "settings"], run: function(a) { var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children(); if (c && a.items.merge)
                for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            else c && (a.css.width = a.items.width, d.css(a.css)) } }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function(a) { a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, { filter: ["width", "position", "items", "settings"], run: function() { var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = []; for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center") } }], e.prototype.initializeStage = function() { this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(a("<div/>", { class: this.settings.stageOuterClass })), this.$element.append(this.$stage.parent())) }, e.prototype.initializeItems = function() { var b = this.$element.find(".owl-item"); if (b.length) return this._items = b.get().map(function(b) { return a(b) }), this._mergers = this._items.map(function() { return 1 }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass) }, e.prototype.initialize = function() { if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) { var a, b, c;
            a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a) } this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized") }, e.prototype.isVisible = function() { return !this.settings.checkVisibility || this.$element.is(":visible") }, e.prototype.setup = function() { var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) { a <= b && a > d && (d = Number(a)) }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }) }, e.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.prepare = function(b) { var c = this.trigger("prepare", { content: b }); return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data }, e.prototype.update = function() { for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) { return this[a] }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid") }, e.prototype.width = function(a) { switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin } }, e.prototype.refresh = function() { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, e.prototype.onThrottledResize = function() { b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, e.prototype.onResize = function() { return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))))) }, e.prototype.registerEventHandlers = function() { a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this))) }, e.prototype.onDragStart = function(b) { var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }) : (d = this.$stage.position(), d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) { var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag")) }, this))) }, e.prototype.onDragMove = function(a) { var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x)) }, e.prototype.onDragEnd = function(b) { var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged")) }, e.prototype.closest = function(b, c) { var e = -1,
            f = 30,
            g = this.width(),
            h = this.coordinates(); return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) { return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e }, e.prototype.animate = function(b) { var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") }) : c ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: b + "px" }) }, e.prototype.is = function(a) { return this._states.current[a] && this._states.current[a] > 0 }, e.prototype.current = function(a) { if (a === d) return this._current; if (0 === this._items.length) return d; if (a = this.normalize(a), this._current !== a) { var b = this.trigger("change", { property: { name: "position", value: a } });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } }) } return this._current }, e.prototype.invalidate = function(b) { return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) { return b }) }, e.prototype.reset = function(a) {
        (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"])) }, e.prototype.normalize = function(a, b) { var c = this._items.length,
            e = b ? 0 : this._clones.length; return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a }, e.prototype.relative = function(a) { return a -= this._clones.length / 2, this.normalize(a, !0) }, e.prototype.maximum = function(a) { var b, c, d, e = this.settings,
            f = this._coordinates.length; if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) { if (b = this._items.length)
                for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d););
            f = b + 1 } else f = e.center ? this._items.length - 1 : this._items.length - e.items; return a && (f -= this._clones.length / 2), Math.max(f, 0) }, e.prototype.minimum = function(a) { return a ? 0 : this._clones.length / 2 }, e.prototype.items = function(a) { return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]) }, e.prototype.mergers = function(a) { return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]) }, e.prototype.clones = function(b) { var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) { return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2 }; return b === d ? a.map(this._clones, function(a, b) { return f(b) }) : a.map(this._clones, function(a, c) { return a === b ? f(c) : null }) }, e.prototype.speed = function(a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function(b) { var c, e = 1,
            f = b - 1; return b === d ? a.map(this._coordinates, a.proxy(function(a, b) { return this.coordinates(b) }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c)) }, e.prototype.duration = function(a, b, c) { return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function(a, b) { var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update() }, e.prototype.next = function(a) { a = a || !1, this.to(this.relative(this.current()) + 1, a) }, e.prototype.prev = function(a) { a = a || !1, this.to(this.relative(this.current()) - 1, a) }, e.prototype.onTransitionEnd = function(a) { if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated") }, e.prototype.viewport = function() { var d; return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d }, e.prototype.replace = function(b) { this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() { return 1 === this.nodeType }).each(a.proxy(function(a, b) { b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, e.prototype.add = function(b, c) { var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", { content: b, position: c }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", { content: b, position: c }) }, e.prototype.remove = function(a) {
        (a = this.normalize(a, !0)) !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a })) }, e.prototype.preloadAutoWidthImages = function(b) { b.each(a.proxy(function(b, c) { this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) { c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")) }, this)) }, e.prototype.destroy = function() { this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize)); for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel") }, e.prototype.op = function(a, b, c) { var d = this.settings.rtl; switch (b) {
            case "<":
                return d ? a > c : a < c;
            case ">":
                return d ? a < c : a > c;
            case ">=":
                return d ? a <= c : a >= c;
            case "<=":
                return d ? a >= c : a <= c } }, e.prototype.on = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function(a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function(b, c, d, f, g) { var h = { item: { count: this._items.length, index: this.current() } },
            i = a.camelCase(a.grep(["on", b, d], function(a) { return a }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c)); return this._supress[b] || (a.each(this._plugins, function(a, b) { b.onTrigger && b.onTrigger(j) }), this.register({ type: e.Type.Event, name: b }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j }, e.prototype.enter = function(b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) { this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++ }, this)) }, e.prototype.leave = function(b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) { this._states.current[b]-- }, this)) }, e.prototype.register = function(b) { if (b.type === e.Type.Event) { if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) { var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) { return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments) }, a.event.special[b.name].owl = !0 } } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) { return a.inArray(c, this._states.tags[b.name]) === d }, this))) }, e.prototype.suppress = function(b) { a.each(b, a.proxy(function(a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function(b) { a.each(b, a.proxy(function(a, b) { delete this._supress[b] }, this)) }, e.prototype.pointer = function(a) { var c = { x: null, y: null }; return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c }, e.prototype.isNumeric = function(a) { return !isNaN(parseFloat(a)) }, e.prototype.difference = function(a, b) { return { x: a.x - b.x, y: a.y - b.y } }, a.fn.owlCarousel = function(b) { var c = Array.prototype.slice.call(arguments, 1); return this.each(function() { var d = a(this),
                f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) { f.register({ type: e.Type.Event, name: c }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) { a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c])) }, f)) })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c) }) }, a.fn.owlCarousel.Constructor = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoRefresh && this.watch() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, e.prototype.watch = function() { this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, e.prototype.refresh = function() { this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, e.prototype.destroy = function() { var a, c;
        b.clearInterval(this._interval); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) { if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) { var c = this._core.settings,
                        e = c.center && Math.ceil(c.items / 2) || c.items,
                        f = c.center && -1 * e || 0,
                        g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                        h = this._core.clones().length,
                        i = a.proxy(function(a, b) { this.load(b) }, this); for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++ } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }, e.prototype.load = function(c) { var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) { var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
            this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() { f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() { this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("srcset", g) : (e = new Image, e.onload = a.proxy(function() { f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this), e.src = g) }, this)), this._loaded.push(d.get(0))) }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(c) { this._core = c, this._previousHeight = null, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update() }, this), "loaded.owl.lazy": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null; var d = this;
        a(b).on("load", function() { d._core.settings.autoHeight && d.update() }), a(b).resize(function() { d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function() { d.update() }, 250)) }) };
    e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function() { var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.settings.lazyLoad,
            e = this._core.$stage.children().toArray().slice(b, c),
            f = [],
            g = 0;
        a.each(e, function(b, c) { f.push(a(c).height()) }), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass) }, e.prototype.destroy = function() { var a, b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._videos = {}, this._playing = null, this._handlers = { "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this), "resize.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault() }, this), "refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && "position" === a.property.name && this._playing && this.stop() }, this), "prepared.owl.carousel": a.proxy(function(b) { if (b.namespace) { var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content))) } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) { this.play(a) }, this)) };
    e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, e.prototype.fetch = function(a, b) { var c = function() { return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube" }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href"); if (!g) throw new Error("Missing video URL."); if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else { if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar" } d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]) }, e.prototype.thumbnail = function(b, c) { var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(c) { e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", { class: "owl-video-tn " + j, srcType: c }) : a("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + c + ")" }), b.after(d), b.after(e) }; if (b.wrap(a("<div/>", { class: "owl-video-wrapper", style: g })), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1; "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a[0].thumbnail_large, l(f) } }) : "vzaar" === c.type && a.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a.framegrab_url, l(f) } }) }, e.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, e.prototype.play = function(b) { var c, d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing")) }, e.prototype.isInFullScreen = function() { var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return b && a(b).parent().hasClass("owl-video-frame") }, e.prototype.destroy = function() { var a, b;
        this._core.$element.off("click.owl.video"); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Video = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function(a) { a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) { a.namespace && (this.swapping = "translated" == a.type) }, this), "translate.owl.carousel": a.proxy(function(a) { a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
    e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function() { if (1 === this.core.settings.items && a.support.animation && a.support.transition) { this.core.speed(0); var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f)) } }, e.prototype.clear = function(b) { a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Animate = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = { "changed.owl.carousel": a.proxy(function(a) { a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0) }, this), "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": a.proxy(function(a, b, c) { a.namespace && this.play(b, c) }, this), "stop.owl.autoplay": a.proxy(function(a) { a.namespace && this.stop() }, this), "mouseover.owl.autoplay": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": a.proxy(function() { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options) };
    e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, e.prototype._next = function(d) { this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed) }, e.prototype.read = function() { return (new Date).getTime() - this._time }, e.prototype.play = function(c, d) { var e;
        this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e) }, e.prototype.stop = function() { this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating")) }, e.prototype.pause = function() { this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call)) }, e.prototype.destroy = function() { var a, b;
        this.stop(); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { "use strict"; var e = function(b) { this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function(b) { b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1) }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && "position" == a.property.name && this.draw() }, this), "initialized.owl.carousel": a.proxy(function(a) { a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers) };
    e.Defaults = { nav: !1, navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'], navSpeed: !1, navElement: 'button type="button" role="presentation"', navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, e.prototype.initialize = function() { var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) { this.prev(c.navSpeed) }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) { this.next(c.navSpeed) }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function(b) { var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed) }, this)); for (b in this._overrides) this._core[b] = a.proxy(this[b], this) }, e.prototype.destroy = function() { var a, b, c, d, e;
        e = this._core.settings; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove(); for (d in this.overides) this._core[d] = this._overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, e.prototype.update = function() { var a, b, c, d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items; if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
            for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) { if (b >= h || 0 === b) { if (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f) break;
                    b = 0, ++c } b += this._core.mergers(this._core.relative(a)) } }, e.prototype.draw = function() { var b, c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active")) }, e.prototype.onTrigger = function(b) { var c = this._core.settings;
        b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) } }, e.prototype.current = function() { var b = this._core.relative(this._core.current()); return a.grep(this._pages, a.proxy(function(a, c) { return a.start <= b && a.end >= b }, this)).pop() }, e.prototype.getPosition = function(b) { var c, d, e = this._core.settings; return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c }, e.prototype.next = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b) }, e.prototype.prev = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b) }, e.prototype.to = function(b, c, d) { var e;!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c) }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { "use strict"; var e = function(c) { this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function(c) { c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation") }, this), "prepared.owl.carousel": a.proxy(function(b) { if (b.namespace) { var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash"); if (!c) return;
                    this._hashes[c] = b.content } }, this), "changed.owl.carousel": a.proxy(function(c) { if (c.namespace && "position" === c.property.name) { var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function(a, b) { return a === d ? b : null }).join(); if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) { var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0) }, this)) };
    e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function() { var c, d;
        a(b).off("hashchange.owl.navigation"); for (c in this._handlers) this._core.$element.off(c, this._handlers[c]); for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null) }, a.fn.owlCarousel.Constructor.Plugins.Hash = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) { var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1); return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) { if (g[b] !== d) return e = !c || b, !1 }), e }

    function f(a) { return e(a, !0) } var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        j = { csstransforms: function() { return !!e("transform") }, csstransforms3d: function() { return !!e("perspective") }, csstransitions: function() { return !!e("transition") }, cssanimations: function() { return !!e("animation") } };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d()) }(window.Zepto || window.jQuery, window, document);
/*!
 * FitVids 1.1
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 */
! function(t) { "use strict";
    t.fn.fitVids = function(e) { var i = { customSelector: null, ignore: null }; if (!document.getElementById("fit-vids-style")) { var r = document.head || document.getElementsByTagName("head")[0],
                a = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                d = document.createElement("div");
            d.innerHTML = '<p>x</p><style id="fit-vids-style">' + a + "</style>", r.appendChild(d.childNodes[1]) } return e && t.extend(i, e), this.each(function() { var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            i.customSelector && e.push(i.customSelector); var r = ".fitvidsignore";
            i.ignore && (r = r + ", " + i.ignore); var a = t(this).find(e.join(","));
            a = a.not("object object"), a = a.not(r), a.each(function(e) { var i = t(this); if (!(i.parents(r).length > 0 || "embed" === this.tagName.toLowerCase() && i.parent("object").length || i.parent(".fluid-width-video-wrapper").length)) { i.css("height") || i.css("width") || !isNaN(i.attr("height")) && !isNaN(i.attr("width")) || (i.attr("height", 9), i.attr("width", 16)); var a = "object" === this.tagName.toLowerCase() || i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)) ? parseInt(i.attr("height"), 10) : i.height(),
                        d = isNaN(parseInt(i.attr("width"), 10)) ? i.width() : parseInt(i.attr("width"), 10),
                        o = a / d; if (!i.attr("id")) { var h = "fitvid" + e;
                        i.attr("id", h) } i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * o + "%"), i.removeAttr("height").removeAttr("width") } }) }) } }(window.jQuery || window.Zepto);
! function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], b) : b("object" == typeof exports ? require("jquery") : a.jQuery) }(this, function(a) { "use strict";

    function b(a) { var b, c, d, e, f, g, h, i = {}; for (f = a.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(","), h = 0, g = f.length; h < g && (c = f[h], c.search(/^(http|https|ftp):\/\//) === -1 && c.search(":") !== -1); h++) b = c.indexOf(":"), d = c.substring(0, b), e = c.substring(b + 1), e || (e = void 0), "string" == typeof e && (e = "true" === e || "false" !== e && e), "string" == typeof e && (e = isNaN(e) ? e : +e), i[d] = e; return null == d && null == e ? a : i }

    function c(a) { a = "" + a; var b, c, d, e = a.split(/\s+/),
            f = "50%",
            g = "50%"; for (d = 0, b = e.length; d < b; d++) c = e[d], "left" === c ? f = "0%" : "right" === c ? f = "100%" : "top" === c ? g = "0%" : "bottom" === c ? g = "100%" : "center" === c ? 0 === d ? f = "50%" : g = "50%" : 0 === d ? f = c : g = c; return { x: f, y: g } }

    function d(b, c) { var d = function() { c(this.src) };
        a('<img src="' + b + '.gif">').on("load", d), a('<img src="' + b + '.jpg">').on("load", d), a('<img src="' + b + '.jpeg">').on("load", d), a('<img src="' + b + '.png">').on("load", d) }

    function e(c, d, e) { if (this.$element = a(c), "string" == typeof d && (d = b(d)), e ? "string" == typeof e && (e = b(e)) : e = {}, "string" == typeof d) d = d.replace(/\.\w*$/, "");
        else if ("object" == typeof d)
            for (var f in d) d.hasOwnProperty(f) && (d[f] = d[f].replace(/\.\w*$/, ""));
        this.settings = a.extend({}, g, e), this.path = d; try { this.init() } catch (i) { if (i.message !== h) throw i } } var f = "vide",
        g = { volume: 1, playbackRate: 1, muted: !0, loop: !0, autoplay: !0, position: "50% 50%", posterType: "detect", resizing: !0, bgColor: "transparent", className: "" },
        h = "Not implemented";
    e.prototype.init = function() { var b, e, f = this,
            g = f.path,
            i = g,
            j = "",
            k = f.$element,
            l = f.settings,
            m = c(l.position),
            n = l.posterType;
        e = f.$wrapper = a("<div>").addClass(l.className).css({ position: "absolute", "z-index": -1, top: 0, left: 0, bottom: 0, right: 0, overflow: "hidden", "-webkit-background-size": "cover", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "background-color": l.bgColor, "background-repeat": "no-repeat", "background-position": m.x + " " + m.y }), "object" == typeof g && (g.poster ? i = g.poster : g.mp4 ? i = g.mp4 : g.webm ? i = g.webm : g.ogv && (i = g.ogv)), "detect" === n ? d(i, function(a) { e.css("background-image", "url(" + a + ")") }) : "none" !== n && e.css("background-image", "url(" + i + "." + n + ")"), "static" === k.css("position") && k.css("position", "relative"), k.prepend(e), "object" == typeof g ? (g.mp4 && (j += '<source src="' + g.mp4 + '.mp4" type="video/mp4">'), g.webm && (j += '<source src="' + g.webm + '.webm" type="video/webm">'), g.ogv && (j += '<source src="' + g.ogv + '.ogv" type="video/ogg">'), b = f.$video = a("<video>" + j + "</video>")) : b = f.$video = a('<video><source src="' + g + '.mp4" type="video/mp4"><source src="' + g + '.webm" type="video/webm"><source src="' + g + '.ogv" type="video/ogg"></video>'); try { b.prop({ autoplay: l.autoplay, loop: l.loop, volume: l.volume, muted: l.muted, defaultMuted: l.muted, playbackRate: l.playbackRate, defaultPlaybackRate: l.playbackRate }) } catch (o) { throw new Error(h) } b.css({ margin: "auto", position: "absolute", "z-index": -1, top: m.y, left: m.x, "-webkit-transform": "translate(-" + m.x + ", -" + m.y + ")", "-ms-transform": "translate(-" + m.x + ", -" + m.y + ")", "-moz-transform": "translate(-" + m.x + ", -" + m.y + ")", transform: "translate(-" + m.x + ", -" + m.y + ")", visibility: "hidden", opacity: 0 }).one("canplaythrough.vide", function() { f.resize() }).one("playing.vide", function() { b.css({ visibility: "visible", opacity: 1 }), e.css("background-image", "none") }), k.on("resize.vide", function() { l.resizing && f.resize() }), e.append(b) }, e.prototype.getVideoObject = function() { return this.$video[0] }, e.prototype.resize = function() { if (this.$video) { var a = this.$wrapper,
                b = this.$video,
                c = b[0],
                d = c.videoHeight,
                e = c.videoWidth,
                f = a.height(),
                g = a.width();
            g / e > f / d ? b.css({ width: g + 2, height: "auto" }) : b.css({ width: "auto", height: f + 2 }) } }, e.prototype.destroy = function() { delete a[f].lookup[this.index], this.$video && this.$video.off(f), this.$element.off(f).removeData(f), this.$wrapper.remove() }, a[f] = { lookup: [] }, a.fn[f] = function(b, c) { var d; return this.each(function() { d = a.data(this, f), d && d.destroy(), d = new e(this, b, c), d.index = a[f].lookup.push(d) - 1, a.data(this, f, d) }), this }, a(document).ready(function() { var b = a(window);
        b.on("resize.vide", function() { for (var b, c = a[f].lookup.length, d = 0; d < c; d++) b = a[f].lookup[d], b && b.settings.resizing && b.resize() }), b.on("unload.vide", function() { return !1 }), a(document).find("[data-vide-bg]").each(function(b, c) { var d = a(c),
                e = d.data("vide-options"),
                g = d.data("vide-bg");
            d[f](g, e) }) }) });
! function(t, i) { "function" == typeof define && define.amd ? define(["jquery"], i) : i(t.jQuery) }(this, function(t) { "use strict";

    function i(i, o) { this.element = i, this.$element = t(this.element), this.options = t.extend({}, e, o), this._defaults = e, this._name = s, this.init() } var s = "scrolly",
        e = { bgParallax: !1 };
    i.prototype.init = function() { var i = this;
        this.startPosition = this.$element.position().top, this.offsetTop = this.$element.offset().top, this.height = this.$element.outerHeight(!0), this.velocity = this.$element.attr("data-velocity"), this.bgStart = parseInt(this.$element.attr("data-fit"), 10), t(document).scroll(function() { i.didScroll = !0 }), setInterval(function() { i.didScroll && (i.didScroll = !1, i.scrolly()) }, 10) }, i.prototype.scrolly = function() { var i = t(window).scrollTop(),
            s = t(window).height(),
            e = this.startPosition;
        this.offsetTop >= i + s ? this.$element.addClass("scrolly-invisible") : e = this.$element.hasClass("scrolly-invisible") ? this.startPosition + (i + (s - this.offsetTop)) * this.velocity : this.startPosition + i * this.velocity, this.bgStart && (e += this.bgStart), this.options.bgParallax === !0 ? this.$element.css({ backgroundPositionY: e + "px" }) : this.$element.css({ top: e }) }, t.fn[s] = function(e) { return this.each(function() { t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new i(this, e)) }) } });
! function(e) { e.fn.gMap = function(o, a) { switch (o) {
            case "addMarker":
                return e(this).trigger("gMap.addMarker", [a.latitude, a.longitude, a.content, a.icon, a.popup]);
            case "centerAt":
                return e(this).trigger("gMap.centerAt", [a.latitude, a.longitude, a.zoom]);
            case "clearMarkers":
                return e(this).trigger("gMap.clearMarkers") } var n = e.extend({}, e.fn.gMap.defaults, o); return this.each(function() { var o = new google.maps.Map(this);
            e(this).data("gMap.reference", o); var a = new google.maps.Geocoder;
            n.address ? a.geocode({ address: n.address }, function(e) { e && e.length && o.setCenter(e[0].geometry.location) }) : n.latitude && n.longitude ? o.setCenter(new google.maps.LatLng(n.latitude, n.longitude)) : e.isArray(n.markers) && n.markers.length > 0 ? n.markers[0].address ? a.geocode({ address: n.markers[0].address }, function(e) { e && e.length > 0 && o.setCenter(e[0].geometry.location) }) : o.setCenter(new google.maps.LatLng(n.markers[0].latitude, n.markers[0].longitude)) : o.setCenter(new google.maps.LatLng(34.885931, 9.84375)), o.setZoom(n.zoom), o.setMapTypeId(google.maps.MapTypeId[n.maptype]); var s = { scrollwheel: n.scrollwheel, disableDoubleClickZoom: !n.doubleclickzoom };
            n.controls === !1 ? e.extend(s, { disableDefaultUI: !0 }) : 0 !== n.controls.length && e.extend(s, n.controls, { disableDefaultUI: !0 }), o.setOptions(s), o.setOptions({ styles: n.styles }); var t, r, i = new google.maps.Marker;
            t = new google.maps.MarkerImage(n.icon.image), t.size = new google.maps.Size(n.icon.iconsize[0], n.icon.iconsize[1]), t.anchor = new google.maps.Point(n.icon.iconanchor[0], n.icon.iconanchor[1]), i.setIcon(t), n.icon.shadow && (r = new google.maps.MarkerImage(n.icon.shadow), r.size = new google.maps.Size(n.icon.shadowsize[0], n.icon.shadowsize[1]), r.anchor = new google.maps.Point(n.icon.shadowanchor[0], n.icon.shadowanchor[1]), i.setShadow(r)), e(this).bind("gMap.centerAt", function(e, a, n, s) { s && o.setZoom(s), o.panTo(new google.maps.LatLng(parseFloat(a), parseFloat(n))) }); var g = [];
            e(this).bind("gMap.clearMarkers", function() { for (; g[0];) g.pop().setMap(null) }); var l;
            e(this).bind("gMap.addMarker", function(e, a, s, t, r, d) { var c, p, m = new google.maps.LatLng(parseFloat(a), parseFloat(s)),
                    h = new google.maps.Marker({ position: m }); if (r ? (c = new google.maps.MarkerImage(r.image), c.size = new google.maps.Size(r.iconsize[0], r.iconsize[1]), c.anchor = new google.maps.Point(r.iconanchor[0], r.iconanchor[1]), h.setIcon(c), r.shadow && (p = new google.maps.MarkerImage(r.shadow), p.size = new google.maps.Size(r.shadowsize[0], r.shadowsize[1]), p.anchor = new google.maps.Point(r.shadowanchor[0], r.shadowanchor[1]), i.setShadow(p))) : (h.setIcon(i.getIcon()), h.setShadow(i.getShadow())), t) { "_latlng" === t && (t = a + ", " + s); var w = new google.maps.InfoWindow({ content: n.html_prepend + t + n.html_append });
                    google.maps.event.addListener(h, "click", function() { l && l.close(), w.open(o, h), l = w }), d && google.maps.event.addListenerOnce(o, "tilesloaded", function() { w.open(o, h) }) } h.setMap(o), g.push(h) }); for (var d, c = this, p = function(o) { return function(a) { a && a.length > 0 && e(c).trigger("gMap.addMarker", [a[0].geometry.location.lat(), a[0].geometry.location.lng(), o.html, o.icon, o.popup]) } }, m = 0; m < n.markers.length; m++) d = n.markers[m], d.address ? ("_address" === d.html && (d.html = d.address), a.geocode({ address: d.address }, p(d))) : e(this).trigger("gMap.addMarker", [d.latitude, d.longitude, d.html, d.icon, d.popup]) }) }, e.fn.gMap.defaults = { address: "", latitude: 0, longitude: 0, zoom: 1, markers: [], controls: [], styles: [], scrollwheel: !1, doubleclickzoom: !0, maptype: "ROADMAP", html_prepend: '<div class="gmap_marker">', html_append: "</div>", icon: { image: "http://www.google.com/mapfiles/marker.png", shadow: "http://www.google.com/mapfiles/shadow50.png", iconsize: [20, 34], shadowsize: [37, 34], iconanchor: [9, 34], shadowanchor: [6, 34] } } }(jQuery);
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function(a) { var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) { b.ev.on(o + a + p, c) },
        x = function(b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f },
        y = function(c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) },
        z = function(c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn },
        A = function() { a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b) },
        B = function() { var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== a.transition) return !0; for (; b.length;)
                if (b.pop() + "Transition" in a) return !0; return !1 };
    t.prototype = { constructor: t, init: function() { var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {} }, open: function(c) { var e; if (c.isObj === !1) { b.items = c.items.toArray(), b.index = 0; var g, h = c.items; for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break } } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0; if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() { b.close() }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) { b._checkIfClose(a.target) && b.close() }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading)); var i = a.magnificPopup.modules; for (e = 0; e < i.length; e++) { var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b) } y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) { c.close_replaceWith = z(d.type) }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) { 27 === a.keyCode && b.close() }), v.on("resize" + p, function() { b.updateSize() }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f); var k = b.wH = v.height(),
                n = {}; if (b.fixedContentPos && b._hasScrollBar(k)) { var o = b._getScrollbarSize();
                o && (n.marginRight = o) } b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden"); var r = b.st.mainClass; return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c }, close: function() { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() { b._close() }, b.st.removalDelay)) : b._close()) }, _close: function() { y(h); var c = r + " " + q + " "; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) { var e = { marginRight: "" };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e) } d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j) }, updateSize: function(a) { if (b.isIOS) { var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize") }, updateItemHTML: function() { var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index)); var d = c.type; if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) { var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0 } e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder"); var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange") }, appendContent: function(a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) }, parseEl: function(c) { var d, e = b.items[c]; if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) { for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) { d = f[g]; break } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href")) } return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c] }, addGroup: function(a, c) { var d = function(d) { d.mfpEl = this, b._openClick(d, a, c) };
            c || (c = {}); var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d))) }, _openClick: function(c, d, e) { var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick; if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) { var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn; if (g)
                    if (a.isFunction(g)) { if (!g.call(b)) return !0 } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e) } }, updateStatus: function(a, d) { if (b.preloader) { c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading); var e = { status: a, text: d };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a } }, _checkIfClose: function(c) { if (!a(c).hasClass(s)) { var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick; if (d && e) return !0; if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0; if (c === b.content[0] || a.contains(b.content[0], c)) { if (d) return !0 } else if (e && a.contains(document, c)) return !0; return !1 } }, _addClassToMFP: function(a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) }, _removeClassFromMFP: function(a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) }, _hasScrollBar: function(a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) }, _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus() }, _onFocusIn: function(c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) }, _parseMarkup: function(b, c, d) { var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) { if (void 0 === d || d === !1) return !0; if (e = c.split("_"), e.length > 1) { var f = b.find(p + "-" + e[0]); if (f.length > 0) { var g = e[1]; "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d) } } else b.find(p + "-" + c).html(d) }) }, _getScrollbarSize: function() { if (void 0 === b.scrollbarSize) { var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) } return b.scrollbarSize } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function(b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function() { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function(b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function(c) { A(); var d = a(this); if ("string" == typeof c)
            if ("open" === c) { var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f) } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c); return d }; var C, D, E, F = "inline",
        G = function() { E && (D.after(E.addClass(C)).detach(), E = null) };
    a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function() { b.types.push(F), w(h + "." + F, function() { G() }) }, getInline: function(c, d) { if (G(), c.src) { var e = b.st.inline,
                        f = a(c.src); if (f.length) { var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready") } else b.updateStatus("error", e.tNotFound), f = a("<div>"); return c.inlineElement = f, f } return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d } } }); var H, I = "ajax",
        J = function() { H && a(document.body).removeClass(H) },
        K = function() { J(), b.req && b.req.abort() };
    a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function() { b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K) }, getAjax: function(c) { H && a(document.body).addClass(H), b.updateStatus("loading"); var d = a.extend({ url: c.src, success: function(d, e, f) { var g = { data: d, xhr: f };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() { b.wrap.addClass(q) }, 16), b.updateStatus("ready"), y("AjaxContentAdded") }, error: function() { J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) } }, b.st.ajax.settings); return b.req = a.ajax(d), "" } } }); var L, M = function(c) { if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) { if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || "" } return "" };
    a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function() { var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() { "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, function() { c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p) }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage) }, resizeImage: function() { var a = b.currItem; if (a && a.img && b.st.image.verticalFit) { var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c) } }, _onImageHasSize: function(a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) }, findImageSize: function(a) { var c = 0,
                    d = a.img[0],
                    e = function(f) { L && clearInterval(L), L = setInterval(function() { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) };
                e(1) }, getImage: function(c, d) { var e = 0,
                    f = function() { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g())) },
                    g = function() { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) },
                    h = b.st.image,
                    i = d.find(".mfp-img"); if (i.length) { var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1) } return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d) } } }); var N, O = function() { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N };
    a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(a) { return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function() { var a, c = b.st.zoom,
                    d = ".zoom"; if (c.enabled && b.supportsTransition) { var e, f, g = c.duration,
                        j = function(a) { var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                f = "transition"; return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b },
                        k = function() { b.content.css("visibility", "visible") };
                    w("BuildControls" + d, function() { if (b._allowZoom()) { if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() { f.css(b._getOffset(!0)), e = setTimeout(function() { k(), setTimeout(function() { f.remove(), a = f = null, y("ZoomAnimationEnded") }, 16) }, g) }, 16) } }), w(i + d, function() { if (b._allowZoom()) { if (clearTimeout(e), b.st.removalDelay = g, !a) { if (a = b._getItemToZoom(), !a) return;
                                f = j(a) } f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() { f.css(b._getOffset()) }, 16) } }), w(h + d, function() { b._allowZoom() && (k(), f && f.remove(), a = null) }) } }, _allowZoom: function() { return "image" === b.currItem.type }, _getItemToZoom: function() { return b.currItem.hasSize ? b.currItem.img : !1 }, _getOffset: function(c) { var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem); var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f; var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f }; return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h } } }); var P = "iframe",
        Q = "//about:blank",
        R = function(a) { if (b.currTemplate[P]) { var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none")) } };
    a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function() { b.types.push(P), w("BeforeChange", function(a, b, c) { b !== c && (b === P ? R() : c === P && R(!0)) }), w(h + "." + P, function() { R() }) }, getIframe: function(c, d) { var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() { return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 }); var g = {}; return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d } } }); var S = function(a) { var c = b.items.length; return a > c - 1 ? a - c : 0 > a ? c + a : a },
        T = function(a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) };
    a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function() { var c = b.st.gallery,
                    e = ".mfp-gallery"; return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() { c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on("keydown" + e, function(a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), w("UpdateStatus" + e, function(a, c) { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, function(a, d, e, f) { var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : "" }), w("BuildControls" + e, function() { if (b.items.length > 1 && c.arrows && !b.arrowLeft) { var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() { b.prev() }), f.click(function() { b.next() }), b.container.append(e.add(f)) } }), w(n + e, function() { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, function() { d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null })) : !1 }, next: function() { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() }, prev: function() { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() }, goTo: function(a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() }, preloadNearbyImages: function() { var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length); for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a); for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a) }, _preloadItem: function(c) { if (c = S(c), !b.items[c].preloaded) { var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() { d.hasSize = !0 }).on("error.mfploader", function() { d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0 } } } }); var U = "retina";
    a.magnificPopup.registerModule(U, { options: { replaceSrc: function(a) { return a.src.replace(/\.\w+$/, function(a) { return "@2x" + a }) }, ratio: 1 }, proto: { initRetina: function() { if (window.devicePixelRatio > 1) { var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), w("ElementParse." + U, function(b, d) { d.src = a.replaceSrc(d, c) })) } } } }), A() });
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
! function(e) { var n; if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) { var t = window.Cookies,
            o = window.Cookies = e();
        o.noConflict = function() { return window.Cookies = t, o } } }(function() {
    function e() { for (var e = 0, n = {}; e < arguments.length; e++) { var t = arguments[e]; for (var o in t) n[o] = t[o] } return n }

    function n(e) { return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) } return function t(o) {
        function r() {}

        function i(n, t, i) { if ("undefined" != typeof document) { "number" == typeof(i = e({ path: "/" }, r.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : ""; try { var c = JSON.stringify(t); /^[\{\[]/.test(c) && (t = c) } catch (e) {} t = o.write ? o.write(t, n) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape); var f = ""; for (var u in i) i[u] && (f += "; " + u, !0 !== i[u] && (f += "=" + i[u].split(";")[0])); return document.cookie = n + "=" + t + f } }

        function c(e, t) { if ("undefined" != typeof document) { for (var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0; c < i.length; c++) { var f = i[c].split("="),
                        u = f.slice(1).join("=");
                    t || '"' !== u.charAt(0) || (u = u.slice(1, -1)); try { var a = n(f[0]); if (u = (o.read || o)(u, a) || n(u), t) try { u = JSON.parse(u) } catch (e) {}
                        if (r[a] = u, e === a) break } catch (e) {} } return e ? r[e] : r } } return r.set = i, r.get = function(e) { return c(e, !1) }, r.getJSON = function(e) { return c(e, !0) }, r.remove = function(n, t) { i(n, "", e(t, { expires: -1 })) }, r.defaults = {}, r.withConverter = t, r }(function() {}) });
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
! function(e) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto) }(function(e) { "use strict";

    function t(t) { var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r)) }

    function r(t) { var r = t.target,
            a = e(r); if (!a.is("[type=submit],[type=image]")) { var n = a.closest("[type=submit]"); if (0 === n.length) return;
            r = n[0] } var i = this; if (i.clk = r, "image" == r.type)
            if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) { var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function() { i.clk = i.clk_x = i.clk_y = null }, 100) }

    function a() { if (e.fn.ajaxSubmit.debug) { var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t) } } var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData; var i = !!e.fn.prop;
    e.fn.attr2 = function() { if (!i) return this.attr.apply(this, arguments); var e = this.prop.apply(this, arguments); return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments) }, e.fn.ajaxSubmit = function(t) {
        function r(r) { var a, n, i = e.param(r, t.traditional).split("&"),
                o = i.length,
                s = []; for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]); return s }

        function o(a) { for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value); if (t.extraData) { var o = r(t.extraData); for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1]) } t.data = null; var s = e.extend(!0, {}, e.ajaxSettings, t, { contentType: !1, processData: !1, cache: !1, type: u || "POST" });
            t.uploadProgress && (s.xhr = function() { var r = e.ajaxSettings.xhr(); return r.upload && r.upload.addEventListener("progress", function(e) { var r = 0,
                        a = e.loaded || e.position,
                        n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r) }, !1), r }), s.data = null; var c = s.beforeSend; return s.beforeSend = function(e, r) { r.data = t.formData ? t.formData : n, c && c.call(this, e, r) }, e.ajax(s) }

        function s(r) {
            function n(e) { var t = null; try { e.contentWindow && (t = e.contentWindow.document) } catch (r) { a("cannot get iframe.contentWindow document: " + r) } if (t) return t; try { t = e.contentDocument ? e.contentDocument : e.document } catch (r) { a("cannot get iframe.contentDocument: " + r), t = e.document } return t }

            function o() {
                function t() { try { var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50) } catch (r) { a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0 } } var r = f.attr2("target"),
                    i = f.attr2("action"),
                    o = "multipart/form-data",
                    c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({ encoding: "multipart/form-data", enctype: "multipart/form-data" }), m.timeout && (j = setTimeout(function() { T = !0, s(D) }, m.timeout)); var l = []; try { if (m.extraData)
                        for (var d in m.extraData) m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15); try { w.submit() } catch (h) { var x = document.createElement("form").submit;
                        x.apply(w) } } finally { w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove() } }

            function s(t) { if (!x.aborted && !F) { if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout"); if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort"); if (M && M.location.href != m.iframeSrc || T) { g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1); var r, i = "success"; try { if (T) throw "timeout"; var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M); if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250); var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function(e) { var t = { "content-type": m.dataType }; return t[e.toLowerCase()] }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText); var c = (m.dataType || "").toLowerCase(),
                                l = /(json|script|text)/.test(c); if (l || m.textarea) { var f = M.getElementsByTagName("textarea")[0]; if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;
                                else if (l) { var p = M.getElementsByTagName("pre")[0],
                                        h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText) } } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText)); try { E = _(x, c, m) } catch (y) { i = "parsererror", x.error = r = y || i } } catch (y) { a("error caught: ", y), i = "error", x.error = r = y || i } x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function() { m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null }, 100) } } } var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0],
                S = e.Deferred(); if (S.abort = function(e) { x.abort(e) }, r)
                for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled"); if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({ position: "absolute", top: "-1000px", left: "-1000px" })), g = v[0], x = { aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function() {}, getResponseHeader: function() {}, setRequestHeader: function() {}, abort: function(t) { var r = "timeout" === t ? "timeout" : "aborted";
                        a("aborting upload... " + r), this.aborted = 1; try { g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop") } catch (n) {} v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r) } }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S; if (x.aborted) return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y))); var D = 1,
                k = 2,
                A = e("meta[name=csrf-token]").attr("content"),
                L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10); var E, M, F, O = 50,
                X = e.parseXML || function(e, t) { return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null },
                C = e.parseJSON || function(e) { return window.eval("(" + e + ")") },
                _ = function(t, r, a) { var n = t.getResponseHeader("content-type") || "",
                        i = "xml" === r || !r && n.indexOf("xml") >= 0,
                        o = i ? t.responseXML : t.responseText; return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o }; return S } if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this; var u, c, l, f = this; "function" == typeof t ? t = { success: t } : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, { url: l, success: e.ajaxSettings.success, type: u || e.ajaxSettings.type, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank" }, t); var m = {}; if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this; if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this; var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional); var p, h = [],
            v = this.formToArray(t.semantic, h); if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this; if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this; var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g; var x = []; if (t.resetForm && x.push(function() { f.resetForm() }), t.clearForm && x.push(function() { f.clearForm(t.includeHidden) }), !t.dataType && t.target) { var y = t.success || function() {};
            x.push(function(r) { var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments) }) } else t.success && x.push(t.success); if (t.success = function(e, r, a) { for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f]) }, t.error) { var b = t.error;
            t.error = function(e, r, a) { var n = t.context || this;
                b.apply(n, [e, r, a, f]) } } if (t.complete) { var T = t.complete;
            t.complete = function(e, r) { var a = t.context || this;
                T.apply(a, [e, r, f]) } } var j = e("input[type=file]:enabled", this).filter(function() { return "" !== e(this).val() }),
            w = j.length > 0,
            S = "multipart/form-data",
            D = f.attr("enctype") == S || f.attr("encoding") == S,
            k = n.fileapi && n.formdata;
        a("fileAPI :" + k); var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() { A = s(v) }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A); for (var E = 0; E < h.length; E++) h[E] = null; return this.trigger("form-submit-notify", [this, t]), this }, e.fn.ajaxForm = function(n) { if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) { var i = { s: this.selector, c: this.context }; return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function() { e(i.s, i.c).ajaxForm(n) }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this) } return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r) }, e.fn.ajaxFormUnbind = function() { return this.unbind("submit.form-plugin click.form-plugin") }, e.fn.formToArray = function(t, r) { var a = []; if (0 === this.length) return a; var i, o = this[0],
            s = this.attr("id"),
            u = t ? o.getElementsByTagName("*") : o.elements; if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a; var c, l, f, m, d, p, h; for (c = 0, p = u.length; p > c; c++)
            if (d = u[c], f = d.name, f && !d.disabled)
                if (t && o.clk && "image" == d.type) o.clk == d && (a.push({ name: f, value: e(d).val(), type: d.type }), a.push({ name: f + ".x", value: o.clk_x }, { name: f + ".y", value: o.clk_y }));
                else if (m = e.fieldValue(d, !0), m && m.constructor == Array)
            for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({ name: f, value: m[l] });
        else if (n.fileapi && "file" == d.type) { r && r.push(d); var v = d.files; if (v.length)
                for (l = 0; l < v.length; l++) a.push({ name: f, value: v[l], type: d.type });
            else a.push({ name: f, value: "", type: d.type }) } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({ name: f, value: m, type: d.type, required: d.required })); if (!t && o.clk) { var g = e(o.clk),
                x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({ name: f, value: g.val() }), a.push({ name: f + ".x", value: o.clk_x }, { name: f + ".y", value: o.clk_y })) } return a }, e.fn.formSerialize = function(t) { return e.param(this.formToArray(t)) }, e.fn.fieldSerialize = function(t) { var r = []; return this.each(function() { var a = this.name; if (a) { var n = e.fieldValue(this, t); if (n && n.constructor == Array)
                    for (var i = 0, o = n.length; o > i; i++) r.push({ name: a, value: n[i] });
                else null !== n && "undefined" != typeof n && r.push({ name: this.name, value: n }) } }), e.param(r) }, e.fn.fieldValue = function(t) { for (var r = [], a = 0, n = this.length; n > a; a++) { var i = this[a],
                o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o)) } return r }, e.fieldValue = function(t, r) { var a = t.name,
            n = t.type,
            i = t.tagName.toLowerCase(); if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null; if ("select" == i) { var o = t.selectedIndex; if (0 > o) return null; for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) { var m = u[f]; if (m.selected) { var d = m.value; if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
                    s.push(d) } } return s } return e(t).val() }, e.fn.clearForm = function(t) { return this.each(function() { e("input,select,textarea", this).clearFields(t) }) }, e.fn.clearFields = e.fn.clearInputs = function(t) { var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; return this.each(function() { var a = this.type,
                n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "") }) }, e.fn.resetForm = function() { return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset() }) }, e.fn.enable = function(e) { return void 0 === e && (e = !0), this.each(function() { this.disabled = !e }) }, e.fn.selected = function(t) { return void 0 === t && (t = !0), this.each(function() { var r = this.type; if ("checkbox" == r || "radio" == r) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) { var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t } }) }, e.fn.ajaxSubmit.debug = !1 });
/*! jQuery Validation Plugin - v1.14.0 - 6/30/2015
 * http://jqueryvalidation.org/
 * Copyright (c) 2015 JÃƒÂ¶rn Zaefferer; Licensed MIT */
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery) }(function(a) { a.extend(a.fn, { validate: function(b) { if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")); var c = a.data(this[0], "validator"); return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) { c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0) }), this.on("submit.validate", function(b) {
                function d() { var d, e; return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0 } return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1) })), c) }, valid: function() { var b, c, d; return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function() { b = c.element(this) && b, d = d.concat(c.errorList) }), c.errorList = d), b }, rules: function(b, c) { var d, e, f, g, h, i, j = this[0]; if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                case "add":
                    a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages)); break;
                case "remove":
                    return c ? (i = {}, a.each(c.split(/\s/), function(b, c) { i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required") }), i) : (delete e[j.name], f) }
            return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({ required: h }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, { remote: h })), g } }), a.extend(a.expr[":"], { blank: function(b) { return !a.trim("" + a(b).val()) }, filled: function(b) { return !!a.trim("" + a(b).val()) }, unchecked: function(b) { return !a(b).prop("checked") } }), a.validator = function(b, c) { this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init() }, a.validator.format = function(b, c) { return 1 === arguments.length ? function() { var c = a.makeArray(arguments); return c.unshift(b), a.validator.format.apply(this, c) } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) { b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() { return c }) }), b) }, a.extend(a.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusCleanup: !1, focusInvalid: !0, errorContainer: a([]), errorLabelContainer: a([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function(a) { this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a))) }, onfocusout: function(a) { this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a) }, onkeyup: function(b, c) { var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b === this.lastElement) && this.element(b) }, onclick: function(a) { a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode) }, highlight: function(b, c, d) { "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d) }, unhighlight: function(b, c, d) { "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d) } }, setDefaults: function(b) { a.extend(a.validator.defaults, b) }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date ( ISO ).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: a.validator.format("Please enter no more than {0} characters."), minlength: a.validator.format("Please enter at least {0} characters."), rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."), range: a.validator.format("Please enter a value between {0} and {1}."), max: a.validator.format("Please enter a value less than or equal to {0}."), min: a.validator.format("Please enter a value greater than or equal to {0}.") }, autoCreateRanges: !1, prototype: { init: function() {
                function b(b) { var c = a.data(this.form, "validator"),
                        d = "on" + b.type.replace(/^validate/, ""),
                        e = c.settings;
                    e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b) } this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset(); var c, d = this.groups = {};
                a.each(this.settings.groups, function(b, c) { "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) { d[c] = b }) }), c = this.settings.rules, a.each(c, function(b, d) { c[b] = a.validator.normalizeRule(d) }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true") }, form: function() { return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid() }, checkForm: function() { this.prepareForm(); for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]); return this.valid() }, element: function(b) { var c = this.clean(b),
                    d = this.validationTargetFor(c),
                    e = !0; return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e }, showErrors: function(b) { if (b) { a.extend(this.errorMap, b), this.errorList = []; for (var c in b) this.errorList.push({ message: b[c], element: this.findByName(c)[0] });
                    this.successList = a.grep(this.successList, function(a) { return !(a.name in b) }) } this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors() }, resetForm: function() { a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(); var b, c = this.elements().removeData("previousValue").removeAttr("aria-invalid"); if (this.settings.unhighlight)
                    for (b = 0; c[b]; b++) this.settings.unhighlight.call(this, c[b], this.settings.errorClass, "");
                else c.removeClass(this.settings.errorClass) }, numberOfInvalids: function() { return this.objectLength(this.invalid) }, objectLength: function(a) { var b, c = 0; for (b in a) c++; return c }, hideErrors: function() { this.hideThese(this.toHide) }, hideThese: function(a) { a.not(this.containers).text(""), this.addWrapper(a).hide() }, valid: function() { return 0 === this.size() }, size: function() { return this.errorList.length }, focusInvalid: function() { if (this.settings.focusInvalid) try { a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin") } catch (b) {} }, findLastActive: function() { var b = this.lastActive; return b && 1 === a.grep(this.errorList, function(a) { return a.element.name === b.name }).length && b }, elements: function() { var b = this,
                    c = {}; return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() { return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0) }) }, clean: function(b) { return a(b)[0] }, errors: function() { var b = this.settings.errorClass.split(" ").join("."); return a(this.settings.errorElement + "." + b, this.errorContext) }, reset: function() { this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([]) }, prepareForm: function() { this.reset(), this.toHide = this.errors().add(this.containers) }, prepareElement: function(a) { this.reset(), this.toHide = this.errorsFor(a) }, elementValue: function(b) { var c, d = a(b),
                    e = b.type; return "radio" === e || "checkbox" === e ? this.findByName(b.name).filter(":checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c) }, check: function(b) { b = this.validationTargetFor(this.clean(b)); var c, d, e, f = a(b).rules(),
                    g = a.map(f, function(a, b) { return b }).length,
                    h = !1,
                    i = this.elementValue(b); for (d in f) { e = { method: d, parameters: f[d] }; try { if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) { h = !0; continue } if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b))); if (!c) return this.formatAndAdd(b, e), !1 } catch (j) { throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), j } } if (!h) return this.objectLength(f) && this.successList.push(b), !0 }, customDataMessage: function(b, c) { return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg") }, customMessage: function(a, b) { var c = this.settings.messages[a]; return c && (c.constructor === String ? c : c[b]) }, findDefined: function() { for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a]; return void 0 }, defaultMessage: function(b, c) { return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>") }, formatAndAdd: function(b, c) { var d = this.defaultMessage(b, c.method),
                    e = /\$?\{(\d+)\}/g; "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({ message: d, element: b, method: c.method }), this.errorMap[b.name] = d, this.submitted[b.name] = d }, addWrapper: function(a) { return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a }, defaultShowErrors: function() { var a, b, c; for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message); if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]); if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show() }, validElements: function() { return this.currentElements.not(this.invalidElements()) }, invalidElements: function() { return a(this.errorList).map(function() { return this.element }) }, showLabel: function(b, c) { var d, e, f, g = this.errorsFor(b),
                    h = this.idOrName(b),
                    i = a(b).attr("aria-describedby");
                g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function(b, c) { c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id")) }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g) }, errorsFor: function(b) { var c = this.idOrName(b),
                    d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *"; return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e) }, idOrName: function(a) { return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name) }, validationTargetFor: function(b) { return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0] }, checkable: function(a) { return /radio|checkbox/i.test(a.type) }, findByName: function(b) { return a(this.currentForm).find("[name='" + b + "']") }, getLength: function(b, c) { switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length } return b.length }, depend: function(a, b) { return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0 }, dependTypes: { "boolean": function(a) { return a }, string: function(b, c) { return !!a(b, c.form).length }, "function": function(a, b) { return a(b) } }, optional: function(b) { var c = this.elementValue(b); return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch" }, startRequest: function(a) { this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0) }, stopRequest: function(b, c) { this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1) }, previousValue: function(b) { return a.data(b, "previousValue") || a.data(b, "previousValue", { old: null, valid: !0, message: this.defaultMessage(b, "remote") }) }, destroy: function() { this.resetForm(), a(this.currentForm).off(".validate").removeData("validator") } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function(b, c) { b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b) }, classRules: function(b) { var c = {},
                d = a(b).attr("class"); return d && a.each(d.split(" "), function() { this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]) }), c }, normalizeAttributeRule: function(a, b, c, d) { /min|max/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0) }, attributeRules: function(b) { var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type"); for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d); return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e }, dataRules: function(b) { var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type"); for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d); return e }, staticRules: function(b) { var c = {},
                d = a.data(b.form, "validator"); return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c }, normalizeRules: function(b, c) { return a.each(b, function(d, e) { if (e === !1) return void delete b[d]; if (e.param || e.depends) { var f = !0; switch (typeof e.depends) {
                        case "string":
                            f = !!a(e.depends, c.form).length; break;
                        case "function":
                            f = e.depends.call(c, c) } f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d] } }), a.each(b, function(d, e) { b[d] = a.isFunction(e) ? e(c) : e }), a.each(["minlength", "maxlength"], function() { b[this] && (b[this] = Number(b[this])) }), a.each(["rangelength", "range"], function() { var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])])) }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b }, normalizeRule: function(b) { if ("string" == typeof b) { var c = {};
                a.each(b.split(/\s/), function() { c[this] = !0 }), b = c } return b }, addMethod: function(b, c, d) { a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b)) }, methods: { required: function(b, c, d) { if (!this.depend(d, c)) return "dependency-mismatch"; if ("select" === c.nodeName.toLowerCase()) { var e = a(c).val(); return e && e.length > 0 } return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0 }, email: function(a, b) { return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a) }, url: function(a, b) { return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a) }, date: function(a, b) { return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString()) }, dateISO: function(a, b) { return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a) }, number: function(a, b) { return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a) }, digits: function(a, b) { return this.optional(b) || /^\d+$/.test(a) }, creditcard: function(a, b) { if (this.optional(b)) return "dependency-mismatch"; if (/[^0-9 \-]+/.test(a)) return !1; var c, d, e = 0,
                    f = 0,
                    g = !1; if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1; for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g; return e % 10 === 0 }, minlength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || e >= d }, maxlength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || d >= e }, rangelength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || e >= d[0] && e <= d[1] }, min: function(a, b, c) { return this.optional(b) || a >= c }, max: function(a, b, c) { return this.optional(b) || c >= a }, range: function(a, b, c) { return this.optional(b) || a >= c[0] && a <= c[1] }, equalTo: function(b, c, d) { var e = a(d); return this.settings.onfocusout && e.off(".validate-equalTo").on("blur.validate-equalTo", function() { a(c).valid() }), b === e.val() }, remote: function(b, c, d) { if (this.optional(c)) return "dependency-mismatch"; var e, f, g = this.previousValue(c); return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && { url: d } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, { mode: "abort", port: "validate" + c.name, dataType: "json", data: f, context: e.currentForm, success: function(d) { var f, h, i, j = d === !0 || "true" === d;
                        e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j) } }, d)), "pending") } } }); var b, c = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) { var e = a.port; "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d) }) : (b = a.ajax, a.ajax = function(d) { var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port; return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments) }) });
! function(a, b) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], function(c) { return b(c, a, a.document) }) : "object" == typeof module && module.exports ? module.exports = b(require("jquery"), a, a.document) : b(jQuery, a, a.document) }("undefined" != typeof window ? window : this, function(a, b, c, d) { "use strict";

    function e(c, d, e, f) { if (r === c && (e = !1), z === !0) return !0; if (n[c]) { if (w = !1, e && G.before(c, o), s = 1, E = m[c], C === !1 && r > c && f === !1 && p[c] && (s = parseInt(o[c].outerHeight() / u.height()), E = parseInt(m[c]) + (o[c].outerHeight() - u.height())), G.updateHash && G.sectionName && (C !== !0 || 0 !== c))
                if (history.pushState) try { history.replaceState(null, null, n[c]) } catch (a) { b.console && console.warn("Scrollify warning: Page must be hosted to manipulate the hash value.") } else b.location.hash = n[c]; if (C && (G.afterRender(), C = !1), r = c, d) a(G.target).stop().scrollTop(E), e && G.after(c, o);
            else { if (x = !0, a().velocity ? a(G.target).stop().velocity("scroll", { duration: G.scrollSpeed, easing: G.easing, offset: E, mobileHA: !1 }) : a(G.target).stop().animate({ scrollTop: E }, G.scrollSpeed, G.easing), b.location.hash.length && G.sectionName && b.console) try { a(b.location.hash).length && console.warn("Scrollify warning: ID matches hash value - this will cause the page to anchor.") } catch (a) {} a(G.target).promise().done(function() { x = !1, C = !1, e && G.after(c, o) }) } } }

    function f(a) {
        function b(b) { for (var c = 0, d = a.slice(Math.max(a.length - b, 1)), e = 0; e < d.length; e++) c += d[e]; return Math.ceil(c / b) } var c = b(10),
            d = b(70); return c >= d }

    function g(a, b) { for (var c = n.length; c >= 0; c--) "string" == typeof a ? n[c] === a && (q = c, e(c, b, !0, !0)) : c === a && (q = c, e(c, b, !0, !0)) } var h, i, j, k, l, m = [],
        n = [],
        o = [],
        p = [],
        q = 0,
        r = 0,
        s = 1,
        t = !1,
        u = a(b),
        v = u.scrollTop(),
        w = !1,
        x = !1,
        y = !1,
        z = !1,
        A = [],
        B = (new Date).getTime(),
        C = !0,
        D = !1,
        E = 0,
        F = "onwheel" in c ? "wheel" : c.onmousewheel !== d ? "mousewheel" : "DOMMouseScroll",
        G = { section: ".section", sectionName: "section-name", interstitialSection: "", easing: "easeOutExpo", scrollSpeed: 1100, offset: 0, scrollbars: !0, target: "html,body", standardScrollElements: !1, setHeights: !0, overflowScroll: !0, updateHash: !0, touchScroll: !0, before: function() {}, after: function() {}, afterResize: function() {}, afterRender: function() {} },
        H = function(d) {
            function g(b) { a().velocity ? a(G.target).stop().velocity("scroll", { duration: G.scrollSpeed, easing: G.easing, offset: b, mobileHA: !1 }) : a(G.target).stop().animate({ scrollTop: b }, G.scrollSpeed, G.easing) }

            function r(b) { b && (v = u.scrollTop()); var c = G.section;
                p = [], G.interstitialSection.length && (c += "," + G.interstitialSection), G.scrollbars === !1 && (G.overflowScroll = !1), a(c).each(function(b) { var c = a(this);
                    G.setHeights ? c.is(G.interstitialSection) ? p[b] = !1 : c.css("height", "auto").outerHeight() < u.height() || "hidden" === c.css("overflow") ? (c.css({ height: u.height() }), p[b] = !1) : (c.css({ height: c.height() }), G.overflowScroll ? p[b] = !0 : p[b] = !1) : c.outerHeight() < u.height() || G.overflowScroll === !1 ? p[b] = !1 : p[b] = !0 }), b && u.scrollTop(v) }

            function C(c, d) { var f = G.section;
                G.interstitialSection.length && (f += "," + G.interstitialSection), m = [], n = [], o = [], a(f).each(function(c) { var d = a(this);
                    c > 0 ? m[c] = parseInt(d.offset().top) + G.offset : m[c] = parseInt(d.offset().top), G.sectionName && d.data(G.sectionName) ? n[c] = "#" + d.data(G.sectionName).toString().replace(/ /g, "-") : d.is(G.interstitialSection) === !1 ? n[c] = "#" + (c + 1) : (n[c] = "#", c === a(f).length - 1 && c > 1 && (m[c] = m[c - 1] + (parseInt(a(a(f)[c - 1]).outerHeight()) - parseInt(a(b).height())) + parseInt(d.outerHeight()))), o[c] = d; try { a(n[c]).length && b.console && console.warn("Scrollify warning: Section names can't match IDs - this will cause the browser to anchor.") } catch (a) {} b.location.hash === n[c] && (q = c, t = !0) }), !0 === c && e(q, !1, !1, !1) }

            function E() { return !p[q] || (v = u.scrollTop(), !(v > parseInt(m[q]))) }

            function H() { return !p[q] || (v = u.scrollTop(), !(v < parseInt(m[q]) + (o[q].outerHeight() - u.height()) - 28)) } D = !0, a.easing.easeOutExpo = function(a, b, c, d, e) { return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c }, j = { handleMousedown: function() { return z === !0 || (w = !1, void(y = !1)) }, handleMouseup: function() { return z === !0 || (w = !0, void(y && j.calculateNearest(!1, !0))) }, handleScroll: function() { return z === !0 || (h && clearTimeout(h), void(h = setTimeout(function() { return y = !0, w !== !1 && (w = !1, void j.calculateNearest(!1, !0)) }, 200))) }, calculateNearest: function(a, b) { v = u.scrollTop(); for (var c, d = 1, f = m.length, g = 0, h = Math.abs(m[0] - v); d < f; d++) c = Math.abs(m[d] - v), c < h && (h = c, g = d);
                    (H() && g > q || E()) && (q = g, e(g, a, b, !1)) }, wheelHandler: function(c) { if (z === !0) return !0; if (G.standardScrollElements && (a(c.target).is(G.standardScrollElements) || a(c.target).closest(G.standardScrollElements).length)) return !0;
                    p[q] || c.preventDefault(); var d = (new Date).getTime();
                    c = c || b.event; var g = c.originalEvent.wheelDelta || -c.originalEvent.deltaY || -c.originalEvent.detail,
                        h = Math.max(-1, Math.min(1, g)); if (A.length > 149 && A.shift(), A.push(Math.abs(g)), d - B > 200 && (A = []), B = d, x) return !1; if (h < 0) { if (q < m.length - 1 && H()) { if (!f(A)) return !1;
                            c.preventDefault(), q++, x = !0, e(q, !1, !0, !1) } } else if (h > 0 && q > 0 && E()) { if (!f(A)) return !1;
                        c.preventDefault(), q--, x = !0, e(q, !1, !0, !1) } }, keyHandler: function(a) { return z === !0 || x !== !0 && void(38 == a.keyCode || 33 == a.keyCode ? q > 0 && E() && (a.preventDefault(), q--, e(q, !1, !0, !1)) : 40 != a.keyCode && 34 != a.keyCode || q < m.length - 1 && H() && (a.preventDefault(), q++, e(q, !1, !0, !1))) }, init: function() { G.scrollbars ? (u.on("mousedown", j.handleMousedown), u.on("mouseup", j.handleMouseup), u.on("scroll", j.handleScroll)) : a("body").css({ overflow: "hidden" }), u.on(F, j.wheelHandler), u.on("keydown", j.keyHandler) } }, k = { touches: { touchstart: { y: -1, x: -1 }, touchmove: { y: -1, x: -1 }, touchend: !1, direction: "undetermined" }, options: { distance: 30, timeGap: 800, timeStamp: (new Date).getTime() }, touchHandler: function(b) { if (z === !0) return !0; if (G.standardScrollElements && (a(b.target).is(G.standardScrollElements) || a(b.target).closest(G.standardScrollElements).length)) return !0; var c; if ("undefined" != typeof b && "undefined" != typeof b.touches) switch (c = b.touches[0], b.type) {
                        case "touchstart":
                            k.touches.touchstart.y = c.pageY, k.touches.touchmove.y = -1, k.touches.touchstart.x = c.pageX, k.touches.touchmove.x = -1, k.options.timeStamp = (new Date).getTime(), k.touches.touchend = !1;
                        case "touchmove":
                            k.touches.touchmove.y = c.pageY, k.touches.touchmove.x = c.pageX, k.touches.touchstart.y !== k.touches.touchmove.y && Math.abs(k.touches.touchstart.y - k.touches.touchmove.y) > Math.abs(k.touches.touchstart.x - k.touches.touchmove.x) && (b.preventDefault(), k.touches.direction = "y", k.options.timeStamp + k.options.timeGap < (new Date).getTime() && 0 == k.touches.touchend && (k.touches.touchend = !0, k.touches.touchstart.y > -1 && Math.abs(k.touches.touchmove.y - k.touches.touchstart.y) > k.options.distance && (k.touches.touchstart.y < k.touches.touchmove.y ? k.up() : k.down()))); break;
                        case "touchend":
                            k.touches[b.type] === !1 && (k.touches[b.type] = !0, k.touches.touchstart.y > -1 && k.touches.touchmove.y > -1 && "y" === k.touches.direction && (Math.abs(k.touches.touchmove.y - k.touches.touchstart.y) > k.options.distance && (k.touches.touchstart.y < k.touches.touchmove.y ? k.up() : k.down()), k.touches.touchstart.y = -1, k.touches.touchstart.x = -1, k.touches.direction = "undetermined")) } }, down: function() { q < m.length - 1 && (H() && q < m.length - 1 ? (q++, e(q, !1, !0, !1)) : Math.floor(o[q].height() / u.height()) > s ? (g(parseInt(m[q]) + u.height() * s), s += 1) : g(parseInt(m[q]) + (o[q].outerHeight() - u.height()))) }, up: function() { q >= 0 && (E() && q > 0 ? (q--, e(q, !1, !0, !1)) : s > 2 ? (s -= 1, g(parseInt(m[q]) + u.height() * s)) : (s = 1, g(parseInt(m[q])))) }, init: function() { c.addEventListener && G.touchScroll && (c.addEventListener("touchstart", k.touchHandler, !1), c.addEventListener("touchmove", k.touchHandler, !1), c.addEventListener("touchend", k.touchHandler, !1)) } }, l = { refresh: function(a, b) { clearTimeout(i), i = setTimeout(function() { r(!0), C(b, !1), a && G.afterResize() }, 400) }, handleUpdate: function() { l.refresh(!1, !1) }, handleResize: function() { l.refresh(!0, !1) }, handleOrientation: function() { l.refresh(!0, !0) } }, G = a.extend(G, d), r(!1), C(!1, !0), !0 === t ? e(q, !1, !0, !0) : setTimeout(function() { j.calculateNearest(!0, !1) }, 200), m.length && (j.init(), k.init(), u.on("resize", l.handleResize), c.addEventListener && b.addEventListener("orientationchange", l.handleOrientation, !1)) }; return H.move = function(b) { return b !== d && (b.originalEvent && (b = a(this).attr("href")), void g(b, !1)) }, H.instantMove = function(a) { return a !== d && void g(a, !0) }, H.next = function() { q < n.length && (q += 1, e(q, !1, !0, !0)) }, H.previous = function() { q > 0 && (q -= 1, e(q, !1, !0, !0)) }, H.instantNext = function() { q < n.length && (q += 1, e(q, !0, !0, !0)) }, H.instantPrevious = function() { q > 0 && (q -= 1, e(q, !0, !0, !0)) }, H.destroy = function() { return !!D && (G.setHeights && a(G.section).each(function() { a(this).css("height", "auto") }), u.off("resize", l.handleResize), G.scrollbars && (u.off("mousedown", j.handleMousedown), u.off("mouseup", j.handleMouseup), u.off("scroll", j.handleScroll)), u.off(F, j.wheelHandler), u.off("keydown", j.keyHandler), c.addEventListener && G.touchScroll && (c.removeEventListener("touchstart", k.touchHandler, !1), c.removeEventListener("touchmove", k.touchHandler, !1), c.removeEventListener("touchend", k.touchHandler, !1)), m = [], n = [], o = [], void(p = [])) }, H.update = function() { return !!D && void l.handleUpdate() }, H.current = function() { return o[q] }, H.disable = function() { z = !0 }, H.enable = function() { z = !1, D && j.calculateNearest(!1, !1) }, H.isDisabled = function() { return z }, H.setOptions = function(c) { return !!D && void("object" == typeof c ? (G = a.extend(G, c), l.handleUpdate()) : b.console && console.warn("Scrollify warning: setOptions expects an object.")) }, a.scrollify = H, H });
! function(e) { "use strict";
    e.fn.twittie = function() { var t = arguments[0] instanceof Object ? arguments[0] : {},
            a = "function" == typeof arguments[0] ? arguments[0] : arguments[1],
            r = e.extend({ username: null, list: null, hashtag: null, count: 10, hideReplies: !1, dateFormat: "%b/%d/%Y", template: "{{date}} - {{tweet}}", apiPath: "api/tweet.php", loadingText: "Loading..." }, t);
        r.list && !r.username && e.error("If you want to fetch tweets from a list, you must define the username of the list owner."); var n = function(e) { var t = e.replace(/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/gi, '<a href="$1" target="_blank" title="Visit this link">$1</a>').replace(/#([a-zA-Z0-9_]+)/g, '<a href="https://twitter.com/search?q=%23$1&amp;src=hash" target="_blank" title="Search for #$1">#$1</a>').replace(/@([a-zA-Z0-9_]+)/g, '<a href="https://twitter.com/$1" target="_blank" title="$1 on Twitter">@$1</a>'); return t },
            s = function(e) { var t = e.split(" ");
                e = new Date(Date.parse(t[1] + " " + t[2] + ", " + t[5] + " " + t[3] + " UTC")); for (var a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], n = { "%d": e.getDate(), "%m": e.getMonth() + 1, "%b": a[e.getMonth()].substr(0, 3), "%B": a[e.getMonth()], "%y": String(e.getFullYear()).slice(-2), "%Y": e.getFullYear() }, s = r.dateFormat, u = r.dateFormat.match(/%[dmbByY]/g), i = 0, l = u.length; l > i; i++) s = s.replace(u[i], n[u[i]]); return s },
            u = function(e) { for (var t = r.template, a = ["date", "tweet", "avatar", "url", "retweeted", "screen_name", "user_name"], n = 0, s = a.length; s > n; n++) t = t.replace(new RegExp("{{" + a[n] + "}}", "gi"), e[a[n]]); return t };
        this.html("<span>" + r.loadingText + "</span>"); var i = this;
        e.getJSON(r.apiPath, { username: r.username, list: r.list, hashtag: r.hashtag, count: r.count, exclude_replies: r.hideReplies }, function(e) { i.find("span").fadeOut("fast", function() { i.html("<ul></ul>"); for (var t = 0; t < r.count; t++) { var l = !1; if (e[t]) l = e[t];
                    else { if (void 0 === e.statuses || !e.statuses[t]) break;
                        l = e.statuses[t] } var o = { user_name: l.user.name, date: s(l.created_at), tweet: n(l.retweeted ? "RT @" + l.user.screen_name + ": " + l.retweeted_status.text : l.text), avatar: '<img src="' + l.user.profile_image_url + '" />', url: "https://twitter.com/" + l.user.screen_name + "/status/" + l.id_str, retweeted: l.retweeted, screen_name: n("@" + l.user.screen_name) };
                    i.find("ul").append("<li>" + u(o) + "</li>") } "function" == typeof a && a() }) }) } }(jQuery);
(function($) {
    $.fn.jflickrfeed = function(settings, callback) {
        settings = $.extend(true, { flickrbase: 'http://api.flickr.com/services/feeds/', feedapi: 'photos_public.gne', limit: 20, qstrings: { lang: 'en-us', format: 'json', jsoncallback: '?' }, cleanDescription: true, useTemplate: true, itemTemplate: '', itemCallback: function() {} }, settings);
        var url = settings.flickrbase + settings.feedapi + '?';
        var first = true;
        for (var key in settings.qstrings) {
            if (!first)
                url += '&';
            url += key + '=' + settings.qstrings[key];
            first = false;
        }
        return $(this).each(function() {
            var $container = $(this);
            var container = this;
            $.getJSON(url, function(data) {
                $.each(data.items, function(i, item) {
                    if (i < settings.limit) {
                        if (settings.cleanDescription) {
                            var regex = /<p>(.*?)<\/p>/g;
                            var input = item.description;
                            if (regex.test(input)) {
                                item.description = input.match(regex)[2]
                                if (item.description != undefined)
                                    item.description = item.description.replace('<p>', '').replace('</p>', '');
                            }
                        }
                        item['image_s'] = item.media.m.replace('_m', '_s');
                        item['image_t'] = item.media.m.replace('_m', '_t');
                        item['image_m'] = item.media.m.replace('_m', '_m');
                        item['image'] = item.media.m.replace('_m', '');
                        item['image_b'] = item.media.m.replace('_m', '_b');
                        delete item.media;
                        if (settings.useTemplate) {
                            var template = settings.itemTemplate;
                            for (var key in item) { var rgx = new RegExp('{{' + key + '}}', 'g');
                                template = template.replace(rgx, item[key]); }
                            $container.append(template)
                        }
                        settings.itemCallback.call(container, item);
                    }
                });
                if ($.isFunction(callback)) { callback.call(container, data); }
            });
        });
    }
})(jQuery);
(function(e) {
    function t(e, t) { return e.toFixed(t.decimals) } e.fn.countTo = function(t) { t = t || {}; return e(this).each(function() {
            function l() { a += i;
                u++;
                c(a); if (typeof n.onUpdate == "function") { n.onUpdate.call(s, a) } if (u >= r) { o.removeData("countTo");
                    clearInterval(f.interval);
                    a = n.to; if (typeof n.onComplete == "function") { n.onComplete.call(s, a) } } }

            function c(e) { var t = n.formatter.call(s, e, n);
                o.text(t) } var n = e.extend({}, e.fn.countTo.defaults, { from: e(this).data("from"), to: e(this).data("to"), speed: e(this).data("speed"), refreshInterval: e(this).data("refresh-interval"), decimals: e(this).data("decimals") }, t); var r = Math.ceil(n.speed / n.refreshInterval),
                i = (n.to - n.from) / r; var s = this,
                o = e(this),
                u = 0,
                a = n.from,
                f = o.data("countTo") || {};
            o.data("countTo", f); if (f.interval) { clearInterval(f.interval) } f.interval = setInterval(l, n.refreshInterval);
            c(a) }) };
    e.fn.countTo.defaults = { from: 0, to: 0, speed: 1e3, refreshInterval: 100, decimals: 0, formatter: t, onUpdate: null, onComplete: null } })(jQuery); /*!Morphext - v2.4.7 - 2016-11-04*/
! function(a) { "use strict";

    function b(b, c) { this.element = a(b), this.settings = a.extend({}, d, c), this._defaults = d, this._init() } var c = "Morphext",
        d = { animation: "bounceIn", separator: ",", speed: 2e3, complete: a.noop };
    b.prototype = { _init: function() { var b = this;
            this.phrases = [], this.element.addClass("morphext"), a.each(this.element.text().split(this.settings.separator), function(c, d) { b.phrases.push(a.trim(d)) }), this.index = -1, this.animate(), this.start() }, animate: function() { this.index = ++this.index % this.phrases.length, this.element[0].innerHTML = '<span class="animated ' + this.settings.animation + '">' + this.phrases[this.index] + "</span>", a.isFunction(this.settings.complete) && this.settings.complete.call(this) }, start: function() { var a = this;
            this._interval = setInterval(function() { a.animate() }, this.settings.speed) }, stop: function() { this._interval = clearInterval(this._interval) } }, a.fn[c] = function(d) { return this.each(function() { a.data(this, "plugin_" + c) || a.data(this, "plugin_" + c, new b(this, d)) }) } }(jQuery);
"function" != typeof Object.create && (Object.create = function(t) {
        function e() {} return e.prototype = t, new e }),
    function(t, e, s, a) { var i = { API_URL: "https://api.instagram.com/v1", initialize: function(e, s) { this.elem = s, this.$elem = t(s), this.accessToken = t.fn.spectragram.accessData.accessToken, this.options = t.extend({}, t.fn.spectragram.options, e), this.endpoints = this.setEndpoints(), this.messages = { defaultImageAltText: "Instagram Photo related with " + this.options.query, notFound: "This user account is private or doesn't have any photos." } }, setEndpoints: function() { return { usersSelf: "/users/self/?access_token=" + this.accessToken, usersMediaRecent: "/users/self/media/recent/?&count=" + this.options.max + "&access_token=" + this.accessToken, tagsMediaRecent: "/tags/" + this.options.query + "/media/recent?&count=" + this.options.max + "&access_token=" + this.accessToken } }, getPhotos: function(e) { var s = this;
                s.fetch(e).done(function(e) { var a = s.options.query || "User";
                    e.data.length ? s.display(e) : t.error("Spectragram.js - Error: " + a + " does not have photos.") }) }, getUserFeed: function() { this.getPhotos(this.endpoints.usersMediaRecent) }, getRecentTagged: function() { this.getPhotos(this.endpoints.tagsMediaRecent) }, fetch: function(e) { var s = this.API_URL + e; return t.ajax({ type: "GET", dataType: "jsonp", cache: !1, url: s }) }, display: function(e) { var s, a, i, n, o, r, c, h, d, p = []; if (i = 0 === t(this.options.wrapEachWith).length, void 0 === e.data || 200 !== e.meta.code || 0 === e.data.length) i ? this.$elem.append(this.messages.notFound) : this.$elem.append(t(this.options.wrapEachWith).append(this.messages.notFound));
                else { c = this.options.max >= e.data.length ? e.data.length : this.options.max, h = this.options.size; for (var u = 0; u < c; u++) "small" === h ? (d = e.data[u].images.thumbnail.url, o = e.data[u].images.thumbnail.height, r = e.data[u].images.thumbnail.width) : "medium" === h ? (d = e.data[u].images.low_resolution.url, o = e.data[u].images.low_resolution.height, r = e.data[u].images.low_resolution.width) : (d = e.data[u].images.standard_resolution.url, o = e.data[u].images.standard_resolution.height, r = e.data[u].images.standard_resolution.width), n = null !== e.data[u].caption ? t("<span>").text(e.data[u].caption.text).html() : this.messages.defaultImageAltText, a = t("<img>", { alt: n, attr: { height: o, width: r }, src: d }), s = t("<a>", { href: e.data[u].link, target: "_blank", title: n }).append(a), i ? p.push(s) : p.push(t(this.options.wrapEachWith).append(s));
                    this.$elem.append(p) } "function" == typeof this.options.complete && this.options.complete.call(this) } };
        jQuery.fn.spectragram = function(e, s) { jQuery.fn.spectragram.accessData.accessToken ? this.each(function() { var a = Object.create(i); if (a.initialize(s, this), a[e]) return a[e](this);
                t.error("Method " + e + " does not exist on jQuery.spectragram") }) : t.error("You must define an accessToken on jQuery.spectragram") }, jQuery.fn.spectragram.options = { complete: null, max: 20, query: "instagram", size: "medium", wrapEachWith: "<li></li>" }, jQuery.fn.spectragram.accessData = { accessToken: null } }(jQuery, window, document);
! function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) { var b = function(a, b) { var c, d = document.createElement("canvas");
            a.appendChild(d), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d); var e = d.getContext("2d");
            d.width = d.height = b.size; var f = 1;
            window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-0.5 + b.rotate / 180) * Math.PI); var g = (b.size - b.lineWidth) / 2;
            b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function() { return +new Date }; var h = function(a, b, c) { c = Math.min(Math.max(-1, c || 0), 1); var d = 0 >= c ? !0 : !1;
                    e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke() },
                i = function() { var a, c;
                    e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save(); for (var d = 24; d > 0; --d) d % 6 === 0 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
                    e.restore() },
                j = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) { window.setTimeout(a, 1e3 / 60) } }(),
                k = function() { b.scaleColor && i(), b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1) };
            this.getCanvas = function() { return d }, this.getCtx = function() { return e }, this.clear = function() { e.clearRect(b.size / -2, b.size / -2, b.size, b.size) }, this.draw = function(a) { b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap; var d;
                d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, h(d, b.lineWidth, a / 100) }.bind(this), this.animate = function(a, c) { var d = Date.now();
                b.onStart(a, c); var e = function() { var f = Math.min(Date.now() - d, b.animate.duration),
                        g = b.easing(this, f, a, c - a, b.animate.duration);
                    this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e) }.bind(this);
                j(e) }.bind(this) },
        c = function(a, c) { var d = { barColor: "#ef1e25", trackColor: "#f9f9f9", scaleColor: "#dfe0e0", scaleLength: 5, lineCap: "round", lineWidth: 3, trackWidth: void 0, size: 110, rotate: 0, animate: { duration: 1e3, enabled: !0 }, easing: function(a, b, c, d, e) { return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c }, onStart: function(a, b) {}, onStep: function(a, b, c) {}, onStop: function(a, b) {} }; if ("undefined" != typeof b) d.renderer = b;
            else { if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                d.renderer = SVGRenderer } var e = {},
                f = 0,
                g = function() { this.el = a, this.options = e; for (var b in d) d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this))); "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? e.easing = jQuery.easing[e.easing] : e.easing = d.easing, "number" == typeof e.animate && (e.animate = { duration: e.animate, enabled: !0 }), "boolean" != typeof e.animate || e.animate || (e.animate = { duration: 1e3, enabled: e.animate }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent"))) }.bind(this);
            this.update = function(a) { return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this }.bind(this), this.disableAnimation = function() { return e.animate.enabled = !1, this }, this.enableAnimation = function() { return e.animate.enabled = !0, this }, g() };
    a.fn.easyPieChart = function(b) { return this.each(function() { var d;
            a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d))) }) } });
/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 */
! function(a) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery) }(function(a) { "use strict";

    function b(a) { if (a instanceof Date) return a; if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a); throw new Error("Couldn't cast `" + a + "` to a date object.") }

    function c(a) { var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"); return new RegExp(b) }

    function d(a) { return function(b) { var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi); if (d)
                for (var f = 0, g = d.length; f < g; ++f) { var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        j = c(h[0]),
                        k = h[1] || "",
                        l = h[3] || "",
                        m = null;
                    h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && m < 10 && (m = "0" + m.toString()), b = b.replace(j, m.toString())) }
            return b = b.replace(/%%/, "%") } }

    function e(a, b) { var c = "s",
            d = ""; return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), Math.abs(b) > 1 ? c : d } var f = [],
        g = [],
        h = { precision: 100, elapse: !1, defer: !1 };
    g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|")); var i = { Y: "years", m: "months", n: "daysToMonth", d: "daysToWeek", w: "weeks", W: "weeksToMonth", H: "hours", M: "minutes", S: "seconds", D: "totalDays", I: "totalHours", N: "totalMinutes", T: "totalSeconds" },
        j = function(b, c, d) { this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.firstTick = !0, this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.options.defer === !1 && this.start() };
    a.extend(j.prototype, { start: function() { null !== this.interval && clearInterval(this.interval); var a = this;
            this.update(), this.interval = setInterval(function() { a.update.call(a) }, this.options.precision) }, stop: function() { clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped") }, toggle: function() { this.interval ? this.stop() : this.start() }, pause: function() { this.stop() }, resume: function() { this.start() }, remove: function() { this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance }, setFinalDate: function(a) { this.finalDate = b(a) }, update: function() { if (0 === this.$el.closest("html").length) return void this.remove(); var a, b = new Date; return a = this.finalDate.getTime() - b.getTime(), a = Math.ceil(a / 1e3), a = !this.options.elapse && a < 0 ? 0 : Math.abs(a), this.totalSecsLeft === a || this.firstTick ? void(this.firstTick = !1) : (this.totalSecsLeft = a, this.elapsed = b >= this.finalDate, this.offset = { seconds: this.totalSecsLeft % 60, minutes: Math.floor(this.totalSecsLeft / 60) % 60, hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24, days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368), weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7), weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4, months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368), years: Math.abs(this.finalDate.getFullYear() - b.getFullYear()), totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24), totalHours: Math.floor(this.totalSecsLeft / 60 / 60), totalMinutes: Math.floor(this.totalSecsLeft / 60), totalSeconds: this.totalSecsLeft }, void(this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))) }, dispatchEvent: function(b) { var c = a.Event(b + ".countdown");
            c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c) } }), a.fn.countdown = function() { var b = Array.prototype.slice.call(arguments, 0); return this.each(function() { var c = a(this).data("countdown-instance"); if (void 0 !== c) { var d = f[c],
                    e = b[0];
                j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e)) } else new j(this, b[0], b[1]) }) } });
/*!
--------------------------------
Infinite Scroll
--------------------------------
+ https://github.com/paulirish/infinite-scroll
+ version 2.1.0
+ Copyright 2011/12 Paul Irish & Luke Shumard
+ Licensed under the MIT license
+ Documentation: http://infinite-scroll.com/
*/
(function(e, t, n) { "use strict";
    t.infinitescroll = function(n, r, i) { this.element = t(i); if (!this._create(n, r)) { this.failed = true } };
    t.infinitescroll.defaults = { loading: { finished: n, finishedMsg: "<em>Congratulations, you've reached the end of the internet.44</em>", img: "", msg: null, msgText: "<em>Loading the next set of posts...</em>", selector: null, speed: "fast", start: n }, state: { isDuringAjax: false, isInvalidPage: false, isDestroyed: false, isDone: false, isPaused: false, isBeyondMaxPage: false, currPage: 1 }, debug: false, behavior: n, binder: t(e), nextSelector: "div.navigation a:first", navSelector: "div.navigation", contentSelector: null, extraScrollPx: 150, itemSelector: "div.post", animate: false, pathParse: n, dataType: "html", appendCallback: true, bufferPx: 40, errorCallback: function() {}, infid: 0, pixelsFromNavToBottom: n, path: n, prefill: false, maxPage: n };
    t.infinitescroll.prototype = { _binding: function(t) { var r = this,
                i = r.options;
            i.v = "2.0b2.120520"; if (!!i.behavior && this["_binding_" + i.behavior] !== n) { this["_binding_" + i.behavior].call(this); return } if (t !== "bind" && t !== "unbind") { this._debug("Binding value  " + t + " not valid"); return false } if (t === "unbind") { this.options.binder.unbind("smartscroll.infscr." + r.options.infid) } else { this.options.binder[t]("smartscroll.infscr." + r.options.infid, function() { r.scroll() }) } this._debug("Binding", t) }, _create: function(i, s) { var o = t.extend(true, {}, t.infinitescroll.defaults, i);
            this.options = o; var u = t(e); var a = this; if (!a._validate(i)) { return false } var f = t(o.nextSelector).attr("href"); if (!f) { this._debug("Navigation selector not found"); return false } o.path = o.path || this._determinepath(f);
            o.contentSelector = o.contentSelector || this.element;
            o.loading.selector = o.loading.selector || o.contentSelector;
            o.loading.msg = o.loading.msg || t('<div id="infscr-loading"><img alt="Loading..." src="' + o.loading.img + '" /><div>' + o.loading.msgText + "</div></div>");
            (new Image).src = o.loading.img; if (o.pixelsFromNavToBottom === n) { o.pixelsFromNavToBottom = t(document).height() - t(o.navSelector).offset().top;
                this._debug("pixelsFromNavToBottom: " + o.pixelsFromNavToBottom) } var l = this;
            o.loading.start = o.loading.start || function() { t(o.navSelector).hide();
                o.loading.msg.appendTo(o.loading.selector).show(o.loading.speed, t.proxy(function() { this.beginAjax(o) }, l)) };
            o.loading.finished = o.loading.finished || function() { if (!o.state.isBeyondMaxPage) o.loading.msg.fadeOut(o.loading.speed) };
            o.callback = function(e, r, i) { if (!!o.behavior && e["_callback_" + o.behavior] !== n) { e["_callback_" + o.behavior].call(t(o.contentSelector)[0], r, i) } if (s) { s.call(t(o.contentSelector)[0], r, o, i) } if (o.prefill) { u.bind("resize.infinite-scroll", e._prefill) } }; if (i.debug) { if (Function.prototype.bind && (typeof console === "object" || typeof console === "function") && typeof console.log === "object") {
                    ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(e) { console[e] = this.call(console[e], console) }, Function.prototype.bind) } } this._setup(); if (o.prefill) { this._prefill() } return true }, _prefill: function() {
            function s() { return r.options.contentSelector.height() <= i.height() } var r = this; var i = t(e);
            this._prefill = function() { if (s()) { r.scroll() } i.bind("resize.infinite-scroll", function() { if (s()) { i.unbind("resize.infinite-scroll");
                        r.scroll() } }) };
            this._prefill() }, _debug: function() { if (true !== this.options.debug) { return } if (typeof console !== "undefined" && typeof console.log === "function") { if (Array.prototype.slice.call(arguments).length === 1 && typeof Array.prototype.slice.call(arguments)[0] === "string") { console.log(Array.prototype.slice.call(arguments).toString()) } else { console.log(Array.prototype.slice.call(arguments)) } } else if (!Function.prototype.bind && typeof console !== "undefined" && typeof console.log === "object") { Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments)) } }, _determinepath: function(t) { var r = this.options; if (!!r.behavior && this["_determinepath_" + r.behavior] !== n) { return this["_determinepath_" + r.behavior].call(this, t) } if (!!r.pathParse) { this._debug("pathParse manual"); return r.pathParse(t, this.options.state.currPage + 1) } else if (t.match(/^(.*?)\b2\b(.*?$)/)) { t = t.match(/^(.*?)\b2\b(.*?$)/).slice(1) } else if (t.match(/^(.*?)2(.*?$)/)) { if (t.match(/^(.*?page=)2(\/.*|$)/)) { t = t.match(/^(.*?page=)2(\/.*|$)/).slice(1); return t } t = t.match(/^(.*?)2(.*?$)/).slice(1) } else { if (t.match(/^(.*?page=)1(\/.*|$)/)) { t = t.match(/^(.*?page=)1(\/.*|$)/).slice(1); return t } else { this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
                    r.state.isInvalidPage = true } } this._debug("determinePath", t); return t }, _error: function(t) { var r = this.options; if (!!r.behavior && this["_error_" + r.behavior] !== n) { this["_error_" + r.behavior].call(this, t); return } if (t !== "destroy" && t !== "end") { t = "unknown" } this._debug("Error", t); if (t === "end" || r.state.isBeyondMaxPage) { this._showdonemsg() } r.state.isDone = true;
            r.state.currPage = 1;
            r.state.isPaused = false;
            r.state.isBeyondMaxPage = false;
            this._binding("unbind") }, _loadcallback: function(i, s, o) { var u = this.options,
                a = this.options.callback,
                f = u.state.isDone ? "done" : !u.appendCallback ? "no-append" : "append",
                l; if (!!u.behavior && this["_loadcallback_" + u.behavior] !== n) { this["_loadcallback_" + u.behavior].call(this, i, s); return } switch (f) {
                case "done":
                    this._showdonemsg(); return false;
                case "no-append":
                    if (u.dataType === "html") { s = "<div>" + s + "</div>";
                        s = t(s).find(u.itemSelector) } break;
                case "append":
                    var c = i.children(); if (c.length === 0) { return this._error("end") } l = document.createDocumentFragment(); while (i[0].firstChild) { l.appendChild(i[0].firstChild) } this._debug("contentSelector", t(u.contentSelector)[0]);
                    t(u.contentSelector)[0].appendChild(l);
                    s = c.get(); break } u.loading.finished.call(t(u.contentSelector)[0], u); if (u.animate) { var h = t(e).scrollTop() + t(u.loading.msg).height() + u.extraScrollPx + "px";
                t("html,body").animate({ scrollTop: h }, 800, function() { u.state.isDuringAjax = false }) } if (!u.animate) { u.state.isDuringAjax = false } a(this, s, o); if (u.prefill) { this._prefill() } }, _nearbottom: function() { var i = this.options,
                s = 0 + t(document).height() - i.binder.scrollTop() - t(e).height(); if (!!i.behavior && this["_nearbottom_" + i.behavior] !== n) { return this["_nearbottom_" + i.behavior].call(this) } this._debug("math:", s, i.pixelsFromNavToBottom); return s - i.bufferPx < i.pixelsFromNavToBottom }, _pausing: function(t) { var r = this.options; if (!!r.behavior && this["_pausing_" + r.behavior] !== n) { this["_pausing_" + r.behavior].call(this, t); return } if (t !== "pause" && t !== "resume" && t !== null) { this._debug("Invalid argument. Toggling pause value instead") } t = t && (t === "pause" || t === "resume") ? t : "toggle"; switch (t) {
                case "pause":
                    r.state.isPaused = true; break;
                case "resume":
                    r.state.isPaused = false; break;
                case "toggle":
                    r.state.isPaused = !r.state.isPaused; break } this._debug("Paused", r.state.isPaused); return false }, _setup: function() { var t = this.options; if (!!t.behavior && this["_setup_" + t.behavior] !== n) { this["_setup_" + t.behavior].call(this); return } this._binding("bind"); return false }, _showdonemsg: function() { var r = this.options; if (!!r.behavior && this["_showdonemsg_" + r.behavior] !== n) { this["_showdonemsg_" + r.behavior].call(this); return } r.loading.msg.find("img").hide().parent().find("div").html(r.loading.finishedMsg).animate({ opacity: 1 }, 2e3, function() { t(this).parent().fadeOut(r.loading.speed) });
            r.errorCallback.call(t(r.contentSelector)[0], "done") }, _validate: function(n) { for (var r in n) { if (r.indexOf && r.indexOf("Selector") > -1 && t(n[r]).length === 0) { this._debug("Your " + r + " found no elements."); return false } } return true }, bind: function() { this._binding("bind") }, destroy: function() { this.options.state.isDestroyed = true;
            this.options.loading.finished(); return this._error("destroy") }, pause: function() { this._pausing("pause") }, resume: function() { this._pausing("resume") }, beginAjax: function(r) { var i = this,
                s = r.path,
                o, u, a, f;
            r.state.currPage++; if (r.maxPage != n && r.state.currPage > r.maxPage) { r.state.isBeyondMaxPage = true;
                this.destroy(); return } o = t(r.contentSelector).is("table, tbody") ? t("<tbody/>") : t("<div/>");
            u = typeof s === "function" ? s(r.state.currPage) : s.join(r.state.currPage);
            i._debug("heading into ajax", u);
            a = r.dataType === "html" || r.dataType === "json" ? r.dataType : "html+callback"; if (r.appendCallback && r.dataType === "html") { a += "+callback" } switch (a) {
                case "html+callback":
                    i._debug("Using HTML via .load() method");
                    o.load(u + " " + r.itemSelector, n, function(t) { i._loadcallback(o, t, u) }); break;
                case "html":
                    i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
                    t.ajax({ url: u, dataType: r.dataType, complete: function(t, n) { f = typeof t.isResolved !== "undefined" ? t.isResolved() : n === "success" || n === "notmodified"; if (f) { i._loadcallback(o, t.responseText, u) } else { i._error("end") } } }); break;
                case "json":
                    i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
                    t.ajax({ dataType: "json", type: "GET", url: u, success: function(e, t, s) { f = typeof s.isResolved !== "undefined" ? s.isResolved() : t === "success" || t === "notmodified"; if (r.appendCallback) { if (r.template !== n) { var a = r.template(e);
                                    o.append(a); if (f) { i._loadcallback(o, a) } else { i._error("end") } } else { i._debug("template must be defined.");
                                    i._error("end") } } else { if (f) { i._loadcallback(o, e, u) } else { i._error("end") } } }, error: function() { i._debug("JSON ajax request failed.");
                            i._error("end") } }); break } }, retrieve: function(r) { r = r || null; var i = this,
                s = i.options; if (!!s.behavior && this["retrieve_" + s.behavior] !== n) { this["retrieve_" + s.behavior].call(this, r); return } if (s.state.isDestroyed) { this._debug("Instance is destroyed"); return false } s.state.isDuringAjax = true;
            s.loading.start.call(t(s.contentSelector)[0], s) }, scroll: function() { var t = this.options,
                r = t.state; if (!!t.behavior && this["scroll_" + t.behavior] !== n) { this["scroll_" + t.behavior].call(this); return } if (r.isDuringAjax || r.isInvalidPage || r.isDone || r.isDestroyed || r.isPaused) { return } if (!this._nearbottom()) { return } this.retrieve() }, toggle: function() { this._pausing() }, unbind: function() { this._binding("unbind") }, update: function(n) { if (t.isPlainObject(n)) { this.options = t.extend(true, this.options, n) } } };
    t.fn.infinitescroll = function(n, r) { var i = typeof n; switch (i) {
            case "string":
                var s = Array.prototype.slice.call(arguments, 1);
                this.each(function() { var e = t.data(this, "infinitescroll"); if (!e) { return false } if (!t.isFunction(e[n]) || n.charAt(0) === "_") { return false } e[n].apply(e, s) }); break;
            case "object":
                this.each(function() { var e = t.data(this, "infinitescroll"); if (e) { e.update(n) } else { e = new t.infinitescroll(n, r, this); if (!e.failed) { t.data(this, "infinitescroll", e) } } }); break } return this }; var r = t.event,
        i;
    r.special.smartscroll = { setup: function() { t(this).bind("scroll", r.special.smartscroll.handler) }, teardown: function() { t(this).unbind("scroll", r.special.smartscroll.handler) }, handler: function(e, n) { var r = this,
                s = arguments;
            e.type = "smartscroll"; if (i) { clearTimeout(i) } i = setTimeout(function() { t(r).trigger("smartscroll", s) }, n === "execAsap" ? 0 : 100) } };
    t.fn.smartscroll = function(e) { return e ? this.bind("smartscroll", e) : this.trigger("smartscroll", ["execAsap"]) } })(window, jQuery);
! function(e) { e.fn.hover3d = function(t) { var r = e.extend({ selector: null, perspective: 1e3, sensitivity: 20, invert: !1, shine: !1, hoverInClass: "hover-in", hoverOutClass: "hover-out", hoverClass: "hover-3d" }, t); return this.each(function() {
            function t(e) { i.addClass(r.hoverInClass + " " + r.hoverClass), currentX = currentY = 0, setTimeout(function() { i.removeClass(r.hoverInClass) }, 1e3) }

            function s(e) { var t = i.innerWidth(),
                    s = i.innerHeight(),
                    n = Math.round(e.pageX - i.offset().left),
                    o = Math.round(e.pageY - i.offset().top),
                    v = r.invert ? (t / 2 - n) / r.sensitivity : -(t / 2 - n) / r.sensitivity,
                    c = r.invert ? -(s / 2 - o) / r.sensitivity : (s / 2 - o) / r.sensitivity,
                    u = n - t / 2,
                    p = o - s / 2,
                    f = Math.atan2(p, u),
                    h = 180 * f / Math.PI - 90;
                0 > h && (h += 360), i.css({ perspective: r.perspective + "px", transformStyle: "preserve-3d", transform: "rotateY(" + v + "deg) rotateX(" + c + "deg)" }), a.css("background", "linear-gradient(" + h + "deg, rgba(255,255,255," + e.offsetY / s * .5 + ") 0%,rgba(255,255,255,0) 80%)") }

            function n() { i.addClass(r.hoverOutClass + " " + r.hoverClass), i.css({ perspective: r.perspective + "px", transformStyle: "preserve-3d", transform: "rotateX(0) rotateY(0)" }), setTimeout(function() { i.removeClass(r.hoverOutClass + " " + r.hoverClass), currentX = currentY = 0 }, 1e3) } var o = e(this),
                i = o.find(r.selector);
            currentX = 0, currentY = 0, r.shine && i.append('<div class="shine"></div>'); var a = e(this).find(".shine");
            o.css({ perspective: r.perspective + "px", transformStyle: "preserve-3d" }), i.css({ perspective: r.perspective + "px", transformStyle: "preserve-3d" }), a.css({ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, transform: "translateZ(1px)", "z-index": 9 }), o.on("mouseenter", function() { return t() }), o.on("mousemove", function(e) { return s(e) }), o.on("mouseleave", function() { return n() }) }) } }(jQuery);
(function() { var t = [].slice;! function(e, i) { "use strict"; var n; return n = function() {
            function t(t, i) { null == i && (i = {}), this.$element = e(t), this.options = e.extend({}, e.fn.bootstrapSwitch.defaults, { state: this.$element.is(":checked"), size: this.$element.data("size"), animate: this.$element.data("animate"), disabled: this.$element.is(":disabled"), readonly: this.$element.is("[readonly]"), indeterminate: this.$element.data("indeterminate"), inverse: this.$element.data("inverse"), radioAllOff: this.$element.data("radio-all-off"), onColor: this.$element.data("on-color"), offColor: this.$element.data("off-color"), onText: this.$element.data("on-text"), offText: this.$element.data("off-text"), labelText: this.$element.data("label-text"), handleWidth: this.$element.data("handle-width"), labelWidth: this.$element.data("label-width"), baseClass: this.$element.data("base-class"), wrapperClass: this.$element.data("wrapper-class") }, i), this.$wrapper = e("<div>", { "class": function(t) { return function() { var e; return e = ["" + t.options.baseClass].concat(t._getClasses(t.options.wrapperClass)), e.push(t.options.state ? "" + t.options.baseClass + "-on" : "" + t.options.baseClass + "-off"), null != t.options.size && e.push("" + t.options.baseClass + "-" + t.options.size), t.options.disabled && e.push("" + t.options.baseClass + "-disabled"), t.options.readonly && e.push("" + t.options.baseClass + "-readonly"), t.options.indeterminate && e.push("" + t.options.baseClass + "-indeterminate"), t.options.inverse && e.push("" + t.options.baseClass + "-inverse"), t.$element.attr("id") && e.push("" + t.options.baseClass + "-id-" + t.$element.attr("id")), e.join(" ") } }(this)() }), this.$container = e("<div>", { "class": "" + this.options.baseClass + "-container" }), this.$on = e("<span>", { html: this.options.onText, "class": "" + this.options.baseClass + "-handle-on " + this.options.baseClass + "-" + this.options.onColor }), this.$off = e("<span>", { html: this.options.offText, "class": "" + this.options.baseClass + "-handle-off " + this.options.baseClass + "-" + this.options.offColor }), this.$label = e("<span>", { html: this.options.labelText, "class": "" + this.options.baseClass + "-label" }), this.$element.on("init.bootstrapSwitch", function(e) { return function() { return e.options.onInit.apply(t, arguments) } }(this)), this.$element.on("switchChange.bootstrapSwitch", function(e) { return function() { return e.options.onSwitchChange.apply(t, arguments) } }(this)), this.$container = this.$element.wrap(this.$container).parent(), this.$wrapper = this.$container.wrap(this.$wrapper).parent(), this.$element.before(this.options.inverse ? this.$off : this.$on).before(this.$label).before(this.options.inverse ? this.$on : this.$off), this.options.indeterminate && this.$element.prop("indeterminate", !0), this._init(), this._elementHandlers(), this._handleHandlers(), this._labelHandlers(), this._formHandler(), this._externalLabelHandler(), this.$element.trigger("init.bootstrapSwitch") } return t.prototype._constructor = t, t.prototype.state = function(t, e) { return "undefined" == typeof t ? this.options.state : this.options.disabled || this.options.readonly ? this.$element : this.options.state && !this.options.radioAllOff && this.$element.is(":radio") ? this.$element : (this.options.indeterminate && this.indeterminate(!1), t = !!t, this.$element.prop("checked", t).trigger("change.bootstrapSwitch", e), this.$element) }, t.prototype.toggleState = function(t) { return this.options.disabled || this.options.readonly ? this.$element : this.options.indeterminate ? (this.indeterminate(!1), this.state(!0)) : this.$element.prop("checked", !this.options.state).trigger("change.bootstrapSwitch", t) }, t.prototype.size = function(t) { return "undefined" == typeof t ? this.options.size : (null != this.options.size && this.$wrapper.removeClass("" + this.options.baseClass + "-" + this.options.size), t && this.$wrapper.addClass("" + this.options.baseClass + "-" + t), this._width(), this._containerPosition(), this.options.size = t, this.$element) }, t.prototype.animate = function(t) { return "undefined" == typeof t ? this.options.animate : (t = !!t, t === this.options.animate ? this.$element : this.toggleAnimate()) }, t.prototype.toggleAnimate = function() { return this.options.animate = !this.options.animate, this.$wrapper.toggleClass("" + this.options.baseClass + "-animate"), this.$element }, t.prototype.disabled = function(t) { return "undefined" == typeof t ? this.options.disabled : (t = !!t, t === this.options.disabled ? this.$element : this.toggleDisabled()) }, t.prototype.toggleDisabled = function() { return this.options.disabled = !this.options.disabled, this.$element.prop("disabled", this.options.disabled), this.$wrapper.toggleClass("" + this.options.baseClass + "-disabled"), this.$element }, t.prototype.readonly = function(t) { return "undefined" == typeof t ? this.options.readonly : (t = !!t, t === this.options.readonly ? this.$element : this.toggleReadonly()) }, t.prototype.toggleReadonly = function() { return this.options.readonly = !this.options.readonly, this.$element.prop("readonly", this.options.readonly), this.$wrapper.toggleClass("" + this.options.baseClass + "-readonly"), this.$element }, t.prototype.indeterminate = function(t) { return "undefined" == typeof t ? this.options.indeterminate : (t = !!t, t === this.options.indeterminate ? this.$element : this.toggleIndeterminate()) }, t.prototype.toggleIndeterminate = function() { return this.options.indeterminate = !this.options.indeterminate, this.$element.prop("indeterminate", this.options.indeterminate), this.$wrapper.toggleClass("" + this.options.baseClass + "-indeterminate"), this._containerPosition(), this.$element }, t.prototype.inverse = function(t) { return "undefined" == typeof t ? this.options.inverse : (t = !!t, t === this.options.inverse ? this.$element : this.toggleInverse()) }, t.prototype.toggleInverse = function() { var t, e; return this.$wrapper.toggleClass("" + this.options.baseClass + "-inverse"), e = this.$on.clone(!0), t = this.$off.clone(!0), this.$on.replaceWith(t), this.$off.replaceWith(e), this.$on = t, this.$off = e, this.options.inverse = !this.options.inverse, this.$element }, t.prototype.onColor = function(t) { var e; return e = this.options.onColor, "undefined" == typeof t ? e : (null != e && this.$on.removeClass("" + this.options.baseClass + "-" + e), this.$on.addClass("" + this.options.baseClass + "-" + t), this.options.onColor = t, this.$element) }, t.prototype.offColor = function(t) { var e; return e = this.options.offColor, "undefined" == typeof t ? e : (null != e && this.$off.removeClass("" + this.options.baseClass + "-" + e), this.$off.addClass("" + this.options.baseClass + "-" + t), this.options.offColor = t, this.$element) }, t.prototype.onText = function(t) { return "undefined" == typeof t ? this.options.onText : (this.$on.html(t), this._width(), this._containerPosition(), this.options.onText = t, this.$element) }, t.prototype.offText = function(t) { return "undefined" == typeof t ? this.options.offText : (this.$off.html(t), this._width(), this._containerPosition(), this.options.offText = t, this.$element) }, t.prototype.labelText = function(t) { return "undefined" == typeof t ? this.options.labelText : (this.$label.html(t), this._width(), this.options.labelText = t, this.$element) }, t.prototype.handleWidth = function(t) { return "undefined" == typeof t ? this.options.handleWidth : (this.options.handleWidth = t, this._width(), this._containerPosition(), this.$element) }, t.prototype.labelWidth = function(t) { return "undefined" == typeof t ? this.options.labelWidth : (this.options.labelWidth = t, this._width(), this._containerPosition(), this.$element) }, t.prototype.baseClass = function() { return this.options.baseClass }, t.prototype.wrapperClass = function(t) { return "undefined" == typeof t ? this.options.wrapperClass : (t || (t = e.fn.bootstrapSwitch.defaults.wrapperClass), this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(" ")), this.$wrapper.addClass(this._getClasses(t).join(" ")), this.options.wrapperClass = t, this.$element) }, t.prototype.radioAllOff = function(t) { return "undefined" == typeof t ? this.options.radioAllOff : (t = !!t, t === this.options.radioAllOff ? this.$element : (this.options.radioAllOff = t, this.$element)) }, t.prototype.onInit = function(t) { return "undefined" == typeof t ? this.options.onInit : (t || (t = e.fn.bootstrapSwitch.defaults.onInit), this.options.onInit = t, this.$element) }, t.prototype.onSwitchChange = function(t) { return "undefined" == typeof t ? this.options.onSwitchChange : (t || (t = e.fn.bootstrapSwitch.defaults.onSwitchChange), this.options.onSwitchChange = t, this.$element) }, t.prototype.destroy = function() { var t; return t = this.$element.closest("form"), t.length && t.off("reset.bootstrapSwitch").removeData("bootstrap-switch"), this.$container.children().not(this.$element).remove(), this.$element.unwrap().unwrap().off(".bootstrapSwitch").removeData("bootstrap-switch"), this.$element }, t.prototype._width = function() { var t, e; return t = this.$on.add(this.$off), t.add(this.$label).css("width", ""), e = "auto" === this.options.handleWidth ? Math.max(this.$on.width(), this.$off.width()) : this.options.handleWidth, t.width(e), this.$label.width(function(t) { return function(i, n) { return "auto" !== t.options.labelWidth ? t.options.labelWidth : e > n ? e : n } }(this)), this._handleWidth = this.$on.outerWidth(), this._labelWidth = this.$label.outerWidth(), this.$container.width(2 * this._handleWidth + this._labelWidth), this.$wrapper.width(this._handleWidth + this._labelWidth) }, t.prototype._containerPosition = function(t, e) { return null == t && (t = this.options.state), this.$container.css("margin-left", function(e) { return function() { var i; return i = [0, "-" + e._handleWidth + "px"], e.options.indeterminate ? "-" + e._handleWidth / 2 + "px" : t ? e.options.inverse ? i[1] : i[0] : e.options.inverse ? i[0] : i[1] } }(this)), e ? setTimeout(function() { return e() }, 50) : void 0 }, t.prototype._init = function() { var t, e; return t = function(t) { return function() { return t._width(), t._containerPosition(null, function() { return t.options.animate ? t.$wrapper.addClass("" + t.options.baseClass + "-animate") : void 0 }) } }(this), this.$wrapper.is(":visible") ? t() : e = i.setInterval(function(n) { return function() { return n.$wrapper.is(":visible") ? (t(), i.clearInterval(e)) : void 0 } }(this), 50) }, t.prototype._elementHandlers = function() { return this.$element.on({ "change.bootstrapSwitch": function(t) { return function(i, n) { var o; return i.preventDefault(), i.stopImmediatePropagation(), o = t.$element.is(":checked"), t._containerPosition(o), o !== t.options.state ? (t.options.state = o, t.$wrapper.toggleClass("" + t.options.baseClass + "-off").toggleClass("" + t.options.baseClass + "-on"), n ? void 0 : (t.$element.is(":radio") && e("[name='" + t.$element.attr("name") + "']").not(t.$element).prop("checked", !1).trigger("change.bootstrapSwitch", !0), t.$element.trigger("switchChange.bootstrapSwitch", [o]))) : void 0 } }(this), "focus.bootstrapSwitch": function(t) { return function(e) { return e.preventDefault(), t.$wrapper.addClass("" + t.options.baseClass + "-focused") } }(this), "blur.bootstrapSwitch": function(t) { return function(e) { return e.preventDefault(), t.$wrapper.removeClass("" + t.options.baseClass + "-focused") } }(this), "keydown.bootstrapSwitch": function(t) { return function(e) { if (e.which && !t.options.disabled && !t.options.readonly) switch (e.which) {
                                case 37:
                                    return e.preventDefault(), e.stopImmediatePropagation(), t.state(!1);
                                case 39:
                                    return e.preventDefault(), e.stopImmediatePropagation(), t.state(!0) } } }(this) }) }, t.prototype._handleHandlers = function() { return this.$on.on("click.bootstrapSwitch", function(t) { return function(e) { return e.preventDefault(), e.stopPropagation(), t.state(!1), t.$element.trigger("focus.bootstrapSwitch") } }(this)), this.$off.on("click.bootstrapSwitch", function(t) { return function(e) { return e.preventDefault(), e.stopPropagation(), t.state(!0), t.$element.trigger("focus.bootstrapSwitch") } }(this)) }, t.prototype._labelHandlers = function() { return this.$label.on({ "mousedown.bootstrapSwitch touchstart.bootstrapSwitch": function(t) { return function(e) { return t._dragStart || t.options.disabled || t.options.readonly ? void 0 : (e.preventDefault(), e.stopPropagation(), t._dragStart = (e.pageX || e.originalEvent.touches[0].pageX) - parseInt(t.$container.css("margin-left"), 10), t.options.animate && t.$wrapper.removeClass("" + t.options.baseClass + "-animate"), t.$element.trigger("focus.bootstrapSwitch")) } }(this), "mousemove.bootstrapSwitch touchmove.bootstrapSwitch": function(t) { return function(e) { var i; if (null != t._dragStart && (e.preventDefault(), i = (e.pageX || e.originalEvent.touches[0].pageX) - t._dragStart, !(i < -t._handleWidth || i > 0))) return t._dragEnd = i, t.$container.css("margin-left", "" + t._dragEnd + "px") } }(this), "mouseup.bootstrapSwitch touchend.bootstrapSwitch": function(t) { return function(e) { var i; if (t._dragStart) return e.preventDefault(), t.options.animate && t.$wrapper.addClass("" + t.options.baseClass + "-animate"), t._dragEnd ? (i = t._dragEnd > -(t._handleWidth / 2), t._dragEnd = !1, t.state(t.options.inverse ? !i : i)) : t.state(!t.options.state), t._dragStart = !1 } }(this), "mouseleave.bootstrapSwitch": function(t) { return function() { return t.$label.trigger("mouseup.bootstrapSwitch") } }(this) }) }, t.prototype._externalLabelHandler = function() { var t; return t = this.$element.closest("label"), t.on("click", function(e) { return function(i) { return i.preventDefault(), i.stopImmediatePropagation(), i.target === t[0] ? e.toggleState() : void 0 } }(this)) }, t.prototype._formHandler = function() { var t; return t = this.$element.closest("form"), t.data("bootstrap-switch") ? void 0 : t.on("reset.bootstrapSwitch", function() { return i.setTimeout(function() { return t.find("input").filter(function() { return e(this).data("bootstrap-switch") }).each(function() { return e(this).bootstrapSwitch("state", this.checked) }) }, 1) }).data("bootstrap-switch", !0) }, t.prototype._getClasses = function(t) { var i, n, o, s; if (!e.isArray(t)) return ["" + this.options.baseClass + "-" + t]; for (n = [], o = 0, s = t.length; s > o; o++) i = t[o], n.push("" + this.options.baseClass + "-" + i); return n }, t }(), e.fn.bootstrapSwitch = function() { var i, o, s; return o = arguments[0], i = 2 <= arguments.length ? t.call(arguments, 1) : [], s = this, this.each(function() { var t, a; return t = e(this), a = t.data("bootstrap-switch"), a || t.data("bootstrap-switch", a = new n(this, o)), "string" == typeof o ? s = a[o].apply(a, i) : void 0 }), s }, e.fn.bootstrapSwitch.Constructor = n, e.fn.bootstrapSwitch.defaults = { state: !0, size: null, animate: !0, disabled: !1, readonly: !1, indeterminate: !1, inverse: !1, radioAllOff: !1, onColor: "primary", offColor: "default", onText: "ON", offText: "OFF", labelText: "&nbsp;", handleWidth: "auto", labelWidth: "auto", baseClass: "bootstrap-switch", wrapperClass: "wrapper", onInit: function() {}, onSwitchChange: function() {} } }(window.jQuery, window) }).call(this);
! function(i) { i.fn.theiaStickySidebar = function(t) {
        function e(t, e) { var a = o(t, e);
            a || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), i(document).on("scroll." + t.namespace, function(t, e) { return function(a) { var n = o(t, e);
                    n && i(this).unbind(a) } }(t, e)), i(window).on("resize." + t.namespace, function(t, e) { return function(a) { var n = o(t, e);
                    n && i(this).unbind(a) } }(t, e))) }

        function o(t, e) { return t.initialized === !0 || !(i("body").width() < t.minWidth) && (a(t, e), !0) }

        function a(t, e) { t.initialized = !0; var o = i("#theia-sticky-sidebar-stylesheet-" + t.namespace);
            0 === o.length && i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-' + t.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), e.each(function() {
                function e() { a.fixedScrollTop = 0, a.sidebar.css({ "min-height": "1px" }), a.stickySidebar.css({ position: "static", width: "", transform: "none" }) }

                function o(t) { var e = t.height(); return t.children().each(function() { e = Math.max(e, i(this).height()) }), e } var a = {}; if (a.sidebar = i(this), a.options = t || {}, a.container = i(a.options.containerSelector), 0 == a.container.length && (a.container = a.sidebar.parent()), a.sidebar.parents().css("-webkit-transform", "none"), a.sidebar.css({ position: a.options.defaultPosition, overflow: "visible", "-webkit-box-sizing": "border-box", "-moz-box-sizing": "border-box", "box-sizing": "border-box" }), a.stickySidebar = a.sidebar.find(".theiaStickySidebar"), 0 == a.stickySidebar.length) { var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    a.sidebar.find("script").filter(function(i, t) { return 0 === t.type.length || t.type.match(s) }).remove(), a.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()), a.sidebar.append(a.stickySidebar) } a.marginBottom = parseInt(a.sidebar.css("margin-bottom")), a.paddingTop = parseInt(a.sidebar.css("padding-top")), a.paddingBottom = parseInt(a.sidebar.css("padding-bottom")); var r = a.stickySidebar.offset().top,
                    d = a.stickySidebar.outerHeight();
                a.stickySidebar.css("padding-top", 1), a.stickySidebar.css("padding-bottom", 1), r -= a.stickySidebar.offset().top, d = a.stickySidebar.outerHeight() - d - r, 0 == r ? (a.stickySidebar.css("padding-top", 0), a.stickySidebarPaddingTop = 0) : a.stickySidebarPaddingTop = 1, 0 == d ? (a.stickySidebar.css("padding-bottom", 0), a.stickySidebarPaddingBottom = 0) : a.stickySidebarPaddingBottom = 1, a.previousScrollTop = null, a.fixedScrollTop = 0, e(), a.onScroll = function(a) { if (a.stickySidebar.is(":visible")) { if (i("body").width() < a.options.minWidth) return void e(); if (a.options.disableOnResponsiveLayouts) { var s = a.sidebar.outerWidth("none" == a.sidebar.css("float")); if (s + 50 > a.container.width()) return void e() } var r = i(document).scrollTop(),
                            d = "static"; if (r >= a.sidebar.offset().top + (a.paddingTop - a.options.additionalMarginTop)) { var c, p = a.paddingTop + t.additionalMarginTop,
                                b = a.paddingBottom + a.marginBottom + t.additionalMarginBottom,
                                l = a.sidebar.offset().top,
                                f = a.sidebar.offset().top + o(a.container),
                                h = 0 + t.additionalMarginTop,
                                g = a.stickySidebar.outerHeight() + p + b < i(window).height();
                            c = g ? h + a.stickySidebar.outerHeight() : i(window).height() - a.marginBottom - a.paddingBottom - t.additionalMarginBottom; var u = l - r + a.paddingTop,
                                S = f - r - a.paddingBottom - a.marginBottom,
                                y = a.stickySidebar.offset().top - r,
                                m = a.previousScrollTop - r; "fixed" == a.stickySidebar.css("position") && "modern" == a.options.sidebarBehavior && (y += m), "stick-to-top" == a.options.sidebarBehavior && (y = t.additionalMarginTop), "stick-to-bottom" == a.options.sidebarBehavior && (y = c - a.stickySidebar.outerHeight()), y = m > 0 ? Math.min(y, h) : Math.max(y, c - a.stickySidebar.outerHeight()), y = Math.max(y, u), y = Math.min(y, S - a.stickySidebar.outerHeight()); var k = a.container.height() == a.stickySidebar.outerHeight();
                            d = (k || y != h) && (k || y != c - a.stickySidebar.outerHeight()) ? r + y - a.sidebar.offset().top - a.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed" } if ("fixed" == d) { var v = i(document).scrollLeft();
                            a.stickySidebar.css({ position: "fixed", width: n(a.stickySidebar) + "px", transform: "translateY(" + y + "px)", left: a.sidebar.offset().left + parseInt(a.sidebar.css("padding-left")) - v + "px", top: "0px" }) } else if ("absolute" == d) { var x = {}; "absolute" != a.stickySidebar.css("position") && (x.position = "absolute", x.transform = "translateY(" + (r + y - a.sidebar.offset().top - a.stickySidebarPaddingTop - a.stickySidebarPaddingBottom) + "px)", x.top = "0px"), x.width = n(a.stickySidebar) + "px", x.left = "", a.stickySidebar.css(x) } else "static" == d && e(); "static" != d && 1 == a.options.updateSidebarHeight && a.sidebar.css({ "min-height": a.stickySidebar.outerHeight() + a.stickySidebar.offset().top - a.sidebar.offset().top + a.paddingBottom }), a.previousScrollTop = r } }, a.onScroll(a), i(document).on("scroll." + a.options.namespace, function(i) { return function() { i.onScroll(i) } }(a)), i(window).on("resize." + a.options.namespace, function(i) { return function() { i.stickySidebar.css({ position: "static" }), i.onScroll(i) } }(a)), "undefined" != typeof ResizeSensor && new ResizeSensor(a.stickySidebar[0], function(i) { return function() { i.onScroll(i) } }(a)) }) }

        function n(i) { var t; try { t = i[0].getBoundingClientRect().width } catch (i) {} return "undefined" == typeof t && (t = i.width()), t } var s = { containerSelector: "", additionalMarginTop: 0, additionalMarginBottom: 0, updateSidebarHeight: !0, minWidth: 0, disableOnResponsiveLayouts: !0, sidebarBehavior: "modern", defaultPosition: "relative", namespace: "TSS" }; return t = i.extend(s, t), t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, e(t, this), this } }(jQuery);
! function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery) }(function(t) {
    function s(s) { var i = !1; return t('[data-notify="container"]').each(function(e, n) { var a = t(n),
                o = a.find('[data-notify="title"]').html().trim(),
                r = a.find('[data-notify="message"]').html().trim(),
                l = o === t("<div>" + s.settings.content.title + "</div>").html().trim(),
                d = r === t("<div>" + s.settings.content.message + "</div>").html().trim(),
                c = a.hasClass("alert-" + s.settings.type); return l && d && c && (i = !0), !i }), i }

    function i(i, n, a) { var o = { content: { message: "object" == typeof n ? n.message : n, title: n.title ? n.title : "", icon: n.icon ? n.icon : "", url: n.url ? n.url : "#", target: n.target ? n.target : "-" } };
        a = t.extend(!0, {}, o, a), this.settings = t.extend(!0, {}, e, a), this._defaults = e, "-" === this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = { start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart", end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend" }, "number" == typeof this.settings.offset && (this.settings.offset = { x: this.settings.offset, y: this.settings.offset }), (this.settings.allow_duplicates || !this.settings.allow_duplicates && !s(this)) && this.init() } var e = { element: "body", position: null, type: "info", allow_dismiss: !0, allow_duplicates: !0, newest_on_top: !1, showProgressbar: !1, placement: { from: "top", align: "right" }, offset: 20, spacing: 10, z_index: 1031, delay: 5e3, timer: 1e3, url_target: "_blank", mouse_over: null, animate: { enter: "animated fadeInDown", exit: "animated fadeOutUp" }, onShow: null, onShown: null, onClose: null, onClosed: null, onClick: null, icon_type: "class", template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="p-progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>' };
    String.format = function() { var t = arguments,
            s = arguments[0]; return s.replace(/(\{\{\d\}\}|\{\d\})/g, function(s) { if ("{{" === s.substring(0, 2)) return s; var i = parseInt(s.match(/\d/)[0]); return t[i + 1] }) }, t.extend(i.prototype, { init: function() { var t = this;
            this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.styleDismiss(), this.placement(), this.bind(), this.notify = { $ele: this.$ele, update: function(s, i) { var e = {}; "string" == typeof s ? e[s] = i : e = s; for (var n in e) switch (n) {
                        case "type":
                            this.$ele.removeClass("alert-" + t.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("p-progress-bar-" + t.settings.type), t.settings.type = e[n], this.$ele.addClass("alert-" + e[n]).find('[data-notify="progressbar"] > .progress-bar').addClass("p-progress-bar-" + e[n]); break;
                        case "icon":
                            var a = this.$ele.find('[data-notify="icon"]'); "class" === t.settings.icon_type.toLowerCase() ? a.removeClass(t.settings.content.icon).addClass(e[n]) : (a.is("img") || a.find("img"), a.attr("src", e[n])), t.settings.content.icon = e[s]; break;
                        case "progress":
                            var o = t.settings.delay - t.settings.delay * (e[n] / 100);
                            this.$ele.data("notify-delay", o), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", e[n]).css("width", e[n] + "%"); break;
                        case "url":
                            this.$ele.find('[data-notify="url"]').attr("href", e[n]); break;
                        case "target":
                            this.$ele.find('[data-notify="url"]').attr("target", e[n]); break;
                        default:
                            this.$ele.find('[data-notify="' + n + '"]').html(e[n]) }
                    var r = this.$ele.outerHeight() + parseInt(t.settings.spacing) + parseInt(t.settings.offset.y);
                    t.reposition(r) }, close: function() { t.close() } } }, buildNotify: function() { var s = this.settings.content;
            this.$ele = t(String.format(this.settings.template, this.settings.type, s.title, s.message, s.url, s.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove() }, setIcon: function() { "class" === this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />') }, styleDismiss: function() { this.$ele.find('[data-notify="dismiss"]').css({ position: "absolute", right: "10px", top: "5px", zIndex: this.settings.z_index + 2 }) }, styleURL: function() { this.$ele.find('[data-notify="url"]').css({ backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)", height: "100%", left: 0, position: "absolute", top: 0, width: "100%", zIndex: this.settings.z_index + 1 }) }, placement: function() { var s = this,
                i = this.settings.offset.y,
                e = { display: "inline-block", margin: "0px auto", position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute", transition: "all .5s ease-in-out", zIndex: this.settings.z_index },
                n = !1,
                a = this.settings; switch (t('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function() { i = Math.max(i, parseInt(t(this).css(a.placement.from)) + parseInt(t(this).outerHeight()) + parseInt(a.spacing)) }), this.settings.newest_on_top === !0 && (i = this.settings.offset.y), e[this.settings.placement.from] = i + "px", this.settings.placement.align) {
                case "left":
                case "right":
                    e[this.settings.placement.align] = this.settings.offset.x + "px"; break;
                case "center":
                    e.left = 0, e.right = 0 } this.$ele.css(e).addClass(this.settings.animate.enter), t.each(Array("webkit-", "moz-", "o-", "ms-", ""), function(t, i) { s.$ele[0].style[i + "AnimationIterationCount"] = 1 }), t(this.settings.element).append(this.$ele), this.settings.newest_on_top === !0 && (i = parseInt(i) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(i)), t.isFunction(s.settings.onShow) && s.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function() { n = !0 }).one(this.animations.end, function() { s.$ele.removeClass(s.settings.animate.enter), t.isFunction(s.settings.onShown) && s.settings.onShown.call(this) }), setTimeout(function() { n || t.isFunction(s.settings.onShown) && s.settings.onShown.call(this) }, 600) }, bind: function() { var s = this; if (this.$ele.find('[data-notify="dismiss"]').on("click", function() { s.close() }), t.isFunction(s.settings.onClick) && this.$ele.on("click", function(t) { t.target != s.$ele.find('[data-notify="dismiss"]')[0] && s.settings.onClick.call(this, t) }), this.$ele.mouseover(function() { t(this).data("data-hover", "true") }).mouseout(function() { t(this).data("data-hover", "false") }), this.$ele.data("data-hover", "false"), this.settings.delay > 0) { s.$ele.data("notify-delay", s.settings.delay); var i = setInterval(function() { var t = parseInt(s.$ele.data("notify-delay")) - s.settings.timer; if ("false" === s.$ele.data("data-hover") && "pause" === s.settings.mouse_over || "pause" != s.settings.mouse_over) { var e = (s.settings.delay - t) / s.settings.delay * 100;
                        s.$ele.data("notify-delay", t), s.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", e).css("width", e + "%") } t <= -s.settings.timer && (clearInterval(i), s.close()) }, s.settings.timer) } }, close: function() { var s = this,
                i = parseInt(this.$ele.css(this.settings.placement.from)),
                e = !1;
            this.$ele.attr("data-closing", "true").addClass(this.settings.animate.exit), s.reposition(i), t.isFunction(s.settings.onClose) && s.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function() { e = !0 }).one(this.animations.end, function() { t(this).remove(), t.isFunction(s.settings.onClosed) && s.settings.onClosed.call(this) }), setTimeout(function() { e || (s.$ele.remove(), s.settings.onClosed && s.settings.onClosed(s.$ele)) }, 600) }, reposition: function(s) { var i = this,
                e = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
                n = this.$ele.nextAll(e);
            this.settings.newest_on_top === !0 && (n = this.$ele.prevAll(e)), n.each(function() { t(this).css(i.settings.placement.from, s), s = parseInt(s) + parseInt(i.settings.spacing) + t(this).outerHeight() }) } }), t.notify = function(t, s) { var e = new i(this, t, s); return e.notify }, t.notifyDefaults = function(s) { return e = t.extend(!0, {}, e, s) }, t.notifyClose = function(s) { "undefined" == typeof s || "all" === s ? t("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : "success" === s || "info" === s || "warning" === s || "danger" === s ? t(".alert-" + s + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : s ? t(s + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : t('[data-notify-position="' + s + '"]').find('[data-notify="dismiss"]').trigger("click") }, t.notifyCloseExcept = function(s) { "success" === s || "info" === s || "warning" === s || "danger" === s ? t("[data-notify]").not(".alert-" + s).find('[data-notify="dismiss"]').trigger("click") : t("[data-notify]").not(s).find('[data-notify="dismiss"]').trigger("click") } }); /*!jQuery & Zepto Lazy v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern*/
! function(t, e) { "use strict";

    function r(r, a, i, u, l) {
        function f() { L = t.devicePixelRatio > 1, i = c(i), a.delay >= 0 && setTimeout(function() { s(!0) }, a.delay), (a.delay < 0 || a.combined) && (u.e = v(a.throttle, function(t) { "resize" === t.type && (w = B = -1), s(t.all) }), u.a = function(t) { t = c(t), i.push.apply(i, t) }, u.g = function() { return i = n(i).filter(function() { return !n(this).data(a.loadedName) }) }, u.f = function(t) { for (var e = 0; e < t.length; e++) { var r = i.filter(function() { return this === t[e] });
                    r.length && s(!1, r) } }, s(), n(a.appendScroll).on("scroll." + l + " resize." + l, u.e)) }

        function c(t) { var i = a.defaultImage,
                o = a.placeholder,
                u = a.imageBase,
                l = a.srcsetAttribute,
                f = a.loaderAttribute,
                c = a._f || {};
            t = n(t).filter(function() { var t = n(this),
                    r = m(this); return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(l) || t.attr(f) || c[r] !== e) }).data("plugin_" + a.name, r); for (var s = 0, d = t.length; s < d; s++) { var A = n(t[s]),
                    g = m(t[s]),
                    h = A.attr(a.imageBaseAttribute) || u;
                g === N && h && A.attr(l) && A.attr(l, b(A.attr(l), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')") } return t }

        function s(t, e) { if (!i.length) return void(a.autoDestroy && r.destroy()); for (var o = e || i, u = !1, l = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++)
                if (t || e || A(o[s])) { var g = n(o[s]),
                        h = m(o[s]),
                        b = g.attr(a.attribute),
                        v = g.attr(a.imageBaseAttribute) || l,
                        p = g.attr(a.loaderAttribute);
                    g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (u = !0, g.data(c, !0), d(g, h, v, p)) } u && (i = n(i).filter(function() { return !n(this).data(c) })) }

        function d(t, e, r, i) {++z; var o = function() { y("onError", t), p(), o = n.noop };
            y("beforeLoad", t); var u = a.attribute,
                l = a.srcsetAttribute,
                f = a.sizesAttribute,
                c = a.retinaAttribute,
                s = a.removeAttribute,
                d = a.loadedName,
                A = t.attr(c); if (i) { var g = function() { s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), g = n.noop };
                t.off(I).one(I, o).one(D, g), y(i, t, function(e) { e ? (t.off(D), g()) : (t.off(I), o()) }) || t.trigger(I) } else { var h = n(new Image);
                h.one(I, o).one(D, function() { t.hide(), e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(u + " " + l + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p() }); var m = (L && A ? A : t.attr(u)) || "";
                h.attr(C, t.attr(f)).attr(F, t.attr(l)).attr(E, m ? r + m : null), h.complete && h.trigger(D) } }

        function A(t) { var e = t.getBoundingClientRect(),
                r = a.scrollDirection,
                n = a.threshold,
                i = h() + n > e.top && -n < e.bottom,
                o = g() + n > e.left && -n < e.right; return "vertical" === r ? i : "horizontal" === r ? o : i && o }

        function g() { return w >= 0 ? w : w = n(t).width() }

        function h() { return B >= 0 ? B : B = n(t).height() }

        function m(t) { return t.tagName.toLowerCase() }

        function b(t, e) { if (e) { var r = t.split(",");
                t = ""; for (var a = 0, n = r.length; a < n; a++) t += e + r[a].trim() + (a !== n - 1 ? "," : "") } return t }

        function v(t, e) { var n, i = 0; return function(o, u) {
                function l() { i = +new Date, e.call(r, o) } var f = +new Date - i;
                n && clearTimeout(n), f > t || !a.enableThrottle || u ? l() : n = setTimeout(l, t - f) } }

        function p() {--z, i.length || z || y("onFinishedAll") }

        function y(t, e, n) { return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0) } var z = 0,
            w = -1,
            B = -1,
            L = !1,
            T = "afterLoad",
            D = "load",
            I = "error",
            N = "img",
            E = "src",
            F = "srcset",
            C = "sizes",
            O = "background-image"; "event" === a.bind || o ? f() : n(t).on(D + "." + l, f) }

    function a(a, o) { var u = this,
            l = n.extend({}, u.config, o),
            f = {},
            c = l.name + "-" + ++i; return u.config = function(t, r) { return r === e ? l[t] : (l[t] = r, u) }, u.addItems = function(t) { return f.a && f.a("string" === n.type(t) ? n(t) : t), u }, u.getItems = function() { return f.g ? f.g() : {} }, u.update = function(t) { return f.e && f.e({}, !t), u }, u.force = function(t) { return f.f && f.f("string" === n.type(t) ? n(t) : t), u }, u.loadAll = function() { return f.e && f.e({ all: !0 }, !0), u }, u.destroy = function() { return n(l.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e }, r(u, l, a, f, c), l.chainable ? a : u } var n = t.jQuery || t.Zepto,
        i = 0,
        o = !1;
    n.fn.Lazy = n.fn.lazy = function(t) { return new a(this, t) }, n.Lazy = n.lazy = function(t, r, i) { if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) { t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r]; for (var o = a.prototype.config, u = o._f || (o._f = {}), l = 0, f = t.length; l < f; l++)(o[t[l]] === e || n.isFunction(o[t[l]])) && (o[t[l]] = i); for (var c = 0, s = r.length; c < s; c++) u[r[c]] = t[0] } }, a.prototype.config = { name: "lazy", chainable: !0, autoDestroy: !0, bind: "load", threshold: 500, visibleOnly: !1, appendScroll: t, scrollDirection: "both", imageBase: null, defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", placeholder: null, delay: -1, combined: !1, attribute: "data-src", srcsetAttribute: "data-srcset", sizesAttribute: "data-sizes", retinaAttribute: "data-retina", loaderAttribute: "data-loader", imageBaseAttribute: "data-imagebase", removeAttribute: !0, handledName: "handled", loadedName: "loaded", effect: "show", effectTime: 0, enableThrottle: !0, throttle: 250, beforeLoad: e, afterLoad: e, onError: e, onFinishedAll: e }, n(t).on("load", function() { o = !0 }) }(window);
/*!
Waypoints - 4.0.1
Copyright Â© 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
! function() { "use strict";

    function t(o) { if (!o) throw new Error("No options passed to Waypoint constructor"); if (!o.element) throw new Error("No element option passed to Waypoint constructor"); if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1 } var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) { this.group.queueTrigger(this, t) }, t.prototype.trigger = function(t) { this.enabled && this.callback && this.callback.apply(this, t) }, t.prototype.destroy = function() { this.context.remove(this), this.group.remove(this), delete i[this.key] }, t.prototype.disable = function() { return this.enabled = !1, this }, t.prototype.enable = function() { return this.context.refresh(), this.enabled = !0, this }, t.prototype.next = function() { return this.group.next(this) }, t.prototype.previous = function() { return this.group.previous(this) }, t.invokeAll = function(t) { var e = []; for (var o in i) e.push(i[o]); for (var n = 0, r = e.length; r > n; n++) e[n][t]() }, t.destroyAll = function() { t.invokeAll("destroy") }, t.disableAll = function() { t.invokeAll("disable") }, t.enableAll = function() { t.Context.refreshAll(); for (var e in i) i[e].enabled = !0; return this }, t.refreshAll = function() { t.Context.refreshAll() }, t.viewportHeight = function() { return window.innerHeight || document.documentElement.clientHeight }, t.viewportWidth = function() { return document.documentElement.clientWidth }, t.adapters = [], t.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }, t.offsetAliases = { "bottom-in-view": function() { return this.context.innerHeight() - this.adapter.outerHeight() }, "right-in-view": function() { return this.context.innerWidth() - this.adapter.outerWidth() } }, window.Waypoint = t }(),
function() { "use strict";

    function t(t) { window.setTimeout(t, 1e3 / 60) }

    function e(t) { this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler() } var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) { var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh() }, e.prototype.checkEmpty = function() { var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
            i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key]) }, e.prototype.createThrottledResizeHandler = function() {
        function t() { e.handleResize(), e.didResize = !1 } var e = this;
        this.adapter.on("resize.waypoints", function() { e.didResize || (e.didResize = !0, n.requestAnimationFrame(t)) }) }, e.prototype.createThrottledScrollHandler = function() {
        function t() { e.handleScroll(), e.didScroll = !1 } var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t)) }) }, e.prototype.handleResize = function() { n.Context.refreshAll() }, e.prototype.handleScroll = function() { var t = {},
            e = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } }; for (var i in e) { var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward; for (var s in this.waypoints[i]) { var a = this.waypoints[i][s]; if (null !== a.triggerPoint) { var l = o.oldScroll < a.triggerPoint,
                        h = o.newScroll >= a.triggerPoint,
                        p = l && h,
                        u = !l && !h;
                    (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group) } } } for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll } }, e.prototype.innerHeight = function() { return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight() }, e.prototype.remove = function(t) { delete this.waypoints[t.axis][t.key], this.checkEmpty() }, e.prototype.innerWidth = function() { return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth() }, e.prototype.destroy = function() { var t = []; for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]); for (var o = 0, n = t.length; n > o; o++) t[o].destroy() }, e.prototype.refresh = function() { var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
        this.handleScroll(), t = { horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } }; for (var r in t) { var s = t[r]; for (var a in this.waypoints[r]) { var l, h, p, u, c, d = this.waypoints[r][a],
                    f = d.options.offset,
                    w = d.triggerPoint,
                    y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group) } } return n.requestAnimationFrame(function() { for (var t in o) o[t].flushTriggers() }), this }, e.findOrCreateByElement = function(t) { return e.findByElement(t) || new e(t) }, e.refreshAll = function() { for (var t in o) o[t].refresh() }, e.findByElement = function(t) { return o[t.waypointContextKey] }, window.onload = function() { r && r(), e.refreshAll() }, n.requestAnimationFrame = function(e) { var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e) }, n.Context = e }(),
function() { "use strict";

    function t(t, e) { return t.triggerPoint - e.triggerPoint }

    function e(t, e) { return e.triggerPoint - t.triggerPoint }

    function i(t) { this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this } var o = { vertical: {}, horizontal: {} },
        n = window.Waypoint;
    i.prototype.add = function(t) { this.waypoints.push(t) }, i.prototype.clearTriggerQueues = function() { this.triggerQueues = { up: [], down: [], left: [], right: [] } }, i.prototype.flushTriggers = function() { for (var i in this.triggerQueues) { var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t); for (var r = 0, s = o.length; s > r; r += 1) { var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i]) } } this.clearTriggerQueues() }, i.prototype.next = function(e) { this.waypoints.sort(t); var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1; return o ? null : this.waypoints[i + 1] }, i.prototype.previous = function(e) { this.waypoints.sort(t); var i = n.Adapter.inArray(e, this.waypoints); return i ? this.waypoints[i - 1] : null }, i.prototype.queueTrigger = function(t, e) { this.triggerQueues[e].push(t) }, i.prototype.remove = function(t) { var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1) }, i.prototype.first = function() { return this.waypoints[0] }, i.prototype.last = function() { return this.waypoints[this.waypoints.length - 1] }, i.findOrCreate = function(t) { return o[t.axis][t.name] || new i(t) }, n.Group = i }(),
function() { "use strict";

    function t(t) { this.$element = e(t) } var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) { t.prototype[i] = function() { var t = Array.prototype.slice.call(arguments); return this.$element[i].apply(this.$element, t) } }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) { t[o] = e[o] }), i.adapters.push({ name: "jquery", Adapter: t }), i.Adapter = t }(),
function() { "use strict";

    function t(t) { return function() { var i = [],
                o = arguments[0]; return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() { var n = t.extend({}, o, { element: this }); "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n)) }), i } } var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto)) }();