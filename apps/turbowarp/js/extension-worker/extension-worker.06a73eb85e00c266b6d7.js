/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/babel-loader/lib/index.js?!./node_modules/scratch-vm/src/extension-support/extension-worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/scratch-vm/src/extension-support/extension-worker.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./node_modules/scratch-vm/src/extension-support/extension-worker.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* eslint-env worker */
const ScratchCommon = __webpack_require__(/*! ./tw-extension-api-common */ "./node_modules/scratch-vm/src/extension-support/tw-extension-api-common.js");

const createScratchX = __webpack_require__(/*! ./tw-scratchx-compatibility-layer */ "./node_modules/scratch-vm/src/extension-support/tw-scratchx-compatibility-layer.js");

const dispatch = __webpack_require__(/*! ../dispatch/worker-dispatch */ "./node_modules/scratch-vm/src/dispatch/worker-dispatch.js");

const log = __webpack_require__(/*! ../util/log */ "./node_modules/scratch-vm/src/util/log.js");

const {
  isWorker
} = __webpack_require__(/*! ./tw-extension-worker-context */ "./node_modules/scratch-vm/src/extension-support/tw-extension-worker-context.js");

const createTranslate = __webpack_require__(/*! ./tw-l10n */ "./node_modules/scratch-vm/src/extension-support/tw-l10n.js");

const translate = createTranslate(null);

const loadScripts = url => {
  if (isWorker) {
    importScripts(url);
  } else {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');

      script.onload = () => resolve();

      script.onerror = () => {
        reject(new Error("Error in sandboxed script: ".concat(url, ". Check the console for more information.")));
      };

      script.src = url;
      document.body.appendChild(script);
    });
  }
};

class ExtensionWorker {
  constructor() {
    this.nextExtensionId = 0;
    this.initialRegistrations = [];
    this.firstRegistrationPromise = new Promise(resolve => {
      this.firstRegistrationCallback = resolve;
    });
    dispatch.waitForConnection.then(() => {
      dispatch.call('extensions', 'allocateWorker').then(async x => {
        const [id, extension] = x;
        this.workerId = id;

        try {
          await loadScripts(extension);
          await this.firstRegistrationPromise;
          const initialRegistrations = this.initialRegistrations;
          this.initialRegistrations = null;
          Promise.all(initialRegistrations).then(() => dispatch.call('extensions', 'onWorkerInit', id));
        } catch (e) {
          log.error(e);
          dispatch.call('extensions', 'onWorkerInit', id, "".concat(e));
        }
      });
    });
    this.extensions = [];
  }

  register(extensionObject) {
    const extensionId = this.nextExtensionId++;
    this.extensions.push(extensionObject);
    const serviceName = "extension.".concat(this.workerId, ".").concat(extensionId);
    const promise = dispatch.setService(serviceName, extensionObject).then(() => dispatch.call('extensions', 'registerExtensionService', serviceName));

    if (this.initialRegistrations) {
      this.firstRegistrationCallback();
      this.initialRegistrations.push(promise);
    }

    return promise;
  }

}

global.Scratch = global.Scratch || {};
Object.assign(global.Scratch, ScratchCommon, {
  canFetch: () => Promise.resolve(true),
  fetch: function (_fetch) {
    function fetch(_x, _x2) {
      return _fetch.apply(this, arguments);
    }

    fetch.toString = function () {
      return _fetch.toString();
    };

    return fetch;
  }((url, options) => fetch(url, options)),
  canOpenWindow: () => Promise.resolve(false),
  openWindow: () => Promise.reject(new Error('Scratch.openWindow not supported in sandboxed extensions')),
  canRedirect: () => Promise.resolve(false),
  redirect: () => Promise.reject(new Error('Scratch.redirect not supported in sandboxed extensions')),
  canRecordAudio: () => Promise.resolve(false),
  canRecordVideo: () => Promise.resolve(false),
  canReadClipboard: () => Promise.resolve(false),
  canNotify: () => Promise.resolve(false),
  canGeolocate: () => Promise.resolve(false),
  canEmbed: () => Promise.resolve(false),
  translate
});
/**
 * Expose only specific parts of the worker to extensions.
 */

