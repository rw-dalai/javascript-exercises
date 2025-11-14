# JavaScript Test

## A) Arrays

### A1 – Preisberechnung aller Produkte
Gegeben:
```js
const items  = [
  {id : 1, name : "Matcha", preis : 9, description: "Green", isLegal : true},
  {id : 2, name : "Maka", preis : 29, description: "lila", isLegal : false},
  {id : 3, name : "Mariuana", preis : 15, description: "Gr**n", isLegal : false},
  {id : 1, name : "MDMA", preis : 50, description: "Rainbow", isLegal : false}
];
```
**Aufgabe:** Schreibe eine Funktion, die alle `preis` Werte aufsummiert und das Gesamtergebnis zurückgibt.

---

### A2 – Neues Array mit Preisfilter (10€ bis < 20€)
Erzeuge zwei Versionen:
1. **Imperativ** (mit `for` oder `for...of`)
2. **Deklarativ** (mit `.filter()`)

Gefiltert werden sollen nur Produkte mit:
- `preis >= 10`
- `preis < 20`

---

### A3 – Preise verdoppeln (weniger als 10€)
Erstelle erneut zwei Versionen:
1. **Imperativ:** Neues Array mit verdoppeltem `preis` für Produkte unter 10€
2. **Deklarativ:** `.filter()` + `.map()` verwenden

---

## B) Spread · Rest · Destructuring

### B1 – Spread Operator (2 Beispiele)
Gib zwei Beispiele für Spread an:
- Array-Kopie oder Arrays zusammenführen
- Objektkopie oder Objekt erweitern

---

### B2 – Rest Operator (2 Beispiele)
Zeige zwei Beispiele für Rest-Parameter, z.B.:
- `function sum(...nums)`
- `function greet(...names)`

---

### B3 – Destructuring (2 Beispiele)
Gib zwei Beispiele an:
- **Array-Destructuring**
- **Object-Destructuring**