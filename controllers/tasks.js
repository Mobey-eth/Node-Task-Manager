const getAllTasks = (req, res) => {
  res.send("Get All Tasks");
};

const createTask = (req, res) => {
  console.log(req.body); // This will log out the data we want to post to the database
  res.json(req.body);
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
