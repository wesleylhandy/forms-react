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
})({"src/Components/FormComponents/StyledComponents/FormLine.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var FormLine = (0, _styledBase.default)("div", {
  target: "ev4wl9t0",
  label: "FormLine"
})("development" === "production" ? {
  name: "kbd7ew",
  styles: "background-color:#333;width:100%;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;height:2px;overflow:visible;margin:20px 0;box-sizing:border-box;"
} : {
  name: "kbd7ew",
  styles: "background-color:#333;width:100%;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;height:2px;overflow:visible;margin:20px 0;box-sizing:border-box;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1MaW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUcyQiIsImZpbGUiOiJGb3JtTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBGb3JtTGluZSA9IHN0eWxlZC5kaXZgXG5cdGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG5cdHdpZHRoOiAxMDAlO1xuXHQtd2Via2l0LWJveC1mbGV4OiAxO1xuXHQtbXMtZmxleDogMSAxIGF1dG87XG5cdGZsZXg6IDEgMSBhdXRvO1xuXHQtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0aGVpZ2h0OiAycHg7XG5cdG92ZXJmbG93OiB2aXNpYmxlO1xuXHRtYXJnaW46IDIwcHggMDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1MaW5lO1xuIl19 */"
});
var _default = FormLine;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormLine, "FormLine", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/FormLine.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/FormLine.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js"}],"src/Components/FormComponents/StyledComponents/ProductSummary.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ProductSummary = (0, _styledBase.default)("div", {
  target: "ejt2o4l0",
  label: "ProductSummary"
})("development" === "production" ? {
  name: "orqwb0",
  styles: "padding:10px;font-size:15px;font-weight:300;display:flex;flex-direction:row;justify-content:flex-start;flex-wrap:wrap;align-items:center;div.flex-row{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:10px;flex:1 1 100%;}"
} : {
  name: "orqwb0",
  styles: "padding:10px;font-size:15px;font-weight:300;display:flex;flex-direction:row;justify-content:flex-start;flex-wrap:wrap;align-items:center;div.flex-row{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:10px;flex:1 1 100%;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2R1Y3RTdW1tYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdpQyIsImZpbGUiOiJQcm9kdWN0U3VtbWFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBQcm9kdWN0U3VtbWFyeSA9IHN0eWxlZC5kaXZgXG5cdHBhZGRpbmc6IDEwcHg7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGRpdi5mbGV4LXJvdyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0ZmxleDogMSAxIDEwMCU7XG5cdH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RTdW1tYXJ5O1xuIl19 */"
});
var _default = ProductSummary;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProductSummary, "ProductSummary", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/ProductSummary.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/ProductSummary.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js"}],"src/Components/FormComponents/StyledComponents/CCButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var RadioButton = (0, _styledBase.default)("div", {
  target: "e12ppbhn0",
  label: "RadioButton"
})("development" === "production" ? {
  name: "wunpgh",
  styles: "display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:5px;height:calc(19px * 2);line-height:calc(19px * 2);input[type=\"radio\"]{box-sizing:border-box;position:absolute;opacity:0;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";}input[type=\"radio\"] + label.Visa,input[type=\"radio\"] + label.MasterCard,input[type=\"radio\"] + label.AmericanExpress,input[type=\"radio\"] + label.Discover{box-sizing:border-box;font-size:40px;font-weight:600;display:flex;align-items:center;padding:5px;}input[type=\"radio\"] + label.Visa{color:#172274;}input[type=\"radio\"] + label.MasterCard{color:#ea001b;}input[type=\"radio\"] + label.AmericanExpress{color:#2e78bf;}input[type=\"radio\"] + label.Discover{color:#f58220;}input[type=\"radio\"]:checked + label{background-color:#eee;box-sizing:border-box;box-shadow:0 0 4px #000;border-radius:4px;}input[type=\"radio\"]:focus + label,input[type=\"radio\"]:hover + label{background-color:#f4f4f4;box-sizing:border-box;box-shadow:0 0 4px #777;border-radius:4px;}input[type=\"radio\"]:disabled + label{box-shadow:0 0 4px #000;border-radius:4px;border-color:#bfbfbf;background:#bfbfbf;box-sizing:border-box;}"
} : {
  name: "wunpgh",
  styles: "display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:5px;height:calc(19px * 2);line-height:calc(19px * 2);input[type=\"radio\"]{box-sizing:border-box;position:absolute;opacity:0;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";}input[type=\"radio\"] + label.Visa,input[type=\"radio\"] + label.MasterCard,input[type=\"radio\"] + label.AmericanExpress,input[type=\"radio\"] + label.Discover{box-sizing:border-box;font-size:40px;font-weight:600;display:flex;align-items:center;padding:5px;}input[type=\"radio\"] + label.Visa{color:#172274;}input[type=\"radio\"] + label.MasterCard{color:#ea001b;}input[type=\"radio\"] + label.AmericanExpress{color:#2e78bf;}input[type=\"radio\"] + label.Discover{color:#f58220;}input[type=\"radio\"]:checked + label{background-color:#eee;box-sizing:border-box;box-shadow:0 0 4px #000;border-radius:4px;}input[type=\"radio\"]:focus + label,input[type=\"radio\"]:hover + label{background-color:#f4f4f4;box-sizing:border-box;box-shadow:0 0 4px #777;border-radius:4px;}input[type=\"radio\"]:disabled + label{box-shadow:0 0 4px #000;border-radius:4px;border-color:#bfbfbf;background:#bfbfbf;box-sizing:border-box;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUc4QiIsImZpbGUiOiJDQ0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBSYWRpb0J1dHRvbiA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdHBhZGRpbmc6IDVweDtcblx0aGVpZ2h0OiBjYWxjKDE5cHggKiAyKTtcblx0bGluZS1oZWlnaHQ6IGNhbGMoMTlweCAqIDIpO1xuXHRpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0LW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuXHR9XG5cdGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsLlZpc2EsXG5cdGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsLk1hc3RlckNhcmQsXG5cdGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsLkFtZXJpY2FuRXhwcmVzcyxcblx0aW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwuRGlzY292ZXIge1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0Zm9udC1zaXplOiA0MHB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDVweDtcblx0fVxuXHRpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbC5WaXNhIHtcblx0XHRjb2xvcjogIzE3MjI3NDtcblx0fVxuXHRpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbC5NYXN0ZXJDYXJkIHtcblx0XHRjb2xvcjogI2VhMDAxYjtcblx0fVxuXHRpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbC5BbWVyaWNhbkV4cHJlc3Mge1xuXHRcdGNvbG9yOiAjMmU3OGJmO1xuXHR9XG5cdGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsLkRpc2NvdmVyIHtcblx0XHRjb2xvcjogI2Y1ODIyMDtcblx0fVxuXHRpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0Ym94LXNoYWRvdzogMCAwIDRweCAjMDAwO1xuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0fVxuXHRpbnB1dFt0eXBlPVwicmFkaW9cIl06Zm9jdXMgKyBsYWJlbCxcblx0aW5wdXRbdHlwZT1cInJhZGlvXCJdOmhvdmVyICsgbGFiZWwge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRib3gtc2hhZG93OiAwIDAgNHB4ICM3Nzc7XG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHR9XG5cdGlucHV0W3R5cGU9XCJyYWRpb1wiXTpkaXNhYmxlZCArIGxhYmVsIHtcblx0XHRib3gtc2hhZG93OiAwIDAgNHB4ICMwMDA7XG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdGJvcmRlci1jb2xvcjogI2JmYmZiZjtcblx0XHRiYWNrZ3JvdW5kOiAjYmZiZmJmO1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvQnV0dG9uO1xuIl19 */"
});
var _default = RadioButton;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RadioButton, "RadioButton", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/CCButton.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/CCButton.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js"}],"node_modules/performance-now/lib/performance-now.js":[function(require,module,exports) {
var process = require("process");
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);



},{"process":"node_modules/process/browser.js"}],"node_modules/raf/index.js":[function(require,module,exports) {
var global = arguments[3];
var now = require('performance-now')
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}

},{"performance-now":"node_modules/performance-now/lib/performance-now.js"}],"node_modules/raf/polyfill.js":[function(require,module,exports) {
require('./').polyfill()

},{"./":"node_modules/raf/index.js"}],"src/helpers/scrollToPoint.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollToPoint = scrollToPoint;
exports.offsetTop = offsetTop;

