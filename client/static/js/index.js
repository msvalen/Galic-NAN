const { showLogin, doLogout, showError,showPortfolio } = require('./lib/layout');

const { showAddInvest, showAddSell } = require('./lib/modal');

//window.addEventListener('hashchange', updateContent);
if(window.location.pathname == '/login' || window.location.pathname == '/index.html' || window.location.pathname == '/#'){
    document.addEventListener('DOMContentLoaded', redirectWhenLogedIn);
    window.addEventListener('hashchange', redirectWhenLogedIn);
}
//if(window.location=)
//document.addEventListener('DOMContentLoaded', updateContent);

function redirectWhenLogedIn(){
    const token = localStorage.getItem('token')
    if(token){
        window.location.pathname='/portfolio.html';
    }
}

if(window.location.pathname.startsWith('/portfolio.html')){
    window.addEventListener('hashchange', updateContent);
}

function updateContent(){
    if(window.location.pathname){

    }
}


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