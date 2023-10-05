//Schreiben Sie eine Funktion sortStudentsByGrade, die ein Array von Studentenobjekten akzeptiert, wobei jedes Objekt einen Namen und eine Note enthält. Sortieren Sie die Studenten nach ihren Noten in aufsteigender Reihenfolge. Verwenden Sie die sort-Funktion.

function sortStudentsByGrade(students) {
    return students.sort(function (a, b) {
        return a.grade - b.grade;
    });
}

const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
];

const sortedStudents = sortStudentsByGrade(students);
console.log(sortedStudents);
