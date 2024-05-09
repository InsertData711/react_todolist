import React, { useEffect, useState } from "react";
import TodolistItem from "../TodolistItem/TodolistItem";
import { AddedTodo } from "../addedTodo/AddedTodo";
import "./Todolist.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const Todolist = () => {
  const [todolist, setTodolist] = useState([]);

  // localsaved data
  useEffect(() => {
    setTodolist([
      { id: 1, name: "study", bool: false },
      { id: 2, name: "shopping", bool: false },
      { id: 3, name: "work", bool: false },
      { id: 4, name: "gmy", bool: false },
    ]);
  }, []);

  // mock-api saved data
  // useEffect(() => {
  //   axios
  //     .get("/api/todolist")
  //     .then((response) => {
  //       setTodolist(response.data.todolist);
  //     })
  //     .catch((error) => {
  //       console.error(`Error fetching todo list: ${error}`);
  //     });
  // }, []);

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
          <TodolistItem todo={todo} key={todo.id} toggleBool={toggleBool} />
          // <Link to={`/todo/${todo.id}`}>{todo.name}</Link>
        ))}
      </ul>
    </>
  );
};