const extensionWorker = new ExtensionWorker();
global.Scratch.extensions = {
  register: extensionWorker.register.bind(extensionWorker)
};
global.ScratchExtensions = createScratchX(global.Scratch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/format-message-formats/index.js":
/*!******************************************************!*\
  !*** ./node_modules/format-message-formats/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// @flow
var LONG = 'long'
var SHORT = 'short'
var NARROW = 'narrow'
var NUMERIC = 'numeric'
var TWODIGIT = '2-digit'

/**
 * formatting information
 **/
module.exports = {
  number: {
    decimal: {
      style: 'decimal'
    },
    integer: {
      style: 'decimal',
      maximumFractionDigits: 0
    },
    currency: {
      style: 'currency',
      currency: 'USD'
    },
    percent: {
      style: 'percent'
    },
    default: {
      style: 'decimal'
    }
  },
  date: {
    short: {
      month: NUMERIC,
      day: NUMERIC,
      year: TWODIGIT
    },
    medium: {
      month: SHORT,
      day: NUMERIC,
      year: NUMERIC
    },
    long: {
      month: LONG,
      day: NUMERIC,
      year: NUMERIC
    },
    full: {
      month: LONG,
      day: NUMERIC,
      year: NUMERIC,
      weekday: LONG
    },
    default: {
      month: SHORT,
      day: NUMERIC,
      year: NUMERIC
    }
  },
  time: {
    short: {
      hour: NUMERIC,
      minute: NUMERIC
    },
    medium: {
      hour: NUMERIC,
      minute: NUMERIC,
      second: NUMERIC
    },
    long: {
      hour: NUMERIC,
      minute: NUMERIC,
      second: NUMERIC,
      timeZoneName: SHORT
    },
    full: {
      hour: NUMERIC,
      minute: NUMERIC,
      second: NUMERIC,
      timeZoneName: SHORT
    },
    default: {
      hour: NUMERIC,
      minute: NUMERIC,
      second: NUMERIC
    }
  },
  duration: {
    default: {
      hours: {
        minimumIntegerDigits: 1,
        maximumFractionDigits: 0
      },
      minutes: {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 0
      },
      seconds: {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 3
      }
    }
  },
  parseNumberPattern: function (pattern/*: ?string */) {
    if (!pattern) return
    var options = {}
    var currency = pattern.match(/\b[A-Z]{3}\b/i)
    var syms = pattern.replace(/[^¤]/g, '').length
    if (!syms && currency) syms = 1
    if (syms) {
      options.style = 'currency'
      options.currencyDisplay = syms === 1 ? 'symbol' : syms === 2 ? 'code' : 'name'
      options.currency = currency ? currency[0].toUpperCase() : 'USD'
    } else if (pattern.indexOf('%') >= 0) {
      options.style = 'percent'
    }
    if (!/[@#0]/.test(pattern)) return options.style ? options : undefined
    options.useGrouping = pattern.indexOf(',') >= 0
    if (/E\+?[@#0]+/i.test(pattern) || pattern.indexOf('@') >= 0) {
      var size = pattern.replace(/E\+?[@#0]+|[^@#0]/gi, '')
      options.minimumSignificantDigits = Math.min(Math.max(size.replace(/[^@0]/g, '').length, 1), 21)
      options.maximumSignificantDigits = Math.min(Math.max(size.length, 1), 21)
    } else {
      var parts = pattern.replace(/[^#0.]/g, '').split('.')
      var integer = parts[0]
      var n = integer.length - 1
      while (integer[n] === '0') --n
      options.minimumIntegerDigits = Math.min(Math.max(integer.length - 1 - n, 1), 21)
      var fraction = parts[1] || ''
      n = 0
      while (fraction[n] === '0') ++n
      options.minimumFractionDigits = Math.min(Math.max(n, 0), 20)
      while (fraction[n] === '#') ++n
      options.maximumFractionDigits = Math.min(Math.max(n, 0), 20)
    }
    return options
  },
  parseDatePattern: function (pattern/*: ?string */) {
    if (!pattern) return
    var options = {}
    for (var i = 0; i < pattern.length;) {
      var current = pattern[i]
      var n = 1
      while (pattern[++i] === current) ++n
      switch (current) {
        case 'G':
          options.era = n === 5 ? NARROW : n === 4 ? LONG : SHORT
          break
        case 'y':
        case 'Y':
          options.year = n === 2 ? TWODIGIT : NUMERIC
          break
        case 'M':
        case 'L':
          n = Math.min(Math.max(n - 1, 0), 4)
          options.month = [NUMERIC, TWODIGIT, SHORT, LONG, NARROW][n]
          break
        case 'E':
        case 'e':
        case 'c':
          options.weekday = n === 5 ? NARROW : n === 4 ? LONG : SHORT
          break
        case 'd':
        case 'D':
          options.day = n === 2 ? TWODIGIT : NUMERIC
          break
        case 'h':
        case 'K':
          options.hour12 = true
          options.hour = n === 2 ? TWODIGIT : NUMERIC
          break
        case 'H':
        case 'k':
          options.hour12 = false
          options.hour = n === 2 ? TWODIGIT : NUMERIC
          break
        case 'm':
          options.minute = n === 2 ? TWODIGIT : NUMERIC
          break
        case 's':
        case 'S':
          options.second = n === 2 ? TWODIGIT : NUMERIC
          break
        case 'z':
        case 'Z':
        case 'v':
        case 'V':
          options.timeZoneName = n === 1 ? SHORT : LONG
          break
      }
    }
    return Object.keys(options).length ? options : undefined
  }
}


/***/ }),

/***/ "./node_modules/format-message-interpret/index.js":
/*!********************************************************!*\
  !*** ./node_modules/format-message-interpret/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @flow

var formats = __webpack_require__(/*! format-message-formats */ "./node_modules/format-message-formats/index.js")
var lookupClosestLocale = __webpack_require__(/*! lookup-closest-locale */ "./node_modules/lookup-closest-locale/index.js")
var plurals = __webpack_require__(/*! ./plurals */ "./node_modules/format-message-interpret/plurals.js")

/*::
import type {
  AST,
  SubMessages
} from '../format-message-parse'
type Locale = string
type Locales = Locale | Locale[]
type Placeholder = any[] // https://github.com/facebook/flow/issues/4050
export type Type = (Placeholder, Locales) => (any, ?Object) => any
export type Types = { [string]: Type }
*/

exports = module.exports = function interpret (
  ast/*: AST */,
  locale/*:: ?: Locales */,
  types/*:: ?: Types */
)/*: (args?: Object) => string */ {
  return interpretAST(ast, null, locale || 'en', types || {}, true)
}

exports.toParts = function toParts (
  ast/*: AST */,
  locale/*:: ?: Locales */,
  types/*:: ?: Types */
)/*: (args?: Object) => any[] */ {
  return interpretAST(ast, null, locale || 'en', types || {}, false)
}

function interpretAST (
  elements/*: any[] */,
  parent/*: ?Placeholder */,
  locale/*: Locales */,
  types/*: Types */,
  join/*: boolean */
)/*: Function */ {
  var parts = elements.map(function (element) {
    return interpretElement(element, parent, locale, types, join)
  })

  if (!join) {
    return function format (args) {
      return parts.reduce(function (parts, part) {
        return parts.concat(part(args))
      }, [])
    }
  }

  if (parts.length === 1) return parts[0]
  return function format (args) {
    var message = ''
    for (var e = 0; e < parts.length; ++e) {
      message += parts[e](args)
    }
    return message
  }
}

function interpretElement (
  element/*: Placeholder */,
  parent/*: ?Placeholder */,
  locale/*: Locales */,
  types/*: Types */,
  join/*: boolean */
)/*: Function */ {
  if (typeof element === 'string') {
    var value/*: string */ = element
    return function format () { return value }
  }

  var id = element[0]
  var type = element[1]

  if (parent && element[0] === '#') {
    id = parent[0]
    var offset = parent[2]
    var formatter = (types.number || defaults.number)([id, 'number'], locale)
    return function format (args) {
      return formatter(getArg(id, args) - offset, args)
    }
  }

  // pre-process children
  var children
  if (type === 'plural' || type === 'selectordinal') {
    children = {}
    Object.keys(element[3]).forEach(function (key) {
      children[key] = interpretAST(element[3][key], element, locale, types, join)
    })
    element = [element[0], element[1], element[2], children]
  } else if (element[2] && typeof element[2] === 'object') {
    children = {}
    Object.keys(element[2]).forEach(function (key) {
      children[key] = interpretAST(element[2][key], element, locale, types, join)
    })
    element = [element[0], element[1], children]
  }

  var getFrmt = type && (types[type] || defaults[type])
  if (getFrmt) {
    var frmt = getFrmt(element, locale)
    return function format (args) {
      return frmt(getArg(id, args), args)
    }
  }

  return join
    ? function format (args) { return String(getArg(id, args)) }
    : function format (args) { return getArg(id, args) }
}

function getArg (id/*: string */, args/*: ?Object */)/*: any */ {
  if (args && (id in args)) return args[id]
  var parts = id.split('.')
  var a = args
  for (var i = 0, ii = parts.length; a && i < ii; ++i) {
    a = a[parts[i]]
  }
  return a
}

function interpretNumber (element/*: Placeholder */, locales/*: Locales */) {
  var style = element[2]
  var options = formats.number[style] || formats.parseNumberPattern(style) || formats.number.default
  return new Intl.NumberFormat(locales, options).format
}

function interpretDuration (element/*: Placeholder */, locales/*: Locales */) {
  var style = element[2]
  var options = formats.duration[style] || formats.duration.default
  var fs = new Intl.NumberFormat(locales, options.seconds).format
  var fm = new Intl.NumberFormat(locales, options.minutes).format
  var fh = new Intl.NumberFormat(locales, options.hours).format
  var sep = /^fi$|^fi-|^da/.test(String(locales)) ? '.' : ':'

  return function (s, args) {
    s = +s
    if (!isFinite(s)) return fs(s)
    var h = ~~(s / 60 / 60) // ~~ acts much like Math.trunc
    var m = ~~(s / 60 % 60)
    var dur = (h ? (fh(Math.abs(h)) + sep) : '') +
      fm(Math.abs(m)) + sep + fs(Math.abs(s % 60))
    return s < 0 ? fh(-1).replace(fh(1), dur) : dur
  }
}

function interpretDateTime (element/*: Placeholder */, locales/*: Locales */) {
  var type = element[1]
  var style = element[2]
  var options = formats[type][style] || formats.parseDatePattern(style) || formats[type].default
  return new Intl.DateTimeFormat(locales, options).format
}

function interpretPlural (element/*: Placeholder */, locales/*: Locales */) {
  var type = element[1]
  var pluralType = type === 'selectordinal' ? 'ordinal' : 'cardinal'
  var offset = element[2]
  var children = element[3]
  var pluralRules
  if (Intl.PluralRules && Intl.PluralRules.supportedLocalesOf(locales).length > 0) {
    pluralRules = new Intl.PluralRules(locales, { type: pluralType })
  } else {
    var locale = lookupClosestLocale(locales, plurals)
    var select = (locale && plurals[locale][pluralType]) || returnOther
    pluralRules = { select: select }
  }

  return function (value, args) {
    var clause =
      children['=' + +value] ||
      children[pluralRules.select(value - offset)] ||
      children.other
    return clause(args)
  }
}

function returnOther (/*:: n:number */) { return 'other' }

function interpretSelect (element/*: Placeholder */, locales/*: Locales */) {
  var children = element[2]
  return function (value, args) {
    var clause = children[value] || children.other
    return clause(args)
  }
}

var defaults/*: Types */ = {
  number: interpretNumber,
  ordinal: interpretNumber, // TODO: support rbnf
  spellout: interpretNumber, // TODO: support rbnf
  duration: interpretDuration,
  date: interpretDateTime,
  time: interpretDateTime,
  plural: interpretPlural,
  selectordinal: interpretPlural,
  select: interpretSelect
}
exports.types = defaults


/***/ }),

/***/ "./node_modules/format-message-interpret/plurals.js":
/*!**********************************************************!*\
  !*** ./node_modules/format-message-interpret/plurals.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @flow


/*:: export type Rule = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other' */
var zero = 'zero', one = 'one', two = 'two', few = 'few', many = 'many', other = 'other'
var f = [
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n === 1 ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return 0 <= n && n <= 1 ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var n = +s
    return i === 0 || n === 1 ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n === 0 ? zero
      : n === 1 ? one
      : n === 2 ? two
      : 3 <= n % 100 && n % 100 <= 10 ? few
      : 11 <= n % 100 && n % 100 <= 99 ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var v = (s + '.').split('.')[1].length
    return i === 1 && v === 0 ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n % 10 === 1 && n % 100 !== 11 ? one
      : (2 <= n % 10 && n % 10 <= 4) && (n % 100 < 12 || 14 < n % 100) ? few
      : n % 10 === 0 || (5 <= n % 10 && n % 10 <= 9) || (11 <= n % 100 && n % 100 <= 14) ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n % 10 === 1 && (n % 100 !== 11 && n % 100 !== 71 && n % 100 !== 91) ? one
      : n % 10 === 2 && (n % 100 !== 12 && n % 100 !== 72 && n % 100 !== 92) ? two
      : ((3 <= n % 10 && n % 10 <= 4) || n % 10 === 9) && ((n % 100 < 10 || 19 < n % 100) && (n % 100 < 70 || 79 < n % 100) && (n % 100 < 90 || 99 < n % 100)) ? few
      : n !== 0 && n % 1000000 === 0 ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var v = (s + '.').split('.')[1].length
    var f = +(s + '.').split('.')[1]
    return v === 0 && i % 10 === 1 && i % 100 !== 11 || f % 10 === 1 && f % 100 !== 11 ? one
      : v === 0 && (2 <= i % 10 && i % 10 <= 4) && (i % 100 < 12 || 14 < i % 100) || (2 <= f % 10 && f % 10 <= 4) && (f % 100 < 12 || 14 < f % 100) ? few
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var v = (s + '.').split('.')[1].length
    return i === 1 && v === 0 ? one
      : (2 <= i && i <= 4) && v === 0 ? few
      : v !== 0 ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n === 0 ? zero
      : n === 1 ? one
      : n === 2 ? two
      : n === 3 ? few
      : n === 6 ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var t = +('' + s).replace(/^[^.]*.?|0+$/g, '')
    var n = +s
    return n === 1 || t !== 0 && (i === 0 || i === 1) ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var v = (s + '.').split('.')[1].length
    var f = +(s + '.').split('.')[1]
    return v === 0 && i % 100 === 1 || f % 100 === 1 ? one
      : v === 0 && i % 100 === 2 || f % 100 === 2 ? two
      : v === 0 && (3 <= i % 100 && i % 100 <= 4) || (3 <= f % 100 && f % 100 <= 4) ? few
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    return i === 0 || i === 1 ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var v = (s + '.').split('.')[1].length
    var f = +(s + '.').split('.')[1]
    return v === 0 && (i === 1 || i === 2 || i === 3) || v === 0 && (i % 10 !== 4 && i % 10 !== 6 && i % 10 !== 9) || v !== 0 && (f % 10 !== 4 && f % 10 !== 6 && f % 10 !== 9) ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n === 1 ? one
      : n === 2 ? two
      : 3 <= n && n <= 6 ? few
      : 7 <= n && n <= 10 ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n === 1 || n === 11 ? one
      : n === 2 || n === 12 ? two
      : ((3 <= n && n <= 10) || (13 <= n && n <= 19)) ? few
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var v = (s + '.').split('.')[1].length
    return v === 0 && i % 10 === 1 ? one
      : v === 0 && i % 10 === 2 ? two
      : v === 0 && (i % 100 === 0 || i % 100 === 20 || i % 100 === 40 || i % 100 === 60 || i % 100 === 80) ? few
      : v !== 0 ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var v = (s + '.').split('.')[1].length
    var n = +s
    return i === 1 && v === 0 ? one
      : i === 2 && v === 0 ? two
      : v === 0 && (n < 0 || 10 < n) && n % 10 === 0 ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var t = +('' + s).replace(/^[^.]*.?|0+$/g, '')
    return t === 0 && i % 10 === 1 && i % 100 !== 11 || t !== 0 ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n === 1 ? one
      : n === 2 ? two
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n === 0 ? zero
      : n === 1 ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var n = +s
    return n === 0 ? zero
      : (i === 0 || i === 1) && n !== 0 ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var f = +(s + '.').split('.')[1]
    var n = +s
    return n % 10 === 1 && (n % 100 < 11 || 19 < n % 100) ? one
      : (2 <= n % 10 && n % 10 <= 9) && (n % 100 < 11 || 19 < n % 100) ? few
      : f !== 0 ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var v = (s + '.').split('.')[1].length
    var f = +(s + '.').split('.')[1]
    var n = +s
    return n % 10 === 0 || (11 <= n % 100 && n % 100 <= 19) || v === 2 && (11 <= f % 100 && f % 100 <= 19) ? zero
      : n % 10 === 1 && n % 100 !== 11 || v === 2 && f % 10 === 1 && f % 100 !== 11 || v !== 2 && f % 10 === 1 ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var v = (s + '.').split('.')[1].length
    var f = +(s + '.').split('.')[1]
    return v === 0 && i % 10 === 1 && i % 100 !== 11 || f % 10 === 1 && f % 100 !== 11 ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var v = (s + '.').split('.')[1].length
    var n = +s
    return i === 1 && v === 0 ? one
      : v !== 0 || n === 0 || n !== 1 && (1 <= n % 100 && n % 100 <= 19) ? few
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n === 1 ? one
      : n === 0 || (2 <= n % 100 && n % 100 <= 10) ? few
      : 11 <= n % 100 && n % 100 <= 19 ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var v = (s + '.').split('.')[1].length
    return i === 1 && v === 0 ? one
      : v === 0 && (2 <= i % 10 && i % 10 <= 4) && (i % 100 < 12 || 14 < i % 100) ? few
      : v === 0 && i !== 1 && (0 <= i % 10 && i % 10 <= 1) || v === 0 && (5 <= i % 10 && i % 10 <= 9) || v === 0 && (12 <= i % 100 && i % 100 <= 14) ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    return 0 <= i && i <= 1 ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var v = (s + '.').split('.')[1].length
    return v === 0 && i % 10 === 1 && i % 100 !== 11 ? one
      : v === 0 && (2 <= i % 10 && i % 10 <= 4) && (i % 100 < 12 || 14 < i % 100) ? few
      : v === 0 && i % 10 === 0 || v === 0 && (5 <= i % 10 && i % 10 <= 9) || v === 0 && (11 <= i % 100 && i % 100 <= 14) ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var n = +s
    return i === 0 || n === 1 ? one
      : 2 <= n && n <= 10 ? few
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var f = +(s + '.').split('.')[1]
    var n = +s
    return (n === 0 || n === 1) || i === 0 && f === 1 ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    var v = (s + '.').split('.')[1].length
    return v === 0 && i % 100 === 1 ? one
      : v === 0 && i % 100 === 2 ? two
      : v === 0 && (3 <= i % 100 && i % 100 <= 4) || v !== 0 ? few
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return (0 <= n && n <= 1) || (11 <= n && n <= 99) ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n === 1 || n === 5 || n === 7 || n === 8 || n === 9 || n === 10 ? one
      : n === 2 || n === 3 ? two
      : n === 4 ? few
      : n === 6 ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    return (i % 10 === 1 || i % 10 === 2 || i % 10 === 5 || i % 10 === 7 || i % 10 === 8) || (i % 100 === 20 || i % 100 === 50 || i % 100 === 70 || i % 100 === 80) ? one
      : (i % 10 === 3 || i % 10 === 4) || (i % 1000 === 100 || i % 1000 === 200 || i % 1000 === 300 || i % 1000 === 400 || i % 1000 === 500 || i % 1000 === 600 || i % 1000 === 700 || i % 1000 === 800 || i % 1000 === 900) ? few
      : i === 0 || i % 10 === 6 || (i % 100 === 40 || i % 100 === 60 || i % 100 === 90) ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return (n % 10 === 2 || n % 10 === 3) && (n % 100 !== 12 && n % 100 !== 13) ? few
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n === 1 || n === 3 ? one
      : n === 2 ? two
      : n === 4 ? few
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n === 0 || n === 7 || n === 8 || n === 9 ? zero
      : n === 1 ? one
      : n === 2 ? two
      : n === 3 || n === 4 ? few
      : n === 5 || n === 6 ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n % 10 === 1 && n % 100 !== 11 ? one
      : n % 10 === 2 && n % 100 !== 12 ? two
      : n % 10 === 3 && n % 100 !== 13 ? few
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n === 1 || n === 11 ? one
      : n === 2 || n === 12 ? two
      : n === 3 || n === 13 ? few
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n === 1 ? one
      : n === 2 || n === 3 ? two
      : n === 4 ? few
      : n === 6 ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n === 1 || n === 5 ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n === 11 || n === 8 || n === 80 || n === 800 ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    return i === 1 ? one
      : i === 0 || ((2 <= i % 100 && i % 100 <= 20) || i % 100 === 40 || i % 100 === 60 || i % 100 === 80) ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n % 10 === 6 || n % 10 === 9 || n % 10 === 0 && n !== 0 ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var i = Math.floor(Math.abs(+s))
    return i % 10 === 1 && i % 100 !== 11 ? one
      : i % 10 === 2 && i % 100 !== 12 ? two
      : (i % 10 === 7 || i % 10 === 8) && (i % 100 !== 17 && i % 100 !== 18) ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n === 1 ? one
      : n === 2 || n === 3 ? two
      : n === 4 ? few
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return 1 <= n && n <= 4 ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return (n === 1 || n === 5 || (7 <= n && n <= 9)) ? one
      : n === 2 || n === 3 ? two
      : n === 4 ? few
      : n === 6 ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n === 1 ? one
      : n % 10 === 4 && n % 100 !== 14 ? many
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return (n % 10 === 1 || n % 10 === 2) && (n % 100 !== 11 && n % 100 !== 12) ? one
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return (n % 10 === 6 || n % 10 === 9) || n === 10 ? few
      : other
  },
  function (s/*: string | number */)/*: Rule */ {
    var n = +s
    return n % 10 === 3 && n % 100 !== 13 ? few
      : other
  }
]

module.exports = {
  af: { cardinal: f[0] },
  ak: { cardinal: f[1] },
  am: { cardinal: f[2] },
  ar: { cardinal: f[3] },
  ars: { cardinal: f[3] },
  as: { cardinal: f[2], ordinal: f[34] },
  asa: { cardinal: f[0] },
  ast: { cardinal: f[4] },
  az: { cardinal: f[0], ordinal: f[35] },
  be: { cardinal: f[5], ordinal: f[36] },
  bem: { cardinal: f[0] },
  bez: { cardinal: f[0] },
  bg: { cardinal: f[0] },
  bh: { cardinal: f[1] },
  bn: { cardinal: f[2], ordinal: f[34] },
  br: { cardinal: f[6] },
  brx: { cardinal: f[0] },
  bs: { cardinal: f[7] },
  ca: { cardinal: f[4], ordinal: f[37] },
  ce: { cardinal: f[0] },
  cgg: { cardinal: f[0] },
  chr: { cardinal: f[0] },
  ckb: { cardinal: f[0] },
  cs: { cardinal: f[8] },
  cy: { cardinal: f[9], ordinal: f[38] },
  da: { cardinal: f[10] },
  de: { cardinal: f[4] },
  dsb: { cardinal: f[11] },
  dv: { cardinal: f[0] },
  ee: { cardinal: f[0] },
  el: { cardinal: f[0] },
  en: { cardinal: f[4], ordinal: f[39] },
  eo: { cardinal: f[0] },
  es: { cardinal: f[0] },
  et: { cardinal: f[4] },
  eu: { cardinal: f[0] },
  fa: { cardinal: f[2] },
  ff: { cardinal: f[12] },
  fi: { cardinal: f[4] },
  fil: { cardinal: f[13], ordinal: f[0] },
  fo: { cardinal: f[0] },
  fr: { cardinal: f[12], ordinal: f[0] },
  fur: { cardinal: f[0] },
  fy: { cardinal: f[4] },
  ga: { cardinal: f[14], ordinal: f[0] },
  gd: { cardinal: f[15], ordinal: f[40] },
  gl: { cardinal: f[4] },
  gsw: { cardinal: f[0] },
  gu: { cardinal: f[2], ordinal: f[41] },
  guw: { cardinal: f[1] },
  gv: { cardinal: f[16] },
  ha: { cardinal: f[0] },
  haw: { cardinal: f[0] },
  he: { cardinal: f[17] },
  hi: { cardinal: f[2], ordinal: f[41] },
  hr: { cardinal: f[7] },
  hsb: { cardinal: f[11] },
  hu: { cardinal: f[0], ordinal: f[42] },
  hy: { cardinal: f[12], ordinal: f[0] },
  ia: { cardinal: f[4] },
  io: { cardinal: f[4] },
  is: { cardinal: f[18] },
  it: { cardinal: f[4], ordinal: f[43] },
  iu: { cardinal: f[19] },
  iw: { cardinal: f[17] },
  jgo: { cardinal: f[0] },
  ji: { cardinal: f[4] },
  jmc: { cardinal: f[0] },
  ka: { cardinal: f[0], ordinal: f[44] },
  kab: { cardinal: f[12] },
  kaj: { cardinal: f[0] },
  kcg: { cardinal: f[0] },
  kk: { cardinal: f[0], ordinal: f[45] },
  kkj: { cardinal: f[0] },
  kl: { cardinal: f[0] },
  kn: { cardinal: f[2] },
  ks: { cardinal: f[0] },
  ksb: { cardinal: f[0] },
  ksh: { cardinal: f[20] },
  ku: { cardinal: f[0] },
  kw: { cardinal: f[19] },
  ky: { cardinal: f[0] },
  lag: { cardinal: f[21] },
  lb: { cardinal: f[0] },
  lg: { cardinal: f[0] },
  ln: { cardinal: f[1] },
  lt: { cardinal: f[22] },
  lv: { cardinal: f[23] },
  mas: { cardinal: f[0] },
  mg: { cardinal: f[1] },
  mgo: { cardinal: f[0] },
  mk: { cardinal: f[24], ordinal: f[46] },
  ml: { cardinal: f[0] },
  mn: { cardinal: f[0] },
  mo: { cardinal: f[25], ordinal: f[0] },
  mr: { cardinal: f[2], ordinal: f[47] },
  mt: { cardinal: f[26] },
  nah: { cardinal: f[0] },
  naq: { cardinal: f[19] },
  nb: { cardinal: f[0] },
  nd: { cardinal: f[0] },
  ne: { cardinal: f[0], ordinal: f[48] },
  nl: { cardinal: f[4] },
  nn: { cardinal: f[0] },
  nnh: { cardinal: f[0] },
  no: { cardinal: f[0] },
  nr: { cardinal: f[0] },
  nso: { cardinal: f[1] },
  ny: { cardinal: f[0] },
  nyn: { cardinal: f[0] },
  om: { cardinal: f[0] },
  or: { cardinal: f[0], ordinal: f[49] },
  os: { cardinal: f[0] },
  pa: { cardinal: f[1] },
  pap: { cardinal: f[0] },
  pl: { cardinal: f[27] },
  prg: { cardinal: f[23] },
  ps: { cardinal: f[0] },
  pt: { cardinal: f[28] },
  'pt-PT': { cardinal: f[4] },
  rm: { cardinal: f[0] },
  ro: { cardinal: f[25], ordinal: f[0] },
  rof: { cardinal: f[0] },
  ru: { cardinal: f[29] },
  rwk: { cardinal: f[0] },
  saq: { cardinal: f[0] },
  sc: { cardinal: f[4], ordinal: f[43] },
  scn: { cardinal: f[4], ordinal: f[43] },
  sd: { cardinal: f[0] },
  sdh: { cardinal: f[0] },
  se: { cardinal: f[19] },
  seh: { cardinal: f[0] },
  sh: { cardinal: f[7] },
  shi: { cardinal: f[30] },
  si: { cardinal: f[31] },
  sk: { cardinal: f[8] },
  sl: { cardinal: f[32] },
  sma: { cardinal: f[19] },
  smi: { cardinal: f[19] },
  smj: { cardinal: f[19] },
  smn: { cardinal: f[19] },
  sms: { cardinal: f[19] },
  sn: { cardinal: f[0] },
  so: { cardinal: f[0] },
  sq: { cardinal: f[0], ordinal: f[50] },
  sr: { cardinal: f[7] },
  ss: { cardinal: f[0] },
  ssy: { cardinal: f[0] },
  st: { cardinal: f[0] },
  sv: { cardinal: f[4], ordinal: f[51] },
  sw: { cardinal: f[4] },
  syr: { cardinal: f[0] },
  ta: { cardinal: f[0] },
  te: { cardinal: f[0] },
  teo: { cardinal: f[0] },
  ti: { cardinal: f[1] },
  tig: { cardinal: f[0] },
  tk: { cardinal: f[0], ordinal: f[52] },
  tl: { cardinal: f[13], ordinal: f[0] },
  tn: { cardinal: f[0] },
  tr: { cardinal: f[0] },
  ts: { cardinal: f[0] },
  tzm: { cardinal: f[33] },
  ug: { cardinal: f[0] },
  uk: { cardinal: f[29], ordinal: f[53] },
  ur: { cardinal: f[4] },
  uz: { cardinal: f[0] },
  ve: { cardinal: f[0] },
  vo: { cardinal: f[0] },
  vun: { cardinal: f[0] },
  wa: { cardinal: f[1] },
  wae: { cardinal: f[0] },
  xh: { cardinal: f[0] },
  xog: { cardinal: f[0] },
  yi: { cardinal: f[4] },
  zu: { cardinal: f[2] },
  lo: { ordinal: f[0] },
  ms: { ordinal: f[0] },
  vi: { ordinal: f[0] }
}


/***/ }),

