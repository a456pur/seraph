var GUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"editor": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"addons":"addons","iframe-extension-worker":"iframe-extension-worker","library-backdrops":"library-backdrops","library-costumes":"library-costumes","library-sounds":"library-sounds","library-sprites":"library-sprites","sb":"sb","addon-default-entry":"addon-default-entry","addon-entry-2d-color-picker":"addon-entry-2d-color-picker","addon-entry-better-img-uploads":"addon-entry-better-img-uploads","addon-entry-block-count":"addon-entry-block-count","addon-entry-block-palette-icons":"addon-entry-block-palette-icons","addon-entry-blocks2image":"addon-entry-blocks2image","addon-entry-cat-blocks":"addon-entry-cat-blocks","addon-entry-clones":"addon-entry-clones","addon-entry-columns":"addon-entry-columns","addon-entry-custom-block-shape":"addon-entry-custom-block-shape","addon-entry-custom-block-text":"addon-entry-custom-block-text","addon-entry-custom-zoom":"addon-entry-custom-zoom","addon-entry-data-category-tweaks-v2":"addon-entry-data-category-tweaks-v2","addon-entry-debugger":"addon-entry-debugger","addon-entry-default-costume-editor-color":"addon-entry-default-costume-editor-color","addon-entry-disable-paste-offset":"addon-entry-disable-paste-offset","addon-entry-disable-stage-drag-select":"addon-entry-disable-stage-drag-select","addon-entry-editor-buttons-reverse-order":"addon-entry-editor-buttons-reverse-order","addon-entry-editor-colored-context-menus":"addon-entry-editor-colored-context-menus","addon-entry-editor-extra-keys":"addon-entry-editor-extra-keys","addon-entry-editor-sounds":"addon-entry-editor-sounds","addon-entry-editor-stage-left":"addon-entry-editor-stage-left","addon-entry-editor-stepping":"addon-entry-editor-stepping","addon-entry-editor-theme3":"addon-entry-editor-theme3","addon-entry-fullscreen":"addon-entry-fullscreen","addon-entry-gamepad":"addon-entry-gamepad","addon-entry-hide-delete-button":"addon-entry-hide-delete-button","addon-entry-hide-flyout":"addon-entry-hide-flyout","addon-entry-hide-new-variables":"addon-entry-hide-new-variables","addon-entry-hide-stage":"addon-entry-hide-stage","addon-entry-initialise-sprite-position":"addon-entry-initialise-sprite-position","addon-entry-load-extensions":"addon-entry-load-extensions","addon-entry-mediarecorder":"addon-entry-mediarecorder","addon-entry-mouse-pos":"addon-entry-mouse-pos","addon-entry-no-script-bumping":"addon-entry-no-script-bumping","addon-entry-number-pad":"addon-entry-number-pad","addon-entry-paint-by-default":"addon-entry-paint-by-default","addon-entry-paint-snap":"addon-entry-paint-snap","addon-entry-remove-curved-stage-border":"addon-entry-remove-curved-stage-border","addon-entry-remove-sprite-confirm":"addon-entry-remove-sprite-confirm","addon-entry-script-snap":"addon-entry-script-snap","addon-entry-search-sprites":"addon-entry-search-sprites","addon-entry-sprite-properties":"addon-entry-sprite-properties","addon-entry-swap-local-global":"addon-entry-swap-local-global","addon-entry-transparent-orphans":"addon-entry-transparent-orphans","addon-entry-tw-disable-cloud-variables":"addon-entry-tw-disable-cloud-variables","addon-entry-tw-disable-compiler":"addon-entry-tw-disable-compiler","addon-entry-tw-remove-backpack":"addon-entry-tw-remove-backpack","addon-entry-tw-remove-feedback":"addon-entry-tw-remove-feedback","addon-entry-tw-straighten-comments":"addon-entry-tw-straighten-comments","addon-entry-variable-manager":"addon-entry-variable-manager","addon-entry-vol-slider":"addon-entry-vol-slider","addon-entry-zebra-striping":"addon-entry-zebra-striping","addon-l10n-de":"addon-l10n-de","addon-l10n-es":"addon-l10n-es","addon-l10n-fr":"addon-l10n-fr","addon-l10n-hu":"addon-l10n-hu","addon-l10n-it":"addon-l10n-it","addon-l10n-ja":"addon-l10n-ja","addon-l10n-ko":"addon-l10n-ko","addon-l10n-nl":"addon-l10n-nl","addon-l10n-pl":"addon-l10n-pl","addon-l10n-pt":"addon-l10n-pt","addon-l10n-ro":"addon-l10n-ro","addon-l10n-ru":"addon-l10n-ru","addon-l10n-sl":"addon-l10n-sl","addon-l10n-tr":"addon-l10n-tr","addon-l10n-zh-tw":"addon-l10n-zh-tw"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/playground/editor.jsx","vendors~addon-settings~credits~editor~embed~fullscreen~player","vendors~editor~embed~fullscreen~player","addon-settings~addons~editor~fullscreen~player","editor~embed~fullscreen~player"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-cloud-variable-badge/cloud-variable-badge.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/tw-cloud-variable-badge/cloud-variable-badge.css ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #E5F0FF */ /* #E9F1FC */ /* #D9E3F2 */ /* 90% transparent version of motion-primary */ /* #FFFFFF */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 15% transparent version of black */ /* #575E75 */ /* 35% transparent version of motion-primary */ /* 15% transparent version of motion-primary */ /* opt-in theme overrides */ /* #FF661A */ /* #E64D00 */ /* #CF63CF */ /* #BD42BD */ /* #FFAB19 */ /* #FF8C1A */ /* #0FBD8C */ /* #0FBD8C */ /* #FF8C1A */ /* #FFB366 */ /* #FF8C1A */ /* 35% transparent version of extensions-primary */ /* opaque version of extensions-transparent, on white bg */ /* lighter than motion-primary */ .cloud-variable-badge_badge_2kZVK {\n    padding: 0.5rem;\n    margin: 5px 0 8px 0;\n    border: 1px solid #b9d6ff;\n    background-color: #dbebff;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    border-radius: 0.5rem;\n} [theme=\"dark\"] .cloud-variable-badge_badge_2kZVK {\n    border-color: #203652;\n    background-color: #16202c;\n} .cloud-variable-badge_title_2xJoL {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    font-weight: bold;\n} [theme=\"dark\"] .cloud-variable-badge_cloud-icon_1JP1e {\n    filter: invert(100%);\n} .cloud-variable-badge_servers_1fLAL {\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n} .cloud-variable-badge_server_3s9y9 {\n    border: 1px solid var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15));\n    padding: 0.25rem 0.5rem;\n    margin: 0;\n    background: none;\n    border-radius: 1rem;\n} .cloud-variable-badge_server_3s9y9.cloud-variable-badge_selected_3ZyWW {\n    background-color: hsla(0, 100%, 65%, 1);\n    color: hsla(0, 100%, 100%, 1);\n}\n", ""]);

// exports
exports.locals = {
	"badge": "cloud-variable-badge_badge_2kZVK",
	"title": "cloud-variable-badge_title_2xJoL",
	"cloud-icon": "cloud-variable-badge_cloud-icon_1JP1e",
	"cloudIcon": "cloud-variable-badge_cloud-icon_1JP1e",
	"servers": "cloud-variable-badge_servers_1fLAL",
	"server": "cloud-variable-badge_server_3s9y9",
	"selected": "cloud-variable-badge_selected_3ZyWW"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-description/description.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/tw-description/description.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".description_description_1iyDJ {\n    max-height: 250px;\n    overflow: auto;\n    white-space: pre-line;\n    overflow-wrap: break-word;\n    line-height: 1.5em;\n    padding: 0.5rem;\n    margin: 5px 0 8px 0;\n    border: 1px solid #b9d6ff;\n    background-color: #dbebff;\n    border-radius: 0.5rem;\n}\n\n.description_description_1iyDJ a {\n    font-weight: bold;\n    text-decoration: none;\n}\n\n[theme=\"dark\"] .description_description_1iyDJ {\n    border-color: #203652;\n    background-color: #16202c;\n}\n\n.description_header_27V8b {\n    font-weight: bold;\n    font-size: 1em;\n    margin: 0;\n    padding: 0;\n}\n\n.description_divider_3z5W7 {\n    margin-top: 8px;\n}\n\n.description_project-link_2-Z1r {\n    margin-bottom: 2px;\n}\n", ""]);

// exports
exports.locals = {
	"description": "description_description_1iyDJ",
	"header": "description_header_27V8b",
	"divider": "description_divider_3z5W7",
	"project-link": "description_project-link_2-Z1r",
	"projectLink": "description_project-link_2-Z1r"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-featured-projects/featured-projects.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/tw-featured-projects/featured-projects.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".featured-projects_container_1--ew {\n    margin-bottom: 8px;\n}\n\n.featured-projects_opener-container_1c9_H {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    opacity: 0.8;\n    color: #222;\n}\n\n.featured-projects_opener-container_1c9_H:hover {\n    opacity: 1;\n}\n\n.featured-projects_opener-content_1kqev {\n    background-color: white;\n    padding: 4px;\n    border: 1px solid black;\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);\n}\n\n.featured-projects_projects_1piAv {\n    position: relative;\n    height: 155px;\n}\n\n.featured-projects_projects_1piAv.featured-projects_transition_3TsdC {\n    transition: .2s height;\n}\n\n.featured-projects_projects_1piAv.featured-projects_opened_eLMQu {\n    height: 310px;\n}\n\n.featured-projects_footer_2fw_5 {\n    \n}\n", ""]);

