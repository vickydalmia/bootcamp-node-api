const express = require("express");
const dotEnv = require("dotenv");
const morgan = require("morgan");
const bootCamp = require("./routes/bootcamp");

//load env file
dotEnv.config({ path: "./config/config.env" });
const db = require("./models");
const app = express();
app.use(express.json());
//logging
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
//bootcamp route
app.use("/api/v1/bootcamps", bootCamp);

const port = process.env.PORT || 5000;
const server = app.listen(port, error => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("server started" + port);
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`Error ${error.message}`);
  server.close(() => process.exit(1));
});
