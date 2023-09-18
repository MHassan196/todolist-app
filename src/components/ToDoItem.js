// ToDoItem.js
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete, removeTodo, updateTodo } from '../slices/todoSlice'
import {FaEdit} from 'react-icons/fa'
import {FaTrash} from 'react-icons/fa'

function ToDoItem({ todo }) {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const handleToggleComplete = () => {
        dispatch(toggleComplete({ id: todo.id }));
    }

    const handleDelete = () => {
        dispatch(removeTodo({ id: todo.id }));
    }

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSaveClick = (e) => {
        e.preventDefault()
        dispatch(updateTodo({ id: todo.id, text: editedText }));
        setIsEditing(false);
    }

    return (
        <div>
            <li>
                {/* <input type="checkbox" checked={todo.completed} onChange={handleToggleComplete} /> */}
                {isEditing ? (
                     <div>
                     <form key={todo.id} >
                         <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
                         <button onClick={handleSaveClick}>Save</button>
                     </form>
                 </div>
                ) : (
                    <div className='todo-item' style={{backgroundColor: todo.completed? 'rgb(104, 138, 173)' : 'rgb(43, 91, 142)'}}>
                        <div className='todo-el'>
                        <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} className='todo-name' onClick={handleToggleComplete}>{todo.text}</p>
                        </div>
                        <div className='icons'>
                        <FaEdit onClick={handleEdit} className='icon'></FaEdit>
                        <FaTrash onClick={handleDelete} className='icon fatrash'></FaTrash>
                        </div>
                    </div>
                )}
            </li>
        </div>
    )
}

export default ToDoItem;
