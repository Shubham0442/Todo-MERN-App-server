
const mongoose = require("mongoose");

const todosSchems = mongoose.Schema({
    userId: String,
    title: String,
    description: String,
    tag: String,
    status: Boolean
})

const Todo = mongoose.model("todo", todosSchems);

module.exports = { Todo };