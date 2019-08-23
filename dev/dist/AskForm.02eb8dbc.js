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
})({"node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/extends.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _extends;

function _extends() {
  exports.default = _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}
},{}],"node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _objectWithoutPropertiesLoose;

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
},{}],"node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _inheritsLoose;

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
},{}],"node_modules/dom-helpers/node_modules/@babel/runtime/helpers/interopRequireDefault.js":[function(require,module,exports) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],"node_modules/dom-helpers/class/hasClass.js":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];
},{}],"node_modules/dom-helpers/class/addClass.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(require("./hasClass"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"node_modules/dom-helpers/node_modules/@babel/runtime/helpers/interopRequireDefault.js","./hasClass":"node_modules/dom-helpers/class/hasClass.js"}],"node_modules/dom-helpers/class/removeClass.js":[function(require,module,exports) {
'use strict';

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};
},{}],"node_modules/react-transition-group/esm/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  disabled: false
};
exports.default = _default;
},{}],"node_modules/react-transition-group/esm/utils/PropTypes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape = "development" !== 'production' ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number,
  appear: _propTypes.default.number
}).isRequired]) : null;
exports.timeoutsShape = timeoutsShape;
var classNamesShape = "development" !== 'production' ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : null;
exports.classNamesShape = classNamesShape;
},{"prop-types":"node_modules/prop-types/index.js"}],"node_modules/react-transition-group/esm/TransitionGroupContext.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react.default.createContext(null);

exports.default = _default;
},{"react":"node_modules/react/index.js"}],"node_modules/react-transition-group/esm/Transition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _config = _interopRequireDefault(require("./config"));

var _PropTypes = require("./utils/PropTypes");

var _TransitionGroupContext = _interopRequireDefault(require("./TransitionGroupContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config.default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit || _config.default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["children"]); // filter props for Transtition

    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      // allows for nested Transitions
      return _react.default.createElement(_TransitionGroupContext.default.Provider, {
        value: null
      }, children(status, childProps));
    }

    var child = _react.default.Children.only(children);

    return (// allows for nested Transitions
      _react.default.createElement(_TransitionGroupContext.default.Provider, {
        value: null
      }, _react.default.cloneElement(child, childProps))
    );
  };

  return Transition;
}(_react.default.Component);

