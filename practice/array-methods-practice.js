// MAP - 15 minutes
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);

const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
];

// Starts with first element of users array, grabs only the values of the name key ('John). Adds that to a new array called names. Then moves to the next element of users array, repeating the previous step until it reaches the end of the users array. The final result is an array of names: ['John', 'Jane'].
const names = users.map(({ name }) => name);
console.log(names);

// FILTER - 15 minutes
// Filter creates a new array with all elements that pass the test provided in the function. In this case, it checks if the number is even (n % 2 === 0). If the condition is true, the number is included in the new array called evens. The final result is an array of even numbers: [2, 4].
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);

// Returns a new adults array containing only the user objects where the age is 18 or older.
const adults = users.filter(({ age }) => age >= 18);
console.log(adults);

// REDUCE - 20 minutes
// Reduce executes a reducer function on each element of the array, resulting in a single output value. In this case, it takes the total (which starts at 0) and adds each number n to it. The final result is the sum of all numbers in the array: 15.
const sum = numbers.reduce((total, n) => total + n, 0);// 0 is initial value for total.
console.log(sum);

// Returns the total age of all users by summing up the age property of each user object in the users array. The reduce function takes a callback that adds the age of each user to a running total, starting from an initial value of 0. The final result is the total age of all users: 55.
const totalAge = users.reduce((total, { age }) => total + age, 0);
console.log(totalAge);

// CHAINING - 15 minutes
const result = numbers
    .filter(n => n > 2)
    .map(n => n * 2)
    .reduce((sum, n) => sum + n, 0);
console.log(result);

// PRACTICE CHALLENGE - 10 minutes
const transactions = [
    { type: 'income', amount: 100 },
    { type: 'expense', amount: 50 },
    { type: 'income', amount: 200 }
];

const totalIncome = transactions
    .filter(({ type }) => type === 'income')
    .reduce((sum, { amount }) => sum + amount, 0);
console.log(totalIncome);

// Construction challenge (Do myself): 
// You are the project manager for your 1,850 sq ft home. You have a list of expenses, but you only want to know the total cost for the Kitchen upgrades.
const materials = [
    { item: 'Subway Tile', cost: 500, category: 'Kitchen' },
    { item: 'Bathtub', cost: 1200, category: 'Bathroom' },
    { item: 'Granite Countertop', cost: 3500, category: 'Kitchen' },
    { item: 'Luxury Vinyl Plank', cost: 2000, category: 'Flooring' },
    { item: 'Gas Range', cost: 1500, category: 'Kitchen' }
];

const kitchenCost = materials
    .filter(({category}) => category === 'Kitchen')
    //.map(({cost}) => cost) - This is not needed if I destructure {cost} in reduce()
    .reduce((total, {cost}) => total + cost, 0);

console.log(kitchenCost);