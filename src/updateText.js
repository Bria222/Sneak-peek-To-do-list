const editInput = document.querySelector('.edit-input');

function updateText(textValue) {
  const localData = JSON.parse(localStorage.getItem('tasks'));
  if (!editInput) {
    return;
  }
  if (textValue !== '') {
    const liInput = editInput.parentElement;
    liInput.textContent = textValue;
    localData.forEach((data) => {
      data.text = textValue;
      localStorage.setItem('tasks', JSON.stringify(localData));
    });
  }
  editInput.remove();
}

export default updateText;