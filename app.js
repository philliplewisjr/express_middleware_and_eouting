'user strict';
const express = require("express");
const app = express();

const routes = require("./routes/")

app.use(express.static(__dirname + "/project"));

app.use(routes);


app.use((req, res, next)=>{
  res.send("Please pass the correct path")
})

app.listen(3000, ()=> {
  console.log("Listening on 3000");
})
