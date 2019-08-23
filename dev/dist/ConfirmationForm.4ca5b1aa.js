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

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _reactAriaLive = require("react-aria-live");

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
  name: "mswkkb",
  styles: "display:flex;justify-content:center;align-items:center;&.column{width:calc(100%-20px);height:100px;max-width:360px;margin:0 auto;margin-bottom:30px;border:1px solid #DEDEDE;border-radius:3px;background-color:#F5F7F8;box-shadow:0 0 4px 0 rgba(0,0,0,0.11);flex-direction:column;.amount-block{margin-bottom:10px;}}&.row{flex-direction:row;margin:20px auto;text-align:center;.amount-block{margin-right:10px;}.amount-block,.amount-block>span{font-weight:bold;}}a{color:#009BDF;cursor:pointer;text-decoration:none;text-align:center;&:hover,&:active,&:focus{text-decoration:underline;color:#0069AD;}}"
} : {
  name: "mswkkb",
  styles: "display:flex;justify-content:center;align-items:center;&.column{width:calc(100%-20px);height:100px;max-width:360px;margin:0 auto;margin-bottom:30px;border:1px solid #DEDEDE;border-radius:3px;background-color:#F5F7F8;box-shadow:0 0 4px 0 rgba(0,0,0,0.11);flex-direction:column;.amount-block{margin-bottom:10px;}}&.row{flex-direction:row;margin:20px auto;text-align:center;.amount-block{margin-right:10px;}.amount-block,.amount-block>span{font-weight:bold;}}a{color:#009BDF;cursor:pointer;text-decoration:none;text-align:center;&:hover,&:active,&:focus{text-decoration:underline;color:#0069AD;}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN1bW1hcnlCbG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLaUMiLCJmaWxlIjoiU3VtbWFyeUJsb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIG1lbW8sIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsgTGl2ZU1lc3NhZ2UgfSBmcm9tICdyZWFjdC1hcmlhLWxpdmUnXG5pbXBvcnQgeyBHaXZpbmdGb3JtQ29udGV4dCB9IGZyb20gXCIuLi8uLi9Db250ZXh0cy9HaXZpbmdGb3JtUHJvdmlkZXJcIjtcblxuY29uc3QgQmxvY2tDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAmLmNvbHVtbiB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUtMjBweCk7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMzYwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjREVERURFO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY3Rjg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggMCByZ2JhKDAsMCwwLDAuMTEpO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAuYW1vdW50LWJsb2NrIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5yb3cge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAuYW1vdW50LWJsb2NrIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuYW1vdW50LWJsb2NrLCAuYW1vdW50LWJsb2NrPnNwYW4ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMDA5QkRGO1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgY29sb3I6ICMwMDY5QUQ7XG4gICAgICAgIH1cbiAgICB9XG5gXG5cbmNvbnN0IFN1bW1hcnlCbG9jayA9ICh7d2l0aENvbnRhaW5lcn0pID0+IHtcbiAgICBjb25zdCB7IGdldFN1bW1hcnksIGdldFNlbGVjdGlvbiB9ID0gdXNlQ29udGV4dChHaXZpbmdGb3JtQ29udGV4dClcbiAgICBjb25zdCB7YW1vdW50LCBpc01vbnRobHksIGRlc2lnbmF0aW9ufSA9IHVzZU1lbW8oKCkgPT4gZ2V0U3VtbWFyeSgpLCBbXSk7XG4gICAgY29uc3QgZHVyYXRpb24gPSBpc01vbnRobHkgPyBcIlxcLyBNb250aCBQYXJ0bmVyc2hpcFwiIDogZGVzaWduYXRpb247XG4gICAgY29uc3QgW2ExMXlNZXNzYWdlLCBzZXRBMTF5TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IGhhbmRsZUdvQmFja0NsaWNrID0gZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0QTExeU1lc3NhZ2UoXCJZb3UgUHJlc3NlZCB0aGUgRWRpdCBCdXR0b24gYW5kIE5vdyB0aGUgUHJldmlvdXMgUGFnZSBmb3IgU2VsZWN0aW5nIFlvdXIgRG9uYXRpb24gQW1vdW50IGhhcyBsb2FkZWQgaW4gcGxhY2Ugb2YgdGhlIENyZWRpdCBDYXJkIEZvcm0uXCIpXG4gICAgICAgIGdldFNlbGVjdGlvbih7IHR5cGU6IFwiR09fQkFDS1wiIH0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxCbG9ja0NvbnRhaW5lciBjbGFzc05hbWU9e3dpdGhDb250YWluZXIgPyBcImNvbHVtblwiIDogXCJyb3dcIn0+XG4gICAgICAgICAgICA8TGl2ZU1lc3NhZ2UgbWVzc2FnZT17YTExeU1lc3NhZ2V9IGFyaWEtbGl2ZT1cInBvbGl0ZVwiLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW1vdW50LWJsb2NrXCI+JHthbW91bnR9IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBkdXJhdGlvbn19Pjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdvLWJhY2stYnRuXCIgb25DbGljaz17aGFuZGxlR29CYWNrQ2xpY2t9PkVkaXQ8L2E+XG4gICAgICAgIDwvQmxvY2tDb250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFN1bW1hcnlCbG9jayk7Il19 */"
});

