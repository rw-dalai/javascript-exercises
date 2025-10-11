// --- Section 1: Array / Object Spreading ---


// E1: Create a new array that includes all existing animals
// plus "🐹" at the end, without mutating the original.

const animals = ["🐶", "🐱", "🐭"];



// E2: Create a new array that includes all existing colors
// plus "yellow" at the beginning, without mutating the original.

const colors = ["red", "green", "blue"];



// E3: Create a new object with all the same properties
// but an additional property role: "student".

// E4: Create a new object with all the same properties
// but update the age to 23.

const user = { name: "Max", age: 22 };




// --- Section 2: Array.map() and Array.filter() ---

// E5: Filter out only the even numbers in:
// 1. Imperative version
// 2. Declarative version

const numbers = [2, 7, 8, 3, 10];



// E6: Increase every student’s grade by 1 point in:
// 1. Imperative version
// 2. Declarative version

const students = [
    { name: "Anna", grade: 3 },
    { name: "Ben", grade: 5 },
    { name: "Cara", grade: 4 },
];



// E7: Create a new array containing only expensive cars (price > 20000),
// but with their prices increased by 10%.

// 1. Imperative version
// 2. Declarative version

const cars = [
    { brand: "BMW", price: 40000 },
    { brand: "Fiat", price: 12000 },
    { brand: "Tesla", price: 60000 },
];



// E8: Create a new array where each object has an added property:
// - isAvailable: true

const books = [
    { title: "1984", author: "Orwell" },
    { title: "Dune", author: "Herbert" },
];



// E9: Create a new array that:
// - Filters out products cheaper than 30.
// - Increases remaining prices by 15%.
// - Adds a new property { inStock: true } to each object.
// 1. Imperative version
// 2. Declarative version

const products = [
    { name: "Keyboard", price: 40 },
    { name: "Mouse", price: 20 },
    { name: "Monitor", price: 200 },
];