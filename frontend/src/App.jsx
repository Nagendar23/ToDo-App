import React, { useEffect, useState } from 'react'
import './App.css'
import ToDo from './components/ToDo'
import Login from './components/Login'
import Signup from './components/Signup'
import { addToDo, getAllToDo,updateToDo, deleteToDo } from './utils/HandleApi';
import { logout } from './utils/HandleAuth';

const App = () => {
  const [toDo, setToDo] = useState([]);
  const[text,setText] = useState('');
  const[isUpdating, setIsUpdating] = useState(false);
  const[toDoId,setToDoId] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  useEffect(()=>{
    // Check if user is already logged in
    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('username');
    if (userId && username) {
      setIsAuthenticated(true);
      setCurrentUser(username);
      getAllToDo(setToDo);
    }
  },[])

  const handleLoginSuccess = (userId) => {
    setIsAuthenticated(true);
    setCurrentUser(localStorage.getItem('username'));
    getAllToDo(setToDo);
  };

  const handleSignupSuccess = (userId) => {
    setIsAuthenticated(true);
    setCurrentUser(localStorage.getItem('username'));
    getAllToDo(setToDo);
  };

  const handleLogout = async () => {
    try {
      await logout();
      // Clear localStorage
      localStorage.removeItem('userId');
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      
      // Reset state
      setIsAuthenticated(false);
      setCurrentUser(null);
      setToDo([]);
      setText('');
      setAuthMode('login');
      console.log('Logged out successfully');
    } catch (err) {
      console.log('Logout failed:', err);
    }
  };

  const updateMode = (_id,text)=>{
    setText(text);
    setIsUpdating(true);
    setToDoId(_id);
  }

  if (!isAuthenticated) {
    return (
      <>
        {authMode === 'login' ? (
          <Login 
            onLoginSuccess={handleLoginSuccess}
            onSwitchToSignup={() => setAuthMode('signup')}
          />
        ) : (
          <Signup 
            onSignupSuccess={handleSignupSuccess}
            onSwitchToLogin={() => setAuthMode('login')}
          />
        )}
      </>
    );
  }

  return (
    <div className='App'>
      <div className="container">
        <div className="header">
          <h1>ToDo App</h1>
          <div className="user-info">
            <span className="username">Welcome, {currentUser}!</span>
            <button className='logout-btn' onClick={handleLogout}>Logout</button>
          </div>
        </div>
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