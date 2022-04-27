/**
 * @jest-environment jsdom
 */
import Task from './tasks.js';
import displayTask from './displayTask.js';

const taskObj = new Task();

describe('Should test for status and content updates', () => {
  const updateText = (id, statusCheck) => {
    taskObj.tasks.completed = statusCheck;
    localStorage.setItem('tasks', JSON.stringify(taskObj.tasks));
  };

  const editText = (textValue) => {
    taskObj.tasks.description = textValue;
    localStorage.setItem('tasks', JSON.stringify(taskObj.tasks));
  };

  document.body.innerHTML = ` <div class="edit-task" data-key="1"> <ul class="ul-edit" >
  <li class="tick" ><input class="text-input" id="1" type="checkbox"></li>
  <li class"text-value" ></li>
  <li class="remove-btn" id="1"><button >&#8942;</button></li>
</ul>
<i class="fa-solid fa-trash-can delete-icon"></i>
<hr>
</div>`;

  const checkBoxValue = document.querySelector('.text-input');
  const textValue = document.querySelector('.text-value');

  test('Should edit task description', () => {
    taskObj.addNewTask(textValue);
    document.body.innerHTML = '  <div class="todo-list"></div> ';
    displayTask();
    expect(taskObj.tasks).toHaveLength(1);
  });

  test('Should update completed task', () => {
    taskObj.tasks.completed = false;
    updateText(1, true);
    expect(taskObj.tasks[0].completed).toBe(checkBoxValue.checked);
  });

  test('Should test edit task function', () => {
    const value = 'Text Value';
    editText(value, 1);
    expect.any(Function);
  });
});