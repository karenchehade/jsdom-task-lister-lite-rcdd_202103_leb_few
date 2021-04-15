document.addEventListener("DOMContentLoaded", () => {
  const taskList = [];
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e)=>{
    const newTask = document.getElementById("new-task-description").value;
    taskList.push(newTask);
    //console.log(taskList);
    const addTask = document.getElementById("tasks");
    let li = document.createElement('li');
    li.textContent = newTask;
    addTask.appendChild(li);
    event.preventDefault();
  })
});
