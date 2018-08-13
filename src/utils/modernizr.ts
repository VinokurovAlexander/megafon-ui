/* tslint:disable */
export default (function (window) {
    if (window) {
        /*! modernizr 3.5.0 (Custom Build) | MIT *
        * https://modernizr.com/download/?-inputtypes-pointerevents-touchevents-setclasses !*/
        !function (e, t, n) { function o(e, t) { return typeof e === t } function i() { var e, t, n, i, s, a, r; for (var l in u) if (u.hasOwnProperty(l)) { if (e = [], t = u[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++)e.push(t.options.aliases[n].toLowerCase()); for (i = o(t.fn, "function") ? t.fn() : t.fn, s = 0; s < e.length; s++)a = e[s], r = a.split("."), 1 === r.length ? Modernizr[r[0]] = i : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = i), f.push((i ? "" : "no-") + r.join("-")) } } function s(e) { var t = c.className, n = Modernizr._config.classPrefix || ""; if (p && (t = t.baseVal), Modernizr._config.enableJSClass) { var o = new RegExp("(^|\\s)" + n + "no-js(\\s|$)"); t = t.replace(o, "$1" + n + "js$2") } Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), p ? c.className.baseVal = t : c.className = t) } function a() { return "function" != typeof t.createElement ? t.createElement(arguments[0]) : p ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments) } function r() { var e = t.body; return e || (e = a(p ? "svg" : "body"), e.fake = !0), e } function l(e, n, o, i) { var s, l, f, u, d = "modernizr", p = a("div"), h = r(); if (parseInt(o, 10)) for (; o--;)f = a("div"), f.id = i ? i[o] : d + (o + 1), p.appendChild(f); return s = a("style"), s.type = "text/css", s.id = "s" + d, (h.fake ? h : p).appendChild(s), h.appendChild(p), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)), p.id = d, h.fake && (h.style.background = "", h.style.overflow = "hidden", u = c.style.overflow, c.style.overflow = "hidden", c.appendChild(h)), l = n(p, e), h.fake ? (h.parentNode.removeChild(h), c.style.overflow = u, c.offsetHeight) : p.parentNode.removeChild(p), !!l } var f = [], u = [], d = { _version: "3.5.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (e, t) { var n = this; setTimeout(function () { t(n[e]) }, 0) }, addTest: function (e, t, n) { u.push({ name: e, fn: t, options: n }) }, addAsyncTest: function (e) { u.push({ name: null, fn: e }) } }, Modernizr = function () { }; Modernizr.prototype = d, Modernizr = new Modernizr; var c = t.documentElement, p = "svg" === c.nodeName.toLowerCase(), h = d._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""]; d._prefixes = h; var m = a("input"), v = "search tel url email datetime date month week time datetime-local number range color".split(" "), y = {}; Modernizr.inputtypes = function (e) { for (var o, i, s, a = e.length, r = "1)", l = 0; a > l; l++)m.setAttribute("type", o = e[l]), s = "text" !== m.type && "style" in m, s && (m.value = r, m.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && m.style.WebkitAppearance !== n ? (c.appendChild(m), i = t.defaultView, s = i.getComputedStyle && "textfield" !== i.getComputedStyle(m, null).WebkitAppearance && 0 !== m.offsetHeight, c.removeChild(m)) : /^(search|tel)$/.test(o) || (s = /^(url|email)$/.test(o) ? m.checkValidity && m.checkValidity() === !1 : m.value != r)), y[e[l]] = !!s; return y }(v); var g = function () { function e(e, t) { var i; return e ? (t && "string" != typeof t || (t = a(t || "div")), e = "on" + e, i = e in t, !i && o && (t.setAttribute || (t = a("div")), t.setAttribute(e, ""), i = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), i) : !1 } var o = !("onblur" in t.documentElement); return e }(); d.hasEvent = g; var b = "Moz O ms Webkit", w = d._config.usePrefixes ? b.toLowerCase().split(" ") : []; d._domPrefixes = w, Modernizr.addTest("pointerevents", function () { var e = !1, t = w.length; for (e = Modernizr.hasEvent("pointerdown"); t-- && !e;)g(w[t] + "pointerdown") && (e = !0); return e }); var C = d.testStyles = l; Modernizr.addTest("touchevents", function () { var n; if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0; else { var o = ["@media (", h.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join(""); C(o, function (e) { n = 9 === e.offsetTop }) } return n }), i(), s(f), delete d.addTest, delete d.addAsyncTest; for (var _ = 0; _ < Modernizr._q.length; _++)Modernizr._q[_](); e.Modernizr = Modernizr }(window, document);
        return window['Modernizr'];
    } else {
        return {};
    }
})(typeof window !== 'undefined' ? window : false);
