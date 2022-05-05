/**
 * @jest-environment jsdom
 */
import Task from './tasks.js';
import displayTask from './displayTask.js';
import updateUi from './updateui.js';
import 'jest-localstorage-mock';

const taskObj = new Task();
const mLocalStorage = {
  storage: {},
  getItem: jest.fn((key) => mLocalStorage.storage[key]),
  setItem: jest.fn((key, value) => {
    mLocalStorage.storage[key] = value;
  }),
};
Object.defineProperty(window, 'localStorage', {
  value: mLocalStorage,
});

describe('Should Add and displayTask method & Localstorage', () => {
  // window.localStorage = Storage.prototype;
  test('should add and displayContent', () => {
    taskObj.addNewTask('Test1');
    document.body.innerHTML = `
    <div class="todo-list"></div>
    `;
    displayTask();
    expect(taskObj.tasks).toHaveLength(1);
  });

  it('remove one item from localstorage', () => {
    updateUi(Number(1));
    expect(mLocalStorage.setItem).toBeCalledWith('tasks', '[]');
  });
});
