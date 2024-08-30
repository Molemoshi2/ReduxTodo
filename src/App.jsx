import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addtask } from './storeSlices/AddTask';

function App() {
  // State for managing the new task input
  const [newTask, setNewTask] = useState('');
  const [quantity,setQuantity] = useState(0)
  const [category,setCategory] = useState('food')
  
  
  // Select the task array from the store
  const readTasks = useSelector((state) => state.listArray.value);
  
  const dispatch = useDispatch();

  // Function to handle adding a task
  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addtask({ item: newTask, quantity: quantity, category: category }));
      setNewTask(''); // Clear the input field after adding the task
      //adding the tasks to the json server
      let url = 'http://localhost:3001/list'
      fetch(url,{
        method:'POST',
        headers:{ 'Content-Type': 'application/json' },
        body:JSON.stringify({item:newTask,quantity:quantity,category:category})
      }).then(
        console.log("item added")
      )
      
    }
  };

  return (
    <>
      <div>
        <h1>Shopping List</h1>
        <input 
          type="text" 
          placeholder="Enter your item" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input type="number" placeholder='Quantity' min={0} step={1} onChange={(e)=>setQuantity(e.target.value)} /> 
        <select name="category" onChange={(e)=>setCategory(e.target.value)}>
          <option value="category">category</option>
          <option value="food">Food</option>
          <option value="skin">Skin care</option>
          <option value="makeUp">Make up</option>
          <option value="clean">cleaning product</option>
          <option value="clothing">clothing</option>
          <option value="bathroom">bathroom</option>
        </select>
        <button onClick={handleAddTask}>Add</button>
        <div>
          {readTasks.map((task, index) => (
            <div key={index} className='task-container'>
                  <p>Item: {task.item}</p>
                  <p>Quantity: {task.quantity}</p>
                  <p>Category: {task.category}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

