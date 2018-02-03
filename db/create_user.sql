INSERT INTO users
    (username, auth_id, img, first_name, email)
    VALUES
    ($1, $2, $3, $4, $5)
    RETURNING *;