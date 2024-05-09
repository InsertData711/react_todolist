import React, { useEffect, useState } from "react";
import "./Main.css";
import Todo from "../../components/Todo";

const Main = () => {
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
    setTodolist([
      { id: 1, name: "study", bool: false },
      { id: 2, name: "shopping", bool: false },
      { id: 3, name: "work", bool: false },
      { id: 4, name: "gim", bool: false },
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
    <ul className="todolist">
      {todolist.map((todo) => (
        <Todo todo={todo} key={todo.id} toggleBool={toggleBool} />
      ))}
    </ul>
  );
};

export default Main;
