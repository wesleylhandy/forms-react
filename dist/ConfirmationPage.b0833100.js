// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"src/Components/styles/payment-form.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "form-panel": "form-panel__MNvL5",
  "hidden": "hidden__1Q3CY"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/helpers/scrollToPoint.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollToPoint = scrollToPoint;
exports.offsetTop = offsetTop;

/**
 * Function to scroll to a particular point on the DOM
 * @param {Number} top - pageYoffset of form
 */
function scrollToPoint(top) {
  var docHeight = document.documentElement.scrollHeight;
  var winHeight = window.innerHeight;
  var speed = 40;
  var initialPoint = window.scrollY ? window.scrollY : window.pageYOffset;
  var scrollDown = top >= initialPoint;

  if (scrollDown) {
    top = top > docHeight - winHeight ? docHeight - winHeight : top;
  } else {
    top = docHeight <= winHeight ? 0 : top;
  }

  window.requestAnimationFrame(winScroll);

  function winScroll(timestamp) {
    var scroll = window.scrollY ? window.scrollY : window.pageYOffset;

    if (scrollDown) {
      if (scroll >= top) {
        return window.cancelAnimationFrame(timestamp);
      }

      scroll += speed;
    } else {
      if (scroll <= top) {
        return window.cancelAnimationFrame(timestamp);
      }

      scroll -= speed;
    }

    window.scroll(0, scroll);
    window.requestAnimationFrame(winScroll);
  }
}
/**
 * 
 * @param {Node} el - DOM Element
 * @returns {Number} - integer representing offsetTop of the element relative to the viewport
 */


function offsetTop(el) {
  var rect = el.getBoundingClientRect(),
      scrollTop = window.scrollY ? window.scrollY : window.pageYOffset;
  return rect.top + scrollTop;
}
},{}],"src/Components/PaymentForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _paymentFormModule = _interopRequireDefault(require("./styles/payment-form.module.css"));

var _crypt = require("./helpers/crypt");

var _scrollToPoint = require("./helpers/scrollToPoint");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

if (module.hot) {
  module.hot.accept("./styles/payment-form.module.css", function () {
    require("./styles/payment-form.module.css");
  });
}

var PaymentForm =
/*#__PURE__*/
function (_Component) {
  _inherits(PaymentForm, _Component);

  function PaymentForm(props) {
    var _this;

    _classCallCheck(this, PaymentForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PaymentForm).call(this, props));
    _this.state = {
      formAction: props.formAction,
      cssConfig: props.cssConfig
    };
    return _this;
  }

  _createClass(PaymentForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var formData = this.props.formData;
      var lifetime = 60 * 1000; // 60 seconds * 1000 milliseconds

      var cookie = (0, _crypt.crypt)({
        formData: formData,
        lifetime: lifetime
      });
      localStorage.setItem("store", cookie);
      document.forms.hiddenform.submit.click(); // scroll to top of form

      var target = document.getElementById('react-form-top');
      var top = (0, _scrollToPoint.offsetTop)(target); // console.log({top})

      (0, _scrollToPoint.scrollToPoint)(top);
    }
  }, {
    key: "render",
    value: function render() {
      var formData = this.props.formData;
      var keys = Object.keys(formData);
      var inputs = keys.map(function (k, i) {
        return _react.default.createElement("input", {
          key: i + "-" + k,
          name: k,
          value: formData[k] ? formData[k] : '',
          type: "hidden"
        });
      }); // console.log(JSON.stringify(this.props.cssConfig))

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("form", {
        id: "hiddenform",
        className: "hidden__1Q3CY",
        action: this.state.formAction,
        method: "POST",
        target: "paymentprocess"
      }, inputs, _react.default.createElement("input", {
        type: "hidden",
        name: "cssVars",
        value: JSON.stringify(this.state.cssConfig)
      }), _react.default.createElement("input", {
        id: "submit",
        type: "submit",
        hidden: true
      })), _react.default.createElement("iframe", {
        className: "form-panel__MNvL5",
        name: "paymentprocess",
        width: "100%",
        height: "1000px"
      }));
    }
  }]);

  return PaymentForm;
}(_react.Component);

var _default = PaymentForm;
exports.default = _default;
},{"react":"node_modules/react/index.js","./styles/payment-form.module.css":"src/Components/styles/payment-form.module.css","./helpers/crypt":"src/Components/helpers/crypt.js","./helpers/scrollToPoint":"src/Components/helpers/scrollToPoint.js"}],"src/Components/styles/spinner.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "loading_spinner": "loading_spinner__2HC5B",
  "loading_spinner__flames": "loading_spinner__flames__3druA",
  "loading_spinner__back": "loading_spinner__back__2cJwJ",
  "flamerotate": "flamerotate__fGeMI"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/Spinner.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _spinnerModule = _interopRequireDefault(require("./styles/spinner.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (module.hot) {
  module.hot.accept("./styles/spinner.module.css", function () {
    require("./styles/spinner.module.css");
  });
}

function Spinner() {
  return _react.default.createElement("div", {
    className: "loading_spinner__2HC5B"
  }, _react.default.createElement("img", {
    className: "loading_spinner__flames__3druA",
    src: "//www1.cbn.com/sites/all/themes/cbn_default/images/spinner/cbn-flame-circle.png"
  }), _react.default.createElement("img", {
    className: "loading_spinner__back__2cJwJ",
    src: "//www1.cbn.com/sites/all/themes/cbn_default/images/spinner/loader-spinner@3x.png"
  }));
}

var _default = Spinner;
exports.default = _default;
},{"react":"node_modules/react/index.js","./styles/spinner.module.css":"src/Components/styles/spinner.module.css"}],"src/Components/ConfirmationPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PaymentForm = _interopRequireDefault(require("./PaymentForm"));

