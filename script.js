document.addEventListener('DOMContentLoaded', function () {
    
    // Select DOM elements
    const addButton = document.getElementById('add-task'); // Button to add tasks
    const taskInput = document.getElementById('task-input'); // Input field for new task
    const taskList = document.getElementById('task-list'); // Unordered list to display tasks
    
    // Check if these elements are successfully selected (for debugging)
    console.log(addButton, taskInput, taskList); // Check if all elements are correctly selected

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input value and trim any extra spaces
        
        // If the input is not empty, proceed with adding the task
        if (taskText !== "") {
            // Create a new <li> element for the task
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a remove button for the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');

            // Add an event listener to the remove button to delete the task when clicked
            removeButton.addEventListener('click', function () {
                taskList.removeChild(li);
            });

            // Append the remove button to the <li> element
            li.appendChild(removeButton);

            // Append the <li> element to the task list
            taskList.appendChild(li);

            // Clear the task input field after adding the task
            taskInput.value = '';
        } else {
            // If input is empty, alert the user to enter a task
            alert("Please enter a task.");
        }
    }

    // Event listener for "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow tasks to be added when the "Enter" key is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});