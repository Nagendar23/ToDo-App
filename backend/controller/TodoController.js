const TodoModel = require('../models/TodoModel.js');
// const todoModel = require('../models/TodoModel.js');


//get route 
module.exports.getToDo = async(req,res)=>{
    const toDo = await TodoModel.find();
    res.send(toDo);
    console.log(toDo);
}

//save todo
module.exports.saveToDo = async(req,res)=>{
    const {text} = req.body;
    TodoModel
    .create({text})
    .then((data)=>{
        console.log("added successfully",data)
        res.status(200).send(data)
    })
    .catch((err)=>console.log(err));
}

//update todo
module.exports.updateToDo = async(req,res)=>{
        const {id,text}= req.body
        let updatedTodo =  await TodoModel.findByIdAndUpdate(id,{text},{new:true})
        .then((data)=>{
            console.log("Updated the todo successfully",data)
            res.status(200).send("updated successfully")
        })
        .catch((err)=>console.log(err))
}


//delete todo 
module.exports.deleteToDo = async(req,res)=>{
    const {id} = req.body;
    await TodoModel.findByIdAndDelete(id)
    .then((data)=>{
        console.log("Deleted the todo successfully",data)
        res.status(200).send("deleted successfully")
    })
    .catch((err)=>console.log(err))
}