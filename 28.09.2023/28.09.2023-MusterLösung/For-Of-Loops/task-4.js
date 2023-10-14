// Schreibe eine Funktion, die prüft, ob ein bestimmtes Element in einem Array existiert, und nutze eine For-of-Schleife, um dies zu überprüfen.
const myArray = [1, 2, 3, 4, 5, 8];

function elementExists(test, target) {
    for (const element of test) {
        if (element === target) {
            return true;
        }
    }
    return false;
}

elementExists(myArray);

console.log(elementExists(myArray)); // Beispielaufruf
