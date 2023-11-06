select food_type, avg(price) as avg_food_type from SSDLab.menu where price>400 group by food_type;

