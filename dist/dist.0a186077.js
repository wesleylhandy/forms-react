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
		"3CyT": [
			function(require, module, exports) {
				"use strict";
				var e = require("react"),
					t = s(e),
					o = require("prop-types"),
					r = s(o);
				function s(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var n = function(e) {
					var o = "";
					if (e.typography.options.googleFonts)
						return (o = e.typography.options.googleFonts
							.map(function(e) {
								var t = "";
								return (
									(t += e.name.split(" ").join("+")),
									(t += ":"),
									(t += e.styles.join(","))
								);
							})
							.join("|"))
							? t.default.createElement("link", {
									href: "//fonts.googleapis.com/css?family=" + o,
									rel: "stylesheet",
									type: "text/css",
							  })
							: null;
				};
				(n.propTypes = { typography: r.default.object.isRequired }),
					(n.displayName = "GoogleFont"),
					(module.exports = n);
			},
			{ react: "1n8/", "prop-types": "5D9O" },
		],
		xBqI: [
			function(require, module, exports) {
				"use strict";
				var e = require("react"),
					r = a(e),
					t = require("prop-types"),
					p = a(t);
				function a(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var o = function(e) {
					return r.default.createElement("style", {
						id: "typography.js",
						dangerouslySetInnerHTML: { __html: e.typography.toString() },
					});
				};
				(o.propTypes = { typography: p.default.object.isRequired }),
					(o.displayName = "TypographyStyle"),
					(module.exports = o);
			},
			{ react: "1n8/", "prop-types": "5D9O" },
		],
		pUuG: [
			function(require, module, exports) {
				"use strict";
				var e = require("./GoogleFont"),
					o = u(e),
					t = require("./TypographyStyle"),
					r = u(t);
				function u(e) {
					return e && e.__esModule ? e : { default: e };
				}
				module.exports = { GoogleFont: o.default, TypographyStyle: r.default };
			},
			{ "./GoogleFont": "3CyT", "./TypographyStyle": "xBqI" },
		],
	},
	{},
	[],
	null
);
//# sourceMappingURL=/dist.0a186077.js.map
