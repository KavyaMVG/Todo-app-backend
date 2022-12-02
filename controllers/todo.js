const { todoModel } = require("../models/todo");

const addTodo = async (req, res) => {
  try {
    const newTodo = req.body;
    const todo = new todoModel(newTodo);
    const response = await todo.save();
    res.status(201).send({ response });
  } catch (err) {
    console.log(err);
    res.status(400).send(`server error${err}`);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const deleteId = req.query.id;
    const response = await todoModel.deleteOne({
      deleteId: deleteId,
    });
    res.status(200).send({ msg: response });
  } catch (err) {
    console.log(err);
    res.status(400).send(`server Error${err}`);
  }
};

const getAllTodo = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  try {
    const allTasks = await todoModel.find({
      userId,
    });
    res.status(200).send(allTasks);
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: "Server error", err });
  }
};

const searchTodo = async (req, res) => {
  const { search, userId } = req.query;
  if (!search) {
    return;
  }
  try {
    const response = await todoModel.find({
      title: { $regex: search, $options: "i" },
      userId: userId,
    });
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: "Server error" });
  }
};

const updatedTodo = async (req, res) => {
  try {
    const taskId = req.query.id;
    const { title, tasks, isComplete } = req.body;
    const response = await todoModel.findOneAndUpdate(
      { _id: taskId.trim() },
      {
        title: title,
        tasks: tasks,
        isComplete: isComplete,
      },
      { new: true }
    );
    res.status(200).send({ response });
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: "Server error", err });
  }
};

module.exports = {
  addTodo,
  deleteTodo,
  updatedTodo,
  searchTodo,
  getAllTodo,
};
