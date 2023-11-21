const Task = require("../models/Task"); // import our Tasks model

const getAllTasks = (req, res) => {
  res.send("Get All Tasks");
};

const createTask = async (req, res) => {
  try {
    console.log(req.body); // This will log out the data we want to post to the database
    // const task = await Task.create({name: "Wash clothes", completed: false})

    const task = await Task.create(req.body); // the variable name is the header for my response json

    res.status(201).json({ task });
  } catch (err) {
    res.status(400);
    res.send(err.message);
  }
};

const getTask = (req, res) => {
  //res.send("Get single Task");
  res.json({ id: req.params.id }); // parses the task id into json as a response object
};

const updateTask = (req, res) => {
  // res.send("Update Task");
  res.json(req.body);
};

const deleteTask = (req, res) => {
  const taskId = req.params.id;
  console.log(taskId);
  // res.json({ "Deleted Task at": req.params.id });
  res.send(`task deleted at ${taskId}`);
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