/***/ "./node_modules/format-message-parse/index.js":
/*!****************************************************!*\
  !*** ./node_modules/format-message-parse/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @flow


/*::
export type AST = Element[]
export type Element = string | Placeholder
export type Placeholder = Plural | Styled | Typed | Simple
export type Plural = [ string, 'plural' | 'selectordinal', number, SubMessages ]
export type Styled = [ string, string, string | SubMessages ]
export type Typed = [ string, string ]
export type Simple = [ string ]
export type SubMessages = { [string]: AST }
export type Token = [ TokenType, string ]
export type TokenType = 'text' | 'space' | 'id' | 'type' | 'style' | 'offset' | 'number' | 'selector' | 'syntax'
type Context = {|
  pattern: string,
  index: number,
  tagsType: ?string,
  tokens: ?Token[]
|}
*/

var ARG_OPN = '{'
var ARG_CLS = '}'
var ARG_SEP = ','
var NUM_ARG = '#'
var TAG_OPN = '<'
var TAG_CLS = '>'
var TAG_END = '</'
var TAG_SELF_CLS = '/>'
var ESC = '\''
var OFFSET = 'offset:'
var simpleTypes = [
  'number',
  'date',
  'time',
  'ordinal',
  'duration',
  'spellout'
]
var submTypes = [
  'plural',
  'select',
  'selectordinal'
]

/**
 * parse
 *
 * Turns this:
 *  `You have { numBananas, plural,
 *       =0 {no bananas}
 *      one {a banana}
 *    other {# bananas}
 *  } for sale`
 *
 * into this:
 *  [ "You have ", [ "numBananas", "plural", 0, {
 *       "=0": [ "no bananas" ],
 *      "one": [ "a banana" ],
 *    "other": [ [ '#' ], " bananas" ]
 *  } ], " for sale." ]
 *
 * tokens:
 *  [
 *    [ "text", "You have " ],
 *    [ "syntax", "{" ],
 *    [ "space", " " ],
 *    [ "id", "numBananas" ],
 *    [ "syntax", ", " ],
 *    [ "space", " " ],
 *    [ "type", "plural" ],
 *    [ "syntax", "," ],
 *    [ "space", "\n     " ],
 *    [ "selector", "=0" ],
 *    [ "space", " " ],
 *    [ "syntax", "{" ],
 *    [ "text", "no bananas" ],
 *    [ "syntax", "}" ],
 *    [ "space", "\n    " ],
 *    [ "selector", "one" ],
 *    [ "space", " " ],
 *    [ "syntax", "{" ],
 *    [ "text", "a banana" ],
 *    [ "syntax", "}" ],
 *    [ "space", "\n  " ],
 *    [ "selector", "other" ],
 *    [ "space", " " ],
 *    [ "syntax", "{" ],
 *    [ "syntax", "#" ],
 *    [ "text", " bananas" ],
 *    [ "syntax", "}" ],
 *    [ "space", "\n" ],
 *    [ "syntax", "}" ],
 *    [ "text", " for sale." ]
 *  ]
 **/
exports = module.exports = function parse (
  pattern/*: string */,
  options/*:: ?: { tagsType?: string, tokens?: Token[] } */
)/*: AST */ {
  return parseAST({
    pattern: String(pattern),
    index: 0,
    tagsType: (options && options.tagsType) || null,
    tokens: (options && options.tokens) || null
  }, '')
}

function parseAST (current/*: Context */, parentType/*: string */)/*: AST */ {
  var pattern = current.pattern
  var length = pattern.length
  var elements/*: AST */ = []
  var start = current.index
  var text = parseText(current, parentType)
  if (text) elements.push(text)
  if (text && current.tokens) current.tokens.push(['text', pattern.slice(start, current.index)])
  while (current.index < length) {
    if (pattern[current.index] === ARG_CLS) {
      if (!parentType) throw expected(current)
      break
    }
    if (parentType && current.tagsType && pattern.slice(current.index, current.index + TAG_END.length) === TAG_END) break
    elements.push(parsePlaceholder(current))
    start = current.index
    text = parseText(current, parentType)
    if (text) elements.push(text)
    if (text && current.tokens) current.tokens.push(['text', pattern.slice(start, current.index)])
  }
  return elements
}

function parseText (current/*: Context */, parentType/*: string */)/*: string */ {
  var pattern = current.pattern
  var length = pattern.length
  var isHashSpecial = (parentType === 'plural' || parentType === 'selectordinal')
  var isAngleSpecial = !!current.tagsType
  var isArgStyle = (parentType === '{style}')
  var text = ''
  while (current.index < length) {
    var char = pattern[current.index]
    if (
      char === ARG_OPN || char === ARG_CLS ||
      (isHashSpecial && char === NUM_ARG) ||
      (isAngleSpecial && char === TAG_OPN) ||
      (isArgStyle && isWhitespace(char.charCodeAt(0)))
    ) {
      break
    } else if (char === ESC) {
      char = pattern[++current.index]
      if (char === ESC) { // double is always 1 '
        text += char
        ++current.index
      } else if (
        // only when necessary
        char === ARG_OPN || char === ARG_CLS ||
        (isHashSpecial && char === NUM_ARG) ||
        (isAngleSpecial && char === TAG_OPN) ||
        isArgStyle
      ) {
        text += char
        while (++current.index < length) {
          char = pattern[current.index]
          if (char === ESC && pattern[current.index + 1] === ESC) { // double is always 1 '
            text += ESC
            ++current.index
          } else if (char === ESC) { // end of quoted
            ++current.index
            break
          } else {
            text += char
          }
        }
      } else { // lone ' is just a '
        text += ESC
        // already incremented
      }
    } else {
      text += char
      ++current.index
    }
  }
  return text
}

function isWhitespace (code/*: number */)/*: boolean */ {
  return (
    (code >= 0x09 && code <= 0x0D) ||
    code === 0x20 || code === 0x85 || code === 0xA0 || code === 0x180E ||
    (code >= 0x2000 && code <= 0x200D) ||
    code === 0x2028 || code === 0x2029 || code === 0x202F || code === 0x205F ||
    code === 0x2060 || code === 0x3000 || code === 0xFEFF
  )
}

function skipWhitespace (current/*: Context */)/*: void */ {
  var pattern = current.pattern
  var length = pattern.length
  var start = current.index
  while (current.index < length && isWhitespace(pattern.charCodeAt(current.index))) {
    ++current.index
  }
  if (start < current.index && current.tokens) {
    current.tokens.push(['space', current.pattern.slice(start, current.index)])
  }
}

function parsePlaceholder (current/*: Context */)/*: Placeholder */ {
  var pattern = current.pattern
  if (pattern[current.index] === NUM_ARG) {
    if (current.tokens) current.tokens.push(['syntax', NUM_ARG])
    ++current.index // move passed #
    return [NUM_ARG]
  }

  var tag = parseTag(current)
  if (tag) return tag

  /* istanbul ignore if should be unreachable if parseAST and parseText are right */
  if (pattern[current.index] !== ARG_OPN) throw expected(current, ARG_OPN)
  if (current.tokens) current.tokens.push(['syntax', ARG_OPN])
  ++current.index // move passed {
  skipWhitespace(current)

  var id = parseId(current)
  if (!id) throw expected(current, 'placeholder id')
  if (current.tokens) current.tokens.push(['id', id])
  skipWhitespace(current)

  var char = pattern[current.index]
  if (char === ARG_CLS) { // end placeholder
    if (current.tokens) current.tokens.push(['syntax', ARG_CLS])
    ++current.index // move passed }
    return [id]
  }

  if (char !== ARG_SEP) throw expected(current, ARG_SEP + ' or ' + ARG_CLS)
  if (current.tokens) current.tokens.push(['syntax', ARG_SEP])
  ++current.index // move passed ,
  skipWhitespace(current)

  var type = parseId(current)
  if (!type) throw expected(current, 'placeholder type')
  if (current.tokens) current.tokens.push(['type', type])
  skipWhitespace(current)
  char = pattern[current.index]
  if (char === ARG_CLS) { // end placeholder
    if (current.tokens) current.tokens.push(['syntax', ARG_CLS])
    if (type === 'plural' || type === 'selectordinal' || type === 'select') {
      throw expected(current, type + ' sub-messages')
    }
    ++current.index // move passed }
    return [id, type]
  }

  if (char !== ARG_SEP) throw expected(current, ARG_SEP + ' or ' + ARG_CLS)
  if (current.tokens) current.tokens.push(['syntax', ARG_SEP])
  ++current.index // move passed ,
  skipWhitespace(current)

  var arg
  if (type === 'plural' || type === 'selectordinal') {
    var offset = parsePluralOffset(current)
    skipWhitespace(current)
    arg = [id, type, offset, parseSubMessages(current, type)]
  } else if (type === 'select') {
    arg = [id, type, parseSubMessages(current, type)]
  } else if (simpleTypes.indexOf(type) >= 0) {
    arg = [id, type, parseSimpleFormat(current)]
  } else { // custom placeholder type
    var index = current.index
    var format/*: string | SubMessages */ = parseSimpleFormat(current)
    skipWhitespace(current)
    if (pattern[current.index] === ARG_OPN) {
      current.index = index // rewind, since should have been submessages
      format = parseSubMessages(current, type)
    }
    arg = [id, type, format]
  }

  skipWhitespace(current)
  if (pattern[current.index] !== ARG_CLS) throw expected(current, ARG_CLS)
  if (current.tokens) current.tokens.push(['syntax', ARG_CLS])
  ++current.index // move passed }
  return arg
}

