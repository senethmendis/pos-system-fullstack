import express from "express";
import mysql from "mysql";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const port = process.env.PORT || 8080;
const dbPort = process.env.DBPORT || 3308;
const socketPath = process.env.SOCKETPATH;

const db = mysql.createConnection({
  host: host,
  user: user,
  port: dbPort,
  password: password,
  database: database,
  socketPath: socketPath,
});

db.connect((err) => {
  if (err) {
    console.error("Error Connecting to mysql database", err);
    return;
  }
  console.log("Connected to mysql databse");
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
  res.send("Hello from server");
});

//--------------------------------------------------
// Get all customers
app.get("/customers", (req, res) => {
  const query = "SELECT * FROM customers";
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }
    //console.table(data);
    return res.json(data);
  });
});

//ADD NEW CUSTOMER
app.post("/customers", (req, res) => {
  const query =
    "INSERT INTO customers (`first_name`, `last_name`, `email`, `phone`,`address`,`cust_img_link`) VALUES (?)";
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.phone,
    req.body.address,
    req.body.cust_img_link,
  ];
  db.query(query, [values], (err, data) => {
    if (err) return err;
    return res.json("Customer Added!");
  });
});

//DELETE CUSTOMER
app.delete("/customers/:id", (req, res) => {
  const productId = req.params.id;
  const query = "DELETE FROM customers WHERE customer_id = ?";

  db.query(query, [productId], (err, data) => {
    if (err) {
      console.error("Error deleting product:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    if (data.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product Deleted!" });
  });
});

//edit customers
app.put("/customers/:id", (req, res) => {
  const productId = req.params.id;
  const query =
    "UPDATE customers SET  first_name = ?, last_name = ?, email = ?,phone= ?,address= ?,cust_img_link= ? WHERE customer_id = ?";
  const values = [
    req.body.product_name,
    req.body.category,
    req.body.price,
    req.body.unit,
    req.body.stock_quantity,
    req.body.image_url,
  ];
  db.query(query, [...values, productId], (err, data) => {
    if (err) return err;
    return res.json("Customer Updated!");
  });
});

//--------------------------------------------------
// Get all sales
app.get("/sales", (req, res) => {
  const query = "SELECT * FROM sales";
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }
    //console.table(data);
    return res.json(data);
  });
});

//--------------------------------------------------
// Get all inventory
app.get("/inventory", (req, res) => {
  const query = "SELECT * FROM inventory";
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }
    //console.table(data);
    return res.json(data);
  });
});

//--------------------------------------------------
// Get all report
app.get("/report", (req, res) => {
  const query = "SELECT * FROM report";
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }
    //console.table(data);
    return res.json(data);
  });
});

//--------------------------------------------------
// Get all product
app.get("/products", (req, res) => {
  const query = "SELECT * FROM products";
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    }
    //console.table(data);
    return res.json(data);
  });
});

app.post("/products", (req, res) => {
  const query =
    "INSERT INTO products (`product_name`, `category`, `price`, `unit`, `stock_quantity`,`image_url`) VALUES (?)";
  const values = [
    req.body.product_name,
    req.body.category,
    req.body.price,
    req.body.unit,
    req.body.stock_quantity,
    req.body.image_url,
  ];
  db.query(query, [values], (err, data) => {
    if (err) return err;
    return res.json("Product Added!");
  });
});

app.delete("/products/:id", (req, res) => {
  const productId = req.params.id;
  const query = "DELETE FROM products WHERE product_id = ?";

  db.query(query, [productId], (err, data) => {
    if (err) {
      console.error("Error deleting product:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    if (data.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product Deleted!" });
  });
});

app.put("/products/:id", (req, res) => {
  const productId = req.params.id;
  const query =
    "UPDATE products SET product_name = ?, category = ?, price = ?, unit = ?,stock_quantity= ?,image_url= ? WHERE product_id = ?";
  const values = [
    req.body.product_name,
    req.body.category,
    req.body.price,
    req.body.unit,
    req.body.stock_quantity,
    req.body.image_url,
  ];
  db.query(query, [...values, productId], (err, data) => {
    if (err) return err;
    return res.json("Product Updated!");
  });
});

//--------------------------------------------------

app.listen(port, () => {
  console.log(`server is running on port ${port}!`);
});
