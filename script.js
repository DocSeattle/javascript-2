//TODO: import an api
//TODO: take HTML fields as input
//TODO: output converted fields

const selectOne = document.getElementsByClassName("currency-one")[0];
const amountOne = document.getElementsByClassName("amount-one")[0];
const selectTwo = document.getElementsByClassName("currency-two")[0];
const amountTwo = document.getElementsByClassName("amount-two")[0];


function currencyExchange(CUR, AMT, CUR2){
    //TODO: CUR2 should retrieve the relative rate from api
    // All else is just a simply multiplication.
    return AMT * CUR2;
}

function retrieveRates(CUR, CUR2)
{
    //TODO: This function should retrieve the relative rates
    // from the API and return them.
   // const reader = new FileReader();
    // const apikey = reader.readAsText('.apikey');

    let json = fetch('https://v6.exchangerate-api.com/v6/e3107dcfaac0004c4ea41e72/latest/USD')
        .then((response) => response.json());
    
    let rates = json.conversion_rates;
    console.log(json.conversion_rates.CUR2);
    return rates;
}