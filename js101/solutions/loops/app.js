const groceryList = ["Milk", "Eggs", "Sugar"];

let groceryLength = groceryList.length;

let text = "<ul>"

for (let i = 0; i < groceryLength; i++) {
    console.log(groceryList[i]);
    text += "<li>" + groceryList[i] + "</li>";
}

text += "</ul>";

document.getElementById("demo").innerHTML = text;

// text = <ul> <li> groceryList[i] </li></ul>
// <ul><li> groceryList[i] </li><li> groceryList[i] </li><li> groceryList[i] </li>...</ul>