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
		YOZJ: [
			function(require, module, exports) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports.default = void 0);
				var e = v(require("@babel/runtime/regenerator")),
					t = v(require("@babel/runtime/helpers/asyncToGenerator")),
					r = v(require("@babel/runtime/helpers/classCallCheck")),
					n = v(require("@babel/runtime/helpers/createClass")),
					o = v(require("@babel/runtime/helpers/possibleConstructorReturn")),
					a = v(require("@babel/runtime/helpers/getPrototypeOf")),
					l = v(require("@babel/runtime/helpers/inherits")),
					s = require("@emotion/core"),
					i = x(require("react")),
					u = require("../Contexts/SignUpFormProvider"),
					d = v(require("../FormComponents/StyledComponents/FormPanel")),
					m = v(require("../FormComponents/StyledComponents/FieldSet")),
					f = v(require("../FormComponents/StyledComponents/FormHeader")),
					p = v(require("../FormComponents/Blocks/NameBlock")),
					c = v(require("../FormComponents/Blocks/AddressBlock")),
					h = v(require("../FormComponents/SubmitButton")),
					g = v(require("../StyledComponents/Spinner")),
					b = v(require("../StyledComponents/FormWrapper"));
				function x(e) {
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
				var y = (function(i) {
					function u() {
						var n, l;
						(0, r.default)(this, u);
						for (var s = arguments.length, i = new Array(s), d = 0; d < s; d++)
							i[d] = arguments[d];
						return (
							((l = (0, o.default)(
								this,
								(n = (0, a.default)(u)).call.apply(n, [this].concat(i))
							)).handleInputChange = function(e) {
								var t = e.target,
									r = "checkbox" === t.type ? t.checked : t.value,
									n = t.name;
								l.context.validateAndUpdateField({
									type: "UPDATE_FIELD",
									name: n,
									value: r,
								});
							}),
							(l.handleSubmit = (function() {
								var r = (0, t.default)(
									e.default.mark(function t(r) {
										return e.default.wrap(function(e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														r.preventDefault(), l.context.submitSignUpForm();
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
							l
						);
					}
					return (
						(0, l.default)(u, i),
						(0, n.default)(u, [
							{
								key: "componentDidMount",
								value: function() {
									var e = {
										Title: "",
										Firstname: "",
										Middlename: "",
										Lastname: "",
										Suffix: "",
										Spousename: "",
										Emailaddress: "",
										phone: "",
										savePersonalInfo: !0,
									};
									this.context.getAddress &&
										((e.Address1 = ""),
										(e.Address2 = ""),
										(e.City = ""),
										(e.State = ""),
										(e.Country = this.props.allowInternational
											? ""
											: "United States"));
									var t = {};
									for (var r in e) t[r] = "";
									this.context.initFields({
										type: "INIT_FORM_STATE",
										fields: e,
										errors: t,
									});
								},
							},
							{
								key: "render",
								value: function() {
									var e = this.props,
										t = e.formTitle,
										r = e.submitButtonText,
										n = e.allowInternational,
										o = e.getAddress,
										a = e.getName,
										l = e.getPhone,
										i = e.getHonorific,
										u = e.getSuffix,
										x = e.getMiddleName,
										v = e.getSpouseInfo,
										y = this.context,
										C = y.errors,
										S = y.fields,
										j = y.initialized,
										F = y.submitting,
										q = y.submitted,
										I =
											Object.values(C).filter(function(e) {
												return e && e.length > 0;
											}).length > 0;
									return q
										? null
										: (0, s.jsx)(
												b.default,
												null,
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
														t
													),
													j
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
																		a &&
																			(0, s.jsx)(p.default, {
																				fields: S,
																				errors: C,
																				getHonorific: i,
																				getMiddleName: x,
																				getSuffix: u,
																				getSpouseInfo: v,
																				handleInputChange: this
																					.handleInputChange,
																				type: "Name",
																			}),
																		(0, s.jsx)(c.default, {
																			fields: S,
																			errors: C,
																			handleInputChange: this.handleInputChange,
																			getPhone: l,
																			getAddress: o,
																			allowInternational: n,
																			type: "Billing",
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
																	(0, s.jsx)(h.default, {
																		hasErrors: I,
																		error: C.amount,
																		handleSubmit: this.handleSubmit,
																		submitting: F,
																		value: r,
																	})
																)
														  )
														: (0, s.jsx)(
																d.default,
																{ className: "form-panel" },
																(0, s.jsx)(g.default, null)
														  )
												)
										  );
								},
							},
						]),
						u
					);
				})(i.Component);
				y.contextType = u.SignUpFormContext;
				var C = y;
				exports.default = C;
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
				"../FormComponents/Blocks/NameBlock": "ZTHW",
				"../FormComponents/Blocks/AddressBlock": "2Sb5",
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
//# sourceMappingURL=/SignUpForm.fc84665a.js.map
