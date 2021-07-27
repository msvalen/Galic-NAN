const { showLogin, doLogout, showError } = require('./lib/layout');
const { showPortfolio }  = require('./lib/portfolio.layout');//I want this to go into layout but it doesn't work otherwise

const { showAddInvest, showAddSell } = require('./lib/modal');

window.addEventListener('hashchange', updateContent);
document.addEventListener('DOMContentLoaded', updateContent);

function updateContent(){
    const hash = window.location.hash;
    const token = localStorage.getItem('token')
    console.log(hash);
    try{
        if(!token){
            showLogin();
        }
        else{
            if(hash == '#' ||hash == '' || hash == "#home" || hash == "#portfolio"){
                showPortfolio();
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
    } catch(e) {
        console.log(e);
        //showError();
    }/* 
    if(hash == '/#error'){
        //showError();
    } */
}
