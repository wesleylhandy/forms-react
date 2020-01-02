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
		fcgM: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = o(require("@emotion/styled-base")),
					r = require("@emotion/core"),
					t = o(require("react"));
				function o(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var u = (0, e.default)("div", {
						target: "e12coaso0",
						label: "Instructions",
					})({ name: "9qkujr", styles: "margin-top:-20px;" }),
					n = function(e) {
						var t = e.formInstructions;
						return (0, r.jsx)(u, { dangerouslySetInnerHTML: { __html: t } });
					},
					s = n;
				exports.default = s;
			},
			{
				"@emotion/styled-base": "4vQ7",
				"@emotion/core": "haMh",
				react: "1n8/",
			},
		],
		FDx4: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var r = require("@emotion/core"),
					o = l(require("react")),
					e = n(require("../StyledComponents/FormGroup")),
					t = n(require("../StyledComponents/InputError")),
					i = require("../../Contexts/FormConfigProvider");
				function n(r) {
					return r && r.__esModule ? r : { default: r };
				}
				function l(r) {
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
				var d = function(n) {
						var l = n.id,
							d = n.specialStyle,
							a = n.label,
							u = n.required,
							p = n.maxLength,
							s = n.minHeight,
							v = n.error,
							c = n.placeholder,
							f = n.handleBlur,
							C = n.handleInputChange,
							h = n.value,
							x = n.disabled,
							g = (0, o.useContext)(i.FormConfigContext),
							b = g.getCssConfig,
							B = g.allowInputPlaceholders,
							m = b("input"),
							y = m.inputBackgroundColor,
							j = void 0 === y ? "#f0f0f0" : y,
							O = m.inputBorderColor,
							H = void 0 === O ? "#333" : O,
							P = m.inputBorderRadius,
							W = void 0 === P ? "0" : P,
							q = m.inputBorderWidth,
							w = void 0 === q ? "1px" : q,
							E = m.inputColor,
							F = void 0 === E ? "#333" : E,
							_ = m.inputHoverBorderColor,
							S = void 0 === _ ? "#777777" : _,
							k = m.inputHoverBorderWidth,
							T = void 0 === k ? "1px" : k,
							I = m.inputHoverBoxShadow,
							M =
								void 0 === I
									? "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #747474"
									: I,
							N = m.inputHoverBackgroundColor,
							D = void 0 === N ? "#fff" : N,
							L = m.inputErrorColor,
							R = void 0 === L ? "crimson" : L,
							G = m.inputErrorBorderWidth,
							z = void 0 === G ? "1px" : G,
							A = m.inputPlaceholderColor,
							J = void 0 === A ? "#747474" : A,
							K = b("label"),
							Q = K.labelColor,
							U = void 0 === Q ? "#333" : Q,
							V = K.labelFontWeight,
							X = void 0 === V ? "600" : V,
							Y = K.labelOpacity,
							Z = void 0 === Y ? "0" : Y,
							$ = K.labelTextTransform,
							rr = void 0 === $ ? "none" : $;
						return (0, r.jsx)(
							e.default,
							{
								id: "form-field-".concat(l),
								className: "input-group ".concat(d || ""),
								minHeight: s,
								inputBackgroundColor: j,
								inputBorderColor: H,
								inputBorderRadius: W,
								inputBorderWidth: w,
								inputColor: F,
								inputHoverBackgroundColor: D,
								inputHoverBorderColor: S,
								inputHoverBorderWidth: T,
								inputHoverBoxShadow: M,
								inputErrorColor: R,
								inputErrorBorderWidth: z,
								inputPlaceholderColor: J,
								labelColor: U,
								labelFontWeight: X,
								labelOpacity: Z,
								labelTextTransform: rr,
							},
							(0, r.jsx)(
								"label",
								{ htmlFor: l },
								a,
								(0, r.jsx)("span", null, u ? "*" : "")
							),
							(0, r.jsx)("textarea", {
								className: v ? "error" : "",
								id: l,
								maxLength: p,
								name: l,
								placeholder: B ? c : "",
								required: u,
								onChange: C,
								value: h,
								"aria-invalid": !!v,
								onBlur: f,
								disabled: x,
							}),
							(0, r.jsx)(
								t.default,
								{ className: "input-error", inputErrorColor: R },
								v
							)
						);
					},
					a = d;
				exports.default = a;
			},
			{
				"@emotion/core": "haMh",
				react: "1n8/",
				"../StyledComponents/FormGroup": "W1dw",
				"../StyledComponents/InputError": "bLuL",
				"../../Contexts/FormConfigProvider": "XmuQ",
			},
		],
		ha3f: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = require("@emotion/core"),
					r = s(require("react")),
					t = s(require("../StyledComponents/FormRow")),
					o = s(require("../StyledComponents/FieldSet")),
					u = s(require("../FunctionalComponents/TextAreaGroup"));
				function s(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var l = function(r) {
						return (0, e.jsx)(
							o.default,
							null,
							(0, e.jsx)("legend", null, "Message Block"),
							(0, e.jsx)(
								t.default,
								{ className: "messsage-row" },
								(0, e.jsx)(u.default, r)
							)
						);
					},
					n = l;
				exports.default = n;
			},
			{
				"@emotion/core": "haMh",
				react: "1n8/",
				"../StyledComponents/FormRow": "01J/",
				"../StyledComponents/FieldSet": "T33x",
				"../FunctionalComponents/TextAreaGroup": "FDx4",
			},
		],
		YOZJ: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = B(require("@babel/runtime/regenerator")),
					r = B(require("@babel/runtime/helpers/asyncToGenerator")),
					t = B(require("@babel/runtime/helpers/classCallCheck")),
					n = B(require("@babel/runtime/helpers/createClass")),
					o = B(require("@babel/runtime/helpers/possibleConstructorReturn")),
					a = B(require("@babel/runtime/helpers/getPrototypeOf")),
					l = B(require("@babel/runtime/helpers/inherits")),
					s = require("@emotion/core"),
					i = S(require("react")),
					u = require("../Contexts/SignUpFormProvider"),
					d = B(require("../FormComponents/StyledComponents/FormPanel")),
					m = B(require("../FormComponents/StyledComponents/FieldSet")),
					f = B(require("../FormComponents/StyledComponents/FormHeader")),
					p = B(
						require("../FormComponents/FunctionalComponents/FormInstructions")
					),
					c = B(require("../FormComponents/Blocks/NameBlock")),
					h = B(require("../FormComponents/Blocks/AddressBlock")),
					g = B(require("../FormComponents/FunctionalComponents/SubmitButton")),
					x = B(require("../StyledComponents/Spinner")),
					b = B(require("../StyledComponents/FormWrapper")),
					C = B(require("../../helpers/form-display-values")),
					v = B(require("../FormComponents/StyledComponents/Disclaimer")),
					y = B(require("../FormComponents/Blocks/MessageBlock"));
				function S(e) {
					if (e && e.__esModule) return e;
					var r = {};
					if (null != e)
						for (var t in e)
							if (Object.prototype.hasOwnProperty.call(e, t)) {
								var n =
									Object.defineProperty && Object.getOwnPropertyDescriptor
										? Object.getOwnPropertyDescriptor(e, t)
										: {};
								n.get || n.set ? Object.defineProperty(r, t, n) : (r[t] = e[t]);
							}
					return (r.default = e), r;
				}
				function B(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var F = (function(i) {
					function u() {
						var n, l;
						(0, t.default)(this, u);
						for (var s = arguments.length, i = new Array(s), d = 0; d < s; d++)
							i[d] = arguments[d];
						return (
							((l = (0, o.default)(
								this,
								(n = (0, a.default)(u)).call.apply(n, [this].concat(i))
							)).handleInputChange = function(e) {
								var r = e.target,
									t = "checkbox" === r.type ? r.checked : r.value,
									n = r.name;
								if ("ccNumber" === n || "phone" === n) {
									var o = (0, C.default)(n, t);
									l.context.updateFields(o);
								} else
									l.context.updateField({
										type: "UPDATE_FIELD",
										name: n,
										value: t,
									});
							}),
							(l.handleBlur = function(e) {
								var r = e.target,
									t = "checkbox" === r.type ? r.checked : r.value,
									n = r.name;
								console.log({ name: n, value: t }),
									l.context.validateAndUpdateField({
										type: "UPDATE_FIELD",
										name: n,
										value: t,
									});
							}),
							(l.handleSubmit = (function() {
								var t = (0, r.default)(
									e.default.mark(function r(t) {
										return e.default.wrap(function(e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														t.preventDefault(), l.context.submitSignUpForm();
													case 2:
													case "end":
														return e.stop();
												}
										}, r);
									})
								);
								return function(e) {
									return t.apply(this, arguments);
								};
							})()),
							l
						);
					}
					return (
						(0, l.default)(u, i),
						(0, n.default)(u, [
							{
								key: "componentDidMount",
								value: function() {
									if (!this.context.initialized) {
										var e = {
											Title: "",
											Firstname: "",
											Middlename: "",
											Lastname: "",
											Suffix: "",
											Spousename: "",
											Emailaddress: "",
											message: "",
											phone: "",
										};
										this.context.getAddress &&
											((e.Address1 = ""),
											(e.Address2 = ""),
											(e.City = ""),
											(e.State = ""),
											(e.Country = this.props.allowInternational
												? ""
												: "United States"));
										var r = {};
										for (var t in e) r[t] = "";
										this.context.initFields({
											type: "INIT_FORM_STATE",
											fields: e,
											errors: r,
										});
									}
								},
							},
							{
								key: "render",
								value: function() {
									var e = this.props,
										r = e.formTitle,
										t = e.formInstructions,
										n = e.submitButtonText,
										o = e.allowInternational,
										a = e.getAddress,
										l = e.getName,
										i = e.getPhone,
										u = e.getHonorific,
										C = e.getSuffix,
										S = e.getMiddleName,
										B = e.getSpouseInfo,
										F = e.getMessage,
										j = e.formBackgroundColor,
										q = e.formBorderColor,
										I = e.formBorderRadius,
										k = e.formBorderWidth,
										M = e.formBoxShadow,
										P = e.formColor,
										N = e.formMargin,
										A = e.formMaxWidth,
										O = e.formPadding,
										_ = this.context,
										w = _.errors,
										T = _.fields,
										D = _.initialized,
										E = _.submitting,
										U = _.submitted,
										W = _.validating,
										H =
											Object.values(w).filter(function(e) {
												return e && e.length > 0;
											}).length > 0;
									return U
										? null
										: (0, s.jsx)(
												b.default,
												{
													formBackgroundColor: j,
													formBorderColor: q,
													formBorderRadius: I,
													formBorderWidth: k,
													formBoxShadow: M,
													formMaxWidth: A,
													formPadding: O,
													formMargin: N,
													formColor: P,
													inProp: D,
												},
												(0, s.jsx)(
													"form",
													{
														id: "react-signup-form",
														autoComplete: "off",
														onSubmit: this.handleSubmit,
													},
													(0, s.jsx)(
														f.default,
														{ className: "form-title form-header" },
														r
													),
													(0, s.jsx)(p.default, {
														className: "form-instructions",
														formInstructions: t,
													}),
													D
														? (0, s.jsx)(
																d.default,
																{ className: "form-panel" },
																(0, s.jsx)(
																	m.default,
																	null,
																	(0, s.jsx)(
																		"legend",
																		null,
																		"Name and Address Block"
																	),
																	(0, s.jsx)(
																		d.default,
																		{ className: "name-address__info" },
																		(0, s.jsx)(f.default, {
																			className: "form-header",
																		}),
																		l &&
																			(0, s.jsx)(c.default, {
																				fields: T,
																				errors: w,
																				getHonorific: u,
																				getMiddleName: S,
																				getSuffix: C,
																				getSpouseInfo: B,
																				handleInputChange: this
																					.handleInputChange,
																				handleBlur: this.handleBlur,
																				type: "Name",
																				submitting: E || U,
																			}),
																		(0, s.jsx)(h.default, {
																			fields: T,
																			errors: w,
																			handleInputChange: this.handleInputChange,
																			handleBlur: this.handleBlur,
																			getPhone: i,
																			getAddress: a,
																			allowInternational: o,
																			type: "Billing",
																			submitting: E || U,
																			validating: W,
																		}),
																		F &&
																			(0, s.jsx)(y.default, {
																				id: "message",
																				label: "Message",
																				specialStyle: "form-group--Message",
																				required: !0,
																				value: T.message,
																				error: w.message,
																				handleInputChange: this
																					.handleInputChange,
																				handleBlur: this.handleBlur,
																				disabled: E || U,
																				minHeight: 100,
																			})
																	)
																),
																(0, s.jsx)(
																	m.default,
																	null,
																	(0, s.jsx)(
																		"legend",
																		null,
																		"Form Submit Block"
																	),
																	(0, s.jsx)(g.default, {
																		hasErrors: H,
																		error: w.formError,
																		handleSubmit: this.handleSubmit,
																		submitting: E || U,
																		value: n,
																	}),
																	(0, s.jsx)(
																		v.default,
																		{
																			style: {
																				color: "#54585D",
																				marginTop: 40,
																			},
																		},
																		"CBN values and protects your personal information."
																	)
																)
														  )
														: (0, s.jsx)(
																d.default,
																{ className: "form-panel" },
																(0, s.jsx)(x.default, null)
														  )
												)
										  );
								},
							},
						]),
						u
					);
				})(i.Component);
				F.contextType = u.SignUpFormContext;
				var j = F;
				exports.default = j;
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
				"../Contexts/SignUpFormProvider": "HMVu",
				"../FormComponents/StyledComponents/FormPanel": "5N4C",
				"../FormComponents/StyledComponents/FieldSet": "T33x",
				"../FormComponents/StyledComponents/FormHeader": "7Dc8",
				"../FormComponents/FunctionalComponents/FormInstructions": "fcgM",
				"../FormComponents/Blocks/NameBlock": "ZTHW",
				"../FormComponents/Blocks/AddressBlock": "2Sb5",
				"../FormComponents/FunctionalComponents/SubmitButton": "pz13",
				"../StyledComponents/Spinner": "wNTG",
				"../StyledComponents/FormWrapper": "dDLv",
				"../../helpers/form-display-values": "mGSJ",
				"../FormComponents/StyledComponents/Disclaimer": "4tOK",
				"../FormComponents/Blocks/MessageBlock": "ha3f",
			},
		],
	},
	{},
	[],
	null
);
//# sourceMappingURL=/SignUpForm.fb5a3cd6.js.map
