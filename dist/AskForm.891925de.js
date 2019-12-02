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
			{ "@emotion/styled-base": "4vQ7", react: "1n8/" },
		],
		kYBl: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = require("@emotion/core"),
					o = a(require("react")),
					r = require("../../Contexts/FormConfigProvider"),
					t = l(require("../StyledComponents/ClubTabGroup"));
				function l(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function a(e) {
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
				var n = function(l) {
						var a = l.id,
							n = l.name,
							g = l.checked,
							i = l.handleTabClick,
							d = l.label,
							c = (0, (0, o.useContext)(r.FormConfigContext).getCssConfig)(
								"toggle"
							),
							u = c.toggleColor,
							f = void 0 === u ? "#fff" : u,
							s = c.toggleBackgroundColor,
							C = void 0 === s ? "#1775BC" : s,
							p = c.toggleBorderColor,
							v = void 0 === p ? "transparent" : p,
							b = c.toggleBorderRadius,
							B = void 0 === b ? "5px" : b,
							x = c.toggleHoverColor,
							y = void 0 === x ? "#1775BC" : x,
							k = c.toggleHoverBackgroundColor,
							j = void 0 === k ? "#fff" : k,
							m = c.toggleHoverBorderColor,
							O = void 0 === m ? "#1775BC" : m;
						return (0, e.jsx)(
							t.default,
							{
								id: "".concat(a, "-group"),
								className: "tab-group",
								toggleColor: f,
								toggleBackgroundColor: C,
								toggleBorderColor: v,
								toggleBorderRadius: B,
								toggleHoverColor: y,
								toggleHoverBackgroundColor: j,
								toggleHoverBorderColor: O,
								onKeyUp: function(e) {
									var o = e.keyCode;
									!g ||
										(13 != o && 32 != o) ||
										(e.preventDefault(),
										i({ target: { id: "".concat(a, "gift") } }));
								},
							},
							(0, e.jsx)("input", {
								className: "tab-group__input",
								name: n,
								id: "".concat(a, "gift"),
								type: "checkbox",
								checked: g,
								onChange: i,
							}),
							(0, e.jsx)(
								"label",
								{
									htmlFor: "".concat(a, "gift"),
									role: "tab",
									"aria-selected": g,
									"aria-controls": "AskArray-".concat(a),
									id: "".concat(a, "gift-label"),
									tabIndex: g ? "0" : "-1",
								},
								d
							)
						);
					},
					g = n;
				exports.default = g;
			},
			{
				"@emotion/core": "haMh",
				react: "1n8/",
				"../../Contexts/FormConfigProvider": "XmuQ",
				"../StyledComponents/ClubTabGroup": "AUIJ",
			},
		],
		"+jVm": [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = require("@emotion/core"),
					t = o(require("react")),
					l = o(require("../FunctionalComponents/ClubTab")),
					n = o(require("../StyledComponents/Divider")),
					a = o(require("../StyledComponents/FieldSet")),
					i = o(require("../StyledComponents/FormRow"));
				function o(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var r = function(t) {
						var o = t.monthlyChecked,
							r = t.handleTabClick,
							s = o,
							d = !o;
						return (0, e.jsx)(
							a.default,
							{ className: "monthly-giving-info" },
							(0, e.jsx)("legend", null, "Select Monthly or One-Time Gift"),
							(0, e.jsx)(
								i.default,
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
								(0, e.jsx)(l.default, {
									id: "monthly",
									name: "monthly-toggle",
									label: "Monthly Partner",
									checked: s,
									handleTabClick: r,
								}),
								(0, e.jsx)(n.default, { color: "transparent" }),
								(0, e.jsx)(l.default, {
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
				"@emotion/core": "haMh",
				react: "1n8/",
				"../FunctionalComponents/ClubTab": "kYBl",
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
						name: "l4k83b",
						styles:
							"display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;&.askarray--club{position:relative;box-sizing:border-box;height:auto;width:calc(100% + 5px);border-bottom:5px solid transparent;flex-wrap:nowrap;margin:30px 0;flex-wrap:nowrap;justify-content:space-between;outline:none;@media screen and (max-width:716px){flex-wrap:wrap;margin:20px auto;margin-bottom:10px;}}",
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
					l = function(n) {
						var i = n.amounts,
							l = n.selectedIndex,
							u = (n.format, n.monthlyChecked),
							d = n.addToCart,
							c = (0, (0, o.useContext)(e.FormConfigContext).getCssConfig)(
								"array"
							),
							C = c.arrayColor,
							y = void 0 === C ? "#fff" : C,
							m = c.arrayBackgroundColor,
							v = void 0 === m ? "#1775BC" : m,
							f = c.arrayBorderColor,
							p = void 0 === f ? "transparent" : f,
							b = c.arrayBorderRadius,
							x = void 0 === b ? "5px" : b,
							g = c.arrayHoverColor,
							B = void 0 === g ? "#1775BC" : g,
							k = c.arrayHoverBackgroundColor,
							j = void 0 === k ? "#fff" : k,
							O = c.arrayHoverBorderColor,
							D = void 0 === O ? "#1775BC" : O,
							_ = c.arrayDescriptorColor,
							P = void 0 === _ ? "#DDB007" : _;
						return i.map(function(o, e) {
							return (0, r.jsx)(
								t.CSSTransition,
								{
									in: !0,
									key: "array-".concat(u ? "monthly" : "single", "-").concat(e),
									timeout: 400,
									classNames: "askarray-item",
									unmountOnExit: !0,
									appear: !0,
								},
								(0, r.jsx)(
									a.default,
									{
										className: "askbutton--club ".concat(
											l == e ? "selected" : ""
										),
										onClick: function() {
											return d(o, e);
										},
										arrayColor: y,
										arrayBackgroundColor: v,
										arrayBorderColor: p,
										arrayBorderRadius: x,
										arrayHoverColor: B,
										arrayHoverBackgroundColor: j,
										arrayHoverBorderColor: D,
										arrayDescriptorColor: P,
									},
									(0, r.jsx)(
										"div",
										{
											className: "askbutton__amt",
											tabIndex: "0",
											role: "button",
											"aria-pressed": l == e,
										},
										(0, r.jsx)("span", { className: "dollar-sign" }, "$"),
										o.toLocaleString(void 0, {
											minimumFractionDigits: 0,
											maximiumFractionDigits: 0,
											style: "decimal",
										})
									),
									(0, r.jsx)(
										t.CSSTransition,
										{
											in: u,
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
					u = (0, o.memo)(l);
				exports.default = u;
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
				var r = i(require("@emotion/styled-base")),
					o = require("@emotion/core"),
					e = n(require("react")),
					t = require("../../Contexts/FormConfigProvider");
				function n(r) {
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
				function i(r) {
					return r && r.__esModule ? r : { default: r };
				}
				var a = (0, r.default)("div", {
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
					l = function(r) {
						var n = r.children,
							i = r.style,
							l = void 0 === i ? {} : i,
							d = r.isMonthly,
							s = (0, e.useContext)(t.FormConfigContext).getCssConfig,
							u = s("array"),
							c = u.arrayColor,
							f = void 0 === c ? "#fff" : c,
							p = u.arrayBackgroundColor,
							x = void 0 === p ? "#1775BC" : p,
							b = u.arrayBorderColor,
							y = void 0 === b ? "transparent" : b,
							h = u.arrayBorderRadius,
							m = void 0 === h ? "5px" : h,
							g = u.arrayHoverColor,
							v = void 0 === g ? "#1775BC" : g,
							C = u.arrayHoverBackgroundColor,
							w = void 0 === C ? "#fff" : C,
							B = u.arrayHoverBorderColor,
							k = void 0 === B ? "#1775BC" : B,
							z = u.arrayDescriptorColor,
							H = void 0 === z ? "#DDB007" : z,
							O = s("form").formErrorColor,
							j = void 0 === O ? "crimson" : O;
						return (0, o.jsx)(
							a,
							{
								id: "OtherGiftAmount",
								className: "askarray--other",
								style: l,
								arrayColor: f,
								arrayBackgroundColor: x,
								arrayBorderColor: y,
								arrayBorderRadius: m,
								arrayHoverColor: v,
								arrayHoverBackgroundColor: w,
								arrayHoverBorderColor: k,
								arrayDescriptorColor: H,
								formErrorColor: j,
								isMonthly: d,
							},
							n
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
				var e = y(require("@babel/runtime/helpers/toConsumableArray")),
					t = y(require("@babel/runtime/helpers/classCallCheck")),
					r = y(require("@babel/runtime/helpers/createClass")),
					n = y(require("@babel/runtime/helpers/possibleConstructorReturn")),
					o = y(require("@babel/runtime/helpers/getPrototypeOf")),
					i = y(require("@babel/runtime/helpers/inherits")),
					a = require("@emotion/core"),
					l = f(require("react")),
					u = require("react-transition-group");
				require("../Animations/askarray.css");
				var s = require("../../Contexts/GivingFormProvider"),
					d = y(require("../Blocks/MonthlyClubTabBlock")),
					m = y(require("../StyledComponents/FieldSet")),
					c = y(require("../StyledComponents/ClubAskArray")),
					h = y(require("../Blocks/GivingArrayBlock.js")),
					p = y(require("../StyledComponents/ClubOtherGiftAmountGroup"));
				function f(e) {
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
				function y(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function A(e, t) {
					return e.findIndex(function(e) {
						return +e == +t;
					});
				}
				var v = (function(s) {
					function f() {
						var e, r;
						(0, t.default)(this, f);
						for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++)
							a[u] = arguments[u];
						return (
							((r = (0, n.default)(
								this,
								(e = (0, o.default)(f)).call.apply(e, [this].concat(a))
							)).otherAmountField = l.default.createRef()),
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
						(0, i.default)(f, s),
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
										var h = (0, e.default)(c.items),
											p = h.findIndex(function(e) {
												return e && "donation" == e.type;
											}),
											f = p > -1 && h[p].monthly;
										(t = p > -1 ? h[p].PledgeAmount : 0), (r = f ? l : u);
									} else
										(r = "" !== i ? ("monthly" == i ? l : u) : s ? l : u),
											(t = o);
									if (t > 0 && r.length) {
										var y = A(r, t),
											v = y >= 0 ? y : 99;
										v >= 0 && this.addToCart(t, v);
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
										l = this.state,
										s = l.otherAmount,
										f = l.otherAmountDisplay,
										y = l.otherAmountError,
										A = l.selectedIndex,
										v = t ? o : i;
									return (0, a.jsx)(
										m.default,
										{ id: "giving-tabs" },
										(0, a.jsx)(
											"legend",
											null,
											"Giving Amounts and Giving Options"
										),
										(0, a.jsx)(d.default, {
											monthlyChecked: t,
											handleTabClick: r,
										}),
										(0, a.jsx)(
											c.default,
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
											(0, a.jsx)(
												u.TransitionGroup,
												{
													className: "askarray--club-list",
													component: null,
													enter: !0,
													exit: !1,
												},
												(0, a.jsx)(h.default, {
													amounts: v,
													selectedIndex: A,
													format: "buttons",
													addToCart: this.addToCart,
													monthlyChecked: t,
												}),
												(0, a.jsx)(
													p.default,
													{
														key: "othergiftamount",
														otherAmount: s > 0,
														isMonthly: t,
													},
													(0, a.jsx)(
														"div",
														{
															id: "OtherAmount",
															className: "askarray__form-group--other ".concat(
																99 == A ? "selected" : ""
															),
														},
														(0, a.jsx)(
															"label",
															{
																className: "form-group__other-input--label",
																htmlFor: "other-amt-input",
															},
															"Other Amount"
														),
														(0, a.jsx)("input", {
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
														(0, a.jsx)(
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
				})(l.Component);
				v.contextType = s.GivingFormContext;
				var x = v;
				exports.default = x;
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
			},
		],
		zjHJ: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = s(require("@emotion/styled-base")),
					i = require("@emotion/core"),
					t = s(require("react")),
					r = s(require("react-media"));
				function s(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var n = (0, e.default)("div", {
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
					a = function(e) {
						var s = e.premiumData,
							a = s.premiumTitle,
							m = s.premiumImgUrl,
							o = s.premiumDescriptions,
							d = s.shortDescriptions;
						e.monthlyChecked;
						return (0, i.jsx)(
							t.default.Fragment,
							null,
							(0, i.jsx)(n, null, "All Monthly Partners Receive:"),
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
				var o = function() {
						var r = (0, i.useContext)(s.FormConfigContext).getCssConfig,
							o = (0, i.useMemo)(function() {
								return r("link");
							}, []),
							n = o.linkColor,
							t = void 0 === n ? "#009BDf" : n,
							c = o.linkHoverColor,
							l = void 0 === c ? "#0069ad" : c,
							d = o.linkTextDecoration,
							g = void 0 === d ? "none" : d,
							v = o.linkHoverTextDecoration,
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
									(0, e.jsx)(
										"h4",
										{ className: "card__title" },
										"More Ways To Give"
									),
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
					n = (0, i.memo)(o);
				exports.default = n;
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
				var e = B(require("@babel/runtime/regenerator")),
					t = B(require("@babel/runtime/helpers/asyncToGenerator")),
					o = B(require("@babel/runtime/helpers/classCallCheck")),
					r = B(require("@babel/runtime/helpers/createClass")),
					n = B(require("@babel/runtime/helpers/possibleConstructorReturn")),
					l = B(require("@babel/runtime/helpers/getPrototypeOf")),
					i = B(require("@babel/runtime/helpers/inherits")),
					a = require("@emotion/core"),
					s = q(require("react")),
					u = require("react-transition-group"),
					m = B(require("react-media")),
					d = require("../Contexts/GivingFormProvider"),
					c = B(require("../StyledComponents/FormWrapper")),
					p = B(require("../FormComponents/Layouts/ClubLayout")),
					f = B(require("../FormComponents/Blocks/PremiumBlock")),
					h = B(require("../FormComponents/Blocks/DesignationBlock")),
					g = B(require("../FormComponents/StyledComponents/FormPanel")),
					y = B(require("../FormComponents/StyledComponents/FieldSet")),
					C = B(require("../FormComponents/StyledComponents/FormHeader")),
					x = B(require("../FormComponents/FunctionalComponents/Seals")),
					b = B(require("../FormComponents/FunctionalComponents/SubmitButton"));
				require("../FormComponents/Animations/designations.css");
				var k = B(require("../FormComponents/Blocks/OtherGivingBlock")),
					v = B(require("../FormComponents/Blocks/HeaderBlock")),
					F = B(require("../FormComponents/Blocks/FooterBlock")),
					S = require("../../helpers/scrollToPoint");
				function q(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var o in e)
							if (Object.prototype.hasOwnProperty.call(e, o)) {
								var r =
									Object.defineProperty && Object.getOwnPropertyDescriptor
										? Object.getOwnPropertyDescriptor(e, o)
										: {};
								r.get || r.set ? Object.defineProperty(t, o, r) : (t[o] = e[o]);
							}
					return (t.default = e), t;
				}
				function B(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var O = (function(d) {
					function q() {
						var r, i;
						(0, o.default)(this, q);
						for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++)
							s[u] = arguments[u];
						return (
							((i = (0, n.default)(
								this,
								(r = (0, l.default)(q)).call.apply(r, [this].concat(s))
							)).state = {
								monthlyChecked: "monthly" == i.props.defaultOption,
								scrolled: !1,
								initialUpdate: !0,
							}),
							(i.handleRadioClick = function(e) {
								var t = e.target.id,
									o = i.props,
									r = o.singlePledgeData,
									n = o.monthlyPledgeData;
								i.setState({ monthlyChecked: "singlegift" !== t }, function() {
									return i.context.updateGivingType({
										type: "UPDATE_GIVING_TYPE",
										typeId: t,
										singlePledgeData: r,
										monthlyPledgeData: n,
										source: "radioClick",
									});
								});
							}),
							(i.handleInputChange = function(e) {
								var t = e.target.name;
								i.context.validateAndUpdateField({
									type: "UPDATE_FIELD",
									name: t,
								});
							}),
							(i.handleSubmit = (function() {
								var o = (0, t.default)(
									e.default.mark(function t(o) {
										return e.default.wrap(function(e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														return (
															o.preventDefault(),
															(e.next = 3),
															i.context.submitAskForm({
																type: "SUBMIT_ASK_FORM",
															})
														);
													case 3:
														e.sent && i.setState({ scrolled: !1 });
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
						(0, i.default)(q, d),
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
													t = (0, S.offsetTop)(e);
												(0, S.scrollToPoint)(t);
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
										l = e.singleOption,
										i = e.monthlyAmounts,
										d = e.monthlyDescriptions,
										S = e.singleAmounts,
										q = e.singleDescriptions,
										B = e.designations,
										O = e.monthlyPledgeData,
										P = e.singlePledgeData,
										j = e.defaultAmount,
										D = e.defaultOption,
										T = e.premiumData,
										A = e.formBackgroundColor,
										_ = e.formBorderColor,
										M = e.formBorderRadius,
										w = e.formBorderWidth,
										E = e.formBoxShadow,
										R = e.formColor,
										U = e.formMargin,
										G = e.formMaxWidth,
										I = e.formPadding,
										N = {
											monthlyOption: n,
											singleOption: l,
											monthlyAmounts: i || [],
											monthlyDescriptions: d || [],
											singleAmounts: S || [],
											singleDescriptions: q || [],
											designations: B || [],
											monthlyPledgeData: O,
											singlePledgeData: P,
										},
										W = this.state.monthlyChecked,
										L = this.context,
										H = L.errors,
										V = L.fields,
										z = L.submitting,
										K = L.selected,
										Y = "" !== H.amount;
									return K
										? null
										: (0, a.jsx)(
												s.default.Fragment,
												null,
												(0, a.jsx)(v.default, null),
												(0, a.jsx)(
													c.default,
													{
														formBackgroundColor: A,
														formBorderColor: _,
														formBorderRadius: M,
														formBorderWidth: w,
														formBoxShadow: E,
														formMaxWidth: G,
														formPadding: I,
														formMargin: U,
														formColor: R,
														inProp: !K,
													},
													(0, a.jsx)(
														"form",
														{
															id: "react-club-ask-form",
															autoComplete: "off",
															onSubmit: this.handleSubmit,
															style: { backgroundColor: "white" },
														},
														(0, a.jsx)(
															m.default,
															{ query: "(max-width: 649px)" },
															function(e) {
																return e
																	? null
																	: (0, a.jsx)(
																			C.default,
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
														(0, a.jsx)(f.default, {
															premiumData: T,
															monthlyChecked: W,
														}),
														r &&
															(0, a.jsx)(
																g.default,
																{ className: "form-panel" },
																(0, a.jsx)(p.default, {
																	defaultAmount: j,
																	defaultOption: D,
																	givingOptions: N,
																	handleRadioClick: this.handleRadioClick,
																	amountError: H.amount,
																	monthlyChecked: W,
																	Monthlypledgeday: V.Monthlypledgeday,
																	monthlyOption: n,
																	singleOption: l,
																})
															),
														(0, a.jsx)(
															g.default,
															{ className: "form-panel designaton-panel" },
															(0, a.jsx)(
																u.CSSTransition,
																{
																	in: B && B.length && !W,
																	timeout: 400,
																	classNames: "designation-container",
																	unmountOnExit: !0,
																	appear: !0,
																},
																(0, a.jsx)(h.default, { designations: B })
															)
														),
														(0, a.jsx)(
															g.default,
															{ className: "form-panel" },
															(0, a.jsx)(
																y.default,
																null,
																(0, a.jsx)("legend", null, "Form Submit Block"),
																(0, a.jsx)(b.default, {
																	hasErrors: Y,
																	error: H.amount,
																	handleSubmit: this.handleSubmit,
																	submitting: z,
																	value: o,
																})
															)
														)
													)
												),
												(0, a.jsx)(x.default, null),
												(0, a.jsx)(k.default, null),
												(0, a.jsx)(F.default, null)
										  );
								},
							},
						]),
						q
					);
				})(s.Component);
				O.contextType = d.GivingFormContext;
				var P = O;
				exports.default = P;
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
				"react-media": "ua9Q",
				"../Contexts/GivingFormProvider": "zetz",
				"../StyledComponents/FormWrapper": "dDLv",
				"../FormComponents/Layouts/ClubLayout": "8ivD",
				"../FormComponents/Blocks/PremiumBlock": "zjHJ",
				"../FormComponents/Blocks/DesignationBlock": "4maS",
				"../FormComponents/StyledComponents/FormPanel": "5N4C",
				"../FormComponents/StyledComponents/FieldSet": "T33x",
				"../FormComponents/StyledComponents/FormHeader": "7Dc8",
				"../FormComponents/FunctionalComponents/Seals": "z61F",
				"../FormComponents/FunctionalComponents/SubmitButton": "pz13",
				"../FormComponents/Animations/designations.css": "5OJj",
				"../FormComponents/Blocks/OtherGivingBlock": "cWif",
				"../FormComponents/Blocks/HeaderBlock": "whbU",
				"../FormComponents/Blocks/FooterBlock": "8Txh",
				"../../helpers/scrollToPoint": "qBJF",
			},
		],
	},
	{},
	[],
	null
);
//# sourceMappingURL=/AskForm.891925de.js.map
