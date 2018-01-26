INSERT INTO users
    (username, password, first_name, last_name, email, street_address, user_state, user_country, zip)
    VALUES
    ('User1', 'pass1', 'john', 'doe', 'this@email.com', '1645 this street', 'st', 'US', 999999)
    RETURNING *;