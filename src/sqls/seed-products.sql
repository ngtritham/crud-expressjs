ALTER TABLE products SET UNLOGGED;

WITH temp_data AS (
    SELECT 
        gen_random_uuid() AS id,
        (ARRAY['Lexus', 'Audi', 'BMW', 'Benz', 'Skoda', 'Hyundai', 'Ford', 'Toyota', 'Infiniti', 'Nissan', 'Century'])[floor(random() * 11 + 1)::int] AS brand,
        generate_series AS row_num
    FROM generate_series(1, 1000000)
)
INSERT INTO "public"."products" (id, name, price, created_at, created_by, updated_at, updated_by)
SELECT 
    id,
    brand || ' - ' || md5(id::text) AS name,
    (random() * 90000 + 10000)::numeric(10,2)::text AS price,
    CURRENT_TIMESTAMP - (random() * interval '365 days') AS created_at,
    'system' AS created_by,
    CURRENT_TIMESTAMP - (random() * interval '30 days') AS updated_at,
    'system' AS updated_by
FROM temp_data;

ALTER TABLE products SET LOGGED;