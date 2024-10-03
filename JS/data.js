export const data = {
  tasks: [],
  getTasks: function () {
    const response = JSON.parse(localStorage.getItem("tasks"));

    if (response && Array.isArray(response)) {
      this.tasks = response;
    }
  },
  setTasks: function (newTasks) {
    if (newTasks) {
      this.tasks = newTasks;
    }
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  },
  deleteTask: function (id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.setTasks();
  },
  changeTaskStatus: function (id, nextStatus) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: nextStatus };
      }
      return task;
    });
    this.setTasks();
  },
  createTask: function (newTitle) {
    this.tasks = [
      ...this.tasks,
      {
        id: crypto.randomUUID(),
        title: newTitle,
        status: "created",
        createdAt: Date.now(), // cia kuria data buvo sukurtas taskas
      },
    ];
    this.setTasks();
  },
};

data.getTasks();
