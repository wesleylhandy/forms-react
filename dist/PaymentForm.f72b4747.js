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
	var s = this;
	var e = {};
	require("4vQ7"), require("1n8/");
	var g = require("4vQ7").default("div", {
		target: "ev4wl9t0",
		label: "FormLine",
	})({
		name: "kbd7ew",
		styles:
			"background-color:#333;width:100%;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;height:2px;overflow:visible;margin:20px 0;box-sizing:border-box;",
	});
	require("4vQ7"), require("1n8/");
	var u = require("4vQ7").default("div", {
		target: "ejt2o4l0",
		label: "ProductSummary",
	})({
		name: "orqwb0",
		styles:
			"padding:10px;font-size:15px;font-weight:300;display:flex;flex-direction:row;justify-content:flex-start;flex-wrap:wrap;align-items:center;div.flex-row{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:10px;flex:1 1 100%;}",
	});
	require("4vQ7"), require("1n8/");
	var v = require("4vQ7").default("div", {
		target: "e12ppbhn0",
		label: "RadioButton",
	})({
		name: "wunpgh",
		styles:
			'display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:5px;height:calc(19px * 2);line-height:calc(19px * 2);input[type="radio"]{box-sizing:border-box;position:absolute;opacity:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";}input[type="radio"] + label.Visa,input[type="radio"] + label.MasterCard,input[type="radio"] + label.AmericanExpress,input[type="radio"] + label.Discover{box-sizing:border-box;font-size:40px;font-weight:600;display:flex;align-items:center;padding:5px;}input[type="radio"] + label.Visa{color:#172274;}input[type="radio"] + label.MasterCard{color:#ea001b;}input[type="radio"] + label.AmericanExpress{color:#2e78bf;}input[type="radio"] + label.Discover{color:#f58220;}input[type="radio"]:checked + label{background-color:#eee;box-sizing:border-box;box-shadow:0 0 4px #000;border-radius:4px;}input[type="radio"]:focus + label,input[type="radio"]:hover + label{background-color:#f4f4f4;box-sizing:border-box;box-shadow:0 0 4px #777;border-radius:4px;}input[type="radio"]:disabled + label{box-shadow:0 0 4px #000;border-radius:4px;border-color:#bfbfbf;background:#bfbfbf;box-sizing:border-box;}',
	});
	function w(o) {
		var n = document.documentElement.scrollHeight,
			e = window.innerHeight,
			i = 40,
			r = window.scrollY ? window.scrollY : window.pageYOffset,
			t = o >= r;
		(o = t ? (o > n - e ? n - e : o) : n <= e ? 0 : o),
			window.requestAnimationFrame(function n(e) {
				var r = window.scrollY ? window.scrollY : window.pageYOffset;
				if (t) {
					if (r >= o) return window.cancelAnimationFrame(e);
					r += i;
				} else {
					if (r <= o) return window.cancelAnimationFrame(e);
					r -= i;
				}
				window.scroll(0, r);
				window.requestAnimationFrame(n);
			});
	}
	function x(o) {
		var n = o.getBoundingClientRect(),
			e = window.scrollY ? window.scrollY : window.pageYOffset;
		return n.top + e;
	}
	var l = {},
		h = require("pBGv");
	(function() {
		var e, r, n, $, o, t;
		"undefined" != typeof performance && null !== performance && performance.now
			? (l = function() {
					return performance.now();
			  })
			: null != h && h.hrtime
			? ((l = function() {
					return (e() - o) / 1e6;
			  }),
			  (r = h.hrtime),
			  ($ = (e = function() {
					var e;
					return 1e9 * (e = r())[0] + e[1];
			  })()),
			  (t = 1e9 * h.uptime()),
			  (o = $ - t))
			: Date.now
			? ((l = function() {
					return Date.now() - n;
			  }),
			  (n = Date.now()))
			: ((l = function() {
					return new Date().getTime() - n;
			  }),
			  (n = new Date().getTime()));
	}.call(l));
	for (
		var m = {},
			a = "undefined" == typeof window ? s : window,
			i = ["moz", "webkit"],
			d = "AnimationFrame",
			j = a["request" + d],
			k = a["cancel" + d] || a["cancelRequest" + d],
			f = 0;
		!j && f < i.length;
		f++
	)
		(j = a[i[f] + "Request" + d]),
			(k = a[i[f] + "Cancel" + d] || a[i[f] + "CancelRequest" + d]);
	if (!j || !k) {
		var n = 0,
			p = 0,
			c = [],
			t = 1e3 / 60;
		(j = function($) {
			if (0 === c.length) {
				var o = l(),
					a = Math.max(0, t - (o - n));
				(n = a + o),
					setTimeout(function() {
						var $ = c.slice(0);
						c.length = 0;
						for (var o = 0; o < $.length; o++)
							if (!$[o].cancelled)
								try {
									$[o].callback(n);
								} catch (a) {
									setTimeout(function() {
										throw a;
									}, 0);
								}
					}, Math.round(a));
			}
			return c.push({ handle: ++p, callback: $, cancelled: !1 }), p;
		}),
			(k = function($) {
				for (var o = 0; o < c.length; o++)
					c[o].handle === $ && (c[o].cancelled = !0);
			});
	}
	((m = function($) {
		return j.call(a, $);
	}).cancel = function() {
		k.apply(a, arguments);
	}),
		(m.polyfill = function($) {
			$ || ($ = a), ($.requestAnimationFrame = j), ($.cancelAnimationFrame = k);
		});
	m.polyfill();
	require("fwAU"),
		require("Fhqp"),
		require("0fcM"),
		require("P8NW"),
		require("0421"),
		require("UJE0"),
		require("d4H2"),
		require("haMh"),
		require("1n8/"),
		require("zetz"),
		require("T33x"),
		require("01J/"),
		require("5N4C"),
		require("7Dc8"),
		require("13Ji"),
		require("2E4w"),
		require("bPpP"),
		require("0cOc"),
		require("dDLv"),
		require("inF2"),
		require("fZQg");
	var o = new Date(),
		y = "0" + (o.getMonth() + 1),
		q = o.getFullYear(),
		r = (function(e) {
			function t() {
				var e, r;
				var $fcM$$interop$default = b(require("0fcM"));
				$fcM$$interop$default.d(this, t);
				for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++)
					n[i] = arguments[i];
				var $_$$interop$default = b(require("0421"));
				var $UJE0$$interop$default = b(require("UJE0"));
				var $n8$$interop$default = b(require("1n8/"));
				return (
					((r = $_$$interop$default.d(
						this,
						(e = $UJE0$$interop$default.d(t)).call.apply(e, [this].concat(n))
					)).formRef = $n8$$interop$default.d.createRef()),
					(r.state = {
						fields: {
							ExpiresMonth: y.slice(-2),
							ExpiresYear: q,
							ccNumber: "",
							cvnCode: "",
						},
						errors: {
							ExpiresMonth: null,
							ExpiresYear: null,
							ccNumber: null,
							cvnCode: null,
						},
						ccChecked: null,
						submitting: !1,
					}),
					(r.handleMessage = function(e) {
						var t =
								e.data && "string" == typeof e.data ? JSON.parse(e.data) : {},
							o = t.type,
							n = t.tracking_vars;
						if (["form error", "render receipt"].includes(o)) {
							var i = e.origin;
							if (r.context.msgUris.includes(i))
								switch (o) {
									case "render receipt":
										r.setState({ submitting: !1 }),
											r.context.setConfirmed({
												type: "CONFIRMED",
												trackingVars: n,
											});
										break;
									case "form error":
										var $Fhqp$$interop$default = b(require("Fhqp"));
										var a = $Fhqp$$interop$default.d(r.state.errors);
										(a.ccNumber =
											"Please verify your Payment Information and Try Again"),
											r.setState({ submitting: !1, errors: a });
								}
						}
					}),
					(r.getCardType = function(e) {
						var t, r, o;
						switch (e) {
							case "001":
								(r = t = "Visa"),
									(o = function() {
										return require("haMh").jsx(require("inF2").FaCcVisa, null);
									});
								break;
							case "002":
								(r = t = "MasterCard"),
									(o = function() {
										return require("haMh").jsx(
											require("inF2").FaCcMastercard,
											null
										);
									});
								break;
							case "003":
								(t = "AmericanExpress"),
									(r = "American Express"),
									(o = function() {
										return require("haMh").jsx(require("inF2").FaCcAmex, null);
									});
								break;
							case "004":
								(r = t = "Discover"),
									(o = function() {
										return require("haMh").jsx(
											require("inF2").FaCcDiscover,
											null
										);
									});
						}
						return { cardType: t, visible: r, Icon: o };
					}),
					(r.getMainURL = function() {
						var e = "",
							t = document.querySelector("input[name='mainURL']").value;
						return (
							"" != t &&
								"undefined" != t &&
								(e = t.indexOf("?") > 0 ? t + "&error=gen" : t + "?error=gen"),
							e
						);
					}),
					(r.renderCCInput = function(e, t) {
						e = "00" + e;
						var o = r.getCardType(e),
							n = o.cardType,
							i = o.visible,
							a = o.Icon;
						return require("haMh").jsx(
							v,
							{
								key: "cc-btn-".concat(e),
								id: "".concat(n, "-group"),
								className: "radio-group",
							},
							require("haMh").jsx("input", {
								name: "creditcardoption",
								id: e,
								type: "radio",
								checked: e == t,
								onChange: r.handleRadioClick,
								hidden: !0,
							}),
							require("haMh").jsx(
								"label",
								{ htmlFor: e, "aria-label": i, className: n },
								require("haMh").jsx(a, null)
							)
						);
					}),
					(r.renderCardInputs = function(e) {
						var t = [1, 2, 3, 4].map(function(t) {
							return r.renderCCInput(t, e);
						});
						return require("haMh").jsx(
							require("01J/").default,
							{ className: "cc-type-container" },
							t
						);
					}),
					(r.renderProductSummary = function() {
						var $Fhqp$$interop$default = b(require("Fhqp"));
						var e,
							t = $Fhqp$$interop$default.d(r.context.cart.items),
							o = t.findIndex(function(e) {
								return e && "donation" == e.type;
							}),
							n = o > -1 && t[o].monthly,
							i = n ? r.context.fields.Monthlypledgeday : 2;
						switch (i) {
							case 2:
								e = "2nd";
								break;
							case 3:
								e = "3rd";
								break;
							case 21:
								e = "21st";
								break;
							default:
								e = i + "th";
						}
						var a = {},
							$ = t.reduce(function(e, t, r) {
								var n = t.DetailName,
									i = t.DetailDescription,
									$ = t.PledgeAmount;
								if (r !== o) {
									var m = 1,
										l = n.split("|");
									return (
										l.length > 1 && (m = l[1]),
										e.push({
											quantity: m,
											DetailDescription: i,
											PledgeAmount: $,
										}),
										e
									);
								}
								(a.Description = i), (a.PledgeAmount = $);
							}, []);
						return require("haMh").jsx(
							u,
							null,
							a &&
								require("haMh").jsx(
									require("1n8/").Fragment,
									null,
									require("haMh").jsx(
										"div",
										{ className: "flex-row" },
										require("haMh").jsx("div", null, a.Description),
										require("haMh").jsx("div", null, "$", a.PledgeAmount)
									),
									n &&
										require("haMh").jsx(
											"div",
											{ className: "flex-row" },
											"Your card will be charged automatically every month on the",
											" ",
											e,
											" of each month."
										)
								),
							$ &&
								$.map(function(e, t) {
									require("haMh").jsx(
										"div",
										{ className: "flex-row", key: "summary-item-".concat(t) },
										require("haMh").jsx(
											"div",
											null,
											e.Description,
											" (",
											e.quantity,
											")"
										),
										require("haMh").jsx(
											"div",
											null,
											"$",
											donationa.PledgeAmount
										)
									);
								})
						);
					}),
					(r.assignValues = function(e) {
						e.preventDefault(),
							r.state.submitting ||
								r.setState({ submitting: !0 }, function() {
									var e = r.getMainURL();
									("" != e && "undefined" != e) || (e = "https://www.cbn.com");
									var t = setTimeout(function() {
											return (window.location.href = e), !1;
										}, 15e3),
										o = r.state.fields,
										n = o.ccNumber,
										i = o.ExpiresYear,
										a = o.ExpiresMonth,
										$ = o.cvnCode,
										m = r.state.ccChecked,
										l = require("fZQg").checkValues(m, n, a, i, $);
									if (l.passes) {
										var c = l.ccCardType,
											p = l.ccNum,
											u = l.ccExpDate,
											s = l.transactionType,
											f = l.ccCvn;
										(document.querySelector(
											'input[name="card_type"]'
										).value = c),
											(document.querySelector(
												'input[name="card_number"]'
											).value = p),
											(document.querySelector(
												'input[name="card_expiry_date"]'
											).value = u),
											(document.querySelector(
												'input[name="card_cvn"]'
											).value = f),
											l.transactionType &&
												((document.querySelector(
													'input[name="transaction_type"]'
												).value = s),
												(document.querySelector(
													'input[name="signature"]'
												).value = document.querySelector(
													'input[name="signatureDis"]'
												).value)),
											clearTimeout(t);
										return (
											r.context.saveLS(12e4, "store"),
											(document.forms.hiddenform.submit.type = "submit"),
											document.forms.hiddenform.submit.click()
										);
									}
									var E = l.errors,
										d = r.state.errors;
									return (
										E.forEach(function(e) {
											return (d[e.type] = e.error);
										}),
										r.setState({ errors: d, submitting: !1 }),
										clearTimeout(t)
									);
								});
					}),
					(r.handleRadioClick = function(e) {
						r.setState({ ccChecked: e.target.id });
					}),
					(r.handleInputChange = function(e) {
						var $fwAU$$interop$default = b(require("fwAU"));
						var t = e.target,
							o = "checkbox" === t.type ? t.checked : t.value,
							n = t.name,
							i = $fwAU$$interop$default.d({}, r.state.errors),
							a = require("fZQg").validateInput(n, o);
						i[n] = a.error;
						var $ = $fwAU$$interop$default.d({}, r.state.fields);
						$[n] = o;
						var m = r.state.ccChecked;
						a.ccChecked && (m = a.ccChecked),
							r.setState({ fields: $, errors: i, ccChecked: m });
					}),
					(r.handleGoBackClick = function(e) {
						e.preventDefault(), r.context.goBack({ type: "GO_BACK" });
					}),
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
							this.context.saveLS(6e4, "store"),
								window.addEventListener("message", this.handleMessage, !1);
							try {
								this.context.getGlobals();
							} catch (e) {
								console.error({ err: e });
							}
						},
					},
					{
						key: "getSnapshotBeforeUpdate",
						value: function() {
							var e = this.formRef.current,
								t = this.context,
								r = t.submitted,
								o = t.confirmed;
							return !(e || !r || o) || null;
						},
					},
					{
						key: "componentDidUpdate",
						value: function(e, t, r) {
							if (r) {
								var o = this.formRef.current,
									n = x(o);
								w(n);
							}
						},
					},
					{
						key: "componentWillUnmount",
						value: function() {
							window.removeEventListener("message", this.handleMessage);
						},
					},
					{
						key: "render",
						value: function() {
							var e = this.context,
								t = e.submitted,
								r = e.confirmationData,
								o = e.formAction,
								n = e.confirmed,
								i = this.state,
								a = i.fields,
								$ = i.errors,
								m = i.submitting,
								l = i.ccChecked,
								c = [],
								p = [],
								u = [],
								s = [];
							r.forEach(function(e, t) {
								e.name.includes("ucConfirmBody")
									? ((name = e.name.split("$")[1]),
									  p.push(
											require("haMh").jsx("input", {
												key: "datum".concat(t),
												id: name,
												name: name,
												defaultValue: e.value ? e.value : "",
												type: "hidden",
											})
									  ))
									: c.push(
											require("haMh").jsx("input", {
												key: "datum".concat(t),
												id: e.name,
												name: e.name,
												defaultValue: e.value ? e.value : "",
												type: "hidden",
											})
									  );
							}),
								u.push(
									require("haMh").jsx(
										"option",
										{ key: "exp-year-base-0", value: "", disabled: "disabled" },
										"Year* \u25BF"
									)
								);
							for (var f = q; f < q + 25; f++)
								u.push(
									require("haMh").jsx(
										"option",
										{ key: "year-option-" + f, value: f },
										f
									)
								);
							s.push(
								require("haMh").jsx(
									"option",
									{ key: "exp-month-base-0", value: "", disabled: "disabled" },
									"Month* \u25BF"
								)
							);
							for (var E = 1; E < 13; E++) {
								var d = ("0" + E).slice(-2);
								s.push(
									require("haMh").jsx(
										"option",
										{ key: "month-option-" + d, value: d },
										d
									)
								);
							}
							var J =
								Object.values($).filter(function(e) {
									return e && e.length > 0;
								}).length > 0;
							return t && !n
								? require("haMh").jsx(
										require("dDLv").default,
										{ style: { maxWidth: "818px", margin: "0 auto" } },
										require("haMh").jsx(
											require("5N4C").default,
											{ ref: this.formRef },
											require("haMh").jsx(
												"form",
												{ id: "react-cc-form", onSubmit: this.assignValues },
												require("haMh").jsx(
													"div",
													{ className: "mboxDefault" },
													require("haMh").jsx(
														require("7Dc8").default,
														{ className: "form-header__payment" },
														"Almost Done!"
													),
													require("haMh").jsx(g, null),
													require("haMh").jsx(
														require("7Dc8").default,
														{ className: "form-header--small" },
														"Enter Payment Information and click ",
														require("haMh").jsx("br", null),
														'"',
														require("haMh").jsx(
															"strong",
															null,
															"Finish Donation"
														),
														'" below.'
													)
												),
												require("haMh").jsx(
													require("01J/").default,
													null,
													require("haMh").jsx(g, null)
												),
												require("haMh").jsx(
													require("T33x").default,
													null,
													require("haMh").jsx(
														"legend",
														null,
														"Credit Card Information"
													),
													require("haMh").jsx(
														"div",
														{ className: "form-subheader" },
														"Card Type*"
													),
													require("haMh").jsx(
														require("T33x").default,
														null,
														require("haMh").jsx(
															"legend",
															null,
															"Select Credit Card Type"
														),
														this.renderCardInputs(l)
													),
													require("haMh").jsx(
														require("01J/").default,
														null,
														require("haMh").jsx(g, null)
													),
													require("haMh").jsx(
														"div",
														{ className: "form-subheader" },
														"Card Info*"
													),
													require("haMh").jsx(
														require("01J/").default,
														{ className: "cc-num-row" },
														require("haMh").jsx(require("2E4w").default, {
															specialStyle: "form-group--ccNumber",
															type: "text",
															id: "ccNumber",
															label: "Number",
															required: !0,
															maxLength: 16,
															placeholder: "#### #### #### #### ####",
															value: a.ccNumber,
															handleInputChange: this.handleInputChange,
															error: $.ccNumber,
															validation: "\\d*",
														})
													),
													require("haMh").jsx(
														require("01J/").default,
														{ className: "cc-exp-row" },
														require("haMh").jsx(require("bPpP").default, {
															id: "ExpiresMonth",
															specialStyle: "form-group--expMonth",
															label: "Month",
															required: !0,
															value: a.ExpiresMonth,
															error: $.ExpiresMonth,
															options: s,
															handleInputChange: this.handleInputChange,
														}),
														require("haMh").jsx(require("bPpP").default, {
															id: "ExpiresYear",
															specialStyle: "form-group--expYear",
															label: "Year",
															required: !0,
															value: a.ExpiresYear,
															error: $.ExpiresYear,
															options: u,
															handleInputChange: this.handleInputChange,
														})
													),
													require("haMh").jsx(
														require("01J/").default,
														{ className: "cc-cvn-row" },
														require("haMh").jsx(require("2E4w").default, {
															specialStyle: "form-group--cvnCode",
															type: "text",
															id: "cvnCode",
															label: "CVV Code",
															required: !0,
															maxLength: 4,
															placeholder: "cvv",
															value: a.cvnCode,
															handleInputChange: this.handleInputChange,
															error: $.cvnCode,
															validation: "\\d*",
														}),
														require("haMh").jsx(
															"div",
															{ className: "cvn-code-info" },
															require("haMh").jsx(
																"a",
																{
																	href:
																		"https://www.cbn.com/CVVNumber/CVV.html",
																	target: "_blank",
																},
																"What is my ",
																require("haMh").jsx(
																	"span",
																	{ style: { letterSpacing: "1px" } },
																	"CVV"
																),
																" ",
																"Code?"
															)
														)
													)
												),
												require("haMh").jsx(
													require("01J/").default,
													null,
													require("haMh").jsx(g, null)
												),
												this.renderProductSummary(),
												require("haMh").jsx(
													require("01J/").default,
													null,
													require("haMh").jsx(g, null)
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
														hasErrors: J,
														handleSubmit: this.assignValues,
														submitting: m,
														value: "Finish Donation",
													})
												),
												require("haMh").jsx(
													require("01J/").default,
													{ className: "go-back-row" },
													require("haMh").jsx(
														"span",
														null,
														"Click the \u201CFinish Donation\u201D button above or"
													),
													require("haMh").jsx(
														"span",
														null,
														require("haMh").jsx(
															"a",
															{ onClick: this.handleGoBackClick },
															"go back"
														),
														" to the previous page to make changes."
													)
												)
											),
											require("haMh").jsx(
												require("13Ji").default,
												{
													id: "hiddenform",
													className: "hidden-form",
													action: o,
													method: "POST",
													target: "paymentprocess",
												},
												c
											),
											p,
											require("haMh").jsx("iframe", {
												className: "hidden",
												name: "paymentprocess",
												width: "0",
												height: "0",
												style: { visibility: "none", border: "none" },
											})
										)
								  )
								: null;
						},
					},
				]),
				t
			);
		})(require("1n8/").Component);
	(r.contextType = require("zetz").GivingFormContext), (e.default = r);
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = e;
	} else if (typeof define === "function" && define.amd) {
		define(function() {
			return e;
		});
	}
	e.__esModule = true;
	return { EJqf: e };
});
