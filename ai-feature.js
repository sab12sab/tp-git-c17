// C19 - AI generated feature

function calculateTotal(price, taxRate) {
    if (price < 0 || taxRate < 0) {
        throw new Error("Invalid input");
    }
    return price + (price * taxRate);
}

module.exports = { calculateTotal };

function analyzeData(data) {
    return `Analyse de: ${data}`;
}

console.log(analyzeData("C20"));