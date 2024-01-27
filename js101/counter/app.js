// Create a variable called "counter"
let counter = 0;

// Create a variable called counter
const counterValue = document.getElementById("counterValue");
// // Call the button id with "increaseBtn"
// const increaseBtn = document.getElementById("increaseBtn");

// Reset function
function reset() {
    // Set the counterValue to 0
    counter = 0;
    counterValue.innerHTML = counter;
}

// Increment function
function add() {
    counter += 1;
    counterValue.innerHTML = counter;
}

// Decrease function
function decrease() {
    counter -= 1;
    counterValue.innerHTML = counter;
}

increaseBtn.addEventListener('click', add);
decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);


// increaseBtn.addEventListener('click', () => {
//     counter += 1;
//     counterValue.innerHTML = counter;
// });