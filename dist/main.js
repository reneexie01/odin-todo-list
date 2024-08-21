/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.add-tasks-modal, .edit-tasks-modal {\n    display: none;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom-manager.js":
/*!****************************!*\
  !*** ./src/dom-manager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domManager: () => (/* binding */ domManager)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _project_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-manager.js */ \"./src/project-manager.js\");\n/* harmony import */ var _task_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-manager.js */ \"./src/task-manager.js\");\n\n\n\n\n\n\nconst domManager = (function DomManager() {\n\n    const newProject = () => {\n        const newProjectInput = document.querySelector('.input-new-project');\n        const submitProjectInput = document.querySelector('.submit-new-project');\n\n        submitProjectInput.addEventListener('click', () => {\n            _project_manager_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.createProject(newProjectInput.value);\n            _project_manager_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.renderProjects();\n            domManager.renderProjects();\n        }) \n    }\n\n    const renderProjects = () => {\n        clearProjectsDOM();\n        _project_manager_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.projectsLibrary.forEach((project) => {\n            const container = document.querySelector('.projects-container');\n\n            const element = document.createElement('div');\n    \n            const title = document.createElement('h2');\n            title.innerHTML = `${project.name} id: ${project.id}`;\n\n            const projectButton = document.createElement('button');\n            projectButton.classList.add('add-task');\n            projectButton.setAttribute('unique-project-id', `${project.id}`);\n            projectButton.innerHTML = 'Add task';\n\n            const deleteProjectButton = document.createElement('button');\n            deleteProjectButton.classList.add('delete-project');\n            deleteProjectButton.setAttribute('unique-project-id', `${project.id}`);\n            deleteProjectButton.innerHTML = 'Delete project';\n\n            const ul = document.createElement('ul');\n            project.tasks.forEach((task) => {\n                const li = document.createElement('li');\n                li.innerHTML = `\n                id: ${task.id},\n                task: ${task.task},\n                description: ${task.description},\n                due: ${task.due},\n                priority: ${task.priority},\n                notes: ${task.notes},\n                status: ${task.status}\n                `;\n                ul.appendChild(li);\n\n                const taskButton = document.createElement('button');\n                taskButton.classList.add('edit-task');\n                taskButton.innerHTML = 'Edit';\n                taskButton.setAttribute('unique-task-id', `${task.id}`);\n                taskButton.setAttribute('parent-project-id', `${project.id}`);\n                ul.appendChild(taskButton);\n\n                const deleteButton = document.createElement('button');\n                deleteButton.classList.add('delete-task');\n                deleteButton.innerHTML = 'Delete task';\n                deleteButton.setAttribute('unique-task-id', `${task.id}`);\n                deleteButton.setAttribute('parent-project-id', `${project.id}`);\n                ul.appendChild(deleteButton);\n            })\n\n            element.appendChild(title);\n            element.appendChild(projectButton);\n            element.appendChild(deleteProjectButton);\n            element.appendChild(ul);\n            container.appendChild(element);\n        })\n        openNewTaskModal();\n        closeButtonNewTaskModal();\n        closeButtonEditTaskModal();\n        editTask();\n        submitEditedTask();\n        deleteTask();\n    }\n\n    const clearProjectsDOM = () => {\n        const container = document.querySelector('.projects-container');\n        container.innerHTML = '';\n    }\n\n    let domProjectId;\n\n    // New task modal functions\n    const openNewTaskModal = () => {\n        const addTaskButton = document.querySelectorAll('.add-task');\n        const addTaskModal = document.querySelector('.add-tasks-modal');\n\n        addTaskButton.forEach((button) => {\n            button.addEventListener('click', (e) => {\n                addTaskModal.style.display = 'block';\n\n                const projectId = e.target.getAttribute('unique-project-id');\n                domProjectId = projectId;\n            })\n        })\n    }\n\n    const closeButtonNewTaskModal = () => {\n        const button = document.querySelector('.close-new-tasks-modal');\n\n        button.addEventListener('click', () => {\n            closeNewTaskModal();\n        })\n    }\n\n    const closeNewTaskModal = () => {\n        const addTaskModal = document.querySelector('.add-tasks-modal');\n\n        clearNewTaskModal();\n        addTaskModal.style.display = 'none';\n    }\n\n    const clearNewTaskModal = () => {\n        const taskInput = document.querySelector('#task');\n        const descriptionInput = document.querySelector('#description')\n        const dueInput = document.querySelector('#due');\n        const priorityInput = document.querySelector('#priority');\n        const notesInput = document.querySelector('#notes');\n        const statusInput = document.querySelector('#status');\n\n        taskInput.value = '';\n        descriptionInput.value = '';\n        dueInput.value = '';\n        priorityInput.value = 'medium';\n        notesInput.value = '';\n        statusInput.value = 'incomplete';\n    }\n\n    let taskCard;\n\n    const addNewTask = () => {\n        const addNewTaskSubmit = document.querySelector('.submit-new-task');\n\n        addNewTaskSubmit.addEventListener('click', () => {\n            const taskInputValue = document.querySelector('#task').value;\n            const descriptionInputValue = document.querySelector('#description').value;\n            const dueInputValue = document.querySelector('#due').value;\n            const priorityInputValue = document.querySelector('#priority').value;\n            const notesInputValue = document.querySelector('#notes').value;\n            const statusInputValue = document.querySelector('#status').value;\n\n            taskCard = _task_manager_js__WEBPACK_IMPORTED_MODULE_2__.taskManager.newTask(taskInputValue, descriptionInputValue, dueInputValue, priorityInputValue, notesInputValue, statusInputValue);\n            console.log('taskCard', taskCard)\n\n            _task_manager_js__WEBPACK_IMPORTED_MODULE_2__.taskManager.addToProject(domProjectId, taskCard);\n            renderProjects();\n            closeNewTaskModal();\n        })\n    }\n\n    let projectId = null;\n    let taskId = null;\n\n    // Edit task modal functions\n    const editTask = () => {\n        const editTaskButton = document.querySelectorAll('.edit-task');\n        const editTaskModal = document.querySelector('.edit-tasks-modal');\n\n        editTaskButton.forEach((button) => {\n            button.addEventListener('click', (e) => {\n                editTaskModal.style.display = 'block';\n                projectId = e.target.getAttribute('parent-project-id');\n                taskId = e.target.getAttribute('unique-task-id');\n                _task_manager_js__WEBPACK_IMPORTED_MODULE_2__.taskManager.editTask(projectId, taskId);\n            })\n        })\n    } \n\n    const closeButtonEditTaskModal = () => {\n        const button = document.querySelector('.close-edit-tasks-modal');\n\n        button.addEventListener('click', () => {\n            closeEditTaskModal();\n        })\n    }\n\n    const closeEditTaskModal = () => {\n        const addTaskModal = document.querySelector('.edit-tasks-modal');\n        addTaskModal.style.display = 'none';\n    }\n\n    const submitEditedTask = () => {\n        const submitEditTaskButton = document.querySelector('.submit-edit-task');\n        submitEditTaskButton.addEventListener('click', () => {\n            _task_manager_js__WEBPACK_IMPORTED_MODULE_2__.taskManager.updateTask(projectId, taskId);\n            renderProjects();\n            closeEditTaskModal();\n        })\n    }\n\n    //TODO: Add delete task functionality\n    \n    const deleteTask = () => {\n        const deleteTaskButton = document.querySelectorAll('.delete-task');\n\n        deleteTaskButton.forEach((button) => {\n            button.addEventListener('click', (e) => {\n                projectId = e.target.getAttribute('parent-project-id');\n                taskId = e.target.getAttribute('unique-task-id');\n                _task_manager_js__WEBPACK_IMPORTED_MODULE_2__.taskManager.removeTask(projectId, taskId)\n                renderProjects();\n            })\n        })\n    }\n    //TODO: Add delete project functionality\n\n    return { newProject, renderProjects, domProjectId, addNewTask, taskCard, submitEditedTask }\n\n})()\n\n\n\n\n\n//# sourceURL=webpack://odin-todo-list/./src/dom-manager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manager */ \"./src/dom-manager.js\");\n\n\n_dom_manager__WEBPACK_IMPORTED_MODULE_0__.domManager.newProject();\n_dom_manager__WEBPACK_IMPORTED_MODULE_0__.domManager.renderProjects();\n_dom_manager__WEBPACK_IMPORTED_MODULE_0__.domManager.addNewTask();\n\n\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project-manager.js":
