const EnglishModel = require("../models/EnglishModel");

class EnglishController {
  getEnglish = (_, res) => {
    EnglishModel.findOne({}).exec((error, english) => {
      if (error || !english) {
        return res
          .status(404)
          .json({ message: "English level item not found" });
      }
      return res.status(200).json(english);
    });
  };

  ifItemNotExist = (item, action) => {
    EnglishModel.find({ level: item.level }, (error, result) => {
      if (error || !result || result.length === 0) {
        return action();
      }
    });
  };

  addEnglish = (item) => {
    const newLevel = new EnglishModel(item);
    newLevel.save();
  };

  removeAll = () => {
    return EnglishModel.deleteMany({});
  };
}

module.exports = EnglishController;
