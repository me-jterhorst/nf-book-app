const mongoose = require("mongoose");

const { Schema } = mongoose;

const authorSchema = new Schema(
  {
    nameAuthor: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionkey: false,
  }
);

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
