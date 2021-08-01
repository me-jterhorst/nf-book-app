const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    bookTitle: {
      type: String,
      required: true,
    },
    nameAuthor: {
      type: Schema.Types.ObjectId,
      ref: "Author",
    },
    bookGenre: {
      type: String,
      required: true,
    },
    isRead: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    versionkey: false,
  }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
