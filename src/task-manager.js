export { taskManager };

import { toolsManager } from "./tools";
import { projectManager } from "./project-manager";

const taskManager = (function TaskManager() {
  const newTask = (task, description, due, priority, notes, status) => {
    let taskCard = {
      id: toolsManager.generateUniqueId(),
      task: task,
      description: description,
      due: due,
      priority: priority,
      notes: notes,
      status: status,
    };
    return taskCard;
  };

  const addToProject = (projectId, taskItem) => {
    let project;
    project = projectManager.projectsLibrary.filter(
      (project) => project.id === projectId
    );
    project[0].tasks.push(taskItem);
  };

  const removeTask = (projectId, taskId) => {
    let projects = JSON.parse(localStorage.getItem("projectsLibrary")) || [];
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === projectId) {
        for (let j = 0; j < projects[i].tasks.length; j++) {
          let selectedTask = projects[i].tasks[j];

          if (selectedTask.id === taskId) {
            projects[i].tasks.splice(j, 1);
          }
        }
      }
    }
    return projects;
  };

  const editTask = (projectId, taskId) => {
    // Gets the values and pre-fills them in the editTask module

    const taskInput = document.querySelector("#edit-task");
    const descriptionInput = document.querySelector("#edit-description");
    const dueInput = document.querySelector("#edit-due");
    const priorityInput = document.querySelector("#edit-priority");
    const notesInput = document.querySelector("#edit-notes");
    const statusInput = document.querySelector("#edit-status");

    let project;
    project = projectManager.projectsLibrary.filter(
      (project) => project.id === projectId
    );

    for (let i = 0; i < project[0].tasks.length; i++) {
      let selectedTask = project[0].tasks[i];

      if (selectedTask.id === taskId) {
        taskInput.value = selectedTask.task;
        descriptionInput.value = selectedTask.description;
        dueInput.value = selectedTask.due;
        priorityInput.value = selectedTask.priority;
        notesInput.value = selectedTask.notes;
        statusInput.value = selectedTask.status;
      }
    }
  };

  const updateTask = (projectId, taskId) => {
    const taskInput = document.querySelector("#edit-task");
    const descriptionInput = document.querySelector("#edit-description");
    const dueInput = document.querySelector("#edit-due");
    const priorityInput = document.querySelector("#edit-priority");
    const notesInput = document.querySelector("#edit-notes");
    const statusInput = document.querySelector("#edit-status");

    let projects = JSON.parse(localStorage.getItem("projectsLibrary")) || [];
    console.log(projectId, taskId);
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === projectId) {
        for (let j = 0; j < projects[i].tasks.length; j++) {
          let selectedTask = projects[i].tasks[j];

          if (selectedTask.id === taskId) {
            selectedTask.task = taskInput.value;
            selectedTask.description = descriptionInput.value;
            selectedTask.due = dueInput.value;
            selectedTask.priority = priorityInput.value;
            selectedTask.notes = notesInput.value;
            selectedTask.status = statusInput.value;
          }
        }
      }
    }
    return projects;
  };

  return {
    newTask,
    addToProject,
    editTask,
    updateTask,
    removeTask,
  };
})();
