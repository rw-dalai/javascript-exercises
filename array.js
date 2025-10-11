const numbers = [1, 2, 3];


// --- Mutable (change the original) ---
// push, pop, shift, unshift, splice

// push -> add to the end
numbers.push(99);

// pop -> remove from the end
const lastElem = numbers.pop();

// unshift -> add to the beginning
numbers.unshift(99);

// shift -> remove from the beginning
const firstElem = numbers.shift();

// splice -> remove from anywhere
numbers.splice(2, 1); // remove 1 element at index 2



// --- Immutable (create a new array) ---
// slice -> Copy or extract portions
// [...array] -> Spread elements into a new array

// 1. slice -> create a shallow copy of a portion of an array
const part = numbers.slice(1, 3); // from index 1 to index 3 (not inclusive)

// 2. spreading -> create a new array by spreading the elements of existing arrays
const copy = [...numbers ]; // copy of the whole array



// --- Spreading Objects vs Spreading Arrays ---
// [...array] or {...object} -> create a new array or object

const person = { name: "Ana", age: 18 };

// 1. Spreading objects
const student = { ...person, class: "7ABIF / 7ACIF" };
const student2 = { ...person, age: 19 }; // overwrite age

// console.log(student); // { name: "Ana", age: 18, class: "7ABIF / 7ACIF" }
// console.log(student2); // { name: "Ana", age: 19 }


// 2. Spreading arrays
const numbers3 = [4, 5, 6];
const combined2 = [ 99, ...numbers, ...numbers3 ];

// console.log(combined2); // [99, 1, 2, 3, 4, 5, 6]



// --- Slice Example ---

// Insert 99 at index 3
// [1, 2, 3, 4, 5, 6, 7] -> [1, 2, 3, 99, 4, 5, 6, 7]

const indexToInsert = 3;
const elementToInsert = 99;

// 1. Using slice
const newArrayWithSlice = [
    ...numbers.slice(0, indexToInsert),
    elementToInsert,
    ...numbers.slice(indexToInsert)
];


// --- Fruits Example ---

const fruits = [
    { symbol: "🍌", price: 1.5, name: "banana", isSweet: true },
    { symbol: "🍎", price: 2.5, name: "apple", isSweet: false },
    { symbol: "🥝", price: 0.5, name: "kiwi", isSweet: false },
];


// --- Array.filter() ---

// Example: Filter out all fruits which are not sweet
// -> and store them in a new array

// 1. Imperative Version (How to do it)
const onlySweetFruits = [];
for (let fruit of fruits) {
    if (fruit.isSweet) {
        onlySweetFruits.push(fruit);
    }
}
// console.log(onlySweetFruits);


// 2. Declarative Version (What to do)
const onlySweetFruits2 = fruits.filter(fruit => fruit.isSweet);
// console.log(onlySweetFruits2);



// --- Array.map() ---

// Example: Create a new array with the prices of all fruits increased by 10%
// -> store them in a new array

// 1. Imperative Version (How to do it)
const increasedPrices = [];
for (let fruit of fruits) {
    increasedPrices.push({ ...fruit, price: fruit.price * 1.1});
}
// console.log(increasedPrices);


// 2. Declarative Version (What to do)
const increasedPrices2 = fruits.map(fruit => {
    return { ...fruit, price: fruit.price * 1.1 };
});
// console.log(increasedPrices2);



// Example: Create a new array with the names of all fruits in UPPERCASE
// -> store them in a new array

// 1. Imperative Version (How to do it)
const upperCasedFruits = [];
for (let fruit of fruits) {
    const upperCasedFruit = { ...fruit, name: fruit.name.toUpperCase() };
    upperCasedFruits.push(upperCasedFruit)
}
// console.log(upperCasedFruits);

// 2. Declarative Version (What to do)
const upperCasedFruits2 = fruits.map((fruit) =>
    ({...fruit, name: fruit.name.toUpperCase() }))
// console.log(upperCasedFruits2);



// --- Array.map() + Array.filter() ---

// Example: Create a new array with the prices of all SWEET fruits increased by 10%
// -> store them in a new array