/*!********************************!*\
  !*** ./src/project-manager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectManager: () => (/* binding */ projectManager)\n/* harmony export */ });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/tools.js\");\n\n\n\n\nconst projectManager = (function ProjectManager() {\n    \n    let projectsLibrary = [\n        {\n            'id' : '_e4a63i5w4',\n            'name' : 'Project0',\n            'tasks' : [\n                {\n                    'id' : '_in3h7kmle',\n                    'task' : 'Todo project0',\n                    'description' : 'Complete todo list0',\n                    'due' : '2024-08-08',\n                    'priority' : 'high',\n                    'notes' : 'Notes for Todo project',\n                    'status' : 'incomplete'\n                },\n                {\n                    'id' : '_la9ri6h7u',\n                    'task' : 'Todo project1',\n                    'description' : 'Complete todo list',\n                    'due' : '2024-08-08',\n                    'priority' : 'high',\n                    'notes' : 'Notes for Todo project1',\n                    'status' : 'incomplete'\n                }\n            ],\n        },\n        {\n            'id' : '_l2d5zsehd',\n            'name' : 'Project1',\n            'tasks' : [\n                {\n                    'id' : '_jm3i7lnmf',\n                    'task' : 'Todo project2',\n                    'description' : 'Complete todo list2',\n                    'due' : '2024-08-08',\n                    'priority' : 'high',\n                    'notes' : 'Notes for Todo project2',\n                    'status' : 'incomplete'\n                },\n            ],\n        }\n    ];\n\n    let project = {};\n\n    const renderProjects = () => console.log(projectsLibrary);\n\n    const createProject = (name) => {\n        project = {\n            'id' : _tools__WEBPACK_IMPORTED_MODULE_0__.toolsManager.generateUniqueId(),\n            'name' : name,\n            'tasks' : []\n        }\n        projectsLibrary.push(project);\n    }\n\n    const removeProject = (start, deleteCount) => {\n        projectsLibrary.splice(start, deleteCount);\n    }\n\n    return { renderProjects, createProject, projectsLibrary, removeProject };\n})();\n\n//# sourceURL=webpack://odin-todo-list/./src/project-manager.js?");

