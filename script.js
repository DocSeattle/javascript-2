//TODO: import an api
//TODO: take HTML fields as input
//TODO: output converted fields

async function currencyExchange(){
    let AMT = document.getElementById('amount-one').value;
    let CUR = document.getElementById('currency-one').value;
    let CUR2 = document.getElementById('currency-two').value; //TODO: CUR2 should retrieve the relative rate from api
    
    
    // All else is just a simply multiplication.
    
    
    let calc = AMT * await retrieveRates(CUR, CUR2);
    document.getElementById('amount-two').value = calc;
    return;
}

async function retrieveRates(CUR, CUR2)
{
    //TODO: This function should retrieve the relative rates
    // from the API and return them.
    let apikey = '' // await fetch('.apikey')
         // .then((response) => response.text()); // fetch api key
    let json = await fetch('https://v6.exchangerate-api.com/v6/'+apikey+'/latest/'+CUR
    )
        .then((response) => response.json());
    
    let rates = await json.conversion_rates;
    let rate = await rates[CUR2];
    console.log(rate);
    
    return rate;
}