var SummaryBlock = function SummaryBlock(_ref) {
  var withContainer = _ref.withContainer;

  var _useContext = (0, _react.useContext)(_GivingFormProvider.GivingFormContext),
      getSummary = _useContext.getSummary,
      getSelection = _useContext.getSelection;

  var _useMemo = (0, _react.useMemo)(function () {
    return getSummary();
  }, []),
      amount = _useMemo.amount,
      isMonthly = _useMemo.isMonthly,
      designation = _useMemo.designation;

  var duration = isMonthly ? "\/ Month Partnership" : designation;

  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      a11yMessage = _useState2[0],
      setA11yMessage = _useState2[1];

  var handleGoBackClick = function handleGoBackClick(e) {
    e.preventDefault();
    setA11yMessage("You Pressed the Edit Button and Now the Previous Page for Selecting Your Donation Amount has loaded in place of the Credit Card Form.");
    getSelection({
      type: "GO_BACK"
    });
  };

  return (0, _core.jsx)(BlockContainer, {
    className: withContainer ? "column" : "row"
  }, (0, _core.jsx)(_reactAriaLive.LiveMessage, {
    message: a11yMessage,
    "aria-live": "polite"
  }), (0, _core.jsx)("div", {
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

__signature__(SummaryBlock, "useContext{{ getSummary, getSelection }}\nuseMemo{{amount, isMonthly, designation}}\nuseState{[a11yMessage, setA11yMessage](\"\")}");

var _default = (0, _react.memo)(SummaryBlock);

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
},{"@babel/runtime/helpers/slicedToArray":"node_modules/@babel/runtime/helpers/slicedToArray.js","@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","react-aria-live":"node_modules/react-aria-live/es/index.js","../../Contexts/GivingFormProvider":"src/Components/Contexts/GivingFormProvider.js"}],"src/Components/FormComponents/SVG/LockSymbol.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var LockSymbol = function LockSymbol() {
  return (0, _core.jsx)("svg", {
    width: "16px",
    height: "21px",
    viewBox: "0 0 16 21",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0, _core.jsx)("title", null, "baseline-lock-24px"), (0, _core.jsx)("desc", null, "Created with Sketch."), (0, _core.jsx)("g", {
    id: "Welcome",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, (0, _core.jsx)("g", {
    id: "Payment-Page-(2-Step)-Form-Field-Inputs",
    transform: "translate(-482.000000, -531.000000)"
  }, (0, _core.jsx)("g", {
    id: "Payment-Info",
    transform: "translate(478.000000, 490.000000)"
  }, (0, _core.jsx)("g", {
    id: "Credit-Cards",
    transform: "translate(0.000000, 40.000000)"
  }, (0, _core.jsx)("g", {
    id: "baseline-lock-24px"
  }, (0, _core.jsx)("polygon", {
    id: "Path",
    points: "0 0 24 0 24 24 0 24"
  }), (0, _core.jsx)("path", {
    d: "M18,8 L17,8 L17,6 C17,3.24 14.76,1 12,1 C9.24,1 7,3.24 7,6 L7,8 L6,8 C4.9,8 4,8.9 4,10 L4,20 C4,21.1 4.9,22 6,22 L18,22 C19.1,22 20,21.1 20,20 L20,10 C20,8.9 19.1,8 18,8 Z M12,17 C10.9,17 10,16.1 10,15 C10,13.9 10.9,13 12,13 C13.1,13 14,13.9 14,15 C14,16.1 13.1,17 12,17 Z M15.1,8 L8.9,8 L8.9,6 C8.9,4.29 10.29,2.9 12,2.9 C13.71,2.9 15.1,4.29 15.1,6 L15.1,8 Z",
    id: "Shape",
    fill: "#9EA0A1",
    fillRule: "nonzero"
  })))))));
};

var _default = LockSymbol;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LockSymbol, "LockSymbol", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/SVG/LockSymbol.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/SVG/LockSymbol.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js"}],"src/Components/FormComponents/SVG/MasterCard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var MasterCard = function MasterCard() {
  return (0, _core.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 125.43 78.39"
  }, (0, _core.jsx)("title", null, "mastercardAsset 2"), (0, _core.jsx)("g", {
    id: "Layer_2"
  }, (0, _core.jsx)("g", {
    id: "Layer_1-2"
  }, (0, _core.jsx)("rect", {
    className: "mc-1",
    width: "125.43",
    height: "78.39",
    rx: "4.18"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "77.77 61.7 78.93 61.67 80.07 61.59 81.2 61.44 82.31 61.24 83.4 60.99 84.47 60.69 85.52 60.33 86.54 59.93 87.54 59.48 88.52 58.98 89.46 58.44 90.38 57.85 91.26 57.22 92.11 56.55 92.93 55.85 93.71 55.1 94.46 54.31 95.16 53.49 95.83 52.65 96.46 51.76 97.05 50.85 97.59 49.9 98.09 48.93 98.54 47.93 98.94 46.91 99.3 45.86 99.61 44.79 99.86 43.7 100.05 42.59 100.2 41.46 100.28 40.32 100.31 39.16 100.28 38 100.2 36.86 100.05 35.74 99.86 34.64 99.61 33.55 99.3 32.49 98.94 31.44 98.54 30.43 98.09 29.43 97.59 28.46 97.05 27.53 96.46 26.61 95.83 25.73 95.16 24.89 94.46 24.07 93.71 23.28 92.93 22.54 92.11 21.83 91.26 21.17 90.38 20.54 89.46 19.95 88.52 19.41 87.54 18.92 86.54 18.46 85.52 18.06 84.47 17.7 83.4 17.4 82.31 17.15 81.2 16.95 80.07 16.81 78.93 16.73 77.77 16.69 76.61 16.73 75.47 16.81 74.34 16.95 73.23 17.15 72.15 17.4 71.08 17.7 70.04 18.06 69.01 18.46 68.02 18.92 67.06 19.41 66.11 19.95 65.2 20.54 64.32 21.17 63.47 21.83 62.66 22.54 61.88 23.28 61.13 24.07 60.43 24.89 59.76 25.73 59.14 26.61 58.55 27.53 58.02 28.46 57.51 29.43 57.07 30.43 56.66 31.44 56.31 32.49 56.01 33.55 55.76 34.64 55.56 35.74 55.42 36.86 55.34 38 55.3 39.16 55.34 40.32 55.42 41.46 55.56 42.59 55.76 43.7 56.01 44.79 56.31 45.86 56.66 46.91 57.07 47.93 57.51 48.93 58.02 49.9 58.55 50.85 59.14 51.76 59.76 52.65 60.43 53.49 61.13 54.31 61.88 55.1 62.66 55.85 63.47 56.55 64.32 57.22 65.2 57.85 66.11 58.44 67.06 58.98 68.02 59.48 69.01 59.93 70.04 60.33 71.08 60.69 72.15 60.99 73.23 61.24 74.34 61.44 75.47 61.59 76.61 61.67 77.77 61.7 77.77 61.7 77.77 61.7"
  }), (0, _core.jsx)("polygon", {
    className: "mc-3",
    points: "47.66 61.7 48.81 61.67 49.96 61.59 51.09 61.44 52.19 61.24 53.28 60.99 54.35 60.69 55.39 60.33 56.41 59.93 57.41 59.48 58.37 58.98 59.31 58.44 60.23 57.85 61.1 57.22 61.95 56.55 62.77 55.85 63.55 55.1 64.29 54.31 65 53.49 65.67 52.65 66.29 51.76 66.87 50.85 67.41 49.9 67.91 48.93 68.36 47.93 68.76 46.91 69.11 45.86 69.42 44.79 69.67 43.7 69.86 42.59 70.01 41.46 70.09 40.32 70.12 39.16 70.09 38 70.01 36.86 69.86 35.74 69.67 34.64 69.42 33.55 69.11 32.49 68.76 31.44 68.36 30.43 67.91 29.43 67.41 28.46 66.87 27.53 66.29 26.61 65.67 25.73 65 24.89 64.29 24.07 63.55 23.28 62.77 22.54 61.95 21.83 61.1 21.17 60.23 20.54 59.31 19.95 58.37 19.41 57.41 18.92 56.41 18.46 55.39 18.06 54.35 17.7 53.28 17.4 52.19 17.15 51.09 16.95 49.96 16.81 48.81 16.73 47.66 16.69 46.5 16.73 45.35 16.81 44.23 16.95 43.11 17.15 42.03 17.4 40.96 17.7 39.91 18.06 38.89 18.46 37.88 18.92 36.91 19.41 35.97 19.95 35.05 20.54 34.17 21.17 33.32 21.83 32.5 22.54 31.72 23.28 30.97 24.07 30.26 24.89 29.6 25.73 28.96 26.61 28.38 27.53 27.83 28.46 27.34 29.43 26.89 30.43 26.48 31.44 26.13 32.49 25.82 33.55 25.57 34.64 25.38 35.74 25.23 36.86 25.15 38 25.12 39.16 25.15 40.32 25.23 41.46 25.38 42.59 25.57 43.7 25.82 44.79 26.13 45.86 26.48 46.91 26.89 47.93 27.34 48.93 27.83 49.9 28.38 50.85 28.96 51.76 29.6 52.65 30.26 53.49 30.97 54.31 31.72 55.1 32.5 55.85 33.32 56.55 34.17 57.22 35.05 57.85 35.97 58.44 36.91 58.98 37.88 59.48 38.89 59.93 39.91 60.33 40.96 60.69 42.03 60.99 43.11 61.24 44.23 61.44 45.35 61.59 46.5 61.67 47.66 61.7 47.66 61.7 47.66 61.7"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "60.08 25.33 72.04 25.33 72.04 24.1 61.11 24.1 60.08 25.33 60.08 25.33 60.08 25.33"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "58.29 28.04 72.04 28.04 72.04 26.82 59.01 26.82 58.29 28.04 58.29 28.04 58.29 28.04"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "56.95 30.75 72.04 30.75 72.04 29.53 57.48 29.53 56.95 30.75 56.95 30.75 56.95 30.75"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "56.03 33.47 72.04 33.47 72.04 32.25 56.41 32.25 56.03 33.47 56.03 33.47 56.03 33.47"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "56.57 46.6 72.07 46.6 72.07 45.38 56.19 45.38 56.57 46.6 56.57 46.6 56.57 46.6"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "57.71 49.32 72.07 49.32 72.07 48.1 57.14 48.1 57.71 49.32 57.71 49.32 57.71 49.32"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "59.32 52.03 72.07 52.03 72.07 50.81 58.55 50.81 59.32 52.03 59.32 52.03 59.32 52.03"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "61.54 54.75 72.07 54.75 72.07 53.52 60.47 53.52 61.54 54.75 61.54 54.75 61.54 54.75"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "55.5 36.18 72.04 36.18 72.04 34.96 55.73 34.96 55.5 36.18 55.5 36.18 55.5 36.18"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "65.58 43.89 71.88 43.89 71.88 42.67 65.8 42.67 65.58 43.89 65.58 43.89 65.58 43.89"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "66.08 41.18 71.88 41.18 71.88 39.95 66.31 39.95 66.08 41.18 66.08 41.18 66.08 41.18"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "55.08 39.95 56.72 39.95 56.72 41.18 55.15 41.18 55.08 39.95 55.08 39.95 55.08 39.95"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "52.02 38.47 51.91 38.46 51.8 38.45 51.71 38.44 51.61 38.42 51.52 38.41 51.42 38.39 51.32 38.37 51.21 38.36 51.11 38.34 50.99 38.34 50.85 38.33 50.71 38.32 50.55 38.32 50.37 38.33 50.17 38.34 49.95 38.36 49.8 38.38 49.66 38.41 49.53 38.45 49.41 38.49 49.31 38.55 49.21 38.61 49.13 38.69 49.07 38.75 49.02 38.84 48.98 38.92 48.97 39.01 48.97 39.1 48.99 39.2 49.02 39.3 49.08 39.4 49.16 39.5 49.31 39.64 49.49 39.76 49.7 39.85 49.93 39.94 50.17 40.01 50.43 40.1 50.68 40.19 50.92 40.29 51.15 40.42 51.36 40.58 51.55 40.77 51.71 41 51.83 41.29 51.9 41.63 51.94 42.04 51.9 42.52 51.85 42.88 51.76 43.19 51.64 43.48 51.49 43.73 51.31 43.95 51.12 44.13 50.9 44.3 50.67 44.45 50.43 44.56 50.17 44.66 49.92 44.73 49.65 44.8 49.39 44.84 49.14 44.86 48.89 44.88 48.66 44.89 48.33 44.89 48.02 44.88 47.76 44.88 47.51 44.87 47.28 44.86 47.08 44.85 46.89 44.83 46.72 44.81 46.56 44.8 46.42 44.77 46.27 44.74 46.14 44.7 46.01 44.67 45.89 44.63 45.77 44.58 45.64 44.54 45.98 42.86 46.05 42.88 46.14 42.9 46.24 42.93 46.37 42.96 46.51 42.99 46.66 43.02 46.83 43.06 47.01 43.09 47.2 43.12 47.39 43.15 47.6 43.17 47.81 43.19 48.03 43.2 48.25 43.21 48.48 43.21 48.69 43.2 48.91 43.16 49.09 43.09 49.23 43.01 49.33 42.91 49.41 42.8 49.47 42.68 49.51 42.56 49.54 42.44 49.55 42.22 49.48 42.03 49.35 41.88 49.16 41.75 48.94 41.64 48.67 41.52 48.38 41.42 48.08 41.3 47.77 41.16 47.49 41 47.22 40.8 46.98 40.57 46.79 40.28 46.65 39.94 46.58 39.53 46.59 39.04 46.63 38.75 46.68 38.46 46.76 38.21 46.85 37.96 46.97 37.74 47.11 37.54 47.27 37.35 47.46 37.18 47.68 37.04 47.92 36.92 48.19 36.8 48.5 36.72 48.84 36.65 49.21 36.6 49.62 36.57 50.07 36.56 50.35 36.56 50.6 36.57 50.84 36.58 51.05 36.58 51.24 36.6 51.42 36.61 51.57 36.63 51.71 36.64 51.84 36.66 51.94 36.68 52.04 36.7 52.13 36.71 52.21 36.73 52.28 36.73 52.35 36.75 52.4 36.76 52.02 38.47 52.02 38.47 52.02 38.47"
  }), (0, _core.jsx)("polyline", {
    className: "mc-5",
    points: "52.02 38.47 52.02 38.47 51.91 38.46 51.8 38.45 51.71 38.44 51.61 38.42 51.52 38.41 51.42 38.39 51.32 38.37 51.21 38.36 51.11 38.34 50.99 38.34 50.85 38.33 50.71 38.32 50.55 38.32 50.37 38.33 50.17 38.34 49.95 38.36 49.95 38.36 49.8 38.38 49.66 38.41 49.53 38.45 49.41 38.49 49.31 38.55 49.21 38.61 49.13 38.69 49.07 38.75 49.02 38.84 48.98 38.92 48.97 39.01 48.97 39.1 48.99 39.2 49.02 39.3 49.08 39.4 49.16 39.5 49.16 39.5 49.31 39.64 49.49 39.76 49.7 39.85 49.93 39.94 50.17 40.01 50.43 40.1 50.68 40.19 50.92 40.29 51.15 40.42 51.36 40.58 51.55 40.77 51.71 41 51.83 41.29 51.9 41.63 51.94 42.04 51.9 42.52 51.9 42.52 51.85 42.88 51.76 43.19 51.64 43.48 51.49 43.73 51.31 43.95 51.12 44.13 50.9 44.3 50.67 44.45 50.43 44.56 50.17 44.66 49.92 44.73 49.65 44.8 49.39 44.84 49.14 44.86 48.89 44.88 48.66 44.89 48.66 44.89 48.33 44.89 48.02 44.88 47.76 44.88 47.51 44.87 47.28 44.86 47.08 44.85 46.89 44.83 46.72 44.81 46.56 44.8 46.42 44.77 46.27 44.74 46.14 44.7 46.01 44.67 45.89 44.63 45.77 44.58 45.64 44.54 45.98 42.86 45.98 42.86 46.05 42.88 46.14 42.9 46.24 42.93 46.37 42.96 46.51 42.99 46.66 43.02 46.83 43.06 47.01 43.09 47.2 43.12 47.39 43.15 47.6 43.17 47.81 43.19 48.03 43.2 48.25 43.21 48.48 43.21 48.69 43.2 48.69 43.2 48.91 43.16 49.09 43.09 49.23 43.01 49.33 42.91 49.41 42.8 49.47 42.68 49.51 42.56 49.54 42.44 49.54 42.44 49.55 42.22 49.48 42.03 49.35 41.88 49.16 41.75 48.94 41.64 48.67 41.52 48.38 41.42 48.08 41.3 47.77 41.16 47.49 41 47.22 40.8 46.98 40.57 46.79 40.28 46.65 39.94 46.58 39.53 46.59 39.04 46.59 39.04 46.63 38.75 46.68 38.46 46.76 38.21 46.85 37.96 46.97 37.74 47.11 37.54 47.27 37.35 47.46 37.18 47.68 37.04 47.92 36.92 48.19 36.8 48.5 36.72 48.84 36.65 49.21 36.6 49.62 36.57 50.07 36.56 50.07 36.56 50.35 36.56 50.6 36.57 50.84 36.58 51.05 36.58 51.24 36.6 51.42 36.61 51.57 36.63 51.71 36.64 51.84 36.66 51.94 36.68 52.04 36.7 52.13 36.71 52.21 36.73 52.28 36.73 52.35 36.75 52.4 36.76 52.02 38.47"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "53.82 34.88 55.92 34.88 55.61 36.72 56.88 36.72 56.6 38.44 55.27 38.4 54.54 42.63 54.53 42.78 54.57 42.91 54.64 43.01 54.74 43.09 54.88 43.15 55.03 43.19 55.2 43.22 55.38 43.24 55.55 43.23 55.7 43.22 55.84 43.19 55.96 43.16 56.06 43.13 56.13 43.11 56.17 43.09 56.19 43.09 55.92 44.5 55.87 44.54 55.81 44.57 55.76 44.6 55.71 44.63 55.65 44.65 55.59 44.67 55.52 44.7 55.46 44.72 55.38 44.74 55.3 44.76 55.22 44.77 55.12 44.79 55.02 44.8 54.91 44.82 54.79 44.83 54.66 44.85 54.08 44.85 53.78 44.83 53.51 44.8 53.27 44.75 53.07 44.7 52.89 44.63 52.75 44.55 52.62 44.46 52.52 44.36 52.44 44.26 52.39 44.13 52.35 44 52.33 43.85 52.32 43.7 52.32 43.53 52.35 43.35 52.37 43.16 53.82 34.88 53.82 34.88 53.82 34.88"
  }), (0, _core.jsx)("polyline", {
    className: "mc-5",
    points: "53.82 34.88 55.92 34.88 55.61 36.72 56.88 36.72 56.6 38.44 55.27 38.4 54.54 42.63 54.54 42.63 54.53 42.78 54.57 42.91 54.64 43.01 54.74 43.09 54.88 43.15 55.03 43.19 55.2 43.22 55.38 43.24 55.38 43.24 55.55 43.23 55.7 43.22 55.84 43.19 55.96 43.16 56.06 43.13 56.13 43.11 56.17 43.09 56.19 43.09 55.92 44.5 55.92 44.5 55.87 44.54 55.81 44.57 55.76 44.6 55.71 44.63 55.65 44.65 55.59 44.67 55.52 44.7 55.46 44.72 55.38 44.74 55.3 44.76 55.22 44.77 55.12 44.79 55.02 44.8 54.91 44.82 54.79 44.83 54.66 44.85 54.08 44.85 54.08 44.85 53.78 44.83 53.51 44.8 53.27 44.75 53.07 44.7 52.89 44.63 52.75 44.55 52.62 44.46 52.52 44.36 52.44 44.26 52.39 44.13 52.35 44 52.33 43.85 52.32 43.7 52.32 43.53 52.35 43.35 52.37 43.16 53.82 34.88"
  }), (0, _core.jsx)("polyline", {
    className: "mc-5",
    points: "58.55 41.3 58.55 41.3 58.53 41.42 58.52 41.56 58.54 41.71 58.57 41.85 58.62 41.99 58.68 42.13 58.77 42.28 58.86 42.4 58.97 42.53 59.08 42.65 59.2 42.76 59.34 42.85 59.47 42.94 59.63 43 59.77 43.06 59.93 43.09 59.93 43.09 60.13 43.12 60.31 43.14 60.51 43.16 60.71 43.18 60.91 43.19 61.11 43.19 61.31 43.18 61.51 43.16 61.72 43.13 61.93 43.09 62.14 43.05 62.34 42.98 62.55 42.9 62.77 42.81 62.99 42.69 63.21 42.56 62.9 44.42 62.9 44.42 62.78 44.48 62.66 44.55 62.54 44.59 62.43 44.64 62.31 44.67 62.19 44.71 62.07 44.74 61.94 44.77 61.8 44.79 61.65 44.8 61.49 44.82 61.32 44.83 61.12 44.84 60.91 44.84 60.68 44.85 60.43 44.85 60.43 44.85 60.06 44.84 59.68 44.8 59.3 44.75 58.92 44.66 58.55 44.55 58.19 44.4 57.85 44.21 57.53 43.99 57.23 43.73 56.98 43.42 56.76 43.07 56.57 42.67 56.44 42.22 56.36 41.71 56.34 41.15 56.38 40.53 56.38 40.53 56.41 40.29 56.45 40.01 56.51 39.71 56.6 39.39 56.71 39.06 56.85 38.74 57.02 38.41 57.23 38.09 57.48 37.78 57.77 37.49 58.1 37.24 58.49 37.01 58.93 36.82 59.42 36.68 59.97 36.59 60.58 36.56 60.58 36.56 60.88 36.57 61.19 36.6 61.5 36.65 61.81 36.73 62.12 36.84 62.41 36.98 62.68 37.16 62.93 37.37 63.16 37.63 63.35 37.94 63.5 38.28 63.61 38.69 63.67 39.14 63.68 39.66 63.63 40.23 63.51 40.87 63.47 41.33 57.94 41.33 58.29 39.84 61.61 39.84 61.61 39.84 61.63 39.65 61.62 39.47 61.6 39.3 61.58 39.15 61.52 39 61.47 38.87 61.39 38.76 61.32 38.66 61.23 38.56 61.13 38.49 61.01 38.42 60.9 38.36 60.78 38.31 60.66 38.28 60.53 38.26 60.39 38.24 60.39 38.24 60.25 38.25 60.11 38.27 59.98 38.31 59.85 38.35 59.72 38.41 59.61 38.48 59.49 38.56 59.4 38.66 59.3 38.76 59.21 38.87 59.13 39 59.05 39.13 58.99 39.26 58.93 39.41 58.89 39.57 58.86 39.73 58.55 41.3"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "76.66 37.17 76.56 37.12 76.46 37.08 76.36 37.02 76.24 36.97 76.13 36.92 76 36.88 75.87 36.83 75.73 36.79 75.59 36.75 75.44 36.72 75.28 36.69 75.13 36.67 74.95 36.65 74.78 36.64 74.59 36.64 74.4 36.64 74.22 36.64 74.02 36.65 73.81 36.67 73.6 36.71 73.39 36.77 73.17 36.86 72.96 36.96 72.75 37.1 72.54 37.27 72.35 37.46 72.16 37.71 71.97 37.99 71.81 38.32 71.65 38.7 71.51 39.13 71.38 39.61 71.34 39.88 71.31 40.15 71.29 40.42 71.3 40.67 71.32 40.93 71.38 41.17 71.44 41.4 71.53 41.63 71.64 41.84 71.78 42.03 71.94 42.21 72.12 42.37 72.32 42.5 72.56 42.62 72.82 42.72 73.11 42.78 73.2 42.81 73.32 42.83 73.45 42.84 73.61 42.86 73.77 42.88 73.95 42.88 74.14 42.88 74.33 42.86 74.53 42.84 74.72 42.8 74.91 42.75 75.1 42.69 75.29 42.6 75.47 42.5 75.63 42.38 75.78 42.25 75.44 44.27 75.39 44.31 75.34 44.36 75.28 44.41 75.22 44.45 75.13 44.51 75.03 44.57 74.9 44.62 74.77 44.67 74.59 44.72 74.4 44.76 74.17 44.79 73.9 44.82 73.61 44.83 73.27 44.84 72.88 44.83 72.45 44.81 72.1 44.77 71.75 44.7 71.4 44.58 71.06 44.43 70.72 44.25 70.4 44.02 70.1 43.76 69.82 43.45 69.57 43.11 69.36 42.73 69.17 42.31 69.04 41.84 68.95 41.33 68.92 40.8 68.93 40.2 69.01 39.57 69.08 39.26 69.14 38.96 69.22 38.66 69.3 38.38 69.38 38.12 69.48 37.85 69.58 37.6 69.68 37.37 69.8 37.13 69.91 36.91 70.04 36.7 70.18 36.5 70.31 36.31 70.46 36.13 70.61 35.96 70.78 35.8 70.95 35.65 71.13 35.51 71.31 35.38 71.5 35.25 71.7 35.14 71.91 35.04 72.12 34.95 72.34 34.87 72.57 34.79 72.81 34.73 73.05 34.68 73.31 34.63 73.57 34.59 73.84 34.56 74.11 34.55 74.4 34.54 74.65 34.55 74.88 34.56 75.11 34.59 75.34 34.62 75.55 34.65 75.76 34.69 75.95 34.73 76.14 34.78 76.31 34.82 76.46 34.87 76.61 34.91 76.73 34.96 76.83 35 76.92 35.03 76.99 35.06 77.04 35.07 76.66 37.17 76.66 37.17 76.66 37.17"
  }), (0, _core.jsx)("polyline", {
    className: "mc-5",
    points: "76.66 37.17 76.66 37.17 76.56 37.12 76.46 37.08 76.36 37.02 76.24 36.97 76.13 36.92 76 36.88 75.87 36.83 75.73 36.79 75.59 36.75 75.44 36.72 75.28 36.69 75.13 36.67 74.95 36.65 74.78 36.64 74.59 36.64 74.4 36.64 74.4 36.64 74.22 36.64 74.02 36.65 73.81 36.67 73.6 36.71 73.39 36.77 73.17 36.86 72.96 36.96 72.75 37.1 72.54 37.27 72.35 37.46 72.16 37.71 71.97 37.99 71.81 38.32 71.65 38.7 71.51 39.13 71.38 39.61 71.38 39.61 71.34 39.88 71.31 40.15 71.29 40.42 71.3 40.67 71.32 40.93 71.38 41.17 71.44 41.4 71.53 41.63 71.64 41.84 71.78 42.03 71.94 42.21 72.12 42.37 72.32 42.5 72.56 42.62 72.82 42.72 73.11 42.78 73.11 42.78 73.2 42.81 73.32 42.83 73.45 42.84 73.61 42.86 73.77 42.88 73.95 42.88 74.14 42.88 74.33 42.86 74.53 42.84 74.72 42.8 74.91 42.75 75.1 42.69 75.29 42.6 75.47 42.5 75.63 42.38 75.78 42.25 75.44 44.27 75.44 44.27 75.39 44.31 75.34 44.36 75.28 44.41 75.22 44.45 75.13 44.51 75.03 44.57 74.9 44.62 74.77 44.67 74.59 44.72 74.4 44.76 74.17 44.79 73.9 44.82 73.61 44.83 73.27 44.84 72.88 44.83 72.45 44.81 72.45 44.81 72.1 44.77 71.75 44.7 71.4 44.58 71.06 44.43 70.72 44.25 70.4 44.02 70.1 43.76 69.82 43.45 69.57 43.11 69.36 42.73 69.17 42.31 69.04 41.84 68.95 41.33 68.92 40.8 68.93 40.2 69.01 39.57 69.01 39.57 69.08 39.26 69.14 38.96 69.22 38.66 69.3 38.38 69.38 38.12 69.48 37.85 69.58 37.6 69.68 37.37 69.8 37.13 69.91 36.91 70.04 36.7 70.18 36.5 70.31 36.31 70.46 36.13 70.61 35.96 70.78 35.8 70.95 35.65 71.13 35.51 71.31 35.38 71.5 35.25 71.7 35.14 71.91 35.04 72.12 34.95 72.34 34.87 72.57 34.79 72.81 34.73 73.05 34.68 73.31 34.63 73.57 34.59 73.84 34.56 74.11 34.55 74.4 34.54 74.4 34.54 74.65 34.55 74.88 34.56 75.11 34.59 75.34 34.62 75.55 34.65 75.76 34.69 75.95 34.73 76.14 34.78 76.31 34.82 76.46 34.87 76.61 34.91 76.73 34.96 76.83 35 76.92 35.03 76.99 35.06 77.04 35.07 76.66 37.17"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "95.35 44.85 93.24 44.85 93.4 44.01 93.4 43.93 93.27 44.08 93.15 44.22 93.02 44.34 92.88 44.45 92.74 44.55 92.61 44.63 92.47 44.7 92.32 44.77 92.18 44.82 92.04 44.86 91.89 44.89 91.74 44.92 91.59 44.94 91.44 44.95 91.29 44.96 91.14 44.96 90.75 44.93 90.38 44.85 90.05 44.72 89.74 44.55 89.47 44.33 89.23 44.07 89.02 43.79 88.83 43.47 88.68 43.13 88.56 42.77 88.48 42.4 88.42 42.01 88.39 41.62 88.4 41.23 88.44 40.84 88.51 40.45 88.62 40.01 88.76 39.58 88.92 39.19 89.11 38.83 89.31 38.49 89.53 38.18 89.77 37.91 90.02 37.66 90.28 37.44 90.56 37.25 90.85 37.08 91.14 36.95 91.44 36.85 91.75 36.78 92.05 36.73 92.36 36.72 92.58 36.73 92.8 36.75 92.99 36.79 93.18 36.84 93.35 36.9 93.5 36.97 93.65 37.05 93.79 37.14 93.91 37.23 94.03 37.33 94.12 37.42 94.22 37.52 94.29 37.62 94.36 37.72 94.42 37.81 94.47 37.9 94.47 37.9 95 34.92 97.06 34.92 95.35 44.85 95.35 44.85 95.35 44.85"
  }), (0, _core.jsx)("polyline", {
    className: "mc-5",
    points: "95.35 44.85 93.24 44.85 93.4 44.01 93.4 43.93 93.4 43.93 93.27 44.08 93.15 44.22 93.02 44.34 92.88 44.45 92.74 44.55 92.61 44.63 92.47 44.7 92.32 44.77 92.18 44.82 92.04 44.86 91.89 44.89 91.74 44.92 91.59 44.94 91.44 44.95 91.29 44.96 91.14 44.96 91.14 44.96 90.75 44.93 90.38 44.85 90.05 44.72 89.74 44.55 89.47 44.33 89.23 44.07 89.02 43.79 88.83 43.47 88.68 43.13 88.56 42.77 88.48 42.4 88.42 42.01 88.39 41.62 88.4 41.23 88.44 40.84 88.51 40.45 88.51 40.45 88.62 40.01 88.76 39.58 88.92 39.19 89.11 38.83 89.31 38.49 89.53 38.18 89.77 37.91 90.02 37.66 90.28 37.44 90.56 37.25 90.85 37.08 91.14 36.95 91.44 36.85 91.75 36.78 92.05 36.73 92.36 36.72 92.36 36.72 92.58 36.73 92.8 36.75 92.99 36.79 93.18 36.84 93.35 36.9 93.5 36.97 93.65 37.05 93.79 37.14 93.91 37.23 94.03 37.33 94.12 37.42 94.22 37.52 94.29 37.62 94.36 37.72 94.42 37.81 94.47 37.9 94.47 37.9 95 34.92 97.06 34.92 95.35 44.85"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "91.91 43.01 92.12 43 92.32 42.95 92.5 42.9 92.68 42.81 92.83 42.73 92.99 42.61 93.13 42.48 93.26 42.34 93.37 42.19 93.48 42.02 93.58 41.85 93.66 41.67 93.74 41.48 93.8 41.28 93.85 41.08 93.89 40.87 93.93 40.66 93.95 40.44 93.95 40.23 93.94 40.02 93.92 39.82 93.89 39.63 93.84 39.45 93.78 39.28 93.7 39.13 93.61 38.98 93.51 38.86 93.4 38.75 93.27 38.66 93.13 38.6 92.99 38.56 92.83 38.55 92.62 38.56 92.43 38.59 92.26 38.66 92.08 38.73 91.93 38.83 91.78 38.95 91.65 39.08 91.52 39.23 91.41 39.39 91.3 39.57 91.2 39.75 91.12 39.95 91.04 40.15 90.98 40.36 90.92 40.58 90.88 40.8 90.84 41.13 90.85 41.49 90.91 41.87 91 42.22 91.16 42.53 91.35 42.78 91.6 42.95 91.91 43.01 91.91 43.01 91.91 43.01"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "45.29 43.16 44.99 44.85 43.08 44.85 43.13 44.54 43.17 44.26 43.2 44.04 43.23 43.93 43.12 44.05 43 44.17 42.86 44.29 42.7 44.39 42.52 44.5 42.32 44.59 42.13 44.68 41.92 44.76 41.7 44.83 41.48 44.88 41.26 44.92 41.03 44.95 40.81 44.97 40.6 44.98 40.38 44.95 40.18 44.92 39.91 44.86 39.67 44.78 39.45 44.68 39.27 44.57 39.1 44.45 38.95 44.31 38.83 44.16 38.72 44.01 38.63 43.85 38.55 43.69 38.49 43.52 38.45 43.35 38.42 43.18 38.39 43 38.38 42.84 38.38 42.67 38.4 42.37 38.45 42.09 38.52 41.83 38.62 41.57 38.74 41.33 38.88 41.11 39.04 40.9 39.22 40.7 39.41 40.53 39.62 40.37 39.84 40.23 40.07 40.1 40.31 40 40.56 39.91 40.82 39.85 41.09 39.8 41.1 39.8 41.14 39.79 41.19 39.79 41.28 39.78 41.37 39.76 41.48 39.76 41.59 39.74 41.72 39.73 41.85 39.71 41.98 39.7 42.11 39.69 42.23 39.67 42.35 39.66 42.47 39.66 42.57 39.65 42.66 39.65 42.83 39.65 43.02 39.66 43.18 39.66 43.35 39.66 43.49 39.67 43.59 39.68 43.67 39.69 43.69 39.69 43.71 39.63 43.75 39.5 43.79 39.34 43.8 39.19 43.77 39.03 43.71 38.87 43.62 38.74 43.49 38.62 43.35 38.53 43.19 38.46 43.01 38.41 42.81 38.4 42.6 38.39 42.37 38.38 42.13 38.38 41.89 38.39 41.64 38.41 41.4 38.43 41.16 38.45 40.92 38.48 40.69 38.51 40.47 38.55 40.27 38.59 40.09 38.62 39.93 38.67 39.79 38.72 39.68 38.77 39.6 38.81 40.14 36.98 40.31 36.92 40.47 36.86 40.66 36.8 40.84 36.76 41.02 36.73 41.22 36.7 41.41 36.67 41.62 36.65 41.83 36.64 42.05 36.63 42.28 36.62 42.52 36.62 42.76 36.62 43.01 36.62 43.27 36.63 43.54 36.64 43.75 36.65 43.98 36.69 44.22 36.74 44.46 36.81 44.69 36.9 44.92 37.01 45.15 37.14 45.36 37.28 45.55 37.45 45.72 37.63 45.87 37.83 45.98 38.06 46.06 38.31 46.1 38.56 46.1 38.85 46.06 39.16 45.29 43.16 45.29 43.16 45.29 43.16"
  }), (0, _core.jsx)("polyline", {
    className: "mc-5",
    points: "45.29 43.16 44.99 44.85 43.08 44.85 43.08 44.85 43.13 44.54 43.17 44.26 43.2 44.04 43.23 43.93 43.23 43.93 43.12 44.05 43 44.17 42.86 44.29 42.7 44.39 42.52 44.5 42.32 44.59 42.13 44.68 41.92 44.76 41.7 44.83 41.48 44.88 41.26 44.92 41.03 44.95 40.81 44.97 40.6 44.98 40.38 44.95 40.18 44.92 40.18 44.92 39.91 44.86 39.67 44.78 39.45 44.68 39.27 44.57 39.1 44.45 38.95 44.31 38.83 44.16 38.72 44.01 38.63 43.85 38.55 43.69 38.49 43.52 38.45 43.35 38.42 43.18 38.39 43 38.38 42.84 38.38 42.67 38.38 42.67 38.4 42.37 38.45 42.09 38.52 41.83 38.62 41.57 38.74 41.33 38.88 41.11 39.04 40.9 39.22 40.7 39.41 40.53 39.62 40.37 39.84 40.23 40.07 40.1 40.31 40 40.56 39.91 40.82 39.85 41.09 39.8 41.09 39.8 41.1 39.8 41.14 39.79 41.19 39.79 41.28 39.78 41.37 39.76 41.48 39.76 41.59 39.74 41.72 39.73 41.85 39.71 41.98 39.7 42.11 39.69 42.23 39.67 42.35 39.66 42.47 39.66 42.57 39.65 42.66 39.65 42.66 39.65 42.83 39.65 43.02 39.66 43.18 39.66 43.35 39.66 43.49 39.67 43.59 39.68 43.67 39.69 43.69 39.69 43.69 39.69 43.71 39.63 43.75 39.5 43.79 39.34 43.8 39.19 43.8 39.19 43.77 39.03 43.71 38.87 43.62 38.74 43.49 38.62 43.35 38.53 43.19 38.46 43.01 38.41 42.81 38.4 42.81 38.4 42.6 38.39 42.37 38.38 42.13 38.38 41.89 38.39 41.64 38.41 41.4 38.43 41.16 38.45 40.92 38.48 40.69 38.51 40.47 38.55 40.27 38.59 40.09 38.62 39.93 38.67 39.79 38.72 39.68 38.77 39.6 38.81 40.14 36.98 40.14 36.98 40.31 36.92 40.47 36.86 40.66 36.8 40.84 36.76 41.02 36.73 41.22 36.7 41.41 36.67 41.62 36.65 41.83 36.64 42.05 36.63 42.28 36.62 42.52 36.62 42.76 36.62 43.01 36.62 43.27 36.63 43.54 36.64 43.54 36.64 43.75 36.65 43.98 36.69 44.22 36.74 44.46 36.81 44.69 36.9 44.92 37.01 45.15 37.14 45.36 37.28 45.55 37.45 45.72 37.63 45.87 37.83 45.98 38.06 46.06 38.31 46.1 38.56 46.1 38.85 46.06 39.16 45.29 43.16"
  }), (0, _core.jsx)("polygon", {
    className: "mc-3",
    points: "43.47 41.18 43.46 41.15 43.43 41.11 43.38 41.08 43.3 41.07 43.22 41.05 43.12 41.05 43.01 41.05 42.89 41.05 42.77 41.05 42.64 41.07 42.52 41.08 42.4 41.1 42.29 41.12 42.18 41.14 42.09 41.16 42.01 41.18 41.95 41.2 41.89 41.22 41.81 41.25 41.73 41.29 41.63 41.33 41.53 41.39 41.42 41.44 41.32 41.5 41.22 41.58 41.12 41.65 41.03 41.74 40.94 41.84 40.87 41.93 40.81 42.04 40.77 42.16 40.75 42.28 40.74 42.54 40.78 42.75 40.85 42.9 40.95 43.01 41.06 43.09 41.19 43.13 41.31 43.16 41.44 43.16 41.67 43.16 41.87 43.13 42.07 43.1 42.24 43.06 42.39 43 42.54 42.94 42.67 42.87 42.78 42.78 42.88 42.71 42.97 42.62 43.05 42.53 43.11 42.44 43.16 42.35 43.2 42.26 43.24 42.18 43.27 42.09 43.33 41.87 43.38 41.62 43.43 41.38 43.47 41.18 43.47 41.18 43.47 41.18"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "29.32 44.85 27.26 44.85 28.98 34.88 32.57 34.88 32.91 40.8 35.39 34.88 39.14 34.88 37.38 44.85 35.32 44.85 36.62 37.4 36.54 37.4 33.45 44.85 31.12 44.85 31.11 44.54 31.05 43.71 30.98 42.53 30.91 41.18 30.83 39.82 30.76 38.63 30.71 37.77 30.7 37.4 30.67 37.4 30.63 37.4 30.58 37.4 30.58 37.4 29.32 44.85 29.32 44.85 29.32 44.85"
  }), (0, _core.jsx)("polyline", {
    className: "mc-5",
    points: "29.32 44.85 27.26 44.85 28.98 34.88 32.57 34.88 32.91 40.8 35.39 34.88 39.14 34.88 37.38 44.85 35.32 44.85 36.62 37.4 36.54 37.4 33.45 44.85 31.12 44.85 31.12 44.85 31.11 44.54 31.05 43.71 30.98 42.53 30.91 41.18 30.83 39.82 30.76 38.63 30.71 37.77 30.7 37.4 30.7 37.4 30.67 37.4 30.63 37.4 30.58 37.4 30.58 37.4 29.32 44.85"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "82.97 43.16 82.66 44.85 80.75 44.85 80.77 44.54 80.77 44.27 80.77 44.06 80.79 43.97 80.69 44.08 80.57 44.2 80.44 44.3 80.29 44.41 80.13 44.51 79.94 44.6 79.76 44.69 79.57 44.77 79.36 44.83 79.15 44.89 78.94 44.92 78.72 44.95 78.5 44.97 78.29 44.98 78.08 44.95 77.88 44.92 77.61 44.86 77.36 44.78 77.15 44.68 76.95 44.57 76.79 44.45 76.64 44.31 76.52 44.16 76.41 44.01 76.32 43.85 76.26 43.69 76.19 43.52 76.16 43.35 76.13 43.18 76.1 43 76.09 42.84 76.09 42.67 76.1 42.37 76.15 42.09 76.22 41.83 76.32 41.57 76.43 41.33 76.58 41.11 76.73 40.9 76.91 40.7 77.11 40.53 77.31 40.37 77.53 40.23 77.77 40.1 78 40 78.25 39.91 78.5 39.85 78.76 39.8 78.78 39.8 78.81 39.79 78.87 39.79 78.94 39.78 79.04 39.76 79.15 39.76 79.26 39.74 79.38 39.73 79.51 39.71 79.65 39.7 79.78 39.69 79.91 39.67 80.03 39.66 80.14 39.66 80.24 39.65 80.32 39.65 80.51 39.65 80.69 39.66 80.86 39.66 81.03 39.66 81.17 39.67 81.3 39.68 81.36 39.69 81.4 39.69 81.41 39.63 81.43 39.5 81.45 39.34 81.47 39.19 81.44 39.03 81.38 38.87 81.28 38.74 81.17 38.62 81.03 38.53 80.87 38.46 80.7 38.41 80.52 38.4 80.31 38.39 80.08 38.38 79.85 38.38 79.6 38.39 79.35 38.41 79.11 38.43 78.87 38.45 78.63 38.48 78.4 38.51 78.18 38.55 77.99 38.59 77.81 38.62 77.64 38.67 77.5 38.72 77.39 38.77 77.31 38.81 77.84 36.98 78.01 36.92 78.18 36.86 78.36 36.8 78.54 36.76 78.73 36.73 78.92 36.7 79.12 36.67 79.32 36.65 79.53 36.64 79.76 36.63 79.97 36.62 80.21 36.62 80.44 36.62 80.69 36.62 80.95 36.63 81.2 36.64 81.42 36.65 81.65 36.69 81.88 36.74 82.13 36.81 82.36 36.9 82.59 37.01 82.82 37.14 83.03 37.28 83.22 37.45 83.4 37.63 83.55 37.83 83.66 38.06 83.75 38.31 83.8 38.56 83.8 38.85 83.76 39.16 82.97 43.16 82.97 43.16 82.97 43.16"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "82.66 44.9 82.7 44.86 83.01 43.17 82.92 43.16 82.61 44.84 82.66 44.8 82.66 44.9 82.69 44.89 82.7 44.86 82.66 44.9 82.66 44.9 82.66 44.9"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "80.7 44.85 80.75 44.9 82.66 44.9 82.66 44.8 80.75 44.8 80.8 44.85 80.7 44.85 80.7 44.9 80.75 44.9 80.7 44.85 80.7 44.85 80.7 44.85"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "80.83 44 80.76 43.94 80.73 44.06 80.72 44.27 80.72 44.54 80.7 44.85 80.8 44.85 80.81 44.54 80.83 44.27 80.82 44.06 80.82 44 80.75 43.94 80.83 44 80.83 44 80.83 44"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "77.87 44.97 77.87 44.97 78.08 45 78.29 45.02 78.5 45.02 78.72 45 78.94 44.97 79.16 44.93 79.37 44.87 79.58 44.81 79.77 44.73 79.97 44.65 80.15 44.55 80.31 44.45 80.47 44.34 80.61 44.23 80.73 44.11 80.83 44 80.75 43.94 80.65 44.05 80.55 44.16 80.41 44.27 80.26 44.37 80.1 44.46 79.92 44.55 79.74 44.65 79.55 44.72 79.35 44.78 79.14 44.84 78.93 44.88 78.72 44.91 78.5 44.92 78.29 44.93 78.08 44.91 77.89 44.88 77.89 44.88 77.87 44.97 77.87 44.97 77.87 44.97"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "76.03 42.67 76.03 42.67 76.04 42.84 76.06 43 76.08 43.19 76.11 43.36 76.15 43.53 76.21 43.7 76.28 43.88 76.38 44.04 76.48 44.2 76.61 44.34 76.76 44.48 76.93 44.61 77.13 44.73 77.35 44.83 77.6 44.9 77.87 44.97 77.89 44.88 77.61 44.81 77.38 44.73 77.17 44.64 76.98 44.53 76.82 44.41 76.68 44.28 76.56 44.13 76.45 43.99 76.37 43.83 76.3 43.67 76.24 43.51 76.2 43.35 76.17 43.17 76.15 43 76.14 42.84 76.14 42.67 76.14 42.67 76.03 42.67 76.03 42.67 76.03 42.67"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "78.76 39.76 78.76 39.76 78.5 39.8 78.24 39.87 77.99 39.95 77.74 40.06 77.51 40.18 77.28 40.33 77.08 40.49 76.88 40.67 76.69 40.86 76.54 41.08 76.39 41.3 76.27 41.55 76.17 41.81 76.1 42.09 76.06 42.37 76.03 42.67 76.14 42.67 76.15 42.37 76.19 42.1 76.26 41.84 76.36 41.59 76.48 41.35 76.61 41.14 76.77 40.92 76.94 40.73 77.14 40.57 77.34 40.41 77.55 40.27 77.79 40.15 78.02 40.04 78.27 39.96 78.51 39.89 78.76 39.85 78.76 39.85 78.76 39.76 78.76 39.76 78.76 39.76"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "80.32 39.6 80.32 39.6 80.24 39.6 80.14 39.61 80.03 39.62 79.91 39.63 79.78 39.64 79.65 39.65 79.51 39.66 79.38 39.68 79.26 39.7 79.15 39.71 79.04 39.72 78.94 39.73 78.87 39.74 78.81 39.75 78.78 39.76 78.76 39.76 78.76 39.85 78.78 39.85 78.82 39.84 78.87 39.83 78.94 39.82 79.04 39.81 79.15 39.8 79.26 39.79 79.38 39.77 79.51 39.76 79.65 39.74 79.78 39.73 79.91 39.72 80.03 39.71 80.14 39.7 80.24 39.7 80.32 39.7 80.32 39.7 80.32 39.6 80.32 39.6 80.32 39.6"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "81.35 39.68 81.4 39.64 81.36 39.64 81.3 39.63 81.17 39.63 81.03 39.61 80.86 39.61 80.69 39.61 80.51 39.6 80.32 39.6 80.32 39.7 80.51 39.7 80.69 39.7 80.86 39.72 81.03 39.72 81.17 39.72 81.3 39.73 81.36 39.73 81.4 39.73 81.44 39.7 81.4 39.73 81.43 39.74 81.44 39.7 81.35 39.68 81.35 39.68 81.35 39.68"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "81.43 39.19 81.42 39.19 81.41 39.34 81.39 39.49 81.36 39.63 81.35 39.68 81.44 39.7 81.45 39.64 81.48 39.5 81.5 39.34 81.53 39.19 81.52 39.19 81.43 39.19 81.43 39.19 81.43 39.19"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "80.52 38.44 80.52 38.45 80.7 38.46 80.86 38.5 81.01 38.57 81.14 38.66 81.24 38.77 81.33 38.9 81.4 39.03 81.43 39.19 81.52 39.19 81.49 39.02 81.43 38.85 81.32 38.71 81.2 38.59 81.05 38.48 80.89 38.41 80.71 38.37 80.52 38.34 80.52 38.35 80.52 38.44 80.52 38.44 80.52 38.44"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "77.27 38.81 77.34 38.85 77.42 38.81 77.52 38.76 77.64 38.72 77.81 38.67 77.99 38.63 78.19 38.59 78.41 38.56 78.63 38.53 78.87 38.49 79.11 38.47 79.35 38.45 79.6 38.44 79.85 38.44 80.08 38.44 80.31 38.44 80.52 38.44 80.52 38.35 80.31 38.34 80.08 38.33 79.85 38.33 79.6 38.34 79.35 38.36 79.11 38.38 78.87 38.41 78.63 38.44 78.4 38.46 78.18 38.5 77.98 38.54 77.8 38.58 77.63 38.62 77.49 38.67 77.37 38.72 77.28 38.78 77.36 38.82 77.27 38.81 77.27 38.81 77.27 38.81"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "77.83 36.94 77.8 36.98 77.27 38.81 77.36 38.82 77.89 36.99 77.86 37.03 77.83 36.94 77.81 36.95 77.8 36.98 77.83 36.94 77.83 36.94 77.83 36.94"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "81.2 36.59 81.2 36.59 80.95 36.58 80.69 36.57 80.44 36.57 80.21 36.57 79.97 36.57 79.76 36.58 79.53 36.59 79.32 36.61 79.12 36.62 78.91 36.65 78.72 36.68 78.53 36.72 78.35 36.76 78.17 36.81 77.99 36.87 77.83 36.94 77.86 37.03 78.03 36.96 78.2 36.9 78.36 36.85 78.55 36.81 78.74 36.77 78.93 36.74 79.12 36.71 79.32 36.7 79.53 36.68 79.76 36.67 79.97 36.67 80.21 36.67 80.44 36.67 80.69 36.67 80.95 36.68 81.2 36.68 81.2 36.68 81.2 36.59 81.2 36.59 81.2 36.59"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "83.81 39.16 83.81 39.16 83.85 38.85 83.85 38.56 83.8 38.3 83.71 38.05 83.59 37.81 83.44 37.6 83.25 37.41 83.06 37.24 82.85 37.1 82.62 36.96 82.38 36.86 82.14 36.76 81.89 36.7 81.65 36.64 81.42 36.61 81.2 36.59 81.2 36.68 81.42 36.7 81.64 36.73 81.87 36.79 82.11 36.86 82.34 36.95 82.57 37.05 82.8 37.17 83 37.32 83.19 37.48 83.36 37.66 83.51 37.86 83.62 38.08 83.7 38.31 83.76 38.56 83.76 38.85 83.72 39.15 83.72 39.15 83.81 39.16 83.81 39.16 83.81 39.16"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "83.01 43.17 83.01 43.17 83.81 39.16 83.72 39.15 82.92 43.16 82.92 43.16 83.01 43.17 83.01 43.17 83.01 43.17"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "81.13 41.18 81.11 41.14 81.08 41.1 81.03 41.08 80.95 41.05 80.87 41.05 80.77 41.04 80.66 41.04 80.55 41.05 80.42 41.06 80.3 41.08 80.18 41.09 80.07 41.11 79.95 41.13 79.85 41.15 79.76 41.17 79.68 41.18 79.63 41.19 79.57 41.21 79.49 41.24 79.41 41.27 79.31 41.31 79.22 41.36 79.11 41.41 79.01 41.48 78.91 41.55 78.81 41.63 78.73 41.71 78.65 41.81 78.58 41.92 78.53 42.03 78.48 42.15 78.46 42.28 78.45 42.54 78.49 42.75 78.55 42.9 78.64 43.01 78.75 43.09 78.88 43.13 79.01 43.16 79.14 43.16 79.37 43.16 79.58 43.13 79.78 43.09 79.95 43.04 80.12 42.98 80.26 42.91 80.4 42.84 80.52 42.75 80.63 42.66 80.72 42.56 80.8 42.47 80.87 42.37 80.92 42.28 80.96 42.19 80.99 42.1 81.02 42.02 81.05 41.8 81.08 41.59 81.11 41.37 81.13 41.18 81.13 41.18 81.13 41.18"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "96.77 43.81 96.78 43.63 96.84 43.43 96.95 43.25 97.08 43.09 97.24 42.96 97.42 42.87 97.61 42.81 97.83 42.78 98.04 42.81 98.24 42.87 98.42 42.96 98.58 43.09 98.71 43.25 98.81 43.43 98.88 43.63 98.89 43.81 98.66 43.81 98.66 43.67 98.61 43.51 98.53 43.35 98.44 43.22 98.31 43.12 98.17 43.04 98 42.99 97.83 42.97 97.65 42.99 97.49 43.04 97.34 43.12 97.22 43.22 97.12 43.35 97.05 43.51 97 43.67 96.99 43.81 96.77 43.81 96.77 43.81 96.77 43.81"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "97.45 43.81 97.45 43.35 97.87 43.35 97.96 43.36 98.04 43.38 98.1 43.4 98.16 43.43 98.19 43.48 98.22 43.52 98.24 43.57 98.25 43.63 98.24 43.7 98.22 43.75 98.2 43.79 98.19 43.81 97.87 43.81 97.9 43.8 97.95 43.79 98 43.78 98.03 43.76 98.06 43.74 98.08 43.72 98.1 43.68 98.1 43.63 98.09 43.59 98.07 43.56 98.05 43.54 98.03 43.53 97.99 43.52 97.95 43.51 97.91 43.51 97.87 43.51 97.64 43.51 97.64 43.81 97.45 43.81 97.45 43.81 97.45 43.81"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "96.77 43.81 96.76 43.85 96.78 44.08 96.84 44.28 96.95 44.46 97.08 44.61 97.24 44.74 97.42 44.84 97.61 44.9 97.83 44.92 98.04 44.9 98.24 44.84 98.42 44.74 98.58 44.61 98.71 44.46 98.81 44.28 98.88 44.08 98.9 43.85 98.89 43.81 98.66 43.81 98.67 43.85 98.66 44.04 98.61 44.2 98.53 44.35 98.44 44.48 98.31 44.58 98.17 44.67 98 44.72 97.83 44.73 97.65 44.72 97.49 44.67 97.34 44.58 97.22 44.48 97.12 44.35 97.05 44.2 97 44.04 96.99 43.85 96.99 43.81 96.77 43.81 96.77 43.81 96.77 43.81"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "97.45 43.81 97.45 44.27 97.64 44.27 97.64 43.89 97.83 43.89 98.06 44.27 98.21 44.27 97.98 43.89 98.03 43.89 98.09 43.88 98.13 43.86 98.17 43.83 98.19 43.81 97.87 43.81 97.83 43.82 97.64 43.82 97.64 43.81 97.45 43.81 97.45 43.81 97.45 43.81"
  }), (0, _core.jsx)("path", {
    className: "mc-5",
    d: "M96.76,43.85h0l0-.22.06-.2.11-.18.13-.16.16-.13.18-.09.2-.06.21,0h0l.21,0,.2.06.18.09.16.13.13.16.1.18.07.2,0,.22h0l0,.22-.07.21-.1.18-.13.15-.16.13-.18.1-.2.06-.21,0h0l-.21,0-.2-.06-.18-.1-.16-.13L97,44.46l-.11-.18-.06-.21,0-.22m.88.42h-.19v-.92H98l.08,0,.06,0,.06,0,0,0,0,0,0,0v.06h0v.06l0,.06,0,0,0,0,0,0,0,0H98l.23.38h-.15l-.23-.38h-.19v.38m.19-.45h0l.07,0H98l0,0,0,0,0,0,0,0v0h0v0l0,0,0,0h-.41v.31h.19m0,.91H98l.17,0,.14-.09.13-.1.1-.13.07-.15,0-.16v-.19h0v-.18l0-.17-.07-.15-.1-.13-.13-.1L98.17,43,98,43l-.17,0h0l-.18,0-.16,0-.15.08-.12.1-.1.13-.07.15,0,.17v.18h0V44l0,.16.07.15.1.13.12.1.15.09.16,0h.18"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "83.53 44.85 85.68 44.85 85.68 44.85 86.44 40.53 86.47 40.36 86.52 40.2 86.56 40.03 86.63 39.86 86.7 39.7 86.79 39.53 86.89 39.38 87.01 39.24 87.15 39.11 87.3 38.99 87.47 38.87 87.67 38.78 87.89 38.71 88.14 38.65 88.4 38.6 88.7 38.59 88.81 38.59 88.86 38.59 88.89 38.59 88.89 38.59 89.23 36.64 89.02 36.65 88.81 36.67 88.62 36.71 88.44 36.76 88.27 36.83 88.11 36.9 87.96 36.98 87.82 37.08 87.68 37.18 87.55 37.29 87.43 37.41 87.31 37.53 87.19 37.66 87.08 37.8 86.97 37.94 86.86 38.09 87.09 36.72 84.95 36.72 83.53 44.85 83.53 44.85 83.53 44.85 83.53 44.85"
  }), (0, _core.jsx)("polyline", {
    className: "mc-5",
    points: "83.53 44.85 85.68 44.85 85.68 44.85 86.44 40.53 86.44 40.53 86.47 40.36 86.52 40.2 86.56 40.03 86.63 39.86 86.7 39.7 86.79 39.53 86.89 39.38 87.01 39.24 87.15 39.11 87.3 38.99 87.47 38.87 87.67 38.78 87.89 38.71 88.14 38.65 88.4 38.6 88.7 38.59 88.7 38.59 88.81 38.59 88.86 38.59 88.89 38.59 88.89 38.59 89.23 36.64 89.23 36.64 89.02 36.65 88.81 36.67 88.62 36.71 88.44 36.76 88.27 36.83 88.11 36.9 87.96 36.98 87.82 37.08 87.68 37.18 87.55 37.29 87.43 37.41 87.31 37.53 87.19 37.66 87.08 37.8 86.97 37.94 86.86 38.09 87.09 36.72 84.95 36.72 83.53 44.85 83.53 44.85"
  }), (0, _core.jsx)("polygon", {
    className: "mc-4",
    points: "63.44 44.85 65.58 44.85 65.61 44.85 66.34 40.53 66.37 40.36 66.41 40.2 66.45 40.04 66.5 39.89 66.56 39.74 66.64 39.6 66.73 39.46 66.84 39.33 66.96 39.22 67.09 39.1 67.26 39.01 67.44 38.93 67.66 38.86 67.89 38.8 68.15 38.76 68.44 38.74 68.47 38.74 68.5 38.75 68.53 38.75 68.57 38.75 68.61 38.76 68.64 38.77 68.66 38.78 68.67 38.78 68.68 38.75 68.7 38.66 68.73 38.52 68.77 38.35 68.82 38.15 68.88 37.94 68.95 37.73 69.01 37.52 69.08 37.37 69.15 37.23 69.23 37.08 69.3 36.95 69.37 36.84 69.42 36.75 69.46 36.7 69.48 36.67 69.47 36.67 69.44 36.67 69.4 36.66 69.35 36.65 69.3 36.65 69.23 36.64 69.18 36.64 69.13 36.64 68.89 36.65 68.68 36.67 68.48 36.71 68.3 36.76 68.13 36.82 67.97 36.9 67.82 36.97 67.69 37.06 67.56 37.16 67.44 37.27 67.32 37.39 67.21 37.52 67.09 37.65 66.99 37.79 66.87 37.94 66.76 38.09 67.03 36.72 64.86 36.72 63.44 44.85 63.44 44.85 63.44 44.85 63.44 44.85"
  }), (0, _core.jsx)("polyline", {
    className: "mc-5",
    points: "63.44 44.85 65.58 44.85 65.61 44.85 66.34 40.53 66.34 40.53 66.37 40.36 66.41 40.2 66.45 40.04 66.5 39.89 66.56 39.74 66.64 39.6 66.73 39.46 66.84 39.33 66.96 39.22 67.09 39.1 67.26 39.01 67.44 38.93 67.66 38.86 67.89 38.8 68.15 38.76 68.44 38.74 68.44 38.74 68.47 38.74 68.5 38.75 68.53 38.75 68.57 38.75 68.61 38.76 68.64 38.77 68.66 38.78 68.67 38.78 68.67 38.78 68.68 38.75 68.7 38.66 68.73 38.52 68.77 38.35 68.82 38.15 68.88 37.94 68.95 37.73 69.01 37.52 69.01 37.52 69.08 37.37 69.15 37.23 69.23 37.08 69.3 36.95 69.37 36.84 69.42 36.75 69.46 36.7 69.48 36.67 69.48 36.67 69.47 36.67 69.44 36.67 69.4 36.66 69.35 36.65 69.3 36.65 69.23 36.64 69.18 36.64 69.13 36.64 69.13 36.64 68.89 36.65 68.68 36.67 68.48 36.71 68.3 36.76 68.13 36.82 67.97 36.9 67.82 36.97 67.69 37.06 67.56 37.16 67.44 37.27 67.32 37.39 67.21 37.52 67.09 37.65 66.99 37.79 66.87 37.94 66.76 38.09 67.03 36.72 64.86 36.72 63.44 44.85 63.44 44.85"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "96.78 52.83 96.78 52.8 96.84 52.61 96.95 52.43 97.08 52.28 97.24 52.16 97.42 52.07 97.61 52.02 97.83 51.99 98.04 52.02 98.24 52.07 98.42 52.16 98.58 52.28 98.71 52.43 98.81 52.61 98.88 52.8 98.88 52.83 98.66 52.83 98.61 52.68 98.53 52.53 98.44 52.4 98.31 52.3 98.17 52.21 98 52.16 97.83 52.14 97.65 52.16 97.49 52.21 97.34 52.3 97.22 52.4 97.12 52.53 97.05 52.68 97 52.83 96.78 52.83 96.78 52.83 96.78 52.83"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "97.45 52.83 97.45 52.57 97.87 52.57 97.96 52.57 98.04 52.58 98.1 52.6 98.16 52.63 98.19 52.67 98.22 52.71 98.24 52.77 98.25 52.83 98.1 52.83 98.1 52.8 98.09 52.76 98.07 52.73 98.05 52.71 98.03 52.7 97.99 52.69 97.95 52.68 97.91 52.68 97.87 52.68 97.64 52.68 97.64 52.83 97.45 52.83 97.45 52.83 97.45 52.83"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "96.76 53 96.78 52.83 97 52.83 97 52.84 96.99 53 96.76 53 96.76 53 96.76 53"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "97.45 53 97.45 52.83 97.64 52.83 97.64 52.99 97.83 52.99 97.9 52.97 97.95 52.96 98 52.95 98.03 52.93 98.06 52.91 98.08 52.89 98.1 52.85 98.1 52.83 98.25 52.83 98.25 52.83 98.24 52.89 98.22 52.93 98.2 52.97 98.17 53 97.45 53 97.45 53 97.45 53"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "98.67 53 98.66 52.84 98.66 52.83 98.88 52.83 98.9 53 98.67 53 98.67 53 98.67 53"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "96.76 53 96.76 53.02 96.78 53.24 96.84 53.45 96.95 53.63 97.08 53.79 97.24 53.92 97.42 54.01 97.61 54.07 97.83 54.09 98.04 54.07 98.24 54.01 98.42 53.92 98.58 53.79 98.71 53.63 98.81 53.45 98.88 53.24 98.9 53.02 98.9 53 98.67 53 98.67 53.02 98.66 53.21 98.61 53.37 98.53 53.52 98.44 53.65 98.31 53.75 98.17 53.84 98 53.89 97.83 53.91 97.65 53.89 97.49 53.84 97.34 53.75 97.22 53.65 97.12 53.52 97.05 53.37 97 53.21 96.99 53.02 96.99 53 96.76 53 96.76 53 96.76 53"
  }), (0, _core.jsx)("polygon", {
    className: "mc-2",
    points: "97.45 53 97.45 53.44 97.64 53.44 97.64 53.06 97.83 53.06 98.06 53.44 98.21 53.44 97.98 53.06 98.03 53.06 98.09 53.05 98.13 53.03 98.17 53 98.17 53 97.45 53 97.45 53 97.45 53"
  }), (0, _core.jsx)("path", {
    className: "mc-4",
    d: "M63.67,39.14l-.06-.45-.11-.41-.15-.35-.19-.3-.23-.26-.25-.21L62.41,37l-.29-.14-.31-.11-.31-.08-.31,0-.31,0h-.3l-.61,0-.55.09-.49.14-.44.19-.38.23-.34.25-.29.29-.25.31L57,38.4l-.17.34-.14.33-.11.32-.09.32-.06.3,0,.28,0,.24,0,.62,0,.56.08.51.13.45.19.4.21.35.26.31.3.26.32.22.34.19.36.15.37.11.38.09.38,0,.38,0h1.43l.16,0h.15l.14,0,.13,0,.12,0,.12,0,.12,0,.11,0,.12,0,.12-.07.12-.06.31-1.86-.22.13-.21.12-.23.09-.21.08-.2.07-.21,0-.21,0-.21,0-.2,0h-.6l-.2,0-.2,0-.18,0-.2,0-.15,0L59.62,43l-.15-.06-.13-.09-.14-.09-.12-.11L59,42.53l-.1-.13-.09-.12-.09-.15L58.62,42l0-.14,0-.14v-.28l0-.1h4.92l0-.46.11-.64.06-.57Zm-2.06.7H58.84l0-.1,0-.16,0-.16.06-.15.06-.13.07-.13.09-.13.09-.11.1-.11.09-.09.12-.08.11-.07.13-.06.13,0,.13,0,.14,0h.14l.14,0,.13,0,.12,0,.12,0,.11.06.12.07.1.07.09.09.07.11.08.11.05.13.06.15,0,.15v.35Z"
  }))));
};

var _default = MasterCard;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MasterCard, "MasterCard", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/SVG/MasterCard.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/SVG/MasterCard.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js"}],"src/Components/FormComponents/SVG/Discover.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Discover = function Discover() {
  return (0, _core.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 125.43 78.39"
  }, (0, _core.jsx)("defs", null, (0, _core.jsx)("radialGradient", {
    id: "radial-gradient",
    cx: "57.82",
    cy: "-446.88",
    r: "6.18",
    gradientTransform: "translate(6.42 486.08)",
    gradientUnits: "userSpaceOnUse"
  }, (0, _core.jsx)("stop", {
    offset: "0.01",
    stopColor: "#ffeee0"
  }), (0, _core.jsx)("stop", {
    offset: "0.11",
    stopColor: "#fee9d7"
  }), (0, _core.jsx)("stop", {
    offset: "0.28",
    stopColor: "#fddbbf"
  }), (0, _core.jsx)("stop", {
    offset: "0.49",
    stopColor: "#fbc597"
  }), (0, _core.jsx)("stop", {
    offset: "0.74",
    stopColor: "#f8a560"
  }), (0, _core.jsx)("stop", {
    offset: "1",
    stopColor: "#f48120"
  }))), (0, _core.jsx)("title", null, "discoverAsset 3"), (0, _core.jsx)("g", {
    id: "Layer_2"
  }, (0, _core.jsx)("g", {
    id: "Layer_1-2"
  }, (0, _core.jsx)("rect", {
    className: "ds-1",
    width: "125.43",
    height: "78.39",
    rx: "4.18"
  }), (0, _core.jsx)("path", {
    className: "ds-2",
    d: "M34.48,78.39h86.77a4.18,4.18,0,0,0,4.18-4.18V44.86C117.1,50.14,85.7,68.34,34.48,78.39Z"
  }), (0, _core.jsx)("path", {
    className: "ds-3",
    d: "M64.25,33.09a6.15,6.15,0,0,0-6.26,6,6.25,6.25,0,1,0,6.26-6Z"
  }), (0, _core.jsx)("path", {
    className: "ds-4",
    d: "M28.71,33.31H25.35V45.05h3.34a6.14,6.14,0,0,0,4.19-1.35A5.92,5.92,0,0,0,35,39.19C35,35.72,32.42,33.31,28.71,33.31Zm2.68,8.82a4.37,4.37,0,0,1-3.14.93h-.62V35.3h.62a4.24,4.24,0,0,1,3.14,1,3.93,3.93,0,0,1,1.26,2.92A4,4,0,0,1,31.39,42.13Z"
  }), (0, _core.jsx)("rect", {
    className: "ds-4",
    x: "36.07",
    y: "33.31",
    width: "2.29",
    height: "11.74"
  }), (0, _core.jsx)("path", {
    className: "ds-4",
    d: "M44,37.81c-1.37-.51-1.78-.84-1.78-1.47s.72-1.3,1.71-1.3a2.39,2.39,0,0,1,1.85.94l1.2-1.56a5.12,5.12,0,0,0-3.46-1.3,3.45,3.45,0,0,0-3.66,3.36c0,1.62.74,2.44,2.89,3.22a8.06,8.06,0,0,1,1.59.67A1.41,1.41,0,0,1,45,41.58a1.67,1.67,0,0,1-1.78,1.65,2.68,2.68,0,0,1-2.49-1.56L39.22,43.1a4.57,4.57,0,0,0,4.06,2.23,3.78,3.78,0,0,0,4-3.85C47.33,39.61,46.56,38.77,44,37.81Z"
  }), (0, _core.jsx)("path", {
    className: "ds-4",
    d: "M48.05,39.19a6.08,6.08,0,0,0,6.2,6.12,6.34,6.34,0,0,0,2.87-.68v-2.7a3.67,3.67,0,0,1-2.77,1.29,3.84,3.84,0,0,1-3.94-4,3.9,3.9,0,0,1,3.84-4,3.84,3.84,0,0,1,2.87,1.32V33.77a5.83,5.83,0,0,0-2.82-.72A6.17,6.17,0,0,0,48.05,39.19Z"
  }), (0, _core.jsx)("polygon", {
    className: "ds-4",
    points: "75.67 41.2 72.53 33.31 70.03 33.31 75.02 45.35 76.25 45.35 81.32 33.31 78.84 33.31 75.67 41.2"
  }), (0, _core.jsx)("polygon", {
    className: "ds-4",
    points: "82.36 45.05 88.85 45.05 88.85 43.06 84.64 43.06 84.64 39.89 88.69 39.89 88.69 37.9 84.64 37.9 84.64 35.3 88.85 35.3 88.85 33.31 82.36 33.31 82.36 45.05"
  }), (0, _core.jsx)("path", {
    className: "ds-4",
    d: "M97.91,36.78c0-2.2-1.51-3.47-4.15-3.47h-3.4V45.05h2.29V40.33H93l3.17,4.72h2.82l-3.7-4.95A3.12,3.12,0,0,0,97.91,36.78Zm-4.59,1.93h-.67V35.16h.71c1.43,0,2.2.6,2.2,1.74S94.79,38.71,93.32,38.71Z"
  }), (0, _core.jsx)("path", {
    className: "ds-5",
    d: "M99.53,34.19c0-.21-.14-.32-.39-.32h-.33v1h.24v-.4l.29.4h.31l-.35-.43A.27.27,0,0,0,99.53,34.19Zm-.43.14h0v-.27h0c.12,0,.18,0,.18.13S99.22,34.33,99.1,34.33Z"
  }), (0, _core.jsx)("path", {
    className: "ds-5",
    d: "M99.19,33.48a.91.91,0,1,0,.89.9A.9.9,0,0,0,99.19,33.48Zm0,1.64a.74.74,0,1,1,.71-.74A.73.73,0,0,1,99.19,35.12Z"
  }))));
};

