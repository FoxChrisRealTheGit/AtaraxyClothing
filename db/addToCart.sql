UPDATE users
SET cart = $1
WHERE
    username = $2