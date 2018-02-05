INSERT INTO orders
    (user_id, first_name, last_name,street_address, user_state, user_country, zip, shipping, tax, total, product_id)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *;