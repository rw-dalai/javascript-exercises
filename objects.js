
// 1. Create object
const bicycle = { model: "bmc", price: 9.981, isNew: true };

// 2. Output object on console
console.log( bicycle );

// 3. Iterate over object keys
// -> output on console
const keys = Object.keys( bicycle );
console.log( keys );

// 4. Iterate over object values
// -> output on console
const values = Object.values( bicycle );
console.log( values );

// Bonus Round 1 (classic counter loop)
for (let i = 0; i < values.length; i++) {
    console.log( values[i] );
}

// Bonus Round 2 (for-each loop with Array)
// for (let <variable> of <Iterable>)
// -> Works because: Arrays are Iterables !!!
for (let value of bicycle) {
    console.log( value );
}

// Bonus Round 3 (for-each loop with Objects ???)
// -> Works NOT: Objects are NOT Iterables !!!
for (let value of bicycle) {
    console.log( value );
}

// 5. Set and get model
// -> output on console
bicycle.model = "canondale";
console.log(  bicycle.model );

// 6. Set model to a new value (dot notation vs bracket notation)
// -> output new model in console

// bracket-notation
bicycle["model"] = "area51";
console.log( bicycle["model"] );

// dot-notation
bicycle.model = "area51";
console.log( bicycle.model );

// 7. set model via bracket notation "using a dynamic key"
// -> output new model in console

const bicKey = "model";
console.log( bicycle[bicKey] );

// 8. add a method to the object (getSalesPrice)
// returns 150% from price if bicycle is new, otherwise 100%

const bicycle2 = {
    model: "bmc",
    price: 9.981,
    isNew: true,
    // a javascript `function` inside object is called `method`
    calcSalesPrice: function() {
        return this.isNew ? this.price * 1.5 : this.price
    }
};

console.log( bicycle2.calcSalesPrice() );