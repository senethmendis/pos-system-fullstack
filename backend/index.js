const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://axanta7:wolfy4556@pos-sys.c3kiihx.mongodb.net/?retryWrites=true&w=majority&appName=pos-sys"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/test", async (req, res) => {
  res.json("Hello Test");
});

app.listen(port, () => console.log("Server started on port " + port));
