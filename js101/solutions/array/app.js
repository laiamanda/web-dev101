/* Basic Array */ 
const students = ["Amanda", "Ben", "Carol"];
console.log(students);
// Viewing an array element
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

/* Insert into an array: Option 1 */
const grades = []
grades[0] = 81;
grades[1] = 92;
grades[2] = 55;
console.log(grades);

// Using push
grades.push(65);
grades.push(29);


/* Change an Array Element */
grades[0] = 85;
console.log(grades);

/* Access Length */
console.log(grades.length);

document.getElementById("demo").innerHTML = grades.toString();


/* Arrays can be objects */
const person = ["Amanda", 24, "Human"]
console.log(person);

const objPerson = {
    firstName: "Amanda",
    age: 24,
    species: "Human"
};

console.log(objPerson);
