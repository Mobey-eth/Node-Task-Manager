const Task = require("../models/Task"); // import our Tasks model

//  Import the asycn wrapper to reduce the try catch
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(201).json({ tasks });
});

const createTask = async (req, res) => {
  try {
    console.log(req.body); // This will log out the data we want to post to the database
    // const task = await Task.create({name: "Wash clothes", completed: false})

    const task = await Task.create(req.body); // the variable name is the header for my response json

    res.status(201).json({ task });
  } catch (err) {
    res.status(500).send(err.message);
    // res.send(err.message);

    //ninja way
    // res.status(500).json({ msg: err });
  }
};

const getTask = async (req, res) => {
  // res.json({ id: req.params.id }); // parses the task id into json as a response object
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `Task at ${taskID} not found` });
    }

    res.status(201).json({ task });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `Task at ${taskID} not found` });
    }

    res.status(201).json({ msg: `task deleted at ${taskID}`, task: task });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    // we will keep getting the old values unless we start using the options value
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `Task at ${taskID} not found` });
    }

    res.status(201).json({ task });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

/**
 * Mobi method lol...
 const getTask = async (req, res) => {
  // res.json({ id: req.params.id }); // parses the task id into json as a response object
  try {
    console.log(req.params.id);
    const singleTask = await Task.findOne({ _id: req.params.id });
    res.status(201).json({ singleTask });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

 */
