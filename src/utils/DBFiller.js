const PortfolioController = require("../controllers/PortfolioController");
const AboutController = require("../controllers/AboutController");
const ContactController = require("../controllers/ContactController");
const EnglishController = require("../controllers/EnglishController");
const ExperienceController = require("../controllers/ExperienceController");
const MotivationController = require("../controllers/MotivationController");
const SkillController = require("../controllers/SkillController");

class DBFiller {
  constructor(dbJson) {
    this.portfolioController = new PortfolioController();
    this.aboutController = new AboutController();
    this.contactController = new ContactController();
    this.englishController = new EnglishController();
    this.experienceController = new ExperienceController();
    this.motivationController = new MotivationController();
    this.skillController = new SkillController();
    this.dbJson = dbJson;
  }

  run = () => {
    this.fillPortfolio(this.dbJson.portfolio);
    this.fillAbout(this.dbJson.about);
    this.fillContact(this.dbJson.contacts);
    this.fillEnglish(this.dbJson.english);
    this.fillExperience(this.dbJson.experience);
    this.fillMotivation(this.dbJson.motivation);
    this.fillSkills(this.dbJson.skills);
  };

  fillPortfolio = (portfolioItems) => {
    portfolioItems.map((item) => {
      this.portfolioController.ifItemNotExist(item, () =>
        this.portfolioController.addPortfolioItem(item)
      );
    });
  };

  fillAbout = (aboutItem) => {
    this.aboutController.ifItemNotExist(aboutItem, () => {
      this.aboutController.removeAll().exec(() => {
        this.aboutController.addAbout(aboutItem);
      });
    });
  };

  fillContact = (contacts) => {
    contacts.map((item) => {
      this.contactController.ifItemNotExist(item, () => {
        this.contactController.addContact(item);
      });
    });
  };

  fillEnglish = (english) => {
    this.englishController.ifItemNotExist(english, () => {
      this.englishController.removeAll();
      this.englishController.addEnglish(english);
    });
  };

  fillExperience = (experience) => {
    experience.map((item) => {
      this.experienceController.ifItemNotExist(item, () => {
        this.experienceController.addExperience(item);
      });
    });
  };

  fillMotivation = (motivations) => {
    motivations.map((item) => {
      this.motivationController.ifItemNotExist(item, () => {
        this.motivationController.addMotivation(item);
      });
    });
  };

  fillSkills = (skills) => {
    skills.map((item) => {
      this.skillController.ifItemNotExist(item, () => {
        this.skillController.addSkill(item);
      });
    });
  };
}

module.exports = DBFiller;
