const PortfolioController = require("../controllers/PortfolioController");

class DBFiller {
  constructor(dbJson) {
    this.portfolioController = new PortfolioController();
    this.dbJson = dbJson;
  }

  run = () => {
    this.fillPortfolio(this.dbJson.portfolio);
  };

  fillPortfolio = async (portfolioItems) => {
    portfolioItems.map((item) => {
      this.portfolioController.ifItemNotExist(item, () =>
        this.portfolioController.addPortfolioItem(item)
      );
    });
  };
}

module.exports = DBFiller;
