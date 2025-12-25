const TodoModel = require('../models/TodoModel.js');
// const todoModel = require('../models/TodoModel.js');


//get route 
module.exports.getToDo = async(req,res)=>{
    try {
        const { userId } = req.query;
        
        if (!userId) {
            return res.status(400).json({ message: 'userId is required' });
        }
        
        const toDo = await TodoModel.find({ userId });
        console.log("Fetched todos:", toDo);
        res.status(200).json(toDo);
    } catch(err) {
        console.log("Error fetching todos:", err);
        res.status(500).json({ message: 'Error fetching todos', error: err.message });
    }
}

//save todo
module.exports.saveToDo = async(req,res)=>{
    try {
        const {text, userId} = req.body;
        
        if (!text || !userId) {
            return res.status(400).json({ message: 'text and userId are required' });
        }
        
        const newTodo = await TodoModel.create({text, userId});
        console.log("added successfully", newTodo);
        res.status(200).json(newTodo);
    } catch(err) {
        console.log("Error saving todo:", err);
        res.status(500).json({ message: 'Error saving todo', error: err.message });
    }
}

//update todo
module.exports.updateToDo = async(req,res)=>{
    try {
        const {id, text, userId} = req.body;
        
        if (!userId) {
            return res.status(400).json({ message: 'userId is required' });
        }
        
        if (!id || !text) {
            return res.status(400).json({ message: 'id and text are required' });
        }
        
        const updatedTodo = await TodoModel.findByIdAndUpdate(id, {text}, {new: true});
        
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        
        console.log("Updated the todo successfully", updatedTodo);
        res.status(200).json(updatedTodo);
    } catch(err) {
        console.log("Error updating todo:", err);
        res.status(500).json({ message: 'Error updating todo', error: err.message });
    }
}


//delete todo 
module.exports.deleteToDo = async(req,res)=>{
    try {
        const {id, userId} = req.body;
        
        if (!userId) {
            return res.status(400).json({ message: 'userId is required' });
        }
        
        if (!id) {
            return res.status(400).json({ message: 'id is required' });
        }
        
        const deletedTodo = await TodoModel.findByIdAndDelete(id);
        
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        
        console.log("Deleted the todo successfully", deletedTodo);
        res.status(200).json({ message: 'Todo deleted successfully', todo: deletedTodo });
    } catch(err) {
        console.log("Error deleting todo:", err);
        res.status(500).json({ message: 'Error deleting todo', error: err.message });
    }
}