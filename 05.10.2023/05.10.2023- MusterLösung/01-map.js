// Schreiben Sie eine Funktion squareArray, die ein Array von Zahlen akzeptiert und ein neues Array zurückgibt, in dem jede Zahl quadriert ist. Verwenden Sie die map-Funktion.
function squareArray(arr) {
    return arr.map(function (num) {
        return num * num;
    });
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareArray(numbers);
console.log(squaredNumbers);
