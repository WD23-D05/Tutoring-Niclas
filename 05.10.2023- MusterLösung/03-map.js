// Schreiben Sie eine Funktion convertToUSD, die ein Array von Preisen in Euro akzeptiert und ein neues Array zurückgibt, in dem die Preise in US-Dollar umgerechnet sind. Nehmen Sie an, dass 1 Euro gleich 1,17 US-Dollar ist. Verwenden Sie die map-Funktion.

function convertToUSD(euroPrices) {
    const exchangeRate = 1.17;
    return euroPrices.map(function (price) {
        return price * exchangeRate;
    });
}

const euroPrices = [20, 30, 40];
const usdPrices = convertToUSD(euroPrices);
console.log(usdPrices);
