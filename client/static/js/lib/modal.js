// Closes modals on opening the site 
all_modals = ['addInvestment-modal'
// , 'sellInvestment-modal'
]

all_modals.forEach((modal)=>{
    const modalSelected = document.querySelector('.'+modal);
    modalSelected.classList.remove('fadeIn');
    modalSelected.classList.add('fadeOut');
    modalSelected.style.display = 'none';
})

<<<<<<< HEAD
//updatebuy
function changeHoldingForm(id){
    //
=======
// Close Modal 
const modalClose = (modal) => {
    const modalToClose = document.querySelector('.'+modal);
    modalToClose.classList.remove('fadeIn');
    modalToClose.classList.add('fadeOut');
    setTimeout(() => {  
        modalToClose.style.display = 'none';
    }, 500);
    let sect = document.getElementById('moreOptions');
    sect.classList.add('hidden');
}
>>>>>>> c381e6e5105522791c29285d736d2c62e263b1aa

//Open Modal 
const openModal = (modal) => {
    const modalToOpen = document.querySelector('.'+modal);
    modalToOpen.classList.remove('fadeOut');
    modalToOpen.classList.add('fadeIn');
    modalToOpen.style.display = 'flex';
}

function showmoreoptions() {
    let sect = document.getElementById('moreOptions');
    sect.classList.remove('hidden');
}



// const { deleteSell, deleteBuy, updateBuy, createSell} = require('./requests');

<<<<<<< HEAD
}
// onclick(deleteSellEvent(invest.id))
function deleteSellEvent(data){
    const p = document.getElementById('deleteMessage')
    try{
        deleteSell(data);
        p.innerText = 'This past holding has been deleted';
    }
    catch(error){}
=======
// //updatebuy
// function changeHoldingForm(id){
// asd
//     //create the modal form
// }

// //deletesell
// function deletePastHoldingModal(id){
//     //create the modal With a button of are you sure?


// }

// function updateBuyEvent(e){
//     e.preventDefault();
//     const data = JSON.stringify(Object.fromEntries(new FormData(e.target)));

// }
// // onclick(deleteSellEvent(invest.id))
// function deleteSellEvent(data){
//     const p = document.getElementById('deleteMessage')
//     try{
//         deleteSell(data);
//         p.innerText = 'This past holding has been deleted';
//     }
//     catch(error)}
>>>>>>> c381e6e5105522791c29285d736d2c62e263b1aa
    

<<<<<<< HEAD
module.exports = {
    changeHoldingForm,
   // deletePastHoldingForm
}
=======




// module.exports={
//     changeHoldingForm,
//     deletePastHoldingForm,
// }
>>>>>>> c381e6e5105522791c29285d736d2c62e263b1aa
