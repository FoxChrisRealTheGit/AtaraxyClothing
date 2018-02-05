CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    auth_id TEXT,
    img TEXT,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email VARCHAR(50),
    role varCHAR(4),
    password VARCHAR(50),
    street_address VARCHAR(100),
    user_city VARCHAR(50),
    user_state VARCHAR(4),
    user_country VARCHAR(50),
    zip int,
    cart VARCHAR(50),
    favorite VARCHAR(50),
    orders VARCHAR(100)
)