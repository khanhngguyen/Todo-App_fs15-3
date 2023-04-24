const form = document.querySelector("#task-form");
const title = document.querySelector("#title");
const date = document.querySelector("#date");
const status = document.querySelector("#status");
const addBtn = document.querySelector("#add-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const confirmBtn = document.querySelector("#confirm-btn");
const taskList = document.querySelector("#task-list");

let tasks = [
    {
        id: 0,
        title: "Do assignment 1",
        status: "done"
    }, 
    {
        id: 1,
        title: "Do assignment 2",
        status: "in progress"
    },
    {
        id: 2,
        title: "Do assignment 3",
        status: "not started"
    }
]

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

confirmBtn.addEventListener("click", () => {
    //create <li>task</li> elem
    const task = document.createElement("li");

    //inside each task: Title input elem, Date input elem, Status elem, Edit button, Delete button
    const taskInput = document.createElement("input");
    taskInput.type = "text";
    //prevent empty input
    if (!title.value) {
        alert("Please fill out the task");
        return;
    }
    taskInput.value = title.value;
    taskInput.setAttribute("readonly", "readonly");

    const taskDate = document.createElement("input");
    taskDate.type = "date";
    taskDate.value = date.value;
    taskDate.setAttribute("readonly", "readonly");

    const taskStatus = document.createElement("div");
    taskStatus.innerText = `Status: ${status.value}`;

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    //append all elem into task elem
    task.appendChild(taskInput);
    task.appendChild(taskDate);
    task.appendChild(taskStatus);
    task.appendChild(editBtn);
    task.appendChild(deleteBtn);

    //append task elem into taskList
    taskList.appendChild(task);

    //add edit function 
    editBtn.addEventListener("click", () => {
        if (editBtn.innerText == "Edit") {
            taskInput.removeAttribute("readonly");
            taskDate.removeAttribute("readonly");
            taskInput.focus();
            taskStatus.style.display = "none";
            task.insertBefore(status, task.children[2]);
            editBtn.innerText = "Save";
        } else {
            taskInput.setAttribute("readonly", "readonly");
            taskStatus.innerText = `Status: ${status.value}`;
            taskStatus.style.display = "block";
            task.removeChild(status);
            editBtn.innerText = "Edit";
        }
    })

    //add delete function
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(task);
    })

    //clear input field
    title.value = "";
})
    

