const { userModel } = require("../models/user");
const jwt = require("jsonwebtoken");

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      res.status(401).send("Email already exists. Please login");
      return;
    }
    const registerDetails = new userModel({ name, email, password });
    const response = await registerDetails.save();
    res.status(201).send(response);
  } catch (err) {
    res.status(400).send({ msg: "Server error", err });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.status(403).send({ msg: "Email is not registered. Please sign up first." });

    const isValidUser = await user.comparePassword(password);
    if(!isValidUser){
      return res.status(404).send({msg: "Incorrect password, please try again"});
    }
    if (user && isValidUser) {
      return res.status(200).send({ msg: "Login successful", _id: user._id });
    }
  } catch (err) {
    return res.status(500).send({msg: "Something went wrong on the server. Please try again later."});
  }
};

module.exports = {
  userRegister,
  userLogin,
};
