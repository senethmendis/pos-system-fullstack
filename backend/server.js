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

app.listen(port, () => {
  console.log(`server is running on port ${port}!`);
});
