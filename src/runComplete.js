const runComplete = (inputId) => {
  const localData = JSON.parse(localStorage.getItem('tasks'));
  localData.forEach((task) => {
    if (inputId.checked !== false) {
      if (Number(inputId.id) === Number(task.index)) {
        task.completed = true;
      }
    } else {
      task.completed = false;
    }
    localStorage.setItem('tasks', JSON.stringify(localData));
  });
};

export default runComplete;