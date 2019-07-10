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
	var o = {},
		j = require("1n8/"),
		g = e(j),
		m = require("5D9O"),
		n = e(m);
	function e(e) {
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
				? g.default.createElement("link", {
						href: "//fonts.googleapis.com/css?family=" + r,
						rel: "stylesheet",
						type: "text/css",
				  })
				: null;
	};
	(a.propTypes = { typography: n.default.object.isRequired }),
		(a.displayName = "GoogleFont"),
		(o = a);
	var h = {},
		i = require("1n8/"),
		s = f(i),
		k = require("5D9O"),
		l = f(k);
	function f(r) {
		return r && r.__esModule ? r : { default: r };
	}
	var b = function(r) {
		return s.default.createElement("style", {
			id: "typography.js",
			dangerouslySetInnerHTML: { __html: r.typography.toString() },
		});
	};
	(b.propTypes = { typography: l.default.object.isRequired }),
		(b.displayName = "TypographyStyle"),
		(h = b);
	var c = {},
		p = d(o),
		q = d(h);
	function d($) {
		return $ && $.__esModule ? $ : { default: $ };
	}
	c = { GoogleFont: p.default, TypographyStyle: q.default };
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = c;
	} else if (typeof define === "function" && define.amd) {
		define(function() {
			return c;
		});
	}
	return { pUuG: c };
});
