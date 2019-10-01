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
				var e = require("@emotion/core"),
					t = o(require("react")),
					a = require("../StyledComponents/Card");
				function o(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var i = function(t) {
						var o = t.sectionTitle,
							i = t.premiumTitle,
							r = t.maxWidth,
							s = void 0 === r ? "818px" : r,
							l = t.linkColor,
							n = t.linkHoverColor,
							d = t.linkTextDecoration,
							c = t.linkHoverTextDecoration;
						return (0, e.jsx)(
							a.CardSection,
							null,
							o && (0, e.jsx)("h3", null, o),
							(0, e.jsx)(
								a.CardContainer,
								{ maxWidth: s },
								(0, e.jsx)(
									a.Card,
									{ className: "card" },
									(0, e.jsx)(
										"h4",
										{ className: "card__title" },
										"Exclusive Online Access"
									),
									(0, e.jsx)(
										"div",
										{ className: "card__body" },
										(0, e.jsx)(
											"div",
											{
												className: "gift-info",
												style: { marginBottom: 60, padding: "0 10px" },
											},
											"When you join The 700 Club, you will receive an email to video stream ",
											(0, e.jsx)("em", null, i),
											" by Pat Robertson."
										)
									)
								),
								(0, e.jsx)(
									a.Card,
									{
										className: "card",
										linkColor: l,
										linkHoverColor: n,
										linkTextDecoration: d,
										linkHoverTextDecoration: c,
									},
									(0, e.jsx)(
										"h4",
										{ className: "card__title" },
										"Email Updates"
									),
									(0, e.jsx)(
										"div",
										{ className: "card__body" },
										(0, e.jsx)(
											"div",
											{
												className: "gift-info",
												style: { marginBottom: 60, padding: "0 10px" },
											},
											"Get the latest reports about how your donations are making an impact throughout the world and stay up-to-date with CBN.com",
											" ",
											(0, e.jsx)("a", { href: "" }, "View Email Updates")
										)
									)
								)
							)
						);
					},
					r = i;
				exports.default = r;
			},
			{
				"@emotion/core": "haMh",
				react: "1n8/",
				"../StyledComponents/Card": "/SR4",
			},
		],
		"EI/h": [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = g(require("@babel/runtime/helpers/slicedToArray")),
					o = g(require("@emotion/styled-base")),
					r = require("@emotion/core"),
					t = f(require("react")),
					i = require("../Contexts/GivingFormProvider"),
					n = require("../Contexts/FormConfigProvider"),
					s = require("react-aria-live"),
					l = g(require("../StyledComponents/FormWrapper")),
					a = g(require("../FormComponents/StyledComponents/FormPanel")),
					u = g(require("../FormComponents/Blocks/HeaderBlock")),
					c = g(require("../FormComponents/Blocks/FooterBlock")),
					d = g(require("../FormComponents/Blocks/SuccessCardBlock")),
					m = require("../../helpers/scrollToPoint");
				function f(e) {
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
				function g(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var p = (0, o.default)("div", {
						target: "epzi79e0",
						label: "ThankYouMessage",
					})({
						name: "vtsrpg",
						styles:
							"div{font-size:19px;line-height:23px;}div + div{margin-top:20px;}",
					}),
					x = (0, o.default)("div", {
						target: "epzi79e1",
						label: "SignatureBlock",
					})({
						name: "vm3rql",
						styles:
							"display:flex;flex-direction:row;justify-content:left;align-items:center;margin:10px 0;div.signature-img{width:125px;height:125px;overflow:hidden;border-radius:50%;margin-right:20px;.img-responsive{display:block;height:100%;}}div.signature-block{margin:20px 0;flex:1 1 auto;display:flex;flex-direction:column;justify-content:flex-end;align-items:left;div{font-size:19px;line-height:23px;& > em{font-style:italic;}.img-responsive{display:block;height:60px;}}}",
					}),
					v = (0, o.default)("div", {
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
					h = function(o) {
						var f = o.confirmed,
							g = o.successMessage,
							h = g.monthly,
							k = g.single,
							C = g.image,
							y = g.signature,
							j = g.postScript,
							b = (0, t.useState)(!1),
							T = (0, e.default)(b, 2),
							B = T[0],
							P = T[1],
							F = (0, t.useContext)(i.GivingFormContext),
							M = F.trackingVars,
							D = void 0 === M ? [] : M,
							q = F.fields.Firstname,
							S = F.designationInfo.title,
							w = (0, t.useContext)(n.FormConfigContext),
							H = w.getCssConfig,
							_ = w.getFormConfig,
							O =
								"Y" ===
								D.reduce(function(e, o) {
									for (var r in o) e[r] = o[r];
									return e;
								}, {}).om_sMonthlyPledge,
							N = O ? h : k;
						N = N.replace("#FirstName#", q).replace("#Designation#", S);
						var Y = O ? "Free Gifts To You" : "",
							z = (0, t.useMemo)(function() {
								return H("link");
							}, []),
							W = z.linkColor,
							I = void 0 === W ? "#009BDf" : W,
							L = z.linkHoverColor,
							R = void 0 === L ? "#0069ad" : L,
							A = z.linkTextDecoration,
							G = void 0 === A ? "none" : A,
							E = z.linkHoverTextDecoration,
							V = void 0 === E ? "underline" : E,
							J = (0, t.useMemo)(function() {
								return H("form");
							}, []),
							K = J.formBackgroundColor,
							Q = J.formBorderColor,
							U = J.formBorderRadius,
							X = J.formBorderWidth,
							Z = J.formBoxShadow,
							$ = J.formColor,
							ee = J.formMargin,
							oe = J.formMaxWidth,
							re = J.formPadding,
							te = (0, t.useMemo)(function() {
								return _("premiumData");
							}, []).premiumTitle;
						return (
							(0, t.useLayoutEffect)(
								function() {
									if (f & !B) {
										console.log("Scrolling Snapshot on Success"), P(!0);
										var e = document.getElementById("react-club-form-success"),
											o = (0, m.offsetTop)(e);
										(0, m.scrollToPoint)(o);
									}
								},
								[f, B]
							),
							f &&
								(0, r.jsx)(
									t.default.Fragment,
									null,
									(0, r.jsx)(u.default, {
										successTitle: "All Done",
										successDescription: "Thank You For Your Contribution.",
									}),
									(0, r.jsx)(s.LiveMessage, {
										message:
											"Your payment has being processed. A new page with a thank you message just loaded.",
										"aria-live": "polite",
									}),
									(0, r.jsx)(
										l.default,
										{
											formBackgroundColor: K,
											formBorderColor: Q,
											formBorderRadius: U,
											formBorderWidth: X,
											formBoxShadow: Z,
											formMaxWidth: oe,
											formPadding: re,
											formMargin: ee,
											formColor: $,
											style: { marginBottom: "30px" },
											inProp: f,
										},
										(0, r.jsx)(
											a.default,
											{
												className: "success-message",
												id: "react-club-form-success",
											},
											(0, r.jsx)(p, {
												className: "thank-you",
												dangerouslySetInnerHTML: { __html: N },
											}),
											(0, r.jsx)(
												x,
												null,
												(0, r.jsx)(
													"div",
													{ className: "signature-img" },
													(0, r.jsx)("img", {
														className: "img-responsive",
														src: C,
														alt: "Pat Robertson",
													})
												),
												(0, r.jsx)(
													"div",
													{ className: "signature-block" },
													(0, r.jsx)("div", null, "Yours in Christ,"),
													(0, r.jsx)(
														"div",
														null,
														(0, r.jsx)("em", null, "Pat Robertson")
													),
													(0, r.jsx)(
														"div",
														null,
														(0, r.jsx)("img", {
															className: "img-responsive",
															src: y,
															alt: "Pat",
														})
													)
												)
											),
											(0, r.jsx)(v, {
												className: "thank-you",
												dangerouslySetInnerHTML: { __html: j },
												linkColor: I,
												linkHoverColor: R,
												linkTextDecoration: G,
												linkHoverTextDecoration: V,
											})
										)
									),
									(0, r.jsx)(d.default, {
										maxWidth: oe,
										premiumTitle: te,
										sectionTitle: Y,
										linkColor: I,
										linkHoverColor: R,
										linkTextDecoration: G,
										linkHoverTextDecoration: V,
									}),
									(0, r.jsx)(c.default, null)
								)
						);
					},
					k = (0, t.memo)(h);
				exports.default = k;
			},
			{
				"@babel/runtime/helpers/slicedToArray": "69HE",
				"@emotion/styled-base": "4vQ7",
				"@emotion/core": "haMh",
				react: "1n8/",
				"../Contexts/GivingFormProvider": "zetz",
				"../Contexts/FormConfigProvider": "XmuQ",
				"react-aria-live": "A22t",
				"../StyledComponents/FormWrapper": "dDLv",
				"../FormComponents/StyledComponents/FormPanel": "5N4C",
				"../FormComponents/Blocks/HeaderBlock": "whbU",
				"../FormComponents/Blocks/FooterBlock": "8Txh",
				"../FormComponents/Blocks/SuccessCardBlock": "A7P8",
				"../../helpers/scrollToPoint": "qBJF",
			},
		],
	},
	{},
	[],
	null
);
//# sourceMappingURL=/ClubSuccessMessage.a952820d.js.map
