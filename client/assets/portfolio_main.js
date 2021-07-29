// const form = document.querySelector('#new-fact-form');
// const main = document.querySelector("main");

// // Bind Event Listeners
// form.addEventListener('submit', submitForm);

// // Setup 
// const form1 = document.querySelector('#addInvestmentform');

// // Bind Event Listeners
// form1.addEventListener('submit', searchgiphy);


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

