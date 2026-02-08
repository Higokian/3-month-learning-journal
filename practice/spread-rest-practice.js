// ===== SPREAD WITH ARRAYS =====

const { name } = require("tar/lib/types");

// 1. Copyin arrays (creates new array)
const fruits = ["apple", "banana", "orange"];
const fruitsCopy = [...fruits];
console.log(fruitsCopy); // Output: ['apple', 'banana', 'orange']

// Why this matters:
fruits.push("grape");
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape'] (original array is modified)
console.log(fruitsCopy); // Output: ['apple', 'banana', 'orange'] (remains unchanged)

// 2. Combining arrays
const vegetables = ["carrot", "broccoli"];
const food = [...fruits, ...vegetables];
console.log(food); // Output: ['apple', 'banana', 'orange', 'grape', 'carrot', 'broccoli']

// 3. Adding elements while copying
const moreFruits = ["mango", ...fruits, "kiwi"];
console.log(moreFruits); // Output: ['mango', 'apple', 'banana', 'orange', 'grape', 'kiwi']

// 4. Converting strings to arrays
const word = "hello";
const letters = [...word];
console.log(letters); // Output: ['h', 'e', 'l', 'l', 'o']

// 5. Finding max/min
const numbers = [1, 5, 3, 9, 2];
const max = Math.max(...numbers); // Spreads array into arguments
const min = Math.min(...numbers);
console.log(max, min); // Output: 9 1

// ===== SPREAD WITH OBJECTS =====

// 1. Copying objects
const person = { name: "Jason", age: 28 };
const personCopy = { ...person };
console.log(personCopy); // Output: { name: 'Jason', age: 28 }

// 2. Merging objects
const contact = { email: "jason@example.com", phone: "123-456-7890" };
const fullProfile = { ...person, ...contact };
console.log(fullProfile);
// Output: { name: 'Jason', age: 28, email: 'jason@example.com', phone: '123-456-7890' }

// 3. Adding/overriding properties
const updatedPerson = { ...person, age: 29, city: "New York" };
console.log(updatedPerson);
// Output: { name: 'Jason', age: 29, city: 'New York' }

// 4. Practical use: Default options
const defaultSettings = {
  theme: "light",
  notifications: true,
  language: "en",
};

const userSettings = {
  theme: "dark",
};

const finalSettings = { ...defaultSettings, ...userSettings };
console.log(finalSettings);
// Output: { theme: 'dark', notifications: true, language: 'en' } (userSettings overrides defaultSettings)

// ===== SPREAD IN FUNCTION CALLS =====

const greet = (greeting, name, punctuation) => {
  return `${greeting}, ${name}${punctuation}`;
};

const greetingParts = ["Hello", "World", "!"];
console.log(greet(...greetingParts)); // Output: "Hello, World!"

// ===== REST PARAMETERS IN FUNCTIONS =====

// Old way: using arguments object (don't use this anymore)
function sumOld() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// New way: using rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// .reduce() is a method that takes a function and applies it cumulatively to the elements of the array, resulting in a single value. In this case, it sums up all the numbers in the array.
console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Rest parameters can also be used with other parameters
const introduce = (firstName, lastName, ...hobbies) => {
  return `${firstName} ${lastName} likes: ${hobbies.join(", ")}`;
};

console.log(introduce("Jason", "Ritter", "coding", "gaming", "traveling"));
// Output: "Jason Ritter likes: coding, gaming, traveling"

// ===== REST IN DESTRUCTURING =====

// With arrays
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// With objects
const user = {
  id: 1,
  name1: "Jason",
  email: "jason@example.com",
  age: 28,
  city: "New York",
};

const { id, name1, ...restOfUser } = user;
console.log(id, name1); // Output: 1 'Jason'
console.log(restOfUser); // {email: 'jason@example.com', age: 28, city: 'New York'}

// ==== PRACTICAL EXAMPLES ====

// 1. Filter function that works with any number of conditions
const filterByConditions = (array, ...conditions) => {
  return array.filter((item) => {
    return conditions.every((condition) => condition(item));
  });
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEven = (num) => num % 2 === 0;
const isGreaterThanFive = (num) => num > 5;

const result = filterByConditions(nums, isEven, isGreaterThanFive);
console.log(result); // Output: [6, 8, 10] (only numbers that are even and greater than 5)

// 2. Logger that accepts unlimited arguments
const log = (level, ...messages) => {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`[${timestamp}] ${level}:`, ...messages);
};

log("INFO", "Application started");
log("ERROR", "Something went wrong", "Error code:", 500);

// 3. Combine multiple arrays
const combineArrays = (...arrays) => {
  return [].concat(...arrays);
};

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
console.log(combineArrays(arr1, arr2, arr3)); // [1, 2, 3, 4, 5, 6]
