const PortfolioModel = require("../models/PortfolioModel");
const fs = require("fs");
const path = require("path");

// import { gifPreview } from "assets/img/PortfolioGifPreview/GitHubSearchPreview.gif";

class PortfolioController {
  getPortfolio = (_, res) => {
    PortfolioModel.find({})
      .sort("-date")
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

  addPortfolioItem = (item) => {
    let newItem;
    if (item.gifPreviewPath) {
      newItem = PortfolioModel({
        projectName: item.projectName,
        description: item.description,
        gifPreview: {
          data: fs.readFileSync(
            path.resolve(process.cwd(), item.gifPreviewPath)
          ),
          contentType: "image/gif",
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
