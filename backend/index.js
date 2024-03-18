import express from "express";
import mysql from "mysql";
const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Y3ShallB3A$G0ds",
  database: "test",
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, result) => {
    if (err) {
      return res.json(err);
    }
    return res.json(result);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)";
  const values = [req.body.title, req.body.desc, req.body.cover];

  db.query(q, [values], (err, result) => {
    if (err) {
      return res.json(err);
    }
    return res.json("Book has been added!");
  });
});

app.listen(8800, () => {
  console.log("Backend server is running!");
});
