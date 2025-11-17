// A1
const items  = [
    {id : 1, name : "Matcha", preis : 9, description: "Green", isLegal : true},
    {id : 2, name : "Maka", preis : 29, description: "lila", isLegal : false},
    {id : 3, name : "Mariuana", preis : 15, description: "Gr**n", isLegal : false},
    {id : 1, name : "MDMA", preis : 50, description: "Rainbow", isLegal : false}
];

// Imperativ
const filteredItems = [];
for (let item of items) {
    if (item.preis >= 10 && item.preis < 20) {
        filteredItems.push(item);
    }
}

// Declarative
// items.filter(function () { })
const filteredItems2 = items.filter((item) => item.preis >= 10 && item.preis < 20);

// console.log(filteredItems);
// console.log(filteredItems2)


// A2

// Imperative
const priceDoubled = [];
for (let item of items) {
    if (item.preis < 10) {
        priceDoubled.push({...item, preis: item.preis * 2});
    }
    // } else {
    //     priceDoubled.push(item);
    // }
}

// Declarative
const priceDoubled2 = items.filter(item => item.preis < 10)
    .map(item => ({...item, preis: item.preis * 2}));

// const priceDoubled2 = items.map(item =>
//     item.preis < 10
//         ? ({...item, preis: item.preis * 2})
//         : item
// );

// console.log(priceDoubled);
// console.log(priceDoubled2);

// A3

function berechneGesamtpreis(...items) {
    let sum = 0;
    for (let item of items) {
        // Bonus
        if (Object.hasOwn(item, "preis")) {
            sum += item.preis;
        } else {
            console.log("Prop Preis does not exist", item);
        }
    }
    return sum;
}

// Beispielaufruf:
const item1 = { preis: 10 };
const item2 = { preis: 20, isAvailable: true };
const item3 = { preis: 30 };
const item4 = { preis: 30 };

const gesamtpreis = berechneGesamtpreis(item1, item2, item3, item4);
// console.log(gesamtpreis);


// console.log(item1.p !== undefined);
// console.log(Object.hasOwn(item1, "p"));



// B1

// Object Spread
const person = { name: "Ana", age: 18 }
const student = { ...person, matrikelNr: 1234 };
// const clonePerson = { ...person };

person["name"] = "Bob";
student.name = "Claude";

// console.log(student);
// console.log(person);


// Array Spread
const numbers1 = [1, 2, 3];
const numbers2 = [55, 66, 77];
const merged = [...numbers1, ...numbers2, 88 ];

// console.log(merged);

// B2
const { age, ...restOfPerson } = person;
console.log(restOfPerson);


// greeting = "Hello guys"
// names = ["Ana", "Bob", "Claude"]
function greet(greeting, ...names) {
    // console.log(`${greeting} ${names.join(",")}`)
    console.log(greeting + ": " + names.join(", "));
}

greet("Hello Guys", "Ana", "Bob", "Claude");















