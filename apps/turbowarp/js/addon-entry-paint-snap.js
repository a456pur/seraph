(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-paint-snap"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/paint-snap/userstyle.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/paint-snap/userstyle.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-paint-snap-button {\n  position: relative;\n}\n.sa-paint-snap-button:focus-within {\n  background-color: hsla(0, 100%, 65%, 0.2);\n}\n.sa-paint-snap-button[data-enabled=\"true\"] .sa-paint-snap-image {\n  filter: brightness(0) invert(1);\n}\n.sa-paint-snap-button[data-enabled=\"true\"] {\n  background-color: #ff4c4c;\n}\n\n.sa-paint-snap-group {\n  position: relative;\n  flex-direction: row;\n}\n\n.sa-paint-snap-settings-wrapper {\n  position: absolute;\n  justify-items: center;\n  left: 50%;\n  width: 1.95rem;\n  height: 1.95rem;\n  display: grid;\n}\n\n.sa-paint-snap-settings {\n  position: absolute;\n  bottom: 100%;\n  /* based on the styles for the color dropdown */\n  padding: 4px;\n  border-radius: 4px;\n  border: 1px solid var(--paint-ui-pane-border, #ddd);\n  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.3);\n  transition-property: bottom, opacity;\n  transition-duration: 500ms;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  opacity: 0;\n  pointer-events: none;\n  background: var(--ui-primary, white);\n  min-height: 100%;\n  min-width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25em;\n}\n.sa-paint-snap-settings[data-visible=\"true\"] {\n  bottom: calc(100% + 22px);\n  pointer-events: auto;\n  opacity: 1;\n}\n\n.sa-paint-snap-settings-line {\n  display: flex;\n  justify-content: flex-end;\n  align-items: baseline;\n}\n\n.sa-paint-snap-settings-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  text-align: center;\n  border: 0;\n  background: transparent;\n  -moz-appearance: textfield;\n  border: 0;\n  outline: 0;\n}\n\n.sa-paint-snap-settings-input::-webkit-outer-spin-button,\n.sa-paint-snap-settings-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.sa-paint-snap-settings-tip {\n  position: absolute;\n  bottom: 0;\n  transform: translateY(100%);\n  right: calc(50% - 7px);\n}\n.sa-paint-snap-settings-polygon {\n  fill: var(--ui-primary, white);\n  stroke: var(--paint-ui-pane-border, #ddd);\n}\n\n.sa-paint-snap-settings-separator {\n  flex-grow: 1;\n  border-bottom: 1px solid currentColor;\n  margin: 4px;\n  opacity: 0.25;\n}\n\n.sa-paint-snap-settings-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25em;\n  align-items: flex-end;\n  width: 100%;\n}\n\n.sa-paint-snap-settings-section-title {\n  font-size: 1.2em;\n  font-weight: 500;\n  align-self: flex-start;\n  margin-left: 4px;\n}\n\n.sa-paint-snap-settings-label {\n  white-space: nowrap;\n}\n\n.sa-paint-snap-image[data-shrink=\"true\"] {\n  height: 1em;\n  width: 1em;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/decrement.svg":
/*!************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/decrement.svg ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUgMTEuMzU4aDE3LjUwMXYxLjI4NUgzLjI1eiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/increment.svg":
/*!************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/increment.svg ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUgMTEuMzU4aDE3LjUwMXYxLjI4NUgzLjI1eiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwKSIgc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUtMTIuNjQyaDE3LjUwMXYxLjI4NUgzLjI1eiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/off.svg":
/*!******************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/off.svg ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzU3NWU3NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0ibTExLjI1IDQuNzUtNi41IDYuNW0wLTYuNSA2LjUgNi41Ii8+PC9zdmc+");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/on.svg":
/*!*****************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/on.svg ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGw9IiM1NzVlNzUiIGQ9Ik0xMi43MzYgMy45N2EuNzMzLjczMyAwIDAgMSAxLjA0NyAwYy4yODYuMjg5LjI5Ljc1Ni4wMSAxLjA1TDcuODggMTIuMDFhLjczMy43MzMgMCAwIDEtMS4wNjUuMDJMMy4yMTcgOC4zODRhLjc1Ny43NTcgMCAwIDEgMC0xLjA2LjczMy43MzMgMCAwIDEgMS4wNDcgMGwzLjA1MiAzLjA5MyA1LjQtNi40MjVhLjI0Ny4yNDcgMCAwIDEgLjAyLS4wMjJaIi8+PC9zdmc+");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/settings.svg":
/*!***********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/settings.svg ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGNpcmNsZSBjeD0iMTIuNTUiIGN5PSIxMi41NSIgcj0iOS4wNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTc1ZTc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iNyIvPjxjaXJjbGUgY3g9IjYxLjk0MyIgY3k9IjYxLjQzNiIgcj0iNy41IiBmaWxsPSIjNTc1ZTc1Ii8+PHBhdGggZmlsbD0iIzU3NWU3NSIgZD0ibTUzLjExOSAyNy43NDMtOC4yNjcgOC4yNjZMMzEuNjkgMjIuODQ3bC04LjU3IDguNTczIDEzLjE2IDEzLjE2LTguMjY2IDguMjY2aDI1LjEwNXoiIGNvbG9yPSIjNTc1ZTc1Ii8+PHBhdGggZmlsbD0iIzU3NWU3NSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNDYuMjI3IDEwMGMuNTMtMy4yMDUgMS4yMTktNi4zNzQgMi4xMTItOS40N2wtNC44MDQtMS4zODZjLS45NTQgMy4zMS0xLjY4MyA2LjY2OS0yLjI0IDEwLjA0em0zLjYwMy0xNC4wNjhhNjMuOTM1IDYzLjkzNSAwIDAgMSAzLjkzLTguNzc1bC00LjM5My0yLjM4NmE2OC45MTcgNjguOTE3IDAgMCAwLTQuMjQgOS40NnptNi4zODItMTIuOWMxLjc1My0yLjY5NCAzLjY5LTUuMjQ5IDUuODQtNy41NzhsLTMuNjczLTMuMzkyYy0yLjM3MiAyLjU2OS00LjQ3NCA1LjM1LTYuMzU3IDguMjQxem05LjIzNC0xMC45NDFhNTcuOTUgNTcuOTUgMCAwIDEgNy42MDktNS44MTNsLTIuNzAzLTQuMjA4YTYyLjk0NCA2Mi45NDQgMCAwIDAtOC4yNjYgNi4zMTd6bTExLjc1Mi04LjI2MmE3MS4yNjUgNzEuMjY1IDAgMCAxIDguNzg2LTRsLTEuNzY2LTQuNjc3YTc2LjI0MiA3Ni4yNDIgMCAwIDAtOS40MDEgNC4yODF6bTEzLjM3Mi01LjU3MkE4Ny45MjYgODcuOTI2IDAgMCAxIDEwMCA0NS45MUw5OS4wNTcgNDFhOTIuOTM4IDkyLjkzOCAwIDAgMC05Ljk2NyAyLjQ4eiIgY29sb3I9IiM1NzVlNzUiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/snap.svg":
/*!*******************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/snap.svg ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iIzU3NWU3NSIgc3Ryb2tlPSIjNTc1ZTc1IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMzIiIGQ9Ik0xOTEuOTggNDYzLjU4di00OE05MC4xNiA0MjEuNGwzMy45NC0zMy45NG0tNzYuMTItNjcuODhoNDgiLz48cGF0aCBmaWxsPSIjNTc1ZTc1IiBkPSJNNDIyLjIgODkuODJhMTQ0IDE0NCAwIDAgMC0yMDMuNzEtLjA3bC02Ny44OCA2Ny44OCA2Ny44OCA2Ny44OSA2Ny44OC02Ny44OWE0OCA0OCAwIDAgMSA2OC40Ni41OWMxOC4zIDE4LjkyIDE3LjQ4IDQ5LjI0LTEuMTQgNjcuODZsLTY3LjMyIDY3LjMyIDY3Ljg4IDY3Ljg4IDY2LjkxLTY2LjkxYzU2LjM3LTU2LjM3IDU3LjM3LTE0OC4xNSAxLjA0LTIwNC41NVpNODIuNzE5IDIyNS41MTdsNDUuMjU0LTQ1LjI1NCA2Ny44ODMgNjcuODgyTDE1MC42IDI5My40ek0yMTguNDkgMzYxLjI3bDQ1LjI1NC00NS4yNTQgNjcuODgyIDY3Ljg4Mi00NS4yNTUgNDUuMjU1eiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./src/addons/addons/paint-snap/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/paint-snap/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/paint-snap/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/paint-snap/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_icons_decrement_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./icons/decrement.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/decrement.svg");
/* harmony import */ var _url_loader_icons_increment_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./icons/increment.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/increment.svg");
/* harmony import */ var _url_loader_icons_off_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-loader!./icons/off.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/off.svg");
/* harmony import */ var _url_loader_icons_on_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-loader!./icons/on.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/on.svg");
/* harmony import */ var _url_loader_icons_settings_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url-loader!./icons/settings.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/settings.svg");
/* harmony import */ var _url_loader_icons_snap_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! url-loader!./icons/snap.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/snap.svg");
/* generated by pull.js */








const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "icons/decrement.svg": _url_loader_icons_decrement_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "icons/increment.svg": _url_loader_icons_increment_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  "icons/off.svg": _url_loader_icons_off_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  "icons/on.svg": _url_loader_icons_on_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
  "icons/settings.svg": _url_loader_icons_settings_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
  "icons/snap.svg": _url_loader_icons_snap_svg__WEBPACK_IMPORTED_MODULE_7__["default"]
};

