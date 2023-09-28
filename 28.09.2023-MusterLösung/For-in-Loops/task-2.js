// Iteriere über die Eigenschaften eines Objekts und gib sowohl Schlüssel als auch Werte aus.

const myObject = { name: "John", age: 30, city: "New York" };
for (const key in myObject) {
    console.log(key + ": " + myObject[key]);
}
