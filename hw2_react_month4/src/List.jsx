import React from 'react'
import Todo from './Todo'

const List = ({todos}) => {
     const todoItems = todos.map(todo => <Todo key={todo.id} task={todo.task} />)
  return (
    <div>
     {todoItems}
    </div>
  )
}

export default List