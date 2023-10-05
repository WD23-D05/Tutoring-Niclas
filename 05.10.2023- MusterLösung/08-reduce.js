//Erstellen Sie eine Funktion calculateAverage, die ein Array von Zahlen akzeptiert und den Durchschnitt der Zahlen berechnet. Verwenden Sie die reduce-Funktion.

function calculateAverage(arr) {
    const sum = arr.reduce(function (acc, num) {
        return acc + num;
    }, 0);
    return sum / arr.length;
}

const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);
console.log(average);
