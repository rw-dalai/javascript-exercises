# JavaScript Test

---

## A) Arrays

### A1 – Lagerbereinigung & Preisupdate

Gegeben:

```js
const items = [
  { id: 1, name: "SSD", price: 79.9, stock: 5, category: "hardware" },
  { id: 2, name: "HDMI Cable", price: 8.5, stock: 0, category: "cables" },
  { id: 3, name: "Keyboard", price: 39.0, stock: 12, category: "peripherals" },
  { id: 4, name: "GPU", price: 499.0, stock: 2, category: "hardware" },
];
```
Aufgabe: Erzeuge **deklarativ** (keine `for`-Schleife) ein neues Array mit
- nur Artikeln mit `stock > 0`,
- **+10% Preis** für Kategorie `"hardware"`
- zusätzlichem Feld `isPremium: price >= 100`. 
- Das **Original** darf nicht verändert werden.

### A2 – Ungerade Zahlen quadrieren

Gegeben:

```js
const numbers = [5, 12, 7, 8, 3, 10];
```

1) **Imperativ:** Filtere **ungerade** Zahlen und **quadriere** sie (klassische `for`-Schleife).
2) **Deklarativ:** Gleiches Ergebnis mit **`filter` + `map`**.

### A3 – Teams mergen, Duplikate entfernen, Coach einfügen

Gegeben:
```js
const teamA = ["Mia", "Noah", "Lena"];
const teamB = ["Ben", "Lea", "Noah"];
```
1) Erzeuge ein **neues** Array **ohne Duplikate** in der **Reihenfolge des ersten Auftretens** (`teamA` vor `teamB`).
2) Füge **ohne Mutation** den String `"Coach"` an **Index 0** ein.

### A4 – Statistik mit `reduce` (BONUS/Optional für 1++ auf Test)
Gegeben:

```js
const scores = [12, 5, 18, 3, 27];
```
- Erzeuge per **`reduce`** ein **Objekt** `{ min, max, average }`
- Das Eingangsarray bleibt unverändert.

---

## B) Functions (2 Aufgaben)

### B1 – `avg(...nums)` (Rest-Parameter)
**Aufgabe:** Implementiere `avg(...nums)`.
- Akzeptiert **beliebig viele Zahlen** über **Rest-Parameter**.
- **Validiere** alle Argumente mit `typeof`. Bei Nicht-`number` → `TypeError` werfen.
- Berechne den Durchschnitt (2 Nachkommastellen, als **Number**, nicht String).
- Beispiele: `avg(2, 4) // 3`, `avg(1, 2, 3) // 2` (per `console.log`).

### B2 – `pick(obj, keys)` (BONUS/Optional für 1++ auf Test)
**Aufgabe:** Schreibe `pick(obj, keysArray)`, das ein **neues Objekt** mit nur den in `keysArray` genannten Properties zurückgibt (existierende Keys).
- `keysArray` ist ein Array von **Strings**.
- **Mutiert `obj` nicht**.
- Beispiele: `pick({a:1,b:2,c:3}, ["a","c"]) // {a:1, c:3}`.

---

## C) Objects (2 Aufgaben)

### C1 – Profil-Update **immutabel** (verschachtelt)
Gegeben:
```js
const profile = {
  id: 42,
  name: "Max",
  address: { city: "Linz", zip: "4020" },
  preferences: { theme: "light", langs: ["de", "en"] }
};
```
1) Erzeuge **`profile2`** als **neues Objekt**: setze `address.city` auf `"Wien"` und **füge** in `preferences.langs` die Sprache `"fr"` **am Ende** hinzu (ohne Mutation).
2) Logge (console.log) alle **Top-Level** Key/Value-Paare von `profile2` in der Form `key=value` via `Object.entries`

### C2 – Methode hinzufügen
Gegeben:

```js
const account = { balance: 1000, currency: "EUR", isPremium: false };
```
Füge eine Methode `calcFee()` hinzu, die **1%** der `balance` zurückgibt, wenn `isPremium === true`, sonst **2%**.
- Nutze `this` korrekt.

---

## D) Spread · Rest · Destructuring (Kurzaufgaben)

### D1 – Array-Spread

```js
const cities = ["Graz", "Linz"]; // Ergebnis: neues Array mit "Wien" am Anfang und "Salzburg" am Ende
const more = ["Innsbruck", "Klagenfurt"]; // Ergebnis: kombiniertes Array aus cities + more (neu)
```

### D2 – Object-Spread

```js
const base = { id: 1, role: "user" };
// Ergebnis 1: neues Objekt mit zusätzlichem Feld active: true
// Ergebnis 2: neues Objekt mit geänderter role: "admin" und zusätzlichem Feld lastLogin: "2025-11-02"
```

### D3 – Destructuring

```js
const coords = [48.2082, 16.3738, 171];
// Hole lat in Variable lat und den Rest in restCoords (Array-Destructuring + Rest)

const settings = { theme: "dark", version: "1.0.2", flags: { beta: true } };
// Hole theme und version als ver, den Rest in otherSettings (Object-Destructuring, Alias + Rest)

function greet({ firstName, lastName = "Doe" }) {
  console.log(`Hi ${firstName} ${lastName}`);
}
// Rufe greet mit einem Objekt auf, das nur firstName liefert
```