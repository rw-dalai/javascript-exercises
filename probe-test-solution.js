// A1
const items = [
    { id: 1, name: "SSD", price: 79.9, stock: 5, category: "hardware" },
    { id: 2, name: "HDMI Cable", price: 8.5, stock: 0, category: "cables" },
    { id: 3, name: "Keyboard", price: 39.0, stock: 12, category: "peripherals" },
    { id: 4, name: "GPU", price: 499.0, stock: 2, category: "hardware" },
];

const finalItems = items
    .filter(item => item.stock > 0)
    .map(item => ({
        ...item,
        price: item.price * 1.1,
        isPremium: item.price * 1.1 >= 100
    }));


// A2
const numbers = [5, 12, 7, 8, 3, 10];
const quadNumbers = numbers
    .filter(n => n % 2 !== 0)
    .map(n => n * n)


// A3
const team = [...teamA, ...teamB]);
const teamWithCoach = ["Coach", ...team];
const uniqueTeam = Array.from(new Set(teamWithCoach));
const uniqueTeamSorted = uniqueTeam.toSorted();

// A4
const scores = [85, 92, 78, 90, 88];
const allAbove80 = scores.every(score => score >= 80);
const anyAbove95 = scores.some(score => score >= 95);

// B1
function avg(...nums) {
    if (nums.length === 0) {
        throw new Error(
            `At least one number is required to calculate the average`);
    }
    let sum = 0;
    for (let num of nums) {
        if (typeof num !== "number") {
            throw new TypeError(
                `Invalid argument: ${num} is not a number`);
        }
        sum += num;
    }
    return Number((sum / nums.length).toFixed(2));
}


// B3
function addPixel(px1, px2) {
    const pixel1 = parseInt(px1);
    const pixel2 = parseInt(px2);

    if (isNaN(pixel1) || !px1.endsWith("px")) {
        throw new Error(`Invalid format for px1: ${px1}`);
    }

    if (isNaN(pixel2) || !px2.endsWith("px")) {
        throw new Error(`Invalid format for px2: ${px2}`);
    }

    const sum = pixel1 + pixel2;
    return `${sum}px`;
}

// C1
const profile2 = {
    ...profile,
    address: {
        ...profile.address,
        city: "Wien"
    },
    preferences: {
        ...profile.preferences,
        langs: [...profile.preferences.langs, "fr"]
    }
};

for (const [key, value] of Object.entries(profile2)) {
    console.log(`${key}=${value}`);
}

// C2
const account = {
    balance: 1000,
    currency: "EUR",
    isPremium: false,
    calcFee() {
        const rate = this.isPremium ? 0.01 : 0.02;
        return this.balance * rate;
    }
};

// D1
const newCities = ["Wien", ...cities, "Salzburg"];
const combinedCities = [...cities, ...more];

// D2
const base = { id: 1, role: "user" };
const objWithActive = { ...base, active: true };
const objWithAdmin = { ...base, role: "admin", lastLogin: "2025-11-02" };

// D3
const [lat, ...restCoords] = coords;
const { theme, version: ver, ...otherSettings } = settings;

// D4
function sumAll(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

// D5
function MyComponent({ title,  name }) {
  console.log(`${title} - ${name}`);
}

const person = { title: "Developer", name: "Alice"};
MyComponent(person)


