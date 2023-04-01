import { useState, useEffect } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [ show, setShow ] = useState(false);
  const [ newTask, setNewTask ] = useState('');
  const [ tasks, setTasks ] = useState([
    {
      id: 1,
      title: 'Coding',
      completed: false
    },
    {
      id: 2,
      title: 'Eat',
      completed: false
    },
    {
      id: 3,
      title: 'Sleep',
      completed: false
    },
    {
      id: 4,
      title: 'Coding',
      completed: false
    },

  ])
  const handleShow  = () => setShow(!show)
  
  const handleChangeCheck = (event) => {
    setNewTask(event.target.value);

  }
  const handleAddTask = () => {
     setTasks((prevState) => [...prevState, 
      {
      id: Math.floor(Math.random() * 1000),
      title: newTask,
      completed: false
     }]);
     handleShow();
  }

const handleDelete = (id) => {
  const deleted = tasks.filter(el => el.id !== id);
  setTasks([...deleted])
  /// filter
}

const handleDone = (id) => {
  // const currentIndex = tasks.findIndex(task => task.id === id )
  tasks.map(task => {
    if(task.id === id) {
      return task.completed = !task.completed
    }
    return task
  })
setTasks([...tasks])
}
const handleEdit = (editedTodo) => {

  const editedList = tasks.map(task => {
    if(task.id === editedTodo.id) {
      return editedTodo
    }
    return task
  })
  setTasks(editedList)
} 




useEffect(() =>{
  const myLocalList = JSON.parse(localStorage.getItem("tasks"))
  if (myLocalList.length !== 0) {
    setTasks(myLocalList)
  }
  setTasks(myLocalList)
}, [] )


useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks) )
}, [tasks])

  const deleteAll = (()=>{
    setTasks([])
    localStorage.clear()

  })



  return (
    <div className="App">
      {show && <Modal 
      handleChangeCheck={handleChangeCheck}
      handleAdd={handleAddTask}
      handleShow={handleShow}  />}

      <Button handleClick={handleShow}>
        Открыть модалку
      </Button>

        {tasks.length !== 0 ? <Button  handleClick={deleteAll}>delete all</Button> : ""}
      
      {/* task list */}
  <TaskList 
  handleDelete={handleDelete}
  handleDone={handleDone}
  handleEdit={handleEdit}
  list={tasks} />
    </div>
  );
}

export default App;
