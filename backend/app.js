const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/Todo.js')
require('dotenv').config();
const PORT = process.env.port || 8000;


 app.use(express.json());
 app.use(cors())


 mongoose.connect(process.env.MONGODB_URL)
 .then(()=>console.log("Connected to MongoDB"))
 .catch((err)=>console.log(err));


 app.use(router)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})