export { projectManager };

const projectManager = (function ProjectManager() {
    
    let projectsLibrary = [];

    const renderProjects = () => console.log(projectsLibrary);

    const createProject = function() {
        let project = [];
        projectsLibrary.push(project);
    }

    const removeProject = (start, deleteCount) => {
        projectsLibrary.splice(start, deleteCount);
    }

    return { renderProjects, createProject, projectsLibrary, removeProject };
})();