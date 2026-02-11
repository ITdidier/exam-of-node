const express = require("express");
const mysql = require("mysql2");

const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "propertymgt_db" ,
});
db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL Database ");
});
app.get("/property", (req, res) => {
  const sql = "SELECT * FROM property";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
});
app.get('/property/:id', (req, res) => {
  const id = req.params.id;

  const sql = 'SELECT * FROM property WHERE property_id= ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(result[0]);
  });
});
app.get("/tenants", (req, res) => {
  const sql = "SELECT * FROM tenants";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
});
app.get('/tenants/:id', (req, res) => {
  const id = req.params.id;

  const sql = 'SELECT * FROM tenants WHERE tenant_id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(result[0]);
  });
});
app.get("/leases", (req, res) => {
  const sql = "SELECT * FROM leases";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
});
app.get('/leases/:id', (req, res) => {
  const id = req.params.id;

  const sql = 'SELECT * FROM leases WHERE leases_id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(result[0]);
  });
});

app.listen(3000, () => {
  console.log("Server running on port http://localhost:3000✔✈🛫🛰 ");
});
