const db = require("../dbConfig/init");

const User = require("./User");

class Stocks {
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
}
