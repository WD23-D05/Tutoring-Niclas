//Erstellen Sie eine Funktion sortByPrice, die ein Array von Produktobjekten akzeptiert und die Produkte nach ihrem Preis in aufsteigender Reihenfolge sortiert. Verwenden Sie die sort-Funktion.

function sortByPrice(products) {
    return products.sort(function (a, b) {
        return a.price - b.price;
    });
}

const products = [
    { name: "Apple", price: 0.99 },
    { name: "Banana", price: 0.59 },
    { name: "Cherry", price: 1.29 },
];

const sortedProducts = sortByPrice(products);
console.log(sortedProducts);
