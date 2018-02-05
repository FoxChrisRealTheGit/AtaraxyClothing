CREATE TABLE IF NOT EXISTS products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    variant_id int,
    img TEXT,
    size VARCHAR(5),
    price DECIMAL,
    color VARCHAR(20),
    type VARCHAR(50),
    file_id VARCHAR(100)
)