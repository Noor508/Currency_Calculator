function convert() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;

    let conversionRate;

    switch (fromCurrency) {
        case "USD":
            conversionRate = 279.76; // 1 USD = 279.76 PKR (for example)
            break;
        case "RMB":
            conversionRate = 38.24; // 1 RMB = 38.24 PKR (for example)
            break;
        case "AUD":
            conversionRate = 177.65; // 1 AUD = 177.65 PKR (for example)
            break;
        default:
            conversionRate = 1;
    }

    const result = (amount * conversionRate).toFixed(2); // Round to 2 decimal places
    document.getElementById("result").textContent = result;
}
