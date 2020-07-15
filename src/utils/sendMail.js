const nodemailer = require("nodemailer");

const sendMessage = (message) => {
  let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "db2c59f5038c50",
      pass: "c5d07dfc8d35af",
    },
  });

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "olkov-ipt21@lll.kpi.ua",
      pass: "cvKovalchuk1@",
    },
  });

  transporter.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendMessage;
