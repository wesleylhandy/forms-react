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
	function e(dest, source) {
		Object.keys(source).forEach(function(key) {
			if (key === "default" || key === "__esModule") {
				return;
			}
			Object.defineProperty(dest, key, {
				enumerable: true,
				get: function get() {
					return source[key];
				},
			});
		});
		return dest;
	}
	var b = {};
	var h = {};
	const k = [
		{
			id: "fa",
			name: "Font Awesome",
			projectUrl: "https://fontawesome.com/",
			license: "CC BY 4.0 License",
			licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
		},
		{
			id: "io",
			name: "Ionicons",
			projectUrl: "https://ionicons.com/",
			license: "MIT",
			licenseUrl: "https://github.com/ionic-team/ionicons/blob/master/LICENSE",
		},
		{
			id: "md",
			name: "Material Design icons",
			projectUrl: "http://google.github.io/material-design-icons/",
			license: "Apache License Version 2.0",
			licenseUrl:
				"https://github.com/google/material-design-icons/blob/master/LICENSE",
		},
		{
			id: "ti",
			name: "Typicons",
			projectUrl: "http://s-ings.com/typicons/",
			license: "CC BY-SA 3.0",
			licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
		},
		{
			id: "go",
			name: "Github Octicons icons",
			projectUrl: "https://octicons.github.com/",
			license: "MIT",
			licenseUrl: "https://github.com/primer/octicons/blob/master/LICENSE",
		},
		{
			id: "fi",
			name: "Feather",
			projectUrl: "https://feathericons.com/",
			license: "MIT",
			licenseUrl: "https://github.com/feathericons/feather/blob/master/LICENSE",
		},
		{
			id: "gi",
			name: "Game Icons",
			projectUrl: "https://game-icons.net/",
			license: "CC BY 3.0",
			licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
		},
		{
			id: "wi",
			name: "Weather Icons",
			projectUrl: "https://erikflowers.github.io/weather-icons/",
			license: "SIL OFL 1.1",
			licenseUrl: "http://scripts.sil.org/OFL",
		},
		{
			id: "di",
			name: "Devicons",
			projectUrl: "https://vorillaz.github.io/devicons/",
			license: "MIT",
			licenseUrl: "https://opensource.org/licenses/MIT",
		},
	];
	h.IconsManifest = k;
	var a = {};
	var f = {};
	require("1n8/");
	var d = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0,
	};
	f.DefaultContext = d;
	var g = require("1n8/").createContext && require("1n8/").createContext(d);
	f.IconContext = g;
	require("1n8/");
	var c =
			(a && a.__assign) ||
			function() {
				return (c =
					Object.assign ||
					function(t) {
						for (var e, r = 1, o = arguments.length; r < o; r++)
							for (var $ in (e = arguments[r]))
								Object.prototype.hasOwnProperty.call(e, $) && (t[$] = e[$]);
						return t;
					}).apply(this, arguments);
			},
		l =
			(a && a.__rest) ||
			function(t, e) {
				var r = {};
				for (var o in t)
					Object.prototype.hasOwnProperty.call(t, o) &&
						e.indexOf(o) < 0 &&
						(r[o] = t[o]);
				if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
					var $ = 0;
					for (o = Object.getOwnPropertySymbols(t); $ < o.length; $++)
						e.indexOf(o[$]) < 0 && (r[o[$]] = t[o[$]]);
				}
				return r;
			};
	function i(t) {
		return (
			t &&
			t.map(function(t, e) {
				return require("1n8/").createElement(
					t.tag,
					c({ key: e }, t.attr),
					i(t.child)
				);
			})
		);
	}
	function m(t) {
		return function(e) {
			return require("1n8/").createElement(
				j,
				c({ attr: c({}, t.attr) }, e),
				i(t.child)
			);
		};
	}
	function j(t) {
		var e = function(e) {
			var r,
				o = t.size || e.size || "1em";
			e.className && (r = e.className),
				t.className && (r = (r ? r + " " : "") + t.className);
			var $ = t.attr,
				n = t.title,
				a = l(t, ["attr", "title"]);
			return require("1n8/").createElement(
				"svg",
				c(
					{ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
					e.attr,
					$,
					a,
					{
						className: r,
						style: c({ color: t.color || e.color }, e.style, t.style),
						height: o,
						width: o,
						xmlns: "http://www.w3.org/2000/svg",
					}
				),
				n && require("1n8/").createElement("title", null, n),
				t.children
			);
		};
		return void 0 !== g
			? require("1n8/").createElement(g.Consumer, null, function(t) {
					return e(t);
			  })
			: e(d);
	}
	(a.GenIcon = m), (a.IconBase = j);
	e(b, h), e(b, a), e(b, f);
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = b;
	} else if (typeof define === "function" && define.amd) {
		define(function() {
			return b;
		});
	}
	b.__esModule = true;
	return { SrMW: b };
});
