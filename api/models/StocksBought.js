const db = require("../dbConfig/init");

const User = require("./Users");

class StocksBought {
  constructor(data, user) {
    this.buy_id = data.buy_id;
    this.ticker = data.ticker;
    this.fee = data.fee;
    this.buy_level = data.buy_level;
    this.num_shared = data.num_shared;
    this.stored_price = data.stored_price;
    this.user = {
      name: data.name,
      path: `/users/${data.user_id}`,
    };
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        let buyData = await db.query("SELECT * FROM buys");
        let buys = buyData.rows.map((b) => new StocksBought(b));
        resolve(buys);
      } catch (err) {
        reject("Your stocks cannot be found");
      }
    });
  }

  static async create(buyData) {
    return new Promise(async (resolve, reject) => {
      try {
        const {
          buy_id,
          ticker,
          fee,
          buy_level,
          num_shared,
          stored_price,
          date,
          been_sold,
        } = buyData;
        let result = await db.query(
          `INSERT INTO buys (buy_id, ticker, fee, buy_level, num_shared, stored_price, date, been_sold) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id`,
          [
            buy_id,
            ticker,
            fee,
            buy_level,
            num_shared,
            stored_price,
            date,
            been_sold,
          ]
        );
        resolve(result.rows[0]);
      } catch (err) {
        reject("Stock could not be bought");
      }
    });
  }
  destroy() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await db.query(
          "DELETE FROM buys WHERE id = $1 RETURNING buy_id",
          [this.buy_id]
        );
        const user = await User.findById(result.rows[0].user_id);
        const stocksBought = await user.stocksBought;
        if (!stocksBought.length) {
          await user.destroy();
        }
        resolve("Stock bought was deleted");
      } catch (err) {
        reject("Stock bought could not be deleted");
      }
    });
  }
}
module.exports = StocksBought;
