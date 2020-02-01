const express = require("express");
const dotEnv = require("dotenv");

//load env file
dotEnv.config({ path: "./config/config.env" });

const app = express();
const port = process.env.PORT || 5000;
app.listen(port, error => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("server started");
});
