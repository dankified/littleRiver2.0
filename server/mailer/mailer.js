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
  subject: "Information request"
};

if (process.env.NODE_ENV === "production") {
  mailOptions = {
    to: "littleRiver@yahoo.com"
  };
} else {
  mailOptions = {
    to: user
  };
}

module.exports = { transporter, mailOptions };