/***/ }),

/***/ "./src/addons/addons/paint-snap/genScalePoints.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/paint-snap/genScalePoints.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createScalePoints; });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ "./src/addons/addons/paint-snap/state.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function createScalePoints(paper, lib, objects, sx, sy) {
  const {
    view: {
      CENTER,
      ART_BOARD_BOUNDS
    }
  } = lib;

  const toPoints = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].pageAxes ? _objectSpread(_objectSpread({}, sx ? {
    bounds_cx: {
      type: "xcoord",
      value: CENTER.x
    }
  } : {}), sy ? {
    bounds_cy: {
      type: "ycoord",
      value: CENTER.y
    }
  } : {}) : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].pageEdges ? _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, sx ? {
    bounds_l: {
      type: "xcoord",
      value: ART_BOARD_BOUNDS.left,
      clamp: {
        min: ART_BOARD_BOUNDS.top,
        max: ART_BOARD_BOUNDS.bottom
      }
    },
    bounds_r: {
      type: "xcoord",
      value: ART_BOARD_BOUNDS.right,
      clamp: {
        min: ART_BOARD_BOUNDS.top,
        max: ART_BOARD_BOUNDS.bottom
      }
    }
  } : {}), sy ? {
    bounds_t: {
      type: "ycoord",
      value: ART_BOARD_BOUNDS.top,
      clamp: {
        min: ART_BOARD_BOUNDS.left,
        max: ART_BOARD_BOUNDS.right
      }
    },
    bounds_b: {
      type: "ycoord",
      value: ART_BOARD_BOUNDS.bottom,
      clamp: {
        min: ART_BOARD_BOUNDS.left,
        max: ART_BOARD_BOUNDS.right
      }
    }
  } : {}), sx ? {
    bounds_w: {
      type: "width",
      value: CENTER.y,
      clamp: {
        min: ART_BOARD_BOUNDS.left,
        max: ART_BOARD_BOUNDS.right
      }
    }
  } : {}), sy ? {
    bounds_h: {
      type: "height",
      value: CENTER.x,
      clamp: {
        min: ART_BOARD_BOUNDS.bottom,
        max: ART_BOARD_BOUNDS.top
      }
    }
  } : {}) : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].objectEdges ? Object.fromEntries(objects.filter(item => !(item.selected || item.data.isHelperItem)).map(item => [sx && ["item_".concat(item.id, "_r"), {
    type: "xcoord",
    value: item.bounds.right
  }], sx && ["item_".concat(item.id, "_l"), {
    type: "xcoord",
    value: item.bounds.left
  }], sy && ["item_".concat(item.id, "_t"), {
    type: "ycoord",
    value: item.bounds.top
  }], sy && ["item_".concat(item.id, "_b"), {
    type: "ycoord",
    value: item.bounds.bottom
  }], sx && ["item_".concat(item.id, "_w"), {
    type: "width",
    value: item.bounds.bottom,
    clamp: {
      min: item.bounds.left,
      max: item.bounds.right
    }
  }], sy && ["item_".concat(item.id, "_h"), {
    type: "height",
    value: item.bounds.left,
    clamp: {
      min: item.bounds.bottom,
      max: item.bounds.top
    }
  }]].filter(Boolean)).flat(1)) : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].objectMidlines ? Object.fromEntries(objects.filter(item => !(item.selected || item.data.isHelperItem)).map(item => [sx && ["item_".concat(item.id, "_cx"), {
    type: "xcoord",
    value: item.bounds.center.x
  }], sy && ["item_".concat(item.id, "_cy"), {
    type: "ycoord",
    value: item.bounds.center.y
  }]].filter(Boolean)).flat(1)) : {});

  return toPoints;
}

/***/ }),

/***/ "./src/addons/addons/paint-snap/genSnapPoints.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/paint-snap/genSnapPoints.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSnapPoints; });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ "./src/addons/addons/paint-snap/state.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function createSnapPoints(paper, selectionBounds, lib, objects) {
  const {
    view: {
      CENTER,
      ART_BOARD_BOUNDS
    }
  } = lib;

  const fromPoints = _objectSpread(_objectSpread(_objectSpread({}, _state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"].boxCenter ? {
    center: selectionBounds.center
  } : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"].boxCorners ? {
    topLeft: selectionBounds.topLeft,
    topRight: selectionBounds.topRight,
    bottomLeft: selectionBounds.bottomLeft,
    bottomRight: selectionBounds.bottomRight
  } : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"].boxEdgeMids ? {
    left: new paper.Point(selectionBounds.left, selectionBounds.center.y),
    right: new paper.Point(selectionBounds.right, selectionBounds.center.y),
    top: new paper.Point(selectionBounds.center.x, selectionBounds.top),
    bottom: new paper.Point(selectionBounds.center.x, selectionBounds.bottom)
  } : {});

  const toPoints = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].pageCenter ? {
    bounds_c: {
      type: "point",
      value: CENTER
    }
  } : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].pageAxes ? {
    bounds_cx: {
      type: "xcoord",
      value: CENTER.x
    },
    bounds_cy: {
      type: "ycoord",
      value: CENTER.y
    }
  } : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].pageEdges ? {
    bounds_l: {
      type: "xcoord",
      value: ART_BOARD_BOUNDS.left,
      clamp: {
        min: ART_BOARD_BOUNDS.top,
        max: ART_BOARD_BOUNDS.bottom
      }
    },
    bounds_r: {
      type: "xcoord",
      value: ART_BOARD_BOUNDS.right,
      clamp: {
        min: ART_BOARD_BOUNDS.top,
        max: ART_BOARD_BOUNDS.bottom
      }
    },
    bounds_t: {
      type: "ycoord",
      value: ART_BOARD_BOUNDS.top,
      clamp: {
        min: ART_BOARD_BOUNDS.left,
        max: ART_BOARD_BOUNDS.right
      }
    },
    bounds_b: {
      type: "ycoord",
      value: ART_BOARD_BOUNDS.bottom,
      clamp: {
        min: ART_BOARD_BOUNDS.left,
        max: ART_BOARD_BOUNDS.right
      }
    },
    bounds_lc: {
      type: "point",
      value: new paper.Point(ART_BOARD_BOUNDS.left, CENTER.y)
    },
    bounds_rc: {
      type: "point",
      value: new paper.Point(ART_BOARD_BOUNDS.right, CENTER.y)
    },
    bounds_tc: {
      type: "point",
      value: new paper.Point(CENTER.x, ART_BOARD_BOUNDS.top)
    },
    bounds_bc: {
      type: "point",
      value: new paper.Point(CENTER.x, ART_BOARD_BOUNDS.bottom)
    }
  } : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].pageCorners ? {
    bounds_tl: {
      type: "point",
      value: ART_BOARD_BOUNDS.topLeft
    },
    bounds_tr: {
      type: "point",
      value: ART_BOARD_BOUNDS.topRight
    },
    bounds_bl: {
      type: "point",
      value: ART_BOARD_BOUNDS.bottomLeft
    },
    bounds_br: {
      type: "point",
      value: ART_BOARD_BOUNDS.bottomRight
    }
  } : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].objectEdges ? Object.fromEntries(objects.filter(item => !(item.selected || item.data.isHelperItem)).map(item => [["item_".concat(item.id, "_r"), {
    type: "itemSideVert",
    value: item.bounds.right,
    clamp: {
      min: item.bounds.top,
      max: item.bounds.bottom
    }
  }], ["item_".concat(item.id, "_l"), {
    type: "itemSideVert",
    value: item.bounds.left,
    clamp: {
      min: item.bounds.top,
      max: item.bounds.bottom
    }
  }], ["item_".concat(item.id, "_t"), {
    type: "itemSideHoriz",
    value: item.bounds.top,
    clamp: {
      min: item.bounds.left,
      max: item.bounds.right
    }
  }], ["item_".concat(item.id, "_b"), {
    type: "itemSideHoriz",
    value: item.bounds.bottom,
    clamp: {
      min: item.bounds.left,
      max: item.bounds.right
    }
  }]]).flat(1)) : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].objectCenters ? Object.fromEntries(objects.filter(item => !item.selected).map(item => [["item_".concat(item.id, "_c"), {
    type: "point",
    value: item.bounds.center
  }]]).flat(1)) : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].objectMidlines ? Object.fromEntries(objects.filter(item => !item.selected).map(item => [["item_".concat(item.id, "_cx"), {
    type: "xcoord",
    value: item.bounds.center.x
  }], ["item_".concat(item.id, "_cy"), {
    type: "ycoord",
    value: item.bounds.center.y
  }]]).flat(1)) : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].objectCorners ? Object.fromEntries(objects.filter(item => !(item.selected || item.data.isHelperItem)).map(item => [["item_".concat(item.id, "_tl"), {
    type: "point",
    value: item.bounds.topLeft
  }], ["item_".concat(item.id, "_tr"), {
    type: "point",
    value: item.bounds.topRight
  }], ["item_".concat(item.id, "_bl"), {
    type: "point",
    value: item.bounds.bottomLeft
  }], ["item_".concat(item.id, "_br"), {
    type: "point",
    value: item.bounds.bottomRight
  }]]).flat(1)) : {});

  return {
    from: fromPoints,
    to: toPoints
  };
}

