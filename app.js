const express = require("express");
const app = express();

app.listen(3000);

//register view engine
app.set("view engine", "ejs");

// static files
app.use(express.static("public"));




app.get("/", (req, res) => {
  res.render("index");
});












app.get((req, res) => {
  res.status(404).render("404");
});
