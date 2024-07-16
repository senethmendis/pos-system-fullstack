const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
const mongoDBURI = process.env.MONGODB_URI;
mongoose
  .connect(
    mongoDBURI
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/test", async (req, res) => {
  res.json("Hello Test");
});

app.listen(port, () => console.log("Server started on port " + port));
