(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-default-entry"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/color-picker/style.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/color-picker/style.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-color-picker {\n  display: flex;\n}\n\n.sa-color-picker-code {\n  margin: 8px 0;\n}\n\n.sa-color-picker-paint {\n  margin-top: 16px;\n  margin-bottom: 4px;\n}\n\n.sa-color-picker > .sa-color-picker-color {\n  border: none;\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n  padding: 0;\n  padding-left: 0.6rem;\n  padding-right: 0.4rem;\n  margin-left: 0.5rem;\n  outline: none;\n  box-sizing: border-box;\n  width: 3rem;\n  height: 2rem;\n}\n[theme=\"dark\"] .sa-color-picker > .sa-color-picker-color {\n  background: var(--ui-secondary);\n}\n\n.sa-color-picker > .sa-color-picker-text {\n  box-sizing: border-box;\n  width: calc(150px - 3rem);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n[dir=\"rtl\"] .sa-color-picker > .sa-color-picker-color {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n  margin-left: 0;\n  margin-right: 0.5rem;\n}\n\n[dir=\"rtl\"] .sa-color-picker > .sa-color-picker-text {\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\nbody.sa-hide-eye-dropper-background div[class*=\"stage_color-picker-background\"] {\n  /* Do not show eye dropper background if the color picker is \"fake\" */\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-comment-previews/userstyle.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-comment-previews/userstyle.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-comment-preview-outer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100000000;\n  pointer-events: none;\n}\n\n.sa-comment-preview-inner {\n  width: calc(200px - 16px);\n  max-height: calc(132px - 8px);\n  padding: 8px;\n  overflow: hidden;\n\n  font-size: 12px;\n  white-space: pre-wrap;\n  pointer-events: none;\n\n  color: rgb(87, 94, 117);\n  background-color: rgb(255 255 255 / 90%);\n  border-style: none;\n  border-radius: 8px;\n  filter: drop-shadow(0px 5px 5px rgb(0 0 0 / 10%));\n\n  transform: perspective(200px);\n}\n\n@supports (backdrop-filter: blur(16px)) {\n  .sa-comment-preview-inner {\n    background-color: rgb(255 255 255 / 75%);\n    backdrop-filter: blur(16px);\n  }\n}\n\n.sa-comment-preview-fade {\n  transition: opacity 0.1s, filter 0.1s, transform 0.1s linear;\n}\n\n.sa-comment-preview-hidden {\n  opacity: 0;\n  filter: none;\n  transform: perspective(200px) translateZ(-20px);\n}\n\n.sa-comment-preview-reduce-transparency {\n  background-color: rgb(255 255 255);\n  backdrop-filter: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-searchable-dropdowns/userscript.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-searchable-dropdowns/userscript.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".u-dropdown-searchbar {\n  width: 100%;\n  box-sizing: border-box;\n  /* based on styles for the title input */\n  color: white;\n  background-color: hsla(0, 100%, 100%, 0.25);\n  border: 1px solid hsla(0, 0%, 0%, 0.15);\n  padding: 0.5rem;\n  outline: none;\n  transition: 0.25s ease-out;\n  font-size: 13px;\n  font-weight: bold;\n  border-radius: 4px;\n}\n.u-dropdown-searchbar:hover {\n  background-color: hsla(0, 100%, 100%, 0.5);\n}\n.u-dropdown-searchbar:focus {\n  background-color: white;\n  color: black;\n}\n.blocklyDropDownDiv .goog-menu {\n  overflow-x: hidden;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/compatibility.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-theme3/compatibility.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Imported by other addons */\n\n.sa-block-color {\n  --sa-block-colored-background: var(--sa-block-background-primary);\n  --sa-block-colored-background-secondary: var(--sa-block-field-background);\n  --sa-block-bright-background: var(--sa-block-background-primary);\n  --sa-block-text: white;\n  --sa-block-gray-text: white;\n  --sa-block-colored-text: var(--sa-block-background-primary);\n  --sa-block-text-on-bright-background: white;\n}\n\n.sa-block-color-motion {\n  --sa-block-background-primary: var(--editorTheme3-motion-primary, #4c97ff);\n  --sa-block-background-secondary: var(--editorTheme3-motion-secondary, #4280d7);\n  --sa-block-background-tertiary: var(--editorTheme3-motion-tertiary, #3373cc);\n  --sa-block-field-background: var(--editorTheme3-motion-field, #3373cc);\n}\n\n.sa-block-color-looks {\n  --sa-block-background-primary: var(--editorTheme3-looks-primary, #9966ff);\n  --sa-block-background-secondary: var(--editorTheme3-looks-secondary, #855cd6);\n  --sa-block-background-tertiary: var(--editorTheme3-looks-tertiary, #774dcb);\n  --sa-block-field-background: var(--editorTheme3-looks-field, #774dcb);\n}\n\n.sa-block-color-sounds {\n  --sa-block-background-primary: var(--editorTheme3-sounds-primary, #cf63cf);\n  --sa-block-background-secondary: var(--editorTheme3-sounds-secondary, #c94fc9);\n  --sa-block-background-tertiary: var(--editorTheme3-sounds-tertiary, #bd42bd);\n  --sa-block-field-background: var(--editorTheme3-sounds-field, #bd42bd);\n}\n\n.sa-block-color-events {\n  --sa-block-background-primary: var(--editorTheme3-event-primary, #ffbf00);\n  --sa-block-background-secondary: var(--editorTheme3-event-secondary, #e6ac00);\n  --sa-block-background-tertiary: var(--editorTheme3-event-tertiary, #cc9900);\n  --sa-block-field-background: var(--editorTheme3-event-field, #cc9900);\n}\n\n.sa-block-color-control {\n  --sa-block-background-primary: var(--editorTheme3-control-primary, #ffab19);\n  --sa-block-background-secondary: var(--editorTheme3-control-secondary, #ec9c13);\n  --sa-block-background-tertiary: var(--editorTheme3-control-tertiary, #cf8b17);\n  --sa-block-field-background: var(--editorTheme3-control-field, #cf8b17);\n}\n\n.sa-block-color-sensing {\n  --sa-block-background-primary: var(--editorTheme3-sensing-primary, #5cb1d6);\n  --sa-block-background-secondary: var(--editorTheme3-sensing-secondary, #47a8d1);\n  --sa-block-background-tertiary: var(--editorTheme3-sensing-tertiary, #2e8eb8);\n  --sa-block-field-background: var(--editorTheme3-sensing-field, #2e8eb8);\n}\n\n.sa-block-color-operators {\n  --sa-block-background-primary: var(--editorTheme3-operators-primary, #59c059);\n  --sa-block-background-secondary: var(--editorTheme3-operators-secondary, #46b946);\n  --sa-block-background-tertiary: var(--editorTheme3-operators-tertiary, #389438);\n  --sa-block-field-background: var(--editorTheme3-operators-field, #389438);\n}\n\n.sa-block-color-data {\n  --sa-block-background-primary: var(--editorTheme3-data-primary, #ff8c1a);\n  --sa-block-background-secondary: var(--editorTheme3-data-secondary, #ff8000);\n  --sa-block-background-tertiary: var(--editorTheme3-data-tertiary, #db6e00);\n  --sa-block-field-background: var(--editorTheme3-data-field, #db6e00);\n}\n\n.sa-block-color-data-lists,\n.sa-block-color-list {\n  --sa-block-background-primary: var(--editorTheme3-data_lists-primary, #ff661a);\n  --sa-block-background-secondary: var(--editorTheme3-data_lists-secondary, #ff5500);\n  --sa-block-background-tertiary: var(--editorTheme3-data_lists-tertiary, #e64d00);\n  --sa-block-field-background: var(--editorTheme3-data_lists-field, #e64d00);\n}\n\n.sa-block-color-more,\n.sa-block-color-null {\n  --sa-block-background-primary: var(--editorTheme3-more-primary, #ff6680);\n  --sa-block-background-secondary: var(--editorTheme3-more-secondary, #ff4d6a);\n  --sa-block-background-tertiary: var(--editorTheme3-more-tertiary, #ff3355);\n  --sa-block-field-background: var(--editorTheme3-more-field, #ff3355);\n}\n\n.sa-block-color-pen {\n  --sa-block-background-primary: var(--editorTheme3-pen-primary, #0fbd8c);\n  --sa-block-background-secondary: var(--editorTheme3-pen-secondary, #0da57a);\n  --sa-block-background-tertiary: var(--editorTheme3-pen-tertiary, #0b8e69);\n  --sa-block-field-background: var(--editorTheme3-pen-field, #0b8e69);\n}\n\n.sa-block-color-addon-custom-block {\n  --sa-block-background-primary: var(--editorTheme3-sa-primary, #29beb8);\n  --sa-block-background-secondary: var(--editorTheme3-sa-secondary, #3aa8a4);\n  --sa-block-background-tertiary: var(--editorTheme3-sa-tertiary, #3aa8a4);\n  --sa-block-field-background: var(--editorTheme3-sa-field, #3aa8a4);\n}\n\n.sa-block-color-TurboWarp {\n  --sa-block-background-primary: var(--editorTheme3-tw-primary, #ff4c4c);\n  --sa-block-background-secondary: var(--editorTheme3-tw-secondary, #e64444);\n  --sa-block-background-tertiary: var(--editorTheme3-tw-tertiary, #e64444);\n  --sa-block-field-background: var(--editorTheme3-tw-field, #e64444);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/find-bar/userstyle.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/find-bar/userstyle.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader!../editor-theme3/compatibility.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/compatibility.css"), "");

// module
exports.push([module.i, ".sa-find-bar {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  width: 100%;\n  height: 100%;\n  margin-left: 1em;\n}\n.sa-find-bar[hidden] {\n  /* !important to override displayNoneWhileDisabled */\n  display: none !important;\n}\n\n.sa-find-wrapper {\n  overflow: visible;\n  position: relative;\n  height: 2rem;\n  width: 100%;\n  max-width: 16em;\n}\n\n.sa-find-dropdown-out {\n  display: block;\n  top: -6px;\n  z-index: 100;\n  width: 100%;\n  max-width: 16em;\n  position: relative;\n  padding: 4px;\n  border: none;\n  border-radius: 4px;\n  margin-top: 6px;\n}\n\n.sa-find-dropdown-out.visible {\n  position: absolute;\n  width: 16em;\n  box-shadow: 0px 0px 8px 1px var(--ui-black-transparent, rgba(0, 0, 0, 0.3));\n  background-color: var(--ui-primary, white);\n}\n\n/* We need to modify Scratch styles so that the place where the find bar is injected */\n/* has actually correct size information, which is used to make the find bar not cover up controls */\n[class*=\"gui_tab-list_\"] {\n  width: 100%;\n}\n[class*=\"gui_tab_\"] {\n  flex-grow: 0;\n}\n\n.sa-find-input {\n  width: 100%;\n  box-sizing: border-box !important;\n  /* !important required for extension, because CSS injection method (and hence order) differs from addon */\n  height: 1.5rem;\n\n  /* Change Scratch default styles */\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  padding-left: 0.4em;\n}\n\n.sa-find-input:focus {\n  /* Change Scratch default styles */\n  box-shadow: none;\n}\n\n.sa-find-dropdown {\n  display: none;\n  position: relative;\n  padding: 0.2em 0;\n  font-size: 0.75rem;\n  line-height: 1;\n  overflow-y: auto;\n  min-height: 128px;\n  max-height: 65vh;\n  user-select: none;\n  max-width: 100%;\n  margin-top: 6px;\n  border: none;\n}\n\n.sa-find-dropdown-out.visible > .sa-find-dropdown {\n  display: block;\n}\n\n.sa-find-dropdown > li {\n  display: block;\n  padding: 0.5em 0.3em;\n  white-space: nowrap;\n  margin: 0;\n  font-weight: bold;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.sa-find-dropdown > li > b {\n  background-color: #aaffaa;\n  color: black;\n}\n\n/* Drop down items */\n.sa-find-dropdown > li:hover,\n.sa-find-dropdown > li.sel {\n  color: var(--sa-block-text-on-bright-background);\n  cursor: pointer;\n}\n\n.sa-find-dropdown > li::before {\n  content: \"\\25CF   \"; /* ● */\n}\n\n.sa-find-flag {\n  color: #4cbf56;\n}\n/* .sa-find-dropdown added for specificity */\n.sa-find-dropdown > .sa-find-flag:hover,\n.sa-find-dropdown > .sa-find-flag.sel {\n  background-color: #4cbf56;\n  color: white;\n}\n\n.sa-find-dropdown .sa-block-color {\n  color: var(--sa-block-colored-text);\n}\n.sa-find-dropdown .sa-block-color:hover,\n.sa-find-dropdown .sa-block-color.sel {\n  background-color: var(--sa-block-bright-background);\n}\n\n.sa-find-carousel {\n  font-weight: normal;\n  position: absolute;\n  right: 0;\n  white-space: nowrap;\n  background-color: inherit;\n  z-index: 1;\n  padding: 0;\n}\n\n.sa-find-carousel-control {\n  padding: 0 6px;\n}\n\n.sa-find-carousel-control:hover {\n  color: #ffff80;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/folders/style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/folders/style.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-folders-contextmenu-item {\n  max-width: 250px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n[sa-folders-context-type=\"folder\"] .react-contextmenu > :not(.sa-ctx-menu) {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/middle-click-popup/userstyle.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/middle-click-popup/userstyle.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader!../editor-theme3/compatibility.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/compatibility.css"), "");

// module
exports.push([module.i, "/* Find Input Box */\n.sa-float-bar-input {\n  width: 100%;\n  box-sizing: border-box !important;\n  /* !important required for extension, because CSS injection method (and hence order) differs from addon */\n  height: 1.5rem;\n\n  /* Change Scratch default styles */\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  padding-left: 0.4em;\n}\n[theme=\"dark\"] input.s3devInp {\n  color: #eee;\n  background: #3333;\n}\n[theme=\"dark\"] input.s3devInp:hover {\n  background: #333;\n}\n\n.sa-float-bar-input:focus {\n  /* Change Scratch default styles */\n  box-shadow: none;\n}\n\n/* Drop down from find button */\n.sa-float-bar-dropdown-out {\n  display: block;\n  top: -6px;\n  z-index: 100;\n  max-width: 16em;\n  padding: 4px;\n  position: absolute;\n  width: 16em;\n  box-shadow: 0px 0px 8px 1px var(--ui-black-transparent, rgba(0, 0, 0, 0.3));\n  background-color: var(--ui-primary, white);\n  border: none;\n  border-radius: 4px;\n}\n\n/* Drop down from find button */\n.sa-float-bar-dropdown {\n  display: none;\n  position: relative;\n  padding: 0.2em 0;\n  font-size: 0.75rem;\n  line-height: 1;\n  overflow-y: auto;\n  min-height: 128px;\n  user-select: none;\n  max-width: 100%;\n  max-height: 200px;\n  margin-bottom: 0;\n}\n\n.sa-float-bar-dropdown-out.vis .sa-float-bar-dropdown {\n  display: block;\n  border: none;\n}\n\n/* Drop down items */\n.sa-float-bar-dropdown > li {\n  display: block;\n  padding: 0.5em 0.3em;\n  white-space: nowrap;\n  margin: 0;\n  font-weight: bold;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.sa-float-bar-dropdown > li > b {\n  background-color: #aaffaa;\n  color: black;\n}\n\n.sa-float-bar-dropdown > li {\n  height: 19px;\n  padding: 3px 8px;\n  margin: 2px 0.3em;\n  box-sizing: border-box;\n  position: relative;\n  background-color: var(--sa-block-colored-background);\n  color: var(--sa-block-text);\n  font-weight: bold;\n  width: min-content;\n}\n.sa-float-bar-dropdown > li:hover,\n.sa-float-bar-dropdown > li.sel {\n  background-color: var(--sa-block-colored-background-secondary);\n}\n\n.sa-float-bar-dropdown > li.sa-hat {\n  border-radius: 14px 14px 3px 3px;\n}\n.sa-float-bar-dropdown > li.sa-block {\n  border-radius: 3px;\n}\n.sa-float-bar-dropdown > li.sa-reporter {\n  border-radius: 10px;\n}\n\n.sa-float-bar-dropdown > li.sa-boolean {\n  width: min-content;\n}\n.sa-float-bar-dropdown > li.sa-boolean::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-right: 9px solid transparent;\n  border-top: 9px solid var(--ui-primary, white);\n  border-bottom: 10px solid var(--ui-primary, white);\n}\n.sa-float-bar-dropdown > li.sa-boolean::after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-left: 9px solid transparent;\n  border-top: 9px solid var(--ui-primary, white);\n  border-bottom: 10px solid var(--ui-primary, white);\n}\n[theme=\"dark\"] .s3devDD > li.boolean::before {\n  border-top-color: #111;\n  border-bottom-color: #111;\n}\n[theme=\"dark\"] .s3devDD > li.boolean::after {\n  border-top-color: #111;\n  border-bottom-color: #111;\n}\n\n.sa-float-bar {\n  display: flex;\n  white-space: nowrap;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n  position: absolute;\n  min-width: 128px;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.3) 0 0 3px, rgba(0, 0, 0, 0.2) 0 3px 10px;\n\n  z-index: 999;\n}\n[theme=\"dark\"] #s3devFloatingBar {\n  background-color: #111;\n}\n\n.sa-float-bar-dropdown > li > b {\n  background-color: rgba(0, 0, 0, 0.6);\n  color: white;\n}\n\n[data-highlighted=\"true\"] {\n  background-color: hsla(30, 100%, 55%, 1) !important; /* orange */\n  color: white !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/onion-skinning/style.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/onion-skinning/style.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-onion-button {\n  position: relative;\n}\n.sa-onion-button:focus-within {\n  background-color: hsla(0, 100%, 65%, 0.2);\n}\n[theme=\"dark\"] .sa-onion-image {\n  filter: brightness(0) invert(0.8);\n}\n.sa-onion-button[data-enabled=\"true\"] .sa-onion-image {\n  filter: brightness(0) invert(1);\n}\n.sa-onion-button[data-enabled=\"true\"] {\n  background-color: #ff4c4c;\n}\n\n.sa-onion-group {\n  position: relative;\n  flex-direction: row;\n}\n\n.sa-onion-settings-wrapper {\n  position: absolute;\n  justify-items: center;\n  left: 50%;\n  width: 1.95rem;\n  height: 1.95rem;\n  display: grid;\n}\n\n.sa-onion-settings {\n  position: absolute;\n  bottom: 100%;\n  /* based on the styles for the color dropdown */\n  padding: 4px;\n  border-radius: 4px;\n  border: 1px solid var(--paint-ui-pane-border, #ddd);\n  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.3);\n  transition-property: bottom, opacity;\n  transition-duration: 500ms;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  opacity: 0;\n  pointer-events: none;\n  background: var(--ui-primary, white);\n  min-height: 100%;\n  min-width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25em;\n}\n.sa-onion-settings[data-visible=\"true\"] {\n  bottom: calc(100% + 22px);\n  pointer-events: auto;\n  opacity: 1;\n}\n\n.sa-onion-settings-line {\n  display: flex;\n  justify-content: flex-end;\n  align-items: baseline;\n  gap: 0.25em;\n}\n\n.sa-onion-settings-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  text-align: center;\n  border: 0;\n  background: transparent;\n  -moz-appearance: textfield;\n  border: 0;\n  outline: 0;\n}\n\n.sa-onion-settings-input::-webkit-outer-spin-button,\n.sa-onion-settings-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.sa-onion-settings-tip {\n  position: absolute;\n  bottom: 0;\n  transform: translateY(100%);\n  right: calc(50% - 7px);\n}\n.sa-onion-settings-polygon {\n  fill: var(--ui-primary, white);\n  stroke: var(--paint-ui-pane-border, #ddd);\n}\n\n.sa-onion-settings-label {\n  white-space: nowrap;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/pick-colors-from-stage/style.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/pick-colors-from-stage/style.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-stage-color-picker-picking [class^=\"stage_color-picker-background_\"] {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-devtools/icon--close.svg":
/*!*************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-devtools/icon--close.svg ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3LjQ4IDcuNDgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tYWRkPC90aXRsZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIzLjc0IiB5MT0iNi40OCIgeDI9IjMuNzQiIHkyPSIxIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMSIgeTE9IjMuNzQiIHgyPSI2LjQ4IiB5Mj0iMy43NCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/folders/folder.svg":
/*!************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/folders/folder.svg ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMCA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJoLThsLTItMnoiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/decrement.svg":
/*!**********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/decrement.svg ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUgMTEuMzU4aDE3LjUwMXYxLjI4NUgzLjI1eiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/increment.svg":
/*!**********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/increment.svg ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUgMTEuMzU4aDE3LjUwMXYxLjI4NUgzLjI1eiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwKSIgc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUtMTIuNjQyaDE3LjUwMXYxLjI4NUgzLjI1eiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/settings.svg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/settings.svg ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggc3R5bGU9Im9wYWNpdHk6Ljc1O2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgZD0iTTU2IDE2djk2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi4zNzYgLTIuMzc2KSBzY2FsZSguMjI0NjIpIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6LjU7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBkPSJNNDAgMzJ2NjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48cGF0aCBzdHlsZT0ib3BhY2l0eTouMjU7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBkPSJNMjQgNDh2MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48cGF0aCBzdHlsZT0ib3BhY2l0eTouNzU7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBkPSJNNzIgMTZ2OTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48cGF0aCBzdHlsZT0ib3BhY2l0eTouNTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Ik04OCAzMnY2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMzc2IC0yLjM3Nikgc2NhbGUoLjIyNDYyKSIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5Oi4yNTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Ik0xMDQgNDh2MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/toggle.svg":
/*!*******************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/toggle.svg ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGcgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZT0iIzAwMTAyNiI+PGcgc3R5bGU9Im9wYWNpdHk6LjU7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTpub25lIj48cGF0aCBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZmlsbD0iI2JmYmZiZiIgZD0iTTY4LjQ1IDMyLjQ1N2MuMy0uMi44LS4xLjkuM2wyLjYgMTAuN3M2LjQgNC43IDguMyA4YzMuMiA1LjUgMy4zIDEwIDMuMyAxMHM3LjEgMi4xIDguMyA3LjhjMS4yIDUuNy0zLjIgMTYuNS0yMiAyMC4yLTE4LjggMy43LTMzLjktMS40LTQxLTEyLjgtNy4xLTExLjQgNC4xLTI1IDMuNS0yNC4ybC0yLjEtMTcuOWMtLjEtLjQuNC0uNy44LS41bDEyLjEgNy45czQuNS0xLjcgOS4yLTEuOWMyLjgtLjIgNS4yIDAgNy41LjR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNC42NTIgLTQuNjUpIHNjYWxlKC4yMzI5KSIvPjxwYXRoIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIGQ9Ik0xMDEuNjUgNjIuOTU3Yy00LjcgMy44LTExLjkgMy45LTExLjkgMy45bTEwLjYgNy4zYy02LjMuNS0xMC4yLTEuNC0xMC4yLTEuNG0tNjguOC0xMC4xczguNiAyLjggMTIuMSA1LjltLjMgMy41Yy00LjMgMS43LTExLjcuNi0xMS43LjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00LjY1MiAtNC42NSkgc2NhbGUoLjIzMjkpIi8+PC9nPjxnIHN0eWxlPSJvcGFjaXR5Oi43NTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmUiPjxwYXRoIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBmaWxsPSIjYmZiZmJmIiBkPSJNNjguNDUgMzIuNDU3Yy4zLS4yLjgtLjEuOS4zbDIuNiAxMC43czYuNCA0LjcgOC4zIDhjMy4yIDUuNSAzLjMgMTAgMy4zIDEwczcuMSAyLjEgOC4zIDcuOGMxLjIgNS43LTMuMiAxNi41LTIyIDIwLjItMTguOCAzLjctMzMuOS0xLjQtNDEtMTIuOC03LjEtMTEuNCA0LjEtMjUgMy41LTI0LjJsLTIuMS0xNy45Yy0uMS0uNC40LS43LjgtLjVsMTIuMSA3LjlzNC41LTEuNyA5LjItMS45YzIuOC0uMiA1LjIgMCA3LjUuNHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjMyMyAtMi4zMjEpIHNjYWxlKC4yMzI5KSIvPjxwYXRoIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIGQ9Ik0xMDEuNjUgNjIuOTU3Yy00LjcgMy44LTExLjkgMy45LTExLjkgMy45bTEwLjYgNy4zYy02LjMuNS0xMC4yLTEuNC0xMC4yLTEuNG0tNjguOC0xMC4xczguNiAyLjggMTIuMSA1LjltLjMgMy41Yy00LjMgMS43LTExLjcuNi0xMS43LjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjMyMyAtMi4zMjEpIHNjYWxlKC4yMzI5KSIvPjwvZz48ZyBzdHlsZT0ic3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTpub25lIj48cGF0aCBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6I2ZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZmlsbD0iI2JmYmZiZiIgZD0iTTczLjQ1IDM3LjQ1N2MuMy0uMi44LS4xLjkuM2wyLjYgMTAuN3M2LjQgNC43IDguMyA4YzMuMiA1LjUgMy4zIDEwIDMuMyAxMHM3LjEgMi4xIDguMyA3LjhjMS4yIDUuNy0zLjIgMTYuNS0yMiAyMC4yLTE4LjggMy43LTMzLjktMS40LTQxLTEyLjgtNy4xLTExLjQgNC4xLTI1IDMuNS0yNC4ybC0yLjEtMTcuOWMtLjEtLjQuNC0uNy44LS41bDEyLjEgNy45czQuNS0xLjcgOS4yLTEuOWMyLjgtLjIgNS4yIDAgNy41LjR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4xNTkgLTEuMTU3KSBzY2FsZSguMjMyOSkiLz48cGF0aCBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBkPSJNMTA2LjY1IDY3Ljk1N2MtNC43IDMuOC0xMS45IDMuOS0xMS45IDMuOW0xMC42IDcuM2MtNi4zLjUtMTAuMi0xLjQtMTAuMi0xLjRtLTY4LjgtMTAuMXM4LjYgMi44IDEyLjEgNS45bS4zIDMuNWMtNC4zIDEuNy0xMS43LjYtMTEuNy42IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4xNTkgLTEuMTU3KSBzY2FsZSguMjMyOSkiLz48L2c+PC9nPjwvc3ZnPg==");

/***/ }),

/***/ "./src/addons/addons/bitmap-copy/_runtime_entry.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/bitmap-copy/_runtime_entry.js ***!
  \*********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/bitmap-copy/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/bitmap-copy/userscript.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/bitmap-copy/userscript.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async ({
  addon,
  console
}) => {
  if (!addon.tab.redux.state) return console.warn("Redux is not available!");
  addon.tab.redux.initialize();
  addon.tab.redux.addEventListener("statechanged", ({
    detail
  }) => {
    if (addon.self.disabled) return;
    const e = detail;
    if (!e.action || e.action.type !== "scratch-paint/clipboard/SET") return;
    const items = e.next.scratchPaint.clipboard.items;
    if (items.length !== 1) return;
    const firstItem = items[0]; // TODO vector support

    if (!Array.isArray(firstItem) || firstItem[0] !== "Raster") return console.log("copied element is vector");
    const dataURL = firstItem[1].source;
    addon.tab.copyImage(dataURL).then(() => console.log("Image successfully copied")).catch(e => console.error("Image could not be copied: ".concat(e)));
  });
});

/***/ }),

/***/ "./src/addons/addons/block-cherry-picking/_runtime_entry.js":
/*!******************************************************************!*\
  !*** ./src/addons/addons/block-cherry-picking/_runtime_entry.js ***!
  \******************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/block-cherry-picking/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/block-cherry-picking/userscript.js":
/*!**************************************************************!*\
  !*** ./src/addons/addons/block-cherry-picking/userscript.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_duplicate_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block-duplicate/module.js */ "./src/addons/addons/block-duplicate/module.js");

/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  console
}) {
  const update = () => {
    _block_duplicate_module_js__WEBPACK_IMPORTED_MODULE_0__["setCherryPicking"](!addon.self.disabled, addon.settings.get("invertDrag"));
  };

  addon.self.addEventListener("disabled", update);
  addon.self.addEventListener("reenabled", update);
  addon.settings.addEventListener("change", update);
  update();
  _block_duplicate_module_js__WEBPACK_IMPORTED_MODULE_0__["load"](addon);
});

/***/ }),

/***/ "./src/addons/addons/block-duplicate/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/block-duplicate/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/block-duplicate/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/block-duplicate/module.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/block-duplicate/module.js ***!
  \*****************************************************/
/*! exports provided: setCherryPicking, setDuplication, load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCherryPicking", function() { return setCherryPicking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDuplication", function() { return setDuplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
let enableCherryPicking = false;
let invertCherryPicking = false;
function setCherryPicking(newEnabled, newInverted) {
  enableCherryPicking = newEnabled; // If cherry picking is disabled, also disable invert. Duplicating blocks can still cause
  // this setting to be used.

  invertCherryPicking = newEnabled && newInverted;
}
let enableDuplication = false;
function setDuplication(newEnabled) {
  enableDuplication = newEnabled;
} // mostRecentEvent_ is sometimes a fake event, so we can't rely on reading its properties.

let ctrlOrMetaPressed = false;
let altPressed = false;
document.addEventListener("mousedown", function (e) {
  ctrlOrMetaPressed = e.ctrlKey || e.metaKey;
  altPressed = e.altKey;
}, {
  capture: true
});
let loaded = false;
async function load(addon) {
  if (loaded) {
    return;
  }

  loaded = true;
  const ScratchBlocks = await addon.tab.traps.getBlockly(); // https://github.com/LLK/scratch-blocks/blob/912b8cc728bea8fd91af85078c64fcdbfe21c87a/core/gesture.js#L454

  const originalStartDraggingBlock = ScratchBlocks.Gesture.prototype.startDraggingBlock_;

  ScratchBlocks.Gesture.prototype.startDraggingBlock_ = function (...args) {
    let block = this.targetBlock_; // Scratch uses fake mouse events to implement right click > duplicate

    const isRightClickDuplicate = !(this.mostRecentEvent_ instanceof MouseEvent);
    const isDuplicating = enableDuplication && altPressed && !isRightClickDuplicate && !this.flyout_ && !this.shouldDuplicateOnDrag_ && this.targetBlock_.type !== "procedures_definition";
    const isCherryPickingInverted = invertCherryPicking && !isRightClickDuplicate && block.getParent();
    const canCherryPick = enableCherryPicking || isDuplicating;
    const isCherryPicking = canCherryPick && ctrlOrMetaPressed === !isCherryPickingInverted && !block.isShadow();

    if (isDuplicating || isCherryPicking) {
      if (!ScratchBlocks.Events.getGroup()) {
        // Scratch will disable grouping on its own later.
        ScratchBlocks.Events.setGroup(true);
      }
    }

    if (isDuplicating) {
      // Based on https://github.com/LLK/scratch-blocks/blob/feda366947432b9d82a4f212f43ff6d4ab6f252f/core/scratch_blocks_utils.js#L171
      // Setting this.shouldDuplicateOnDrag_ = true does NOT work because it doesn't call changeObscuredShadowIds
      this.startWorkspace_.setResizesEnabled(false);
      ScratchBlocks.Events.disable();
      let newBlock;

      try {
        const xmlBlock = ScratchBlocks.Xml.blockToDom(block);
        newBlock = ScratchBlocks.Xml.domToBlock(xmlBlock, this.startWorkspace_);
        ScratchBlocks.scratchBlocksUtils.changeObscuredShadowIds(newBlock);
        const xy = block.getRelativeToSurfaceXY();
        newBlock.moveBy(xy.x, xy.y);
      } catch (e) {
        console.error(e);
      }

      ScratchBlocks.Events.enable();

      if (newBlock) {
        block = newBlock;
        this.targetBlock_ = newBlock;

        if (ScratchBlocks.Events.isEnabled()) {
          ScratchBlocks.Events.fire(new ScratchBlocks.Events.BlockCreate(newBlock));
        }
      }
    }

    if (isCherryPicking) {
      if (isRightClickDuplicate || isDuplicating) {
        const nextBlock = block.getNextBlock();

        if (nextBlock) {
          nextBlock.dispose();
        }
      }

      block.unplug(true);
    }

    return originalStartDraggingBlock.call(this, ...args);
  };
}

/***/ }),

