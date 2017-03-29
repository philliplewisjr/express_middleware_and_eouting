'use strict';

const { Router } = require("express");
const path = require("path");

const chickenRouter = Router();

chickenRouter.get("/see-our-chicken", (req, res, next)=> {
  console.log("Where are the chickens?!");
  res.sendFile(path.join(__dirname, "../project", "see-our-chickens.html"));
});



module.exports = chickenRouter;
