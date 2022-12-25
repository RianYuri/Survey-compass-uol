function home(){
    window.location.assign('../home.html')
}
function page1(){
    window.location.assign('./page01/page01.html')
}
function page01() {
    window.location.assign('../page01/page01.html');
}

function page02() {
    window.location.assign('../page02/page02.html');
}

function page03() {

    if((cryptocurrencymarket.checked === true ||
        foreignexchange.checked === true ||
        commodity.checked === true ||
        bondmarket.checked === true) &&
        createdAccount.value !== "" 
    ){    window.location.assign('../page03/page03.html');
}
}
        


function page04() {
    window.location.assign('../page04/page04.html');
}

function page05() {
    window.location.assign('../page05/page05.html');
}


/* form incio */
var my_func = function (event) {

    event.preventDefault();
};
var form = document.getElementById("form");
form.addEventListener("submit", my_func, true);

/*form fim*/