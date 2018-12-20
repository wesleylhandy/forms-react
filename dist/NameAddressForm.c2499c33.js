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
})({"node_modules/babel-plugin-react-css-modules/dist/browser/getClassName.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEFAULT_HANDLE_MISSING_STYLENAME_OPTION = 'throw';

var isNamespacedStyleName = function isNamespacedStyleName(styleName) {
  return styleName.indexOf('.') !== -1;
};

var getClassNameForNamespacedStyleName = function getClassNameForNamespacedStyleName(styleName, styleModuleImportMap, handleMissingStyleNameOption) {
  // Note:
  // Do not use the desctructing syntax with Babel.
  // Desctructing adds _slicedToArray helper.
  var styleNameParts = styleName.split('.');
  var importName = styleNameParts[0];
  var moduleName = styleNameParts[1];
  var handleMissingStyleName = handleMissingStyleNameOption || DEFAULT_HANDLE_MISSING_STYLENAME_OPTION;

  if (!moduleName) {
    if (handleMissingStyleName === 'throw') {
      throw new Error('Invalid style name: ' + styleName);
    } else if (handleMissingStyleName === 'warn') {
      // eslint-disable-next-line no-console
      console.warn('Invalid style name: ' + styleName);
    } else {
      return null;
    }
  }

  if (!styleModuleImportMap[importName]) {
    if (handleMissingStyleName === 'throw') {
      throw new Error('CSS module import does not exist: ' + importName);
    } else if (handleMissingStyleName === 'warn') {
      // eslint-disable-next-line no-console
      console.warn('CSS module import does not exist: ' + importName);
    } else {
      return null;
    }
  }

  if (!styleModuleImportMap[importName][moduleName]) {
    if (handleMissingStyleName === 'throw') {
      throw new Error('CSS module does not exist: ' + moduleName);
    } else if (handleMissingStyleName === 'warn') {
      // eslint-disable-next-line no-console
      console.warn('CSS module does not exist: ' + moduleName);
    } else {
      return null;
    }
  }

  return styleModuleImportMap[importName][moduleName];
};

exports.default = function (styleNameValue, styleModuleImportMap, options) {
  var styleModuleImportMapKeys = Object.keys(styleModuleImportMap);
  var handleMissingStyleName = options && options.handleMissingStyleName || DEFAULT_HANDLE_MISSING_STYLENAME_OPTION;
  return styleNameValue.split(' ').filter(function (styleName) {
    return styleName;
  }).map(function (styleName) {
    if (isNamespacedStyleName(styleName)) {
      return getClassNameForNamespacedStyleName(styleName, styleModuleImportMap, handleMissingStyleName);
    }

    if (styleModuleImportMapKeys.length === 0) {
      throw new Error('Cannot use styleName attribute for style name \'' + styleName + '\' without importing at least one stylesheet.');
    }

    if (styleModuleImportMapKeys.length > 1) {
      throw new Error('Cannot use anonymous style name \'' + styleName + '\' with more than one stylesheet import.');
    }

    var styleModuleMap = styleModuleImportMap[styleModuleImportMapKeys[0]];

    if (!styleModuleMap[styleName]) {
      if (handleMissingStyleName === 'throw') {
        throw new Error('Could not resolve the styleName \'' + styleName + '\'.');
      }

      if (handleMissingStyleName === 'warn') {
        // eslint-disable-next-line no-console
        console.warn('Could not resolve the styleName \'' + styleName + '\'.');
      }
    }

    return styleModuleMap[styleName];
  }).filter(function (className) {
    // Remove any styles which could not be found (if handleMissingStyleName === 'ignore')
    return className;
  }).join(' ');
};
},{}],"src/Components/styles/flex.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "-ms-flex": "flex__ayltN",
  "flex": "flex__ayltN",
  "flex-row": "flex-row__16BBq",
  "flex-center": "flex-center__1HhTj",
  "flex-around": "flex-around__25IHb",
  "flex-between": "flex-between__3zYkx",
  "flex-left": "flex-left__3xW5i",
  "flex-start": "flex-start__1kKvj",
  "flex-end": "flex-end__I3jk2",
  "flex-row-reverse": "flex-row-reverse__39Jm4",
  "flex-axes-center": "flex-axes-center__33a6C",
  "flex-column": "flex-column__lQLZG",
  "-ms-flex-wrap": "flex-wrap__1FN6A",
  "flex-wrap": "flex-wrap__1FN6A",
  "-ms-flex-positive": "flex-grow__1FqT_",
  "flex-grow": "flex-grow__1FqT_",
  "flex-no-grow": "flex-no-grow__3iHTz",
  "-ms-flex-negative": "flex-shrink__1LQT2",
  "flex-shrink": "flex-shrink__1LQT2"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/styles/giving.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "askarray__header": "askarray__header__3P2Zh",
  "askarray": "askarray__UQ1ey",
  "askbutton": "askbutton__1REXt",
  "askbutton__amt": "askbutton__amt__20Y8v",
  "selected": "selected__52P9N",
  "askarray__form-group": "askarray__form-group__1rkB9",
  "form-group__other-input": "form-group__other-input__3hTcz",
  "form-group__other-input--label": "form-group__other-input--label__1gNEk",
  "error": "error__2x8Zr",
  "other-amt-error": "other-amt-error__2STLF"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/GivingArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getClassName2 = _interopRequireDefault(require("babel-plugin-react-css-modules/dist/browser/getClassName"));

var _react = _interopRequireWildcard(require("react"));

var _flexModule = _interopRequireDefault(require("./styles/flex.module.css"));

var _givingModule = _interopRequireDefault(require("./styles/giving.module.css"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _styleModuleImportMap = {
  "flex": {
    "flex": "flex__ayltN",
    "flex-row": "flex-row__16BBq",
    "flex-center": "flex-center__1HhTj",
    "flex-around": "flex-around__25IHb",
    "flex-between": "flex-between__3zYkx",
    "flex-left": "flex-left__3xW5i",
    "flex-start": "flex-start__1kKvj",
    "flex-end": "flex-end__I3jk2",
    "flex-row-reverse": "flex-row-reverse__39Jm4",
    "flex-axes-center": "flex-axes-center__33a6C",
    "flex-column": "flex-column__lQLZG",
    "flex-wrap": "flex-wrap__1FN6A",
    "flex-grow": "flex-grow__1FqT_",
    "flex-no-grow": "flex-no-grow__3iHTz",
    "flex-shrink": "flex-shrink__1LQT2"
  },
  "styles": {
    "askarray__header": "askarray__header__3P2Zh",
    "askarray": "askarray__UQ1ey",
    "askbutton": "askbutton__1REXt",
    "askbutton__amt": "askbutton__amt__20Y8v",
    "selected": "selected__52P9N",
    "askarray__form-group": "askarray__form-group__1rkB9",
    "form-group__other-input": "form-group__other-input__3hTcz",
    "form-group__other-input--label": "form-group__other-input--label__1gNEk",
    "error": "error__2x8Zr",
    "other-amt-error": "other-amt-error__2STLF"
  }
};

if (module.hot) {
  module.hot.accept("./styles/giving.module.css", function () {
    require("./styles/giving.module.css");
  });
}

if (module.hot) {
  module.hot.accept("./styles/flex.module.css", function () {
    require("./styles/flex.module.css");
  });
}

function getIndex(arr, amount) {
  return arr.findIndex(function (amt) {
    return +amt == +amount;
  });
}

var GivingArray =
/*#__PURE__*/
function (_Component) {
  _inherits(GivingArray, _Component);

  function GivingArray(props) {
    var _this;

    _classCallCheck(this, GivingArray);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GivingArray).call(this, props));
    _this.state = {
      hydrated: false,
      initialUpdate: false,
      selectedIndex: null,
      otherAmount: 0,
      otherAmountError: ''
    };
    _this.renderArray = _this.renderArray.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.addToCart = _this.addToCart.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleOtherAmt = _this.handleOtherAmt.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(GivingArray, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          defaultAmount = _this$props.defaultAmount,
          defaultOption = _this$props.defaultOption,
          _this$props$arrayOpti = _this$props.arrayOptions,
          monthlyAmounts = _this$props$arrayOpti.monthlyAmounts,
          singleAmounts = _this$props$arrayOpti.singleAmounts,
          monthlyOption = _this$props$arrayOpti.monthlyOption;
      var arr = [];

      if (defaultOption !== "") {
        arr = defaultOption == 'monthly' ? monthlyAmounts : singleAmounts;
      } else {
        arr = monthlyOption ? monthlyAmounts : singleAmounts;
      }

      var amt = defaultAmount;
      var index = getIndex(arr, amt);
      var selectedIndex = index >= 0 ? index : 99;

      if (selectedIndex >= 0) {
        this.addToCart(amt, index);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var initialUpdate = nextProps.initialUpdate;

      if (initialUpdate && !this.state.initialUpdate) {
        return this.setState({
          initialUpdate: initialUpdate
        });
      }

      var givingInfo = nextProps.givingInfo,
          monthlyChecked = nextProps.monthlyChecked;

      if (givingInfo.length && !nextProps.hydrated && !this.state.hydrated) {
        return this.hydrateGiving(givingInfo);
      }

      if (monthlyChecked !== this.props.monthlyChecked) {
        return this.setState({
          monthlyChecked: monthlyChecked,
          selectedIndex: null
        }, function () {
          return _this2.props.removeFromCart('donation');
        });
      }
    }
  }, {
    key: "hydrateGiving",
    value: function hydrateGiving(givingInfo) {
      var _this3 = this;

      var _this$props$arrayOpti2 = this.props.arrayOptions,
          monthlyAmounts = _this$props$arrayOpti2.monthlyAmounts,
          singleAmounts = _this$props$arrayOpti2.singleAmounts;
      var _this$state = this.state,
          otherAmount = _this$state.otherAmount,
          selectedIndex = _this$state.selectedIndex;
      var _givingInfo$ = givingInfo[0],
          isMonthly = _givingInfo$.isMonthly,
          amount = _givingInfo$.amount;
      var arr = isMonthly ? monthlyAmounts : singleAmounts;
      var index = getIndex(arr, amount);
      selectedIndex = index > -1 ? index : 99;
      otherAmount = selectedIndex == 99 ? amount : 0;
      this.setState({
        selectedIndex: selectedIndex,
        otherAmount: otherAmount,
        hydrated: true
      }, function () {
        if (selectedIndex >= 0) {
          _this3.addToCart(amount, index);
        }
      });
    }
  }, {
    key: "renderArray",
    value: function renderArray(amounts, selectedIndex) {
      var _this4 = this;

      return amounts.map(function (amount, i) {
        return _react.default.createElement("div", {
          key: "array".concat(i),
          onClick: function onClick() {
            return _this4.addToCart(amount, i);
          },
          className: (0, _getClassName2.default)("styles.askbutton flex.flex flex.flex-center flex.flex-axes-center ".concat(selectedIndex == i ? "styles.selected" : ""), _styleModuleImportMap, {
            "handleMissingStyleName": "warn"
          })
        }, _react.default.createElement("div", {
          className: "askbutton__amt__20Y8v flex__ayltN flex-center__1HhTj flex-axes-center__33a6C flex-no-grow__3iHTz"
        }, amount));
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
      var _this5 = this;

      this.setState({
        otherAmount: index == 99 ? amt : 0,
        selectedIndex: index
      }, function () {
        if (amt) {
          var _this5$props = _this5.props,
              monthlyChecked = _this5$props.monthlyChecked,
              _this5$props$arrayOpt = _this5$props.arrayOptions,
              monthlyPledgeData = _this5$props$arrayOpt.monthlyPledgeData,
              singlePledgeData = _this5$props$arrayOpt.singlePledgeData;

          _this5.props.addToCart({
            type: 'donation',
            PledgeAmount: amt,
            DetailCprojMail: monthlyChecked ? monthlyPledgeData.DetailCprojMail : singlePledgeData.DetailCprojMail,
            DetailCprojCredit: monthlyChecked ? monthlyPledgeData.DetailCprojCredit : singlePledgeData.DetailCprojCredit,
            DetailDescription: monthlyChecked ? "Monthly Pledge" : "Single Pledge",
            DetailName: monthlyChecked ? "MP" : "SPGF",
            monthly: monthlyChecked
          });
        } else {
          _this5.props.removeFromCart('donation');
        }
      });
    }
  }, {
    key: "handleOtherAmt",
    value: function handleOtherAmt(e) {
      var _this6 = this;

      var value = e.target.value.trim();
      var isValid = /^[0-9]{1,}$/.test(value);

      if (isValid && value > 0) {
        this.setState({
          otherAmountError: ''
        }, function () {
          return _this6.addToCart(+value, 99);
        });
      } else if (isValid) {
        this.setState({
          otherAmount: 0,
          selectedIndex: null,
          otherAmountError: ''
        }, function () {
          return _this6.props.removeFromCart('donation');
        });
      } else {
        this.setState({
          otherAmount: '',
          otherAmountError: "Number > 0"
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          monthlyChecked = _this$props2.monthlyChecked,
          _this$props2$arrayOpt = _this$props2.arrayOptions,
          givingFormat = _this$props2$arrayOpt.givingFormat,
          singleOption = _this$props2$arrayOpt.singleOption,
          monthlyOption = _this$props2$arrayOpt.monthlyOption,
          monthlyAmounts = _this$props2$arrayOpt.monthlyAmounts,
          singleAmounts = _this$props2$arrayOpt.singleAmounts;
      var _this$state2 = this.state,
          otherAmount = _this$state2.otherAmount,
          otherAmountError = _this$state2.otherAmountError,
          selectedIndex = _this$state2.selectedIndex;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
        className: "askarray__header__3P2Zh"
      }, "Select A ", monthlyChecked ? "Monthly" : "Single", " Donation Amount"), _react.default.createElement("div", {
        id: "AskArray",
        className: "askarray__UQ1ey flex__ayltN flex-row__16BBq flex-center__1HhTj flex-wrap__1FN6A"
      }, monthlyOption && monthlyChecked ? this.renderArray(monthlyAmounts, selectedIndex) : null, singleOption && !monthlyChecked ? this.renderArray(singleAmounts, selectedIndex) : null, _react.default.createElement("div", {
        id: "OtherAmout",
        className: (0, _getClassName2.default)("styles.askarray__form-group flex.flex flex.flex-center flex.flex-axes-center".concat(selectedIndex == 99 ? " styles.selected" : ""), _styleModuleImportMap, {
          "handleMissingStyleName": "warn"
        })
      }, _react.default.createElement("label", {
        className: "form-group__other-input--label__1gNEk",
        htmlFor: "other-amt-input"
      }, "Other Amount"), _react.default.createElement("input", {
        className: "form-group__other-input__3hTcz",
        name: "other-amt-input",
        onChange: this.handleOtherAmt,
        value: otherAmount == 0 ? '' : otherAmount
      }), _react.default.createElement("div", {
        className: "error__2x8Zr other-amt-error__2STLF"
      }, otherAmountError))));
    }
  }]);

  return GivingArray;
}(_react.Component);

var _default = GivingArray;
exports.default = _default;
},{"babel-plugin-react-css-modules/dist/browser/getClassName":"node_modules/babel-plugin-react-css-modules/dist/browser/getClassName.js","react":"node_modules/react/index.js","./styles/flex.module.css":"src/Components/styles/flex.module.css","./styles/giving.module.css":"src/Components/styles/giving.module.css"}],"src/Components/styles/products.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "hidden": "hidden__2tqB3",
  "error": "error__1yrLj",
  "select-product": "select-product__2SOvm",
  "additional-amount__input": "additional-amount__input__3xXGq",
  "product-total__input": "product-total__input__172mT",
  "select-product__label": "select-product__label__3Y0AW",
  "products-display": "products-display__38L-c",
  "product-card": "product-card__t3-b0",
  "additional-amount": "additional-amount__3rbO8",
  "product-total": "product-total__3EJ0g",
  "product-card__body": "product-card__body__2xbB-",
  "product-card__title": "product-card__title__2Kpak",
  "product-card__description": "product-card__description__2NVyi",
  "additional-amount__input--label": "additional-amount__input--label__1mgWu",
  "product-total__input--label": "product-total__input--label__1r4ld"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/ProductDisplay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _productsModule = _interopRequireDefault(require("./styles/products.module.css"));

