const SkillModel = require("../models/SkillModel");

class SkillController {
  getSkills = (_, res) => {
    SkillModel.find({})
      .sort("created_at")
      .exec((error, result) => {
        if (error || !result) {
          return res.status(404).json({ message: "Skills not found" });
        }
        return res.status(200).json(result);
      });
  };

  ifItemNotExist = (item, action) => {
    SkillModel.find({ text: item.text }, (error, result) => {
      if (error || !result || result.length === 0) {
        return action();
      }
    });
  };

  addSkill = (skill) => {
    const newSkill = new SkillModel(skill);
    newSkill.save();
  };
}

module.exports = SkillController;
