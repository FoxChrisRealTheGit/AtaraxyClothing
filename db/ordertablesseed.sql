CREATE TABLE IF NOT EXISTS orders(
    id SERIAL PRIMARY KEY,
    date VARCHAR(50),
    user_id int,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    street_address VARCHAR(100),
    user_state VARCHAR(4),
    user_country VARCHAR(50),
    zip int,
    shipping DECIMAL,
    tax DECIMAL,
    total DECIMAL,
    product_id VARCHAR(50)
)