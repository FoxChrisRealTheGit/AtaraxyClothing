UPDATE users
SET street_address = $2, 
user_city = $3, 
user_state=$4, 
user_country='US', 
zip= $5
WHERE
    username = $1