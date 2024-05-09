import React, { useEffect, useState } from "react";
import Todo from "../todo/Todo";
import { AddedTodo } from "../addedTodo/AddedTodo";
import "./Todolist.css";

export const Todolist = () => {
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
    setTodolist([
      { id: 1, name: "study", bool: false },
      { id: 2, name: "shopping", bool: false },
      { id: 3, name: "work", bool: false },
      { id: 4, name: "gmy", bool: false },
    ]);
  }, []);

  const toggleBool = (id) => {
    setTodolist((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, bool: !item.bool } : item
      )
    );
  };

  return (
    <>
      <AddedTodo todolist={todolist} setTodolist={setTodolist} />
      <ul className="todolist">
        {todolist.map((todo) => (
          <Todo todo={todo} key={todo.id} toggleBool={toggleBool} />
        ))}
      </ul>
    </>
  );
};
