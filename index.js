

const express = require("express");
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/user.route");
const { TodoRouter } = require("./Routes/todo.route")
const cors = require('cors')

require("dotenv").config()

const PORT = process.env.PORT || 5241

const app = express();

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.send("Welcome to home")
});

app.use("/user", userRouter )
app.use("/todos", TodoRouter )

app.listen( PORT , async ()=>{

    try{

        await connection 
        console.log(`Server is running on http:localhost:${PORT}`)
    }
    catch(error){
        console.log(error)
    }
})