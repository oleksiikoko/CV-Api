const MotivationModel = require("../models/MotivationModel");

class MotivationController {
  getMotivation = (_, res) => {
    MotivationModel.find({})
      .sort("created_at")
      .exec((error, result) => {
        if (error || !result) {
          return res.status(404).json({ message: "Motivation not found" });
        }
        return res.status(200).json(result);
      });
  };

  ifItemNotExist = (item, action) => {
    MotivationModel.find({ text: item.text }, (error, result) => {
      if (error || !result || result.length === 0) {
        return action();
      }
    });
  };

  addMotivation = (motivation) => {
    const newMotivation = new MotivationModel(motivation);
    newMotivation.save();
  };
}

module.exports = MotivationController;
