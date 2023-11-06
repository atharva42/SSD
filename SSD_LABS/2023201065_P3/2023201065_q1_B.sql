alter table SSDLab.menu add food_type varchar(12);
update SSDLab.menu 
set food_type = case dish_name
    when "ChickenCurry" then 'non-veg'
    when "ChickenTikka" then 'non-veg'
    when "TandooriChicken" then 'non-veg'
    when "ChickenKorma" then 'non-veg'
    when "ChickenBiryani" then 'non-veg'
    when "ButterChicken" then 'non-veg'
    when "PaneerTikka" then 'veg'
    when "PaneerButterMasala" then 'veg'
    when "PaneerMakhani" then 'veg'
    when "PaneerTikkaMasala" then 'veg'
    end;
   select * from SSDLab.menu; 
   
