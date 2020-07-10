require("babel-polyfill");
const PortfolioModel = require("../models/PortfolioModel");
const fs = require("fs");
const path = require("path");
const gifDurations = require("gif-me-duration");

class PortfolioController {
  getPortfolio = (_, res) => {
    PortfolioModel.find({})
      .sort("created_at")
      .exec((error, portfolioItems) => {
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

  addPortfolioItem = async (item) => {
    let newItem;
    if (item.gif) {
      newItem = PortfolioModel({
        projectName: item.projectName,
        description: item.description,
        gifPreview: {
          data: fs.readFileSync(path.resolve(process.cwd(), item.gif.path)),
          contentType: "image/gif",
          width: item.gif.width,
          height: item.gif.height,
          duration: item.gif.duration,
        },
        links: item.links,
      });
    } else {
      newItem = PortfolioModel(item);
    }
    newItem.save();
  };
}

module.exports = PortfolioController;
