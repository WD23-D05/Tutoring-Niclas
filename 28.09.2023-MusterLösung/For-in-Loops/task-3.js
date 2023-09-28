// Schreibe eine Funktion, die die Anzahl der Eigenschaften in einem Objekt zählt, und nutze eine For-in-Schleife, um dies zu tun.
const myObject = { name: "John", age: 30, city: "New York" };

function countProperties(obj) {
    let count = 0;
    for (const key in obj) {
        count++;
    }
    return count;
}
console.log(countProperties(myObject)); // Beispielaufruf