// exports
exports.locals = {
	"container": "featured-projects_container_1--ew",
	"opener-container": "featured-projects_opener-container_1c9_H",
	"openerContainer": "featured-projects_opener-container_1c9_H",
	"opener-content": "featured-projects_opener-content_1kqev",
	"openerContent": "featured-projects_opener-content_1kqev",
	"projects": "featured-projects_projects_1piAv",
	"transition": "featured-projects_transition_3TsdC",
	"opened": "featured-projects_opened_eLMQu",
	"footer": "featured-projects_footer_2fw_5"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-project-input/project-input.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/tw-project-input/project-input.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #E5F0FF */ /* #E9F1FC */ /* #D9E3F2 */ /* 90% transparent version of motion-primary */ /* #FFFFFF */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 15% transparent version of black */ /* #575E75 */ /* 35% transparent version of motion-primary */ /* 15% transparent version of motion-primary */ /* opt-in theme overrides */ /* #FF661A */ /* #E64D00 */ /* #CF63CF */ /* #BD42BD */ /* #FFAB19 */ /* #FF8C1A */ /* #0FBD8C */ /* #0FBD8C */ /* #FF8C1A */ /* #FFB366 */ /* #FF8C1A */ /* 35% transparent version of extensions-primary */ /* opaque version of extensions-transparent, on white bg */ /* lighter than motion-primary */ /*\n    Contains constants for the z-index values of elements that are part of the global stack context.\n    In other words, z-index values that are \"inside\" a component are not added here.\n    This prevents conflicts between identical z-index values in different components.\n*/ /* Toolbox z-index: 40; set in scratch-blocks */ /* tooltips should go over add buttons if they overlap */ /* monitors go over add buttons */ /* \"ask\" block text input goes above monitors */ /* menu-bar should go over monitors, alerts and tutorials */ /* tw: show below menu bar normally */ /* Block drag z-index: 1000; default 50 is overriden in blocks.css */ /* so it is draggable into other panes */ /* in most interfaces, the context menu is always on top */ .project-input_input_1E6Af {\n    border: none;\n    width: 100%;\n    font-size: 23px;\n    line-height: 32px;\n    opacity: 0.5;\n    background-color: transparent;\n    color: inherit;\n} .project-input_input_1E6Af:focus {\n    opacity: 1;\n} .project-input_input_1E6Af:disabled {\n    opacity: 0.8;\n} .project-input_tooltip_3_EoA {\n    opacity: 1 !important;\n    background-color: hsla(10, 85%, 65%, 1) !important;\n    border: 1px solid hsla(0, 0%, 0%, .1) !important;\n    box-shadow: 0 0 .5rem hsla(0, 0%, 0%, .25) !important;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\n    border: 1px solid hsla(0, 0%, 0%, .1) !important;\n    z-index: 491 !important;\n} .project-input_tooltip_3_EoA:after {\n    border-top-color: hsla(10, 85%, 65%, 1) !important;\n}\n", ""]);

// exports
exports.locals = {
	"input": "project-input_input_1E6Af",
	"tooltip": "project-input_tooltip_3_EoA"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-studioview/studioview.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/tw-studioview/studioview.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nImported from:\nhttps://github.com/forkphorus/forkphorus/tree/master/studioview\nWith changes to make it work properly in the scratch-gui environment.\n*/\n\n/* we wrap it in a <div> */\n\n.studioview_wrapper_1SFBd {\n  height: 100%;\n}\n\n/* fix some styles that can be messed up by scratch-gui */\n\n.studioview_studioview-root_1OP-i * {\n  box-sizing: content-box !important;\n}\n\n.studioview_studioview-root_1OP-i {\n  height: 100%;\n}\n\n.studioview_studioview-list_2hIxk {\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  overflow-anchor: none;\n}\n\n.studioview_studioview-project_IDotv, .studioview_studioview-placeholder_KKHo9 {\n  display: inline-block;\n  width: 144px;\n  padding: 3px;\n  margin-bottom: 1px;\n  margin-right: 1px;\n}\n\n.studioview_studioview-root_1OP-i .studioview_studioview-project_IDotv {\n  color: inherit;\n  position: relative;\n  text-decoration: none;\n}\n\n.studioview_studioview-loaded_3UCil:hover::before, .studioview_studioview-loaded_3UCil:active::before {\n  content: '';\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview_studioview-root_1OP-i .studioview_studioview-loaded_3UCil:active::before {\n  opacity: 0.2;\n}\n\n.studioview_studioview-root_1OP-i .studioview_studioview-title_2ROWB,\n.studioview_studioview-root_1OP-i .studioview_studioview-author_2P0Hj {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: inherit;\n  text-decoration: none;\n}\n\n.studioview_studioview-title_2ROWB {\n  font-size: 0.8em;\n  font-weight: bold;\n}\n\n.studioview_studioview-author_2P0Hj {\n  font-size: 0.75em;\n}\n\n.studioview_studioview-error_3XWai {\n  width: 100%;\n}\n\n.studioview_studioview-thumbnail_1HYJO, .studioview_studioview-placeholder-thumbnail_TUdop {\n  position: relative;\n  width: 144px;\n  height: 108px;\n}\n\n.studioview_studioview-thumbnail_1HYJO::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview_studioview-thumbnail_1HYJO img {\n  width: 100%;\n  height: 100%;\n}\n\n.studioview_studioview-placeholder_KKHo9 .studioview_studioview-thumbnail_1HYJO,\n.studioview_studioview-placeholder_KKHo9 .studioview_studioview-title_2ROWB,\n.studioview_studioview-placeholder_KKHo9 .studioview_studioview-author_2P0Hj {\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview_studioview-title_2ROWB {\n  height: 20px;\n  margin-top: 2px;\n}\n\n.studioview_studioview-author_2P0Hj {\n  height: 18px;\n}\n\n.studioview_studioview-placeholder_KKHo9 .studioview_studioview-title_2ROWB {\n  border-radius: 2px 2px 2px 0;\n  width: 100%;\n}\n\n.studioview_studioview-placeholder_KKHo9 .studioview_studioview-author_2P0Hj {\n  border-radius: 0 0 2px 2px;\n  width: 50%;\n}\n", ""]);

// exports
exports.locals = {
	"wrapper": "studioview_wrapper_1SFBd",
	"studioview-root": "studioview_studioview-root_1OP-i",
	"studioviewRoot": "studioview_studioview-root_1OP-i",
	"studioview-list": "studioview_studioview-list_2hIxk",
	"studioviewList": "studioview_studioview-list_2hIxk",
	"studioview-project": "studioview_studioview-project_IDotv",
	"studioviewProject": "studioview_studioview-project_IDotv",
	"studioview-placeholder": "studioview_studioview-placeholder_KKHo9",
	"studioviewPlaceholder": "studioview_studioview-placeholder_KKHo9",
	"studioview-loaded": "studioview_studioview-loaded_3UCil",
	"studioviewLoaded": "studioview_studioview-loaded_3UCil",
	"studioview-title": "studioview_studioview-title_2ROWB",
	"studioviewTitle": "studioview_studioview-title_2ROWB",
	"studioview-author": "studioview_studioview-author_2P0Hj",
	"studioviewAuthor": "studioview_studioview-author_2P0Hj",
	"studioview-error": "studioview_studioview-error_3XWai",
	"studioviewError": "studioview_studioview-error_3XWai",
	"studioview-thumbnail": "studioview_studioview-thumbnail_1HYJO",
	"studioviewThumbnail": "studioview_studioview-thumbnail_1HYJO",
	"studioview-placeholder-thumbnail": "studioview_studioview-placeholder-thumbnail_TUdop",
	"studioviewPlaceholderThumbnail": "studioview_studioview-placeholder-thumbnail_TUdop"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/interface.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/interface.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Base styles used by Scratch https://github.com/LLK/scratch-www/blob/develop/src/main.scss */\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n    font-weight: bold;\n    line-height: 1.7em;\n}\nh1 {\n    font-weight: 2.5rem;\n}\nh2 {\n    font-weight: 2rem;\n}\nh3 {\n    font-size: 1.4rem;\n}\nh4 {\n    font-size: 1rem;\n}\na {\n    color: #25d;\n    cursor: pointer;\n    text-decoration: underline;\n}\n.interface_container_2nBns {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n.interface_editor_3jGyG {\n    min-width: 1024px;\n    min-height: 640px;\n    height: 100%;\n}\n.interface_editor_3jGyG .interface_center_2d9_b {\n    height: 100%;\n}\n.interface_player-only_38SyA .interface_center_2d9_b {\n    margin: auto;\n}\n.interface_menu_3K-Q2 {\n    margin-bottom: 8px;\n}\n.interface_section_3pFkT {\n    margin: 8px 0 8px 0;\n}\n.interface_footer_3JeCN {\n    padding: 10px 0;\n    margin-top: 10px;\n    border-top: 2px solid #ddd;\n}\n.interface_footer_3JeCN a {\n    font-weight: bold;\n    text-decoration: none;\n}\n[theme=\"dark\"] .interface_footer_3JeCN {\n    border-color: #1a1a1a;\n}\n.interface_footer-content_1aIC- {\n    max-width: 600px;\n    margin: auto;\n}\n.interface_footer-text_IgwDU {\n    text-align: center;\n    margin: 5px 0 10px 0;\n}\n.interface_footer-columns_1SUSg {\n    display: flex;\n    justify-content: center;\n    justify-items: center;\n    flex-wrap: wrap;\n}\n.interface_footer-section_11lCO {\n    display: flex;\n    flex-direction: column;\n    width: 200px;\n    margin-bottom: 10px;\n}\n.interface_footer-section_11lCO > * {\n    margin-bottom: 10px;\n}\n[theme=\"dark\"] .interface_container_2nBns {\n    background-color: #111;\n}\n[theme=\"dark\"] .interface_player-only_38SyA {\n    color: #ddd;\n}\n[theme=\"dark\"] a {\n    color: #4af;\n}\n.interface_infobox_1B2Hp {\n    line-height: 1.5em;\n    padding: 0.5rem;\n    margin: 5px 0 8px 0;\n    border-radius: 0.5rem;\n    border: 1px solid #b9d6ff;\n    background-color: #dbebff;\n}\n[theme=\"dark\"] .interface_infobox_1B2Hp {\n    border-color: #203652;\n    background-color: #16202c;\n}\n.interface_infobox_1B2Hp p {\n    margin: 4px 0;\n}\n.interface_infobox_1B2Hp a {\n    font-weight: bold;\n    text-decoration: none;\n}\n.interface_unshared-update_i7deb {\n    border-color: #ffb9b9;\n    background-color: #ffdbdb;\n}\n[theme=\"dark\"] .interface_unshared-update_i7deb {\n    border-color: #6a2929;\n    background-color: #452222;\n}\n", ""]);

// exports
exports.locals = {
	"container": "interface_container_2nBns",
	"editor": "interface_editor_3jGyG",
	"center": "interface_center_2d9_b",
	"player-only": "interface_player-only_38SyA",
	"playerOnly": "interface_player-only_38SyA",
	"menu": "interface_menu_3K-Q2",
	"section": "interface_section_3pFkT",
	"footer": "interface_footer_3JeCN",
	"footer-content": "interface_footer-content_1aIC-",
	"footerContent": "interface_footer-content_1aIC-",
	"footer-text": "interface_footer-text_IgwDU",
	"footerText": "interface_footer-text_IgwDU",
	"footer-columns": "interface_footer-columns_1SUSg",
	"footerColumns": "interface_footer-columns_1SUSg",
	"footer-section": "interface_footer-section_11lCO",
	"footerSection": "interface_footer-section_11lCO",
	"infobox": "interface_infobox_1B2Hp",
	"unshared-update": "interface_unshared-update_i7deb",
	"unsharedUpdate": "interface_unshared-update_i7deb"
};

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=sw.js!./src/playground/service-worker.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=sw.js!./src/playground/service-worker.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sw.js";

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsRegExp.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsRegExp.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObjectLike(value) && baseGetTag(value) == regexpTag;
}

module.exports = baseIsRegExp;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/escapeRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/escapeRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString(string);
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
}

module.exports = escapeRegExp;


/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isRegExp.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isRegExp.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsRegExp = __webpack_require__(/*! ./_baseIsRegExp */ "./node_modules/lodash/_baseIsRegExp.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

module.exports = isRegExp;


/***/ }),

