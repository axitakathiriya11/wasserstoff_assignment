const express = require("express");
const userController = require("../controllers/userControllers");

const router = express.Router();

router.post("/username", userController.userRegistration);
router.get("/userdata", userController.userData);
router.post("/add", userController.addText);
router.get("/show", userController.showText);

module.exports = router;
