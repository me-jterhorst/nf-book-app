const express = require("express");
const findAll = require("./lib/db");

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  findAll();
});

app.listen(PORT, () => {
  console.log(`This server is running at http://localhost:${PORT}`);
});
