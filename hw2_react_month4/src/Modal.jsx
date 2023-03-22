import React, { useState } from 'react'
import classes from './Modal.module.css'
import Button from './Button'
import Input from './Input';


const Modal = ({ handleShow }) => {
    const [ text, setText ]  = useState();
    const handleChangeText = (textInput) => {
        setText(textInput)
        console.log(text, 'text');
    }
  return (
    <React.Fragment>
    <div className={classes.modalWrapper}></div>
    <div className={classes.modalContent}>
    <Button handleClick={handleShow}>Закрыть модалку</Button>
    <input 
    name='add'
     placeholder='Добавьте таск'
     onChange={(event) => handleChangeText(event.target.value)}
      />
    <Button>Добавить таск</Button>
    <Input placeholder={"input"} />
    </div>
    </React.Fragment>
  )
}

export default Modal