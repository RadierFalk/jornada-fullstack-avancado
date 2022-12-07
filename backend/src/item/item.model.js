const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, require: true },
  imageUrl: { type: String, require: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
});