/***/ }),

/***/ "./src/addons/addons/paint-snap/helpers.js":
/*!*************************************************!*\
  !*** ./src/addons/addons/paint-snap/helpers.js ***!
  \*************************************************/
/*! exports provided: loadModules, Modes, VectorModes, BitmapModes, GradientToolsModes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModules", function() { return loadModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modes", function() { return Modes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorModes", function() { return VectorModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapModes", function() { return BitmapModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientToolsModes", function() { return GradientToolsModes; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function loadModules(paper) {
  // https://github.com/LLK/scratch-paint/blob/2a9fb2356d961200dc849b5b0a090d33f473c0b5/src/helper/math.js
  const checkPointsClose = function checkPointsClose(startPos, eventPoint, threshold) {
    const xOff = Math.abs(startPos.x - eventPoint.x);
    const yOff = Math.abs(startPos.y - eventPoint.y);

    if (xOff < threshold && yOff < threshold) {
      return true;
    }

    return false;
  }; // Thanks Mikko Mononen! https://github.com/memononen/stylii


  const snapDeltaToAngle = function snapDeltaToAngle(delta, snapAngle) {
    let angle = Math.atan2(delta.y, delta.x);
    angle = Math.round(angle / snapAngle) * snapAngle;
    const dirx = Math.cos(angle);
    const diry = Math.sin(angle);
    const d = dirx * delta.x + diry * delta.y;
    return new paper.Point(dirx * d, diry * d);
  }; // https://github.com/LLK/scratch-paint/blob/2a9fb2356d961200dc849b5b0a090d33f473c0b5/src/helper/layer.js


  const CROSSHAIR_FULL_OPACITY = 0.75;

  const _getLayer = function _getLayer(layerString) {
    for (const layer of paper.project.layers) {
      if (layer.data && layer.data[layerString]) {
        return layer;
      }
    }
  };

  const getDragCrosshairLayer = function getDragCrosshairLayer() {
    return _getLayer("isDragCrosshairLayer");
  };

  const getGuideLayer = function getGuideLayer() {
    return _getLayer("isGuideLayer");
  }; // https://github.com/LLK/scratch-paint/blob/2a9fb2356d961200dc849b5b0a090d33f473c0b5/src/helper/view.js
  // Vectors are imported and exported at SVG_ART_BOARD size.
  // Once they are imported however, both SVGs and bitmaps are on
  // canvases of ART_BOARD size.
  // (This is for backwards compatibility, to handle both assets
  // designed for 480 x 360, and bitmap resolution 2 bitmaps)


  const SVG_ART_BOARD_WIDTH = 480;
  const SVG_ART_BOARD_HEIGHT = 360;
  const ART_BOARD_WIDTH = SVG_ART_BOARD_WIDTH * 2;
  const ART_BOARD_HEIGHT = SVG_ART_BOARD_HEIGHT * 2;
  const CENTER = new paper.Point(ART_BOARD_WIDTH / 2, ART_BOARD_HEIGHT / 2);
  const ART_BOARD_BOUNDS = new paper.Rectangle(0, 0, ART_BOARD_WIDTH, ART_BOARD_HEIGHT);
  const MAX_WORKSPACE_BOUNDS = new paper.Rectangle(-ART_BOARD_WIDTH / 4, -ART_BOARD_HEIGHT / 4, ART_BOARD_WIDTH * 1.5, ART_BOARD_HEIGHT * 1.5);
  /**
   * Mouse actions are clamped to action bounds
   * @param {boolean} isBitmap True if the editor is in bitmap mode, false if it is in vector mode
   * @returns {paper.Rectangle} the bounds within which mouse events should work in the paint editor
   */

  const getActionBounds = isBitmap => {
    if (isBitmap) {
      return ART_BOARD_BOUNDS;
    }

    return paper.view.bounds.unite(ART_BOARD_BOUNDS).intersect(MAX_WORKSPACE_BOUNDS);
  };

  const setDefaultGuideStyle = function setDefaultGuideStyle(item) {
    item.strokeWidth = 1 / paper.view.zoom;
    item.opacity = 1;
    item.blendMode = "normal";
    item.guide = true;
  };

  const GUIDE_BLUE = "#009dec";

  const hoverBounds = function hoverBounds(item, expandBy) {
    let bounds = item.internalBounds;

    if (expandBy) {
      bounds = bounds.expand(expandBy);
    }

    const rect = new paper.Path.Rectangle(bounds);
    rect.matrix = item.matrix;
    setDefaultGuideStyle(rect);
    rect.parent = getGuideLayer();
    rect.strokeColor = GUIDE_BLUE;
    rect.fillColor = null;
    rect.data.isHelperItem = true;
    rect.data.origItem = item;
    rect.bringToFront();
    return rect;
  };

  return {
    math: {
      checkPointsClose,
      snapDeltaToAngle
    },
    layer: {
      CROSSHAIR_FULL_OPACITY,
      getDragCrosshairLayer,
      getLayer: _getLayer
    },
    view: {
      CENTER,
      ART_BOARD_BOUNDS,
      MAX_WORKSPACE_BOUNDS,
      getActionBounds
    },
    guide: {
      hoverBounds
    }
  };
}

const keyMirror = obj => Object.fromEntries(Object.entries(obj).map(([k]) => [k, k])); // https://github.com/LLK/scratch-paint/blob/2a9fb2356d961200dc849b5b0a090d33f473c0b5/src/lib/modes.js


const vectorModesObj = {
  BRUSH: null,
  ERASER: null,
  LINE: null,
  FILL: null,
  SELECT: null,
  RESHAPE: null,
  OVAL: null,
  RECT: null,
  ROUNDED_RECT: null,
  TEXT: null
};
const bitmapModesObj = {
  BIT_BRUSH: null,
  BIT_LINE: null,
  BIT_OVAL: null,
  BIT_RECT: null,
  BIT_TEXT: null,
  BIT_FILL: null,
  BIT_ERASER: null,
  BIT_SELECT: null
};
const VectorModes = keyMirror(vectorModesObj);
const BitmapModes = keyMirror(bitmapModesObj);
const Modes = keyMirror(_objectSpread(_objectSpread({}, vectorModesObj), bitmapModesObj));
const GradientToolsModes = keyMirror({
  FILL: null,
  SELECT: null,
  RESHAPE: null,
  OVAL: null,
  RECT: null,
  LINE: null,
  BIT_OVAL: null,
  BIT_RECT: null,
  BIT_SELECT: null,
  BIT_FILL: null
});


/***/ }),

/***/ "./src/addons/addons/paint-snap/state.js":
/*!***********************************************!*\
  !*** ./src/addons/addons/paint-snap/state.js ***!
  \***********************************************/
/*! exports provided: snapOn, snapTo, snapFrom, threshold, guideColor, loadSettings, setSnapTo, setSnapFrom, setThreshold, enable, disable, toggle, setGuideColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapOn", function() { return snapOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapTo", function() { return snapTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapFrom", function() { return snapFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "threshold", function() { return threshold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guideColor", function() { return guideColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSettings", function() { return loadSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSnapTo", function() { return setSnapTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSnapFrom", function() { return setSnapFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setThreshold", function() { return setThreshold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enable", function() { return enable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disable", function() { return disable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGuideColor", function() { return setGuideColor; });
let snapOn = true; //const ls = localStorage;

const snapTo = {
  pageEdges: true,
  pageCenter: true,
  pageAxes: true,
  pageCorners: false,
  objectEdges: true,
  objectCenters: true,
  objectMidlines: true,
  objectCorners: false
};
const snapFrom = {
  boxCenter: true,
  boxCorners: false,
  boxEdgeMids: false
};
let threshold = 10;
let guideColor;
/**
 *
 * @param {import("../../addon-api/content-script/typedef").UserscriptAddon} addon
 */

function loadSettings({
  settings
}) {
  for (const point in snapTo) {
    if (Object.prototype.hasOwnProperty.call(snapTo, point)) setSnapTo(point, settings.get(point));
  }

  for (const point in snapFrom) {
    if (Object.prototype.hasOwnProperty.call(snapFrom, point)) setSnapFrom(point, settings.get(point));
  }

  setThreshold(settings.get("threshold"));
  toggle(settings.get("enable-default"));
} // Will update for addon storage api, but not yet.

/*if (ls.getItem("sa-paint-snap-snapTo")) {
  const stored = JSON.parse(ls.getItem("sa-paint-snap-snapTo"));
  Object.assign(snapTo, stored);
}

if (ls.getItem("sa-paint-snap-snapFrom")) {
  const stored = JSON.parse(ls.getItem("sa-paint-snap-snapFrom"));
  Object.assign(snapFrom, stored);
}

if (ls.getItem("sa-paint-snap-threshold")) {
  const stored = JSON.parse(ls.getItem("sa-paint-snap-threshold"));
  threshold = stored;
}*/

