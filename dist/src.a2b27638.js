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
})({"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/vendors.js":[function(require,module,exports) {
//for code-splitting - separate node modules from components
require("_bundle_loader")(require.resolve("babel-polyfill"));

require("_bundle_loader")(require.resolve('css-vars-ponyfill'));

require("_bundle_loader")(require.resolve('whatwg-fetch'));

require("_bundle_loader")(require.resolve('promise-polyfill'));

require("_bundle_loader")(require.resolve('raf/polyfill'));

require("_bundle_loader")(require.resolve('react'));

require("_bundle_loader")(require.resolve('react-dom'));

require("_bundle_loader")(require.resolve('secure-ls'));

require("_bundle_loader")(require.resolve('shortid'));
},{"_bundle_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-loader.js","babel-polyfill":[["lib.391168ac.js","node_modules/babel-polyfill/lib/index.js"],"lib.391168ac.map","node_modules/babel-polyfill/lib/index.js"],"css-vars-ponyfill":[["css-vars-ponyfill.esm.9e0932d1.js","node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js"],"css-vars-ponyfill.esm.9e0932d1.map","node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js"],"whatwg-fetch":[["fetch.6e6c81fd.js","node_modules/whatwg-fetch/fetch.js"],"fetch.6e6c81fd.map","node_modules/whatwg-fetch/fetch.js"],"promise-polyfill":[["src.7aaf042a.js","node_modules/promise-polyfill/src/index.js"],"src.7aaf042a.map","node_modules/promise-polyfill/src/index.js"],"raf/polyfill":[["polyfill.cde8445e.js","node_modules/raf/polyfill.js"],"polyfill.cde8445e.map","node_modules/raf/polyfill.js"],"react":[["react.545e1cc3.js","node_modules/react/index.js"],"react.545e1cc3.map","node_modules/react/index.js"],"react-dom":[["react-dom.29872971.js","node_modules/react-dom/index.js"],"react-dom.29872971.map","node_modules/react-dom/index.js"],"secure-ls":[["secure-ls.0cd04304.js","node_modules/secure-ls/dist/secure-ls.js"],"secure-ls.0cd04304.map","node_modules/secure-ls/dist/secure-ls.js"],"shortid":[["shortid.e3ad9acd.js","node_modules/shortid/index.js"],"shortid.e3ad9acd.map","node_modules/shortid/index.js"]}],"src/require-babel-polyfill.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function () {
  if (!global || !global._babelPolyfill) {
    require('babel-polyfill');
  }
}();

exports.default = _default;
},{"babel-polyfill":"node_modules/babel-polyfill/lib/index.js"}],"node_modules/babel-plugin-react-css-modules/dist/browser/getClassName.js":[function(require,module,exports) {
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
},{}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/Components/styles/flex.module.css":[function(require,module,exports) {
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
  "askarray--other": "askarray--other__y-GeO",
  "askbutton": "askbutton__1REXt",
  "askbutton__amt": "askbutton__amt__20Y8v",
  "selected": "selected__52P9N",
  "askarray__form-group": "askarray__form-group__1rkB9",
  "askarray__form-group--other": "askarray__form-group--other__ibtGr",
  "form-group__other-input": "form-group__other-input__3hTcz",
  "form-group__other-input--label": "form-group__other-input--label__1gNEk",
  "OtherGiftAmount": "OtherGiftAmount__1famW",
  "OtherAmount": "OtherAmount__1Tt7b",
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
    "askarray--other": "askarray--other__y-GeO",
    "askbutton": "askbutton__1REXt",
    "askbutton__amt": "askbutton__amt__20Y8v",
    "selected": "selected__52P9N",
    "askarray__form-group": "askarray__form-group__1rkB9",
    "askarray__form-group--other": "askarray__form-group--other__ibtGr",
    "form-group__other-input": "form-group__other-input__3hTcz",
    "form-group__other-input--label": "form-group__other-input--label__1gNEk",
    "OtherGiftAmount": "OtherGiftAmount__1famW",
    "OtherAmount": "OtherAmount__1Tt7b",
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
    _this.otherAmountField = _react.default.createRef();
    _this.state = {
      initialUpdate: false,
      prevIndex: null,
      selectedIndex: null,
      otherAmount: 0,
      otherAmountError: ''
    };
    _this.renderArray = _this.renderArray.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.addToCart = _this.addToCart.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleOtherAmt = _this.handleOtherAmt.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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

      if (amt > 0 && arr.length) {
        var index = getIndex(arr, amt);
        var selectedIndex = index >= 0 ? index : 99;

        if (selectedIndex >= 0) {
          this.addToCart(amt, index);
        }
      }
    }
  }, {
    key: "renderArray",
    value: function renderArray(amounts, selectedIndex) {
      var _this2 = this;

      return amounts.map(function (amount, i) {
        return _react.default.createElement("div", {
          key: "array".concat(i),
          onClick: function onClick() {
            return _this2.addToCart(amount, i);
          },
          className: (0, _getClassName2.default)("styles.askbutton flex.flex flex.flex-center flex.flex-axes-center ".concat(selectedIndex == i ? "styles.selected" : ""), _styleModuleImportMap, {
            "handleMissingStyleName": "warn"
          })
        }, _react.default.createElement("div", {
          className: "askbutton__amt__20Y8v flex__ayltN flex-center__1HhTj flex-axes-center__33a6C flex-no-grow__3iHTz"
        }, "$", amount));
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
              _this3$props$arrayOpt = _this3$props.arrayOptions,
              monthlyPledgeData = _this3$props$arrayOpt.monthlyPledgeData,
              singlePledgeData = _this3$props$arrayOpt.singlePledgeData;

          _this3.props.addToCart({
            type: 'donation',
            PledgeAmount: amt,
            DetailCprojMail: monthlyChecked ? monthlyPledgeData.DetailCprojMail : singlePledgeData.DetailCprojMail,
            DetailCprojCredit: monthlyChecked ? monthlyPledgeData.DetailCprojCredit : singlePledgeData.DetailCprojCredit,
            DetailDescription: monthlyChecked ? monthlyPledgeData.DetailDescription : singlePledgeData.DetailDescription,
            DetailName: monthlyChecked ? monthlyPledgeData.DetailName : singlePledgeData.DetailName,
            monthly: monthlyChecked
          });
        } else {
          _this3.props.removeFromCart('donation');
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
          _this4.props.removeFromCart('donation');
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
          otherAmountError: '',
          otherAmount: value,
          prevIndex: selectedIndex
        }, function () {
          return _this5.addToCart(+value, 99);
        });
      } else if (isValid) {
        this.setState({
          otherAmount: 0,
          selectedIndex: null,
          otherAmountError: '',
          prevIndex: selectedIndex
        }, function () {
          return _this5.props.removeFromCart('donation');
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
          _this$props2$givingIn = _this$props2.givingInfo,
          amount = _this$props2$givingIn.amount,
          isMonthly = _this$props2$givingIn.isMonthly,
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
      var key = "controlled"; // console.log({amount, selectedIndex})

      if (amount && selectedIndex === null) {
        var index = isMonthly ? monthlyAmounts.indexOf(amount) : singleAmounts.indexOf(amount);
        selectedIndex = index > -1 ? index : 99;
        otherAmount = amount;
        monthlyChecked = isMonthly;
      } else {
        otherAmount = selectedIndex == 99 ? otherAmount : monthlyChecked ? monthlyAmounts[selectedIndex] : singleAmounts[selectedIndex];
        key = selectedIndex == 99 || selectedIndex === null ? key : (monthlyChecked ? monthlyAmounts[selectedIndex] : singleAmounts[selectedIndex]) + "-key";
      }

      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("h3", {
        className: "askarray__header__3P2Zh"
      }, "Select A ", monthlyChecked ? "Monthly" : "Single", " Donation Amount"), _react.default.createElement("div", {
        id: "AskArray",
        className: "askarray__UQ1ey flex__ayltN flex-row__16BBq flex-center__1HhTj flex-wrap__1FN6A"
      }, monthlyOption && monthlyChecked ? this.renderArray(monthlyAmounts, selectedIndex) : null, singleOption && !monthlyChecked ? this.renderArray(singleAmounts, selectedIndex) : null), _react.default.createElement("div", {
        id: "OtherGiftAmount",
        className: "askarray--other__y-GeO flex__ayltN flex-row__16BBq flex-center__1HhTj"
      }, _react.default.createElement("div", {
        id: "OtherAmout",
        className: (0, _getClassName2.default)("styles.askarray__form-group--other flex.flex flex.flex-center flex.flex-axes-center".concat(selectedIndex == 99 ? " styles.selected" : ""), _styleModuleImportMap, {
          "handleMissingStyleName": "warn"
        })
      }, _react.default.createElement("label", {
        className: "form-group__other-input--label__1gNEk",
        htmlFor: "other-amt-input"
      }, "Other Amount"), _react.default.createElement("input", {
        key: key,
        ref: this.otherAmountField,
        className: "form-group__other-input__3hTcz",
        name: "other-amt-input",
        onChange: this.handleOtherAmt,
        value: otherAmount == 0 ? '' : otherAmount,
        onFocus: this.handleFocus
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
        additionalGift: 0
      },
      errors: {
        additionalGift: ""
      },
      additionalGiftError: "",
      updated: false
    };
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.createMarkup = _this.createMarkup.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderAdditionalGift = _this.renderAdditionalGift.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.calculateTotalGift = _this.calculateTotalGift.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * Calculates the total gift for displaying to donor
   * @param {Array} productInfo - list of of all products having been ordered, idx of the product and quantity
   * @param {Number} additionalGift - value of user entered additional Gift
   * @returns {Number} value of Total Gift
   */


  _createClass(ProductDisplay, [{
    key: "calculateTotalGift",
    value: function calculateTotalGift() {
      var productInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var additionalGift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var products = this.props.productOptions.products; // console.log({productInfo, products, additionalGift})

      var totalGift = products && products.length && productInfo.length ? productInfo.reduce(function (a, b) {
        return a + parseInt(products[b.idx].PledgeAmount) * b.quantity;
      }, 0) + additionalGift : additionalGift;
      return totalGift;
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(e) {
      var target = e.target;
      var value = target.value;
      var name = target.name;

      var fields = _extends({}, this.state.fields),
          errors = _extends({}, this.state.errors);

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
        updated: true
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
      var _this$state = this.state,
          fields = _this$state.fields,
          errors = _this$state.errors,
          updated = _this$state.updated;
      var hydratedAdditionalGift = this.props.hydratedAdditionalGift;
      var val = fields.additionalGift > 0 ? fields.additionalGift : 0;

      if (hydratedAdditionalGift > 0 && !updated) {
        val = hydratedAdditionalGift;
      }

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
        value: val
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

      var _this$props = this.props,
          _this$props$productOp2 = _this$props.productOptions,
          products = _this$props$productOp2.products,
          numProducts = _this$props$productOp2.numProducts,
          additionalGift = _this$props$productOp2.additionalGift,
          productInfo = _this$props.productInfo;
      var fields = this.state.fields;
      var totalGift = this.calculateTotalGift(productInfo, fields.additionalGift); // console.log({totalGift})

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
          var storedAmt = productInfo.reduce(function (val, prod) {
            if (prod.idx == i) {
              val = prod.quantity;
            }

            return val;
          }, 0);
          var val = storedAmt ? storedAmt : fields["product-select-".concat(i)];
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
            value: val >= 0 ? val : 0,
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
          className: "product-total__input__172mT",
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
      initialUpdate: false,
      hydrated: false
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
        return this.setState({
          numFunds: nextProps.fundOptions.numFunds,
          funds: _toConsumableArray(nextProps.fundOptions.funds),
          initialUpdate: true
        });
      }

      var fundInfo = nextProps.fundInfo,
          hydratedFund = nextProps.hydratedFund,
          hydrated = nextProps.hydrated; // console.log({fundInfo, hydratedFund})

      if (hydratedFund && !hydrated && !this.state.hydrated) {
        var selectedIndex = this.state.funds.findIndex(function (fund) {
          return fund.DetailDescription == fundInfo.DetailDescription;
        }); // console.log(selectedIndex)

        return this.setState({
          selectedIndex: selectedIndex,
          hydrated: true
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
        var _this$state = this.state,
            selectedIndex = _this$state.selectedIndex,
            expanded = _this$state.expanded;
        return _react.default.createElement("div", {
          className: "funds-display__2VS1a"
        }, _react.default.createElement("h3", {
          className: "funds__header__1jN9Q"
        }, "I Want to Support"), _react.default.createElement("div", {
          className: "select-fund__1H6ol flex__ayltN flex-row__16BBq flex-axes-center__33a6C"
        }, this.renderFundCards(selectedIndex)), this.renderExpandedCards(expanded));
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

var _react = _interopRequireWildcard(require("react"));

var _RadioButton = _interopRequireDefault(require("./RadioButton"));

var _monthlyRadioModule = _interopRequireDefault(require("./styles/monthly-radio.module.css"));

var _flexModule = _interopRequireDefault(require("./styles/flex.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

    return _react.default.createElement(_react.Fragment, null, _react.default.createElement("h5", {
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
  })), _react.default.createElement("div", {
    className: "monthlyGivingDay__1D4Rg"
  }, monthlyChecked ? renderCCInfo() : null));
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

var _react = _interopRequireWildcard(require("react"));

var _SelectGroup = _interopRequireDefault(require("./SelectGroup"));

var _InputGroup = _interopRequireDefault(require("./InputGroup"));

var _formRowModule = _interopRequireDefault(require("./styles/form-row.module.css"));

var _flexModule = _interopRequireDefault(require("./styles/flex.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
      value: el,
      dangerouslySetInnerHTML: {
        __html: ind === 0 ? 'Title* &#9663;' : el
      },
      disabled: ind === 0 ? "disabled" : "",
      hidden: ind === 0 ? "hidden" : ""
    });
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
    return _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
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
    return _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
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
        value: "",
        disabled: "disabled"
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

var _react = _interopRequireWildcard(require("react"));

var _InputGroup = _interopRequireDefault(require("./InputGroup"));

var _SelectGroup = _interopRequireDefault(require("./SelectGroup"));

var _formRowModule = _interopRequireDefault(require("./styles/form-row.module.css"));

var _flexModule = _interopRequireDefault(require("./styles/flex.module.css"));

var _renderStateOptions = _interopRequireDefault(require("./helpers/renderStateOptions"));

var _dropdowns = require("../config/dropdowns.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
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
      value: "",
      disabled: "disabled"
    }, "State* \u25BF"), (0, _renderStateOptions.default)(international)]
  })), _react.default.createElement("div", {
    className: "form-row__3cr4u zip-country-row__x4uyF flex__ayltN flex-row__16BBq flex-between__3zYkx"
  }, _react.default.createElement(_InputGroup.default, {
    type: "text",
    id: "Zip",
    specialStyle: "styles.form-group--Zip",
    label: "Zip",
    placeholder: "Zip*",
    maxLength: fields.Country != "United States" ? 25 : 5,
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
      value: "",
      disabled: "disabled"
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

var _react = _interopRequireWildcard(require("react"));

var _checkboxModule = _interopRequireDefault(require("./styles/checkbox.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

if (module.hot) {
  module.hot.accept("./styles/checkbox.module.css", function () {
    require("./styles/checkbox.module.css");
  });
}

function Checkbox(props) {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("input", {
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
},{"react":"node_modules/react/index.js","./styles/form-row.module.css":"src/Components/styles/form-row.module.css"}],"src/Components/styles/seals.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "seals": "seals__1vhLv",
  "seals__seal": "seals__seal__28y0f",
  "seals__seal--link": "seals__seal--link__2o06z",
  "seals__seal-img": "seals__seal-img__1rK6b"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/Seals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _sealsModule = _interopRequireDefault(require("./styles/seals.module.css"));

var _flexModule = _interopRequireDefault(require("./styles/flex.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (module.hot) {
  module.hot.accept("./styles/flex.module.css", function () {
    require("./styles/flex.module.css");
  });
}

if (module.hot) {
  module.hot.accept("./styles/seals.module.css", function () {
    require("./styles/seals.module.css");
  });
}

function Seals() {
  return _react.default.createElement("div", {
    id: "seals",
    className: "seals__1vhLv flex__ayltN flex-row__16BBq flex-center__1HhTj flex-axes-center__33a6C"
  }, _react.default.createElement("div", {
    id: "DigiCertClickID_RXDQXROF",
    "data-language": "en",
    className: "seals__seal__28y0f"
  }, _react.default.createElement("a", {
    className: "seals__seal--link__2o06z",
    href: "https://www.digicert.com/ev-multi-domain-ssl.htm"
  })), _react.default.createElement("div", {
    id: "ECFA_Logo",
    className: "seals__seal__28y0f"
  }, _react.default.createElement("a", {
    className: "seals__seal--link__2o06z",
    href: "http://www.ecfa.org",
    target: "_blank"
  }, _react.default.createElement("img", {
    className: "seals__seal-img__1rK6b",
    src: "https://www.cbn.com/source/giving/shared/ecfa-logo-blacktext_sm.png",
    alt: "ECFA"
  }))));
}

var _default = Seals;
exports.default = _default;
},{"react":"node_modules/react/index.js","./styles/seals.module.css":"src/Components/styles/seals.module.css","./styles/flex.module.css":"src/Components/styles/flex.module.css"}],"src/Components/styles/name-address-form.module.css":[function(require,module,exports) {
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
var breakingErrors = ["Proxy Error", "Invalid API Access Key or Request URL", "Invalid Transaction Type -- Montlhy, Single, or Product Only", "Charge day required for Monthly Credit Card Gifts", "Valid Client IP is required", "Valid Client Browser name is required", "Missing Donation Details", "Motivation text is required and must not exceed required length or contain HTML Markup"];
/**
 * Takes an Error message and returns type, either breaking for form
 * @param {string} message - text string returned from API
 * @returns {Object} - { breaking: Boolean, name: String}
 */

function getErrorType(message) {
  if (breakingErrors.indexOf(message) > -1 || message[0] == "<") {
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
},{}],"src/Components/helpers/fetch-helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callApi = callApi;

require("whatwg-fetch");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Asynchronous function
 * @param {string} uri - Endpoint being called
 * @param {Object} [options={}] - Request Options Object to set headers, method, body, etc
 * @returns {string|Object} - Resolves data being requested or Rejects Error
 */
function callApi(_x) {
  return _callApi.apply(this, arguments);
}
/**
 * Calls FETCH API and expects Text or JSON response
 * @param {string} uri -  Endpoint being called
 * @param {Object} [options={}] - Options being passed to Fetch API
 * @returns {Object|string} - will return JSON if contentType is json or String if not, and an Error Object if call failes
 */


function _callApi() {
  _callApi = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(uri) {
    var options,
        data,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _context.prev = 1;
            _context.next = 4;
            return loadData(uri, options);

          case 4:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);

            if (!(typeof _context.t0 == "string")) {
              _context.next = 15;
              break;
            }

            throw new Error(_context.t0);

          case 15:
            throw new Error(_context.t0.message);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 8]]);
  }));
  return _callApi.apply(this, arguments);
}

function loadData(_x2) {
  return _loadData.apply(this, arguments);
}

function _loadData() {
  _loadData = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(uri) {
    var options,
        response,
        contentType,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            _context2.next = 3;
            return fetch(uri, options);

          case 3:
            response = _context2.sent;
            contentType = response.headers.get("content-type");

            if (!(response.status >= 200 && response.status < 300)) {
              _context2.next = 13;
              break;
            }

            if (!(contentType && contentType.includes('application/json'))) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", response.json());

          case 10:
            return _context2.abrupt("return", response.text());

          case 11:
            _context2.next = 14;
            break;

          case 13:
            return _context2.abrupt("return", getErrorBody(response, contentType).then(function (body) {
              return Promise.reject(body);
            }));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _loadData.apply(this, arguments);
}

function getErrorBody(_x3) {
  return _getErrorBody.apply(this, arguments);
}

function _getErrorBody() {
  _getErrorBody = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(response) {
    var contentType,
        body,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            contentType = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 'text';

            if (!contentType.includes('application/json')) {
              _context3.next = 7;
              break;
            }

            _context3.next = 4;
            return response.json();

          case 4:
            body = _context3.sent;
            _context3.next = 10;
            break;

          case 7:
            _context3.next = 9;
            return response.text();

          case 9:
            body = _context3.sent;

          case 10:
            return _context3.abrupt("return", body);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _getErrorBody.apply(this, arguments);
}
},{"whatwg-fetch":"node_modules/whatwg-fetch/fetch.js"}],"src/Components/helpers/crypt.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readLS = readLS;
exports.cryptLS = cryptLS;
exports.removeOneLS = removeOneLS;
exports.emptyLS = emptyLS;

var _secureLs = _interopRequireDefault(require("secure-ls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alphabetSoup = '$3cr3t5';
var ls = new _secureLs.default({
  encryptionSecret: alphabetSoup
});
/**
 * Returns decrypted text or null
 * @param {String} type - either full store or just info
 * @returns {Object|null}
 */

function readLS(type) {
  var _ls$get = ls.get(type),
      formData = _ls$get.formData,
      expiration = _ls$get.expiration; // console.log({formData, expiration})


  if (formData && expiration) {
    var present = Date.now();
    return present > +expiration ? null : formData;
  } else {
    return null;
  }
}
/**
 * Encrypts Data for storing in browser memory
 * @param {Object} formData - Object representing the data stored
 * @param {Number} lifetime - number of milliseconds in the future to set expiration
 * @param {String} type - either full store or just info
 */


function cryptLS(_ref, lifetime, type) {
  var formData = _ref.formData;
  var expiration = Date.now() + lifetime;
  ls.set(type, {
    formData: formData,
    expiration: expiration
  });
}

function removeOneLS(type) {
  ls.remove(type);
}

function emptyLS() {
  ls.removeAll();
}
},{"secure-ls":"node_modules/secure-ls/dist/secure-ls.js"}],"src/Components/NameAddressForm.js":[function(require,module,exports) {
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

var _Seals = _interopRequireDefault(require("./Seals"));

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
      ShipToCountry: props.hydratedData ? props.hydratedData.ShipToCountry : "",
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
      hydratedFund: false,
      productsOrdered: false,
      productInfo: [],
      givingInfo: {},
      cart: {
        items: []
      },
      fields: fields,
      errors: errors,
      defaultAmount: props.hydratedData && props.hydratedData.MultipleDonations ? -1 : props.defaultAmount,
      defaultOption: props.hydratedData && props.hydratedData.MultipleDonations ? '' : props.defaultOption,
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
      var hydratedData = this.props.hydratedData; // check to see if this is a postback from confirmation page

      if (hydratedData && hydratedData.MultipleDonations) {
        // initialize variables in such a way as to not mutate state
        var amount = 0,
            isMonthly = false,
            additionalGift = 0,
            fundSelected = false;
        var items = [];
        var products = this.props.products;

        var productInfo = _toConsumableArray(this.state.productInfo),
            productsOrdered = this.state.productsOrdered,
            givingInfo = _extends({}, this.state.givingInfo),
            fundInfo = _extends({}, this.state.fundInfo);

        var MultipleDonations = _toConsumableArray(hydratedData.MultipleDonations);

        var _this$props = this.props,
            monthlyPledgeData = _this$props.monthlyPledgeData,
            singlePledgeData = _this$props.singlePledgeData,
            funds = _this$props.funds;
        var detailNames = [],
            fundNames = [];

        if (monthlyPledgeData) {
          detailNames.push(monthlyPledgeData.DetailName);
        }

        if (singlePledgeData) {
          detailNames.push(singlePledgeData.DetailName);
        }

        if (funds && funds.length) {
          funds.forEach(function (fund) {
            detailNames.push(fund.DetailName);
            fundNames.push(fund.DetailName);
          });
        } // loop through multiple donations and reconstruct virual cart


        var _loop = function _loop(i) {
          var _MultipleDonations$i = MultipleDonations[i],
              DetailName = _MultipleDonations$i.DetailName,
              DetailDescription = _MultipleDonations$i.DetailDescription,
              DetailCprojCredit = _MultipleDonations$i.DetailCprojCredit,
              DetailCprojMail = _MultipleDonations$i.DetailCprojMail,
              PledgeAmount = _MultipleDonations$i.PledgeAmount;
          var type = detailNames.includes(DetailName) ? "donation" : "product";

          if (type == "donation") {
            amount = +PledgeAmount;
            isMonthly = DetailName.includes("MP") ? true : false;
            givingInfo = {
              amount: amount,
              isMonthly: isMonthly
            };

            if (fundNames.includes(DetailName)) {
              var index = funds.findIndex(function (fund) {
                return fund.DetailDescription == DetailDescription;
              });
              fundInfo = funds[index];
              fundSelected = true;
            }
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
          fundInfo: fundInfo,
          givingInfo: givingInfo,
          productInfo: productInfo,
          productsOrdered: productsOrdered,
          fundSelected: fundSelected,
          hydratedFund: fundSelected,
          hydratedAdditionalGift: additionalGift,
          monthlyChecked: monthlyChecked
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      var _componentWillUnmount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var savePersonalInfo, _this$state$fields, Address1, Address2, City, Country, Emailaddress, Firstname, Middlename, Lastname, Spousename, Suffix, State, Title, Zip, phone, Phoneareacode, Phoneexchange, Phonenumber, formData, days, lifetime;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // if user has selected to save personal info,  
                savePersonalInfo = this.state.fields.savePersonalInfo;

                if (savePersonalInfo) {
                  // get all user information from form
                  _this$state$fields = this.state.fields, Address1 = _this$state$fields.Address1, Address2 = _this$state$fields.Address2, City = _this$state$fields.City, Country = _this$state$fields.Country, Emailaddress = _this$state$fields.Emailaddress, Firstname = _this$state$fields.Firstname, Middlename = _this$state$fields.Middlename, Lastname = _this$state$fields.Lastname, Spousename = _this$state$fields.Spousename, Suffix = _this$state$fields.Suffix, State = _this$state$fields.State, Title = _this$state$fields.Title, Zip = _this$state$fields.Zip, phone = _this$state$fields.phone;
                  Phoneareacode = phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[1] : "", Phoneexchange = phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[2] : "", Phonenumber = phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[3] : "";
                  formData = {
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
                  days = 30; //convert days into milliseconds

                  lifetime = days * 24 * 60 * 60 * 1000; // n days = x days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
                  // encrypt and add to local storage,

                  (0, _crypt.cryptLS)({
                    formData: formData
                  }, lifetime, 'info');
                } else {
                  // otherwise remove any stored data from local storage
                  (0, _crypt.removeOneLS)('info');
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentWillUnmount() {
        return _componentWillUnmount.apply(this, arguments);
      };
    }()
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
          PledgeAmount: items[found].PledgeAmount,
          DetailCprojMail: id == "singlegift" ? this.props.singlePledgeData.DetailCprojMail : this.props.monthlyPledgeData.DetailCprojMail,
          DetailCprojCredit: id == "singlegift" ? this.props.singlePledgeData.DetailCprojCredit : this.props.monthlyPledgeData.DetailCprojCredit,
          DetailDescription: id == "singlegift" ? this.props.singlePledgeData.DetailDescription : this.props.monthlyPledgeData.DetailDescription,
          DetailName: id == "singlegift" ? this.props.singlePledgeData.DetailName : this.props.monthlyPledgeData.DetailName,
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
    value: function handleInputChange(e) {
      var _this2 = this;

      var target = e.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;

      var fields = _extends({}, this.state.fields),
          errors = _extends({}, this.state.errors);

      fields[name] = value;
      var isZip = name.includes("Zip") && value.length >= 5;

      if (isZip) {
        this.setState({
          fields: fields
        },
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (zip_regex.test(value)) {
                    _context2.next = 4;
                    break;
                  }

                  errors[name] = "Invalid Postal Code";
                  _context2.next = 7;
                  break;

                case 4:
                  _context2.next = 6;
                  return _this2.callZipCityStateService(name, value);

                case 6:
                  errors[name] = _context2.sent;

                case 7:
                  _this2.setState({
                    errors: errors
                  });

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        })));
      } else {
        errors[name] = this.validateInput(false, name, value);
        this.setState({
          fields: fields,
          errors: errors
        });
      }
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(e) {
        var _this3 = this;

        var items, pledgeFound, addGiftFound, productFound, _errors, errors, isValidForm, zipError, addressError, shipZipError, shipAddressError, fields, fieldNames, i, error, name, Address1, Address2, City, Country, Emailaddress, Firstname, Middlename, Lastname, Spousename, Suffix, State, Title, Zip, ShipToYes, ShipToAddress1, ShipToAddress2, ShipToCity, ShipToState, ShipToZip, ShipToCountry, ShipToName, phone, _this$props2, mode, APIAccessID, subscriptions, AddContactYN, ActivityName, ContactSource, SectionName, proxy, ClientBrowser, UrlReferer, Phoneareacode, Phoneexchange, Phonenumber, TransactionType, isMonthly, DonationType, IsRecurringCreditCardDonation, Monthlypledgeday, Monthlypledgeamount, Singledonationamount, ShipTo, multipleDonations, MultipleDonations, MotivationText, data, msg, message, _getErrorType, breaking, _name;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                e.preventDefault(); // console.log(this.state.submitting)

                if (!this.state.submitting) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return");

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
                productFound = items.findIndex(function (el) {
                  return el && el.type == "product";
                });

                if (!(items.length == 0 || pledgeFound > -1 && items[pledgeFound].PledgeAmount == 0 && addGiftFound < 0 || pledgeFound < 0 && addGiftFound < 0 && productFound < 0)) {
                  _context3.next = 12;
                  break;
                }

                _errors = this.state.errors;
                _errors.amount = "Please make a valid donation";
                return _context3.abrupt("return", this.setState({
                  submitting: false,
                  errors: _errors
                }));

              case 12:
                errors = _extends({}, this.state.errors);
                isValidForm = true;

                if (!(this.state.fields.Country == "United States")) {
                  _context3.next = 59;
                  break;
                }

                _context3.prev = 15;
                _context3.next = 18;
                return this.callZipCityStateService("Zip", this.state.fields["Zip"]);

              case 18:
                zipError = _context3.sent;

                if (zipError) {
                  _context3.next = 30;
                  break;
                }

                _context3.prev = 20;
                _context3.next = 23;
                return this.callAddressVerification(this.state.fields["Address1"], this.state.fields["Address2"], this.state.fields["City"], this.state.fields["State"], this.state.fields["Zip"]);

              case 23:
                addressError = _context3.sent;
                _context3.next = 30;
                break;

              case 26:
                _context3.prev = 26;
                _context3.t0 = _context3["catch"](20);
                console.log("AddressVerificationError");
                console.error({
                  err: _context3.t0
                });

              case 30:
                if (!(this.state.fields["ShipToZip"] && this.state.fields.ShipToYes)) {
                  _context3.next = 41;
                  break;
                }

                _context3.prev = 31;
                _context3.next = 34;
                return this.callZipCityStateService("ShipToZip", this.state.fields["ShipToZip"]);

              case 34:
                shipZipError = _context3.sent;
                _context3.next = 41;
                break;

              case 37:
                _context3.prev = 37;
                _context3.t1 = _context3["catch"](31);
                console.log("CSZValidationError__SHIPPING");
                console.error({
                  err: _context3.t1
                });

              case 41:
                if (!(!shipZipError && this.state.fields.ShipToYes)) {
                  _context3.next = 52;
                  break;
                }

                _context3.prev = 42;
                _context3.next = 45;
                return this.callAddressVerification(this.state.fields["ShipToAddress1"], this.state.fields["ShipToAddress2"], this.state.fields["ShipToCity"], this.state.fields["ShipToState"], this.state.fields["ShipToZip"]);

              case 45:
                shipAddressError = _context3.sent;
                _context3.next = 52;
                break;

              case 48:
                _context3.prev = 48;
                _context3.t2 = _context3["catch"](42);
                console.log("AddressVerificationError__SHIPPING");
                console.error({
                  err: _context3.t2
                });

              case 52:
                if (addressError || shipAddressError || zipError || shipZipError) {
                  isValidForm = false;
                  errors["Address1"] = addressError;
                  errors["ShipToAddress1"] = addressError;
                  errors["Zip"] = zipError;
                  errors["ShipToZip"] = shipZipError;
                }

                _context3.next = 59;
                break;

              case 55:
                _context3.prev = 55;
                _context3.t3 = _context3["catch"](15);
                console.log("CSZValidationError");
                console.error({
                  err: _context3.t3
                });

              case 59:
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
                  _context3.next = 64;
                  break;
                }

                return _context3.abrupt("return", this.setState({
                  submitting: false,
                  errors: errors
                }));

              case 64:
                //deconstruct necessary fields from state
                Address1 = fields.Address1, Address2 = fields.Address2, City = fields.City, Country = fields.Country, Emailaddress = fields.Emailaddress, Firstname = fields.Firstname, Middlename = fields.Middlename, Lastname = fields.Lastname, Spousename = fields.Spousename, Suffix = fields.Suffix, State = fields.State, Title = fields.Title, Zip = fields.Zip, ShipToYes = fields.ShipToYes, ShipToAddress1 = fields.ShipToAddress1, ShipToAddress2 = fields.ShipToAddress2, ShipToCity = fields.ShipToCity, ShipToState = fields.ShipToState, ShipToZip = fields.ShipToZip, ShipToCountry = fields.ShipToCountry, ShipToName = fields.ShipToName, phone = fields.phone;
                _this$props2 = this.props, mode = _this$props2.mode, APIAccessID = _this$props2.APIAccessID, subscriptions = _this$props2.subscriptions, AddContactYN = _this$props2.AddContactYN, ActivityName = _this$props2.ActivityName, ContactSource = _this$props2.ContactSource, SectionName = _this$props2.SectionName, proxy = _this$props2.proxy;
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
                  return items.map(function (_ref2, index) {
                    var DetailName = _ref2.DetailName,
                        DetailDescription = _ref2.DetailDescription,
                        DetailCprojCredit = _ref2.DetailCprojCredit,
                        DetailCprojMail = _ref2.DetailCprojMail,
                        PledgeAmount = _ref2.PledgeAmount;

                    if (index === pledgeFound && _this3.state.fundSelected) {
                      DetailName = _this3.state.fundInfo.DetailName;
                      DetailDescription = _this3.state.fundInfo.DetailDescription;
                      DetailCprojCredit = _this3.state.fundInfo.DetailCprojCredit;
                      DetailCprojMail = _this3.state.fundInfo.DetailCprojMail;
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
                MotivationText = window.cbn_obj && window.cbn_obj.motivation ? window.cbn_obj.motivation : '041181';
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

                if (subscriptions && subscriptions.length) {
                  subscriptions.forEach(function (sub) {
                    return data[sub.key] = sub.value;
                  });
                } // console.log({proxy})
                // console.log({data})


                _context3.prev = 84;
                _context3.next = 87;
                return (0, _fetchHelpers.callApi)(proxy, {
                  method: 'POST',
                  mode: 'cors',
                  headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                  },
                  body: JSON.stringify(data)
                });

              case 87:
                msg = _context3.sent;
                // console.log({msg, data})
                this.props.submitForm({
                  msg: msg,
                  data: data
                });
                _context3.next = 98;
                break;

              case 91:
                _context3.prev = 91;
                _context3.t4 = _context3["catch"](84);
                console.error(_context3.t4.message);
                message = _context3.t4.message;
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

              case 98:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[15, 55], [20, 26], [31, 37], [42, 48], [84, 91]]);
      }));

      return function handleSubmit(_x) {
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
    value: function updateProducts(_ref3) {
      var idx = _ref3.idx,
          quantity = _ref3.quantity;

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
      regeneratorRuntime.mark(function _callee4(name, value) {
        var base, url, fields, result, oldCity, _JSON$parse, city, state, zip, returnCode, returnMessage, error, newCity;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                base = this.state.mode == "local" ? "http://Services.cbn.local/AddressValidation/CityStatebyZip.aspx?PostalCode=" : "https://Services.cbn.com/AddressValidation/CityStatebyZip.aspx?PostalCode=";
                url = "".concat(base).concat(value);
                fields = _extends({}, this.state.fields);
                _context4.prev = 3;
                _context4.next = 6;
                return (0, _fetchHelpers.callApi)(url);

              case 6:
                result = _context4.sent;
                oldCity = fields[name == "ShipToZip" ? "ShipToCity" : "City"].toUpperCase();
                _JSON$parse = JSON.parse(result), city = _JSON$parse.city, state = _JSON$parse.state, zip = _JSON$parse.zip, returnCode = _JSON$parse.returnCode, returnMessage = _JSON$parse.returnMessage; // console.log({ city, state, zip, returnCode, returnMessage })

                if (!(returnCode == 1)) {
                  _context4.next = 19;
                  break;
                }

                // console.log(city)
                error = oldCity && !city.toUpperCase().includes(oldCity);
                newCity = error || !oldCity ? city.split(";")[0] : oldCity;
                fields[name == "ShipToZip" ? "ShipToCity" : "City"] = newCity;
                fields[name == "ShipToZip" ? "ShipToState" : "State"] = state; // fields[name == "ShipToZip" ? "ShipToZip" : "Zip"] = zip;

                if (name == "Zip") {
                  fields["Country"] = "United States";
                }

                this.setState({
                  fields: fields
                });
                return _context4.abrupt("return", error ? city : '');

              case 19:
                return _context4.abrupt("return", returnMessage);

              case 20:
                _context4.next = 26;
                break;

              case 22:
                _context4.prev = 22;
                _context4.t0 = _context4["catch"](3);
                console.error(_context4.t0);
                return _context4.abrupt("return", '');

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 22]]);
      }));

      return function callZipCityStateService(_x2, _x3) {
        return _callZipCityStateService.apply(this, arguments);
      };
    }()
    /**
     * 
     * @param {string} addr1 - user entered address1
     * @param {string} addr2 - user entered address2
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
      regeneratorRuntime.mark(function _callee5(addr1) {
        var addr2,
            city,
            state,
            zip,
            base,
            url,
            result,
            _JSON$parse2,
            returnCode,
            returnMessage,
            _args5 = arguments;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                addr2 = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : "";
                city = _args5.length > 2 ? _args5[2] : undefined;
                state = _args5.length > 3 ? _args5[3] : undefined;
                zip = _args5.length > 4 ? _args5[4] : undefined;
                base = this.state.mode == "development" ? "http://Services.cbn.local/AddressValidation/AddressVerification.aspx" : "https://Services.cbn.com/AddressValidation/AddressVerification.aspx";
                url = encodeURI("".concat(base, "?addr1=").concat(encodeURIComponent(addr1), "&addr2=").concat(encodeURIComponent(addr2), "&city=").concat(encodeURIComponent(city), "&state=").concat(encodeURIComponent(state), "&zip=").concat(encodeURIComponent(zip)));
                _context5.prev = 6;
                _context5.next = 9;
                return (0, _fetchHelpers.callApi)(url);

              case 9:
                result = _context5.sent;
                // console.log({result})
                _JSON$parse2 = JSON.parse(result), returnCode = _JSON$parse2.returnCode, returnMessage = _JSON$parse2.returnMessage;
                return _context5.abrupt("return", returnCode == 1 ? '' : returnMessage);

              case 14:
                _context5.prev = 14;
                _context5.t0 = _context5["catch"](6);
                console.error({
                  err: _context5.t0
                });
                return _context5.abrupt("return", '');

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[6, 14]]);
      }));

      return function callAddressVerification(_x4) {
        return _callAddressVerification.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          showGivingArray = _this$props3.showGivingArray,
          givingFormat = _this$props3.givingFormat,
          monthlyOption = _this$props3.monthlyOption,
          singleOption = _this$props3.singleOption,
          monthlyAmounts = _this$props3.monthlyAmounts,
          singleAmounts = _this$props3.singleAmounts,
          funds = _this$props3.funds,
          monthlyPledgeData = _this$props3.monthlyPledgeData,
          singlePledgeData = _this$props3.singlePledgeData,
          products = _this$props3.products,
          additionalGift = _this$props3.additionalGift,
          shipping = _this$props3.shipping,
          international = _this$props3.international,
          getPhone = _this$props3.getPhone,
          getSuffix = _this$props3.getSuffix,
          getMiddleName = _this$props3.getMiddleName,
          getSpouseInfo = _this$props3.getSpouseInfo,
          showSeals = _this$props3.showSeals;
      var arrayOptions = {
        givingFormat: givingFormat,
        monthlyOption: monthlyOption,
        singleOption: singleOption,
        monthlyAmounts: monthlyAmounts ? monthlyAmounts : [],
        singleAmounts: singleAmounts ? singleAmounts : [],
        funds: funds ? funds : [],
        monthlyPledgeData: monthlyPledgeData,
        singlePledgeData: singlePledgeData
      },
          productOptions = {
        products: products ? products : [],
        numProducts: products && products.length ? products.length : 0,
        additionalGift: additionalGift
      },
          fundOptions = {
        funds: funds ? funds : [],
        numFunds: funds && funds.length ? funds.length : 0
      };
      var _this$state = this.state,
          defaultAmount = _this$state.defaultAmount,
          defaultOption = _this$state.defaultOption,
          errors = _this$state.errors,
          fields = _this$state.fields,
          fundInfo = _this$state.fundInfo,
          givingInfo = _this$state.givingInfo,
          productInfo = _this$state.productInfo,
          submitting = _this$state.submitting,
          initialUpdate = _this$state.initialUpdate,
          monthlyChecked = _this$state.monthlyChecked,
          hydratedAdditionalGift = _this$state.hydratedAdditionalGift,
          hydratedFund = _this$state.hydratedFund;
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
        className: (0, _getClassName2.default)(fundOptions.numFunds ? "styles.form-panel" : "styles.form-panel styles.hidden", _styleModuleImportMap, {
          "handleMissingStyleName": "warn"
        })
      }, _react.default.createElement(_FundDisplay.default, {
        fundOptions: fundOptions,
        initialUpdate: initialUpdate,
        updateDonation: this.updateDonation,
        fundInfo: fundInfo,
        hydratedFund: hydratedFund
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
      })), showSeals && _react.default.createElement(_Seals.default, null)));
    }
  }]);

  return NameAddressForm;
}(_react.Component);

var _default = NameAddressForm;
exports.default = _default;
},{"babel-plugin-react-css-modules/dist/browser/getClassName":"node_modules/babel-plugin-react-css-modules/dist/browser/getClassName.js","react":"node_modules/react/index.js","./GivingArray":"src/Components/GivingArray.js","./ProductDisplay":"src/Components/ProductDisplay.js","./FundDisplay":"src/Components/FundDisplay.js","./MonthlyRadioGroup":"src/Components/MonthlyRadioGroup.js","./NameBlock":"src/Components/NameBlock.js","./ShippingAddressBlock":"src/Components/ShippingAddressBlock.js","./AddressBlock":"src/Components/AddressBlock.js","./FormOptionsBlock":"src/Components/FormOptionsBlock.js","./SubmitButton":"src/Components/SubmitButton.js","./Seals":"src/Components/Seals.js","./styles/flex.module.css":"src/Components/styles/flex.module.css","./styles/name-address-form.module.css":"src/Components/styles/name-address-form.module.css","./helpers/error-types":"src/Components/helpers/error-types.js","./helpers/fetch-helpers":"src/Components/helpers/fetch-helpers.js","./helpers/crypt":"src/Components/helpers/crypt.js"}],"src/Components/styles/spinner.module.css":[function(require,module,exports) {
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
},{"react":"node_modules/react/index.js","./styles/spinner.module.css":"src/Components/styles/spinner.module.css"}],"src/Components/styles/payment-form.module.css":[function(require,module,exports) {
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

require("raf/polyfill");

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
},{"raf/polyfill":"node_modules/raf/polyfill.js"}],"src/Components/PaymentForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getClassName2 = _interopRequireDefault(require("babel-plugin-react-css-modules/dist/browser/getClassName"));

var _react = _interopRequireWildcard(require("react"));

var _Spinner = _interopRequireDefault(require("./Spinner"));

var _paymentFormModule = _interopRequireDefault(require("./styles/payment-form.module.css"));

var _crypt = require("./helpers/crypt");

var _scrollToPoint = require("./helpers/scrollToPoint");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _styleModuleImportMap = {
  "styles": {
    "form-panel": "form-panel__MNvL5",
    "hidden": "hidden__1Q3CY"
  }
};

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
    _classCallCheck(this, PaymentForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(PaymentForm).call(this, props));
  }

  _createClass(PaymentForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var formData = this.props.formData;
      var lifetime = 60 * 1000; // 60 seconds * 1000 milliseconds

      (0, _crypt.cryptLS)({
        formData: formData
      }, lifetime, 'store');
      document.forms.hiddenform.submit.click(); // scroll to top of form

      var target = document.getElementById('react-form-top');
      var top = (0, _scrollToPoint.offsetTop)(target); // console.log({top})

      (0, _scrollToPoint.scrollToPoint)(top);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          formData = _this$props.formData,
          formAction = _this$props.formAction,
          cssConfig = _this$props.cssConfig,
          confirmationSubmitted = _this$props.confirmationSubmitted;
      var keys = Object.keys(formData);
      var inputs = keys.map(function (k, i) {
        return _react.default.createElement("input", {
          key: i + "-" + k,
          name: k,
          value: formData[k] ? formData[k] : '',
          type: "hidden"
        });
      }); // console.log(JSON.stringify(this.props.cssConfig))

      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("form", {
        id: "hiddenform",
        className: "hidden__1Q3CY",
        action: formAction,
        method: "POST",
        target: "paymentprocess"
      }, inputs, _react.default.createElement("input", {
        type: "hidden",
        name: "cssVars",
        value: JSON.stringify(cssConfig)
      }), _react.default.createElement("input", {
        id: "submit",
        type: "submit",
        hidden: true
      })), _react.default.createElement("iframe", {
        name: "paymentprocess",
        width: "100%",
        height: "1000px",
        className: (0, _getClassName2.default)(confirmationSubmitted ? "styles.hidden" : "styles.form-panel", _styleModuleImportMap, {
          "handleMissingStyleName": "warn"
        })
      }), confirmationSubmitted && _react.default.createElement("div", {
        className: "form-panel__MNvL5",
        style: {
          height: "1000px"
        }
      }, _react.default.createElement(_Spinner.default, null)));
    }
  }]);

  return PaymentForm;
}(_react.Component);

var _default = PaymentForm;
exports.default = _default;
},{"babel-plugin-react-css-modules/dist/browser/getClassName":"node_modules/babel-plugin-react-css-modules/dist/browser/getClassName.js","react":"node_modules/react/index.js","./Spinner":"src/Components/Spinner.js","./styles/payment-form.module.css":"src/Components/styles/payment-form.module.css","./helpers/crypt":"src/Components/helpers/crypt.js","./helpers/scrollToPoint":"src/Components/helpers/scrollToPoint.js"}],"src/Components/ConfirmationPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _shortid = _interopRequireDefault(require("shortid"));

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

var ConfirmationPage =
/*#__PURE__*/
function (_Component) {
  _inherits(ConfirmationPage, _Component);

  function ConfirmationPage(props) {
    var _this;

    _classCallCheck(this, ConfirmationPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConfirmationPage).call(this, props));
    _this.state = {
      ready: false,
      confirmationSubmitted: false,
      msgUris: []
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

      try {
        this.getGlobals();
      } catch (err) {
        console.error({
          err: err
        });
      }
    }
  }, {
    key: "getGlobals",
    value: function () {
      var _getGlobals = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var isSecure, url, _ref, devServicesUri, preProdServicesUri, prodServicesUri, devReceiptUri, preProdReceiptUri, prodReceiptUri;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isSecure = window.location.protocol == "https:";
                url = !isSecure ? 'http://securegiving.cbn.local/UI/globals/form-config.json' : 'https://securegiving.cbn.com/UI/globals/form-config.json';
                _context.prev = 2;
                _context.next = 5;
                return (0, _fetchHelpers.callApi)(url);

              case 5:
                _ref = _context.sent;
                devServicesUri = _ref.devServicesUri;
                preProdServicesUri = _ref.preProdServicesUri;
                prodServicesUri = _ref.prodServicesUri;
                devReceiptUri = _ref.devReceiptUri;
                preProdReceiptUri = _ref.preProdReceiptUri;
                prodReceiptUri = _ref.prodReceiptUri;
                this.setState({
                  ready: true,
                  msgUris: [devServicesUri, devReceiptUri, preProdServicesUri, preProdReceiptUri, prodServicesUri, prodReceiptUri]
                });
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](2);
                console.error({
                  err: _context.t0
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 15]]);
      }));

      return function getGlobals() {
        return _getGlobals.apply(this, arguments);
      };
    }()
  }, {
    key: "handleMessage",
    value: function handleMessage(e) {
      var _ref2 = e.data ? JSON.parse(e.data) : {},
          type = _ref2.type,
          tracking_vars = _ref2.tracking_vars;

      var types = ["go back clicked", "render receipt", "confirmation submitted", "form error"];

      if (!types.includes(type)) {
        return;
      }

      var origin = e.origin;
      var isOrigin = this.state.msgUris.includes(origin);

      if (!isOrigin) {
        return;
      }

      switch (type) {
        case "go back clicked":
          this.reRenderForm(this.props.formData);
          break;

        case "render receipt":
          this.renderReceiptPage(tracking_vars);
          break;

        case "confirmation submitted":
          // console.log(type)
          this.setState({
            confirmationSubmitted: true
          });
          break;

        case "form error":
          this.setState({
            confirmationSubmitted: false
          });
          break;
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
      if (this.state.ready !== nextState.ready || this.state.confirmationSubmitted !== nextState.confirmationSubmitted) {
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
      var _this$state = this.state,
          ready = _this$state.ready,
          confirmationSubmitted = _this$state.confirmationSubmitted;
      var _this$props = this.props,
          cssConfig = _this$props.cssConfig,
          formAction = _this$props.formAction,
          formData = _this$props.formData;

      var cacheToken = _shortid.default.generate();

      return _react.default.createElement(_react.Fragment, null, ready ? _react.default.createElement(_PaymentForm.default, {
        cssConfig: cssConfig,
        formAction: formAction + "&cacheToken=".concat(cacheToken),
        formData: formData,
        confirmationSubmitted: confirmationSubmitted
      }) : _react.default.createElement(_Spinner.default, null));
    }
  }]);

  return ConfirmationPage;
}(_react.Component);

var _default = ConfirmationPage;
exports.default = _default;
},{"react":"node_modules/react/index.js","shortid":"node_modules/shortid/index.js","./PaymentForm":"src/Components/PaymentForm.js","./Spinner":"src/Components/Spinner.js","./helpers/fetch-helpers":"src/Components/helpers/fetch-helpers.js"}],"src/Components/RedirectForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

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

