
const { deleteSell, deleteBuy, updateBuy, createSell} = require('./requests');

//updatebuy
function changeHoldingForm(id){

    //create the modal form
}

//deletesell
function deletePastHoldingModal(id){
    //create the modal With a button of are you sure?


}

function updateBuyEvent(e){
    e.preventDefault();
    const data = JSON.stringify(Object.fromEntries(new FormData(e.target)));

}
// onclick(deleteSellEvent(invest.id))
function deleteSellEvent(data){
    const p = document.getElementById('deleteMessage')
    try{
        deleteSell(data);
        p.innerText = 'This past holding has been deleted';
    }
    catch(error)
    
}

module.exports={
    changeHoldingForm,
    deletePastHoldingForm,
}