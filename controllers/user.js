const { userModel } = require("../models/user");
const jwt = require("jsonwebtoken");

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      res.status(401).send("user exists");
      return;
    }
    const registerDetails = new userModel({ name, email, password });
    const response = await registerDetails.save();
    res.status(201).send(response);
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: "Server error", err });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) return res.status(403).send({ msg: "User not found" });

    const isValidUser = await user.comparePassword(password);

    if (user && isValidUser) {
      res.status(200).send({ msg: "Login successful", _id: user._id });
      return;
    }
    res.status(500).send({});
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  userRegister,
  userLogin,
};
