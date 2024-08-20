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

            const projectButton = document.createElement('button');
            projectButton.classList.add('add-task');
            projectButton.setAttribute('unique-project-id', `${project.id}`);
            projectButton.innerHTML = 'Add task';

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

                const taskButton = document.createElement('button');
                taskButton.classList.add('edit-task');
                taskButton.innerHTML = 'Edit';
                taskButton.setAttribute('unique-task-id', `${task.id}`);
                taskButton.setAttribute('parent-project-id', `${project.id}`);
                ul.appendChild(taskButton);
            })

            element.appendChild(title);
            element.appendChild(projectButton);
            element.appendChild(ul);
            container.appendChild(element);
        })
        openNewTaskModal();
        closeButtonTaskModal();
        editTask();
    }

    const editTask = () => {
        const editTaskButton = document.querySelectorAll('.edit-task');
        const addTaskModal = document.querySelector('.add-tasks-modal');

        editTaskButton.forEach((button) => {
            button.addEventListener('click', (e) => {
                addTaskModal.style.display = 'block';
                const projectId = e.target.getAttribute('parent-project-id');
                const taskId = e.target.getAttribute('unique-task-id');
                console.log('projectId', projectId);
                console.log('taskId', taskId);
                taskManager.editTask(projectId, taskId);
                
            })
        })
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

                const projectId = e.target.getAttribute('unique-project-id');
                domProjectId = projectId;
            })
        })
    }

    const closeButtonTaskModal = () => {
        const button = document.querySelector('.close-new-tasks-modal');

        button.addEventListener('click', () => {
            closeTaskMoal();
        })
    }

    const closeTaskMoal = () => {
        const addTaskModal = document.querySelector('.add-tasks-modal');

        clearNewTaskModal();
        addTaskModal.style.display = 'none';
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

    let taskCard;

    const addNewTask = () => {
        const addNewTaskSubmit = document.querySelector('.submit-new-task');

        addNewTaskSubmit.addEventListener('click', () => {
            const taskInputValue = document.querySelector('#task').value;
            const descriptionInputValue = document.querySelector('#description').value;
            const dueInputValue = document.querySelector('#due').value;
            const priorityInputValue = document.querySelector('#priority').value;
            const notesInputValue = document.querySelector('#notes').value;
            const statusInputValue = document.querySelector('#status').value;

            taskCard = taskManager.newTask(taskInputValue, descriptionInputValue, dueInputValue, priorityInputValue, notesInputValue, statusInputValue);
            console.log('taskCard', taskCard)

            taskManager.addToProject(domProjectId, taskCard);
            renderProjects();
            closeTaskMoal();
        })
    }

    return { newProject, renderProjects, domProjectId, addNewTask, taskCard }

})()



