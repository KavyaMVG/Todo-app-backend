const mongoose = require("mongoose");
const dotenv = require("dotenv");

const URL = process.env.MONGO_URL;
const connect = async () => {
  console.log("Connecting to db....");
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("Failed to connect to DB: ", err));
};

exports.connect = connect;