var _default = Discover;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Discover, "Discover", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/SVG/Discover.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/SVG/Discover.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js"}],"src/Components/FormComponents/SVG/Amex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Amex = function Amex() {
  return (0, _core.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 125.43 78.39"
  }, (0, _core.jsx)("title", null, "american-expressAsset 4"), (0, _core.jsx)("g", {
    id: "Layer_2"
  }, (0, _core.jsx)("g", {
    id: "Layer_1-2"
  }, (0, _core.jsx)("rect", {
    className: "ax-1",
    width: "125.43",
    height: "78.39",
    rx: "4.18"
  }), (0, _core.jsx)("path", {
    className: "ax-2",
    d: "M38.92,37.37V36.12l-.6,1.25h-5.2L32.47,36v1.34H22.76l-1.14-2.71H19.67l-1.21,2.71h-5V29.18l3.69-8.35h7.07l1,2.36V20.85h8.64l1.9,4,1.86-4H64.84a4.66,4.66,0,0,1,2.37.64v-.64h6.87v.9a5.58,5.58,0,0,1,3.06-.9H89.27l1.06,2.4v-2.4H98.1l1.41,2.4v-2.4h7.43V37.39H99.31l-1.8-2.89v2.87H88l-1.33-3H84.84l-1.25,3H77.85A7.51,7.51,0,0,1,74.1,36.2v1.17H62.67V33.51c0-.56-.43-.52-.43-.52h-.42v4.38Z"
  }), (0, _core.jsx)("path", {
    className: "ax-2",
    d: "M33.21,41h15l2.17,2.45L52.61,41H64.16a5.21,5.21,0,0,1,2.11.57V41H76.55a5.23,5.23,0,0,1,2.4.65V41H92.17v.6a4.49,4.49,0,0,1,2.21-.6H103v.6a5.31,5.31,0,0,1,2.23-.6H112v15.6a3.69,3.69,0,0,1-2.72,1h-8.91v-.5a4.56,4.56,0,0,1-2.14.5H74.52v-4c0-.39-.17-.47-.52-.47h-.33v4.51h-7.4V53.09a5,5,0,0,1-2.19.44H61.42v4H52.3L50.23,55,48,57.57H33.21Z"
  }), (0, _core.jsx)("polygon", {
    className: "ax-1",
    points: "80.54 43.45 89.96 43.45 89.96 45.98 83.42 45.98 83.42 48.18 89.78 48.18 89.78 50.4 83.42 50.4 83.42 52.72 89.96 52.72 89.96 55.19 80.54 55.19 80.54 43.45"
  }), (0, _core.jsx)("path", {
    className: "ax-1",
    d: "M108.17,48c3.54.18,3.84,1.95,3.84,3.84a3.43,3.43,0,0,1-3.7,3.38h-6V52.72H107c.8,0,2,0,2-1.12,0-.54-.2-.88-1.06-1-.37-.06-1.78-.13-2-.14-3.2-.08-3.94-1.67-3.94-3.61a3.24,3.24,0,0,1,3.43-3.41h6.06V46H107c-1,0-2.1-.12-2.1,1,0,.72.54.87,1.22.93Z"
  }), (0, _core.jsx)("path", {
    className: "ax-1",
    d: "M97.31,48c3.55.18,3.84,1.95,3.84,3.84a3.42,3.42,0,0,1-3.69,3.38h-6V52.72h4.71c.8,0,2,0,2-1.12,0-.54-.22-.88-1.07-1-.38-.06-1.78-.13-2-.14-3.2-.08-3.94-1.67-3.94-3.61a3.24,3.24,0,0,1,3.43-3.41h6V46H96.18c-1,0-2.1-.12-2.1,1,0,.72.54.87,1.22.93Z"
  }), (0, _core.jsx)("path", {
    className: "ax-1",
    d: "M63.14,43.47H53l-3.3,3.65-3.19-3.67H35.16V55.19h11l3.46-3.88L53,55.21h5.53v-4H62.4c1.5,0,4.22,0,4.22-4.17A3.25,3.25,0,0,0,63.14,43.47ZM44.65,52.72H38V50.4h6.35V48.18H38V46l7,0,2.8,3.2Zm11,1.37-4.14-4.9,4.14-4.59Zm6.5-5.28H58.58V46h3.6a1.42,1.42,0,1,1,0,2.82Z"
  }), (0, _core.jsx)("path", {
    className: "ax-1",
    d: "M77.06,49.87a3.2,3.2,0,0,0,2-3.25c0-2.52-2-3.15-3.45-3.15H68.1V55.21H71V51.07h3.78c1,0,1.39,1,1.41,2l.08,2.15h2.8L79,52.8C79,50.91,78.43,50,77.06,49.87Zm-2.49-1.22H71V46h3.61a1.38,1.38,0,0,1,1.58,1.35C76.17,48.13,75.75,48.65,74.57,48.65Z"
  }), (0, _core.jsx)("rect", {
    className: "ax-1",
    x: "69.26",
    y: "23.18",
    width: "2.88",
    height: "11.75"
  }), (0, _core.jsx)("polygon", {
    className: "ax-1",
    points: "45.66 23.19 55.08 23.19 55.08 25.72 48.54 25.72 48.54 27.92 54.9 27.92 54.9 30.15 48.54 30.15 48.54 32.47 55.08 32.47 55.08 34.93 45.66 34.93 45.66 23.19"
  }), (0, _core.jsx)("path", {
    className: "ax-1",
    d: "M65.75,29.59a3.21,3.21,0,0,0,2-3.25c0-2.52-2-3.15-3.46-3.15h-7.5V34.93h2.88V30.79h3.78c1,0,1.39,1,1.41,2l.08,2.15h2.81l-.11-2.41C67.64,30.63,67.12,29.74,65.75,29.59Zm-2.49-1.22H59.67V25.71h3.61a1.38,1.38,0,0,1,1.58,1.35C64.86,27.85,64.44,28.37,63.26,28.37Z"
  }), (0, _core.jsx)("path", {
    className: "ax-1",
    d: "M39,23.19l-3.54,7.88L32,23.19H27.43V34.5l-5-11.31H18.58L13.45,34.93h3l1.12-2.62h5.76l1.14,2.62h5.8V26.22l3.85,8.71h2.63l3.94-8.57v8.57h2.88V23.19ZM18.7,29.78l1.72-4.1,1.79,4.1Z"
  }), (0, _core.jsx)("path", {
    className: "ax-1",
    d: "M101.88,23.19v8.13L97,23.19H92.76v11l-4.91-11H84l-4,9.1s-1.68,0-1.85,0c-.69-.15-1.78-.64-1.79-2.71v-.85c0-2.75,1.49-3,3.41-3h1.78V23.19H77.85c-1.31,0-4.16,1-4.26,5.82-.06,3.25,1.35,5.93,4.55,5.93h3.8l1.13-2.62h5.75L90,34.94h5.69v-8.6l5.18,8.6h3.94V23.19Zm-17.7,6.6,1.71-4.11,1.81,4.11Z"
  }))));
};

