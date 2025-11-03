// A1
const items = [
    { id: 1, name: "SSD", price: 79.9, stock: 5, category: "hardware" },
    { id: 2, name: "HDMI Cable", price: 8.5, stock: 0, category: "cables" },
    { id: 3, name: "Keyboard", price: 39.0, stock: 12, category: "peripherals" },
    { id: 4, name: "GPU", price: 499.0, stock: 2, category: "hardware" },
];

// nur Artikeln mit stock > 0,
const fileredItems = items.filter(item => item.stock > 0);
// const fileredItems2 = items.filter(item => item.category == "hardware");

const mappedItems fileredItems.map(item => {
    // ?: home exercise -> price + 10% only for hardware
    /*if (item.category === "hardware") {
        return {...item, price: item.price * 1.1}
    } else {
        return item;
    }*/

    const price = item.category === "hardware"
        ? price: item.price * 1.1
        : price;

    const premium = price >= 100;

    return {...item, price, premium }

});

// const finalItems = mappedItems.map(item =>
//     ({...item, isPremium: price >= 100}));




// A2
const numbers = [5, 12, 7, 8, 3, 10];

const quadNumbers = numbers
    .filter(n => n % 2 !== 0)
    .map(n => n * n)


// A3
// const teamA = ["Mia", "Noah", "Lena", "Noa"];
//
const set = new Set([..teamA]);
Array.from(set)
//
// teamA.toSorted()


const teamA = ["Mia", "Noah", "Lena"];
const teamB = ["Ben", "Lea", "Noah"];

const mergedTeams = ["Coach", ...teamA, , ...teamB];


// B1