var HiddenForm =
/*#__PURE__*/
function (_Component) {
  _inherits(HiddenForm, _Component);

  function HiddenForm() {
    _classCallCheck(this, HiddenForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(HiddenForm).apply(this, arguments));
  }

  _createClass(HiddenForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // console.log("Loaded and Clicking...")
      window.name = JSON.stringify(this.props.receiptVars);
      document.forms.hiddenform.submit.click();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          receiptVars = _this$props.receiptVars,
          thankYouUrl = _this$props.thankYouUrl;
      var inputs = receiptVars.map(function (v, i) {
        return _react.default.createElement("input", {
          key: "hiddenInput-" + i,
          name: Object.keys(v)[0],
          value: Object.values(v)[0],
          type: "hidden"
        });
      });
      var styles = {
        position: "absolute",
        left: "-10000px",
        top: "auto",
        width: "1px",
        height: "1px",
        overflow: "hidden"
      };
      return _react.default.createElement("form", {
        id: "hiddenform",
        style: styles,
        action: thankYouUrl,
        method: "POST"
      }, inputs, _react.default.createElement("input", {
        id: "submit",
        type: "submit",
        hidden: true
      }));
    }
  }]);

  return HiddenForm;
}(_react.Component);

var _default = HiddenForm;
exports.default = _default;
},{"react":"node_modules/react/index.js"}],"src/Components/styles/banner.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "banner": "banner__19s5S"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/Banner.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _bannerModule = _interopRequireDefault(require("./styles/banner.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (module.hot) {
  module.hot.accept("./styles/banner.module.css", function () {
    require("./styles/banner.module.css");
  });
}

