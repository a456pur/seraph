(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-sprite-properties"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/sprite-properties/userstyle.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/sprite-properties/userstyle.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class^=\"sprite-info_sprite-info_\"] {\n  height: 0;\n  padding: 0 0.75rem;\n  overflow: hidden;\n  transition-property: height, padding, transform;\n  transition-duration: var(--spriteProperties-transitionDuration);\n}\n\n.sa-hide-sprite-properties [class^=\"sprite-info_sprite-info_\"] {\n  border: none;\n}\n\n[class^=\"sprite-selector_scroll-wrapper_\"] {\n  height: 100%;\n  transition-property: height;\n  transition-duration: var(--spriteProperties-transitionDuration);\n}\n\n.sa-show-sprite-properties [class^=\"sprite-info_sprite-info_\"] {\n  /* The height needs to be known for the animation to work.\n     6.5rem + 5px is the exact height of sprite info when\n     this addon is enabled:\n       0.75rem (top padding)\n     + 2rem + 2px (.icon-wrappers in the first row)\n     + 0.5rem (margin between rows)\n     + 2rem + 2px (.icon-wrappers in the second row)\n     + 1.25rem (close button)\n     + 1px (bottom border) */\n  height: calc(6.5rem + 5px);\n  padding: 0.75rem;\n  padding-bottom: 0;\n}\n.sa-sprite-properties-wide-locale.sa-show-sprite-properties [class^=\"sprite-info_sprite-info_\"] {\n  /* In wide languages, add in addition to the previous:\n     + 2 * 0.625rem * 1.2 (each row's text label now uses vertical space)\n     + 2 * 0.25rem (each row has extra padding) */\n  height: calc(6.5rem + 5px + 2rem);\n}\n[class^=\"label_input-group-column_\"] {\n  /* Default line-height: normal is inconsistent across browsers, but above style needs constant line-height. */\n  line-height: 1.2;\n}\n\n/* see heights in above selectors */\n.sa-show-sprite-properties [class^=\"sprite-selector_scroll-wrapper_\"] {\n  height: calc(100% - 6.5rem - 5px);\n}\n.sa-sprite-properties-wide-locale.sa-show-sprite-properties [class^=\"sprite-selector_scroll-wrapper_\"] {\n  height: calc(100% - 6.5rem - 5px - 2rem);\n}\n\n.sa-sprite-properties-info-btn {\n  /* !important to override displayNoneWhileDisabled's inline styles */\n  display: flex !important;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  width: 1rem;\n  height: 1rem;\n  top: -2px;\n  left: -2px;\n  border: none;\n  border-radius: 100%;\n  background-color: var(--editorDarkMode-primary, hsla(0, 100%, 65%, 1));\n}\n[dir=\"rtl\"] .sa-sprite-properties-info-btn {\n  left: auto;\n  right: -2px;\n}\n.sa-show-sprite-properties .sa-sprite-properties-info-btn {\n  display: none !important;\n}\n\n.sa-sprite-properties-info-btn img {\n  width: calc(1rem - 6px);\n  height: calc(1rem - 6px);\n  filter: var(--editorDarkMode-primary-filter);\n}\n\n.sa-sprite-properties-close-btn {\n  width: 100%;\n  height: 1.25rem;\n  padding: 0;\n  padding-top: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background-color: transparent;\n  user-select: none;\n}\n\n.sa-sprite-properties-close-btn img {\n  filter: var(--editorDarkMode-accent-filter);\n  transition: opacity 0.25s ease-out;\n}\n\n.sa-sprite-properties-close-btn:hover img {\n  opacity: 0.75;\n}\n\n/* Prevent double clicking from highlighting the \"Choose a sprite\" button */\n[class*=\"action-menu_main-button_\"] {\n  user-select: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/collapse.svg":
/*!************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/collapse.svg ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIuNyIgaGVpZ2h0PSI4Ljc5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik02LjM2IDFhMS40MyAxLjQzIDAgMCAwLTEgLjQyTDEuNDIgNS4zNGExLjQ0IDEuNDQgMCAwIDAgMCAyYy41Ni41NiA5LjMxLjU2IDkuODcgMGExLjQ0IDEuNDQgMCAwIDAgMC0yTDcuMzcgMS40MkExLjQzIDEuNDMgMCAwIDAgNi4zNiAxeiIgZmlsbD0iIzU3NWU3NSIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/info.svg":
/*!********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/info.svg ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAwLjU3IDAuNTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNLjIzMi4yMzJ2LjAzNmguMDM2Vi41SC4yMTR2LjAzNWguMTQzVi41SC4zMDRWLjIzM3oiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuMDcxIiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjxjaXJjbGUgY3g9Ii4yODUiIGN5PSIuMDcxIiByPSIuMDcxIiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjwvZz48L3N2Zz4=");

/***/ }),

/***/ "./src/addons/addons/sprite-properties/_runtime_entry.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/sprite-properties/_runtime_entry.js ***!
  \***************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/sprite-properties/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/sprite-properties/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_collapse_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./collapse.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/collapse.svg");
/* harmony import */ var _url_loader_info_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./info.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/info.svg");
/* generated by pull.js */




const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "collapse.svg": _url_loader_collapse_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "info.svg": _url_loader_info_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/***/ }),

