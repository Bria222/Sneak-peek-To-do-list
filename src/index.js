import './style.css';

const tasks = [
  { description: 'cycling', completed: true, index: 1 },
  { description: 'solving algorithms', completed: false, index: 2 },
  { description: 'watch basket ball', completed: false, index: 3 },
  { description: 'Go for a hike', completed: true, index: 4 },
];

const toDos = document.getElementById('todo-list');

function Showtasks() {
  let chores = '';
  tasks.forEach((element) => {
    chores += `
              <div class="list">
                  <input type="checkbox">
                  <p>${element.description}</p>
                  <a><i class="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
                  </a>
              </div>`;
  });
  toDos.innerHTML = chores;
}
Showtasks();
window.onload();