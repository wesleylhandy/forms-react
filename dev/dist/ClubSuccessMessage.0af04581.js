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
})({"src/Components/FormComponents/Blocks/SuccessCardBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _Card = require("../StyledComponents/Card");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var SuccessCardBlock = function SuccessCardBlock(_ref) {
  var sectionTitle = _ref.sectionTitle,
      premiumTitle = _ref.premiumTitle,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? "818px" : _ref$maxWidth,
      linkColor = _ref.linkColor,
      linkHoverColor = _ref.linkHoverColor,
      linkTextDecoration = _ref.linkTextDecoration,
      linkHoverTextDecoration = _ref.linkHoverTextDecoration;
  return (0, _core.jsx)(_Card.CardSection, null, sectionTitle && (0, _core.jsx)("h3", null, sectionTitle), (0, _core.jsx)(_Card.CardContainer, {
    maxWidth: maxWidth
  }, (0, _core.jsx)(_Card.Card, {
    className: "card"
  }, (0, _core.jsx)("h4", {
    className: "card__title"
  }, "Exclusive Online Access"), (0, _core.jsx)("div", {
    className: "card__body"
  }, (0, _core.jsx)("div", {
    className: "gift-info"
  }, "When you join The 700 Club, you will receive an email to video stream ", (0, _core.jsx)("em", null, premiumTitle), " by Pat Robertson."))), (0, _core.jsx)(_Card.Card, {
    className: "card",
    linkColor: linkColor,
    linkHoverColor: linkHoverColor,
    linkTextDecoration: linkTextDecoration,
    linkHoverTextDecoration: linkHoverTextDecoration
  }, (0, _core.jsx)("h4", {
    className: "card__title"
  }, "Email Updates"), (0, _core.jsx)("div", {
    className: "card__body"
  }, (0, _core.jsx)("div", {
    className: "gift-info"
  }, "Get the latest reports about how your donations are making an impact throughout the world and stay up-to-date with CBN.com", " ", (0, _core.jsx)("a", {
    href: ""
  }, "View Email Updates"))))));
};

var _default = SuccessCardBlock;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SuccessCardBlock, "SuccessCardBlock", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/SuccessCardBlock.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/SuccessCardBlock.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","../StyledComponents/Card":"src/Components/FormComponents/StyledComponents/Card.js"}],"src/Components/SuccessPages/ClubSuccessMessage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _GivingFormProvider = require("../Contexts/GivingFormProvider");

var _FormConfigProvider = require("../Contexts/FormConfigProvider");

var _reactAriaLive = require("react-aria-live");

var _FormWrapper = _interopRequireDefault(require("../StyledComponents/FormWrapper"));

var _FormPanel = _interopRequireDefault(require("../FormComponents/StyledComponents/FormPanel"));

var _HeaderBlock = _interopRequireDefault(require("../FormComponents/Blocks/HeaderBlock"));

var _FooterBlock = _interopRequireDefault(require("../FormComponents/Blocks/FooterBlock"));

var _SuccessCardBlock = _interopRequireDefault(require("../FormComponents/Blocks/SuccessCardBlock"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ThankYouMessage = (0, _styledBase.default)("div", {
  target: "epzi79e0",
  label: "ThankYouMessage"
})("development" === "production" ? {
  name: "vtsrpg",
  styles: "div{font-size:19px;line-height:23px;}div + div{margin-top:20px;}"
} : {
  name: "vtsrpg",
  styles: "div{font-size:19px;line-height:23px;}div + div{margin-top:20px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsdWJTdWNjZXNzTWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZa0MiLCJmaWxlIjoiQ2x1YlN1Y2Nlc3NNZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZU1lbW8sIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgR2l2aW5nRm9ybUNvbnRleHQgfSBmcm9tIFwiLi4vQ29udGV4dHMvR2l2aW5nRm9ybVByb3ZpZGVyXCI7XG5pbXBvcnQgeyBGb3JtQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuLi9Db250ZXh0cy9Gb3JtQ29uZmlnUHJvdmlkZXJcIjtcbmltcG9ydCB7IExpdmVNZXNzYWdlIH0gZnJvbSBcInJlYWN0LWFyaWEtbGl2ZVwiO1xuXG5pbXBvcnQgRm9ybVdyYXBwZXIgZnJvbSBcIi4uL1N0eWxlZENvbXBvbmVudHMvRm9ybVdyYXBwZXJcIjtcbmltcG9ydCBGb3JtUGFuZWwgZnJvbSBcIi4uL0Zvcm1Db21wb25lbnRzL1N0eWxlZENvbXBvbmVudHMvRm9ybVBhbmVsXCI7XG5pbXBvcnQgSGVhZGVyQmxvY2sgZnJvbSBcIi4uL0Zvcm1Db21wb25lbnRzL0Jsb2Nrcy9IZWFkZXJCbG9ja1wiO1xuaW1wb3J0IEZvb3RlckJsb2NrIGZyb20gXCIuLi9Gb3JtQ29tcG9uZW50cy9CbG9ja3MvRm9vdGVyQmxvY2tcIjtcbmltcG9ydCBTdWNjZXNzQ2FyZEJsb2NrIGZyb20gXCIuLi9Gb3JtQ29tcG9uZW50cy9CbG9ja3MvU3VjY2Vzc0NhcmRCbG9ja1wiO1xuXG5jb25zdCBUaGFua1lvdU1lc3NhZ2UgPSBzdHlsZWQuZGl2YFxuXHRkaXYge1xuXHRcdGZvbnQtc2l6ZTogMTlweDtcblx0XHRsaW5lLWhlaWdodDogMjNweDtcblx0fVxuXHRkaXYgKyBkaXYge1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdH1cbmA7XG5cbmNvbnN0IFNpZ25hdHVyZUJsb2NrID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBsZWZ0O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXJnaW46IDEwcHggMDtcblx0ZGl2LnNpZ25hdHVyZS1pbWcge1xuXHRcdHdpZHRoOiAxMjVweDtcblx0XHRoZWlnaHQ6IDEyNXB4O1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdG1hcmdpbi1yaWdodDogMjBweDtcblx0XHQuaW1nLXJlc3BvbnNpdmUge1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwcHgpO1xuXHRcdH1cblx0fVxuXHRkaXYuc2lnbmF0dXJlLWJsb2NrIHtcblx0XHRtYXJnaW46IDIwcHggMDtcblx0XHRmbGV4OiAxIDEgYXV0bztcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRhbGlnbi1pdGVtczogbGVmdDtcblx0XHRkaXYge1xuXHRcdFx0Zm9udC1zaXplOiAxOXB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDIzcHg7XG5cdFx0XHQmID4gZW0ge1xuXHRcdFx0XHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdFx0XHR9XG5cdFx0XHQuaW1nLXJlc3BvbnNpdmUge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0aGVpZ2h0OiA2MHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuYDtcblxuY29uc3QgUG9zdFNjcmlwdCA9IHN0eWxlZC5kaXZgXG5cdGRpdiB7XG5cdFx0Zm9udC1zaXplOiAxOXB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAyM3B4O1xuXHRcdGEge1xuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5saW5rQ29sb3J9O1xuXHRcdFx0dGV4dGRlY29yYXRpb246ICR7cHJvcHMgPT4gcHJvcHMubGlua1RleHREZWNvcmF0aW9ufTtcblx0XHRcdHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0O1xuXHRcdFx0Jjpob3Zlcixcblx0XHRcdCY6YWN0aXZlLFxuXHRcdFx0Jjpmb2N1cyB7XG5cdFx0XHRcdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmxpbmtIb3ZlckNvbG9yfTtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiAke3Byb3BzID0+IHByb3BzLmxpbmtIb3ZlclRleHREZWNvcmF0aW9ufTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZGl2ICsgZGl2IHtcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHR9XG5gO1xuXG5jb25zdCBDbHViU3VjY2Vzc01lc3NhZ2UgPSAoe1xuXHRjb25maXJtZWQsXG5cdHN1Y2Nlc3NNZXNzYWdlOiB7IG1vbnRobHksIHNpbmdsZSwgaW1hZ2UsIHNpZ25hdHVyZSwgcG9zdFNjcmlwdCB9LFxufSkgPT4ge1xuXHRjb25zdCB7XG5cdFx0dHJhY2tpbmdWYXJzID0gW10sXG5cdFx0ZmllbGRzOiB7IEZpcnN0bmFtZSB9LFxuXHRcdGRlc2lnbmF0aW9uSW5mbzogeyB0aXRsZSB9LFxuXHR9ID0gdXNlQ29udGV4dChHaXZpbmdGb3JtQ29udGV4dCk7XG5cdGNvbnN0IHsgZ2V0Q3NzQ29uZmlnLCBnZXRGb3JtQ29uZmlnIH0gPSB1c2VDb250ZXh0KEZvcm1Db25maWdDb250ZXh0KTtcblx0Y29uc3QgdHJhY2tpbmdPYmogPSB0cmFja2luZ1ZhcnMucmVkdWNlKChvYmosIHZhcmlhYmxlKSA9PiB7XG5cdFx0Zm9yIChsZXQga2V5IGluIHZhcmlhYmxlKSB7XG5cdFx0XHRvYmpba2V5XSA9IHZhcmlhYmxlW2tleV07XG5cdFx0fVxuXHRcdHJldHVybiBvYmo7XG5cdH0sIHt9KTtcblx0Y29uc3QgaXNNb250aGx5ID0gdHJhY2tpbmdPYmpbXCJvbV9zTW9udGhseVBsZWRnZVwiXSA9PT0gXCJZXCI7XG5cdGxldCBtZXNzYWdlID0gaXNNb250aGx5ID8gbW9udGhseSA6IHNpbmdsZTtcblx0bWVzc2FnZSA9IG1lc3NhZ2Vcblx0XHQucmVwbGFjZShcIiNGaXJzdE5hbWUjXCIsIEZpcnN0bmFtZSlcblx0XHQucmVwbGFjZShcIiNEZXNpZ25hdGlvbiNcIiwgdGl0bGUpO1xuXHRjb25zdCBzZWN0aW9uVGl0bGUgPSBpc01vbnRobHkgPyBcIkZyZWUgR2lmdHMgVG8gWW91XCIgOiBcIlwiO1xuXHRjb25zdCB7XG5cdFx0bGlua0NvbG9yID0gXCIjMDA5QkRmXCIsXG5cdFx0bGlua0hvdmVyQ29sb3IgPSBcIiMwMDY5YWRcIixcblx0XHRsaW5rVGV4dERlY29yYXRpb24gPSBcIm5vbmVcIixcblx0XHRsaW5rSG92ZXJUZXh0RGVjb3JhdGlvbiA9IFwidW5kZXJsaW5lXCIsXG5cdH0gPSB1c2VNZW1vKCgpID0+IGdldENzc0NvbmZpZyhcImxpbmtcIiksIFtdKTtcblx0Y29uc3Qge1xuXHRcdGZvcm1CYWNrZ3JvdW5kQ29sb3IsXG5cdFx0Zm9ybUJvcmRlckNvbG9yLFxuXHRcdGZvcm1Cb3JkZXJSYWRpdXMsXG5cdFx0Zm9ybUJvcmRlcldpZHRoLFxuXHRcdGZvcm1Cb3hTaGFkb3csXG5cdFx0Zm9ybUNvbG9yLFxuXHRcdGZvcm1NYXJnaW4sXG5cdFx0Zm9ybU1heFdpZHRoLFxuXHRcdGZvcm1QYWRkaW5nLFxuXHR9ID0gdXNlTWVtbygoKSA9PiBnZXRDc3NDb25maWcoXCJmb3JtXCIpLCBbXSk7XG5cdGNvbnN0IHsgcHJlbWl1bVRpdGxlIH0gPSB1c2VNZW1vKCgpID0+IGdldEZvcm1Db25maWcoXCJwcmVtaXVtRGF0YVwiKSwgW10pO1xuXHRyZXR1cm4gKFxuXHRcdGNvbmZpcm1lZCAmJiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8SGVhZGVyQmxvY2tcblx0XHRcdFx0XHRzdWNjZXNzVGl0bGU9XCJBbGwgRG9uZVwiXG5cdFx0XHRcdFx0c3VjY2Vzc0Rlc2NyaXB0aW9uPVwiVGhhbmsgWW91IEZvciBZb3VyIENvbnRyaWJ1dGlvbi5cIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8TGl2ZU1lc3NhZ2Vcblx0XHRcdFx0XHRtZXNzYWdlPXtcblx0XHRcdFx0XHRcdFwiWW91ciBwYXltZW50IGhhcyBiZWluZyBwcm9jZXNzZWQuIEEgbmV3IHBhZ2Ugd2l0aCBhIHRoYW5rIHlvdSBtZXNzYWdlIGp1c3QgbG9hZGVkLlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxGb3JtV3JhcHBlclxuXHRcdFx0XHRcdGZvcm1CYWNrZ3JvdW5kQ29sb3I9e2Zvcm1CYWNrZ3JvdW5kQ29sb3J9XG5cdFx0XHRcdFx0Zm9ybUJvcmRlckNvbG9yPXtmb3JtQm9yZGVyQ29sb3J9XG5cdFx0XHRcdFx0Zm9ybUJvcmRlclJhZGl1cz17Zm9ybUJvcmRlclJhZGl1c31cblx0XHRcdFx0XHRmb3JtQm9yZGVyV2lkdGg9e2Zvcm1Cb3JkZXJXaWR0aH1cblx0XHRcdFx0XHRmb3JtQm94U2hhZG93PXtmb3JtQm94U2hhZG93fVxuXHRcdFx0XHRcdGZvcm1NYXhXaWR0aD17Zm9ybU1heFdpZHRofVxuXHRcdFx0XHRcdGZvcm1QYWRkaW5nPXtmb3JtUGFkZGluZ31cblx0XHRcdFx0XHRmb3JtTWFyZ2luPXtmb3JtTWFyZ2lufVxuXHRcdFx0XHRcdGZvcm1Db2xvcj17Zm9ybUNvbG9yfVxuXHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIzMHB4XCIgfX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxGb3JtUGFuZWwgY2xhc3NOYW1lPVwic3VjY2Vzcy1tZXNzYWdlXCI+XG5cdFx0XHRcdFx0XHQ8VGhhbmtZb3VNZXNzYWdlXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRoYW5rLXlvdVwiXG5cdFx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVzc2FnZSB9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxTaWduYXR1cmVCbG9jaz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWduYXR1cmUtaW1nXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpbWFnZX1cblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlBhdCBSb2JlcnRzb25cIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZ25hdHVyZS1ibG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+WW91cnMgaW4gQ2hyaXN0LDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZW0+UGF0IFJvYmVydHNvbjwvZW0+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9e3NpZ25hdHVyZX0gYWx0PVwiUGF0XCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L1NpZ25hdHVyZUJsb2NrPlxuXHRcdFx0XHRcdFx0PFBvc3RTY3JpcHRcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGhhbmsteW91XCJcblx0XHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0U2NyaXB0IH19XG5cdFx0XHRcdFx0XHRcdGxpbmtDb2xvcj17bGlua0NvbG9yfVxuXHRcdFx0XHRcdFx0XHRsaW5rSG92ZXJDb2xvcj17bGlua0hvdmVyQ29sb3J9XG5cdFx0XHRcdFx0XHRcdGxpbmtUZXh0RGVjb3JhdGlvbj17bGlua1RleHREZWNvcmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRsaW5rSG92ZXJUZXh0RGVjb3JhdGlvbj17bGlua0hvdmVyVGV4dERlY29yYXRpb259XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybVBhbmVsPlxuXHRcdFx0XHQ8L0Zvcm1XcmFwcGVyPlxuXHRcdFx0XHQ8U3VjY2Vzc0NhcmRCbG9ja1xuXHRcdFx0XHRcdG1heFdpZHRoPXtmb3JtTWF4V2lkdGh9XG5cdFx0XHRcdFx0cHJlbWl1bVRpdGxlPXtwcmVtaXVtVGl0bGV9XG5cdFx0XHRcdFx0c2VjdGlvblRpdGxlPXtzZWN0aW9uVGl0bGV9XG5cdFx0XHRcdFx0bGlua0NvbG9yPXtsaW5rQ29sb3J9XG5cdFx0XHRcdFx0bGlua0hvdmVyQ29sb3I9e2xpbmtIb3ZlckNvbG9yfVxuXHRcdFx0XHRcdGxpbmtUZXh0RGVjb3JhdGlvbj17bGlua1RleHREZWNvcmF0aW9ufVxuXHRcdFx0XHRcdGxpbmtIb3ZlclRleHREZWNvcmF0aW9uPXtsaW5rSG92ZXJUZXh0RGVjb3JhdGlvbn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEZvb3RlckJsb2NrIC8+XG5cdFx0XHQ8Lz5cblx0XHQpXG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKENsdWJTdWNjZXNzTWVzc2FnZSk7XG4iXX0= */"
});
var SignatureBlock = (0, _styledBase.default)("div", {
  target: "epzi79e1",
  label: "SignatureBlock"
})("development" === "production" ? {
  name: "1ra7bs8",
  styles: "display:flex;flex-direction:row;justify-content:left;align-items:center;margin:10px 0;div.signature-img{width:125px;height:125px;overflow:hidden;border-radius:50%;margin-right:20px;.img-responsive{display:block;height:100%;transform:translateX(-30px);}}div.signature-block{margin:20px 0;flex:1 1 auto;display:flex;flex-direction:column;justify-content:flex-end;align-items:left;div{font-size:19px;line-height:23px;& > em{font-style:italic;}.img-responsive{display:block;height:60px;}}}"
} : {
  name: "1ra7bs8",
  styles: "display:flex;flex-direction:row;justify-content:left;align-items:center;margin:10px 0;div.signature-img{width:125px;height:125px;overflow:hidden;border-radius:50%;margin-right:20px;.img-responsive{display:block;height:100%;transform:translateX(-30px);}}div.signature-block{margin:20px 0;flex:1 1 auto;display:flex;flex-direction:column;justify-content:flex-end;align-items:left;div{font-size:19px;line-height:23px;& > em{font-style:italic;}.img-responsive{display:block;height:60px;}}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsdWJTdWNjZXNzTWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmlDIiwiZmlsZSI6IkNsdWJTdWNjZXNzTWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VNZW1vLCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEdpdmluZ0Zvcm1Db250ZXh0IH0gZnJvbSBcIi4uL0NvbnRleHRzL0dpdmluZ0Zvcm1Qcm92aWRlclwiO1xuaW1wb3J0IHsgRm9ybUNvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi4vQ29udGV4dHMvRm9ybUNvbmZpZ1Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBMaXZlTWVzc2FnZSB9IGZyb20gXCJyZWFjdC1hcmlhLWxpdmVcIjtcblxuaW1wb3J0IEZvcm1XcmFwcGVyIGZyb20gXCIuLi9TdHlsZWRDb21wb25lbnRzL0Zvcm1XcmFwcGVyXCI7XG5pbXBvcnQgRm9ybVBhbmVsIGZyb20gXCIuLi9Gb3JtQ29tcG9uZW50cy9TdHlsZWRDb21wb25lbnRzL0Zvcm1QYW5lbFwiO1xuaW1wb3J0IEhlYWRlckJsb2NrIGZyb20gXCIuLi9Gb3JtQ29tcG9uZW50cy9CbG9ja3MvSGVhZGVyQmxvY2tcIjtcbmltcG9ydCBGb290ZXJCbG9jayBmcm9tIFwiLi4vRm9ybUNvbXBvbmVudHMvQmxvY2tzL0Zvb3RlckJsb2NrXCI7XG5pbXBvcnQgU3VjY2Vzc0NhcmRCbG9jayBmcm9tIFwiLi4vRm9ybUNvbXBvbmVudHMvQmxvY2tzL1N1Y2Nlc3NDYXJkQmxvY2tcIjtcblxuY29uc3QgVGhhbmtZb3VNZXNzYWdlID0gc3R5bGVkLmRpdmBcblx0ZGl2IHtcblx0XHRmb250LXNpemU6IDE5cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDIzcHg7XG5cdH1cblx0ZGl2ICsgZGl2IHtcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHR9XG5gO1xuXG5jb25zdCBTaWduYXR1cmVCbG9jayA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogbGVmdDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0bWFyZ2luOiAxMHB4IDA7XG5cdGRpdi5zaWduYXR1cmUtaW1nIHtcblx0XHR3aWR0aDogMTI1cHg7XG5cdFx0aGVpZ2h0OiAxMjVweDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cdFx0LmltZy1yZXNwb25zaXZlIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KTtcblx0XHR9XG5cdH1cblx0ZGl2LnNpZ25hdHVyZS1ibG9jayB7XG5cdFx0bWFyZ2luOiAyMHB4IDA7XG5cdFx0ZmxleDogMSAxIGF1dG87XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0YWxpZ24taXRlbXM6IGxlZnQ7XG5cdFx0ZGl2IHtcblx0XHRcdGZvbnQtc2l6ZTogMTlweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAyM3B4O1xuXHRcdFx0JiA+IGVtIHtcblx0XHRcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRcdFx0fVxuXHRcdFx0LmltZy1yZXNwb25zaXZlIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdGhlaWdodDogNjBweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbmA7XG5cbmNvbnN0IFBvc3RTY3JpcHQgPSBzdHlsZWQuZGl2YFxuXHRkaXYge1xuXHRcdGZvbnQtc2l6ZTogMTlweDtcblx0XHRsaW5lLWhlaWdodDogMjNweDtcblx0XHRhIHtcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMubGlua0NvbG9yfTtcblx0XHRcdHRleHRkZWNvcmF0aW9uOiAke3Byb3BzID0+IHByb3BzLmxpbmtUZXh0RGVjb3JhdGlvbn07XG5cdFx0XHR0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluLW91dDtcblx0XHRcdCY6aG92ZXIsXG5cdFx0XHQmOmFjdGl2ZSxcblx0XHRcdCY6Zm9jdXMge1xuXHRcdFx0XHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5saW5rSG92ZXJDb2xvcn07XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogJHtwcm9wcyA9PiBwcm9wcy5saW5rSG92ZXJUZXh0RGVjb3JhdGlvbn07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGRpdiArIGRpdiB7XG5cdFx0bWFyZ2luLXRvcDogMjBweDtcblx0fVxuYDtcblxuY29uc3QgQ2x1YlN1Y2Nlc3NNZXNzYWdlID0gKHtcblx0Y29uZmlybWVkLFxuXHRzdWNjZXNzTWVzc2FnZTogeyBtb250aGx5LCBzaW5nbGUsIGltYWdlLCBzaWduYXR1cmUsIHBvc3RTY3JpcHQgfSxcbn0pID0+IHtcblx0Y29uc3Qge1xuXHRcdHRyYWNraW5nVmFycyA9IFtdLFxuXHRcdGZpZWxkczogeyBGaXJzdG5hbWUgfSxcblx0XHRkZXNpZ25hdGlvbkluZm86IHsgdGl0bGUgfSxcblx0fSA9IHVzZUNvbnRleHQoR2l2aW5nRm9ybUNvbnRleHQpO1xuXHRjb25zdCB7IGdldENzc0NvbmZpZywgZ2V0Rm9ybUNvbmZpZyB9ID0gdXNlQ29udGV4dChGb3JtQ29uZmlnQ29udGV4dCk7XG5cdGNvbnN0IHRyYWNraW5nT2JqID0gdHJhY2tpbmdWYXJzLnJlZHVjZSgob2JqLCB2YXJpYWJsZSkgPT4ge1xuXHRcdGZvciAobGV0IGtleSBpbiB2YXJpYWJsZSkge1xuXHRcdFx0b2JqW2tleV0gPSB2YXJpYWJsZVtrZXldO1xuXHRcdH1cblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGNvbnN0IGlzTW9udGhseSA9IHRyYWNraW5nT2JqW1wib21fc01vbnRobHlQbGVkZ2VcIl0gPT09IFwiWVwiO1xuXHRsZXQgbWVzc2FnZSA9IGlzTW9udGhseSA/IG1vbnRobHkgOiBzaW5nbGU7XG5cdG1lc3NhZ2UgPSBtZXNzYWdlXG5cdFx0LnJlcGxhY2UoXCIjRmlyc3ROYW1lI1wiLCBGaXJzdG5hbWUpXG5cdFx0LnJlcGxhY2UoXCIjRGVzaWduYXRpb24jXCIsIHRpdGxlKTtcblx0Y29uc3Qgc2VjdGlvblRpdGxlID0gaXNNb250aGx5ID8gXCJGcmVlIEdpZnRzIFRvIFlvdVwiIDogXCJcIjtcblx0Y29uc3Qge1xuXHRcdGxpbmtDb2xvciA9IFwiIzAwOUJEZlwiLFxuXHRcdGxpbmtIb3ZlckNvbG9yID0gXCIjMDA2OWFkXCIsXG5cdFx0bGlua1RleHREZWNvcmF0aW9uID0gXCJub25lXCIsXG5cdFx0bGlua0hvdmVyVGV4dERlY29yYXRpb24gPSBcInVuZGVybGluZVwiLFxuXHR9ID0gdXNlTWVtbygoKSA9PiBnZXRDc3NDb25maWcoXCJsaW5rXCIpLCBbXSk7XG5cdGNvbnN0IHtcblx0XHRmb3JtQmFja2dyb3VuZENvbG9yLFxuXHRcdGZvcm1Cb3JkZXJDb2xvcixcblx0XHRmb3JtQm9yZGVyUmFkaXVzLFxuXHRcdGZvcm1Cb3JkZXJXaWR0aCxcblx0XHRmb3JtQm94U2hhZG93LFxuXHRcdGZvcm1Db2xvcixcblx0XHRmb3JtTWFyZ2luLFxuXHRcdGZvcm1NYXhXaWR0aCxcblx0XHRmb3JtUGFkZGluZyxcblx0fSA9IHVzZU1lbW8oKCkgPT4gZ2V0Q3NzQ29uZmlnKFwiZm9ybVwiKSwgW10pO1xuXHRjb25zdCB7IHByZW1pdW1UaXRsZSB9ID0gdXNlTWVtbygoKSA9PiBnZXRGb3JtQ29uZmlnKFwicHJlbWl1bURhdGFcIiksIFtdKTtcblx0cmV0dXJuIChcblx0XHRjb25maXJtZWQgJiYgKFxuXHRcdFx0PD5cblx0XHRcdFx0PEhlYWRlckJsb2NrXG5cdFx0XHRcdFx0c3VjY2Vzc1RpdGxlPVwiQWxsIERvbmVcIlxuXHRcdFx0XHRcdHN1Y2Nlc3NEZXNjcmlwdGlvbj1cIlRoYW5rIFlvdSBGb3IgWW91ciBDb250cmlidXRpb24uXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PExpdmVNZXNzYWdlXG5cdFx0XHRcdFx0bWVzc2FnZT17XG5cdFx0XHRcdFx0XHRcIllvdXIgcGF5bWVudCBoYXMgYmVpbmcgcHJvY2Vzc2VkLiBBIG5ldyBwYWdlIHdpdGggYSB0aGFuayB5b3UgbWVzc2FnZSBqdXN0IGxvYWRlZC5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhcmlhLWxpdmU9XCJwb2xpdGVcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8Rm9ybVdyYXBwZXJcblx0XHRcdFx0XHRmb3JtQmFja2dyb3VuZENvbG9yPXtmb3JtQmFja2dyb3VuZENvbG9yfVxuXHRcdFx0XHRcdGZvcm1Cb3JkZXJDb2xvcj17Zm9ybUJvcmRlckNvbG9yfVxuXHRcdFx0XHRcdGZvcm1Cb3JkZXJSYWRpdXM9e2Zvcm1Cb3JkZXJSYWRpdXN9XG5cdFx0XHRcdFx0Zm9ybUJvcmRlcldpZHRoPXtmb3JtQm9yZGVyV2lkdGh9XG5cdFx0XHRcdFx0Zm9ybUJveFNoYWRvdz17Zm9ybUJveFNoYWRvd31cblx0XHRcdFx0XHRmb3JtTWF4V2lkdGg9e2Zvcm1NYXhXaWR0aH1cblx0XHRcdFx0XHRmb3JtUGFkZGluZz17Zm9ybVBhZGRpbmd9XG5cdFx0XHRcdFx0Zm9ybU1hcmdpbj17Zm9ybU1hcmdpbn1cblx0XHRcdFx0XHRmb3JtQ29sb3I9e2Zvcm1Db2xvcn1cblx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMzBweFwiIH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8Rm9ybVBhbmVsIGNsYXNzTmFtZT1cInN1Y2Nlc3MtbWVzc2FnZVwiPlxuXHRcdFx0XHRcdFx0PFRoYW5rWW91TWVzc2FnZVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0aGFuay15b3VcIlxuXHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1lc3NhZ2UgfX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8U2lnbmF0dXJlQmxvY2s+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lnbmF0dXJlLWltZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aW1hZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJQYXQgUm9iZXJ0c29uXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWduYXR1cmUtYmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PllvdXJzIGluIENocmlzdCw8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGVtPlBhdCBSb2JlcnRzb248L2VtPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIgc3JjPXtzaWduYXR1cmV9IGFsdD1cIlBhdFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9TaWduYXR1cmVCbG9jaz5cblx0XHRcdFx0XHRcdDxQb3N0U2NyaXB0XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRoYW5rLXlvdVwiXG5cdFx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdFNjcmlwdCB9fVxuXHRcdFx0XHRcdFx0XHRsaW5rQ29sb3I9e2xpbmtDb2xvcn1cblx0XHRcdFx0XHRcdFx0bGlua0hvdmVyQ29sb3I9e2xpbmtIb3ZlckNvbG9yfVxuXHRcdFx0XHRcdFx0XHRsaW5rVGV4dERlY29yYXRpb249e2xpbmtUZXh0RGVjb3JhdGlvbn1cblx0XHRcdFx0XHRcdFx0bGlua0hvdmVyVGV4dERlY29yYXRpb249e2xpbmtIb3ZlclRleHREZWNvcmF0aW9ufVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1QYW5lbD5cblx0XHRcdFx0PC9Gb3JtV3JhcHBlcj5cblx0XHRcdFx0PFN1Y2Nlc3NDYXJkQmxvY2tcblx0XHRcdFx0XHRtYXhXaWR0aD17Zm9ybU1heFdpZHRofVxuXHRcdFx0XHRcdHByZW1pdW1UaXRsZT17cHJlbWl1bVRpdGxlfVxuXHRcdFx0XHRcdHNlY3Rpb25UaXRsZT17c2VjdGlvblRpdGxlfVxuXHRcdFx0XHRcdGxpbmtDb2xvcj17bGlua0NvbG9yfVxuXHRcdFx0XHRcdGxpbmtIb3ZlckNvbG9yPXtsaW5rSG92ZXJDb2xvcn1cblx0XHRcdFx0XHRsaW5rVGV4dERlY29yYXRpb249e2xpbmtUZXh0RGVjb3JhdGlvbn1cblx0XHRcdFx0XHRsaW5rSG92ZXJUZXh0RGVjb3JhdGlvbj17bGlua0hvdmVyVGV4dERlY29yYXRpb259XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxGb290ZXJCbG9jayAvPlxuXHRcdFx0PC8+XG5cdFx0KVxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhDbHViU3VjY2Vzc01lc3NhZ2UpO1xuIl19 */"
});
var PostScript = (0, _styledBase.default)("div", {
  target: "epzi79e2",
  label: "PostScript"
})("div{font-size:19px;line-height:23px;a{font-weight:bold;color:", function (props) {
  return props.linkColor;
}, ";textdecoration:", function (props) {
  return props.linkTextDecoration;
}, ";transition:color 200ms ease-in-out;&:hover,&:active,&:focus{color:", function (props) {
  return props.linkHoverColor;
}, ";text-decoration:", function (props) {
  return props.linkHoverTextDecoration;
}, ";}}}div + div{margin-top:20px;}" + ("development" === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsdWJTdWNjZXNzTWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RDZCIiwiZmlsZSI6IkNsdWJTdWNjZXNzTWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VNZW1vLCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEdpdmluZ0Zvcm1Db250ZXh0IH0gZnJvbSBcIi4uL0NvbnRleHRzL0dpdmluZ0Zvcm1Qcm92aWRlclwiO1xuaW1wb3J0IHsgRm9ybUNvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi4vQ29udGV4dHMvRm9ybUNvbmZpZ1Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBMaXZlTWVzc2FnZSB9IGZyb20gXCJyZWFjdC1hcmlhLWxpdmVcIjtcblxuaW1wb3J0IEZvcm1XcmFwcGVyIGZyb20gXCIuLi9TdHlsZWRDb21wb25lbnRzL0Zvcm1XcmFwcGVyXCI7XG5pbXBvcnQgRm9ybVBhbmVsIGZyb20gXCIuLi9Gb3JtQ29tcG9uZW50cy9TdHlsZWRDb21wb25lbnRzL0Zvcm1QYW5lbFwiO1xuaW1wb3J0IEhlYWRlckJsb2NrIGZyb20gXCIuLi9Gb3JtQ29tcG9uZW50cy9CbG9ja3MvSGVhZGVyQmxvY2tcIjtcbmltcG9ydCBGb290ZXJCbG9jayBmcm9tIFwiLi4vRm9ybUNvbXBvbmVudHMvQmxvY2tzL0Zvb3RlckJsb2NrXCI7XG5pbXBvcnQgU3VjY2Vzc0NhcmRCbG9jayBmcm9tIFwiLi4vRm9ybUNvbXBvbmVudHMvQmxvY2tzL1N1Y2Nlc3NDYXJkQmxvY2tcIjtcblxuY29uc3QgVGhhbmtZb3VNZXNzYWdlID0gc3R5bGVkLmRpdmBcblx0ZGl2IHtcblx0XHRmb250LXNpemU6IDE5cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDIzcHg7XG5cdH1cblx0ZGl2ICsgZGl2IHtcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHR9XG5gO1xuXG5jb25zdCBTaWduYXR1cmVCbG9jayA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogbGVmdDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0bWFyZ2luOiAxMHB4IDA7XG5cdGRpdi5zaWduYXR1cmUtaW1nIHtcblx0XHR3aWR0aDogMTI1cHg7XG5cdFx0aGVpZ2h0OiAxMjVweDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cdFx0LmltZy1yZXNwb25zaXZlIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KTtcblx0XHR9XG5cdH1cblx0ZGl2LnNpZ25hdHVyZS1ibG9jayB7XG5cdFx0bWFyZ2luOiAyMHB4IDA7XG5cdFx0ZmxleDogMSAxIGF1dG87XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0YWxpZ24taXRlbXM6IGxlZnQ7XG5cdFx0ZGl2IHtcblx0XHRcdGZvbnQtc2l6ZTogMTlweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAyM3B4O1xuXHRcdFx0JiA+IGVtIHtcblx0XHRcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRcdFx0fVxuXHRcdFx0LmltZy1yZXNwb25zaXZlIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdGhlaWdodDogNjBweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbmA7XG5cbmNvbnN0IFBvc3RTY3JpcHQgPSBzdHlsZWQuZGl2YFxuXHRkaXYge1xuXHRcdGZvbnQtc2l6ZTogMTlweDtcblx0XHRsaW5lLWhlaWdodDogMjNweDtcblx0XHRhIHtcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMubGlua0NvbG9yfTtcblx0XHRcdHRleHRkZWNvcmF0aW9uOiAke3Byb3BzID0+IHByb3BzLmxpbmtUZXh0RGVjb3JhdGlvbn07XG5cdFx0XHR0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluLW91dDtcblx0XHRcdCY6aG92ZXIsXG5cdFx0XHQmOmFjdGl2ZSxcblx0XHRcdCY6Zm9jdXMge1xuXHRcdFx0XHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5saW5rSG92ZXJDb2xvcn07XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogJHtwcm9wcyA9PiBwcm9wcy5saW5rSG92ZXJUZXh0RGVjb3JhdGlvbn07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGRpdiArIGRpdiB7XG5cdFx0bWFyZ2luLXRvcDogMjBweDtcblx0fVxuYDtcblxuY29uc3QgQ2x1YlN1Y2Nlc3NNZXNzYWdlID0gKHtcblx0Y29uZmlybWVkLFxuXHRzdWNjZXNzTWVzc2FnZTogeyBtb250aGx5LCBzaW5nbGUsIGltYWdlLCBzaWduYXR1cmUsIHBvc3RTY3JpcHQgfSxcbn0pID0+IHtcblx0Y29uc3Qge1xuXHRcdHRyYWNraW5nVmFycyA9IFtdLFxuXHRcdGZpZWxkczogeyBGaXJzdG5hbWUgfSxcblx0XHRkZXNpZ25hdGlvbkluZm86IHsgdGl0bGUgfSxcblx0fSA9IHVzZUNvbnRleHQoR2l2aW5nRm9ybUNvbnRleHQpO1xuXHRjb25zdCB7IGdldENzc0NvbmZpZywgZ2V0Rm9ybUNvbmZpZyB9ID0gdXNlQ29udGV4dChGb3JtQ29uZmlnQ29udGV4dCk7XG5cdGNvbnN0IHRyYWNraW5nT2JqID0gdHJhY2tpbmdWYXJzLnJlZHVjZSgob2JqLCB2YXJpYWJsZSkgPT4ge1xuXHRcdGZvciAobGV0IGtleSBpbiB2YXJpYWJsZSkge1xuXHRcdFx0b2JqW2tleV0gPSB2YXJpYWJsZVtrZXldO1xuXHRcdH1cblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGNvbnN0IGlzTW9udGhseSA9IHRyYWNraW5nT2JqW1wib21fc01vbnRobHlQbGVkZ2VcIl0gPT09IFwiWVwiO1xuXHRsZXQgbWVzc2FnZSA9IGlzTW9udGhseSA/IG1vbnRobHkgOiBzaW5nbGU7XG5cdG1lc3NhZ2UgPSBtZXNzYWdlXG5cdFx0LnJlcGxhY2UoXCIjRmlyc3ROYW1lI1wiLCBGaXJzdG5hbWUpXG5cdFx0LnJlcGxhY2UoXCIjRGVzaWduYXRpb24jXCIsIHRpdGxlKTtcblx0Y29uc3Qgc2VjdGlvblRpdGxlID0gaXNNb250aGx5ID8gXCJGcmVlIEdpZnRzIFRvIFlvdVwiIDogXCJcIjtcblx0Y29uc3Qge1xuXHRcdGxpbmtDb2xvciA9IFwiIzAwOUJEZlwiLFxuXHRcdGxpbmtIb3ZlckNvbG9yID0gXCIjMDA2OWFkXCIsXG5cdFx0bGlua1RleHREZWNvcmF0aW9uID0gXCJub25lXCIsXG5cdFx0bGlua0hvdmVyVGV4dERlY29yYXRpb24gPSBcInVuZGVybGluZVwiLFxuXHR9ID0gdXNlTWVtbygoKSA9PiBnZXRDc3NDb25maWcoXCJsaW5rXCIpLCBbXSk7XG5cdGNvbnN0IHtcblx0XHRmb3JtQmFja2dyb3VuZENvbG9yLFxuXHRcdGZvcm1Cb3JkZXJDb2xvcixcblx0XHRmb3JtQm9yZGVyUmFkaXVzLFxuXHRcdGZvcm1Cb3JkZXJXaWR0aCxcblx0XHRmb3JtQm94U2hhZG93LFxuXHRcdGZvcm1Db2xvcixcblx0XHRmb3JtTWFyZ2luLFxuXHRcdGZvcm1NYXhXaWR0aCxcblx0XHRmb3JtUGFkZGluZyxcblx0fSA9IHVzZU1lbW8oKCkgPT4gZ2V0Q3NzQ29uZmlnKFwiZm9ybVwiKSwgW10pO1xuXHRjb25zdCB7IHByZW1pdW1UaXRsZSB9ID0gdXNlTWVtbygoKSA9PiBnZXRGb3JtQ29uZmlnKFwicHJlbWl1bURhdGFcIiksIFtdKTtcblx0cmV0dXJuIChcblx0XHRjb25maXJtZWQgJiYgKFxuXHRcdFx0PD5cblx0XHRcdFx0PEhlYWRlckJsb2NrXG5cdFx0XHRcdFx0c3VjY2Vzc1RpdGxlPVwiQWxsIERvbmVcIlxuXHRcdFx0XHRcdHN1Y2Nlc3NEZXNjcmlwdGlvbj1cIlRoYW5rIFlvdSBGb3IgWW91ciBDb250cmlidXRpb24uXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PExpdmVNZXNzYWdlXG5cdFx0XHRcdFx0bWVzc2FnZT17XG5cdFx0XHRcdFx0XHRcIllvdXIgcGF5bWVudCBoYXMgYmVpbmcgcHJvY2Vzc2VkLiBBIG5ldyBwYWdlIHdpdGggYSB0aGFuayB5b3UgbWVzc2FnZSBqdXN0IGxvYWRlZC5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhcmlhLWxpdmU9XCJwb2xpdGVcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8Rm9ybVdyYXBwZXJcblx0XHRcdFx0XHRmb3JtQmFja2dyb3VuZENvbG9yPXtmb3JtQmFja2dyb3VuZENvbG9yfVxuXHRcdFx0XHRcdGZvcm1Cb3JkZXJDb2xvcj17Zm9ybUJvcmRlckNvbG9yfVxuXHRcdFx0XHRcdGZvcm1Cb3JkZXJSYWRpdXM9e2Zvcm1Cb3JkZXJSYWRpdXN9XG5cdFx0XHRcdFx0Zm9ybUJvcmRlcldpZHRoPXtmb3JtQm9yZGVyV2lkdGh9XG5cdFx0XHRcdFx0Zm9ybUJveFNoYWRvdz17Zm9ybUJveFNoYWRvd31cblx0XHRcdFx0XHRmb3JtTWF4V2lkdGg9e2Zvcm1NYXhXaWR0aH1cblx0XHRcdFx0XHRmb3JtUGFkZGluZz17Zm9ybVBhZGRpbmd9XG5cdFx0XHRcdFx0Zm9ybU1hcmdpbj17Zm9ybU1hcmdpbn1cblx0XHRcdFx0XHRmb3JtQ29sb3I9e2Zvcm1Db2xvcn1cblx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMzBweFwiIH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8Rm9ybVBhbmVsIGNsYXNzTmFtZT1cInN1Y2Nlc3MtbWVzc2FnZVwiPlxuXHRcdFx0XHRcdFx0PFRoYW5rWW91TWVzc2FnZVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0aGFuay15b3VcIlxuXHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1lc3NhZ2UgfX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8U2lnbmF0dXJlQmxvY2s+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lnbmF0dXJlLWltZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aW1hZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJQYXQgUm9iZXJ0c29uXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWduYXR1cmUtYmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PllvdXJzIGluIENocmlzdCw8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGVtPlBhdCBSb2JlcnRzb248L2VtPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIgc3JjPXtzaWduYXR1cmV9IGFsdD1cIlBhdFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9TaWduYXR1cmVCbG9jaz5cblx0XHRcdFx0XHRcdDxQb3N0U2NyaXB0XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRoYW5rLXlvdVwiXG5cdFx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdFNjcmlwdCB9fVxuXHRcdFx0XHRcdFx0XHRsaW5rQ29sb3I9e2xpbmtDb2xvcn1cblx0XHRcdFx0XHRcdFx0bGlua0hvdmVyQ29sb3I9e2xpbmtIb3ZlckNvbG9yfVxuXHRcdFx0XHRcdFx0XHRsaW5rVGV4dERlY29yYXRpb249e2xpbmtUZXh0RGVjb3JhdGlvbn1cblx0XHRcdFx0XHRcdFx0bGlua0hvdmVyVGV4dERlY29yYXRpb249e2xpbmtIb3ZlclRleHREZWNvcmF0aW9ufVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1QYW5lbD5cblx0XHRcdFx0PC9Gb3JtV3JhcHBlcj5cblx0XHRcdFx0PFN1Y2Nlc3NDYXJkQmxvY2tcblx0XHRcdFx0XHRtYXhXaWR0aD17Zm9ybU1heFdpZHRofVxuXHRcdFx0XHRcdHByZW1pdW1UaXRsZT17cHJlbWl1bVRpdGxlfVxuXHRcdFx0XHRcdHNlY3Rpb25UaXRsZT17c2VjdGlvblRpdGxlfVxuXHRcdFx0XHRcdGxpbmtDb2xvcj17bGlua0NvbG9yfVxuXHRcdFx0XHRcdGxpbmtIb3ZlckNvbG9yPXtsaW5rSG92ZXJDb2xvcn1cblx0XHRcdFx0XHRsaW5rVGV4dERlY29yYXRpb249e2xpbmtUZXh0RGVjb3JhdGlvbn1cblx0XHRcdFx0XHRsaW5rSG92ZXJUZXh0RGVjb3JhdGlvbj17bGlua0hvdmVyVGV4dERlY29yYXRpb259XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxGb290ZXJCbG9jayAvPlxuXHRcdFx0PC8+XG5cdFx0KVxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhDbHViU3VjY2Vzc01lc3NhZ2UpO1xuIl19 */"));

var ClubSuccessMessage = function ClubSuccessMessage(_ref) {
  var confirmed = _ref.confirmed,
      _ref$successMessage = _ref.successMessage,
      monthly = _ref$successMessage.monthly,
      single = _ref$successMessage.single,
      image = _ref$successMessage.image,
      signature = _ref$successMessage.signature,
      postScript = _ref$successMessage.postScript;

  var _useContext = (0, _react.useContext)(_GivingFormProvider.GivingFormContext),
      _useContext$trackingV = _useContext.trackingVars,
      trackingVars = _useContext$trackingV === void 0 ? [] : _useContext$trackingV,
      Firstname = _useContext.fields.Firstname,
      title = _useContext.designationInfo.title;

  var _useContext2 = (0, _react.useContext)(_FormConfigProvider.FormConfigContext),
      getCssConfig = _useContext2.getCssConfig,
      getFormConfig = _useContext2.getFormConfig;

  var trackingObj = trackingVars.reduce(function (obj, variable) {
    for (var key in variable) {
      obj[key] = variable[key];
    }

    return obj;
  }, {});
  var isMonthly = trackingObj["om_sMonthlyPledge"] === "Y";
  var message = isMonthly ? monthly : single;
  message = message.replace("#FirstName#", Firstname).replace("#Designation#", title);
  var sectionTitle = isMonthly ? "Free Gifts To You" : "";

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

  var _useMemo2 = (0, _react.useMemo)(function () {
    return getCssConfig("form");
  }, []),
      formBackgroundColor = _useMemo2.formBackgroundColor,
      formBorderColor = _useMemo2.formBorderColor,
      formBorderRadius = _useMemo2.formBorderRadius,
      formBorderWidth = _useMemo2.formBorderWidth,
      formBoxShadow = _useMemo2.formBoxShadow,
      formColor = _useMemo2.formColor,
      formMargin = _useMemo2.formMargin,
      formMaxWidth = _useMemo2.formMaxWidth,
      formPadding = _useMemo2.formPadding;

  var _useMemo3 = (0, _react.useMemo)(function () {
    return getFormConfig("premiumData");
  }, []),
      premiumTitle = _useMemo3.premiumTitle;

  return confirmed && (0, _core.jsx)(_react.default.Fragment, null, (0, _core.jsx)(_HeaderBlock.default, {
    successTitle: "All Done",
    successDescription: "Thank You For Your Contribution."
  }), (0, _core.jsx)(_reactAriaLive.LiveMessage, {
    message: "Your payment has being processed. A new page with a thank you message just loaded.",
    "aria-live": "polite"
  }), (0, _core.jsx)(_FormWrapper.default, {
    formBackgroundColor: formBackgroundColor,
    formBorderColor: formBorderColor,
    formBorderRadius: formBorderRadius,
    formBorderWidth: formBorderWidth,
    formBoxShadow: formBoxShadow,
    formMaxWidth: formMaxWidth,
    formPadding: formPadding,
    formMargin: formMargin,
    formColor: formColor,
    style: {
      marginBottom: "30px"
    }
  }, (0, _core.jsx)(_FormPanel.default, {
    className: "success-message"
  }, (0, _core.jsx)(ThankYouMessage, {
    className: "thank-you",
    dangerouslySetInnerHTML: {
      __html: message
    }
  }), (0, _core.jsx)(SignatureBlock, null, (0, _core.jsx)("div", {
    className: "signature-img"
  }, (0, _core.jsx)("img", {
    className: "img-responsive",
    src: image,
    alt: "Pat Robertson"
  })), (0, _core.jsx)("div", {
    className: "signature-block"
  }, (0, _core.jsx)("div", null, "Yours in Christ,"), (0, _core.jsx)("div", null, (0, _core.jsx)("em", null, "Pat Robertson")), (0, _core.jsx)("div", null, (0, _core.jsx)("img", {
    className: "img-responsive",
    src: signature,
    alt: "Pat"
  })))), (0, _core.jsx)(PostScript, {
    className: "thank-you",
    dangerouslySetInnerHTML: {
      __html: postScript
    },
    linkColor: linkColor,
    linkHoverColor: linkHoverColor,
    linkTextDecoration: linkTextDecoration,
    linkHoverTextDecoration: linkHoverTextDecoration
  }))), (0, _core.jsx)(_SuccessCardBlock.default, {
    maxWidth: formMaxWidth,
    premiumTitle: premiumTitle,
    sectionTitle: sectionTitle,
    linkColor: linkColor,
    linkHoverColor: linkHoverColor,
    linkTextDecoration: linkTextDecoration,
    linkHoverTextDecoration: linkHoverTextDecoration
  }), (0, _core.jsx)(_FooterBlock.default, null));
};

__signature__(ClubSuccessMessage, "useContext{{\n\t\ttrackingVars = [],\n\t\tfields: { Firstname },\n\t\tdesignationInfo: { title },\n\t}}\nuseContext{{ getCssConfig, getFormConfig }}\nuseMemo{{\n\t\tlinkColor = \"#009BDf\",\n\t\tlinkHoverColor = \"#0069ad\",\n\t\tlinkTextDecoration = \"none\",\n\t\tlinkHoverTextDecoration = \"underline\",\n\t}}\nuseMemo{{\n\t\tformBackgroundColor,\n\t\tformBorderColor,\n\t\tformBorderRadius,\n\t\tformBorderWidth,\n\t\tformBoxShadow,\n\t\tformColor,\n\t\tformMargin,\n\t\tformMaxWidth,\n\t\tformPadding,\n\t}}\nuseMemo{{ premiumTitle }}");

var _default = (0, _react.memo)(ClubSuccessMessage);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ThankYouMessage, "ThankYouMessage", "/Users/wehand/Code/react-form-drupal/src/Components/SuccessPages/ClubSuccessMessage.js");
  reactHotLoader.register(SignatureBlock, "SignatureBlock", "/Users/wehand/Code/react-form-drupal/src/Components/SuccessPages/ClubSuccessMessage.js");
  reactHotLoader.register(PostScript, "PostScript", "/Users/wehand/Code/react-form-drupal/src/Components/SuccessPages/ClubSuccessMessage.js");
  reactHotLoader.register(ClubSuccessMessage, "ClubSuccessMessage", "/Users/wehand/Code/react-form-drupal/src/Components/SuccessPages/ClubSuccessMessage.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/SuccessPages/ClubSuccessMessage.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","../Contexts/GivingFormProvider":"src/Components/Contexts/GivingFormProvider.js","../Contexts/FormConfigProvider":"src/Components/Contexts/FormConfigProvider.js","react-aria-live":"node_modules/react-aria-live/es/index.js","../StyledComponents/FormWrapper":"src/Components/StyledComponents/FormWrapper.js","../FormComponents/StyledComponents/FormPanel":"src/Components/FormComponents/StyledComponents/FormPanel.js","../FormComponents/Blocks/HeaderBlock":"src/Components/FormComponents/Blocks/HeaderBlock.js","../FormComponents/Blocks/FooterBlock":"src/Components/FormComponents/Blocks/FooterBlock.js","../FormComponents/Blocks/SuccessCardBlock":"src/Components/FormComponents/Blocks/SuccessCardBlock.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64416" + '/');

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
//# sourceMappingURL=/ClubSuccessMessage.0af04581.js.map