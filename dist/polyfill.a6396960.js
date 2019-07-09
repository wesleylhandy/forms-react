parcelRequire = (function(e, r, t, n) {
	var i,
		o = "function" == typeof parcelRequire && parcelRequire,
		u = "function" == typeof require && require;
	function f(t, n) {
		if (!r[t]) {
			if (!e[t]) {
				var i = "function" == typeof parcelRequire && parcelRequire;
				if (!n && i) return i(t, !0);
				if (o) return o(t, !0);
				if (u && "string" == typeof t) return u(t);
				var c = new Error("Cannot find module '" + t + "'");
				throw ((c.code = "MODULE_NOT_FOUND"), c);
			}
			(p.resolve = function(r) {
				return e[t][1][r] || r;
			}),
				(p.cache = {});
			var l = (r[t] = new f.Module(t));
			e[t][0].call(l.exports, p, l, l.exports, this);
		}
		return r[t].exports;
		function p(e) {
			return f(p.resolve(e));
		}
	}
	(f.isParcelRequire = !0),
		(f.Module = function(e) {
			(this.id = e), (this.bundle = f), (this.exports = {});
		}),
		(f.modules = e),
		(f.cache = r),
		(f.parent = o),
		(f.register = function(r, t) {
			e[r] = [
				function(e, r) {
					r.exports = t;
				},
				{},
			];
		});
	for (var c = 0; c < t.length; c++)
		try {
			f(t[c]);
		} catch (e) {
			i || (i = e);
		}
	if (t.length) {
		var l = f(t[t.length - 1]);
		"object" == typeof exports && "undefined" != typeof module
			? (module.exports = l)
			: "function" == typeof define && define.amd
			? define(function() {
					return l;
			  })
			: n && (this[n] = l);
	}
	if (((parcelRequire = f), i)) throw i;
	return f;
})(
	{
		xNmf: [
			function(require, module, exports) {
				var process = require("process");
				var e = require("process");
				(function() {
					var n, r, t, o, u, i;
					"undefined" != typeof performance &&
					null !== performance &&
					performance.now
						? (module.exports = function() {
								return performance.now();
						  })
						: null != e && e.hrtime
						? ((module.exports = function() {
								return (n() - u) / 1e6;
						  }),
						  (r = e.hrtime),
						  (o = (n = function() {
								var e;
								return 1e9 * (e = r())[0] + e[1];
						  })()),
						  (i = 1e9 * e.uptime()),
						  (u = o - i))
						: Date.now
						? ((module.exports = function() {
								return Date.now() - t;
						  }),
						  (t = Date.now()))
						: ((module.exports = function() {
								return new Date().getTime() - t;
						  }),
						  (t = new Date().getTime()));
				}.call(this));
			},
			{ process: "pBGv" },
		],
		oXMl: [
			function(require, module, exports) {
				var global = arguments[3];
				for (
					var e = arguments[3],
						n = require("performance-now"),
						t = "undefined" == typeof window ? e : window,
						a = ["moz", "webkit"],
						l = "AnimationFrame",
						c = t["request" + l],
						o = t["cancel" + l] || t["cancelRequest" + l],
						r = 0;
					!c && r < a.length;
					r++
				)
					(c = t[a[r] + "Request" + l]),
						(o = t[a[r] + "Cancel" + l] || t[a[r] + "CancelRequest" + l]);
				if (!c || !o) {
					var i = 0,
						u = 0,
						f = [],
						m = 1e3 / 60;
					(c = function(e) {
						if (0 === f.length) {
							var t = n(),
								a = Math.max(0, m - (t - i));
							(i = a + t),
								setTimeout(function() {
									var e = f.slice(0);
									f.length = 0;
									for (var n = 0; n < e.length; n++)
										if (!e[n].cancelled)
											try {
												e[n].callback(i);
											} catch (t) {
												setTimeout(function() {
													throw t;
												}, 0);
											}
								}, Math.round(a));
						}
						return f.push({ handle: ++u, callback: e, cancelled: !1 }), u;
					}),
						(o = function(e) {
							for (var n = 0; n < f.length; n++)
								f[n].handle === e && (f[n].cancelled = !0);
						});
				}
				(module.exports = function(e) {
					return c.call(t, e);
				}),
					(module.exports.cancel = function() {
						o.apply(t, arguments);
					}),
					(module.exports.polyfill = function(e) {
						e || (e = t),
							(e.requestAnimationFrame = c),
							(e.cancelAnimationFrame = o);
					});
			},
			{ "performance-now": "xNmf" },
		],
		ntBf: [
			function(require, module, exports) {
				require("./").polyfill();
			},
			{ "./": "oXMl" },
		],
	},
	{},
	[],
	null
);
//# sourceMappingURL=/polyfill.a6396960.js.map
