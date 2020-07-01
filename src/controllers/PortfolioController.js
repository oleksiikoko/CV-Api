const PortfolioModel = require("../models/PortfolioModel");

class PortfolioController {
  getPortfolio = (req, res) => {
    PortfolioModel.find({}, (error, portfolioItems) => {
      if (error || !portfolioItems) {
        res.status(404).json({ message: "Portfolio items not found" });
      }
      res.status(200).json(portfolioItems);
    });
  };
}

exports.PortfolioController = PortfolioController;
