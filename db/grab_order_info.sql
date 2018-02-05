SELECT first_name, last_name, street_address, user_city, user_state, user_country, zip FROM users
JOIN products
ON 1 = products.id