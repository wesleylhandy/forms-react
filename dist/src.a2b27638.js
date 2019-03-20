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
require("_bundle_loader")(require.resolve('css-vars-ponyfill'));

require("_bundle_loader")(require.resolve('whatwg-fetch'));

require("_bundle_loader")(require.resolve('promise-polyfill'));

require("_bundle_loader")(require.resolve('raf/polyfill'));

require("_bundle_loader")(require.resolve('react'));

require("_bundle_loader")(require.resolve('react-dom'));

require("_bundle_loader")(require.resolve('secure-ls'));
},{"_bundle_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-loader.js","css-vars-ponyfill":[["css-vars-ponyfill.esm.9e0932d1.js","node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js"],"css-vars-ponyfill.esm.9e0932d1.map","node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js"],"whatwg-fetch":[["fetch.6e6c81fd.js","node_modules/whatwg-fetch/fetch.js"],"fetch.6e6c81fd.map","node_modules/whatwg-fetch/fetch.js"],"promise-polyfill":[["src.7aaf042a.js","node_modules/promise-polyfill/src/index.js"],"src.7aaf042a.map","node_modules/promise-polyfill/src/index.js"],"raf/polyfill":[["polyfill.cde8445e.js","node_modules/raf/polyfill.js"],"polyfill.cde8445e.map","node_modules/raf/polyfill.js"],"react":[["react.545e1cc3.js","node_modules/react/index.js"],"react.545e1cc3.map","node_modules/react/index.js"],"react-dom":[["react-dom.29872971.js","node_modules/react-dom/index.js"],"react-dom.29872971.map","node_modules/react-dom/index.js"],"secure-ls":[["secure-ls.0cd04304.js","node_modules/secure-ls/dist/secure-ls.js"],"secure-ls.0cd04304.map","node_modules/secure-ls/dist/secure-ls.js"]}],"node_modules/core-js/modules/_global.js":[function(require,module,exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],"node_modules/core-js/modules/_has.js":[function(require,module,exports) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],"node_modules/core-js/modules/_fails.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],"node_modules/core-js/modules/_descriptors.js":[function(require,module,exports) {
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":"node_modules/core-js/modules/_fails.js"}],"node_modules/core-js/modules/_core.js":[function(require,module,exports) {
var core = module.exports = { version: '2.6.4' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],"node_modules/core-js/modules/_is-object.js":[function(require,module,exports) {
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],"node_modules/core-js/modules/_an-object.js":[function(require,module,exports) {
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":"node_modules/core-js/modules/_is-object.js"}],"node_modules/core-js/modules/_dom-create.js":[function(require,module,exports) {
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_is-object":"node_modules/core-js/modules/_is-object.js","./_global":"node_modules/core-js/modules/_global.js"}],"node_modules/core-js/modules/_ie8-dom-define.js":[function(require,module,exports) {
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":"node_modules/core-js/modules/_descriptors.js","./_fails":"node_modules/core-js/modules/_fails.js","./_dom-create":"node_modules/core-js/modules/_dom-create.js"}],"node_modules/core-js/modules/_to-primitive.js":[function(require,module,exports) {
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":"node_modules/core-js/modules/_is-object.js"}],"node_modules/core-js/modules/_object-dp.js":[function(require,module,exports) {
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":"node_modules/core-js/modules/_an-object.js","./_ie8-dom-define":"node_modules/core-js/modules/_ie8-dom-define.js","./_to-primitive":"node_modules/core-js/modules/_to-primitive.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js"}],"node_modules/core-js/modules/_property-desc.js":[function(require,module,exports) {
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],"node_modules/core-js/modules/_hide.js":[function(require,module,exports) {
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_property-desc":"node_modules/core-js/modules/_property-desc.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js"}],"node_modules/core-js/modules/_uid.js":[function(require,module,exports) {
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],"node_modules/core-js/modules/_library.js":[function(require,module,exports) {
module.exports = false;

},{}],"node_modules/core-js/modules/_shared.js":[function(require,module,exports) {

var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":"node_modules/core-js/modules/_core.js","./_global":"node_modules/core-js/modules/_global.js","./_library":"node_modules/core-js/modules/_library.js"}],"node_modules/core-js/modules/_function-to-string.js":[function(require,module,exports) {
module.exports = require('./_shared')('native-function-to-string', Function.toString);

},{"./_shared":"node_modules/core-js/modules/_shared.js"}],"node_modules/core-js/modules/_redefine.js":[function(require,module,exports) {

var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var $toString = require('./_function-to-string');
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_global":"node_modules/core-js/modules/_global.js","./_hide":"node_modules/core-js/modules/_hide.js","./_has":"node_modules/core-js/modules/_has.js","./_uid":"node_modules/core-js/modules/_uid.js","./_function-to-string":"node_modules/core-js/modules/_function-to-string.js","./_core":"node_modules/core-js/modules/_core.js"}],"node_modules/core-js/modules/_a-function.js":[function(require,module,exports) {
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],"node_modules/core-js/modules/_ctx.js":[function(require,module,exports) {
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":"node_modules/core-js/modules/_a-function.js"}],"node_modules/core-js/modules/_export.js":[function(require,module,exports) {

var global = require('./_global');
var core = require('./_core');
var hide = require('./_hide');
var redefine = require('./_redefine');
var ctx = require('./_ctx');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_global":"node_modules/core-js/modules/_global.js","./_core":"node_modules/core-js/modules/_core.js","./_hide":"node_modules/core-js/modules/_hide.js","./_redefine":"node_modules/core-js/modules/_redefine.js","./_ctx":"node_modules/core-js/modules/_ctx.js"}],"node_modules/core-js/modules/_meta.js":[function(require,module,exports) {
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_uid":"node_modules/core-js/modules/_uid.js","./_is-object":"node_modules/core-js/modules/_is-object.js","./_has":"node_modules/core-js/modules/_has.js","./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_fails":"node_modules/core-js/modules/_fails.js"}],"node_modules/core-js/modules/_wks.js":[function(require,module,exports) {
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_shared":"node_modules/core-js/modules/_shared.js","./_uid":"node_modules/core-js/modules/_uid.js","./_global":"node_modules/core-js/modules/_global.js"}],"node_modules/core-js/modules/_set-to-string-tag.js":[function(require,module,exports) {
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_has":"node_modules/core-js/modules/_has.js","./_wks":"node_modules/core-js/modules/_wks.js"}],"node_modules/core-js/modules/_wks-ext.js":[function(require,module,exports) {
exports.f = require('./_wks');

},{"./_wks":"node_modules/core-js/modules/_wks.js"}],"node_modules/core-js/modules/_wks-define.js":[function(require,module,exports) {

var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_global":"node_modules/core-js/modules/_global.js","./_core":"node_modules/core-js/modules/_core.js","./_library":"node_modules/core-js/modules/_library.js","./_wks-ext":"node_modules/core-js/modules/_wks-ext.js","./_object-dp":"node_modules/core-js/modules/_object-dp.js"}],"node_modules/core-js/modules/_cof.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],"node_modules/core-js/modules/_iobject.js":[function(require,module,exports) {
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":"node_modules/core-js/modules/_cof.js"}],"node_modules/core-js/modules/_defined.js":[function(require,module,exports) {
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],"node_modules/core-js/modules/_to-iobject.js":[function(require,module,exports) {
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_iobject":"node_modules/core-js/modules/_iobject.js","./_defined":"node_modules/core-js/modules/_defined.js"}],"node_modules/core-js/modules/_to-integer.js":[function(require,module,exports) {
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],"node_modules/core-js/modules/_to-length.js":[function(require,module,exports) {
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":"node_modules/core-js/modules/_to-integer.js"}],"node_modules/core-js/modules/_to-absolute-index.js":[function(require,module,exports) {
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":"node_modules/core-js/modules/_to-integer.js"}],"node_modules/core-js/modules/_array-includes.js":[function(require,module,exports) {
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-iobject":"node_modules/core-js/modules/_to-iobject.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./_to-absolute-index":"node_modules/core-js/modules/_to-absolute-index.js"}],"node_modules/core-js/modules/_shared-key.js":[function(require,module,exports) {
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":"node_modules/core-js/modules/_shared.js","./_uid":"node_modules/core-js/modules/_uid.js"}],"node_modules/core-js/modules/_object-keys-internal.js":[function(require,module,exports) {
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_has":"node_modules/core-js/modules/_has.js","./_to-iobject":"node_modules/core-js/modules/_to-iobject.js","./_array-includes":"node_modules/core-js/modules/_array-includes.js","./_shared-key":"node_modules/core-js/modules/_shared-key.js"}],"node_modules/core-js/modules/_enum-bug-keys.js":[function(require,module,exports) {
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],"node_modules/core-js/modules/_object-keys.js":[function(require,module,exports) {
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_object-keys-internal":"node_modules/core-js/modules/_object-keys-internal.js","./_enum-bug-keys":"node_modules/core-js/modules/_enum-bug-keys.js"}],"node_modules/core-js/modules/_object-gops.js":[function(require,module,exports) {
exports.f = Object.getOwnPropertySymbols;

},{}],"node_modules/core-js/modules/_object-pie.js":[function(require,module,exports) {
exports.f = {}.propertyIsEnumerable;

},{}],"node_modules/core-js/modules/_enum-keys.js":[function(require,module,exports) {
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-keys":"node_modules/core-js/modules/_object-keys.js","./_object-gops":"node_modules/core-js/modules/_object-gops.js","./_object-pie":"node_modules/core-js/modules/_object-pie.js"}],"node_modules/core-js/modules/_is-array.js":[function(require,module,exports) {
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":"node_modules/core-js/modules/_cof.js"}],"node_modules/core-js/modules/_object-dps.js":[function(require,module,exports) {
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_object-keys":"node_modules/core-js/modules/_object-keys.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js"}],"node_modules/core-js/modules/_html.js":[function(require,module,exports) {
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":"node_modules/core-js/modules/_global.js"}],"node_modules/core-js/modules/_object-create.js":[function(require,module,exports) {
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":"node_modules/core-js/modules/_an-object.js","./_object-dps":"node_modules/core-js/modules/_object-dps.js","./_enum-bug-keys":"node_modules/core-js/modules/_enum-bug-keys.js","./_shared-key":"node_modules/core-js/modules/_shared-key.js","./_dom-create":"node_modules/core-js/modules/_dom-create.js","./_html":"node_modules/core-js/modules/_html.js"}],"node_modules/core-js/modules/_object-gopn.js":[function(require,module,exports) {
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_object-keys-internal":"node_modules/core-js/modules/_object-keys-internal.js","./_enum-bug-keys":"node_modules/core-js/modules/_enum-bug-keys.js"}],"node_modules/core-js/modules/_object-gopn-ext.js":[function(require,module,exports) {
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_to-iobject":"node_modules/core-js/modules/_to-iobject.js","./_object-gopn":"node_modules/core-js/modules/_object-gopn.js"}],"node_modules/core-js/modules/_object-gopd.js":[function(require,module,exports) {
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_object-pie":"node_modules/core-js/modules/_object-pie.js","./_property-desc":"node_modules/core-js/modules/_property-desc.js","./_to-iobject":"node_modules/core-js/modules/_to-iobject.js","./_to-primitive":"node_modules/core-js/modules/_to-primitive.js","./_has":"node_modules/core-js/modules/_has.js","./_ie8-dom-define":"node_modules/core-js/modules/_ie8-dom-define.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js"}],"node_modules/core-js/modules/es6.symbol.js":[function(require,module,exports) {

'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_global":"node_modules/core-js/modules/_global.js","./_has":"node_modules/core-js/modules/_has.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js","./_export":"node_modules/core-js/modules/_export.js","./_redefine":"node_modules/core-js/modules/_redefine.js","./_meta":"node_modules/core-js/modules/_meta.js","./_fails":"node_modules/core-js/modules/_fails.js","./_shared":"node_modules/core-js/modules/_shared.js","./_set-to-string-tag":"node_modules/core-js/modules/_set-to-string-tag.js","./_uid":"node_modules/core-js/modules/_uid.js","./_wks":"node_modules/core-js/modules/_wks.js","./_wks-ext":"node_modules/core-js/modules/_wks-ext.js","./_wks-define":"node_modules/core-js/modules/_wks-define.js","./_enum-keys":"node_modules/core-js/modules/_enum-keys.js","./_is-array":"node_modules/core-js/modules/_is-array.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_is-object":"node_modules/core-js/modules/_is-object.js","./_to-iobject":"node_modules/core-js/modules/_to-iobject.js","./_to-primitive":"node_modules/core-js/modules/_to-primitive.js","./_property-desc":"node_modules/core-js/modules/_property-desc.js","./_object-create":"node_modules/core-js/modules/_object-create.js","./_object-gopn-ext":"node_modules/core-js/modules/_object-gopn-ext.js","./_object-gopd":"node_modules/core-js/modules/_object-gopd.js","./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_object-keys":"node_modules/core-js/modules/_object-keys.js","./_object-gopn":"node_modules/core-js/modules/_object-gopn.js","./_object-pie":"node_modules/core-js/modules/_object-pie.js","./_object-gops":"node_modules/core-js/modules/_object-gops.js","./_library":"node_modules/core-js/modules/_library.js","./_hide":"node_modules/core-js/modules/_hide.js"}],"node_modules/core-js/modules/es6.object.create.js":[function(require,module,exports) {
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":"node_modules/core-js/modules/_export.js","./_object-create":"node_modules/core-js/modules/_object-create.js"}],"node_modules/core-js/modules/es6.object.define-property.js":[function(require,module,exports) {
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_export":"node_modules/core-js/modules/_export.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js","./_object-dp":"node_modules/core-js/modules/_object-dp.js"}],"node_modules/core-js/modules/es6.object.define-properties.js":[function(require,module,exports) {
var $export = require('./_export');
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperties: require('./_object-dps') });

},{"./_export":"node_modules/core-js/modules/_export.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js","./_object-dps":"node_modules/core-js/modules/_object-dps.js"}],"node_modules/core-js/modules/_object-sap.js":[function(require,module,exports) {
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_export":"node_modules/core-js/modules/_export.js","./_core":"node_modules/core-js/modules/_core.js","./_fails":"node_modules/core-js/modules/_fails.js"}],"node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":[function(require,module,exports) {
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"./_to-iobject":"node_modules/core-js/modules/_to-iobject.js","./_object-gopd":"node_modules/core-js/modules/_object-gopd.js","./_object-sap":"node_modules/core-js/modules/_object-sap.js"}],"node_modules/core-js/modules/_to-object.js":[function(require,module,exports) {
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":"node_modules/core-js/modules/_defined.js"}],"node_modules/core-js/modules/_object-gpo.js":[function(require,module,exports) {
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":"node_modules/core-js/modules/_has.js","./_to-object":"node_modules/core-js/modules/_to-object.js","./_shared-key":"node_modules/core-js/modules/_shared-key.js"}],"node_modules/core-js/modules/es6.object.get-prototype-of.js":[function(require,module,exports) {
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_to-object":"node_modules/core-js/modules/_to-object.js","./_object-gpo":"node_modules/core-js/modules/_object-gpo.js","./_object-sap":"node_modules/core-js/modules/_object-sap.js"}],"node_modules/core-js/modules/es6.object.keys.js":[function(require,module,exports) {
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_to-object":"node_modules/core-js/modules/_to-object.js","./_object-keys":"node_modules/core-js/modules/_object-keys.js","./_object-sap":"node_modules/core-js/modules/_object-sap.js"}],"node_modules/core-js/modules/es6.object.get-own-property-names.js":[function(require,module,exports) {
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function () {
  return require('./_object-gopn-ext').f;
});

},{"./_object-sap":"node_modules/core-js/modules/_object-sap.js","./_object-gopn-ext":"node_modules/core-js/modules/_object-gopn-ext.js"}],"node_modules/core-js/modules/es6.object.freeze.js":[function(require,module,exports) {
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

},{"./_is-object":"node_modules/core-js/modules/_is-object.js","./_meta":"node_modules/core-js/modules/_meta.js","./_object-sap":"node_modules/core-js/modules/_object-sap.js"}],"node_modules/core-js/modules/es6.object.seal.js":[function(require,module,exports) {
// 19.1.2.17 Object.seal(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

},{"./_is-object":"node_modules/core-js/modules/_is-object.js","./_meta":"node_modules/core-js/modules/_meta.js","./_object-sap":"node_modules/core-js/modules/_object-sap.js"}],"node_modules/core-js/modules/es6.object.prevent-extensions.js":[function(require,module,exports) {
// 19.1.2.15 Object.preventExtensions(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

},{"./_is-object":"node_modules/core-js/modules/_is-object.js","./_meta":"node_modules/core-js/modules/_meta.js","./_object-sap":"node_modules/core-js/modules/_object-sap.js"}],"node_modules/core-js/modules/es6.object.is-frozen.js":[function(require,module,exports) {
// 19.1.2.12 Object.isFrozen(O)
var isObject = require('./_is-object');

require('./_object-sap')('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

},{"./_is-object":"node_modules/core-js/modules/_is-object.js","./_object-sap":"node_modules/core-js/modules/_object-sap.js"}],"node_modules/core-js/modules/es6.object.is-sealed.js":[function(require,module,exports) {
// 19.1.2.13 Object.isSealed(O)
var isObject = require('./_is-object');

require('./_object-sap')('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

},{"./_is-object":"node_modules/core-js/modules/_is-object.js","./_object-sap":"node_modules/core-js/modules/_object-sap.js"}],"node_modules/core-js/modules/es6.object.is-extensible.js":[function(require,module,exports) {
// 19.1.2.11 Object.isExtensible(O)
var isObject = require('./_is-object');

require('./_object-sap')('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

},{"./_is-object":"node_modules/core-js/modules/_is-object.js","./_object-sap":"node_modules/core-js/modules/_object-sap.js"}],"node_modules/core-js/modules/_object-assign.js":[function(require,module,exports) {
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

},{"./_object-keys":"node_modules/core-js/modules/_object-keys.js","./_object-gops":"node_modules/core-js/modules/_object-gops.js","./_object-pie":"node_modules/core-js/modules/_object-pie.js","./_to-object":"node_modules/core-js/modules/_to-object.js","./_iobject":"node_modules/core-js/modules/_iobject.js","./_fails":"node_modules/core-js/modules/_fails.js"}],"node_modules/core-js/modules/es6.object.assign.js":[function(require,module,exports) {
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":"node_modules/core-js/modules/_export.js","./_object-assign":"node_modules/core-js/modules/_object-assign.js"}],"node_modules/core-js/modules/_same-value.js":[function(require,module,exports) {
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

},{}],"node_modules/core-js/modules/es6.object.is.js":[function(require,module,exports) {
// 19.1.3.10 Object.is(value1, value2)
var $export = require('./_export');
$export($export.S, 'Object', { is: require('./_same-value') });

},{"./_export":"node_modules/core-js/modules/_export.js","./_same-value":"node_modules/core-js/modules/_same-value.js"}],"node_modules/core-js/modules/_set-proto.js":[function(require,module,exports) {
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_is-object":"node_modules/core-js/modules/_is-object.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_ctx":"node_modules/core-js/modules/_ctx.js","./_object-gopd":"node_modules/core-js/modules/_object-gopd.js"}],"node_modules/core-js/modules/es6.object.set-prototype-of.js":[function(require,module,exports) {
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":"node_modules/core-js/modules/_export.js","./_set-proto":"node_modules/core-js/modules/_set-proto.js"}],"node_modules/core-js/modules/_classof.js":[function(require,module,exports) {
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":"node_modules/core-js/modules/_cof.js","./_wks":"node_modules/core-js/modules/_wks.js"}],"node_modules/core-js/modules/es6.object.to-string.js":[function(require,module,exports) {
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = require('./_classof');
var test = {};
test[require('./_wks')('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  require('./_redefine')(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

},{"./_classof":"node_modules/core-js/modules/_classof.js","./_wks":"node_modules/core-js/modules/_wks.js","./_redefine":"node_modules/core-js/modules/_redefine.js"}],"node_modules/core-js/modules/_invoke.js":[function(require,module,exports) {
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],"node_modules/core-js/modules/_bind.js":[function(require,module,exports) {
'use strict';
var aFunction = require('./_a-function');
var isObject = require('./_is-object');
var invoke = require('./_invoke');
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

},{"./_a-function":"node_modules/core-js/modules/_a-function.js","./_is-object":"node_modules/core-js/modules/_is-object.js","./_invoke":"node_modules/core-js/modules/_invoke.js"}],"node_modules/core-js/modules/es6.function.bind.js":[function(require,module,exports) {
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = require('./_export');

$export($export.P, 'Function', { bind: require('./_bind') });

},{"./_export":"node_modules/core-js/modules/_export.js","./_bind":"node_modules/core-js/modules/_bind.js"}],"node_modules/core-js/modules/es6.function.name.js":[function(require,module,exports) {
var dP = require('./_object-dp').f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || require('./_descriptors') && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

},{"./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js"}],"node_modules/core-js/modules/es6.function.has-instance.js":[function(require,module,exports) {
'use strict';
var isObject = require('./_is-object');
var getPrototypeOf = require('./_object-gpo');
var HAS_INSTANCE = require('./_wks')('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) require('./_object-dp').f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });

},{"./_is-object":"node_modules/core-js/modules/_is-object.js","./_object-gpo":"node_modules/core-js/modules/_object-gpo.js","./_wks":"node_modules/core-js/modules/_wks.js","./_object-dp":"node_modules/core-js/modules/_object-dp.js"}],"node_modules/core-js/modules/_string-ws.js":[function(require,module,exports) {
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],"node_modules/core-js/modules/_string-trim.js":[function(require,module,exports) {
var $export = require('./_export');
var defined = require('./_defined');
var fails = require('./_fails');
var spaces = require('./_string-ws');
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

},{"./_export":"node_modules/core-js/modules/_export.js","./_defined":"node_modules/core-js/modules/_defined.js","./_fails":"node_modules/core-js/modules/_fails.js","./_string-ws":"node_modules/core-js/modules/_string-ws.js"}],"node_modules/core-js/modules/_parse-int.js":[function(require,module,exports) {
var $parseInt = require('./_global').parseInt;
var $trim = require('./_string-trim').trim;
var ws = require('./_string-ws');
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

},{"./_global":"node_modules/core-js/modules/_global.js","./_string-trim":"node_modules/core-js/modules/_string-trim.js","./_string-ws":"node_modules/core-js/modules/_string-ws.js"}],"node_modules/core-js/modules/es6.parse-int.js":[function(require,module,exports) {
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

},{"./_export":"node_modules/core-js/modules/_export.js","./_parse-int":"node_modules/core-js/modules/_parse-int.js"}],"node_modules/core-js/modules/_parse-float.js":[function(require,module,exports) {
var $parseFloat = require('./_global').parseFloat;
var $trim = require('./_string-trim').trim;

module.exports = 1 / $parseFloat(require('./_string-ws') + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

},{"./_global":"node_modules/core-js/modules/_global.js","./_string-trim":"node_modules/core-js/modules/_string-trim.js","./_string-ws":"node_modules/core-js/modules/_string-ws.js"}],"node_modules/core-js/modules/es6.parse-float.js":[function(require,module,exports) {
var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

},{"./_export":"node_modules/core-js/modules/_export.js","./_parse-float":"node_modules/core-js/modules/_parse-float.js"}],"node_modules/core-js/modules/_inherit-if-required.js":[function(require,module,exports) {
var isObject = require('./_is-object');
var setPrototypeOf = require('./_set-proto').set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};

},{"./_is-object":"node_modules/core-js/modules/_is-object.js","./_set-proto":"node_modules/core-js/modules/_set-proto.js"}],"node_modules/core-js/modules/es6.number.constructor.js":[function(require,module,exports) {

'use strict';
var global = require('./_global');
var has = require('./_has');
var cof = require('./_cof');
var inheritIfRequired = require('./_inherit-if-required');
var toPrimitive = require('./_to-primitive');
var fails = require('./_fails');
var gOPN = require('./_object-gopn').f;
var gOPD = require('./_object-gopd').f;
var dP = require('./_object-dp').f;
var $trim = require('./_string-trim').trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(require('./_object-create')(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = require('./_descriptors') ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  require('./_redefine')(global, NUMBER, $Number);
}

},{"./_global":"node_modules/core-js/modules/_global.js","./_has":"node_modules/core-js/modules/_has.js","./_cof":"node_modules/core-js/modules/_cof.js","./_inherit-if-required":"node_modules/core-js/modules/_inherit-if-required.js","./_to-primitive":"node_modules/core-js/modules/_to-primitive.js","./_fails":"node_modules/core-js/modules/_fails.js","./_object-gopn":"node_modules/core-js/modules/_object-gopn.js","./_object-gopd":"node_modules/core-js/modules/_object-gopd.js","./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_string-trim":"node_modules/core-js/modules/_string-trim.js","./_object-create":"node_modules/core-js/modules/_object-create.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js","./_redefine":"node_modules/core-js/modules/_redefine.js"}],"node_modules/core-js/modules/_a-number-value.js":[function(require,module,exports) {
var cof = require('./_cof');
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

},{"./_cof":"node_modules/core-js/modules/_cof.js"}],"node_modules/core-js/modules/_string-repeat.js":[function(require,module,exports) {
'use strict';
var toInteger = require('./_to-integer');
var defined = require('./_defined');

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};

},{"./_to-integer":"node_modules/core-js/modules/_to-integer.js","./_defined":"node_modules/core-js/modules/_defined.js"}],"node_modules/core-js/modules/es6.number.to-fixed.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toInteger = require('./_to-integer');
var aNumberValue = require('./_a-number-value');
var repeat = require('./_string-repeat');
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !require('./_fails')(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_to-integer":"node_modules/core-js/modules/_to-integer.js","./_a-number-value":"node_modules/core-js/modules/_a-number-value.js","./_string-repeat":"node_modules/core-js/modules/_string-repeat.js","./_fails":"node_modules/core-js/modules/_fails.js"}],"node_modules/core-js/modules/es6.number.to-precision.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $fails = require('./_fails');
var aNumberValue = require('./_a-number-value');
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_fails":"node_modules/core-js/modules/_fails.js","./_a-number-value":"node_modules/core-js/modules/_a-number-value.js"}],"node_modules/core-js/modules/es6.number.epsilon.js":[function(require,module,exports) {
// 20.1.2.1 Number.EPSILON
var $export = require('./_export');

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es6.number.is-finite.js":[function(require,module,exports) {
// 20.1.2.2 Number.isFinite(number)
var $export = require('./_export');
var _isFinite = require('./_global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_global":"node_modules/core-js/modules/_global.js"}],"node_modules/core-js/modules/_is-integer.js":[function(require,module,exports) {
// 20.1.2.3 Number.isInteger(number)
var isObject = require('./_is-object');
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

},{"./_is-object":"node_modules/core-js/modules/_is-object.js"}],"node_modules/core-js/modules/es6.number.is-integer.js":[function(require,module,exports) {
// 20.1.2.3 Number.isInteger(number)
var $export = require('./_export');

$export($export.S, 'Number', { isInteger: require('./_is-integer') });

},{"./_export":"node_modules/core-js/modules/_export.js","./_is-integer":"node_modules/core-js/modules/_is-integer.js"}],"node_modules/core-js/modules/es6.number.is-nan.js":[function(require,module,exports) {
// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es6.number.is-safe-integer.js":[function(require,module,exports) {
// 20.1.2.5 Number.isSafeInteger(number)
var $export = require('./_export');
var isInteger = require('./_is-integer');
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_is-integer":"node_modules/core-js/modules/_is-integer.js"}],"node_modules/core-js/modules/es6.number.max-safe-integer.js":[function(require,module,exports) {
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es6.number.min-safe-integer.js":[function(require,module,exports) {
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es6.number.parse-float.js":[function(require,module,exports) {
var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

},{"./_export":"node_modules/core-js/modules/_export.js","./_parse-float":"node_modules/core-js/modules/_parse-float.js"}],"node_modules/core-js/modules/es6.number.parse-int.js":[function(require,module,exports) {
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

},{"./_export":"node_modules/core-js/modules/_export.js","./_parse-int":"node_modules/core-js/modules/_parse-int.js"}],"node_modules/core-js/modules/_math-log1p.js":[function(require,module,exports) {
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

},{}],"node_modules/core-js/modules/es6.math.acosh.js":[function(require,module,exports) {
// 20.2.2.3 Math.acosh(x)
var $export = require('./_export');
var log1p = require('./_math-log1p');
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_math-log1p":"node_modules/core-js/modules/_math-log1p.js"}],"node_modules/core-js/modules/es6.math.asinh.js":[function(require,module,exports) {
// 20.2.2.5 Math.asinh(x)
var $export = require('./_export');
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es6.math.atanh.js":[function(require,module,exports) {
// 20.2.2.7 Math.atanh(x)
var $export = require('./_export');
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/_math-sign.js":[function(require,module,exports) {
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

},{}],"node_modules/core-js/modules/es6.math.cbrt.js":[function(require,module,exports) {
// 20.2.2.9 Math.cbrt(x)
var $export = require('./_export');
var sign = require('./_math-sign');

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_math-sign":"node_modules/core-js/modules/_math-sign.js"}],"node_modules/core-js/modules/es6.math.clz32.js":[function(require,module,exports) {
// 20.2.2.11 Math.clz32(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es6.math.cosh.js":[function(require,module,exports) {
// 20.2.2.12 Math.cosh(x)
var $export = require('./_export');
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/_math-expm1.js":[function(require,module,exports) {
// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

},{}],"node_modules/core-js/modules/es6.math.expm1.js":[function(require,module,exports) {
// 20.2.2.14 Math.expm1(x)
var $export = require('./_export');
var $expm1 = require('./_math-expm1');

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

},{"./_export":"node_modules/core-js/modules/_export.js","./_math-expm1":"node_modules/core-js/modules/_math-expm1.js"}],"node_modules/core-js/modules/_math-fround.js":[function(require,module,exports) {
// 20.2.2.16 Math.fround(x)
var sign = require('./_math-sign');
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

},{"./_math-sign":"node_modules/core-js/modules/_math-sign.js"}],"node_modules/core-js/modules/es6.math.fround.js":[function(require,module,exports) {
// 20.2.2.16 Math.fround(x)
var $export = require('./_export');

$export($export.S, 'Math', { fround: require('./_math-fround') });

},{"./_export":"node_modules/core-js/modules/_export.js","./_math-fround":"node_modules/core-js/modules/_math-fround.js"}],"node_modules/core-js/modules/es6.math.hypot.js":[function(require,module,exports) {
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = require('./_export');
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es6.math.imul.js":[function(require,module,exports) {
// 20.2.2.18 Math.imul(x, y)
var $export = require('./_export');
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * require('./_fails')(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_fails":"node_modules/core-js/modules/_fails.js"}],"node_modules/core-js/modules/es6.math.log10.js":[function(require,module,exports) {
// 20.2.2.21 Math.log10(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es6.math.log1p.js":[function(require,module,exports) {
// 20.2.2.20 Math.log1p(x)
var $export = require('./_export');

$export($export.S, 'Math', { log1p: require('./_math-log1p') });

},{"./_export":"node_modules/core-js/modules/_export.js","./_math-log1p":"node_modules/core-js/modules/_math-log1p.js"}],"node_modules/core-js/modules/es6.math.log2.js":[function(require,module,exports) {
// 20.2.2.22 Math.log2(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es6.math.sign.js":[function(require,module,exports) {
// 20.2.2.28 Math.sign(x)
var $export = require('./_export');

$export($export.S, 'Math', { sign: require('./_math-sign') });

},{"./_export":"node_modules/core-js/modules/_export.js","./_math-sign":"node_modules/core-js/modules/_math-sign.js"}],"node_modules/core-js/modules/es6.math.sinh.js":[function(require,module,exports) {
// 20.2.2.30 Math.sinh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * require('./_fails')(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_math-expm1":"node_modules/core-js/modules/_math-expm1.js","./_fails":"node_modules/core-js/modules/_fails.js"}],"node_modules/core-js/modules/es6.math.tanh.js":[function(require,module,exports) {
// 20.2.2.33 Math.tanh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_math-expm1":"node_modules/core-js/modules/_math-expm1.js"}],"node_modules/core-js/modules/es6.math.trunc.js":[function(require,module,exports) {
// 20.2.2.34 Math.trunc(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es6.string.from-code-point.js":[function(require,module,exports) {
var $export = require('./_export');
var toAbsoluteIndex = require('./_to-absolute-index');
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_to-absolute-index":"node_modules/core-js/modules/_to-absolute-index.js"}],"node_modules/core-js/modules/es6.string.raw.js":[function(require,module,exports) {
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_to-iobject":"node_modules/core-js/modules/_to-iobject.js","./_to-length":"node_modules/core-js/modules/_to-length.js"}],"node_modules/core-js/modules/es6.string.trim.js":[function(require,module,exports) {
'use strict';
// 21.1.3.25 String.prototype.trim()
require('./_string-trim')('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

},{"./_string-trim":"node_modules/core-js/modules/_string-trim.js"}],"node_modules/core-js/modules/_string-at.js":[function(require,module,exports) {
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_to-integer":"node_modules/core-js/modules/_to-integer.js","./_defined":"node_modules/core-js/modules/_defined.js"}],"node_modules/core-js/modules/_iterators.js":[function(require,module,exports) {
module.exports = {};

},{}],"node_modules/core-js/modules/_iter-create.js":[function(require,module,exports) {
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_object-create":"node_modules/core-js/modules/_object-create.js","./_property-desc":"node_modules/core-js/modules/_property-desc.js","./_set-to-string-tag":"node_modules/core-js/modules/_set-to-string-tag.js","./_hide":"node_modules/core-js/modules/_hide.js","./_wks":"node_modules/core-js/modules/_wks.js"}],"node_modules/core-js/modules/_iter-define.js":[function(require,module,exports) {
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_library":"node_modules/core-js/modules/_library.js","./_export":"node_modules/core-js/modules/_export.js","./_redefine":"node_modules/core-js/modules/_redefine.js","./_hide":"node_modules/core-js/modules/_hide.js","./_iterators":"node_modules/core-js/modules/_iterators.js","./_iter-create":"node_modules/core-js/modules/_iter-create.js","./_set-to-string-tag":"node_modules/core-js/modules/_set-to-string-tag.js","./_object-gpo":"node_modules/core-js/modules/_object-gpo.js","./_wks":"node_modules/core-js/modules/_wks.js"}],"node_modules/core-js/modules/es6.string.iterator.js":[function(require,module,exports) {
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_string-at":"node_modules/core-js/modules/_string-at.js","./_iter-define":"node_modules/core-js/modules/_iter-define.js"}],"node_modules/core-js/modules/es6.string.code-point-at.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $at = require('./_string-at')(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_string-at":"node_modules/core-js/modules/_string-at.js"}],"node_modules/core-js/modules/_is-regexp.js":[function(require,module,exports) {
// 7.2.8 IsRegExp(argument)
var isObject = require('./_is-object');
var cof = require('./_cof');
var MATCH = require('./_wks')('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

},{"./_is-object":"node_modules/core-js/modules/_is-object.js","./_cof":"node_modules/core-js/modules/_cof.js","./_wks":"node_modules/core-js/modules/_wks.js"}],"node_modules/core-js/modules/_string-context.js":[function(require,module,exports) {
// helper for String#{startsWith, endsWith, includes}
var isRegExp = require('./_is-regexp');
var defined = require('./_defined');

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

},{"./_is-regexp":"node_modules/core-js/modules/_is-regexp.js","./_defined":"node_modules/core-js/modules/_defined.js"}],"node_modules/core-js/modules/_fails-is-regexp.js":[function(require,module,exports) {
var MATCH = require('./_wks')('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};

},{"./_wks":"node_modules/core-js/modules/_wks.js"}],"node_modules/core-js/modules/es6.string.ends-with.js":[function(require,module,exports) {
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./_string-context":"node_modules/core-js/modules/_string-context.js","./_fails-is-regexp":"node_modules/core-js/modules/_fails-is-regexp.js"}],"node_modules/core-js/modules/es6.string.includes.js":[function(require,module,exports) {
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';
var $export = require('./_export');
var context = require('./_string-context');
var INCLUDES = 'includes';

$export($export.P + $export.F * require('./_fails-is-regexp')(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_string-context":"node_modules/core-js/modules/_string-context.js","./_fails-is-regexp":"node_modules/core-js/modules/_fails-is-regexp.js"}],"node_modules/core-js/modules/es6.string.repeat.js":[function(require,module,exports) {
var $export = require('./_export');

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./_string-repeat')
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_string-repeat":"node_modules/core-js/modules/_string-repeat.js"}],"node_modules/core-js/modules/es6.string.starts-with.js":[function(require,module,exports) {
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./_string-context":"node_modules/core-js/modules/_string-context.js","./_fails-is-regexp":"node_modules/core-js/modules/_fails-is-regexp.js"}],"node_modules/core-js/modules/_string-html.js":[function(require,module,exports) {
var $export = require('./_export');
var fails = require('./_fails');
var defined = require('./_defined');
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

},{"./_export":"node_modules/core-js/modules/_export.js","./_fails":"node_modules/core-js/modules/_fails.js","./_defined":"node_modules/core-js/modules/_defined.js"}],"node_modules/core-js/modules/es6.string.anchor.js":[function(require,module,exports) {
'use strict';
// B.2.3.2 String.prototype.anchor(name)
require('./_string-html')('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

},{"./_string-html":"node_modules/core-js/modules/_string-html.js"}],"node_modules/core-js/modules/es6.string.big.js":[function(require,module,exports) {
'use strict';
// B.2.3.3 String.prototype.big()
require('./_string-html')('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

},{"./_string-html":"node_modules/core-js/modules/_string-html.js"}],"node_modules/core-js/modules/es6.string.blink.js":[function(require,module,exports) {
'use strict';
// B.2.3.4 String.prototype.blink()
require('./_string-html')('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

},{"./_string-html":"node_modules/core-js/modules/_string-html.js"}],"node_modules/core-js/modules/es6.string.bold.js":[function(require,module,exports) {
'use strict';
// B.2.3.5 String.prototype.bold()
require('./_string-html')('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

},{"./_string-html":"node_modules/core-js/modules/_string-html.js"}],"node_modules/core-js/modules/es6.string.fixed.js":[function(require,module,exports) {
'use strict';
// B.2.3.6 String.prototype.fixed()
require('./_string-html')('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

},{"./_string-html":"node_modules/core-js/modules/_string-html.js"}],"node_modules/core-js/modules/es6.string.fontcolor.js":[function(require,module,exports) {
'use strict';
// B.2.3.7 String.prototype.fontcolor(color)
require('./_string-html')('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

},{"./_string-html":"node_modules/core-js/modules/_string-html.js"}],"node_modules/core-js/modules/es6.string.fontsize.js":[function(require,module,exports) {
'use strict';
// B.2.3.8 String.prototype.fontsize(size)
require('./_string-html')('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

},{"./_string-html":"node_modules/core-js/modules/_string-html.js"}],"node_modules/core-js/modules/es6.string.italics.js":[function(require,module,exports) {
'use strict';
// B.2.3.9 String.prototype.italics()
require('./_string-html')('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

},{"./_string-html":"node_modules/core-js/modules/_string-html.js"}],"node_modules/core-js/modules/es6.string.link.js":[function(require,module,exports) {
'use strict';
// B.2.3.10 String.prototype.link(url)
require('./_string-html')('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

},{"./_string-html":"node_modules/core-js/modules/_string-html.js"}],"node_modules/core-js/modules/es6.string.small.js":[function(require,module,exports) {
'use strict';
// B.2.3.11 String.prototype.small()
require('./_string-html')('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

},{"./_string-html":"node_modules/core-js/modules/_string-html.js"}],"node_modules/core-js/modules/es6.string.strike.js":[function(require,module,exports) {
'use strict';
// B.2.3.12 String.prototype.strike()
require('./_string-html')('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

},{"./_string-html":"node_modules/core-js/modules/_string-html.js"}],"node_modules/core-js/modules/es6.string.sub.js":[function(require,module,exports) {
'use strict';
// B.2.3.13 String.prototype.sub()
require('./_string-html')('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

},{"./_string-html":"node_modules/core-js/modules/_string-html.js"}],"node_modules/core-js/modules/es6.string.sup.js":[function(require,module,exports) {
'use strict';
// B.2.3.14 String.prototype.sup()
require('./_string-html')('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

},{"./_string-html":"node_modules/core-js/modules/_string-html.js"}],"node_modules/core-js/modules/es6.date.now.js":[function(require,module,exports) {
// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = require('./_export');

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es6.date.to-json.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');

$export($export.P + $export.F * require('./_fails')(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_to-object":"node_modules/core-js/modules/_to-object.js","./_to-primitive":"node_modules/core-js/modules/_to-primitive.js","./_fails":"node_modules/core-js/modules/_fails.js"}],"node_modules/core-js/modules/_date-to-iso-string.js":[function(require,module,exports) {
'use strict';
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = require('./_fails');
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

},{"./_fails":"node_modules/core-js/modules/_fails.js"}],"node_modules/core-js/modules/es6.date.to-iso-string.js":[function(require,module,exports) {
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = require('./_export');
var toISOString = require('./_date-to-iso-string');

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_date-to-iso-string":"node_modules/core-js/modules/_date-to-iso-string.js"}],"node_modules/core-js/modules/es6.date.to-string.js":[function(require,module,exports) {
var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  require('./_redefine')(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

},{"./_redefine":"node_modules/core-js/modules/_redefine.js"}],"node_modules/core-js/modules/_date-to-primitive.js":[function(require,module,exports) {
'use strict';
var anObject = require('./_an-object');
var toPrimitive = require('./_to-primitive');
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

},{"./_an-object":"node_modules/core-js/modules/_an-object.js","./_to-primitive":"node_modules/core-js/modules/_to-primitive.js"}],"node_modules/core-js/modules/es6.date.to-primitive.js":[function(require,module,exports) {
var TO_PRIMITIVE = require('./_wks')('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) require('./_hide')(proto, TO_PRIMITIVE, require('./_date-to-primitive'));

},{"./_wks":"node_modules/core-js/modules/_wks.js","./_hide":"node_modules/core-js/modules/_hide.js","./_date-to-primitive":"node_modules/core-js/modules/_date-to-primitive.js"}],"node_modules/core-js/modules/es6.array.is-array.js":[function(require,module,exports) {
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = require('./_export');

$export($export.S, 'Array', { isArray: require('./_is-array') });

},{"./_export":"node_modules/core-js/modules/_export.js","./_is-array":"node_modules/core-js/modules/_is-array.js"}],"node_modules/core-js/modules/_iter-call.js":[function(require,module,exports) {
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":"node_modules/core-js/modules/_an-object.js"}],"node_modules/core-js/modules/_is-array-iter.js":[function(require,module,exports) {
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":"node_modules/core-js/modules/_iterators.js","./_wks":"node_modules/core-js/modules/_wks.js"}],"node_modules/core-js/modules/_create-property.js":[function(require,module,exports) {
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_property-desc":"node_modules/core-js/modules/_property-desc.js"}],"node_modules/core-js/modules/core.get-iterator-method.js":[function(require,module,exports) {
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":"node_modules/core-js/modules/_classof.js","./_wks":"node_modules/core-js/modules/_wks.js","./_iterators":"node_modules/core-js/modules/_iterators.js","./_core":"node_modules/core-js/modules/_core.js"}],"node_modules/core-js/modules/_iter-detect.js":[function(require,module,exports) {
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":"node_modules/core-js/modules/_wks.js"}],"node_modules/core-js/modules/es6.array.from.js":[function(require,module,exports) {
'use strict';
var ctx = require('./_ctx');
var $export = require('./_export');
var toObject = require('./_to-object');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var toLength = require('./_to-length');
var createProperty = require('./_create-property');
var getIterFn = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_ctx":"node_modules/core-js/modules/_ctx.js","./_export":"node_modules/core-js/modules/_export.js","./_to-object":"node_modules/core-js/modules/_to-object.js","./_iter-call":"node_modules/core-js/modules/_iter-call.js","./_is-array-iter":"node_modules/core-js/modules/_is-array-iter.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./_create-property":"node_modules/core-js/modules/_create-property.js","./core.get-iterator-method":"node_modules/core-js/modules/core.get-iterator-method.js","./_iter-detect":"node_modules/core-js/modules/_iter-detect.js"}],"node_modules/core-js/modules/es6.array.of.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var createProperty = require('./_create-property');

// WebKit Array.of isn't generic
$export($export.S + $export.F * require('./_fails')(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_create-property":"node_modules/core-js/modules/_create-property.js","./_fails":"node_modules/core-js/modules/_fails.js"}],"node_modules/core-js/modules/_strict-method.js":[function(require,module,exports) {
'use strict';
var fails = require('./_fails');

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};

},{"./_fails":"node_modules/core-js/modules/_fails.js"}],"node_modules/core-js/modules/es6.array.join.js":[function(require,module,exports) {
'use strict';
// 22.1.3.13 Array.prototype.join(separator)
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (require('./_iobject') != Object || !require('./_strict-method')(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_to-iobject":"node_modules/core-js/modules/_to-iobject.js","./_iobject":"node_modules/core-js/modules/_iobject.js","./_strict-method":"node_modules/core-js/modules/_strict-method.js"}],"node_modules/core-js/modules/es6.array.slice.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var html = require('./_html');
var cof = require('./_cof');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * require('./_fails')(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_html":"node_modules/core-js/modules/_html.js","./_cof":"node_modules/core-js/modules/_cof.js","./_to-absolute-index":"node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./_fails":"node_modules/core-js/modules/_fails.js"}],"node_modules/core-js/modules/es6.array.sort.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var fails = require('./_fails');
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !require('./_strict-method')($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_a-function":"node_modules/core-js/modules/_a-function.js","./_to-object":"node_modules/core-js/modules/_to-object.js","./_fails":"node_modules/core-js/modules/_fails.js","./_strict-method":"node_modules/core-js/modules/_strict-method.js"}],"node_modules/core-js/modules/_array-species-constructor.js":[function(require,module,exports) {
var isObject = require('./_is-object');
var isArray = require('./_is-array');
var SPECIES = require('./_wks')('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

},{"./_is-object":"node_modules/core-js/modules/_is-object.js","./_is-array":"node_modules/core-js/modules/_is-array.js","./_wks":"node_modules/core-js/modules/_wks.js"}],"node_modules/core-js/modules/_array-species-create.js":[function(require,module,exports) {
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":"node_modules/core-js/modules/_array-species-constructor.js"}],"node_modules/core-js/modules/_array-methods.js":[function(require,module,exports) {
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require('./_ctx');
var IObject = require('./_iobject');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var asc = require('./_array-species-create');
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

},{"./_ctx":"node_modules/core-js/modules/_ctx.js","./_iobject":"node_modules/core-js/modules/_iobject.js","./_to-object":"node_modules/core-js/modules/_to-object.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./_array-species-create":"node_modules/core-js/modules/_array-species-create.js"}],"node_modules/core-js/modules/es6.array.for-each.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $forEach = require('./_array-methods')(0);
var STRICT = require('./_strict-method')([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_array-methods":"node_modules/core-js/modules/_array-methods.js","./_strict-method":"node_modules/core-js/modules/_strict-method.js"}],"node_modules/core-js/modules/es6.array.map.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $map = require('./_array-methods')(1);

$export($export.P + $export.F * !require('./_strict-method')([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_array-methods":"node_modules/core-js/modules/_array-methods.js","./_strict-method":"node_modules/core-js/modules/_strict-method.js"}],"node_modules/core-js/modules/es6.array.filter.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $filter = require('./_array-methods')(2);

$export($export.P + $export.F * !require('./_strict-method')([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_array-methods":"node_modules/core-js/modules/_array-methods.js","./_strict-method":"node_modules/core-js/modules/_strict-method.js"}],"node_modules/core-js/modules/es6.array.some.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $some = require('./_array-methods')(3);

$export($export.P + $export.F * !require('./_strict-method')([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_array-methods":"node_modules/core-js/modules/_array-methods.js","./_strict-method":"node_modules/core-js/modules/_strict-method.js"}],"node_modules/core-js/modules/es6.array.every.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $every = require('./_array-methods')(4);

$export($export.P + $export.F * !require('./_strict-method')([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_array-methods":"node_modules/core-js/modules/_array-methods.js","./_strict-method":"node_modules/core-js/modules/_strict-method.js"}],"node_modules/core-js/modules/_array-reduce.js":[function(require,module,exports) {
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var toLength = require('./_to-length');

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};

},{"./_a-function":"node_modules/core-js/modules/_a-function.js","./_to-object":"node_modules/core-js/modules/_to-object.js","./_iobject":"node_modules/core-js/modules/_iobject.js","./_to-length":"node_modules/core-js/modules/_to-length.js"}],"node_modules/core-js/modules/es6.array.reduce.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_array-reduce":"node_modules/core-js/modules/_array-reduce.js","./_strict-method":"node_modules/core-js/modules/_strict-method.js"}],"node_modules/core-js/modules/es6.array.reduce-right.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_array-reduce":"node_modules/core-js/modules/_array-reduce.js","./_strict-method":"node_modules/core-js/modules/_strict-method.js"}],"node_modules/core-js/modules/es6.array.index-of.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $indexOf = require('./_array-includes')(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_array-includes":"node_modules/core-js/modules/_array-includes.js","./_strict-method":"node_modules/core-js/modules/_strict-method.js"}],"node_modules/core-js/modules/es6.array.last-index-of.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_to-iobject":"node_modules/core-js/modules/_to-iobject.js","./_to-integer":"node_modules/core-js/modules/_to-integer.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./_strict-method":"node_modules/core-js/modules/_strict-method.js"}],"node_modules/core-js/modules/_array-copy-within.js":[function(require,module,exports) {
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};

},{"./_to-object":"node_modules/core-js/modules/_to-object.js","./_to-absolute-index":"node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"node_modules/core-js/modules/_to-length.js"}],"node_modules/core-js/modules/_add-to-unscopables.js":[function(require,module,exports) {
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

},{"./_wks":"node_modules/core-js/modules/_wks.js","./_hide":"node_modules/core-js/modules/_hide.js"}],"node_modules/core-js/modules/es6.array.copy-within.js":[function(require,module,exports) {
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { copyWithin: require('./_array-copy-within') });

require('./_add-to-unscopables')('copyWithin');

},{"./_export":"node_modules/core-js/modules/_export.js","./_array-copy-within":"node_modules/core-js/modules/_array-copy-within.js","./_add-to-unscopables":"node_modules/core-js/modules/_add-to-unscopables.js"}],"node_modules/core-js/modules/_array-fill.js":[function(require,module,exports) {
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

},{"./_to-object":"node_modules/core-js/modules/_to-object.js","./_to-absolute-index":"node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"node_modules/core-js/modules/_to-length.js"}],"node_modules/core-js/modules/es6.array.fill.js":[function(require,module,exports) {
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { fill: require('./_array-fill') });

require('./_add-to-unscopables')('fill');

},{"./_export":"node_modules/core-js/modules/_export.js","./_array-fill":"node_modules/core-js/modules/_array-fill.js","./_add-to-unscopables":"node_modules/core-js/modules/_add-to-unscopables.js"}],"node_modules/core-js/modules/es6.array.find.js":[function(require,module,exports) {
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

},{"./_export":"node_modules/core-js/modules/_export.js","./_array-methods":"node_modules/core-js/modules/_array-methods.js","./_add-to-unscopables":"node_modules/core-js/modules/_add-to-unscopables.js"}],"node_modules/core-js/modules/es6.array.find-index.js":[function(require,module,exports) {
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

},{"./_export":"node_modules/core-js/modules/_export.js","./_array-methods":"node_modules/core-js/modules/_array-methods.js","./_add-to-unscopables":"node_modules/core-js/modules/_add-to-unscopables.js"}],"node_modules/core-js/modules/_set-species.js":[function(require,module,exports) {

'use strict';
var global = require('./_global');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_global":"node_modules/core-js/modules/_global.js","./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js","./_wks":"node_modules/core-js/modules/_wks.js"}],"node_modules/core-js/modules/es6.array.species.js":[function(require,module,exports) {
require('./_set-species')('Array');

},{"./_set-species":"node_modules/core-js/modules/_set-species.js"}],"node_modules/core-js/modules/_iter-step.js":[function(require,module,exports) {
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],"node_modules/core-js/modules/es6.array.iterator.js":[function(require,module,exports) {
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":"node_modules/core-js/modules/_add-to-unscopables.js","./_iter-step":"node_modules/core-js/modules/_iter-step.js","./_iterators":"node_modules/core-js/modules/_iterators.js","./_to-iobject":"node_modules/core-js/modules/_to-iobject.js","./_iter-define":"node_modules/core-js/modules/_iter-define.js"}],"node_modules/core-js/modules/_flags.js":[function(require,module,exports) {
'use strict';
// 21.2.5.3 get RegExp.prototype.flags
var anObject = require('./_an-object');
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

},{"./_an-object":"node_modules/core-js/modules/_an-object.js"}],"node_modules/core-js/modules/es6.regexp.constructor.js":[function(require,module,exports) {

var global = require('./_global');
var inheritIfRequired = require('./_inherit-if-required');
var dP = require('./_object-dp').f;
var gOPN = require('./_object-gopn').f;
var isRegExp = require('./_is-regexp');
var $flags = require('./_flags');
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (require('./_descriptors') && (!CORRECT_NEW || require('./_fails')(function () {
  re2[require('./_wks')('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  require('./_redefine')(global, 'RegExp', $RegExp);
}

require('./_set-species')('RegExp');

},{"./_global":"node_modules/core-js/modules/_global.js","./_inherit-if-required":"node_modules/core-js/modules/_inherit-if-required.js","./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_object-gopn":"node_modules/core-js/modules/_object-gopn.js","./_is-regexp":"node_modules/core-js/modules/_is-regexp.js","./_flags":"node_modules/core-js/modules/_flags.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js","./_fails":"node_modules/core-js/modules/_fails.js","./_wks":"node_modules/core-js/modules/_wks.js","./_redefine":"node_modules/core-js/modules/_redefine.js","./_set-species":"node_modules/core-js/modules/_set-species.js"}],"node_modules/core-js/modules/_regexp-exec.js":[function(require,module,exports) {
'use strict';

var regexpFlags = require('./_flags');

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;

},{"./_flags":"node_modules/core-js/modules/_flags.js"}],"node_modules/core-js/modules/es6.regexp.exec.js":[function(require,module,exports) {
'use strict';
var regexpExec = require('./_regexp-exec');
require('./_export')({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});

},{"./_regexp-exec":"node_modules/core-js/modules/_regexp-exec.js","./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es6.regexp.flags.js":[function(require,module,exports) {
// 21.2.5.3 get RegExp.prototype.flags()
if (require('./_descriptors') && /./g.flags != 'g') require('./_object-dp').f(RegExp.prototype, 'flags', {
  configurable: true,
  get: require('./_flags')
});

},{"./_descriptors":"node_modules/core-js/modules/_descriptors.js","./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_flags":"node_modules/core-js/modules/_flags.js"}],"node_modules/core-js/modules/es6.regexp.to-string.js":[function(require,module,exports) {

'use strict';
require('./es6.regexp.flags');
var anObject = require('./_an-object');
var $flags = require('./_flags');
var DESCRIPTORS = require('./_descriptors');
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  require('./_redefine')(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (require('./_fails')(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

},{"./es6.regexp.flags":"node_modules/core-js/modules/es6.regexp.flags.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_flags":"node_modules/core-js/modules/_flags.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js","./_redefine":"node_modules/core-js/modules/_redefine.js","./_fails":"node_modules/core-js/modules/_fails.js"}],"node_modules/core-js/modules/_advance-string-index.js":[function(require,module,exports) {
'use strict';
var at = require('./_string-at')(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

},{"./_string-at":"node_modules/core-js/modules/_string-at.js"}],"node_modules/core-js/modules/_regexp-exec-abstract.js":[function(require,module,exports) {
'use strict';

var classof = require('./_classof');
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};

},{"./_classof":"node_modules/core-js/modules/_classof.js"}],"node_modules/core-js/modules/_fix-re-wks.js":[function(require,module,exports) {
'use strict';
require('./es6.regexp.exec');
var redefine = require('./_redefine');
var hide = require('./_hide');
var fails = require('./_fails');
var defined = require('./_defined');
var wks = require('./_wks');
var regexpExec = require('./_regexp-exec');

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

},{"./es6.regexp.exec":"node_modules/core-js/modules/es6.regexp.exec.js","./_redefine":"node_modules/core-js/modules/_redefine.js","./_hide":"node_modules/core-js/modules/_hide.js","./_fails":"node_modules/core-js/modules/_fails.js","./_defined":"node_modules/core-js/modules/_defined.js","./_wks":"node_modules/core-js/modules/_wks.js","./_regexp-exec":"node_modules/core-js/modules/_regexp-exec.js"}],"node_modules/core-js/modules/es6.regexp.match.js":[function(require,module,exports) {
'use strict';

var anObject = require('./_an-object');
var toLength = require('./_to-length');
var advanceStringIndex = require('./_advance-string-index');
var regExpExec = require('./_regexp-exec-abstract');

// @@match logic
require('./_fix-re-wks')('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

},{"./_an-object":"node_modules/core-js/modules/_an-object.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./_advance-string-index":"node_modules/core-js/modules/_advance-string-index.js","./_regexp-exec-abstract":"node_modules/core-js/modules/_regexp-exec-abstract.js","./_fix-re-wks":"node_modules/core-js/modules/_fix-re-wks.js"}],"node_modules/core-js/modules/es6.regexp.replace.js":[function(require,module,exports) {
var global = arguments[3];
'use strict';

var anObject = require('./_an-object');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var toInteger = require('./_to-integer');
var advanceStringIndex = require('./_advance-string-index');
var regExpExec = require('./_regexp-exec-abstract');
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});

},{"./_an-object":"node_modules/core-js/modules/_an-object.js","./_to-object":"node_modules/core-js/modules/_to-object.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./_to-integer":"node_modules/core-js/modules/_to-integer.js","./_advance-string-index":"node_modules/core-js/modules/_advance-string-index.js","./_regexp-exec-abstract":"node_modules/core-js/modules/_regexp-exec-abstract.js","./_fix-re-wks":"node_modules/core-js/modules/_fix-re-wks.js"}],"node_modules/core-js/modules/es6.regexp.search.js":[function(require,module,exports) {
'use strict';

var anObject = require('./_an-object');
var sameValue = require('./_same-value');
var regExpExec = require('./_regexp-exec-abstract');

// @@search logic
require('./_fix-re-wks')('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});

},{"./_an-object":"node_modules/core-js/modules/_an-object.js","./_same-value":"node_modules/core-js/modules/_same-value.js","./_regexp-exec-abstract":"node_modules/core-js/modules/_regexp-exec-abstract.js","./_fix-re-wks":"node_modules/core-js/modules/_fix-re-wks.js"}],"node_modules/core-js/modules/_species-constructor.js":[function(require,module,exports) {
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_an-object":"node_modules/core-js/modules/_an-object.js","./_a-function":"node_modules/core-js/modules/_a-function.js","./_wks":"node_modules/core-js/modules/_wks.js"}],"node_modules/core-js/modules/es6.regexp.split.js":[function(require,module,exports) {
'use strict';

var isRegExp = require('./_is-regexp');
var anObject = require('./_an-object');
var speciesConstructor = require('./_species-constructor');
var advanceStringIndex = require('./_advance-string-index');
var toLength = require('./_to-length');
var callRegExpExec = require('./_regexp-exec-abstract');
var regexpExec = require('./_regexp-exec');
var fails = require('./_fails');
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
require('./_fix-re-wks')('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});

},{"./_is-regexp":"node_modules/core-js/modules/_is-regexp.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_species-constructor":"node_modules/core-js/modules/_species-constructor.js","./_advance-string-index":"node_modules/core-js/modules/_advance-string-index.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./_regexp-exec-abstract":"node_modules/core-js/modules/_regexp-exec-abstract.js","./_regexp-exec":"node_modules/core-js/modules/_regexp-exec.js","./_fails":"node_modules/core-js/modules/_fails.js","./_fix-re-wks":"node_modules/core-js/modules/_fix-re-wks.js"}],"node_modules/core-js/modules/_an-instance.js":[function(require,module,exports) {
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],"node_modules/core-js/modules/_for-of.js":[function(require,module,exports) {
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_ctx":"node_modules/core-js/modules/_ctx.js","./_iter-call":"node_modules/core-js/modules/_iter-call.js","./_is-array-iter":"node_modules/core-js/modules/_is-array-iter.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./core.get-iterator-method":"node_modules/core-js/modules/core.get-iterator-method.js"}],"node_modules/core-js/modules/_task.js":[function(require,module,exports) {


var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_ctx":"node_modules/core-js/modules/_ctx.js","./_invoke":"node_modules/core-js/modules/_invoke.js","./_html":"node_modules/core-js/modules/_html.js","./_dom-create":"node_modules/core-js/modules/_dom-create.js","./_global":"node_modules/core-js/modules/_global.js","./_cof":"node_modules/core-js/modules/_cof.js"}],"node_modules/core-js/modules/_microtask.js":[function(require,module,exports) {


var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_global":"node_modules/core-js/modules/_global.js","./_task":"node_modules/core-js/modules/_task.js","./_cof":"node_modules/core-js/modules/_cof.js"}],"node_modules/core-js/modules/_new-promise-capability.js":[function(require,module,exports) {
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":"node_modules/core-js/modules/_a-function.js"}],"node_modules/core-js/modules/_perform.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],"node_modules/core-js/modules/_user-agent.js":[function(require,module,exports) {

var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

},{"./_global":"node_modules/core-js/modules/_global.js"}],"node_modules/core-js/modules/_promise-resolve.js":[function(require,module,exports) {
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":"node_modules/core-js/modules/_an-object.js","./_is-object":"node_modules/core-js/modules/_is-object.js","./_new-promise-capability":"node_modules/core-js/modules/_new-promise-capability.js"}],"node_modules/core-js/modules/_redefine-all.js":[function(require,module,exports) {
var redefine = require('./_redefine');
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

},{"./_redefine":"node_modules/core-js/modules/_redefine.js"}],"node_modules/core-js/modules/es6.promise.js":[function(require,module,exports) {


'use strict';
var LIBRARY = require('./_library');
var global = require('./_global');
var ctx = require('./_ctx');
var classof = require('./_classof');
var $export = require('./_export');
var isObject = require('./_is-object');
var aFunction = require('./_a-function');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var speciesConstructor = require('./_species-constructor');
var task = require('./_task').set;
var microtask = require('./_microtask')();
var newPromiseCapabilityModule = require('./_new-promise-capability');
var perform = require('./_perform');
var userAgent = require('./_user-agent');
var promiseResolve = require('./_promise-resolve');
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_library":"node_modules/core-js/modules/_library.js","./_global":"node_modules/core-js/modules/_global.js","./_ctx":"node_modules/core-js/modules/_ctx.js","./_classof":"node_modules/core-js/modules/_classof.js","./_export":"node_modules/core-js/modules/_export.js","./_is-object":"node_modules/core-js/modules/_is-object.js","./_a-function":"node_modules/core-js/modules/_a-function.js","./_an-instance":"node_modules/core-js/modules/_an-instance.js","./_for-of":"node_modules/core-js/modules/_for-of.js","./_species-constructor":"node_modules/core-js/modules/_species-constructor.js","./_task":"node_modules/core-js/modules/_task.js","./_microtask":"node_modules/core-js/modules/_microtask.js","./_new-promise-capability":"node_modules/core-js/modules/_new-promise-capability.js","./_perform":"node_modules/core-js/modules/_perform.js","./_user-agent":"node_modules/core-js/modules/_user-agent.js","./_promise-resolve":"node_modules/core-js/modules/_promise-resolve.js","./_wks":"node_modules/core-js/modules/_wks.js","./_redefine-all":"node_modules/core-js/modules/_redefine-all.js","./_set-to-string-tag":"node_modules/core-js/modules/_set-to-string-tag.js","./_set-species":"node_modules/core-js/modules/_set-species.js","./_core":"node_modules/core-js/modules/_core.js","./_iter-detect":"node_modules/core-js/modules/_iter-detect.js"}],"node_modules/core-js/modules/_validate-collection.js":[function(require,module,exports) {
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":"node_modules/core-js/modules/_is-object.js"}],"node_modules/core-js/modules/_collection-strong.js":[function(require,module,exports) {
'use strict';
var dP = require('./_object-dp').f;
var create = require('./_object-create');
var redefineAll = require('./_redefine-all');
var ctx = require('./_ctx');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var $iterDefine = require('./_iter-define');
var step = require('./_iter-step');
var setSpecies = require('./_set-species');
var DESCRIPTORS = require('./_descriptors');
var fastKey = require('./_meta').fastKey;
var validate = require('./_validate-collection');
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

},{"./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_object-create":"node_modules/core-js/modules/_object-create.js","./_redefine-all":"node_modules/core-js/modules/_redefine-all.js","./_ctx":"node_modules/core-js/modules/_ctx.js","./_an-instance":"node_modules/core-js/modules/_an-instance.js","./_for-of":"node_modules/core-js/modules/_for-of.js","./_iter-define":"node_modules/core-js/modules/_iter-define.js","./_iter-step":"node_modules/core-js/modules/_iter-step.js","./_set-species":"node_modules/core-js/modules/_set-species.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js","./_meta":"node_modules/core-js/modules/_meta.js","./_validate-collection":"node_modules/core-js/modules/_validate-collection.js"}],"node_modules/core-js/modules/_collection.js":[function(require,module,exports) {

'use strict';
var global = require('./_global');
var $export = require('./_export');
var redefine = require('./_redefine');
var redefineAll = require('./_redefine-all');
var meta = require('./_meta');
var forOf = require('./_for-of');
var anInstance = require('./_an-instance');
var isObject = require('./_is-object');
var fails = require('./_fails');
var $iterDetect = require('./_iter-detect');
var setToStringTag = require('./_set-to-string-tag');
var inheritIfRequired = require('./_inherit-if-required');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

},{"./_global":"node_modules/core-js/modules/_global.js","./_export":"node_modules/core-js/modules/_export.js","./_redefine":"node_modules/core-js/modules/_redefine.js","./_redefine-all":"node_modules/core-js/modules/_redefine-all.js","./_meta":"node_modules/core-js/modules/_meta.js","./_for-of":"node_modules/core-js/modules/_for-of.js","./_an-instance":"node_modules/core-js/modules/_an-instance.js","./_is-object":"node_modules/core-js/modules/_is-object.js","./_fails":"node_modules/core-js/modules/_fails.js","./_iter-detect":"node_modules/core-js/modules/_iter-detect.js","./_set-to-string-tag":"node_modules/core-js/modules/_set-to-string-tag.js","./_inherit-if-required":"node_modules/core-js/modules/_inherit-if-required.js"}],"node_modules/core-js/modules/es6.map.js":[function(require,module,exports) {
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var MAP = 'Map';

// 23.1 Map Objects
module.exports = require('./_collection')(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

},{"./_collection-strong":"node_modules/core-js/modules/_collection-strong.js","./_validate-collection":"node_modules/core-js/modules/_validate-collection.js","./_collection":"node_modules/core-js/modules/_collection.js"}],"node_modules/core-js/modules/es6.set.js":[function(require,module,exports) {
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var SET = 'Set';

// 23.2 Set Objects
module.exports = require('./_collection')(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

},{"./_collection-strong":"node_modules/core-js/modules/_collection-strong.js","./_validate-collection":"node_modules/core-js/modules/_validate-collection.js","./_collection":"node_modules/core-js/modules/_collection.js"}],"node_modules/core-js/modules/_collection-weak.js":[function(require,module,exports) {
'use strict';
var redefineAll = require('./_redefine-all');
var getWeak = require('./_meta').getWeak;
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var createArrayMethod = require('./_array-methods');
var $has = require('./_has');
var validate = require('./_validate-collection');
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

},{"./_redefine-all":"node_modules/core-js/modules/_redefine-all.js","./_meta":"node_modules/core-js/modules/_meta.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_is-object":"node_modules/core-js/modules/_is-object.js","./_an-instance":"node_modules/core-js/modules/_an-instance.js","./_for-of":"node_modules/core-js/modules/_for-of.js","./_array-methods":"node_modules/core-js/modules/_array-methods.js","./_has":"node_modules/core-js/modules/_has.js","./_validate-collection":"node_modules/core-js/modules/_validate-collection.js"}],"node_modules/core-js/modules/es6.weak-map.js":[function(require,module,exports) {

'use strict';
var global = require('./_global');
var each = require('./_array-methods')(0);
var redefine = require('./_redefine');
var meta = require('./_meta');
var assign = require('./_object-assign');
var weak = require('./_collection-weak');
var isObject = require('./_is-object');
var validate = require('./_validate-collection');
var NATIVE_WEAK_MAP = require('./_validate-collection');
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require('./_collection')(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

},{"./_global":"node_modules/core-js/modules/_global.js","./_array-methods":"node_modules/core-js/modules/_array-methods.js","./_redefine":"node_modules/core-js/modules/_redefine.js","./_meta":"node_modules/core-js/modules/_meta.js","./_object-assign":"node_modules/core-js/modules/_object-assign.js","./_collection-weak":"node_modules/core-js/modules/_collection-weak.js","./_is-object":"node_modules/core-js/modules/_is-object.js","./_validate-collection":"node_modules/core-js/modules/_validate-collection.js","./_collection":"node_modules/core-js/modules/_collection.js"}],"node_modules/core-js/modules/es6.weak-set.js":[function(require,module,exports) {
'use strict';
var weak = require('./_collection-weak');
var validate = require('./_validate-collection');
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
require('./_collection')(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

},{"./_collection-weak":"node_modules/core-js/modules/_collection-weak.js","./_validate-collection":"node_modules/core-js/modules/_validate-collection.js","./_collection":"node_modules/core-js/modules/_collection.js"}],"node_modules/core-js/modules/_typed.js":[function(require,module,exports) {

var global = require('./_global');
var hide = require('./_hide');
var uid = require('./_uid');
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

},{"./_global":"node_modules/core-js/modules/_global.js","./_hide":"node_modules/core-js/modules/_hide.js","./_uid":"node_modules/core-js/modules/_uid.js"}],"node_modules/core-js/modules/_to-index.js":[function(require,module,exports) {
// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

},{"./_to-integer":"node_modules/core-js/modules/_to-integer.js","./_to-length":"node_modules/core-js/modules/_to-length.js"}],"node_modules/core-js/modules/_typed-buffer.js":[function(require,module,exports) {

'use strict';
var global = require('./_global');
var DESCRIPTORS = require('./_descriptors');
var LIBRARY = require('./_library');
var $typed = require('./_typed');
var hide = require('./_hide');
var redefineAll = require('./_redefine-all');
var fails = require('./_fails');
var anInstance = require('./_an-instance');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var toIndex = require('./_to-index');
var gOPN = require('./_object-gopn').f;
var dP = require('./_object-dp').f;
var arrayFill = require('./_array-fill');
var setToStringTag = require('./_set-to-string-tag');
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

},{"./_global":"node_modules/core-js/modules/_global.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js","./_library":"node_modules/core-js/modules/_library.js","./_typed":"node_modules/core-js/modules/_typed.js","./_hide":"node_modules/core-js/modules/_hide.js","./_redefine-all":"node_modules/core-js/modules/_redefine-all.js","./_fails":"node_modules/core-js/modules/_fails.js","./_an-instance":"node_modules/core-js/modules/_an-instance.js","./_to-integer":"node_modules/core-js/modules/_to-integer.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./_to-index":"node_modules/core-js/modules/_to-index.js","./_object-gopn":"node_modules/core-js/modules/_object-gopn.js","./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_array-fill":"node_modules/core-js/modules/_array-fill.js","./_set-to-string-tag":"node_modules/core-js/modules/_set-to-string-tag.js"}],"node_modules/core-js/modules/es6.typed.array-buffer.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $typed = require('./_typed');
var buffer = require('./_typed-buffer');
var anObject = require('./_an-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
var isObject = require('./_is-object');
var ArrayBuffer = require('./_global').ArrayBuffer;
var speciesConstructor = require('./_species-constructor');
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * require('./_fails')(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

require('./_set-species')(ARRAY_BUFFER);

},{"./_export":"node_modules/core-js/modules/_export.js","./_typed":"node_modules/core-js/modules/_typed.js","./_typed-buffer":"node_modules/core-js/modules/_typed-buffer.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_to-absolute-index":"node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./_is-object":"node_modules/core-js/modules/_is-object.js","./_global":"node_modules/core-js/modules/_global.js","./_species-constructor":"node_modules/core-js/modules/_species-constructor.js","./_fails":"node_modules/core-js/modules/_fails.js","./_set-species":"node_modules/core-js/modules/_set-species.js"}],"node_modules/core-js/modules/es6.typed.data-view.js":[function(require,module,exports) {
var $export = require('./_export');
$export($export.G + $export.W + $export.F * !require('./_typed').ABV, {
  DataView: require('./_typed-buffer').DataView
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_typed":"node_modules/core-js/modules/_typed.js","./_typed-buffer":"node_modules/core-js/modules/_typed-buffer.js"}],"node_modules/core-js/modules/_typed-array.js":[function(require,module,exports) {
var global = arguments[3];
'use strict';
if (require('./_descriptors')) {
  var LIBRARY = require('./_library');
  var global = require('./_global');
  var fails = require('./_fails');
  var $export = require('./_export');
  var $typed = require('./_typed');
  var $buffer = require('./_typed-buffer');
  var ctx = require('./_ctx');
  var anInstance = require('./_an-instance');
  var propertyDesc = require('./_property-desc');
  var hide = require('./_hide');
  var redefineAll = require('./_redefine-all');
  var toInteger = require('./_to-integer');
  var toLength = require('./_to-length');
  var toIndex = require('./_to-index');
  var toAbsoluteIndex = require('./_to-absolute-index');
  var toPrimitive = require('./_to-primitive');
  var has = require('./_has');
  var classof = require('./_classof');
  var isObject = require('./_is-object');
  var toObject = require('./_to-object');
  var isArrayIter = require('./_is-array-iter');
  var create = require('./_object-create');
  var getPrototypeOf = require('./_object-gpo');
  var gOPN = require('./_object-gopn').f;
  var getIterFn = require('./core.get-iterator-method');
  var uid = require('./_uid');
  var wks = require('./_wks');
  var createArrayMethod = require('./_array-methods');
  var createArrayIncludes = require('./_array-includes');
  var speciesConstructor = require('./_species-constructor');
  var ArrayIterators = require('./es6.array.iterator');
  var Iterators = require('./_iterators');
  var $iterDetect = require('./_iter-detect');
  var setSpecies = require('./_set-species');
  var arrayFill = require('./_array-fill');
  var arrayCopyWithin = require('./_array-copy-within');
  var $DP = require('./_object-dp');
  var $GOPD = require('./_object-gopd');
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };

},{"./_descriptors":"node_modules/core-js/modules/_descriptors.js","./_library":"node_modules/core-js/modules/_library.js","./_global":"node_modules/core-js/modules/_global.js","./_fails":"node_modules/core-js/modules/_fails.js","./_export":"node_modules/core-js/modules/_export.js","./_typed":"node_modules/core-js/modules/_typed.js","./_typed-buffer":"node_modules/core-js/modules/_typed-buffer.js","./_ctx":"node_modules/core-js/modules/_ctx.js","./_an-instance":"node_modules/core-js/modules/_an-instance.js","./_property-desc":"node_modules/core-js/modules/_property-desc.js","./_hide":"node_modules/core-js/modules/_hide.js","./_redefine-all":"node_modules/core-js/modules/_redefine-all.js","./_to-integer":"node_modules/core-js/modules/_to-integer.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./_to-index":"node_modules/core-js/modules/_to-index.js","./_to-absolute-index":"node_modules/core-js/modules/_to-absolute-index.js","./_to-primitive":"node_modules/core-js/modules/_to-primitive.js","./_has":"node_modules/core-js/modules/_has.js","./_classof":"node_modules/core-js/modules/_classof.js","./_is-object":"node_modules/core-js/modules/_is-object.js","./_to-object":"node_modules/core-js/modules/_to-object.js","./_is-array-iter":"node_modules/core-js/modules/_is-array-iter.js","./_object-create":"node_modules/core-js/modules/_object-create.js","./_object-gpo":"node_modules/core-js/modules/_object-gpo.js","./_object-gopn":"node_modules/core-js/modules/_object-gopn.js","./core.get-iterator-method":"node_modules/core-js/modules/core.get-iterator-method.js","./_uid":"node_modules/core-js/modules/_uid.js","./_wks":"node_modules/core-js/modules/_wks.js","./_array-methods":"node_modules/core-js/modules/_array-methods.js","./_array-includes":"node_modules/core-js/modules/_array-includes.js","./_species-constructor":"node_modules/core-js/modules/_species-constructor.js","./es6.array.iterator":"node_modules/core-js/modules/es6.array.iterator.js","./_iterators":"node_modules/core-js/modules/_iterators.js","./_iter-detect":"node_modules/core-js/modules/_iter-detect.js","./_set-species":"node_modules/core-js/modules/_set-species.js","./_array-fill":"node_modules/core-js/modules/_array-fill.js","./_array-copy-within":"node_modules/core-js/modules/_array-copy-within.js","./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_object-gopd":"node_modules/core-js/modules/_object-gopd.js"}],"node_modules/core-js/modules/es6.typed.int8-array.js":[function(require,module,exports) {
require('./_typed-array')('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"node_modules/core-js/modules/_typed-array.js"}],"node_modules/core-js/modules/es6.typed.uint8-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"node_modules/core-js/modules/_typed-array.js"}],"node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

},{"./_typed-array":"node_modules/core-js/modules/_typed-array.js"}],"node_modules/core-js/modules/es6.typed.int16-array.js":[function(require,module,exports) {
require('./_typed-array')('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"node_modules/core-js/modules/_typed-array.js"}],"node_modules/core-js/modules/es6.typed.uint16-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"node_modules/core-js/modules/_typed-array.js"}],"node_modules/core-js/modules/es6.typed.int32-array.js":[function(require,module,exports) {
require('./_typed-array')('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"node_modules/core-js/modules/_typed-array.js"}],"node_modules/core-js/modules/es6.typed.uint32-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"node_modules/core-js/modules/_typed-array.js"}],"node_modules/core-js/modules/es6.typed.float32-array.js":[function(require,module,exports) {
require('./_typed-array')('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"node_modules/core-js/modules/_typed-array.js"}],"node_modules/core-js/modules/es6.typed.float64-array.js":[function(require,module,exports) {
require('./_typed-array')('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"node_modules/core-js/modules/_typed-array.js"}],"node_modules/core-js/modules/es6.reflect.apply.js":[function(require,module,exports) {
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = require('./_export');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var rApply = (require('./_global').Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !require('./_fails')(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_a-function":"node_modules/core-js/modules/_a-function.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_global":"node_modules/core-js/modules/_global.js","./_fails":"node_modules/core-js/modules/_fails.js"}],"node_modules/core-js/modules/es6.reflect.construct.js":[function(require,module,exports) {
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = require('./_export');
var create = require('./_object-create');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var fails = require('./_fails');
var bind = require('./_bind');
var rConstruct = (require('./_global').Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_object-create":"node_modules/core-js/modules/_object-create.js","./_a-function":"node_modules/core-js/modules/_a-function.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_is-object":"node_modules/core-js/modules/_is-object.js","./_fails":"node_modules/core-js/modules/_fails.js","./_bind":"node_modules/core-js/modules/_bind.js","./_global":"node_modules/core-js/modules/_global.js"}],"node_modules/core-js/modules/es6.reflect.define-property.js":[function(require,module,exports) {
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = require('./_object-dp');
var $export = require('./_export');
var anObject = require('./_an-object');
var toPrimitive = require('./_to-primitive');

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * require('./_fails')(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_export":"node_modules/core-js/modules/_export.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_to-primitive":"node_modules/core-js/modules/_to-primitive.js","./_fails":"node_modules/core-js/modules/_fails.js"}],"node_modules/core-js/modules/es6.reflect.delete-property.js":[function(require,module,exports) {
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = require('./_export');
var gOPD = require('./_object-gopd').f;
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_object-gopd":"node_modules/core-js/modules/_object-gopd.js","./_an-object":"node_modules/core-js/modules/_an-object.js"}],"node_modules/core-js/modules/es6.reflect.enumerate.js":[function(require,module,exports) {
'use strict';
// 26.1.5 Reflect.enumerate(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
require('./_iter-create')(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_iter-create":"node_modules/core-js/modules/_iter-create.js"}],"node_modules/core-js/modules/es6.reflect.get.js":[function(require,module,exports) {
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = require('./_object-gopd');
var getPrototypeOf = require('./_object-gpo');
var has = require('./_has');
var $export = require('./_export');
var isObject = require('./_is-object');
var anObject = require('./_an-object');

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });

},{"./_object-gopd":"node_modules/core-js/modules/_object-gopd.js","./_object-gpo":"node_modules/core-js/modules/_object-gpo.js","./_has":"node_modules/core-js/modules/_has.js","./_export":"node_modules/core-js/modules/_export.js","./_is-object":"node_modules/core-js/modules/_is-object.js","./_an-object":"node_modules/core-js/modules/_an-object.js"}],"node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":[function(require,module,exports) {
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = require('./_object-gopd');
var $export = require('./_export');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

},{"./_object-gopd":"node_modules/core-js/modules/_object-gopd.js","./_export":"node_modules/core-js/modules/_export.js","./_an-object":"node_modules/core-js/modules/_an-object.js"}],"node_modules/core-js/modules/es6.reflect.get-prototype-of.js":[function(require,module,exports) {
// 26.1.8 Reflect.getPrototypeOf(target)
var $export = require('./_export');
var getProto = require('./_object-gpo');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_object-gpo":"node_modules/core-js/modules/_object-gpo.js","./_an-object":"node_modules/core-js/modules/_an-object.js"}],"node_modules/core-js/modules/es6.reflect.has.js":[function(require,module,exports) {
// 26.1.9 Reflect.has(target, propertyKey)
var $export = require('./_export');

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es6.reflect.is-extensible.js":[function(require,module,exports) {
// 26.1.10 Reflect.isExtensible(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_an-object":"node_modules/core-js/modules/_an-object.js"}],"node_modules/core-js/modules/_own-keys.js":[function(require,module,exports) {
// all object keys, includes non-enumerable and symbols
var gOPN = require('./_object-gopn');
var gOPS = require('./_object-gops');
var anObject = require('./_an-object');
var Reflect = require('./_global').Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

},{"./_object-gopn":"node_modules/core-js/modules/_object-gopn.js","./_object-gops":"node_modules/core-js/modules/_object-gops.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_global":"node_modules/core-js/modules/_global.js"}],"node_modules/core-js/modules/es6.reflect.own-keys.js":[function(require,module,exports) {
// 26.1.11 Reflect.ownKeys(target)
var $export = require('./_export');

$export($export.S, 'Reflect', { ownKeys: require('./_own-keys') });

},{"./_export":"node_modules/core-js/modules/_export.js","./_own-keys":"node_modules/core-js/modules/_own-keys.js"}],"node_modules/core-js/modules/es6.reflect.prevent-extensions.js":[function(require,module,exports) {
// 26.1.12 Reflect.preventExtensions(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_an-object":"node_modules/core-js/modules/_an-object.js"}],"node_modules/core-js/modules/es6.reflect.set.js":[function(require,module,exports) {
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = require('./_object-dp');
var gOPD = require('./_object-gopd');
var getPrototypeOf = require('./_object-gpo');
var has = require('./_has');
var $export = require('./_export');
var createDesc = require('./_property-desc');
var anObject = require('./_an-object');
var isObject = require('./_is-object');

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });

},{"./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_object-gopd":"node_modules/core-js/modules/_object-gopd.js","./_object-gpo":"node_modules/core-js/modules/_object-gpo.js","./_has":"node_modules/core-js/modules/_has.js","./_export":"node_modules/core-js/modules/_export.js","./_property-desc":"node_modules/core-js/modules/_property-desc.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_is-object":"node_modules/core-js/modules/_is-object.js"}],"node_modules/core-js/modules/es6.reflect.set-prototype-of.js":[function(require,module,exports) {
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = require('./_export');
var setProto = require('./_set-proto');

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_set-proto":"node_modules/core-js/modules/_set-proto.js"}],"node_modules/core-js/modules/es7.array.includes.js":[function(require,module,exports) {
'use strict';
// https://github.com/tc39/Array.prototype.includes
var $export = require('./_export');
var $includes = require('./_array-includes')(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')('includes');

},{"./_export":"node_modules/core-js/modules/_export.js","./_array-includes":"node_modules/core-js/modules/_array-includes.js","./_add-to-unscopables":"node_modules/core-js/modules/_add-to-unscopables.js"}],"node_modules/core-js/modules/_flatten-into-array.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = require('./_is-array');
var isObject = require('./_is-object');
var toLength = require('./_to-length');
var ctx = require('./_ctx');
var IS_CONCAT_SPREADABLE = require('./_wks')('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;

},{"./_is-array":"node_modules/core-js/modules/_is-array.js","./_is-object":"node_modules/core-js/modules/_is-object.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./_ctx":"node_modules/core-js/modules/_ctx.js","./_wks":"node_modules/core-js/modules/_wks.js"}],"node_modules/core-js/modules/es7.array.flat-map.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = require('./_export');
var flattenIntoArray = require('./_flatten-into-array');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var aFunction = require('./_a-function');
var arraySpeciesCreate = require('./_array-species-create');

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

require('./_add-to-unscopables')('flatMap');

},{"./_export":"node_modules/core-js/modules/_export.js","./_flatten-into-array":"node_modules/core-js/modules/_flatten-into-array.js","./_to-object":"node_modules/core-js/modules/_to-object.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./_a-function":"node_modules/core-js/modules/_a-function.js","./_array-species-create":"node_modules/core-js/modules/_array-species-create.js","./_add-to-unscopables":"node_modules/core-js/modules/_add-to-unscopables.js"}],"node_modules/core-js/modules/es7.array.flatten.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = require('./_export');
var flattenIntoArray = require('./_flatten-into-array');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var toInteger = require('./_to-integer');
var arraySpeciesCreate = require('./_array-species-create');

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

require('./_add-to-unscopables')('flatten');

},{"./_export":"node_modules/core-js/modules/_export.js","./_flatten-into-array":"node_modules/core-js/modules/_flatten-into-array.js","./_to-object":"node_modules/core-js/modules/_to-object.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./_to-integer":"node_modules/core-js/modules/_to-integer.js","./_array-species-create":"node_modules/core-js/modules/_array-species-create.js","./_add-to-unscopables":"node_modules/core-js/modules/_add-to-unscopables.js"}],"node_modules/core-js/modules/es7.string.at.js":[function(require,module,exports) {
'use strict';
// https://github.com/mathiasbynens/String.prototype.at
var $export = require('./_export');
var $at = require('./_string-at')(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_string-at":"node_modules/core-js/modules/_string-at.js"}],"node_modules/core-js/modules/_string-pad.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = require('./_to-length');
var repeat = require('./_string-repeat');
var defined = require('./_defined');

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

},{"./_to-length":"node_modules/core-js/modules/_to-length.js","./_string-repeat":"node_modules/core-js/modules/_string-repeat.js","./_defined":"node_modules/core-js/modules/_defined.js"}],"node_modules/core-js/modules/es7.string.pad-start.js":[function(require,module,exports) {
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_string-pad":"node_modules/core-js/modules/_string-pad.js","./_user-agent":"node_modules/core-js/modules/_user-agent.js"}],"node_modules/core-js/modules/es7.string.pad-end.js":[function(require,module,exports) {
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_string-pad":"node_modules/core-js/modules/_string-pad.js","./_user-agent":"node_modules/core-js/modules/_user-agent.js"}],"node_modules/core-js/modules/es7.string.trim-left.js":[function(require,module,exports) {
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

},{"./_string-trim":"node_modules/core-js/modules/_string-trim.js"}],"node_modules/core-js/modules/es7.string.trim-right.js":[function(require,module,exports) {
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

},{"./_string-trim":"node_modules/core-js/modules/_string-trim.js"}],"node_modules/core-js/modules/es7.string.match-all.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/String.prototype.matchAll/
var $export = require('./_export');
var defined = require('./_defined');
var toLength = require('./_to-length');
var isRegExp = require('./_is-regexp');
var getFlags = require('./_flags');
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

require('./_iter-create')($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_defined":"node_modules/core-js/modules/_defined.js","./_to-length":"node_modules/core-js/modules/_to-length.js","./_is-regexp":"node_modules/core-js/modules/_is-regexp.js","./_flags":"node_modules/core-js/modules/_flags.js","./_iter-create":"node_modules/core-js/modules/_iter-create.js"}],"node_modules/core-js/modules/es7.symbol.async-iterator.js":[function(require,module,exports) {
require('./_wks-define')('asyncIterator');

},{"./_wks-define":"node_modules/core-js/modules/_wks-define.js"}],"node_modules/core-js/modules/es7.symbol.observable.js":[function(require,module,exports) {
require('./_wks-define')('observable');

},{"./_wks-define":"node_modules/core-js/modules/_wks-define.js"}],"node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = require('./_export');
var ownKeys = require('./_own-keys');
var toIObject = require('./_to-iobject');
var gOPD = require('./_object-gopd');
var createProperty = require('./_create-property');

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_own-keys":"node_modules/core-js/modules/_own-keys.js","./_to-iobject":"node_modules/core-js/modules/_to-iobject.js","./_object-gopd":"node_modules/core-js/modules/_object-gopd.js","./_create-property":"node_modules/core-js/modules/_create-property.js"}],"node_modules/core-js/modules/_object-to-array.js":[function(require,module,exports) {
var getKeys = require('./_object-keys');
var toIObject = require('./_to-iobject');
var isEnum = require('./_object-pie').f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

},{"./_object-keys":"node_modules/core-js/modules/_object-keys.js","./_to-iobject":"node_modules/core-js/modules/_to-iobject.js","./_object-pie":"node_modules/core-js/modules/_object-pie.js"}],"node_modules/core-js/modules/es7.object.values.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_object-to-array":"node_modules/core-js/modules/_object-to-array.js"}],"node_modules/core-js/modules/es7.object.entries.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_object-to-array":"node_modules/core-js/modules/_object-to-array.js"}],"node_modules/core-js/modules/_object-forced-pam.js":[function(require,module,exports) {
'use strict';
// Forced replacement prototype accessors methods
module.exports = require('./_library') || !require('./_fails')(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete require('./_global')[K];
});

},{"./_library":"node_modules/core-js/modules/_library.js","./_fails":"node_modules/core-js/modules/_fails.js","./_global":"node_modules/core-js/modules/_global.js"}],"node_modules/core-js/modules/es7.object.define-getter.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var aFunction = require('./_a-function');
var $defineProperty = require('./_object-dp');

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_to-object":"node_modules/core-js/modules/_to-object.js","./_a-function":"node_modules/core-js/modules/_a-function.js","./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js","./_object-forced-pam":"node_modules/core-js/modules/_object-forced-pam.js"}],"node_modules/core-js/modules/es7.object.define-setter.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var aFunction = require('./_a-function');
var $defineProperty = require('./_object-dp');

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_to-object":"node_modules/core-js/modules/_to-object.js","./_a-function":"node_modules/core-js/modules/_a-function.js","./_object-dp":"node_modules/core-js/modules/_object-dp.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js","./_object-forced-pam":"node_modules/core-js/modules/_object-forced-pam.js"}],"node_modules/core-js/modules/es7.object.lookup-getter.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');
var getPrototypeOf = require('./_object-gpo');
var getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_to-object":"node_modules/core-js/modules/_to-object.js","./_to-primitive":"node_modules/core-js/modules/_to-primitive.js","./_object-gpo":"node_modules/core-js/modules/_object-gpo.js","./_object-gopd":"node_modules/core-js/modules/_object-gopd.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js","./_object-forced-pam":"node_modules/core-js/modules/_object-forced-pam.js"}],"node_modules/core-js/modules/es7.object.lookup-setter.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');
var getPrototypeOf = require('./_object-gpo');
var getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_to-object":"node_modules/core-js/modules/_to-object.js","./_to-primitive":"node_modules/core-js/modules/_to-primitive.js","./_object-gpo":"node_modules/core-js/modules/_object-gpo.js","./_object-gopd":"node_modules/core-js/modules/_object-gopd.js","./_descriptors":"node_modules/core-js/modules/_descriptors.js","./_object-forced-pam":"node_modules/core-js/modules/_object-forced-pam.js"}],"node_modules/core-js/modules/_array-from-iterable.js":[function(require,module,exports) {
var forOf = require('./_for-of');

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":"node_modules/core-js/modules/_for-of.js"}],"node_modules/core-js/modules/_collection-to-json.js":[function(require,module,exports) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof');
var from = require('./_array-from-iterable');
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

},{"./_classof":"node_modules/core-js/modules/_classof.js","./_array-from-iterable":"node_modules/core-js/modules/_array-from-iterable.js"}],"node_modules/core-js/modules/es7.map.to-json.js":[function(require,module,exports) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Map', { toJSON: require('./_collection-to-json')('Map') });

},{"./_export":"node_modules/core-js/modules/_export.js","./_collection-to-json":"node_modules/core-js/modules/_collection-to-json.js"}],"node_modules/core-js/modules/es7.set.to-json.js":[function(require,module,exports) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Set', { toJSON: require('./_collection-to-json')('Set') });

},{"./_export":"node_modules/core-js/modules/_export.js","./_collection-to-json":"node_modules/core-js/modules/_collection-to-json.js"}],"node_modules/core-js/modules/_set-collection-of.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es7.map.of.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
require('./_set-collection-of')('Map');

},{"./_set-collection-of":"node_modules/core-js/modules/_set-collection-of.js"}],"node_modules/core-js/modules/es7.set.of.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
require('./_set-collection-of')('Set');

},{"./_set-collection-of":"node_modules/core-js/modules/_set-collection-of.js"}],"node_modules/core-js/modules/es7.weak-map.of.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
require('./_set-collection-of')('WeakMap');

},{"./_set-collection-of":"node_modules/core-js/modules/_set-collection-of.js"}],"node_modules/core-js/modules/es7.weak-set.of.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
require('./_set-collection-of')('WeakSet');

},{"./_set-collection-of":"node_modules/core-js/modules/_set-collection-of.js"}],"node_modules/core-js/modules/_set-collection-from.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');
var aFunction = require('./_a-function');
var ctx = require('./_ctx');
var forOf = require('./_for-of');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

},{"./_export":"node_modules/core-js/modules/_export.js","./_a-function":"node_modules/core-js/modules/_a-function.js","./_ctx":"node_modules/core-js/modules/_ctx.js","./_for-of":"node_modules/core-js/modules/_for-of.js"}],"node_modules/core-js/modules/es7.map.from.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
require('./_set-collection-from')('Map');

},{"./_set-collection-from":"node_modules/core-js/modules/_set-collection-from.js"}],"node_modules/core-js/modules/es7.set.from.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
require('./_set-collection-from')('Set');

},{"./_set-collection-from":"node_modules/core-js/modules/_set-collection-from.js"}],"node_modules/core-js/modules/es7.weak-map.from.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
require('./_set-collection-from')('WeakMap');

},{"./_set-collection-from":"node_modules/core-js/modules/_set-collection-from.js"}],"node_modules/core-js/modules/es7.weak-set.from.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
require('./_set-collection-from')('WeakSet');

},{"./_set-collection-from":"node_modules/core-js/modules/_set-collection-from.js"}],"node_modules/core-js/modules/es7.global.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-global
var $export = require('./_export');

$export($export.G, { global: require('./_global') });

},{"./_export":"node_modules/core-js/modules/_export.js","./_global":"node_modules/core-js/modules/_global.js"}],"node_modules/core-js/modules/es7.system.global.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-global
var $export = require('./_export');

$export($export.S, 'System', { global: require('./_global') });

},{"./_export":"node_modules/core-js/modules/_export.js","./_global":"node_modules/core-js/modules/_global.js"}],"node_modules/core-js/modules/es7.error.is-error.js":[function(require,module,exports) {
// https://github.com/ljharb/proposal-is-error
var $export = require('./_export');
var cof = require('./_cof');

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_cof":"node_modules/core-js/modules/_cof.js"}],"node_modules/core-js/modules/es7.math.clamp.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es7.math.deg-per-rad.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es7.math.degrees.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/_math-scale.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};

},{}],"node_modules/core-js/modules/es7.math.fscale.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');
var scale = require('./_math-scale');
var fround = require('./_math-fround');

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_math-scale":"node_modules/core-js/modules/_math-scale.js","./_math-fround":"node_modules/core-js/modules/_math-fround.js"}],"node_modules/core-js/modules/es7.math.iaddh.js":[function(require,module,exports) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es7.math.isubh.js":[function(require,module,exports) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es7.math.imulh.js":[function(require,module,exports) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es7.math.rad-per-deg.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es7.math.radians.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es7.math.scale.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', { scale: require('./_math-scale') });

},{"./_export":"node_modules/core-js/modules/_export.js","./_math-scale":"node_modules/core-js/modules/_math-scale.js"}],"node_modules/core-js/modules/es7.math.umulh.js":[function(require,module,exports) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es7.math.signbit.js":[function(require,module,exports) {
// http://jfbastien.github.io/papers/Math.signbit.html
var $export = require('./_export');

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });

},{"./_export":"node_modules/core-js/modules/_export.js"}],"node_modules/core-js/modules/es7.promise.finally.js":[function(require,module,exports) {

// https://github.com/tc39/proposal-promise-finally
'use strict';
var $export = require('./_export');
var core = require('./_core');
var global = require('./_global');
var speciesConstructor = require('./_species-constructor');
var promiseResolve = require('./_promise-resolve');

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

},{"./_export":"node_modules/core-js/modules/_export.js","./_core":"node_modules/core-js/modules/_core.js","./_global":"node_modules/core-js/modules/_global.js","./_species-constructor":"node_modules/core-js/modules/_species-constructor.js","./_promise-resolve":"node_modules/core-js/modules/_promise-resolve.js"}],"node_modules/core-js/modules/es7.promise.try.js":[function(require,module,exports) {
'use strict';
// https://github.com/tc39/proposal-promise-try
var $export = require('./_export');
var newPromiseCapability = require('./_new-promise-capability');
var perform = require('./_perform');

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

},{"./_export":"node_modules/core-js/modules/_export.js","./_new-promise-capability":"node_modules/core-js/modules/_new-promise-capability.js","./_perform":"node_modules/core-js/modules/_perform.js"}],"node_modules/core-js/modules/_metadata.js":[function(require,module,exports) {
var Map = require('./es6.map');
var $export = require('./_export');
var shared = require('./_shared')('metadata');
var store = shared.store || (shared.store = new (require('./es6.weak-map'))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};

},{"./es6.map":"node_modules/core-js/modules/es6.map.js","./_export":"node_modules/core-js/modules/_export.js","./_shared":"node_modules/core-js/modules/_shared.js","./es6.weak-map":"node_modules/core-js/modules/es6.weak-map.js"}],"node_modules/core-js/modules/es7.reflect.define-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });

},{"./_metadata":"node_modules/core-js/modules/_metadata.js","./_an-object":"node_modules/core-js/modules/_an-object.js"}],"node_modules/core-js/modules/es7.reflect.delete-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });

},{"./_metadata":"node_modules/core-js/modules/_metadata.js","./_an-object":"node_modules/core-js/modules/_an-object.js"}],"node_modules/core-js/modules/es7.reflect.get-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var getPrototypeOf = require('./_object-gpo');
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_metadata":"node_modules/core-js/modules/_metadata.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_object-gpo":"node_modules/core-js/modules/_object-gpo.js"}],"node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":[function(require,module,exports) {
var Set = require('./es6.set');
var from = require('./_array-from-iterable');
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var getPrototypeOf = require('./_object-gpo');
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });

},{"./es6.set":"node_modules/core-js/modules/es6.set.js","./_array-from-iterable":"node_modules/core-js/modules/_array-from-iterable.js","./_metadata":"node_modules/core-js/modules/_metadata.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_object-gpo":"node_modules/core-js/modules/_object-gpo.js"}],"node_modules/core-js/modules/es7.reflect.get-own-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_metadata":"node_modules/core-js/modules/_metadata.js","./_an-object":"node_modules/core-js/modules/_an-object.js"}],"node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });

},{"./_metadata":"node_modules/core-js/modules/_metadata.js","./_an-object":"node_modules/core-js/modules/_an-object.js"}],"node_modules/core-js/modules/es7.reflect.has-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var getPrototypeOf = require('./_object-gpo');
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_metadata":"node_modules/core-js/modules/_metadata.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_object-gpo":"node_modules/core-js/modules/_object-gpo.js"}],"node_modules/core-js/modules/es7.reflect.has-own-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_metadata":"node_modules/core-js/modules/_metadata.js","./_an-object":"node_modules/core-js/modules/_an-object.js"}],"node_modules/core-js/modules/es7.reflect.metadata.js":[function(require,module,exports) {
var $metadata = require('./_metadata');
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });

},{"./_metadata":"node_modules/core-js/modules/_metadata.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_a-function":"node_modules/core-js/modules/_a-function.js"}],"node_modules/core-js/modules/es7.asap.js":[function(require,module,exports) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = require('./_export');
var microtask = require('./_microtask')();
var process = require('./_global').process;
var isNode = require('./_cof')(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_microtask":"node_modules/core-js/modules/_microtask.js","./_global":"node_modules/core-js/modules/_global.js","./_cof":"node_modules/core-js/modules/_cof.js"}],"node_modules/core-js/modules/es7.observable.js":[function(require,module,exports) {

'use strict';
// https://github.com/zenparsing/es-observable
var $export = require('./_export');
var global = require('./_global');
var core = require('./_core');
var microtask = require('./_microtask')();
var OBSERVABLE = require('./_wks')('observable');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var anInstance = require('./_an-instance');
var redefineAll = require('./_redefine-all');
var hide = require('./_hide');
var forOf = require('./_for-of');
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

require('./_set-species')('Observable');

},{"./_export":"node_modules/core-js/modules/_export.js","./_global":"node_modules/core-js/modules/_global.js","./_core":"node_modules/core-js/modules/_core.js","./_microtask":"node_modules/core-js/modules/_microtask.js","./_wks":"node_modules/core-js/modules/_wks.js","./_a-function":"node_modules/core-js/modules/_a-function.js","./_an-object":"node_modules/core-js/modules/_an-object.js","./_an-instance":"node_modules/core-js/modules/_an-instance.js","./_redefine-all":"node_modules/core-js/modules/_redefine-all.js","./_hide":"node_modules/core-js/modules/_hide.js","./_for-of":"node_modules/core-js/modules/_for-of.js","./_set-species":"node_modules/core-js/modules/_set-species.js"}],"node_modules/core-js/modules/web.timers.js":[function(require,module,exports) {

// ie9- setTimeout & setInterval additional parameters fix
var global = require('./_global');
var $export = require('./_export');
var userAgent = require('./_user-agent');
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

},{"./_global":"node_modules/core-js/modules/_global.js","./_export":"node_modules/core-js/modules/_export.js","./_user-agent":"node_modules/core-js/modules/_user-agent.js"}],"node_modules/core-js/modules/web.immediate.js":[function(require,module,exports) {
var $export = require('./_export');
var $task = require('./_task');
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

},{"./_export":"node_modules/core-js/modules/_export.js","./_task":"node_modules/core-js/modules/_task.js"}],"node_modules/core-js/modules/web.dom.iterable.js":[function(require,module,exports) {

var $iterators = require('./es6.array.iterator');
var getKeys = require('./_object-keys');
var redefine = require('./_redefine');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var wks = require('./_wks');
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}

},{"./es6.array.iterator":"node_modules/core-js/modules/es6.array.iterator.js","./_object-keys":"node_modules/core-js/modules/_object-keys.js","./_redefine":"node_modules/core-js/modules/_redefine.js","./_global":"node_modules/core-js/modules/_global.js","./_hide":"node_modules/core-js/modules/_hide.js","./_iterators":"node_modules/core-js/modules/_iterators.js","./_wks":"node_modules/core-js/modules/_wks.js"}],"node_modules/core-js/shim.js":[function(require,module,exports) {
require('./modules/es6.symbol');
require('./modules/es6.object.create');
require('./modules/es6.object.define-property');
require('./modules/es6.object.define-properties');
require('./modules/es6.object.get-own-property-descriptor');
require('./modules/es6.object.get-prototype-of');
require('./modules/es6.object.keys');
require('./modules/es6.object.get-own-property-names');
require('./modules/es6.object.freeze');
require('./modules/es6.object.seal');
require('./modules/es6.object.prevent-extensions');
require('./modules/es6.object.is-frozen');
require('./modules/es6.object.is-sealed');
require('./modules/es6.object.is-extensible');
require('./modules/es6.object.assign');
require('./modules/es6.object.is');
require('./modules/es6.object.set-prototype-of');
require('./modules/es6.object.to-string');
require('./modules/es6.function.bind');
require('./modules/es6.function.name');
require('./modules/es6.function.has-instance');
require('./modules/es6.parse-int');
require('./modules/es6.parse-float');
require('./modules/es6.number.constructor');
require('./modules/es6.number.to-fixed');
require('./modules/es6.number.to-precision');
require('./modules/es6.number.epsilon');
require('./modules/es6.number.is-finite');
require('./modules/es6.number.is-integer');
require('./modules/es6.number.is-nan');
require('./modules/es6.number.is-safe-integer');
require('./modules/es6.number.max-safe-integer');
require('./modules/es6.number.min-safe-integer');
require('./modules/es6.number.parse-float');
require('./modules/es6.number.parse-int');
require('./modules/es6.math.acosh');
require('./modules/es6.math.asinh');
require('./modules/es6.math.atanh');
require('./modules/es6.math.cbrt');
require('./modules/es6.math.clz32');
require('./modules/es6.math.cosh');
require('./modules/es6.math.expm1');
require('./modules/es6.math.fround');
require('./modules/es6.math.hypot');
require('./modules/es6.math.imul');
require('./modules/es6.math.log10');
require('./modules/es6.math.log1p');
require('./modules/es6.math.log2');
require('./modules/es6.math.sign');
require('./modules/es6.math.sinh');
require('./modules/es6.math.tanh');
require('./modules/es6.math.trunc');
require('./modules/es6.string.from-code-point');
require('./modules/es6.string.raw');
require('./modules/es6.string.trim');
require('./modules/es6.string.iterator');
require('./modules/es6.string.code-point-at');
require('./modules/es6.string.ends-with');
require('./modules/es6.string.includes');
require('./modules/es6.string.repeat');
require('./modules/es6.string.starts-with');
require('./modules/es6.string.anchor');
require('./modules/es6.string.big');
require('./modules/es6.string.blink');
require('./modules/es6.string.bold');
require('./modules/es6.string.fixed');
require('./modules/es6.string.fontcolor');
require('./modules/es6.string.fontsize');
require('./modules/es6.string.italics');
require('./modules/es6.string.link');
require('./modules/es6.string.small');
require('./modules/es6.string.strike');
require('./modules/es6.string.sub');
require('./modules/es6.string.sup');
require('./modules/es6.date.now');
require('./modules/es6.date.to-json');
require('./modules/es6.date.to-iso-string');
require('./modules/es6.date.to-string');
require('./modules/es6.date.to-primitive');
require('./modules/es6.array.is-array');
require('./modules/es6.array.from');
require('./modules/es6.array.of');
require('./modules/es6.array.join');
require('./modules/es6.array.slice');
require('./modules/es6.array.sort');
require('./modules/es6.array.for-each');
require('./modules/es6.array.map');
require('./modules/es6.array.filter');
require('./modules/es6.array.some');
require('./modules/es6.array.every');
require('./modules/es6.array.reduce');
require('./modules/es6.array.reduce-right');
require('./modules/es6.array.index-of');
require('./modules/es6.array.last-index-of');
require('./modules/es6.array.copy-within');
require('./modules/es6.array.fill');
require('./modules/es6.array.find');
require('./modules/es6.array.find-index');
require('./modules/es6.array.species');
require('./modules/es6.array.iterator');
require('./modules/es6.regexp.constructor');
require('./modules/es6.regexp.exec');
require('./modules/es6.regexp.to-string');
require('./modules/es6.regexp.flags');
require('./modules/es6.regexp.match');
require('./modules/es6.regexp.replace');
require('./modules/es6.regexp.search');
require('./modules/es6.regexp.split');
require('./modules/es6.promise');
require('./modules/es6.map');
require('./modules/es6.set');
require('./modules/es6.weak-map');
require('./modules/es6.weak-set');
require('./modules/es6.typed.array-buffer');
require('./modules/es6.typed.data-view');
require('./modules/es6.typed.int8-array');
require('./modules/es6.typed.uint8-array');
require('./modules/es6.typed.uint8-clamped-array');
require('./modules/es6.typed.int16-array');
require('./modules/es6.typed.uint16-array');
require('./modules/es6.typed.int32-array');
require('./modules/es6.typed.uint32-array');
require('./modules/es6.typed.float32-array');
require('./modules/es6.typed.float64-array');
require('./modules/es6.reflect.apply');
require('./modules/es6.reflect.construct');
require('./modules/es6.reflect.define-property');
require('./modules/es6.reflect.delete-property');
require('./modules/es6.reflect.enumerate');
require('./modules/es6.reflect.get');
require('./modules/es6.reflect.get-own-property-descriptor');
require('./modules/es6.reflect.get-prototype-of');
require('./modules/es6.reflect.has');
require('./modules/es6.reflect.is-extensible');
require('./modules/es6.reflect.own-keys');
require('./modules/es6.reflect.prevent-extensions');
require('./modules/es6.reflect.set');
require('./modules/es6.reflect.set-prototype-of');
require('./modules/es7.array.includes');
require('./modules/es7.array.flat-map');
require('./modules/es7.array.flatten');
require('./modules/es7.string.at');
require('./modules/es7.string.pad-start');
require('./modules/es7.string.pad-end');
require('./modules/es7.string.trim-left');
require('./modules/es7.string.trim-right');
require('./modules/es7.string.match-all');
require('./modules/es7.symbol.async-iterator');
require('./modules/es7.symbol.observable');
require('./modules/es7.object.get-own-property-descriptors');
require('./modules/es7.object.values');
require('./modules/es7.object.entries');
require('./modules/es7.object.define-getter');
require('./modules/es7.object.define-setter');
require('./modules/es7.object.lookup-getter');
require('./modules/es7.object.lookup-setter');
require('./modules/es7.map.to-json');
require('./modules/es7.set.to-json');
require('./modules/es7.map.of');
require('./modules/es7.set.of');
require('./modules/es7.weak-map.of');
require('./modules/es7.weak-set.of');
require('./modules/es7.map.from');
require('./modules/es7.set.from');
require('./modules/es7.weak-map.from');
require('./modules/es7.weak-set.from');
require('./modules/es7.global');
require('./modules/es7.system.global');
require('./modules/es7.error.is-error');
require('./modules/es7.math.clamp');
require('./modules/es7.math.deg-per-rad');
require('./modules/es7.math.degrees');
require('./modules/es7.math.fscale');
require('./modules/es7.math.iaddh');
require('./modules/es7.math.isubh');
require('./modules/es7.math.imulh');
require('./modules/es7.math.rad-per-deg');
require('./modules/es7.math.radians');
require('./modules/es7.math.scale');
require('./modules/es7.math.umulh');
require('./modules/es7.math.signbit');
require('./modules/es7.promise.finally');
require('./modules/es7.promise.try');
require('./modules/es7.reflect.define-metadata');
require('./modules/es7.reflect.delete-metadata');
require('./modules/es7.reflect.get-metadata');
require('./modules/es7.reflect.get-metadata-keys');
require('./modules/es7.reflect.get-own-metadata');
require('./modules/es7.reflect.get-own-metadata-keys');
require('./modules/es7.reflect.has-metadata');
require('./modules/es7.reflect.has-own-metadata');
require('./modules/es7.reflect.metadata');
require('./modules/es7.asap');
require('./modules/es7.observable');
require('./modules/web.timers');
require('./modules/web.immediate');
require('./modules/web.dom.iterable');
module.exports = require('./modules/_core');

},{"./modules/es6.symbol":"node_modules/core-js/modules/es6.symbol.js","./modules/es6.object.create":"node_modules/core-js/modules/es6.object.create.js","./modules/es6.object.define-property":"node_modules/core-js/modules/es6.object.define-property.js","./modules/es6.object.define-properties":"node_modules/core-js/modules/es6.object.define-properties.js","./modules/es6.object.get-own-property-descriptor":"node_modules/core-js/modules/es6.object.get-own-property-descriptor.js","./modules/es6.object.get-prototype-of":"node_modules/core-js/modules/es6.object.get-prototype-of.js","./modules/es6.object.keys":"node_modules/core-js/modules/es6.object.keys.js","./modules/es6.object.get-own-property-names":"node_modules/core-js/modules/es6.object.get-own-property-names.js","./modules/es6.object.freeze":"node_modules/core-js/modules/es6.object.freeze.js","./modules/es6.object.seal":"node_modules/core-js/modules/es6.object.seal.js","./modules/es6.object.prevent-extensions":"node_modules/core-js/modules/es6.object.prevent-extensions.js","./modules/es6.object.is-frozen":"node_modules/core-js/modules/es6.object.is-frozen.js","./modules/es6.object.is-sealed":"node_modules/core-js/modules/es6.object.is-sealed.js","./modules/es6.object.is-extensible":"node_modules/core-js/modules/es6.object.is-extensible.js","./modules/es6.object.assign":"node_modules/core-js/modules/es6.object.assign.js","./modules/es6.object.is":"node_modules/core-js/modules/es6.object.is.js","./modules/es6.object.set-prototype-of":"node_modules/core-js/modules/es6.object.set-prototype-of.js","./modules/es6.object.to-string":"node_modules/core-js/modules/es6.object.to-string.js","./modules/es6.function.bind":"node_modules/core-js/modules/es6.function.bind.js","./modules/es6.function.name":"node_modules/core-js/modules/es6.function.name.js","./modules/es6.function.has-instance":"node_modules/core-js/modules/es6.function.has-instance.js","./modules/es6.parse-int":"node_modules/core-js/modules/es6.parse-int.js","./modules/es6.parse-float":"node_modules/core-js/modules/es6.parse-float.js","./modules/es6.number.constructor":"node_modules/core-js/modules/es6.number.constructor.js","./modules/es6.number.to-fixed":"node_modules/core-js/modules/es6.number.to-fixed.js","./modules/es6.number.to-precision":"node_modules/core-js/modules/es6.number.to-precision.js","./modules/es6.number.epsilon":"node_modules/core-js/modules/es6.number.epsilon.js","./modules/es6.number.is-finite":"node_modules/core-js/modules/es6.number.is-finite.js","./modules/es6.number.is-integer":"node_modules/core-js/modules/es6.number.is-integer.js","./modules/es6.number.is-nan":"node_modules/core-js/modules/es6.number.is-nan.js","./modules/es6.number.is-safe-integer":"node_modules/core-js/modules/es6.number.is-safe-integer.js","./modules/es6.number.max-safe-integer":"node_modules/core-js/modules/es6.number.max-safe-integer.js","./modules/es6.number.min-safe-integer":"node_modules/core-js/modules/es6.number.min-safe-integer.js","./modules/es6.number.parse-float":"node_modules/core-js/modules/es6.number.parse-float.js","./modules/es6.number.parse-int":"node_modules/core-js/modules/es6.number.parse-int.js","./modules/es6.math.acosh":"node_modules/core-js/modules/es6.math.acosh.js","./modules/es6.math.asinh":"node_modules/core-js/modules/es6.math.asinh.js","./modules/es6.math.atanh":"node_modules/core-js/modules/es6.math.atanh.js","./modules/es6.math.cbrt":"node_modules/core-js/modules/es6.math.cbrt.js","./modules/es6.math.clz32":"node_modules/core-js/modules/es6.math.clz32.js","./modules/es6.math.cosh":"node_modules/core-js/modules/es6.math.cosh.js","./modules/es6.math.expm1":"node_modules/core-js/modules/es6.math.expm1.js","./modules/es6.math.fround":"node_modules/core-js/modules/es6.math.fround.js","./modules/es6.math.hypot":"node_modules/core-js/modules/es6.math.hypot.js","./modules/es6.math.imul":"node_modules/core-js/modules/es6.math.imul.js","./modules/es6.math.log10":"node_modules/core-js/modules/es6.math.log10.js","./modules/es6.math.log1p":"node_modules/core-js/modules/es6.math.log1p.js","./modules/es6.math.log2":"node_modules/core-js/modules/es6.math.log2.js","./modules/es6.math.sign":"node_modules/core-js/modules/es6.math.sign.js","./modules/es6.math.sinh":"node_modules/core-js/modules/es6.math.sinh.js","./modules/es6.math.tanh":"node_modules/core-js/modules/es6.math.tanh.js","./modules/es6.math.trunc":"node_modules/core-js/modules/es6.math.trunc.js","./modules/es6.string.from-code-point":"node_modules/core-js/modules/es6.string.from-code-point.js","./modules/es6.string.raw":"node_modules/core-js/modules/es6.string.raw.js","./modules/es6.string.trim":"node_modules/core-js/modules/es6.string.trim.js","./modules/es6.string.iterator":"node_modules/core-js/modules/es6.string.iterator.js","./modules/es6.string.code-point-at":"node_modules/core-js/modules/es6.string.code-point-at.js","./modules/es6.string.ends-with":"node_modules/core-js/modules/es6.string.ends-with.js","./modules/es6.string.includes":"node_modules/core-js/modules/es6.string.includes.js","./modules/es6.string.repeat":"node_modules/core-js/modules/es6.string.repeat.js","./modules/es6.string.starts-with":"node_modules/core-js/modules/es6.string.starts-with.js","./modules/es6.string.anchor":"node_modules/core-js/modules/es6.string.anchor.js","./modules/es6.string.big":"node_modules/core-js/modules/es6.string.big.js","./modules/es6.string.blink":"node_modules/core-js/modules/es6.string.blink.js","./modules/es6.string.bold":"node_modules/core-js/modules/es6.string.bold.js","./modules/es6.string.fixed":"node_modules/core-js/modules/es6.string.fixed.js","./modules/es6.string.fontcolor":"node_modules/core-js/modules/es6.string.fontcolor.js","./modules/es6.string.fontsize":"node_modules/core-js/modules/es6.string.fontsize.js","./modules/es6.string.italics":"node_modules/core-js/modules/es6.string.italics.js","./modules/es6.string.link":"node_modules/core-js/modules/es6.string.link.js","./modules/es6.string.small":"node_modules/core-js/modules/es6.string.small.js","./modules/es6.string.strike":"node_modules/core-js/modules/es6.string.strike.js","./modules/es6.string.sub":"node_modules/core-js/modules/es6.string.sub.js","./modules/es6.string.sup":"node_modules/core-js/modules/es6.string.sup.js","./modules/es6.date.now":"node_modules/core-js/modules/es6.date.now.js","./modules/es6.date.to-json":"node_modules/core-js/modules/es6.date.to-json.js","./modules/es6.date.to-iso-string":"node_modules/core-js/modules/es6.date.to-iso-string.js","./modules/es6.date.to-string":"node_modules/core-js/modules/es6.date.to-string.js","./modules/es6.date.to-primitive":"node_modules/core-js/modules/es6.date.to-primitive.js","./modules/es6.array.is-array":"node_modules/core-js/modules/es6.array.is-array.js","./modules/es6.array.from":"node_modules/core-js/modules/es6.array.from.js","./modules/es6.array.of":"node_modules/core-js/modules/es6.array.of.js","./modules/es6.array.join":"node_modules/core-js/modules/es6.array.join.js","./modules/es6.array.slice":"node_modules/core-js/modules/es6.array.slice.js","./modules/es6.array.sort":"node_modules/core-js/modules/es6.array.sort.js","./modules/es6.array.for-each":"node_modules/core-js/modules/es6.array.for-each.js","./modules/es6.array.map":"node_modules/core-js/modules/es6.array.map.js","./modules/es6.array.filter":"node_modules/core-js/modules/es6.array.filter.js","./modules/es6.array.some":"node_modules/core-js/modules/es6.array.some.js","./modules/es6.array.every":"node_modules/core-js/modules/es6.array.every.js","./modules/es6.array.reduce":"node_modules/core-js/modules/es6.array.reduce.js","./modules/es6.array.reduce-right":"node_modules/core-js/modules/es6.array.reduce-right.js","./modules/es6.array.index-of":"node_modules/core-js/modules/es6.array.index-of.js","./modules/es6.array.last-index-of":"node_modules/core-js/modules/es6.array.last-index-of.js","./modules/es6.array.copy-within":"node_modules/core-js/modules/es6.array.copy-within.js","./modules/es6.array.fill":"node_modules/core-js/modules/es6.array.fill.js","./modules/es6.array.find":"node_modules/core-js/modules/es6.array.find.js","./modules/es6.array.find-index":"node_modules/core-js/modules/es6.array.find-index.js","./modules/es6.array.species":"node_modules/core-js/modules/es6.array.species.js","./modules/es6.array.iterator":"node_modules/core-js/modules/es6.array.iterator.js","./modules/es6.regexp.constructor":"node_modules/core-js/modules/es6.regexp.constructor.js","./modules/es6.regexp.exec":"node_modules/core-js/modules/es6.regexp.exec.js","./modules/es6.regexp.to-string":"node_modules/core-js/modules/es6.regexp.to-string.js","./modules/es6.regexp.flags":"node_modules/core-js/modules/es6.regexp.flags.js","./modules/es6.regexp.match":"node_modules/core-js/modules/es6.regexp.match.js","./modules/es6.regexp.replace":"node_modules/core-js/modules/es6.regexp.replace.js","./modules/es6.regexp.search":"node_modules/core-js/modules/es6.regexp.search.js","./modules/es6.regexp.split":"node_modules/core-js/modules/es6.regexp.split.js","./modules/es6.promise":"node_modules/core-js/modules/es6.promise.js","./modules/es6.map":"node_modules/core-js/modules/es6.map.js","./modules/es6.set":"node_modules/core-js/modules/es6.set.js","./modules/es6.weak-map":"node_modules/core-js/modules/es6.weak-map.js","./modules/es6.weak-set":"node_modules/core-js/modules/es6.weak-set.js","./modules/es6.typed.array-buffer":"node_modules/core-js/modules/es6.typed.array-buffer.js","./modules/es6.typed.data-view":"node_modules/core-js/modules/es6.typed.data-view.js","./modules/es6.typed.int8-array":"node_modules/core-js/modules/es6.typed.int8-array.js","./modules/es6.typed.uint8-array":"node_modules/core-js/modules/es6.typed.uint8-array.js","./modules/es6.typed.uint8-clamped-array":"node_modules/core-js/modules/es6.typed.uint8-clamped-array.js","./modules/es6.typed.int16-array":"node_modules/core-js/modules/es6.typed.int16-array.js","./modules/es6.typed.uint16-array":"node_modules/core-js/modules/es6.typed.uint16-array.js","./modules/es6.typed.int32-array":"node_modules/core-js/modules/es6.typed.int32-array.js","./modules/es6.typed.uint32-array":"node_modules/core-js/modules/es6.typed.uint32-array.js","./modules/es6.typed.float32-array":"node_modules/core-js/modules/es6.typed.float32-array.js","./modules/es6.typed.float64-array":"node_modules/core-js/modules/es6.typed.float64-array.js","./modules/es6.reflect.apply":"node_modules/core-js/modules/es6.reflect.apply.js","./modules/es6.reflect.construct":"node_modules/core-js/modules/es6.reflect.construct.js","./modules/es6.reflect.define-property":"node_modules/core-js/modules/es6.reflect.define-property.js","./modules/es6.reflect.delete-property":"node_modules/core-js/modules/es6.reflect.delete-property.js","./modules/es6.reflect.enumerate":"node_modules/core-js/modules/es6.reflect.enumerate.js","./modules/es6.reflect.get":"node_modules/core-js/modules/es6.reflect.get.js","./modules/es6.reflect.get-own-property-descriptor":"node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js","./modules/es6.reflect.get-prototype-of":"node_modules/core-js/modules/es6.reflect.get-prototype-of.js","./modules/es6.reflect.has":"node_modules/core-js/modules/es6.reflect.has.js","./modules/es6.reflect.is-extensible":"node_modules/core-js/modules/es6.reflect.is-extensible.js","./modules/es6.reflect.own-keys":"node_modules/core-js/modules/es6.reflect.own-keys.js","./modules/es6.reflect.prevent-extensions":"node_modules/core-js/modules/es6.reflect.prevent-extensions.js","./modules/es6.reflect.set":"node_modules/core-js/modules/es6.reflect.set.js","./modules/es6.reflect.set-prototype-of":"node_modules/core-js/modules/es6.reflect.set-prototype-of.js","./modules/es7.array.includes":"node_modules/core-js/modules/es7.array.includes.js","./modules/es7.array.flat-map":"node_modules/core-js/modules/es7.array.flat-map.js","./modules/es7.array.flatten":"node_modules/core-js/modules/es7.array.flatten.js","./modules/es7.string.at":"node_modules/core-js/modules/es7.string.at.js","./modules/es7.string.pad-start":"node_modules/core-js/modules/es7.string.pad-start.js","./modules/es7.string.pad-end":"node_modules/core-js/modules/es7.string.pad-end.js","./modules/es7.string.trim-left":"node_modules/core-js/modules/es7.string.trim-left.js","./modules/es7.string.trim-right":"node_modules/core-js/modules/es7.string.trim-right.js","./modules/es7.string.match-all":"node_modules/core-js/modules/es7.string.match-all.js","./modules/es7.symbol.async-iterator":"node_modules/core-js/modules/es7.symbol.async-iterator.js","./modules/es7.symbol.observable":"node_modules/core-js/modules/es7.symbol.observable.js","./modules/es7.object.get-own-property-descriptors":"node_modules/core-js/modules/es7.object.get-own-property-descriptors.js","./modules/es7.object.values":"node_modules/core-js/modules/es7.object.values.js","./modules/es7.object.entries":"node_modules/core-js/modules/es7.object.entries.js","./modules/es7.object.define-getter":"node_modules/core-js/modules/es7.object.define-getter.js","./modules/es7.object.define-setter":"node_modules/core-js/modules/es7.object.define-setter.js","./modules/es7.object.lookup-getter":"node_modules/core-js/modules/es7.object.lookup-getter.js","./modules/es7.object.lookup-setter":"node_modules/core-js/modules/es7.object.lookup-setter.js","./modules/es7.map.to-json":"node_modules/core-js/modules/es7.map.to-json.js","./modules/es7.set.to-json":"node_modules/core-js/modules/es7.set.to-json.js","./modules/es7.map.of":"node_modules/core-js/modules/es7.map.of.js","./modules/es7.set.of":"node_modules/core-js/modules/es7.set.of.js","./modules/es7.weak-map.of":"node_modules/core-js/modules/es7.weak-map.of.js","./modules/es7.weak-set.of":"node_modules/core-js/modules/es7.weak-set.of.js","./modules/es7.map.from":"node_modules/core-js/modules/es7.map.from.js","./modules/es7.set.from":"node_modules/core-js/modules/es7.set.from.js","./modules/es7.weak-map.from":"node_modules/core-js/modules/es7.weak-map.from.js","./modules/es7.weak-set.from":"node_modules/core-js/modules/es7.weak-set.from.js","./modules/es7.global":"node_modules/core-js/modules/es7.global.js","./modules/es7.system.global":"node_modules/core-js/modules/es7.system.global.js","./modules/es7.error.is-error":"node_modules/core-js/modules/es7.error.is-error.js","./modules/es7.math.clamp":"node_modules/core-js/modules/es7.math.clamp.js","./modules/es7.math.deg-per-rad":"node_modules/core-js/modules/es7.math.deg-per-rad.js","./modules/es7.math.degrees":"node_modules/core-js/modules/es7.math.degrees.js","./modules/es7.math.fscale":"node_modules/core-js/modules/es7.math.fscale.js","./modules/es7.math.iaddh":"node_modules/core-js/modules/es7.math.iaddh.js","./modules/es7.math.isubh":"node_modules/core-js/modules/es7.math.isubh.js","./modules/es7.math.imulh":"node_modules/core-js/modules/es7.math.imulh.js","./modules/es7.math.rad-per-deg":"node_modules/core-js/modules/es7.math.rad-per-deg.js","./modules/es7.math.radians":"node_modules/core-js/modules/es7.math.radians.js","./modules/es7.math.scale":"node_modules/core-js/modules/es7.math.scale.js","./modules/es7.math.umulh":"node_modules/core-js/modules/es7.math.umulh.js","./modules/es7.math.signbit":"node_modules/core-js/modules/es7.math.signbit.js","./modules/es7.promise.finally":"node_modules/core-js/modules/es7.promise.finally.js","./modules/es7.promise.try":"node_modules/core-js/modules/es7.promise.try.js","./modules/es7.reflect.define-metadata":"node_modules/core-js/modules/es7.reflect.define-metadata.js","./modules/es7.reflect.delete-metadata":"node_modules/core-js/modules/es7.reflect.delete-metadata.js","./modules/es7.reflect.get-metadata":"node_modules/core-js/modules/es7.reflect.get-metadata.js","./modules/es7.reflect.get-metadata-keys":"node_modules/core-js/modules/es7.reflect.get-metadata-keys.js","./modules/es7.reflect.get-own-metadata":"node_modules/core-js/modules/es7.reflect.get-own-metadata.js","./modules/es7.reflect.get-own-metadata-keys":"node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js","./modules/es7.reflect.has-metadata":"node_modules/core-js/modules/es7.reflect.has-metadata.js","./modules/es7.reflect.has-own-metadata":"node_modules/core-js/modules/es7.reflect.has-own-metadata.js","./modules/es7.reflect.metadata":"node_modules/core-js/modules/es7.reflect.metadata.js","./modules/es7.asap":"node_modules/core-js/modules/es7.asap.js","./modules/es7.observable":"node_modules/core-js/modules/es7.observable.js","./modules/web.timers":"node_modules/core-js/modules/web.timers.js","./modules/web.immediate":"node_modules/core-js/modules/web.immediate.js","./modules/web.dom.iterable":"node_modules/core-js/modules/web.dom.iterable.js","./modules/_core":"node_modules/core-js/modules/_core.js"}],"node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

},{}],"node_modules/core-js/modules/_replacer.js":[function(require,module,exports) {
module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};

},{}],"node_modules/core-js/modules/core.regexp.escape.js":[function(require,module,exports) {
// https://github.com/benjamingr/RexExp.escape
var $export = require('./_export');
var $re = require('./_replacer')(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });

},{"./_export":"node_modules/core-js/modules/_export.js","./_replacer":"node_modules/core-js/modules/_replacer.js"}],"node_modules/core-js/fn/regexp/escape.js":[function(require,module,exports) {
require('../../modules/core.regexp.escape');
module.exports = require('../../modules/_core').RegExp.escape;

},{"../../modules/core.regexp.escape":"node_modules/core-js/modules/core.regexp.escape.js","../../modules/_core":"node_modules/core-js/modules/_core.js"}],"node_modules/babel-polyfill/lib/index.js":[function(require,module,exports) {
var global = arguments[3];

"use strict";

require("core-js/shim");

require("regenerator-runtime/runtime");

require("core-js/fn/regexp/escape");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
},{"core-js/shim":"node_modules/core-js/shim.js","regenerator-runtime/runtime":"node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js","core-js/fn/regexp/escape":"node_modules/core-js/fn/regexp/escape.js"}],"src/require-babel-polyfill.js":[function(require,module,exports) {
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
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/styles/giving-array.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "askarray__header": "askarray__header__6ItDR",
  "gift-choice": "gift-choice__1Kxhd",
  "askarray": "askarray__1tdrR",
  "askarray--other": "askarray--other__2mbag",
  "askarray__tabs--other": "askarray__tabs--other__6uCeG",
  "askarray__tabs": "askarray__tabs__hadRL",
  "askbutton": "askbutton__3K46_",
  "askbutton__tabs": "askbutton__tabs__1_cOw",
  "askbutton__amt": "askbutton__amt__3_6p2",
  "askbutton__amt--tabs": "askbutton__amt--tabs__3z7Fh",
  "selected": "selected__3lVba",
  "askarray__form-group": "askarray__form-group__2CruR",
  "askarray__form-group--other": "askarray__form-group--other__2gNu9",
  "askarray__form-group--tabs": "askarray__form-group--tabs__braV8",
  "form-group__other-input": "form-group__other-input__3eYLR",
  "form-group-tabs__other-input": "form-group-tabs__other-input__2pFMd",
  "form-group-tabs--dollar": "form-group-tabs--dollar__3cuSs",
  "form-group__other-input--label": "form-group__other-input--label__2Qrbr",
  "form-group-tabs__other-input--label": "form-group-tabs__other-input--label__22V-r",
  "OtherGiftAmount": "OtherGiftAmount__2VX6n",
  "OtherAmount": "OtherAmount__2VlIH",
  "error": "error__2C-Jl",
  "other-amt-error": "other-amt-error__24VKJ",
  "amount-error": "amount-error__3A2yL",
  "submit-error": "submit-error__1Vx3y"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/styles/radio.module.css":[function(require,module,exports) {
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
},{"react":"node_modules/react/index.js","./styles/flex.module.css":"src/Components/styles/flex.module.css","./styles/radio.module.css":"src/Components/styles/radio.module.css"}],"src/Components/styles/ccinfo.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "monthlyGivingDay": "monthlyGivingDay__25iZt",
  "ccDayOfMonth": "ccDayOfMonth__1p68o",
  "ccdate": "ccdate__2v2UI",
  "hidden": "hidden__2QP7z"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/CCInfo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ccinfoModule = _interopRequireDefault(require("./styles/ccinfo.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

if (module.hot) {
  module.hot.accept("./styles/ccinfo.module.css", function () {
    require("./styles/ccinfo.module.css");
  });
}

function CCInfo(_ref) {
  var handleInputChange = _ref.handleInputChange,
      Monthlypledgeday = _ref.Monthlypledgeday;
  var options = [];

  for (var i = 2; i <= 28; i++) {
    options.push(_react.default.createElement("option", {
      key: "date-option-" + i,
      value: i
    }, i));
  }

  return _react.default.createElement("div", {
    className: "monthlyGivingDay__25iZt"
  }, _react.default.createElement("h5", {
    className: "ccDayOfMonth__1p68o"
  }, "Charge automatically on day\xA0", _react.default.createElement("label", {
    htmlFor: "Monthlypledgeday",
    className: "hidden__2QP7z"
  }, "Select Date"), _react.default.createElement("select", {
    className: "ccdate__2v2UI",
    name: "Monthlypledgeday",
    onChange: handleInputChange,
    value: Monthlypledgeday
  }, options), "\xA0each month."));
}

var _default = CCInfo;
exports.default = _default;
},{"react":"node_modules/react/index.js","./styles/ccinfo.module.css":"src/Components/styles/ccinfo.module.css"}],"src/Components/styles/monthly-radio.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "monthly-radio": "monthly-radio__o1E-N",
  "form-header": "form-header__gkJCU"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/MonthlyRadioGroup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _RadioButton = _interopRequireDefault(require("./RadioButton"));

var _CCInfo = _interopRequireDefault(require("./CCInfo"));

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
  })), monthlyChecked && _react.default.createElement(_CCInfo.default, {
    handleInputChange: handleInputChange,
    Monthlypledgeday: Monthlypledgeday
  }));
}

var _default = MonthlyRadioGroup;
exports.default = _default;
},{"react":"node_modules/react/index.js","./RadioButton":"src/Components/RadioButton.js","./CCInfo":"src/Components/CCInfo.js","./styles/monthly-radio.module.css":"src/Components/styles/monthly-radio.module.css","./styles/flex.module.css":"src/Components/styles/flex.module.css"}],"src/Components/styles/tab.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "tab-group": "tab-group__1pThZ",
  "tab-group__input": "tab-group__input__1bjdY"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/Tab.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _flexModule = _interopRequireDefault(require("./styles/flex.module.css"));