function parseTag (current/*: Context */)/*: ?Placeholder */ {
  var tagsType = current.tagsType
  if (!tagsType || current.pattern[current.index] !== TAG_OPN) return

  if (current.pattern.slice(current.index, current.index + TAG_END.length) === TAG_END) {
    throw expected(current, null, 'closing tag without matching opening tag')
  }
  if (current.tokens) current.tokens.push(['syntax', TAG_OPN])
  ++current.index // move passed <

  var id = parseId(current, true)
  if (!id) throw expected(current, 'placeholder id')
  if (current.tokens) current.tokens.push(['id', id])
  skipWhitespace(current)

  if (current.pattern.slice(current.index, current.index + TAG_SELF_CLS.length) === TAG_SELF_CLS) {
    if (current.tokens) current.tokens.push(['syntax', TAG_SELF_CLS])
    current.index += TAG_SELF_CLS.length
    return [id, tagsType]
  }
  if (current.pattern[current.index] !== TAG_CLS) throw expected(current, TAG_CLS)
  if (current.tokens) current.tokens.push(['syntax', TAG_CLS])
  ++current.index // move passed >

  var children = parseAST(current, tagsType)

  var end = current.index
  if (current.pattern.slice(current.index, current.index + TAG_END.length) !== TAG_END) throw expected(current, TAG_END + id + TAG_CLS)
  if (current.tokens) current.tokens.push(['syntax', TAG_END])
  current.index += TAG_END.length
  var closeId = parseId(current, true)
  if (closeId && current.tokens) current.tokens.push(['id', closeId])
  if (id !== closeId) {
    current.index = end // rewind for better error message
    throw expected(current, TAG_END + id + TAG_CLS, TAG_END + closeId + TAG_CLS)
  }
  skipWhitespace(current)
  if (current.pattern[current.index] !== TAG_CLS) throw expected(current, TAG_CLS)
  if (current.tokens) current.tokens.push(['syntax', TAG_CLS])
  ++current.index // move passed >

  return [id, tagsType, { children: children }]
}

function parseId (current/*: Context */, isTag/*:: ?: boolean */)/*: string */ {
  var pattern = current.pattern
  var length = pattern.length
  var id = ''
  while (current.index < length) {
    var char = pattern[current.index]
    if (
      char === ARG_OPN || char === ARG_CLS || char === ARG_SEP ||
      char === NUM_ARG || char === ESC || isWhitespace(char.charCodeAt(0)) ||
      (isTag && (char === TAG_OPN || char === TAG_CLS || char === '/'))
    ) break
    id += char
    ++current.index
  }
  return id
}

function parseSimpleFormat (current/*: Context */)/*: string */ {
  var start = current.index
  var style = parseText(current, '{style}')
  if (!style) throw expected(current, 'placeholder style name')
  if (current.tokens) current.tokens.push(['style', current.pattern.slice(start, current.index)])
  return style
}

function parsePluralOffset (current/*: Context */)/*: number */ {
  var pattern = current.pattern
  var length = pattern.length
  var offset = 0
  if (pattern.slice(current.index, current.index + OFFSET.length) === OFFSET) {
    if (current.tokens) current.tokens.push(['offset', 'offset'], ['syntax', ':'])
    current.index += OFFSET.length // move passed offset:
    skipWhitespace(current)
    var start = current.index
    while (current.index < length && isDigit(pattern.charCodeAt(current.index))) {
      ++current.index
    }
    if (start === current.index) throw expected(current, 'offset number')
    if (current.tokens) current.tokens.push(['number', pattern.slice(start, current.index)])
    offset = +pattern.slice(start, current.index)
  }
  return offset
}

function isDigit (code/*: number */)/*: boolean */ {
  return (code >= 0x30 && code <= 0x39)
}

function parseSubMessages (current/*: Context */, parentType/*: string */)/*: SubMessages */ {
  var pattern = current.pattern
  var length = pattern.length
  var options/*: SubMessages */ = {}
  while (current.index < length && pattern[current.index] !== ARG_CLS) {
    var selector = parseId(current)
    if (!selector) throw expected(current, 'sub-message selector')
    if (current.tokens) current.tokens.push(['selector', selector])
    skipWhitespace(current)
    options[selector] = parseSubMessage(current, parentType)
    skipWhitespace(current)
  }
  if (!options.other && submTypes.indexOf(parentType) >= 0) {
    throw expected(current, null, null, '"other" sub-message must be specified in ' + parentType)
  }
  return options
}

function parseSubMessage (current/*: Context */, parentType/*: string */)/*: AST */ {
  if (current.pattern[current.index] !== ARG_OPN) throw expected(current, ARG_OPN + ' to start sub-message')
  if (current.tokens) current.tokens.push(['syntax', ARG_OPN])
  ++current.index // move passed {
  var message = parseAST(current, parentType)
  if (current.pattern[current.index] !== ARG_CLS) throw expected(current, ARG_CLS + ' to end sub-message')
  if (current.tokens) current.tokens.push(['syntax', ARG_CLS])
  ++current.index // move passed }
  return message
}

function expected (current/*: Context */, expected/*:: ?: ?string */, found/*:: ?: ?string */, message/*:: ?: string */) {
  var pattern = current.pattern
  var lines = pattern.slice(0, current.index).split(/\r?\n/)
  var offset = current.index
  var line = lines.length
  var column = lines.slice(-1)[0].length
  found = found || (
    (current.index >= pattern.length) ? 'end of message pattern'
      : (parseId(current) || pattern[current.index])
  )
  if (!message) message = errorMessage(expected, found)
  message += ' in ' + pattern.replace(/\r?\n/g, '\n')
  return new SyntaxError(message, expected, found, offset, line, column)
}

function errorMessage (expected/*: ?string */, found/* string */) {
  if (!expected) return 'Unexpected ' + found + ' found'
  return 'Expected ' + expected + ' but found ' + found
}

/**
 * SyntaxError
 *  Holds information about bad syntax found in a message pattern
 **/
function SyntaxError (message/*: string */, expected/*: ?string */, found/*: ?string */, offset/*: number */, line/*: number */, column/*: number */) {
  Error.call(this, message)
  this.name = 'SyntaxError'
  this.message = message
  this.expected = expected
  this.found = found
  this.offset = offset
  this.line = line
  this.column = column
}
SyntaxError.prototype = Object.create(Error.prototype)
exports.SyntaxError = SyntaxError


/***/ }),

/***/ "./node_modules/format-message/index.js":
/*!**********************************************!*\
  !*** ./node_modules/format-message/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @flow

var parse = __webpack_require__(/*! format-message-parse */ "./node_modules/format-message-parse/index.js")
var interpret = __webpack_require__(/*! format-message-interpret */ "./node_modules/format-message-interpret/index.js")
var plurals = __webpack_require__(/*! format-message-interpret/plurals */ "./node_modules/format-message-interpret/plurals.js")
var lookupClosestLocale = __webpack_require__(/*! lookup-closest-locale */ "./node_modules/lookup-closest-locale/index.js")
var origFormats = __webpack_require__(/*! format-message-formats */ "./node_modules/format-message-formats/index.js")

/*::
import type { Types } from 'format-message-interpret'
type Locale = string
type Locales = Locale | Locale[]
type Message = string | {|
  id?: string,
  default: string,
  description?: string
|}
type Translations = { [string]: ?{ [string]: string | Translation } }
type Translation = {
  message: string,
  format?: (args?: Object) => string,
  toParts?: (args?: Object) => any[],
}
type Replacement = ?string | (string, string, locales?: Locales) => ?string
type GenerateId = (string) => string
type MissingTranslation = 'ignore' | 'warning' | 'error'
type FormatObject = { [string]: * }
type Options = {
  locale?: Locales,
  translations?: ?Translations,
  generateId?: GenerateId,
  missingReplacement?: Replacement,
  missingTranslation?: MissingTranslation,
  formats?: {
    number?: FormatObject,
    date?: FormatObject,
    time?: FormatObject
  },
  types?: Types
}
type Setup = {|
  locale: Locales,
  translations: Translations,
  generateId: GenerateId,
  missingReplacement: Replacement,
  missingTranslation: MissingTranslation,
  formats: {
    number: FormatObject,
    date: FormatObject,
    time: FormatObject
  },
  types: Types
|}
type FormatMessage = {
  (msg: Message, args?: Object, locales?: Locales): string,
  rich (msg: Message, args?: Object, locales?: Locales): any[],
  setup (opt?: Options): Setup,
  number (value: number, style?: string, locales?: Locales): string,
  date (value: number | Date, style?: string, locales?: Locales): string,
  time (value: number | Date, style?: string, locales?: Locales): string,
  select (value: any, options: Object): any,
  custom (placeholder: any[], locales: Locales, value: any, args: Object): any,
  plural (value: number, offset: any, options: any, locale: any): any,
  selectordinal (value: number, offset: any, options: any, locale: any): any,
  namespace (): FormatMessage
}
*/

function assign/*:: <T: Object> */ (target/*: T */, source/*: Object */) {
  Object.keys(source).forEach(function (key) { target[key] = source[key] })
  return target
}

function namespace ()/*: FormatMessage */ {
  var formats = assign({}, origFormats)
  var currentLocales/*: Locales */ = 'en'
  var translations/*: Translations */ = {}
  var generateId/*: GenerateId */ = function (pattern) { return pattern }
  var missingReplacement/*: Replacement */ = null
  var missingTranslation/*: MissingTranslation */ = 'warning'
  var types/*: Types */ = {}

  function formatMessage (msg/*: Message */, args/*:: ?: Object */, locales/*:: ?: Locales */) {
    var pattern = typeof msg === 'string' ? msg : msg.default
    var id = (typeof msg === 'object' && msg.id) || generateId(pattern)
    var translated = translate(pattern, id, locales || currentLocales)
    var format = translated.format || (
      translated.format = interpret(parse(translated.message), locales || currentLocales, types)
    )
    return format(args)
  }

  formatMessage.rich = function rich (msg/*: Message */, args/*:: ?: Object */, locales/*:: ?: Locales */) {
    var pattern = typeof msg === 'string' ? msg : msg.default
    var id = (typeof msg === 'object' && msg.id) || generateId(pattern)
    var translated = translate(pattern, id, locales || currentLocales)
    var format = translated.toParts || (
      translated.toParts = interpret.toParts(parse(translated.message, { tagsType: tagsType }), locales || currentLocales, types)
    )
    return format(args)
  }

  var tagsType = '<>'
  function richType (node/*: any[] */, locales/*: Locales */) {
    var style = node[2]
    return function (fn, args) {
      var props = typeof style === 'object' ? mapObject(style, args) : style
      return typeof fn === 'function' ? fn(props) : fn
    }
  }
  types[tagsType] = richType

  function mapObject (object/* { [string]: (args?: Object) => any } */, args/*: ?Object */) {
    return Object.keys(object).reduce(function (mapped, key) {
      mapped[key] = object[key](args)
      return mapped
    }, {})
  }

  function translate (pattern/*: string */, id/*: string */, locales/*: Locales */)/*: Translation */ {
    var locale = lookupClosestLocale(locales, translations) || 'en'
    var messages = translations[locale] || (translations[locale] = {})
    var translated = messages[id]
    if (typeof translated === 'string') {
      translated = messages[id] = { message: translated }
    }
    if (!translated) {
      var message = 'Translation for "' + id + '" in "' + locale + '" is missing'
      if (missingTranslation === 'warning') {
        /* istanbul ignore else */
        if (typeof console !== 'undefined') console.warn(message)
      } else if (missingTranslation !== 'ignore') { // 'error'
        throw new Error(message)
      }
      var replacement = typeof missingReplacement === 'function'
        ? missingReplacement(pattern, id, locale) || pattern
        : missingReplacement || pattern
      translated = messages[id] = { message: replacement }
    }
    return translated
  }

  formatMessage.setup = function setup (opt/*:: ?: Options */) {
    opt = opt || {}
    if (opt.locale) currentLocales = opt.locale
    if ('translations' in opt) translations = opt.translations || {}
    if (opt.generateId) generateId = opt.generateId
    if ('missingReplacement' in opt) missingReplacement = opt.missingReplacement
    if (opt.missingTranslation) missingTranslation = opt.missingTranslation
    if (opt.formats) {
      if (opt.formats.number) assign(formats.number, opt.formats.number)
      if (opt.formats.date) assign(formats.date, opt.formats.date)
      if (opt.formats.time) assign(formats.time, opt.formats.time)
    }
    if (opt.types) {
      types = opt.types
      types[tagsType] = richType
    }
    return {
      locale: currentLocales,
      translations: translations,
      generateId: generateId,
      missingReplacement: missingReplacement,
      missingTranslation: missingTranslation,
      formats: formats,
      types: types
    }
  }

  formatMessage.number = function (value/*: number */, style/*:: ?: string */, locales/*:: ?: Locales */) {
    var options = (style && formats.number[style]) ||
      formats.parseNumberPattern(style) ||
      formats.number.default
    return new Intl.NumberFormat(locales || currentLocales, options).format(value)
  }

  formatMessage.date = function (value/*:: ?: number | Date */, style/*:: ?: string */, locales/*:: ?: Locales */) {
    var options = (style && formats.date[style]) ||
      formats.parseDatePattern(style) ||
      formats.date.default
    return new Intl.DateTimeFormat(locales || currentLocales, options).format(value)
  }

  formatMessage.time = function (value/*:: ?: number | Date */, style/*:: ?: string */, locales/*:: ?: Locales */) {
    var options = (style && formats.time[style]) ||
      formats.parseDatePattern(style) ||
      formats.time.default
    return new Intl.DateTimeFormat(locales || currentLocales, options).format(value)
  }

  formatMessage.select = function (value/*: any */, options/*: Object */) {
    return options[value] || options.other
  }

  formatMessage.custom = function (placeholder/*: any[] */, locales/*: Locales */, value/*: any */, args/*: Object */) {
    if (!(placeholder[1] in types)) return value
    return types[placeholder[1]](placeholder, locales)(value, args)
  }

  formatMessage.plural = plural.bind(null, 'cardinal')
  formatMessage.selectordinal = plural.bind(null, 'ordinal')
  function plural (
    pluralType/*: 'cardinal' | 'ordinal' */,
    value/*: number */,
    offset/*: any */,
    options/*: any */,
    locale/*: any */
  ) {
    if (typeof offset === 'object' && typeof options !== 'object') { // offset is optional
      locale = options
      options = offset
      offset = 0
    }
    var closest = lookupClosestLocale(locale || currentLocales, plurals)
    var plural = (closest && plurals[closest][pluralType]) || returnOther
    return options['=' + +value] || options[plural(value - offset)] || options.other
  }
  function returnOther (/*:: n:number */) { return 'other' }

  formatMessage.namespace = namespace

  return formatMessage
}

