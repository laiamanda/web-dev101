const students = ["Amanda", "Ben", "Carol"];
console.log(students);
console.log(students[1]);
console.log(students.length);

const random = ["Amanda", 24, "Asian"];
console.log(random);

const grades = [];
console.log(grades);

grades[0] = 81;
grades[1] = 92;
grades[2] = 23;

console.log(grades);

// using push
grades.push(44);
console.log(grades);

grades.push(63);
console.log(grades);

grades.pop();
console.log(grades);

document.getElementById("demo").innerHTML = grades;

// This is technically an object
const person = ["Amanda", 24, "Asian"];
console.log(person);

const objPerson = {
    firstName: "Amanda",
    age: 24,
    species: "Human"
};

console.log(objPerson.age);