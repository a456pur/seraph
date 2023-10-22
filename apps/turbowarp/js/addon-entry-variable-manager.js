(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-variable-manager"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/variable-manager/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/variable-manager/style.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Change z-indexes to allow more than 3 tabs */\n[class*=\"gui_tab_\"][class*=\"gui_is-selected_\"] {\n  z-index: 10 !important;\n}\n[class*=\"gui_tab_\"]:nth-of-type(1) {\n  z-index: 9;\n}\n[class*=\"gui_tab_\"]:nth-of-type(2) {\n  z-index: 8;\n}\n[class*=\"gui_tab_\"]:nth-of-type(3) {\n  z-index: 7;\n}\n[class*=\"gui_tab_\"]:nth-of-type(4) {\n  z-index: 6;\n}\n\n.sa-var-manager {\n  display: block;\n  padding: 18px;\n  /* weird hack to fix scrolling??? */\n  height: 50px;\n  overflow-y: auto;\n}\n\n.sa-var-manager-searchbox {\n  background-image: url(" + escape(__webpack_require__(/*! ./search.svg */ "./src/addons/addons/variable-manager/search.svg")) + ");\n  width: 25%;\n  margin-bottom: 4px;\n  padding: 8px;\n  padding-right: 32px; /* for the text to not overlap the image */\n  border-radius: 4px;\n  background-repeat: no-repeat;\n  background-size: 18px 18px;\n  background-position: calc(100% - 7px) center;\n  font-size: 0.75rem;\n}\n[theme=\"dark\"] .sa-var-manager-searchbox {\n  border-color: #333;\n}\n\n[dir=\"rtl\"] .sa-var-manager-searchbox {\n  padding-right: 8px;\n  padding-left: 32px;\n  background-position: 7px center;\n}\n\n.sa-var-manager.freeze .sa-var-manager-value *,\n.sa-var-manager.freeze .sa-var-manager-name * {\n  opacity: 0.5;\n}\n\n.sa-var-manager.freeze input:focus,\n.sa-var-manager.freeze textarea:focus {\n  opacity: 1;\n}\n\n.sa-var-manager-heading {\n  display: block;\n  font-weight: bold;\n  font-size: large;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.sa-var-manager-name {\n  word-break: break-word;\n}\n\n.sa-var-manager .sa-var-manager-value {\n  width: 75%;\n}\n\n.sa-var-manager * > input {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n}\n\n.sa-var-manager-value > textarea {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n  line-height: 2em;\n  resize: none;\n}\n\n.sa-var-manager-too-big {\n  display: none;\n  cursor: pointer;\n  font: inherit;\n  font-style: italic;\n  color: inherit;\n  background: none;\n  border: none;\n  margin: 0;\n  padding: 8px;\n  opacity: 0.8;\n  width: 100%;\n  text-align: left;\n}\n.sa-var-manager-too-big:hover {\n  text-decoration: underline;\n}\n[data-too-big=\"true\"] .sa-var-manager-too-big {\n  display: block;\n}\n[data-too-big=\"true\"] .sa-var-manager-value-input {\n  display: none;\n}\n\n.sa-var-manager table {\n  border-radius: 5px;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.sa-var-manager td {\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  text-align: left;\n}\n[theme=\"dark\"] .sa-var-manager td {\n  border-color: #333;\n}\n\n/* tr:nth-child(even) {\n    background-color: #dddddd;\n} */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/icon.svg":
/*!*******************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/icon.svg ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iI0ZGNEM0QyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42NDkgMy4wODRBMSAxIDAgMCAxIDUuMTYzIDQuNCAxMy45NSAxMy45NSAwIDAgMCA0IDEwYzAgMS45OTMuNDE2IDMuODg2IDEuMTY0IDUuNmExIDEgMCAwIDEtMS44MzIuOEExNS45NSAxNS45NSAwIDAgMSAyIDEwYzAtMi4yNzQuNDc1LTQuNDQgMS4zMzItNi40YTEgMSAwIDAgMSAxLjMxNy0uNTE2ek0xMi45NiA3YTMgMyAwIDAgMC0yLjM0MiAxLjEyNmwtLjMyOC40MS0uMTExLS4yNzlBMiAyIDAgMCAwIDguMzIzIDdIOGExIDEgMCAwIDAgMCAyaC4zMjNsLjUzMiAxLjMzLTEuMDM1IDEuMjk1YTEgMSAwIDAgMS0uNzgxLjM3NUg3YTEgMSAwIDEgMCAwIDJoLjAzOWEzIDMgMCAwIDAgMi4zNDItMS4xMjZsLjMyOC0uNDEuMTExLjI3OUEyIDIgMCAwIDAgMTEuNjc3IDE0SDEyYTEgMSAwIDEgMCAwLTJoLS4zMjNsLS41MzItMS4zMyAxLjAzNS0xLjI5NUExIDEgMCAwIDEgMTIuOTYxIDlIMTNhMSAxIDAgMSAwIDAtMmgtLjAzOXptMS44NzQtMi42YTEgMSAwIDAgMSAxLjgzMy0uOEExNS45NSAxNS45NSAwIDAgMSAxOCAxMGMwIDIuMjc0LS40NzUgNC40NC0xLjMzMiA2LjRhMSAxIDAgMSAxLTEuODMyLS44QTEzLjk0OSAxMy45NDkgMCAwIDAgMTYgMTBjMC0xLjk5My0uNDE2LTMuODg2LTEuMTY1LTUuNnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPgo=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/search.svg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/search.svg ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIgZmlsbD0iI0QzRDNEMyIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=");

/***/ }),

