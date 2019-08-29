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
	function d(a) {
		return a && a.__esModule ? { d: a.default } : { d: a };
	}
	var a = {};
	function s(e, t) {
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
	function r(e, t) {
		if ("function" != typeof t && null !== t)
			throw new TypeError(
				"Super expression must either be null or a function, not " + typeof t
			);
		(e.prototype = Object.create(t && t.prototype, {
			constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
		})),
			t &&
				(Object.setPrototypeOf
					? Object.setPrototypeOf(e, t)
					: (e.__proto__ = t));
	}
	function v(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function");
	}
	function g(e, t) {
		if (!e)
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
	}
	function w(e, t) {
		if ("function" != typeof t && null !== t)
			throw new TypeError(
				"Super expression must either be null or a function, not " + typeof t
			);
		(e.prototype = Object.create(t && t.prototype, {
			constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
		})),
			t &&
				(Object.setPrototypeOf
					? Object.setPrototypeOf(e, t)
					: (e.__proto__ = t));
	}
	require("5D9O"), require("1n8/");
	var x = {
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
		c = function(e) {
			var r = e.message,
				t = e["aria-live"];
			var $n8$$interop$default = d(require("1n8/"));
			return $n8$$interop$default.d.createElement(
				"div",
				{ style: x, role: "log", "aria-live": t },
				r || ""
			);
		};
	c.propTypes = {};
	require("5D9O"), require("1n8/");
	var h = (function(e) {
		function t() {
			var s, r;
			v(this, t);
			for (var a = arguments.length, o = Array(a), i = 0; i < a; i++)
				o[i] = arguments[i];
			return (
				(s = r = g(this, e.call.apply(e, [this].concat(o)))),
				(r.state = {
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
				g(r, s)
			);
		}
		return (
			w(t, e),
			(t.getDerivedStateFromProps = function(e, t) {
				var s = t.oldPolitemessage,
					r = t.oldPoliteMessageId,
					a = t.oldAssertiveMessage,
					o = t.oldAssertiveMessageId,
					i = e.politeMessage,
					l = e.politeMessageId,
					n = e.assertiveMessage,
					$ = e.assertiveMessageId;
				return s !== i || r !== l
					? {
							politeMessage1: t.setAlternatePolite ? "" : i,
							politeMessage2: t.setAlternatePolite ? i : "",
							oldPolitemessage: i,
							oldPoliteMessageId: l,
							setAlternatePolite: !t.setAlternatePolite,
					  }
					: a !== n || o !== $
					? {
							assertiveMessage1: t.setAlternateAssertive ? "" : n,
							assertiveMessage2: t.setAlternateAssertive ? n : "",
							oldAssertiveMessage: n,
							oldAssertiveMessageId: $,
							setAlternateAssertive: !t.setAlternateAssertive,
					  }
					: null;
			}),
			(t.prototype.render = function() {
				var e = this.state,
					t = e.assertiveMessage1,
					s = e.assertiveMessage2,
					r = e.politeMessage1,
					a = e.politeMessage2;
				var $n8$$interop$default = d(require("1n8/"));
				return $n8$$interop$default.d.createElement(
					"div",
					null,
					$n8$$interop$default.d.createElement(c, {
						"aria-live": "assertive",
						message: t,
					}),
					$n8$$interop$default.d.createElement(c, {
						"aria-live": "assertive",
						message: s,
					}),
					$n8$$interop$default.d.createElement(c, {
						"aria-live": "polite",
						message: r,
					}),
					$n8$$interop$default.d.createElement(c, {
						"aria-live": "polite",
						message: a,
					})
				);
			}),
			t
		);
	})(require("1n8/").Component);
	h.propTypes = {};
	require("1n8/");
	var b = d(require("1n8/"));
	var f = b.d.createContext({ announceAssertive: i, announcePolite: i });
	function i() {
		console.warn("Announcement failed, LiveAnnouncer context is missing");
	}
	require("1n8/");
	var t = (function(e) {
		function t(n) {
			s(this, t);
			var r = u(this, e.call(this, n));
			return (
				(r.announcePolite = function(e, t) {
					r.setState({ announcePoliteMessage: e, politeMessageId: t || "" });
				}),
				(r.announceAssertive = function(e, t) {
					r.setState({
						announceAssertiveMessage: e,
						assertiveMessageId: t || "",
					});
				}),
				(r.state = {
					announcePoliteMessage: "",
					politeMessageId: "",
					announceAssertiveMessage: "",
					assertiveMessageId: "",
					updateFunctions: {
						announcePolite: r.announcePolite,
						announceAssertive: r.announceAssertive,
					},
				}),
				r
			);
		}
		return (
			r(t, e),
			(t.prototype.render = function() {
				var e = this.state,
					t = e.announcePoliteMessage,
					n = e.politeMessageId,
					r = e.announceAssertiveMessage,
					s = e.assertiveMessageId,
					o = e.updateFunctions;
				return b.d.createElement(
					f.Provider,
					{ value: o },
					this.props.children,
					b.d.createElement(h, {
						assertiveMessage: r,
						assertiveMessageId: s,
						politeMessage: t,
						politeMessageId: n,
					})
				);
			}),
			t
		);
	})(require("1n8/").Component);
	function y(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function");
	}
	function j(e, t) {
		if (!e)
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
	}
	function z(e, t) {
		if ("function" != typeof t && null !== t)
			throw new TypeError(
				"Super expression must either be null or a function, not " + typeof t
			);
		(e.prototype = Object.create(t && t.prototype, {
			constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
		})),
			t &&
				(Object.setPrototypeOf
					? Object.setPrototypeOf(e, t)
					: (e.__proto__ = t));
	}
	var A = {},
		k =
			("undefined" != typeof crypto &&
				crypto.getRandomValues &&
				crypto.getRandomValues.bind(crypto)) ||
			("undefined" != typeof msCrypto &&
				"function" == typeof window.msCrypto.getRandomValues &&
				msCrypto.getRandomValues.bind(msCrypto));
	if (k) {
		var l = new Uint8Array(16);
		A = function() {
			return k(l), l;
		};
	} else {
		var m = new Array(16);
		A = function() {
			for (var r, $ = 0; $ < 16; $++)
				0 == (3 & $) && (r = 4294967296 * Math.random()),
					(m[$] = (r >>> ((3 & $) << 3)) & 255);
			return m;
		};
	}
	for (var B = {}, n = [], e = 0; e < 256; ++e)
		n[e] = (e + 256).toString(16).substr(1);
	function C($, r) {
		var d = r || 0,
			j = n;
		return [
			j[$[d++]],
			j[$[d++]],
			j[$[d++]],
			j[$[d++]],
			"-",
			j[$[d++]],
			j[$[d++]],
			"-",
			j[$[d++]],
			j[$[d++]],
			"-",
			j[$[d++]],
			j[$[d++]],
			"-",
			j[$[d++]],
			j[$[d++]],
			j[$[d++]],
			j[$[d++]],
			j[$[d++]],
			j[$[d++]],
		].join("");
	}
	B = C;
	var D = {};
	function E(r, $, i) {
		var a = ($ && i) || 0;
		"string" == typeof r &&
			(($ = "binary" === r ? new Array(16) : null), (r = null));
		var e = (r = r || {}).random || (r.rng || A)();
		if (((e[6] = (15 & e[6]) | 64), (e[8] = (63 & e[8]) | 128), $))
			for (var n = 0; n < 16; ++n) $[a + n] = e[n];
		return $ || B(e);
	}
	D = E;
	require("5D9O"), require("1n8/");
	var o = (function(e) {
		function t() {
			var n, r;
			y(this, t);
			for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
				a[i] = arguments[i];
			return (
				(n = r = j(this, e.call.apply(e, [this].concat(a)))),
				(r.announce = function() {
					var e = r.props,
						t = e.message,
						n = e["aria-live"],
						o = e.announceAssertive,
						a = e.announcePolite;
					var $hYHi$$interop$default = d(D);
					"assertive" === n && o(t || "", $hYHi$$interop$default.d()),
						"polite" === n && a(t || "", $hYHi$$interop$default.d());
				}),
				j(r, n)
			);
		}
		return (
			z(t, e),
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
					r = e.announcePolite;
				(!0 !== t && "true" !== t) || (n(""), r(""));
			}),
			(t.prototype.render = function() {
				return null;
			}),
			t
		);
	})(require("1n8/").Component);
	o.propTypes = {};
	require("1n8/"), require("5D9O");
	var F =
			Object.assign ||
			function(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = arguments[r];
					for (var $ in t)
						Object.prototype.hasOwnProperty.call(t, $) && (e[$] = t[$]);
				}
				return e;
			},
		p = function(e) {
			return b.d.createElement(f.Consumer, null, function(r) {
				return b.d.createElement(o, F({}, r, e));
			});
		};
	p.propTypes = {};
	require("1n8/"), require("5D9O");
	var q = function(e) {
		var r = e.children;
		return b.d.createElement(f.Consumer, null, function(e) {
			return r(e);
		});
	};
	q.propTypes = {};
	(a.LiveAnnouncer = t), (a.LiveMessage = p), (a.LiveMessenger = q);
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = a;
	} else if (typeof define === "function" && define.amd) {
		define(function() {
			return a;
		});
	}
	a.__esModule = true;
	return { A22t: a };
});
