const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SkillSchema = new Schema(
  {
    text: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const SkillModel = mongoose.model("Skill", SkillSchema);

module.exports = SkillModel;