/***/ "./src/addons/addons/sprite-properties/userscript.js":
/*!***********************************************************!*\
  !*** ./src/addons/addons/sprite-properties/userscript.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  console,
  msg
}) {
  const SHOW_PROPS_CLASS = "sa-show-sprite-properties";
  const HIDE_PROPS_CLASS = "sa-hide-sprite-properties";
  const PROPS_INFO_BTN_CLASS = "sa-sprite-properties-info-btn";
  const PROPS_CLOSE_BTN_CLASS = "sa-sprite-properties-close-btn";
  /** @type {HTMLElement} */

  let propertiesPanel; // A mutation observer is the only reliable way to detect when a different sprite has
  // been selected or when the folder that contains the focused sprite has been opened.

  const observer = new MutationObserver(() => {
    injectInfoButton();
  }); // Toggle the properties panel when double clicking in the sprite grid

  document.addEventListener("click", e => {
    if (e.detail === 2 && e.target.closest('[class^="sprite-selector_scroll-wrapper_"]')) {
      togglePropertiesPanel();
    }
  });

  function setPropertiesPanelVisible(visible) {
    document.body.classList.toggle(SHOW_PROPS_CLASS, visible);
    document.body.classList.toggle(HIDE_PROPS_CLASS, !visible);
  }

  function togglePropertiesPanel() {
    const isCurrentlyOpen = document.body.classList.contains(SHOW_PROPS_CLASS);
    setPropertiesPanelVisible(!isCurrentlyOpen);
  }

  function autoHidePanel() {
    if (addon.settings.get("autoCollapse")) {
      setPropertiesPanelVisible(false);
    }
  } // Close properties panel when mouse leaves the entire sprite panel


  document.body.addEventListener("mouseleave", e => {
    if (e.target.matches('[class*="sprite-selector_sprite-selector_2KgCX"]')) {
      autoHidePanel();
    }
  }, {
    capture: true
  });
  addon.settings.addEventListener("change", autoHidePanel);

  function applySettings() {
    const visibleByDefault = !addon.settings.get("autoCollapse") && !addon.settings.get("hideByDefault");
    setPropertiesPanelVisible(visibleByDefault);
  }

  addon.self.addEventListener("reenabled", applySettings);
  applySettings();
  addon.self.addEventListener("disabled", () => {
    setPropertiesPanelVisible(true);
  });

  function createButton(className, iconPath, tooltip) {
    const buttonIcon = document.createElement("img");
    buttonIcon.setAttribute("src", addon.self.getResource(iconPath))
    /* rewritten by pull.js */
    ;
    buttonIcon.draggable = false;
    const button = document.createElement("button");
    button.classList.add(className);
    button.title = tooltip;
    button.addEventListener("click", () => togglePropertiesPanel());
    button.appendChild(buttonIcon);
    addon.tab.displayNoneWhileDisabled(button, {
      display: "flex"
    });
    return button;
  }
  /** @type {HTMLElement} */


  let infoButton;
  /** @type {HTMLElement} */

  let closeButton;

  function injectInfoButton() {
    if (!infoButton) {
      infoButton = createButton(PROPS_INFO_BTN_CLASS, "/info.svg", msg("open-properties-panel-tooltip"));
    }

    const selectedSprite = propertiesPanel.parentNode.querySelector('[class*="sprite-selector-item_is-selected"]');

    if (infoButton.parentNode !== selectedSprite) {
      if (selectedSprite) {
        selectedSprite.appendChild(infoButton);
      } else {
        infoButton.remove();
      }
    }
  }

  function injectCloseButton() {
    if (!closeButton) {
      closeButton = createButton(PROPS_CLOSE_BTN_CLASS, "/collapse.svg", msg("close-properties-panel-tooltip"));
    }

    propertiesPanel.appendChild(closeButton);
  }

  function updateWideLocaleMode() {
    // Certain "wide" languages such as Japanese use a different layout for the sprite info panel
    // Easiest way to detect this is with this selector that only exists when the sprite info panel
    // is using the layout with text above the input.
    // Note that when the stage is in small mode, "wide" languages use the same info panel as other
    // languages.
    // List of languages is here:
    // https://github.com/LLK/scratch-gui/blob/e15b2dfa3a2e58e80fae8d1586c7f56aa0cc0ede/src/lib/locale-utils.js#L6-L18
    const isWideLocale = !!propertiesPanel.querySelector("[class^=label_input-group-column_]");
    document.body.classList.toggle("sa-sprite-properties-wide-locale", isWideLocale);
  }

  document.addEventListener("click", e => {
    if (e.target.closest("[class*='stage-header_stage-button-first']") || e.target.closest("[class*='stage-header_stage-button-last']")) {
      setTimeout(updateWideLocaleMode);
    }
  }, {
    capture: true
  });

  while (true) {
    propertiesPanel = await addon.tab.waitForElement('[class^="sprite-info_sprite-info_"]', {
      markAsSeen: true,
      reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
      reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
    });
    const spriteSelector = propertiesPanel.parentNode;
    const itemsWrapper = spriteSelector.querySelector('[class*="sprite-selector_items-wrapper_"]');
    observer.observe(itemsWrapper, {
      childList: true,
      subtree: true
    });
    updateWideLocaleMode();
    injectInfoButton();
    injectCloseButton();
  }
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-sprite-properties.js.map