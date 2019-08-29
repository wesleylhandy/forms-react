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
	var g = {},
		h = require("1n8/"),
		i = d(h),
		j = require("5D9O"),
		k = d(j);
	function d(e) {
		return e && e.__esModule ? e : { default: e };
	}
	var a = function(e) {
		var r = "";
		if (e.typography.options.googleFonts)
			return (r = e.typography.options.googleFonts
				.map(function(e) {
					var r = "";
					return (
						(r += e.name.split(" ").join("+")),
						(r += ":"),
						(r += e.styles.join(","))
					);
				})
				.join("|"))
				? i.default.createElement("link", {
						href: "//fonts.googleapis.com/css?family=" + r,
						rel: "stylesheet",
						type: "text/css",
				  })
				: null;
	};
	(a.propTypes = { typography: k.default.object.isRequired }),
		(a.displayName = "GoogleFont"),
		(g = a);
	var l = {},
		m = require("1n8/"),
		n = e(m),
		o = require("5D9O"),
		p = e(o);
	function e(r) {
		return r && r.__esModule ? r : { default: r };
	}
	var b = function(r) {
		return n.default.createElement("style", {
			id: "typography.js",
			dangerouslySetInnerHTML: { __html: r.typography.toString() },
		});
	};
	(b.propTypes = { typography: p.default.object.isRequired }),
		(b.displayName = "TypographyStyle"),
		(l = b);
	var c = {},
		q = f(g),
		r = f(l);
	function f($) {
		return $ && $.__esModule ? $ : { default: $ };
	}
	c = { GoogleFont: q.default, TypographyStyle: r.default };
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = c;
	} else if (typeof define === "function" && define.amd) {
		define(function() {
			return c;
		});
	}
	return { pUuG: c };
});
