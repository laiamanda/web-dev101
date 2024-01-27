// Calculate from the totalAmount the 18% tipping
function calculate18Tip() {
    // Ask the user for the total amount
    let totalAmount = prompt("What's the total amount?: ");

    // Calculate the tip for 18%
    const tip = totalAmount * .18;

    // Calculate the total cost of the meal
    const totalCost = parseInt(totalAmount) + tip;

    // Display the tip amount in HTML
    document.getElementById("tip-amount").innerHTML = "Tip Amount: " + tip;

    // Display the total cost in HTML
    document.getElementById("total-cost").innerHTML = "Total Cost: " + "$"+totalCost;
}

// Call the function to calculate 18% Tip
calculate18Tip();

