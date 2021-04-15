document.addEventListener("DOMContentLoaded", () => {
  const task = [];
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e)=>{
    const newTask = document.getElementById("new-task-description").value;
    task.push(newTask);
    const addTask = document.getElementById("tasks");
    addTask.innterHTML = "<ul><li>" + newTask +;
    //addTask.innerText += newTask + "  ";
    addTask.innterHTML += "</li></ul>";
    event.preventDefault();
  })
});
