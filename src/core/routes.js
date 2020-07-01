const bodyParser = require("body-parser");

const PortfolioController = require("../controllers/PortfolioController.js");

const createRoutes = (app) => {
  const portfolioController = new PortfolioController();

  app.use(bodyParser.json());

  app.get("/portfolio", portfolioController.getPortfolio);
};

module.exports = createRoutes;
