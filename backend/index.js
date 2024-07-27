import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { Customer, Sale, Product, Inventory, Report } from "./model/model.js"; // Ensure .js extension and named imports
import e from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

// Validate environment variables
if (!process.env.MONGODB_URI) {
  console.error("Error: Missing MONGODB_URI in environment variables");
  process.exit(1);
}

// Connect to MongoDB
const mongoDBURI = process.env.MONGODB_URI;
mongoose
  .connect(mongoDBURI)
  .then(() => {
    console.log("MongoDB Connected");

    // Start server only if MongoDB connection is successful
    app.listen(port, () => console.log(`Server started on port ${port}`));
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process with failure
  });

app.get("/test", (req, res) => {
  res.json("Hello Test");
});

//------------------------------------------------------------------------------------------------------

// Get all customers
app.get("/dash", async (req, res) => {
  try {
    res.json("Dashboard Data ? ");
  } catch (error) {
    res.status(500).json({ message: "Error retrieving customers", error });
  }
});

// Get all customers
app.get("/customers", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving customers", error });
  }
});

//------------------------------------------------------------------------------------------------------

// Get all sales
app.get("/sales", async (req, res) => {
  try {
    const sales = await Sale.find();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving customers", error });
  }
});

//------------------------------------------------------------------------------------------------------

// Get all Inventory
app.get("/inventory", async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving customers", error });
  }
});

//------------------------------------------------------------------------------------------------------

// Get all Report
app.get("/report", async (req, res) => {
  try {
    const report = await Report.find();
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving customers", error });
  }
});

//------------------------------------------------------------------------------------------------------

// Get all Product
app.get("/product", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving customers", error });
  }
});

//add new product
app.post("/product", (req, res) => {
  const product = new Product({
    name: req.body.name,
    product_name: req.body.product_name,
    category: req.body.category,
    price: req.body.price,
    unit: req.body.unit,
    imgUrl: req.body.imgUrl,
    stock_quantity: req.body.stock_quantity,
    product_code: req.body.product_code,
  });
  product.save();
  res.json(product);
  console.log(product);
});

//delete a product
app.delete("/product/:id", async (req, res) => {
  const result = await Product.findByIdAndDelete(req.params.id);
  res.json();
  console.log(result + " Deleted!");
});

//update product
app.put("/product/:id", (req, res) => {
  const product = new Product({
    _id: req.params.id,
    product_name: req.body.product_name,
    category: req.body.category,
    price: req.body.price,
    unit: req.body.unit,
    imgUrl: req.body.imgUrl,
    stock_quantity: req.body.stock_quantity,
    product_code: req.body.product_code,
  });

  Product.updateOne({ _id: req.params.id }, product)
    .then(() => {
      res.status(201).json({
        message: "Product Updated!",
      });
    })
    .catch((e) => {
      res.status(400).json({
        error: e,
      });
    });
});

//------------------------------------------------------------------------------------------------------