/***/ "./node_modules/lodash/isString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/tw-theme-dark.css":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/tw-theme-dark.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* GUI */\n:root {\n    background: #111;\n    color: #eee;\n    color-scheme: dark;\n    /* see colors.csss */\n    --ui-primary: rgb(17, 17, 17);\n    --ui-secondary: rgb(30, 30, 30);\n    --ui-tertiary: rgb(46, 46, 46);\n    --ui-modal-overlay: #333a;\n    --ui-black-transparent: rgba(255, 255, 255, 0.15);\n    --text-primary: #eee;\n    /* scratch-paint */\n    --paint-ui-pane-border: var(--ui-black-transparent);\n    --paint-text-primary: #eee;\n    --paint-form-border: var(--ui-black-transparent);\n}\n\n/* Blockly */\n.blocklySvg {\n    background-color: var(--ui-secondary) !important;\n    color-scheme: light;\n}\n[id^=\"blocklyGridPattern\"] > line {\n    stroke: #484848;\n}\n.blocklyFlyoutBackground {\n    fill: #111;\n}\n.blocklyFlyoutLabelText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton .blocklyText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton:hover {\n    fill: #111;\n}\n/* blocklyFlyoutCheckboxPath stroke and blocklyFlyoutCheckbox fill must match */\n.blocklyFlyoutCheckboxPath {\n    stroke: #111;\n}\n.blocklyFlyoutCheckbox {\n    fill: #111;\n}\n.checked > .blocklyFlyoutCheckbox {\n    stroke: #a1c6fa;\n}\n.checked > .blocklyFlyoutCheckboxPath {\n    stroke: white;\n}\n.scratchCategoryMenu {\n    color: #ccc;\n}\n.blocklyToolboxDiv,\n.scratchCategoryMenu {\n    background: #111 !important;\n}\n.blocklyScrollbarHandle {\n    fill: #666;\n}\n.blocklyZoom {\n    filter: invert(100%);\n}\n.scratchCategoryMenuItem.categorySelected {\n    background: var(--ui-secondary);\n}\n.valueReportBox {\n    color: black;\n}\n.blocklyWidgetDiv {\n    color-scheme: light;\n}\n.blocklyWidgetDiv .goog-menu {\n    background: var(--ui-primary);\n    border-color: var(--ui-black-transparent);\n}\n.blocklyWidgetDiv .goog-menuitem {\n    color: var(--text-primary);\n}\n.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {\n    color: #666 !important;\n}\n.sa-blockly-menu-item-border {\n    border-top-color: var(--ui-black-transparent) !important;\n}\n.blocklyWidgetDiv .goog-menuitem.goog-menuitem-highlight {\n    background-color: var(--ui-tertiary);\n    border-color: transparent; /* remove border */\n}\n.scratchCommentText {\n    color: black;\n}\n.blocklyInsertionMarker > .blocklyPath {\n    fill: #ccc;\n}\n\n/* Other / Multipurpose */\n.Popover {\n    /* weird Chrome bug displays white bar above popovers with color-scheme: dark */\n    color-scheme: light;\n}\n.Popover-body {\n    background: var(--ui-secondary);\n    border-color: var(--ui-black-transparent);\n    color: var(--text-primary);\n}\n.Popover-tipShape {\n    fill: var(--ui-secondary);\n    stroke: var(--ui-black-transparent);\n}\n"

/***/ }),

/***/ "./node_modules/react-string-replace/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-string-replace/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable vars-on-top, no-var, prefer-template */
var isRegExp = __webpack_require__(/*! lodash/isRegExp */ "./node_modules/lodash/isRegExp.js");
var escapeRegExp = __webpack_require__(/*! lodash/escapeRegExp */ "./node_modules/lodash/escapeRegExp.js");
var isString = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");
var flatten = __webpack_require__(/*! lodash/flatten */ "./node_modules/lodash/flatten.js");

/**
 * Given a string, replace every substring that is matched by the `match` regex
 * with the result of calling `fn` on matched substring. The result will be an
 * array with all odd indexed elements containing the replacements. The primary
 * use case is similar to using String.prototype.replace except for React.
 *
 * React will happily render an array as children of a react element, which
 * makes this approach very useful for tasks like surrounding certain text
 * within a string with react elements.
 *
 * Example:
 * matchReplace(
 *   'Emphasize all phone numbers like 884-555-4443.',
 *   /([\d|-]+)/g,
 *   (number, i) => <strong key={i}>{number}</strong>
 * );
 * // => ['Emphasize all phone numbers like ', <strong>884-555-4443</strong>, '.'
 *
 * @param {string} str
 * @param {regexp|str} match Must contain a matching group
 * @param {function} fn
 * @return {array}
 */
function replaceString(str, match, fn) {
  var curCharStart = 0;
  var curCharLen = 0;

  if (str === '') {
    return str;
  } else if (!str || !isString(str)) {
    throw new TypeError('First argument to react-string-replace#replaceString must be a string');
  }

  var re = match;

  if (!isRegExp(re)) {
    re = new RegExp('(' + escapeRegExp(re) + ')', 'gi');
  }

  var result = str.split(re);

  // Apply fn to all odd elements
  for (var i = 1, length = result.length; i < length; i += 2) {
    curCharLen = result[i].length;
    curCharStart += result[i - 1].length;
    result[i] = fn(result[i], i, curCharStart);
    curCharStart += curCharLen;
  }

  return result;
}

module.exports = function reactStringReplace(source, match, fn) {
  if (!Array.isArray(source)) source = [source];

  return flatten(source.map(function(x) {
    return isString(x) ? replaceString(x, match, fn) : x;
  }));
};


/***/ }),

/***/ "./src/addons/channels.js":
/*!********************************!*\
  !*** ./src/addons/channels.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let changeChannel;
let reloadChannel;

if (typeof BroadcastChannel !== 'undefined') {
  changeChannel = new BroadcastChannel('addons-change');
  reloadChannel = new BroadcastChannel('addons-reload');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  changeChannel,
  reloadChannel
});

/***/ }),

/***/ "./src/components/tw-cloud-variable-badge/cloud-server-button.jsx":
/*!************************************************************************!*\
  !*** ./src/components/tw-cloud-variable-badge/cloud-server-button.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cloud-variable-badge.css */ "./src/components/tw-cloud-variable-badge/cloud-variable-badge.css");
/* harmony import */ var _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.bindall */ "./node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);






