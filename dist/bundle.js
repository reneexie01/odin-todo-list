/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const projectManager = (function ProjectManager() {\n    \n    let projectsLibrary = [];\n\n    const renderProjects = () => console.log(projectsLibrary);\n\n    const createProject = function() {\n        let project = [];\n        projectsLibrary.push(project);\n    }\n\n    const removeProject = (start, deleteCount) => {\n        projectsLibrary.splice(start, deleteCount);\n    }\n\n    return { renderProjects, createProject, projectsLibrary, removeProject };\n})();\n\nconst taskManager = (function TaskManager() {\n\n    let taskCard = {};\n\n    const newTask = (task, description, due, priority, notes) => {\n        taskCard = {\n            'task' : task, \n            'description' : description, \n            'due' : due,\n            'priority' : priority,\n            'notes' : notes,\n        }\n        \n        return taskCard;\n    }\n\n    const addToProject = (project) => {\n        project.push(taskCard);\n    }\n\n    const clearTaskCard = (taskCard) => {\n        taskCard = {};\n    }\n\n    const removeTask = (project, start, deleteCount) => {\n        project.splice(start, deleteCount);\n    }\n\n    return { newTask, addToProject, clearTaskCard, removeTask }\n})();\n\n\nconsole.log('empty project library: ');\nprojectManager.renderProjects(); \n\nconsole.log('creating project... ');\nprojectManager.createProject();\n\nconsole.log('library with one project: ');\nprojectManager.renderProjects();\n\nconsole.log('creating project 2... ');\nprojectManager.createProject();\n\nconsole.log('library with two projects: ');\nprojectManager.renderProjects();\n\nconsole.log('finding a specific project', projectManager.projectsLibrary[1]);\n\nconsole.log('making new task...');\ntaskManager.newTask('Odin Project', 'Finish course', '2020-01-01', 'High', 'Self-study');\n\nconsole.log('adding task to project[1]...');\ntaskManager.addToProject(projectManager.projectsLibrary[1]);\n\nconsole.log('library with two projects and one task in project[1]: ');\nprojectManager.renderProjects();\n\nconsole.log('clearing task card...');\ntaskManager.clearTaskCard();\n\nconsole.log('making new task...');\ntaskManager.newTask('Odin Project2', 'Finish course2', '2020-01-012', 'High2', 'Self-study2');\n\nconsole.log('adding another task to project[1]...');\ntaskManager.addToProject(projectManager.projectsLibrary[1]);\n\nconsole.log('library with two projects and two tasks in project[1]: ');\nprojectManager.renderProjects();\n\nconsole.log('clearing task card...');\ntaskManager.clearTaskCard();\n\nconsole.log('making new task...');\ntaskManager.newTask('Odin Project3', 'Finish course3', '2020-01-013', 'High3', 'Self-study3');\n\nconsole.log('adding another task to project[1]...');\ntaskManager.addToProject(projectManager.projectsLibrary[0]);\n\nconsole.log('library with two projects and two tasks in project[1] and one task in project[0]: ');\nprojectManager.renderProjects();\n\nconsole.log('clearing task card...');\ntaskManager.clearTaskCard();\n\nconsole.log('removing task[1] from project[1]...');\ntaskManager.removeTask(projectManager.projectsLibrary[1], 1, 1);\n\nconsole.log('library with two projects and one task in project[1] and one task in project[0]: ')\nprojectManager.renderProjects();\n\nconsole.log('removing project[1]... ');\nprojectManager.removeProject(1, 1);\n\nconsole.log('library with one project and one task in project[0]: ')\nprojectManager.renderProjects();\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;