function setSnapTo(point, to) {
  snapTo[point] = !!to; //ls.setItem("sa-paint-snap-snapTo", JSON.stringify(snapTo));
}
function setSnapFrom(point, to) {
  snapFrom[point] = !!to; //ls.setItem("sa-paint-snap-snapFrom", JSON.stringify(snapFrom));
}
function setThreshold(thresh) {
  threshold = thresh; //ls.setItem("sa-paint-snap-threshold", JSON.stringify(threshold));
}
function enable() {
  snapOn = true;
}
function disable() {
  snapOn = false;
}
function toggle(enabled) {
  if (enabled) enable();else disable();
}
function setGuideColor(hex) {
  guideColor = hex;
}

/***/ }),

/***/ "./src/addons/addons/paint-snap/ui.js":
/*!********************************************!*\
  !*** ./src/addons/addons/paint-snap/ui.js ***!
  \********************************************/
/*! exports provided: initUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initUI", function() { return initUI; });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ "./src/addons/addons/paint-snap/state.js");

/** @type {import("../../addon-api/content-script/typedef").UserscriptUtilities} */

function initUI({
  addon,
  msg
}) {
  const createGroup = () => {
    const el = document.createElement("div");
    el.className = "sa-paint-snap-group";
    return el;
  };

  const createSeparator = () => {
    const el = document.createElement("div");
    el.className = "sa-paint-snap-settings-separator";
    return el;
  };

  const createButton = ({
    useButtonTag
  } = {}) => {
    const el = document.createElement(useButtonTag ? "button" : "span");
    el.className = "sa-paint-snap-button";
    el.setAttribute("role", "button");
    return el;
  };

  const createButtonImage = name => {
    const el = document.createElement("img");
    el.className = "sa-paint-snap-image";
    el.draggable = false;
    el.src = addon.self.getResource("/icons/" + name + ".svg")
    /* rewritten by pull.js */
    ;
    return el;
  };

  const controlsGroup = createGroup();
  addon.tab.displayNoneWhileDisabled(controlsGroup, {
    display: "flex"
  });
  const settingPageWrapper = document.createElement("div");
  settingPageWrapper.className = "sa-paint-snap-settings-wrapper";
  controlsGroup.appendChild(settingPageWrapper);
  const settingsPage = document.createElement("div");
  settingsPage.className = "sa-paint-snap-settings";
  settingPageWrapper.appendChild(settingsPage); //todo msg

  const SVG_NS = "http://www.w3.org/2000/svg";
  const settingsTip = document.createElementNS(SVG_NS, "svg");
  settingsTip.setAttribute("class", "sa-paint-snap-settings-tip");
  settingsTip.setAttribute("width", "14");
  settingsTip.setAttribute("height", "7");
  const settingsTipShape = document.createElementNS(SVG_NS, "polygon");
  settingsTipShape.setAttribute("class", "sa-paint-snap-settings-polygon");
  settingsTipShape.setAttribute("points", "0,0 7,7, 14,0");
  settingsTip.appendChild(settingsTipShape);
  settingsPage.appendChild(settingsTip);
  const toggleButton = createButton();
  toggleButton.addEventListener("click", () => {
    if (!_state_js__WEBPACK_IMPORTED_MODULE_0__["snapOn"]) {
      if (!Object.values(_state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"]).some(e => e)) {
        Object(_state_js__WEBPACK_IMPORTED_MODULE_0__["setSnapTo"])("pageCenter", true);
      }

      if (!Object.values(_state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"]).some(e => e)) {
        Object(_state_js__WEBPACK_IMPORTED_MODULE_0__["setSnapFrom"])("boxCenter", true);
      }
    }

    Object(_state_js__WEBPACK_IMPORTED_MODULE_0__["toggle"])(!_state_js__WEBPACK_IMPORTED_MODULE_0__["snapOn"]);
    toggleButton.dataset.enabled = _state_js__WEBPACK_IMPORTED_MODULE_0__["snapOn"];
  });
  toggleButton.title = msg("toggle");
  toggleButton.appendChild(createButtonImage("snap"));
  toggleButton.dataset.enabled = _state_js__WEBPACK_IMPORTED_MODULE_0__["snapOn"];
  controlsGroup.appendChild(toggleButton);
  const settingButton = createButton();
  settingButton.addEventListener("click", () => setSettingsOpen(!areSettingsOpen()));
  settingButton.title = msg("settings");
  settingButton.appendChild(createButtonImage("settings"));
  controlsGroup.appendChild(settingButton);
  const settingsOpenUpdaters = [];

  const setSettingsOpen = open => {
    settingButton.dataset.enabled = open;
    settingsPage.dataset.visible = open;
    if (open) settingsOpenUpdaters.forEach(f => {
      try {
        f === null || f === void 0 ? void 0 : f();
      } catch (_unused) {}
    });else if (Object.values(_state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"]).every(e => !e) || Object.values(_state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"]).every(e => !e)) {
      Object(_state_js__WEBPACK_IMPORTED_MODULE_0__["toggle"])(false);
      toggleButton.dataset.enabled = false;
    }
  };

  const areSettingsOpen = () => settingsPage.dataset.visible === "true";

  const createToggle = (button1Text, button2Text, defaultValue, onChange = () => {}) => {
    const values = [button1Text, button2Text];
    const group = createGroup();
    const button1 = createButton({
      useButtonTag: true
    });
    const button2 = createButton({
      useButtonTag: true
    });
    const icon1 = createButtonImage(button1Text);
    const icon2 = createButtonImage(button2Text);
    icon1.dataset.shrink = icon2.dataset.shrink = true;
    button1.appendChild(icon1);
    button2.appendChild(icon2);
    button1.setAttribute("aria-label", button1.title = msg(button1Text));
    button2.setAttribute("aria-label", button2.title = msg(button2Text));

    const setSelectedButton = (button, e, suppress = false) => {
      button1.dataset.enabled = !!button;
      button2.dataset.enabled = !button;
      if (!suppress) onChange(values[button]);
    };

    setSelectedButton(1 - values.indexOf(defaultValue), null, true);
    button1.addEventListener("click", setSelectedButton.bind(button1, 1));
    button2.addEventListener("click", setSelectedButton.bind(button2, 0));
    group.append(button1, button2);
    return group;
  };

  const createNumberInput = (defaultValue, onChange = () => {}, min = -Infinity, max = Infinity, step = 1) => {
    const group = createGroup();
    const filler = document.createElement("div");
    filler.style.width = "20px";
    const valueButton = createButton();
    valueButton.appendChild(filler);
    const valueInput = document.createElement("input");
    valueInput.className = "sa-paint-snap-settings-input";
    valueInput.type = "number";
    valueInput.step = step;
    valueInput.min = min;
    valueInput.max = max;
    valueInput.value = defaultValue;
    valueInput.addEventListener("change", () => {
      if (valueInput.value > max) valueInput.value = max;
      if (valueInput.value < min) valueInput.value = min;
      onChange(valueInput.value);
    });
    valueInput.addEventListener("blur", () => {
      if (!valueInput.value) valueInput.value = "0";
    });
    valueButton.appendChild(valueInput);
    const decrementButton = createButton();
    decrementButton.appendChild(createButtonImage("decrement"));
    decrementButton.addEventListener("click", () => {
      if (valueInput.value > min) {
        valueInput.value = Number(valueInput.value) - 1;
        onChange(Number(valueInput.value) + 1);
      }
    });
    const incrementButton = createButton();
    incrementButton.appendChild(createButtonImage("increment"));
    incrementButton.addEventListener("click", () => {
      if (valueInput.value < max) {
        valueInput.value = Number(valueInput.value) + 1;
        onChange(Number(valueInput.value) + 1);
      }
    });
    group.append(decrementButton, valueButton, incrementButton);
    return group;
  };

  const createSettingWithLabel = (settingId, settingElem) => {
    const container = document.createElement("label");
    container.className = "sa-paint-snap-settings-line";
    const labelElem = document.createElement("div");
    labelElem.className = "sa-paint-snap-settings-label";
    labelElem.textContent = msg(settingId);
    container.append(labelElem, settingElem);
    settingsOpenUpdaters.push(() => {
      const onBtn = settingElem.querySelector("[aria-label=\"".concat(msg("on"), "\"]"));
      const offBtn = settingElem.querySelector("[aria-label=\"".concat(msg("off"), "\"]"));

      if (settingId in _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"]) {
        onBtn.dataset.enabled = !!_state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"][settingId];
        offBtn.dataset.enabled = !_state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"][settingId];
      }

      if (settingId in _state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"]) {
        onBtn.dataset.enabled = !!_state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"][settingId];
        offBtn.dataset.enabled = !_state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"][settingId];
      }
    });
    return container;
  };

  const createSection = (title, ...settingElems) => {
    const sectionContainer = document.createElement("div");
    sectionContainer.className = "sa-paint-snap-settings-section";
    const titleElem = document.createElement("span");
    titleElem.appendChild(document.createTextNode(title));
    titleElem.className = "sa-paint-snap-settings-section-title";
    sectionContainer.appendChild(titleElem);
    sectionContainer.append(...settingElems);
    return sectionContainer;
  };

  const threshSetting = createSettingWithLabel("threshold", createNumberInput(_state_js__WEBPACK_IMPORTED_MODULE_0__["threshold"], value => {
    Object(_state_js__WEBPACK_IMPORTED_MODULE_0__["setThreshold"])(value);
  }, 4, 50, 1));

  const toOnOff = bool => bool ? "on" : "off";

  const toBool = onOff => !!["on", "off"].indexOf(onOff);

  const toggleParams = (defaultValue, onChange = () => {}) => ["off", "on", toOnOff(defaultValue), value => onChange(toBool(value))];

  const createSnapToSetting = forPoint => createSettingWithLabel(forPoint, createToggle(...toggleParams(_state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"][forPoint], enabled => {
    Object(_state_js__WEBPACK_IMPORTED_MODULE_0__["toggle"])(true);
    toggleButton.dataset.enabled = true;
    Object(_state_js__WEBPACK_IMPORTED_MODULE_0__["setSnapTo"])(forPoint, enabled);
  })));

  const snapToSection = createSection(msg("snapTo"), createSnapToSetting("pageCenter"), createSnapToSetting("pageAxes"), createSnapToSetting("pageEdges"), createSnapToSetting("pageCorners"), createSnapToSetting("objectCenters"), createSnapToSetting("objectMidlines"), createSnapToSetting("objectEdges"), createSnapToSetting("objectCorners"));

  const createSnapFromSetting = forPoint => createSettingWithLabel(forPoint, createToggle(...toggleParams(_state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"][forPoint], enabled => {
    Object(_state_js__WEBPACK_IMPORTED_MODULE_0__["setSnapFrom"])(forPoint, enabled);
  })));

  const snapFromSection = createSection(msg("snapFrom"), createSnapFromSetting("boxCenter"), createSnapFromSetting("boxCorners"), createSnapFromSetting("boxEdgeMids"));
  settingsPage.append(threshSetting, createSeparator(), snapToSection, createSeparator(), snapFromSection);

  const controlsLoop = async () => {
    let hasRunOnce = false;

    while (true) {
      const canvasControls = await addon.tab.waitForElement("[class^='paint-editor_canvas-controls']", {
        markAsSeen: true,
        reduxEvents: ["scratch-gui/navigation/ACTIVATE_TAB", "scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE", "scratch-gui/targets/UPDATE_TARGET_LIST"],
        reduxCondition: state => state.scratchGui.editorTab.activeTabIndex === 1 && !state.scratchGui.mode.isPlayerOnly
      });
      const zoomControlsContainer = canvasControls.querySelector("[class^='paint-editor_zoom-controls']");
      addon.tab.appendToSharedSpace({
        space: "paintEditorZoomControls",
        element: controlsGroup,
        order: 2
      });

      if (!hasRunOnce) {
        hasRunOnce = true;
        const groupClass = zoomControlsContainer.firstChild.className;
        const buttonClass = zoomControlsContainer.firstChild.firstChild.className;
        const imageClass = zoomControlsContainer.firstChild.firstChild.firstChild.className;

        for (const el of document.querySelectorAll(".sa-paint-snap-group")) {
          el.className += " " + groupClass;
        }

        for (const el of document.querySelectorAll(".sa-paint-snap-button")) {
          el.className += " " + buttonClass;
        }

        for (const el of document.querySelectorAll(".sa-paint-snap-image")) {
          el.className += " " + imageClass;
        }
      }
    }
  };

  controlsLoop();
}

