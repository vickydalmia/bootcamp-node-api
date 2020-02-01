const express = require("express");
const dotEnv = require("dotenv");
const bootCamp = require("./routes/bootcamp");

//load env file
dotEnv.config({ path: "./config/config.env" });

const app = express();

//bootcamp route
app.use("api/v1/bootcamps", bootCamp);

const port = process.env.PORT || 5000;
app.listen(port, error => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("server started");
});
