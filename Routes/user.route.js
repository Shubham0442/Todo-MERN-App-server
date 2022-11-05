
const { Router } = require("express");
const jwt = require('jsonwebtoken');
const { User } = require("../Models/User.model");
require("dotenv").config();
const userRouter = Router();

userRouter.post("/signup", async(req, res)=>{
     
    const payload = req.body 

    const newUser = new User(payload);

    await newUser.save()

    res.send("singup successful")
}); 

userRouter.post("/login", async (req, res)=>{

    const { email, password } = req.body; 
    const result = await User.findOne({ email, password })
    const userId = result._id
    console.log(result)

    if(result){

        const token = jwt.sign({ userId: userId , email: email}, process.env.key, { expiresIn: '1h' });
        console.log("Login Successful!")
        res.send({"token": token})
    }
    else{
        console.log("Login Fail!")
        res.send({"error": "Login Fail!"})
    }
    
}); 






module.exports = { userRouter }


