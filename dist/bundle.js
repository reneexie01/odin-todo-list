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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager */ \"./src/project-manager.js\");\n/* harmony import */ var _task_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-manager */ \"./src/task-manager.js\");\n\n\n\n\nconsole.log('empty project library: ');\n_project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.renderProjects(); \n\nconsole.log('creating project... ');\n_project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.createProject();\n\nconsole.log('library with one project: ');\n_project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.renderProjects();\n\nconsole.log('creating project 2... ');\n_project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.createProject();\n\nconsole.log('library with two projects: ');\n_project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.renderProjects();\n\nconsole.log('finding a specific project', _project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.projectsLibrary[1]);\n\nconsole.log('making new task...');\n_task_manager__WEBPACK_IMPORTED_MODULE_1__.taskManager.newTask('Odin Project', 'Finish course', '2020-01-01', 'High', 'Self-study', 'incomplete');\n\nconsole.log('adding task to project[1]...');\n_task_manager__WEBPACK_IMPORTED_MODULE_1__.taskManager.addToProject(_project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.projectsLibrary[1]);\n\nconsole.log('library with two projects and one task in project[1]: ');\n_project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.renderProjects();\n\nconsole.log('clearing task card...');\n_task_manager__WEBPACK_IMPORTED_MODULE_1__.taskManager.clearTaskCard();\n\nconsole.log('making new task...');\n_task_manager__WEBPACK_IMPORTED_MODULE_1__.taskManager.newTask('Odin Project2', 'Finish course2', '2020-01-012', 'High2', 'Self-study2', 'incomplete');\n\nconsole.log('adding another task to project[1]...');\n_task_manager__WEBPACK_IMPORTED_MODULE_1__.taskManager.addToProject(_project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.projectsLibrary[1]);\n\nconsole.log('library with two projects and two tasks in project[1]: ');\n_project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.renderProjects();\n\nconsole.log('clearing task card...');\n_task_manager__WEBPACK_IMPORTED_MODULE_1__.taskManager.clearTaskCard();\n\nconsole.log('making new task...');\n_task_manager__WEBPACK_IMPORTED_MODULE_1__.taskManager.newTask('Odin Project3', 'Finish course3', '2020-01-013', 'High3', 'Self-study3', 'incomplete');\n\nconsole.log('adding another task to project[1]...');\n_task_manager__WEBPACK_IMPORTED_MODULE_1__.taskManager.addToProject(_project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.projectsLibrary[0]);\n\nconsole.log('library with two projects and two tasks in project[1] and one task in project[0]: ');\n_project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.renderProjects();\n\nconsole.log('clearing task card...');\n_task_manager__WEBPACK_IMPORTED_MODULE_1__.taskManager.clearTaskCard();\n\n_task_manager__WEBPACK_IMPORTED_MODULE_1__.taskManager.editTask(_project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.projectsLibrary[0], 0, 'due', 'changed');\n\n_project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.renderProjects();\n\n/*\nconsole.log('removing task[1] from project[1]...');\ntaskManager.removeTask(projectManager.projectsLibrary[1], 1, 1);\n\nconsole.log('library with two projects and one task in project[1] and one task in project[0]: ')\nprojectManager.renderProjects();\n\nconsole.log('removing project[1]... ');\nprojectManager.removeProject(1, 1);\n\nconsole.log('library with one project and one task in project[0]: ')\nprojectManager.renderProjects();\n*/\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project-manager.js":
/*!********************************!*\
  !*** ./src/project-manager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectManager: () => (/* binding */ projectManager)\n/* harmony export */ });\n\n\nconst projectManager = (function ProjectManager() {\n    \n    let projectsLibrary = [];\n\n    const renderProjects = () => console.log(projectsLibrary);\n\n    const createProject = function() {\n        let project = [];\n        projectsLibrary.push(project);\n    }\n\n    const removeProject = (start, deleteCount) => {\n        projectsLibrary.splice(start, deleteCount);\n    }\n\n    return { renderProjects, createProject, projectsLibrary, removeProject };\n})();\n\n//# sourceURL=webpack://odin-todo-list/./src/project-manager.js?");

/***/ }),

/***/ "./src/task-manager.js":
/*!*****************************!*\
  !*** ./src/task-manager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskManager: () => (/* binding */ taskManager)\n/* harmony export */ });\n\n\nconst taskManager = (function TaskManager() {\n\n    let taskCard = {};\n\n    const newTask = (task, description, due, priority, notes, status) => {\n        taskCard = {\n            'task' : task, \n            'description' : description, \n            'due' : due,\n            'priority' : priority,\n            'notes' : notes,\n            'status' : status,\n        }\n        \n        return taskCard;\n    }\n\n    const addToProject = (project) => {\n        project.push(taskCard);\n    }\n\n    const clearTaskCard = (taskCard) => {\n        taskCard = {};\n    }\n\n    const removeTask = (project, start, deleteCount) => {\n        project.splice(start, deleteCount);\n    }\n\n    const editTask = (project, index, specification, replacement) => {\n        project[index][`${specification}`] = replacement;\n    }\n\n    return { newTask, addToProject, clearTaskCard, removeTask, editTask }\n})();\n\n//# sourceURL=webpack://odin-todo-list/./src/task-manager.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;