export { taskManager };
import { toolsManager } from "./tools";


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
        project.push(taskCard);
    }

    const clearTaskCard = () => {
        taskCard = {};
    }

    const removeTask = (project, start, deleteCount) => {
        project.splice(start, deleteCount);
    }

    const editTask = (project, index, specification, replacement) => {
        project[index][`${specification}`] = replacement;
    }

    return { newTask, addToProject, clearTaskCard, removeTask, editTask }
    
})()