var _Spinner = _interopRequireDefault(require("./Spinner"));

var _fetchHelpers = require("./helpers/fetch-helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function handleUnload(e) {
  e.returnValue = "Are you sure you want to go back?\n You may lose all your changes to this page.";
  return "Are you sure you want to go back?\n You may lose all your changes to this page.";
}

function handleUnload(e) {
  e.returnValue = "Are you sure you want to go back?\n You may lose all your changes to this page.";
  return "Are you sure you want to go back?\n You may lose all your changes to this page.";
}

var ConfirmationPage =
/*#__PURE__*/
function (_Component) {
  _inherits(ConfirmationPage, _Component);

  function ConfirmationPage(props) {
    var _this;

    _classCallCheck(this, ConfirmationPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConfirmationPage).call(this, props));
    _this.state = {
      mode: props.mode,
      cssConfig: props.cssConfig,
      formData: props.formData,
      formAction: props.formAction,
      ready: false
    };
    _this.getGlobals = _this.getGlobals.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMessage = _this.handleMessage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.reRenderForm = _this.reRenderForm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderReceiptPage = _this.renderReceiptPage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ConfirmationPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('beforeunload', handleUnload);
      window.addEventListener('message', this.handleMessage, false);
      this.getGlobals();
    }
  }, {
    key: "getGlobals",
    value: function () {
      var _getGlobals = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var url, _ref, devServicesUri, preProdServicesUri, prodServicesUri, devReceiptUri, preProdReceiptUri, prodReceiptUri;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = this.state.mode == "development" ? 'http://securegiving.cbn.local/UI/globals/form-config.json' : 'https://securegiving.cbn.com/UI/globals/form-config.json';
                _context.prev = 1;
                _context.next = 4;
                return (0, _fetchHelpers.callApi)(url);

              case 4:
                _ref = _context.sent;
                devServicesUri = _ref.devServicesUri;
                preProdServicesUri = _ref.preProdServicesUri;
                prodServicesUri = _ref.prodServicesUri;
                devReceiptUri = _ref.devReceiptUri;
                preProdReceiptUri = _ref.preProdReceiptUri;
                prodReceiptUri = _ref.prodReceiptUri;
                this.setState({
                  ready: true,
                  devServicesUri: devServicesUri,
                  devReceiptUri: devReceiptUri,
                  preProdServicesUri: preProdServicesUri,
                  preProdReceiptUri: preProdReceiptUri,
                  prodServicesUri: prodServicesUri,
                  prodReceiptUri: prodReceiptUri
                });
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 14]]);
      }));

      return function getGlobals() {
        return _getGlobals.apply(this, arguments);
      };
    }()
  }, {
    key: "handleMessage",
    value: function handleMessage(e) {
      var data = e.data ? JSON.parse(e.data) : {};

      if (data.type !== "go back clicked" && data.type !== "render receipt") {
        return;
      }

      var origin = e.origin;
      var isOrigin = this.state.mode == "development" ? origin == this.state.devServicesUri || origin == this.state.preProdServicesUri : origin == this.state.prodServicesUri;

      if (!isOrigin) {
        return;
      }

      if (data.type === "go back clicked") {
        this.reRenderForm(this.state.formData);
      } else if (data.type === "render receipt") {
        // console.log('Render Receipt')
        // console.log({tracking_vars:data.tracking_vars})
        this.renderReceiptPage(data.tracking_vars);
      }

      return;
    }
  }, {
    key: "reRenderForm",
    value: function reRenderForm(data) {
      this.props.hydrateForm(data);
    }
  }, {
    key: "renderReceiptPage",
    value: function renderReceiptPage(varsArray) {
      this.props.renderReceiptPage(varsArray);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.state.ready !== nextState.ready) {
        return true;
      }

      return false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('beforeunload', handleUnload);
      window.removeEventListener('message', this.handleMessage);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, this.state.ready ? _react.default.createElement(_PaymentForm.default, {
        cssConfig: this.state.cssConfig,
        formAction: this.state.formAction,
        formData: this.state.formData
      }) : _react.default.createElement(_Spinner.default, null));
    }
  }]);

  return ConfirmationPage;
}(_react.Component);

var _default = ConfirmationPage;
exports.default = _default;
},{"react":"node_modules/react/index.js","./PaymentForm":"src/Components/PaymentForm.js","./Spinner":"src/Components/Spinner.js","./helpers/fetch-helpers":"src/Components/helpers/fetch-helpers.js"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51457" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
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
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
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

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
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
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/ConfirmationPage.b0833100.map