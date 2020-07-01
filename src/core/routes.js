const bodyParser = require("body-parser");

const PortfolioController = require("../controllers/PortfolioController.js")
  .PortfolioController;

const createRoutes = (app) => {
  const PortfolioCtrl = new PortfolioController();

  app.use(bodyParser.json());

  app.get("/portfolio", PortfolioCtrl.getPortfolio);
};

module.exports = createRoutes;
