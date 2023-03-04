const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let noteSchema = new Schema(
  {
    text: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  {
    collection: "notes",
  }
);

module.exports = mongoose.model("Notes", noteSchema);
