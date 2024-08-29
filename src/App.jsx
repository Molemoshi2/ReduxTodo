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
      dispatch(addtask({ item: newTask, quantity: 2, category: 'veggies' }));
      setNewTask(''); // Clear the input field after adding the task
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

