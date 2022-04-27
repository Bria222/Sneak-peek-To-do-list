import './style.css';
import Task from './modules/tasks.js';
import displayTask from './modules/displayTask.js';
import { editTask, editText, keyPress } from './modules/editTask.js';

const newTask = new Task();
const inputTask = document.querySelector('.input-task');

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

inputTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const inputValue = inputTask.value.trim();
    if (inputValue !== '') {
      newTask.addNewTask(inputValue);
      inputTask.value = '';
      inputTask.focus();
    }
    displayTask();
    window.location.reload();
  }
});
// instantiate modules
displayTask();
editTask();
editText();
keyPress();

const removeBtn = document.querySelectorAll('.remove-btn');

removeBtn.forEach((removeButton) => {
  removeButton.addEventListener('click', (e) => {
    const removedElement = e.target.parentNode.parentNode.parentNode.parentNode
      .removeChild(e.target.parentElement.parentElement.parentElement);
    const removedIndex = removedElement.dataset.key;
    updateUi(removedIndex);
  });
});