var _default = Amex;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Amex, "Amex", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/SVG/Amex.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/SVG/Amex.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js"}],"src/Components/FormComponents/SVG/Visa.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Visa = function Visa() {
  return (0, _core.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 125.43 78.39"
  }, (0, _core.jsx)("title", null, "visaAsset 1"), (0, _core.jsx)("g", {
    id: "Layer_2"
  }, (0, _core.jsx)("g", {
    id: "Layer_1-2"
  }, (0, _core.jsx)("rect", {
    className: "vs-1",
    width: "125.43",
    height: "78.39",
    rx: "4.18"
  }), (0, _core.jsx)("polygon", {
    className: "vs-2",
    points: "57.72 50.97 51.59 50.97 55.42 27.44 61.55 27.44 57.72 50.97"
  }), (0, _core.jsx)("path", {
    className: "vs-2",
    d: "M46.44,27.44,40.6,43.62l-.69-3.48h0L37.85,29.56a2.63,2.63,0,0,0-2.91-2.12H25.28l-.11.4a22.81,22.81,0,0,1,6.41,2.69L36.9,51h6.39L53,27.44Z"
  }), (0, _core.jsx)("path", {
    className: "vs-2",
    d: "M94.63,51h5.63l-4.9-23.53H90.43a2.81,2.81,0,0,0-2.83,1.75L78.46,51h6.39l1.27-3.49h7.8Zm-6.74-8.32,3.22-8.81,1.81,8.81Z"
  }), (0, _core.jsx)("path", {
    className: "vs-2",
    d: "M78.94,33.1,79.81,28a17.71,17.71,0,0,0-5.51-1C71.26,27,64,28.35,64,34.81c0,6.08,8.48,6.15,8.48,9.35s-7.6,2.62-10.11.6l-.91,5.29a17.11,17.11,0,0,0,6.91,1.33c4.18,0,10.49-2.17,10.49-8.06,0-6.12-8.55-6.69-8.55-9.35S76.32,31.65,78.94,33.1Z"
  }), (0, _core.jsx)("path", {
    className: "vs-3",
    d: "M39.91,40.14,37.85,29.56a2.63,2.63,0,0,0-2.91-2.12H25.28l-.11.4a23.73,23.73,0,0,1,9.09,4.56A18.39,18.39,0,0,1,39.91,40.14Z"
  }))));
};

