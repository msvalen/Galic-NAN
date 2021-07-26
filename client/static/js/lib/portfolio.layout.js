

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
        a.innerText(link.p);
        nav.append(a);
    }
}
function updateMain(data){
    let main=document.querySelector("#main");
    main.innerHTML="";

    let buyTable = document.createElement('table');
    let row = document.createElement('tr');

    thList = [
        "Ticker", "Number of Shares", "Total cost", "Buy level", "Fees", "Actual Price"
    ]
    for(th of thList){
        let cell = document.createElement('th');
        cell.innerText(th);
        row.append(cell);
    }
    buyTable.append(row);

    for(buy of data.buys){
        row = document.createElement('tr');
        
    }
}

module.export = async function showPorfolio(){
    try{
        const data = await getAll();
        if (!data) {throw new Error('Problem in the database')}
        updateNav();
        updateMain(data);
    }catch(e){
        console.error(e);
    }
}