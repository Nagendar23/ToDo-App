import React, { useEffect, useState } from 'react'
import './App.css'
import ToDo from './components/ToDo'
import { addToDo, getAllToDo,updateToDo, deleteToDo } from './utils/HandleApi';

const App = () => {
  const [toDo, setToDo] = useState([]);
  const[text,setText] = useState('');
  const[isUpdating, setIsUpdating] = useState(false);
  const[toDoId,setToDoId] = useState('');

  useEffect(()=>{
    getAllToDo(setToDo);
  },[])

  const updateMode = (_id,text)=>{
    setText(text);
    setIsUpdating(true);
    setToDoId(_id);
  }

  return (
    <div className='App'>
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input type="text"
           placeholder='Add ToDo' 
           value={text}
           onChange={(e)=>{
            setText(e.target.value);
           }}
           />
        <button className='add' 
        onClick={isUpdating 
        ?  ()=> updateToDo(toDoId,text,setText,setToDo, setIsUpdating)
        : () => addToDo(text, setText, setToDo)}>
          {isUpdating ? "Update":"Add"}
          </button>       
         </div>
        <div className="list"> 
          {toDo.map((item)=>{
            return <ToDo 
            key={item._id} 
            text={item.text}
            updateMode={()=> updateMode(item._id,item.text)}
            deleteToDo={()=>deleteToDo(item._id,setToDo)} 
            />
          })}
          
        </div>
      </div>
    </div>
  )
}

export default App