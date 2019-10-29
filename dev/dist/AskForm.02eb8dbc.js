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
})("&.tab-group{box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;flex:1 1 50%;max-width:360px;}input[type=\"checkbox\"].tab-group__input{position:absolute !important;left:-10000px !important;top:auto !important;bottom:auto !important;width:1px !important;height:1px !important;overflow:hidden !important;}input[type=\"checkbox\"].tab-group__input + label{display:block;height:50px;line-height:50px !important;cursor:pointer;width:100%;text-align:center;background-color:", function (props) {
  return props.toggleBackgroundColor;
}, ";border-radius:", function (props) {
  return props.toggleBorderRadius;
}, ";border:1px solid ", function (props) {
  return props.toggleBorderColor;
}, ";margin-bottom:0;color:", function (props) {
  return props.toggleColor;
}, ";transition:color 200ms ease-in-out,background-color 200ms ease-in-out,border-color 200ms ease-in-out;position:relative;font-weight:bold;@media screen and (max-width:559px){font-size:18px;}}input[type=\"checkbox\"].tab-group__input:checked + label,input[type=\"checkbox\"].tab-group__input + label:hover{color:", function (props) {
  return props.toggleHoverColor;
}, ";background-color:", function (props) {
  return props.toggleHoverBackgroundColor;
}, ";border-color:", function (props) {
  return props.toggleHoverBorderColor;
}, ";}input[type=\"checkbox\"].tab-group__input:checked + label::after{content:\"\";display:block;border-top:10px solid ", function (props) {
  return props.toggleBorderColor;
}, ";border-left:15px solid transparent;border-right:15px solid transparent;position:absolute;left:50%;transform:translateX(-50%);box-sizing:content-box;}" + ("development" === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsdWJUYWJHcm91cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHK0IiLCJmaWxlIjoiQ2x1YlRhYkdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IENsdWJUYWJHcm91cCA9IHN0eWxlZC5kaXZgXG5cdCYudGFiLWdyb3VwIHtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGZsZXg6IDEgMSA1MCU7XG5cdFx0bWF4LXdpZHRoOiAzNjBweDtcblx0fVxuXHRpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0udGFiLWdyb3VwX19pbnB1dCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cdFx0bGVmdDogLTEwMDAwcHggIWltcG9ydGFudDtcblx0XHR0b3A6IGF1dG8gIWltcG9ydGFudDtcblx0XHRib3R0b206IGF1dG8gIWltcG9ydGFudDtcblx0XHR3aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG5cdFx0aGVpZ2h0OiAxcHggIWltcG9ydGFudDtcblx0XHRvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG5cdH1cblx0aW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLnRhYi1ncm91cF9faW5wdXQgKyBsYWJlbCB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRvZ2dsZUJhY2tncm91bmRDb2xvcn07XG5cdFx0Ym9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50b2dnbGVCb3JkZXJSYWRpdXN9O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudG9nZ2xlQm9yZGVyQ29sb3J9O1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudG9nZ2xlQ29sb3J9O1xuXHRcdHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LFxuXHRcdFx0Ym9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTlweCkge1xuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdH1cblx0fVxuXHRpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0udGFiLWdyb3VwX19pbnB1dDpjaGVja2VkICsgbGFiZWwsXG5cdGlucHV0W3R5cGU9XCJjaGVja2JveFwiXS50YWItZ3JvdXBfX2lucHV0ICsgbGFiZWw6aG92ZXIge1xuXHRcdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRvZ2dsZUhvdmVyQ29sb3J9O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudG9nZ2xlSG92ZXJCYWNrZ3JvdW5kQ29sb3J9O1xuXHRcdGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50b2dnbGVIb3ZlckJvcmRlckNvbG9yfTtcblx0fVxuXHRpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0udGFiLWdyb3VwX19pbnB1dDpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGJvcmRlci10b3A6IDEwcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50b2dnbGVCb3JkZXJDb2xvcn07XG5cdFx0Ym9yZGVyLWxlZnQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0Ym9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiA1MCU7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXHRcdGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuXHR9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDbHViVGFiR3JvdXA7XG4iXX0= */"));
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
},{"@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js"}],"src/Components/FormComponents/FunctionalComponents/ClubTab.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _FormConfigProvider = require("../../Contexts/FormConfigProvider");

