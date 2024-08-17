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

    const renderProjects = () => {
        clearProjectsDOM();
        projectManager.projectsLibrary.forEach((project) => {
            const container = document.querySelector('.projects-container');

            const element = document.createElement('div');
    
            const title = document.createElement('h2');
            title.innerHTML = project.name;

            const button = document.createElement('button');
            button.classList.add('add-task');
            button.setAttribute('unique-id', `${project.id}`);
            button.innerHTML = 'Add task';

            const ul = document.createElement('ul');
            project.tasks.forEach((task) => {
                const li = document.createElement('li');
                li.innerHTML = `
                id: ${task.id},
                task: ${task.task},
                description: ${task.description},
                due: ${task.due},
                priority: ${task.priority},
                notes: ${task.notes},
                status: ${task.status}
                `;
                ul.appendChild(li);
            })

            element.appendChild(title);
            element.appendChild(button);
            element.appendChild(ul);
            container.appendChild(element);
        })
        openNewTaskModal();
        closeNewTaskModal();
    }

    const clearProjectsDOM = () => {
        const container = document.querySelector('.projects-container');
        container.innerHTML = '';
    }

    let domProjectId;

    const openNewTaskModal = () => {
        const addTaskButton = document.querySelectorAll('.add-task');
        const addTaskModal = document.querySelector('.add-tasks-modal');

        addTaskButton.forEach((button) => {
            button.addEventListener('click', (e) => {
                addTaskModal.style.display = 'block';
                const projectId = e.target.getAttribute('unique-id');
                console.log(projectId); // need to pass this to the task manager
                domProjectId = projectId;
            })
        })
    }

    const closeNewTaskModal = () => {
        const button = document.querySelector('.close-new-tasks-modal');
        const addTaskModal = document.querySelector('.add-tasks-modal');

        button.addEventListener('click', () => {
            clearNewTaskModal();
            addTaskModal.style.display = 'none';
        })
    }

    const clearNewTaskModal = () => {
        const taskInput = document.querySelector('#task');
        const descriptionInput = document.querySelector('#description')
        const dueInput = document.querySelector('#due');
        const priorityInput = document.querySelector('#priority');
        const notesInput = document.querySelector('#notes');
        const statusInput = document.querySelector('#status');

        taskInput.value = '';
        descriptionInput.value = '';
        dueInput.value = '';
        priorityInput.value = 'medium';
        notesInput.value = '';
        statusInput.value = 'incomplete';
    }

    return { newProject, renderProjects }

})()



