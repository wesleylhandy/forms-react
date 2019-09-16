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
		"d/lq": [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = i(require("@emotion/styled-base")),
					o = i(require("react"));
				function i(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var r = (0, e.default)("div", {
						target: "e19kc6t50",
						label: "RadioButton",
					})({
						name: "nyr9x",
						styles:
							'display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 5px;height:calc(19px * 2);line-height:calc(19px * 2);input[type="radio"]{box-sizing:border-box;position:absolute;opacity:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";}input[type="radio"] + label{box-sizing:border-box;font-size:calc(19px * 0.7);font-weight:600;}input[type="radio"] + label.Visa,input[type="radio"] + label.MasterCard,input[type="radio"] + label.AmericanExpress,input[type="radio"] + label.Discover{box-sizing:border-box;font-size:40px;font-weight:600;display:flex;align-items:center;}input[type="radio"] + label.Visa{color:#172274;}input[type="radio"] + label.MasterCard{color:#ea001b;}input[type="radio"] + label.AmericanExpress{color:#2e78bf;}input[type="radio"] + label.Discover{color:#f58220;}input[type="radio"] + label:before{content:"";background:#ffffff;box-sizing:border-box;border-radius:100%;border:1px solid #d8dde6;display:inline-block;width:calc(19px * 1.1);height:calc(19px * 1.1);position:relative;margin-right:calc(19px * 0.8);vertical-align:middle;cursor:pointer;text-align:center;transition:all 200ms ease;}input[type="radio"]:checked + label:before{background-color:#333;box-sizing:border-box;box-shadow:inset 0 0 0 4px #ffffff;}input[type="radio"]:focus + label:before,input[type="radio"]:hover + label:before{outline:none;border-color:#333;box-sizing:border-box;}input[type="radio"]:disabled + label:before{box-shadow:inset 0 0 0 4px #ffffff;border-color:#bfbfbf;background:#bfbfbf;box-sizing:border-box;}input[type="radio"] + label:empty:before{margin-right:0;box-sizing:border-box;}',
					}),
					t = r;
				exports.default = t;
			},
			{ "@emotion/styled-base": "4vQ7", react: "1n8/" },
		],
		"13NI": [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = require("@emotion/core"),
					t = r(require("react")),
					o = r(require("./StyledComponents/RadioButton"));
				function r(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var a = function(t) {
						var r = t.id,
							a = t.name,
							i = t.checked,
							n = t.handleRadioClick,
							d = t.label;
						return (0, e.jsx)(
							o.default,
							{ id: "".concat(r, "-group"), className: "radio-group" },
							(0, e.jsx)("input", {
								name: a,
								id: "".concat(r, "gift"),
								type: "radio",
								checked: i,
								onChange: n,
							}),
							(0, e.jsx)("label", { htmlFor: "".concat(r, "gift") }, d)
						);
					},
					i = a;
				exports.default = i;
			},
			{
				"@emotion/core": "haMh",
				react: "1n8/",
				"./StyledComponents/RadioButton": "d/lq",
			},
		],
		"TS4+": [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = require("@emotion/core"),
					t = n(require("react")),
					r = require("../../Contexts/GivingFormProvider"),
					o = a(require("../StyledComponents/FormRow"));
				function a(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function n(e) {
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
				function l(a) {
					for (
						var n = a.Monthlypledgeday,
							l = (0, t.useContext)(r.GivingFormContext).updateField,
							c = [],
							i = 2;
						i <= 28;
						i++
					)
						c.push(
							(0, e.jsx)("option", { key: "date-option-" + i, value: i }, i)
						);
					return (0, e.jsx)(
						o.default,
						{ className: "monthly-giving-day" },
						(0, e.jsx)(
							"h5",
							{ className: "cc-day-of-month" },
							"Charge automatically on day ",
							(0, e.jsx)(
								"label",
								{ htmlFor: "Monthlypledgeday" },
								"Select Date"
							),
							(0, e.jsx)(
								"select",
								{
									className: "cc-date",
									name: "Monthlypledgeday",
									onChange: function(e) {
										var t = e.target,
											r = "checkbox" === t.type ? t.checked : t.value,
											o = t.name;
										l({ type: "UPDATE_FIELD", name: o, value: r });
									},
									value: n,
								},
								c
							),
							" each month."
						)
					);
				}
				var c = l;
				exports.default = c;
			},
			{
				"@emotion/core": "haMh",
				react: "1n8/",
				"../../Contexts/GivingFormProvider": "zetz",
				"../StyledComponents/FormRow": "01J/",
			},
		],
		v6ZP: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = require("@emotion/core"),
					l = r(require("react")),
					t = r(require("../RadioButtonGroup")),
					o = r(require("../StyledComponents/FieldSet")),
					n = r(require("../StyledComponents/FormHeader")),
					d = r(require("../StyledComponents/FormRow")),
					i = r(require("./CCInfoBlock"));
				function r(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function a(l) {
					var r = l.monthlyChecked,
						a = l.Monthlypledgeday,
						u = l.handleRadioClick,
						s = r,
						c = !r;
					return (0, e.jsx)(
						o.default,
						{ className: "monthly-giving-info" },
						(0, e.jsx)("legend", null, "Select Monthly or One-Time Gift"),
						(0, e.jsx)(
							n.default,
							null,
							"How Often Do You Want to Give This Amount?"
						),
						(0, e.jsx)(
							d.default,
							{ className: "monthly-radio" },
							(0, e.jsx)(t.default, {
								id: "monthly",
								name: "monthly-toggle",
								label: "Monthly Gift",
								checked: s,
								handleRadioClick: u,
							}),
							(0, e.jsx)(t.default, {
								id: "single",
								name: "monthly-toggle",
								label: "Single Gift",
								checked: c,
								handleRadioClick: u,
							})
						),
						r && (0, e.jsx)(i.default, { Monthlypledgeday: a })
					);
				}
				var u = a;
				exports.default = u;
			},
			{
				"@emotion/core": "haMh",
				react: "1n8/",
				"../RadioButtonGroup": "13NI",
				"../StyledComponents/FieldSet": "T33x",
				"../StyledComponents/FormHeader": "7Dc8",
				"../StyledComponents/FormRow": "01J/",
				"./CCInfoBlock": "TS4+",
			},
		],
		IbaO: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var t = o(require("@emotion/styled-base")),
					e = o(require("react"));
				function o(t) {
					return t && t.__esModule ? t : { default: t };
				}
				var r = (0, t.default)("div", {
						target: "ea7p2am0",
						label: "TabGroup",
					})({
						name: "11ci7l4",
						styles:
							'&.tab-group{box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;height:80px;line-height:80px;flex:1 1 auto;}input[type="checkbox"].tab-group__input{position:absolute !important;left:-10000px !important;top:auto !important;bottom:auto !important;width:1px !important;height:1px !important;overflow:hidden !important;}input[type="checkbox"].tab-group__input + label{display:block;height:80px;line-height:80px !important;cursor:pointer;width:100%;text-align:center;background:#fff;border-radius:4px;border:2px solid #333;margin-bottom:0;color:#333;transition:color 200ms ease-in-out,background-color 200ms ease-in-out,border-color 200ms ease-in-out;}input[type="checkbox"].tab-group__input:checked + label,input[type="checkbox"].tab-group__input + label:hover{color:#fff;background-color:#333;border-color:#999;}',
					}),
					i = r;
				exports.default = i;
			},
			{ "@emotion/styled-base": "4vQ7", react: "1n8/" },
		],
		vCyl: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = require("@emotion/core"),
					t = r(require("react")),
					a = r(require("./StyledComponents/TabGroup"));
				function r(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function o(t) {
					var r = t.id,
						o = t.name,
						c = t.checked,
						u = t.handleTabClick,
						n = t.label;
					return (0, e.jsx)(
						a.default,
						{ id: "".concat(r, "-group"), className: "tab-group" },
						(0, e.jsx)("input", {
							className: "tab-group__input",
							name: o,
							id: "".concat(r, "gift"),
							type: "checkbox",
							checked: c,
							onChange: u,
						}),
						(0, e.jsx)("label", { htmlFor: "".concat(r, "gift") }, n)
					);
				}
				var c = o;
				exports.default = c;
			},
			{
				"@emotion/core": "haMh",
				react: "1n8/",
				"./StyledComponents/TabGroup": "IbaO",
			},
		],
		"9h1R": [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = require("@emotion/core"),
					t = a(require("react")),
					l = a(require("../Tab")),
					n = a(require("../StyledComponents/Divider")),
					o = a(require("../StyledComponents/FieldSet")),
					r = a(require("../StyledComponents/FormRow"));
				function a(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function i(t) {
					var a = t.monthlyChecked,
						i = t.handleTabClick,
						d = a,
						u = !a;
					return (0, e.jsx)(
						o.default,
						{ className: "monthly-giving-info" },
						(0, e.jsx)("legend", null, "Select Monthly or One-Time Gift"),
						(0, e.jsx)(
							r.default,
							{ className: "monthly-tab" },
							(0, e.jsx)(l.default, {
								id: "monthly",
								name: "monthly-toggle",
								label: "give monthly",
								checked: d,
								handleTabClick: i,
							}),
							(0, e.jsx)(n.default, { color: "transparent" }),
							(0, e.jsx)(l.default, {
								id: "single",
								name: "monthly-toggle",
								label: "one time gift",
								checked: u,
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
				"../Tab": "vCyl",
				"../StyledComponents/Divider": "4XSi",
				"../StyledComponents/FieldSet": "T33x",
				"../StyledComponents/FormRow": "01J/",
			},
		],
		Xrlo: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = r(require("@emotion/styled-base")),
					t = r(require("react"));
				function r(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var a = (0, e.default)("div", {
						target: "e1cww0v0",
						label: "AskArray",
					})({
						name: "fsqlrb",
						styles:
							"display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;&.askarray{position:relative;box-sizing:border-box;height:auto;width:100%;max-width:400px;margin:20px auto;margin-bottom:0;}&.askarray__tabs{position:relative;box-sizing:border-box;height:auto;width:calc(100% + 5px);margin:-2.5px;border-bottom:5px solid transparent;}",
					}),
					o = a;
				exports.default = o;
			},
			{ "@emotion/styled-base": "4vQ7", react: "1n8/" },
		],
		bo8o: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = t(require("@emotion/styled-base")),
					o = t(require("react"));
				function t(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var r = (0, e.default)("div", {
						target: "e27bfrr0",
						label: "AskArrayBtn",
					})({
						name: "woj21p",
						styles:
							"display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;&.askbutton{box-sizing:border-box;height:65px;width:calc(100% / 3);}&.askbutton__tabs{height:80px;box-sizing:border-box;flex:1;flex-basis:calc((100% / 3) - 10px);margin:2.5px;}div{display:flex;flex-direction:row;justify-content:center;align-items:center;}div.askbutton__amt{flex:0 0 auto;background-color:#fff;border-radius:4px;border:2px solid #333;box-sizing:border-box;color:#333;cursor:pointer;-webkit-flex-basis:calc(19px * 4.55);-ms-flex-preferred-size:calc(19px * 4.55);flex-basis:calc(19px * 4.55);font-weight:600;font-size:calc(19px * 1.4);height:calc(19px * 2.5);text-align:center;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;}div.askbutton__amt--tabs{background-color:#fff;border:1px solid #333;border-radius:4px;box-sizing:border-box;color:#333;cursor:pointer;width:100%;font-weight:600;font-size:calc(19px * 1.4);height:80px;text-align:center;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;}&:focus div,&:hover div,&:active div,div:hover,div:focus,div:active,&.selected div{background-color:#333;color:#fff;border-color:#999;}div.club-level{position:absolute;font-weight:bold;color:#ddb007;text-align:center;width:100%;margin-top:8px;}",
					}),
					i = r;
				exports.default = i;
			},
			{ "@emotion/styled-base": "4vQ7", react: "1n8/" },
		],
		nXMJ: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var o = t(require("@emotion/styled-base")),
					e = t(require("react"));
				function t(o) {
					return o && o.__esModule ? o : { default: o };
				}
				var i = (0, o.default)("div", {
						target: "e5csuv30",
						label: "OtherGiftAmountGroup",
					})({
						name: "r66wb5",
						styles:
							"display:flex;flex-direction:row;justify-content:center;line-height:unset;&.askarray--other{position:relative;box-sizing:border-box;height:80px;width:100%;max-width:400px;margin:20px auto;margin-top:0;}div{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;height:80px;line-height:unset;margin-bottom:0;position:relative;white-space:nowrap;width:100%;label{font-size:calc(19px * 0.7);font-weight:600;color:#333;box-sizing:border-box;position:absolute;left:50%;top:calc(100% - (19px * 0.5));transform:translateX(-50%);}}div.askarray__form-group--other{justify-content:center;max-width:400px;input{position:relative;appearance:none;background:none;background-color:#f0f0f0;height:calc(19px * 2.5);width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:2px solid #333;border-radius:4px;box-sizing:border-box;color:#333;font-size:calc(19px * 1.4);text-align:center;font-weight:600;max-width:220px;white-space:nowrap;}input:hover,input:active,input:focus{border:2px solid #333;background-color:#fff;box-sizing:border-box;outline:none;}div.other-amt-error{box-sizing:border-box;position:absolute;color:crimson;width:auto;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:auto;top:19px;left:50%;transform:translateX(-50%);}}div.askarray__form-group--tabs{justify-content:space-between;label{position:relative;left:auto !important;top:auto !important;transform:none !important;font-size:19px;color:#333;line-height:80px !important;margin-bottom:0;}div.askarray__form-group-tabs-flex-container{display:flex;position:relative;flex-direction:row;justify-content:center;align-items:center;div.form-group-tabs--dollar{box-sizing:border-box;color:#333;margin:0 5px;font-weight:600;font-size:19px;}input{position:relative;appearance:none;height:calc(19px * 2.5);width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:1px solid #333;border-radius:4px;box-sizing:border-box;color:#333;font-size:calc(19px * 1.4);text-align:center;font-weight:600;max-width:220px;white-space:nowrap;}input:hover,input:active,input:focus{border:1px solid #333;background-color:#fff;box-sizing:border-box;outline:none;}div.other-amt-error{box-sizing:border-box;position:absolute;color:crimson;width:auto;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:auto;top:100%;left:50%;transform:translateX(-50%);}}@media screen and (max-width:450px){label{font-size:15px;}div input{max-width:160px;}}}div.selected{}",
					}),
					r = i;
				exports.default = r;
			},
			{ "@emotion/styled-base": "4vQ7", react: "1n8/" },
		],
		HDfm: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = C(require("@babel/runtime/helpers/toConsumableArray")),
					t = C(require("@babel/runtime/helpers/classCallCheck")),
					r = C(require("@babel/runtime/helpers/createClass")),
					n = C(require("@babel/runtime/helpers/possibleConstructorReturn")),
					o = C(require("@babel/runtime/helpers/getPrototypeOf")),
					a = C(require("@babel/runtime/helpers/assertThisInitialized")),
					l = C(require("@babel/runtime/helpers/inherits")),
					i = require("@emotion/core"),
					s = g(require("react")),
					u = require("../../Contexts/GivingFormProvider"),
					d = C(require("../Blocks/MonthlyRadioBlock")),
					m = C(require("../Blocks/MonthlyTabBlock")),
					h = C(require("../Blocks/CCInfoBlock")),
					c = C(require("../StyledComponents/Divider")),
					p = C(require("../StyledComponents/FieldSet")),
					f = C(require("../StyledComponents/AskArray")),
					y = C(require("../StyledComponents/FormHeader")),
					A = C(require("../StyledComponents/AskArrayBtn")),
					v = C(require("../StyledComponents/OtherGiftAmountGroup")),
					x = C(require("../StyledComponents/AmountError"));
				function g(e) {
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
				function C(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function b(e, t) {
					return e.findIndex(function(e) {
						return +e == +t;
					});
				}
				var k = (function(u) {
					function c(e) {
						var r;
						return (
							(0, t.default)(this, c),
							((r = (0, n.default)(
								this,
								(0, o.default)(c).call(this, e)
							)).otherAmountField = s.default.createRef()),
							(r.state = {
								prevIndex: null,
								selectedIndex: null,
								otherAmount: 0,
								otherAmountError: "",
							}),
							(r.renderArray = r.renderArray.bind((0, a.default)(r))),
							(r.addToCart = r.addToCart.bind((0, a.default)(r))),
							(r.handleOtherAmt = r.handleOtherAmt.bind((0, a.default)(r))),
							(r.handleFocus = r.handleFocus.bind((0, a.default)(r))),
							r
						);
					}
					return (
						(0, l.default)(c, u),
						(0, r.default)(c, [
							{
								key: "componentDidMount",
								value: function() {
									var t = 0,
										r = [],
										n = this.props,
										o = n.defaultAmount,
										a = n.defaultOption,
										l = n.givingOptions,
										i = l.monthlyAmounts,
										s = l.singleAmounts,
										u = l.monthlyOption,
										d = this.context,
										m = d.initialized,
										h = d.cart;
									if (m) {
										var c = (0, e.default)(h.items),
											p = c.findIndex(function(e) {
												return e && "donation" == e.type;
											}),
											f = p > -1 && c[p].monthly;
										(t = c[p].PledgeAmount), (r = f ? i : s);
									} else
										(r = "" !== a ? ("monthly" == a ? i : s) : u ? i : s),
											(t = o);
									if (t > 0 && r.length) {
										var y = b(r, t),
											A = y >= 0 ? y : 99;
										A >= 0 && this.addToCart(t, A);
									}
								},
							},
							{
								key: "renderArray",
								value: function(e, t, r) {
									var n = this;
									return e.map(function(e, o) {
										return (0, i.jsx)(
											A.default,
											{
												key: "array".concat(o),
												className: "askbutton"
													.concat("tabs" == r ? "__tabs" : "", " ")
													.concat(t == o ? "selected" : ""),
												onClick: function() {
													return n.addToCart(e, o);
												},
											},
											(0, i.jsx)(
												"div",
												{
													className: "askbutton__amt".concat(
														"tabs" == r ? "--tabs" : ""
													),
												},
												"$",
												e
											)
										);
									});
								},
							},
							{
								key: "addToCart",
								value: function(e, t) {
									var r = this,
										n = this.state,
										o = n.otherAmountError,
										a = n.selectedIndex;
									this.setState(
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
													l = o.singlePledgeData;
												r.context.addToCart({
													type: "ADD_TO_CART",
													item: {
														type: "donation",
														PledgeAmount: e,
														DetailCprojMail: n
															? a.DetailCprojMail
															: l.DetailCprojMail,
														DetailCprojCredit: n
															? a.DetailCprojCredit
															: l.DetailCprojCredit,
														DetailDescription: n
															? a.DetailDescription
															: l.DetailDescription,
														DetailName: n ? a.DetailName : l.DetailName,
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
								},
							},
							{
								key: "handleFocus",
								value: function(e) {
									var t = this;
									this.setState(
										function(e, t) {
											if (99 !== e.selectedIndex)
												return {
													selectedIndex: 99,
													prevIndex: e.selectedIndex,
												};
										},
										function() {
											0 == t.state.otherAmount &&
												t.props.givingInfo &&
												!t.props.givingInfo.amount &&
												t.context.removeFromCart("donation"),
												t.otherAmountField.current.focus();
										}
									);
								},
							},
							{
								key: "handleOtherAmt",
								value: function(e) {
									var t = this,
										r = this.state.selectedIndex,
										n = e.target.value.trim(),
										o = /^[0-9]{1,}$/.test(n);
									o && n > 0
										? this.setState(
												{ otherAmountError: "", otherAmount: n, prevIndex: r },
												function() {
													return t.addToCart(+n, 99);
												}
										  )
										: o
										? this.setState(
												{
													otherAmount: 0,
													selectedIndex: null,
													otherAmountError: "",
													prevIndex: r,
												},
												function() {
													return t.context.removeFromCart({
														type: "REMOVE_FROM_CART",
														itemType: "donation",
													});
												}
										  )
										: this.setState({
												otherAmount: 0,
												otherAmountError:
													"" !== n ? "Number greater than Zero Only" : "",
												prevIndex: r,
										  });
								},
							},
							{
								key: "render",
								value: function() {
									var e = this.props,
										t = e.givingFormat,
										r = e.amountError,
										n = e.monthlyChecked,
										o = e.Monthlypledgeday,
										a = e.handleInputChange,
										l = e.handleRadioClick,
										s = e.givingOptions,
										u = s.singleOption,
										c = s.monthlyOption,
										A = s.monthlyAmounts,
										g = s.singleAmounts,
										C = this.state,
										b = C.otherAmount,
										k = C.otherAmountError,
										j = C.selectedIndex,
										O = (C.prevIndex, this.context.givingInfo),
										_ = O.amount,
										D = O.isMonthly,
										I = "controlled";
									if (_) {
										var N = D ? A.indexOf(_) : g.indexOf(_);
										(j = N > -1 ? N : 99), (b = _), (n = D);
									} else
										(b = 99 == j ? b : n ? A[j] : g[j]),
											(I =
												99 == j || null === j ? I : (n ? A[j] : g[j]) + "-key");
									return "buttons" === t
										? (0, i.jsx)(
												p.default,
												null,
												(0, i.jsx)(
													"legend",
													null,
													"Giving Amounts and Giving Options"
												),
												(0, i.jsx)(
													y.default,
													{ className: "askarray__header" },
													"Select A ",
													n ? "Monthly" : "Single",
													" Donation Amount"
												),
												(0, i.jsx)(
													f.default,
													{ id: "AskArray", className: "askarray" },
													c && n ? this.renderArray(A, j, t) : null,
													u && !n ? this.renderArray(g, j, t) : null
												),
												(0, i.jsx)(
													v.default,
													{
														id: "OtherGiftAmount",
														className: "askarray--other",
													},
													(0, i.jsx)(
														"div",
														{
															id: "OtherAmount",
															className: "askarray__form-group--other ".concat(
																99 == j ? "selected" : ""
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
															key: I,
															ref: this.otherAmountField,
															className: "form-group__other-input",
															name: "other-amt-input",
															onChange: this.handleOtherAmt,
															value: 0 == b ? "" : b,
															onFocus: this.handleFocus,
														}),
														(0, i.jsx)(
															"div",
															{ className: "other-amt-error" },
															k
														)
													)
												),
												(0, i.jsx)(x.default, { className: "amount-error" }, r),
												c &&
													u &&
													(0, i.jsx)(d.default, {
														Monthlypledgeday: o,
														monthlyChecked: n,
														handleInputChange: a,
														handleRadioClick: l,
													})
										  )
										: (0, i.jsx)(
												p.default,
												null,
												(0, i.jsx)(
													"legend",
													null,
													"Giving Amounts and Giving Options"
												),
												(0, i.jsx)(
													y.default,
													{ className: "askarray__header" },
													"Select A ",
													n ? "Monthly" : "Single",
													" Donation Amount"
												),
												c &&
													u &&
													(0, i.jsx)(m.default, {
														monthlyChecked: n,
														handleTabClick: l,
													}),
												(0, i.jsx)(
													f.default,
													{ id: "AskArray", className: "askarray__tabs" },
													c && n ? this.renderArray(A, j, t) : null,
													u && !n ? this.renderArray(g, j, t) : null
												),
												(0, i.jsx)(
													v.default,
													{
														id: "OtherGiftAmount",
														className: "askarray__tabs--other",
													},
													(0, i.jsx)(
														"div",
														{
															id: "OtherAmount",
															className: "askarray__form-group--tabs ".concat(
																99 == j ? " styles.selected" : ""
															),
														},
														(0, i.jsx)(
															"label",
															{
																className:
																	"form-group-tabs__other-input--label",
																htmlFor: "other-amt-input",
															},
															"Or specify amount"
														),
														(0, i.jsx)(
															"div",
															{
																className:
																	"askarray__form-group-tabs-flex-container",
															},
															(0, i.jsx)(
																"div",
																{ className: "form-group-tabs--dollar" },
																"$"
															),
															(0, i.jsx)("input", {
																key: I,
																ref: this.otherAmountField,
																className: "form-group-tabs__other-input",
																name: "other-amt-input",
																onChange: this.handleOtherAmt,
																value: 0 == b ? "" : b,
																onFocus: this.handleFocus,
															}),
															(0, i.jsx)(
																"div",
																{ className: "other-amt-error" },
																k
															)
														)
													)
												),
												n && (0, i.jsx)(h.default, { Monthlypledgeday: o }),
												(0, i.jsx)(x.default, { className: "amount-error" }, r)
										  );
								},
							},
						]),
						c
					);
				})(s.Component);
				k.contextType = u.GivingFormContext;
				var j = k;
				exports.default = j;
			},
			{
				"@babel/runtime/helpers/toConsumableArray": "Fhqp",
				"@babel/runtime/helpers/classCallCheck": "0fcM",
				"@babel/runtime/helpers/createClass": "P8NW",
				"@babel/runtime/helpers/possibleConstructorReturn": "0421",
				"@babel/runtime/helpers/getPrototypeOf": "UJE0",
				"@babel/runtime/helpers/assertThisInitialized": "E7HD",
				"@babel/runtime/helpers/inherits": "d4H2",
				"@emotion/core": "haMh",
				react: "1n8/",
				"../../Contexts/GivingFormProvider": "zetz",
				"../Blocks/MonthlyRadioBlock": "v6ZP",
				"../Blocks/MonthlyTabBlock": "9h1R",
				"../Blocks/CCInfoBlock": "TS4+",
				"../StyledComponents/Divider": "4XSi",
				"../StyledComponents/FieldSet": "T33x",
				"../StyledComponents/AskArray": "Xrlo",
				"../StyledComponents/FormHeader": "7Dc8",
				"../StyledComponents/AskArrayBtn": "bo8o",
				"../StyledComponents/OtherGiftAmountGroup": "nXMJ",
				"../StyledComponents/AmountError": "PA8K",
			},
		],
		xHZ3: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = P(require("@babel/runtime/helpers/toConsumableArray")),
					t = P(require("@babel/runtime/regenerator")),
					n = P(require("@babel/runtime/helpers/asyncToGenerator")),
					o = P(require("@babel/runtime/helpers/classCallCheck")),
					r = P(require("@babel/runtime/helpers/createClass")),
					a = P(require("@babel/runtime/helpers/possibleConstructorReturn")),
					i = P(require("@babel/runtime/helpers/getPrototypeOf")),
					l = P(require("@babel/runtime/helpers/inherits")),
					s = require("@emotion/core"),
					u = A(require("react")),
					d = require("../Contexts/GivingFormProvider"),
					p = P(require("../FormComponents/StyledComponents/FormPanel")),
					m = P(require("../FormComponents/StyledComponents/FieldSet")),
					c = P(require("../FormComponents/StyledComponents/FormHeader")),
					h = P(require("../FormComponents/Layouts/GivingLayout")),
					f = P(require("../FormComponents/Layouts/ProductLayout")),
					g = P(require("../FormComponents/Blocks/DesignationBlock")),
					y = P(require("../FormComponents/Blocks/NameBlock")),
					C = P(require("../FormComponents/Blocks/ShippingAddressBlock")),
					x = P(require("../FormComponents/Blocks/AddressBlock")),
					v = P(require("../FormComponents/Blocks/FormOptionsBlock")),
					S = P(require("../FormComponents/SubmitButton")),
					b = P(require("../StyledComponents/Spinner")),
					j = P(require("../StyledComponents/FormWrapper"));
				function A(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e)
							if (Object.prototype.hasOwnProperty.call(e, n)) {
								var o =
									Object.defineProperty && Object.getOwnPropertyDescriptor
										? Object.getOwnPropertyDescriptor(e, n)
										: {};
								o.get || o.set ? Object.defineProperty(t, n, o) : (t[n] = e[n]);
							}
					return (t.default = e), t;
				}
				function P(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var D = (function(u) {
					function d() {
						var r, l;
						(0, o.default)(this, d);
						for (var s = arguments.length, u = new Array(s), p = 0; p < s; p++)
							u[p] = arguments[p];
						return (
							((l = (0, a.default)(
								this,
								(r = (0, i.default)(d)).call.apply(r, [this].concat(u))
							)).hasMonthlyAmounts =
								l.props.monthlyAmounts && l.props.monthlyAmounts.length),
							(l.hasSingleAmounts =
								l.props.singleAmounts && l.props.singleAmounts.length),
							(l.state = {
								monthlyChecked:
									"monthly" == l.props.defaultOption ||
									(l.hasMonthlyAmounts && !l.hasSingleAmounts),
								totalGift: 0,
							}),
							(l.handleRadioClick = function(e) {
								var t = e.target.id,
									n = l.props,
									o = n.singlePledgeData,
									r = n.monthlyPledgeData;
								l.setState({ monthlyChecked: "singlegift" !== t }, function() {
									return l.context.updateGivingType({
										type: "UPDATE_GIVING_TYPE",
										typeId: t,
										singlePledgeData: o,
										monthlyPledgeData: r,
										source: "radioClick",
									});
								});
							}),
							(l.handleInputChange = function(e) {
								var t = e.target,
									n = "checkbox" === t.type ? t.checked : t.value,
									o = t.name;
								l.context.validateAndUpdateField({
									type: "UPDATE_FIELD",
									name: o,
									value: n,
								});
							}),
							(l.handleSubmit = (function() {
								var e = (0, n.default)(
									t.default.mark(function e(n) {
										return t.default.wrap(function(e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														n.preventDefault(), l.context.submitGivingForm();
													case 2:
													case "end":
														return e.stop();
												}
										}, e);
									})
								);
								return function(t) {
									return e.apply(this, arguments);
								};
							})()),
							(l.updateProducts = function(t) {
								var n = t.idx,
									o = t.quantity,
									r = (0, e.default)(l.state.productInfo),
									a = l.state.productsOrdered,
									i = r.findIndex(function(e) {
										return e.idx === n;
									});
								i > -1 ? (r[i].quantity = o) : r.push({ idx: n, quantity: o }),
									(a = !!r.reduce(function(e, t) {
										return e + t.quantity;
									}, 0));
								var s = (0, e.default)(l.state.cart.items),
									u = l.props.products[n],
									d = u.DetailName,
									p = u.DetailCprojCredit,
									m = u.DetailCprojMail,
									c = u.DetailDescription,
									h = u.PledgeAmount,
									f = s.filter(function(e) {
										return e.DetailDescription !== c;
									});
								o &&
									f.push({
										type: "product",
										PledgeAmount: +h * o,
										DetailCprojMail: m,
										DetailCprojCredit: p,
										DetailDescription: c,
										DetailName: d + "|" + o,
									}),
									l.setState({
										productInfo: r,
										productsOrdered: a,
										cart: { items: f },
									});
							}),
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
						(0, l.default)(d, u),
						(0, r.default)(d, [
							{
								key: "componentDidMount",
								value: function() {
									if (!this.context.initialized) {
										var e = {
												Zip: "",
												Monthlypledgeday:
													((o = new Date().getDate()),
													o >= 2 && o <= 28 ? o : 2),
												Title: "",
												Firstname: "",
												Middlename: "",
												Lastname: "",
												Suffix: "",
												Spousename: "",
												Address1: "",
												Address2: "",
												City: "",
												State: "",
												Country: "United States",
												Emailaddress: "",
												phone: "",
												savePersonalInfo: !0,
												ShipToYes: !1,
												ShipToName: "",
												ShipToAddress1: "",
												ShipToAddress2: "",
												ShipToCity: "",
												ShipToCountry: "",
												ShipToZip: "",
												ShipToState: "",
											},
											t = {};
										for (var n in e) t[n] = "";
										(t.amount = ""),
											this.context.initFields({
												type: "INIT_FORM_STATE",
												fields: e,
												errors: t,
												allowMonthlyDesignations: this.props
													.allowMonthlyDesignations,
											});
									}
									var o;
									try {
										var r = this.context.loadLS({ type: "LOAD" });
										this.setState({ monthlyChecked: r });
									} catch (a) {
										console.error(a.message), console.error(a.stack);
									}
								},
							},
							{
								key: "componentWillUnmount",
								value: (function() {
									var e = (0, n.default)(
										t.default.mark(function e() {
											return t.default.wrap(
												function(e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																this.context.fields.savePersonalInfo
																	? (30,
																	  2592e6,
																	  this.context.saveLS(2592e6, "info"))
																	: this.context.removeOneLS("info");
															case 2:
															case "end":
																return e.stop();
														}
												},
												e,
												this
											);
										})
									);
									return function() {
										return e.apply(this, arguments);
									};
								})(),
							},
							{
								key: "render",
								value: function() {
									var e = this.props,
										t = e.formTitle,
										n = e.submitButtonText,
										o = e.showGivingArray,
										r = e.givingFormat,
										a = e.productFormat,
										i = e.monthlyOption,
										l = e.singleOption,
										u = e.monthlyAmounts,
										d = e.singleAmounts,
										A = e.designations,
										P = e.monthlyPledgeData,
										D = e.singlePledgeData,
										k = e.products,
										F = e.additionalGift,
										I = e.getShippingAddress,
										O = e.allowInternational,
										T = e.getPhone,
										q = e.getHonorific,
										B = e.getSuffix,
										M = e.getMiddleName,
										N = e.getSpouseInfo,
										_ = e.defaultAmount,
										w = e.defaultOption,
										G = {
											monthlyOption: i,
											singleOption: l,
											monthlyAmounts: u || [],
											singleAmounts: d || [],
											designations: A || [],
											monthlyPledgeData: P,
											singlePledgeData: D,
										},
										E = {
											products: k || [],
											numProducts: k && k.length ? k.length : 0,
											additionalGift: F,
										},
										L = this.state.monthlyChecked,
										R = this.context,
										Y = R.errors,
										U = R.fields,
										H = R.initialized,
										z = R.submitting,
										V = R.submitted,
										W =
											Object.values(Y).filter(function(e) {
												return e && e.length > 0;
											}).length > 0;
									return V
										? null
										: (0, s.jsx)(
												j.default,
												null,
												(0, s.jsx)(
													"form",
													{
														id: "react-giving-form",
														autoComplete: "off",
														onSubmit: this.handleSubmit,
													},
													(0, s.jsx)(
														c.default,
														{ className: "form-title form-header" },
														t
													),
													o &&
														(0, s.jsx)(
															p.default,
															{ className: "form-panel" },
															(0, s.jsx)(h.default, {
																givingFormat: r,
																defaultAmount: _,
																defaultOption: w,
																givingOptions: G,
																handleRadioClick: this.handleRadioClick,
																amountError: Y.amount,
																monthlyChecked: L,
																Monthlypledgeday: U.Monthlypledgeday,
																monthlyOption: i,
																singleOption: l,
															})
														),
													A &&
														A.length > 0 &&
														(0, s.jsx)(
															p.default,
															{ className: "form-panel" },
															(0, s.jsx)(g.default, { designations: A })
														),
													E.numProducts > 0 &&
														(0, s.jsx)(
															p.default,
															{ className: "form-panel" },
															(0, s.jsx)(f.default, {
																productFormat: a,
																productOptions: E,
																updateProducts: this.updateProducts,
															})
														),
													H
														? (0, s.jsx)(
																p.default,
																{ className: "form-panel" },
																(0, s.jsx)(
																	m.default,
																	null,
																	(0, s.jsx)(
																		"legend",
																		null,
																		"Name and Billing Address Block"
																	),
																	(0, s.jsx)(
																		p.default,
																		{ className: "name-address__info" },
																		(0, s.jsx)(
																			c.default,
																			{ className: "form-header" },
																			"Please Enter Your Billing Information"
																		),
																		(0, s.jsx)(y.default, {
																			fields: U,
																			errors: Y,
																			getHonorific: q,
																			getMiddleName: M,
																			getSuffix: B,
																			getSpouseInfo: N,
																			handleInputChange: this.handleInputChange,
																			type: "Name",
																		}),
																		(0, s.jsx)(x.default, {
																			fields: U,
																			errors: Y,
																			handleInputChange: this.handleInputChange,
																			getAddress: !0,
																			getPhone: T,
																			allowInternational: O,
																			type: "Billing",
																		})
																	)
																),
																I &&
																	(0, s.jsx)(
																		m.default,
																		null,
																		(0, s.jsx)(
																			"legend",
																			null,
																			"Shipping Address Block"
																		),
																		(0, s.jsx)(
																			p.default,
																			{
																				className:
																					"shipping-address__container",
																			},
																			(0, s.jsx)(v.default, {
																				id: "ShipToYes",
																				checked: U.ShipToYes,
																				handleInputChange: this
																					.handleInputChange,
																				label:
																					" My shipping address is different than my billing address.",
																			}),
																			U.ShipToYes &&
																				(0, s.jsx)(C.default, {
																					fields: U,
																					errors: Y,
																					handleInputChange: this
																						.handleInputChange,
																					allowInternational: O,
																				})
																		)
																	),
																(0, s.jsx)(
																	m.default,
																	null,
																	(0, s.jsx)(
																		"legend",
																		null,
																		"Save Personal Info Block"
																	),
																	(0, s.jsx)(v.default, {
																		id: "savePersonalInfo",
																		checked: U.savePersonalInfo,
																		handleInputChange: this.handleInputChange,
																		label:
																			" Remember my name and address next time",
																	})
																),
																(0, s.jsx)(
																	m.default,
																	null,
																	(0, s.jsx)(
																		"legend",
																		null,
																		"Form Submit Block"
																	),
																	(0, s.jsx)(S.default, {
																		hasErrors: W,
																		error: Y.amount,
																		handleSubmit: this.handleSubmit,
																		submitting: z,
																		value: n,
																	})
																)
														  )
														: (0, s.jsx)(
																p.default,
																{ className: "form-panel" },
																(0, s.jsx)(b.default, null)
														  )
												)
										  );
								},
							},
						]),
						d
					);
				})(u.Component);
				D.contextType = d.GivingFormContext;
				var k = D;
				exports.default = k;
			},
			{
				"@babel/runtime/helpers/toConsumableArray": "Fhqp",
				"@babel/runtime/regenerator": "PMvg",
				"@babel/runtime/helpers/asyncToGenerator": "agGE",
				"@babel/runtime/helpers/classCallCheck": "0fcM",
				"@babel/runtime/helpers/createClass": "P8NW",
				"@babel/runtime/helpers/possibleConstructorReturn": "0421",
				"@babel/runtime/helpers/getPrototypeOf": "UJE0",
				"@babel/runtime/helpers/inherits": "d4H2",
				"@emotion/core": "haMh",
				react: "1n8/",
				"../Contexts/GivingFormProvider": "zetz",
				"../FormComponents/StyledComponents/FormPanel": "5N4C",
				"../FormComponents/StyledComponents/FieldSet": "T33x",
				"../FormComponents/StyledComponents/FormHeader": "7Dc8",
				"../FormComponents/Layouts/GivingLayout": "HDfm",
				"../FormComponents/Layouts/ProductLayout": "jPOl",
				"../FormComponents/Blocks/DesignationBlock": "4maS",
				"../FormComponents/Blocks/NameBlock": "ZTHW",
				"../FormComponents/Blocks/ShippingAddressBlock": "30nM",
				"../FormComponents/Blocks/AddressBlock": "2Sb5",
				"../FormComponents/Blocks/FormOptionsBlock": "cd8Z",
				"../FormComponents/SubmitButton": "0cOc",
				"../StyledComponents/Spinner": "wNTG",
				"../StyledComponents/FormWrapper": "dDLv",
			},
		],
	},
	{},
	[],
	null
);
//# sourceMappingURL=/GivingForm.8b379aad.js.map
