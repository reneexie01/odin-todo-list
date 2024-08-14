export { projectManager };

import { toolsManager } from "./tools";

const projectManager = (function ProjectManager() {
    
    let projectsLibrary = [
        {
            'id' : '_e4a63i5w4',
            'name' : 'Project0',
            'tasks' : [
                {
                    'id' : '_in3h7kmle',
                    'task' : 'Todo project0',
                    'description' : 'Complete todo list0',
                    'due' : '01/09/20240',
                    'priority' : 'High0',
                    'notes' : 'Notes for Todo project0',
                    'status' : 'Incomplete0'
                },
                {
                    'id' : '_la9ri6h7u',
                    'task' : 'Todo project1',
                    'description' : 'Complete todo list1',
                    'due' : '01/09/20241',
                    'priority' : 'High1',
                    'notes' : 'Notes for Todo project1',
                    'status' : 'Incomplete1'
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
                    'due' : '01/09/20242',
                    'priority' : 'High2',
                    'notes' : 'Notes for Todo project2',
                    'status' : 'Incomplete2'
                },
            ],
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