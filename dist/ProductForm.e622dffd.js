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
		fD7E: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = j(require("@babel/runtime/regenerator")),
					t = j(require("@babel/runtime/helpers/asyncToGenerator")),
					r = j(require("@babel/runtime/helpers/toConsumableArray")),
					n = j(require("@babel/runtime/helpers/classCallCheck")),
					o = j(require("@babel/runtime/helpers/createClass")),
					a = j(require("@babel/runtime/helpers/possibleConstructorReturn")),
					i = j(require("@babel/runtime/helpers/getPrototypeOf")),
					s = j(require("@babel/runtime/helpers/inherits")),
					l = require("@emotion/core"),
					u = v(require("react")),
					d = require("../Contexts/ProductFormProvider"),
					p = j(require("../FormComponents/StyledComponents/FormPanel")),
					c = j(require("../FormComponents/StyledComponents/FieldSet")),
					f = j(require("../FormComponents/StyledComponents/FormHeader")),
					m = j(require("../FormComponents/Layouts/ProductLayout")),
					h = j(require("../FormComponents/Blocks/NameBlock")),
					g = j(require("../FormComponents/Blocks/ShippingAddressBlock")),
					x = j(require("../FormComponents/Blocks/AddressBlock")),
					C = j(require("../FormComponents/Blocks/FormOptionsBlock")),
					y = j(require("../FormComponents/FunctionalComponents/SubmitButton")),
					S = j(require("../StyledComponents/Spinner")),
					b = j(require("../StyledComponents/FormWrapper"));
				function v(e) {
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
				function j(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var I = (function(u) {
					function d() {
						var o, s;
						(0, n.default)(this, d);
						for (var l = arguments.length, u = new Array(l), p = 0; p < l; p++)
							u[p] = arguments[p];
						return (
							((s = (0, a.default)(
								this,
								(o = (0, i.default)(d)).call.apply(o, [this].concat(u))
							)).state = { totalGift: 0 }),
							(s.updateProducts = function(e) {
								var t = e.idx,
									n = e.quantity,
									o = (0, r.default)(s.state.productInfo),
									a = s.state.productsOrdered,
									i = o.findIndex(function(e) {
										return e.idx === t;
									});
								i > -1 ? (o[i].quantity = n) : o.push({ idx: t, quantity: n }),
									(a = !!o.reduce(function(e, t) {
										return e + t.quantity;
									}, 0));
								var l = (0, r.default)(s.state.cart.items),
									u = s.props.products[t],
									d = u.DetailName,
									p = u.DetailCprojCredit,
									c = u.DetailCprojMail,
									f = u.DetailDescription,
									m = u.PledgeAmount,
									h = l.filter(function(e) {
										return e.DetailDescription !== f;
									});
								n &&
									h.push({
										type: "product",
										PledgeAmount: +m * n,
										DetailCprojMail: c,
										DetailCprojCredit: p,
										DetailDescription: f,
										DetailName: d + "|" + n,
									}),
									s.setState({
										productInfo: o,
										productsOrdered: a,
										cart: { items: h },
									});
							}),
							(s.handleInputChange = function(e) {
								var t = e.target,
									r = "checkbox" === t.type ? t.checked : t.value,
									n = t.name;
								s.context.validateAndUpdateField({
									type: "UPDATE_FIELD",
									name: n,
									value: r,
								});
							}),
							(s.handleSubmit = (function() {
								var r = (0, t.default)(
									e.default.mark(function t(r) {
										return e.default.wrap(function(e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														r.preventDefault(), s.context.submitProductForm();
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
							s
						);
					}
					return (
						(0, s.default)(d, u),
						(0, o.default)(d, [
							{
								key: "componentDidMount",
								value: function() {
									var e = {
											Zip: "",
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
											Country: this.props.allowInternational
												? ""
												: "United States",
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
									for (var r in e) t[r] = "";
									(t.amount = ""),
										this.context.initFields({
											type: "INIT_FORM_STATE",
											fields: e,
											errors: t,
										}),
										this.context.loadLS({ type: "LOAD" });
								},
							},
							{
								key: "componentWillUnmount",
								value: (function() {
									var r = (0, t.default)(
										e.default.mark(function t() {
											return e.default.wrap(
												function(e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																this.context.fields.savePersonalInfo
																	? this.context.saveLS()
																	: this.context.removeOneLS("info");
															case 2:
															case "end":
																return e.stop();
														}
												},
												t,
												this
											);
										})
									);
									return function() {
										return r.apply(this, arguments);
									};
								})(),
							},
							{
								key: "render",
								value: function() {
									var e = this.props,
										t = e.formTitle,
										r = e.submitButtonText,
										n = e.allowInternational,
										o = e.productFormat,
										a = e.products,
										i = e.additionalGift,
										s = (e.getAddress, e.getName, e.getPhone),
										u = e.getHonorific,
										d = e.getSuffix,
										v = e.getMiddleName,
										j = e.getSpouseInfo,
										I = e.getShippingAddress,
										P = {
											products: a || [],
											numProducts: a && a.length ? a.length : 0,
											additionalGift: i,
										},
										q = this.context,
										F = q.errors,
										k = q.fields,
										T = q.initialized,
										A = q.submitting,
										D =
											Object.values(F).filter(function(e) {
												return e && e.length > 0;
											}).length > 0;
									return (0, l.jsx)(
										b.default,
										null,
										(0, l.jsx)(
											"form",
											{
												id: "react-giving-form",
												autoComplete: "off",
												onSubmit: this.handleSubmit,
											},
											(0, l.jsx)(
												f.default,
												{ className: "form-title form-header" },
												t
											),
											P.numProducts > 0 &&
												(0, l.jsx)(
													p.default,
													{ className: "form-panel" },
													(0, l.jsx)(m.default, {
														productFormat: o,
														productOptions: P,
														updateProducts: this.updateProducts,
													})
												),
											T
												? (0, l.jsx)(
														p.default,
														{ className: "form-panel" },
														(0, l.jsx)(
															c.default,
															null,
															(0, l.jsx)(
																"legend",
																null,
																"Name and Billing Address Block"
															),
															(0, l.jsx)(
																p.default,
																{ className: "name-address__info" },
																(0, l.jsx)(
																	f.default,
																	{ className: "form-header" },
																	"Please Enter Your Billing Information"
																),
																(0, l.jsx)(h.default, {
																	fields: k,
																	errors: F,
																	getHonorific: u,
																	getMiddleName: v,
																	getSuffix: d,
																	getSpouseInfo: j,
																	handleInputChange: this.handleInputChange,
																	type: "Name",
																}),
																(0, l.jsx)(x.default, {
																	fields: k,
																	errors: F,
																	handleInputChange: this.handleInputChange,
																	getAddress: !0,
																	getPhone: s,
																	allowInternational: n,
																	type: "Billing",
																})
															)
														),
														I &&
															(0, l.jsx)(
																c.default,
																null,
																(0, l.jsx)(
																	"legend",
																	null,
																	"Shipping Address Block"
																),
																(0, l.jsx)(
																	p.default,
																	{ className: "shipping-address__container" },
																	(0, l.jsx)(C.default, {
																		id: "ShipToYes",
																		checked: k.ShipToYes,
																		handleInputChange: this.handleInputChange,
																		label:
																			" My shipping address is different than my billing address.",
																	}),
																	k.ShipToYes &&
																		(0, l.jsx)(g.default, {
																			fields: k,
																			errors: F,
																			handleInputChange: this.handleInputChange,
																			allowInternational: n,
																		})
																)
															),
														(0, l.jsx)(
															c.default,
															null,
															(0, l.jsx)(
																"legend",
																null,
																"Save Personal Info Block"
															),
															(0, l.jsx)(C.default, {
																id: "savePersonalInfo",
																checked: k.savePersonalInfo,
																handleInputChange: this.handleInputChange,
																label:
																	" Remember my name and address next time",
															})
														),
														(0, l.jsx)(
															c.default,
															null,
															(0, l.jsx)("legend", null, "Form Submit Block"),
															(0, l.jsx)(y.default, {
																hasErrors: D,
																error: F.amount,
																handleSubmit: this.handleSubmit,
																submitting: A,
																value: r,
															})
														)
												  )
												: (0, l.jsx)(
														p.default,
														{ className: "form-panel" },
														(0, l.jsx)(S.default, null)
												  )
										)
									);
								},
							},
						]),
						d
					);
				})(u.Component);
				I.contextType = d.ProductFormContext;
				var P = I;
				exports.default = P;
			},
			{
				"@babel/runtime/regenerator": "PMvg",
				"@babel/runtime/helpers/asyncToGenerator": "agGE",
				"@babel/runtime/helpers/toConsumableArray": "Fhqp",
				"@babel/runtime/helpers/classCallCheck": "0fcM",
				"@babel/runtime/helpers/createClass": "P8NW",
				"@babel/runtime/helpers/possibleConstructorReturn": "0421",
				"@babel/runtime/helpers/getPrototypeOf": "UJE0",
				"@babel/runtime/helpers/inherits": "d4H2",
				"@emotion/core": "haMh",
				react: "1n8/",
				"../Contexts/ProductFormProvider": "aq1S",
				"../FormComponents/StyledComponents/FormPanel": "5N4C",
				"../FormComponents/StyledComponents/FieldSet": "T33x",
				"../FormComponents/StyledComponents/FormHeader": "7Dc8",
				"../FormComponents/Layouts/ProductLayout": "jPOl",
				"../FormComponents/Blocks/NameBlock": "ZTHW",
				"../FormComponents/Blocks/ShippingAddressBlock": "30nM",
				"../FormComponents/Blocks/AddressBlock": "2Sb5",
				"../FormComponents/Blocks/FormOptionsBlock": "cd8Z",
				"../FormComponents/FunctionalComponents/SubmitButton": "pz13",
				"../StyledComponents/Spinner": "wNTG",
				"../StyledComponents/FormWrapper": "dDLv",
			},
		],
	},
	{},
	[],
	null
);
//# sourceMappingURL=/ProductForm.e622dffd.js.map
