/**
 * This function is to calculate the tip from the total cost prompted by the window prompts
 * It will display onto the HTML Web Page.
 */
function calculateTip() {
    // Prompts the user to enter the total cost of their meal
    let total_cost = prompt("What's the total cost?", 0);

    // Calculate the amount for tipping. Convert total_cost to be an int type
    const tip = parseInt(total_cost) * .18;

    // Calculate the final amount by adding the total cost with the tip
    const final_amount = parseInt(total_cost) + tip;

    // Displays the data onto the HTML
    document.getElementById("tip_amount").innerHTML = tip;
    document.getElementById("final_amount").innerHTML = final_amount;
}

// Calls the calculateTip function
calculateTip();