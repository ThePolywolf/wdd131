// events.js
let tasks = [];

function template(task) {
    return `<li ${task.completed ? 'class="strike"' : ""}>
        <p>${task.detail}</p>
        <div>
            <span data-function="delete">❎</span>
            <span data-function="complete">✅</span>
        </div>
    </li>`;
}

function renderTasks(tasks) {
  const taskList = document.getElementById('todoList');
  taskList.innerHTML = tasks.map(template).join("");
}

function newTask() {
  const task = document.getElementById('todo');
  tasks.push({detail: task.value, completed: false});
  renderTasks(tasks);
}

function removeTask(taskElement) {
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
  );

  taskElement.remove();
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.querySelector('p').innerText
  );

  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(event) {
  const taskElement = event.target.closest("li");
  const eventFunction = event.target.dataset.function;

  if (eventFunction === 'delete') {
      removeTask(taskElement);
  } 
  if (eventFunction === 'complete') {
      completeTask(taskElement);
  }

  renderTasks(tasks);
}

// We need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.
const submitButton = document.getElementById('submitTask');
submitButton.addEventListener('click', newTask);

const todoList = document.getElementById('todoList');
todoList.addEventListener('click', manageTasks);

renderTasks(tasks);