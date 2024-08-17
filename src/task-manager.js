export { taskManager };

import { toolsManager } from "./tools";
import { projectManager } from "./project-manager";
import { domManager } from "./dom-manager";

const taskManager = (function TaskManager() {
    
    let taskCard = {};

    const newTask = (task, description, due, priority, notes, status) => {
        taskCard = {
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

    const addToProject = (project) => {
        project.push(taskCard); // need to get domProjectId here to push the task to the right project
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