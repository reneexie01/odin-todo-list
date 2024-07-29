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

const taskManager = (function TaskManager() {

    let taskCard = {};

    const newTask = (task, description, due, priority, notes) => {
        taskCard = {
            'task' : task, 
            'description' : description, 
            'due' : due,
            'priority' : priority,
            'notes' : notes,
        }
        
        return taskCard;
    }

    const addToProject = (project) => {
        project.push(taskCard);
    }

    const clearTaskCard = (taskCard) => {
        taskCard = {};
    }

    const removeTask = (project, start, deleteCount) => {
        project.splice(start, deleteCount);
    }

    return { newTask, addToProject, clearTaskCard, removeTask }
})();


console.log('empty project library: ');
projectManager.renderProjects(); 

console.log('creating project... ');
projectManager.createProject();

console.log('library with one project: ');
projectManager.renderProjects();

console.log('creating project 2... ');
projectManager.createProject();

console.log('library with two projects: ');
projectManager.renderProjects();

console.log('finding a specific project', projectManager.projectsLibrary[1]);

console.log('making new task...');
taskManager.newTask('Odin Project', 'Finish course', '2020-01-01', 'High', 'Self-study');

console.log('adding task to project[1]...');
taskManager.addToProject(projectManager.projectsLibrary[1]);

console.log('library with two projects and one task in project[1]: ');
projectManager.renderProjects();

console.log('clearing task card...');
taskManager.clearTaskCard();

console.log('making new task...');
taskManager.newTask('Odin Project2', 'Finish course2', '2020-01-012', 'High2', 'Self-study2');

console.log('adding another task to project[1]...');
taskManager.addToProject(projectManager.projectsLibrary[1]);

console.log('library with two projects and two tasks in project[1]: ');
projectManager.renderProjects();

console.log('clearing task card...');
taskManager.clearTaskCard();

console.log('making new task...');
taskManager.newTask('Odin Project3', 'Finish course3', '2020-01-013', 'High3', 'Self-study3');

console.log('adding another task to project[1]...');
taskManager.addToProject(projectManager.projectsLibrary[0]);

console.log('library with two projects and two tasks in project[1] and one task in project[0]: ');
projectManager.renderProjects();

console.log('clearing task card...');
taskManager.clearTaskCard();

console.log('removing task[1] from project[1]...');
taskManager.removeTask(projectManager.projectsLibrary[1], 1, 1);

console.log('library with two projects and one task in project[1] and one task in project[0]: ')
projectManager.renderProjects();

console.log('removing project[1]... ');
projectManager.removeProject(1, 1);

console.log('library with one project and one task in project[0]: ')
projectManager.renderProjects();