class CloudServerButton extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    lodash_bindall__WEBPACK_IMPORTED_MODULE_3___default()(this, ['handleClick']);
  }

  handleClick() {
    this.props.onClick(this.props.cloudHost);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_2___default.a.server, {
        [_cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_2___default.a.selected]: this.props.selected
      }),
      onClick: this.handleClick,
      title: this.props.cloudHost
    }, this.props.name);
  }

}

CloudServerButton.propTypes = {
  cloudHost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (CloudServerButton);

/***/ }),

/***/ "./src/components/tw-cloud-variable-badge/cloud-variable-badge.css":
/*!*************************************************************************!*\
  !*** ./src/components/tw-cloud-variable-badge/cloud-variable-badge.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./cloud-variable-badge.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-cloud-variable-badge/cloud-variable-badge.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tw-cloud-variable-badge/cloud-variable-badge.jsx":
/*!*************************************************************************!*\
  !*** ./src/components/tw-cloud-variable-badge/cloud-variable-badge.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _clouddata_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clouddata.svg */ "./src/components/tw-cloud-variable-badge/clouddata.svg");
/* harmony import */ var _clouddata_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clouddata_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cloud_server_button_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cloud-server-button.jsx */ "./src/components/tw-cloud-variable-badge/cloud-server-button.jsx");
/* harmony import */ var _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cloud-variable-badge.css */ "./src/components/tw-cloud-variable-badge/cloud-variable-badge.css");
/* harmony import */ var _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/brand */ "./src/lib/brand.js");







const hosts = [{
  // Provided by GarboMuffin
  name: 'US East',
  cloudHost: 'wss://clouddata.turbowarp.org'
}, {
  // Provided by Apricot
  name: 'EU',
  cloudHost: 'wss://clouddata-eu.turbowarp.org'
}];

const CloudVariableBadge = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5___default.a.badge
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5___default.a.title
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  className: _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5___default.a.cloudIcon,
  src: _clouddata_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
  alt: "",
  width: 32,
  height: 32
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"] // eslint-disable-next-line max-len
, {
  defaultMessage: "This project uses cloud variables.",
  id: "tw.usesCloudVariables"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"] // eslint-disable-next-line max-len
, {
  defaultMessage: "{APP_NAME}'s cloud variables are not connected to Scratch's. Anyone can {changeTheirUsername} to anything, so beware of impersonation." // eslint-disable-next-line max-len
  ,
  id: "tw.usesCloudVariables2",
  values: {
    APP_NAME: _lib_brand__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"],
    changeTheirUsername: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      onClick: props.onOpenChangeUsername
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      defaultMessage: "change their username" // eslint-disable-next-line max-len
      ,
      id: "tw.usesCloudVariables2.change"
    }))
  }
}), hosts.some(i => i.cloudHost === props.cloudHost) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5___default.a.servers
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
  defaultMessage: "Pick a server near you:",
  id: "tw.cloudServers"
}), hosts.map(i => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cloud_server_button_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
  key: i.ws,
  name: i.name,
  cloudHost: i.cloudHost,
  selected: props.cloudHost === i.cloudHost,
  onClick: props.onSetCloudHost
}))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5___default.a.servers
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
  defaultMessage: "Using a custom cloud variable server: {server}" // eslint-disable-next-line max-len
  ,
  id: "tw.customCloudServer",
  values: {
    server: props.cloudHost
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  target: "_blank",
  rel: "noreferrer",
  href: "https://docs.turbowarp.org/cloud-variables"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
  defaultMessage: "Learn more about cloud variables.",
  id: "tw.moreCloud"
})));

CloudVariableBadge.propTypes = {
  cloudHost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onSetCloudHost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onOpenChangeUsername: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (CloudVariableBadge);

/***/ }),

/***/ "./src/components/tw-cloud-variable-badge/clouddata.svg":
/*!**************************************************************!*\
  !*** ./src/components/tw-cloud-variable-badge/clouddata.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/33b737193edfe1730f38112ad35a84b4.svg";

/***/ }),

/***/ "./src/components/tw-description/description.css":
/*!*******************************************************!*\
  !*** ./src/components/tw-description/description.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./description.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-description/description.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tw-description/description.jsx":
/*!*******************************************************!*\
  !*** ./src/components/tw-description/description.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _description_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./description.css */ "./src/components/tw-description/description.css");
/* harmony import */ var _description_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_description_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-string-replace */ "./node_modules/react-string-replace/index.js");
/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_string_replace__WEBPACK_IMPORTED_MODULE_4__);






const decorate = text => {
  // https://github.com/LLK/scratch-www/blob/25232a06bcceeaddec8fcb24fb63a44d870cf1cf/src/lib/decorate-text.jsx
  // Make @mentions clickable
  text = react_string_replace__WEBPACK_IMPORTED_MODULE_4___default()(text, /@([\w-]+)/, (match, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://scratch.mit.edu/users/".concat(match, "/"),
    rel: "noreferrer",
    key: match + i
  }, "@".concat(match))); // Make links clickable

  const linkRegex = /(https?:\/\/[\w\d_\-.]{1,256}(?:\/(?:\S*[\w:/#[\]@$&'()*+=])?)?(?![^?!,:;\w\s]\S))/g;
  text = react_string_replace__WEBPACK_IMPORTED_MODULE_4___default()(text, linkRegex, (match, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: match,
    rel: "noreferrer",
    key: match + i
  }, match)); // Make hashtags clickable

  text = react_string_replace__WEBPACK_IMPORTED_MODULE_4___default()(text, /#([\w-]+)/g, (match, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://scratch.mit.edu/search/projects?q=".concat(match),
    key: match + i
  }, "#".concat(match)));
  return text;
};

const Description = ({
  instructions,
  credits,
  projectId
}) => instructions !== 'unshared' && credits !== 'unshared' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _description_css__WEBPACK_IMPORTED_MODULE_3___default.a.description
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _description_css__WEBPACK_IMPORTED_MODULE_3___default.a.projectLink
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratch.mit.edu/projects/".concat(projectId, "/"),
  target: "_blank",
  rel: "noreferrer"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
  defaultMessage: "View project on Scratch",
  id: "tw.viewOnScratch"
}))), instructions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  className: _description_css__WEBPACK_IMPORTED_MODULE_3___default.a.header
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
  defaultMessage: "Instructions",
  id: "tw.home.instructions"
})), decorate(instructions)) : null, instructions && credits ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _description_css__WEBPACK_IMPORTED_MODULE_3___default.a.divider
}) : null, credits && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  className: _description_css__WEBPACK_IMPORTED_MODULE_3___default.a.header
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
  defaultMessage: "Notes and Credits",
  id: "tw.home.credit"
})), decorate(credits)));

Description.propTypes = {
  instructions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  credits: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  projectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./src/components/tw-featured-projects/featured-projects.css":
/*!*******************************************************************!*\
  !*** ./src/components/tw-featured-projects/featured-projects.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./featured-projects.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-featured-projects/featured-projects.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tw-featured-projects/featured-projects.jsx":
/*!*******************************************************************!*\
  !*** ./src/components/tw-featured-projects/featured-projects.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.bindall */ "./node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tw_studioview_studioview_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tw-studioview/studioview.jsx */ "./src/components/tw-studioview/studioview.jsx");
/* harmony import */ var _featured_projects_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./featured-projects.css */ "./src/components/tw-featured-projects/featured-projects.css");
/* harmony import */ var _featured_projects_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_featured_projects_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_tw_navigation_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/tw-navigation-utils.js */ "./src/lib/tw-navigation-utils.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);










class FeaturedProjects extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    lodash_bindall__WEBPACK_IMPORTED_MODULE_0___default()(this, ['handleSelect', 'handleOpenProjects']);
    this.state = {
      opened: false,
      transition: true
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.projectId === '0' && prevProps.projectId === null) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        opened: true,
        transition: false
      });
    }
  }

  handleSelect(id) {
    this.props.setProjectId(id);
  }

  handleOpenProjects() {
    this.setState({
      opened: true
    });
  }

  render() {
    const opened = this.state.opened;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _featured_projects_css__WEBPACK_IMPORTED_MODULE_6___default.a.container
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_featured_projects_css__WEBPACK_IMPORTED_MODULE_6___default.a.projects, {
        [_featured_projects_css__WEBPACK_IMPORTED_MODULE_6___default.a.opened]: opened,
        [_featured_projects_css__WEBPACK_IMPORTED_MODULE_6___default.a.transition]: this.state.transition
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tw_studioview_studioview_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: this.props.studio,
      onSelect: this.handleSelect,
      placeholder: !opened
    }), opened ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _featured_projects_css__WEBPACK_IMPORTED_MODULE_6___default.a.openerContainer,
      onClick: this.handleOpenProjects
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _featured_projects_css__WEBPACK_IMPORTED_MODULE_6___default.a.openerContent
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      defaultMessage: "Click to view featured projects.",
      id: "tw.viewFeaturedProjects"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _featured_projects_css__WEBPACK_IMPORTED_MODULE_6___default.a.footer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://scratch.mit.edu/studios/".concat(this.props.studio, "/")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      defaultMessage: "View studio on Scratch.",
      id: "tw.featuredProjectsStudio"
    }))));
  }

}

FeaturedProjects.propTypes = {
  setProjectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  projectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  studio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

const mapStateToProps = state => ({
  projectId: state.scratchGui.projectState.projectId
});

const mapDispatchToProps = dispatch => ({
  setProjectId: projectId => Object(_lib_tw_navigation_utils_js__WEBPACK_IMPORTED_MODULE_7__["setProjectId"])(dispatch, projectId)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(FeaturedProjects));

/***/ }),

