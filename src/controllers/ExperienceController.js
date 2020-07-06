const ExperienceModel = require("../models/ExperienceModel");

class ExperienceController {
  getExperience = (_, res) => {
    ExperienceModel.find({})
      .sort("-date")
      .exec((error, experienceItems) => {
        if (error || !experienceItems) {
          return res
            .status(404)
            .json({ message: "Experience items not found" });
        }
        return res.status(200).json(experienceItems);
      });
  };

  ifItemNotExist = (item, action) => {
    ExperienceModel.find({ companyName: item.companyName }, (error, result) => {
      if (error || !result || result.length === 0) {
        return action();
      }
    });
  };

  addExperience = (item) => {
    const newExperience = new ExperienceModel(item);
    newExperience.save();
  };
}

module.exports = ExperienceController;
