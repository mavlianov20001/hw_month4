import React from 'react'

const Input = ({placeholder, name, handleChange}) => {
  return <> <input onChange={handleChange} type="text" placeholder={placeholder} name={name} />
  
  </>

}

export default Input