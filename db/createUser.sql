INSERT INTO users
    (username, password, first_name, last_name, email, street_address, user_state, user_country, zip)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *;