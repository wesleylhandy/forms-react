// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
     define(function () {
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
})({"src/Components/FormComponents/Blocks/SummaryBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _GivingFormProvider = require("../../Contexts/GivingFormProvider");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var BlockContainer = (0, _styledBase.default)("div", {
  target: "e13c5opw0",
  label: "BlockContainer"
})("development" === "production" ? {
  name: "4jxjp4",
  styles: "display:flex;justify-content:center;align-items:center;&.column{width:calc(100%-20px);height:100px;max-width:360px;margin:30px auto;border:1px solid #DEDEDE;border-radius:3px;background-color:#F5F7F8;box-shadow:0 0 4px 0 rgba(0,0,0,0.11);flex-direction:column;.amount-block{margin-bottom:10px;}}&.row{flex-direction:row;margin:20px auto;text-align:center;.amount-block{margin-right:10px;}.amount-block,.amount-block>span{font-weight:bold;}}a{color:#009BDF;cursor:pointer;text-decoration:none;text-align:center;&:hover,&:active,&:focus{text-decoration:underline;color:#0069AD;}}"
} : {
  name: "4jxjp4",
  styles: "display:flex;justify-content:center;align-items:center;&.column{width:calc(100%-20px);height:100px;max-width:360px;margin:30px auto;border:1px solid #DEDEDE;border-radius:3px;background-color:#F5F7F8;box-shadow:0 0 4px 0 rgba(0,0,0,0.11);flex-direction:column;.amount-block{margin-bottom:10px;}}&.row{flex-direction:row;margin:20px auto;text-align:center;.amount-block{margin-right:10px;}.amount-block,.amount-block>span{font-weight:bold;}}a{color:#009BDF;cursor:pointer;text-decoration:none;text-align:center;&:hover,&:active,&:focus{text-decoration:underline;color:#0069AD;}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN1bW1hcnlCbG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLaUMiLCJmaWxlIjoiU3VtbWFyeUJsb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5cbmltcG9ydCB7IEdpdmluZ0Zvcm1Db250ZXh0IH0gZnJvbSBcIi4uLy4uL0NvbnRleHRzL0dpdmluZ0Zvcm1Qcm92aWRlclwiO1xuXG5jb25zdCBCbG9ja0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICYuY29sdW1uIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJS0yMHB4KTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNERURFREU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjdGODtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMCwwLDAsMC4xMSk7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5hbW91bnQtYmxvY2sge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLnJvdyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5hbW91bnQtYmxvY2sge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hbW91bnQtYmxvY2ssIC5hbW91bnQtYmxvY2s+c3BhbiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhIHtcbiAgICAgICAgY29sb3I6ICMwMDlCREY7XG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBjb2xvcjogIzAwNjlBRDtcbiAgICAgICAgfVxuICAgIH1cbmBcblxuY29uc3QgU3VtbWFyeUJsb2NrID0gKHt3aXRoQ29udGFpbmVyfSkgPT4ge1xuICAgIGNvbnN0IHsgZ2V0U3VtbWFyeSwgZ29CYWNrIH0gPSB1c2VDb250ZXh0KEdpdmluZ0Zvcm1Db250ZXh0KVxuICAgIGNvbnN0IHthbW91bnQsIGlzTW9udGhseSwgZGVzaWduYXRpb259ID0gZ2V0U3VtbWFyeSgpO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gaXNNb250aGx5ID8gXCJcXC8gTW9udGggUGFydG5lcnNoaXBcIiA6IGRlc2lnbmF0aW9uO1xuXG4gICAgY29uc3QgaGFuZGxlR29CYWNrQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBnb0JhY2soeyB0eXBlOiBcIkdPX0JBQ0tcIiB9KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8QmxvY2tDb250YWluZXIgY2xhc3NOYW1lPXt3aXRoQ29udGFpbmVyID8gXCJjb2x1bW5cIiA6IFwicm93XCJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbW91bnQtYmxvY2tcIj4ke2Ftb3VudH0gPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGR1cmF0aW9ufX0+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ28tYmFjay1idG5cIiBvbkNsaWNrPXtoYW5kbGVHb0JhY2tDbGlja30+RWRpdDwvYT5cbiAgICAgICAgPC9CbG9ja0NvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1bW1hcnlCbG9jazsiXX0= */"
});

