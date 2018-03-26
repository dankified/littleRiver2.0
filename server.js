var express = require("express");
var path = require("path");
var app = express();

app.use(express.static("./source"));

const PORT = process.env.PORT || 4000;

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "./source/index.html"));
});

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
