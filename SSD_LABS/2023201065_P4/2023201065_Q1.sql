use LAB3; -- I have defined a schema by the name of LAB3

DELIMITER //
CREATE PROCEDURE divide_no(IN num1 int, IN num2 int, OUT result DEC(10,3))
BEGIN
SET result=(num1/num2);
END//
DELIMITER ;

call divide_no('300', '7', @result);
SELECT @result;
