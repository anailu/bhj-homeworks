const input = document.getElementById("task__input");
const button = document.getElementById("tasks__add");
const taskList = document.getElementById("tasks__list");

function addTask(title) {
    const task = document.createElement("div");
    task.classList.add("task");

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task__title");
    taskTitle.textContent = title;
    task.appendChild(taskTitle);
    
    const removeBtn = document.createElement("a");
    removeBtn.href = "#";
    removeBtn.classList.add("task__remove");
    removeBtn.innerHTML = "&times;";
    removeBtn.addEventListener("click", () => {
        task.remove();
    });
    task.appendChild(removeBtn);

    return task;
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = input.value.trim();
    if (inputValue.length > 0) {
        const task = addTask(inputValue);
        taskList.appendChild(task);
        input.value = "";
    } else {
        alert("Содержание задачи не может быть пустым");
    }
})