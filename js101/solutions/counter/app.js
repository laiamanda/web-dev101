// Create a variable called "Counter"
let counter = 0;

// Create a counter value
const counterValue = document.getElementById("counterValue");
// Call the button id "increaseBtn"
const increaseBtn = document.getElementById("increaseBtn");
// Call the button id "decreaseBtn"
const decreaseBtn = document.getElementById("decreaseBtn");

// Function can be represented as  () => { execution }
// It can also be represented as function(){ execution}

// Clear the Counter
function reset() {
    // Set the counterValue to 0
    counter = 0;
    counterValue.innerHTML = counter;
}

// Increment function
function add(){
    counter++;
    counterValue.innerHTML = counter;
}

function decrement(){
    counter--;
    counterValue.innerHTML = counter;
}

// // Increment the counter
// increaseBtn.addEventListener('click', function() {
//     counter += 1;
//     counterValue.innerHTML = counter;
// });

// // Decrease the counter
// decreaseBtn.addEventListener('click', function( ){
//     counter -= 1;
//     counterValue.innerHTML = counter;
// });

// reset();

increaseBtn.addEventListener('click', add);
decreaseBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);