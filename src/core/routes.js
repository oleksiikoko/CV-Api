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
    const file = `${process.cwd()}/src/assets/KovalchukCv.pdf`;
    res.download(file);
  });

  app.post("/send-to-mail", function (req, res) {
    console.log(req);
    const message = {
      from: "olkov-ipt21@lll.kpi.ua",
      to: req.body.recipient,
      subject: "Oleksii Kovalchuk Frontend",
      html: "<p>Hi, you can find my cv in attachments</p>",
      attachments: [
        {
          // Use a URL as an attachment
          filename: "KovalchukCv.pdf",
          path: "src/assets/KovalchukCv.pdf",
        },
      ],
    };
    sendMessage(message);
  });
};

module.exports = createRoutes;
