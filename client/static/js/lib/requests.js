const { doLogout } = require('./layout');

const portfolioData = require('../_data.example/portfolio.json');

const url = process.env.SERVER_URL || 'http://localhost:5000/';

async function getAll(){
    try {
        const options = { headers: new Headers({'Authorization': localStorage.getItem('token')}) }
        const response = await fetch(`${url}users`, options);
        const data = await response.json();
        if(data.err){
            //console.warn(data.err);
            data = portfolioData;
            //doLogout(); //activate when not testing
            console.log(data)
        }
        return data;
    } catch (err) {
        console.warn(err);
        return portfolioData;
    }
}

module.exports = {
    getAll
};