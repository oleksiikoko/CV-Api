const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PortfolioSchema = new Schema(
  {
    projectName: String,
    description: String,
    gifPreview: {
      data: Buffer,
      contentType: String,
    },
    links: [
      {
        iconId: String,
        name: String,
        url: String,
        color: String,
      },
    ],
  },
  { timestamps: { createdAt: "created_at" } }
);

const PortfolioModel = mongoose.model("Portfolio", PortfolioSchema);

module.exports = PortfolioModel;
