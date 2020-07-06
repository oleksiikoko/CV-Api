const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExperienceSchema = new Schema(
  {
    companyName: String,
    position: String,
    link: String,
    startDate: Date,
    endDate: Date,
    tasks: [{ task: String }],
  },
  { timestamps: { createdAt: "created_at" } }
);

const ExperienceModel = mongoose.model("Experience", ExperienceSchema);

module.exports = ExperienceModel;
