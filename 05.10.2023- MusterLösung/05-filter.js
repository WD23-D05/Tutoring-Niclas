//Schreiben Sie eine Funktion filterAdults, die ein Array von Personenobjekten akzeptiert und ein neues Array zurückgibt, das nur die Personen enthält, die älter als 18 Jahre sind. Verwenden Sie die filter-Funktion.

function filterAdults(persons) {
    return persons.filter(function (person) {
        return person.age > 18;
    });
}

const persons = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
];

const adults = filterAdults(persons);
console.log(adults);
