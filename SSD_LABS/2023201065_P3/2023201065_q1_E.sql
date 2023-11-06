select dish_name, price from SSDLab.menu where price>(select max(price) from SSDLab.menu where food_type='veg') and food_type='non-veg';

