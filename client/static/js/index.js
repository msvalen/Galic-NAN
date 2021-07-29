const { login, showError,showPortfolio } = require('./lib/layout');

const { showAddInvest, showAddSell } = require('./lib/modal');
const { requestLogin, requestRegistration } = require('./lib/requests.js');


//window.addEventListener('hashchange', updateContent);
if(window.location.pathname == '/index.html' || window.location.pathname == '/'){

    
    document.addEventListener('DOMContentLoaded', redirectWhenLogedIn);
    window.addEventListener('hashchange', redirectWhenLogedIn);
}
//document.getElementById('login')
    
    //if().addEventListener('submit', requestLogin);
else if(window.location.pathname == '/register.html'){
    document.getElementById('register').addEventListener('submit', requestRegistration);
    document.addEventListener('DOMContentLoaded', redirectWhenLogedIn);
    window.addEventListener('hashchange', redirectWhenLogedIn);
}
//if(window.location=)
//document.addEventListener('DOMContentLoaded', updateContent);

function redirectWhenLogedIn(){
    const token = localStorage.getItem('token')
    console.log(token);
    if(token){
        //login(token);
        window.location.pathname = '/portfolio.html';
        showPortfolio();
    }
}

if(window.location.pathname.startsWith('/portfolio.html')){
    window.addEventListener('hashchange', showPortfolio());
}




/*
function updateContent(){
    if(window.location.pathname==){

    }
}

*/
/*

showPortfolio();
if(hash == '#' || hash == '' || hash == "#home" || hash == "#portfolio"){
   
} else if (hash == '#logout'){
    doLogout();
    hash = '#'
}    
else if (hash == "#invest"){
    showPortfolio();
    showAddInvest();
} else if (hash.startsWith("#sell/#")){
    let sellId = hash.slice(7);
    showPortfolio();
    showAddSell(sellId);
}
}
*/