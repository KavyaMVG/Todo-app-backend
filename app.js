const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const database = require("./database");
const PORT = process.env.PORT;
const bodyParser = require("body-parser");
const cors = require("cors");
const todoRouter = require("./routes/todo");
const userRoutes = require("./routes/user");

app.use(bodyParser.json());

app.use(cors({ origin: "*" }));

app.use("/todo", todoRouter);
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`listening at port:${PORT}`);
  database.connect();
});
