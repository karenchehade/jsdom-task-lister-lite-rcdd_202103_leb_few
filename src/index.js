document.addEventListener("DOMContentLoaded", () => {
  const taskList = [];
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e)=>{
    const newTask = document.getElementById("new-task-description").value;
    taskList.push(newTask);
    console.log(taskList);
    const addTask = document.getElementById("tasks");
    let li = document.createElement('li');
    li.textContent = newTask;
        // add it to the ul element
        addTask.appendChild(li);
    //addTask.innterHTML += "<li>" + newTask + "</li>";
    //addTask.innerText += newTask + "  ";
    //addTask.innterHTML = "</li></ul>";
    event.preventDefault();
  })
});
