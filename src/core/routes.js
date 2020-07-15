const bodyParser = require("body-parser");

const PortfolioController = require("../controllers/PortfolioController");
const AboutController = require("../controllers/AboutController");
const ContactController = require("../controllers/ContactController");
const EnglishController = require("../controllers/EnglishController");
const ExperienceController = require("../controllers/ExperienceController");
const MotivationController = require("../controllers/MotivationController");
const SkillController = require("../controllers/SkillController");
const EducationController = require("../controllers/EducationController");

const sendMessage = require("../utils/sendMail");

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

  app.get("/download-pdf", function (req, res) {
    const file = `${process.cwd()}/src/assets/db.json`;
    res.download(file);
  });

  app.get("/send-to-mail", function (req, res) {
    const message = {
      from: "olkov-ipt21@lll.kpi.ua",
      to: "oleksiij.ko@gmail.com",
      subject: "Design Your Model S | Tesla",
      html:
        "<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>",
      // attachments: [
      //   {
      //     // Use a URL as an attachment
      //     filename: "your-testla.png",
      //     path:
      //       "https://media.gettyimages.com/photos/view-of-tesla-model-s-in-barcelona-spain-on-september-10-2018-picture-id1032050330?s=2048x2048",
      //   },
      // ],
    };
    sendMessage(message);
  });
};

module.exports = createRoutes;