/***/ "./src/components/tw-project-input/project-input.css":
/*!***********************************************************!*\
  !*** ./src/components/tw-project-input/project-input.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./project-input.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-project-input/project-input.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tw-project-input/project-input.jsx":
/*!***********************************************************!*\
  !*** ./src/components/tw-project-input/project-input.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.bindall */ "./node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _reducers_project_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/project-state */ "./src/reducers/project-state.js");
/* harmony import */ var _project_input_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-input.css */ "./src/components/tw-project-input/project-input.css");
/* harmony import */ var _project_input_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_project_input_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_tw_navigation_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/tw-navigation-utils */ "./src/lib/tw-navigation-utils.js");









const PROJECT_BASE = 'https://scratch.mit.edu/projects/';
const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["defineMessages"])({
  tooltip: {
    "id": "tw.input.tooltip",
    "defaultMessage": "Copy and paste a Scratch project link here!"
  }
});

class ProjectInput extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    lodash_bindall__WEBPACK_IMPORTED_MODULE_3___default()(this, ['handleKeyDown', 'handleChange', 'handleBlur', 'handleFocus', 'inputRef', 'tooltipRef']);
    this.state = {
      projectId: this.props.projectId
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.projectId !== prevProps.projectId) {
      if (this.props.projectId === _reducers_project_state__WEBPACK_IMPORTED_MODULE_6__["defaultProjectId"]) {
        this.input.focus();
        this.input.selectionStart = this.input.value.length;
      } else {
        this.input.blur();
      } // eslint-disable-next-line react/no-did-update-set-state


      this.setState({
        projectId: this.props.projectId
      });
    }
  }

  extractProjectId(text) {
    const numberMatch = text.match(/\d+/);
    return numberMatch ? numberMatch[0] : null;
  }

  readProjectId(e) {
    const id = this.extractProjectId(e.target.value);
    return id || _reducers_project_state__WEBPACK_IMPORTED_MODULE_6__["defaultProjectId"];
  }

  handleKeyDown(e) {
    if (e.key === 'Enter' && this.state.projectId) {
      this.input.blur();
    }
  }

  handleChange(e) {
    this.setState({
      projectId: this.readProjectId(e) || _reducers_project_state__WEBPACK_IMPORTED_MODULE_6__["defaultProjectId"]
    });
  }

  handleBlur() {
    if (this.state.projectId && this.state.projectId !== this.props.projectId) {
      this.props.setProjectId(this.state.projectId);
    }

    react_tooltip__WEBPACK_IMPORTED_MODULE_4___default.a.hide(this.tooltip);
  }

  handleFocus(e) {
    if (this.extractProjectId(e.target.value)) {
      e.target.select();
    }

    react_tooltip__WEBPACK_IMPORTED_MODULE_4___default.a.show(this.tooltip);
  }

  inputRef(el) {
    this.input = el;
  }

  tooltipRef(el) {
    this.tooltip = el;
  }

  render() {
    const projectId = this.state.projectId === _reducers_project_state__WEBPACK_IMPORTED_MODULE_6__["defaultProjectId"] ? '' : this.state.projectId || '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      ref: this.tooltipRef,
      "data-tip": this.props.intl.formatMessage(messages.tooltip)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: _project_input_css__WEBPACK_IMPORTED_MODULE_7___default.a.tooltip,
      effect: "solid"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      ref: this.inputRef,
      spellCheck: "false",
      type: "text",
      value: "".concat(PROJECT_BASE).concat(projectId),
      className: _project_input_css__WEBPACK_IMPORTED_MODULE_7___default.a.input,
      onKeyDown: this.handleKeyDown,
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus
    }));
  }

}

ProjectInput.propTypes = {
  intl: react_intl__WEBPACK_IMPORTED_MODULE_5__["intlShape"],
  projectId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  setProjectId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

const mapStateToProps = state => ({
  projectId: state.scratchGui.projectState.projectId
});

const mapDispatchToProps = dispatch => ({
  setProjectId: projectId => Object(_lib_tw_navigation_utils__WEBPACK_IMPORTED_MODULE_8__["setProjectId"])(dispatch, projectId)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ProjectInput)));

/***/ }),

/***/ "./src/components/tw-studioview/studioview.css":
/*!*****************************************************!*\
  !*** ./src/components/tw-studioview/studioview.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./studioview.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-studioview/studioview.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tw-studioview/studioview.js":
/*!****************************************************!*\
  !*** ./src/components/tw-studioview/studioview.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _studioview_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studioview.css */ "./src/components/tw-studioview/studioview.css");
/* harmony import */ var _studioview_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_studioview_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable */
// Imported from:
// https://github.com/forkphorus/forkphorus/tree/master/studioview
// With changes to make it work properly in the scratch-gui environment.
// todo: we have to see if we are leaking memory when this is mounted and unmounted, esp. because of event listeners
// todo: use react-intl for translations


/**
 * @class
 */

var StudioView = function StudioView(studioId) {
  this.studioId = studioId;
  this.offset = 0;
  this.ended = false;
  this.loadingPage = false;
  this.unusedPlaceholders = [];
  this.root = document.createElement('div');
  this.root.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewRoot;
  this.projectList = document.createElement('div');
  this.projectList.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewList;
  this.root.appendChild(this.projectList);

  if ('IntersectionObserver' in window) {
    this.intersectionObserver = new IntersectionObserver(this.handleIntersection.bind(this), {
      root: this.projectList
    });
    this.loadNextPageObserver = new IntersectionObserver(this.handleLoadNextPageIntersection.bind(this), {
      root: this.projectList
    });
  } else {
    this.intersectionObserver = null;
    this.loadNextPageObserver = null;
  } // will be filled in by studioview.jsx


  this.messages = {
    AUTHOR_ATTRIBUTION: '',
    PROJECT_HOVER_TEXT: '',
    LOAD_ERROR: ''
  };
};
/**
 * Add a project to the view.
 * An unused placeholder element may be used, or it may be created.
 */


StudioView.prototype.addProject = function (details) {
  var el;

  if (this.unusedPlaceholders.length) {
    el = this.unusedPlaceholders.shift();
  } else {
    el = this.createPlaceholder();
    this.projectList.appendChild(el);
  }

  this.placeholderToProject(el, details.id, details.title, details.author);
};
/**
 * Create an <img> element that will load only when it becomes visible.
 */


StudioView.prototype.createLazyImage = function (src) {
  var el = document.createElement('img');

  if (this.intersectionObserver) {
    this.intersectionObserver.observe(el);
    el.dataset.src = src;
  } else {
    // then we just won't lazy load it
    el.src = src;
  }

  return el;
};
/**
 * Create a placeholder or placeholder element.
 */


StudioView.prototype.createPlaceholder = function () {
  var el = document.createElement('a');
  el.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewProject, _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewPlaceholder);
  var thumbnail = document.createElement('div');
  thumbnail.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewThumbnail;
  var title = document.createElement('div');
  title.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewTitle;
  var author = document.createElement('div');
  author.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewAuthor;
  el.thumbnailEl = thumbnail;
  el.titleEl = title;
  el.authorEl = author;
  el.appendChild(thumbnail);
  el.appendChild(title);
  el.appendChild(author);
  return el;
};
/**
 * Convert a placeholder element made by createPlaceholder to a project element.
 */


StudioView.prototype.placeholderToProject = function (el, id, title, author) {
  el.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewProject, _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewLoaded);
  el.dataset.id = id;
  el.dataset.title = title;
  el.dataset.author = author;
  el.title = this.messages.PROJECT_HOVER_TEXT.replace('$author', author).replace('$title', title);
  el.href = StudioView.PROJECT_PAGE.replace('$id', id);
  var thumbnailSrc = StudioView.THUMBNAIL_SRC.replace('$id', id);
  var thumbnailImg = this.createLazyImage(thumbnailSrc);
  el.thumbnailEl.appendChild(thumbnailImg);
  el.titleEl.innerText = title;
  el.authorEl.innerText = this.messages.AUTHOR_ATTRIBUTION.replace('$author', author);
  el.addEventListener('click', this.handleClick.bind(this), true);
  el.addEventListener('keydown', this.handleKeyDown.bind(this), true);
  return el;
};
/**
 * Adds an error message to the list.
 */


StudioView.prototype.addErrorElement = function () {
  var el = document.createElement('div');
  el.innerText = this.messages.LOAD_ERROR;
  el.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewError;
  this.projectList.appendChild(el);
};

StudioView.prototype.handleLoadNextPageIntersection = function (e) {
  for (var i = 0; i < e.length; i++) {
    var intersection = e[i];

    if (intersection.isIntersecting && this.canLoadNext()) {
      this.loadNextPage();
    }
  }
}; // Click a project element or a child of a project element


StudioView.prototype.clickProject = function (el) {
  while (!el.classList.contains(_studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewProject)) {
    el = el.parentNode;
  }

  var id = el.dataset.id;
  this.onselect(id, el);
}; // Called when click is fired on a project element


StudioView.prototype.handleClick = function (e) {
  e.preventDefault();
  this.clickProject(e.target);
}; // Called when keydown is fired on a project element


StudioView.prototype.handleKeyDown = function (e) {
  if (e.keyCode === 13) {
    // treat enter (13) as click
    e.preventDefault();
    this.clickProject(e.target);
  }
}; // Called by the IntersectionObserver when it sees an intersection


