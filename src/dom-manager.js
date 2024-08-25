export { domManager };

import "./style.css";
import { projectManager } from "./project-manager.js";
import { taskManager } from "./task-manager.js";

const domManager = (function DomManager() {

    const newProject = () => {
        const newProjectInput = document.querySelector('.input-new-project');
        const submitProjectInput = document.querySelector('.submit-new-project');
        const submitProjectInputError = document.querySelector('.submit-new-project-error');

        submitProjectInput.addEventListener('click', () => {
            if (newProjectInput.value === '') {
                console.log(`Add a project name`)
                submitProjectInputError.innerHTML = `Add a project name`
                return;
            } else {
                let newProjectSubmission = projectManager.createProject(newProjectInput.value);
                console.log('newProjectSubmission', newProjectSubmission)
                addProjectToLocalStorage(newProjectSubmission);
                projectManager.clearProjects();
                loadProjectFromLocalStorage();
                renderProjects();
                newProjectInput.value = '';
                submitProjectInputError.innerHTML = ``;
            }
        }) 
    }

    const addProjectToLocalStorage = (project) => {
        let projects = JSON.parse(localStorage.getItem('projectsLibrary')) || [];
        projects.push(project);
        localStorage.setItem('projectsLibrary', JSON.stringify(projects));
    }

    const loadProjectFromLocalStorage = () => {
        const projects = JSON.parse(localStorage.getItem('projectsLibrary')) || [];
        projectManager.projectsLibrary = projects;
    }

    const updateProjectToLocalStorage = () => {
        let projects = projectManager.projectsLibrary;
        localStorage.setItem('projectsLibrary', JSON.stringify(projects));
    }

    const renderProjects = () => {
        clearProjectsDOM();
        projectManager.clearProjects();
        loadProjectFromLocalStorage();
        projectManager.projectsLibrary.forEach((project) => {
            const container = document.querySelector('.projects-container');

            const element = document.createElement('div');
    
            const title = document.createElement('h2');
            title.innerHTML = `${project.name} id: ${project.id}`;

            const projectButton = document.createElement('button');
            projectButton.classList.add('add-task');
            projectButton.setAttribute('unique-project-id', `${project.id}`);
            projectButton.innerHTML = 'Add task';

            const deleteProjectButton = document.createElement('button');
            deleteProjectButton.classList.add('delete-project');
            deleteProjectButton.setAttribute('unique-project-id', `${project.id}`);
            deleteProjectButton.innerHTML = 'Delete project';

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

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete-task');
                deleteButton.innerHTML = 'Delete task';
                deleteButton.setAttribute('unique-task-id', `${task.id}`);
                deleteButton.setAttribute('parent-project-id', `${project.id}`);
                ul.appendChild(deleteButton);
            });

            element.appendChild(title);
            element.appendChild(projectButton);
            element.appendChild(deleteProjectButton);
            element.appendChild(ul);
            container.appendChild(element);
        });

        openNewTaskModal();
        closeButtonNewTaskModal();
        closeButtonEditTaskModal();
        editTask();
        submitEditedTask();
        deleteTask();
        deleteProject();
    }

    const clearProjectsDOM = () => {
        const container = document.querySelector('.projects-container');
        container.innerHTML = '';
    }

    let domProjectId;

    // New task modal functions
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

    const closeButtonNewTaskModal = () => {
        const button = document.querySelector('.close-new-tasks-modal');

        button.addEventListener('click', () => {
            closeNewTaskModal();
        })
    }

    const closeNewTaskModal = () => {
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
        const submitNewTaskError = document.querySelector('.submit-new-task-error');

        addNewTaskSubmit.addEventListener('click', () => {

            const taskInputValue = document.querySelector('#task').value;
            const descriptionInputValue = document.querySelector('#description').value;
            const dueInputValue = document.querySelector('#due').value;
            const priorityInputValue = document.querySelector('#priority').value;
            const notesInputValue = document.querySelector('#notes').value;
            const statusInputValue = document.querySelector('#status').value;

            if (taskInputValue === '' || descriptionInputValue === '' || dueInputValue === '') {
                submitNewTaskError.innerHTML = `Requires at least a task name, description, and due date`;
                return;
            } else {
                taskCard = taskManager.newTask(taskInputValue, descriptionInputValue, dueInputValue, priorityInputValue, notesInputValue, statusInputValue);
                projectManager.clearProjects();
                loadProjectFromLocalStorage();
                taskManager.addToProject(domProjectId, taskCard);
                console.log(projectManager.projectsLibrary)
                updateProjectToLocalStorage();

                closeNewTaskModal();
                submitNewTaskError.innerHTML = ``;
                renderProjects();
                console.log(projectManager.projectsLibrary)
            }
        })
    }

    let projectId = null;
    let taskId = null;

    // Edit task modal functions
    const editTask = () => {
        const editTaskButton = document.querySelectorAll('.edit-task');
        const editTaskModal = document.querySelector('.edit-tasks-modal');

        editTaskButton.forEach((button) => {
            button.addEventListener('click', (e) => {
                editTaskModal.style.display = 'block';
                projectId = e.target.getAttribute('parent-project-id');
                taskId = e.target.getAttribute('unique-task-id');
                taskManager.editTask(projectId, taskId);
            })
        })
    } 

    const closeButtonEditTaskModal = () => {
        const button = document.querySelector('.close-edit-tasks-modal');

        button.addEventListener('click', () => {
            closeEditTaskModal();
        })
    }

    const closeEditTaskModal = () => {
        const addTaskModal = document.querySelector('.edit-tasks-modal');
        addTaskModal.style.display = 'none';
    }

    const submitEditedTask = () => {
        const submitEditTaskButton = document.querySelector('.submit-edit-task');
        submitEditTaskButton.addEventListener('click', () => {
            projectManager.clearProjects();
            const projects = taskManager.updateTask(projectId, taskId);
            projectManager.projectsLibrary = projects;
            updateProjectToLocalStorage();
            renderProjects();
            closeEditTaskModal();
        })
    }
    
    const deleteTask = () => {
        const deleteTaskButton = document.querySelectorAll('.delete-task');

        deleteTaskButton.forEach((button) => {
            button.addEventListener('click', (e) => {
                projectId = e.target.getAttribute('parent-project-id');
                taskId = e.target.getAttribute('unique-task-id');
                projectManager.clearProjects();
                const projects = taskManager.removeTask(projectId, taskId);
                projectManager.projectsLibrary = projects;
                updateProjectToLocalStorage();
                renderProjects();
            })
        })
    }

    const deleteProject = () => { //TODO Need to delete from localStorage - this is broken now
        const deleteProjectButton = document.querySelectorAll('.delete-project');

        deleteProjectButton.forEach((button) => {
            button.addEventListener('click', (e) => {
                projectId = e.target.getAttribute('unique-project-id');
                let projects = projectManager.removeProject(projectId);
                projectManager.projectsLibrary = projects;
                renderProjects();
                
            })
        })
    }

    return { newProject, renderProjects, domProjectId, addNewTask, taskCard, submitEditedTask }

})()



