// Iteriere über die Eigenschaften eines Objekts und summiere die Werte der numerischen Eigenschaften.

const myObject = { apples: 5, oranges: 8, bananas: 3 };
let sum = 0;
for (const key in myObject) {
    if (typeof myObject[key] === "number") {
        sum += myObject[key];
    }
}
console.log(sum);