StudioView.prototype.handleIntersection = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var target = entry.target;
      target.src = target.dataset.src;
      target.dataset.src = '';
      target.className = '';
      observer.unobserve(target);
    }
  });
};
/**
 * Determines whether it is safe to attempt to load the next page.
 */


StudioView.prototype.canLoadNext = function () {
  return !this.loadingPage && !this.ended;
};
/**
 * Remove all unused placeholder elements.
 */


StudioView.prototype.cleanupPlaceholders = function () {
  while (this.unusedPlaceholders.length) {
    var el = this.unusedPlaceholders.pop();
    this.projectList.removeChild(el);
  }
};
/**
 * Add placeholder placeholder elements.
 */


StudioView.prototype.addPlaceholders = function () {
  for (var i = 0; i < StudioView.PLACEHOLDER_COUNT; i++) {
    var el = this.createPlaceholder();
    this.unusedPlaceholders.push(el);
    this.projectList.appendChild(el);
  }
};
/**
 * Make changes to the order of projects.
 * Default shuffler does nothing.
 */


StudioView.prototype.shuffler = function (projects) {
  return projects;
};
/**
 * Begins loading the next page.
 */


StudioView.prototype.loadNextPage = function () {
  if (this.loadingPage) {
    throw new Error('Already loading the next page');
  }

  if (this.ended) {
    throw new Error('There are no more pages to load');
  }

  if (this.unusedPlaceholders.length === 0) {
    this.addPlaceholders();
  }

  if (this.loadNextPageObserver) {
    this.loadNextPageObserver.disconnect();
  }

  this.root.setAttribute('loading', '');
  this.loadingPage = true;
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onload = function () {
    var rawProjects = xhr.response;

    if (!Array.isArray(rawProjects)) {
      xhr.onerror();
      return;
    }

    var projects = [];

    for (var i = 0; i < rawProjects.length; i++) {
      var p = rawProjects[i];
      projects.push({
        id: p.id,
        title: p.title,
        author: p.username
      });
    }

    projects = this.shuffler(projects);

    for (var i = 0; i < projects.length; i++) {
      this.addProject(projects[i]);
    }

    this.cleanupPlaceholders();

    if (rawProjects.length === 40) {
      if (this.loadNextPageObserver) {
        this.loadNextPageObserver.observe(this.projectList.lastChild);
      }
    } else {
      this.ended = true;
      this.onend();
    }

    this.offset += projects.length;
    this.loadingPage = false;
    this.root.removeAttribute('loading');
    this.onpageload();
  }.bind(this);

  xhr.onerror = function () {
    this.root.setAttribute('error', '');
    this.cleanupPlaceholders();
    this.addErrorElement();
    this.ended = true;
  }.bind(this);

  var url = StudioView.STUDIO_API.replace('$id', this.studioId).replace('$offset', '' + this.offset);
  xhr.open('GET', url);
  xhr.send();
};

StudioView.prototype.getURL = function () {
  return StudioView.STUDIO_PAGE.replace('$id', this.studioId);
};

StudioView.prototype.onselect = function (id, el) {};

StudioView.prototype.onpageload = function () {};

StudioView.prototype.onend = function () {};

StudioView.STUDIO_API = 'https://trampoline.turbowarp.org/api/studios/$id/projects?offset=$offset'; // The URL to download thumbnails from.
// $id is replaced with the project's ID.

StudioView.THUMBNAIL_SRC = 'https://trampoline.turbowarp.org/thumbnails/$id?width=144&height=108'; // The URL for project pages.
// $id is replaced with the project ID.

StudioView.PROJECT_PAGE = 'https://turbowarp.org/$id'; // The URL for studio pages.
// $id is replaced with the studio ID.

StudioView.STUDIO_PAGE = 'https://scratch.mit.edu/studios/$id/'; // The amount of "placeholders" to insert before the next page loads.

StudioView.PLACEHOLDER_COUNT = 9;
/* harmony default export */ __webpack_exports__["default"] = (StudioView);

/***/ }),

/***/ "./src/components/tw-studioview/studioview.jsx":
/*!*****************************************************!*\
  !*** ./src/components/tw-studioview/studioview.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.bindall */ "./node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _studioview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./studioview */ "./src/components/tw-studioview/studioview.js");
/* harmony import */ var _studioview_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./studioview.css */ "./src/components/tw-studioview/studioview.css");
/* harmony import */ var _studioview_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_studioview_css__WEBPACK_IMPORTED_MODULE_6__);







const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["defineMessages"])({
  authorAttribution: {
    "id": "tw.studioview.authorAttribution",
    "defaultMessage": "by {author}"
  },
  hoverText: {
    "id": "tw.studioview.hoverText",
    "defaultMessage": "{title} by {author}"
  },
  error: {
    "id": "tw.studioview.error",
    "defaultMessage": "There was an error loading the next page of projects."
  }
});

class StudioViewComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    lodash_bindall__WEBPACK_IMPORTED_MODULE_2___default()(this, ['handleSelect', 'ref']);
  }

  componentDidMount() {
    this.studioView = new _studioview__WEBPACK_IMPORTED_MODULE_5__["default"](this.props.id);
    this.studioView.messages.AUTHOR_ATTRIBUTION = this.props.intl.formatMessage(messages.authorAttribution, {
      // studioview uses $-based variables
      author: '$author'
    });
    this.studioView.messages.PROJECT_HOVER_TEXT = this.props.intl.formatMessage(messages.hoverText, {
      // studioview uses $-based variables
      author: '$author',
      title: '$title'
    });
    this.studioView.messages.LOAD_ERROR = this.props.intl.formatMessage(messages.error);

    if (this.props.placeholder) {
      this.studioView.addPlaceholders();
    } else {
      this.studioView.loadNextPage();
    }

    this.studioView.onselect = this.handleSelect;
    this.el.appendChild(this.studioView.root);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.placeholder && !this.props.placeholder) {
      this.studioView.loadNextPage();
    }
  }

  handleSelect(id) {
    this.props.onSelect(id);
  }

  ref(el) {
    this.el = el;
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_studioview_css__WEBPACK_IMPORTED_MODULE_6___default.a.wrapper),
      ref: this.ref
    });
  }

}

StudioViewComponent.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  intl: react_intl__WEBPACK_IMPORTED_MODULE_4__["intlShape"].isRequired,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["injectIntl"])(StudioViewComponent));

/***/ }),

/***/ "./src/containers/tw-cloud-variable-badge.jsx":
/*!****************************************************!*\
  !*** ./src/containers/tw-cloud-variable-badge.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_tw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/tw */ "./src/reducers/tw.js");
/* harmony import */ var _components_tw_cloud_variable_badge_cloud_variable_badge_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tw-cloud-variable-badge/cloud-variable-badge.jsx */ "./src/components/tw-cloud-variable-badge/cloud-variable-badge.jsx");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.bindall */ "./node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/modals */ "./src/reducers/modals.js");








class TWCloudVariableBadge extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    lodash_bindall__WEBPACK_IMPORTED_MODULE_5___default()(this, ['handleChangeCloudHost']);
  }

  handleChangeCloudHost(cloudHost) {
    this.props.onSetCloudHost(cloudHost);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tw_cloud_variable_badge_cloud_variable_badge_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      cloudHost: this.props.cloudHost,
      onSetCloudHost: this.handleChangeCloudHost,
      onOpenChangeUsername: this.props.onOpenChangeUsername
    });
  }

}

TWCloudVariableBadge.propTypes = {
  cloudHost: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onSetCloudHost: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onOpenChangeUsername: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

const mapStateToProps = state => ({
  cloudHost: state.scratchGui.tw.cloudHost
});

const mapDispatchToProps = dispatch => ({
  onSetCloudHost: cloudHost => dispatch(Object(_reducers_tw__WEBPACK_IMPORTED_MODULE_3__["setCloudHost"])(cloudHost)),
  onOpenChangeUsername: () => dispatch(Object(_reducers_modals__WEBPACK_IMPORTED_MODULE_6__["openUsernameModal"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(TWCloudVariableBadge));

/***/ }),

/***/ "./src/lib/tw-fix-history-api.js":
/*!***************************************!*\
  !*** ./src/lib/tw-fix-history-api.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./src/lib/log.js");

const originalReplaceState = history.replaceState;

history.replaceState = function (...args) {
  try {
    return originalReplaceState.call(this, ...args);
  } catch (e) {
    _log__WEBPACK_IMPORTED_MODULE_0__["default"].error(e);
  }
};

const originalPushState = history.pushState;

history.pushState = function (...args) {
  try {
    return originalPushState.call(this, ...args);
  } catch (e) {
    _log__WEBPACK_IMPORTED_MODULE_0__["default"].error(e);
  }
};

/***/ }),

/***/ "./src/lib/tw-packager-integration-hoc.jsx":
/*!*************************************************!*\
  !*** ./src/lib/tw-packager-integration-hoc.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PackagerIntegrationHOC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./src/lib/log.js");
/* harmony import */ var _reducers_project_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/project-state */ "./src/reducers/project-state.js");
const _excluded = ["canOpenPackager"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const PACKAGER_URL = 'https://packager.turbowarp.org';
const PACKAGER_ORIGIN = PACKAGER_URL;

const PackagerIntegrationHOC = function PackagerIntegrationHOC(WrappedComponent) {
  class PackagerIntegrationComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.handleClickPackager = this.handleClickPackager.bind(this);
      this.handleMessage = this.handleMessage.bind(this);
    }

    componentDidMount() {
      window.addEventListener('message', this.handleMessage);
    }

    componentWillUnmount() {
      window.removeEventListener('message', this.handleMessage);
    }

    handleClickPackager() {
      if (this.props.canOpenPackager) {
        window.open("".concat(PACKAGER_URL, "/?import_from=").concat(location.origin));
      }
    }

    handleMessage(e) {
      if (e.origin !== PACKAGER_ORIGIN) {
        return;
      }

      if (!this.props.canOpenPackager) {
        return;
      }

      const packagerData = e.data.p4;

      if (packagerData.type !== 'ready-for-import') {
        return;
      } // The packager needs to know that we will be importing something so it can display a loading screen


      e.source.postMessage({
        p4: {
          type: 'start-import'
        }
      }, e.origin);
      this.props.vm.saveProjectSb3('arraybuffer').then(buffer => {
        const name = "".concat(this.props.reduxProjectTitle, ".sb3");
        e.source.postMessage({
          p4: {
            type: 'finish-import',
            data: buffer,
            name
          }
        }, e.origin, [buffer]);
      }).catch(err => {
        _log__WEBPACK_IMPORTED_MODULE_3__["default"].error(err);
        e.source.postMessage({
          p4: {
            type: 'cancel-import'
          }
        }, e.origin);
      });
    }

    render() {
      const _this$props = this.props,
            {
        /* eslint-disable no-unused-vars */
        canOpenPackager
      } = _this$props,
            props = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
        onClickPackager: this.handleClickPackager
      }, props));
    }

  }

  PackagerIntegrationComponent.propTypes = {
    canOpenPackager: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    reduxProjectTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    vm: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      saveProjectSb3: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
    })
  };

  const mapStateToProps = state => ({
    canOpenPackager: Object(_reducers_project_state__WEBPACK_IMPORTED_MODULE_4__["getIsShowingProject"])(state.scratchGui.projectState.loadingState),
    reduxProjectTitle: state.scratchGui.projectTitle,
    vm: state.scratchGui.vm
  });

  const mapDispatchToProps = () => ({});

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(PackagerIntegrationComponent);
};