var _flexModule = _interopRequireDefault(require("./styles/flex.module.css"));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

if (module.hot) {
  module.hot.accept("./styles/flex.module.css", function () {
    require("./styles/flex.module.css");
  });
}

if (module.hot) {
  module.hot.accept("./styles/products.module.css", function () {
    require("./styles/products.module.css");
  });
}

var ProductDisplay =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductDisplay, _Component);

  function ProductDisplay(props) {
    var _this;

    _classCallCheck(this, ProductDisplay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductDisplay).call(this, props));
    _this.state = {
      fields: {
        additionalGift: props.hydratedAdditionalGift >= 0 ? props.hydratedAdditionalGift : 0
      },
      errors: {
        additionalGift: ""
      },
      additionalGiftError: "",
      totalGift: 0,
      hydrated: false,
      hydratedAdditionalGift: props.hydratedAdditionalGift,
      productInfo: props.productInfo,
      initialUpdate: false
    };
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.createMarkup = _this.createMarkup.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderAdditionalGift = _this.renderAdditionalGift.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.hydrateProducts = _this.hydrateProducts.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.calculateTotalGift = _this.calculateTotalGift.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ProductDisplay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          productInfo = _this$props.productInfo,
          hydratedAdditionalGift = _this$props.hydratedAdditionalGift;

      if ((productInfo.length || hydratedAdditionalGift > 0) && !this.state.hydrated) {
        // console.log({mountedhydratedAdditionalGift: hydratedAdditionalGift})
        this.hydrateProducts(productInfo, hydratedAdditionalGift);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var initialUpdate = nextProps.initialUpdate;

      if (initialUpdate && !this.state.initialUpdate) {
        return this.setState({
          initialUpdate: initialUpdate
        });
      }

      var productInfo = nextProps.productInfo,
          hydratedAdditionalGift = nextProps.hydratedAdditionalGift;

      if ((productInfo.length || hydratedAdditionalGift > 0) && !nextProps.hydrated && !this.state.hydrated) {
        // console.log({propshydratedAdditionalGift: hydratedAdditionalGift})
        return this.hydrateProducts(productInfo, hydratedAdditionalGift);
      }

      if (JSON.stringify(productInfo) != JSON.stringify(this.props.productInfo)) {
        var totalGift = this.calculateTotalGift(productInfo, this.state.fields["additionalGift"]);
        return this.setState({
          productInfo: productInfo,
          totalGift: totalGift
        });
      }
    }
    /**
     * Calculates the total gift for displaying to donor
     * @param {Array} productInfo - list of of all products having been ordered, idx of the product and quantity
     * @param {Number} additionalGift - value of user entered additional Gift
     * @returns {Number} value of Total Gift
     */

  }, {
    key: "calculateTotalGift",
    value: function calculateTotalGift(productInfo, additionalGift) {
      var products = this.props.productOptions.products;
      var totalGift = products.length && productInfo.length ? productInfo.reduce(function (a, b) {
        return a + parseInt(products[b.idx].PledgeAmount) * b.quantity;
      }, 0) + additionalGift : additionalGift; // console.log({totalGift, productInfo})

      return totalGift;
    }
    /**
     * Sets State from a new productInfo object
     * @param {Array} productInfo - Array holding state of cart as it relates to product
     * @param {Number} hydratedAdditionalGift - Value of amount pledge as additional gift
     */

  }, {
    key: "hydrateProducts",
    value: function hydrateProducts(productInfo, hydratedAdditionalGift) {
      var fields = _extends({}, this.state.fields);

      productInfo.forEach(function (product) {
        var idx = product.idx,
            quantity = product.quantity;
        fields["product-select-".concat(idx)] = quantity ? quantity : 0;
      });
      fields["additionalGift"] = hydratedAdditionalGift > 0 ? hydratedAdditionalGift : fields["additionalGift"];
      var totalGift = this.calculateTotalGift(productInfo, fields["additionalGift"]);
      this.setState({
        fields: fields,
        totalGift: totalGift,
        hydrated: true
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(e) {
      var target = e.target;
      var value = target.value;
      var name = target.name;

      var fields = _extends({}, this.state.fields),
          errors = _extends({}, this.state.errors);

      var _this$state = this.state,
          totalGift = _this$state.totalGift,
          productInfo = _this$state.productInfo;

      if (name === "additionalGift") {
        var isValid = /[0-9]+/.test(value);
        errors[name] = !isValid ? "Must be a valid whole dollar amount above 0" : "";

        if (isValid && +value > 0) {
          var _this$props$productOp = this.props.productOptions.additionalGift,
              DetailCprojMail = _this$props$productOp.DetailCprojMail,
              DetailCprojCredit = _this$props$productOp.DetailCprojCredit,
              DetailDescription = _this$props$productOp.DetailDescription,
              DetailName = _this$props$productOp.DetailName;
          this.props.addToCart({
            type: 'additionalGift',
            PledgeAmount: +value,
            DetailCprojMail: DetailCprojMail,
            DetailCprojCredit: DetailCprojCredit,
            DetailDescription: DetailDescription,
            DetailName: DetailName
          });
        } else {
          this.props.removeFromCart('additionalGift');
        }

        fields[name] = isValid ? +value : 0;
        totalGift = this.calculateTotalGift(productInfo, +value);
      } else {
        fields[name] = value;
        var idx = parseInt(name.split("product-select-")[1]); // console.log({name, idx, value})

        this.props.updateProducts({
          idx: idx,
          quantity: value
        });
      }

      this.setState({
        fields: fields,
        errors: errors,
        totalGift: totalGift
      });
    }
  }, {
    key: "createMarkup",
    value: function createMarkup(text) {
      return {
        __html: text
      };
    }
  }, {
    key: "renderAdditionalGift",
    value: function renderAdditionalGift(additionalGift) {
      var _this$state2 = this.state,
          fields = _this$state2.fields,
          errors = _this$state2.errors;
      return additionalGift.display ? _react.default.createElement("div", {
        className: "additional-amount__3rbO8 flex__ayltN flex-left__3xW5i flex-axes-center__33a6C"
      }, _react.default.createElement("label", {
        className: "product-total__input--label__1r4ld",
        htmlFor: "additionalGift"
      }, "$"), _react.default.createElement("input", {
        className: "additional-amount__input__3xXGq",
        name: "additionalGift",
        placeholder: "0",
        onBlur: function onBlur(e) {
          return e.target.value === "" ? e.target.value = 0 : true;
        },
        onFocus: function onFocus(e) {
          return e.target.value === 0 ? e.target.value = "" : true;
        },
        onChange: this.handleInputChange,
        value: fields.additionalGift
      }), _react.default.createElement("div", {
        className: "additional-amount__input--label__1mgWu"
      }, additionalGift.additionalGiftMessage), _react.default.createElement("div", {
        className: "error__1yrLj"
      }, errors.additionalGift)) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$productOp2 = this.props.productOptions,
          products = _this$props$productOp2.products,
          numProducts = _this$props$productOp2.numProducts,
          additionalGift = _this$props$productOp2.additionalGift;
      var _this$state3 = this.state,
          fields = _this$state3.fields,
          totalGift = _this$state3.totalGift;
      if (numProducts == 0) return null;else {
        var renderOptions = function renderOptions(ind) {
          var options = [];

          for (var i = 0; i <= 99; i++) {
            options.push(_react.default.createElement("option", {
              key: "prod-option-".concat(ind, "-").concat(i),
              value: i
            }, i));
          }

          return options;
        };

        return _react.default.createElement("div", {
          className: "products-display__38L-c"
        }, products.map(function (product, i) {
          return _react.default.createElement("div", {
            key: "product".concat(i),
            className: "product-card__t3-b0 flex__ayltN flex-row__16BBq flex-left__3xW5i flex-axes-center__33a6C"
          }, _react.default.createElement("div", {
            className: "flex__ayltN flex-column__lQLZG"
          }, _react.default.createElement("label", {
            htmlFor: "product-select-".concat(i),
            className: "select-product__label__3Y0AW"
          }, "Quantity"), _react.default.createElement("select", {
            className: "select-product__2SOvm flex-no-grow__3iHTz",
            name: "product-select-".concat(i),
            value: fields["product-select-".concat(i)] >= 0 ? fields["product-select-".concat(i)] : 0,
            onChange: _this2.handleInputChange
          }, renderOptions(i))), _react.default.createElement("div", {
            className: "product-card__body__2xbB- flex-grow__1FqT_"
          }, _react.default.createElement("div", {
            className: "product-card__title__2Kpak"
          }, product.productTitle, " - $", product.PledgeAmount), _react.default.createElement("div", {
            className: "product-card__description__2NVyi",
            dangerouslySetInnerHTML: _this2.createMarkup(product.productMessage)
          })));
        }), this.renderAdditionalGift(additionalGift), _react.default.createElement("div", {
          className: "product-total__3EJ0g flex__ayltN flex-left__3xW5i flex-axes-center__33a6C"
        }, _react.default.createElement("label", {
          className: "product-total__input--label__1r4ld",
          htmlFor: "total-product-gift"
        }, "$"), _react.default.createElement("input", {
          className: "product-total__input__172mT flex-no-grow__3iHTz",
          name: "total-product-gift",
          value: totalGift,
          disabled: true
        }), _react.default.createElement("div", {
          className: "product-total__input--label__1r4ld"
        }, "Product Subtotal")));
      }
    }
  }]);

  return ProductDisplay;
}(_react.Component);

var _default = ProductDisplay;
exports.default = _default;
},{"react":"node_modules/react/index.js","./styles/products.module.css":"src/Components/styles/products.module.css","./styles/flex.module.css":"src/Components/styles/flex.module.css"}],"src/Components/styles/funds.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "hidden": "hidden__YzG3s",
  "img-responsive": "img-responsive__1nEgI",
  "funds__header": "funds__header__1jN9Q",
  "select-fund": "select-fund__1H6ol",
  "select-fund__dropdown": "select-fund__dropdown__1Ievl",
  "fund-card": "fund-card__15At6",
  "fund-card__dropdown": "fund-card__dropdown__18TeI",
  "selected": "selected__3oS9p",
  "funds-display": "funds-display__2VS1a",
  "dropDownArrow": "dropDownArrow__2MRFt",
  "fund-card__body--title": "fund-card__body--title__2p-6O",
  "fund-card__image": "fund-card__image__1CTES",
  "fund-card__body": "fund-card__body__9IylK",
  "fund-card__body--description": "fund-card__body--description__23WXP"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/FundDisplay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getClassName2 = _interopRequireDefault(require("babel-plugin-react-css-modules/dist/browser/getClassName"));

var _react = _interopRequireWildcard(require("react"));

var _fundsModule = _interopRequireDefault(require("./styles/funds.module.css"));

