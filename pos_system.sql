USE DATABASE 
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

INSERT INTO customers (first_name, last_name, email, phone, address) 
VALUES 
('John', 'Doe', 'john.doe@example.com', '123-456-7890', '123 Main St, Anytown, USA'),
('Jane', 'Smith', 'jane.smith@example.com', '234-567-8901', '456 Oak St, Othertown, USA'),
('Alice', 'Johnson', 'alice.johnson@example.com', '345-678-9012', '789 Pine St, Elsewhere, USA'),
('Bob', 'Brown', 'bob.brown@example.com', '456-789-0123', '321 Elm St, Anytown, USA'),
('Charlie', 'Davis', 'charlie.davis@example.com', '567-890-1234', '654 Maple St, Othertown, USA'),
('Diana', 'Evans', 'diana.evans@example.com', '678-901-2345', '987 Birch St, Elsewhere, USA'),
('Edward', 'Frank', 'edward.frank@example.com', '789-012-3456', '123 Cedar St, Anytown, USA'),
('Fiona', 'Green', 'fiona.green@example.com', '890-123-4567', '456 Spruce St, Othertown, USA'),
('George', 'Hill', 'george.hill@example.com', '901-234-5678', '789 Redwood St, Elsewhere, USA'),
('Hannah', 'Ivy', 'hannah.ivy@example.com', '012-345-6789', '321 Willow St, Anytown, USA');


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
(1, 'Apple', 'Fruits', '0.50', 'each', 150, 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/06/apple-varieties-types-1296x728-header.jpg?w=1155&h=1528'),
(2, 'Banana', 'Fruits', '0.30', 'each', 200, 'https://www.foodandwine.com/thmb/4fzQW9u60XlhTk52CIuM1BlLhcc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/amazonfreebananas-em-86304874-2000-5a276309cf1944349fb55818c98c7b1b.jpg'),
(3, 'Carrot', 'Vegetables', '0.70', 'kg', 100, 'https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/sites/default/files/20180929_BLP506.jpg'),
(4, 'Broccoli', 'Vegetables', '1.20', 'kg', 80, 'https://images.squarespace-cdn.com/content/v1/5b5aa0922487fd1ce32c117a/1547765015801-FSR1DVSKCZU3PAYWIRQG/broccoli.jpg'),
(5, 'Chicken Breast', 'Meat', '5.00', 'kg', 50, 'https://www.everydaycheapskate.com/wp-content/uploads/20995112_s.jpg'),
(6, 'Salmon Fillet', 'Seafood', '8.00', 'kg', 30, 'https://allfreshseafood.com/cdn/shop/files/2salmonfilletscanadian_1.jpg?v=1698852411'),
(7, 'Milk', 'Dairy', '1.00', 'liter', 120, 'https://cdn.loveandlemons.com/wp-content/uploads/2020/01/oat-milk.jpg'),
(8, 'Eggs', 'Dairy', '2.50', 'dozen', 90, 'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg'),
(9, 'Bread', 'Bakery', '2.00', 'loaf', 70, 'https://www.allrecipes.com/thmb/CjzJwg2pACUzGODdxJL1BJDRx9Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6788-amish-white-bread-DDMFS-4x3-6faa1e552bdb4f6eabdd7791e59b3c84.jpg'),
(10, 'Orange', 'Fruits', '3.00', 'liter', 60, 'https://www.allrecipes.com/thmb/y_uvjwXWAuD6T0RxaS19jFvZyFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205638014-2000-d0fbf9170f2d43eeb046f56eec65319c.jpg');

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