/***/ "./src/addons/addons/block-duplicate/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/block-duplicate/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.js */ "./src/addons/addons/block-duplicate/module.js");

/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  console
}) {
  const update = () => {
    _module_js__WEBPACK_IMPORTED_MODULE_0__["setDuplication"](!addon.self.disabled);
  };

  addon.self.addEventListener("disabled", update);
  addon.self.addEventListener("reenabled", update);
  update();
  _module_js__WEBPACK_IMPORTED_MODULE_0__["load"](addon);
});

/***/ }),

/***/ "./src/addons/addons/block-switching/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/block-switching/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/block-switching/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/block-switching/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/block-switching/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  console,
  msg
}) {
  const ScratchBlocks = await addon.tab.traps.getBlockly();
  const vm = addon.tab.traps.vm;
  let blockSwitches = {};
  let procedureSwitches = {};
  const noopSwitch = {
    isNoop: true
  };

  const randomColor = () => {
    const num = Math.floor(Math.random() * 256 * 256 * 256);
    return "#".concat(num.toString(16).padStart(6, "0"));
  };

  const buildSwitches = () => {
    blockSwitches = {};
    procedureSwitches = {};

    if (addon.settings.get("motion")) {
      blockSwitches["motion_turnright"] = [noopSwitch, {
        opcode: "motion_turnleft"
      }];
      blockSwitches["motion_turnleft"] = [{
        opcode: "motion_turnright"
      }, noopSwitch];
      blockSwitches["motion_setx"] = [noopSwitch, {
        opcode: "motion_changexby",
        remapInputName: {
          X: "DX"
        }
      }, {
        opcode: "motion_sety",
        remapInputName: {
          X: "Y"
        }
      }, {
        opcode: "motion_changeyby",
        remapInputName: {
          X: "DY"
        }
      }];
      blockSwitches["motion_changexby"] = [{
        opcode: "motion_setx",
        remapInputName: {
          DX: "X"
        }
      }, noopSwitch, {
        opcode: "motion_sety",
        remapInputName: {
          DX: "Y"
        }
      }, {
        opcode: "motion_changeyby",
        remapInputName: {
          DX: "DY"
        }
      }];
      blockSwitches["motion_sety"] = [{
        opcode: "motion_setx",
        remapInputName: {
          Y: "X"
        }
      }, {
        opcode: "motion_changexby",
        remapInputName: {
          Y: "DX"
        }
      }, noopSwitch, {
        opcode: "motion_changeyby",
        remapInputName: {
          Y: "DY"
        }
      }];
      blockSwitches["motion_changeyby"] = [{
        opcode: "motion_setx",
        remapInputName: {
          DY: "X"
        }
      }, {
        opcode: "motion_changexby",
        remapInputName: {
          DY: "DX"
        }
      }, {
        opcode: "motion_sety",
        remapInputName: {
          DY: "Y"
        }
      }, noopSwitch];
      blockSwitches["motion_xposition"] = [noopSwitch, {
        opcode: "motion_yposition"
      }];
      blockSwitches["motion_yposition"] = [{
        opcode: "motion_xposition"
      }, noopSwitch];
    }

    if (addon.settings.get("looks")) {
      blockSwitches["looks_seteffectto"] = [noopSwitch, {
        opcode: "looks_changeeffectby",
        remapInputName: {
          VALUE: "CHANGE"
        }
      }];
      blockSwitches["looks_changeeffectby"] = [{
        opcode: "looks_seteffectto",
        remapInputName: {
          CHANGE: "VALUE"
        }
      }, noopSwitch];
      blockSwitches["looks_setsizeto"] = [noopSwitch, {
        opcode: "looks_changesizeby",
        remapInputName: {
          SIZE: "CHANGE"
        }
      }];
      blockSwitches["looks_changesizeby"] = [{
        opcode: "looks_setsizeto",
        remapInputName: {
          CHANGE: "SIZE"
        }
      }, noopSwitch];
      blockSwitches["looks_costumenumbername"] = [noopSwitch, {
        opcode: "looks_backdropnumbername"
      }];
      blockSwitches["looks_backdropnumbername"] = [{
        opcode: "looks_costumenumbername"
      }, noopSwitch];
      blockSwitches["looks_show"] = [noopSwitch, {
        opcode: "looks_hide"
      }];
      blockSwitches["looks_hide"] = [{
        opcode: "looks_show"
      }, noopSwitch];
      blockSwitches["looks_nextcostume"] = [noopSwitch, {
        opcode: "looks_nextbackdrop"
      }];
      blockSwitches["looks_nextbackdrop"] = [{
        opcode: "looks_nextcostume"
      }, noopSwitch];
      blockSwitches["looks_say"] = [noopSwitch, {
        opcode: "looks_sayforsecs",
        createInputs: {
          SECS: {
            shadowType: "math_number",
            value: "2"
          }
        }
      }, {
        opcode: "looks_think"
      }, {
        opcode: "looks_thinkforsecs",
        createInputs: {
          SECS: {
            shadowType: "math_number",
            value: "2"
          }
        }
      }];
      blockSwitches["looks_think"] = [{
        opcode: "looks_say"
      }, {
        opcode: "looks_sayforsecs",
        createInputs: {
          SECS: {
            shadowType: "math_number",
            value: "2"
          }
        }
      }, noopSwitch, {
        opcode: "looks_thinkforsecs",
        createInputs: {
          SECS: {
            shadowType: "math_number",
            value: "2"
          }
        }
      }];
      blockSwitches["looks_sayforsecs"] = [{
        opcode: "looks_say",
        splitInputs: ["SECS"]
      }, {
        opcode: "looks_think",
        splitInputs: ["SECS"]
      }, noopSwitch, {
        opcode: "looks_thinkforsecs"
      }];
      blockSwitches["looks_thinkforsecs"] = [{
        opcode: "looks_say",
        splitInputs: ["SECS"]
      }, {
        opcode: "looks_think",
        splitInputs: ["SECS"]
      }, {
        opcode: "looks_sayforsecs"
      }, noopSwitch];
      blockSwitches["looks_switchbackdropto"] = [noopSwitch, {
        opcode: "looks_switchbackdroptoandwait"
      }];
      blockSwitches["looks_switchbackdroptoandwait"] = [{
        opcode: "looks_switchbackdropto"
      }, noopSwitch];
      blockSwitches["looks_gotofrontback"] = [noopSwitch, {
        opcode: "looks_goforwardbackwardlayers",
        remapInputName: {
          FRONT_BACK: "FORWARD_BACKWARD"
        },
        mapFieldValues: {
          FRONT_BACK: {
            front: "forward",
            back: "backward"
          }
        },
        createInputs: {
          NUM: {
            shadowType: "math_integer",
            value: "1"
          }
        }
      }];
      blockSwitches["looks_goforwardbackwardlayers"] = [{
        opcode: "looks_gotofrontback",
        splitInputs: ["NUM"],
        remapInputName: {
          FORWARD_BACKWARD: "FRONT_BACK"
        },
        mapFieldValues: {
          FORWARD_BACKWARD: {
            forward: "front",
            backward: "back"
          }
        }
      }, noopSwitch];
    }

    if (addon.settings.get("sound")) {
      blockSwitches["sound_play"] = [noopSwitch, {
        opcode: "sound_playuntildone"
      }];
      blockSwitches["sound_playuntildone"] = [{
        opcode: "sound_play"
      }, noopSwitch];
      blockSwitches["sound_seteffectto"] = [noopSwitch, {
        opcode: "sound_changeeffectby"
      }];
      blockSwitches["sound_changeeffectby"] = [{
        opcode: "sound_seteffectto"
      }, noopSwitch];
      blockSwitches["sound_setvolumeto"] = [noopSwitch, {
        opcode: "sound_changevolumeby"
      }];
      blockSwitches["sound_changevolumeby"] = [{
        opcode: "sound_setvolumeto"
      }, noopSwitch];
    }

    if (addon.settings.get("event")) {
      blockSwitches["event_broadcast"] = [noopSwitch, {
        opcode: "event_broadcastandwait"
      }];
      blockSwitches["event_broadcastandwait"] = [{
        opcode: "event_broadcast"
      }, noopSwitch];
    }

    if (addon.settings.get("control")) {
      blockSwitches["control_if"] = [noopSwitch, {
        opcode: "control_if_else"
      }];
      blockSwitches["control_if_else"] = [{
        opcode: "control_if",
        splitInputs: ["SUBSTACK2"]
      }, noopSwitch];
      blockSwitches["control_repeat_until"] = [noopSwitch, {
        opcode: "control_wait_until",
        splitInputs: ["SUBSTACK"]
      }, {
        opcode: "control_forever",
        splitInputs: ["CONDITION"]
      }];
      blockSwitches["control_forever"] = [{
        opcode: "control_repeat_until"
      }, noopSwitch];
      blockSwitches["control_wait_until"] = [{
        opcode: "control_repeat_until"
      }, noopSwitch];
    }

    if (addon.settings.get("operator")) {
      blockSwitches["operator_equals"] = [{
        opcode: "operator_gt"
      }, noopSwitch, {
        opcode: "operator_lt"
      }];
      blockSwitches["operator_gt"] = [noopSwitch, {
        opcode: "operator_equals"
      }, {
        opcode: "operator_lt"
      }];
      blockSwitches["operator_lt"] = [{
        opcode: "operator_gt"
      }, {
        opcode: "operator_equals"
      }, noopSwitch];
      blockSwitches["operator_add"] = [noopSwitch, {
        opcode: "operator_subtract"
      }, {
        opcode: "operator_multiply"
      }, {
        opcode: "operator_divide"
      }, {
        opcode: "operator_mod"
      }];
      blockSwitches["operator_subtract"] = [{
        opcode: "operator_add"
      }, noopSwitch, {
        opcode: "operator_multiply"
      }, {
        opcode: "operator_divide"
      }, {
        opcode: "operator_mod"
      }];
      blockSwitches["operator_multiply"] = [{
        opcode: "operator_add"
      }, {
        opcode: "operator_subtract"
      }, noopSwitch, {
        opcode: "operator_divide"
      }, {
        opcode: "operator_mod"
      }];
      blockSwitches["operator_divide"] = [{
        opcode: "operator_add"
      }, {
        opcode: "operator_subtract"
      }, {
        opcode: "operator_multiply"
      }, noopSwitch, {
        opcode: "operator_mod"
      }];
      blockSwitches["operator_mod"] = [{
        opcode: "operator_add"
      }, {
        opcode: "operator_subtract"
      }, {
        opcode: "operator_multiply"
      }, {
        opcode: "operator_divide"
      }, noopSwitch];
      blockSwitches["operator_and"] = [noopSwitch, {
        opcode: "operator_or"
      }];
      blockSwitches["operator_or"] = [{
        opcode: "operator_and"
      }, noopSwitch];
    }

    if (addon.settings.get("sensing")) {
      blockSwitches["sensing_mousex"] = [noopSwitch, {
        opcode: "sensing_mousey"
      }];
      blockSwitches["sensing_mousey"] = [{
        opcode: "sensing_mousex"
      }, noopSwitch];
      blockSwitches["sensing_touchingcolor"] = [noopSwitch, {
        opcode: "sensing_coloristouchingcolor",
        createInputs: {
          COLOR2: {
            shadowType: "colour_picker",
            value: randomColor
          }
        }
      }];
      blockSwitches["sensing_coloristouchingcolor"] = [{
        opcode: "sensing_touchingcolor",
        splitInputs: ["COLOR2"]
      }, noopSwitch];
    }

    if (addon.settings.get("data")) {
      blockSwitches["data_setvariableto"] = [noopSwitch, {
        opcode: "data_changevariableby",
        remapShadowType: {
          VALUE: "math_number"
        }
      }];
      blockSwitches["data_changevariableby"] = [{
        opcode: "data_setvariableto",
        remapShadowType: {
          VALUE: "text"
        }
      }, noopSwitch];
      blockSwitches["data_showvariable"] = [noopSwitch, {
        opcode: "data_hidevariable"
      }];
      blockSwitches["data_hidevariable"] = [{
        opcode: "data_showvariable"
      }, noopSwitch];
      blockSwitches["data_showlist"] = [noopSwitch, {
        opcode: "data_hidelist"
      }];
      blockSwitches["data_hidelist"] = [{
        opcode: "data_showlist"
      }, noopSwitch];
      blockSwitches["data_replaceitemoflist"] = [noopSwitch, {
        opcode: "data_insertatlist"
      }];
      blockSwitches["data_insertatlist"] = [{
        opcode: "data_replaceitemoflist"
      }, noopSwitch];
      blockSwitches["data_deleteoflist"] = [noopSwitch, {
        opcode: "data_deletealloflist",
        splitInputs: ["INDEX"]
      }];
      blockSwitches["data_deletealloflist"] = [{
        opcode: "data_deleteoflist",
        createInputs: {
          INDEX: {
            shadowType: "math_integer",
            value: "1"
          }
        }
      }, noopSwitch];
    }

    if (addon.settings.get("extension")) {
      blockSwitches["pen_penDown"] = [noopSwitch, {
        opcode: "pen_penUp"
      }];
      blockSwitches["pen_penUp"] = [{
        opcode: "pen_penDown"
      }, noopSwitch];
      blockSwitches["pen_setPenColorParamTo"] = [noopSwitch, {
        opcode: "pen_changePenColorParamBy"
      }];
      blockSwitches["pen_changePenColorParamBy"] = [{
        opcode: "pen_setPenColorParamTo"
      }, noopSwitch];
      blockSwitches["pen_setPenHueToNumber"] = [noopSwitch, {
        opcode: "pen_changePenHueBy"
      }];
      blockSwitches["pen_changePenHueBy"] = [{
        opcode: "pen_setPenHueToNumber"
      }, noopSwitch];
      blockSwitches["pen_setPenShadeToNumber"] = [noopSwitch, {
        opcode: "pen_changePenShadeBy"
      }];
      blockSwitches["pen_changePenShadeBy"] = [{
        opcode: "pen_setPenShadeToNumber"
      }, noopSwitch];
      blockSwitches["pen_setPenSizeTo"] = [noopSwitch, {
        opcode: "pen_changePenSizeBy"
      }];
      blockSwitches["pen_changePenSizeBy"] = [{
        opcode: "pen_setPenSizeTo"
      }, noopSwitch];
      blockSwitches["music_setTempo"] = [noopSwitch, {
        opcode: "music_changeTempo"
      }];
      blockSwitches["music_changeTempo"] = [{
        opcode: "music_setTempo"
      }, noopSwitch];
    }

    if (addon.settings.get("sa")) {
      const logProc = "\u200B\u200Blog\u200B\u200B %s";
      const warnProc = "\u200B\u200Bwarn\u200B\u200B %s";
      const errorProc = "\u200B\u200Berror\u200B\u200B %s";
      const logMessage = msg("debugger_log");
      const warnMessage = msg("debugger_warn");
      const errorMessage = msg("debugger_error");
      const logSwitch = {
        mutate: {
          proccode: logProc
        },
        msg: logMessage
      };
      const warnSwitch = {
        mutate: {
          proccode: warnProc
        },
        msg: warnMessage
      };
      const errorSwitch = {
        mutate: {
          proccode: errorProc
        },
        msg: errorMessage
      };
      procedureSwitches[logProc] = [{
        msg: logMessage,
        isNoop: true
      }, warnSwitch, errorSwitch];
      procedureSwitches[warnProc] = [logSwitch, {
        msg: warnMessage,
        isNoop: true
      }, errorSwitch];
      procedureSwitches[errorProc] = [logSwitch, warnSwitch, {
        msg: errorMessage,
        isNoop: true
      }];
    } // Switching for these is implemented by Scratch. We only define them here to optionally add a border.
    // Because we don't implement the switching ourselves, this is not controlled by the data category option.


    blockSwitches["data_variable"] = [];
    blockSwitches["data_listcontents"] = [];
  };

  buildSwitches();
  addon.settings.addEventListener("change", buildSwitches);
  /**
   * @param {*} workspace
   * @param {Element} xmlBlock
   */

  const pasteBlockXML = (workspace, xmlBlock) => {
    // Similar to https://github.com/LLK/scratch-blocks/blob/7575c9a0f2c267676569c4b102b76d77f35d9fd6/core/workspace_svg.js#L1020
    // but without the collision checking.
    const block = ScratchBlocks.Xml.domToBlock(xmlBlock, workspace);
    const x = +xmlBlock.getAttribute("x");
    const y = +xmlBlock.getAttribute("y"); // Don't need to handle RTL here

    block.moveBy(x, y);
    return block;
  };
  /**
   * @param {string} shadowType The type of shadow eg. "math_number"
   * @returns {string} The name of the shadow's inner field that contains the user-visible value
   */


  const getShadowFieldName = shadowType => {
    // This is non-comprehensive.
    if (shadowType === "text") {
      return "TEXT";
    }

    if (shadowType === "colour_picker") {
      return "COLOUR";
    }

    return "NUM";
  };
  /**
   * @template T
   * @param {T|()=>T} value
   * @returns {T}
   */


  const callIfFunction = value => {
    if (typeof value === "function") {
      return value();
    }

    return value;
  };

  const menuCallbackFactory = (block, opcodeData) => () => {
    if (opcodeData.isNoop) {
      return;
    }

    if (opcodeData.fieldValue) {
      block.setFieldValue(opcodeData.fieldValue, "VALUE");
      return;
    }

    try {
      ScratchBlocks.Events.setGroup(true);
      const workspace = block.workspace;
      const blocksToBringToForeground = []; // Split inputs before we clone the block.

      if (opcodeData.splitInputs) {
        for (const inputName of opcodeData.splitInputs) {
          const input = block.getInput(inputName);

          if (!input) {
            continue;
          }

          const connection = input.connection;

          if (!connection) {
            continue;
          }

          if (connection.isConnected()) {
            const targetBlock = connection.targetBlock();

            if (targetBlock.isShadow()) {// Deleting shadows is handled later.
            } else {
              connection.disconnect();
              blocksToBringToForeground.push(targetBlock);
            }
          }
        }
      } // Make a copy of the block with the proper type set.
      // It doesn't seem to be possible to change a Block's type after it's created, so we'll just make a new block instead.


      const xml = ScratchBlocks.Xml.blockToDom(block); // blockToDomWithXY's handling of RTL is strange, so we encode the position ourselves.

      const position = block.getRelativeToSurfaceXY();
      xml.setAttribute("x", position.x);
      xml.setAttribute("y", position.y);

      if (opcodeData.opcode) {
        xml.setAttribute("type", opcodeData.opcode);
      }

      const parentBlock = block.getParent();
      let parentConnection;
      let blockConnectionType;

      if (parentBlock) {
        // If the block has a parent, find the parent -> child connection that will be reattached later.
        const parentConnections = parentBlock.getConnections_();
        parentConnection = parentConnections.find(c => c.targetConnection && c.targetConnection.sourceBlock_ === block); // There's two types of connections from child -> parent. We need to figure out which one is used.

        const blockConnections = block.getConnections_();
        const blockToParentConnection = blockConnections.find(c => c.targetConnection && c.targetConnection.sourceBlock_ === parentBlock);
        blockConnectionType = blockToParentConnection.type;
      } // Array.from creates a clone of the children list. This is important as we may remove
      // children as we iterate.


      for (const child of Array.from(xml.children)) {
        const oldName = child.getAttribute("name"); // Any inputs that were supposed to be split that were not should be removed.
        // (eg. shadow inputs)

        if (opcodeData.splitInputs && opcodeData.splitInputs.includes(oldName)) {
          xml.removeChild(child);
          continue;
        }

        const newName = opcodeData.remapInputName && opcodeData.remapInputName[oldName];

        if (newName) {
          child.setAttribute("name", newName);
        }

        const newShadowType = opcodeData.remapShadowType && opcodeData.remapShadowType[oldName];

        if (newShadowType) {
          const valueNode = child.firstChild;
          const fieldNode = valueNode.firstChild;
          valueNode.setAttribute("type", newShadowType);
          fieldNode.setAttribute("name", getShadowFieldName(newShadowType));
        }

        const fieldValueMap = opcodeData.mapFieldValues && opcodeData.mapFieldValues[oldName];

        if (fieldValueMap && child.tagName === "FIELD") {
          const oldValue = child.innerText;
          const newValue = fieldValueMap[oldValue];

          if (typeof newValue === "string") {
            child.innerText = newValue;
          }
        }
      }

      if (opcodeData.mutate) {
        const mutation = xml.querySelector("mutation");

        for (const [key, value] of Object.entries(opcodeData.mutate)) {
          mutation.setAttribute(key, value);
        }
      }

      if (opcodeData.createInputs) {
        for (const [inputName, inputData] of Object.entries(opcodeData.createInputs)) {
          const valueElement = document.createElement("value");
          valueElement.setAttribute("name", inputName);
          const shadowElement = document.createElement("shadow");
          shadowElement.setAttribute("type", inputData.shadowType);
          const shadowFieldElement = document.createElement("field");
          shadowFieldElement.setAttribute("name", getShadowFieldName(inputData.shadowType));
          shadowFieldElement.innerText = callIfFunction(inputData.value);
          shadowElement.appendChild(shadowFieldElement);
          valueElement.appendChild(shadowElement);
          xml.appendChild(valueElement);
        }
      } // Remove the old block and insert the new one.


      block.dispose();
      const newBlock = pasteBlockXML(workspace, xml);

      if (parentConnection) {
        // Search for the same type of connection on the new block as on the old block.
        const newBlockConnections = newBlock.getConnections_();
        const newBlockConnection = newBlockConnections.find(c => c.type === blockConnectionType);
        newBlockConnection.connect(parentConnection);
      }

      for (const otherBlock of blocksToBringToForeground) {
        // By re-appending the element, we move it to the end, which will make it display
        // on top.
        const svgRoot = otherBlock.getSvgRoot();
        svgRoot.parentNode.appendChild(svgRoot);
      }
    } finally {
      ScratchBlocks.Events.setGroup(false);
    }
  };

  const uniques = array => [...new Set(array)];

  addon.tab.createBlockContextMenu((items, block) => {
    if (!addon.self.disabled) {
      const type = block.type;
      let switches = blockSwitches[block.type] || [];
      const customArgsMode = addon.settings.get("customargs") ? addon.settings.get("customargsmode") : "off";

      if (customArgsMode !== "off" && ["argument_reporter_boolean", "argument_reporter_string_number"].includes(type) && // if the arg is a shadow, it's in a procedures_prototype so we don't want it to be switchable
      !block.isShadow()) {
        const customBlocks = getCustomBlocks();

        if (customArgsMode === "all") {
          switch (type) {
            case "argument_reporter_string_number":
              switches = Object.values(customBlocks).map(cb => cb.stringArgs).flat(1);
              break;

            case "argument_reporter_boolean":
              switches = Object.values(customBlocks).map(cb => cb.boolArgs).flat(1);
              break;
          }
        } else if (customArgsMode === "defOnly") {
          const root = block.getRootBlock();
          if (root.type !== "procedures_definition") return items;
          const customBlockObj = customBlocks[root.getChildren(true)[0].getProcCode()];

          switch (type) {
            case "argument_reporter_string_number":
              switches = customBlockObj.stringArgs;
              break;

            case "argument_reporter_boolean":
              switches = customBlockObj.boolArgs;
              break;
          }
        }

        const currentValue = block.getFieldValue("VALUE");
        switches = uniques(switches).map(i => ({
          isNoop: i === currentValue,
          fieldValue: i,
          msg: i
        }));
      }

      if (block.type === "procedures_call") {
        const proccode = block.getProcCode();

        if (procedureSwitches[proccode]) {
          switches = procedureSwitches[proccode];
        }
      }

      if (!addon.settings.get("noop")) {
        switches = switches.filter(i => !i.isNoop);
      }

      switches.forEach((opcodeData, i) => {
        const makeSpaceItemIndex = items.findIndex(obj => obj._isDevtoolsFirstItem);
        const insertBeforeIndex = makeSpaceItemIndex !== -1 ? // If "make space" button exists, add own items before it
        makeSpaceItemIndex : // If there's no such button, insert at end
        items.length;
        const text = opcodeData.msg ? opcodeData.msg : opcodeData.opcode ? msg(opcodeData.opcode) : msg(block.type);
        items.splice(insertBeforeIndex, 0, {
          enabled: true,
          text,
          callback: menuCallbackFactory(block, opcodeData),
          separator: i === 0
        });
      });

      if (block.type === "data_variable" || block.type === "data_listcontents") {
        // Add top border to first variable (if it exists)
        const delBlockIndex = items.findIndex(item => item.text === ScratchBlocks.Msg.DELETE_BLOCK); // firstVariableItem might be undefined, a variable to switch to,
        // or an item added by editor-devtools (or any addon before this one)

        const firstVariableItem = items[delBlockIndex + 1];
        if (firstVariableItem) firstVariableItem.separator = true;
      }
    }

    return items;
  }, {
    blocks: true
  }); // https://github.com/LLK/scratch-blocks/blob/abbfe93136fef57fdfb9a077198b0bc64726f012/blocks_vertical/procedures.js#L207-L215
  // Returns a list like ["%s", "%d"]

  const parseArguments = code => code.split(/(?=[^\\]%[nbs])/g).map(i => i.trim()).filter(i => i.charAt(0) === "%").map(i => i.substring(0, 2));

  const getCustomBlocks = () => {
    const customBlocks = {};
    const target = vm.editingTarget;
    Object.values(target.blocks._blocks).filter(block => block.opcode === "procedures_prototype").forEach(block => {
      const procCode = block.mutation.proccode;
      const argumentNames = JSON.parse(block.mutation.argumentnames); // argumentdefaults is unreliable, so we have to parse the procedure code to determine argument types

      const parsedArguments = parseArguments(procCode);
      const stringArgs = [];
      const boolArgs = [];

      for (let i = 0; i < argumentNames.length; i++) {
        if (parsedArguments[i] === "%b") {
          boolArgs.push(argumentNames[i]);
        } else {
          stringArgs.push(argumentNames[i]);
        }
      }

      customBlocks[procCode] = {
        stringArgs,
        boolArgs
      };
    });
    return customBlocks;
  };
});

/***/ }),

/***/ "./src/addons/addons/color-picker/_runtime_entry.js":
/*!**********************************************************!*\
  !*** ./src/addons/addons/color-picker/_runtime_entry.js ***!
  \**********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/color-picker/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/color-picker/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/color-picker/code-editor.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/color-picker/code-editor.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libraries/common/cs/normalize-color.js */ "./src/addons/libraries/common/cs/normalize-color.js");
/* harmony import */ var _libraries_common_cs_rate_limiter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libraries/common/cs/rate-limiter.js */ "./src/addons/libraries/common/cs/rate-limiter.js");
/* harmony import */ var _libraries_thirdparty_cs_tinycolor_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libraries/thirdparty/cs/tinycolor-min.js */ "./src/addons/libraries/thirdparty/cs/tinycolor-min.js");



/* harmony default export */ __webpack_exports__["default"] = (async ({
  addon,
  console,
  msg
}) => {
  // 250-ms rate limit
  const rateLimiter = new _libraries_common_cs_rate_limiter_js__WEBPACK_IMPORTED_MODULE_1__["default"](250);

  const getColor = element => {
    const {
      children
    } = element.parentElement; // h: 0 - 360

    const h = children[1].getAttribute("aria-valuenow"); // s: 0 - 1

    const s = children[3].getAttribute("aria-valuenow"); // v: 0 - 255, divide by 255

    const vMultipliedBy255 = children[5].getAttribute("aria-valuenow");
    const v = Number(vMultipliedBy255) / 255;
    return Object(_libraries_thirdparty_cs_tinycolor_min_js__WEBPACK_IMPORTED_MODULE_2__["default"])("hsv(".concat(h, ", ").concat(s, ", ").concat(v || 0, ")")).toHexString();
  };

  const setColor = (hex, element) => {
    hex = Object(_libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__["normalizeHex"])(hex);
    if (!addon.tab.redux.state || !addon.tab.redux.state.scratchGui) return; // The only way to reliably set color is to invoke eye dropper via click()
    // then faking that the eye dropper reported the value.

    const onEyeDropperClosed = ({
      detail
    }) => {
      if (detail.action.type !== "scratch-gui/color-picker/DEACTIVATE_COLOR_PICKER") return;
      addon.tab.redux.removeEventListener("statechanged", onEyeDropperClosed);
      setTimeout(() => {
        document.body.classList.remove("sa-hide-eye-dropper-background");
      }, 50);
    };

    const onEyeDropperOpened = ({
      detail
    }) => {
      if (detail.action.type !== "scratch-gui/color-picker/ACTIVATE_COLOR_PICKER") return;
      addon.tab.redux.removeEventListener("statechanged", onEyeDropperOpened);
      addon.tab.redux.addEventListener("statechanged", onEyeDropperClosed);
      setTimeout(() => {
        addon.tab.redux.dispatch({
          type: "scratch-gui/color-picker/DEACTIVATE_COLOR_PICKER",
          color: hex
        });
      }, 50);
    };

    addon.tab.redux.addEventListener("statechanged", onEyeDropperOpened);
    document.body.classList.add("sa-hide-eye-dropper-background");
    element.click();
  };

  const addColorPicker = () => {
    const element = document.querySelector("button.scratchEyedropper");
    rateLimiter.abort(false);
    addon.tab.redux.initialize();
    const defaultColor = getColor(element);
    const saColorPicker = Object.assign(document.createElement("div"), {
      className: "sa-color-picker sa-color-picker-code"
    });
    addon.tab.displayNoneWhileDisabled(saColorPicker, {
      display: "flex"
    });
    const saColorPickerColor = Object.assign(document.createElement("input"), {
      className: "sa-color-picker-color sa-color-picker-code-color",
      type: "color",
      value: defaultColor || "#000000"
    });
    const saColorPickerText = Object.assign(document.createElement("input"), {
      className: addon.tab.scratchClass("input_input-form", {
        others: "sa-color-picker-text sa-color-picker-code-text"
      }),
      type: "text",
      pattern: "^#?([0-9a-fA-F]{3}){1,2}$",
      placeholder: msg("hex"),
      value: defaultColor || ""
    });
    saColorPickerColor.addEventListener("input", () => rateLimiter.limit(() => setColor(saColorPickerText.value = saColorPickerColor.value, element)));
    saColorPickerText.addEventListener("change", () => {
      const {
        value
      } = saColorPickerText;
      if (!Object(_libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__["getHexRegex"])().test(value)) return;
      setColor(saColorPickerColor.value = Object(_libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__["normalizeHex"])(value), element);
    });
    saColorPicker.appendChild(saColorPickerColor);
    saColorPicker.appendChild(saColorPickerText);
    element.parentElement.insertBefore(saColorPicker, element);
  };

  const ScratchBlocks = await addon.tab.traps.getBlockly();
  const originalShowEditor = ScratchBlocks.FieldColourSlider.prototype.showEditor_;

  ScratchBlocks.FieldColourSlider.prototype.showEditor_ = function (...args) {
    const r = originalShowEditor.call(this, ...args);
    addColorPicker();
    return r;
  };
});