var _flexModule = _interopRequireDefault(require("./styles/flex.module.css"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _styleModuleImportMap = {
  "styles": {
    "hidden": "hidden__YzG3s",
    "img-responsive": "img-responsive__1nEgI",
    "funds__header": "funds__header__1jN9Q",
    "select-fund": "select-fund__1H6ol",
    "select-fund__dropdown": "select-fund__dropdown__1Ievl",
    "fund-card": "fund-card__15At6",
    "fund-card__dropdown": "fund-card__dropdown__18TeI",
    "selected": "selected__3oS9p",
    "funds-display": "funds-display__2VS1a",
    "dropDownArrow": "dropDownArrow__2MRFt",
    "fund-card__body--title": "fund-card__body--title__2p-6O",
    "fund-card__image": "fund-card__image__1CTES",
    "fund-card__body": "fund-card__body__9IylK",
    "fund-card__body--description": "fund-card__body--description__23WXP"
  },
  "flex": {
    "flex": "flex__ayltN",
    "flex-row": "flex-row__16BBq",
    "flex-center": "flex-center__1HhTj",
    "flex-around": "flex-around__25IHb",
    "flex-between": "flex-between__3zYkx",
    "flex-left": "flex-left__3xW5i",
    "flex-start": "flex-start__1kKvj",
    "flex-end": "flex-end__I3jk2",
    "flex-row-reverse": "flex-row-reverse__39Jm4",
    "flex-axes-center": "flex-axes-center__33a6C",
    "flex-column": "flex-column__lQLZG",
    "flex-wrap": "flex-wrap__1FN6A",
    "flex-grow": "flex-grow__1FqT_",
    "flex-no-grow": "flex-no-grow__3iHTz",
    "flex-shrink": "flex-shrink__1LQT2"
  }
};

if (module.hot) {
  module.hot.accept("./styles/flex.module.css", function () {
    require("./styles/flex.module.css");
  });
}

if (module.hot) {
  module.hot.accept("./styles/funds.module.css", function () {
    require("./styles/funds.module.css");
  });
}

var FundDisplay =
/*#__PURE__*/
function (_Component) {
  _inherits(FundDisplay, _Component);

  function FundDisplay(props) {
    var _this;

    _classCallCheck(this, FundDisplay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FundDisplay).call(this, props));
    _this.state = {
      numFunds: props.fundOptions.numFunds,
      funds: _toConsumableArray(props.fundOptions.funds),
      fields: {
        values: {}
      },
      expanded: false,
      selectedIndex: 0,
      initialUpdate: false
    };
    _this.handleDropDownClick = _this.handleDropDownClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.createMarkup = _this.createMarkup.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.expandSelection = _this.expandSelection.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(FundDisplay, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.initialUpdate && !this.state.initialUpdate) {
        this.setState({
          numFunds: nextProps.fundOptions.numFunds,
          funds: _toConsumableArray(nextProps.fundOptions.funds),
          initialUpdate: true
        });
      }
    }
  }, {
    key: "handleDropDownClick",
    value: function handleDropDownClick(e) {
      var selectedIndex = parseInt(e.target.dataset.id);
      var _this$state$funds$sel = this.state.funds[selectedIndex],
          DetailName = _this$state$funds$sel.DetailName,
          DetailDescription = _this$state$funds$sel.DetailDescription,
          DetailCprojCredit = _this$state$funds$sel.DetailCprojCredit,
          DetailCprojMail = _this$state$funds$sel.DetailCprojMail;
      this.props.updateDonation({
        DetailName: DetailName,
        DetailDescription: DetailDescription,
        DetailCprojCredit: DetailCprojCredit,
        DetailCprojMail: DetailCprojMail
      });
      this.setState({
        expanded: false,
        selectedIndex: selectedIndex
      });
    }
  }, {
    key: "createMarkup",
    value: function createMarkup(text) {
      return {
        __html: text
      };
    }
  }, {
    key: "expandSelection",
    value: function expandSelection() {
      this.setState({
        expanded: true,
        selectedIndex: null
      });
    }
  }, {
    key: "renderFundCards",
    value: function renderFundCards(selectedIndex) {
      var _this2 = this;

      if (selectedIndex >= 0) {
        return this.state.funds.map(function (fund, i) {
          return _react.default.createElement("div", {
            key: "fund-".concat(i),
            onClick: _this2.expandSelection,
            className: (0, _getClassName2.default)(selectedIndex === i ? "styles.fund-card styles.selected flex.flex flex.flex-row flex.flex-between flex.flex-axes-center" : "styles.fund-card flex.flex flex.flex-row flex.flex-between flex.flex-axes-center", _styleModuleImportMap, {
              "handleMissingStyleName": "warn"
            })
          }, _react.default.createElement("div", {
            onClick: _this2.expandSelection,
            className: (0, _getClassName2.default)(fund.imgSrc ? "styles.fund-card__image" : "styles.hidden", _styleModuleImportMap, {
              "handleMissingStyleName": "warn"
            })
          }, _react.default.createElement("img", {
            className: "img-responsive__1nEgI",
            src: fund.imgSrc
          })), _react.default.createElement("div", {
            className: "fund-card__body__9IylK flex__ayltN flex-column__lQLZG flex-start__1kKvj",
            onClick: _this2.expandSelection
          }, _react.default.createElement("div", {
            className: "fund-card__body--title__2p-6O",
            onClick: _this2.expandSelection
          }, fund.fundTitle), _react.default.createElement("div", {
            className: "fund-card__body--description__23WXP",
            dangerouslySetInnerHTML: _this2.createMarkup(fund.fundDescription),
            onClick: _this2.expandSelection
          })), _react.default.createElement("div", {
            className: "dropDownArrow__2MRFt",
            onClick: _this2.expandSelection
          }, "\u25BF"));
        });
      }

      return null;
    }
  }, {
    key: "renderExpandedCards",
    value: function renderExpandedCards(expanded) {
      var _this3 = this;

      if (expanded) {
        var funds = this.state.funds.map(function (fund, i) {
          return _react.default.createElement("div", {
            key: "fundDropdown-".concat(i),
            "data-id": i,
            className: "fund-card__dropdown__18TeI flex__ayltN flex-row__16BBq flex-between__3zYkx flex-axes-center__33a6C",
            onClick: _this3.handleDropDownClick
          }, _react.default.createElement("div", {
            "data-id": i,
            className: (0, _getClassName2.default)(fund.imgSrc ? "styles.fund-card__image" : "styles.hidden", _styleModuleImportMap, {
              "handleMissingStyleName": "warn"
            })
          }, _react.default.createElement("img", {
            className: "img-responsive__1nEgI",
            src: fund.imgSrc
          })), _react.default.createElement("div", {
            className: "fund-card__body__9IylK flex__ayltN flex-column__lQLZG flex-start__1kKvj",
            "data-id": i
          }, _react.default.createElement("div", {
            className: "fund-card__body--title__2p-6O",
            "data-id": i
          }, fund.fundTitle), _react.default.createElement("div", {
            className: "fund-card__body--description__23WXP",
            dangerouslySetInnerHTML: _this3.createMarkup(fund.fundDescription),
            "data-id": i
          })), _react.default.createElement("div", {
            "data-id": i,
            className: "dropDownArrow__2MRFt",
            onClick: _this3.handleDropDownClick
          }, "+"));
        });
        return _react.default.createElement("div", {
          className: "select-fund__dropdown__1Ievl flex__ayltN flex-row__16BBq flex-axes-center__33a6C flex-wrap__1FN6A"
        }, funds);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.numFunds == 0) return null;else {
        return _react.default.createElement("div", {
          className: "funds-display__2VS1a"
        }, _react.default.createElement("h3", {
          className: "funds__header__1jN9Q"
        }, "I Want to Support"), _react.default.createElement("div", {
          className: "select-fund__1H6ol flex__ayltN flex-row__16BBq flex-axes-center__33a6C"
        }, this.renderFundCards(this.state.selectedIndex)), this.renderExpandedCards(this.state.expanded));
      }
    }
  }]);

  return FundDisplay;
}(_react.Component);

var _default = FundDisplay;
exports.default = _default;
},{"babel-plugin-react-css-modules/dist/browser/getClassName":"node_modules/babel-plugin-react-css-modules/dist/browser/getClassName.js","react":"node_modules/react/index.js","./styles/funds.module.css":"src/Components/styles/funds.module.css","./styles/flex.module.css":"src/Components/styles/flex.module.css"}],"src/Components/styles/radio.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "radio-group": "radio-group__1Ai8X",
  "radio-group__input": "radio-group__input__jkbDU"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/RadioButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _flexModule = _interopRequireDefault(require("./styles/flex.module.css"));

var _radioModule = _interopRequireDefault(require("./styles/radio.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (module.hot) {
  module.hot.accept("./styles/radio.module.css", function () {
    require("./styles/radio.module.css");
  });
}

if (module.hot) {
  module.hot.accept("./styles/flex.module.css", function () {
    require("./styles/flex.module.css");
  });
}

function RadioButton(props) {
  return _react.default.createElement("div", {
    id: "".concat(props.id, "-group"),
    className: "flex__ayltN flex-row__16BBq flex-axes-center__33a6C radio-group__1Ai8X"
  }, _react.default.createElement("input", {
    className: "radio-group__input__jkbDU",
    name: props.name,
    id: "".concat(props.id, "gift"),
    type: "radio",
    checked: props.checked,
    onChange: props.handleRadioClick
  }), _react.default.createElement("label", {
    htmlFor: "".concat(props.id, "gift")
  }, props.label));
}

var _default = RadioButton;
exports.default = _default;
},{"react":"node_modules/react/index.js","./styles/flex.module.css":"src/Components/styles/flex.module.css","./styles/radio.module.css":"src/Components/styles/radio.module.css"}],"src/Components/styles/monthly-radio.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "monthlyGivingDay": "monthlyGivingDay__1D4Rg",
  "monthly-radio": "monthly-radio__o1E-N",
  "form-header": "form-header__gkJCU",
  "ccDayOfMonth": "ccDayOfMonth__36uNQ",
  "ccdate": "ccdate__1v9EL",
  "hidden": "hidden__NI9Fz"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/MonthlyRadioGroup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _RadioButton = _interopRequireDefault(require("./RadioButton"));

var _monthlyRadioModule = _interopRequireDefault(require("./styles/monthly-radio.module.css"));

var _flexModule = _interopRequireDefault(require("./styles/flex.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (module.hot) {
  module.hot.accept("./styles/flex.module.css", function () {
    require("./styles/flex.module.css");
  });
}

if (module.hot) {
  module.hot.accept("./styles/monthly-radio.module.css", function () {
    require("./styles/monthly-radio.module.css");
  });
}

function MonthlyRadioGroup(_ref) {
  var handleInputChange = _ref.handleInputChange,
      monthlyChecked = _ref.monthlyChecked,
      Monthlypledgeday = _ref.Monthlypledgeday,
      handleRadioClick = _ref.handleRadioClick;
  var monthly = monthlyChecked;
  var single = !monthlyChecked;

  function renderCCInfo() {
    var options = [];

    for (var i = 2; i <= 28; i++) {
      options.push(_react.default.createElement("option", {
        key: "date-option-" + i,
        value: i
      }, i));
    }

    return _react.default.createElement("div", {
      className: "monthlyGivingDay__1D4Rg"
    }, _react.default.createElement("h5", {
      className: "ccDayOfMonth__36uNQ"
    }, "Charge automatically on day\xA0", _react.default.createElement("label", {
      htmlFor: "Monthlypledgeday",
      className: "hidden__NI9Fz"
    }, "Select Date"), _react.default.createElement("select", {
      className: "ccdate__1v9EL",
      name: "Monthlypledgeday",
      onChange: handleInputChange,
      value: Monthlypledgeday
    }, options), "\xA0each month."));
  }

  return _react.default.createElement("div", {
    id: "MonthlyGivingInfo"
  }, _react.default.createElement("h3", {
    className: "form-header__gkJCU"
  }, "How Often Do You Want to Give This Amount?"), _react.default.createElement("div", {
    className: "flex__ayltN flex-row__16BBq flex-between__3zYkx monthly-radio__o1E-N"
  }, _react.default.createElement(_RadioButton.default, {
    id: "monthly",
    name: "monthly-toggle",
    label: "Monthly Gift",
    checked: monthly,
    handleRadioClick: handleRadioClick
  }), _react.default.createElement(_RadioButton.default, {
    id: "single",
    name: "monthly-toggle",
    label: "Single Gift",
    checked: single,
    handleRadioClick: handleRadioClick
  })), monthlyChecked ? renderCCInfo() : null);
}

var _default = MonthlyRadioGroup;
exports.default = _default;
},{"react":"node_modules/react/index.js","./RadioButton":"src/Components/RadioButton.js","./styles/monthly-radio.module.css":"src/Components/styles/monthly-radio.module.css","./styles/flex.module.css":"src/Components/styles/flex.module.css"}],"src/Components/styles/input.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "form-input": "form-input__TVgJh",
  "form-group": "form-group__1kRMz",
  "form-group--Title": "form-group--Title__3ZgMv",
  "form-group--Firstname": "form-group--Firstname__2zXJY",
  "form-group--Lastname": "form-group--Lastname__3Kuo5",
  "form-group--State": "form-group--State__2nNHh",
  "form-group--Country": "form-group--Country__1SeyZ",
  "form-group--Phone": "form-group--Phone__3sVYV",
  "form-group--Email": "form-group--Email__2yGgg",
  "form-control": "form-control__1RcRn",
  "error": "error__1zQ64",
  "amount-error": "amount-error__111AJ",
  "form-group--City": "form-group--City__3Zk-Y",
  "form-group--Zip": "form-group--Zip__237PV"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/SelectGroup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getClassName2 = _interopRequireDefault(require("babel-plugin-react-css-modules/dist/browser/getClassName"));

var _react = _interopRequireDefault(require("react"));

var _inputModule = _interopRequireDefault(require("./styles/input.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _styleModuleImportMap = {
  "styles": {
    "form-input": "form-input__TVgJh",
    "form-group": "form-group__1kRMz",
    "form-group--Title": "form-group--Title__3ZgMv",
    "form-group--Firstname": "form-group--Firstname__2zXJY",
    "form-group--Lastname": "form-group--Lastname__3Kuo5",
    "form-group--State": "form-group--State__2nNHh",
    "form-group--Country": "form-group--Country__1SeyZ",
    "form-group--Phone": "form-group--Phone__3sVYV",
    "form-group--Email": "form-group--Email__2yGgg",
    "form-control": "form-control__1RcRn",
    "error": "error__1zQ64",
    "amount-error": "amount-error__111AJ",
    "form-group--City": "form-group--City__3Zk-Y",
    "form-group--Zip": "form-group--Zip__237PV"
  }
};

if (module.hot) {
  module.hot.accept("./styles/input.module.css", function () {
    require("./styles/input.module.css");
  });
}

function SelectGroup(_ref) {
  var id = _ref.id,
      specialStyle = _ref.specialStyle,
      required = _ref.required,
      error = _ref.error,
      value = _ref.value,
      handleInputChange = _ref.handleInputChange,
      options = _ref.options;
  return _react.default.createElement("div", {
    id: "form-field-".concat(id),
    className: (0, _getClassName2.default)("".concat(specialStyle ? specialStyle : "", " styles.form-group"), _styleModuleImportMap, {
      "handleMissingStyleName": "warn"
    })
  }, _react.default.createElement("label", {
    htmlFor: id
  }, id, _react.default.createElement("span", null, required ? '*' : '')), _react.default.createElement("select", {
    id: id,
    name: id,
    required: required,
    value: value,
    onChange: handleInputChange,
    "aria-invalid": error ? true : false,
    className: (0, _getClassName2.default)("styles.form-control".concat(error ? " styles.error" : ""), _styleModuleImportMap, {
      "handleMissingStyleName": "warn"
    })
  }, options), _react.default.createElement("div", {
    className: "error__1zQ64"
  }, error));
}

var _default = SelectGroup;
exports.default = _default;
},{"babel-plugin-react-css-modules/dist/browser/getClassName":"node_modules/babel-plugin-react-css-modules/dist/browser/getClassName.js","react":"node_modules/react/index.js","./styles/input.module.css":"src/Components/styles/input.module.css"}],"src/Components/InputGroup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getClassName2 = _interopRequireDefault(require("babel-plugin-react-css-modules/dist/browser/getClassName"));

