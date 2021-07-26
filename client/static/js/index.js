const { showLogin, showPortfolio, doLogout} = require('./layout');

const { showAddInvest, showAddSell } = require('./modal')

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
            if(hash == '#' || hash == "#home" || hash == "#portfolio"){
                showPortfolio();
            } else if (hash == '#logout'){
                doLogout();
                hash = '#'
            }    
            else if (hash == "#invest"){
                showPortfolio();
                showAddInvest();
            } else if (hash == "#sell"){
                showPortfolio();
                showAddSell();
            }
        }   
    } catch(e) {
        console.error(e);
        showError();
    }
}
