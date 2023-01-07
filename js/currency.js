{
    const calculateResult = (amount, currency) => {
        const rateUSD = 4.4001;
        const rateAUD = 2.9437;
        const rateCAD = 3.2319;
        const rateEUR = 4.6804;
        const rateCHF = 4.7524;
        const rateGBP = 5.3463;
        const rateILS = 1.2733;

        switch (currency) {
            case "USD":
                return amount / rateUSD;

            case "AUD":
                return amount / rateAUD;

            case "CAD":
                return amount / rateCAD;

            case "EUR":
                return amount / rateEUR;

            case "CHF":
                return amount / rateCHF;

            case "GBP":
                return amount / rateGBP;

            case "ILS":
                return amount / rateILS;
        };
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
       
        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}