module.exports = exports = namespace()


/***/ }),

/***/ "./node_modules/lookup-closest-locale/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/lookup-closest-locale/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// @flow
// "lookup" algorithm http://tools.ietf.org/html/rfc4647#section-3.4
// assumes normalized language tags, and matches in a case sensitive manner
module.exports = function lookupClosestLocale (locale/*: string | string[] | void */, available/*: { [string]: any } */)/*: ?string */ {
  if (typeof locale === 'string' && available[locale]) return locale
  var locales = [].concat(locale || [])
  for (var l = 0, ll = locales.length; l < ll; ++l) {
    var current = locales[l].split('-')
    while (current.length) {
      var candidate = current.join('-')
      if (available[candidate]) return candidate
      current.pop()
    }
  }
}


/***/ }),

/***/ "./node_modules/microee/index.js":
/*!***************************************!*\
  !*** ./node_modules/microee/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function M() { this._events = {}; }
M.prototype = {
  on: function(ev, cb) {
    this._events || (this._events = {});
    var e = this._events;
    (e[ev] || (e[ev] = [])).push(cb);
    return this;
  },
  removeListener: function(ev, cb) {
    var e = this._events[ev] || [], i;
    for(i = e.length-1; i >= 0 && e[i]; i--){
      if(e[i] === cb || e[i].cb === cb) { e.splice(i, 1); }
    }
  },
  removeAllListeners: function(ev) {
    if(!ev) { this._events = {}; }
    else { this._events[ev] && (this._events[ev] = []); }
  },
  listeners: function(ev) {
    return (this._events ? this._events[ev] || [] : []);
  },
  emit: function(ev) {
    this._events || (this._events = {});
    var args = Array.prototype.slice.call(arguments, 1), i, e = this._events[ev] || [];
    for(i = e.length-1; i >= 0 && e[i]; i--){
      e[i].apply(this, args);
    }
    return this;
  },
  when: function(ev, cb) {
    return this.once(ev, cb, true);
  },
  once: function(ev, cb, when) {
    if(!cb) return this;
    function c() {
      if(!when) this.removeListener(ev, c);
      if(cb.apply(this, arguments) && when) this.removeListener(ev, c);
    }
    c.cb = cb;
    this.on(ev, c);
    return this;
  }
};
M.mixin = function(dest) {
  var o = M.prototype, k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};
module.exports = M;


/***/ }),

/***/ "./node_modules/minilog/lib/common/filter.js":
/*!***************************************************!*\
  !*** ./node_modules/minilog/lib/common/filter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// default filter
var Transform = __webpack_require__(/*! ./transform.js */ "./node_modules/minilog/lib/common/transform.js");

var levelMap = { debug: 1, info: 2, warn: 3, error: 4 };

function Filter() {
  this.enabled = true;
  this.defaultResult = true;
  this.clear();
}

Transform.mixin(Filter);

// allow all matching, with level >= given level
Filter.prototype.allow = function(name, level) {
  this._white.push({ n: name, l: levelMap[level] });
  return this;
};

// deny all matching, with level <= given level
Filter.prototype.deny = function(name, level) {
  this._black.push({ n: name, l: levelMap[level] });
  return this;
};

Filter.prototype.clear = function() {
  this._white = [];
  this._black = [];
  return this;
};

function test(rule, name) {
  // use .test for RegExps
  return (rule.n.test ? rule.n.test(name) : rule.n == name);
};

Filter.prototype.test = function(name, level) {
  var i, len = Math.max(this._white.length, this._black.length);
  for(i = 0; i < len; i++) {
    if(this._white[i] && test(this._white[i], name) && levelMap[level] >= this._white[i].l) {
      return true;
    }
    if(this._black[i] && test(this._black[i], name) && levelMap[level] <= this._black[i].l) {
      return false;
    }
  }
  return this.defaultResult;
};

Filter.prototype.write = function(name, level, args) {
  if(!this.enabled || this.test(name, level)) {
    return this.emit('item', name, level, args);
  }
};

module.exports = Filter;


/***/ }),

/***/ "./node_modules/minilog/lib/common/minilog.js":
/*!****************************************************!*\
  !*** ./node_modules/minilog/lib/common/minilog.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ./transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    Filter = __webpack_require__(/*! ./filter.js */ "./node_modules/minilog/lib/common/filter.js");

var log = new Transform(),
    slice = Array.prototype.slice;

exports = module.exports = function create(name) {
  var o   = function() { log.write(name, undefined, slice.call(arguments)); return o; };
  o.debug = function() { log.write(name, 'debug', slice.call(arguments)); return o; };
  o.info  = function() { log.write(name, 'info',  slice.call(arguments)); return o; };
  o.warn  = function() { log.write(name, 'warn',  slice.call(arguments)); return o; };
  o.error = function() { log.write(name, 'error', slice.call(arguments)); return o; };
  o.log   = o.debug; // for interface compliance with Node and browser consoles
  o.suggest = exports.suggest;
  o.format = log.format;
  return o;
};

// filled in separately
exports.defaultBackend = exports.defaultFormatter = null;

exports.pipe = function(dest) {
  return log.pipe(dest);
};

exports.end = exports.unpipe = exports.disable = function(from) {
  return log.unpipe(from);
};

exports.Transform = Transform;
exports.Filter = Filter;
// this is the default filter that's applied when .enable() is called normally
// you can bypass it completely and set up your own pipes
exports.suggest = new Filter();

exports.enable = function() {
  if(exports.defaultFormatter) {
    return log.pipe(exports.suggest) // filter
              .pipe(exports.defaultFormatter) // formatter
              .pipe(exports.defaultBackend); // backend
  }
  return log.pipe(exports.suggest) // filter
            .pipe(exports.defaultBackend); // formatter
};



/***/ }),

/***/ "./node_modules/minilog/lib/common/transform.js":
/*!******************************************************!*\
  !*** ./node_modules/minilog/lib/common/transform.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var microee = __webpack_require__(/*! microee */ "./node_modules/microee/index.js");

// Implements a subset of Node's stream.Transform - in a cross-platform manner.
function Transform() {}

microee.mixin(Transform);

// The write() signature is different from Node's
// --> makes it much easier to work with objects in logs.
// One of the lessons from v1 was that it's better to target
// a good browser rather than the lowest common denominator
// internally.
// If you want to use external streams, pipe() to ./stringify.js first.
Transform.prototype.write = function(name, level, args) {
  this.emit('item', name, level, args);
};

Transform.prototype.end = function() {
  this.emit('end');
  this.removeAllListeners();
};

Transform.prototype.pipe = function(dest) {
  var s = this;
  // prevent double piping
  s.emit('unpipe', dest);
  // tell the dest that it's being piped to
  dest.emit('pipe', s);

  function onItem() {
    dest.write.apply(dest, Array.prototype.slice.call(arguments));
  }
  function onEnd() { !dest._isStdio && dest.end(); }

  s.on('item', onItem);
  s.on('end', onEnd);

  s.when('unpipe', function(from) {
    var match = (from === dest) || typeof from == 'undefined';
    if(match) {
      s.removeListener('item', onItem);
      s.removeListener('end', onEnd);
      dest.emit('unpipe');
    }
    return match;
  });

  return dest;
};

Transform.prototype.unpipe = function(from) {
  this.emit('unpipe', from);
  return this;
};

Transform.prototype.format = function(dest) {
  throw new Error([
    'Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:',
    'var Minilog = require(\'minilog\');',
    'Minilog',
    '  .pipe(Minilog.backends.console.formatClean)',
    '  .pipe(Minilog.backends.console);'].join('\n'));
};

Transform.mixin = function(dest) {
  var o = Transform.prototype, k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};

module.exports = Transform;


/***/ }),

/***/ "./node_modules/minilog/lib/web/array.js":
/*!***********************************************!*\
  !*** ./node_modules/minilog/lib/web/array.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    cache = [ ];

var logger = new Transform();

logger.write = function(name, level, args) {
  cache.push([ name, level, args ]);
};

// utility functions
logger.get = function() { return cache; };
logger.empty = function() { cache = []; };

module.exports = logger;


/***/ }),

/***/ "./node_modules/minilog/lib/web/console.js":
/*!*************************************************!*\
  !*** ./node_modules/minilog/lib/web/console.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");

var newlines = /\n+$/,
    logger = new Transform();

logger.write = function(name, level, args) {
  var i = args.length-1;
  if (typeof console === 'undefined' || !console.log) {
    return;
  }
  if(console.log.apply) {
    return console.log.apply(console, [name, level].concat(args));
  } else if(JSON && JSON.stringify) {
    // console.log.apply is undefined in IE8 and IE9
    // for IE8/9: make console.log at least a bit less awful
    if(args[i] && typeof args[i] == 'string') {
      args[i] = args[i].replace(newlines, '');
    }
    try {
      for(i = 0; i < args.length; i++) {
        args[i] = JSON.stringify(args[i]);
      }
    } catch(e) {}
    console.log(args.join(' '));
  }
};

logger.formatters = ['color', 'minilog'];
logger.color = __webpack_require__(/*! ./formatters/color.js */ "./node_modules/minilog/lib/web/formatters/color.js");
logger.minilog = __webpack_require__(/*! ./formatters/minilog.js */ "./node_modules/minilog/lib/web/formatters/minilog.js");

module.exports = logger;


/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/color.js":
/*!**********************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/color.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    color = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/web/formatters/util.js");

var colors = { debug: ['cyan'], info: ['purple' ], warn: [ 'yellow', true ], error: [ 'red', true ] },
    logger = new Transform();

logger.write = function(name, level, args) {
  var fn = console.log;
  if(console[level] && console[level].apply) {
    fn = console[level];
    fn.apply(console, [ '%c'+name+' %c'+level, color('gray'), color.apply(color, colors[level])].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger.pipe = function() { };

module.exports = logger;


/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/minilog.js":
/*!************************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/minilog.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    color = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/web/formatters/util.js"),
    colors = { debug: ['gray'], info: ['purple' ], warn: [ 'yellow', true ], error: [ 'red', true ] },
    logger = new Transform();

logger.write = function(name, level, args) {
  var fn = console.log;
  if(level != 'debug' && console[level]) {
    fn = console[level];
  }

  var subset = [], i = 0;
  if(level != 'info') {
    for(; i < args.length; i++) {
      if(typeof args[i] != 'string') break;
    }
    fn.apply(console, [ '%c'+name +' '+ args.slice(0, i).join(' '), color.apply(color, colors[level]) ].concat(args.slice(i)));
  } else {
    fn.apply(console, [ '%c'+name, color.apply(color, colors[level]) ].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger.pipe = function() { };

module.exports = logger;


/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/util.js":
/*!*********************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/util.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hex = {
  black: '#000',
  red: '#c23621',
  green: '#25bc26',
  yellow: '#bbbb00',
  blue:  '#492ee1',
  magenta: '#d338d3',
  cyan: '#33bbc8',
  gray: '#808080',
  purple: '#708'
};
function color(fg, isInverse) {
  if(isInverse) {
    return 'color: #fff; background: '+hex[fg]+';';
  } else {
    return 'color: '+hex[fg]+';';
  }
}

module.exports = color;


/***/ }),

/***/ "./node_modules/minilog/lib/web/index.js":
/*!***********************************************!*\
  !*** ./node_modules/minilog/lib/web/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Minilog = __webpack_require__(/*! ../common/minilog.js */ "./node_modules/minilog/lib/common/minilog.js");

var oldEnable = Minilog.enable,
    oldDisable = Minilog.disable,
    isChrome = (typeof navigator != 'undefined' && /chrome/i.test(navigator.userAgent)),
    console = __webpack_require__(/*! ./console.js */ "./node_modules/minilog/lib/web/console.js");

// Use a more capable logging backend if on Chrome
Minilog.defaultBackend = (isChrome ? console.minilog : console);

