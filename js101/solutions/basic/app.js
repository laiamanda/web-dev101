// This is a comment
// alert("Connected");

document.getElementById("demo").innerHTML = 5 + 6;
document.getElementById("demo1").innerHTML = "Hello There";
document.getElementById("demo2").innerHTML = 5 + "6";

let a, b, c;
a = 10;
b = 16;

c = a + b;
console.log(c);
document.getElementById("demo3").innerHTML = c;

function myFunction() {
    document.getElementById("demo4").innerHTML = "Hello Amanda";
}

myFunction();

// Ways to declare a variable let, const, var
// var is outdated, let and const are the new variable types.
// use const if it won't be changed value or type
// use let if it will be changed value

let x = 10
x *= 5;
console.log(x);

let expo = 10
expo ** 5;
console.log(expo);

let divide = 10
divide /= 5;
console.log(expo);

// Conditions

if (x > divide) {
    console.log("Multiplication is bigger than divide");
} else {
    console.log("Divide is bigger than multiplication");
}