const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AboutSchema = new Schema(
  {
    text: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const AboutModel = mongoose.model("About", AboutSchema);

module.exports = AboutModel;