Transition.contextType = _TransitionGroupContext.default;
Transition.propTypes = "development" !== "production" ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: _propTypes.default.oneOfType([_propTypes.default.func.isRequired, _propTypes.default.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: _propTypes.default.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: _propTypes.default.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: _propTypes.default.bool,

  /**
   * Normally a component is not transitioned if it is shown when the
   * `<Transition>` component mounts. If you want to transition on the first
   * mount set `appear` to `true`, and the component will transition in as soon
   * as the `<Transition>` mounts.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: _propTypes.default.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: _propTypes.default.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: _propTypes.default.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: _propTypes.default.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: _propTypes.default.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: _propTypes.default.func // Name the function so it is clearer in the documentation

} : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;
var _default = Transition;
exports.default = _default;
},{"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js","@babel/runtime/helpers/esm/inheritsLoose":"node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js","prop-types":"node_modules/prop-types/index.js","react":"node_modules/react/index.js","react-dom":"node_modules/react-dom/index.js","./config":"node_modules/react-transition-group/esm/config.js","./utils/PropTypes":"node_modules/react-transition-group/esm/utils/PropTypes.js","./TransitionGroupContext":"node_modules/react-transition-group/esm/TransitionGroupContext.js"}],"node_modules/react-transition-group/esm/CSSTransition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _addClass2 = _interopRequireDefault(require("dom-helpers/class/addClass"));

var _removeClass = _interopRequireDefault(require("dom-helpers/class/removeClass"));

var _react = _interopRequireDefault(require("react"));

var _Transition = _interopRequireDefault(require("./Transition"));

var _PropTypes = require("./utils/PropTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass2.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (node, appearing) {
      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    if (type === 'appear' && phase === 'done') {
      className += " " + this.getClassNames('enter').doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    this.appliedClasses[type][phase] = className;

    _addClass(node, className);
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["classNames"]);
    return _react.default.createElement(_Transition.default, (0, _extends2.default)({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes = "development" !== "production" ? (0, _extends2.default)({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided and it
   * will be suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-appear`, `fade-appear-active`,
   * `fade-appear-done`, `fade-enter`, `fade-enter-active`, `fade-enter-done`,
   * `fade-exit`, `fade-exit-active`, and `fade-exit-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: _propTypes.default.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: _propTypes.default.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: _propTypes.default.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: _propTypes.default.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: _propTypes.default.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: _propTypes.default.func
}) : {};
var _default = CSSTransition;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/extends.js","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js","@babel/runtime/helpers/esm/inheritsLoose":"node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js","prop-types":"node_modules/prop-types/index.js","dom-helpers/class/addClass":"node_modules/dom-helpers/class/addClass.js","dom-helpers/class/removeClass":"node_modules/dom-helpers/class/removeClass.js","react":"node_modules/react/index.js","./Transition":"node_modules/react-transition-group/esm/Transition.js","./utils/PropTypes":"node_modules/react-transition-group/esm/utils/PropTypes.js"}],"node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _assertThisInitialized;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
},{}],"node_modules/react-transition-group/esm/utils/ChildMapping.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = require("react");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
},{"react":"node_modules/react/index.js"}],"node_modules/react-transition-group/esm/TransitionGroup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/assertThisInitialized"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _TransitionGroupContext = _interopRequireDefault(require("./TransitionGroupContext"));

var _ChildMapping = require("./utils/ChildMapping");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = (0, _extends2.default)({}, state.children);
        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return _react.default.createElement(_TransitionGroupContext.default.Provider, {
        value: contextValue
      }, children);
    }

    return _react.default.createElement(_TransitionGroupContext.default.Provider, {
      value: contextValue
    }, _react.default.createElement(Component, props, children));
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.propTypes = "development" !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : {};
TransitionGroup.defaultProps = defaultProps;
var _default = TransitionGroup;
exports.default = _default;
},{"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js","@babel/runtime/helpers/esm/extends":"node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/extends.js","@babel/runtime/helpers/esm/inheritsLoose":"node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js","@babel/runtime/helpers/esm/assertThisInitialized":"node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js","prop-types":"node_modules/prop-types/index.js","react":"node_modules/react/index.js","./TransitionGroupContext":"node_modules/react-transition-group/esm/TransitionGroupContext.js","./utils/ChildMapping":"node_modules/react-transition-group/esm/utils/ChildMapping.js"}],"node_modules/react-transition-group/esm/ReplaceTransition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _TransitionGroup = _interopRequireDefault(require("./TransitionGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler](_reactDom.default.findDOMNode(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes = "development" !== "production" ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : {};
var _default = ReplaceTransition;
exports.default = _default;
},{"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js","@babel/runtime/helpers/esm/inheritsLoose":"node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js","prop-types":"node_modules/prop-types/index.js","react":"node_modules/react/index.js","react-dom":"node_modules/react-dom/index.js","./TransitionGroup":"node_modules/react-transition-group/esm/TransitionGroup.js"}],"node_modules/react-transition-group/esm/SwitchTransition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.modes = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Transition = require("./Transition");

var _TransitionGroupContext = _interopRequireDefault(require("./TransitionGroupContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _leaveRenders, _enterRenders;

function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (_react.default.isValidElement(oldChildren) && _react.default.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};
exports.modes = modes;

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return _react.default.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition.ENTERING, null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, _react.default.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition.ENTERING);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return _react.default.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition.ENTERED, _react.default.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [_react.default.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition.ENTERED, _react.default.cloneElement(children, {
        in: true
      }));
    })
  }), _react.default.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child
 *
 * ```jsx
 *
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <FadeTransition key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade' >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </FadeTransition>
 *    </SwitchTransition>
 *  )
 * }
 * ```
 */

var SwitchTransition =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition.ENTERED,
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === _Transition.ENTERING && props.mode === modes.in) {
      return {
        status: _Transition.ENTERING
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition.EXITING
      };
    }

    return {
      current: _react.default.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case _Transition.ENTERING:
        component = enterRenders[mode](data);
        break;

      case _Transition.EXITING:
        component = leaveRenders[mode](data);
        break;

      case _Transition.ENTERED:
        component = current;
    }

    return _react.default.createElement(_TransitionGroupContext.default.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(_react.default.Component);

SwitchTransition.propTypes = "development" !== "production" ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out: New element transitions in first, then when complete, the current element transitions out.`
   *
   * @type {'out-in'|'in-out'}
   */
  mode: _propTypes.default.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component
   */
  children: _propTypes.default.oneOfType([_propTypes.default.element.isRequired])
} : {};
SwitchTransition.defaultProps = {
  mode: modes.out
};
var _default = SwitchTransition;
exports.default = _default;
},{"@babel/runtime/helpers/esm/inheritsLoose":"node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js","react":"node_modules/react/index.js","prop-types":"node_modules/prop-types/index.js","./Transition":"node_modules/react-transition-group/esm/Transition.js","./TransitionGroupContext":"node_modules/react-transition-group/esm/TransitionGroupContext.js"}],"node_modules/react-transition-group/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CSSTransition", {
  enumerable: true,
  get: function () {
    return _CSSTransition.default;
  }
});
Object.defineProperty(exports, "ReplaceTransition", {
  enumerable: true,
  get: function () {
    return _ReplaceTransition.default;
  }
});
Object.defineProperty(exports, "SwitchTransition", {
  enumerable: true,
  get: function () {
    return _SwitchTransition.default;
  }
});
Object.defineProperty(exports, "TransitionGroup", {
  enumerable: true,
  get: function () {
    return _TransitionGroup.default;
  }
});
Object.defineProperty(exports, "Transition", {
  enumerable: true,
  get: function () {
    return _Transition.default;
  }
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function () {
    return _config.default;
  }
});

var _CSSTransition = _interopRequireDefault(require("./CSSTransition"));

var _ReplaceTransition = _interopRequireDefault(require("./ReplaceTransition"));

var _SwitchTransition = _interopRequireDefault(require("./SwitchTransition"));

var _TransitionGroup = _interopRequireDefault(require("./TransitionGroup"));

var _Transition = _interopRequireDefault(require("./Transition"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./CSSTransition":"node_modules/react-transition-group/esm/CSSTransition.js","./ReplaceTransition":"node_modules/react-transition-group/esm/ReplaceTransition.js","./SwitchTransition":"node_modules/react-transition-group/esm/SwitchTransition.js","./TransitionGroup":"node_modules/react-transition-group/esm/TransitionGroup.js","./Transition":"node_modules/react-transition-group/esm/Transition.js","./config":"node_modules/react-transition-group/esm/config.js"}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
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
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/Components/FormComponents/Animations/askarray.css":[function(require,module,exports) {
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
    onChange: handleTabClick,
    role: "tab",
    "aria-selected": checked,
    "aria-controls": "",
    tabIndex: checked ? 0 : -1
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
    className: "monthly-tab",
    role: "tablist",
    "aria-label": "Giving Tabs"
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
  name: "mwmouv",
  styles: "display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;&.askarray{position:relative;box-sizing:border-box;height:auto;width:100%;max-width:400px;margin:20px auto;margin-bottom:0;}&.askarray__tabs,&.askarray--club{position:relative;box-sizing:border-box;height:auto;width:calc(100% + 5px);margin:-2.5px;border-bottom:5px solid transparent;flex-wrap:nowrap;}&.askarray--club{margin:30px 0;flex-wrap:nowrap;justify-content:space-between;outline:none;@media screen and (max-width:692px){flex-wrap:wrap;}}"
} : {
  name: "mwmouv",
  styles: "display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;&.askarray{position:relative;box-sizing:border-box;height:auto;width:100%;max-width:400px;margin:20px auto;margin-bottom:0;}&.askarray__tabs,&.askarray--club{position:relative;box-sizing:border-box;height:auto;width:calc(100% + 5px);margin:-2.5px;border-bottom:5px solid transparent;flex-wrap:nowrap;}&.askarray--club{margin:30px 0;flex-wrap:nowrap;justify-content:space-between;outline:none;@media screen and (max-width:692px){flex-wrap:wrap;}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsdWJBc2tBcnJheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHK0IiLCJmaWxlIjoiQ2x1YkFza0FycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IENsdWJBc2tBcnJheSA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdCYuYXNrYXJyYXkge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGhlaWdodDogYXV0bztcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdG1hcmdpbjogMjBweCBhdXRvO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cblx0Ji5hc2thcnJheV9fdGFicywgJi5hc2thcnJheS0tY2x1YiB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgKyA1cHgpO1xuXHRcdG1hcmdpbjogLTIuNXB4O1xuXHRcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0fVxuXHQmLmFza2FycmF5LS1jbHViIHtcblx0XHRtYXJnaW46IDMwcHggMDtcblx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0b3V0bGluZTogbm9uZTtcblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OTJweCkge1xuXHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdH1cblx0fVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2x1YkFza0FycmF5O1xuIl19 */"
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
  name: "1chietr",
  styles: "display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;&.askbutton{box-sizing:border-box;height:65px;width:calc(100% / 3);}&.askbutton__tabs{height:80px;box-sizing:border-box;flex:1;flex-basis:calc((100% / 3) - 10px);margin:2.5px;}&.askbutton--club{box-sizing:border-box;flex:0 0 95px;margin:0 2.5px;@media screen and (max-width:535px){flex-basis:70px;}@media screen and (max-width:395px){flex-basis:60px;}@media screen and (max-width:360px){flex-basis:55px;}@media screen and (max-width:336px){flex-basis:52px;}}div{display:flex;flex-direction:row;justify-content:center;align-items:center;}div.askbutton__amt{background-color:#fff;border-radius:4px;border:2px solid #009bdf;box-sizing:border-box;color:#009bdf;cursor:pointer;-webkit-flex-basis:calc(19px * 4.55);-ms-flex-preferred-size:calc(19px * 4.55);font-weight:600;font-size:calc(19px * 1.4);height:calc(19px * 2.5);text-align:center;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;@media screen and (max-width:395px){font-size:19px;}}div.askbutton__amt--tabs{background-color:#fff;border:1px solid #333;border-radius:4px;box-sizing:border-box;color:#333;cursor:pointer;width:100%;font-weight:600;font-size:calc(19px * 1.4);height:80px;text-align:center;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;}&:focus div:not(.club-level),&:hover div:not(.club-level),&:active div:not(.club-level),div:not(.club-level):hover,div:not(.club-level):focus,div:not(.club-level):active,&.selected div:not(.club-level){background-color:#009bdf;color:#fff;border-color:#009bdf;}div.club-level{position:absolute;font-weight:bold;font-size:14px;color:#DDB007;text-align:center;width:110%;left:50%;top:100%;transform:translateX(-50%);@media screen and (max-width:395px){width:100%;font-size:12px;}}"
} : {
  name: "1chietr",
  styles: "display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;&.askbutton{box-sizing:border-box;height:65px;width:calc(100% / 3);}&.askbutton__tabs{height:80px;box-sizing:border-box;flex:1;flex-basis:calc((100% / 3) - 10px);margin:2.5px;}&.askbutton--club{box-sizing:border-box;flex:0 0 95px;margin:0 2.5px;@media screen and (max-width:535px){flex-basis:70px;}@media screen and (max-width:395px){flex-basis:60px;}@media screen and (max-width:360px){flex-basis:55px;}@media screen and (max-width:336px){flex-basis:52px;}}div{display:flex;flex-direction:row;justify-content:center;align-items:center;}div.askbutton__amt{background-color:#fff;border-radius:4px;border:2px solid #009bdf;box-sizing:border-box;color:#009bdf;cursor:pointer;-webkit-flex-basis:calc(19px * 4.55);-ms-flex-preferred-size:calc(19px * 4.55);font-weight:600;font-size:calc(19px * 1.4);height:calc(19px * 2.5);text-align:center;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;@media screen and (max-width:395px){font-size:19px;}}div.askbutton__amt--tabs{background-color:#fff;border:1px solid #333;border-radius:4px;box-sizing:border-box;color:#333;cursor:pointer;width:100%;font-weight:600;font-size:calc(19px * 1.4);height:80px;text-align:center;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;}&:focus div:not(.club-level),&:hover div:not(.club-level),&:active div:not(.club-level),div:not(.club-level):hover,div:not(.club-level):focus,div:not(.club-level):active,&.selected div:not(.club-level){background-color:#009bdf;color:#fff;border-color:#009bdf;}div.club-level{position:absolute;font-weight:bold;font-size:14px;color:#DDB007;text-align:center;width:110%;left:50%;top:100%;transform:translateX(-50%);@media screen and (max-width:395px){width:100%;font-size:12px;}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsdWJBc2tBcnJheUJ0bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHa0MiLCJmaWxlIjoiQ2x1YkFza0FycmF5QnRuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IENsdWJBc2tBcnJheUJ0biA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCYuYXNrYnV0dG9uIHtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGhlaWdodDogNjVweDtcblx0XHR3aWR0aDogY2FsYygxMDAlIC8gMyk7XG5cdH1cblx0Ji5hc2tidXR0b25fX3RhYnMge1xuXHRcdGhlaWdodDogODBweDtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGZsZXg6IDE7XG5cdFx0ZmxleC1iYXNpczogY2FsYygoMTAwJSAvIDMpIC0gMTBweCk7XG5cdFx0bWFyZ2luOiAyLjVweDtcbiAgICB9XG4gICAgJi5hc2tidXR0b24tLWNsdWIge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBmbGV4OiAwIDAgOTVweDtcblx0XHRtYXJnaW46IDAgMi41cHg7XG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTM1cHgpIHtcblx0XHRcdGZsZXgtYmFzaXM6IDcwcHg7XG5cdFx0fVxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5NXB4KSB7XG5cdFx0XHRmbGV4LWJhc2lzOiA2MHB4O1xuXHRcdH1cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuXHRcdFx0ZmxleC1iYXNpczogNTVweDtcblx0XHR9XG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzM2cHgpIHtcblx0XHRcdGZsZXgtYmFzaXM6IDUycHg7XG5cdFx0fVxuICAgIH1cblx0ZGl2IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXHRkaXYuYXNrYnV0dG9uX19hbXQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdGJvcmRlcjogMnB4IHNvbGlkICMwMDliZGY7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRjb2xvcjogIzAwOWJkZjtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0LXdlYmtpdC1mbGV4LWJhc2lzOiBjYWxjKDE5cHggKiA0LjU1KTtcblx0XHQtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogY2FsYygxOXB4ICogNC41NSk7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRmb250LXNpemU6IGNhbGMoMTlweCAqIDEuNCk7XG5cdFx0aGVpZ2h0OiBjYWxjKDE5cHggKiAyLjUpO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAyMDBtcyBlYXNlLWluLW91dCwgY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0O1xuXHRcdHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAyMDBtcyBlYXNlLWluLW91dCwgY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0O1xuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5NXB4KSB7XG5cdFx0XHRmb250LXNpemU6IDE5cHg7XG5cdFx0fVxuXHR9XG5cdGRpdi5hc2tidXR0b25fX2FtdC0tdGFicyB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGNvbG9yOiAjMzMzO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGZvbnQtc2l6ZTogY2FsYygxOXB4ICogMS40KTtcblx0XHRoZWlnaHQ6IDgwcHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAyMDBtcyBlYXNlLWluLW91dCwgY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0O1xuXHR9XG5cdCY6Zm9jdXMgZGl2Om5vdCguY2x1Yi1sZXZlbCksXG5cdCY6aG92ZXIgZGl2Om5vdCguY2x1Yi1sZXZlbCksXG5cdCY6YWN0aXZlIGRpdjpub3QoLmNsdWItbGV2ZWwpLFxuXHRkaXY6bm90KC5jbHViLWxldmVsKTpob3Zlcixcblx0ZGl2Om5vdCguY2x1Yi1sZXZlbCk6Zm9jdXMsXG5cdGRpdjpub3QoLmNsdWItbGV2ZWwpOmFjdGl2ZSxcblx0Ji5zZWxlY3RlZCBkaXY6bm90KC5jbHViLWxldmVsKSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwOWJkZjtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRib3JkZXItY29sb3I6ICMwMDliZGY7XG5cdH1cblx0ZGl2LmNsdWItbGV2ZWwge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblx0XHRjb2xvcjogI0REQjAwNztcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0d2lkdGg6IDExMCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiAxMDAlO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTVweCkge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0fVxuXHR9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDbHViQXNrQXJyYXlCdG47XG4iXX0= */"
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
  name: "1yjmf9m",
  styles: "display:flex;flex-direction:row;justify-content:center;line-height:unset;&.askarray--other{position:relative;box-sizing:border-box;flex:0 0 150px;margin:0 2.5px;@media screen and (max-width:692px){margin:0 auto;margin-top:40px;flex-basis:160px;justify-self:center;}}div{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;line-height:unset;margin-bottom:0;position:relative;white-space:nowrap;width:100%;label{font-size:calc(19px * 0.7);font-weight:600;color:#009bdf;box-sizing:border-box;position:absolute;left:50%;top:100%;transform:translateX(-50%);}}div.askarray__form-group--other{justify-content:center;max-width:400px;input{position:relative;appearance:none;background:none;background-color:#f0f0f0;height:calc(19px * 2.5);width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:2px solid #009bdf;border-radius:4px;box-sizing:border-box;color:#009bdf;font-size:calc(19px * 1.4);text-align:center;font-weight:600;max-width:220px;white-space:nowrap;}input:hover,input:active,input:focus{border:2px solid #009bdf;background-color:#fff;box-sizing:border-box;outline:none;}&.selected input{background:#009bdf;color:#fff;}div.other-amt-error{box-sizing:border-box;position:absolute;color:crimson;width:auto;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:auto;top:19px;left:50%;transform:translateX(-50%);}}div.askarray__form-group--tabs{justify-content:space-between;label{position:relative;left:auto !important;top:auto !important;transform:none !important;font-size:19px;color:#009bdf;line-height:80px !important;margin-bottom:0;}div.askarray__form-group-tabs-flex-container{display:flex;position:relative;flex-direction:row;justify-content:center;align-items:center;div.form-group-tabs--dollar{box-sizing:border-box;color:#009bdf;margin:0 5px;font-weight:600;font-size:19px;}input{position:relative;appearance:none;height:calc(19px * 2.5);width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:1px solid #009bdf;border-radius:4px;box-sizing:border-box;color:#009bdf;font-size:calc(19px * 1.4);text-align:center;font-weight:600;max-width:220px;white-space:nowrap;}input:hover,input:active,input:focus{border:1px solid #009bdf;background-color:#fff;box-sizing:border-box;outline:none;}div.other-amt-error{box-sizing:border-box;position:absolute;color:crimson;width:auto;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:auto;top:100%;left:50%;transform:translateX(-50%);}}@media screen and (max-width:450px){label{font-size:15px;}div input{max-width:160px;}}}div.selected{}"
} : {
  name: "1yjmf9m",
  styles: "display:flex;flex-direction:row;justify-content:center;line-height:unset;&.askarray--other{position:relative;box-sizing:border-box;flex:0 0 150px;margin:0 2.5px;@media screen and (max-width:692px){margin:0 auto;margin-top:40px;flex-basis:160px;justify-self:center;}}div{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;line-height:unset;margin-bottom:0;position:relative;white-space:nowrap;width:100%;label{font-size:calc(19px * 0.7);font-weight:600;color:#009bdf;box-sizing:border-box;position:absolute;left:50%;top:100%;transform:translateX(-50%);}}div.askarray__form-group--other{justify-content:center;max-width:400px;input{position:relative;appearance:none;background:none;background-color:#f0f0f0;height:calc(19px * 2.5);width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:2px solid #009bdf;border-radius:4px;box-sizing:border-box;color:#009bdf;font-size:calc(19px * 1.4);text-align:center;font-weight:600;max-width:220px;white-space:nowrap;}input:hover,input:active,input:focus{border:2px solid #009bdf;background-color:#fff;box-sizing:border-box;outline:none;}&.selected input{background:#009bdf;color:#fff;}div.other-amt-error{box-sizing:border-box;position:absolute;color:crimson;width:auto;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:auto;top:19px;left:50%;transform:translateX(-50%);}}div.askarray__form-group--tabs{justify-content:space-between;label{position:relative;left:auto !important;top:auto !important;transform:none !important;font-size:19px;color:#009bdf;line-height:80px !important;margin-bottom:0;}div.askarray__form-group-tabs-flex-container{display:flex;position:relative;flex-direction:row;justify-content:center;align-items:center;div.form-group-tabs--dollar{box-sizing:border-box;color:#009bdf;margin:0 5px;font-weight:600;font-size:19px;}input{position:relative;appearance:none;height:calc(19px * 2.5);width:100%;-webkit-transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;transition:border-color 200ms ease-in-out,color 200ms ease-in-out,background-color 200ms ease-in-out;border:1px solid #009bdf;border-radius:4px;box-sizing:border-box;color:#009bdf;font-size:calc(19px * 1.4);text-align:center;font-weight:600;max-width:220px;white-space:nowrap;}input:hover,input:active,input:focus{border:1px solid #009bdf;background-color:#fff;box-sizing:border-box;outline:none;}div.other-amt-error{box-sizing:border-box;position:absolute;color:crimson;width:auto;font-weight:800;font-size:calc(19px * 0.5);opacity:1;overflow:hidden;max-width:100%;white-space:nowrap;bottom:auto;top:100%;left:50%;transform:translateX(-50%);}}@media screen and (max-width:450px){label{font-size:15px;}div input{max-width:160px;}}}div.selected{}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsdWJPdGhlckdpZnRBbW91bnRHcm91cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHMkMiLCJmaWxlIjoiQ2x1Yk90aGVyR2lmdEFtb3VudEdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IENsdWJPdGhlckdpZnRBbW91bnRHcm91cCA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRsaW5lLWhlaWdodDogdW5zZXQ7XG5cdCYuYXNrYXJyYXktLW90aGVyIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRmbGV4OiAwIDAgMTUwcHg7XG5cdFx0bWFyZ2luOiAwIDIuNXB4O1xuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5MnB4KSB7XG5cdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdG1hcmdpbi10b3A6IDQwcHg7XG5cdFx0XHRmbGV4LWJhc2lzOiAxNjBweDtcblx0XHRcdGp1c3RpZnktc2VsZjogY2VudGVyO1xuXHRcdH1cblx0fVxuXHRkaXYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0bGluZS1oZWlnaHQ6IHVuc2V0O1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bGFiZWwge1xuXHRcdFx0Zm9udC1zaXplOiBjYWxjKDE5cHggKiAwLjcpO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGNvbG9yOiAjMDA5YmRmO1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGxlZnQ6IDUwJTtcblx0XHRcdHRvcDogMTAwJTtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHR9XG5cdH1cblx0ZGl2LmFza2FycmF5X19mb3JtLWdyb3VwLS1vdGhlciB7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRpbnB1dCB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRhcHBlYXJhbmNlOiBub25lO1xuXHRcdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG5cdFx0XHRoZWlnaHQ6IGNhbGMoMTlweCAqIDIuNSk7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LFxuXHRcdFx0XHRjb2xvciAyMDBtcyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlLWluLW91dDtcblx0XHRcdHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAyMDBtcyBlYXNlLWluLW91dCwgY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG5cdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjMDA5YmRmO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdGNvbG9yOiAjMDA5YmRmO1xuXHRcdFx0Zm9udC1zaXplOiBjYWxjKDE5cHggKiAxLjQpO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdG1heC13aWR0aDogMjIwcHg7XG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdH1cblx0XHRpbnB1dDpob3Zlcixcblx0XHRpbnB1dDphY3RpdmUsXG5cdFx0aW5wdXQ6Zm9jdXMge1xuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgIzAwOWJkZjtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0b3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAmLnNlbGVjdGVkIGlucHV0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDliZGY7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuXHRcdGRpdi5vdGhlci1hbXQtZXJyb3Ige1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGNvbG9yOiBjcmltc29uO1xuXHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRmb250LXdlaWdodDogODAwO1xuXHRcdFx0Zm9udC1zaXplOiBjYWxjKDE5cHggKiAwLjUpO1xuXHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0Ym90dG9tOiBhdXRvO1xuXHRcdFx0dG9wOiAxOXB4O1xuXHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXHRcdH1cblx0fVxuXHRkaXYuYXNrYXJyYXlfX2Zvcm0tZ3JvdXAtLXRhYnMge1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRsYWJlbCB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG5cdFx0XHR0b3A6IGF1dG8gIWltcG9ydGFudDtcblx0XHRcdHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuXHRcdFx0Zm9udC1zaXplOiAxOXB4O1xuXHRcdFx0Y29sb3I6ICMwMDliZGY7XG5cdFx0XHRsaW5lLWhlaWdodDogODBweCAhaW1wb3J0YW50O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHR9XG5cdFx0ZGl2LmFza2FycmF5X19mb3JtLWdyb3VwLXRhYnMtZmxleC1jb250YWluZXIge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRkaXYuZm9ybS1ncm91cC10YWJzLS1kb2xsYXIge1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRjb2xvcjogIzAwOWJkZjtcblx0XHRcdFx0bWFyZ2luOiAwIDVweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxOXB4O1xuXHRcdFx0fVxuXHRcdFx0aW5wdXQge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdGFwcGVhcmFuY2U6IG5vbmU7XG5cdFx0XHRcdGhlaWdodDogY2FsYygxOXB4ICogMi41KTtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LFxuXHRcdFx0XHRcdGNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQsIGNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LFxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICMwMDliZGY7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0Y29sb3I6ICMwMDliZGY7XG5cdFx0XHRcdGZvbnQtc2l6ZTogY2FsYygxOXB4ICogMS40KTtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRtYXgtd2lkdGg6IDIyMHB4O1xuXHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0fVxuXHRcdFx0aW5wdXQ6aG92ZXIsXG5cdFx0XHRpbnB1dDphY3RpdmUsXG5cdFx0XHRpbnB1dDpmb2N1cyB7XG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICMwMDliZGY7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0XHR9XG5cdFx0XHRkaXYub3RoZXItYW10LWVycm9yIHtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRjb2xvcjogY3JpbXNvbjtcblx0XHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA4MDA7XG5cdFx0XHRcdGZvbnQtc2l6ZTogY2FsYygxOXB4ICogMC41KTtcblx0XHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0XHRib3R0b206IGF1dG87XG5cdFx0XHRcdHRvcDogMTAwJTtcblx0XHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG5cdFx0XHRsYWJlbCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdH1cblx0XHRcdGRpdiBpbnB1dCB7XG5cdFx0XHRcdG1heC13aWR0aDogMTYwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGRpdi5zZWxlY3RlZCB7XG5cdH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENsdWJPdGhlckdpZnRBbW91bnRHcm91cDtcbiJdfQ== */"
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
          amountError = _this$props2.amountError,
          monthlyChecked = _this$props2.monthlyChecked,
          handleRadioClick = _this$props2.handleRadioClick,
          _this$props2$givingOp = _this$props2.givingOptions,
          monthlyAmounts = _this$props2$givingOp.monthlyAmounts,
          singleAmounts = _this$props2$givingOp.singleAmounts;
      var _this$state2 = this.state,
          otherAmount = _this$state2.otherAmount,
          otherAmountError = _this$state2.otherAmountError,
          selectedIndex = _this$state2.selectedIndex;
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
        className: "askarray--club",
        role: "tabpanel",
        tabIndex: "0",
        "aria-labelledby": monthlyChecked ? "monthlygift" : "singlegift"
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
},{"@babel/runtime/helpers/toConsumableArray":"node_modules/@babel/runtime/helpers/toConsumableArray.js","@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/assertThisInitialized":"node_modules/@babel/runtime/helpers/assertThisInitialized.js","@babel/runtime/helpers/inherits":"node_modules/@babel/runtime/helpers/inherits.js","@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","react-transition-group":"node_modules/react-transition-group/esm/index.js","../Animations/askarray.css":"src/Components/FormComponents/Animations/askarray.css","../../Contexts/GivingFormProvider":"src/Components/Contexts/GivingFormProvider.js","../Blocks/MonthlyClubTabBlock":"src/Components/FormComponents/Blocks/MonthlyClubTabBlock.js","../StyledComponents/FieldSet":"src/Components/FormComponents/StyledComponents/FieldSet.js","../StyledComponents/ClubAskArray":"src/Components/FormComponents/StyledComponents/ClubAskArray.js","../StyledComponents/ClubAskArrayBtn":"src/Components/FormComponents/StyledComponents/ClubAskArrayBtn.js","../StyledComponents/ClubOtherGiftAmountGroup":"src/Components/FormComponents/StyledComponents/ClubOtherGiftAmountGroup.js","../StyledComponents/AmountError":"src/Components/FormComponents/StyledComponents/AmountError.js"}],"node_modules/react-media/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _inheritsLoose;

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
},{}],"node_modules/react-media/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _assertThisInitialized;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
},{}],"node_modules/react-media/node_modules/@babel/runtime/helpers/esm/defineProperty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _defineProperty;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
},{}],"node_modules/invariant/browser.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if ("development" !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};

module.exports = invariant;
},{}],"node_modules/string-convert/camel2hyphen.js":[function(require,module,exports) {
var camel2hyphen = function (str) {
  return str
          .replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
          })
          .toLowerCase();
};

module.exports = camel2hyphen;
},{}],"node_modules/json2mq/index.js":[function(require,module,exports) {
var camel2hyphen = require('string-convert/camel2hyphen');

var isDimension = function (feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};

var obj2mq = function (obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen(feature);
    // Add px to dimension features
    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }
    if (index < features.length-1) {
      mq += ' and '
    }
  });
  return mq;
};

var json2mq = function (query) {
  var mq = '';
  if (typeof query === 'string') {
    return query;
  }
  // Handling array of media queries
  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);
      if (index < query.length-1) {
        mq += ', '
      }
    });
    return mq;
  }
  // Handling single media query
  return obj2mq(query);
};

module.exports = json2mq;
},{"string-convert/camel2hyphen":"node_modules/string-convert/camel2hyphen.js"}],"node_modules/react-media/esm/react-media.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _invariant = _interopRequireDefault(require("invariant"));

var _json2mq = _interopRequireDefault(require("json2mq"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaQueryList =
/*#__PURE__*/
function () {
  function MediaQueryList(targetWindow, query, listener) {
    var _this = this;

    this.nativeMediaQueryList = targetWindow.matchMedia(query);
    this.active = true; // Safari doesn't clear up listener with removeListener
    // when the listener is already waiting in the event queue.
    // Having an active flag to make sure the listener is not called
    // after we removeListener.

    this.cancellableListener = function () {
      _this.matches = _this.nativeMediaQueryList.matches;

      if (_this.active) {
        listener.apply(void 0, arguments);
      }
    };

    this.nativeMediaQueryList.addListener(this.cancellableListener);
    this.matches = this.nativeMediaQueryList.matches;
  }

  var _proto = MediaQueryList.prototype;

  _proto.cancel = function cancel() {
    this.active = false;
    this.nativeMediaQueryList.removeListener(this.cancellableListener);
  };

  return MediaQueryList;
}();
/**
 * Conditionally renders based on whether or not a media query matches.
 */


var Media =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Media, _React$Component);

  function Media() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      matches: _this.props.defaultMatches
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "updateMatches", function () {
      var matches = _this.mediaQueryList.matches;

      _this.setState({
        matches: matches
      });

      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(matches);
      }
    });
    return _this;
  }

  var _proto = Media.prototype;

  _proto.componentWillMount = function componentWillMount() {
    if (typeof window !== 'object') return;
    var targetWindow = this.props.targetWindow || window;
    !(typeof targetWindow.matchMedia === 'function') ? "development" !== "production" ? (0, _invariant.default)(false, '<Media targetWindow> does not support `matchMedia`.') : (0, _invariant.default)(false) : void 0;
    var query = this.props.query;
    if (typeof query !== 'string') query = (0, _json2mq.default)(query);
    this.mediaQueryList = new MediaQueryList(targetWindow, query, this.updateMatches);
    this.updateMatches();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mediaQueryList.cancel();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        render = _this$props.render;
    var matches = this.state.matches;
    return render ? matches ? render() : null : children ? typeof children === 'function' ? children(matches) : !Array.isArray(children) || children.length // Preact defaults to empty children array
    ? matches ? _react.default.Children.only(children) : null : null : null;
  };

  return Media;
}(_react.default.Component);

(0, _defineProperty2.default)(Media, "defaultProps", {
  defaultMatches: true
});

if ("development" !== "production") {
  Media.propTypes = {
    defaultMatches: _propTypes.default.bool,
    query: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.arrayOf(_propTypes.default.object.isRequired)]).isRequired,
    render: _propTypes.default.func,
    children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
    targetWindow: _propTypes.default.object,
    onChange: _propTypes.default.func
  };
}

var _default = Media;
exports.default = _default;
},{"@babel/runtime/helpers/esm/inheritsLoose":"node_modules/react-media/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js","@babel/runtime/helpers/esm/assertThisInitialized":"node_modules/react-media/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js","@babel/runtime/helpers/esm/defineProperty":"node_modules/react-media/node_modules/@babel/runtime/helpers/esm/defineProperty.js","react":"node_modules/react/index.js","prop-types":"node_modules/prop-types/index.js","invariant":"node_modules/invariant/browser.js","json2mq":"node_modules/json2mq/index.js"}],"src/Components/FormComponents/Blocks/PartnershipBlock.js":[function(require,module,exports) {
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
  target: "eex9axp0",
  label: "PremiumIntro"
})("development" === "production" ? {
  name: "s632dr",
  styles: "@media screen and (max-width:649px){font-weight:bold;}"
} : {
  name: "s632dr",
  styles: "@media screen and (max-width:649px){font-weight:bold;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhcnRuZXJzaGlwQmxvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSStCIiwiZmlsZSI6IlBhcnRuZXJzaGlwQmxvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgTWVkaWEgZnJvbSAncmVhY3QtbWVkaWEnO1xuXG5jb25zdCBQcmVtaXVtSW50cm8gPSBzdHlsZWQuZGl2YFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0OXB4KSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbmBcblxuY29uc3QgUHJlbXVpbUluZm9CbG9jayA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luOiAyMHB4IDAgMzBweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZGl2LnByZW1pdW0taW1nIHtcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICBmbGV4OiAwIDAgMTYwcHg7XG4gICAgICAgIGltZy5pbWctcmVzcG9uc2l2ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXYucHJlbWl1bS1kZXNjcmlwdGlvbntcbiAgICAgICAgbWF4LXdpZHRoOiA1MzBweDtcbiAgICAgICAgZmxleDogMSAwIDE0MHB4O1xuICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0OXB4KSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaTo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIuKAolwiOyBcbiAgICAgICAgICAgICAgICBjb2xvcjogI0Y3QjUwMDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xZW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpK2xpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0OXB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuYFxuXG5jb25zdCBQYXJ0bmVyc2hpcEJsb2NrID0gKHtwcmVtaXVtRGF0YToge3ByZW1pdW1UaXRsZSwgcHJlbWl1bUltZ1VybCwgcHJlbWl1bURlc2NyaXB0aW9ucywgc2hvcnREZXNjcmlwdGlvbnN9LCBtb250aGx5Q2hlY2tlZH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFByZW1pdW1JbnRybz5BbGwgTW9udGhseSBQYXJ0bmVycyBSZWNlaXZlOjwvUHJlbWl1bUludHJvPlxuICAgICAgICAgICAgPFByZW11aW1JbmZvQmxvY2s+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVtaXVtLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIgYWx0PXtgRFZEIFByZW1pdW0gZm9yIFwiJHtwcmVtaXVtVGl0bGV9XCJgfSBzcmM9e3ByZW1pdW1JbWdVcmx9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZW1pdW0tZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPE1lZGlhIHF1ZXJ5PVwiKG1heC13aWR0aDogNjQ5cHgpXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJlbWl1bS1kZXNjcmlwdGlvbl9fbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG9ydERlc2NyaXB0aW9ucy5tYXAoKGRlc2MsIGlkeCkgPT4gPGxpIGtleT17YHByZW1kZXNjLSR7aWR4fWB9IGNsYXNzTmFtZT1cInByZW1pdW0tZGVzY3JpcHRpb25fX2xpc3QtLWl0ZW1cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogZGVzY319PjwvbGk+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByZW1pdW0tZGVzY3JpcHRpb25fX2xpc3RcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZW1pdW1EZXNjcmlwdGlvbnMubWFwKChkZXNjLCBpZHgpID0+IDxsaSBrZXk9e2BwcmVtZGVzYy0ke2lkeH1gfSBjbGFzc05hbWU9XCJwcmVtaXVtLWRlc2NyaXB0aW9uX19saXN0LS1pdGVtXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGRlc2N9fT48L2xpPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L01lZGlhPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L1ByZW11aW1JbmZvQmxvY2s+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFydG5lcnNoaXBCbG9jayJdfQ== */"
});
var PremuimInfoBlock = (0, _styledBase.default)("div", {
  target: "eex9axp1",
  label: "PremuimInfoBlock"
})("development" === "production" ? {
  name: "1k0jk75",
  styles: "margin:20px 0 30px 0;display:flex;flex-direction:row;justify-content:space-between;div.premium-img{width:160px;flex:0 0 160px;img.img-responsive{display:block;max-width:100%;}}div.premium-description{max-width:530px;flex:1 0 140px;ul{list-style:none;margin-block-start:0;margin-block-end:0;@media screen and (max-width:649px){padding-inline-start:20px;}li::before{content:\"\u2022\";color:#F7B500;display:inline-block;width:1em;margin-left:-1em}li+li{margin-top:20px;}li{@media screen and (max-width:649px){font-style:italic;&::before{display:none;}}}}}"
} : {
  name: "1k0jk75",
  styles: "margin:20px 0 30px 0;display:flex;flex-direction:row;justify-content:space-between;div.premium-img{width:160px;flex:0 0 160px;img.img-responsive{display:block;max-width:100%;}}div.premium-description{max-width:530px;flex:1 0 140px;ul{list-style:none;margin-block-start:0;margin-block-end:0;@media screen and (max-width:649px){padding-inline-start:20px;}li::before{content:\"\u2022\";color:#F7B500;display:inline-block;width:1em;margin-left:-1em}li+li{margin-top:20px;}li{@media screen and (max-width:649px){font-style:italic;&::before{display:none;}}}}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhcnRuZXJzaGlwQmxvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVW1DIiwiZmlsZSI6IlBhcnRuZXJzaGlwQmxvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgTWVkaWEgZnJvbSAncmVhY3QtbWVkaWEnO1xuXG5jb25zdCBQcmVtaXVtSW50cm8gPSBzdHlsZWQuZGl2YFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0OXB4KSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbmBcblxuY29uc3QgUHJlbXVpbUluZm9CbG9jayA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luOiAyMHB4IDAgMzBweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZGl2LnByZW1pdW0taW1nIHtcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICBmbGV4OiAwIDAgMTYwcHg7XG4gICAgICAgIGltZy5pbWctcmVzcG9uc2l2ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXYucHJlbWl1bS1kZXNjcmlwdGlvbntcbiAgICAgICAgbWF4LXdpZHRoOiA1MzBweDtcbiAgICAgICAgZmxleDogMSAwIDE0MHB4O1xuICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0OXB4KSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaTo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIuKAolwiOyBcbiAgICAgICAgICAgICAgICBjb2xvcjogI0Y3QjUwMDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xZW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpK2xpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0OXB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuYFxuXG5jb25zdCBQYXJ0bmVyc2hpcEJsb2NrID0gKHtwcmVtaXVtRGF0YToge3ByZW1pdW1UaXRsZSwgcHJlbWl1bUltZ1VybCwgcHJlbWl1bURlc2NyaXB0aW9ucywgc2hvcnREZXNjcmlwdGlvbnN9LCBtb250aGx5Q2hlY2tlZH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFByZW1pdW1JbnRybz5BbGwgTW9udGhseSBQYXJ0bmVycyBSZWNlaXZlOjwvUHJlbWl1bUludHJvPlxuICAgICAgICAgICAgPFByZW11aW1JbmZvQmxvY2s+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVtaXVtLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIgYWx0PXtgRFZEIFByZW1pdW0gZm9yIFwiJHtwcmVtaXVtVGl0bGV9XCJgfSBzcmM9e3ByZW1pdW1JbWdVcmx9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZW1pdW0tZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPE1lZGlhIHF1ZXJ5PVwiKG1heC13aWR0aDogNjQ5cHgpXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJlbWl1bS1kZXNjcmlwdGlvbl9fbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG9ydERlc2NyaXB0aW9ucy5tYXAoKGRlc2MsIGlkeCkgPT4gPGxpIGtleT17YHByZW1kZXNjLSR7aWR4fWB9IGNsYXNzTmFtZT1cInByZW1pdW0tZGVzY3JpcHRpb25fX2xpc3QtLWl0ZW1cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogZGVzY319PjwvbGk+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByZW1pdW0tZGVzY3JpcHRpb25fX2xpc3RcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZW1pdW1EZXNjcmlwdGlvbnMubWFwKChkZXNjLCBpZHgpID0+IDxsaSBrZXk9e2BwcmVtZGVzYy0ke2lkeH1gfSBjbGFzc05hbWU9XCJwcmVtaXVtLWRlc2NyaXB0aW9uX19saXN0LS1pdGVtXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGRlc2N9fT48L2xpPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L01lZGlhPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L1ByZW11aW1JbmZvQmxvY2s+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFydG5lcnNoaXBCbG9jayJdfQ== */"
});

var PartnershipBlock = function PartnershipBlock(_ref) {
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

var _default = PartnershipBlock;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PremiumIntro, "PremiumIntro", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/PartnershipBlock.js");
  reactHotLoader.register(PremuimInfoBlock, "PremuimInfoBlock", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/PartnershipBlock.js");
  reactHotLoader.register(PartnershipBlock, "PartnershipBlock", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/PartnershipBlock.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/PartnershipBlock.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","react-media":"node_modules/react-media/esm/react-media.js"}],"src/Components/FormComponents/Animations/designations.css":[function(require,module,exports) {
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Components/FormComponents/Blocks/OtherGivingBlock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

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

var CardSection = (0, _styledBase.default)("section", {
  target: "edg7qd80",
  label: "CardSection"
})("development" === "production" ? {
  name: "9j12xa",
  styles: "background:white;margin:30px auto;padding:30px 0;width:100%;@media screen and (max-width:623px){background:#ECEFF1;}"
} : {
  name: "9j12xa",
  styles: "background:white;margin:30px auto;padding:30px 0;width:100%;@media screen and (max-width:623px){background:#ECEFF1;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk90aGVyR2l2aW5nQmxvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2tDIiwiZmlsZSI6Ik90aGVyR2l2aW5nQmxvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgQ2FyZFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIzcHgpIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0VDRUZGMTtcbiAgICB9XG5gXG5cbmNvbnN0IENhcmRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWdoLWl0ZW1zOiBjZW50ZXI7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIzcHgpIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbmBcblxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gICAgJi5jYXJkIHtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgZmxleDogMCAxIDM4MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgY29sb3I6ICMzQjNCM0I7XG4gICAgfVxuICAgICYuY2FyZCArICYuY2FyZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICBoNC5jYXJkX190aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMUU1RTg7XG4gICAgfVxuICAgIGRpdi5jYXJkX19ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0VGRjE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAubWFpbC1pbi1mb3JtLCAuY2JuLWFkZHJlc3MsIC5naXZpbmctbGlua3MsIC5waG9uZS0taW5mbyB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzlweCkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBhLCAuY2JuLWFkZHJlc3MtLXN0cmVldCwgLmNibi1hZGRyZXNzLS1jaXR5LXN0YXRlLXppcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjNweCkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgICAgICBhLCAuY2JuLWFkZHJlc3MtLXN0cmVldCwgLmNibi1hZGRyZXNzLS1jaXR5LXN0YXRlLXppcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnBob25lIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzYjNiM2I7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMDA5QkRGO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBjb2xvcjogIzAwNjlBRDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjNweCkge1xuICAgICAgICAmLmNhcmQge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgJi5jYXJkICsgJi5jYXJkIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbmBcblxuY29uc3QgT3RoZXJHaXZpbmdCbG9jayA9ICgpID0+IChcbiAgICA8Q2FyZFNlY3Rpb24+XG4gICAgICAgIDxDYXJkQ29udGFpbmVyPlxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkX190aXRsZVwiPkdpdmUgQnkgUGhvbmU8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lXCI+PGEgaHJlZj1cInRlbDoxODAwNzAwNzAwMFwiPjEtODAwLTcwMC03MDAwPC9hPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lLS1pbmZvXCI+RG9uYXRlIGJ5IHBob25lIG9yIGdldCBhc3Npc3RhbmNlIHdpdGggeW91ciBkb25hdGlvbi48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGVcIj5NYWlsLUluIEdpdmluZyBGb3JtPC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWlsLWluLWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRvIGRvbmF0ZSBieSBjaGVjayBvciB0byBhIHNwZWNpZmljIGNhdXNlLCBwbGVhc2UgY29tcGxldGUgdGhpcyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2JuLmNvbS9naXZpbmcvNzAwY2x1Yi9vcHRpb24uYXNweD9vPTRcIj5kb25hdGlvbiBmb3JtPC9hPiBieSBwcmludGluZyBhbmQgbWFpbGluZyB0bzpcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2JuLWFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2JuLWFkZHJlc3MtLXN0cmVldFwiPjk3NyBDZW50ZXJ2aWxsZSBUdXJucGlrZSw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2JuLWFkZHJlc3MtLWNpdHktc3RhdGUtemlwXCI+VmlyZ2luaWEgQmVhY2gsIFZBICAyMzQ2MzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGVcIj5Tb21lIFRpdGxlPC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ2l2aW5nLWxpbmtzXCIgaHJlZj1cImh0dHBzOi8vd3d3LmNibi5jb20vZ2l2aW5nLzcwMGNsdWIvcGxlZGdlRXhwcmVzcy5hc3B4XCI+UGxlZGdlIEdpdmluZzwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ2l2aW5nLWxpbmtzXCIgaHJlZj1cImh0dHA6Ly93d3cuY2JubGVnYWN5Lm9yZy9cIj5QbGFubmVkIEdpdmluZyAmIFlvdXIgTGVnYWN5PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJnaXZpbmctbGlua3NcIiBocmVmPVwiaHR0cHM6Ly93d3cuY2JuLmNvbS9naXZpbmcvbGl2aW5ndHJpYnV0ZXMvXCI+TWVtb3JpYWwgJiBUcmlidXRlIEdpZnRzPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJnaXZpbmctbGlua3NcIiBocmVmPVwiaHR0cHM6Ly93d3cuY2JuLmNvbS9wYXJ0bmVycy9tYXRjaGluZ2dpZnRzLmFzcHhcIj5FbXBsb3llciBNYXRjaGluZzwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ2l2aW5nLWxpbmtzXCIgaHJlZj1cImh0dHBzOi8vd3d3LmNibi5jb20vZ2l2aW5nLzcwMGNsdWIvc3RvY2tnaWZ0cy5hc3B4XCI+U3RvY2sgR2lmdHM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdpdmluZy1saW5rc1wiIGhyZWY9XCJodHRwczovL3d3dy5jYm4uY29tL2dpdmluZy83MDBjbHViL3dvcmtwbGFjZWdpdmluZy5hc3B4XCI+V29ya3BsYWNlIEdpdmluZzwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9DYXJkQ29udGFpbmVyPlxuICAgIDwvQ2FyZFNlY3Rpb24+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE90aGVyR2l2aW5nQmxvY2siXX0= */"
});
var CardContainer = (0, _styledBase.default)("div", {
  target: "edg7qd81",
  label: "CardContainer"
})("development" === "production" ? {
  name: "1avcc1d",
  styles: "width:calc(100% - 20px);max-width:1200px;margin:0 auto;display:flex;flex-direction:row;justify-content:space-between;aligh-items:center;@media screen and (max-width:623px){flex-wrap:wrap;}"
} : {
  name: "1avcc1d",
  styles: "width:calc(100% - 20px);max-width:1200px;margin:0 auto;display:flex;flex-direction:row;justify-content:space-between;aligh-items:center;@media screen and (max-width:623px){flex-wrap:wrap;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk90aGVyR2l2aW5nQmxvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdDIiwiZmlsZSI6Ik90aGVyR2l2aW5nQmxvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgQ2FyZFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIzcHgpIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0VDRUZGMTtcbiAgICB9XG5gXG5cbmNvbnN0IENhcmRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWdoLWl0ZW1zOiBjZW50ZXI7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIzcHgpIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbmBcblxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gICAgJi5jYXJkIHtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgZmxleDogMCAxIDM4MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgY29sb3I6ICMzQjNCM0I7XG4gICAgfVxuICAgICYuY2FyZCArICYuY2FyZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICBoNC5jYXJkX190aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMUU1RTg7XG4gICAgfVxuICAgIGRpdi5jYXJkX19ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0VGRjE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAubWFpbC1pbi1mb3JtLCAuY2JuLWFkZHJlc3MsIC5naXZpbmctbGlua3MsIC5waG9uZS0taW5mbyB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzlweCkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBhLCAuY2JuLWFkZHJlc3MtLXN0cmVldCwgLmNibi1hZGRyZXNzLS1jaXR5LXN0YXRlLXppcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjNweCkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgICAgICBhLCAuY2JuLWFkZHJlc3MtLXN0cmVldCwgLmNibi1hZGRyZXNzLS1jaXR5LXN0YXRlLXppcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnBob25lIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzYjNiM2I7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMDA5QkRGO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBjb2xvcjogIzAwNjlBRDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjNweCkge1xuICAgICAgICAmLmNhcmQge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgJi5jYXJkICsgJi5jYXJkIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbmBcblxuY29uc3QgT3RoZXJHaXZpbmdCbG9jayA9ICgpID0+IChcbiAgICA8Q2FyZFNlY3Rpb24+XG4gICAgICAgIDxDYXJkQ29udGFpbmVyPlxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkX190aXRsZVwiPkdpdmUgQnkgUGhvbmU8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lXCI+PGEgaHJlZj1cInRlbDoxODAwNzAwNzAwMFwiPjEtODAwLTcwMC03MDAwPC9hPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lLS1pbmZvXCI+RG9uYXRlIGJ5IHBob25lIG9yIGdldCBhc3Npc3RhbmNlIHdpdGggeW91ciBkb25hdGlvbi48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGVcIj5NYWlsLUluIEdpdmluZyBGb3JtPC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWlsLWluLWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRvIGRvbmF0ZSBieSBjaGVjayBvciB0byBhIHNwZWNpZmljIGNhdXNlLCBwbGVhc2UgY29tcGxldGUgdGhpcyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2JuLmNvbS9naXZpbmcvNzAwY2x1Yi9vcHRpb24uYXNweD9vPTRcIj5kb25hdGlvbiBmb3JtPC9hPiBieSBwcmludGluZyBhbmQgbWFpbGluZyB0bzpcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2JuLWFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2JuLWFkZHJlc3MtLXN0cmVldFwiPjk3NyBDZW50ZXJ2aWxsZSBUdXJucGlrZSw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2JuLWFkZHJlc3MtLWNpdHktc3RhdGUtemlwXCI+VmlyZ2luaWEgQmVhY2gsIFZBICAyMzQ2MzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGVcIj5Tb21lIFRpdGxlPC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ2l2aW5nLWxpbmtzXCIgaHJlZj1cImh0dHBzOi8vd3d3LmNibi5jb20vZ2l2aW5nLzcwMGNsdWIvcGxlZGdlRXhwcmVzcy5hc3B4XCI+UGxlZGdlIEdpdmluZzwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ2l2aW5nLWxpbmtzXCIgaHJlZj1cImh0dHA6Ly93d3cuY2JubGVnYWN5Lm9yZy9cIj5QbGFubmVkIEdpdmluZyAmIFlvdXIgTGVnYWN5PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJnaXZpbmctbGlua3NcIiBocmVmPVwiaHR0cHM6Ly93d3cuY2JuLmNvbS9naXZpbmcvbGl2aW5ndHJpYnV0ZXMvXCI+TWVtb3JpYWwgJiBUcmlidXRlIEdpZnRzPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJnaXZpbmctbGlua3NcIiBocmVmPVwiaHR0cHM6Ly93d3cuY2JuLmNvbS9wYXJ0bmVycy9tYXRjaGluZ2dpZnRzLmFzcHhcIj5FbXBsb3llciBNYXRjaGluZzwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ2l2aW5nLWxpbmtzXCIgaHJlZj1cImh0dHBzOi8vd3d3LmNibi5jb20vZ2l2aW5nLzcwMGNsdWIvc3RvY2tnaWZ0cy5hc3B4XCI+U3RvY2sgR2lmdHM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdpdmluZy1saW5rc1wiIGhyZWY9XCJodHRwczovL3d3dy5jYm4uY29tL2dpdmluZy83MDBjbHViL3dvcmtwbGFjZWdpdmluZy5hc3B4XCI+V29ya3BsYWNlIEdpdmluZzwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9DYXJkQ29udGFpbmVyPlxuICAgIDwvQ2FyZFNlY3Rpb24+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE90aGVyR2l2aW5nQmxvY2siXX0= */"
});
var Card = (0, _styledBase.default)("div", {
  target: "edg7qd82",
  label: "Card"
})("development" === "production" ? {
  name: "ka267x",
  styles: "&.card{height:250px;flex:0 1 380px;display:flex;flex-direction:column;justify-content:flex-start;box-shadow:0 2px 4px 0 rgba(0,0,0,0.1);color:#3B3B3B;}&.card + &.card{margin-left:10px;}h4.card__title{font-weight:bold;font-size:22px;margin:0;padding:10px 0;text-align:center;flex:0 0 auto;background-color:#E1E5E8;}div.card__body{padding:10px;flex:1 1 auto;background-color:#ECEFF1;display:flex;flex-direction:column;justify-content:space-around;align-items:center;.mail-in-form,.cbn-address,.giving-links,.phone--info{text-align:center;@media screen and (max-width:739px){font-size:16px;a,.cbn-address--street,.cbn-address--city-state-zip{font-size:16px;}}@media screen and (max-width:623px){font-size:19px;a,.cbn-address--street,.cbn-address--city-state-zip{font-size:19px;}}}.phone{text-align:center;a{cursor:pointer;font-size:28px;color:#3b3b3b;text-decoration:none;}}}a{color:#009BDF;text-decoration:none;text-align:center;&:hover,&:active,&:focus{text-decoration:underline;color:#0069AD;}}@media screen and (max-width:623px){&.card{margin:0 auto;}&.card + &.card{margin:0 auto;margin-top:20px;}}"
} : {
  name: "ka267x",
  styles: "&.card{height:250px;flex:0 1 380px;display:flex;flex-direction:column;justify-content:flex-start;box-shadow:0 2px 4px 0 rgba(0,0,0,0.1);color:#3B3B3B;}&.card + &.card{margin-left:10px;}h4.card__title{font-weight:bold;font-size:22px;margin:0;padding:10px 0;text-align:center;flex:0 0 auto;background-color:#E1E5E8;}div.card__body{padding:10px;flex:1 1 auto;background-color:#ECEFF1;display:flex;flex-direction:column;justify-content:space-around;align-items:center;.mail-in-form,.cbn-address,.giving-links,.phone--info{text-align:center;@media screen and (max-width:739px){font-size:16px;a,.cbn-address--street,.cbn-address--city-state-zip{font-size:16px;}}@media screen and (max-width:623px){font-size:19px;a,.cbn-address--street,.cbn-address--city-state-zip{font-size:19px;}}}.phone{text-align:center;a{cursor:pointer;font-size:28px;color:#3b3b3b;text-decoration:none;}}}a{color:#009BDF;text-decoration:none;text-align:center;&:hover,&:active,&:focus{text-decoration:underline;color:#0069AD;}}@media screen and (max-width:623px){&.card{margin:0 auto;}&.card + &.card{margin:0 auto;margin-top:20px;}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk90aGVyR2l2aW5nQmxvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJ1QiIsImZpbGUiOiJPdGhlckdpdmluZ0Jsb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IENhcmRTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgcGFkZGluZzogMzBweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyM3B4KSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNFQ0VGRjE7XG4gICAgfVxuYFxuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnaC1pdGVtczogY2VudGVyO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyM3B4KSB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG5gXG5cbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICAgICYuY2FyZCB7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIGZsZXg6IDAgMSAzODBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgIGNvbG9yOiAjM0IzQjNCO1xuICAgIH1cbiAgICAmLmNhcmQgKyAmLmNhcmQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gICAgaDQuY2FyZF9fdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFFNUU4O1xuICAgIH1cbiAgICBkaXYuY2FyZF9fYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFRkYxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLm1haWwtaW4tZm9ybSwgLmNibi1hZGRyZXNzLCAuZ2l2aW5nLWxpbmtzLCAucGhvbmUtLWluZm8ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM5cHgpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgYSwgLmNibi1hZGRyZXNzLS1zdHJlZXQsIC5jYm4tYWRkcmVzcy0tY2l0eS1zdGF0ZS16aXAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIzcHgpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgICAgICAgYSwgLmNibi1hZGRyZXNzLS1zdHJlZXQsIC5jYm4tYWRkcmVzcy0tY2l0eS1zdGF0ZS16aXAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5waG9uZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjM2IzYjNiO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGEge1xuICAgICAgICBjb2xvcjogIzAwOUJERjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgY29sb3I6ICMwMDY5QUQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIzcHgpIHtcbiAgICAgICAgJi5jYXJkIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgICYuY2FyZCArICYuY2FyZCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5gXG5cbmNvbnN0IE90aGVyR2l2aW5nQmxvY2sgPSAoKSA9PiAoXG4gICAgPENhcmRTZWN0aW9uPlxuICAgICAgICA8Q2FyZENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGVcIj5HaXZlIEJ5IFBob25lPC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZVwiPjxhIGhyZWY9XCJ0ZWw6MTgwMDcwMDcwMDBcIj4xLTgwMC03MDAtNzAwMDwvYT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZS0taW5mb1wiPkRvbmF0ZSBieSBwaG9uZSBvciBnZXQgYXNzaXN0YW5jZSB3aXRoIHlvdXIgZG9uYXRpb24uPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmRfX3RpdGxlXCI+TWFpbC1JbiBHaXZpbmcgRm9ybTwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbC1pbi1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUbyBkb25hdGUgYnkgY2hlY2sgb3IgdG8gYSBzcGVjaWZpYyBjYXVzZSwgcGxlYXNlIGNvbXBsZXRlIHRoaXMgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmNibi5jb20vZ2l2aW5nLzcwMGNsdWIvb3B0aW9uLmFzcHg/bz00XCI+ZG9uYXRpb24gZm9ybTwvYT4gYnkgcHJpbnRpbmcgYW5kIG1haWxpbmcgdG86XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNibi1hZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNibi1hZGRyZXNzLS1zdHJlZXRcIj45NzcgQ2VudGVydmlsbGUgVHVybnBpa2UsPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNibi1hZGRyZXNzLS1jaXR5LXN0YXRlLXppcFwiPlZpcmdpbmlhIEJlYWNoLCBWQSAgMjM0NjM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmRfX3RpdGxlXCI+U29tZSBUaXRsZTwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdpdmluZy1saW5rc1wiIGhyZWY9XCJodHRwczovL3d3dy5jYm4uY29tL2dpdmluZy83MDBjbHViL3BsZWRnZUV4cHJlc3MuYXNweFwiPlBsZWRnZSBHaXZpbmc8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdpdmluZy1saW5rc1wiIGhyZWY9XCJodHRwOi8vd3d3LmNibmxlZ2FjeS5vcmcvXCI+UGxhbm5lZCBHaXZpbmcgJiBZb3VyIExlZ2FjeTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ2l2aW5nLWxpbmtzXCIgaHJlZj1cImh0dHBzOi8vd3d3LmNibi5jb20vZ2l2aW5nL2xpdmluZ3RyaWJ1dGVzL1wiPk1lbW9yaWFsICYgVHJpYnV0ZSBHaWZ0czwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ2l2aW5nLWxpbmtzXCIgaHJlZj1cImh0dHBzOi8vd3d3LmNibi5jb20vcGFydG5lcnMvbWF0Y2hpbmdnaWZ0cy5hc3B4XCI+RW1wbG95ZXIgTWF0Y2hpbmc8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdpdmluZy1saW5rc1wiIGhyZWY9XCJodHRwczovL3d3dy5jYm4uY29tL2dpdmluZy83MDBjbHViL3N0b2NrZ2lmdHMuYXNweFwiPlN0b2NrIEdpZnRzPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJnaXZpbmctbGlua3NcIiBocmVmPVwiaHR0cHM6Ly93d3cuY2JuLmNvbS9naXZpbmcvNzAwY2x1Yi93b3JrcGxhY2VnaXZpbmcuYXNweFwiPldvcmtwbGFjZSBHaXZpbmc8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvQ2FyZENvbnRhaW5lcj5cbiAgICA8L0NhcmRTZWN0aW9uPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBPdGhlckdpdmluZ0Jsb2NrIl19 */"
});

var OtherGivingBlock = function OtherGivingBlock() {
  return (0, _core.jsx)(CardSection, null, (0, _core.jsx)(CardContainer, null, (0, _core.jsx)(Card, {
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
  }, "Donate by phone or get assistance with your donation."))), (0, _core.jsx)(Card, {
    className: "card"
  }, (0, _core.jsx)("h4", {
    className: "card__title"
  }, "Mail-In Giving Form"), (0, _core.jsx)("div", {
    className: "card__body"
  }, (0, _core.jsx)("div", {
    className: "mail-in-form"
  }, "To donate by check or to a specific cause, please complete this ", (0, _core.jsx)("a", {
    href: "https://www.cbn.com/giving/700club/option.aspx?o=4"
  }, "donation form"), " by printing and mailing to:"), (0, _core.jsx)("div", {
    className: "cbn-address"
  }, (0, _core.jsx)("div", {
    className: "cbn-address--street"
  }, "977 Centerville Turnpike,"), (0, _core.jsx)("div", {
    className: "cbn-address--city-state-zip"
  }, "Virginia Beach, VA  23463")))), (0, _core.jsx)(Card, {
    className: "card"
  }, (0, _core.jsx)("h4", {
    className: "card__title"
  }, "Some Title"), (0, _core.jsx)("div", {
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

var _default = OtherGivingBlock;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CardSection, "CardSection", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/OtherGivingBlock.js");
  reactHotLoader.register(CardContainer, "CardContainer", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/OtherGivingBlock.js");
  reactHotLoader.register(Card, "Card", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/OtherGivingBlock.js");
  reactHotLoader.register(OtherGivingBlock, "OtherGivingBlock", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/OtherGivingBlock.js");
  reactHotLoader.register(_default, "default", "/Users/wehand/Code/react-form-drupal/src/Components/FormComponents/Blocks/OtherGivingBlock.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
},{"@emotion/styled-base":"node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js","@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js"}],"src/Components/Forms/AskForm.js":[function(require,module,exports) {
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

var _FormWrapper = _interopRequireDefault(require("../StyledComponents/FormWrapper"));

var _ClubLayout = _interopRequireDefault(require("../FormComponents/Layouts/ClubLayout"));

var _PartnershipBlock = _interopRequireDefault(require("../FormComponents/Blocks/PartnershipBlock"));

var _DesignationBlock = _interopRequireDefault(require("../FormComponents/Blocks/DesignationBlock"));

var _FormPanel = _interopRequireDefault(require("../FormComponents/StyledComponents/FormPanel"));

var _FieldSet = _interopRequireDefault(require("../FormComponents/StyledComponents/FieldSet"));

var _FormHeader = _interopRequireDefault(require("../FormComponents/StyledComponents/FormHeader"));

var _Seals = _interopRequireDefault(require("../FormComponents/Seals"));

var _SubmitButton = _interopRequireDefault(require("../FormComponents/SubmitButton"));

require("../FormComponents/Animations/designations.css");

var _OtherGivingBlock = _interopRequireDefault(require("../FormComponents/Blocks/OtherGivingBlock"));

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
      monthlyChecked: _this.props.defaultOption == "monthly"
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

                _this.context.submitAskForm({
                  type: "SUBMIT_ASK_FORM"
                });

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
          selected = _this$context.selected;
      var hasErrors = Object.values(errors).filter(function (val) {
        return val && val.length > 0;
      }).length > 0;
      return !selected ? (0, _core.jsx)(_react.default.Fragment, null, (0, _core.jsx)(_FormWrapper.default, {
        style: {
          maxWidth: "818px",
          margin: "0 auto"
        }
      }, (0, _core.jsx)("form", {
        id: "react-club-ask-form",
        autoComplete: "off",
        onSubmit: this.handleSubmit,
        style: {
          backgroundColor: "white"
        }
      }, (0, _core.jsx)(_FormHeader.default, {
        className: "form-title form-header",
        style: {
          fontSize: "19px",
          marginTop: "0"
        }
      }, formTitle), (0, _core.jsx)(_PartnershipBlock.default, {
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
      }))))), (0, _core.jsx)(_Seals.default, null), (0, _core.jsx)(_OtherGivingBlock.default, null)) : null;
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
},{"@babel/runtime/regenerator":"node_modules/@babel/runtime/regenerator/index.js","@babel/runtime/helpers/asyncToGenerator":"node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/inherits":"node_modules/@babel/runtime/helpers/inherits.js","@emotion/core":"node_modules/@emotion/core/dist/core.browser.esm.js","react-hot-loader":"node_modules/react-hot-loader/index.js","react":"node_modules/react/index.js","react-transition-group":"node_modules/react-transition-group/esm/index.js","../Contexts/GivingFormProvider":"src/Components/Contexts/GivingFormProvider.js","../StyledComponents/FormWrapper":"src/Components/StyledComponents/FormWrapper.js","../FormComponents/Layouts/ClubLayout":"src/Components/FormComponents/Layouts/ClubLayout.js","../FormComponents/Blocks/PartnershipBlock":"src/Components/FormComponents/Blocks/PartnershipBlock.js","../FormComponents/Blocks/DesignationBlock":"src/Components/FormComponents/Blocks/DesignationBlock.js","../FormComponents/StyledComponents/FormPanel":"src/Components/FormComponents/StyledComponents/FormPanel.js","../FormComponents/StyledComponents/FieldSet":"src/Components/FormComponents/StyledComponents/FieldSet.js","../FormComponents/StyledComponents/FormHeader":"src/Components/FormComponents/StyledComponents/FormHeader.js","../FormComponents/Seals":"src/Components/FormComponents/Seals.js","../FormComponents/SubmitButton":"src/Components/FormComponents/SubmitButton.js","../FormComponents/Animations/designations.css":"src/Components/FormComponents/Animations/designations.css","../FormComponents/Blocks/OtherGivingBlock":"src/Components/FormComponents/Blocks/OtherGivingBlock.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/AskForm.02eb8dbc.js.map