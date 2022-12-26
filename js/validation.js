function validation (){
const createdAccount = document.getElementById('createdAccount');
const foreignexchange = document.getElementById('foreignexchange');
const commodity = document.getElementById('commodity');
const bondmarket = document.getElementById('bondmarket');
const cryptocurrencymarket = document.getElementById('cryptocurrencymarket');

/*pagina 3 checkbox validation */
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
/*final da pagina 2 */

/* pagina 3 checkbox validation */
function validationBox(){
const books = document.getElementById('books');
const youtube = document.getElementById('youtube');
const courses = document.getElementById('courses');
const experience = document.getElementById('experience');

const failedButton = document.querySelector('.button1');

if((books.checked === true ||
    youtube.checked === true ||
    courses.checked === true ||
    experience.checked === true) &&
    createdAccount.value !== "" 
    
    ){
        failedButton.classList = "button";
}
else if((books.checked === false ||
    youtube.checked === false ||
    courses.checked === false ||
    experience.checked === false) &&
    createdAccount.value === "" 
    
    ){
        failedButton.classList = "button1";
}
}
/*final da pagina 3 */

/* pagina 5 form validation */
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const age = document.getElementById('age');


/*final da pagina 5 */



