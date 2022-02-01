const express = require("express");
const products = require("./data");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("HOME");
});
app.get("/api/products", (req, res) => {
  res.send(products);
});

app.listen(PORT, () => {
  console.log("Hello World");
});
