let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateUSD = 4.4001;
let rateAUD = 2.9437;
let rateCAD = 3.2319;
let rateEUR = 4.6804;
let rateCHF = 4.7524;
let rateGBP = 5.3463;
let rateILS = 1.2733;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "USD":
            result = amount / rateUSD;
            break;

        case "AUD":
            result = amount / rateAUD;
            break;

        case "CAD":
            result = amount / rateCAD;
            break;

        case "EUR":
            result = amount / rateEUR;
            break;

        case "CHF":
            result = amount / rateCHF;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;

        case "ILS":
            result = amount / rateILS;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;

});