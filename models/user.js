const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  console.log(this);
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods = {
  comparePassword: async function (password) {
    console.log(password, this.password);
    return await bcrypt.compare(password, this.password);
  },
};

const userModel = mongoose.model("user", userSchema);

module.exports = {
  userModel,
  userSchema,
};
