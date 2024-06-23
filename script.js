// Fetch exchange rates from an API
Function fetchExchangeRates() {
 // Replace YOUR_API_KEY with your actual API key
 Const apiKey = “YOUR_API_KEY”;
 Const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD`;
 Fetch(apiUrl)
 .then(response => response.json())
 .then(data => {
 Const rates = data.rates;
 Const currencies = Object.keys(rates);
 // Add currency options to source and target dropdown menus
 Const sourceCurrencySelect = document.getElementById(“source”);
 Const targetCurrencySelect = document.getElementById(“target”);
 Currencies.forEach(currency => {
 Const option = document.createElement(“option”);
 Option.text = currency;
 sourceCurrencySelect.add(option);
 const option2 = document.createElement(“option”);
 option2.text = currency;
 targetCurrencySelect.add(option2);
 });
 })
 .catch(error => console.log(“Error fetching exchange rates:”, error));
}
// Perform currency conversion
Function convertCurrency() {
 Const amountInput = document.getElementById(“amount”);
 Const sourceCurrencySelect = document.getElementById(“source”);
 Const targetCurrencySelect = document.getElementById(“target”);
 Const resultDiv = document.getElementById(“result”);
 Const amount = amountInput.value;
 Const sourceCurrency = sourceCurrencySelect.value;
 Const targetCurrency = targetCurrencySelect.value;
 // Make sure all fields are filled
 If (amount && sourceCurrency && targetCurrency) {
 // Fetch the conversion rate from an API
 Const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD`;
 Fetch(apiUrl)
 .then(response => response.json())
 .then(data => {
 Const rates = data.rates;
 Const sourceRate = rates[sourceCurrency];
 Const targetRate = rates[targetCurrency];
 // Perform the conversion
 Const convertedAmount = (amount / sourceRate) * targetRate;
 resultDiv.textContent = `${amount} ${sourceCurrency} = ${convertedAmount.toFixed(2)} 
${targetCurrency}`;
 })
 .catch(error => console.log(“Error fetching exchange rates:”, error));
 } else {
 resultDiv.textContent = “Please fill in all fields.”;
 }
}
// Fetch exchange rates on page load
fetchExchangeRates();