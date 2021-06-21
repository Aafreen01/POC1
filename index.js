var express = require("express");
var app = express();
const port = 3000;

const setCurrentTimeMiddleWare = function (req, res, next) {
  req.currentDate = new Date();
  next();
};

const redirectToDetailsRoute = function (req, res) {
  res.redirect("details/" + req.currentDate);
};

app.use("/details/:currentDate", function (req, res) {
  res.send(`<h2>Hello from Node Js details ${req.params.currentDate}<h2>`);
});

app.get(
  "/home",
  setCurrentTimeMiddleWare,
  redirectToDetailsRoute,
  function (req, res) {
    res.send("Hello from Node Js");
  }
);

app.get(
  "/",
  function (req, res) {
    res.redirect("home");
  }
);

app.listen(port, () => console.log("listening to port :" + port));
