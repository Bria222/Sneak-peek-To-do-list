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