var _ClubTabGroup = _interopRequireDefault(require("../StyledComponents/ClubTabGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ClubTab = function ClubTab(_ref) {
  var id = _ref.id,
      name = _ref.name,
      checked = _ref.checked,
      handleTabClick = _ref.handleTabClick,
      label = _ref.label;

  var _useContext = (0, _react.useContext)(_FormConfigProvider.FormConfigContext),
      getCssConfig = _useContext.getCssConfig;

  var _getCssConfig = getCssConfig("toggle"),
      _getCssConfig$toggleC = _getCssConfig.toggleColor,
      toggleColor = _getCssConfig$toggleC === void 0 ? "#fff" : _getCssConfig$toggleC,
      _getCssConfig$toggleB = _getCssConfig.toggleBackgroundColor,
      toggleBackgroundColor = _getCssConfig$toggleB === void 0 ? "#1775BC" : _getCssConfig$toggleB,
      _getCssConfig$toggleB2 = _getCssConfig.toggleBorderColor,
      toggleBorderColor = _getCssConfig$toggleB2 === void 0 ? "transparent" : _getCssConfig$toggleB2,
      _getCssConfig$toggleB3 = _getCssConfig.toggleBorderRadius,
      toggleBorderRadius = _getCssConfig$toggleB3 === void 0 ? "5px" : _getCssConfig$toggleB3,
      _getCssConfig$toggleH = _getCssConfig.toggleHoverColor,
      toggleHoverColor = _getCssConfig$toggleH === void 0 ? "#1775BC" : _getCssConfig$toggleH,
      _getCssConfig$toggleH2 = _getCssConfig.toggleHoverBackgroundColor,
      toggleHoverBackgroundColor = _getCssConfig$toggleH2 === void 0 ? "#fff" : _getCssConfig$toggleH2,
      _getCssConfig$toggleH3 = _getCssConfig.toggleHoverBorderColor,
      toggleHoverBorderColor = _getCssConfig$toggleH3 === void 0 ? "#1775BC" : _getCssConfig$toggleH3;

  var handleKeyUp = function handleKeyUp(e) {
    var keyCode = e.keyCode; // console.log({keyCode})

    if (checked && (keyCode == 13 || keyCode == 32)) {
      // return or space
      e.preventDefault();
      handleTabClick({
        target: {
          id: "".concat(id, "gift")
        }
      });
    }
  };

  return (0, _core.jsx)(_ClubTabGroup.default, {
    id: "".concat(id, "-group"),
    className: "tab-group",
    toggleColor: toggleColor,
    toggleBackgroundColor: toggleBackgroundColor,
    toggleBorderColor: toggleBorderColor,
    toggleBorderRadius: toggleBorderRadius,
    toggleHoverColor: toggleHoverColor,
    toggleHoverBackgroundColor: toggleHoverBackgroundColor,
    toggleHoverBorderColor: toggleHoverBorderColor,
    onKeyUp: handleKeyUp
  }, (0, _core.jsx)("input", {
    className: "tab-group__input",
    name: name,
    id: "".concat(id, "gift"),
    type: "checkbox",
    checked: checked,
    onChange: handleTabClick
  }), (0, _core.jsx)("label", {
    htmlFor: "".concat(id, "gift"),
    role: "tab",
    "aria-selected": checked,
    "aria-controls": "AskArray-".concat(id),
    id: "".concat(id, "gift-label"),
    tabIndex: checked ? "0" : "-1"
  }, label));
};

__signature__(ClubTab, "useContext{{ getCssConfig }}");

var _default = ClubTab;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ClubTab, "ClubTab", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/FunctionalComponents/ClubTab.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/FunctionalComponents/ClubTab.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","../../Contexts/FormConfigProvider":"src/Components/Contexts/FormConfigProvider.js","../StyledComponents/ClubTabGroup":"src/Components/FormComponents/StyledComponents/ClubTabGroup.js"}],"src/Components/FormComponents/Blocks/MonthlyClubTabBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _ClubTab = _interopRequireDefault(require("../FunctionalComponents/ClubTab"));

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

var MonthlyTabGroup = function MonthlyTabGroup(_ref) {
  var monthlyChecked = _ref.monthlyChecked,
      handleTabClick = _ref.handleTabClick;
  var monthly = monthlyChecked;
  var single = !monthlyChecked;

  var handleKeyUp = function handleKeyUp(e) {
    var keyCode = e.keyCode;

    switch (keyCode) {
      case 35:
        // end key
        e.preventDefault();
        handleTabClick({
          target: {
            id: "singlegift"
          }
        });
        break;

      case 36:
        // home key
        e.preventDefault();
        handleTabClick({
          target: {
            id: "monthlygift"
          }
        });
        break;

      case 37:
        // left arrow
        e.preventDefault();
        handleTabClick({
          target: {
            id: monthlyChecked ? "singlegift" : "monthlygift"
          }
        });
        break;

      case 39:
        // right arrow
        e.preventDefault();
        handleTabClick({
          target: {
            id: monthlyChecked ? "singlegift" : "monthlygift"
          }
        });
        break;
    }
  };

  return (0, _core.jsx)(_FieldSet.default, {
    className: "monthly-giving-info"
  }, (0, _core.jsx)("legend", null, "Select Monthly or One-Time Gift"), (0, _core.jsx)(_FormRow.default, {
    className: "monthly-tab",
    role: "tablist",
    "aria-label": "Giving Tabs",
    id: "monthlhy-club-tab-block",
    "aria-controls": "giving-tabs",
    onKeyUp: handleKeyUp
  }, (0, _core.jsx)(_ClubTab.default, {
    id: "monthly",
    name: "monthly-toggle",
    label: "Monthly Partner",
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
};

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
},{"@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","../FunctionalComponents/ClubTab":"src/Components/FormComponents/FunctionalComponents/ClubTab.js","../StyledComponents/Divider":"src/Components/FormComponents/StyledComponents/Divider.js","../StyledComponents/FieldSet":"src/Components/FormComponents/StyledComponents/FieldSet.js","../StyledComponents/FormRow":"src/Components/FormComponents/StyledComponents/FormRow.js"}],"src/Components/FormComponents/StyledComponents/ClubAskArray.js":[function(require,module,exports) {
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
  name: "l4k83b",
  styles: "display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;&.askarray--club{position:relative;box-sizing:border-box;height:auto;width:calc(100% + 5px);border-bottom:5px solid transparent;flex-wrap:nowrap;margin:30px 0;flex-wrap:nowrap;justify-content:space-between;outline:none;@media screen and (max-width:716px){flex-wrap:wrap;margin:20px auto;margin-bottom:10px;}}"
} : {
  name: "l4k83b",
  styles: "display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;&.askarray--club{position:relative;box-sizing:border-box;height:auto;width:calc(100% + 5px);border-bottom:5px solid transparent;flex-wrap:nowrap;margin:30px 0;flex-wrap:nowrap;justify-content:space-between;outline:none;@media screen and (max-width:716px){flex-wrap:wrap;margin:20px auto;margin-bottom:10px;}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsdWJBc2tBcnJheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHK0IiLCJmaWxlIjoiQ2x1YkFza0FycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IENsdWJBc2tBcnJheSA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdCYuYXNrYXJyYXktLWNsdWIge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGhlaWdodDogYXV0bztcblx0XHR3aWR0aDogY2FsYygxMDAlICsgNXB4KTtcblx0XHRib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0ZmxleC13cmFwOiBub3dyYXA7XG5cdFx0bWFyZ2luOiAzMHB4IDA7XG5cdFx0ZmxleC13cmFwOiBub3dyYXA7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzE2cHgpIHtcblx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdG1hcmdpbjogMjBweCBhdXRvO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHR9XG5cdH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENsdWJBc2tBcnJheTtcbiJdfQ== */"
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
})("display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;&.askbutton--club{box-sizing:border-box;flex:0 0 95px;margin:0 2.5px;@media screen and (max-width:559px){flex:0 0 calc((100% - 77px) / 5);}}div{display:flex;flex-direction:row;justify-content:center;align-items:center;}div.askbutton__amt{background-color:", function (props) {
  return props.arrayBackgroundColor;
}, ";border-radius:", function (props) {
  return props.arrayBorderRadius;
}, ";border:1px solid ", function (props) {
  return props.arrayBorderColor;
}, ";box-sizing:border-box;color:", function (props) {
  return props.arrayColor;
}, ";cursor:pointer;width:100%;font-weight:600;font-size:30px;height:50px;text-align:center;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;@media screen and (max-width:559px){font-size:18px;}.dollar-sign{font-size:21px;margin-right:1px;font-weight:bold;@media screen and (max-width:559px){font-size:16px;}}}&:focus div:not(.club-level),&:hover div:not(.club-level),&:active div:not(.club-level),div:not(.club-level):hover,div:not(.club-level):focus,div:not(.club-level):active,&.selected div:not(.club-level){background-color:", function (props) {
  return props.arrayHoverBackgroundColor;
}, ";color:", function (props) {
  return props.arrayHoverColor;
}, ";border-color:", function (props) {
  return props.arrayHoverBorderColor;
}, ";}div.club-level{position:absolute;font-weight:bold;font-size:14px;color:", function (props) {
  return props.arrayDescriptorColor;
}, ";text-align:center;width:110%;left:50%;top:calc(100% + 7px);transform:translateX(-50%);line-height:15px;@media screen and (max-width:395px){width:100%;font-size:12px;line-height:13px;}}" + ("development" === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsdWJBc2tBcnJheUJ0bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHa0MiLCJmaWxlIjoiQ2x1YkFza0FycmF5QnRuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IENsdWJBc2tBcnJheUJ0biA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCYuYXNrYnV0dG9uLS1jbHViIHtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGZsZXg6IDAgMCA5NXB4O1xuXHRcdG1hcmdpbjogMCAyLjVweDtcblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTlweCkge1xuXHRcdFx0ZmxleDogMCAwIGNhbGMoKDEwMCUgLSA3N3B4KSAvIDUpO1xuXHRcdH1cblx0fVxuXHRkaXYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdGRpdi5hc2tidXR0b25fX2FtdCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5hcnJheUJhY2tncm91bmRDb2xvcn07XG5cdFx0Ym9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy5hcnJheUJvcmRlclJhZGl1c307XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy5hcnJheUJvcmRlckNvbG9yfTtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmFycmF5Q29sb3J9O1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGZvbnQtc2l6ZTogMzBweDtcblx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LCBjb2xvciAyMDBtcyBlYXNlLWluLW91dCxcblx0XHRcdGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG5cdFx0dHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LCBjb2xvciAyMDBtcyBlYXNlLWluLW91dCxcblx0XHRcdGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTU5cHgpIHtcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHR9XG5cdFx0LmRvbGxhci1zaWduIHtcblx0XHRcdGZvbnQtc2l6ZTogMjFweDtcblx0XHRcdG1hcmdpbi1yaWdodDogMXB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTlweCkge1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdCY6Zm9jdXMgZGl2Om5vdCguY2x1Yi1sZXZlbCksXG5cdCY6aG92ZXIgZGl2Om5vdCguY2x1Yi1sZXZlbCksXG5cdCY6YWN0aXZlIGRpdjpub3QoLmNsdWItbGV2ZWwpLFxuXHRkaXY6bm90KC5jbHViLWxldmVsKTpob3Zlcixcblx0ZGl2Om5vdCguY2x1Yi1sZXZlbCk6Zm9jdXMsXG5cdGRpdjpub3QoLmNsdWItbGV2ZWwpOmFjdGl2ZSxcblx0Ji5zZWxlY3RlZCBkaXY6bm90KC5jbHViLWxldmVsKSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5hcnJheUhvdmVyQmFja2dyb3VuZENvbG9yfTtcblx0XHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5hcnJheUhvdmVyQ29sb3J9O1xuXHRcdGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5hcnJheUhvdmVyQm9yZGVyQ29sb3J9O1xuXHR9XG5cdGRpdi5jbHViLWxldmVsIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmFycmF5RGVzY3JpcHRvckNvbG9yfTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0d2lkdGg6IDExMCU7XG5cdFx0bGVmdDogNTAlO1xuXHRcdHRvcDogY2FsYygxMDAlICsgN3B4KTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cdFx0bGluZS1oZWlnaHQ6IDE1cHg7XG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzk1cHgpIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDEzcHg7XG5cdFx0fVxuXHR9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDbHViQXNrQXJyYXlCdG47XG4iXX0= */"));
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
},{"@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js"}],"src/Components/FormComponents/Blocks/GivingArrayBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _FormConfigProvider = require("../../Contexts/FormConfigProvider");

var _ClubAskArrayBtn = _interopRequireDefault(require("../StyledComponents/ClubAskArrayBtn"));

var _reactTransitionGroup = require("react-transition-group");

require("../Animations/askarray.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var partnerLevels = {
  "20": "700 Club",
  "40": "700 Club Gold",
  "84": "1000 Club",
  "209": "2500 Club",
  "417": "Founder's Club"
};

var GivingArray = function GivingArray(_ref) {
  var amounts = _ref.amounts,
      selectedIndex = _ref.selectedIndex,
      format = _ref.format,
      monthlyChecked = _ref.monthlyChecked,
      addToCart = _ref.addToCart;

  var _useContext = (0, _react.useContext)(_FormConfigProvider.FormConfigContext),
      getCssConfig = _useContext.getCssConfig;

  var _getCssConfig = getCssConfig("array"),
      _getCssConfig$arrayCo = _getCssConfig.arrayColor,
      arrayColor = _getCssConfig$arrayCo === void 0 ? "#fff" : _getCssConfig$arrayCo,
      _getCssConfig$arrayBa = _getCssConfig.arrayBackgroundColor,
      arrayBackgroundColor = _getCssConfig$arrayBa === void 0 ? "#1775BC" : _getCssConfig$arrayBa,
      _getCssConfig$arrayBo = _getCssConfig.arrayBorderColor,
      arrayBorderColor = _getCssConfig$arrayBo === void 0 ? "transparent" : _getCssConfig$arrayBo,
      _getCssConfig$arrayBo2 = _getCssConfig.arrayBorderRadius,
      arrayBorderRadius = _getCssConfig$arrayBo2 === void 0 ? "5px" : _getCssConfig$arrayBo2,
      _getCssConfig$arrayHo = _getCssConfig.arrayHoverColor,
      arrayHoverColor = _getCssConfig$arrayHo === void 0 ? "#1775BC" : _getCssConfig$arrayHo,
      _getCssConfig$arrayHo2 = _getCssConfig.arrayHoverBackgroundColor,
      arrayHoverBackgroundColor = _getCssConfig$arrayHo2 === void 0 ? "#fff" : _getCssConfig$arrayHo2,
      _getCssConfig$arrayHo3 = _getCssConfig.arrayHoverBorderColor,
      arrayHoverBorderColor = _getCssConfig$arrayHo3 === void 0 ? "#1775BC" : _getCssConfig$arrayHo3,
      _getCssConfig$arrayDe = _getCssConfig.arrayDescriptorColor,
      arrayDescriptorColor = _getCssConfig$arrayDe === void 0 ? "#DDB007" : _getCssConfig$arrayDe;

  return amounts.map(function (amount, i) {
    return (0, _core.jsx)(_reactTransitionGroup.CSSTransition, {
      in: true,
      key: "array-".concat(monthlyChecked ? "monthly" : "single", "-").concat(i),
      timeout: 400,
      classNames: "askarray-item",
      unmountOnExit: true,
      appear: true
    }, (0, _core.jsx)(_ClubAskArrayBtn.default, {
      className: "askbutton--club ".concat(selectedIndex == i ? "selected" : ""),
      onClick: function onClick() {
        return addToCart(amount, i);
      },
      arrayColor: arrayColor,
      arrayBackgroundColor: arrayBackgroundColor,
      arrayBorderColor: arrayBorderColor,
      arrayBorderRadius: arrayBorderRadius,
      arrayHoverColor: arrayHoverColor,
      arrayHoverBackgroundColor: arrayHoverBackgroundColor,
      arrayHoverBorderColor: arrayHoverBorderColor,
      arrayDescriptorColor: arrayDescriptorColor
    }, (0, _core.jsx)("div", {
      className: "askbutton__amt",
      tabIndex: "0",
      role: "button",
      "aria-pressed": selectedIndex == i
    }, (0, _core.jsx)("span", {
      className: "dollar-sign"
    }, "$"), amount.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximiumFractionDigits: 0,
      style: "decimal"
    })), (0, _core.jsx)(_reactTransitionGroup.CSSTransition, {
      in: monthlyChecked,
      timeout: 400,
      classNames: "askarray-item--level",
      unmountOnExit: true
    }, (0, _core.jsx)("div", {
      className: "club-level"
    }, partnerLevels[amount]))));
  });
};

__signature__(GivingArray, "useContext{{ getCssConfig }}");

var _default = (0, _react.memo)(GivingArray);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(partnerLevels, "partnerLevels", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/GivingArrayBlock.js");
  reactHotLoader.register(GivingArray, "GivingArray", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/GivingArrayBlock.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/GivingArrayBlock.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","../../Contexts/FormConfigProvider":"src/Components/Contexts/FormConfigProvider.js","../StyledComponents/ClubAskArrayBtn":"src/Components/FormComponents/StyledComponents/ClubAskArrayBtn.js","react-transition-group":"node_modules/react-transition-group/esm/index.js","../Animations/askarray.css":"src/Components/FormComponents/Animations/askarray.css"}],"src/Components/FormComponents/StyledComponents/ClubOtherGiftAmountGroup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _FormConfigProvider = require("../../Contexts/FormConfigProvider");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ClubOtherGiftAmountStyle = (0, _styledBase.default)("div", {
  target: "epin2e0",
  label: "ClubOtherGiftAmountStyle"
})("display:flex;flex-direction:row;justify-content:center;line-height:unset;&.askarray--other{position:relative;box-sizing:border-box;flex:0 0 150px;margin:0 2.5px;transition:all 250ms ease-in-out;@media screen and (max-width:716px){margin:0 auto;", function (props) {
  return props.isMonthly ? "margin-top: 50px;" : "margin-top: 20px;";
}, " flex:unset;width:100%;justify-self:center;}}div{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;line-height:unset;margin-bottom:0;position:relative;white-space:nowrap;width:100%;label{font-size:calc(19px * 0.7);font-weight:600;color:", function (props) {
  return props.arrayColor;
}, ";box-sizing:border-box;position:absolute;left:50%;top:100%;transform:translateX(-50%);}}div.askarray__form-group--other{justify-content:center;max-width:400px;position:relative;z-index:1;@media screen and (max-width:716px){width:100%;max-width:160px;}&:before{color:", function (props) {
  return props.arrayColor;
}, ";display:block;position:absolute;", function (props) {
  return props.otherAmount ? "content: '$'" : "content: '$ Other'";
}, ";cursor:text;font-size:21px;font-weight:600;z-index:5;left:10px;top:0;line-height:50px;@media screen and (max-width:559px){font-size:18px;}}&:hover:before{content:\"$\";cursor:default;}&.selected:before,&:focus-within:before,&:focus:before{color:", function (props) {
  return props.arrayHoverColor;
}, ";content:\"$\";}label.form-group__other-input--label{width:1px;height:1px;position:absolute;top:-10000px;}input{position:relative;appearance:none;background:none;background-color:", function (props) {
  return props.arrayBackgroundColor;
}, ";height:50px;width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:1px solid ", function (props) {
  return props.arrayBorderColor;
}, ";border-radius:", function (props) {
  return props.arrayBorderRadius;
}, ";box-sizing:border-box;color:", function (props) {
  return props.arrayColor;
}, ";font-size:30px;text-align:left;padding-left:25px;font-weight:600;max-width:220px;white-space:nowrap;@media screen and (max-width:559px){font-size:24px;padding-left:22px;}@media screen and (max-width:395px){font-size:19px;padding-left:20px;}}input:active,input:focus{border-color:", function (props) {
  return props.arrayHoverBorderColor;
}, ";background-color:", function (props) {
  return props.arrayHoverBackgroundColor;
}, ";color:", function (props) {
  return props.arrayHoverColor;
}, ";box-sizing:border-box;}&.selected input{border-color:", function (props) {
  return props.arrayHoverBorderColor;
}, ";background-color:", function (props) {
  return props.arrayHoverBackgroundColor;
}, ";color:", function (props) {
  return props.arrayHoverColor;
}, ";}div.other-amt-error{box-sizing:border-box;position:absolute;color:", function (props) {
  return props.formErrorColor;
}, ";width:auto;font-weight:600;font-size:16px;opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:-25px;left:50%;transform:translateX(-50%);@media screen and (max-width:716px){bottom:-18px;font-size:15px;}}}div.selected{}" + ("development" === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsdWJPdGhlckdpZnRBbW91bnRHcm91cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLMkMiLCJmaWxlIjoiQ2x1Yk90aGVyR2lmdEFtb3VudEdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5pbXBvcnQgeyBGb3JtQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuLi8uLi9Db250ZXh0cy9Gb3JtQ29uZmlnUHJvdmlkZXJcIjtcblxuY29uc3QgQ2x1Yk90aGVyR2lmdEFtb3VudFN0eWxlID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGxpbmUtaGVpZ2h0OiB1bnNldDtcblx0Ji5hc2thcnJheS0tb3RoZXIge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGZsZXg6IDAgMCAxNTBweDtcblx0XHRtYXJnaW46IDAgMi41cHg7XG5cdFx0dHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcxNnB4KSB7XG5cdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdCR7cHJvcHMgPT4gKHByb3BzLmlzTW9udGhseSA/IFwibWFyZ2luLXRvcDogNTBweDtcIiA6IFwibWFyZ2luLXRvcDogMjBweDtcIil9XG5cdFx0XHRmbGV4OiB1bnNldDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XG5cdFx0fVxuXHR9XG5cdGRpdiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRsaW5lLWhlaWdodDogdW5zZXQ7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRsYWJlbCB7XG5cdFx0XHRmb250LXNpemU6IGNhbGMoMTlweCAqIDAuNyk7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYXJyYXlDb2xvcn07XG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0dG9wOiAxMDAlO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXHRcdH1cblx0fVxuXHRkaXYuYXNrYXJyYXlfX2Zvcm0tZ3JvdXAtLW90aGVyIHtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR6LWluZGV4OiAxO1xuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcxNnB4KSB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdG1heC13aWR0aDogMTYwcHg7XG5cdFx0fVxuXHRcdCY6YmVmb3JlIHtcblx0XHRcdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmFycmF5Q29sb3J9O1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHQke3Byb3BzID0+IChwcm9wcy5vdGhlckFtb3VudCA/IFwiY29udGVudDogJyQnXCIgOiBcImNvbnRlbnQ6ICckIE90aGVyJ1wiKX07XG5cdFx0XHRjdXJzb3I6IHRleHQ7XG5cdFx0XHRmb250LXNpemU6IDIxcHg7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0ei1pbmRleDogNTtcblx0XHRcdGxlZnQ6IDEwcHg7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHRsaW5lLWhlaWdodDogNTBweDtcblx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1OXB4KSB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0Jjpob3ZlcjpiZWZvcmUge1xuXHRcdFx0Y29udGVudDogXCIkXCI7XG5cdFx0XHRjdXJzb3I6IGRlZmF1bHQ7XG5cdFx0fVxuXHRcdCYuc2VsZWN0ZWQ6YmVmb3JlLFxuXHRcdCY6Zm9jdXMtd2l0aGluOmJlZm9yZSxcblx0XHQmOmZvY3VzOmJlZm9yZSB7XG5cdFx0XHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5hcnJheUhvdmVyQ29sb3J9O1xuXHRcdFx0Y29udGVudDogXCIkXCI7XG5cdFx0fVxuXHRcdGxhYmVsLmZvcm0tZ3JvdXBfX290aGVyLWlucHV0LS1sYWJlbCB7XG5cdFx0XHR3aWR0aDogMXB4O1xuXHRcdFx0aGVpZ2h0OiAxcHg7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR0b3A6IC0xMDAwMHB4O1xuXHRcdH1cblx0XHRpbnB1dCB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRhcHBlYXJhbmNlOiBub25lO1xuXHRcdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYXJyYXlCYWNrZ3JvdW5kQ29sb3J9O1xuXHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAyMDBtcyBlYXNlLWluLW91dCxcblx0XHRcdFx0Y29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG5cdFx0XHR0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsIGNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LFxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0O1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy5hcnJheUJvcmRlckNvbG9yfTtcblx0XHRcdGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMuYXJyYXlCb3JkZXJSYWRpdXN9O1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmFycmF5Q29sb3J9O1xuXHRcdFx0Zm9udC1zaXplOiAzMHB4O1xuXHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdHBhZGRpbmctbGVmdDogMjVweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRtYXgtd2lkdGg6IDIyMHB4O1xuXHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1OXB4KSB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAyMnB4O1xuXHRcdFx0fVxuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzk1cHgpIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxOXB4O1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlucHV0OmFjdGl2ZSxcblx0XHRpbnB1dDpmb2N1cyB7XG5cdFx0XHRib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYXJyYXlIb3ZlckJvcmRlckNvbG9yfTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYXJyYXlIb3ZlckJhY2tncm91bmRDb2xvcn07XG5cdFx0XHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5hcnJheUhvdmVyQ29sb3J9O1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHR9XG5cdFx0Ji5zZWxlY3RlZCBpbnB1dCB7XG5cdFx0XHRib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYXJyYXlIb3ZlckJvcmRlckNvbG9yfTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYXJyYXlIb3ZlckJhY2tncm91bmRDb2xvcn07XG5cdFx0XHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5hcnJheUhvdmVyQ29sb3J9O1xuXHRcdH1cblx0XHRkaXYub3RoZXItYW10LWVycm9yIHtcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5mb3JtRXJyb3JDb2xvcn07XG5cdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRib3R0b206IC0yNXB4O1xuXHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzE2cHgpIHtcblx0XHRcdFx0Ym90dG9tOiAtMThweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGRpdi5zZWxlY3RlZCB7XG5cdH1cbmA7XG5cbmNvbnN0IENsdWJPdGhlckdpZnRBbW91bnRHcm91cCA9ICh7IGNoaWxkcmVuLCBzdHlsZSA9IHt9LCBpc01vbnRobHkgfSkgPT4ge1xuXHRjb25zdCB7IGdldENzc0NvbmZpZyB9ID0gdXNlQ29udGV4dChGb3JtQ29uZmlnQ29udGV4dCk7XG5cdGNvbnN0IHtcblx0XHRhcnJheUNvbG9yID0gXCIjZmZmXCIsXG5cdFx0YXJyYXlCYWNrZ3JvdW5kQ29sb3IgPSBcIiMxNzc1QkNcIixcblx0XHRhcnJheUJvcmRlckNvbG9yID0gXCJ0cmFuc3BhcmVudFwiLFxuXHRcdGFycmF5Qm9yZGVyUmFkaXVzID0gXCI1cHhcIixcblx0XHRhcnJheUhvdmVyQ29sb3IgPSBcIiMxNzc1QkNcIixcblx0XHRhcnJheUhvdmVyQmFja2dyb3VuZENvbG9yID0gXCIjZmZmXCIsXG5cdFx0YXJyYXlIb3ZlckJvcmRlckNvbG9yID0gXCIjMTc3NUJDXCIsXG5cdFx0YXJyYXlEZXNjcmlwdG9yQ29sb3IgPSBcIiNEREIwMDdcIixcblx0fSA9IGdldENzc0NvbmZpZyhcImFycmF5XCIpO1xuXHRjb25zdCB7IGZvcm1FcnJvckNvbG9yID0gXCJjcmltc29uXCIgfSA9IGdldENzc0NvbmZpZyhcImZvcm1cIik7XG5cdHJldHVybiAoXG5cdFx0PENsdWJPdGhlckdpZnRBbW91bnRTdHlsZVxuXHRcdFx0aWQ9XCJPdGhlckdpZnRBbW91bnRcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiYXNrYXJyYXktLW90aGVyXCJcblx0XHRcdHN0eWxlPXtzdHlsZX1cblx0XHRcdGFycmF5Q29sb3I9e2FycmF5Q29sb3J9XG5cdFx0XHRhcnJheUJhY2tncm91bmRDb2xvcj17YXJyYXlCYWNrZ3JvdW5kQ29sb3J9XG5cdFx0XHRhcnJheUJvcmRlckNvbG9yPXthcnJheUJvcmRlckNvbG9yfVxuXHRcdFx0YXJyYXlCb3JkZXJSYWRpdXM9e2FycmF5Qm9yZGVyUmFkaXVzfVxuXHRcdFx0YXJyYXlIb3ZlckNvbG9yPXthcnJheUhvdmVyQ29sb3J9XG5cdFx0XHRhcnJheUhvdmVyQmFja2dyb3VuZENvbG9yPXthcnJheUhvdmVyQmFja2dyb3VuZENvbG9yfVxuXHRcdFx0YXJyYXlIb3ZlckJvcmRlckNvbG9yPXthcnJheUhvdmVyQm9yZGVyQ29sb3J9XG5cdFx0XHRhcnJheURlc2NyaXB0b3JDb2xvcj17YXJyYXlEZXNjcmlwdG9yQ29sb3J9XG5cdFx0XHRmb3JtRXJyb3JDb2xvcj17Zm9ybUVycm9yQ29sb3J9XG5cdFx0XHRpc01vbnRobHk9e2lzTW9udGhseX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9DbHViT3RoZXJHaWZ0QW1vdW50U3R5bGU+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbHViT3RoZXJHaWZ0QW1vdW50R3JvdXA7XG4iXX0= */"));

var ClubOtherGiftAmountGroup = function ClubOtherGiftAmountGroup(_ref) {
  var children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      isMonthly = _ref.isMonthly;

  var _useContext = (0, _react.useContext)(_FormConfigProvider.FormConfigContext),
      getCssConfig = _useContext.getCssConfig;

  var _getCssConfig = getCssConfig("array"),
      _getCssConfig$arrayCo = _getCssConfig.arrayColor,
      arrayColor = _getCssConfig$arrayCo === void 0 ? "#fff" : _getCssConfig$arrayCo,
      _getCssConfig$arrayBa = _getCssConfig.arrayBackgroundColor,
      arrayBackgroundColor = _getCssConfig$arrayBa === void 0 ? "#1775BC" : _getCssConfig$arrayBa,
      _getCssConfig$arrayBo = _getCssConfig.arrayBorderColor,
      arrayBorderColor = _getCssConfig$arrayBo === void 0 ? "transparent" : _getCssConfig$arrayBo,
      _getCssConfig$arrayBo2 = _getCssConfig.arrayBorderRadius,
      arrayBorderRadius = _getCssConfig$arrayBo2 === void 0 ? "5px" : _getCssConfig$arrayBo2,
      _getCssConfig$arrayHo = _getCssConfig.arrayHoverColor,
      arrayHoverColor = _getCssConfig$arrayHo === void 0 ? "#1775BC" : _getCssConfig$arrayHo,
      _getCssConfig$arrayHo2 = _getCssConfig.arrayHoverBackgroundColor,
      arrayHoverBackgroundColor = _getCssConfig$arrayHo2 === void 0 ? "#fff" : _getCssConfig$arrayHo2,
      _getCssConfig$arrayHo3 = _getCssConfig.arrayHoverBorderColor,
      arrayHoverBorderColor = _getCssConfig$arrayHo3 === void 0 ? "#1775BC" : _getCssConfig$arrayHo3,
      _getCssConfig$arrayDe = _getCssConfig.arrayDescriptorColor,
      arrayDescriptorColor = _getCssConfig$arrayDe === void 0 ? "#DDB007" : _getCssConfig$arrayDe;

  var _getCssConfig2 = getCssConfig("form"),
      _getCssConfig2$formEr = _getCssConfig2.formErrorColor,
      formErrorColor = _getCssConfig2$formEr === void 0 ? "crimson" : _getCssConfig2$formEr;

  return (0, _core.jsx)(ClubOtherGiftAmountStyle, {
    id: "OtherGiftAmount",
    className: "askarray--other",
    style: style,
    arrayColor: arrayColor,
    arrayBackgroundColor: arrayBackgroundColor,
    arrayBorderColor: arrayBorderColor,
    arrayBorderRadius: arrayBorderRadius,
    arrayHoverColor: arrayHoverColor,
    arrayHoverBackgroundColor: arrayHoverBackgroundColor,
    arrayHoverBorderColor: arrayHoverBorderColor,
    arrayDescriptorColor: arrayDescriptorColor,
    formErrorColor: formErrorColor,
    isMonthly: isMonthly
  }, children);
};

__signature__(ClubOtherGiftAmountGroup, "useContext{{ getCssConfig }}");

var _default = ClubOtherGiftAmountGroup;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ClubOtherGiftAmountStyle, "ClubOtherGiftAmountStyle", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/ClubOtherGiftAmountGroup.js");
  reactHotLoader.register(ClubOtherGiftAmountGroup, "ClubOtherGiftAmountGroup", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/ClubOtherGiftAmountGroup.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/StyledComponents/ClubOtherGiftAmountGroup.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","../../Contexts/FormConfigProvider":"src/Components/Contexts/FormConfigProvider.js"}],"src/Components/FormComponents/Layouts/ClubLayout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _reactTransitionGroup = require("react-transition-group");

require("../Animations/askarray.css");

var _GivingFormProvider = require("../../Contexts/GivingFormProvider");

var _MonthlyClubTabBlock = _interopRequireDefault(require("../Blocks/MonthlyClubTabBlock"));

var _FieldSet = _interopRequireDefault(require("../StyledComponents/FieldSet"));

var _ClubAskArray = _interopRequireDefault(require("../StyledComponents/ClubAskArray"));

var _GivingArrayBlock = _interopRequireDefault(require("../Blocks/GivingArrayBlock.js"));

var _ClubOtherGiftAmountGroup = _interopRequireDefault(require("../StyledComponents/ClubOtherGiftAmountGroup"));

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

var ClubLayout =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ClubLayout, _Component);

  function ClubLayout() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ClubLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ClubLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.otherAmountField = _react.default.createRef();
    _this.state = {
      prevIndex: null,
      selectedIndex: null,
      otherAmount: 0,
      otherAmountDisplay: "",
      otherAmountError: ""
    };

    _this.addToCart = function (amt, index) {
      var _this$state = _this.state,
          otherAmountError = _this$state.otherAmountError,
          selectedIndex = _this$state.selectedIndex;

      _this.setState({
        otherAmount: index == 99 ? amt : 0,
        otherAmountDisplay: index == 99 ? amt.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximiumFractionDigits: 0,
          style: "decimal"
        }) : "",
        selectedIndex: index,
        otherAmountError: index !== 99 ? "" : otherAmountError,
        prevIndex: selectedIndex
      }, function () {
        if (amt) {
          var _this$props = _this.props,
              monthlyChecked = _this$props.monthlyChecked,
              _this$props$givingOpt = _this$props.givingOptions,
              monthlyPledgeData = _this$props$givingOpt.monthlyPledgeData,
              singlePledgeData = _this$props$givingOpt.singlePledgeData;

          _this.context.addToCart({
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
          _this.context.removeFromCart({
            type: "REMOVE_FROM_CART",
            itemType: "donation"
          });
        }
      });
    };

    _this.handleFocus = function (e) {
      _this.setState(function (state, props) {
        if (state.selectedIndex !== 99) {
          return {
            selectedIndex: 99,
            prevIndex: state.selectedIndex
          };
        }
      }, function () {
        if (_this.otherAmountField.current.value == "" || _this.otherAmountField.current.value == 0) {
          _this.context.removeFromCart({
            type: "REMOVE_FROM_CART",
            itemType: "donation"
          });
        }

        _this.otherAmountField.current.focus();
      });
    };

    _this.handleBlur = function (e) {
      if (_this.otherAmountField.current.value == "" || _this.otherAmountField.current.value == 0) {
        _this.setState({
          selectedIndex: null
        });
      }
    };

    _this.handleOtherAmt = function (e) {
      var selectedIndex = _this.state.selectedIndex;
      var value = e.target.value.trim().replace(/[\$,]/g, "");
      var isValid = /^\d*(\.\d*)?$/.test(value);

      if (isValid && +value > 0) {
        value = Math.ceil(Number.parseFloat(value));

        _this.setState({
          otherAmountError: "",
          otherAmount: +value,
          otherAmountDisplay: value.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximiumFractionDigits: 0,
            style: "decimal"
          }),
          prevIndex: selectedIndex
        }, function () {
          return _this.addToCart(+value, 99);
        });
      } else if (isValid) {
        _this.setState({
          otherAmount: 0,
          otherAmountDisplay: "",
          selectedIndex: null,
          otherAmountError: "",
          prevIndex: selectedIndex
        }, function () {
          return _this.context.removeFromCart({
            type: "REMOVE_FROM_CART",
            itemType: "donation"
          });
        });
      } else {
        _this.setState({
          otherAmount: 0,
          otherAmountDisplay: "",
          otherAmountError: value !== "" ? "Numbers Only" : "",
          prevIndex: selectedIndex
        });
      }
    };

    return _this;
  }

  (0, _createClass2.default)(ClubLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var amt = 0,
          arr = [];
      var _this$props2 = this.props,
          defaultAmount = _this$props2.defaultAmount,
          defaultOption = _this$props2.defaultOption,
          _this$props2$givingOp = _this$props2.givingOptions,
          monthlyAmounts = _this$props2$givingOp.monthlyAmounts,
          singleAmounts = _this$props2$givingOp.singleAmounts,
          monthlyOption = _this$props2$givingOp.monthlyOption;
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
        amt = pledgeFound > -1 ? items[pledgeFound].PledgeAmount : 0;
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
    /**
     * Changes state on the arry to visibly display selected amount and adds donation amount to the cart
     * @param {Number} amt - amount to be added to cart
     * @param {Number} index - index of selected item or custom amount
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          monthlyChecked = _this$props3.monthlyChecked,
          handleRadioClick = _this$props3.handleRadioClick,
          _this$props3$givingOp = _this$props3.givingOptions,
          monthlyAmounts = _this$props3$givingOp.monthlyAmounts,
          singleAmounts = _this$props3$givingOp.singleAmounts;
      var _this$state2 = this.state,
          otherAmount = _this$state2.otherAmount,
          otherAmountDisplay = _this$state2.otherAmountDisplay,
          otherAmountError = _this$state2.otherAmountError,
          selectedIndex = _this$state2.selectedIndex;
      var key = "controlled";
      var amounts = monthlyChecked ? monthlyAmounts : singleAmounts;
      return (0, _core.jsx)(_FieldSet.default, {
        id: "giving-tabs"
      }, (0, _core.jsx)("legend", null, "Giving Amounts and Giving Options"), (0, _core.jsx)(_MonthlyClubTabBlock.default, {
        monthlyChecked: monthlyChecked,
        handleTabClick: handleRadioClick
      }), (0, _core.jsx)(_ClubAskArray.default, {
        id: "AskArray-".concat(monthlyChecked ? "monthly" : "single"),
        className: "askarray--club",
        role: "tabpanel",
        tabIndex: "0",
        "aria-labelledby": monthlyChecked ? "monthlygift-label" : "singlegift-label",
        "aria-expanded": true
      }, (0, _core.jsx)(_reactTransitionGroup.TransitionGroup, {
        className: "askarray--club-list",
        component: null,
        enter: true,
        exit: false
      }, (0, _core.jsx)(_GivingArrayBlock.default, {
        amounts: amounts,
        selectedIndex: selectedIndex,
        format: "buttons",
        addToCart: this.addToCart,
        monthlyChecked: monthlyChecked
      }), (0, _core.jsx)(_ClubOtherGiftAmountGroup.default, {
        key: "othergiftamount",
        otherAmount: otherAmount > 0,
        isMonthly: monthlyChecked
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
        id: "other-amt-input",
        onChange: this.handleOtherAmt,
        value: otherAmountDisplay,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        inputMode: "numeric",
        pattern: "[0-9]*",
        type: "text"
      }), (0, _core.jsx)("div", {
        className: "other-amt-error"
      }, otherAmountError))))));
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
  reactHotLoader.register(ClubLayout, "ClubLayout", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Layouts/ClubLayout.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Layouts/ClubLayout.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@babel/runtime/helpers/toConsumableArray":"node_modules/@babel/runtime/helpers/toConsumableArray.js","@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/inherits":"node_modules/@babel/runtime/helpers/inherits.js","@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","react-transition-group":"node_modules/react-transition-group/esm/index.js","../Animations/askarray.css":"src/Components/FormComponents/Animations/askarray.css","../../Contexts/GivingFormProvider":"src/Components/Contexts/GivingFormProvider.js","../Blocks/MonthlyClubTabBlock":"src/Components/FormComponents/Blocks/MonthlyClubTabBlock.js","../StyledComponents/FieldSet":"src/Components/FormComponents/StyledComponents/FieldSet.js","../StyledComponents/ClubAskArray":"src/Components/FormComponents/StyledComponents/ClubAskArray.js","../Blocks/GivingArrayBlock.js":"src/Components/FormComponents/Blocks/GivingArrayBlock.js","../StyledComponents/ClubOtherGiftAmountGroup":"src/Components/FormComponents/StyledComponents/ClubOtherGiftAmountGroup.js"}],"src/Components/FormComponents/Blocks/PremiumBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _reactMedia = _interopRequireDefault(require("react-media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var PremiumIntro = (0, _styledBase.default)("div", {
  target: "e1cfwhss0",
  label: "PremiumIntro"
})("development" === "production" ? {
  name: "s632dr",
  styles: "@media screen and (max-width:649px){font-weight:bold;}"
} : {
  name: "s632dr",
  styles: "@media screen and (max-width:649px){font-weight:bold;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByZW1pdW1CbG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJK0IiLCJmaWxlIjoiUHJlbWl1bUJsb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgTWVkaWEgZnJvbSBcInJlYWN0LW1lZGlhXCI7XG5cbmNvbnN0IFByZW1pdW1JbnRybyA9IHN0eWxlZC5kaXZgXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0OXB4KSB7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdH1cbmA7XG5cbmNvbnN0IFByZW11aW1JbmZvQmxvY2sgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW46IDIwcHggMCAzMHB4IDA7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0ZGl2LnByZW1pdW0taW1nIHtcblx0XHR3aWR0aDogMTYwcHg7XG5cdFx0ZmxleDogMCAwIDE2MHB4O1xuXHRcdGltZy5pbWctcmVzcG9uc2l2ZSB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR9XG5cdH1cblx0ZGl2LnByZW1pdW0tZGVzY3JpcHRpb24ge1xuXHRcdG1heC13aWR0aDogNTc1cHg7XG5cdFx0ZmxleDogMSAwIDE0MHB4O1xuXHRcdHVsIHtcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG5cdFx0XHRtYXJnaW4tYmxvY2stZW5kOiAwO1xuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ5cHgpIHtcblx0XHRcdFx0cGFkZGluZy1pbmxpbmUtc3RhcnQ6IDIwcHg7XG5cdFx0XHR9XG5cdFx0XHRsaTo6YmVmb3JlIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y3YjUwMDtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHR3aWR0aDogN3B4O1xuXHRcdFx0XHRoZWlnaHQ6IDdweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogLTFlbTtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA4cHg7XG5cdFx0XHR9XG5cdFx0XHRsaSArIGxpIHtcblx0XHRcdFx0bWFyZ2luLXRvcDogMjBweDtcblx0XHRcdH1cblx0XHRcdGxpIHtcblx0XHRcdFx0Y29sb3I6ICMxODE4MTg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDIxcHg7XG5cdFx0XHRcdGVtIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRcdFx0XHR9XG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0OXB4KSB7XG5cdFx0XHRcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRcdFx0XHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuYDtcblxuY29uc3QgUHJlbWl1bUJsb2NrID0gKHtcblx0cHJlbWl1bURhdGE6IHtcblx0XHRwcmVtaXVtVGl0bGUsXG5cdFx0cHJlbWl1bUltZ1VybCxcblx0XHRwcmVtaXVtRGVzY3JpcHRpb25zLFxuXHRcdHNob3J0RGVzY3JpcHRpb25zLFxuXHR9LFxuXHRtb250aGx5Q2hlY2tlZCxcbn0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PFByZW1pdW1JbnRybz5BbGwgTW9udGhseSBQYXJ0bmVycyBSZWNlaXZlOjwvUHJlbWl1bUludHJvPlxuXHRcdFx0PFByZW11aW1JbmZvQmxvY2s+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJlbWl1bS1pbWdcIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiXG5cdFx0XHRcdFx0XHRhbHQ9e2BEVkQgUHJlbWl1bSBmb3IgXCIke3ByZW1pdW1UaXRsZX1cImB9XG5cdFx0XHRcdFx0XHRzcmM9e3ByZW1pdW1JbWdVcmx9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJlbWl1bS1kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdDxNZWRpYSBxdWVyeT1cIihtYXgtd2lkdGg6IDY0OXB4KVwiPlxuXHRcdFx0XHRcdFx0e21hdGNoZXMgPT5cblx0XHRcdFx0XHRcdFx0bWF0Y2hlcyA/IChcblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwicHJlbWl1bS1kZXNjcmlwdGlvbl9fbGlzdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3Nob3J0RGVzY3JpcHRpb25zLm1hcCgoZGVzYywgaWR4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17YHByZW1kZXNjLSR7aWR4fWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHJlbWl1bS1kZXNjcmlwdGlvbl9fbGlzdC0taXRlbVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjIH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdD48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwicHJlbWl1bS1kZXNjcmlwdGlvbl9fbGlzdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3ByZW1pdW1EZXNjcmlwdGlvbnMubWFwKChkZXNjLCBpZHgpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtgcHJlbWRlc2MtJHtpZHh9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwcmVtaXVtLWRlc2NyaXB0aW9uX19saXN0LS1pdGVtXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2MgfX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9NZWRpYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L1ByZW11aW1JbmZvQmxvY2s+XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmVtaXVtQmxvY2s7XG4iXX0= */"
});
var PremuimInfoBlock = (0, _styledBase.default)("div", {
  target: "e1cfwhss1",
  label: "PremuimInfoBlock"
})("development" === "production" ? {
  name: "1jd101w",
  styles: "margin:20px 0 30px 0;display:flex;flex-direction:row;justify-content:space-between;div.premium-img{width:160px;flex:0 0 160px;img.img-responsive{display:block;max-width:100%;}}div.premium-description{max-width:575px;flex:1 0 140px;ul{list-style:none;margin-block-start:0;margin-block-end:0;@media screen and (max-width:649px){padding-inline-start:20px;}li::before{content:\"\";background:#f7b500;display:inline-block;width:7px;height:7px;border-radius:50%;margin-left:-1em;margin-right:8px;}li + li{margin-top:20px;}li{color:#181818;font-size:16px;line-height:21px;em{font-size:16px;font-style:italic;}@media screen and (max-width:649px){font-style:italic;&::before{display:none;}}}}}"
} : {
  name: "1jd101w",
  styles: "margin:20px 0 30px 0;display:flex;flex-direction:row;justify-content:space-between;div.premium-img{width:160px;flex:0 0 160px;img.img-responsive{display:block;max-width:100%;}}div.premium-description{max-width:575px;flex:1 0 140px;ul{list-style:none;margin-block-start:0;margin-block-end:0;@media screen and (max-width:649px){padding-inline-start:20px;}li::before{content:\"\";background:#f7b500;display:inline-block;width:7px;height:7px;border-radius:50%;margin-left:-1em;margin-right:8px;}li + li{margin-top:20px;}li{color:#181818;font-size:16px;line-height:21px;em{font-size:16px;font-style:italic;}@media screen and (max-width:649px){font-style:italic;&::before{display:none;}}}}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByZW1pdW1CbG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVbUMiLCJmaWxlIjoiUHJlbWl1bUJsb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgTWVkaWEgZnJvbSBcInJlYWN0LW1lZGlhXCI7XG5cbmNvbnN0IFByZW1pdW1JbnRybyA9IHN0eWxlZC5kaXZgXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0OXB4KSB7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdH1cbmA7XG5cbmNvbnN0IFByZW11aW1JbmZvQmxvY2sgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW46IDIwcHggMCAzMHB4IDA7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0ZGl2LnByZW1pdW0taW1nIHtcblx0XHR3aWR0aDogMTYwcHg7XG5cdFx0ZmxleDogMCAwIDE2MHB4O1xuXHRcdGltZy5pbWctcmVzcG9uc2l2ZSB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR9XG5cdH1cblx0ZGl2LnByZW1pdW0tZGVzY3JpcHRpb24ge1xuXHRcdG1heC13aWR0aDogNTc1cHg7XG5cdFx0ZmxleDogMSAwIDE0MHB4O1xuXHRcdHVsIHtcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG5cdFx0XHRtYXJnaW4tYmxvY2stZW5kOiAwO1xuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ5cHgpIHtcblx0XHRcdFx0cGFkZGluZy1pbmxpbmUtc3RhcnQ6IDIwcHg7XG5cdFx0XHR9XG5cdFx0XHRsaTo6YmVmb3JlIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y3YjUwMDtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHR3aWR0aDogN3B4O1xuXHRcdFx0XHRoZWlnaHQ6IDdweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogLTFlbTtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA4cHg7XG5cdFx0XHR9XG5cdFx0XHRsaSArIGxpIHtcblx0XHRcdFx0bWFyZ2luLXRvcDogMjBweDtcblx0XHRcdH1cblx0XHRcdGxpIHtcblx0XHRcdFx0Y29sb3I6ICMxODE4MTg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDIxcHg7XG5cdFx0XHRcdGVtIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRcdFx0XHR9XG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0OXB4KSB7XG5cdFx0XHRcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRcdFx0XHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuYDtcblxuY29uc3QgUHJlbWl1bUJsb2NrID0gKHtcblx0cHJlbWl1bURhdGE6IHtcblx0XHRwcmVtaXVtVGl0bGUsXG5cdFx0cHJlbWl1bUltZ1VybCxcblx0XHRwcmVtaXVtRGVzY3JpcHRpb25zLFxuXHRcdHNob3J0RGVzY3JpcHRpb25zLFxuXHR9LFxuXHRtb250aGx5Q2hlY2tlZCxcbn0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PFByZW1pdW1JbnRybz5BbGwgTW9udGhseSBQYXJ0bmVycyBSZWNlaXZlOjwvUHJlbWl1bUludHJvPlxuXHRcdFx0PFByZW11aW1JbmZvQmxvY2s+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJlbWl1bS1pbWdcIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiXG5cdFx0XHRcdFx0XHRhbHQ9e2BEVkQgUHJlbWl1bSBmb3IgXCIke3ByZW1pdW1UaXRsZX1cImB9XG5cdFx0XHRcdFx0XHRzcmM9e3ByZW1pdW1JbWdVcmx9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJlbWl1bS1kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdDxNZWRpYSBxdWVyeT1cIihtYXgtd2lkdGg6IDY0OXB4KVwiPlxuXHRcdFx0XHRcdFx0e21hdGNoZXMgPT5cblx0XHRcdFx0XHRcdFx0bWF0Y2hlcyA/IChcblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwicHJlbWl1bS1kZXNjcmlwdGlvbl9fbGlzdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3Nob3J0RGVzY3JpcHRpb25zLm1hcCgoZGVzYywgaWR4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17YHByZW1kZXNjLSR7aWR4fWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHJlbWl1bS1kZXNjcmlwdGlvbl9fbGlzdC0taXRlbVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjIH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdD48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwicHJlbWl1bS1kZXNjcmlwdGlvbl9fbGlzdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3ByZW1pdW1EZXNjcmlwdGlvbnMubWFwKChkZXNjLCBpZHgpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtgcHJlbWRlc2MtJHtpZHh9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwcmVtaXVtLWRlc2NyaXB0aW9uX19saXN0LS1pdGVtXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2MgfX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9NZWRpYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L1ByZW11aW1JbmZvQmxvY2s+XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmVtaXVtQmxvY2s7XG4iXX0= */"
});

var PremiumBlock = function PremiumBlock(_ref) {
  var _ref$premiumData = _ref.premiumData,
      premiumTitle = _ref$premiumData.premiumTitle,
      premiumImgUrl = _ref$premiumData.premiumImgUrl,
      premiumDescriptions = _ref$premiumData.premiumDescriptions,
      shortDescriptions = _ref$premiumData.shortDescriptions,
      monthlyChecked = _ref.monthlyChecked;
  return (0, _core.jsx)(_react.default.Fragment, null, (0, _core.jsx)(PremiumIntro, null, "All Monthly Partners Receive:"), (0, _core.jsx)(PremuimInfoBlock, null, (0, _core.jsx)("div", {
    className: "premium-img"
  }, (0, _core.jsx)("img", {
    className: "img-responsive",
    alt: "DVD Premium for \"".concat(premiumTitle, "\""),
    src: premiumImgUrl
  })), (0, _core.jsx)("div", {
    className: "premium-description"
  }, (0, _core.jsx)(_reactMedia.default, {
    query: "(max-width: 649px)"
  }, function (matches) {
    return matches ? (0, _core.jsx)("ul", {
      className: "premium-description__list"
    }, shortDescriptions.map(function (desc, idx) {
      return (0, _core.jsx)("li", {
        key: "premdesc-".concat(idx),
        className: "premium-description__list--item",
        dangerouslySetInnerHTML: {
          __html: desc
        }
      });
    })) : (0, _core.jsx)("ul", {
      className: "premium-description__list"
    }, premiumDescriptions.map(function (desc, idx) {
      return (0, _core.jsx)("li", {
        key: "premdesc-".concat(idx),
        className: "premium-description__list--item",
        dangerouslySetInnerHTML: {
          __html: desc
        }
      });
    }));
  }))));
};

var _default = PremiumBlock;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PremiumIntro, "PremiumIntro", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/PremiumBlock.js");
  reactHotLoader.register(PremuimInfoBlock, "PremuimInfoBlock", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/PremiumBlock.js");
  reactHotLoader.register(PremiumBlock, "PremiumBlock", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/PremiumBlock.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/PremiumBlock.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","react-media":"node_modules/react-media/esm/react-media.js"}],"src/Components/FormComponents/Blocks/OtherGivingBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _FormConfigProvider = require("../../Contexts/FormConfigProvider");

var _Card = require("../StyledComponents/Card");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var OtherGivingBlock = function OtherGivingBlock() {
  var _useContext = (0, _react.useContext)(_FormConfigProvider.FormConfigContext),
      getCssConfig = _useContext.getCssConfig;

  var _useMemo = (0, _react.useMemo)(function () {
    return getCssConfig("link");
  }, []),
      _useMemo$linkColor = _useMemo.linkColor,
      linkColor = _useMemo$linkColor === void 0 ? "#009BDf" : _useMemo$linkColor,
      _useMemo$linkHoverCol = _useMemo.linkHoverColor,
      linkHoverColor = _useMemo$linkHoverCol === void 0 ? "#0069ad" : _useMemo$linkHoverCol,
      _useMemo$linkTextDeco = _useMemo.linkTextDecoration,
      linkTextDecoration = _useMemo$linkTextDeco === void 0 ? "none" : _useMemo$linkTextDeco,
      _useMemo$linkHoverTex = _useMemo.linkHoverTextDecoration,
      linkHoverTextDecoration = _useMemo$linkHoverTex === void 0 ? "underline" : _useMemo$linkHoverTex;

  return (0, _core.jsx)(_Card.CardSection, null, (0, _core.jsx)(_Card.CardContainer, null, (0, _core.jsx)(_Card.Card, {
    className: "card"
  }, (0, _core.jsx)("h4", {
    className: "card__title"
  }, "Give By Phone"), (0, _core.jsx)("div", {
    className: "card__body"
  }, (0, _core.jsx)("div", {
    className: "phone"
  }, (0, _core.jsx)("a", {
    href: "tel:18007007000"
  }, "1-800-700-7000")), (0, _core.jsx)("div", {
    className: "phone--info"
  }, "Donate by phone or get assistance with your donation."))), (0, _core.jsx)(_Card.Card, {
    className: "card",
    linkColor: linkColor,
    linkHoverColor: linkHoverColor,
    linkTextDecoration: linkTextDecoration,
    linkHoverTextDecoration: linkHoverTextDecoration
  }, (0, _core.jsx)("h4", {
    className: "card__title"
  }, "Mail-In Giving Form"), (0, _core.jsx)("div", {
    className: "card__body"
  }, (0, _core.jsx)("div", {
    className: "mail-in-form"
  }, "To donate by check or to a specific cause, please complete this", " ", (0, _core.jsx)("a", {
    href: "https://www.cbn.com/giving/700club/option.aspx?o=4"
  }, "donation form"), " ", "by printing and mailing to:"), (0, _core.jsx)("div", {
    className: "cbn-address"
  }, (0, _core.jsx)("div", {
    className: "cbn-address--street"
  }, "977 Centerville Turnpike,"), (0, _core.jsx)("div", {
    className: "cbn-address--city-state-zip"
  }, "Virginia Beach, VA 23463")))), (0, _core.jsx)(_Card.Card, {
    className: "card",
    linkColor: linkColor,
    linkHoverColor: linkHoverColor,
    linkTextDecoration: linkTextDecoration,
    linkHoverTextDecoration: linkHoverTextDecoration
  }, (0, _core.jsx)("h4", {
    className: "card__title"
  }, "More Ways To Give"), (0, _core.jsx)("div", {
    className: "card__body"
  }, (0, _core.jsx)("a", {
    className: "giving-links",
    href: "https://www.cbn.com/giving/700club/pledgeExpress.aspx"
  }, "Pledge Giving"), (0, _core.jsx)("a", {
    className: "giving-links",
    href: "http://www.cbnlegacy.org/"
  }, "Planned Giving & Your Legacy"), (0, _core.jsx)("a", {
    className: "giving-links",
    href: "https://www.cbn.com/giving/livingtributes/"
  }, "Memorial & Tribute Gifts"), (0, _core.jsx)("a", {
    className: "giving-links",
    href: "https://www.cbn.com/partners/matchinggifts.aspx"
  }, "Employer Matching"), (0, _core.jsx)("a", {
    className: "giving-links",
    href: "https://www.cbn.com/giving/700club/stockgifts.aspx"
  }, "Stock Gifts"), (0, _core.jsx)("a", {
    className: "giving-links",
    href: "https://www.cbn.com/giving/700club/workplacegiving.aspx"
  }, "Workplace Giving")))));
};

__signature__(OtherGivingBlock, "useContext{{ getCssConfig }}\nuseMemo{{\n\t\tlinkColor = \"#009BDf\",\n\t\tlinkHoverColor = \"#0069ad\",\n\t\tlinkTextDecoration = \"none\",\n\t\tlinkHoverTextDecoration = \"underline\",\n\t}}");

var _default = (0, _react.memo)(OtherGivingBlock);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(OtherGivingBlock, "OtherGivingBlock", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/OtherGivingBlock.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/OtherGivingBlock.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","../../Contexts/FormConfigProvider":"src/Components/Contexts/FormConfigProvider.js","../StyledComponents/Card":"src/Components/FormComponents/StyledComponents/Card.js"}],"src/Components/Forms/AskForm.js":[function(require,module,exports) {
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

var _reactMedia = _interopRequireDefault(require("react-media"));

var _GivingFormProvider = require("../Contexts/GivingFormProvider");

var _FormWrapper = _interopRequireDefault(require("../StyledComponents/FormWrapper"));

var _ClubLayout = _interopRequireDefault(require("../FormComponents/Layouts/ClubLayout"));

var _PremiumBlock = _interopRequireDefault(require("../FormComponents/Blocks/PremiumBlock"));

var _DesignationBlock = _interopRequireDefault(require("../FormComponents/Blocks/DesignationBlock"));

var _FormPanel = _interopRequireDefault(require("../FormComponents/StyledComponents/FormPanel"));

var _FieldSet = _interopRequireDefault(require("../FormComponents/StyledComponents/FieldSet"));

var _FormHeader = _interopRequireDefault(require("../FormComponents/StyledComponents/FormHeader"));

var _Seals = _interopRequireDefault(require("../FormComponents/FunctionalComponents/Seals"));

var _SubmitButton = _interopRequireDefault(require("../FormComponents/FunctionalComponents/SubmitButton"));

require("../FormComponents/Animations/designations.css");

var _OtherGivingBlock = _interopRequireDefault(require("../FormComponents/Blocks/OtherGivingBlock"));

var _HeaderBlock = _interopRequireDefault(require("../FormComponents/Blocks/HeaderBlock"));

var _FooterBlock = _interopRequireDefault(require("../FormComponents/Blocks/FooterBlock"));

var _scrollToPoint = require("../../helpers/scrollToPoint");

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
      monthlyChecked: _this.props.defaultOption == "monthly",
      scrolled: false,
      initialUpdate: true
    };

    _this.handleRadioClick = function (e) {
      var id = e.target.id; // console.log(id)

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
      var name = target.name;

      _this.context.validateAndUpdateField({
        type: "UPDATE_FIELD",
        name: name
      });
    };

    _this.handleSubmit =
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(e) {
        var isValidSubmission;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return _this.context.submitAskForm({
                  type: "SUBMIT_ASK_FORM"
                });

              case 3:
                isValidSubmission = _context.sent;

                if (isValidSubmission) {
                  _this.setState({
                    scrolled: false
                  });
                }

              case 5:
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
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate() {
      var selected = this.context.selected;
      var _this$state = this.state,
          scrolled = _this$state.scrolled,
          initialUpdate = _this$state.initialUpdate;

      if (selected && initialUpdate) {
        console.log("Selection Snapshot on Ask");
        return true;
      }

      if (!selected && !scrolled && !initialUpdate) {
        console.log("Scrolling Snapshot on Ask");
        return true;
      }

      return null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (snapshot && this.context.selected && this.state.initialUpdate) {
        this.setState({
          initialUpdate: false
        });
      } else if (snapshot && !this.state.scrolled && !this.context.selected) {
        this.setState({
          scrolled: true
        }, function () {
          var target = document.getElementById("react-club-ask-form");
          var top = (0, _scrollToPoint.offsetTop)(target);
          (0, _scrollToPoint.scrollToPoint)(top);
        });
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
          premiumData = _this$props2.premiumData,
          formBackgroundColor = _this$props2.formBackgroundColor,
          formBorderColor = _this$props2.formBorderColor,
          formBorderRadius = _this$props2.formBorderRadius,
          formBorderWidth = _this$props2.formBorderWidth,
          formBoxShadow = _this$props2.formBoxShadow,
          formColor = _this$props2.formColor,
          formMargin = _this$props2.formMargin,
          formMaxWidth = _this$props2.formMaxWidth,
          formPadding = _this$props2.formPadding;
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
          selected = _this$context.selected;
      var hasErrors = errors.amount !== "";
      return !selected ? (0, _core.jsx)(_react.default.Fragment, null, (0, _core.jsx)(_HeaderBlock.default, null), (0, _core.jsx)(_FormWrapper.default, {
        formBackgroundColor: formBackgroundColor,
        formBorderColor: formBorderColor,
        formBorderRadius: formBorderRadius,
        formBorderWidth: formBorderWidth,
        formBoxShadow: formBoxShadow,
        formMaxWidth: formMaxWidth,
        formPadding: formPadding,
        formMargin: formMargin,
        formColor: formColor,
        inProp: !selected
      }, (0, _core.jsx)("form", {
        id: "react-club-ask-form",
        autoComplete: "off",
        onSubmit: this.handleSubmit,
        style: {
          backgroundColor: "white"
        }
      }, (0, _core.jsx)(_reactMedia.default, {
        query: "(max-width: 649px)"
      }, function (matches) {
        return matches ? null : (0, _core.jsx)(_FormHeader.default, {
          className: "form-title form-header",
          style: {
            fontSize: "19px",
            marginTop: "0",
            color: "#181818"
          }
        }, formTitle);
      }), (0, _core.jsx)(_PremiumBlock.default, {
        premiumData: premiumData,
        monthlyChecked: monthlyChecked
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
        className: "form-panel designaton-panel"
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
        value: submitButtonText
      }))))), (0, _core.jsx)(_Seals.default, null), (0, _core.jsx)(_OtherGivingBlock.default, null), (0, _core.jsx)(_FooterBlock.default, null)) : null;
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
},{"@babel/runtime/regenerator":"node_modules/@babel/runtime/regenerator/index.js","@babel/runtime/helpers/asyncToGenerator":"node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/inherits":"node_modules/@babel/runtime/helpers/inherits.js","@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","react-transition-group":"node_modules/react-transition-group/esm/index.js","react-media":"node_modules/react-media/esm/react-media.js","../Contexts/GivingFormProvider":"src/Components/Contexts/GivingFormProvider.js","../StyledComponents/FormWrapper":"src/Components/StyledComponents/FormWrapper.js","../FormComponents/Layouts/ClubLayout":"src/Components/FormComponents/Layouts/ClubLayout.js","../FormComponents/Blocks/PremiumBlock":"src/Components/FormComponents/Blocks/PremiumBlock.js","../FormComponents/Blocks/DesignationBlock":"src/Components/FormComponents/Blocks/DesignationBlock.js","../FormComponents/StyledComponents/FormPanel":"src/Components/FormComponents/StyledComponents/FormPanel.js","../FormComponents/StyledComponents/FieldSet":"src/Components/FormComponents/StyledComponents/FieldSet.js","../FormComponents/StyledComponents/FormHeader":"src/Components/FormComponents/StyledComponents/FormHeader.js","../FormComponents/FunctionalComponents/Seals":"src/Components/FormComponents/FunctionalComponents/Seals.js","../FormComponents/FunctionalComponents/SubmitButton":"src/Components/FormComponents/FunctionalComponents/SubmitButton.js","../FormComponents/Animations/designations.css":"src/Components/FormComponents/Animations/designations.css","../FormComponents/Blocks/OtherGivingBlock":"src/Components/FormComponents/Blocks/OtherGivingBlock.js","../FormComponents/Blocks/HeaderBlock":"src/Components/FormComponents/Blocks/HeaderBlock.js","../FormComponents/Blocks/FooterBlock":"src/Components/FormComponents/Blocks/FooterBlock.js","../../helpers/scrollToPoint":"src/helpers/scrollToPoint.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50234" + '/');

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