/***/ "./src/addons/addons/variable-manager/_runtime_entry.js":
/*!**************************************************************!*\
  !*** ./src/addons/addons/variable-manager/_runtime_entry.js ***!
  \**************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/variable-manager/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/variable-manager/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./icon.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/icon.svg");
/* harmony import */ var _url_loader_search_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./search.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/search.svg");
/* generated by pull.js */




const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "icon.svg": _url_loader_icon_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "search.svg": _url_loader_search_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/***/ }),

/***/ "./src/addons/addons/variable-manager/search.svg":
/*!*******************************************************!*\
  !*** ./src/addons/addons/variable-manager/search.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/1821649bb254ff5d93bb397ad646a23f.svg";

/***/ }),

/***/ "./src/addons/addons/variable-manager/userscript.js":
/*!**********************************************************!*\
  !*** ./src/addons/addons/variable-manager/userscript.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  console,
  msg
}) {
  const vm = addon.tab.traps.vm;
  let localVariables = [];
  let globalVariables = [];
  let preventUpdate = false;
  const manager = document.createElement("div");
  manager.classList.add(addon.tab.scratchClass("asset-panel_wrapper"), "sa-var-manager");
  const searchBox = document.createElement("input");
  searchBox.placeholder = msg("search");
  searchBox.className = addon.tab.scratchClass("input_input-form", {
    others: "sa-var-manager-searchbox"
  });
  searchBox.addEventListener("input", e => {
    for (const variable of localVariables) {
      variable.handleSearch(searchBox.value);
    }

    for (const variable of globalVariables) {
      variable.handleSearch(searchBox.value);
    }

    updateHeadingVisibility();
  });
  manager.appendChild(searchBox);
  const localVars = document.createElement("div");
  const localHeading = document.createElement("span");
  const localList = document.createElement("table");
  localHeading.className = "sa-var-manager-heading";
  localHeading.innerText = msg("for-this-sprite");
  localVars.appendChild(localHeading);
  localVars.appendChild(localList);
  const globalVars = document.createElement("div");
  const globalHeading = document.createElement("span");
  const globalList = document.createElement("table");
  globalHeading.className = "sa-var-manager-heading";
  globalHeading.innerText = msg("for-all-sprites");
  globalVars.appendChild(globalHeading);
  globalVars.appendChild(globalList);
  manager.appendChild(localVars);
  manager.appendChild(globalVars);
  const varTab = document.createElement("li");
  addon.tab.displayNoneWhileDisabled(varTab, {
    display: "flex"
  });
  varTab.classList.add(addon.tab.scratchClass("react-tabs_react-tabs__tab"), addon.tab.scratchClass("gui_tab")); // Cannot use number due to conflict after leaving and re-entering editor

  varTab.id = "react-tabs-sa-variable-manager";
  const varTabIcon = document.createElement("img");
  varTabIcon.draggable = false;
  varTabIcon.src = addon.self.getResource("/icon.svg")
  /* rewritten by pull.js */
  ;
  const varTabText = document.createElement("span");
  varTabText.innerText = msg("variables");
  varTab.appendChild(varTabIcon);
  varTab.appendChild(varTabText);

  function updateHeadingVisibility() {
    // used to hide the headings if there are no variables
    let filteredLocals = localVariables.filter(v => v.row.style.display !== "none");
    let filteredGlobals = globalVariables.filter(v => v.row.style.display !== "none");
    localHeading.style.display = filteredLocals.length === 0 ? "none" : "";
    globalHeading.style.display = filteredGlobals.length === 0 ? "none" : "";
  }

  const rowToVariableMap = new WeakMap();
  const observer = new IntersectionObserver(changes => {
    for (const change of changes) {
      const variable = rowToVariableMap.get(change.target);
      variable.setVisible(change.isIntersecting);
    }
  }, {
    rootMargin: "100px"
  });

  class WrappedVariable {
    constructor(scratchVariable, target) {
      this.scratchVariable = scratchVariable;
      this.target = target;
      this.visible = false;
      this.ignoreTooBig = false;
      this.buildDOM();
    }

    updateValue(force) {
      if (!this.visible && !force) return;
      let newValue;
      let maxSafeLength;

      if (this.scratchVariable.type === "list") {
        newValue = this.scratchVariable.value.join("\n");
        maxSafeLength = 5000000;
      } else {
        newValue = this.scratchVariable.value;
        maxSafeLength = 1000000;
      }

      if (!this.ignoreTooBig && newValue.length > maxSafeLength) {
        this.input.value = "";
        this.row.dataset.tooBig = true;
        return;
      }

      this.row.dataset.tooBig = false;

      if (newValue !== this.input.value) {
        this.input.disabled = false;
        this.input.value = newValue;
      }
    }

    handleSearch(search) {
      // this doesn't check if this.visible is true or whatever. maybe that would improve performance while typing into the search box but it's probably fine™
      if (this.scratchVariable.name.toLowerCase().includes(search.toLowerCase()) || !search) {
        // fuzzy searches are lame we are too cool for fuzzy searches (& i doubt they're even the right thing to use here, this should work fine enough)
        this.row.style.display = ""; // make the row normal

        this.updateValue(true); // force it to update because its hidden and it wouldn't be able to otherwise
      } else {
        this.row.style.display = "none"; // set the entire row as hidden
      }
    }

    resizeInputIfList() {
      if (this.scratchVariable.type === "list") {
        this.input.style.height = "auto";
        const height = Math.min(1000, this.input.scrollHeight);

        if (height > 0) {
          this.input.style.height = height + "px";
        }
      }
    }

    setVisible(visible) {
      if (this.visible === visible) return;
      this.visible = visible;

      if (visible) {
        this.updateValue();
      }
    }

    buildDOM() {
      const id = "sa-variable-manager-".concat(this.scratchVariable.id);
      const row = document.createElement("tr");
      this.row = row;
      const labelCell = document.createElement("td");
      labelCell.className = "sa-var-manager-name";
      const label = document.createElement("input");
      label.value = this.scratchVariable.name;
      label.htmlFor = id;

      const onLabelOut = e => {
        e.preventDefault();
        const workspace = Blockly.getMainWorkspace();
        let newName = label.value;

        if (newName === this.scratchVariable.name) {
          // If the name is unchanged before we make sure the cloud prefix exists, there's nothing to do.
          return;
        }

        const CLOUD_SYMBOL = "☁";
        const CLOUD_PREFIX = CLOUD_SYMBOL + " ";

        if (this.scratchVariable.isCloud) {
          if (newName.startsWith(CLOUD_SYMBOL)) {
            if (!newName.startsWith(CLOUD_PREFIX)) {
              // There isn't a space between the cloud symbol and the name, so add one.
              newName = newName.substring(0, 1) + " " + newName.substring(1);
            }
          } else {
            newName = CLOUD_PREFIX + newName;
          }
        }

        let nameAlreadyUsed = false;

        if (this.target.isStage) {
          // Global variables must not conflict with any global variables or local variables in any sprite.
          const existingNames = vm.runtime.getAllVarNamesOfType(this.scratchVariable.type);
          nameAlreadyUsed = existingNames.includes(newName);
        } else {
          // Local variables must not conflict with any global variables or local variables in this sprite.
          nameAlreadyUsed = !!workspace.getVariable(newName, this.scratchVariable.type);
        }

        const isEmpty = !newName.trim();

        if (isEmpty || nameAlreadyUsed) {
          label.value = this.scratchVariable.name;
        } else {
          workspace.renameVariableById(this.scratchVariable.id, newName); // Only update the input's value when we need to to avoid resetting undo history.

          if (label.value !== newName) {
            label.value = newName;
          }
        }
      };

      label.addEventListener("keydown", e => {
        if (e.key === "Enter") e.target.blur();
      });
      label.addEventListener("focusout", onLabelOut);
      label.addEventListener("focus", e => {
        preventUpdate = true;
        manager.classList.add("freeze");
      });
      label.addEventListener("blur", e => {
        preventUpdate = false;
        manager.classList.remove("freeze");
      });
      labelCell.appendChild(label);
      rowToVariableMap.set(row, this);
      observer.observe(row);
      const valueCell = document.createElement("td");
      valueCell.className = "sa-var-manager-value";
      const tooBigElement = document.createElement("button");
      this.tooBigElement = tooBigElement;
      tooBigElement.textContent = msg("too-big");
      tooBigElement.className = "sa-var-manager-too-big";
      tooBigElement.addEventListener("click", () => {
        this.ignoreTooBig = true;
        this.updateValue(true);
      });
      let input;

      if (this.scratchVariable.type === "list") {
        input = document.createElement("textarea");
      } else {
        input = document.createElement("input");
      }

      input.className = "sa-var-manager-value-input";
      input.id = id;
      this.input = input;
      this.updateValue(true);

      if (this.scratchVariable.type === "list") {
        this.input.addEventListener("input", () => this.resizeInputIfList(), false);
      }

      const onInputOut = e => {
        e.preventDefault();

        if (this.scratchVariable.type === "list") {
          vm.setVariableValue(this.target.id, this.scratchVariable.id, input.value.split("\n"));
        } else {
          vm.setVariableValue(this.target.id, this.scratchVariable.id, input.value);
        }

        input.blur();
      };

      input.addEventListener("keydown", e => {
        if (e.target.nodeName === "INPUT" && e.key === "Enter") e.target.blur();
      });
      input.addEventListener("focusout", onInputOut);
      input.addEventListener("focus", e => {
        preventUpdate = true;
        manager.classList.add("freeze");
      });
      input.addEventListener("blur", e => {
        preventUpdate = false;
        manager.classList.remove("freeze");
      });
      valueCell.appendChild(input);
      valueCell.appendChild(tooBigElement);
      row.appendChild(labelCell);
      row.appendChild(valueCell);
      this.handleSearch(searchBox.value);
    }

  }

  function fullReload() {
    var _addon$tab$redux$stat, _addon$tab$redux$stat2, _addon$tab$redux$stat3;

    if (((_addon$tab$redux$stat = addon.tab.redux.state) === null || _addon$tab$redux$stat === void 0 ? void 0 : (_addon$tab$redux$stat2 = _addon$tab$redux$stat.scratchGui) === null || _addon$tab$redux$stat2 === void 0 ? void 0 : (_addon$tab$redux$stat3 = _addon$tab$redux$stat2.editorTab) === null || _addon$tab$redux$stat3 === void 0 ? void 0 : _addon$tab$redux$stat3.activeTabIndex) !== 3 || preventUpdate) return;
    const editingTarget = vm.runtime.getEditingTarget();
    const stage = vm.runtime.getTargetForStage();
    localVariables = editingTarget.isStage ? [] : Object.values(editingTarget.variables).filter(i => i.type === "" || i.type === "list").map(i => new WrappedVariable(i, editingTarget));
    globalVariables = Object.values(stage.variables).filter(i => i.type === "" || i.type === "list").map(i => new WrappedVariable(i, stage));
    updateHeadingVisibility();

    while (localList.firstChild) {
      localList.removeChild(localList.firstChild);
    }

    while (globalList.firstChild) {
      globalList.removeChild(globalList.firstChild);
    }

    for (const variable of localVariables) {
      localList.appendChild(variable.row);
      variable.resizeInputIfList();
    }

    for (const variable of globalVariables) {
      globalList.appendChild(variable.row);
      variable.resizeInputIfList();
    }
  }

  function quickReload() {
    var _addon$tab$redux$stat4, _addon$tab$redux$stat5, _addon$tab$redux$stat6;

    if (((_addon$tab$redux$stat4 = addon.tab.redux.state) === null || _addon$tab$redux$stat4 === void 0 ? void 0 : (_addon$tab$redux$stat5 = _addon$tab$redux$stat4.scratchGui) === null || _addon$tab$redux$stat5 === void 0 ? void 0 : (_addon$tab$redux$stat6 = _addon$tab$redux$stat5.editorTab) === null || _addon$tab$redux$stat6 === void 0 ? void 0 : _addon$tab$redux$stat6.activeTabIndex) !== 3 || preventUpdate) return;

    for (const variable of localVariables) {
      variable.updateValue();
    }

    for (const variable of globalVariables) {
      variable.updateValue();
    }
  }

  function cleanup() {
    localVariables = [];
    globalVariables = [];
  }

  varTab.addEventListener("click", e => {
    addon.tab.redux.dispatch({
      type: "scratch-gui/navigation/ACTIVATE_TAB",
      activeTabIndex: 3
    });
  });

  function setVisible(visible) {
    if (visible) {
      varTab.classList.add(addon.tab.scratchClass("react-tabs_react-tabs__tab--selected"), addon.tab.scratchClass("gui_is-selected"));
      const contentArea = document.querySelector("[class^=gui_tabs]");
      contentArea.insertAdjacentElement("beforeend", manager);
      fullReload();
    } else {
      varTab.classList.remove(addon.tab.scratchClass("react-tabs_react-tabs__tab--selected"), addon.tab.scratchClass("gui_is-selected"));
      manager.remove();
      cleanup();
    }
  }

  addon.tab.redux.initialize();
  addon.tab.redux.addEventListener("statechanged", ({
    detail
  }) => {
    if (detail.action.type === "scratch-gui/navigation/ACTIVATE_TAB") {
      setVisible(detail.action.activeTabIndex === 3);
    } else if (detail.action.type === "scratch-gui/mode/SET_PLAYER") {
      if (!detail.action.isPlayerOnly && addon.tab.redux.state.scratchGui.editorTab.activeTabIndex === 3) {
        // DOM doesn't actually exist yet
        queueMicrotask(() => setVisible(true));
      }
    }
  });
  vm.runtime.on("PROJECT_LOADED", () => {
    try {
      fullReload();
    } catch (e) {
      console.error(e);
    }
  });
  vm.runtime.on("TOOLBOX_EXTENSIONS_NEED_UPDATE", () => {
    try {
      fullReload();
    } catch (e) {
      console.error(e);
    }
  });
  const oldStep = vm.runtime._step;

  vm.runtime._step = function (...args) {
    const ret = oldStep.call(this, ...args);

    try {
      quickReload();
    } catch (e) {
      console.error(e);
    }

    return ret;
  };

  addon.self.addEventListener("disabled", () => {
    if (addon.tab.redux.state.scratchGui.editorTab.activeTabIndex === 3) {
      addon.tab.redux.dispatch({
        type: "scratch-gui/navigation/ACTIVATE_TAB",
        activeTabIndex: 2
      });
    }
  });

  while (true) {
    await addon.tab.waitForElement("[class^='react-tabs_react-tabs__tab-list']", {
      markAsSeen: true,
      reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
      reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
    });
    addon.tab.appendToSharedSpace({
      space: "afterSoundTab",
      element: varTab,
      order: 3
    });
  }
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-variable-manager.js.map