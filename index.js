const form = document.querySelector("#task-form");
const title = document.querySelector("#title");
const date = document.querySelector("#date");
const status = document.querySelector("#status");
const addBtn = document.querySelector("#add-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const confirmBtn = document.querySelector("#confirm-btn");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

//set today as default deadline date
date.valueAsDate = new Date();

//set initial count function
taskCount.innerText = `You have 0 tasks in total`;

//add function to Add new task button
addBtn.addEventListener("click", () => {
    form.style.display = "flex";
    addBtn.style.display = "none";
    title.focus();
})

//when Add new task form available
//add function to Confirm button
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
    taskInput.classList.add("task-title");

    const taskDate = document.createElement("input");
    taskDate.type = "date";
    taskDate.value = date.value;
    taskDate.setAttribute("readonly", "readonly");

    const taskStatus = document.createElement("div");
    taskStatus.innerText = `Status: ${status.value}`;

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete");

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
            editBtn.classList.add("save");
        } else {
            taskInput.setAttribute("readonly", "readonly");
            taskStatus.innerText = `Status: ${status.value}`;
            taskStatus.style.display = "block";
            task.removeChild(status);
            editBtn.innerText = "Edit"
            editBtn.classList.remove("save");
        }
    })

    //add count function, count every time new task is created & update 
    count = document.querySelectorAll("li").length;
    taskCount.innerText = `You have ${count} tasks in total`;

    //add delete function
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(task);
        //when 1 task is deleted, re-count & update
        count = document.querySelectorAll("li").length;
        taskCount.innerText = `You have ${count} tasks in total`;
    })
    
    //clear input field
    title.value = "";
    //close form
    form.style.display = "none";
    //make Add new task button available again
    addBtn.style.display = "block";
})

//add function to Cancel button
cancelBtn.addEventListener("click", () => {
    form.style.display = "none";
    addBtn.style.display = "block";
})


