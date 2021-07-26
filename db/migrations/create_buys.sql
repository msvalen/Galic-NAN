DROP TABLE IF EXISTS buys;

CREATE TABLE buys (
    buy_id serial PRIMARY KEY,
    ticker VARCHAR(100) NOT NULL,
    fee int,
    buy_level int NOT NULL,
    num_shared int NOT NULL,
    stored_price int NOT NULL,
    date_of_purchase TIMESTAMP NOT NULL,
    user_id int
);
