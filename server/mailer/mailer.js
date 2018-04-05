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

function buildMailOptions(clientObject, mailOptions) {
	mailOptions.subject = `Information request from ${clientObject.fullName}`
	mailOptions.text = "";
	if(clientObject.email)
		mailOptions.text += "email: " + clientObject.email + "\n";
	if(clientObject.phone)
		mailOptions.text += "phone: " + clientObject.phone + "\n";
	if(clientObject.contactOption)
		mailOptions.text += "contact option: " + clientObject.contactOption + "\n";
	if(clientObject.otherContactOption)
    mailOptions.text += "prefered option: " + clientObject.otherContactOption + "\n";
	if(clientObject.message)
		mailOptions.text += "\n" + clientObject.message;
	return mailOptions;
}

module.exports = { transporter, mailOptions, buildMailOptions };
