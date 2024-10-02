import {
  createNewTask,
  printAllTasks,
  setSearchQuery,
} from "./taskFunctions.js";
import { printUser } from "./printUser.js";

export let filterStatus = "all";

document.getElementById("createButton").addEventListener("click", () => {
  createNewTask();
  printAllTasks();
});

document.getElementById("newTaskInput").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    createNewTask();
    printAllTasks();
  }
});

document.getElementById("filterByStatus").addEventListener("change", () => {
  filterStatus = document.getElementById("filterByStatus").value;
  printAllTasks();
});

document.getElementById("searchInput").addEventListener("input", (event) => {
  setSearchQuery(event.target.value); // perdadame teksta i funkcija
});

printAllTasks();
printUser();