/***/ }),

/***/ "./src/addons/addons/color-picker/userscript.js":
/*!******************************************************!*\
  !*** ./src/addons/addons/color-picker/userscript.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _code_editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-editor.js */ "./src/addons/addons/color-picker/code-editor.js");

/* harmony default export */ __webpack_exports__["default"] = (async api => {
  Object(_code_editor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(api);
});

/***/ }),

/***/ "./src/addons/addons/editor-comment-previews/_runtime_entry.js":
/*!*********************************************************************!*\
  !*** ./src/addons/addons/editor-comment-previews/_runtime_entry.js ***!
  \*********************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-comment-previews/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-comment-previews/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/editor-comment-previews/userscript.js":
/*!*****************************************************************!*\
  !*** ./src/addons/addons/editor-comment-previews/userscript.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  console
}) {
  const vm = addon.tab.traps.vm;

  const updateStyles = () => {
    previewInner.classList.toggle("sa-comment-preview-delay", addon.settings.get("delay") !== "none");
    previewInner.classList.toggle("sa-comment-preview-reduce-transparency", addon.settings.get("reduce-transparency"));
    previewInner.classList.toggle("sa-comment-preview-fade", !addon.settings.get("reduce-animation"));
  };

  const afterDelay = cb => {
    if (!previewInner.classList.contains("sa-comment-preview-hidden")) {
      // If not hidden, updating immediately is preferred
      cb();
      return;
    }

    const delay = addon.settings.get("delay");
    if (delay === "long") return setTimeout(cb, 500);
    if (delay === "short") return setTimeout(cb, 300);
    cb();
  };

  let hoveredElement = null;
  let showTimeout = null;
  let mouseX = 0;
  let mouseY = 0;
  let doNotShowUntilMoveMouse = false;
  const previewOuter = document.createElement("div");
  previewOuter.classList.add("sa-comment-preview-outer");
  const previewInner = document.createElement("div");
  previewInner.classList.add("sa-comment-preview-inner");
  previewInner.classList.add("sa-comment-preview-hidden");
  updateStyles();
  addon.settings.addEventListener("change", updateStyles);
  previewOuter.appendChild(previewInner);
  document.body.appendChild(previewOuter);

  const getBlock = id => vm.editingTarget.blocks.getBlock(id) || vm.runtime.flyoutBlocks.getBlock(id);

  const getComment = block => block && block.comment && vm.editingTarget.comments[block.comment];

  const getProcedureDefinitionBlock = procCode => {
    const procedurePrototype = Object.values(vm.editingTarget.blocks._blocks).find(i => i.opcode === "procedures_prototype" && i.mutation.proccode === procCode);

    if (procedurePrototype) {
      // Usually `parent` will exist but sometimes it doesn't
      if (procedurePrototype.parent) {
        return getBlock(procedurePrototype.parent);
      }

      const id = procedurePrototype.id;
      return Object.values(vm.editingTarget.blocks._blocks).find(i => i.opcode === "procedures_definition" && i.inputs.custom_block && i.inputs.custom_block.block === id);
    }

    return null;
  };

  const setText = text => {
    previewInner.innerText = text;
    previewInner.classList.remove("sa-comment-preview-hidden");
    updateMousePosition();
  };

  const updateMousePosition = () => {
    previewOuter.style.transform = "translate(".concat(mouseX + 8, "px, ").concat(mouseY + 8, "px)");
  };

  const hidePreview = () => {
    if (hoveredElement) {
      hoveredElement = null;
      previewInner.classList.add("sa-comment-preview-hidden");
    }
  };

  document.addEventListener("mouseover", e => {
    if (addon.self.disabled) {
      return;
    }

    clearTimeout(showTimeout);

    if (doNotShowUntilMoveMouse) {
      return;
    }

    const el = e.target.closest(".blocklyBubbleCanvas > g, .blocklyBlockCanvas .blocklyDraggable[data-id]");

    if (el === hoveredElement) {
      // Nothing to do.
      return;
    }

    if (!el) {
      hidePreview();
      return;
    }

    let text = null;

    if (addon.settings.get("hover-view") && e.target.closest(".blocklyBubbleCanvas > g") && // Hovering over the thin line that connects comments to blocks should never show a preview
    !e.target.closest("line")) {
      const collapsedText = el.querySelector("text.scratchCommentText");

      if (collapsedText.getAttribute("display") !== "none") {
        const textarea = el.querySelector("textarea");
        text = textarea.value;
      }
    } else if (e.target.closest(".blocklyBlockCanvas .blocklyDraggable[data-id]")) {
      const id = el.dataset.id;
      const block = getBlock(id);
      const comment = getComment(block);

      if (addon.settings.get("hover-view-block") && comment) {
        text = comment.text;
      } else if (block && block.opcode === "procedures_call" && addon.settings.get("hover-view-procedure")) {
        const procCode = block.mutation.proccode;
        const procedureDefinitionBlock = getProcedureDefinitionBlock(procCode);
        const procedureComment = getComment(procedureDefinitionBlock);

        if (procedureComment) {
          text = procedureComment.text;
        }
      }
    }

    if (text !== null && text.trim() !== "") {
      showTimeout = afterDelay(() => {
        hoveredElement = el;
        setText(text);
      });
    } else {
      hidePreview();
    }
  });
  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    doNotShowUntilMoveMouse = false;

    if (addon.settings.get("follow-mouse") && !previewInner.classList.contains("sa-comment-preview-hidden")) {
      updateMousePosition();
    }
  });
  document.addEventListener("mousedown", () => {
    hidePreview();
    doNotShowUntilMoveMouse = true;
  }, {
    capture: true
  });
});

/***/ }),

/***/ "./src/addons/addons/editor-devtools/DevTools.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/editor-devtools/DevTools.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DevTools; });
/* harmony import */ var _DomHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomHelpers.js */ "./src/addons/addons/editor-devtools/DomHelpers.js");
/* harmony import */ var _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UndoGroup.js */ "./src/addons/addons/editor-devtools/UndoGroup.js");
// import ShowBroadcast from "./show-broadcast.js";


class DevTools {
  constructor(addon, msg, m) {
    this.addon = addon;
    this.msg = msg;
    this.m = m;
    /**
     * @type {VirtualMachine}
     */

    this.domHelpers = new _DomHelpers_js__WEBPACK_IMPORTED_MODULE_0__["default"](addon);
    this.codeTab = null;
    this.costTab = null;
    this.costTabBody = null;
    this.selVarID = null;
    this.canShare = false;
    this.mouseXY = {
      x: 0,
      y: 0
    };
  }

  async init() {
    this.addContextMenus();

    while (true) {
      const root = await this.addon.tab.waitForElement("ul[class*=gui_tab-list_]", {
        markAsSeen: true,
        reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
        reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
      });
      this.initInner(root);
    }
  }

  async addContextMenus() {
    const blockly = await this.addon.tab.traps.getBlockly();
    const oldCleanUpFunc = blockly.WorkspaceSvg.prototype.cleanUp;
    const self = this;

    blockly.WorkspaceSvg.prototype.cleanUp = function () {
      if (self.addon.settings.get("enableCleanUpPlus")) {
        self.doCleanUp();
      } else {
        oldCleanUpFunc.call(this);
      }
    };

    let originalMsg = blockly.Msg.CLEAN_UP;
    if (this.addon.settings.get("enableCleanUpPlus")) blockly.Msg.CLEAN_UP = this.m("clean-plus");
    this.addon.settings.addEventListener("change", () => {
      if (this.addon.settings.get("enableCleanUpPlus")) blockly.Msg.CLEAN_UP = this.m("clean-plus");else blockly.Msg.CLEAN_UP = originalMsg;
    });
    this.addon.tab.createBlockContextMenu((items, block) => {
      items.push({
        enabled: blockly.clipboardXml_,
        text: this.m("paste"),
        separator: true,
        _isDevtoolsFirstItem: true,
        callback: () => {
          let ids = this.getTopBlockIDs();
          document.dispatchEvent(new KeyboardEvent("keydown", {
            keyCode: 86,
            ctrlKey: true,
            griff: true
          }));
          setTimeout(() => {
            this.beginDragOfNewBlocksNotInIDs(ids);
          }, 10);
        }
      });
      return items;
    }, {
      workspace: true
    });
    this.addon.tab.createBlockContextMenu((items, block) => {
      items.push({
        enabled: true,
        text: this.m("make-space"),
        _isDevtoolsFirstItem: true,
        callback: () => {
          this.doCleanUp(block);
        },
        separator: true
      }, {
        enabled: true,
        text: this.m("copy-all"),
        callback: () => {
          this.eventCopyClick(block);
        },
        separator: true
      }, {
        enabled: true,
        text: this.m("copy-block"),
        callback: () => {
          this.eventCopyClick(block, 1);
        }
      }, {
        enabled: true,
        text: this.m("cut-block"),
        callback: () => {
          this.eventCopyClick(block, 2);
        }
      }); // const BROADCAST_BLOCKS = ["event_whenbroadcastreceived", "event_broadcast", "event_broadcastandwait"];
      // if (BROADCAST_BLOCKS.includes(block.type)) {
      //   // Show Broadcast
      //   const broadcastId = this.showBroadcastSingleton.getAssociatedBroadcastId(block.id);
      //   if (broadcastId) {
      //     ["Senders", "Receivers"].forEach((showKey, i) => {
      //       items.push({
      //         enabled: true,
      //         text: this.msg(`show-${showKey}`.toLowerCase()),
      //         callback: () => {
      //           this.showBroadcastSingleton[`show${showKey}`](broadcastId);
      //         },
      //         separator: i == 0,
      //       });
      //     });
      //   }
      // }

      return items;
    }, {
      blocks: true
    });
    this.addon.tab.createBlockContextMenu((items, block) => {
      if (block.getCategory() === "data" || block.getCategory() === "data-lists") {
        this.selVarID = block.getVars()[0];
        items.push({
          enabled: true,
          text: this.m("swap", {
            var: block.getCategory() === "data" ? this.m("variables") : this.m("lists")
          }),
          callback: async () => {
            let wksp = this.getWorkspace();
            let v = wksp.getVariableById(this.selVarID); // prompt() returns Promise in desktop app

            let varName = await window.prompt(this.msg("replace", {
              name: v.name
            }));

            if (varName) {
              this.doReplaceVariable(this.selVarID, varName, v.type);
            }
          },
          separator: true
        });
      }

      return items;
    }, {
      blocks: true,
      flyout: true
    });
  }

  getWorkspace() {
    return Blockly.getMainWorkspace();
  }

  isCostumeEditor() {
    return this.costTab.className.indexOf("gui_is-selected") >= 0;
  }
  /**
   * A nicely ordered version of the top blocks
   * @returns {[Blockly.Block]}
   */


  getTopBlocks() {
    let result = this.getOrderedTopBlockColumns();
    let columns = result.cols;
    /**
     * @type {[[Blockly.Block]]}
     */

    let topBlocks = [];

    for (const col of columns) {
      topBlocks = topBlocks.concat(col.blocks);
    }

    return topBlocks;
  }
  /**
   * A much nicer way of laying out the blocks into columns
   */


  doCleanUp(block) {
    let workspace = this.getWorkspace();
    let makeSpaceForBlock = block && block.getRootBlock();
    _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].startUndoGroup(workspace);
    let result = this.getOrderedTopBlockColumns(true);
    let columns = result.cols;
    let orphanCount = result.orphans.blocks.length;

    if (orphanCount > 0 && !block) {
      let message = this.msg("orphaned", {
        count: orphanCount
      });

      if (confirm(message)) {
        for (const block of result.orphans.blocks) {
          block.dispose();
        }
      } else {
        columns.unshift(result.orphans);
      }
    }

    let cursorX = 48;
    let maxWidths = result.maxWidths;

    for (const column of columns) {
      let cursorY = 64;
      let maxWidth = 0;

      for (const block of column.blocks) {
        let extraWidth = block === makeSpaceForBlock ? 380 : 0;
        let extraHeight = block === makeSpaceForBlock ? 480 : 72;
        let xy = block.getRelativeToSurfaceXY();

        if (cursorX - xy.x !== 0 || cursorY - xy.y !== 0) {
          block.moveBy(cursorX - xy.x, cursorY - xy.y);
        }

        let heightWidth = block.getHeightWidth();
        cursorY += heightWidth.height + extraHeight;
        let maxWidthWithComments = maxWidths[block.id] || 0;
        maxWidth = Math.max(maxWidth, Math.max(heightWidth.width + extraWidth, maxWidthWithComments));
      }

      cursorX += maxWidth + 96;
    }

    let topComments = workspace.getTopComments();

    for (const comment of topComments) {
      if (comment.setVisible) {
        comment.setVisible(false);
        comment.needsAutoPositioning_ = true;
        comment.setVisible(true);
      }
    }

    setTimeout(() => {
      // Locate unused local variables...
      let workspace = this.getWorkspace();
      let map = workspace.getVariableMap();
      let vars = map.getVariablesOfType("");
      let unusedLocals = [];

      for (const row of vars) {
        if (row.isLocal) {
          let usages = map.getVariableUsesById(row.getId());

          if (!usages || usages.length === 0) {
            unusedLocals.push(row);
          }
        }
      }

      if (unusedLocals.length > 0) {
        const unusedCount = unusedLocals.length;
        let message = this.msg("unused-var", {
          count: unusedCount
        });

        for (let i = 0; i < unusedLocals.length; i++) {
          let orphan = unusedLocals[i];

          if (i > 0) {
            message += ", ";
          }

          message += orphan.name;
        }

        if (confirm(message)) {
          for (const orphan of unusedLocals) {
            workspace.deleteVariableById(orphan.getId());
          }
        }
      } // Locate unused local lists...


      let lists = map.getVariablesOfType("list");
      let unusedLists = [];

      for (const row of lists) {
        if (row.isLocal) {
          let usages = map.getVariableUsesById(row.getId());

          if (!usages || usages.length === 0) {
            unusedLists.push(row);
          }
        }
      }

      if (unusedLists.length > 0) {
        const unusedCount = unusedLists.length;
        let message = this.msg("unused-list", {
          count: unusedCount
        });

        for (let i = 0; i < unusedLists.length; i++) {
          let orphan = unusedLists[i];

          if (i > 0) {
            message += ", ";
          }

          message += orphan.name;
        }

        if (confirm(message)) {
          for (const orphan of unusedLists) {
            workspace.deleteVariableById(orphan.getId());
          }
        }
      }

      _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].endUndoGroup(workspace);
    }, 100);
  }
  /**
   * Badly Orphaned - might want to delete these!
   * @param topBlock
   * @returns {boolean}
   */


  isBlockAnOrphan(topBlock) {
    return !!topBlock.outputConnection;
  }
  /**
   * Split the top blocks into ordered columns
   * @param separateOrphans true to keep all orphans separate
   * @returns {{orphans: {blocks: [Block], x: number, count: number}, cols: [Col]}}
   */


  getOrderedTopBlockColumns(separateOrphans) {
    let w = this.getWorkspace();
    let topBlocks = w.getTopBlocks();
    let maxWidths = {};

    if (separateOrphans) {
      let topComments = w.getTopComments(); // todo: tie comments to blocks... find widths and width of block stack row...

      for (const comment of topComments) {
        // comment.autoPosition_();
        // Hiding and showing repositions the comment right next to it's block - nice!
        if (comment.setVisible) {
          comment.setVisible(false);
          comment.needsAutoPositioning_ = true;
          comment.setVisible(true); // let bb = comment.block_.svgPath_.getBBox();

          let right = comment.getBoundingRectangle().bottomRight.x; // Get top block for stack...

          let root = comment.block_.getRootBlock();
          let left = root.getBoundingRectangle().topLeft.x;
          maxWidths[root.id] = Math.max(right - left, maxWidths[root.id] || 0);
        }
      }
    } // Default scratch ordering is horrid... Lets try something more clever.

    /**
     * @type {Col[]}
     */


    let cols = [];
    const TOLERANCE = 256;
    let orphans = {
      x: -999999,
      count: 0,
      blocks: []
    };

    for (const topBlock of topBlocks) {
      // let r = b.getBoundingRectangle();
      let position = topBlock.getRelativeToSurfaceXY();
      /**
       * @type {Col}
       */

      let bestCol = null;
      let bestError = TOLERANCE;

      if (separateOrphans && this.isBlockAnOrphan(topBlock)) {
        orphans.blocks.push(topBlock);
        continue;
      } // Find best columns


      for (const col of cols) {
        let err = Math.abs(position.x - col.x);

        if (err < bestError) {
          bestError = err;
          bestCol = col;
        }
      }

      if (bestCol) {
        // We found a column that we fitted into
        bestCol.x = (bestCol.x * bestCol.count + position.x) / ++bestCol.count; // re-average the columns as more items get added...

        bestCol.blocks.push(topBlock);
      } else {
        // Create a new column
        cols.push(new Col(position.x, 1, [topBlock]));
      }
    } // if (orphans.blocks.length > 0) {
    //     cols.push(orphans);
    // }
    // Sort columns, then blocks inside the columns


    cols.sort((a, b) => a.x - b.x);

    for (const col of cols) {
      col.blocks.sort((a, b) => a.getRelativeToSurfaceXY().y - b.getRelativeToSurfaceXY().y);
    }

    return {
      cols: cols,
      orphans: orphans,
      maxWidths: maxWidths
    };
  }
  /**
   * Find all the uses of a named variable.
   * @param {string} id ID of the variable to find.
   * @return {!Array.<!Blockly.Block>} Array of block usages.
   */


  getVariableUsesById(id) {
    let uses = [];
    let topBlocks = this.getTopBlocks(true); // todo: Confirm this was the right getTopBlocks?

    for (const topBlock of topBlocks) {
      /** @type {!Array<!Blockly.Block>} */
      let kids = topBlock.getDescendants();

      for (const block of kids) {
        /** @type {!Array<!Blockly.VariableModel>} */
        let blockVariables = block.getVarModels();

        if (blockVariables) {
          for (const blockVar of blockVariables) {
            if (blockVar.getId() === id) {
              uses.push(block);
            }
          }
        }
      }
    }

    return uses;
  }
  /**
   * Quick and dirty replace all instances of one variable / list with another variable / list
   * @param varId original variable name
   * @param newVarName new variable name
   * @param type type of variable ("" = variable, anything else is a list?
   */


  doReplaceVariable(varId, newVarName, type) {
    let wksp = this.getWorkspace();
    let v = wksp.getVariable(newVarName, type);

    if (!v) {
      alert(this.msg("var-not-exist"));
      return;
    }

    let newVId = v.getId();
    _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].startUndoGroup(wksp);
    let blocks = this.getVariableUsesById(varId);

    for (const block of blocks) {
      try {
        if (type === "") {
          block.getField("VARIABLE").setValue(newVId);
        } else {
          block.getField("LIST").setValue(newVId);
        }
      } catch (e) {// ignore
      }
    }

    _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].endUndoGroup(wksp);
  }
  /*
    function doInjectScripts(codeString) {
      let w = getWorkspace();
      let xml = new XML(); // document.implementation.createDocument(null, "xml");
      let x = xml.xmlDoc.firstChild;
       let tree = math.parse(codeString);
      console.log(tree);
       const binaryOperatorTypes = {
        add: "operator_add",
        subtract: "operator_subtract",
        this.multiply: "operator_multiply",
        divide: "operator_divide",
      };
       const BLOCK_TYPE = {
        number: "math_number",
        text: "text",
      };
       function translateMathToXml(x, tree, shadowType) {
        let xShadowField = null;
        if (shadowType) {
          let xShadow = xml.newXml(x, "shadow", { type: shadowType });
          if (shadowType === BLOCK_TYPE.number) {
            xShadowField = xml.newXml(xShadow, "field", { name: "NUM" });
          } else if (shadowType === BLOCK_TYPE.text) {
            xShadowField = xml.newXml(xShadow, "field", { name: "TEXT" });
          }
        }
         if (!tree || !tree.type) {
          return;
        }
         if (tree.type === "OperatorNode") {
          let operatorType = binaryOperatorTypes[tree.fn];
          if (operatorType) {
            let xOp = newXml(x, "block", { type: operatorType });
            translateMathToXml(xml.newXml(xOp, "value", { name: "NUM1" }), tree.args[0], BLOCK_TYPE.number);
            translateMathToXml(xml.newXml(xOp, "value", { name: "NUM2" }), tree.args[1], BLOCK_TYPE.number);
            return;
          }
           return;
        }
         if (tree.type === "ConstantNode") {
          // number or text in quotes
          if (xShadowField) {
            xml.setAttr(xShadowField, { text: tree.value });
          }
          return;
        }
         if (tree.type === "SymbolNode") {
          // variable
          let xVar = xml.newXml(x, "block", { type: "data_variable" });
          xml.newXml(xVar, "field", { name: "VARIABLE", text: tree.name });
          return;
        }
         if (tree.type === "FunctionNode") {
          // Method Call
          if (tree.fn.name === "join") {
            let xOp = newXml(x, "block", { type: "operator_join" });
            translateMathToXml(xml.newXml(xOp, "value", { name: "STRING1" }), tree.args[0], BLOCK_TYPE.text);
            translateMathToXml(xml.newXml(xOp, "value", { name: "STRING2" }), tree.args[1], BLOCK_TYPE.text);
            return;
          }
        }
      }
       translateMathToXml(x, tree);
      console.log(x);
       let ids = Blockly.Xml.domToWorkspace(x, w);
      console.log(ids);
    }
     */

  /*
    function clickInject(e) {
      let codeString = window.prompt("Griffpatch: Enter an expression (i.e. a+2*3)");
      if (codeString) {
        doInjectScripts(codeString);
      }
      e.preventDefault();
      return false;
    }
    */

  /**
   * Returns a Set of the top blocks in this workspace / sprite
   * @returns {Set<any>} Set of top blocks
   */


  getTopBlockIDs() {
    let wksp = this.getWorkspace();
    let topBlocks = wksp.getTopBlocks();
    let ids = new Set();

    for (const block of topBlocks) {
      ids.add(block.id);
    }

    return ids;
  }
  /**
   * Initiates a drag event for all block stacks except those in the set of ids.
   * But why? - Because we know all the ids of the existing stacks before we paste / duplicate - so we can find the
   * new stack by excluding all the known ones.
   * @param ids Set of previously known ids
   */


  beginDragOfNewBlocksNotInIDs(ids) {
    if (!this.addon.settings.get("enablePasteBlocksAtMouse")) {
      return;
    }

    let wksp = this.getWorkspace();
    let topBlocks = wksp.getTopBlocks();

    for (const block of topBlocks) {
      if (!ids.has(block.id)) {
        // console.log("I found a new block!!! - " + block.id);
        // todo: move the block to the mouse pointer?
        let mouseXYClone = {
          x: this.mouseXY.x,
          y: this.mouseXY.y
        };
        block.setIntersects(true); // fixes offscreen block pasting in TurboWarp

        this.domHelpers.triggerDragAndDrop(block.svgPath_, null, mouseXYClone);
      }
    }
  }

  updateMousePosition(e) {
    this.mouseXY.x = e.clientX;
    this.mouseXY.y = e.clientY;
  }

  eventMouseMove(e) {
    this.updateMousePosition(e);
  }

  eventKeyDown(e) {
    const switchCostume = up => {
      // todo: select previous costume
      let selected = this.costTabBody.querySelector("div[class*='sprite-selector-item_is-selected']");
      let node = up ? selected.parentNode.previousSibling : selected.parentNode.nextSibling;

      if (node) {
        let wrapper = node.closest("div[class*=gui_flex-wrapper]");
        node.querySelector("div[class^='sprite-selector-item_sprite-name']").click();
        node.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "start"
        });
        wrapper.scrollTop = 0;
      }
    };

    if (document.URL.indexOf("editor") <= 0) {
      return;
    }

    let ctrlKey = e.ctrlKey || e.metaKey;

    if (e.keyCode === 37 && ctrlKey) {
      // Ctrl + Left Arrow Key
      if (document.activeElement.tagName === "INPUT") {
        return;
      }

      if (this.isCostumeEditor()) {
        switchCostume(true);
        e.cancelBubble = true;
        e.preventDefault();
        return true;
      }
    }

    if (e.keyCode === 39 && ctrlKey) {
      // Ctrl + Right Arrow Key
      if (document.activeElement.tagName === "INPUT") {
        return;
      }

      if (this.isCostumeEditor()) {
        switchCostume(false);
        e.cancelBubble = true;
        e.preventDefault();
        return true;
      }
    }

    if (e.keyCode === 86 && ctrlKey && !e.griff) {
      // Ctrl + V
      // Set a timeout so we can take control of the paste after the event
      let ids = this.getTopBlockIDs();
      setTimeout(() => {
        this.beginDragOfNewBlocksNotInIDs(ids);
      }, 10);
    } // if (e.keyCode === 220 && (!document.activeElement || document.activeElement.tagName === 'INPUT')) {
    //
    // }

  }

  eventCopyClick(block, blockOnly) {
    let wksp = this.getWorkspace();

    if (block) {
      block.select();
      let next = blockOnly ? block.getNextBlock() : null;

      if (next) {
        next.unplug(false); // setParent(null);
      } // separate child temporarily


      document.dispatchEvent(new KeyboardEvent("keydown", {
        keyCode: 67,
        ctrlKey: true
      }));

      if (next || blockOnly === 2) {
        setTimeout(() => {
          if (next) {
            wksp.undo(); // undo the unplug above...
          }

          if (blockOnly === 2) {
            _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].startUndoGroup(wksp);
            block.dispose(true);
            _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].endUndoGroup(wksp);
          }
        }, 0);
      }
    }
  }

  eventMouseDown(e) {
    this.updateMousePosition(e);
  }

  eventMouseUp(e) {
    this.updateMousePosition(e);
  }

  initInner(root) {
    let guiTabs = root.childNodes;

    if (this.codeTab && guiTabs[0] !== this.codeTab) {
      // We have been CHANGED!!! - Happens when going to project page, and then back inside again!!!
      this.domHelpers.unbindAllEvents();
    }

    this.codeTab = guiTabs[0];
    this.costTab = guiTabs[1];
    this.costTabBody = document.querySelector("div[aria-labelledby=" + this.costTab.id + "]");
    this.domHelpers.bindOnce(document, "keydown", (...e) => this.eventKeyDown(...e), true);
    this.domHelpers.bindOnce(document, "mousemove", (...e) => this.eventMouseMove(...e), true);
    this.domHelpers.bindOnce(document, "mousedown", (...e) => this.eventMouseDown(...e), true); // true to capture all mouse downs 'before' the dom events handle them

    this.domHelpers.bindOnce(document, "mouseup", (...e) => this.eventMouseUp(...e), true);
  }

}

class Col {
  /**
   * @param x {Number} x position (for ordering)
   * @param count {Number}
   * @param blocks {[Block]}
   */
  constructor(x, count, blocks) {
    /**
     * x position (for ordering)
     * @type {Number}
     */
    this.x = x;
    /**
     * @type {Number}
     */

    this.count = count;
    /**
     * @type {[Blockly.Block]}
     */

    this.blocks = blocks;
  }

}

/***/ }),

/***/ "./src/addons/addons/editor-devtools/DomHelpers.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/editor-devtools/DomHelpers.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DomHelpers; });
class DomHelpers {
  constructor(addon) {
    this.addon = addon;
    this.vm = addon.tab.traps.vm;
    /**
     * @type {eventDetails[]}
     */

    this.events = [];
  }
  /**
   * Simulate a drag and drop programmatically through javascript
   * @param selectorDrag
   * @param selectorDrop
   * @param mouseXY
   * @param [shiftKey=false]
   * @returns {boolean}
   */


  triggerDragAndDrop(selectorDrag, selectorDrop, mouseXY, shiftKey) {
    // function for triggering mouse events
    shiftKey = shiftKey || false;

    let fireMouseEvent = function fireMouseEvent(type, elem, centerX, centerY) {
      let evt = document.createEvent("MouseEvents");
      evt.initMouseEvent(type, true, true, window, 1, 1, 1, centerX, centerY, shiftKey, false, false, false, 0, elem);
      elem.dispatchEvent(evt);
    }; // fetch target elements


    let elemDrag = selectorDrag; // document.querySelector(selectorDrag);

    let elemDrop = selectorDrop; // document.querySelector(selectorDrop);

    if (!elemDrag
    /* || !elemDrop*/
    ) {
      return false;
    } // calculate positions


    let pos = elemDrag.getBoundingClientRect();
    let center1X = Math.floor((pos.left + pos.right) / 2);
    let center1Y = Math.floor((pos.top + pos.bottom) / 2); // mouse over dragged element and mousedown

    fireMouseEvent("mouseover", elemDrag, center1X, center1Y);
    fireMouseEvent("mousedown", elemDrag, center1X, center1Y); // start dragging process over to drop target

    fireMouseEvent("dragstart", elemDrag, center1X, center1Y);
    fireMouseEvent("drag", elemDrag, center1X, center1Y);
    fireMouseEvent("mousemove", elemDrag, center1X, center1Y);

    if (!elemDrop) {
      if (mouseXY) {
        // console.log(mouseXY);
        let center2X = mouseXY.x;
        let center2Y = mouseXY.y;
        fireMouseEvent("drag", elemDrag, center2X, center2Y);
        fireMouseEvent("mousemove", elemDrag, center2X, center2Y);
      }

      return false;
    }

    pos = elemDrop.getBoundingClientRect();
    let center2X = Math.floor((pos.left + pos.right) / 2);
    let center2Y = Math.floor((pos.top + pos.bottom) / 2);
    fireMouseEvent("drag", elemDrag, center2X, center2Y);
    fireMouseEvent("mousemove", elemDrop, center2X, center2Y); // trigger dragging process on top of drop target

    fireMouseEvent("mouseenter", elemDrop, center2X, center2Y);
    fireMouseEvent("dragenter", elemDrop, center2X, center2Y);
    fireMouseEvent("mouseover", elemDrop, center2X, center2Y);
    fireMouseEvent("dragover", elemDrop, center2X, center2Y); // release dragged element on top of drop target

    fireMouseEvent("drop", elemDrop, center2X, center2Y);
    fireMouseEvent("dragend", elemDrag, center2X, center2Y);
    fireMouseEvent("mouseup", elemDrag, center2X, center2Y);
    return true;
  }

