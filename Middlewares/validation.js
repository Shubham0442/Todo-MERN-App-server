
const validation  = (req, res, next)=>{
                                                                                                    
    let todo = req.body 

    if(todo.title && todo.description && todo.tag && todo.status && 
        todo.title !== "" && todo.description !== "" && todo.tag !== ""
       )
       {
           if(typeof(todo.title) === "string" && 
             typeof(todo.description) === "string" && 
             typeof(todo.tag) === "string" && 
             typeof(todo.status) === "boolean")
             {
                next();
             }
             else
             {
                res.send({"msg": "Please add correct data type"})
             }
       }
       else
       {
        res.send({"msg": "Please fill all the fields"})
       }
}

module.exports = { validation }