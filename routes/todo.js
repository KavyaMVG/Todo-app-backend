const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todo");

router.post("/", todoController.addTodo);
router.delete("/delete", todoController.deleteTodo);
router.put("/edit", todoController.updatedTodo);
router.get("/allTasks/:userId", todoController.getAllTodo);
router.get("/search", todoController.searchTodo);

module.exports = router;
