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
		"src/Components/Forms/SignUpForm.js": [
			function(require, module, exports) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.default = void 0;

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

				var _SignUpFormProvider = require("../Contexts/SignUpFormProvider");

				var _FormPanel = _interopRequireDefault(
					require("../FormComponents/StyledComponents/FormPanel")
				);

				var _FieldSet = _interopRequireDefault(
					require("../FormComponents/StyledComponents/FieldSet")
				);

				var _FormHeader = _interopRequireDefault(
					require("../FormComponents/StyledComponents/FormHeader")
				);

				var _NameBlock = _interopRequireDefault(
					require("../FormComponents/Blocks/NameBlock")
				);

				var _AddressBlock = _interopRequireDefault(
					require("../FormComponents/Blocks/AddressBlock")
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

				var SignUpForm =
					/*#__PURE__*/
					(function(_Component) {
						(0, _inherits2.default)(SignUpForm, _Component);

						function SignUpForm() {
							var _getPrototypeOf2;

							var _this;

							(0, _classCallCheck2.default)(this, SignUpForm);

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
									SignUpForm
								)).call.apply(_getPrototypeOf2, [this].concat(args))
							);

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

															_this.context.submitSignUpForm();

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

							return _this;
						}

						(0, _createClass2.default)(SignUpForm, [
							{
								key: "componentDidMount",
								value: function componentDidMount() {
									var fields = {
										Title: "",
										Firstname: "",
										Middlename: "",
										Lastname: "",
										Suffix: "",
										Spousename: "",
										Emailaddress: "",
										phone: "",
										savePersonalInfo: true,
									};

									if (this.context.getAddress) {
										fields.Address1 = "";
										fields.Address2 = "";
										fields.City = "";
										fields.State = "";
										fields.Country = this.props.allowInternational
											? ""
											: "United States";
									}

									var errors = {};

									for (var field in fields) {
										errors[field] = "";
									}

									this.context.initFields({
										type: "INIT_FORM_STATE",
										fields: fields,
										errors: errors,
									});
								},
							},
							{
								key: "render",
								value: function render() {
									var _this$props = this.props,
										formTitle = _this$props.formTitle,
										submitButtonText = _this$props.submitButtonText,
										allowInternational = _this$props.allowInternational,
										getAddress = _this$props.getAddress,
										getName = _this$props.getName,
										getPhone = _this$props.getPhone,
										getHonorific = _this$props.getHonorific,
										getSuffix = _this$props.getSuffix,
										getMiddleName = _this$props.getMiddleName,
										getSpouseInfo = _this$props.getSpouseInfo;
									var _this$context = this.context,
										errors = _this$context.errors,
										fields = _this$context.fields,
										initialized = _this$context.initialized,
										submitting = _this$context.submitting,
										submitted = _this$context.submitted;
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
														id: "react-signup-form",
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
																		"Name and Address Block"
																	),
																	(0, _core.jsx)(
																		_FormPanel.default,
																		{
																			className: "name-address__info",
																		},
																		(0, _core.jsx)(_FormHeader.default, {
																			className: "form-header",
																		}),
																		getName &&
																			(0, _core.jsx)(_NameBlock.default, {
																				fields: fields,
																				errors: errors,
																				getHonorific: getHonorific,
																				getMiddleName: getMiddleName,
																				getSuffix: getSuffix,
																				getSpouseInfo: getSpouseInfo,
																				handleInputChange: this
																					.handleInputChange,
																				type: "Name",
																			}),
																		(0, _core.jsx)(_AddressBlock.default, {
																			fields: fields,
																			errors: errors,
																			handleInputChange: this.handleInputChange,
																			getPhone: getPhone,
																			getAddress: getAddress,
																			allowInternational: allowInternational,
																			type: "Billing",
																		})
																	)
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
						return SignUpForm;
					})(_react.Component);

				SignUpForm.contextType = _SignUpFormProvider.SignUpFormContext;
				var _default = SignUpForm;
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
						SignUpForm,
						"SignUpForm",
						"/Users/wehand/Code/react-form-drupal/src/Components/Forms/SignUpForm.js"
					);
					reactHotLoader.register(
						_default,
						"default",
						"/Users/wehand/Code/react-form-drupal/src/Components/Forms/SignUpForm.js"
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
				"../Contexts/SignUpFormProvider":
					"src/Components/Contexts/SignUpFormProvider.js",
				"../FormComponents/StyledComponents/FormPanel":
					"src/Components/FormComponents/StyledComponents/FormPanel.js",
				"../FormComponents/StyledComponents/FieldSet":
					"src/Components/FormComponents/StyledComponents/FieldSet.js",
				"../FormComponents/StyledComponents/FormHeader":
					"src/Components/FormComponents/StyledComponents/FormHeader.js",
				"../FormComponents/Blocks/NameBlock":
					"src/Components/FormComponents/Blocks/NameBlock.js",
				"../FormComponents/Blocks/AddressBlock":
					"src/Components/FormComponents/Blocks/AddressBlock.js",
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
						protocol + "://" + hostname + ":" + "56770" + "/"
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
//# sourceMappingURL=/SignUpForm.098c53d9.js.map
