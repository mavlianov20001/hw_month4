
import './App.css';
import List from './List';
import Todo from './Todo'
import Input from './Input'
import Button from './Button'
import Modal from './Modal'
import { useState } from 'react';

function App() {
  const [ show, setShow ] = useState(false)
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState([
    {
      id: "1",
      task: 'run'
    },
    {
      id: "2",
      task: 'run'
    },
    {
      id: "3",
      task: 'run'
    },
    {
      id: "4",
      task: 'run'
    },
    
  ])
  const handleShow  = () => setShow(!show)
const addNewText = (value) => {
  setNewTask(value)
}
const addTask = () => {
  setTasks([...tasks,
    {
      id: Math.floor(Math.random() * 1000),
      task: newTask,
    }
  ])
  handleShow()
}





  return (
    <div className="App">
      {show && <Modal 
      addTask={addTask}
      addFunction={addNewText}
      handleShow={handleShow}  />}

      <Button handleClick={handleShow}>
        Открыть модалку
      </Button>
      <List todos={tasks} />
      <Todo todo={tasks}/>
      <Input placeholder={"search"} />
      
    </div>
  );
}

export default App;
