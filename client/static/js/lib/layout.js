const jwt_decode = require('jwt-decode');
const { getAll } = require('./requests');

// portfolio
function createTable(id, data){

    let table = document.getElementById(id);
    //table.innerHTML = '';
    let row = document.createElement('tr');


    for(invest of data){
        row = document.createElement('tr');
        row.setAttribute('id', invest.id);
        row.className= 'bg-indigo-100';

        //base
        let ticker = document.createElement('td');
        ticker.innerText= invest.ticker;
        
        let num_shared = document.createElement('td');
        num_shared.innerText= Number(invest.num_shared).toFixed(2);


        let buy_level = document.createElement('td');
        buy_level.innerText= Number(invest.buy_level).toFixed(2);
        buy_level.className = 'p-1';

        let fee = document.createElement('td');
        fee.innerText= Number(invest.fee).toFixed(2);
        fee.className = 'p-1';

        //Fetched externally // needs and external function or something
        let name = document.createElement('td');
        name.innerText= invest.ticker;

        let sector = document.createElement('td');
        sector.innerText= invest.ticker;
        sector.className = 'p-3 font-bold';

        let actual_price = document.createElement('td');
        actual_price.innerText= Number(invest.stored_price).toFixed(2);
        actual_price.className = 'p-1';

        //calulated
        let total_cost = document.createElement('td');
        total_cost.innerText= (invest.buy_level*invest.num_shared).toFixed(2);
        total_cost.className = 'p-1';

        let transaction_cost = document.createElement('td');
        transaction_cost.innerText= (invest.buy_level*invest.num_shared).toFixed(2);
        transaction_cost.className = 'p-3';
        
        let retn = document.createElement('td');
        retn.innerText = invest.fee+'%';
        retn.className = 'p-1';

        row.append(ticker);
        row.append(name);
        row.append(sector);
        row.append(fee);
        row.append(transaction_cost);
        row.append(total_cost);
        row.append(buy_level);         
        row.append(num_shared);
        row.append(actual_price);
        row.append(retn);

        if(id=='holdings'){
            let cellButton = document.createElement('td');
            let button = document.createElement('button');
            button.setAttribute('href',"/#sell/"+invest.id);
            button.addEventListener("click", function(){
                changeHolding(invest.id);
            })
            button.className = 'holdingButt';
            
            let img = document.createElement('img');
            img.setAttribute('src','assets/sell.svg');
            button.append(img);
            cellButton.append(button);
            row.append(cellButton);

        }else if(id=='pastHoldings'){
            let cellButton = document.createElement('td');
            let button = document.createElement('button');
            button.addEventListener("click", function(){
                deletePastHolding(invest.id);
            })            
            button.className = 'pastHoldingButt';
            
            let img = document.createElement('img');
            img.setAttribute('src','assets/sell.svg');
            button.append(img);
            cellButton.append(button);
            row.append(cellButton);;
        }
        
        table.append(row);
    }
}

function updateMain(data){    
    createTable('holdings', data.buys);
    createTable('pastHoldings', data.sells);
}

async function showPortfolio(){
    try{
        const data = await getAll();
        console.log(data);
        if (!data) {throw new Error('Problem in the database')}
        updateMain(data);
    }catch(e){
        console.log(e);
    }
}

//login
function login(token){
    const user = jwt_decode(token);
    localStorage.setItem("token", token);
    localStorage.setItem("username", user.username);
    localStorage.setItem("userEmail", user.email);
    window.location.pathname = '/porfolio.html';
}

function logout(){
    localStorage.clear();
    window.location.pathname = '/index.html';
}

//logout

module.exports = {
<<<<<<< HEAD
    showPortfolio,
    login,
    logout
};
=======
    showPortfolio
};

>>>>>>> c381e6e5105522791c29285d736d2c62e263b1aa
