
const {Router} = require("express")
const {Todo} = require("../Models/Todo.model"); 
const jwt = require("jsonwebtoken");
const { authentate } = require("../Middlewares/authentation");

require("dotenv").config();

const TodoRouter = Router();
 

TodoRouter.get("/", authentate, async(req, res)=>{
    console.log(req.body)
    const userId = req.body.userId
    const allTodos = await Todo.find({ userId })
    //console.log(allTodos)
    res.send(allTodos)
}) 

TodoRouter.post("/create", authentate, async(req, res)=>{
    const { userId } = req.body 
    console.log(req.body)
    const allTodos = new Todo({ ...req.body, userId});
    await allTodos.save()
    res.send({"msg": "New todo created successfully"})
}); 

TodoRouter.patch("/:todoId", authentate, async (req, res)=>{
    const payload = req.body
    const { userId } = req.body
    const updatedTodo = await Todo.updateOne({userId: userId,_id : req.params.todoId}, {...payload})
    console.log(updatedTodo)
    res.send({ "msg": "Todo updated successfully"})
}) 

TodoRouter.delete("/:todoId", async (req, res)=>{
    const { userId } = req.body
    const deletedTodo = await Todo.findByIdAndDelete({_id : req.params.todoId, userId: userId})
    console.log(deletedTodo)
    res.send({ "msg": "todo deleted successfully"})
})


module.exports = { TodoRouter }