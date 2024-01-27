// Initialize an empty toDo array
let toDos = []

// Display our to dos as a list element in html
function displayTask(toDos){
    // Display list
    let list = document.getElementById("myList");

    // Add the HTML element li
    let li = document.createElement("li");

    // Loop through the array
    for(let i = 0; i < toDos.length; i++){
        // Take each to Dos item as a context
        li.innerHTML = toDos[i];
        // Append the li with the list
        list.appendChild(li);
    }
}


// Get the user's input
function addTask() {
    // Retrieve the user's input
    const newTask = document.getElementById('todo').value;
    // Insert newTask into the toDos array
    toDos.push(newTask);

    // Clear the input field value
    document.getElementById('todo').value = "";

    displayTask(toDos);
}