INSERT INTO products
    (name, variant_id,img,size,price,color,type, file_id)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;