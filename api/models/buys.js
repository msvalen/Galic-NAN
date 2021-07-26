const db = require("../dbConfig/init");


class Buys {
  constructor(data, user) {
    this.buy_id = data.buy_id;
    this.ticker = data.ticker;
    this.fee = data.fee;
    this.buy_level = data.buy_level;
    this.num_shares = data.num_shares;
    this.stored_price = data.stored_price;
    this.date_of_purchase = data.date_of_purchase;
    this.user = data.user
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        let buyData = await db.query("SELECT * FROM buys");
        let buys = buyData.rows.map(b => new Buys(b));
        resolve(buys);
      } catch (err) {
        reject("Your stocks cannot be found");
      }
    });
  }


}
module.exports = Buys;