var _default = Visa;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Visa, "Visa", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/SVG/Visa.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/SVG/Visa.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js"}],"src/Components/FormComponents/Blocks/PaymentBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _fa = require("react-icons/fa");

var _FormHeader = _interopRequireDefault(require("../StyledComponents/FormHeader"));

var _LockSymbol = _interopRequireDefault(require("../SVG/LockSymbol"));

var _MasterCard = _interopRequireDefault(require("../SVG/MasterCard"));

var _Discover = _interopRequireDefault(require("../SVG/Discover"));

var _Amex = _interopRequireDefault(require("../SVG/Amex"));

var _Visa = _interopRequireDefault(require("../SVG/Visa"));

var _FieldSet = _interopRequireDefault(require("../StyledComponents/FieldSet"));

var _FormRow = _interopRequireDefault(require("../StyledComponents/FormRow"));

var _InputGroup = _interopRequireDefault(require("../InputGroup"));

var _SelectGroup = _interopRequireDefault(require("../SelectGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var PaymentBlockContainer = (0, _styledBase.default)("section", {
  target: "ezgu4ic0",
  label: "PaymentBlockContainer"
})("development" === "production" ? {
  name: "1ls8lt1",
  styles: "margin:30px auto;padding-top:20px;"
} : {
  name: "1ls8lt1",
  styles: "margin:30px auto;padding-top:20px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBheW1lbnRCbG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlNEMiLCJmaWxlIjoiUGF5bWVudEJsb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgRmFRdWVzdGlvbkNpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuXG5pbXBvcnQgRm9ybUhlYWRlciBmcm9tIFwiLi4vU3R5bGVkQ29tcG9uZW50cy9Gb3JtSGVhZGVyXCI7XG5pbXBvcnQgTG9ja1N5bWJvbCBmcm9tIFwiLi4vU1ZHL0xvY2tTeW1ib2xcIjtcbmltcG9ydCBNYXN0ZXJDYXJkIGZyb20gJy4uL1NWRy9NYXN0ZXJDYXJkJztcbmltcG9ydCBEaXNjb3ZlciBmcm9tICcuLi9TVkcvRGlzY292ZXInO1xuaW1wb3J0IEFtZXggZnJvbSAnLi4vU1ZHL0FtZXgnO1xuaW1wb3J0IFZpc2EgZnJvbSBcIi4uL1NWRy9WaXNhXCI7XG5pbXBvcnQgRmllbGRTZXQgZnJvbSBcIi4uL1N0eWxlZENvbXBvbmVudHMvRmllbGRTZXRcIlxuaW1wb3J0IEZvcm1Sb3cgZnJvbSBcIi4uL1N0eWxlZENvbXBvbmVudHMvRm9ybVJvd1wiXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwiLi4vSW5wdXRHcm91cFwiO1xuaW1wb3J0IFNlbGVjdEdyb3VwIGZyb20gXCIuLi9TZWxlY3RHcm91cFwiO1xuXG5jb25zdCBQYXltZW50QmxvY2tDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbmBcblxuY29uc3QgU2FmZXR5RGlzY2xhaW1lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIHN2ZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuYFxuXG5jb25zdCBDQ0Jsb2NrID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBzdmcge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoNzguMzlweCAvIDIpO1xuICAgICAgICB3aWR0aDogY2FsYygxMjUuNDNweCAvMik7XG4gICAgICAgIC5heC0xe1xuICAgICAgICAgICAgZmlsbDojMDA3OGE5O1xuICAgICAgICB9XG4gICAgICAgIC5heC0ye1xuICAgICAgICAgICAgZmlsbDojZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5kcy0xe1xuICAgICAgICAgICAgZmlsbDojZjFmMmYyO1xuICAgICAgICB9XG4gICAgICAgIC5kcy0ye1xuICAgICAgICAgICAgZmlsbDojZjU4MjIwO1xuICAgICAgICB9XG4gICAgICAgIC5kcy0ze1xuICAgICAgICAgICAgZmlsbDp1cmwoI3JhZGlhbC1ncmFkaWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLmRzLTR7XG4gICAgICAgICAgICBmaWxsOiMwMDE3MjI7XG4gICAgICAgIH1cbiAgICAgICAgLmRzLTV7XG4gICAgICAgICAgICBmaWxsOiMyMzFmMjA7XG4gICAgICAgIH1cbiAgICAgICAgLm1jLTF7XG4gICAgICAgICAgICBmaWxsOiMxMzQ1N2M7XG4gICAgICAgIH1cbiAgICAgICAgLm1jLTJ7XG4gICAgICAgICAgICBmaWxsOiNmYmIyMzE7XG4gICAgICAgIH1cbiAgICAgICAgLm1jLTIsLm1jLTMsLm1jLTR7XG4gICAgICAgICAgICBmaWxsLXJ1bGU6ZXZlbm9kZDtcbiAgICAgICAgfVxuICAgICAgICAubWMtM3tcbiAgICAgICAgICAgIGZpbGw6I2VjMWMyZTtcbiAgICAgICAgfVxuICAgICAgICAubWMtNHtcbiAgICAgICAgICAgIGZpbGw6I2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAubWMtNXtcbiAgICAgICAgICAgIGZpbGw6bm9uZTtcbiAgICAgICAgICAgIHN0cm9rZTojZmZmO1xuICAgICAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ6Mi42MTtcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDowLjIycHg7XG4gICAgICAgIH1cbiAgICAgICAgLnZzLTF7XG4gICAgICAgICAgICBmaWxsOiMzOTU3YTc7XG4gICAgICAgIH1cbiAgICAgICAgLnZzLTJ7XG4gICAgICAgICAgICBmaWxsOiNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLnZzLTN7XG4gICAgICAgICAgICBmaWxsOiNmOWE1MzM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3ZnICsgc3ZnIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuYFxuXG5jb25zdCBJbmZvQ2lyY2xlID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICB0b3A6IC02cHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNyk7XG4gICAgYSB7XG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjNTQ1ODVEO1xuICAgIH1cbmBcblxuY29uc3QgUGF5bWVudEJsb2NrID0gKHtmaWVsZHMsIGVycm9ycywgY3VyWWVhciwgY3VyTW9udGgsIGhhbmRsZUlucHV0Q2hhbmdlfSkgPT4ge1xuICAgIGNvbnN0IHllYXJzID0gW10sIG1vbnRocyA9IFtdO1xuICAgIHllYXJzLnB1c2goXG4gICAgICAgIDxvcHRpb24ga2V5PVwiZXhwLXllYXItYmFzZS0wXCIgdmFsdWU9XCJcIiBkaXNhYmxlZD1cImRpc2FibGVkXCI+XG4gICAgICAgICAgICBZZWFyKiAmIzk2NjA7XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICk7XG4gICAgZm9yIChsZXQgeSA9IGN1clllYXI7IHkgPCBjdXJZZWFyICsgMjU7IHkrKykge1xuICAgICAgICB5ZWFycy5wdXNoKFxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e1wieWVhci1vcHRpb24tXCIgKyB5fSB2YWx1ZT17eX0+XG4gICAgICAgICAgICAgICAge3l9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgbW9udGhzLnB1c2goXG4gICAgICAgIDxvcHRpb24ga2V5PVwiZXhwLW1vbnRoLWJhc2UtMFwiIHZhbHVlPVwiXCIgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlxuICAgICAgICAgICAgTW9udGgqICYjOTY2MDtcbiAgICAgICAgPC9vcHRpb24+XG4gICAgKTtcbiAgICBmb3IgKGxldCBtID0gMTsgbSA8IDEzOyBtKyspIHtcbiAgICAgICAgY29uc3QgdmFsID0gKFwiMFwiICsgbSkuc2xpY2UoLTIpO1xuICAgICAgICBtb250aHMucHVzaChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtcIm1vbnRoLW9wdGlvbi1cIiArIHZhbH0gdmFsdWU9e3ZhbH0+XG4gICAgICAgICAgICAgICAge3ZhbH1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGF5bWVudEJsb2NrQ29udGFpbmVyPlxuICAgICAgICAgICAgPEZvcm1IZWFkZXIgc3R5bGU9e3tmb250U2l6ZTogXCIyOHB4XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBsZXR0ZXJTcGFjaW5nOlwiMC41M3B4XCIsY29sb3I6XCIjMWMxYzFjXCJ9fT5QYXltZW50IEluZm9ybWF0aW9uPC9Gb3JtSGVhZGVyPlxuICAgICAgICAgICAgPFNhZmV0eURpc2NsYWltZXIgY2xhc3NOYW1lPVwic2FmZXR5LWRpc2NsYWltZXJcIj48TG9ja1N5bWJvbC8+IDxzcGFuIHN0eWxlPXt7Y29sb3I6IFwiIzU0NTg1RFwifX0+VGhpcyBpcyBhIHNlY3VyZSAyNTYtYml0IFNTTCBlbmNyeXB0ZWQgcGF5bWVudC4gWW91JnJzcXVvO3JlIHNhZmUuPC9zcGFuPjwvU2FmZXR5RGlzY2xhaW1lcj5cbiAgICAgICAgICAgIDxDQ0Jsb2NrPlxuICAgICAgICAgICAgICAgIDxWaXNhLz5cbiAgICAgICAgICAgICAgICA8TWFzdGVyQ2FyZC8+XG4gICAgICAgICAgICAgICAgPERpc2NvdmVyLz5cbiAgICAgICAgICAgICAgICA8QW1leC8+XG4gICAgICAgICAgICA8L0NDQmxvY2s+XG4gICAgICAgICAgICA8RmllbGRTZXQgc3R5bGU9e3ttaW5XaWR0aDogXCJ1bnNldFwiLCB3aWR0aDogXCJjYWxjKDEwMCUgLSAyMHB4KVwiLCBtYXhXaWR0aDogXCIzNTRweFwiLCBtYXJnaW46IFwiMzBweCBhdXRvXCJ9fT5cbiAgICAgICAgICAgICAgICA8bGVnZW5kPkNyZWRpdCBDYXJkIEluZm9ybWF0aW9uPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgPEZvcm1Sb3cgY2xhc3NOYW1lPVwiY2MtbnVtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbFN0eWxlPVwiZm9ybS1ncm91cC0tY2NOdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjY051bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNBUkQgTlVNQkVSXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxNn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIyMjIyAjIyMjICMjIyMgIyMjIyAjIyMjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaWVsZHMuY2NOdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmNjTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbj1cIlxcZCpcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybVJvdz5cbiAgICAgICAgICAgICAgICA8Rm9ybVJvdyBjbGFzc05hbWU9XCJjYy1leHAtcm93XCIgc3R5bGU9e3thbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RHcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJFeHBpcmVzTW9udGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbFN0eWxlPVwiZm9ybS1ncm91cC0tZXhwTW9udGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNT05USFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaWVsZHMuRXhwaXJlc01vbnRofVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5FeHBpcmVzTW9udGh9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXttb250aHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiZuYnNwOy8mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RHcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJFeHBpcmVzWWVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWFsU3R5bGU9XCJmb3JtLWdyb3VwLS1leHBZZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWUVBUlwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaWVsZHMuRXhwaXJlc1llYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLkV4cGlyZXNZZWFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17eWVhcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWFsU3R5bGU9XCJmb3JtLWdyb3VwLS1jdm5Db2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY3ZuQ29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNWVlwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17NH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY3Z2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaWVsZHMuY3ZuQ29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuY3ZuQ29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb249XCJcXGQqXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEluZm9DaXJjbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2JuLmNvbS9DVlZOdW1iZXIvQ1ZWLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj48RmFRdWVzdGlvbkNpcmNsZS8+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0luZm9DaXJjbGU+XG4gICAgICAgICAgICAgICAgPC9Gb3JtUm93PlxuICAgICAgICAgICAgPC9GaWVsZFNldD5cbiAgICAgICAgPC9QYXltZW50QmxvY2tDb250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXltZW50QmxvY2tcbiAgICAiXX0= */"
});
var SafetyDisclaimer = (0, _styledBase.default)("div", {
  target: "ezgu4ic1",
  label: "SafetyDisclaimer"
})("development" === "production" ? {
  name: "1v1syns",
  styles: "display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:16px;line-height:20px;margin:20px 0;svg{margin-top:-10px;margin-right:10px;}"
} : {
  name: "1v1syns",
  styles: "display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:16px;line-height:20px;margin:20px 0;svg{margin-top:-10px;margin-right:10px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBheW1lbnRCbG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQm1DIiwiZmlsZSI6IlBheW1lbnRCbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEZhUXVlc3Rpb25DaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcblxuaW1wb3J0IEZvcm1IZWFkZXIgZnJvbSBcIi4uL1N0eWxlZENvbXBvbmVudHMvRm9ybUhlYWRlclwiO1xuaW1wb3J0IExvY2tTeW1ib2wgZnJvbSBcIi4uL1NWRy9Mb2NrU3ltYm9sXCI7XG5pbXBvcnQgTWFzdGVyQ2FyZCBmcm9tICcuLi9TVkcvTWFzdGVyQ2FyZCc7XG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnLi4vU1ZHL0Rpc2NvdmVyJztcbmltcG9ydCBBbWV4IGZyb20gJy4uL1NWRy9BbWV4JztcbmltcG9ydCBWaXNhIGZyb20gXCIuLi9TVkcvVmlzYVwiO1xuaW1wb3J0IEZpZWxkU2V0IGZyb20gXCIuLi9TdHlsZWRDb21wb25lbnRzL0ZpZWxkU2V0XCJcbmltcG9ydCBGb3JtUm93IGZyb20gXCIuLi9TdHlsZWRDb21wb25lbnRzL0Zvcm1Sb3dcIlxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcIi4uL0lucHV0R3JvdXBcIjtcbmltcG9ydCBTZWxlY3RHcm91cCBmcm9tIFwiLi4vU2VsZWN0R3JvdXBcIjtcblxuY29uc3QgUGF5bWVudEJsb2NrQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG5gXG5cbmNvbnN0IFNhZmV0eURpc2NsYWltZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBzdmcge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbmBcblxuY29uc3QgQ0NCbG9jayA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgc3ZnIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDc4LjM5cHggLyAyKTtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTI1LjQzcHggLzIpO1xuICAgICAgICAuYXgtMXtcbiAgICAgICAgICAgIGZpbGw6IzAwNzhhOTtcbiAgICAgICAgfVxuICAgICAgICAuYXgtMntcbiAgICAgICAgICAgIGZpbGw6I2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAuZHMtMXtcbiAgICAgICAgICAgIGZpbGw6I2YxZjJmMjtcbiAgICAgICAgfVxuICAgICAgICAuZHMtMntcbiAgICAgICAgICAgIGZpbGw6I2Y1ODIyMDtcbiAgICAgICAgfVxuICAgICAgICAuZHMtM3tcbiAgICAgICAgICAgIGZpbGw6dXJsKCNyYWRpYWwtZ3JhZGllbnQpO1xuICAgICAgICB9XG4gICAgICAgIC5kcy00e1xuICAgICAgICAgICAgZmlsbDojMDAxNzIyO1xuICAgICAgICB9XG4gICAgICAgIC5kcy01e1xuICAgICAgICAgICAgZmlsbDojMjMxZjIwO1xuICAgICAgICB9XG4gICAgICAgIC5tYy0xe1xuICAgICAgICAgICAgZmlsbDojMTM0NTdjO1xuICAgICAgICB9XG4gICAgICAgIC5tYy0ye1xuICAgICAgICAgICAgZmlsbDojZmJiMjMxO1xuICAgICAgICB9XG4gICAgICAgIC5tYy0yLC5tYy0zLC5tYy00e1xuICAgICAgICAgICAgZmlsbC1ydWxlOmV2ZW5vZGQ7XG4gICAgICAgIH1cbiAgICAgICAgLm1jLTN7XG4gICAgICAgICAgICBmaWxsOiNlYzFjMmU7XG4gICAgICAgIH1cbiAgICAgICAgLm1jLTR7XG4gICAgICAgICAgICBmaWxsOiNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLm1jLTV7XG4gICAgICAgICAgICBmaWxsOm5vbmU7XG4gICAgICAgICAgICBzdHJva2U6I2ZmZjtcbiAgICAgICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OjIuNjE7XG4gICAgICAgICAgICBzdHJva2Utd2lkdGg6MC4yMnB4O1xuICAgICAgICB9XG4gICAgICAgIC52cy0xe1xuICAgICAgICAgICAgZmlsbDojMzk1N2E3O1xuICAgICAgICB9XG4gICAgICAgIC52cy0ye1xuICAgICAgICAgICAgZmlsbDojZmZmO1xuICAgICAgICB9XG4gICAgICAgIC52cy0ze1xuICAgICAgICAgICAgZmlsbDojZjlhNTMzO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN2ZyArIHN2ZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbmBcblxuY29uc3QgSW5mb0NpcmNsZSA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiAtNnB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjcpO1xuICAgIGEge1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzU0NTg1RDtcbiAgICB9XG5gXG5cbmNvbnN0IFBheW1lbnRCbG9jayA9ICh7ZmllbGRzLCBlcnJvcnMsIGN1clllYXIsIGN1ck1vbnRoLCBoYW5kbGVJbnB1dENoYW5nZX0pID0+IHtcbiAgICBjb25zdCB5ZWFycyA9IFtdLCBtb250aHMgPSBbXTtcbiAgICB5ZWFycy5wdXNoKFxuICAgICAgICA8b3B0aW9uIGtleT1cImV4cC15ZWFyLWJhc2UtMFwiIHZhbHVlPVwiXCIgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlxuICAgICAgICAgICAgWWVhciogJiM5NjYwO1xuICAgICAgICA8L29wdGlvbj5cbiAgICApO1xuICAgIGZvciAobGV0IHkgPSBjdXJZZWFyOyB5IDwgY3VyWWVhciArIDI1OyB5KyspIHtcbiAgICAgICAgeWVhcnMucHVzaChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtcInllYXItb3B0aW9uLVwiICsgeX0gdmFsdWU9e3l9PlxuICAgICAgICAgICAgICAgIHt5fVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICk7XG4gICAgfVxuICAgIG1vbnRocy5wdXNoKFxuICAgICAgICA8b3B0aW9uIGtleT1cImV4cC1tb250aC1iYXNlLTBcIiB2YWx1ZT1cIlwiIGRpc2FibGVkPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICAgIE1vbnRoKiAmIzk2NjA7XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICk7XG4gICAgZm9yIChsZXQgbSA9IDE7IG0gPCAxMzsgbSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IChcIjBcIiArIG0pLnNsaWNlKC0yKTtcbiAgICAgICAgbW9udGhzLnB1c2goXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17XCJtb250aC1vcHRpb24tXCIgKyB2YWx9IHZhbHVlPXt2YWx9PlxuICAgICAgICAgICAgICAgIHt2YWx9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBheW1lbnRCbG9ja0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxGb3JtSGVhZGVyIHN0eWxlPXt7Zm9udFNpemU6IFwiMjhweFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgbGV0dGVyU3BhY2luZzpcIjAuNTNweFwiLGNvbG9yOlwiIzFjMWMxY1wifX0+UGF5bWVudCBJbmZvcm1hdGlvbjwvRm9ybUhlYWRlcj5cbiAgICAgICAgICAgIDxTYWZldHlEaXNjbGFpbWVyIGNsYXNzTmFtZT1cInNhZmV0eS1kaXNjbGFpbWVyXCI+PExvY2tTeW1ib2wvPiA8c3BhbiBzdHlsZT17e2NvbG9yOiBcIiM1NDU4NURcIn19PlRoaXMgaXMgYSBzZWN1cmUgMjU2LWJpdCBTU0wgZW5jcnlwdGVkIHBheW1lbnQuIFlvdSZyc3F1bztyZSBzYWZlLjwvc3Bhbj48L1NhZmV0eURpc2NsYWltZXI+XG4gICAgICAgICAgICA8Q0NCbG9jaz5cbiAgICAgICAgICAgICAgICA8VmlzYS8+XG4gICAgICAgICAgICAgICAgPE1hc3RlckNhcmQvPlxuICAgICAgICAgICAgICAgIDxEaXNjb3Zlci8+XG4gICAgICAgICAgICAgICAgPEFtZXgvPlxuICAgICAgICAgICAgPC9DQ0Jsb2NrPlxuICAgICAgICAgICAgPEZpZWxkU2V0IHN0eWxlPXt7bWluV2lkdGg6IFwidW5zZXRcIiwgd2lkdGg6IFwiY2FsYygxMDAlIC0gMjBweClcIiwgbWF4V2lkdGg6IFwiMzU0cHhcIiwgbWFyZ2luOiBcIjMwcHggYXV0b1wifX0+XG4gICAgICAgICAgICAgICAgPGxlZ2VuZD5DcmVkaXQgQ2FyZCBJbmZvcm1hdGlvbjwvbGVnZW5kPlxuICAgICAgICAgICAgICAgIDxGb3JtUm93IGNsYXNzTmFtZT1cImNjLW51bS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWxTdHlsZT1cImZvcm0tZ3JvdXAtLWNjTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2NOdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDQVJEIE5VTUJFUlwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiMjIyMgIyMjIyAjIyMjICMjIyMgIyMjI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRzLmNjTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5jY051bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb249XCJcXGQqXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Sb3c+XG4gICAgICAgICAgICAgICAgPEZvcm1Sb3cgY2xhc3NOYW1lPVwiY2MtZXhwLXJvd1wiIHN0eWxlPXt7YWxpZ25JdGVtczogXCJjZW50ZXJcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIn19PlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiRXhwaXJlc01vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWxTdHlsZT1cImZvcm0tZ3JvdXAtLWV4cE1vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTU9OVEhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRzLkV4cGlyZXNNb250aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuRXhwaXJlc01vbnRofVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bW9udGhzfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mbmJzcDsvJm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiRXhwaXJlc1llYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbFN0eWxlPVwiZm9ybS1ncm91cC0tZXhwWWVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllFQVJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRzLkV4cGlyZXNZZWFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5FeHBpcmVzWWVhcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3llYXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbFN0eWxlPVwiZm9ybS1ncm91cC0tY3ZuQ29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImN2bkNvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDVlZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezR9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImN2dlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRzLmN2bkNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmN2bkNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uPVwiXFxkKlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbmZvQ2lyY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmNibi5jb20vQ1ZWTnVtYmVyL0NWVi5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PEZhUXVlc3Rpb25DaXJjbGUvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9JbmZvQ2lyY2xlPlxuICAgICAgICAgICAgICAgIDwvRm9ybVJvdz5cbiAgICAgICAgICAgIDwvRmllbGRTZXQ+XG4gICAgICAgIDwvUGF5bWVudEJsb2NrQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudEJsb2NrXG4gICAgIl19 */"
});
var CCBlock = (0, _styledBase.default)("div", {
  target: "ezgu4ic2",
  label: "CCBlock"
})("development" === "production" ? {
  name: "c5q94f",
  styles: "display:flex;flex-direction:row;justify-content:center;align-items:center;margin:20px auto;svg{height:calc(78.39px / 2);width:calc(125.43px /2);.ax-1{fill:#0078a9;}.ax-2{fill:#fff;}.ds-1{fill:#f1f2f2;}.ds-2{fill:#f58220;}.ds-3{fill:url(#radial-gradient);}.ds-4{fill:#001722;}.ds-5{fill:#231f20;}.mc-1{fill:#13457c;}.mc-2{fill:#fbb231;}.mc-2,.mc-3,.mc-4{fill-rule:evenodd;}.mc-3{fill:#ec1c2e;}.mc-4{fill:#fff;}.mc-5{fill:none;stroke:#fff;stroke-miterlimit:2.61;stroke-width:0.22px;}.vs-1{fill:#3957a7;}.vs-2{fill:#fff;}.vs-3{fill:#f9a533;}}svg + svg{margin-left:10px;}"
} : {
  name: "c5q94f",
  styles: "display:flex;flex-direction:row;justify-content:center;align-items:center;margin:20px auto;svg{height:calc(78.39px / 2);width:calc(125.43px /2);.ax-1{fill:#0078a9;}.ax-2{fill:#fff;}.ds-1{fill:#f1f2f2;}.ds-2{fill:#f58220;}.ds-3{fill:url(#radial-gradient);}.ds-4{fill:#001722;}.ds-5{fill:#231f20;}.mc-1{fill:#13457c;}.mc-2{fill:#fbb231;}.mc-2,.mc-3,.mc-4{fill-rule:evenodd;}.mc-3{fill:#ec1c2e;}.mc-4{fill:#fff;}.mc-5{fill:none;stroke:#fff;stroke-miterlimit:2.61;stroke-width:0.22px;}.vs-1{fill:#3957a7;}.vs-2{fill:#fff;}.vs-3{fill:#f9a533;}}svg + svg{margin-left:10px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBheW1lbnRCbG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQzBCIiwiZmlsZSI6IlBheW1lbnRCbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEZhUXVlc3Rpb25DaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcblxuaW1wb3J0IEZvcm1IZWFkZXIgZnJvbSBcIi4uL1N0eWxlZENvbXBvbmVudHMvRm9ybUhlYWRlclwiO1xuaW1wb3J0IExvY2tTeW1ib2wgZnJvbSBcIi4uL1NWRy9Mb2NrU3ltYm9sXCI7XG5pbXBvcnQgTWFzdGVyQ2FyZCBmcm9tICcuLi9TVkcvTWFzdGVyQ2FyZCc7XG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnLi4vU1ZHL0Rpc2NvdmVyJztcbmltcG9ydCBBbWV4IGZyb20gJy4uL1NWRy9BbWV4JztcbmltcG9ydCBWaXNhIGZyb20gXCIuLi9TVkcvVmlzYVwiO1xuaW1wb3J0IEZpZWxkU2V0IGZyb20gXCIuLi9TdHlsZWRDb21wb25lbnRzL0ZpZWxkU2V0XCJcbmltcG9ydCBGb3JtUm93IGZyb20gXCIuLi9TdHlsZWRDb21wb25lbnRzL0Zvcm1Sb3dcIlxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcIi4uL0lucHV0R3JvdXBcIjtcbmltcG9ydCBTZWxlY3RHcm91cCBmcm9tIFwiLi4vU2VsZWN0R3JvdXBcIjtcblxuY29uc3QgUGF5bWVudEJsb2NrQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG5gXG5cbmNvbnN0IFNhZmV0eURpc2NsYWltZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBzdmcge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbmBcblxuY29uc3QgQ0NCbG9jayA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgc3ZnIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDc4LjM5cHggLyAyKTtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTI1LjQzcHggLzIpO1xuICAgICAgICAuYXgtMXtcbiAgICAgICAgICAgIGZpbGw6IzAwNzhhOTtcbiAgICAgICAgfVxuICAgICAgICAuYXgtMntcbiAgICAgICAgICAgIGZpbGw6I2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAuZHMtMXtcbiAgICAgICAgICAgIGZpbGw6I2YxZjJmMjtcbiAgICAgICAgfVxuICAgICAgICAuZHMtMntcbiAgICAgICAgICAgIGZpbGw6I2Y1ODIyMDtcbiAgICAgICAgfVxuICAgICAgICAuZHMtM3tcbiAgICAgICAgICAgIGZpbGw6dXJsKCNyYWRpYWwtZ3JhZGllbnQpO1xuICAgICAgICB9XG4gICAgICAgIC5kcy00e1xuICAgICAgICAgICAgZmlsbDojMDAxNzIyO1xuICAgICAgICB9XG4gICAgICAgIC5kcy01e1xuICAgICAgICAgICAgZmlsbDojMjMxZjIwO1xuICAgICAgICB9XG4gICAgICAgIC5tYy0xe1xuICAgICAgICAgICAgZmlsbDojMTM0NTdjO1xuICAgICAgICB9XG4gICAgICAgIC5tYy0ye1xuICAgICAgICAgICAgZmlsbDojZmJiMjMxO1xuICAgICAgICB9XG4gICAgICAgIC5tYy0yLC5tYy0zLC5tYy00e1xuICAgICAgICAgICAgZmlsbC1ydWxlOmV2ZW5vZGQ7XG4gICAgICAgIH1cbiAgICAgICAgLm1jLTN7XG4gICAgICAgICAgICBmaWxsOiNlYzFjMmU7XG4gICAgICAgIH1cbiAgICAgICAgLm1jLTR7XG4gICAgICAgICAgICBmaWxsOiNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLm1jLTV7XG4gICAgICAgICAgICBmaWxsOm5vbmU7XG4gICAgICAgICAgICBzdHJva2U6I2ZmZjtcbiAgICAgICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OjIuNjE7XG4gICAgICAgICAgICBzdHJva2Utd2lkdGg6MC4yMnB4O1xuICAgICAgICB9XG4gICAgICAgIC52cy0xe1xuICAgICAgICAgICAgZmlsbDojMzk1N2E3O1xuICAgICAgICB9XG4gICAgICAgIC52cy0ye1xuICAgICAgICAgICAgZmlsbDojZmZmO1xuICAgICAgICB9XG4gICAgICAgIC52cy0ze1xuICAgICAgICAgICAgZmlsbDojZjlhNTMzO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN2ZyArIHN2ZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbmBcblxuY29uc3QgSW5mb0NpcmNsZSA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiAtNnB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjcpO1xuICAgIGEge1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzU0NTg1RDtcbiAgICB9XG5gXG5cbmNvbnN0IFBheW1lbnRCbG9jayA9ICh7ZmllbGRzLCBlcnJvcnMsIGN1clllYXIsIGN1ck1vbnRoLCBoYW5kbGVJbnB1dENoYW5nZX0pID0+IHtcbiAgICBjb25zdCB5ZWFycyA9IFtdLCBtb250aHMgPSBbXTtcbiAgICB5ZWFycy5wdXNoKFxuICAgICAgICA8b3B0aW9uIGtleT1cImV4cC15ZWFyLWJhc2UtMFwiIHZhbHVlPVwiXCIgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlxuICAgICAgICAgICAgWWVhciogJiM5NjYwO1xuICAgICAgICA8L29wdGlvbj5cbiAgICApO1xuICAgIGZvciAobGV0IHkgPSBjdXJZZWFyOyB5IDwgY3VyWWVhciArIDI1OyB5KyspIHtcbiAgICAgICAgeWVhcnMucHVzaChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtcInllYXItb3B0aW9uLVwiICsgeX0gdmFsdWU9e3l9PlxuICAgICAgICAgICAgICAgIHt5fVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICk7XG4gICAgfVxuICAgIG1vbnRocy5wdXNoKFxuICAgICAgICA8b3B0aW9uIGtleT1cImV4cC1tb250aC1iYXNlLTBcIiB2YWx1ZT1cIlwiIGRpc2FibGVkPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICAgIE1vbnRoKiAmIzk2NjA7XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICk7XG4gICAgZm9yIChsZXQgbSA9IDE7IG0gPCAxMzsgbSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IChcIjBcIiArIG0pLnNsaWNlKC0yKTtcbiAgICAgICAgbW9udGhzLnB1c2goXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17XCJtb250aC1vcHRpb24tXCIgKyB2YWx9IHZhbHVlPXt2YWx9PlxuICAgICAgICAgICAgICAgIHt2YWx9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBheW1lbnRCbG9ja0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxGb3JtSGVhZGVyIHN0eWxlPXt7Zm9udFNpemU6IFwiMjhweFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgbGV0dGVyU3BhY2luZzpcIjAuNTNweFwiLGNvbG9yOlwiIzFjMWMxY1wifX0+UGF5bWVudCBJbmZvcm1hdGlvbjwvRm9ybUhlYWRlcj5cbiAgICAgICAgICAgIDxTYWZldHlEaXNjbGFpbWVyIGNsYXNzTmFtZT1cInNhZmV0eS1kaXNjbGFpbWVyXCI+PExvY2tTeW1ib2wvPiA8c3BhbiBzdHlsZT17e2NvbG9yOiBcIiM1NDU4NURcIn19PlRoaXMgaXMgYSBzZWN1cmUgMjU2LWJpdCBTU0wgZW5jcnlwdGVkIHBheW1lbnQuIFlvdSZyc3F1bztyZSBzYWZlLjwvc3Bhbj48L1NhZmV0eURpc2NsYWltZXI+XG4gICAgICAgICAgICA8Q0NCbG9jaz5cbiAgICAgICAgICAgICAgICA8VmlzYS8+XG4gICAgICAgICAgICAgICAgPE1hc3RlckNhcmQvPlxuICAgICAgICAgICAgICAgIDxEaXNjb3Zlci8+XG4gICAgICAgICAgICAgICAgPEFtZXgvPlxuICAgICAgICAgICAgPC9DQ0Jsb2NrPlxuICAgICAgICAgICAgPEZpZWxkU2V0IHN0eWxlPXt7bWluV2lkdGg6IFwidW5zZXRcIiwgd2lkdGg6IFwiY2FsYygxMDAlIC0gMjBweClcIiwgbWF4V2lkdGg6IFwiMzU0cHhcIiwgbWFyZ2luOiBcIjMwcHggYXV0b1wifX0+XG4gICAgICAgICAgICAgICAgPGxlZ2VuZD5DcmVkaXQgQ2FyZCBJbmZvcm1hdGlvbjwvbGVnZW5kPlxuICAgICAgICAgICAgICAgIDxGb3JtUm93IGNsYXNzTmFtZT1cImNjLW51bS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWxTdHlsZT1cImZvcm0tZ3JvdXAtLWNjTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2NOdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDQVJEIE5VTUJFUlwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiMjIyMgIyMjIyAjIyMjICMjIyMgIyMjI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRzLmNjTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5jY051bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb249XCJcXGQqXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Sb3c+XG4gICAgICAgICAgICAgICAgPEZvcm1Sb3cgY2xhc3NOYW1lPVwiY2MtZXhwLXJvd1wiIHN0eWxlPXt7YWxpZ25JdGVtczogXCJjZW50ZXJcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIn19PlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiRXhwaXJlc01vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWxTdHlsZT1cImZvcm0tZ3JvdXAtLWV4cE1vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTU9OVEhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRzLkV4cGlyZXNNb250aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuRXhwaXJlc01vbnRofVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bW9udGhzfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mbmJzcDsvJm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiRXhwaXJlc1llYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbFN0eWxlPVwiZm9ybS1ncm91cC0tZXhwWWVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllFQVJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRzLkV4cGlyZXNZZWFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5FeHBpcmVzWWVhcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3llYXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbFN0eWxlPVwiZm9ybS1ncm91cC0tY3ZuQ29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImN2bkNvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDVlZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezR9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImN2dlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRzLmN2bkNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmN2bkNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uPVwiXFxkKlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbmZvQ2lyY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmNibi5jb20vQ1ZWTnVtYmVyL0NWVi5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PEZhUXVlc3Rpb25DaXJjbGUvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9JbmZvQ2lyY2xlPlxuICAgICAgICAgICAgICAgIDwvRm9ybVJvdz5cbiAgICAgICAgICAgIDwvRmllbGRTZXQ+XG4gICAgICAgIDwvUGF5bWVudEJsb2NrQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudEJsb2NrXG4gICAgIl19 */"
});
var InfoCircle = (0, _styledBase.default)("div", {
  target: "ezgu4ic3",
  label: "InfoCircle"
})("development" === "production" ? {
  name: "au4652",
  styles: "position:absolute;right:5px;top:-6px;transform:scale(.7);a{cursor:pointer;text-decoration:none;color:#54585D;}"
} : {
  name: "au4652",
  styles: "position:absolute;right:5px;top:-6px;transform:scale(.7);a{cursor:pointer;text-decoration:none;color:#54585D;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBheW1lbnRCbG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRzZCIiwiZmlsZSI6IlBheW1lbnRCbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEZhUXVlc3Rpb25DaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcblxuaW1wb3J0IEZvcm1IZWFkZXIgZnJvbSBcIi4uL1N0eWxlZENvbXBvbmVudHMvRm9ybUhlYWRlclwiO1xuaW1wb3J0IExvY2tTeW1ib2wgZnJvbSBcIi4uL1NWRy9Mb2NrU3ltYm9sXCI7XG5pbXBvcnQgTWFzdGVyQ2FyZCBmcm9tICcuLi9TVkcvTWFzdGVyQ2FyZCc7XG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnLi4vU1ZHL0Rpc2NvdmVyJztcbmltcG9ydCBBbWV4IGZyb20gJy4uL1NWRy9BbWV4JztcbmltcG9ydCBWaXNhIGZyb20gXCIuLi9TVkcvVmlzYVwiO1xuaW1wb3J0IEZpZWxkU2V0IGZyb20gXCIuLi9TdHlsZWRDb21wb25lbnRzL0ZpZWxkU2V0XCJcbmltcG9ydCBGb3JtUm93IGZyb20gXCIuLi9TdHlsZWRDb21wb25lbnRzL0Zvcm1Sb3dcIlxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcIi4uL0lucHV0R3JvdXBcIjtcbmltcG9ydCBTZWxlY3RHcm91cCBmcm9tIFwiLi4vU2VsZWN0R3JvdXBcIjtcblxuY29uc3QgUGF5bWVudEJsb2NrQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG5gXG5cbmNvbnN0IFNhZmV0eURpc2NsYWltZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBzdmcge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbmBcblxuY29uc3QgQ0NCbG9jayA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgc3ZnIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDc4LjM5cHggLyAyKTtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTI1LjQzcHggLzIpO1xuICAgICAgICAuYXgtMXtcbiAgICAgICAgICAgIGZpbGw6IzAwNzhhOTtcbiAgICAgICAgfVxuICAgICAgICAuYXgtMntcbiAgICAgICAgICAgIGZpbGw6I2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAuZHMtMXtcbiAgICAgICAgICAgIGZpbGw6I2YxZjJmMjtcbiAgICAgICAgfVxuICAgICAgICAuZHMtMntcbiAgICAgICAgICAgIGZpbGw6I2Y1ODIyMDtcbiAgICAgICAgfVxuICAgICAgICAuZHMtM3tcbiAgICAgICAgICAgIGZpbGw6dXJsKCNyYWRpYWwtZ3JhZGllbnQpO1xuICAgICAgICB9XG4gICAgICAgIC5kcy00e1xuICAgICAgICAgICAgZmlsbDojMDAxNzIyO1xuICAgICAgICB9XG4gICAgICAgIC5kcy01e1xuICAgICAgICAgICAgZmlsbDojMjMxZjIwO1xuICAgICAgICB9XG4gICAgICAgIC5tYy0xe1xuICAgICAgICAgICAgZmlsbDojMTM0NTdjO1xuICAgICAgICB9XG4gICAgICAgIC5tYy0ye1xuICAgICAgICAgICAgZmlsbDojZmJiMjMxO1xuICAgICAgICB9XG4gICAgICAgIC5tYy0yLC5tYy0zLC5tYy00e1xuICAgICAgICAgICAgZmlsbC1ydWxlOmV2ZW5vZGQ7XG4gICAgICAgIH1cbiAgICAgICAgLm1jLTN7XG4gICAgICAgICAgICBmaWxsOiNlYzFjMmU7XG4gICAgICAgIH1cbiAgICAgICAgLm1jLTR7XG4gICAgICAgICAgICBmaWxsOiNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLm1jLTV7XG4gICAgICAgICAgICBmaWxsOm5vbmU7XG4gICAgICAgICAgICBzdHJva2U6I2ZmZjtcbiAgICAgICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OjIuNjE7XG4gICAgICAgICAgICBzdHJva2Utd2lkdGg6MC4yMnB4O1xuICAgICAgICB9XG4gICAgICAgIC52cy0xe1xuICAgICAgICAgICAgZmlsbDojMzk1N2E3O1xuICAgICAgICB9XG4gICAgICAgIC52cy0ye1xuICAgICAgICAgICAgZmlsbDojZmZmO1xuICAgICAgICB9XG4gICAgICAgIC52cy0ze1xuICAgICAgICAgICAgZmlsbDojZjlhNTMzO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN2ZyArIHN2ZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbmBcblxuY29uc3QgSW5mb0NpcmNsZSA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiAtNnB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjcpO1xuICAgIGEge1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzU0NTg1RDtcbiAgICB9XG5gXG5cbmNvbnN0IFBheW1lbnRCbG9jayA9ICh7ZmllbGRzLCBlcnJvcnMsIGN1clllYXIsIGN1ck1vbnRoLCBoYW5kbGVJbnB1dENoYW5nZX0pID0+IHtcbiAgICBjb25zdCB5ZWFycyA9IFtdLCBtb250aHMgPSBbXTtcbiAgICB5ZWFycy5wdXNoKFxuICAgICAgICA8b3B0aW9uIGtleT1cImV4cC15ZWFyLWJhc2UtMFwiIHZhbHVlPVwiXCIgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlxuICAgICAgICAgICAgWWVhciogJiM5NjYwO1xuICAgICAgICA8L29wdGlvbj5cbiAgICApO1xuICAgIGZvciAobGV0IHkgPSBjdXJZZWFyOyB5IDwgY3VyWWVhciArIDI1OyB5KyspIHtcbiAgICAgICAgeWVhcnMucHVzaChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtcInllYXItb3B0aW9uLVwiICsgeX0gdmFsdWU9e3l9PlxuICAgICAgICAgICAgICAgIHt5fVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICk7XG4gICAgfVxuICAgIG1vbnRocy5wdXNoKFxuICAgICAgICA8b3B0aW9uIGtleT1cImV4cC1tb250aC1iYXNlLTBcIiB2YWx1ZT1cIlwiIGRpc2FibGVkPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICAgIE1vbnRoKiAmIzk2NjA7XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICk7XG4gICAgZm9yIChsZXQgbSA9IDE7IG0gPCAxMzsgbSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IChcIjBcIiArIG0pLnNsaWNlKC0yKTtcbiAgICAgICAgbW9udGhzLnB1c2goXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17XCJtb250aC1vcHRpb24tXCIgKyB2YWx9IHZhbHVlPXt2YWx9PlxuICAgICAgICAgICAgICAgIHt2YWx9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBheW1lbnRCbG9ja0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxGb3JtSGVhZGVyIHN0eWxlPXt7Zm9udFNpemU6IFwiMjhweFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgbGV0dGVyU3BhY2luZzpcIjAuNTNweFwiLGNvbG9yOlwiIzFjMWMxY1wifX0+UGF5bWVudCBJbmZvcm1hdGlvbjwvRm9ybUhlYWRlcj5cbiAgICAgICAgICAgIDxTYWZldHlEaXNjbGFpbWVyIGNsYXNzTmFtZT1cInNhZmV0eS1kaXNjbGFpbWVyXCI+PExvY2tTeW1ib2wvPiA8c3BhbiBzdHlsZT17e2NvbG9yOiBcIiM1NDU4NURcIn19PlRoaXMgaXMgYSBzZWN1cmUgMjU2LWJpdCBTU0wgZW5jcnlwdGVkIHBheW1lbnQuIFlvdSZyc3F1bztyZSBzYWZlLjwvc3Bhbj48L1NhZmV0eURpc2NsYWltZXI+XG4gICAgICAgICAgICA8Q0NCbG9jaz5cbiAgICAgICAgICAgICAgICA8VmlzYS8+XG4gICAgICAgICAgICAgICAgPE1hc3RlckNhcmQvPlxuICAgICAgICAgICAgICAgIDxEaXNjb3Zlci8+XG4gICAgICAgICAgICAgICAgPEFtZXgvPlxuICAgICAgICAgICAgPC9DQ0Jsb2NrPlxuICAgICAgICAgICAgPEZpZWxkU2V0IHN0eWxlPXt7bWluV2lkdGg6IFwidW5zZXRcIiwgd2lkdGg6IFwiY2FsYygxMDAlIC0gMjBweClcIiwgbWF4V2lkdGg6IFwiMzU0cHhcIiwgbWFyZ2luOiBcIjMwcHggYXV0b1wifX0+XG4gICAgICAgICAgICAgICAgPGxlZ2VuZD5DcmVkaXQgQ2FyZCBJbmZvcm1hdGlvbjwvbGVnZW5kPlxuICAgICAgICAgICAgICAgIDxGb3JtUm93IGNsYXNzTmFtZT1cImNjLW51bS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWxTdHlsZT1cImZvcm0tZ3JvdXAtLWNjTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2NOdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDQVJEIE5VTUJFUlwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiMjIyMgIyMjIyAjIyMjICMjIyMgIyMjI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRzLmNjTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5jY051bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb249XCJcXGQqXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Sb3c+XG4gICAgICAgICAgICAgICAgPEZvcm1Sb3cgY2xhc3NOYW1lPVwiY2MtZXhwLXJvd1wiIHN0eWxlPXt7YWxpZ25JdGVtczogXCJjZW50ZXJcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIn19PlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiRXhwaXJlc01vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWxTdHlsZT1cImZvcm0tZ3JvdXAtLWV4cE1vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTU9OVEhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRzLkV4cGlyZXNNb250aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuRXhwaXJlc01vbnRofVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bW9udGhzfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mbmJzcDsvJm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiRXhwaXJlc1llYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbFN0eWxlPVwiZm9ybS1ncm91cC0tZXhwWWVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllFQVJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRzLkV4cGlyZXNZZWFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5FeHBpcmVzWWVhcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3llYXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbFN0eWxlPVwiZm9ybS1ncm91cC0tY3ZuQ29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImN2bkNvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDVlZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezR9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImN2dlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRzLmN2bkNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmN2bkNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uPVwiXFxkKlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbmZvQ2lyY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmNibi5jb20vQ1ZWTnVtYmVyL0NWVi5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PEZhUXVlc3Rpb25DaXJjbGUvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9JbmZvQ2lyY2xlPlxuICAgICAgICAgICAgICAgIDwvRm9ybVJvdz5cbiAgICAgICAgICAgIDwvRmllbGRTZXQ+XG4gICAgICAgIDwvUGF5bWVudEJsb2NrQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudEJsb2NrXG4gICAgIl19 */"
});