// apply enable inputs from localStorage and from the URL
if(typeof window != 'undefined') {
  try {
    Minilog.enable(JSON.parse(window.localStorage['minilogSettings']));
  } catch(e) {}
  if(window.location && window.location.search) {
    var match = RegExp('[?&]minilog=([^&]*)').exec(window.location.search);
    match && Minilog.enable(decodeURIComponent(match[1]));
  }
}

// Make enable also add to localStorage
Minilog.enable = function() {
  oldEnable.call(Minilog, true);
  try { window.localStorage['minilogSettings'] = JSON.stringify(true); } catch(e) {}
  return this;
};

Minilog.disable = function() {
  oldDisable.call(Minilog);
  try { delete window.localStorage.minilogSettings; } catch(e) {}
  return this;
};

exports = module.exports = Minilog;

exports.backends = {
  array: __webpack_require__(/*! ./array.js */ "./node_modules/minilog/lib/web/array.js"),
  browser: Minilog.defaultBackend,
  localStorage: __webpack_require__(/*! ./localstorage.js */ "./node_modules/minilog/lib/web/localstorage.js"),
  jQuery: __webpack_require__(/*! ./jquery_simple.js */ "./node_modules/minilog/lib/web/jquery_simple.js")
};


/***/ }),

/***/ "./node_modules/minilog/lib/web/jquery_simple.js":
/*!*******************************************************!*\
  !*** ./node_modules/minilog/lib/web/jquery_simple.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");

var cid = new Date().valueOf().toString(36);

function AjaxLogger(options) {
  this.url = options.url || '';
  this.cache = [];
  this.timer = null;
  this.interval = options.interval || 30*1000;
  this.enabled = true;
  this.jQuery = window.jQuery;
  this.extras = {};
}

Transform.mixin(AjaxLogger);

AjaxLogger.prototype.write = function(name, level, args) {
  if(!this.timer) { this.init(); }
  this.cache.push([name, level].concat(args));
};

AjaxLogger.prototype.init = function() {
  if(!this.enabled || !this.jQuery) return;
  var self = this;
  this.timer = setTimeout(function() {
    var i, logs = [], ajaxData, url = self.url;
    if(self.cache.length == 0) return self.init();
    // Test each log line and only log the ones that are valid (e.g. don't have circular references).
    // Slight performance hit but benefit is we log all valid lines.
    for(i = 0; i < self.cache.length; i++) {
      try {
        JSON.stringify(self.cache[i]);
        logs.push(self.cache[i]);
      } catch(e) { }
    }
    if(self.jQuery.isEmptyObject(self.extras)) {
        ajaxData = JSON.stringify({ logs: logs });
        url = self.url + '?client_id=' + cid;
    } else {
        ajaxData = JSON.stringify(self.jQuery.extend({logs: logs}, self.extras));
    }

    self.jQuery.ajax(url, {
      type: 'POST',
      cache: false,
      processData: false,
      data: ajaxData,
      contentType: 'application/json',
      timeout: 10000
    }).success(function(data, status, jqxhr) {
      if(data.interval) {
        self.interval = Math.max(1000, data.interval);
      }
    }).error(function() {
      self.interval = 30000;
    }).always(function() {
      self.init();
    });
    self.cache = [];
  }, this.interval);
};

AjaxLogger.prototype.end = function() {};

// wait until jQuery is defined. Useful if you don't control the load order.
AjaxLogger.jQueryWait = function(onDone) {
  if(typeof window !== 'undefined' && (window.jQuery || window.$)) {
    return onDone(window.jQuery || window.$);
  } else if (typeof window !== 'undefined') {
    setTimeout(function() { AjaxLogger.jQueryWait(onDone); }, 200);
  }
};

module.exports = AjaxLogger;


/***/ }),

/***/ "./node_modules/minilog/lib/web/localstorage.js":
/*!******************************************************!*\
  !*** ./node_modules/minilog/lib/web/localstorage.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    cache = false;

var logger = new Transform();

logger.write = function(name, level, args) {
  if(typeof window == 'undefined' || typeof JSON == 'undefined' || !JSON.stringify || !JSON.parse) return;
  try {
    if(!cache) { cache = (window.localStorage.minilog ? JSON.parse(window.localStorage.minilog) : []); }
    cache.push([ new Date().toString(), name, level, args ]);
    window.localStorage.minilog = JSON.stringify(cache);
  } catch(e) {}
};

module.exports = logger;

/***/ }),

/***/ "./node_modules/scratch-vm/src/dispatch/shared-dispatch.js":
/*!*****************************************************************!*\
  !*** ./node_modules/scratch-vm/src/dispatch/shared-dispatch.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const log = __webpack_require__(/*! ../util/log */ "./node_modules/scratch-vm/src/util/log.js");
/**
 * @typedef {object} DispatchCallMessage - a message to the dispatch system representing a service method call
 * @property {*} responseId - send a response message with this response ID. See {@link DispatchResponseMessage}
 * @property {string} service - the name of the service to be called
 * @property {string} method - the name of the method to be called
 * @property {Array|undefined} args - the arguments to be passed to the method
 */

/**
 * @typedef {object} DispatchResponseMessage - a message to the dispatch system representing the results of a call
 * @property {*} responseId - a copy of the response ID from the call which generated this response
 * @property {*|undefined} error - if this is truthy, then it contains results from a failed call (such as an exception)
 * @property {*|undefined} result - if error is not truthy, then this contains the return value of the call (if any)
 */

/**
 * @typedef {DispatchCallMessage|DispatchResponseMessage} DispatchMessage
 * Any message to the dispatch system.
 */

/**
 * The SharedDispatch class is responsible for dispatch features shared by
 * {@link CentralDispatch} and {@link WorkerDispatch}.
 */


class SharedDispatch {
  constructor() {
    /**
     * List of callback registrations for promises waiting for a response from a call to a service on another
     * worker. A callback registration is an array of [resolve,reject] Promise functions.
     * Calls to local services don't enter this list.
     * @type {Array.<Function[]>}
     */
    this.callbacks = [];
    /**
     * The next response ID to be used.
     * @type {int}
     */

    this.nextResponseId = 0;
  }
  /**
   * Call a particular method on a particular service, regardless of whether that service is provided locally or on
   * a worker. If the service is provided by a worker, the `args` will be copied using the Structured Clone
   * algorithm, except for any items which are also in the `transfer` list. Ownership of those items will be
   * transferred to the worker, and they should not be used after this call.
   * @example
   *      dispatcher.call('vm', 'setData', 'cat', 42);
   *      // this finds the worker for the 'vm' service, then on that worker calls:
   *      vm.setData('cat', 42);
   * @param {string} service - the name of the service.
   * @param {string} method - the name of the method.
   * @param {*} [args] - the arguments to be copied to the method, if any.
   * @returns {Promise} - a promise for the return value of the service method.
   */


  call(service, method, ...args) {
    return this.transferCall(service, method, null, ...args);
  }
  /**
   * Call a particular method on a particular service, regardless of whether that service is provided locally or on
   * a worker. If the service is provided by a worker, the `args` will be copied using the Structured Clone
   * algorithm, except for any items which are also in the `transfer` list. Ownership of those items will be
   * transferred to the worker, and they should not be used after this call.
   * @example
   *      dispatcher.transferCall('vm', 'setData', [myArrayBuffer], 'cat', myArrayBuffer);
   *      // this finds the worker for the 'vm' service, transfers `myArrayBuffer` to it, then on that worker calls:
   *      vm.setData('cat', myArrayBuffer);
   * @param {string} service - the name of the service.
   * @param {string} method - the name of the method.
   * @param {Array} [transfer] - objects to be transferred instead of copied. Must be present in `args` to be useful.
   * @param {*} [args] - the arguments to be copied to the method, if any.
   * @returns {Promise} - a promise for the return value of the service method.
   */


  transferCall(service, method, transfer, ...args) {
    try {
      const {
        provider,
        isRemote
      } = this._getServiceProvider(service);

      if (provider) {
        if (isRemote) {
          return this._remoteTransferCall(provider, service, method, transfer, ...args);
        }

        const result = provider[method].apply(provider, args);
        return Promise.resolve(result);
      }

      return Promise.reject(new Error("Service not found: ".concat(service)));
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * Check if a particular service lives on another worker.
   * @param {string} service - the service to check.
   * @returns {boolean} - true if the service is remote (calls must cross a Worker boundary), false otherwise.
   * @private
   */


  _isRemoteService(service) {
    return this._getServiceProvider(service).isRemote;
  }
  /**
   * Like {@link call}, but force the call to be posted through a particular communication channel.
   * @param {object} provider - send the call through this object's `postMessage` function.
   * @param {string} service - the name of the service.
   * @param {string} method - the name of the method.
   * @param {*} [args] - the arguments to be copied to the method, if any.
   * @returns {Promise} - a promise for the return value of the service method.
   */


  _remoteCall(provider, service, method, ...args) {
    return this._remoteTransferCall(provider, service, method, null, ...args);
  }
  /**
   * Like {@link transferCall}, but force the call to be posted through a particular communication channel.
   * @param {object} provider - send the call through this object's `postMessage` function.
   * @param {string} service - the name of the service.
   * @param {string} method - the name of the method.
   * @param {Array} [transfer] - objects to be transferred instead of copied. Must be present in `args` to be useful.
   * @param {*} [args] - the arguments to be copied to the method, if any.
   * @returns {Promise} - a promise for the return value of the service method.
   */


  _remoteTransferCall(provider, service, method, transfer, ...args) {
    return new Promise((resolve, reject) => {
      const responseId = this._storeCallbacks(resolve, reject);
      /** @TODO: remove this hack! this is just here so we don't try to send `util` to a worker */
      // tw: upstream's logic is broken
      // Args is actually a 3 length list of [args, util, real block info]
      // We only want to send args. The others will throw errors when they try to be cloned


      if (args.length > 0 && typeof args[args.length - 1].func === 'function') {
        args.pop();
        args.pop();
      }

      if (transfer) {
        provider.postMessage({
          service,
          method,
          responseId,
          args
        }, transfer);
      } else {
        provider.postMessage({
          service,
          method,
          responseId,
          args
        });
      }
    });
  }
  /**
   * Store callback functions pending a response message.
   * @param {Function} resolve - function to call if the service method returns.
   * @param {Function} reject - function to call if the service method throws.
   * @returns {*} - a unique response ID for this set of callbacks. See {@link _deliverResponse}.
   * @protected
   */


  _storeCallbacks(resolve, reject) {
    const responseId = this.nextResponseId++;
    this.callbacks[responseId] = [resolve, reject];
    return responseId;
  }
  /**
   * Deliver call response from a worker. This should only be called as the result of a message from a worker.
   * @param {int} responseId - the response ID of the callback set to call.
   * @param {DispatchResponseMessage} message - the message containing the response value(s).
   * @protected
   */


  _deliverResponse(responseId, message) {
    try {
      const [resolve, reject] = this.callbacks[responseId];
      delete this.callbacks[responseId];

      if (message.error) {
        reject(message.error);
      } else {
        resolve(message.result);
      }
    } catch (e) {
      log.error("Dispatch callback failed: ".concat(e));
    }
  }
  /**
   * Handle a message event received from a connected worker.
   * @param {Worker} worker - the worker which sent the message, or the global object if running in a worker.
   * @param {MessageEvent} event - the message event to be handled.
   * @protected
   */


  _onMessage(worker, event) {
    /** @type {DispatchMessage} */
    const message = event.data;
    message.args = message.args || [];
    let promise;

    if (message.service) {
      if (message.service === 'dispatch') {
        promise = this._onDispatchMessage(worker, message);
      } else {
        promise = this.call(message.service, message.method, ...message.args);
      }
    } else if (typeof message.responseId === 'undefined') {
      log.error("Dispatch caught malformed message from a worker: ".concat(JSON.stringify(event)));
    } else {
      this._deliverResponse(message.responseId, message);
    }

    if (promise) {
      if (typeof message.responseId === 'undefined') {
        log.error("Dispatch message missing required response ID: ".concat(JSON.stringify(event)));
      } else {
        promise.then(result => worker.postMessage({
          responseId: message.responseId,
          result
        }), error => worker.postMessage({
          responseId: message.responseId,
          error: "".concat(error)
        }));
      }
    }
  }
  /**
   * Fetch the service provider object for a particular service name.
   * @abstract
   * @param {string} service - the name of the service to look up
   * @returns {{provider:(object|Worker), isRemote:boolean}} - the means to contact the service, if found
   * @protected
   */


  _getServiceProvider(service) {
    throw new Error("Could not get provider for ".concat(service, ": _getServiceProvider not implemented"));
  }
  /**
   * Handle a call message sent to the dispatch service itself
   * @abstract
   * @param {Worker} worker - the worker which sent the message.
   * @param {DispatchCallMessage} message - the message to be handled.
   * @returns {Promise|undefined} - a promise for the results of this operation, if appropriate
   * @private
   */


  _onDispatchMessage(worker, message) {
    throw new Error("Unimplemented dispatch message handler cannot handle ".concat(message.method, " method"));
  }

}

module.exports = SharedDispatch;

/***/ }),

/***/ "./node_modules/scratch-vm/src/dispatch/worker-dispatch.js":
/*!*****************************************************************!*\
  !*** ./node_modules/scratch-vm/src/dispatch/worker-dispatch.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SharedDispatch = __webpack_require__(/*! ./shared-dispatch */ "./node_modules/scratch-vm/src/dispatch/shared-dispatch.js");

const log = __webpack_require__(/*! ../util/log */ "./node_modules/scratch-vm/src/util/log.js");

const {
  centralDispatchService
} = __webpack_require__(/*! ../extension-support/tw-extension-worker-context */ "./node_modules/scratch-vm/src/extension-support/tw-extension-worker-context.js");
/**
 * This class provides a Worker with the means to participate in the message dispatch system managed by CentralDispatch.
 * From any context in the messaging system, the dispatcher's "call" method can call any method on any "service"
 * provided in any participating context. The dispatch system will forward function arguments and return values across
 * worker boundaries as needed.
 * @see {CentralDispatch}
 */


