const AboutModel = require("../models/AboutModel");

class AboutController {
  getAbout = (_, res) => {
    AboutModel.find({}).exec((error, aboutItem) => {
      if (error || !aboutItem) {
        return res.status(404).json({ message: "About not found" });
      }
      return res.status(200).json(aboutItem);
    });
  };

  addAbout = (item) => {
    const newItem = AboutModel(item);
    newItem.save();
  };

  ifItemNotExist = (item, action) => {
    AboutModel.find({ text: item.text }, (error, result) => {
      if (error || !result || result.length === 0) {
        return action();
      }
    });
  };

  removeAll = () => {
    return AboutModel.deleteMany({});
  };
}

module.exports = AboutController;
