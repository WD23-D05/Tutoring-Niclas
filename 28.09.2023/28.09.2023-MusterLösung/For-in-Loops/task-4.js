// Überprüfe, ob ein bestimmter Schlüssel in einem Objekt vorhanden ist, und gib eine entsprechende Nachricht aus.
const myObject = { name: "John", age: 30, city: "New York" };

function keyExists(obj, targetKey) {
    for (const key in obj) {
        if (key === targetKey) {
            return true;
        }
    }
    return false;
}
console.log(keyExists(myObject, "city")); // Beispielaufruf
