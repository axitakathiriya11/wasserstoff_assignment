const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");
const addModel = require("../model/addTopic");

class userController {
  static userRegistration = async (req, res) => {
    try {
      if (req.body === "") {
        return res.status(204).json({ message: "Please Enter Username" });
      } else {
        // save the username
        const newUser = new userModel(req.body);
        await newUser.save();
        return res.status(200).json({ message: "You are good to go" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  static userData = async (req, res) => {
    const usersData = await userModel.find();
    res.send(usersData);
  };
  // Add Text into mongoose
  static addText = async (req, res) => {
    try {
      const txt = new addModel(req.body);
      await txt.save();
      return res.status(200).json({ message: "Text inserted " });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  static showText = async (req, res) => {
    const usersData = await addModel.find();
    res.send(usersData);
  };
}

module.exports = userController;
