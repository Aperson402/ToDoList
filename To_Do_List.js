// Function to add a new task
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    // Check if input field is empty
    if (taskInput.value === '') {
        alert('Please enter a task.');
        return;
    }

    // Create new list item (li) and delete button (button)
    var li = document.createElement('li');
    var taskText = document.createTextNode(taskInput.value);
    var deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'X';
    deleteBtn.className = 'delete-btn';

    // Functionality to delete a task when delete button is clicked
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Append task text and delete button to the list item (li)
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    // Toggle completed class and strikethrough on li when clicked
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Append the list item (li) to the task list (ul) and reset input field
    taskList.appendChild(li);
    taskInput.value = '';
}
