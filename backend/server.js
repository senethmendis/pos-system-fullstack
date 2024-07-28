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

const db = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
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
    "INSERT INTO products (`product_name`, `category`, `price`, `unit`, `stock_quantity`) VALUES (?)";
  const values = [
    req.body.product_name,
    req.body.category,
    req.body.price,
    req.body.unit,
    req.body.stock_quantity,
  ];
  db.query(query, [values], (err, data) => {
    if (err) return err;
    return res.json("Product Added!");
  });
});

//--------------------------------------------------

app.listen(port, () => {
  console.log(`server is running on port ${port}!`);
});
