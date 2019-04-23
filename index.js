const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(3000);