var _tabModule = _interopRequireDefault(require("./styles/tab.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (module.hot) {
  module.hot.accept("./styles/tab.module.css", function () {
    require("./styles/tab.module.css");
  });
}

if (module.hot) {
  module.hot.accept("./styles/flex.module.css", function () {
    require("./styles/flex.module.css");
  });
}

function Tab(_ref) {
  var id = _ref.id,
      name = _ref.name,
      checked = _ref.checked,
      handleTabClick = _ref.handleTabClick,
      label = _ref.label;
  return _react.default.createElement("div", {
    id: "".concat(id, "-group"),
    className: "flex__ayltN flex-row__16BBq flex-center__1HhTj flex-axes-center__33a6C tab-group__1pThZ"
  }, _react.default.createElement("input", {
    className: "tab-group__input__1bjdY",
    name: name,
    id: "".concat(id, "gift"),
    type: "checkbox",
    checked: checked,
    onChange: handleTabClick
  }), _react.default.createElement("label", {
    htmlFor: "".concat(id, "gift")
  }, label));
}

var _default = Tab;
exports.default = _default;
},{"react":"node_modules/react/index.js","./styles/flex.module.css":"src/Components/styles/flex.module.css","./styles/tab.module.css":"src/Components/styles/tab.module.css"}],"src/Components/Divider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Divider(_ref) {
  var color = _ref.color;
  return _react.default.createElement("div", {
    style: {
      background: color,
      flex: "0 0 5px"
    }
  });
}