var _react = _interopRequireDefault(require("react"));

var _inputModule = _interopRequireDefault(require("./styles/input.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _styleModuleImportMap = {
  "styles": {
    "form-input": "form-input__TVgJh",
    "form-group": "form-group__1kRMz",
    "form-group--Title": "form-group--Title__3ZgMv",
    "form-group--Firstname": "form-group--Firstname__2zXJY",
    "form-group--Lastname": "form-group--Lastname__3Kuo5",
    "form-group--State": "form-group--State__2nNHh",
    "form-group--Country": "form-group--Country__1SeyZ",
    "form-group--Phone": "form-group--Phone__3sVYV",
    "form-group--Email": "form-group--Email__2yGgg",
    "form-control": "form-control__1RcRn",
    "error": "error__1zQ64",
    "amount-error": "amount-error__111AJ",
    "form-group--City": "form-group--City__3Zk-Y",
    "form-group--Zip": "form-group--Zip__237PV"
  }
};

if (module.hot) {
  module.hot.accept("./styles/input.module.css", function () {
    require("./styles/input.module.css");
  });
}

function InputGroup(_ref) {
  var id = _ref.id,
      specialStyle = _ref.specialStyle,
      label = _ref.label,
      required = _ref.required,
      international = _ref.international,
      error = _ref.error,
      value = _ref.value,
      type = _ref.type,
      maxLength = _ref.maxLength,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      validation = _ref.validation,
      handleInputChange = _ref.handleInputChange;
  return _react.default.createElement("div", {
    id: "form-field-".concat(id),
    className: (0, _getClassName2.default)("".concat(specialStyle ? specialStyle : "", " styles.form-group"), _styleModuleImportMap, {
      "handleMissingStyleName": "warn"
    })
  }, _react.default.createElement("label", {
    htmlFor: id
  }, label, _react.default.createElement("span", null, required ? '*' : ''), international ? _react.default.createElement("small", {
    style: {
      fontSize: "10px"
    }
  }, "(Outside U.S. use \u201CNA\u201D}") : null), _react.default.createElement("input", {
    type: type,
    id: id,
    maxLength: maxLength,
    name: id,
    placeholder: placeholder,
    required: required,
    value: value,
    onChange: handleInputChange,
    "aria-invalid": error ? true : false,
    disabled: disabled,
    pattern: validation ? validation : ".*",
    className: (0, _getClassName2.default)("styles.form-control".concat(error ? " styles.error" : ""), _styleModuleImportMap, {
      "handleMissingStyleName": "warn"
    })
  }), _react.default.createElement("div", {
    className: "error__1zQ64"
  }, error));
}

var _default = InputGroup;
exports.default = _default;
},{"babel-plugin-react-css-modules/dist/browser/getClassName":"node_modules/babel-plugin-react-css-modules/dist/browser/getClassName.js","react":"node_modules/react/index.js","./styles/input.module.css":"src/Components/styles/input.module.css"}],"src/Components/styles/form-row.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "divider-title": "divider-title__RKyAh",
  "line": "line__2gLKV",
  "name-address__info": "name-address__info__15587",
  "form-row": "form-row__3cr4u",
  "ship-to-yes-row": "ship-to-yes-row__3W-kN",
  "error": "error__2XDgr",
  "amount-error": "amount-error__3Dfff",
  "submit-error": "submit-error__12SEb",
  "submit-row": "submit-row__S_uiW",
  "submit-button": "submit-button__LRMQT",
  "invalid": "invalid__1qggJ",
  "shipping-address__container": "shipping-address__container__1Nmd9",
  "shipping-address__info": "shipping-address__info__gMF88",
  "name-row": "name-row__1AcL3",
  "email-phone-row": "email-phone-row__3HghI",
  "city-state-row": "city-state-row__CzC30",
  "zip-country-row": "zip-country-row__x4uyF"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/NameBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SelectGroup = _interopRequireDefault(require("./SelectGroup"));

var _InputGroup = _interopRequireDefault(require("./InputGroup"));

var _formRowModule = _interopRequireDefault(require("./styles/form-row.module.css"));

var _flexModule = _interopRequireDefault(require("./styles/flex.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (module.hot) {
  module.hot.accept("./styles/flex.module.css", function () {
    require("./styles/flex.module.css");
  });
}

if (module.hot) {
  module.hot.accept("./styles/form-row.module.css", function () {
    require("./styles/form-row.module.css");
  });
}

function TitleDropdown(_ref) {
  var value = _ref.value,
      error = _ref.error,
      handleInputChange = _ref.handleInputChange;
  var vals = ['', "Mr", "Ms", "Mrs", "Mr and Mrs"];
  var options = vals.map(function (el, ind) {
    return _react.default.createElement("option", {
      key: "title-".concat(ind),
      value: el
    }, ind === 0 ? _react.default.createElement(_react.default.Fragment, null, "Title* \u25BF") : el);
  });
  return _react.default.createElement(_SelectGroup.default, {
    id: "Title",
    specialStyle: "styles.form-group--Title",
    required: true,
    value: value,
    error: error,
    handleInputChange: handleInputChange,
    options: options
  });
}
/**
* Function to render a name input
* @param {String} type - either 'First', 'Last', or 'Middle' 
* @param {Boolean} required 
* @param {Function} handleInputChange
* @param {String} value
* @param {String} error
* @returns {JSX} - InputGroup with given parameters
*/


function NameInput(_ref2) {
  var type = _ref2.type,
      required = _ref2.required,
      handleInputChange = _ref2.handleInputChange,
      value = _ref2.value,
      error = _ref2.error;
  var id = "".concat(type, "name");
  var label = "".concat(type, " Name");
  var specialStyle = "styles.form-group--" + id; // console.log({id, label, specialStyle})

  return _react.default.createElement(_InputGroup.default, {
    type: "text",
    id: id,
    specialStyle: specialStyle,
    label: label,
    placeholder: required ? label + "*" : label,
    maxLength: type === "Last" ? 25 : 20,
    required: required,
    value: value,
    handleInputChange: handleInputChange,
    error: error
  });
}
/**
* Function to render spousename input
* @param {String} value
* @param {String} error
* @param {Function} handleInputChange
* @returns {JSX} - InputGroup with given parameters
*/


function SpouseInput(_ref3) {
  var value = _ref3.value,
      error = _ref3.error,
      handleInputChange = _ref3.handleInputChange;
  return _react.default.createElement("div", {
    className: "form-row__3cr4u flex__ayltN flex-row__16BBq flex-between__3zYkx"
  }, _react.default.createElement(_InputGroup.default, {
    type: "text",
    id: "Spousename",
    specialStyle: "",
    label: "Spouse\u2019s Name",
    placeholder: "Spouse\u2019s First and Last Name",
    maxLength: "100",
    required: false,
    value: value,
    handleInputChange: handleInputChange,
    error: error
  }));
}

function NameBlock(_ref4) {
  var getMiddleName = _ref4.getMiddleName,
      getSuffix = _ref4.getSuffix,
      getSpouseInfo = _ref4.getSpouseInfo,
      fields = _ref4.fields,
      errors = _ref4.errors,
      handleInputChange = _ref4.handleInputChange;

  if (!getMiddleName && !getSuffix) {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
      className: "form-row__3cr4u name-row__1AcL3 flex__ayltN flex-row__16BBq flex-between__3zYkx"
    }, _react.default.createElement(TitleDropdown, {
      value: fields.Title,
      error: errors.Title,
      handleInputChange: handleInputChange
    }), _react.default.createElement(NameInput, {
      type: "First",
      required: true,
      handleInputChange: handleInputChange,
      value: fields["Firstname"],
      error: errors["Firstname"]
    }), _react.default.createElement(NameInput, {
      type: "Last",
      required: true,
      handleInputChange: handleInputChange,
      value: fields["Lastname"],
      error: errors["Lastname"]
    })), getSpouseInfo && _react.default.createElement(SpouseInput, {
      value: fields.Spousename,
      error: errors.Spousename,
      handleInputChange: handleInputChange
    }));
  } else {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
      className: "form-row__3cr4u flex__ayltN flex-row__16BBq flex-between__3zYkx"
    }, _react.default.createElement(TitleDropdown, {
      value: fields.Title,
      error: errors.Title
    }), _react.default.createElement(NameInput, {
      type: "First",
      required: true,
      handleInputChange: handleInputChange,
      value: fields["Firstname"],
      error: errors["Firstname"]
    }), getMiddleName && _react.default.createElement(NameInput, {
      type: "Middle",
      required: true,
      handleInputChange: handleInputChange,
      value: fields["Middlename"],
      error: errors["Middlename"]
    })), _react.default.createElement("div", {
      className: "form-row__3cr4u flex__ayltN flex-row__16BBq flex-between__3zYkx"
    }, _react.default.createElement(NameInput, {
      type: "Last",
      required: true,
      handleInputChange: handleInputChange,
      value: fields["Lastname"],
      error: errors["Lastname"]
    }), getSuffix && _react.default.createElement(_SelectGroup.default, {
      id: "Suffix",
      specialStyle: "",
      required: false,
      value: fields.Suffix,
      error: errors.Suffix,
      handleInputChange: handleInputChange,
      options: [_react.default.createElement("option", {
        key: "suff-0",
        value: ""
      }, "Suffix* \u25BF"), _react.default.createElement("option", {
        key: "suff-1",
        value: "Jr"
      }, "Jr"), _react.default.createElement("option", {
        key: "suff-2",
        value: "Sr"
      }, "Sr"), _react.default.createElement("option", {
        key: "suff-3",
        value: "III"
      }, "III"), _react.default.createElement("option", {
        key: "suff-4",
        value: "IV"
      }, "IV"), _react.default.createElement("option", {
        key: "suff-5",
        value: "Esq"
      }, "Esq")]
    })), getSpouseInfo && _react.default.createElement(SpouseInput, {
      value: fields.Spousename,
      error: errors.Spousename,
      handleInputChange: handleInputChange
    }));
  }
}

var _default = NameBlock;
exports.default = _default;
},{"react":"node_modules/react/index.js","./SelectGroup":"src/Components/SelectGroup.js","./InputGroup":"src/Components/InputGroup.js","./styles/form-row.module.css":"src/Components/styles/form-row.module.css","./styles/flex.module.css":"src/Components/styles/flex.module.css"}],"src/config/dropdowns.json":[function(require,module,exports) {
module.exports = {
  "canadianProvinces": [["Alberta", "AB"], ["British Columbia", "BC"], ["Manitoba", "MB"], ["New Brunswick", "NB"], ["Newfoundland and Labrador", "NL"], ["Nova Scotia", "NS"], ["Northwest Territories", "NT"], ["Nunavut", "NU"], ["Ontario", "ON"], ["Prince Edward Island", "PE"], ["Quebec", "QC"], ["Saskatchewan", "SK"], ["Yukon Territory", "YT"]],
  "countries": ["Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Channel Islands", "Chile", "China", "Hong Kong Spcl. Admin. Region of China", "Macao Spcl. Admin. Region of China", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic People's Rep. of Korea", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Faeroe Islands", "Falkland Islands (Malvinas)", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federated States of)", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Occupied Palestinian Territory", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of Korea", "Republic of Moldova", "Réunion", "Romania", "Russian Federation", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Thailand", "The former Yugoslav Rep. of Macedonia", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United Republic of Tanzania", "United States", "United States Virgin Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"],
  "other": [["Other", "00"]],
  "usMilitary": [["APO/FPO ZIP 340", "AA"], ["APO/FPO ZIP\'S 090-098", "AE"], ["APO/FPO ZIP\'S 962-966", "AP"]],
  "usStates": [["Alaska", "AK"], ["Alabama", "AL"], ["Arkansas", "AR"], ["Arizona", "AZ"], ["California", "CA"], ["Colorado", "CO"], ["Connecticut", "CT"], ["District Of Columbia", "DC"], ["Delaware", "DE"], ["Florida", "FL"], ["Georgia", "GA"], ["Hawaii", "HI"], ["Iowa", "IA"], ["Idaho", "ID"], ["Illinois", "IL"], ["Indiana", "IN"], ["Kansas", "KS"], ["Kentucky", "KY"], ["Louisiana", "LA"], ["Massachusetts", "MA"], ["Maryland", "MD"], ["Maine", "ME"], ["Michigan", "MI"], ["Minnesota", "MN"], ["Missouri", "MO"], ["Mississippi", "MS"], ["Montana", "MT"], ["North Carolina", "NC"], ["North Dakota", "ND"], ["Nebraska", "NE"], ["New Hampshire", "NH"], ["New Jersey", "NJ"], ["New Mexico", "NM"], ["Nevada", "NV"], ["New York", "NY"], ["Ohio", "OH"], ["Oklahoma", "OK"], ["Oregon", "OR"], ["Pennsylvania", "PA"], ["Rhode Island", "RI"], ["South Carolina", "SC"], ["South Dakota", "SD"], ["Tennessee", "TN"], ["Texas", "TX"], ["Utah", "UT"], ["Virginia", "VA"], ["Vermont", "VT"], ["Washington", "WA"], ["Wisconsin", "WI"], ["West Virginia", "WV"], ["Wyoming", "WY"]],
  "usTerritories": [["American Samoa", "AS"], ["Federated States Of Micronesia", "FM"], ["Guam", "GU"], ["Marshall Islands", "MH"], ["Palau", "PW"], ["Northern Mariana Islands", "MP"], ["Puerto Rico", "PR"], ["Virgin Islands", "VI"]]
};
},{}],"src/Components/helpers/renderStateOptions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dropdowns = require("../../config/dropdowns.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStateOptions(international) {
  function renderOptGroup(type, options) {
    return _react.default.createElement("optgroup", {
      key: type.replace(" ", ""),
      label: type
    }, options.map(function (opt, i) {
      return _react.default.createElement("option", {
        key: "".concat(type.replace(' ', ''), "State-").concat(i),
        value: opt[1]
      }, opt[0]);
    }));
  }

  var optGroups = [];
  var states = renderOptGroup("U.S. States", _dropdowns.usStates);
  var military = renderOptGroup("U.S. Military", _dropdowns.usMilitary);
  var territories = renderOptGroup("U.S. Territories", _dropdowns.usTerritories);
  var otherOpt = renderOptGroup("Other", _dropdowns.other);
  var provinces = null;

  if (international) {
    provinces = renderOptGroup("Canadian Provinces", _dropdowns.canadianProvinces);
  }

  optGroups.push(states, military, provinces, territories, otherOpt);
  return optGroups;
}

var _default = getStateOptions;
exports.default = _default;
},{"react":"node_modules/react/index.js","../../config/dropdowns.json":"src/config/dropdowns.json"}],"src/Components/ShippingAddressBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SelectGroup = _interopRequireDefault(require("./SelectGroup"));