/***/ }),

/***/ "./src/addons/addons/paint-snap/updateScaleTool.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/paint-snap/updateScaleTool.js ***!
  \*********************************************************/
/*! exports provided: updateScaleTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateScaleTool", function() { return updateScaleTool; });
/* harmony import */ var _genScalePoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genScalePoints.js */ "./src/addons/addons/paint-snap/genScalePoints.js");
/* harmony import */ var _genSnapPoints_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genSnapPoints.js */ "./src/addons/addons/paint-snap/genSnapPoints.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.js */ "./src/addons/addons/paint-snap/helpers.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.js */ "./src/addons/addons/paint-snap/state.js");





const getScaleTool = tool => {
  return tool.boundingBoxTool._modeMap.SCALE;
};

const updateScaleTool = (paper, tool) => {
  const lib = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_2__["loadModules"])(paper);
  const {
    view: {
      getActionBounds
    },
    layer: {
      getLayer
    }
  } = lib;
  const scaleTool = getScaleTool(tool); // https://github.com/LLK/scratch-paint/blob/develop/src/helper/selection-tools/scale-tool.js

  const MIN_SCALE_FACTOR = 0.0001;
  const selectionSizeGuide = {
    endLeft: new paper.Path.Line({
      from: [0, 0],
      to: [0, 0],
      strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]),
      strokeWidth: 1 / paper.view.zoom,
      visible: true,
      data: {
        isHelperItem: true,
        noSelect: true,
        noHover: true,
        saPaintSnapGuide: true
      },
      selected: false
    }),
    endRight: new paper.Path.Line({
      from: [0, 0],
      to: [0, 0],
      strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]),
      strokeWidth: 1 / paper.view.zoom,
      visible: true,
      data: {
        isHelperItem: true,
        noSelect: true,
        noHover: true,
        saPaintSnapGuide: true
      },
      selected: false
    }),
    line: new paper.Path.Line({
      from: [0, 0],
      to: [0, 0],
      strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]),
      strokeWidth: 1 / paper.view.zoom,
      visible: true,
      data: {
        isHelperItem: true,
        noSelect: true,
        noHover: true,
        saPaintSnapGuide: true
      },
      selected: false
    }),
    group: new paper.Group({
      children: [],
      visible: false
    })
  };
  const matchingSizeGuide = {
    endLeft: new paper.Path.Line({
      from: [0, 0],
      to: [0, 0],
      strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]),
      strokeWidth: 1 / paper.view.zoom,
      visible: true,
      data: {
        isHelperItem: true,
        noSelect: true,
        noHover: true,
        saPaintSnapGuide: true
      },
      selected: false
    }),
    endRight: new paper.Path.Line({
      from: [0, 0],
      to: [0, 0],
      strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]),
      strokeWidth: 1 / paper.view.zoom,
      visible: true,
      data: {
        isHelperItem: true,
        noSelect: true,
        noHover: true,
        saPaintSnapGuide: true
      },
      selected: false
    }),
    line: new paper.Path.Line({
      from: [0, 0],
      to: [0, 0],
      strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]),
      strokeWidth: 1 / paper.view.zoom,
      visible: true,
      data: {
        isHelperItem: true,
        noSelect: true,
        noHover: true,
        saPaintSnapGuide: true
      },
      selected: false
    }),
    group: new paper.Group({
      children: [],
      visible: false
    })
  };
  selectionSizeGuide.endLeft.remove();
  matchingSizeGuide.endLeft.remove();
  selectionSizeGuide.endRight.remove();
  matchingSizeGuide.endRight.remove();
  selectionSizeGuide.line.remove();
  matchingSizeGuide.line.remove();
  selectionSizeGuide.group.remove();
  matchingSizeGuide.group.remove();
  selectionSizeGuide.group.addChildren([selectionSizeGuide.endLeft, selectionSizeGuide.line, selectionSizeGuide.endRight]);
  matchingSizeGuide.group.addChildren([matchingSizeGuide.endLeft, matchingSizeGuide.line, matchingSizeGuide.endRight]);
  let axisLineX = new paper.Path.Line({
    from: [0, 0],
    to: [0, 0],
    strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]),
    strokeWidth: 1 / paper.view.zoom,
    visible: false,
    data: {
      isHelperItem: true,
      noSelect: true,
      noHover: true,
      saPaintSnapGuide: true,
      axis: "x"
    },
    selected: false
  });
  let axisLineY = new paper.Path.Line({
    from: [0, 0],
    to: [0, 0],
    strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]),
    strokeWidth: 1 / paper.view.zoom,
    visible: false,
    data: {
      isHelperItem: true,
      noSelect: true,
      noHover: true,
      saPaintSnapGuide: true,
      axis: "y"
    },
    selected: false
  });
  axisLineX.remove();
  axisLineY.remove();

  const fixGuideSizes = () => {
    axisLineX.strokeWidth = 1 / paper.view.zoom;
    axisLineY.strokeWidth = 1 / paper.view.zoom;
    axisLineX.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]);
    axisLineY.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]);
    selectionSizeGuide.endLeft.strokeWidth = 1 / paper.view.zoom;
    matchingSizeGuide.endLeft.strokeWidth = 1 / paper.view.zoom;
    selectionSizeGuide.endRight.strokeWidth = 1 / paper.view.zoom;
    matchingSizeGuide.endRight.strokeWidth = 1 / paper.view.zoom;
    selectionSizeGuide.line.strokeWidth = 1 / paper.view.zoom;
    matchingSizeGuide.line.strokeWidth = 1 / paper.view.zoom;
    selectionSizeGuide.endLeft.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]);
    matchingSizeGuide.endLeft.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]);
    selectionSizeGuide.endRight.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]);
    matchingSizeGuide.endRight.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]);
    selectionSizeGuide.line.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]);
    matchingSizeGuide.line.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]);
    axisLineX.bringToFront();
    axisLineY.bringToFront();
    getLayer("isGuideLayer").addChildren([axisLineY, axisLineX, selectionSizeGuide.group, matchingSizeGuide.group]);
  };

  const priority = ["width", "height", "itemSideVert", "itemSideHoriz", "xcoord", "ycoord", "generated", undefined];

  const removeGuides = () => {
    selectionSizeGuide.group.remove();
    selectionSizeGuide.group.visible = false;
    matchingSizeGuide.group.remove();
    matchingSizeGuide.group.visible = false;
    axisLineX.remove();
    axisLineX.visible = false;
    axisLineY.remove();
    axisLineY.visible = false;
  };

  scaleTool.constructor.prototype.onMouseDrag = function (event) {
    if (!this.active) return;
    const point = event.point;
    const bounds = getActionBounds(this.isBitmap);
    point.x = Math.max(bounds.left, Math.min(point.x, bounds.right));
    point.y = Math.max(bounds.top, Math.min(point.y, bounds.bottom));
    if (!this.lastPoint) this.lastPoint = event.lastPoint;
    const delta = point.subtract(this.lastPoint);
    this.lastPoint = point;

    if (event.modifiers.alt) {
      this.centered = true;
      this.itemGroup.position = this.origCenter;
      this.pivot = this.origCenter;
    } else {
      if (this.centered) {
        // Reset position if we were just in alt
        this.centered = false;
        this.itemGroup.scale(1 / this.lastSx, 1 / this.lastSy, this.pivot);

        if (this.selectionAnchor) {
          this.selectionAnchor.scale(this.lastSx, this.lastSy);
        }

        this.lastSx = 1;
        this.lastSy = 1;
      }

      this.pivot = this.origPivot;
    }

    this.corner = this.corner.add(delta);
    let size = this.corner.subtract(this.pivot);

    if (event.modifiers.alt) {
      size = size.multiply(2);
    }

    let sx = 1.0;
    let sy = 1.0;

    if (Math.abs(this.origSize.x) > 0.0000001) {
      sx = size.x / this.origSize.x;
    }

    if (Math.abs(this.origSize.y) > 0.0000001) {
      sy = size.y / this.origSize.y;
    }

    const sortByPrioOrDist = (a, b) => {
      const prioDiff = priority.indexOf(a.type) - priority.indexOf(b.type);
      if (prioDiff) return prioDiff;
      return a.distance - b.distance;
    };

    const paintLayer = getLayer("isPaintingLayer");
    const doesSx = _state_js__WEBPACK_IMPORTED_MODULE_3__["snapOn"] && (this.isCorner && !event.modifiers.shift || Math.abs(this.origSize.x) > 0.0000001);
    const doesSy = _state_js__WEBPACK_IMPORTED_MODULE_3__["snapOn"] && (this.isCorner && !event.modifiers.shift || Math.abs(this.origSize.y) > 0.0000001);
    const scaledThreshold = _state_js__WEBPACK_IMPORTED_MODULE_3__["threshold"] / paper.view.zoom;

    const canSnap = coord => coord.distance < scaledThreshold;

    const format = ([coordName, coord]) => ({
      type: coord.type,
      distance: (() => {
        switch (coord.type) {
          case "width":
            {
              return Math.abs(Math.abs(size.x) - Math.abs(coord.clamp.max - coord.clamp.min));
            }

          case "height":
            {
              return Math.abs(Math.abs(size.y) - Math.abs(coord.clamp.max - coord.clamp.min));
            }

          case "xcoord":
          case "itemSideVert":
            {
              return Math.abs(this.corner.x - coord.value);
            }

          case "ycoord":
          case "itemSideHoriz":
            {
              return Math.abs(this.corner.y - coord.value);
            }

          default:
            break;
        }
      })(),
      name: coordName,
      coord: coord
    });

    const snapXCoords = Object(_genScalePoints_js__WEBPACK_IMPORTED_MODULE_0__["default"])(paper, lib, paintLayer.children, doesSx, false);
    const canSnapXCoords = Object.entries(snapXCoords).map(format).filter(canSnap).sort(sortByPrioOrDist);
    const snapYCoords = Object(_genScalePoints_js__WEBPACK_IMPORTED_MODULE_0__["default"])(paper, lib, paintLayer.children, false, doesSy);
    const canSnapYCoords = Object.entries(snapYCoords).map(format).filter(canSnap).sort(sortByPrioOrDist);
    const closestSnapX = canSnapXCoords[0];
    const closestSnapY = canSnapYCoords[0];
    const signx = sx > 0 ? 1 : -1;
    const signy = sy > 0 ? 1 : -1; // TODO: show correct guides

    if (closestSnapX) {
      switch (closestSnapX.type) {
        case "width":
          {
            const newSize = new paper.Point(Math.abs(closestSnapX.coord.clamp.max - closestSnapX.coord.clamp.min), this.corner.y);
            sx = newSize.x / this.origSize.x;
            break;
          }

        case "xcoord":
        case "itemSideVert":
          {
            const newSize = new paper.Point(closestSnapX.coord.value, this.corner.y).subtract(this.pivot);
            sx = newSize.x / this.origSize.x;
            if (event.modifiers.alt) sx *= 2;
            break;
          }

        default:
          break;
      }
    }

    if (closestSnapY) {
      switch (closestSnapY.type) {
        case "height":
          {
            const newSize = new paper.Point(this.corner.x, Math.abs(closestSnapY.coord.clamp.max - closestSnapY.coord.clamp.min));
            sy = newSize.y / this.origSize.y;
            break;
          }

        case "ycoord":
        case "itemSideHoriz":
          {
            const newSize = new paper.Point(this.corner.x, closestSnapY.coord.value).subtract(this.pivot);
            sy = newSize.y / this.origSize.y;
            if (event.modifiers.alt) sy *= 2;
            break;
          }

        default:
          break;
      }
    }

    const oldSX = sx;
    const oldSY = sy;

    if (this.isCorner && !event.modifiers.shift) {
      sx = sy = Math.max(Math.abs(sx), Math.abs(sy));
      sx *= signx;
      sy *= signy;
    }

    sx = signx * Math.max(Math.abs(sx), MIN_SCALE_FACTOR);
    sy = signy * Math.max(Math.abs(sy), MIN_SCALE_FACTOR);
    this.itemGroup.scale(sx / this.lastSx, sy / this.lastSy, this.pivot);

    if (this.selectionAnchor) {
      this.selectionAnchor.scale(this.lastSx / sx, this.lastSy / sy);
    }

    removeGuides();
    if (Math.abs(oldSX) === Math.abs(sx) && closestSnapX || Math.abs(oldSY) === Math.abs(sy) && closestSnapY) fixGuideSizes();

    if (Math.abs(oldSX) === Math.abs(sx) && closestSnapX) {
      switch (closestSnapX.type) {
        case "width":
          {
            const matchy = closestSnapX.coord.value;
            const selectiony = this.itemGroup.bounds.bottom;
            matchingSizeGuide.endLeft.firstSegment.point = new paper.Point(closestSnapX.coord.clamp.min, matchy);
            matchingSizeGuide.endLeft.lastSegment.point = new paper.Point(closestSnapX.coord.clamp.min, matchy + 5 / paper.view.zoom);
            matchingSizeGuide.endRight.firstSegment.point = new paper.Point(closestSnapX.coord.clamp.max, matchy);
            matchingSizeGuide.endRight.lastSegment.point = new paper.Point(closestSnapX.coord.clamp.max, matchy + 5 / paper.view.zoom);
            matchingSizeGuide.line.firstSegment.point = new paper.Point(closestSnapX.coord.clamp.min, matchy + 3 / paper.view.zoom);
            matchingSizeGuide.line.lastSegment.point = new paper.Point(closestSnapX.coord.clamp.max, matchy + 3 / paper.view.zoom);
            matchingSizeGuide.group.visible = true;
            matchingSizeGuide.group.bringToFront();
            selectionSizeGuide.endLeft.firstSegment.point = new paper.Point(this.itemGroup.bounds.left, selectiony + 2 / paper.view.zoom);
            selectionSizeGuide.endLeft.lastSegment.point = new paper.Point(this.itemGroup.bounds.left, selectiony + 7 / paper.view.zoom);
            selectionSizeGuide.endRight.firstSegment.point = new paper.Point(this.itemGroup.bounds.right, selectiony + 2 / paper.view.zoom);
            selectionSizeGuide.endRight.lastSegment.point = new paper.Point(this.itemGroup.bounds.right, selectiony + 7 / paper.view.zoom);
            selectionSizeGuide.line.firstSegment.point = new paper.Point(this.itemGroup.bounds.left, selectiony + 4.5 / paper.view.zoom);
            selectionSizeGuide.line.lastSegment.point = new paper.Point(this.itemGroup.bounds.right, selectiony + 4.5 / paper.view.zoom);
            selectionSizeGuide.group.visible = true;
            selectionSizeGuide.group.bringToFront();
            break;
          }

        case "xcoord":
        case "itemSideVert":
          {
            axisLineX.firstSegment.point = new paper.Point(closestSnapX.coord.value, bounds.top);
            axisLineX.lastSegment.point = new paper.Point(closestSnapX.coord.value, bounds.bottom);
            axisLineX.visible = true;
            axisLineX.bringToFront();
            break;
          }

        default:
          break;
      }
    }

    if (Math.abs(oldSY) === Math.abs(sy) && closestSnapY) {
      switch (closestSnapY.type) {
        case "height":
          {
            const matchx = closestSnapY.coord.value;
            const selectionx = this.itemGroup.bounds.left;
            matchingSizeGuide.endLeft.firstSegment.point = new paper.Point(matchx, closestSnapY.coord.clamp.min);
            matchingSizeGuide.endLeft.lastSegment.point = new paper.Point(matchx - 5 / paper.view.zoom, closestSnapY.coord.clamp.min);
            matchingSizeGuide.endRight.firstSegment.point = new paper.Point(matchx, closestSnapY.coord.clamp.max);
            matchingSizeGuide.endRight.lastSegment.point = new paper.Point(matchx - 5 / paper.view.zoom, closestSnapY.coord.clamp.max);
            matchingSizeGuide.line.firstSegment.point = new paper.Point(matchx - 3 / paper.view.zoom, closestSnapY.coord.clamp.min);
            matchingSizeGuide.line.lastSegment.point = new paper.Point(matchx - 3 / paper.view.zoom, closestSnapY.coord.clamp.max);
            matchingSizeGuide.group.visible = true;
            matchingSizeGuide.group.bringToFront();
            selectionSizeGuide.endLeft.firstSegment.point = new paper.Point(selectionx - 2 / paper.view.zoom, this.itemGroup.bounds.top);
            selectionSizeGuide.endLeft.lastSegment.point = new paper.Point(selectionx - 7 / paper.view.zoom, this.itemGroup.bounds.top);
            selectionSizeGuide.endRight.firstSegment.point = new paper.Point(selectionx - 2 / paper.view.zoom, this.itemGroup.bounds.bottom);
            selectionSizeGuide.endRight.lastSegment.point = new paper.Point(selectionx - 7 / paper.view.zoom, this.itemGroup.bounds.bottom);
            selectionSizeGuide.line.firstSegment.point = new paper.Point(selectionx - 4.5 / paper.view.zoom, this.itemGroup.bounds.top);
            selectionSizeGuide.line.lastSegment.point = new paper.Point(selectionx - 4.5 / paper.view.zoom, this.itemGroup.bounds.bottom);
            selectionSizeGuide.group.visible = true;
            selectionSizeGuide.group.bringToFront();
            break;
          }

        case "ycoord":
        case "itemSideHoriz":
          {
            axisLineY.firstSegment.point = new paper.Point(bounds.left, closestSnapY.coord.value);
            axisLineY.lastSegment.point = new paper.Point(bounds.right, closestSnapY.coord.value);
            axisLineY.visible = true;
            axisLineY.bringToFront();
            break;
          }

        default:
          break;
      }
    }

    this.lastSx = sx;
    this.lastSy = sy;
  };

  const oldMouseUp = scaleTool.constructor.prototype.onMouseUp;

  scaleTool.constructor.prototype.onMouseUp = function () {
    removeGuides();
    oldMouseUp.call(this);
  };
};