var _default = Divider;
exports.default = _default;
},{"react":"node_modules/react/index.js"}],"src/Components/styles/monthly-tab.module.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "monthly-tab": "monthly-tab__lApRw"
};
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/MonthlyTabGroup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Tab = _interopRequireDefault(require("./Tab"));

var _Divider = _interopRequireDefault(require("./Divider"));

var _monthlyTabModule = _interopRequireDefault(require("./styles/monthly-tab.module.css"));

var _flexModule = _interopRequireDefault(require("./styles/flex.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (module.hot) {
  module.hot.accept("./styles/flex.module.css", function () {
    require("./styles/flex.module.css");
  });
}

if (module.hot) {
  module.hot.accept("./styles/monthly-tab.module.css", function () {
    require("./styles/monthly-tab.module.css");
  });
}

function MonthlyTabGroup(_ref) {
  var monthlyChecked = _ref.monthlyChecked,
      handleTabClick = _ref.handleTabClick;
  var monthly = monthlyChecked;
  var single = !monthlyChecked;
  return _react.default.createElement("div", {
    id: "MonthlyGivingInfo"
  }, _react.default.createElement("div", {
    className: "flex__ayltN flex-row__16BBq flex-center__1HhTj monthly-tab__lApRw"
  }, _react.default.createElement(_Tab.default, {
    id: "monthly",
    name: "monthly-toggle",
    label: "give monthly",
    checked: monthly,
    handleTabClick: handleTabClick
  }), _react.default.createElement(_Divider.default, {
    color: "transparent"
  }), _react.default.createElement(_Tab.default, {
    id: "single",
    name: "monthly-toggle",
    label: "one time gift",
    checked: single,
    handleTabClick: handleTabClick
  })));
}

var _default = MonthlyTabGroup;
exports.default = _default;
},{"react":"node_modules/react/index.js","./Tab":"src/Components/Tab.js","./Divider":"src/Components/Divider.js","./styles/monthly-tab.module.css":"src/Components/styles/monthly-tab.module.css","./styles/flex.module.css":"src/Components/styles/flex.module.css"}],"src/Components/GivingLayout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getClassName2 = _interopRequireDefault(require("babel-plugin-react-css-modules/dist/browser/getClassName"));

