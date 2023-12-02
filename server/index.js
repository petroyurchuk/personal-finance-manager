import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Proctoto1107&",
  database: "test",
});

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json("backend");
});

// Categories

app.get("/categories", (req, res) => {
  const query = "SELECT * FROM categories";
  db.query(query, (error, data) => {
    if (error) return res.json(error);
    return res.json(data);
  });
});

app.post("/categories", (req, res) => {
  const query = "INSERT INTO categories (`name`,`description`) VALUES (?)";
  const values = [req.body.name, req.body.description];
  db.query(query, [values], (error, data) => {
    if (error) return res.json(error);
    return res.json("Category has been created successfully");
  });
});

app.delete("/categories/:id", (req, res) => {
  const categoryId = req.params.id;
  const query = "DELETE FROM categories WHERE id=?";
  db.query(query, [categoryId], (error, data) => {
    if (error) return res.json(error);
    return res.json("Category has been deleted successfully");
  });
});
app.delete("/categories/:id", (req, res) => {
  const categoryId = req.params.id;
  const query = "DELETE FROM categories WHERE id=?";
  db.query(query, [categoryId], (error, data) => {
    if (error) return res.json(error);
    return res.json("Category has been deleted successfully");
  });
});
app.put("/categories/:id", (req, res) => {
  const categoryId = req.params.id;

  const query = "UPDATE categories SET `name`=?,`description`=? WHERE id=?";

  const values = [req.body.name, req.body.description];

  db.query(query, [...values, categoryId], (error, data) => {
    if (error) return res.json(error);
    return res.json("Category has been updated successfully");
  });
});

//Transactions
app.get("/transactions", (req, res) => {
  const query = "SELECT * FROM transactions";
  db.query(query, (error, data) => {
    if (error) return res.json(error);
    return res.json(data);
  });
});

app.post("/transactions", (req, res) => {
  const query =
    "INSERT INTO transactions (`category`,`typeOfOperation`,`total`,`date`,`description`) VALUES (?)";
  const values = [
    req.body.category,
    req.body.typeOfOperation,
    req.body.total,
    req.body.date,
    req.body.description,
  ];
  db.query(query, [values], (error, data) => {
    if (error) return res.json(error);
    return res.json("Transaction has been created successfully");
  });
});

app.delete("/transactions/:id", (req, res) => {
  const transactionId = req.params.id;
  const query = "DELETE FROM transactions WHERE id=?";
  db.query(query, [transactionId], (error, data) => {
    if (error) return res.json(error);
    return res.json("Category has been deleted successfully");
  });
});

app.put("/transactions/:id", (req, res) => {
  const categoryId = req.params.id;

  const query =
    "UPDATE transactions SET `category`=?,`typeOfOperation`=?,`total`=?,`date`=?,`description`=? WHERE id=?";

  const values = [
    req.body.category,
    req.body.typeOfOperation,
    req.body.total,
    req.body.date,
    req.body.description,
  ];

  db.query(query, [...values, categoryId], (error, data) => {
    if (error) return res.json(error);
    return res.json("Transaction has been updated successfully");
  });
});

app.listen(8800, () => {
  console.log("Connected to backend");
});
