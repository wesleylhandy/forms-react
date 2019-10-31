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
})({"node_modules/react-aria-live/es/modules/MessageBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var offScreenStyle = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  padding: 0,
  width: '1px',
  position: 'absolute'
};

var MessageBlock = function MessageBlock(_ref) {
  var message = _ref.message,
      ariaLive = _ref['aria-live'];
  return _react.default.createElement('div', {
    style: offScreenStyle,
    role: 'log',
    'aria-live': ariaLive
  }, message ? message : '');
};

MessageBlock.propTypes = "development" !== "production" ? {
  message: _propTypes.default.string.isRequired,
  'aria-live': _propTypes.default.string.isRequired
} : {};
var _default = MessageBlock;
exports.default = _default;
},{"prop-types":"node_modules/prop-types/index.js","react":"node_modules/react/index.js"}],"node_modules/react-aria-live/es/modules/Announcer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _MessageBlock = _interopRequireDefault(require("./MessageBlock"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Announcer = function (_Component) {
  _inherits(Announcer, _Component);

  function Announcer() {
    var _temp, _this, _ret;

    _classCallCheck(this, Announcer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      assertiveMessage1: '',
      assertiveMessage2: '',
      politeMessage1: '',
      politeMessage2: '',
      oldPolitemessage: '',
      oldPoliteMessageId: '',
      oldAssertiveMessage: '',
      oldAssertiveMessageId: '',
      setAlternatePolite: false,
      setAlternateAssertive: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Announcer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, state) {
    var oldPolitemessage = state.oldPolitemessage,
        oldPoliteMessageId = state.oldPoliteMessageId,
        oldAssertiveMessage = state.oldAssertiveMessage,
        oldAssertiveMessageId = state.oldAssertiveMessageId;
    var politeMessage = nextProps.politeMessage,
        politeMessageId = nextProps.politeMessageId,
        assertiveMessage = nextProps.assertiveMessage,
        assertiveMessageId = nextProps.assertiveMessageId;

    if (oldPolitemessage !== politeMessage || oldPoliteMessageId !== politeMessageId) {
      return {
        politeMessage1: state.setAlternatePolite ? '' : politeMessage,
        politeMessage2: state.setAlternatePolite ? politeMessage : '',
        oldPolitemessage: politeMessage,
        oldPoliteMessageId: politeMessageId,
        setAlternatePolite: !state.setAlternatePolite
      };
    }

    if (oldAssertiveMessage !== assertiveMessage || oldAssertiveMessageId !== assertiveMessageId) {
      return {
        assertiveMessage1: state.setAlternateAssertive ? '' : assertiveMessage,
        assertiveMessage2: state.setAlternateAssertive ? assertiveMessage : '',
        oldAssertiveMessage: assertiveMessage,
        oldAssertiveMessageId: assertiveMessageId,
        setAlternateAssertive: !state.setAlternateAssertive
      };
    }

    return null;
  };

  Announcer.prototype.render = function render() {
    var _state = this.state,
        assertiveMessage1 = _state.assertiveMessage1,
        assertiveMessage2 = _state.assertiveMessage2,
        politeMessage1 = _state.politeMessage1,
        politeMessage2 = _state.politeMessage2;
    return _react.default.createElement('div', null, _react.default.createElement(_MessageBlock.default, {
      'aria-live': 'assertive',
      message: assertiveMessage1
    }), _react.default.createElement(_MessageBlock.default, {
      'aria-live': 'assertive',
      message: assertiveMessage2
    }), _react.default.createElement(_MessageBlock.default, {
      'aria-live': 'polite',
      message: politeMessage1
    }), _react.default.createElement(_MessageBlock.default, {
      'aria-live': 'polite',
      message: politeMessage2
    }));
  };

  return Announcer;
}(_react.Component);

