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
		A7P8: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = o(require("react")),
					t = require("../StyledComponents/Card"),
					a = require("@emotion/core");
				function o(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var r = function(e) {
						var o = e.sectionTitle,
							r = e.premiumTitle,
							i = e.maxWidth,
							s = void 0 === i ? "818px" : i,
							n = e.linkColor,
							l = e.linkHoverColor,
							d = e.linkTextDecoration,
							c = e.linkHoverTextDecoration;
						return (0, a.jsx)(
							t.CardSection,
							null,
							o && (0, a.jsx)("h3", null, o),
							(0, a.jsx)(
								t.CardContainer,
								{ maxWidth: s },
								(0, a.jsx)(
									t.Card,
									{ className: "card" },
									(0, a.jsx)(
										"h4",
										{ className: "card__title" },
										"Exclusive Online Access"
									),
									(0, a.jsx)(
										"div",
										{ className: "card__body" },
										(0, a.jsx)(
											"div",
											{
												className: "gift-info",
												style: { marginBottom: 60, padding: "0 10px" },
											},
											"When you join The 700 Club, you will receive an email to video stream ",
											(0, a.jsx)("em", {
												dangerouslySetInnerHTML: { __html: r },
											}),
											" by Pat Robertson."
										)
									)
								),
								(0, a.jsx)(
									t.Card,
									{
										className: "card",
										linkColor: n,
										linkHoverColor: l,
										linkTextDecoration: d,
										linkHoverTextDecoration: c,
									},
									(0, a.jsx)(
										"h4",
										{ className: "card__title" },
										"Email Updates"
									),
									(0, a.jsx)(
										"div",
										{ className: "card__body" },
										(0, a.jsx)(
											"div",
											{
												className: "gift-info",
												style: { marginBottom: 60, padding: "0 10px" },
											},
											"Get the latest reports about how your donations are making an impact throughout the world and stay up-to-date with CBN.com",
											" ",
											(0, a.jsx)(
												"a",
												{
													href:
														"https://www.cbn.com/community/af/emailpreferences.aspx",
													target: "_blank",
												},
												"View Email Updates"
											)
										)
									)
								)
							)
						);
					},
					i = r;
				exports.default = i;
			},
			{
				react: "n8MK",
				"../StyledComponents/Card": "SR4m",
				"@emotion/core": "haMh",
			},
		],
		EIHZ: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = g(require("@babel/runtime/helpers/slicedToArray")),
					o = g(require("@emotion/styled-base")),
					r = p(require("react")),
					t = require("../Contexts/GivingFormProvider"),
					i = require("../Contexts/FormConfigProvider"),
					n = require("react-aria-live"),
					s = g(require("../StyledComponents/FormWrapper")),
					l = g(require("../FormComponents/StyledComponents/FormPanel")),
					a = g(require("../FormComponents/Blocks/HeaderBlock")),
					u = g(require("../FormComponents/Blocks/FooterBlock")),
					c = g(require("../FormComponents/Blocks/SuccessCardBlock")),
					d = require("../../helpers/scrollToPoint"),
					m = require("@emotion/core");
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
				function p(e) {
					if (e && e.__esModule) return e;
					if (null === e || ("object" != typeof e && "function" != typeof e))
						return { default: e };
					var o = f();
					if (o && o.has(e)) return o.get(e);
					var r = {},
						t = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var i in e)
						if (Object.prototype.hasOwnProperty.call(e, i)) {
							var n = t ? Object.getOwnPropertyDescriptor(e, i) : null;
							n && (n.get || n.set)
								? Object.defineProperty(r, i, n)
								: (r[i] = e[i]);
						}
					return (r.default = e), o && o.set(e, r), r;
				}
				function g(e) {
					return e && e.__esModule ? e : { default: e };
				}
				function x() {
					return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
				}
				var v = (0, o.default)("div", {
						target: "epzi79e0",
						label: "ThankYouMessage",
					})({
						name: "vtsrpg",
						styles:
							"div{font-size:19px;line-height:23px;}div + div{margin-top:20px;}",
					}),
					h = (0, o.default)("div", {
						target: "epzi79e1",
						label: "SignatureBlock",
					})({
						name: "vm3rql",
						styles:
							"display:flex;flex-direction:row;justify-content:left;align-items:center;margin:10px 0;div.signature-img{width:125px;height:125px;overflow:hidden;border-radius:50%;margin-right:20px;.img-responsive{display:block;height:100%;}}div.signature-block{margin:20px 0;flex:1 1 auto;display:flex;flex-direction:column;justify-content:flex-end;align-items:left;div{font-size:19px;line-height:23px;& > em{font-style:italic;}.img-responsive{display:block;height:60px;}}}",
					}),
					k = (0, o.default)("div", {
						target: "epzi79e2",
						label: "PostScript",
					})(
						"div{font-size:19px;line-height:23px;a{font-weight:bold;color:",
						function(e) {
							return e.linkColor;
						},
						";textdecoration:",
						function(e) {
							return e.linkTextDecoration;
						},
						";transition:color 200ms ease-in-out;&:hover,&:active,&:focus{color:",
						function(e) {
							return e.linkHoverColor;
						},
						";text-decoration:",
						function(e) {
							return e.linkHoverTextDecoration;
						},
						";}}}div + div{margin-top:20px;}"
					),
					y = function(o) {
						var f = o.confirmed,
							p = o.successMessage,
							g = p.monthly,
							x = p.single,
							y = p.image,
							C = p.signature,
							j = p.postScript,
							b = (0, r.useState)(!1),
							T = (0, e.default)(b, 2),
							B = T[0],
							P = T[1],
							M = (0, r.useContext)(t.GivingFormContext),
							F = M.trackingVars,
							D = void 0 === F ? [] : F,
							q = M.fields.Firstname,
							w = M.designationInfo.title,
							H = (0, r.useContext)(i.FormConfigContext),
							S = H.getCssConfig,
							_ = H.getFormConfig,
							N = H.clearTimeouts,
							O =
								"Y" ===
								D.reduce(function(e, o) {
									for (var r in o) e[r] = o[r];
									return e;
								}, {}).om_sMonthlyPledge,
							W = O ? g : x;
						W = W.replace("#FirstName#", q).replace("#Designation#", w);
						var Y = O ? "Free Gifts To You" : "",
							z = (0, r.useMemo)(function() {
								return S("link");
							}, []),
							I = z.linkColor,
							L = void 0 === I ? "#009BDf" : I,
							R = z.linkHoverColor,
							A = void 0 === R ? "#0069ad" : R,
							G = z.linkTextDecoration,
							E = void 0 === G ? "none" : G,
							V = z.linkHoverTextDecoration,
							J = void 0 === V ? "underline" : V,
							K = (0, r.useMemo)(function() {
								return S("form");
							}, []),
							Q = K.formBackgroundColor,
							U = K.formBorderColor,
							X = K.formBorderRadius,
							Z = K.formBorderWidth,
							$ = K.formBoxShadow,
							ee = K.formColor,
							oe = K.formMargin,
							re = K.formMaxWidth,
							te = K.formPadding,
							ie = (0, r.useMemo)(function() {
								return _("premiumData");
							}, []).premiumTitle;
						return (
							(0, r.useLayoutEffect)(
								function() {
									if (f & !B) {
										P(!0);
										var e = document.getElementById("react-club-form-success"),
											o = (0, d.offsetTop)(e);
										(0, d.scrollToPoint)(o);
									}
								},
								[f, B]
							),
							f && N(),
							f &&
								(0, m.jsx)(
									r.default.Fragment,
									null,
									(0, m.jsx)(a.default, {
										successTitle: "All Done",
										successDescription: "Thank You For Your Contribution.",
									}),
									(0, m.jsx)(n.LiveMessage, {
										message:
											"Your payment has being processed. A new page with a thank you message just loaded.",
										"aria-live": "polite",
									}),
									(0, m.jsx)(
										s.default,
										{
											formBackgroundColor: Q,
											formBorderColor: U,
											formBorderRadius: X,
											formBorderWidth: Z,
											formBoxShadow: $,
											formMaxWidth: re,
											formPadding: te,
											formMargin: oe,
											formColor: ee,
											style: { marginBottom: "30px" },
											inProp: f,
										},
										(0, m.jsx)(
											l.default,
											{
												className: "success-message",
												id: "react-club-form-success",
											},
											(0, m.jsx)(v, {
												className: "thank-you",
												dangerouslySetInnerHTML: { __html: W },
											}),
											(0, m.jsx)(
												h,
												null,
												(0, m.jsx)(
													"div",
													{ className: "signature-img" },
													(0, m.jsx)("img", {
														className: "img-responsive",
														src: y,
														alt: "Pat Robertson",
													})
												),
												(0, m.jsx)(
													"div",
													{ className: "signature-block" },
													(0, m.jsx)("div", null, "Yours in Christ,"),
													(0, m.jsx)(
														"div",
														null,
														(0, m.jsx)("em", null, "Pat Robertson")
													),
													(0, m.jsx)(
														"div",
														null,
														(0, m.jsx)("img", {
															className: "img-responsive",
															src: C,
															alt: "Pat",
														})
													)
												)
											),
											(0, m.jsx)(k, {
												className: "thank-you",
												dangerouslySetInnerHTML: { __html: j },
												linkColor: L,
												linkHoverColor: A,
												linkTextDecoration: E,
												linkHoverTextDecoration: J,
											})
										)
									),
									(0, m.jsx)(c.default, {
										maxWidth: re,
										premiumTitle: ie,
										sectionTitle: Y,
										linkColor: L,
										linkHoverColor: A,
										linkTextDecoration: E,
										linkHoverTextDecoration: J,
									}),
									(0, m.jsx)(u.default, null)
								)
						);
					},
					C = (0, r.memo)(y);
				exports.default = C;
			},
			{
				"@babel/runtime/helpers/slicedToArray": "HETk",
				"@emotion/styled-base": "vQ7R",
				react: "n8MK",
				"../Contexts/GivingFormProvider": "zetz",
				"../Contexts/FormConfigProvider": "XmuQ",
				"react-aria-live": "A22t",
				"../StyledComponents/FormWrapper": "dDLv",
				"../FormComponents/StyledComponents/FormPanel": "N4C2",
				"../FormComponents/Blocks/HeaderBlock": "whbU",
				"../FormComponents/Blocks/FooterBlock": "TxhT",
				"../FormComponents/Blocks/SuccessCardBlock": "A7P8",
				"../../helpers/scrollToPoint": "qBJF",
				"@emotion/core": "haMh",
			},
		],
	},
	{},
	[],
	null
);
//# sourceMappingURL=/ClubSuccessMessage.3b3351e2.js.map
