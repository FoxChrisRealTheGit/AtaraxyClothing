SELECT first_name, last_name, street_address, user_city, user_state, user_country, zip, products.name, products.variant_id, products.size, products.price, products.file_id FROM users
JOIN products
ON $1=products.id