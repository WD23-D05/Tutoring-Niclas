//Erstellen Sie eine Funktion filterProducts, die ein Array von Produktobjekten akzeptiert und ein neues Array zurückgibt, das nur die Produkte enthält, deren Preis unter 50 Euro liegt. Verwenden Sie die filter-Funktion.

function filterProducts(products) {
    return products.filter(function (product) {
        return product.price < 50;
    });
}

const products = [
    { name: "Apple", price: 0.99 },
    { name: "Banana", price: 0.59 },
    { name: "Cherry", price: 1.29 },
];

const affordableProducts = filterProducts(products);
console.log(affordableProducts);
