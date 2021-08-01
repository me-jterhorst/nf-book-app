const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello Boris");
});

// GET all books
app.get("/api/books", (req, res) => {
  res.send([
    {
      id: 1,
      bookTitle: "Alex Book",
      authorName: "Jakob",
      bookGenre: "scifi",
      isRead: true,
      createdAt: "sometime",
      updatedAt: "sometime else",
    },
    {
      id: 2,
      bookTitle: "Evi Book",
      authorName: "Boris",
      bookGenre: "scifi",
      isRead: false,
      createdAt: "sometime",
      updatedAt: "sometime else",
    },
  ]);
});
// GET single book

app.get("/api/books/:id", (req, res) => {
  const { id } = req.params;

  res.send(id);
});

// POST
app.post("/api/newbook", (req, res) => {
  console.log(req.body);
});

// PATCH single book
app.patch("/api/books/:id", (req, res) => {
  const { id } = req.params;
});

// DELETE
app.delete("/api/books/:id", (req, res) => {
  const { id } = req.params;
});

app.listen(PORT, () => {
  console.log(`This Server is running on http://localhost:${PORT}`);
});
