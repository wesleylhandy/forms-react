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
},{"./bundle-url":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/Components/styles/variables.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/styles/app.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "form-wrapper": "form-wrapper__MMJ_H"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/styles/banner.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "banner": "banner__19s5S"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/styles/checkbox.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "checkbox-input": "checkbox-input__1XcRE"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/styles/flex.module.css":[function(require,module,exports) {
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
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/styles/form-row.module.css":[function(require,module,exports) {
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
  "error": "error__2x8Zr",
  "other-amt-error": "other-amt-error__2STLF"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/styles/input.module.css":[function(require,module,exports) {
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
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/styles/monthly-radio.module.css":[function(require,module,exports) {
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
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/styles/name-address-form.module.css":[function(require,module,exports) {
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
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/styles/payment-form.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "form-panel": "form-panel__MNvL5",
  "hidden": "hidden__1Q3CY"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/styles/products.module.css":[function(require,module,exports) {
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
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/styles/radio.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "radio-group": "radio-group__1Ai8X",
  "radio-group__input": "radio-group__input__jkbDU"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/styles/seals.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "seals": "seals__1vhLv",
  "seals__seal": "seals__seal__28y0f",
  "seals__seal--link": "seals__seal--link__2o06z",
  "seals__seal-img": "seals__seal-img__1rK6b"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/styles/spinner.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "loading_spinner": "loading_spinner__2HC5B",
  "loading_spinner__flames": "loading_spinner__flames__3druA",
  "loading_spinner__back": "loading_spinner__back__2cJwJ",
  "flamerotate": "flamerotate__fGeMI"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58832" + '/');

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