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
	function b(a) {
		return a && a.__esModule ? { d: a.default } : { d: a };
	}
	var g = {};
	function F() {
		return (F =
			Object.assign ||
			function(r) {
				for (var t = 1; t < arguments.length; t++) {
					var e = arguments[t];
					for (var $ in e)
						Object.prototype.hasOwnProperty.call(e, $) && (r[$] = e[$]);
				}
				return r;
			}).apply(this, arguments);
	}
	var u = F;
	function m(e, t) {
		if (null == e) return {};
		var r,
			$,
			f = {},
			n = Object.keys(e);
		for ($ = 0; $ < n.length; $++)
			(r = n[$]), t.indexOf(r) >= 0 || (f[r] = e[r]);
		return f;
	}
	function n(t, r) {
		(t.prototype = Object.create(r.prototype)),
			(t.prototype.constructor = t),
			(t.__proto__ = r);
	}
	var H = {};
	function I(e) {
		return e && e.__esModule ? e : { default: e };
	}
	H = I;
	var o = {},
		J = !0;
	o.__esModule = J;
	var t = K;
	function K(a, $) {
		return a.classList
			? !!$ && a.classList.contains($)
			: -1 !==
					(" " + (a.className.baseVal || a.className) + " ").indexOf(
						" " + $ + " "
					);
	}
	(o.default = t), (o = t);
	var L = N;
	var M = H(o);
	function N(e, a) {
		e.classList
			? e.classList.add(a)
			: (0, M.default)(e, a) ||
			  ("string" == typeof e.className
					? (e.className = e.className + " " + a)
					: e.setAttribute(
							"class",
							((e.className && e.className.baseVal) || "") + " " + a
					  ));
	}
	var O = {};
	function v(s, a) {
		return s
			.replace(new RegExp("(^|\\s)" + a + "(?:\\s|$)", "g"), "$1")
			.replace(/\s+/g, " ")
			.replace(/^\s*|\s*$/g, "");
	}
	O = function(s, a) {
		s.classList
			? s.classList.remove(a)
			: "string" == typeof s.className
			? (s.className = v(s.className, a))
			: s.setAttribute(
					"class",
					v((s.className && s.className.baseVal) || "", a)
			  );
	};
	var y = { disabled: !1 };
	require("5D9O");
	require("1n8/");
	var j = b(require("1n8/"));
	var h = j.d.createContext(null);
	require("5D9O"), require("1n8/"), require("NKHc");
	var i = "unmounted";
	var d = "exited";
	var f = "entering";
	var k = "entered";
	var z = "exiting";
	var a = (function(e) {
		function t(t, r) {
			var o;
			o = e.call(this, t, r) || this;
			var n,
				$ = r && !r.isMounting ? t.enter : t.appear;
			return (
				(o.appearStatus = null),
				t.in
					? $
						? ((n = d), (o.appearStatus = f))
						: (n = k)
					: (n = t.unmountOnExit || t.mountOnEnter ? i : d),
				(o.state = { status: n }),
				(o.nextCallback = null),
				o
			);
		}
		n(t, e),
			(t.getDerivedStateFromProps = function(e, t) {
				return e.in && t.status === i ? { status: d } : null;
			});
		var r = t.prototype;
		return (
			(r.componentDidMount = function() {
				this.updateStatus(!0, this.appearStatus);
			}),
			(r.componentDidUpdate = function(e) {
				var t = null;
				if (e !== this.props) {
					var r = this.state.status;
					this.props.in
						? r !== f && r !== k && (t = f)
						: (r !== f && r !== k) || (t = z);
				}
				this.updateStatus(!1, t);
			}),
			(r.componentWillUnmount = function() {
				this.cancelNextCallback();
			}),
			(r.getTimeouts = function() {
				var e,
					t,
					r,
					o = this.props.timeout;
				return (
					(e = t = r = o),
					null != o &&
						"number" != typeof o &&
						((e = o.exit),
						(t = o.enter),
						(r = void 0 !== o.appear ? o.appear : t)),
					{ exit: e, enter: t, appear: r }
				);
			}),
			(r.updateStatus = function(e, t) {
				if ((void 0 === e && (e = !1), null !== t)) {
					this.cancelNextCallback();
					var $NKHc$$interop$default = b(require("NKHc"));
					var r = $NKHc$$interop$default.d.findDOMNode(this);
					t === f ? this.performEnter(r, e) : this.performExit(r);
				} else
					this.props.unmountOnExit &&
						this.state.status === d &&
						this.setState({ status: i });
			}),
			(r.performEnter = function(e, t) {
				var r = this,
					o = this.props.enter,
					n = this.context ? this.context.isMounting : t,
					$ = this.getTimeouts(),
					i = n ? $.appear : $.enter;
				(!t && !o) || y.disabled
					? this.safeSetState({ status: k }, function() {
							r.props.onEntered(e);
					  })
					: (this.props.onEnter(e, n),
					  this.safeSetState({ status: f }, function() {
							r.props.onEntering(e, n),
								r.onTransitionEnd(e, i, function() {
									r.safeSetState({ status: k }, function() {
										r.props.onEntered(e, n);
									});
								});
					  }));
			}),
			(r.performExit = function(e) {
				var t = this,
					r = this.props.exit,
					o = this.getTimeouts();
				r && !y.disabled
					? (this.props.onExit(e),
					  this.safeSetState({ status: z }, function() {
							t.props.onExiting(e),
								t.onTransitionEnd(e, o.exit, function() {
									t.safeSetState({ status: d }, function() {
										t.props.onExited(e);
									});
								});
					  }))
					: this.safeSetState({ status: d }, function() {
							t.props.onExited(e);
					  });
			}),
			(r.cancelNextCallback = function() {
				null !== this.nextCallback &&
					(this.nextCallback.cancel(), (this.nextCallback = null));
			}),
			(r.safeSetState = function(e, t) {
				(t = this.setNextCallback(t)), this.setState(e, t);
			}),
			(r.setNextCallback = function(e) {
				var t = this,
					r = !0;
				return (
					(this.nextCallback = function(o) {
						r && ((r = !1), (t.nextCallback = null), e(o));
					}),
					(this.nextCallback.cancel = function() {
						r = !1;
					}),
					this.nextCallback
				);
			}),
			(r.onTransitionEnd = function(e, t, r) {
				this.setNextCallback(r);
				var o = null == t && !this.props.addEndListener;
				e && !o
					? (this.props.addEndListener &&
							this.props.addEndListener(e, this.nextCallback),
					  null != t && setTimeout(this.nextCallback, t))
					: setTimeout(this.nextCallback, 0);
			}),
			(r.render = function() {
				var e = this.state.status;
				if (e === i) return null;
				var t = this.props,
					r = t.children,
					o = m(t, ["children"]);
				if (
					(delete o.in,
					delete o.mountOnEnter,
					delete o.unmountOnExit,
					delete o.appear,
					delete o.enter,
					delete o.exit,
					delete o.timeout,
					delete o.addEndListener,
					delete o.onEnter,
					delete o.onEntering,
					delete o.onEntered,
					delete o.onExit,
					delete o.onExiting,
					delete o.onExited,
					"function" == typeof r)
				)
					return j.d.createElement(h.Provider, { value: null }, r(e, o));
				var n = j.d.Children.only(r);
				return j.d.createElement(
					h.Provider,
					{ value: null },
					j.d.cloneElement(n, o)
				);
			}),
			t
		);
	})(j.d.Component);
	function e() {}
	(a.contextType = h),
		(a.propTypes = {}),
		(a.defaultProps = {
			in: !1,
			mountOnEnter: !1,
			unmountOnExit: !1,
			appear: !1,
			enter: !0,
			exit: !0,
			onEnter: e,
			onEntering: e,
			onEntered: e,
			onExit: e,
			onExiting: e,
			onExited: e,
		}),
		(a.UNMOUNTED = 0),
		(a.EXITED = 1),
		(a.ENTERING = 2),
		(a.ENTERED = 3),
		(a.EXITING = 4);
	require("5D9O"), require("1n8/");
	var P = function(e, t) {
			return (
				e &&
				t &&
				t.split(" ").forEach(function(t) {
					return L(e, t);
				})
			);
		},
		p = function(e, t) {
			return (
				e &&
				t &&
				t.split(" ").forEach(function(t) {
					var $hW4d$$interop$default = b(O);
					return $hW4d$$interop$default.d(e, t);
				})
			);
		},
		w = (function(e) {
			function t() {
				for (var t, s = arguments.length, r = new Array(s), a = 0; a < s; a++)
					r[a] = arguments[a];
				return (
					((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
						appear: {},
						enter: {},
						exit: {},
					}),
					(t.onEnter = function(e, s) {
						t.removeClasses(e, "exit"),
							t.addClass(e, s ? "appear" : "enter", "base"),
							t.props.onEnter && t.props.onEnter(e, s);
					}),
					(t.onEntering = function(e, s) {
						var r = s ? "appear" : "enter";
						t.addClass(e, r, "active"),
							t.props.onEntering && t.props.onEntering(e, s);
					}),
					(t.onEntered = function(e, s) {
						var r = s ? "appear" : "enter";
						t.removeClasses(e, r),
							t.addClass(e, r, "done"),
							t.props.onEntered && t.props.onEntered(e, s);
					}),
					(t.onExit = function(e) {
						t.removeClasses(e, "appear"),
							t.removeClasses(e, "enter"),
							t.addClass(e, "exit", "base"),
							t.props.onExit && t.props.onExit(e);
					}),
					(t.onExiting = function(e) {
						t.addClass(e, "exit", "active"),
							t.props.onExiting && t.props.onExiting(e);
					}),
					(t.onExited = function(e) {
						t.removeClasses(e, "exit"),
							t.addClass(e, "exit", "done"),
							t.props.onExited && t.props.onExited(e);
					}),
					(t.getClassNames = function(e) {
						var s = t.props.classNames,
							r = "string" == typeof s,
							a = r ? "" + (r && s ? s + "-" : "") + e : s[e];
						return {
							baseClassName: a,
							activeClassName: r ? a + "-active" : s[e + "Active"],
							doneClassName: r ? a + "-done" : s[e + "Done"],
						};
					}),
					t
				);
			}
			n(t, e);
			var s = t.prototype;
			return (
				(s.addClass = function(e, t, s) {
					var r = this.getClassNames(t)[s + "ClassName"];
					"appear" === t &&
						"done" === s &&
						(r += " " + this.getClassNames("enter").doneClassName),
						"active" === s && e && e.scrollTop,
						(this.appliedClasses[t][s] = r),
						P(e, r);
				}),
				(s.removeClasses = function(e, t) {
					var s = this.appliedClasses[t],
						r = s.base,
						a = s.active,
						n = s.done;
					(this.appliedClasses[t] = {}),
						r && p(e, r),
						a && p(e, a),
						n && p(e, n);
				}),
				(s.render = function() {
					var e = this.props,
						t = (e.classNames, m(e, ["classNames"]));
					return j.d.createElement(
						a,
						u({}, t, {
							onEnter: this.onEnter,
							onEntered: this.onEntered,
							onEntering: this.onEntering,
							onExit: this.onExit,
							onExiting: this.onExiting,
							onExited: this.onExited,
						})
					);
				}),
				t
			);
		})(j.d.Component);
	(w.defaultProps = { classNames: "" }), (w.propTypes = {});
	function A(e) {
		if (void 0 === e)
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		return e;
	}
	function q(e, t) {
		var r = Object.create(null);
		return (
			e &&
				require("1n8/")
					.Children.map(e, function(e) {
						return e;
					})
					.forEach(function(e) {
						r[e.key] = (function(e) {
							return t && require("1n8/").isValidElement(e) ? t(e) : e;
						})(e);
					}),
			r
		);
	}
	function Q(e, t) {
		function r(r) {
			return r in t ? t[r] : e[r];
		}
		(e = e || {}), (t = t || {});
		var n,
			$ = Object.create(null),
			i = [];
		for (var p in e) p in t ? i.length && (($[p] = i), (i = [])) : i.push(p);
		var u = {};
		for (var o in t) {
			if ($[o])
				for (n = 0; n < $[o].length; n++) {
					var l = $[o][n];
					u[$[o][n]] = r(l);
				}
			u[o] = r(o);
		}
		for (n = 0; n < i.length; n++) u[i[n]] = r(i[n]);
		return u;
	}
	function c(e, t, r) {
		return null != r[t] ? r[t] : e.props[t];
	}
	function R(e, t) {
		return q(e.children, function(r) {
			return require("1n8/").cloneElement(r, {
				onExited: t.bind(null, r),
				in: !0,
				appear: c(r, "appear", e),
				enter: c(r, "enter", e),
				exit: c(r, "exit", e),
			});
		});
	}
	function S(e, t, r) {
		var n = q(e.children),
			$ = Q(t, n);
		return (
			Object.keys($).forEach(function(i) {
				var p = $[i];
				if (require("1n8/").isValidElement(p)) {
					var u = i in t,
						o = i in n,
						l = t[i],
						a = require("1n8/").isValidElement(l) && !l.props.in;
					!o || (u && !a)
						? o || !u || a
							? o &&
							  u &&
							  require("1n8/").isValidElement(l) &&
							  ($[i] = require("1n8/").cloneElement(p, {
									onExited: r.bind(null, p),
									in: l.props.in,
									exit: c(p, "exit", e),
									enter: c(p, "enter", e),
							  }))
							: ($[i] = require("1n8/").cloneElement(p, { in: !1 }))
						: ($[i] = require("1n8/").cloneElement(p, {
								onExited: r.bind(null, p),
								in: !0,
								exit: c(p, "exit", e),
								enter: c(p, "enter", e),
						  }));
				}
			}),
			$
		);
	}
	require("1n8/");
	require("5D9O"), require("1n8/");
	var T =
			Object.values ||
			function(e) {
				return Object.keys(e).map(function(t) {
					return e[t];
				});
			},
		U = {
			component: "div",
			childFactory: function(e) {
				return e;
			},
		},
		x = (function(e) {
			function t(t, r) {
				var i,
					n = (i = e.call(this, t, r) || this).handleExited.bind(A(A(i)));
				return (
					(i.state = {
						contextValue: { isMounting: !0 },
						handleExited: n,
						firstRender: !0,
					}),
					i
				);
			}
			n(t, e);
			var r = t.prototype;
			return (
				(r.componentDidMount = function() {
					(this.mounted = !0),
						this.setState({ contextValue: { isMounting: !1 } });
				}),
				(r.componentWillUnmount = function() {
					this.mounted = !1;
				}),
				(t.getDerivedStateFromProps = function(e, t) {
					var r = t.children,
						i = t.handleExited;
					return {
						children: t.firstRender ? R(e, i) : S(e, r, i),
						firstRender: !1,
					};
				}),
				(r.handleExited = function(e, t) {
					var r = q(this.props.children);
					e.key in r ||
						(e.props.onExited && e.props.onExited(t),
						this.mounted &&
							this.setState(function(t) {
								var r = u({}, t.children);
								return delete r[e.key], { children: r };
							}));
				}),
				(r.render = function() {
					var e = this.props,
						t = e.component,
						r = e.childFactory,
						i = m(e, ["component", "childFactory"]),
						n = this.state.contextValue,
						o = T(this.state.children).map(r);
					return (
						delete i.appear,
						delete i.enter,
						delete i.exit,
						null === t
							? j.d.createElement(h.Provider, { value: n }, o)
							: j.d.createElement(
									h.Provider,
									{ value: n },
									j.d.createElement(t, i, o)
							  )
					);
				}),
				t
			);
		})(j.d.Component);
	(x.propTypes = {}), (x.defaultProps = U);
	function V(e, t) {
		return e.findIndex(function(e) {
			return +e == +t;
		});
	}
	function W(e) {
		var o = e.monthlyChecked,
			m = e.handleTabClick,
			t = o,
			$ = !o;
		return require("haMh").jsx(
			require("T33x").default,
			{ className: "monthly-giving-info" },
			require("haMh").jsx("legend", null, "Select Monthly or One-Time Gift"),
			require("haMh").jsx(
				require("01J/").default,
				{
					className: "monthly-tab",
					role: "tablist",
					"aria-label": "Giving Tabs",
				},
				require("haMh").jsx(B, {
					id: "monthly",
					name: "monthly-toggle",
					label: "Monthly Partner",
					checked: t,
					handleTabClick: m,
				}),
				require("haMh").jsx(require("4XSi").default, { color: "transparent" }),
				require("haMh").jsx(B, {
					id: "single",
					name: "monthly-toggle",
					label: "Single Gift",
					checked: $,
					handleTabClick: m,
				})
			)
		);
	}
	function B(o) {
		var e = o.id,
			r = o.name,
			t = o.checked,
			g = o.handleTabClick,
			l = o.label,
			a = (0,
			require("1n8/").useContext(require("XmuQ").FormConfigContext)
				.getCssConfig)("toggle"),
			i = a.toggleColor,
			$ = void 0 === i ? "#fff" : i,
			n = a.toggleBackgroundColor,
			d = void 0 === n ? "#1775BC" : n,
			c = a.toggleBorderColor,
			C = void 0 === c ? "transparent" : c,
			p = a.toggleBorderRadius,
			u = void 0 === p ? "5px" : p,
			m = a.toggleHoverColor,
			T = void 0 === m ? "#1775BC" : m,
			s = a.toggleHoverBackgroundColor,
			v = void 0 === s ? "#fff" : s,
			f = a.toggleHoverBorderColor,
			L = void 0 === f ? "#1775BC" : f;
		return require("haMh").jsx(
			X,
			{
				id: "".concat(e, "-group"),
				className: "tab-group",
				toggleColor: $,
				toggleBackgroundColor: d,
				toggleBorderColor: C,
				toggleBorderRadius: u,
				toggleHoverColor: T,
				toggleHoverBackgroundColor: v,
				toggleHoverBorderColor: L,
			},
			require("haMh").jsx("input", {
				className: "tab-group__input",
				name: r,
				id: "".concat(e, "gift"),
				type: "checkbox",
				checked: t,
				onChange: g,
				role: "tab",
				"aria-selected": t,
				"aria-controls": "",
				tabIndex: t ? 0 : -1,
			}),
			require("haMh").jsx("label", { htmlFor: "".concat(e, "gift") }, l)
		);
	}
	require("4vQ7"), require("1n8/");
	var X = require("4vQ7").default("div", {
		target: "e768zmz0",
		label: "ClubTabGroup",
	})(
		'&.tab-group{box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;height:50px;line-height:50px;flex:1 1 50%;max-width:360px;}input[type="checkbox"].tab-group__input{position:absolute !important;left:-10000px !important;top:auto !important;bottom:auto !important;width:1px !important;height:1px !important;overflow:hidden !important;}input[type="checkbox"].tab-group__input + label{display:block;height:50px;line-height:50px !important;cursor:pointer;width:100%;text-align:center;background-color:',
		function(o) {
			return o.toggleBackgroundColor;
		},
		";border-radius:",
		function(o) {
			return o.toggleBorderRadius;
		},
		";border:2px solid ",
		function(o) {
			return o.toggleBorderColor;
		},
		";margin-bottom:0;color:",
		function(o) {
			return o.toggleColor;
		},
		';transition:color 200ms ease-in-out,background-color 200ms ease-in-out,border-color 200ms ease-in-out;position:relative;}input[type="checkbox"].tab-group__input:checked + label,input[type="checkbox"].tab-group__input + label:hover{color:',
		function(o) {
			return o.toggleHoverColor;
		},
		";background-color:",
		function(o) {
			return o.toggleHoverBackgroundColor;
		},
		";border-color:",
		function(o) {
			return o.toggleHoverBorderColor;
		},
		';}input[type="checkbox"].tab-group__input:checked + label::after{content:"";display:block;border-top:10px solid ',
		function(o) {
			return o.toggleBorderColor;
		},
		";border-left:15px solid transparent;border-right:15px solid transparent;position:absolute;left:50%;transform:translateX(-50%);}"
	);
	require("haMh"), require("1n8/"), require("XmuQ");
	require("haMh"),
		require("1n8/"),
		require("4XSi"),
		require("T33x"),
		require("01J/");
	require("4vQ7"), require("1n8/");
	var Y = require("4vQ7").default("div", {
		target: "e3cu5ei0",
		label: "ClubAskArray",
	})({
		name: "kc304e",
		styles:
			"display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;&.askarray--club{position:relative;box-sizing:border-box;height:auto;width:calc(100% + 5px);border-bottom:5px solid transparent;flex-wrap:nowrap;margin:30px 0;flex-wrap:nowrap;justify-content:space-between;outline:none;@media screen and (max-width:716px){flex-wrap:wrap;}}",
	});
	require("4vQ7"), require("1n8/");
	var Z = require("4vQ7").default("div", {
		target: "e11xy15m0",
		label: "ClubAskArrayBtn",
	})(
		"display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;&.askbutton--club{box-sizing:border-box;flex:0 0 95px;margin:0 2.5px;@media screen and (max-width:535px){flex-basis:70px;}@media screen and (max-width:395px){flex-basis:60px;}@media screen and (max-width:360px){flex-basis:55px;}@media screen and (max-width:336px){flex-basis:52px;}}div{display:flex;flex-direction:row;justify-content:center;align-items:center;}div.askbutton__amt{background-color:",
		function(e) {
			return e.arrayBackgroundColor;
		},
		";border-radius:",
		function(e) {
			return e.arrayBorderRadius;
		},
		";border:2px solid ",
		function(e) {
			return e.arrayBorderColor;
		},
		";box-sizing:border-box;color:",
		function(e) {
			return e.arrayColor;
		},
		";cursor:pointer;-webkit-flex-basis:calc(19px * 4.55);-ms-flex-preferred-size:calc(19px * 4.55);font-weight:600;font-size:calc(19px * 1.4);height:calc(19px * 2.5);text-align:center;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;@media screen and (max-width:395px){font-size:19px;}}&:focus div:not(.club-level),&:hover div:not(.club-level),&:active div:not(.club-level),div:not(.club-level):hover,div:not(.club-level):focus,div:not(.club-level):active,&.selected div:not(.club-level){background-color:",
		function(e) {
			return e.arrayHoverBackgroundColor;
		},
		";color:",
		function(e) {
			return e.arrayHoverColor;
		},
		";border-color:",
		function(e) {
			return e.arrayHoverBorderColor;
		},
		";}div.club-level{position:absolute;font-weight:bold;font-size:14px;color:",
		function(e) {
			return e.arrayDescriptorColor;
		},
		";text-align:center;width:110%;left:50%;top:100%;transform:translateX(-50%);@media screen and (max-width:395px){width:100%;font-size:12px;}}"
	);
	require("haMh"), require("1n8/"), require("XmuQ");
	var aa = {
			20: "700 Club",
			40: "700 Club Gold",
			84: "1000 Club",
			209: "2500 Club",
			417: "Founder's Club",
		},
		$ = function(r) {
			var o = r.amounts,
				a = r.selectedIndex,
				e = (r.format, r.monthlyChecked),
				t = r.addToCart,
				$ = (0,
				require("1n8/").useContext(require("XmuQ").FormConfigContext)
					.getCssConfig)("array"),
				i = $.arrayColor,
				n = void 0 === i ? "#fff" : i,
				p = $.arrayBackgroundColor,
				l = void 0 === p ? "#1775BC" : p,
				s = $.arrayBorderColor,
				u = void 0 === s ? "transparent" : s,
				m = $.arrayBorderRadius,
				C = void 0 === m ? "5px" : m,
				c = $.arrayHoverColor,
				x = void 0 === c ? "#1775BC" : c,
				d = $.arrayHoverBackgroundColor,
				v = void 0 === d ? "#fff" : d,
				y = $.arrayHoverBorderColor,
				F = void 0 === y ? "#1775BC" : y,
				Q = $.arrayDescriptorColor,
				_ = void 0 === Q ? "#DDB007" : Q;
			return o.map(function(r, o) {
				return require("haMh").jsx(
					w,
					{
						in: !0,
						key: "array-".concat(e ? "monthly" : "single", "-").concat(o),
						timeout: 400,
						classNames: "askarray-item",
						unmountOnExit: !0,
						appear: !0,
					},
					require("haMh").jsx(
						Z,
						{
							className: "askbutton--club ".concat(a == o ? "selected" : ""),
							onClick: function() {
								return t(r, o);
							},
							arrayColor: n,
							arrayBackgroundColor: l,
							arrayBorderColor: u,
							arrayBorderRadius: C,
							arrayHoverColor: x,
							arrayHoverBackgroundColor: v,
							arrayHoverBorderColor: F,
							arrayDescriptorColor: _,
						},
						require("haMh").jsx("div", { className: "askbutton__amt" }, "$", r),
						require("haMh").jsx(
							w,
							{
								in: e,
								timeout: 400,
								classNames: "askarray-item--level",
								unmountOnExit: !0,
							},
							require("haMh").jsx("div", { className: "club-level" }, aa[r])
						)
					)
				);
			});
		},
		_ = require("1n8/").memo($);
	require("4vQ7"), require("haMh"), require("1n8/"), require("XmuQ");
	var ba = require("4vQ7").default("div", {
			target: "epin2e0",
			label: "ClubOtherGiftAmountStyle",
		})(
			"display:flex;flex-direction:row;justify-content:center;line-height:unset;&.askarray--other{position:relative;box-sizing:border-box;flex:0 0 150px;margin:0 2.5px;@media screen and (max-width:716px){margin:0 auto;margin-top:40px;flex-basis:160px;justify-self:center;}}div{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;line-height:unset;margin-bottom:0;position:relative;white-space:nowrap;width:100%;label{font-size:calc(19px * 0.7);font-weight:600;color:",
			function(r) {
				return r.arrayColor;
			},
			";box-sizing:border-box;position:absolute;left:50%;top:100%;transform:translateX(-50%);}}div.askarray__form-group--other{justify-content:center;max-width:400px;input{position:relative;appearance:none;background:none;background-color:",
			function(r) {
				return r.arrayBackgroundColor;
			},
			";height:calc(19px * 2.5);width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:2px solid ",
			function(r) {
				return r.arrayBorderColor;
			},
			";border-radius:",
			function(r) {
				return r.arrayBorderRadius;
			},
			";box-sizing:border-box;color:",
			function(r) {
				return r.arrayColor;
			},
			";font-size:calc(19px * 1.4);text-align:center;font-weight:600;max-width:220px;white-space:nowrap;}input:hover,input:active,input:focus{border:2px solid ",
			function(r) {
				return r.arrayHoverBorderColor;
			},
			";background-color:",
			function(r) {
				return r.arrayHoverBackgroundColor;
			},
			";color:",
			function(r) {
				return r.arrayHoverColor;
			},
			";box-sizing:border-box;outline:none;}&.selected input{border:2px solid ",
			function(r) {
				return r.arrayHoverBorderColor;
			},
			";background-color:",
			function(r) {
				return r.arrayHoverBackgroundColor;
			},
			";color:",
			function(r) {
				return r.arrayHoverColor;
			},
			";}div.other-amt-error{box-sizing:border-box;position:absolute;color:",
			function(r) {
				return r.errorColor;
			},
			";width:auto;font-weight:600;font-size:16px;opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:-36px;left:50%;transform:translateX(-50%);}}div.selected{}"
		),
		ca = function(r) {
			var o = r.children,
				e = r.style,
				t = void 0 === e ? {} : e,
				a = require("1n8/").useContext(require("XmuQ").FormConfigContext)
					.getCssConfig,
				i = a("array"),
				n = i.arrayColor,
				d = void 0 === n ? "#fff" : n,
				l = i.arrayBackgroundColor,
				u = void 0 === l ? "#1775BC" : l,
				s = i.arrayBorderColor,
				c = void 0 === s ? "transparent" : s,
				b = i.arrayBorderRadius,
				p = void 0 === b ? "5px" : b,
				f = i.arrayHoverColor,
				x = void 0 === f ? "#1775BC" : f,
				y = i.arrayHoverBackgroundColor,
				C = void 0 === y ? "#fff" : y,
				v = i.arrayHoverBorderColor,
				g = void 0 === v ? "#1775BC" : v,
				m = i.arrayDescriptorColor,
				$ = void 0 === m ? "#DDB007" : m,
				h = a("error").errorColor;
			return require("haMh").jsx(
				ba,
				{
					id: "OtherGiftAmount",
					className: "askarray--other",
					style: t,
					arrayColor: d,
					arrayBackgroundColor: u,
					arrayBorderColor: c,
					arrayBorderRadius: p,
					arrayHoverColor: x,
					arrayHoverBackgroundColor: C,
					arrayHoverBorderColor: g,
					arrayDescriptorColor: $,
					errorColor: void 0 === h ? "crimson" : h,
				},
				o
			);
		};
	require("Fhqp"),
		require("0fcM"),
		require("P8NW"),
		require("0421"),
		require("UJE0"),
		require("d4H2"),
		require("haMh"),
		require("1n8/"),
		require("zetz"),
		require("T33x"),
		require("PA8K");
	var G = (function(e) {
		function t() {
			var e, r;
			var $fcM$$interop$default = b(require("0fcM"));
			$fcM$$interop$default.d(this, t);
			for (var o = arguments.length, i = new Array(o), n = 0; n < o; n++)
				i[n] = arguments[n];
			var $_$$interop$default = b(require("0421"));
			var $UJE0$$interop$default = b(require("UJE0"));
			return (
				((r = $_$$interop$default.d(
					this,
					(e = $UJE0$$interop$default.d(t)).call.apply(e, [this].concat(i))
				)).otherAmountField = j.d.createRef()),
				(r.state = {
					prevIndex: null,
					selectedIndex: null,
					otherAmount: 0,
					otherAmountError: "",
				}),
				(r.addToCart = function(e, t) {
					var o = r.state,
						i = o.otherAmountError,
						n = o.selectedIndex;
					r.setState(
						{
							otherAmount: 99 == t ? e : 0,
							selectedIndex: t,
							otherAmountError: 99 !== t ? "" : i,
							prevIndex: n,
						},
						function() {
							if (e) {
								var t = r.props,
									o = t.monthlyChecked,
									i = t.givingOptions,
									n = i.monthlyPledgeData,
									a = i.singlePledgeData;
								r.context.addToCart({
									type: "ADD_TO_CART",
									item: {
										type: "donation",
										PledgeAmount: e,
										DetailCprojMail: o ? n.DetailCprojMail : a.DetailCprojMail,
										DetailCprojCredit: o
											? n.DetailCprojCredit
											: a.DetailCprojCredit,
										DetailDescription: o
											? n.DetailDescription
											: a.DetailDescription,
										DetailName: o ? n.DetailName : a.DetailName,
										monthly: o,
									},
								});
							} else
								r.context.removeFromCart({
									type: "REMOVE_FROM_CART",
									itemType: "donation",
								});
						}
					);
				}),
				(r.handleFocus = function(e) {
					r.setState(
						function(e, t) {
							if (99 !== e.selectedIndex)
								return { selectedIndex: 99, prevIndex: e.selectedIndex };
						},
						function() {
							0 == r.state.otherAmount &&
								r.props.givingInfo &&
								!r.props.givingInfo.amount &&
								r.context.removeFromCart("donation"),
								r.otherAmountField.current.focus();
						}
					);
				}),
				(r.handleOtherAmt = function(e) {
					var t = r.state.selectedIndex,
						o = e.target.value.trim(),
						i = /^[0-9]{1,}$/.test(o);
					i && o > 0
						? r.setState(
								{ otherAmountError: "", otherAmount: o, prevIndex: t },
								function() {
									return r.addToCart(+o, 99);
								}
						  )
						: i
						? r.setState(
								{
									otherAmount: 0,
									selectedIndex: null,
									otherAmountError: "",
									prevIndex: t,
								},
								function() {
									return r.context.removeFromCart({
										type: "REMOVE_FROM_CART",
										itemType: "donation",
									});
								}
						  )
						: r.setState({
								otherAmount: 0,
								otherAmountError: "" !== o ? "Numbers Only" : "",
								prevIndex: t,
						  });
				}),
				r
			);
		}
		var $d4H2$$interop$default = b(require("d4H2"));
		var $P8NW$$interop$default = b(require("P8NW"));
		return (
			$d4H2$$interop$default.d(t, e),
			$P8NW$$interop$default.d(t, [
				{
					key: "componentDidMount",
					value: function() {
						var e = 0,
							t = [],
							r = this.props,
							o = r.defaultAmount,
							i = r.defaultOption,
							n = r.givingOptions,
							a = n.monthlyAmounts,
							l = n.singleAmounts,
							m = n.monthlyOption,
							$ = this.context,
							u = $.initialized,
							s = $.cart;
						if (u) {
							var $Fhqp$$interop$default = b(require("Fhqp"));
							var p = $Fhqp$$interop$default.d(s.items),
								c = p.findIndex(function(e) {
									return e && "donation" == e.type;
								}),
								d = c > -1 && p[c].monthly;
							(e = c > -1 ? p[c].PledgeAmount : 0), (t = d ? a : l);
						} else
							(t = "" !== i ? ("monthly" == i ? a : l) : m ? a : l), (e = o);
						if (e > 0 && t.length) {
							var v = V(t, e),
								h = v >= 0 ? v : 99;
							h >= 0 && this.addToCart(e, h);
						}
					},
				},
				{
					key: "render",
					value: function() {
						var e = this.props,
							t = e.amountError,
							r = e.monthlyChecked,
							o = e.handleRadioClick,
							i = e.givingOptions,
							n = i.monthlyAmounts,
							a = i.singleAmounts,
							l = this.state,
							m = l.otherAmount,
							$ = l.otherAmountError,
							u = l.selectedIndex,
							s = this.context.givingInfo,
							p = s.amount,
							c = s.isMonthly,
							d = "controlled";
						if (p) {
							var v = c ? n.indexOf(p) : a.indexOf(p);
							(u = v > -1 ? v : 99), (m = p), (r = c);
						} else
							(m = 99 == u ? m : r ? n[u] : a[u]),
								(d = 99 == u || null === u ? d : (r ? n[u] : a[u]) + "-key");
						var h = r ? n : a;
						return require("haMh").jsx(
							require("T33x").default,
							null,
							require("haMh").jsx(
								"legend",
								null,
								"Giving Amounts and Giving Options"
							),
							require("haMh").jsx(W, { monthlyChecked: r, handleTabClick: o }),
							require("haMh").jsx(
								Y,
								{
									id: "AskArray",
									className: "askarray--club",
									role: "tabpanel",
									tabIndex: "0",
									"aria-labelledby": r ? "monthlygift" : "singlegift",
								},
								require("haMh").jsx(
									x,
									{
										className: "askarray--club-list",
										component: null,
										enter: !0,
										exit: !1,
									},
									require("haMh").jsx(_, {
										amounts: h,
										selectedIndex: u,
										format: "buttons",
										addToCart: this.addToCart,
										monthlyChecked: r,
									}),
									require("haMh").jsx(
										ca,
										{ key: "othergiftamount" },
										require("haMh").jsx(
											"div",
											{
												id: "OtherAmount",
												className: "askarray__form-group--other ".concat(
													99 == u ? "selected" : ""
												),
											},
											require("haMh").jsx(
												"label",
												{
													className: "form-group__other-input--label",
													htmlFor: "other-amt-input",
												},
												"Other Amount"
											),
											require("haMh").jsx("input", {
												key: d,
												ref: this.otherAmountField,
												className: "form-group__other-input",
												name: "other-amt-input",
												onChange: this.handleOtherAmt,
												value: 0 == m ? "" : m,
												onFocus: this.handleFocus,
											}),
											require("haMh").jsx(
												"div",
												{ className: "other-amt-error" },
												$
											)
										)
									)
								)
							),
							require("haMh").jsx(
								require("PA8K").default,
								{ className: "amount-error" },
								t
							)
						);
					},
				},
			]),
			t
		);
	})(require("1n8/").Component);
	G.contextType = require("zetz").GivingFormContext;
	function da(t, o) {
		(t.prototype = Object.create(o.prototype)),
			(t.prototype.constructor = t),
			(t.__proto__ = o);
	}
	function l(e) {
		if (void 0 === e)
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		return e;
	}
	function s(e, r, t) {
		return (
			r in e
				? Object.defineProperty(e, r, {
						value: t,
						enumerable: !0,
						configurable: !0,
						writable: !0,
				  })
				: (e[r] = t),
			e
		);
	}
	var ea = {},
		fa = function(r, n, e, i, a, o, t, v) {
			if (!r) {
				var f;
				if (void 0 === n)
					f = new Error(
						"Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
					);
				else {
					var p = [e, i, a, o, t, v],
						$ = 0;
					(f = new Error(
						n.replace(/%s/g, function() {
							return p[$++];
						})
					)).name = "Invariant Violation";
				}
				throw ((f.framesToPop = 1), f);
			}
		};
	ea = fa;
	var ga = {},
		ha = function(e) {
			return e
				.replace(/[A-Z]/g, function(e) {
					return "-" + e.toLowerCase();
				})
				.toLowerCase();
		};
	ga = ha;
	var ia = {},
		ja = function($) {
			return /[height|width]$/.test($);
		},
		C = function($) {
			var n = "",
				r = Object.keys($);
			return (
				r.forEach(function(e, c) {
					var t = $[e];
					(e = ga(e)),
						ja(e) && "number" == typeof t && (t += "px"),
						(n +=
							!0 === t ? e : !1 === t ? "not " + e : "(" + e + ": " + t + ")"),
						c < r.length - 1 && (n += " and ");
				}),
				n
			);
		},
		ka = function($) {
			var n = "";
			return "string" == typeof $
				? $
				: $ instanceof Array
				? ($.forEach(function(r, e) {
						(n += C(r)), e < $.length - 1 && (n += ", ");
				  }),
				  n)
				: C($);
		};
	ia = ka;
	require("1n8/"), require("5D9O");
	var la = (function() {
			function e(e, t, i) {
				var a = this;
				(this.nativeMediaQueryList = e.matchMedia(t)),
					(this.active = !0),
					(this.cancellableListener = function() {
						(a.matches = a.nativeMediaQueryList.matches),
							a.active && i.apply(void 0, arguments);
					}),
					this.nativeMediaQueryList.addListener(this.cancellableListener),
					(this.matches = this.nativeMediaQueryList.matches);
			}
			return (
				(e.prototype.cancel = function() {
					(this.active = !1),
						this.nativeMediaQueryList.removeListener(this.cancellableListener);
				}),
				e
			);
		})(),
		D = (function(e) {
			function t() {
				for (var t, i = arguments.length, a = new Array(i), r = 0; r < i; r++)
					a[r] = arguments[r];
				return (
					(t = e.call.apply(e, [this].concat(a)) || this),
					s(l(l(t)), "state", { matches: t.props.defaultMatches }),
					s(l(l(t)), "updateMatches", function() {
						var e = t.mediaQueryList.matches;
						t.setState({ matches: e });
						var i = t.props.onChange;
						i && i(e);
					}),
					t
				);
			}
			da(t, e);
			var i = t.prototype;
			return (
				(i.componentWillMount = function() {
					if ("object" == typeof window) {
						var e = this.props.targetWindow || window;
						var $gTp$$interop$default = b(ea);
						"function" != typeof e.matchMedia && $gTp$$interop$default.d(!1);
						var t = this.props.query;
						var $WcE4$$interop$default = b(ia);
						"string" != typeof t && (t = $WcE4$$interop$default.d(t)),
							(this.mediaQueryList = new la(e, t, this.updateMatches)),
							this.updateMatches();
					}
				}),
				(i.componentWillUnmount = function() {
					this.mediaQueryList.cancel();
				}),
				(i.render = function() {
					var e = this.props,
						t = e.children,
						i = e.render,
						a = this.state.matches;
					return i
						? a
							? i()
							: null
						: t
						? "function" == typeof t
							? t(a)
							: (!Array.isArray(t) || t.length) && a
							? j.d.Children.only(t)
							: null
						: null;
				}),
				t
			);
		})(j.d.Component);
	s(D, "defaultProps", { defaultMatches: !0 });
	require("4vQ7"), require("haMh"), require("1n8/");
	var ma = require("4vQ7").default("div", {
			target: "eex9axp0",
			label: "PremiumIntro",
		})({
			name: "s632dr",
			styles: "@media screen and (max-width:649px){font-weight:bold;}",
		}),
		na = require("4vQ7").default("div", {
			target: "eex9axp1",
			label: "PremuimInfoBlock",
		})({
			name: "12cb2on",
			styles:
				'margin:20px 0 30px 0;display:flex;flex-direction:row;justify-content:space-between;div.premium-img{width:160px;flex:0 0 160px;img.img-responsive{display:block;max-width:100%;}}div.premium-description{max-width:530px;flex:1 0 140px;ul{list-style:none;margin-block-start:0;margin-block-end:0;@media screen and (max-width:649px){padding-inline-start:20px;}li::before{content:"\u2022";color:#f7b500;display:inline-block;width:1em;margin-left:-1em;}li + li{margin-top:20px;}li{@media screen and (max-width:649px){font-style:italic;&::before{display:none;}}}}}',
		}),
		oa = function(e) {
			var i = e.premiumData,
				t = i.premiumTitle,
				r = i.premiumImgUrl,
				m = i.premiumDescriptions,
				o = i.shortDescriptions;
			e.monthlyChecked;
			return require("haMh").jsx(
				j.d.Fragment,
				null,
				require("haMh").jsx(ma, null, "All Monthly Partners Receive:"),
				require("haMh").jsx(
					na,
					null,
					require("haMh").jsx(
						"div",
						{ className: "premium-img" },
						require("haMh").jsx("img", {
							className: "img-responsive",
							alt: 'DVD Premium for "'.concat(t, '"'),
							src: r,
						})
					),
					require("haMh").jsx(
						"div",
						{ className: "premium-description" },
						require("haMh").jsx(D, { query: "(max-width: 649px)" }, function(
							e
						) {
							return e
								? require("haMh").jsx(
										"ul",
										{ className: "premium-description__list" },
										o.map(function(e, i) {
											return require("haMh").jsx("li", {
												key: "premdesc-".concat(i),
												className: "premium-description__list--item",
												dangerouslySetInnerHTML: { __html: e },
											});
										})
								  )
								: require("haMh").jsx(
										"ul",
										{ className: "premium-description__list" },
										m.map(function(e, i) {
											return require("haMh").jsx("li", {
												key: "premdesc-".concat(i),
												className: "premium-description__list--item",
												dangerouslySetInnerHTML: { __html: e },
											});
										})
								  );
						})
					)
				)
			);
		};
	require("4vQ7"), require("haMh"), require("1n8/");
	var pa = require("4vQ7").default("section", {
			target: "edg7qd80",
			label: "CardSection",
		})({
			name: "slc89x",
			styles:
				"background:white;margin:0 auto;padding:60px 0;width:100%;@media screen and (max-width:623px){background:#eceff1;}",
		}),
		qa = require("4vQ7").default("div", {
			target: "edg7qd81",
			label: "CardContainer",
		})({
			name: "1avcc1d",
			styles:
				"width:calc(100% - 20px);max-width:1200px;margin:0 auto;display:flex;flex-direction:row;justify-content:space-between;aligh-items:center;@media screen and (max-width:623px){flex-wrap:wrap;}",
		}),
		r = require("4vQ7").default("div", { target: "edg7qd82", label: "Card" })({
			name: "13wmllo",
			styles:
				"&.card{height:250px;flex:0 1 380px;display:flex;flex-direction:column;justify-content:flex-start;box-shadow:0 2px 4px 0 rgba(0,0,0,0.1);color:#3b3b3b;}&.card + &.card{margin-left:10px;}h4.card__title{font-weight:bold;font-size:22px;margin:0;padding:10px 0;text-align:center;flex:0 0 auto;background-color:#e1e5e8;}div.card__body{padding:10px;flex:1 1 auto;background-color:#eceff1;display:flex;flex-direction:column;justify-content:space-around;align-items:center;.mail-in-form,.cbn-address,.giving-links,.phone--info{text-align:center;@media screen and (max-width:739px){font-size:16px;a,.cbn-address--street,.cbn-address--city-state-zip{font-size:16px;}}@media screen and (max-width:623px){font-size:19px;a,.cbn-address--street,.cbn-address--city-state-zip{font-size:19px;}}}.phone{text-align:center;a{cursor:pointer;font-size:28px;color:#3b3b3b;text-decoration:none;}}}a{color:#009bdf;text-decoration:none;text-align:center;&:hover,&:active,&:focus{text-decoration:underline;color:#0069ad;}}@media screen and (max-width:623px){&.card{margin:0 auto;}&.card + &.card{margin:0 auto;margin-top:20px;}}",
		}),
		ra = function() {
			return require("haMh").jsx(
				pa,
				null,
				require("haMh").jsx(
					qa,
					null,
					require("haMh").jsx(
						r,
						{ className: "card" },
						require("haMh").jsx(
							"h4",
							{ className: "card__title" },
							"Give By Phone"
						),
						require("haMh").jsx(
							"div",
							{ className: "card__body" },
							require("haMh").jsx(
								"div",
								{ className: "phone" },
								require("haMh").jsx(
									"a",
									{ href: "tel:18007007000" },
									"1-800-700-7000"
								)
							),
							require("haMh").jsx(
								"div",
								{ className: "phone--info" },
								"Donate by phone or get assistance with your donation."
							)
						)
					),
					require("haMh").jsx(
						r,
						{ className: "card" },
						require("haMh").jsx(
							"h4",
							{ className: "card__title" },
							"Mail-In Giving Form"
						),
						require("haMh").jsx(
							"div",
							{ className: "card__body" },
							require("haMh").jsx(
								"div",
								{ className: "mail-in-form" },
								"To donate by check or to a specific cause, please complete this",
								" ",
								require("haMh").jsx(
									"a",
									{
										href: "https://www.cbn.com/giving/700club/option.aspx?o=4",
									},
									"donation form"
								),
								" ",
								"by printing and mailing to:"
							),
							require("haMh").jsx(
								"div",
								{ className: "cbn-address" },
								require("haMh").jsx(
									"div",
									{ className: "cbn-address--street" },
									"977 Centerville Turnpike,"
								),
								require("haMh").jsx(
									"div",
									{ className: "cbn-address--city-state-zip" },
									"Virginia Beach, VA 23463"
								)
							)
						)
					),
					require("haMh").jsx(
						r,
						{ className: "card" },
						require("haMh").jsx(
							"h4",
							{ className: "card__title" },
							"Some Title"
						),
						require("haMh").jsx(
							"div",
							{ className: "card__body" },
							require("haMh").jsx(
								"a",
								{
									className: "giving-links",
									href: "https://www.cbn.com/giving/700club/pledgeExpress.aspx",
								},
								"Pledge Giving"
							),
							require("haMh").jsx(
								"a",
								{
									className: "giving-links",
									href: "http://www.cbnlegacy.org/",
								},
								"Planned Giving & Your Legacy"
							),
							require("haMh").jsx(
								"a",
								{
									className: "giving-links",
									href: "https://www.cbn.com/giving/livingtributes/",
								},
								"Memorial & Tribute Gifts"
							),
							require("haMh").jsx(
								"a",
								{
									className: "giving-links",
									href: "https://www.cbn.com/partners/matchinggifts.aspx",
								},
								"Employer Matching"
							),
							require("haMh").jsx(
								"a",
								{
									className: "giving-links",
									href: "https://www.cbn.com/giving/700club/stockgifts.aspx",
								},
								"Stock Gifts"
							),
							require("haMh").jsx(
								"a",
								{
									className: "giving-links",
									href:
										"https://www.cbn.com/giving/700club/workplacegiving.aspx",
								},
								"Workplace Giving"
							)
						)
					)
				)
			);
		};
	require("PMvg"),
		require("agGE"),
		require("0fcM"),
		require("P8NW"),
		require("0421"),
		require("UJE0"),
		require("d4H2"),
		require("haMh"),
		require("1n8/"),
		require("zetz"),
		require("dDLv"),
		require("4maS"),
		require("5N4C"),
		require("T33x"),
		require("7Dc8"),
		require("6uq7"),
		require("0cOc"),
		require("whbU"),
		require("8Txh");
	var E = (function(e) {
		function o() {
			var e, t;
			var $fcM$$interop$default = b(require("0fcM"));
			$fcM$$interop$default.d(this, o);
			for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
				n[i] = arguments[i];
			var $_$$interop$default = b(require("0421"));
			var $UJE0$$interop$default = b(require("UJE0"));
			return (
				((t = $_$$interop$default.d(
					this,
					(e = $UJE0$$interop$default.d(o)).call.apply(e, [this].concat(n))
				)).state = { monthlyChecked: "monthly" == t.props.defaultOption }),
				(t.handleRadioClick = function(e) {
					var o = e.target.id,
						r = t.props,
						n = r.singlePledgeData,
						i = r.monthlyPledgeData;
					t.setState({ monthlyChecked: "singlegift" !== o }, function() {
						return t.context.updateGivingType({
							type: "UPDATE_GIVING_TYPE",
							typeId: o,
							singlePledgeData: n,
							monthlyPledgeData: i,
							source: "radioClick",
						});
					});
				}),
				(t.handleInputChange = function(e) {
					var o = e.target,
						r = "checkbox" === o.type ? o.checked : o.value,
						n = o.name;
					t.context.validateAndUpdateField({
						type: "UPDATE_FIELD",
						name: n,
						value: r,
					});
				}),
				(t.handleSubmit = (function() {
					var $agGE$$interop$default = b(require("agGE"));
					var $PMvg$$interop$default = b(require("PMvg"));
					var e = $agGE$$interop$default.d(
						$PMvg$$interop$default.d.mark(function e(o) {
							return $PMvg$$interop$default.d.wrap(function(e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											o.preventDefault(),
												t.context.submitAskForm({ type: "SUBMIT_ASK_FORM" });
										case 2:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function(o) {
						return e.apply(this, arguments);
					};
				})()),
				(t.addToCart = function(e) {
					t.context.addToCart({ type: "ADD_TO_CART", item: e });
				}),
				(t.removeFromCart = function(e) {
					t.context.removeFromCart({ type: "REMOVE_TO_CART", itemType: e });
				}),
				t
			);
		}
		var $d4H2$$interop$default = b(require("d4H2"));
		var $P8NW$$interop$default = b(require("P8NW"));
		return (
			$d4H2$$interop$default.d(o, e),
			$P8NW$$interop$default.d(o, [
				{
					key: "render",
					value: function() {
						var e = this.props,
							o = e.formTitle,
							t = e.submitButtonText,
							r = e.showGivingArray,
							n = e.monthlyOption,
							i = e.singleOption,
							m = e.monthlyAmounts,
							a = e.monthlyDescriptions,
							l = e.singleAmounts,
							$ = e.singleDescriptions,
							c = e.designations,
							p = e.monthlyPledgeData,
							s = e.singlePledgeData,
							u = e.defaultAmount,
							F = e.defaultOption,
							d = e.premiumData,
							N = e.formBackgroundColor,
							V = e.formBorderColor,
							h = e.formBorderRadius,
							_ = e.formBorderWidth,
							g = e.formBoxShadow,
							f = e.formColor,
							C = e.formMargin,
							y = e.formMaxWidth,
							S = e.formPadding,
							k = {
								monthlyOption: n,
								singleOption: i,
								monthlyAmounts: m || [],
								monthlyDescriptions: a || [],
								singleAmounts: l || [],
								singleDescriptions: $ || [],
								designations: c || [],
								monthlyPledgeData: p,
								singlePledgeData: s,
							},
							b = this.state.monthlyChecked,
							B = this.context,
							E = B.errors,
							v = B.fields,
							q = B.submitting,
							x = B.selected,
							D =
								Object.values(E).filter(function(e) {
									return e && e.length > 0;
								}).length > 0;
						return x
							? null
							: require("haMh").jsx(
									j.d.Fragment,
									null,
									require("haMh").jsx(require("whbU").default, null),
									require("haMh").jsx(
										require("dDLv").default,
										{
											formBackgroundColor: N,
											formBorderColor: V,
											formBorderRadius: h,
											formBorderWidth: _,
											formBoxShadow: g,
											formMaxWidth: y,
											formPadding: S,
											formMargin: C,
											formColor: f,
										},
										require("haMh").jsx(
											"form",
											{
												id: "react-club-ask-form",
												autoComplete: "off",
												onSubmit: this.handleSubmit,
												style: { backgroundColor: "white" },
											},
											require("haMh").jsx(
												require("7Dc8").default,
												{
													className: "form-title form-header",
													style: { fontSize: "19px", marginTop: "0" },
												},
												o
											),
											require("haMh").jsx(oa, {
												premiumData: d,
												monthlyChecked: b,
											}),
											r &&
												require("haMh").jsx(
													require("5N4C").default,
													{ className: "form-panel" },
													require("haMh").jsx(G, {
														defaultAmount: u,
														defaultOption: F,
														givingOptions: k,
														handleRadioClick: this.handleRadioClick,
														amountError: E.amount,
														monthlyChecked: b,
														Monthlypledgeday: v.Monthlypledgeday,
														monthlyOption: n,
														singleOption: i,
													})
												),
											require("haMh").jsx(
												require("5N4C").default,
												{
													className: "form-panel",
													style: { marginBottom: "30px" },
												},
												require("haMh").jsx(
													w,
													{
														in: c && c.length && !b,
														timeout: 400,
														classNames: "designation-container",
														unmountOnExit: !0,
														appear: !0,
													},
													require("haMh").jsx(require("4maS").default, {
														designations: c,
													})
												)
											),
											require("haMh").jsx(
												require("5N4C").default,
												{ className: "form-panel" },
												require("haMh").jsx(
													require("T33x").default,
													null,
													require("haMh").jsx(
														"legend",
														null,
														"Form Submit Block"
													),
													require("haMh").jsx(require("0cOc").default, {
														hasErrors: D,
														error: E.amount,
														handleSubmit: this.handleSubmit,
														submitting: q,
														value: t,
													})
												)
											)
										)
									),
									require("haMh").jsx(require("6uq7").default, null),
									require("haMh").jsx(ra, null),
									require("haMh").jsx(require("8Txh").default, null)
							  );
					},
				},
			]),
			o
		);
	})(require("1n8/").Component);
	(E.contextType = require("zetz").GivingFormContext), (g.default = E);
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = g;
	} else if (typeof define === "function" && define.amd) {
		define(function() {
			return g;
		});
	}
	g.__esModule = true;
	return { NcFV: g };
});
