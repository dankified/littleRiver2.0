var express = require('express');
var app = express();

app.use(express.static('./source'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
})