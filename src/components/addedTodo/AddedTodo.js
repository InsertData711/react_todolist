import React, { useState } from "react";
import "./AddedTodo.css";

export const AddedTodo = ({ todolist, setTodolist }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo !== "") {
      const newId = todolist.length + 1;
      setTodolist([...todolist, { id: newId, name: newTodo, bool: false }]);
      setNewTodo("");
    } else {
      alert("no input todo\nplace input todo");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo__form">
      <input
        className="todo__input"
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter new todo"
      />
      <button type="submit" className="todo__submit">
        Add Todo
      </button>
    </form>
  );
};