/***/ }),

/***/ "./src/addons/addons/paint-snap/updateSelectTool.js":
/*!**********************************************************!*\
  !*** ./src/addons/addons/paint-snap/updateSelectTool.js ***!
  \**********************************************************/
/*! exports provided: updateSelectTool, isSelectTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSelectTool", function() { return updateSelectTool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSelectTool", function() { return isSelectTool; });
/* harmony import */ var _genSnapPoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genSnapPoints.js */ "./src/addons/addons/paint-snap/genSnapPoints.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./src/addons/addons/paint-snap/helpers.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.js */ "./src/addons/addons/paint-snap/state.js");




const getMoveTool = tool => {
  return tool.boundingBoxTool._modeMap.MOVE;
};

const updateSelectTool = (paper, tool) => {
  const lib = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_1__["loadModules"])(paper);
  const {
    math: {
      checkPointsClose,
      snapDeltaToAngle
    },
    view: {
      getActionBounds,
      CENTER
    },
    layer: {
      getDragCrosshairLayer,
      CROSSHAIR_FULL_OPACITY,
      getLayer
    },
    guide: {
      hoverBounds
    }
  } = lib;
  const moveTool = getMoveTool(tool); // https://github.com/LLK/scratch-paint/blob/2a9fb2356d961200dc849b5b0a090d33f473c0b5/src/helper/selection-tools/move-tool.js

  const FADE_DISTANCE = 10;
  let guideLine = new paper.Path.Line({
    from: [0, 0],
    to: [0, 0],
    strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_2__["guideColor"]),
    strokeWidth: 1 / paper.view.zoom,
    visible: false,
    data: {
      isHelperItem: true,
      noSelect: true,
      noHover: true,
      saPaintSnapGuide: true
    },
    selected: false
  });
  const guidePointParts = {
    shadow: null,
    circle: null
  };
  const guidePoint = new paper.Group({
    children: [],
    visible: false
  }); // Paper adds them by default, and we don't want them in the canvas yet.

  guideLine.remove();
  guidePoint.remove();
  let itemIndicator;

  const fixGuideSizes = () => {
    guidePointParts.shadow = new paper.Path.Circle({
      center: new paper.Point(0, 0),
      radius: 5.5 / paper.view.zoom,
      fillColor: "black",
      opacity: 0.12,
      data: {
        isHelperItem: true,
        noSelect: true,
        noHover: true,
        saPaintSnapGuide: true
      },
      visible: true,
      guide: true
    });
    guidePointParts.circle = new paper.Path.Circle({
      center: new paper.Point(0, 0),
      radius: 4 / paper.view.zoom,
      fillColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_2__["guideColor"]),
      data: {
        isScaleHandle: false,
        isHelperItem: true,
        noSelect: true,
        noHover: true,
        saPaintSnapGuide: true
      },
      visible: true,
      guide: true
    });
    guidePoint.removeChildren();
    guidePoint.addChildren([guidePointParts.shadow, guidePointParts.circle]);
    guideLine.strokeWidth = 1 / paper.view.zoom;
    guideLine.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_2__["guideColor"]);
    guideLine.bringToFront();
    guidePoint.bringToFront();
    getLayer("isGuideLayer").addChildren([guideLine, guidePoint]);
  };

  let removeGuides;

  function onMouseDrag(event) {
    var _getLayer$children$fi, _getLayer$children$fi2;

    const point = event.point;
    const actionBounds = getActionBounds(this.mode in _helpers_js__WEBPACK_IMPORTED_MODULE_1__["BitmapModes"]);
    point.x = Math.max(actionBounds.left, Math.min(point.x, actionBounds.right));
    point.y = Math.max(actionBounds.top, Math.min(point.y, actionBounds.bottom));
    const dragVector = point.subtract(event.downPoint);
    const scaledThreshold = _state_js__WEBPACK_IMPORTED_MODULE_2__["threshold"] / paper.view.zoom;
    let snapVector;

    if (this.selectedItems.length === 0) {
      return;
    }

    const selectionBounds = this.selectionCenter._owner;
    const newCenter = this.selectionCenter.add(dragVector);

    const getDist = (p1, p2) => {
      return p1.getDistance(p2);
    };

    const selectionAnchor = (_getLayer$children$fi = (_getLayer$children$fi2 = getLayer("isGuideLayer").children.find(c => c.data.isSelectionBound)) === null || _getLayer$children$fi2 === void 0 ? void 0 : _getLayer$children$fi2.selectionAnchor) !== null && _getLayer$children$fi !== void 0 ? _getLayer$children$fi : {};

    const resetAnchorColor = () => {
      selectionAnchor.strokeColor = new paper.Color(0.30196078431372547, 0.592156862745098, 1);
      selectionAnchor.fillColor = null;
    };

    removeGuides = () => {
      var _itemIndicator;

      guideLine.remove();
      guidePoint.remove();
      guidePoint.visible = false;
      guideLine.visible = false;
      (_itemIndicator = itemIndicator) === null || _itemIndicator === void 0 ? void 0 : _itemIndicator.remove();
      if (itemIndicator) itemIndicator.visible = false;
      resetAnchorColor();
    };

    removeGuides();

    if (!event.modifiers.shift && this.mode !== _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Modes"].RESHAPE) {
      const paintLayer = getLayer("isPaintingLayer");
      const snapPoints = Object(_genSnapPoints_js__WEBPACK_IMPORTED_MODULE_0__["default"])(paper, selectionBounds, lib, paintLayer.children);
      const fromPoints = snapPoints.from;
      const toPoints = snapPoints.to;

      const configDefFn = pointDef => {
        if (!pointDef.clamp) pointDef.clamp = {
          min: -Infinity,
          max: Infinity
        };
        if (pointDef.type === "point") return () => pointDef.value;
        if (pointDef.type === "xcoord" || pointDef.type === "itemSideVert") return point => new paper.Point(pointDef.value, Math.min(Math.max(point.y, pointDef.clamp.min), pointDef.clamp.max));
        if (pointDef.type === "ycoord" || pointDef.type === "itemSideHoriz") return point => new paper.Point(Math.min(Math.max(point.x, pointDef.clamp.min), pointDef.clamp.max), pointDef.value);
        if (pointDef.type === "generator") return pointDef.value;
      };

      const generateSnapPointsFor = point => Object.fromEntries(Object.entries(toPoints).map(([k, v]) => [k, {
        type: v.type,
        point: configDefFn(v)(point)
      }]));

      const generatedSnapPoints = Object.entries(fromPoints).map(([pointPos, point]) => ({
        pointPos,
        origPoint: point,
        point: point.add(dragVector),
        snapPoints: generateSnapPointsFor(point.add(dragVector))
      }));
      const priority = ["point", "itemSideVert", "itemSideHoriz", "xcoord", "ycoord", "generated", undefined];

      const sortByPrioOrDist = (a, b) => {
        const prioDiff = priority.indexOf(a.snapPointType) - priority.indexOf(b.snapPointType);
        if (prioDiff) return prioDiff;
        return a.distance - b.distance;
      };

      const closestSnapForEachPoint = generatedSnapPoints.map(({
        point,
        origPoint,
        snapPoints
      }) => {
        var _snapPoints$closestSn, _snapPoints$closestSn2;

        const snappablePoints = Object.entries(snapPoints).filter(([pos, snapPoint]) => checkPointsClose(point, snapPoint.point, scaledThreshold)).map(([pos, snapPoint]) => ({
          pos,
          distance: getDist(snapPoint.point, point),
          snapPointType: snapPoint.type
        }));
        const closestSnapPoint = snappablePoints.sort(sortByPrioOrDist)[0] || {
          pos: "",
          distance: Infinity
        };
        return {
          point: origPoint,
          snapPoint: (_snapPoints$closestSn = snapPoints[closestSnapPoint.pos]) === null || _snapPoints$closestSn === void 0 ? void 0 : _snapPoints$closestSn.point,
          snapPointType: (_snapPoints$closestSn2 = snapPoints[closestSnapPoint.pos]) === null || _snapPoints$closestSn2 === void 0 ? void 0 : _snapPoints$closestSn2.type,
          distance: closestSnapPoint.distance,
          pos: closestSnapPoint.pos
        };
      }).sort(sortByPrioOrDist);
      const closestSnapPoint = closestSnapForEachPoint.sort(sortByPrioOrDist)[0];
      removeGuides();

      if (closestSnapPoint !== null && closestSnapPoint !== void 0 && closestSnapPoint.snapPoint) {
        var _closestSnapPoint$pos;

        fixGuideSizes();
        snapVector = closestSnapPoint.snapPoint.subtract(closestSnapPoint.point);
        const itemID = (_closestSnapPoint$pos = closestSnapPoint.pos.match(/item_(\d+)_/)) === null || _closestSnapPoint$pos === void 0 ? void 0 : _closestSnapPoint$pos[1];

        if (itemID) {
          const item = paper.project.getItem({
            id: parseInt(itemID, 10)
          });

          if (item) {
            itemIndicator = hoverBounds(item);
          }
        }

        if (closestSnapPoint.point.equals(this.selectionCenter) && closestSnapPoint.snapPointType === "point") {
          selectionAnchor.fillColor = selectionAnchor.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_2__["guideColor"]);
        } else {
          resetAnchorColor();

          switch (closestSnapPoint.snapPointType) {
            case "point":
              {
                guidePoint.visible = true;
                guidePoint.position = closestSnapPoint.snapPoint;
                guidePoint.bringToFront();
                break;
              }

            case "xcoord":
            case "itemSideVert":
              {
                guideLine.firstSegment.point = new paper.Point(closestSnapPoint.snapPoint.x, actionBounds.top);
                guideLine.lastSegment.point = new paper.Point(closestSnapPoint.snapPoint.x, actionBounds.bottom);
                guideLine.visible = true;
                guideLine.bringToFront();
                break;
              }

            case "ycoord":
            case "itemSideHoriz":
              {
                guideLine.firstSegment.point = new paper.Point(actionBounds.left, closestSnapPoint.snapPoint.y);
                guideLine.lastSegment.point = new paper.Point(actionBounds.right, closestSnapPoint.snapPoint.y);
                guideLine.visible = true;
                guideLine.bringToFront();
                break;
              }
          }
        }
      }
    }

    let bounds;

    for (const item of this.selectedItems) {
      // add the position of the item before the drag started
      // for later use in the snap calculation
      if (!item.data.origPos) {
        item.data.origPos = item.position;
      }

      if (snapVector) {
        item.position = item.data.origPos.add(snapVector);
      } else if (event.modifiers.shift) {
        item.position = item.data.origPos.add(snapDeltaToAngle(dragVector, Math.PI / 4));
      } else {
        item.position = item.data.origPos.add(dragVector);
      }

      if (bounds) {
        bounds = bounds.unite(item.bounds);
      } else {
        bounds = item.bounds;
      }
    }

    if (this.firstDrag) {
      // Show the center crosshair above the selected item while dragging.
      getDragCrosshairLayer().visible = true;
      this.firstDrag = false;
    } // The rotation center crosshair should be opaque over the entire selection bounding box, and fade out to
    // totally transparent outside the selection bounding box.


    let opacityMultiplier = 1;

    if (CENTER.y < bounds.top && CENTER.x < bounds.left || CENTER.y > bounds.bottom && CENTER.x < bounds.left || CENTER.y < bounds.top && CENTER.x > bounds.right || CENTER.y > bounds.bottom && CENTER.x > bounds.right) {
      // rotation center is to one of the 4 corners of the selection bounding box
      const distX = Math.max(CENTER.x - bounds.right, bounds.left - CENTER.x);
      const distY = Math.max(CENTER.y - bounds.bottom, bounds.top - CENTER.y);
      const dist = Math.sqrt(distX * distX + distY * distY);
      opacityMultiplier = Math.max(0, 1 - dist / (FADE_DISTANCE / paper.view.zoom));
    } else if (CENTER.y < bounds.top || CENTER.y > bounds.bottom) {
      // rotation center is above or below the selection bounding box
      opacityMultiplier = Math.max(0, 1 - (Math.abs(CENTER.y - newCenter.y) - bounds.height / 2) / (FADE_DISTANCE / paper.view.zoom));
    } else if (CENTER.x < bounds.left || CENTER.x > bounds.right) {
      // rotation center is left or right of the selection bounding box
      opacityMultiplier = Math.max(0, 1 - (Math.abs(CENTER.x - newCenter.x) - bounds.width / 2) / (FADE_DISTANCE / paper.view.zoom));
    } // else the rotation center is within selection bounds, always show drag crosshair at full opacity


    getDragCrosshairLayer().opacity = CROSSHAIR_FULL_OPACITY * opacityMultiplier;
  }

  const oldMouseDrag = moveTool.constructor.prototype.onMouseDrag;
  moveTool.constructor.prototype.onMouseDrag = onMouseDrag;
  const oldMouseDown = moveTool.constructor.prototype.onMouseDown;

  moveTool.constructor.prototype.onMouseDown = function (...a) {
    if (_state_js__WEBPACK_IMPORTED_MODULE_2__["snapOn"]) moveTool.constructor.prototype.onMouseDrag = onMouseDrag;else moveTool.constructor.prototype.onMouseDrag = oldMouseDrag;
    oldMouseDown.apply(this, a);
  };

  const oldMouseUp = moveTool.constructor.prototype.onMouseUp;

  moveTool.constructor.prototype.onMouseUp = function (...a) {
    var _removeGuides;

    (_removeGuides = removeGuides) === null || _removeGuides === void 0 ? void 0 : _removeGuides();
    oldMouseUp.apply(this, a);
  };
};
const isSelectTool = tool => {
  return "selectionBoxTool" in tool && "boundingBoxTool" in tool;
};

