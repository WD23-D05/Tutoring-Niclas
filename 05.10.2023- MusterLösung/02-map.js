// Erstellen Sie eine Funktion capitalizeNames, die ein Array von Namen akzeptiert und ein neues Array zurückgibt, in dem alle Namen großgeschrieben sind. Verwenden Sie die map-Funktion.
function capitalizeNames(arr) {
    return arr.map(function (name) {
        return name.toUpperCase();
    });
}

const names = ["alice", "bob", "charlie"];
const capitalizedNames = capitalizeNames(names);
console.log(capitalizedNames);
