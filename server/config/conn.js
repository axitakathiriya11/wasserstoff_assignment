const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL;
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log(`server connected`);
  })
  .catch((e) => {
    console.log(e);
  });
