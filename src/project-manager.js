export { projectManager };

import { toolsManager } from "./tools";

const projectManager = (function ProjectManager() {
    
    let projectsLibrary = [
        {
            'id' : '_e4a63i5w4',
            'name' : 'Project0',
            'tasks' : [],
        },
        {
            'id' : '_l2d5zsehd',
            'name' : 'Project1',
            'tasks' : [],
        }
    ];

    let project = {};

    const renderProjects = () => console.log(projectsLibrary);

    const createProject = (name) => {
        project = {
            'id' : toolsManager.generateUniqueId(),
            'name' : name,
            'tasks' : []
        }
        projectsLibrary.push(project);
    }

    const removeProject = (start, deleteCount) => {
        projectsLibrary.splice(start, deleteCount);
    }

    return { renderProjects, createProject, projectsLibrary, removeProject };
})();