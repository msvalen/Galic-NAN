const db = require("../dbConfig/init");
const Stocks = require("./StocksBought");

module.exports = class Users {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }

  // returns all user stocks

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        // console.log(db);
        const result = await db.query("SELECT * FROM users;");
        const users = result.rows.map((u) => ({ id: u.id, name: u.name }));
        resolve(users);
      } catch (err) {
        reject("Error retrieving users");
      }
    });
  }

  static get usersStocks() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await db.query(
          "SELECT buy_id, ticker, fee, buy_level, num_shared, stored_price, date_of_purchase, FROM buys WHERE user_id = $1",
          [this.id]
        );
        const stocks = result.rows.map((s) => ({
          ticker: s.ticker,
          path: `/stocks/${s.buy_id}`,
        }));
        resolve(stocks);
      } catch (err) {
        reject("Users stocks could not be found");
      }
    });
  }

  // create a user

  static create(name) {
    return new Promise(async (resolve, reject) => {
      try {
        let userData = await db.query(
          "INSERT INTO users (name) VALUES ($1) RETURNING *;",
          [name]
        );
        let user = new Users(userData.rows[0]);
        resolve(user);
      } catch (err) {
        reject("User could not be created");
      }
    });
  }

  // delete user

  destroy() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await db.query(
          "DELETE FROM users WHERE id = $1 RETURNING id",
          [this.id]
        );
        resolve(`User ${result.id} was deleted`);
      } catch (err) {
        reject("User could not be deleted");
      }
    });
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let userData = await db.query("SELECT * FROM users WHERE id = $1;", [
          id,
        ]);
        let user = new User(userData.rows[0]);
        resolve(user);
      } catch (err) {
        reject("User not found");
      }
    });
  }
};
