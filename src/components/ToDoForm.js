import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";

function ToDoForm() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newTodo.trim() !== ''){
        dispatch(addTodo({text:newTodo}));
        setNewTodo('')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add A New Todo..."
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default ToDoForm;