/***/ }),

/***/ "./src/lib/tw-theme-hoc.jsx":
/*!**********************************!*\
  !*** ./src/lib/tw-theme-hoc.jsx ***!
  \**********************************/
/*! exports provided: getInitialDarkMode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialDarkMode", function() { return getInitialDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeHOC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tw-theme-dark.css */ "./node_modules/raw-loader/index.js!./src/lib/tw-theme-dark.css");
/* harmony import */ var _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const THEME_KEY = 'tw:theme';
const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const getInitialDarkMode = () => {
  try {
    const item = localStorage.getItem(THEME_KEY);

    if (item !== null) {
      return item === 'dark';
    }
  } catch (e) {// ignore
  }

  return darkMediaQuery.matches;
};
const darkModeStylesheet = document.createElement('style');
darkModeStylesheet.textContent = _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1___default.a;

const ThemeHOC = function ThemeHOC(WrappedComponent) {
  class ThemeComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.handleQueryChange = this.handleQueryChange.bind(this);
      this.handleClickTheme = this.handleClickTheme.bind(this);
      this.state = {
        dark: getInitialDarkMode()
      };
    }

    componentDidMount() {
      // media query does not have listeners in legacy edge
      if (darkMediaQuery.addEventListener) {
        darkMediaQuery.addEventListener('change', this.handleQueryChange);
      }

      this.updateDark();
    }

    componentDidUpdate() {
      try {
        localStorage.setItem(THEME_KEY, this.state.dark ? 'dark' : 'light');
      } catch (e) {// ignore
      }

      this.updateDark();
    }

    componentWillUnmount() {
      // media query does not have listeners in legacy edge
      if (darkMediaQuery.removeEventListener) {
        darkMediaQuery.removeEventListener('change', this.handleQueryChange);
      }
    }

    updateDark() {
      const dark = this.state.dark;
      document.body.setAttribute('theme', dark ? 'dark' : 'light');

      if (dark && !darkModeStylesheet.parentNode) {
        // Append at the start of <body> we override scratch-gui styles in <head>
        // but are overridden by addon styles at the end of <body>
        document.body.insertBefore(darkModeStylesheet, document.body.firstChild);
      } else if (!dark && darkModeStylesheet.parentNode) {
        darkModeStylesheet.parentNode.removeChild(darkModeStylesheet);
      }
    }

    handleQueryChange() {
      this.setState({
        dark: darkMediaQuery.matches
      });
    }

    handleClickTheme() {
      this.setState(state => ({
        dark: !state.dark
      }));
    }

    render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
        onClickTheme: this.handleClickTheme,
        isDark: this.state.dark
      }, this.props));
    }

  }

  return ThemeComponent;
};



/***/ }),

/***/ "./src/playground/editor.jsx":
/*!***********************************!*\
  !*** ./src/playground/editor.jsx ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import-first */ "./src/playground/import-first.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _render_interface_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render-interface.jsx */ "./src/playground/render-interface.jsx");
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-target */ "./src/playground/app-target.js");
/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */






Object(react_modal__WEBPACK_IMPORTED_MODULE_3__["setAppElement"])(_app_target__WEBPACK_IMPORTED_MODULE_5__["default"]);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_render_interface_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null), _app_target__WEBPACK_IMPORTED_MODULE_5__["default"]);

/***/ }),

/***/ "./src/playground/interface.css":
/*!**************************************!*\
  !*** ./src/playground/interface.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./interface.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/interface.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/load-service-worker.js":
/*!***********************************************!*\
  !*** ./src/playground/load-service-worker.js ***!
  \***********************************************/
/*! exports provided: loadServiceWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadServiceWorker", function() { return loadServiceWorker; });
/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/log */ "./src/lib/log.js");
/* harmony import */ var _file_loader_name_sw_js_service_worker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !file-loader?name=sw.js!./service-worker.js */ "./node_modules/file-loader/dist/cjs.js?name=sw.js!./src/playground/service-worker.js");
/* harmony import */ var _file_loader_name_sw_js_service_worker_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_sw_js_service_worker_js__WEBPACK_IMPORTED_MODULE_1__);


let loaded = false;

const actuallyLoadServiceWorker = () => {
  navigator.serviceWorker.register(_file_loader_name_sw_js_service_worker_js__WEBPACK_IMPORTED_MODULE_1___default.a).catch(err => {
    _lib_log__WEBPACK_IMPORTED_MODULE_0__["default"].error('sw error', err);
  });
};

const loadServiceWorker = () => {
  if (false) {}
};



/***/ }),

/***/ "./src/playground/render-interface.jsx":
/*!*********************************************!*\
  !*** ./src/playground/render-interface.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _reducers_project_state_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/project-state.js */ "./src/reducers/project-state.js");
/* harmony import */ var _containers_dom_element_renderer_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/dom-element-renderer.jsx */ "./src/containers/dom-element-renderer.jsx");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _lib_error_boundary_hoc_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/error-boundary-hoc.jsx */ "./src/lib/error-boundary-hoc.jsx");
/* harmony import */ var _lib_tw_project_meta_fetcher_hoc_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/tw-project-meta-fetcher-hoc.jsx */ "./src/lib/tw-project-meta-fetcher-hoc.jsx");
/* harmony import */ var _lib_tw_state_manager_hoc_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/tw-state-manager-hoc.jsx */ "./src/lib/tw-state-manager-hoc.jsx");
/* harmony import */ var _lib_tw_theme_hoc_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/tw-theme-hoc.jsx */ "./src/lib/tw-theme-hoc.jsx");
/* harmony import */ var _lib_sb_file_uploader_hoc_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/sb-file-uploader-hoc.jsx */ "./src/lib/sb-file-uploader-hoc.jsx");
/* harmony import */ var _lib_tw_packager_integration_hoc_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/tw-packager-integration-hoc.jsx */ "./src/lib/tw-packager-integration-hoc.jsx");
/* harmony import */ var _addons_settings_store_singleton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../addons/settings-store-singleton */ "./src/addons/settings-store-singleton.js");
/* harmony import */ var _lib_tw_fix_history_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/tw-fix-history-api */ "./src/lib/tw-fix-history-api.js");
/* harmony import */ var _render_gui_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./render-gui.jsx */ "./src/playground/render-gui.jsx");
/* harmony import */ var _components_menu_bar_menu_bar_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/menu-bar/menu-bar.jsx */ "./src/components/menu-bar/menu-bar.jsx");
/* harmony import */ var _components_tw_project_input_project_input_jsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/tw-project-input/project-input.jsx */ "./src/components/tw-project-input/project-input.jsx");
/* harmony import */ var _components_tw_featured_projects_featured_projects_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/tw-featured-projects/featured-projects.jsx */ "./src/components/tw-featured-projects/featured-projects.jsx");
/* harmony import */ var _components_tw_description_description_jsx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/tw-description/description.jsx */ "./src/components/tw-description/description.jsx");
/* harmony import */ var _containers_webgl_modal_jsx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../containers/webgl-modal.jsx */ "./src/containers/webgl-modal.jsx");
/* harmony import */ var _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/browser-modal/browser-modal.jsx */ "./src/components/browser-modal/browser-modal.jsx");
/* harmony import */ var _containers_tw_cloud_variable_badge_jsx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../containers/tw-cloud-variable-badge.jsx */ "./src/containers/tw-cloud-variable-badge.jsx");
/* harmony import */ var _lib_tw_environment_support_prober__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../lib/tw-environment-support-prober */ "./src/lib/tw-environment-support-prober.js");
/* harmony import */ var _addons_channels__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../addons/channels */ "./src/addons/channels.js");
/* harmony import */ var _load_service_worker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./load-service-worker */ "./src/playground/load-service-worker.js");
/* harmony import */ var _addons_entry__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../addons/entry */ "./src/addons/entry.js");
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../lib/brand */ "./src/lib/brand.js");
/* harmony import */ var _interface_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./interface.css */ "./src/playground/interface.css");
/* harmony import */ var _interface_css__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_interface_css__WEBPACK_IMPORTED_MODULE_30__);
const _excluded = ["intl", "hasCloudVariables", "description", "isFullScreen", "isLoading", "isPlayerOnly", "isRtl", "onClickTheme", "projectId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
































if (window.parent !== window) {
  // eslint-disable-next-line no-alert
  alert('This page contains an invalid TurboWarp embed. Please read https://docs.turbowarp.org/embedding for instructions to create a working embed.');
  throw new Error('Invalid embed');
}

let announcement = null;

if (false) {}

const handleClickAddonSettings = () => {
  const path =  false ? undefined : 'addons.html';
  window.open("".concat("").concat(path));
};

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["defineMessages"])({
  defaultTitle: {
    "id": "tw.guiDefaultTitle",
    "defaultMessage": "Run Scratch projects faster"
  }
});
const WrappedMenuBar = Object(redux__WEBPACK_IMPORTED_MODULE_4__["compose"])(_lib_sb_file_uploader_hoc_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], _lib_tw_packager_integration_hoc_jsx__WEBPACK_IMPORTED_MODULE_14__["default"])(_components_menu_bar_menu_bar_jsx__WEBPACK_IMPORTED_MODULE_18__["default"]);

