const TodoModel = require('../models/TodoModel.js');
// const todoModel = require('../models/TodoModel.js');


//get route 
module.exports.getToDo = async(req,res)=>{
    const { userId } = req.query;
    
    if (!userId) {
        return res.status(400).json({ message: 'userId is required' });
    }
    
    const toDo = await TodoModel.find({ userId });
    res.send(toDo);
    console.log(toDo);
}

//save todo
module.exports.saveToDo = async(req,res)=>{
    const {text, userId} = req.body;
    
    if (!userId) {
        return res.status(400).json({ message: 'userId is required' });
    }
    
    TodoModel
    .create({text, userId})
    .then((data)=>{
        console.log("added successfully",data)
        res.status(200).send(data)
    })
    .catch((err)=>console.log(err));
}

//update todo
module.exports.updateToDo = async(req,res)=>{
        const {id, text, userId}= req.body
        
        if (!userId) {
            return res.status(400).json({ message: 'userId is required' });
        }
        
        let updatedTodo =  await TodoModel.findByIdAndUpdate(id,{text},{new:true})
        .then((data)=>{
            console.log("Updated the todo successfully",data)
            res.status(200).send("updated successfully")
        })
        .catch((err)=>console.log(err))
}


//delete todo 
module.exports.deleteToDo = async(req,res)=>{
    const {id, userId} = req.body;
    
    if (!userId) {
        return res.status(400).json({ message: 'userId is required' });
    }
    
    await TodoModel.findByIdAndDelete(id)
    .then((data)=>{
        console.log("Deleted the todo successfully",data)
        res.status(200).send("deleted successfully")
    })
    .catch((err)=>console.log(err))
}