var _InputGroup = _interopRequireDefault(require("./InputGroup"));

var _formRowModule = _interopRequireDefault(require("./styles/form-row.module.css"));

var _flexModule = _interopRequireDefault(require("./styles/flex.module.css"));

var _renderStateOptions = _interopRequireDefault(require("./helpers/renderStateOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (module.hot) {
  module.hot.accept("./styles/flex.module.css", function () {
    require("./styles/flex.module.css");
  });
}

if (module.hot) {
  module.hot.accept("./styles/form-row.module.css", function () {
    require("./styles/form-row.module.css");
  });
}

function ShippingAddressBlock(_ref) {
  var fields = _ref.fields,
      errors = _ref.errors,
      handleInputChange = _ref.handleInputChange,
      international = _ref.international;
  return _react.default.createElement("div", {
    id: "ShippingAddressInfo",
    className: "shipping-address__info__gMF88"
  }, _react.default.createElement("div", {
    className: "form-row__3cr4u"
  }, _react.default.createElement("div", {
    className: "flex__ayltN flex-row__16BBq flex-center__1HhTj"
  }, _react.default.createElement("hr", {
    className: "line__2gLKV"
  }), _react.default.createElement("div", {
    className: "divider-title__RKyAh"
  }, "Shipping Address"), _react.default.createElement("hr", {
    className: "line__2gLKV"
  }))), _react.default.createElement("div", {
    className: "form-row__3cr4u flex__ayltN flex-row__16BBq flex-between__3zYkx"
  }, _react.default.createElement(_InputGroup.default, {
    type: "text",
    id: "ShipToName",
    specialStyle: "",
    label: "Name",
    placeholder: "First and Last Name",
    maxLength: "100",
    required: fields.ShipToYes,
    value: fields.ShipToName,
    handleInputChange: handleInputChange,
    error: errors.ShipToName
  })), _react.default.createElement("div", {
    className: "form-row__3cr4u flex__ayltN flex-row__16BBq flex-between__3zYkx"
  }, _react.default.createElement(_InputGroup.default, {
    type: "text",
    id: "ShipToAddress1",
    specialStyle: "",
    label: "Address",
    placeholder: "Shipping Address*",
    maxLength: "64",
    required: fields.ShipToYes,
    value: fields.ShipToAddress1,
    handleInputChange: handleInputChange,
    error: errors.ShipToAddress1
  })), _react.default.createElement("div", {
    className: "form-row__3cr4u flex__ayltN flex-row__16BBq flex-between__3zYkx"
  }, _react.default.createElement(_InputGroup.default, {
    type: "text",
    id: "ShipToAddress2",
    specialStyle: "",
    label: "Address2",
    placeholder: "Shipping Address Line 2",
    maxLength: "64",
    required: false,
    value: fields.ShipToAddress2,
    handleInputChange: handleInputChange,
    error: errors.ShipToAddress2
  })), _react.default.createElement("div", {
    className: "form-row__3cr4u city-state-row__CzC30 flex__ayltN flex-row__16BBq flex-between__3zYkx"
  }, _react.default.createElement(_InputGroup.default, {
    type: "text",
    id: "ShipToCity",
    specialStyle: "styles.form-group--City",
    label: "City",
    placeholder: "City",
    maxLength: "64",
    required: fields.ShipToYes,
    value: fields.ShipToCity,
    handleInputChange: handleInputChange,
    error: errors.ShipToCity
  }), _react.default.createElement(_SelectGroup.default, {
    id: "ShipToState",
    specialStyle: "styles.form-group--State",
    required: fields.ShipToYes,
    value: fields.ShipToState,
    error: errors.ShipToState,
    handleInputChange: handleInputChange,
    options: [_react.default.createElement("option", {
      key: "shiptostate-base-0",
      value: ""
    }, "State* \u25BF"), (0, _renderStateOptions.default)(international)]
  })), _react.default.createElement("div", {
    className: "form-row__3cr4u flex__ayltN flex-row__16BBq flex-between__3zYkx"
  }, _react.default.createElement(_InputGroup.default, {
    type: "text",
    id: "ShipToZip",
    specialStyle: "",
    label: "Zip",
    placeholder: "Zip*",
    maxLength: "5",
    required: fields.ShipToYes,
    value: fields.ShipToZip,
    handleInputChange: handleInputChange,
    error: errors.ShipToZip,
    international: international
  })));
}

var _default = ShippingAddressBlock;
exports.default = _default;
},{"react":"node_modules/react/index.js","./SelectGroup":"src/Components/SelectGroup.js","./InputGroup":"src/Components/InputGroup.js","./styles/form-row.module.css":"src/Components/styles/form-row.module.css","./styles/flex.module.css":"src/Components/styles/flex.module.css","./helpers/renderStateOptions":"src/Components/helpers/renderStateOptions.js"}],"src/Components/AddressBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputGroup = _interopRequireDefault(require("./InputGroup"));

var _SelectGroup = _interopRequireDefault(require("./SelectGroup"));

var _formRowModule = _interopRequireDefault(require("./styles/form-row.module.css"));

var _flexModule = _interopRequireDefault(require("./styles/flex.module.css"));

var _renderStateOptions = _interopRequireDefault(require("./helpers/renderStateOptions"));

var _dropdowns = require("../config/dropdowns.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (module.hot) {
  module.hot.accept("./styles/flex.module.css", function () {
    require("./styles/flex.module.css");
  });
}

if (module.hot) {
  module.hot.accept("./styles/form-row.module.css", function () {
    require("./styles/form-row.module.css");
  });
}

function AddressBlock(_ref) {
  var fields = _ref.fields,
      errors = _ref.errors,
      handleInputChange = _ref.handleInputChange,
      getPhone = _ref.getPhone,
      international = _ref.international;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "form-row__3cr4u flex__ayltN flex-row__16BBq flex-between__3zYkx"
  }, _react.default.createElement(_InputGroup.default, {
    type: "text",
    id: "Address1",
    specialStyle: "",
    label: "Address",
    placeholder: "Address*",
    maxLength: "31",
    required: true,
    value: fields.Address1,
    handleInputChange: handleInputChange,
    error: errors.Address1
  })), _react.default.createElement("div", {
    className: "form-row__3cr4u flex__ayltN flex-row__16BBq flex-between__3zYkx"
  }, _react.default.createElement(_InputGroup.default, {
    type: "text",
    id: "Address2",
    specialStyle: "",
    label: "Address2",
    placeholder: "Address Line 2",
    maxLength: "31",
    required: false,
    value: fields.Address2,
    handleInputChange: handleInputChange,
    error: errors.Address2
  })), _react.default.createElement("div", {
    className: "form-row__3cr4u city-state-row__CzC30 flex__ayltN flex-row__16BBq flex-between__3zYkx"
  }, _react.default.createElement(_InputGroup.default, {
    type: "text",
    id: "City",
    specialStyle: "styles.form-group--City",
    label: "City",
    placeholder: "City*",
    maxLength: "28",
    required: true,
    value: fields.City,
    handleInputChange: handleInputChange,
    error: errors.City
  }), _react.default.createElement(_SelectGroup.default, {
    id: "State",
    specialStyle: "styles.form-group--State",
    required: true,
    value: fields.State,
    error: errors.State,
    handleInputChange: handleInputChange,
    options: [_react.default.createElement("option", {
      key: "state-base-0",
      value: ""
    }, "State* \u25BF"), (0, _renderStateOptions.default)(international)]
  })), _react.default.createElement("div", {
    className: "form-row__3cr4u zip-country-row__x4uyF flex__ayltN flex-row__16BBq flex-between__3zYkx"
  }, _react.default.createElement(_InputGroup.default, {
    type: "text",
    id: "Zip",
    specialStyle: "styles.form-group--Zip",
    label: "Zip",
    placeholder: "Zip*",
    maxLength: fields.Country != "US" ? 25 : 5,
    required: true,
    value: fields.Zip,
    handleInputChange: handleInputChange,
    error: errors.Zip,
    international: international
  }), international && _react.default.createElement(_SelectGroup.default, {
    id: "Country",
    specialStyle: "styles.form-group--Country",
    required: true,
    value: fields.Country,
    error: errors.Country,
    handleInputChange: handleInputChange,
    options: [_react.default.createElement("option", {
      key: "country-base-0",
      value: ""
    }, "Country* \u25BF"), _dropdowns.countries.map(function (country, i) {
      return _react.default.createElement("option", {
        key: "country-".concat(i),
        value: country
      }, country);
    })]
  })), _react.default.createElement("div", {
    className: "form-row__3cr4u email-phone-row__3HghI flex__ayltN flex-row__16BBq flex-between__3zYkx"
  }, _react.default.createElement(_InputGroup.default, {
    type: "text",
    id: "Emailaddress",
    specialStyle: "styles.form-group--Email",
    label: "Email Address",
    placeholder: "Email Address*",
    maxLength: "128",
    required: true,
    value: fields.Emailaddress,
    handleInputChange: handleInputChange,
    error: errors.Emailaddress
  }), getPhone && _react.default.createElement(_InputGroup.default, {
    type: "text",
    id: "phone",
    specialStyle: "styles.form-group--Phone",
    label: "Phone Number",
    placeholder: "Phone",
    maxLength: "24",
    required: false,
    value: fields.phone,
    handleInputChange: handleInputChange,
    error: errors.phone
  })));
}

var _default = AddressBlock;
exports.default = _default;
},{"react":"node_modules/react/index.js","./InputGroup":"src/Components/InputGroup.js","./SelectGroup":"src/Components/SelectGroup.js","./styles/form-row.module.css":"src/Components/styles/form-row.module.css","./styles/flex.module.css":"src/Components/styles/flex.module.css","./helpers/renderStateOptions":"src/Components/helpers/renderStateOptions.js","../config/dropdowns.json":"src/config/dropdowns.json"}],"src/Components/styles/checkbox.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "checkbox-input": "checkbox-input__1XcRE"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/Checkbox.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _checkboxModule = _interopRequireDefault(require("./styles/checkbox.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (module.hot) {
  module.hot.accept("./styles/checkbox.module.css", function () {
    require("./styles/checkbox.module.css");
  });
}

function Checkbox(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("input", {
    type: "checkbox",
    className: "checkbox-input__1XcRE",
    id: props.id,
    name: props.id,
    checked: props.checked,
    onChange: props.handleInputChange
  }), _react.default.createElement("label", {
    htmlFor: props.id
  }, props.label));
}

var _default = Checkbox;
exports.default = _default;
},{"react":"node_modules/react/index.js","./styles/checkbox.module.css":"src/Components/styles/checkbox.module.css"}],"src/Components/FormOptionsBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _formRowModule = _interopRequireDefault(require("./styles/form-row.module.css"));

var _flexModule = _interopRequireDefault(require("./styles/flex.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (module.hot) {
  module.hot.accept("./styles/flex.module.css", function () {
    require("./styles/flex.module.css");
  });
}

if (module.hot) {
  module.hot.accept("./styles/form-row.module.css", function () {
    require("./styles/form-row.module.css");
  });
}

function FormOptionsBlock(_ref) {
  var id = _ref.id,
      checked = _ref.checked,
      handleInputChange = _ref.handleInputChange,
      label = _ref.label;
  return _react.default.createElement("div", {
    className: "form-row__3cr4u ship-to-yes-row__3W-kN flex__ayltN flex-row__16BBq flex-axes-center__33a6C"
  }, _react.default.createElement(_Checkbox.default, {
    id: id,
    checked: checked,
    handleInputChange: handleInputChange,
    label: label
  }));
}

var _default = FormOptionsBlock;
exports.default = _default;
},{"react":"node_modules/react/index.js","./Checkbox":"src/Components/Checkbox.js","./styles/form-row.module.css":"src/Components/styles/form-row.module.css","./styles/flex.module.css":"src/Components/styles/flex.module.css"}],"src/Components/SubmitButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _formRowModule = _interopRequireDefault(require("./styles/form-row.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (module.hot) {
  module.hot.accept("./styles/form-row.module.css", function () {
    require("./styles/form-row.module.css");
  });
}

function SubmitButton(_ref) {
  var hasErrors = _ref.hasErrors,
      error = _ref.error,
      handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;
  return _react.default.createElement("div", {
    className: "form-row__3cr4u submit-row__S_uiW"
  }, _react.default.createElement("input", {
    type: "submit",
    className: "submit-button__LRMQT",
    id: "submit",
    onClick: handleSubmit,
    disabled: submitting,
    value: "Continue to Payment \u279E"
  }), _react.default.createElement("div", {
    className: "error__2XDgr submit-error__12SEb"
  }, hasErrors && error ? error : hasErrors ? "Please scroll up to correct errors." : ""));
}

var _default = SubmitButton;
exports.default = _default;
},{"react":"node_modules/react/index.js","./styles/form-row.module.css":"src/Components/styles/form-row.module.css"}],"src/Components/styles/name-address-form.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "form-panel": "form-panel__2bLqQ",
  "fieldset": "fieldset__2zxYC",
  "name-address__info": "name-address__info__3TjNS",
  "form-header": "form-header__3OWCX",
  "divider-title": "divider-title__1zzty",
  "shipping-address__container": "shipping-address__container__1dAUs",
  "gift-choice": "gift-choice__vKNi_",
  "hidden": "hidden__88z0P",
  "error": "error__3olFm",
  "amount-error": "amount-error__2G2h0",
  "submit-error": "submit-error__3WT6H"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/helpers/error-types.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrorType = getErrorType;
