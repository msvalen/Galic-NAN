// const form = document.querySelector('#new-fact-form');
// const main = document.querySelector("main");

// // Bind Event Listeners
// form.addEventListener('submit', submitForm);

// // Setup 
// const form1 = document.querySelector('#addInvestmentform');

// // Bind Event Listeners
// form1.addEventListener('submit', searchgiphy);

const formyahoo = document.querySelector('#yahoo-form');

// Bind Event Listeners
formyahoo.addEventListener('submit', searchstock);



function searchstock(e) {
    e.preventDefault(); //Stops page reloading
    let ticker = e.target.StockTickersearch.value
    let url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=${ticker}&region=US`
    console.log(url)
    fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "d5f69dd810msh69699f52c9e3a85p16f184jsn9ac2dae6c00f",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
        .then(response => response.json())
        .then(content => {
            document.querySelector("#Stock-Ticker").value = content.symbol
            document.querySelector("#Name").value = content.quoteType.longName
            document.querySelector("#Sector").value = content.summaryProfile.sector
            document.querySelector("#sharePrice").value = content.financialData.currentPrice.raw
            // document.querySelector("#Stock-Ticker").value = content.symbol
            document.querySelector("#StockTickersearch").value = ""

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

        
            today = yyyy + '-' + mm + '-' + dd;
            
            document.querySelector("#Dateform").value = today



        })
        .catch(err => { console.error(err) })

}




function searchyahoo(e) {
    e.preventDefault(); //Stops page reloading
    const APIkey = "HpcUur5hV9cdZ2qYv8leJeyCMimbVkPX"
    let query = e.target.inputGIF.value
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIkey}&q=${query}&limit=1&rating=g&lang=en`
    console.log(url)
    fetch(url)
        .then(response => response.json()) // get responses
        .then(content => {
            // console.log(content.data)
            let outputGifs = document.querySelector("#image_post")
            outputGifs.src = content.data[0].images.fixed_width.url;
            outputGifs.alt = content.data[0].title;
            document.querySelector("#inputGIF").value = ""
        })
        .catch(err => { console.error(err) })
}

function submitForm(event) {
    event.preventDefault();
    let fact = event.target.fact.value;
    let factheader = event.target.factheader.value;
    let outputGifs = document.querySelector("#image_post");
    postData(fact, factheader, outputGifs.src);
    // let forms = document.getElementById("new-fact-form")
    form.reset()
}   


async function postData(fact, factheader, src){
    let options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({fact, factheader, src})
    }
    let response = await fetch('https://fact-ory.herokuapp.com/journalentries', options);
    // console.log(response)
    let responseJSON = await response.json();
    // console.log(responseJSON)
    getItems(fact, factheader, src);
}

