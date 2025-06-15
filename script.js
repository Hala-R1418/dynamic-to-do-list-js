document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');  // Add Task button
    const taskInput = document.getElementById('task-input');    // Input field for new tasks
    const taskList = document.getElementById('task-list');      // The list where tasks will be displayed
    
    // Function to add a task
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // If the input is empty, alert the user
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create the li element to hold the task
        const li = document.createElement('li');
        li.textContent = taskText;  // Set the text of the task
        
        // Create the remove button for this task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        
        // Event listener to remove the task when the button is clicked
        removeButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Append the remove button to the li
        li.appendChild(removeButton);
        
        // Append the li to the task list
        taskList.appendChild(li);
        
        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Event listener for adding a task when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Event listener for adding a task when the Enter key is pressed
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});