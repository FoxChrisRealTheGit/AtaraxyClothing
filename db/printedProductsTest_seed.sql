CREATE TABLE IF NOT EXISTS printedProducts(
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(100),
    variant_id int,
    size VARCHAR(6),
    color VARCHAR(30),
    product_type VARCHAR(50),
    file_id int
)