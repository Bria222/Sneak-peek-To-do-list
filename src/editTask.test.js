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
