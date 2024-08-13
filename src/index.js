import "./style.css";
import { projectManager } from "./project-manager.js";
import { taskManager } from "./task-manager.js";

const domManager = (function DomManager() {

    const newProjectInput = document.querySelector('.input-new-project').value;
    const submitProjectInput = document.querySelector('.submit-new-project');
    const projectsContainer = document.querySelector('.projects-container');

})()

console.log('empty project library: ');
projectManager.renderProjects(); 

console.log('create a project ');
projectManager.createProject('project0');

console.log('render project library');
projectManager.renderProjects(); 

console.log('creating a new task...');
taskManager.newTask('todo', 'complete todo list', '10/08/2024', 'high', 'notes for todo', 'incomplete');

console.log('adding to project0');
taskManager.addToProject(projectManager.projectsLibrary[0].tasks);

console.log('render project library');
projectManager.renderProjects(); 

console.log('clear taskcard');
taskManager.clearTaskCard();

console.log('create a project ');
projectManager.createProject('project1');

console.log('render project library');
projectManager.renderProjects(); 

console.log('creating a new task...');
taskManager.newTask('todo1', 'complete todo list1', '10/08/20241', 'high1', 'notes for todo1', 'incomplete1');

console.log('adding to project1');
taskManager.addToProject(projectManager.projectsLibrary[1].tasks);

console.log('clear taskcard');
taskManager.clearTaskCard();

console.log('creating a new task...');
taskManager.newTask('todo1', 'complete todo list1', '10/08/20241', 'high1', 'notes for todo1', 'incomplete1');

console.log('adding to project1');
taskManager.addToProject(projectManager.projectsLibrary[1].tasks);

console.log('render project library');
projectManager.renderProjects(); 