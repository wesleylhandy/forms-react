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
		OJjo: [function(require, module, exports) {}, {}],
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
						'&.tab-group{box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;flex:1 1 50%;max-width:360px;}input[type="checkbox"].tab-group__input{position:absolute !important;left:-10000px !important;top:auto !important;bottom:auto !important;width:1px !important;height:1px !important;overflow:hidden !important;}input[type="checkbox"].tab-group__input + label{display:block;height:50px;line-height:50px !important;cursor:pointer;width:100%;text-align:center;background-color:',
						function(o) {
							return o.toggleBackgroundColor;
						},
						";border-radius:",
						function(o) {
							return o.toggleBorderRadius;
						},
						";border:1px solid ",
						function(o) {
							return o.toggleBorderColor;
						},
						";margin-bottom:0;color:",
						function(o) {
							return o.toggleColor;
						},
						';transition:color 200ms ease-in-out,background-color 200ms ease-in-out,border-color 200ms ease-in-out;position:relative;font-weight:bold;@media screen and (max-width:559px){font-size:18px;}}input[type="checkbox"].tab-group__input:checked + label,input[type="checkbox"].tab-group__input + label:hover{color:',
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
			{ "@emotion/styled-base": "vQ7R", react: "n8MK" },
		],
		kYBl: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = l(require("react")),
					o = require("../../Contexts/FormConfigProvider"),
					r = n(require("../StyledComponents/ClubTabGroup")),
					t = require("@emotion/core");
				function n(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function a() {
					if ("function" != typeof WeakMap) return null;
					var e = new WeakMap();
					return (
						(a = function() {
							return e;
						}),
						e
					);
				}
				function l(e) {
					if (e && e.__esModule) return e;
					if (null === e || ("object" != typeof e && "function" != typeof e))
						return { default: e };
					var o = a();
					if (o && o.has(e)) return o.get(e);
					var r = {},
						t = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var l = t ? Object.getOwnPropertyDescriptor(e, n) : null;
							l && (l.get || l.set)
								? Object.defineProperty(r, n, l)
								: (r[n] = e[n]);
						}
					return (r.default = e), o && o.set(e, r), r;
				}
				var i = function(n) {
						var a = n.id,
							l = n.name,
							i = n.checked,
							g = n.handleTabClick,
							u = n.label,
							c = (0, (0, e.useContext)(o.FormConfigContext).getCssConfig)(
								"toggle"
							),
							d = c.toggleColor,
							f = void 0 === d ? "#fff" : d,
							s = c.toggleBackgroundColor,
							p = void 0 === s ? "#1775BC" : s,
							C = c.toggleBorderColor,
							v = void 0 === C ? "transparent" : C,
							b = c.toggleBorderRadius,
							y = void 0 === b ? "5px" : b,
							B = c.toggleHoverColor,
							k = void 0 === B ? "#1775BC" : B,
							x = c.toggleHoverBackgroundColor,
							j = void 0 === x ? "#fff" : x,
							m = c.toggleHoverBorderColor,
							O = void 0 === m ? "#1775BC" : m;
						return (0, t.jsx)(
							r.default,
							{
								id: "".concat(a, "-group"),
								className: "tab-group",
								toggleColor: f,
								toggleBackgroundColor: p,
								toggleBorderColor: v,
								toggleBorderRadius: y,
								toggleHoverColor: k,
								toggleHoverBackgroundColor: j,
								toggleHoverBorderColor: O,
								onKeyUp: function(e) {
									var o = e.keyCode;
									!i ||
										(13 != o && 32 != o) ||
										(e.preventDefault(),
										g({ target: { id: "".concat(a, "gift") } }));
								},
							},
							(0, t.jsx)("input", {
								className: "tab-group__input",
								name: l,
								id: "".concat(a, "gift"),
								type: "checkbox",
								checked: i,
								onChange: g,
							}),
							(0, t.jsx)(
								"label",
								{
									htmlFor: "".concat(a, "gift"),
									role: "tab",
									"aria-selected": i,
									"aria-controls": "AskArray-".concat(a),
									id: "".concat(a, "gift-label"),
									tabIndex: i ? "0" : "-1",
								},
								u
							)
						);
					},
					g = i;
				exports.default = g;
			},
			{
				react: "n8MK",
				"../../Contexts/FormConfigProvider": "XmuQ",
				"../StyledComponents/ClubTabGroup": "AUIJ",
				"@emotion/core": "haMh",
			},
		],
		jVm0: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = o(require("react")),
					t = o(require("../FunctionalComponents/ClubTab")),
					l = o(require("../StyledComponents/Divider")),
					n = o(require("../StyledComponents/FieldSet")),
					a = o(require("../StyledComponents/FormRow")),
					i = require("@emotion/core");
				function o(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var r = function(e) {
						var o = e.monthlyChecked,
							r = e.handleTabClick,
							s = o,
							d = !o;
						return (0, i.jsx)(
							n.default,
							{ className: "monthly-giving-info" },
							(0, i.jsx)("legend", null, "Select Monthly or One-Time Gift"),
							(0, i.jsx)(
								a.default,
								{
									className: "monthly-tab",
									role: "tablist",
									"aria-label": "Giving Tabs",
									id: "monthlhy-club-tab-block",
									"aria-controls": "giving-tabs",
									onKeyUp: function(e) {
										switch (e.keyCode) {
											case 35:
												e.preventDefault(), r({ target: { id: "singlegift" } });
												break;
											case 36:
												e.preventDefault(),
													r({ target: { id: "monthlygift" } });
												break;
											case 37:
											case 39:
												e.preventDefault(),
													r({
														target: { id: o ? "singlegift" : "monthlygift" },
													});
										}
									},
								},
								(0, i.jsx)(t.default, {
									id: "monthly",
									name: "monthly-toggle",
									label: "Monthly Partner",
									checked: s,
									handleTabClick: r,
								}),
								(0, i.jsx)(l.default, { color: "transparent" }),
								(0, i.jsx)(t.default, {
									id: "single",
									name: "monthly-toggle",
									label: "Single Gift",
									checked: d,
									handleTabClick: r,
								})
							)
						);
					},
					s = r;
				exports.default = s;
			},
			{
				react: "n8MK",
				"../FunctionalComponents/ClubTab": "kYBl",
				"../StyledComponents/Divider": "XSiX",
				"../StyledComponents/FieldSet": "T33x",
				"../StyledComponents/FormRow": "J7Rn",
				"@emotion/core": "haMh",
			},
		],
		YG9g: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = r(require("@emotion/styled-base")),
					t = r(require("react"));
				function r(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function a() {
					return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
				}
				var o = (0, e.default)("div", {
						target: "e3cu5ei0",
						label: "ClubAskArray",
					})({
						name: "l4k83b",
						styles:
							"display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;&.askarray--club{position:relative;box-sizing:border-box;height:auto;width:calc(100% + 5px);border-bottom:5px solid transparent;flex-wrap:nowrap;margin:30px 0;flex-wrap:nowrap;justify-content:space-between;outline:none;@media screen and (max-width:716px){flex-wrap:wrap;margin:20px auto;margin-bottom:10px;}}",
					}),
					n = o;
				exports.default = n;
			},
			{ "@emotion/styled-base": "vQ7R", react: "n8MK" },
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
						"display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;&.askbutton--club{box-sizing:border-box;flex:0 0 95px;margin:0 2.5px;@media screen and (max-width:559px){flex:0 0 calc((100% - 77px) / 5);}}div{display:flex;flex-direction:row;justify-content:center;align-items:center;}div.askbutton__amt{background-color:",
						function(e) {
							return e.arrayBackgroundColor;
						},
						";border-radius:",
						function(e) {
							return e.arrayBorderRadius;
						},
						";border:1px solid ",
						function(e) {
							return e.arrayBorderColor;
						},
						";box-sizing:border-box;color:",
						function(e) {
							return e.arrayColor;
						},
						";cursor:pointer;width:100%;font-weight:600;font-size:30px;height:50px;text-align:center;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;@media screen and (max-width:559px){font-size:18px;}.dollar-sign{font-size:21px;margin-right:1px;font-weight:bold;@media screen and (max-width:559px){font-size:16px;}}}&:focus div:not(.club-level),&:hover div:not(.club-level),&:active div:not(.club-level),div:not(.club-level):hover,div:not(.club-level):focus,div:not(.club-level):active,&.selected div:not(.club-level){background-color:",
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
						";text-align:center;width:110%;left:50%;top:calc(100% + 7px);transform:translateX(-50%);line-height:15px;@media screen and (max-width:395px){width:100%;font-size:12px;line-height:13px;}}"
					),
					n = t;
				exports.default = n;
			},
			{ "@emotion/styled-base": "vQ7R", react: "n8MK" },
		],
		xFQp: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var r = u(require("react")),
					e = require("../../Contexts/FormConfigProvider"),
					o = n(require("../StyledComponents/ClubAskArrayBtn")),
					a = require("react-transition-group");
				require("../Animations/askarray.css");
				var t = require("@emotion/core");
				function n(r) {
					return r && r.__esModule ? r : { default: r };
				}
				function i() {
					if ("function" != typeof WeakMap) return null;
					var r = new WeakMap();
					return (
						(i = function() {
							return r;
						}),
						r
					);
				}
				function u(r) {
					if (r && r.__esModule) return r;
					if (null === r || ("object" != typeof r && "function" != typeof r))
						return { default: r };
					var e = i();
					if (e && e.has(r)) return e.get(r);
					var o = {},
						a = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var t in r)
						if (Object.prototype.hasOwnProperty.call(r, t)) {
							var n = a ? Object.getOwnPropertyDescriptor(r, t) : null;
							n && (n.get || n.set)
								? Object.defineProperty(o, t, n)
								: (o[t] = r[t]);
						}
					return (o.default = r), e && e.set(r, o), o;
				}
				var s = {
						20: "700 Club",
						40: "700 Club Gold",
						84: "1000 Club",
						209: "2500 Club",
						417: "Founder's Club",
					},
					l = function(n) {
						var i = n.amounts,
							u = n.selectedIndex,
							l = (n.format, n.monthlyChecked),
							c = n.addToCart,
							d = (0, (0, r.useContext)(e.FormConfigContext).getCssConfig)(
								"array"
							),
							f = d.arrayColor,
							y = void 0 === f ? "#fff" : f,
							C = d.arrayBackgroundColor,
							m = void 0 === C ? "#1775BC" : C,
							v = d.arrayBorderColor,
							p = void 0 === v ? "transparent" : v,
							b = d.arrayBorderRadius,
							g = void 0 === b ? "5px" : b,
							x = d.arrayHoverColor,
							k = void 0 === x ? "#1775BC" : x,
							B = d.arrayHoverBackgroundColor,
							j = void 0 === B ? "#fff" : B,
							O = d.arrayHoverBorderColor,
							D = void 0 === O ? "#1775BC" : O,
							_ = d.arrayDescriptorColor,
							P = void 0 === _ ? "#DDB007" : _;
						return i.map(function(r, e) {
							return (0, t.jsx)(
								a.CSSTransition,
								{
									in: !0,
									key: "array-".concat(l ? "monthly" : "single", "-").concat(e),
									timeout: 400,
									classNames: "askarray-item",
									unmountOnExit: !0,
									appear: !0,
								},
								(0, t.jsx)(
									o.default,
									{
										className: "askbutton--club ".concat(
											u == e ? "selected" : ""
										),
										onClick: function() {
											return c(r, e);
										},
										arrayColor: y,
										arrayBackgroundColor: m,
										arrayBorderColor: p,
										arrayBorderRadius: g,
										arrayHoverColor: k,
										arrayHoverBackgroundColor: j,
										arrayHoverBorderColor: D,
										arrayDescriptorColor: P,
									},
									(0, t.jsx)(
										"div",
										{
											className: "askbutton__amt",
											tabIndex: "0",
											role: "button",
											"aria-pressed": u == e,
										},
										(0, t.jsx)("span", { className: "dollar-sign" }, "$"),
										r.toLocaleString(void 0, {
											minimumFractionDigits: 0,
											maximiumFractionDigits: 0,
											style: "decimal",
										})
									),
									(0, t.jsx)(
										a.CSSTransition,
										{
											in: l,
											timeout: 400,
											classNames: "askarray-item--level",
											unmountOnExit: !0,
										},
										(0, t.jsx)("div", { className: "club-level" }, s[r])
									)
								)
							);
						});
					},
					c = (0, r.memo)(l);
				exports.default = c;
			},
			{
				react: "n8MK",
				"../../Contexts/FormConfigProvider": "XmuQ",
				"../StyledComponents/ClubAskArrayBtn": "skhN",
				"react-transition-group": "ORBw",
				"../Animations/askarray.css": "OJjo",
				"@emotion/core": "haMh",
			},
		],
		bdAV: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var r = a(require("@emotion/styled-base")),
					o = i(require("react")),
					e = require("../../Contexts/FormConfigProvider"),
					t = require("@emotion/core");
				function n() {
					if ("function" != typeof WeakMap) return null;
					var r = new WeakMap();
					return (
						(n = function() {
							return r;
						}),
						r
					);
				}
				function i(r) {
					if (r && r.__esModule) return r;
					if (null === r || ("object" != typeof r && "function" != typeof r))
						return { default: r };
					var o = n();
					if (o && o.has(r)) return o.get(r);
					var e = {},
						t = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var i in r)
						if (Object.prototype.hasOwnProperty.call(r, i)) {
							var a = t ? Object.getOwnPropertyDescriptor(r, i) : null;
							a && (a.get || a.set)
								? Object.defineProperty(e, i, a)
								: (e[i] = r[i]);
						}
					return (e.default = r), o && o.set(r, e), e;
				}
				function a(r) {
					return r && r.__esModule ? r : { default: r };
				}
				var l = (0, r.default)("div", {
						target: "epin2e0",
						label: "ClubOtherGiftAmountStyle",
					})(
						"display:flex;flex-direction:row;justify-content:center;line-height:unset;&.askarray--other{position:relative;box-sizing:border-box;flex:0 0 150px;margin:0 2.5px;transition:all 250ms ease-in-out;@media screen and (max-width:716px){margin:0 auto;",
						function(r) {
							return r.isMonthly ? "margin-top: 50px;" : "margin-top: 20px;";
						},
						" flex:unset;width:100%;justify-self:center;}}div{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;line-height:unset;margin-bottom:0;position:relative;white-space:nowrap;width:100%;label{font-size:calc(19px * 0.7);font-weight:600;color:",
						function(r) {
							return r.arrayColor;
						},
						";box-sizing:border-box;position:absolute;left:50%;top:100%;transform:translateX(-50%);}}div.askarray__form-group--other{justify-content:center;max-width:400px;position:relative;z-index:1;@media screen and (max-width:716px){width:100%;max-width:160px;}&:before{color:",
						function(r) {
							return r.arrayColor;
						},
						";display:block;position:absolute;",
						function(r) {
							return r.otherAmount ? "content: '$'" : "content: '$ Other'";
						},
						';cursor:text;font-size:21px;font-weight:600;z-index:5;left:10px;top:0;line-height:50px;@media screen and (max-width:559px){font-size:18px;}}&:hover:before{content:"$";cursor:default;}&.selected:before,&:focus-within:before,&:focus:before{color:',
						function(r) {
							return r.arrayHoverColor;
						},
						';content:"$";}label.form-group__other-input--label{width:1px;height:1px;position:absolute;top:-10000px;}input{position:relative;appearance:none;background:none;background-color:',
						function(r) {
							return r.arrayBackgroundColor;
						},
						";height:50px;width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:1px solid ",
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
						";font-size:30px;text-align:left;padding-left:25px;font-weight:600;max-width:220px;white-space:nowrap;@media screen and (max-width:559px){font-size:24px;padding-left:22px;}@media screen and (max-width:395px){font-size:19px;padding-left:20px;}}input:active,input:focus{border-color:",
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
						";box-sizing:border-box;}&.selected input{border-color:",
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
							return r.formErrorColor;
						},
						";width:auto;font-weight:600;font-size:16px;opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:-25px;left:50%;transform:translateX(-50%);@media screen and (max-width:716px){bottom:-18px;font-size:15px;}}}div.selected{}"
					),
					u = function(r) {
						var n = r.children,
							i = r.style,
							a = void 0 === i ? {} : i,
							u = r.isMonthly,
							d = (0, o.useContext)(e.FormConfigContext).getCssConfig,
							s = d("array"),
							c = s.arrayColor,
							f = void 0 === c ? "#fff" : c,
							p = s.arrayBackgroundColor,
							x = void 0 === p ? "#1775BC" : p,
							b = s.arrayBorderColor,
							y = void 0 === b ? "transparent" : b,
							h = s.arrayBorderRadius,
							m = void 0 === h ? "5px" : h,
							g = s.arrayHoverColor,
							v = void 0 === g ? "#1775BC" : g,
							C = s.arrayHoverBackgroundColor,
							w = void 0 === C ? "#fff" : C,
							B = s.arrayHoverBorderColor,
							k = void 0 === B ? "#1775BC" : B,
							z = s.arrayDescriptorColor,
							H = void 0 === z ? "#DDB007" : z,
							O = d("form").formErrorColor,
							j = void 0 === O ? "crimson" : O;
						return (0, t.jsx)(
							l,
							{
								id: "OtherGiftAmount",
								className: "askarray--other",
								style: a,
								arrayColor: f,
								arrayBackgroundColor: x,
								arrayBorderColor: y,
								arrayBorderRadius: m,
								arrayHoverColor: v,
								arrayHoverBackgroundColor: w,
								arrayHoverBorderColor: k,
								arrayDescriptorColor: H,
								formErrorColor: j,
								isMonthly: u,
							},
							n
						);
					},
					d = u;
				exports.default = d;
			},
			{
				"@emotion/styled-base": "vQ7R",
				react: "n8MK",
				"../../Contexts/FormConfigProvider": "XmuQ",
				"@emotion/core": "haMh",
			},
		],
		ivD3: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = A(require("@babel/runtime/helpers/toConsumableArray")),
					t = A(require("@babel/runtime/helpers/classCallCheck")),
					r = A(require("@babel/runtime/helpers/createClass")),
					n = A(require("@babel/runtime/helpers/possibleConstructorReturn")),
					o = A(require("@babel/runtime/helpers/getPrototypeOf")),
					i = A(require("@babel/runtime/helpers/inherits")),
					a = y(require("react")),
					l = require("react-transition-group");
				require("../Animations/askarray.css");
				var u = require("../../Contexts/GivingFormProvider"),
					s = A(require("../Blocks/MonthlyClubTabBlock")),
					d = A(require("../StyledComponents/FieldSet")),
					m = A(require("../StyledComponents/ClubAskArray")),
					c = A(require("../Blocks/GivingArrayBlock.js")),
					p = A(require("../StyledComponents/ClubOtherGiftAmountGroup")),
					h = require("@emotion/core");
				function f() {
					if ("function" != typeof WeakMap) return null;
					var e = new WeakMap();
					return (
						(f = function() {
							return e;
						}),
						e
					);
				}
				function y(e) {
					if (e && e.__esModule) return e;
					if (null === e || ("object" != typeof e && "function" != typeof e))
						return { default: e };
					var t = f();
					if (t && t.has(e)) return t.get(e);
					var r = {},
						n = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var o in e)
						if (Object.prototype.hasOwnProperty.call(e, o)) {
							var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
							i && (i.get || i.set)
								? Object.defineProperty(r, o, i)
								: (r[o] = e[o]);
						}
					return (r.default = e), t && t.set(e, r), r;
				}
				function A(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function v(e, t) {
					return e.findIndex(function(e) {
						return +e == +t;
					});
				}
				var x = (function(u) {
					function f() {
						var e, r;
						(0, t.default)(this, f);
						for (var i = arguments.length, l = new Array(i), u = 0; u < i; u++)
							l[u] = arguments[u];
						return (
							((r = (0, n.default)(
								this,
								(e = (0, o.default)(f)).call.apply(e, [this].concat(l))
							)).otherAmountField = a.default.createRef()),
							(r.state = {
								prevIndex: null,
								selectedIndex: null,
								otherAmount: 0,
								otherAmountDisplay: "",
								otherAmountError: "",
							}),
							(r.addToCart = function(e, t) {
								var n = r.state,
									o = n.otherAmountError,
									i = n.selectedIndex;
								r.setState(
									{
										otherAmount: 99 == t ? e : 0,
										otherAmountDisplay:
											99 == t
												? e.toLocaleString(void 0, {
														minimumFractionDigits: 0,
														maximiumFractionDigits: 0,
														style: "decimal",
												  })
												: "",
										selectedIndex: t,
										otherAmountError: 99 !== t ? "" : o,
										prevIndex: i,
									},
									function() {
										if (e) {
											var t = r.props,
												n = t.monthlyChecked,
												o = t.givingOptions,
												i = o.monthlyPledgeData,
												a = o.singlePledgeData;
											r.context.addToCart({
												type: "ADD_TO_CART",
												item: {
													type: "donation",
													PledgeAmount: e,
													DetailCprojMail: n
														? i.DetailCprojMail
														: a.DetailCprojMail,
													DetailCprojCredit: n
														? i.DetailCprojCredit
														: a.DetailCprojCredit,
													DetailDescription: n
														? i.DetailDescription
														: a.DetailDescription,
													DetailName: n ? i.DetailName : a.DetailName,
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
										("" != r.otherAmountField.current.value &&
											0 != r.otherAmountField.current.value) ||
											r.context.removeFromCart({
												type: "REMOVE_FROM_CART",
												itemType: "donation",
											}),
											r.otherAmountField.current.focus();
									}
								);
							}),
							(r.handleBlur = function(e) {
								("" != r.otherAmountField.current.value &&
									0 != r.otherAmountField.current.value) ||
									r.setState({ selectedIndex: null });
							}),
							(r.handleOtherAmt = function(e) {
								var t = r.state.selectedIndex,
									n = e.target.value.trim().replace(/[\$,]/g, ""),
									o = /^\d*(\.\d*)?$/.test(n);
								o && +n > 0
									? ((n = Math.ceil(Number.parseFloat(n))),
									  r.setState(
											{
												otherAmountError: "",
												otherAmount: +n,
												otherAmountDisplay: n.toLocaleString(void 0, {
													minimumFractionDigits: 0,
													maximiumFractionDigits: 0,
													style: "decimal",
												}),
												prevIndex: t,
											},
											function() {
												return r.addToCart(+n, 99);
											}
									  ))
									: o
									? r.setState(
											{
												otherAmount: 0,
												otherAmountDisplay: "",
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
											otherAmountDisplay: "",
											otherAmountError: "" !== n ? "Numbers Only" : "",
											prevIndex: t,
									  });
							}),
							r
						);
					}
					return (
						(0, i.default)(f, u),
						(0, r.default)(f, [
							{
								key: "componentDidMount",
								value: function() {
									var t = 0,
										r = [],
										n = this.props,
										o = n.defaultAmount,
										i = n.defaultOption,
										a = n.givingOptions,
										l = a.monthlyAmounts,
										u = a.singleAmounts,
										s = a.monthlyOption,
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
										(r = "" !== i ? ("monthly" == i ? l : u) : s ? l : u),
											(t = o);
									if (t > 0 && r.length) {
										var y = v(r, t),
											A = y >= 0 ? y : 99;
										A >= 0 && this.addToCart(t, A);
									}
								},
							},
							{
								key: "render",
								value: function() {
									var e = this.props,
										t = e.monthlyChecked,
										r = e.handleRadioClick,
										n = e.givingOptions,
										o = n.monthlyAmounts,
										i = n.singleAmounts,
										a = this.state,
										u = a.otherAmount,
										f = a.otherAmountDisplay,
										y = a.otherAmountError,
										A = a.selectedIndex,
										v = t ? o : i;
									return (0, h.jsx)(
										d.default,
										{ id: "giving-tabs" },
										(0, h.jsx)(
											"legend",
											null,
											"Giving Amounts and Giving Options"
										),
										(0, h.jsx)(s.default, {
											monthlyChecked: t,
											handleTabClick: r,
										}),
										(0, h.jsx)(
											m.default,
											{
												id: "AskArray-".concat(t ? "monthly" : "single"),
												className: "askarray--club",
												role: "tabpanel",
												tabIndex: "0",
												"aria-labelledby": t
													? "monthlygift-label"
													: "singlegift-label",
												"aria-expanded": !0,
											},
											(0, h.jsx)(
												l.TransitionGroup,
												{
													className: "askarray--club-list",
													component: null,
													enter: !0,
													exit: !1,
												},
												(0, h.jsx)(c.default, {
													amounts: v,
													selectedIndex: A,
													format: "buttons",
													addToCart: this.addToCart,
													monthlyChecked: t,
												}),
												(0, h.jsx)(
													p.default,
													{
														key: "othergiftamount",
														otherAmount: u > 0,
														isMonthly: t,
													},
													(0, h.jsx)(
														"div",
														{
															id: "OtherAmount",
															className: "askarray__form-group--other ".concat(
																99 == A ? "selected" : ""
															),
														},
														(0, h.jsx)(
															"label",
															{
																className: "form-group__other-input--label",
																htmlFor: "other-amt-input",
															},
															"Other Amount"
														),
														(0, h.jsx)("input", {
															key: "controlled",
															ref: this.otherAmountField,
															className: "form-group__other-input",
															name: "other-amt-input",
															id: "other-amt-input",
															onChange: this.handleOtherAmt,
															value: f,
															onFocus: this.handleFocus,
															onBlur: this.handleBlur,
															inputMode: "numeric",
															pattern: "[0-9]*",
															type: "text",
														}),
														(0, h.jsx)(
															"div",
															{ className: "other-amt-error" },
															y
														)
													)
												)
											)
										)
									);
								},
							},
						]),
						f
					);
				})(a.Component);
				x.contextType = u.GivingFormContext;
				var g = x;
				exports.default = g;
			},
			{
				"@babel/runtime/helpers/toConsumableArray": "Fhqp",
				"@babel/runtime/helpers/classCallCheck": "fcMS",
				"@babel/runtime/helpers/createClass": "P8NW",
				"@babel/runtime/helpers/possibleConstructorReturn": "pxk2",
				"@babel/runtime/helpers/getPrototypeOf": "UJE0",
				"@babel/runtime/helpers/inherits": "d4H2",
				react: "n8MK",
				"react-transition-group": "ORBw",
				"../Animations/askarray.css": "OJjo",
				"../../Contexts/GivingFormProvider": "zetz",
				"../Blocks/MonthlyClubTabBlock": "jVm0",
				"../StyledComponents/FieldSet": "T33x",
				"../StyledComponents/ClubAskArray": "YG9g",
				"../Blocks/GivingArrayBlock.js": "xFQp",
				"../StyledComponents/ClubOtherGiftAmountGroup": "bdAV",
				"@emotion/core": "haMh",
			},
		],
		zjHJ: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = s(require("@emotion/styled-base")),
					i = s(require("react")),
					t = s(require("react-media")),
					r = require("@emotion/core");
				function s(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function n() {
					return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
				}
				var a = (0, e.default)("div", {
						target: "e1cfwhss0",
						label: "PremiumIntro",
					})({
						name: "s632dr",
						styles: "@media screen and (max-width:649px){font-weight:bold;}",
					}),
					l = (0, e.default)("div", {
						target: "e1cfwhss1",
						label: "PremuimInfoBlock",
					})({
						name: "1jd101w",
						styles:
							'margin:20px 0 30px 0;display:flex;flex-direction:row;justify-content:space-between;div.premium-img{width:160px;flex:0 0 160px;img.img-responsive{display:block;max-width:100%;}}div.premium-description{max-width:575px;flex:1 0 140px;ul{list-style:none;margin-block-start:0;margin-block-end:0;@media screen and (max-width:649px){padding-inline-start:20px;}li::before{content:"";background:#f7b500;display:inline-block;width:7px;height:7px;border-radius:50%;margin-left:-1em;margin-right:8px;}li + li{margin-top:20px;}li{color:#181818;font-size:16px;line-height:21px;em{font-size:16px;font-style:italic;}@media screen and (max-width:649px){font-style:italic;&::before{display:none;}}}}}',
					}),
					m = function(e) {
						var s = e.premiumData,
							n = s.premiumTitle,
							m = s.premiumImgUrl,
							o = s.premiumDescriptions,
							d = s.shortDescriptions;
						e.monthlyChecked;
						return (0, r.jsx)(
							i.default.Fragment,
							null,
							(0, r.jsx)(a, null, "All Monthly Partners Receive:"),
							(0, r.jsx)(
								l,
								null,
								(0, r.jsx)(
									"div",
									{ className: "premium-img" },
									(0, r.jsx)("img", {
										className: "img-responsive",
										alt: 'DVD Premium for "'.concat(n, '"'),
										src: m,
									})
								),
								(0, r.jsx)(
									"div",
									{ className: "premium-description" },
									(0, r.jsx)(
										t.default,
										{ query: "(max-width: 649px)" },
										function(e) {
											return e
												? (0, r.jsx)(
														"ul",
														{ className: "premium-description__list" },
														d.map(function(e, i) {
															return (0,
															r.jsx)("li", { key: "premdesc-".concat(i), className: "premium-description__list--item", dangerouslySetInnerHTML: { __html: e } });
														})
												  )
												: (0, r.jsx)(
														"ul",
														{ className: "premium-description__list" },
														o.map(function(e, i) {
															return (0,
															r.jsx)("li", { key: "premdesc-".concat(i), className: "premium-description__list--item", dangerouslySetInnerHTML: { __html: e } });
														})
												  );
										}
									)
								)
							)
						);
					},
					o = m;
				exports.default = o;
			},
			{
				"@emotion/styled-base": "vQ7R",
				react: "n8MK",
				"react-media": "ua9Q",
				"@emotion/core": "haMh",
			},
		],
		cWif: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = s(require("react")),
					i = require("../../Contexts/FormConfigProvider"),
					n = require("../StyledComponents/Card"),
					r = require("@emotion/core");
				function a() {
					if ("function" != typeof WeakMap) return null;
					var e = new WeakMap();
					return (
						(a = function() {
							return e;
						}),
						e
					);
				}
				function s(e) {
					if (e && e.__esModule) return e;
					if (null === e || ("object" != typeof e && "function" != typeof e))
						return { default: e };
					var i = a();
					if (i && i.has(e)) return i.get(e);
					var n = {},
						r = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var s in e)
						if (Object.prototype.hasOwnProperty.call(e, s)) {
							var t = r ? Object.getOwnPropertyDescriptor(e, s) : null;
							t && (t.get || t.set)
								? Object.defineProperty(n, s, t)
								: (n[s] = e[s]);
						}
					return (n.default = e), i && i.set(e, n), n;
				}
				var t = function() {
						var a = (0, e.useContext)(i.FormConfigContext).getCssConfig,
							s = (0, e.useMemo)(function() {
								return a("link");
							}, []),
							t = s.linkColor,
							o = void 0 === t ? "#009BDf" : t,
							c = s.linkHoverColor,
							l = void 0 === c ? "#0069ad" : c,
							d = s.linkTextDecoration,
							g = void 0 === d ? "none" : d,
							v = s.linkHoverTextDecoration,
							p = void 0 === v ? "underline" : v;
						return (0, r.jsx)(
							n.CardSection,
							null,
							(0, r.jsx)(
								n.CardContainer,
								null,
								(0, r.jsx)(
									n.Card,
									{ className: "card" },
									(0, r.jsx)(
										"h4",
										{ className: "card__title" },
										"Give By Phone"
									),
									(0, r.jsx)(
										"div",
										{ className: "card__body" },
										(0, r.jsx)(
											"div",
											{ className: "phone" },
											(0, r.jsx)(
												"a",
												{ href: "tel:18007007000" },
												"1-800-700-7000"
											)
										),
										(0, r.jsx)(
											"div",
											{ className: "phone--info" },
											"Donate by phone or get assistance with your donation."
										)
									)
								),
								(0, r.jsx)(
									n.Card,
									{
										className: "card",
										linkColor: o,
										linkHoverColor: l,
										linkTextDecoration: g,
										linkHoverTextDecoration: p,
									},
									(0, r.jsx)(
										"h4",
										{ className: "card__title" },
										"Mail-In Giving Form"
									),
									(0, r.jsx)(
										"div",
										{ className: "card__body" },
										(0, r.jsx)(
											"div",
											{ className: "mail-in-form" },
											"To donate by check or to a specific cause, please complete this",
											" ",
											(0, r.jsx)(
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
										(0, r.jsx)(
											"div",
											{ className: "cbn-address" },
											(0, r.jsx)(
												"div",
												{ className: "cbn-address--street" },
												"977 Centerville Turnpike,"
											),
											(0, r.jsx)(
												"div",
												{ className: "cbn-address--city-state-zip" },
												"Virginia Beach, VA 23463"
											)
										)
									)
								),
								(0, r.jsx)(
									n.Card,
									{
										className: "card",
										linkColor: o,
										linkHoverColor: l,
										linkTextDecoration: g,
										linkHoverTextDecoration: p,
									},
									(0, r.jsx)(
										"h4",
										{ className: "card__title" },
										"More Ways To Give"
									),
									(0, r.jsx)(
										"div",
										{ className: "card__body" },
										(0, r.jsx)(
											"a",
											{
												className: "giving-links",
												href:
													"https://www.cbn.com/giving/700club/pledgeExpress.aspx",
											},
											"Pledge Giving"
										),
										(0, r.jsx)(
											"a",
											{
												className: "giving-links",
												href: "http://www.cbnlegacy.org/",
											},
											"Planned Giving & Your Legacy"
										),
										(0, r.jsx)(
											"a",
											{
												className: "giving-links",
												href: "https://www.cbn.com/giving/livingtributes/",
											},
											"Memorial & Tribute Gifts"
										),
										(0, r.jsx)(
											"a",
											{
												className: "giving-links",
												href: "https://www.cbn.com/partners/matchinggifts.aspx",
											},
											"Employer Matching"
										),
										(0, r.jsx)(
											"a",
											{
												className: "giving-links",
												href:
													"https://www.cbn.com/giving/700club/stockgifts.aspx",
											},
											"Stock Gifts"
										),
										(0, r.jsx)(
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
					o = (0, e.memo)(t);
				exports.default = o;
			},
			{
				react: "n8MK",
				"../../Contexts/FormConfigProvider": "XmuQ",
				"../StyledComponents/Card": "SR4m",
				"@emotion/core": "haMh",
			},
		],
		NcFV: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = B(require("@babel/runtime/regenerator")),
					t = B(require("@babel/runtime/helpers/asyncToGenerator")),
					o = B(require("@babel/runtime/helpers/classCallCheck")),
					r = B(require("@babel/runtime/helpers/createClass")),
					n = B(require("@babel/runtime/helpers/possibleConstructorReturn")),
					a = B(require("@babel/runtime/helpers/getPrototypeOf")),
					l = B(require("@babel/runtime/helpers/inherits")),
					i = j(require("react")),
					s = require("react-transition-group"),
					u = B(require("react-media")),
					d = require("../Contexts/GivingFormProvider"),
					m = B(require("../StyledComponents/FormWrapper")),
					c = B(require("../FormComponents/Layouts/ClubLayout")),
					p = B(require("../FormComponents/Blocks/PremiumBlock")),
					f = B(require("../FormComponents/Blocks/DesignationBlock")),
					h = B(require("../FormComponents/StyledComponents/FormPanel")),
					g = B(require("../FormComponents/StyledComponents/FieldSet")),
					y = B(require("../FormComponents/StyledComponents/FormHeader")),
					C = B(require("../FormComponents/FunctionalComponents/Seals")),
					x = B(require("../FormComponents/FunctionalComponents/SubmitButton"));
				require("../FormComponents/Animations/designations.css");
				var b = B(require("../FormComponents/Blocks/OtherGivingBlock")),
					k = B(require("../FormComponents/Blocks/HeaderBlock")),
					v = B(require("../FormComponents/Blocks/FooterBlock")),
					F = require("../../helpers/scrollToPoint"),
					S = require("@emotion/core");
				function q() {
					if ("function" != typeof WeakMap) return null;
					var e = new WeakMap();
					return (
						(q = function() {
							return e;
						}),
						e
					);
				}
				function j(e) {
					if (e && e.__esModule) return e;
					if (null === e || ("object" != typeof e && "function" != typeof e))
						return { default: e };
					var t = q();
					if (t && t.has(e)) return t.get(e);
					var o = {},
						r = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var a = r ? Object.getOwnPropertyDescriptor(e, n) : null;
							a && (a.get || a.set)
								? Object.defineProperty(o, n, a)
								: (o[n] = e[n]);
						}
					return (o.default = e), t && t.set(e, o), o;
				}
				function B(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var O = (function(d) {
					function q() {
						var r, l;
						(0, o.default)(this, q);
						for (var i = arguments.length, s = new Array(i), u = 0; u < i; u++)
							s[u] = arguments[u];
						return (
							((l = (0, n.default)(
								this,
								(r = (0, a.default)(q)).call.apply(r, [this].concat(s))
							)).state = {
								monthlyChecked: "monthly" == l.props.defaultOption,
								scrolled: !1,
								initialUpdate: !0,
							}),
							(l.handleRadioClick = function(e) {
								var t = e.target.id,
									o = l.props,
									r = o.singlePledgeData,
									n = o.monthlyPledgeData;
								l.setState({ monthlyChecked: "singlegift" !== t }, function() {
									return l.context.updateGivingType({
										type: "UPDATE_GIVING_TYPE",
										typeId: t,
										singlePledgeData: r,
										monthlyPledgeData: n,
										source: "radioClick",
									});
								});
							}),
							(l.handleInputChange = function(e) {
								var t = e.target.name;
								l.context.validateAndUpdateField({
									type: "UPDATE_FIELD",
									name: t,
								});
							}),
							(l.handleSubmit = (function() {
								var o = (0, t.default)(
									e.default.mark(function t(o) {
										return e.default.wrap(function(e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														return (
															o.preventDefault(),
															(e.next = 3),
															l.context.submitAskForm({
																type: "SUBMIT_ASK_FORM",
															})
														);
													case 3:
														e.sent && l.setState({ scrolled: !1 });
													case 5:
													case "end":
														return e.stop();
												}
										}, t);
									})
								);
								return function(e) {
									return o.apply(this, arguments);
								};
							})()),
							(l.addToCart = function(e) {
								l.context.addToCart({ type: "ADD_TO_CART", item: e });
							}),
							(l.removeFromCart = function(e) {
								l.context.removeFromCart({
									type: "REMOVE_TO_CART",
									itemType: e,
								});
							}),
							l
						);
					}
					return (
						(0, l.default)(q, d),
						(0, r.default)(q, [
							{
								key: "getSnapshotBeforeUpdate",
								value: function() {
									var e = this.context.selected,
										t = this.state,
										o = t.scrolled,
										r = t.initialUpdate;
									return e && r
										? (console.log("Selection Snapshot on Ask"), !0)
										: e || o || r
										? null
										: (console.log("Scrolling Snapshot on Ask"), !0);
								},
							},
							{
								key: "componentDidUpdate",
								value: function(e, t, o) {
									o && this.context.selected && this.state.initialUpdate
										? this.setState({ initialUpdate: !1 })
										: !o ||
										  this.state.scrolled ||
										  this.context.selected ||
										  this.setState({ scrolled: !0 }, function() {
												var e = document.getElementById("react-club-ask-form"),
													t = (0, F.offsetTop)(e);
												(0, F.scrollToPoint)(t);
										  });
								},
							},
							{
								key: "render",
								value: function() {
									var e = this.props,
										t = e.formTitle,
										o = e.submitButtonText,
										r = e.showGivingArray,
										n = e.monthlyOption,
										a = e.singleOption,
										l = e.monthlyAmounts,
										d = e.monthlyDescriptions,
										F = e.singleAmounts,
										q = e.singleDescriptions,
										j = e.designations,
										B = e.preset,
										O = e.monthlyPledgeData,
										P = e.singlePledgeData,
										D = e.defaultAmount,
										T = e.defaultOption,
										A = e.premiumData,
										_ = e.formBackgroundColor,
										M = e.formBorderColor,
										w = e.formBorderRadius,
										E = e.formBorderWidth,
										R = e.formBoxShadow,
										U = e.formColor,
										G = e.formMargin,
										I = e.formMaxWidth,
										W = e.formPadding,
										N = {
											monthlyOption: n,
											singleOption: a,
											monthlyAmounts: l || [],
											monthlyDescriptions: d || [],
											singleAmounts: F || [],
											singleDescriptions: q || [],
											designations: j || [],
											monthlyPledgeData: O,
											singlePledgeData: P,
										},
										L = this.state.monthlyChecked,
										H = this.context,
										V = H.errors,
										z = H.fields,
										K = H.submitting,
										Y = H.selected,
										J = "" !== V.amount;
									return Y
										? null
										: (0, S.jsx)(
												i.default.Fragment,
												null,
												(0, S.jsx)(k.default, null),
												(0, S.jsx)(
													m.default,
													{
														formBackgroundColor: _,
														formBorderColor: M,
														formBorderRadius: w,
														formBorderWidth: E,
														formBoxShadow: R,
														formMaxWidth: I,
														formPadding: W,
														formMargin: G,
														formColor: U,
														inProp: !Y,
													},
													(0, S.jsx)(
														"form",
														{
															id: "react-club-ask-form",
															autoComplete: "off",
															onSubmit: this.handleSubmit,
															style: { backgroundColor: "white" },
														},
														(0, S.jsx)(
															u.default,
															{ query: "(max-width: 649px)" },
															function(e) {
																return e
																	? null
																	: (0, S.jsx)(
																			y.default,
																			{
																				className: "form-title form-header",
																				style: {
																					fontSize: "19px",
																					marginTop: "0",
																					color: "#181818",
																				},
																			},
																			t
																	  );
															}
														),
														(0, S.jsx)(p.default, {
															premiumData: A,
															monthlyChecked: L,
														}),
														r &&
															(0, S.jsx)(
																h.default,
																{ className: "form-panel" },
																(0, S.jsx)(c.default, {
																	defaultAmount: D,
																	defaultOption: T,
																	givingOptions: N,
																	handleRadioClick: this.handleRadioClick,
																	amountError: V.amount,
																	monthlyChecked: L,
																	Monthlypledgeday: z.Monthlypledgeday,
																	monthlyOption: n,
																	singleOption: a,
																})
															),
														(0, S.jsx)(
															h.default,
															{ className: "form-panel designaton-panel" },
															(0, S.jsx)(
																s.CSSTransition,
																{
																	in: j && j.length && !L,
																	timeout: 400,
																	classNames: "designation-container",
																	unmountOnExit: !0,
																	appear: !0,
																},
																(0, S.jsx)(f.default, {
																	designations: j,
																	preset: B,
																})
															)
														),
														(0, S.jsx)(
															h.default,
															{ className: "form-panel" },
															(0, S.jsx)(
																g.default,
																null,
																(0, S.jsx)("legend", null, "Form Submit Block"),
																(0, S.jsx)(x.default, {
																	hasErrors: J,
																	error: V.amount,
																	handleSubmit: this.handleSubmit,
																	submitting: K,
																	value: o,
																})
															)
														)
													)
												),
												(0, S.jsx)(C.default, null),
												(0, S.jsx)(b.default, null),
												(0, S.jsx)(v.default, null)
										  );
								},
							},
						]),
						q
					);
				})(i.Component);
				O.contextType = d.GivingFormContext;
				var P = O;
				exports.default = P;
			},
			{
				"@babel/runtime/regenerator": "PMvg",
				"@babel/runtime/helpers/asyncToGenerator": "agGE",
				"@babel/runtime/helpers/classCallCheck": "fcMS",
				"@babel/runtime/helpers/createClass": "P8NW",
				"@babel/runtime/helpers/possibleConstructorReturn": "pxk2",
				"@babel/runtime/helpers/getPrototypeOf": "UJE0",
				"@babel/runtime/helpers/inherits": "d4H2",
				react: "n8MK",
				"react-transition-group": "ORBw",
				"react-media": "ua9Q",
				"../Contexts/GivingFormProvider": "zetz",
				"../StyledComponents/FormWrapper": "dDLv",
				"../FormComponents/Layouts/ClubLayout": "ivD3",
				"../FormComponents/Blocks/PremiumBlock": "zjHJ",
				"../FormComponents/Blocks/DesignationBlock": "maSo",
				"../FormComponents/StyledComponents/FormPanel": "N4C2",
				"../FormComponents/StyledComponents/FieldSet": "T33x",
				"../FormComponents/StyledComponents/FormHeader": "Dc8Z",
				"../FormComponents/FunctionalComponents/Seals": "z61F",
				"../FormComponents/FunctionalComponents/SubmitButton": "pz13",
				"../FormComponents/Animations/designations.css": "OJjo",
				"../FormComponents/Blocks/OtherGivingBlock": "cWif",
				"../FormComponents/Blocks/HeaderBlock": "whbU",
				"../FormComponents/Blocks/FooterBlock": "TxhT",
				"../../helpers/scrollToPoint": "qBJF",
				"@emotion/core": "haMh",
			},
		],
	},
	{},
	[],
	null
);
//# sourceMappingURL=/AskForm.dceee121.js.map
