const mongoose = require("mongoose"); // import mongoose and store in a var

// create a new schema object
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must Provide a Name"],
    trim: true,
    maxlength: [30, "Name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
// we can add the validation to this so that we can validate the data users provided

module.exports = mongoose.model("Task", TaskSchema);
