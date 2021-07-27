const db = require('../dbConfig/init');
const Stocks = require('./Stocks');


module.exports = class Users {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
}

    // return all user stocks 

    static usersStocks(){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT buy_id, ticker, fee, buy_level, num_shared, stored_price, date_of_purchase, FROM buys WHERE user_id = $1', [ this.id ]);
                const stocks = result.rows.map(s => ({ticker: s.ticker, path: `/stocks/${s.buy_id}`}));
                resolve(stocks);
            } catch (err) {
                reject("Users stocks could not be found");
            };
        });
    };



    // create a user

    static create(name){
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.query('INSERT INTO users (name) VALUES ($1) RETURNING *;', [ name ]);
                let user = new Users(userData.rows[0]);
                resolve (user);
            } catch (err) {
                reject('User could not be created');
            };
        });
    };
    


    // delete user

    destroy(){
        return new Promise(async(resolve, reject) => {
            try {
                const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING id', [ this.id ]);
                resolve(`User ${result.id} was deleted`)
            } catch (err) {
                reject('User could not be deleted')
            }
        })   
    };


}