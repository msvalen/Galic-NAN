const { getAll } = require('./requests');

function updateNav(){
    const newNav = [
        {
            p: "Portfolio",
            href: '#'
        },
        {
            p: "Invest",
            href: '#invest'
        },
        {
            p: "Sell",
            href: '#sell'
        },
        {
            p: "Logout",
            href: '#logout'
        }    
    ]
    let nav=document.querySelector("#linkset");
    nav.innerHTML="";
    for(link of newNav){
        let a = document.createElement('a');
        a.setAttribute('href',link.href);
        a.innerText= link.p;
        nav.append(a);
    }
}

function createTable(header, data){

    let table = document.createElement('table');
    let row = document.createElement('tr');
    const size = header.length;
    for(th of header){
        let cell = document.createElement('th');
        cell.innerText = th;
        row.append(cell);
    }

    table.append(row);

    for(invest of data){
        row = document.createElement('tr');
        row.setAttribute('id', invest.id);

        let ticker = document.createElement('td');
        ticker.innerText= invest.ticker;
        let num_shared = document.createElement('td');
        num_shared.innerText= invest.num_shared;
        let total_cost = document.createElement('td');
        total_cost.innerText= Number(invest.buy_level)*Number(invest.num_shared);
        let buy_level = document.createElement('td');
        buy_level.innerText= invest.buy_level;
        let fee = document.createElement('td');
        fee.innerText= invest.fee;       
        let actual_price = document.createElement('td');
        actual_price.innerText= invest.stored_price;

        row.append(ticker);
        row.append(num_shared);
        row.append(total_cost);
        row.append(buy_level); 
        row.append(fee);
        row.append(actual_price);
        if(size==7){
            let button = document.createElement('a');
            button.setAttribute('href',"/#sell/#"+invest.id);
            button.innerText= 'Sell'; 
            row.append(button);
        }
        
        table.append(row);
    }

    return table;
}

function updateMain(data){
    console.log('installing main');
    let main=document.querySelector("#main");
    main.innerHTML="";

    const thList = [
        "Ticker", "Number of Shares", "Total cost", "Buy level", "Fees", "Actual Price", "Update"
    ]
    const thListSells = [
        "Ticker", "Number of Shares", "Total cost", "Buy level", "Fees", "Actual Price"
    ]
    const buyTable = createTable(thList, data.buys);
    const sellsTable = createTable(thListSells, data.sells);
    main.append(buyTable);
    main.append(sellsTable);
}

async function showPortfolio(){
    console.log('inside portfolio layout');
    try{
        const data = await getAll();
        console.log(data);
        if (!data) {throw new Error('Problem in the database')}
        updateNav();
        console.log('nav installed');
        updateMain(data);
    }catch(e){
        console.log(e);
    }
}
module.exports = {
    showPortfolio
};