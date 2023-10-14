//Schreiben Sie eine Funktion calculateProduct, die ein Array von Zahlen akzeptiert und das Produkt aller Zahlen berechnet. Verwenden Sie die reduce-Funktion.

function calculateProduct(arr) {
    return arr.reduce(function (acc, num) {
        return acc * num;
    }, 1);
}

const numbers = [1, 2, 3, 4, 5];
const product = calculateProduct(numbers);
console.log(product);
