const mongoose = require("mongoose");

const newUser = mongoose.Schema({
  username: {
    type: String,
  },
});

const userModel = mongoose.model("userModel", newUser);
module.exports = userModel;