  bindOnce(dom, event, func, capture) {
    capture = !!capture;
    dom.removeEventListener(event, func, capture);
    dom.addEventListener(event, func, capture);
    this.events.push(new eventDetails(dom, event, func, capture));
  }

  unbindAllEvents() {
    for (const event of this.events) {
      event.dom.removeEventListener(event.event, event.func, event.capture);
    }

    this.events = [];
  }

}
/**
 * A record of an event
 */

class eventDetails {
  constructor(dom, event, func, capture) {
    this.dom = dom;
    this.event = event;
    this.func = func;
    this.capture = capture;
  }

}

/***/ }),

/***/ "./src/addons/addons/editor-devtools/UndoGroup.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/editor-devtools/UndoGroup.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UndoGroup; });
/**
 * This class is dedicated to maintaining the Undo stack of Blockly
 * It allows us to initiate an undo group such that all subsequent operations are recorded as a single
 * undoable transaction.
 */
class UndoGroup {
  /**
   * Start an Undo group - begin recording
   * @param workspace the workspace
   */
  static startUndoGroup(workspace) {
    const undoStack = workspace.undoStack_;

    if (undoStack.length) {
      undoStack[undoStack.length - 1]._devtoolsLastUndo = true;
    }
  }
  /**
   * End an Undo group - stops recording
   * @param workspace the workspace
   */


  static endUndoGroup(workspace) {
    const undoStack = workspace.undoStack_; // Events (responsible for undoStack updates) are delayed with a setTimeout(f, 0)
    // https://github.com/LLK/scratch-blocks/blob/f159a1779e5391b502d374fb2fdd0cb5ca43d6a2/core/events.js#L182

    setTimeout(() => {
      const group = generateUID();

      for (let i = undoStack.length - 1; i >= 0 && !undoStack[i]._devtoolsLastUndo; i--) {
        undoStack[i].group = group;
      }
    }, 0);
  }

}
/**
 * https://github.com/LLK/scratch-blocks/blob/f159a1779e5391b502d374fb2fdd0cb5ca43d6a2/core/events.js#L182
 * @returns {string}
 * @private
 */

