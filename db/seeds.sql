INSERT INTO burgers (burger_name, devoured) VALUES ('Single and Ready to Mingle Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Double-Trouble Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Triple-Crown of Cows Burger', false);

SELECT * FROM burger;
UPDATE burger SET devoured = 1 WHERE id = 1;