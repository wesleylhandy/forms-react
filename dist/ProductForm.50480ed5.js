parcelRequire = (function(e) {
	var r = "function" == typeof parcelRequire && parcelRequire,
		n = "function" == typeof require && require,
		i = {};
	function u(e, u) {
		if (e in i) return i[e];
		var t = "function" == typeof parcelRequire && parcelRequire;
		if (!u && t) return t(e, !0);
		if (r) return r(e, !0);
		if (n && "string" == typeof e) return n(e);
		var o = new Error("Cannot find module '" + e + "'");
		throw ((o.code = "MODULE_NOT_FOUND"), o);
	}
	return (
		(u.register = function(e, r) {
			i[e] = r;
		}),
		(i = e(u)),
		(u.modules = i),
		u
	);
})(function(require) {
	function b(a) {
		return a && a.__esModule ? { d: a.default } : { d: a };
	}
	var a = {};
	require("PMvg"),
		require("agGE"),
		require("Fhqp"),
		require("0fcM"),
		require("P8NW"),
		require("0421"),
		require("UJE0"),
		require("d4H2"),
		require("haMh"),
		require("1n8/"),
		require("aq1S"),
		require("5N4C"),
		require("T33x"),
		require("7Dc8"),
		require("jPOl"),
		require("ZTHW"),
		require("30nM"),
		require("2Sb5"),
		require("cd8Z"),
		require("0cOc"),
		require("wNTG");
	var c = (function(e) {
		function t() {
			var e, r;
			var $fcM$$interop$default = b(require("0fcM"));
			$fcM$$interop$default.d(this, t);
			for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++)
				n[i] = arguments[i];
			var $_$$interop$default = b(require("0421"));
			var $UJE0$$interop$default = b(require("UJE0"));
			return (
				((r = $_$$interop$default.d(
					this,
					(e = $UJE0$$interop$default.d(t)).call.apply(e, [this].concat(n))
				)).state = { totalGift: 0 }),
				(r.updateProducts = function(e) {
					var $Fhqp$$interop$default = b(require("Fhqp"));
					var t = e.idx,
						o = e.quantity,
						n = $Fhqp$$interop$default.d(r.state.productInfo),
						i = r.state.productsOrdered,
						a = n.findIndex(function(e) {
							return e.idx === t;
						});
					a > -1 ? (n[a].quantity = o) : n.push({ idx: t, quantity: o }),
						(i = !!n.reduce(function(e, t) {
							return e + t.quantity;
						}, 0));
					var $ = $Fhqp$$interop$default.d(r.state.cart.items),
						l = r.props.products[t],
						p = l.DetailName,
						m = l.DetailCprojCredit,
						s = l.DetailCprojMail,
						u = l.DetailDescription,
						f = l.PledgeAmount,
						d = $.filter(function(e) {
							return e.DetailDescription !== u;
						});
					o &&
						d.push({
							type: "product",
							PledgeAmount: +f * o,
							DetailCprojMail: s,
							DetailCprojCredit: m,
							DetailDescription: u,
							DetailName: p + "|" + o,
						}),
						r.setState({
							productInfo: n,
							productsOrdered: i,
							cart: { items: d },
						});
				}),
				(r.handleInputChange = function(e) {
					var t = e.target,
						o = "checkbox" === t.type ? t.checked : t.value,
						n = t.name;
					r.context.validateAndUpdateField({
						type: "UPDATE_FIELD",
						name: n,
						value: o,
					});
				}),
				(r.handleSubmit = (function() {
					var $agGE$$interop$default = b(require("agGE"));
					var $PMvg$$interop$default = b(require("PMvg"));
					var e = $agGE$$interop$default.d(
						$PMvg$$interop$default.d.mark(function e(t) {
							return $PMvg$$interop$default.d.wrap(function(e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											t.preventDefault(), r.context.submitProductForm();
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
				r
			);
		}
		var $d4H2$$interop$default = b(require("d4H2"));
		var $P8NW$$interop$default = b(require("P8NW"));
		return (
			$d4H2$$interop$default.d(t, e),
			$P8NW$$interop$default.d(t, [
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
								Country: this.props.allowInternational ? "" : "United States",
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
						var $agGE$$interop$default = b(require("agGE"));
						var $PMvg$$interop$default = b(require("PMvg"));
						var e = $agGE$$interop$default.d(
							$PMvg$$interop$default.d.mark(function e() {
								return $PMvg$$interop$default.d.wrap(
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
							r = e.submitButtonText,
							o = e.allowInternational,
							n = e.productFormat,
							i = e.products,
							a = e.additionalGift,
							$ = (e.getAddress, e.getName, e.getPhone),
							l = e.getHonorific,
							p = e.getSuffix,
							m = e.getMiddleName,
							s = e.getSpouseInfo,
							u = e.getShippingAddress,
							f = {
								products: i || [],
								numProducts: i && i.length ? i.length : 0,
								additionalGift: a,
							},
							d = this.context,
							c = d.errors,
							E = d.fields,
							D = d.initialized,
							h = d.submitting,
							_ =
								Object.values(c).filter(function(e) {
									return e && e.length > 0;
								}).length > 0;
						return require("haMh").jsx(
							"form",
							{
								id: "react-giving-form",
								autoComplete: "off",
								onSubmit: this.handleSubmit,
							},
							require("haMh").jsx(
								require("7Dc8").default,
								{ className: "form-title form-header" },
								t
							),
							f.numProducts > 0 &&
								require("haMh").jsx(
									require("5N4C").default,
									{ className: "form-panel" },
									require("haMh").jsx(require("jPOl").default, {
										productFormat: n,
										productOptions: f,
										updateProducts: this.updateProducts,
									})
								),
							D
								? require("haMh").jsx(
										require("5N4C").default,
										{ className: "form-panel" },
										require("haMh").jsx(
											require("T33x").default,
											null,
											require("haMh").jsx(
												"legend",
												null,
												"Name and Billing Address Block"
											),
											require("haMh").jsx(
												require("5N4C").default,
												{ className: "name-address__info" },
												require("haMh").jsx(
													require("7Dc8").default,
													{ className: "form-header" },
													"Please Enter Your Billing Information"
												),
												require("haMh").jsx(require("ZTHW").default, {
													fields: E,
													errors: c,
													getHonorific: l,
													getMiddleName: m,
													getSuffix: p,
													getSpouseInfo: s,
													handleInputChange: this.handleInputChange,
													type: "Name",
												}),
												require("haMh").jsx(require("2Sb5").default, {
													fields: E,
													errors: c,
													handleInputChange: this.handleInputChange,
													getAddress: !0,
													getPhone: $,
													allowInternational: o,
													type: "Billing",
												})
											)
										),
										u &&
											require("haMh").jsx(
												require("T33x").default,
												null,
												require("haMh").jsx(
													"legend",
													null,
													"Shipping Address Block"
												),
												require("haMh").jsx(
													require("5N4C").default,
													{ className: "shipping-address__container" },
													require("haMh").jsx(require("cd8Z").default, {
														id: "ShipToYes",
														checked: E.ShipToYes,
														handleInputChange: this.handleInputChange,
														label:
															"\xA0My shipping address is different than my billing address.",
													}),
													E.ShipToYes &&
														require("haMh").jsx(require("30nM").default, {
															fields: E,
															errors: c,
															handleInputChange: this.handleInputChange,
															allowInternational: o,
														})
												)
											),
										require("haMh").jsx(
											require("T33x").default,
											null,
											require("haMh").jsx(
												"legend",
												null,
												"Save Personal Info Block"
											),
											require("haMh").jsx(require("cd8Z").default, {
												id: "savePersonalInfo",
												checked: E.savePersonalInfo,
												handleInputChange: this.handleInputChange,
												label: "\xA0Remember my name and address next time",
											})
										),
										require("haMh").jsx(
											require("T33x").default,
											null,
											require("haMh").jsx("legend", null, "Form Submit Block"),
											require("haMh").jsx(require("0cOc").default, {
												hasErrors: _,
												error: c.amount,
												handleSubmit: this.handleSubmit,
												submitting: h,
												value: r,
											})
										)
								  )
								: require("haMh").jsx(
										require("5N4C").default,
										{ className: "form-panel" },
										require("haMh").jsx(require("wNTG").default, null)
								  )
						);
					},
				},
			]),
			t
		);
	})(require("1n8/").Component);
	(c.contextType = require("aq1S").ProductFormContext), (a.default = c);
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = a;
	} else if (typeof define === "function" && define.amd) {
		define(function() {
			return a;
		});
	}
	a.__esModule = true;
	return { fD7E: a };
});
