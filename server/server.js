const express = require("express");
const bodyParser = require("body-parser");
const { transporter, mailOptions } = require("./mailer/mailer");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const {getTestMessageUrl} = require("nodemailer");
var path = require("path");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("./source"));

const PORT = process.env.PORT || 4000;

app.post("/send", function(req, res) {
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.redirect("/");
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", getTestMessageUrl(info));
    res.redirect("/");
  });
});

app.get(["/", "/about", "/contact"], function(req, res) {
  res.sendFile(path.resolve(__dirname, "../source/index.html"));
});

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
  mongoose.connect(keys.mongoURI).then(
    function() {
      console.log("Successfuly connected");
    },
    function(err) {
      console.log("Failed to connect", err);
    }
  );
});