if (_addons_channels__WEBPACK_IMPORTED_MODULE_26__["default"].reloadChannel) {
  _addons_channels__WEBPACK_IMPORTED_MODULE_26__["default"].reloadChannel.addEventListener('message', () => {
    location.reload();
  });
}

if (_addons_channels__WEBPACK_IMPORTED_MODULE_26__["default"].changeChannel) {
  _addons_channels__WEBPACK_IMPORTED_MODULE_26__["default"].changeChannel.addEventListener('message', e => {
    _addons_settings_store_singleton__WEBPACK_IMPORTED_MODULE_15__["default"].setStoreWithVersionCheck(e.data);
  });
}

Object(_addons_entry__WEBPACK_IMPORTED_MODULE_28__["default"])();

const Footer = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("footer", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.footer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.footerContent
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.footerText
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"] // eslint-disable-next-line max-len
, {
  defaultMessage: "TurboWarp is not affiliated with Scratch, the Scratch Team, or the Scratch Foundation.",
  id: "tw.footer.disclaimer"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.footerColumns
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.footerSection
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "credits.html"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Credits",
  id: "tw.footer.credits"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://github.com/sponsors/GarboMuffin"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Donate",
  id: "tw.footer.donate"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.footerSection
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://desktop.turbowarp.org/"
}, 'TurboWarp Desktop'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://packager.turbowarp.org/"
}, 'TurboWarp Packager'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://docs.turbowarp.org/embedding"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Embedding",
  id: "tw.footer.embed"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://docs.turbowarp.org/url-parameters"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "URL Parameters",
  id: "tw.footer.parameters"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://docs.turbowarp.org/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Documentation",
  id: "tw.footer.documentation"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.footerSection
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://scratch.mit.edu/users/GarboMuffin/#comments"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Feedback & Bugs",
  id: "tw.feedback"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://github.com/TurboWarp/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Source Code",
  id: "tw.code"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "privacy.html"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Privacy Policy",
  id: "tw.privacy"
}))))));

class Interface extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.handleUpdateProjectTitle = this.handleUpdateProjectTitle.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isLoading && !this.props.isLoading) {
      Object(_load_service_worker__WEBPACK_IMPORTED_MODULE_27__["loadServiceWorker"])();
    }
  }

  handleUpdateProjectTitle(title, isDefault) {
    if (isDefault || !title) {
      document.title = "TurboWarp - ".concat(this.props.intl.formatMessage(messages.defaultTitle));
    } else {
      document.title = "".concat(title, " - TurboWarp");
    }
  }

  render() {
    const _this$props = this.props,
          {
      /* eslint-disable no-unused-vars */
      intl,
      hasCloudVariables,
      description,
      isFullScreen,
      isLoading,
      isPlayerOnly,
      isRtl,
      onClickTheme,
      projectId
    } = _this$props,
          props = _objectWithoutProperties(_this$props, _excluded);

    const isHomepage = isPlayerOnly && !isFullScreen;
    const isEditor = !isPlayerOnly;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.container, {
        [_interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.playerOnly]: isHomepage,
        [_interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.editor]: isEditor
      })
    }, isHomepage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.menu
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedMenuBar, {
      canChangeLanguage: true,
      canManageFiles: true,
      enableSeeInside: true,
      onClickAddonSettings: handleClickAddonSettings,
      onClickTheme: onClickTheme
    })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.center,
      style: isPlayerOnly ? {
        // add a couple pixels to account for border (TODO: remove weird hack)
        width: "".concat(Math.max(480, props.customStageSize.width) + 2, "px")
      } : null
    }, isHomepage && announcement ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_dom_element_renderer_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
      domElement: announcement
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_render_gui_jsx__WEBPACK_IMPORTED_MODULE_17__["default"], _extends({
      onClickAddonSettings: handleClickAddonSettings,
      onClickTheme: onClickTheme,
      onUpdateProjectTitle: this.handleUpdateProjectTitle,
      backpackVisible: true,
      backpackHost: "_local_"
    }, props)), isHomepage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_lib_tw_environment_support_prober__WEBPACK_IMPORTED_MODULE_25__["isRendererSupported"])() ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_webgl_modal_jsx__WEBPACK_IMPORTED_MODULE_22__["default"], {
      isRtl: isRtl
    }), Object(_lib_tw_environment_support_prober__WEBPACK_IMPORTED_MODULE_25__["isBrowserSupported"])() ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_23__["default"], {
      isRtl: isRtl
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_tw_project_input_project_input_jsx__WEBPACK_IMPORTED_MODULE_19__["default"], null)), ( // eslint-disable-next-line max-len
    description.instructions === 'unshared' || description.credits === 'unshared') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.infobox, _interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.unsharedUpdate)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      defaultMessage: "Unshared projects are no longer visible.",
      id: "tw.unshared2.1"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      defaultMessage: "For more information, visit: {link}",
      id: "tw.unshared.2",
      values: {
        link: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          href: "https://docs.turbowarp.org/unshared-projects",
          target: "_blank",
          rel: "noopener noreferrer"
        }, 'https://docs.turbowarp.org/unshared-projects')
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"] // eslint-disable-next-line max-len
    , {
      defaultMessage: "If the project was shared recently, this message may appear incorrectly for a few minutes.",
      id: "tw.unshared.cache"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"] // eslint-disable-next-line max-len
    , {
      defaultMessage: "If this project is actually shared, please report a bug.",
      id: "tw.unshared.bug"
    }))), hasCloudVariables && projectId !== '0' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_tw_cloud_variable_badge_jsx__WEBPACK_IMPORTED_MODULE_24__["default"], null)), description.instructions || description.credits ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_tw_description_description_jsx__WEBPACK_IMPORTED_MODULE_21__["default"], {
      instructions: description.instructions,
      credits: description.credits,
      projectId: projectId
    })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"] // eslint-disable-next-line max-len
    , {
      defaultMessage: "TurboWarp is a Scratch mod that compiles projects to JavaScript to make them run really fast. Try it out by inputting a project ID or URL above or choosing a featured project below.",
      id: "tw.home.description"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_30___default.a.section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_tw_featured_projects_featured_projects_jsx__WEBPACK_IMPORTED_MODULE_20__["default"], {
      studio: "27205657"
    }))) : null), isHomepage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Footer, null));
  }

}

Interface.propTypes = {
  intl: react_intl__WEBPACK_IMPORTED_MODULE_5__["intlShape"],
  hasCloudVariables: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  customStageSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }),
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    credits: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    instructions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  isFullScreen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isPlayerOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isRtl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClickTheme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  projectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

const mapStateToProps = state => ({
  hasCloudVariables: state.scratchGui.tw.hasCloudVariables,
  customStageSize: state.scratchGui.customStageSize,
  description: state.scratchGui.tw.description,
  isFullScreen: state.scratchGui.mode.isFullScreen,
  isLoading: Object(_reducers_project_state_js__WEBPACK_IMPORTED_MODULE_6__["getIsLoading"])(state.scratchGui.projectState.loadingState),
  isPlayerOnly: state.scratchGui.mode.isPlayerOnly,
  isRtl: state.locales.isRtl,
  projectId: state.scratchGui.projectState.projectId
});

const mapDispatchToProps = () => ({});

const ConnectedInterface = Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Interface));
const WrappedInterface = Object(redux__WEBPACK_IMPORTED_MODULE_4__["compose"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_lib_error_boundary_hoc_jsx__WEBPACK_IMPORTED_MODULE_9__["default"])('TW Interface'), _lib_tw_project_meta_fetcher_hoc_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], _lib_tw_state_manager_hoc_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], _lib_tw_theme_hoc_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], _lib_tw_packager_integration_hoc_jsx__WEBPACK_IMPORTED_MODULE_14__["default"])(ConnectedInterface);
/* harmony default export */ __webpack_exports__["default"] = (WrappedInterface);

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map