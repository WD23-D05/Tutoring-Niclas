//Erstellen Sie eine Funktion filterLongWords, die ein Array von Wörtern akzeptiert und ein neues Array zurückgibt, das nur Wörter enthält, die mehr als fünf Buchstaben haben. Verwenden Sie die filter-Funktion.

function filterLongWords(arr) {
    return arr.filter(function (word) {
        return word.length > 5;
    });
}

const words = ["apple", "banana", "cherry", "date"];
const longWords = filterLongWords(words);
console.log(longWords);
