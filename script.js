document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');  // Add Task button
    const taskInput = document.getElementById('task-input');    // Input field for new tasks
    const taskList = document.getElementById('task-list');      // The list where tasks will be displayed

    // Function to load tasks from Local Storage
    function loadTasks() {
        // Retrieve tasks from Local Storage or initialize an empty array if not found
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Populate the DOM with tasks stored in Local Storage
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' means don't save to Local Storage again
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        // Create the li element to hold the task
        const li = document.createElement('li');
        li.textContent = taskText;  // Set the text of the task
        
        // Create the remove button for this task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        
        // Event listener to remove the task when the button is clicked
        removeButton.addEventListener('click', function() {
            // Remove the task from the task list
            taskList.removeChild(li);

            // Remove the task from Local Storage
            removeTaskFromLocalStorage(taskText);
        });

        // Append the remove button to the li
        li.appendChild(removeButton);
        
        // Append the li to the task list
        taskList.appendChild(li);

        // If save is true, add the task to Local Storage
        if (save) {
            saveTaskToLocalStorage(taskText);
        }

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Function to save a task to Local Storage
    function saveTaskToLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);  // Add the new task to the list
        localStorage.setItem('tasks', JSON.stringify(storedTasks));  // Save the updated list back to Local Storage
    }

    // Function to remove a task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);  // Filter out the task to remove
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));  // Save the updated list back to Local Storage
    }

    // Event listener for adding a task when the "Add Task" button is clicked
    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);  // Add the task and save it to Local Storage
        } else {
            alert("Please enter a task.");
        }
    });

    // Event listener for adding a task when the Enter key is pressed
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                addTask(taskText);  // Add the task and save it to Local Storage
            } else {
                alert("Please enter a task.");
            }
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});