//Erstellen Sie eine Funktion sortByLength, die ein Array von Zeichenketten akzeptiert und die Zeichenketten nach ihrer Länge sortiert, von der kürzesten zur längsten. Verwenden Sie die sort-Funktion.

function sortByLength(arr) {
    return arr.sort(function (a, b) {
        return a.length - b.length;
    });
}

const words = ["apple", "banana", "cherry", "date"];
const sortedWords = sortByLength(words);
console.log(sortedWords);
