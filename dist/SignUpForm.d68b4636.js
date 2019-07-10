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
	function a(a) {
		return a && a.__esModule ? { d: a.default } : { d: a };
	}
	var b = {};
	require("PMvg"),
		require("agGE"),
		require("0fcM"),
		require("P8NW"),
		require("0421"),
		require("UJE0"),
		require("d4H2"),
		require("haMh"),
		require("1n8/"),
		require("HMVu"),
		require("5N4C"),
		require("T33x"),
		require("7Dc8"),
		require("ZTHW"),
		require("2Sb5"),
		require("0cOc"),
		require("wNTG");
	var c = (function(e) {
		function t() {
			var e, r;
			var $fcM$$interop$default = a(require("0fcM"));
			$fcM$$interop$default.d(this, t);
			for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++)
				n[i] = arguments[i];
			var $_$$interop$default = a(require("0421"));
			var $UJE0$$interop$default = a(require("UJE0"));
			return (
				((r = $_$$interop$default.d(
					this,
					(e = $UJE0$$interop$default.d(t)).call.apply(e, [this].concat(n))
				)).handleInputChange = function(e) {
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
					var $agGE$$interop$default = a(require("agGE"));
					var $PMvg$$interop$default = a(require("PMvg"));
					var e = $agGE$$interop$default.d(
						$PMvg$$interop$default.d.mark(function e(t) {
							return $PMvg$$interop$default.d.wrap(function(e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											t.preventDefault(), r.context.submitSignUpForm();
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
		var $d4H2$$interop$default = a(require("d4H2"));
		var $P8NW$$interop$default = a(require("P8NW"));
		return (
			$d4H2$$interop$default.d(t, e),
			$P8NW$$interop$default.d(t, [
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
							o = e.allowInternational,
							n = e.getAddress,
							i = e.getName,
							$ = e.getPhone,
							a = e.getHonorific,
							l = e.getSuffix,
							m = e.getMiddleName,
							p = e.getSpouseInfo,
							s = this.context,
							u = s.errors,
							c = s.fields,
							d = s.initialized,
							J = s.submitting,
							O = s.submitted,
							Y =
								Object.values(u).filter(function(e) {
									return e && e.length > 0;
								}).length > 0;
						return O
							? null
							: require("haMh").jsx(
									"form",
									{
										id: "react-signup-form",
										autoComplete: "off",
										onSubmit: this.handleSubmit,
									},
									require("haMh").jsx(
										require("7Dc8").default,
										{ className: "form-title form-header" },
										t
									),
									d
										? require("haMh").jsx(
												require("5N4C").default,
												{ className: "form-panel" },
												require("haMh").jsx(
													require("T33x").default,
													null,
													require("haMh").jsx(
														"legend",
														null,
														"Name and Address Block"
													),
													require("haMh").jsx(
														require("5N4C").default,
														{ className: "name-address__info" },
														require("haMh").jsx(require("7Dc8").default, {
															className: "form-header",
														}),
														i &&
															require("haMh").jsx(require("ZTHW").default, {
																fields: c,
																errors: u,
																getHonorific: a,
																getMiddleName: m,
																getSuffix: l,
																getSpouseInfo: p,
																handleInputChange: this.handleInputChange,
																type: "Name",
															}),
														require("haMh").jsx(require("2Sb5").default, {
															fields: c,
															errors: u,
															handleInputChange: this.handleInputChange,
															getPhone: $,
															getAddress: n,
															allowInternational: o,
															type: "Billing",
														})
													)
												),
												require("haMh").jsx(
													require("T33x").default,
													null,
													require("haMh").jsx(
														"legend",
														null,
														"Form Submit Block"
													),
													require("haMh").jsx(require("0cOc").default, {
														hasErrors: Y,
														error: u.amount,
														handleSubmit: this.handleSubmit,
														submitting: J,
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
	(c.contextType = require("HMVu").SignUpFormContext), (b.default = c);
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = b;
	} else if (typeof define === "function" && define.amd) {
		define(function() {
			return b;
		});
	}
	b.__esModule = true;
	return { YOZJ: b };
});
