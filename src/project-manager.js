export { projectManager };
import { toolsManager } from "./tools";

const projectManager = (function ProjectManager() {
    
    let projectsLibrary = [];

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