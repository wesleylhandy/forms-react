parcelRequire = (function(e) {
	var r = "function" == typeof parcelRequire && parcelRequire,
		n = "function" == typeof require && require,
		i = {};
	function u(e, u) {
		if (e in i) return i[e];
		var t = "function" == typeof parcelRequire && parcelRequire;
		if (!u && t) return t(e, !0);
		if (r) return r(e, !0);
		if (n && "string" == typeof e) return n(e);
		var o = new Error("Cannot find module '" + e + "'");
		throw ((o.code = "MODULE_NOT_FOUND"), o);
	}
	return (
		(u.register = function(e, r) {
			i[e] = r;
		}),
		(i = e(u)),
		(u.modules = i),
		u
	);
})(function(require) {
	var m = this;
	var l = {},
		g = require("pBGv");
	(function() {
		var e, r, n, $, o, t;
		"undefined" != typeof performance && null !== performance && performance.now
			? (l = function() {
					return performance.now();
			  })
			: null != g && g.hrtime
			? ((l = function() {
					return (e() - o) / 1e6;
			  }),
			  (r = g.hrtime),
			  ($ = (e = function() {
					var e;
					return 1e9 * (e = r())[0] + e[1];
			  })()),
			  (t = 1e9 * g.uptime()),
			  (o = $ - t))
			: Date.now
			? ((l = function() {
					return Date.now() - n;
			  }),
			  (n = Date.now()))
			: ((l = function() {
					return new Date().getTime() - n;
			  }),
			  (n = new Date().getTime()));
	}.call(l));
	for (
		var i = {},
			a = "undefined" == typeof window ? m : window,
			e = ["moz", "webkit"],
			c = "AnimationFrame",
			f = a["request" + c],
			h = a["cancel" + c] || a["cancelRequest" + c],
			d = 0;
		!f && d < e.length;
		d++
	)
		(f = a[e[d] + "Request" + c]),
			(h = a[e[d] + "Cancel" + c] || a[e[d] + "CancelRequest" + c]);
	if (!f || !h) {
		var j = 0,
			k = 0,
			b = [],
			n = 1e3 / 60;
		(f = function($) {
			if (0 === b.length) {
				var o = l(),
					a = Math.max(0, n - (o - j));
				(j = a + o),
					setTimeout(function() {
						var $ = b.slice(0);
						b.length = 0;
						for (var o = 0; o < $.length; o++)
							if (!$[o].cancelled)
								try {
									$[o].callback(j);
								} catch (a) {
									setTimeout(function() {
										throw a;
									}, 0);
								}
					}, Math.round(a));
			}
			return b.push({ handle: ++k, callback: $, cancelled: !1 }), k;
		}),
			(h = function($) {
				for (var o = 0; o < b.length; o++)
					b[o].handle === $ && (b[o].cancelled = !0);
			});
	}
	((i = function($) {
		return f.call(a, $);
	}).cancel = function() {
		h.apply(a, arguments);
	}),
		(i.polyfill = function($) {
			$ || ($ = a), ($.requestAnimationFrame = f), ($.cancelAnimationFrame = h);
		});
	i.polyfill();
	return { ntBf: {} };
});
