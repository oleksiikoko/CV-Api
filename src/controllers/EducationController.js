const EducationModel = require("../models/EducationModel");

class EducationController {
  getEducation = (_, res) => {
    EducationModel.find({})
      .sort("created_at")
      .exec((error, educationItem) => {
        if (error || !educationItem) {
          return res.status(404).json({ message: "Education not found" });
        }
        return res.status(200).json(educationItem);
      });
  };

  addEducation = (item) => {
    const newItem = EducationModel(item);
    newItem.save();
  };

  ifItemNotExist = (item, action) => {
    EducationModel.find({ text: item.text }, (error, result) => {
      if (error || !result || result.length === 0) {
        return action();
      }
    });
  };

  removeAll = () => {
    return EducationModel.deleteMany({});
  };
}

module.exports = EducationController;
