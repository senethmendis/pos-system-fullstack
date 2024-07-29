
-- Create the customers table
CREATE TABLE `customers` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` text,
  `registration_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`customer_id`)
);

-- Create the products table
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `category` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `unit` varchar(20) NOT NULL,
  `stock_quantity` int NOT NULL,
  `image_url` varchar(500) NOT NULL,
  PRIMARY KEY (`product_id`)
);

-- Insert sample data into the products table
INSERT INTO `products` (`product_id`, `product_name`, `category`, `price`, `unit`, `stock_quantity`, `image_url`) VALUES
(1, 'Apple', 'Fruits', '0.50', 'each', 150, 'http://example.com/images/apple.jpg'),
(2, 'Banana', 'Fruits', '0.30', 'each', 200, 'http://example.com/images/banana.jpg'),
(3, 'Carrot', 'Vegetables', '0.70', 'kg', 100, 'http://example.com/images/carrot.jpg'),
(4, 'Broccoli', 'Vegetables', '1.20', 'kg', 80, 'http://example.com/images/broccoli.jpg'),
(5, 'Chicken Breast', 'Meat', '5.00', 'kg', 50, 'http://example.com/images/chicken_breast.jpg'),
(6, 'Salmon Fillet', 'Seafood', '8.00', 'kg', 30, 'http://example.com/images/salmon_fillet.jpg'),
(7, 'Milk', 'Dairy', '1.00', 'liter', 120, 'http://example.com/images/milk.jpg'),
(8, 'Eggs', 'Dairy', '2.50', 'dozen', 90, 'http://example.com/images/eggs.jpg'),
(9, 'Bread', 'Bakery', '2.00', 'loaf', 70, 'http://example.com/images/bread.jpg'),
(10, 'Orange Juice', 'Beverages', '3.00', 'liter', 60, 'http://example.com/images/orange_juice.jpg');

-- Create the sales table
CREATE TABLE `sales` (
  `sale_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `sale_date` date NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `discount` decimal(10,2) DEFAULT 0.00,
  `final_amount` decimal(10,2) NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  PRIMARY KEY (`sale_id`),
  FOREIGN KEY (`customer_id`) REFERENCES `customers`(`customer_id`)
);

-- Create the sales_items table
CREATE TABLE `sales_items` (
  `sale_item_id` int NOT NULL AUTO_INCREMENT,
  `sale_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL,
  `price_per_unit` decimal(10,2) NOT NULL,
  `total_price` decimal(10,2) AS (`quantity` * `price_per_unit`) STORED,
  PRIMARY KEY (`sale_item_id`),
  FOREIGN KEY (`sale_id`) REFERENCES `sales`(`sale_id`),
  FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`)
);

-- Create the inventory table
CREATE TABLE `inventory` (
  `inventory_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `quantity_in` int NOT NULL,
  `quantity_out` int NOT NULL,
  `current_stock` int NOT NULL,
  `last_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`inventory_id`),
  FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`)
);

-- Create the reports table
CREATE TABLE `reports` (
  `report_id` int NOT NULL AUTO_INCREMENT,
  `report_type` varchar(20) NOT NULL,
  `total_sales` decimal(10,2) NOT NULL,
  `total_income` decimal(10,2) NOT NULL,
  `generated_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`report_id`)
);