var PaymentBlock = function PaymentBlock(_ref) {
  var fields = _ref.fields,
      errors = _ref.errors,
      curYear = _ref.curYear,
      curMonth = _ref.curMonth,
      handleInputChange = _ref.handleInputChange;
  var years = [],
      months = [];
  years.push((0, _core.jsx)("option", {
    key: "exp-year-base-0",
    value: "",
    disabled: "disabled"
  }, "Year* \u25BC"));

  for (var y = curYear; y < curYear + 25; y++) {
    years.push((0, _core.jsx)("option", {
      key: "year-option-" + y,
      value: y
    }, y));
  }

  months.push((0, _core.jsx)("option", {
    key: "exp-month-base-0",
    value: "",
    disabled: "disabled"
  }, "Month* \u25BC"));

  for (var m = 1; m < 13; m++) {
    var val = ("0" + m).slice(-2);
    months.push((0, _core.jsx)("option", {
      key: "month-option-" + val,
      value: val
    }, val));
  }

  return (0, _core.jsx)(PaymentBlockContainer, null, (0, _core.jsx)(_FormHeader.default, {
    style: {
      fontSize: "28px",
      fontWeight: "bold",
      letterSpacing: "0.53px",
      color: "#1c1c1c"
    }
  }, "Payment Information"), (0, _core.jsx)(SafetyDisclaimer, {
    className: "safety-disclaimer"
  }, (0, _core.jsx)(_LockSymbol.default, null), " ", (0, _core.jsx)("span", {
    style: {
      color: "#54585D"
    }
  }, "This is a secure 256-bit SSL encrypted payment. You\u2019re safe.")), (0, _core.jsx)(CCBlock, null, (0, _core.jsx)(_Visa.default, null), (0, _core.jsx)(_MasterCard.default, null), (0, _core.jsx)(_Discover.default, null), (0, _core.jsx)(_Amex.default, null)), (0, _core.jsx)(_FieldSet.default, {
    style: {
      minWidth: "unset",
      width: "calc(100% - 20px)",
      maxWidth: "354px",
      margin: "30px auto"
    }
  }, (0, _core.jsx)("legend", null, "Credit Card Information"), (0, _core.jsx)(_FormRow.default, {
    className: "cc-num-row"
  }, (0, _core.jsx)(_InputGroup.default, {
    specialStyle: "form-group--ccNumber",
    type: "text",
    id: "ccNumber",
    label: "CARD NUMBER",
    required: true,
    maxLength: 16,
    placeholder: "#### #### #### #### ####",
    value: fields.ccNumber,
    handleInputChange: handleInputChange,
    error: errors.ccNumber,
    validation: "\\d*"
  })), (0, _core.jsx)(_FormRow.default, {
    className: "cc-exp-row",
    style: {
      alignItems: "center",
      position: "relative"
    }
  }, (0, _core.jsx)(_SelectGroup.default, {
    id: "ExpiresMonth",
    specialStyle: "form-group--expMonth",
    label: "MONTH",
    required: true,
    value: fields.ExpiresMonth,
    error: errors.ExpiresMonth,
    options: months,
    handleInputChange: handleInputChange
  }), (0, _core.jsx)("span", null, "\xA0/\xA0"), (0, _core.jsx)(_SelectGroup.default, {
    id: "ExpiresYear",
    specialStyle: "form-group--expYear",
    label: "YEAR",
    required: true,
    value: fields.ExpiresYear,
    error: errors.ExpiresYear,
    options: years,
    handleInputChange: handleInputChange
  }), (0, _core.jsx)(_InputGroup.default, {
    specialStyle: "form-group--cvnCode",
    type: "text",
    id: "cvnCode",
    label: "CVV",
    required: true,
    maxLength: 4,
    placeholder: "cvv",
    value: fields.cvnCode,
    handleInputChange: handleInputChange,
    error: errors.cvnCode,
    validation: "\\d*"
  }), (0, _core.jsx)(InfoCircle, null, (0, _core.jsx)("a", {
    href: "https://www.cbn.com/CVVNumber/CVV.html",
    target: "_blank"
  }, (0, _core.jsx)(_fa.FaQuestionCircle, null))))));
};