var Banner = function Banner() {
  return _react.default.createElement("div", {
    className: "banner__19s5S"
  }, "Form Under Development");
};

var _default = Banner;
exports.default = _default;
},{"react":"node_modules/react/index.js","./styles/banner.module.css":"src/Components/styles/banner.module.css"}],"src/Components/styles/app.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "form-wrapper": "form-wrapper__MMJ_H"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _NameAddressForm = _interopRequireDefault(require("./NameAddressForm"));

var _ConfirmationPage = _interopRequireDefault(require("./ConfirmationPage"));

var _RedirectForm = _interopRequireDefault(require("./RedirectForm"));

var _Banner = _interopRequireDefault(require("./Banner"));

var _appModule = _interopRequireDefault(require("./styles/app.module.css"));

var _crypt = require("./helpers/crypt");

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

if (module.hot) {
  module.hot.accept("./styles/app.module.css", function () {
    require("./styles/app.module.css");
  });
}

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    var store = (0, _crypt.readLS)('store');
    var info = (0, _crypt.readLS)('info');
    var formData = store ? store : info; // console.log({store, info, formData})

    if (!formData) {
      (0, _crypt.emptyLS)();
    }

    if (!store) {
      (0, _crypt.removeOneLS)('store');
    }

    _this.state = _extends({}, props.config.initialState, {
      submitted: false,
      confirmed: false,
      finalized: false,
      confirmationData: null,
      finalizedData: null,
      formAction: null,
      formData: formData,
      donorID: null,
      hydratedData: formData
    });
    _this.submitForm = _this.submitForm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.hydrateForm = _this.hydrateForm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderReceiptPage = _this.renderReceiptPage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(App, [{
    key: "submitForm",
    value: function submitForm(_ref) {
      var msg = _ref.msg,
          data = _ref.data;
      // console.log(msg)
      var DonorID = msg.split(";")[0].split(" - ")[1];
      var formAction = msg.split(" is ")[1]; // console.log({DonorID, formAction})

      data.DonorID = DonorID;
      this.setState({
        submitted: true,
        formData: data,
        formAction: formAction
      });
    }
  }, {
    key: "hydrateForm",
    value: function hydrateForm(data) {
      // console.log({data})
      this.setState({
        submitted: false,
        hydratedData: data
      });
    }
  }, {
    key: "renderReceiptPage",
    value: function renderReceiptPage(varsArray) {
      this.setState({
        finalized: true,
        finalizedData: _toConsumableArray(varsArray)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var cssConfig = this.props.config.cssConfig;

      var _state = this.state,
          mode = _state.mode,
          finalized = _state.finalized,
          submitted = _state.submitted,
          thankYouUrl = _state.thankYouUrl,
          finalizedData = _state.finalizedData,
          formData = _state.formData,
          formAction = _state.formAction,
          formState = _objectWithoutProperties(_state, ["mode", "finalized", "submitted", "thankYouUrl", "finalizedData", "formData", "formAction"]);

      return _react.default.createElement("div", {
        className: "form-wrapper__MMJ_H",
        id: "react-form-top"
      }, mode !== 'production' && _react.default.createElement(_Banner.default, null), function () {
        if (finalized) {
          console.log({
            thankYouUrl: thankYouUrl
          });
          return _react.default.createElement(_RedirectForm.default, {
            thankYouUrl: thankYouUrl,
            receiptVars: finalizedData
          });
        } else if (submitted) {
          return _react.default.createElement(_ConfirmationPage.default, {
            mode: mode,
            cssConfig: cssConfig,
            formData: formData,
            formAction: formAction,
            hydrateForm: _this2.hydrateForm,
            renderReceiptPage: _this2.renderReceiptPage
          });
        } else {
          return _react.default.createElement(_NameAddressForm.default, _extends({}, formState, {
            mode: mode,
            submitForm: _this2.submitForm
          }));
        }
      }());
    }
  }]);

  return App;
}(_react.Component);

var _default = App;
exports.default = _default;
},{"react":"node_modules/react/index.js","./NameAddressForm":"src/Components/NameAddressForm.js","./ConfirmationPage":"src/Components/ConfirmationPage.js","./RedirectForm":"src/Components/RedirectForm.js","./Banner":"src/Components/Banner.js","./styles/app.module.css":"src/Components/styles/app.module.css","./helpers/crypt":"src/Components/helpers/crypt.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

require("./vendors");

require("./require-babel-polyfill");

var _cssVarsPonyfill = _interopRequireDefault(require("css-vars-ponyfill"));

var _promisePolyfill = _interopRequireDefault(require("promise-polyfill"));

var _react = _interopRequireDefault(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _App = _interopRequireDefault(require("./Components/App"));

var _fetchHelpers = require("./Components/helpers/fetch-helpers");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

if (!window.Promise) {
  window.Promise = _promisePolyfill.default;
}

var rootEntry = document.getElementById('form-root');

function getConfiguration() {
  return _getConfiguration.apply(this, arguments);
}
/**
* Function to determine campaign name for accessing config files from CBNGiving-Plugin for WP
* @param {Boolean} isWordpress - only return value if True
* @param {String} proxyUri - uri of proxy endpoint
* @param {String} formName - name of the form
* @returns {String} - URL base for Wordpress based on giving page URL
*/


function _getConfiguration() {
  _getConfiguration = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var generator, formName, proxyUri, isWordpress, isDrupal, isDotNet, base, cssConfigUrl, cssConfig, styleEl, innerStyle, key, pair, link, formConfigUrl, initialState;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            generator = rootEntry.dataset.environment.toLowerCase();
            formName = rootEntry.dataset.formName;
            proxyUri = rootEntry.dataset.rest;
            isWordpress = generator && generator.includes('wordpress');
            isDrupal = generator && generator.includes('drupal');
            isDotNet = generator && generator.includes('dotnet');
            base = deriveBaseUri(proxyUri, formName, isWordpress, isDrupal, isDotNet);
            cssConfigUrl = base + (isWordpress ? "?type=css_setup" : "config/css-config.json");
            _context.prev = 8;
            _context.next = 11;
            return (0, _fetchHelpers.callApi)(cssConfigUrl, {
              method: 'GET'
            });

          case 11:
            cssConfig = _context.sent;
            // console.log({cssConfig})
            cssConfig["--base-font-size"] = "19px";
            styleEl = document.createElement('style');
            styleEl.type = 'text/css';
            styleEl.id = "imported-vars";
            innerStyle = '';

            for (key in cssConfig) {
              if (!/^(externalFont)\S*$/.test(key)) {
                pair = key + ': ' + cssConfig[key] + ';';
                innerStyle += pair;
              } else {
                link = document.createElement('link');
                link.rel = "stylesheet";
                link.type = "text/css";
                link.href = cssConfig[key];
                document.head.appendChild(link);
              }
            } // only append to DOM if innerstyle is not an empty string


            styleEl.innerHTML = ":root{" + innerStyle + "}";
            document.head.appendChild(styleEl);
            (0, _cssVarsPonyfill.default)({
              updateURLs: false,
              watch: true,
              onComplete: function onComplete(cssText, styleNode) {}
            });
            _context.next = 27;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](8);
            console.error(_context.t0);
            alert('There was an internal error loading this form. Please check back later or call us at 1-800-759-0700');

          case 27:
            formConfigUrl = base + (isWordpress ? "?type=form_setup" : "config/form-config.json");
            _context.prev = 28;
            _context.next = 31;
            return (0, _fetchHelpers.callApi)(formConfigUrl, {
              method: 'GET'
            });

          case 31:
            initialState = _context.sent;

            if (initialState.mode === "production") {
              if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
                window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};

                if (Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers).length) {
                  window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers = {};
                }
              }
            }

            if (isWordpress) {
              initialState.proxy = base;
            }

            _context.next = 40;
            break;

          case 36:
            _context.prev = 36;
            _context.t1 = _context["catch"](28);
            console.error(_context.t1);
            alert('There was an internal error loading this form. Please check back later or call us at 1-800-759-0700');

          case 40:
            return _context.abrupt("return", {
              cssConfig: cssConfig,
              initialState: initialState
            });

          case 41:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[8, 23], [28, 36]]);
  }));
  return _getConfiguration.apply(this, arguments);
}

