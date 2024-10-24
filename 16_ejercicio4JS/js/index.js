document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("task-list"); 
    const addTaskButton = document.getElementById("add-task-btn"); 
    const inputField = document.getElementById("new-task-input"); 

    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    renderTasks(savedTasks);

    addTaskButton.addEventListener("click", function() {
        const taskText = inputField.value.trim(); 

        if (taskText === "") {
            alert("Por favor, escribe una tarea.");
            return;
        }

        const newTask = { text: taskText, completed: false };
        savedTasks.push(newTask);

        localStorage.setItem("tasks", JSON.stringify(savedTasks));

        createTaskElement(newTask);

        inputField.value = "";
    });

    function createTaskElement(task) {
        const newTask = document.createElement("li");
        newTask.classList.add("list-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed; 

        const taskSpan = document.createElement("span");
        taskSpan.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";

        deleteButton.addEventListener("click", function() {
            taskList.removeChild(newTask);
            savedTasks = savedTasks.filter(t => t.text !== task.text);
            localStorage.setItem("tasks", JSON.stringify(savedTasks));
        });

        checkbox.addEventListener("change", function() {
            savedTasks = savedTasks.map(t => {
                if (t.text === task.text) {
                    t.completed = checkbox.checked;
                }
                return t;
            });
            localStorage.setItem("tasks", JSON.stringify(savedTasks));
        });

        newTask.appendChild(checkbox);
        newTask.appendChild(taskSpan);
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
    }

    function renderTasks(tasks) {
        taskList.innerHTML = ""; 
        tasks.forEach(task => {
            createTaskElement(task);
        });
    }
});
