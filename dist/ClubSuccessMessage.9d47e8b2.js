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
					a = t(require("react")),
					o = require("../StyledComponents/Card");
				function t(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var r = function(a) {
						var t = a.sectionTitle,
							r = a.premiumTitle,
							i = a.maxWidth,
							s = void 0 === i ? "818px" : i,
							l = a.linkColor,
							n = a.linkHoverColor,
							d = a.linkTextDecoration,
							c = a.linkHoverTextDecoration;
						return (0, e.jsx)(
							o.CardSection,
							null,
							t && (0, e.jsx)("h3", null, t),
							(0, e.jsx)(
								o.CardContainer,
								{ maxWidth: s },
								(0, e.jsx)(
									o.Card,
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
											{ className: "gift-info" },
											"When you join The 700 Club, you will receive an email to video stream ",
											(0, e.jsx)("em", null, r),
											" by Pat Robertson."
										)
									)
								),
								(0, e.jsx)(
									o.Card,
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
											{ className: "gift-info" },
											"Get the latest reports about how your donations are making an impact throughout the world and stay up-to-date with CBN.com",
											" ",
											(0, e.jsx)("a", { href: "" }, "View Email Updates")
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
				var e = c(require("@emotion/styled-base")),
					o = require("@emotion/core"),
					r = m(require("react")),
					t = require("../Contexts/GivingFormProvider"),
					i = require("../Contexts/FormConfigProvider"),
					n = require("react-aria-live"),
					s = c(require("../StyledComponents/FormWrapper")),
					l = c(require("../FormComponents/StyledComponents/FormPanel")),
					a = c(require("../FormComponents/Blocks/HeaderBlock")),
					u = c(require("../FormComponents/Blocks/FooterBlock")),
					d = c(require("../FormComponents/Blocks/SuccessCardBlock"));
				function m(e) {
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
				function c(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var f = (0, e.default)("div", {
						target: "epzi79e0",
						label: "ThankYouMessage",
					})({
						name: "vtsrpg",
						styles:
							"div{font-size:19px;line-height:23px;}div + div{margin-top:20px;}",
					}),
					g = (0, e.default)("div", {
						target: "epzi79e1",
						label: "SignatureBlock",
					})({
						name: "1ra7bs8",
						styles:
							"display:flex;flex-direction:row;justify-content:left;align-items:center;margin:10px 0;div.signature-img{width:125px;height:125px;overflow:hidden;border-radius:50%;margin-right:20px;.img-responsive{display:block;height:100%;transform:translateX(-30px);}}div.signature-block{margin:20px 0;flex:1 1 auto;display:flex;flex-direction:column;justify-content:flex-end;align-items:left;div{font-size:19px;line-height:23px;& > em{font-style:italic;}.img-responsive{display:block;height:60px;}}}",
					}),
					p = (0, e.default)("div", {
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
					x = function(e) {
						var m = e.confirmed,
							c = e.successMessage,
							x = c.monthly,
							v = c.single,
							h = c.image,
							k = c.signature,
							C = c.postScript,
							y = (0, r.useContext)(t.GivingFormContext),
							j = y.trackingVars,
							b = void 0 === j ? [] : j,
							B = y.fields.Firstname,
							F = y.designationInfo.title,
							T = (0, r.useContext)(i.FormConfigContext),
							M = T.getCssConfig,
							P = T.getFormConfig,
							D =
								"Y" ===
								b.reduce(function(e, o) {
									for (var r in o) e[r] = o[r];
									return e;
								}, {}).om_sMonthlyPledge,
							q = D ? x : v;
						q = q.replace("#FirstName#", B).replace("#Designation#", F);
						var w = D ? "Free Gifts To You" : "",
							H = (0, r.useMemo)(function() {
								return M("link");
							}, []),
							_ = H.linkColor,
							S = void 0 === _ ? "#009BDf" : _,
							O = H.linkHoverColor,
							N = void 0 === O ? "#0069ad" : O,
							Y = H.linkTextDecoration,
							z = void 0 === Y ? "none" : Y,
							W = H.linkHoverTextDecoration,
							R = void 0 === W ? "underline" : W,
							G = (0, r.useMemo)(function() {
								return M("form");
							}, []),
							I = G.formBackgroundColor,
							L = G.formBorderColor,
							A = G.formBorderRadius,
							V = G.formBorderWidth,
							X = G.formBoxShadow,
							E = G.formColor,
							J = G.formMargin,
							K = G.formMaxWidth,
							Q = G.formPadding,
							U = (0, r.useMemo)(function() {
								return P("premiumData");
							}, []).premiumTitle;
						return (
							m &&
							(0, o.jsx)(
								r.default.Fragment,
								null,
								(0, o.jsx)(a.default, {
									successTitle: "All Done",
									successDescription: "Thank You For Your Contribution.",
								}),
								(0, o.jsx)(n.LiveMessage, {
									message:
										"Your payment has being processed. A new page with a thank you message just loaded.",
									"aria-live": "polite",
								}),
								(0, o.jsx)(
									s.default,
									{
										formBackgroundColor: I,
										formBorderColor: L,
										formBorderRadius: A,
										formBorderWidth: V,
										formBoxShadow: X,
										formMaxWidth: K,
										formPadding: Q,
										formMargin: J,
										formColor: E,
										style: { marginBottom: "30px" },
									},
									(0, o.jsx)(
										l.default,
										{ className: "success-message" },
										(0, o.jsx)(f, {
											className: "thank-you",
											dangerouslySetInnerHTML: { __html: q },
										}),
										(0, o.jsx)(
											g,
											null,
											(0, o.jsx)(
												"div",
												{ className: "signature-img" },
												(0, o.jsx)("img", {
													className: "img-responsive",
													src: h,
													alt: "Pat Robertson",
												})
											),
											(0, o.jsx)(
												"div",
												{ className: "signature-block" },
												(0, o.jsx)("div", null, "Yours in Christ,"),
												(0, o.jsx)(
													"div",
													null,
													(0, o.jsx)("em", null, "Pat Robertson")
												),
												(0, o.jsx)(
													"div",
													null,
													(0, o.jsx)("img", {
														className: "img-responsive",
														src: k,
														alt: "Pat",
													})
												)
											)
										),
										(0, o.jsx)(p, {
											className: "thank-you",
											dangerouslySetInnerHTML: { __html: C },
											linkColor: S,
											linkHoverColor: N,
											linkTextDecoration: z,
											linkHoverTextDecoration: R,
										})
									)
								),
								(0, o.jsx)(d.default, {
									maxWidth: K,
									premiumTitle: U,
									sectionTitle: w,
									linkColor: S,
									linkHoverColor: N,
									linkTextDecoration: z,
									linkHoverTextDecoration: R,
								}),
								(0, o.jsx)(u.default, null)
							)
						);
					},
					v = (0, r.memo)(x);
				exports.default = v;
			},
			{
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
			},
		],
	},
	{},
	[],
	null
);
//# sourceMappingURL=/ClubSuccessMessage.9d47e8b2.js.map
