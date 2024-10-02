import { printSingleTask } from "./printSingleTask.js";
import { filterStatus } from "./main.js";
import { data } from "./data.js";

let searchQuery = ""; // filtras paieskai pagal pavadinima

function setSearchQuery(request) {
  searchQuery = request;
  printAllTasks();
} // funkcija, kad atnaujinti paieska

function printAllTasks() {
  const tasksList = document.getElementById("tasksList");
  tasksList.innerHTML = "";

  if (!data.tasks.length) {
    tasksList.textContent = "There are no tasks created yet :)";
    return;
  }

  data.tasks
    .filter((singleTask) => {
      const matchesStatus =
        filterStatus === "all" || singleTask.status === filterStatus;
      const matchesSearch = singleTask.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesStatus && matchesSearch;
    })
    .forEach((task) => {
      printSingleTask(task, printAllTasks);
    });
}

function createNewTask() {
  const newTask = document.getElementById("newTaskInput").value;

  if (!newTask.trim().length) {
    alert("Please enter a task");
    document.getElementById("newTaskInput").value = "";
    return;
  }

  data.createTask(newTask);
  document.getElementById("newTaskInput").value = "";
}

export { createNewTask, printAllTasks, setSearchQuery };
