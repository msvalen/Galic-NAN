// const { getAll } = require('./requests');


// function createTable(id, data){

//     let table = document.getElementById(id);
//     let row = document.createElement('tr');

//     table.append(row);

//     for(invest of data){
//         row = document.createElement('tr');
//         row.setAttribute('id', invest.id);

//         let ticker = document.createElement('td');
//         ticker.innerText= invest.ticker;
//         let num_shared = document.createElement('td');
//         num_shared.innerText= invest.num_shared;
//         let total_cost = document.createElement('td');
//         total_cost.innerText= Number(invest.buy_level)*Number(invest.num_shared);
//         let buy_level = document.createElement('td');
//         buy_level.innerText= invest.buy_level;
//         let fee = document.createElement('td');
//         fee.innerText= invest.fee;       
//         let actual_price = document.createElement('td');
//         actual_price.innerText= invest.stored_price;

//         row.append(ticker);
//         row.append(num_shared);
//         row.append(total_cost);
//         row.append(buy_level); 
//         row.append(fee);
//         row.append(actual_price);
//         if(id=='holdings'){
//             let button = document.createElement('button');
//             button.setAttribute('href',"/#sell/"+invest.id);
//             button.addEventListener("click", function(){
//                 changeHolding(invest.id);
//             })
//             button.className = 'holdingButt';
//             row.append(button);
//         }else if(id=='pastHoldings'){
//             let button = document.createElement('button');
//             button.addEventListener("click", function(){
//                 deletePastHolding(invest.id);
//             })
//             button.className = 'pastHoldingButt';
//             row.append(button);
//         }
        
//         table.append(row);
//     }
// }

// function updateMain(data){    
//     createTable('holdings', data.buys);
//     createTable('pastHoldings', data.sells);
// }

// async function showPortfolio(){
//     console.log('inside portfolio layout');
//     try{
//         const data = await getAll();
//         console.log(data);
//         if (!data) {throw new Error('Problem in the database')}
//         updateMain(data);
//     }catch(e){
//         console.log(e);
//     }
// }


// module.exports = {
//     showPortfolio
// };

const navLinks = document.querySelectorAll('a.navlink');
const main = document.querySelector('main');

window.addEventListener('hashchange', updateContent);

function updateNav(hash) {
    const updateLink = link => {
        link.classList = (link.textContent == '+' && hash.includes('new') || hash.includes(link.textContent)) ? ['navlink', 'current'] : ['navlink']
    };
    navLinks.forEach(updateLink)
}

function updateMain(hash) {
    main.innerHTML = '';
    if (hash) {
        let [category, id] = hash.split('/');
        id ? loadModalFor(category, id) : loadIndexFor(category)
    } else {
        const header = document.createElement('h1');
        header.className = 'title';
        header.textContent = "Welcome to the Reading Room";
        main.appendChild(header);
    }
}

async function loadIndexFor(category){
    modal.style.display = 'none';
    const data = await getAll(category);
    data.forEach(a => renderCard(a, category));
}

function renderCard(data, category){
    let link = document.createElement('a');
    let card = document.createElement('div');
    card.className = 'card';
    link.href = `#${category}/${data.id}` 
    card.textContent = data.name || data.title;
    link.appendChild(card);
    main.appendChild(link);
}

function updateContent(){
    let hash = window.location.hash.substring(1);
    updateNav(hash);
    updateMain(hash);
}