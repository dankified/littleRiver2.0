const nodemailer = require("nodemailer");
const { user, pass } = require("../../config/keys");

let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user,
    pass
  },
  tls: {
    rejectUnauthorized: false
  }
});

let mailOptions = {
  from: `"Little River" <${user}>`,
  to: user,
  subject: "Information request",
  text: "Testing",
  html: "<p>Testing</p>"
};

module.exports = {transporter, mailOptions};
