import axios from 'axios';

const baseUrl = 'https://todo-app-mgkg.onrender.com/';

const getAllToDo = (setToDo) =>{
    const userId = localStorage.getItem('userId');
    axios
    .get(`${baseUrl}/?userId=${userId}`)
    .then(({data})=>{
        console.log('data -->',data);
        setToDo(data);
    })
    .catch((err)=>console.log('Error fetching todos:', err))
}

const addToDo = (text,setText,setToDo)=>{
    const userId = localStorage.getItem('userId');
    axios
    .post(`${baseUrl}/save`,{text, userId})
    .then((data)=>{
        console.log('Task added successfully',data);
        setText('');
        getAllToDo(setToDo);
    })
    .catch((err)=>console.log('failed to add the task',err));
}

const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating) => {
    const userId = localStorage.getItem('userId');
    axios
      .put(`${baseUrl}/update`, { id: toDoId, text, userId })
      .then((response) => {
        console.log("Updated successfully:", response.data);
        setText('');
        setIsUpdating(false);
        getAllToDo(setToDo);
      })
      .catch((err) => {
        console.log("Failed to update:", err);
      });
  };

const deleteToDo = (id, setToDo) => {
  const userId = localStorage.getItem('userId');
  axios
    .delete(`${baseUrl}/delete/`, { data: { id, userId } })
    .then((data) => {
      console.log("Deleted successfully:", data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log("Failed to delete:", err));
}
  
export {getAllToDo, addToDo, updateToDo, deleteToDo};