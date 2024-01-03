const express = require("express");
const router = express.Router();
const Task = require("../models/Tasks");
const { body, validationResult } = require("express-validator");

const validateTaskData = [
  body("title").notEmpty().withMessage("Title cannot be empty"),
  body("description").notEmpty().withMessage("Description cannot be empty"),
];

// Helper function for sending error responses
const sendErrorResponse = (res, status, errors) => {
  return res.status(status).json({ errors });
};

// Function to find a task by ID
const findTaskById = async (id) => {
  try {
    const task = await Task.findById(id);
    return task;
  } catch (err) {
    throw err;
  }
};

router.post("/tasks", validateTaskData, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return sendErrorResponse(res, 400, errors.array());
  }

  try {
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
    });
    const savedTask = await task.save();
    return res.json(savedTask);
  } catch (err) {
    next(err);
  }
});

router.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await Task.find();
    return res.json(tasks);
  } catch (err) {
    next(err);
  }
});

router.get("/tasks/:id", async (req, res, next) => {
  try {
    const task = await findTaskById(req.params.id);
    if (!task) {
      return sendErrorResponse(res, 404, [
        { msg: "The task with given ID not found" },
      ]);
    }
    return res.json(task);
  } catch (err) {
    next(err);
  }
});

router.put("/tasks/:id", validateTaskData, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return sendErrorResponse(res, 400, errors.msg);
  }

  try {
    const task = await findTaskById(req.params.id);
    if (!task) {
      return sendErrorResponse(res, 404, [
        { msg: "The task with given ID not found" },
      ]);
    }
    task.title = req.body.title;
    task.description = req.body.description;
    const updatedTask = await task.save();
    return res.json(updatedTask);
  } catch (err) {
    next(err);
  }
});

router.delete("/tasks/:id", async (req, res, next) => {
  try {
    const task = await findTaskById(req.params.id);
    if (!task) {
      return sendErrorResponse(res, 404, [
        { msg: "The task with given ID not found" },
      ]);
    }
    await task.remove();
    return res.json({ message: "The task with given ID is deleted" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
