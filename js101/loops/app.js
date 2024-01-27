const groceryList = ["Eggs", "Milk", "Flour"];

// <ul><li>groceryList </li> <li>groceryList </li> <li>groceryList </li></ul>
let text = "<ul>"

for (let i = 0; i < groceryList.length ; i++) {
    // console.log(groceryList[i]);
    text += "<li>"+ groceryList[i] +"</li>"
}

text += "</ul>"

document.getElementById("demo").innerHTML = text;