function handleWordpress(isWordpress, proxyUri, formName) {
  if (isWordpress) {
    return "".concat(proxyUri, "cbngiving/v1/").concat(formName);
  }

  return '';
}
/**
* Function to determine campaign name for accessing config files from CBNGiving-Plugin for WP
* @param {Boolean} isDrupal - only return value if True
* @param {String} proxyUri - uri of proxy endpoint
* @param {String} formName - name of the form
* @returns {String} - URL base for Wordpress based on giving page URL
*/


function handleDrupal(isDrupal, proxyUri, formName) {
  if (isDrupal) {
    return "";
  }

  return '';
}
/**
* Function to determine campaign name for accessing config files from CBNGiving-Plugin for WP
* @param {Boolean} isDotNet - only return value if True
* @param {String} proxyUri - uri of proxy endpoint
* @param {String} formName - name of the form
* @returns {String} - URL base for Wordpress based on giving page URL
*/


function handleDotNet(isDotNet, proxyUri, formName) {
  if (isDotNet) {
    return "";
  }

  return '';
}
/**
 * Takes in data from rootEntry to determine where to find the form configuration based on environment
 * @param {String} proxyUri - data-rest
 * @param {String} formName - data-form-name
 * @param {Boolean} isWordpress - data-rest == 'wordpress'
 * @param {Boolean} isDrupal - data-rest == 'drupal'
 * @param {Boolean} isDotNet - data-rest == 'dotnet'
 * @returns {String} uri of proxy api
 */


