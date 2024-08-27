export { projectManager };

import { toolsManager } from "./tools";

const projectManager = (function ProjectManager() {
  let projectsLibrary = [
    /*
        {
            'id' : '_e4a63i5w4',
            'name' : 'Project0',
            'tasks' : [
                {
                    'id' : '_in3h7kmle',
                    'task' : 'Todo project0',
                    'description' : 'Complete todo list0',
                    'due' : '2024-08-08',
                    'priority' : 'high',
                    'notes' : 'Notes for Todo project',
                    'status' : 'incomplete'
                },
                {
                    'id' : '_la9ri6h7u',
                    'task' : 'Todo project1',
                    'description' : 'Complete todo list',
                    'due' : '2024-08-08',
                    'priority' : 'high',
                    'notes' : 'Notes for Todo project1',
                    'status' : 'incomplete'
                }
            ],
        },
        {
            'id' : '_l2d5zsehd',
            'name' : 'Project1',
            'tasks' : [
                {
                    'id' : '_jm3i7lnmf',
                    'task' : 'Todo project2',
                    'description' : 'Complete todo list2',
                    'due' : '2024-08-08',
                    'priority' : 'high',
                    'notes' : 'Notes for Todo project2',
                    'status' : 'incomplete'
                },
            ],
        }
            */
  ];

  let project = {};

  const renderProjects = () => console.log(projectsLibrary);

  const createProject = (name) => {
    project = {
      id: toolsManager.generateUniqueId(),
      name: name,
      tasks: [],
    };
    projectsLibrary.push(project);
    return project;
  };

  const removeProject = (projectId) => {
    let projects = JSON.parse(localStorage.getItem("projectsLibrary")) || [];
    projects = projects.filter((project) => project.id !== projectId);
    return projects;
  };

  const clearProjects = () => {
    projectsLibrary.length = 0;
  };

  return {
    renderProjects,
    createProject,
    projectsLibrary,
    removeProject,
    clearProjects,
  };
})();
