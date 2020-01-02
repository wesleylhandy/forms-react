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
		J65g: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = t(require("prop-types")),
					r = t(require("react"));
				function t(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var a = {
						border: 0,
						clip: "rect(0 0 0 0)",
						height: "1px",
						margin: "-1px",
						overflow: "hidden",
						whiteSpace: "nowrap",
						padding: 0,
						width: "1px",
						position: "absolute",
					},
					i = function(e) {
						var t = e.message,
							i = e["aria-live"];
						return r.default.createElement(
							"div",
							{ style: a, role: "log", "aria-live": i },
							t || ""
						);
					};
				i.propTypes = {};
				var o = i;
				exports.default = o;
			},
			{ "prop-types": "5D9O", react: "1n8/" },
		],
		"+wzw": [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = a(require("prop-types")),
					t = r(require("react")),
					s = a(require("./MessageBlock"));
				function r(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var s in e)
							if (Object.prototype.hasOwnProperty.call(e, s)) {
								var r =
									Object.defineProperty && Object.getOwnPropertyDescriptor
										? Object.getOwnPropertyDescriptor(e, s)
										: {};
								r.get || r.set ? Object.defineProperty(t, s, r) : (t[s] = e[s]);
							}
					return (t.default = e), t;
				}
				function a(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function o(e, t) {
					if (!(e instanceof t))
						throw new TypeError("Cannot call a class as a function");
				}
				function i(e, t) {
					if (!e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
				}
				function l(e, t) {
					if ("function" != typeof t && null !== t)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof t
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0,
						},
					})),
						t &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(e, t)
								: (e.__proto__ = t));
				}
				var n = (function(e) {
					function r() {
						var t, s;
						o(this, r);
						for (var a = arguments.length, l = Array(a), n = 0; n < a; n++)
							l[n] = arguments[n];
						return (
							(t = s = i(this, e.call.apply(e, [this].concat(l)))),
							(s.state = {
								assertiveMessage1: "",
								assertiveMessage2: "",
								politeMessage1: "",
								politeMessage2: "",
								oldPolitemessage: "",
								oldPoliteMessageId: "",
								oldAssertiveMessage: "",
								oldAssertiveMessageId: "",
								setAlternatePolite: !1,
								setAlternateAssertive: !1,
							}),
							i(s, t)
						);
					}
					return (
						l(r, e),
						(r.getDerivedStateFromProps = function(e, t) {
							var s = t.oldPolitemessage,
								r = t.oldPoliteMessageId,
								a = t.oldAssertiveMessage,
								o = t.oldAssertiveMessageId,
								i = e.politeMessage,
								l = e.politeMessageId,
								n = e.assertiveMessage,
								u = e.assertiveMessageId;
							return s !== i || r !== l
								? {
										politeMessage1: t.setAlternatePolite ? "" : i,
										politeMessage2: t.setAlternatePolite ? i : "",
										oldPolitemessage: i,
										oldPoliteMessageId: l,
										setAlternatePolite: !t.setAlternatePolite,
								  }
								: a !== n || o !== u
								? {
										assertiveMessage1: t.setAlternateAssertive ? "" : n,
										assertiveMessage2: t.setAlternateAssertive ? n : "",
										oldAssertiveMessage: n,
										oldAssertiveMessageId: u,
										setAlternateAssertive: !t.setAlternateAssertive,
								  }
								: null;
						}),
						(r.prototype.render = function() {
							var e = this.state,
								r = e.assertiveMessage1,
								a = e.assertiveMessage2,
								o = e.politeMessage1,
								i = e.politeMessage2;
							return t.default.createElement(
								"div",
								null,
								t.default.createElement(s.default, {
									"aria-live": "assertive",
									message: r,
								}),
								t.default.createElement(s.default, {
									"aria-live": "assertive",
									message: a,
								}),
								t.default.createElement(s.default, {
									"aria-live": "polite",
									message: o,
								}),
								t.default.createElement(s.default, {
									"aria-live": "polite",
									message: i,
								})
							);
						}),
						r
					);
				})(t.Component);
				n.propTypes = {};
				var u = n;
				exports.default = u;
			},
			{ "prop-types": "5D9O", react: "1n8/", "./MessageBlock": "J65g" },
		],
		"5s4+": [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = n(require("react"));
				function n(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var t = e.default.createContext({
					announceAssertive: o,
					announcePolite: o,
				});
				function o() {
					console.warn("Announcement failed, LiveAnnouncer context is missing");
				}
				var r = t;
				exports.default = r;
			},
			{ react: "1n8/" },
		],
		"4fA0": [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = o(require("react")),
					t = r(require("./Announcer")),
					n = r(require("./AnnouncerContext"));
				function r(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function o(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e)
							if (Object.prototype.hasOwnProperty.call(e, n)) {
								var r =
									Object.defineProperty && Object.getOwnPropertyDescriptor
										? Object.getOwnPropertyDescriptor(e, n)
										: {};
								r.get || r.set ? Object.defineProperty(t, n, r) : (t[n] = e[n]);
							}
					return (t.default = e), t;
				}
				function s(e, t) {
					if (!(e instanceof t))
						throw new TypeError("Cannot call a class as a function");
				}
				function a(e, t) {
					if (!e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
				}
				function i(e, t) {
					if ("function" != typeof t && null !== t)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof t
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0,
						},
					})),
						t &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(e, t)
								: (e.__proto__ = t));
				}
				var u = (function(r) {
						function o(e) {
							s(this, o);
							var t = a(this, r.call(this, e));
							return (
								(t.announcePolite = function(e, n) {
									t.setState({
										announcePoliteMessage: e,
										politeMessageId: n || "",
									});
								}),
								(t.announceAssertive = function(e, n) {
									t.setState({
										announceAssertiveMessage: e,
										assertiveMessageId: n || "",
									});
								}),
								(t.state = {
									announcePoliteMessage: "",
									politeMessageId: "",
									announceAssertiveMessage: "",
									assertiveMessageId: "",
									updateFunctions: {
										announcePolite: t.announcePolite,
										announceAssertive: t.announceAssertive,
									},
								}),
								t
							);
						}
						return (
							i(o, r),
							(o.prototype.render = function() {
								var r = this.state,
									o = r.announcePoliteMessage,
									s = r.politeMessageId,
									a = r.announceAssertiveMessage,
									i = r.assertiveMessageId,
									u = r.updateFunctions;
								return e.default.createElement(
									n.default.Provider,
									{ value: u },
									this.props.children,
									e.default.createElement(t.default, {
										assertiveMessage: a,
										assertiveMessageId: i,
										politeMessage: o,
										politeMessageId: s,
									})
								);
							}),
							o
						);
					})(e.Component),
					c = u;
				exports.default = c;
			},
			{ react: "1n8/", "./Announcer": "+wzw", "./AnnouncerContext": "5s4+" },
		],
		"f+DB": [
			function(require, module, exports) {
				var e =
					("undefined" != typeof crypto &&
						crypto.getRandomValues &&
						crypto.getRandomValues.bind(crypto)) ||
					("undefined" != typeof msCrypto &&
						"function" == typeof window.msCrypto.getRandomValues &&
						msCrypto.getRandomValues.bind(msCrypto));
				if (e) {
					var o = new Uint8Array(16);
					module.exports = function() {
						return e(o), o;
					};
				} else {
					var r = new Array(16);
					module.exports = function() {
						for (var e, o = 0; o < 16; o++)
							0 == (3 & o) && (e = 4294967296 * Math.random()),
								(r[o] = (e >>> ((3 & o) << 3)) & 255);
						return r;
					};
				}
			},
			{},
		],
		dAjQ: [
			function(require, module, exports) {
				for (var r = [], o = 0; o < 256; ++o)
					r[o] = (o + 256).toString(16).substr(1);
				function t(o, t) {
					var n = t || 0,
						u = r;
					return [
						u[o[n++]],
						u[o[n++]],
						u[o[n++]],
						u[o[n++]],
						"-",
						u[o[n++]],
						u[o[n++]],
						"-",
						u[o[n++]],
						u[o[n++]],
						"-",
						u[o[n++]],
						u[o[n++]],
						"-",
						u[o[n++]],
						u[o[n++]],
						u[o[n++]],
						u[o[n++]],
						u[o[n++]],
						u[o[n++]],
					].join("");
				}
				module.exports = t;
			},
			{},
		],
		hYHi: [
			function(require, module, exports) {
				var r = require("./lib/rng"),
					n = require("./lib/bytesToUuid");
				function e(e, i, u) {
					var a = (i && u) || 0;
					"string" == typeof e &&
						((i = "binary" === e ? new Array(16) : null), (e = null));
					var l = (e = e || {}).random || (e.rng || r)();
					if (((l[6] = (15 & l[6]) | 64), (l[8] = (63 & l[8]) | 128), i))
						for (var o = 0; o < 16; ++o) i[a + o] = l[o];
					return i || n(l);
				}
				module.exports = e;
			},
			{ "./lib/rng": "f+DB", "./lib/bytesToUuid": "dAjQ" },
		],
		H6LT: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = o(require("prop-types")),
					t = require("react"),
					n = o(require("uuid/v4"));
				function o(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function r(e, t) {
					if (!(e instanceof t))
						throw new TypeError("Cannot call a class as a function");
				}
				function u(e, t) {
					if (!e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
				}
				function i(e, t) {
					if ("function" != typeof t && null !== t)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof t
						);
					(e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0,
						},
					})),
						t &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(e, t)
								: (e.__proto__ = t));
				}
				var a = (function(e) {
					function t() {
						var o, i;
						r(this, t);
						for (var a = arguments.length, p = Array(a), s = 0; s < a; s++)
							p[s] = arguments[s];
						return (
							(o = i = u(this, e.call.apply(e, [this].concat(p)))),
							(i.announce = function() {
								var e = i.props,
									t = e.message,
									o = e["aria-live"],
									r = e.announceAssertive,
									u = e.announcePolite;
								"assertive" === o && r(t || "", (0, n.default)()),
									"polite" === o && u(t || "", (0, n.default)());
							}),
							u(i, o)
						);
					}
					return (
						i(t, e),
						(t.prototype.componentDidMount = function() {
							this.announce();
						}),
						(t.prototype.componentDidUpdate = function(e) {
							this.props.message !== e.message && this.announce();
						}),
						(t.prototype.componentWillUnmount = function() {
							var e = this.props,
								t = e.clearOnUnmount,
								n = e.announceAssertive,
								o = e.announcePolite;
							(!0 !== t && "true" !== t) || (n(""), o(""));
						}),
						(t.prototype.render = function() {
							return null;
						}),
						t
					);
				})(t.Component);
				a.propTypes = {};
				var p = a;
				exports.default = p;
			},
			{ "prop-types": "5D9O", react: "1n8/", "uuid/v4": "hYHi" },
		],
		"W/aR": [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = u(require("react")),
					r = u(require("prop-types")),
					t = u(require("./AnnouncerContext")),
					n = u(require("./AnnouncerMessage"));
				function u(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var o =
						Object.assign ||
						function(e) {
							for (var r = 1; r < arguments.length; r++) {
								var t = arguments[r];
								for (var n in t)
									Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
							}
							return e;
						},
					a = function(r) {
						return e.default.createElement(t.default.Consumer, null, function(
							t
						) {
							return e.default.createElement(n.default, o({}, t, r));
						});
					};
				a.propTypes = {};
				var l = a;
				exports.default = l;
			},
			{
				react: "1n8/",
				"prop-types": "5D9O",
				"./AnnouncerContext": "5s4+",
				"./AnnouncerMessage": "H6LT",
			},
		],
		HwO5: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = u(require("react")),
					r = u(require("prop-types")),
					t = u(require("./AnnouncerContext"));
				function u(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var n = function(r) {
					var u = r.children;
					return e.default.createElement(t.default.Consumer, null, function(e) {
						return u(e);
					});
				};
				n.propTypes = {};
				var o = n;
				exports.default = o;
			},
			{ react: "1n8/", "prop-types": "5D9O", "./AnnouncerContext": "5s4+" },
		],
		A22t: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					Object.defineProperty(exports, "LiveAnnouncer", {
						enumerable: !0,
						get: function() {
							return e.default;
						},
					}),
					Object.defineProperty(exports, "LiveMessage", {
						enumerable: !0,
						get: function() {
							return r.default;
						},
					}),
					Object.defineProperty(exports, "LiveMessenger", {
						enumerable: !0,
						get: function() {
							return t.default;
						},
					});
				var e = n(require("./modules/LiveAnnouncer")),
					r = n(require("./modules/LiveMessage")),
					t = n(require("./modules/LiveMessenger"));
				function n(e) {
					return e && e.__esModule ? e : { default: e };
				}
			},
			{
				"./modules/LiveAnnouncer": "4fA0",
				"./modules/LiveMessage": "W/aR",
				"./modules/LiveMessenger": "HwO5",
			},
		],
	},
	{},
	[],
	null
);
//# sourceMappingURL=/es.68546146.js.map
