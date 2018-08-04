DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
item_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR (100) NOT NULL,
-- the department should be enumerated, but I don't know what I want that to be yet.
department_name VARCHAR (100),
price DECIMAL(10, 2) NOT NULL,
stock_quantity INT UNSIGNED NOT NULL
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("17.3-Inch Laptop Sleeve","Electronics", 11.99, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Set of 7 Metal Dice Gold Finish with Royal Blue Enamel Paint","Toys and Games", 25.55, 40);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Silicon 3D Skull Ice Cube Mold","Home and Kitchen", 11.78, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Double Nylon Hammock", "Sports and Outdoors", 22.94, 400);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("The-Absorber minis, 3 pack","Automotive", 26.61, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Flexible LED tape RGB Pack of 16.4ft/5m","Home and Kitchen", 16.99, 400);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Stanley FATMAX Rechargeable 2200 Lumen LED Lithium Ion Spotlight","Tools and Home Improvement", 47.45, 40);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Flexible Flyer Aurora","Sports and Outdoors", 24.99, 1500);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("String Swing Guitar Hanger","Musical Instruments", 22.98, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Airwalk Men's Suede Skate Shoes-Blue","Clothing", 129.95, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("KitchenAid Siphon Coffee Brewer","Home & Kitchen", 170.95, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Huffy 26 Inch Cruiser Bike-Black","Sports and Outdoors", 129.00, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("AKG K 240 MK Stereo Studio Headphones","Electronics", 120.00, 240);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Melinda's Garlic Habanero Hot Sauce, 5oz.","Grocery & Gourmet Food", 11.42, 200);

SELECT * FROM bamazon.products;