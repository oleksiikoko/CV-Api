const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
  projectName: String,
  description: String,
  links: [
    {
      iconId: String,
      name: String,
      url: String,
      color: String,
    },
  ],
});

const PortfolioModel = mongoose.model("Portfolio", PortfolioSchema);

module.exports = PortfolioModel;
