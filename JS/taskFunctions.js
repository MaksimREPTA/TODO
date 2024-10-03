import { printSingleTask } from "./printSingleTask.js";
import { filterStatus } from "./main.js";
import { data } from "./data.js";

let searchQuery = "";
let sortOrder = "newest";

function setSearchQuery(query) {
  searchQuery = query;
  printAllTasks();
} // funkcija atnaujinti paieskos eilute

function setSortOrder(order) {
  sortOrder = order;
  printAllTasks();
} // funkcija atnaujinti eiliskuma pagal sortinima

function printAllTasks() {
  const tasksList = document.getElementById("tasksList");
  tasksList.innerHTML = "";

  if (!data.tasks.length) {
    tasksList.textContent = "There are no tasks created yet :)";
    return;
  }

  // sortinimas pagal sukurimo data
  const sortedTasks = data.tasks.slice().sort((a, b) => {
    // sortinam pagal createdAt
    if (sortOrder === "newest") {
      return b.createdAt - a.createdAt; // sortinimas nuo naujausnio iki seniausio
    } else {
      return a.createdAt - b.createdAt; // sortinimas nuo seniausio iki naujausnio
    }
  });

  sortedTasks
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

export { createNewTask, printAllTasks, setSearchQuery, setSortOrder };
