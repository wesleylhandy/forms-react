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
})({"src/Components/FormComponents/Animations/askarray.css":[function(require,module,exports) {
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/FormComponents/StyledComponents/ClubTabGroup.js":[function(require,module,exports) {
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

var ClubTabGroup = (0, _styledBase.default)("div", {
  target: "e768zmz0",
  label: "ClubTabGroup"
})("development" === "production" ? {
  name: "17da292",
  styles: "&.tab-group{box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;height:50px;line-height:50px;flex:1 1 50%;max-width:360px;}input[type=\"checkbox\"].tab-group__input{position:absolute !important;left:-10000px !important;top:auto !important;bottom:auto !important;width:1px !important;height:1px !important;overflow:hidden !important;}input[type=\"checkbox\"].tab-group__input + label{display:block;height:50px;line-height:50px !important;cursor:pointer;width:100%;text-align:center;background:#fff;border-radius:4px;border:2px solid #009bdf;margin-bottom:0;color:#009bdf;transition:color 200ms ease-in-out,background-color 200ms ease-in-out,border-color 200ms ease-in-out;position:relative;}input[type=\"checkbox\"].tab-group__input:checked + label,input[type=\"checkbox\"].tab-group__input + label:hover{color:#fff;background-color:#009bdf;border-color:#009bdf;}input[type=\"checkbox\"].tab-group__input:checked + label::after{content:\"\";display:block;border-top:10px solid #009bdf;border-left:15px solid transparent;border-right:15px solid transparent;position:absolute;left:50%;transform:translateX(-50%);}"
} : {
  name: "17da292",
  styles: "&.tab-group{box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;height:50px;line-height:50px;flex:1 1 50%;max-width:360px;}input[type=\"checkbox\"].tab-group__input{position:absolute !important;left:-10000px !important;top:auto !important;bottom:auto !important;width:1px !important;height:1px !important;overflow:hidden !important;}input[type=\"checkbox\"].tab-group__input + label{display:block;height:50px;line-height:50px !important;cursor:pointer;width:100%;text-align:center;background:#fff;border-radius:4px;border:2px solid #009bdf;margin-bottom:0;color:#009bdf;transition:color 200ms ease-in-out,background-color 200ms ease-in-out,border-color 200ms ease-in-out;position:relative;}input[type=\"checkbox\"].tab-group__input:checked + label,input[type=\"checkbox\"].tab-group__input + label:hover{color:#fff;background-color:#009bdf;border-color:#009bdf;}input[type=\"checkbox\"].tab-group__input:checked + label::after{content:\"\";display:block;border-top:10px solid #009bdf;border-left:15px solid transparent;border-right:15px solid transparent;position:absolute;left:50%;transform:translateX(-50%);}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsdWJUYWJHcm91cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHK0IiLCJmaWxlIjoiQ2x1YlRhYkdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IENsdWJUYWJHcm91cCA9IHN0eWxlZC5kaXZgXG5cdCYudGFiLWdyb3VwIHtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGhlaWdodDogNTBweDtcblx0XHRsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgZmxleDogMSAxIDUwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzNjBweDtcblx0fVxuXHRpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0udGFiLWdyb3VwX19pbnB1dCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cdFx0bGVmdDogLTEwMDAwcHggIWltcG9ydGFudDtcblx0XHR0b3A6IGF1dG8gIWltcG9ydGFudDtcblx0XHRib3R0b206IGF1dG8gIWltcG9ydGFudDtcblx0XHR3aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG5cdFx0aGVpZ2h0OiAxcHggIWltcG9ydGFudDtcblx0XHRvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG5cdH1cblx0aW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLnRhYi1ncm91cF9faW5wdXQgKyBsYWJlbCB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRib3JkZXI6IDJweCBzb2xpZCAjMDA5YmRmO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0Y29sb3I6ICMwMDliZGY7XG5cdFx0dHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICBib3JkZXItY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0fVxuXHRpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0udGFiLWdyb3VwX19pbnB1dDpjaGVja2VkICsgbGFiZWwsXG5cdGlucHV0W3R5cGU9XCJjaGVja2JveFwiXS50YWItZ3JvdXBfX2lucHV0ICsgbGFiZWw6aG92ZXIge1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDliZGY7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjMDA5YmRmO1xuICAgIH1cbiAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0udGFiLWdyb3VwX19pbnB1dDpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzAwOWJkZjtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDbHViVGFiR3JvdXA7XG4iXX0= */"
});
var _default = ClubTabGroup;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ClubTabGroup, "ClubTabGroup", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/ClubTabGroup.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/ClubTabGroup.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js"}],"src/Components/FormComponents/ClubTab.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _ClubTabGroup = _interopRequireDefault(require("./StyledComponents/ClubTabGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function ClubTab(_ref) {
  var id = _ref.id,
      name = _ref.name,
      checked = _ref.checked,
      handleTabClick = _ref.handleTabClick,
      label = _ref.label;
  return (0, _core.jsx)(_ClubTabGroup.default, {
    id: "".concat(id, "-group"),
    className: "tab-group"
  }, (0, _core.jsx)("input", {
    className: "tab-group__input",
    name: name,
    id: "".concat(id, "gift"),
    type: "checkbox",
    checked: checked,
    onChange: handleTabClick
  }), (0, _core.jsx)("label", {
    htmlFor: "".concat(id, "gift")
  }, label));
}

var _default = ClubTab;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ClubTab, "ClubTab", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/ClubTab.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/ClubTab.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","./StyledComponents/ClubTabGroup":"src/Components/FormComponents/StyledComponents/ClubTabGroup.js"}],"src/Components/FormComponents/Blocks/MonthlyClubTabBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _ClubTab = _interopRequireDefault(require("../ClubTab"));

var _Divider = _interopRequireDefault(require("../StyledComponents/Divider"));

var _FieldSet = _interopRequireDefault(require("../StyledComponents/FieldSet"));

var _FormRow = _interopRequireDefault(require("../StyledComponents/FormRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function MonthlyTabGroup(_ref) {
  var monthlyChecked = _ref.monthlyChecked,
      handleTabClick = _ref.handleTabClick;
  var monthly = monthlyChecked;
  var single = !monthlyChecked;
  return (0, _core.jsx)(_FieldSet.default, {
    className: "monthly-giving-info"
  }, (0, _core.jsx)("legend", null, "Select Monthly or One-Time Gift"), (0, _core.jsx)(_FormRow.default, {
    className: "monthly-tab"
  }, (0, _core.jsx)(_ClubTab.default, {
    id: "monthly",
    name: "monthly-toggle",
    label: "Monthly Partnership",
    checked: monthly,
    handleTabClick: handleTabClick
  }), (0, _core.jsx)(_Divider.default, {
    color: "transparent"
  }), (0, _core.jsx)(_ClubTab.default, {
    id: "single",
    name: "monthly-toggle",
    label: "Single Gift",
    checked: single,
    handleTabClick: handleTabClick
  })));
}

var _default = MonthlyTabGroup;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MonthlyTabGroup, "MonthlyTabGroup", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/MonthlyClubTabBlock.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/MonthlyClubTabBlock.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","../ClubTab":"src/Components/FormComponents/ClubTab.js","../StyledComponents/Divider":"src/Components/FormComponents/StyledComponents/Divider.js","../StyledComponents/FieldSet":"src/Components/FormComponents/StyledComponents/FieldSet.js","../StyledComponents/FormRow":"src/Components/FormComponents/StyledComponents/FormRow.js"}],"src/Components/FormComponents/StyledComponents/ClubAskArray.js":[function(require,module,exports) {
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

var ClubAskArray = (0, _styledBase.default)("div", {
  target: "e3cu5ei0",
  label: "ClubAskArray"
})("development" === "production" ? {
  name: "986a5v",
  styles: "display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;&.askarray{position:relative;box-sizing:border-box;height:auto;width:100%;max-width:400px;margin:20px auto;margin-bottom:0;}&.askarray__tabs,&.askarray--club{position:relative;box-sizing:border-box;height:auto;width:calc(100% + 5px);margin:-2.5px;border-bottom:5px solid transparent;flex-wrap:nowrap;}&.askarray--club{margin:30px 0;flex-wrap:nowrap;justify-content:space-between;}"
} : {
  name: "986a5v",
  styles: "display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;&.askarray{position:relative;box-sizing:border-box;height:auto;width:100%;max-width:400px;margin:20px auto;margin-bottom:0;}&.askarray__tabs,&.askarray--club{position:relative;box-sizing:border-box;height:auto;width:calc(100% + 5px);margin:-2.5px;border-bottom:5px solid transparent;flex-wrap:nowrap;}&.askarray--club{margin:30px 0;flex-wrap:nowrap;justify-content:space-between;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsdWJBc2tBcnJheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHK0IiLCJmaWxlIjoiQ2x1YkFza0FycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IENsdWJBc2tBcnJheSA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdCYuYXNrYXJyYXkge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGhlaWdodDogYXV0bztcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdG1hcmdpbjogMjBweCBhdXRvO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cblx0Ji5hc2thcnJheV9fdGFicywgJi5hc2thcnJheS0tY2x1YiB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgKyA1cHgpO1xuXHRcdG1hcmdpbjogLTIuNXB4O1xuXHRcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0fVxuXHQmLmFza2FycmF5LS1jbHViIHtcblx0XHRtYXJnaW46IDMwcHggMDtcblx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENsdWJBc2tBcnJheTtcbiJdfQ== */"
});
var _default = ClubAskArray;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ClubAskArray, "ClubAskArray", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/ClubAskArray.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/ClubAskArray.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js"}],"src/Components/FormComponents/StyledComponents/ClubAskArrayBtn.js":[function(require,module,exports) {
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

var ClubAskArrayBtn = (0, _styledBase.default)("div", {
  target: "e11xy15m0",
  label: "ClubAskArrayBtn"
})("development" === "production" ? {
  name: "1eugypn",
  styles: "display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;&.askbutton{box-sizing:border-box;height:65px;width:calc(100% / 3);}&.askbutton__tabs{height:80px;box-sizing:border-box;flex:1;flex-basis:calc((100% / 3) - 10px);margin:2.5px;}&.askbutton--club{box-sizing:border-box;flex:0 0 calc(19px * 4.55);;margin:0 2.5px;}div{display:flex;flex-direction:row;justify-content:center;align-items:center;}div.askbutton__amt{flex:0 0 auto;background-color:#fff;border-radius:4px;border:2px solid #009bdf;box-sizing:border-box;color:#009bdf;cursor:pointer;-webkit-flex-basis:calc(19px * 4.55);-ms-flex-preferred-size:calc(19px * 4.55);flex-basis:calc(19px * 4.55);font-weight:600;font-size:calc(19px * 1.4);height:calc(19px * 2.5);text-align:center;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;}div.askbutton__amt--tabs{background-color:#fff;border:1px solid #333;border-radius:4px;box-sizing:border-box;color:#333;cursor:pointer;width:100%;font-weight:600;font-size:calc(19px * 1.4);height:80px;text-align:center;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;}&:focus div:not(.club-level),&:hover div:not(.club-level),&:active div:not(.club-level),div:not(.club-level):hover,div:not(.club-level):focus,div:not(.club-level):active,&.selected div:not(.club-level){background-color:#009bdf;color:#fff;border-color:#009bdf;}div.club-level{position:absolute;font-weight:bold;font-size:14px;color:#DDB007;text-align:center;width:110%;left:50%;top:100%;transform:translateX(-50%);}"
} : {
  name: "1eugypn",
  styles: "display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;&.askbutton{box-sizing:border-box;height:65px;width:calc(100% / 3);}&.askbutton__tabs{height:80px;box-sizing:border-box;flex:1;flex-basis:calc((100% / 3) - 10px);margin:2.5px;}&.askbutton--club{box-sizing:border-box;flex:0 0 calc(19px * 4.55);;margin:0 2.5px;}div{display:flex;flex-direction:row;justify-content:center;align-items:center;}div.askbutton__amt{flex:0 0 auto;background-color:#fff;border-radius:4px;border:2px solid #009bdf;box-sizing:border-box;color:#009bdf;cursor:pointer;-webkit-flex-basis:calc(19px * 4.55);-ms-flex-preferred-size:calc(19px * 4.55);flex-basis:calc(19px * 4.55);font-weight:600;font-size:calc(19px * 1.4);height:calc(19px * 2.5);text-align:center;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;}div.askbutton__amt--tabs{background-color:#fff;border:1px solid #333;border-radius:4px;box-sizing:border-box;color:#333;cursor:pointer;width:100%;font-weight:600;font-size:calc(19px * 1.4);height:80px;text-align:center;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;}&:focus div:not(.club-level),&:hover div:not(.club-level),&:active div:not(.club-level),div:not(.club-level):hover,div:not(.club-level):focus,div:not(.club-level):active,&.selected div:not(.club-level){background-color:#009bdf;color:#fff;border-color:#009bdf;}div.club-level{position:absolute;font-weight:bold;font-size:14px;color:#DDB007;text-align:center;width:110%;left:50%;top:100%;transform:translateX(-50%);}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsdWJBc2tBcnJheUJ0bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHa0MiLCJmaWxlIjoiQ2x1YkFza0FycmF5QnRuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IENsdWJBc2tBcnJheUJ0biA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCYuYXNrYnV0dG9uIHtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGhlaWdodDogNjVweDtcblx0XHR3aWR0aDogY2FsYygxMDAlIC8gMyk7XG5cdH1cblx0Ji5hc2tidXR0b25fX3RhYnMge1xuXHRcdGhlaWdodDogODBweDtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGZsZXg6IDE7XG5cdFx0ZmxleC1iYXNpczogY2FsYygoMTAwJSAvIDMpIC0gMTBweCk7XG5cdFx0bWFyZ2luOiAyLjVweDtcbiAgICB9XG4gICAgJi5hc2tidXR0b24tLWNsdWIge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBmbGV4OiAwIDAgY2FsYygxOXB4ICogNC41NSk7O1xuICAgICAgICBtYXJnaW46IDAgMi41cHg7XG4gICAgfVxuXHRkaXYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdGRpdi5hc2tidXR0b25fX2FtdCB7XG5cdFx0ZmxleDogMCAwIGF1dG87XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0Ym9yZGVyOiAycHggc29saWQgIzAwOWJkZjtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGNvbG9yOiAjMDA5YmRmO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHQtd2Via2l0LWZsZXgtYmFzaXM6IGNhbGMoMTlweCAqIDQuNTUpO1xuXHRcdC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiBjYWxjKDE5cHggKiA0LjU1KTtcblx0XHRmbGV4LWJhc2lzOiBjYWxjKDE5cHggKiA0LjU1KTtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGZvbnQtc2l6ZTogY2FsYygxOXB4ICogMS40KTtcblx0XHRoZWlnaHQ6IGNhbGMoMTlweCAqIDIuNSk7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LCBjb2xvciAyMDBtcyBlYXNlLWluLW91dCxcblx0XHRcdGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG5cdFx0dHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LCBjb2xvciAyMDBtcyBlYXNlLWluLW91dCxcblx0XHRcdGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG5cdH1cblx0ZGl2LmFza2J1dHRvbl9fYW10LS10YWJzIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0Y29sb3I6ICMzMzM7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0Zm9udC1zaXplOiBjYWxjKDE5cHggKiAxLjQpO1xuXHRcdGhlaWdodDogODBweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0dHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LCBjb2xvciAyMDBtcyBlYXNlLWluLW91dCxcblx0XHRcdGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG5cdH1cblx0Jjpmb2N1cyBkaXY6bm90KC5jbHViLWxldmVsKSxcblx0Jjpob3ZlciBkaXY6bm90KC5jbHViLWxldmVsKSxcblx0JjphY3RpdmUgZGl2Om5vdCguY2x1Yi1sZXZlbCksXG5cdGRpdjpub3QoLmNsdWItbGV2ZWwpOmhvdmVyLFxuXHRkaXY6bm90KC5jbHViLWxldmVsKTpmb2N1cyxcblx0ZGl2Om5vdCguY2x1Yi1sZXZlbCk6YWN0aXZlLFxuXHQmLnNlbGVjdGVkIGRpdjpub3QoLmNsdWItbGV2ZWwpIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmRmO1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGJvcmRlci1jb2xvcjogIzAwOWJkZjtcblx0fVxuXHRkaXYuY2x1Yi1sZXZlbCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXHRcdGNvbG9yOiAjRERCMDA3O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR3aWR0aDogMTEwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0fVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2x1YkFza0FycmF5QnRuO1xuIl19 */"
});
var _default = ClubAskArrayBtn;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ClubAskArrayBtn, "ClubAskArrayBtn", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/ClubAskArrayBtn.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/ClubAskArrayBtn.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js"}],"src/Components/FormComponents/StyledComponents/ClubOtherGiftAmountGroup.js":[function(require,module,exports) {
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

var ClubOtherGiftAmountGroup = (0, _styledBase.default)("div", {
  target: "epin2e0",
  label: "ClubOtherGiftAmountGroup"
})("development" === "production" ? {
  name: "e5mjm1",
  styles: "display:flex;flex-direction:row;justify-content:center;line-height:unset;&.askarray--other{position:relative;box-sizing:border-box;flex:0 0 150px;margin:0 2.5px;}div{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;line-height:unset;margin-bottom:0;position:relative;white-space:nowrap;width:100%;label{font-size:calc(19px * 0.7);font-weight:600;color:#009bdf;box-sizing:border-box;position:absolute;left:50%;top:100%;transform:translateX(-50%);}}div.askarray__form-group--other{justify-content:center;max-width:400px;input{position:relative;appearance:none;background:none;background-color:#f0f0f0;height:calc(19px * 2.5);width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:2px solid #009bdf;border-radius:4px;box-sizing:border-box;color:#009bdf;font-size:calc(19px * 1.4);text-align:center;font-weight:600;max-width:220px;white-space:nowrap;}input:hover,input:active,input:focus{border:2px solid #009bdf;background-color:#fff;box-sizing:border-box;outline:none;}&.selected input{background:#009bdf;color:#fff;}div.other-amt-error{box-sizing:border-box;position:absolute;color:crimson;width:auto;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:auto;top:19px;left:50%;transform:translateX(-50%);}}div.askarray__form-group--tabs{justify-content:space-between;label{position:relative;left:auto !important;top:auto !important;transform:none !important;font-size:19px;color:#009bdf;line-height:80px !important;margin-bottom:0;}div.askarray__form-group-tabs-flex-container{display:flex;position:relative;flex-direction:row;justify-content:center;align-items:center;div.form-group-tabs--dollar{box-sizing:border-box;color:#009bdf;margin:0 5px;font-weight:600;font-size:19px;}input{position:relative;appearance:none;height:calc(19px * 2.5);width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:1px solid #009bdf;border-radius:4px;box-sizing:border-box;color:#009bdf;font-size:calc(19px * 1.4);text-align:center;font-weight:600;max-width:220px;white-space:nowrap;}input:hover,input:active,input:focus{border:1px solid #009bdf;background-color:#fff;box-sizing:border-box;outline:none;}div.other-amt-error{box-sizing:border-box;position:absolute;color:crimson;width:auto;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:auto;top:100%;left:50%;transform:translateX(-50%);}}@media screen and (max-width:450px){label{font-size:15px;}div input{max-width:160px;}}}div.selected{}"
} : {
  name: "e5mjm1",
  styles: "display:flex;flex-direction:row;justify-content:center;line-height:unset;&.askarray--other{position:relative;box-sizing:border-box;flex:0 0 150px;margin:0 2.5px;}div{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;line-height:unset;margin-bottom:0;position:relative;white-space:nowrap;width:100%;label{font-size:calc(19px * 0.7);font-weight:600;color:#009bdf;box-sizing:border-box;position:absolute;left:50%;top:100%;transform:translateX(-50%);}}div.askarray__form-group--other{justify-content:center;max-width:400px;input{position:relative;appearance:none;background:none;background-color:#f0f0f0;height:calc(19px * 2.5);width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:2px solid #009bdf;border-radius:4px;box-sizing:border-box;color:#009bdf;font-size:calc(19px * 1.4);text-align:center;font-weight:600;max-width:220px;white-space:nowrap;}input:hover,input:active,input:focus{border:2px solid #009bdf;background-color:#fff;box-sizing:border-box;outline:none;}&.selected input{background:#009bdf;color:#fff;}div.other-amt-error{box-sizing:border-box;position:absolute;color:crimson;width:auto;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:auto;top:19px;left:50%;transform:translateX(-50%);}}div.askarray__form-group--tabs{justify-content:space-between;label{position:relative;left:auto !important;top:auto !important;transform:none !important;font-size:19px;color:#009bdf;line-height:80px !important;margin-bottom:0;}div.askarray__form-group-tabs-flex-container{display:flex;position:relative;flex-direction:row;justify-content:center;align-items:center;div.form-group-tabs--dollar{box-sizing:border-box;color:#009bdf;margin:0 5px;font-weight:600;font-size:19px;}input{position:relative;appearance:none;height:calc(19px * 2.5);width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:1px solid #009bdf;border-radius:4px;box-sizing:border-box;color:#009bdf;font-size:calc(19px * 1.4);text-align:center;font-weight:600;max-width:220px;white-space:nowrap;}input:hover,input:active,input:focus{border:1px solid #009bdf;background-color:#fff;box-sizing:border-box;outline:none;}div.other-amt-error{box-sizing:border-box;position:absolute;color:crimson;width:auto;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:auto;top:100%;left:50%;transform:translateX(-50%);}}@media screen and (max-width:450px){label{font-size:15px;}div input{max-width:160px;}}}div.selected{}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsdWJPdGhlckdpZnRBbW91bnRHcm91cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHMkMiLCJmaWxlIjoiQ2x1Yk90aGVyR2lmdEFtb3VudEdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IENsdWJPdGhlckdpZnRBbW91bnRHcm91cCA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRsaW5lLWhlaWdodDogdW5zZXQ7XG5cdCYuYXNrYXJyYXktLW90aGVyIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRmbGV4OiAwIDAgMTUwcHg7XG5cdFx0bWFyZ2luOiAwIDIuNXB4O1xuXHR9XG5cdGRpdiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRsaW5lLWhlaWdodDogdW5zZXQ7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRsYWJlbCB7XG5cdFx0XHRmb250LXNpemU6IGNhbGMoMTlweCAqIDAuNyk7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0Y29sb3I6ICMwMDliZGY7XG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0dG9wOiAxMDAlO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXHRcdH1cblx0fVxuXHRkaXYuYXNrYXJyYXlfX2Zvcm0tZ3JvdXAtLW90aGVyIHtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdGlucHV0IHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGFwcGVhcmFuY2U6IG5vbmU7XG5cdFx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcblx0XHRcdGhlaWdodDogY2FsYygxOXB4ICogMi41KTtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsXG5cdFx0XHRcdGNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0O1xuXHRcdFx0dHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LCBjb2xvciAyMDBtcyBlYXNlLWluLW91dCxcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlLWluLW91dDtcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICMwMDliZGY7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0Y29sb3I6ICMwMDliZGY7XG5cdFx0XHRmb250LXNpemU6IGNhbGMoMTlweCAqIDEuNCk7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0bWF4LXdpZHRoOiAyMjBweDtcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0fVxuXHRcdGlucHV0OmhvdmVyLFxuXHRcdGlucHV0OmFjdGl2ZSxcblx0XHRpbnB1dDpmb2N1cyB7XG5cdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjMDA5YmRmO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgICYuc2VsZWN0ZWQgaW5wdXQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwOWJkZjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG5cdFx0ZGl2Lm90aGVyLWFtdC1lcnJvciB7XG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0Y29sb3I6IGNyaW1zb247XG5cdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdGZvbnQtd2VpZ2h0OiA4MDA7XG5cdFx0XHRmb250LXNpemU6IGNhbGMoMTlweCAqIDAuNSk7XG5cdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRib3R0b206IGF1dG87XG5cdFx0XHR0b3A6IDE5cHg7XG5cdFx0XHRsZWZ0OiA1MCU7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cdFx0fVxuXHR9XG5cdGRpdi5hc2thcnJheV9fZm9ybS1ncm91cC0tdGFicyB7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdGxhYmVsIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcblx0XHRcdHRvcDogYXV0byAhaW1wb3J0YW50O1xuXHRcdFx0dHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG5cdFx0XHRmb250LXNpemU6IDE5cHg7XG5cdFx0XHRjb2xvcjogIzAwOWJkZjtcblx0XHRcdGxpbmUtaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHRcdH1cblx0XHRkaXYuYXNrYXJyYXlfX2Zvcm0tZ3JvdXAtdGFicy1mbGV4LWNvbnRhaW5lciB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGRpdi5mb3JtLWdyb3VwLXRhYnMtLWRvbGxhciB7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdGNvbG9yOiAjMDA5YmRmO1xuXHRcdFx0XHRtYXJnaW46IDAgNXB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRmb250LXNpemU6IDE5cHg7XG5cdFx0XHR9XG5cdFx0XHRpbnB1dCB7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0YXBwZWFyYW5jZTogbm9uZTtcblx0XHRcdFx0aGVpZ2h0OiBjYWxjKDE5cHggKiAyLjUpO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsXG5cdFx0XHRcdFx0Y29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAyMDBtcyBlYXNlLWluLW91dCwgY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlLWluLW91dDtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIzAwOWJkZjtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRjb2xvcjogIzAwOWJkZjtcblx0XHRcdFx0Zm9udC1zaXplOiBjYWxjKDE5cHggKiAxLjQpO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdG1heC13aWR0aDogMjIwcHg7XG5cdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHR9XG5cdFx0XHRpbnB1dDpob3Zlcixcblx0XHRcdGlucHV0OmFjdGl2ZSxcblx0XHRcdGlucHV0OmZvY3VzIHtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIzAwOWJkZjtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHRcdH1cblx0XHRcdGRpdi5vdGhlci1hbXQtZXJyb3Ige1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGNvbG9yOiBjcmltc29uO1xuXHRcdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDgwMDtcblx0XHRcdFx0Zm9udC1zaXplOiBjYWxjKDE5cHggKiAwLjUpO1xuXHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRcdGJvdHRvbTogYXV0bztcblx0XHRcdFx0dG9wOiAxMDAlO1xuXHRcdFx0XHRsZWZ0OiA1MCU7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcblx0XHRcdGxhYmVsIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0fVxuXHRcdFx0ZGl2IGlucHV0IHtcblx0XHRcdFx0bWF4LXdpZHRoOiAxNjBweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZGl2LnNlbGVjdGVkIHtcblx0fVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2x1Yk90aGVyR2lmdEFtb3VudEdyb3VwO1xuIl19 */"
});
var _default = ClubOtherGiftAmountGroup;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ClubOtherGiftAmountGroup, "ClubOtherGiftAmountGroup", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/ClubOtherGiftAmountGroup.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/ClubOtherGiftAmountGroup.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js"}],"src/Components/FormComponents/Layouts/ClubLayout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _reactTransitionGroup = require("react-transition-group");

require("../Animations/askarray.css");

var _GivingFormProvider = require("../../Contexts/GivingFormProvider");

var _MonthlyClubTabBlock = _interopRequireDefault(require("../Blocks/MonthlyClubTabBlock"));

var _FieldSet = _interopRequireDefault(require("../StyledComponents/FieldSet"));

var _ClubAskArray = _interopRequireDefault(require("../StyledComponents/ClubAskArray"));

var _ClubAskArrayBtn = _interopRequireDefault(require("../StyledComponents/ClubAskArrayBtn"));

var _ClubOtherGiftAmountGroup = _interopRequireDefault(require("../StyledComponents/ClubOtherGiftAmountGroup"));

var _AmountError = _interopRequireDefault(require("../StyledComponents/AmountError"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function getIndex(arr, amount) {
  return arr.findIndex(function (amt) {
    return +amt == +amount;
  });
}

var partnerLevels = {
  "20": "700 Club",
  "40": "700 Club Gold",
  "84": "1000 Club",
  "209": "2500 Club",
  "417": "Founder's Club"
};

var ClubLayout =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ClubLayout, _Component);

  function ClubLayout(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ClubLayout);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ClubLayout).call(this, props));
    _this.otherAmountField = _react.default.createRef();
    _this.state = {
      prevIndex: null,
      selectedIndex: null,
      otherAmount: 0,
      otherAmountError: ""
    };
    _this.renderArray = _this.renderArray.bind((0, _assertThisInitialized2.default)(_this));
    _this.addToCart = _this.addToCart.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOtherAmt = _this.handleOtherAmt.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(ClubLayout, [{
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
          arr = defaultOption == "monthly" ? monthlyAmounts : singleAmounts;
        } else {
          arr = monthlyOption ? monthlyAmounts : singleAmounts;
        }

        amt = defaultAmount;
      } else {
        var items = (0, _toConsumableArray2.default)(cart.items);
        var pledgeFound = items.findIndex(function (el) {
          return el && el.type == "donation";
        });
        var monthly = pledgeFound > -1 ? items[pledgeFound].monthly : false;
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
    }
  }, {
    key: "renderArray",
    value: function renderArray(amounts, selectedIndex, type) {
      var _this2 = this;

      return amounts.map(function (amount, i) {
        return (0, _core.jsx)(_reactTransitionGroup.CSSTransition, {
          in: true,
          key: "array-".concat(_this2.props.monthlyChecked ? "monthly" : "single", "-").concat(i),
          timeout: 400,
          classNames: "askarray-item",
          unmountOnExit: true,
          appear: true
        }, (0, _core.jsx)(_ClubAskArrayBtn.default, {
          className: "askbutton--club ".concat(selectedIndex == i ? "selected" : ""),
          onClick: function onClick() {
            return _this2.addToCart(amount, i);
          }
        }, (0, _core.jsx)("div", {
          className: "askbutton__amt"
        }, "$", amount), (0, _core.jsx)(_reactTransitionGroup.CSSTransition, {
          in: _this2.props.monthlyChecked,
          timeout: 400,
          classNames: "askarray-item--level",
          unmountOnExit: true
        }, (0, _core.jsx)("div", {
          className: "club-level"
        }, partnerLevels[amount]))));
      });
    }
    /**
     * Changes state on the arry to visibly display selected amount and adds donation amount to the cart
     * @param {Number} amt - amount to be added to cart
     * @param {Number} index - index of selected item or custom amount
     */

  }, {
    key: "addToCart",
    value: function addToCart(amt, index) {
      var _this3 = this;

      var _this$state = this.state,
          otherAmountError = _this$state.otherAmountError,
          selectedIndex = _this$state.selectedIndex;
      this.setState({
        otherAmount: index == 99 ? amt : 0,
        selectedIndex: index,
        otherAmountError: index !== 99 ? "" : otherAmountError,
        prevIndex: selectedIndex
      }, function () {
        if (amt) {
          var _this3$props = _this3.props,
              monthlyChecked = _this3$props.monthlyChecked,
              _this3$props$givingOp = _this3$props.givingOptions,
              monthlyPledgeData = _this3$props$givingOp.monthlyPledgeData,
              singlePledgeData = _this3$props$givingOp.singlePledgeData;

          _this3.context.addToCart({
            type: "ADD_TO_CART",
            item: {
              type: "donation",
              PledgeAmount: amt,
              DetailCprojMail: monthlyChecked ? monthlyPledgeData.DetailCprojMail : singlePledgeData.DetailCprojMail,
              DetailCprojCredit: monthlyChecked ? monthlyPledgeData.DetailCprojCredit : singlePledgeData.DetailCprojCredit,
              DetailDescription: monthlyChecked ? monthlyPledgeData.DetailDescription : singlePledgeData.DetailDescription,
              DetailName: monthlyChecked ? monthlyPledgeData.DetailName : singlePledgeData.DetailName,
              monthly: monthlyChecked
            }
          });
        } else {
          _this3.context.removeFromCart({
            type: "REMOVE_FROM_CART",
            itemType: "donation"
          });
        }
      });
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      var _this4 = this;

      this.setState(function (state, props) {
        if (state.selectedIndex !== 99) {
          return {
            selectedIndex: 99,
            prevIndex: state.selectedIndex
          };
        }
      }, function () {
        if (_this4.state.otherAmount == 0 && _this4.props.givingInfo && !_this4.props.givingInfo.amount) {
          _this4.context.removeFromCart("donation");
        }

        _this4.otherAmountField.current.focus();
      });
    }
  }, {
    key: "handleOtherAmt",
    value: function handleOtherAmt(e) {
      var _this5 = this;

      var selectedIndex = this.state.selectedIndex;
      var value = e.target.value.trim();
      var isValid = /^[0-9]{1,}$/.test(value);

      if (isValid && value > 0) {
        this.setState({
          otherAmountError: "",
          otherAmount: value,
          prevIndex: selectedIndex
        }, function () {
          return _this5.addToCart(+value, 99);
        });
      } else if (isValid) {
        this.setState({
          otherAmount: 0,
          selectedIndex: null,
          otherAmountError: "",
          prevIndex: selectedIndex
        }, function () {
          return _this5.context.removeFromCart({
            type: "REMOVE_FROM_CART",
            itemType: "donation"
          });
        });
      } else {
        this.setState({
          otherAmount: 0,
          otherAmountError: value !== "" ? "Number greater than Zero Only" : "",
          prevIndex: selectedIndex
        });
      }
    }
  }, {
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
        var index = isMonthly ? monthlyAmounts.indexOf(amount) : singleAmounts.indexOf(amount);
        selectedIndex = index > -1 ? index : 99;
        otherAmount = amount;
        monthlyChecked = isMonthly;
      } else {
        otherAmount = selectedIndex == 99 ? otherAmount : monthlyChecked ? monthlyAmounts[selectedIndex] : singleAmounts[selectedIndex];
        key = selectedIndex == 99 || selectedIndex === null ? key : (monthlyChecked ? monthlyAmounts[selectedIndex] : singleAmounts[selectedIndex]) + "-key";
      }

      var amounts = monthlyChecked ? monthlyAmounts : singleAmounts;
      return (0, _core.jsx)(_FieldSet.default, null, (0, _core.jsx)("legend", null, "Giving Amounts and Giving Options"), (0, _core.jsx)(_MonthlyClubTabBlock.default, {
        monthlyChecked: monthlyChecked,
        handleTabClick: handleRadioClick
      }), (0, _core.jsx)(_ClubAskArray.default, {
        id: "AskArray",
        className: "askarray--club"
      }, (0, _core.jsx)(_reactTransitionGroup.TransitionGroup, {
        className: "askarray--club-list",
        component: null,
        enter: true,
        exit: false
      }, this.renderArray(amounts, selectedIndex, 'buttons'), (0, _core.jsx)(_ClubOtherGiftAmountGroup.default, {
        key: "othergiftamount",
        id: "OtherGiftAmount",
        className: "askarray--other"
      }, (0, _core.jsx)("div", {
        id: "OtherAmount",
        className: "askarray__form-group--other ".concat(selectedIndex == 99 ? "selected" : "")
      }, (0, _core.jsx)("label", {
        className: "form-group__other-input--label",
        htmlFor: "other-amt-input"
      }, "Other Amount"), (0, _core.jsx)("input", {
        key: key,
        ref: this.otherAmountField,
        className: "form-group__other-input",
        name: "other-amt-input",
        onChange: this.handleOtherAmt,
        value: otherAmount == 0 ? "" : otherAmount,
        onFocus: this.handleFocus
      }), (0, _core.jsx)("div", {
        className: "other-amt-error"
      }, otherAmountError))))), (0, _core.jsx)(_AmountError.default, {
        className: "amount-error"
      }, amountError));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return ClubLayout;
}(_react.Component);

ClubLayout.contextType = _GivingFormProvider.GivingFormContext;
var _default = ClubLayout;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getIndex, "getIndex", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Layouts/ClubLayout.js");
  reactHotLoader.register(partnerLevels, "partnerLevels", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Layouts/ClubLayout.js");
  reactHotLoader.register(ClubLayout, "ClubLayout", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Layouts/ClubLayout.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Layouts/ClubLayout.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@babel/runtime/helpers/toConsumableArray":"node_modules/@babel/runtime/helpers/toConsumableArray.js","@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/assertThisInitialized":"node_modules/@babel/runtime/helpers/assertThisInitialized.js","@babel/runtime/helpers/inherits":"node_modules/@babel/runtime/helpers/inherits.js","@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","react-transition-group":"node_modules/react-transition-group/esm/index.js","../Animations/askarray.css":"src/Components/FormComponents/Animations/askarray.css","../../Contexts/GivingFormProvider":"src/Components/Contexts/GivingFormProvider.js","../Blocks/MonthlyClubTabBlock":"src/Components/FormComponents/Blocks/MonthlyClubTabBlock.js","../StyledComponents/FieldSet":"src/Components/FormComponents/StyledComponents/FieldSet.js","../StyledComponents/ClubAskArray":"src/Components/FormComponents/StyledComponents/ClubAskArray.js","../StyledComponents/ClubAskArrayBtn":"src/Components/FormComponents/StyledComponents/ClubAskArrayBtn.js","../StyledComponents/ClubOtherGiftAmountGroup":"src/Components/FormComponents/StyledComponents/ClubOtherGiftAmountGroup.js","../StyledComponents/AmountError":"src/Components/FormComponents/StyledComponents/AmountError.js"}],"src/Components/FormComponents/Blocks/PartnershipBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _GivingFormProvider = require("../../Contexts/GivingFormProvider");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var PartnershipBlock = function PartnershipBlock() {
  var ctx = (0, _react.useContext)(_GivingFormProvider.GivingFormContext);
  return null;
};

__signature__(PartnershipBlock, "useContext{ctx}");

var _default = PartnershipBlock;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PartnershipBlock, "PartnershipBlock", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/PartnershipBlock.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/PartnershipBlock.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","../../Contexts/GivingFormProvider":"src/Components/Contexts/GivingFormProvider.js"}],"src/Components/Forms/AskForm.js":[function(require,module,exports) {
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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _reactTransitionGroup = require("react-transition-group");

var _GivingFormProvider = require("../Contexts/GivingFormProvider");

var _ClubLayout = _interopRequireDefault(require("../FormComponents/Layouts/ClubLayout"));

var _PartnershipBlock = _interopRequireDefault(require("../FormComponents/Blocks/PartnershipBlock"));

var _DesignationBlock = _interopRequireDefault(require("../FormComponents/Blocks/DesignationBlock"));

var _FormPanel = _interopRequireDefault(require("../FormComponents/StyledComponents/FormPanel"));

var _FieldSet = _interopRequireDefault(require("../FormComponents/StyledComponents/FieldSet"));

var _FormHeader = _interopRequireDefault(require("../FormComponents/StyledComponents/FormHeader"));

var _SubmitButton = _interopRequireDefault(require("../FormComponents/SubmitButton"));

require("../FormComponents/Animations/designations.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var AskForm =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AskForm, _Component);

  function AskForm() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AskForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AskForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      monthlyChecked: false
    };

    _this.handleRadioClick = function (e) {
      var id = e.target.id;
      var _this$props = _this.props,
          singlePledgeData = _this$props.singlePledgeData,
          monthlyPledgeData = _this$props.monthlyPledgeData;

      _this.setState({
        monthlyChecked: id !== "singlegift"
      }, function () {
        return _this.context.updateGivingType({
          type: "UPDATE_GIVING_TYPE",
          typeId: id,
          singlePledgeData: singlePledgeData,
          monthlyPledgeData: monthlyPledgeData,
          source: "radioClick"
        });
      });
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
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(e) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                _this.context.submitAskForm();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.addToCart = function (item) {
      _this.context.addToCart({
        type: "ADD_TO_CART",
        item: item
      });
    };

    _this.removeFromCart = function (itemType) {
      _this.context.removeFromCart({
        type: "REMOVE_TO_CART",
        itemType: itemType
      });
    };

    return _this;
  }

  (0, _createClass2.default)(AskForm, [{
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
          savePersonalInfo: true
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
      }

      try {
        var monthlyChecked = this.context.loadLS({
          type: "LOAD"
        });
        this.setState({
          monthlyChecked: monthlyChecked
        });
      } catch (err) {
        console.error(err.message);
        console.error(err.stack);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          formTitle = _this$props2.formTitle,
          submitButtonText = _this$props2.submitButtonText,
          showGivingArray = _this$props2.showGivingArray,
          monthlyOption = _this$props2.monthlyOption,
          singleOption = _this$props2.singleOption,
          monthlyAmounts = _this$props2.monthlyAmounts,
          monthlyDescriptions = _this$props2.monthlyDescriptions,
          singleAmounts = _this$props2.singleAmounts,
          singleDescriptions = _this$props2.singleDescriptions,
          designations = _this$props2.designations,
          monthlyPledgeData = _this$props2.monthlyPledgeData,
          singlePledgeData = _this$props2.singlePledgeData,
          defaultAmount = _this$props2.defaultAmount,
          defaultOption = _this$props2.defaultOption,
          premiumData = _this$props2.premiumData;
      var givingOptions = {
        monthlyOption: monthlyOption,
        singleOption: singleOption,
        monthlyAmounts: monthlyAmounts ? monthlyAmounts : [],
        monthlyDescriptions: monthlyDescriptions ? monthlyDescriptions : [],
        singleAmounts: singleAmounts ? singleAmounts : [],
        singleDescriptions: singleDescriptions ? singleDescriptions : [],
        designations: designations ? designations : [],
        monthlyPledgeData: monthlyPledgeData,
        singlePledgeData: singlePledgeData
      };
      var monthlyChecked = this.state.monthlyChecked;
      var _this$context = this.context,
          errors = _this$context.errors,
          fields = _this$context.fields,
          submitting = _this$context.submitting,
          submitted = _this$context.submitted;
      var hasErrors = Object.values(errors).filter(function (val) {
        return val && val.length > 0;
      }).length > 0;
      return !submitted ? (0, _core.jsx)("form", {
        id: "react-club-form",
        autoComplete: "off",
        onSubmit: this.handleSubmit
      }, (0, _core.jsx)(_FormHeader.default, {
        className: "form-title form-header"
      }, formTitle), (0, _core.jsx)(_PartnershipBlock.default, {
        premiumData: premiumData
      }), showGivingArray && (0, _core.jsx)(_FormPanel.default, {
        className: "form-panel"
      }, (0, _core.jsx)(_ClubLayout.default, {
        defaultAmount: defaultAmount,
        defaultOption: defaultOption,
        givingOptions: givingOptions,
        handleRadioClick: this.handleRadioClick,
        amountError: errors.amount,
        monthlyChecked: monthlyChecked,
        Monthlypledgeday: fields.Monthlypledgeday,
        monthlyOption: monthlyOption,
        singleOption: singleOption
      })), (0, _core.jsx)(_FormPanel.default, {
        className: "form-panel",
        style: {
          marginBottom: "30px"
        }
      }, (0, _core.jsx)(_reactTransitionGroup.CSSTransition, {
        in: designations && designations.length && !monthlyChecked,
        timeout: 400,
        classNames: "designation-container",
        unmountOnExit: true,
        appear: true
      }, (0, _core.jsx)(_DesignationBlock.default, {
        designations: designations
      }))), (0, _core.jsx)(_FormPanel.default, {
        className: "form-panel"
      }, (0, _core.jsx)(_FieldSet.default, null, (0, _core.jsx)("legend", null, "Form Submit Block"), (0, _core.jsx)(_SubmitButton.default, {
        hasErrors: hasErrors,
        error: errors.amount,
        handleSubmit: this.handleSubmit,
        submitting: submitting,
        value: submitButtonText,
        color: "#fff",
        backgroundColor: "#009BDF"
      })))) : null;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return AskForm;
}(_react.Component);

AskForm.contextType = _GivingFormProvider.GivingFormContext;
var _default = AskForm;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AskForm, "AskForm", "/Users/wehand/Code/react-form-drupal/src/Components/Forms/AskForm.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/Forms/AskForm.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@babel/runtime/regenerator":"node_modules/@babel/runtime/regenerator/index.js","@babel/runtime/helpers/asyncToGenerator":"node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/inherits":"node_modules/@babel/runtime/helpers/inherits.js","@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","react-transition-group":"node_modules/react-transition-group/esm/index.js","../Contexts/GivingFormProvider":"src/Components/Contexts/GivingFormProvider.js","../FormComponents/Layouts/ClubLayout":"src/Components/FormComponents/Layouts/ClubLayout.js","../FormComponents/Blocks/PartnershipBlock":"src/Components/FormComponents/Blocks/PartnershipBlock.js","../FormComponents/Blocks/DesignationBlock":"src/Components/FormComponents/Blocks/DesignationBlock.js","../FormComponents/StyledComponents/FormPanel":"src/Components/FormComponents/StyledComponents/FormPanel.js","../FormComponents/StyledComponents/FieldSet":"src/Components/FormComponents/StyledComponents/FieldSet.js","../FormComponents/StyledComponents/FormHeader":"src/Components/FormComponents/StyledComponents/FormHeader.js","../FormComponents/SubmitButton":"src/Components/FormComponents/SubmitButton.js","../FormComponents/Animations/designations.css":"src/Components/FormComponents/Animations/designations.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51042" + '/');

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
//# sourceMappingURL=/AskForm.02eb8dbc.js.map