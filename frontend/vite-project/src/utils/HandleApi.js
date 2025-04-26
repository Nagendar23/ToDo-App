import axios from 'axios';

const baseUrl = 'http://localhost:8000';

const getAllToDo = (setToDo) =>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        console.log('data -->',data);
        setToDo(data);
    })
}

const addToDo = (text,setText,setToDo)=>{
    axios
    .post(`${baseUrl}/save`,{text})
    .then((data)=>{
        console.log('Task added successfully',data);
        setText('');
        getAllToDo(setToDo);
    })
    .catch((err)=>console.log('failed to add the task',err));
}

const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating) => {
    axios
      .put(`${baseUrl}/update`, { id: toDoId, text })
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
  axios
    .delete(`${baseUrl}/delete/`, { data: { id } })
    .then((data) => {
      console.log("Deleted successfully:", data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log("Failed to delete:", err));
}
  
export {getAllToDo, addToDo, updateToDo, deleteToDo};