class WorkerDispatch extends SharedDispatch {
  constructor() {
    super();
    /**
     * This promise will be resolved when we have successfully connected to central dispatch.
     * @type {Promise}
     * @see {waitForConnection}
     * @private
     */

    this._connectionPromise = new Promise(resolve => {
      this._onConnect = resolve;
    });
    /**
     * Map of service name to local service provider.
     * If a service is not listed here, it is assumed to be provided by another context (another Worker or the main
     * thread).
     * @see {setService}
     * @type {object}
     */

    this.services = {};
    this._onMessage = this._onMessage.bind(this, centralDispatchService);

    if (typeof self !== 'undefined') {
      self.onmessage = this._onMessage;
    }
  }
  /**
   * @returns {Promise} a promise which will resolve upon connection to central dispatch. If you need to make a call
   * immediately on "startup" you can attach a 'then' to this promise.
   * @example
   *      dispatch.waitForConnection.then(() => {
   *          dispatch.call('myService', 'hello');
   *      })
   */


  get waitForConnection() {
    return this._connectionPromise;
  }
  /**
   * Set a local object as the global provider of the specified service.
   * WARNING: Any method on the provider can be called from any worker within the dispatch system.
   * @param {string} service - a globally unique string identifying this service. Examples: 'vm', 'gui', 'extension9'.
   * @param {object} provider - a local object which provides this service.
   * @returns {Promise} - a promise which will resolve once the service is registered.
   */


  setService(service, provider) {
    if (this.services.hasOwnProperty(service)) {
      log.warn("Worker dispatch replacing existing service provider for ".concat(service));
    }

    this.services[service] = provider;
    return this.waitForConnection.then(() => this._remoteCall(centralDispatchService, 'dispatch', 'setService', service));
  }
  /**
   * Fetch the service provider object for a particular service name.
   * @override
   * @param {string} service - the name of the service to look up
   * @returns {{provider:(object|Worker), isRemote:boolean}} - the means to contact the service, if found
   * @protected
   */


  _getServiceProvider(service) {
    // if we don't have a local service by this name, contact central dispatch by calling `postMessage` on self
    const provider = this.services[service];
    return {
      provider: provider || centralDispatchService,
      isRemote: !provider
    };
  }
  /**
   * Handle a call message sent to the dispatch service itself
   * @override
   * @param {Worker} worker - the worker which sent the message.
   * @param {DispatchCallMessage} message - the message to be handled.
   * @returns {Promise|undefined} - a promise for the results of this operation, if appropriate
   * @protected
   */


  _onDispatchMessage(worker, message) {
    let promise;

    switch (message.method) {
      case 'handshake':
        promise = this._onConnect();
        break;

      case 'terminate':
        // Don't close until next tick, after sending confirmation back
        setTimeout(() => self.close(), 0);
        promise = Promise.resolve();
        break;

      default:
        log.error("Worker dispatch received message for unknown method: ".concat(message.method));
    }

    return promise;
  }

}

module.exports = new WorkerDispatch();

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/argument-type.js":
/*!************************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/argument-type.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Block argument types
 * @enum {string}
 */
const ArgumentType = {
  /**
   * Numeric value with angle picker
   */
  ANGLE: 'angle',

  /**
   * Boolean value with hexagonal placeholder
   */
  BOOLEAN: 'Boolean',

  /**
   * Numeric value with color picker
   */
  COLOR: 'color',

  /**
   * Numeric value with text field
   */
  NUMBER: 'number',

  /**
   * String value with text field
   */
  STRING: 'string',

  /**
   * String value with matrix field
   */
  MATRIX: 'matrix',

  /**
   * MIDI note number with note picker (piano) field
   */
  NOTE: 'note',

  /**
   * Inline image on block (as part of the label)
   */
  IMAGE: 'image',

  /**
   * Name of costume in the current target
   */
  COSTUME: 'costume',

  /**
   * Name of sound in the current target
   */
  SOUND: 'sound'
};
module.exports = ArgumentType;

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/block-type.js":
/*!*********************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/block-type.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Types of block
 * @enum {string}
 */
const BlockType = {
  /**
   * Boolean reporter with hexagonal shape
   */
  BOOLEAN: 'Boolean',

  /**
   * A button (not an actual block) for some special action, like making a variable
   */
  BUTTON: 'button',

  /**
   * A text label (not an actual block) for adding comments or labling blocks
   */
  LABEL: 'label',

  /**
   * Command block
   */
  COMMAND: 'command',

  /**
   * Specialized command block which may or may not run a child branch
   * The thread continues with the next block whether or not a child branch ran.
   */
  CONDITIONAL: 'conditional',

  /**
   * Specialized hat block with no implementation function
   * This stack only runs if the corresponding event is emitted by other code.
   */
  EVENT: 'event',

  /**
   * Hat block which conditionally starts a block stack
   */
  HAT: 'hat',

  /**
   * Specialized command block which may or may not run a child branch
   * If a child branch runs, the thread evaluates the loop block again.
   */
  LOOP: 'loop',

  /**
   * General reporter with numeric or string value
   */
  REPORTER: 'reporter',

  /**
   * Arbitrary scratch-blocks XML.
   */
  XML: 'xml'
};
module.exports = BlockType;

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/target-type.js":
/*!**********************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/target-type.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Default types of Target supported by the VM
 * @enum {string}
 */
const TargetType = {
  /**
   * Rendered target which can move, change costumes, etc.
   */
  SPRITE: 'sprite',

  /**
   * Rendered target which cannot move but can change backdrops
   */
  STAGE: 'stage'
};
module.exports = TargetType;

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/tw-extension-api-common.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/tw-extension-api-common.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ArgumentType = __webpack_require__(/*! ./argument-type */ "./node_modules/scratch-vm/src/extension-support/argument-type.js");

const BlockType = __webpack_require__(/*! ./block-type */ "./node_modules/scratch-vm/src/extension-support/block-type.js");

const TargetType = __webpack_require__(/*! ./target-type */ "./node_modules/scratch-vm/src/extension-support/target-type.js");

const Cast = __webpack_require__(/*! ../util/cast */ "./node_modules/scratch-vm/src/util/cast.js");

const Scratch = {
  ArgumentType,
  BlockType,
  TargetType,
  Cast
};
module.exports = Scratch;

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/tw-extension-worker-context.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/tw-extension-worker-context.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  isWorker: true,
  // centralDispatchService is the object to call postMessage() on to send a message to parent.
  centralDispatchService: self
};

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/tw-l10n.js":
/*!******************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/tw-l10n.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const formatMessage = __webpack_require__(/*! format-message */ "./node_modules/format-message/index.js");
/**
 * @param {VM|null} vm
 * @returns {object}
 */


const createTranslate = vm => {
  const namespace = formatMessage.namespace();

  const translate = (message, args) => {
    if (message && typeof message === 'object') {// already in the expected format
    } else if (typeof message === 'string') {
      message = {
        default: message
      };
    } else {
      throw new Error('unsupported data type in translate()');
    }

    return namespace(message, args);
  };

  const generateId = defaultMessage => "_".concat(defaultMessage);

  const getLocale = () => {
    if (vm) return vm.getLocale();
    if (typeof navigator !== 'undefined') return navigator.language;
    return 'en';
  };

  let storedTranslations = {};

  translate.setup = newTranslations => {
    if (newTranslations) {
      storedTranslations = newTranslations;
    }

    namespace.setup({
      locale: getLocale(),
      missingTranslation: 'ignore',
      generateId,
      translations: storedTranslations
    });
  };

  translate.setup({});

  if (vm) {
    vm.on('LOCALE_CHANGED', () => {
      translate.setup(null);
    });
  }

  return translate;
};

module.exports = createTranslate;

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/tw-scratchx-compatibility-layer.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/tw-scratchx-compatibility-layer.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ScratchX API Documentation: https://github.com/LLK/scratchx/wiki/
const ArgumentType = __webpack_require__(/*! ./argument-type */ "./node_modules/scratch-vm/src/extension-support/argument-type.js");

const BlockType = __webpack_require__(/*! ./block-type */ "./node_modules/scratch-vm/src/extension-support/block-type.js");

const {
  argumentIndexToId,
  generateExtensionId
} = __webpack_require__(/*! ./tw-scratchx-utilities */ "./node_modules/scratch-vm/src/extension-support/tw-scratchx-utilities.js");
/**
 * @typedef ScratchXDescriptor
 * @property {unknown[][]} blocks
 * @property {Record<string, unknown[]>} [menus]
 * @property {string} [url]
 * @property {string} [displayName]
 */

/**
 * @typedef ScratchXStatus
 * @property {0|1|2} status 0 is red/error, 1 is yellow/not ready, 2 is green/ready
 * @property {string} msg
 */


const parseScratchXBlockType = type => {
  if (type === '' || type === ' ' || type === 'w') {
    return {
      type: BlockType.COMMAND,
      async: type === 'w'
    };
  }

  if (type === 'r' || type === 'R') {
    return {
      type: BlockType.REPORTER,
      async: type === 'R'
    };
  }

  if (type === 'b') {
    return {
      type: BlockType.BOOLEAN,
      // ScratchX docs don't seem to mention boolean reporters that wait
      async: false
    };
  }

  if (type === 'h') {
    return {
      type: BlockType.HAT,
      async: false
    };
  }

  throw new Error("Unknown ScratchX block type: ".concat(type));
};

const isScratchCompatibleValue = v => typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean';
/**
 * @param {string} argument ScratchX argument with leading % removed.
 * @param {unknown} defaultValue Default value, if any
 */


const parseScratchXArgument = (argument, defaultValue) => {
  const result = {};
  const hasDefaultValue = isScratchCompatibleValue(defaultValue);

  if (hasDefaultValue) {
    result.defaultValue = defaultValue;
  } // TODO: ScratchX docs don't mention support for boolean arguments?


  if (argument === 's') {
    result.type = ArgumentType.STRING;

    if (!hasDefaultValue) {
      result.defaultValue = '';
    }
  } else if (argument === 'n') {
    result.type = ArgumentType.NUMBER;

    if (!hasDefaultValue) {
      result.defaultValue = 0;
    }
  } else if (argument[0] === 'm') {
    result.type = ArgumentType.STRING;
    const split = argument.split(/\.|:/);
    const menuName = split[1];
    result.menu = menuName;
  } else {
    throw new Error("Unknown ScratchX argument type: ".concat(argument));
  }

  return result;
};

const wrapScratchXFunction = (originalFunction, argumentCount, async) => args => {
  // Convert Scratch 3's argument object to an argument list expected by ScratchX
  const argumentList = [];

  for (let i = 0; i < argumentCount; i++) {
    argumentList.push(args[argumentIndexToId(i)]);
  }

  if (async) {
    return new Promise(resolve => {
      originalFunction(...argumentList, resolve);
    });
  }

  return originalFunction(...argumentList);
};
/**
 * @param {string} name
 * @param {ScratchXDescriptor} descriptor
 * @param {Record<string, () => unknown>} functions
 */


const convert = (name, descriptor, functions) => {
  const extensionId = generateExtensionId(name);
  const info = {
    id: extensionId,
    name: descriptor.displayName || name,
    blocks: [],
    color1: '#4a4a5e',
    color2: '#31323f',
    color3: '#191a21'
  };
  const scratch3Extension = {
    getInfo: () => info,
    _getStatus: functions._getStatus
  };

  if (descriptor.url) {
    info.docsURI = descriptor.url;
  }

  for (const blockDescriptor of descriptor.blocks) {
    if (blockDescriptor.length === 1) {
      // Separator
      info.blocks.push('---');
      continue;
    }

    const scratchXBlockType = blockDescriptor[0];
    const blockText = blockDescriptor[1];
    const functionName = blockDescriptor[2];
    const defaultArgumentValues = blockDescriptor.slice(3);
    let scratchText = '';
    const argumentInfo = [];
    const blockTextParts = blockText.split(/%([\w.:]+)/g);

    for (let i = 0; i < blockTextParts.length; i++) {
      const part = blockTextParts[i];
      const isArgument = i % 2 === 1;

      if (isArgument) {
        parseScratchXArgument(part);
        const argumentIndex = Math.floor(i / 2).toString();
        const argumentDefaultValue = defaultArgumentValues[argumentIndex];
        const argumentId = argumentIndexToId(argumentIndex);
        argumentInfo[argumentId] = parseScratchXArgument(part, argumentDefaultValue);
        scratchText += "[".concat(argumentId, "]");
      } else {
        scratchText += part;
      }
    }

    const scratch3BlockType = parseScratchXBlockType(scratchXBlockType);
    const blockInfo = {
      opcode: functionName,
      blockType: scratch3BlockType.type,
      text: scratchText,
      arguments: argumentInfo
    };
    info.blocks.push(blockInfo);
    const originalFunction = functions[functionName];
    const argumentCount = argumentInfo.length;
    scratch3Extension[functionName] = wrapScratchXFunction(originalFunction, argumentCount, scratch3BlockType.async);
  }

  const menus = descriptor.menus;

  if (menus) {
    const scratch3Menus = {};

    for (const menuName of Object.keys(menus) || {}) {
      const menuItems = menus[menuName];
      const menuInfo = {
        items: menuItems
      };
      scratch3Menus[menuName] = menuInfo;
    }

    info.menus = scratch3Menus;
  }

  return scratch3Extension;
};

const extensionNameToExtension = new Map();
/**
 * @param {*} Scratch Scratch 3.0 extension API object
 * @returns {*} ScratchX-compatible API object
 */

const createScratchX = Scratch => {
  const register = (name, descriptor, functions) => {
    const scratch3Extension = convert(name, descriptor, functions);
    extensionNameToExtension.set(name, scratch3Extension);
    Scratch.extensions.register(scratch3Extension);
  };
  /**
   * @param {string} extensionName
   * @returns {ScratchXStatus}
   */


  const getStatus = extensionName => {
    const extension = extensionNameToExtension.get(extensionName);

    if (extension) {
      return extension._getStatus();
    }

    return {
      status: 0,
      msg: 'does not exist'
    };
  };

  return {
    register,
    getStatus
  };
};

