export { taskManager };

import { toolsManager } from "./tools";
import { projectManager } from "./project-manager";
import { domManager } from "./dom-manager";

const taskManager = (function TaskManager() {
    
    // let taskCard = {}; // Replaced with DOM taskCard

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
    }

    const editTask = (project, index, specification, replacement) => {
        project[index][`${specification}`] = replacement;
    }

    return { newTask, addToProject, clearTaskCard, removeTask, editTask }
    
})()