// 1. Imperative Version (How to do it)
const increasedPricesOfSweetFruits = [];
for (let fruit of fruits) {
    if (fruit.isSweet) {
        increasedPricesOfSweetFruits.push({
            ...fruit,
            price: fruit.price * 1.1
        });
    }
}
// console.log(increasedPricesOfSweetFruits);


// 2. Declarative Version (What to do)
const increasedPricesOfSweetFruits2 = fruits
    .filter(fruit => fruit.isSweet)
    .map(fruit => ({ ...fruit, price: fruit.price * 1.1 }));
// console.log(increasedPricesOfSweetFruits2);



// Example: Create a new array with all even numbers doubled
// -> store them in a new array

const array = [1, 4, 9, 16];

// 1. Imperative Version (How to do it)
const doubled = [];
for (let x of array) {
    if (x % 2 === 0) {
        doubled.push(x * 2);
    }
}
// console.log(doubled);


// 2. Declarative Version (What to do)
const doubled2 = array
    .filter(x => x % 2 === 0)
    .map(x => x * 2);
// console.log(doubled2)



// --- Array.toSorted() ---

// Example: Sort the fruits by price in descending order
// -> store the result in a new array

const sortedByPriceAsc = fruits.toSorted(
    (a, b) => a.price - b.price); // ascending order

const sortedByPriceDesc = fruits.toSorted(
    (a, b) => b.price - a.price); // descending order


// Example: Sort by name alphabetically
const sortedByNameAsc = fruits.toSorted(
    (a, b) => a.name.localeCompare(b.name)); // ascending order

const sortedByNameDesc = fruits.toSorted(
    (a, b) => b.name.localeCompare(a.name)); // descending order



// --- Array.reduce() ---

// NOTE: What is a reducer function?
// A reducer function is a function that takes two arguments:
// 1. An accumulator (the accumulated value so far)
// 2. The current value (the current element being processed in the array)
// The reducer function combines these two values and returns a new accumulated value.
// This process is repeated for each element in the array, resulting in a single output value.

// Example: Calculate the total price of all fruits
// -> store the result in a variable

// 1. Imperative Version (How to do it)
let totalPrice = 0;
for (let fruit of fruits) {
    totalPrice += fruit.price;
}
// console.log(totalPrice);


// 2. Declarative Version (What to do)
const totalPrice2 = fruits.reduce((total, fruit) => total + fruit.price, 0);
// console.log(totalPrice2);



// --- Array.find() ---

// Find the first fruit which is not sweet
// -> store the result in a variable

// 1. Imperative Version (How to do it)
let firstNotSweetFruit; // undefined
for (let fruit of fruits) {
    if (!fruit.isSweet) {
        firstNotSweetFruit = fruit;
        break;
    }
}
// console.log(firstNotSweetFruit);


// 2. Declarative Version (What to do)
const firstNotSweetFruit2 = fruits.find(fruit => !fruit.isSweet);
// console.log(firstNotSweetFruit2);


// --- Array.every() && Array.some() ---

// Example: Check if all fruits are sweet
// Example: Check if at least one fruit is sweet


// 1. Imperative Version (How to do it)
let allAreSweet = true;
for (let fruit of fruits) {
    if (!fruit.isSweet) {
        allAreSweet = false;
    }
}

let atLeastOneIsSweet = false;
for (let fruit of fruits) {
    if (fruit.isSweet) {
        atLeastOneIsSweet = true;
        break;
    }
}
// console.log(allAreSweet);
// console.log(atLeastOneIsSweet);


// 2. Declarative Version (What to do)
const allAreSweet2 = fruits.every(fruit => fruit.isSweet);
const atLeastOneIsSweet2 = fruits.some(fruit => fruit.isSweet);
// console.log(allAreSweet2);
// console.log(atLeastOneIsSweet2);



// --- Array.includes() ---

// NOTE: includes uses strict equality (===) for comparison

// Example: Check if an array contains a specific number
// -> store the result in a variable
const nums = [1, 2, 3, 4, 5];


// 1. Imperative Version (How to do it)
let containsThree = false;
for (let num of nums) {
    if (num === 3) {
        containsThree = true;
        break;
    }
}

// 2. Declarative Version (What to do)
const contains = nums.includes(3);