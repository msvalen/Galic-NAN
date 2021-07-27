DROP TABLE IF EXISTS buys;

CREATE TABLE buys (
    buy_id serial PRIMARY KEY,
    ticker VARCHAR(100) NOT NULL,
    fee INT,
    buy_level INT NOT NULL,
    num_shares INT NOT NULL,
    stored_price INT NOT NULL,
    date_of_purchase TIMESTAMP NOT NULL,
    been_sold BOOLEAN DEFAULT 'false'
);