require("raf/polyfill");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

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

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(scrollToPoint, "scrollToPoint", "/Users/wehand/Code/react-form-drupal/src/helpers/scrollToPoint.js");
  reactHotLoader.register(offsetTop, "offsetTop", "/Users/wehand/Code/react-form-drupal/src/helpers/scrollToPoint.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"react-hot-loader":"node_modules/react-hot-loader/index.js","raf/polyfill":"node_modules/raf/polyfill.js"}],"src/Components/Forms/PaymentForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _GivingFormProvider = require("../Contexts/GivingFormProvider");

var _FieldSet = _interopRequireDefault(require("../FormComponents/StyledComponents/FieldSet"));

var _FormRow = _interopRequireDefault(require("../FormComponents/StyledComponents/FormRow"));

var _FormPanel = _interopRequireDefault(require("../FormComponents/StyledComponents/FormPanel"));

var _FormLine = _interopRequireDefault(require("../FormComponents/StyledComponents/FormLine"));

var _FormHeader = _interopRequireDefault(require("../FormComponents/StyledComponents/FormHeader"));

var _ProductSummary = _interopRequireDefault(require("../FormComponents/StyledComponents/ProductSummary"));

var _CCButton = _interopRequireDefault(require("../FormComponents/StyledComponents/CCButton"));

var _HiddenForm = _interopRequireDefault(require("../FormComponents/StyledComponents/HiddenForm"));

var _InputGroup = _interopRequireDefault(require("../FormComponents/InputGroup"));

var _SelectGroup = _interopRequireDefault(require("../FormComponents/SelectGroup"));

var _SubmitButton = _interopRequireDefault(require("../FormComponents/SubmitButton"));

var _FormWrapper = _interopRequireDefault(require("../StyledComponents/FormWrapper"));

var _fa = require("react-icons/fa");

var _scrollToPoint = require("../../helpers/scrollToPoint");

var _ccValidation = require("../../helpers/cc-validation");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var d = new Date();
var curMonth = "0" + (d.getMonth() + 1);
var curYear = d.getFullYear();

var PaymentForm =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(PaymentForm, _Component);

  function PaymentForm() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, PaymentForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(PaymentForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.formRef = _react.default.createRef();
    _this.state = {
      fields: {
        ExpiresMonth: curMonth.slice(-2),
        ExpiresYear: curYear,
        ccNumber: "",
        cvnCode: ""
      },
      errors: {
        ExpiresMonth: null,
        ExpiresYear: null,
        ccNumber: null,
        cvnCode: null
      },
      ccChecked: null,
      submitting: false
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

    _this.getCardType = function (num) {
      var cardType, visible, Icon;

      switch (num) {
        case "001":
          cardType = "Visa";
          visible = cardType;

          Icon = function Icon() {
            return (0, _core.jsx)(_fa.FaCcVisa, null);
          };

          break;

        case "002":
          cardType = "MasterCard";
          visible = cardType;

          Icon = function Icon() {
            return (0, _core.jsx)(_fa.FaCcMastercard, null);
          };

          break;

        case "003":
          cardType = "AmericanExpress";
          visible = "American Express";

          Icon = function Icon() {
            return (0, _core.jsx)(_fa.FaCcAmex, null);
          };

          break;

        case "004":
          cardType = "Discover";
          visible = cardType;

          Icon = function Icon() {
            return (0, _core.jsx)(_fa.FaCcDiscover, null);
          };

          break;
      }

      return {
        cardType: cardType,
        visible: visible,
        Icon: Icon
      };
    };

    _this.getMainURL = function () {
      var retnURL = "";
      var mainurlStr = document.querySelector("input[name='mainURL']").value;

      if (mainurlStr != "" && mainurlStr != "undefined") {
        if (mainurlStr.indexOf("?") > 0) {
          retnURL = mainurlStr + "&error=gen";
        } else {
          retnURL = mainurlStr + "?error=gen";
        }
      }

      return retnURL;
    };

    _this.renderCCInput = function (num, checked) {
      num = "00" + num;

      var _this$getCardType = _this.getCardType(num),
          cardType = _this$getCardType.cardType,
          visible = _this$getCardType.visible,
          Icon = _this$getCardType.Icon;

      return (0, _core.jsx)(_CCButton.default, {
        key: "cc-btn-".concat(num),
        id: "".concat(cardType, "-group"),
        className: "radio-group"
      }, (0, _core.jsx)("input", {
        name: "creditcardoption",
        id: num,
        type: "radio",
        checked: num == checked ? true : false,
        onChange: _this.handleRadioClick,
        hidden: true
      }), (0, _core.jsx)("label", {
        htmlFor: num,
        "aria-label": visible,
        className: cardType
      }, (0, _core.jsx)(Icon, null)));
    };

    _this.renderCardInputs = function (checked) {
      var cardInputs = [1, 2, 3, 4].map(function (num) {
        return _this.renderCCInput(num, checked);
      });
      return (0, _core.jsx)(_FormRow.default, {
        className: "cc-type-container"
      }, cardInputs);
    };

    _this.renderProductSummary = function () {
      var items = (0, _toConsumableArray2.default)(_this.context.cart.items);
      var pledgeFound = items.findIndex(function (el) {
        return el && el.type == "donation";
      });
      var isMonthly = pledgeFound > -1 ? items[pledgeFound].monthly : false;
      var Monthlypledgeday = isMonthly ? _this.context.fields.Monthlypledgeday : 2;
      var ordinalDay;

      switch (Monthlypledgeday) {
        case 2:
          ordinalDay = "2nd";
          break;

        case 3:
          ordinalDay = "3rd";
          break;

        case 21:
          ordinalDay = "21st";
          break;

        default:
          ordinalDay = Monthlypledgeday + "th";
          break;
      }

      var PrimaryPledge = {};
      var donations = items.reduce(function (arr, _ref2, index) {
        var DetailName = _ref2.DetailName,
            DetailDescription = _ref2.DetailDescription,
            PledgeAmount = _ref2.PledgeAmount;

        if (index === pledgeFound) {
          PrimaryPledge.Description = DetailDescription;
          PrimaryPledge.PledgeAmount = PledgeAmount;
        } else {
          var quantity = 1;
          var parts = DetailName.split("|");

          if (parts.length > 1) {
            quantity = parts[1];
          }

          arr.push({
            quantity: quantity,
            DetailDescription: DetailDescription,
            PledgeAmount: PledgeAmount
          });
          return arr;
        }
      }, []);
      return (0, _core.jsx)(_ProductSummary.default, null, PrimaryPledge && (0, _core.jsx)(_react.Fragment, null, (0, _core.jsx)("div", {
        className: "flex-row"
      }, (0, _core.jsx)("div", null, PrimaryPledge.Description), (0, _core.jsx)("div", null, "$", PrimaryPledge.PledgeAmount)), isMonthly && (0, _core.jsx)("div", {
        className: "flex-row"
      }, "Your card will be charged automatically every month on the", " ", ordinalDay, " of each month.")), donations && donations.map(function (donation, idx) {
        (0, _core.jsx)("div", {
          className: "flex-row",
          key: "summary-item-".concat(idx)
        }, (0, _core.jsx)("div", null, donation.Description, " (", donation.quantity, ")"), (0, _core.jsx)("div", null, "$", donationa.PledgeAmount));
      }));
    };

    _this.assignValues = function (e) {
      e.preventDefault();
      if (_this.state.submitting) return; // ie. disallow multiple submissions

      _this.setState({
        submitting: true
      }, function () {
        var redirURL = _this.getMainURL();

        if (redirURL == "" || redirURL == "undefined") {
          redirURL = "https://www.cbn.com";
        } //set timeout if url does not respond in timely manner


        var timeout = setTimeout(function () {
          window.location.href = redirURL;
          return false;
        }, 15000);
        var _this$state$fields = _this.state.fields,
            ccNumber = _this$state$fields.ccNumber,
            ExpiresYear = _this$state$fields.ExpiresYear,
            ExpiresMonth = _this$state$fields.ExpiresMonth,
            cvnCode = _this$state$fields.cvnCode;
        var ccChecked = _this.state.ccChecked;
        var isValid = (0, _ccValidation.checkValues)(ccChecked, ccNumber, ExpiresMonth, ExpiresYear, cvnCode);

        if (isValid.passes) {
          var ccCardType = isValid.ccCardType,
              ccNum = isValid.ccNum,
              ccExpDate = isValid.ccExpDate,
              transactionType = isValid.transactionType,
              ccCvn = isValid.ccCvn;
          document.querySelector('input[name="card_type"]').value = ccCardType;
          document.querySelector('input[name="card_number"]').value = ccNum;
          document.querySelector('input[name="card_expiry_date"]').value = ccExpDate;
          document.querySelector('input[name="card_cvn"]').value = ccCvn;

          if (isValid.transactionType) {
            document.querySelector('input[name="transaction_type"]').value = transactionType;
            document.querySelector('input[name="signature"]').value = document.querySelector('input[name="signatureDis"]').value;
          } //cancel redirect


          clearTimeout(timeout); //store submission data in cookie

          var lifetime = 2 * 60 * 1000; // n minutes * 60 seconds * 1000 milliseconds

          _this.context.saveLS(lifetime, "store"); // bubble formaction


          document.forms.hiddenform.submit.type = "submit";
          return document.forms.hiddenform.submit.click();
        } else {
          // handle validation errors
          var validationErrors = isValid.errors;
          var errors = _this.state.errors;
          validationErrors.forEach(function (vErr) {
            return errors[vErr.type] = vErr.error;
          });

          _this.setState({
            errors: errors,
            submitting: false
          }); // cancel redirect


          return clearTimeout(timeout);
        }
      });
    };

    _this.handleRadioClick = function (e) {
      _this.setState({
        ccChecked: e.target.id
      });
    };

    _this.handleInputChange = function (e) {
      var target = e.target;
      var value = target.type === "checkbox" ? target.checked : target.value;
      var name = target.name;
      var errors = (0, _objectSpread2.default)({}, _this.state.errors);
      var response = (0, _ccValidation.validateInput)(name, value);
      errors[name] = response.error;
      var fields = (0, _objectSpread2.default)({}, _this.state.fields);
      fields[name] = value;
      var ccChecked = _this.state.ccChecked;

      if (response.ccChecked) {
        ccChecked = response.ccChecked;
      }

      _this.setState({
        fields: fields,
        errors: errors,
        ccChecked: ccChecked
      });
    };

    _this.handleGoBackClick = function (e) {
      e.preventDefault();

      _this.context.goBack({
        type: "GO_BACK"
      });
    };

    return _this;
  }

  (0, _createClass2.default)(PaymentForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var lifetime = 60 * 1000; // 60 seconds * 1000 milliseconds

      this.context.saveLS(lifetime, "store");
      window.addEventListener("message", this.handleMessage, false);

      try {
        this.context.getGlobals();
      } catch (err) {
        console.error({
          err: err
        });
      }
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate() {
      var form = this.formRef.current;
      var _this$context = this.context,
          submitted = _this$context.submitted,
          confirmed = _this$context.confirmed;

      if (!form && submitted && !confirmed) {
        return true;
      }

      return null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (!!snapshot) {
        var target = this.formRef.current;
        var top = (0, _scrollToPoint.offsetTop)(target);
        (0, _scrollToPoint.scrollToPoint)(top);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("message", this.handleMessage);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context2 = this.context,
          submitted = _this$context2.submitted,
          confirmationData = _this$context2.confirmationData,
          formAction = _this$context2.formAction,
          confirmed = _this$context2.confirmed;
      var _this$state = this.state,
          fields = _this$state.fields,
          errors = _this$state.errors,
          submitting = _this$state.submitting,
          ccChecked = _this$state.ccChecked;
      var formInputs = [],
          dataInputs = [],
          years = [],
          months = [];
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
      years.push((0, _core.jsx)("option", {
        key: "exp-year-base-0",
        value: "",
        disabled: "disabled"
      }, "Year* \u25BF"));

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
      }, "Month* \u25BF"));

      for (var m = 1; m < 13; m++) {
        var val = ("0" + m).slice(-2);
        months.push((0, _core.jsx)("option", {
          key: "month-option-" + val,
          value: val
        }, val));
      }

      var hasErrors = Object.values(errors).filter(function (val) {
        return val && val.length > 0;
      }).length > 0;
      return submitted && !confirmed ? (0, _core.jsx)(_FormWrapper.default, {
        style: {
          maxWidth: "818px",
          margin: "0 auto"
        }
      }, (0, _core.jsx)(_FormPanel.default, {
        ref: this.formRef
      }, (0, _core.jsx)("form", {
        id: "react-cc-form",
        onSubmit: this.assignValues
      }, (0, _core.jsx)("div", {
        className: "mboxDefault"
      }, (0, _core.jsx)(_FormHeader.default, {
        className: "form-header__payment"
      }, "Almost Done!"), (0, _core.jsx)(_FormLine.default, null), (0, _core.jsx)(_FormHeader.default, {
        className: "form-header--small"
      }, "Enter Payment Information and click ", (0, _core.jsx)("br", null), "\"", (0, _core.jsx)("strong", null, "Finish Donation"), "\" below.")), (0, _core.jsx)(_FormRow.default, null, (0, _core.jsx)(_FormLine.default, null)), (0, _core.jsx)(_FieldSet.default, null, (0, _core.jsx)("legend", null, "Credit Card Information"), (0, _core.jsx)("div", {
        className: "form-subheader"
      }, "Card Type*"), (0, _core.jsx)(_FieldSet.default, null, (0, _core.jsx)("legend", null, "Select Credit Card Type"), this.renderCardInputs(ccChecked)), (0, _core.jsx)(_FormRow.default, null, (0, _core.jsx)(_FormLine.default, null)), (0, _core.jsx)("div", {
        className: "form-subheader"
      }, "Card Info*"), (0, _core.jsx)(_FormRow.default, {
        className: "cc-num-row"
      }, (0, _core.jsx)(_InputGroup.default, {
        specialStyle: "form-group--ccNumber",
        type: "text",
        id: "ccNumber",
        label: "Number",
        required: true,
        maxLength: 16,
        placeholder: "#### #### #### #### ####",
        value: fields.ccNumber,
        handleInputChange: this.handleInputChange,
        error: errors.ccNumber,
        validation: "\\d*"
      })), (0, _core.jsx)(_FormRow.default, {
        className: "cc-exp-row"
      }, (0, _core.jsx)(_SelectGroup.default, {
        id: "ExpiresMonth",
        specialStyle: "form-group--expMonth",
        label: "Month",
        required: true,
        value: fields.ExpiresMonth,
        error: errors.ExpiresMonth,
        options: months,
        handleInputChange: this.handleInputChange
      }), (0, _core.jsx)(_SelectGroup.default, {
        id: "ExpiresYear",
        specialStyle: "form-group--expYear",
        label: "Year",
        required: true,
        value: fields.ExpiresYear,
        error: errors.ExpiresYear,
        options: years,
        handleInputChange: this.handleInputChange
      })), (0, _core.jsx)(_FormRow.default, {
        className: "cc-cvn-row"
      }, (0, _core.jsx)(_InputGroup.default, {
        specialStyle: "form-group--cvnCode",
        type: "text",
        id: "cvnCode",
        label: "CVV Code",
        required: true,
        maxLength: 4,
        placeholder: "cvv",
        value: fields.cvnCode,
        handleInputChange: this.handleInputChange,
        error: errors.cvnCode,
        validation: "\\d*"
      }), (0, _core.jsx)("div", {
        className: "cvn-code-info"
      }, (0, _core.jsx)("a", {
        href: "https://www.cbn.com/CVVNumber/CVV.html",
        target: "_blank"
      }, "What is my ", (0, _core.jsx)("span", {
        style: {
          letterSpacing: "1px"
        }
      }, "CVV"), " Code?")))), (0, _core.jsx)(_FormRow.default, null, (0, _core.jsx)(_FormLine.default, null)), this.renderProductSummary(), (0, _core.jsx)(_FormRow.default, null, (0, _core.jsx)(_FormLine.default, null)), (0, _core.jsx)(_FieldSet.default, null, (0, _core.jsx)("legend", null, "Form Submit Block"), (0, _core.jsx)(_SubmitButton.default, {
        hasErrors: hasErrors,
        handleSubmit: this.assignValues,
        submitting: submitting,
        value: "Finish Donation"
      })), (0, _core.jsx)(_FormRow.default, {
        className: "go-back-row"
      }, (0, _core.jsx)("span", null, "Click the \u201CFinish Donation\u201D button above or"), (0, _core.jsx)("span", null, (0, _core.jsx)("a", {
        onClick: this.handleGoBackClick
      }, "go back"), " to the previous page to make changes."))), (0, _core.jsx)(_HiddenForm.default, {
        id: "hiddenform",
        className: "hidden-form",
        action: formAction,
        method: "POST",
        target: "paymentprocess"
      }, formInputs), dataInputs, (0, _core.jsx)("iframe", {
        className: "hidden",
        name: "paymentprocess",
        width: "0",
        height: "0",
        style: {
          visibility: "none",
          border: "none"
        }
      }))) : null;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return PaymentForm;
}(_react.Component);

PaymentForm.contextType = _GivingFormProvider.GivingFormContext;
var _default = PaymentForm;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(d, "d", "/Users/wehand/Code/react-form-drupal/src/Components/Forms/PaymentForm.js");
  reactHotLoader.register(curMonth, "curMonth", "/Users/wehand/Code/react-form-drupal/src/Components/Forms/PaymentForm.js");
  reactHotLoader.register(curYear, "curYear", "/Users/wehand/Code/react-form-drupal/src/Components/Forms/PaymentForm.js");
  reactHotLoader.register(PaymentForm, "PaymentForm", "/Users/wehand/Code/react-form-drupal/src/Components/Forms/PaymentForm.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/Forms/PaymentForm.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@babel/runtime/helpers/objectSpread":"node_modules/@babel/runtime/helpers/objectSpread.js","@babel/runtime/helpers/toConsumableArray":"node_modules/@babel/runtime/helpers/toConsumableArray.js","@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/inherits":"node_modules/@babel/runtime/helpers/inherits.js","@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","../Contexts/GivingFormProvider":"src/Components/Contexts/GivingFormProvider.js","../FormComponents/StyledComponents/FieldSet":"src/Components/FormComponents/StyledComponents/FieldSet.js","../FormComponents/StyledComponents/FormRow":"src/Components/FormComponents/StyledComponents/FormRow.js","../FormComponents/StyledComponents/FormPanel":"src/Components/FormComponents/StyledComponents/FormPanel.js","../FormComponents/StyledComponents/FormLine":"src/Components/FormComponents/StyledComponents/FormLine.js","../FormComponents/StyledComponents/FormHeader":"src/Components/FormComponents/StyledComponents/FormHeader.js","../FormComponents/StyledComponents/ProductSummary":"src/Components/FormComponents/StyledComponents/ProductSummary.js","../FormComponents/StyledComponents/CCButton":"src/Components/FormComponents/StyledComponents/CCButton.js","../FormComponents/StyledComponents/HiddenForm":"src/Components/FormComponents/StyledComponents/HiddenForm.js","../FormComponents/InputGroup":"src/Components/FormComponents/InputGroup.js","../FormComponents/SelectGroup":"src/Components/FormComponents/SelectGroup.js","../FormComponents/SubmitButton":"src/Components/FormComponents/SubmitButton.js","../StyledComponents/FormWrapper":"src/Components/StyledComponents/FormWrapper.js","react-icons/fa":"node_modules/react-icons/fa/index.esm.js","../../helpers/scrollToPoint":"src/helpers/scrollToPoint.js","../../helpers/cc-validation":"src/helpers/cc-validation.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/PaymentForm.d4fb0b2e.js.map