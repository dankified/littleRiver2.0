var express = require("express");

const mongoose = require("mongoose");
const keys = require("./config/keys");

var path = require("path");
var app = express();

app.use(express.static("./source"));

const PORT = process.env.PORT || 4000;

app.get(["/", "/about", "/contact"], function(req, res) {
  res.sendFile(path.resolve(__dirname, "../source/index.html"));
});

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
  mongoose
    .connect(
      keys.mongoURI
    )
    .then(
      function() {
        console.log("Successfuly connected");
      },
      function(err) {
        console.log("Failed to connect", err);
      }
    );
});
