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
		m34o: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = t(require("@emotion/styled-base")),
					r = t(require("react")),
					o = require("@emotion/core");
				function t(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function n() {
					return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
				}
				var a = (0, e.default)("div", {
						target: "ezbeoyg0",
						label: "DevBanner",
					})({
						name: "b509kx",
						styles:
							"width:100%;padding:20px;text-align:center;background:lightgoldenrodyellow;color:maroon;font-family:Arial,Helvetica,sans-serif;font-weight:bold;font-style:normal;border:1px dotted #000;margin:30px 0;box-sizing:border-box;",
					}),
					s = function(e) {
						var r = e.expired,
							t = void 0 !== r && r;
						return (0, o.jsx)(
							a,
							{ className: "banner" },
							t
								? "Your Session Has Expired, Please Refresh Your Browser"
								: "Form Under Development"
						);
					},
					i = s;
				exports.default = i;
			},
			{
				"@emotion/styled-base": "vQ7R",
				react: "n8MK",
				"@emotion/core": "haMh",
			},
		],
	},
	{},
	[],
	null
);
//# sourceMappingURL=/Banner.165b7148.js.map
