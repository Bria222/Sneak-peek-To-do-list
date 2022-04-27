import Task from './tasks.js';

const newTask = new Task();
export default function updateUi(id) {
  const localData = JSON.parse(localStorage.getItem('tasks'));
  if (localData !== null) {
    localData.forEach((data) => {
      if (data.index === Number(id)) {
        const newarr = localData.indexOf(data);
        localData.splice(newarr, 1);
      }
    });
  }
  newTask.tasks = localData;
  localStorage.setItem('tasks', JSON.stringify(localData));
}