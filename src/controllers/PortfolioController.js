const PortfolioModel = require("../models/PortfolioModel");

class PortfolioController {
  getPortfolio = (_, res) => {
    PortfolioModel.find({}, (error, portfolioItems) => {
      if (error || !portfolioItems) {
        return res.status(404).json({ message: "Portfolio items not found" });
      }
      return res.status(200).json(portfolioItems);
    });
  };

  ifItemNotExist = (item, action) => {
    PortfolioModel.find({ projectName: item.projectName }, (error, result) => {
      if (error || !result || result.length === 0) {
        return action();
      }
    });
  };

  addPortfolioItem = (item) => {
    const newItem = PortfolioModel(item);
    newItem.save();
  };
}

module.exports = PortfolioController;
