const jwt = require("jsonwebtoken")
require("dotenv").config();


const authentate = (req, res, next)=>{
     
    const token = req.headers.authorization.split(" ")[1]
    //console.log(token)

        jwt.verify(token, process.env.key, function(err, decoded) {
          if(err){
            console.log(err)
            res.status(401).send({"message": "Something went wrong......"})
          }
          else{
            req.body.userId = decoded.userId 
            console.log(decoded)
            next()
          }
      });
} 

module.exports = { authentate }