var SummaryBlock = function SummaryBlock(_ref) {
  var withContainer = _ref.withContainer;

  var _useContext = (0, _react.useContext)(_GivingFormProvider.GivingFormContext),
      getSummary = _useContext.getSummary,
      goBack = _useContext.goBack;

  var _getSummary = getSummary(),
      amount = _getSummary.amount,
      isMonthly = _getSummary.isMonthly,
      designation = _getSummary.designation;

  var duration = isMonthly ? "\/ Month Partnership" : designation;

  var handleGoBackClick = function handleGoBackClick(e) {
    e.preventDefault();
    goBack({
      type: "GO_BACK"
    });
  };

  return (0, _core.jsx)(BlockContainer, {
    className: withContainer ? "column" : "row"
  }, (0, _core.jsx)("div", {
    className: "amount-block"
  }, "$", amount, " ", (0, _core.jsx)("span", {
    dangerouslySetInnerHTML: {
      __html: duration
    }
  })), (0, _core.jsx)("a", {
    className: "go-back-btn",
    onClick: handleGoBackClick
  }, "Edit"));
};

__signature__(SummaryBlock, "useContext{{ getSummary, goBack }}");

var _default = SummaryBlock;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BlockContainer, "BlockContainer", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/SummaryBlock.js");
  reactHotLoader.register(SummaryBlock, "SummaryBlock", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/SummaryBlock.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/SummaryBlock.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","../../Contexts/GivingFormProvider":"src/Components/Contexts/GivingFormProvider.js"}],"src/Components/Forms/ConfirmationForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _reactTransitionGroup = require("react-transition-group");

var _GivingFormProvider = require("../Contexts/GivingFormProvider");

var _FormWrapper = _interopRequireDefault(require("../StyledComponents/FormWrapper"));

require("../FormComponents/Animations/designations.css");

var _SummaryBlock = _interopRequireDefault(require("../FormComponents/Blocks/SummaryBlock"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ConfirmationForm =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ConfirmationForm, _Component);

  function ConfirmationForm() {
    (0, _classCallCheck2.default)(this, ConfirmationForm);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ConfirmationForm).apply(this, arguments));
  }

  (0, _createClass2.default)(ConfirmationForm, [{
    key: "componentWillUnmount",
    value: function () {
      var _componentWillUnmount = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var savePersonalInfo, days, lifetime;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // if user has selected to save personal info,
                savePersonalInfo = this.context.fields.savePersonalInfo;

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
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillUnmount() {
        return _componentWillUnmount.apply(this, arguments);
      }

      return componentWillUnmount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$context = this.context,
          errors = _this$context.errors,
          fields = _this$context.fields,
          initialized = _this$context.initialized,
          submitting = _this$context.submitting,
          submitted = _this$context.submitted;
      var _this$props = this.props,
          allowInternational = _this$props.allowInternational,
          getPhone = _this$props.getPhone,
          getHonorific = _this$props.getHonorific,
          getSuffix = _this$props.getSuffix,
          getMiddleName = _this$props.getMiddleName,
          getSpouseInfo = _this$props.getSpouseInfo;
      return submitted && (0, _core.jsx)(_FormWrapper.default, {
        style: {
          maxWidth: "818px",
          margin: "0 auto"
        }
      }, (0, _core.jsx)(_SummaryBlock.default, {
        withContainer: true
      }), (0, _core.jsx)(_SummaryBlock.default, {
        withContainer: false
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return ConfirmationForm;
}(_react.Component);

ConfirmationForm.contextType = _GivingFormProvider.GivingFormContext;
var _default = ConfirmationForm;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ConfirmationForm, "ConfirmationForm", "/Users/wehand/Code/react-form-drupal/src/Components/Forms/ConfirmationForm.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/Forms/ConfirmationForm.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@babel/runtime/regenerator":"node_modules/@babel/runtime/regenerator/index.js","@babel/runtime/helpers/asyncToGenerator":"node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/inherits":"node_modules/@babel/runtime/helpers/inherits.js","@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","react-transition-group":"node_modules/react-transition-group/esm/index.js","../Contexts/GivingFormProvider":"src/Components/Contexts/GivingFormProvider.js","../StyledComponents/FormWrapper":"src/Components/StyledComponents/FormWrapper.js","../FormComponents/Animations/designations.css":"src/Components/FormComponents/Animations/designations.css","../FormComponents/Blocks/SummaryBlock":"src/Components/FormComponents/Blocks/SummaryBlock.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53502" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
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

  return getParents(global.parcelRequire, id).some(function (id) {
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
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/ConfirmationForm.4ca5b1aa.js.map