const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EducationSchema = new Schema(
  {
    text: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const EducationModel = mongoose.model("Education", EducationSchema);

module.exports = EducationModel;