module.exports = createScratchX;

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/tw-scratchx-utilities.js":
/*!********************************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/tw-scratchx-utilities.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @fileoverview
 * General ScratchX-related utilities used in multiple places.
 * Changing these functions may break projects.
 */

/**
 * @param {string} scratchXName
 * @returns {string}
 */
const generateExtensionId = scratchXName => {
  const sanitizedName = scratchXName.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return "sbx".concat(sanitizedName);
};
/**
 * @param {number} i 0-indexed index of argument in list
 * @returns {string} Scratch 3 argument name
 */


const argumentIndexToId = i => i.toString();

module.exports = {
  generateExtensionId,
  argumentIndexToId
};

/***/ }),

/***/ "./node_modules/scratch-vm/src/util/cast.js":
/*!**************************************************!*\
  !*** ./node_modules/scratch-vm/src/util/cast.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Color = __webpack_require__(/*! ../util/color */ "./node_modules/scratch-vm/src/util/color.js");
/**
 * @fileoverview
 * Utilities for casting and comparing Scratch data-types.
 * Scratch behaves slightly differently from JavaScript in many respects,
 * and these differences should be encapsulated below.
 * For example, in Scratch, add(1, join("hello", world")) -> 1.
 * This is because "hello world" is cast to 0.
 * In JavaScript, 1 + Number("hello" + "world") would give you NaN.
 * Use when coercing a value before computation.
 */

/**
 * Used internally by compare()
 * @param {*} val A value that evaluates to 0 in JS string-to-number conversation such as empty string, 0, or tab.
 * @returns {boolean} True if the value should not be treated as the number zero.
 */


const isNotActuallyZero = val => {
  if (typeof val !== 'string') return false;

  for (let i = 0; i < val.length; i++) {
    const code = val.charCodeAt(i); // '0'.charCodeAt(0) === 48
    // '\t'.charCodeAt(0) === 9
    // We include tab for compatibility with scratch-www's broken trim() polyfill.
    // https://github.com/TurboWarp/scratch-vm/issues/115
    // https://scratch.mit.edu/projects/788261699/

    if (code === 48 || code === 9) {
      return false;
    }
  }

  return true;
};

class Cast {
  /**
   * Scratch cast to number.
   * Treats NaN as 0.
   * In Scratch 2.0, this is captured by `interp.numArg.`
   * @param {*} value Value to cast to number.
   * @return {number} The Scratch-casted number value.
   */
  static toNumber(value) {
    // If value is already a number we don't need to coerce it with
    // Number().
    if (typeof value === 'number') {
      // Scratch treats NaN as 0, when needed as a number.
      // E.g., 0 + NaN -> 0.
      if (Number.isNaN(value)) {
        return 0;
      }

      return value;
    }

    const n = Number(value);

    if (Number.isNaN(n)) {
      // Scratch treats NaN as 0, when needed as a number.
      // E.g., 0 + NaN -> 0.
      return 0;
    }

    return n;
  }
  /**
   * Scratch cast to boolean.
   * In Scratch 2.0, this is captured by `interp.boolArg.`
   * Treats some string values differently from JavaScript.
   * @param {*} value Value to cast to boolean.
   * @return {boolean} The Scratch-casted boolean value.
   */


  static toBoolean(value) {
    // Already a boolean?
    if (typeof value === 'boolean') {
      return value;
    }

    if (typeof value === 'string') {
      // These specific strings are treated as false in Scratch.
      if (value === '' || value === '0' || value.toLowerCase() === 'false') {
        return false;
      } // All other strings treated as true.


      return true;
    } // Coerce other values and numbers.


    return Boolean(value);
  }
  /**
   * Scratch cast to string.
   * @param {*} value Value to cast to string.
   * @return {string} The Scratch-casted string value.
   */


  static toString(value) {
    return String(value);
  }
  /**
   * Cast any Scratch argument to an RGB color array to be used for the renderer.
   * @param {*} value Value to convert to RGB color array.
   * @return {Array.<number>} [r,g,b], values between 0-255.
   */


  static toRgbColorList(value) {
    const color = Cast.toRgbColorObject(value);
    return [color.r, color.g, color.b];
  }
  /**
   * Cast any Scratch argument to an RGB color object to be used for the renderer.
   * @param {*} value Value to convert to RGB color object.
   * @return {RGBOject} [r,g,b], values between 0-255.
   */


  static toRgbColorObject(value) {
    let color;

    if (typeof value === 'string' && value.substring(0, 1) === '#') {
      color = Color.hexToRgb(value); // If the color wasn't *actually* a hex color, cast to black

      if (!color) color = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
      };
    } else {
      color = Color.decimalToRgb(Cast.toNumber(value));
    }

    return color;
  }
  /**
   * Determine if a Scratch argument is a white space string (or null / empty).
   * @param {*} val value to check.
   * @return {boolean} True if the argument is all white spaces or null / empty.
   */


  static isWhiteSpace(val) {
    return val === null || typeof val === 'string' && val.trim().length === 0;
  }
  /**
   * Compare two values, using Scratch cast, case-insensitive string compare, etc.
   * In Scratch 2.0, this is captured by `interp.compare.`
   * @param {*} v1 First value to compare.
   * @param {*} v2 Second value to compare.
   * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.
   */


  static compare(v1, v2) {
    let n1 = Number(v1);
    let n2 = Number(v2);

    if (n1 === 0 && isNotActuallyZero(v1)) {
      n1 = NaN;
    } else if (n2 === 0 && isNotActuallyZero(v2)) {
      n2 = NaN;
    }

    if (isNaN(n1) || isNaN(n2)) {
      // At least one argument can't be converted to a number.
      // Scratch compares strings as case insensitive.
      const s1 = String(v1).toLowerCase();
      const s2 = String(v2).toLowerCase();

      if (s1 < s2) {
        return -1;
      } else if (s1 > s2) {
        return 1;
      }

      return 0;
    } // Handle the special case of Infinity


    if (n1 === Infinity && n2 === Infinity || n1 === -Infinity && n2 === -Infinity) {
      return 0;
    } // Compare as numbers.


    return n1 - n2;
  }
  /**
   * Determine if a Scratch argument number represents a round integer.
   * @param {*} val Value to check.
   * @return {boolean} True if number looks like an integer.
   */


  static isInt(val) {
    // Values that are already numbers.
    if (typeof val === 'number') {
      if (isNaN(val)) {
        // NaN is considered an integer.
        return true;
      } // True if it's "round" (e.g., 2.0 and 2).


      return val === Math.floor(val);
    } else if (typeof val === 'boolean') {
      // `True` and `false` always represent integer after Scratch cast.
      return true;
    } else if (typeof val === 'string') {
      // If it contains a decimal point, don't consider it an int.
      return val.indexOf('.') < 0;
    }

    return false;
  }

  static get LIST_INVALID() {
    return 'INVALID';
  }

  static get LIST_ALL() {
    return 'ALL';
  }
  /**
   * Compute a 1-based index into a list, based on a Scratch argument.
   * Two special cases may be returned:
   * LIST_ALL: if the block is referring to all of the items in the list.
   * LIST_INVALID: if the index was invalid in any way.
   * @param {*} index Scratch arg, including 1-based numbers or special cases.
   * @param {number} length Length of the list.
   * @param {boolean} acceptAll Whether it should accept "all" or not.
   * @return {(number|string)} 1-based index for list, LIST_ALL, or LIST_INVALID.
   */


  static toListIndex(index, length, acceptAll) {
    if (typeof index !== 'number') {
      if (index === 'all') {
        return acceptAll ? Cast.LIST_ALL : Cast.LIST_INVALID;
      }

      if (index === 'last') {
        if (length > 0) {
          return length;
        }

        return Cast.LIST_INVALID;
      } else if (index === 'random' || index === 'any') {
        if (length > 0) {
          return 1 + Math.floor(Math.random() * length);
        }

        return Cast.LIST_INVALID;
      }
    }

    index = Math.floor(Cast.toNumber(index));

    if (index < 1 || index > length) {
      return Cast.LIST_INVALID;
    }

    return index;
  }

}

module.exports = Cast;

/***/ }),

/***/ "./node_modules/scratch-vm/src/util/color.js":
/*!***************************************************!*\
  !*** ./node_modules/scratch-vm/src/util/color.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Color {
  /**
   * @typedef {object} RGBObject - An object representing a color in RGB format.
   * @property {number} r - the red component, in the range [0, 255].
   * @property {number} g - the green component, in the range [0, 255].
   * @property {number} b - the blue component, in the range [0, 255].
   */

  /**
   * @typedef {object} HSVObject - An object representing a color in HSV format.
   * @property {number} h - hue, in the range [0-359).
   * @property {number} s - saturation, in the range [0,1].
   * @property {number} v - value, in the range [0,1].
   */

  /** @type {RGBObject} */
  static get RGB_BLACK() {
    return {
      r: 0,
      g: 0,
      b: 0
    };
  }
  /** @type {RGBObject} */


  static get RGB_WHITE() {
    return {
      r: 255,
      g: 255,
      b: 255
    };
  }
  /**
   * Convert a Scratch decimal color to a hex string, #RRGGBB.
   * @param {number} decimal RGB color as a decimal.
   * @return {string} RGB color as #RRGGBB hex string.
   */


  static decimalToHex(decimal) {
    if (decimal < 0) {
      decimal += 0xFFFFFF + 1;
    }

    let hex = Number(decimal).toString(16);
    hex = "#".concat('000000'.substr(0, 6 - hex.length)).concat(hex);
    return hex;
  }
  /**
   * Convert a Scratch decimal color to an RGB color object.
   * @param {number} decimal RGB color as decimal.
   * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   */


  static decimalToRgb(decimal) {
    const a = decimal >> 24 & 0xFF;
    const r = decimal >> 16 & 0xFF;
    const g = decimal >> 8 & 0xFF;
    const b = decimal & 0xFF;
    return {
      r: r,
      g: g,
      b: b,
      a: a > 0 ? a : 255
    };
  }
  /**
   * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
   * @param {!string} hex Hex representation of the color.
   * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   */


  static hexToRgb(hex) {
    if (hex.startsWith('#')) {
      hex = hex.substring(1);
    }

    const parsed = parseInt(hex, 16);

    if (isNaN(parsed)) {
      return null;
    }

    if (hex.length === 6) {
      return {
        r: parsed >> 16 & 0xff,
        g: parsed >> 8 & 0xff,
        b: parsed & 0xff
      };
    } else if (hex.length === 3) {
      const r = parsed >> 8 & 0xf;
      const g = parsed >> 4 & 0xf;
      const b = parsed & 0xf;
      return {
        r: r << 4 | r,
        g: g << 4 | g,
        b: b << 4 | b
      };
    }

    return null;
  }
  /**
   * Convert an RGB color object to a hex color.
   * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   * @return {!string} Hex representation of the color.
   */


  static rgbToHex(rgb) {
    return Color.decimalToHex(Color.rgbToDecimal(rgb));
  }
  /**
   * Convert an RGB color object to a Scratch decimal color.
   * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   * @return {!number} Number representing the color.
   */


  static rgbToDecimal(rgb) {
    return (rgb.r << 16) + (rgb.g << 8) + rgb.b;
  }
  /**
  * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.
  * @param {!string} hex Hex representation of the color.
  * @return {!number} Number representing the color.
  */


  static hexToDecimal(hex) {
    return Color.rgbToDecimal(Color.hexToRgb(hex));
  }
  /**
   * Convert an HSV color to RGB format.
   * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
   * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   */


  static hsvToRgb(hsv) {
    let h = hsv.h % 360;
    if (h < 0) h += 360;
    const s = Math.max(0, Math.min(hsv.s, 1));
    const v = Math.max(0, Math.min(hsv.v, 1));
    const i = Math.floor(h / 60);
    const f = h / 60 - i;
    const p = v * (1 - s);
    const q = v * (1 - s * f);
    const t = v * (1 - s * (1 - f));
    let r;
    let g;
    let b;

    switch (i) {
      default:
      case 0:
        r = v;
        g = t;
        b = p;
        break;

      case 1:
        r = q;
        g = v;
        b = p;
        break;

      case 2:
        r = p;
        g = v;
        b = t;
        break;

      case 3:
        r = p;
        g = q;
        b = v;
        break;

      case 4:
        r = t;
        g = p;
        b = v;
        break;

      case 5:
        r = v;
        g = p;
        b = q;
        break;
    }

    return {
      r: Math.floor(r * 255),
      g: Math.floor(g * 255),
      b: Math.floor(b * 255)
    };
  }
  /**
   * Convert an RGB color to HSV format.
   * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
   */


  static rgbToHsv(rgb) {
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;
    const x = Math.min(Math.min(r, g), b);
    const v = Math.max(Math.max(r, g), b); // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate

    let h = 0;
    let s = 0;

    if (x !== v) {
      const f = r === x ? g - b : g === x ? b - r : r - g;
      const i = r === x ? 3 : g === x ? 5 : 1;
      h = (i - f / (v - x)) * 60 % 360;
      s = (v - x) / v;
    }

    return {
      h: h,
      s: s,
      v: v
    };
  }
  /**
   * Linear interpolation between rgb0 and rgb1.
   * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.
   * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.
   * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.
   * @return {RGBObject} the interpolated color.
   */


  static mixRgb(rgb0, rgb1, fraction1) {
    if (fraction1 <= 0) return rgb0;
    if (fraction1 >= 1) return rgb1;
    const fraction0 = 1 - fraction1;
    return {
      r: fraction0 * rgb0.r + fraction1 * rgb1.r,
      g: fraction0 * rgb0.g + fraction1 * rgb1.g,
      b: fraction0 * rgb0.b + fraction1 * rgb1.b
    };
  }

}

module.exports = Color;

/***/ }),

/***/ "./node_modules/scratch-vm/src/util/log.js":
/*!*************************************************!*\
  !*** ./node_modules/scratch-vm/src/util/log.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const minilog = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js");

minilog.enable();
module.exports = minilog('vm');

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=extension-worker.06a73eb85e00c266b6d7.js.map