/***/ }),

/***/ "./src/addons/addons/paint-snap/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/paint-snap/userscript.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _updateSelectTool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateSelectTool.js */ "./src/addons/addons/paint-snap/updateSelectTool.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ "./src/addons/addons/paint-snap/state.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ "./src/addons/addons/paint-snap/ui.js");
/* harmony import */ var _updateScaleTool_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateScaleTool.js */ "./src/addons/addons/paint-snap/updateScaleTool.js");




/** @type {(api: import("../../addon-api/content-script/typedef").UserscriptUtilities) => Promise<void>} */

/* harmony default export */ __webpack_exports__["default"] = (async function (api) {
  const {
    addon
  } = api;
  addon.self.addEventListener("disabled", _state_js__WEBPACK_IMPORTED_MODULE_1__["disable"]);
  addon.self.addEventListener("reenabled", _state_js__WEBPACK_IMPORTED_MODULE_1__["enable"]);
  Object(_state_js__WEBPACK_IMPORTED_MODULE_1__["loadSettings"])(addon);
  const paper = await addon.tab.traps.getPaper();
  const [tool] = paper.tools;
  Object(_state_js__WEBPACK_IMPORTED_MODULE_1__["toggle"])(addon.settings.get("enable-default"));
  Object(_state_js__WEBPACK_IMPORTED_MODULE_1__["setGuideColor"])(addon.settings.get("guide-color"));
  addon.settings.addEventListener("change", () => Object(_state_js__WEBPACK_IMPORTED_MODULE_1__["setGuideColor"])(addon.settings.get("guide-color")));

  if (Object(_updateSelectTool_js__WEBPACK_IMPORTED_MODULE_0__["isSelectTool"])(tool)) {
    Object(_updateSelectTool_js__WEBPACK_IMPORTED_MODULE_0__["updateSelectTool"])(paper, tool);
    Object(_updateScaleTool_js__WEBPACK_IMPORTED_MODULE_3__["updateScaleTool"])(paper, tool);
  }

  Object(_ui_js__WEBPACK_IMPORTED_MODULE_2__["initUI"])(api);
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-paint-snap.js.map