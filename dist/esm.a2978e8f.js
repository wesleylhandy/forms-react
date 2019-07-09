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
		ZIT7: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.IconsManifest = void 0);
				const e = [
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
						licenseUrl:
							"https://github.com/ionic-team/ionicons/blob/master/LICENSE",
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
						licenseUrl:
							"https://github.com/primer/octicons/blob/master/LICENSE",
					},
					{
						id: "fi",
						name: "Feather",
						projectUrl: "https://feathericons.com/",
						license: "MIT",
						licenseUrl:
							"https://github.com/feathericons/feather/blob/master/LICENSE",
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
				exports.IconsManifest = e;
			},
			{},
		],
		gzXG: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.IconContext = exports.DefaultContext = void 0);
				var e = t(require("react"));
				function t(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var r in e)
							if (Object.prototype.hasOwnProperty.call(e, r)) {
								var o =
									Object.defineProperty && Object.getOwnPropertyDescriptor
										? Object.getOwnPropertyDescriptor(e, r)
										: {};
								o.get || o.set ? Object.defineProperty(t, r, o) : (t[r] = e[r]);
							}
					return (t.default = e), t;
				}
				var r = {
					color: void 0,
					size: void 0,
					className: void 0,
					style: void 0,
					attr: void 0,
				};
				exports.DefaultContext = r;
				var o = e.createContext && e.createContext(r);
				exports.IconContext = o;
			},
			{ react: "1n8/" },
		],
		UoT3: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.GenIcon = l),
					(exports.IconBase = a);
				var t = r(require("react")),
					e = require("./iconContext");
				function r(t) {
					if (t && t.__esModule) return t;
					var e = {};
					if (null != t)
						for (var r in t)
							if (Object.prototype.hasOwnProperty.call(t, r)) {
								var n =
									Object.defineProperty && Object.getOwnPropertyDescriptor
										? Object.getOwnPropertyDescriptor(t, r)
										: {};
								n.get || n.set ? Object.defineProperty(e, r, n) : (e[r] = t[r]);
							}
					return (e.default = t), e;
				}
				var n = function() {
						return (n =
							Object.assign ||
							function(t) {
								for (var e, r = 1, n = arguments.length; r < n; r++)
									for (var o in (e = arguments[r]))
										Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
								return t;
							}).apply(this, arguments);
					},
					o = function(t, e) {
						var r = {};
						for (var n in t)
							Object.prototype.hasOwnProperty.call(t, n) &&
								e.indexOf(n) < 0 &&
								(r[n] = t[n]);
						if (
							null != t &&
							"function" == typeof Object.getOwnPropertySymbols
						) {
							var o = 0;
							for (n = Object.getOwnPropertySymbols(t); o < n.length; o++)
								e.indexOf(n[o]) < 0 && (r[n[o]] = t[n[o]]);
						}
						return r;
					};
				function c(e) {
					return (
						e &&
						e.map(function(e, r) {
							return t.createElement(e.tag, n({ key: r }, e.attr), c(e.child));
						})
					);
				}
				function l(e) {
					return function(r) {
						return t.createElement(
							a,
							n({ attr: n({}, e.attr) }, r),
							c(e.child)
						);
					};
				}
				function a(r) {
					var c = function(e) {
						var c,
							l = r.size || e.size || "1em";
						e.className && (c = e.className),
							r.className && (c = (c ? c + " " : "") + r.className);
						var a = r.attr,
							i = r.title,
							s = o(r, ["attr", "title"]);
						return t.createElement(
							"svg",
							n(
								{
									stroke: "currentColor",
									fill: "currentColor",
									strokeWidth: "0",
								},
								e.attr,
								a,
								s,
								{
									className: c,
									style: n({ color: r.color || e.color }, e.style, r.style),
									height: l,
									width: l,
									xmlns: "http://www.w3.org/2000/svg",
								}
							),
							i && t.createElement("title", null, i),
							r.children
						);
					};
					return void 0 !== e.IconContext
						? t.createElement(e.IconContext.Consumer, null, function(t) {
								return c(t);
						  })
						: c(e.DefaultContext);
				}
			},
			{ react: "1n8/", "./iconContext": "gzXG" },
		],
		SrMW: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 });
				var e = require("./iconsManifest");
				Object.keys(e).forEach(function(t) {
					"default" !== t &&
						"__esModule" !== t &&
						Object.defineProperty(exports, t, {
							enumerable: !0,
							get: function() {
								return e[t];
							},
						});
				});
				var t = require("./iconBase");
				Object.keys(t).forEach(function(e) {
					"default" !== e &&
						"__esModule" !== e &&
						Object.defineProperty(exports, e, {
							enumerable: !0,
							get: function() {
								return t[e];
							},
						});
				});
				var r = require("./iconContext");
				Object.keys(r).forEach(function(e) {
					"default" !== e &&
						"__esModule" !== e &&
						Object.defineProperty(exports, e, {
							enumerable: !0,
							get: function() {
								return r[e];
							},
						});
				});
			},
			{
				"./iconsManifest": "ZIT7",
				"./iconBase": "UoT3",
				"./iconContext": "gzXG",
			},
		],
	},
	{},
	[],
	null
);
//# sourceMappingURL=/esm.a2978e8f.js.map
