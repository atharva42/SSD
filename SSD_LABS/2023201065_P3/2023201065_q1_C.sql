update SSDLab.menu 
set price = case food_type 
when "non-veg" then price-5
when "veg" then price-1
end;
select * from SSDLab.menu;