function deriveBaseUri(proxyUri, formName, isWordpress, isDrupal, isDotNet) {
  if (isWordpress) {
    return handleWordpress(isWordpress, proxyUri, formName);
  } else if (isDrupal) {
    return handleDrupal(isDrupal, proxyUri, formName);
  } else if (isDotNet) {
    return handleDotNet(isDotNet, proxyUri, formName);
  } else {
    return proxyUri;
  }
}

getConfiguration().then(function (_ref) {
  var cssConfig = _ref.cssConfig,
      initialState = _ref.initialState;
  ReactDOM.render(_react.default.createElement(_App.default, {
    config: {
      cssConfig: cssConfig,
      initialState: initialState
    }
  }), rootEntry);
});
},{"./vendors":"src/vendors.js","./require-babel-polyfill":"src/require-babel-polyfill.js","css-vars-ponyfill":"node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js","promise-polyfill":"node_modules/promise-polyfill/src/index.js","react":"node_modules/react/index.js","react-dom":"node_modules/react-dom/index.js","./Components/App":"src/Components/App.js","./Components/helpers/fetch-helpers":"src/Components/helpers/fetch-helpers.js"}],"node_modules/object-assign/index.js":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
},{}],"node_modules/prop-types/lib/ReactPropTypesSecret.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],"node_modules/prop-types/checkPropTypes.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var printWarning = function () {};

if ("development" !== 'production') {
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if ("development" !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if ("development" !== 'production') {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;
},{"./lib/ReactPropTypesSecret":"node_modules/prop-types/lib/ReactPropTypesSecret.js"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59867" + '/');

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
},{}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([["lib.391168ac.js","node_modules/babel-polyfill/lib/index.js"],["react.545e1cc3.js","node_modules/react/index.js"],["fetch.6e6c81fd.js","node_modules/whatwg-fetch/fetch.js"],["secure-ls.0cd04304.js","node_modules/secure-ls/dist/secure-ls.js"],["polyfill.cde8445e.js","node_modules/raf/polyfill.js"],["shortid.e3ad9acd.js","node_modules/shortid/index.js"],["css-vars-ponyfill.esm.9e0932d1.js","node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js"],["src.7aaf042a.js","node_modules/promise-polyfill/src/index.js"],["react-dom.29872971.js","node_modules/react-dom/index.js"]]).then(function(){require("src/index.js");});
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/src.a2b27638.map