const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vehicle",
});

app.get("/", (req, res) => {
  return res.json("from backend");
});

app.post("/myvehicles", (req, res) => {
  const sql =
    "INSERT INTO myvehicles (`vehicleName`,`vehicleColor`,`vehicleNumber`) VALUES (?)";
  const input = [
    req.body.vehicleName,
    req.body.vehicleColor,
    req.body.vehicleNumber,
  ];
  db.query(sql, [input], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/myvehicles", (req, res) => {
  const sql = "SELECT * FROM myvehicles";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/read/:id", (req, res) => {
  const sql = "SELECT * FROM myvehicles WHERE ID = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error" });
    return res.json(result);
  });
});

app.put("/update/:id", (req, res) => {
  const sql =
    "UPDATE myvehicles SET `vehicleName`=?,`vehicleColor`=?, `vehicleNumber`=? where ID=?";
  const id = req.params.id;
  db.query(
    sql,
    [req.body.vehicleName, req.body.vehicleColor, req.body.vehicleNumber, id],
    (err, result) => {
      if (err) return res.json({ Message: "Error" });
      return res.json(result);
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM myvehicles WHERE ID=?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error" });
    return res.json(result);
  });
});

+app.listen(8081, () => {
  console.log("listening");
});
