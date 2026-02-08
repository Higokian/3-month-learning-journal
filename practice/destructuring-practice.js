// Old way - accessing array elements
const colors = ["red", "green", "blue"];
const firstColor = colors[0];
const secondColor = colors[1];
console.log(firstColor, secondColor); // red green

// New way - array destructuring
const [first, second, third] = colors;
console.log(first, second, third); // red green blue

// Skip elements
const [primary, , tertiary] = colors;
console.log(primary, tertiary); // red blue

// Practice: Swap variables
let a = 1;
let b = 2;
[a, b] = [b, a]; // Swaps them!
console.log(a, b); // 2 1

// Practice: Get rest of array
const numbers = [1, 2, 3, 4, 5];
const [one, two, ...rest] = numbers;
console.log(one); // 1
console.log(two); // 2
console.log(rest); // [3, 4, 5]

// Practice: Default values
const [x, y, z = 0] = [1, 2];
console.log(x, y, z); // 1 2 0

// Object Destructuring
// Old way - accessing object properties
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const name1 = person.name;
const age1 = person.age;
console.log(name1, age); // John 30

// New way - object destructuring
const { name, age, city } = person;
console.log(name1, age, city); // John 30 New York

// Rename variables
const { name: personName, age: personAge } = person;
console.log(personName, personAge); // John 30

// Default values
const { country = 'USA' } = person;
console.log(country); // USA

// Nested destructuring
const user = {
    id: 1,
    info: {
        email: 'john@example.com',
        address: {
            street: '123 Main St',
            city: 'Boston'
        }
    }
};

const { info: { email, address: { city: userCity } } } = user;
console.log(email);     // john@example.com
console.log(userCity);  // Boston

// Practice: Function parameters
const greet = ({ name, age }) => {
    return `Hello, ${name}! You are ${age} years old.`;
};

const result = greet(person);
console.log(result); // Hello, John! You are 30 years old.

// Practice: Destructure in function return
const getCoordinates = () => {
    return { x: 10, y: 20 };
};

const { x, y } = getCoordinates();
console.log(x, y); // 10 20