Announcer.propTypes = "development" !== "production" ? {
  politeMessage: _propTypes.default.string,
  assertiveMessage: _propTypes.default.string
} : {};
var _default = Announcer;
exports.default = _default;
},{"prop-types":"node_modules/prop-types/index.js","react":"node_modules/react/index.js","./MessageBlock":"node_modules/react-aria-live/es/modules/MessageBlock.js"}],"node_modules/react-aria-live/es/modules/AnnouncerContext.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnnouncerContext = _react.default.createContext({
  announceAssertive: logContextWarning,
  announcePolite: logContextWarning
});

function logContextWarning() {
  console.warn('Announcement failed, LiveAnnouncer context is missing');
}

var _default = AnnouncerContext;
exports.default = _default;
},{"react":"node_modules/react/index.js"}],"node_modules/react-aria-live/es/modules/LiveAnnouncer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Announcer = _interopRequireDefault(require("./Announcer"));

var _AnnouncerContext = _interopRequireDefault(require("./AnnouncerContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var LiveAnnouncer = function (_Component) {
  _inherits(LiveAnnouncer, _Component);

  function LiveAnnouncer(props) {
    _classCallCheck(this, LiveAnnouncer);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.announcePolite = function (message, id) {
      _this.setState({
        announcePoliteMessage: message,
        politeMessageId: id ? id : ''
      });
    };

    _this.announceAssertive = function (message, id) {
      _this.setState({
        announceAssertiveMessage: message,
        assertiveMessageId: id ? id : ''
      });
    };

    _this.state = {
      announcePoliteMessage: '',
      politeMessageId: '',
      announceAssertiveMessage: '',
      assertiveMessageId: '',
      updateFunctions: {
        announcePolite: _this.announcePolite,
        announceAssertive: _this.announceAssertive
      }
    };
    return _this;
  }

  LiveAnnouncer.prototype.render = function render() {
    var _state = this.state,
        announcePoliteMessage = _state.announcePoliteMessage,
        politeMessageId = _state.politeMessageId,
        announceAssertiveMessage = _state.announceAssertiveMessage,
        assertiveMessageId = _state.assertiveMessageId,
        updateFunctions = _state.updateFunctions;
    return _react.default.createElement(_AnnouncerContext.default.Provider, {
      value: updateFunctions
    }, this.props.children, _react.default.createElement(_Announcer.default, {
      assertiveMessage: announceAssertiveMessage,
      assertiveMessageId: assertiveMessageId,
      politeMessage: announcePoliteMessage,
      politeMessageId: politeMessageId
    }));
  };

  return LiveAnnouncer;
}(_react.Component);

var _default = LiveAnnouncer;
exports.default = _default;
},{"react":"node_modules/react/index.js","./Announcer":"node_modules/react-aria-live/es/modules/Announcer.js","./AnnouncerContext":"node_modules/react-aria-live/es/modules/AnnouncerContext.js"}],"node_modules/uuid/lib/rng-browser.js":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

},{}],"node_modules/uuid/lib/bytesToUuid.js":[function(require,module,exports) {
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;

},{}],"node_modules/uuid/v4.js":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/rng":"node_modules/uuid/lib/rng-browser.js","./lib/bytesToUuid":"node_modules/uuid/lib/bytesToUuid.js"}],"node_modules/react-aria-live/es/modules/AnnouncerMessage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var AnnouncerMessage = function (_Component) {
  _inherits(AnnouncerMessage, _Component);

  function AnnouncerMessage() {
    var _temp, _this, _ret;

    _classCallCheck(this, AnnouncerMessage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.announce = function () {
      var _this$props = _this.props,
          message = _this$props.message,
          ariaLive = _this$props['aria-live'],
          announceAssertive = _this$props.announceAssertive,
          announcePolite = _this$props.announcePolite;

      if (ariaLive === 'assertive') {
        announceAssertive(message || '', (0, _v.default)());
      }

      if (ariaLive === 'polite') {
        announcePolite(message || '', (0, _v.default)());
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  AnnouncerMessage.prototype.componentDidMount = function componentDidMount() {
    this.announce();
  };

  AnnouncerMessage.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var message = this.props.message;

    if (message !== prevProps.message) {
      this.announce();
    }
  };

  AnnouncerMessage.prototype.componentWillUnmount = function componentWillUnmount() {
    var _props = this.props,
        clearOnUnmount = _props.clearOnUnmount,
        announceAssertive = _props.announceAssertive,
        announcePolite = _props.announcePolite;

    if (clearOnUnmount === true || clearOnUnmount === 'true') {
      announceAssertive('');
      announcePolite('');
    }
  };

  AnnouncerMessage.prototype.render = function render() {
    return null;
  };

  return AnnouncerMessage;
}(_react.Component);

AnnouncerMessage.propTypes = "development" !== "production" ? {
  message: _propTypes.default.string.isRequired,
  'aria-live': _propTypes.default.string.isRequired,
  clearOnUnmount: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['true', 'false'])]),
  announceAssertive: _propTypes.default.func,
  announcePolite: _propTypes.default.func
} : {};
var _default = AnnouncerMessage;
exports.default = _default;
},{"prop-types":"node_modules/prop-types/index.js","react":"node_modules/react/index.js","uuid/v4":"node_modules/uuid/v4.js"}],"node_modules/react-aria-live/es/modules/LiveMessage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AnnouncerContext = _interopRequireDefault(require("./AnnouncerContext"));

