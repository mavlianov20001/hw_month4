import React from 'react'
import classes from './Button.module.css'
const Button = ({ children, handleClick, name }) => {

  return (
    <button 
    className={classes.button}
    onClick={handleClick}
    >
      {children}
      {/* {name} */}
    </button>
  )
}

export default Button