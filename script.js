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
    const reader = new FileReader();
    const apikey = reader.readAsText('./.apikey');

    let json = fetch('https://v6.exchangerate-api.com/v6/'+apikey+'/latest/'+CUR)
        .then((response) => response.json()) // unclear as to what this is actually doing.
        .then((json) => console.log(json)) // Print JSON to console
        .then((json) => JSON.parse(json))
        
        // filter out all but the CUR2 keys/values and then use that to 
        // perform the rate calculation
        ;
    let rates;
    return rates;
}