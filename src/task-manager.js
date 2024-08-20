export { taskManager };

import { toolsManager } from "./tools";
import { projectManager } from "./project-manager";

const taskManager = (function TaskManager() {

    const newTask = (task, description, due, priority, notes, status) => {
        let taskCard = {
            'id' : toolsManager.generateUniqueId(),
            'task' : task, 
            'description' : description, 
            'due' : due,
            'priority' : priority,
            'notes' : notes,
            'status' : status,
        }
        return taskCard;
    }

    const addToProject = (projectId, taskItem) => {
        let project;
        project = projectManager.projectsLibrary.filter((project) => project.id === projectId)
        project[0].tasks.push(taskItem);
    }

    const clearTaskCard = () => {
        taskCard = {};
    }

    const removeTask = (projectId) => {
        projectManager.projectsLibrary = projectManager.projectsLibrary.filter((project) => project.id !== projectId); //not sure if that will work
    } // TODO: Need to fix this

    const editTask = (projectId, taskId) => {

        const taskInput = document.querySelector('#edit-task');
        const descriptionInput = document.querySelector('#edit-description');
        const dueInput = document.querySelector('#edit-due');
        const priorityInput = document.querySelector('#edit-priority');
        const notesInput = document.querySelector('#edit-notes');
        const statusInput = document.querySelector('#edit-status');

        let project;
        project = projectManager.projectsLibrary.filter((project) => project.id === projectId);

        for (let i = 0; i < project[0].tasks.length; i++) {
            let selectedTask = project[0].tasks[i];

            if (selectedTask.id === taskId) {
                taskInput.value = selectedTask.task;
                descriptionInput.value = selectedTask.description;
                dueInput.value = selectedTask.due;
                priorityInput.value = selectedTask.priority;
                notesInput.value = selectedTask.notes;
                statusInput.value = selectedTask.status;
            } //TODO: Need to allow editing to replace values in the same task
        }
    }

    return { newTask, addToProject, clearTaskCard, removeTask, editTask }
    
})()