var _react = _interopRequireWildcard(require("react"));

var _flexModule = _interopRequireDefault(require("./styles/flex.module.css"));

var _givingArrayModule = _interopRequireDefault(require("./styles/giving-array.module.css"));

var _MonthlyRadioGroup = _interopRequireDefault(require("./MonthlyRadioGroup"));

var _MonthlyTabGroup = _interopRequireDefault(require("./MonthlyTabGroup"));

var _CCInfo = _interopRequireDefault(require("./CCInfo"));

var _Divider = _interopRequireDefault(require("./Divider"));

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
    "askarray__header": "askarray__header__6ItDR",
    "gift-choice": "gift-choice__1Kxhd",
    "askarray": "askarray__1tdrR",
    "askarray--other": "askarray--other__2mbag",
    "askarray__tabs--other": "askarray__tabs--other__6uCeG",
    "askarray__tabs": "askarray__tabs__hadRL",
    "askbutton": "askbutton__3K46_",
    "askbutton__tabs": "askbutton__tabs__1_cOw",
    "askbutton__amt": "askbutton__amt__3_6p2",
    "askbutton__amt--tabs": "askbutton__amt--tabs__3z7Fh",
    "selected": "selected__3lVba",
    "askarray__form-group": "askarray__form-group__2CruR",
    "askarray__form-group--other": "askarray__form-group--other__2gNu9",
    "askarray__form-group--tabs": "askarray__form-group--tabs__braV8",
    "form-group__other-input": "form-group__other-input__3eYLR",
    "form-group-tabs__other-input": "form-group-tabs__other-input__2pFMd",
    "form-group-tabs--dollar": "form-group-tabs--dollar__3cuSs",
    "form-group__other-input--label": "form-group__other-input--label__2Qrbr",
    "form-group-tabs__other-input--label": "form-group-tabs__other-input--label__22V-r",
    "OtherGiftAmount": "OtherGiftAmount__2VX6n",
    "OtherAmount": "OtherAmount__2VlIH",
    "error": "error__2C-Jl",
    "other-amt-error": "other-amt-error__24VKJ",
    "amount-error": "amount-error__3A2yL",
    "submit-error": "submit-error__1Vx3y"
  }
};

