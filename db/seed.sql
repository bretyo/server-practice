CREATE TABLE cakes(
    cake_id SERIAL PRIMARY KEY,
    type VARCHAR(30),
    flavor VARCHAR(50),
    frosting VARCHAR(50),
    description VARCHAR(500),
    price SMALLINT
);