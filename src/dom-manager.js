export { domManager };

import "./style.css";
import { projectManager } from "./project-manager.js";
import { taskManager } from "./task-manager.js";

const domManager = (function DomManager() {

    const newProject = () => {
        const newProjectInput = document.querySelector('.input-new-project');
        const submitProjectInput = document.querySelector('.submit-new-project');

        submitProjectInput.addEventListener('click', () => {
            projectManager.createProject(newProjectInput.value);
            projectManager.renderProjects();
            domManager.renderProjects();
        }) 
    }

    const newTask = () => {
        
    }

    const renderProjects = () => {
        clearProjectsDOM();
        projectManager.projectsLibrary.forEach((project) => {
            const container = document.querySelector('.projects-container');

            const element = document.createElement('div');
            element.classList.add('project');
    
            const title = document.createElement('h2');
            title.innerHTML = project.name;

            const button = document.createElement('button');
            button.classList.add('add-task-button');
            button.setAttribute('unique-id', `${project.id}`);
            button.innerHTML = 'Add task';

            element.appendChild(title);
            element.appendChild(button);
            container.appendChild(element);
        })
    }

    const clearProjectsDOM = () => {
        const container = document.querySelector('.projects-container');
        container.innerHTML = '';
    }

    return { newProject, renderProjects }

})()

/*
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
*/