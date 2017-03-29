'use strict';

const {Router} = require("express");
const path = require("path");

const homeRouter = Router();

homeRouter.get("/", (req, res, next)=> {
  res.sendFile(path.join(__dirname, '../project', "home.html"));
});



module.exports = homeRouter;
