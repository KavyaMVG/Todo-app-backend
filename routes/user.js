const express = require("express");
const router = express.Router();

const registerController = require("../controllers/user");
const loginController = require("../controllers/user");

router.post("/register", registerController.userRegister);
router.post("/login", loginController.userLogin);

module.exports = router;
