
import './App.css';
import List from './List';
import Todo from './Todo'
import Input from './Input'
import Button from './Button'
import Modal from './Modal'
import { useState } from 'react';
function App() {
  const [ show, setShow ] = useState(false)
  const handleShow  = () => setShow(!show)
  const arr = [
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
    }
  ]
  return (
    <div className="App">
      {show && <Modal 
      handleShow={handleShow}  />}
      <Button handleClick={handleShow}>
        Открыть модалку
      </Button>
      <List todos={arr} />
      <Todo todo={arr}/>
      <Input placeholder={"search"} />
      
    </div>
  );
}

export default App;
