class Task {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  addNewTask(text) {
    const task = {
      text,
      completed: false,
      index: this.tasks.length + 1,
    };
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

export default Task;