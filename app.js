const express = require("express");
const app = express();
// const enforce = require("express-sslify");

// app.use(sslRedirect());

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});