if (module.hot) {
  module.hot.accept("./styles/giving-array.module.css", function () {
    require("./styles/giving-array.module.css");
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

var GivingLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(GivingLayout, _Component);

  function GivingLayout(props) {
    var _this;

    _classCallCheck(this, GivingLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GivingLayout).call(this, props));
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

  _createClass(GivingLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          defaultAmount = _this$props.defaultAmount,
          defaultOption = _this$props.defaultOption,
          _this$props$givingOpt = _this$props.givingOptions,
          monthlyAmounts = _this$props$givingOpt.monthlyAmounts,
          singleAmounts = _this$props$givingOpt.singleAmounts,
          monthlyOption = _this$props$givingOpt.monthlyOption;
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
    value: function renderArray(amounts, selectedIndex, type) {
      var _this2 = this;

      return amounts.map(function (amount, i) {
        return _react.default.createElement("div", {
          key: "array".concat(i),
          onClick: function onClick() {
            return _this2.addToCart(amount, i);
          },
          className: (0, _getClassName2.default)("styles.askbutton".concat(type == "tabs" ? "__tabs" : "", " flex.flex flex.flex-center flex.flex-axes-center ").concat(selectedIndex == i ? "styles.selected" : ""), _styleModuleImportMap, {
            "handleMissingStyleName": "warn"
          })
        }, _react.default.createElement("div", {
          className: (0, _getClassName2.default)("styles.askbutton__amt".concat(type == "tabs" ? "--tabs" : " flex.flex-no-grow", " flex.flex flex.flex-center flex.flex-axes-center"), _styleModuleImportMap, {
            "handleMissingStyleName": "warn"
          })
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
              _this3$props$givingOp = _this3$props.givingOptions,
              monthlyPledgeData = _this3$props$givingOp.monthlyPledgeData,
              singlePledgeData = _this3$props$givingOp.singlePledgeData;

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
          givingFormat = _this$props2.givingFormat,
          _this$props2$givingIn = _this$props2.givingInfo,
          amount = _this$props2$givingIn.amount,
          isMonthly = _this$props2$givingIn.isMonthly,
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

      return givingFormat === "buttons" ? _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
        className: "gift-choice__1Kxhd"
      }, _react.default.createElement("h3", {
        className: "askarray__header__6ItDR"
      }, "Select A ", monthlyChecked ? "Monthly" : "Single", " Donation Amount"), _react.default.createElement("div", {
        id: "AskArray",
        className: "askarray__1tdrR flex__ayltN flex-row__16BBq flex-center__1HhTj flex-wrap__1FN6A"
      }, monthlyOption && monthlyChecked ? this.renderArray(monthlyAmounts, selectedIndex, givingFormat) : null, singleOption && !monthlyChecked ? this.renderArray(singleAmounts, selectedIndex, givingFormat) : null), _react.default.createElement("div", {
        id: "OtherGiftAmount",
        className: "askarray--other__2mbag flex__ayltN flex-row__16BBq flex-center__1HhTj"
      }, _react.default.createElement("div", {
        id: "OtherAmount",
        className: (0, _getClassName2.default)("styles.askarray__form-group--other flex.flex flex.flex-center flex.flex-axes-center".concat(selectedIndex == 99 ? " styles.selected" : ""), _styleModuleImportMap, {
          "handleMissingStyleName": "warn"
        })
      }, _react.default.createElement("label", {
        className: "form-group__other-input--label__2Qrbr",
        htmlFor: "other-amt-input"
      }, "Other Amount"), _react.default.createElement("input", {
        key: key,
        ref: this.otherAmountField,
        className: "form-group__other-input__3eYLR",
        name: "other-amt-input",
        onChange: this.handleOtherAmt,
        value: otherAmount == 0 ? '' : otherAmount,
        onFocus: this.handleFocus
      }), _react.default.createElement("div", {
        className: "error__2C-Jl other-amt-error__24VKJ"
      }, otherAmountError))), _react.default.createElement("div", {
        className: "error__2C-Jl amount-error__3A2yL"
      }, amountError)), monthlyOption && singleOption && _react.default.createElement(_MonthlyRadioGroup.default, {
        Monthlypledgeday: Monthlypledgeday,
        monthlyChecked: monthlyChecked,
        handleInputChange: handleInputChange,
        handleRadioClick: handleRadioClick
      })) : _react.default.createElement(_react.Fragment, null, monthlyOption && singleOption && _react.default.createElement(_MonthlyTabGroup.default, {
        monthlyChecked: monthlyChecked,
        handleTabClick: handleRadioClick
      }), _react.default.createElement("div", {
        id: "AskArray",
        className: "askarray__tabs__hadRL flex__ayltN flex-row__16BBq flex-center__1HhTj flex-wrap__1FN6A"
      }, monthlyOption && monthlyChecked ? this.renderArray(monthlyAmounts, selectedIndex, givingFormat) : null, singleOption && !monthlyChecked ? this.renderArray(singleAmounts, selectedIndex, givingFormat) : null), _react.default.createElement("div", {
        id: "OtherGiftAmount",
        className: "askarray__tabs--other__6uCeG flex__ayltN flex-row__16BBq flex-center__1HhTj flex-axes-center__33a6C"
      }, _react.default.createElement("div", {
        id: "OtherAmount",
        className: (0, _getClassName2.default)("styles.askarray__form-group--tabs flex.flex flex.flex-between flex.flex-axes-center".concat(selectedIndex == 99 ? " styles.selected" : ""), _styleModuleImportMap, {
          "handleMissingStyleName": "warn"
        })
      }, _react.default.createElement("label", {
        className: "form-group-tabs__other-input--label__22V-r",
        htmlFor: "other-amt-input"
      }, "Or specify amount"), _react.default.createElement("div", {
        className: "flex__ayltN flex-row__16BBq flex-left__3xW5i flex-axes-center__33a6C"
      }, _react.default.createElement("div", {
        className: "form-group-tabs--dollar__3cuSs"
      }, "$"), _react.default.createElement("input", {
        key: key,
        ref: this.otherAmountField,
        className: "form-group-tabs__other-input__2pFMd",
        name: "other-amt-input",
        onChange: this.handleOtherAmt,
        value: otherAmount == 0 ? '' : otherAmount,
        onFocus: this.handleFocus
      }), _react.default.createElement("div", {
        className: "error__2C-Jl other-amt-error__24VKJ"
      }, otherAmountError)))), monthlyChecked && _react.default.createElement(_CCInfo.default, {
        handleInputChange: handleInputChange,
        Monthlypledgeday: Monthlypledgeday
      }), _react.default.createElement("div", {
        className: "error__2C-Jl amount-error__3A2yL"
      }, amountError));
    }
  }]);

  return GivingLayout;
}(_react.Component);

var _default = GivingLayout;
exports.default = _default;
},{"babel-plugin-react-css-modules/dist/browser/getClassName":"node_modules/babel-plugin-react-css-modules/dist/browser/getClassName.js","react":"node_modules/react/index.js","./styles/flex.module.css":"src/Components/styles/flex.module.css","./styles/giving-array.module.css":"src/Components/styles/giving-array.module.css","./MonthlyRadioGroup":"src/Components/MonthlyRadioGroup.js","./MonthlyTabGroup":"src/Components/MonthlyTabGroup.js","./CCInfo":"src/Components/CCInfo.js","./Divider":"src/Components/Divider.js"}],"src/Components/styles/products.module.css":[function(require,module,exports) {
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
},{"_css_loader":"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/ProductLayout.js":[function(require,module,exports) {
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

var ProductLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductLayout, _Component);

  function ProductLayout(props) {
    var _this;

    _classCallCheck(this, ProductLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductLayout).call(this, props));
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


  _createClass(ProductLayout, [{
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

  return ProductLayout;
}(_react.Component);

var _default = ProductLayout;
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
},{"babel-plugin-react-css-modules/dist/browser/getClassName":"node_modules/babel-plugin-react-css-modules/dist/browser/getClassName.js","react":"node_modules/react/index.js","./styles/funds.module.css":"src/Components/styles/funds.module.css","./styles/flex.module.css":"src/Components/styles/flex.module.css"}],"src/Components/styles/input.module.css":[function(require,module,exports) {
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

var _react = _interopRequireWildcard(require("react"));

var _GivingLayout = _interopRequireDefault(require("./GivingLayout"));

var _ProductLayout = _interopRequireDefault(require("./ProductLayout"));

var _FundDisplay = _interopRequireDefault(require("./FundDisplay"));

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
            var monthlyDetailName = "MP".concat(fund.DetailName);
            var singleDetailName = "SP".concat(fund.DetailName);
            detailNames.push(monthlyDetailName);
            detailNames.push(singleDetailName);
            fundNames.push(monthlyDetailName);
            fundNames.push(singleDetailName);
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
              isMonthly: isMonthly,
              source: "hydratingForm"
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
            var idx = products ? products.findIndex(function (el) {
              return el.DetailDescription === DetailDescription;
            }) : -1;

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
      var fundInfo = _extends({}, this.state.fundInfo);

      var givingInfo = _extends({}, this.state.givingInfo);

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
        givingInfo.amount = items[found].PledgeAmount;
        givingInfo.isMonthly = id !== 'singlegift';
        givingInfo.source = "radioClick";
      }

      if (fundInfo && fundInfo.DetailName) {
        var detailName = fundInfo.DetailName;
        var prefix = detailName.slice(0, 2);

        if (prefix == "MP" || prefix == "SP") {
          var originalDetailName = detailName.slice(2);
          fundInfo.DetailName = id == "singlegift" ? "SP".concat(originalDetailName) : "MP".concat(originalDetailName);
        } else {
          fundInfo.DetailName = id == "singlegift" ? "SP".concat(detailName) : "MP".concat(detailName);
        } // console.log({fundInfo})

      } // console.log({items})


      if (id == "singlegift") {
        this.setState({
          monthlyChecked: false,
          cart: {
            items: items
          },
          fundInfo: fundInfo,
          givingInfo: givingInfo
        });
      } else {
        this.setState({
          monthlyChecked: true,
          cart: {
            items: items
          },
          fundInfo: fundInfo,
          givingInfo: givingInfo
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

        var items, pledgeFound, addGiftFound, productFound, _errors, errors, isValidForm, zipError, addressError, shipZipError, shipAddressError, fields, fieldNames, i, error, name, Address1, Address2, City, Country, Emailaddress, Firstname, Middlename, Lastname, Spousename, Suffix, State, Title, Zip, ShipToYes, ShipToAddress1, ShipToAddress2, ShipToCity, ShipToState, ShipToZip, ShipToCountry, ShipToName, phone, _this$props2, mode, _this$props2$EmailSub, EmailSubjectLine, APIAccessID, subscriptions, AddContactYN, ActivityName, ContactSource, SectionName, proxy, ClientBrowser, UrlReferer, Phoneareacode, Phoneexchange, Phonenumber, TransactionType, isMonthly, DonationType, IsRecurringCreditCardDonation, Monthlypledgeday, Monthlypledgeamount, Singledonationamount, ShipTo, multipleDonations, MultipleDonations, MotivationText, data, msg, message, _getErrorType, breaking, _name;

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
                _this$props2 = this.props, mode = _this$props2.mode, _this$props2$EmailSub = _this$props2.EmailSubjectLine, EmailSubjectLine = _this$props2$EmailSub === void 0 ? "Thank You for Your Contribution" : _this$props2$EmailSub, APIAccessID = _this$props2.APIAccessID, subscriptions = _this$props2.subscriptions, AddContactYN = _this$props2.AddContactYN, ActivityName = _this$props2.ActivityName, ContactSource = _this$props2.ContactSource, SectionName = _this$props2.SectionName, proxy = _this$props2.proxy;
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
                    } // console.log({DetailName});


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
                  EmailSubjectLine: EmailSubjectLine,
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
        },
        givingInfo: {}
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
          },
          givingInfo: {}
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
      var monthlyChecked = this.state.monthlyChecked;
      var detailName = fundInfo.DetailName;
      fundInfo.DetailName = monthlyChecked ? "MP".concat(detailName) : "SP".concat(detailName); // console.log({fundInfo})

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
                base = this.state.mode == "local" ? "http://Services.cbn.local/AddressValidation/AddressVerification.aspx" : "https://Services.cbn.com/AddressValidation/AddressVerification.aspx";
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
      var _React$createElement;

      var _this$props3 = this.props,
          showGivingArray = _this$props3.showGivingArray,
          givingFormat = _this$props3.givingFormat,
          productFormat = _this$props3.productFormat,
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
      var givingOptions = {
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
      }, showGivingArray && _react.default.createElement("div", {
        className: "form-panel__2bLqQ"
      }, _react.default.createElement(_GivingLayout.default, (_React$createElement = {
        givingFormat: givingFormat,
        defaultAmount: defaultAmount,
        defaultOption: defaultOption,
        givingOptions: givingOptions,
        initialUpdate: initialUpdate,
        monthlyChecked: monthlyChecked,
        addToCart: this.addToCart,
        removeFromCart: this.removeFromCart,
        givingInfo: givingInfo,
        amountError: errors.amount
      }, _defineProperty(_React$createElement, "monthlyChecked", monthlyChecked), _defineProperty(_React$createElement, "Monthlypledgeday", fields.Monthlypledgeday), _defineProperty(_React$createElement, "handleInputChange", this.handleInputChange), _defineProperty(_React$createElement, "handleRadioClick", this.handleRadioClick), _defineProperty(_React$createElement, "monthlyOption", monthlyOption), _defineProperty(_React$createElement, "singleOption", singleOption), _React$createElement))), fundOptions.numFunds > 0 && _react.default.createElement("div", {
        className: "form-panel__2bLqQ"
      }, _react.default.createElement(_FundDisplay.default, {
        fundOptions: fundOptions,
        initialUpdate: initialUpdate,
        updateDonation: this.updateDonation,
        fundInfo: fundInfo,
        hydratedFund: hydratedFund
      })), productOptions.numProducts > 0 && _react.default.createElement("div", {
        className: "form-panel__2bLqQ"
      }, _react.default.createElement(_ProductLayout.default, {
        productFormat: productFormat,
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
},{"react":"node_modules/react/index.js","./GivingLayout":"src/Components/GivingLayout.js","./ProductLayout":"src/Components/ProductLayout.js","./FundDisplay":"src/Components/FundDisplay.js","./NameBlock":"src/Components/NameBlock.js","./ShippingAddressBlock":"src/Components/ShippingAddressBlock.js","./AddressBlock":"src/Components/AddressBlock.js","./FormOptionsBlock":"src/Components/FormOptionsBlock.js","./SubmitButton":"src/Components/SubmitButton.js","./Seals":"src/Components/Seals.js","./styles/flex.module.css":"src/Components/styles/flex.module.css","./styles/name-address-form.module.css":"src/Components/styles/name-address-form.module.css","./helpers/error-types":"src/Components/helpers/error-types.js","./helpers/fetch-helpers":"src/Components/helpers/fetch-helpers.js","./helpers/crypt":"src/Components/helpers/crypt.js"}],"src/Components/styles/spinner.module.css":[function(require,module,exports) {
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
      var _ref2 = e.data && typeof e.data == "string" ? JSON.parse(e.data) : {},
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
          formData = _this$props.formData; // const cacheToken = shortid.generate();

      return _react.default.createElement(_react.Fragment, null, ready ? _react.default.createElement(_PaymentForm.default, {
        cssConfig: cssConfig,
        formAction: formAction,
        formData: formData,
        confirmationSubmitted: confirmationSubmitted
      }) : _react.default.createElement(_Spinner.default, null));
    }
  }]);

  return ConfirmationPage;
}(_react.Component);

var _default = ConfirmationPage;
exports.default = _default;
},{"react":"node_modules/react/index.js","./PaymentForm":"src/Components/PaymentForm.js","./Spinner":"src/Components/Spinner.js","./helpers/fetch-helpers":"src/Components/helpers/fetch-helpers.js"}],"src/Components/RedirectForm.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65324" + '/');

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
var b=require("../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([["react.545e1cc3.js","node_modules/react/index.js"],["fetch.6e6c81fd.js","node_modules/whatwg-fetch/fetch.js"],["secure-ls.0cd04304.js","node_modules/secure-ls/dist/secure-ls.js"],["polyfill.cde8445e.js","node_modules/raf/polyfill.js"],["css-vars-ponyfill.esm.9e0932d1.js","node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js"],["src.7aaf042a.js","node_modules/promise-polyfill/src/index.js"],["react-dom.29872971.js","node_modules/react-dom/index.js"]]).then(function(){require("src/index.js");});
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/src.a2b27638.map