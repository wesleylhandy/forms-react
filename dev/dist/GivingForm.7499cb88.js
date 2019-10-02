// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function(modules, cache, entry, globalName) {
	// Save the require from previous bundle to this closure if any
	var previousRequire = typeof parcelRequire === "function" && parcelRequire;
	var nodeRequire = typeof require === "function" && require;

	function newRequire(name, jumped) {
		if (!cache[name]) {
			if (!modules[name]) {
				// if we cannot find the module within our internal map or
				// cache jump to the current global require ie. the last bundle
				// that was added to the page.
				var currentRequire =
					typeof parcelRequire === "function" && parcelRequire;
				if (!jumped && currentRequire) {
					return currentRequire(name, true);
				}

				// If there are other bundles on this page the require from the
				// previous one is saved to 'previousRequire'. Repeat this as
				// many times as there are bundles until the module is found or
				// we exhaust the require chain.
				if (previousRequire) {
					return previousRequire(name, true);
				}

				// Try the node require function if it exists.
				if (nodeRequire && typeof name === "string") {
					return nodeRequire(name);
				}

				var err = new Error("Cannot find module '" + name + "'");
				err.code = "MODULE_NOT_FOUND";
				throw err;
			}

			localRequire.resolve = resolve;
			localRequire.cache = {};

			var module = (cache[name] = new newRequire.Module(name));

			modules[name][0].call(
				module.exports,
				localRequire,
				module,
				module.exports,
				this
			);
		}

		return cache[name].exports;

		function localRequire(x) {
			return newRequire(localRequire.resolve(x));
		}

		function resolve(x) {
			return modules[name][1][x] || x;
		}
	}

	function Module(moduleName) {
		this.id = moduleName;
		this.bundle = newRequire;
		this.exports = {};
	}

	newRequire.isParcelRequire = true;
	newRequire.Module = Module;
	newRequire.modules = modules;
	newRequire.cache = cache;
	newRequire.parent = previousRequire;
	newRequire.register = function(id, exports) {
		modules[id] = [
			function(require, module) {
				module.exports = exports;
			},
			{},
		];
	};

	var error;
	for (var i = 0; i < entry.length; i++) {
		try {
			newRequire(entry[i]);
		} catch (e) {
			// Save first error but execute all entries
			if (!error) {
				error = e;
			}
		}
	}

	if (entry.length) {
		// Expose entry point to Node, AMD or browser globals
		// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
		var mainExports = newRequire(entry[entry.length - 1]);

		// CommonJS
		if (typeof exports === "object" && typeof module !== "undefined") {
			module.exports = mainExports;

			// RequireJS
		} else if (typeof define === "function" && define.amd) {
			define(function() {
				return mainExports;
			});

			// <script>
		} else if (globalName) {
			this[globalName] = mainExports;
		}
	}

	// Override the current require with this new one
	parcelRequire = newRequire;

	if (error) {
		// throw error from earlier, _after updating parcelRequire_
		throw error;
	}

	return newRequire;
})(
	{
		"src/Components/FormComponents/StyledComponents/RadioButton.js": [
			function(require, module, exports) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.default = void 0;

				var _styledBase = _interopRequireDefault(
					require("@emotion/styled-base")
				);

				var _react = _interopRequireDefault(require("react"));

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				(function() {
					var enterModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).enterModule;
					enterModule && enterModule(module);
				})();

				var __signature__ =
					typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal.default.signature
						: function(a) {
								return a;
						  };

				var RadioButton = (0, _styledBase.default)("div", {
					target: "e19kc6t50",
					label: "RadioButton",
				})(
					"development" === "production"
						? {
								name: "nyr9x",
								styles:
									'display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 5px;height:calc(19px * 2);line-height:calc(19px * 2);input[type="radio"]{box-sizing:border-box;position:absolute;opacity:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";}input[type="radio"] + label{box-sizing:border-box;font-size:calc(19px * 0.7);font-weight:600;}input[type="radio"] + label.Visa,input[type="radio"] + label.MasterCard,input[type="radio"] + label.AmericanExpress,input[type="radio"] + label.Discover{box-sizing:border-box;font-size:40px;font-weight:600;display:flex;align-items:center;}input[type="radio"] + label.Visa{color:#172274;}input[type="radio"] + label.MasterCard{color:#ea001b;}input[type="radio"] + label.AmericanExpress{color:#2e78bf;}input[type="radio"] + label.Discover{color:#f58220;}input[type="radio"] + label:before{content:"";background:#ffffff;box-sizing:border-box;border-radius:100%;border:1px solid #d8dde6;display:inline-block;width:calc(19px * 1.1);height:calc(19px * 1.1);position:relative;margin-right:calc(19px * 0.8);vertical-align:middle;cursor:pointer;text-align:center;transition:all 200ms ease;}input[type="radio"]:checked + label:before{background-color:#333;box-sizing:border-box;box-shadow:inset 0 0 0 4px #ffffff;}input[type="radio"]:focus + label:before,input[type="radio"]:hover + label:before{outline:none;border-color:#333;box-sizing:border-box;}input[type="radio"]:disabled + label:before{box-shadow:inset 0 0 0 4px #ffffff;border-color:#bfbfbf;background:#bfbfbf;box-sizing:border-box;}input[type="radio"] + label:empty:before{margin-right:0;box-sizing:border-box;}',
						  }
						: {
								name: "nyr9x",
								styles:
									'display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 5px;height:calc(19px * 2);line-height:calc(19px * 2);input[type="radio"]{box-sizing:border-box;position:absolute;opacity:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";}input[type="radio"] + label{box-sizing:border-box;font-size:calc(19px * 0.7);font-weight:600;}input[type="radio"] + label.Visa,input[type="radio"] + label.MasterCard,input[type="radio"] + label.AmericanExpress,input[type="radio"] + label.Discover{box-sizing:border-box;font-size:40px;font-weight:600;display:flex;align-items:center;}input[type="radio"] + label.Visa{color:#172274;}input[type="radio"] + label.MasterCard{color:#ea001b;}input[type="radio"] + label.AmericanExpress{color:#2e78bf;}input[type="radio"] + label.Discover{color:#f58220;}input[type="radio"] + label:before{content:"";background:#ffffff;box-sizing:border-box;border-radius:100%;border:1px solid #d8dde6;display:inline-block;width:calc(19px * 1.1);height:calc(19px * 1.1);position:relative;margin-right:calc(19px * 0.8);vertical-align:middle;cursor:pointer;text-align:center;transition:all 200ms ease;}input[type="radio"]:checked + label:before{background-color:#333;box-sizing:border-box;box-shadow:inset 0 0 0 4px #ffffff;}input[type="radio"]:focus + label:before,input[type="radio"]:hover + label:before{outline:none;border-color:#333;box-sizing:border-box;}input[type="radio"]:disabled + label:before{box-shadow:inset 0 0 0 4px #ffffff;border-color:#bfbfbf;background:#bfbfbf;box-sizing:border-box;}input[type="radio"] + label:empty:before{margin-right:0;box-sizing:border-box;}',
								map:
									"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJhZGlvQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUc4QiIsImZpbGUiOiJSYWRpb0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBSYWRpb0J1dHRvbiA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdHBhZGRpbmc6IDAgNXB4O1xuXHRoZWlnaHQ6IGNhbGMoMTlweCAqIDIpO1xuXHRsaW5lLWhlaWdodDogY2FsYygxOXB4ICogMik7XG5cdGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0b3BhY2l0eTogMDtcblx0XHQtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXCI7XG5cdH1cblx0aW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwge1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0Zm9udC1zaXplOiBjYWxjKDE5cHggKiAwLjcpO1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdH1cblx0aW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwuVmlzYSxcblx0aW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwuTWFzdGVyQ2FyZCxcblx0aW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwuQW1lcmljYW5FeHByZXNzLFxuXHRpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbC5EaXNjb3ZlciB7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRmb250LXNpemU6IDQwcHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdH1cblx0aW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwuVmlzYSB7XG5cdFx0Y29sb3I6ICMxNzIyNzQ7XG5cdH1cblx0aW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwuTWFzdGVyQ2FyZCB7XG5cdFx0Y29sb3I6ICNlYTAwMWI7XG5cdH1cblx0aW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwuQW1lcmljYW5FeHByZXNzIHtcblx0XHRjb2xvcjogIzJlNzhiZjtcblx0fVxuXHRpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbC5EaXNjb3ZlciB7XG5cdFx0Y29sb3I6ICNmNTgyMjA7XG5cdH1cblx0aW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6YmVmb3JlIHtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNkOGRkZTY7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdHdpZHRoOiBjYWxjKDE5cHggKiAxLjEpO1xuXHRcdGhlaWdodDogY2FsYygxOXB4ICogMS4xKTtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0bWFyZ2luLXJpZ2h0OiBjYWxjKDE5cHggKiAwLjgpO1xuXHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcblx0fVxuXHRpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMztcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDRweCAjZmZmZmZmO1xuXHR9XG5cdGlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIGxhYmVsOmJlZm9yZSxcblx0aW5wdXRbdHlwZT1cInJhZGlvXCJdOmhvdmVyICsgbGFiZWw6YmVmb3JlIHtcblx0XHRvdXRsaW5lOiBub25lO1xuXHRcdGJvcmRlci1jb2xvcjogIzMzMztcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHR9XG5cdGlucHV0W3R5cGU9XCJyYWRpb1wiXTpkaXNhYmxlZCArIGxhYmVsOmJlZm9yZSB7XG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgNHB4ICNmZmZmZmY7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjYmZiZmJmO1xuXHRcdGJhY2tncm91bmQ6ICNiZmJmYmY7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0fVxuXHRpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDplbXB0eTpiZWZvcmUge1xuXHRcdG1hcmdpbi1yaWdodDogMDtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHR9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBSYWRpb0J1dHRvbjtcbiJdfQ== */",
						  }
				);
				var _default = RadioButton;
				var _default2 = _default;
				exports.default = _default2;
				(function() {
					var reactHotLoader = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).default;

					if (!reactHotLoader) {
						return;
					}

					reactHotLoader.register(
						RadioButton,
						"RadioButton",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/RadioButton.js"
					);
					reactHotLoader.register(
						_default,
						"default",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/RadioButton.js"
					);
				})();

				(function() {
					var leaveModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).leaveModule;
					leaveModule && leaveModule(module);
				})();
			},
			{
				"@emotion/styled-base":
					"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js",
				"react-hot-loader": "node_modules/react-hot-loader/index.js",
				react: "node_modules/react/index.js",
			},
		],
		"src/Components/FormComponents/FunctionalComponents/RadioButtonGroup.js": [
			function(require, module, exports) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.default = void 0;

				var _core = require("@emotion/core");

				var _react = _interopRequireDefault(require("react"));

				var _RadioButton = _interopRequireDefault(
					require("../StyledComponents/RadioButton")
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				(function() {
					var enterModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).enterModule;
					enterModule && enterModule(module);
				})();

				var __signature__ =
					typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal.default.signature
						: function(a) {
								return a;
						  };

				var RadioButtonGroup = function RadioButtonGroup(_ref) {
					var id = _ref.id,
						name = _ref.name,
						checked = _ref.checked,
						handleRadioClick = _ref.handleRadioClick,
						label = _ref.label;
					return (0, _core.jsx)(
						_RadioButton.default,
						{
							id: "".concat(id, "-group"),
							className: "radio-group",
						},
						(0, _core.jsx)("input", {
							name: name,
							id: "".concat(id, "gift"),
							type: "radio",
							checked: checked,
							onChange: handleRadioClick,
						}),
						(0, _core.jsx)(
							"label",
							{
								htmlFor: "".concat(id, "gift"),
							},
							label
						)
					);
				};

				var _default = RadioButtonGroup;
				var _default2 = _default;
				exports.default = _default2;
				(function() {
					var reactHotLoader = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).default;

					if (!reactHotLoader) {
						return;
					}

					reactHotLoader.register(
						RadioButtonGroup,
						"RadioButtonGroup",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/FunctionalComponents/RadioButtonGroup.js"
					);
					reactHotLoader.register(
						_default,
						"default",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/FunctionalComponents/RadioButtonGroup.js"
					);
				})();

				(function() {
					var leaveModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).leaveModule;
					leaveModule && leaveModule(module);
				})();
			},
			{
				"@emotion/core": "node_modules/@emotion/core/dist/core.browser.esm.js",
				"react-hot-loader": "node_modules/react-hot-loader/index.js",
				react: "node_modules/react/index.js",
				"../StyledComponents/RadioButton":
					"src/Components/FormComponents/StyledComponents/RadioButton.js",
			},
		],
		"src/Components/FormComponents/Blocks/CCInfoBlock.js": [
			function(require, module, exports) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.default = void 0;

				var _core = require("@emotion/core");

				var _react = _interopRequireWildcard(require("react"));

				var _GivingFormProvider = require("../../Contexts/GivingFormProvider");

				var _FormRow = _interopRequireDefault(
					require("../StyledComponents/FormRow")
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _interopRequireWildcard(obj) {
					if (obj && obj.__esModule) {
						return obj;
					} else {
						var newObj = {};
						if (obj != null) {
							for (var key in obj) {
								if (Object.prototype.hasOwnProperty.call(obj, key)) {
									var desc =
										Object.defineProperty && Object.getOwnPropertyDescriptor
											? Object.getOwnPropertyDescriptor(obj, key)
											: {};
									if (desc.get || desc.set) {
										Object.defineProperty(newObj, key, desc);
									} else {
										newObj[key] = obj[key];
									}
								}
							}
						}
						newObj.default = obj;
						return newObj;
					}
				}

				(function() {
					var enterModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).enterModule;
					enterModule && enterModule(module);
				})();

				var __signature__ =
					typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal.default.signature
						: function(a) {
								return a;
						  };

				function CCInfoBlock(_ref) {
					var Monthlypledgeday = _ref.Monthlypledgeday;

					var _useContext = (0, _react.useContext)(
							_GivingFormProvider.GivingFormContext
						),
						updateField = _useContext.updateField;

					var options = [];

					for (var i = 2; i <= 28; i++) {
						options.push(
							(0, _core.jsx)(
								"option",
								{
									key: "date-option-" + i,
									value: i,
								},
								i
							)
						);
					}

					var handleInputChange = function handleInputChange(e) {
						var target = e.target;
						var value =
							target.type === "checkbox" ? target.checked : target.value;
						var name = target.name;
						updateField({
							type: "UPDATE_FIELD",
							name: name,
							value: value,
						});
					};

					return (0, _core.jsx)(
						_FormRow.default,
						{
							className: "monthly-giving-day",
						},
						(0, _core.jsx)(
							"h5",
							{
								className: "cc-day-of-month",
							},
							"Charge automatically on day\xA0",
							(0, _core.jsx)(
								"label",
								{
									htmlFor: "Monthlypledgeday",
								},
								"Select Date"
							),
							(0, _core.jsx)(
								"select",
								{
									className: "cc-date",
									name: "Monthlypledgeday",
									onChange: handleInputChange,
									value: Monthlypledgeday,
								},
								options
							),
							"\xA0each month."
						)
					);
				}

				__signature__(CCInfoBlock, "useContext{{ updateField }}");

				var _default = CCInfoBlock;
				var _default2 = _default;
				exports.default = _default2;
				(function() {
					var reactHotLoader = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).default;

					if (!reactHotLoader) {
						return;
					}

					reactHotLoader.register(
						CCInfoBlock,
						"CCInfoBlock",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/CCInfoBlock.js"
					);
					reactHotLoader.register(
						_default,
						"default",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/CCInfoBlock.js"
					);
				})();

				(function() {
					var leaveModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).leaveModule;
					leaveModule && leaveModule(module);
				})();
			},
			{
				"@emotion/core": "node_modules/@emotion/core/dist/core.browser.esm.js",
				"react-hot-loader": "node_modules/react-hot-loader/index.js",
				react: "node_modules/react/index.js",
				"../../Contexts/GivingFormProvider":
					"src/Components/Contexts/GivingFormProvider.js",
				"../StyledComponents/FormRow":
					"src/Components/FormComponents/StyledComponents/FormRow.js",
			},
		],
		"src/Components/FormComponents/Blocks/MonthlyRadioBlock.js": [
			function(require, module, exports) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.default = void 0;

				var _core = require("@emotion/core");

				var _react = _interopRequireDefault(require("react"));

				var _RadioButtonGroup = _interopRequireDefault(
					require("../FunctionalComponents/RadioButtonGroup")
				);

				var _FieldSet = _interopRequireDefault(
					require("../StyledComponents/FieldSet")
				);

				var _FormHeader = _interopRequireDefault(
					require("../StyledComponents/FormHeader")
				);

				var _FormRow = _interopRequireDefault(
					require("../StyledComponents/FormRow")
				);

				var _CCInfoBlock = _interopRequireDefault(require("./CCInfoBlock"));

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				(function() {
					var enterModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).enterModule;
					enterModule && enterModule(module);
				})();

				var __signature__ =
					typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal.default.signature
						: function(a) {
								return a;
						  };

				function MonthlyRadioGroup(_ref) {
					var monthlyChecked = _ref.monthlyChecked,
						Monthlypledgeday = _ref.Monthlypledgeday,
						handleRadioClick = _ref.handleRadioClick;
					var monthly = monthlyChecked;
					var single = !monthlyChecked;
					return (0, _core.jsx)(
						_FieldSet.default,
						{
							className: "monthly-giving-info",
						},
						(0, _core.jsx)("legend", null, "Select Monthly or One-Time Gift"),
						(0, _core.jsx)(
							_FormHeader.default,
							null,
							"How Often Do You Want to Give This Amount?"
						),
						(0, _core.jsx)(
							_FormRow.default,
							{
								className: "monthly-radio",
							},
							(0, _core.jsx)(_RadioButtonGroup.default, {
								id: "monthly",
								name: "monthly-toggle",
								label: "Monthly Gift",
								checked: monthly,
								handleRadioClick: handleRadioClick,
							}),
							(0, _core.jsx)(_RadioButtonGroup.default, {
								id: "single",
								name: "monthly-toggle",
								label: "Single Gift",
								checked: single,
								handleRadioClick: handleRadioClick,
							})
						),
						monthlyChecked &&
							(0, _core.jsx)(_CCInfoBlock.default, {
								Monthlypledgeday: Monthlypledgeday,
							})
					);
				}

				var _default = MonthlyRadioGroup;
				var _default2 = _default;
				exports.default = _default2;
				(function() {
					var reactHotLoader = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).default;

					if (!reactHotLoader) {
						return;
					}

					reactHotLoader.register(
						MonthlyRadioGroup,
						"MonthlyRadioGroup",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/MonthlyRadioBlock.js"
					);
					reactHotLoader.register(
						_default,
						"default",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/MonthlyRadioBlock.js"
					);
				})();

				(function() {
					var leaveModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).leaveModule;
					leaveModule && leaveModule(module);
				})();
			},
			{
				"@emotion/core": "node_modules/@emotion/core/dist/core.browser.esm.js",
				"react-hot-loader": "node_modules/react-hot-loader/index.js",
				react: "node_modules/react/index.js",
				"../FunctionalComponents/RadioButtonGroup":
					"src/Components/FormComponents/FunctionalComponents/RadioButtonGroup.js",
				"../StyledComponents/FieldSet":
					"src/Components/FormComponents/StyledComponents/FieldSet.js",
				"../StyledComponents/FormHeader":
					"src/Components/FormComponents/StyledComponents/FormHeader.js",
				"../StyledComponents/FormRow":
					"src/Components/FormComponents/StyledComponents/FormRow.js",
				"./CCInfoBlock": "src/Components/FormComponents/Blocks/CCInfoBlock.js",
			},
		],
		"src/Components/FormComponents/StyledComponents/TabGroup.js": [
			function(require, module, exports) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.default = void 0;

				var _styledBase = _interopRequireDefault(
					require("@emotion/styled-base")
				);

				var _react = _interopRequireDefault(require("react"));

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				(function() {
					var enterModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).enterModule;
					enterModule && enterModule(module);
				})();

				var __signature__ =
					typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal.default.signature
						: function(a) {
								return a;
						  };

				var TabGroup = (0, _styledBase.default)("div", {
					target: "ea7p2am0",
					label: "TabGroup",
				})(
					"development" === "production"
						? {
								name: "11ci7l4",
								styles:
									'&.tab-group{box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;height:80px;line-height:80px;flex:1 1 auto;}input[type="checkbox"].tab-group__input{position:absolute !important;left:-10000px !important;top:auto !important;bottom:auto !important;width:1px !important;height:1px !important;overflow:hidden !important;}input[type="checkbox"].tab-group__input + label{display:block;height:80px;line-height:80px !important;cursor:pointer;width:100%;text-align:center;background:#fff;border-radius:4px;border:2px solid #333;margin-bottom:0;color:#333;transition:color 200ms ease-in-out,background-color 200ms ease-in-out,border-color 200ms ease-in-out;}input[type="checkbox"].tab-group__input:checked + label,input[type="checkbox"].tab-group__input + label:hover{color:#fff;background-color:#333;border-color:#999;}',
						  }
						: {
								name: "11ci7l4",
								styles:
									'&.tab-group{box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;height:80px;line-height:80px;flex:1 1 auto;}input[type="checkbox"].tab-group__input{position:absolute !important;left:-10000px !important;top:auto !important;bottom:auto !important;width:1px !important;height:1px !important;overflow:hidden !important;}input[type="checkbox"].tab-group__input + label{display:block;height:80px;line-height:80px !important;cursor:pointer;width:100%;text-align:center;background:#fff;border-radius:4px;border:2px solid #333;margin-bottom:0;color:#333;transition:color 200ms ease-in-out,background-color 200ms ease-in-out,border-color 200ms ease-in-out;}input[type="checkbox"].tab-group__input:checked + label,input[type="checkbox"].tab-group__input + label:hover{color:#fff;background-color:#333;border-color:#999;}',
								map:
									"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhYkdyb3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUcyQiIsImZpbGUiOiJUYWJHcm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBUYWJHcm91cCA9IHN0eWxlZC5kaXZgXG5cdCYudGFiLWdyb3VwIHtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGhlaWdodDogODBweDtcblx0XHRsaW5lLWhlaWdodDogODBweDtcblx0XHRmbGV4OiAxIDEgYXV0bztcblx0fVxuXHRpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0udGFiLWdyb3VwX19pbnB1dCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cdFx0bGVmdDogLTEwMDAwcHggIWltcG9ydGFudDtcblx0XHR0b3A6IGF1dG8gIWltcG9ydGFudDtcblx0XHRib3R0b206IGF1dG8gIWltcG9ydGFudDtcblx0XHR3aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG5cdFx0aGVpZ2h0OiAxcHggIWltcG9ydGFudDtcblx0XHRvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG5cdH1cblx0aW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLnRhYi1ncm91cF9faW5wdXQgKyBsYWJlbCB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0aGVpZ2h0OiA4MHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0Y29sb3I6ICMzMzM7XG5cdFx0dHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsXG5cdFx0XHRib3JkZXItY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG5cdH1cblx0aW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLnRhYi1ncm91cF9faW5wdXQ6Y2hlY2tlZCArIGxhYmVsLFxuXHRpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0udGFiLWdyb3VwX19pbnB1dCArIGxhYmVsOmhvdmVyIHtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuXHRcdGJvcmRlci1jb2xvcjogIzk5OTtcblx0fVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgVGFiR3JvdXA7XG4iXX0= */",
						  }
				);
				var _default = TabGroup;
				var _default2 = _default;
				exports.default = _default2;
				(function() {
					var reactHotLoader = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).default;

					if (!reactHotLoader) {
						return;
					}

					reactHotLoader.register(
						TabGroup,
						"TabGroup",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/TabGroup.js"
					);
					reactHotLoader.register(
						_default,
						"default",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/TabGroup.js"
					);
				})();

				(function() {
					var leaveModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).leaveModule;
					leaveModule && leaveModule(module);
				})();
			},
			{
				"@emotion/styled-base":
					"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js",
				"react-hot-loader": "node_modules/react-hot-loader/index.js",
				react: "node_modules/react/index.js",
			},
		],
		"src/Components/FormComponents/FunctionalComponents/Tab.js": [
			function(require, module, exports) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.default = void 0;

				var _core = require("@emotion/core");

				var _react = _interopRequireDefault(require("react"));

				var _TabGroup = _interopRequireDefault(
					require("../StyledComponents/TabGroup")
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				(function() {
					var enterModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).enterModule;
					enterModule && enterModule(module);
				})();

				var __signature__ =
					typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal.default.signature
						: function(a) {
								return a;
						  };

				function Tab(_ref) {
					var id = _ref.id,
						name = _ref.name,
						checked = _ref.checked,
						handleTabClick = _ref.handleTabClick,
						label = _ref.label;
					return (0, _core.jsx)(
						_TabGroup.default,
						{
							id: "".concat(id, "-group"),
							className: "tab-group",
						},
						(0, _core.jsx)("input", {
							className: "tab-group__input",
							name: name,
							id: "".concat(id, "gift"),
							type: "checkbox",
							checked: checked,
							onChange: handleTabClick,
						}),
						(0, _core.jsx)(
							"label",
							{
								htmlFor: "".concat(id, "gift"),
							},
							label
						)
					);
				}

				var _default = Tab;
				var _default2 = _default;
				exports.default = _default2;
				(function() {
					var reactHotLoader = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).default;

					if (!reactHotLoader) {
						return;
					}

					reactHotLoader.register(
						Tab,
						"Tab",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/FunctionalComponents/Tab.js"
					);
					reactHotLoader.register(
						_default,
						"default",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/FunctionalComponents/Tab.js"
					);
				})();

				(function() {
					var leaveModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).leaveModule;
					leaveModule && leaveModule(module);
				})();
			},
			{
				"@emotion/core": "node_modules/@emotion/core/dist/core.browser.esm.js",
				"react-hot-loader": "node_modules/react-hot-loader/index.js",
				react: "node_modules/react/index.js",
				"../StyledComponents/TabGroup":
					"src/Components/FormComponents/StyledComponents/TabGroup.js",
			},
		],
		"src/Components/FormComponents/Blocks/MonthlyTabBlock.js": [
			function(require, module, exports) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.default = void 0;

				var _core = require("@emotion/core");

				var _react = _interopRequireDefault(require("react"));

				var _Tab = _interopRequireDefault(
					require("../FunctionalComponents/Tab")
				);

				var _Divider = _interopRequireDefault(
					require("../StyledComponents/Divider")
				);

				var _FieldSet = _interopRequireDefault(
					require("../StyledComponents/FieldSet")
				);

				var _FormRow = _interopRequireDefault(
					require("../StyledComponents/FormRow")
				);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				(function() {
					var enterModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).enterModule;
					enterModule && enterModule(module);
				})();

				var __signature__ =
					typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal.default.signature
						: function(a) {
								return a;
						  };

				function MonthlyTabGroup(_ref) {
					var monthlyChecked = _ref.monthlyChecked,
						handleTabClick = _ref.handleTabClick;
					var monthly = monthlyChecked;
					var single = !monthlyChecked;
					return (0, _core.jsx)(
						_FieldSet.default,
						{
							className: "monthly-giving-info",
						},
						(0, _core.jsx)("legend", null, "Select Monthly or One-Time Gift"),
						(0, _core.jsx)(
							_FormRow.default,
							{
								className: "monthly-tab",
							},
							(0, _core.jsx)(_Tab.default, {
								id: "monthly",
								name: "monthly-toggle",
								label: "give monthly",
								checked: monthly,
								handleTabClick: handleTabClick,
							}),
							(0, _core.jsx)(_Divider.default, {
								color: "transparent",
							}),
							(0, _core.jsx)(_Tab.default, {
								id: "single",
								name: "monthly-toggle",
								label: "one time gift",
								checked: single,
								handleTabClick: handleTabClick,
							})
						)
					);
				}

				var _default = MonthlyTabGroup;
				var _default2 = _default;
				exports.default = _default2;
				(function() {
					var reactHotLoader = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).default;

					if (!reactHotLoader) {
						return;
					}

					reactHotLoader.register(
						MonthlyTabGroup,
						"MonthlyTabGroup",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/MonthlyTabBlock.js"
					);
					reactHotLoader.register(
						_default,
						"default",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/MonthlyTabBlock.js"
					);
				})();

				(function() {
					var leaveModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).leaveModule;
					leaveModule && leaveModule(module);
				})();
			},
			{
				"@emotion/core": "node_modules/@emotion/core/dist/core.browser.esm.js",
				"react-hot-loader": "node_modules/react-hot-loader/index.js",
				react: "node_modules/react/index.js",
				"../FunctionalComponents/Tab":
					"src/Components/FormComponents/FunctionalComponents/Tab.js",
				"../StyledComponents/Divider":
					"src/Components/FormComponents/StyledComponents/Divider.js",
				"../StyledComponents/FieldSet":
					"src/Components/FormComponents/StyledComponents/FieldSet.js",
				"../StyledComponents/FormRow":
					"src/Components/FormComponents/StyledComponents/FormRow.js",
			},
		],
		"src/Components/FormComponents/StyledComponents/AskArray.js": [
			function(require, module, exports) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.default = void 0;

				var _styledBase = _interopRequireDefault(
					require("@emotion/styled-base")
				);

				var _react = _interopRequireDefault(require("react"));

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				(function() {
					var enterModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).enterModule;
					enterModule && enterModule(module);
				})();

				var __signature__ =
					typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal.default.signature
						: function(a) {
								return a;
						  };

				var AskArray = (0, _styledBase.default)("div", {
					target: "e1cww0v0",
					label: "AskArray",
				})(
					"development" === "production"
						? {
								name: "fsqlrb",
								styles:
									"display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;&.askarray{position:relative;box-sizing:border-box;height:auto;width:100%;max-width:400px;margin:20px auto;margin-bottom:0;}&.askarray__tabs{position:relative;box-sizing:border-box;height:auto;width:calc(100% + 5px);margin:-2.5px;border-bottom:5px solid transparent;}",
						  }
						: {
								name: "fsqlrb",
								styles:
									"display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;&.askarray{position:relative;box-sizing:border-box;height:auto;width:100%;max-width:400px;margin:20px auto;margin-bottom:0;}&.askarray__tabs{position:relative;box-sizing:border-box;height:auto;width:calc(100% + 5px);margin:-2.5px;border-bottom:5px solid transparent;}",
								map:
									"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFza0FycmF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUcyQiIsImZpbGUiOiJBc2tBcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBBc2tBcnJheSA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdCYuYXNrYXJyYXkge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGhlaWdodDogYXV0bztcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdG1hcmdpbjogMjBweCBhdXRvO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cblx0Ji5hc2thcnJheV9fdGFicyB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgKyA1cHgpO1xuXHRcdG1hcmdpbjogLTIuNXB4O1xuXHRcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0fVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQXNrQXJyYXk7XG4iXX0= */",
						  }
				);
				var _default = AskArray;
				var _default2 = _default;
				exports.default = _default2;
				(function() {
					var reactHotLoader = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).default;

					if (!reactHotLoader) {
						return;
					}

					reactHotLoader.register(
						AskArray,
						"AskArray",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/AskArray.js"
					);
					reactHotLoader.register(
						_default,
						"default",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/AskArray.js"
					);
				})();

				(function() {
					var leaveModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).leaveModule;
					leaveModule && leaveModule(module);
				})();
			},
			{
				"@emotion/styled-base":
					"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js",
				"react-hot-loader": "node_modules/react-hot-loader/index.js",
				react: "node_modules/react/index.js",
			},
		],
		"src/Components/FormComponents/StyledComponents/AskArrayBtn.js": [
			function(require, module, exports) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.default = void 0;

				var _styledBase = _interopRequireDefault(
					require("@emotion/styled-base")
				);

				var _react = _interopRequireDefault(require("react"));

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				(function() {
					var enterModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).enterModule;
					enterModule && enterModule(module);
				})();

				var __signature__ =
					typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal.default.signature
						: function(a) {
								return a;
						  };

				var AskArrayBtn = (0, _styledBase.default)("div", {
					target: "e27bfrr0",
					label: "AskArrayBtn",
				})(
					"development" === "production"
						? {
								name: "woj21p",
								styles:
									"display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;&.askbutton{box-sizing:border-box;height:65px;width:calc(100% / 3);}&.askbutton__tabs{height:80px;box-sizing:border-box;flex:1;flex-basis:calc((100% / 3) - 10px);margin:2.5px;}div{display:flex;flex-direction:row;justify-content:center;align-items:center;}div.askbutton__amt{flex:0 0 auto;background-color:#fff;border-radius:4px;border:2px solid #333;box-sizing:border-box;color:#333;cursor:pointer;-webkit-flex-basis:calc(19px * 4.55);-ms-flex-preferred-size:calc(19px * 4.55);flex-basis:calc(19px * 4.55);font-weight:600;font-size:calc(19px * 1.4);height:calc(19px * 2.5);text-align:center;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;}div.askbutton__amt--tabs{background-color:#fff;border:1px solid #333;border-radius:4px;box-sizing:border-box;color:#333;cursor:pointer;width:100%;font-weight:600;font-size:calc(19px * 1.4);height:80px;text-align:center;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;}&:focus div,&:hover div,&:active div,div:hover,div:focus,div:active,&.selected div{background-color:#333;color:#fff;border-color:#999;}div.club-level{position:absolute;font-weight:bold;color:#ddb007;text-align:center;width:100%;margin-top:8px;}",
						  }
						: {
								name: "woj21p",
								styles:
									"display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;&.askbutton{box-sizing:border-box;height:65px;width:calc(100% / 3);}&.askbutton__tabs{height:80px;box-sizing:border-box;flex:1;flex-basis:calc((100% / 3) - 10px);margin:2.5px;}div{display:flex;flex-direction:row;justify-content:center;align-items:center;}div.askbutton__amt{flex:0 0 auto;background-color:#fff;border-radius:4px;border:2px solid #333;box-sizing:border-box;color:#333;cursor:pointer;-webkit-flex-basis:calc(19px * 4.55);-ms-flex-preferred-size:calc(19px * 4.55);flex-basis:calc(19px * 4.55);font-weight:600;font-size:calc(19px * 1.4);height:calc(19px * 2.5);text-align:center;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;}div.askbutton__amt--tabs{background-color:#fff;border:1px solid #333;border-radius:4px;box-sizing:border-box;color:#333;cursor:pointer;width:100%;font-weight:600;font-size:calc(19px * 1.4);height:80px;text-align:center;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;}&:focus div,&:hover div,&:active div,div:hover,div:focus,div:active,&.selected div{background-color:#333;color:#fff;border-color:#999;}div.club-level{position:absolute;font-weight:bold;color:#ddb007;text-align:center;width:100%;margin-top:8px;}",
								map:
									"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFza0FycmF5QnRuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUc4QiIsImZpbGUiOiJBc2tBcnJheUJ0bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBBc2tBcnJheUJ0biA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCYuYXNrYnV0dG9uIHtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGhlaWdodDogNjVweDtcblx0XHR3aWR0aDogY2FsYygxMDAlIC8gMyk7XG5cdH1cblx0Ji5hc2tidXR0b25fX3RhYnMge1xuXHRcdGhlaWdodDogODBweDtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGZsZXg6IDE7XG5cdFx0ZmxleC1iYXNpczogY2FsYygoMTAwJSAvIDMpIC0gMTBweCk7XG5cdFx0bWFyZ2luOiAyLjVweDtcblx0fVxuXHRkaXYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdGRpdi5hc2tidXR0b25fX2FtdCB7XG5cdFx0ZmxleDogMCAwIGF1dG87XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0Ym9yZGVyOiAycHggc29saWQgIzMzMztcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGNvbG9yOiAjMzMzO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHQtd2Via2l0LWZsZXgtYmFzaXM6IGNhbGMoMTlweCAqIDQuNTUpO1xuXHRcdC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiBjYWxjKDE5cHggKiA0LjU1KTtcblx0XHRmbGV4LWJhc2lzOiBjYWxjKDE5cHggKiA0LjU1KTtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGZvbnQtc2l6ZTogY2FsYygxOXB4ICogMS40KTtcblx0XHRoZWlnaHQ6IGNhbGMoMTlweCAqIDIuNSk7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LCBjb2xvciAyMDBtcyBlYXNlLWluLW91dCxcblx0XHRcdGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG5cdFx0dHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LCBjb2xvciAyMDBtcyBlYXNlLWluLW91dCxcblx0XHRcdGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG5cdH1cblx0ZGl2LmFza2J1dHRvbl9fYW10LS10YWJzIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0Y29sb3I6ICMzMzM7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0Zm9udC1zaXplOiBjYWxjKDE5cHggKiAxLjQpO1xuXHRcdGhlaWdodDogODBweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0dHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LCBjb2xvciAyMDBtcyBlYXNlLWluLW91dCxcblx0XHRcdGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG5cdH1cblx0Jjpmb2N1cyBkaXYsXG5cdCY6aG92ZXIgZGl2LFxuXHQmOmFjdGl2ZSBkaXYsXG5cdGRpdjpob3Zlcixcblx0ZGl2OmZvY3VzLFxuXHRkaXY6YWN0aXZlLFxuXHQmLnNlbGVjdGVkIGRpdiB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMztcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRib3JkZXItY29sb3I6ICM5OTk7XG5cdH1cblx0ZGl2LmNsdWItbGV2ZWwge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRjb2xvcjogI2RkYjAwNztcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luLXRvcDogOHB4O1xuXHR9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBBc2tBcnJheUJ0bjtcbiJdfQ== */",
						  }
				);
				var _default = AskArrayBtn;
				var _default2 = _default;
				exports.default = _default2;
				(function() {
					var reactHotLoader = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).default;

					if (!reactHotLoader) {
						return;
					}

					reactHotLoader.register(
						AskArrayBtn,
						"AskArrayBtn",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/AskArrayBtn.js"
					);
					reactHotLoader.register(
						_default,
						"default",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/AskArrayBtn.js"
					);
				})();

				(function() {
					var leaveModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).leaveModule;
					leaveModule && leaveModule(module);
				})();
			},
			{
				"@emotion/styled-base":
					"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js",
				"react-hot-loader": "node_modules/react-hot-loader/index.js",
				react: "node_modules/react/index.js",
			},
		],
		"src/Components/FormComponents/StyledComponents/OtherGiftAmountGroup.js": [
			function(require, module, exports) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.default = void 0;

				var _styledBase = _interopRequireDefault(
					require("@emotion/styled-base")
				);

				var _react = _interopRequireDefault(require("react"));

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				(function() {
					var enterModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).enterModule;
					enterModule && enterModule(module);
				})();

				var __signature__ =
					typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal.default.signature
						: function(a) {
								return a;
						  };

				var OtherGiftAmountGroup = (0, _styledBase.default)("div", {
					target: "e5csuv30",
					label: "OtherGiftAmountGroup",
				})(
					"development" === "production"
						? {
								name: "r66wb5",
								styles:
									"display:flex;flex-direction:row;justify-content:center;line-height:unset;&.askarray--other{position:relative;box-sizing:border-box;height:80px;width:100%;max-width:400px;margin:20px auto;margin-top:0;}div{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;height:80px;line-height:unset;margin-bottom:0;position:relative;white-space:nowrap;width:100%;label{font-size:calc(19px * 0.7);font-weight:600;color:#333;box-sizing:border-box;position:absolute;left:50%;top:calc(100% - (19px * 0.5));transform:translateX(-50%);}}div.askarray__form-group--other{justify-content:center;max-width:400px;input{position:relative;appearance:none;background:none;background-color:#f0f0f0;height:calc(19px * 2.5);width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:2px solid #333;border-radius:4px;box-sizing:border-box;color:#333;font-size:calc(19px * 1.4);text-align:center;font-weight:600;max-width:220px;white-space:nowrap;}input:hover,input:active,input:focus{border:2px solid #333;background-color:#fff;box-sizing:border-box;outline:none;}div.other-amt-error{box-sizing:border-box;position:absolute;color:crimson;width:auto;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:auto;top:19px;left:50%;transform:translateX(-50%);}}div.askarray__form-group--tabs{justify-content:space-between;label{position:relative;left:auto !important;top:auto !important;transform:none !important;font-size:19px;color:#333;line-height:80px !important;margin-bottom:0;}div.askarray__form-group-tabs-flex-container{display:flex;position:relative;flex-direction:row;justify-content:center;align-items:center;div.form-group-tabs--dollar{box-sizing:border-box;color:#333;margin:0 5px;font-weight:600;font-size:19px;}input{position:relative;appearance:none;height:calc(19px * 2.5);width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:1px solid #333;border-radius:4px;box-sizing:border-box;color:#333;font-size:calc(19px * 1.4);text-align:center;font-weight:600;max-width:220px;white-space:nowrap;}input:hover,input:active,input:focus{border:1px solid #333;background-color:#fff;box-sizing:border-box;outline:none;}div.other-amt-error{box-sizing:border-box;position:absolute;color:crimson;width:auto;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:auto;top:100%;left:50%;transform:translateX(-50%);}}@media screen and (max-width:450px){label{font-size:15px;}div input{max-width:160px;}}}div.selected{}",
						  }
						: {
								name: "r66wb5",
								styles:
									"display:flex;flex-direction:row;justify-content:center;line-height:unset;&.askarray--other{position:relative;box-sizing:border-box;height:80px;width:100%;max-width:400px;margin:20px auto;margin-top:0;}div{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;height:80px;line-height:unset;margin-bottom:0;position:relative;white-space:nowrap;width:100%;label{font-size:calc(19px * 0.7);font-weight:600;color:#333;box-sizing:border-box;position:absolute;left:50%;top:calc(100% - (19px * 0.5));transform:translateX(-50%);}}div.askarray__form-group--other{justify-content:center;max-width:400px;input{position:relative;appearance:none;background:none;background-color:#f0f0f0;height:calc(19px * 2.5);width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:2px solid #333;border-radius:4px;box-sizing:border-box;color:#333;font-size:calc(19px * 1.4);text-align:center;font-weight:600;max-width:220px;white-space:nowrap;}input:hover,input:active,input:focus{border:2px solid #333;background-color:#fff;box-sizing:border-box;outline:none;}div.other-amt-error{box-sizing:border-box;position:absolute;color:crimson;width:auto;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:auto;top:19px;left:50%;transform:translateX(-50%);}}div.askarray__form-group--tabs{justify-content:space-between;label{position:relative;left:auto !important;top:auto !important;transform:none !important;font-size:19px;color:#333;line-height:80px !important;margin-bottom:0;}div.askarray__form-group-tabs-flex-container{display:flex;position:relative;flex-direction:row;justify-content:center;align-items:center;div.form-group-tabs--dollar{box-sizing:border-box;color:#333;margin:0 5px;font-weight:600;font-size:19px;}input{position:relative;appearance:none;height:calc(19px * 2.5);width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:1px solid #333;border-radius:4px;box-sizing:border-box;color:#333;font-size:calc(19px * 1.4);text-align:center;font-weight:600;max-width:220px;white-space:nowrap;}input:hover,input:active,input:focus{border:1px solid #333;background-color:#fff;box-sizing:border-box;outline:none;}div.other-amt-error{box-sizing:border-box;position:absolute;color:crimson;width:auto;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:auto;top:100%;left:50%;transform:translateX(-50%);}}@media screen and (max-width:450px){label{font-size:15px;}div input{max-width:160px;}}}div.selected{}",
								map:
									"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk90aGVyR2lmdEFtb3VudEdyb3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd1QyIsImZpbGUiOiJPdGhlckdpZnRBbW91bnRHcm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBPdGhlckdpZnRBbW91bnRHcm91cCA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRsaW5lLWhlaWdodDogdW5zZXQ7XG5cdCYuYXNrYXJyYXktLW90aGVyIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRoZWlnaHQ6IDgwcHg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRtYXJnaW46IDIwcHggYXV0bztcblx0XHRtYXJnaW4tdG9wOiAwO1xuXHR9XG5cdGRpdiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRoZWlnaHQ6IDgwcHg7XG5cdFx0bGluZS1oZWlnaHQ6IHVuc2V0O1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bGFiZWwge1xuXHRcdFx0Zm9udC1zaXplOiBjYWxjKDE5cHggKiAwLjcpO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGxlZnQ6IDUwJTtcblx0XHRcdHRvcDogY2FsYygxMDAlIC0gKDE5cHggKiAwLjUpKTtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHR9XG5cdH1cblx0ZGl2LmFza2FycmF5X19mb3JtLWdyb3VwLS1vdGhlciB7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRpbnB1dCB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRhcHBlYXJhbmNlOiBub25lO1xuXHRcdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG5cdFx0XHRoZWlnaHQ6IGNhbGMoMTlweCAqIDIuNSk7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LFxuXHRcdFx0XHRjb2xvciAyMDBtcyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlLWluLW91dDtcblx0XHRcdHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAyMDBtcyBlYXNlLWluLW91dCwgY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG5cdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0Zm9udC1zaXplOiBjYWxjKDE5cHggKiAxLjQpO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdG1heC13aWR0aDogMjIwcHg7XG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdH1cblx0XHRpbnB1dDpob3Zlcixcblx0XHRpbnB1dDphY3RpdmUsXG5cdFx0aW5wdXQ6Zm9jdXMge1xuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgIzMzMztcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHR9XG5cdFx0ZGl2Lm90aGVyLWFtdC1lcnJvciB7XG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0Y29sb3I6IGNyaW1zb247XG5cdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdGZvbnQtd2VpZ2h0OiA4MDA7XG5cdFx0XHRmb250LXNpemU6IGNhbGMoMTlweCAqIDAuNSk7XG5cdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRib3R0b206IGF1dG87XG5cdFx0XHR0b3A6IDE5cHg7XG5cdFx0XHRsZWZ0OiA1MCU7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cdFx0fVxuXHR9XG5cdGRpdi5hc2thcnJheV9fZm9ybS1ncm91cC0tdGFicyB7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdGxhYmVsIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcblx0XHRcdHRvcDogYXV0byAhaW1wb3J0YW50O1xuXHRcdFx0dHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG5cdFx0XHRmb250LXNpemU6IDE5cHg7XG5cdFx0XHRjb2xvcjogIzMzMztcblx0XHRcdGxpbmUtaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHRcdH1cblx0XHRkaXYuYXNrYXJyYXlfX2Zvcm0tZ3JvdXAtdGFicy1mbGV4LWNvbnRhaW5lciB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGRpdi5mb3JtLWdyb3VwLXRhYnMtLWRvbGxhciB7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0XHRtYXJnaW46IDAgNXB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRmb250LXNpemU6IDE5cHg7XG5cdFx0XHR9XG5cdFx0XHRpbnB1dCB7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0YXBwZWFyYW5jZTogbm9uZTtcblx0XHRcdFx0aGVpZ2h0OiBjYWxjKDE5cHggKiAyLjUpO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsXG5cdFx0XHRcdFx0Y29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAyMDBtcyBlYXNlLWluLW91dCwgY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlLWluLW91dDtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIzMzMztcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRjb2xvcjogIzMzMztcblx0XHRcdFx0Zm9udC1zaXplOiBjYWxjKDE5cHggKiAxLjQpO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdG1heC13aWR0aDogMjIwcHg7XG5cdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHR9XG5cdFx0XHRpbnB1dDpob3Zlcixcblx0XHRcdGlucHV0OmFjdGl2ZSxcblx0XHRcdGlucHV0OmZvY3VzIHtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIzMzMztcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHRcdH1cblx0XHRcdGRpdi5vdGhlci1hbXQtZXJyb3Ige1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGNvbG9yOiBjcmltc29uO1xuXHRcdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDgwMDtcblx0XHRcdFx0Zm9udC1zaXplOiBjYWxjKDE5cHggKiAwLjUpO1xuXHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRcdGJvdHRvbTogYXV0bztcblx0XHRcdFx0dG9wOiAxMDAlO1xuXHRcdFx0XHRsZWZ0OiA1MCU7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcblx0XHRcdGxhYmVsIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0fVxuXHRcdFx0ZGl2IGlucHV0IHtcblx0XHRcdFx0bWF4LXdpZHRoOiAxNjBweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZGl2LnNlbGVjdGVkIHtcblx0fVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgT3RoZXJHaWZ0QW1vdW50R3JvdXA7XG4iXX0= */",
						  }
				);
				var _default = OtherGiftAmountGroup;
				var _default2 = _default;
				exports.default = _default2;
				(function() {
					var reactHotLoader = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).default;

					if (!reactHotLoader) {
						return;
					}

					reactHotLoader.register(
						OtherGiftAmountGroup,
						"OtherGiftAmountGroup",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/OtherGiftAmountGroup.js"
					);
					reactHotLoader.register(
						_default,
						"default",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/OtherGiftAmountGroup.js"
					);
				})();

				(function() {
					var leaveModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).leaveModule;
					leaveModule && leaveModule(module);
				})();
			},
			{
				"@emotion/styled-base":
					"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js",
				"react-hot-loader": "node_modules/react-hot-loader/index.js",
				react: "node_modules/react/index.js",
			},
		],
		"src/Components/FormComponents/StyledComponents/AmountError.js": [
			function(require, module, exports) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.default = exports.AmountError = void 0;

				var _styledBase = _interopRequireDefault(
					require("@emotion/styled-base")
				);

				var _react = _interopRequireDefault(require("react"));

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				(function() {
					var enterModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).enterModule;
					enterModule && enterModule(module);
				})();

				var __signature__ =
					typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal.default.signature
						: function(a) {
								return a;
						  };

				var AmountError = (0, _styledBase.default)("div", {
					target: "e16mrpwz0",
					label: "AmountError",
				})(
					"development" === "production"
						? {
								name: "1be5tm8",
								styles:
									"box-sizing:border-box;position:absolute;color:crimson;width:auto;left:50%;transform:translateX(-50%);bottom:0;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;",
						  }
						: {
								name: "1be5tm8",
								styles:
									"box-sizing:border-box;position:absolute;color:crimson;width:auto;left:50%;transform:translateX(-50%);bottom:0;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;",
								map:
									"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFtb3VudEVycm9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdxQyIsImZpbGUiOiJBbW91bnRFcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgQW1vdW50RXJyb3IgPSBzdHlsZWQuZGl2YFxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGNvbG9yOiBjcmltc29uO1xuXHR3aWR0aDogYXV0bztcblx0bGVmdDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cdGJvdHRvbTogMDtcblx0Zm9udC13ZWlnaHQ6IDgwMDtcblx0Zm9udC1zaXplOiBjYWxjKDE5cHggKiAwLjUpO1xuXHRvcGFjaXR5OiAxO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRtYXgtd2lkdGg6IDEwMCU7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBBbW91bnRFcnJvcjtcbiJdfQ== */",
						  }
				);
				exports.AmountError = AmountError;
				var _default = AmountError;
				var _default2 = _default;
				exports.default = _default2;
				(function() {
					var reactHotLoader = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).default;

					if (!reactHotLoader) {
						return;
					}

					reactHotLoader.register(
						AmountError,
						"AmountError",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/AmountError.js"
					);
					reactHotLoader.register(
						_default,
						"default",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/AmountError.js"
					);
				})();

				(function() {
					var leaveModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).leaveModule;
					leaveModule && leaveModule(module);
				})();
			},
			{
				"@emotion/styled-base":
					"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js",
				"react-hot-loader": "node_modules/react-hot-loader/index.js",
				react: "node_modules/react/index.js",
			},
		],
		"src/Components/FormComponents/Layouts/GivingLayout.js": [
			function(require, module, exports) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.default = void 0;

				var _toConsumableArray2 = _interopRequireDefault(
					require("@babel/runtime/helpers/toConsumableArray")
				);

				var _classCallCheck2 = _interopRequireDefault(
					require("@babel/runtime/helpers/classCallCheck")
				);

				var _createClass2 = _interopRequireDefault(
					require("@babel/runtime/helpers/createClass")
				);

				var _possibleConstructorReturn2 = _interopRequireDefault(
					require("@babel/runtime/helpers/possibleConstructorReturn")
				);

				var _getPrototypeOf2 = _interopRequireDefault(
					require("@babel/runtime/helpers/getPrototypeOf")
				);

				var _assertThisInitialized2 = _interopRequireDefault(
					require("@babel/runtime/helpers/assertThisInitialized")
				);

				var _inherits2 = _interopRequireDefault(
					require("@babel/runtime/helpers/inherits")
				);

				var _core = require("@emotion/core");

				var _react = _interopRequireWildcard(require("react"));

				var _GivingFormProvider = require("../../Contexts/GivingFormProvider");

				var _MonthlyRadioBlock = _interopRequireDefault(
					require("../Blocks/MonthlyRadioBlock")
				);

				var _MonthlyTabBlock = _interopRequireDefault(
					require("../Blocks/MonthlyTabBlock")
				);

				var _CCInfoBlock = _interopRequireDefault(
					require("../Blocks/CCInfoBlock")
				);

				var _Divider = _interopRequireDefault(
					require("../StyledComponents/Divider")
				);

				var _FieldSet = _interopRequireDefault(
					require("../StyledComponents/FieldSet")
				);

				var _AskArray = _interopRequireDefault(
					require("../StyledComponents/AskArray")
				);

				var _FormHeader = _interopRequireDefault(
					require("../StyledComponents/FormHeader")
				);

				var _AskArrayBtn = _interopRequireDefault(
					require("../StyledComponents/AskArrayBtn")
				);

				var _OtherGiftAmountGroup = _interopRequireDefault(
					require("../StyledComponents/OtherGiftAmountGroup")
				);

				var _AmountError = _interopRequireDefault(
					require("../StyledComponents/AmountError")
				);

				function _interopRequireWildcard(obj) {
					if (obj && obj.__esModule) {
						return obj;
					} else {
						var newObj = {};
						if (obj != null) {
							for (var key in obj) {
								if (Object.prototype.hasOwnProperty.call(obj, key)) {
									var desc =
										Object.defineProperty && Object.getOwnPropertyDescriptor
											? Object.getOwnPropertyDescriptor(obj, key)
											: {};
									if (desc.get || desc.set) {
										Object.defineProperty(newObj, key, desc);
									} else {
										newObj[key] = obj[key];
									}
								}
							}
						}
						newObj.default = obj;
						return newObj;
					}
				}

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				(function() {
					var enterModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).enterModule;
					enterModule && enterModule(module);
				})();

				var __signature__ =
					typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal.default.signature
						: function(a) {
								return a;
						  };

				function getIndex(arr, amount) {
					return arr.findIndex(function(amt) {
						return +amt == +amount;
					});
				}

				var GivingLayout =
					/*#__PURE__*/
					(function(_Component) {
						(0, _inherits2.default)(GivingLayout, _Component);

						function GivingLayout(props) {
							var _this;

							(0, _classCallCheck2.default)(this, GivingLayout);
							_this = (0, _possibleConstructorReturn2.default)(
								this,
								(0, _getPrototypeOf2.default)(GivingLayout).call(this, props)
							);
							_this.otherAmountField = _react.default.createRef();
							_this.state = {
								prevIndex: null,
								selectedIndex: null,
								otherAmount: 0,
								otherAmountError: "",
							};
							_this.renderArray = _this.renderArray.bind(
								(0, _assertThisInitialized2.default)(_this)
							);
							_this.addToCart = _this.addToCart.bind(
								(0, _assertThisInitialized2.default)(_this)
							);
							_this.handleOtherAmt = _this.handleOtherAmt.bind(
								(0, _assertThisInitialized2.default)(_this)
							);
							_this.handleFocus = _this.handleFocus.bind(
								(0, _assertThisInitialized2.default)(_this)
							);
							return _this;
						}

						(0, _createClass2.default)(GivingLayout, [
							{
								key: "componentDidMount",
								value: function componentDidMount() {
									var amt = 0,
										arr = [];
									var _this$props = this.props,
										defaultAmount = _this$props.defaultAmount,
										defaultOption = _this$props.defaultOption,
										_this$props$givingOpt = _this$props.givingOptions,
										monthlyAmounts = _this$props$givingOpt.monthlyAmounts,
										singleAmounts = _this$props$givingOpt.singleAmounts,
										monthlyOption = _this$props$givingOpt.monthlyOption;
									var _this$context = this.context,
										initialized = _this$context.initialized,
										cart = _this$context.cart;

									if (!initialized) {
										if (defaultOption !== "") {
											arr =
												defaultOption == "monthly"
													? monthlyAmounts
													: singleAmounts;
										} else {
											arr = monthlyOption ? monthlyAmounts : singleAmounts;
										}

										amt = defaultAmount;
									} else {
										var items = (0, _toConsumableArray2.default)(cart.items);
										var pledgeFound = items.findIndex(function(el) {
											return el && el.type == "donation";
										});
										var monthly =
											pledgeFound > -1 ? items[pledgeFound].monthly : false;
										amt = items[pledgeFound].PledgeAmount;
										arr = monthly ? monthlyAmounts : singleAmounts;
									}

									if (amt > 0 && arr.length) {
										var index = getIndex(arr, amt);
										var selectedIndex = index >= 0 ? index : 99;

										if (selectedIndex >= 0) {
											// console.log({amt, index})
											this.addToCart(amt, selectedIndex);
										}
									}
								},
							},
							{
								key: "renderArray",
								value: function renderArray(amounts, selectedIndex, type) {
									var _this2 = this;

									return amounts.map(function(amount, i) {
										return (0, _core.jsx)(
											_AskArrayBtn.default,
											{
												key: "array".concat(i),
												className: "askbutton"
													.concat(type == "tabs" ? "__tabs" : "", " ")
													.concat(selectedIndex == i ? "selected" : ""),
												onClick: function onClick() {
													return _this2.addToCart(amount, i);
												},
											},
											(0, _core.jsx)(
												"div",
												{
													className: "askbutton__amt".concat(
														type == "tabs" ? "--tabs" : ""
													),
												},
												"$",
												amount
											)
										);
									});
								},
								/**
								 * Changes state on the arry to visibly display selected amount and adds donation amount to the cart
								 * @param {Number} amt - amount to be added to cart
								 * @param {Number} index - index of selected item or custom amount
								 */
							},
							{
								key: "addToCart",
								value: function addToCart(amt, index) {
									var _this3 = this;

									var _this$state = this.state,
										otherAmountError = _this$state.otherAmountError,
										selectedIndex = _this$state.selectedIndex;
									this.setState(
										{
											otherAmount: index == 99 ? amt : 0,
											selectedIndex: index,
											otherAmountError: index !== 99 ? "" : otherAmountError,
											prevIndex: selectedIndex,
										},
										function() {
											if (amt) {
												var _this3$props = _this3.props,
													monthlyChecked = _this3$props.monthlyChecked,
													_this3$props$givingOp = _this3$props.givingOptions,
													monthlyPledgeData =
														_this3$props$givingOp.monthlyPledgeData,
													singlePledgeData =
														_this3$props$givingOp.singlePledgeData;

												_this3.context.addToCart({
													type: "ADD_TO_CART",
													item: {
														type: "donation",
														PledgeAmount: amt,
														DetailCprojMail: monthlyChecked
															? monthlyPledgeData.DetailCprojMail
															: singlePledgeData.DetailCprojMail,
														DetailCprojCredit: monthlyChecked
															? monthlyPledgeData.DetailCprojCredit
															: singlePledgeData.DetailCprojCredit,
														DetailDescription: monthlyChecked
															? monthlyPledgeData.DetailDescription
															: singlePledgeData.DetailDescription,
														DetailName: monthlyChecked
															? monthlyPledgeData.DetailName
															: singlePledgeData.DetailName,
														monthly: monthlyChecked,
													},
												});
											} else {
												_this3.context.removeFromCart({
													type: "REMOVE_FROM_CART",
													itemType: "donation",
												});
											}
										}
									);
								},
							},
							{
								key: "handleFocus",
								value: function handleFocus(e) {
									var _this4 = this;

									this.setState(
										function(state, props) {
											if (state.selectedIndex !== 99) {
												return {
													selectedIndex: 99,
													prevIndex: state.selectedIndex,
												};
											}
										},
										function() {
											if (
												_this4.state.otherAmount == 0 &&
												_this4.props.givingInfo &&
												!_this4.props.givingInfo.amount
											) {
												_this4.context.removeFromCart("donation");
											}

											_this4.otherAmountField.current.focus();
										}
									);
								},
							},
							{
								key: "handleOtherAmt",
								value: function handleOtherAmt(e) {
									var _this5 = this;

									var selectedIndex = this.state.selectedIndex;
									var value = e.target.value.trim();
									var isValid = /^[0-9]{1,}$/.test(value);

									if (isValid && value > 0) {
										this.setState(
											{
												otherAmountError: "",
												otherAmount: value,
												prevIndex: selectedIndex,
											},
											function() {
												return _this5.addToCart(+value, 99);
											}
										);
									} else if (isValid) {
										this.setState(
											{
												otherAmount: 0,
												selectedIndex: null,
												otherAmountError: "",
												prevIndex: selectedIndex,
											},
											function() {
												return _this5.context.removeFromCart({
													type: "REMOVE_FROM_CART",
													itemType: "donation",
												});
											}
										);
									} else {
										this.setState({
											otherAmount: 0,
											otherAmountError:
												value !== "" ? "Number greater than Zero Only" : "",
											prevIndex: selectedIndex,
										});
									}
								},
							},
							{
								key: "render",
								value: function render() {
									var _this$props2 = this.props,
										givingFormat = _this$props2.givingFormat,
										amountError = _this$props2.amountError,
										monthlyChecked = _this$props2.monthlyChecked,
										Monthlypledgeday = _this$props2.Monthlypledgeday,
										handleInputChange = _this$props2.handleInputChange,
										handleRadioClick = _this$props2.handleRadioClick,
										_this$props2$givingOp = _this$props2.givingOptions,
										singleOption = _this$props2$givingOp.singleOption,
										monthlyOption = _this$props2$givingOp.monthlyOption,
										monthlyAmounts = _this$props2$givingOp.monthlyAmounts,
										singleAmounts = _this$props2$givingOp.singleAmounts;
									var _this$state2 = this.state,
										otherAmount = _this$state2.otherAmount,
										otherAmountError = _this$state2.otherAmountError,
										selectedIndex = _this$state2.selectedIndex,
										prevIndex = _this$state2.prevIndex;
									var _this$context$givingI = this.context.givingInfo,
										amount = _this$context$givingI.amount,
										isMonthly = _this$context$givingI.isMonthly;
									var key = "controlled"; // console.log({amount, selectedIndex})

									if (amount) {
										var index = isMonthly
											? monthlyAmounts.indexOf(amount)
											: singleAmounts.indexOf(amount);
										selectedIndex = index > -1 ? index : 99;
										otherAmount = amount;
										monthlyChecked = isMonthly;
									} else {
										otherAmount =
											selectedIndex == 99
												? otherAmount
												: monthlyChecked
												? monthlyAmounts[selectedIndex]
												: singleAmounts[selectedIndex];
										key =
											selectedIndex == 99 || selectedIndex === null
												? key
												: (monthlyChecked
														? monthlyAmounts[selectedIndex]
														: singleAmounts[selectedIndex]) + "-key";
									} // console.log({amount, otherAmount, selectedIndex, key})

									return givingFormat === "buttons"
										? (0, _core.jsx)(
												_FieldSet.default,
												null,
												(0, _core.jsx)(
													"legend",
													null,
													"Giving Amounts and Giving Options"
												),
												(0, _core.jsx)(
													_FormHeader.default,
													{
														className: "askarray__header",
													},
													"Select A ",
													monthlyChecked ? "Monthly" : "Single",
													" Donation Amount"
												),
												(0, _core.jsx)(
													_AskArray.default,
													{
														id: "AskArray",
														className: "askarray",
													},
													monthlyOption && monthlyChecked
														? this.renderArray(
																monthlyAmounts,
																selectedIndex,
																givingFormat
														  )
														: null,
													singleOption && !monthlyChecked
														? this.renderArray(
																singleAmounts,
																selectedIndex,
																givingFormat
														  )
														: null
												),
												(0, _core.jsx)(
													_OtherGiftAmountGroup.default,
													{
														id: "OtherGiftAmount",
														className: "askarray--other",
													},
													(0, _core.jsx)(
														"div",
														{
															id: "OtherAmount",
															className: "askarray__form-group--other ".concat(
																selectedIndex == 99 ? "selected" : ""
															),
														},
														(0, _core.jsx)(
															"label",
															{
																className: "form-group__other-input--label",
																htmlFor: "other-amt-input",
															},
															"Other Amount"
														),
														(0, _core.jsx)("input", {
															key: key,
															ref: this.otherAmountField,
															className: "form-group__other-input",
															name: "other-amt-input",
															onChange: this.handleOtherAmt,
															value: otherAmount == 0 ? "" : otherAmount,
															onFocus: this.handleFocus,
														}),
														(0, _core.jsx)(
															"div",
															{
																className: "other-amt-error",
															},
															otherAmountError
														)
													)
												),
												(0, _core.jsx)(
													_AmountError.default,
													{
														className: "amount-error",
													},
													amountError
												),
												monthlyOption &&
													singleOption &&
													(0, _core.jsx)(_MonthlyRadioBlock.default, {
														Monthlypledgeday: Monthlypledgeday,
														monthlyChecked: monthlyChecked,
														handleInputChange: handleInputChange,
														handleRadioClick: handleRadioClick,
													})
										  )
										: (0, _core.jsx)(
												_FieldSet.default,
												null,
												(0, _core.jsx)(
													"legend",
													null,
													"Giving Amounts and Giving Options"
												),
												(0, _core.jsx)(
													_FormHeader.default,
													{
														className: "askarray__header",
													},
													"Select A ",
													monthlyChecked ? "Monthly" : "Single",
													" Donation Amount"
												),
												monthlyOption &&
													singleOption &&
													(0, _core.jsx)(_MonthlyTabBlock.default, {
														monthlyChecked: monthlyChecked,
														handleTabClick: handleRadioClick,
													}),
												(0, _core.jsx)(
													_AskArray.default,
													{
														id: "AskArray",
														className: "askarray__tabs",
													},
													monthlyOption && monthlyChecked
														? this.renderArray(
																monthlyAmounts,
																selectedIndex,
																givingFormat
														  )
														: null,
													singleOption && !monthlyChecked
														? this.renderArray(
																singleAmounts,
																selectedIndex,
																givingFormat
														  )
														: null
												),
												(0, _core.jsx)(
													_OtherGiftAmountGroup.default,
													{
														id: "OtherGiftAmount",
														className: "askarray__tabs--other",
													},
													(0, _core.jsx)(
														"div",
														{
															id: "OtherAmount",
															className: "askarray__form-group--tabs ".concat(
																selectedIndex == 99 ? " styles.selected" : ""
															),
														},
														(0, _core.jsx)(
															"label",
															{
																className:
																	"form-group-tabs__other-input--label",
																htmlFor: "other-amt-input",
															},
															"Or specify amount"
														),
														(0, _core.jsx)(
															"div",
															{
																className:
																	"askarray__form-group-tabs-flex-container",
															},
															(0, _core.jsx)(
																"div",
																{
																	className: "form-group-tabs--dollar",
																},
																"$"
															),
															(0, _core.jsx)("input", {
																key: key,
																ref: this.otherAmountField,
																className: "form-group-tabs__other-input",
																name: "other-amt-input",
																onChange: this.handleOtherAmt,
																value: otherAmount == 0 ? "" : otherAmount,
																onFocus: this.handleFocus,
															}),
															(0, _core.jsx)(
																"div",
																{
																	className: "other-amt-error",
																},
																otherAmountError
															)
														)
													)
												),
												monthlyChecked &&
													(0, _core.jsx)(_CCInfoBlock.default, {
														Monthlypledgeday: Monthlypledgeday,
													}),
												(0, _core.jsx)(
													_AmountError.default,
													{
														className: "amount-error",
													},
													amountError
												)
										  );
								},
							},
							{
								key: "__reactstandin__regenerateByEval",
								// @ts-ignore
								value: function __reactstandin__regenerateByEval(key, code) {
									// @ts-ignore
									this[key] = eval(code);
								},
							},
						]);
						return GivingLayout;
					})(_react.Component);

				GivingLayout.contextType = _GivingFormProvider.GivingFormContext;
				var _default = GivingLayout;
				var _default2 = _default;
				exports.default = _default2;
				(function() {
					var reactHotLoader = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).default;

					if (!reactHotLoader) {
						return;
					}

					reactHotLoader.register(
						getIndex,
						"getIndex",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Layouts/GivingLayout.js"
					);
					reactHotLoader.register(
						GivingLayout,
						"GivingLayout",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Layouts/GivingLayout.js"
					);
					reactHotLoader.register(
						_default,
						"default",
						"/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Layouts/GivingLayout.js"
					);
				})();

				(function() {
					var leaveModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).leaveModule;
					leaveModule && leaveModule(module);
				})();
			},
			{
				"@babel/runtime/helpers/toConsumableArray":
					"node_modules/@babel/runtime/helpers/toConsumableArray.js",
				"@babel/runtime/helpers/classCallCheck":
					"node_modules/@babel/runtime/helpers/classCallCheck.js",
				"@babel/runtime/helpers/createClass":
					"node_modules/@babel/runtime/helpers/createClass.js",
				"@babel/runtime/helpers/possibleConstructorReturn":
					"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js",
				"@babel/runtime/helpers/getPrototypeOf":
					"node_modules/@babel/runtime/helpers/getPrototypeOf.js",
				"@babel/runtime/helpers/assertThisInitialized":
					"node_modules/@babel/runtime/helpers/assertThisInitialized.js",
				"@babel/runtime/helpers/inherits":
					"node_modules/@babel/runtime/helpers/inherits.js",
				"@emotion/core": "node_modules/@emotion/core/dist/core.browser.esm.js",
				"react-hot-loader": "node_modules/react-hot-loader/index.js",
				react: "node_modules/react/index.js",
				"../../Contexts/GivingFormProvider":
					"src/Components/Contexts/GivingFormProvider.js",
				"../Blocks/MonthlyRadioBlock":
					"src/Components/FormComponents/Blocks/MonthlyRadioBlock.js",
				"../Blocks/MonthlyTabBlock":
					"src/Components/FormComponents/Blocks/MonthlyTabBlock.js",
				"../Blocks/CCInfoBlock":
					"src/Components/FormComponents/Blocks/CCInfoBlock.js",
				"../StyledComponents/Divider":
					"src/Components/FormComponents/StyledComponents/Divider.js",
				"../StyledComponents/FieldSet":
					"src/Components/FormComponents/StyledComponents/FieldSet.js",
				"../StyledComponents/AskArray":
					"src/Components/FormComponents/StyledComponents/AskArray.js",
				"../StyledComponents/FormHeader":
					"src/Components/FormComponents/StyledComponents/FormHeader.js",
				"../StyledComponents/AskArrayBtn":
					"src/Components/FormComponents/StyledComponents/AskArrayBtn.js",
				"../StyledComponents/OtherGiftAmountGroup":
					"src/Components/FormComponents/StyledComponents/OtherGiftAmountGroup.js",
				"../StyledComponents/AmountError":
					"src/Components/FormComponents/StyledComponents/AmountError.js",
			},
		],
		"src/Components/Forms/GivingForm.js": [
			function(require, module, exports) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.default = void 0;

				var _toConsumableArray2 = _interopRequireDefault(
					require("@babel/runtime/helpers/toConsumableArray")
				);

				var _regenerator = _interopRequireDefault(
					require("@babel/runtime/regenerator")
				);

				var _asyncToGenerator2 = _interopRequireDefault(
					require("@babel/runtime/helpers/asyncToGenerator")
				);

				var _classCallCheck2 = _interopRequireDefault(
					require("@babel/runtime/helpers/classCallCheck")
				);

				var _createClass2 = _interopRequireDefault(
					require("@babel/runtime/helpers/createClass")
				);

				var _possibleConstructorReturn2 = _interopRequireDefault(
					require("@babel/runtime/helpers/possibleConstructorReturn")
				);

				var _getPrototypeOf3 = _interopRequireDefault(
					require("@babel/runtime/helpers/getPrototypeOf")
				);

				var _inherits2 = _interopRequireDefault(
					require("@babel/runtime/helpers/inherits")
				);

				var _core = require("@emotion/core");

				var _react = _interopRequireWildcard(require("react"));

				var _GivingFormProvider = require("../Contexts/GivingFormProvider");

				var _FormPanel = _interopRequireDefault(
					require("../FormComponents/StyledComponents/FormPanel")
				);

				var _FieldSet = _interopRequireDefault(
					require("../FormComponents/StyledComponents/FieldSet")
				);

				var _FormHeader = _interopRequireDefault(
					require("../FormComponents/StyledComponents/FormHeader")
				);

				var _GivingLayout = _interopRequireDefault(
					require("../FormComponents/Layouts/GivingLayout")
				);

				var _ProductLayout = _interopRequireDefault(
					require("../FormComponents/Layouts/ProductLayout")
				);

				var _DesignationBlock = _interopRequireDefault(
					require("../FormComponents/Blocks/DesignationBlock")
				);

				var _NameBlock = _interopRequireDefault(
					require("../FormComponents/Blocks/NameBlock")
				);

				var _ShippingAddressBlock = _interopRequireDefault(
					require("../FormComponents/Blocks/ShippingAddressBlock")
				);

				var _AddressBlock = _interopRequireDefault(
					require("../FormComponents/Blocks/AddressBlock")
				);

				var _FormOptionsBlock = _interopRequireDefault(
					require("../FormComponents/Blocks/FormOptionsBlock")
				);

				var _SubmitButton = _interopRequireDefault(
					require("../FormComponents/FunctionalComponents/SubmitButton")
				);

				var _Spinner = _interopRequireDefault(
					require("../StyledComponents/Spinner")
				);

				var _FormWrapper = _interopRequireDefault(
					require("../StyledComponents/FormWrapper")
				);

				function _interopRequireWildcard(obj) {
					if (obj && obj.__esModule) {
						return obj;
					} else {
						var newObj = {};
						if (obj != null) {
							for (var key in obj) {
								if (Object.prototype.hasOwnProperty.call(obj, key)) {
									var desc =
										Object.defineProperty && Object.getOwnPropertyDescriptor
											? Object.getOwnPropertyDescriptor(obj, key)
											: {};
									if (desc.get || desc.set) {
										Object.defineProperty(newObj, key, desc);
									} else {
										newObj[key] = obj[key];
									}
								}
							}
						}
						newObj.default = obj;
						return newObj;
					}
				}

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				(function() {
					var enterModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).enterModule;
					enterModule && enterModule(module);
				})();

				var __signature__ =
					typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal.default.signature
						: function(a) {
								return a;
						  };

				var GivingForm =
					/*#__PURE__*/
					(function(_Component) {
						(0, _inherits2.default)(GivingForm, _Component);

						function GivingForm() {
							var _getPrototypeOf2;

							var _this;

							(0, _classCallCheck2.default)(this, GivingForm);

							for (
								var _len = arguments.length, args = new Array(_len), _key = 0;
								_key < _len;
								_key++
							) {
								args[_key] = arguments[_key];
							}

							_this = (0, _possibleConstructorReturn2.default)(
								this,
								(_getPrototypeOf2 = (0, _getPrototypeOf3.default)(
									GivingForm
								)).call.apply(_getPrototypeOf2, [this].concat(args))
							);
							_this.hasMonthlyAmounts =
								_this.props.monthlyAmounts && _this.props.monthlyAmounts.length;
							_this.hasSingleAmounts =
								_this.props.singleAmounts && _this.props.singleAmounts.length;
							_this.state = {
								monthlyChecked:
									_this.props.defaultOption == "monthly" ||
									(_this.hasMonthlyAmounts && !_this.hasSingleAmounts),
								totalGift: 0,
							};

							_this.handleRadioClick = function(e) {
								var id = e.target.id;
								var _this$props = _this.props,
									singlePledgeData = _this$props.singlePledgeData,
									monthlyPledgeData = _this$props.monthlyPledgeData;

								_this.setState(
									{
										monthlyChecked: id !== "singlegift",
									},
									function() {
										return _this.context.updateGivingType({
											type: "UPDATE_GIVING_TYPE",
											typeId: id,
											singlePledgeData: singlePledgeData,
											monthlyPledgeData: monthlyPledgeData,
											source: "radioClick",
										});
									}
								);
							};

							_this.handleInputChange = function(e) {
								var target = e.target;
								var value =
									target.type === "checkbox" ? target.checked : target.value;
								var name = target.name;

								_this.context.validateAndUpdateField({
									type: "UPDATE_FIELD",
									name: name,
									value: value,
								});
							};

							_this.handleSubmit =
								/*#__PURE__*/
								(function() {
									var _ref = (0, _asyncToGenerator2.default)(
										/*#__PURE__*/
										_regenerator.default.mark(function _callee(e) {
											return _regenerator.default.wrap(function _callee$(
												_context
											) {
												while (1) {
													switch ((_context.prev = _context.next)) {
														case 0:
															e.preventDefault();

															_this.context.submitGivingForm();

														case 2:
														case "end":
															return _context.stop();
													}
												}
											},
											_callee);
										})
									);

									return function(_x) {
										return _ref.apply(this, arguments);
									};
								})();

							_this.updateProducts = function(_ref2) {
								var idx = _ref2.idx,
									quantity = _ref2.quantity;
								// productInfo and productsOrdered to be used by Product Display to calculate a total donation
								var productInfo = (0, _toConsumableArray2.default)(
										_this.state.productInfo
									),
									productsOrdered = _this.state.productsOrdered;
								var found = productInfo.findIndex(function(prod) {
									return prod.idx === idx;
								});

								if (found > -1) {
									productInfo[found].quantity = quantity;
								} else {
									productInfo.push({
										idx: idx,
										quantity: quantity,
									});
								}

								var totalProducts = productInfo.reduce(function(a, b) {
									return a + b.quantity;
								}, 0);
								productsOrdered = totalProducts ? true : false; //update cart by removing all instances of this particular product and adding back new quantity if any

								var items = (0, _toConsumableArray2.default)(
									_this.state.cart.items
								);
								var products = _this.props.products;
								var _products$idx = products[idx],
									DetailName = _products$idx.DetailName,
									DetailCprojCredit = _products$idx.DetailCprojCredit,
									DetailCprojMail = _products$idx.DetailCprojMail,
									DetailDescription = _products$idx.DetailDescription,
									PledgeAmount = _products$idx.PledgeAmount;
								var newItems = items.filter(function(el) {
									return el.DetailDescription !== DetailDescription;
								});

								if (quantity) {
									newItems.push({
										type: "product",
										PledgeAmount: +PledgeAmount * quantity,
										DetailCprojMail: DetailCprojMail,
										DetailCprojCredit: DetailCprojCredit,
										DetailDescription: DetailDescription,
										DetailName: DetailName + "|" + quantity,
									});
								} // console.log({productInfo, productsOrdered, totalProducts, newItems})

								_this.setState({
									productInfo: productInfo,
									productsOrdered: productsOrdered,
									cart: {
										items: newItems,
									},
								});
							};

							_this.addToCart = function(item) {
								_this.context.addToCart({
									type: "ADD_TO_CART",
									item: item,
								});
							};

							_this.removeFromCart = function(itemType) {
								_this.context.removeFromCart({
									type: "REMOVE_TO_CART",
									itemType: itemType,
								});
							};

							return _this;
						}

						(0, _createClass2.default)(GivingForm, [
							{
								key: "componentDidMount",
								value: function componentDidMount() {
									if (!this.context.initialized) {
										var getDay = function getDay() {
											var date = new Date().getDate();
											return date >= 2 && date <= 28 ? date : 2;
										};

										var fields = {
											Zip: "",
											Monthlypledgeday: getDay(),
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
											savePersonalInfo: true,
											ShipToYes: false,
											ShipToName: "",
											ShipToAddress1: "",
											ShipToAddress2: "",
											ShipToCity: "",
											ShipToCountry: "",
											ShipToZip: "",
											ShipToState: "",
										};
										var errors = {};

										for (var field in fields) {
											errors[field] = "";
										}

										errors.amount = "";
										this.context.initFields({
											type: "INIT_FORM_STATE",
											fields: fields,
											errors: errors,
											allowMonthlyDesignations: this.props
												.allowMonthlyDesignations,
										});
									}

									try {
										var monthlyChecked = this.context.loadLS({
											type: "LOAD",
										});
										this.setState({
											monthlyChecked: monthlyChecked,
										});
									} catch (err) {
										console.error(err.message);
										console.error(err.stack);
									}
								},
							},
							{
								key: "componentWillUnmount",
								value: (function() {
									var _componentWillUnmount = (0, _asyncToGenerator2.default)(
										/*#__PURE__*/
										_regenerator.default.mark(function _callee2() {
											var savePersonalInfo, days, lifetime;
											return _regenerator.default.wrap(
												function _callee2$(_context2) {
													while (1) {
														switch ((_context2.prev = _context2.next)) {
															case 0:
																// if user has selected to save personal info,
																savePersonalInfo = this.context.fields
																	.savePersonalInfo;

																if (savePersonalInfo) {
																	days = 30;
																	lifetime = days * 24 * 60 * 60 * 1000;
																	this.context.saveLS(lifetime, "info");
																} else {
																	// otherwise remove any stored data from local storage
																	this.context.removeOneLS("info");
																}

															case 2:
															case "end":
																return _context2.stop();
														}
													}
												},
												_callee2,
												this
											);
										})
									);

									function componentWillUnmount() {
										return _componentWillUnmount.apply(this, arguments);
									}

									return componentWillUnmount;
								})(),
							},
							{
								key: "render",
								value: function render() {
									var _this$props2 = this.props,
										formTitle = _this$props2.formTitle,
										submitButtonText = _this$props2.submitButtonText,
										showGivingArray = _this$props2.showGivingArray,
										givingFormat = _this$props2.givingFormat,
										productFormat = _this$props2.productFormat,
										monthlyOption = _this$props2.monthlyOption,
										singleOption = _this$props2.singleOption,
										monthlyAmounts = _this$props2.monthlyAmounts,
										singleAmounts = _this$props2.singleAmounts,
										designations = _this$props2.designations,
										monthlyPledgeData = _this$props2.monthlyPledgeData,
										singlePledgeData = _this$props2.singlePledgeData,
										products = _this$props2.products,
										additionalGift = _this$props2.additionalGift,
										getShippingAddress = _this$props2.getShippingAddress,
										allowInternational = _this$props2.allowInternational,
										getPhone = _this$props2.getPhone,
										getHonorific = _this$props2.getHonorific,
										getSuffix = _this$props2.getSuffix,
										getMiddleName = _this$props2.getMiddleName,
										getSpouseInfo = _this$props2.getSpouseInfo,
										defaultAmount = _this$props2.defaultAmount,
										defaultOption = _this$props2.defaultOption;
									var givingOptions = {
											monthlyOption: monthlyOption,
											singleOption: singleOption,
											monthlyAmounts: monthlyAmounts ? monthlyAmounts : [],
											singleAmounts: singleAmounts ? singleAmounts : [],
											designations: designations ? designations : [],
											monthlyPledgeData: monthlyPledgeData,
											singlePledgeData: singlePledgeData,
										},
										productOptions = {
											products: products ? products : [],
											numProducts:
												products && products.length ? products.length : 0,
											additionalGift: additionalGift,
										};
									var monthlyChecked = this.state.monthlyChecked;
									var _this$context = this.context,
										errors = _this$context.errors,
										fields = _this$context.fields,
										initialized = _this$context.initialized,
										submitting = _this$context.submitting,
										submitted = _this$context.submitted; // console.log({fields, errors})

									var hasErrors =
										Object.values(errors).filter(function(val) {
											return val && val.length > 0;
										}).length > 0;
									return !submitted
										? (0, _core.jsx)(
												_FormWrapper.default,
												null,
												(0, _core.jsx)(
													"form",
													{
														id: "react-giving-form",
														autoComplete: "off",
														onSubmit: this.handleSubmit,
													},
													(0, _core.jsx)(
														_FormHeader.default,
														{
															className: "form-title form-header",
														},
														formTitle
													),
													showGivingArray &&
														(0, _core.jsx)(
															_FormPanel.default,
															{
																className: "form-panel",
															},
															(0, _core.jsx)(_GivingLayout.default, {
																givingFormat: givingFormat,
																defaultAmount: defaultAmount,
																defaultOption: defaultOption,
																givingOptions: givingOptions,
																handleRadioClick: this.handleRadioClick,
																amountError: errors.amount,
																monthlyChecked: monthlyChecked,
																Monthlypledgeday: fields.Monthlypledgeday,
																monthlyOption: monthlyOption,
																singleOption: singleOption,
															})
														),
													designations &&
														designations.length > 0 &&
														(0, _core.jsx)(
															_FormPanel.default,
															{
																className: "form-panel",
															},
															(0, _core.jsx)(_DesignationBlock.default, {
																designations: designations,
															})
														),
													productOptions.numProducts > 0 &&
														(0, _core.jsx)(
															_FormPanel.default,
															{
																className: "form-panel",
															},
															(0, _core.jsx)(_ProductLayout.default, {
																productFormat: productFormat,
																productOptions: productOptions,
																updateProducts: this.updateProducts,
															})
														),
													initialized
														? (0, _core.jsx)(
																_FormPanel.default,
																{
																	className: "form-panel",
																},
																(0, _core.jsx)(
																	_FieldSet.default,
																	null,
																	(0, _core.jsx)(
																		"legend",
																		null,
																		"Name and Billing Address Block"
																	),
																	(0, _core.jsx)(
																		_FormPanel.default,
																		{
																			className: "name-address__info",
																		},
																		(0, _core.jsx)(
																			_FormHeader.default,
																			{
																				className: "form-header",
																			},
																			"Please Enter Your Billing Information"
																		),
																		(0, _core.jsx)(_NameBlock.default, {
																			fields: fields,
																			errors: errors,
																			getHonorific: getHonorific,
																			getMiddleName: getMiddleName,
																			getSuffix: getSuffix,
																			getSpouseInfo: getSpouseInfo,
																			handleInputChange: this.handleInputChange,
																			type: "Name",
																		}),
																		(0, _core.jsx)(_AddressBlock.default, {
																			fields: fields,
																			errors: errors,
																			handleInputChange: this.handleInputChange,
																			getAddress: true,
																			getPhone: getPhone,
																			allowInternational: allowInternational,
																			type: "Billing",
																		})
																	)
																),
																getShippingAddress &&
																	(0, _core.jsx)(
																		_FieldSet.default,
																		null,
																		(0, _core.jsx)(
																			"legend",
																			null,
																			"Shipping Address Block"
																		),
																		(0, _core.jsx)(
																			_FormPanel.default,
																			{
																				className:
																					"shipping-address__container",
																			},
																			(0, _core.jsx)(
																				_FormOptionsBlock.default,
																				{
																					id: "ShipToYes",
																					checked: fields.ShipToYes,
																					handleInputChange: this
																						.handleInputChange,
																					label:
																						"\xA0My shipping address is different than my billing address.",
																				}
																			),
																			fields.ShipToYes &&
																				(0, _core.jsx)(
																					_ShippingAddressBlock.default,
																					{
																						fields: fields,
																						errors: errors,
																						handleInputChange: this
																							.handleInputChange,
																						allowInternational: allowInternational,
																					}
																				)
																		)
																	),
																(0, _core.jsx)(
																	_FieldSet.default,
																	null,
																	(0, _core.jsx)(
																		"legend",
																		null,
																		"Save Personal Info Block"
																	),
																	(0, _core.jsx)(_FormOptionsBlock.default, {
																		id: "savePersonalInfo",
																		checked: fields.savePersonalInfo,
																		handleInputChange: this.handleInputChange,
																		label:
																			"\xA0Remember my name and address next time",
																	})
																),
																(0, _core.jsx)(
																	_FieldSet.default,
																	null,
																	(0, _core.jsx)(
																		"legend",
																		null,
																		"Form Submit Block"
																	),
																	(0, _core.jsx)(_SubmitButton.default, {
																		hasErrors: hasErrors,
																		error: errors.amount,
																		handleSubmit: this.handleSubmit,
																		submitting: submitting,
																		value: submitButtonText,
																	})
																)
														  )
														: (0, _core.jsx)(
																_FormPanel.default,
																{
																	className: "form-panel",
																},
																(0, _core.jsx)(_Spinner.default, null)
														  )
												)
										  )
										: null;
								},
							},
							{
								key: "__reactstandin__regenerateByEval",
								// @ts-ignore
								value: function __reactstandin__regenerateByEval(key, code) {
									// @ts-ignore
									this[key] = eval(code);
								},
							},
						]);
						return GivingForm;
					})(_react.Component);

				GivingForm.contextType = _GivingFormProvider.GivingFormContext;
				var _default = GivingForm;
				var _default2 = _default;
				exports.default = _default2;
				(function() {
					var reactHotLoader = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).default;

					if (!reactHotLoader) {
						return;
					}

					reactHotLoader.register(
						GivingForm,
						"GivingForm",
						"/Users/wehand/Code/react-form-drupal/src/Components/Forms/GivingForm.js"
					);
					reactHotLoader.register(
						_default,
						"default",
						"/Users/wehand/Code/react-form-drupal/src/Components/Forms/GivingForm.js"
					);
				})();

				(function() {
					var leaveModule = (typeof reactHotLoaderGlobal !== "undefined"
						? reactHotLoaderGlobal
						: require("react-hot-loader")
					).leaveModule;
					leaveModule && leaveModule(module);
				})();
			},
			{
				"@babel/runtime/helpers/toConsumableArray":
					"node_modules/@babel/runtime/helpers/toConsumableArray.js",
				"@babel/runtime/regenerator":
					"node_modules/@babel/runtime/regenerator/index.js",
				"@babel/runtime/helpers/asyncToGenerator":
					"node_modules/@babel/runtime/helpers/asyncToGenerator.js",
				"@babel/runtime/helpers/classCallCheck":
					"node_modules/@babel/runtime/helpers/classCallCheck.js",
				"@babel/runtime/helpers/createClass":
					"node_modules/@babel/runtime/helpers/createClass.js",
				"@babel/runtime/helpers/possibleConstructorReturn":
					"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js",
				"@babel/runtime/helpers/getPrototypeOf":
					"node_modules/@babel/runtime/helpers/getPrototypeOf.js",
				"@babel/runtime/helpers/inherits":
					"node_modules/@babel/runtime/helpers/inherits.js",
				"@emotion/core": "node_modules/@emotion/core/dist/core.browser.esm.js",
				"react-hot-loader": "node_modules/react-hot-loader/index.js",
				react: "node_modules/react/index.js",
				"../Contexts/GivingFormProvider":
					"src/Components/Contexts/GivingFormProvider.js",
				"../FormComponents/StyledComponents/FormPanel":
					"src/Components/FormComponents/StyledComponents/FormPanel.js",
				"../FormComponents/StyledComponents/FieldSet":
					"src/Components/FormComponents/StyledComponents/FieldSet.js",
				"../FormComponents/StyledComponents/FormHeader":
					"src/Components/FormComponents/StyledComponents/FormHeader.js",
				"../FormComponents/Layouts/GivingLayout":
					"src/Components/FormComponents/Layouts/GivingLayout.js",
				"../FormComponents/Layouts/ProductLayout":
					"src/Components/FormComponents/Layouts/ProductLayout.js",
				"../FormComponents/Blocks/DesignationBlock":
					"src/Components/FormComponents/Blocks/DesignationBlock.js",
				"../FormComponents/Blocks/NameBlock":
					"src/Components/FormComponents/Blocks/NameBlock.js",
				"../FormComponents/Blocks/ShippingAddressBlock":
					"src/Components/FormComponents/Blocks/ShippingAddressBlock.js",
				"../FormComponents/Blocks/AddressBlock":
					"src/Components/FormComponents/Blocks/AddressBlock.js",
				"../FormComponents/Blocks/FormOptionsBlock":
					"src/Components/FormComponents/Blocks/FormOptionsBlock.js",
				"../FormComponents/FunctionalComponents/SubmitButton":
					"src/Components/FormComponents/FunctionalComponents/SubmitButton.js",
				"../StyledComponents/Spinner":
					"src/Components/StyledComponents/Spinner.js",
				"../StyledComponents/FormWrapper":
					"src/Components/StyledComponents/FormWrapper.js",
			},
		],
		"node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [
			function(require, module, exports) {
				var global = arguments[3];
				var OVERLAY_ID = "__parcel__error__overlay__";
				var OldModule = module.bundle.Module;

				function Module(moduleName) {
					OldModule.call(this, moduleName);
					this.hot = {
						data: module.bundle.hotData,
						_acceptCallbacks: [],
						_disposeCallbacks: [],
						accept: function(fn) {
							this._acceptCallbacks.push(fn || function() {});
						},
						dispose: function(fn) {
							this._disposeCallbacks.push(fn);
						},
					};
					module.bundle.hotData = null;
				}

				module.bundle.Module = Module;
				var checkedAssets, assetsToAccept;
				var parent = module.bundle.parent;

				if (
					(!parent || !parent.isParcelRequire) &&
					typeof WebSocket !== "undefined"
				) {
					var hostname = "" || location.hostname;
					var protocol = location.protocol === "https:" ? "wss" : "ws";
					var ws = new WebSocket(
						protocol + "://" + hostname + ":" + "65273" + "/"
					);

					ws.onmessage = function(event) {
						checkedAssets = {};
						assetsToAccept = [];
						var data = JSON.parse(event.data);

						if (data.type === "update") {
							var handled = false;
							data.assets.forEach(function(asset) {
								if (!asset.isNew) {
									var didAccept = hmrAcceptCheck(
										global.parcelRequire,
										asset.id
									);

									if (didAccept) {
										handled = true;
									}
								}
							}); // Enable HMR for CSS by default.

							handled =
								handled ||
								data.assets.every(function(asset) {
									return asset.type === "css" && asset.generated.js;
								});

							if (handled) {
								console.clear();
								data.assets.forEach(function(asset) {
									hmrApply(global.parcelRequire, asset);
								});
								assetsToAccept.forEach(function(v) {
									hmrAcceptRun(v[0], v[1]);
								});
							} else {
								window.location.reload();
							}
						}

						if (data.type === "reload") {
							ws.close();

							ws.onclose = function() {
								location.reload();
							};
						}

						if (data.type === "error-resolved") {
							console.log("[parcel] ✨ Error resolved");
							removeErrorOverlay();
						}

						if (data.type === "error") {
							console.error(
								"[parcel] 🚨  " + data.error.message + "\n" + data.error.stack
							);
							removeErrorOverlay();
							var overlay = createErrorOverlay(data);
							document.body.appendChild(overlay);
						}
					};
				}

				function removeErrorOverlay() {
					var overlay = document.getElementById(OVERLAY_ID);

					if (overlay) {
						overlay.remove();
					}
				}

				function createErrorOverlay(data) {
					var overlay = document.createElement("div");
					overlay.id = OVERLAY_ID; // html encode message and stack trace

					var message = document.createElement("div");
					var stackTrace = document.createElement("pre");
					message.innerText = data.error.message;
					stackTrace.innerText = data.error.stack;
					overlay.innerHTML =
						'<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' +
						'<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' +
						'<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' +
						'<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' +
						message.innerHTML +
						"</div>" +
						"<pre>" +
						stackTrace.innerHTML +
						"</pre>" +
						"</div>";
					return overlay;
				}

				function getParents(bundle, id) {
					var modules = bundle.modules;

					if (!modules) {
						return [];
					}

					var parents = [];
					var k, d, dep;

					for (k in modules) {
						for (d in modules[k][1]) {
							dep = modules[k][1][d];

							if (
								dep === id ||
								(Array.isArray(dep) && dep[dep.length - 1] === id)
							) {
								parents.push(k);
							}
						}
					}

					if (bundle.parent) {
						parents = parents.concat(getParents(bundle.parent, id));
					}

					return parents;
				}

				function hmrApply(bundle, asset) {
					var modules = bundle.modules;

					if (!modules) {
						return;
					}

					if (modules[asset.id] || !bundle.parent) {
						var fn = new Function(
							"require",
							"module",
							"exports",
							asset.generated.js
						);
						asset.isNew = !modules[asset.id];
						modules[asset.id] = [fn, asset.deps];
					} else if (bundle.parent) {
						hmrApply(bundle.parent, asset);
					}
				}

				function hmrAcceptCheck(bundle, id) {
					var modules = bundle.modules;

					if (!modules) {
						return;
					}

					if (!modules[id] && bundle.parent) {
						return hmrAcceptCheck(bundle.parent, id);
					}

					if (checkedAssets[id]) {
						return;
					}

					checkedAssets[id] = true;
					var cached = bundle.cache[id];
					assetsToAccept.push([bundle, id]);

					if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
						return true;
					}

					return getParents(global.parcelRequire, id).some(function(id) {
						return hmrAcceptCheck(global.parcelRequire, id);
					});
				}

				function hmrAcceptRun(bundle, id) {
					var cached = bundle.cache[id];
					bundle.hotData = {};

					if (cached) {
						cached.hot.data = bundle.hotData;
					}

					if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
						cached.hot._disposeCallbacks.forEach(function(cb) {
							cb(bundle.hotData);
						});
					}

					delete bundle.cache[id];
					bundle(id);
					cached = bundle.cache[id];

					if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
						cached.hot._acceptCallbacks.forEach(function(cb) {
							cb();
						});

						return true;
					}
				}
			},
			{},
		],
	},
	{},
	["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"],
	null
);
//# sourceMappingURL=/GivingForm.7499cb88.js.map
