//Schreiben Sie eine Funktion findMaximum, die ein Array von Zahlen akzeptiert und das größte Element im Array findet. Verwenden Sie die reduce-Funktion.

function findMaximum(arr) {
    return arr.reduce(function (max, num) {
        return num > max ? num : max;
    }, arr[0]);
}

const numbers = [12, 45, 67, 32, 9];
const maximum = findMaximum(numbers);
console.log(maximum);
