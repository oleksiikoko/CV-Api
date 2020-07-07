const bodyParser = require("body-parser");

const PortfolioController = require("../controllers/PortfolioController");
const AboutController = require("../controllers/AboutController");
const ContactController = require("../controllers/ContactController");
const EnglishController = require("../controllers/EnglishController");
const ExperienceController = require("../controllers/ExperienceController");
const MotivationController = require("../controllers/MotivationController");
const SkillController = require("../controllers/SkillController");
const EducationController = require("../controllers/EducationController");

const createRoutes = (app) => {
  const portfolioController = new PortfolioController();
  const aboutController = new AboutController();
  const contactController = new ContactController();
  const englishController = new EnglishController();
  const experienceController = new ExperienceController();
  const motivationController = new MotivationController();
  const skillController = new SkillController();
  const educationController = new EducationController();

  app.use(bodyParser.json());

  app.get("/portfolio", portfolioController.getPortfolio);
  app.get("/about", aboutController.getAbout);
  app.get("/contacts", contactController.getContacts);
  app.get("/english", englishController.getEnglish);
  app.get("/experience", experienceController.getExperience);
  app.get("/motivation", motivationController.getMotivation);
  app.get("/skills", skillController.getSkills);
  app.get("/education", educationController.getEducation);
};

module.exports = createRoutes;
