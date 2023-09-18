import React from 'react'
import { useSelector } from 'react-redux'
import ToDoItem from './ToDoItem'

function ToDoList() {
    const todos = useSelector(state => state.todos);    
    console.log('todos:', todos);
  return (
    <div>
      <ul>
        {
            todos.map(todo => (
                todo && <ToDoItem key={todo.id} todo={todo}></ToDoItem>
            ))
        }
      </ul>
    </div>
  )
}

export default ToDoList
