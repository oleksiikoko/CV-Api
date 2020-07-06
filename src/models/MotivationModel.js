const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MotivationSchema = new Schema(
  {
    text: String,
    language: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const MotivationModel = mongoose.model("Motivation", MotivationSchema);

module.exports = MotivationModel;
