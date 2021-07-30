const fs = require("fs/promises");
const path = require("path");

const dbPath = path.resolve(__dirname, "./db.json");

function findAll() {
  return fs.readFile(dbPath, "utf-8").then((jsonData) => {
    const books = JSON.parse(jsonData);
    return books;
  });
}

exports.findAll = findAll;
