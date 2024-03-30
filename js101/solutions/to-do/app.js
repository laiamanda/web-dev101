// 1. Create an array of our ToDos
// let toDos = ["Eat", "Clean Litter-box", "Sleep"];

// // Display list
// let list = document.getElementById("myList");

// // Adds the HTML element li
// let li = document.createElement('li');

// for (let i = 0; i < toDos.length; i++) {
//     // Takes each ToDos item as an context
//     li.innerText = toDos[i];
//     // Append the li with the list
//     list.appendChild(li);
// }


// Initialize an empty toDo array
let toDos = [];

// 3. Display our to dos as a list element in html
function displayTask(arr){
    // Display list
    let list = document.getElementById("myList");

    // Adds the HTML element li
    let li = document.createElement('li');

    // Loop through the parameter array
    for (let i = 0; i < arr.length; i++) {
        // Takes each ToDos item as an context
        li.innerHTML = arr[i];
        // Append the li with the list
        list.appendChild(li);
    }
}

// 2. Get the user's input
function addTask() {
    const newTask = document.getElementById('todo').value;
    toDos.push(newTask);

    // Clear the input field value
    document.getElementById('todo').value = '';

    // Call the function to load the new Task List
    displayTask(toDos);
}



