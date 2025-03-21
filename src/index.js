// your code here
const taskForm = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newTask = document.getElementById("new-task-description").value;
  const taskItem = document.createElement("li");
  taskItem.textContent = newTask;
  taskList.appendChild(taskItem);
  taskForm.reset();
});