var _default = PaymentBlock;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PaymentBlockContainer, "PaymentBlockContainer", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/PaymentBlock.js");
  reactHotLoader.register(SafetyDisclaimer, "SafetyDisclaimer", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/PaymentBlock.js");
  reactHotLoader.register(CCBlock, "CCBlock", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/PaymentBlock.js");
  reactHotLoader.register(InfoCircle, "InfoCircle", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/PaymentBlock.js");
  reactHotLoader.register(PaymentBlock, "PaymentBlock", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/PaymentBlock.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/PaymentBlock.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","react-icons/fa":"node_modules/react-icons/fa/index.esm.js","../StyledComponents/FormHeader":"src/Components/FormComponents/StyledComponents/FormHeader.js","../SVG/LockSymbol":"src/Components/FormComponents/SVG/LockSymbol.js","../SVG/MasterCard":"src/Components/FormComponents/SVG/MasterCard.js","../SVG/Discover":"src/Components/FormComponents/SVG/Discover.js","../SVG/Amex":"src/Components/FormComponents/SVG/Amex.js","../SVG/Visa":"src/Components/FormComponents/SVG/Visa.js","../StyledComponents/FieldSet":"src/Components/FormComponents/StyledComponents/FieldSet.js","../StyledComponents/FormRow":"src/Components/FormComponents/StyledComponents/FormRow.js","../InputGroup":"src/Components/FormComponents/InputGroup.js","../SelectGroup":"src/Components/FormComponents/SelectGroup.js"}],"src/Components/Forms/ConfirmationForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _reactAriaLive = require("react-aria-live");

var _GivingFormProvider = require("../Contexts/GivingFormProvider");

var _FormWrapper = _interopRequireDefault(require("../StyledComponents/FormWrapper"));

var _FormPanel = _interopRequireDefault(require("../FormComponents/StyledComponents/FormPanel"));

var _FieldSet = _interopRequireDefault(require("../FormComponents/StyledComponents/FieldSet"));

var _FormHeader = _interopRequireDefault(require("../FormComponents/StyledComponents/FormHeader"));

var _NameBlock = _interopRequireDefault(require("../FormComponents/Blocks/NameBlock"));

var _AddressBlock = _interopRequireDefault(require("../FormComponents/Blocks/AddressBlock"));

var _SummaryBlock = _interopRequireDefault(require("../FormComponents/Blocks/SummaryBlock"));

var _PaymentBlock = _interopRequireDefault(require("../FormComponents/Blocks/PaymentBlock"));

var _ccValidation = require("../../helpers/cc-validation");

var _SubmitButton = _interopRequireDefault(require("../FormComponents/SubmitButton"));

var _HiddenForm = _interopRequireDefault(require("../FormComponents/StyledComponents/HiddenForm"));

var _Seals = _interopRequireDefault(require("../FormComponents/Seals"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Disclaimer = (0, _styledBase.default)("div", {
  target: "e156bhub0",
  label: "Disclaimer"
})("development" === "production" ? {
  name: "1dtjbas",
  styles: "color:#444444;font-size:16px;text-align:center;a{cursor:pointer;font-size:16px;color:#444444;text-decoration:none;transition:color 200ms ease-in-out;&:hover{text-decoration:underline;color:#333333;}}"
} : {
  name: "1dtjbas",
  styles: "color:#444444;font-size:16px;text-align:center;a{cursor:pointer;font-size:16px;color:#444444;text-decoration:none;transition:color 200ms ease-in-out;&:hover{text-decoration:underline;color:#333333;}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbmZpcm1hdGlvbkZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUI2QiIsImZpbGUiOiJDb25maXJtYXRpb25Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IExpdmVNZXNzYWdlIH0gZnJvbSAncmVhY3QtYXJpYS1saXZlJ1xuXG5pbXBvcnQgeyBHaXZpbmdGb3JtQ29udGV4dCB9IGZyb20gXCIuLi9Db250ZXh0cy9HaXZpbmdGb3JtUHJvdmlkZXJcIjtcblxuaW1wb3J0IEZvcm1XcmFwcGVyIGZyb20gJy4uL1N0eWxlZENvbXBvbmVudHMvRm9ybVdyYXBwZXInO1xuaW1wb3J0IEZvcm1QYW5lbCBmcm9tIFwiLi4vRm9ybUNvbXBvbmVudHMvU3R5bGVkQ29tcG9uZW50cy9Gb3JtUGFuZWxcIjtcbmltcG9ydCBGaWVsZFNldCBmcm9tIFwiLi4vRm9ybUNvbXBvbmVudHMvU3R5bGVkQ29tcG9uZW50cy9GaWVsZFNldFwiO1xuaW1wb3J0IEZvcm1IZWFkZXIgZnJvbSBcIi4uL0Zvcm1Db21wb25lbnRzL1N0eWxlZENvbXBvbmVudHMvRm9ybUhlYWRlclwiO1xuaW1wb3J0IE5hbWVCbG9jayBmcm9tIFwiLi4vRm9ybUNvbXBvbmVudHMvQmxvY2tzL05hbWVCbG9ja1wiO1xuaW1wb3J0IEFkZHJlc3NCbG9jayBmcm9tIFwiLi4vRm9ybUNvbXBvbmVudHMvQmxvY2tzL0FkZHJlc3NCbG9ja1wiO1xuaW1wb3J0IFN1bW1hcnlCbG9jayBmcm9tIFwiLi4vRm9ybUNvbXBvbmVudHMvQmxvY2tzL1N1bW1hcnlCbG9ja1wiO1xuaW1wb3J0IFBheW1lbnRCbG9jayBmcm9tIFwiLi4vRm9ybUNvbXBvbmVudHMvQmxvY2tzL1BheW1lbnRCbG9ja1wiO1xuaW1wb3J0IHsgY2hlY2tWYWx1ZXMgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9jYy12YWxpZGF0aW9uXCI7XG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gXCIuLi9Gb3JtQ29tcG9uZW50cy9TdWJtaXRCdXR0b25cIjtcbmltcG9ydCBIaWRkZW5Gb3JtIGZyb20gXCIuLi9Gb3JtQ29tcG9uZW50cy9TdHlsZWRDb21wb25lbnRzL0hpZGRlbkZvcm1cIjtcbmltcG9ydCBTZWFscyBmcm9tIFwiLi4vRm9ybUNvbXBvbmVudHMvU2VhbHNcIlxuXG5jb25zdCBEaXNjbGFpbWVyID0gc3R5bGVkLmRpdmBcbiAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgfVxuICAgIH1cbmBcblxuY29uc3QgZ2V0RGF5ID0gZGF0ZSA9PiB7XG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpICsgMjtcbiAgICByZXR1cm4gZGF5ID49IDIgJiYgZGF5IDw9IDI4ID8gZGF5IDogMjtcbn07XG5jb25zdCBkID0gbmV3IERhdGUoKTtcbmNvbnN0IGN1ck1vbnRoID0gXCIwXCIgKyAoZC5nZXRNb250aCgpICsgMSk7XG5jb25zdCBjdXJZZWFyID0gZC5nZXRGdWxsWWVhcigpO1xuXG5jbGFzcyBDb25maXJtYXRpb25Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Zm9ybVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG5cdHN0YXRlID0ge1xuXHRcdGExMXlNZXNzYWdlOiAnJ1xuXHR9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMuaGFuZGxlTWVzc2FnZSwgZmFsc2UpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmNvbnRleHQuZ2V0R2xvYmFscygpO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS5lcnJvcih7IGVyciB9KTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLmNvbnRleHQuaW5pdGlhbGl6ZWQpIHtcblxuXHRcdFx0Y29uc3QgZmllbGRzID0ge1xuXHRcdFx0XHRaaXA6IFwiXCIsXG5cdFx0XHRcdE1vbnRobHlwbGVkZ2VkYXk6IGdldERheShkKSxcblx0XHRcdFx0VGl0bGU6IFwiXCIsXG5cdFx0XHRcdEZpcnN0bmFtZTogXCJcIixcblx0XHRcdFx0TWlkZGxlbmFtZTogXCJcIixcblx0XHRcdFx0TGFzdG5hbWU6IFwiXCIsXG5cdFx0XHRcdFN1ZmZpeDogXCJcIixcblx0XHRcdFx0U3BvdXNlbmFtZTogXCJcIixcblx0XHRcdFx0QWRkcmVzczE6IFwiXCIsXG5cdFx0XHRcdEFkZHJlc3MyOiBcIlwiLFxuXHRcdFx0XHRDaXR5OiBcIlwiLFxuXHRcdFx0XHRTdGF0ZTogXCJcIixcblx0XHRcdFx0Q291bnRyeTogXCJVbml0ZWQgU3RhdGVzXCIsXG5cdFx0XHRcdEVtYWlsYWRkcmVzczogXCJcIixcblx0XHRcdFx0cGhvbmU6IFwiXCIsXG4gICAgICAgICAgICAgICAgRXhwaXJlc01vbnRoOiBjdXJNb250aC5zbGljZSgtMiksXG4gICAgICAgICAgICAgICAgRXhwaXJlc1llYXI6IGN1clllYXIsXG4gICAgICAgICAgICAgICAgY2NOdW1iZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgY3ZuQ29kZTogXCJcIlxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGVycm9ycyA9IHt9O1xuXHRcdFx0Zm9yIChsZXQgZmllbGQgaW4gZmllbGRzKSB7XG5cdFx0XHRcdGVycm9yc1tmaWVsZF0gPSBcIlwiO1xuXHRcdFx0fVxuXHRcdFx0ZXJyb3JzLmFtb3VudCA9IFwiXCI7XG5cdFx0XHR0aGlzLmNvbnRleHQuaW5pdEZpZWxkcyh7XG5cdFx0XHRcdHR5cGU6IFwiSU5JVF9GT1JNX1NUQVRFXCIsXG5cdFx0XHRcdGZpZWxkcyxcblx0XHRcdFx0ZXJyb3JzLFxuXHRcdFx0XHRhbGxvd01vbnRobHlEZXNpZ25hdGlvbnM6IHRoaXMucHJvcHMuYWxsb3dNb250aGx5RGVzaWduYXRpb25zXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2ExMXlNZXNzYWdlOiBcIllvdXIgZG9uYXRpb24gYW1vdW50IGhhcyBiZWVuIHJlY29yZGVkLiBBIG5ldyBmb3JtIHRvIGFkZCB5b3VyIENyZWRpdCBDYXJkIGFuZCBDb250YWN0IEluZm9ybWF0aW9uIEp1c3QgTG9hZGVkXCJ9KVxuXHRcdH1cblx0fVxuICAgIGFzeW5jIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5oYW5kbGVNZXNzYWdlKTtcblx0XHQvLyBpZiB1c2VyIGhhcyBzZWxlY3RlZCB0byBzYXZlIHBlcnNvbmFsIGluZm8sXG5cdH1cblx0Z2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSB7XG5cdFx0Y29uc3QgeyBzdWJtaXR0ZWQsIGNvbmZpcm1hdGlvbkRhdGEsIGZvcm1BY3Rpb24gfSA9IHRoaXMuY29udGV4dFxuXHRcdGNvbnNvbGUubG9nKHtjb25maXJtYXRpb25EYXRhLCBmb3JtQWN0aW9ufSlcblx0XHRpZiAoc3VibWl0dGVkKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0XHRyZXR1cm4gbnVsbFxuXHR9XG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcblx0XHRjb25zb2xlLmxvZyh7c25hcHNob3R9KVxuXHR9XG4gICAgaGFuZGxlTWVzc2FnZSA9IGUgPT4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKHtlfSlcblx0XHRjb25zdCB7IHR5cGUsIHRyYWNraW5nX3ZhcnMgfSA9XG5cdFx0XHRlLmRhdGEgJiYgdHlwZW9mIGUuZGF0YSA9PSBcInN0cmluZ1wiID8gSlNPTi5wYXJzZShlLmRhdGEpIDoge307XG5cdFx0Y29uc3QgdHlwZXMgPSBbIFwiZm9ybSBlcnJvclwiLCBcInJlbmRlciByZWNlaXB0XCIgXVxuXHRcdGlmICghdHlwZXMuaW5jbHVkZXModHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBcblx0XHRjb25zdCB7IG9yaWdpbiB9ID0gZTtcblx0XHRjb25zdCBpc09yaWdpbiA9IHRoaXMuY29udGV4dC5tc2dVcmlzLmluY2x1ZGVzKG9yaWdpbik7XG5cdFx0aWYgKCFpc09yaWdpbikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgXCJyZW5kZXIgcmVjZWlwdFwiOlxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc3VibWl0dGluZzogZmFsc2UgfSk7XG5cdFx0XHRcdHRoaXMuY29udGV4dC5zZXRDb25maXJtZWQoe1xuXHRcdFx0XHRcdHR5cGU6IFwiQ09ORklSTUVEXCIsXG5cdFx0XHRcdFx0dHJhY2tpbmdWYXJzOiB0cmFja2luZ192YXJzLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiZm9ybSBlcnJvclwiIDpcblx0XHRcdFx0Y29uc3QgZXJyb3JzID0gWy4uLnRoaXMuc3RhdGUuZXJyb3JzXVxuXHRcdFx0XHRlcnJvcnNbXCJjY051bWJlclwiXSA9IFwiUGxlYXNlIHZlcmlmeSB5b3VyIFBheW1lbnQgSW5mb3JtYXRpb24gYW5kIFRyeSBBZ2FpblwiXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiBmYWxzZSwgZXJyb3JzIH0pO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuO1xuICAgIH07XG4gICAgaGFuZGxlSW5wdXRDaGFuZ2UgPSBlID0+IHtcblx0XHRjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcblx0XHRsZXQgdmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiID8gdGFyZ2V0LmNoZWNrZWQgOiB0YXJnZXQudmFsdWU7XG5cdFx0Y29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xuXHRcdHRoaXMuY29udGV4dC52YWxpZGF0ZUFuZFVwZGF0ZUZpZWxkKHsgdHlwZTogXCJVUERBVEVfRklFTERcIiwgbmFtZSwgdmFsdWUgfSk7XG5cdH07XG5cblx0aGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMuY29udGV4dC5zdWJtaXRHaXZpbmdGb3JtKHt0eXBlOiBcImNvbmZpcm1hdGlvblwifSk7XG5cdH07XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGVycm9ycywgZmllbGRzLCBpbml0aWFsaXplZCwgc3VibWl0dGluZywgc2VsZWN0ZWQsIHN1Ym1pdHRlZCwgY29uZmlybWF0aW9uRGF0YSwgZm9ybUFjdGlvbiB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCB7IFxuICAgICAgICAgICAgYWxsb3dJbnRlcm5hdGlvbmFsLFxuICAgICAgICAgICAgZ2V0UGhvbmUsXG4gICAgICAgICAgICBnZXRIb25vcmlmaWMsXG4gICAgICAgICAgICBnZXRTdWZmaXgsXG4gICAgICAgICAgICBnZXRNaWRkbGVOYW1lLFxuICAgICAgICAgICAgZ2V0U3BvdXNlSW5mbywgIFxuXHRcdH0gPSB0aGlzLnByb3BzXG5cdFx0Y29uc3QgZm9ybUlucHV0cyA9IFtdLCBkYXRhSW5wdXRzID0gW107XG5cdFx0Y29uZmlybWF0aW9uRGF0YS5mb3JFYWNoKChkYXR1bSwgaSkgPT4ge1xuXHRcdFx0aWYgKGRhdHVtLm5hbWUuaW5jbHVkZXMoXCJ1Y0NvbmZpcm1Cb2R5XCIpKSB7XG5cdFx0XHRcdG5hbWUgPSBkYXR1bS5uYW1lLnNwbGl0KFwiJFwiKVsxXTtcblx0XHRcdFx0ZGF0YUlucHV0cy5wdXNoKFxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0a2V5PXtgZGF0dW0ke2l9YH1cblx0XHRcdFx0XHRcdGlkPXtuYW1lfVxuXHRcdFx0XHRcdFx0bmFtZT17bmFtZX1cblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZGF0dW0udmFsdWUgPyBkYXR1bS52YWx1ZSA6IFwiXCJ9XG5cdFx0XHRcdFx0XHR0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9ybUlucHV0cy5wdXNoKFxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0a2V5PXtgZGF0dW0ke2l9YH1cblx0XHRcdFx0XHRcdGlkPXtkYXR1bS5uYW1lfVxuXHRcdFx0XHRcdFx0bmFtZT17ZGF0dW0ubmFtZX1cblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZGF0dW0udmFsdWUgPyBkYXR1bS52YWx1ZSA6IFwiXCJ9XG5cdFx0XHRcdFx0XHR0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pXG4gICAgICAgIGNvbnN0IGhhc0Vycm9ycyA9XG5cdFx0XHRPYmplY3QudmFsdWVzKGVycm9ycykuZmlsdGVyKHZhbCA9PiB2YWwgJiYgdmFsLmxlbmd0aCA+IDApLmxlbmd0aCA+IDA7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZCAmJiAoXG4gICAgICAgICAgICA8PlxuXHRcdFx0PExpdmVNZXNzYWdlIG1lc3NhZ2U9e3RoaXMuc3RhdGUuYTExeU1lc3NhZ2V9IGFyaWEtbGl2ZT1cInBvbGl0ZVwiIC8+XG4gICAgICAgICAgICA8Rm9ybVdyYXBwZXIgc3R5bGU9e3ttYXhXaWR0aDogXCI4MThweFwiLCBtYXJnaW46IFwiMCBhdXRvXCJ9fT5cbiAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICBpZD1cInJlYWN0LWNsdWItcGF5bWVudC1mb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplZCA/IChcblx0XHRcdFx0XHRcdDxGb3JtUGFuZWwgY2xhc3NOYW1lPVwiZm9ybS1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdW1tYXJ5QmxvY2sgd2l0aENvbnRhaW5lcj17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXltZW50QmxvY2sgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcz17ZmllbGRzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJNb250aD17Y3VyTW9udGh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJZZWFyPXtjdXJZZWFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXHRcdFx0XHRcdFx0XHQ8RmllbGRTZXQgc3R5bGU9e3ttaW5XaWR0aDogXCJ1bnNldFwiLCB3aWR0aDogXCJjYWxjKDEwMCUgLSAyMHB4KVwiLCBtYXhXaWR0aDogXCI2NDBweFwiLCBtYXJnaW46IFwiMCBhdXRvXCJ9fT5cblx0XHRcdFx0XHRcdFx0XHQ8bGVnZW5kPk5hbWUgYW5kIEJpbGxpbmcgQWRkcmVzcyBCbG9jazwvbGVnZW5kPlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtUGFuZWwgY2xhc3NOYW1lPVwibmFtZS1hZGRyZXNzX19pbmZvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUhlYWRlciBjbGFzc05hbWU9XCJmb3JtLWhlYWRlclwiIHN0eWxlPXt7Zm9udFNpemU6IFwiMjhweFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgbGV0dGVyU3BhY2luZzpcIjAuNTNweFwiLGNvbG9yOlwiIzFjMWMxY1wiLCBtYXJnaW5Cb3R0b206IFwiMjBweFwifX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdENvbnRhY3QgSW5mb3JtYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybUhlYWRlcj5cblx0XHRcdFx0XHRcdFx0XHRcdDxOYW1lQmxvY2tcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmllbGRzPXtmaWVsZHN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ycz17ZXJyb3JzfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnZXRIb25vcmlmaWM9e2dldEhvbm9yaWZpY31cblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2V0TWlkZGxlTmFtZT17Z2V0TWlkZGxlTmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2V0U3VmZml4PXtnZXRTdWZmaXh9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdldFNwb3VzZUluZm89e2dldFNwb3VzZUluZm99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZUlucHV0Q2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiTmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEFkZHJlc3NCbG9ja1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRmaWVsZHM9e2ZpZWxkc31cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JzPXtlcnJvcnN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZUlucHV0Q2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnZXRBZGRyZXNzPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnZXRQaG9uZT17Z2V0UGhvbmV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsbG93SW50ZXJuYXRpb25hbD17YWxsb3dJbnRlcm5hdGlvbmFsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiQmlsbGluZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhpZGVBZGRyZXNzVHdvPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1QYW5lbD5cblx0XHRcdFx0XHRcdFx0PC9GaWVsZFNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VtbWFyeUJsb2NrIHdpdGhDb250YWluZXI9e2ZhbHNlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkU2V0PlxuXHRcdFx0XHRcdFx0XHRcdDxsZWdlbmQ+Rm9ybSBTdWJtaXQgQmxvY2s8L2xlZ2VuZD5cblx0XHRcdFx0XHRcdFx0XHQ8U3VibWl0QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRoYXNFcnJvcnM9e2hhc0Vycm9yc31cblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yPVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9XG5cdFx0XHRcdFx0XHRcdFx0XHRzdWJtaXR0aW5nPXtzdWJtaXR0aW5nIHx8IHN1Ym1pdHRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU2VuZCBQYXltZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2ZmZlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I9XCIjMDA5QkRGXCJcblx0XHRcdFx0XHRcdFx0XHRcdGhvdmVyQmFja2dyb3VuZENvbG9yPVwiI2ZmZlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRob3ZlckNvbG9yPVwiIzAwOWJkZlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRob3ZlckJvcmRlckNvbG9yPVwiIzAwOWJkZlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM9XCIzcHhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGVzPXt7aW5wdXQ6IHtib3hTaGFkb3c6IFwiMCAycHggMCAwICMwMDgxQkFcIn19fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIHN0eWxlPXt7Y29sb3I6IFwiIzU0NTg1RFwifX0+Q0JOIHZhbHVlcyBhbmQgcHJvdGVjdHMgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbi48L0Rpc2NsYWltZXI+XG5cdFx0XHRcdFx0XHRcdDwvRmllbGRTZXQ+XG5cdFx0XHRcdFx0XHRcdDxIaWRkZW5Gb3JtXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJoaWRkZW5mb3JtXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJoaWRkZW4tZm9ybVwiXG5cdFx0XHRcdFx0XHRcdFx0YWN0aW9uPXtmb3JtQWN0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdG1ldGhvZD1cIlBPU1RcIlxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cInBheW1lbnRwcm9jZXNzXCJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3RoaXMuZm9ybVJlZn1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtmb3JtSW5wdXRzfVxuXHRcdFx0XHRcdFx0XHQ8L0hpZGRlbkZvcm0+XG5cdFx0XHRcdFx0XHRcdHtkYXRhSW5wdXRzfVxuXHRcdFx0XHRcdFx0XHQ8aWZyYW1lXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwicGF5bWVudHByb2Nlc3NcIlxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgdmlzaWJpbGl0eTogXCJub25lXCIsIGJvcmRlcjogXCJub25lXCIgfX1cblx0XHRcdFx0XHRcdFx0PjwvaWZyYW1lPlxuXHRcdFx0XHRcdFx0PC9Gb3JtUGFuZWw+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDxGb3JtUGFuZWwgY2xhc3NOYW1lPVwiZm9ybS1wYW5lbFwiPlxuXHRcdFx0XHRcdFx0XHQ8U3Bpbm5lciAvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9Gb3JtV3JhcHBlcj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIG1hcmdpbjogXCIzMHB4IDBcIiwgcGFkZGluZzogXCIzMHB4IDBcIn19PlxuICAgICAgICAgICAgICAgIDxTZWFscyBzdHlsZT17e21hcmdpblRvcDpcIjBcIn19Lz5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lcj5JZiB5b3UgZXhwZXJpZW5jZSBhIHByb2JsZW0gd2l0aCB0aGlzIHRyYW5zYWN0aW9uLCBzZW5kIGEgbWVzc2FnZSB0byA8YSBocmVmPVwibWFpbHRvOnBhcnRuZXJzQGNibi5vcmdcIj5wYXJ0bmVyc0BjYm4ub3JnPC9hPiBvciBjYWxsIDxhIGhyZWY9XCJ0ZWw6MTgwMDI4OTE3NzdcIj4xLTgwMC0yODktMTc3NzwvYT4uPC9EaXNjbGFpbWVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuQ29uZmlybWF0aW9uRm9ybS5jb250ZXh0VHlwZSA9IEdpdmluZ0Zvcm1Db250ZXh0O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtYXRpb25Gb3JtOyJdfQ== */"
});

var getDay = function getDay(date) {
  var day = date.getDate() + 2;
  return day >= 2 && day <= 28 ? day : 2;
};

var d = new Date();
var curMonth = "0" + (d.getMonth() + 1);
var curYear = d.getFullYear();

var ConfirmationForm =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ConfirmationForm, _Component);

  function ConfirmationForm() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ConfirmationForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ConfirmationForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.formRef = _react.default.createRef();
    _this.state = {
      a11yMessage: ''
    };

    _this.handleMessage = function (e) {
      // console.log({e})
      var _ref = e.data && typeof e.data == "string" ? JSON.parse(e.data) : {},
          type = _ref.type,
          tracking_vars = _ref.tracking_vars;

      var types = ["form error", "render receipt"];

      if (!types.includes(type)) {
        return;
      }

      var origin = e.origin;

      var isOrigin = _this.context.msgUris.includes(origin);

      if (!isOrigin) {
        return;
      }

      switch (type) {
        case "render receipt":
          _this.setState({
            submitting: false
          });

          _this.context.setConfirmed({
            type: "CONFIRMED",
            trackingVars: tracking_vars
          });

          break;

        case "form error":
          var errors = (0, _toConsumableArray2.default)(_this.state.errors);
          errors["ccNumber"] = "Please verify your Payment Information and Try Again";

          _this.setState({
            submitting: false,
            errors: errors
          });

          break;
      }

      return;
    };

    _this.handleInputChange = function (e) {
      var target = e.target;
      var value = target.type === "checkbox" ? target.checked : target.value;
      var name = target.name;

      _this.context.validateAndUpdateField({
        type: "UPDATE_FIELD",
        name: name,
        value: value
      });
    };

    _this.handleSubmit =
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(e) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                _this.context.submitGivingForm({
                  type: "confirmation"
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    return _this;
  }

  (0, _createClass2.default)(ConfirmationForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("message", this.handleMessage, false);

      try {
        this.context.getGlobals();
      } catch (err) {
        console.error({
          err: err
        });
      }

      if (!this.context.initialized) {
        var fields = {
          Zip: "",
          Monthlypledgeday: getDay(d),
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
          ExpiresMonth: curMonth.slice(-2),
          ExpiresYear: curYear,
          ccNumber: "",
          cvnCode: ""
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
          allowMonthlyDesignations: this.props.allowMonthlyDesignations
        });
        this.setState({
          a11yMessage: "Your donation amount has been recorded. A new form to add your Credit Card and Contact Information Just Loaded"
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      var _componentWillUnmount = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                window.removeEventListener("message", this.handleMessage); // if user has selected to save personal info,

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillUnmount() {
        return _componentWillUnmount.apply(this, arguments);
      }

      return componentWillUnmount;
    }()
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate() {
      var _this$context = this.context,
          submitted = _this$context.submitted,
          confirmationData = _this$context.confirmationData,
          formAction = _this$context.formAction;
      console.log({
        confirmationData: confirmationData,
        formAction: formAction
      });

      if (submitted) {
        return true;
      }

      return null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      console.log({
        snapshot: snapshot
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context2 = this.context,
          errors = _this$context2.errors,
          fields = _this$context2.fields,
          initialized = _this$context2.initialized,
          submitting = _this$context2.submitting,
          selected = _this$context2.selected,
          submitted = _this$context2.submitted,
          confirmationData = _this$context2.confirmationData,
          formAction = _this$context2.formAction;
      var _this$props = this.props,
          allowInternational = _this$props.allowInternational,
          getPhone = _this$props.getPhone,
          getHonorific = _this$props.getHonorific,
          getSuffix = _this$props.getSuffix,
          getMiddleName = _this$props.getMiddleName,
          getSpouseInfo = _this$props.getSpouseInfo;
      var formInputs = [],
          dataInputs = [];
      confirmationData.forEach(function (datum, i) {
        if (datum.name.includes("ucConfirmBody")) {
          name = datum.name.split("$")[1];
          dataInputs.push((0, _core.jsx)("input", {
            key: "datum".concat(i),
            id: name,
            name: name,
            defaultValue: datum.value ? datum.value : "",
            type: "hidden"
          }));
        } else {
          formInputs.push((0, _core.jsx)("input", {
            key: "datum".concat(i),
            id: datum.name,
            name: datum.name,
            defaultValue: datum.value ? datum.value : "",
            type: "hidden"
          }));
        }
      });
      var hasErrors = Object.values(errors).filter(function (val) {
        return val && val.length > 0;
      }).length > 0;
      return selected && (0, _core.jsx)(_react.default.Fragment, null, (0, _core.jsx)(_reactAriaLive.LiveMessage, {
        message: this.state.a11yMessage,
        "aria-live": "polite"
      }), (0, _core.jsx)(_FormWrapper.default, {
        style: {
          maxWidth: "818px",
          margin: "0 auto"
        }
      }, (0, _core.jsx)("form", {
        id: "react-club-payment-form",
        autoComplete: "off",
        onSubmit: this.handleSubmit,
        style: {
          backgroundColor: "white"
        }
      }, initialized ? (0, _core.jsx)(_FormPanel.default, {
        className: "form-panel"
      }, (0, _core.jsx)(_SummaryBlock.default, {
        withContainer: true
      }), (0, _core.jsx)(_PaymentBlock.default, {
        fields: fields,
        errors: errors,
        curMonth: curMonth,
        curYear: curYear,
        handleInputChange: this.handleInputChange
      }), (0, _core.jsx)(_FieldSet.default, {
        style: {
          minWidth: "unset",
          width: "calc(100% - 20px)",
          maxWidth: "640px",
          margin: "0 auto"
        }
      }, (0, _core.jsx)("legend", null, "Name and Billing Address Block"), (0, _core.jsx)(_FormPanel.default, {
        className: "name-address__info"
      }, (0, _core.jsx)(_FormHeader.default, {
        className: "form-header",
        style: {
          fontSize: "28px",
          fontWeight: "bold",
          letterSpacing: "0.53px",
          color: "#1c1c1c",
          marginBottom: "20px"
        }
      }, "Contact Information"), (0, _core.jsx)(_NameBlock.default, {
        fields: fields,
        errors: errors,
        getHonorific: getHonorific,
        getMiddleName: getMiddleName,
        getSuffix: getSuffix,
        getSpouseInfo: getSpouseInfo,
        handleInputChange: this.handleInputChange,
        type: "Name"
      }), (0, _core.jsx)(_AddressBlock.default, {
        fields: fields,
        errors: errors,
        handleInputChange: this.handleInputChange,
        getAddress: true,
        getPhone: getPhone,
        allowInternational: allowInternational,
        type: "Billing",
        hideAddressTwo: true
      }))), (0, _core.jsx)(_SummaryBlock.default, {
        withContainer: false
      }), (0, _core.jsx)(_FieldSet.default, null, (0, _core.jsx)("legend", null, "Form Submit Block"), (0, _core.jsx)(_SubmitButton.default, {
        hasErrors: hasErrors,
        error: "",
        handleSubmit: this.handleSubmit,
        submitting: submitting || submitted,
        value: "Send Payment",
        color: "#fff",
        backgroundColor: "#009BDF",
        hoverBackgroundColor: "#fff",
        hoverColor: "#009bdf",
        hoverBorderColor: "#009bdf",
        borderRadius: "3px",
        styles: {
          input: {
            boxShadow: "0 2px 0 0 #0081BA"
          }
        }
      }), (0, _core.jsx)(Disclaimer, {
        style: {
          color: "#54585D"
        }
      }, "CBN values and protects your personal information.")), (0, _core.jsx)(_HiddenForm.default, {
        id: "hiddenform",
        className: "hidden-form",
        action: formAction,
        method: "POST",
        target: "paymentprocess",
        ref: this.formRef
      }, formInputs), dataInputs, (0, _core.jsx)("iframe", {
        className: "hidden",
        name: "paymentprocess",
        width: "0",
        height: "0",
        style: {
          visibility: "none",
          border: "none"
        }
      })) : (0, _core.jsx)(_FormPanel.default, {
        className: "form-panel"
      }, (0, _core.jsx)(Spinner, null)))), (0, _core.jsx)("div", {
        style: {
          background: "white",
          margin: "30px 0",
          padding: "30px 0"
        }
      }, (0, _core.jsx)(_Seals.default, {
        style: {
          marginTop: "0"
        }
      }), (0, _core.jsx)(Disclaimer, null, "If you experience a problem with this transaction, send a message to ", (0, _core.jsx)("a", {
        href: "mailto:partners@cbn.org"
      }, "partners@cbn.org"), " or call ", (0, _core.jsx)("a", {
        href: "tel:18002891777"
      }, "1-800-289-1777"), ".")));
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

  reactHotLoader.register(Disclaimer, "Disclaimer", "/Users/wehand/Code/react-form-drupal/src/Components/Forms/ConfirmationForm.js");
  reactHotLoader.register(getDay, "getDay", "/Users/wehand/Code/react-form-drupal/src/Components/Forms/ConfirmationForm.js");
  reactHotLoader.register(d, "d", "/Users/wehand/Code/react-form-drupal/src/Components/Forms/ConfirmationForm.js");
  reactHotLoader.register(curMonth, "curMonth", "/Users/wehand/Code/react-form-drupal/src/Components/Forms/ConfirmationForm.js");
  reactHotLoader.register(curYear, "curYear", "/Users/wehand/Code/react-form-drupal/src/Components/Forms/ConfirmationForm.js");
  reactHotLoader.register(ConfirmationForm, "ConfirmationForm", "/Users/wehand/Code/react-form-drupal/src/Components/Forms/ConfirmationForm.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/Forms/ConfirmationForm.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@babel/runtime/regenerator":"node_modules/@babel/runtime/regenerator/index.js","@babel/runtime/helpers/asyncToGenerator":"node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/helpers/toConsumableArray":"node_modules/@babel/runtime/helpers/toConsumableArray.js","@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/inherits":"node_modules/@babel/runtime/helpers/inherits.js","@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","react-aria-live":"node_modules/react-aria-live/es/index.js","../Contexts/GivingFormProvider":"src/Components/Contexts/GivingFormProvider.js","../StyledComponents/FormWrapper":"src/Components/StyledComponents/FormWrapper.js","../FormComponents/StyledComponents/FormPanel":"src/Components/FormComponents/StyledComponents/FormPanel.js","../FormComponents/StyledComponents/FieldSet":"src/Components/FormComponents/StyledComponents/FieldSet.js","../FormComponents/StyledComponents/FormHeader":"src/Components/FormComponents/StyledComponents/FormHeader.js","../FormComponents/Blocks/NameBlock":"src/Components/FormComponents/Blocks/NameBlock.js","../FormComponents/Blocks/AddressBlock":"src/Components/FormComponents/Blocks/AddressBlock.js","../FormComponents/Blocks/SummaryBlock":"src/Components/FormComponents/Blocks/SummaryBlock.js","../FormComponents/Blocks/PaymentBlock":"src/Components/FormComponents/Blocks/PaymentBlock.js","../../helpers/cc-validation":"src/helpers/cc-validation.js","../FormComponents/SubmitButton":"src/Components/FormComponents/SubmitButton.js","../FormComponents/StyledComponents/HiddenForm":"src/Components/FormComponents/StyledComponents/HiddenForm.js","../FormComponents/Seals":"src/Components/FormComponents/Seals.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57998" + '/');

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