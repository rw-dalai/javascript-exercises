// --- Higher Order Functions ---

// 1. Cached Function
// A function that caches the results of another function based on its input argument

function cached(fn) {
    const cache = new Map();
    return function(arg) {
        if (cache.has(arg)) {
            return cache.get(arg);
        } else {
            const result = fn(arg);
            cache.set(arg, result);
            return result;
        }
    }
}

// Example function to be cached
function slowFunction(num) {
    for (let i = 0; i < 1e9; i++) {} // Simulate a slow computation
    return num * 2;
}

const cachedSlowFunction = cached(slowFunction);
console.time("First Call");
console.log(cachedSlowFunction(5)); // Slow computation
console.timeEnd("First Call");

console.time("Second Call");
console.log(cachedSlowFunction(5)); // Fast retrieval from cache
console.timeEnd("Second Call");



// 2. Logging Function
// A function that takes another function and eturns a new function that logs its input and output

function withLogging(fn) {
    return function(...args) {
        console.log(`Calling function ${fn.name} with arguments:`, args);
        const result = fn(...args);
        console.log(`Function ${fn.name} returned:`, result);
        return result;
    }
}

// Example function to be wrapped with logging
function add(a, b) {
    return a + b;
}

const loggedAdd = withLogging(add);
loggedAdd(3, 4); // Logs input and output