var _AnnouncerMessage = _interopRequireDefault(require("./AnnouncerMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var LiveMessage = function LiveMessage(props) {
  return _react.default.createElement(_AnnouncerContext.default.Consumer, null, function (contextProps) {
    return _react.default.createElement(_AnnouncerMessage.default, _extends({}, contextProps, props));
  });
};

LiveMessage.propTypes = "development" !== "production" ? {
  message: _propTypes.default.string.isRequired,
  'aria-live': _propTypes.default.string.isRequired,
  clearOnUnmount: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['true', 'false'])])
} : {};
var _default = LiveMessage;
exports.default = _default;
},{"react":"node_modules/react/index.js","prop-types":"node_modules/prop-types/index.js","./AnnouncerContext":"node_modules/react-aria-live/es/modules/AnnouncerContext.js","./AnnouncerMessage":"node_modules/react-aria-live/es/modules/AnnouncerMessage.js"}],"node_modules/react-aria-live/es/modules/LiveMessenger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AnnouncerContext = _interopRequireDefault(require("./AnnouncerContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LiveMessenger = function LiveMessenger(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_AnnouncerContext.default.Consumer, null, function (contextProps) {
    return children(contextProps);
  });
};

LiveMessenger.propTypes = "development" !== "production" ? {
  children: _propTypes.default.func.isRequired
} : {};
var _default = LiveMessenger;
exports.default = _default;
},{"react":"node_modules/react/index.js","prop-types":"node_modules/prop-types/index.js","./AnnouncerContext":"node_modules/react-aria-live/es/modules/AnnouncerContext.js"}],"node_modules/react-aria-live/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LiveAnnouncer", {
  enumerable: true,
  get: function () {
    return _LiveAnnouncer2.default;
  }
});
Object.defineProperty(exports, "LiveMessage", {
  enumerable: true,
  get: function () {
    return _LiveMessage2.default;
  }
});
Object.defineProperty(exports, "LiveMessenger", {
  enumerable: true,
  get: function () {
    return _LiveMessenger2.default;
  }
});

var _LiveAnnouncer2 = _interopRequireDefault(require("./modules/LiveAnnouncer"));

var _LiveMessage2 = _interopRequireDefault(require("./modules/LiveMessage"));

var _LiveMessenger2 = _interopRequireDefault(require("./modules/LiveMessenger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./modules/LiveAnnouncer":"node_modules/react-aria-live/es/modules/LiveAnnouncer.js","./modules/LiveMessage":"node_modules/react-aria-live/es/modules/LiveMessage.js","./modules/LiveMessenger":"node_modules/react-aria-live/es/modules/LiveMessenger.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52667" + '/');

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
//# sourceMappingURL=/es.d5457454.js.map