function generateUID() {
  const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%()*+,-./:;=?@[]^_`{|}~";
  let result = "";

  for (let i = 0; i < 20; i++) {
    result += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  }

  return result;
}

/***/ }),

/***/ "./src/addons/addons/editor-devtools/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/editor-devtools/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-devtools/userscript.js");
/* harmony import */ var _url_loader_icon_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-loader!./icon--close.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-devtools/icon--close.svg");
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "icon--close.svg": _url_loader_icon_close_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
};

/***/ }),

/***/ "./src/addons/addons/editor-devtools/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/editor-devtools/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DevTools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DevTools.js */ "./src/addons/addons/editor-devtools/DevTools.js");

/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  console,
  msg,
  safeMsg: m
}) {
  const devTools = new _DevTools_js__WEBPACK_IMPORTED_MODULE_0__["default"](addon, msg, m);
  devTools.init();
});

/***/ }),

/***/ "./src/addons/addons/editor-searchable-dropdowns/_runtime_entry.js":
/*!*************************************************************************!*\
  !*** ./src/addons/addons/editor-searchable-dropdowns/_runtime_entry.js ***!
  \*************************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-searchable-dropdowns/userscript.js");
/* harmony import */ var _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userscript.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-searchable-dropdowns/userscript.css");
/* harmony import */ var _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userscript.css": _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/editor-searchable-dropdowns/userscript.js":
/*!*********************************************************************!*\
  !*** ./src/addons/addons/editor-searchable-dropdowns/userscript.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  console,
  msg
}) {
  const Blockly = await addon.tab.traps.getBlockly();
  const vm = addon.tab.traps.vm;
  const SCRATCH_ITEMS_TO_HIDE = ["RENAME_VARIABLE_ID", "DELETE_VARIABLE_ID", "NEW_BROADCAST_MESSAGE_ID", // From rename-broadcasts addon
  "RENAME_BROADCAST_MESSAGE_ID"];

  const canUseAsGlobalVariableName = (name, type) => {
    return !vm.runtime.getAllVarNamesOfType(type).includes(name);
  };

  const canUseAsLocalVariableName = (name, type) => {
    return !vm.editingTarget.lookupVariableByNameAndType(name, type);
  };

  const ADDON_ITEMS = {
    createGlobalVariable: {
      enabled: name => canUseAsGlobalVariableName(name, ""),
      createVariable: (workspace, name) => workspace.createVariable(name)
    },
    createLocalVariable: {
      enabled: name => canUseAsLocalVariableName(name, ""),
      createVariable: (workspace, name) => workspace.createVariable(name, "", null, true)
    },
    createGlobalList: {
      enabled: name => canUseAsGlobalVariableName(name, "list"),
      createVariable: (workspace, name) => workspace.createVariable(name, "list")
    },
    createLocalList: {
      enabled: name => canUseAsLocalVariableName(name, "list"),
      createVariable: (workspace, name) => workspace.createVariable(name, "list", null, true)
    },
    createBroadcast: {
      enabled: name => canUseAsGlobalVariableName(name, "broadcast_msg"),
      createVariable: (workspace, name) => workspace.createVariable(name, "broadcast_msg")
    }
  };
  let blocklyDropDownContent = null;
  let blocklyDropdownMenu = null;
  let searchBar = null; // Contains DOM and addon state

  let items = [];
  let searchedItems = []; // Tracks internal Scratch state

  let currentDropdownOptions = [];
  let resultOfLastGetOptions = [];
  const oldDropDownDivShow = Blockly.DropDownDiv.show;

  Blockly.DropDownDiv.show = function (...args) {
    blocklyDropdownMenu = document.querySelector(".blocklyDropdownMenu");

    if (!blocklyDropdownMenu) {
      return oldDropDownDivShow.call(this, ...args);
    }

    blocklyDropdownMenu.focus = () => {}; // no-op focus() so it can't steal it from the search bar


    searchBar = document.createElement("input");
    addon.tab.displayNoneWhileDisabled(searchBar, {
      display: "flex"
    });
    searchBar.type = "text";
    searchBar.addEventListener("input", updateSearch);
    searchBar.addEventListener("keydown", handleKeyDownEvent);
    searchBar.classList.add("u-dropdown-searchbar");
    blocklyDropdownMenu.insertBefore(searchBar, blocklyDropdownMenu.firstChild);
    items = Array.from(blocklyDropdownMenu.children).filter(child => child.tagName !== "INPUT").map(element => ({
      element,
      text: element.textContent
    }));
    currentDropdownOptions = resultOfLastGetOptions;
    updateSearch(); // Call the original show method after adding everything so that it can perform the correct size calculations

    const ret = oldDropDownDivShow.call(this, ...args); // Lock the size of the dropdown

    blocklyDropDownContent = Blockly.DropDownDiv.getContentDiv();
    blocklyDropDownContent.style.width = getComputedStyle(blocklyDropDownContent).width;
    blocklyDropDownContent.style.height = getComputedStyle(blocklyDropDownContent).height; // This is really strange, but if you don't reinsert the search bar into the DOM then focus() doesn't work

    blocklyDropdownMenu.insertBefore(searchBar, blocklyDropdownMenu.firstChild);
    searchBar.focus();
    return ret;
  };

  const oldDropDownDivClearContent = Blockly.DropDownDiv.clearContent;

  Blockly.DropDownDiv.clearContent = function () {
    oldDropDownDivClearContent.call(this);
    items = [];
    searchedItems = [];
    Blockly.DropDownDiv.content_.style.height = "";
  };

  const oldFieldDropdownGetOptions = Blockly.FieldDropdown.prototype.getOptions;

  Blockly.FieldDropdown.prototype.getOptions = function () {
    const options = oldFieldDropdownGetOptions.call(this);
    const block = this.sourceBlock_;
    const isStage = vm.editingTarget && vm.editingTarget.isStage;

    if (block) {
      if (block.category_ === "data") {
        options.push(getMenuItemMessage("createGlobalVariable"));

        if (!isStage) {
          options.push(getMenuItemMessage("createLocalVariable"));
        }
      } else if (block.category_ === "data-lists") {
        options.push(getMenuItemMessage("createGlobalList"));

        if (!isStage) {
          options.push(getMenuItemMessage("createLocalList"));
        }
      } else if (block.type === "event_broadcast_menu" || block.type === "event_whenbroadcastreceived") {
        options.push(getMenuItemMessage("createBroadcast"));
      }
    } // Options aren't normally stored anywhere, so we'll store them ourselves.


    resultOfLastGetOptions = options;
    return options;
  };

  const oldFieldVariableOnItemSelected = Blockly.FieldVariable.prototype.onItemSelected;

  Blockly.FieldVariable.prototype.onItemSelected = function (menu, menuItem) {
    const sourceBlock = this.sourceBlock_;

    if (sourceBlock && sourceBlock.workspace && searchBar.value.length !== 0) {
      const workspace = sourceBlock.workspace;
      const optionId = menuItem.getValue();

      if (Object.prototype.hasOwnProperty.call(ADDON_ITEMS, optionId)) {
        const addonItem = ADDON_ITEMS[optionId];
        Blockly.Events.setGroup(true);
        const variable = addonItem.createVariable(workspace, searchBar.value.trim());
        if (this.sourceBlock_) this.setValue(variable.getId());
        Blockly.Events.setGroup(false);
        return;
      }
    }

    return oldFieldVariableOnItemSelected.call(this, menu, menuItem);
  };

  function selectItem(item, click) {
    // You can't just use click() or focus() because Blockly uses mousedown and mouseup handlers, not click handlers.
    item.dispatchEvent(new MouseEvent("mousedown", {
      relatedTarget: item,
      bubbles: true
    }));
    if (click) item.dispatchEvent(new MouseEvent("mouseup", {
      relatedTarget: item,
      bubbles: true
    })); // Scroll the item into view if it is offscreen.

    const itemTop = item.offsetTop;
    const itemEnd = itemTop + item.offsetHeight;
    const scrollTop = blocklyDropDownContent.scrollTop;
    const scrollHeight = blocklyDropDownContent.offsetHeight;
    const scrollEnd = scrollTop + scrollHeight;

    if (scrollTop > itemTop) {
      blocklyDropDownContent.scrollTop = itemTop;
    } else if (itemEnd > scrollEnd) {
      blocklyDropDownContent.scrollTop = itemEnd - scrollHeight;
    }
  }

  function performSearch() {
    const rawQuery = searchBar.value.trim();
    const query = rawQuery.trim().toLowerCase();

    const rank = (item, index) => {
      // Negative number will hide
      // Higher numbers will appear first
      const option = currentDropdownOptions[index];
      const optionId = option[1];

      if (SCRATCH_ITEMS_TO_HIDE.includes(optionId)) {
        return query ? -1 : 0;
      } else if (Object.prototype.hasOwnProperty.call(ADDON_ITEMS, optionId)) {
        if (!query) {
          return -1;
        }

        const addonInfo = ADDON_ITEMS[optionId];

        if (addonInfo.enabled(rawQuery)) {
          item.element.lastChild.lastChild.textContent = getMenuItemMessage(optionId)[0];
          return 0;
        }

        return -1;
      }

      const itemText = item.text.toLowerCase();

      if (query === itemText) {
        return 2;
      }

      if (itemText.startsWith(query)) {
        return 1;
      }

      if (itemText.includes(query)) {
        return 0;
      }

      return -1;
    };

    return items.map((item, index) => ({
      item,
      score: rank(item, index)
    })).sort(({
      score: scoreA
    }, {
      score: scoreB
    }) => Math.max(0, scoreB) - Math.max(0, scoreA));
  }

  function updateSearch() {
    const previousSearchedItems = searchedItems;
    searchedItems = performSearch();
    let needToUpdateDOM = previousSearchedItems.length !== searchedItems.length;

    if (!needToUpdateDOM) {
      for (let i = 0; i < searchedItems.length; i++) {
        if (searchedItems[i].item !== previousSearchedItems[i].item) {
          needToUpdateDOM = true;
          break;
        }
      }
    }

    if (needToUpdateDOM && previousSearchedItems.length > 0) {
      for (const {
        item
      } of previousSearchedItems) {
        item.element.remove();
      }

      for (const {
        item
      } of searchedItems) {
        blocklyDropdownMenu.appendChild(item.element);
      }
    }

    for (const {
      item,
      score
    } of searchedItems) {
      item.element.hidden = score < 0;
    }
  }

  function handleKeyDownEvent(event) {
    if (event.key === "Enter") {
      // Reimplement enter to select item to account for hidden items and default to the top item.
      event.stopPropagation();
      event.preventDefault();
      const selectedItem = document.querySelector(".goog-menuitem-highlight");

      if (selectedItem && !selectedItem.hidden) {
        selectItem(selectedItem, true);
        return;
      }

      const selectedBlock = Blockly.selected;

      if (searchBar.value === "" && selectedBlock) {
        if (selectedBlock.type === "event_broadcast" || selectedBlock.type === "event_broadcastandwait" || selectedBlock.type === "event_whenbroadcastreceived") {
          // The top item of these dropdowns is always "New message"
          // When pressing enter on an empty search bar, we close the dropdown instead of making a new broadcast.
          Blockly.DropDownDiv.hide();
          return;
        }
      }

      for (const {
        item
      } of searchedItems) {
        if (!item.element.hidden) {
          selectItem(item.element, true);
          break;
        }
      } // If there is no top value, do nothing and leave the dropdown open

    } else if (event.key === "Escape") {
      Blockly.DropDownDiv.hide();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      // Reimplement keyboard navigation to account for hidden items.
      event.preventDefault();
      event.stopPropagation();
      const items = searchedItems.filter(i => i.score >= 0).map(i => i.item);

      if (items.length === 0) {
        return;
      }

      let selectedIndex = -1;

      for (let i = 0; i < items.length; i++) {
        if (items[i].element.classList.contains("goog-menuitem-highlight")) {
          selectedIndex = i;
          break;
        }
      }

      const lastIndex = items.length - 1;
      let newIndex = 0;

      if (event.key === "ArrowDown") {
        if (selectedIndex === -1 || selectedIndex === lastIndex) {
          newIndex = 0;
        } else {
          newIndex = selectedIndex + 1;
        }
      } else {
        if (selectedIndex === -1 || selectedIndex === 0) {
          newIndex = lastIndex;
        } else {
          newIndex = selectedIndex - 1;
        }
      }

      selectItem(items[newIndex].element, false);
    }
  }

  function getMenuItemMessage(message) {
    var _searchBar;

    // Format used internally by Scratch:
    // [human readable name, internal name]
    return [msg(message, {
      name: ((_searchBar = searchBar) === null || _searchBar === void 0 ? void 0 : _searchBar.value.trim()) || ""
    }), message];
  }
});

/***/ }),

/***/ "./src/addons/addons/find-bar/_runtime_entry.js":
/*!******************************************************!*\
  !*** ./src/addons/addons/find-bar/_runtime_entry.js ***!
  \******************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/find-bar/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/find-bar/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/find-bar/blockly/BlockItem.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/find-bar/blockly/BlockItem.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlockItem; });
class BlockItem {
  constructor(cls, procCode, labelID, y) {
    this.cls = cls;
    this.procCode = procCode;
    this.labelID = labelID;
    this.y = y;
    this.lower = procCode.toLowerCase();
    /**
     * An Array of block ids
     * @type {Array.<string>}
     */

    this.clones = null;
    this.eventName = null;
  }
  /**
   * True if the blockID matches a black represented by this BlockItem
   * @param id
   * @returns {boolean}
   */


  matchesID(id) {
    if (this.labelID === id) {
      return true;
    }

    if (this.clones) {
      for (const cloneID of this.clones) {
        if (cloneID === id) {
          return true;
        }
      }
    }

    return false;
  }

}

/***/ }),

/***/ "./src/addons/addons/find-bar/userscript.js":
/*!**************************************************!*\
  !*** ./src/addons/addons/find-bar/userscript.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blockly_BlockItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockly/BlockItem.js */ "./src/addons/addons/find-bar/blockly/BlockItem.js");
/* harmony import */ var _blockly_BlockInstance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockly/BlockInstance.js */ "./src/addons/addons/find-bar/blockly/BlockInstance.js");
/* harmony import */ var _blockly_Utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockly/Utils.js */ "./src/addons/addons/find-bar/blockly/Utils.js");



/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  msg,
  console
}) {
  const Blockly = await addon.tab.traps.getBlockly();

  class FindBar {
    constructor() {
      this.utils = new _blockly_Utils_js__WEBPACK_IMPORTED_MODULE_2__["default"](addon);
      this.prevValue = "";
      this.findBarOuter = null;
      this.findWrapper = null;
      this.findInput = null;
      this.dropdownOut = null;
      this.dropdown = new Dropdown(this.utils);
      document.addEventListener("keydown", e => this.eventKeyDown(e), true);
    }

    get workspace() {
      return Blockly.getMainWorkspace();
    }

    createDom(root) {
      this.findBarOuter = document.createElement("div");
      this.findBarOuter.className = "sa-find-bar";
      addon.tab.displayNoneWhileDisabled(this.findBarOuter, {
        display: "flex"
      });
      root.appendChild(this.findBarOuter);
      this.findWrapper = this.findBarOuter.appendChild(document.createElement("span"));
      this.findWrapper.className = "sa-find-wrapper";
      this.dropdownOut = this.findWrapper.appendChild(document.createElement("label"));
      this.dropdownOut.className = "sa-find-dropdown-out";
      this.findInput = this.dropdownOut.appendChild(document.createElement("input"));
      this.findInput.className = addon.tab.scratchClass("input_input-form", {
        others: "sa-find-input"
      }); // for <label>

      this.findInput.id = "sa-find-input";
      this.findInput.type = "search";
      this.findInput.placeholder = msg("find-placeholder");
      this.findInput.autocomplete = "off";
      this.dropdownOut.appendChild(this.dropdown.createDom());
      this.bindEvents();
      this.tabChanged();
    }

    bindEvents() {
      this.findInput.addEventListener("focus", () => this.inputChange());
      this.findInput.addEventListener("keydown", e => this.inputKeyDown(e));
      this.findInput.addEventListener("keyup", () => this.inputChange());
      this.findInput.addEventListener("focusout", () => this.hideDropDown());
    }

    tabChanged() {
      if (!this.findBarOuter) {
        return;
      }

      const tab = addon.tab.redux.state.scratchGui.editorTab.activeTabIndex;
      const visible = tab === 0 || tab === 1 || tab === 2;
      this.findBarOuter.hidden = !visible;
    }

    inputChange() {
      this.showDropDown(); // Filter the list...

      let val = (this.findInput.value || "").toLowerCase();

      if (val === this.prevValue) {
        // No change so don't re-filter
        return;
      }

      this.prevValue = val;
      this.dropdown.blocks = null; // Hide items in list that do not contain filter text

      let listLI = this.dropdown.items;

      for (const li of listLI) {
        let procCode = li.data.procCode;
        let i = li.data.lower.indexOf(val);

        if (i >= 0) {
          li.style.display = "block";

          while (li.firstChild) {
            li.removeChild(li.firstChild);
          }

          if (i > 0) {
            li.appendChild(document.createTextNode(procCode.substring(0, i)));
          }

          let bText = document.createElement("b");
          bText.appendChild(document.createTextNode(procCode.substr(i, val.length)));
          li.appendChild(bText);

          if (i + val.length < procCode.length) {
            li.appendChild(document.createTextNode(procCode.substr(i + val.length)));
          }
        } else {
          li.style.display = "none";
        }
      }
    }

    inputKeyDown(e) {
      this.dropdown.inputKeyDown(e); // Enter

      if (e.keyCode === 13) {
        this.findInput.blur();
        return;
      } // Escape


      if (e.keyCode === 27) {
        if (this.findInput.value.length > 0) {
          this.findInput.value = ""; // Clear search first, then close on second press

          this.inputChange();
        } else {
          this.findInput.blur();
        }

        e.preventDefault();
        return;
      }
    }

    eventKeyDown(e) {
      if (addon.self.disabled || !this.findBarOuter) return;
      let ctrlKey = e.ctrlKey || e.metaKey;

      if (e.key === "f" && ctrlKey && !e.shiftKey) {
        // Ctrl + F (Override default Ctrl+F find)
        this.findInput.focus();
        this.findInput.select();
        e.cancelBubble = true;
        e.preventDefault();
        return true;
      }

      if (e.keyCode === 37 && ctrlKey) {
        // Ctrl + Left Arrow Key
        if (document.activeElement.tagName === "INPUT") {
          return;
        }

        if (this.selectedTab === 0) {
          this.utils.navigationHistory.goBack();
          e.cancelBubble = true;
          e.preventDefault();
          return true;
        }
      }

      if (e.keyCode === 39 && ctrlKey) {
        // Ctrl + Right Arrow Key
        if (document.activeElement.tagName === "INPUT") {
          return;
        }

        if (this.selectedTab === 0) {
          this.utils.navigationHistory.goForward();
          e.cancelBubble = true;
          e.preventDefault();
          return true;
        }
      }
    }

    showDropDown(focusID, instanceBlock) {
      if (!focusID && this.dropdownOut.classList.contains("visible")) {
        return;
      } // special '' vs null... - null forces a reevaluation


      this.prevValue = focusID ? "" : null; // Clear the previous value of the input search

      this.dropdownOut.classList.add("visible");
      let scratchBlocks = this.selectedTab === 0 ? this.getScratchBlocks() : this.selectedTab === 1 ? this.getScratchCostumes() : this.selectedTab === 2 ? this.getScratchSounds() : [];
      this.dropdown.empty();

      for (const proc of scratchBlocks) {
        let item = this.dropdown.addItem(proc);

        if (focusID) {
          if (proc.matchesID(focusID)) {
            this.dropdown.onItemClick(item, instanceBlock);
          } else {
            item.style.display = "none";
          }
        }
      }

      this.utils.offsetX = this.dropdownOut.getBoundingClientRect().width + 32;
      this.utils.offsetY = 32;
    }

    hideDropDown() {
      this.dropdownOut.classList.remove("visible");
    }

    get selectedTab() {
      return addon.tab.redux.state.scratchGui.editorTab.activeTabIndex;
    }

    getScratchBlocks() {
      let myBlocks = [];
      let myBlocksByProcCode = {};
      let topBlocks = this.workspace.getTopBlocks();
      /**
       * @param cls
       * @param txt
       * @param root
       * @returns BlockItem
       */

      function addBlock(cls, txt, root) {
        let id = root.id ? root.id : root.getId ? root.getId() : null;
        let clone = myBlocksByProcCode[txt];

        if (clone) {
          if (!clone.clones) {
            clone.clones = [];
          }

          clone.clones.push(id);
          return clone;
        }

        let items = new _blockly_BlockItem_js__WEBPACK_IMPORTED_MODULE_0__["default"](cls, txt, id, 0);
        items.y = root.getRelativeToSurfaceXY ? root.getRelativeToSurfaceXY().y : null;
        myBlocks.push(items);
        myBlocksByProcCode[txt] = items;
        return items;
      }

      function getDescFromField(root) {
        let fields = root.inputList[0];
        let desc;

        for (const fieldRow of fields.fieldRow) {
          desc = (desc ? desc + " " : "") + fieldRow.getText();
        }

        return desc;
      }

      for (const root of topBlocks) {
        if (root.type === "procedures_definition") {
          const label = root.getChildren()[0];
          const procCode = label.getProcCode();

          if (!procCode) {
            continue;
          }

          const indexOfLabel = root.inputList.findIndex(i => i.fieldRow.length > 0);

          if (indexOfLabel === -1) {
            continue;
          }

          const translatedDefine = root.inputList[indexOfLabel].fieldRow[0].getText();
          const message = indexOfLabel === 0 ? "".concat(translatedDefine, " ").concat(procCode) : "".concat(procCode, " ").concat(translatedDefine);
          addBlock("define", message, root);
          continue;
        }

        if (root.type === "event_whenflagclicked") {
          addBlock("flag", getDescFromField(root), root); // "When Flag Clicked"

          continue;
        }

        if (root.type === "event_whenbroadcastreceived") {
          const fieldRow = root.inputList[0].fieldRow;
          let eventName = fieldRow.find(input => input.name === "BROADCAST_OPTION").getText();
          addBlock("receive", "event " + eventName, root).eventName = eventName;
          continue;
        }

        if (root.type.substr(0, 10) === "event_when") {
          addBlock("event", getDescFromField(root), root); // "When Flag Clicked"

          continue;
        }

        if (root.type === "control_start_as_clone") {
          addBlock("event", getDescFromField(root), root); // "when I start as a clone"

          continue;
        }
      }

      let map = this.workspace.getVariableMap();
      let vars = map.getVariablesOfType("");

      for (const row of vars) {
        addBlock(row.isLocal ? "var" : "VAR", (row.isLocal ? "var " : "VAR ") + row.name, row);
      }

      let lists = map.getVariablesOfType("list");

      for (const row of lists) {
        addBlock(row.isLocal ? "list" : "LIST", (row.isLocal ? "list " : "LIST ") + row.name, row);
      }

      const events = this.getCallsToEvents();

      for (const event of events) {
        addBlock("receive", "event " + event.eventName, event.block).eventName = event.eventName;
      }

      const clsOrder = {
        flag: 0,
        receive: 1,
        event: 2,
        define: 3,
        var: 4,
        VAR: 5,
        list: 6,
        LIST: 7
      };
      myBlocks.sort((a, b) => {
        let t = clsOrder[a.cls] - clsOrder[b.cls];

        if (t !== 0) {
          return t;
        }

        if (a.lower < b.lower) {
          return -1;
        }

        if (a.lower > b.lower) {
          return 1;
        }

        return a.y - b.y;
      });
      return myBlocks;
    }

    getScratchCostumes() {
      let costumes = this.utils.getEditingTarget().getCostumes();
      let items = [];
      let i = 0;

      for (const costume of costumes) {
        let item = new _blockly_BlockItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]("costume", costume.name, costume.assetId, i);
        items.push(item);
        i++;
      }

      return items;
    }

    getScratchSounds() {
      let sounds = this.utils.getEditingTarget().getSounds();
      let items = [];
      let i = 0;

      for (const sound of sounds) {
        let item = new _blockly_BlockItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]("sound", sound.name, sound.assetId, i);
        items.push(item);
        i++;
      }

      return items;
    }

    getCallsToEvents() {
      const uses = [];
      const alreadyFound = new Set();

      for (const block of this.workspace.getAllBlocks()) {
        if (block.type !== "event_broadcast" && block.type !== "event_broadcastandwait") {
          continue;
        }

        const broadcastInput = block.getChildren()[0];

        if (!broadcastInput) {
          continue;
        }

        let eventName = "";

        if (broadcastInput.type === "event_broadcast_menu") {
          eventName = broadcastInput.inputList[0].fieldRow[0].getText();
        } else {
          eventName = msg("complex-broadcast");
        }

        if (!alreadyFound.has(eventName)) {
          alreadyFound.add(eventName);
          uses.push({
            eventName: eventName,
            block: block
          });
        }
      }

      return uses;
    }

  }

  class Dropdown {
    constructor(utils) {
      this.utils = utils;
      this.el = null;
      this.items = [];
      this.selected = null;
      this.carousel = new Carousel(this.utils);
    }

    get workspace() {
      return Blockly.getMainWorkspace();
    }

    createDom() {
      this.el = document.createElement("ul");
      this.el.className = "sa-find-dropdown";
      return this.el;
    }

    inputKeyDown(e) {
      // Up Arrow
      if (e.keyCode === 38) {
        this.navigateFilter(-1);
        e.preventDefault();
        return;
      } // Down Arrow


      if (e.keyCode === 40) {
        this.navigateFilter(1);
        e.preventDefault();
        return;
      } // Enter


      if (e.keyCode === 13) {
        // Any selected on enter? if not select now
        if (this.selected) {
          this.navigateFilter(1);
        }

        e.preventDefault();
        return;
      }

      this.carousel.inputKeyDown(e);
    }

    navigateFilter(dir) {
      let nxt;

      if (this.selected && this.selected.style.display !== "none") {
        nxt = dir === -1 ? this.selected.previousSibling : this.selected.nextSibling;
      } else {
        nxt = this.items[0];
        dir = 1;
      }

      while (nxt && nxt.style.display === "none") {
        nxt = dir === -1 ? nxt.previousSibling : nxt.nextSibling;
      }

      if (nxt) {
        nxt.scrollIntoView({
          block: "nearest"
        });
        this.onItemClick(nxt);
      }
    }

    addItem(proc) {
      const item = document.createElement("li");
      item.innerText = proc.procCode;
      item.data = proc;
      const colorIds = {
        receive: "events",
        event: "events",
        define: "more",
        var: "data",
        VAR: "data",
        list: "data-lists",
        LIST: "data-lists",
        costume: "looks",
        sound: "sounds"
      };

      if (proc.cls === "flag") {
        item.className = "sa-find-flag";
      } else {
        const colorId = colorIds[proc.cls];
        item.className = "sa-block-color sa-block-color-".concat(colorId);
      }

      item.addEventListener("mousedown", e => {
        this.onItemClick(item);
        e.preventDefault();
        e.cancelBubble = true;
        return false;
      });
      this.items.push(item);
      this.el.appendChild(item);
      return item;
    }

    onItemClick(item, instanceBlock) {
      if (this.selected && this.selected !== item) {
        this.selected.classList.remove("sel");
        this.selected = null;
      }

      if (this.selected !== item) {
        item.classList.add("sel");
        this.selected = item;
      }

      let cls = item.data.cls;

      if (cls === "costume" || cls === "sound") {
        // Viewing costumes/sounds - jump to selected costume/sound
        const assetPanel = document.querySelector("[class^=asset-panel_wrapper]");

        if (assetPanel) {
          const reactInstance = assetPanel[addon.tab.traps.getInternalKey(assetPanel)];
          const reactProps = reactInstance.child.stateNode.props;
          reactProps.onItemClick(item.data.y);
          const selectorList = assetPanel.firstChild.firstChild;
          selectorList.children[item.data.y].scrollIntoView({
            behavior: "auto",
            block: "center",
            inline: "start"
          }); // The wrapper seems to scroll when we use the function above.

          let wrapper = assetPanel.closest("div[class*=gui_flex-wrapper]");
          wrapper.scrollTop = 0;
        }
      } else if (cls === "var" || cls === "VAR" || cls === "list" || cls === "LIST") {
        // Search now for all instances
        let blocks = this.getVariableUsesById(item.data.labelID);
        this.carousel.build(item, blocks, instanceBlock);
      } else if (cls === "define") {
        let blocks = this.getCallsToProcedureById(item.data.labelID);
        this.carousel.build(item, blocks, instanceBlock);
      } else if (cls === "receive") {
        /*
          let blocks = [this.workspace.getBlockById(li.data.labelID)];
          if (li.data.clones) {
              for (const cloneID of li.data.clones) {
                  blocks.push(this.workspace.getBlockById(cloneID))
              }
          }
          blocks = blocks.concat(getCallsToEventsByName(li.data.eventName));
        */
        // Now, fetch the events from the scratch runtime instead of blockly
        let blocks = this.getCallsToEventsByName(item.data.eventName);

        if (!instanceBlock) {
          // Can we start by selecting the first block on 'this' sprite
          const currentTargetID = this.utils.getEditingTarget().id;

          for (const block of blocks) {
            if (block.targetId === currentTargetID) {
              instanceBlock = block;
              break;
            }
          }
        }

        this.carousel.build(item, blocks, instanceBlock);
      } else if (item.data.clones) {
        let blocks = [this.workspace.getBlockById(item.data.labelID)];

        for (const cloneID of item.data.clones) {
          blocks.push(this.workspace.getBlockById(cloneID));
        }

        this.carousel.build(item, blocks, instanceBlock);
      } else {
        this.utils.scrollBlockIntoView(item.data.labelID);
        this.carousel.remove();
      }
    }

    getVariableUsesById(id) {
      let uses = [];
      let topBlocks = this.workspace.getTopBlocks();

      for (const topBlock of topBlocks) {
        /** @type {!Array<!Blockly.Block>} */
        let kids = topBlock.getDescendants();

        for (const block of kids) {
          /** @type {!Array<!Blockly.VariableModel>} */
          let blockVariables = block.getVarModels();

          if (blockVariables) {
            for (const blockVar of blockVariables) {
              if (blockVar.getId() === id) {
                uses.push(block);
              }
            }
          }
        }
      }

      return uses;
    }

    getCallsToProcedureById(id) {
      let procBlock = this.workspace.getBlockById(id);
      let label = procBlock.getChildren()[0];
      let procCode = label.getProcCode();
      let uses = [procBlock]; // Definition First, then calls to it

      let topBlocks = this.workspace.getTopBlocks();

      for (const topBlock of topBlocks) {
        /** @type {!Array<!Blockly.Block>} */
        let kids = topBlock.getDescendants();

        for (const block of kids) {
          if (block.type === "procedures_call") {
            if (block.getProcCode() === procCode) {
              uses.push(block);
            }
          }
        }
      }

      return uses;
    }

    getCallsToEventsByName(name) {
      let uses = []; // Definition First, then calls to it

      const runtime = addon.tab.traps.vm.runtime;
      const targets = runtime.targets; // The sprites / stage

      for (const target of targets) {
        if (!target.isOriginal) {
          continue; // Skip clones
        }

        const blocks = target.blocks;

        if (!blocks._blocks) {
          continue;
        }

        for (const id of Object.keys(blocks._blocks)) {
          const block = blocks._blocks[id];

          if (block.opcode === "event_whenbroadcastreceived" && block.fields.BROADCAST_OPTION.value === name) {
            uses.push(new _blockly_BlockInstance_js__WEBPACK_IMPORTED_MODULE_1__["default"](target, block));
          } else if (block.opcode === "event_broadcast" || block.opcode === "event_broadcastandwait") {
            const broadcastInputBlockId = block.inputs.BROADCAST_INPUT.block;
            const broadcastInputBlock = blocks._blocks[broadcastInputBlockId];

            if (broadcastInputBlock) {
              let eventName;

              if (broadcastInputBlock.opcode === "event_broadcast_menu") {
                eventName = broadcastInputBlock.fields.BROADCAST_OPTION.value;
              } else {
                eventName = msg("complex-broadcast");
              }

              if (eventName === name) {
                uses.push(new _blockly_BlockInstance_js__WEBPACK_IMPORTED_MODULE_1__["default"](target, block));
              }
            }
          }
        }
      }

      return uses;
    }

    empty() {
      for (const item of this.items) {
        if (this.el.contains(item)) {
          this.el.removeChild(item);
        }
      }

      this.items = [];
      this.selected = null;
    }

  }

  class Carousel {
    constructor(utils) {
      this.utils = utils;
      this.el = null;
      this.count = null;
      this.blocks = [];
      this.idx = 0;
    }

    build(item, blocks, instanceBlock) {
      if (this.el && this.el.parentNode === item) {
        // Same control... click again to go to next
        this.navRight();
      } else {
        this.remove();
        this.blocks = blocks;
        item.appendChild(this.createDom());
        this.idx = 0;

        if (instanceBlock) {
          for (const idx of Object.keys(this.blocks)) {
            const block = this.blocks[idx];

            if (block.id === instanceBlock.id) {
              this.idx = Number(idx);
              break;
            }
          }
        }

        if (this.idx < this.blocks.length) {
          this.utils.scrollBlockIntoView(this.blocks[this.idx]);
        }
      }
    }

    createDom() {
      this.el = document.createElement("span");
      this.el.className = "sa-find-carousel";
      const leftControl = this.el.appendChild(document.createElement("span"));
      leftControl.className = "sa-find-carousel-control";
      leftControl.textContent = "◀";
      leftControl.addEventListener("mousedown", e => this.navLeft(e));
      this.count = this.el.appendChild(document.createElement("span"));
      this.count.innerText = this.blocks.length > 0 ? this.idx + 1 + " / " + this.blocks.length : "0";
      const rightControl = this.el.appendChild(document.createElement("span"));
      rightControl.className = "sa-find-carousel-control";
      rightControl.textContent = "▶";
      rightControl.addEventListener("mousedown", e => this.navRight(e));
      return this.el;
    }

    inputKeyDown(e) {
      // Left Arrow
      if (e.keyCode === 37) {
        if (this.el && this.blocks) {
          this.navLeft(e);
        }
      } // Right Arrow


      if (e.keyCode === 39) {
        if (this.el && this.blocks) {
          this.navRight(e);
        }
      }
    }

    navLeft(e) {
      return this.navSideways(e, -1);
    }

    navRight(e) {
      return this.navSideways(e, 1);
    }

    navSideways(e, dir) {
      if (this.blocks.length > 0) {
        this.idx = (this.idx + dir + this.blocks.length) % this.blocks.length; // + length to fix negative modulo js issue.

        this.count.innerText = this.idx + 1 + " / " + this.blocks.length;
        this.utils.scrollBlockIntoView(this.blocks[this.idx]);
      }

      if (e) {
        e.cancelBubble = true;
        e.preventDefault();
      }
    }

    remove() {
      if (this.el) {
        this.el.remove();
        this.blocks = [];
        this.idx = 0;
      }
    }

  }

  const findBar = new FindBar();
  const _doBlockClick_ = Blockly.Gesture.prototype.doBlockClick_;

  Blockly.Gesture.prototype.doBlockClick_ = function () {
    if (!addon.self.disabled && (this.mostRecentEvent_.button === 1 || this.mostRecentEvent_.shiftKey)) {
      // Wheel button...
      // Intercept clicks to allow jump to...?
      let block = this.startBlock_;

      for (; block; block = block.getSurroundParent()) {
        if (block.type === "procedures_definition" || !this.jumpToDef && block.type === "procedures_call") {
          let id = block.id ? block.id : block.getId ? block.getId() : null;
          findBar.findInput.focus();
          findBar.showDropDown(id);
          return;
        }

        if (block.type === "data_variable" || block.type === "data_changevariableby" || block.type === "data_setvariableto") {
          let id = block.getVars()[0];
          findBar.findInput.focus();
          findBar.showDropDown(id, block);
          findBar.selVarID = id;
          return;
        }

        if (block.type === "event_whenbroadcastreceived" || block.type === "event_broadcastandwait" || block.type === "event_broadcast") {
          // todo: actually index the broadcasts...!
          let id = block.id;
          findBar.findInput.focus();
          findBar.showDropDown(id, block);
          findBar.selVarID = id;
          return;
        }
      }
    }

    _doBlockClick_.call(this);
  };

  addon.tab.redux.initialize();
  addon.tab.redux.addEventListener("statechanged", e => {
    if (e.detail.action.type === "scratch-gui/navigation/ACTIVATE_TAB") {
      findBar.tabChanged();
    }
  });

  while (true) {
    const root = await addon.tab.waitForElement("ul[class*=gui_tab-list_]", {
      markAsSeen: true,
      reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
      reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
    });
    findBar.createDom(root);
  }
});

/***/ }),

/***/ "./src/addons/addons/folders/_runtime_entry.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/folders/_runtime_entry.js ***!
  \*****************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/folders/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/folders/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_folder_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./folder.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/folders/folder.svg");
/* generated by pull.js */



const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "folder.svg": _url_loader_folder_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/addons/addons/folders/userscript.js":
/*!*************************************************!*\
  !*** ./src/addons/addons/folders/userscript.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  console,
  msg
}) {
  // The basic premise of how this addon works is relative simple.
  // scratch-gui renders the sprite selectors and asset selectors in a hierarchy like this:
  // <SelectorHOC>
  //   <SpriteSelectorItem />
  //   <SpriteSelectorItem />
  //   <SpriteSelectorItem />
  //   <SpriteSelectorItem />
  //   ...
  // </SelectorHOC>
  // It's obviously more complicated than that, but there are two important parts:
  // SelectorHOC - We override this to change which items are displayed
  // SpriteSelectorItem - We override this to change how items are displayed.
  //    Folders are just items rendered differently
  // These two components communicate through the `name` property of the items.
  // We touch some things on the VM to make dragging items work properly.
  const REACT_INTERNAL_PREFIX = "__reactInternalInstance$";
  const TYPE_SPRITES = 1;
  const TYPE_ASSETS = 2; // We run too early, will be set later

  let vm;
  let reactInternalKey;
  let currentSpriteFolder;
  let currentAssetFolder;
  let currentSpriteItems;
  let currentAssetItems;
  const DIVIDER = "//";
  /**
   * getFolderFromName("B") === null
   * getFolderFromName("A//b") === "A"
   */

  const getFolderFromName = name => {
    const idx = name.indexOf(DIVIDER);

    if (idx === -1 || idx === 0) {
      return null;
    }

    return name.substr(0, idx);
  };
  /**
   * getNameWithoutFolder("B") === "B"
   * getNameWithoutFolder("A//b") === "b"
   */


  const getNameWithoutFolder = name => {
    const idx = name.indexOf(DIVIDER);

    if (idx === -1 || idx === 0) {
      return name;
    }

    return name.substr(idx + DIVIDER.length);
  };
  /**
   * setFolderOfName("B", "y") === "y//B"
   * setFolderOfName("c//B", "y") === "y//B"
   * setFolderOfName("B", null) === "B"
   * setFolderOfName("c//B", null) === "B"
   */


  const setFolderOfName = (name, folder) => {
    const basename = getNameWithoutFolder(name);

    if (folder) {
      return "".concat(folder).concat(DIVIDER).concat(basename);
    }

    return basename;
  };

  const isValidFolderName = name => {
    return !name.includes(DIVIDER) && !name.endsWith("/");
  };

  const RESERVED_NAMES = ["_mouse_", "_stage_", "_edge_", "_myself_", "_random_"];

  const ensureNotReserved = name => {
    if (name === "") return "2";
    if (RESERVED_NAMES.includes(name)) return "".concat(name, "2");
    return name;
  };

  const getSortableHOCFromElement = el => {
    const nearestSpriteSelector = el.closest("[class*='sprite-selector_sprite-selector']");

    if (nearestSpriteSelector) {
      return nearestSpriteSelector[reactInternalKey].child.sibling.child.stateNode;
    }

    const nearestAssetPanelWrapper = el.closest('[class*="asset-panel_wrapper"]');

    if (nearestAssetPanelWrapper) {
      return nearestAssetPanelWrapper[reactInternalKey].child.child.stateNode;
    }

    throw new Error("cannot find SortableHOC");
  };

  const getBackpackFromElement = el => {
    const gui = el.closest('[class*="gui_editor-wrapper"]');
    if (!gui) throw new Error("cannot find Backpack");
    return gui[reactInternalKey].child.sibling.child.child.stateNode;
  };

  const clamp = (n, min, max) => {
    return Math.min(Math.max(n, min), max);
  };
  /**
   * @typedef {Object} ItemData
   * @property {string} realName
   * @property {number} realIndex
   * @property {string} inFolder
   * @property {string} folder
   * @property {boolean} folderOpen
   */

  /**
   * @returns {ItemData|null}
   */


  const getItemData = item => {
    if (item && item.name && typeof item.name === "object") {
      return item.name;
    }

    return null;
  };

  const openFolderAsset = {
    assetId: "&__sa_folders_folder",

    encodeDataURI() {
      // Doesn't actually need to be a data: URI
      return addon.self.getResource("/folder.svg")
      /* rewritten by pull.js */
      ;
    }

  }; // https://github.com/LLK/scratch-gui/blob/develop/src/components/asset-panel/icon--sound.svg

  const imageIconSource = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"100px\" height=\"100px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g id=\"Sound\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M12.4785058,12.6666667 C12.3144947,12.6666667 12.1458852,12.6272044 11.9926038,12.5440517 C11.537358,12.2960031 11.3856094,11.7562156 11.6553847,11.3376335 C12.1688774,10.5371131 12.1688774,9.54491867 11.6553847,8.74580756 C11.3856094,8.32581618 11.537358,7.78602861 11.9926038,7.53798001 C12.452448,7.29275014 13.0379829,7.43086811 13.3046926,7.84804076 C14.1737981,9.20103311 14.1737981,10.8809986 13.3046926,12.233991 C13.1268862,12.5130457 12.806528,12.6666667 12.4785058,12.6666667 Z M15.3806784,13.8333333 C15.2408902,13.8333333 15.0958763,13.796281 14.9665396,13.7182064 C14.5785295,13.485306 14.4491928,12.9784829 14.6791247,12.5854634 C15.5949331,11.0160321 15.5949331,9.065491 14.6791247,7.49738299 C14.4491928,7.10436352 14.5785295,6.59621712 14.9665396,6.36331669 C15.3558562,6.13438616 15.8549129,6.26274605 16.0848448,6.65444223 C17.3050517,8.74260632 17.3050517,11.3389168 16.0848448,13.4270809 C15.9319924,13.6890939 15.6602547,13.8333333 15.3806784,13.8333333 Z M10.3043478,5.62501557 L10.3043478,13.873675 C10.3043478,14.850934 9.10969849,15.3625101 8.36478311,14.7038052 L6.7566013,13.2797607 C6.18712394,12.7762834 5.44499329,12.4968737 4.67362297,12.4968737 L4.3923652,12.4968737 C3.62377961,12.4968737 3,11.8935108 3,11.1470686 L3,8.36646989 C3,7.62137743 3.62377961,7.01666471 4.3923652,7.01666471 L4.65830695,7.01666471 C5.42967727,7.01666471 6.17180792,6.73725504 6.74128529,6.23377771 L8.36478311,4.79623519 C9.10969849,4.13753026 10.3043478,4.64910643 10.3043478,5.62501557 Z\" id=\"Combined-Shape\" fill=\"#575E75\"></path>\n    </g>\n</svg>";
  const soundIconHref = "data:image/svg+xml;base64,".concat(btoa(imageIconSource));
  let folderColorStylesheet = null;
  const folderColors = Object.create(null);

  const getFolderColorClass = folderName => {
    const mulberry32 = a => {
      // https://stackoverflow.com/a/47593316
      return function () {
        var t = a += 0x6d2b79f5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
      };
    };

    const hashCode = str => {
      // Based on Java's String.hashCode
      // https://hg.openjdk.java.net/jdk8/jdk8/jdk/file/687fd7c7986d/src/share/classes/java/lang/String.java#l1452
      let hash = 0;

      for (let i = 0; i < str.length; i++) {
        hash = 31 * hash + str.charCodeAt(i);
        hash = hash | 0;
      }

      return hash;
    };

    const random = str => {
      const seed = hashCode(str);
      const rng = mulberry32(seed); // Run RNG a few times to get more random numbers, otherwise similar seeds tend to give somewhat similar results

      rng();
      rng();
      rng();
      rng();
      return rng();
    };

    if (!folderColors[folderName]) {
      if (!folderColorStylesheet) {
        folderColorStylesheet = document.createElement("style");
        document.head.appendChild(folderColorStylesheet);
      }

      const hue = random(folderName) * 360;
      const color = "hsla(".concat(hue, "deg, 100%, 85%, 0.5)");
      const id = Object.keys(folderColors).length;
      const className = "sa-folders-color-".concat(id);
      folderColors[folderName] = className;
      folderColorStylesheet.textContent += ".".concat(className, "{background-color:").concat(color, " !important;}");
      folderColorStylesheet.textContent += ".".concat(className, "[class*=\"sprite-selector_raised\"]:not([class*=\"sa-folders-folder\"]){background-color:hsla(").concat(hue, "deg, 100%, 77%, 1) !important;}");
    }

    return folderColors[folderName];
  };

  const fixOrderOfItemsInFolders = items => {
    const folders = Object.create(null);
    const result = [];

    for (const item of items) {
      const name = item.getName ? item.getName() : item.name;
      const folder = getFolderFromName(name);

      if (typeof folder === "string") {
        if (!folders[folder]) {
          folders[folder] = [];
          result.push(folders[folder]);
        }

        folders[folder].push(item);
      } else {
        result.push(item);
      }
    }

    const flatResult = result.flat();

    for (let i = 0; i < items.length; i++) {
      if (result[i] !== items[i]) {
        return {
          items: flatResult,
          changed: true
        };
      }
    }

    return {
      items: flatResult,
      changed: false
    };
  };

  const fixTargetOrder = () => {
    const {
      items,
      changed
    } = fixOrderOfItemsInFolders(vm.runtime.targets);

    if (changed) {
      vm.runtime.targets = items;
      vm.emitTargetsUpdate();
    }
  };

  const fixCostumeOrder = (target = vm.editingTarget) => {
    const {
      items,
      changed
    } = fixOrderOfItemsInFolders(target.sprite.costumes);

    if (changed) {
      target.sprite.costumes = items;
      vm.emitTargetsUpdate();
    }
  };

  const fixSoundOrder = (target = vm.editingTarget) => {
    const {
      items,
      changed
    } = fixOrderOfItemsInFolders(target.sprite.sounds);

    if (changed) {
      target.sprite.sounds = items;
      vm.emitTargetsUpdate();
    }
  };

  const verifySortableHOC = sortableHOCInstance => {
    const SortableHOC = sortableHOCInstance.constructor;
    if (Array.isArray(sortableHOCInstance.props.items) && (typeof sortableHOCInstance.props.selectedId === "string" || typeof sortableHOCInstance.props.selectedItemIndex === "number") && typeof sortableHOCInstance.containerBox !== "undefined" && typeof SortableHOC.prototype.componentDidMount === "undefined" && typeof SortableHOC.prototype.componentDidUpdate === "undefined" && typeof SortableHOC.prototype.handleAddSortable === "function" && typeof SortableHOC.prototype.handleRemoveSortable === "function" && typeof SortableHOC.prototype.setRef === "function") return;
    throw new Error("Can not comprehend SortableHOC");
  };

  const verifySpriteSelectorItem = spriteSelectorItemInstance => {
    const SpriteSelectorItem = spriteSelectorItemInstance.constructor;
    if (typeof spriteSelectorItemInstance.props.asset === "object" && typeof spriteSelectorItemInstance.props.name === "string" && typeof spriteSelectorItemInstance.props.dragType === "string" && typeof SpriteSelectorItem.prototype.handleClick === "function" && typeof SpriteSelectorItem.prototype.setRef === "function" && typeof SpriteSelectorItem.prototype.handleDrag === "function" && typeof SpriteSelectorItem.prototype.handleDragEnd === "function" && typeof SpriteSelectorItem.prototype.handleDelete === "function" && typeof SpriteSelectorItem.prototype.handleDuplicate === "function" && typeof SpriteSelectorItem.prototype.handleExport === "function") return;
    throw new Error("Can not comprehend SpriteSelectorItem");
  };

  const verifyVM = vm => {
    const target = vm.runtime.targets[0];
    if (typeof vm.installTargets === "function" && typeof vm.reorderTarget === "function" && typeof target.reorderCostume === "function" && typeof target.reorderSound === "function" && typeof target.addCostume === "function" && typeof target.addSound === "function") return;
    throw new Error("Can not comprehend VM");
  };

  const verifyBackpack = backpackInstance => {
    const Backpack = backpackInstance.constructor;

    if (typeof Backpack.prototype.handleDrop === "function" && typeof Backpack.prototype.componentDidUpdate === "undefined") {
      return;
    }

    throw new Error("Can not comprehend Backpack");
  };

  class Cache {
    constructor() {
      this.cache = new Map();
      this.usedThisTick = new Set();
    }

    has(id) {
      return this.cache.has(id);
    }

    get(id) {
      this.usedThisTick.add(id);
      return this.cache.get(id);
    }

    set(id, value) {
      this.usedThisTick.add(id);
      this.cache.set(id, value);
    }

    startTick() {
      this.usedThisTick.clear();
    }

    endTick() {
      for (const id of Array.from(this.cache.keys())) {
        if (!this.usedThisTick.has(id)) {
          this.cache.delete(id);
        }
      }
    }

    clear() {
      this.usedThisTick.clear();
      this.cache.clear();
    }

  }

  const patchSortableHOC = (SortableHOC, type) => {
    // SortableHOC should be: https://github.com/LLK/scratch-gui/blob/29d9851778febe4e69fa5111bf7559160611e366/src/lib/sortable-hoc.jsx#L8
    const itemCache = new Cache();
    const folderItemCache = new Cache();
    const folderAssetCache = new Cache();
    const PREVIEW_SIZE = 80;
    const PREVIEW_POSITIONS = [// x, y
    [0, 0], [PREVIEW_SIZE / 2, 0], [0, PREVIEW_SIZE / 2], [PREVIEW_SIZE / 2, PREVIEW_SIZE / 2]];

    const createFolderPreview = items => {
      // Directly generate a string instead of using DOM API for performance as we deal with very large inlined images
      // Because the result is only used as an img src, XSS shouldn't be a concern
      let result = "data:image/svg+xml;,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"".concat(PREVIEW_SIZE, "\" height=\"").concat(PREVIEW_SIZE, "\">");

      for (let i = 0; i < Math.min(PREVIEW_POSITIONS.length, items.length); i++) {
        const item = items[i];
        const width = PREVIEW_SIZE / 2;
        const height = PREVIEW_SIZE / 2;
        const [x, y] = PREVIEW_POSITIONS[i];
        let src;

        if (item.asset) {
          // TW: We can be 100% certain that escaping here is unnecessary
          src = item.asset.encodeDataURI();
        } else if (item.costume && item.costume.asset) {
          src = item.costume.asset.encodeDataURI();
        } else if (item.url) {
          src = soundIconHref;
        }

        if (src) {
          result += "<image width=\"".concat(width, "\" height=\"").concat(height, "\" x=\"").concat(x, "\" y=\"").concat(y, "\" href=\"").concat(src, "\"/>");
        }
      }

      result += "</svg>";
      return result;
    };

    const getUniqueIdOfFolderItems = items => {
      let id = "sa_folder&&";

      for (let i = 0; i < Math.min(PREVIEW_POSITIONS.length, items.length); i++) {
        const item = items[i];

        if (item.asset) {
          id += item.asset.assetId;
        } else if (item.costume && item.costume.asset) {
          id += item.costume.asset.assetId;
        } else if (item.url) {
          id += item.url;
        }

        id += "&&";
      }

      return id;
    };

    const processItems = (openFolders, props) => {
      const processItem = item => {
        const itemId = item.name;
        let newItem;
        let itemData;

        if (itemCache.has(itemId)) {
          newItem = itemCache.get(itemId);
          itemData = newItem.name;
        } else {
          itemData = {
            toString() {
              return "_".concat(item.name);
            }

          };
          newItem = {};
          itemCache.set(itemId, newItem);
        }

        const itemFolderName = getFolderFromName(item.name);
        Object.assign(newItem, item);
        itemData.realName = item.name;
        itemData.realIndex = i;
        itemData.inFolder = itemFolderName;
        newItem.name = itemData;
        return {
          newItem,
          itemData
        };
      };

      itemCache.startTick();
      folderItemCache.startTick();
      folderAssetCache.startTick();
      const folderOccurrences = new Map();
      const items = [];
      const result = {
        items
      };
      let i = 0;

      while (i < props.items.length) {
        const item = props.items[i];
        const folderName = getFolderFromName(item.name);

        if (folderName === null) {
          items.push(processItem(item).newItem);

          if (type === TYPE_ASSETS) {
            const isSelected = props.selectedItemIndex === i;

            if (isSelected) {
              result.selectedItemIndex = items.length - 1;
            }
          }
        } else {
          const isOpen = openFolders.indexOf(folderName) !== -1;
          const folderItems = [];

          while (i < props.items.length) {
            const childItem = props.items[i];
            const processedItem = processItem(childItem);

            if (getFolderFromName(childItem.name) !== folderName) {
              break;
            }

            folderItems.push(processedItem.newItem);

            if (type === TYPE_ASSETS) {
              const isSelected = props.selectedItemIndex === i;

              if (isSelected) {
                if (isOpen) {
                  result.selectedItemIndex = items.length + folderItems.length;
                } else {
                  result.selectedItemIndex = -1;
                }
              }
            }

            i++;
          }

          i--;
          const occurrence = folderOccurrences.get(folderName) || 0;
          folderOccurrences.set(folderName, occurrence + 1);
          const baseUniqueId = getUniqueIdOfFolderItems(folderItems);
          const itemUniqueId = "".concat(isOpen, "&").concat(occurrence, "&").concat(folderName, "&").concat(baseUniqueId, "&");
          const reactKey = "&__".concat(occurrence, "_").concat(folderName);
          const assetUniqueId = baseUniqueId;
          let folderItem;
          let folderData;

          if (folderItemCache.has(itemUniqueId)) {
            folderItem = folderItemCache.get(itemUniqueId);
            folderData = folderItem.name;
          } else {
            folderItem = {
              // Can be used as a react key
              id: {
                toString() {
                  return reactKey;
                }

              }
            };
            folderData = {
              // Can be used as a react key
              toString() {
                return reactKey;
              }

            };
            folderItemCache.set(itemUniqueId, folderItem);
          }

          folderData.folder = folderName;
          folderData.folderOpen = isOpen;
          folderItem.items = folderItems;
          folderItem.name = folderData;
          let folderAsset;

          if (isOpen) {
            folderAsset = openFolderAsset;
          } else {
            if (folderAssetCache.has(assetUniqueId)) {
              folderAsset = folderAssetCache.get(assetUniqueId);
            } else {
              folderAsset = {
                assetId: assetUniqueId,

                encodeDataURI() {
                  return createFolderPreview(folderItems);
                }

              };
              folderAssetCache.set(assetUniqueId, folderAsset);
            }
          }

          if (type === TYPE_SPRITES) {
            if (!folderItem.costume) folderItem.costume = {};
            folderItem.costume.asset = folderAsset; // For sprite items, `id` is used as the drag payload and toString is used as a React key

            if (!folderItem.id) folderItem.id = {};
            folderItem.id.sa_folder_items = folderItems;

            folderItem.id.toString = () => reactKey;
          } else {
            folderItem.asset = folderAsset;
            if (!folderItem.dragPayload) folderItem.dragPayload = {};
            folderItem.dragPayload.sa_folder_items = folderItems;
          }

          items.push(folderItem);

          if (isOpen) {
            for (const item of folderItems) {
              items.push(item);
            }
          }
        }

        i++;
      }

      itemCache.endTick();
      folderItemCache.endTick();
      folderAssetCache.endTick();
      return result;
    };

    const getSelectedItem = sortable => {
      if (type === TYPE_SPRITES) {
        const selectedItem = sortable.props.items.find(i => i.id === sortable.props.selectedId);
        return selectedItem;
      } else if (type === TYPE_ASSETS) {
        const selectedItem = sortable.props.items[sortable.props.selectedItemIndex];
        return selectedItem;
      }

      return null;
    };

    SortableHOC.prototype.saInitialSetup = function () {
      itemCache.clear();
      folderItemCache.clear();
      folderAssetCache.clear();
      const folders = [];
      const selectedItem = getSelectedItem(this);

      if (selectedItem && !selectedItem.isStage) {
        const folder = getFolderFromName(selectedItem.name);
        folders.push(folder);

        if (type === TYPE_SPRITES) {
          currentSpriteFolder = folder;
        } else if (type === TYPE_ASSETS) {
          currentAssetFolder = folder;
        }
      }

      this.setState({
        folders
      });
    };

    SortableHOC.prototype.componentDidMount = function () {
      // Do part of componentDidUpdate on mount as well
      const selectedItem = getSelectedItem(this);

      if (selectedItem) {
        const folder = getFolderFromName(selectedItem.name);

        if (type === TYPE_SPRITES) {
          currentSpriteFolder = folder;
        } else if (type === TYPE_ASSETS) {
          currentAssetFolder = folder;
        }
      }

      this.saInitialSetup();
    };

    SortableHOC.prototype.componentDidUpdate = function (prevProps, prevState) {
      const selectedItem = getSelectedItem(this);

      if (selectedItem) {
        const folder = getFolderFromName(selectedItem.name);
        const currentFolder = this.state.folders.includes(folder) ? folder : null;

        if (type === TYPE_SPRITES) {
          currentSpriteFolder = currentFolder;
        } else if (type === TYPE_ASSETS) {
          currentAssetFolder = currentFolder;
        }

        let selectedItemChanged;

        if (this.props.selectedId) {
          selectedItemChanged = this.props.selectedId !== prevProps.selectedId;
        } else {
          selectedItemChanged = this.props.items[this.props.selectedItemIndex] && prevProps.items[prevProps.selectedItemIndex] && this.props.items[this.props.selectedItemIndex].name !== prevProps.items[prevProps.selectedItemIndex].name;
        }

        if (selectedItemChanged) {
          if (!selectedItem.isStage) {
            if (typeof folder === "string" && !this.state.folders.includes(folder)) {
              this.setState(prevState => ({
                folders: [...prevState.folders, folder]
              }));
            }
          }
        }
      }
    };

    const originalSortableHOCRender = SortableHOC.prototype.render;

    SortableHOC.prototype.render = function () {
      const originalProps = this.props;
      this.props = _objectSpread(_objectSpread({}, this.props), processItems(this.state && this.state.folders || [], this.props));

      if (type === TYPE_SPRITES) {
        currentSpriteItems = this.props.items;
      } else if (type === TYPE_ASSETS) {
        currentAssetItems = this.props.items;
      }

      const result = originalSortableHOCRender.call(this);
      this.props = originalProps;
      return result;
    };
  };

  const getAllFolders = component => {
    const result = new Set();
    let items;

    if (component.props.dragType === "SPRITE") {
      items = currentSpriteItems;
    } else {
      items = currentAssetItems;
    }

    for (const item of items) {
      const data = getItemData(item);

      if (typeof data.folder === "string") {
        result.add(data.folder);
      }
    }

    return Array.from(result);
  };

  const isFolderOpen = (component, folder) => {
    const sortableHOCInstance = getSortableHOCFromElement(component.ref);
    const folders = sortableHOCInstance.state && sortableHOCInstance.state.folders || [];
    return folders.includes(folder);
  };

  const setFolderOpen = (component, folder, open) => {
    const sortableHOCInstance = getSortableHOCFromElement(component.ref);
    sortableHOCInstance.setState(prevState => {
      let folders = prevState && prevState.folders || [];
      folders = folders.filter(i => i !== folder);

      if (open) {
        return {
          folders: [...folders, folder]
        };
      }

      return {
        folders
      };
    });
  };

  addon.tab.createEditorContextMenu((ctxType, ctx) => {
    if (ctxType !== "sprite" && ctxType !== "costume" && ctxType !== "sound") return;
    const component = ctx.target[addon.tab.traps.getInternalKey(ctx.target)].return.return.return.stateNode;
    const data = getItemData(component.props);
    if (!data) return;

    if (typeof data.folder === "string") {
      ctx.target.setAttribute("sa-folders-context-type", "folder");

      const renameItems = newName => {
        const isOpen = isFolderOpen(component, data.folder);
        setFolderOpen(component, data.folder, false);

        if (isOpen && typeof newName === "string") {
          setFolderOpen(component, newName, true);
        }

        if (component.props.dragType === "SPRITE") {
          for (const target of vm.runtime.targets) {
            if (target.isOriginal) {
              if (getFolderFromName(target.getName()) === data.folder) {
                vm.renameSprite(target.id, ensureNotReserved(setFolderOfName(target.getName(), newName)));
              }
            }
          }

          vm.emitWorkspaceUpdate();
          fixTargetOrder();
        } else if (component.props.dragType === "COSTUME") {
          for (let i = 0; i < vm.editingTarget.sprite.costumes.length; i++) {
            const costume = vm.editingTarget.sprite.costumes[i];

            if (getFolderFromName(costume.name) === data.folder) {
              vm.renameCostume(i, setFolderOfName(costume.name, newName));
            }
          }

          fixCostumeOrder();
        } else if (component.props.dragType === "SOUND") {
          for (let i = 0; i < vm.editingTarget.sprite.sounds.length; i++) {
            const sound = vm.editingTarget.sprite.sounds[i];

            if (getFolderFromName(sound.name) === data.folder) {
              vm.renameSound(i, setFolderOfName(sound.name, newName));
            }
          }

          fixSoundOrder();
        }
      };

      const renameFolder = async () => {
        let newName = await addon.tab.prompt(msg("rename-folder-prompt-title"), msg("rename-folder-prompt"), data.folder, {
          useEditorClasses: true
        }); // Prompt cancelled, do not rename

        if (newName === null) {
          return;
        }

        if (!isValidFolderName(newName)) {
          alert(msg("name-not-allowed"));
          return;
        } // Empty name will remove the folder


        if (!newName) {
          newName = null;
        }

        renameItems(newName);
      };

      const removeFolder = () => {
        renameItems(null);
      };

      return [{
        className: "sa-folders-rename-folder",
        label: msg("rename-folder"),
        callback: renameFolder,
        position: "assetContextMenuAfterDelete",
        order: 10
      }, {
        className: "sa-folders-remove-folder",
        label: msg("remove-folder"),
        callback: removeFolder,
        position: "assetContextMenuAfterDelete",
        order: 11
      }];
    } else {
      ctx.target.setAttribute("sa-folders-context-type", "asset");

      const setFolder = folder => {
        if (component.props.dragType === "SPRITE") {
          const target = vm.runtime.getTargetById(component.props.id);
          vm.renameSprite(component.props.id, ensureNotReserved(setFolderOfName(target.getName(), folder)));
          fixTargetOrder();
          vm.emitWorkspaceUpdate();
        } else if (component.props.dragType === "COSTUME") {
          const data = getItemData(component.props);
          const index = data.realIndex;
          const asset = vm.editingTarget.sprite.costumes[index];
          vm.renameCostume(vm.editingTarget.sprite.costumes.indexOf(asset), setFolderOfName(asset.name, folder));
          fixCostumeOrder();
        } else if (component.props.dragType === "SOUND") {
          const data = getItemData(component.props);
          const index = data.realIndex;
          const asset = vm.editingTarget.sprite.sounds[index];
          vm.renameSound(vm.editingTarget.sprite.sounds.indexOf(asset), setFolderOfName(asset.name, folder));
          fixSoundOrder();
        }
      };

      const createFolder = async () => {
        const name = await addon.tab.prompt(msg("name-prompt-title"), msg("name-prompt"), getNameWithoutFolder(data.realName), {
          useEditorClasses: true
        });

        if (name === null) {
          return;
        }

        if (!isValidFolderName(name)) {
          alert(msg("name-not-allowed"));
          return;
        }

        setFolder(name);
      };

      const base = [{
        border: true,
        className: "sa-folders-create-folder",
        label: msg("create-folder"),
        callback: createFolder,
        position: "assetContextMenuAfterDelete",
        order: 13
      }];
      const currentFolder = data.inFolder;

      if (typeof currentFolder === "string") {
        base.push({
          className: "sa-folders-remove-from-folder",
          label: msg("remove-from-folder"),
          callback: () => setFolder(null),
          position: "assetContextMenuAfterDelete",
          order: 14
        });
      }

      return base.concat(getAllFolders(component).filter(folder => folder !== currentFolder).map((folder, i) => {
        return {
          className: "sa-folders-add-to-folder",
          label: msg("add-to-folder", {
            folder
          }),
          callback: () => setFolder(folder),
          position: "assetContextMenuAfterDelete",
          order: 20 + i
        };
      }));
    }
  });

  const patchSpriteSelectorItem = SpriteSelectorItem => {
    for (const method of ["handleDelete", "handleDuplicate", "handleExport"]) {
      const original = SpriteSelectorItem.prototype[method];

      SpriteSelectorItem.prototype[method] = function (...args) {
        if (typeof this.props.id === "number") {
          const itemData = getItemData(this.props);

          if (itemData) {
            const originalProps = this.props;
            this.props = _objectSpread(_objectSpread({}, originalProps), {}, {
              id: itemData.realIndex
            });
            const ret = original.call(this, ...args);
            this.props = originalProps;
            return ret;
          }
        }

        return original.call(this, ...args);
      };
    }

    const originalHandleDragEnd = SpriteSelectorItem.prototype.handleDragEnd;

    SpriteSelectorItem.prototype.handleDragEnd = function (...args) {
      const itemData = getItemData(this.props);

      if (itemData) {
        if (typeof itemData.realIndex === "number" && this.props.dragging) {
          // If the item is being dragged onto another group (eg. costume list -> sprite list)
          // then we fake a drag event to make the `index` be the real index
          const originalIndex = this.props.index;
          const realIndex = itemData.realIndex;

          if (originalIndex !== realIndex) {
            const currentOffset = addon.tab.redux.state.scratchGui.assetDrag.currentOffset;
            const sortableHOCInstance = getSortableHOCFromElement(this.ref);

            if (currentOffset && sortableHOCInstance && sortableHOCInstance.getMouseOverIndex() === null) {
              this.props.index = realIndex;
              this.handleDrag(currentOffset);
              this.props.index = originalIndex;
            }
          }
        }
      }

      return originalHandleDragEnd.call(this, ...args);
    };

    const originalHandleClick = SpriteSelectorItem.prototype.handleClick;

    SpriteSelectorItem.prototype.handleClick = function (...args) {
      const e = args[0];

      if (e && !this.noClick) {
        const itemData = getItemData(this.props);

        if (itemData) {
          if (typeof itemData.folder === "string") {
            e.preventDefault();
            setFolderOpen(this, itemData.folder, !isFolderOpen(this, itemData.folder));
            return;
          }

          if (typeof this.props.number === "number" && typeof itemData.realIndex === "number") {
            e.preventDefault();

            if (this.props.onClick) {
              this.props.onClick(itemData.realIndex);
            }

            return;
          }
        }
      }

      return originalHandleClick.call(this, ...args);
    };

    const originalRender = SpriteSelectorItem.prototype.render;

    SpriteSelectorItem.prototype.render = function () {
      const itemData = getItemData(this.props);

      if (itemData) {
        const originalProps = this.props;
        this.props = _objectSpread({}, this.props);

        if (typeof itemData.realName === "string") {
          this.props.name = getNameWithoutFolder(itemData.realName);
        }

        if (typeof this.props.number === "number" && typeof itemData.realIndex === "number") {
          // Convert 0-indexed to 1-indexed
          this.props.number = itemData.realIndex + 1;
        }

        if (typeof itemData.folder === "string") {
          this.props.name = itemData.folder;

          if (itemData.folderOpen) {
            this.props.details = msg("open-folder");
          } else {
            this.props.details = msg("closed-folder");
          }

          this.props.selected = false;
          this.props.number = null;
          this.props.className += " ".concat(getFolderColorClass(itemData.folder), " sa-folders-folder");
        }

        if (typeof itemData.inFolder === "string") {
          this.props.className += " ".concat(getFolderColorClass(itemData.inFolder));
        }

        const result = originalRender.call(this);
        this.props = originalProps;
        return result;
      }

      return originalRender.call(this);
    };
  };

  const patchVM = () => {
    const RenderedTarget = vm.runtime.targets[0].constructor;
    const originalInstallTargets = vm.installTargets;

    vm.installTargets = function (...args) {
      if (currentSpriteFolder !== null) {
        const targets = args[0];
        const wholeProject = args[2];

        if (Array.isArray(targets) && !wholeProject) {
          for (const target of targets) {
            if (target.sprite) {
              target.sprite.name = setFolderOfName(target.sprite.name, currentSpriteFolder);
            }
          }
        }
      }

      return originalInstallTargets.call(this, ...args).then(r => {
        fixTargetOrder();
        return r;
      });
    };

    const originalAddCostume = RenderedTarget.prototype.addCostume;

    RenderedTarget.prototype.addCostume = function (...args) {
      if (currentAssetFolder !== null) {
        const costume = args[0];

        if (costume && typeof getFolderFromName(costume.name) !== "string") {
          costume.name = setFolderOfName(costume.name, currentAssetFolder);
        }
      }

      const r = originalAddCostume.call(this, ...args);
      fixCostumeOrder(this);
      return r;
    };

    const originalAddSound = RenderedTarget.prototype.addSound;

    RenderedTarget.prototype.addSound = function (...args) {
      if (currentAssetFolder !== null) {
        const sound = args[0];

        if (sound && typeof getFolderFromName(sound.name) !== "string") {
          sound.name = setFolderOfName(sound.name, currentAssetFolder);
        }
      }

      const r = originalAddSound.call(this, ...args);
      fixSoundOrder(this);
      return r;
    };

    const abstractReorder = ({
      guiItems,
      getAll,
      set,
      rename,
      getVMItemFromGUIItem,
      zeroIndexed,
      onFolderChanged
    }, itemIndex, newIndex) => {
      // First index depends on zeroIndexed
      itemIndex = clamp(itemIndex, zeroIndexed ? 0 : 1, zeroIndexed ? guiItems.length - 1 : guiItems.length);
      newIndex = clamp(newIndex, zeroIndexed ? 0 : 1, zeroIndexed ? guiItems.length - 1 : guiItems.length);

      if (itemIndex === newIndex) {
        return false;
      }

      let assets = getAll();
      const originalAssets = getAll();
      const targetItem = guiItems[itemIndex - (zeroIndexed ? 0 : 1)];
      const itemAtNewIndex = guiItems[newIndex - (zeroIndexed ? 0 : 1)];
      const targetItemData = getItemData(targetItem);
      const itemAtNewIndexData = getItemData(itemAtNewIndex);

      if (!targetItemData || !itemAtNewIndexData) {
        console.warn("should never happen");
        return false;
      }

      const reorderingItems = typeof targetItemData.folder === "string" ? targetItem.items : [targetItem];
      const reorderingAssets = reorderingItems.map(i => getVMItemFromGUIItem(i, assets)).filter(i => i);

      if (typeof itemAtNewIndexData.realIndex === "number") {
        const newTarget = getVMItemFromGUIItem(itemAtNewIndex, assets);

        if (!newTarget || reorderingAssets.includes(newTarget)) {
          // Dragging folder into itself or target doesn't exist. Ignore.
          return false;
        }
      }

      let newFolder = null;
      assets = assets.filter(i => !reorderingAssets.includes(i));
      let realNewIndex;

      if (newIndex === (zeroIndexed ? 0 : 1)) {
        realNewIndex = zeroIndexed ? 0 : 1;
      } else if (newIndex === guiItems.length - (zeroIndexed ? 1 : 0)) {
        realNewIndex = assets.length;
      } else if (typeof itemAtNewIndexData.realIndex === "number") {
        newFolder = typeof itemAtNewIndexData.inFolder === "string" ? itemAtNewIndexData.inFolder : null;
        let newAsset = getVMItemFromGUIItem(itemAtNewIndex, assets);

        if (!newAsset) {
          console.warn("should never happen");
          return false;
        }

        realNewIndex = assets.indexOf(newAsset);

        if (newIndex > itemIndex) {
          realNewIndex++;
        }
      } else if (typeof itemAtNewIndexData.folder === "string") {
        let item;
        let offset = 0;

        if (newIndex < itemIndex) {
          // A B [C D E] F G
          //    ^----------*
          // A B C [D] E F G
          //      ^--------*
          item = itemAtNewIndex.items[0];
        } else if (itemAtNewIndexData.folderOpen) {
          // A B [C D E] F G
          //   *---^
          item = itemAtNewIndex.items[0];
          newFolder = itemAtNewIndexData.folder;
        } else {
          // A B [C] D E F G
          //   *----^
          item = itemAtNewIndex.items[itemAtNewIndex.items.length - 1];
          offset = 1;
        }

        let newAsset = getVMItemFromGUIItem(item, assets);

        if (newAsset) {
          realNewIndex = assets.indexOf(newAsset) + offset;
        } else {
          // Edge case: Dragging the first item of a list on top of the folder item
          // A B [C D E] F G
          //    ^---*
          newAsset = getVMItemFromGUIItem(item, originalAssets);

          if (!newAsset) {
            console.warn("should never happen");
            return false;
          }

          realNewIndex = originalAssets.indexOf(newAsset) + offset;
        }
      } else {
        console.warn("should never happen");
        return false;
      }

      if (typeof targetItemData.folder === "string" && newFolder !== null) {
        // Cannot drag a folder into another folder
        return;
      }

      if (realNewIndex < (zeroIndexed ? 0 : 1) || realNewIndex > assets.length) {
        console.warn("should never happen");
        return false;
      }

      assets.splice(realNewIndex, 0, ...reorderingAssets);
      set(assets); // If the folder has changed, update item names to match.

      if (typeof targetItemData.folder !== "string" && targetItemData.inFolder !== newFolder) {
        for (const asset of reorderingAssets) {
          const name = asset.getName ? asset.getName() : asset.name;
          rename(asset, setFolderOfName(name, newFolder));
        }

        if (onFolderChanged) {
          onFolderChanged();
        }
      }

      return true;
    };

    vm.constructor.prototype.reorderTarget = function (targetIndex, newIndex) {
      return abstractReorder({
        getAll: () => {
          return this.runtime.targets;
        },
        set: targets => {
          this.runtime.targets = targets;
          this.emitTargetsUpdate();
        },
        rename: (item, name) => {
          this.renameSprite(item.id, ensureNotReserved(name));
        },
        getVMItemFromGUIItem: (item, targets) => {
          return targets.find(i => i.id === item.id);
        },
        onFolderChanged: () => {
          this.emitWorkspaceUpdate();
        },
        guiItems: currentSpriteItems,
        zeroIndexed: false
      }, targetIndex, newIndex);
    };

    RenderedTarget.prototype.reorderCostume = function (costumeIndex, newIndex) {
      return abstractReorder({
        getAll: () => {
          return this.sprite.costumes;
        },
        set: assets => {
          this.sprite.costumes = assets;
        },
        rename: (item, name) => {
          this.renameCostume(this.sprite.costumes.indexOf(item), name);
        },
        getVMItemFromGUIItem: (item, costumes) => {
          const itemData = getItemData(item);
          return costumes.find(c => c.name === itemData.realName);
        },
        guiItems: currentAssetItems,
        zeroIndexed: true
      }, costumeIndex, newIndex);
    };

    RenderedTarget.prototype.reorderSound = function (soundIndex, newIndex) {
      return abstractReorder({
        getAll: () => {
          return this.sprite.sounds;
        },
        set: assets => {
          this.sprite.sounds = assets;
        },
        rename: (item, name) => {
          this.renameSound(this.sprite.sounds.indexOf(item), name);
        },
        getVMItemFromGUIItem: (item, sounds) => {
          const itemData = getItemData(item);
          return sounds.find(c => c.name === itemData.realName);
        },
        guiItems: currentAssetItems,
        zeroIndexed: true
      }, soundIndex, newIndex);
    }; // Temporal bug fix for #5762


    const originalShareSoundToTarget = vm.shareSoundToTarget;

    vm.shareSoundToTarget = function (...args) {
      const target = this.runtime.getTargetById(args[1]);

      if (!target) {
        // Avoid reading property from null
        return Promise.reject(new Error("Dropping sound into folder is not supported")); // This would also work no matter what we returned, probably
        // Original method returns a promise, so here too
      }

      return originalShareSoundToTarget.call(this, ...args);
    };
  };

  const patchBackpack = backpackInstance => {
    const Backpack = backpackInstance.constructor;

    Backpack.prototype.sa_loadNextItem = function () {
      if (!this.sa_queuedItems) return;
      const item = this.sa_queuedItems.pop();

      if (item) {
        let payload;
        let type;

        if (item.dragPayload) {
          if (item.url) {
            type = "SOUND";
          } else {
            type = "COSTUME";
          }

          payload = item.dragPayload;
        } else if (item.id) {
          type = "SPRITE";
          payload = item.id;
        }

        if (type && payload) {
          originalHandleDrop.call(this, {
            dragType: type,
            payload: payload
          });
        }
      }
    };

    Backpack.prototype.componentDidUpdate = function (prevProps, prevState) {
      if (!this.state.loading && prevState.loading && !this.state.error) {
        this.sa_loadNextItem();
      }
    };

    const originalHandleDrop = Backpack.prototype.handleDrop;

    Backpack.prototype.handleDrop = function (...args) {
      // When a folder is dropped into the backpack, upload all the items in the folder.
      const dragInfo = args[0];
      const folderItems = dragInfo && dragInfo.payload && dragInfo.payload.sa_folder_items;

      if (Array.isArray(folderItems)) {
        addon.tab.confirm("", msg("confirm-backpack-folder"), {
          useEditorClasses: true
        }).then(result => {
          if (!result) return;
          this.sa_queuedItems = folderItems;
          this.sa_loadNextItem();
        });
        return;
      }

      return originalHandleDrop.call(this, ...args);
    };

    backpackInstance.handleDrop = Backpack.prototype.handleDrop.bind(backpackInstance);
  }; // Backpack


  {
    const clickListener = e => {
      if (!e.target.closest('[class*="backpack_backpack-header_"]')) {
        return;
      }

      setTimeout(() => {
        const backpackContainer = document.querySelector("[class^='backpack_backpack-list_']");

        if (!backpackContainer) {
          return;
        }

        document.removeEventListener("click", clickListener);
        const backpackInstance = getBackpackFromElement(backpackContainer);
        verifyBackpack(backpackInstance);
        patchBackpack(backpackInstance);
      });
    };

    document.addEventListener("click", clickListener, true);
  } // Sprite list

  {
    const spriteSelectorItemElement = await addon.tab.waitForElement("[class^='sprite-selector_sprite-wrapper']", {
      reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
    });
    vm = addon.tab.traps.vm;
    reactInternalKey = Object.keys(spriteSelectorItemElement).find(i => i.startsWith(REACT_INTERNAL_PREFIX));
    const sortableHOCInstance = getSortableHOCFromElement(spriteSelectorItemElement);
    const spriteSelectorItemInstance = spriteSelectorItemElement[reactInternalKey].child.child.child.stateNode;
    verifySortableHOC(sortableHOCInstance);
    verifySpriteSelectorItem(spriteSelectorItemInstance);
    verifyVM(vm);
    patchSortableHOC(sortableHOCInstance.constructor, TYPE_SPRITES);
    patchSpriteSelectorItem(spriteSelectorItemInstance.constructor);
    sortableHOCInstance.saInitialSetup();
    patchVM();
  } // Costume and sound list

  {
    const selectorListItem = await addon.tab.waitForElement("[class*='selector_list-item']", {
      reduxCondition: state => state.scratchGui.editorTab.activeTabIndex !== 0 && !state.scratchGui.mode.isPlayerOnly
    });
    const sortableHOCInstance = getSortableHOCFromElement(selectorListItem);
    verifySortableHOC(sortableHOCInstance);
    patchSortableHOC(sortableHOCInstance.constructor, TYPE_ASSETS);
    sortableHOCInstance.saInitialSetup();
  }
});

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/_runtime_entry.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/_runtime_entry.js ***!
  \****************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/middle-click-popup/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/middle-click-popup/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/userscript.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/userscript.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  msg,
  console
}) {
  const Blockly = await addon.tab.traps.getBlockly();
  let mouse = {
    x: 0,
    y: 0
  };

  class FloatingInput {
    constructor() {
      this.floatBar = null;
      this.floatInput = null;
      this.dropdownOut = null;
      this.dropdown = null;
      this.prevVal = "";
      this.DROPDOWN_BLOCK_LIST_MAX_ROWS = 25;
      this.createDom();
    }

    get workspace() {
      return Blockly.getMainWorkspace();
    }

    get selectedTab() {
      return addon.tab.redux.state.scratchGui.editorTab.activeTabIndex;
    }

    createDom() {
      // Popup new input box for block injection
      this.floatBar = document.body.appendChild(document.createElement("div"));
      this.floatBar.className = "sa-float-bar";
      this.floatBar.dir = addon.tab.direction;
      this.floatBar.style.display = "none";
      this.dropdownOut = this.floatBar.appendChild(document.createElement("div"));
      this.dropdownOut.className = "sa-float-bar-dropdown-out";
      this.floatInput = this.dropdownOut.appendChild(document.createElement("input"));
      this.floatInput.placeholder = msg("start-typing");
      this.floatInput.className = "sa-float-bar-input";
      this.floatInput.className = addon.tab.scratchClass("input_input-form", {
        others: "sa-float-bar-input"
      });
      this.dropdown = this.dropdownOut.appendChild(document.createElement("ul"));
      this.dropdown.className = "sa-float-bar-dropdown";
      this.floatInput.addEventListener("keyup", () => this.inputChange());
      this.floatInput.addEventListener("focus", () => this.inputChange());
      this.floatInput.addEventListener("keydown", (...e) => this.inputKeyDown(...e));
      this.floatInput.addEventListener("focusout", () => this.hide());
      this.dropdownOut.addEventListener("mousedown", (...e) => this.onClick(...e));
      document.addEventListener("keydown", e => {
        if (addon.tab.editorMode !== "editor") {
          return;
        }

        let ctrlKey = e.ctrlKey || e.metaKey;

        if (e.key === " " && ctrlKey) {
          // Ctrl + Space (Inject Code)
          this.show(e);
          e.cancelBubble = true;
          e.preventDefault();
          return true;
        }
      });
    }

    show(e) {
      var _e$clientX, _e$clientY;

      if (this.selectedTab !== 0) {
        return;
      }

      e.cancelBubble = true;
      e.preventDefault();
      this.buildFilterList();
      this.floatBar.style.left = ((_e$clientX = e.clientX) !== null && _e$clientX !== void 0 ? _e$clientX : mouse.x) + 16 + "px";
      this.floatBar.style.top = ((_e$clientY = e.clientY) !== null && _e$clientY !== void 0 ? _e$clientY : mouse.y) - 8 + "px";
      this.floatBar.style.display = "";
      this.floatInput.value = "";
      this.floatInput.focus();
    }

    onClick(e) {
      e.cancelBubble = true;

      if (!e.target.closest("input")) {
        e.preventDefault();
      }

      let sel = e && e.target;

      if (sel.tagName === "B") {
        sel = sel.parentNode;
      }

      if (e instanceof MouseEvent && sel.tagName !== "LI") {
        // Mouse clicks need to be on a block...
        return;
      }

      if (!sel || !sel.data) {
        sel = this.dropdown.querySelector(".sel");
      }

      if (!sel) {
        return;
      }

      this.createDraggingBlock(sel, e);

      if (e.shiftKey) {
        this.floatBar.style.display = "";
        this.floatInput.focus();
      }
    }

    createDraggingBlock(sel, e) {
      let option = sel.data.option; // block:option.block, dom:option.dom, option:option.option

      if (option.option) {
        // We need to tweak the dropdown in this xml...
        let field = option.dom.querySelector("field[name=" + option.pickField + "]");

        if (field.getAttribute("id")) {
          field.innerText = option.option[0];
          field.setAttribute("id", option.option[1] + "-" + option.option[0]);
        } else {
          field.innerText = option.option[1];
        } // Handle "stop other scripts in sprite"


        if (option.option[1] === "other scripts in sprite") {
          option.dom.querySelector("mutation").setAttribute("hasnext", "true");
        }
      } // This is mostly copied from https://github.com/LLK/scratch-blocks/blob/893c7e7ad5bfb416eaed75d9a1c93bdce84e36ab/core/scratch_blocks_utils.js#L171
      // Some bits were removed or changed to fit our needs.


      this.workspace.setResizesEnabled(false);
      Blockly.Events.disable();

      try {
        var newBlock = Blockly.Xml.domToBlock(option.dom, this.workspace);
        Blockly.scratchBlocksUtils.changeObscuredShadowIds(newBlock);
        var svgRootNew = newBlock.getSvgRoot();

        if (!svgRootNew) {
          throw new Error("newBlock is not rendered.");
        }

        let blockBounds = newBlock.svgPath_.getBoundingClientRect();
        let newBlockX = Math.floor((mouse.x - (blockBounds.left + blockBounds.right) / 2) / this.workspace.scale);
        let newBlockY = Math.floor((mouse.y - (blockBounds.top + blockBounds.bottom) / 2) / this.workspace.scale);
        newBlock.moveBy(newBlockX, newBlockY);
      } finally {
        Blockly.Events.enable();
      }

      if (Blockly.Events.isEnabled()) {
        Blockly.Events.fire(new Blockly.Events.BlockCreate(newBlock));
      }

      var fakeEvent = {
        clientX: mouse.x,
        clientY: mouse.y,
        type: "mousedown",
        preventDefault: function preventDefault() {
          e.preventDefault();
        },
        stopPropagation: function stopPropagation() {
          e.stopPropagation();
        },
        target: sel
      };
      this.workspace.startDragWithFakeEvent(fakeEvent, newBlock);
    }

    inputChange() {
      // Filter the list...
      let val = (this.floatInput.value || "").toLowerCase();

      if (val === this.prevVal) {
        return;
      }

      this.prevVal = val;
      let p = this.dropdown.parentNode;
      this.dropdown.remove();
      let count = 0;
      let split = val.split(" ");
      let listLI = this.dropdown.getElementsByTagName("li");

      for (const li of listLI) {
        const procCode = li.data.text;
        const lower = li.data.lower; // let i = li.data.lower.indexOf(val);
        // let array = regExp.exec(li.data.lower);

        let im = 0;
        let match = [];

        for (let si = 0; si < split.length; si++) {
          let find = " " + split[si];
          let idx = lower.indexOf(find, im);

          if (idx === -1) {
            match = null;
            break;
          }

          match.push(idx);
          im = idx + find.length;
        }

        if (count < this.DROPDOWN_BLOCK_LIST_MAX_ROWS && match) {
          li.style.display = "block";

          while (li.firstChild) {
            li.removeChild(li.firstChild);
          }

          let i = 0;

          for (let iM = 0; iM < match.length; iM++) {
            let im = match[iM];

            if (im > i) {
              li.appendChild(document.createTextNode(procCode.substring(i, im)));
              i = im;
            }

            let bText = document.createElement("b");
            let len = split[iM].length;
            bText.appendChild(document.createTextNode(procCode.substr(i, len)));
            li.appendChild(bText);
            i += len;
          }

          if (i < procCode.length) {
            li.appendChild(document.createTextNode(procCode.substr(i)));
          }

          if (count === 0) {
            li.classList.add("sel");
          } else {
            li.classList.remove("sel");
          }

          count++;
        } else {
          li.style.display = "none";
          li.classList.remove("sel");
        }
      }

      p.append(this.dropdown);
    }

    inputKeyDown(e) {
      if (e.keyCode === 38) {
        this.navigateFloatFilter(-1);
        e.preventDefault();
        return;
      }

      if (e.keyCode === 40) {
        this.navigateFloatFilter(1);
        e.preventDefault();
        return;
      }

      if (e.keyCode === 13) {
        // Enter
        let sel = this.dropdown.querySelector(".sel");

        if (sel) {
          this.onClick(e);
          this.hide();
        }

        e.cancelBubble = true;
        e.preventDefault();
        return;
      }

      if (e.keyCode === 27) {
        // Escape
        if (this.floatInput.value.length > 0) {
          this.floatInput.value = ""; // Clear search first, then close on second press

          this.inputChange(e);
        } else {
          this.hide();
        }

        e.preventDefault();
        return;
      }
    }

    buildFilterList() {
      let options = [];
      let toolbox = this.workspace.getToolbox(); // This can happen during custom block creation, for example

      if (!toolbox) return;
      let blocks = toolbox.flyout_.getWorkspace().getTopBlocks(); // 107 blocks, not in order... but we can sort by y value or description right :)

      let fullDom = Blockly.Xml.workspaceToDom(toolbox.flyout_.getWorkspace());
      const doms = {};

      for (const x of fullDom.children) {
        if (x.tagName === "BLOCK") {
          let id = x.getAttribute("id");
          doms[id] = x;
        }
      }

      for (const block of blocks) {
        this.getBlockText(block, options, doms);
      }

      options.sort((a, b) => a.desc.length < b.desc.length ? -1 : a.desc.length > b.desc.length ? 1 : a.desc.localeCompare(b.desc));
      let count = 0;

      while (this.dropdown.firstChild) {
        this.dropdown.removeChild(this.dropdown.firstChild);
      }

      for (const option of options) {
        const li = document.createElement("li");
        const desc = option.desc; // bType = hat block reporter boolean

        let bType = this.getEdgeTypeClass(option.block);
        count++;
        li.innerText = desc;
        li.data = {
          text: desc,
          lower: " " + desc.toLowerCase(),
          option: option
        };
        const blockTypes = {
          // Some of these blocks in the flyout have a category of `null` for some reason, the
          // same as procedures. Without making bigger changes to the custom block color system
          // hardcoding these is the best solution for now.
          sensing_of: "sensing",
          event_whenbackdropswitchesto: "events"
        };
        let ending = option.block.getCategory() || blockTypes[option.block.type] || "null";

        if (option.block.isScratchExtension) {
          ending = "pen";
        } else if (addon.tab.getCustomBlock(option.block.procCode_)) {
          ending = "addon-custom-block";
        }

        li.className = "sa-block-color sa-block-color-" + ending + " sa-" + bType;

        if (count > this.DROPDOWN_BLOCK_LIST_MAX_ROWS) {
          // Limit maximum number of rows to prevent lag when no filter is applied
          li.style.display = "none";
        }

        this.dropdown.appendChild(li);
      }

      this.dropdownOut.classList.add("vis");
    }

    navigateFloatFilter(dir) {
      let sel = this.dropdown.getElementsByClassName("sel");
      let nxt;

      if (sel.length > 0 && sel[0].style.display !== "none") {
        nxt = dir === -1 ? sel[0].previousSibling : sel[sel.length - 1].nextSibling;
      } else {
        nxt = this.dropdown.children[0];
        dir = 1;
      }

      while (nxt && nxt.style.display === "none") {
        nxt = dir === -1 ? nxt.previousSibling : nxt.nextSibling;
      }

      if (nxt) {
        for (const i of sel) {
          i.classList.remove("sel");
        }

        nxt.classList.add("sel"); // centerTop(nxt.data.labelID);
      }
    }

    getBlockText(block, options, doms) {
      // block.type;  "looks_nextbackdrop"
      let desc;
      let picklist, pickField;
      let dom = doms[block.id]; // dom = doms[block.type];

      const process = block => {
        for (const input of block.inputList) {
          // input.name = "", input.type = 5
          let fields = input.fieldRow;

          for (const field of fields) {
            // field --- Blockly.FieldLabel .className = "blocklyText"
            // Blockly.FieldDropdown --- .className = "blocklyText blocklyDropdownText"
            let text;

            if (!picklist && field.className_ === "blocklyText blocklyDropdownText") {
              picklist = field.getOptions();
              pickField = field.name;

              if (picklist && picklist.length > 0) {
                text = "^^";
              } else {
                text = field.getText();
              }
            } else {
              text = field.getText();
            }

            desc = (desc ? desc + " " : "") + text;
          }

          if (input.connection) {
            let innerBlock = input.connection.targetBlock();

            if (innerBlock) {
              process(innerBlock); // Recursive process connected child blocks...
            }
          }
        }
      };

      process(block);

      if (picklist) {
        for (const item of picklist) {
          let code = item[1];

          if (typeof code !== "string" || // Audio Record is a function!
          code === "DELETE_VARIABLE_ID" || code === "RENAME_VARIABLE_ID" || code === "NEW_BROADCAST_MESSAGE_ID" || code === "NEW_BROADCAST_MESSAGE_ID" || // editor-searchable-dropdowns compatibility
          code === "createGlobalVariable" || code === "createLocalVariable" || code === "createGlobalList" || code === "createLocalList" || code === "createBroadcast" || // rename-broadcasts compatibility
          code === "RENAME_BROADCAST_MESSAGE_ID") {
            continue; // Skip these
          }

          options.push({
            desc: desc.replace("^^", item[0]),
            block: block,
            dom: dom,
            option: item,
            pickField: pickField
          });
        }
      } else {
        options.push({
          desc: desc,
          block: block,
          dom: dom
        });
      }

      return desc;
    }

    getEdgeTypeClass(block) {
      switch (block.edgeShape_) {
        case 1:
          return "boolean";

        case 2:
          return "reporter";

        default:
          return block.startHat_ ? "hat" : "block";
      }
    }

    hide() {
      this.floatBar.style.display = "none";
    }

  }

  const floatingInput = new FloatingInput();
  const _doWorkspaceClick_ = Blockly.Gesture.prototype.doWorkspaceClick_;

  Blockly.Gesture.prototype.doWorkspaceClick_ = function () {
    if (!addon.self.disabled && (this.mostRecentEvent_.button === 1 || this.mostRecentEvent_.shiftKey)) {
      // Wheel button...
      floatingInput.show(this.mostRecentEvent_);
    }

    _doWorkspaceClick_.call(this);
  };

  document.addEventListener("mousemove", e => {
    mouse = {
      x: e.clientX,
      y: e.clientY
    };
  });
});

/***/ }),

/***/ "./src/addons/addons/move-to-top-bottom/_runtime_entry.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/move-to-top-bottom/_runtime_entry.js ***!
  \****************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/move-to-top-bottom/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/move-to-top-bottom/userscript.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/move-to-top-bottom/userscript.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async ({
  addon,
  console,
  msg
}) => {
  const types = ["sound", "costume"];
  addon.tab.createEditorContextMenu(ctx => {
    const target = addon.tab.traps.vm.editingTarget;

    if (ctx.type === "sound") {
      target.reorderSound(ctx.index, 0);
    } else {
      target.reorderCostume(ctx.index, 0);
    }

    queueMicrotask(() => {
      addon.tab.traps.vm.emitTargetsUpdate();
      addon.tab.traps.vm.runtime.emitProjectChanged();
      ctx.target.click();
    });
  }, {
    types,
    position: "assetContextMenuAfterExport",
    order: 1,
    label: msg("top"),
    condition: ctx => ctx.index !== 0
  });
  addon.tab.createEditorContextMenu(ctx => {
    const target = addon.tab.traps.vm.editingTarget;

    if (ctx.type === "sound") {
      target.reorderSound(ctx.index, Infinity);
    } else {
      target.reorderCostume(ctx.index, Infinity);
    }

    queueMicrotask(() => {
      addon.tab.traps.vm.emitTargetsUpdate();
      addon.tab.traps.vm.runtime.emitProjectChanged();
      ctx.target.click();
    });
  }, {
    types,
    position: "assetContextMenuAfterExport",
    order: 2,
    label: msg("bottom"),
    condition: ctx => ctx.index !== ctx.target.parentNode.parentNode.childElementCount - 1
  });
});

/***/ }),

/***/ "./src/addons/addons/onion-skinning/_runtime_entry.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/onion-skinning/_runtime_entry.js ***!
  \************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/onion-skinning/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/onion-skinning/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_decrement_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./decrement.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/decrement.svg");
/* harmony import */ var _url_loader_increment_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./increment.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/increment.svg");
/* harmony import */ var _url_loader_settings_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-loader!./settings.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/settings.svg");
/* harmony import */ var _url_loader_toggle_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-loader!./toggle.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/toggle.svg");
/* generated by pull.js */






const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "decrement.svg": _url_loader_decrement_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "increment.svg": _url_loader_increment_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  "settings.svg": _url_loader_settings_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  "toggle.svg": _url_loader_toggle_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
};

/***/ }),

/***/ "./src/addons/addons/onion-skinning/userscript.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/onion-skinning/userscript.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  console,
  msg
}) {
  const paper = await addon.tab.traps.getPaper();
  const paintEditorCanvasContainer = await addon.tab.waitForElement("[class^='paint-editor_canvas-container']");

  try {
    if (!("colorIndex" in addon.tab.redux.state.scratchPaint.fillMode)) {
      console.error("Detected new paint editor; this will be supported in future versions.");
      return;
    }
  } catch (_) {// The check can technically fail when Redux isn't supported (rare cases)
    // Just ignore in this case
  }

  const paperCanvas = paintEditorCanvasContainer[addon.tab.traps.getInternalKey(paintEditorCanvasContainer)].child.child.child.stateNode;
  const storedOnionLayers = [];

  const parseHexColor = color => {
    const hexString = color.substr(1);
    const hexNumber = parseInt(hexString, 16);
    return [hexNumber >> 16 & 0xff, // R
    hexNumber >> 8 & 0xff, // G
    hexNumber & 0xff // B
    ];
  };

  const settings = {
    enabled: addon.settings.get("default") && !addon.self.disabled,
    previous: +addon.settings.get("previous"),
    next: +addon.settings.get("next"),
    opacity: +addon.settings.get("opacity"),
    opacityStep: +addon.settings.get("opacityStep"),
    layering: addon.settings.get("layering"),
    mode: addon.settings.get("mode"),
    beforeTint: parseHexColor(addon.settings.get("beforeTint")),
    afterTint: parseHexColor(addon.settings.get("afterTint"))
  };

  const getPaperCenter = () => {
    const backgroundGuideLayer = paper.project.layers.find(i => i.data.isBackgroundGuideLayer);
    return backgroundGuideLayer.children[0].position;
  };

  const injectPaper = () => {
    // When background guide layer is added, show onion layers.
    // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/helper/layer.js#L145
    const originalAddLayer = paper.Project.prototype.addLayer;

    paper.Project.prototype.addLayer = function (layer) {
      const result = originalAddLayer.call(this, layer);

      if (layer.data.isBackgroundGuideLayer) {
        let onion;

        while (onion = storedOnionLayers.shift()) {
          originalAddLayer.call(this, onion);
        }

        relayerOnionLayers();
      }

      return result;
    }; // Scratch uses importJSON to undo or redo
    // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/helper/undo.js#L37
    // The code prior to this will remove our onion layers, so we have to manually add them back.


    const originalImportJSON = paper.Project.prototype.importJSON;

    paper.Project.prototype.importJSON = function (json) {
      const result = originalImportJSON.call(this, json);

      if (settings.enabled) {
        updateOnionLayers();
      }

      return result;
    }; // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/helper/layer.js#L114
    // When background guide layer is removed, hide onion layers.


    const originalRemoveLayer = paper.Layer.prototype.remove;

    paper.Layer.prototype.remove = function () {
      if (this.data.isBackgroundGuideLayer) {
        for (const layer of paper.project.layers) {
          if (layer.data.sa_isOnionLayer) {
            storedOnionLayers.push(layer);
          }
        }

        for (const layer of storedOnionLayers) {
          layer.remove();
        }
      }

      return originalRemoveLayer.call(this);
    };
  };

  const injectPaperCanvas = () => {
    let expectingImport = false;
    const PaperCanvas = paperCanvas.constructor; // importImage is called to start loading an image.
    // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L124

    const originalImportImage = PaperCanvas.prototype.importImage;

    PaperCanvas.prototype.importImage = function (...args) {
      expectingImport = true;
      removeOnionLayers();
      return originalImportImage.call(this, ...args);
    }; // recalibrateSize is called when the canvas finishes loading an image.
    // all paths of importImage will result in a call to this method.
    // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L310-L327
    // We use this to know when to add layers.


    const originalRecalibrateSize = PaperCanvas.prototype.recalibrateSize;

    PaperCanvas.prototype.recalibrateSize = function (callback) {
      return originalRecalibrateSize.call(this, () => {
        if (callback) callback();

        if (expectingImport) {
          expectingImport = false;

          if (settings.enabled) {
            updateOnionLayers();
          }
        }
      });
    }; // Prototype overrides will work for all future instances, but Scratch manually binds some methods to `this`
    // so we have to manually copy them for the current instance (but not future instances)


    paperCanvas.recalibrateSize = PaperCanvas.prototype.recalibrateSize.bind(paperCanvas);
    paperCanvas.importImage = PaperCanvas.prototype.importImage.bind(paperCanvas);
  };

  const createOnionLayer = () => {
    const layer = new paper.Layer();
    layer.locked = true;
    layer.guide = true;
    layer.data.sa_isOnionLayer = true;
    return layer;
  }; // Each onion layer update is given an ID
  // Because updating layers is async, we need this to cancel all but the most recent update


  let globalUpdateId = 0;

  const cancelOngoingUpdatesAndGetNewId = () => ++globalUpdateId;

  const removeOnionLayers = () => {
    cancelOngoingUpdatesAndGetNewId();
    const project = paper.project;

    if (!project) {
      return;
    }

    storedOnionLayers.length = 0;
    const layers = project.layers; // Iterate downward because we remove items mid-iteration

    for (let i = layers.length - 1; i >= 0; i--) {
      const layer = layers[i];

      if (layer.data.sa_isOnionLayer) {
        layer.remove();
      }
    }
  };

  const relayerOnionLayers = () => {
    const project = paper.project;

    if (!project) {
      return;
    }

    const onionLayer = project.layers.find(i => i.data.sa_isOnionLayer);

    if (!onionLayer) {
      return;
    }

    if (settings.layering === "front") {
      project.addLayer(onionLayer);
    } else {
      const rasterLayer = project.layers.find(i => i.data.isRasterLayer);

      if (rasterLayer.index === 0) {
        project.insertLayer(0, onionLayer);
      } else {
        project.insertLayer(1, onionLayer);
      }
    }
  };

  const recursePaperItem = (item, callback) => {
    if (item.children) {
      for (const child of item.children) {
        recursePaperItem(child, callback);
      }
    }

    callback(item);
  };

  const getTint = (red, green, blue, isBefore) => {
    const referenceColor = isBefore ? settings.beforeTint : settings.afterTint;
    const colorAverage = (red + green + blue) / 3 / 255;
    const WEIGHT = 1.5;
    const weighted = colorAverage / WEIGHT + (1 - 1 / WEIGHT);
    return [referenceColor[0] * weighted, referenceColor[1] * weighted, referenceColor[2] * weighted];
  };

  const toHexColor = ([red, green, blue]) => {
    const r = Math.round(red).toString(16).padStart(2, "0");
    const g = Math.round(green).toString(16).padStart(2, "0");
    const b = Math.round(blue).toString(16).padStart(2, "0");
    return "#".concat(r).concat(g).concat(b);
  };

  const getPaperColorTint = (color, isBefore) => toHexColor(getTint(color.red * 255, color.green * 255, color.blue * 255, isBefore));

  const tintRaster = (raster, isBefore) => {
    const {
      width,
      height
    } = raster.canvas;
    const context = raster.context; // TODO: check to see if this is a performance issue

    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4
    /* RGBA */
    ) {
      const red = data[i + 0];
      const green = data[i + 1];
      const blue = data[i + 2];
      const alpha = data[i + 3];

      if (alpha === 0) {
        continue;
      }

      const newTint = getTint(red, green, blue, isBefore);
      data[i + 0] = newTint[0];
      data[i + 1] = newTint[1];
      data[i + 2] = newTint[2];
    }

    context.putImageData(imageData, 0, 0);
  };

  const waitForAllRastersToLoad = root => {
    const promises = [];
    recursePaperItem(root, item => {
      if (item instanceof paper.Raster) {
        promises.push(new Promise((resolve, reject) => {
          item.on("load", () => resolve());
          item.on("error", () => reject(new Error("Raster inside SVG failed to load")));
        }));
      }
    });
    return Promise.all(promises);
  };

  const rasterizeVector = root => {
    const bounds = root.strokeBounds;
    const {
      width,
      height
    } = bounds; // Some browsers experience extremely poor performance when this value exceeds 3840.

    const MAX_SIZE = 3000;
    const maxScale = Math.min(MAX_SIZE / width, MAX_SIZE / height);
    const raster = new paper.Raster(new paper.Size(width, height));
    raster.remove();
    raster.smoothing = true;
    raster.guide = true;
    raster.locked = true;
    let renderedAtScale = 0;
    const originalDraw = raster.draw;

    raster.draw = function (...args) {
      const displayedSize = this.getView().getZoom() * window.devicePixelRatio;
      const newScale = Math.max(1, Math.min(maxScale, 2 ** Math.ceil(Math.log2(displayedSize))));

      if (newScale > renderedAtScale) {
        renderedAtScale = newScale;
        const canvas = this.canvas;
        const ctx = this.context; // Based on https://github.com/LLK/paper.js/blob/16d5ff0267e3a0ef647c25e58182a27300afad20/src/item/Item.js#L1761

        const scaledWidth = width * newScale;
        const scaledHeight = height * newScale;
        canvas.width = scaledWidth;
        canvas.height = scaledHeight;
        this._size = new paper.Size(scaledWidth, scaledHeight);
        const topLeft = bounds.getTopLeft();
        const bottomRight = bounds.getBottomRight();
        const size = new paper.Size(bottomRight.subtract(topLeft));
        const matrix = new paper.Matrix().scale(newScale).translate(topLeft.negate());
        ctx.save();
        matrix.applyToContext(ctx);
        root.draw(ctx, new paper.Base({
          matrices: [matrix]
        }));
        ctx.restore();
        this.matrix.reset();
        this.transform(new paper.Matrix().translate(topLeft.add(size.divide(2))).scale(1 / newScale));
      }

      return originalDraw.call(this, ...args);
    };

    return raster;
  };

  const makeVectorOnion = (opacity, costume, asset, isBefore) => new Promise((resolve, reject) => {
    const {
      rotationCenterX,
      rotationCenterY
    } = costume; // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L196-L218

    asset = asset.split(/<\s*svg:/).join("<");
    asset = asset.split(/<\/\s*svg:/).join("</");
    const svgAttrs = asset.match(/<svg [^>]*>/);

    if (svgAttrs && svgAttrs[0].indexOf("xmlns=") === -1) {
      asset = asset.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ');
    }

    const parser = new DOMParser();
    const svgDom = parser.parseFromString(asset, "text/xml");
    const viewBox = svgDom.documentElement.attributes.viewBox ? svgDom.documentElement.attributes.viewBox.value.match(/\S+/g) : null;

    if (viewBox) {
      for (let i = 0; i < viewBox.length; i++) {
        viewBox[i] = parseFloat(viewBox[i]);
      }
    }

    const handleLoad = root => {
      root.opacity = opacity; // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L274-L275

      recursePaperItem(root, i => {
        if (i.className === "PathItem") {
          i.clockwise = true;
        }

        if (i.className !== "PointText" && !i.children) {
          if (i.strokeWidth) {
            i.strokeWidth = i.strokeWidth * 2;
          }
        }

        i.locked = true;
        i.guide = true;
      });
      root.scale(2, new paper.Point(0, 0));

      if (settings.mode === "tint") {
        const gradients = new Set();
        recursePaperItem(root, i => {
          if (i.strokeColor) {
            i.strokeColor = getPaperColorTint(i.strokeColor, isBefore);
          }

          if (i.fillColor) {
            const gradient = i.fillColor.gradient;

            if (gradient) {
              if (gradients.has(gradient)) return;
              gradients.add(gradient);

              for (const stop of gradient.stops) {
                stop.color = getPaperColorTint(stop.color, isBefore);
              }
            } else {
              i.fillColor = getPaperColorTint(i.fillColor, isBefore);
            }
          }

          if (i.canvas) {
            tintRaster(i, isBefore);
          }
        });
      }

      const paperCenter = getPaperCenter(); // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L277-L287

      if (typeof rotationCenterX !== "undefined" && typeof rotationCenterY !== "undefined") {
        let rotationPoint = new paper.Point(rotationCenterX, rotationCenterY);

        if (viewBox && viewBox.length >= 2 && !isNaN(viewBox[0]) && !isNaN(viewBox[1])) {
          rotationPoint = rotationPoint.subtract(viewBox[0], viewBox[1]);
        }

        root.translate(paperCenter.subtract(rotationPoint.multiply(2)));
      } else {
        root.translate(paperCenter.subtract(root.bounds.width, root.bounds.height));
      }

      return rasterizeVector(root);
    };

    paper.project.importSVG(asset, {
      expandShapes: true,
      insert: false,
      onLoad: root => {
        if (!root) {
          reject(new Error("could not load onion skin"));
          return;
        }

        resolve(waitForAllRastersToLoad(root).then(() => handleLoad(root)));
      }
    });
  });

  const makeRasterOnion = (opacity, costume, asset, isBefore) => new Promise((resolve, reject) => {
    let {
      rotationCenterX,
      rotationCenterY
    } = costume;
    const image = new Image();

    image.onload = () => {
      const paperCenter = getPaperCenter();
      const width = Math.min(paperCenter.x * 2, image.width);
      const height = Math.min(paperCenter.y * 2, image.height); // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L151-L156

      if (typeof rotationCenterX === "undefined") {
        rotationCenterX = width / 2;
      }

      if (typeof rotationCenterY === "undefined") {
        rotationCenterY = height / 2;
      }

      const raster = new paper.Raster(image);
      raster.opacity = opacity;
      raster.guide = true;
      raster.locked = true;
      const x = width / 2 + (paperCenter.x - rotationCenterX);
      const y = height / 2 + (paperCenter.y - rotationCenterY);
      raster.position = new paper.Point(x, y);
      raster.remove();

      if (settings.mode === "tint") {
        tintRaster(raster, isBefore);
      }

      resolve(raster);
    };

    image.onerror = () => {
      reject(new Error("could not load image"));
    };

    image.src = asset;
  });

  const getSelectedCostumeIndex = () => {
    const item = document.querySelector("[class*='selector_list-item'][class*='sprite-selector-item_is-selected']");
    if (!item) return -1;
    const numberEl = item.querySelector("[class*='sprite-selector-item_number']");
    if (!numberEl) return -1;
    return +numberEl.textContent - 1;
  };

  const updateOnionLayers = async () => {
    const project = paper.project;

    if (!project) {
      return;
    }

    const selectedCostumeIndex = getSelectedCostumeIndex();

    if (selectedCostumeIndex === -1) {
      return;
    }

    removeOnionLayers();
    const localUpdateId = cancelOngoingUpdatesAndGetNewId();
    const vm = addon.tab.traps.vm;

    if (!vm) {
      return;
    }

    const originalActiveLayer = project.activeLayer;
    const costumes = vm.editingTarget.sprite.costumes;
    const startIndex = Math.max(0, selectedCostumeIndex - settings.previous);
    const endIndex = Math.min(costumes.length - 1, selectedCostumeIndex + settings.next);

    try {
      const layersToCreate = [];

      for (let i = startIndex; i <= endIndex; i++) {
        if (i === selectedCostumeIndex) {
          continue;
        }

        const isBefore = i < selectedCostumeIndex;
        const distance = Math.abs(i - selectedCostumeIndex) - 1;
        const opacity = (settings.opacity - settings.opacityStep * distance) / 100;

        if (opacity <= 0) {
          continue;
        }

        layersToCreate.push({
          index: i,
          isBefore,
          opacity
        });
      }

      const onions = await Promise.all(layersToCreate.map(({
        index,
        isBefore,
        opacity
      }) => {
        const onionCostume = costumes[index];
        const onionAsset = vm.getCostume(index);

        if (onionCostume.dataFormat === "svg") {
          return makeVectorOnion(opacity, onionCostume, onionAsset, isBefore);
        } else if (onionCostume.dataFormat === "png" || onionCostume.dataFormat === "jpg") {
          return makeRasterOnion(opacity, onionCostume, onionAsset, isBefore);
        } else {
          throw new Error("Unknown data format: ".concat(onionCostume.dataFormat));
        }
      })); // Make sure we haven't been cancelled

      if (globalUpdateId === localUpdateId) {
        const layer = createOnionLayer();

        for (const item of onions) {
          layer.addChild(item);
        }

        relayerOnionLayers();
      }
    } catch (e) {
      console.error(e);
    } // We must make sure to always reset the active layer to avoid corruption.


    originalActiveLayer.activate();
  };

  const setEnabled = _enabled => {
    if (settings.enabled === _enabled) {
      return;
    }

    settings.enabled = _enabled;

    if (settings.enabled) {
      if (settings.next === 0 && settings.previous === 0) {
        settings.previous = 1;
        layerInputs.previous.value = settings.previous;
      }

      if (settings.opacity === 0) {
        settings.opacity = 25;
        layerInputs.opacity.value = settings.opacity;
      }

      updateOnionLayers();
    } else {
      removeOnionLayers();
    }

    toggleButton.dataset.enabled = settings.enabled;
  }; //
  // Controls below editor
  //


  const settingsChanged = onlyRelayerNeeded => {
    if (settings.previous === 0 && settings.next === 0 || settings.opacity === 0) {
      setEnabled(false);
      return;
    }

    if (settings.enabled) {
      if (onlyRelayerNeeded) {
        relayerOnionLayers();
      } else {
        updateOnionLayers();
      }
    } else if (settings.previous > 0 || settings.next > 0) {
      setEnabled(true);
    }
  };

  const createGroup = () => {
    const el = document.createElement("div");
    el.className = "sa-onion-group";
    return el;
  };

  const createButton = ({
    useButtonTag
  } = {}) => {
    const el = document.createElement(useButtonTag ? "button" : "span");
    el.className = "sa-onion-button";
    el.setAttribute("role", "button");
    return el;
  };

  const createButtonImage = name => {
    const el = document.createElement("img");
    el.className = "sa-onion-image";
    el.draggable = false;
    el.dataset.image = name;
    el.loading = "lazy";
    el.src = addon.self.getResource("/" + name + ".svg")
    /* rewritten by pull.js */
    ;
    return el;
  };

  const toggleControlsGroup = createGroup();
  addon.tab.displayNoneWhileDisabled(toggleControlsGroup, {
    display: "flex"
  });
  const toggleButton = createButton();
  toggleButton.dataset.enabled = settings.enabled;
  toggleButton.addEventListener("click", () => setEnabled(!settings.enabled));
  toggleButton.title = msg("toggle");
  toggleButton.appendChild(createButtonImage("toggle"));
  const settingButton = createButton();
  settingButton.addEventListener("click", () => setSettingsOpen(!areSettingsOpen()));
  settingButton.title = msg("settings");
  settingButton.appendChild(createButtonImage("settings")); //
  // Settings page
  //

  const settingPageWrapper = document.createElement("div");
  settingPageWrapper.className = "sa-onion-settings-wrapper";
  toggleControlsGroup.append(settingPageWrapper, toggleButton, settingButton);
  const settingsPage = document.createElement("div");
  settingsPage.className = "sa-onion-settings";

  const setSettingsOpen = open => {
    settingButton.dataset.enabled = open;
    settingsPage.dataset.visible = open;
  };

  const areSettingsOpen = () => settingsPage.dataset.visible === "true";

  const layerInputs = {};

  for (const type of ["previous", "next", "opacity", "opacityStep"]) {
    const container = document.createElement("label");
    container.className = "sa-onion-settings-line";
    const label = document.createElement("div");
    label.className = "sa-onion-settings-label";
    label.textContent = msg(type);
    container.appendChild(label);
    const group = createGroup();
    const currentButton = createButton();
    const filler = document.createElement("div");
    filler.style.width = "20px";
    currentButton.appendChild(filler);
    const currentInput = document.createElement("input");
    layerInputs[type] = currentInput;
    currentInput.className = "sa-onion-settings-input";
    currentInput.type = "number";
    currentInput.step = "1";
    currentInput.min = "0";
    currentInput.max = "100";
    currentInput.value = settings[type];
    currentInput.addEventListener("input", e => {
      if (currentInput.value.length === 0) {
        settings[type] = 0;
        settingsChanged();
        return;
      }

      let value = +currentInput.value;

      if (value > +currentInput.max) {
        value = +currentInput.max;
      } else if (value < 0) {
        value = 0;
      }

      currentInput.value = value;
      settings[type] = value;
      settingsChanged();
    });
    currentInput.addEventListener("blur", () => {
      if (!currentInput.value) {
        currentInput.value = "0";
      }
    });
    currentButton.appendChild(currentInput);
    const decrementButton = createButton();
    decrementButton.appendChild(createButtonImage("decrement"));
    decrementButton.addEventListener("click", () => {
      if (settings[type] > 0) {
        settings[type]--;
        currentInput.value = settings[type];
        settingsChanged();
      }
    });
    const incrementButton = createButton();
    incrementButton.appendChild(createButtonImage("increment"));
    incrementButton.addEventListener("click", () => {
      if (settings[type] < +currentInput.max) {
        settings[type]++;
        currentInput.value = settings[type];
        settingsChanged();
      }
    });
    group.appendChild(decrementButton);
    group.appendChild(currentButton);
    group.appendChild(incrementButton);
    container.appendChild(group);
    settingsPage.appendChild(container);
  }

  const modeContainer = document.createElement("div");
  modeContainer.className = "sa-onion-settings-line";
  const modeLabel = document.createElement("div");
  modeLabel.className = "sa-onion-settings-label";
  modeLabel.textContent = msg("mode");
  const modeGroup = createGroup();
  modeContainer.appendChild(modeLabel);
  const modeMergeButton = createButton({
    useButtonTag: true
  });
  modeMergeButton.appendChild(document.createTextNode(msg("merge")));
  modeGroup.appendChild(modeMergeButton);
  modeMergeButton.addEventListener("click", e => {
    settings.mode = "merge";
    modeTintButton.dataset.enabled = false;
    modeMergeButton.dataset.enabled = true;
    settingsChanged();
  });
  modeMergeButton.dataset.enabled = settings.mode === "merge";
  const modeTintButton = createButton({
    useButtonTag: true
  });
  modeTintButton.appendChild(document.createTextNode(msg("tint")));
  modeGroup.appendChild(modeTintButton);
  modeTintButton.addEventListener("click", e => {
    settings.mode = "tint";
    modeTintButton.dataset.enabled = true;
    modeMergeButton.dataset.enabled = false;
    settingsChanged();
  });
  modeTintButton.dataset.enabled = settings.mode === "tint";
  modeContainer.appendChild(modeGroup);
  settingsPage.appendChild(modeContainer);
  const layeringContainer = document.createElement("div");
  layeringContainer.className = "sa-onion-settings-line";
  const layeringLabel = document.createElement("div");
  layeringLabel.className = "sa-onion-settings-label";
  layeringLabel.textContent = msg("layering");
  const layeringGroup = createGroup();
  layeringContainer.appendChild(layeringLabel);
  const layeringFrontButton = createButton({
    useButtonTag: true
  });
  layeringFrontButton.appendChild(document.createTextNode(msg("front")));
  layeringGroup.appendChild(layeringFrontButton);
  layeringFrontButton.addEventListener("click", e => {
    settings.layering = "front";
    layeringBehindButton.dataset.enabled = false;
    layeringFrontButton.dataset.enabled = true;
    settingsChanged(true);
  });
  layeringFrontButton.dataset.enabled = settings.layering === "front";
  const layeringBehindButton = createButton({
    useButtonTag: true
  });
  layeringBehindButton.appendChild(document.createTextNode(msg("behind")));
  layeringGroup.appendChild(layeringBehindButton);
  layeringBehindButton.addEventListener("click", e => {
    settings.layering = "behind";
    layeringBehindButton.dataset.enabled = true;
    layeringFrontButton.dataset.enabled = false;
    settingsChanged(true);
  });
  layeringBehindButton.dataset.enabled = settings.layering === "behind";
  layeringContainer.appendChild(layeringGroup);
  settingsPage.appendChild(layeringContainer);
  const SVG_NS = "http://www.w3.org/2000/svg";
  const settingsTip = document.createElementNS(SVG_NS, "svg");
  settingsTip.setAttribute("class", "sa-onion-settings-tip");
  settingsTip.setAttribute("width", "14");
  settingsTip.setAttribute("height", "7");
  const settingsTipShape = document.createElementNS(SVG_NS, "polygon");
  settingsTipShape.setAttribute("class", "sa-onion-settings-polygon");
  settingsTipShape.setAttribute("points", "0,0 7,7, 14,0");
  settingsTip.appendChild(settingsTipShape);
  settingsPage.appendChild(settingsTip);
  let oldEnabled = null;
  addon.self.addEventListener("disabled", () => {
    setSettingsOpen(false);
    oldEnabled = settings.enabled;
    setEnabled(false);
  });
  addon.self.addEventListener("reenabled", () => {
    setEnabled(oldEnabled);
  });

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
        element: toggleControlsGroup,
        order: 1
      });
      settingPageWrapper.appendChild(settingsPage);

      if (!hasRunOnce) {
        hasRunOnce = true;
        const groupClass = zoomControlsContainer.firstChild.className;
        const buttonClass = zoomControlsContainer.firstChild.firstChild.className;
        const imageClass = zoomControlsContainer.firstChild.firstChild.firstChild.className;

        for (const el of document.querySelectorAll(".sa-onion-group")) {
          el.className += " " + groupClass;
        }

        for (const el of document.querySelectorAll(".sa-onion-button")) {
          el.className += " " + buttonClass;
        }

        for (const el of document.querySelectorAll(".sa-onion-image")) {
          el.className += " " + imageClass;
        }
      }

      if (settings.enabled) {
        updateOnionLayers();
      }
    }
  };

  injectPaper();
  injectPaperCanvas();
  controlsLoop();
});

/***/ }),

/***/ "./src/addons/addons/pick-colors-from-stage/_runtime_entry.js":
/*!********************************************************************!*\
  !*** ./src/addons/addons/pick-colors-from-stage/_runtime_entry.js ***!
  \********************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/pick-colors-from-stage/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/pick-colors-from-stage/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/pick-colors-from-stage/userscript.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/pick-colors-from-stage/userscript.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  msg,
  console
}) {
  const brand = Symbol();

  const setIsPicking = picking => document.body.classList.toggle("sa-stage-color-picker-picking", picking); // We only want to handle color picker events from the user clicking on the button, not from
  // addons or other scripts pressing it with click().


  let isMostRecentClickUserInitiated = false;
  document.addEventListener("click", e => {
    isMostRecentClickUserInitiated = e.isTrusted;
  }, {
    capture: true
  });
  addon.tab.redux.initialize();
  addon.tab.redux.addEventListener("statechanged", e => {
    const action = e.detail.action; // Do not process events emitted by ourselves.

    if (action[brand]) {
      return;
    }

    if (!addon.self.disabled && isMostRecentClickUserInitiated && action.type === "scratch-paint/eye-dropper/ACTIVATE_COLOR_PICKER") {
      setIsPicking(true); // When scratch-paint's color picker is activated, also activate scratch-gui's color picker.

      addon.tab.redux.dispatch({
        type: "scratch-gui/color-picker/ACTIVATE_COLOR_PICKER",
        callback: color => {
          // callback is called from reducer; do not dispatch events in reducer
          queueMicrotask(() => {
            // By the time we get here, scratch-paint will have already deactivated its eye dropper.
            // If we were to just call the callback, the color would indeed update, but the sliders
            // in the color selector would not update.
            // https://github.com/LLK/scratch-paint/blob/970b72c3e75d0ad44ab54e403a44786ca5f45512/src/containers/color-picker.jsx#L64
            // To work around this, we will re-enable the color picker before running the callback.
            addon.tab.redux.dispatch(_objectSpread(_objectSpread({}, action), {}, {
              [brand]: true
            }));
            action.callback(color);

            if (action.previousMode) {
              action.previousMode.activate();
            }

            addon.tab.redux.dispatch({
              type: "scratch-paint/eye-dropper/DEACTIVATE_COLOR_PICKER",
              [brand]: true
            });
            setIsPicking(false);
          });
        }
      });
    } // Don't check for addon being disabled here in case we were dynamically disabled while color
    // picking. This code won't do anything anyways when the previous code doesn't run.


    if (action.type === "scratch-paint/eye-dropper/DEACTIVATE_COLOR_PICKER") {
      setIsPicking(false); // When someone selects a color in the scratch-paint picker, cancel the scratch-gui picker

      if (addon.tab.redux.state.scratchGui.colorPicker.active) {
        addon.tab.redux.dispatch({
          type: "scratch-gui/color-picker/DEACTIVATE_COLOR_PICKER",
          [brand]: true
        });
      }
    }
  });
});

/***/ }),

/***/ "./src/addons/addons/rename-broadcasts/_runtime_entry.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/rename-broadcasts/_runtime_entry.js ***!
  \***************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/rename-broadcasts/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/rename-broadcasts/userscript.js":
/*!***********************************************************!*\
  !*** ./src/addons/addons/rename-broadcasts/userscript.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  msg,
  console
}) {
  const vm = addon.tab.traps.vm;
  const Blockly = await addon.tab.traps.getBlockly(); // editor-searchable-dropdowns relies on this value

  const RENAME_BROADCAST_MESSAGE_ID = "RENAME_BROADCAST_MESSAGE_ID";
  const BROADCAST_MESSAGE_TYPE = Blockly.BROADCAST_MESSAGE_VARIABLE_TYPE;
  const _dropdownCreate = Blockly.FieldVariable.dropdownCreate;

  Blockly.FieldVariable.dropdownCreate = function () {
    const options = _dropdownCreate.call(this);

    if (!addon.self.disabled && this.defaultType_ === BROADCAST_MESSAGE_TYPE && // Disable when workspace has no actual broadcast to rename
    this.sourceBlock_.workspace.getVariableTypes().includes("broadcast_msg")) {
      options.push([msg("RENAME_BROADCAST"), RENAME_BROADCAST_MESSAGE_ID]);
    }

    return options;
  };

  const _onItemSelected = Blockly.FieldVariable.prototype.onItemSelected;

  Blockly.FieldVariable.prototype.onItemSelected = function (menu, menuItem) {
    const workspace = this.sourceBlock_.workspace;

    if (this.sourceBlock_ && workspace) {
      if (menuItem.getValue() === RENAME_BROADCAST_MESSAGE_ID) {
        promptRenameBroadcast(workspace, this.variable_);
        return;
      }
    }

    return _onItemSelected.call(this, menu, menuItem);
  };

  const resetVMCaches = () => {
    const blockContainers = new Set(vm.runtime.targets.map(i => i.blocks));

    for (const blocks of blockContainers) {
      blocks.resetCache();
    }
  };

  const addUndoRedoHook = callback => {
    const eventQueue = Blockly.Events.FIRE_QUEUE_; // After a rename is emitted, some unrelated garbage events also get emitted
    // So we should trap the first event

    const undoItem = eventQueue[0];
    const originalRun = undoItem.run;

    undoItem.run = function (isRedo) {
      originalRun.call(this, isRedo);
      callback(isRedo);
    };
  };

  const renameBroadcastInVM = (id, newName) => {
    // Editor's rename won't completely rename the variable.
    const vmVariable = vm.runtime.getTargetForStage().variables[id];
    vmVariable.name = newName;
    vmVariable.value = newName; // Update all references to the broadcast. Broadcasts won't work if these
    // don't match.

    const blockContainers = new Set(vm.runtime.targets.map(i => i.blocks));

    for (const blockContainer of blockContainers) {
      for (const block of Object.values(blockContainer._blocks)) {
        const broadcastOption = block.fields && block.fields.BROADCAST_OPTION;

        if (broadcastOption && broadcastOption.id === id) {
          broadcastOption.value = newName;
        }
      }
    }

    resetVMCaches();
  };

  const renameBroadcast = (workspace, id, oldName, newName) => {
    // Rename in editor. Undo/redo will work automatically.
    workspace.renameVariableById(id, newName); // Rename in VM. Need to manually implement undo/redo.

    renameBroadcastInVM(id, newName);
    addUndoRedoHook(isRedo => {
      if (isRedo) {
        renameBroadcastInVM(id, newName);
      } else {
        renameBroadcastInVM(id, oldName);
      }
    });
  };

  const mergeBroadcast = (workspace, oldId, oldName, newName) => {
    const newVmVariable = vm.runtime.getTargetForStage().lookupBroadcastByInputValue(newName);
    const newId = newVmVariable.id; // Merge in editor. Undo/redo will work automatically for this.
    // Use group so that everything here is undone/redone at the same time.

    Blockly.Events.setGroup(true);

    for (const block of workspace.getAllBlocks()) {
      for (const input of block.inputList) {
        for (const field of input.fieldRow) {
          if (field.name === "BROADCAST_OPTION" && field.getValue() === oldId) {
            field.setValue(newId);
          }
        }
      }
    } // Remove the broadcast from the editor so it doesn't appear in dropdowns.
    // Undo/redo will work automatically for this.


    workspace.deleteVariableById(oldId);
    Blockly.Events.setGroup(false); // Merge in VM to update sprites that aren't open. Need to manually implement undo/redo.
    // To figure out how to undo this operation, we first figure out which blocks we're
    // going to touch and keep hold of that list.

    const vmBlocksToUpdate = [];
    const blockContainers = new Set(vm.runtime.targets.map(i => i.blocks));

    for (const blockContainer of blockContainers) {
      for (const block of Object.values(blockContainer._blocks)) {
        const broadcastOption = block.fields && block.fields.BROADCAST_OPTION;

        if (broadcastOption && broadcastOption.id === oldId) {
          vmBlocksToUpdate.push(block);
        }
      }
    }

    const applyVmEdits = isRedo => {
      const idToReplaceWith = isRedo ? newId : oldId;
      const nameToReplaceWith = isRedo ? newName : oldName;

      for (const block of vmBlocksToUpdate) {
        const broadcastOption = block.fields.BROADCAST_OPTION;
        broadcastOption.id = idToReplaceWith;
        broadcastOption.value = nameToReplaceWith;
      }

      resetVMCaches();
    };

    applyVmEdits(true); // Earlier editor updates are guaranteed to generate at least 1 event that we can hook as the
    // broadcast block must exist in the editor for the user to rename it.

    addUndoRedoHook(isRedo => {
      applyVmEdits(isRedo);
    });
  };

  const promptRenameBroadcast = (workspace, variable) => {
    const modalTitle = msg("RENAME_BROADCAST_MODAL_TITLE");
    const oldName = variable.name;
    const id = variable.getId();
    const promptText = msg("RENAME_BROADCAST_TITLE", {
      name: oldName
    });
    const promptDefaultText = oldName;
    Blockly.prompt(promptText, promptDefaultText, function (newName) {
      newName = Blockly.Variables.trimName_(newName);
      const nameIsEmpty = !newName;

      if (nameIsEmpty) {
        return;
      }

      const variableAlreadyExists = !!workspace.getVariable(newName, BROADCAST_MESSAGE_TYPE);

      if (variableAlreadyExists) {
        mergeBroadcast(workspace, id, oldName, newName);
      } else {
        renameBroadcast(workspace, id, oldName, newName);
      }
    }, modalTitle, BROADCAST_MESSAGE_TYPE);
  };

  const updateExistingMenuGenerators = () => {
    const workspace = Blockly.getMainWorkspace();
    const flyout = workspace && workspace.getFlyout();

    if (workspace && flyout) {
      const allBlocks = [...workspace.getAllBlocks(), ...flyout.getWorkspace().getAllBlocks()];

      for (const block of allBlocks) {
        for (const input of block.inputList) {
          for (const field of input.fieldRow) {
            if (field instanceof Blockly.FieldVariable) {
              field.menuGenerator_ = Blockly.FieldVariable.dropdownCreate;
            }
          }
        }
      }
    }
  };

  updateExistingMenuGenerators();
});

/***/ }),

/***/ "./src/addons/libraries/common/cs/normalize-color.js":
/*!***********************************************************!*\
  !*** ./src/addons/libraries/common/cs/normalize-color.js ***!
  \***********************************************************/
/*! exports provided: getHexRegex, normalizeHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHexRegex", function() { return getHexRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHex", function() { return normalizeHex; });
const getHexRegex = () => /^#?[0-9a-fA-F]{3,8}$/;
const normalizeHex = input => {
  let hex = String(input);
  if (!getHexRegex().test(hex)) return "#000000";
  if (!hex.startsWith("#")) hex = "#".concat(hex);

  if (hex.length === 4) {
    const [_, r, g, b] = hex;
    hex = "#".concat(r).concat(r).concat(g).concat(g).concat(b).concat(b);
  }

  return hex.toLowerCase();
};

/***/ }),

/***/ "./src/addons/libraries/common/cs/rate-limiter.js":
/*!********************************************************!*\
  !*** ./src/addons/libraries/common/cs/rate-limiter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RateLimiter; });
class RateLimiter {
  constructor(wait) {
    this.timeout = null;
    this.callback = null;
    this.wait = wait;
  }

  abort(call = true) {
    if (this.timeout) {
      clearTimeout(this.timeout);
      if (call) this.callback();
      this.timeout = this.callback = null;
    }
  }

  limit(callback) {
    this.abort(false);
    this.callback = callback;
    this.timeout = setTimeout(() => {
      this.timeout = this.callback = null;
      callback();
    }, this.wait);
  }

}

/***/ }),

/***/ "./src/addons/libraries/thirdparty/cs/tinycolor-min.js":
/*!*************************************************************!*\
  !*** ./src/addons/libraries/thirdparty/cs/tinycolor-min.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// TinyColor v1.4.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License
// Modified to use ES6 export
const tinycolor = function (Math) {
  var trimLeft = /^\s+/,
      trimRight = /\s+$/,
      tinyCounter = 0,
      mathRound = Math.round,
      mathMin = Math.min,
      mathMax = Math.max,
      mathRandom = Math.random;

  function tinycolor(color, opts) {
    color = color ? color : '';
    opts = opts || {}; // If input is already a tinycolor, return itself

    if (color instanceof tinycolor) {
      return color;
    } // If we are called as a function, call using new instead


    if (!(this instanceof tinycolor)) {
      return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = mathRound(100 * this._a) / 100, this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType; // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`

    if (this._r < 1) {
      this._r = mathRound(this._r);
    }

    if (this._g < 1) {
      this._g = mathRound(this._g);
    }

    if (this._b < 1) {
      this._b = mathRound(this._b);
    }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
  }

  tinycolor.prototype = {
    isDark: function isDark() {
      return this.getBrightness() < 128;
    },
    isLight: function isLight() {
      return !this.isDark();
    },
    isValid: function isValid() {
      return this._ok;
    },
    getOriginalInput: function getOriginalInput() {
      return this._originalInput;
    },
    getFormat: function getFormat() {
      return this._format;
    },
    getAlpha: function getAlpha() {
      return this._a;
    },
    getBrightness: function getBrightness() {
      //http://www.w3.org/TR/AERT#color-contrast
      var rgb = this.toRgb();
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function getLuminance() {
      //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
      var rgb = this.toRgb();
      var RsRGB, GsRGB, BsRGB, R, G, B;
      RsRGB = rgb.r / 255;
      GsRGB = rgb.g / 255;
      BsRGB = rgb.b / 255;

      if (RsRGB <= 0.03928) {
        R = RsRGB / 12.92;
      } else {
        R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
      }

      if (GsRGB <= 0.03928) {
        G = GsRGB / 12.92;
      } else {
        G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
      }

      if (BsRGB <= 0.03928) {
        B = BsRGB / 12.92;
      } else {
        B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
      }

      return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    },
    setAlpha: function setAlpha(value) {
      this._a = boundAlpha(value);
      this._roundA = mathRound(100 * this._a) / 100;
      return this;
    },
    toHsv: function toHsv() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      return {
        h: hsv.h * 360,
        s: hsv.s,
        v: hsv.v,
        a: this._a
      };
    },
    toHsvString: function toHsvString() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      var h = mathRound(hsv.h * 360),
          s = mathRound(hsv.s * 100),
          v = mathRound(hsv.v * 100);
      return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
    },
    toHsl: function toHsl() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      return {
        h: hsl.h * 360,
        s: hsl.s,
        l: hsl.l,
        a: this._a
      };
    },
    toHslString: function toHslString() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      var h = mathRound(hsl.h * 360),
          s = mathRound(hsl.s * 100),
          l = mathRound(hsl.l * 100);
      return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
    },
    toHex: function toHex(allow3Char) {
      return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function toHexString(allow3Char) {
      return '#' + this.toHex(allow3Char);
    },
    toHex8: function toHex8(allow4Char) {
      return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function toHex8String(allow4Char) {
      return '#' + this.toHex8(allow4Char);
    },
    toRgb: function toRgb() {
      return {
        r: mathRound(this._r),
        g: mathRound(this._g),
        b: mathRound(this._b),
        a: this._a
      };
    },
    toRgbString: function toRgbString() {
      return this._a == 1 ? "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" : "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function toPercentageRgb() {
      return {
        r: mathRound(bound01(this._r, 255) * 100) + "%",
        g: mathRound(bound01(this._g, 255) * 100) + "%",
        b: mathRound(bound01(this._b, 255) * 100) + "%",
        a: this._a
      };
    },
    toPercentageRgbString: function toPercentageRgbString() {
      return this._a == 1 ? "rgb(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" : "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function toName() {
      if (this._a === 0) {
        return "transparent";
      }

      if (this._a < 1) {
        return false;
      }

      return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function toFilter(secondColor) {
      var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
      var secondHex8String = hex8String;
      var gradientType = this._gradientType ? "GradientType = 1, " : "";

      if (secondColor) {
        var s = tinycolor(secondColor);
        secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
      }

      return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
    },
    toString: function toString(format) {
      var formatSet = !!format;
      format = format || this._format;
      var formattedString = false;
      var hasAlpha = this._a < 1 && this._a >= 0;
      var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

      if (needsAlphaFormat) {
        // Special case for "transparent", all other non-alpha formats
        // will return rgba when there is transparency.
        if (format === "name" && this._a === 0) {
          return this.toName();
        }

        return this.toRgbString();
      }

      if (format === "rgb") {
        formattedString = this.toRgbString();
      }

      if (format === "prgb") {
        formattedString = this.toPercentageRgbString();
      }

      if (format === "hex" || format === "hex6") {
        formattedString = this.toHexString();
      }

      if (format === "hex3") {
        formattedString = this.toHexString(true);
      }

      if (format === "hex4") {
        formattedString = this.toHex8String(true);
      }

      if (format === "hex8") {
        formattedString = this.toHex8String();
      }

      if (format === "name") {
        formattedString = this.toName();
      }

      if (format === "hsl") {
        formattedString = this.toHslString();
      }

      if (format === "hsv") {
        formattedString = this.toHsvString();
      }

      return formattedString || this.toHexString();
    },
    clone: function clone() {
      return tinycolor(this.toString());
    },
    _applyModification: function _applyModification(fn, args) {
      var color = fn.apply(null, [this].concat([].slice.call(args)));
      this._r = color._r;
      this._g = color._g;
      this._b = color._b;
      this.setAlpha(color._a);
      return this;
    },
    lighten: function lighten() {
      return this._applyModification(_lighten, arguments);
    },
    brighten: function brighten() {
      return this._applyModification(_brighten, arguments);
    },
    darken: function darken() {
      return this._applyModification(_darken, arguments);
    },
    desaturate: function desaturate() {
      return this._applyModification(_desaturate, arguments);
    },
    saturate: function saturate() {
      return this._applyModification(_saturate, arguments);
    },
    greyscale: function greyscale() {
      return this._applyModification(_greyscale, arguments);
    },
    spin: function spin() {
      return this._applyModification(_spin, arguments);
    },
    _applyCombination: function _applyCombination(fn, args) {
      return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function analogous() {
      return this._applyCombination(_analogous, arguments);
    },
    complement: function complement() {
      return this._applyCombination(_complement, arguments);
    },
    monochromatic: function monochromatic() {
      return this._applyCombination(_monochromatic, arguments);
    },
    splitcomplement: function splitcomplement() {
      return this._applyCombination(_splitcomplement, arguments);
    },
    triad: function triad() {
      return this._applyCombination(_triad, arguments);
    },
    tetrad: function tetrad() {
      return this._applyCombination(_tetrad, arguments);
    }
  }; // If input is an object, force 1 into "1.0" to handle ratios properly
  // String input requires "1.0" as input, so 1 will be treated as 1

  tinycolor.fromRatio = function (color, opts) {
    if (typeof color == "object") {
      var newColor = {};

      for (var i in color) {
        if (color.hasOwnProperty(i)) {
          if (i === "a") {
            newColor[i] = color[i];
          } else {
            newColor[i] = convertToPercentage(color[i]);
          }
        }
      }

      color = newColor;
    }

    return tinycolor(color, opts);
  }; // Given a string or object, convert that input to RGB
  // Possible string inputs:
  //
  //     "red"
  //     "#f00" or "f00"
  //     "#ff0000" or "ff0000"
  //     "#ff000000" or "ff000000"
  //     "rgb 255 0 0" or "rgb (255, 0, 0)"
  //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
  //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
  //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
  //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
  //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
  //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
  //


  function inputToRGB(color) {
    var rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
      color = stringInputToObject(color);
    }

    if (typeof color == "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s = convertToPercentage(color.s);
        v = convertToPercentage(color.v);
        rgb = hsvToRgb(color.h, s, v);
        ok = true;
        format = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s = convertToPercentage(color.s);
        l = convertToPercentage(color.l);
        rgb = hslToRgb(color.h, s, l);
        ok = true;
        format = "hsl";
      }

      if (color.hasOwnProperty("a")) {
        a = color.a;
      }
    }

    a = boundAlpha(a);
    return {
      ok: ok,
      format: color.format || format,
      r: mathMin(255, mathMax(rgb.r, 0)),
      g: mathMin(255, mathMax(rgb.g, 0)),
      b: mathMin(255, mathMax(rgb.b, 0)),
      a: a
    };
  } // Conversion Functions
  // --------------------
  // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
  // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
  // `rgbToRgb`
  // Handle bounds / percentage checking to conform to CSS color spec
  // <http://www.w3.org/TR/css3-color/>
  // *Assumes:* r, g, b in [0, 255] or [0, 1]
  // *Returns:* { r, g, b } in [0, 255]


  function rgbToRgb(r, g, b) {
    return {
      r: bound01(r, 255) * 255,
      g: bound01(g, 255) * 255,
      b: bound01(b, 255) * 255
    };
  } // `rgbToHsl`
  // Converts an RGB color value to HSL.
  // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
  // *Returns:* { h, s, l } in [0,1]


  function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = mathMax(r, g, b),
        min = mathMin(r, g, b);
    var h,
        s,
        l = (max + min) / 2;

    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return {
      h: h,
      s: s,
      l: l
    };
  } // `hslToRgb`
  // Converts an HSL color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]


  function hslToRgb(h, s, l) {
    var r, g, b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  } // `rgbToHsv`
  // Converts an RGB color value to HSV
  // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
  // *Returns:* { h, s, v } in [0,1]


  function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = mathMax(r, g, b),
        min = mathMin(r, g, b);
    var h,
        s,
        v = max;
    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max == min) {
      h = 0; // achromatic
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return {
      h: h,
      s: s,
      v: v
    };
  } // `hsvToRgb`
  // Converts an HSV color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]


  function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];
    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  } // `rgbToHex`
  // Converts an RGB color to hex
  // Assumes r, g, and b are contained in the set [0, 255]
  // Returns a 3 or 6 character hex


  function rgbToHex(r, g, b, allow3Char) {
    var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))]; // Return a 3 character hex if possible

    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
  } // `rgbaToHex`
  // Converts an RGBA color plus alpha transparency to hex
  // Assumes r, g, b are contained in the set [0, 255] and
  // a in [0, 1]. Returns a 4 or 8 character rgba hex


  function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16)), pad2(convertDecimalToHex(a))]; // Return a 4 character hex if possible

    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
  } // `rgbaToArgbHex`
  // Converts an RGBA color to an ARGB Hex8 string
  // Rarely used, but required for "toFilter()"


  function rgbaToArgbHex(r, g, b, a) {
    var hex = [pad2(convertDecimalToHex(a)), pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))];
    return hex.join("");
  } // `equals`
  // Can be called with any tinycolor input


  tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) {
      return false;
    }

    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
  };

  tinycolor.random = function () {
    return tinycolor.fromRatio({
      r: mathRandom(),
      g: mathRandom(),
      b: mathRandom()
    });
  }; // Modification Functions
  // ----------------------
  // Thanks to less.js for some of the basics here
  // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>


  function _desaturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }

  function _saturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }

  function _greyscale(color) {
    return tinycolor(color).desaturate(100);
  }

  function _lighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  }

  function _brighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * -(amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * -(amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * -(amount / 100))));
    return tinycolor(rgb);
  }

  function _darken(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  } // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
  // Values outside of this range will be wrapped into this range.


  function _spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
  } // Combination Functions
  // ---------------------
  // Thanks to jQuery xColor for some of the ideas behind these
  // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>


  function _complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
  }

  function _triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 120) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 240) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }

  function _tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 90) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 180) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 270) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }

  function _splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 72) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 216) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }

  function _analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;
    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(tinycolor(hsl));
    }

    return ret;
  }

  function _monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h,
        s = hsv.s,
        v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
      ret.push(tinycolor({
        h: h,
        s: s,
        v: v
      }));
      v = (v + modification) % 1;
    }

    return ret;
  } // Utility Functions
  // ---------------------


  tinycolor.mix = function (color1, color2, amount) {
    amount = amount === 0 ? 0 : amount || 50;
    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return tinycolor(rgba);
  }; // Readability Functions
  // ---------------------
  // <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)
  // `contrast`
  // Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)


  tinycolor.readability = function (color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
  }; // `isReadable`
  // Ensure that foreground and background color combinations meet WCAG2 guidelines.
  // The third argument is an optional Object.
  //      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
  //      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
  // If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.
  // *Example*
  //    tinycolor.isReadable("#000", "#111") => false
  //    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false


  tinycolor.isReadable = function (color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;
    out = false;
    wcag2Parms = validateWCAG2Parms(wcag2);

    switch (wcag2Parms.level + wcag2Parms.size) {
      case "AAsmall":
      case "AAAlarge":
        out = readability >= 4.5;
        break;

      case "AAlarge":
        out = readability >= 3;
        break;

      case "AAAsmall":
        out = readability >= 7;
        break;
    }

    return out;
  }; // `mostReadable`
  // Given a base color and a list of possible foreground or background
  // colors for that base, returns the most readable color.
  // Optionally returns Black or White if the most readable color is unreadable.
  // *Example*
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"


  tinycolor.mostReadable = function (baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors;
    level = args.level;
    size = args.size;

    for (var i = 0; i < colorList.length; i++) {
      readability = tinycolor.readability(baseColor, colorList[i]);

      if (readability > bestScore) {
        bestScore = readability;
        bestColor = tinycolor(colorList[i]);
      }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {
      "level": level,
      "size": size
    }) || !includeFallbackColors) {
      return bestColor;
    } else {
      args.includeFallbackColors = false;
      return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
    }
  }; // Big List of Colors
  // ------------------
  // <http://www.w3.org/TR/css3-color/#svg-color>


  var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
  }; // Make it easy to access colors via `hexNames[hex]`

  var hexNames = tinycolor.hexNames = flip(names); // Utilities
  // ---------
  // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`

  function flip(o) {
    var flipped = {};

    for (var i in o) {
      if (o.hasOwnProperty(i)) {
        flipped[o[i]] = i;
      }
    }

    return flipped;
  } // Return a valid alpha value [0,1] with all invalid values being set to 1


  function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
      a = 1;
    }

    return a;
  } // Take input from [0, n] and return it as [0, 1]


  function bound01(n, max) {
    if (isOnePointZero(n)) {
      n = "100%";
    }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n))); // Automatically convert percentage into number

    if (processPercent) {
      n = parseInt(n * max, 10) / 100;
    } // Handle floating point rounding errors


    if (Math.abs(n - max) < 0.000001) {
      return 1;
    } // Convert into [0, 1] range if it isn't already


    return n % max / parseFloat(max);
  } // Force a number between 0 and 1


  function clamp01(val) {
    return mathMin(1, mathMax(0, val));
  } // Parse a base-16 hex value into a base-10 integer


  function parseIntFromHex(val) {
    return parseInt(val, 16);
  } // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
  // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>


  function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
  } // Check to see if string passed in is a percentage


  function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
  } // Force a hex value to have 2 characters


  function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
  } // Replace a decimal with it's percentage value


  function convertToPercentage(n) {
    if (n <= 1) {
      n = n * 100 + "%";
    }

    return n;
  } // Converts a decimal to a hex value


  function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
  } // Converts a hex value to a decimal


  function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
  }

  var matchers = function () {
    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?"; // <http://www.w3.org/TR/css3-values/#number-value>

    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?"; // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.

    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")"; // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren

    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    return {
      CSS_UNIT: new RegExp(CSS_UNIT),
      rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
      rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
      hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
      hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
      hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
      hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
  }(); // `isValidCSSUnit`
  // Take in a single string / number and check to see if it looks like a CSS unit
  // (see `matchers` above for definition).


  function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
  } // `stringInputToObject`
  // Permissive string parsing.  Take in a number of formats, and output an object
  // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`


  function stringInputToObject(color) {
    color = color.replace(trimLeft, '').replace(trimRight, '').toLowerCase();
    var named = false;

    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color == 'transparent') {
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
      };
    } // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.


    var match;

    if (match = matchers.rgb.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3]
      };
    }

    if (match = matchers.rgba.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3],
        a: match[4]
      };
    }

    if (match = matchers.hsl.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3]
      };
    }

    if (match = matchers.hsla.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3],
        a: match[4]
      };
    }

    if (match = matchers.hsv.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3]
      };
    }

    if (match = matchers.hsva.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3],
        a: match[4]
      };
    }

    if (match = matchers.hex8.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        a: convertHexToDecimal(match[4]),
        format: named ? "name" : "hex8"
      };
    }

    if (match = matchers.hex6.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        format: named ? "name" : "hex"
      };
    }

    if (match = matchers.hex4.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + '' + match[1]),
        g: parseIntFromHex(match[2] + '' + match[2]),
        b: parseIntFromHex(match[3] + '' + match[3]),
        a: convertHexToDecimal(match[4] + '' + match[4]),
        format: named ? "name" : "hex8"
      };
    }

    if (match = matchers.hex3.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + '' + match[1]),
        g: parseIntFromHex(match[2] + '' + match[2]),
        b: parseIntFromHex(match[3] + '' + match[3]),
        format: named ? "name" : "hex"
      };
    }

    return false;
  }

  function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {
      "level": "AA",
      "size": "small"
    };
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();

    if (level !== "AA" && level !== "AAA") {
      level = "AA";
    }

    if (size !== "small" && size !== "large") {
      size = "small";
    }

    return {
      "level": level,
      "size": size
    };
  }
  /*// Node: Export function
  if (typeof module !== "undefined" && module.exports) {
      module.exports = tinycolor;
  }
  // AMD/requirejs: Define the module
  else if (typeof define === 'function' && define.amd) {
      define(function () {return tinycolor;});
  }
  // Browser: Expose to window
  else {
      window.tinycolor = tinycolor;
  }*/


  return tinycolor;
}(Math);

/* harmony default export */ __webpack_exports__["default"] = (tinycolor);

/***/ })

}]);
//# sourceMappingURL=addon-default-entry.js.map