var formErrors = {
  "Address Line 1 is required and must not exceed required length or contain HTML Markup": "Address1",
  "Address Line 2 must not exceed required length or contain HTML Markup": "Address2",
  "Country is required": "Country",
  "City, State, Zip Validatation Failed": "Zip",
  "Invalid Title": "Title",
  "First name is required and must not exceed required length or contain HTML Markup": "Firstname",
  "Last name is required and must not exceed required length or contain HTML Markup": "Lastname",
  "Middle name must not exceed required length or contain HTML Markup": "Middlename",
  "Suffix must not exceed required length or contain HTML Markup": "Suffix",
  "Spouse name must not exceed required length or contain HTML Markup": "Spousename",
  "Invalid Phone Number": "phone",
  "Invalid Email Address": "Emailaddress",
  "Monthly amount required -- minimum is a dollar": "amount",
  "Single amount required -- minimum is a dollar": "amount"
};
var breakingErrors = ["Invalid Transaction Type -- Montlhy, Single, or Product Only", "Charge day required for Monthly Credit Card Gifts", "Valid Client IP is required", "Valid Client Browser name is required", "Missing Donation Details", "Motivation text is required and must not exceed required length or contain HTML Markup"];
/**
 * Takes an Error message and returns type, either breaking for form
 * @param {string} message - text string returned from API
 * @returns {Object} - { breaking: Boolean, name: String}
 */

function getErrorType(message) {
  if (breakingErrors.indexOf(message) > -1) {
    return {
      breaking: true,
      name: ''
    };
  } else {
    var name = formErrors[message]; // console.log({name, message})

    if (!name) {
      if (message.includes("Postal")) {
        name = "Zip";
      } else if (message.includes("State")) {
        name = "State";
      } else {
        name = "City";
      }
    }

    return {
      breaking: false,
      name: name
    };
  }
}
},{}],"src/Components/NameAddressForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getClassName2 = _interopRequireDefault(require("babel-plugin-react-css-modules/dist/browser/getClassName"));

var _react = _interopRequireWildcard(require("react"));

var _GivingArray = _interopRequireDefault(require("./GivingArray"));

var _ProductDisplay = _interopRequireDefault(require("./ProductDisplay"));

var _FundDisplay = _interopRequireDefault(require("./FundDisplay"));

var _MonthlyRadioGroup = _interopRequireDefault(require("./MonthlyRadioGroup"));

var _NameBlock = _interopRequireDefault(require("./NameBlock"));

var _ShippingAddressBlock = _interopRequireDefault(require("./ShippingAddressBlock"));

var _AddressBlock = _interopRequireDefault(require("./AddressBlock"));

var _FormOptionsBlock = _interopRequireDefault(require("./FormOptionsBlock"));

var _SubmitButton = _interopRequireDefault(require("./SubmitButton"));

var _flexModule = _interopRequireDefault(require("./styles/flex.module.css"));

var _nameAddressFormModule = _interopRequireDefault(require("./styles/name-address-form.module.css"));

var _errorTypes = require("./helpers/error-types");

var _fetchHelpers = require("./helpers/fetch-helpers");

var _crypt = require("./helpers/crypt");

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _styleModuleImportMap = {
  "flex": {
    "flex": "flex__ayltN",
    "flex-row": "flex-row__16BBq",
    "flex-center": "flex-center__1HhTj",
    "flex-around": "flex-around__25IHb",
    "flex-between": "flex-between__3zYkx",
    "flex-left": "flex-left__3xW5i",
    "flex-start": "flex-start__1kKvj",
    "flex-end": "flex-end__I3jk2",
    "flex-row-reverse": "flex-row-reverse__39Jm4",
    "flex-axes-center": "flex-axes-center__33a6C",
    "flex-column": "flex-column__lQLZG",
    "flex-wrap": "flex-wrap__1FN6A",
    "flex-grow": "flex-grow__1FqT_",
    "flex-no-grow": "flex-no-grow__3iHTz",
    "flex-shrink": "flex-shrink__1LQT2"
  },
  "styles": {
    "form-panel": "form-panel__2bLqQ",
    "fieldset": "fieldset__2zxYC",
    "name-address__info": "name-address__info__3TjNS",
    "form-header": "form-header__3OWCX",
    "divider-title": "divider-title__1zzty",
    "shipping-address__container": "shipping-address__container__1dAUs",
    "gift-choice": "gift-choice__vKNi_",
    "hidden": "hidden__88z0P",
    "error": "error__3olFm",
    "amount-error": "amount-error__2G2h0",
    "submit-error": "submit-error__3WT6H"
  }
};

if (module.hot) {
  module.hot.accept("./styles/name-address-form.module.css", function () {
    require("./styles/name-address-form.module.css");
  });
}

if (module.hot) {
  module.hot.accept("./styles/flex.module.css", function () {
    require("./styles/flex.module.css");
  });
}

