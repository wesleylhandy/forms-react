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
		"5OJj": [function(require, module, exports) {}, {}],
		AUIJ: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var o = e(require("@emotion/styled-base")),
					t = e(require("react"));
				function e(o) {
					return o && o.__esModule ? o : { default: o };
				}
				var r = (0, o.default)("div", {
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
						";border-left:15px solid transparent;border-right:15px solid transparent;position:absolute;left:50%;transform:translateX(-50%);box-sizing:content-box;}"
					),
					n = r;
				exports.default = n;
			},
			{ "@emotion/styled-base": "4vQ7", react: "1n8/" },
		],
		Lg0T: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = require("@emotion/core"),
					o = g(require("react")),
					r = require("../Contexts/FormConfigProvider"),
					t = l(require("./StyledComponents/ClubTabGroup"));
				function l(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function g(e) {
					if (e && e.__esModule) return e;
					var o = {};
					if (null != e)
						for (var r in e)
							if (Object.prototype.hasOwnProperty.call(e, r)) {
								var t =
									Object.defineProperty && Object.getOwnPropertyDescriptor
										? Object.getOwnPropertyDescriptor(e, r)
										: {};
								t.get || t.set ? Object.defineProperty(o, r, t) : (o[r] = e[r]);
							}
					return (o.default = e), o;
				}
				function a(l) {
					var g = l.id,
						a = l.name,
						n = l.checked,
						i = l.handleTabClick,
						d = l.label,
						c = (0, (0, o.useContext)(r.FormConfigContext).getCssConfig)(
							"toggle"
						),
						u = c.toggleColor,
						s = void 0 === u ? "#fff" : u,
						f = c.toggleBackgroundColor,
						C = void 0 === f ? "#1775BC" : f,
						p = c.toggleBorderColor,
						v = void 0 === p ? "transparent" : p,
						b = c.toggleBorderRadius,
						B = void 0 === b ? "5px" : b,
						x = c.toggleHoverColor,
						j = void 0 === x ? "#1775BC" : x,
						m = c.toggleHoverBackgroundColor,
						y = void 0 === m ? "#fff" : m,
						O = c.toggleHoverBorderColor,
						k = void 0 === O ? "#1775BC" : O;
					return (0, e.jsx)(
						t.default,
						{
							id: "".concat(g, "-group"),
							className: "tab-group",
							toggleColor: s,
							toggleBackgroundColor: C,
							toggleBorderColor: v,
							toggleBorderRadius: B,
							toggleHoverColor: j,
							toggleHoverBackgroundColor: y,
							toggleHoverBorderColor: k,
						},
						(0, e.jsx)("input", {
							className: "tab-group__input",
							name: a,
							id: "".concat(g, "gift"),
							type: "checkbox",
							checked: n,
							onChange: i,
							role: "tab",
							"aria-selected": n,
							"aria-controls": "",
							tabIndex: n ? 0 : -1,
						}),
						(0, e.jsx)("label", { htmlFor: "".concat(g, "gift") }, d)
					);
				}
				var n = a;
				exports.default = n;
			},
			{
				"@emotion/core": "haMh",
				react: "1n8/",
				"../Contexts/FormConfigProvider": "XmuQ",
				"./StyledComponents/ClubTabGroup": "AUIJ",
			},
		],
		"+jVm": [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = require("@emotion/core"),
					l = o(require("react")),
					t = o(require("../ClubTab")),
					n = o(require("../StyledComponents/Divider")),
					a = o(require("../StyledComponents/FieldSet")),
					r = o(require("../StyledComponents/FormRow"));
				function o(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function i(l) {
					var o = l.monthlyChecked,
						i = l.handleTabClick,
						d = o,
						s = !o;
					return (0, e.jsx)(
						a.default,
						{ className: "monthly-giving-info" },
						(0, e.jsx)("legend", null, "Select Monthly or One-Time Gift"),
						(0, e.jsx)(
							r.default,
							{
								className: "monthly-tab",
								role: "tablist",
								"aria-label": "Giving Tabs",
							},
							(0, e.jsx)(t.default, {
								id: "monthly",
								name: "monthly-toggle",
								label: "Monthly Partner",
								checked: d,
								handleTabClick: i,
							}),
							(0, e.jsx)(n.default, { color: "transparent" }),
							(0, e.jsx)(t.default, {
								id: "single",
								name: "monthly-toggle",
								label: "Single Gift",
								checked: s,
								handleTabClick: i,
							})
						)
					);
				}
				var d = i;
				exports.default = d;
			},
			{
				"@emotion/core": "haMh",
				react: "1n8/",
				"../ClubTab": "Lg0T",
				"../StyledComponents/Divider": "4XSi",
				"../StyledComponents/FieldSet": "T33x",
				"../StyledComponents/FormRow": "01J/",
			},
		],
		"YG+9": [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = t(require("@emotion/styled-base")),
					r = t(require("react"));
				function t(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var a = (0, e.default)("div", {
						target: "e3cu5ei0",
						label: "ClubAskArray",
					})({
						name: "kc304e",
						styles:
							"display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;&.askarray--club{position:relative;box-sizing:border-box;height:auto;width:calc(100% + 5px);border-bottom:5px solid transparent;flex-wrap:nowrap;margin:30px 0;flex-wrap:nowrap;justify-content:space-between;outline:none;@media screen and (max-width:716px){flex-wrap:wrap;}}",
					}),
					o = a;
				exports.default = o;
			},
			{ "@emotion/styled-base": "4vQ7", react: "1n8/" },
		],
		skhN: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = o(require("@emotion/styled-base")),
					r = o(require("react"));
				function o(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var t = (0, e.default)("div", {
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
						";text-align:center;width:110%;left:50%;top:100%;transform:translateX(-50%);line-height:1.33;@media screen and (max-width:395px){width:100%;font-size:12px;}}"
					),
					i = t;
				exports.default = i;
			},
			{ "@emotion/styled-base": "4vQ7", react: "1n8/" },
		],
		xFQp: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var r = require("@emotion/core"),
					o = i(require("react")),
					e = require("../../Contexts/FormConfigProvider"),
					a = n(require("../StyledComponents/ClubAskArrayBtn")),
					t = require("react-transition-group");
				function n(r) {
					return r && r.__esModule ? r : { default: r };
				}
				function i(r) {
					if (r && r.__esModule) return r;
					var o = {};
					if (null != r)
						for (var e in r)
							if (Object.prototype.hasOwnProperty.call(r, e)) {
								var a =
									Object.defineProperty && Object.getOwnPropertyDescriptor
										? Object.getOwnPropertyDescriptor(r, e)
										: {};
								a.get || a.set ? Object.defineProperty(o, e, a) : (o[e] = r[e]);
							}
					return (o.default = r), o;
				}
				require("../Animations/askarray.css");
				var s = {
						20: "700 Club",
						40: "700 Club Gold",
						84: "1000 Club",
						209: "2500 Club",
						417: "Founder's Club",
					},
					u = function(n) {
						var i = n.amounts,
							u = n.selectedIndex,
							l = (n.format, n.monthlyChecked),
							d = n.addToCart,
							c = (0, (0, o.useContext)(e.FormConfigContext).getCssConfig)(
								"array"
							),
							C = c.arrayColor,
							y = void 0 === C ? "#fff" : C,
							f = c.arrayBackgroundColor,
							v = void 0 === f ? "#1775BC" : f,
							m = c.arrayBorderColor,
							p = void 0 === m ? "transparent" : m,
							b = c.arrayBorderRadius,
							x = void 0 === b ? "5px" : b,
							B = c.arrayHoverColor,
							g = void 0 === B ? "#1775BC" : B,
							k = c.arrayHoverBackgroundColor,
							j = void 0 === k ? "#fff" : k,
							O = c.arrayHoverBorderColor,
							_ = void 0 === O ? "#1775BC" : O,
							P = c.arrayDescriptorColor,
							q = void 0 === P ? "#DDB007" : P;
						return i.map(function(o, e) {
							return (0, r.jsx)(
								t.CSSTransition,
								{
									in: !0,
									key: "array-".concat(l ? "monthly" : "single", "-").concat(e),
									timeout: 400,
									classNames: "askarray-item",
									unmountOnExit: !0,
									appear: !0,
								},
								(0, r.jsx)(
									a.default,
									{
										className: "askbutton--club ".concat(
											u == e ? "selected" : ""
										),
										onClick: function() {
											return d(o, e);
										},
										arrayColor: y,
										arrayBackgroundColor: v,
										arrayBorderColor: p,
										arrayBorderRadius: x,
										arrayHoverColor: g,
										arrayHoverBackgroundColor: j,
										arrayHoverBorderColor: _,
										arrayDescriptorColor: q,
									},
									(0, r.jsx)("div", { className: "askbutton__amt" }, "$", o),
									(0, r.jsx)(
										t.CSSTransition,
										{
											in: l,
											timeout: 400,
											classNames: "askarray-item--level",
											unmountOnExit: !0,
										},
										(0, r.jsx)("div", { className: "club-level" }, s[o])
									)
								)
							);
						});
					},
					l = (0, o.memo)(u);
				exports.default = l;
			},
			{
				"@emotion/core": "haMh",
				react: "1n8/",
				"../../Contexts/FormConfigProvider": "XmuQ",
				"../StyledComponents/ClubAskArrayBtn": "skhN",
				"react-transition-group": "ORBw",
				"../Animations/askarray.css": "5OJj",
			},
		],
		"bd/A": [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var r = n(require("@emotion/styled-base")),
					o = require("@emotion/core"),
					e = a(require("react")),
					t = require("../../Contexts/FormConfigProvider");
				function a(r) {
					if (r && r.__esModule) return r;
					var o = {};
					if (null != r)
						for (var e in r)
							if (Object.prototype.hasOwnProperty.call(r, e)) {
								var t =
									Object.defineProperty && Object.getOwnPropertyDescriptor
										? Object.getOwnPropertyDescriptor(r, e)
										: {};
								t.get || t.set ? Object.defineProperty(o, e, t) : (o[e] = r[e]);
							}
					return (o.default = r), o;
				}
				function n(r) {
					return r && r.__esModule ? r : { default: r };
				}
				var i = (0, r.default)("div", {
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
					l = function(r) {
						var a = r.children,
							n = r.style,
							l = void 0 === n ? {} : n,
							d = (0, e.useContext)(t.FormConfigContext).getCssConfig,
							u = d("array"),
							s = u.arrayColor,
							c = void 0 === s ? "#fff" : s,
							f = u.arrayBackgroundColor,
							p = void 0 === f ? "#1775BC" : f,
							y = u.arrayBorderColor,
							b = void 0 === y ? "transparent" : y,
							x = u.arrayBorderRadius,
							v = void 0 === x ? "5px" : x,
							g = u.arrayHoverColor,
							C = void 0 === g ? "#1775BC" : g,
							m = u.arrayHoverBackgroundColor,
							h = void 0 === m ? "#fff" : m,
							w = u.arrayHoverBorderColor,
							B = void 0 === w ? "#1775BC" : w,
							k = u.arrayDescriptorColor,
							H = void 0 === k ? "#DDB007" : k,
							O = d("error").errorColor,
							j = void 0 === O ? "crimson" : O;
						return (0, o.jsx)(
							i,
							{
								id: "OtherGiftAmount",
								className: "askarray--other",
								style: l,
								arrayColor: c,
								arrayBackgroundColor: p,
								arrayBorderColor: b,
								arrayBorderRadius: v,
								arrayHoverColor: C,
								arrayHoverBackgroundColor: h,
								arrayHoverBorderColor: B,
								arrayDescriptorColor: H,
								errorColor: j,
							},
							a
						);
					},
					d = l;
				exports.default = d;
			},
			{
				"@emotion/styled-base": "4vQ7",
				"@emotion/core": "haMh",
				react: "1n8/",
				"../../Contexts/FormConfigProvider": "XmuQ",
			},
		],
		"8ivD": [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = v(require("@babel/runtime/helpers/toConsumableArray")),
					t = v(require("@babel/runtime/helpers/classCallCheck")),
					r = v(require("@babel/runtime/helpers/createClass")),
					n = v(require("@babel/runtime/helpers/possibleConstructorReturn")),
					o = v(require("@babel/runtime/helpers/getPrototypeOf")),
					a = v(require("@babel/runtime/helpers/inherits")),
					i = require("@emotion/core"),
					l = y(require("react")),
					u = require("react-transition-group");
				require("../Animations/askarray.css");
				var s = require("../../Contexts/GivingFormProvider"),
					d = v(require("../Blocks/MonthlyClubTabBlock")),
					m = v(require("../StyledComponents/FieldSet")),
					c = v(require("../StyledComponents/ClubAskArray")),
					p = v(require("../Blocks/GivingArrayBlock.js")),
					h = v(require("../StyledComponents/ClubOtherGiftAmountGroup")),
					f = v(require("../StyledComponents/AmountError"));
				function y(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var r in e)
							if (Object.prototype.hasOwnProperty.call(e, r)) {
								var n =
									Object.defineProperty && Object.getOwnPropertyDescriptor
										? Object.getOwnPropertyDescriptor(e, r)
										: {};
								n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r]);
							}
					return (t.default = e), t;
				}
				function v(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function x(e, t) {
					return e.findIndex(function(e) {
						return +e == +t;
					});
				}
				var A = (function(s) {
					function y() {
						var e, r;
						(0, t.default)(this, y);
						for (var a = arguments.length, i = new Array(a), u = 0; u < a; u++)
							i[u] = arguments[u];
						return (
							((r = (0, n.default)(
								this,
								(e = (0, o.default)(y)).call.apply(e, [this].concat(i))
							)).otherAmountField = l.default.createRef()),
							(r.state = {
								prevIndex: null,
								selectedIndex: null,
								otherAmount: 0,
								otherAmountError: "",
							}),
							(r.addToCart = function(e, t) {
								var n = r.state,
									o = n.otherAmountError,
									a = n.selectedIndex;
								r.setState(
									{
										otherAmount: 99 == t ? e : 0,
										selectedIndex: t,
										otherAmountError: 99 !== t ? "" : o,
										prevIndex: a,
									},
									function() {
										if (e) {
											var t = r.props,
												n = t.monthlyChecked,
												o = t.givingOptions,
												a = o.monthlyPledgeData,
												i = o.singlePledgeData;
											r.context.addToCart({
												type: "ADD_TO_CART",
												item: {
													type: "donation",
													PledgeAmount: e,
													DetailCprojMail: n
														? a.DetailCprojMail
														: i.DetailCprojMail,
													DetailCprojCredit: n
														? a.DetailCprojCredit
														: i.DetailCprojCredit,
													DetailDescription: n
														? a.DetailDescription
														: i.DetailDescription,
													DetailName: n ? a.DetailName : i.DetailName,
													monthly: n,
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
									n = e.target.value.trim(),
									o = /^[0-9]{1,}$/.test(n);
								o && n > 0
									? r.setState(
											{ otherAmountError: "", otherAmount: n, prevIndex: t },
											function() {
												return r.addToCart(+n, 99);
											}
									  )
									: o
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
											otherAmountError: "" !== n ? "Numbers Only" : "",
											prevIndex: t,
									  });
							}),
							r
						);
					}
					return (
						(0, a.default)(y, s),
						(0, r.default)(y, [
							{
								key: "componentDidMount",
								value: function() {
									var t = 0,
										r = [],
										n = this.props,
										o = n.defaultAmount,
										a = n.defaultOption,
										i = n.givingOptions,
										l = i.monthlyAmounts,
										u = i.singleAmounts,
										s = i.monthlyOption,
										d = this.context,
										m = d.initialized,
										c = d.cart;
									if (m) {
										var p = (0, e.default)(c.items),
											h = p.findIndex(function(e) {
												return e && "donation" == e.type;
											}),
											f = h > -1 && p[h].monthly;
										(t = h > -1 ? p[h].PledgeAmount : 0), (r = f ? l : u);
									} else
										(r = "" !== a ? ("monthly" == a ? l : u) : s ? l : u),
											(t = o);
									if (t > 0 && r.length) {
										var y = x(r, t),
											v = y >= 0 ? y : 99;
										v >= 0 && this.addToCart(t, v);
									}
								},
							},
							{
								key: "render",
								value: function() {
									var e = this.props,
										t = e.amountError,
										r = e.monthlyChecked,
										n = e.handleRadioClick,
										o = e.givingOptions,
										a = o.monthlyAmounts,
										l = o.singleAmounts,
										s = this.state,
										y = s.otherAmount,
										v = s.otherAmountError,
										x = s.selectedIndex,
										A = this.context.givingInfo,
										C = A.amount,
										g = A.isMonthly,
										b = "controlled";
									if (C) {
										var O = g ? a.indexOf(C) : l.indexOf(C);
										(x = O > -1 ? O : 99), (y = C), (r = g);
									} else
										(y = 99 == x ? y : r ? a[x] : l[x]),
											(b =
												99 == x || null === x ? b : (r ? a[x] : l[x]) + "-key");
									var j = r ? a : l;
									return (0, i.jsx)(
										m.default,
										null,
										(0, i.jsx)(
											"legend",
											null,
											"Giving Amounts and Giving Options"
										),
										(0, i.jsx)(d.default, {
											monthlyChecked: r,
											handleTabClick: n,
										}),
										(0, i.jsx)(
											c.default,
											{
												id: "AskArray",
												className: "askarray--club",
												role: "tabpanel",
												tabIndex: "0",
												"aria-labelledby": r ? "monthlygift" : "singlegift",
											},
											(0, i.jsx)(
												u.TransitionGroup,
												{
													className: "askarray--club-list",
													component: null,
													enter: !0,
													exit: !1,
												},
												(0, i.jsx)(p.default, {
													amounts: j,
													selectedIndex: x,
													format: "buttons",
													addToCart: this.addToCart,
													monthlyChecked: r,
												}),
												(0, i.jsx)(
													h.default,
													{ key: "othergiftamount" },
													(0, i.jsx)(
														"div",
														{
															id: "OtherAmount",
															className: "askarray__form-group--other ".concat(
																99 == x ? "selected" : ""
															),
														},
														(0, i.jsx)(
															"label",
															{
																className: "form-group__other-input--label",
																htmlFor: "other-amt-input",
															},
															"Other Amount"
														),
														(0, i.jsx)("input", {
															key: b,
															ref: this.otherAmountField,
															className: "form-group__other-input",
															name: "other-amt-input",
															id: "other-amt-input",
															onChange: this.handleOtherAmt,
															value: 0 == y ? "" : y,
															onFocus: this.handleFocus,
														}),
														(0, i.jsx)(
															"div",
															{ className: "other-amt-error" },
															v
														)
													)
												)
											)
										),
										(0, i.jsx)(f.default, { className: "amount-error" }, t)
									);
								},
							},
						]),
						y
					);
				})(l.Component);
				A.contextType = s.GivingFormContext;
				var C = A;
				exports.default = C;
			},
			{
				"@babel/runtime/helpers/toConsumableArray": "Fhqp",
				"@babel/runtime/helpers/classCallCheck": "0fcM",
				"@babel/runtime/helpers/createClass": "P8NW",
				"@babel/runtime/helpers/possibleConstructorReturn": "0421",
				"@babel/runtime/helpers/getPrototypeOf": "UJE0",
				"@babel/runtime/helpers/inherits": "d4H2",
				"@emotion/core": "haMh",
				react: "1n8/",
				"react-transition-group": "ORBw",
				"../Animations/askarray.css": "5OJj",
				"../../Contexts/GivingFormProvider": "zetz",
				"../Blocks/MonthlyClubTabBlock": "+jVm",
				"../StyledComponents/FieldSet": "T33x",
				"../StyledComponents/ClubAskArray": "YG+9",
				"../Blocks/GivingArrayBlock.js": "xFQp",
				"../StyledComponents/ClubOtherGiftAmountGroup": "bd/A",
				"../StyledComponents/AmountError": "PA8K",
			},
		],
		j5PE: [
			function(require, module, exports) {
				"use strict";
				function t(t, e) {
					(t.prototype = Object.create(e.prototype)),
						(t.prototype.constructor = t),
						(t.__proto__ = e);
				}
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = t);
			},
			{},
		],
		BMLb: [
			function(require, module, exports) {
				"use strict";
				function e(e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				}
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = e);
			},
			{},
		],
		"1/w9": [
			function(require, module, exports) {
				"use strict";
				function e(e, r, t) {
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
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = e);
			},
			{},
		],
		"2gTp": [
			function(require, module, exports) {
				"use strict";
				var e = function(e, r, n, i, o, a, t, f) {
					if (!e) {
						var s;
						if (void 0 === r)
							s = new Error(
								"Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
							);
						else {
							var d = [n, i, o, a, t, f],
								l = 0;
							(s = new Error(
								r.replace(/%s/g, function() {
									return d[l++];
								})
							)).name = "Invariant Violation";
						}
						throw ((s.framesToPop = 1), s);
					}
				};
				module.exports = e;
			},
			{},
		],
		q8e9: [
			function(require, module, exports) {
				var e = function(e) {
					return e
						.replace(/[A-Z]/g, function(e) {
							return "-" + e.toLowerCase();
						})
						.toLowerCase();
				};
				module.exports = e;
			},
			{},
		],
		WcE4: [
			function(require, module, exports) {
				var n = require("string-convert/camel2hyphen"),
					t = function(n) {
						return /[height|width]$/.test(n);
					},
					r = function(r) {
						var e = "",
							o = Object.keys(r);
						return (
							o.forEach(function(c, i) {
								var u = r[c];
								(c = n(c)),
									t(c) && "number" == typeof u && (u += "px"),
									(e +=
										!0 === u
											? c
											: !1 === u
											? "not " + c
											: "(" + c + ": " + u + ")"),
									i < o.length - 1 && (e += " and ");
							}),
							e
						);
					},
					e = function(n) {
						var t = "";
						return "string" == typeof n
							? n
							: n instanceof Array
							? (n.forEach(function(e, o) {
									(t += r(e)), o < n.length - 1 && (t += ", ");
							  }),
							  t)
							: r(n);
					};
				module.exports = e;
			},
			{ "string-convert/camel2hyphen": "q8e9" },
		],
		ua9Q: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = u(require("@babel/runtime/helpers/esm/inheritsLoose")),
					t = u(require("@babel/runtime/helpers/esm/assertThisInitialized")),
					i = u(require("@babel/runtime/helpers/esm/defineProperty")),
					a = u(require("react")),
					r = u(require("prop-types")),
					n = u(require("invariant")),
					s = u(require("json2mq"));
				function u(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var l = (function() {
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
									this.nativeMediaQueryList.removeListener(
										this.cancellableListener
									);
							}),
							e
						);
					})(),
					o = (function(r) {
						function u() {
							for (
								var e, a = arguments.length, n = new Array(a), s = 0;
								s < a;
								s++
							)
								n[s] = arguments[s];
							return (
								(e = r.call.apply(r, [this].concat(n)) || this),
								(0, i.default)((0, t.default)((0, t.default)(e)), "state", {
									matches: e.props.defaultMatches,
								}),
								(0, i.default)(
									(0, t.default)((0, t.default)(e)),
									"updateMatches",
									function() {
										var t = e.mediaQueryList.matches;
										e.setState({ matches: t });
										var i = e.props.onChange;
										i && i(t);
									}
								),
								e
							);
						}
						(0, e.default)(u, r);
						var o = u.prototype;
						return (
							(o.componentWillMount = function() {
								if ("object" == typeof window) {
									var e = this.props.targetWindow || window;
									"function" != typeof e.matchMedia && (0, n.default)(!1);
									var t = this.props.query;
									"string" != typeof t && (t = (0, s.default)(t)),
										(this.mediaQueryList = new l(e, t, this.updateMatches)),
										this.updateMatches();
								}
							}),
							(o.componentWillUnmount = function() {
								this.mediaQueryList.cancel();
							}),
							(o.render = function() {
								var e = this.props,
									t = e.children,
									i = e.render,
									r = this.state.matches;
								return i
									? r
										? i()
										: null
									: t
									? "function" == typeof t
										? t(r)
										: (!Array.isArray(t) || t.length) && r
										? a.default.Children.only(t)
										: null
									: null;
							}),
							u
						);
					})(a.default.Component);
				(0, i.default)(o, "defaultProps", { defaultMatches: !0 });
				var c = o;
				exports.default = c;
			},
			{
				"@babel/runtime/helpers/esm/inheritsLoose": "j5PE",
				"@babel/runtime/helpers/esm/assertThisInitialized": "BMLb",
				"@babel/runtime/helpers/esm/defineProperty": "1/w9",
				react: "1n8/",
				"prop-types": "5D9O",
				invariant: "2gTp",
				json2mq: "WcE4",
			},
		],
		FLej: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = n(require("@emotion/styled-base")),
					i = require("@emotion/core"),
					t = n(require("react")),
					r = n(require("react-media"));
				function n(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var s = (0, e.default)("div", {
						target: "eex9axp0",
						label: "PremiumIntro",
					})({
						name: "s632dr",
						styles: "@media screen and (max-width:649px){font-weight:bold;}",
					}),
					l = (0, e.default)("div", {
						target: "eex9axp1",
						label: "PremuimInfoBlock",
					})({
						name: "12cb2on",
						styles:
							'margin:20px 0 30px 0;display:flex;flex-direction:row;justify-content:space-between;div.premium-img{width:160px;flex:0 0 160px;img.img-responsive{display:block;max-width:100%;}}div.premium-description{max-width:530px;flex:1 0 140px;ul{list-style:none;margin-block-start:0;margin-block-end:0;@media screen and (max-width:649px){padding-inline-start:20px;}li::before{content:"•";color:#f7b500;display:inline-block;width:1em;margin-left:-1em;}li + li{margin-top:20px;}li{@media screen and (max-width:649px){font-style:italic;&::before{display:none;}}}}}',
					}),
					a = function(e) {
						var n = e.premiumData,
							a = n.premiumTitle,
							m = n.premiumImgUrl,
							o = n.premiumDescriptions,
							d = n.shortDescriptions;
						e.monthlyChecked;
						return (0, i.jsx)(
							t.default.Fragment,
							null,
							(0, i.jsx)(s, null, "All Monthly Partners Receive:"),
							(0, i.jsx)(
								l,
								null,
								(0, i.jsx)(
									"div",
									{ className: "premium-img" },
									(0, i.jsx)("img", {
										className: "img-responsive",
										alt: 'DVD Premium for "'.concat(a, '"'),
										src: m,
									})
								),
								(0, i.jsx)(
									"div",
									{ className: "premium-description" },
									(0, i.jsx)(
										r.default,
										{ query: "(max-width: 649px)" },
										function(e) {
											return e
												? (0, i.jsx)(
														"ul",
														{ className: "premium-description__list" },
														d.map(function(e, t) {
															return (0,
															i.jsx)("li", { key: "premdesc-".concat(t), className: "premium-description__list--item", dangerouslySetInnerHTML: { __html: e } });
														})
												  )
												: (0, i.jsx)(
														"ul",
														{ className: "premium-description__list" },
														o.map(function(e, t) {
															return (0,
															i.jsx)("li", { key: "premdesc-".concat(t), className: "premium-description__list--item", dangerouslySetInnerHTML: { __html: e } });
														})
												  );
										}
									)
								)
							)
						);
					},
					m = a;
				exports.default = m;
			},
			{
				"@emotion/styled-base": "4vQ7",
				"@emotion/core": "haMh",
				react: "1n8/",
				"react-media": "ua9Q",
			},
		],
		cWif: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = require("@emotion/core"),
					i = r(require("react")),
					s = require("../../Contexts/FormConfigProvider"),
					a = require("../StyledComponents/Card");
				function r(e) {
					if (e && e.__esModule) return e;
					var i = {};
					if (null != e)
						for (var s in e)
							if (Object.prototype.hasOwnProperty.call(e, s)) {
								var a =
									Object.defineProperty && Object.getOwnPropertyDescriptor
										? Object.getOwnPropertyDescriptor(e, s)
										: {};
								a.get || a.set ? Object.defineProperty(i, s, a) : (i[s] = e[s]);
							}
					return (i.default = e), i;
				}
				var n = function() {
						var r = (0, i.useContext)(s.FormConfigContext).getCssConfig,
							n = (0, i.useMemo)(function() {
								return r("link");
							}, []),
							o = n.linkColor,
							t = void 0 === o ? "#009BDf" : o,
							c = n.linkHoverColor,
							l = void 0 === c ? "#0069ad" : c,
							d = n.linkTextDecoration,
							g = void 0 === d ? "none" : d,
							v = n.linkHoverTextDecoration,
							m = void 0 === v ? "underline" : v;
						return (0, e.jsx)(
							a.CardSection,
							null,
							(0, e.jsx)(
								a.CardContainer,
								null,
								(0, e.jsx)(
									a.Card,
									{ className: "card" },
									(0, e.jsx)(
										"h4",
										{ className: "card__title" },
										"Give By Phone"
									),
									(0, e.jsx)(
										"div",
										{ className: "card__body" },
										(0, e.jsx)(
											"div",
											{ className: "phone" },
											(0, e.jsx)(
												"a",
												{ href: "tel:18007007000" },
												"1-800-700-7000"
											)
										),
										(0, e.jsx)(
											"div",
											{ className: "phone--info" },
											"Donate by phone or get assistance with your donation."
										)
									)
								),
								(0, e.jsx)(
									a.Card,
									{
										className: "card",
										linkColor: t,
										linkHoverColor: l,
										linkTextDecoration: g,
										linkHoverTextDecoration: m,
									},
									(0, e.jsx)(
										"h4",
										{ className: "card__title" },
										"Mail-In Giving Form"
									),
									(0, e.jsx)(
										"div",
										{ className: "card__body" },
										(0, e.jsx)(
											"div",
											{ className: "mail-in-form" },
											"To donate by check or to a specific cause, please complete this",
											" ",
											(0, e.jsx)(
												"a",
												{
													href:
														"https://www.cbn.com/giving/700club/option.aspx?o=4",
												},
												"donation form"
											),
											" ",
											"by printing and mailing to:"
										),
										(0, e.jsx)(
											"div",
											{ className: "cbn-address" },
											(0, e.jsx)(
												"div",
												{ className: "cbn-address--street" },
												"977 Centerville Turnpike,"
											),
											(0, e.jsx)(
												"div",
												{ className: "cbn-address--city-state-zip" },
												"Virginia Beach, VA 23463"
											)
										)
									)
								),
								(0, e.jsx)(
									a.Card,
									{
										className: "card",
										linkColor: t,
										linkHoverColor: l,
										linkTextDecoration: g,
										linkHoverTextDecoration: m,
									},
									(0, e.jsx)("h4", { className: "card__title" }, "Some Title"),
									(0, e.jsx)(
										"div",
										{ className: "card__body" },
										(0, e.jsx)(
											"a",
											{
												className: "giving-links",
												href:
													"https://www.cbn.com/giving/700club/pledgeExpress.aspx",
											},
											"Pledge Giving"
										),
										(0, e.jsx)(
											"a",
											{
												className: "giving-links",
												href: "http://www.cbnlegacy.org/",
											},
											"Planned Giving & Your Legacy"
										),
										(0, e.jsx)(
											"a",
											{
												className: "giving-links",
												href: "https://www.cbn.com/giving/livingtributes/",
											},
											"Memorial & Tribute Gifts"
										),
										(0, e.jsx)(
											"a",
											{
												className: "giving-links",
												href: "https://www.cbn.com/partners/matchinggifts.aspx",
											},
											"Employer Matching"
										),
										(0, e.jsx)(
											"a",
											{
												className: "giving-links",
												href:
													"https://www.cbn.com/giving/700club/stockgifts.aspx",
											},
											"Stock Gifts"
										),
										(0, e.jsx)(
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
					},
					o = (0, i.memo)(n);
				exports.default = o;
			},
			{
				"@emotion/core": "haMh",
				react: "1n8/",
				"../../Contexts/FormConfigProvider": "XmuQ",
				"../StyledComponents/Card": "/SR4",
			},
		],
		NcFV: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = O(require("@babel/runtime/regenerator")),
					t = O(require("@babel/runtime/helpers/asyncToGenerator")),
					r = O(require("@babel/runtime/helpers/classCallCheck")),
					o = O(require("@babel/runtime/helpers/createClass")),
					n = O(require("@babel/runtime/helpers/possibleConstructorReturn")),
					a = O(require("@babel/runtime/helpers/getPrototypeOf")),
					i = O(require("@babel/runtime/helpers/inherits")),
					l = require("@emotion/core"),
					s = F(require("react")),
					u = require("react-transition-group"),
					m = require("../Contexts/GivingFormProvider"),
					d = O(require("../StyledComponents/FormWrapper")),
					p = O(require("../FormComponents/Layouts/ClubLayout")),
					c = O(require("../FormComponents/Blocks/PartnershipBlock")),
					f = O(require("../FormComponents/Blocks/DesignationBlock")),
					h = O(require("../FormComponents/StyledComponents/FormPanel")),
					g = O(require("../FormComponents/StyledComponents/FieldSet")),
					y = O(require("../FormComponents/StyledComponents/FormHeader")),
					C = O(require("../FormComponents/Seals")),
					x = O(require("../FormComponents/SubmitButton"));
				require("../FormComponents/Animations/designations.css");
				var b = O(require("../FormComponents/Blocks/OtherGivingBlock")),
					v = O(require("../FormComponents/Blocks/HeaderBlock")),
					k = O(require("../FormComponents/Blocks/FooterBlock"));
				function F(e) {
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
				function O(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var j = (function(m) {
					function F() {
						var o, i;
						(0, r.default)(this, F);
						for (var l = arguments.length, s = new Array(l), u = 0; u < l; u++)
							s[u] = arguments[u];
						return (
							((i = (0, n.default)(
								this,
								(o = (0, a.default)(F)).call.apply(o, [this].concat(s))
							)).state = {
								monthlyChecked: "monthly" == i.props.defaultOption,
							}),
							(i.handleRadioClick = function(e) {
								var t = e.target.id,
									r = i.props,
									o = r.singlePledgeData,
									n = r.monthlyPledgeData;
								i.setState({ monthlyChecked: "singlegift" !== t }, function() {
									return i.context.updateGivingType({
										type: "UPDATE_GIVING_TYPE",
										typeId: t,
										singlePledgeData: o,
										monthlyPledgeData: n,
										source: "radioClick",
									});
								});
							}),
							(i.handleInputChange = function(e) {
								var t = e.target,
									r = "checkbox" === t.type ? t.checked : t.value,
									o = t.name;
								i.context.validateAndUpdateField({
									type: "UPDATE_FIELD",
									name: o,
									value: r,
								});
							}),
							(i.handleSubmit = (function() {
								var r = (0, t.default)(
									e.default.mark(function t(r) {
										return e.default.wrap(function(e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														r.preventDefault(),
															i.context.submitAskForm({
																type: "SUBMIT_ASK_FORM",
															});
													case 2:
													case "end":
														return e.stop();
												}
										}, t);
									})
								);
								return function(e) {
									return r.apply(this, arguments);
								};
							})()),
							(i.addToCart = function(e) {
								i.context.addToCart({ type: "ADD_TO_CART", item: e });
							}),
							(i.removeFromCart = function(e) {
								i.context.removeFromCart({
									type: "REMOVE_TO_CART",
									itemType: e,
								});
							}),
							i
						);
					}
					return (
						(0, i.default)(F, m),
						(0, o.default)(F, [
							{
								key: "render",
								value: function() {
									var e = this.props,
										t = e.formTitle,
										r = e.submitButtonText,
										o = e.showGivingArray,
										n = e.monthlyOption,
										a = e.singleOption,
										i = e.monthlyAmounts,
										m = e.monthlyDescriptions,
										F = e.singleAmounts,
										O = e.singleDescriptions,
										j = e.designations,
										B = e.monthlyPledgeData,
										q = e.singlePledgeData,
										P = e.defaultAmount,
										D = e.defaultOption,
										S = e.premiumData,
										T = e.formBackgroundColor,
										A = e.formBorderColor,
										_ = e.formBorderRadius,
										M = e.formBorderWidth,
										w = e.formBoxShadow,
										R = e.formColor,
										E = e.formMargin,
										G = e.formMaxWidth,
										I = e.formPadding,
										N = {
											monthlyOption: n,
											singleOption: a,
											monthlyAmounts: i || [],
											monthlyDescriptions: m || [],
											singleAmounts: F || [],
											singleDescriptions: O || [],
											designations: j || [],
											monthlyPledgeData: B,
											singlePledgeData: q,
										},
										W = this.state.monthlyChecked,
										U = this.context,
										L = U.errors,
										H = U.fields,
										V = U.submitting,
										z = U.selected,
										K =
											Object.values(L).filter(function(e) {
												return e && e.length > 0;
											}).length > 0;
									return z
										? null
										: (0, l.jsx)(
												s.default.Fragment,
												null,
												(0, l.jsx)(v.default, null),
												(0, l.jsx)(
													d.default,
													{
														formBackgroundColor: T,
														formBorderColor: A,
														formBorderRadius: _,
														formBorderWidth: M,
														formBoxShadow: w,
														formMaxWidth: G,
														formPadding: I,
														formMargin: E,
														formColor: R,
														inProp: !z,
													},
													(0, l.jsx)(
														"form",
														{
															id: "react-club-ask-form",
															autoComplete: "off",
															onSubmit: this.handleSubmit,
															style: { backgroundColor: "white" },
														},
														(0, l.jsx)(
															y.default,
															{
																className: "form-title form-header",
																style: { fontSize: "19px", marginTop: "0" },
															},
															t
														),
														(0, l.jsx)(c.default, {
															premiumData: S,
															monthlyChecked: W,
														}),
														o &&
															(0, l.jsx)(
																h.default,
																{ className: "form-panel" },
																(0, l.jsx)(p.default, {
																	defaultAmount: P,
																	defaultOption: D,
																	givingOptions: N,
																	handleRadioClick: this.handleRadioClick,
																	amountError: L.amount,
																	monthlyChecked: W,
																	Monthlypledgeday: H.Monthlypledgeday,
																	monthlyOption: n,
																	singleOption: a,
																})
															),
														(0, l.jsx)(
															h.default,
															{
																className: "form-panel",
																style: { marginBottom: "30px" },
															},
															(0, l.jsx)(
																u.CSSTransition,
																{
																	in: j && j.length && !W,
																	timeout: 400,
																	classNames: "designation-container",
																	unmountOnExit: !0,
																	appear: !0,
																},
																(0, l.jsx)(f.default, { designations: j })
															)
														),
														(0, l.jsx)(
															h.default,
															{ className: "form-panel" },
															(0, l.jsx)(
																g.default,
																null,
																(0, l.jsx)("legend", null, "Form Submit Block"),
																(0, l.jsx)(x.default, {
																	hasErrors: K,
																	error: L.amount,
																	handleSubmit: this.handleSubmit,
																	submitting: V,
																	value: r,
																})
															)
														)
													)
												),
												(0, l.jsx)(C.default, null),
												(0, l.jsx)(b.default, null),
												(0, l.jsx)(k.default, null)
										  );
								},
							},
						]),
						F
					);
				})(s.Component);
				j.contextType = m.GivingFormContext;
				var B = j;
				exports.default = B;
			},
			{
				"@babel/runtime/regenerator": "PMvg",
				"@babel/runtime/helpers/asyncToGenerator": "agGE",
				"@babel/runtime/helpers/classCallCheck": "0fcM",
				"@babel/runtime/helpers/createClass": "P8NW",
				"@babel/runtime/helpers/possibleConstructorReturn": "0421",
				"@babel/runtime/helpers/getPrototypeOf": "UJE0",
				"@babel/runtime/helpers/inherits": "d4H2",
				"@emotion/core": "haMh",
				react: "1n8/",
				"react-transition-group": "ORBw",
				"../Contexts/GivingFormProvider": "zetz",
				"../StyledComponents/FormWrapper": "dDLv",
				"../FormComponents/Layouts/ClubLayout": "8ivD",
				"../FormComponents/Blocks/PartnershipBlock": "FLej",
				"../FormComponents/Blocks/DesignationBlock": "4maS",
				"../FormComponents/StyledComponents/FormPanel": "5N4C",
				"../FormComponents/StyledComponents/FieldSet": "T33x",
				"../FormComponents/StyledComponents/FormHeader": "7Dc8",
				"../FormComponents/Seals": "6uq7",
				"../FormComponents/SubmitButton": "0cOc",
				"../FormComponents/Animations/designations.css": "5OJj",
				"../FormComponents/Blocks/OtherGivingBlock": "cWif",
				"../FormComponents/Blocks/HeaderBlock": "whbU",
				"../FormComponents/Blocks/FooterBlock": "8Txh",
			},
		],
	},
	{},
	[],
	null
);
//# sourceMappingURL=/AskForm.174a9297.js.map