/***/ }),

/***/ "./src/task-manager.js":
/*!*****************************!*\
  !*** ./src/task-manager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskManager: () => (/* binding */ taskManager)\n/* harmony export */ });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/tools.js\");\n/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-manager */ \"./src/project-manager.js\");\n\n\n\n\n\nconst taskManager = (function TaskManager() {\n\n    const newTask = (task, description, due, priority, notes, status) => {\n        let taskCard = {\n            'id' : _tools__WEBPACK_IMPORTED_MODULE_0__.toolsManager.generateUniqueId(),\n            'task' : task, \n            'description' : description, \n            'due' : due,\n            'priority' : priority,\n            'notes' : notes,\n            'status' : status,\n        }\n        return taskCard;\n    }\n\n    const addToProject = (projectId, taskItem) => {\n        let project;\n        project = _project_manager__WEBPACK_IMPORTED_MODULE_1__.projectManager.projectsLibrary.filter((project) => project.id === projectId)\n        project[0].tasks.push(taskItem);\n    }\n\n    const clearTaskCard = () => {\n        taskCard = {};\n    }\n\n    const removeTask = (projectId, taskId) => {\n        let project;\n        project = _project_manager__WEBPACK_IMPORTED_MODULE_1__.projectManager.projectsLibrary.filter((project) => project.id === projectId);\n        \n        for (let i = 0; i< project[0].tasks.length; i++) {\n            let selectedTask = project[0].tasks[i];\n\n            if (selectedTask.id === taskId) {\n                project[0].tasks.splice(i, 1);\n            }\n        }\n        }\n\n    const editTask = (projectId, taskId) => {\n\n        const taskInput = document.querySelector('#edit-task');\n        const descriptionInput = document.querySelector('#edit-description');\n        const dueInput = document.querySelector('#edit-due');\n        const priorityInput = document.querySelector('#edit-priority');\n        const notesInput = document.querySelector('#edit-notes');\n        const statusInput = document.querySelector('#edit-status');\n\n        let project;\n        project = _project_manager__WEBPACK_IMPORTED_MODULE_1__.projectManager.projectsLibrary.filter((project) => project.id === projectId);\n\n        for (let i = 0; i < project[0].tasks.length; i++) {\n            let selectedTask = project[0].tasks[i];\n\n            if (selectedTask.id === taskId) {\n                taskInput.value = selectedTask.task;\n                descriptionInput.value = selectedTask.description;\n                dueInput.value = selectedTask.due;\n                priorityInput.value = selectedTask.priority;\n                notesInput.value = selectedTask.notes;\n                statusInput.value = selectedTask.status;\n            }\n        }\n    }\n\n    const updateTask = (projectId, taskId) => {\n        const taskInput = document.querySelector('#edit-task');\n        const descriptionInput = document.querySelector('#edit-description');\n        const dueInput = document.querySelector('#edit-due');\n        const priorityInput = document.querySelector('#edit-priority');\n        const notesInput = document.querySelector('#edit-notes');\n        const statusInput = document.querySelector('#edit-status');\n\n        let project;\n        project = _project_manager__WEBPACK_IMPORTED_MODULE_1__.projectManager.projectsLibrary.filter((project) => project.id === projectId);\n\n        for (let i = 0; i < project[0].tasks.length; i++) {\n            let selectedTask = project[0].tasks[i];\n\n            if (selectedTask.id === taskId) {\n                selectedTask.task = taskInput.value;\n                selectedTask.description = descriptionInput.value;\n                selectedTask.due = dueInput.value;\n                selectedTask.priority = priorityInput.value;\n                selectedTask.notes = notesInput.value;\n                selectedTask.status = statusInput.value;\n            } \n        }\n    }\n\n    return { newTask, addToProject, clearTaskCard, editTask, updateTask, removeTask }\n    \n})()\n\n//# sourceURL=webpack://odin-todo-list/./src/task-manager.js?");

/***/ }),

/***/ "./src/tools.js":
/*!**********************!*\
  !*** ./src/tools.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toolsManager: () => (/* binding */ toolsManager)\n/* harmony export */ });\n\n\nconst toolsManager = (function ToolsManager() {\n\n    const generateUniqueId = () => {\n        return '_' + Math.random().toString(36).substr(2,9);\n    }\n\n    return {generateUniqueId}\n\n})()\n\n\n//# sourceURL=webpack://odin-todo-list/./src/tools.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;