var email_regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    phone_regex = /1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})/,
    zip_regex = /^\d{5}$/,
    firstname_regex = /^([a-zA-Z0-9\-\.' ]+)$/i,
    lastname_regex = /^([a-zA-Z0-9\-\.' ]+)(?:(,|\s|,\s)(jr|sr|ii|iii|iv|esq)\.*)?$/i;

var getDay = function getDay() {
  var date = new Date().getDate();
  return date >= 2 && date <= 28 ? date : 2;
};

var NameAddressForm =
/*#__PURE__*/
function (_Component) {
  _inherits(NameAddressForm, _Component);

  function NameAddressForm(props) {
    var _this;

    _classCallCheck(this, NameAddressForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NameAddressForm).call(this, props)); // console.log({hydratedData: props.hydratedData})

    var fields = {
      Zip: props.hydratedData ? props.hydratedData.Zip : "",
      Monthlypledgeday: props.hydratedData && props.hydratedData.Monthlypledgeday ? props.hydratedData.Monthlypledgeday : getDay(),
      Title: props.hydratedData ? props.hydratedData.Title : "",
      Firstname: props.hydratedData ? props.hydratedData.Firstname : "",
      Middlename: props.hydratedData ? props.hydratedData.Middlename : "",
      Lastname: props.hydratedData ? props.hydratedData.Lastname : "",
      Suffix: props.hydratedData ? props.hydratedData.Suffix : "",
      Spousename: props.hydratedData ? props.hydratedData.Spousename : "",
      Address1: props.hydratedData ? props.hydratedData.Address1 : "",
      Address2: props.hydratedData ? props.hydratedData.Address2 : "",
      City: props.hydratedData ? props.hydratedData.City : "",
      State: props.hydratedData ? props.hydratedData.State : "",
      Country: props.hydratedData ? props.hydratedData.Country : props.international ? "" : "United States",
      Emailaddress: props.hydratedData ? props.hydratedData.Emailaddress : "",
      phone: props.hydratedData ? props.hydratedData.Phoneareacode + props.hydratedData.Phoneexchange + props.hydratedData.Phonenumber : "",
      savePersonalInfo: true,
      ShipToYes: props.hydratedData && props.hydratedData.ShipTo === "Yes" ? true : false,
      ShipToName: props.hydratedData ? props.hydratedData.ShipToName : "",
      ShipToAddress1: props.hydratedData ? props.hydratedData.ShipToAddress1 : "",
      ShipToAddress2: props.hydratedData ? props.hydratedData.ShipToAddress2 : "",
      ShipToCity: props.hydratedData ? props.hydratedData.ShipToCity : "",
      ShipToZip: props.hydratedData ? props.hydratedData.ShipToZip : "",
      ShipToState: props.hydratedData ? props.hydratedData.ShipToState : ""
    };
    var errors = {};

    for (var field in fields) {
      errors[field] = "";
    }

    errors.amount = "";
    _this.state = {
      monthlyChecked: props.defaultOption == "monthly",
      totalGift: 0,
      submitted: false,
      submitting: false,
      fundSelected: false,
      fundInfo: {},
      productsOrdered: false,
      productInfo: [],
      givingInfo: [],
      cart: {
        items: []
      },
      fields: fields,
      errors: errors,
      defaultAmount: props.defaultAmount,
      defaultOption: props.defaultOption,
      hydratedAdditionalGift: 0,
      initialUpdate: false
    };
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.validateInput = _this.validateInput.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleRadioClick = _this.handleRadioClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.addToCart = _this.addToCart.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.removeFromCart = _this.removeFromCart.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateDonation = _this.updateDonation.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateProducts = _this.updateProducts.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.callZipCityStateService = _this.callZipCityStateService.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.callAddressVerification = _this.callAddressVerification.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(NameAddressForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // check to see if this is a postback from confirmation page
      if (this.props.hydratedData && this.props.hydratedData.MultipleDonations) {
        // initialize variables in such a way as to not mutate state
        var amount = 0,
            isMonthly = false,
            additionalGift = 0;

        var items = _toConsumableArray(this.state.cart.items);

        var products = this.props.products;

        var productInfo = _toConsumableArray(this.state.productInfo),
            productsOrdered = this.state.productsOrdered,
            givingInfo = _toConsumableArray(this.state.givingInfo);

        var MultipleDonations = _toConsumableArray(this.props.hydratedData.MultipleDonations); // loop through multiple donations and reconstruct virual cart


        var _loop = function _loop(i) {
          var _MultipleDonations$i = MultipleDonations[i],
              DetailName = _MultipleDonations$i.DetailName,
              DetailDescription = _MultipleDonations$i.DetailDescription,
              DetailCprojCredit = _MultipleDonations$i.DetailCprojCredit,
              DetailCprojMail = _MultipleDonations$i.DetailCprojMail,
              PledgeAmount = _MultipleDonations$i.PledgeAmount;
          var type = DetailName === "MP" || DetailName === "SPGF" ? "donation" : "product";

          if (type == "donation") {
            amount = +PledgeAmount;
            isMonthly = DetailName === "MP" ? true : false;
            givingInfo.push({
              amount: amount,
              isMonthly: isMonthly
            });
          }

          if (type == "product") {
            var idx = products.findIndex(function (el) {
              return el.DetailDescription === DetailDescription;
            });

            if (idx > -1) {
              var quantity = parseInt(DetailName.split('|')[1]);
              productInfo.push({
                idx: idx,
                quantity: quantity
              });
              productsOrdered = true;
            } else {
              type = "additionalGift";
              additionalGift = +PledgeAmount;
            }
          }

          items.push({
            type: type,
            PledgeAmount: PledgeAmount,
            DetailCprojMail: DetailCprojMail,
            DetailCprojCredit: DetailCprojCredit,
            DetailDescription: DetailDescription,
            DetailName: DetailName,
            monthly: isMonthly
          });
        };

        for (var i = 0; i < MultipleDonations.length; i++) {
          _loop(i);
        } // console.log({items, amount, additionalGift})


        var monthlyChecked = isMonthly;
        this.setState({
          cart: {
            items: items
          },
          givingInfo: givingInfo,
          productInfo: productInfo,
          productsOrdered: productsOrdered,
          hydratedAdditionalGift: additionalGift,
          monthlyChecked: monthlyChecked
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // if user has selected to save personal info,  
      var savePersonalInfo = this.state.fields.savePersonalInfo;

      if (savePersonalInfo) {
        // get all user information from form
        var _this$state$fields = this.state.fields,
            Address1 = _this$state$fields.Address1,
            Address2 = _this$state$fields.Address2,
            City = _this$state$fields.City,
            Country = _this$state$fields.Country,
            Emailaddress = _this$state$fields.Emailaddress,
            Firstname = _this$state$fields.Firstname,
            Middlename = _this$state$fields.Middlename,
            Lastname = _this$state$fields.Lastname,
            Spousename = _this$state$fields.Spousename,
            Suffix = _this$state$fields.Suffix,
            State = _this$state$fields.State,
            Title = _this$state$fields.Title,
            Zip = _this$state$fields.Zip,
            phone = _this$state$fields.phone;
        var Phoneareacode = phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[1] : "",
            Phoneexchange = phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[2] : "",
            Phonenumber = phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[3] : "";
        var formData = {
          Address1: Address1,
          Address2: Address2,
          City: City,
          Country: Country,
          Emailaddress: Emailaddress,
          Firstname: Firstname,
          Middlename: Middlename,
          Lastname: Lastname,
          Phoneareacode: Phoneareacode,
          Phoneexchange: Phoneexchange,
          Phonenumber: Phonenumber,
          Spousename: Spousename,
          Suffix: Suffix,
          State: State,
          Title: Title,
          Zip: Zip // lifetime of stored data on this form

        };
        var days = 30; //convert days into milliseconds

        var lifetime = days * 24 * 60 * 60 * 1000; // n days = x days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
        // encrypt and add to local storage,

        var info = (0, _crypt.crypt)({
          formData: formData,
          lifetime: lifetime
        });
        localStorage.setItem("info", info);
      } else {
        // otherwise remove any stored data from local storage
        localStorage.removeItem("info");
      }
    }
    /**
     * Updates cart to remove any selected donations and toggles between monthly and single giving
     * @param {Event} e 
     */

  }, {
    key: "handleRadioClick",
    value: function handleRadioClick(e) {
      var items = _toConsumableArray(this.state.cart.items);

      var found = items.findIndex(function (el) {
        return el && el.type == "donation";
      });
      var id = e.target.id;

      if (found > -1) {
        items[found] = {
          type: 'donation',
          PledgeAmount: 0,
          DetailCprojMail: id == "singlegift" ? this.props.singlePledgeData.DetailCprojMail : this.props.monthlyPledgeData.DetailCprojMail,
          DetailCprojCredit: id == "singlegift" ? this.props.singlePledgeData.DetailCprojCredit : this.props.monthlyPledgeData.DetailCprojCredit,
          DetailDescription: id == "singlegift" ? "Single Pledge" : "Monthly Pledge",
          DetailName: id == "singlegift" ? "SPGF" : "MP",
          monthly: id == "singlegift" ? false : true
        };
      } // console.log({items})


      if (id == "singlegift") {
        this.setState({
          monthlyChecked: false,
          cart: {
            items: items
          }
        });
      } else {
        this.setState({
          monthlyChecked: true,
          cart: {
            items: items
          }
        });
      }
    }
  }, {
    key: "handleInputChange",
    value: function () {
      var _handleInputChange = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(e) {
        var target, value, name, fields, errors, error, isZip;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                target = e.target;
                value = target.type === 'checkbox' ? target.checked : target.value;
                name = target.name;
                fields = _extends({}, this.state.fields), errors = _extends({}, this.state.errors);
                isZip = name.includes("Zip") && value.length >= 5;

                if (!isZip) {
                  _context.next = 15;
                  break;
                }

                if (zip_regex.test(value)) {
                  _context.next = 10;
                  break;
                }

                error = "Invalid Postal Code";
                _context.next = 13;
                break;

              case 10:
                _context.next = 12;
                return this.callZipCityStateService(name, value);

              case 12:
                error = _context.sent;

              case 13:
                _context.next = 16;
                break;

              case 15:
                error = this.validateInput(false, name, value);

              case 16:
                errors[name] = error;

                if (isZip) {
                  this.setState({
                    errors: errors
                  });
                } else {
                  fields[name] = value;
                  this.setState({
                    fields: fields,
                    errors: errors
                  });
                }

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleInputChange(_x) {
        return _handleInputChange.apply(this, arguments);
      };
    }()
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(e) {
        var _this2 = this;

        var items, pledgeFound, addGiftFound, _errors, errors, isValidForm, zipError, addressError, shipZipError, shipAddressError, fields, fieldNames, i, error, name, Address1, Address2, City, Country, Emailaddress, Firstname, Middlename, Lastname, Spousename, Suffix, State, Title, Zip, ShipToYes, ShipToAddress1, ShipToAddress2, ShipToCity, ShipToState, ShipToZip, ShipToCountry, ShipToName, phone, _this$props, mode, APIAccessID, MotivationText, subscriptions, AddContactYN, ActivityName, ContactSource, SectionName, proxy, ClientBrowser, UrlReferer, Phoneareacode, Phoneexchange, Phonenumber, TransactionType, isMonthly, DonationType, IsRecurringCreditCardDonation, Monthlypledgeday, Monthlypledgeamount, Singledonationamount, ShipTo, multipleDonations, MultipleDonations, data, msg, message, _getErrorType, breaking, _name;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();

                if (!this.state.submitting) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                // ie. disallow multiple submissions
                this.setState({
                  submitting: true
                }); //THINK THROUGH THIS LOGIC A LITTLE MORE

                items = _toConsumableArray(this.state.cart.items);
                pledgeFound = items.findIndex(function (el) {
                  return el && el.type == "donation";
                });
                addGiftFound = items.findIndex(function (el) {
                  return el && el.type == "additionalGift";
                });

                if (!(items.length == 0 || pledgeFound > -1 && items[pledgeFound].PledgeAmount == 0 && addGiftFound < 0 || pledgeFound < 0 && addGiftFound < 0)) {
                  _context2.next = 11;
                  break;
                }

                _errors = this.state.errors;
                _errors.amount = "Please make a valid donation";
                return _context2.abrupt("return", this.setState({
                  submitting: false,
                  errors: _errors
                }));

              case 11:
                errors = _extends({}, this.state.errors);
                isValidForm = true;

                if (!(this.state.fields.Country == "United States")) {
                  _context2.next = 58;
                  break;
                }

                _context2.prev = 14;
                _context2.next = 17;
                return this.callZipCityStateService("Zip", this.state.fields["Zip"]);

              case 17:
                zipError = _context2.sent;

                if (zipError) {
                  _context2.next = 29;
                  break;
                }

                _context2.prev = 19;
                _context2.next = 22;
                return this.callAddressVerification(this.state.fields["Address1"], this.state.fields["City"], this.state.fields["State"], this.state.fields["Zip"]);

              case 22:
                addressError = _context2.sent;
                _context2.next = 29;
                break;

              case 25:
                _context2.prev = 25;
                _context2.t0 = _context2["catch"](19);
                console.log("AddressVerificationError");
                console.error({
                  err: _context2.t0
                });

              case 29:
                if (!(this.state.fields["ShipToZip"] && this.state.fields.ShipToYes)) {
                  _context2.next = 40;
                  break;
                }

                _context2.prev = 30;
                _context2.next = 33;
                return this.callZipCityStateService("ShipToZip", this.state.fields["ShipToZip"]);

              case 33:
                shipZipError = _context2.sent;
                _context2.next = 40;
                break;

              case 36:
                _context2.prev = 36;
                _context2.t1 = _context2["catch"](30);
                console.log("CSZValidationError__SHIPPING");
                console.error({
                  err: _context2.t1
                });

              case 40:
                if (!(!shipZipError && this.state.fields.ShipToYes)) {
                  _context2.next = 51;
                  break;
                }

                _context2.prev = 41;
                _context2.next = 44;
                return this.callAddressVerification(this.state.fields["ShipToAddress1"], this.state.fields["ShipToCity"], this.state.fields["ShipToState"], this.state.fields["ShipToZip"]);

              case 44:
                shipAddressError = _context2.sent;
                _context2.next = 51;
                break;

              case 47:
                _context2.prev = 47;
                _context2.t2 = _context2["catch"](41);
                console.log("AddressVerificationError__SHIPPING");
                console.error({
                  err: _context2.t2
                });

              case 51:
                if (addressError || shipAddressError || zipError || shipZipError) {
                  isValidForm = false;
                  errors["Address1"] = addressError;
                  errors["ShipToAddress1"] = addressError;
                  errors["Zip"] = zipError;
                  errors["ShipToZip"] = shipZipError;
                }

                _context2.next = 58;
                break;

              case 54:
                _context2.prev = 54;
                _context2.t3 = _context2["catch"](14);
                console.log("CSZValidationError");
                console.error({
                  err: _context2.t3
                });

              case 58:
                fields = this.state.fields;
                fieldNames = Object.keys(fields);

                for (i = 0; i < fieldNames.length; i++) {
                  error = void 0;
                  name = fieldNames[i];

                  if (!name.includes("Zip")) {
                    error = this.validateInput(true, name, fields[name]);

                    if (error) {
                      isValidForm = false;
                      errors[name] = error;
                    }
                  }
                }

                if (isValidForm) {
                  _context2.next = 63;
                  break;
                }

                return _context2.abrupt("return", this.setState({
                  submitting: false,
                  errors: errors
                }));

              case 63:
                //deconstruct necessary fields from state
                Address1 = fields.Address1, Address2 = fields.Address2, City = fields.City, Country = fields.Country, Emailaddress = fields.Emailaddress, Firstname = fields.Firstname, Middlename = fields.Middlename, Lastname = fields.Lastname, Spousename = fields.Spousename, Suffix = fields.Suffix, State = fields.State, Title = fields.Title, Zip = fields.Zip, ShipToYes = fields.ShipToYes, ShipToAddress1 = fields.ShipToAddress1, ShipToAddress2 = fields.ShipToAddress2, ShipToCity = fields.ShipToCity, ShipToState = fields.ShipToState, ShipToZip = fields.ShipToZip, ShipToCountry = fields.ShipToCountry, ShipToName = fields.ShipToName, phone = fields.phone;
                _this$props = this.props, mode = _this$props.mode, APIAccessID = _this$props.APIAccessID, MotivationText = _this$props.MotivationText, subscriptions = _this$props.subscriptions, AddContactYN = _this$props.AddContactYN, ActivityName = _this$props.ActivityName, ContactSource = _this$props.ContactSource, SectionName = _this$props.SectionName, proxy = _this$props.proxy;
                ClientBrowser = window && window.navigator ? window.navigator.userAgent : '';
                UrlReferer = window.location.origin + window.location.pathname; //construct phone fields from regex

                Phoneareacode = phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[1] : "", Phoneexchange = phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[2] : "", Phonenumber = phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[3] : ""; //process cart

                TransactionType = "Product";
                isMonthly = pledgeFound > -1 ? items[pledgeFound].monthly : false;
                DonationType = isMonthly ? "CR" : "CC";
                IsRecurringCreditCardDonation = isMonthly;
                Monthlypledgeday = isMonthly ? this.state.fields.Monthlypledgeday : null;
                Monthlypledgeamount = isMonthly && pledgeFound > -1 ? items[pledgeFound].PledgeAmount : 0;
                Singledonationamount = !isMonthly && pledgeFound > -1 ? items[pledgeFound].PledgeAmount : 0;

                if (Monthlypledgeamount > 0) {
                  TransactionType = "Monthly";
                }

                if (Singledonationamount > 0) {
                  TransactionType = "Single";
                }

                ShipTo = ShipToYes === true ? "Yes" : "No";

                multipleDonations = function multipleDonations() {
                  return items.map(function (_ref, index) {
                    var DetailName = _ref.DetailName,
                        DetailDescription = _ref.DetailDescription,
                        DetailCprojCredit = _ref.DetailCprojCredit,
                        DetailCprojMail = _ref.DetailCprojMail,
                        PledgeAmount = _ref.PledgeAmount;

                    if (index === pledgeFound && _this2.state.fundSelected) {
                      DetailName = _this2.state.fundInfo.DetailName;
                      DetailDescription = _this2.state.fundInfo.DetailDescription;
                      DetailCprojCredit = _this2.state.fundInfo.DetailCprojCredit;
                      DetailCprojMail = _this2.state.fundInfo.DetailCprojMail;
                    }

                    return {
                      DetailName: DetailName,
                      DetailDescription: DetailDescription,
                      DetailCprojCredit: DetailCprojCredit,
                      DetailCprojMail: DetailCprojMail,
                      PledgeAmount: PledgeAmount
                    };
                  });
                };

                MultipleDonations = multipleDonations();
                data = {
                  ActivityName: ActivityName,
                  AddContactYN: AddContactYN,
                  Address1: Address1,
                  Address2: Address2,
                  APIAccessID: APIAccessID,
                  City: City,
                  ContactSource: ContactSource,
                  Country: Country,
                  DonationType: DonationType,
                  Emailaddress: Emailaddress,
                  Firstname: Firstname,
                  IsRecurringCreditCardDonation: IsRecurringCreditCardDonation,
                  Lastname: Lastname,
                  Middlename: Middlename,
                  Monthlypledgeamount: Monthlypledgeamount,
                  Monthlypledgeday: Monthlypledgeday,
                  MotivationText: MotivationText,
                  MultipleDonations: MultipleDonations,
                  Phoneareacode: Phoneareacode,
                  Phoneexchange: Phoneexchange,
                  Phonenumber: Phonenumber,
                  SectionName: SectionName,
                  ShipTo: ShipTo,
                  Singledonationamount: Singledonationamount,
                  Spousename: Spousename,
                  State: State,
                  Suffix: Suffix,
                  Title: Title,
                  TransactionType: TransactionType,
                  UrlReferer: UrlReferer,
                  Zip: Zip,
                  ClientBrowser: ClientBrowser,
                  ShipToAddress1: ShipToAddress1,
                  ShipToAddress2: ShipToAddress2,
                  ShipToCity: ShipToCity,
                  ShipToState: ShipToState,
                  ShipToZip: ShipToZip,
                  ShipToCountry: ShipToCountry,
                  ShipToName: ShipToName,
                  mode: mode //flatten subscription information

                };
                subscriptions.forEach(function (sub) {
                  return data[sub.key] = sub.value;
                }); // console.log({proxy})
                // console.log({data})

                _context2.prev = 82;
                _context2.next = 85;
                return (0, _fetchHelpers.callApi)(proxy, {
                  method: 'POST',
                  mode: 'cors',
                  headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                  },
                  body: JSON.stringify(data)
                });

              case 85:
                msg = _context2.sent;
                // console.log({msg, data})
                this.props.submitForm({
                  msg: msg,
                  data: data
                });
                _context2.next = 96;
                break;

              case 89:
                _context2.prev = 89;
                _context2.t4 = _context2["catch"](82);
                console.error(_context2.t4.message);
                message = _context2.t4.message;
                _getErrorType = (0, _errorTypes.getErrorType)(message), breaking = _getErrorType.breaking, _name = _getErrorType.name; // console.log({breaking, name})

                if (breaking) {
                  alert('There was an internal error submitting your form. Please check your information and try again or call us at 1-800-759-0700');
                } else {
                  errors[_name] = message;
                }

                this.setState({
                  submitting: false,
                  errors: errors
                });

              case 96:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[14, 54], [19, 25], [30, 36], [41, 47], [82, 89]]);
      }));

      return function handleSubmit(_x2) {
        return _handleSubmit.apply(this, arguments);
      };
    }()
    /**
     * Sets the state with new product order information from the product display
     * @param {Object} productInfo - Selected Fund 
     * @param {Number} productInfo.index - index of product being added or removed from cart
     * @param {Number} productInfo.quantity - number of total items
     */

  }, {
    key: "updateProducts",
    value: function updateProducts(_ref2) {
      var idx = _ref2.idx,
          quantity = _ref2.quantity;

      // productInfo and productsOrdered to be used by Product Display to calculate a total donation
      var productInfo = _toConsumableArray(this.state.productInfo),
          productsOrdered = this.state.productsOrdered;

      var found = productInfo.findIndex(function (prod) {
        return prod.idx === idx;
      });

      if (found > -1) {
        productInfo[found].quantity = quantity;
      } else {
        productInfo.push({
          idx: idx,
          quantity: quantity
        });
      }

      var totalProducts = productInfo.reduce(function (a, b) {
        return a + b.quantity;
      }, 0);
      productsOrdered = totalProducts ? true : false; //update cart by removing all instances of this particular product and adding back new quantity if any

      var items = _toConsumableArray(this.state.cart.items);

      var products = this.props.products;
      var _products$idx = products[idx],
          DetailName = _products$idx.DetailName,
          DetailCprojCredit = _products$idx.DetailCprojCredit,
          DetailCprojMail = _products$idx.DetailCprojMail,
          DetailDescription = _products$idx.DetailDescription,
          PledgeAmount = _products$idx.PledgeAmount;
      var newItems = items.filter(function (el) {
        return el.DetailDescription !== DetailDescription;
      });

      if (quantity) {
        newItems.push({
          type: 'product',
          PledgeAmount: +PledgeAmount * quantity,
          DetailCprojMail: DetailCprojMail,
          DetailCprojCredit: DetailCprojCredit,
          DetailDescription: DetailDescription,
          DetailName: DetailName + "|" + quantity
        });
      } // console.log({productInfo, productsOrdered, totalProducts, newItems})


      this.setState({
        productInfo: productInfo,
        productsOrdered: productsOrdered,
        cart: {
          items: newItems
        }
      });
    }
  }, {
    key: "addToCart",
    value: function addToCart(item) {
      var items = _toConsumableArray(this.state.cart.items);

      var found = items.findIndex(function (el) {
        return el && el.type == item.type;
      });

      if (found > -1) {
        items[found] = item;

        var _errors2 = _extends({}, this.state.errors);

        _errors2.amount = "";
        this.setState({
          errors: _errors2
        });
      } else {
        items.push(item);
      } // console.log({items})


      this.setState({
        cart: {
          items: items
        }
      });
    }
  }, {
    key: "removeFromCart",
    value: function removeFromCart(type) {
      var items = _toConsumableArray(this.state.cart.items);

      var found = items.findIndex(function (el) {
        return el && el.type == type;
      }); // console.log({type, found, items})

      if (found > -1) {
        items.splice(found, 1); // console.log({items})

        this.setState({
          cart: {
            items: items
          }
        });
      }
    }
    /**
     * Sets the state with new fund information from the fund select dropdown
     * @param {Object} fundInfo - Selected Fund 
     * @param {String} fundInfo.DetailName
     * @param {String} fundInfo.DetailDescription
     * @param {String} fundInfo.DetailCprojCredit
     * @param {String} fundInfo.DetailCprojMail
     */

  }, {
    key: "updateDonation",
    value: function updateDonation(fundInfo) {
      this.setState({
        fundSelected: true,
        fundInfo: fundInfo
      });
    }
    /**
     * Function to validate the input fields of the form
     * @param {Boolean} submitting - current state of the form, true if being submitted
     * @param {String} name - name of the input being validated
     * @param {*} value - String, Number or Boolean of value from the input
     * @returns {String} - an empty String if no errors, else a string with a single error message
     */

  }, {
    key: "validateInput",
    value: function validateInput(submitting, name, value) {
      var error = '';
      var international = this.state.international;
      var ShipToYes = this.state.fields.ShipToYes;

      switch (name) {
        case "Title":
        case "State":
        case "Address1":
        case "City":
          if (!value && submitting) {
            error = "Required";
          }

          break;

        case "ShipToState":
        case "ShipToAddress1":
        case "ShipToCity":
          if (!value && submitting && ShipToYes) {
            error = "Required";
          }

          break;

        case "Firstname":
          if (value && !firstname_regex.test(value)) {
            error = "No special characters allowed. Please call if you need assistance.";
          }

          if (!value && submitting) {
            error = "Required";
          }

          break;

        case "Middlename":
          if (value && !firstname_regex.test(value)) {
            error = "No special characters allowed. Please call if you need assistance.";
          }

          break;

        case "Lastname":
          if (value && !lastname_regex.test(value)) {
            error = "No special characters allowed. Please call if you need assistance.";
          }

          if (!value && submitting) {
            error = "Required";
          }

          break;

        case "ShipToName":
          if (value && !lastname_regex.test(value)) {
            error = "No special characters allowed. Please call if you need assistance.";
          }

          if (!value && ShipToYes && submitting) {
            error = "Required";
          }

          break;

        case "Spousename":
          if (value && !lastname_regex.test(value)) {
            error = "No special characters allowed. Please call if you need assistance.";
          }

          break;

        case "Country":
          if (!value && submitting && international) {
            error = "Required";
          }

          break;

        case "Emailaddress":
          if (value && !email_regex.test(value)) {
            error = "Please enter a valid email: ie. you@example.com";
          }

          if (!value && submitting) {
            error = "Required";
          }

          break;

        case "phone":
          if (value && !phone_regex.test(value)) {
            error = "Please enter a valid phone number, numbers only: ie. 7575551212";
          }

          break;
      }

      return error;
    }
    /**
     * 
     * @param {string} name - either Zip or ShipToZip
     * @param {string} value - five digit zip code
     */

  }, {
    key: "callZipCityStateService",
    value: function () {
      var _callZipCityStateService = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(name, value) {
        var base, url, fields, result, oldCity, _JSON$parse, city, state, zip, returnCode, returnMessage, error, newCity;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                base = this.state.mode == "development" ? "http://Services.cbn.local/AddressValidation/CityStatebyZip.aspx?PostalCode=" : "https://Services.cbn.com/AddressValidation/CityStatebyZip.aspx?PostalCode=";
                url = "".concat(base).concat(value);
                fields = _extends({}, this.state.fields);
                _context3.prev = 3;
                _context3.next = 6;
                return (0, _fetchHelpers.callApi)(url);

              case 6:
                result = _context3.sent;
                oldCity = fields[name == "ShipToZip" ? "ShipToCity" : "City"].toUpperCase();
                _JSON$parse = JSON.parse(result), city = _JSON$parse.city, state = _JSON$parse.state, zip = _JSON$parse.zip, returnCode = _JSON$parse.returnCode, returnMessage = _JSON$parse.returnMessage; // console.log({ city, state, zip, returnCode, returnMessage })

                if (!(returnCode == 1)) {
                  _context3.next = 20;
                  break;
                }

                // console.log(city)
                error = oldCity && !city.toUpperCase().includes(oldCity);
                newCity = error || !oldCity ? city.split(";")[0] : oldCity;
                fields[name == "ShipToZip" ? "ShipToCity" : "City"] = newCity;
                fields[name == "ShipToZip" ? "ShipToState" : "State"] = state;
                fields[name == "ShipToZip" ? "ShipToZip" : "Zip"] = zip;

                if (name == "Zip") {
                  fields["Country"] = "United States";
                }

                this.setState({
                  fields: fields
                });
                return _context3.abrupt("return", error ? city : '');

              case 20:
                return _context3.abrupt("return", returnMessage);

              case 21:
                _context3.next = 27;
                break;

              case 23:
                _context3.prev = 23;
                _context3.t0 = _context3["catch"](3);
                console.error(_context3.t0);
                return _context3.abrupt("return", '');

              case 27:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[3, 23]]);
      }));

      return function callZipCityStateService(_x3, _x4) {
        return _callZipCityStateService.apply(this, arguments);
      };
    }()
    /**
     * 
     * @param {string} addr1 - user entered address
     * @param {string} city - user entered city
     * @param {string} state - user entered state
     * @param {string} zip - user entered zip
     * @returns {string} either empty or with error
     */

  }, {
    key: "callAddressVerification",
    value: function () {
      var _callAddressVerification = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(addr1, city, state, zip) {
        var base, url, result, _JSON$parse2, returnCode, returnMessage;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                base = this.state.mode == "development" ? "http://Services.cbn.local/AddressValidation/AddressVerification.aspx?" : "https://Services.cbn.com/AddressValidation/AddressVerification.aspx?";
                url = encodeURI("".concat(base, "addr1=").concat(addr1, "&city=").concat(city, "&state=").concat(state, "&zip=").concat(zip));
                _context4.prev = 2;
                _context4.next = 5;
                return (0, _fetchHelpers.callApi)(url);

              case 5:
                result = _context4.sent;
                // console.log({result})
                _JSON$parse2 = JSON.parse(result), returnCode = _JSON$parse2.returnCode, returnMessage = _JSON$parse2.returnMessage;
                return _context4.abrupt("return", returnCode == 1 ? '' : returnMessage);

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](2);
                console.error({
                  err: _context4.t0
                });
                return _context4.abrupt("return", '');

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 10]]);
      }));

      return function callAddressVerification(_x5, _x6, _x7, _x8) {
        return _callAddressVerification.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          showGivingArray = _this$props2.showGivingArray,
          givingFormat = _this$props2.givingFormat,
          monthlyOption = _this$props2.monthlyOption,
          singleOption = _this$props2.singleOption,
          monthlyAmounts = _this$props2.monthlyAmounts,
          singleAmounts = _this$props2.singleAmounts,
          funds = _this$props2.funds,
          monthlyPledgeData = _this$props2.monthlyPledgeData,
          singlePledgeData = _this$props2.singlePledgeData,
          products = _this$props2.products,
          additionalGift = _this$props2.additionalGift,
          shipping = _this$props2.shipping,
          international = _this$props2.international,
          getPhone = _this$props2.getPhone,
          getSuffix = _this$props2.getSuffix,
          getMiddleName = _this$props2.getMiddleName,
          getSpouseInfo = _this$props2.getSpouseInfo;
      var arrayOptions = {
        givingFormat: givingFormat,
        monthlyOption: monthlyOption,
        singleOption: singleOption,
        monthlyAmounts: monthlyAmounts,
        singleAmounts: singleAmounts,
        funds: funds,
        monthlyPledgeData: monthlyPledgeData,
        singlePledgeData: singlePledgeData
      },
          productOptions = {
        products: products,
        numProducts: products.length,
        additionalGift: additionalGift
      },
          fundOptions = {
        funds: funds,
        numFunds: funds.length
      };
      var _this$state = this.state,
          defaultAmount = _this$state.defaultAmount,
          defaultOption = _this$state.defaultOption,
          errors = _this$state.errors,
          fields = _this$state.fields,
          givingInfo = _this$state.givingInfo,
          productInfo = _this$state.productInfo,
          submitting = _this$state.submitting,
          initialUpdate = _this$state.initialUpdate,
          monthlyChecked = _this$state.monthlyChecked,
          hydratedAdditionalGift = _this$state.hydratedAdditionalGift;
      var hasErrors = Object.values(errors).filter(function (val) {
        return val && val.length > 0;
      }).length > 0;
      return _react.default.createElement("form", {
        id: "react-form",
        autoComplete: "off",
        onSubmit: this.handleSubmit
      }, _react.default.createElement("div", {
        className: (0, _getClassName2.default)(showGivingArray ? "styles.form-panel" : "styles.form-panel styles.hidden", _styleModuleImportMap, {
          "handleMissingStyleName": "warn"
        })
      }, _react.default.createElement("div", {
        className: "gift-choice__vKNi_"
      }, _react.default.createElement(_GivingArray.default, {
        defaultAmount: defaultAmount,
        defaultOption: defaultOption,
        arrayOptions: arrayOptions,
        initialUpdate: initialUpdate,
        monthlyChecked: monthlyChecked,
        addToCart: this.addToCart,
        removeFromCart: this.removeFromCart,
        givingInfo: givingInfo
      }), _react.default.createElement("div", {
        className: "error__3olFm amount-error__2G2h0"
      }, errors.amount)), monthlyOption && singleOption && _react.default.createElement(_MonthlyRadioGroup.default, {
        monthlyChecked: monthlyChecked,
        Monthlypledgeday: fields.Monthlypledgeday,
        handleInputChange: this.handleInputChange,
        handleRadioClick: this.handleRadioClick
      })), _react.default.createElement("div", {
        className: (0, _getClassName2.default)(fundOptions.numFunds ? "styles.form-panel" : "styles.form-panel main.hidden", _styleModuleImportMap, {
          "handleMissingStyleName": "warn"
        })
      }, _react.default.createElement(_FundDisplay.default, {
        fundOptions: fundOptions,
        initialUpdate: initialUpdate,
        updateDonation: this.updateDonation
      })), _react.default.createElement("div", {
        className: (0, _getClassName2.default)(productOptions.numProducts ? "styles.form-panel" : "styles.form-panel styles.hidden", _styleModuleImportMap, {
          "handleMissingStyleName": "warn"
        })
      }, _react.default.createElement(_ProductDisplay.default, {
        productInfo: productInfo,
        productOptions: productOptions,
        updateProducts: this.updateProducts,
        addToCart: this.addToCart,
        removeFromCart: this.removeFromCart,
        initialUpdate: initialUpdate,
        hydratedAdditionalGift: hydratedAdditionalGift
      })), _react.default.createElement("div", {
        className: "form-panel__2bLqQ"
      }, _react.default.createElement("fieldset", {
        className: "fieldset__2zxYC"
      }, _react.default.createElement("div", {
        className: "name-address__info__3TjNS"
      }, _react.default.createElement("h3", {
        className: "form-header__3OWCX"
      }, "Please Enter Your Billing Information"), _react.default.createElement(_NameBlock.default, {
        fields: fields,
        errors: errors,
        getMiddleName: getMiddleName,
        getSuffix: getSuffix,
        getSpouseInfo: getSpouseInfo,
        handleInputChange: this.handleInputChange
      }), _react.default.createElement(_AddressBlock.default, {
        fields: fields,
        errors: errors,
        handleInputChange: this.handleInputChange,
        getPhone: getPhone,
        international: international
      }))), shipping && _react.default.createElement("fieldset", {
        className: "fieldset__2zxYC"
      }, _react.default.createElement("div", {
        className: "shipping-address__container__1dAUs"
      }, _react.default.createElement(_FormOptionsBlock.default, {
        id: "ShipToYes",
        checked: fields.ShipToYes,
        handleInputChange: this.handleInputChange,
        label: "\xA0My shipping address is different than my billing address."
      }), fields.ShipToYes && _react.default.createElement(_ShippingAddressBlock.default, {
        fields: fields,
        errors: errors,
        handleInputChange: this.handleInputChange,
        international: international
      }))), _react.default.createElement("fieldset", {
        className: "fieldset__2zxYC"
      }, _react.default.createElement(_FormOptionsBlock.default, {
        id: "savePersonalInfo",
        checked: fields.savePersonalInfo,
        handleInputChange: this.handleInputChange,
        label: "\xA0Remember my name and address next time"
      })), _react.default.createElement("fieldset", {
        className: "fieldset__2zxYC"
      }, _react.default.createElement(_SubmitButton.default, {
        hasErrors: hasErrors,
        error: errors.amount,
        handleSubmit: this.handleSubmit,
        submitting: submitting
      })), _react.default.createElement("div", {
        id: "seals"
      })));
    }
  }]);

  return NameAddressForm;
}(_react.Component);

var _default = NameAddressForm;
exports.default = _default;
},{"babel-plugin-react-css-modules/dist/browser/getClassName":"node_modules/babel-plugin-react-css-modules/dist/browser/getClassName.js","react":"node_modules/react/index.js","./GivingArray":"src/Components/GivingArray.js","./ProductDisplay":"src/Components/ProductDisplay.js","./FundDisplay":"src/Components/FundDisplay.js","./MonthlyRadioGroup":"src/Components/MonthlyRadioGroup.js","./NameBlock":"src/Components/NameBlock.js","./ShippingAddressBlock":"src/Components/ShippingAddressBlock.js","./AddressBlock":"src/Components/AddressBlock.js","./FormOptionsBlock":"src/Components/FormOptionsBlock.js","./SubmitButton":"src/Components/SubmitButton.js","./styles/flex.module.css":"src/Components/styles/flex.module.css","./styles/name-address-form.module.css":"src/Components/styles/name-address-form.module.css","./helpers/error-types":"src/Components/helpers/error-types.js","./helpers/fetch-helpers":"src/Components/helpers/fetch-helpers.js","./helpers/crypt":"src/Components/helpers/crypt.js"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56402" + '/');

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
//# sourceMappingURL=/NameAddressForm.c2499c33.map