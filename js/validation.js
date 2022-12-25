function validation (){
const createdAccount = document.getElementById('createdAccount');
const foreignexchange = document.getElementById('foreignexchange');
const commodity = document.getElementById('commodity');
const bondmarket = document.getElementById('bondmarket');
const cryptocurrencymarket = document.getElementById('cryptocurrencymarket');


const failedButton = document.querySelector('.button1');

if((cryptocurrencymarket.checked === true ||
    foreignexchange.checked === true ||
    commodity.checked === true ||
    bondmarket.checked === true) &&
    createdAccount.value !== "" 
    
    ){
        failedButton.classList = "button";
}
else if((cryptocurrencymarket.checked === false ||
    foreignexchange.checked === false ||
    commodity.checked === false ||
    bondmarket.checked === false)  && 
    createdAccount.value === ""
    ){
        failedButton.classList = "button1";
}
}