const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/book");
const Author = require("./models/author");
const app = express();

const PORT = 8080;

/*Middle Ware Part */
app.use(express.json());

/* Bottom Ware Part */
app.get("/", (req, res) => {
  res.send("Hello Boris");
});

// GET all books
app.get("/api/books", (req, res) => {
  Book.find()
    .then((data) => {
      if (data.length === 0) {
        res.status(404).send("You are not getting anything");
      } else {
        res.status(200).send(data);
      }
    })
    .catch(() => res.status(500).end());
});

// GET single book

app.get("/api/books/:id", (req, res) => {
  const { id } = req.params;

  res.send(id);
});

// POST
app.post("/api/books", (req, res) => {
  Book.create(req.body)
    .then((newBook) => {
      res.status(201).send(newBook);
    })
    .catch((error) => {
      if (error.name === "ValidationError") {
        console.error(error);
        res.status(400);
        res.json(error);
      }
    });
});

// PATCH single book
app.patch("/api/books/:id", (req, res) => {
  const { id } = req.params;
});

// DELETE
app.delete("/api/books/:id", (req, res) => {
  const { id } = req.params;
});

mongoose
  .connect("mongodb://localhost:27017/books-api", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connected to mongoDb");
    app.listen(PORT, () => {
      console.log(`This Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(`You messed up son, go find the ${error}`));
