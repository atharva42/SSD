update SSDLab.menu set dish_name = replace(replace(dish_name, ' ', ''), '0', '');
select * from SSDLab.menu;
