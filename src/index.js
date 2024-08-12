import "./style.css";
import { projectManager } from "./project-manager.js";
import { taskManager } from "./task-manager.js";

console.log('empty project library: ');
projectManager.renderProjects(); 

console.log('creating project... ');
projectManager.createProject();

console.log('library with one project: ');
projectManager.renderProjects();

console.log('creating project 2... ');
projectManager.createProject();

console.log('library with two projects: ');
projectManager.renderProjects();

console.log('finding a specific project', projectManager.projectsLibrary[1]);

console.log('making new task...');
taskManager.newTask('Odin Project', 'Finish course', '2020-01-01', 'High', 'Self-study', 'incomplete');

console.log('adding task to project[1]...');
taskManager.addToProject(projectManager.projectsLibrary[1]);

console.log('library with two projects and one task in project[1]: ');
projectManager.renderProjects();

console.log('clearing task card...');
taskManager.clearTaskCard();

console.log('making new task...');
taskManager.newTask('Odin Project2', 'Finish course2', '2020-01-012', 'High2', 'Self-study2', 'incomplete');

console.log('adding another task to project[1]...');
taskManager.addToProject(projectManager.projectsLibrary[1]);

console.log('library with two projects and two tasks in project[1]: ');
projectManager.renderProjects();

console.log('clearing task card...');
taskManager.clearTaskCard();

console.log('making new task...');
taskManager.newTask('Odin Project3', 'Finish course3', '2020-01-013', 'High3', 'Self-study3', 'incomplete');

console.log('adding another task to project[1]...');
taskManager.addToProject(projectManager.projectsLibrary[0]);

console.log('library with two projects and two tasks in project[1] and one task in project[0]: ');
projectManager.renderProjects();

console.log('clearing task card...');
taskManager.clearTaskCard();

taskManager.editTask(projectManager.projectsLibrary[0], 0, 'due', 'changed');

projectManager.renderProjects();

/*
console.log('removing task[1] from project[1]...');
taskManager.removeTask(projectManager.projectsLibrary[1], 1, 1);

console.log('library with two projects and one task in project[1] and one task in project[0]: ')
projectManager.renderProjects();

console.log('removing project[1]... ');
projectManager.removeProject(1, 1);

console.log('library with one project and one task in project[0]: ')
projectManager.renderProjects();
*/