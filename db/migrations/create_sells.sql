DROP TABLE IF EXISTS sells;

CREATE TABLE sells (
    buy_id serial PRIMARY KEY,
    ticker VARCHAR(100) NOT NULL,
    fee int,
    buy_level int NOT NULL,
    num_shared int NOT NULL,
    stored_price int NOT NULL,
    date_of_purchase TIMESTAMP NOT NULL,
    user_id int
);
