// --- Spread Operator ---

// [...array] or {...object}

// 1. Arrays
const fruits1 = ["apple", "banana"];
const fruits2 = ["orange", "grape"];
const allFruits = [...fruits1, ...fruits2];
// console.log("All Fruits:", allFruits); // ["apple", "banana", "orange", "grape"]


// 2. Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
// console.log("Merged Object:", mergedObj); // { a: 1, b: 3, c: 4 }



// --- Rest Parameters ---

// function(...args)
// args is an array of all arguments passed to the function

// 1. Greets multiple names
function greet(...names) {
    return `Hello, ${names.join(" and ")}!`;
}
// console.log(greet("Ana", "Rene")); // Hello, Ana and Rene!


// 2. Sums all numbers
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
// console.log("Sum:", sum(1, 2, 3, 4)); // 10



// --- Destructuring ---

// 1. Arrays
const rgb = [255, 0, 0];
const [red, green, blue] = rgb;
// console.log("Red:", red);


// 2. Objects
const person = { name: "Ana", age: 18, class: "" };
// const { name, age } = person;
const { name, ...personWithoutAge } = person;
console.log("Name:", name);


// 3. With Rest Parameters with Arrays
const numbers = [1, 2, 3, 4, 5];
const [first, ...rest] = numbers;
// console.log("First:", first); // 1
// console.log("Rest:", rest); // [2, 3, 4, 5]


// 4. With Rest Parameters with Objects
const { a, ...others } = { a: 1, b: 2, c: 3 };
// console.log("a:", a);



// 5. With Function Parameters
function logUser({ name, age }) {
    console.log(`User: ${name}, Age: ${age}`);
}
// logUser({ name: "Ana", age: 18 }); // User: Ana, Age: 18

