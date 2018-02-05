INSERT INTO users
    (username, auth_id, img, first_name, last_name, email, role)
    VALUES
    ($1, $2, $3, $4, $5, $6, 'user')
    RETURNING *;