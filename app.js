require("./db/connect");
const express = require("express"); // initialise express
const app = express(); // invoke (call) express
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

const notFound = require("./middleware/not-found");

// middleware

// To use static file we need to set up another middleware
app.use(express.static("./public"));

app.use(express.json()); // express middleware to use JSON

const port = 3000; // default port number

// app.get("/hello", (req, res) => {
//   res.send("Welcome to Task manager app!");
// });

app.use("/api/v1/tasks", tasks);

app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, console.log(`Server is listeninig on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();

/**
 * I need to Implement a couple of routes for this project
 *
 * app.get("/api/v1/tasks", (req, res) =>{}) -
 * app.post("/api/v1/tasks", (req, res) =>{}) -
 * app.get("/api/v1/tasks/:id", (req, res) =>{}) -
 * app.patch("/api/v1/tasks/:id", (req, res) =>{}) -
 * app.delete("/api/v1/tasks/:id", (req, res) =>{}) -
 *
 *
 *
 * app.listen(port, console.log(`Server is listeninig on port ${port}`));
 */

// 1 hr : 10 mins
