const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: { type: String, required: true },
  tasks: { type: [String], required: true },
  userId: { type: String, required: true },
  isComplete: false,
});

const todoModel = mongoose.model("todo", todoSchema);

exports.todoModel = todoModel;
