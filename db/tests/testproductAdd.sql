INSERT INTO products
    (name, variant_id,img,size,price,color,type, file_id)
    VALUES
    ('a shirt', 8243, 'an img', 'sm', 25.00, 'white', 'shirt', 425121)
    RETURNING *;
    
    INSERT INTO products
    (name, variant_id,img,size,price,color,type, file_id)
    VALUES
    ('Be The Best You - 3/4 Sleeve', 8248, 'img', '2xl', 25.00, 'black', '3/4 sleeve shirt', 43974676)
    RETURNING *;