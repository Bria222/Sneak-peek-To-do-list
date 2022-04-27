const todoList = document.querySelector('.todo-list');
const clearBtn = document.querySelector('.clear-btn');

const runComplete = (inputEl) => {
  const localData = JSON.parse(localStorage.getItem('tasks'));
  localData.forEach((task) => {
    if (inputEl.checked !== false) {
      if (Number(inputEl.id) === Number(task.index)) {
        task.completed = true;
      }
    } else {
      task.completed = false;
    }
    localStorage.setItem('tasks', JSON.stringify(localData));
  });
};

const toggleComplete = (inputElement) => {
  if (inputElement.checked === false) {
    inputElement.parentElement.parentElement.classList.remove('strike-thro');
    inputElement.parentElement.parentElement.parentElement.classList.remove('active');
  } else {
    inputElement.parentElement.parentElement.classList.add('strike-thro');
    inputElement.parentElement.parentElement.parentElement.classList.add('active');
  }
};

const showEditInputs = (liElement) => {
  const editInput = document.querySelector('.edit-input');
  if (editInput) {
    editInput.remove();
  }
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'editInput';
  input.value = liElement.textContent;
  input.classList.add('edit-input');
  liElement.appendChild(input);
  input.focus();
};

function editTask() {
  todoList.addEventListener('click', () => {
    const editEl = document.querySelectorAll('.edit-task');
    editEl.forEach((edit) => {
      edit.addEventListener('change', (e) => {
        e.stopPropagation();
        if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
          toggleComplete(e.target);
          runComplete(e.target);
        }
      });
    });
  });
}
clearBtn.addEventListener('click', () => {
  const localData = JSON.parse(localStorage.getItem('tasks'));
  const newData = localData.filter((data) => !data.completed);
  localStorage.setItem('tasks', JSON.stringify(newData));
  window.location.reload();
});

function editText() {
  todoList.addEventListener('click', () => {
    const editEl = document.querySelectorAll('.edit-task');
    editEl.forEach((edit) => {
      edit.addEventListener('click', (e) => {
        e.stopPropagation();
        if (e.target.tagName === 'LI') {
          showEditInputs(e.target);
        }
      });
    });
  });
}

function updateText() {
  const editInput = document.querySelector('.edit-input');
  const localData = JSON.parse(localStorage.getItem('tasks'));

  if (!editInput) {
    return;
  }
  const newText = editInput.value;
  if (newText !== '') {
    const liInput = editInput.parentElement;
    liInput.textContent = newText;
    localData.forEach((data) => {
      data.text = newText;
      localStorage.setItem('tasks', JSON.stringify(localData));
    });
  }
  editInput.remove();
}

function keyPress() {
  todoList.addEventListener('click', () => {
    const editEl = document.querySelectorAll('.edit-task');
    editEl.forEach((edit) => {
      edit.addEventListener('keypress', (e) => {
        if (e.target.tagName === 'INPUT' && e.target.type === 'text' && e.key === 'Enter') {
          updateText();
        }
      });
    });
  });
}

document.querySelector('click', updateText);

export { editTask, editText, keyPress };