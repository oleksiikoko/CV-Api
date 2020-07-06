const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EnglishSchema = new Schema(
  {
    level: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const EnglishModel = mongoose.model("English", EnglishSchema);

module.exports = EnglishModel;
