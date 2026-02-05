// Challenge 1: Convert this function to arrow syntax
/*function double(x) {
    return x * 2;
}*/
// Your arrow version here:
let double = (x) => x * 2;
console.log(double(2));

// Challenge 2: Use template literals to create this string
const city = "New York";
const population = 8000000;
// Create: "New York has a population of 8,000,000"
// Your code here:
console.log(`${city} has a population of ${population} `);

// Challenge 3: When should you use const vs let?
// Write your answer as a comment

/* 

Const should only be used when you know you will never need to assign a new value to a variable. Const can be used for arrays and objects, since you can manipulate them without actually reassigning them.

Let should be used when you expect a variable's value to changed throughout the program.Let should also be used when creating arrow functions.

*/
