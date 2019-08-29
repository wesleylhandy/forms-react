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
	function v(t, e) {
		return t.findIndex(function(t) {
			return +t == +e;
		});
	}
	function w(o) {
		var e = o.monthlyChecked,
			t = o.Monthlypledgeday,
			$ = o.handleRadioClick,
			r = e,
			i = !e;
		return require("haMh").jsx(
			require("T33x").default,
			{ className: "monthly-giving-info" },
			require("haMh").jsx("legend", null, "Select Monthly or One-Time Gift"),
			require("haMh").jsx(
				require("7Dc8").default,
				null,
				"How Often Do You Want to Give This Amount?"
			),
			require("haMh").jsx(
				require("01J/").default,
				{ className: "monthly-radio" },
				require("haMh").jsx(c, {
					id: "monthly",
					name: "monthly-toggle",
					label: "Monthly Gift",
					checked: r,
					handleRadioClick: $,
				}),
				require("haMh").jsx(c, {
					id: "single",
					name: "monthly-toggle",
					label: "Single Gift",
					checked: i,
					handleRadioClick: $,
				})
			),
			e && require("haMh").jsx(g, { Monthlypledgeday: t })
		);
	}
	require("4vQ7"), require("1n8/");
	var f = require("4vQ7").default("div", {
		target: "e19kc6t50",
		label: "RadioButton",
	})({
		name: "nyr9x",
		styles:
			'display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 5px;height:calc(19px * 2);line-height:calc(19px * 2);input[type="radio"]{box-sizing:border-box;position:absolute;opacity:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";}input[type="radio"] + label{box-sizing:border-box;font-size:calc(19px * 0.7);font-weight:600;}input[type="radio"] + label.Visa,input[type="radio"] + label.MasterCard,input[type="radio"] + label.AmericanExpress,input[type="radio"] + label.Discover{box-sizing:border-box;font-size:40px;font-weight:600;display:flex;align-items:center;}input[type="radio"] + label.Visa{color:#172274;}input[type="radio"] + label.MasterCard{color:#ea001b;}input[type="radio"] + label.AmericanExpress{color:#2e78bf;}input[type="radio"] + label.Discover{color:#f58220;}input[type="radio"] + label:before{content:"";background:#ffffff;box-sizing:border-box;border-radius:100%;border:1px solid #d8dde6;display:inline-block;width:calc(19px * 1.1);height:calc(19px * 1.1);position:relative;margin-right:calc(19px * 0.8);vertical-align:middle;cursor:pointer;text-align:center;transition:all 200ms ease;}input[type="radio"]:checked + label:before{background-color:#333;box-sizing:border-box;box-shadow:inset 0 0 0 4px #ffffff;}input[type="radio"]:focus + label:before,input[type="radio"]:hover + label:before{outline:none;border-color:#333;box-sizing:border-box;}input[type="radio"]:disabled + label:before{box-shadow:inset 0 0 0 4px #ffffff;border-color:#bfbfbf;background:#bfbfbf;box-sizing:border-box;}input[type="radio"] + label:empty:before{margin-right:0;box-sizing:border-box;}',
	});
	require("haMh"), require("1n8/");
	var c = function(e) {
		var o = e.id,
			t = e.name,
			r = e.checked,
			$ = e.handleRadioClick,
			a = e.label;
		return require("haMh").jsx(
			f,
			{ id: "".concat(o, "-group"), className: "radio-group" },
			require("haMh").jsx("input", {
				name: t,
				id: "".concat(o, "gift"),
				type: "radio",
				checked: r,
				onChange: $,
			}),
			require("haMh").jsx("label", { htmlFor: "".concat(o, "gift") }, a)
		);
	};
	function g(e) {
		for (
			var o = e.Monthlypledgeday,
				t = require("1n8/").useContext(require("zetz").GivingFormContext)
					.updateField,
				a = [],
				$ = 2;
			$ <= 28;
			$++
		)
			a.push(
				require("haMh").jsx("option", { key: "date-option-" + $, value: $ }, $)
			);
		return require("haMh").jsx(
			require("01J/").default,
			{ className: "monthly-giving-day" },
			require("haMh").jsx(
				"h5",
				{ className: "cc-day-of-month" },
				"Charge automatically on day\xA0",
				require("haMh").jsx(
					"label",
					{ htmlFor: "Monthlypledgeday" },
					"Select Date"
				),
				require("haMh").jsx(
					"select",
					{
						className: "cc-date",
						name: "Monthlypledgeday",
						onChange: function(e) {
							var o = e.target,
								a = "checkbox" === o.type ? o.checked : o.value,
								$ = o.name;
							t({ type: "UPDATE_FIELD", name: $, value: a });
						},
						value: o,
					},
					a
				),
				"\xA0each month."
			)
		);
	}
	require("haMh"), require("1n8/"), require("zetz"), require("01J/");
	require("haMh"),
		require("1n8/"),
		require("T33x"),
		require("7Dc8"),
		require("01J/");
	function x(e) {
		var o = e.monthlyChecked,
			$ = e.handleTabClick,
			t = o,
			r = !o;
		return require("haMh").jsx(
			require("T33x").default,
			{ className: "monthly-giving-info" },
			require("haMh").jsx("legend", null, "Select Monthly or One-Time Gift"),
			require("haMh").jsx(
				require("01J/").default,
				{ className: "monthly-tab" },
				require("haMh").jsx(d, {
					id: "monthly",
					name: "monthly-toggle",
					label: "give monthly",
					checked: t,
					handleTabClick: $,
				}),
				require("haMh").jsx(require("4XSi").default, { color: "transparent" }),
				require("haMh").jsx(d, {
					id: "single",
					name: "monthly-toggle",
					label: "one time gift",
					checked: r,
					handleTabClick: $,
				})
			)
		);
	}
	function d(e) {
		var o = e.id,
			t = e.name,
			r = e.checked,
			$ = e.handleTabClick,
			a = e.label;
		return require("haMh").jsx(
			h,
			{ id: "".concat(o, "-group"), className: "tab-group" },
			require("haMh").jsx("input", {
				className: "tab-group__input",
				name: t,
				id: "".concat(o, "gift"),
				type: "checkbox",
				checked: r,
				onChange: $,
			}),
			require("haMh").jsx("label", { htmlFor: "".concat(o, "gift") }, a)
		);
	}
	require("4vQ7"), require("1n8/");
	var h = require("4vQ7").default("div", {
		target: "ea7p2am0",
		label: "TabGroup",
	})({
		name: "11ci7l4",
		styles:
			'&.tab-group{box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;height:80px;line-height:80px;flex:1 1 auto;}input[type="checkbox"].tab-group__input{position:absolute !important;left:-10000px !important;top:auto !important;bottom:auto !important;width:1px !important;height:1px !important;overflow:hidden !important;}input[type="checkbox"].tab-group__input + label{display:block;height:80px;line-height:80px !important;cursor:pointer;width:100%;text-align:center;background:#fff;border-radius:4px;border:2px solid #333;margin-bottom:0;color:#333;transition:color 200ms ease-in-out,background-color 200ms ease-in-out,border-color 200ms ease-in-out;}input[type="checkbox"].tab-group__input:checked + label,input[type="checkbox"].tab-group__input + label:hover{color:#fff;background-color:#333;border-color:#999;}',
	});
	require("haMh"), require("1n8/");
	require("haMh"),
		require("1n8/"),
		require("4XSi"),
		require("T33x"),
		require("01J/");
	require("4vQ7"), require("1n8/");
	var j = require("4vQ7").default("div", {
		target: "e1cww0v0",
		label: "AskArray",
	})({
		name: "fsqlrb",
		styles:
			"display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;&.askarray{position:relative;box-sizing:border-box;height:auto;width:100%;max-width:400px;margin:20px auto;margin-bottom:0;}&.askarray__tabs{position:relative;box-sizing:border-box;height:auto;width:calc(100% + 5px);margin:-2.5px;border-bottom:5px solid transparent;}",
	});
	require("4vQ7"), require("1n8/");
	var i = require("4vQ7").default("div", {
		target: "e27bfrr0",
		label: "AskArrayBtn",
	})({
		name: "woj21p",
		styles:
			"display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;&.askbutton{box-sizing:border-box;height:65px;width:calc(100% / 3);}&.askbutton__tabs{height:80px;box-sizing:border-box;flex:1;flex-basis:calc((100% / 3) - 10px);margin:2.5px;}div{display:flex;flex-direction:row;justify-content:center;align-items:center;}div.askbutton__amt{flex:0 0 auto;background-color:#fff;border-radius:4px;border:2px solid #333;box-sizing:border-box;color:#333;cursor:pointer;-webkit-flex-basis:calc(19px * 4.55);-ms-flex-preferred-size:calc(19px * 4.55);flex-basis:calc(19px * 4.55);font-weight:600;font-size:calc(19px * 1.4);height:calc(19px * 2.5);text-align:center;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;}div.askbutton__amt--tabs{background-color:#fff;border:1px solid #333;border-radius:4px;box-sizing:border-box;color:#333;cursor:pointer;width:100%;font-weight:600;font-size:calc(19px * 1.4);height:80px;text-align:center;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;}&:focus div,&:hover div,&:active div,div:hover,div:focus,div:active,&.selected div{background-color:#333;color:#fff;border-color:#999;}div.club-level{position:absolute;font-weight:bold;color:#ddb007;text-align:center;width:100%;margin-top:8px;}",
	});
	require("4vQ7"), require("1n8/");
	var k = require("4vQ7").default("div", {
		target: "e5csuv30",
		label: "OtherGiftAmountGroup",
	})({
		name: "r66wb5",
		styles:
			"display:flex;flex-direction:row;justify-content:center;line-height:unset;&.askarray--other{position:relative;box-sizing:border-box;height:80px;width:100%;max-width:400px;margin:20px auto;margin-top:0;}div{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;height:80px;line-height:unset;margin-bottom:0;position:relative;white-space:nowrap;width:100%;label{font-size:calc(19px * 0.7);font-weight:600;color:#333;box-sizing:border-box;position:absolute;left:50%;top:calc(100% - (19px * 0.5));transform:translateX(-50%);}}div.askarray__form-group--other{justify-content:center;max-width:400px;input{position:relative;appearance:none;background:none;background-color:#f0f0f0;height:calc(19px * 2.5);width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:2px solid #333;border-radius:4px;box-sizing:border-box;color:#333;font-size:calc(19px * 1.4);text-align:center;font-weight:600;max-width:220px;white-space:nowrap;}input:hover,input:active,input:focus{border:2px solid #333;background-color:#fff;box-sizing:border-box;outline:none;}div.other-amt-error{box-sizing:border-box;position:absolute;color:crimson;width:auto;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:auto;top:19px;left:50%;transform:translateX(-50%);}}div.askarray__form-group--tabs{justify-content:space-between;label{position:relative;left:auto !important;top:auto !important;transform:none !important;font-size:19px;color:#333;line-height:80px !important;margin-bottom:0;}div.askarray__form-group-tabs-flex-container{display:flex;position:relative;flex-direction:row;justify-content:center;align-items:center;div.form-group-tabs--dollar{box-sizing:border-box;color:#333;margin:0 5px;font-weight:600;font-size:19px;}input{position:relative;appearance:none;height:calc(19px * 2.5);width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:1px solid #333;border-radius:4px;box-sizing:border-box;color:#333;font-size:calc(19px * 1.4);text-align:center;font-weight:600;max-width:220px;white-space:nowrap;}input:hover,input:active,input:focus{border:1px solid #333;background-color:#fff;box-sizing:border-box;outline:none;}div.other-amt-error{box-sizing:border-box;position:absolute;color:crimson;width:auto;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:auto;top:100%;left:50%;transform:translateX(-50%);}}@media screen and (max-width:450px){label{font-size:15px;}div input{max-width:160px;}}}div.selected{}",
	});
	require("Fhqp"),
		require("0fcM"),
		require("P8NW"),
		require("0421"),
		require("UJE0"),
		require("E7HD"),
		require("d4H2"),
		require("haMh"),
		require("1n8/"),
		require("zetz"),
		require("4XSi"),
		require("T33x"),
		require("7Dc8"),
		require("PA8K");
	var q = (function(t) {
		function e(t) {
			var r;
			var $fcM$$interop$default = b(require("0fcM"));
			var $_$$interop$default = b(require("0421"));
			var $UJE0$$interop$default = b(require("UJE0"));
			var $n8$$interop$default = b(require("1n8/"));
			var $E7HD$$interop$default = b(require("E7HD"));
			return (
				$fcM$$interop$default.d(this, e),
				((r = $_$$interop$default.d(
					this,
					$UJE0$$interop$default.d(e).call(this, t)
				)).otherAmountField = $n8$$interop$default.d.createRef()),
				(r.state = {
					prevIndex: null,
					selectedIndex: null,
					otherAmount: 0,
					otherAmountError: "",
				}),
				(r.renderArray = r.renderArray.bind($E7HD$$interop$default.d(r))),
				(r.addToCart = r.addToCart.bind($E7HD$$interop$default.d(r))),
				(r.handleOtherAmt = r.handleOtherAmt.bind($E7HD$$interop$default.d(r))),
				(r.handleFocus = r.handleFocus.bind($E7HD$$interop$default.d(r))),
				r
			);
		}
		var $d4H2$$interop$default = b(require("d4H2"));
		var $P8NW$$interop$default = b(require("P8NW"));
		return (
			$d4H2$$interop$default.d(e, t),
			$P8NW$$interop$default.d(e, [
				{
					key: "componentDidMount",
					value: function() {
						var t = 0,
							e = [],
							r = this.props,
							o = r.defaultAmount,
							n = r.defaultOption,
							i = r.givingOptions,
							a = i.monthlyAmounts,
							m = i.singleAmounts,
							l = i.monthlyOption,
							$ = this.context,
							s = $.initialized,
							u = $.cart;
						if (s) {
							var $Fhqp$$interop$default = b(require("Fhqp"));
							var p = $Fhqp$$interop$default.d(u.items),
								d = p.findIndex(function(t) {
									return t && "donation" == t.type;
								}),
								h = d > -1 && p[d].monthly;
							(t = p[d].PledgeAmount), (e = h ? a : m);
						} else
							(e = "" !== n ? ("monthly" == n ? a : m) : l ? a : m), (t = o);
						if (t > 0 && e.length) {
							var f = v(e, t),
								c = f >= 0 ? f : 99;
							c >= 0 && this.addToCart(t, c);
						}
					},
				},
				{
					key: "renderArray",
					value: function(t, e, r) {
						var o = this;
						return t.map(function(t, n) {
							return require("haMh").jsx(
								i,
								{
									key: "array".concat(n),
									className: "askbutton"
										.concat("tabs" == r ? "__tabs" : "", " ")
										.concat(e == n ? "selected" : ""),
									onClick: function() {
										return o.addToCart(t, n);
									},
								},
								require("haMh").jsx(
									"div",
									{
										className: "askbutton__amt".concat(
											"tabs" == r ? "--tabs" : ""
										),
									},
									"$",
									t
								)
							);
						});
					},
				},
				{
					key: "addToCart",
					value: function(t, e) {
						var r = this,
							o = this.state,
							n = o.otherAmountError,
							i = o.selectedIndex;
						this.setState(
							{
								otherAmount: 99 == e ? t : 0,
								selectedIndex: e,
								otherAmountError: 99 !== e ? "" : n,
								prevIndex: i,
							},
							function() {
								if (t) {
									var e = r.props,
										o = e.monthlyChecked,
										n = e.givingOptions,
										i = n.monthlyPledgeData,
										a = n.singlePledgeData;
									r.context.addToCart({
										type: "ADD_TO_CART",
										item: {
											type: "donation",
											PledgeAmount: t,
											DetailCprojMail: o
												? i.DetailCprojMail
												: a.DetailCprojMail,
											DetailCprojCredit: o
												? i.DetailCprojCredit
												: a.DetailCprojCredit,
											DetailDescription: o
												? i.DetailDescription
												: a.DetailDescription,
											DetailName: o ? i.DetailName : a.DetailName,
											monthly: o,
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
					value: function(t) {
						var e = this;
						this.setState(
							function(t, e) {
								if (99 !== t.selectedIndex)
									return { selectedIndex: 99, prevIndex: t.selectedIndex };
							},
							function() {
								0 == e.state.otherAmount &&
									e.props.givingInfo &&
									!e.props.givingInfo.amount &&
									e.context.removeFromCart("donation"),
									e.otherAmountField.current.focus();
							}
						);
					},
				},
				{
					key: "handleOtherAmt",
					value: function(t) {
						var e = this,
							r = this.state.selectedIndex,
							o = t.target.value.trim(),
							n = /^[0-9]{1,}$/.test(o);
						n && o > 0
							? this.setState(
									{ otherAmountError: "", otherAmount: o, prevIndex: r },
									function() {
										return e.addToCart(+o, 99);
									}
							  )
							: n
							? this.setState(
									{
										otherAmount: 0,
										selectedIndex: null,
										otherAmountError: "",
										prevIndex: r,
									},
									function() {
										return e.context.removeFromCart({
											type: "REMOVE_FROM_CART",
											itemType: "donation",
										});
									}
							  )
							: this.setState({
									otherAmount: 0,
									otherAmountError:
										"" !== o ? "Number greater than Zero Only" : "",
									prevIndex: r,
							  });
					},
				},
				{
					key: "render",
					value: function() {
						var t = this.props,
							e = t.givingFormat,
							r = t.amountError,
							o = t.monthlyChecked,
							n = t.Monthlypledgeday,
							i = t.handleInputChange,
							a = t.handleRadioClick,
							m = t.givingOptions,
							l = m.singleOption,
							$ = m.monthlyOption,
							s = m.monthlyAmounts,
							u = m.singleAmounts,
							p = this.state,
							d = p.otherAmount,
							h = p.otherAmountError,
							f = p.selectedIndex,
							c = (p.prevIndex, this.context.givingInfo),
							_ = c.amount,
							D = c.isMonthly,
							H = "controlled";
						if (_) {
							var y = D ? s.indexOf(_) : u.indexOf(_);
							(f = y > -1 ? y : 99), (d = _), (o = D);
						} else
							(d = 99 == f ? d : o ? s[f] : u[f]),
								(H = 99 == f || null === f ? H : (o ? s[f] : u[f]) + "-key");
						return "buttons" === e
							? require("haMh").jsx(
									require("T33x").default,
									null,
									require("haMh").jsx(
										"legend",
										null,
										"Giving Amounts and Giving Options"
									),
									require("haMh").jsx(
										require("7Dc8").default,
										{ className: "askarray__header" },
										"Select A ",
										o ? "Monthly" : "Single",
										" Donation Amount"
									),
									require("haMh").jsx(
										j,
										{ id: "AskArray", className: "askarray" },
										$ && o ? this.renderArray(s, f, e) : null,
										l && !o ? this.renderArray(u, f, e) : null
									),
									require("haMh").jsx(
										k,
										{ id: "OtherGiftAmount", className: "askarray--other" },
										require("haMh").jsx(
											"div",
											{
												id: "OtherAmount",
												className: "askarray__form-group--other ".concat(
													99 == f ? "selected" : ""
												),
											},
											require("haMh").jsx(
												"label",
												{
													className: "form-group__other-input--label",
													htmlFor: "other-amt-input",
												},
												"Other Amount"
											),
											require("haMh").jsx("input", {
												key: H,
												ref: this.otherAmountField,
												className: "form-group__other-input",
												name: "other-amt-input",
												onChange: this.handleOtherAmt,
												value: 0 == d ? "" : d,
												onFocus: this.handleFocus,
											}),
											require("haMh").jsx(
												"div",
												{ className: "other-amt-error" },
												h
											)
										)
									),
									require("haMh").jsx(
										require("PA8K").default,
										{ className: "amount-error" },
										r
									),
									$ &&
										l &&
										require("haMh").jsx(w, {
											Monthlypledgeday: n,
											monthlyChecked: o,
											handleInputChange: i,
											handleRadioClick: a,
										})
							  )
							: require("haMh").jsx(
									require("T33x").default,
									null,
									require("haMh").jsx(
										"legend",
										null,
										"Giving Amounts and Giving Options"
									),
									require("haMh").jsx(
										require("7Dc8").default,
										{ className: "askarray__header" },
										"Select A ",
										o ? "Monthly" : "Single",
										" Donation Amount"
									),
									$ &&
										l &&
										require("haMh").jsx(x, {
											monthlyChecked: o,
											handleTabClick: a,
										}),
									require("haMh").jsx(
										j,
										{ id: "AskArray", className: "askarray__tabs" },
										$ && o ? this.renderArray(s, f, e) : null,
										l && !o ? this.renderArray(u, f, e) : null
									),
									require("haMh").jsx(
										k,
										{
											id: "OtherGiftAmount",
											className: "askarray__tabs--other",
										},
										require("haMh").jsx(
											"div",
											{
												id: "OtherAmount",
												className: "askarray__form-group--tabs ".concat(
													99 == f ? " styles.selected" : ""
												),
											},
											require("haMh").jsx(
												"label",
												{
													className: "form-group-tabs__other-input--label",
													htmlFor: "other-amt-input",
												},
												"Or specify amount"
											),
											require("haMh").jsx(
												"div",
												{
													className: "askarray__form-group-tabs-flex-container",
												},
												require("haMh").jsx(
													"div",
													{ className: "form-group-tabs--dollar" },
													"$"
												),
												require("haMh").jsx("input", {
													key: H,
													ref: this.otherAmountField,
													className: "form-group-tabs__other-input",
													name: "other-amt-input",
													onChange: this.handleOtherAmt,
													value: 0 == d ? "" : d,
													onFocus: this.handleFocus,
												}),
												require("haMh").jsx(
													"div",
													{ className: "other-amt-error" },
													h
												)
											)
										)
									),
									o && require("haMh").jsx(g, { Monthlypledgeday: n }),
									require("haMh").jsx(
										require("PA8K").default,
										{ className: "amount-error" },
										r
									)
							  );
					},
				},
			]),
			e
		);
	})(require("1n8/").Component);
	q.contextType = require("zetz").GivingFormContext;
	require("Fhqp"),
		require("PMvg"),
		require("agGE"),
		require("0fcM"),
		require("P8NW"),
		require("0421"),
		require("UJE0"),
		require("d4H2"),
		require("haMh"),
		require("1n8/"),
		require("zetz"),
		require("5N4C"),
		require("T33x"),
		require("7Dc8"),
		require("jPOl"),
		require("4maS"),
		require("ZTHW"),
		require("30nM"),
		require("2Sb5"),
		require("cd8Z"),
		require("0cOc"),
		require("wNTG"),
		require("dDLv");
	var e = (function(e) {
		function t() {
			var e, o;
			var $fcM$$interop$default = b(require("0fcM"));
			$fcM$$interop$default.d(this, t);
			for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
				r[i] = arguments[i];
			var $_$$interop$default = b(require("0421"));
			var $UJE0$$interop$default = b(require("UJE0"));
			return (
				((o = $_$$interop$default.d(
					this,
					(e = $UJE0$$interop$default.d(t)).call.apply(e, [this].concat(r))
				)).hasMonthlyAmounts =
					o.props.monthlyAmounts && o.props.monthlyAmounts.length),
				(o.hasSingleAmounts =
					o.props.singleAmounts && o.props.singleAmounts.length),
				(o.state = {
					monthlyChecked:
						"monthly" == o.props.defaultOption ||
						(o.hasMonthlyAmounts && !o.hasSingleAmounts),
					totalGift: 0,
				}),
				(o.handleRadioClick = function(e) {
					var t = e.target.id,
						n = o.props,
						r = n.singlePledgeData,
						i = n.monthlyPledgeData;
					o.setState({ monthlyChecked: "singlegift" !== t }, function() {
						return o.context.updateGivingType({
							type: "UPDATE_GIVING_TYPE",
							typeId: t,
							singlePledgeData: r,
							monthlyPledgeData: i,
							source: "radioClick",
						});
					});
				}),
				(o.handleInputChange = function(e) {
					var t = e.target,
						n = "checkbox" === t.type ? t.checked : t.value,
						r = t.name;
					o.context.validateAndUpdateField({
						type: "UPDATE_FIELD",
						name: r,
						value: n,
					});
				}),
				(o.handleSubmit = (function() {
					var $agGE$$interop$default = b(require("agGE"));
					var $PMvg$$interop$default = b(require("PMvg"));
					var e = $agGE$$interop$default.d(
						$PMvg$$interop$default.d.mark(function e(t) {
							return $PMvg$$interop$default.d.wrap(function(e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											t.preventDefault(), o.context.submitGivingForm();
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
				(o.updateProducts = function(e) {
					var $Fhqp$$interop$default = b(require("Fhqp"));
					var t = e.idx,
						n = e.quantity,
						r = $Fhqp$$interop$default.d(o.state.productInfo),
						i = o.state.productsOrdered,
						a = r.findIndex(function(e) {
							return e.idx === t;
						});
					a > -1 ? (r[a].quantity = n) : r.push({ idx: t, quantity: n }),
						(i = !!r.reduce(function(e, t) {
							return e + t.quantity;
						}, 0));
					var l = $Fhqp$$interop$default.d(o.state.cart.items),
						m = o.props.products[t],
						s = m.DetailName,
						p = m.DetailCprojCredit,
						$ = m.DetailCprojMail,
						u = m.DetailDescription,
						d = m.PledgeAmount,
						c = l.filter(function(e) {
							return e.DetailDescription !== u;
						});
					n &&
						c.push({
							type: "product",
							PledgeAmount: +d * n,
							DetailCprojMail: $,
							DetailCprojCredit: p,
							DetailDescription: u,
							DetailName: s + "|" + n,
						}),
						o.setState({
							productInfo: r,
							productsOrdered: i,
							cart: { items: c },
						});
				}),
				(o.addToCart = function(e) {
					o.context.addToCart({ type: "ADD_TO_CART", item: e });
				}),
				(o.removeFromCart = function(e) {
					o.context.removeFromCart({ type: "REMOVE_TO_CART", itemType: e });
				}),
				o
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
						if (!this.context.initialized) {
							var e = {
									Zip: "",
									Monthlypledgeday:
										((n = new Date().getDate()), n >= 2 && n <= 28 ? n : 2),
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
							for (var o in e) t[o] = "";
							(t.amount = ""),
								this.context.initFields({
									type: "INIT_FORM_STATE",
									fields: e,
									errors: t,
									allowMonthlyDesignations: this.props.allowMonthlyDesignations,
								});
						}
						var n;
						try {
							var r = this.context.loadLS({ type: "LOAD" });
							this.setState({ monthlyChecked: r });
						} catch (i) {
							console.error(i.message), console.error(i.stack);
						}
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
														? (30, 2592e6, this.context.saveLS(2592e6, "info"))
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
							o = e.submitButtonText,
							n = e.showGivingArray,
							r = e.givingFormat,
							i = e.productFormat,
							a = e.monthlyOption,
							l = e.singleOption,
							m = e.monthlyAmounts,
							s = e.singleAmounts,
							p = e.designations,
							$ = e.monthlyPledgeData,
							u = e.singlePledgeData,
							d = e.products,
							c = e.additionalGift,
							h = e.getShippingAddress,
							x = e.allowInternational,
							_ = e.getPhone,
							g = e.getHonorific,
							H = e.getSuffix,
							Z = e.getMiddleName,
							f = e.getSpouseInfo,
							S = e.defaultAmount,
							y = e.defaultOption,
							C = {
								monthlyOption: a,
								singleOption: l,
								monthlyAmounts: m || [],
								singleAmounts: s || [],
								designations: p || [],
								monthlyPledgeData: $,
								singlePledgeData: u,
							},
							v = {
								products: d || [],
								numProducts: d && d.length ? d.length : 0,
								additionalGift: c,
							},
							F = this.state.monthlyChecked,
							k = this.context,
							A = k.errors,
							b = k.fields,
							E = k.initialized,
							P = k.submitting,
							D = k.submitted,
							T =
								Object.values(A).filter(function(e) {
									return e && e.length > 0;
								}).length > 0;
						return D
							? null
							: require("haMh").jsx(
									require("dDLv").default,
									null,
									require("haMh").jsx(
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
										n &&
											require("haMh").jsx(
												require("5N4C").default,
												{ className: "form-panel" },
												require("haMh").jsx(q, {
													givingFormat: r,
													defaultAmount: S,
													defaultOption: y,
													givingOptions: C,
													handleRadioClick: this.handleRadioClick,
													amountError: A.amount,
													monthlyChecked: F,
													Monthlypledgeday: b.Monthlypledgeday,
													monthlyOption: a,
													singleOption: l,
												})
											),
										p &&
											p.length > 0 &&
											require("haMh").jsx(
												require("5N4C").default,
												{ className: "form-panel" },
												require("haMh").jsx(require("4maS").default, {
													designations: p,
												})
											),
										v.numProducts > 0 &&
											require("haMh").jsx(
												require("5N4C").default,
												{ className: "form-panel" },
												require("haMh").jsx(require("jPOl").default, {
													productFormat: i,
													productOptions: v,
													updateProducts: this.updateProducts,
												})
											),
										E
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
																fields: b,
																errors: A,
																getHonorific: g,
																getMiddleName: Z,
																getSuffix: H,
																getSpouseInfo: f,
																handleInputChange: this.handleInputChange,
																type: "Name",
															}),
															require("haMh").jsx(require("2Sb5").default, {
																fields: b,
																errors: A,
																handleInputChange: this.handleInputChange,
																getAddress: !0,
																getPhone: _,
																allowInternational: x,
																type: "Billing",
															})
														)
													),
													h &&
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
																	checked: b.ShipToYes,
																	handleInputChange: this.handleInputChange,
																	label:
																		"\xA0My shipping address is different than my billing address.",
																}),
																b.ShipToYes &&
																	require("haMh").jsx(require("30nM").default, {
																		fields: b,
																		errors: A,
																		handleInputChange: this.handleInputChange,
																		allowInternational: x,
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
															checked: b.savePersonalInfo,
															handleInputChange: this.handleInputChange,
															label:
																"\xA0Remember my name and address next time",
														})
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
															hasErrors: T,
															error: A.amount,
															handleSubmit: this.handleSubmit,
															submitting: P,
															value: o,
														})
													)
											  )
											: require("haMh").jsx(
													require("5N4C").default,
													{ className: "form-panel" },
													require("haMh").jsx(require("wNTG").default, null)
											  )
									)
							  );
					},
				},
			]),
			t
		);
	})(require("1n8/").Component);
	(e.contextType = require("zetz").GivingFormContext), (a.default = e);
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = a;
	} else if (typeof define === "function" && define.amd) {
		define(function() {
			return a;
		});
	}
	a.__esModule = true;
	return { xHZ3: a };
});
