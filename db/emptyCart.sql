UPDATE users
SET cart = ''
WHERE
    username = $1