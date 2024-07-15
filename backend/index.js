import express from "express";
import mysql from "mysql";
import cors from "cors";
const port = 8080;
const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "",
});

db.connect((error) => {
  if (error) {
    console.error("Error conneting to db", error);
    return;
  }
  console.log("Connection Successs!");
});

app.use(express.json());
app.use(cors());

app.get("/helloworld", (req, res) => {
  res.json("Hello Test !");
});

app.listen(port, () => {
  console.log(`backned server is ruinng on ${port}!`);
});
