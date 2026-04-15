
let tasksArr = [];

const taskListDiv = document.getElementById("tasksList")
const input = document.getElementById("taskInput")

const storageKey = "persistedTaskList";

function renderTasks() {
    taskListDiv.innerHTML = null;

    for (const [idx, task] of Object.entries(tasksArr)) {
        const container = document.createElement("div");
        container.style.marginBottom = "10px";
        
        const taskElement = document.createElement("p");
        taskElement.style.display = "inline"
        taskElement.style.marginRight = "10px"
        taskElement.textContent = task;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.onclick = () => deleteTask(idx);

        container.appendChild(taskElement)
        container.appendChild(button)
        
        taskListDiv.appendChild(container)
    }
}

function addTask() {
    const value = input.value;
    if (!value) {
        alert("You cannot add an empty task")
        return
    }
    tasksArr.push(value)
    input.value = "";

    renderTasks()
    saveTasks();
}

function deleteTask(idx) {
    tasksArr.splice(idx, 1);

    renderTasks();
    saveTasks();
}

// Persist on reload
function loadTasks() {
    const oldTasks = localStorage.getItem(storageKey);
    if (oldTasks) tasksArr = JSON.parse(oldTasks);

    renderTasks();
}

function saveTasks() {
    const stringTasks = JSON.stringify(tasksArr);
    localStorage.setItem(storageKey, stringTasks);
}

document.addEventListener("DOMContentLoaded", loadTasks)