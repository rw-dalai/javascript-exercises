

// --- Scope ---

// SCOPE = variables a function can access

{
    // outer scope
    let outer = 99;
    console.log(local)

    function innerScope() {

        // local Scope
        let local = 1;

        console.log("outer", outer);
        console.log("local", local);
    }

    innerScope();
    console.log(local); // ❌ ReferenceError
}




// --- Closure ---

// CLOSURE = a combination of: function + references to its accessible outer variables (outter scope)

{
    let outer = 99;

    // Closure#1
    function makeCounter() { // closes over { outer: 99 }
        let counter = 0;

        // Closure#2
        return function addOneToCounter() { // closes over { counter } and { outer }
            counter++;
            console.log("counter", counter);
            console.log("outer", outer);
        };
    }

    const counterFn = makeCounter();
    counterFn(); // 1
    counterFn(); // 2
}




// --- Closure Part 2 ---

// ENVIRONMENT           = Runtime storage of variables for a scope
// SCOPE CHAIN           = Linked environments

// @FUNCTION DEFINITION  = Closure formed -> Function + Link to its outer environment
// @FUNCTION CALL        = New environment -> Every call gets fresh local environment

{
    let outer = 99;

    // Closure#1
    function makeCounter() { // closes over { outer }
        let counter = 0;

        // Closure#2
        return function () { // closes over { counter } and { outer }
            counter++;
            outer--;
            console.log("counter", counter);
            console.log("outer", outer);
        };
    }

    const counter1Fn = makeCounter("counter-1");
    const counter2Fn = makeCounter("counter-2");

    counter1Fn(); // counter=1; outer=98;
    counter2Fn(); // counter=1; outer=97;


}




// --- Closure Part 3 ---

// ENVIRONMENT LIFETIME = an environment is GC'd when unreachable (no closures point to it)

{
    function make() {
        let x = 0;

        return function inner() {
            return x;
        }
    }

    let fn1 = make();

    fn1 = null;
}


function adder(zahl1) {
    return function x(zahl2) {
        return zahl1 + zahl2;
    }
}

const adder2 = adder(2);
const adder10 = adder(10);

