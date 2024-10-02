import {
  getStatusButtonLabel,
  getTaskNextStatus,
} from "./helpers/statusButtonHelpers.js";
import { data } from "./data.js";

function printSingleTask(task, printAllTasks) {
  const taskLi = document.createElement("li");
  const buttonsContainer = document.createElement("div");
  const statusButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  const statusButtonLabel = getStatusButtonLabel(task.status);
  taskLi.textContent = task.title;
  statusButton.textContent = statusButtonLabel;
  deleteButton.textContent = "Delete";

  // add styles
  taskLi.classList.add("task");
  if (task.status === "started") {
    taskLi.classList.add("task--started");
  }

  if (task.status === "completed") {
    taskLi.classList.add("task--completed");
  }

  buttonsContainer.classList.add("buttonsContainer");

  // add event listeners
  statusButton.addEventListener("click", () => {
    data.changeTaskStatus(task.id, getTaskNextStatus(task.status));
    printAllTasks();
  });

  deleteButton.addEventListener("click", () => {
    data.deleteTask(task.id);
    printAllTasks();
  });

  if (task.status !== "completed") {
    buttonsContainer.appendChild(statusButton);
  }
  buttonsContainer.appendChild(deleteButton);
  taskLi.appendChild(buttonsContainer);
  document.getElementById("tasksList").appendChild(taskLi);
}

export { printSingleTask };
