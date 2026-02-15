function fetchExchangeRates() {
    const apiKey = "YOUR_API_KEY";
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const rates = data.rates;
            const currencies = Object.keys(rates);            
            const sourceCurrencySelect = document.getElementById("source");
            const targetCurrencySelect = document.getElementById("target");
            currencies.forEach(currency => {
                const option = document.createElement("option");
                option.text = currency;
                sourceCurrencySelect.add(option);
                const option2 = document.createElement("option");
                option2.text = currency;
                targetCurrencySelect.add(option2);
            });
        })
        .catch(error => console.log("Error fetching exchange rates:", error));
}

function convertCurrency() {
    const amountInput = document.getElementById("amount");
    const sourceCurrencySelect = document.getElementById("source");
    const targetCurrencySelect = document.getElementById("target");
    const resultDiv = document.getElementById("result");
    const amount = amountInput.value;
    const sourceCurrency = sourceCurrencySelect.value;
    const targetCurrency = targetCurrencySelect.value;
    if (amount && sourceCurrency && targetCurrency) {
        const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const rates = data.rates;
                const sourceRate = rates[sourceCurrency];
                const targetRate = rates[targetCurrency];               
                const convertedAmount = (amount / sourceRate) * targetRate;
                resultDiv.textContent = `${amount} ${sourceCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}`;
            })
            .catch(error => console.log("Error fetching exchange rates:", error));
    } else {
        resultDiv.textContent = "Please fill in all fields.";
    }
}
