const mockData = [
  {
    id: crypto.randomUUID(),
    title: "Buy groceries",
    status: "created", // created, started, completed
  },
  {
    id: crypto.randomUUID(),
    title: "Clean the house",
    status: "started",
  },
  {
    id: crypto.randomUUID(),
    title: "Walk the dog",
    status: "completed",
  },
  {
    id: crypto.randomUUID(),
    title: "Do homework",
    status: "created",
  },
  {
    id: crypto.randomUUID(),
    title: "Go to the gym",
    status: "started",
  },
  {
    id: crypto.randomUUID(),
    title: "Read a book",
    status: "completed",
  },
];

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
      },
    ];
    this.setTasks();
  },
};

data.getTasks();
