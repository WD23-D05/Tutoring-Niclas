// Erstelle eine While-Schleife, die Zufallszahlen generiert, bis eine bestimmte Bedingung erfüllt ist.

let randomNumber;
while (true) {
    randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber < 0.5) {
        break;
    }
}
